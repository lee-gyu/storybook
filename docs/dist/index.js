import {
  IRCommandBlock,
  IRCommandManager,
  IRSelect,
  createDatePickerHandler,
  createDropdownDiv,
  createDropdownItem
} from "./chunks/chunk-QCVP6SVD.js";
import {
  i18n_default,
  require_dayjs_min
} from "./chunks/chunk-Q2C44MJO.js";
import {
  IRComponent
} from "./chunks/chunk-CXSYGCFU.js";
import {
  createHookFlow
} from "./chunks/chunk-EOV7BLLI.js";
import "./chunks/chunk-5P7UO6OH.js";
import {
  ClipboardManager,
  Palette,
  ReactiveState,
  addStyleXClass,
  appendElement,
  blobToStr,
  borderScroll,
  button,
  buttonPrimary,
  buttonSecondary,
  buttonTertiary,
  checkbox,
  checkboxInput,
  checkboxWrapper,
  closest,
  createClickOutsideHandler,
  createCustomIcon,
  createElement,
  createIconElement,
  createLoadingHandler,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  createTooltipContainer,
  forEachBySize,
  forEachFilterBySize,
  get2DGenerator,
  getElement,
  getIRIconPng,
  getMinMaxBetween,
  getTextWidthContext,
  getTooltipElements,
  hasClass,
  input,
  inputNative,
  inputPrefix,
  inputSuffix,
  parseInt as parseInt2,
  removeAllChildren,
  removeStyleXClass,
  removeStyleXToken,
  require_lib,
  setDataSetFlag,
  setStyleXToken,
  uuid,
  xss_default,
  z_index_classNames_default
} from "./chunks/chunk-6IBVOU7E.js";
import {
  createImageFromSrcUrl,
  createObjectURLFromSvg,
  downloadDataURL,
  getBase64FromSvg,
  getImageBlobFromImage
} from "./chunks/chunk-B5H3PAHZ.js";
import {
  Logger
} from "./chunks/chunk-A735ODE2.js";
import "./chunks/chunk-BEP2YSTU.js";
import {
  clearGlobalKeyListener,
  createESCHideController,
  createFloatingHandler,
  createPopover,
  getLayerElement,
  getThemeStore,
  getThemeStoreValue,
  getVirtualEl,
  offsetBottomAutoUpdate,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener
} from "./chunks/chunk-YY6MAG5N.js";
import "./chunks/chunk-576AFCMI.js";
import {
  __toESM
} from "./chunks/chunk-F6QKJDR3.js";

// src/js-components/virtual-dom/viewport-row.ts
var IRViewportRow = class {
  constructor({
    rowId,
    top,
    height,
    defaultHeight,
    object
  }) {
    this._isFreezed = false;
    this._cachedElement = null;
    this._templateHelperObj = null;
    this._rowId = rowId;
    this._top = top;
    this._height = height;
    this._object = object != null ? object : null;
    this._visible = true;
    this._defaultHeight = defaultHeight;
  }
  get object() {
    return this._object;
  }
  get height() {
    return this._height;
  }
  get top() {
    return this._top;
  }
  get visible() {
    return this._visible;
  }
  get bottom() {
    if (this._visible === false)
      return this.top;
    return this._top + this._height;
  }
  get template() {
    if (!this._templateHelperObj)
      throw new Error("Template helper object is not set");
    return this._templateHelperObj;
  }
  setTemplateHelper(template) {
    this._templateHelperObj = template;
  }
  updateObject(obj) {
    const oldObj = this._object;
    this._object = obj;
    this.onUpdatedObject(this, oldObj, obj);
  }
  updateRowStyles() {
    if (!this.isCachedElement)
      return;
    const element = this.getRowElement();
    if (this._visible)
      element.classList.remove("ir-vd-container__viewport-row--hidden");
    else
      element.classList.add("ir-vd-container__viewport-row--hidden");
    if (this._defaultHeight !== this._height)
      element.style.setProperty("--ir-vd-default-row-height", `${this._height}px`);
    else
      element.style.removeProperty("--ir-vd-default-row-height");
  }
  setVisible(visible) {
    this._visible = visible;
    this.updateRowStyles();
  }
  setHeight(height) {
    this._height = height;
    this.updateRowStyles();
  }
  createRowElement() {
    const div = document.createElement("div");
    this._cachedElement = div;
    div.classList.add("ir-vd-container__viewport-row");
    this.updateRowIdTopAttr();
    this.updateRowStyles();
    return div;
  }
  // 화면에 mount 될 때 호출
  onMounted(row, rowElement) {
  }
  onUpdatedObject(row, oldObj, newObj) {
  }
  /**
   * Cache 되지 않은 요소가 생성될 때 호출 함
   * @param element 신규 생성된 row 요소
   */
  onCreatedElement(row, element) {
  }
  getRowElement() {
    if (this._cachedElement)
      return this._cachedElement;
    const element = this.createRowElement();
    this.onCreatedElement(this, element);
    this.updateFreezedStatus();
    return element;
  }
  updateFreezedStatus() {
    if (!this.isCachedElement)
      return;
    if (this._isFreezed)
      this.getRowElement().dataset.isFreezed = "true";
    else
      delete this.getRowElement().dataset.isFreezed;
  }
  remove() {
    if (this.isCachedElement)
      this.getRowElement().remove();
  }
  freeze() {
    if (this._isFreezed)
      return;
    this._isFreezed = true;
    this.updateFreezedStatus();
  }
  unfreeze() {
    if (!this._isFreezed)
      return;
    this._isFreezed = false;
    this.updateFreezedStatus();
  }
  updateRowIdTopAttr() {
    if (!this.isCachedElement)
      return;
    const element = this.getRowElement();
    element.dataset.rowId = `${this._rowId}`;
    element.style.setProperty("--ir-vd-row-top", `${this._top}px`);
  }
  setRowIdAndTop(rowId, top) {
    this._rowId = rowId;
    this._top = top;
    this.updateRowIdTopAttr();
  }
  get isFreezed() {
    return this._isFreezed;
  }
  get isCachedElement() {
    return this._cachedElement !== null;
  }
  get rowId() {
    return this._rowId;
  }
  get isConnectedInDOM() {
    return this.isCachedElement && this.getRowElement().isConnected;
  }
};

// src/js-components/virtual-dom/viewport-manager.ts
var IRViewportItemManager = class {
  constructor(args) {
    this.args = args;
    this._rows = [];
    this._visibleRowList = [];
    this._totalHeight = 0;
    this._totalWidth = 0;
    this._freezedHeight = 0;
    this._headerRowsCount = 0;
    this._hiddenHeaderRowsCount = 0;
    this._debounceContext = {
      rafHandler: -1,
      taskSet: /* @__PURE__ */ new Set(),
      startRowId: Number.MAX_VALUE
    };
  }
  scheduleTasks(...tasks) {
    if (this._debounceContext.rafHandler > -1)
      cancelAnimationFrame(this._debounceContext.rafHandler);
    tasks.forEach((task) => this._debounceContext.taskSet.add(task));
    requestAnimationFrame(() => this.doTasks());
  }
  doTasks() {
    const {
      taskSet
    } = this._debounceContext;
    try {
      if (taskSet.has("update-row-info"))
        this.updateRowInfo();
    } finally {
      this._debounceContext.taskSet.clear();
      this._debounceContext.rafHandler = -1;
      this._debounceContext.startRowId = Number.MAX_VALUE;
    }
  }
  updateRowInfo() {
    var _a;
    if (this._debounceContext.startRowId === -1)
      throw new Error(`startRowId is not set`);
    const {
      startRowId
    } = this._debounceContext;
    for (let index = startRowId; index < this.rowCount; ++index) {
      const prevRow = this._rows[index - 1];
      const curRow = this._rows[index];
      curRow.setRowIdAndTop(index, (_a = prevRow == null ? void 0 : prevRow.bottom) != null ? _a : 0);
    }
  }
  /**
   * startRowId부터 rowId와 top 모두 갱신
   */
  scheduleUpdateRowInfo(startRowId) {
    this._debounceContext.startRowId = Math.min(startRowId, this._debounceContext.startRowId);
    this.scheduleTasks("update-row-info");
  }
  createRowsFragment(start, end) {
    const fragment = document.createDocumentFragment();
    for (let i = start; i <= end; i++) {
      const row = this._rows[i];
      row.visible && fragment.appendChild(row.getRowElement());
    }
    return fragment;
  }
  getRowByElement(rowElement) {
    const rowId = rowElement.dataset.rowId;
    if (!rowId)
      throw new Error(`rowId not found in rowElement`);
    return this.getRowById(+rowId);
  }
  getRowByTop(top) {
    let start = 0;
    let end = this._visibleRowList.length - 1;
    while (start <= end) {
      const middleId = Math.floor((start + end) / 2);
      const row = this._visibleRowList[middleId];
      if (top >= row.top && top <= row.bottom)
        return row;
      if (top < row.top)
        end = middleId - 1;
      else
        start = middleId + 1;
    }
    return null;
  }
  getRowById(rowId) {
    const row = this._rows[rowId];
    if (!row)
      throw new Error(`rowId ${rowId} not found`);
    return row;
  }
  getRowByIdOrNull(rowId) {
    var _a;
    return (_a = this._rows[rowId]) != null ? _a : null;
  }
  removeRows(startRowId, endRowId) {
    if (startRowId < this._headerRowsCount || endRowId >= this.rowCount)
      throw new Error(`removing row id must be in between headerRow and rowCount`);
    for (let rowId = startRowId; rowId <= endRowId; rowId++) {
      const row = this._rows[rowId];
      row.remove();
      this._totalHeight -= row.height;
    }
    this._rows.splice(startRowId, endRowId - startRowId + 1);
    this.updateVisibleRowList();
    this.scheduleUpdateRowInfo(startRowId);
  }
  clearRows() {
    for (let i = this._headerRowsCount; i < this.rowCount; i++) {
      const row = this._rows[i];
      if (row.isConnectedInDOM)
        row.remove();
    }
    this._rows.length = this._headerRowsCount;
    this._visibleRowList.length = this._headerRowsCount;
    this._totalHeight = this._freezedHeight;
  }
  addRow(height, defaultHeight, object) {
    const rowObj = new IRViewportRow({
      rowId: this._rows.length,
      height,
      top: this._totalHeight,
      defaultHeight,
      object
    });
    this._rows.push(rowObj);
    this._visibleRowList.push(rowObj);
    this._totalHeight += height;
    return rowObj;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(rowId, height, defaultHeight, object) {
    if (rowId < this._headerRowsCount || rowId > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const row = this._rows[rowId];
    const rowObj = new IRViewportRow({
      rowId,
      height,
      defaultHeight,
      // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
      top: row ? row.top : this._totalHeight,
      object
    });
    this._rows.splice(rowId, 0, rowObj);
    this._totalHeight += height;
    this.scheduleUpdateRowInfo(rowId + 1);
    this.updateVisibleRowList();
    return rowObj;
  }
  updateVisibleRowList() {
    this._visibleRowList = this._rows.filter((row) => row.visible);
  }
  setRowHeight(rowId, height) {
    const row = this.getRowById(rowId);
    const prevHeight = row.height;
    row.setHeight(height);
    if (row.visible) {
      this._totalHeight += height - prevHeight;
      if (row.isFreezed)
        this._freezedHeight += height - prevHeight;
    }
    this.scheduleUpdateRowInfo(rowId);
  }
  setRowVisible(rowId, visible) {
    const row = this.getRowById(rowId);
    if (row.visible === visible)
      return;
    const sign = visible ? 1 : -1;
    const height = row.height * sign;
    row.setVisible(visible);
    this.updateVisibleRowList();
    this._totalHeight += height;
    if (rowId < this._headerRowsCount) {
      this._freezedHeight += height;
      this._hiddenHeaderRowsCount += sign;
    }
    if (!row.visible)
      row.remove();
    this.scheduleUpdateRowInfo(rowId);
  }
  freezeRows(freezeRowsCount) {
    if (freezeRowsCount < 0)
      throw new Error(`freezeRowsCount must be a positive number`);
    else if (freezeRowsCount > this.rowCount)
      throw new Error(`freezeRowsCount must be less than the total number of rows`);
    this._freezedHeight = 0;
    for (let i = 0; i < this._headerRowsCount; i++)
      this._rows[i].unfreeze();
    for (let i = 0; i < freezeRowsCount; i++) {
      this._freezedHeight += this._rows[i].height;
      this._rows[i].freeze();
    }
    this._headerRowsCount = freezeRowsCount;
  }
  *getRowIter() {
    yield* this._rows;
  }
  get totalHeight() {
    return this._totalHeight;
  }
  get totalWidth() {
    return this._totalWidth;
  }
  get freezedHeight() {
    return this._freezedHeight;
  }
  get firstRow() {
    if (this.rowCount === 0)
      throw new Error("no rows");
    return this._rows[0];
  }
  get lastRow() {
    if (this.rowCount === 0)
      throw new Error("no rows");
    return this._rows[this._rows.length - 1];
  }
  get rowCount() {
    return this._rows.length;
  }
  get visibleRowCount() {
    return this._visibleRowList.length;
  }
  get headerRowsCount() {
    return this._headerRowsCount;
  }
  get visibleHeaderRowsCount() {
    return this._headerRowsCount + this._hiddenHeaderRowsCount;
  }
};

// src/js-components/virtual-dom/index.ts
function createViewportElements() {
  const viewport = document.createElement("div");
  const freezedViewport = document.createElement("div");
  freezedViewport.className = "ir-vd-container__viewport ir-vd-container__viewport--freezed";
  viewport.className = "ir-vd-container__viewport";
  return {
    viewport,
    freezedViewport
  };
}
var DEFAULT_ROW_HEIGHT = 28;
var HEIGHT_DETECT_GAP = 40;
var IRVirtualDOM = class extends IRComponent {
  constructor(args) {
    var _a, _b;
    super(args);
    this.args = args;
    this._debounceContext = {
      rAFHandler: -1,
      startRowId: -1,
      scrollRow: -1,
      registeredTasks: /* @__PURE__ */ new Set(),
      afterRenderTasks: []
    };
    this.contextElement.classList.add("ir-vd-container");
    this._viewportElements = createViewportElements();
    this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    );
    this._itemManager = new IRViewportItemManager({
      headerRowCount: (_a = args.headerRowCount) != null ? _a : 0
    });
    this.resizeObserver = new ResizeObserver(() => {
      this.scheduleTasks("update-viewport");
    });
    if (args.onMountedRow)
      this.onMountedRow = args.onMountedRow;
    if (args.onCreatedRowElement)
      this.onCreatedRowElement = args.onCreatedRowElement;
    if (args.onUpdatedRowObject)
      this.onUpdatedRowObject = args.onUpdatedRowObject;
    this._defaultRowHeight = (_b = args.defaultRowHeight) != null ? _b : DEFAULT_ROW_HEIGHT;
    this.contextElement.style.setProperty("--ir-vd-default-row-height", `${this._defaultRowHeight}px`);
    this.resizeObserver.observe(this.contextElement);
    this.initScrollEvent();
    this.initRowCol();
  }
  initScrollEvent() {
    this.addGlobalEventListener(this.contextElement, "scroll", (_ev) => {
      this.scheduleTasks("update-viewport");
    });
  }
  initRowCol() {
    for (let i = 0; i < this.args.rowCount; i++)
      this.addRow();
    if (this.args.headerRowCount) {
      this._itemManager.freezeRows(this.args.headerRowCount);
      this.updateFreezedViewport();
    }
    this.scheduleTasks("update-container-size", "update-viewport");
  }
  updateContainerSize() {
    const {
      freezedViewport,
      viewport
    } = this._viewportElements;
    const {
      freezedHeight,
      totalHeight
    } = this._itemManager;
    freezedViewport.style.setProperty("--ir-vd-container-row-height", `${String(freezedHeight)}px`);
    viewport.style.setProperty("--ir-vd-container-row-height", `${String(totalHeight)}px`);
  }
  _scrollToRow(rowId) {
    const row = this._itemManager.getRowById(rowId);
    this.contextElement.scrollTo({ top: row.top - this._itemManager.freezedHeight });
  }
  doTasks() {
    const { registeredTasks, afterRenderTasks } = this._debounceContext;
    try {
      if (registeredTasks.has("update-container-size"))
        this.updateContainerSize();
      if (registeredTasks.has("update-viewport"))
        this.updateViewport();
      afterRenderTasks.forEach((task) => task());
    } finally {
      registeredTasks.clear();
      afterRenderTasks.length = 0;
      this._debounceContext.rAFHandler = -1;
      this._debounceContext.startRowId = -1;
      this._debounceContext.scrollRow = -1;
    }
  }
  scheduleTasks(...tasks) {
    for (const task of tasks)
      this._debounceContext.registeredTasks.add(task);
    if (this._debounceContext.rAFHandler === -1)
      this._debounceContext.rAFHandler = requestAnimationFrame(this.doTasks.bind(this));
  }
  unmountNotInViewport(viewportStartRow, viewportEndRow) {
    let curElement = this._viewportElements.viewport.firstElementChild;
    while (curElement) {
      const row = this._itemManager.getRowByElement(curElement);
      curElement = curElement.nextElementSibling;
      if (row && (row.rowId < viewportStartRow || row.rowId > viewportEndRow) && row.isConnectedInDOM)
        row.remove();
    }
  }
  clearFreezedViewport() {
    const { freezedViewport } = this._viewportElements;
    let curElement = freezedViewport.firstElementChild;
    while (curElement) {
      const row = this._itemManager.getRowByElement(curElement);
      curElement = curElement.nextElementSibling;
      row.remove();
    }
  }
  updateFreezedViewport() {
    this.clearFreezedViewport();
    const { freezedViewport } = this._viewportElements;
    const frag = this._itemManager.createRowsFragment(0, this._itemManager.headerRowsCount - 1);
    freezedViewport.append(frag);
  }
  // 현재 scroll에 맞는 요소 viewport 업데이트
  mountViewportRows() {
    var _a;
    if (this._itemManager.rowCount === 0)
      return;
    const top = Math.max(0, this.contextElement.scrollTop - HEIGHT_DETECT_GAP, this._itemManager.freezedHeight + 1);
    const bottom = top + this.contextElement.clientHeight + HEIGHT_DETECT_GAP + this._defaultRowHeight;
    const startRow = this._itemManager.getRowByTop(top);
    const endRow = (_a = this._itemManager.getRowByTop(bottom)) != null ? _a : this._itemManager.lastRow;
    if (!startRow)
      return;
    this.unmountNotInViewport(startRow.rowId, endRow.rowId);
    const { viewport } = this._viewportElements;
    if (viewport.childElementCount === 0) {
      viewport.append(this._itemManager.createRowsFragment(startRow.rowId, endRow.rowId));
      return;
    }
    let beforeRow = null;
    for (let rowId = startRow.rowId; rowId <= endRow.rowId; ++rowId) {
      const row = this._itemManager.getRowById(rowId);
      if (!row.visible)
        continue;
      if (!row.isConnectedInDOM) {
        if (!beforeRow)
          viewport.prepend(row.getRowElement());
        else
          beforeRow.getRowElement().after(row.getRowElement());
      }
      beforeRow = row;
    }
  }
  updateViewport() {
    this.mountViewportRows();
    this.generateScrollBarClass();
  }
  scrollToRow(rowId) {
    if (this._debounceContext.registeredTasks.has("update-container-size"))
      this.afterRender(() => this._scrollToRow(rowId));
    else
      this._scrollToRow(rowId);
  }
  getRowCount() {
    return this._itemManager.rowCount;
  }
  getRowById(rowId) {
    return this._itemManager.getRowById(rowId);
  }
  bindEventsToRow(rowObj) {
    rowObj.onMounted = (row, rowEle) => this.onMountedRow(row, rowEle);
    rowObj.onCreatedElement = (row, rowEle) => this.onCreatedRowElement(row, rowEle);
    rowObj.onUpdatedObject = (row, oldObj, newObj) => this.onUpdatedRowObject(row, oldObj, newObj);
  }
  insertRow(insertingRowId, height, object) {
    const rowObj = this._itemManager.insertRow(insertingRowId, height != null ? height : this._defaultRowHeight, this._defaultRowHeight, object);
    this.bindEventsToRow(rowObj);
    this.scheduleTasks("update-container-size", "update-viewport");
    return rowObj;
  }
  *getRowIter() {
    yield* this._itemManager.getRowIter();
  }
  getRowVisible(rowId) {
    return this._itemManager.getRowById(rowId).visible;
  }
  addRow(height, object) {
    const rowObj = this._itemManager.addRow(height != null ? height : this._defaultRowHeight, this._defaultRowHeight, object);
    this.bindEventsToRow(rowObj);
    this.scheduleTasks("update-container-size", "update-viewport");
    return rowObj;
  }
  removeRow(rowId) {
    this.removeRows(rowId, rowId);
  }
  removeRows(startRowId, endRowId) {
    this._itemManager.removeRows(startRowId, endRowId);
    this.scheduleTasks("update-container-size", "update-viewport");
  }
  setRowVisible(rowId, visible) {
    this._itemManager.setRowVisible(rowId, visible);
    if (visible && rowId < this._itemManager.headerRowsCount) {
      const { freezedViewport } = this._viewportElements;
      freezedViewport.append(this._itemManager.getRowById(rowId).getRowElement());
    }
    this.scheduleTasks("update-container-size", "update-viewport");
  }
  forceLayout() {
    this.doTasks();
  }
  setRowHeight(rowId, height) {
    this._itemManager.setRowHeight(rowId, height);
    this.scheduleTasks("update-container-size", "update-viewport");
  }
  /**
   * 고정 행을 제외한 모든 행을 제거 합니다.
   */
  clearRows() {
    this._itemManager.clearRows();
    this.scheduleTasks("update-container-size", "update-viewport");
  }
  onMountedRow(row, rowElement) {
  }
  onUpdatedRowObject(row, oldObj, newObj) {
  }
  onCreatedRowElement(row, rowElement) {
  }
  afterRender(task) {
    this._debounceContext.afterRenderTasks.push(task);
    this.scheduleTasks();
  }
};

// src/js-components/tree/keyboard-interaction.ts
function visibleTreeList(treeList) {
  const rootList = treeList.filter((node) => !node.parentItem);
  const stack = [{ list: rootList, index: 0 }];
  const visibleList = [];
  if (treeList.length === 0)
    return visibleList;
  while (stack.length) {
    const peek = stack[stack.length - 1];
    const { index, list } = peek;
    const nodeData = list[index];
    const { items, isDisabled } = nodeData;
    if (!isDisabled)
      visibleList.push(nodeData);
    ++peek.index;
    if (peek.index === list.length)
      stack.pop();
    if (nodeData.expanded && items.length > 0) {
      stack.push({
        index: 0,
        list: items
      });
    }
  }
  return visibleList;
}
function initIRTreeKeyboardInteraction(tree2, element) {
  let focusItem = null;
  let treeList = [];
  let isScheduledUpdate = false;
  const keyEventMap = {
    "ArrowUp": arrowUpHandler,
    "ArrowDown": arrowDownHandler,
    "ArrowLeft": arrowLeftHandler,
    "ArrowRight": arrowRightHandler,
    " ": spaceBarHandler
  };
  tree2.addGlobalEventListener(element, "focus", () => {
    focusItem && setFocusNode(focusItem);
  });
  tree2.addGlobalEventListener(element, "blur", () => {
    releaseFocusClass();
  });
  tree2.addGlobalEventListener(element, "keydown", (ev) => {
    if (!keyEventMap[ev.key])
      return;
    keyEventMap[ev.key]();
    ev.preventDefault();
  });
  return {
    updateTreeVisibleInfo,
    setFocusNode
  };
  function updateTreeVisibleInfo() {
    isScheduledUpdate = true;
  }
  function getScheduledTreeList() {
    if (isScheduledUpdate) {
      treeList = visibleTreeList(tree2.getOrderedNodes());
      isScheduledUpdate = false;
    }
    return treeList;
  }
  function arrowUpHandler() {
    const focusNode = focusItem;
    const treeList2 = getScheduledTreeList();
    if (focusNode === null) {
      setFocusNode(treeList2[0]);
      return;
    }
    const findIndex = treeList2.findIndex((node) => node.uuid === focusNode.uuid);
    const prevNode = treeList2[findIndex - 1];
    if (prevNode)
      setFocusNode(prevNode);
  }
  function arrowDownHandler() {
    const focusNode = focusItem;
    const treeList2 = getScheduledTreeList();
    if (focusNode === null) {
      setFocusNode(treeList2[0]);
      return;
    }
    const findIndex = treeList2.findIndex((node) => node.uuid === focusNode.uuid);
    const nextNode = treeList2[findIndex + 1];
    if (nextNode)
      setFocusNode(nextNode);
  }
  function arrowRightHandler() {
    if (focusItem === null)
      return;
    if (focusItem.items.length === 0)
      return;
    if (focusItem.expanded && !focusItem.items[0].isDisabled)
      setFocusNode(focusItem.items[0]);
    else
      focusItem.expand();
  }
  function arrowLeftHandler() {
    if (focusItem == null)
      return;
    if (focusItem.expanded)
      focusItem.collapse();
    else if (focusItem.parentItem)
      setFocusNode(focusItem.parentItem);
  }
  function spaceBarHandler() {
    if (focusItem)
      focusItem.select();
  }
  function setFocusNode(node, scroll = true) {
    releaseFocusClass();
    focusItem = node;
    focusItem.liTreeItem.classList.add("is-focus");
    scroll && node.scrollIntoView();
  }
  function releaseFocusClass() {
    if (!focusItem)
      return;
    focusItem.liTreeItem.classList.remove("is-focus");
  }
}

// src/js-components/tree/tree.classNames.ts
var block = "tree";
var tree_classNames_default = {
  tree: {
    "&": block
  },
  treeList: {
    "&": `${block}__list`
  },
  treeListRoot: {
    "&": `${block}__list--root`
  },
  treeLabel: {
    "&": `${block}__label`
  },
  treeLabelText: {
    "&": `${block}__label-text`
  },
  treeItem: {
    "&": `${block}__item`,
    parent: `${block}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${block}__item-content`
  },
  treeIconFolder: {
    "&": `${block}__icon-folder`
  },
  treeIconExpand: {
    "&": `${block}__icon-expand`
  }
};

// src/js-components/tree/renderer/default.ts
var renderDefaultTreeNode = (_node) => {
  const content = document.createElement("div");
  const iconFolder = document.createElement("i");
  const span = document.createElement("span");
  content.className = tree_classNames_default.treeLabel["&"];
  span.className = tree_classNames_default.treeLabelText["&"];
  return {
    get template() {
      return content;
    },
    update: (node) => {
      if (node.iconClass) {
        if (!iconFolder.isConnected)
          span.insertAdjacentElement("beforebegin", iconFolder);
        iconFolder.className = `${tree_classNames_default.treeIconFolder["&"]} ir-icon ${node.iconClass}`;
        if (node.iconColor)
          iconFolder.style.setProperty("--ir-icon-foreground-color", node.iconColor);
        else
          iconFolder.style.removeProperty("--ir-icon-foreground-color");
      } else
        iconFolder.remove();
      if (node.caption) {
        content.appendChild(span);
        span.innerText = node.caption;
      } else
        span.remove();
    }
  };
};

// src/js-components/tree/treeNode.ts
var statusIcon = "ir-icon--triangle-small-right";
var IRTreeNode = class {
  constructor({
    parentItem,
    icon,
    caption,
    data,
    level,
    uuid: uuid2,
    defaultChecked = false,
    renderer = renderDefaultTreeNode,
    disabled = false,
    draggable
  }) {
    this.children = [];
    this._parentItem = parentItem;
    this.data = data;
    this._level = level;
    this._iconClass = icon;
    this._caption = caption;
    this._template = renderer(this);
    this._checked = defaultChecked;
    this._subChecked = defaultChecked;
    this._disabled = disabled;
    this._uuid = uuid2;
    this.liTreeItem = document.createElement("li");
    this.liTreeItem.classList.add(tree_classNames_default.treeItem["&"]);
    this.liTreeItem.dataset.uuid = this._uuid;
    this.divTreeItemContent = appendElement(this.liTreeItem, "div", tree_classNames_default.treeItemContent["&"]);
    this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString());
    this.ulTreeList = document.createElement("ul");
    this.ulTreeList.classList.add(tree_classNames_default.treeList["&"]);
    this.iconExpand = appendElement(this.divTreeItemContent, "i", tree_classNames_default.treeIconExpand["&"], "ir-icon", statusIcon);
    this.divTreeItemContent.appendChild(this._template.template);
    this.divTreeItemContent.addEventListener("dragstart", (ev) => this.onDragStart(ev));
    this.divTreeItemContent.addEventListener("dragenter", (ev) => this.onDragOver(ev) && this.divTreeItemContent.classList.add("is-dragging"));
    this.divTreeItemContent.addEventListener("dragover", (ev) => this.onDragOver(ev) && ev.preventDefault());
    this.divTreeItemContent.addEventListener("dragend", (ev) => this.onDragEnd(ev));
    this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging());
    this.divTreeItemContent.addEventListener("drop", (ev) => {
      try {
        this.onDrop(ev);
      } finally {
        this.clearDragging();
      }
    });
    if (draggable) {
      this.divTreeItemContent.setAttribute("draggable", "true");
    }
  }
  get items() {
    return [...this.children];
  }
  get parentItem() {
    return this._parentItem;
  }
  get count() {
    return this.children.length;
  }
  get uuid() {
    return this._uuid;
  }
  get subChecked() {
    return this._subChecked;
  }
  get order() {
    if (!this.liTreeItem.parentElement)
      return -1;
    return Array.prototype.indexOf.call(this.liTreeItem.parentElement.children, this.liTreeItem);
  }
  get level() {
    return this._level;
  }
  set level(level) {
    this._level = level;
    this.divTreeItemContent.style.setProperty("--ir-tree-node-level", level.toString());
  }
  get caption() {
    return this._caption;
  }
  get isDisabled() {
    return this._disabled;
  }
  get iconClass() {
    return this._iconClass;
  }
  get hasChildren() {
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((item) => item.checked || item.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(node) {
    if (node === this._parentItem)
      return;
    const oldParent = this._parentItem;
    const newParent = node;
    if (oldParent)
      oldParent.removeChildNode(this);
    if (newParent)
      newParent.addNode(this);
    this._parentItem = newParent;
  }
  set caption(text) {
    this._caption = text;
    this.render();
  }
  set disabled(nextDisabled) {
    if (this._disabled === nextDisabled)
      return;
    this._disabled = nextDisabled;
    if (this._disabled)
      this.liTreeItem.classList.add("is-disabled");
    else
      this.liTreeItem.classList.remove("is-disabled");
  }
  set checked(checked) {
    this._checked = checked;
    this.render();
  }
  set iconClass(iconClass) {
    this._iconClass = iconClass;
    this.render();
  }
  set iconColor(color) {
    this._iconColor = color;
    this.render();
  }
  set hasChildren(value) {
    if (value)
      this.liTreeItem.classList.add(tree_classNames_default.treeItem.parent);
    else
      this.liTreeItem.classList.remove(tree_classNames_default.treeItem.parent);
  }
  removeItems() {
    [...this.children].forEach((node) => node.delete());
  }
  addNode(node) {
    this.children.push(node);
    if (!this.hasChildren)
      this.hasChildren = true;
  }
  getTreeNodeKey() {
    const key = [this.order];
    let curNode = this.parentItem;
    while (curNode) {
      key.push(curNode.order);
      curNode = curNode.parentItem;
    }
    return key.reverse();
  }
  updateCheckedWithPropagation(checked) {
    this.checked = checked;
    this.children.forEach((node) => node.updateCheckedWithPropagation(checked));
  }
  updateCheckedStatus() {
    var _a;
    this.checked = this.children.every((node) => node.checked);
    (_a = this.parentItem) == null ? void 0 : _a.updateCheckedStatus();
  }
  updateSubCheckedStatus() {
    this._subChecked = this.hasCheckedChildren;
  }
  delete() {
    this.liTreeItem.remove();
    this.emitDeleteRecursive();
    if (this._parentItem)
      this._parentItem.removeChildNode(this);
  }
  collapse() {
    if (!this.hasChildren)
      return;
    if (this.expanded) {
      if (this.onCollapsing(this)) {
        this.liTreeItem.classList.remove(tree_classNames_default.treeItem["is-expanded"]);
        this.ulTreeList.remove();
        this.onCollapse(this);
      }
    }
  }
  scrollIntoView(args = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(args);
  }
  expand() {
    if (!this.hasChildren)
      return;
    if (!this.expanded) {
      if (this.onExpanding(this)) {
        this.liTreeItem.classList.add(tree_classNames_default.treeItem["is-expanded"]);
        this.liTreeItem.appendChild(this.ulTreeList);
        this.onExpand(this);
      }
    }
  }
  toggle() {
    if (this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-expanded"]))
      this.collapse();
    else
      this.expand();
  }
  select() {
    if (!this.selected) {
      this.liTreeItem.classList.add(tree_classNames_default.treeItem["is-selected"]);
      this.onSelect(this);
    }
  }
  release() {
    if (this.selected) {
      this.liTreeItem.classList.remove(tree_classNames_default.treeItem["is-selected"]);
      this.onRelease(this);
    }
  }
  render() {
    this._template.update(this);
    this.onRender(this._template.template);
  }
  /**
   * Drag Event
   */
  onDragStart(_ev) {
  }
  onDrop(_ev) {
  }
  onDragEnd(_ev) {
  }
  onDragOver(_ev) {
    return false;
  }
  /**
   * Object Events
   */
  onSelect(_node) {
  }
  onRelease(_node) {
  }
  onRemove(_node) {
  }
  onExpanding(_node) {
    return true;
  }
  onExpand(_node) {
  }
  onRender(_element) {
  }
  onCollapsing(_node) {
    return true;
  }
  onCollapse(_node) {
  }
  /**
   * 현재 자식 배열에서 해당 node 제거
   */
  removeChildNode(node) {
    const id = this.children.indexOf(node);
    if (id === -1)
      throw new Error("there is not the node");
    this.children.splice(id, 1);
    if (this.children.length === 0) {
      this.hasChildren = false;
      this.collapse();
    }
  }
  emitDeleteRecursive() {
    this.children.forEach((node) => node.emitDeleteRecursive());
    this.onRemove(this);
  }
  clearDragging() {
    this.divTreeItemContent.classList.remove("is-dragging");
  }
};

// src/js-components/tree/tree.ts
var IRTree = class extends IRComponent {
  constructor({
    contextElement,
    renderer = renderDefaultTreeNode,
    nodeDraggable = true,
    enabledKeyboard = true
  }) {
    super({ contextElement });
    this._nodeMap = /* @__PURE__ */ new Map();
    this.nodes = [];
    this.selectedNode = null;
    this.renderer = renderer;
    this._nodeDraggable = nodeDraggable;
    contextElement.classList.add(tree_classNames_default.tree["&"]);
    contextElement.setAttribute("tabindex", "0");
    contextElement.setAttribute("role", "tree");
    if (enabledKeyboard)
      this._keyboardInteraction = initIRTreeKeyboardInteraction(this, contextElement);
    if (nodeDraggable === false)
      contextElement.setAttribute("draggable", "false");
    this.rootElement = appendElement(contextElement, "ul", tree_classNames_default.treeList["&"], tree_classNames_default.treeListRoot["&"]);
    this.addCoreElement(this.rootElement);
    this.addGlobalEventListener(contextElement, "contextmenu", (ev) => {
      ev.preventDefault();
      if (!(ev.target instanceof HTMLElement))
        return;
      this.onContextMenu(ev);
      const el = ev.target.closest(`.${tree_classNames_default.treeItem["&"]}`);
      if (el)
        this.selectNodeByUUID(el.dataset.uuid);
    });
  }
  get items() {
    return [...this.nodes];
  }
  get selected() {
    return this.selectedNode;
  }
  get nodeDraggable() {
    return this._nodeDraggable;
  }
  set selected(node) {
    var _a, _b;
    if (this.selected === node)
      return;
    (_a = this.selectedNode) == null ? void 0 : _a.release();
    this.selectedNode = node;
    this.onChanged(node);
    if (node) {
      node.select();
      this.onSelectNode(node);
      (_b = this._keyboardInteraction) == null ? void 0 : _b.setFocusNode(node, false);
    }
  }
  onDblClick(node) {
    node.toggle();
  }
  onToggleClick(node) {
    node.toggle();
  }
  onLabelClick(node) {
    this.selected = node;
  }
  onSelectNode(_) {
  }
  onReleaseNode(_) {
  }
  onRemoveNode(_) {
  }
  onChanged(_) {
  }
  onExpanding(_) {
    return true;
  }
  onExpand(_) {
  }
  onCollapsing(_) {
    return true;
  }
  onCollapse(_) {
  }
  onDragStartNode(node, ev) {
    if (!ev.dataTransfer)
      return;
    ev.dataTransfer.setData("application/json", JSON.stringify(node.data));
    ev.dataTransfer.dropEffect = "copy";
  }
  onDragOverOnNode(_node, _ev) {
    return false;
  }
  onDropOnNode(_node, _ev) {
  }
  onDragEndNode(_node, ev) {
  }
  onRenderNode(_node, _element) {
  }
  onNodeMoved(_node, _beforeOrder) {
  }
  onContextMenu(_ev) {
  }
  /**
   * left가 작으면 true 리턴
   * TODO 추후 IRTree에서 분리 필요 (class 로직과 상관 없음)
   */
  compareNodeOrderKey(leftNumberList, rightNumberList) {
    const length = Math.max(leftNumberList.length, rightNumberList.length);
    for (let i = 0; i < length; i++) {
      const leftVal = leftNumberList[i];
      const rightVal = rightNumberList[i];
      if (leftVal === void 0)
        return true;
      if (rightVal === void 0)
        return false;
      if (leftVal < rightVal)
        return true;
      if (leftVal > rightVal)
        return false;
    }
    throw new Error("same key error!");
  }
  getOrderedNodes() {
    return this.items.sort((a, b) => this.compareNodeOrderKey(a.getTreeNodeKey(), b.getTreeNodeKey()) ? -1 : 1);
  }
  removeNodeByUUID(uuid2) {
    this.findNodeByUUID(uuid2).delete();
  }
  selectNodeByUUID(uuid2) {
    this.findNodeByUUID(uuid2).select();
  }
  findNodeByUUID(uuid2) {
    const node = this._nodeMap.get(uuid2);
    if (!node)
      throw new Error(`not found node uuid: ${uuid2}`);
    return node;
  }
  addChild(parent, caption, data, order = void 0) {
    var _a;
    const nodeUUID = uuid();
    if (this._nodeMap.has(nodeUUID))
      throw new Error("UUID already exists");
    const node = new IRTreeNode({
      parentItem: parent,
      caption,
      data,
      level: parent ? parent.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: parent == null ? void 0 : parent.checked,
      draggable: this.nodeDraggable,
      uuid: nodeUUID
    });
    this._nodeMap.set(node.uuid, node);
    if (parent)
      parent.addNode(node);
    this.nodes.push(node);
    node.divTreeItemContent.ondblclick = (ev) => {
      if (ev.target.classList.contains("checkbox__wrapper"))
        return;
      this.onDblClick(node);
    };
    node.divTreeItemContent.onclick = (ev) => {
      this.onLabelClick(node);
    };
    node.iconExpand.onclick = () => this.onToggleClick(node);
    node.onSelect = () => this.selected = node;
    node.onRelease = (node2) => this.onReleaseNode(node2);
    node.onRemove = () => {
      var _a2;
      const id = this.nodes.indexOf(node);
      if (id !== -1)
        this.nodes.splice(this.nodes.indexOf(node), 1);
      this.onRemoveNode(node);
      this._nodeMap.delete(node.uuid);
      (_a2 = this._keyboardInteraction) == null ? void 0 : _a2.updateTreeVisibleInfo();
    };
    node.onExpanding = () => this.onExpanding(node);
    node.onExpand = () => {
      var _a2;
      (_a2 = this._keyboardInteraction) == null ? void 0 : _a2.updateTreeVisibleInfo();
      this.onExpand(node);
    };
    node.onCollapsing = () => this.onCollapsing(node);
    node.onCollapse = () => {
      var _a2;
      (_a2 = this._keyboardInteraction) == null ? void 0 : _a2.updateTreeVisibleInfo();
      this.onCollapse(node);
    };
    node.onDragStart = (ev) => this.onDragStartNode(node, ev);
    node.onDrop = (ev) => this.onDropOnNode(node, ev);
    node.onDragOver = (ev) => this.onDragOverOnNode(node, ev);
    node.onDragEnd = (ev) => this.onDragEndNode(node, ev);
    node.onRender = (element) => this.onRenderNode(node, element);
    node.render();
    (_a = this._keyboardInteraction) == null ? void 0 : _a.updateTreeVisibleInfo();
    const parentElement = parent ? parent.ulTreeList : this.rootElement;
    if (order === void 0)
      parentElement.appendChild(node.liTreeItem);
    else if (order >= parentElement.children.length) {
      parentElement.insertAdjacentElement("beforeend", node.liTreeItem);
    } else {
      parentElement.children[order].insertAdjacentElement("beforebegin", node.liTreeItem);
    }
    return node;
  }
  moveNode(node, targetNode, isTop) {
    if (node === targetNode.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const beforeOrder = node.order;
    node.parentItem = targetNode.parentItem;
    if (targetNode.parentItem === null)
      node.level = 0;
    else
      node.level = targetNode.parentItem.level + 1;
    targetNode.liTreeItem.insertAdjacentElement(isTop ? "beforebegin" : "afterend", node.liTreeItem);
    this.onNodeMoved(node, beforeOrder);
  }
  selectNode(node) {
    if (!this.nodes.includes(node))
      throw new Error("Can't select the node because it's not included");
    this.selected = node;
  }
  clear() {
    this.selectedNode = null;
    this.rootElement.innerHTML = "";
    this.nodes.splice(0, this.nodes.length);
    this._nodeMap.clear();
  }
  expandAll() {
    this.nodes.forEach((node) => node.expand());
  }
  collapseAll() {
    this.nodes.forEach((node) => node.collapse());
  }
  expandTo(to) {
    let node = to._parentItem;
    while (node) {
      node.expand();
      node = node._parentItem;
    }
  }
  getDropNode(ev) {
    var _a;
    const label = hasClass(ev.target, tree_classNames_default.treeLabel["&"], this.contextElement);
    return label !== null ? (_a = label.parentElement) == null ? void 0 : _a.parentElement : null;
  }
  getNodeByOffsetTopOrNull(offsetTop) {
    return null;
  }
};

// src/js-components/tree/renderer/checkbox.ts
var renderCheckboxTreeNode = ({ onCheck }) => {
  return (node) => {
    const content = renderDefaultTreeNode(node);
    const label = document.createElement("label");
    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    label.classList.add(checkboxWrapper);
    checkbox2.classList.add(checkboxInput);
    label.appendChild(checkbox2);
    content.template.insertAdjacentElement("afterbegin", label);
    checkbox2.addEventListener("click", () => {
      var _a;
      node.updateCheckedWithPropagation(checkbox2.checked);
      (_a = node.parentItem) == null ? void 0 : _a.updateCheckedStatus();
      checkbox2.dataset["state"] = node.hasCheckedChildren ? "sub-checked" : "";
      onCheck && onCheck(node);
    });
    return {
      get template() {
        return content.template;
      },
      update: (node2) => {
        var _a;
        content.update(node2);
        if (node2.checked !== checkbox2.checked)
          checkbox2.checked = node2.checked;
        (_a = node2.parentItem) == null ? void 0 : _a.updateCheckedStatus();
        node2.updateSubCheckedStatus();
        checkbox2.dataset["state"] = node2.subChecked ? "sub-checked" : "";
      }
    };
  };
};

// src/js-components/tree/drag-drop-reorder.ts
var OFFSET_BORDER = 16;
var setTreeDragDropReorder = (tree2) => {
  let startDraggingNode = null;
  let lastDraggingNode = null;
  const clearNodeBorderStyle = () => {
    if (lastDraggingNode) {
      lastDraggingNode.divTreeItemContent.classList.remove("is-top");
      lastDraggingNode.divTreeItemContent.classList.remove("is-bottom");
    }
    lastDraggingNode = null;
  };
  tree2.onDragStartNode = (node, ev) => {
    if (!ev.dataTransfer)
      return;
    ev.dataTransfer.dropEffect = "move";
    startDraggingNode = node;
  };
  tree2.onDragOverOnNode = (node, ev) => {
    if (startDraggingNode === node)
      return false;
    let parent = node._parentItem;
    while (parent !== null) {
      if (parent === startDraggingNode)
        return false;
      parent = parent._parentItem;
    }
    clearNodeBorderStyle();
    node.divTreeItemContent.classList.add(ev.offsetY < OFFSET_BORDER ? "is-top" : "is-bottom");
    lastDraggingNode = node;
    return true;
  };
  tree2.onDropOnNode = (targetNode) => {
    if (!startDraggingNode)
      throw new Error("No start dragging node!");
    tree2.moveNode(
      startDraggingNode,
      targetNode,
      targetNode.divTreeItemContent.classList.contains("is-top")
    );
  };
  tree2.onDragEndNode = () => {
    clearNodeBorderStyle();
  };
};

// ../../node_modules/.pnpm/@stylexjs+stylex@0.5.1/node_modules/@stylexjs/stylex/lib/es/stylex.mjs
var styleq$1 = {};
Object.defineProperty(styleq$1, "__esModule", {
  value: true
});
var styleq_2 = styleq$1.styleq = void 0;
var cache = /* @__PURE__ */ new WeakMap();
var compiledKey = "$$css";
function createStyleq(options) {
  var disableCache;
  var disableMix;
  var transform;
  if (options != null) {
    disableCache = options.disableCache === true;
    disableMix = options.disableMix === true;
    transform = options.transform;
  }
  return function styleq2() {
    var definedProperties = [];
    var className = "";
    var inlineStyle = null;
    var nextCache = disableCache ? null : cache;
    var styles = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
      styles[i] = arguments[i];
    }
    while (styles.length > 0) {
      var possibleStyle = styles.pop();
      if (possibleStyle == null || possibleStyle === false) {
        continue;
      }
      if (Array.isArray(possibleStyle)) {
        for (var _i = 0; _i < possibleStyle.length; _i++) {
          styles.push(possibleStyle[_i]);
        }
        continue;
      }
      var style = transform != null ? transform(possibleStyle) : possibleStyle;
      if (style.$$css) {
        var classNameChunk = "";
        if (nextCache != null && nextCache.has(style)) {
          var cacheEntry = nextCache.get(style);
          if (cacheEntry != null) {
            classNameChunk = cacheEntry[0];
            definedProperties.push.apply(definedProperties, cacheEntry[1]);
            nextCache = cacheEntry[2];
          }
        } else {
          var definedPropertiesChunk = [];
          for (var prop in style) {
            var value = style[prop];
            if (prop === compiledKey)
              continue;
            if (typeof value === "string" || value === null) {
              if (!definedProperties.includes(prop)) {
                definedProperties.push(prop);
                if (nextCache != null) {
                  definedPropertiesChunk.push(prop);
                }
                if (typeof value === "string") {
                  classNameChunk += classNameChunk ? " " + value : value;
                }
              }
            } else {
              console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
            }
          }
          if (nextCache != null) {
            var weakMap = /* @__PURE__ */ new WeakMap();
            nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
            nextCache = weakMap;
          }
        }
        if (classNameChunk) {
          className = className ? classNameChunk + " " + className : classNameChunk;
        }
      } else {
        if (disableMix) {
          if (inlineStyle == null) {
            inlineStyle = {};
          }
          inlineStyle = Object.assign({}, style, inlineStyle);
        } else {
          var subStyle = null;
          for (var _prop in style) {
            var _value = style[_prop];
            if (_value !== void 0) {
              if (!definedProperties.includes(_prop)) {
                if (_value != null) {
                  if (inlineStyle == null) {
                    inlineStyle = {};
                  }
                  if (subStyle == null) {
                    subStyle = {};
                  }
                  subStyle[_prop] = _value;
                }
                definedProperties.push(_prop);
                nextCache = null;
              }
            }
          }
          if (subStyle != null) {
            inlineStyle = Object.assign(subStyle, inlineStyle);
          }
        }
      }
    }
    var styleProps = [className, inlineStyle];
    return styleProps;
  };
}
var styleq = createStyleq();
styleq_2 = styleq$1.styleq = styleq;
styleq.factory = createStyleq;
var errorForFn = (name) => new Error(`'stylex.${name}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
var errorForType = (key) => errorForFn(`types.${key}`);
function props() {
  const options = this;
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }
  if (__implementations.props) {
    return __implementations.props.call(options, styles);
  }
  const [className, style] = styleq_2(styles);
  const result = {};
  if (className != null && className !== "") {
    result.className = className;
  }
  if (style != null && Object.keys(style).length > 0) {
    result.style = style;
  }
  return result;
}
function attrs() {
  const {
    className,
    style
  } = props(...arguments);
  const result = {};
  if (className != null && className !== "") {
    result.class = className;
  }
  if (style != null && Object.keys(style).length > 0) {
    result.style = Object.keys(style).map((key) => `${key}:${style[key]};`).join("");
  }
  return result;
}
function stylexCreate(styles) {
  if (__implementations.create != null) {
    const create2 = __implementations.create;
    return create2(styles);
  }
  throw errorForFn("create");
}
function stylexDefineVars(styles) {
  if (__implementations.defineVars) {
    return __implementations.defineVars(styles);
  }
  throw errorForFn("defineVars");
}
var stylexCreateTheme = (baseTokens, overrides) => {
  if (__implementations.createTheme) {
    return __implementations.createTheme(baseTokens, overrides);
  }
  throw errorForFn("createTheme");
};
var stylexInclude = (styles) => {
  if (__implementations.include) {
    return __implementations.include(styles);
  }
  throw errorForFn("include");
};
var create = stylexCreate;
var defineVars = stylexDefineVars;
var createTheme = stylexCreateTheme;
var include = stylexInclude;
var types = {
  angle: (_v) => {
    throw errorForType("angle");
  },
  color: (_v) => {
    throw errorForType("color");
  },
  url: (_v) => {
    throw errorForType("url");
  },
  image: (_v) => {
    throw errorForType("image");
  },
  integer: (_v) => {
    throw errorForType("integer");
  },
  lengthPercentage: (_v) => {
    throw errorForType("lengthPercentage");
  },
  length: (_v) => {
    throw errorForType("length");
  },
  percentage: (_v) => {
    throw errorForType("percentage");
  },
  number: (_v) => {
    throw errorForType("number");
  },
  resolution: (_v) => {
    throw errorForType("resolution");
  },
  time: (_v) => {
    throw errorForType("time");
  },
  transformFunction: (_v) => {
    throw errorForType("transformFunction");
  },
  transformList: (_v) => {
    throw errorForType("transformList");
  }
};
var keyframes = (keyframes2) => {
  if (__implementations.keyframes) {
    return __implementations.keyframes(keyframes2);
  }
  throw errorForFn("keyframes");
};
var firstThatWorks = function() {
  if (__implementations.firstThatWorks) {
    return __implementations.firstThatWorks(...arguments);
  }
  throw errorForFn("firstThatWorks");
};
function _stylex() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }
  const [className] = styleq_2(styles);
  return className;
}
_stylex.props = props;
_stylex.attrs = attrs;
_stylex.create = create;
_stylex.defineVars = defineVars;
_stylex.createTheme = createTheme;
_stylex.include = include;
_stylex.keyframes = keyframes;
_stylex.firstThatWorks = firstThatWorks;
_stylex.types = types;
var __implementations = {};

// ../ir-style-x/dist/index.js
var utility = {
  truncate: {
    overflow: "ir-b3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "ir-lyipyv",
    whiteSpace: "ir-uxw1ft",
    $$css: true
  },
  borderBottom: {
    borderBottom: "ir-h38nsk",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: true
  },
  borderRight: {
    borderRight: "ir-wwah22",
    borderRightWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderRightStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderRightColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    $$css: true
  },
  cursorPointer: {
    cursor: "ir-1ypdohk",
    $$css: true
  },
  disabledOpacity: {
    opacity: "ir-15pvmkd",
    $$css: true
  },
  disabled: {
    opacity: "ir-15pvmkd",
    pointerEvents: "ir-47corl",
    $$css: true
  },
  invisible: {
    visibility: "ir-lshs6z",
    $$css: true
  }
};
var staticTreeVars = {
  templateColumns: "--irx-tree-view-template-columns"
};
var tree = {
  base: {
    $$css: true
  }
};
var tree2Row = {
  base: {
    display: "ir-rvj5dj",
    gridTemplateColumns: "ir-suo5i5",
    gridAutoFlow: "ir-1mt1orb",
    gridAutoColumns: "ir-un8ryo",
    alignItems: "ir-6s0dn4",
    background: "ir-1gk1pts ir-13x9m4g ir-nreayj",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    opacity: "ir-1fjr46u",
    pointerEvents: "ir-ye1tj0",
    $$css: true
  },
  node: {
    cursor: "ir-1ypdohk",
    paddingLeft: "ir-1m85p54",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    color: "ir-1ikc3k3",
    $$css: true
  },
  header: {
    fontWeight: "ir-k50ysn",
    alignItems: "ir-1qjc9v5",
    color: "ir-7nd3pc",
    borderBottom: "ir-h38nsk",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    background: "ir-1gk1pts",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: true
  }
};
var tree2Content = {
  base: {
    lineHeight: "ir-1dpt0ig",
    padding: "ir-84vhe8",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: true
  },
  nodeMain: {
    display: "ir-78zum5",
    alignItems: "ir-6s0dn4",
    columnGap: "ir-17zd0t2",
    $$css: true
  },
  nodeIcon: {
    marginLeft: "ir-ip9h3s",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: true
  },
  nodeExpandButton: {
    opacity: "ir-j34u2y ir-1f2zl9v",
    $$css: true
  },
  nodeCaption: {
    flex: "ir-1cqoux5",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    $$css: true
  },
  column: {
    textAlign: "ir-2b8uid",
    $$css: true
  },
  header: {
    borderRight: "ir-wwah22 ir-ahlotz",
    borderRightWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderRightStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderRightColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    $$css: true
  }
};

// src/js-components/tree-view/node.ts
var IRTreeViewNode = class {
  constructor(args) {
    this.args = args;
    this._parentNode = null;
    this._prevNode = null;
    this._nextNode = null;
    this._firstChildNode = null;
    this._lastChildNode = null;
    this._nodeData = { ...args.nodeData };
  }
  get level() {
    return this.args.level;
  }
  get caption() {
    return this.data.caption;
  }
  get key() {
    return this.data.key;
  }
  get lastChild() {
    return this._lastChildNode;
  }
  get icon() {
    return this.data.icon;
  }
  get firstChild() {
    return this._firstChildNode;
  }
  get next() {
    return this._nextNode;
  }
  get prev() {
    return this._prevNode;
  }
  get parent() {
    return this._parentNode;
  }
  get data() {
    return this._nodeData;
  }
  get object() {
    return this.data.object;
  }
  get selected() {
    return this.data.selected;
  }
  get disabled() {
    return this.data.disabled;
  }
  get expanded() {
    return this.data.expanded;
  }
  get iconColor() {
    return this.data.iconColor;
  }
  get hook() {
    return this.args.hook;
  }
  getColumnText(colId) {
    var _a, _b;
    return colId === 0 ? this.caption : (_b = (_a = this.data.columns) == null ? void 0 : _a[colId - 1]) != null ? _b : "";
  }
  select() {
    if (this.selected)
      return;
    this.data.selected = true;
    this.hook.emit("nodeUpdated", [this]);
    this.hook.emit("nodeSingleSelect", [this]);
  }
  addSelect() {
    if (this.selected)
      return;
    this.data.selected = true;
    this.hook.emit("nodeUpdated", [this]);
    this.hook.emit("nodeAddSelect", [this]);
  }
  multiSelectToggle() {
    if (this.selected) {
      this.release();
    } else {
      this.data.selected = true;
      this.hook.emit("nodeUpdated", [this]);
      this.hook.emit("nodeAddSelect", [this]);
    }
  }
  release() {
    if (!this.selected)
      return;
    this.data.selected = false;
    this.hook.emit("nodeUpdated", [this]);
    this.hook.emit("nodeRelease", [this]);
  }
};

// src/js-components/tree-view/render.stylex.ts
var nodeRowCls = props(tree2Row.base, tree2Row.node);
var headerRowCls = props(tree2Row.base, tree2Row.header);
var nodeContentCls = props(tree2Content.base, utility.truncate);
var headerContentCls = props(tree2Content.base, tree2Content.header, utility.truncate);
var columnContentCls = props(tree2Content.column);
var nodeMainContentCls = props(tree2Content.nodeMain);
var nodeCaptionCls = props(tree2Content.nodeCaption, utility.truncate);
var nodeIconCls = props(tree2Content.nodeIcon);
var nodeExpandButtonCls = props(tree2Content.nodeExpandButton);

// src/utils/stylex-utils-cls.ts
var invisibleCls = props(utility.invisible);

// src/js-components/tree-view/render.ts
function createNodeContentsTemplate(args) {
  const mainContentDiv = document.createElement("div");
  const expandButton = createElement("button");
  const icon = createIconElement("");
  const text = document.createElement("span");
  const checkbox2 = document.createElement("input");
  addStyleXClass(mainContentDiv, nodeMainContentCls, nodeContentCls);
  addStyleXClass(text, nodeCaptionCls);
  addStyleXClass(icon, nodeIconCls);
  addStyleXClass(expandButton, nodeExpandButtonCls, nodeIconCls);
  expandButton.append(createIconElement("ir-icon--triangle-small-right"));
  mainContentDiv.appendChild(expandButton);
  args.showIcon && mainContentDiv.appendChild(icon);
  mainContentDiv.appendChild(text);
  return {
    mainContentDiv,
    expandButton,
    icon,
    text,
    checkbox: checkbox2
  };
}
function createNodeRowTemplate(node, args) {
  const columns = [];
  const nodeContents = createNodeContentsTemplate(args);
  for (let i = 1; i < args.headerRow.columnCount; i++) {
    const textDiv = document.createElement("div");
    addStyleXClass(textDiv, nodeContentCls, columnContentCls);
    columns.push(textDiv);
  }
  return {
    columns,
    ...nodeContents
  };
}
function createHeaderRowTemplate(args) {
  var _a;
  const columns = [];
  for (let i = 0; i < args.headerRow.columnCount; i++) {
    const textDiv = document.createElement("div");
    textDiv.textContent = (_a = args.headerRow.text[i]) != null ? _a : "";
    addStyleXClass(textDiv, headerContentCls);
    i > 0 && addStyleXClass(textDiv, columnContentCls);
    columns.push(textDiv);
  }
  return {
    columns
  };
}
function createNodeRow(viewportRow, node, args) {
  const nodeRowTemplate = createNodeRowTemplate(node, args);
  const element = viewportRow.getRowElement();
  viewportRow.setTemplateHelper(nodeRowTemplate);
  addStyleXClass(element, nodeRowCls);
  element.tabIndex = 0;
  element.role = "treeitem";
  element.dataset["nodeKey"] = node.key;
  nodeRender(viewportRow, node, args);
  element.appendChild(nodeRowTemplate.mainContentDiv);
  nodeRowTemplate.columns.forEach((column) => element.appendChild(column));
}
function createHeaderRow(viewportRow, args) {
  const headerRowTemplate = createHeaderRowTemplate(args);
  const element = viewportRow.getRowElement();
  viewportRow.setTemplateHelper(headerRowTemplate);
  addStyleXClass(element, headerRowCls);
  element.dataset["nodeHeader"] = "true";
  headerRender(viewportRow, args);
  headerRowTemplate.columns.forEach((column) => element.appendChild(column));
}
function nodeRender(viewportRow, node, args) {
  var _a, _b;
  const element = viewportRow.getRowElement();
  const nodeIRIconCls = (_a = node.icon) != null ? _a : args.defaultIcon;
  const iconColor = (_b = node.iconColor) != null ? _b : args.defaultIconColor;
  const { text, columns, icon } = viewportRow.template;
  setDataSetFlag(element, node.selected, "selected");
  setDataSetFlag(element, node.disabled, "disabled");
  setDataSetFlag(element, node.expanded, "expanded");
  if (!nodeIRIconCls)
    addStyleXClass(icon, invisibleCls);
  else {
    removeStyleXClass(icon, invisibleCls);
    addStyleXClass(icon, nodeIconCls, { className: `ir-icon ${nodeIRIconCls}` });
    iconColor && icon.style.setProperty("--ir-icon-foreground-color", iconColor);
  }
  text.textContent = node.caption;
  columns.forEach((column, i) => {
    column.textContent = node.getColumnText(i + 1);
  });
}
function headerRender(viewportRow, args) {
  const {
    columns
  } = viewportRow.template;
  columns.forEach((column, i) => {
    var _a;
    column.textContent = (_a = args.headerRow.text[i]) != null ? _a : "";
  });
}

// src/js-components/tree-view/tree-view.utils.ts
function getGridTemplateColumns(args) {
  const buffer = [];
  for (let i = 0; i < args.headerRow.columnCount; i++) {
    const width = args.headerRow.width[i];
    if (width === void 0)
      buffer.push(`minmax(0, 1fr)`);
    else if (typeof width === "number")
      buffer.push(`minmax(${width}px, ${width}px)`);
    else if (width.endsWith("px"))
      buffer.push(`minmax(${width}, ${width})`);
    else
      buffer.push(`minmax(0, 1fr)`);
  }
  return buffer.join(" ");
}

// src/js-components/base/hook-component.ts
var IRHookComponent = class extends IRComponent {
  constructor() {
    super({
      contextElement: document.createElement("div")
    });
    this._hook = createHookFlow();
    this.onInitDOMEvents(this.contextElement);
    this.onInitHooks();
  }
  get hook() {
    return this._hook;
  }
  emitHook(key, args) {
    return this._hook.emit(key, args);
  }
  addHook(key, callback) {
    this._hook.addHook(key, callback);
  }
  setHook(key, callback) {
    this._hook.setHook(key, callback);
  }
  removeHook(key, callback) {
    this._hook.removeHook(key, callback);
  }
  setBeginHook(key, callback) {
    this._hook.setBeginHook(key, callback);
  }
  setEndHook(key, callback) {
    this._hook.setEndHook(key, callback);
  }
  clearHooks(key) {
    this._hook.clearHooks(key);
  }
  clearBeginHooks(key) {
    this._hook.clearBeginHooks(key);
  }
  clearEndHooks(key) {
    this._hook.clearEndHooks(key);
  }
  get element() {
    return this.contextElement;
  }
};

// src/js-components/tree-view/tree-view.ts
var treeCls = props(tree.base);
var DEFAULT_HEADER_ARGS = {
  columnCount: 1,
  text: [""],
  width: ["*"]
};
var IRTreeView = class extends IRHookComponent {
  constructor(args) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    super();
    this._rootNodeList = [];
    this._selectedNode = [];
    this._nodeMap = /* @__PURE__ */ new Map();
    this._args = {
      defaultIcon: args.defaultIcon,
      defaultIconColor: args.defaultIconColor,
      showIcon: (_a = args.showIcon) != null ? _a : false,
      showCheckbox: (_b = args.showCheckbox) != null ? _b : false,
      multiSelect: (_c = args.multiSelect) != null ? _c : false,
      className: (_d = args.className) != null ? _d : "",
      nodeDraggable: (_e = args.nodeDraggable) != null ? _e : false,
      enabledKeyboard: (_f = args.enabledKeyboard) != null ? _f : false,
      displayHeader: (_g = args.displayHeader) != null ? _g : false,
      headerRow: (_h = args.headerRow) != null ? _h : DEFAULT_HEADER_ARGS
    };
    this._virtualDOM = this.initVirtualDOM();
    this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(contextElement) {
    contextElement.tabIndex = 0;
    contextElement.role = "tree";
    addStyleXClass(contextElement, treeCls, this._args);
    this.addGlobalEventListener(contextElement, "contextmenu", (ev) => this.emitHook("contextMenu", [ev]));
    this.addGlobalEventListener(contextElement, "focus", (ev) => this.emitHook("focus", [ev]));
    this.addGlobalEventListener(contextElement, "keydown", (ev) => this.emitHook("keydown", [ev]));
    this.addGlobalEventListener(contextElement, "blur", (ev) => this.emitHook("blur", [ev]));
    this.addGlobalEventListener(contextElement, "click", (ev) => this.emitHook("treeClick", [ev]));
  }
  // node 상태 변경 시, render 처리용
  nodeUpdatedHook(node) {
    const pair = this._nodeMap.get(node.key);
    if (pair)
      this.emitHook("nodeRender", [pair.virtualRow, pair.node, this._args]);
  }
  nodeSingleSelectHook(node) {
    this.releaseSelectedNodes();
    this._selectedNode.push(node);
  }
  nodeReleaseHook(node) {
    const idx = this._selectedNode.indexOf(node);
    if (idx >= 0)
      this._selectedNode.splice(idx, 1);
  }
  nodeAddSelectHook(node) {
    this._selectedNode.push(node);
  }
  onInitHooks() {
    this.setBeginHook("createHeaderRow", createHeaderRow);
    this.setBeginHook("createNodeRow", createNodeRow);
    this.setBeginHook("headerRender", headerRender);
    this.setBeginHook("nodeRender", nodeRender);
    this.setBeginHook("nodeUpdated", this.nodeUpdatedHook.bind(this));
    this.addHook("nodeSingleSelect", this.nodeSingleSelectHook.bind(this));
    this.addHook("nodeAddSelect", this.nodeAddSelectHook.bind(this));
    this.addHook("nodeRelease", this.nodeReleaseHook.bind(this));
    this.setBeginHook("contextMenu", (ev) => ev.preventDefault());
    this.setBeginHook("treeClick", this.treeClickHook.bind(this));
  }
  treeClickHook(ev) {
    if (!(ev.target instanceof HTMLElement))
      return;
    const el = closest("[data-node-key]", ".ir-vd-container__viewport-row ", ev.target);
    const key = el == null ? void 0 : el.dataset["nodeKey"];
    if (!key)
      return;
    const node = this.getTreeNodeOrNullByKey(key);
    if (!node)
      return;
    if (this._args.multiSelect && ev.ctrlKey)
      node.multiSelectToggle();
    else
      node.select();
    this.emitHook("nodeClick", [ev, node]);
  }
  onCreatedRowElement(row, element) {
    if (row.isFreezed)
      this.emitHook("createHeaderRow", [row, this._args]);
    else
      this.emitHook("createNodeRow", [row, row.object, this._args]);
  }
  onUpdatedRowObject(row, oldObj, newObj) {
    if (row.isFreezed)
      this.emitHook("headerRender", [row, this._args]);
    else
      this.emitHook("nodeRender", [row, newObj, this._args]);
  }
  initVirtualDOM() {
    const virtualDOMContainer = document.createElement("div");
    virtualDOMContainer.classList.add(borderScroll);
    virtualDOMContainer.style.height = "100%";
    const virtualDOM = new IRVirtualDOM({
      contextElement: virtualDOMContainer,
      // 헤더용 row 추가
      rowCount: 1,
      headerRowCount: 1,
      defaultRowHeight: getThemeStoreValue("tree-view.nodeRowHeight"),
      onCreatedRowElement: this.onCreatedRowElement.bind(this),
      onUpdatedRowObject: this.onUpdatedRowObject.bind(this)
    });
    virtualDOM.setRowHeight(0, getThemeStoreValue("tree-view.headerRowHeight"));
    this.contextElement.appendChild(virtualDOMContainer);
    virtualDOM.setRowVisible(0, this._args.displayHeader === true);
    return virtualDOM;
  }
  onDestroy() {
    this._virtualDOM.destroy();
  }
  get displayHeader() {
    return this._args.displayHeader;
  }
  set displayHeader(flag) {
    if (this._args.displayHeader === flag)
      return;
    this._args.displayHeader = flag;
    this.renderHeaderRow();
  }
  get multiSelect() {
    return this._args.multiSelect;
  }
  set multiSelect(flag) {
    if (this._args.multiSelect === flag)
      return;
    this._args.multiSelect = flag;
    this.releaseSelectedNodes();
  }
  renderHeaderRow() {
    const row = this._virtualDOM.getRowById(0);
    this._virtualDOM.setRowVisible(0, this._args.displayHeader === true);
    this.emitHook("headerRender", [row, this._args]);
  }
  setColumnCount(columnCount) {
    this._args.headerRow.columnCount = columnCount;
    this.renderHeaderRow();
    this.updateTreeTemplateColumns();
  }
  setColumnWidth(colId, width) {
    if (colId < 0 || colId >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${colId}`);
    this._args.headerRow.width[colId] = width;
    this.updateTreeTemplateColumns();
  }
  /**
   * 현재 선택된 모든 노드 해제
   */
  releaseSelectedNodes() {
    this.getSelectedNodes().forEach((node) => node.release());
  }
  selectNodeByKey(key) {
    const node = this.getTreeNodeOrNullByKey(key);
    if (!node) {
      console.warn(`node not found: ${key}`);
      return;
    }
    node.select();
  }
  /**
   * 현재 선택된 모든 노드 반환
   */
  getSelectedNodes() {
    return [...this._selectedNode];
  }
  /**
   * 현재 선택 노드 반환 없으면 null
   */
  getSelectedNodeOrNull() {
    var _a;
    return (_a = this._selectedNode[0]) != null ? _a : null;
  }
  autoSizeColumn(colId) {
  }
  getTreeNodeOrNullByKey(key) {
    var _a, _b;
    return (_b = (_a = this._nodeMap.get(key)) == null ? void 0 : _a.node) != null ? _b : null;
  }
  setColumnText(colId, text) {
    if (colId < 0 || colId >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${colId}`);
    this._args.headerRow.text[colId] = text;
    this.renderHeaderRow();
  }
  updateNodeData(key, nodeData) {
  }
  updateNodeColumns(key, columns) {
  }
  updateTreeTemplateColumns() {
    setStyleXToken(this.contextElement, staticTreeVars.templateColumns, getGridTemplateColumns(this._args));
  }
  setNodeOnMap(node, virtualRow) {
    if (this.getTreeNodeOrNullByKey(node.key))
      throw new Error(`already existed key: ${node.key}`);
    this._nodeMap.set(node.key, { node, virtualRow });
  }
  removeNodeByKey(key) {
  }
  getNewNodeLevel(parentKey) {
    if (parentKey === void 0)
      return 0;
    return 1;
  }
  addNode(nodeData) {
    const node = new IRTreeViewNode({
      nodeData,
      level: this.getNewNodeLevel(nodeData.parentKey),
      hook: this.hook
    });
    const virtualRow = this._virtualDOM.addRow(void 0, node);
    this.setNodeOnMap(node, virtualRow);
  }
};

// src/js-components/tree-view/plugins/keyboard.ts
var IRTreeViewKeyboardPlugin = (tree2) => {
  return {
    mount() {
    },
    unmount() {
    }
  };
};

// src/js-components/datePicker/datePicker.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
var convertToMomentFromStrOrDate = (defaultDate, format) => {
  if (defaultDate instanceof Date)
    return (0, import_dayjs.default)(defaultDate).startOf("D");
  else if (typeof defaultDate === "string")
    return (0, import_dayjs.default)(defaultDate, format);
  return (0, import_dayjs.default)(null);
};
var IRDatePicker = class extends IRComponent {
  constructor({
    div,
    defaultDate,
    format = i18n_default.datePicker.dateFormat,
    checkbox: checkbox2 = false,
    disabled = false,
    allowedEmptyString = true,
    onSelect,
    onChange,
    onCheckboxClick,
    minDate = getThemeStore().getStoreValue("datePicker.minDate"),
    maxDate = getThemeStore().getStoreValue("datePicker.maxDate")
  }) {
    super({ contextElement: div });
    this.selectedDate = null;
    this.calendarDate = /* @__PURE__ */ new Date();
    if (defaultDate) {
      const defaultMoment = convertToMomentFromStrOrDate(defaultDate, format);
      if (defaultMoment.isValid()) {
        this.calendarDate = defaultMoment.toDate();
        this.selectedDate = defaultMoment.toDate();
      } else
        console.error(`invalid defaultDate format. it must follow ${format}`);
    }
    if (!allowedEmptyString && this.selectedDate == null) {
      const defaultMoment = convertToMomentFromStrOrDate(/* @__PURE__ */ new Date(), format);
      this.calendarDate = defaultMoment.toDate();
      this.selectedDate = defaultMoment.toDate();
    }
    this.format = format;
    this.div = div;
    this.input = document.createElement("input");
    this.button = document.createElement("button");
    this.button.appendChild(createIconElement("ir-icon--calendar"));
    this.div.innerHTML = "";
    this.div.classList.add(input);
    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeHolder", this.format);
    this.input.classList.add(inputNative, "tnum-adj");
    this.button.className = inputSuffix;
    this.button.type = "button";
    this._minDate = minDate;
    this._maxDate = maxDate;
    if (onSelect)
      this.onSelect = onSelect;
    if (onChange)
      this.onChange = onChange;
    if (onCheckboxClick)
      this.onCheckboxClick = onCheckboxClick;
    if (checkbox2) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(checkbox, inputPrefix);
      checkboxLabel.className = checkboxWrapper;
      inputCheckbox.className = checkboxInput;
      checkboxLabel.appendChild(inputCheckbox);
      divInputPrefix.appendChild(checkboxLabel);
      this.div.appendChild(divInputPrefix);
      inputCheckbox.checked = !disabled;
      inputCheckbox.onchange = () => {
        this.disabled = !inputCheckbox.checked;
        this.onCheckboxClick(inputCheckbox.checked);
      };
      this.addCoreElement(divInputPrefix);
    }
    this.disabled = disabled;
    this.div.appendChild(this.input);
    this.div.appendChild(this.button);
    this.addCoreElement(this.input);
    this.addCoreElement(this.button);
    if (this.selectedDate)
      this.input.value = (0, import_dayjs.default)(this.selectedDate).format(format);
    this.button.addEventListener("click", () => {
      if (this.isVisible === false)
        this.show();
    });
    this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        if (allowedEmptyString)
          this.setDate(null);
        else
          this.setDate(this.selectedDate);
        return;
      }
      const dt = (0, import_dayjs.default)(this.input.value, this.format, true);
      if (!dt.isValid() || dt.toDate() < this.minDate || dt.toDate() > this.maxDate)
        this.setDate(this.selectedDate);
      else
        this.setDate(dt.toDate());
    });
    this.handler = createDatePickerHandler({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (dt) => {
        this.setDate(dt);
        this.onSelect(dt);
        this.hide();
      }
    });
  }
  get textValue() {
    return this.input.value;
  }
  get inputCheckbox() {
    return this.div.querySelector(".checkbox__input");
  }
  get date() {
    return this.selectedDate;
  }
  get isVisible() {
    return this.handler.visible;
  }
  get disabled() {
    return this.input.hasAttribute("disabled");
  }
  get minDate() {
    return this._minDate;
  }
  get maxDate() {
    return this._maxDate;
  }
  set minDate(value) {
    this._minDate = value;
  }
  set maxDate(value) {
    this._maxDate = value;
  }
  set disabled(flag) {
    if (flag) {
      this.input.setAttribute("disabled", "");
      this.button.setAttribute("disabled", "");
    } else {
      this.input.removeAttribute("disabled");
      this.button.removeAttribute("disabled");
    }
    if (this.inputCheckbox)
      this.inputCheckbox.checked = !flag;
  }
  setDate(date) {
    if (date) {
      this.selectedDate = new Date(date);
      this.calendarDate = new Date(date);
      this.input.value = (0, import_dayjs.default)(date).format(this.format);
      this.updateCalendar();
    } else {
      this.selectedDate = null;
      this.input.value = "";
    }
    if (this.latestValue !== this.input.value)
      this.onChange(this.input.value);
    this.latestValue = this.input.value;
  }
  show() {
    if (this.isVisible)
      return;
    this.handler.update(this.calendarDate, this.selectedDate);
    this.handler.show();
  }
  hide() {
    if (this.isVisible)
      this.handler.hide();
  }
  /* Object Events */
  onSelect(_date) {
  }
  onChange(_value) {
  }
  onCheckboxClick(_checked) {
  }
  updateCalendar() {
    this.handler.update(this.calendarDate, this.selectedDate);
  }
};

// src/js-components/confirm/confirm.ts
var import_xss = __toESM(require_lib(), 1);

// src/js-components/confirm/confirm.classNames.ts
var block2 = "confirm";
var confirm_classNames_default = {
  confirm: {
    "&": block2
  },
  confirmIcon: {
    "&": `${block2}__icon`
  },
  confirmContent: {
    "&": `${block2}__content`
  },
  confirmActions: {
    "&": `${block2}__actions`
  },
  confirmButtonClose: {
    "&": `${block2}__button-close`
  }
};

// src/components/dialog/dialog.classNames.ts
var block3 = "dialog";
var dialog_classNames_default = {
  dialog: {
    "&": block3,
    transparent: `${block3}--transparent`,
    "is-visible": "is-visible"
  },
  dialogWrapper: {
    "&": `${block3}__wrapper`
  },
  dialogHeader: {
    "&": `${block3}__header`
  },
  dialogHeaderTitle: {
    "&": `${block3}__header-title`
  },
  dialogHeaderActions: {
    "&": `${block3}__header-actions`
  },
  dialogContent: {
    "&": `${block3}__content`
  },
  dialogFooter: {
    "&": `${block3}__footer`
  },
  dialogFooterLeft: {
    "&": `${block3}__footer-left`
  },
  dialogFooterRight: {
    "&": `${block3}__footer-right`
  },
  dialogButtonClose: {
    "&": `${block3}__button-close`
  }
};

// src/js-components/confirm/confirm.elements.ts
var ConfirmButtonTypeList = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function createConfirmElements() {
  const dialog = document.createElement("div");
  const dialogWrapper = document.createElement("div");
  const dialogContent = document.createElement("div");
  const confirm = document.createElement("div");
  const confirmContent = document.createElement("div");
  const confirmIcon = document.createElement("i");
  const confirmActions = document.createElement("div");
  const buttonMap = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  };
  const closeIcon = document.createElement("i");
  const closeButton = document.createElement("button");
  dialog.tabIndex = -1;
  dialog.classList.add("ir-confirm", dialog_classNames_default.dialog["&"], z_index_classNames_default.zIndex.message);
  dialogWrapper.className = dialog_classNames_default.dialogWrapper["&"];
  dialogContent.className = dialog_classNames_default.dialogContent["&"];
  confirm.className = confirm_classNames_default.confirm["&"];
  confirmContent.className = confirm_classNames_default.confirmContent["&"];
  confirmActions.className = confirm_classNames_default.confirmActions["&"];
  Object.values(buttonMap).forEach((e) => e.classList.add(button));
  buttonMap.yes.classList.add(buttonPrimary);
  buttonMap.ok.classList.add(buttonPrimary);
  buttonMap.retry.classList.add(buttonSecondary);
  buttonMap.ignore.classList.add(buttonTertiary);
  closeIcon.classList.add("ir-icon", "ir-icon--close");
  closeButton.className = confirm_classNames_default.confirmButtonClose["&"];
  confirmActions.appendChild(buttonMap.no);
  confirmActions.appendChild(buttonMap.stop);
  confirmActions.appendChild(buttonMap.ignore);
  confirmActions.appendChild(buttonMap.retry);
  confirmActions.appendChild(buttonMap.yes);
  confirmActions.appendChild(buttonMap.ok);
  closeButton.appendChild(closeIcon);
  confirm.appendChild(closeButton);
  confirm.appendChild(confirmIcon);
  confirm.appendChild(confirmContent);
  confirm.appendChild(confirmActions);
  dialogContent.appendChild(confirm);
  dialogWrapper.appendChild(dialogContent);
  dialog.appendChild(dialogWrapper);
  return {
    dialog,
    confirmIcon,
    confirmContent,
    confirmActions,
    buttonMap,
    closeButton
  };
}
var getElements = /* @__PURE__ */ (() => {
  let elements = null;
  return function getCachedConfirmElements() {
    if (!elements)
      elements = createConfirmElements();
    return elements;
  };
})();
function getConfirmElements() {
  return getElements();
}

// src/js-components/confirm/confirm.ts
var confirmTypeClass = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
};
var XSS_ALLOW_ATTR_LIST = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]);
var XSS_FILTER_OPTION = {
  onTagAttr(tag, name, value, isWhiteAttr) {
    if (!isWhiteAttr && XSS_ALLOW_ATTR_LIST.has(name))
      return `${name}="${(0, import_xss.escapeAttrValue)(value)}"`;
  }
};
var confirmContext = {
  count: 0
};
var hasDisplayedConfirm = () => confirmContext.count > 0;
var IRConfirm = class {
  constructor(args) {
    this.args = args;
    this.enterHandler = null;
    this.activeElement = null;
    const {
      iconType = "info",
      buttonType = ["ok"],
      messageHTML,
      msgMap = {},
      onClick,
      escButton,
      enterButton,
      contentElement
    } = args;
    this.visible = false;
    this.iconType = iconType;
    this.buttonType = buttonType;
    if (messageHTML)
      this.messageHTML = xss_default(messageHTML, XSS_FILTER_OPTION);
    if (contentElement)
      this.contentElement = contentElement;
    this.msgMap = {
      ...msgMap
    };
    this.enterButton = enterButton;
    this.escButton = escButton;
    this.escController = createESCHideController(this);
    if (onClick)
      this.onClick = onClick;
  }
  updateContent() {
    const elements = getConfirmElements();
    if (this.messageHTML)
      elements.confirmContent.innerHTML = this.messageHTML;
    else if (this.contentElement) {
      if (Object.getPrototypeOf(this.contentElement).jquery)
        elements.confirmContent.replaceChildren(...this.contentElement);
      else if (this.contentElement instanceof HTMLElement)
        elements.confirmContent.replaceChildren(this.contentElement);
      else
        throw new Error("not supported type contentElement");
    } else
      throw new Error("html or element must be provided!");
  }
  _show() {
    var _a;
    const elements = getConfirmElements();
    confirmContext.count++;
    this.updateContent();
    this.visible = true;
    this.activeElement = document.activeElement;
    elements.confirmIcon.className = `${confirm_classNames_default.confirmIcon["&"]} ir-icon ${confirmTypeClass[this.iconType] || ""}`;
    elements.closeButton.onclick = () => this.hide();
    if (this.args.hideCloseButton)
      elements.closeButton.classList.add("display--none");
    else
      elements.closeButton.classList.remove("display--none");
    for (const key of ConfirmButtonTypeList) {
      elements.buttonMap[key].remove();
      elements.buttonMap[key].innerText = (_a = this.msgMap[key]) != null ? _a : i18n_default.confirm[key];
      elements.buttonMap[key].onclick = () => {
        this.hide();
        this._doClick(key);
      };
    }
    for (const key of this.buttonType)
      elements.confirmActions.appendChild(elements.buttonMap[key]);
    if (!elements.dialog.isConnected)
      getLayerElement("message").appendChild(elements.dialog);
    elements.dialog.classList.add(dialog_classNames_default.dialog["is-visible"]);
    elements.dialog.focus();
    if (this.args.disabledKeyAction !== true)
      this._registerEnterESCHandler();
  }
  _registerEnterESCHandler() {
    this.enterHandler = () => {
      const elements = getConfirmElements();
      if (this.enterButton)
        elements.buttonMap[this.enterButton].click();
      else if (this.buttonType.length === 1)
        elements.buttonMap[this.buttonType[0]].click();
      else
        this.hide();
    };
    registerGlobalKeyListener("Enter", this.enterHandler);
    this.escController.create();
  }
  show() {
    if (confirmContext.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const elements = getConfirmElements();
    if (this.escButton)
      elements.buttonMap[this.escButton].click();
  }
  hide() {
    if (this.visible === false)
      return;
    this.escController.destroy();
    confirmContext.count = 0;
    setTimeout(() => {
      if (this.activeElement instanceof HTMLElement) {
        this.activeElement.focus();
        this.activeElement = null;
      }
    }, 0);
    const elements = getConfirmElements();
    this.visible = false;
    elements.dialog.classList.remove(dialog_classNames_default.dialog["is-visible"]);
    this.enterHandler && unregisterGlobalKeyListener("Enter", this.enterHandler);
    this.enterHandler = null;
  }
  _doClick(btnType) {
    this.onClick(btnType);
  }
  onClick(_btnType) {
  }
};

// src/js-components/timePicker/timePicker.ts
var import_dayjs3 = __toESM(require_dayjs_min(), 1);

// src/js-components/timePicker/timePicker.handler.ts
var import_dayjs2 = __toESM(require_dayjs_min(), 1);

// src/js-components/timePicker/timePicker.classNames.ts
var block4 = "time-picker";
var timePicker_classNames_default = {
  timePicker: {
    "&": block4,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${block4}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${block4}__button-panel`
  },
  timePickerPanel: {
    "&": `${block4}__panel`
  },
  timePickerPanelItem: {
    "&": `${block4}__panel-item`
  },
  timePickerDivider: {
    "&": `${block4}__divider`
  }
};

// src/js-components/timePicker/utils.ts
function isValidPattern(value, isSeconds) {
  const formatValue = isSeconds ? value : value + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(formatValue)) {
    const { hour, minute, second } = parseTime(formatValue);
    if (hour < 0 || hour >= 24)
      return false;
    else if (minute < 0 || minute >= 60)
      return false;
    else if (isSeconds && second < 0 || second >= 60)
      return false;
    else
      return true;
  } else {
    return false;
  }
}
function parseTime(value) {
  const [hour, minute, second] = value.split(":");
  return {
    hour: parseInt(hour),
    minute: parseInt(minute),
    second: parseInt(second)
  };
}
function formatTime(hour, minute, second) {
  return [
    hour.toString().padStart(2, "0"),
    minute.toString().padStart(2, "0"),
    second.toString().padStart(2, "0")
  ].join(":");
}

// src/js-components/timePicker/timePicker.elements.ts
var HOURS = 12;
var MINUTES = 60;
var SECONDS = 60;
var PANEL_TYPE = ["period", "hour", "minute", "second"];
function createTimePickerElements() {
  const timePicker = document.createElement("div");
  const panelWrapper = document.createElement("div");
  const buttonPanel = document.createElement("div");
  const panelList = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
  const [periodPanel, hourPanel, minutePanel, secondPanel] = panelList;
  timePicker.classList.add(timePicker_classNames_default.timePicker["&"], z_index_classNames_default.zIndex.popover);
  panelList.forEach((panel, id) => {
    panel.setAttribute("data-type", PANEL_TYPE[id]);
    panel.className = timePicker_classNames_default.timePickerPanel["&"];
    panelWrapper.appendChild(panel);
  });
  panelWrapper.className = timePicker_classNames_default.timePickerPanelWrapper["&"];
  buttonPanel.className = timePicker_classNames_default.timePickerButtonPanel["&"];
  const nowButton = document.createElement("button");
  nowButton.classList.add("button");
  nowButton.type = "button";
  buttonPanel.appendChild(nowButton);
  timePicker.appendChild(panelWrapper);
  timePicker.appendChild(buttonPanel);
  function createPanelItem(text) {
    const panelItem = document.createElement("div");
    panelItem.className = timePicker_classNames_default.timePickerPanelItem["&"];
    panelItem.dataset["text"] = text;
    panelItem.innerText = text;
    return panelItem;
  }
  forEachBySize(2, () => panelList[0].appendChild(createPanelItem("")));
  forEachBySize(HOURS, (hour) => panelList[1].appendChild(createPanelItem(`${hour}`)));
  forEachBySize(MINUTES, (minute) => panelList[2].appendChild(createPanelItem(`${minute}`)));
  forEachBySize(SECONDS, (second) => panelList[3].appendChild(createPanelItem(`${second}`)));
  return {
    elements: {
      nowButton,
      secondPanel,
      timePicker
    },
    updateI18n,
    removeSelected,
    getTimeElements,
    scrollIntoView,
    selectTime,
    isAM,
    setPeriod,
    setHourId,
    setMinuteId,
    setSecondId,
    periodGenerator,
    getCurrentTime,
    hourGenerator,
    minuteGenerator,
    secondGenerator
  };
  function updateI18n() {
    nowButton.innerHTML = "";
    nowButton.appendChild(createIconElement("ir-icon--check"));
    nowButton.append(i18n_default.timePicker.btnNow);
    panelList[0].children[0].innerHTML = "";
    panelList[0].children[1].innerHTML = "";
    panelList[0].children[0].append(i18n_default.timePicker.am);
    panelList[0].children[1].append(i18n_default.timePicker.pm);
  }
  function removeSelected() {
    timePicker.querySelectorAll(".is-selected").forEach((e) => e.classList.remove("is-selected"));
  }
  function getTimeElements(hour, minute, second) {
    const isAM2 = hour < HOURS;
    const adjustedHour = isAM2 ? hour : hour - HOURS;
    const periodId = isAM2 ? 0 : 1;
    return {
      periodElement: periodPanel.children[periodId],
      hourElement: hourPanel.children[adjustedHour],
      minuteElement: minutePanel.children[minute],
      secondElement: secondPanel.children[second]
    };
  }
  function scrollIntoView(hour, minute, second) {
    const { hourElement, minuteElement, secondElement } = getTimeElements(hour, minute, second);
    hourPanel.scrollTop = hourElement.offsetTop - hourPanel.clientHeight / 2;
    minutePanel.scrollTop = minuteElement.offsetTop - minutePanel.clientHeight / 2;
    secondPanel.scrollTop = secondElement.offsetTop - secondPanel.clientHeight / 2;
  }
  function selectTime(hour, minute, second) {
    const { periodElement, hourElement, minuteElement, secondElement } = getTimeElements(hour, minute, second);
    removeSelected();
    periodElement.classList.add("is-selected");
    hourElement.classList.add("is-selected");
    minuteElement.classList.add("is-selected");
    secondElement.classList.add("is-selected");
  }
  function isAM() {
    return periodPanel.children[0].classList.contains("is-selected");
  }
  function setPeriod(periodId) {
    periodPanel.children[(periodId + 1) % 2].classList.remove("is-selected");
    periodPanel.children[periodId].classList.add("is-selected");
  }
  function setHourId(hourId) {
    var _a;
    (_a = hourPanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
    hourPanel.children[hourId].classList.add("is-selected");
  }
  function setMinuteId(minuteId) {
    var _a;
    (_a = minutePanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
    minutePanel.children[minuteId].classList.add("is-selected");
  }
  function setSecondId(secondId) {
    var _a;
    (_a = secondPanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
    secondPanel.children[secondId].classList.add("is-selected");
  }
  function* periodGenerator() {
    yield [0, periodPanel.children[0]];
    yield [1, periodPanel.children[1]];
  }
  function getCurrentTime() {
    return formatTime(
      getSelectedValueOnPanel(hourPanel) + (isAM() ? 0 : HOURS),
      getSelectedValueOnPanel(minutePanel),
      getSelectedValueOnPanel(secondPanel)
    );
  }
  function* hourGenerator() {
    let id = 0;
    for (const e of hourPanel.children)
      yield [id++, e];
  }
  function* minuteGenerator() {
    let id = 0;
    for (const e of minutePanel.children)
      yield [id++, e];
  }
  function* secondGenerator() {
    let id = 0;
    for (const e of secondPanel.children)
      yield [id++, e];
  }
}
function getSelectedValueOnPanel(panel) {
  const selected = panel.querySelector(".is-selected");
  if (selected instanceof HTMLElement)
    return parseInt(selected.innerText || "0", 10);
  return 0;
}
var getTimePickerElements = /* @__PURE__ */ (() => {
  let elements = null;
  return function getCachedTimePickerElements() {
    if (!elements)
      elements = createTimePickerElements();
    return elements;
  };
})();

// src/js-components/timePicker/timePicker.handler.ts
function createIRTimePickerHandler({ uuid: uuid2, refElement, onChange, visibleSeconds }) {
  let visible = false;
  let floatingCleanup = () => void 0;
  const {
    elements,
    getCurrentTime,
    selectTime,
    scrollIntoView,
    updateI18n,
    hourGenerator,
    minuteGenerator,
    secondGenerator,
    periodGenerator,
    setPeriod,
    setHourId,
    setMinuteId,
    setSecondId
  } = getTimePickerElements();
  const handler = {
    setTime(value) {
      const formatValue = visibleSeconds ? value : value + ":00";
      const { hour, minute, second } = parseTime(formatValue);
      selectTime(hour, minute, second);
      scrollIntoView(hour, minute, second);
    },
    show: () => {
      if (visible)
        return;
      updateI18n();
      visible = true;
      escController.create();
      outsideHandler.create();
      elements.nowButton.onclick = (ev) => {
        const value = (0, import_dayjs2.default)().format("HH:mm:ss");
        handler.setTime(value);
        onChange(ev, value);
      };
      for (const [id, element] of periodGenerator())
        element.onclick = (ev) => {
          setPeriod(id);
          onChange(ev, getCurrentTime());
        };
      for (const [id, element] of hourGenerator())
        element.onclick = (ev) => {
          setHourId(id);
          onChange(ev, getCurrentTime());
        };
      for (const [id, element] of minuteGenerator())
        element.onclick = (ev) => {
          setMinuteId(id);
          onChange(ev, getCurrentTime());
        };
      if (visibleSeconds) {
        for (const [id, element] of secondGenerator())
          element.onclick = (ev) => {
            setSecondId(id);
            onChange(ev, getCurrentTime());
          };
        elements.secondPanel.style.removeProperty("display");
      } else
        elements.secondPanel.style.setProperty("display", "none");
      if (!elements.timePicker.isConnected)
        getLayerElement("popover").appendChild(elements.timePicker);
      elements.timePicker.style.removeProperty("display");
      elements.timePicker.setAttribute("data-uuid", uuid2);
      setTimeout(() => {
        elements.timePicker.classList.add(timePicker_classNames_default.timePicker["is-visible"]);
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, elements.timePicker);
      }, 0);
    },
    hide: () => {
      if (!visible)
        return;
      escController.destroy();
      outsideHandler.destroy();
      elements.timePicker.classList.remove(timePicker_classNames_default.timePicker["is-visible"]);
      elements.timePicker.addEventListener("transitionend", (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        if (uuid2 === elements.timePicker.getAttribute("data-uuid")) {
          floatingCleanup();
          elements.timePicker.remove();
        }
      }, { once: true });
    },
    onESC: () => handler.hide(),
    get visible() {
      return visible;
    }
  };
  const escController = createESCHideController(handler);
  const outsideHandler = createClickOutsideHandler({
    eventElements: [elements.timePicker],
    clickOutsideFunc: () => handler.hide()
  });
  return handler;
}

// src/js-components/timePicker/timePicker.ts
var clsCheckbox = { checkbox, checkboxWrapper, checkboxInput };
var clsInput = { input, inputNative, inputSuffix, inputPrefix };
var IRTimePicker = class extends IRComponent {
  constructor(args) {
    super(args);
    const { visibleSeconds = false } = args;
    const formatTime2 = visibleSeconds ? "HH:mm:ss" : "HH:mm";
    this.contextElement.className = clsInput.input;
    this.input = document.createElement("input");
    this.input.placeholder = formatTime2;
    this.input.className = clsInput.inputNative;
    this.button = document.createElement("button");
    this.button.appendChild(createIconElement("ir-icon--watch"));
    this.button.className = clsInput.inputSuffix;
    this.latestValue = args.value || "";
    this.button.onclick = () => this.toggle();
    this.timePickerHandler = createIRTimePickerHandler({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds,
      onChange: (_, value) => {
        const formatValue = (0, import_dayjs3.default)(value, "HH:mm:ss", true).format(formatTime2);
        this.value = formatValue;
        this.onChange(formatValue);
      }
    });
    if (args.checkbox) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(clsCheckbox.checkbox, clsInput.inputPrefix);
      checkboxLabel.className = clsCheckbox.checkboxWrapper;
      inputCheckbox.className = clsCheckbox.checkboxInput;
      checkboxLabel.appendChild(inputCheckbox);
      divInputPrefix.appendChild(checkboxLabel);
      this.contextElement.appendChild(divInputPrefix);
      inputCheckbox.checked = !args.disabled;
      inputCheckbox.onchange = () => this.disabled = !inputCheckbox.checked;
      this.addCoreElement(divInputPrefix);
    }
    this.contextElement.appendChild(this.input);
    this.contextElement.appendChild(this.button);
    this.addCoreElement(this.input);
    this.addCoreElement(this.button);
    this.disabled = args.disabled === true;
    if (args.onChange)
      this.onChange = args.onChange;
    if (args.value)
      this.value = (0, import_dayjs3.default)(args.value, formatTime2).format(formatTime2);
    this.input.onblur = () => {
      if (!isValidPattern(this.input.value, visibleSeconds))
        this.value = this.latestValue;
      else
        this.value = this.input.value;
    };
  }
  get hour() {
    return 0;
  }
  get minute() {
    return 0;
  }
  get second() {
    return 0;
  }
  get inputCheckbox() {
    return this.contextElement.querySelector(".checkbox__input");
  }
  get visible() {
    return this.timePickerHandler.visible;
  }
  get disabled() {
    return this.input.disabled;
  }
  get value() {
    return this._value;
  }
  set disabled(disabled) {
    this.input.disabled = disabled;
    this.button.disabled = disabled;
  }
  set value(value) {
    this._value = value;
    this.input.value = value || "";
    this.latestValue = this.input.value;
  }
  show() {
    this.timePickerHandler.show();
    this.timePickerHandler.setTime(this.value || "00:00:00");
  }
  hide() {
    this.timePickerHandler.hide();
  }
  toggle() {
    if (this.visible)
      this.hide();
    else
      this.show();
  }
  /*
   * Events
   */
  onChange(_value) {
  }
};

// src/dialogs/dialog-base.ts
var DialogGenerator = class {
  constructor() {
    this._dialogElement = createElement("div", "dialog");
    this._dialogElement.setAttribute("tabindex", "-1");
    this._wrapperElement = appendElement(this._dialogElement, "div", "dialog__wrapper");
    this._headerElement = appendElement(this._wrapperElement, "div", "dialog__header");
    this._bodyElement = appendElement(this._wrapperElement, "div", "dialog__content");
    this._footerElement = appendElement(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(width) {
    this._wrapperElement.style.width = `${width}px`;
    return this;
  }
  addStrongHeaderTitle(text) {
    const titleEl = appendElement(this._headerElement, "strong", "dialog__header-title");
    titleEl.innerText = text;
    return this;
  }
  createHeaderCloseButton(onClick) {
    const actionsEl = appendElement(this._headerElement, "div", "dialog__header-actions");
    const btnClose = appendElement(actionsEl, "button", "dialog__button-close");
    appendElement(btnClose, "i", "ir-icon", "ir-icon--close");
    btnClose.onclick = onClick;
    return this;
  }
  setFooterClass(...cls) {
    this._footerElement.classList.add(...cls);
    return this;
  }
  setContentElement(...elements) {
    while (this._bodyElement.lastChild)
      this._bodyElement.lastChild.remove();
    this._bodyElement.append(...elements);
    return this;
  }
  addFooterButton(text, onClick, ...cls) {
    const btn = appendElement(this._footerElement, "button", "button", ...cls);
    btn.innerText = text;
    btn.onclick = onClick;
    return this;
  }
  get element() {
    return this._dialogElement;
  }
};

// src/dialogs/i18n/en.ts
var en_default = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
};

// src/dialogs/i18n/ja.ts
var ja_default = {
  "#login-info-dialog.title": "\u30ED\u30B0\u30A4\u30F3\u60C5\u5831",
  "#login-info-dialog.confirm-button": "\u78BA\u8A8D",
  "AUTH.PASSWORD.NOTICE": "\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4\u671F\u9650",
  "AUTH.ACCESSIP": "\u6700\u7D42\u30ED\u30B0\u30A4\u30F3IP",
  "AUTH.LASTESTLOGINTIME": "\u6700\u7D42\u30ED\u30B0\u30A4\u30F3\u65E5\u6642",
  "AUTH.SECURITY.NOTICE": "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u60C5\u5831"
};

// src/dialogs/i18n/ko.ts
var ko_default = {
  "#login-info-dialog.title": "\uB85C\uADF8\uC778 \uC815\uBCF4",
  "#login-info-dialog.confirm-button": "\uD655\uC778",
  "AUTH.PASSWORD.NOTICE": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uAE30\uD55C",
  "AUTH.ACCESSIP": "\uCD5C\uC885 \uB85C\uADF8\uC778 IP",
  "AUTH.LASTESTLOGINTIME": "\uCD5C\uC885 \uB85C\uADF8\uC778 \uC77C\uC2DC",
  "AUTH.SECURITY.NOTICE": "\uBCF4\uC548 \uC0AC\uD56D"
};

// src/dialogs/i18n/zh.ts
var zh_default = {
  "#login-info-dialog.title": "\u767B\u5F55\u4FE1\u606F",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "\u5BC6\u7801\u53D8\u66F4\u671F\u9650",
  "AUTH.ACCESSIP": "\u6700\u7EC8\u767B\u5F55IP",
  "AUTH.LASTESTLOGINTIME": "\u6700\u7EC8\u767B\u5F55\u65F6\u95F4",
  "AUTH.SECURITY.NOTICE": "\u4FDD\u5B89\u4E8B\u9879"
};

// src/dialogs/i18n/index.tsx
var I18N_MSG = { ko: ko_default, en: en_default, ja: ja_default, zh: zh_default };
function isKey(key, obj) {
  return key in obj;
}
function getLangContext(lang) {
  var _a;
  const msg = (_a = I18N_MSG[lang]) != null ? _a : ko_default;
  return {
    getMsg(key, ...args) {
      if (isKey(key, msg))
        return msg[key];
      return key;
    }
  };
}

// src/dialogs/login-info-dialog.ts
var LOGIN_INFO_DIALOG_WIDTH = 550;
var loginInfo = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function hasLoginInfo(data) {
  return data.props.some(([key]) => loginInfo[key] !== void 0);
}
function getLoginInfo(data) {
  return data.props.filter(([key]) => loginInfo[key] !== void 0).sort(([key1], [key2]) => loginInfo[key1] - loginInfo[key2]);
}
function appendContentFragment(contentEl, content) {
  var _a, _b;
  const fragment = document.createDocumentFragment();
  const parser = new DOMParser();
  const encodedContent = content.replace(/&/g, "&amp;");
  const dom = parser.parseFromString(`<root>${encodedContent}</root>`, "application/xml");
  let cur = (_a = dom.firstChild) == null ? void 0 : _a.firstChild;
  while (cur) {
    if (cur.nodeType === 1 && cur instanceof Element) {
      if (cur.tagName.toLowerCase() === "font") {
        const font = document.createElement("span");
        font.textContent = cur.textContent;
        font.style.cssText = (_b = cur.getAttribute("style")) != null ? _b : "";
        const color = cur.getAttribute("color");
        const bgColor = cur.getAttribute("bgcolor");
        if (color)
          font.style.color = color.replace("cl", "");
        if (bgColor)
          font.style.backgroundColor = bgColor.replace("cl", "");
        fragment.append(font);
      } else if (cur.tagName.toLowerCase() === "br") {
        fragment.append(document.createElement("br"));
      } else {
        console.warn(`loginInfoDialog-parser::not allowed tag ${cur.tagName}`);
      }
    } else if (cur.textContent) {
      fragment.append(cur.textContent);
    }
    cur = cur.nextSibling;
  }
  contentEl.append(fragment);
}
function createLoginInfoDialog(args) {
  const {
    irm010Data,
    lang = "ko",
    onClose
  } = args;
  if (!hasLoginInfo(irm010Data))
    throw new Error("no login info data! check irm010 response");
  const dialog = new DialogGenerator();
  const { getMsg } = getLangContext(lang);
  const closeHandler = () => {
    popover.hide();
  };
  const keyHandler = (e) => {
    if (e.key === "Enter")
      closeHandler();
  };
  const popover = createPopover({
    element: dialog.element,
    type: "dialog",
    parentElement: getLayerElement("dialog"),
    onESC() {
      onClose == null ? void 0 : onClose();
      window.removeEventListener("keyup", keyHandler);
    }
  });
  const ulElement = (() => {
    const ul = createElement("ul", "row", "gap-y--xs");
    const loginNotifyInfo = getLoginInfo(irm010Data);
    loginNotifyInfo.forEach(([key, value]) => {
      const li = appendElement(ul, "li", "row", "col", "col--12");
      appendElement(li, "div", "col", "col--4").innerText = getMsg(key);
      if (key === "AUTH.SECURITY.NOTICE")
        appendContentFragment(
          appendElement(li, "div", "col", "col--8"),
          value
        );
      else
        appendElement(li, "div", "col", "col--8").innerText = value;
    });
    return ul;
  })();
  dialog.setDialogWidth(LOGIN_INFO_DIALOG_WIDTH).addStrongHeaderTitle(getMsg("#login-info-dialog.title")).createHeaderCloseButton(closeHandler).setContentElement(ulElement).setFooterClass("justify-content--end").addFooterButton(getMsg("#login-info-dialog.confirm-button"), closeHandler, "button--primary");
  return {
    popoverHandler: popover,
    show() {
      dialog.element.focus();
      popover.show();
      window.addEventListener("keyup", keyHandler);
    },
    hide() {
      popover.hide();
    }
  };
}
export {
  ClipboardManager,
  IRCommandBlock,
  IRCommandManager,
  IRConfirm,
  IRDatePicker,
  IRSelect,
  IRTimePicker,
  IRTree,
  IRTreeViewKeyboardPlugin as IRTree2KeyboardPlugin,
  IRTreeView,
  IRVirtualDOM,
  Logger,
  Palette,
  ReactiveState,
  addStyleXClass,
  appendElement,
  blobToStr,
  clearGlobalKeyListener,
  closest,
  z_index_classNames_default as clsZId,
  createClickOutsideHandler,
  createCustomIcon,
  createDropdownDiv,
  createDropdownItem,
  createESCHideController,
  createElement,
  createFloatingHandler,
  createIconElement,
  createImageFromSrcUrl,
  createLoadingHandler,
  createLoginInfoDialog,
  createObjectURLFromSvg,
  createPopover,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  createTooltipContainer,
  downloadDataURL,
  forEachBySize,
  forEachFilterBySize,
  get2DGenerator,
  getBase64FromSvg,
  getElement,
  getIRIconPng,
  getImageBlobFromImage,
  getLayerElement,
  getMinMaxBetween,
  getTextWidthContext,
  getThemeStore,
  getTooltipElements,
  getVirtualEl,
  hasClass,
  hasDisplayedConfirm,
  hasLoginInfo,
  i18n_default as i18n,
  offsetBottomAutoUpdate,
  parseInt2 as parseInt,
  registerGlobalKeyListener,
  removeAllChildren,
  removeStyleXClass,
  removeStyleXToken,
  renderCheckboxTreeNode,
  renderDefaultTreeNode,
  setDataSetFlag,
  setStyleXToken,
  setTreeDragDropReorder,
  unregisterGlobalKeyListener,
  uuid,
  xss_default as xss
};
//# sourceMappingURL=index.js.map
