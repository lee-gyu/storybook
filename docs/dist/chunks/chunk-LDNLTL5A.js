import {
  require_exceljs_min
} from "./chunk-JMMGNVNB.js";
import {
  require_lodash
} from "./chunk-L3QRNZQF.js";
import {
  __toESM
} from "./chunk-F6QKJDR3.js";

// src/data-export/modules/excel.ts
var import_exceljs = __toESM(require_exceljs_min(), 1);
var import_lodash = __toESM(require_lodash(), 1);

// src/data-export/modules/base.ts
var BaseExportingModule = class {
  constructor(args) {
    this.args = args;
  }
  onBeforeDataProcess(instance, data) {
  }
  onAfterDataProcess(instance, data) {
  }
};

// src/data-export/modules/excel.ts
var ExcelExportingModule = class extends BaseExportingModule {
  constructor(args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    super({
      autoSizeColumns: (_a = args.autoSizeColumns) != null ? _a : true,
      mainSheetName: (_b = args.mainSheetName) != null ? _b : "data",
      imageResources: (_c = args.imageResources) != null ? _c : [],
      imagesOnSheet: (_d = args.imagesOnSheet) != null ? _d : [],
      columnWidthList: (_e = args.columnWidthList) != null ? _e : [],
      commonStyle: (_f = args.commonStyle) != null ? _f : {},
      rowHeightList: (_g = args.rowHeightList) != null ? _g : [],
      columnStyle: (_h = args.columnStyle) != null ? _h : {},
      extraSheetList: (_i = args.extraSheetList) != null ? _i : []
    });
  }
  _transferCellData(data) {
    return data.map((row) => row.map((data2) => {
      var _a;
      return (_a = data2 == null ? void 0 : data2.value) != null ? _a : data2;
    }));
  }
  _applyStyleAttrs(sheet, data) {
    var _a, _b;
    const endColumn = data.reduce((col, row) => Math.max(col, row.length), 0);
    const endRow = data.length;
    for (let col = 0; col < endColumn; ++col) {
      const columnStyleObj = (0, import_lodash.cloneDeep)(this.args.commonStyle);
      if (this.args.columnStyle[col])
        (0, import_lodash.merge)(columnStyleObj, this.args.columnStyle[col]);
      for (let row = 0; row < endRow; ++row) {
        const cellData = data[row][col];
        if (typeof cellData === "object" && cellData) {
          if (cellData.cellMerged)
            sheet.mergeCells(row + 1, col + 1, row + ((_a = cellData.cellMerged.rowSpan) != null ? _a : 1), col + ((_b = cellData.cellMerged.colSpan) != null ? _b : 1));
          if (cellData.style)
            sheet.getCell(row + 1, col + 1).style = (0, import_lodash.merge)((0, import_lodash.cloneDeep)(columnStyleObj), cellData.style);
          if (cellData.comment)
            sheet.getCell(row + 1, col + 1).note = cellData.comment;
        } else if (Object.keys(columnStyleObj).length > 0)
          sheet.getCell(row + 1, col + 1).style = columnStyleObj;
      }
    }
  }
  _insertImages(sheet) {
    this.args.imagesOnSheet.forEach(({ imageNo, row, col, width, height }) => {
      sheet.addImage(imageNo, {
        tl: { row, col },
        ext: { width, height }
      });
    });
  }
  addNewSheet(workbook, data, args) {
    var _a;
    const worksheet = workbook.addWorksheet(args.mainSheetName);
    (_a = args.imageResources) == null ? void 0 : _a.forEach((res) => workbook.addImage(res));
    worksheet.addRows(this._transferCellData(data));
    this._applyStyleAttrs(worksheet, data);
    this._insertImages(worksheet);
    this.args.columnWidthList.forEach((width, index) => worksheet.getColumn(index + 1).width = width);
    this.args.rowHeightList.forEach((height, index) => worksheet.getRow(index + 1).height = height);
  }
  export(mainData) {
    var _a;
    const workbook = new import_exceljs.default.Workbook();
    this.addNewSheet(workbook, mainData, this.args);
    (_a = this.args.extraSheetList) == null ? void 0 : _a.forEach(({ data, args }) => this.addNewSheet(workbook, data, args));
    this.onAfterDataProcess(workbook, mainData);
    return workbook.xlsx.writeBuffer().then((buffer) => new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  }
};

// src/data-export/data-worker.ts
var taskItemQueue = [];
function isExcelFormat(taskItem) {
  return taskItem.format === "excel";
}
var queue = /* @__PURE__ */ (() => {
  let isRunning = false;
  return async () => {
    if (isRunning)
      return;
    isRunning = true;
    while (taskItemQueue.length) {
      const taskItem = taskItemQueue.shift();
      try {
        if (isExcelFormat(taskItem)) {
          new ExcelExportingModule(taskItem.args).export(taskItem.data).then((blob) => {
            postMessage({
              taskId: taskItem.taskId,
              objectURL: URL.createObjectURL(blob),
              hasError: false
            });
          }).catch((error) => {
            console.error("data-worker error", error);
            postMessage({
              taskId: taskItem.taskId,
              hasError: true,
              error,
              objectURL: ""
            });
          });
        }
      } catch (error) {
        console.error("data-worker error", error);
        postMessage({
          taskId: taskItem.taskId,
          hasError: true,
          error,
          objectURL: ""
        });
      } finally {
        isRunning = false;
      }
    }
  };
})();
if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
  self.onmessage = (e) => {
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
}
var data_worker_default = import.meta.url;

export {
  data_worker_default
};
//# sourceMappingURL=chunk-LDNLTL5A.js.map
