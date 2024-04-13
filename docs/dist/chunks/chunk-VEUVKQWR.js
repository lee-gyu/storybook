import {
  require_exceljs_min
} from "./chunk-JMMGNVNB.js";
import {
  cloneDeep,
  merge
} from "./chunk-EOV7BLLI.js";
import {
  __toESM
} from "./chunk-F6QKJDR3.js";

// src/data-export/modules/excel.ts
var import_exceljs = __toESM(require_exceljs_min(), 1);

// src/data-export/modules/auto-size-utils.ts
var CachedSizeCalculator = class {
  constructor() {
    this._cached = /* @__PURE__ */ new Map();
    this._curFont = "";
    const context = new OffscreenCanvas(0, 0).getContext("2d");
    if (!context)
      throw new Error("OffscreenCanvas not supported");
    this._context = context;
  }
  setFont(font, fontSize) {
    if (this._curFont === `${fontSize} ${font}`)
      return;
    this._curFont = `${fontSize} ${font}`;
    this._context.font = `${fontSize} ${font}`;
  }
  meatText(text) {
    const cacheKey = `${text}_${this._curFont}`;
    const cached = this._cached.get(cacheKey);
    if (cached)
      return cached;
    const width = this._context.measureText(text).width;
    this._cached.set(cacheKey, width);
    return width;
  }
};
var getCalculator = /* @__PURE__ */ (() => {
  let calculator = null;
  return function createCalculatorInstance() {
    if (!calculator)
      calculator = new CachedSizeCalculator();
    return calculator;
  };
})();
function getCellValueWidth(text, font, fontSize) {
  const calculator = getCalculator();
  calculator.setFont(font, fontSize);
  return calculator.meatText(text);
}
function getCellText(cell) {
  if (typeof cell.value === "boolean")
    return cell.value ? "TRUE" : "FALSE";
  else if (cell.value instanceof Date)
    return "9999-99-99";
  return cell.text;
}

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
var DEFAULT_FONT_SIZE = 11;
var MINIMUM_COLUMN_SIZE = 10;
var PX_PT_RATIO = 0.15;
function isExcelJSCellData(cellData) {
  return typeof cellData === "object" && cellData !== null && !(cellData instanceof Date);
}
var ExcelExportingModule = class extends BaseExportingModule {
  constructor(args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    super({
      autoSizeColumns: (_a = args.autoSizeColumns) != null ? _a : false,
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
  _applyStyleAttrs(sheet, data) {
    var _a, _b;
    const endColumn = data.reduce((col, row) => Math.max(col, row.length), 0);
    const commonStyle = this.args.commonStyle || {};
    const endRow = data.length;
    for (let col = 0; col < endColumn; ++col) {
      const argColumnStyle = this.args.columnStyle[col];
      const columnStyleObj = argColumnStyle ? merge(commonStyle || {}, argColumnStyle) : cloneDeep(commonStyle || {});
      const hasStyle = Object.keys(columnStyleObj).length > 0;
      for (let row = 0; row < endRow; ++row) {
        const cellData = data[row][col];
        const cellRow = row + 1;
        const cellCol = col + 1;
        const cell = sheet.getCell(cellRow, cellCol);
        if (isExcelJSCellData(cellData)) {
          if (cellData.cellMerged)
            sheet.mergeCells(cellRow, cellCol, row + ((_a = cellData.cellMerged.rowSpan) != null ? _a : 1), col + ((_b = cellData.cellMerged.colSpan) != null ? _b : 1));
          if (cellData.style)
            cell.style = merge(columnStyleObj, cellData.style);
          else if (hasStyle)
            cell.style = columnStyleObj;
          if (cellData.comment)
            cell.note = cellData.comment;
        } else if (hasStyle)
          cell.style = columnStyleObj;
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
    const {
      columnWidthList = [],
      rowHeightList = []
    } = args;
    (_a = args.imageResources) == null ? void 0 : _a.forEach((res) => workbook.addImage(res));
    addRows();
    this._applyStyleAttrs(worksheet, data);
    this._insertImages(worksheet);
    if (this.args.autoSizeColumns)
      autoSizeColumns();
    else
      columnWidthList.forEach((width, index) => worksheet.getColumn(index + 1).width = width);
    rowHeightList.forEach((height, index) => worksheet.getRow(index + 1).height = height);
    function autoSizeColumns() {
      var _a2;
      const columnLen = worksheet.columns.length;
      for (let i = 0; i < columnLen; i++) {
        const column = worksheet.getColumn(i + 1);
        let maxWidth = (_a2 = columnWidthList[i + 1]) != null ? _a2 : MINIMUM_COLUMN_SIZE;
        column.eachCell({ includeEmpty: false }, (cell) => {
          var _a3, _b, _c, _d;
          const fontSize = `${(_b = (_a3 = cell.font) == null ? void 0 : _a3.size) != null ? _b : DEFAULT_FONT_SIZE}pt`;
          const fontFamily = (_d = (_c = cell.font) == null ? void 0 : _c.name) != null ? _d : "'Malgun Gothic'";
          const measured = getCellValueWidth(getCellText(cell), fontFamily, fontSize);
          maxWidth = Math.max(maxWidth, measured * PX_PT_RATIO);
        });
        column.width = maxWidth;
      }
    }
    function addRows() {
      data.forEach((dataRow) => {
        const sheetRow = worksheet.addRow(null);
        dataRow.forEach((cellData, colId) => {
          const value = isExcelJSCellData(cellData) ? cellData.value : cellData;
          if (!isEmptyValue(value))
            sheetRow.getCell(colId + 1).value = value;
        });
      });
    }
    function isEmptyValue(value) {
      return value === null || value === void 0;
    }
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
//# sourceMappingURL=chunk-VEUVKQWR.js.map
