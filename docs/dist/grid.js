import {
  button_classNames_default,
  checkbox_classNames_default,
  createDatePickerHandler,
  createDropdownDiv,
  createDropdownItem,
  input_classNames_default,
  select_classNames_default
} from "./chunks/chunk-PAG77H4Fjs.js";
import {
  i18n_default,
  require_moment
} from "./chunks/chunk-OXAUWT7Gjs.js";
import {
  BEMClass,
  ClipboardManager,
  IRComponent,
  __async,
  __spreadProps,
  __spreadValues,
  __toESM,
  createClickOutsideHandler,
  createESCHideController,
  get2DGenerator,
  getCssText,
  getMinMaxBetween,
  getTextWidthContext,
  offsetBottomAutoUpdate,
  require_lodash,
  v4_default
} from "./chunks/chunk-IKJP23QCjs.js";

// src/js-components/grid/grid.ts
var import_lodash10 = __toESM(require_lodash());

// src/js-components/grid/cell.ts
var import_lodash2 = __toESM(require_lodash());

// src/js-components/grid/grid.classNames.ts
var block = "grid";
var grid_classNames_default = {
  grid: BEMClass({ block, modifier: ["col-resizing", "row-resizing"], state: ["is-resizing"] }),
  wrapper: BEMClass({ block, element: "wrapper" }),
  headerCell: BEMClass({ block, element: "header-cell", modifier: [], state: [] }),
  cellProgress: BEMClass({ block, element: "cell-progress" }),
  cellContent: BEMClass({ block, element: "content-cell", state: ["is-disabled", "is-selected", "is-diff", "is-same"] }),
  cellSticky: BEMClass({ block, element: "sticky-cell" }),
  cell: BEMClass({ block, element: "cell", modifier: ["select", "date-picker", "button"], state: ["is-selected", "is-disabled", "is-readonly", "is-active", "is-dragging"] }),
  cellMemo: BEMClass({ block, element: "cell-memo" }),
  cellError: BEMClass({ block, element: "cell-error" }),
  active: BEMClass({ block, element: "active" }),
  th: BEMClass({ block, element: "th", state: ["is-active"], modifier: ["col-resizing", "row-resizing"] }),
  rowSticky: BEMClass({ block, element: "sticky-row" }),
  rowHeaderSticky: BEMClass({ block, element: "sticky-row-header" }),
  thBorderBottom: BEMClass({ block, element: "tbody-bottom-th" }),
  thBorderRight: BEMClass({ block, element: "tbody-right-th" }),
  thBorderTop: BEMClass({ block, element: "tbody-top-th" }),
  thBorderLeft: BEMClass({ block, element: "tbody-left-th" }),
  textarea: BEMClass({ block, element: "textarea" }),
  focus: BEMClass({ block, element: "focus" }),
  colResizerGuide: BEMClass({ block, element: "col-resizer-guide" }),
  rowResizerGuide: BEMClass({ block, element: "row-resizer-guide" })
};

// src/js-components/grid/row.ts
var import_lodash = __toESM(require_lodash());
var GRID_HEIGHT_PROPERTY = "--grid-cell-height";
var IRGridRow = class {
  constructor({ row, height, rowType, top }) {
    this._top = -1;
    this._maxCellHeight = 0;
    this.rowElement = document.createElement("tr");
    this.cells = [];
    this.row = row;
    this.height = height;
    this._maxCellHeight = height;
    this._rowType = rowType;
    this._isMounted = false;
    this.top = top;
  }
  get rowInnerHeight() {
    return this.cells.filter((cell) => cell.visible && cell.mergeInfo.rowSpan === 1).reduce((height, cell) => Math.max(height, cell.innerHeight), 0);
  }
  get isFreezed() {
    return this.element.classList.contains(grid_classNames_default.rowSticky.blockElementName);
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this.row;
  }
  get isHeader() {
    return this.element.classList.contains(grid_classNames_default.rowHeaderSticky.blockElementName);
  }
  get cellCounts() {
    return this.cells.length;
  }
  get element() {
    return this.rowElement;
  }
  get textColor() {
    return this.rowElement.style.color;
  }
  get height() {
    return parseInt(this.rowElement.style.getPropertyValue(GRID_HEIGHT_PROPERTY) || "0");
  }
  get bottom() {
    return this._top + this.height;
  }
  get bottomByCellHeight() {
    return this._top + this._maxCellHeight;
  }
  get top() {
    return this._top;
  }
  get rowType() {
    return this._rowType;
  }
  get visible() {
    return this.element.style.display !== "none";
  }
  set rowId(row) {
    this.row = row;
    this.cells.forEach((cell) => cell.row = row);
    this.render();
  }
  set customRowZId(zId) {
    if (zId === 0)
      this.element.style.removeProperty("z-index");
    else if (this.rowElement.classList.contains(grid_classNames_default.rowHeaderSticky.blockElementName))
      this.element.style.zIndex = `calc(var(--z-index-level-6) + ${zId}`;
    else
      this.element.style.zIndex = `calc(var(--z-index-level-5) + ${zId}`;
  }
  set textColor(color) {
    this.rowElement.style.color = color;
  }
  set height(height) {
    this.rowElement.style.setProperty(GRID_HEIGHT_PROPERTY, `${height}px`);
    this.onChangedHeight(this, height);
  }
  set top(value) {
    this._top = value;
    this.element.setAttribute("data-top", value.toString());
    if (this.isFreezed)
      this.element.style.top = `${value}px`;
  }
  set visible(visible) {
    if (visible) {
      this.element.style.removeProperty("display");
      this.render();
    } else
      this.element.style.display = "none";
  }
  unmount() {
    this._isMounted = false;
    this.rowElement.remove();
  }
  updateMaxCellHeight() {
    const rowHeight = this.height;
    this._maxCellHeight = this.cells.reduce((h, cell) => {
      var _a;
      return Math.max(h, (_a = cell.height) != null ? _a : rowHeight);
    }, rowHeight);
  }
  removeCells(left, right) {
    import_lodash.default.range(left, right + 1).forEach((col) => this.cells[col].element.remove());
    const removedCols = 1 + right - left;
    this.cells.splice(left, removedCols);
    import_lodash.default.range(left, this.cells.length).forEach((col) => {
      this.cells[col].col -= removedCols;
      this.cells[col].render();
    });
  }
  addCell(cell) {
    this.cells.push(cell);
    this.rowElement.appendChild(cell.element);
    if (this.isMounted)
      cell.render();
  }
  insertCells(cells, col) {
    if (this.cells.length < col)
      throw new Error(`Out of length at the row. the length is ${this.cells.length} and you tried inserting with ${col}`);
    const target = this.cells[col].element;
    import_lodash.default.range(col, this.cells.length).forEach((id) => {
      this.cells[id].col += cells.length;
      this.cells[id].render();
    });
    this.cells.splice(col, 0, ...cells);
    (0, import_lodash.default)(cells).forEach((cell) => {
      target.insertAdjacentElement("beforebegin", cell.element);
      if (this.isMounted)
        cell.render();
    });
  }
  render() {
    if (this.visible)
      this.cells.forEach((cell) => cell.render());
  }
  getCell(col) {
    const cell = this.cells[col];
    if (!cell)
      throw new Error(`Not found cell ${this.row}, ${col}`);
    return cell;
  }
  *getCellGenerator(left = 0, right = this.cells.length - 1) {
    for (let c = left; c <= right; ++c) {
      yield this.cells[c];
    }
  }
  setColumnVisible(col, visible) {
    this.cells[col].visible = visible;
  }
  getColumnVisible(col) {
    return this.cells[col].visible;
  }
  setAutoHeight(minSize, maxSize) {
    const height = Math.ceil(this.rowInnerHeight);
    const autoHeight = getMinMaxBetween(isNaN(height) ? 0 : height, minSize, maxSize);
    if (this.height !== autoHeight) {
      this.height = autoHeight;
      return true;
    }
    return false;
  }
  getCellLeft(col) {
    return parseInt(this.cells[col].element.style.left || "0");
  }
  setCellLeft(col, left) {
    this.cells[col].element.style.left = `${left}px`;
  }
  setStickyHeader(fixedColCount) {
    (0, import_lodash.default)(this.cells).take(fixedColCount).forEach((cell) => cell.freeze());
    (0, import_lodash.default)(this.cells).drop(fixedColCount).takeWhile((cell) => cell.isFreezed).forEach((cell) => cell.unfreeze());
  }
  mount(tbody, target) {
    if (this.isMounted)
      return;
    if (!target)
      tbody.appendChild(this.element);
    else
      target.insertAdjacentElement("beforebegin", this.element);
    this.render();
    this._isMounted = true;
    this.onMounted(this);
  }
  freeze() {
    this.element.classList.add(grid_classNames_default.rowSticky.blockElementName);
    this.element.style.top = `${this.top}px`;
  }
  freezeHeader() {
    this.element.classList.add(grid_classNames_default.rowHeaderSticky.blockElementName, grid_classNames_default.rowSticky.blockElementName);
    this.element.style.top = `${this.top}px`;
  }
  unfreeze() {
    this.element.classList.remove(grid_classNames_default.rowSticky.blockElementName);
    this.element.style.removeProperty("top");
  }
  onMounted(_row) {
  }
  onChangedHeight(_row, _height) {
  }
};

// src/js-components/grid/utils.ts
function checkContainsInRange(row, col, range) {
  return checkRowContainsInRange(row, range) && checkColContainsInRange(col, range);
}
function getCellElementRowCol(cell) {
  const row = parseInt(cell.getAttribute("data-row") || "-1");
  const col = parseInt(cell.getAttribute("data-col") || "-1");
  if (row === -1 || col === -1)
    throw new Error("Invalid cell");
  return { row, col };
}
function checkRowContainsInRange(row, range) {
  return row >= range.top && row <= range.bottom;
}
function checkColContainsInRange(col, range) {
  return col >= range.left && col <= range.right;
}
function toggleClass(element, cls, addFlag) {
  if (addFlag)
    element.classList.add(cls);
  else
    element.classList.remove(cls);
}
function getCellInnerHeight(element) {
  let child = element.firstChild;
  let maxHeight = 0;
  while (child) {
    let grandChild = child.firstChild;
    while (grandChild) {
      maxHeight = Math.max(grandChild.offsetHeight, maxHeight);
      grandChild = grandChild.nextSibling;
    }
    child = child.nextSibling;
  }
  return maxHeight;
}

// src/js-components/grid/cell.ts
var DEFAULT_ROW_PADDING = 13;
var calculateCellInnerHeight = (cell, _metaInfo) => {
  return DEFAULT_ROW_PADDING + getCellInnerHeight(cell);
};
var ICON_SIZE = 20;
var ICON_HORIZONTAL_GAP = 5;
var calculateCellInnerWidth = (cell, metaInfo) => {
  const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
  const iconWidth = [metaInfo.icon, metaInfo.sortOrder].reduce((count, icon) => icon ? count + 1 : count, 0) * (ICON_SIZE + ICON_HORIZONTAL_GAP);
  const lines = `${metaInfo.text || ""}`.split("\n");
  const firstLine = lines[0] || "";
  return (0, import_lodash2.default)(lines).drop(1).reduce(
    (width, line) => Math.max(width, context.calculateWidth(line)),
    iconWidth + context.calculateWidth(firstLine)
  );
};
var deactivationClsList = [
  grid_classNames_default.th["is-active"],
  grid_classNames_default.thBorderBottom.blockElementName,
  grid_classNames_default.thBorderRight.blockElementName,
  grid_classNames_default.thBorderTop.blockElementName,
  grid_classNames_default.thBorderLeft.blockElementName
];
var IRGridCell = class {
  constructor({ row, col, tag, metaInfo, cellRenderer }) {
    this._isEditing = false;
    this._row = -1;
    this._col = -1;
    this._lastEditSelection = { start: 0, end: 0 };
    this._element = document.createElement(tag);
    this._element.rowSpan = 1;
    this._element.colSpan = 1;
    this._metaInfo = __spreadValues({}, metaInfo);
    this._cellRenderer = cellRenderer;
    this._uuid = v4_default();
    this.row = row;
    this.col = col;
    this._element.onclick = () => this.onClick(this);
    this._element.onmouseup = (ev) => {
      if (ev.button === 2)
        this.onRightClick(this, ev);
    };
    this._element.ondblclick = () => this.onDblClick(this);
    this._metaInfo.onCalculateWidth = calculateCellInnerWidth;
    this._metaInfo.onCalculateHeight = calculateCellInnerHeight;
  }
  get isFreezed() {
    return this._element.classList.contains(grid_classNames_default.cellSticky.blockElementName) || this._element.tagName === "TH";
  }
  get uuid() {
    return this._uuid;
  }
  get dropDisabled() {
    return this._metaInfo.dropDisabled;
  }
  get isHeaderCell() {
    return this._element.tagName === "TH";
  }
  get isMerged() {
    return this.mergeInfo.rowSpan > 1 || this.mergeInfo.colSpan > 1;
  }
  get isSelected() {
    return this._element.classList.contains(grid_classNames_default.cell["is-selected"]);
  }
  get innerHeight() {
    if (this._metaInfo.onCalculateHeight)
      return this._metaInfo.onCalculateHeight(this._element, this._metaInfo);
    else
      return getCellInnerHeight(this._element);
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this._element.rowSpan - 1,
      right: this.col + this._element.colSpan - 1
    };
  }
  get innerWidth() {
    if (this._metaInfo.onCalculateWidth)
      return this._metaInfo.onCalculateWidth(this._element, this._metaInfo);
    else
      return 0;
  }
  get isEditing() {
    return this._isEditing;
  }
  get mergeInfo() {
    return {
      rowSpan: this._element.rowSpan,
      colSpan: this._element.colSpan
    };
  }
  get mergeMain() {
    return this._mergeMain;
  }
  get row() {
    return this._row;
  }
  get col() {
    return this._col;
  }
  get bottom() {
    return this.row + this.mergeInfo.rowSpan - 1;
  }
  get right() {
    return this.col + this.mergeInfo.colSpan - 1;
  }
  get visible() {
    return this._element.style.display !== "none";
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get text() {
    const { text } = this._metaInfo;
    if (text === void 0 || text === null)
      return "";
    return text;
  }
  get cellType() {
    return this._element.getAttribute("data-type");
  }
  get value() {
    return this._metaInfo.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this._metaInfo.object;
  }
  get metaInfo() {
    return this._metaInfo;
  }
  get element() {
    return this._element;
  }
  get editable() {
    return !(this._metaInfo.editable !== true || this._metaInfo.disabled || this.onCheckReadonly() || this.isEditing);
  }
  get lastSelectionStart() {
    return this._lastEditSelection.start;
  }
  get lastSelectionEnd() {
    return this._lastEditSelection.end;
  }
  get cellInfo() {
    return this._metaInfo;
  }
  set visible(visible) {
    if (visible && !this.mergeMain) {
      this._element.style.removeProperty("display");
      this.render();
    } else
      this._element.style.display = "none";
  }
  set isDragOver(flag) {
    if (flag)
      this._element.classList.add(grid_classNames_default.cell["is-dragging"]);
    else
      this._element.classList.remove(grid_classNames_default.cell["is-dragging"]);
  }
  set text(text) {
    this.cellInfo = { text };
  }
  set cellInfo(cellInfo) {
    Object.assign(this._metaInfo, cellInfo);
    this.render();
    this._metaInfo.emitter.emit("onCellInfoChanged", { row: this.row, col: this.col });
  }
  set cellType(type) {
    this._element.setAttribute("data-type", type);
  }
  set height(height) {
    if (height)
      this._element.style.setProperty(GRID_HEIGHT_PROPERTY, `${height}px`);
    else
      this._element.style.removeProperty(GRID_HEIGHT_PROPERTY);
  }
  set mergeInfo({ rowSpan = 1, colSpan = 1 }) {
    if (rowSpan === 1)
      this.height = null;
    this._element.rowSpan = rowSpan;
    this._element.colSpan = colSpan;
    this.render();
  }
  set mergeMain(cell) {
    this._mergeMain = cell;
    this.visible = cell === void 0;
  }
  set row(row) {
    this._row = row;
    this._element.setAttribute("data-row", row.toString());
  }
  set col(col) {
    this._col = col;
    this._element.setAttribute("data-col", col.toString());
  }
  set cellRenderer(renderer) {
    this._cellRenderer = renderer;
    this.render();
  }
  select() {
    if (!this.isSelected) {
      this._element.classList.add(grid_classNames_default.cell["is-selected"]);
      this.onSelect(this);
    }
  }
  release() {
    this._element.classList.remove(grid_classNames_default.cell["is-selected"]);
    this.deactivate();
  }
  activate() {
    if (this._mergeMain)
      this._mergeMain._element.classList.add(grid_classNames_default.th["is-active"]);
    else
      this._element.classList.add(grid_classNames_default.th["is-active"]);
  }
  deactivate() {
    this.syncClassRemoveWithMergeMain(...deactivationClsList);
  }
  setBorderLeft() {
    this.syncClassAddWithMergeMain(grid_classNames_default.thBorderLeft.blockElementName);
  }
  setBorderTop() {
    this.syncClassAddWithMergeMain(grid_classNames_default.thBorderTop.blockElementName);
  }
  setBorderBottom() {
    this.syncClassAddWithMergeMain(grid_classNames_default.thBorderBottom.blockElementName);
  }
  setBorderRight() {
    this.syncClassAddWithMergeMain(grid_classNames_default.thBorderRight.blockElementName);
  }
  updateReadonlyStatus() {
    toggleClass(this._element, grid_classNames_default.cell["is-readonly"], this.onCheckReadonly());
  }
  updateCellStatus() {
    toggleClass(this._element, grid_classNames_default.cell["is-disabled"], this._metaInfo.disabled === true);
    toggleClass(this._element, "is-asc", this._metaInfo.sortOrder === "ASC");
    toggleClass(this._element, "is-desc", this._metaInfo.sortOrder === "DESC");
    this.updateReadonlyStatus();
    if (this._metaInfo.tooltip !== void 0)
      this._element.setAttribute("title", this._metaInfo.tooltip);
    else
      this._element.setAttribute("title", this._metaInfo.text || "");
    if (this._metaInfo.isError)
      this.addMark(grid_classNames_default.cellError.blockElementName);
    else if (this._metaInfo.hasMemo)
      this.addMark(grid_classNames_default.cellMemo.blockElementName);
    else if (this._mark)
      this.removeMark();
    this._element.style.textAlign = this._metaInfo.horizontalAlign || "";
    this._element.style.verticalAlign = this._metaInfo.verticalAlign || "";
    this._element.style.fontSize = this._metaInfo.fontSize || "12px";
    this._element.style.fontFamily = this._metaInfo.fontFamily || `"Noto Sans KR", sans-serif`;
    this._element.style.color = this._metaInfo.textColor || "";
    this._element.style.backgroundColor = this._metaInfo.backColor || "";
  }
  render() {
    if (this.visible) {
      this.removeChildren();
      this.updateCellStatus();
      this._element.appendChild(this._cellRenderer(this.row, this.col, this._metaInfo));
    }
  }
  doEditMode(data) {
    var _a;
    if (!this._element.isConnected)
      return false;
    if (this.editable === false)
      return false;
    this._isEditing = true;
    this.removeChildren();
    const textareaWrapper = document.createElement("div");
    const textarea = document.createElement("textarea");
    const beforeText = (_a = this._metaInfo.text) != null ? _a : "";
    textarea.className = grid_classNames_default.textarea.blockElementName;
    textarea.value = beforeText;
    if (data)
      textarea.value += data;
    textareaWrapper.appendChild(textarea);
    this._element.appendChild(textareaWrapper);
    textarea.onmousedown = (ev) => ev.stopPropagation();
    textarea.onclick = (ev) => ev.stopPropagation();
    textarea.onmouseup = (ev) => ev.stopPropagation();
    const endEditHandler = (changed, endKeyCode) => {
      var _a2;
      textarea.removeEventListener("blur", onBlurHandler);
      if (changed)
        this.cellInfo = { text: textarea.value };
      else
        textarea.value = (_a2 = this._metaInfo.text) != null ? _a2 : "";
      this._isEditing = false;
      this.render();
      this._lastEditSelection = { start: textarea.selectionStart, end: textarea.selectionEnd };
      this.onEditDone(this, changed, beforeText, endKeyCode, textarea.selectionStart, textarea.selectionEnd);
    };
    const onBlurHandler = () => endEditHandler(beforeText !== textarea.value, "");
    const cursorHandler = (ev) => {
      if (ev.key === "ArrowLeft" && textarea.selectionStart === 0 && textarea.selectionEnd === 0) {
        this.onMoveLeftOnEdit(ev.ctrlKey, ev.shiftKey);
        return true;
      }
      if (ev.key === "ArrowUp" && textarea.selectionStart === 0 && textarea.selectionEnd === 0) {
        this.onMoveUpOnEdit(ev.ctrlKey, ev.shiftKey);
        return true;
      } else if (ev.key === "ArrowRight" && textarea.selectionStart === textarea.textLength && textarea.selectionEnd === textarea.textLength) {
        this.onMoveRightOnEdit(ev.ctrlKey, ev.shiftKey);
        return true;
      } else if (ev.key === "ArrowDown" && textarea.selectionStart === textarea.textLength && textarea.selectionEnd === textarea.textLength) {
        this.onMoveDownOnEdit(ev.ctrlKey, ev.shiftKey);
        return true;
      } else if (ev.key === "Tab") {
        this.onTabOnEdit(ev.ctrlKey, ev.shiftKey);
        ev.preventDefault();
        return true;
      }
      return false;
    };
    textarea.addEventListener("blur", onBlurHandler);
    textarea.onkeydown = (ev) => {
      ev.stopPropagation();
      if (cursorHandler(ev)) {
        endEditHandler(beforeText !== textarea.value, ev.key);
        return;
      }
      if (ev.key === "Escape")
        endEditHandler(false, ev.key);
      else if (ev.key === "Enter") {
        if (ev.altKey) {
          textarea.readOnly = true;
          const start = textarea.value.substring(0, textarea.selectionStart);
          textarea.value = [
            textarea.value.substring(0, textarea.selectionStart),
            "\n",
            textarea.value.substring(textarea.selectionEnd)
          ].join("");
          textarea.readOnly = false;
          textarea.selectionEnd = start.length + 1;
        } else {
          endEditHandler(beforeText !== textarea.value, ev.key);
          this.onEnterOnEdit(ev.ctrlKey, ev.shiftKey);
        }
      } else
        this.onEditKeyDown(ev, this.row, this.col, this._metaInfo);
    };
    textarea.focus();
    this.onStartEdit(this);
    return true;
  }
  clear() {
    this.cellInfo = { text: "" };
    this.onClear(this);
  }
  freeze() {
    this._element.classList.add(grid_classNames_default.cellSticky.blockElementName);
  }
  unfreeze() {
    this._element.classList.remove(grid_classNames_default.cellSticky.blockElementName);
    this._element.style.removeProperty("left");
  }
  onClick(_cell) {
  }
  onDblClick(_cell) {
  }
  onRightClick(_cell, _ev) {
  }
  onSelect(_cell) {
  }
  onEditDone(_cell, _isChanged, _beforeText, _endKeyCode, _selStart, _selEnd) {
  }
  onStartEdit(_cell) {
  }
  onClear(_cell) {
  }
  onEditKeyDown(_ev, _row, _col, _meta) {
  }
  onCheckReadonly() {
    return this._metaInfo.readonly === true;
  }
  onMoveLeftOnEdit(_ctrlKey, _shiftKey) {
  }
  onMoveRightOnEdit(_ctrlKey, _shiftKey) {
  }
  onMoveUpOnEdit(_ctrlKey, _shiftKey) {
  }
  onMoveDownOnEdit(_ctrlKey, _shiftKey) {
  }
  onTabOnEdit(_ctrlKey, _shiftKey) {
  }
  onEnterOnEdit(_ctrlKey, _shiftKey) {
  }
  removeChildren() {
    while (this._element.firstChild)
      this._element.firstChild.remove();
  }
  syncClassAddWithMergeMain(...classList) {
    if (this.mergeMain)
      this.mergeMain._element.classList.add(...classList);
    else
      this._element.classList.add(...classList);
  }
  syncClassRemoveWithMergeMain(...classList) {
    if (this.mergeMain)
      this.mergeMain._element.classList.remove(...classList);
    else
      this._element.classList.remove(...classList);
  }
  addMark(cls) {
    if (!this._mark)
      this._mark = document.createElement("div");
    this._mark.className = cls;
    this._element.appendChild(this._mark);
  }
  removeMark() {
    if (this._mark) {
      this._mark.remove();
      this._mark = void 0;
    }
  }
};

// src/js-components/grid/cell-renderer.ts
var createCellContent = (data) => {
  var _a;
  const div = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = (_a = data.text) != null ? _a : "";
  div.className = grid_classNames_default.cellContent.blockElementName;
  if (data.sortOrder !== void 0) {
    const icon = data.sortOrder === "ASC" ? "sort-ascending" : "sort-descending";
    const iconElement = document.createElement("i");
    iconElement.className = `ir-icon ir-icon--${icon}`;
    div.appendChild(iconElement);
  }
  if (data.icon) {
    const icon = document.createElement("i");
    icon.classList.add("ir-icon", `ir-icon--${data.icon}`);
    if (data.iconColor)
      icon.style.setProperty("--ir-icon-foreground-color", data.iconColor);
    div.appendChild(icon);
  }
  div.appendChild(text);
  return div;
};
var createCellContentWithIconButton = (row, col, data, onClick) => {
  var _a;
  const div = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = (_a = data.text) != null ? _a : "";
  div.className = grid_classNames_default.cellContent.blockElementName;
  if (data.icon) {
    const button = document.createElement("button");
    const icon = document.createElement("i");
    button.setAttribute("type", "button");
    button.classList.add("icon-button");
    button.ondblclick = (ev) => ev.stopPropagation();
    button.onclick = (ev) => {
      onClick && onClick(ev, row, col);
      ev.stopPropagation();
    };
    icon.classList.add("ir-icon", `ir-icon--${data.icon}`);
    if (data.iconColor)
      icon.style.setProperty("--ir-icon-foreground-color", data.iconColor);
    button.appendChild(icon);
    div.appendChild(button);
  }
  div.appendChild(text);
  return div;
};
var renderGridCellDefault = () => {
  return (_row, _col, data) => {
    data.cellType = "default";
    return createCellContent(data);
  };
};
function renderGridCellIconButton({ onClick }) {
  return (row, col, data) => {
    data.cellType = "default";
    return createCellContentWithIconButton(row, col, data, onClick);
  };
}
function renderRowNoHeaderCell(fixedRowCount, ...prevCaptionList) {
  return (row, _col, data) => {
    const div = document.createElement("div");
    const text = document.createElement("div");
    const r = row - fixedRowCount;
    data.cellType = "rowNo";
    div.className = grid_classNames_default.cellContent.blockElementName;
    const cellText = r < prevCaptionList.length ? prevCaptionList[r] : `${1 + r - prevCaptionList.length}`;
    text.innerText = cellText;
    data.text = cellText;
    div.appendChild(text);
    return div;
  };
}

// src/js-components/grid/clipboard.ts
var import_lodash3 = __toESM(require_lodash());
function getNextToken(ch) {
  switch (ch) {
    case '"':
      return "quotes";
    case "	":
      return "tab";
    case "\n":
      return "line";
    default:
      return "text";
  }
}
function createGridClipboardManager(grid) {
  return {
    getSelectedText: () => {
      const selection = grid.getSelection();
      const lineBuffer = [];
      if (selection) {
        import_lodash3.default.range(selection.top, selection.bottom + 1).forEach((row) => {
          const buffer = import_lodash3.default.range(selection.left, selection.right + 1).reduce((buffer2, col) => {
            const cell = grid.cell(row, col);
            const text = cell.text.toString().replace(/"/g, '""');
            buffer2.push(`"${text}"`);
            return buffer2;
          }, []);
          lineBuffer.push(buffer.join("	"));
        });
      }
      return lineBuffer.join("\n");
    },
    convertText: (payload) => {
      const data = [];
      const trimmedPayload = payload.replace(/\r\n/g, "\n");
      let line = [];
      let id = 0;
      function processNextLine() {
        data.push(line);
        line = [];
        ++id;
      }
      function addText(start, end) {
        line.push(trimmedPayload.substring(start, end + 1).replace(/""/g, '"'));
      }
      function processQuotesText() {
        const startId = ++id;
        while (id < trimmedPayload.length) {
          const ch = trimmedPayload[id];
          if (ch === '"') {
            if (id + 1 < trimmedPayload.length && trimmedPayload[id + 1] === '"')
              ++id;
            else
              break;
          }
          ++id;
        }
        addText(startId, id - 1);
        ++id;
      }
      function processPlainText() {
        const startId = id;
        loop:
          while (id < trimmedPayload.length) {
            const ch = trimmedPayload[id];
            switch (ch) {
              case "	":
              case "\n":
                break loop;
              default:
            }
            ++id;
          }
        addText(startId, id - 1);
      }
      function processTab() {
        ++id;
        if (id < trimmedPayload.length) {
          const ch = trimmedPayload[id];
          if (ch === '"')
            processQuotesText();
          else
            processPlainText();
        }
      }
      while (id < trimmedPayload.length) {
        const ch = trimmedPayload[id];
        const token = getNextToken(ch);
        switch (token) {
          case "quotes":
            processQuotesText();
            break;
          case "text":
            processPlainText();
            break;
          case "tab":
            processTab();
            break;
          case "line":
            processNextLine();
            break;
          default:
        }
      }
      if (line.length > 0)
        data.push(line);
      return data;
    }
  };
}

// src/js-components/grid/cursor.ts
function createGridCellCursorManager(grid) {
  const getNextYAbove = (row, col, y) => {
    var _a;
    const startRow = grid.headerRows;
    let counter = y;
    let nextRow = row;
    while (counter !== 0) {
      const currentCell = grid.cell(nextRow, col);
      const mainCell = (_a = currentCell.mergeMain) != null ? _a : currentCell;
      const tmpRow = mainCell.row - 1;
      if (tmpRow < startRow)
        break;
      if (grid.getRowVisible(tmpRow))
        ++counter;
      nextRow = tmpRow;
    }
    return nextRow;
  };
  const getNextYBelow = (row, col, y) => {
    var _a;
    const endRow = grid.getRowCount() - 1;
    let counter = y;
    let nextRow = row;
    while (counter !== 0) {
      const currentCell = grid.cell(nextRow, col);
      const mainCell = (_a = currentCell.mergeMain) != null ? _a : currentCell;
      const tmpRow = mainCell.bottom + 1;
      if (tmpRow > endRow)
        break;
      if (grid.getRowVisible(tmpRow))
        --counter;
      nextRow = tmpRow;
    }
    return nextRow;
  };
  const getNextXLeft = (row, col, x) => {
    var _a;
    const startCol = grid.headerColumns;
    let counter = x;
    let nextCol = col;
    while (counter !== 0) {
      const currentCell = grid.cell(row, nextCol);
      const mainCell = (_a = currentCell.mergeMain) != null ? _a : currentCell;
      const tmpCol = mainCell.col - 1;
      if (tmpCol < startCol)
        break;
      if (grid.getColumnVisible(tmpCol))
        ++counter;
      nextCol = tmpCol;
    }
    return nextCol;
  };
  const getNextXRight = (row, col, x) => {
    var _a;
    const endCol = grid.getColCount() - 1;
    let counter = x;
    let nextCol = col;
    while (counter !== 0) {
      const currentCell = grid.cell(row, nextCol);
      const mainCell = (_a = currentCell.mergeMain) != null ? _a : currentCell;
      const tmpCol = mainCell.right + 1;
      if (tmpCol > endCol)
        break;
      if (grid.getColumnVisible(tmpCol))
        --counter;
      nextCol = tmpCol;
    }
    return nextCol;
  };
  const getFirstActiveColumn = () => {
    let col = grid.headerColumns;
    while (!grid.getColumnVisible(col))
      ++col;
    return col;
  };
  const getLastActiveColumn = () => {
    let col = grid.getColCount() - 1;
    while (!grid.getColumnVisible(col))
      --col;
    return col;
  };
  const getFirstActiveRow = () => {
    let row = grid.headerRows;
    while (!grid.getRowVisible(row))
      ++row;
    return row;
  };
  const getLastActiveRow = () => {
    let row = grid.getRowCount() - 1;
    while (!grid.getRowVisible(row))
      --row;
    return row;
  };
  const getNextActiveRow = (row) => {
    const endRow = grid.getRowCount() - 1;
    if (endRow === row)
      return row;
    let nextRow = row + 1;
    while (!grid.getRowVisible(nextRow))
      ++nextRow;
    return nextRow;
  };
  const getBeforeActiveRow = (row) => {
    const startRow = grid.headerRows;
    if (row === startRow)
      return row;
    let beforeRow = row - 1;
    while (!grid.getRowVisible(beforeRow))
      ++beforeRow;
    return beforeRow;
  };
  const selectNextActiveCell = () => {
    var _a;
    const { activeCell } = grid;
    if (!activeCell) {
      console.warn("No active cell warning.");
      return;
    }
    const endRow = getLastActiveRow();
    const endCol = getLastActiveColumn();
    const mainCell = (_a = activeCell.mergeMain) != null ? _a : activeCell;
    if (mainCell.right === endCol) {
      if (activeCell.row === endRow)
        return;
      const firstCol = getFirstActiveColumn();
      const nextRow = getNextActiveRow(activeCell.row);
      grid.selectCell(nextRow, firstCol);
      grid.scrollInView(nextRow, firstCol);
    } else {
      const nextCol = getNextXRight(activeCell.row, mainCell.right, 1);
      grid.selectCell(activeCell.row, nextCol);
      grid.scrollOnCol(nextCol);
    }
  };
  const selectBeforeActiveCell = () => {
    var _a;
    const { activeCell } = grid;
    if (!activeCell) {
      console.warn("No active cell warning.");
      return;
    }
    const startRow = getFirstActiveRow();
    const startCol = getFirstActiveColumn();
    const mainCell = (_a = activeCell.mergeMain) != null ? _a : activeCell;
    if (mainCell.col === startCol) {
      if (activeCell.row === startRow)
        return;
      const lastCol = getLastActiveColumn();
      const beforeRow = getBeforeActiveRow(activeCell.row);
      grid.selectCell(beforeRow, lastCol);
      grid.scrollInView(beforeRow, lastCol);
    } else {
      const nextCol = getNextXLeft(activeCell.row, mainCell.col, -1);
      grid.selectCell(activeCell.row, nextCol);
      grid.scrollOnCol(nextCol);
    }
  };
  const getColIdWithMaximumRowSpanInRow = (row, left, right) => {
    var _a;
    let maxRowSpan = -1;
    let colId = -1;
    for (let col = left; col <= right; col++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      const { rowSpan } = mainCell.mergeInfo;
      if (rowSpan > maxRowSpan) {
        maxRowSpan = rowSpan;
        colId = col;
      }
    }
    return colId;
  };
  const getMaximumBottomByRow = (row, left, right) => {
    var _a;
    let maxBottom = -1;
    for (let col = left; col <= right; col++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      const { bottom } = mainCell;
      if (bottom > maxBottom)
        maxBottom = bottom;
    }
    return maxBottom;
  };
  const getMinimumTopByRow = (row, left, right) => {
    var _a;
    let minTop = 999999999;
    for (let col = left; col <= right; col++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      if (minTop > mainCell.row)
        minTop = mainCell.row;
    }
    return minTop;
  };
  const getRowIdWithMaximumColSpanInCol = (col, top, bottom) => {
    var _a;
    let maxColSpan = -1;
    let rowId = -1;
    for (let row = top; row <= bottom; row++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      const { colSpan } = mainCell.mergeInfo;
      if (colSpan > maxColSpan) {
        maxColSpan = colSpan;
        rowId = row;
      }
    }
    return rowId;
  };
  const getMaximumRightByColumn = (col, top, bottom) => {
    var _a;
    let maxRight = -1;
    for (let row = top; row <= bottom; row++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      const { right } = mainCell;
      if (right > maxRight)
        maxRight = right;
    }
    return maxRight;
  };
  const getMinimumLeftByColumn = (col, top, bottom) => {
    var _a;
    let minLeft = 999999999;
    for (let row = top; row <= bottom; row++) {
      const cell = grid.cell(row, col);
      const mainCell = (_a = cell.mergeMain) != null ? _a : cell;
      if (minLeft > mainCell.col)
        minLeft = mainCell.col;
    }
    return minLeft;
  };
  const selectNextSelection = (y, x, isExpanding) => {
    var _a;
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const mainCell = (_a = activeCell.mergeMain) != null ? _a : activeCell;
    if (!isExpanding) {
      if (y !== 0) {
        const nextRow = y < 0 ? getNextYAbove(mainCell.row, activeCell.col, y) : getNextYBelow(mainCell.bottom, activeCell.col, y);
        grid.selectCell(nextRow, activeCell.col);
        grid.scrollOnRow(nextRow);
      } else {
        const nextCol = x < 0 ? getNextXLeft(activeCell.row, mainCell.col, x) : getNextXRight(activeCell.row, mainCell.right, x);
        grid.selectCell(activeCell.row, nextCol);
        grid.scrollOnCol(nextCol);
      }
      return;
    }
    const { top, bottom, left, right } = selection;
    if (y !== 0) {
      if (y < 0) {
        const maxBottom = getMaximumBottomByRow(activeCell.row, left, right);
        if (maxBottom === bottom) {
          const colId = getColIdWithMaximumRowSpanInRow(top, left, right);
          const nextTop = getNextYAbove(top, colId, y);
          grid.selectRange(nextTop, left, bottom, right, activeCell);
          grid.scrollOnRow(nextTop);
        } else {
          const colId = getColIdWithMaximumRowSpanInRow(bottom, left, right);
          const nextBottom = getNextYAbove(bottom, colId, y);
          grid.selectRange(top, left, nextBottom, right, activeCell);
          grid.scrollOnRow(nextBottom);
        }
      } else {
        const minTop = getMinimumTopByRow(activeCell.row, left, right);
        if (minTop === top) {
          const colId = getColIdWithMaximumRowSpanInRow(bottom, left, right);
          const nextBottom = getNextYBelow(bottom, colId, y);
          grid.selectRange(top, left, nextBottom, right, activeCell);
          grid.scrollOnRow(nextBottom);
        } else {
          const colId = getColIdWithMaximumRowSpanInRow(top, left, right);
          const nextTop = getNextYBelow(top, colId, y);
          grid.selectRange(nextTop, left, bottom, right, activeCell);
          grid.scrollOnRow(nextTop);
        }
      }
    } else if (x < 0) {
      const maxRight = getMaximumRightByColumn(activeCell.col, top, bottom);
      if (maxRight === right) {
        const rowId = getRowIdWithMaximumColSpanInCol(left, top, bottom);
        const nextLeft = getNextXLeft(rowId, left, x);
        grid.selectRange(top, nextLeft, bottom, right, activeCell);
        grid.scrollOnCol(nextLeft);
      } else {
        const rowId = getRowIdWithMaximumColSpanInCol(right, top, bottom);
        const nextRight = getNextXLeft(rowId, right, x);
        grid.selectRange(top, left, bottom, nextRight, activeCell);
        grid.scrollOnCol(nextRight);
      }
    } else {
      const minLeft = getMinimumLeftByColumn(activeCell.col, top, bottom);
      if (minLeft === left) {
        const rowId = getRowIdWithMaximumColSpanInCol(right, top, bottom);
        const nextRight = getNextXRight(rowId, right, x);
        grid.selectRange(top, left, bottom, nextRight, activeCell);
        grid.scrollOnCol(nextRight);
      } else {
        const rowId = getRowIdWithMaximumColSpanInCol(left, top, bottom);
        const nextLeft = getNextXRight(rowId, left, x);
        grid.selectRange(top, nextLeft, bottom, right, activeCell);
        grid.scrollOnCol(nextLeft);
      }
    }
  };
  const selectMoveToLastColumn = (isExtending) => {
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const lastCol = getLastActiveColumn();
    if (!isExtending)
      grid.selectCell(activeCell.row, lastCol);
    else
      grid.selectRange(selection.top, activeCell.col, selection.bottom, lastCol, activeCell);
    grid.scrollOnCol(lastCol);
  };
  const selectMoveToFirstColumn = (isExtending) => {
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const firstCol = getFirstActiveColumn();
    if (!isExtending)
      grid.selectCell(activeCell.row, firstCol);
    else
      grid.selectRange(selection.top, firstCol, selection.bottom, activeCell.col, activeCell);
    grid.scrollOnCol(firstCol);
  };
  const selectMoveToLastRow = (isExtending) => {
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const lastRow = getLastActiveRow();
    if (!isExtending)
      grid.selectCell(lastRow, activeCell.col);
    else
      grid.selectRange(activeCell.row, selection.left, lastRow, selection.right, activeCell);
    grid.scrollOnRow(lastRow);
  };
  const selectMoveToFirstRow = (isExtending) => {
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const firstRow = getFirstActiveRow();
    if (!isExtending)
      grid.selectCell(firstRow, activeCell.col);
    else
      grid.selectRange(firstRow, selection.left, activeCell.bottom, selection.right, activeCell);
    grid.scrollOnRow(firstRow);
  };
  return {
    getNextYAbove,
    getNextYBelow,
    getNextXLeft,
    getNextXRight,
    selectNextActiveCell,
    selectBeforeActiveCell,
    selectNextSelection,
    selectMoveToLastColumn,
    selectMoveToFirstColumn,
    selectMoveToLastRow,
    selectMoveToFirstRow
  };
}

// ../../node_modules/.pnpm/emittery@1.0.1/node_modules/emittery/maps.js
var anyMap = /* @__PURE__ */ new WeakMap();
var eventsMap = /* @__PURE__ */ new WeakMap();
var producersMap = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/emittery@1.0.1/node_modules/emittery/index.js
var anyProducer = Symbol("anyProducer");
var resolvedPromise = Promise.resolve();
var listenerAdded = Symbol("listenerAdded");
var listenerRemoved = Symbol("listenerRemoved");
var canEmitMetaEvents = false;
var isGlobalDebugEnabled = false;
function assertEventName(eventName) {
  if (typeof eventName !== "string" && typeof eventName !== "symbol" && typeof eventName !== "number") {
    throw new TypeError("`eventName` must be a string, symbol, or number");
  }
}
function assertListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError("listener must be a function");
  }
}
function getListeners(instance, eventName) {
  const events = eventsMap.get(instance);
  if (!events.has(eventName)) {
    return;
  }
  return events.get(eventName);
}
function getEventProducers(instance, eventName) {
  const key = typeof eventName === "string" || typeof eventName === "symbol" || typeof eventName === "number" ? eventName : anyProducer;
  const producers = producersMap.get(instance);
  if (!producers.has(key)) {
    return;
  }
  return producers.get(key);
}
function enqueueProducers(instance, eventName, eventData) {
  const producers = producersMap.get(instance);
  if (producers.has(eventName)) {
    for (const producer of producers.get(eventName)) {
      producer.enqueue(eventData);
    }
  }
  if (producers.has(anyProducer)) {
    const item = Promise.all([eventName, eventData]);
    for (const producer of producers.get(anyProducer)) {
      producer.enqueue(item);
    }
  }
}
function iterator(instance, eventNames) {
  eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
  let isFinished = false;
  let flush = () => {
  };
  let queue = [];
  const producer = {
    enqueue(item) {
      queue.push(item);
      flush();
    },
    finish() {
      isFinished = true;
      flush();
    }
  };
  for (const eventName of eventNames) {
    let set = getEventProducers(instance, eventName);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      const producers = producersMap.get(instance);
      producers.set(eventName, set);
    }
    set.add(producer);
  }
  return {
    next() {
      return __async(this, null, function* () {
        if (!queue) {
          return { done: true };
        }
        if (queue.length === 0) {
          if (isFinished) {
            queue = void 0;
            return this.next();
          }
          yield new Promise((resolve) => {
            flush = resolve;
          });
          return this.next();
        }
        return {
          done: false,
          value: yield queue.shift()
        };
      });
    },
    return(_0) {
      return __async(this, arguments, function* (value) {
        queue = void 0;
        for (const eventName of eventNames) {
          const set = getEventProducers(instance, eventName);
          if (set) {
            set.delete(producer);
            if (set.size === 0) {
              const producers = producersMap.get(instance);
              producers.delete(eventName);
            }
          }
        }
        flush();
        return arguments.length > 0 ? { done: true, value: yield value } : { done: true };
      });
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
function defaultMethodNamesOrAssert(methodNames) {
  if (methodNames === void 0) {
    return allEmitteryMethods;
  }
  if (!Array.isArray(methodNames)) {
    throw new TypeError("`methodNames` must be an array of strings");
  }
  for (const methodName of methodNames) {
    if (!allEmitteryMethods.includes(methodName)) {
      if (typeof methodName !== "string") {
        throw new TypeError("`methodNames` element must be a string");
      }
      throw new Error(`${methodName} is not Emittery method`);
    }
  }
  return methodNames;
}
var isMetaEvent = (eventName) => eventName === listenerAdded || eventName === listenerRemoved;
function emitMetaEvent(emitter, eventName, eventData) {
  if (isMetaEvent(eventName)) {
    try {
      canEmitMetaEvents = true;
      emitter.emit(eventName, eventData);
    } finally {
      canEmitMetaEvents = false;
    }
  }
}
var Emittery = class {
  static mixin(emitteryPropertyName, methodNames) {
    methodNames = defaultMethodNamesOrAssert(methodNames);
    return (target) => {
      if (typeof target !== "function") {
        throw new TypeError("`target` must be function");
      }
      for (const methodName of methodNames) {
        if (target.prototype[methodName] !== void 0) {
          throw new Error(`The property \`${methodName}\` already exists on \`target\``);
        }
      }
      function getEmitteryProperty() {
        Object.defineProperty(this, emitteryPropertyName, {
          enumerable: false,
          value: new Emittery()
        });
        return this[emitteryPropertyName];
      }
      Object.defineProperty(target.prototype, emitteryPropertyName, {
        enumerable: false,
        get: getEmitteryProperty
      });
      const emitteryMethodCaller = (methodName) => function(...args) {
        return this[emitteryPropertyName][methodName](...args);
      };
      for (const methodName of methodNames) {
        Object.defineProperty(target.prototype, methodName, {
          enumerable: false,
          value: emitteryMethodCaller(methodName)
        });
      }
      return target;
    };
  }
  static get isDebugEnabled() {
    var _a, _b;
    if (typeof ((_a = globalThis.process) == null ? void 0 : _a.env) !== "object") {
      return isGlobalDebugEnabled;
    }
    const { env } = (_b = globalThis.process) != null ? _b : { env: {} };
    return env.DEBUG === "emittery" || env.DEBUG === "*" || isGlobalDebugEnabled;
  }
  static set isDebugEnabled(newValue) {
    isGlobalDebugEnabled = newValue;
  }
  constructor(options = {}) {
    var _a;
    anyMap.set(this, /* @__PURE__ */ new Set());
    eventsMap.set(this, /* @__PURE__ */ new Map());
    producersMap.set(this, /* @__PURE__ */ new Map());
    producersMap.get(this).set(anyProducer, /* @__PURE__ */ new Set());
    this.debug = (_a = options.debug) != null ? _a : {};
    if (this.debug.enabled === void 0) {
      this.debug.enabled = false;
    }
    if (!this.debug.logger) {
      this.debug.logger = (type, debugName, eventName, eventData) => {
        try {
          eventData = JSON.stringify(eventData);
        } catch (e) {
          eventData = `Object with the following keys failed to stringify: ${Object.keys(eventData).join(",")}`;
        }
        if (typeof eventName === "symbol" || typeof eventName === "number") {
          eventName = eventName.toString();
        }
        const currentTime = new Date();
        const logTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.${currentTime.getMilliseconds()}`;
        console.log(`[${logTime}][emittery:${type}][${debugName}] Event Name: ${eventName}
	data: ${eventData}`);
      };
    }
  }
  logIfDebugEnabled(type, eventName, eventData) {
    if (Emittery.isDebugEnabled || this.debug.enabled) {
      this.debug.logger(type, this.debug.name, eventName, eventData);
    }
  }
  on(eventNames, listener) {
    assertListener(listener);
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
      let set = getListeners(this, eventName);
      if (!set) {
        set = /* @__PURE__ */ new Set();
        const events = eventsMap.get(this);
        events.set(eventName, set);
      }
      set.add(listener);
      this.logIfDebugEnabled("subscribe", eventName, void 0);
      if (!isMetaEvent(eventName)) {
        emitMetaEvent(this, listenerAdded, { eventName, listener });
      }
    }
    return this.off.bind(this, eventNames, listener);
  }
  off(eventNames, listener) {
    assertListener(listener);
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
      const set = getListeners(this, eventName);
      if (set) {
        set.delete(listener);
        if (set.size === 0) {
          const events = eventsMap.get(this);
          events.delete(eventName);
        }
      }
      this.logIfDebugEnabled("unsubscribe", eventName, void 0);
      if (!isMetaEvent(eventName)) {
        emitMetaEvent(this, listenerRemoved, { eventName, listener });
      }
    }
  }
  once(eventNames) {
    let off_;
    const promise = new Promise((resolve) => {
      off_ = this.on(eventNames, (data) => {
        off_();
        resolve(data);
      });
    });
    promise.off = off_;
    return promise;
  }
  events(eventNames) {
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      assertEventName(eventName);
    }
    return iterator(this, eventNames);
  }
  emit(eventName, eventData) {
    return __async(this, null, function* () {
      var _a;
      assertEventName(eventName);
      if (isMetaEvent(eventName) && !canEmitMetaEvents) {
        throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
      }
      this.logIfDebugEnabled("emit", eventName, eventData);
      enqueueProducers(this, eventName, eventData);
      const listeners = (_a = getListeners(this, eventName)) != null ? _a : /* @__PURE__ */ new Set();
      const anyListeners = anyMap.get(this);
      const staticListeners = [...listeners];
      const staticAnyListeners = isMetaEvent(eventName) ? [] : [...anyListeners];
      yield resolvedPromise;
      yield Promise.all([
        ...staticListeners.map((listener) => __async(this, null, function* () {
          if (listeners.has(listener)) {
            return listener(eventData);
          }
        })),
        ...staticAnyListeners.map((listener) => __async(this, null, function* () {
          if (anyListeners.has(listener)) {
            return listener(eventName, eventData);
          }
        }))
      ]);
    });
  }
  emitSerial(eventName, eventData) {
    return __async(this, null, function* () {
      var _a;
      assertEventName(eventName);
      if (isMetaEvent(eventName) && !canEmitMetaEvents) {
        throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
      }
      this.logIfDebugEnabled("emitSerial", eventName, eventData);
      const listeners = (_a = getListeners(this, eventName)) != null ? _a : /* @__PURE__ */ new Set();
      const anyListeners = anyMap.get(this);
      const staticListeners = [...listeners];
      const staticAnyListeners = [...anyListeners];
      yield resolvedPromise;
      for (const listener of staticListeners) {
        if (listeners.has(listener)) {
          yield listener(eventData);
        }
      }
      for (const listener of staticAnyListeners) {
        if (anyListeners.has(listener)) {
          yield listener(eventName, eventData);
        }
      }
    });
  }
  onAny(listener) {
    assertListener(listener);
    this.logIfDebugEnabled("subscribeAny", void 0, void 0);
    anyMap.get(this).add(listener);
    emitMetaEvent(this, listenerAdded, { listener });
    return this.offAny.bind(this, listener);
  }
  anyEvent() {
    return iterator(this);
  }
  offAny(listener) {
    assertListener(listener);
    this.logIfDebugEnabled("unsubscribeAny", void 0, void 0);
    emitMetaEvent(this, listenerRemoved, { listener });
    anyMap.get(this).delete(listener);
  }
  clearListeners(eventNames) {
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    for (const eventName of eventNames) {
      this.logIfDebugEnabled("clear", eventName, void 0);
      if (typeof eventName === "string" || typeof eventName === "symbol" || typeof eventName === "number") {
        const set = getListeners(this, eventName);
        if (set) {
          set.clear();
        }
        const producers = getEventProducers(this, eventName);
        if (producers) {
          for (const producer of producers) {
            producer.finish();
          }
          producers.clear();
        }
      } else {
        anyMap.get(this).clear();
        for (const [eventName2, listeners] of eventsMap.get(this).entries()) {
          listeners.clear();
          eventsMap.get(this).delete(eventName2);
        }
        for (const [eventName2, producers] of producersMap.get(this).entries()) {
          for (const producer of producers) {
            producer.finish();
          }
          producers.clear();
          producersMap.get(this).delete(eventName2);
        }
      }
    }
  }
  listenerCount(eventNames) {
    var _a, _b, _c, _d, _e, _f;
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    let count = 0;
    for (const eventName of eventNames) {
      if (typeof eventName === "string") {
        count += anyMap.get(this).size + ((_b = (_a = getListeners(this, eventName)) == null ? void 0 : _a.size) != null ? _b : 0) + ((_d = (_c = getEventProducers(this, eventName)) == null ? void 0 : _c.size) != null ? _d : 0) + ((_f = (_e = getEventProducers(this)) == null ? void 0 : _e.size) != null ? _f : 0);
        continue;
      }
      if (typeof eventName !== "undefined") {
        assertEventName(eventName);
      }
      count += anyMap.get(this).size;
      for (const value of eventsMap.get(this).values()) {
        count += value.size;
      }
      for (const value of producersMap.get(this).values()) {
        count += value.size;
      }
    }
    return count;
  }
  bindMethods(target, methodNames) {
    if (typeof target !== "object" || target === null) {
      throw new TypeError("`target` must be an object");
    }
    methodNames = defaultMethodNamesOrAssert(methodNames);
    for (const methodName of methodNames) {
      if (target[methodName] !== void 0) {
        throw new Error(`The property \`${methodName}\` already exists on \`target\``);
      }
      Object.defineProperty(target, methodName, {
        enumerable: false,
        value: this[methodName].bind(this)
      });
    }
  }
};
var allEmitteryMethods = Object.getOwnPropertyNames(Emittery.prototype).filter((v) => v !== "constructor");
Object.defineProperty(Emittery, "listenerAdded", {
  value: listenerAdded,
  writable: false,
  enumerable: true,
  configurable: false
});
Object.defineProperty(Emittery, "listenerRemoved", {
  value: listenerRemoved,
  writable: false,
  enumerable: true,
  configurable: false
});

// src/js-components/grid/emitter.ts
var createEmitController = (grid) => {
  const emitter = new Emittery({ debug: { name: grid.uuid } });
  const emitLockSet = /* @__PURE__ */ new Set();
  emitter.on("updateCellStatus", (cellAddress) => grid.cell(cellAddress.row, cellAddress.col).updateCellStatus());
  return {
    get emitter() {
      return emitter;
    },
    emit(...args) {
      if (emitLockSet.has(args[0]))
        return;
      emitter.emit(...args);
    },
    lockEmit(key) {
      emitLockSet.add(key);
    },
    unlockEmit(key) {
      emitLockSet.delete(key);
    }
  };
};

// src/js-components/grid/finder.ts
var import_lodash4 = __toESM(require_lodash());
function createIRGridFinder(grid, args) {
  const finderOptions = {
    text: "",
    ignoreCase: true,
    matchAll: false,
    area: "all",
    direction: "top-bottom"
  };
  let found = false;
  const getStartRow = () => finderOptions.hasHeaderRows ? 0 : grid.headerRows;
  const getStartCol = () => finderOptions.hasHeaderColumns ? 0 : grid.headerColumns;
  function* CellGenerator() {
    let row = getStartRow();
    let col = getStartCol();
    const selection = grid.getSelection();
    found = false;
    while (true) {
      switch (finderOptions.area) {
        case "all":
          yield grid.cell(row, col);
          break;
        case "selected-col":
          if (!selection)
            throw new Error("No selection in finding");
          if (checkColContainsInRange(col, selection))
            yield grid.cell(row, col);
          break;
        case "selected-row":
          if (!selection)
            throw new Error("No selection in finding");
          if (checkRowContainsInRange(row, selection))
            yield grid.cell(row, col);
          break;
        case "selection":
          if (!selection)
            throw new Error("No selection in finding");
          if (checkContainsInRange(row, col, selection))
            yield grid.cell(row, col);
          break;
        case "custom":
          if (!finderOptions.customRange)
            throw new Error("Please call with customRange in 'custom' finding.");
          if (checkContainsInRange(row, col, finderOptions.customRange))
            yield grid.cell(row, col);
          break;
        default:
          break;
      }
      if (finderOptions.direction === "top-bottom") {
        ++row;
        if (row === grid.getRowCount()) {
          ++col;
          row = getStartRow();
        }
        if (col === grid.getColCount()) {
          if (found) {
            found = false;
            row = getStartRow();
            col = getStartCol();
          } else
            break;
        }
      } else {
        ++col;
        if (col === grid.getColCount()) {
          ++row;
          col = getStartCol();
        }
        if (row === grid.getRowCount()) {
          if (found) {
            found = false;
            row = getStartRow();
            col = getStartCol();
          } else
            break;
        }
      }
    }
  }
  function isMatched(cell) {
    const escaped = finderOptions.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const pattern = finderOptions.matchAll ? `^${escaped}$` : escaped;
    const flag = finderOptions.ignoreCase ? "i" : "";
    const regexp = new RegExp(pattern, flag);
    if (args.onCellCheck)
      return args.onCellCheck(regexp, cell);
    return regexp.test(cell.text);
  }
  let generator = CellGenerator();
  return {
    resetCursor: () => {
      generator = CellGenerator();
    },
    findNext: (options) => {
      if (!import_lodash4.default.isEqual(finderOptions, options))
        generator = CellGenerator();
      Object.assign(finderOptions, options);
      for (; ; ) {
        const it = generator.next();
        if (!it.done && isMatched(it.value)) {
          found = true;
          return it.value;
        } else if (it.done)
          break;
      }
      return null;
    },
    getAllMatchedCell: (options) => {
      const list = [];
      if (options)
        Object.assign(finderOptions, options);
      for (const cell of CellGenerator()) {
        if (isMatched(cell))
          list.push(cell);
      }
      return list;
    }
  };
}

// src/js-components/grid/iterator.ts
function createGridCellGenerator(grid) {
  return {
    *getSelectionGenerator({ top, left, bottom, right }) {
      right = Math.min(right, grid.getColCount() - 1);
      bottom = Math.min(bottom, grid.getRowCount() - 1);
      for (let r = top; r <= bottom; r++)
        for (let c = left; c <= right; c++)
          yield grid.cell(r, c);
    },
    *getSelectionHeaderIterator({ top, left, bottom, right }) {
      right = Math.min(right, grid.getColCount() - 1);
      bottom = Math.min(bottom, grid.getRowCount() - 1);
      for (let r = 0; r < grid.headerRows; ++r)
        for (let c = left; c <= right; ++c)
          yield grid.cell(r, c);
      for (let r = top; r <= bottom; ++r)
        for (let c = 0; c < grid.headerColumns; ++c)
          yield grid.cell(r, c);
    },
    *getSelectionHeaderBorderRight({ top, bottom }) {
      bottom = Math.min(bottom, grid.getRowCount() - 1);
      for (let r = top; r <= bottom; ++r)
        for (let c = grid.headerColumns - 1; c >= 0; --c) {
          const cell = grid.cell(r, c);
          if (cell.visible) {
            yield cell;
            break;
          }
        }
    },
    *getSelectionHeaderBorderBottom({ left, right }) {
      right = Math.min(right, grid.getColCount() - 1);
      for (let c = left; c <= right; ++c)
        for (let r = grid.headerRows - 1; r >= 0; --r) {
          const cell = grid.cell(r, c);
          if (cell.visible) {
            yield cell;
            break;
          }
        }
    }
  };
}

// src/js-components/grid/grid.command.ts
var createCommandManager = (grid, undoManager) => {
  const cellGenerator = createGridCellGenerator(grid);
  const commandHandler = {
    RESIZE_COLUMN({ col, width }) {
      const oldSize = grid.getColumnWidth(col);
      grid.setColumnWidth(col, width);
      undoManager.pushCommand({
        type: "CHANGE_COL_WIDTH",
        context: {
          col,
          newSize: width,
          oldSize
        }
      });
    },
    RESIZE_ROW({ row, height }) {
      const oldSize = grid.getRowHeight(row);
      grid.setRowHeight(row, height);
      undoManager.pushCommand({
        type: "CHANGE_ROW_HEIGHT",
        context: {
          row,
          newSize: height,
          oldSize
        }
      });
    },
    ADD_ROW(args = { height: void 0 }) {
      const row = grid.addRow(args.height);
      undoManager.pushCommand({
        type: "ADD_ROW",
        context: {
          row,
          height: args.height
        }
      });
      return row;
    },
    ADD_COLUMN(args = { width: void 0 }) {
      const col = grid.addColumn(args.width);
      undoManager.pushCommand({
        type: "ADD_COLUMN",
        context: {
          col,
          width: args.width
        }
      });
      return col;
    },
    CLEAR_CELLS(range) {
      const cellInfoList = [];
      for (const cell of cellGenerator.getSelectionGenerator(range)) {
        if (cell.metaInfo.disabled !== true && cell.onCheckReadonly() !== true && cell.metaInfo.cellType !== "select" && cell.text) {
          cellInfoList.push({
            cellUUID: cell.uuid,
            row: cell.row,
            col: cell.col,
            key: "text",
            oldValue: cell.text,
            newValue: ""
          });
          cell.clear();
        }
      }
      if (cellInfoList.length === 0)
        return;
      undoManager.pushCommand({
        type: "UPDATE_CELLS",
        context: { cellInfoList }
      });
    },
    DONE_CELL_EDIT({ row, col, beforeText, text }) {
      const cell = grid.cell(row, col);
      undoManager.pushCommand({
        type: "UPDATE_CELLS",
        context: {
          cellInfoList: [{
            cellUUID: cell.uuid,
            row,
            col,
            key: "text",
            newValue: text,
            oldValue: beforeText
          }]
        }
      });
    },
    SET_TEXT({ row, col, text }) {
      const beforeText = grid.getText(row, col);
      const cell = grid.cell(row, col);
      grid.setText(row, col, text);
      undoManager.pushCommand({
        type: "UPDATE_CELLS",
        context: {
          cellInfoList: [{
            cellUUID: cell.uuid,
            row,
            col,
            key: "text",
            newValue: text,
            oldValue: beforeText
          }]
        }
      });
    }
  };
  return {
    doCommand(command, args) {
      return commandHandler[command](args);
    }
  };
};

// src/js-components/grid/merge.ts
var import_lodash5 = __toESM(require_lodash());
function createMergeHandler(grid) {
  const mergeList = [];
  const generator = createGridCellGenerator(grid);
  const isValidatedMerging = ({ top, left, bottom, right }) => {
    return (0, import_lodash5.default)(mergeList).some(({ mergeArea }) => {
      return left <= mergeArea.right && right >= mergeArea.left && top <= mergeArea.bottom && bottom >= mergeArea.top;
    }) === false;
  };
  const getRowSpanCount = (top, bottom) => {
    return import_lodash5.default.range(top, bottom + 1).filter((r) => grid.getRowVisible(r)).reduce((cnt) => cnt + 1, 0);
  };
  const getColSpanCount = (left, right) => {
    return import_lodash5.default.range(left, right + 1).filter((c) => grid.getColumnVisible(c)).reduce((cnt) => cnt + 1, 0);
  };
  const isContainedHiddenCell = ({ top, left, bottom, right }) => {
    if (import_lodash5.default.range(top, bottom + 1).some((row) => grid.getRowVisible(row) === false) || import_lodash5.default.range(left, right + 1).some((col) => grid.getColumnVisible(col) === false))
      return true;
    return false;
  };
  const getMergeCell = (row, col) => {
    const cell = grid.cell(row, col);
    const id = mergeList.indexOf(cell);
    if (id >= 0)
      return mergeList[id];
    return void 0;
  };
  const handler = {
    isValidatedMerging,
    getMergedRowHeight: (top, bottom) => {
      return import_lodash5.default.range(top, bottom + 1).filter((id) => grid.getRowVisible(id)).reduce((height, id) => height + grid.getRowHeight(id), 0);
    },
    mergeCells: (range) => {
      if (range.top > range.bottom || range.left > range.right)
        throw new Error("Invalid range");
      else if (isValidatedMerging(range) === false)
        throw new Error("Could not merging with Conflicted cells!");
      else if (isContainedHiddenCell(range))
        throw new Error("Could not merging with hidden cells!");
      else if (range.top === range.bottom && range.left === range.right)
        throw new Error("Could not merging with single cell!");
      const mergeMain = grid.cell(range.top, range.left);
      mergeMain.height = handler.getMergedRowHeight(range.top, range.bottom);
      mergeMain.mergeInfo = { rowSpan: getRowSpanCount(range.top, range.bottom), colSpan: getColSpanCount(range.left, range.right) };
      mergeList.push(mergeMain);
      const row = grid.getRow(range.top);
      row.updateMaxCellHeight();
      if (range.top < grid.headerRows)
        row.customRowZId = grid.headerRows - range.top;
      for (const cell of generator.getSelectionGenerator(range))
        if (cell.row !== range.top || cell.col !== range.left) {
          cell.mergeMain = mergeMain;
          cell.metaInfo.text = "";
        }
    },
    splitCells: (row, col) => {
      const info = getMergeCell(row, col);
      if (!info)
        throw new Error("Could not split on a not merged cell!");
      for (const cell of generator.getSelectionGenerator(info.mergeArea)) {
        cell.mergeMain = void 0;
        cell.mergeInfo = { rowSpan: 1, colSpan: 1 };
      }
      handler.removeMergeCell(row, col);
      grid.getRow(row).updateMaxCellHeight();
    },
    isMerged: (row, col) => {
      return !isValidatedMerging({ top: row, left: col, bottom: row, right: col });
    },
    *getMergedCellGenerator(range) {
      for (const cell of generator.getSelectionGenerator(range)) {
        if (cell.mergeInfo.rowSpan > 1 || cell.mergeInfo.colSpan > 1)
          yield cell;
      }
    },
    removeMergeCell: (row, col) => {
      const info = getMergeCell(row, col);
      if (!info)
        throw new Error("Could not split on a not merged cell!");
      mergeList.splice(mergeList.indexOf(info), 1);
    },
    checkConflictingInRows(top, bottom) {
      for (const { mergeArea } of mergeList) {
        if (mergeArea.top < top && mergeArea.bottom >= top && mergeArea.bottom <= bottom || mergeArea.bottom > bottom && mergeArea.top >= top && mergeArea.top <= bottom || mergeArea.top < top && mergeArea.bottom > bottom)
          return true;
      }
      return false;
    },
    checkConflictingInColumns(left, right) {
      for (const { mergeArea } of mergeList) {
        if (mergeArea.left < left && mergeArea.right >= left && mergeArea.right <= right || mergeArea.right > right && mergeArea.left >= left && mergeArea.left <= right || mergeArea.left < left && mergeArea.right > right)
          return true;
      }
      return false;
    },
    checkCanInsertRow(rowId) {
      for (const { mergeArea } of mergeList) {
        if (mergeArea.top < rowId && mergeArea.bottom >= rowId)
          return false;
      }
      return true;
    },
    checkCanInsertColumn(columnId) {
      for (const { mergeArea } of mergeList) {
        if (mergeArea.left < columnId && mergeArea.right >= columnId)
          return false;
      }
      return true;
    }
  };
  return handler;
}

// src/js-components/grid/plugins/resizer.ts
var COL_INTERACTION_SIZE = 12;
var ROW_INTERACTION_SIZE = 8;
var getColumnNo = (cell) => {
  if (cell.mergeInfo)
    return cell.col + cell.mergeInfo.colSpan - 1;
  else
    return cell.col;
};
var getRowNo = (cell) => {
  if (cell.mergeInfo)
    return cell.row + cell.mergeInfo.rowSpan - 1;
  else
    return cell.row;
};
var Resizer = ({ grid, contextElement }, { enabledColResizer, enabledRowResizer }) => {
  (function mount() {
    const divGuide = document.createElement("div");
    let isResizing = false;
    let latestContextDownHandler = null;
    let latestClickedTime = 0;
    const resetCursor = () => {
      contextElement.classList.remove(grid_classNames_default.grid["col-resizing"]);
      contextElement.classList.remove(grid_classNames_default.grid["row-resizing"]);
      contextElement.classList.remove(grid_classNames_default.grid["is-resizing"]);
      latestContextDownHandler && contextElement.removeEventListener("mousedown", latestContextDownHandler);
    };
    const setCursor = (eventCell, clsResizing) => {
      latestContextDownHandler && contextElement.removeEventListener("mousedown", latestContextDownHandler);
      contextElement.classList.remove(grid_classNames_default.grid["col-resizing"]);
      contextElement.classList.remove(grid_classNames_default.grid["row-resizing"]);
      contextElement.classList.add(grid_classNames_default.grid[clsResizing]);
      contextElement.classList.add(grid_classNames_default.grid["is-resizing"]);
      let initXY = 0;
      let minXY = 0;
      let maxXY = 0;
      let startXY = 0;
      let size = 0;
      const getGuideX = () => {
        if (eventCell.col < grid.getFreezedColumnCount())
          return grid.scrollLeft + startXY;
        else
          return startXY;
      };
      const getGuideY = () => {
        if (eventCell.row < grid.getFreezedRowCount())
          return grid.scrollTop + startXY;
        else
          return startXY;
      };
      latestContextDownHandler = (ev) => {
        const curTime = new Date().getTime();
        if (curTime - latestClickedTime <= 500) {
          if (clsResizing === "col-resizing")
            grid.autoSizeColumn(eventCell.col);
          else
            grid.autoSizeRow(eventCell.row);
          latestClickedTime = 0;
          return;
        }
        isResizing = true;
        latestClickedTime = curTime;
        eventCell.element.classList.add(grid_classNames_default.th[clsResizing]);
        if (clsResizing === "col-resizing") {
          divGuide.className = grid_classNames_default.colResizerGuide.blockElementName;
          size = grid.getColumnWidth(getColumnNo(eventCell));
          initXY = ev.pageX;
          minXY = initXY - size + grid.minColWidth;
          maxXY = initXY - size + grid.maxColWidth;
          startXY = grid.getColumnLeft(eventCell.col) + grid.getCellWidth(eventCell);
          divGuide.style.cssText = getCssText({
            top: "0px",
            width: "0px",
            height: `${grid.height}px`,
            left: `${getGuideX()}px`
          });
        } else {
          divGuide.className = grid_classNames_default.rowResizerGuide.blockElementName;
          size = grid.getRowHeight(getRowNo(eventCell));
          initXY = ev.pageY;
          minXY = initXY - size + grid.minRowHeight;
          maxXY = initXY - size + grid.maxRowHeight;
          startXY = grid.getRow(eventCell.row).top + grid.getCellHeight(eventCell);
          divGuide.style.cssText = getCssText({
            top: `${getGuideY()}px`,
            width: `${grid.width}px`,
            height: "0px",
            left: "0px"
          });
        }
        contextElement.appendChild(divGuide);
        grid.addGlobalEventListener(document, "keydown", docKeyDownHandler);
        grid.addGlobalEventListener(document, "mouseup", docMouseUpHandler);
        grid.addGlobalEventListener(document, "mousemove", docMouseMoveHandler);
      };
      const docMouseMoveHandler = (ev) => {
        if (clsResizing === "col-resizing") {
          const diff = getMinMaxBetween(ev.pageX, minXY, maxXY) - initXY;
          divGuide.style.left = `${getGuideX() + diff}px`;
        } else {
          const diff = getMinMaxBetween(ev.pageY, minXY, maxXY) - initXY;
          divGuide.style.top = `${getGuideY() + diff}px`;
        }
      };
      const docMouseUpHandler = (ev) => {
        if (clsResizing === "col-resizing") {
          const diff = getMinMaxBetween(ev.pageX, minXY, maxXY) - initXY;
          if (Math.abs(diff) > 4) {
            grid.doCommand("RESIZE_COLUMN", { col: getColumnNo(eventCell), width: size + diff });
            latestClickedTime = 0;
          }
        } else {
          const diff = getMinMaxBetween(ev.pageY, minXY, maxXY) - initXY;
          if (Math.abs(diff) > 4) {
            grid.doCommand("RESIZE_ROW", { row: getRowNo(eventCell), height: size + diff });
            latestClickedTime = 0;
          }
        }
        removeAllEvents();
        const cell = getHeaderCellOrNull(ev);
        if (!cell)
          return;
        const clsResizing2 = getMouseCursorTypeOrNull(ev, cell);
        if (clsResizing2 !== null)
          setCursor(cell, clsResizing2);
      };
      function removeAllEvents() {
        isResizing = false;
        divGuide.remove();
        resetCursor();
        eventCell.element.classList.remove(grid_classNames_default.th[clsResizing]);
        document.removeEventListener("mousemove", docMouseMoveHandler);
        document.removeEventListener("mouseup", docMouseUpHandler);
        document.removeEventListener("keydown", docKeyDownHandler);
      }
      const docKeyDownHandler = (ev) => {
        if (ev.key === "Escape")
          removeAllEvents();
      };
      grid.addGlobalEventListener(contextElement, "mousedown", latestContextDownHandler);
    };
    const contextMouseMoveHandler = (ev) => {
      if (isResizing)
        return;
      const cell = getHeaderCellOrNull(ev);
      if (cell === null) {
        resetCursor();
        return;
      }
      const clsResizing = getMouseCursorTypeOrNull(ev, cell);
      if (clsResizing === null)
        resetCursor();
      else
        setCursor(cell, clsResizing);
    };
    const contextMouseOutHandler = (_ev) => {
      resetCursor();
    };
    grid.addGlobalEventListener(contextElement, "mousemove", contextMouseMoveHandler);
    grid.addGlobalEventListener(contextElement, "mouseout", contextMouseOutHandler);
  })();
  const getHeaderCellOrNull = (ev) => {
    const curCell = ev.target.closest("th");
    if (!curCell)
      return null;
    const [row, col] = [
      parseInt(curCell.getAttribute("data-row") || "-1"),
      parseInt(curCell.getAttribute("data-col") || "-1")
    ];
    return grid.cell(row, col);
  };
  const getMouseCursorTypeOrNull = (ev, cell) => {
    if (cell.cellType === "body-cell")
      return null;
    if (enabledColResizer && Math.abs(grid.getCellWidth(cell) - ev.offsetX) <= COL_INTERACTION_SIZE)
      return "col-resizing";
    else if (enabledRowResizer && Math.abs(grid.getCellHeight(cell) - ev.offsetY) <= ROW_INTERACTION_SIZE)
      return "row-resizing";
    else
      return null;
  };
  return grid;
};
var ResizerPlugin = (resizerOptions) => {
  return (pluginArgs) => Resizer(pluginArgs, resizerOptions);
};

// src/js-components/grid/plugins/cell-selector.ts
var import_lodash7 = __toESM(require_lodash());

// src/js-components/grid/selector.ts
var import_lodash6 = __toESM(require_lodash());
function createGridSelector(grid) {
  const generator = createGridCellGenerator(grid);
  function extendRange(range) {
    const newRange = import_lodash6.default.clone(range);
    const stack = [...generator.getSelectionGenerator(range)];
    while (stack.length) {
      const cur = stack.pop();
      if (!cur.isMerged && !cur.mergeMain)
        continue;
      const mergeArea = cur.mergeMain ? cur.mergeMain.mergeArea : cur.mergeArea;
      if (mergeArea.top < newRange.top) {
        const selection = generator.getSelectionGenerator(
          {
            top: mergeArea.top,
            left: newRange.left,
            bottom: newRange.top - 1,
            right: newRange.right
          }
        );
        for (const cell of selection)
          stack.push(cell);
        newRange.top = mergeArea.top;
      }
      if (mergeArea.left < newRange.left) {
        const selection = generator.getSelectionGenerator(
          {
            top: newRange.top,
            left: mergeArea.left,
            bottom: newRange.bottom,
            right: newRange.left - 1
          }
        );
        for (const cell of selection)
          stack.push(cell);
        newRange.left = mergeArea.left;
      }
      if (newRange.bottom < mergeArea.bottom) {
        const selection = generator.getSelectionGenerator(
          {
            top: newRange.bottom + 1,
            left: newRange.left,
            bottom: mergeArea.bottom,
            right: newRange.right
          }
        );
        for (const cell of selection)
          stack.push(cell);
        newRange.bottom = mergeArea.bottom;
      }
      if (newRange.right < mergeArea.right) {
        const selection = generator.getSelectionGenerator(
          {
            top: newRange.top,
            left: newRange.right + 1,
            bottom: newRange.bottom,
            right: mergeArea.right
          }
        );
        for (const cell of selection)
          stack.push(cell);
        newRange.right = mergeArea.right;
      }
    }
    return newRange;
  }
  function trimRange(range) {
    const trimmedRange = import_lodash6.default.clone(range);
    const beginRow = grid.headerRows;
    const beginCol = grid.headerColumns;
    const endRow = grid.getRowCount() - 1;
    const endCol = grid.getColCount() - 1;
    trimmedRange.top = getMinMaxBetween(trimmedRange.top, beginRow, endRow);
    trimmedRange.left = getMinMaxBetween(trimmedRange.left, beginCol, endCol);
    trimmedRange.bottom = getMinMaxBetween(trimmedRange.bottom, beginRow, endRow);
    trimmedRange.right = getMinMaxBetween(trimmedRange.right, beginCol, endCol);
    return trimmedRange;
  }
  return {
    extendRange: (range) => extendRange(range),
    releaseCells: (range) => {
      const trim = trimRange(range);
      for (const cell of generator.getSelectionGenerator(trim))
        cell.release();
      for (const header of generator.getSelectionHeaderIterator(trim))
        header.release();
    },
    selectRange: (range) => {
      const trim = trimRange(range);
      const extend = extendRange(trim);
      for (const cell of generator.getSelectionGenerator(extend))
        cell.select();
      for (let r = extend.top; r <= extend.bottom; ++r) {
        grid.cell(r, extend.left).setBorderLeft();
        grid.cell(r, extend.right).setBorderRight();
      }
      for (let c = extend.left; c <= extend.right; ++c) {
        grid.cell(extend.top, c).setBorderTop();
        grid.cell(extend.bottom, c).setBorderBottom();
      }
      for (const header of generator.getSelectionHeaderIterator(extend))
        header.activate();
      return extend;
    }
  };
}

// src/js-components/grid/plugins/cell-selector.ts
var MouseCellSelector = ({ grid, table }) => {
  let startCell = null;
  const selector = createGridSelector(grid);
  table.addEventListener("mousedown", (ev) => {
    if (ev.button !== 0)
      return;
    const curCell = ev.target.closest("td");
    if (!curCell || (curCell == null ? void 0 : curCell.tagName) === "TH")
      return;
    const cellAddress = getCellElementRowCol(curCell);
    startCell = grid.cell(cellAddress.row, cellAddress.col);
    grid.selectRange(startCell.row, startCell.col, startCell.bottom, startCell.right, startCell);
  });
  table.addEventListener("mousemove", (ev) => {
    if (!startCell)
      return;
    const curCell = ev.target.closest("td");
    if (!curCell || curCell.tagName === "TH")
      return;
    const cellAddress = getCellElementRowCol(curCell);
    const cell = grid.cell(cellAddress.row, cellAddress.col);
    const row = [
      startCell.row,
      startCell.bottom,
      cell.row,
      cell.bottom
    ];
    const col = [
      startCell.col,
      startCell.right,
      cell.col,
      cell.right
    ];
    const range = {
      top: Math.min(...row),
      left: Math.min(...col),
      bottom: Math.max(...row),
      right: Math.max(...col)
    };
    const extendRange = selector.extendRange(range);
    if (import_lodash7.default.isEqual(grid.getSelection(), extendRange) === false)
      grid.selectRange(extendRange.top, extendRange.left, extendRange.bottom, extendRange.right, startCell);
  });
  grid.addGlobalEventListener(document, "mouseup", () => startCell = null);
};
var MouseCellSelectorPlugin = () => {
  return MouseCellSelector;
};

// src/utils/key-controller.ts
var import_lodash8 = __toESM(require_lodash());
var KeyActionController = class {
  constructor() {
    this.keyMap = {};
  }
  addKeyAction(key, keyAction) {
    if (!this.keyMap[key])
      this.keyMap[key] = [];
    this.keyMap[key].push(keyAction);
  }
  hasKeyAction(key) {
    return this.keyMap[key] && this.keyMap[key].length > 0;
  }
  startKeyAction(ev) {
    if (this.hasKeyAction(ev.key)) {
      this.onStartKeyActionHook(ev);
      (0, import_lodash8.default)(this.keyMap[ev.key]).forEach((action) => {
        try {
          return action(ev);
        } catch (err) {
          console.error(err);
          return false;
        }
      });
      this.onEndKeyActionHook(ev);
    }
  }
  onStartKeyActionHook(_ev) {
  }
  onEndKeyActionHook(_ev) {
  }
};

// src/js-components/grid/plugins/default-key.ts
var DEFAULT_PLUGIN_OPTIONS = {
  keyMiddleware: []
};
var DefaultKey = ({ grid, contextElement }, options) => {
  const keyController = new KeyActionController();
  keyController.onEndKeyActionHook = (ev) => {
    if (ev.key.length > 1) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  };
  options.keyMiddleware.forEach(([key, keyAction]) => keyController.addKeyAction(key, keyAction));
  const textArea = document.createElement("textarea");
  const generator = createGridCellGenerator(grid);
  const {
    selectNextActiveCell,
    selectNextSelection,
    selectBeforeActiveCell,
    selectMoveToFirstRow,
    selectMoveToFirstColumn,
    selectMoveToLastColumn,
    selectMoveToLastRow
  } = createGridCellCursorManager(grid);
  textArea.className = grid_classNames_default.focus.blockElementName;
  contextElement.appendChild(textArea);
  grid.addCoreElement(textArea);
  grid.addGlobalEventListener(contextElement, "focus", () => {
    if (document.activeElement !== textArea)
      textArea.focus();
  });
  grid.addGlobalEventListener(contextElement, "mouseup", () => {
    textArea.focus();
  });
  grid.addGlobalEventListener(contextElement, "input", (ev) => {
    var _a;
    if (!grid.activeCell)
      return;
    const cell = (_a = grid.activeCell.mergeMain) != null ? _a : grid.activeCell;
    if (!cell.isEditing && ev.data)
      cell.doEditMode(ev.data);
  });
  textArea.addEventListener("paste", (ev) => grid.onNativePaste(ev));
  textArea.addEventListener("copy", (ev) => grid.onNativeCopy(ev));
  textArea.addEventListener("cut", (ev) => grid.onNativeCut(ev));
  keyController.addKeyAction("Tab", (ev) => {
    if (ev.shiftKey)
      selectBeforeActiveCell();
    else
      selectNextActiveCell();
    return true;
  });
  keyController.addKeyAction("ArrowRight", (ev) => {
    if (ev.ctrlKey)
      selectMoveToLastColumn(ev.shiftKey);
    else
      selectNextSelection(0, 1, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("ArrowUp", (ev) => {
    if (ev.ctrlKey)
      selectMoveToFirstRow(ev.shiftKey);
    else
      selectNextSelection(-1, 0, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("ArrowLeft", (ev) => {
    if (ev.ctrlKey)
      selectMoveToFirstColumn(ev.shiftKey);
    else
      selectNextSelection(0, -1, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("ArrowDown", (ev) => {
    if (ev.ctrlKey)
      selectMoveToLastRow(ev.shiftKey);
    else
      selectNextSelection(1, 0, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("Home", (ev) => {
    selectMoveToFirstColumn(ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("End", (ev) => {
    selectMoveToLastColumn(ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("PageUp", (ev) => {
    selectNextSelection(-10, 0, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("PageDown", (ev) => {
    selectNextSelection(10, 0, ev.shiftKey);
    return true;
  });
  keyController.addKeyAction("Enter", (_ev) => {
    selectNextSelection(1, 0, false);
    return true;
  });
  keyController.addKeyAction("a", (ev) => {
    if (ev.ctrlKey)
      grid.selectAll();
    return true;
  });
  keyController.addKeyAction("z", (ev) => {
    if (ev.ctrlKey)
      grid.undo();
    return true;
  });
  keyController.addKeyAction("y", (ev) => {
    if (ev.ctrlKey)
      grid.redo();
    return true;
  });
  keyController.addKeyAction("F2", (_ev) => {
    var _a;
    if (grid.activeCell === null)
      return true;
    const mainCell = (_a = grid.activeCell.mergeMain) != null ? _a : grid.activeCell;
    mainCell.doEditMode();
    return true;
  });
  keyController.addKeyAction("Delete", (_ev) => {
    const selection = grid.getSelection();
    if (!selection)
      return true;
    grid.doCommand("CLEAR_CELLS", selection);
    return true;
  });
  keyController.addKeyAction(" ", (_ev) => {
    var _a;
    const selection = grid.getSelection();
    if (!selection)
      return true;
    for (const cell of generator.getSelectionGenerator(selection)) {
      if (cell.onCheckReadonly() || cell.metaInfo.disabled)
        continue;
      if (cell.metaInfo.cellType === "checkbox") {
        (_a = cell.element.querySelector("input")) == null ? void 0 : _a.click();
      }
    }
    return true;
  });
  grid.addGlobalEventListener(contextElement, "keydown", (ev) => {
    textArea.value = "";
    keyController.startKeyAction(ev);
  });
  return grid;
};
var DefaultKeyPlugin = (options = {}) => {
  const initOptions = Object.assign(DEFAULT_PLUGIN_OPTIONS, options);
  return (args) => DefaultKey(args, initOptions);
};

// src/js-components/grid/plugins/row-selection.ts
var RowSelection = ({ grid, table }) => {
  let startCell = null;
  table.addEventListener("mousedown", (ev) => {
    if (ev.button !== 0)
      return;
    const curCell = ev.target.closest("td");
    if (!curCell || (curCell == null ? void 0 : curCell.tagName) === "TH")
      return;
    const cellAddress = getCellElementRowCol(curCell);
    startCell = grid.cell(cellAddress.row, cellAddress.col);
    grid.selectRange(startCell.row, grid.headerColumns, startCell.row, grid.getColCount(), startCell);
  });
  grid.addGlobalEventListener(document, "mouseup", () => startCell = null);
  return grid;
};
var RowSelectionPlugin = () => {
  return RowSelection;
};

// src/js-components/grid/plugins/column-fill.ts
var import_lodash9 = __toESM(require_lodash());
var DEFAULT_COLUMN_FILL_OPTIONS = {
  columnWeight: []
};
var NOT_SCHEDULED = -1;
var ColumnFill = ({ contextElement, grid, emitController }, options) => {
  let scheduled = NOT_SCHEDULED;
  const fillColumns = () => {
    const { clientWidth } = contextElement;
    let w = 0;
    if (clientWidth === 0) {
      grid.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
      return;
    }
    const totalWeight = import_lodash9.default.range(grid.getColCount()).filter((id) => grid.getColumnVisible(id)).reduce((weight, id) => {
      var _a;
      return weight + ((_a = options.columnWeight[id]) != null ? _a : 1);
    }, 0);
    import_lodash9.default.range(grid.getColCount() - 1).filter((id) => grid.getColumnVisible(id)).forEach((id) => {
      var _a;
      const ratio = ((_a = options.columnWeight[id]) != null ? _a : 1) / totalWeight;
      grid.setColumnWidth(id, Math.floor(ratio * clientWidth));
      w += grid.getColumnWidth(id);
    });
    import_lodash9.default.range(grid.getColCount() - 1, -1, -1).filter((id) => grid.getColumnVisible(id)).slice(0, 1).forEach((id) => {
      grid.setColumnWidth(id, clientWidth - w);
    });
  };
  const scheduleColumnFill = () => {
    if (scheduled !== NOT_SCHEDULED)
      cancelAnimationFrame(scheduled);
    scheduled = requestAnimationFrame(() => {
      try {
        emitController.lockEmit("onColumnChanged");
        fillColumns();
      } catch (err) {
        console.error(err);
      } finally {
        emitController.unlockEmit("onColumnChanged");
        scheduled = NOT_SCHEDULED;
      }
    });
  };
  grid.emitter.on("onWrapperResized", () => {
    scheduleColumnFill();
  });
  grid.emitter.on("onColumnChanged", ({ left, right, type }) => {
    scheduleColumnFill();
  });
  scheduleColumnFill();
  return grid;
};
var ColumnFillPlugin = (options) => {
  const initOptions = Object.assign(DEFAULT_COLUMN_FILL_OPTIONS, options);
  return (args) => ColumnFill(args, initOptions);
};

// src/js-components/grid/plugins/cell-observer.ts
var CellObserver = ({ grid }, { onCellInfoChanged }) => {
  const handler = ({ row = -1, col = -1 }) => {
    onCellInfoChanged(grid, row, col);
  };
  const pluginController = {
    turnOn: () => grid.emitter.on("onCellInfoChanged", handler),
    turnOff: () => grid.emitter.off("onCellInfoChanged", handler)
  };
  pluginController.turnOn();
  return pluginController;
};
var CellObserverPlugin = (option) => {
  return (args) => CellObserver(args, option);
};

// src/js-components/grid/plugins/cell-drop.ts
var DEFAULT_VALUES = {
  enabledOnHeader: false
};
var CellDrop = ({ grid, table }, { enabledOnHeader }) => {
  const dragStatus = {
    latestDragOverCell: null
  };
  const endDrag = () => {
    table.classList.remove("is-dragging");
    removeDraggingBorder();
  };
  const removeDraggingBorder = () => {
    if (!dragStatus.latestDragOverCell)
      return;
    dragStatus.latestDragOverCell.isDragOver = false;
  };
  const setDragCell = (cell) => {
    removeDraggingBorder();
    dragStatus.latestDragOverCell = cell;
    cell.isDragOver = true;
  };
  const isDragging = () => {
    return table.classList.contains("is-dragging");
  };
  table.addEventListener("mouseup", () => isDragging() && endDrag());
  table.addEventListener("dragenter", () => {
    table.classList.add("is-dragging");
  });
  table.addEventListener("dragover", (ev) => {
    if (!table.classList.contains("is-dragging"))
      return;
    const cell = grid.findCellOrNull(ev.offsetY, ev.offsetX);
    if (!cell)
      return null;
    if (cell.dropDisabled !== false && (cell.isHeaderCell && enabledOnHeader === false || cell.metaInfo.disabled === true || cell.onCheckReadonly() === true || cell.dropDisabled === true)) {
      removeDraggingBorder();
      return null;
    }
    setDragCell(cell);
    ev.preventDefault();
  });
  table.addEventListener("dragleave", (ev) => {
    if (ev.target === table)
      endDrag();
    else
      removeDraggingBorder();
  });
  table.addEventListener("drop", (ev) => {
    try {
      if (dragStatus.latestDragOverCell)
        grid.onDropOnCell(dragStatus.latestDragOverCell.row, dragStatus.latestDragOverCell.col, ev);
    } finally {
      endDrag();
    }
  });
};
var CellDropPlugin = (cellDropArgs = DEFAULT_VALUES) => {
  return (pluginArgs) => CellDrop(pluginArgs, cellDropArgs);
};

// src/js-components/grid/plugins/single-cell-drag.ts
var SingleCellDrag = ({ grid, table }) => {
  const dragStatus = {
    cell: null
  };
  const releaseDragging = () => {
    dragStatus.cell = null;
    table.draggable = false;
  };
  const setDragging = (cell) => {
    table.draggable = true;
    dragStatus.cell = cell;
  };
  table.addEventListener("mousedown", (ev) => {
    if (ev.button !== 0)
      return;
    const curCell = ev.target.closest("td");
    if (!curCell) {
      releaseDragging();
      return;
    }
    const cellAddress = getCellElementRowCol(curCell);
    const cell = grid.cell(cellAddress.row, cellAddress.col);
    grid.selectCell(cellAddress.row, cellAddress.col);
    if (cell.metaInfo.draggable === true && cell.metaInfo.object)
      setDragging(cell);
    else
      releaseDragging();
  });
  table.addEventListener("dragend", () => releaseDragging());
  table.addEventListener("dragstart", (ev) => {
    if (!ev.dataTransfer || !dragStatus.cell || !grid.onDragStartCell(dragStatus.cell, ev)) {
      ev.preventDefault();
      return;
    }
    ev.dataTransfer.setDragImage(dragStatus.cell.element, 10, 10);
  });
};
var SingleCellDragPlugin = () => {
  return SingleCellDrag;
};

// src/js-components/grid/undo-redo.ts
var UndoManager = class {
  constructor(grid, options) {
    this.undoStack = [];
    this.redoStack = [];
    var _a;
    this.commandFilterSet = new Set((_a = options.commandFilter) != null ? _a : []);
    this.options = options;
    this.grid = grid;
    this.commandMap = {
      UPDATE_CELLS: ({ cellInfoList }) => {
        return {
          undo: () => {
            cellInfoList.forEach(({ row, col, key, oldValue, cellUUID }) => {
              const cell = grid.cell(row, col);
              if (cell.uuid === cellUUID)
                this.grid.setCell(row, col, { [key]: oldValue });
              else
                console.warn("Could not execute undo, because it has another cell uuid!");
            });
          },
          redo: () => {
            cellInfoList.forEach(({ row, col, key, newValue, cellUUID }) => {
              const cell = grid.cell(row, col);
              if (cell.uuid === cellUUID)
                this.grid.setCell(row, col, { [key]: newValue });
              else
                console.warn("Could not execute redo, because it has another cell uuid!");
            });
          }
        };
      },
      ADD_ROW: ({ row, height }) => {
        return {
          undo: () => this.grid.removeRow(row),
          redo: () => this.grid.addRow(height)
        };
      },
      ADD_COLUMN: ({ col, width }) => {
        return {
          undo: () => this.grid.removeColumn(col),
          redo: () => this.grid.addColumn(width)
        };
      },
      CHANGE_COL_WIDTH: ({ col, newSize, oldSize }) => {
        return {
          undo: () => this.grid.setColumnWidth(col, oldSize),
          redo: () => this.grid.setColumnWidth(col, newSize)
        };
      },
      CHANGE_ROW_HEIGHT: ({ row, newSize, oldSize }) => {
        return {
          undo: () => this.grid.setRowHeight(row, oldSize),
          redo: () => this.grid.setRowHeight(row, newSize)
        };
      }
    };
  }
  get isDisabled() {
    return this.options.disabled;
  }
  clearRedoStacks() {
    this.redoStack.splice(0, this.redoStack.length);
  }
  clearUndoStacks() {
    this.clearRedoStacks();
    this.undoStack.splice(0, this.undoStack.length);
  }
  pushCommand({ type, context }) {
    if (this.options.disabled)
      return;
    if (this.commandFilterSet.has(type))
      return;
    if (this.undoStack.length >= this.options.stackLength)
      this.undoStack.splice(0, this.undoStack.length - this.options.stackLength + 1);
    this.clearRedoStacks();
    if (!this.commandMap[type])
      throw new Error(`Unknown command type ${type}`);
    this.undoStack.push({
      type,
      context,
      commandRunner: this.commandMap[type](context)
    });
  }
  undo() {
    const pop = this.undoStack.pop();
    if (pop) {
      try {
        pop.commandRunner.undo();
      } catch (err) {
        console.error(err);
      }
      this.redoStack.push(pop);
      return pop;
    }
  }
  redo() {
    const pop = this.redoStack.pop();
    if (pop) {
      try {
        pop.commandRunner.redo();
      } catch (err) {
        console.error(err);
      }
      this.undoStack.push(pop);
      return pop;
    }
  }
};

// src/js-components/grid/virtual.ts
var ADJUST_SIZE = 200;
var createVirtualRenderer = (grid, tbody) => {
  const tmpRow = document.createElement("tr");
  tmpRow.setAttribute("data-row", "temp");
  return {
    render: () => {
      const scrollBottom = grid.scrollBottom + ADJUST_SIZE;
      grid.getRowLodash().takeWhile((row) => row.top <= scrollBottom).filter((row) => !row.isMounted).forEach((row) => row.mount(tbody));
    }
  };
};

// src/js-components/grid/grid.ts
var ROW_BORDER_SIZE = 1;
var CELL_WIDTH_PADDING = 20;
var NOT_SCHEDULED2 = -1;
var DEFAULT_UNDO_OPTIONS = {
  stackLength: 256,
  disabled: true
};
var IRGrid = class extends IRComponent {
  constructor({ contextElement, colHeader, rowHeader, body, defaultColumnCellFormat, plugins, undoManagerOptions = DEFAULT_UNDO_OPTIONS }) {
    super({ contextElement });
    this.totalHeight = 0;
    this.totalWidth = 0;
    this._readonly = false;
    this._isScheduledRender = -1;
    this._scheduledUpdateRowStart = -1;
    this._scheduledTasks = [];
    this._copyOptions = {
      rowSpan: true,
      colSpan: true
    };
    this._rowList = [];
    this._activeCell = null;
    this._undoManager = new UndoManager(this, undoManagerOptions);
    this._commandManager = createCommandManager(this, this._undoManager);
    this._cursorManager = createGridCellCursorManager(this);
    this.defaultColumnCellFormat = {
      all: {
        editable: true,
        text: ""
      }
    };
    if (defaultColumnCellFormat) {
      for (const [key, value] of Object.entries(defaultColumnCellFormat))
        this.defaultColumnCellFormat[key] = Object.assign(this.defaultColumnCellFormat[key] || {}, value);
    }
    const defaultCellRenderer = renderGridCellDefault();
    this.colHeader = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: defaultCellRenderer,
      defaultSize: 100,
      minSize: 80,
      maxSize: 500
    }, colHeader);
    this.colHeader.minSize = Math.min(this.colHeader.defaultSize, this.colHeader.minSize);
    this.colHeader.maxSize = Math.max(this.colHeader.defaultSize, this.colHeader.maxSize);
    this.rowHeader = Object.assign({
      rowCount: 0,
      colCount: 0,
      cellRenderer: defaultCellRenderer,
      defaultSize: 30,
      minSize: 30,
      maxSize: 100
    }, rowHeader);
    this.rowHeader.minSize = Math.min(this.rowHeader.defaultSize, this.rowHeader.minSize);
    this.rowHeader.maxSize = Math.max(this.rowHeader.defaultSize, this.rowHeader.maxSize);
    this.body = Object.assign({
      rowCount: 5,
      colCount: 0,
      cellRenderer: defaultCellRenderer
    }, body);
    this._headerRows = this.colHeader.rowCount;
    this._headerColumns = this.rowHeader.colCount;
    this.contextElement.classList.add(grid_classNames_default.grid.blockElementName);
    this.fixedTopTable = document.createElement("table");
    this.bodyTable = document.createElement("table");
    this.fixedTopTable.setAttribute("data-type", "fixed-top");
    this.bodyTable.setAttribute("data-type", "body");
    this.divWrapper = document.createElement("div");
    this.colgroup = document.createElement("colgroup");
    this.tbody = document.createElement("tbody");
    this.divWrapper.className = grid_classNames_default.wrapper.blockElementName;
    this.divWrapper.tabIndex = -1;
    this.fixedTopTable.appendChild(this.colgroup);
    this.fixedTopTable.appendChild(this.tbody);
    this.divWrapper.appendChild(this.fixedTopTable);
    this.contextElement.appendChild(this.divWrapper);
    this.addGlobalEventListener(this.contextElement, "scroll", (ev) => {
      this.scheduleRender();
      ev.preventDefault();
    });
    this.resizeObserver = new ResizeObserver(() => this.onResized());
    this.resizeObserver.observe(this.contextElement);
    this.initPlugins(plugins || [
      DefaultKeyPlugin(),
      MouseCellSelectorPlugin(),
      CellDropPlugin(),
      ResizerPlugin({
        enabledColResizer: true,
        enabledRowResizer: true
      })
    ]);
    this.addCoreElement(this.divWrapper);
    this.mergeManager = createMergeHandler(this);
    this.virtualRenderer = createVirtualRenderer(this, this.tbody);
    this.clipboardManager = createGridClipboardManager(this);
    this.selector = createGridSelector(this);
    this._emitterController = createEmitController(this);
    this.initTableRowCol();
    this.addGlobalEventListener(this.contextElement, "contextmenu", (ev) => {
      let offsetX = ev.offsetX;
      let offsetY = ev.offsetY;
      let target = ev.target;
      while (target !== this.contextElement) {
        offsetX += target.offsetLeft;
        offsetY += target.offsetTop;
        target = target.parentElement;
      }
      try {
        this.onContextMenu(ev, this.findCellOrNull(offsetY, offsetX));
      } catch (err) {
        console.error(err);
      } finally {
        ev.preventDefault();
      }
    });
  }
  get emitter() {
    return this._emitterController.emitter;
  }
  get fixedRowCount() {
    return this.colHeader.rowCount;
  }
  get fixedColumnCount() {
    return this.rowHeader.colCount;
  }
  get lastColumnId() {
    return this.colgroup.children.length - 1;
  }
  get width() {
    return this.totalWidth;
  }
  get height() {
    return this.totalHeight;
  }
  get fixedRowHeight() {
    const lastFixedRow = (0, import_lodash10.default)(this._rowList).takeWhile((row) => row.isFreezed).last();
    return lastFixedRow ? lastFixedRow.bottom : 0;
  }
  get fixedColumnWidth() {
    return import_lodash10.default.range(this.rowHeader.colCount).reduce((width, col) => width + this.getColumnWidth(col), 0);
  }
  get scrollArea() {
    return {
      scrollTop: this.contextElement.scrollTop,
      scrollLeft: this.contextElement.scrollLeft,
      scrollHeight: this.contextElement.scrollHeight,
      scrollWidth: this.contextElement.scrollWidth
    };
  }
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  get scrollLeft() {
    return this.contextElement.scrollLeft;
  }
  get scrollBottom() {
    return this.contextElement.scrollTop + this.contextElement.clientHeight;
  }
  get scrollRight() {
    return this.contextElement.scrollLeft + this.contextElement.clientWidth;
  }
  get minColWidth() {
    return this.colHeader.minSize;
  }
  get maxColWidth() {
    return this.colHeader.maxSize;
  }
  get minRowHeight() {
    return this.rowHeader.minSize;
  }
  get maxRowHeight() {
    return this.rowHeader.maxSize;
  }
  get headerRows() {
    return this._headerRows;
  }
  get headerColumns() {
    return this._headerColumns;
  }
  get headerWidth() {
    return import_lodash10.default.range(this.headerColumns).reduce((width, col) => width + this.getColumnWidth(col), 0);
  }
  get headerHeight() {
    return import_lodash10.default.range(this.headerRows).reduce((height, row) => height + this.getRowHeight(row), 0);
  }
  get activeCell() {
    return this._activeCell;
  }
  set activeCell(cell) {
    var _a, _b;
    if (cell !== this.activeCell) {
      (_a = this._activeCell) == null ? void 0 : _a.deactivate();
      this._activeCell = cell;
      if (this.activeCell)
        this.onSelectCell(this.activeCell);
      (_b = this._activeCell) == null ? void 0 : _b.activate();
    }
  }
  set readonly(flag) {
    this._readonly = flag;
    this._rowList.forEach((row) => {
      import_lodash10.default.range(this.getColCount()).forEach((col) => {
        row.getCell(col).updateReadonlyStatus();
      });
    });
  }
  addPlugin(plugin) {
    return plugin({
      grid: this,
      table: this.fixedTopTable,
      contextElement: this.contextElement,
      emitController: this._emitterController
    });
  }
  getMergeArea(row, col) {
    const cell = this.cell(row, col);
    if (cell.mergeInfo)
      return {
        rowSpan: cell.mergeInfo.rowSpan,
        colSpan: cell.mergeInfo.colSpan
      };
    else
      throw new Error(`It's not a based cell!`);
  }
  isMerged(row, col) {
    return this.mergeManager.isMerged(row, col);
  }
  splitCells(row, col) {
    this.mergeManager.splitCells(row, col);
    this.updateLastSelection();
  }
  mergeCells(top, left, bottom, right) {
    this.mergeManager.mergeCells({ top, left, bottom, right });
    this.updateLastSelection();
  }
  findRowOrNull(offsetY) {
    const { scrollTop } = this;
    const searchStatus = offsetY < scrollTop + this.fixedRowHeight ? {
      startIndex: 0,
      endIndex: this.fixedRowCount,
      curIndex: Math.floor(this.fixedRowCount / 2),
      scrollTop
    } : {
      startIndex: 0,
      endIndex: this._rowList.length,
      curIndex: Math.floor(this._rowList.length / 2),
      scrollTop: 0
    };
    let curRow = this._rowList[searchStatus.curIndex];
    while (!(offsetY >= searchStatus.scrollTop + curRow.top && offsetY <= searchStatus.scrollTop + curRow.bottom)) {
      if (offsetY < searchStatus.scrollTop + curRow.top) {
        if (searchStatus.endIndex === searchStatus.curIndex)
          return null;
        searchStatus.endIndex = searchStatus.curIndex;
      } else {
        if (searchStatus.startIndex === searchStatus.curIndex)
          return null;
        searchStatus.startIndex = searchStatus.curIndex;
      }
      searchStatus.curIndex = Math.floor((searchStatus.startIndex + searchStatus.endIndex) / 2);
      curRow = this._rowList[searchStatus.curIndex];
    }
    return curRow;
  }
  findCellOrNull(offsetY, offsetX) {
    const row = this.findRowOrNull(offsetY);
    if (!row)
      return null;
    const { scrollLeft } = this;
    const searchStatus = offsetX < scrollLeft + this.fixedColumnWidth ? {
      startIndex: 0,
      endIndex: this.fixedColumnCount,
      curIndex: Math.floor(this.fixedColumnCount / 2),
      scrollLeft
    } : {
      startIndex: 0,
      endIndex: row.cellCounts,
      curIndex: Math.floor(row.cellCounts / 2),
      scrollLeft: 0
    };
    let curLeft = this.getColumnLeft(searchStatus.curIndex);
    let curRight = curLeft + this.getColumnWidth(searchStatus.curIndex);
    while (!(offsetX >= searchStatus.scrollLeft + curLeft && offsetX <= searchStatus.scrollLeft + curRight)) {
      if (offsetX < searchStatus.scrollLeft + curLeft) {
        if (searchStatus.endIndex === searchStatus.curIndex)
          return null;
        searchStatus.endIndex = searchStatus.curIndex;
      } else {
        if (searchStatus.startIndex === searchStatus.curIndex)
          return null;
        searchStatus.startIndex = searchStatus.curIndex;
      }
      searchStatus.curIndex = Math.floor((searchStatus.startIndex + searchStatus.endIndex) / 2);
      curLeft = this.getColumnLeft(searchStatus.curIndex);
      curRight = curLeft + this.getColumnWidth(searchStatus.curIndex);
    }
    const cell = row.getCell(searchStatus.curIndex);
    return cell.mergeMain ? cell.mergeMain : cell;
  }
  getBaseCell(row, col) {
    const cell = this.cell(row, col);
    if (cell.isMerged)
      return {
        row: cell.row,
        col: cell.col
      };
    else if (cell.mergeMain)
      return {
        row: cell.mergeMain.row,
        col: cell.mergeMain.col
      };
    else
      throw new Error(`It's not a merged cell!`);
  }
  releaseCells() {
    if (this.lastSelection) {
      this.selector.releaseCells(this.lastSelection);
      this.lastSelection = void 0;
      this.activeCell = null;
    }
  }
  clearRows() {
    if (this.headerRows < this.getRowCount())
      this.removeRows(this.headerRows, this.getRowCount() - 1);
    this.scheduleRender();
  }
  getColumnLeft(col) {
    return import_lodash10.default.range(col).filter((col2) => this.getColumnVisible(col2)).reduce((sum, c) => sum + this.getColumnWidth(c), 0);
  }
  selectRange(top, left, bottom, right, cell = null) {
    this.releaseCells();
    this.lastSelection = this.selector.selectRange({ top, left, bottom, right });
    this.onSelectChanged(this.lastSelection);
    this.activeCell = cell != null ? cell : this.cell(top, left);
    return this.lastSelection;
  }
  selectAll() {
    var _a;
    return this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, (_a = this.activeCell) != null ? _a : null);
  }
  getCellWidth(cell) {
    if (cell.mergeInfo)
      return import_lodash10.default.range(cell.mergeInfo.colSpan).filter((id) => this.getColumnVisible(cell.col + id)).reduce((width, id) => width + this.getColumnWidth(cell.col + id), 0);
    else
      return this.getColumnWidth(cell.col);
  }
  getCellHeight(cell) {
    if (cell.mergeInfo)
      return import_lodash10.default.range(cell.mergeInfo.rowSpan).filter((id) => this.getRowVisible(cell.row + id)).reduce((height, id) => height + this.getRowHeight(cell.row + id), 0);
    else
      return this.getRowHeight(cell.col);
  }
  getSelection() {
    return import_lodash10.default.clone(this.lastSelection);
  }
  scrollOnRow(row) {
    const targetRow = this.getRow(row);
    const targetTop = targetRow.top;
    const targetBottom = targetRow.top + targetRow.height;
    const { scrollBottom, fixedRowHeight, scrollTop } = this;
    const fixedScrollTop = scrollTop + fixedRowHeight;
    if (scrollBottom < targetBottom)
      this.contextElement.scrollTop = scrollTop + (targetBottom - scrollBottom);
    else if (fixedScrollTop > targetTop)
      this.contextElement.scrollTop = targetTop - fixedRowHeight;
  }
  scrollOnCol(col) {
    const targetLeft = this.getColumnLeft(col);
    const targetRight = targetLeft + this.getColumnWidth(col);
    const { fixedColumnWidth, scrollRight, scrollLeft } = this;
    const fixedScrollLeft = scrollLeft + fixedColumnWidth;
    if (scrollRight < targetRight)
      this.contextElement.scrollLeft = scrollLeft + (targetRight - scrollRight);
    else if (fixedScrollLeft > targetLeft)
      this.contextElement.scrollLeft = targetLeft - fixedColumnWidth;
  }
  resetScroll() {
    this.contextElement.scrollTop = 0;
    this.contextElement.scrollLeft = 0;
  }
  scrollInView(row, col) {
    this.scrollOnRow(row);
    this.scrollOnCol(col);
  }
  focus() {
    this.contextElement.dispatchEvent(new Event("focus"));
  }
  setText(row, col, value) {
    this.setCell(row, col, {
      text: Number.isInteger(value) ? value.toString() : `${value || ""}`
    });
  }
  getText(row, col) {
    return this.cell(row, col).text;
  }
  getCellUUID(row, col) {
    var _a;
    return (_a = this.cell(row, col)) == null ? void 0 : _a.uuid;
  }
  getValue(row, col) {
    return this.cell(row, col).value;
  }
  getColumnWidth(col) {
    return parseInt(this.colgroup.children[col].style.width || "0");
  }
  setColumnWidth(col, width) {
    const colElement = this.getColElement(col);
    if (!colElement)
      throw new Error(`Not found column at ${col}`);
    this.totalWidth -= this.getColumnWidth(col);
    const w = getMinMaxBetween(width, this.colHeader.minSize, this.colHeader.maxSize);
    this.setTableWidth(this.totalWidth + w);
    colElement.style.width = `${w}px`;
    if (col < this.getFreezedColumnCount()) {
      (0, import_lodash10.default)(this._rowList).take(this.getFreezedRowCount()).forEach((row) => this.updateRowLeft(row));
      this.updateCurrentScrollBodyRowsLeft();
    }
    this.generateScrollBar();
    this.onResizeColumn(col);
    this._emitterController.emit("onColumnChanged", { left: col, right: col, type: "setWidth" });
  }
  getRowHeight(row) {
    if (!this._rowList[row])
      throw new Error(`Not found row at ${row}`);
    else
      return this._rowList[row].height;
  }
  setRowHeight(row, height) {
    if (!this._rowList[row])
      throw new Error(`Not found row at ${row}`);
    const gridRow = this._rowList[row];
    gridRow.height = getMinMaxBetween(height, this.rowHeader.minSize, this.rowHeader.maxSize);
    this.updateRowsTopFrom(row);
  }
  setRowTextColor(row, color) {
    if (!this._rowList[row])
      throw new Error(`Not found column at ${row}`);
    this._rowList[row].textColor = color;
  }
  getObject(row, col) {
    return this.cell(row, col).object;
  }
  setObject(row, col, object) {
    this.cell(row, col).cellInfo = { object };
  }
  cell(row, col) {
    return this.getRow(row).getCell(col);
  }
  isBased(row, col) {
    return this.cell(row, col).mergeMain === void 0;
  }
  getCell(row, col) {
    return this.cell(row, col).metaInfo;
  }
  setCell(row, col, cellInfo) {
    this.cell(row, col).cellInfo = cellInfo;
  }
  selectCell(row, col) {
    this.selectRange(row, col, row, col, this.cell(row, col));
  }
  getRowCount() {
    return this._rowList.length;
  }
  getColCount() {
    return this.colgroup.children.length;
  }
  getFreezedRowCount() {
    return this.colHeader.rowCount;
  }
  getFreezedColumnCount() {
    return this.rowHeader.colCount;
  }
  getRow(row) {
    return this._rowList[row];
  }
  getRowLodash() {
    return (0, import_lodash10.default)(this._rowList);
  }
  addRow(height = this.rowHeader.defaultSize) {
    const row = this._rowList.length;
    const gridRow = this.createIRGridRow(row, this.totalHeight, height);
    this._rowList.push(gridRow);
    this.scheduleRender();
    return row;
  }
  removeRow(row) {
    return this.removeRows(row, row);
  }
  removeColumn(col) {
    return this.removeColumns(col, col);
  }
  removeRows(top, bottom) {
    if (top < this.headerRows)
      throw new Error(`Could not remove rows at header!`);
    if (bottom >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount()}. If you wanna clear all rows, please call clearRows()`);
    if (this.mergeManager.checkConflictingInRows(top, bottom))
      return false;
    import_lodash10.default.range(top, bottom + 1).forEach((id) => {
      const row = this._rowList[id];
      row.unmount();
      this.setTableHeight(this.totalHeight - (row.height + ROW_BORDER_SIZE));
      for (const cell of row.getCellGenerator()) {
        if (cell.isMerged)
          this.mergeManager.removeMergeCell(cell.row, cell.col);
      }
    });
    const removedRows = 1 + bottom - top;
    const tmpTop = this.getRow(top).top;
    this._rowList.splice(top, removedRows);
    if (top < this.getRowCount()) {
      this.getRow(top).top = tmpTop;
      let tmp = top;
      this.updateRowsTopFrom(top);
      while (this._rowList[tmp]) {
        this._rowList[tmp].rowId -= removedRows;
        ++tmp;
      }
    }
    this.updateLastSectionProperly();
    return true;
  }
  removeColumns(left, right) {
    if (left < this.rowHeader.colCount)
      throw new Error(`The col num that you wanna remove must be less then '${this.rowHeader.colCount}'! (Row Header Columns)`);
    if (right > this.getColCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getColCount()}`);
    if (this.mergeManager.checkConflictingInColumns(left, right))
      return false;
    (0, import_lodash10.default)(this._rowList).forEach((row) => {
      for (const cell of row.getCellGenerator(left, right)) {
        if (cell.isMerged)
          this.mergeManager.removeMergeCell(cell.row, cell.col);
      }
      row.removeCells(left, right);
    });
    import_lodash10.default.range(left, right + 1).forEach(() => {
      this.setTableWidth(this.totalWidth - this.getColumnWidth(left));
      this.colgroup.removeChild(this.colgroup.children[left]);
    });
    this.updateLastSectionProperly();
    this._emitterController.emit("onColumnChanged", { left, right, type: "removeColumns" });
    return true;
  }
  addColumn(width = this.colHeader.defaultSize) {
    const col = this.addColGroup(width);
    (0, import_lodash10.default)(this._rowList).forEach((row) => row.addCell(this.createIRGridCell(row.rowId, col)));
    ++this.colHeader.colCount;
    this._emitterController.emit("onColumnChanged", { left: col, right: col, type: "addColumn" });
    return col;
  }
  insertRow(row, height) {
    return this.insertRows(row, 1, height);
  }
  insertRows(row, count, height) {
    if (!count)
      throw new Error(`count cannot be 0 or undefined!`);
    if (row < this.headerRows)
      throw new Error(`Could not insert rows in column header`);
    else if (!this.mergeManager.checkCanInsertRow(row))
      return false;
    const size = height || this.rowHeader.defaultSize;
    const tmpRowList = [];
    const tmpHeight = size * tmpRowList.length + tmpRowList.length;
    const target = this._rowList[row];
    const lastSelection = import_lodash10.default.cloneDeep(this.lastSelection);
    this.releaseCells();
    import_lodash10.default.range(count).forEach((id) => tmpRowList.push(this.createIRGridRow(row + id, target.top, size)));
    import_lodash10.default.range(row, this._rowList.length).forEach((id) => {
      this._rowList[id].rowId += count;
      this._rowList[id].top += tmpHeight + ROW_BORDER_SIZE;
    });
    this._rowList.splice(row, 0, ...tmpRowList);
    if (row < this.fixedRowCount)
      this.freezeRows(this.fixedRowCount - this.headerRows + count);
    this.updateRowsTopFrom(row);
    if (target.isMounted)
      tmpRowList.forEach((row2) => row2.mount(this.tbody, target.element));
    if (lastSelection)
      this.selectRange(lastSelection.top, lastSelection.left, lastSelection.bottom, lastSelection.right);
    this.scheduleRender();
    return true;
  }
  insertColumn(col, width) {
    return this.insertColumns(col, 1, width);
  }
  insertColumns(col, count, width = this.colHeader.defaultSize) {
    if (!count)
      throw new Error(`count cannot be 0 or undefined!`);
    if (col < this.headerColumns)
      throw new Error(`Could not insert rows in row header`);
    else if (!this.mergeManager.checkCanInsertColumn(col))
      return false;
    const lastSelection = import_lodash10.default.cloneDeep(this.lastSelection);
    import_lodash10.default.range(count).forEach(() => {
      this.createColElement(col);
      this.colgroup.children[col].style.width = `${width}px`;
      this.setTableWidth(this.width + width);
    });
    this.releaseCells();
    this._rowList.forEach((row) => {
      const tmpCellList = [];
      import_lodash10.default.range(count).forEach((id) => tmpCellList.push(this.createIRGridCell(row.rowId, col + id)));
      row.insertCells(tmpCellList, col);
    });
    if (col < this.fixedColumnCount)
      this.freezeColumn(this.fixedColumnCount - this.headerColumns + count);
    if (lastSelection)
      this.selectRange(lastSelection.top, lastSelection.left, lastSelection.bottom, lastSelection.right);
    this._emitterController.emit("onColumnChanged", { left: col, right: col + count, type: "insertColumns" });
    return true;
  }
  autoSizeColumn(col) {
    this.autoSizeColumns(col, col);
  }
  autoSizeColumns(left, right) {
    import_lodash10.default.range(left, right + 1).reduce((changed, col) => {
      const maxWidth = (0, import_lodash10.default)(this._rowList).map((row) => row.getCell(col)).filter((cell) => cell.visible && cell.mergeInfo.colSpan === 1).flatMap((cell) => cell.innerWidth).reduce((a, b) => Math.max(a, b), 0);
      const checkIsChanged = maxWidth !== this.getColumnWidth(col);
      if (checkIsChanged)
        this.setColumnWidth(col, getMinMaxBetween(Math.ceil(maxWidth + CELL_WIDTH_PADDING), this.colHeader.minSize, this.colHeader.maxSize));
      return changed || checkIsChanged;
    }, false);
  }
  autoSizeRow(row) {
    this.autoSizeRows(row, row);
  }
  autoSizeRows(top, bottom) {
    const isChanged = import_lodash10.default.range(top, bottom + 1).reduce((changed, r) => {
      const checkIsChanged = this._rowList[r].setAutoHeight(this.rowHeader.minSize, this.rowHeader.maxSize);
      return changed || checkIsChanged;
    }, false);
    if (isChanged) {
      this.updateRowsTopFrom(top);
      this.scheduleRender();
    }
  }
  copyToClipboard() {
    ClipboardManager.setText(this.clipboardManager.getSelectedText());
  }
  undo() {
    if (this._undoManager.isDisabled)
      return;
    const command = this._undoManager.undo();
    if (command)
      this.onUndo(command);
    else
      console.warn("No undo command in stack.");
  }
  redo() {
    if (this._undoManager.isDisabled)
      return;
    const command = this._undoManager.redo();
    if (command)
      this.onRedo(command);
    else
      console.warn("No redo command in stack.");
  }
  paste(payload, cellCopyMetaInfoList = []) {
    const selection = this.getSelection();
    if (!selection)
      return;
    const data = this.clipboardManager.convertText(payload);
    if (data.length === 0)
      return;
    const { top, left } = selection;
    const bottom = Math.max(top + data.length - 1, selection.bottom);
    const right = Math.max(left + data[0].length - 1, selection.right);
    const pasteRange = { top, left, bottom, right };
    const pastingList = [];
    const dataSize = { height: data.length, width: data[0].length };
    for (const { y, x } of get2DGenerator(pasteRange.bottom - pasteRange.top + 1, pasteRange.right - pasteRange.left + 1)) {
      const [row, col] = [y + top, x + left];
      if (!this.hasRow(row) && this.onAutoInsertRow(row))
        this.addRow();
      if (!this.hasColumn(col) && this.onAutoInsertColumn(col))
        this.addColumn();
      if (this.hasRow(row) && this.hasColumn(col)) {
        const cell = this.cell(row, col);
        const text = data[y % dataSize.height][x % dataSize.width];
        if (cell.visible && cell.onCheckReadonly() !== true && cell.metaInfo.disabled !== true && cell.metaInfo.clipboardEnabled !== false && this.onClipboardBeforePasteCell(cell, text))
          pastingList.push({ row, col, text });
      }
    }
    if (pastingList.length === 0)
      return;
    this.onClipboardBeforePaste(pasteRange);
    pastingList.forEach(({ text, row, col }, id) => {
      const cell = this.cell(row, col);
      const cellCopyMetaInfo = cellCopyMetaInfoList[id];
      cell.text = text;
      if (!cell.visible || !cellCopyMetaInfo)
        return;
      if (cellCopyMetaInfo.rowSpan > 1 || cellCopyMetaInfo.colSpan > 1) {
        const range = {
          top: row,
          bottom: row + cellCopyMetaInfo.rowSpan - 1,
          left: col,
          right: col + cellCopyMetaInfo.colSpan - 1
        };
        if (this.mergeManager.isValidatedMerging(range))
          this.mergeManager.mergeCells(range);
        else
          console.warn(`Occurred an error for merging cells when pasting! ${row}, ${col}`);
      }
      if (cellCopyMetaInfo.refCellText)
        cell.text = cellCopyMetaInfo.refCellText;
      this.onClipboardAfterPasteCell(cell);
    });
    this.onClipboardAfterPaste(pasteRange);
    this.selectRange(pasteRange.top, pasteRange.left, pasteRange.bottom, pasteRange.right);
  }
  hasRow(row) {
    return row < this.getRowCount();
  }
  hasColumn(col) {
    return col < this.getColCount();
  }
  setRowVisible(row, visible) {
    if (this.mergeManager.checkConflictingInRows(row, row))
      return false;
    if (visible === this.getRowVisible(row))
      return true;
    this._rowList[row].visible = visible;
    this.setTableHeight(this.totalHeight + (visible ? this.getRowHeight(row) : -this.getRowHeight(row)));
    this.updateRowsTopFrom(row);
    this.scheduleRender();
    this.updateLastSectionProperly();
    return true;
  }
  getRowVisible(row) {
    return this._rowList[row].visible;
  }
  setColumnVisible(col, visible) {
    if (this.mergeManager.checkConflictingInColumns(col, col))
      return false;
    if (visible === this.getColumnVisible(col))
      return true;
    this._rowList.forEach((row) => row.setColumnVisible(col, visible));
    this.colgroup.children[col].style.display = visible ? "" : "none";
    this.setTableWidth(this.totalWidth + (visible ? this.getColumnWidth(col) : -this.getColumnWidth(col)));
    this.updateCurrentScrollBodyRowsLeft();
    this.updateLastSectionProperly();
    this._emitterController.emit("onColumnChanged", { left: col, right: col, type: "setVisible" });
    return true;
  }
  getColumnVisible(col) {
    return this.colgroup.children[col].style.display !== "none";
  }
  createFinder(args = {}) {
    return createIRGridFinder(this, args);
  }
  selectColumn(col) {
    this.selectColumns(col, col);
  }
  selectColumns(left, right) {
    if (left < this.headerColumns)
      return;
    if (this.headerRows < this.getRowCount())
      this.selectRange(this.headerRows, left, this.getRowCount() - 1, right, this.cell(this.headerRows, left));
  }
  selectRow(row) {
    this.selectRows(row, row);
  }
  selectRows(top, bottom) {
    if (top < this.headerRows)
      return;
    this.selectRange(top, this.headerColumns, bottom, this.getColCount() - 1, this.cell(top, this.headerColumns));
  }
  freezeRows(freezingRowCount) {
    const { headerRows } = this;
    this.colHeader.rowCount = freezingRowCount + headerRows;
    (0, import_lodash10.default)(this._rowList).drop(this.headerRows).takeWhile((row) => row.isFreezed).forEach((row) => {
      row.unfreeze();
    });
    (0, import_lodash10.default)(this._rowList).drop(headerRows).take(freezingRowCount).forEach((row) => {
      row.freeze();
    });
  }
  freezeColumns(columnId) {
    if (columnId <= this.headerColumns)
      throw new Error("Could not be freezing after header columns");
    this.freezeColumn(columnId + 1 - this.headerColumns);
  }
  freezeColumn(freezingColumnCount) {
    if (freezingColumnCount < 0)
      throw new Error("Could not be freezing minus columns!");
    this.rowHeader.colCount = this.headerColumns + freezingColumnCount;
    (0, import_lodash10.default)(this._rowList).forEach((row) => row.setStickyHeader(this.rowHeader.colCount));
    this.updateCurrentScrollBodyRowsLeft();
  }
  clearUndoStack() {
    this._undoManager.clearUndoStacks();
  }
  setClipboardOptions(copyOptions) {
    Object.assign(this._copyOptions, copyOptions);
  }
  doCommand(commandKey, args) {
    return this._commandManager.doCommand(commandKey, args);
  }
  sort(compareFunc, order, rowRange) {
    const [startRow, endRow] = rowRange != null ? rowRange : [this.headerRows, this.getRowCount()];
    const notSortedTopRows = this._rowList.slice(this.headerRows, startRow);
    const sortingRows = this._rowList.slice(startRow, endRow);
    const notSortedBottomRows = this._rowList.slice(endRow);
    const tmpHeight = this.height;
    this.releaseCells();
    sortingRows.sort((a, b) => {
      if (order === "ASC")
        return compareFunc(a, b);
      else
        return -compareFunc(a, b);
    });
    this.clearRows();
    sortingRows.reduce((state, row) => {
      row.top = state.top;
      row.rowId = state.id;
      state.top += row.height;
      ++state.id;
      return state;
    }, { id: this.headerRows, top: this.fixedRowHeight });
    this._rowList.push(
      ...notSortedTopRows,
      ...sortingRows,
      ...notSortedBottomRows
    );
    this.setTableHeight(tmpHeight);
    this.virtualRenderer.render();
  }
  afterRender(task) {
    this._scheduledTasks.push(task);
  }
  onSelectCell(_cell) {
  }
  onResizeContext() {
  }
  onResizeColumn(_colId) {
  }
  onEditCellDone(_cell, _isChanged, _beforeText, _endKeyCode, _selStart, _selEnd) {
  }
  onSelectChanged(_selection) {
  }
  onClearCell(_cell) {
  }
  onColumnClick(cell) {
    this.selectColumn(cell.col);
  }
  onRowClick(cell) {
    this.selectRow(cell.row);
  }
  onCreatingCell(_cell) {
  }
  onCellRightClick(_cell, _ev) {
  }
  onEditKeyDown(_event, _row, _col, _data) {
  }
  onMountedRow(_row) {
  }
  onClipboardBeforePasteCell(_cell, _text) {
    return true;
  }
  onClipboardBeforePaste(_range) {
  }
  onClipboardAfterPasteCell(_cell) {
  }
  onClipboardAfterPaste(_range) {
  }
  onAutoInsertRow(_row) {
    return true;
  }
  onAutoInsertColumn(_col) {
    return true;
  }
  onDoubleClickCell(cell) {
    cell.doEditMode();
  }
  onDropOnCell(_row, _col, _ev) {
  }
  onDragStartCell(cell, ev) {
    if (!ev.dataTransfer || !cell.metaInfo.object)
      return false;
    ev.dataTransfer.setData("application/json", JSON.stringify(cell.metaInfo.object));
    return true;
  }
  onNativePaste(ev) {
    if (!ev.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    if (this.activeCell == null)
      throw new Error("No active call when pasting");
    const pastingText = ev.clipboardData.getData("text/plain") || "";
    const cellMetaInfoBuffer = ev.clipboardData.getData("ir-grid/merge-cells") || "";
    if (cellMetaInfoBuffer)
      this.paste(pastingText, JSON.parse(cellMetaInfoBuffer));
    else
      this.paste(pastingText, []);
    ev.preventDefault();
    ev.stopPropagation();
  }
  onNativeCut(ev) {
    const selection = this.getSelection();
    if (!selection)
      throw new Error("Detected copy without selection");
    this.onNativeCopy(ev);
    const generator = createGridCellGenerator(this);
    for (const cell of generator.getSelectionGenerator(selection))
      cell.editable && cell.clear();
  }
  onGetCopyInfo(cell) {
    return {
      refCellText: cell.mergeMain ? cell.mergeMain.text : void 0,
      rowSpan: this._copyOptions.rowSpan ? cell.mergeInfo.rowSpan : 1,
      colSpan: this._copyOptions.colSpan ? cell.mergeInfo.colSpan : 1
    };
  }
  onNativeCopy(ev) {
    if (!ev.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    const selection = this.getSelection();
    if (!selection)
      throw new Error("Detected copy without selection");
    const copyText = this.clipboardManager.getSelectedText();
    const generator = createGridCellGenerator(this);
    const cellInfo = [];
    for (const cell of generator.getSelectionGenerator(selection)) {
      cellInfo.push(this.onGetCopyInfo(cell));
    }
    ev.clipboardData.setData("ir-grid/merge-cells", JSON.stringify(cellInfo));
    ev.clipboardData.setData("text/plain", copyText);
    this.focus();
    this.onCopy();
    ev.preventDefault();
    ev.stopPropagation();
  }
  onCopy() {
  }
  onUndo(_command) {
  }
  onRedo(_command) {
  }
  onContextMenu(_ev, _cell) {
  }
  onInnerDoneCellEdit(cell, isChanged, beforeText) {
    if (!isChanged)
      return;
    this.doCommand("DONE_CELL_EDIT", {
      row: cell.row,
      col: cell.col,
      text: cell.text,
      beforeText
    });
  }
  onCheckCellReadonly(cell) {
    return this._readonly ? true : cell.metaInfo.readonly === true;
  }
  initPlugins(plugins) {
    try {
      for (const plugin of plugins) {
        plugin({
          grid: this,
          table: this.fixedTopTable,
          contextElement: this.contextElement,
          emitController: this._emitterController
        });
      }
    } catch (err) {
      console.error("Plugin init error", err);
    }
  }
  initTableRowCol() {
    import_lodash10.default.range(this.colHeader.colCount).forEach(() => this.addColGroup(this.colHeader.defaultSize));
    import_lodash10.default.range(this.colHeader.rowCount).forEach(() => {
      const headerRow = this.getRow(this.addRow());
      headerRow.mount(this.tbody);
      headerRow.freezeHeader();
    });
    import_lodash10.default.range(this.body.rowCount).forEach(() => this.addRow());
  }
  updateLastSectionProperly() {
    if (this.lastSelection) {
      const rowCnt = this.getRowCount() - 1;
      const colCnt = this.getColCount() - 1;
      if (this.lastSelection.top > rowCnt || this.lastSelection.left > colCnt) {
        this.releaseCells();
        return;
      }
      this.selectRange(
        Math.min(this.lastSelection.top, rowCnt),
        Math.min(this.lastSelection.left, colCnt),
        Math.min(this.lastSelection.bottom, rowCnt),
        Math.min(this.lastSelection.right, colCnt)
      );
    }
  }
  updateLastSelection() {
    if (this.lastSelection)
      this.selectRange(this.lastSelection.top, this.lastSelection.left, this.lastSelection.bottom, this.lastSelection.right);
  }
  createColElement(id) {
    const colElement = document.createElement("col");
    if (id) {
      const target = this.colgroup.children[id];
      target.insertAdjacentElement("beforebegin", colElement);
    } else
      this.colgroup.appendChild(colElement);
    return colElement;
  }
  addColGroup(width) {
    const col = this.colgroup.children.length;
    this.createColElement();
    this.setColumnWidth(col, width);
    return col;
  }
  updateCurrentScrollBodyRowsLeft() {
    const top = this.contextElement.scrollTop - this.contextElement.scrollHeight;
    const { scrollBottom } = this;
    (0, import_lodash10.default)(this._rowList).take(this.getFreezedRowCount()).forEach((row) => this.updateRowLeft(row));
    (0, import_lodash10.default)(this._rowList).drop(this.getFreezedRowCount()).filter((row) => row.top >= top && row.top <= scrollBottom).forEach((row) => this.updateRowLeft(row));
  }
  initColumnHeaderCell(cell) {
    cell.cellType = "col-header";
    cell.onClick = () => this.onColumnClick(cell);
  }
  initRowHeaderCell(cell) {
    cell.cellType = "row-header";
    cell.onClick = () => this.onRowClick(cell);
  }
  initBodyCell(cell) {
    cell.cellType = "body-cell";
    cell.onMoveLeftOnEdit = () => this._cursorManager.selectNextSelection(0, -1, false);
    cell.onMoveUpOnEdit = () => this._cursorManager.selectNextSelection(-1, 0, false);
    cell.onMoveRightOnEdit = () => this._cursorManager.selectNextSelection(0, 1, false);
    cell.onMoveDownOnEdit = () => this._cursorManager.selectNextSelection(1, 0, false);
    cell.onTabOnEdit = (_11, shiftKey) => {
      if (shiftKey)
        this._cursorManager.selectBeforeActiveCell();
      else
        this._cursorManager.selectNextActiveCell();
    };
    cell.onEnterOnEdit = () => {
      const nextRow = this._cursorManager.getNextYBelow(cell.row, cell.col, 1);
      if (cell.row === nextRow)
        return;
      requestAnimationFrame(() => {
        this.selectCell(nextRow, cell.col);
        this.cell(nextRow, cell.col).doEditMode();
      });
    };
    cell.onClear = () => this.onClearCell(cell);
    cell.onDblClick = () => this.onDoubleClickCell(cell);
    cell.onEditDone = (cell2, isChanged, beforeText, endKeyCode, selStart, selEnd) => {
      if (this.activeCell === cell2)
        this.selectCell(cell2.row, cell2.col);
      this.onEditCellDone(cell2, isChanged, beforeText, endKeyCode, selStart, selEnd);
      this.onInnerDoneCellEdit(cell2, isChanged, beforeText);
      this.focus();
    };
    cell.onEditKeyDown = (ev, row, col, meta) => this.onEditKeyDown(ev, row, col, meta);
  }
  createIRGridCell(row, col) {
    const isColHeader = row < this.headerRows;
    const isRowHeader = !isColHeader && col < this.headerColumns;
    const isBody = !isColHeader && !isRowHeader;
    const tag = isColHeader || isRowHeader ? "th" : "td";
    const cellRenderer = isColHeader ? this.colHeader.cellRenderer : isRowHeader ? this.rowHeader.cellRenderer : this.body.cellRenderer;
    const cell = new IRGridCell({
      row,
      col,
      tag,
      cellRenderer,
      metaInfo: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.defaultColumnCellFormat.all), this.defaultColumnCellFormat[col]), isColHeader ? this.defaultColumnCellFormat[`col_header_${col}`] : void 0), isRowHeader ? this.defaultColumnCellFormat[`row_header_${col}`] : void 0), isBody ? this.defaultColumnCellFormat[`body_${col}`] : void 0), {
        emitter: this._emitterController.emitter
      })
    });
    cell.onRightClick = (c, ev) => this.onCellRightClick(c, ev);
    cell.onCheckReadonly = () => this.onCheckCellReadonly(cell);
    switch (true) {
      case isColHeader:
        this.initColumnHeaderCell(cell);
        break;
      case isRowHeader:
        this.initRowHeaderCell(cell);
        break;
      default:
        this.initBodyCell(cell);
        break;
    }
    this.onCreatingCell(cell);
    return cell;
  }
  updateRowLeft(row) {
    import_lodash10.default.range(this.getFreezedColumnCount()).filter((col) => this.getColumnVisible(col)).reduce((width, col) => {
      row.setCellLeft(col, width);
      return width + this.getColumnWidth(col);
    }, 0);
  }
  updateRowsTopFrom(start) {
    if (this._scheduledUpdateRowStart !== NOT_SCHEDULED2 && this._scheduledUpdateRowStart > start)
      this._scheduledUpdateRowStart = start;
    else if (this._scheduledUpdateRowStart === NOT_SCHEDULED2) {
      this._scheduledUpdateRowStart = start;
      requestAnimationFrame(() => {
        const startRow = this._rowList[this._scheduledUpdateRowStart];
        const maxHeight = (0, import_lodash10.default)(this._rowList).drop(this._scheduledUpdateRowStart).reduce((top, row) => {
          row.top = top;
          return row.visible ? top + row.height + ROW_BORDER_SIZE : top;
        }, startRow.top);
        this.setTableHeight(maxHeight);
        this._scheduledUpdateRowStart = NOT_SCHEDULED2;
      });
      if (this._isScheduledRender !== NOT_SCHEDULED2) {
        this.clearScheduleRender();
        this.scheduleRender();
      }
    }
  }
  getColElement(id) {
    return this.colgroup.children[id];
  }
  setTableWidth(width) {
    this.totalWidth = width;
    this.divWrapper.style.width = `${this.totalWidth}px`;
  }
  setTableHeight(height) {
    this.totalHeight = height;
    this.divWrapper.style.height = `${this.totalHeight}px`;
  }
  onResized() {
    this._emitterController.emit("onWrapperResized", {});
    this.onResizeContext();
    this.scheduleRender();
  }
  createIRGridRow(row, top, height) {
    const gridRow = new IRGridRow({ row, height, top, rowType: row < this.headerRows ? "col-header" : "body" });
    import_lodash10.default.range(this.getColCount()).forEach((col) => gridRow.addCell(this.createIRGridCell(row, col)));
    import_lodash10.default.range(this.getColCount()).filter((col) => this.getColumnVisible(col) === false).forEach((col) => gridRow.setColumnVisible(col, false));
    gridRow.onMounted = () => {
      gridRow.setStickyHeader(this.rowHeader.colCount);
      this.onMountedRow(gridRow.rowId);
    };
    gridRow.onChangedHeight = () => {
      import_lodash10.default.range(this.getColCount()).forEach((col) => {
        const cell = gridRow.getCell(col);
        const mergeMain = cell.mergeMain ? cell.mergeMain : cell.mergeInfo.rowSpan > 1 ? cell : null;
        if (mergeMain)
          mergeMain.height = this.mergeManager.getMergedRowHeight(mergeMain.row, mergeMain.row + mergeMain.mergeInfo.rowSpan - 1);
      });
    };
    this.setTableHeight(this.totalHeight + height + ROW_BORDER_SIZE);
    return gridRow;
  }
  clearScheduleRender() {
    if (this._isScheduledRender === -1)
      return;
    cancelAnimationFrame(this._isScheduledRender);
    this._isScheduledRender = -1;
  }
  scheduleRender() {
    if (this._isScheduledRender !== NOT_SCHEDULED2)
      return;
    this._isScheduledRender = requestAnimationFrame(() => {
      this.updateCurrentScrollBodyRowsLeft();
      this.generateScrollBar();
      this.virtualRenderer.render();
      this._scheduledTasks.forEach((task) => {
        try {
          task();
        } catch (err) {
          console.error("Occurred Scheduled Task Error!", err);
        }
      });
      this._isScheduledRender = NOT_SCHEDULED2;
      this._scheduledTasks.length = 0;
    });
  }
};

// src/js-components/grid/sub-ui/checkbox.ts
var CHECKBOX_DEFAULT_SIZE = 16;
var CHECKBOX_DEFAULT_GAP = 6;
var CHECKBOX_DEFAULT_MARGIN = 6 * 2;
var renderGridCheckbox = ({ onCheckboxClick }) => {
  const checkboxCellInnerWidth = (cell, metaInfo) => {
    const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
    const labelWidth = metaInfo.label ? CHECKBOX_DEFAULT_GAP + context.calculateWidth(metaInfo.label) : 0;
    return CHECKBOX_DEFAULT_SIZE + CHECKBOX_DEFAULT_MARGIN + labelWidth;
  };
  return (row, col, data) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    data.cellType = "checkbox";
    data.editable = false;
    data.onCalculateWidth = checkboxCellInnerWidth;
    div.className = checkbox_classNames_default.checkbox.blockElementName;
    label.className = checkbox_classNames_default.checkboxWrapper.blockElementName;
    checkbox.type = "checkbox";
    checkbox.className = checkbox_classNames_default.checkboxInput.blockElementName;
    label.appendChild(checkbox);
    if (data.label) {
      const span = document.createElement("span");
      span.className = checkbox_classNames_default.text.blockElementName;
      span.innerText = data.label;
      label.appendChild(span);
    }
    div.appendChild(label);
    checkbox.checked = data.text === "true";
    label.onkeydown = (ev) => ev.preventDefault();
    checkbox.onchange = () => {
      data.text = checkbox.checked ? "true" : "false";
      data.emitter.emit("onCellInfoChanged", { row, col });
      onCheckboxClick && onCheckboxClick(row, col, checkbox.checked);
    };
    return div;
  };
};

// src/js-components/grid/sub-ui/select.ts
var DEFAULT_MARGIN = 30;
var renderGridSelect = ({ items, onChange, allowCustomText = false }) => {
  const { divDropdown, ulItems } = createDropdownDiv();
  const dropDownItemList = [];
  let beforeValue;
  let beforeText;
  let floatingCleanup = () => void 0;
  for (const { value, text } of items) {
    const { item, button } = createDropdownItem(value, text);
    dropDownItemList.push({ value, text, buttonElement: button, itemWrapperElement: item });
    ulItems.appendChild(item);
  }
  const selectCellInnerWidth = (cell, _metaInfo) => {
    const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
    const max = items.reduce((width, item) => Math.max(width, context.calculateWidth(item.text)), 0);
    return DEFAULT_MARGIN + max;
  };
  return (row, col, data) => {
    var _a;
    const div = document.createElement("div");
    const input = document.createElement("input");
    const icon = document.createElement("i");
    data.cellType = "select";
    data.editable = false;
    data.onCalculateWidth = selectCellInnerWidth;
    div.classList.add(grid_classNames_default.cell.select, select_classNames_default.select.blockElementName, select_classNames_default.selectInput.blockElementName);
    input.classList.add(select_classNames_default.selectInputNative.blockElementName);
    icon.classList.add(select_classNames_default.selectInputIcon.blockElementName, "ir-icon", "ir-icon--chevron-down");
    input.type = "text";
    input.readOnly = true;
    let isMapped = false;
    dropDownItemList.filter((item) => item.text === data.text).slice(0, 1).forEach((item) => {
      input.value = item.text;
      data.value = item.value;
      isMapped = true;
    });
    if (!isMapped) {
      if (allowCustomText) {
        input.value = (_a = data.text) != null ? _a : "";
        data.value = data.text;
      } else {
        input.value = "";
        data.value = "";
      }
    }
    const outsideHandler = createClickOutsideHandler({
      eventElements: [div, divDropdown],
      clickOutsideFunc: () => objHandler.hide()
    });
    const objHandler = {
      show: () => {
        escController.create();
        outsideHandler.create();
        beforeValue = data.value;
        beforeText = data.text;
        for (const { value, text, itemWrapperElement, buttonElement } of dropDownItemList) {
          if (text === data.text)
            itemWrapperElement.classList.add("is-selected");
          else
            itemWrapperElement.classList.remove("is-selected");
          buttonElement.onclick = () => {
            data.text = text;
            data.value = value;
            input.value = text;
            data.emitter.emit("onCellInfoChanged", { row, col });
            data.emitter.emit("updateCellStatus", { row, col });
            onChange == null ? void 0 : onChange.call(null, row, col, value, text, beforeValue, beforeText);
            objHandler.hide();
          };
        }
        divDropdown.style.width = `${div.offsetWidth}px`;
        divDropdown.setAttribute("data-row", row.toString());
        divDropdown.setAttribute("data-col", col.toString());
        document.body.appendChild(divDropdown);
        div.classList.add(select_classNames_default.select["is-expanded"]);
        setTimeout(() => {
          divDropdown.classList.add(select_classNames_default.select["is-expanded"]);
          floatingCleanup();
          floatingCleanup = offsetBottomAutoUpdate(div, divDropdown);
        }, 0);
      },
      hide: () => {
        escController.destroy();
        outsideHandler.destroy();
        div.classList.remove(select_classNames_default.select["is-expanded"]);
        divDropdown.classList.remove(select_classNames_default.select["is-expanded"]);
        divDropdown.addEventListener("transitionend", () => {
          if (divDropdown.getAttribute("data-row") === row.toString() && divDropdown.getAttribute("data-col") === col.toString()) {
            floatingCleanup();
            divDropdown.remove();
          }
        }, { once: true });
      }
    };
    const escController = createESCHideController(objHandler);
    const onToggle = () => {
      if (!div.classList.contains(select_classNames_default.select["is-expanded"]))
        objHandler.show();
      else
        objHandler.hide();
    };
    div.onclick = () => onToggle();
    div.appendChild(input);
    div.appendChild(icon);
    return div;
  };
};

// src/js-components/grid/sub-ui/datePicker.ts
var import_moment = __toESM(require_moment());
var DEFAULT_MARGIN2 = 24;
var DEFAULT_MIN_DATE = (0, import_moment.default)("1970-01-01").toDate();
var DEFAULT_MAX_DATE = (0, import_moment.default)("9999-12-31").toDate();
var renderGridDatePicker = ({ onDateClick, format = i18n_default.datePicker.dateFormat, minDate = DEFAULT_MIN_DATE, maxDate = DEFAULT_MAX_DATE }) => {
  const datePickerCellInnerWidth = (cell, metaInfo) => {
    const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
    return context.calculateWidth(metaInfo.text || format) + DEFAULT_MARGIN2;
  };
  return (row, col, data) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    data.cellType = "datePicker";
    data.onCalculateWidth = datePickerCellInnerWidth;
    input.readOnly = true;
    input.maxLength = format.length;
    div.classList.add(input_classNames_default.input.blockElementName, grid_classNames_default.cell["date-picker"]);
    input.classList.add(input_classNames_default.inputNative.blockElementName);
    btn.classList.add(input_classNames_default.inputSuffix.blockElementName);
    icon.classList.add("ir-icon", "ir-icon--calendar");
    input.type = "text";
    input.placeholder = format;
    if ((0, import_moment.default)(data.text, format, true).isValid() === false)
      data.text = "";
    else {
      const textMoment = (0, import_moment.default)(data.text, format);
      if (textMoment.isBefore(minDate) || textMoment.isAfter(maxDate))
        data.text = "";
    }
    input.value = data.text || "";
    btn.appendChild(icon);
    div.appendChild(input);
    div.appendChild(btn);
    const datePickerHandler = createDatePickerHandler({
      uuid: v4_default(),
      refElement: div,
      minDate,
      maxDate,
      onClick: (dt) => {
        const text = (0, import_moment.default)(dt).format(format);
        input.value = text;
        data.text = text;
        onDateClick == null ? void 0 : onDateClick.call(null, row, col, text);
        data.emitter.emit("onCellInfoChanged", { row, col });
        datePickerHandler.hide();
      }
    });
    btn.onclick = () => {
      if (!datePickerHandler.visible) {
        const check = (0, import_moment.default)(data.text, format, true);
        if (check.isValid())
          datePickerHandler.update(check.toDate(), check.toDate());
        else
          datePickerHandler.update(new Date(), null);
        datePickerHandler.show();
      }
    };
    return div;
  };
};

// src/components/progress/progress.classNames.ts
var block2 = "progress";
var progress_classNames_default = {
  progress: BEMClass({ block: block2, modifier: ["danger", "warning", "info", "tertiary", "secondary"] }),
  bar: BEMClass({ block: block2, element: "bar" }),
  VALUE_PROPERTY: "--progress-value",
  PERCENT_PROPERTY: "--progress-percent"
};

// src/js-components/grid/sub-ui/progress.ts
var DEFAULT_MARGIN3 = 24;
var renderGridProgress = ({ min = 0, max = 100, defaultIntent, afterDecimalLen = 2 }) => {
  return (_row, _col, data) => {
    var _a;
    const wrapper = document.createElement("div");
    const progress = document.createElement("div");
    wrapper.className = grid_classNames_default.cellProgress.blockElementName;
    progress.className = progress_classNames_default.progress.blockElementName;
    const intent = (_a = data.intent) != null ? _a : defaultIntent;
    if (intent)
      progress.classList.add(progress_classNames_default.progress[intent]);
    data.cellType = "progress";
    data.editable = false;
    data.onCalculateWidth = (cell) => {
      const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
      return context.calculateWidth(progress.style.getPropertyValue(progress_classNames_default.VALUE_PROPERTY)) + DEFAULT_MARGIN3;
    };
    const value = getMinMaxBetween(parseFloat(data.text || "0"), min, max);
    const percent = (value - min) / (max - min) * 100;
    progress.style.setProperty(progress_classNames_default.VALUE_PROPERTY, `'${percent.toFixed(afterDecimalLen)}%'`);
    progress.style.setProperty(progress_classNames_default.PERCENT_PROPERTY, `${percent}%`);
    wrapper.appendChild(progress);
    return wrapper;
  };
};

// src/js-components/grid/sub-ui/button.ts
var DEFAULT_MARGIN4 = 14;
var DEFAULT_ICON_SIZE = 26;
var DEFAULT_BUTTON_HEIGHT = 24;
var renderGridButton = ({ onClick, defaultColor = "transparent", defaultLabel, defaultIcon }) => {
  const buttonCellInnerWidth = (cell, metaInfo) => {
    const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
    const icon = metaInfo.icon || defaultIcon;
    const label = metaInfo.label || defaultLabel;
    const labelWidth = context.calculateWidth(label || "") + (icon ? DEFAULT_ICON_SIZE : 0);
    return DEFAULT_MARGIN4 + labelWidth;
  };
  return (row, col, data) => {
    var _a, _b;
    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    wrapper.className = grid_classNames_default.cell.button;
    data.editable = false;
    data.onCalculateHeight = () => DEFAULT_BUTTON_HEIGHT;
    data.onCalculateWidth = buttonCellInnerWidth;
    button.className = button_classNames_default.button.blockElementName;
    const color = (_a = data.intent) != null ? _a : defaultColor;
    if (color)
      button.classList.add(button_classNames_default.button[color]);
    if (onClick)
      button.onclick = (ev) => onClick(ev, row, col);
    const icon = data.icon || defaultIcon;
    const text = ((_b = data.label) != null ? _b : defaultLabel) || "";
    if (icon) {
      const iconElement = document.createElement("i");
      iconElement.classList.add(button_classNames_default.buttonIcon.blockElementName, "ir-icon", `ir-icon--${icon}`);
      button.appendChild(iconElement);
    }
    if (text) {
      const span = document.createElement("span");
      span.innerText = text;
      button.appendChild(span);
    }
    wrapper.appendChild(button);
    return wrapper;
  };
};

// src/components/radio/radio.classNames.ts
var block3 = "radio";
var radio_classNames_default = {
  radio: BEMClass({ block: block3 }),
  radioWrapper: BEMClass({ block: block3, element: "wrapper" }),
  radioInput: BEMClass({ block: block3, element: "input" }),
  text: BEMClass({ block: block3, element: "text" })
};

// src/js-components/grid/sub-ui/radio.ts
var RADIO_DEFAULT_SIZE = 16;
var RADIO_DEFAULT_GAP = 6;
var RADIO_DEFAULT_MARGIN = 6 * 2;
var renderGridRadio = ({ onRadioClick }) => {
  let lastClickedRadio = null;
  const radioCellInnerWidth = (cell, metaInfo) => {
    const context = getTextWidthContext(cell.style.fontSize, cell.style.fontFamily);
    const labelWidth = metaInfo.label ? RADIO_DEFAULT_GAP + context.calculateWidth(metaInfo.label) : 0;
    return RADIO_DEFAULT_SIZE + RADIO_DEFAULT_MARGIN + labelWidth;
  };
  const changeRadioButton = (item) => {
    if (lastClickedRadio && !(item.col === lastClickedRadio.col && item.row === lastClickedRadio.row)) {
      lastClickedRadio.radio.checked = false;
      lastClickedRadio.data.text = "false";
      lastClickedRadio.data.emitter.emit("onCellInfoChanged", { row: item.row, col: item.col });
    }
    lastClickedRadio = item;
  };
  return (row, col, data) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const radio = document.createElement("input");
    data.cellType = "radio";
    data.editable = false;
    data.onCalculateWidth = radioCellInnerWidth;
    div.className = radio_classNames_default.radio.blockElementName;
    label.className = radio_classNames_default.radioWrapper.blockElementName;
    radio.type = "radio";
    radio.className = radio_classNames_default.radioInput.blockElementName;
    label.appendChild(radio);
    if (data.label) {
      const span = document.createElement("span");
      span.className = radio_classNames_default.text.blockElementName;
      span.innerText = data.label;
      label.appendChild(span);
    }
    div.appendChild(label);
    radio.checked = data.text === "true";
    if (radio.checked === true)
      changeRadioButton({ radio, data, row, col });
    label.onkeydown = (ev) => ev.preventDefault();
    radio.onclick = () => {
      changeRadioButton({ radio, data, row, col });
      data.text = "true";
      data.emitter.emit("onCellInfoChanged", { row, col });
      onRadioClick && onRadioClick(row, col);
    };
    return div;
  };
};

// src/js-components/grid/sort-by-column.ts
var convertToNumber = (text) => {
  if (text === "" || !text)
    return -Number.MAX_SAFE_INTEGER;
  return parseInt(text, 10);
};
var createIRGridColumnSortManager = (grid) => {
  const numberSet = /* @__PURE__ */ new Set();
  let latestClickCell = null;
  let enabledColumnClick = true;
  return {
    set enabledColumnClick(flag) {
      enabledColumnClick = flag;
    },
    clearNumberColumns() {
      numberSet.clear();
    },
    clearSortOrder() {
      if (latestClickCell)
        latestClickCell.cellInfo = { sortOrder: void 0 };
      latestClickCell = null;
    },
    removeNumberColumns(...num) {
      num.forEach((n) => numberSet.delete(n));
    },
    setNumberColumns(...num) {
      num.forEach((n) => numberSet.add(n));
    },
    compareTo(a, b) {
      const aValue = numberSet.has(a.col) ? convertToNumber(a.text) : a.text;
      const bValue = numberSet.has(b.col) ? convertToNumber(b.text) : b.text;
      if (aValue < bValue)
        return -1;
      else if (aValue > bValue)
        return 1;
      return 0;
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${grid.uuid}`);
      grid.onColumnClick = (cell) => {
        if (!enabledColumnClick)
          return;
        this.toggleSortColumn(cell);
      };
    },
    sortColumn(col, order) {
      grid.sort((a, b) => {
        return this.compareTo(a.getCell(col), b.getCell(col));
      }, order);
    },
    toggleSortColumn(cell) {
      if (cell.cellType !== "col-header")
        throw new Error(`Can only execute in col-header`);
      const order = cell.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      if (latestClickCell !== cell)
        this.clearSortOrder();
      latestClickCell = cell;
      cell.cellInfo = { sortOrder: order };
      this.sortColumn(cell.col, order);
    }
  };
};

// src/js-components/grid/row-sort-manager.ts
var createIRGridInferSorting = (options) => {
  return {};
};
export {
  CellDropPlugin,
  CellObserverPlugin,
  ColumnFillPlugin,
  DefaultKeyPlugin,
  IRGrid,
  MouseCellSelectorPlugin,
  ResizerPlugin,
  RowSelectionPlugin,
  SingleCellDragPlugin,
  createIRGridColumnSortManager,
  createIRGridInferSorting,
  renderGridButton,
  renderGridCellDefault,
  renderGridCellIconButton,
  renderGridCheckbox,
  renderGridDatePicker,
  renderGridProgress,
  renderGridRadio,
  renderGridSelect,
  renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
