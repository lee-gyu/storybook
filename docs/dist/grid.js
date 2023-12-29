import {
  IRCommandBlock,
  IRCommandManager,
  createDatePickerHandler,
  createDropdownDiv,
  createDropdownItem
} from "./chunks/chunk-CF6RNEVQ.js";
import {
  i18n_default
} from "./chunks/chunk-VEWYTQUD.js";
import {
  readText,
  writeText
} from "./chunks/chunk-J7AUQGT2.js";
import {
  IRComponent
} from "./chunks/chunk-O3XJ324C.js";
import {
  $,
  $r,
  A,
  Ar,
  B,
  Br,
  ClipboardManager,
  Cr,
  Dr,
  Fr,
  Gr,
  Hr,
  Ir,
  J,
  Jr,
  Kr,
  Lr,
  Mr,
  N,
  Nr,
  Or,
  Pr,
  ReactiveState,
  Rr,
  Sr,
  Tr,
  Ur,
  Vr,
  Wr,
  Xr,
  Y,
  Yr,
  Zr,
  _e,
  _r,
  ae,
  ar,
  blobToStr,
  checkTargetIsHTMLElement,
  closest,
  cr,
  createClickOutsideHandler,
  createIconElement,
  de,
  ee,
  fr,
  get2DGenerator,
  getMinMaxBetween,
  getTextWidthContext,
  gr,
  hr,
  ie,
  ir,
  j,
  kr,
  le,
  lr,
  m,
  map,
  ne,
  nr,
  oe,
  or,
  pr,
  q,
  qr,
  re,
  rr,
  sr,
  te,
  tr,
  wr,
  x,
  xr,
  y,
  yr,
  z,
  zr
} from "./chunks/chunk-K5RQWUDQ.js";
import {
  v4_default
} from "./chunks/chunk-IQO4KW2H.js";
import {
  require_lodash
} from "./chunks/chunk-L3QRNZQF.js";
import {
  computePosition,
  createESCHideController,
  esm_default,
  flip,
  getLayerElement,
  getThemeStore,
  offset,
  offsetBottomAutoUpdate,
  shift
} from "./chunks/chunk-E2DVMCXX.js";
import "./chunks/chunk-SLIKBEQ2.js";
import {
  __decorateClass,
  __toESM
} from "./chunks/chunk-F6QKJDR3.js";

// ../../node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
function get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}
function walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  var clone = obj.constructor();
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === "string" || typeof _value === "number" || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === "object" && !Array.isArray(_value)) {
      clone[key] = walkObject(_value, fn, currentPath);
    } else {
      console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
    }
  }
  return clone;
}

// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js
function setVar(element, variable, value) {
  element.style.setProperty(getVarName(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
  if (typeof tokens === "object") {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      setVar(element, get(_contract, path), String(value));
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      setVar(element, varName, _vars[varName]);
    }
  }
}

// src/js-components/grid/grid.ts
var import_lodash15 = __toESM(require_lodash(), 1);

// src/js-components/grid/cell-renderer/cell-renderer.ts
var import_lodash = __toESM(require_lodash(), 1);

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
function getOffsetXYOnContext(ev) {
  let element = ev.target;
  let x2 = ev.offsetX;
  let y2 = ev.offsetY;
  while (element !== ev.currentTarget) {
    if (!(element instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (element.tagName === "TR")
      break;
    x2 += element.offsetLeft;
    y2 += element.offsetTop;
    element = element.parentElement;
  }
  return { x: x2, y: y2 };
}

// src/js-components/grid/cell-renderer/cell-renderer.ts
var ICON_SIZE = 20;
var ICON_HORIZONTAL_GAP = 5;
var IRGridCellRenderer = class {
  render(row, col, data) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding(metaInfo) {
    var _a, _b;
    return ((_a = metaInfo.paddingLeft) != null ? _a : metaInfo.getGridStore().cellPadding.left) + ((_b = metaInfo.paddingRight) != null ? _b : metaInfo.getGridStore().cellPadding.right);
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    var _a, _b;
    const context = getTextWidthContext(fontSize, fontFamily);
    const iconWidth = [metaInfo.icon, metaInfo.sortOrder].reduce((count, icon) => icon ? count + 1 : count, 0) * (ICON_SIZE + ICON_HORIZONTAL_GAP);
    const lines = `${(_a = metaInfo.text) != null ? _a : ""}`.split("\n");
    const firstLineWidth = iconWidth + context.calculateWidth((_b = lines[0]) != null ? _b : "");
    return this.getHorizontalCellPadding(metaInfo) + (0, import_lodash.default)(lines).drop(1).reduce(
      (width, line) => Math.max(width, context.calculateWidth(line)),
      firstLineWidth
    );
  }
  getRendererInnerWidth(fontSize, fontFamily, metaInfo) {
    return 0;
  }
  getCellInnerHeight(cell, metaInfo) {
    var _a, _b;
    const gridStore = metaInfo.getGridStore();
    const top = (_a = metaInfo.paddingTop) != null ? _a : gridStore.cellPadding.top;
    const bottom = (_b = metaInfo.paddingBottom) != null ? _b : gridStore.cellPadding.bottom;
    return top + bottom + getCellInnerHeight(cell);
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return true;
  }
};

// src/js-components/grid/command/set-cell.ts
var import_lodash2 = __toESM(require_lodash(), 1);

// src/js-components/command-manager/command.ts
var IRCommand = class {
  constructor(instance, args) {
    this._args = args;
    this._instance = instance;
    this._undoContext = this._getUndoContext();
  }
  /* 커맨드 실행 전, 되돌이기 위한 Context 정보를 저장 */
  _getUndoContext() {
    throw new Error("Not implemented");
  }
  /**
   * Redo 시 재실행
   * */
  _execute() {
    throw new Error("Not implemented");
  }
  /**
   * Undo 되돌리기
   * */
  _undo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 undo 가능한 상태인가?
   */
  get canUndo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 다시 되돌릴 수 있는 상태인가?
   */
  get canExecute() {
    throw new Error("Not implemented");
  }
  execute() {
    if (!this.canExecute)
      throw new Error("Can't execute command");
    this._execute();
    this.onExecute();
  }
  undo() {
    if (!this.canUndo)
      throw new Error("Can't undo command");
    this._undo();
    this.onUndo();
  }
  /**
   * Undo 이후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onUndo() {
  }
  /**
   * 되돌리기 후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onExecute() {
  }
};

// src/js-components/grid/command/grid-command.ts
var IRGridCommand = class extends IRCommand {
};

// src/js-components/grid/command/set-cell.ts
var SetCellCommand = class extends IRGridCommand {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [row, col, info] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: import_lodash2.default.pick(
        this._instance.getCell(row, col),
        Object.keys(info)
      )
    };
  }
  _undo() {
    this._instance.setCell(this._args[0], this._args[1], this._undoContext.beforeValue);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
};

// src/js-components/grid/cell-renderer/checkbox.ts
var clsCheck = {
  checkbox: ar,
  checkboxWrapper: nr,
  checkboxText: lr,
  checkboxInput: tr
};
var CHECKBOX_DEFAULT_SIZE = 16;
var CHECKBOX_DEFAULT_GAP = 6;
var CHECKBOX_DEFAULT_MARGIN = CHECKBOX_DEFAULT_GAP * 2;
var ICON_SIZE2 = 20;
var IRGridCheckboxRenderer = class extends IRGridCellRenderer {
  constructor({ onCheckboxClick }) {
    super();
    if (onCheckboxClick)
      this.onCheckboxClick = onCheckboxClick.bind(this);
  }
  onCheckboxClick(row, col, checked) {
  }
  render(row, col, data) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    div.classList.add(Pr, clsCheck.checkbox);
    label.classList.add(Rr, clsCheck.checkboxWrapper);
    checkbox.type = "checkbox";
    checkbox.className = clsCheck.checkboxInput;
    label.appendChild(checkbox);
    data.icon && label.appendChild(createIconElement(`ir-icon--${data.icon}`));
    if (data.label) {
      const span = document.createElement("span");
      span.className = `${Vr} ${clsCheck.checkboxText}`;
      span.innerText = data.label;
      label.appendChild(span);
    }
    div.appendChild(label);
    checkbox.checked = data.text === "true";
    label.onkeydown = (ev) => ev.preventDefault();
    checkbox.onchange = () => {
      const checked = checkbox.checked;
      const text = checked ? "true" : "false";
      const grid = data.commandManager;
      const command2 = new SetCellCommand(grid, [row, col, { text }]);
      command2.onUndo = () => {
        this.onCheckboxClick(row, col, !checked);
      };
      command2.onExecute = () => {
        this.onCheckboxClick(row, col, checked);
      };
      data.commandManager.commandManager.pushCommandBlock(new IRCommandBlock(
        "Change checkbox",
        command2
      ));
      data.text = text;
      data.emitter.emit("onCellInfoChanged", { row, col });
      this.onCheckboxClick(row, col, checked);
    };
    return div;
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    const context = getTextWidthContext(fontSize, fontFamily);
    const labelWidth = metaInfo.label ? CHECKBOX_DEFAULT_GAP + context.calculateWidth(metaInfo.label) : 0;
    const iconWidth = metaInfo.icon ? CHECKBOX_DEFAULT_GAP + ICON_SIZE2 : 0;
    return CHECKBOX_DEFAULT_SIZE + CHECKBOX_DEFAULT_MARGIN + labelWidth + iconWidth + this.getHorizontalCellPadding(metaInfo);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return false;
  }
};
function renderGridCheckbox(args) {
  const checkboxRenderer = new IRGridCheckboxRenderer(args != null ? args : {});
  return () => checkboxRenderer;
}

// src/js-components/grid/cell-renderer/select.ts
var import_lodash3 = __toESM(require_lodash(), 1);
var clsSelect = { select: A, selectInput: j, selectInputNative: J, selectInputIcon: q };
var SELECT_RENDERER_WIDTH_CACHE = /* @__PURE__ */ new WeakMap();
var ICON_SIZE3 = 20;
var ICON_GAP = 4;
var DEFAULT_MARGIN = ICON_SIZE3 + ICON_GAP;
var SCROLL_WIDTH = 18;
var SELECT_TRANSITION_MS = 150;
var DEFAULT_CUSTOM_DISPLAY_TEXT_FUNC = (value, text) => text != null ? text : "";
var IRGridSelectCellRenderer = class extends IRGridCellRenderer {
  constructor({
    items,
    allowCustomText = false,
    showErrorIfCustomText = false,
    onChange,
    customDisplayTextFunc = DEFAULT_CUSTOM_DISPLAY_TEXT_FUNC,
    getVisibleFunc = () => true
  }) {
    super();
    this._dropDownItemList = [];
    this._dropDownContext = createDropdownDiv();
    this._itemWidth = null;
    this._floatingCleanup = () => void 0;
    this._items = items;
    this._itemTextSet = /* @__PURE__ */ new Set();
    this._allowCustomText = allowCustomText;
    this._customDisplayTextFunc = customDisplayTextFunc;
    this._showErrorIfCustomText = showErrorIfCustomText;
    this._getVisibleFunc = getVisibleFunc;
    if (onChange)
      this.onChange = onChange.bind(this);
    for (const { value, text } of items) {
      const { item, button } = createDropdownItem(value, text);
      this._itemTextSet.add(text);
      this._dropDownItemList.push({ value, text, buttonElement: button, itemWrapperElement: item });
      this._dropDownContext.ulItems.appendChild(item);
    }
  }
  render(row, col, data) {
    const {
      _allowCustomText,
      _showErrorIfCustomText,
      _customDisplayTextFunc,
      _getVisibleFunc,
      _dropDownContext: { divDropdown },
      _dropDownItemList: dropDownItemList
    } = this;
    const div = document.createElement("div");
    const input = document.createElement("input");
    const icon = document.createElement("i");
    const isEmpty = data.text === "" || data.text === null || data.text === void 0;
    div.classList.add(Kr, clsSelect.select, clsSelect.selectInput);
    input.classList.add(clsSelect.selectInputNative);
    icon.classList.add(clsSelect.selectInputIcon, "ir-icon", "ir-icon--chevron-down");
    input.type = "text";
    input.readOnly = true;
    let isMapped = false;
    (0, import_lodash3.default)(dropDownItemList).filter((item) => item.text === data.text).take(1).forEach((item) => {
      input.value = _customDisplayTextFunc(item.value, item.text, false);
      data.value = item.value;
      isMapped = true;
    });
    if (!isMapped) {
      if (_allowCustomText) {
        input.value = _customDisplayTextFunc(data.value, data.text, true);
        data.value = data.text;
      } else {
        input.value = "";
        data.value = "";
      }
    }
    if (
      // error 상태 표시 지정 시, error 속성 추가
      _allowCustomText && _showErrorIfCustomText && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
      !isEmpty && !isMapped
    )
      div.dataset["error"] = "true";
    const outsideHandler = createClickOutsideHandler({
      eventElements: [div, divDropdown],
      clickOutsideFunc: () => objHandler.hide()
    });
    const objHandler = {
      show: () => {
        escController.create();
        outsideHandler.create();
        this._beforeValue = data.value;
        this._beforeText = data.text;
        for (const item of dropDownItemList) {
          const { value, text, itemWrapperElement, buttonElement } = item;
          if (_getVisibleFunc(item) === false)
            itemWrapperElement.style.display = "none";
          else
            itemWrapperElement.style.display = "";
          if (text === data.text)
            itemWrapperElement.classList.add(N);
          else
            itemWrapperElement.classList.remove(N);
          buttonElement.onclick = () => {
            const grid = data.commandManager;
            const command2 = new SetCellCommand(grid, [row, col, { text, value }]);
            command2.onUndo = () => {
              this.onChange(row, col, this._beforeValue, this._beforeText, value, text);
            };
            command2.onExecute = () => {
              this.onChange(row, col, value, text, this._beforeValue, this._beforeText);
            };
            data.commandManager.commandManager.pushCommandBlock(new IRCommandBlock(
              "Change select menu",
              command2
            ));
            data.text = text;
            data.value = value;
            data.emitter.emit("onCellInfoChanged", { row, col });
            data.emitter.emit("updateCellStatus", { row, col });
            input.value = _customDisplayTextFunc(value, text, false);
            if (div.dataset["error"])
              delete div.dataset["error"];
            this.onChange(row, col, value, text, this._beforeValue, this._beforeText);
            objHandler.hide();
          };
        }
        const cell = div.parentElement;
        const { fontSize, fontFamily } = getComputedStyle(cell);
        const width = Math.max(this.getItemWidth(fontSize, fontFamily, data), div.offsetWidth);
        divDropdown.style.width = `${width}px`;
        divDropdown.setAttribute("data-row", row.toString());
        divDropdown.setAttribute("data-col", col.toString());
        getLayerElement("popover").appendChild(divDropdown);
        div.classList.add("is-expanded");
        setTimeout(() => {
          divDropdown.classList.add("is-expanded");
          this._floatingCleanup();
          this._floatingCleanup = offsetBottomAutoUpdate(div.parentElement, divDropdown);
        }, 0);
      },
      hide: () => {
        escController.destroy();
        outsideHandler.destroy();
        div.classList.remove("is-expanded");
        divDropdown.classList.remove("is-expanded");
        setTimeout(() => {
          if (divDropdown.getAttribute("data-row") === row.toString() && divDropdown.getAttribute("data-col") === col.toString()) {
            this._floatingCleanup();
            divDropdown.remove();
          }
        }, SELECT_TRANSITION_MS);
      }
    };
    const escController = createESCHideController(objHandler);
    const onToggle = () => {
      if (!div.classList.contains("is-expanded"))
        objHandler.show();
      else
        objHandler.hide();
    };
    div.onclick = () => onToggle();
    div.appendChild(input);
    div.appendChild(icon);
    return div;
  }
  onChange(_row, _col, _value, _text, _beforeValue, _beforeText) {
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    if (!metaInfo.text)
      return 0;
    const context = getTextWidthContext(fontSize, fontFamily);
    const isTextInItems = this._itemTextSet.has(metaInfo.text);
    const text = this._customDisplayTextFunc(metaInfo.value, metaInfo.text, !isTextInItems);
    const cellWidth = context.calculateWidth(text);
    return DEFAULT_MARGIN + cellWidth + this.getHorizontalCellPadding(metaInfo);
  }
  getDropdownWidth(fontSize, fontFamily, metaInfo) {
    const context = getTextWidthContext(fontSize, fontFamily);
    const maxWidth = this._items.reduce((width, item) => Math.max(width, context.calculateWidth(item.text)), 0);
    return DEFAULT_MARGIN + maxWidth + this.getHorizontalCellPadding(metaInfo);
  }
  getRendererInnerWidth(fontSize, fontFamily, metaInfo) {
    const cacheWidth = SELECT_RENDERER_WIDTH_CACHE.get(this);
    if (cacheWidth)
      return cacheWidth;
    const calculateWidth = this.getDropdownWidth(fontSize, fontFamily, metaInfo);
    SELECT_RENDERER_WIDTH_CACHE.set(this, calculateWidth);
    return calculateWidth;
  }
  getItemWidth(fontSize, fontFamily, metaInfo) {
    if (this._itemWidth === null)
      this._itemWidth = this.getRendererInnerWidth(fontSize, fontFamily, metaInfo);
    return this._itemWidth + SCROLL_WIDTH;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return false;
  }
};
var renderGridSelect = (args) => {
  const selectRenderer = new IRGridSelectCellRenderer(args);
  return () => selectRenderer;
};

// src/js-components/grid/cell-renderer/datePicker.ts
var clsInput = { input: sr, inputNative: gr, inputSuffix: pr };
var DEFAULT_MARGIN2 = 28;
var lastDateTextCache = /* @__PURE__ */ new WeakMap();
var IRGridDatePickerRenderer = class extends IRGridCellRenderer {
  constructor({
    onDateClick,
    format = i18n_default.datePicker.dateFormat,
    minDate = getThemeStore().getStoreValue("datePicker.minDate"),
    maxDate = getThemeStore().getStoreValue("datePicker.maxDate"),
    allowedEmptyString = true
  }) {
    super();
    this._format = format;
    this._minDate = minDate;
    this._maxDate = maxDate;
    this._allowedEmptyString = allowedEmptyString;
    if (onDateClick)
      this.onDateClick = onDateClick.bind(this);
  }
  onDateClick(row, col, text) {
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    const context = getTextWidthContext(fontSize, fontFamily);
    return context.calculateWidth(metaInfo.text || this._format) + DEFAULT_MARGIN2 + this.getHorizontalCellPadding(metaInfo);
  }
  render(row, col, data) {
    var _a;
    const div = document.createElement("div");
    const input = document.createElement("input");
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    const {
      _minDate: minDate,
      _maxDate: maxDate,
      _format: format,
      _allowedEmptyString: allowedEmptyString
    } = this;
    input.readOnly = true;
    input.maxLength = format.length;
    div.classList.add(clsInput.input, Lr);
    input.classList.add(clsInput.inputNative);
    btn.classList.add(clsInput.inputSuffix);
    icon.classList.add("ir-icon", "ir-icon--calendar");
    input.type = "text";
    input.placeholder = format;
    if (data.text !== "") {
      const textDayjs = esm_default(data.text, format, true);
      if (!textDayjs.isValid())
        data.text = lastDateTextCache.get(data);
      if (textDayjs.isBefore(minDate) || textDayjs.isAfter(maxDate))
        data.text = lastDateTextCache.get(data);
    }
    if (!allowedEmptyString && (data.text === "" || data.text === void 0))
      data.text = lastDateTextCache.has(data) ? lastDateTextCache.get(data) : esm_default().format(format);
    input.value = data.text || "";
    lastDateTextCache.set(data, (_a = data.text) != null ? _a : "");
    btn.appendChild(icon);
    div.appendChild(input);
    div.appendChild(btn);
    const datePickerHandler = createDatePickerHandler({
      uuid: v4_default(),
      refElement: div,
      minDate,
      maxDate,
      onClick: (dt) => {
        const beforeText = data.text;
        const text = esm_default(dt).format(format);
        const grid = data.commandManager;
        const command2 = new SetCellCommand(grid, [row, col, { text }]);
        command2.onUndo = () => {
          this.onDateClick(row, col, beforeText != null ? beforeText : "");
        };
        command2.onExecute = () => {
          this.onDateClick(row, col, text);
        };
        grid.commandManager.pushCommandBlock(new IRCommandBlock("Change datePicker", command2));
        input.value = text;
        data.text = text;
        lastDateTextCache.set(data, text);
        this.onDateClick(row, col, text);
        data.emitter.emit("onCellInfoChanged", { row, col });
        datePickerHandler.hide();
      }
    });
    btn.onclick = () => {
      if (!datePickerHandler.visible) {
        const check = esm_default(data.text, format, true);
        if (check.isValid())
          datePickerHandler.update(check.toDate(), check.toDate());
        else
          datePickerHandler.update(/* @__PURE__ */ new Date(), null);
        datePickerHandler.show();
      }
    };
    return div;
  }
  get renderType() {
    return "datePicker";
  }
};
var renderGridDatePicker = (args) => {
  const datePickerRenderer = new IRGridDatePickerRenderer(args);
  return () => datePickerRenderer;
};

// src/js-components/grid/cell-renderer/progress.ts
var clsProgress = {
  progress: ir,
  progressVariants: or
};
var DEFAULT_PROGRESS_OPTIONS = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
};
var PROGRESS_RATIO = 100;
var DEFAULT_WIDTH = 100;
var IRGridProgressRenderer = class extends IRGridCellRenderer {
  constructor({ min = 0, max = 100, defaultIntent, afterDecimalLen = 2 }) {
    super();
    this._min = min;
    this._max = max;
    this._defaultIntent = defaultIntent;
    this._afterDecimalLen = afterDecimalLen;
  }
  render(row, col, data) {
    var _a;
    const {
      _min: min,
      _max: max,
      _afterDecimalLen: afterDecimalLen,
      _defaultIntent: defaultIntent
    } = this;
    const wrapper = document.createElement("div");
    const progress = document.createElement("div");
    wrapper.className = Nr;
    progress.className = clsProgress.progress;
    const intent = (_a = data.intent) != null ? _a : defaultIntent;
    if (intent)
      progress.classList.add(`${clsProgress.progress}--${intent}`);
    const value = getMinMaxBetween(parseFloat(data.text || "0"), min, max);
    const percent = (value - min) / (max - min) * PROGRESS_RATIO;
    setElementVars(progress, {
      [clsProgress.progressVariants.progressPercent]: `${percent}%`,
      [clsProgress.progressVariants.progressText]: `'${percent.toFixed(afterDecimalLen)}%'`
    });
    wrapper.appendChild(progress);
    return wrapper;
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    return DEFAULT_WIDTH + this.getHorizontalCellPadding(metaInfo);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return false;
  }
};
var renderGridProgress = (args = DEFAULT_PROGRESS_OPTIONS) => {
  const progressRenderer = new IRGridProgressRenderer(args);
  return () => progressRenderer;
};

// src/js-components/grid/cell-renderer/button.ts
var DEFAULT_ICON_SIZE = 26;
var DEFAULT_BUTTON_HEIGHT = 24;
var buttonCls = {
  primary: z,
  secondary: m,
  tertiary: B,
  transparent: y
};
var IRGridButtonRenderer = class extends IRGridCellRenderer {
  constructor(args) {
    super();
    this.args = args;
    if (args.onClick)
      this.onClick = args.onClick.bind(this);
  }
  onClick(ev, row, col) {
  }
  render(row, col, data) {
    var _a, _b;
    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    wrapper.className = Hr;
    button.classList.add(Br, "button");
    const color = (_a = data.intent) != null ? _a : this.args.defaultColor;
    if (color)
      button.classList.add(buttonCls[color]);
    if (this.args.outlineStyle)
      wrapper.classList.add(Sr);
    button.onclick = (ev) => this.onClick(ev, row, col);
    const icon = data.icon || this.args.defaultIcon;
    const text = ((_b = data.label) != null ? _b : this.args.defaultLabel) || "";
    if (icon) {
      const iconElement = document.createElement("i");
      iconElement.classList.add(x, "ir-icon", `ir-icon--${icon}`);
      button.appendChild(iconElement);
    }
    if (text) {
      const span = document.createElement("span");
      span.innerText = text;
      button.appendChild(span);
    }
    wrapper.appendChild(button);
    return wrapper;
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    const context = getTextWidthContext(fontSize, fontFamily);
    const icon = metaInfo.icon || this.args.defaultIcon;
    const label = metaInfo.label || this.args.defaultLabel;
    const labelWidth = context.calculateWidth(label || "") + (icon ? DEFAULT_ICON_SIZE : 0);
    return this.getHorizontalCellPadding(metaInfo) + labelWidth + this.getHorizontalCellPadding(metaInfo);
  }
  getCellInnerHeight(cell, metaInfo) {
    return DEFAULT_BUTTON_HEIGHT;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return false;
  }
};
var renderGridButton = (args) => {
  const buttonRenderer = new IRGridButtonRenderer(args != null ? args : {});
  return () => buttonRenderer;
};

// src/js-components/grid/cell-renderer/radio.ts
var clsRadio = { radio: Y, radioWrapper: _r, radioInput: $, radioText: rr };
var RADIO_DEFAULT_SIZE = 16;
var RADIO_DEFAULT_GAP = 6;
var RADIO_DEFAULT_MARGIN = RADIO_DEFAULT_GAP * 2;
var IRGridRadioCellRenderer = class extends IRGridCellRenderer {
  constructor({ onRadioClick }) {
    super();
    this._radioItemStack = [];
    if (onRadioClick)
      this.onRadioClick = onRadioClick.bind(this);
  }
  stackClickedRadio(item) {
    const top = this._radioItemStack.pop();
    if (top && (top.row !== item.row || top.col !== item.col)) {
      top.radio.checked = false;
      top.data.text = "false";
      top.data.emitter.emit("onCellInfoChanged", { row: item.row, col: item.col });
    }
    this._radioItemStack.push(item);
  }
  render(row, col, data) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const radio = document.createElement("input");
    div.className = `${Gr} ${clsRadio.radio}`;
    label.className = clsRadio.radioWrapper;
    radio.type = "radio";
    radio.className = clsRadio.radioInput;
    label.appendChild(radio);
    if (data.label) {
      const span = document.createElement("span");
      span.className = clsRadio.radioText;
      span.innerText = data.label;
      label.appendChild(span);
    }
    div.appendChild(label);
    radio.checked = data.text === "true";
    if (radio.checked === true)
      this.stackClickedRadio({ radio, data, row, col });
    label.onkeydown = (ev) => ev.preventDefault();
    radio.onclick = () => {
      const grid = data.commandManager;
      const command2 = new SetCellCommand(grid, [row, col, { text: "true" }]);
      const lastRadioSnap = this._radioItemStack[this._radioItemStack.length - 1];
      command2.onUndo = () => {
        if (lastRadioSnap) {
          grid.setCell(lastRadioSnap.row, lastRadioSnap.col, { text: "true" });
          this.onRadioClick(lastRadioSnap.row, lastRadioSnap.col);
        }
      };
      command2.onExecute = () => {
        this.onRadioClick(row, col);
      };
      grid.commandManager.pushCommandBlock(new IRCommandBlock("Click radioButton", command2));
      this.stackClickedRadio({ radio, data, row, col });
      data.text = "true";
      this.onRadioClick(row, col);
      data.emitter.emit("onCellInfoChanged", { row, col });
    };
    return div;
  }
  onRadioClick(row, col) {
  }
  getCellInnerWidth(fontSize, fontFamily, metaInfo) {
    const context = getTextWidthContext(fontSize, fontFamily);
    const labelWidth = metaInfo.label ? RADIO_DEFAULT_GAP + context.calculateWidth(metaInfo.label) : 0;
    return RADIO_DEFAULT_SIZE + RADIO_DEFAULT_MARGIN + labelWidth + this.getHorizontalCellPadding(metaInfo);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return false;
  }
};
var renderGridRadio = ({ onRadioClick }) => {
  const radioRenderer = new IRGridRadioCellRenderer({ onRadioClick });
  return () => radioRenderer;
};

// src/js-components/grid/cell-renderer/default.ts
function createCellContent(data) {
  var _a;
  const div = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = (_a = data.text) != null ? _a : "";
  div.className = hr;
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
}
function createCellContentWithIconButton(row, col, data, onClick) {
  var _a;
  const div = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = (_a = data.text) != null ? _a : "";
  div.className = hr;
  if (data.icon) {
    const button = document.createElement("button");
    const icon = document.createElement("i");
    button.setAttribute("type", "button");
    button.classList.add("icon-button", yr);
    button.onclick = (ev) => {
      onClick && onClick(ev, row, col);
    };
    icon.classList.add("ir-icon", `ir-icon--${data.icon}`);
    if (data.iconColor)
      icon.style.setProperty("--ir-icon-foreground-color", data.iconColor);
    button.appendChild(icon);
    div.appendChild(button);
  }
  div.appendChild(text);
  return div;
}
var IRGridDefaultCellRenderer = class extends IRGridCellRenderer {
  render(row, col, data) {
    return createCellContent(data);
  }
  get renderType() {
    return "default";
  }
};
var IRGridDefaultCellIconButtonRenderer = class extends IRGridCellRenderer {
  constructor({ onClick }) {
    super();
    if (onClick)
      this.onClick = onClick;
  }
  render(row, col, data) {
    return createCellContentWithIconButton(row, col, data, (ev, row2, col2) => this.onClick(ev, row2, col2));
  }
  onClick(ev, row, col) {
  }
  get renderType() {
    return "iconButton";
  }
};
var IRGridRowNoHeaderCellRenderer = class extends IRGridCellRenderer {
  constructor(fixedRowCount, ...captionList) {
    super();
    this._prefix = "";
    this._fixedRowCount = fixedRowCount;
    this._captionList = captionList;
  }
  get prefix() {
    return this._prefix;
  }
  get renderType() {
    return "rowNo";
  }
  get editable() {
    return false;
  }
  set prefix(prefix) {
    this._prefix = prefix;
  }
  render(row, col, data) {
    const div = document.createElement("div");
    const text = document.createElement("div");
    const r = row - this._fixedRowCount;
    div.className = hr;
    const cellText = r < this._captionList.length ? this._captionList[r] : `${this._prefix}${1 + r - this._captionList.length}`;
    text.innerText = cellText;
    data.text = cellText;
    div.appendChild(text);
    return div;
  }
};
var renderGridCellDefault = () => {
  const defaultRenderer = new IRGridDefaultCellRenderer();
  return () => defaultRenderer;
};
function renderGridCellIconButton({ onClick }) {
  const renderer = new IRGridDefaultCellIconButtonRenderer({ onClick });
  return () => renderer;
}
function renderRowNoHeaderCell(fixedRowCount, ...prevCaptionList) {
  const rowNoRenderer = new IRGridRowNoHeaderCellRenderer(fixedRowCount, ...prevCaptionList);
  return () => rowNoRenderer;
}

// src/js-components/grid/cell-renderer/custom.ts
var customRendererCache = /* @__PURE__ */ new WeakMap();
var CustomCellRenderer = class extends IRGridDefaultCellRenderer {
  constructor(renderFunc) {
    super();
    this.render = renderFunc.bind(this);
  }
  get renderType() {
    return "custom";
  }
};
function createCustomRenderer(renderFunc) {
  const cachedRenderer = customRendererCache.get(renderFunc);
  if (cachedRenderer)
    return cachedRenderer;
  const defaultCellRenderer = new CustomCellRenderer(renderFunc);
  customRendererCache.set(renderFunc, defaultCellRenderer);
  return defaultCellRenderer;
}

// src/js-components/grid/clipboard/clipboard.ts
function getPastingContext(grid, copyOptions) {
  function getPastingRange(selection, cellMetaInfoMatrix) {
    if (cellMetaInfoMatrix.length === 0)
      throw new Error("No pasting data.");
    const copySelection = { ...selection };
    const dataHeight = cellMetaInfoMatrix.length;
    const dataWidth = cellMetaInfoMatrix[0].length;
    const bottom = copySelection.top + dataHeight;
    const right = copySelection.left + dataWidth;
    for (let row = selection.bottom + 1; row < bottom; ++row) {
      if (grid.hasRow(row) || grid.onAutoInsertRow(row))
        copySelection.bottom = row;
    }
    for (let col = selection.right + 1; col < right; ++col) {
      if (grid.hasColumn(col) || grid.onAutoInsertColumn(col))
        copySelection.right = col;
    }
    return copySelection;
  }
  function beforePastingList(pasteRange, cellMetaInfoMatrix) {
    if (cellMetaInfoMatrix.length === 0)
      throw new Error("No pasting data.");
    const dataHeight = cellMetaInfoMatrix.length;
    const dataWidth = cellMetaInfoMatrix[0].length;
    const pastingCellList = [];
    const rangeHeight = pasteRange.bottom - pasteRange.top + 1;
    const rangeWidth = pasteRange.right - pasteRange.left + 1;
    function getPastingData(y2, x2) {
      const [adjustedY, adjustedX] = [y2 % dataHeight, x2 % dataWidth];
      return cellMetaInfoMatrix[adjustedY][adjustedX];
    }
    for (const { y: y2, x: x2 } of get2DGenerator(rangeHeight, rangeWidth)) {
      const [row, col] = [y2 + pasteRange.top, x2 + pasteRange.left];
      !grid.hasRow(row) && grid.onAutoInsertRow(row) && grid.addRow();
      !grid.hasColumn(col) && grid.onAutoInsertColumn(col) && grid.addColumn();
      if (!grid.hasRow(row) || !grid.hasColumn(col))
        continue;
      const cell = grid.cell(row, col);
      const cellMetaInfo = getPastingData(y2, x2);
      if (cellMetaInfo.cellVisible && grid.onCheckPasteCell(cell, cellMetaInfo.text))
        pastingCellList.push({
          cell,
          cellMetaInfo: {
            text: cellMetaInfo.text,
            cellVisible: cellMetaInfo.cellVisible,
            rowSpan: copyOptions.rowSpan ? cellMetaInfo.rowSpan : 1,
            colSpan: copyOptions.colSpan ? cellMetaInfo.colSpan : 1,
            isFormatted: false
          }
        });
    }
    return pastingCellList;
  }
  function pasteTask(pastingCellList) {
    for (const { cell, cellMetaInfo } of pastingCellList) {
      const { rowSpan, colSpan, cellVisible } = cellMetaInfo;
      if (!cellVisible)
        continue;
      const { row, col } = cell;
      const toBeMerged = rowSpan > 1 || colSpan > 1;
      if (toBeMerged) {
        const mergeRange = { top: row, left: col, bottom: row + rowSpan - 1, right: col + colSpan - 1 };
        grid.mergeCells(mergeRange.top, mergeRange.left, mergeRange.bottom, mergeRange.right);
      }
      grid.setCell(row, col, { text: cellMetaInfo.text });
      grid.onClipboardAfterPasteCell(cell);
    }
  }
  return { getPastingRange, beforePastingList, pasteTask };
}

// src/js-components/grid/clipboard/ir-grid-cell.ts
function getIRGridCellClipboardPayload(cellMetaCopyMatrix) {
  return JSON.stringify(cellMetaCopyMatrix);
}
function parseIRGridCellClipboardData(payload) {
  return JSON.parse(payload);
}

// src/js-components/grid/clipboard/text-html.ts
function getHtmlTextPayload(cellMetaCopyMatrix) {
  const doc = new Document();
  const table = doc.createElement("table");
  cellMetaCopyMatrix.forEach((row) => {
    const tr2 = doc.createElement("tr");
    row.filter((cell) => cell.cellVisible).forEach((cell) => {
      const td = doc.createElement("td");
      td.textContent = cell.text;
      td.setAttribute("rowSpan", `${cell.rowSpan}`);
      td.setAttribute("colSpan", `${cell.colSpan}`);
      tr2.appendChild(td);
    });
    table.appendChild(tr2);
  });
  doc.appendChild(table);
  return doc.documentElement.outerHTML;
}
function parseHtmlTextPayload(html) {
  const domParser = new DOMParser();
  const doc = domParser.parseFromString(html, "text/html");
  const rows = doc.querySelectorAll("tr");
  if (rows.length === 0) {
    console.warn("No tr element in clipboard data");
    return [];
  }
  const copyMetaInfo = Array(rows.length).fill(void 0).map(() => []);
  function fillEmptyData(row, col, rowSpan, colSpan) {
    for (let i = row; i < row + rowSpan; ++i) {
      for (let j2 = col; j2 < col + colSpan; ++j2) {
        copyMetaInfo[i][j2] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: false,
          isFormatted: false
        };
      }
    }
  }
  function getNextColId(col) {
    let colId = col;
    while (copyMetaInfo[rowId][colId] !== void 0)
      ++colId;
    return colId;
  }
  let rowId = 0;
  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    let colId = getNextColId(0);
    for (const cell of cells) {
      if (cell.rowSpan > 1 || cell.colSpan > 1)
        fillEmptyData(rowId, colId, cell.rowSpan, cell.colSpan);
      copyMetaInfo[rowId][colId] = {
        text: cell.innerText,
        rowSpan: cell.rowSpan,
        colSpan: cell.colSpan,
        cellVisible: true,
        isFormatted: cell.hasAttribute("class")
      };
      colId = getNextColId(colId);
    }
    ++rowId;
  }
  return copyMetaInfo;
}

// src/utils/array.ts
function checkIfMatrixIsRectangle(cellMatrix) {
  if (cellMatrix.length === 0)
    return true;
  const columnCount = cellMatrix[0].length;
  return cellMatrix.every((row) => row.length === columnCount);
}

// src/js-components/grid/clipboard/text-plain.ts
var COLUMN_SEPARATOR = "	";
var LINE_SEPARATOR = "\n";
function getPlainTextPayload(cellMetaCopyMatrix) {
  if (!checkIfMatrixIsRectangle(cellMetaCopyMatrix))
    throw new Error("Wrong text matrix dimension");
  return cellMetaCopyMatrix.map(
    (row) => row.map(
      ({ text }) => text
    ).join(COLUMN_SEPARATOR)
  ).join(LINE_SEPARATOR);
}
function parsePlainTextPayload(payload) {
  if (payload.length === 0)
    return [];
  const data = [];
  const parsingStack = [];
  const lineBuffer = [];
  function flushParsingStack() {
    lineBuffer.push({
      text: parsingStack.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: true,
      isFormatted: false
    });
    parsingStack.length = 0;
  }
  function flushLineBuffer() {
    var _a;
    flushParsingStack();
    if (data.length === 0 || lineBuffer.length === ((_a = data[0]) == null ? void 0 : _a.length))
      data.push([...lineBuffer]);
    lineBuffer.length = 0;
  }
  for (const ch of payload) {
    if (ch === "\r")
      continue;
    else if (ch === COLUMN_SEPARATOR)
      flushParsingStack();
    else if (ch === LINE_SEPARATOR)
      flushLineBuffer();
    else
      parsingStack.push(ch);
  }
  if (parsingStack.length > 0 || lineBuffer.length > 0)
    flushLineBuffer();
  return data;
}

// src/js-components/grid/clipboard/utils.ts
var FORMAT_INTERFACE = [
  {
    format: "ir-grid/cell",
    parseFunc: parseIRGridCellClipboardData,
    payloadFunc: getIRGridCellClipboardPayload
  },
  {
    format: "text/html",
    parseFunc: parseHtmlTextPayload,
    payloadFunc: getHtmlTextPayload
  },
  {
    format: "text/plain",
    parseFunc: parsePlainTextPayload,
    payloadFunc: getPlainTextPayload
  }
];
function setClipboardData(transferData, cellCopyMetaMatrix) {
  FORMAT_INTERFACE.forEach(
    ({ format, payloadFunc }) => transferData.setData(format, payloadFunc(cellCopyMetaMatrix))
  );
}
function isOmitted(cell) {
  return cell.isFormatted && cell.text.startsWith("#");
}
function hasOmittedData(data) {
  return data.some((row) => row.some((cell) => isOmitted(cell)));
}
function getCombinedData(data, textData) {
  var _a, _b;
  for (let r = 0; r < data.length; ++r) {
    const length = data[r].length;
    for (let c = 0; c < length; ++c) {
      if (((_b = (_a = textData[r]) == null ? void 0 : _a[c]) == null ? void 0 : _b.text) && isOmitted(data[r][c]))
        data[r][c].text = textData[r][c].text;
    }
  }
  return data;
}
function getCopyMetaInfoFromClipboard(transferData) {
  for (const { format, parseFunc } of FORMAT_INTERFACE) {
    const data = transferData.getData(format);
    if (data !== "") {
      const parsedData = parseFunc(data);
      if (!hasOmittedData(parsedData))
        return parsedData;
      const plainText = transferData.getData(FORMAT_INTERFACE[2].format);
      return getCombinedData(
        parsedData,
        FORMAT_INTERFACE[2].parseFunc(plainText)
      );
    }
  }
  console.warn("No relevant data format in clipboard!");
  return [];
}

// src/js-components/grid/context/activate-header.state.ts
var ActivateHeaderCellState = class extends ReactiveState {
  constructor() {
    super([]);
  }
};

// src/js-components/grid/context/grid-mode.state.ts
var IRGridModeState = class extends ReactiveState {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
};

// src/js-components/grid/grid.range.util.ts
var import_lodash4 = __toESM(require_lodash(), 1);

// src/js-components/grid/utility/generator.ts
var IRGridCellGenerator = class {
  constructor(grid) {
    this._grid = grid;
  }
  *getSelectionGenerator({ top, left, bottom, right }) {
    right = Math.min(right, this._grid.getColCount() - 1);
    bottom = Math.min(bottom, this._grid.getRowCount() - 1);
    for (let r = top; r <= bottom; r++)
      for (let c = left; c <= right; c++)
        yield this._grid.cell(r, c);
  }
  *getSelectionHeaderIterator({ top, left, bottom, right }) {
    right = Math.min(right, this._grid.getColCount() - 1);
    bottom = Math.min(bottom, this._grid.getRowCount() - 1);
    for (let r = 0; r < this._grid.headerRows; ++r)
      for (let c = left; c <= right; ++c)
        yield this._grid.cell(r, c);
    for (let r = top; r <= bottom; ++r)
      for (let c = 0; c < this._grid.headerColumns; ++c)
        yield this._grid.cell(r, c);
  }
  getCanClearCellCount(range) {
    let count = 0;
    for (const cell of this.getSelectionGenerator(range))
      if (cell.canClear)
        count++;
    return count;
  }
};

// src/js-components/grid/grid.range.util.ts
var IRGridRangeUtil = class {
  constructor(grid) {
    this._grid = grid;
    this._generator = new IRGridCellGenerator(grid);
  }
  adjustRange(range) {
    const [rowMin, rowMax] = [this._grid.headerRows, this._grid.getRowCount() - 1];
    const [colMin, colMax] = [this._grid.headerColumns, this._grid.getColCount() - 1];
    const adjustRange = {
      top: getMinMaxBetween(range.top, rowMin, rowMax),
      left: getMinMaxBetween(range.left, colMin, colMax),
      bottom: getMinMaxBetween(range.bottom, rowMin, rowMax),
      right: getMinMaxBetween(range.right, colMin, colMax)
    };
    if (adjustRange.top > rowMax || adjustRange.bottom < rowMin || adjustRange.left > colMax || adjustRange.right < colMin)
      return null;
    return adjustRange;
  }
  extendRange(range) {
    const generator = this._generator;
    const newRange = { ...range };
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
  getTextMatrixByRange(range) {
    const arrayBuffer = [];
    for (let row = range.top; row <= range.bottom; ++row) {
      arrayBuffer.push(
        import_lodash4.default.range(range.left, range.right + 1).map((col) => this._grid.cell(row, col).text)
      );
    }
    return arrayBuffer;
  }
  getCellMatrixByRange(range) {
    const arrayBuffer = [];
    for (let row = range.top; row <= range.bottom; ++row) {
      arrayBuffer.push(
        import_lodash4.default.range(range.left, range.right + 1).map((col) => this._grid.cell(row, col))
      );
    }
    return arrayBuffer;
  }
  getCellListByColumn(left, right) {
    const top = 0, bottom = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top, left, bottom, right })];
  }
  getColumnListByColumn(left, right) {
    return import_lodash4.default.range(left, right + 1).map((col) => this._grid.getColumn(col));
  }
};

// src/js-components/grid/context/selection.state.ts
var SelectionRangeState = class extends ReactiveState {
  constructor(grid) {
    super(null, (pipe) => {
      const rangeUtil = new IRGridRangeUtil(grid);
      return pipe.pipe(
        // activeCell이, range를 벗어난다면 재조정
        map((selection) => {
          if (!selection)
            return null;
          if (grid.getRowCount() === grid.headerRows && grid.getColCount() === grid.headerColumns)
            return null;
          const { activeCell, range } = selection;
          if (activeCell.element.isConnected && activeCell.row >= range.top && activeCell.row <= range.bottom && activeCell.col >= range.left && activeCell.col <= range.right)
            return selection;
          else
            return {
              activeCell: grid.cell(range.top, range.left),
              range: selection.range
            };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        map((selection) => {
          if (!selection)
            return null;
          const adjustRange = rangeUtil.adjustRange(selection.range);
          if (!adjustRange)
            return null;
          return { activeCell: selection.activeCell, range: adjustRange };
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        map((selection) => selection ? { activeCell: selection.activeCell, range: rangeUtil.extendRange(selection.range) } : null)
      );
    });
  }
};

// src/js-components/grid/context/grid.context.ts
var IRGridStateContext = class {
  constructor(grid) {
    this._selectionState = new SelectionRangeState(grid);
    this._gridModeState = new IRGridModeState();
    this._headerCellListState = new ActivateHeaderCellState();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(modeContext) {
    this.gridModeState.next(modeContext);
  }
  get isIdle() {
    return this._gridModeState.isIdle;
  }
  get selectionRangeState() {
    return this._selectionState;
  }
  get gridModeState() {
    return this._gridModeState;
  }
  get activateHeaderCellState() {
    return this._headerCellListState;
  }
};

// src/js-components/grid/grid-cell.ts
var zIdLevelList = [
  le.zLevel0,
  le.zLevel1,
  le.zLevel2,
  le.zLevel3,
  le.zLevel4,
  le.zLevel5,
  le.zLevel6,
  le.zLevel7,
  le.zLevel8,
  le.zLevel9
];
var STICKY_Z_INDEX = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
};
var IRGridCell = class {
  constructor({ row, col, tag, metaInfo, cellRenderer }) {
    this._row = -1;
    this._col = -1;
    this._element = null;
    this._cellType = "body-cell";
    this._lastEditSelection = { start: 0, end: 0 };
    this._metaInfo = { ...metaInfo };
    this._tag = tag;
    this._cellRenderer = cellRenderer;
    this._uuid = v4_default();
    this._row = row;
    this._col = col;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(_e) || this.element.tagName === "TH";
  }
  get uuid() {
    return this._uuid;
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this._metaInfo.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this.mergeInfo.rowSpan > 1 || this.mergeInfo.colSpan > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this._metaInfo);
  }
  get fontSize() {
    return this._metaInfo.fontSize || getThemeStore().getStoreValue("grid.defaultFontSize");
  }
  get fontFamily() {
    return this._metaInfo.fontFamily || getThemeStore().getStoreValue("grid.defaultFontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this.element.rowSpan - 1,
      right: this.col + this.element.colSpan - 1
    };
  }
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this._metaInfo);
  }
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this._metaInfo);
  }
  get mergeInfo() {
    return {
      rowSpan: this.element.rowSpan,
      colSpan: this.element.colSpan
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
    return this.element.style.display !== "none";
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get canClear() {
    const { disabled, readonly, text } = this.metaInfo;
    return disabled !== true && readonly !== true && this.renderType === "default" && text !== "";
  }
  get text() {
    const { text } = this._metaInfo;
    if (text === void 0 || text === null)
      return "";
    return text;
  }
  get cellType() {
    return this._cellType;
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
  initElement() {
    const element = document.createElement(this._tag);
    element.rowSpan = 1;
    element.colSpan = 1;
    element.classList.add(wr, this._tag === "th" ? Wr : kr);
    element.setAttribute("data-row", this._row.toString());
    element.setAttribute("data-col", this._col.toString());
    element.setAttribute("data-type", this._cellType);
    element.onclick = () => this.onClick(this);
    element.onmouseup = (ev) => {
      if (ev.button === 2)
        this.onRightClick(this, ev);
    };
    element.ondblclick = (ev) => {
      if (!checkTargetIsHTMLElement(ev.target))
        return;
      if (ev.target.tagName === "I")
        return;
      if (ev.target.tagName === "TEXTAREA")
        return;
      this.onDblClick(this);
    };
    return element;
  }
  get element() {
    if (this._element === null)
      this._element = this.initElement();
    return this._element;
  }
  get editable() {
    if (this._metaInfo.editable === false)
      return false;
    if (this._metaInfo.disabled)
      return false;
    if (this.onCheckReadonly())
      return false;
    if (this._getRenderInstance().editable === false)
      return false;
    return true;
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
  get zIndexVariant() {
    return this.element.style.getPropertyValue("--grid-sticky-cell-z-index");
  }
  /*
   * Setters
   */
  set visible(visible) {
    if (visible && !this.mergeMain) {
      this.element.style.removeProperty("display");
      this.render();
    } else
      this.element.style.display = "none";
  }
  set isDragOver(flag) {
    if (flag)
      this.element.classList.add("is-dragging");
    else
      this.element.classList.remove("is-dragging");
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
    this._cellType = type;
  }
  set height(height) {
    if (height)
      setElementVars(this.element, { [le.cellHeight]: `${height}px` });
    else
      setElementVars(this.element, { [le.cellHeight]: "" });
  }
  set mergeInfo({ rowSpan = 1, colSpan = 1 }) {
    if (rowSpan === 1)
      this.height = null;
    this.element.rowSpan = rowSpan;
    this.element.colSpan = colSpan;
    this.render();
  }
  set mergeMain(cell) {
    this._mergeMain = cell;
    this.visible = cell === void 0;
  }
  set row(row) {
    this._row = row;
    this.element.setAttribute("data-row", row.toString());
  }
  set col(col) {
    this._col = col;
    this.element.setAttribute("data-col", col.toString());
  }
  set cellRenderer(renderer) {
    this._cellRenderer = renderer;
    this.render();
  }
  /*
   * Public Methods
   */
  select() {
    if (!this.isSelected) {
      this.element.classList.add("is-selected");
      this.onSelect(this);
    }
  }
  updateCellMetaInfo(metaInfo, text) {
    Object.assign(this._metaInfo, metaInfo);
    text && Object.assign(this._metaInfo, { text });
    this.render();
  }
  release() {
    this.element.classList.remove("is-selected");
    this.deactivate();
  }
  setLastSelection(start, end) {
    this._lastEditSelection = { start, end };
  }
  activate() {
    if (this._mergeMain)
      this._mergeMain.element.classList.add("is-active");
    else
      this.element.classList.add("is-active");
  }
  deactivate() {
    this.syncClassRemoveWithMergeMain("is-active");
  }
  updateReadonlyStatus() {
    toggleClass(this.element, "is-readonly", this.onCheckReadonly());
  }
  setStickyLeft(left) {
    this.element.style.left = `${left}px`;
  }
  removeStickyLeft() {
    this.element.style.removeProperty("left");
  }
  setStickyTop(top) {
    this.element.style.top = `${top}px`;
  }
  removeStickyTop() {
    this.element.style.removeProperty("top");
  }
  setStickyZIndex(level, top, left) {
    this.element.style.removeProperty("--grid-sticky-cell-z-index");
    this.removeStickyCls();
    this.removeStickyTop();
    this.removeStickyLeft();
    if (level === null)
      return;
    setElementVars(this.element, { [le.stickyCellZId]: zIdLevelList[level] });
    this.addStickyCls();
    if (level >= STICKY_Z_INDEX.lv5) {
      this.setStickyTop(top);
    }
    if (level === STICKY_Z_INDEX.lv9 || level === STICKY_Z_INDEX.lv7 || level === STICKY_Z_INDEX.lv6 || level === STICKY_Z_INDEX.lv4 || level === STICKY_Z_INDEX.lv3)
      this.setStickyLeft(left);
  }
  updateCellStatus() {
    toggleClass(this.element, "is-disabled", this._metaInfo.disabled === true);
    toggleClass(this.element, "is-asc", this._metaInfo.sortOrder === "ASC");
    toggleClass(this.element, "is-desc", this._metaInfo.sortOrder === "DESC");
    this.updateReadonlyStatus();
    if (this._metaInfo.isError)
      this.addMark(xr);
    else if (this._metaInfo.hasMemo)
      this.addMark(Cr);
    else if (this._mark)
      this.removeMark();
    this.element.style.textAlign = this._metaInfo.horizontalAlign || "";
    this.element.style.verticalAlign = this._metaInfo.verticalAlign || "";
    this.element.style.fontSize = this.fontSize;
    this.element.style.fontFamily = this.fontFamily;
    this.element.style.color = this._metaInfo.textColor || "";
    this.element.style.backgroundColor = this._metaInfo.backColor || "";
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof IRGridCellRenderer)
      return this._cellRenderer;
    if (typeof this._cellRenderer === "function") {
      const renderer = this._cellRenderer(this.row, this.col, this._metaInfo);
      if (renderer instanceof IRGridCellRenderer)
        return renderer;
      if (renderer instanceof HTMLElement)
        return createCustomRenderer(() => renderer);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this.row, this.col, this._metaInfo);
  }
  replaceElement(element) {
    this.removeChildren();
    this.element.appendChild(element);
  }
  checkInputValidation(value) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(value) : true;
  }
  render() {
    if (this._element === null)
      return;
    if (!this.visible)
      return;
    this.removeChildren();
    this.updateCellStatus();
    this.element.appendChild(this._getRenderElement());
  }
  clear() {
    this.cellInfo = { text: "" };
    this.onClear(this);
  }
  addStickyCls() {
    this.element.classList.add(_e);
  }
  removeStickyCls() {
    this.element.classList.remove(_e);
  }
  /*
   * Events
   */
  onClick(_cell) {
  }
  onDblClick(_cell) {
  }
  onRightClick(_cell, _ev) {
  }
  onSelect(_cell) {
  }
  onClear(_cell) {
  }
  onCheckReadonly() {
    return this._metaInfo.readonly === true;
  }
  /*
   * Private Methods
   */
  removeChildren() {
    while (this.element.lastChild)
      this.element.lastChild.remove();
  }
  syncClassRemoveWithMergeMain(...classList) {
    if (this.mergeMain)
      this.mergeMain.element.classList.remove(...classList);
    else
      this.element.classList.remove(...classList);
  }
  addMark(cls) {
    if (!this._mark)
      this._mark = document.createElement("span");
    this._mark.className = cls;
    this.element.appendChild(this._mark);
  }
  removeMark() {
    if (this._mark) {
      this._mark.remove();
      this._mark = void 0;
    }
  }
};

// src/js-components/grid/grid-debounce-manager.ts
var import_lodash5 = __toESM(require_lodash(), 1);
var NOT_SCHEDULED = -1;
var SCHEDULE_KEY = [
  "nothing",
  // row id, column id, left top, height 영향
  "updateColumnId",
  "updateRowId",
  // 상위에서 height가 영향 받으므로, top을 그 다음으로 처리함
  "updateTop",
  "updateLeft",
  "updateRowsStickyLeft",
  //
  "virtualRender",
  "resizeGridWrapperHeight",
  "generateScrollBarClass",
  "adjustSelection",
  "updateSelection",
  "updateSelectionByScroll"
];
var IRGridDebounceManager = class {
  constructor(grid, gridContext, wrapperElement, tbody, contextElement, selector) {
    this._scheduledTaskSet = /* @__PURE__ */ new Set();
    this._afterRenderCallbackList = [];
    this._rafHandler = NOT_SCHEDULED;
    this._grid = grid;
    this._gridContext = gridContext;
    this._wrapperElement = wrapperElement;
    this._tbody = tbody;
    this._contextElement = contextElement;
    this._selector = selector;
    this._gridRangeUtil = new IRGridRangeUtil(grid);
    this._emptyRow = document.createElement("tr");
    this._emptyRow.className = fr;
    this._emptyRow.dataset["hidden"] = "true";
    setElementVars(this._emptyRow, {
      [le.emptyRowHeight]: "0"
    });
    this._tbody.appendChild(this._emptyRow);
    grid.addGlobalEventListener(contextElement, "scroll", (ev) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll");
      ev.preventDefault();
    });
  }
  renderTask() {
    const taskSetClone = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear();
    this._rafHandler = NOT_SCHEDULED;
    (0, import_lodash5.default)(SCHEDULE_KEY).filter((key) => taskSetClone.has(key)).forEach((key) => {
      try {
        key !== "nothing" && this[key].call(this);
      } catch (err) {
        console.error(key, err);
      }
    });
    this._afterRenderCallbackList.forEach((callback) => callback());
    this._afterRenderCallbackList.length = 0;
  }
  forceRunTasks() {
    this._rafHandler !== NOT_SCHEDULED && cancelAnimationFrame(this._rafHandler);
    this.renderTask();
  }
  addTask(key) {
    this._scheduledTaskSet.add(key);
    if (this._rafHandler === NOT_SCHEDULED)
      this._rafHandler = requestAnimationFrame(() => this.renderTask());
    return this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  getActualBodyRowsInfo() {
    var _a, _b;
    const rowCounts = this._grid.getRowCount() - 1;
    const freezedRowCount = Math.min(
      this._grid.getFreezedRowCount(),
      rowCounts
    );
    const { fixedRowHeight } = this._grid;
    const { scrollTop, clientHeight } = this._contextElement;
    const firstRow = (_a = this._grid.getRowByTop(fixedRowHeight + scrollTop + 1)) != null ? _a : this._grid.firstRow;
    const lastRow = (_b = this._grid.getRowByTop(scrollTop + clientHeight)) != null ? _b : this._grid.lastRow;
    const viewRowList = import_lodash5.default.range(0, freezedRowCount);
    if (!firstRow || !lastRow)
      return { emptyRowHeight: 0, viewRowList };
    const extendedStartRowId = firstRow.getTopRowId();
    const extendedLastRowId = lastRow.getBottomRowId();
    const adjustedFirstRow = this._grid.getRow(Math.max(extendedStartRowId - 2, freezedRowCount));
    const adjustedLastRow = this._grid.getRow(Math.min(extendedLastRowId + 2, rowCounts));
    return {
      emptyRowHeight: adjustedFirstRow.top - fixedRowHeight,
      // viewport row 영역 list에 추가
      viewRowList: viewRowList.concat(import_lodash5.default.range(adjustedFirstRow.rowId, adjustedLastRow.rowId + 1))
    };
  }
  getGridRow(rowElement) {
    var _a;
    const rowId = parseInt((_a = rowElement.dataset["row"]) != null ? _a : "", 10);
    if (rowId !== rowId)
      return null;
    return this._grid.getRow(rowId);
  }
  virtualRender() {
    const { emptyRowHeight, viewRowList } = this.getActualBodyRowsInfo();
    const viewRowSet = new Set(viewRowList);
    const freezeRowsCount = this._grid.getFreezedRowCount();
    const { headerRows } = this._grid;
    let curRow = this._tbody.lastElementChild;
    while (curRow) {
      const row = this.getGridRow(curRow);
      curRow = curRow.previousElementSibling;
      if (row && !viewRowSet.has(row.rowId))
        row.unmount();
    }
    if (emptyRowHeight === 0) {
      this._emptyRow.dataset["hidden"] = "true";
    } else {
      this._emptyRow.dataset["hidden"] = "false";
      setElementVars(this._emptyRow, {
        [le.emptyRowHeight]: `${emptyRowHeight}px`
      });
    }
    let beforeMounted = null;
    let isAddedEmptyRow = false;
    for (const rowId of viewRowList) {
      const row = this._grid.getRow(rowId);
      if (rowId < freezeRowsCount)
        !row.isFreezed && row.freeze(rowId < headerRows);
      else if (isAddedEmptyRow === false) {
        if (beforeMounted === null)
          this._tbody.insertAdjacentElement("afterbegin", this._emptyRow);
        else
          beforeMounted.insertAdjacentElement("afterend", this._emptyRow);
        isAddedEmptyRow = true;
        beforeMounted = this._emptyRow;
      }
      if (row.isMounted) {
        beforeMounted = row.element;
        continue;
      }
      if (beforeMounted === null)
        row.mount(this._tbody, "afterbegin");
      else
        row.mount(beforeMounted, "afterend");
      beforeMounted = row.element;
    }
  }
  updateRowsStickyLeft() {
    for (let i = 0; i < this._grid.getRowCount(); i++)
      this._grid.getRow(i).updateStickyStatus();
  }
  updateSelection() {
    this._selector.update();
  }
  updateLeft() {
    const colCount = this._grid.getColCount();
    let columnId = 0;
    let left = 0;
    while (columnId < colCount) {
      const column = this._grid.getColumn(columnId);
      column.left = left;
      if (column.visible)
        left = column.right;
      ++columnId;
    }
  }
  updateTop() {
    const rowCount = this._grid.getRowCount();
    let rowId = 0;
    let top = 0;
    while (rowId < rowCount) {
      const row = this._grid.getRow(rowId);
      row.top = top;
      if (row.visible)
        top = row.bottom;
      ++rowId;
    }
  }
  updateColumnId() {
    const colCount = this._grid.getColCount();
    let columnId = 0;
    while (columnId < colCount) {
      const column = this._grid.getColumn(columnId);
      column.columnId = columnId;
      ++columnId;
    }
    this._grid.render();
  }
  updateRowId() {
    const rowCount = this._grid.getRowCount();
    const freezedRowCount = this._grid.getFreezedRowCount();
    let rowId = 0;
    while (rowId < rowCount) {
      const row = this._grid.getRow(rowId);
      row.rowId = rowId;
      if (row.isFreezed && rowId >= freezedRowCount)
        row.unfreeze();
      else if (!row.isFreezed && rowId < freezedRowCount)
        row.freeze();
      row.render();
      ++rowId;
    }
  }
  adjustSelection() {
    const selection = this._gridContext.selectionRangeState.value;
    if (!selection)
      return this._grid.releaseCells();
    const adjust = this._gridRangeUtil.adjustRange(selection.range);
    if (!adjust)
      return this._grid.releaseCells();
    this._grid.select(this._gridRangeUtil.extendRange(adjust));
  }
  updateSelectionByScroll() {
    this._selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this._wrapperElement.style.height = `${this._grid.height}px`;
  }
  generateScrollBarClass() {
    this._grid.generateScrollBarClass();
  }
  addAfterRenderTask(callback) {
    this._afterRenderCallbackList.push(callback);
  }
  get isScheduled() {
    return this._scheduledTaskSet.size > 0;
  }
};

// src/js-components/grid/grid-row.ts
var import_lodash6 = __toESM(require_lodash(), 1);

// src/js-components/grid/grid.constants.ts
var ROW_BORDER_SIZE = 1;
var COLUMN_BORDER_SIZE = 1;

// src/js-components/grid/grid-row.ts
var IRGridRow = class {
  constructor({ grid, rowId, height, top, rowType }) {
    this._rowElement = null;
    this._top = -1;
    this._maxCellHeight = 0;
    this._uuid = v4_default();
    this._stickyColumns = 0;
    this._height = 0;
    this._isCalledOnMounted = false;
    this._grid = grid;
    this._cells = [];
    this._rowType = rowType;
    this._rowId = rowId;
    this._maxCellHeight = height;
    this._isMounted = false;
    this._height = height;
    this._top = top;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((cell) => cell.visible && cell.mergeInfo.rowSpan === 1).reduce((height, cell) => Math.max(height, cell.innerHeight), 0);
  }
  get isFreezed() {
    return this.element.classList.contains(oe);
  }
  get uuid() {
    return this._uuid;
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this.element.classList.contains(ie);
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  initRowElement() {
    const tr2 = document.createElement("tr");
    setElementVars(tr2, {
      [le.cellHeight]: `${this._height}px`
    });
    tr2.setAttribute("data-top", this._top.toString());
    tr2.dataset["row"] = this._rowId.toString();
    this._rowElement = tr2;
    for (const cell of this._cells) {
      tr2.appendChild(cell.element);
      cell.setStickyZIndex(this.getFreezedCellType(cell.col), this._top, this._grid.getColumnLeft(cell.col));
      if (this.isMounted)
        cell.render();
    }
    return tr2;
  }
  get element() {
    if (this._rowElement === null)
      this._rowElement = this.initRowElement();
    return this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + ROW_BORDER_SIZE;
  }
  get bottom() {
    if (!this.visible)
      return this._top;
    return this._top + this.heightWithBorder;
  }
  get bottomByCellHeight() {
    return this._top + this._maxCellHeight;
  }
  get stickyColumns() {
    return this._stickyColumns;
  }
  get top() {
    return this._top;
  }
  get visible() {
    return this.element.style.display !== "none";
  }
  /*
   * Setters
   */
  set rowId(row) {
    if (this._rowElement)
      this._rowElement.dataset["row"] = row.toString();
    this._rowId = row;
    this._cells.forEach((cell) => cell.row = row);
    this.render();
  }
  set textColor(color) {
    this.element.style.color = color;
  }
  set height(height) {
    this._height = height;
    setElementVars(this.element, {
      [le.cellHeight]: `${height}px`
    });
    this.onChangedHeight(this, height);
  }
  set top(value) {
    this._top = value;
    this.element.setAttribute("data-top", value.toString());
    this.updateStickyStatus();
  }
  set visible(visible) {
    if (visible) {
      this.element.style.removeProperty("display");
      this.render();
    } else
      this.element.style.display = "none";
  }
  /*
   * Public Methods
   */
  unmount() {
    this._isMounted = false;
    this.element.remove();
  }
  updateMaxCellHeight() {
    const rowHeight = this.height;
    this._maxCellHeight = this._cells.reduce((h, cell) => {
      var _a;
      return Math.max(h, (_a = cell.height) != null ? _a : rowHeight);
    }, rowHeight);
  }
  removeCells(left, right) {
    import_lodash6.default.range(left, right + 1).forEach((col) => this._cells[col].element.remove());
    const removedCols = 1 + right - left;
    this._cells.splice(left, removedCols);
    import_lodash6.default.range(left, this._cells.length).forEach((col) => {
      this._cells[col].col -= removedCols;
      this._cells[col].render();
    });
  }
  /**
   * 현재 row에서 가장 위에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 top을 반환
   */
  getTopRowId() {
    let topRowId = this._rowId;
    for (const cell of this._cells) {
      if (cell.mergeMain)
        topRowId = Math.min(topRowId, cell.mergeMain.row);
    }
    return topRowId;
  }
  /**
   * 현재 row에서 가장 아래에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 bottom을 반환
   */
  getBottomRowId() {
    let bottomRowId = this._rowId;
    for (const cell of this._cells) {
      if (cell.mergeMain)
        bottomRowId = Math.max(bottomRowId, cell.mergeMain.bottom);
    }
    return bottomRowId;
  }
  getFreezedCellType(col) {
    const isFreezedColumn = col < this._grid.getFreezedColumnCount();
    if (this.isHeaderRow)
      return isFreezedColumn ? STICKY_Z_INDEX.lv9 : STICKY_Z_INDEX.lv8;
    if (this.isFreezed)
      if (isFreezedColumn)
        return col < this._grid.headerColumns ? STICKY_Z_INDEX.lv7 : STICKY_Z_INDEX.lv6;
      else
        return STICKY_Z_INDEX.lv5;
    if (isFreezedColumn)
      return col < this._grid.headerColumns ? STICKY_Z_INDEX.lv4 : STICKY_Z_INDEX.lv3;
    return null;
  }
  addCell(cell) {
    this._cells.push(cell);
    if (this._rowElement) {
      this._rowElement.appendChild(cell.element);
      cell.setStickyZIndex(this.getFreezedCellType(cell.col), this._top, this._grid.getColumnLeft(cell.col));
      cell.render();
    }
  }
  insertCells(cells, col) {
    if (this._cells.length < col)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${col}`);
    const target = this._cells[col].element;
    import_lodash6.default.range(col, this._cells.length).forEach((id) => {
      this._cells[id].col += cells.length;
      this._cells[id].render();
    });
    this._cells.splice(col, 0, ...cells);
    (0, import_lodash6.default)(cells).forEach((cell) => {
      cell.setStickyZIndex(this.getFreezedCellType(cell.col), this._top, this._grid.getColumnLeft(cell.col));
      target.insertAdjacentElement("beforebegin", cell.element);
      if (this.isMounted)
        cell.render();
    });
  }
  render() {
    if (this.visible)
      this._cells.forEach((cell) => cell.render());
  }
  getCell(col) {
    const cell = this._cells[col];
    if (!cell)
      throw new Error(`Not found cell ${this._rowId}, ${col}`);
    return cell;
  }
  setRowInfo(rowInfo) {
    const {
      textData,
      cellMetaInfo
    } = rowInfo;
    this._cells.forEach((cell, col) => cell.updateCellMetaInfo(cellMetaInfo, textData == null ? void 0 : textData[col]));
  }
  *getCellGenerator(left = 0, right = this._cells.length - 1) {
    for (let c = left; c <= right; ++c)
      yield this._cells[c];
  }
  setColumnVisible(col, visible) {
    this._cells[col].visible = visible;
  }
  getColumnVisible(col) {
    return this._cells[col].visible;
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
  mount(element, position) {
    if (this.isMounted)
      return;
    element.insertAdjacentElement(position, this.element);
    this.render();
    this._isMounted = true;
    if (!this._isCalledOnMounted) {
      this._isCalledOnMounted = true;
      this.onMounted(this);
    }
  }
  freeze(isHeader = false) {
    if (isHeader)
      this.element.classList.add(ie);
    this.element.classList.add(oe);
    this.updateStickyStatus();
  }
  isBetweenTop(top) {
    return top >= this.top && top <= this.bottom;
  }
  updateStickyStatus() {
    this._cells.reduce((left, cell, col) => {
      cell.setStickyZIndex(this.getFreezedCellType(col), this._top, left);
      return left + (this._grid.getColumnVisible(col) ? this._grid.getColumnWidth(col) + 1 : 0);
    }, 0);
  }
  // row에 있는 모든 셀에 metaInfo 일괄 적용
  updateCellMetaInfo(cellMetaInfo) {
    this._cells.forEach((cell) => cell.cellInfo = cellMetaInfo);
  }
  freezeColumns(column) {
    this._stickyColumns = column;
    this.updateStickyStatus();
  }
  unfreeze() {
    if (this.isHeaderRow)
      throw new Error("Can not freeze header row!");
    this.element.classList.remove(oe);
    this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(_row) {
  }
  onChangedHeight(_row, _height) {
  }
};
var IRGridRowManager = class {
  constructor(headerRows, freezedRows) {
    this._rowList = [];
    this._visibleRowList = [];
    this._headerRows = headerRows;
    this._freezedRows = freezedRows;
    this._rowsHeight = 0;
    this._headerRowsHeight = 0;
    this._freezedRowsHeight = 0;
  }
  getRow(rowId) {
    const row = this._rowList[rowId];
    if (!row)
      throw new Error(`Not found row ${rowId}`);
    return row;
  }
  addRow(row) {
    this._rowList.push(row);
    this._visibleRowList.push(row);
    this.updateRowHeight(row, "add");
    if (row.rowId < this.freezedRows)
      this.updateFixedHeight();
  }
  clearRows() {
    (0, import_lodash6.default)(this._rowList).drop(this.headerRows).forEach((row) => row.unmount());
    this._rowList.length = this.headerRows;
    this._rowsHeight = this.headerRowsHeight;
    this._freezedRowsHeight = this.headerRowsHeight;
    this.updateVisibleRowList();
  }
  addColumn(creatingCellFunc) {
    this._rowList.forEach((row) => row.addCell(creatingCellFunc(row)));
  }
  setColumnVisible(col, visible) {
    this._rowList.forEach((row) => row.getCell(col).visible = visible);
  }
  insertColumns(insertingColumnId, count, createCellFunc) {
    this._rowList.forEach((row) => {
      const cellList = import_lodash6.default.range(count).map((id) => createCellFunc(row.rowId, insertingColumnId + id));
      row.insertCells(cellList, insertingColumnId);
    });
  }
  removeRows(top, bottom) {
    const deletedRows = this._rowList.splice(top, bottom - top + 1);
    if (deletedRows.length === 0)
      return;
    deletedRows.forEach((row) => {
      this.updateRowHeight(row, "remove");
      row.unmount();
    });
    this.updateVisibleRowList();
    this.updateFixedHeight();
  }
  removeColumns(left, right) {
    this._rowList.forEach((row) => row.removeCells(left, right));
  }
  insertRows(insertingRowId, rows) {
    let top = this._rowList[insertingRowId].top;
    this._rowList.splice(insertingRowId, 0, ...rows);
    this.updateVisibleRowList();
    for (let i = 0; i < rows.length; i++) {
      const insertedRow = rows[i];
      insertedRow.top = top;
      this.updateRowHeight(insertedRow, "add");
      top = insertedRow.bottom;
    }
    this.updateFixedHeight();
  }
  addFixedHeight(row, rowId, sign = 1) {
    if (rowId < this.headerRows)
      this._headerRowsHeight += row.heightWithBorder * sign;
    if (rowId < this.freezedRows)
      this._freezedRowsHeight += row.heightWithBorder * sign;
  }
  updateFixedHeight() {
    this._headerRowsHeight = 0;
    this._freezedRowsHeight = 0;
    let rowId = 0;
    const endRowIndex = Math.min(this.length, this.freezedRows);
    for (const row of this._rowList) {
      if (row.visible) {
        this.addFixedHeight(row, rowId);
        ++rowId;
      }
      if (rowId >= endRowIndex)
        break;
    }
  }
  updateCellReadonlyStatus() {
    this._rowList.forEach((row) => {
      const cellCount = row.cellCounts;
      for (let col = 0; col < cellCount; col++)
        row.getCell(col).updateReadonlyStatus();
    });
  }
  setRowHeight(rowId, newHeight) {
    const row = this.getRow(rowId);
    const diff = row.height - newHeight;
    if (diff === 0)
      return;
    row.height = newHeight;
    this.changeRowHeight(row, diff);
  }
  setRowVisible(rowId, visible) {
    const row = this.getRow(rowId);
    if (visible === row.visible)
      return;
    row.visible = visible;
    this.updateRowHeight(row, visible ? "show" : "hide");
    this.updateVisibleRowList();
    this.updateFixedHeight();
  }
  updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((row) => row.visible);
  }
  changeRowHeight(row, diff) {
    this._rowsHeight -= diff;
    if (row.rowId < this.headerRows)
      this._headerRowsHeight -= diff;
    if (row.rowId < this.freezedRows)
      this._freezedRowsHeight -= diff;
  }
  updateRowHeight(row, type) {
    if (type === "remove" && !row.visible)
      return;
    const height = row.height + ROW_BORDER_SIZE;
    const heightWithSign = type === "add" || type === "show" ? height : -height;
    this._rowsHeight += heightWithSign;
  }
  sort(compareFunc, order, start, end) {
    const notSortedTopRows = this._rowList.slice(0, start);
    const sortingRows = this._rowList.slice(start, end);
    const notSortedBottomRows = this._rowList.slice(end);
    sortingRows.forEach((row) => row.unmount());
    sortingRows.sort((a, b) => {
      if (order === "ASC")
        return compareFunc(a, b);
      else
        return -compareFunc(a, b);
    });
    this._rowList = [
      ...notSortedTopRows,
      ...sortingRows,
      ...notSortedBottomRows
    ];
    this.updateVisibleRowList();
  }
  freezeRows(freezingRowCount) {
    this._freezedRows = freezingRowCount;
    (0, import_lodash6.default)(this._rowList).drop(this.headerRows).takeWhile((row) => row.isFreezed).forEach((row) => {
      row.unfreeze();
    });
    (0, import_lodash6.default)(this._rowList).drop(this.headerRows).take(freezingRowCount).forEach((row) => row.freeze());
    this.updateFixedHeight();
  }
  renderRows() {
    this._visibleRowList.forEach((row) => row.render());
  }
  getTopByRowId(rowId) {
    return this.getRow(rowId).top;
  }
  getBottomByRowId(rowId) {
    return this.getRow(rowId).bottom;
  }
  getNextRowId() {
    return this._rowList.length;
  }
  getRowByTop(top) {
    const visibleRowList = this.visibleRowList;
    let startIndex = 0;
    let endIndex = visibleRowList.length - 1;
    while (startIndex <= endIndex) {
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
      const currentRow = visibleRowList[middleIndex];
      if (currentRow.isBetweenTop(top))
        return currentRow;
      if (top < currentRow.top)
        endIndex = middleIndex - 1;
      else
        startIndex = middleIndex + 1;
    }
    return null;
  }
  get visibleRowList() {
    return this._visibleRowList;
  }
  get freezedRowsHeight() {
    return this._freezedRowsHeight;
  }
  get headerRowsHeight() {
    return this._headerRowsHeight;
  }
  get rowLodash() {
    return (0, import_lodash6.default)(this._rowList);
  }
  get rowsHeight() {
    return this._rowsHeight;
  }
  get length() {
    return this._rowList.length;
  }
  get headerRows() {
    return this._headerRows;
  }
  get freezedRows() {
    return this._headerRows + this._freezedRows;
  }
  get bodyFreezedRows() {
    return this._freezedRows;
  }
  get firstRow() {
    return this._rowList[0];
  }
  get lastRow() {
    return this._rowList[this._rowList.length - 1];
  }
};

// src/js-components/grid/grid-column.ts
var import_lodash7 = __toESM(require_lodash(), 1);
var IRGridColumn = class {
  constructor({ columnId, width, left }) {
    this._left = 0;
    this._columnId = 0;
    this._width = 0;
    this._visible = true;
    this._colElement = document.createElement("col");
    this.columnId = columnId;
    this.width = width;
    this.left = left;
  }
  get columnId() {
    return this._columnId;
  }
  get left() {
    return this._left;
  }
  get width() {
    return this._width;
  }
  get widthWithBorder() {
    return this._width + COLUMN_BORDER_SIZE;
  }
  get colElement() {
    return this._colElement;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    if (!this.visible)
      return this.left;
    return this.left + this.widthWithBorder;
  }
  set visible(value) {
    this._visible = value;
    if (value)
      this._colElement.style.removeProperty("display");
    else
      this._colElement.style.display = "none";
  }
  set columnId(value) {
    this._columnId = value;
    this._colElement.dataset["column"] = value.toString();
  }
  set left(value) {
    this._left = value;
    this._colElement.dataset["left"] = value.toString();
  }
  set width(value) {
    this._width = value;
    this._colElement.style.width = `${this.widthWithBorder}px`;
    this._colElement.dataset["width"] = value.toString();
  }
  remove() {
    this._colElement.remove();
  }
  isBetweenLeft(left) {
    return left >= this.left && left <= this.right;
  }
};
var IRGridColumnManager = class {
  constructor(rowHeaderColumns, freezedColumns) {
    this._columnsList = [];
    this._visibleColumnsList = [];
    this._columnsWidth = 0;
    this._rowHeaderColumnsWidth = 0;
    this._freezedColumnsWidth = 0;
    this._colGroup = document.createElement("colgroup");
    this._rowHeaderColumns = rowHeaderColumns;
    this._freezedColumns = freezedColumns;
  }
  addColumn(width) {
    const column = new IRGridColumn({
      columnId: this._columnsList.length,
      width,
      left: this._columnsWidth
    });
    this._colGroup.appendChild(column.colElement);
    this._columnsList.push(column);
    this._visibleColumnsList.push(column);
    this.updateColumnWidth(column, "add");
    this.addFixedWidth(column);
    return column;
  }
  updateVisibleColumnList() {
    this._visibleColumnsList = this._columnsList.filter((col) => col.visible);
  }
  updateColumnWidth(col, type) {
    if (type === "remove" && !col.visible)
      return;
    const widthWithSign = type === "add" || type === "show" ? col.widthWithBorder : -col.widthWithBorder;
    this._columnsWidth += widthWithSign;
  }
  removeColumns(left, right) {
    const deletedColumns = this._columnsList.splice(left, right - left + 1);
    deletedColumns.forEach((col) => {
      this.updateColumnWidth(col, "remove");
      col.remove();
    });
    this.updateVisibleColumnList();
    this.updateFixedWidth();
  }
  freezeColumns(count) {
    this._freezedColumns = count;
    this.updateFixedWidth();
  }
  changeColumnWidth(column, diff) {
    this._columnsWidth -= diff;
    if (column.columnId < this.headerColumns)
      this._rowHeaderColumnsWidth -= diff;
    if (column.columnId < this.freezedColumns)
      this._freezedColumnsWidth -= diff;
  }
  insertColumns(columnId, count, width) {
    const targetColumn = this.getColumn(columnId);
    const left = targetColumn.left;
    const newColumns = import_lodash7.default.range(count).map((id) => new IRGridColumn({
      columnId: columnId + id,
      width,
      left: left + (width + COLUMN_BORDER_SIZE) * id
    }));
    this._columnsList.splice(columnId, 0, ...newColumns);
    newColumns.forEach((newCol) => {
      targetColumn.colElement.insertAdjacentElement("beforebegin", newCol.colElement);
      this.updateColumnWidth(newCol, "add");
    });
    this.updateVisibleColumnList();
    this.updateFixedWidth();
  }
  addFixedWidth(column, sign = 1) {
    if (column.columnId < this.headerColumns)
      this._rowHeaderColumnsWidth += column.widthWithBorder * sign;
    if (column.columnId < this.freezedColumns)
      this._freezedColumnsWidth += column.widthWithBorder * sign;
  }
  updateFixedWidth() {
    this._rowHeaderColumnsWidth = 0;
    this._freezedColumnsWidth = 0;
    let columnId = 0;
    const endIndex = Math.min(this.freezedColumns, this._columnsList.length);
    while (columnId < endIndex) {
      const column = this.getColumn(columnId);
      column.visible && this.addFixedWidth(column);
      ++columnId;
    }
  }
  setColumnWidth(columnId, newWidth) {
    const column = this.getColumn(columnId);
    const diff = column.width - newWidth;
    if (diff === 0)
      return;
    column.width = newWidth;
    this.changeColumnWidth(column, diff);
  }
  setColumnVisible(columnId, visible) {
    const column = this.getColumn(columnId);
    if (column.visible === visible)
      return;
    column.visible = visible;
    this.updateColumnWidth(column, visible ? "show" : "hide");
    this.updateVisibleColumnList();
    this.addFixedWidth(column, visible ? 1 : -1);
  }
  getColumnLeft(column) {
    return this.getColumn(column).left;
  }
  getColumnRight(column) {
    return this.getColumn(column).right;
  }
  getColumnWidth(column) {
    return this.getColumn(column).width;
  }
  getColumn(columnId) {
    const col = this._columnsList[columnId];
    if (!col)
      throw new Error("No column");
    return col;
  }
  updateColumnsLeftFrom(startColumnId) {
    (0, import_lodash7.default)(this._columnsList).drop(startColumnId).reduce((left, column) => {
      column.left = left;
      return column.visible ? left + column.width + COLUMN_BORDER_SIZE : left;
    }, this.getColumn(startColumnId).left);
  }
  get colgroup() {
    return this._colGroup;
  }
  get visibleColumnList() {
    return this._visibleColumnsList;
  }
  get columnsWidth() {
    return this._columnsWidth;
  }
  get rowHeaderColumnsWidth() {
    return this._rowHeaderColumnsWidth;
  }
  get length() {
    return this._columnsList.length;
  }
  get fixedColumnsWidth() {
    return this._freezedColumnsWidth;
  }
  get headerColumns() {
    return this._rowHeaderColumns;
  }
  get freezedColumns() {
    return this._rowHeaderColumns + this._freezedColumns;
  }
  get bodyFreezedColumns() {
    return this._freezedColumns;
  }
};

// src/js-components/grid/grid.store.ts
var IRGridStore = class {
  constructor(options) {
    var _a;
    const themeStore = getThemeStore();
    this._cellPadding = Object.freeze((_a = options.cellPadding) != null ? _a : {
      top: themeStore.getStoreValue("grid.paddingTop"),
      left: themeStore.getStoreValue("grid.paddingLeft"),
      bottom: themeStore.getStoreValue("grid.paddingBottom"),
      right: themeStore.getStoreValue("grid.paddingRight")
    });
    this._defaultRowHeight = themeStore.getStoreValue("grid.defaultRowHeight");
    this._defaultColumnWidth = themeStore.getStoreValue("grid.defaultColumnWidth");
    this._defaultRowMinSize = themeStore.getStoreValue("grid.defaultRowMinSize");
    this._defaultRowMaxSize = themeStore.getStoreValue("grid.defaultRowMaxSize");
    this._defaultColumnMinSize = themeStore.getStoreValue("grid.defaultColumnMinSize");
    this._defaultColumnMaxSize = themeStore.getStoreValue("grid.defaultColumnMaxSize");
    this._rowManager = new IRGridRowManager(options.headerRowCount, options.freezedRowCount);
    this._columnManager = new IRGridColumnManager(options.headerColumnCount, options.freezedColumnCount);
  }
  get cellPadding() {
    return this._cellPadding;
  }
  get defaultRowHeight() {
    return this._defaultRowHeight;
  }
  get defaultColumnWidth() {
    return this._defaultColumnWidth;
  }
  get defaultRowMinSize() {
    return this._defaultRowMinSize;
  }
  get defaultRowMaxSize() {
    return this._defaultRowMaxSize;
  }
  get defaultColumnMinSize() {
    return this._defaultColumnMinSize;
  }
  get defaultColumnMaxSize() {
    return this._defaultColumnMaxSize;
  }
  get rowManager() {
    return this._rowManager;
  }
  get columnManager() {
    return this._columnManager;
  }
};

// src/js-components/grid/command/resize-column.ts
var ResizeColumnCommand = class extends IRGridCommand {
  _execute() {
    this._instance.setColumnWidth(...this._args);
  }
  _getUndoContext() {
    return {
      latestWidth: this._instance.getColumnWidth(this._args[0])
    };
  }
  _undo() {
    this._instance.setColumnWidth(this._args[0], this._undoContext.latestWidth);
  }
  get canExecute() {
    return this._args[0] < this._instance.getColCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getColCount();
  }
};

// src/js-components/grid/command/resize-row.ts
var ResizeRowCommand = class extends IRGridCommand {
  _execute() {
    this._instance.setRowHeight(...this._args);
  }
  _getUndoContext() {
    return {
      latestHeight: this._instance.getRowHeight(this._args[0])
    };
  }
  _undo() {
    this._instance.setRowHeight(this._args[0], this._undoContext.latestHeight);
  }
  get canExecute() {
    return this._args[0] < this._instance.getRowCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getRowCount();
  }
};

// src/js-components/grid/grid-plugin.ts
var IRGridPlugin = class {
  constructor() {
    this._mountRollbackStack = [];
    this._isMounted = false;
  }
  _mountTask(gridObjects) {
    throw new Error("unmount method not implemented.");
  }
  mount(gridObjects) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._mountTask(gridObjects);
      this._isMounted = true;
    } catch (err) {
      console.error("Plugin mount error!", err);
      this.unmount();
    }
  }
  unmount() {
    if (!this.isMounted)
      throw new Error("Already unmounted plugin!");
    try {
      for (const rollbackFunc of this._mountRollbackStack)
        rollbackFunc();
      this._mountRollbackStack.length = 0;
      this._isMounted = false;
    } catch (err) {
      console.error("Plugin unmount error!", err);
    }
  }
  get isMounted() {
    return this._isMounted;
  }
};

// src/js-components/grid/plugins/resizer.ts
var COL_INTERACTION_SIZE = 12;
var ROW_INTERACTION_SIZE = 8;
var gridResizingCls = {
  "col-resizing": Tr,
  "row-resizing": Jr
};
var gridHeaderCellResizingCls = {
  "col-resizing": Dr,
  "row-resizing": Ar
};
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
var CLICK_DURATION_MS = 500;
var RESIZER_GAP = 4;
var IRGridResizerPlugin = class extends IRGridPlugin {
  constructor(options) {
    super();
    this._options = options;
  }
  _mountTask({ grid, wrapperElement, gridContext, contextElement }) {
    const { enabledColResizer, enabledRowResizer } = this._options;
    const addResizeColumnCommand = (label, col, width) => {
      grid.commandManager.pushCommandBlock(new IRCommandBlock(label, new ResizeColumnCommand(grid, [col, width])));
    };
    const addResizeRowCommand = (label, row, height) => {
      grid.commandManager.pushCommandBlock(new IRCommandBlock(label, new ResizeRowCommand(grid, [row, height])));
    };
    (function mount() {
      const divGuide = document.createElement("div");
      let isResizing = false;
      let latestContextDownHandler = null;
      let latestClickedTime = 0;
      const resetCursor = () => {
        contextElement.classList.remove(Tr);
        contextElement.classList.remove(Jr);
        contextElement.classList.remove("is-resizing");
        latestContextDownHandler && contextElement.removeEventListener("mousedown", latestContextDownHandler);
      };
      const setCursor = (eventCell, clsResizing) => {
        latestContextDownHandler && contextElement.removeEventListener("mousedown", latestContextDownHandler);
        contextElement.classList.remove(Tr);
        contextElement.classList.remove(Jr);
        contextElement.classList.add(gridResizingCls[clsResizing]);
        contextElement.classList.add("is-resizing");
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
          const curTime = (/* @__PURE__ */ new Date()).getTime();
          gridContext.setMode({
            mode: clsResizing,
            contextParam: {}
          });
          if (curTime - latestClickedTime <= CLICK_DURATION_MS) {
            if (clsResizing === "col-resizing") {
              grid.commandManager.doRecording("Autosize column", () => {
                grid.autoSizeColumn(eventCell.col);
              });
            } else {
              grid.commandManager.doRecording("Autosize row", () => {
                grid.autoSizeRow(eventCell.row);
              });
            }
            latestClickedTime = 0;
            return;
          }
          isResizing = true;
          latestClickedTime = curTime;
          eventCell.element.classList.add(gridHeaderCellResizingCls[clsResizing]);
          if (clsResizing === "col-resizing") {
            divGuide.className = Ir;
            size = grid.getColumnWidth(getColumnNo(eventCell));
            initXY = ev.pageX;
            minXY = initXY - size + grid.minColWidth;
            maxXY = initXY - size + grid.maxColWidth;
            startXY = grid.getColumnLeft(eventCell.col) + grid.getCellWidth(eventCell);
            divGuide.style.top = "0px";
            divGuide.style.width = "0px";
            divGuide.style.height = `${grid.height}px`;
            divGuide.style.left = `${getGuideX()}px`;
          } else {
            divGuide.className = qr;
            size = grid.getRowHeight(getRowNo(eventCell));
            initXY = ev.pageY;
            minXY = initXY - size + grid.minRowHeight;
            maxXY = initXY - size + grid.maxRowHeight;
            startXY = grid.getRow(eventCell.row).top + grid.getCellHeight(eventCell);
            divGuide.style.top = `${getGuideY()}px`;
            divGuide.style.width = `${grid.width}px`;
            divGuide.style.height = `0px`;
            divGuide.style.left = `0px`;
          }
          wrapperElement.appendChild(divGuide);
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
            if (Math.abs(diff) > RESIZER_GAP) {
              const col = getColumnNo(eventCell);
              const width = size + diff;
              addResizeColumnCommand("Resize column", col, width);
              grid.setColumnWidth(col, width);
              latestClickedTime = 0;
            }
          } else {
            const diff = getMinMaxBetween(ev.pageY, minXY, maxXY) - initXY;
            if (Math.abs(diff) > RESIZER_GAP) {
              const row = getRowNo(eventCell);
              const height = size + diff;
              addResizeRowCommand("Resize row", row, height);
              grid.setRowHeight(row, height);
              latestClickedTime = 0;
            }
          }
          removeAllEvents();
          gridContext.setIdle();
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
          eventCell.element.classList.remove(gridHeaderCellResizingCls[clsResizing]);
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
      const curCell = closest("th", "tr", ev.target);
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
  }
  get pluginKey() {
    return "resizer";
  }
};
function ResizerPlugin(resizerOptions) {
  return new IRGridResizerPlugin(resizerOptions);
}

// src/js-components/grid/plugins/cell-selector.ts
var import_lodash8 = __toESM(require_lodash(), 1);
var IRGridMouseCellSelectorPlugin = class extends IRGridPlugin {
  _mountTask({ grid, gridContext, contextElement }) {
    let startCell = null;
    const selectRange = (activeCell, endCell) => {
      const row = [
        activeCell.row,
        activeCell.bottom,
        endCell.row,
        endCell.bottom
      ];
      const col = [
        activeCell.col,
        activeCell.right,
        endCell.col,
        endCell.right
      ];
      const range = {
        top: Math.min(...row),
        left: Math.min(...col),
        bottom: Math.max(...row),
        right: Math.max(...col)
      };
      if (import_lodash8.default.isEqual(range, grid.getSelection()))
        return;
      grid.select(range, startCell);
      this.onChangedSelection(range);
    };
    grid.addGlobalEventListener(contextElement, "mousedown", (ev) => {
      if (!checkTargetIsHTMLElement(ev.target))
        return;
      if (ev.button !== 0)
        return;
      if (ev.target instanceof HTMLTextAreaElement)
        return;
      if (closest(".button", "tr", ev.target))
        return;
      const curCell = closest("td", "tr", ev.target);
      if (!curCell)
        return;
      const cellAddress = getCellElementRowCol(curCell);
      const activeCell = grid.activeCell;
      if (ev.shiftKey && activeCell) {
        startCell = activeCell;
        selectRange(activeCell, grid.cell(cellAddress.row, cellAddress.col));
      } else {
        startCell = grid.cell(cellAddress.row, cellAddress.col);
        grid.selectRange(startCell.row, startCell.col, startCell.bottom, startCell.right, startCell);
        this.onChangedSelection({ top: startCell.row, left: startCell.col, bottom: startCell.bottom, right: startCell.right });
      }
      gridContext.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function moveOnCell(startCell2, target) {
      const curCell = target.closest("td");
      if (!curCell)
        return;
      const cellAddress = getCellElementRowCol(curCell);
      const endCell = grid.cell(cellAddress.row, cellAddress.col);
      selectRange(startCell2, endCell);
    }
    function moveOnContext(ev, startCell2) {
      const { offsetX, offsetY, target } = ev;
      if (!checkTargetIsHTMLElement(target))
        return;
      const x2 = offsetX + target.scrollLeft;
      const y2 = offsetY + target.scrollTop;
      const adjustLeft = x2 > grid.width ? grid.width : x2;
      const adjustTop = y2 > grid.height ? grid.height : y2;
      const endCell = grid.findCellOrNull(adjustTop, adjustLeft);
      endCell && selectRange(startCell2, endCell);
    }
    grid.addGlobalEventListener(contextElement, "mousemove", (ev) => {
      if (!startCell)
        return;
      if (!checkTargetIsHTMLElement(ev.target))
        return;
      if (ev.target === contextElement)
        moveOnContext(ev, startCell);
      else
        moveOnCell(startCell, ev.target);
    });
    grid.addGlobalEventListener(document, "mouseup", () => {
      if (!startCell)
        return;
      startCell = null;
      gridContext.setIdle();
    });
    grid.onDoubleClickCell = (cell) => gridContext.isIdle && grid.doEditMode(cell);
    grid.onColumnClick = (cell) => grid.selectColumn(cell.col);
    grid.onRowClick = (cell) => grid.selectRow(cell.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(range) {
  }
};
function MouseCellSelectorPlugin() {
  return new IRGridMouseCellSelectorPlugin();
}

// src/js-components/grid/command/clear-cells.ts
var ClearCellsCommand = class extends IRGridCommand {
  _getUndoContext() {
    const [range] = this._args;
    const textSnapshot = [];
    const generator = new IRGridCellGenerator(this._instance);
    for (const cell of generator.getSelectionGenerator(range)) {
      if (cell.canClear)
        textSnapshot.push({
          row: cell.row,
          col: cell.col,
          text: cell.text
        });
    }
    return { textSnapshot };
  }
  _undo() {
    const { textSnapshot } = this._undoContext;
    textSnapshot.forEach(({ row, col, text }) => {
      this._instance.setCell(row, col, { text });
      this._instance.onEditCellDone(this._instance.cell(row, col), true, "", "", 0, 0);
    });
  }
  _execute() {
    const [range] = this._args;
    this._instance.clearCells(range);
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/utility/cursor.ts
function createGridCellCursorManager(grid, rowSelection) {
  const getNextYAbove = (row, col, y2) => {
    var _a;
    const startRow = grid.headerRows;
    let counter = y2;
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
  const getNextYBelow = (row, col, y2) => {
    var _a;
    const endRow = grid.getRowCount() - 1;
    let counter = y2;
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
  const getNextXLeft = (row, col, x2) => {
    var _a;
    const startCol = grid.headerColumns;
    let counter = x2;
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
  const getNextXRight = (row, col, x2) => {
    var _a;
    const endCol = grid.getColCount() - 1;
    let counter = x2;
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
      if (rowSelection)
        grid.selectRow(nextRow, grid.cell(nextRow, firstCol));
      else
        grid.selectCell(nextRow, firstCol);
      grid.scrollInView(nextRow, firstCol);
    } else {
      const nextCol = getNextXRight(activeCell.row, mainCell.right, 1);
      if (rowSelection)
        grid.selectRow(activeCell.row, grid.cell(activeCell.row, nextCol));
      else
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
      if (rowSelection)
        grid.selectRow(beforeRow, grid.cell(beforeRow, lastCol));
      else
        grid.selectCell(beforeRow, lastCol);
      grid.scrollInView(beforeRow, lastCol);
    } else {
      const nextCol = getNextXLeft(activeCell.row, mainCell.col, -1);
      if (rowSelection)
        grid.selectRow(activeCell.row, grid.cell(activeCell.row, nextCol));
      else
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
  const selectNextSelection = (y2, x2, isExpanding) => {
    var _a;
    const selection = grid.getSelection();
    const { activeCell } = grid;
    if (selection == null || activeCell == null) {
      console.warn("No selection warning");
      return;
    }
    const mainCell = (_a = activeCell.mergeMain) != null ? _a : activeCell;
    if (isExpanding && rowSelection)
      return;
    if (!isExpanding) {
      if (y2 !== 0) {
        const nextRow = y2 < 0 ? getNextYAbove(mainCell.row, activeCell.col, y2) : getNextYBelow(mainCell.bottom, activeCell.col, y2);
        if (rowSelection)
          grid.selectRow(nextRow, grid.cell(nextRow, activeCell.col));
        else
          grid.selectCell(nextRow, activeCell.col);
        grid.scrollOnRow(nextRow);
      } else {
        const nextCol = x2 < 0 ? getNextXLeft(activeCell.row, mainCell.col, x2) : getNextXRight(activeCell.row, mainCell.right, x2);
        if (rowSelection)
          grid.selectRow(activeCell.row, grid.cell(activeCell.row, nextCol));
        else
          grid.selectCell(activeCell.row, nextCol);
        grid.scrollOnCol(nextCol);
      }
      return;
    }
    const { top, bottom, left, right } = selection;
    if (y2 !== 0) {
      if (y2 < 0) {
        const maxBottom = getMaximumBottomByRow(activeCell.row, left, right);
        if (maxBottom === bottom) {
          const colId = getColIdWithMaximumRowSpanInRow(top, left, right);
          const nextTop = getNextYAbove(top, colId, y2);
          grid.selectRange(nextTop, left, bottom, right, activeCell);
          grid.scrollOnRow(nextTop);
        } else {
          const colId = getColIdWithMaximumRowSpanInRow(bottom, left, right);
          const nextBottom = getNextYAbove(bottom, colId, y2);
          grid.selectRange(top, left, nextBottom, right, activeCell);
          grid.scrollOnRow(nextBottom);
        }
      } else {
        const minTop = getMinimumTopByRow(activeCell.row, left, right);
        if (minTop === top) {
          const colId = getColIdWithMaximumRowSpanInRow(bottom, left, right);
          const nextBottom = getNextYBelow(bottom, colId, y2);
          grid.selectRange(top, left, nextBottom, right, activeCell);
          grid.scrollOnRow(nextBottom);
        } else {
          const colId = getColIdWithMaximumRowSpanInRow(top, left, right);
          const nextTop = getNextYBelow(top, colId, y2);
          grid.selectRange(nextTop, left, bottom, right, activeCell);
          grid.scrollOnRow(nextTop);
        }
      }
    } else if (x2 < 0) {
      const maxRight = getMaximumRightByColumn(activeCell.col, top, bottom);
      if (maxRight === right) {
        const rowId = getRowIdWithMaximumColSpanInCol(left, top, bottom);
        const nextLeft = getNextXLeft(rowId, left, x2);
        grid.selectRange(top, nextLeft, bottom, right, activeCell);
        grid.scrollOnCol(nextLeft);
      } else {
        const rowId = getRowIdWithMaximumColSpanInCol(right, top, bottom);
        const nextRight = getNextXLeft(rowId, right, x2);
        grid.selectRange(top, left, bottom, nextRight, activeCell);
        grid.scrollOnCol(nextRight);
      }
    } else {
      const minLeft = getMinimumLeftByColumn(activeCell.col, top, bottom);
      if (minLeft === left) {
        const rowId = getRowIdWithMaximumColSpanInCol(right, top, bottom);
        const nextRight = getNextXRight(rowId, right, x2);
        grid.selectRange(top, left, bottom, nextRight, activeCell);
        grid.scrollOnCol(nextRight);
      } else {
        const rowId = getRowIdWithMaximumColSpanInCol(left, top, bottom);
        const nextLeft = getNextXRight(rowId, left, x2);
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
    if (isExtending && rowSelection)
      return;
    if (!isExtending) {
      if (rowSelection)
        grid.selectRow(activeCell.row, grid.cell(activeCell.row, lastCol));
      else
        grid.selectCell(activeCell.row, lastCol);
    } else
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
    if (isExtending && rowSelection)
      return;
    if (!isExtending) {
      if (rowSelection)
        grid.selectRow(activeCell.row, grid.cell(activeCell.row, firstCol));
      else
        grid.selectCell(activeCell.row, firstCol);
    } else
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
    if (isExtending && rowSelection)
      return;
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
    if (isExtending && rowSelection)
      return;
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

// src/utils/key-controller.ts
var import_lodash9 = __toESM(require_lodash(), 1);
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
    if (!this.hasKeyAction(ev.key))
      return;
    this.onStartKeyActionHook(ev);
    (0, import_lodash9.default)(this.keyMap[ev.key]).forEach((action) => {
      try {
        return action(ev);
      } catch (err) {
        console.error(err);
        return false;
      }
    });
    this.onEndKeyActionHook(ev);
  }
  onStartKeyActionHook(_ev) {
  }
  onEndKeyActionHook(_ev) {
  }
};

// src/js-components/grid/plugins/default-key.ts
var PAGE_OFFSET = 10;
var IRGridDefaultKeyPlugin = class extends IRGridPlugin {
  constructor({
    keyMiddleware = [],
    rowSelection = false
  }) {
    super();
    this._keyMiddleware = keyMiddleware;
    this._rowSelection = rowSelection;
  }
  _mountTask({ grid, gridContext, contextElement }) {
    const keyController = new KeyActionController();
    keyController.onEndKeyActionHook = (ev) => {
      if (ev.key.match(/^[\w\d]$/))
        return;
      ev.preventDefault();
    };
    const editActiveCell = (data, clearData = false) => {
      var _a, _b;
      if (!gridContext.isIdle)
        return;
      const cell = (_b = (_a = grid.activeCell) == null ? void 0 : _a.mergeMain) != null ? _b : grid.activeCell;
      cell && grid.doEditMode(cell, data, clearData);
    };
    this._keyMiddleware.forEach(([key, keyAction]) => keyController.addKeyAction(key, keyAction));
    const textArea = document.createElement("textarea");
    const generator = new IRGridCellGenerator(grid);
    const {
      selectNextActiveCell,
      selectNextSelection,
      selectBeforeActiveCell,
      selectMoveToFirstRow,
      selectMoveToFirstColumn,
      selectMoveToLastColumn,
      selectMoveToLastRow
    } = createGridCellCursorManager(grid, this._rowSelection);
    textArea.className = Fr;
    contextElement.appendChild(textArea);
    grid.addCoreElement(textArea);
    grid.addGlobalEventListener(contextElement, "focus", () => {
      if (document.activeElement !== textArea)
        textArea.focus();
    });
    grid.addGlobalEventListener(contextElement, "mouseup", (ev) => {
      var _a;
      if (ev.target instanceof HTMLTextAreaElement)
        return;
      if ((_a = document.activeElement) == null ? void 0 : _a.classList.contains(ne))
        return;
      textArea.focus();
    });
    grid.addGlobalEventListener(contextElement, "input", (ev) => {
      var _a;
      if (ev.target !== textArea)
        return;
      editActiveCell((_a = ev.data) != null ? _a : void 0, true);
      return true;
    });
    textArea.addEventListener("copy", (ev) => grid.onNativeCopy(ev));
    textArea.addEventListener("cut", (ev) => grid.onNativeCut(ev));
    textArea.addEventListener("paste", (ev) => grid.onNativePaste(ev));
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
      selectNextSelection(-PAGE_OFFSET, 0, ev.shiftKey);
      return true;
    });
    keyController.addKeyAction("PageDown", (ev) => {
      selectNextSelection(PAGE_OFFSET, 0, ev.shiftKey);
      return true;
    });
    keyController.addKeyAction("Enter", (_ev) => {
      selectNextSelection(1, 0, false);
      return true;
    });
    keyController.addKeyAction("a", (ev) => {
      if (ev.ctrlKey) {
        grid.selectAll();
        ev.preventDefault();
        return false;
      }
      return true;
    });
    keyController.addKeyAction("z", (ev) => {
      if (ev.ctrlKey) {
        grid.undo();
        ev.preventDefault();
        return false;
      }
      return true;
    });
    keyController.addKeyAction("y", (ev) => {
      if (ev.ctrlKey) {
        grid.redo();
        ev.preventDefault();
        return false;
      }
      return true;
    });
    keyController.addKeyAction("F2", (_ev) => {
      editActiveCell();
      return true;
    });
    keyController.addKeyAction("Delete", (_ev) => {
      const selection = grid.getSelection();
      if (!selection)
        return true;
      if (generator.getCanClearCellCount(selection) === 0)
        return true;
      const clearCommand = new ClearCellsCommand(grid, [selection]);
      grid.commandManager.pushCommandBlock(new IRCommandBlock("Clear cells", clearCommand));
      grid.clearCells(selection);
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
        if (cell.renderType === "checkbox") {
          (_a = cell.element.querySelector("input")) == null ? void 0 : _a.click();
        }
      }
      return true;
    });
    grid.addGlobalEventListener(contextElement, "keydown", (ev) => {
      if (!gridContext.isIdle)
        return;
      if (ev.target !== textArea)
        return;
      textArea.value = "";
      keyController.startKeyAction(ev);
    });
  }
  get pluginKey() {
    return "default-key";
  }
};
function DefaultKeyPlugin(defaultKeyOptions) {
  return new IRGridDefaultKeyPlugin(defaultKeyOptions != null ? defaultKeyOptions : {});
}

// src/js-components/grid/plugins/row-selection.ts
var IRGridRowSelectionPlugin = class extends IRGridPlugin {
  _mountTask({ grid, table }) {
    let startCell = null;
    table.addEventListener("mousedown", (ev) => {
      if (ev.button !== 0)
        return;
      const curCell = closest("td", "tr", ev.target);
      if (!curCell || (curCell == null ? void 0 : curCell.tagName) === "TH")
        return;
      const cellAddress = getCellElementRowCol(curCell);
      startCell = grid.cell(cellAddress.row, cellAddress.col);
      grid.selectRow(startCell.row, startCell);
    });
    grid.addGlobalEventListener(document, "mouseup", () => startCell = null);
  }
  get pluginKey() {
    return "row-selection";
  }
};
function RowSelectionPlugin() {
  return new IRGridRowSelectionPlugin();
}

// src/js-components/grid/plugins/column-fill.ts
var import_lodash10 = __toESM(require_lodash(), 1);
var NOT_SCHEDULED2 = -1;
var COLUMN_WEIGHT_REGEXP = /^\d+px$/;
function validateColumnWeight(columnWeight) {
  for (const weight of columnWeight) {
    if (typeof weight === "string") {
      if (COLUMN_WEIGHT_REGEXP.test(weight) === false)
        throw new Error(`invalid column weight: ${weight}`);
    } else if (typeof weight === "number") {
      if (weight <= 0)
        throw new Error(`weight must be positive: ${weight}`);
    } else {
      throw new Error(`weight type is allowed string or number`);
    }
  }
}
function getFixedColumnWidth(columnWeight) {
  let acc = 0;
  for (const weight of columnWeight) {
    if (typeof weight === "string")
      acc += convertFixedColumnWidth(weight);
  }
  return acc;
}
function convertFixedColumnWidth(weight) {
  return parseInt(weight.substring(0, weight.length - 2), 10);
}
var IRGridColumnFillPlugin = class extends IRGridPlugin {
  constructor({ columnWeight }) {
    super();
    this._columnWeightList = [];
    validateColumnWeight(columnWeight);
    this._fixedColumnWidth = getFixedColumnWidth(columnWeight);
    this._columnWeightList = columnWeight;
  }
  _mountTask({ grid, contextElement, emitController }) {
    let scheduled = NOT_SCHEDULED2;
    const fillColumns = () => {
      const { clientWidth } = contextElement;
      if (clientWidth === 0) {
        grid.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const excludedLastColCount = grid.getColCount() - 1;
      const colWidth = clientWidth - excludedLastColCount - this._fixedColumnWidth;
      const totalWeight = import_lodash10.default.range(grid.getColCount()).filter((id) => grid.getColumnVisible(id)).reduce((weight, id) => {
        const value = this._columnWeightList[id];
        if (value === void 0)
          return weight + 1;
        if (typeof value === "number")
          return weight + value;
        return weight;
      }, 0);
      let w = 0;
      import_lodash10.default.range(excludedLastColCount).filter((id) => grid.getColumnVisible(id)).forEach((id) => {
        var _a;
        const weight = (_a = this._columnWeightList[id]) != null ? _a : 1;
        if (typeof weight === "string" && weight.endsWith("px")) {
          const width = convertFixedColumnWidth(weight);
          grid.setColumnWidth(id, width);
        } else if (typeof weight === "number") {
          const ratio = weight / totalWeight;
          grid.setColumnWidth(id, Math.floor(ratio * colWidth));
        }
        w += grid.getColumnWidth(id);
      });
      import_lodash10.default.range(excludedLastColCount, -1, -1).filter((id) => grid.getColumnVisible(id)).slice(0, 1).forEach((id) => grid.setColumnWidth(id, colWidth - w + this._fixedColumnWidth));
    };
    const scheduleColumnFill = () => {
      if (scheduled !== NOT_SCHEDULED2)
        cancelAnimationFrame(scheduled);
      scheduled = requestAnimationFrame(() => {
        try {
          emitController.lockEmit("onColumnChanged");
          fillColumns();
        } catch (err) {
          console.error(err);
        } finally {
          emitController.unlockEmit("onColumnChanged");
          scheduled = NOT_SCHEDULED2;
        }
      });
    };
    emitController.emitter.on("onWrapperResized", () => {
      scheduleColumnFill();
    });
    emitController.emitter.on("onColumnChanged", ({ left, right, type }) => {
      scheduleColumnFill();
    });
    scheduleColumnFill();
  }
  get pluginKey() {
    return "column-fill";
  }
};
function ColumnFillPlugin(columnFillOptions) {
  return new IRGridColumnFillPlugin(columnFillOptions != null ? columnFillOptions : { columnWeight: [] });
}

// src/js-components/grid/plugins/cell-observer.ts
var IRGridCellObserverPlugin = class extends IRGridPlugin {
  constructor({ onCellInfoChanged }) {
    super();
    this._onCellInfoChanged = onCellInfoChanged;
  }
  _mountTask({ emitController }) {
    this.turnOn = () => {
      emitController.emitter.on("onCellInfoChanged", this._onCellInfoChanged);
    };
    this.turnOn = () => {
      emitController.emitter.off("onCellInfoChanged", this._onCellInfoChanged);
    };
  }
  turnOn() {
    console.error("Must execute mount() first");
  }
  turnOff() {
    console.error("Must execute mount() first");
  }
  get pluginKey() {
    return "cell-observer";
  }
};
function CellObserverPlugin(cellObserverOptions) {
  return new IRGridCellObserverPlugin(cellObserverOptions);
}

// src/js-components/grid/plugins/cell-drop.ts
var IRGridCellDropPlugin = class extends IRGridPlugin {
  constructor({ enabledOnHeader = false }) {
    super();
    this._enabledOnHeader = enabledOnHeader;
  }
  _mountTask({ grid, gridContext, table }) {
    const { _enabledOnHeader: enabledOnHeader } = this;
    const dragStatus = {
      latestDragOverCell: null
    };
    const endDrag = () => {
      gridContext.setIdle();
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
      gridContext.setMode({ mode: "dragging", contextParam: {} });
      table.classList.add("is-dragging");
    });
    table.addEventListener("dragover", (ev) => {
      if (!table.classList.contains("is-dragging"))
        return;
      const cell = grid.findCellOrNull(ev.offsetY, ev.offsetX);
      if (!cell)
        return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        cell.dropDisabled !== false && // header에 허용하지 않은 상태에서 header Cell 드래그
        (cell.isHeaderCell && enabledOnHeader === false || // disabled
        cell.metaInfo.disabled === true || // readonly
        cell.onCheckReadonly() === true || cell.dropDisabled === true)
      ) {
        removeDraggingBorder();
        return null;
      }
      if (grid.onDragOverCell(cell, ev) === true) {
        setDragCell(cell);
        ev.preventDefault();
      }
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
  }
  get pluginKey() {
    return "cell-drop";
  }
};
function CellDropPlugin(cellDropArgs) {
  return new IRGridCellDropPlugin(cellDropArgs != null ? cellDropArgs : {});
}

// src/js-components/grid/plugins/single-cell-drag.ts
var DRAG_OFFSET = 10;
var IRGridSingleCellDragPlugin = class extends IRGridPlugin {
  _mountTask({ grid, table }) {
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
      const curCell = closest("td", "tr", ev.target);
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
      ev.dataTransfer.setDragImage(dragStatus.cell.element, DRAG_OFFSET, DRAG_OFFSET);
    });
  }
  get pluginKey() {
    return "single-cell-drag";
  }
};
function SingleCellDragPlugin() {
  return new IRGridSingleCellDragPlugin();
}

// src/js-components/grid/plugins/row-column-exchange.ts
var IRGridRowColumnExchangePlugin = class extends IRGridPlugin {
  mount(gridObjects) {
  }
  get pluginKey() {
    return "row-column-exchange";
  }
};

// src/js-components/grid/plugins/popover.ts
var FLOATING_OFFSET = 8;
var gridIntentCls = {
  normal: Zr,
  error: Or
};
var updatePopoverOffset = (refElement, floatingElement, placement, crossAxis) => {
  if (refElement.isConnected === false || refElement.offsetParent === null)
    return;
  computePosition(refElement, floatingElement, {
    placement,
    strategy: "fixed",
    middleware: [
      offset({
        mainAxis: FLOATING_OFFSET,
        crossAxis: crossAxis != null ? crossAxis : 0
      }),
      flip(),
      shift({ padding: 5 })
    ]
  }).then(({ x: x2, y: y2, placement: placement2 }) => {
    floatingElement.style.left = `${x2}px`;
    floatingElement.style.top = `${y2}px`;
    floatingElement.dataset["placement"] = placement2;
  });
};
var DEFAULT_GET_TOOLTIP_TEXT = (cell) => {
  var _a, _b;
  return (_b = (_a = cell.cellInfo.tooltip) != null ? _a : cell.cellInfo.text) != null ? _b : "";
};
var DEFAULT_GET_MEMO_TEXT = (cell) => {
  var _a;
  return (_a = cell.cellInfo.memo) != null ? _a : "";
};
var IRGridPopoverPlugin = class extends IRGridPlugin {
  constructor(options) {
    super();
    this.options = options;
    this.context = null;
    this._tooltipElement = document.createElement("div");
    this._memoElement = document.createElement("div");
    this._tooltipElement.className = cr;
  }
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(cell) {
    var _a, _b, _c, _d, _e2, _f;
    const {
      memoInterval,
      tooltipInterval,
      hideTooltipWhenHasMemo
    } = this.options;
    const {
      hasMemo,
      memoIntent = "normal",
      tooltipDisabled = false
    } = cell.cellInfo;
    const tooltipText = (_c = (_b = (_a = this.options).getTooltipText) == null ? void 0 : _b.call(_a, cell)) != null ? _c : DEFAULT_GET_TOOLTIP_TEXT(cell);
    const memoText = (_f = (_e2 = (_d = this.options).getMemoText) == null ? void 0 : _e2.call(_d, cell)) != null ? _f : DEFAULT_GET_MEMO_TEXT(cell);
    const showTooltip = () => {
      this._tooltipElement.textContent = tooltipText;
      getLayerElement("popover").appendChild(this._tooltipElement);
      updatePopoverOffset(cell.element, this._tooltipElement, "bottom");
    };
    const showMemo = () => {
      this._memoElement.textContent = memoText != null ? memoText : "";
      this._memoElement.className = `${Mr} ${gridIntentCls[memoIntent]}`;
      getLayerElement("popover").appendChild(this._memoElement);
      updatePopoverOffset(cell.element, this._memoElement, "right-start", FLOATING_OFFSET);
    };
    const tooltipTimeoutHandler = !(hasMemo && hideTooltipWhenHasMemo) && tooltipDisabled === false && tooltipText ? window.setTimeout(() => showTooltip(), tooltipInterval) : -1;
    const memoTimeoutHandler = hasMemo && memoText ? window.setTimeout(() => showMemo(), memoInterval) : -1;
    return {
      targetCell: cell,
      tooltipTimeoutHandler,
      memoTimeoutHandler,
      cleanup: () => {
        clearTimeout(tooltipTimeoutHandler);
        clearTimeout(memoTimeoutHandler);
        this.hideTooltip();
        this.hideMemo();
        this.context = null;
      }
    };
  }
  _mountTask({ grid, gridContext, contextElement }) {
    const mouseMoveHandler = (ev) => {
      var _a, _b, _c;
      if (!checkTargetIsHTMLElement(ev.target))
        return;
      const cellElement = closest("td,th", "tr", ev.target);
      if (!cellElement) {
        (_a = this.context) == null ? void 0 : _a.cleanup();
        return;
      }
      const cellAddress = getCellElementRowCol(cellElement);
      const curCell = grid.cell(cellAddress.row, cellAddress.col);
      if (((_b = this.context) == null ? void 0 : _b.targetCell) === curCell)
        return;
      (_c = this.context) == null ? void 0 : _c.cleanup();
      this.context = this.createContext(curCell);
    };
    grid.addGlobalEventListener(contextElement, "mouseleave", () => {
      var _a;
      return (_a = this.context) == null ? void 0 : _a.cleanup();
    });
    gridContext.gridModeState.addSubscription((_16, { mode }) => {
      var _a;
      contextElement.removeEventListener("mousemove", mouseMoveHandler);
      (_a = this.context) == null ? void 0 : _a.cleanup();
      if (mode === "idle" || mode === "edit-cell")
        grid.addGlobalEventListener(contextElement, "mousemove", mouseMoveHandler);
    });
    grid.addGlobalEventListener(contextElement, "scroll", () => {
      var _a;
      return (_a = this.context) == null ? void 0 : _a.cleanup();
    });
  }
  get pluginKey() {
    return "popover";
  }
};

// src/js-components/grid/utility/cell-editor.ts
var ASCII_CODE = 128;
var IRGridCellEditor = class {
  constructor(cell) {
    this._cell = cell;
  }
  createTextAreaWrapper(key, clearData = false) {
    var _a;
    const textareaWrapper = document.createElement("div");
    const textarea = document.createElement("textarea");
    const beforeText = (_a = this._cell.metaInfo.text) != null ? _a : "";
    textarea.className = ne;
    textarea.value = beforeText;
    if (this._cell.metaInfo.maxLength)
      textarea.maxLength = this._cell.metaInfo.maxLength;
    else
      textarea.maxLength = 1e4;
    if (clearData)
      textarea.value = "";
    if (key && key.charCodeAt(0) < ASCII_CODE)
      textarea.value += key;
    const endEditHandler = (value, changed, endKeyCode) => {
      textarea.removeEventListener("blur", onBlurHandler);
      textareaWrapper.remove();
      if (changed && this._cell.checkInputValidation(value)) {
        const command2 = new SetCellCommand(this._cell.metaInfo.commandManager, [
          this._cell.row,
          this._cell.col,
          { text: value }
        ]);
        command2.onUndo = () => {
          this.onEditDone(this._cell, changed, beforeText, endKeyCode, textarea.selectionStart, textarea.selectionEnd);
        };
        command2.onExecute = () => {
          this.onEditDone(this._cell, changed, beforeText, endKeyCode, textarea.selectionStart, textarea.selectionEnd);
        };
        this._cell.metaInfo.commandManager.commandManager.pushCommandBlock(new IRCommandBlock(
          `Edit cell (${this._cell.row}, ${this._cell.col}) `,
          command2
        ));
        this._cell.cellInfo = { text: value };
      }
      this._cell.render();
      this._cell.setLastSelection(textarea.selectionStart, textarea.selectionEnd);
      this.onEditDone(this._cell, changed, beforeText, endKeyCode, textarea.selectionStart, textarea.selectionEnd);
    };
    const onBlurHandler = (ev) => {
      endEditHandler(textarea.value, beforeText !== textarea.value, "");
    };
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
    textarea.onkeydown = (ev) => {
      if (cursorHandler(ev)) {
        endEditHandler(textarea.value, beforeText !== textarea.value, ev.key);
        return;
      }
      if (ev.key === "Escape")
        endEditHandler(textarea.value, false, ev.key);
      else if (ev.key === "Enter") {
        if (!ev.altKey) {
          ev.preventDefault();
          endEditHandler(textarea.value, beforeText !== textarea.value, ev.key);
          this.onEnterOnEdit(ev.ctrlKey, ev.shiftKey);
          return;
        }
        textarea.readOnly = true;
        const start = textarea.value.substring(0, textarea.selectionStart);
        textarea.value = [
          textarea.value.substring(0, textarea.selectionStart),
          "\n",
          textarea.value.substring(textarea.selectionEnd)
        ].join("");
        textarea.readOnly = false;
        textarea.selectionEnd = start.length + 1;
      } else
        this.onEditKeyDown(ev, this._cell.row, this._cell.col, this._cell.metaInfo);
    };
    textarea.addEventListener("blur", onBlurHandler);
    textareaWrapper.appendChild(textarea);
    return { textareaWrapper, textarea };
  }
  runEditMode(data, clearData = false) {
    const { textareaWrapper, textarea } = this.createTextAreaWrapper(data, clearData);
    this._cell.replaceElement(textareaWrapper);
    textarea.focus();
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
  onEdit() {
  }
  onError() {
  }
  onEditDone(_cell, _isChanged, _beforeText, _endKeyCode, _selStart, _selEnd) {
  }
  onEditKeyDown(_ev, _row, _col, _meta) {
  }
};

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
    async next() {
      if (!queue) {
        return { done: true };
      }
      if (queue.length === 0) {
        if (isFinished) {
          queue = void 0;
          return this.next();
        }
        await new Promise((resolve) => {
          flush = resolve;
        });
        return this.next();
      }
      return {
        done: false,
        value: await queue.shift()
      };
    },
    async return(value) {
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
      return arguments.length > 0 ? { done: true, value: await value } : { done: true };
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
var Emittery = class _Emittery {
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
          value: new _Emittery()
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
        } catch {
          eventData = `Object with the following keys failed to stringify: ${Object.keys(eventData).join(",")}`;
        }
        if (typeof eventName === "symbol" || typeof eventName === "number") {
          eventName = eventName.toString();
        }
        const currentTime = /* @__PURE__ */ new Date();
        const logTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.${currentTime.getMilliseconds()}`;
        console.log(`[${logTime}][emittery:${type}][${debugName}] Event Name: ${eventName}
	data: ${eventData}`);
      };
    }
  }
  logIfDebugEnabled(type, eventName, eventData) {
    if (_Emittery.isDebugEnabled || this.debug.enabled) {
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
  async emit(eventName, eventData) {
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
    await resolvedPromise;
    await Promise.all([
      ...staticListeners.map(async (listener) => {
        if (listeners.has(listener)) {
          return listener(eventData);
        }
      }),
      ...staticAnyListeners.map(async (listener) => {
        if (anyListeners.has(listener)) {
          return listener(eventName, eventData);
        }
      })
    ]);
  }
  async emitSerial(eventName, eventData) {
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
    await resolvedPromise;
    for (const listener of staticListeners) {
      if (listeners.has(listener)) {
        await listener(eventData);
      }
    }
    for (const listener of staticAnyListeners) {
      if (anyListeners.has(listener)) {
        await listener(eventName, eventData);
      }
    }
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
    var _a, _b, _c, _d, _e2, _f;
    eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    let count = 0;
    for (const eventName of eventNames) {
      if (typeof eventName === "string") {
        count += anyMap.get(this).size + ((_b = (_a = getListeners(this, eventName)) == null ? void 0 : _a.size) != null ? _b : 0) + ((_d = (_c = getEventProducers(this, eventName)) == null ? void 0 : _c.size) != null ? _d : 0) + ((_f = (_e2 = getEventProducers(this)) == null ? void 0 : _e2.size) != null ? _f : 0);
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

// src/js-components/grid/utility/emitter.ts
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

// src/js-components/grid/utility/finder.ts
var import_lodash11 = __toESM(require_lodash(), 1);
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
    resetCursor() {
      generator = CellGenerator();
    },
    findNext(options) {
      if (!import_lodash11.default.isEqual(finderOptions, options))
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
    getAllMatchedCell(options) {
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

// src/js-components/grid/utility/merge.ts
var import_lodash12 = __toESM(require_lodash(), 1);
function isSingleCell(range) {
  return range.top === range.bottom && range.left === range.right;
}
function isInvalidRange(range) {
  return range.top > range.bottom || range.left > range.right;
}
function createMergeHandler(grid) {
  const mergeList = [];
  const generator = new IRGridCellGenerator(grid);
  const isValidatedMerging = ({ top, left, bottom, right }) => {
    return (0, import_lodash12.default)(mergeList).some(({ mergeArea }) => {
      return left <= mergeArea.right && right >= mergeArea.left && top <= mergeArea.bottom && bottom >= mergeArea.top;
    }) === false;
  };
  const getRowSpanCount = (top, bottom) => {
    return import_lodash12.default.range(top, bottom + 1).filter((r) => grid.getRowVisible(r)).reduce((cnt) => cnt + 1, 0);
  };
  const getColSpanCount = (left, right) => {
    return import_lodash12.default.range(left, right + 1).filter((c) => grid.getColumnVisible(c)).reduce((cnt) => cnt + 1, 0);
  };
  const isContainedHiddenCell = ({ top, left, bottom, right }) => {
    if (import_lodash12.default.range(top, bottom + 1).some((row) => grid.getRowVisible(row) === false) || import_lodash12.default.range(left, right + 1).some((col) => grid.getColumnVisible(col) === false))
      return true;
    return false;
  };
  const getMergeCell = (row, col) => {
    const cell = grid.cell(row, col);
    const id = mergeList.indexOf(cell);
    return id < 0 ? null : mergeList[id];
  };
  const isConflictedZIndex = (range) => new Set([...generator.getSelectionGenerator(range)].map((cell) => cell.zIndexVariant)).size > 1;
  return {
    isValidatedMerging,
    getMergedRowHeight(top, bottom) {
      const borderGap = (bottom - top) * ROW_BORDER_SIZE;
      return import_lodash12.default.range(top, bottom + 1).filter((id) => grid.getRowVisible(id)).reduce((height, id) => height + grid.getRowHeight(id), 0) + borderGap;
    },
    mergeCells(range) {
      if (isInvalidRange(range))
        throw new Error("Invalid range");
      else if (isValidatedMerging(range) === false)
        throw new Error("Could not merging with Conflicted cells!");
      else if (isContainedHiddenCell(range))
        throw new Error("Could not merging with hidden cells!");
      else if (isSingleCell(range))
        throw new Error("Could not merging with single cell!");
      else if (isConflictedZIndex(range))
        throw new Error("Could not merging with different z-index!");
      const mergeMain = grid.cell(range.top, range.left);
      mergeMain.height = this.getMergedRowHeight(range.top, range.bottom);
      mergeMain.mergeInfo = { rowSpan: getRowSpanCount(range.top, range.bottom), colSpan: getColSpanCount(range.left, range.right) };
      mergeList.push(mergeMain);
      const row = grid.getRow(range.top);
      row.updateMaxCellHeight();
      for (const cell of generator.getSelectionGenerator(range)) {
        if (cell.row !== range.top || cell.col !== range.left) {
          cell.mergeMain = mergeMain;
          cell.metaInfo.text = "";
        }
      }
    },
    splitCells(row, col) {
      const info = getMergeCell(row, col);
      if (!info)
        throw new Error("Could not split on a not merged cell!");
      for (const cell of generator.getSelectionGenerator(info.mergeArea)) {
        cell.mergeMain = void 0;
        cell.mergeInfo = { rowSpan: 1, colSpan: 1 };
      }
      this.removeMergeCell(row, col);
      grid.getRow(row).updateMaxCellHeight();
    },
    isMerged(row, col) {
      return !isValidatedMerging({ top: row, left: col, bottom: row, right: col });
    },
    *getMergedCellGenerator(range) {
      for (const cell of generator.getSelectionGenerator(range)) {
        if (cell.mergeInfo.rowSpan > 1 || cell.mergeInfo.colSpan > 1)
          yield cell;
      }
    },
    removeMergeCell(row, col) {
      const info = getMergeCell(row, col);
      if (!info)
        throw new Error("Could not split on a not merged cell!");
      mergeList.splice(mergeList.indexOf(info), 1);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(top, bottom) {
      for (const { mergeArea } of mergeList) {
        if (mergeArea.top < top && mergeArea.bottom >= top && mergeArea.bottom <= bottom || mergeArea.bottom > bottom && mergeArea.top >= top && mergeArea.top <= bottom || mergeArea.top < top && mergeArea.bottom > bottom)
          return true;
      }
      return false;
    },
    /**
     * if exists conflicting columns between left and right.
     */
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
}

// src/js-components/grid/utility/selector.ts
var import_lodash13 = __toESM(require_lodash(), 1);
var SELECTION_COUNT = 4;
var GRID_SELECTION_HIDDEN_CLS = "is-hidden";
function getIntersection(range, range2) {
  if (range.top > range2.bottom || range2.top > range.bottom || range.left > range2.right || range2.left > range.right)
    return null;
  return {
    top: Math.max(range.top, range2.top),
    left: Math.max(range.left, range2.left),
    bottom: Math.min(range.bottom, range2.bottom),
    right: Math.min(range.right, range2.right)
  };
}
var SUB_SELECTION_CLASSES = ae;
var SELECTION_CLASS = [Xr, re, $r, ee];
var BORDER_DIRECTION = ["top", "left", "bottom", "right"];
function createGridSelectionElement(grid) {
  const div = document.createElement("div");
  const selectionList = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ];
  const selectionBorderList = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ];
  const [borderTop, borderLeft, borderBottom, borderRight] = selectionBorderList;
  const horizontalBorderList = [borderTop, borderBottom];
  const verticalBorderList = [borderLeft, borderRight];
  div.classList.add(Ur, GRID_SELECTION_HIDDEN_CLS);
  selectionBorderList.forEach((border, id) => border.className = `${Yr} border-line__${BORDER_DIRECTION[id]}`);
  selectionList.forEach((subSelection) => div.appendChild(subSelection));
  selectionBorderList.forEach((border) => div.appendChild(border));
  function getAreaRectByRange(range) {
    const { top, left, bottom, right } = getRect(range);
    const adjustScrollTop = range.top < grid.getFreezedRowCount() ? grid.scrollTop : 0;
    const adjustScrollLeft = range.left < grid.getFreezedColumnCount() ? grid.scrollLeft : 0;
    return {
      top: top + adjustScrollTop,
      left: left + adjustScrollLeft,
      width: right - left,
      height: bottom - top
    };
  }
  function clearStyle(element) {
    element.classList.add(GRID_SELECTION_HIDDEN_CLS);
    delete element.dataset["y"];
    delete element.dataset["x"];
    delete element.dataset["width"];
    delete element.dataset["height"];
    delete element.dataset["visible"];
  }
  function setStyleByRange(elementIndex, range) {
    const element = selectionList[elementIndex];
    const rect = getAreaRectByRange(range);
    element.className = `${SUB_SELECTION_CLASSES} ${SELECTION_CLASS[elementIndex]}`;
    element.dataset["top"] = range.top.toString();
    element.dataset["left"] = range.left.toString();
    element.dataset["bottom"] = range.bottom.toString();
    element.dataset["right"] = range.right.toString();
    element.dataset["y"] = rect.top.toString();
    element.dataset["x"] = rect.left.toString();
    element.dataset["width"] = rect.width.toString();
    element.dataset["height"] = rect.height.toString();
    element.dataset["visible"] = "true";
    element.style.top = `${rect.top}px`;
    element.style.left = `${rect.left}px`;
    element.style.width = `${rect.width}px`;
    element.style.height = `${rect.height}px`;
  }
  function getRect(range) {
    return {
      top: grid.getRow(range.top).top - ROW_BORDER_SIZE,
      left: grid.getColumn(range.left).left - COLUMN_BORDER_SIZE,
      bottom: grid.getRow(range.bottom).bottom,
      right: grid.getColumn(range.right).right
    };
  }
  function getBodyWidthByRange(range) {
    const freezeColumns = grid.getFreezedColumnCount();
    return import_lodash13.default.range(range.left, range.right + 1).reduce((acc, col) => {
      const column = grid.getColumn(col);
      if (!column.visible)
        return acc;
      return acc + (col >= freezeColumns ? column.widthWithBorder : 0);
    }, 0);
  }
  function getBodyHeightByRange(range) {
    const freezeRows = grid.getFreezedRowCount();
    return import_lodash13.default.range(range.top, range.bottom + 1).reduce((acc, rowId) => {
      const row = grid.getRow(rowId);
      if (!row.visible)
        return acc;
      return acc + (rowId >= freezeRows ? row.heightWithBorder : 0);
    }, 0);
  }
  function getHiddenSize(point, bodySize, scrollPoint, freezedPoint) {
    if (point <= freezedPoint)
      return Math.min(bodySize, scrollPoint);
    const leftBorder = point - freezedPoint;
    return scrollPoint > leftBorder ? Math.max(0, scrollPoint - leftBorder) : 0;
  }
  function updateBorder(range) {
    const { top, left, bottom, right } = getRect(range);
    const {
      fixedRowHeight,
      fixedColumnWidth,
      scrollTop,
      scrollLeft
    } = grid;
    const freezedStartTop = fixedRowHeight + scrollTop;
    const freezedStartLeft = fixedColumnWidth + scrollLeft;
    const isInFreezeTop = top < fixedRowHeight;
    const isInFreezeBottom = bottom <= fixedRowHeight;
    const isInFreezeLeft = left < fixedColumnWidth;
    const isInFreezeRight = right <= fixedColumnWidth;
    const greaterThanStartTop = top >= freezedStartTop;
    const greaterThanStartBottom = bottom >= freezedStartTop;
    const greaterThanStartLeft = left >= freezedStartLeft;
    const greaterThanStartRight = right >= freezedStartLeft;
    const bodyWidth = getBodyWidthByRange(range);
    const bodyHeight = getBodyHeightByRange(range);
    const hiddenWidth = getHiddenSize(left, bodyWidth, scrollLeft, fixedColumnWidth);
    const hiddenHeight = getHiddenSize(top, bodyHeight, scrollTop, fixedRowHeight);
    const borderWidth = right - left - hiddenWidth;
    const borderHeight = bottom - top - hiddenHeight;
    const adjustTop = top + (isInFreezeTop ? scrollTop : hiddenHeight);
    const adjustLeft = left + (isInFreezeLeft ? scrollLeft : hiddenWidth);
    const adjustLeftSize = adjustLeft < 0 ? 1 : 0;
    const adjustTopSize = adjustTop < 0 ? 1 : 0;
    (function updateBorderWidth() {
      horizontalBorderList.forEach((border) => {
        border.style.left = `${adjustLeft + adjustLeftSize}px`;
        border.style.width = `${borderWidth - adjustLeftSize}px`;
      });
    })();
    (function updateBorderHeight() {
      verticalBorderList.forEach((border) => {
        border.style.top = `${adjustTop + adjustTopSize}px`;
        border.style.height = `${borderHeight - adjustTopSize}px`;
      });
    })();
    (function updateBorderTop() {
      if (borderWidth <= 1) {
        borderTop.style.display = "none";
        return;
      }
      borderTop.style.removeProperty("display");
      if (isInFreezeTop)
        borderTop.style.top = `${top + scrollTop + adjustTopSize}px`;
      else if (greaterThanStartTop)
        borderTop.style.top = `${top + adjustTopSize}px`;
      else
        borderTop.style.display = "none";
    })();
    (function updateBorderBottom() {
      if (borderWidth <= 1) {
        borderBottom.style.display = "none";
        return;
      }
      borderBottom.style.removeProperty("display");
      if (isInFreezeBottom)
        borderBottom.style.top = `${bottom + scrollTop - ROW_BORDER_SIZE}px`;
      else if (greaterThanStartBottom)
        borderBottom.style.top = `${bottom - ROW_BORDER_SIZE}px`;
      else
        borderBottom.style.display = "none";
    })();
    (function updateBorderLeft() {
      if (borderHeight <= 1) {
        borderLeft.style.display = "none";
        return;
      }
      borderLeft.style.removeProperty("display");
      if (isInFreezeLeft)
        borderLeft.style.left = `${left + scrollLeft + adjustLeftSize}px`;
      else if (greaterThanStartLeft)
        borderLeft.style.left = `${left + adjustLeftSize}px`;
      else
        borderLeft.style.display = "none";
    })();
    (function updateBorderRight() {
      if (borderHeight <= 1) {
        borderRight.style.display = "none";
        return;
      }
      borderRight.style.removeProperty("display");
      if (isInFreezeRight)
        borderRight.style.left = `${right + scrollLeft - COLUMN_BORDER_SIZE}px`;
      else if (greaterThanStartRight)
        borderRight.style.left = `${right - COLUMN_BORDER_SIZE}px`;
      else
        borderRight.style.display = "none";
    })();
  }
  return {
    get selectionRoot() {
      return div;
    },
    updateArea(range) {
      const headerRows = grid.headerRows;
      const freezedRows = grid.getFreezedRowCount();
      const headerColumn = grid.headerColumns;
      const freezedColumns = grid.getFreezedColumnCount();
      const endRow = grid.getRowCount() - 1;
      const endColumn = grid.getColCount() - 1;
      const selectionArea = [
        { top: headerRows, left: headerColumn, bottom: freezedRows - 1, right: freezedColumns - 1 },
        { top: headerRows, left: freezedColumns, bottom: freezedRows - 1, right: endColumn },
        { top: freezedRows, left: headerColumn, bottom: endRow, right: freezedColumns - 1 },
        { top: freezedRows, left: freezedColumns, bottom: endRow, right: endColumn }
      ];
      const intersectionList = selectionArea.map((area) => getIntersection(range, area));
      for (let index = 0; index < SELECTION_COUNT; index++) {
        const intersection = intersectionList[index];
        if (intersection)
          setStyleByRange(index, intersection);
        else
          clearStyle(selectionList[index]);
      }
      updateBorder(range);
    },
    applyGridScroll() {
      const range = grid.getSelection();
      if (!range)
        return;
      this.updateArea(range);
    },
    show() {
      div.classList.remove(GRID_SELECTION_HIDDEN_CLS);
    },
    hide() {
      div.classList.add(GRID_SELECTION_HIDDEN_CLS);
    }
  };
}
var IRGridSelector = class {
  constructor(grid, gridContext, gridWrapperElement) {
    this._activatedHeaderCellList = [];
    this._gridContext = gridContext;
    this._selectionHandler = createGridSelectionElement(grid);
    gridWrapperElement.appendChild(this._selectionHandler.selectionRoot);
  }
  updateScroll() {
    this._selectionHandler.applyGridScroll();
  }
  releaseRange() {
    this._selectionHandler.hide();
  }
  update() {
    const selection = this._gridContext.selectionRangeState.value;
    if (!selection) {
      this.releaseRange();
      return;
    }
    const { range } = selection;
    this._selectionHandler.show();
    this._selectionHandler.updateArea(range);
  }
};

// src/js-components/grid/command/add-column.ts
var AddColumnCommand = class extends IRGridCommand {
  _execute() {
    return this._instance.addColumn(...this._args);
  }
  _getUndoContext() {
    return {
      addedColumn: this._instance.getColCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _undo() {
    this._instance.removeColumn(this._undoContext.addedColumn);
    this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  get canExecute() {
    return true;
  }
  get canUndo() {
    if (!this._undoContext)
      return false;
    return this._instance.getColCount() > this._undoContext.addedColumn;
  }
};

// src/js-components/grid/command/add-row.ts
var AddRowCommand = class extends IRGridCommand {
  _execute() {
    return this._instance.addRow(...this._args);
  }
  _undo() {
    this._instance.removeRow(this._undoContext.addedRow);
    this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      addedRow: this._instance.getRowCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canExecute() {
    return true;
  }
  get canUndo() {
    if (!this._undoContext)
      return false;
    return this._instance.getRowCount() > this._undoContext.addedRow;
  }
};

// src/js-components/grid/command/column-visible.ts
var SetColumnVisibleCommand = class extends IRGridCommand {
  _undo() {
    this._instance.setColumnVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getColumnVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setColumnVisible(...this._args);
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/insert-column.ts
var InsertColumnCommand = class extends IRGridCommand {
  _undo() {
    const [col, count = 1] = this._args;
    this._instance.removeColumns(col, col + count - 1);
    this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertColumns(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/insert-row.ts
var InsertRowCommand = class extends IRGridCommand {
  _undo() {
    const [row, count = 1] = this._args;
    this._instance.removeRows(row, row + count - 1);
    this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertRows(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/merge-cells.ts
var MergeCellsCommand = class extends IRGridCommand {
  _undo() {
    const [top, left] = this._args;
    this._instance.splitCells(top, left);
    this._undoContext.textSnapshot.forEach(({ row, col, text }) => {
      this._instance.setText(row, col, text);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const generator = new IRGridCellGenerator(this._instance);
    const [top, left, bottom, right] = this._args;
    const textSnapshot = [];
    for (const cell of generator.getSelectionGenerator({ top, left, bottom, right })) {
      textSnapshot.push({ row: cell.row, col: cell.col, text: cell.text });
    }
    return {
      textSnapshot
    };
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/remove-col.ts
var RemoveColumnCommand = class extends IRGridCommand {
  _undo() {
    const count = this._args[1] - this._args[0] + 1;
    this._instance.insertColumns(this._args[0], count);
    this._undoContext.columnList.forEach((column, index) => {
      this._instance.setColumnWidth(index + this._args[0], column.width);
      this._instance.setColumnVisible(index + this._args[0], column.visible);
    });
    this._undoContext.removedCells.forEach((removedCell) => {
      this._instance.cell(removedCell.row, removedCell.col).cellRenderer = removedCell.cellRenderer;
      this._instance.setCell(removedCell.row, removedCell.col, removedCell.metaInfo);
      if (removedCell.mergeInfo.rowSpan > 1 || removedCell.mergeInfo.colSpan > 1)
        this._instance.mergeCells(
          removedCell.row,
          removedCell.col,
          removedCell.bottom,
          removedCell.right
        );
    });
    this._undoContext.selection && this._instance.select(
      this._undoContext.selection,
      this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
    );
  }
  _getUndoContext() {
    const rangeUtil = new IRGridRangeUtil(this._instance);
    const [left, right] = this._args;
    return {
      removedCells: rangeUtil.getCellListByColumn(left, right),
      columnList: rangeUtil.getColumnListByColumn(left, right),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _execute() {
    return this._instance.removeColumns(...this._args);
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/remove-row.ts
var import_lodash14 = __toESM(require_lodash(), 1);
var RemoveRowCommand = class extends IRGridCommand {
  _undo() {
    const count = this._args[1] - this._args[0] + 1;
    this._instance.insertRows(this._args[0], count);
    this._instance.forceLayoutTask();
    this._undoContext.removedRows.forEach((removedRow) => {
      const recoveredRow = this._instance.getRow(removedRow.rowId);
      this._instance.setRowHeight(recoveredRow.rowId, removedRow.height);
      this._instance.setRowVisible(recoveredRow.rowId, removedRow.visible);
      for (let cellId = 0; cellId < removedRow.cellCounts; cellId++) {
        const removedCell = removedRow.getCell(cellId);
        recoveredRow.getCell(cellId).cellRenderer = removedCell.cellRenderer;
        this._instance.setCell(recoveredRow.rowId, cellId, removedCell.metaInfo);
        if (removedCell.mergeInfo.rowSpan > 1 || removedCell.mergeInfo.colSpan > 1)
          this._instance.mergeCells(
            removedCell.row,
            removedCell.col,
            removedCell.bottom,
            removedCell.right
          );
      }
      this._undoContext.selection && this._instance.select(
        this._undoContext.selection,
        this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
      );
    });
  }
  _execute() {
    return this._instance.removeRows(...this._args);
  }
  _getUndoContext() {
    const [top, bottom] = this._args;
    const removedRows = import_lodash14.default.range(top, bottom + 1).map((row) => this._instance.getRow(row));
    return {
      removedRows,
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/row-visible.ts
var SetRowVisibleCommand = class extends IRGridCommand {
  _undo() {
    this._instance.setRowVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getRowVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setRowVisible(...this._args);
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/split-cells.ts
var SplitCellsCommand = class extends IRGridCommand {
  _undo() {
    const [top, left] = this._args;
    this._instance.mergeCells(top, left, top + this._undoContext.rowSpan - 1, left + this._undoContext.colSpan - 1);
  }
  _execute() {
    this._instance.splitCells(...this._args);
  }
  _getUndoContext() {
    const cell = this._instance.cell(...this._args);
    return {
      rowSpan: cell.mergeInfo.rowSpan,
      colSpan: cell.mergeInfo.colSpan
    };
  }
  get canUndo() {
    return true;
  }
  get canExecute() {
    return true;
  }
};

// src/js-components/grid/command/grid-command-finder.ts
var IR_GRID_COMMAND_MAP = {
  addRow: AddRowCommand,
  addColumn: AddColumnCommand,
  setCell: SetCellCommand,
  clearCells: ClearCellsCommand,
  setRowHeight: ResizeRowCommand,
  setColumnWidth: ResizeColumnCommand,
  insertRows: InsertRowCommand,
  insertColumns: InsertColumnCommand,
  setRowVisible: SetRowVisibleCommand,
  setColumnVisible: SetColumnVisibleCommand,
  mergeCells: MergeCellsCommand,
  splitCells: SplitCellsCommand,
  removeRows: RemoveRowCommand,
  removeColumns: RemoveColumnCommand
};
function findIRGridCommand(method) {
  if (!(method in IR_GRID_COMMAND_MAP)) {
    console.warn(`There is no method named ${method} in IRGridCommandMap`);
    return void 0;
  }
  return IR_GRID_COMMAND_MAP[method];
}

// src/js-components/command-manager/decorator.ts
function getCommandMap(className) {
  if (className === IRGrid.name)
    return findIRGridCommand;
  return void 0;
}
function recordTask(commandManager, className, method, context, args) {
  const commandFinder = getCommandMap(className);
  if (!commandFinder) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const commandConstructor = commandFinder(method);
  if (!commandConstructor) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  commandManager.pushCommand(new commandConstructor(context, args));
}
function command() {
  return function funcWrapper(_target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      const { commandManager } = this;
      if (!commandManager)
        console.warn("No commandManager in this context");
      else if (commandManager.isRecording)
        recordTask(commandManager, this.constructor.name, propertyKey, this, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

// src/js-components/grid/grid.ts
var gridCSS = {
  grid: zr,
  gridWrapper: de,
  gridTable: te,
  gridVariants: le
};
var IR_GRID_WEAK_MAP_OBJ = {};
var IR_GRID_CLIPBOARD_TYPE_LIST = [
  "text/html",
  "text/plain"
];
var IRGrid = class extends IRComponent {
  constructor(args) {
    var _a, _b, _c, _d;
    super({ contextElement: args.contextElement });
    this._gridContext = new IRGridStateContext(this);
    this._gridRangeUtils = new IRGridRangeUtil(this);
    this._plugins = [];
    this._readonly = false;
    const {
      contextElement,
      colHeader,
      rowHeader,
      body,
      defaultColumnCellFormat,
      plugins,
      storeOptions
    } = args;
    this._multipleCellMode = (_a = args.multipleCellMode) != null ? _a : false;
    this._cursorManager = createGridCellCursorManager(this, false);
    this._commandManager = new IRCommandManager({ context: this });
    this.contextElement.tabIndex = -1;
    this._defaultColumnCellFormat = {
      all: {
        editable: true,
        text: ""
      }
    };
    this._copyOptions = (_b = args.copyOptions) != null ? _b : { rowSpan: true, colSpan: true };
    if (defaultColumnCellFormat) {
      for (const [key, value] of Object.entries(defaultColumnCellFormat))
        this._defaultColumnCellFormat[key] = Object.assign(this._defaultColumnCellFormat[key] || {}, value);
    }
    const defaultCellRenderer = () => new IRGridDefaultCellRenderer();
    this._gridStore = new IRGridStore(
      Object.assign({
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: (_c = rowHeader == null ? void 0 : rowHeader.colCount) != null ? _c : 0,
        headerRowCount: (_d = colHeader == null ? void 0 : colHeader.rowCount) != null ? _d : 0
      }, storeOptions)
    );
    this.initGridCellPadding();
    this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: defaultCellRenderer,
      defaultSize: this._gridStore.defaultColumnWidth,
      minSize: this._gridStore.defaultColumnMinSize,
      maxSize: this._gridStore.defaultColumnMaxSize
    }, colHeader);
    this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize);
    this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize);
    this._rowHeaderInfo = Object.assign({
      colCount: 0,
      cellRenderer: defaultCellRenderer,
      defaultSize: this._gridStore.defaultRowHeight,
      minSize: this._gridStore.defaultRowMinSize,
      maxSize: this._gridStore.defaultRowMaxSize
    }, rowHeader);
    this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize);
    this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize);
    this._bodyInfo = Object.assign({
      rowCount: 5,
      colCount: 0,
      cellRenderer: defaultCellRenderer
    }, body);
    this.contextElement.classList.add(gridCSS.grid);
    this._tableElement = document.createElement("table");
    this._divWrapper = document.createElement("div");
    const tbody = document.createElement("tbody");
    this._divWrapper.className = gridCSS.gridWrapper;
    this._divWrapper.tabIndex = -1;
    this._tableElement.classList.add(gridCSS.gridTable);
    this._tableElement.appendChild(this.colManager.colgroup);
    this._tableElement.appendChild(tbody);
    this._divWrapper.appendChild(this._tableElement);
    this.contextElement.appendChild(this._divWrapper);
    this.resizeObserver = new ResizeObserver(() => {
      this._emitterController.emit("onWrapperResized", {});
      this._debounceManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      this.onResizeContext();
    });
    this.resizeObserver.observe(this.contextElement);
    this.initPlugins(plugins != null ? plugins : [
      new IRGridDefaultKeyPlugin({}),
      new IRGridMouseCellSelectorPlugin(),
      new IRGridCellDropPlugin({}),
      new IRGridResizerPlugin({
        enabledColResizer: true,
        enabledRowResizer: true
      }),
      new IRGridPopoverPlugin({
        memoInterval: 500,
        tooltipInterval: 500,
        hideTooltipWhenHasMemo: true
      })
    ]);
    this.addCoreElement(this._divWrapper);
    this._mergeManager = createMergeHandler(this);
    this._emitterController = createEmitController(this);
    this._generator = new IRGridCellGenerator(this);
    this._selector = new IRGridSelector(this, this._gridContext, this._divWrapper);
    this._debounceManager = new IRGridDebounceManager(this, this._gridContext, this._divWrapper, tbody, contextElement, this._selector);
    this._gridContext.selectionRangeState.addSubscription((prev, next) => {
      if ((prev == null ? void 0 : prev.activeCell) === (next == null ? void 0 : next.activeCell))
        return;
      prev == null ? void 0 : prev.activeCell.deactivate();
      next == null ? void 0 : next.activeCell.activate();
    });
    this._gridContext.activateHeaderCellState.addSubscription((prev, next) => {
      prev.forEach((cell) => cell.deactivate());
      next.forEach((cell) => cell.activate());
    });
    this._gridContext.selectionRangeState.addSubscription((_prev, next) => {
      if (next)
        this._gridContext.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(next.range)]);
      else
        this._gridContext.activateHeaderCellState.next([]);
    });
    this._gridContext.selectionRangeState.addSubscription((_prev, next) => {
      if (next)
        this.onSelectCell(next.activeCell);
      else
        this.onActiveCellNull();
    });
    this._gridContext.selectionRangeState.addSubscription((_prev, next) => {
      var _a2;
      this.onSelectChanged((_a2 = next == null ? void 0 : next.range) != null ? _a2 : null);
    });
    this._gridContext.gridModeState.addSubscription((_prev, next) => {
      this.contextElement.dataset["mode"] = next.mode;
    });
    this._gridContext.gridModeState.next({ mode: "idle", contextParam: {} });
    this.initTableRowCol();
    this.addGlobalEventListener(this.contextElement, "contextmenu", (ev) => {
      ev.preventDefault();
      const { x: x2, y: y2 } = getOffsetXYOnContext(ev);
      this.onContextMenu(ev, this.findCellOrNull(y2, x2));
    });
  }
  /**
   * 현재 고정된 행 개수 (header)
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  get canSelectMultipleCells() {
    return this._multipleCellMode;
  }
  get firstRow() {
    return this.rowManager.firstRow;
  }
  get lastRow() {
    return this.rowManager.lastRow;
  }
  get rowManager() {
    return this._gridStore.rowManager;
  }
  get colManager() {
    return this._gridStore.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  get fixedColumnCount() {
    return this.colManager.freezedColumns;
  }
  get width() {
    return this.colManager.columnsWidth;
  }
  get height() {
    return this.rowManager.rowsHeight;
  }
  /**
   * headerRows + freezedRows 높이 총합
   */
  get fixedRowHeight() {
    return this.rowManager.freezedRowsHeight;
  }
  /**
   * rowHeaders + freezedColumns 너비 총합
   */
  get fixedColumnWidth() {
    return this.colManager.fixedColumnsWidth;
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
    return this._colHeaderInfo.minSize;
  }
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  get commandManager() {
    return this._commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수 (초기 colHeader.rowCount)
   */
  get headerRows() {
    return this.rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수 (초기 rowHeader.colCount)
   */
  get headerColumns() {
    return this.colManager.headerColumns;
  }
  get headerWidth() {
    return this.colManager.rowHeaderColumnsWidth;
  }
  get headerHeight() {
    return this.rowManager.headerRowsHeight;
  }
  get activeCell() {
    var _a, _b;
    return (_b = (_a = this._gridContext.selectionRangeState.value) == null ? void 0 : _a.activeCell) != null ? _b : null;
  }
  /*
   * Setters
   */
  set activeCell(cell) {
    if (cell === this.activeCell)
      return;
    if (!cell) {
      this._gridContext.selectionRangeState.next(null);
      return;
    }
    const selection = this.getSelection();
    if (selection) {
      this._gridContext.selectionRangeState.next({
        activeCell: cell,
        range: selection
      });
    } else {
      this._gridContext.selectionRangeState.next({
        activeCell: cell,
        range: { top: cell.row, left: cell.col, bottom: cell.bottom, right: cell.right }
      });
    }
  }
  set readonly(flag) {
    this._readonly = flag;
    this.rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(plugin) {
    plugin.mount({
      grid: this,
      table: this._tableElement,
      contextElement: this.contextElement,
      emitController: this._emitterController,
      wrapperElement: this._divWrapper,
      gridContext: this._gridContext
    });
  }
  getColumnByLeft(left) {
    const visibleColumnList = this.colManager.visibleColumnList;
    let startIndex = 0;
    let endIndex = visibleColumnList.length - 1;
    while (startIndex <= endIndex) {
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
      const column = visibleColumnList[middleIndex];
      if (column.isBetweenLeft(left))
        return column;
      if (left < column.left)
        endIndex = middleIndex - 1;
      else
        startIndex = middleIndex + 1;
    }
    return null;
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(top) {
    return this.rowManager.getRowByTop(top);
  }
  removePlugin(plugin) {
    plugin.unmount();
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
    return this._mergeManager.isMerged(row, col);
  }
  splitCells(row, col) {
    this.forceLayoutTask();
    this._mergeManager.splitCells(row, col);
    this._debounceManager.addTask("virtualRender");
  }
  mergeCells(top, left, bottom, right) {
    this.forceLayoutTask();
    this._mergeManager.mergeCells({ top, left, bottom, right });
    this._debounceManager.addTask("virtualRender");
    const selection = this.getSelection();
    if (selection)
      this.selectRange(selection.top, selection.left, selection.bottom, selection.right);
  }
  undo() {
    this._commandManager.undo();
  }
  redo() {
    this._commandManager.redo();
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
      endIndex: this.rowManager.length,
      curIndex: Math.floor(this.rowManager.length / 2),
      scrollTop: 0
    };
    let curRow = this.rowManager.getRow(searchStatus.curIndex);
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
      curRow = this.rowManager.getRow(searchStatus.curIndex);
    }
    return curRow;
  }
  findCellOrNull(offsetY, offsetX) {
    var _a;
    const { scrollTop, scrollLeft } = this;
    const adjustOffsetY = offsetY < scrollTop + this.fixedRowHeight ? offsetY - scrollTop : offsetY;
    const adjustOffsetX = offsetX < scrollLeft + this.fixedColumnWidth ? offsetX - scrollLeft : offsetX;
    const row = this.getRowByTop(adjustOffsetY);
    if (!row)
      return null;
    const column = this.getColumnByLeft(adjustOffsetX);
    if (!column)
      return null;
    const cell = this.cell(row.rowId, column.columnId);
    return (_a = cell.mergeMain) != null ? _a : cell;
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
    this._gridContext.selectionRangeState.next(null);
    this._selector.releaseRange();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this.rowManager.clearRows();
    this._commandManager.clearCommands();
    this._debounceManager.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(col) {
    return this.colManager.getColumnLeft(col);
  }
  select(range, cell = this.activeCell) {
    this._gridContext.selectionRangeState.next({
      range,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
      activeCell: cell ? cell : this.cell(range.top, range.left)
    });
    this._debounceManager.addTask("updateSelection");
  }
  selectRange(top, left, bottom, right, cell = this.activeCell) {
    this.select({ top, left, bottom, right }, cell);
  }
  selectAll() {
    var _a;
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, (_a = this.activeCell) != null ? _a : null);
  }
  getCellWidth(cell) {
    if (cell.mergeInfo)
      return import_lodash15.default.range(cell.mergeInfo.colSpan).filter((id) => this.getColumnVisible(cell.col + id)).reduce((width, id) => width + this.getColumnWidth(cell.col + id), 0);
    else
      return this.getColumnWidth(cell.col);
  }
  getCellHeight(cell) {
    if (cell.mergeInfo)
      return import_lodash15.default.range(cell.mergeInfo.rowSpan).filter((id) => this.getRowVisible(cell.row + id)).reduce((height, id) => height + this.getRowHeight(cell.row + id), 0);
    else
      return this.getRowHeight(cell.col);
  }
  getSelection() {
    var _a, _b;
    return (_b = (_a = this._gridContext.selectionRangeState.value) == null ? void 0 : _a.range) != null ? _b : null;
  }
  scrollOnRow(row) {
    if (!this._debounceManager.isScheduled)
      this.scrollOnRowTask(row);
    else
      this.afterRender(() => this.scrollOnRowTask(row));
  }
  forceLayoutTask() {
    this._debounceManager.forceRunTasks();
  }
  scrollOnCol(col) {
    if (!this._debounceManager.isScheduled)
      this.scrollOnColTask(col);
    else
      this.afterRender(() => this.scrollOnColTask(col));
  }
  getPlugin(type) {
    for (const plugin of this._plugins) {
      if (plugin instanceof type)
        return plugin;
    }
    throw new Error(`not found plugin ${type}`);
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
    this.contextElement.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업 예약
   */
  afterRender(callback) {
    this._debounceManager.addAfterRenderTask(callback);
    this._debounceManager.addTask("nothing");
  }
  /**
   * @command 내부적으로 setCell을 호출하여 command에 기록
   */
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
    return this.colManager.getColumnWidth(col);
  }
  setColumnWidth(columnId, width) {
    const adjustWidth = getMinMaxBetween(width, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this.colManager.setColumnWidth(columnId, adjustWidth);
    this.onResizeColumn(columnId);
    this._emitterController.emit("onColumnChanged", { left: columnId, right: columnId, type: "setWidth" });
    this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection");
    if (columnId < this.colManager.freezedColumns)
      this._debounceManager.addTask("updateRowsStickyLeft");
  }
  getRowHeight(row) {
    return this.rowManager.getRow(row).height;
  }
  setRowHeight(row, height) {
    const adjustHeight = getMinMaxBetween(height, this.minRowHeight, this.maxRowHeight);
    this.rowManager.setRowHeight(row, adjustHeight);
    this._debounceManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  setRowTextColor(row, color) {
    this.rowManager.getRow(row).textColor = color;
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
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환합니다.
   */
  getCell(row, col) {
    return this.cell(row, col).metaInfo;
  }
  setCell(row, col, cellInfo) {
    this.cell(row, col).cellInfo = cellInfo;
  }
  /**
   * 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용
   * rowInfo의 cellMetaInfo의 경우, 기존 속성을 상속하지 않고,
   */
  setRowInfo(rowNo, rowInfo) {
    this.getRow(rowNo).setRowInfo(rowInfo);
  }
  selectCell(row, col) {
    this.selectRange(row, col, row, col, this.cell(row, col));
  }
  getRowCount() {
    return this.rowManager.length;
  }
  getColCount() {
    return this.colManager.length;
  }
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)
   */
  getFreezedRowCount() {
    return this.rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  getFreezedColumnCount() {
    return this.colManager.freezedColumns;
  }
  getColumn(columnId) {
    return this.colManager.getColumn(columnId);
  }
  getRow(rowId) {
    return this.rowManager.getRow(rowId);
  }
  /**
   * @deprecated
   */
  getRowLodash() {
    return this.rowManager.rowLodash;
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(height = this._rowHeaderInfo.defaultSize) {
    const adjustedHeight = getMinMaxBetween(height, this.minRowHeight, this.maxRowHeight);
    const gridRow = this.createIRGridRow(this.rowManager.getNextRowId(), this.height, adjustedHeight);
    this.rowManager.addRow(gridRow);
    return gridRow.rowId;
  }
  _createBulkRows(rowCount, height) {
    for (let i = 0; i < rowCount; i++)
      this._addRow(height);
    this._debounceManager.scheduleAddRowTasks();
  }
  addRow(height) {
    this._debounceManager.scheduleAddRowTasks();
    return this._addRow(height);
  }
  /**
   *
   * @command removeRows 호출로 command화
   */
  removeRow(row) {
    return this.removeRows(row, row);
  }
  /**
   *
   * @command removeColumns 호출로 command화
   */
  removeColumn(col) {
    return this.removeColumns(col, col);
  }
  removeRows(top, bottom) {
    if (top < this.headerRows)
      throw new Error(`Could not remove rows in header rows!`);
    if (bottom >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount() - 1}. If you wanna clear all rows, please call clearRows()`);
    if (this._mergeManager.checkConflictingInRows(top, bottom))
      return false;
    for (let rowId = top; rowId <= bottom; rowId++) {
      const row = this.getRow(rowId);
      for (const cell of row.getCellGenerator())
        cell.isMerged && this._mergeManager.removeMergeCell(cell.row, cell.col);
    }
    this.rowManager.removeRows(top, bottom);
    this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
    return true;
  }
  removeColumns(left, right) {
    if (left < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (right >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    if (this._mergeManager.checkConflictingInColumns(left, right))
      return false;
    this.rowManager.rowLodash.forEach((row) => {
      for (const cell of row.getCellGenerator(left, right)) {
        if (cell.isMerged)
          this._mergeManager.removeMergeCell(cell.row, cell.col);
      }
    });
    this.rowManager.removeColumns(left, right);
    this.colManager.removeColumns(left, right);
    this._emitterController.emit("onColumnChanged", { left, right, type: "removeColumns" });
    this._debounceManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection");
    if (left < this.colManager.freezedColumns)
      this._debounceManager.addTask("updateRowsStickyLeft");
    return true;
  }
  _addColumn(width = this._colHeaderInfo.defaultSize) {
    const adjustWidth = getMinMaxBetween(width, this.minColWidth, this.maxColWidth);
    const column = this.colManager.addColumn(adjustWidth);
    this.rowManager.addColumn((row) => this.createIRGridCell(row.rowId, column.columnId));
    this._emitterController.emit("onColumnChanged", { left: column.columnId, right: column.columnId, type: "addColumn" });
    return column.columnId;
  }
  addColumn(width) {
    this._debounceManager.addTask("generateScrollBarClass");
    return this._addColumn(width);
  }
  /**
   *
   * @command
   */
  insertRow(row, height) {
    return this.insertRows(row, 1, height);
  }
  insertRows(insertingRowId, count = 1, height = this._rowHeaderInfo.defaultSize) {
    const rowCount = this.getRowCount();
    const adjustInsertId = getMinMaxBetween(insertingRowId, this.headerRows, rowCount);
    if (!this._mergeManager.checkCanInsertRow(adjustInsertId))
      return false;
    const adjustHeight = getMinMaxBetween(height, this.minRowHeight, this.maxRowHeight);
    if (adjustInsertId === rowCount) {
      for (let i = 0; i < count; i++)
        this.addRow(adjustHeight);
      return true;
    }
    const newRows = import_lodash15.default.range(count).map((id) => this.createIRGridRow(adjustInsertId + id, 0, adjustHeight));
    this.rowManager.insertRows(adjustInsertId, newRows);
    this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("adjustSelection");
    return true;
  }
  /**
   *
   * @command
   */
  insertColumn(col, width) {
    return this.insertColumns(col, 1, width);
  }
  insertColumns(columnId, count = 1, width = this._colHeaderInfo.defaultSize) {
    const endColumn = this.getColCount();
    const adjustInsertId = getMinMaxBetween(columnId, this.headerColumns, endColumn);
    if (!this._mergeManager.checkCanInsertColumn(columnId))
      return false;
    const adjustWidth = getMinMaxBetween(width, this.minColWidth, this.maxColWidth);
    if (adjustInsertId === endColumn) {
      for (let i = 0; i < count; i++)
        this.addColumn(adjustWidth);
      return true;
    }
    this.colManager.insertColumns(columnId, count, adjustWidth);
    this.rowManager.insertColumns(columnId, count, (row, col) => this.createIRGridCell(row, col));
    const chain = this._debounceManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
    if (columnId < this.colManager.freezedColumns)
      chain.addTask("updateRowsStickyLeft");
    return true;
  }
  /**
   *
   * @command autoSizeColumns
   */
  autoSizeColumn(col) {
    this.autoSizeColumns(col, col);
  }
  /**
   *
   * @command
   */
  autoSizeColumns(left, right) {
    import_lodash15.default.range(left, right + 1).forEach((col) => {
      const maxWidth = Math.ceil(this.rowManager.rowLodash.map((row) => row.getCell(col)).filter((cell) => cell.visible && cell.mergeInfo.colSpan === 1).flatMap((cell) => cell.innerWidth).reduce((a, b) => Math.max(a, b), 0));
      if (maxWidth !== this.getColumnWidth(col))
        this.setColumnWidth(
          col,
          getMinMaxBetween(
            maxWidth,
            this._colHeaderInfo.minSize,
            this._colHeaderInfo.maxSize
          )
        );
    }, false);
  }
  /**
   *
   * @command autoSizeRows
   */
  autoSizeRow(row) {
    this.autoSizeRows(row, row);
  }
  /**
   * @command
   */
  autoSizeRows(top, bottom) {
    import_lodash15.default.range(top, bottom + 1).forEach((row) => {
      const autoHeight = this.rowManager.getRow(row).rowInnerHeight;
      if (autoHeight !== this.getRowHeight(row))
        this.setRowHeight(row, autoHeight);
    });
  }
  copyToClipboard() {
    const selection = this.getSelection();
    if (!selection) {
      console.warn("No selection detected.");
      return;
    }
    this.focus();
    document.execCommand("copy");
  }
  _hasToSplitBeforePasting(cellMetaInfoList) {
    if (!this._copyOptions.rowSpan && !this._copyOptions.colSpan)
      return false;
    return cellMetaInfoList.flat().some((metaInfo) => metaInfo.rowSpan > 1 || metaInfo.colSpan > 1);
  }
  async _createClipboardGetter() {
    var _a;
    const obj = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const items = (await ClipboardManager.read()).flat();
      for await (const item of items) {
        for (const type of IR_GRID_CLIPBOARD_TYPE_LIST) {
          if (obj[type] === "" && item.types.includes(type))
            obj[type] = await blobToStr(await item.getType(type));
        }
      }
    } catch (err) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", err);
      obj["ir-grid/cell"] = (_a = readText(IR_GRID_WEAK_MAP_OBJ)) != null ? _a : "";
    }
    return {
      getData(format) {
        var _a2;
        return (_a2 = obj[format]) != null ? _a2 : "";
      }
    };
  }
  /**
   * Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * ! firefox의 경우 Clipboard API를 지원하지 않는다.
   */
  async pasteFromClipboard() {
    const selection = this.getSelection();
    if (!selection) {
      console.warn("no selection, it needs selection to paste");
      return;
    }
    this.paste(
      selection,
      getCopyMetaInfoFromClipboard(
        await this._createClipboardGetter()
      )
    );
  }
  paste(range, cellMetaInfoList) {
    if (cellMetaInfoList.length === 0) {
      console.warn("No clipboard data to paste");
      return;
    }
    const pastingContext = getPastingContext(this, this._copyOptions);
    const pasteRange = pastingContext.getPastingRange(range, cellMetaInfoList);
    this._hasToSplitBeforePasting(cellMetaInfoList) && this.splitCellsByRange(pasteRange);
    const pastingCellList = pastingContext.beforePastingList(pasteRange, cellMetaInfoList);
    if (pastingCellList.length === 0)
      return;
    this.onClipboardBeforePaste(pasteRange);
    pastingContext.pasteTask(pastingCellList);
    this.onClipboardAfterPaste(pasteRange);
    this.select(pasteRange);
  }
  hasRow(row) {
    return row < this.getRowCount();
  }
  hasColumn(col) {
    return col < this.getColCount();
  }
  clearCells(range) {
    for (const cell of this._generator.getSelectionGenerator(range))
      this.onClearCellCheck(cell) && cell.clear();
  }
  setRowVisible(rowId, visible) {
    if (this._mergeManager.checkConflictingInRows(rowId, rowId))
      return false;
    if (visible === this.getRowVisible(rowId))
      return true;
    this.rowManager.setRowVisible(rowId, visible);
    this._debounceManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
    return true;
  }
  getRowVisible(row) {
    return this.rowManager.getRow(row).visible;
  }
  setColumnVisible(columnId, visible) {
    if (this._mergeManager.checkConflictingInColumns(columnId, columnId))
      return false;
    if (visible === this.getColumnVisible(columnId))
      return true;
    this.colManager.setColumnVisible(columnId, visible);
    this.rowManager.setColumnVisible(columnId, visible);
    this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection");
    if (columnId < this.colManager.freezedColumns)
      this._debounceManager.addTask("updateRowsStickyLeft");
    this._emitterController.emit("onColumnChanged", { left: columnId, right: columnId, type: "setVisible" });
    return true;
  }
  getColumnVisible(col) {
    return this.colManager.getColumn(col).visible;
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
  selectRow(row, activeCell = this.activeCell) {
    this.selectRows(row, row, activeCell);
  }
  selectRows(top, bottom, activeCell = this.activeCell) {
    if (top < this.headerRows)
      return;
    this.selectRange(top, this.headerColumns, bottom, this.getColCount() - 1, activeCell != null ? activeCell : this.cell(top, this.headerColumns));
  }
  freezeRows(freezingRowCount) {
    this.rowManager.freezeRows(freezingRowCount);
    this._debounceManager.addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId 고정할 열 id
   */
  freezeColumns(columnId) {
    this.freezeColumn(columnId + 1 - this.headerColumns);
    this._debounceManager.addTask("updateSelection");
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정함.
   * @param freezingColumnCount
   */
  freezeColumn(freezingColumnCount) {
    if (freezingColumnCount < 0)
      throw new Error("Could not be freezing minus columns!");
    else if (freezingColumnCount > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this.colManager.freezeColumns(freezingColumnCount);
    this._debounceManager.addTask("updateSelection").addTask("updateRowsStickyLeft");
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  setClipboardOptions(copyOptions) {
    Object.assign(this._copyOptions, copyOptions);
  }
  sort(compareFunc, order, startRowId, endRowId) {
    const start = Math.max(startRowId != null ? startRowId : this.headerRows, this.headerRows);
    const end = Math.min(endRowId != null ? endRowId : this.getRowCount(), this.getRowCount());
    this.rowManager.sort(compareFunc, order, start, end);
    this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(range) {
    for (const cell of this._generator.getSelectionGenerator(range)) {
      const mergedCellOrNull = cell.mergeInfo.rowSpan > 1 || cell.mergeInfo.colSpan > 1 ? cell : cell.mergeMain;
      if (mergedCellOrNull)
        this.splitCells(mergedCellOrNull.row, mergedCellOrNull.col);
    }
  }
  selectMultipleCellAddress(cellAddressList) {
    if (cellAddressList.length > 0)
      this.selectCell(cellAddressList[0][0], cellAddressList[0][1]);
  }
  selectMultipleCells(cells) {
    if (cells.length > 0)
      this.selectCell(cells[0].row, cells[0].col);
  }
  getSelectionMode() {
    return "range";
  }
  getSelectedCells() {
    const selection = this.getSelection();
    if (!selection)
      return [];
    return [this.cell(selection.top, selection.left)];
  }
  getSelectedMultipleCellAddress() {
    const selection = this.getSelection();
    if (!selection)
      return [];
    return [[selection.top, selection.left]];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   */
  isSelectedSingleCell() {
    const selection = this.getSelection();
    if (!selection)
      return false;
    const { top, left, bottom, right } = selection;
    if (top === bottom && left === right)
      return true;
    const cell = this.getRow(top).getCell(left);
    if (bottom === cell.bottom && right === cell.right)
      return true;
    return false;
  }
  render() {
    this.rowManager.renderRows();
  }
  /*
   * Object Events
   */
  onSelectCell(_cell) {
  }
  onActiveCellNull() {
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
  onClearCellCheck(cell) {
    return cell.canClear;
  }
  onColumnClick(cell) {
  }
  onRowClick(cell) {
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
  /**
   * false를 리턴하면 자동 생성되지 않음. 기본 값 true 리턴
   * @param _row 생성될 row 값
   * @returns
   */
  onAutoInsertRow(_row) {
    return true;
  }
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @returns
   */
  onAutoInsertColumn(_col) {
    return true;
  }
  onDoubleClickCell(cell) {
  }
  onDropOnCell(_row, _col, _ev) {
  }
  onDragStartCell(cell, ev) {
    if (!ev.dataTransfer || !cell.metaInfo.object)
      return false;
    ev.dataTransfer.setData("application/json", JSON.stringify(cell.metaInfo.object));
    return true;
  }
  onCheckPasteCell(cell, text) {
    return cell.visible && cell.onCheckReadonly() !== true && cell.metaInfo.disabled !== true && cell.metaInfo.clipboardEnabled !== false && this.onClipboardBeforePasteCell(cell, text);
  }
  onUndo(block) {
  }
  onRedo(block) {
  }
  onNativeCopy(ev) {
    if (!ev.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    const selection = this.getSelection();
    if (!selection)
      throw new Error("Detected copy without selection");
    const cellMatrix = this._gridRangeUtils.getCellMatrixByRange(selection);
    const cellMetaCopyMatrix = cellMatrix.map((row) => row.map((cell) => ({
      text: cell.text,
      cellVisible: cell.mergeMain === void 0,
      rowSpan: cell.mergeInfo.rowSpan,
      colSpan: cell.mergeInfo.colSpan,
      isFormatted: false
    })));
    setClipboardData(ev.clipboardData, cellMetaCopyMatrix);
    writeText(IR_GRID_WEAK_MAP_OBJ, JSON.stringify(cellMetaCopyMatrix));
    this.focus();
    this.onCopy();
    ev.preventDefault();
  }
  onNativeCut(ev) {
    const selection = this.getSelection();
    if (!selection)
      throw new Error("Detected copy without selection");
    this.onNativeCopy(ev);
    this.commandManager.doRecording("Cut", () => {
      this.clearCells(selection);
    });
    ev.preventDefault();
  }
  onNativePaste(ev) {
    if (!ev.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    const selection = this.getSelection();
    if (!selection)
      throw new Error("it needs selection to paste");
    const cellMetaInfoList = getCopyMetaInfoFromClipboard(ev.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(selection, cellMetaInfoList);
    });
    ev.preventDefault();
  }
  doEditMode(cell, data, clearData = false) {
    if (!cell.element.isConnected || !cell.editable)
      return false;
    const editor = new IRGridCellEditor(cell);
    editor.onEditDone = (cell2, isChanged, beforeText, endKeyCode, selStart, selEnd) => {
      this.onEditCellDone(cell2, isChanged, beforeText, endKeyCode, selStart, selEnd);
      this.focus();
      if (this._gridContext.gridModeState.value.mode === "edit-cell")
        this._gridContext.setIdle();
    };
    editor.onEditKeyDown = (ev, row, col, meta) => this.onEditKeyDown(ev, row, col, meta);
    editor.onMoveLeftOnEdit = () => this._cursorManager.selectNextSelection(0, -1, false);
    editor.onMoveUpOnEdit = () => this._cursorManager.selectNextSelection(-1, 0, false);
    editor.onMoveRightOnEdit = () => this._cursorManager.selectNextSelection(0, 1, false);
    editor.onMoveDownOnEdit = () => this._cursorManager.selectNextSelection(1, 0, false);
    editor.onTabOnEdit = (_16, shiftKey) => {
      if (shiftKey)
        this._cursorManager.selectBeforeActiveCell();
      else
        this._cursorManager.selectNextActiveCell();
    };
    editor.onEnterOnEdit = () => {
      const nextRow = this._cursorManager.getNextYBelow(cell.row, cell.col, 1);
      if (cell.row === nextRow)
        return;
      this.selectCell(nextRow, cell.col);
      this.doEditMode(this.cell(nextRow, cell.col));
    };
    try {
      this._gridContext.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell }
      });
      editor.runEditMode(data, clearData);
      return true;
    } catch (err) {
      console.error("IRGrid.doEditMode Error!", err);
      return false;
    }
  }
  onCopy() {
  }
  onContextMenu(_ev, _cell) {
  }
  onDragOverCell(_cell, _ev) {
    return true;
  }
  /*
   * Private Methods
   */
  scrollOnColTask(col) {
    const targetLeft = this.getColumnLeft(col);
    const targetRight = targetLeft + this.getColumnWidth(col);
    const { fixedColumnWidth, scrollRight, scrollLeft } = this;
    const fixedScrollLeft = scrollLeft + fixedColumnWidth;
    if (scrollRight < targetRight)
      this.contextElement.scrollLeft = scrollLeft + (targetRight - scrollRight);
    else if (fixedScrollLeft > targetLeft)
      this.contextElement.scrollLeft = targetLeft - fixedColumnWidth;
  }
  scrollOnRowTask(row) {
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
  onCheckCellReadonly(cell) {
    return this._readonly ? true : cell.metaInfo.readonly === true;
  }
  initPlugins(plugins) {
    try {
      for (const plugin of plugins) {
        plugin.mount({
          grid: this,
          table: this._tableElement,
          contextElement: this.contextElement,
          emitController: this._emitterController,
          wrapperElement: this._divWrapper,
          gridContext: this._gridContext
        });
        this._plugins.push(plugin);
      }
    } catch (err) {
      console.error("Plugin init error", err);
    }
  }
  initTableRowCol() {
    import_lodash15.default.range(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize));
    this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  initColumnHeaderCell(cell) {
    cell.cellType = "col-header";
    cell.onClick = () => {
      if (this.contextElement.classList.contains("is-resizing"))
        return;
      this.onColumnClick(cell);
    };
  }
  initRowHeaderCell(cell) {
    cell.cellType = "row-header";
    cell.onClick = () => {
      if (this.contextElement.classList.contains("is-resizing"))
        return;
      this.onRowClick(cell);
    };
  }
  initBodyCell(cell) {
    cell.cellType = "body-cell";
    cell.onClear = () => this.onClearCell(cell);
    cell.onDblClick = () => this.onDoubleClickCell(cell);
  }
  initGridCellPadding() {
    const { top, left, bottom, right } = this._gridStore.cellPadding;
    setElementVars(this.contextElement, {
      [gridCSS.gridVariants.cellTopPadding]: `${top}px`,
      [gridCSS.gridVariants.cellLeftPadding]: `${left}px`,
      [gridCSS.gridVariants.cellBottomPadding]: `${bottom}px`,
      [gridCSS.gridVariants.cellRightPadding]: `${right}px`
    });
  }
  getCellRenderer(cellType, row, col, metaInfo) {
    if (cellType === "col-header")
      return this._colHeaderInfo.cellRenderer;
    else if (cellType === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    else if (cellType === "body-cell")
      return this._bodyInfo.cellRenderer;
    else
      throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  getCellType(row, col) {
    const isColHeader = row < this.headerRows;
    const isRowHeader = !isColHeader && col < this.headerColumns;
    if (isColHeader)
      return "col-header";
    if (isRowHeader)
      return "row-header";
    return "body-cell";
  }
  getDefaultCellFormat(cellType, col) {
    const defaultMetaInfo = {
      emitter: this._emitterController.emitter,
      commandManager: this,
      getGridStore: () => this._gridStore
    };
    Object.assign(defaultMetaInfo, {
      ...this._defaultColumnCellFormat.all,
      ...this._defaultColumnCellFormat[col]
    });
    if (cellType === "col-header")
      Object.assign(defaultMetaInfo, this._defaultColumnCellFormat[`col_header_${col}`]);
    else if (cellType === "row-header")
      Object.assign(defaultMetaInfo, this._defaultColumnCellFormat[`row_header_${col}`]);
    else
      Object.assign(defaultMetaInfo, this._defaultColumnCellFormat[`body_${col}`]);
    return defaultMetaInfo;
  }
  createIRGridCell(row, col) {
    const cellType = this.getCellType(row, col);
    const tag = cellType.endsWith("header") ? "th" : "td";
    const metaInfo = this.getDefaultCellFormat(cellType, col);
    const cellRenderer = this.getCellRenderer(cellType, row, col, metaInfo);
    const cell = new IRGridCell({
      row,
      col,
      tag,
      cellRenderer,
      metaInfo
    });
    cell.onRightClick = (c, ev) => this.onCellRightClick(c, ev);
    cell.onCheckReadonly = () => this.onCheckCellReadonly(cell);
    if (cellType === "col-header")
      this.initColumnHeaderCell(cell);
    else if (cellType === "row-header")
      this.initRowHeaderCell(cell);
    else
      this.initBodyCell(cell);
    this.onCreatingCell(cell);
    return cell;
  }
  createIRGridRow(rowId, top, height) {
    const row = new IRGridRow({
      grid: this,
      rowId,
      height,
      top,
      rowType: rowId < this.headerRows ? "header" : "body"
    });
    import_lodash15.default.range(this.getColCount()).forEach((col) => row.addCell(this.createIRGridCell(rowId, col)));
    import_lodash15.default.range(this.getColCount()).filter((col) => this.getColumnVisible(col) === false).forEach((col) => row.setColumnVisible(col, false));
    row.onMounted = () => {
      row.freezeColumns(this._rowHeaderInfo.colCount);
      this.onMountedRow(row.rowId);
    };
    row.onChangedHeight = () => {
      import_lodash15.default.range(this.getColCount()).forEach((col) => {
        const cell = row.getCell(col);
        const mergeMain = cell.mergeMain ? cell.mergeMain : cell.mergeInfo.rowSpan > 1 ? cell : null;
        if (mergeMain)
          mergeMain.height = this._mergeManager.getMergedRowHeight(mergeMain.row, mergeMain.row + mergeMain.mergeInfo.rowSpan - 1);
      });
    };
    return row;
  }
};
__decorateClass([
  command()
], IRGrid.prototype, "splitCells", 1);
__decorateClass([
  command()
], IRGrid.prototype, "mergeCells", 1);
__decorateClass([
  command()
], IRGrid.prototype, "setColumnWidth", 1);
__decorateClass([
  command()
], IRGrid.prototype, "setRowHeight", 1);
__decorateClass([
  command()
], IRGrid.prototype, "setCell", 1);
__decorateClass([
  command()
], IRGrid.prototype, "addRow", 1);
__decorateClass([
  command()
], IRGrid.prototype, "removeRows", 1);
__decorateClass([
  command()
], IRGrid.prototype, "removeColumns", 1);
__decorateClass([
  command()
], IRGrid.prototype, "addColumn", 1);
__decorateClass([
  command()
], IRGrid.prototype, "insertRows", 1);
__decorateClass([
  command()
], IRGrid.prototype, "insertColumns", 1);
__decorateClass([
  command()
], IRGrid.prototype, "clearCells", 1);
__decorateClass([
  command()
], IRGrid.prototype, "setRowVisible", 1);
__decorateClass([
  command()
], IRGrid.prototype, "setColumnVisible", 1);

// src/js-components/grid/utility/sort-by-column.ts
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
    get enabledColumnClick() {
      return enabledColumnClick;
    },
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

// src/js-components/grid/utility/sort-utils.ts
var NUMBER_REGEXP = /^[0-9]*(\.[0-9]+)?$/;
var numberCheckDefault = (cell) => {
  if (cell.text === "")
    return true;
  return NUMBER_REGEXP.test(cell.text);
};
var numberComparator = (column) => {
  return (a, b) => {
    const aText = a.getCell(column).text;
    const bText = b.getCell(column).text;
    const aNumber = aText === "" ? Number.MIN_VALUE : parseFloat(aText);
    const bNumber = bText === "" ? Number.MIN_VALUE : parseFloat(bText);
    return aNumber < bNumber ? -1 : 1;
  };
};
var stringComparator = (column) => {
  return (a, b) => {
    return a.getCell(column).text < b.getCell(column).text ? -1 : 1;
  };
};
var createInferenceSortHandler = ({
  grid,
  onNumberCheck = numberCheckDefault
}) => {
  return {
    sortColumn(column, order, startRow, endRow) {
      const isStringColumn = (() => {
        for (let i = startRow; i < endRow; i++) {
          const cell = grid.getRow(i).getCell(column);
          if (onNumberCheck(cell))
            return false;
        }
        return true;
      })();
      if (!isStringColumn)
        grid.sort(numberComparator(column), order, startRow, endRow);
      else
        grid.sort(stringComparator(column), order, startRow, endRow);
    }
  };
};

// src/js-components/grid/utility/input-pattern.ts
var ALLOW_ONLY_CURRENCY_NUMBER_PATTERN = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/;
var ALLOW_ONLY_NUMBER_PATTERN = /^-?\d+(\.\d+)?$/;
export {
  ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  ALLOW_ONLY_NUMBER_PATTERN,
  CellDropPlugin,
  CellObserverPlugin,
  ColumnFillPlugin,
  DefaultKeyPlugin,
  IRGrid,
  IRGridButtonRenderer,
  IRGridCellDropPlugin,
  IRGridCellObserverPlugin,
  IRGridCellRenderer,
  IRGridCheckboxRenderer,
  IRGridColumnFillPlugin,
  IRGridDatePickerRenderer,
  IRGridDefaultCellIconButtonRenderer,
  IRGridDefaultCellRenderer,
  IRGridDefaultKeyPlugin,
  IRGridMouseCellSelectorPlugin,
  IRGridPopoverPlugin,
  IRGridProgressRenderer,
  IRGridRadioCellRenderer,
  IRGridResizerPlugin,
  IRGridRowColumnExchangePlugin,
  IRGridRowNoHeaderCellRenderer,
  IRGridRowSelectionPlugin,
  IRGridSelectCellRenderer,
  IRGridSingleCellDragPlugin,
  MouseCellSelectorPlugin,
  ResizerPlugin,
  RowSelectionPlugin,
  SingleCellDragPlugin,
  createCellContent,
  createCellContentWithIconButton,
  createCustomRenderer,
  createIRGridColumnSortManager,
  createInferenceSortHandler,
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
