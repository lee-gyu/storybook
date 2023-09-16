import {
  require_exceljs_min
} from "../chunks/chunk-IFSHUTTT.js";
import {
  __toESM
} from "../chunks/chunk-NP7LZUD4.js";

// src/data-export/modules/excel.ts
var import_exceljs = __toESM(require_exceljs_min());

// src/data-export/modules/base.ts
var BaseExportingModule = class {
  constructor(args) {
    this._args = args;
  }
  onBeforeDataProcess(instance, data) {
  }
  onAfterDataProcess(instance, data) {
  }
};

// src/data-export/modules/excel.ts
var DEFAULT_FONT_SIZE_PT = 12;
var ExcelExportingModule = class extends BaseExportingModule {
  constructor(args) {
    super({
      autoSizeColumns: args.autoSizeColumns ?? true,
      tableBorder: args.tableBorder ?? true,
      mainSheetName: args.mainSheetName ?? "data",
      fontFamily: args.fontFamily ?? "Malgun Gothic",
      fontSize: args.fontSize ?? DEFAULT_FONT_SIZE_PT
    });
  }
  _transferCellData(data) {
    return data.map((row) => row.map((data2) => (data2 == null ? void 0 : data2.value) ?? data2));
  }
  export(data) {
    const workbook = new import_exceljs.default.Workbook();
    const worksheet = workbook.addWorksheet(this._args.mainSheetName);
    worksheet.addRows(this._transferCellData(data));
    this.onAfterDataProcess(workbook, data);
    return workbook.xlsx.writeBuffer().then((buffer) => new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  }
};

// src/data-export/data-worker.ts
var taskItemQueue = [];
function isExcelFormat(taskItem) {
  return taskItem.format === "excel";
}
var queue = (() => {
  let isRunning = false;
  return async () => {
    if (isRunning)
      return;
    isRunning = true;
    try {
      while (taskItemQueue.length) {
        const taskItem = taskItemQueue.shift();
        if (isExcelFormat(taskItem)) {
          const excelModule = new ExcelExportingModule(taskItem.args);
          excelModule.export(taskItem.data).then((blob) => {
            postMessage({
              taskId: taskItem.taskId,
              objectURL: URL.createObjectURL(blob)
            });
          });
        }
      }
    } catch (err) {
      console.error("ocurred data-worker error", err);
    } finally {
      isRunning = false;
    }
  };
})();
onmessage = (e) => {
  const {
    command,
    taskItem
  } = e.data;
  if (command === "register-task-item") {
    taskItemQueue.push(taskItem);
    queue();
  } else {
    console.error(`unknown command ${command}. Please check the docs`, taskItem);
    throw new Error("unknown command");
  }
};
//# sourceMappingURL=data-worker.js.map
