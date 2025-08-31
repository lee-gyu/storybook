import "./chunks/_init-BYWIiVrY.js";
import { j as Me, k as Ct, l as ge, m as Ge, b as nt, g as Pe, u as Nt, e as _t, n as kt } from "./chunks/floating-C8SHvpqf.js";
import { p as Oi, t as zi, h as Ai, d as Fi, q as Vi, r as Bi } from "./chunks/floating-C8SHvpqf.js";
import { al as oe, K as it, L as Oe, am as ve, a as O, O as be, an as K, ao as P, ap as vt, aq as bt, ar as Et, as as We, at as le, au as Rt, a4 as xt, F as yt, G as Lt, H as It, I as Tt, J as St, av as ye, aw as Ke, M as qe, ax as Xe } from "./chunks/css-COHHTvb1.js";
import { I as xe } from "./chunks/index-CtZXoe_l.js";
import { g as $i } from "./chunks/index-CtZXoe_l.js";
import { d as M, b as he, a as Y, c as Ht } from "./chunks/outside-D1z8pt7M.js";
import { e as Gi } from "./chunks/outside-D1z8pt7M.js";
import { u as Dt, l as ot } from "./chunks/utility-BmhiiI4V.js";
import { c as Ki, x as qi } from "./chunks/utility-BmhiiI4V.js";
import { c as Mt } from "./chunks/hook-flow-h5XBPdBp.js";
import { c as Pt } from "./chunks/clsx-OuTLNxxd.js";
import { a as Ee, g as Ot, d as zt, c as st } from "./chunks/rx-state-PaqZIPpP.js";
import { C as Yi, R as Ji, l as Zi, h as Qi, b as eo, k as to, f as no, i as io, e as oo, j as so, p as ro } from "./chunks/rx-state-PaqZIPpP.js";
import { r as fe } from "./chunks/command-manager-Bk_Y5EIz.js";
import { I as lo, f as co, e as ho, d as uo, a as po, b as go } from "./chunks/command-manager-Bk_Y5EIz.js";
import { i as te, d as Se } from "./chunks/index-Bmt0z1bM.js";
import { I as mo } from "./chunks/index-D7ei5o38.js";
import { a as Re } from "./chunks/asserts-CpwDJsre.js";
import { a as Co, c as No, d as _o, g as ko, b as vo } from "./chunks/image-Y3tFDdOU.js";
import { L as Eo, g as Ro, s as xo } from "./chunks/logger-C0JUwQkg.js";
class Ye {
  _height;
  _visible;
  _top;
  _rowId;
  _object;
  _isFreezed = !1;
  _cachedElement = null;
  _templateHelperObj = null;
  constructor({
    rowId: e,
    top: t,
    height: n,
    object: i,
    visible: o
  }) {
    this._rowId = e, this._top = t, this._height = n, this._object = i ?? null, this._visible = o;
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
    return this._visible === !1 ? this.top : this._top + this._height;
  }
  get template() {
    if (!this._templateHelperObj)
      throw new Error("Template helper object is not set");
    return this._templateHelperObj;
  }
  get hasTemplate() {
    return this._templateHelperObj !== null;
  }
  setTemplateHelper(e) {
    this._templateHelperObj = e;
  }
  updateObject(e, t = !0) {
    const n = this._object;
    this._object = e, t && this.onUpdatedObject(this, n, e);
  }
  updateRowStyles() {
    if (!this.isCachedElement) return;
    const e = this.getRowElement();
    e.style.height = `${this._height}px`;
  }
  setVisible(e) {
    this._visible = e, this.updateRowStyles();
  }
  setHeight(e) {
    this._height = e, this.updateRowStyles();
  }
  createRowElement() {
    const e = document.createElement("div");
    return this._cachedElement = e, e.classList.add(oe.row), this.updateRowIdTopAttr(), this.updateRowStyles(), e;
  }
  // 화면에 mount 될 때 호출
  onMounted(e, t) {
  }
  onUpdatedObject(e, t, n) {
  }
  /**
   * Cache 되지 않은 요소가 생성될 때 호출 함
   * @param element 신규 생성된 row 요소
   */
  onCreatedElement(e, t) {
  }
  getRowElement() {
    if (this._cachedElement)
      return this._cachedElement;
    const e = this.createRowElement();
    return this.onCreatedElement(this, e), this.updateFreezedStatus(), e;
  }
  updateFreezedStatus() {
    this.isCachedElement && (this._isFreezed ? this.getRowElement().dataset.isFreezed = "true" : delete this.getRowElement().dataset.isFreezed);
  }
  remove() {
    this.isCachedElement && this.getRowElement().remove();
  }
  freeze() {
    this._isFreezed || (this._isFreezed = !0, this.updateFreezedStatus());
  }
  unfreeze() {
    this._isFreezed && (this._isFreezed = !1, this.updateFreezedStatus());
  }
  updateRowIdTopAttr() {
    if (!this.isCachedElement) return;
    const e = this.getRowElement();
    e.dataset.rowId = `${this._rowId}`, e.style.top = `${this._top}px`;
  }
  setRowInfo(e, t) {
    this._rowId = e, this._top = t, this.updateRowIdTopAttr();
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
}
class At {
  _rows = [];
  _visibleRowList = [];
  _totalHeight = 0;
  _totalWidth = 0;
  _freezedHeight = 0;
  _headerRowsCount = 0;
  _hiddenHeaderRowsCount = 0;
  constructor() {
  }
  updateRowInfo(e) {
    let t = e;
    for (; t < this.rowCount; ) {
      const n = this._rows[t - 1];
      this._rows[t].setRowInfo(t, n?.bottom ?? 0), ++t;
    }
  }
  createRowsFragment(e, t) {
    const n = document.createDocumentFragment();
    for (let i = e; i <= t; i++) {
      const o = this._rows[i];
      if (o.visible) {
        const s = o.getRowElement();
        n.appendChild(s), o.onMounted(o, s);
      }
    }
    return n;
  }
  getRowByElement(e) {
    const t = e.dataset.rowId;
    if (!t)
      throw new Error("rowId not found in rowElement");
    return this.getRowById(+t);
  }
  updateVisibleRowList() {
    this._visibleRowList = this._rows.filter((e) => e.visible);
  }
  getRowByTop(e) {
    let t = 0, n = this._visibleRowList.length - 1;
    for (; t <= n; ) {
      const i = Math.floor((t + n) / 2), o = this._visibleRowList[i];
      if (e >= o.top && e <= o.bottom)
        return o;
      e < o.top ? n = i - 1 : t = i + 1;
    }
    return null;
  }
  getRowById(e) {
    const t = this._rows[e];
    if (!t)
      throw new Error(`rowId ${e} not found`);
    return t;
  }
  getRowByIdOrNull(e) {
    return this._rows[e] ?? null;
  }
  removeRows(e, t) {
    if (e < this._headerRowsCount || t >= this.rowCount)
      throw new Error("removing row id must be in between headerRow and rowCount");
    for (let n = e; n <= t; n++) {
      const i = this._rows[n];
      i.remove(), i.visible && (this._totalHeight -= i.height);
    }
    this._rows.splice(e, t - e + 1);
  }
  clearRows() {
    for (let e = this._headerRowsCount; e < this.rowCount; e++) {
      const t = this._rows[e];
      t.isConnectedInDOM && t.remove();
    }
    this._rows.length = this._headerRowsCount, this.updateVisibleRowList(), this._totalHeight = this._freezedHeight;
  }
  addRow(e, t, n, i = !0) {
    const o = new Ye({
      rowId: this._rows.length,
      height: e,
      top: this._totalHeight,
      object: n,
      visible: i
    });
    return this._rows.push(o), i && (this._visibleRowList.push(o), this._totalHeight += e), o;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(e, t, n, i, o = !0) {
    const s = this.insertRows(1, e, t, n, i && [i], o);
    return i && s[0].updateObject(i, !1), s[0];
  }
  insertRows(e, t, n, i, o, s = !0) {
    if (t < this._headerRowsCount || t > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const d = this._rows[t], a = [];
    let c = d ? d.top : this._totalHeight;
    for (let h = 0; h < e; ++h) {
      const w = t + h, N = typeof s == "function" ? s(h, w) : s;
      a.push(new Ye({
        rowId: w,
        height: n,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: c,
        visible: N,
        object: o?.[h] ?? void 0
      })), c += n, N && (this._totalHeight += n);
    }
    return d ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
  }
  setRowHeight(e, t) {
    const n = this.getRowById(e), i = n.height;
    n.setHeight(t), n.visible && (this._totalHeight += t - i, n.isFreezed && (this._freezedHeight += t - i));
  }
  moveRows(e, t, n) {
    if (e < this._headerRowsCount || t >= this.rowCount)
      throw new Error("moving row id must be in between headerRow and rowCount");
    if (n < this._headerRowsCount || n > this.rowCount)
      throw new Error("target row id must be in between headerRow and rowCount");
    this._rows.splice(
      n,
      0,
      ...this._rows.splice(e, t - e + 1)
    );
  }
  setRowVisible(e, t) {
    const n = this.getRowById(e);
    if (n.visible === t) return;
    const i = t ? 1 : -1, o = n.height * i;
    n.setVisible(t), this._totalHeight += o, e < this._headerRowsCount && (this._freezedHeight += o, this._hiddenHeaderRowsCount += i), n.visible || n.remove();
  }
  freezeRows(e) {
    if (e < 0)
      throw new Error("freezeRowsCount must be a positive number");
    if (e > this.rowCount)
      throw new Error("freezeRowsCount must be less than the total number of rows");
    this._freezedHeight = 0;
    for (let t = 0; t < this._headerRowsCount; t++)
      this._rows[t].unfreeze();
    for (let t = 0; t < e; t++)
      this._freezedHeight += this._rows[t].height, this._rows[t].freeze();
    this._headerRowsCount = e;
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
}
function Ft(r) {
  const e = document.createElement("div"), t = document.createElement("div");
  return t.className = oe.viewport, e.className = oe.viewport, t.setAttribute("data-freezed", ""), r?.className && (e.classList.add(r.className), t.classList.add(r.className)), r?.role && e.setAttribute("role", r.role), r?.tabIndex !== void 0 && e.setAttribute("tabindex", String(r.tabIndex)), {
    viewport: e,
    freezedViewport: t
  };
}
const Vt = 4;
function Bt() {
  return {
    rAFHandler: -1,
    startRowId: -1,
    scrollRow: -1,
    registeredTasks: /* @__PURE__ */ new Set(),
    afterRenderTasks: []
  };
}
class Ut extends xe {
  constructor(e) {
    super(e), this.args = e, this.contextElement.classList.add(oe.container), this._viewportElements = Ft(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new At(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? Me("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * Vt, this.initScrollEvent(), this.initRowCol();
  }
  _viewportElements;
  _itemManager;
  _debounceContext = Bt();
  _defaultRowHeight;
  _viewportGap;
  initScrollEvent() {
    this.addGlobalEventListener(this.contextElement, "scroll", (e) => {
      this.scheduleTasks("update-viewport"), this.doTasks();
    });
  }
  initRowCol() {
    for (let e = 0; e < this.args.rowCount; e++)
      this.addRow();
    this.args.headerRowCount && (this._itemManager.freezeRows(this.args.headerRowCount), this.updateFreezedViewport()), this.scheduleTasks("update-container-size", "update-viewport");
  }
  updateContainerSize() {
    const {
      freezedViewport: e,
      viewport: t
    } = this._viewportElements, {
      freezedHeight: n,
      totalHeight: i
    } = this._itemManager;
    e.style.height = `${n}px`, e.setAttribute("data-vd-row-count", `${this._itemManager.headerRowsCount}`), t.style.height = `${i}px`, t.setAttribute("data-vd-row-count", `${this._itemManager.rowCount}`);
  }
  get componentLabel() {
    return "virtual-dom";
  }
  get height() {
    return this._itemManager.totalHeight;
  }
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  get freezedHeight() {
    return this._itemManager.freezedHeight;
  }
  get clientHeight() {
    return this.contextElement.clientHeight;
  }
  get scrollBottom() {
    return this.scrollTop + this.clientHeight;
  }
  set scrollTop(e) {
    this.contextElement.scrollTop = e;
  }
  _scrollToRow(e) {
    const t = this._itemManager.getRowById(e), n = this.contextElement.scrollTop + this._itemManager.freezedHeight;
    t.top < n ? this.contextElement.scrollTo({ top: t.top - this._itemManager.freezedHeight }) : this.contextElement.scrollTo({ top: t.bottom - this.contextElement.clientHeight });
  }
  updateVisibleRow() {
    this._itemManager.updateVisibleRowList();
  }
  updateCascadeRowInfo() {
    this._debounceContext.startRowId !== -1 && this._itemManager.updateRowInfo(this._debounceContext.startRowId);
  }
  scheduleCascadeRowInfoUpdate(e) {
    this._debounceContext.startRowId === -1 ? this._debounceContext.startRowId = e : this._debounceContext.startRowId = Math.min(this._debounceContext.startRowId, e), this.scheduleTasks("update-row-cascade-info");
  }
  doTasks() {
    const { registeredTasks: e, afterRenderTasks: t } = this._debounceContext;
    try {
      e.has("update-row-cascade-info") && this.updateCascadeRowInfo(), e.has("update-visible-row") && this.updateVisibleRow(), e.has("update-container-size") && this.updateContainerSize(), e.has("update-viewport") && this.updateViewport(), t.forEach((n) => n());
    } finally {
      e.clear(), t.length = 0, this._debounceContext.rAFHandler = -1, this._debounceContext.startRowId = -1, this._debounceContext.scrollRow = -1;
    }
  }
  scheduleTasks(...e) {
    for (const t of e)
      this._debounceContext.registeredTasks.add(t);
    this._debounceContext.rAFHandler === -1 && (this._debounceContext.rAFHandler = requestAnimationFrame(this.doTasks.bind(this)));
  }
  unmountNotInViewport(e, t) {
    let n = this._viewportElements.viewport.firstElementChild;
    for (; n; ) {
      const i = this._itemManager.getRowByElement(n);
      n = n.nextElementSibling, i && (i.rowId < e || i.rowId > t) && i.isConnectedInDOM && i.remove();
    }
  }
  clearFreezedViewport() {
    const { freezedViewport: e } = this._viewportElements;
    let t = e.firstElementChild;
    for (; t; ) {
      const n = this._itemManager.getRowByElement(t);
      t = t.nextElementSibling, n.remove();
    }
  }
  updateFreezedViewport() {
    this.clearFreezedViewport();
    const { freezedViewport: e } = this._viewportElements, t = this._itemManager.createRowsFragment(0, this._itemManager.headerRowsCount - 1);
    e.append(t);
  }
  isElementMounted() {
    return this._viewportElements.viewport.isConnected;
  }
  // 현재 scroll에 맞는 요소 viewport 업데이트
  mountViewportRows() {
    if (this._itemManager.rowCount === 0 || this.isElementMounted() === !1) return;
    const e = this.contextElement.scrollTop, t = Math.max(0, e - this._viewportGap, this._itemManager.freezedHeight + 1), n = e + this.contextElement.clientHeight + this._viewportGap, i = this._itemManager.getRowByTop(t), o = this._itemManager.getRowByTop(n) ?? this._itemManager.lastRow;
    if (!i)
      return;
    this.unmountNotInViewport(i.rowId, o.rowId);
    const { viewport: s } = this._viewportElements;
    if (s.childElementCount === 0) {
      s.append(this._itemManager.createRowsFragment(i.rowId, o.rowId));
      return;
    }
    let d = null;
    for (let a = i.rowId; a <= o.rowId; ++a) {
      const c = this._itemManager.getRowById(a);
      if (c.visible) {
        if (!c.isConnectedInDOM) {
          const h = c.getRowElement();
          d ? d.getRowElement().after(h) : s.prepend(h), c.onMounted(c, h);
        }
        d = c;
      }
    }
  }
  updateViewport() {
    this.mountViewportRows(), this.generateScrollBarClass();
  }
  isInViewport(e) {
    const t = this._itemManager.getRowById(e);
    if (!t)
      return !1;
    const n = this.contextElement.scrollTop + this._itemManager.freezedHeight, i = this.contextElement.scrollTop + this.contextElement.clientHeight;
    return t.top >= n && t.bottom <= i;
  }
  moveRows(e, t, n) {
    this._itemManager.moveRows(e, t, n), this.scheduleCascadeRowInfoUpdate(Math.min(e, n)), this.scheduleTasks("update-visible-row", "update-viewport");
  }
  scrollToRow(e) {
    this.isInViewport(e) || (this._debounceContext.registeredTasks.has("update-container-size") ? this.afterRender(() => this._scrollToRow(e)) : this._scrollToRow(e));
  }
  lockMouseEvents() {
    this.contextElement.classList.add(oe.containerDragging);
  }
  unlockMouseEvents() {
    this.contextElement.classList.remove(oe.containerDragging);
  }
  getRowCount() {
    return this._itemManager.rowCount;
  }
  getRowById(e) {
    return this._itemManager.getRowById(e);
  }
  getRowByTopOrNull(e) {
    return this._itemManager.getRowByTop(e);
  }
  bindEventsToRow(e) {
    e.onMounted = (t, n) => this.onMountedRow(t, n), e.onCreatedElement = (t, n) => this.onCreatedRowElement(t, n), e.onUpdatedObject = (t, n, i) => this.onUpdatedRowObject(t, n, i);
  }
  insertRow(e, t, n, i = !0) {
    const o = this.insertRows(1, e, t, n ? [n] : void 0, i);
    return n && o[0] && o[0].updateObject(n, !1), o[0];
  }
  insertRows(e, t, n, i, o = !0) {
    const s = this._itemManager.insertRows(
      e,
      t,
      n ?? this._defaultRowHeight,
      this._defaultRowHeight,
      i,
      o
    );
    return s.forEach((d) => this.bindEventsToRow(d)), o && s[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(s[0].rowId + 1)), s;
  }
  *getRowIter() {
    yield* this._itemManager.getRowIter();
  }
  getRowVisible(e) {
    return this._itemManager.getRowById(e).visible;
  }
  addRow(e, t, n = !0) {
    const i = this._itemManager.addRow(e ?? this._defaultRowHeight, this._defaultRowHeight, t, n);
    return this.bindEventsToRow(i), n && this.scheduleTasks("update-container-size", "update-viewport"), i;
  }
  removeRow(e) {
    this.removeRows(e, e);
  }
  removeRows(e, t) {
    this._itemManager.removeRows(e, t), this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  updateRowsVisible(e, t, n) {
    const { freezedViewport: i } = this._viewportElements;
    for (let o = e; o <= t; ++o) {
      const s = this._itemManager.getRowById(o), d = n(s);
      this._itemManager.setRowVisible(o, d), d && o < this._itemManager.headerRowsCount && i.append(this._itemManager.getRowById(o).getRowElement());
    }
    this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  setRowsVisible(e, t, n) {
    this.updateRowsVisible(e, t, () => n);
  }
  setRowVisible(e, t) {
    this.setRowsVisible(e, e, t);
  }
  forceLayout() {
    this.doTasks();
  }
  forceLayoutIf(e) {
    this._debounceContext.registeredTasks.has(e) && this.doTasks();
  }
  setRowHeight(e, t) {
    this._itemManager.setRowHeight(e, t), this.scheduleTasks("update-container-size", "update-viewport"), this.scheduleCascadeRowInfoUpdate(e);
  }
  /**
   * 고정 행을 제외한 모든 행을 제거 합니다.
   */
  clearRows() {
    this._itemManager.clearRows(), this.scheduleTasks("update-container-size", "update-viewport");
  }
  onMountedRow(e, t) {
  }
  onUpdatedRowObject(e, t, n) {
  }
  onCreatedRowElement(e, t) {
  }
  afterRender(e) {
    this._debounceContext.afterRenderTasks.push(e), this.scheduleTasks();
  }
}
const G = "tree", T = {
  tree: {
    "&": G
  },
  treeList: {
    "&": `${G}__list`
  },
  treeListRoot: {
    "&": `${G}__list--root`
  },
  treeLabel: {
    "&": `${G}__label`
  },
  treeLabelText: {
    "&": `${G}__label-text`
  },
  treeItem: {
    "&": `${G}__item`,
    parent: `${G}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${G}__item-content`
  },
  treeIconFolder: {
    "&": `${G}__icon-folder`
  },
  treeIconExpand: {
    "&": `${G}__icon-expand`
  }
}, ze = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), n = document.createElement("span");
  return e.className = T.treeLabel["&"], n.className = T.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (i) => {
      i.iconClass ? (t.isConnected || n.insertAdjacentElement("beforebegin", t), t.className = `${T.treeIconFolder["&"]} ir-icon ${i.iconClass}`, i.iconColor ? t.style.setProperty("--ir-icon-foreground-color", i.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), i.caption ? (n.textContent = i.caption, e.appendChild(n)) : n.remove();
    }
  };
}, $t = "ir-icon--triangle-small-right";
class jt {
  liTreeItem;
  divTreeItemContent;
  nodeRenderContent;
  ulTreeList;
  iconExpand;
  data;
  _parentItem;
  children;
  _caption;
  _checked;
  _subChecked;
  _template;
  _iconClass;
  _iconColor;
  _disabled;
  _level;
  _uuid;
  constructor({
    parentItem: e,
    icon: t,
    caption: n,
    data: i,
    level: o,
    uuid: s,
    defaultChecked: d = !1,
    renderer: a = ze,
    disabled: c = !1,
    draggable: h
  }) {
    this.children = [], this._parentItem = e, this.data = i, this._level = o, this._iconClass = t, this._caption = n, this._template = a(this), this._checked = d, this._subChecked = d, this._disabled = c, this._uuid = s, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(T.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = M(this.liTreeItem, "div", T.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(T.treeList["&"]), this.iconExpand = M(this.divTreeItemContent, "i", T.treeIconExpand["&"], "ir-icon", $t), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (w) => this.onDragStart(w)), this.divTreeItemContent.addEventListener("dragenter", (w) => this.onDragOver(w) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (w) => this.onDragOver(w) && w.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (w) => this.onDragEnd(w)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (w) => {
      try {
        this.onDrop(w);
      } finally {
        this.clearDragging();
      }
    }), h && this.divTreeItemContent.setAttribute("draggable", "true");
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
    return this.liTreeItem.parentElement ? Array.prototype.indexOf.call(this.liTreeItem.parentElement.children, this.liTreeItem) : -1;
  }
  get level() {
    return this._level;
  }
  set level(e) {
    this._level = e, this.divTreeItemContent.style.setProperty("--ir-tree-node-level", e.toString());
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
    return this.liTreeItem.classList.contains(T.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((e) => e.checked || e.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(T.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(T.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(e) {
    if (e === this._parentItem) return;
    const t = this._parentItem, n = e;
    t && t.removeChildNode(this), n && n.addNode(this), this._parentItem = n;
  }
  set caption(e) {
    this._caption = e, this.render();
  }
  set disabled(e) {
    this._disabled !== e && (this._disabled = e, this._disabled ? this.liTreeItem.classList.add("is-disabled") : this.liTreeItem.classList.remove("is-disabled"));
  }
  set checked(e) {
    this._checked = e, this.render();
  }
  set iconClass(e) {
    this._iconClass = e, this.render();
  }
  set iconColor(e) {
    this._iconColor = e, this.render();
  }
  set hasChildren(e) {
    e ? this.liTreeItem.classList.add(T.treeItem.parent) : this.liTreeItem.classList.remove(T.treeItem.parent);
  }
  removeItems() {
    [...this.children].forEach((e) => e.delete());
  }
  addNode(e) {
    this.children.push(e), this.hasChildren || (this.hasChildren = !0);
  }
  getTreeNodeKey() {
    const e = [this.order];
    let t = this.parentItem;
    for (; t; )
      e.push(t.order), t = t.parentItem;
    return e.reverse();
  }
  updateCheckedWithPropagation(e) {
    this.checked = e, this.children.forEach((t) => t.updateCheckedWithPropagation(e));
  }
  updateCheckedStatus() {
    this.checked = this.children.every((e) => e.checked), this.parentItem?.updateCheckedStatus();
  }
  updateSubCheckedStatus() {
    this._subChecked = this.hasCheckedChildren;
  }
  delete() {
    this.liTreeItem.remove(), this.emitDeleteRecursive(), this._parentItem && this._parentItem.removeChildNode(this);
  }
  collapse() {
    this.hasChildren && this.expanded && this.onCollapsing(this) && (this.liTreeItem.classList.remove(T.treeItem["is-expanded"]), this.ulTreeList.remove(), this.onCollapse(this));
  }
  scrollIntoView(e = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(e);
  }
  expand() {
    this.hasChildren && (this.expanded || this.onExpanding(this) && (this.liTreeItem.classList.add(T.treeItem["is-expanded"]), this.liTreeItem.appendChild(this.ulTreeList), this.onExpand(this)));
  }
  toggle() {
    this.liTreeItem.classList.contains(T.treeItem["is-expanded"]) ? this.collapse() : this.expand();
  }
  select() {
    this.selected || (this.liTreeItem.classList.add(T.treeItem["is-selected"]), this.onSelect(this));
  }
  release() {
    this.selected && (this.liTreeItem.classList.remove(T.treeItem["is-selected"]), this.onRelease(this));
  }
  render() {
    this._template.update(this), this.onRender(this._template.template);
  }
  /**
   * Drag Event
   */
  onDragStart(e) {
  }
  onDrop(e) {
  }
  onDragEnd(e) {
  }
  onDragOver(e) {
    return !1;
  }
  /**
   * Object Events
   */
  onSelect(e) {
  }
  onRelease(e) {
  }
  onRemove(e) {
  }
  onExpanding(e) {
    return !0;
  }
  onExpand(e) {
  }
  onRender(e) {
  }
  onCollapsing(e) {
    return !0;
  }
  onCollapse(e) {
  }
  /**
   * 현재 자식 배열에서 해당 node 제거
   */
  removeChildNode(e) {
    const t = this.children.indexOf(e);
    if (t === -1)
      throw new Error("there is not the node");
    this.children.splice(t, 1), this.children.length === 0 && (this.hasChildren = !1, this.collapse());
  }
  emitDeleteRecursive() {
    this.children.forEach((e) => e.emitDeleteRecursive()), this.onRemove(this);
  }
  clearDragging() {
    this.divTreeItemContent.classList.remove("is-dragging");
  }
}
function Gt(r) {
  const t = [{ list: r.filter((i) => !i.parentItem), index: 0 }], n = [];
  if (r.length === 0) return n;
  for (; t.length; ) {
    const i = t[t.length - 1], { index: o, list: s } = i, d = s[o], { items: a, isDisabled: c } = d;
    c || n.push(d), ++i.index, i.index === s.length && t.pop(), d.expanded && a.length > 0 && t.push({
      index: 0,
      list: a
    });
  }
  return n;
}
function Wt(r, e) {
  let t = null, n = [], i = !1;
  const o = {
    ArrowUp: a,
    ArrowDown: c,
    ArrowLeft: w,
    ArrowRight: h,
    " ": N
  };
  return r.addGlobalEventListener(e, "focus", () => {
    t && _(t, !1);
  }), r.addGlobalEventListener(e, "blur", () => {
    E();
  }), r.addGlobalEventListener(e, "keydown", (x) => {
    o[x.key] && (o[x.key](), x.preventDefault());
  }), {
    updateTreeVisibleInfo: s,
    setFocusNode: _
  };
  function s() {
    i = !0;
  }
  function d() {
    return i && (n = Gt(r.getOrderedNodes()), i = !1), n;
  }
  function a() {
    const x = t, I = d();
    if (x === null) {
      _(I[0]);
      return;
    }
    const H = I.findIndex((f) => f.uuid === x.uuid), p = I[H - 1];
    p && _(p);
  }
  function c() {
    const x = t, I = d();
    if (x === null) {
      _(I[0]);
      return;
    }
    const H = I.findIndex((f) => f.uuid === x.uuid), p = I[H + 1];
    p && _(p);
  }
  function h() {
    t !== null && t.items.length !== 0 && (t.expanded && !t.items[0].isDisabled ? _(t.items[0]) : t.expand());
  }
  function w() {
    t != null && (t.expanded ? t.collapse() : t.parentItem && _(t.parentItem));
  }
  function N() {
    t && t.select();
  }
  function _(x, I = !0) {
    E(), t = x, t.liTreeItem.classList.add("is-focus"), I && x.scrollIntoView();
  }
  function E() {
    t && t.liTreeItem.classList.remove("is-focus");
  }
}
class ki extends xe {
  _keyboardInteraction;
  rootElement;
  nodes;
  selectedNode;
  renderer;
  _nodeDraggable;
  _nodeMap = /* @__PURE__ */ new Map();
  constructor({
    contextElement: e,
    renderer: t = ze,
    nodeDraggable: n = !0,
    enabledKeyboard: i = !0
  }) {
    super({ contextElement: e }), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = n, e.classList.add(T.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), i && (this._keyboardInteraction = Wt(this, e)), n === !1 && e.setAttribute("draggable", "false"), this.rootElement = M(e, "ul", T.treeList["&"], T.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (o) => {
      if (o.preventDefault(), !(o.target instanceof HTMLElement)) return;
      const s = o.target.closest(`.${T.treeItem["&"]}`), d = s ? this.findNodeByUUID(s.dataset.uuid ?? "") : null;
      d?.select(), this.onContextMenu(o, d);
    });
  }
  get componentLabel() {
    return "tree-legacy";
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
  set selected(e) {
    this.selected !== e && (this.selectedNode?.release(), this.selectedNode = e, this.onChanged(e), e && (e.select(), this.onSelectNode(e), this._keyboardInteraction?.setFocusNode(e, !1)));
  }
  onDblClick(e) {
    e.toggle();
  }
  onToggleClick(e) {
    e.toggle();
  }
  onLabelClick(e) {
    this.selected = e;
  }
  onSelectNode(e) {
  }
  onReleaseNode(e) {
  }
  onRemoveNode(e) {
  }
  onChanged(e) {
  }
  onExpanding(e) {
    return !0;
  }
  onExpand(e) {
  }
  onCollapsing(e) {
    return !0;
  }
  onCollapse(e) {
  }
  onDragStartNode(e, t) {
    t.dataTransfer && (t.dataTransfer.setData("application/json", JSON.stringify(e.data)), t.dataTransfer.dropEffect = "copy");
  }
  onDragOverOnNode(e, t) {
    return !1;
  }
  onDropOnNode(e, t) {
  }
  onDragEndNode(e, t) {
  }
  onRenderNode(e, t) {
  }
  onNodeMoved(e, t) {
  }
  onContextMenu(e, t) {
  }
  /**
   * left가 작으면 true 리턴
   * TODO 추후 IRTree에서 분리 필요 (class 로직과 상관 없음)
   */
  compareNodeOrderKey(e, t) {
    const n = Math.max(e.length, t.length);
    for (let i = 0; i < n; i++) {
      const o = e[i], s = t[i];
      if (o === void 0) return !0;
      if (s === void 0) return !1;
      if (o < s) return !0;
      if (o > s) return !1;
    }
    throw new Error("same key error!");
  }
  getOrderedNodes() {
    return this.items.sort((e, t) => this.compareNodeOrderKey(e.getTreeNodeKey(), t.getTreeNodeKey()) ? -1 : 1);
  }
  removeNodeByUUID(e) {
    this.findNodeByUUID(e).delete();
  }
  selectNodeByUUID(e) {
    this.findNodeByUUID(e).select();
  }
  findNodeByUUID(e) {
    const t = this._nodeMap.get(e);
    if (!t) throw new Error(`not found node uuid: ${e}`);
    return t;
  }
  addChild(e, t, n, i = void 0) {
    const o = Dt();
    if (this._nodeMap.has(o)) throw new Error("UUID already exists");
    const s = new jt({
      parentItem: e,
      caption: t,
      data: n,
      level: e ? e.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: e?.checked,
      draggable: this.nodeDraggable,
      uuid: o
    });
    this._nodeMap.set(s.uuid, s), e && e.addNode(s), this.nodes.push(s), s.divTreeItemContent.ondblclick = (a) => {
      a.target.classList.contains("checkbox__wrapper") || this.onDblClick(s);
    }, s.divTreeItemContent.onclick = (a) => {
      this.onLabelClick(s);
    }, s.iconExpand.onclick = () => this.onToggleClick(s), s.onSelect = () => this.selected = s, s.onRelease = (a) => {
      this.selectedNode = null, this.onReleaseNode(a);
    }, s.onRemove = () => {
      this.nodes.indexOf(s) !== -1 && this.nodes.splice(this.nodes.indexOf(s), 1), this.onRemoveNode(s), this._nodeMap.delete(s.uuid), this._keyboardInteraction?.updateTreeVisibleInfo();
    }, s.onExpanding = () => this.onExpanding(s), s.onExpand = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onExpand(s);
    }, s.onCollapsing = () => this.onCollapsing(s), s.onCollapse = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onCollapse(s);
    }, s.onDragStart = (a) => this.onDragStartNode(s, a), s.onDrop = (a) => this.onDropOnNode(s, a), s.onDragOver = (a) => this.onDragOverOnNode(s, a), s.onDragEnd = (a) => this.onDragEndNode(s, a), s.onRender = (a) => this.onRenderNode(s, a), s.render(), this._keyboardInteraction?.updateTreeVisibleInfo();
    const d = e ? e.ulTreeList : this.rootElement;
    return i === void 0 ? d.appendChild(s.liTreeItem) : i >= d.children.length ? d.insertAdjacentElement("beforeend", s.liTreeItem) : d.children[i].insertAdjacentElement("beforebegin", s.liTreeItem), s;
  }
  moveNode(e, t, n) {
    if (e === t.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const i = e.order;
    e.parentItem = t.parentItem, t.parentItem === null ? e.level = 0 : e.level = t.parentItem.level + 1, t.liTreeItem.insertAdjacentElement(n ? "beforebegin" : "afterend", e.liTreeItem), this.onNodeMoved(e, i);
  }
  selectNode(e) {
    if (!this.nodes.includes(e))
      throw new Error("Can't select the node because it's not included");
    this.selected = e;
  }
  clear() {
    this.selectedNode = null, this.rootElement.innerHTML = "", this.nodes.splice(0, this.nodes.length), this._nodeMap.clear();
  }
  expandAll() {
    this.nodes.forEach((e) => e.expand());
  }
  collapseAll() {
    this.nodes.forEach((e) => e.collapse());
  }
  expandTo(e) {
    let t = e._parentItem;
    for (; t; )
      t.expand(), t = t._parentItem;
  }
  getDropNode(e) {
    const t = Ct(
      e.target,
      this.contextElement,
      `.${T.treeLabel["&"]}`
    );
    return t !== null ? t.parentElement?.parentElement : null;
  }
  getNodeByOffsetTopOrNull(e) {
    return null;
  }
}
const vi = ({ onCheck: r }) => (e) => {
  const t = ze(), n = document.createElement("label"), i = document.createElement("input");
  return i.type = "checkbox", n.classList.add(it), i.classList.add(Oe), n.appendChild(i), t.template.insertAdjacentElement("afterbegin", n), i.addEventListener("click", () => {
    e.updateCheckedWithPropagation(i.checked), e.parentItem?.updateCheckedStatus(), i.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (o) => {
      t.update(o), o.checked !== i.checked && (i.checked = o.checked), o.parentItem?.updateCheckedStatus(), o.updateSubCheckedStatus(), i.dataset.state = o.subChecked ? "sub-checked" : "";
    }
  };
}, Kt = 16, bi = (r) => {
  let e = null, t = null;
  const n = () => {
    t && (t.divTreeItemContent.classList.remove("is-top"), t.divTreeItemContent.classList.remove("is-bottom")), t = null;
  };
  r.onDragStartNode = (i, o) => {
    o.dataTransfer && (o.dataTransfer.dropEffect = "move", e = i);
  }, r.onDragOverOnNode = (i, o) => {
    if (e === i)
      return !1;
    let s = i._parentItem;
    for (; s !== null; ) {
      if (s === e) return !1;
      s = s._parentItem;
    }
    return n(), i.divTreeItemContent.classList.add(o.offsetY < Kt ? "is-top" : "is-bottom"), t = i, !0;
  }, r.onDropOnNode = (i) => {
    if (!e) throw new Error("No start dragging node!");
    r.moveNode(
      e,
      i,
      i.divTreeItemContent.classList.contains("is-top")
    );
  }, r.onDragEndNode = () => {
    n();
  };
};
class qt {
  _nodeLinkerMap = /* @__PURE__ */ new Map();
  _firstRootNode = null;
  _lastRootNode = null;
  _rootNodeCount = 0;
  _nodeCount = 0;
  throwErrorIfExistsKey(e) {
    if (this._nodeLinkerMap.has(e))
      throw new Error(`NodeLinker: NodeLink already exists for key: ${e}`);
  }
  insertAsFirstChild(e, t, n) {
    const i = this.getNodeLink(e), o = i.getFirstChildNode();
    o === null ? this.addChildNode(e, t, n) : this.insertBeforeChildNode(i.key, t, n, o);
  }
  insertBeforeChildNode(e, t, n, i) {
    this.throwErrorIfExistsKey(t);
    const o = this.getNodeLink(e), s = new ie({
      data: n,
      level: o.getNodeLevel() + 1,
      key: t,
      parentNode: o,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return o.insertBeforeChildNode(s, i), this.addLinkMap(t, s, !1), s;
  }
  insertAfterChildNode(e, t, n, i) {
    this.throwErrorIfExistsKey(t);
    const o = this.getNodeLink(e), s = new ie({
      data: n,
      level: o.getNodeLevel() + 1,
      key: t,
      parentNode: o,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return o.insertAfterChildNode(s, i), this.addLinkMap(t, s, !1), s;
  }
  insertAfterRootNode(e, t, n) {
    this.throwErrorIfExistsKey(e);
    const i = n.getNextNode(), o = new ie({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: n,
      nextNode: i,
      firstChildNode: null,
      lastChildNode: null
    });
    return i?.setPrevNode(o), n.setNextNode(o), n === this._lastRootNode && this.setLastRootNode(o), this.addLinkMap(e, o, !0), o;
  }
  insertBeforeRootNode(e, t, n) {
    this.throwErrorIfExistsKey(e);
    const i = n.getPrevNode(), o = new ie({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: i,
      nextNode: n,
      firstChildNode: null,
      lastChildNode: null
    });
    return i?.setNextNode(o), n.setPrevNode(o), n === this._firstRootNode && this.setFirstRootNode(o), this.addLinkMap(e, o, !0), o;
  }
  addLinkMap(e, t, n) {
    this._nodeLinkerMap.set(e, t), n && ++this._rootNodeCount, ++this._nodeCount;
  }
  /**
   * 자식 노드 삽입 시, 삽입 할 노드를 찾아주는 함수
   */
  findInsertChildPositionNode(e) {
    let t = e;
    for (; t; ) {
      const n = t.getNextNode();
      if (n)
        return n;
      t = t.getParentNode();
    }
    return t;
  }
  addRootNode(e, t) {
    this.throwErrorIfExistsKey(e);
    const n = new ie({
      key: e,
      data: t,
      level: 0,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      parentNode: null,
      prevNode: null
    });
    return this._lastRootNode == null ? (this.setFirstRootNode(n), this.setLastRootNode(n)) : (this._lastRootNode.setNextNode(n), n.setPrevNode(this._lastRootNode), this._lastRootNode = n), this.addLinkMap(e, n, !0), n;
  }
  createNodeLink(e, t, n, i) {
    return n === void 0 ? i === void 0 ? this.addRootNode(t, e) : this.insertBeforeRootNode(t, e, this.getNodeLink(i)) : i === void 0 ? this.addChildNode(n, t, e) : this.insertBeforeChildNode(n, t, e, this.getNodeLink(i));
  }
  addChildNode(e, t, n) {
    this.throwErrorIfExistsKey(t);
    const i = this.getNodeLink(e), o = new ie({
      key: t,
      data: n,
      level: i.getNodeLevel() + 1,
      parentNode: i,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return i.addChildNode(o), this.addLinkMap(t, o, !1), o;
  }
  clearChildNodes(e) {
    const t = this.getNodeLink(e);
    this.travelChildNodes(e, (n) => this.deleteNodeInMap(n.key)), t.setFirstChildNode(null), t.setLastChildNode(null);
  }
  travelAllNodes(e, t) {
    const n = this._firstRootNode;
    if (n !== null)
      return this.travelNodes(n, e, t);
  }
  /**
   * startNodeLink부터, 자식 다음 형제 노드 모두 순회
   * rootFirstNode를 넣으면, 모든 노드를 순회
   */
  async travelNodes(e, t, n) {
    const i = [{
      link: e,
      level: e.getNodeLevel()
    }];
    let o = i.pop();
    for (; o; ) {
      const { link: s, level: d } = o, a = s.getNextNode(), c = s.getFirstChildNode(), h = t(s, d);
      h instanceof Promise && await h, a && i.push({ link: a, level: d }), c && (n === void 0 || await n(s, d)) && i.push({ link: c, level: d + 1 }), o = i.pop();
    }
  }
  travelChildNodes(e, t, n) {
    const o = this.getNodeLink(e).getFirstChildNode();
    if (o !== null)
      return this.travelNodes(o, t, n);
  }
  getChildNodeCount(e) {
    let t = 0;
    return this.travelChildNodes(e, () => void ++t), t;
  }
  hasNode(e) {
    return this._nodeLinkerMap.has(e);
  }
  clear() {
    this.setFirstRootNode(null), this.setLastRootNode(null), this._rootNodeCount = 0, this._nodeCount = 0, this._nodeLinkerMap.clear();
  }
  setFirstRootNode(e) {
    this._firstRootNode = e;
  }
  setLastRootNode(e) {
    this._lastRootNode = e;
  }
  deleteNodeInMap(e) {
    --this._nodeCount, this._nodeLinkerMap.delete(e);
  }
  removeNode(e) {
    const t = this.getNodeLink(e), n = t.getPrevNode(), i = t.getNextNode();
    n?.setNextNode(i), i?.setPrevNode(n), t === this._firstRootNode && this.setFirstRootNode(i), t === this._lastRootNode && this.setLastRootNode(n), this.travelChildNodes(e, (s) => this.deleteNodeInMap(s.key)), this.deleteNodeInMap(e);
    const o = t.getParentNode();
    o ? o.removeChildNode(t) : --this._rootNodeCount;
  }
  getNodeLinkOrNull(e) {
    return this._nodeLinkerMap.get(e) ?? null;
  }
  getNodeLink(e) {
    const t = this.getNodeLinkOrNull(e);
    if (t == null) throw new Error(`NodeLinker: NodeLink not found for key: ${e}`);
    return t;
  }
  getFirstRootNode() {
    return this._firstRootNode;
  }
  getLastRootNode() {
    return this._lastRootNode;
  }
  getRootNodeCount() {
    return this._rootNodeCount;
  }
  getNodeCount() {
    return this._nodeCount;
  }
}
class ie {
  constructor(e) {
    this._args = e;
  }
  get data() {
    return this._args.data;
  }
  setNodeLevel(e) {
    this._args.level = e;
  }
  getNodeLevel() {
    return this._args.level;
  }
  getNextNode() {
    return this._args.nextNode;
  }
  getPrevNode() {
    return this._args.prevNode;
  }
  getFirstChildNode() {
    return this._args.firstChildNode;
  }
  hasChild() {
    return this.getFirstChildNode() !== null;
  }
  /**
   * 현재 노드가 parentNodeKey의 자손인지 확인
   */
  isProgenyNode(e) {
    let t = this.getParentNode();
    for (; t; ) {
      if (t.key === e) return !0;
      t = t.getParentNode();
    }
    return !1;
  }
  getLastChildNode() {
    return this._args.lastChildNode;
  }
  getParentNode() {
    return this._args.parentNode;
  }
  isRootNode() {
    return this.getParentNode() == null;
  }
  setPrevNode(e) {
    this._args.prevNode = e;
  }
  setNextNode(e) {
    this._args.nextNode = e;
  }
  setParentNode(e) {
    this._args.parentNode = e;
  }
  setFirstChildNode(e) {
    this._args.firstChildNode = e;
  }
  setLastChildNode(e) {
    this._args.lastChildNode = e;
  }
  removeChildNode(e) {
    if (e.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    const t = e.getPrevNode(), n = e.getNextNode();
    t?.setNextNode(n), n?.setPrevNode(t), e === this.getFirstChildNode() && this.setFirstChildNode(n), e === this.getLastChildNode() && this.setLastChildNode(t), e.setParentNode(null);
  }
  insertAfterChildNode(e, t) {
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getNextNode() && e.setNextNode(t.getNextNode()), e.setPrevNode(t), t.getNextNode()?.setPrevNode(e), t.setNextNode(e), this.getLastChildNode() === t && this.setLastChildNode(e);
  }
  insertBeforeChildNode(e, t) {
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getPrevNode() && e.setPrevNode(t.getPrevNode()), e.setNextNode(t), t.getPrevNode()?.setNextNode(e), t.setPrevNode(e), this.getFirstChildNode() === t && this.setFirstChildNode(e);
  }
  addChildNode(e) {
    e.setParentNode(this);
    const t = this.getLastChildNode();
    t == null ? (this.setFirstChildNode(e), this.setLastChildNode(e)) : (t.setNextNode(e), e.setPrevNode(t), this.setLastChildNode(e));
  }
  clearChildNodes() {
    this.setFirstChildNode(null), this.setLastChildNode(null);
  }
  get key() {
    return this._args.key;
  }
}
class Xt {
  constructor(e) {
    this.args = e, this._nodeData = { ...e.nodeData }, this._nodeLinker = e.nodeLinker;
  }
  _nodeData;
  _nodeLinker;
  _selected = !1;
  get level() {
    return this.getNodeLink().getNodeLevel();
  }
  get caption() {
    return this.data.caption ?? "";
  }
  get key() {
    return this.data.key;
  }
  get icon() {
    return this.data.icon;
  }
  get hasCheckbox() {
    return this.data.hasCheckbox !== !1;
  }
  get data() {
    return this._nodeData;
  }
  get object() {
    return this.data.object;
  }
  get selected() {
    return this._selected === !0;
  }
  get disabled() {
    return this.data.disabled === !0;
  }
  get expanded() {
    return this.data.expanded === !0;
  }
  get expandable() {
    return this.data.expandable !== !1 && (this.data.expandable === !0 || this.hasChild());
  }
  get checked() {
    return this.data.checked === !0;
  }
  get subChecked() {
    return this.data.subChecked === !0;
  }
  get iconColor() {
    return this.data.iconColor;
  }
  get hook() {
    return this.args.hook;
  }
  isRootNode() {
    return this.getNodeLink().getParentNode() === null;
  }
  getNodeLink() {
    return this._nodeLinker.getNodeLink(this.key);
  }
  hasChild() {
    return this.getNodeLink().getFirstChildNode() != null;
  }
  /**
   * 연결된 모든 부모 노드가 확장되어 있으면 true 반환
   */
  isVisible() {
    let e = this.getNodeLink().getParentNode();
    for (; e; ) {
      if (e.data.node.expanded === !1) return !1;
      e = e.getParentNode();
    }
    return !0;
  }
  setCaption(e) {
    return this.updateNodeState({
      caption: e
    });
  }
  getColumnText(e) {
    return e === 0 ? this.caption : this.data.columns?.[e - 1] ?? "";
  }
  serialize() {
    const e = this.getNodeLink(), t = {
      ...this.data
    }, n = e.getFirstChildNode();
    if (n) {
      const i = [];
      let o = n;
      for (; o; )
        i.push(o.data.node.serialize()), o = o.getNextNode();
      t.children = i;
    }
    return t;
  }
  setColumnText(e, t) {
    if (e === 0)
      return this.setCaption(t);
    {
      const n = this.data.columns ?? [];
      return n[e - 1] = t, this.updateNodeState({
        columns: n
      });
    }
  }
  async select() {
    this.selected || (this._selected = !0, await this.updateNodeState(), await this.hook.emit("nodeSelect", [this]));
  }
  selectToggle() {
    return this.selected ? this.release() : this.select();
  }
  async addSelect() {
    this.selected || (this._selected = !0, await this.hook.emit("nodeUpdated", [this]), await this.hook.emit("nodeAddSelect", [this]));
  }
  toggleExpand() {
    return this.expanded ? this.collapse() : this.expand();
  }
  async expand() {
    this.expanded || this.expandable === !1 || await this.hook.emit("nodeExpanding", [this]) && (await this.updateNodeState({ expanded: !0 }), await this.hook.emit("nodeExpanded", [this]));
  }
  async collapse() {
    this.expanded !== !1 && await this.hook.emit("nodeCollapsing", [this]) && (await this.updateNodeState({ expanded: !1 }), await this.hook.emit("nodeCollapsed", [this]));
  }
  multiSelectToggle() {
    return this.selected ? this.release() : this.addSelect();
  }
  async checkToggle() {
    await this.changeCheck(!this.checked);
  }
  async changeCheck(e, t = !0) {
    this.checked !== e && await this.hook.emit("nodeChangeChecking", [this, e]) && (await this.updateNodeState({ checked: e }), t && await this.hook.emit("nodeChangeChecked", [this, e]));
  }
  async release() {
    this.selected && (this._selected = !1, await this.updateNodeState(), await this.hook.emit("nodeRelease", [this]));
  }
  async updateNodeState(e) {
    e && Object.assign(this.data, e), await this.hook.emit("nodeUpdated", [this]);
  }
}
class rt extends xe {
  constructor(e) {
    super({
      contextElement: e.contextElement ?? document.createElement("div")
    }), this._hookArgs = e, this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
  _hook = Mt();
  _pluginList;
  #e = /* @__PURE__ */ new Map();
  get hook() {
    return this._hook;
  }
  get pluginList() {
    return this._pluginList;
  }
  async runPauseEmitContext(e, t) {
    try {
      e.forEach((i) => this.hook.pauseEmit(i));
      const n = t();
      n instanceof Promise && await n;
    } finally {
      e.forEach((n) => this.hook.resumeEmit(n));
    }
  }
  emitHook(e, t) {
    return this._hook.emit(e, t);
  }
  onInitPlugins() {
    this._hookArgs.plugins?.forEach((e) => this.addPlugin(e));
  }
  addPlugin(e) {
    const t = Object.getPrototypeOf(e);
    if (this.#e.has(t))
      throw new Error("this plugin is already exists.");
    e.mount(this, this._hook, this.contextElement), this.#e.set(t, e);
  }
  removePlugin(e) {
    const t = Object.getPrototypeOf(e);
    if (!(this.getPluginOrNull(t) !== null)) throw new Error("plugin is not exists.");
    this.#e.delete(t), e.unmount();
  }
  getPluginOrNull(e) {
    return this.#e.get(e) ?? null;
  }
  addHook(e, t) {
    this._hook.addHook(e, t);
  }
  setHook(e, t) {
    this._hook.setHook(e, t);
  }
  removeHook(e, t) {
    this._hook.removeHook(e, t);
  }
  setBeginHook(e, t) {
    this._hook.setBeginHook(e, t);
  }
  setEndHook(e, t) {
    this._hook.setEndHook(e, t);
  }
  clearHooks(e) {
    this._hook.clearHooks(e);
  }
  clearBeginHooks(e) {
    this._hook.clearBeginHooks(e);
  }
  clearEndHooks(e) {
    this._hook.clearEndHooks(e);
  }
  /**
   * @deprecated use 'mountElement' instead.
   */
  get element() {
    return this.contextElement;
  }
  mountElement(e) {
    e.appendChild(this.contextElement);
  }
}
class Yt {
  _unmountTasks = [];
  addUnmountTask(e) {
    this._unmountTasks.push(e);
  }
  addPluginHook(e, t, n) {
    e.addHook(t, n), this._unmountTasks.push(() => e.removeHook(t, n));
  }
  unmount() {
    this._unmountTasks.forEach((e) => e()), this._unmountTasks.length = 0;
  }
}
class se extends Yt {
}
class Jt extends se {
  mount(e, t) {
    const n = {
      async ArrowLeft() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        a && (a.expanded === !0 ? await a.collapse() : await s(a.getNodeLink().getParentNode()?.data.node));
      },
      async ArrowRight() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        !a || !a.expandable || (a.expanded === !1 ? await a.expand() : await s(a.getNodeLink().getFirstChildNode()?.data.node));
      },
      async ArrowUp() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const c = e.getSelectedNodes().reduce((w, N) => e.getNodeRowId(N.key) < e.getNodeRowId(w.key) ? N : w, a), h = c.getNodeLink().getPrevNode();
        h ? await s(o(h)) : await s(c.getNodeLink().getParentNode()?.data.node);
      },
      async ArrowDown() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const c = e.getSelectedNodes().reduce((h, w) => e.getNodeRowId(w.key) > e.getNodeRowId(h.key) ? w : h, a);
        if (c.expanded === !1)
          return await s(i(c.getNodeLink()));
        await s(c.getNodeLink().getFirstChildNode()?.data.node);
      },
      // Space Bar
      " ": async function() {
        if (e.getSelectedNodesCount() === 0) return;
        const a = e.getSelectedNodes(), c = a.some((h) => h.checked);
        for (const h of a)
          h.hasCheckbox && await h.changeCheck(!c);
      }
    };
    this.addPluginHook(e, "keydown", d);
    function i(a) {
      const c = a.getNextNode();
      if (c) return c.data.node;
      let h = a.getParentNode();
      for (; h && !h.getNextNode(); )
        h = h.getParentNode();
      return h?.getNextNode()?.data.node;
    }
    function o(a) {
      let c = a;
      for (; c && c.data.node.expanded; ) {
        const h = c.getLastChildNode();
        if (!h) break;
        c = h;
      }
      return c.data.node;
    }
    async function s(a) {
      a && (await a.select(), e.scrollToNode(a.key));
    }
    async function d(a) {
      const c = n[a.key];
      c !== void 0 && (a.preventDefault(), await c());
    }
  }
}
const Zt = "minmax(0, 1fr)";
function Qt(r) {
  const e = [];
  Ae(r) && e.push(`${Me("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const n = r.headerRow.width[t] ?? "";
    n.endsWith("px") ? e.push(`minmax(${n}, ${n})`) : e.push(Zt);
  }
  return e.join(" ");
}
function en(r) {
  return he("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function tn(r) {
  return he(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function nn(r) {
  return he("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function Je(r) {
  return he("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function Ae(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function on(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function sn(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function Ze(r, e) {
  return e === "*" && r === 0 || e.endsWith("px");
}
function rn({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: n }) {
  return i([], n, t, e);
  function i(o, s, d, a) {
    const c = { ...s };
    delete c.children;
    const h = a?.key ?? null, w = r(c);
    if (o.push({
      node: w,
      visible: d,
      parentKeyOrNull: h
    }), s.children && s.children.length > 0)
      for (const N of s.children)
        i(o, N, d && c.expanded === !0, w);
    return o;
  }
}
function an(r) {
  const {
    nodeLinker: e,
    nodeList: t,
    virtualRowList: n,
    positionArgs: i
  } = r, {
    insertKey: o,
    parentKey: s,
    position: d
  } = i;
  a(), c();
  function a() {
    if (t.length === 0) return;
    const h = t[0].node, w = n[0], N = { node: h, virtualRow: w };
    if (o !== void 0) {
      const _ = e.getNodeLink(o);
      if (d === "firstChild")
        return e.insertAsFirstChild(_.key, h.key, N);
      const E = _.getParentNode();
      return E === null ? d === "after" ? e.insertAfterRootNode(h.key, N, _) : e.insertBeforeRootNode(h.key, N, _) : d === "after" ? e.insertAfterChildNode(E.key, h.key, N, _) : e.insertBeforeChildNode(E.key, h.key, N, _);
    }
    s === void 0 ? e.addRootNode(h.key, N) : e.addChildNode(s, h.key, N);
  }
  function c() {
    for (let h = 1; h < t.length; h++) {
      const { node: w, parentKeyOrNull: N } = t[h], _ = n[h], E = { node: w, virtualRow: _ };
      N ? e.addChildNode(N, w.key, E) : o ? e.insertBeforeRootNode(w.key, E, e.getNodeLink(o)) : e.addRootNode(w.key, E);
    }
  }
}
const dn = {
  nodeDraggable: !0
}, ln = 500;
class cn extends se {
  constructor(e = dn) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", o), this.addPluginHook(e, "treeClick", x), this.addPluginHook(e, "nodeExpandIconClick", H);
    let n = null, i = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", a), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", d), this.addPluginHook(e, "nodeMouseDown", c));
    async function o(p) {
      p.preventDefault();
      const f = _(p);
      f && (e.multiSelect ? p.ctrlKey ? await f.addSelect() : p.shiftKey ? await I(f) : f.selected === !1 && await f.select() : await f.select(), await t.emit("nodeContextMenu", [p, f]));
    }
    function s(p) {
      const f = _(p);
      f && t.emit("nodeMouseDown", [p, f]);
    }
    function d(p) {
      const f = _(p);
      f && t.emit("nodeMouseUp", [p, f]);
    }
    function a(p, f) {
      f.object && p.dataTransfer?.setData("application/json", JSON.stringify(f.object));
    }
    async function c(p, f) {
      if (!await t.emit("nodeCheckDragging", [p, f])) return;
      const v = tn(p.target);
      v && (v.setAttribute("draggable", "true"), v.addEventListener("dragstart", w), n = f);
    }
    function h(p) {
      p.removeEventListener("dragstart", w), p.removeEventListener("dragend", N), p.removeAttribute("draggable"), n = null;
    }
    function w(p) {
      p.target instanceof HTMLElement && n && (p.target.addEventListener("dragend", N), t.emit("nodeDragStart", [p, n]));
    }
    function N(p) {
      p.target instanceof HTMLElement && n && (h(p.target), t.emit("nodeDragEnd", [p, n]));
    }
    function _(p) {
      if (!(p.target instanceof HTMLElement)) return null;
      const k = he("[data-node-key]", ".ir-vd-container__viewport-row ", p.target)?.getAttribute("data-node-key");
      return k ? e.getNodeOrNull(k) : null;
    }
    async function E(p) {
      if (p.target instanceof HTMLInputElement && Je(p.target)) {
        const f = p.target.checked;
        await t.emit("headerChangeChecking", [f]) ? await e.setHeaderRowChecked(f) : p.target.checked = !f;
        return;
      }
    }
    async function x(p) {
      if (en(p.target)) return E(p);
      const f = _(p);
      if (!f) return;
      if (nn(p.target)) {
        t.emit("nodeExpandIconClick", [p, f]);
        return;
      }
      if (p.target instanceof HTMLInputElement && Je(p.target)) {
        await f.checkToggle(), p.target.checked = f.checked;
        return;
      }
      const k = Date.now();
      if (i && f.key === i.nodeKey && k - i.time <= ln) {
        t.emit("nodeDoubleClick", [p, f]), i = null;
        return;
      }
      i = {
        nodeKey: f.key,
        time: k
      }, e.multiSelect ? p.ctrlKey ? await f.multiSelectToggle() : p.shiftKey ? await I(f) : await e.selectNode(f.key) : await f.selectToggle(), t.emit("nodeClick", [p, f]);
    }
    async function I(p) {
      const f = e.getSelectedNodes();
      if (f.length === 0) {
        await p.select();
        return;
      }
      await e.selectRange(f[0], p);
    }
    async function H(p, f) {
      await f.toggleExpand();
    }
  }
}
function at(r) {
  const e = Y("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? vt : Oe
  ), e;
}
function hn(r) {
  const e = Y("div", P.nodeMain, P.base, O.truncate), t = Y("button", P.nodeExpandButton, P.nodeIcon), n = Y(
    "div",
    P.base,
    O.truncate,
    O.textAlign.center,
    P.headerCheckboxColumnDiv
  ), i = Y("span", P.nodeCaption, O.truncate), o = Ee("ir-icon--triangle-small-right"), s = Ee(""), d = at(r);
  return t.dataset.irRole = "node-expand-button", s.classList.add(P.nodeIcon), o.style.setProperty("--ir-icon-foreground-color", K.expandIconColor), t.append(o), e.appendChild(t), r.showIcon && e.appendChild(s), e.appendChild(i), n.appendChild(d), r.hiddenExpandIcon && (o.style.display = "none"), {
    mainContentDiv: e,
    expandButton: t,
    icon: s,
    text: i,
    checkbox: d,
    checkboxDiv: n
  };
}
function un(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(P.base, O.truncate, P.column), e;
}
function pn(r, e) {
  return {
    columns: [],
    ...hn(e)
  };
}
function gn(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(P.base, O.truncate), r > 0 && t.classList.add(P.column), t;
}
function fn(r) {
  const e = at(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(O.verticalAlign.bottom, P.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: Y(
      "div",
      P.base,
      O.truncate,
      O.textAlign.center,
      P.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function mn(r, e, t) {
  const n = pn(e, t), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(
    ve.base,
    O.userSelectNone,
    ve.node,
    O.focusOutlineNone
  ), i.role = "treeitem", i.dataset.nodeKey = e.key, dt(r, e, t), Ae(t) ? i.appendChild(n.checkboxDiv) : sn(t, e) && n.expandButton.insertAdjacentElement("afterend", n.checkbox), i.appendChild(n.mainContentDiv), n.columns.forEach((o) => i.appendChild(o));
}
function wn(r, e, t) {
  const n = fn(e), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(ve.base, ve.header), i.dataset.nodeHeader = "true", lt(r, e, t), n.columns.forEach((o) => i.appendChild(o));
}
function dt(r, e, t) {
  if (!r.isCachedElement) return;
  const n = r.getRowElement(), i = e.icon ?? t.defaultIcon, o = e.iconColor ?? t.defaultIconColor, { text: s, columns: d, icon: a, expandButton: c, checkbox: h } = r.template;
  s.textContent = t.replaceNewLine ? e.caption.replace(/(\r?\n)/g, " ") : e.caption, e.level > 0 ? be(n, {
    [K.nodeLevel]: String(e.level)
  }) : n.style.removeProperty(K.nodeLevel), ge(n, "selected", e.selected), ge(n, "disabled", e.disabled), ge(n, "expanded", e.expanded), ge(n, "expandable", e.expandable), e.expandable === !1 ? c.classList.add(O.invisible) : c.classList.remove(O.invisible), e.expanded ? c.classList.add(O.rotate.deg90) : c.classList.remove(O.rotate.deg90), e.subChecked ? h.dataset.state = "sub-checked" : delete h.dataset.state, h.checked = e.checked, e.hasCheckbox === !1 && h.remove(), i ? (a.className = Pt(P.nodeIcon, "ir-icon", i), o && a.style.setProperty("--ir-icon-foreground-color", o)) : a.className = O.invisible, w();
  function w() {
    const N = t.headerRow.columnCount - 1;
    if (d.length === N)
      return d.forEach((_, E) => _.textContent = e.getColumnText(E + 1));
    d.forEach((_) => _.remove()), d.length = 0;
    for (let _ = 0; _ < N; _++) {
      const E = un(e.getColumnText(_ + 1));
      d.push(E), n.appendChild(E);
    }
  }
}
function lt(r, e, t) {
  const {
    columns: n,
    checkbox: i,
    checkboxDiv: o
  } = r.template;
  n.forEach((a) => a.remove()), n.length = 0;
  const s = Ae(e);
  s && (e.headerRow.hasCheckbox && o.appendChild(i), n.push(o), r.getRowElement().appendChild(o)), i.checked = t.headerRow.checked;
  const d = e.headerRow.columnCount;
  for (let a = 0; a < d; a++) {
    const c = gn(a, e);
    n.push(c), r.getRowElement().appendChild(c);
  }
  !s && on(e) && n[0].prepend(i);
}
const Cn = "80px", Nn = 4, _n = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, kn = {
  layout: "inner",
  ui: "checkbox"
}, vn = {
  scrollOnCollapse: !0,
  scrollOnExpand: !0
};
function bn() {
  return [
    new cn({
      nodeDraggable: !0
    }),
    new Jt()
  ];
}
class Ei extends rt {
  _nodeLinker = new qt();
  _virtualDOMContainer = document.createElement("div");
  _virtualDOM;
  _args;
  _selectedNode = [];
  _context;
  constructor(e) {
    super({
      plugins: e.plugins ?? bn()
    }), this._args = {
      defaultRowHeight: e.defaultRowHeight ?? Me("tree-view.nodeRowHeight"),
      hiddenExpandIcon: e.hiddenExpandIcon ?? !1,
      removeIndent: e.removeIndent ?? !1,
      defaultIcon: e.defaultIcon,
      autoSizeColumnMode: e.autoSizeColumnMode ?? !1,
      replaceNewLine: e.replaceNewLine ?? !0,
      defaultIconColor: e.defaultIconColor,
      showIcon: e.showIcon ?? !1,
      showCheckbox: e.showCheckbox ?? !1,
      multiSelect: e.multiSelect ?? !1,
      className: e.className ?? "",
      displayHeader: e.displayHeader ?? !1,
      headerRow: Object.assign({}, _n, e.headerRow),
      checkboxOptions: Object.assign({}, kn, e.checkboxOptions),
      plugins: this.pluginList,
      features: Object.assign({}, vn, e.features)
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, e.removeIndent && be(this.contextElement, {
      [K.nodeIndentPadding]: "0"
    }), this.validateArgs(), this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.setDefaultColumnWidths(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(bt), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
  }
  /**
   * TreeView Hooks
   */
  /**
   *
   */
  beginNodeUpdatedHandler(e) {
    const { virtualRow: t } = this.getMapValue(e.key);
    t.hasTemplate && this.emitHook("nodeRender", [t, e, this._args]);
  }
  treeDragEnterHandler(e) {
    this._virtualDOM.lockMouseEvents(), this.emitHook("treeDragEnter", [e]);
  }
  treeDragOverHandler(e) {
    const t = this.getRowOrNullByEvent(e);
    t && t.rowId > 0 && this.emitHook("nodeDragOver", [e, t.object, t]);
  }
  treeDragLeaveHandler(e) {
    e.target === this._virtualDOMContainer && this._virtualDOM.unlockMouseEvents(), this.emitHook("treeDragLeave", [e]);
  }
  getRowOrNullByEvent(e) {
    const t = e.offsetY + this._virtualDOM.scrollTop;
    return this._virtualDOM.getRowByTopOrNull(t);
  }
  treeDropHandler(e) {
    this._virtualDOM.unlockMouseEvents();
    const t = this.getRowOrNullByEvent(e);
    t && t.rowId > 0 && this.emitHook("nodeDrop", [e, t.object]);
  }
  treeDragEndHandler(e) {
    this._virtualDOM.unlockMouseEvents();
  }
  nodeReleaseHandler(e) {
    const t = this._selectedNode.indexOf(e);
    if (t >= 0)
      return this._selectedNode.splice(t, 1), this.emitSelectionChange();
  }
  updateNodeRowVisible(e) {
    this._nodeLinker.travelChildNodes(e, ({ data: { virtualRow: t, node: n } }) => {
      this._virtualDOM.setRowVisible(t.rowId, n.isVisible());
    });
  }
  beginNodeExpanded(e) {
    this.updateNodeRowVisible(e.key);
  }
  beginNodeCollapsed(e) {
    this.updateNodeRowVisible(e.key);
  }
  pushSelectedNode(e) {
    this._selectedNode.includes(e) || this._selectedNode.push(e);
  }
  async nodeSelectHandler(e) {
    await this.runPauseEmitContext(["nodeSelectionChange"], () => this.releaseSelectedNodes()), this.pushSelectedNode(e), await this.emitSelectionChange();
  }
  async nodeAddSelectionHandler(e) {
    this.pushSelectedNode(e), await this.emitSelectionChange();
  }
  onInitHooks() {
    this.setBeginHook("createHeaderRow", wn), this.setBeginHook("createNodeRow", mn), this.setBeginHook("headerRender", lt), this.setBeginHook("nodeRender", dt), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
  }
  lastChildRecursive(e) {
    let t = e;
    for (; t; ) {
      const n = t.getLastChildNode();
      if (!t.data.node.expanded || !n)
        break;
      t = n;
    }
    return t;
  }
  onCreatedRowElement(e, t) {
    e.isFreezed ? this.emitHook("createHeaderRow", [e, this._args, this._context]) : this.emitHook("createNodeRow", [e, e.object, this._args]);
  }
  onUpdatedRowObject(e, t, n) {
    e.isFreezed ? this.emitHook("headerRender", [e, this._args, this._context]) : this.emitHook("nodeRender", [e, n, this._args]);
  }
  initVirtualDOM() {
    this._virtualDOMContainer.classList.add(Et), this._virtualDOMContainer.style.height = "100%";
    const e = new Ut({
      contextElement: this._virtualDOMContainer,
      // 헤더용 row 추가
      rowCount: 1,
      headerRowCount: 1,
      defaultRowHeight: this._args.defaultRowHeight,
      onCreatedRowElement: this.onCreatedRowElement.bind(this),
      onUpdatedRowObject: this.onUpdatedRowObject.bind(this),
      rowContainer: {
        role: "tree",
        tabIndex: 0
      }
    });
    return e.setRowHeight(0, this._args.defaultRowHeight + 1), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
  }
  initArgs() {
    this._args.className && this.contextElement.classList.add(this._args.className);
  }
  validateArgs() {
    if (this._args.headerRow.width.some((e, t) => !Ze(t, e)))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
  }
  onDestroy() {
    this._virtualDOM.destroy(), this.contextElement.remove();
  }
  get componentLabel() {
    return "tree-view";
  }
  get scrollTop() {
    return this._virtualDOM.scrollTop;
  }
  get displayHeader() {
    return this._args.displayHeader;
  }
  set displayHeader(e) {
    this._args.displayHeader !== e && (this._args.displayHeader = e, this.renderHeaderRow());
  }
  get multiSelect() {
    return this._args.multiSelect;
  }
  set multiSelect(e) {
    this._args.multiSelect !== e && (this._args.multiSelect = e, this.releaseSelectedNodes());
  }
  get columnWidthList() {
    return [...this._args.headerRow.width];
  }
  async renderHeaderRow() {
    const e = this._virtualDOM.getRowById(0);
    this._virtualDOM.setRowVisible(0, this._args.displayHeader === !0), this.emitHook("headerRender", [e, this._args, this._context]);
  }
  setTreeContext(e) {
    this._context = Object.assign(this._context, e), this.renderHeaderRow();
  }
  renderAllNode() {
    this._nodeLinker.travelAllNodes(({ data: { node: e } }) => e.updateNodeState());
  }
  getNodeRowId(e) {
    return this.getMapValue(e).virtualRow.rowId;
  }
  getNodeTopBottom(e) {
    const { virtualRow: t } = this.getMapValue(e);
    return { top: t.top, bottom: t.bottom };
  }
  getNodeByRowId(e) {
    return this._virtualDOM.getRowById(e).object;
  }
  expandNode(e) {
    return this.getNode(e).expand();
  }
  collapseNode(e) {
    return this.getNode(e).collapse();
  }
  /**
   * 해당 key의 모든 childNode를 expand (인자 생략 시 모든 노드 expand)
   */
  async expandAll(e) {
    const t = e ? this._nodeLinker.getNodeLink(e).getFirstChildNode() : this._nodeLinker.getFirstRootNode();
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.expand(), await this._nodeLinker.travelNodes(t, ({ data: { node: n } }) => n.expand()));
  }
  /**
   * 해당 key의 모든 childNode를 collapse (인자 생략 시 모든 노드 expand)
   */
  async collapseAll(e) {
    const t = e ? this._nodeLinker.getNodeLink(e).getFirstChildNode() : this._nodeLinker.getFirstRootNode();
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.collapse(), await this._nodeLinker.travelNodes(t, ({ data: { node: n } }) => n.collapse()));
  }
  setColumnCount(e) {
    this._args.headerRow.columnCount = e, this.setDefaultColumnWidths(), this.renderHeaderRow(), this.updateTreeTemplateColumns(), this.renderAllNode(), this.emitHook("changeColumnCount", [e]);
  }
  setDefaultColumnWidths() {
    const { width: e, columnCount: t } = this._args.headerRow;
    if (t > e.length) {
      const n = Array(t - e.length).fill(Cn);
      e[0] || (n[0] = "*"), this._args.headerRow.width.push(...n);
    }
  }
  getColumnCount() {
    return this._args.headerRow.columnCount;
  }
  /**
   * 최상위 노드 개수 반환
   */
  getRootNodeCount() {
    return this._nodeLinker.getRootNodeCount();
  }
  async setHeaderRowChecked(e, t = !0) {
    this.setTreeContext({ headerRow: { checked: e } }), t && await this.emitHook("headerChangeChecked", [e]);
  }
  /**
   * 자식 포함 모든 노드 개수 반환
   */
  getNodeCount() {
    return this._nodeLinker.getNodeCount();
  }
  setColumnWidth(e, t) {
    if (e < 0 || e >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${e}`);
    if (!Ze(e, t))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
    this._args.headerRow.width[e] = t, this.emitHook("columnWidthChange", [[...this._args.headerRow.width]]), this.updateTreeTemplateColumns();
  }
  /**
   * 현재 선택된 모든 노드 해제
   */
  async releaseSelectedNodes(...e) {
    const t = new Set(e), n = this.getSelectedNodes();
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      for (const i of n)
        t.has(i.key) || await i.release();
    }), await this.emitSelectionChange();
  }
  findNodeCallback(e, t) {
    const n = this.getNodeOrNull(e);
    return n ? t(n) : void console.warn(`node not found: ${e}`);
  }
  emitSelectionChange() {
    return this.emitHook("nodeSelectionChange", [this.getSelectedNodes()]);
  }
  async selectNode(e) {
    await this.runPauseEmitContext(
      ["nodeSelectionChange"],
      async () => {
        await this.releaseSelectedNodes(), await this.findNodeCallback(e, (t) => t.select());
      }
    ), await this.emitSelectionChange();
  }
  async addSelectNode(e) {
    await this.findNodeCallback(e, (t) => t.addSelect());
  }
  getSelectedNodes() {
    return [...this._selectedNode];
  }
  getSelectedNodesCount() {
    return this._selectedNode.length;
  }
  getNodesWithPredicate(e) {
    const t = [];
    return this._nodeLinker.travelAllNodes(({ data: { node: n } }) => void (e(n) && t.push(n))), t;
  }
  getCheckedNodes() {
    return this.getNodesWithPredicate((e) => e.checked);
  }
  getSubCheckedNodes() {
    return this.getNodesWithPredicate((e) => e.subChecked);
  }
  getUncheckedNodes() {
    return this.getNodesWithPredicate((e) => !e.checked);
  }
  getSelectedNodeOrNull() {
    return this._selectedNode[0] ?? null;
  }
  getDefaultMainColumnWidth() {
    const [e, t] = Ge(
      "tree-view.iconSize",
      "tree-view.defaultHorizontalPadding"
    );
    let n = e + t;
    return this._args.showIcon && (n += e), n;
  }
  async autoSizeColumn(e) {
    const [t, n] = Ge(
      "tree-view.defaultHorizontalPadding",
      "tree-view.levelIndentSize"
    ), { fontFamily: i, fontSize: o } = getComputedStyle(this.contextElement), s = Ot(o, i);
    let d = s.calculateWidth(this.getColumnText(e));
    if (await this._nodeLinker.travelAllNodes(({ data: { node: a } }, c) => {
      d = Math.max(
        d,
        s.calculateWidth(a.getColumnText(e)) + (e === 0 ? c * n : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), d += e === 0 ? this.getDefaultMainColumnWidth() : t * 2, d += Nn, e === 0) {
      this.setColumnWidth(
        e,
        this.#e(d) ? "*" : `${d}px`
      );
      return;
    }
    this.setColumnWidth(e, `${d}px`);
  }
  #e(e) {
    const t = this.getColumnCount();
    let n = e;
    for (let i = 1; i < t; i++) {
      const o = parseInt(this._args.headerRow.width[i], 10);
      Number.isNaN(o) || (n += o);
    }
    return n < this._virtualDOMContainer.clientWidth;
  }
  getNodeOrNull(e) {
    return this._nodeLinker.getNodeLinkOrNull(e)?.data.node ?? null;
  }
  getNode(e) {
    return this.getMapValue(e).node;
  }
  getColumnText(e) {
    return this._args.headerRow.text[e] ?? "";
  }
  setColumnText(e, t) {
    if (e < 0 || e >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${e}`);
    this._args.headerRow.text[e] = t, this.renderHeaderRow();
  }
  updateNodeData(e, t) {
    this.getNode(e).updateNodeState(t);
  }
  updateNodeColumns(e, t) {
    this.getNode(e).updateNodeState({ columns: t });
  }
  updateTreeTemplateColumns() {
    be(this.contextElement, {
      [K.templateColumns]: Qt(this._args)
    });
  }
  async exceptInSelected(e) {
    await this.runPauseEmitContext(["nodeSelectionChange", "nodeRelease"], async () => {
      for (const n of e)
        await n.release();
    });
    const t = new Set(e.map((n) => n.key));
    this._selectedNode = this._selectedNode.filter((n) => !t.has(n.key));
  }
  async removeNode(e) {
    const t = this._nodeLinker.getNodeLinkOrNull(e);
    if (!t) {
      console.warn(`node not found: ${e}`);
      return;
    }
    const { virtualRow: n, node: i } = t.data, o = t.getParentNode();
    this._virtualDOM.forceLayout();
    const s = n.rowId, d = s + this._nodeLinker.getChildNodeCount(e), a = [i];
    this._nodeLinker.travelChildNodes(e, ({ data: { node: c } }) => void (c.selected && a.push(c))), await this.exceptInSelected(a), this._virtualDOM.removeRows(s, d), this._nodeLinker.removeNode(e), o && await this.hook.emit("nodeUpdated", [o.data.node]);
  }
  getSortedNodeList() {
    return [...this._virtualDOM.getRowIter()].slice(1).map((e) => e.object);
  }
  clear() {
    this._selectedNode.length = 0, this._virtualDOM.clearRows(), this._nodeLinker.clear();
  }
  getMapValue(e) {
    return this._nodeLinker.getNodeLink(e).data;
  }
  async moveNode(e, t) {
    const n = this.getNode(e);
    if (await this.emitHook("nodeCheckMoving", [n, t]) === !1)
      throw new Error("nodeCheckMoving hook return false");
    const i = n.serialize(), o = n.getNodeLink().getParentNode();
    await this.removeNode(e), this.addNode({
      ...i,
      insertKey: t.targetKey,
      position: t.position
    }), t.position === "firstChild" && await this.getNode(t.targetKey).expand(), o && await o.data.node.updateNodeState(), await this.emitHook("nodeMoved", [n, t]);
  }
  clearChildNodes(e) {
    const t = this._nodeLinker.getNodeLink(e);
    if (t.hasChild() === !1) return;
    const { node: n, virtualRow: i } = t.data;
    this._virtualDOM.forceLayout();
    const o = i.rowId + 1, s = o + (this._nodeLinker.getChildNodeCount(e) - 1);
    this._nodeLinker.clearChildNodes(e), this._virtualDOM.removeRows(o, s), this.hook.emit("nodeUpdated", [n]);
  }
  getNodeVisible(e) {
    return this.getNode(e).isVisible();
  }
  getRowVisible(e) {
    return this._virtualDOM.getRowById(e).visible;
  }
  getChildNodeList(e) {
    let t = this._nodeLinker.getNodeLink(e).getFirstChildNode();
    const n = [];
    for (; t; )
      n.push(t.data.node), t = t.getNextNode();
    return n;
  }
  getRootNodeList() {
    let e = this._nodeLinker.getFirstRootNode();
    const t = [];
    for (; e; )
      t.push(e.data.node), e = e.getNextNode();
    return t;
  }
  getParentNode(e) {
    const t = this._nodeLinker.getNodeLink(e).getParentNode();
    if (!t) throw new Error(`parent node not found: ${e}`);
    return this.getNode(t.key);
  }
  getAddingChildRowId(e) {
    const { virtualRow: t } = this.getMapValue(e);
    return t.rowId + this._nodeLinker.getChildNodeCount(e) + 1;
  }
  getAddingRowId(e) {
    const {
      insertKey: t,
      parentKey: n,
      position: i
    } = e;
    if (n === void 0 && t === void 0)
      return this._virtualDOM.getRowCount();
    if (this._virtualDOM.forceLayout(), t !== void 0) {
      const o = this.getMapValue(t).virtualRow.rowId;
      switch (i) {
        // 첫 자식 위치
        case "firstChild":
          return o + 1;
        case "after":
          return o + this._nodeLinker.getChildNodeCount(t) + 1;
        // 기본은 before로 처리
        default:
          return o;
      }
    }
    if (n)
      return this.getAddingChildRowId(n);
    throw new Error(`invalid addNode args: ${JSON.stringify(e)}`);
  }
  hasNode(e) {
    return this._nodeLinker.hasNode(e);
  }
  createNode(e) {
    if (this.hasNode(e.key)) throw new Error(`node already exists: ${e.key}`);
    return new Xt({
      nodeData: e,
      hook: this.hook,
      nodeLinker: this._nodeLinker
    });
  }
  getParentNodeByPosArgs(e) {
    const { parentKey: t, insertKey: n, position: i } = e;
    return n !== void 0 && i === "firstChild" ? this.getNode(n) : t !== void 0 ? this.getNode(t) : null;
  }
  /**
   * @param posArgsOrNull null 전달 시, rootNode 마지막에 추가
   * @param nodeDataList 추가할 노드 리스트
   */
  addNodeList(e, t) {
    const n = e ?? {}, i = this.getParentNodeByPosArgs(n), { parentNodeOrNull: o, visible: s } = i ? {
      parentNodeOrNull: i,
      visible: i.isVisible() && i.expanded === !0
    } : {
      parentNodeOrNull: null,
      visible: !0
    }, d = this.createNode.bind(this), a = t.flatMap((h) => rn({
      visible: s,
      nodeData: h,
      createNodeFunc: d,
      parentNodeOrNull: o
    })), c = this._virtualDOM.insertRows(
      a.length,
      this.getAddingRowId(n),
      void 0,
      a.map(({ node: h }) => h),
      (h) => a[h].visible
    );
    return an({
      positionArgs: n,
      nodeList: a,
      virtualRowList: c,
      nodeLinker: this._nodeLinker
    }), o?.updateNodeState(), a;
  }
  addNode(e) {
    if (typeof e.key != "string") throw new Error("key's type is not string");
    const {
      // position args
      parentKey: t,
      insertKey: n,
      position: i,
      ...o
    } = e, [s] = this.addNodeList({ parentKey: t, insertKey: n, position: i }, [o]);
    if (!s) throw new Error("first node is undefined");
    return s.node;
  }
  async selectRange(e, t) {
    const n = this.getMapValue(e.key), i = this.getMapValue(t.key), o = n.virtualRow.rowId, s = i.virtualRow.rowId, d = o < s ? [o, s] : [s, o];
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      await e.addSelect(), await this.releaseSelectedNodes();
      for (let a = d[0]; a <= d[1]; ++a)
        await this._virtualDOM.getRowById(a).object.addSelect();
    }), await this.emitSelectionChange();
  }
  scrollToNode(e) {
    this._virtualDOM.forceLayout(), this._virtualDOM.scrollToRow(this.getNodeRowId(e));
  }
  focus() {
    this.contextElement.focus();
  }
}
const He = "ir-style/tree-view-drag-drop-move", Qe = 8;
async function En(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function Rn(r, e, t) {
  return t - r < Qe ? "before" : e - t < Qe ? "after" : "firstChild";
}
function xn(r) {
  const e = r.dataTransfer?.getData(He);
  return e ? JSON.parse(e) : null;
}
const et = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, yn = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class Ri extends se {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t) {
    const {
      canNodeMoveDrop: n,
      canNodeMoveStart: i,
      canNodeMoveDragOver: o,
      onDropNodeData: s,
      onDragEnd: d
    } = this._args;
    this.addPluginHook(e, "nodeDragStart", E), this.addPluginHook(e, "nodeDragOver", x), this.addPluginHook(e, "nodeDragEnd", p), this.addPluginHook(e, "nodeDrop", f), this.addPluginHook(e, "treeDragLeave", w);
    let a = { ...et }, c = { ...yn }, h = !1;
    function w() {
      H();
    }
    function N(k, v) {
      if (!k.dataTransfer) throw new Error("dataTransfer is null");
      h = !1, c = v, a = { ...et }, k.dataTransfer.setData(He, JSON.stringify(v));
    }
    function _(k, v, b) {
      if (!k.dataTransfer?.types.includes(He)) return !1;
      const R = c.srcTreeViewId === e.uuid;
      return R && (v.key === c.srcNodeData.key || v.getNodeLink().isProgenyNode(c.srcNodeData.key)) ? !1 : o?.(R, v, b) ?? !0;
    }
    function E(k, v) {
      (i?.(v) ?? !0) && N(k, { srcNodeData: v.serialize(), srcTreeViewId: e.uuid });
    }
    function x(k, v, b) {
      const { top: R, bottom: S } = e.getNodeTopBottom(v.key), C = Rn(R, S, e.scrollTop + k.offsetY);
      k.dataTransfer && _(k, v, C) ? (k.preventDefault(), k.dataTransfer.dropEffect = "move", I(v, b, C)) : H();
    }
    function I(k, v, b) {
      a.row === v && a.cursorType === b || (H(), a = { nodeKey: k.key, row: v, cursorType: b }, v.getRowElement().dataset.drag = b);
    }
    function H() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function p(k, v) {
      try {
        k.dataTransfer?.dropEffect === "move" && d?.(h, { ...c });
      } finally {
        H();
      }
    }
    async function f(k, v) {
      try {
        const b = xn(k), R = { ...a };
        if (!b || !await En(() => n?.(b, R))) return;
        h = !0, s?.(b.srcTreeViewId === e.uuid, b, R);
      } finally {
        H();
      }
    }
  }
}
class xi extends se {
  constructor(e = {}) {
    super(), this._options = e;
  }
  mount(e, t) {
    const n = {
      isRunning: !1,
      updateInfoList: []
    }, i = async (s) => {
      if (!n.isRunning)
        try {
          n.isRunning = !0, n.updateInfoList.length = 0;
          for (const d of In(s))
            await o(d);
          for (const d of Tn(s))
            await o(d);
          this._options.onChanged?.(n.updateInfoList);
        } finally {
          n.isRunning = !1;
        }
    };
    t.addHook("nodeChangeChecked", i);
    async function o(s) {
      const d = e.getNode(s.key);
      n.updateInfoList.push(s), s.checked !== void 0 && await d.changeCheck(s.checked), s.subChecked !== void 0 && await d.updateNodeState({ subChecked: s.subChecked });
    }
    this.addUnmountTask(() => {
      t.removeHook("nodeChangeChecked", i);
    });
  }
}
function Ln(r) {
  let e = 0, t = 0, n = 0, i = r.getFirstChildNode();
  for (; i; )
    i.data.node.checked ? ++e : ++t, i.data.node.subChecked && ++n, i = i.getNextNode();
  return { checked: e, unchecked: t, subChecked: n };
}
function* In(r) {
  const e = r.getNodeLink(), t = [], n = r.checked;
  for (yield { key: r.key, checked: n, subChecked: !1 }, e.getFirstChildNode() && t.push(e.getFirstChildNode()); t.length; ) {
    const i = t.pop(), o = i.getNextNode(), s = i.getFirstChildNode();
    n !== i.data.node.checked && (yield { key: i.key, checked: n, subChecked: !1 }), o && t.push(o), s && t.push(s);
  }
}
function* Tn(r) {
  let e = r.getNodeLink().getParentNode();
  for (; e; ) {
    const t = Ln(e), n = t.unchecked === 0, i = !n && t.checked + t.subChecked > 0;
    (e.data.node.checked !== n || e.data.node.subChecked !== i) && (yield {
      key: e.key,
      checked: n,
      subChecked: i
    }), e = e.getParentNode();
  }
}
const De = [
  K.stickyRightCol2,
  K.stickyRightCol3,
  K.stickyRightCol4,
  K.stickyRightCol5
];
function* Sn(r, e) {
  let t = 0;
  const n = e - 1, i = Math.min(De.length, n - 1);
  for (let o = n; o > n - i; o--)
    t += parseInt(r[o], 10), yield { right: t, varName: De[n - o] };
}
class yi extends se {
  constructor() {
    super();
  }
  mount(e, t, n) {
    n.classList.add(We), i(), t.addHook("columnWidthChange", i), t.addHook("changeColumnCount", i), this.addUnmountTask(() => {
      n.classList.remove(We), o(), t.removeHook("columnWidthChange", i), t.removeHook("changeColumnCount", i);
    });
    function i() {
      for (const { right: s, varName: d } of Sn(e.columnWidthList, e.getColumnCount()))
        be(n, {
          [d]: `${s}px`
        });
    }
    function o() {
      for (const s of De)
        n.style.removeProperty(s.match(/\((.*)\)/)[1]);
    }
  }
}
class Li extends se {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t, n) {
    const {
      placement: i = "bottom-start",
      interval: o = 0,
      offset: s
    } = this._args, d = zt({
      containerElement: n,
      placement: i,
      offset: s,
      interval: o
    });
    this.addUnmountTask(() => {
      d.destroy();
    });
    const a = (c, h) => {
      Object.assign(
        c.template.text.dataset,
        {
          irTooltip: "true",
          irTooltipText: h.caption
        }
      );
    };
    this.addPluginHook(e, "createNodeRow", a), this.addPluginHook(e, "nodeRender", a);
  }
}
const Hn = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function Dn() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div"), i = document.createElement("div"), o = document.createElement("i"), s = document.createElement("div"), d = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), c = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", "dialog", st.zIndex.message), e.className = "dialog__wrapper", t.className = "dialog__content", n.className = le.modal, i.className = le.content, s.className = le.actions, a.classList.add("ir-icon", "ir-icon--close"), c.className = le.btnClose, s.appendChild(d.no), s.appendChild(d.stop), s.appendChild(d.ignore), s.appendChild(d.retry), s.appendChild(d.yes), s.appendChild(d.ok), c.appendChild(a), n.appendChild(c), n.appendChild(o), n.appendChild(i), n.appendChild(s), t.appendChild(n), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: o,
    confirmContent: i,
    confirmActions: s,
    buttonMap: d,
    closeButton: c,
    resetButtonCls() {
      Object.values(d).forEach((h) => h.className = Rt);
    }
  };
}
const Mn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Dn()), r;
  };
})();
function re() {
  return Mn();
}
const Pn = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, On = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), zn = {
  onTagAttr(r, e, t, n) {
    if (!n && On.has(e))
      return `${e}="${ot.escapeAttrValue(t)}"`;
  }
}, _e = {
  count: 0
}, Ii = () => _e.count > 0;
class Ti {
  constructor(e) {
    this.args = e;
    const {
      iconType: t = "info",
      buttonType: n = ["ok"],
      messageHTML: i,
      msgMap: o = {},
      onClick: s,
      escButton: d,
      contentElement: a,
      onHide: c
    } = e;
    this.visible = !1, this.iconType = t, this.buttonType = n, i && (this.messageHTML = ot.filterXSS(i, zn)), a && (this.contentElement = a), c && (this.onHide = c), this.msgMap = {
      ...o
    }, this.escButton = d, this.escController = nt(this), s && (this.onClick = s);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentElement;
  activeButtonId = -1;
  iconType;
  buttonType;
  msgMap;
  visible;
  messageHTML;
  escButton;
  escHandler;
  enterHandler = null;
  escController;
  updateContent() {
    const e = re();
    if (this.messageHTML)
      e.confirmContent.innerHTML = this.messageHTML;
    else if (this.contentElement)
      if (Object.getPrototypeOf(this.contentElement).jquery)
        e.confirmContent.replaceChildren(...this.contentElement);
      else if (this.contentElement instanceof HTMLElement || typeof this.contentElement == "string")
        e.confirmContent.replaceChildren(this.contentElement);
      else
        throw new Error("not supported type contentElement");
    else
      throw new Error("html or element must be provided!");
  }
  _show() {
    const e = re();
    _e.count++, this.updateContent(), this.visible = !0, e.confirmIcon.className = `${le.icon} ir-icon ${Pn[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const n of Hn)
      e.buttonMap[n].remove(), e.buttonMap[n].innerText = this.msgMap[n] ?? te.t(`confirm.${n}`), e.buttonMap[n].onclick = () => {
        this.hide().then(() => this._doClick(n));
      };
    for (const n of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[n]);
    e.dialog.isConnected || Pe("message").appendChild(e.dialog), e.dialog.classList.add("is-visible"), e.dialog.focus(), e.dialog.onkeydown = this.dialogKeyDownHandler.bind(this);
    const t = this.buttonType.indexOf(this.args.enterButton ?? this.buttonType[0]);
    this.setFocus(t === -1 ? 0 : t), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  setFocus(e) {
    const { confirmActions: t, resetButtonCls: n } = re();
    e < 0 ? e = 0 : e >= this.buttonType.length && (e = this.buttonType.length - 1), this.activeButtonId = e, n();
    const i = t.children[e];
    i.classList.add(xt), i.focus();
  }
  prevFocus() {
    this.activeButtonId === 0 ? this.setFocus(this.buttonType.length - 1) : this.setFocus(this.activeButtonId - 1);
  }
  nextFocus() {
    this.activeButtonId === this.buttonType.length - 1 ? this.setFocus(0) : this.setFocus(this.activeButtonId + 1);
  }
  dialogKeyDownHandler(e) {
    let t = null;
    e.key === "ArrowRight" ? t = this.nextFocus : e.key === "ArrowLeft" ? t = this.prevFocus : e.key === "Tab" && (e.shiftKey ? t = this.prevFocus : t = this.nextFocus), t && (t.call(this), e.preventDefault());
  }
  _registerEnterESCHandler() {
    this.escController.create();
  }
  show() {
    if (_e.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = re();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  onHide() {
  }
  async hide() {
    if (this.visible !== !1)
      return this.escController.destroy(), _e.count = 0, new Promise((e) => {
        const t = re();
        this.visible = !1, t.dialog.classList.remove("is-visible"), this.enterHandler && Nt("Enter", this.enterHandler), this.enterHandler = null;
        const n = this.args.focusAfterHide;
        n instanceof HTMLElement ? setTimeout(() => {
          n.focus(), e();
        }) : e();
      }).finally(() => this.onHide());
  }
  _doClick(e) {
    this.onClick(e);
  }
  onClick(e) {
  }
}
const ae = "time-picker", ee = {
  timePicker: {
    "&": ae,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${ae}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${ae}__button-panel`
  },
  timePickerPanel: {
    "&": `${ae}__panel`
  },
  timePickerPanelItem: {
    "&": `${ae}__panel-item`
  }
};
function An(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: n, minute: i, second: o } = ct(t);
    return n < 0 || n >= 24 || i < 0 || i >= 60 ? !1 : !(e && o < 0 || o >= 60);
  } else
    return !1;
}
function ct(r) {
  const [e, t, n] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(n)
  };
}
function Fn(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const me = 12, Vn = 60, Bn = 60, Un = ["period", "hour", "minute", "second"];
function $n() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [i, o, s, d] = n;
  r.classList.add(ee.timePicker["&"], st.zIndex.popover), n.forEach((C, y) => {
    C.setAttribute("data-type", Un[y]), C.className = ee.timePickerPanel["&"], e.appendChild(C);
  }), e.className = ee.timePickerPanelWrapper["&"], t.className = ee.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function c(C) {
    const y = document.createElement("div");
    return y.className = ee.timePickerPanelItem["&"], y.dataset.text = C, y.innerText = C, y;
  }
  return fe(2).forEach(() => n[0].appendChild(c(""))), fe(me).forEach((C) => n[1].appendChild(c(`${C}`))), fe(Vn).forEach((C) => n[2].appendChild(c(`${C}`))), fe(Bn).forEach((C) => n[3].appendChild(c(`${C}`))), {
    elements: {
      nowButton: a,
      secondPanel: d,
      timePicker: r
    },
    updateI18n: h,
    removeSelected: w,
    getTimeElements: N,
    scrollIntoView: _,
    selectTime: E,
    isAM: x,
    setPeriod: I,
    setHourId: H,
    setMinuteId: p,
    setSecondId: f,
    periodGenerator: k,
    getCurrentTime: v,
    hourGenerator: b,
    minuteGenerator: R,
    secondGenerator: S
  };
  function h() {
    a.innerHTML = "", a.appendChild(Ee("ir-icon--check")), a.append(te.t("timePicker.btnNow")), n[0].children[0].innerHTML = "", n[0].children[1].innerHTML = "", n[0].children[0].append(te.t("timePicker.am")), n[0].children[1].append(te.t("timePicker.pm"));
  }
  function w() {
    r.querySelectorAll(".is-selected").forEach((C) => C.classList.remove("is-selected"));
  }
  function N(C, y, q) {
    const X = C < me, V = X ? C : C - me, J = X ? 0 : 1;
    return {
      periodElement: i.children[J],
      hourElement: o.children[V],
      minuteElement: s.children[y],
      secondElement: d.children[q]
    };
  }
  function _(C, y, q) {
    const { hourElement: X, minuteElement: V, secondElement: J } = N(C, y, q);
    o.scrollTop = X.offsetTop - o.clientHeight / 2, s.scrollTop = V.offsetTop - s.clientHeight / 2, d.scrollTop = J.offsetTop - d.clientHeight / 2;
  }
  function E(C, y, q) {
    const { periodElement: X, hourElement: V, minuteElement: J, secondElement: ne } = N(C, y, q);
    w(), X.classList.add("is-selected"), V.classList.add("is-selected"), J.classList.add("is-selected"), ne.classList.add("is-selected");
  }
  function x() {
    return i.children[0].classList.contains("is-selected");
  }
  function I(C) {
    i.children[(C + 1) % 2].classList.remove("is-selected"), i.children[C].classList.add("is-selected");
  }
  function H(C) {
    o.querySelector(".is-selected")?.classList.remove("is-selected"), o.children[C].classList.add("is-selected");
  }
  function p(C) {
    s.querySelector(".is-selected")?.classList.remove("is-selected"), s.children[C].classList.add("is-selected");
  }
  function f(C) {
    d.querySelector(".is-selected")?.classList.remove("is-selected"), d.children[C].classList.add("is-selected");
  }
  function* k() {
    yield [0, i.children[0]], yield [1, i.children[1]];
  }
  function v() {
    return Fn(
      Le(o) + (x() ? 0 : me),
      Le(s),
      Le(d)
    );
  }
  function* b() {
    let C = 0;
    for (const y of o.children)
      yield [C++, y];
  }
  function* R() {
    let C = 0;
    for (const y of s.children)
      yield [C++, y];
  }
  function* S() {
    let C = 0;
    for (const y of d.children)
      yield [C++, y];
  }
}
function Le(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const jn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = $n()), r;
  };
})();
function Gn({ uuid: r, refElement: e, onChange: t, visibleSeconds: n }) {
  let i = !1, o = () => {
  };
  const {
    elements: s,
    getCurrentTime: d,
    selectTime: a,
    scrollIntoView: c,
    updateI18n: h,
    hourGenerator: w,
    minuteGenerator: N,
    secondGenerator: _,
    periodGenerator: E,
    setPeriod: x,
    setHourId: I,
    setMinuteId: H,
    setSecondId: p
  } = jn(), f = {
    setTime(b) {
      const R = n ? b : b + ":00", { hour: S, minute: C, second: y } = ct(R);
      a(S, C, y), c(S, C, y);
    },
    show: () => {
      if (!i) {
        h(), i = !0, k.create(), v.create(), s.nowButton.onclick = (b) => {
          const R = Se().format("HH:mm:ss");
          f.setTime(R), t(b, R);
        };
        for (const [b, R] of E())
          R.onclick = (S) => {
            x(b), t(S, d());
          };
        for (const [b, R] of w())
          R.onclick = (S) => {
            I(b), t(S, d());
          };
        for (const [b, R] of N())
          R.onclick = (S) => {
            H(b), t(S, d());
          };
        if (n) {
          for (const [b, R] of _())
            R.onclick = (S) => {
              p(b), t(S, d());
            };
          s.secondPanel.style.removeProperty("display");
        } else
          s.secondPanel.style.setProperty("display", "none");
        s.timePicker.isConnected || Pe("popover").appendChild(s.timePicker), s.timePicker.style.removeProperty("display"), s.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          s.timePicker.classList.add(ee.timePicker["is-visible"]), o(), o = _t(e, s.timePicker);
        }, 0);
      }
    },
    hide: () => {
      i && (k.destroy(), v.destroy(), s.timePicker.classList.remove(ee.timePicker["is-visible"]), s.timePicker.addEventListener("transitionend", (b) => {
        b.currentTarget === b.target && (i = !1, r === s.timePicker.getAttribute("data-uuid") && (o(), s.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => f.hide(),
    get visible() {
      return i;
    }
  }, k = nt(f), v = Ht({
    eventElements: [s.timePicker],
    clickOutsideFunc: () => f.hide()
  });
  return f;
}
const Ie = { checkbox: Tt, checkboxWrapper: it, checkboxInput: Oe }, we = { input: yt, inputNative: Lt, inputSuffix: It, inputPrefix: St };
class Si extends xe {
  input;
  button;
  timePickerHandler;
  latestValue;
  _value;
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, n = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = we.input, this.input = document.createElement("input"), this.input.placeholder = n, this.input.className = we.inputNative, this.button = document.createElement("button"), this.button.appendChild(Ee("ir-icon--watch")), this.button.className = we.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = Gn({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (i, o) => {
        const s = Se(o, "HH:mm:ss", !0).format(n);
        this.value = s, this.onChange(s);
      }
    }), e.checkbox) {
      const i = document.createElement("div"), o = document.createElement("label"), s = document.createElement("input");
      s.setAttribute("type", "checkbox"), i.classList.add(Ie.checkbox, we.inputPrefix), o.className = Ie.checkboxWrapper, s.className = Ie.checkboxInput, o.appendChild(s), i.appendChild(o), this.contextElement.appendChild(i), s.checked = !e.disabled, s.onchange = () => this.disabled = !s.checked, this.addCoreElement(i);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = Se(e.value, n).format(n)), this.input.onblur = () => {
      An(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
    };
  }
  get componentLabel() {
    return "time-picker";
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
  set disabled(e) {
    this.input.disabled = e, this.button.disabled = e;
  }
  set value(e) {
    this._value = e, this.input.value = e || "", this.latestValue = this.input.value;
  }
  show() {
    this.timePickerHandler.show(), this.timePickerHandler.setTime(this.value || "00:00:00");
  }
  hide() {
    this.timePickerHandler.hide();
  }
  toggle() {
    this.visible ? this.hide() : this.show();
  }
  /*
   * Events
   */
  onChange(e) {
  }
}
const F = typeof window < "u" ? window : null, Fe = F === null, ce = Fe ? void 0 : F.document, B = "addEventListener", U = "removeEventListener", Te = "getBoundingClientRect", de = "_a", $ = "_b", W = "_c", Ce = "horizontal", j = () => !1, Wn = Fe ? "calc" : `${["", "-webkit-", "-moz-", "-o-"].filter((r) => {
  const e = ce.createElement("div");
  return e.style.cssText = `width:${r}calc(9px)`, !!e.style.length;
}).shift()}calc`, ht = (r) => typeof r == "string" || r instanceof String, tt = (r) => {
  if (ht(r)) {
    const e = ce.querySelector(r);
    if (!e)
      throw new Error(`Selector ${r} did not match a DOM element`);
    return e;
  }
  return r;
}, D = (r, e, t) => {
  const n = r[e];
  return n !== void 0 ? n : t;
}, Ne = (r, e, t, n) => {
  if (e) {
    if (n === "end")
      return 0;
    if (n === "center")
      return r / 2;
  } else if (t) {
    if (n === "start")
      return 0;
    if (n === "center")
      return r / 2;
  }
  return r;
}, Kn = (r, e) => {
  const t = ce.createElement("div");
  return t.className = `gutter gutter-${e}`, t;
}, qn = (r, e, t) => {
  const n = {};
  return ht(e) ? n[r] = e : n[r] = `${Wn}(${e}% - ${t}px)`, n;
}, Xn = (r, e) => ({ [r]: `${e}px` }), Yn = (r, e = {}) => {
  if (Fe) return {};
  let t = r, n, i, o, s, d, a;
  Array.from && (t = Array.from(t));
  const h = tt(t[0]).parentNode, w = getComputedStyle ? getComputedStyle(h) : null, N = w ? w.flexDirection : null;
  let _ = D(e, "sizes") || t.map(() => 100 / t.length);
  const E = D(e, "minSize", 100), x = Array.isArray(E) ? E : t.map(() => E), I = D(e, "maxSize", 1 / 0), H = Array.isArray(I) ? I : t.map(() => I), p = D(e, "expandToMin", !1), f = D(e, "gutterSize", 10), k = D(e, "gutterAlign", "center"), v = D(e, "snapOffset", 30), b = Array.isArray(v) ? v : t.map(() => v), R = D(e, "dragInterval", 1), S = D(e, "direction", Ce), C = D(
    e,
    "cursor",
    S === Ce ? "col-resize" : "row-resize"
  ), y = D(e, "gutter", Kn), q = D(
    e,
    "elementStyle",
    qn
  ), X = D(e, "gutterStyle", Xn);
  S === Ce ? (n = "width", i = "clientX", o = "left", s = "right", d = "clientWidth") : S === "vertical" && (n = "height", i = "clientY", o = "top", s = "bottom", d = "clientHeight");
  function V(g, l, u, m) {
    const L = q(n, l, u, m);
    Object.keys(L).forEach((z) => {
      g.style[z] = L[z];
    });
  }
  function J(g, l, u) {
    const m = X(n, l, u);
    Object.keys(m).forEach((L) => {
      g.style[L] = m[L];
    });
  }
  function ne() {
    return a.map((g) => g.size);
  }
  function Ve(g) {
    return "touches" in g ? g.touches[0][i] : g[i];
  }
  function Be(g) {
    const l = a[this.a], u = a[this.b], m = l.size + u.size;
    l.size = g / this.size * m, u.size = m - g / this.size * m, V(l.element, l.size, this[$], l.i), V(u.element, u.size, this[W], u.i);
  }
  function ut(g) {
    let l;
    const u = a[this.a], m = a[this.b];
    this.dragging && (l = Ve(g) - this.start + (this[$] - this.dragOffset), R > 1 && (l = Math.round(l / R) * R), l <= u.minSize + u.snapOffset + this[$] ? l = u.minSize + this[$] : l >= this.size - (m.minSize + m.snapOffset + this[W]) && (l = this.size - (m.minSize + this[W])), l >= u.maxSize - u.snapOffset + this[$] ? l = u.maxSize + this[$] : l <= this.size - (m.maxSize - m.snapOffset + this[W]) && (l = this.size - (m.maxSize + this[W])), Be.call(this, l), D(e, "onDrag", j)(ne()));
  }
  function Ue() {
    const g = a[this.a].element, l = a[this.b].element, u = g[Te](), m = l[Te]();
    this.size = u[n] + m[n] + this[$] + this[W], this.start = u[o], this.end = u[s];
  }
  function pt(g) {
    if (!getComputedStyle) return null;
    const l = getComputedStyle(g);
    if (!l) return null;
    let u = g[d];
    return u === 0 ? null : (S === Ce ? u -= parseFloat(l.paddingLeft) + parseFloat(l.paddingRight) : u -= parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u);
  }
  function $e(g) {
    const l = pt(h);
    if (l === null || x.reduce((z, A) => z + A, 0) > l)
      return g;
    let u = 0;
    const m = [], L = g.map((z, A) => {
      const Q = l * z / 100, ue = Ne(
        f,
        A === 0,
        A === g.length - 1,
        k
      ), pe = x[A] + ue;
      return Q < pe ? (u += pe - Q, m.push(0), pe) : (m.push(Q - pe), Q);
    });
    return u === 0 ? g : L.map((z, A) => {
      let Q = z;
      if (u > 0 && m[A] - u > 0) {
        const ue = Math.min(
          u,
          m[A] - u
        );
        u -= ue, Q = z - ue;
      }
      return Q / l * 100;
    });
  }
  function gt() {
    const g = this, l = a[g.a].element, u = a[g.b].element;
    g.dragging && D(e, "onDragEnd", j)(ne()), g.dragging = !1, F[U]("mouseup", g.stop), F[U]("touchend", g.stop), F[U]("touchcancel", g.stop), F[U]("mousemove", g.move), F[U]("touchmove", g.move), g.stop = null, g.move = null, l[U]("selectstart", j), l[U]("dragstart", j), u[U]("selectstart", j), u[U]("dragstart", j), l.style.userSelect = "", l.style.webkitUserSelect = "", l.style.MozUserSelect = "", l.style.pointerEvents = "", u.style.userSelect = "", u.style.webkitUserSelect = "", u.style.MozUserSelect = "", u.style.pointerEvents = "", g.gutter.style.cursor = "", g.parent.style.cursor = "", ce.body.style.cursor = "";
  }
  function ft(g) {
    if ("button" in g && g.button !== 0)
      return;
    const l = this, u = a[l.a].element, m = a[l.b].element;
    l.dragging || D(e, "onDragStart", j)(ne()), g.preventDefault(), l.dragging = !0, l.move = ut.bind(l), l.stop = gt.bind(l), F[B]("mouseup", l.stop), F[B]("touchend", l.stop), F[B]("touchcancel", l.stop), F[B]("mousemove", l.move), F[B]("touchmove", l.move), u[B]("selectstart", j), u[B]("dragstart", j), m[B]("selectstart", j), m[B]("dragstart", j), u.style.userSelect = "none", u.style.webkitUserSelect = "none", u.style.MozUserSelect = "none", u.style.pointerEvents = "none", m.style.userSelect = "none", m.style.webkitUserSelect = "none", m.style.MozUserSelect = "none", m.style.pointerEvents = "none", l.gutter.style.cursor = C, l.parent.style.cursor = C, ce.body.style.cursor = C, Ue.call(l), l.dragOffset = Ve(g) - l.end;
  }
  _ = $e(_);
  const Z = [];
  a = t.map((g, l) => {
    const u = {
      element: tt(g),
      size: _[l],
      minSize: x[l],
      maxSize: H[l],
      snapOffset: b[l],
      i: l
    };
    let m;
    if (l > 0 && (m = {
      a: l - 1,
      b: l,
      dragging: !1,
      direction: S,
      parent: h
    }, m[$] = Ne(
      f,
      l - 1 === 0,
      !1,
      k
    ), m[W] = Ne(
      f,
      !1,
      l === t.length - 1,
      k
    ), N === "row-reverse" || N === "column-reverse")) {
      const L = m.a;
      m.a = m.b, m.b = L;
    }
    if (l > 0) {
      const L = y(l, S, u.element);
      J(L, f, l), m[de] = ft.bind(m), L[B](
        "mousedown",
        m[de]
      ), L[B](
        "touchstart",
        m[de]
      ), h.insertBefore(L, u.element), m.gutter = L;
    }
    return V(
      u.element,
      u.size,
      Ne(
        f,
        l === 0,
        l === t.length - 1,
        k
      ),
      l
    ), l > 0 && Z.push(m), u;
  });
  function je(g) {
    const l = g.i === Z.length, u = l ? Z[g.i - 1] : Z[g.i];
    Ue.call(u);
    const m = l ? u.size - g.minSize - u[W] : g.minSize + u[$];
    Be.call(u, m);
  }
  h.offsetWidth > 0 && a.forEach((g) => {
    const l = g.element[Te]()[n];
    l < g.minSize && (p ? je(g) : g.minSize = l);
  });
  function mt(g) {
    const l = $e(g);
    l.forEach((u, m) => {
      if (m > 0) {
        const L = Z[m - 1], z = a[L.a], A = a[L.b];
        z.size = l[m - 1], A.size = u, V(z.element, z.size, L[$], z.i), V(A.element, A.size, L[W], A.i);
      }
    });
  }
  function wt(g, l) {
    Z.forEach((u) => {
      if (l !== !0 ? u.parent.removeChild(u.gutter) : (u.gutter[U](
        "mousedown",
        u[de]
      ), u.gutter[U](
        "touchstart",
        u[de]
      )), g !== !0) {
        const m = q(
          n,
          u.a.size,
          u[$]
        );
        Object.keys(m).forEach((L) => {
          a[u.a].element.style[L] = "", a[u.b].element.style[L] = "";
        });
      }
    });
  }
  return {
    setSizes: mt,
    getSizes: ne,
    collapse(g) {
      je(a[g]);
    },
    destroy: wt,
    parent: h,
    pairs: Z
  };
};
function Jn(r) {
  const e = r[0] instanceof HTMLElement ? r[0] : document.querySelector(r[0]);
  Re(e, "First element is not found.");
  const t = e.parentElement;
  return Re(t, "Parent element is not found."), t;
}
const Zn = {
  gutterCls: "thick",
  direction: "horizontal",
  snapOffset: 10,
  dragInterval: 5,
  minSize: 100
}, Qn = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
}, ei = 100, ti = 0.1;
class ni extends rt {
  _splitHandler;
  _splitElements;
  #e;
  #r = [];
  #i = [];
  #t = {
    dragged: !1,
    dragStartSize: 0,
    beforeCollapsed: !1
  };
  #n = {
    prevSize: 0
  };
  constructor({ elements: e, options: t }) {
    super({
      contextElement: Jn(e)
    }), this.#e = Object.assign({}, Zn, t);
    const { gutterCls: n } = this.#e;
    this._splitElements = this.#a(), this._splitHandler = Yn(e, {
      ...this.#e,
      gutterSize: Qn.gutterSize[n],
      gutter: this.#d(),
      onDragStart: (i) => {
        Object.assign(this.#t, {
          dragged: !1,
          dragStartSize: this._splitHandler.getSizes()[0],
          beforeCollapsed: this.isCollapsed()
        }), this.#i = i, this.#e.onDragStart?.(i);
      },
      onDrag: (i) => {
        this.#t.dragged = this.#t.dragged || this.#i.reduce((o, s, d) => o += Math.abs(s - i[d]), 0) > ti, this.#e.onDrag?.(i);
      },
      onDragEnd: (i) => {
        this.#t.dragged && !this.#t.beforeCollapsed && this.isCollapsed() && (this.#n.prevSize = this.#t.dragStartSize), this.#e.onDragEnd?.(i);
      }
    }), this.#u();
  }
  get componentLabel() {
    return "split-container";
  }
  /**
   * @deprecated 가능하면 컴포넌트 내부 DOM 요소 직접 접근은 지양합니다.
   */
  get pairs() {
    return this._splitHandler.pairs;
  }
  isDisplayNone() {
    return this.contextElement.offsetWidth === 0;
  }
  getFirstPanelSize() {
    const { firstPanel: e } = this._splitElements;
    return this.#e.direction === "horizontal" ? e.offsetWidth : e.offsetHeight;
  }
  isCollapsed() {
    const { minSize: e, snapOffset: t } = this.#e, n = typeof e == "number" ? e : Array.isArray(e) ? e[0] : 0;
    return this.getFirstPanelSize() <= n + t;
  }
  collapse(e) {
    this._splitHandler.collapse(e);
  }
  getSizes() {
    return this._splitHandler.getSizes();
  }
  setSizes(e) {
    this._splitHandler.setSizes(e);
  }
  #a() {
    const e = this.contextElement, t = e.firstElementChild;
    return Re(e instanceof HTMLElement, "Split parent element is not found."), Re(t instanceof HTMLElement, "First panel element is not found."), { splitParent: e, firstPanel: t };
  }
  #d() {
    const { direction: e, gutterCls: t } = this.#e, n = [
      ye.base,
      ye[t]
    ].join(" ");
    return (i) => {
      const o = document.createElement("div");
      return o.className = n, o.dataset.dir = e, this.#e.gutterClickAction === "toggleVisible" && i === 1 && (o.onclick = () => this.#l()), this.#r.push(o), o;
    };
  }
  #l() {
    if (this.#t.dragged) return this.#o();
    this.isCollapsed() ? this.#h() : this.#c(), this.#o();
  }
  #c() {
    this.#n.prevSize = this._splitHandler.getSizes()[0], this._splitHandler.collapse(0);
  }
  #h() {
    const e = this._splitHandler.getSizes(), t = e.slice(2), n = t.reduce((s, d) => s += d, 0), i = this.#n.prevSize <= e[1] ? this.#n.prevSize : e[1], o = [
      // 접히기 전 크기로 리셋
      i,
      // gutter 다음 패널의 크기 (100에서 나머지 패널 크기를 빼서 계산)
      ei - n - i,
      ...t
    ];
    this._splitHandler.setSizes(o);
  }
  #o() {
    this.#t = {
      beforeCollapsed: !1,
      dragged: !1,
      dragStartSize: 0
    };
  }
  #u() {
    const { splitParent: e } = this._splitElements, { direction: t } = this.#e;
    e.classList.add(Ke), t === "vertical" && e.classList.add(qe({ flexDirection: "column" })), this.#s(e.firstElementChild, (n) => n.classList.add(Xe));
  }
  #s(e, t) {
    let n = e;
    for (; n; )
      n.classList.contains(ye.base) || t(n), n = n.nextElementSibling;
  }
  #p() {
    const { splitParent: e } = this._splitElements;
    e.classList.remove(Ke, qe({ flexDirection: "column" })), this.#s(e.firstElementChild, (t) => t.classList.remove(Xe));
  }
  onInitDOMEvents(e) {
  }
  onInitHooks() {
  }
  destroy() {
    super.destroy(), this._splitHandler.destroy();
  }
}
function Hi(r, e) {
  return new ni({ elements: r, options: e });
}
class ii {
  _dialogElement;
  _wrapperElement;
  _headerElement;
  _bodyElement;
  _footerElement;
  constructor() {
    this._dialogElement = Y("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = M(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = M(this._wrapperElement, "div", "dialog__header"), this._bodyElement = M(this._wrapperElement, "div", "dialog__content"), this._footerElement = M(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(e) {
    return this._wrapperElement.style.width = `${e}px`, this;
  }
  addStrongHeaderTitle(e) {
    const t = M(this._headerElement, "strong", "dialog__header-title");
    return t.innerText = e, this;
  }
  createHeaderCloseButton(e) {
    const t = M(this._headerElement, "div", "dialog__header-actions"), n = M(t, "button", "dialog__button-close");
    return M(n, "i", "ir-icon", "ir-icon--close"), n.onclick = e, this;
  }
  setFooterClass(...e) {
    return this._footerElement.classList.add(...e), this;
  }
  setContentElement(...e) {
    for (; this._bodyElement.lastChild; )
      this._bodyElement.lastChild.remove();
    return this._bodyElement.append(...e), this;
  }
  addFooterButton(e, t, ...n) {
    const i = M(this._footerElement, "button", "button", ...n);
    return i.innerText = e, i.onclick = t, this;
  }
  get element() {
    return this._dialogElement;
  }
}
const oi = 550, ke = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function si(r) {
  return r.props.some(([e]) => ke[e] !== void 0);
}
function ri(r) {
  return r.props.filter(([e]) => ke[e] !== void 0).sort(([e], [t]) => ke[e] - ke[t]);
}
function ai(r, e = ["font"]) {
  let t = r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  for (const n of e)
    t = t.replace(new RegExp(`&lt;${n}(.*?)&gt;`, "g"), `<${n}$1>`).replace(new RegExp(`&lt;/${n}&gt;`, "g"), `</${n}>`);
  return t;
}
function di(r) {
  const e = document.createDocumentFragment(), t = new DOMParser(), n = ai(r);
  let o = t.parseFromString(`<root>${n}</root>`, "application/xml").firstChild?.firstChild;
  for (; o; ) {
    if (o.nodeType === 1 && o instanceof Element)
      if (o.tagName.toLowerCase() === "font") {
        const s = document.createElement("span");
        s.textContent = o.textContent, s.style.cssText = o.getAttribute("style") ?? "";
        const d = o.getAttribute("color"), a = o.getAttribute("bgcolor");
        d && (s.style.color = d.replace("cl", "")), a && (s.style.backgroundColor = a.replace("cl", "")), e.append(s);
      } else o.tagName.toLowerCase() === "br" ? e.append(document.createElement("br")) : console.warn(`loginInfoDialog-parser::not allowed tag ${o.tagName}`);
    else o.textContent && e.append(o.textContent);
    o = o.nextSibling;
  }
  return e;
}
function Di(r) {
  const {
    irm010Data: e,
    onClose: t
  } = r;
  if (!si(e))
    throw new Error("no login info data! check irm010 response");
  const n = new ii(), i = () => {
    s.hide();
  }, o = (a) => {
    a.key === "Enter" && i();
  }, s = kt({
    element: n.element,
    type: "dialog",
    parentElement: Pe("dialog"),
    onESC() {
      t?.(), window.removeEventListener("keyup", o);
    }
  }), d = (() => {
    const a = Y("ul", "row", "gap-y--xs");
    return ri(e).forEach(([h, w]) => {
      const N = M(a, "li", "row", "col", "col--12");
      M(N, "div", "col", "col--4").innerText = te.t(`loginInfoDialog.${h}`), h === "AUTH.SECURITY.NOTICE" ? M(N, "div", "col", "col--8").append(
        di(w)
      ) : M(N, "div", "col", "col--8").innerText = w;
    }), a;
  })();
  return n.setDialogWidth(oi).addStrongHeaderTitle(te.t("loginInfoDialog.title")).createHeaderCloseButton(i).setContentElement(d).setFooterClass("justify-content--end").addFooterButton(te.t("loginInfoDialog.confirm-button"), i, "button--primary"), {
    popoverHandler: s,
    show() {
      n.element.focus(), s.show(), window.addEventListener("keyup", o);
    },
    hide() {
      s.hide();
    }
  };
}
export {
  Yi as ClipboardManager,
  lo as IRCommandBlock,
  co as IRCommandManager,
  Ti as IRConfirm,
  mo as IRContextMenu,
  ho as IRDatePicker,
  uo as IRSelect,
  ni as IRSplitContainer,
  Si as IRTimePicker,
  ki as IRTree,
  Ei as IRTreeView,
  xi as IRTreeViewCascadeCheckingPlugin,
  yi as IRTreeViewColStickyPlugin,
  Ri as IRTreeViewDragDropMovePlugin,
  Jt as IRTreeViewKeyboardPlugin,
  cn as IRTreeViewMousePlugin,
  Li as IRTreeViewTooltipPlugin,
  Ut as IRVirtualDOM,
  Eo as Logger,
  Ji as ReactiveState,
  M as appendElement,
  Zi as blobToStr,
  Oi as clearGlobalKeyListener,
  he as closest,
  st as clsZId,
  Ht as createClickOutsideHandler,
  Qi as createCustomIcon,
  po as createDropdownDiv,
  go as createDropdownItem,
  nt as createESCHideController,
  Y as createElement,
  zi as createFloatingHandler,
  Ee as createIconElement,
  Co as createImageFromSrcUrl,
  Ki as createLoadingHandler,
  Di as createLoginInfoDialog,
  No as createObjectURLFromSvg,
  kt as createPopover,
  Hi as createSplitContainer,
  eo as createTooltip,
  to as createTooltipBySelector,
  zt as createTooltipContainer,
  Gi as dispatchClickOutsideEvent,
  _o as downloadDataURL,
  ai as filterSecHTML,
  ko as getBase64FromSvg,
  $i as getComponentManager,
  di as getContentFragment,
  Ro as getCurrentTheme,
  no as getIRIconFormat,
  io as getIRIconPng,
  vo as getImageBlobFromImage,
  Pe as getLayerElement,
  oo as getMinMaxBetween,
  Ot as getTextWidthContext,
  Ai as getThemeStore,
  so as getTooltipElements,
  Fi as getVirtualEl,
  Ii as hasDisplayedConfirm,
  si as hasLoginInfo,
  te as i18n,
  _t as offsetBottomAutoUpdate,
  ro as parseInt,
  Vi as peekESCStack,
  Bi as registerGlobalKeyListener,
  vi as renderCheckboxTreeNode,
  ze as renderDefaultTreeNode,
  xo as setTheme,
  bi as setTreeDragDropReorder,
  Nt as unregisterGlobalKeyListener,
  Dt as uuid,
  qi as xss
};
//# sourceMappingURL=index.js.map
