import {
  i18n_default
} from "./chunk-VEWYTQUD.js";
import {
  IRComponent
} from "./chunk-O3XJ324C.js";
import {
  A,
  B,
  E,
  F,
  G,
  H,
  I,
  J,
  L,
  M,
  N,
  O,
  P,
  R,
  T,
  V,
  W,
  Z,
  appendElement,
  ar,
  br,
  createClickOutsideHandler,
  createIconElement,
  createTooltip,
  gr,
  hasClass,
  j,
  m,
  nr,
  pr,
  q,
  require_lib,
  sr,
  tr,
  u,
  xss_default,
  z,
  z_index_classNames_default
} from "./chunk-K5RQWUDQ.js";
import {
  require_lodash
} from "./chunk-L3QRNZQF.js";
import {
  createESCHideController,
  esm_default,
  getLayerElement,
  getThemeStore,
  offsetBottomAutoUpdate,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener
} from "./chunk-E2DVMCXX.js";
import {
  __toESM
} from "./chunk-F6QKJDR3.js";

// src/js-components/tab/index.ts
var IRPageControl = class {
  constructor() {
  }
};

// src/js-components/virtual-dom/viewport-manager.ts
var import_lodash = __toESM(require_lodash(), 1);

// src/js-components/virtual-dom/viewport-row.ts
var IRViewportRow = class {
  constructor({
    rowId,
    top,
    height,
    object
  }) {
    this._isFreezed = false;
    this._cachedElement = null;
    this._rowId = rowId;
    this._top = top;
    this._height = height;
    this._object = object != null ? object : null;
    this._visible = true;
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
    element.style.height = `${this._height}px`;
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
    div.style.height = `${this._height}px`;
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
    element.style.top = `${this._top}px`;
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
    import_lodash.default.range(startRowId, endRowId + 1).forEach((rowId) => {
      const row = this._rows[rowId];
      row.remove();
      this._totalHeight -= row.height;
    });
    this._rows.splice(startRowId, endRowId - startRowId + 1);
    this.updateVisibleRowList();
    this.scheduleUpdateRowInfo(startRowId);
  }
  clearRows() {
    (0, import_lodash.default)(this._rows).drop(this._headerRowsCount).filter((row) => row.isConnectedInDOM).forEach((row) => row.remove());
    this._rows.length = this._headerRowsCount;
    this._visibleRowList.length = this._headerRowsCount;
    this._totalHeight = this._freezedHeight;
  }
  addRow(height, object) {
    const rowObj = new IRViewportRow({
      rowId: this._rows.length,
      height,
      top: this._totalHeight,
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
  insertRow(rowId, height, object) {
    if (rowId < this._headerRowsCount || rowId > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const row = this._rows[rowId];
    const rowObj = new IRViewportRow({
      rowId,
      height,
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
    row.setVisible(visible);
    this.updateVisibleRowList();
    this._totalHeight += row.height * (visible ? 1 : -1);
    if (rowId < this._headerRowsCount)
      this._freezedHeight += row.height * (visible ? 1 : -1);
    if (!row.visible && row.isConnectedInDOM)
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
  get headerRowsCount() {
    return this._headerRowsCount;
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
    args.contextElement.classList.add("ir-vd-container");
    this._viewportElements = createViewportElements();
    args.contextElement.append(
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
    this._defaultRowHeight = (_b = args.defaultRowHeight) != null ? _b : DEFAULT_ROW_HEIGHT;
    this.resizeObserver.observe(args.contextElement);
    this.initScrollEvent();
    this.initRowCol();
  }
  initScrollEvent() {
    this.addGlobalEventListener(this.contextElement, "scroll", (ev) => {
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
    freezedViewport.style.height = `${freezedHeight}px`;
    viewport.style.height = `${totalHeight}px`;
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
    if (this._debounceContext.rAFHandler !== -1)
      cancelAnimationFrame(this._debounceContext.rAFHandler);
    this._debounceContext.rAFHandler = requestAnimationFrame(() => this.doTasks());
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
  mountViewportRows(scrollTop, clientHeight) {
    var _a;
    if (this._itemManager.rowCount === 0)
      return;
    const startRow = this._itemManager.getRowByTop(Math.max(scrollTop, this._itemManager.freezedHeight + 1));
    const endRow = (_a = this._itemManager.getRowByTop(scrollTop + clientHeight)) != null ? _a : this._itemManager.lastRow;
    if (!startRow) {
      return;
    }
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
    this.mountViewportRows(this.contextElement.scrollTop, this.contextElement.clientHeight);
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
    const rowObj = this._itemManager.insertRow(insertingRowId, height != null ? height : this._defaultRowHeight, object);
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
    const rowObj = this._itemManager.addRow(height != null ? height : this._defaultRowHeight, object);
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
    this.scheduleTasks("update-container-size", "update-viewport");
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
  const content2 = document.createElement("div");
  const iconFolder = document.createElement("i");
  const span = document.createElement("span");
  content2.className = tree_classNames_default.treeLabel["&"];
  span.className = tree_classNames_default.treeLabelText["&"];
  return {
    get template() {
      return content2;
    },
    update: (node) => {
      if (node.iconClass) {
        if (!iconFolder.isConnected)
          content2.insertAdjacentElement("afterbegin", iconFolder);
        iconFolder.className = `${tree_classNames_default.treeIconFolder["&"]} ir-icon ${node.iconClass}`;
        if (node.iconColor)
          iconFolder.style.setProperty("--ir-icon-foreground-color", node.iconColor);
        else
          iconFolder.style.removeProperty("--ir-icon-foreground-color");
      } else
        iconFolder.remove();
      if (node.caption) {
        content2.appendChild(span);
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
    this._disabled = disabled;
    this.liTreeItem = document.createElement("li");
    this.liTreeItem.classList.add(tree_classNames_default.treeItem["&"]);
    this.divTreeItemContent = appendElement(this.liTreeItem, "div", tree_classNames_default.treeItemContent["&"]);
    this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString());
    this.ulTreeList = document.createElement("ul");
    this.ulTreeList.classList.add(tree_classNames_default.treeList["&"]);
    this.iconExpand = appendElement(this.divTreeItemContent, "i", tree_classNames_default.treeIconExpand["&"], "ir-icon", statusIcon);
    this.divTreeItemContent.appendChild(this._template.template);
    this.divTreeItemContent.draggable = draggable;
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
  scrollIntoView() {
    this.divTreeItemContent.scrollIntoView();
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
var DEFAULT_PLUGINS = Object.freeze([]);
var IRTree = class extends IRComponent {
  constructor({
    contextElement,
    renderer = renderDefaultTreeNode,
    nodeDraggable = true,
    plugins = DEFAULT_PLUGINS
  }) {
    super({ contextElement });
    this.nodes = [];
    this.selectedNode = null;
    this.renderer = renderer;
    this.nodeDraggable = nodeDraggable;
    contextElement.classList.add(tree_classNames_default.tree["&"]);
    contextElement.setAttribute("tabindex", "-1");
    this.rootElement = appendElement(contextElement, "ul", tree_classNames_default.treeList["&"], tree_classNames_default.treeListRoot["&"]);
    this.addCoreElement(this.rootElement);
  }
  get items() {
    return [...this.nodes];
  }
  get selected() {
    return this.selectedNode;
  }
  set selected(node) {
    var _a;
    if (this.selected === node)
      return;
    (_a = this.selectedNode) == null ? void 0 : _a.release();
    this.selectedNode = node;
    this.onChanged(node);
    if (node) {
      node.select();
      this.onSelectNode(node);
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
  onSelectNode(_5) {
  }
  onReleaseNode(_5) {
  }
  onRemoveNode(_5) {
  }
  onChanged(_5) {
  }
  onExpanding(_5) {
    return true;
  }
  onExpand(_5) {
  }
  onCollapsing(_5) {
    return true;
  }
  onCollapse(_5) {
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
  addChild(parent, caption, data, order = void 0) {
    const node = new IRTreeNode({
      parentItem: parent,
      caption,
      data,
      level: parent ? parent.level + 1 : 0,
      renderer: this.renderer,
      draggable: this.nodeDraggable,
      defaultChecked: parent == null ? void 0 : parent.checked
    });
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
      const id = this.nodes.indexOf(node);
      if (id !== -1)
        this.nodes.splice(this.nodes.indexOf(node), 1);
      this.onRemoveNode(node);
    };
    node.onExpanding = () => this.onExpanding(node);
    node.onExpand = () => this.onExpand(node);
    node.onCollapsing = () => this.onCollapsing(node);
    node.onCollapse = () => this.onCollapse(node);
    node.onDragStart = (ev) => this.onDragStartNode(node, ev);
    node.onDrop = (ev) => this.onDropOnNode(node, ev);
    node.onDragOver = (ev) => this.onDragOverOnNode(node, ev);
    node.onDragEnd = (ev) => this.onDragEndNode(node, ev);
    node.onRender = (element) => this.onRenderNode(node, element);
    node.render();
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
};

// src/js-components/tree/renderer/checkbox.ts
var renderCheckboxTreeNode = ({ onCheck }) => {
  return (node) => {
    const content2 = renderDefaultTreeNode(node);
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.classList.add(nr);
    checkbox.classList.add(tr);
    content2.template.insertAdjacentElement("afterbegin", label);
    label.appendChild(checkbox);
    checkbox.addEventListener("click", () => {
      var _a;
      node.updateCheckedWithPropagation(checkbox.checked);
      (_a = node.parentItem) == null ? void 0 : _a.updateCheckedStatus();
      checkbox.dataset["state"] = node.hasCheckedChildren ? "sub-checked" : "";
      onCheck && onCheck(node);
    });
    return {
      get template() {
        return content2.template;
      },
      update: (node2) => {
        var _a;
        content2.update(node2);
        if (node2.checked !== checkbox.checked)
          checkbox.checked = node2.checked;
        (_a = node2.parentItem) == null ? void 0 : _a.updateCheckedStatus();
        checkbox.dataset["state"] = node2.hasCheckedChildren ? "sub-checked" : "";
      }
    };
  };
};

// src/js-components/tree/drag-drop-reorder.ts
var OFFSET_BORDER = 16;
var setTreeDragDropReorder = (tree) => {
  let startDraggingNode = null;
  let lastDraggingNode = null;
  const clearNodeBorderStyle = () => {
    if (lastDraggingNode) {
      lastDraggingNode.divTreeItemContent.classList.remove("is-top");
      lastDraggingNode.divTreeItemContent.classList.remove("is-bottom");
    }
    lastDraggingNode = null;
  };
  tree.onDragStartNode = (node, ev) => {
    if (!ev.dataTransfer)
      return;
    ev.dataTransfer.dropEffect = "move";
    startDraggingNode = node;
  };
  tree.onDragOverOnNode = (node, ev) => {
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
  tree.onDropOnNode = (targetNode) => {
    if (!startDraggingNode)
      throw new Error("No start dragging node!");
    tree.moveNode(
      startDraggingNode,
      targetNode,
      targetNode.divTreeItemContent.classList.contains("is-top")
    );
  };
  tree.onDragEndNode = () => {
    clearNodeBorderStyle();
  };
};

// src/js-components/select/select.ts
var import_lodash2 = __toESM(require_lodash(), 1);
var clsSelect = {
  select: A,
  selectDropdown: M,
  selectDropdownList: G,
  selectDropdownButton: O,
  selectDropdownItem: E,
  selectDropdownIcon: Z,
  selectInput: j,
  selectInputNative: J,
  selectInputIcon: q,
  selectDropdownItemSelected: N
};
var createDropdownDiv = () => {
  const divDropdown = document.createElement("div");
  const ulItems = document.createElement("ul");
  divDropdown.classList.add(clsSelect.selectDropdown, z_index_classNames_default.zIndex.popover);
  ulItems.className = clsSelect.selectDropdownList;
  divDropdown.appendChild(ulItems);
  return { divDropdown, ulItems };
};
var createDropdownItem = (value, text) => {
  const item = document.createElement("li");
  const button = document.createElement("button");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  span.innerText = text;
  button.type = "button";
  button.title = text;
  button.className = clsSelect.selectDropdownButton;
  item.className = clsSelect.selectDropdownItem;
  item.setAttribute("ir-select-value", value);
  icon.classList.add(clsSelect.selectDropdownIcon, "ir-icon", "ir-icon--check");
  button.appendChild(icon);
  button.append(span);
  item.append(button);
  return { item, button, icon, span };
};
var IRSelect = class extends IRComponent {
  constructor(args) {
    var _a;
    super({
      contextElement: args instanceof HTMLSelectElement ? args : args.contextElement
    });
    this.floatingCleanup = () => void 0;
    this.divSelect = document.createElement("div");
    this.divInput = document.createElement("div");
    this.inputValue = document.createElement("input");
    const dropDownElements = createDropdownDiv();
    this.divDropDown = dropDownElements.divDropdown;
    this.ulItems = dropDownElements.ulItems;
    this.items = [];
    this.select = this.contextElement;
    const icon = document.createElement("i");
    this.inputValue.readOnly = true;
    this.inputValue.type = "text";
    this.divSelect.classList.add(clsSelect.select);
    this.select.classList.forEach((cls) => this.divSelect.classList.add(cls));
    this.divInput.className = clsSelect.selectInput;
    this.inputValue.className = clsSelect.selectInputNative;
    icon.classList.add(clsSelect.selectInputIcon, "ir-icon", "ir-icon--chevron-down");
    this.divInput.appendChild(this.inputValue);
    this.divInput.appendChild(icon);
    this.divDropDown.appendChild(this.ulItems);
    this.divSelect.appendChild(this.divInput);
    const defaultValue = this.select.value;
    this._value = "";
    Array.from(this.select.children).map((e) => e).forEach((e) => {
      const attributes = {};
      for (let i = 0; i < e.attributes.length; ++i) {
        const attr = e.attributes.item(i);
        if (!attr)
          return;
        attributes[attr.name] = attr.value;
      }
      this.addItem(e.value, e.text, attributes);
      e.remove();
    });
    if (!(args instanceof HTMLSelectElement)) {
      if (args.onChange)
        this.onChange = args.onChange;
      this.disabled = (_a = args.disabled) != null ? _a : false;
      if (args.defaultValue !== null)
        this.value = args.defaultValue || defaultValue;
      if (args.placeholder)
        this.inputValue.placeholder = args.placeholder;
    } else
      this.value = defaultValue;
    this.select.insertAdjacentElement("beforebegin", this.divSelect);
    this.select.style.display = "none";
    this.divInput.onclick = () => this.toggle();
    this.addCoreElement(this.divSelect);
    this.escController = createESCHideController(this);
    this.outsideHandler = createClickOutsideHandler({
      eventElements: [this.divSelect, this.divDropDown],
      clickOutsideFunc: () => this.hide()
    });
  }
  /*
   * Getters
   */
  get listItems() {
    return [...this.items];
  }
  get disabled() {
    return this.inputValue.hasAttribute("disabled");
  }
  get value() {
    return this._value;
  }
  get text() {
    return this.inputValue.value;
  }
  /*
   * Setters
   */
  set disabled(bool) {
    if (bool)
      this.inputValue.setAttribute("disabled", "true");
    else
      this.inputValue.removeAttribute("disabled");
  }
  set value(value) {
    if (this._value === value)
      return;
    if (this.hasElementByValue(value))
      this.selectItem(value);
    else
      throw new Error(`There is no '${value}' value`);
  }
  clearItems() {
    this.lastClickedOption = void 0;
    this.items.forEach(({ element, option }) => {
      element.remove();
      option.remove();
    });
    this.items = [];
    this.inputValue.value = "";
    this.select.value = "";
    this._value = "";
  }
  removeItem(value) {
    this.items.filter((x) => x.value === value).forEach(({ element, option }) => {
      element.remove();
      option.remove();
    });
    this.items = this.items.filter((x) => x.value !== value);
  }
  expand() {
    if (this.disabled)
      return;
    this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`;
    if (!this.divDropDown.isConnected)
      getLayerElement("popover").appendChild(this.divDropDown);
    this.escController.create();
    this.outsideHandler.create();
    setTimeout(() => {
      this.divSelect.classList.add("is-expanded");
      this.divDropDown.classList.add("is-expanded");
      this.floatingCleanup();
      this.floatingCleanup = offsetBottomAutoUpdate(this.divSelect, this.divDropDown);
    }, 0);
  }
  hide() {
    this.floatingCleanup();
    this.escController.destroy();
    this.outsideHandler.destroy();
    this.divSelect.classList.remove("is-expanded");
    this.divDropDown.classList.remove("is-expanded");
    this.divDropDown.addEventListener("transitionend", (ev) => {
      if (ev.currentTarget !== ev.target)
        return;
      this.divDropDown.remove();
    }, { once: true });
  }
  toggle() {
    if (this.divSelect.classList.contains("is-expanded"))
      this.hide();
    else
      this.expand();
  }
  addItem(value, text, attr = {}) {
    const { item, button } = createDropdownItem(value, text);
    const option = document.createElement("option");
    Object.entries(attr).forEach(([key, value2]) => option.setAttribute(key, value2));
    option.value = value;
    option.innerText = text;
    this.select.appendChild(option);
    this.items.push({ text, value, element: item, option, attr });
    this.ulItems.appendChild(item);
    item.onclick = (_ev) => {
      if (this.lastClickedOption !== option) {
        this.clearSelectedStatus();
        this.changeValue({ text, value, attr, element: item, option });
      }
      this.hide();
    };
    return button;
  }
  /*
   * Object Events
   */
  onChange(_select, _option) {
  }
  setValueWithoutEvent(value) {
    if (this._value === value)
      return;
    if (this.hasElementByValue(value))
      this.selectItem(value, false);
    else
      throw new Error(`There is no '${value}' value`);
  }
  /*
   * Private Methods
   */
  hasElementByValue(value) {
    return (0, import_lodash2.default)(this.ulItems.querySelectorAll(`[ir-select-value]`)).map((e) => e).some((e) => e.getAttribute("ir-select-value") === value);
  }
  clearSelectedStatus() {
    (0, import_lodash2.default)(this.items).forEach(({ element }) => element.classList.remove(clsSelect.selectDropdownItemSelected));
  }
  selectItem(value, emitEvent = true) {
    this.clearSelectedStatus();
    (0, import_lodash2.default)(this.items).dropWhile((item) => item.value !== value).take(1).forEach((e) => this.changeValue(e, emitEvent));
  }
  changeValue({ text, value, option, element }, emitEvent = true) {
    this.lastClickedOption = option;
    element.classList.add(clsSelect.selectDropdownItemSelected);
    this.inputValue.value = text;
    this.select.value = value;
    this._value = value;
    if (emitEvent)
      this.onChange(this.select, option);
  }
};

// src/js-components/datePicker/datePicker.handler.ts
var import_lodash3 = __toESM(require_lodash(), 1);

// src/js-components/datePicker/datePicker.elements.ts
var clsDatePicker = {
  datePicker: H,
  datePickerHeader: F,
  datePickerHeaderTitle: W,
  datePickerContent: P,
  datePickerFooter: L,
  datePickerContentCell: V,
  datePickerContentHeaderCell: I,
  datePickerContentTable: T
};
var datePicker = document.createElement("div");
var header = document.createElement("div");
var headerPrevYear = document.createElement("button");
var headerPrev = document.createElement("button");
var headerTitle = document.createElement("strong");
var headerNext = document.createElement("button");
var headerNextYear = document.createElement("button");
var prevButtonGroup = document.createElement("div");
var nextButtonGroup = document.createElement("div");
headerPrevYear.appendChild(createIconElement("ir-icon--chevron-double-left"));
headerPrev.appendChild(createIconElement("ir-icon--chevron-left"));
headerNext.appendChild(createIconElement("ir-icon--chevron-right"));
headerNextYear.appendChild(createIconElement("ir-icon--chevron-double-right"));
var content = document.createElement("div");
var contentTable = document.createElement("table");
var contentTableThead = document.createElement("thead");
var contentTableTbody = document.createElement("tbody");
var footer = document.createElement("div");
datePicker.classList.add(clsDatePicker.datePicker);
header.classList.add(clsDatePicker.datePickerHeader);
headerTitle.classList.add(clsDatePicker.datePickerHeaderTitle);
content.classList.add(clsDatePicker.datePickerContent);
footer.classList.add(clsDatePicker.datePickerFooter);
prevButtonGroup.appendChild(headerPrevYear);
prevButtonGroup.appendChild(headerPrev);
nextButtonGroup.appendChild(headerNext);
nextButtonGroup.appendChild(headerNextYear);
header.appendChild(prevButtonGroup);
header.appendChild(headerTitle);
header.appendChild(nextButtonGroup);
var WeekdayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var weekdayRow = document.createElement("tr");
var weekdayCells = {};
WeekdayList.forEach((w) => {
  const cell = document.createElement("th");
  cell.className = `${clsDatePicker.datePickerContentCell} ${clsDatePicker.datePickerContentHeaderCell}`;
  cell.setAttribute("scope", "col");
  weekdayCells[w] = cell;
  weekdayRow.appendChild(cell);
});
contentTableThead.appendChild(weekdayRow);
contentTable.className = clsDatePicker.datePickerContentTable;
contentTable.appendChild(contentTableThead);
contentTable.appendChild(contentTableTbody);
content.appendChild(contentTable);
var todayDiv = document.createElement("div");
var todayButton = document.createElement("button");
todayButton.classList.add("button");
todayButton.type = "button";
todayDiv.appendChild(todayButton);
footer.appendChild(todayDiv);
datePicker.appendChild(header);
datePicker.appendChild(content);
datePicker.appendChild(footer);
var updateI18n = () => {
  todayButton.innerHTML = "";
  todayButton.appendChild(createIconElement("ir-icon--check", "button__icon-prefix"));
  todayButton.append(i18n_default.datePicker.btnToday);
  WeekdayList.forEach((w) => weekdayCells[w].innerText = i18n_default.common[w]);
};
var datePicker_elements_default = {
  datePicker,
  headerTitle,
  contentTableTbody,
  headerPrev,
  headerNext,
  todayButton,
  updateI18n,
  headerNextYear,
  headerPrevYear
};

// src/js-components/datePicker/datePicker.handler.ts
var setTimeZero = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};
var WEEK_COUNT = 6;
var WEEKDAYS_COUNT = 7;
var NEXT_MONTH_DAYS = 32;
var PREV_MONTH_DAYS = 0;
var createDatePickerHandler = ({ uuid, refElement, onClick, minDate, maxDate }) => {
  let visible = false;
  let floatingCleanup = () => void 0;
  let disabledTodayTooltip = null;
  setTimeZero(minDate);
  setTimeZero(maxDate);
  const clickOutsideHandler = createClickOutsideHandler({
    eventElements: [datePicker_elements_default.datePicker],
    clickOutsideFunc: () => handler.hide()
  });
  const handler = {
    get visible() {
      return visible;
    },
    update(calendarDate, selectedDate) {
      const today = setTimeZero(/* @__PURE__ */ new Date());
      const tmp = setTimeZero(new Date(calendarDate));
      const curMon = tmp.getMonth();
      datePicker_elements_default.headerPrev.onclick = () => {
        calendarDate.setDate(PREV_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerNext.onclick = () => {
        calendarDate.setDate(NEXT_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerPrevYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() - 1);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerNextYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() + 1);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.todayButton.onclick = () => {
        onClick.call(null, today);
        this.update(today, today);
      };
      const isTodayInRange = today < minDate || today > maxDate;
      datePicker_elements_default.todayButton.disabled = isTodayInRange;
      const todayDiv2 = datePicker_elements_default.todayButton.parentElement;
      if (isTodayInRange && todayDiv2 && disabledTodayTooltip == null)
        disabledTodayTooltip = createTooltip({
          refElement: todayDiv2,
          label: i18n_default.datePicker.disabledTodayTooltip,
          placement: "bottom"
        });
      datePicker_elements_default.updateI18n();
      datePicker_elements_default.headerTitle.innerText = esm_default(tmp).format(i18n_default.datePicker.titleFormat);
      tmp.setDate(1);
      tmp.setDate(-(tmp.getDay() - 1));
      datePicker_elements_default.contentTableTbody.innerHTML = "";
      import_lodash3.default.range(WEEK_COUNT).forEach(() => {
        const row = document.createElement("tr");
        for (let i = 0; i < WEEKDAYS_COUNT; i++) {
          const cell = document.createElement("td");
          const tmpDate = new Date(tmp);
          cell.className = V;
          cell.innerText = `${tmp.getDate()}`;
          cell.onclick = () => onClick(tmpDate);
          if (tmpDate < minDate || tmpDate > maxDate)
            cell.classList.add("is-disabled");
          else if (tmp.getMonth() !== curMon)
            cell.classList.add("is-diff-month");
          else if (tmp.getTime() === (selectedDate == null ? void 0 : selectedDate.getTime()))
            cell.classList.add(R);
          row.appendChild(cell);
          tmp.setDate(tmp.getDate() + 1);
        }
        datePicker_elements_default.contentTableTbody.appendChild(row);
      });
    },
    show() {
      visible = true;
      if (!datePicker_elements_default.datePicker.isConnected)
        getLayerElement("popover").appendChild(datePicker_elements_default.datePicker);
      datePicker_elements_default.datePicker.style.removeProperty("display");
      datePicker_elements_default.datePicker.setAttribute("data-for", uuid);
      clickOutsideHandler.create();
      escController.create();
      setTimeout(() => {
        datePicker_elements_default.datePicker.classList.add("is-visible");
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, datePicker_elements_default.datePicker);
      }, 0);
    },
    hide() {
      clickOutsideHandler.destroy();
      escController.destroy();
      if (disabledTodayTooltip) {
        disabledTodayTooltip.destroy();
        disabledTodayTooltip = null;
      }
      const hideHandler = (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        datePicker_elements_default.datePicker.removeEventListener("transitionend", hideHandler);
        if (uuid === datePicker_elements_default.datePicker.getAttribute("data-for")) {
          floatingCleanup();
          datePicker_elements_default.datePicker.remove();
        }
      };
      datePicker_elements_default.datePicker.addEventListener("transitionend", hideHandler);
      datePicker_elements_default.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  };
  const escController = createESCHideController(handler);
  return handler;
};

// src/js-components/datePicker/datePicker.ts
var convertToMomentFromStrOrDate = (defaultDate, format) => {
  if (defaultDate instanceof Date)
    return esm_default(defaultDate).startOf("D");
  else if (typeof defaultDate === "string")
    return esm_default(defaultDate, format);
  return esm_default(null);
};
var IRDatePicker = class extends IRComponent {
  constructor({
    div,
    defaultDate,
    format = i18n_default.datePicker.dateFormat,
    checkbox = false,
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
    this.div.classList.add(sr);
    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeHolder", this.format);
    this.input.classList.add(gr, "tnum-adj");
    this.button.className = pr;
    this.button.type = "button";
    this._minDate = minDate;
    this._maxDate = maxDate;
    if (onSelect)
      this.onSelect = onSelect;
    if (onChange)
      this.onChange = onChange;
    if (onCheckboxClick)
      this.onCheckboxClick = onCheckboxClick;
    if (checkbox) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(ar, br);
      checkboxLabel.className = nr;
      inputCheckbox.className = tr;
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
      this.input.value = esm_default(this.selectedDate).format(format);
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
      const dt = esm_default(this.input.value, this.format, true);
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
      this.input.value = esm_default(date).format(this.format);
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
var dialog = document.createElement("div");
var dialogWrapper = document.createElement("div");
var dialogContent = document.createElement("div");
var confirm = document.createElement("div");
var confirmContent = document.createElement("div");
var confirmIcon = document.createElement("i");
var confirmActions = document.createElement("div");
var buttonMap = {
  cancel: document.createElement("button"),
  ignore: document.createElement("button"),
  no: document.createElement("button"),
  ok: document.createElement("button"),
  retry: document.createElement("button"),
  stop: document.createElement("button"),
  yes: document.createElement("button")
};
var closeIcon = document.createElement("i");
var closeButton = document.createElement("button");
dialog.tabIndex = -1;
dialog.classList.add("ir-confirm", dialog_classNames_default.dialog["&"], z_index_classNames_default.zIndex.message);
dialogWrapper.className = dialog_classNames_default.dialogWrapper["&"];
dialogContent.className = dialog_classNames_default.dialogContent["&"];
confirm.className = confirm_classNames_default.confirm["&"];
confirmContent.className = confirm_classNames_default.confirmContent["&"];
confirmActions.className = confirm_classNames_default.confirmActions["&"];
Object.values(buttonMap).forEach((e) => e.classList.add(u));
buttonMap.yes.classList.add(z);
buttonMap.ok.classList.add(z);
buttonMap.retry.classList.add(m);
buttonMap.ignore.classList.add(B);
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
var elements = {
  dialog,
  confirmIcon,
  confirmContent,
  confirmActions,
  buttonMap,
  closeButton
};

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

// src/js-components/timePicker/timePicker.elements.ts
var import_lodash4 = __toESM(require_lodash(), 1);

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
var timePicker = document.createElement("div");
var panelWrapper = document.createElement("div");
var buttonPanel = document.createElement("div");
var panelType = ["period", "hour", "minute", "second"];
var panelList = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
var [periodPanel, hourPanel, minutePanel, secondPanel] = panelList;
timePicker.classList.add(timePicker_classNames_default.timePicker["&"], z_index_classNames_default.zIndex.popover);
import_lodash4.default.range(panelType.length).forEach((id) => {
  panelList[id].setAttribute("data-type", panelType[id]);
  panelList[id].className = timePicker_classNames_default.timePickerPanel["&"];
  panelWrapper.appendChild(panelList[id]);
});
panelWrapper.className = timePicker_classNames_default.timePickerPanelWrapper["&"];
buttonPanel.className = timePicker_classNames_default.timePickerButtonPanel["&"];
var nowButton = document.createElement("button");
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
import_lodash4.default.range(2).forEach(() => panelList[0].appendChild(createPanelItem("")));
import_lodash4.default.range(HOURS).forEach((hour) => panelList[1].appendChild(createPanelItem(`${hour}`)));
import_lodash4.default.range(MINUTES).forEach((minute) => panelList[2].appendChild(createPanelItem(`${minute}`)));
import_lodash4.default.range(SECONDS).forEach((second) => panelList[3].appendChild(createPanelItem(`${second}`)));
function updateI18n2() {
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
function getSelectedValueOnPanel(panel) {
  const selected = panel.querySelector(".is-selected");
  if (selected instanceof HTMLElement)
    return parseInt(selected.innerText || "0", 10);
  return 0;
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
var timePicker_elements_default = {
  timePicker,
  nowButton,
  secondPanel
};

// src/js-components/timePicker/timePicker.handler.ts
function createIRTimePickerHandler({ uuid, refElement, onChange, visibleSeconds }) {
  let visible = false;
  let floatingCleanup = () => void 0;
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
      updateI18n2();
      visible = true;
      escController.create();
      outsideHandler.create();
      timePicker_elements_default.nowButton.onclick = (ev) => {
        const value = esm_default().format("HH:mm:ss");
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
        timePicker_elements_default.secondPanel.style.removeProperty("display");
      } else
        timePicker_elements_default.secondPanel.style.setProperty("display", "none");
      if (!timePicker_elements_default.timePicker.isConnected)
        getLayerElement("popover").appendChild(timePicker_elements_default.timePicker);
      timePicker_elements_default.timePicker.style.removeProperty("display");
      timePicker_elements_default.timePicker.setAttribute("data-uuid", uuid);
      setTimeout(() => {
        timePicker_elements_default.timePicker.classList.add(timePicker_classNames_default.timePicker["is-visible"]);
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, timePicker_elements_default.timePicker);
      }, 0);
    },
    hide: () => {
      if (!visible)
        return;
      escController.destroy();
      outsideHandler.destroy();
      timePicker_elements_default.timePicker.classList.remove(timePicker_classNames_default.timePicker["is-visible"]);
      timePicker_elements_default.timePicker.addEventListener("transitionend", (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        if (uuid === timePicker_elements_default.timePicker.getAttribute("data-uuid")) {
          floatingCleanup();
          timePicker_elements_default.timePicker.remove();
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
    eventElements: [timePicker_elements_default.timePicker],
    clickOutsideFunc: () => handler.hide()
  });
  return handler;
}

// src/js-components/timePicker/timePicker.ts
var clsCheckbox = { checkbox: ar, checkboxWrapper: nr, checkboxInput: tr };
var clsInput = { input: sr, inputNative: gr, inputSuffix: pr, inputPrefix: br };
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
      onChange: (_5, value) => {
        const formatValue = esm_default(value, "HH:mm:ss", true).format(formatTime2);
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
      this.value = esm_default(args.value, formatTime2).format(formatTime2);
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

// src/js-components/command-manager/command-block.ts
var IRCommandBlock = class {
  constructor(label, ...commands) {
    this._label = label;
    this._commands = commands;
  }
  pushCommand(command) {
    this._commands.push(command);
  }
  execute() {
    const executedCommandList = [];
    try {
      let id = 0;
      while (id < this._commands.length) {
        const command = this._commands[id];
        if (!command.canExecute) {
          console.error(command);
          throw new Error("Can't execute this command");
        }
        command.execute();
        executedCommandList.push(command);
        ++id;
      }
    } catch (e) {
      console.error("execute error!", e);
      executedCommandList.reverse().forEach((cmd) => cmd.undo());
      return false;
    }
    return true;
  }
  undo() {
    const undoCommandList = [];
    try {
      let id = this._commands.length - 1;
      while (id >= 0) {
        const command = this._commands[id];
        if (!command.canUndo) {
          console.error(command);
          throw new Error("Can't undo this command");
        }
        command.undo();
        undoCommandList.push(command);
        --id;
      }
    } catch (e) {
      console.error("undo error!", e);
      undoCommandList.forEach((cmd) => cmd.execute());
      return false;
    }
    return true;
  }
  get label() {
    return this._label;
  }
};

// src/js-components/command-manager/command-manager.ts
var DEFAULT_STACK_LENGTH = 1024;
var IRCommandManager = class {
  constructor({
    context,
    undoStackLength = DEFAULT_STACK_LENGTH,
    disabled = false
  }) {
    this._isPreventedUIRecording = true;
    this._undoCommandStack = [];
    this._redoCommandStack = [];
    this._stackLength = undoStackLength;
    this._disabled = disabled;
    this._context = context;
  }
  /**
   * IRGrid Undo / Redo를 위한 동작 블럭을 녹화함
   * @description 하나의 동기적인 흐름 안에서만 사용할 것
   */
  doRecording(label = "", recordBlock) {
    if (this.isDisabled)
      return recordBlock();
    if (this.isRecording)
      throw new Error("Already doing record!");
    try {
      this._currentRecordingBlock = new IRCommandBlock(label);
      recordBlock();
      this.pushCommandBlock(this._currentRecordingBlock);
      return this._currentRecordingBlock;
    } catch (e) {
      console.error("Got an error during recording!");
      console.error(e);
    } finally {
      this._currentRecordingBlock = void 0;
    }
  }
  undo() {
    const popCommandBlock = this._undoCommandStack.pop();
    if (!popCommandBlock)
      return;
    if (popCommandBlock.undo()) {
      this._redoCommandStack.push(popCommandBlock);
      this._context.onUndo(popCommandBlock);
    }
  }
  redo() {
    const popCommandBlock = this._redoCommandStack.pop();
    if (!popCommandBlock)
      return;
    if (popCommandBlock.execute()) {
      this._undoCommandStack.push(popCommandBlock);
      this._context.onRedo(popCommandBlock);
    }
  }
  pushCommandBlock(commandBlock) {
    if (this.isDisabled)
      return;
    if (this._undoCommandStack.length >= this._stackLength)
      this._undoCommandStack.shift();
    this._undoCommandStack.push(commandBlock);
    this._redoCommandStack = [];
  }
  pushCommand(command) {
    if (!this._currentRecordingBlock)
      throw new Error("Not recording!");
    this._currentRecordingBlock.pushCommand(command);
  }
  clearCommands() {
    this._undoCommandStack = [];
    this._redoCommandStack = [];
  }
  pauseUIRecording() {
    this._isPreventedUIRecording = false;
  }
  startUIRecording() {
    this._isPreventedUIRecording = true;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get isRecording() {
    return this._currentRecordingBlock !== void 0;
  }
  get isPreventedUIRecording() {
    return this._isPreventedUIRecording;
  }
  get isDisabled() {
    return this._disabled;
  }
  get stackLength() {
    return this._stackLength;
  }
  set stackLength(value) {
    this._stackLength = value;
  }
  set isDisabled(value) {
    this._disabled = value;
  }
};

export {
  IRPageControl,
  IRVirtualDOM,
  renderDefaultTreeNode,
  IRTree,
  renderCheckboxTreeNode,
  setTreeDragDropReorder,
  createDropdownDiv,
  createDropdownItem,
  IRSelect,
  createDatePickerHandler,
  IRDatePicker,
  hasDisplayedConfirm,
  IRConfirm,
  IRTimePicker,
  IRCommandBlock,
  IRCommandManager
};
//# sourceMappingURL=chunk-CF6RNEVQ.js.map
