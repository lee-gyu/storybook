import { Q as de, X as ne, V as te, h as T, T as ie, M as I, R as Oe, P as Ae, j as Ve, n as ke, q as be, W as Ee, K as Re, r as xe, w as $, D as Fe, A as pe, O as Be, z as Ue } from "./chunks/_init-Cv3gCb_1.js";
import { a as oe, b as ze, s as Y, d as me, e as ge, c as Ie, g as le, r as $e, u as je, o as Ge, f as We } from "./chunks/floating-fOdDS7jf.js";
import { h as Di, j as Si, i as Mi, p as Pi } from "./chunks/floating-fOdDS7jf.js";
import { I as K } from "./chunks/index-C-Ilyvxg.js";
import { e as x, f as q, g as M, b as W, h as Ke, c as Te, x as qe, l as Ye, i as X, a as Xe } from "./chunks/rx-state-wgOnLidQ.js";
import { C as Ai, R as Vi, o as Fi, j as Bi, d as Ui, n as zi, s as $i, r as ji, k as Gi, p as Wi, m as Ki, q as qi } from "./chunks/rx-state-wgOnLidQ.js";
import { uuid as Je } from "./utility.js";
import { createLoadingHandler as Xi, createSplitContainer as Ji, createTooltipContainer as Qi } from "./utility.js";
import { c as Qe, s as Le, a as Ze } from "./chunks/command-manager-VeiVFn1Y.js";
import { f as eo, e as to, I as io, b as oo, d as no } from "./chunks/command-manager-VeiVFn1Y.js";
import { c as et } from "./chunks/clsx-OuTLNxxd.js";
import { d as S, i as j } from "./chunks/ko-DexDDk13.js";
import { IRContextMenuAdapter as ro } from "./react.js";
import { a as lo, c as co, d as ho, g as uo, b as po } from "./chunks/image-Y3tFDdOU.js";
import { L as go } from "./chunks/logger-C1WxLZjH.js";
class fe {
  _height;
  _visible;
  _top;
  _rowId;
  _object;
  _isFreezed = !1;
  _cachedElement = null;
  _defaultHeight;
  _templateHelperObj = null;
  constructor({
    rowId: e,
    top: t,
    height: i,
    defaultHeight: o,
    object: s,
    visible: n
  }) {
    this._rowId = e, this._top = t, this._height = i, this._object = s ?? null, this._visible = n, this._defaultHeight = o;
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
    const i = this._object;
    this._object = e, t && this.onUpdatedObject(this, i, e);
  }
  updateRowStyles() {
    if (!this.isCachedElement) return;
    const e = this.getRowElement();
    this._visible ? e.classList.remove("ir-vd-container__viewport-row--hidden") : e.classList.add("ir-vd-container__viewport-row--hidden"), this._defaultHeight !== this._height ? e.style.setProperty("--ir-vd-default-row-height", `${this._height}px`) : e.style.removeProperty("--ir-vd-default-row-height");
  }
  setVisible(e) {
    this._visible = e, this.updateRowStyles();
  }
  setHeight(e) {
    this._height = e, this.updateRowStyles();
  }
  createRowElement() {
    const e = document.createElement("div");
    return this._cachedElement = e, e.classList.add("ir-vd-container__viewport-row"), this.updateRowIdTopAttr(), this.updateRowStyles(), e;
  }
  // 화면에 mount 될 때 호출
  onMounted(e, t) {
  }
  onUpdatedObject(e, t, i) {
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
    e.dataset.rowId = `${this._rowId}`, e.style.setProperty("--ir-vd-row-top", `${this._top}px`);
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
class tt {
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
      const i = this._rows[t - 1];
      this._rows[t].setRowInfo(t, i?.bottom ?? 0), ++t;
    }
  }
  createRowsFragment(e, t) {
    const i = document.createDocumentFragment();
    for (let o = e; o <= t; o++) {
      const s = this._rows[o];
      if (s.visible) {
        const n = s.getRowElement();
        i.appendChild(n), s.onMounted(s, n);
      }
    }
    return i;
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
    let t = 0, i = this._visibleRowList.length - 1;
    for (; t <= i; ) {
      const o = Math.floor((t + i) / 2), s = this._visibleRowList[o];
      if (e >= s.top && e <= s.bottom)
        return s;
      e < s.top ? i = o - 1 : t = o + 1;
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
    for (let i = e; i <= t; i++) {
      const o = this._rows[i];
      o.remove(), o.visible && (this._totalHeight -= o.height);
    }
    this._rows.splice(e, t - e + 1);
  }
  clearRows() {
    for (let e = this._headerRowsCount; e < this.rowCount; e++) {
      const t = this._rows[e];
      t.isConnectedInDOM && t.remove();
    }
    this._rows.length = this._headerRowsCount, this._visibleRowList.length = this._headerRowsCount, this._totalHeight = this._freezedHeight;
  }
  addRow(e, t, i, o = !0) {
    const s = new fe({
      rowId: this._rows.length,
      height: e,
      top: this._totalHeight,
      defaultHeight: t,
      object: i,
      visible: o
    });
    return this._rows.push(s), o && (this._visibleRowList.push(s), this._totalHeight += e), s;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(e, t, i, o, s = !0) {
    const n = this.insertRows(1, e, t, i, [o], s);
    return o && n[0].updateObject(o, !1), n[0];
  }
  insertRows(e, t, i, o, s, n = !0) {
    if (t < this._headerRowsCount || t > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const d = this._rows[t], a = [];
    let l = d ? d.top : this._totalHeight;
    for (let c = 0; c < e; ++c) {
      const m = t + c, u = typeof n == "function" ? n(c, m) : n;
      a.push(new fe({
        rowId: m,
        height: i,
        defaultHeight: o,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: l,
        visible: u,
        object: s?.[c] ?? void 0
      })), l += i, u && (this._totalHeight += i);
    }
    return d ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
  }
  setRowHeight(e, t) {
    const i = this.getRowById(e), o = i.height;
    i.setHeight(t), i.visible && (this._totalHeight += t - o, i.isFreezed && (this._freezedHeight += t - o));
  }
  moveRows(e, t, i) {
    if (e < this._headerRowsCount || t >= this.rowCount)
      throw new Error("moving row id must be in between headerRow and rowCount");
    if (i < this._headerRowsCount || i > this.rowCount)
      throw new Error("target row id must be in between headerRow and rowCount");
    this._rows.splice(
      i,
      0,
      ...this._rows.splice(e, t - e + 1)
    );
  }
  setRowVisible(e, t) {
    const i = this.getRowById(e);
    if (i.visible === t) return;
    const o = t ? 1 : -1, s = i.height * o;
    i.setVisible(t), this._totalHeight += s, e < this._headerRowsCount && (this._freezedHeight += s, this._hiddenHeaderRowsCount += o), i.visible || i.remove();
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
function it(r) {
  const e = document.createElement("div"), t = document.createElement("div");
  return t.className = "ir-vd-container__viewport ir-vd-container__viewport--freezed", e.className = "ir-vd-container__viewport", r?.className && (e.classList.add(r.className), t.classList.add(r.className)), r?.role && e.setAttribute("role", r.role), r?.tabIndex !== void 0 && e.setAttribute("tabindex", String(r.tabIndex)), {
    viewport: e,
    freezedViewport: t
  };
}
const ot = 4;
function nt() {
  return {
    rAFHandler: -1,
    startRowId: -1,
    scrollRow: -1,
    registeredTasks: /* @__PURE__ */ new Set(),
    afterRenderTasks: []
  };
}
class st extends K {
  constructor(e) {
    super(e), this.args = e, this.contextElement.classList.add("ir-vd-container"), this._viewportElements = it(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new tt(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? oe("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * ot, this.contextElement.style.setProperty("--ir-vd-default-row-height", `${this._defaultRowHeight}px`), this.initScrollEvent(), this.initRowCol();
  }
  _viewportElements;
  _itemManager;
  _debounceContext = nt();
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
      freezedHeight: i,
      totalHeight: o
    } = this._itemManager;
    e.style.setProperty("--ir-vd-container-height", `${String(i)}px`), e.style.setProperty("--ir-vd-row-count", `${this._itemManager.headerRowsCount}`), t.style.setProperty("--ir-vd-container-height", `${String(o)}px`), t.style.setProperty("--ir-vd-row-count", `${this._itemManager.rowCount}`);
  }
  get height() {
    return this._itemManager.totalHeight;
  }
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  _scrollToRow(e) {
    const t = this._itemManager.getRowById(e), i = this.contextElement.scrollTop + this._itemManager.freezedHeight;
    t.top < i ? this.contextElement.scrollTo({ top: t.top - this._itemManager.freezedHeight }) : this.contextElement.scrollTo({ top: t.bottom - this.contextElement.clientHeight });
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
      e.has("update-row-cascade-info") && this.updateCascadeRowInfo(), e.has("update-visible-row") && this.updateVisibleRow(), e.has("update-container-size") && this.updateContainerSize(), e.has("update-viewport") && this.updateViewport(), t.forEach((i) => i());
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
    let i = this._viewportElements.viewport.firstElementChild;
    for (; i; ) {
      const o = this._itemManager.getRowByElement(i);
      i = i.nextElementSibling, o && (o.rowId < e || o.rowId > t) && o.isConnectedInDOM && o.remove();
    }
  }
  clearFreezedViewport() {
    const { freezedViewport: e } = this._viewportElements;
    let t = e.firstElementChild;
    for (; t; ) {
      const i = this._itemManager.getRowByElement(t);
      t = t.nextElementSibling, i.remove();
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
    const e = this.contextElement.scrollTop, t = Math.max(0, e - this._viewportGap, this._itemManager.freezedHeight + 1), i = e + this.contextElement.clientHeight + this._viewportGap, o = this._itemManager.getRowByTop(t), s = this._itemManager.getRowByTop(i) ?? this._itemManager.lastRow;
    if (!o)
      return;
    this.unmountNotInViewport(o.rowId, s.rowId);
    const { viewport: n } = this._viewportElements;
    if (n.childElementCount === 0) {
      n.append(this._itemManager.createRowsFragment(o.rowId, s.rowId));
      return;
    }
    let d = null;
    for (let a = o.rowId; a <= s.rowId; ++a) {
      const l = this._itemManager.getRowById(a);
      if (l.visible) {
        if (!l.isConnectedInDOM) {
          const c = l.getRowElement();
          d ? d.getRowElement().after(c) : n.prepend(c), l.onMounted(l, c);
        }
        d = l;
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
    const i = this.contextElement.scrollTop + this._itemManager.freezedHeight, o = this.contextElement.scrollTop + this.contextElement.clientHeight;
    return t.top >= i && t.bottom <= o;
  }
  moveRows(e, t, i) {
    this._itemManager.moveRows(e, t, i), this.scheduleCascadeRowInfoUpdate(Math.min(e, i)), this.scheduleTasks("update-visible-row", "update-viewport");
  }
  scrollToRow(e) {
    this.isInViewport(e) || (this._debounceContext.registeredTasks.has("update-container-size") ? this.afterRender(() => this._scrollToRow(e)) : this._scrollToRow(e));
  }
  lockMouseEvents() {
    this.contextElement.classList.add("ir-vd-container--dragging");
  }
  unlockMouseEvents() {
    this.contextElement.classList.remove("ir-vd-container--dragging");
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
    e.onMounted = (t, i) => this.onMountedRow(t, i), e.onCreatedElement = (t, i) => this.onCreatedRowElement(t, i), e.onUpdatedObject = (t, i, o) => this.onUpdatedRowObject(t, i, o);
  }
  insertRow(e, t, i, o = !0) {
    const s = this.insertRows(1, e, t, [i], o);
    return i && s[0] && s[0].updateObject(i, !1), s[0];
  }
  insertRows(e, t, i, o, s = !0) {
    const n = this._itemManager.insertRows(
      e,
      t,
      i ?? this._defaultRowHeight,
      this._defaultRowHeight,
      o,
      s
    );
    return n.forEach((d) => this.bindEventsToRow(d)), s && n[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(n[0].rowId + 1)), n;
  }
  *getRowIter() {
    yield* this._itemManager.getRowIter();
  }
  getRowVisible(e) {
    return this._itemManager.getRowById(e).visible;
  }
  addRow(e, t, i = !0) {
    const o = this._itemManager.addRow(e ?? this._defaultRowHeight, this._defaultRowHeight, t, i);
    return this.bindEventsToRow(o), i && this.scheduleTasks("update-container-size", "update-viewport"), o;
  }
  removeRow(e) {
    this.removeRows(e, e);
  }
  removeRows(e, t) {
    this._itemManager.removeRows(e, t), this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  updateRowsVisible(e, t, i) {
    const { freezedViewport: o } = this._viewportElements;
    for (let s = e; s <= t; ++s) {
      const n = this._itemManager.getRowById(s), d = i(n);
      this._itemManager.setRowVisible(s, d), d && s < this._itemManager.headerRowsCount && o.append(this._itemManager.getRowById(s).getRowElement());
    }
    this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  setRowsVisible(e, t, i) {
    this.updateRowsVisible(e, t, () => i);
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
  onUpdatedRowObject(e, t, i) {
  }
  onCreatedRowElement(e, t) {
  }
  afterRender(e) {
    this._debounceContext.afterRenderTasks.push(e), this.scheduleTasks();
  }
}
function rt(r) {
  const t = [{ list: r.filter((o) => !o.parentItem), index: 0 }], i = [];
  if (r.length === 0) return i;
  for (; t.length; ) {
    const o = t[t.length - 1], { index: s, list: n } = o, d = n[s], { items: a, isDisabled: l } = d;
    l || i.push(d), ++o.index, o.index === n.length && t.pop(), d.expanded && a.length > 0 && t.push({
      index: 0,
      list: a
    });
  }
  return i;
}
function at(r, e) {
  let t = null, i = [], o = !1;
  const s = {
    ArrowUp: a,
    ArrowDown: l,
    ArrowLeft: m,
    ArrowRight: c,
    " ": u
  };
  return r.addGlobalEventListener(e, "focus", () => {
    t && w(t, !1);
  }), r.addGlobalEventListener(e, "blur", () => {
    f();
  }), r.addGlobalEventListener(e, "keydown", (v) => {
    s[v.key] && (s[v.key](), v.preventDefault());
  }), {
    updateTreeVisibleInfo: n,
    setFocusNode: w
  };
  function n() {
    o = !0;
  }
  function d() {
    return o && (i = rt(r.getOrderedNodes()), o = !1), i;
  }
  function a() {
    const v = t, R = d();
    if (v === null) {
      w(R[0]);
      return;
    }
    const L = R.findIndex((p) => p.uuid === v.uuid), h = R[L - 1];
    h && w(h);
  }
  function l() {
    const v = t, R = d();
    if (v === null) {
      w(R[0]);
      return;
    }
    const L = R.findIndex((p) => p.uuid === v.uuid), h = R[L + 1];
    h && w(h);
  }
  function c() {
    t !== null && t.items.length !== 0 && (t.expanded && !t.items[0].isDisabled ? w(t.items[0]) : t.expand());
  }
  function m() {
    t != null && (t.expanded ? t.collapse() : t.parentItem && w(t.parentItem));
  }
  function u() {
    t && t.select();
  }
  function w(v, R = !0) {
    f(), t = v, t.liTreeItem.classList.add("is-focus"), R && v.scrollIntoView();
  }
  function f() {
    t && t.liTreeItem.classList.remove("is-focus");
  }
}
const D = "tree", b = {
  tree: {
    "&": D
  },
  treeList: {
    "&": `${D}__list`
  },
  treeListRoot: {
    "&": `${D}__list--root`
  },
  treeLabel: {
    "&": `${D}__label`
  },
  treeLabelText: {
    "&": `${D}__label-text`
  },
  treeItem: {
    "&": `${D}__item`,
    parent: `${D}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${D}__item-content`
  },
  treeIconFolder: {
    "&": `${D}__icon-folder`
  },
  treeIconExpand: {
    "&": `${D}__icon-expand`
  }
}, ce = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), i = document.createElement("span");
  return e.className = b.treeLabel["&"], i.className = b.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (o) => {
      o.iconClass ? (t.isConnected || i.insertAdjacentElement("beforebegin", t), t.className = `${b.treeIconFolder["&"]} ir-icon ${o.iconClass}`, o.iconColor ? t.style.setProperty("--ir-icon-foreground-color", o.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), o.caption ? (i.textContent = o.caption, e.appendChild(i)) : i.remove();
    }
  };
}, dt = "ir-icon--triangle-small-right";
class lt {
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
    caption: i,
    data: o,
    level: s,
    uuid: n,
    defaultChecked: d = !1,
    renderer: a = ce,
    disabled: l = !1,
    draggable: c
  }) {
    this.children = [], this._parentItem = e, this.data = o, this._level = s, this._iconClass = t, this._caption = i, this._template = a(this), this._checked = d, this._subChecked = d, this._disabled = l, this._uuid = n, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(b.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = x(this.liTreeItem, "div", b.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(b.treeList["&"]), this.iconExpand = x(this.divTreeItemContent, "i", b.treeIconExpand["&"], "ir-icon", dt), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (m) => this.onDragStart(m)), this.divTreeItemContent.addEventListener("dragenter", (m) => this.onDragOver(m) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (m) => this.onDragOver(m) && m.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (m) => this.onDragEnd(m)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (m) => {
      try {
        this.onDrop(m);
      } finally {
        this.clearDragging();
      }
    }), c && this.divTreeItemContent.setAttribute("draggable", "true");
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
    return this.liTreeItem.classList.contains(b.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((e) => e.checked || e.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(b.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(b.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(e) {
    if (e === this._parentItem) return;
    const t = this._parentItem, i = e;
    t && t.removeChildNode(this), i && i.addNode(this), this._parentItem = i;
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
    e ? this.liTreeItem.classList.add(b.treeItem.parent) : this.liTreeItem.classList.remove(b.treeItem.parent);
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
    this.hasChildren && this.expanded && this.onCollapsing(this) && (this.liTreeItem.classList.remove(b.treeItem["is-expanded"]), this.ulTreeList.remove(), this.onCollapse(this));
  }
  scrollIntoView(e = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(e);
  }
  expand() {
    this.hasChildren && (this.expanded || this.onExpanding(this) && (this.liTreeItem.classList.add(b.treeItem["is-expanded"]), this.liTreeItem.appendChild(this.ulTreeList), this.onExpand(this)));
  }
  toggle() {
    this.liTreeItem.classList.contains(b.treeItem["is-expanded"]) ? this.collapse() : this.expand();
  }
  select() {
    this.selected || (this.liTreeItem.classList.add(b.treeItem["is-selected"]), this.onSelect(this));
  }
  release() {
    this.selected && (this.liTreeItem.classList.remove(b.treeItem["is-selected"]), this.onRelease(this));
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
class Ni extends K {
  _keyboardInteraction;
  rootElement;
  nodes;
  selectedNode;
  renderer;
  _nodeDraggable;
  _nodeMap = /* @__PURE__ */ new Map();
  constructor({
    contextElement: e,
    renderer: t = ce,
    nodeDraggable: i = !0,
    enabledKeyboard: o = !0
  }) {
    super({ contextElement: e }), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = i, e.classList.add(b.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), o && (this._keyboardInteraction = at(this, e)), i === !1 && e.setAttribute("draggable", "false"), this.rootElement = x(e, "ul", b.treeList["&"], b.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (s) => {
      if (s.preventDefault(), !(s.target instanceof HTMLElement)) return;
      const n = s.target.closest(`.${b.treeItem["&"]}`), d = n ? this.findNodeByUUID(n.dataset.uuid) : null;
      d?.select(), this.onContextMenu(s, d);
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
    const i = Math.max(e.length, t.length);
    for (let o = 0; o < i; o++) {
      const s = e[o], n = t[o];
      if (s === void 0) return !0;
      if (n === void 0) return !1;
      if (s < n) return !0;
      if (s > n) return !1;
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
  addChild(e, t, i, o = void 0) {
    const s = Je();
    if (this._nodeMap.has(s)) throw new Error("UUID already exists");
    const n = new lt({
      parentItem: e,
      caption: t,
      data: i,
      level: e ? e.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: e?.checked,
      draggable: this.nodeDraggable,
      uuid: s
    });
    this._nodeMap.set(n.uuid, n), e && e.addNode(n), this.nodes.push(n), n.divTreeItemContent.ondblclick = (a) => {
      a.target.classList.contains("checkbox__wrapper") || this.onDblClick(n);
    }, n.divTreeItemContent.onclick = (a) => {
      this.onLabelClick(n);
    }, n.iconExpand.onclick = () => this.onToggleClick(n), n.onSelect = () => this.selected = n, n.onRelease = (a) => {
      this.selectedNode = null, this.onReleaseNode(a);
    }, n.onRemove = () => {
      this.nodes.indexOf(n) !== -1 && this.nodes.splice(this.nodes.indexOf(n), 1), this.onRemoveNode(n), this._nodeMap.delete(n.uuid), this._keyboardInteraction?.updateTreeVisibleInfo();
    }, n.onExpanding = () => this.onExpanding(n), n.onExpand = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onExpand(n);
    }, n.onCollapsing = () => this.onCollapsing(n), n.onCollapse = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onCollapse(n);
    }, n.onDragStart = (a) => this.onDragStartNode(n, a), n.onDrop = (a) => this.onDropOnNode(n, a), n.onDragOver = (a) => this.onDragOverOnNode(n, a), n.onDragEnd = (a) => this.onDragEndNode(n, a), n.onRender = (a) => this.onRenderNode(n, a), n.render(), this._keyboardInteraction?.updateTreeVisibleInfo();
    const d = e ? e.ulTreeList : this.rootElement;
    return o === void 0 ? d.appendChild(n.liTreeItem) : o >= d.children.length ? d.insertAdjacentElement("beforeend", n.liTreeItem) : d.children[o].insertAdjacentElement("beforebegin", n.liTreeItem), n;
  }
  moveNode(e, t, i) {
    if (e === t.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const o = e.order;
    e.parentItem = t.parentItem, t.parentItem === null ? e.level = 0 : e.level = t.parentItem.level + 1, t.liTreeItem.insertAdjacentElement(i ? "beforebegin" : "afterend", e.liTreeItem), this.onNodeMoved(e, o);
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
    const t = ze(
      e.target,
      this.contextElement,
      `.${b.treeLabel["&"]}`
    );
    return t !== null ? t.parentElement?.parentElement : null;
  }
  getNodeByOffsetTopOrNull(e) {
    return null;
  }
}
const vi = ({ onCheck: r }) => (e) => {
  const t = ce(), i = document.createElement("label"), o = document.createElement("input");
  return o.type = "checkbox", i.classList.add(de), o.classList.add(ne), i.appendChild(o), t.template.insertAdjacentElement("afterbegin", i), o.addEventListener("click", () => {
    e.updateCheckedWithPropagation(o.checked), e.parentItem?.updateCheckedStatus(), o.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (s) => {
      t.update(s), s.checked !== o.checked && (o.checked = s.checked), s.parentItem?.updateCheckedStatus(), s.updateSubCheckedStatus(), o.dataset.state = s.subChecked ? "sub-checked" : "";
    }
  };
}, ct = 16, ki = (r) => {
  let e = null, t = null;
  const i = () => {
    t && (t.divTreeItemContent.classList.remove("is-top"), t.divTreeItemContent.classList.remove("is-bottom")), t = null;
  };
  r.onDragStartNode = (o, s) => {
    s.dataTransfer && (s.dataTransfer.dropEffect = "move", e = o);
  }, r.onDragOverOnNode = (o, s) => {
    if (e === o)
      return !1;
    let n = o._parentItem;
    for (; n !== null; ) {
      if (n === e) return !1;
      n = n._parentItem;
    }
    return i(), o.divTreeItemContent.classList.add(s.offsetY < ct ? "is-top" : "is-bottom"), t = o, !0;
  }, r.onDropOnNode = (o) => {
    if (!e) throw new Error("No start dragging node!");
    r.moveNode(
      e,
      o,
      o.divTreeItemContent.classList.contains("is-top")
    );
  }, r.onDragEndNode = () => {
    i();
  };
};
class ht {
  _nodeLinkerMap = /* @__PURE__ */ new Map();
  _firstRootNode = null;
  _lastRootNode = null;
  _rootNodeCount = 0;
  _nodeCount = 0;
  throwErrorIfExistsKey(e) {
    if (this._nodeLinkerMap.has(e))
      throw new Error(`NodeLinker: NodeLink already exists for key: ${e}`);
  }
  insertAsFirstChild(e, t, i) {
    const o = this.getNodeLink(e), s = o.getFirstChildNode();
    s === null ? this.addChildNode(e, t, i) : this.insertBeforeChildNode(o.key, t, i, s);
  }
  insertBeforeChildNode(e, t, i, o) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), n = new A({
      data: i,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertBeforeChildNode(n, o), this.addLinkMap(t, n, !1), n;
  }
  insertAfterChildNode(e, t, i, o) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), n = new A({
      data: i,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertAfterChildNode(n, o), this.addLinkMap(t, n, !1), n;
  }
  insertAfterRootNode(e, t, i) {
    this.throwErrorIfExistsKey(e);
    const o = i.getNextNode(), s = new A({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: i,
      nextNode: o,
      firstChildNode: null,
      lastChildNode: null
    });
    return o?.setPrevNode(s), i.setNextNode(s), i === this._lastRootNode && this.setLastRootNode(s), this.addLinkMap(e, s, !0), s;
  }
  insertBeforeRootNode(e, t, i) {
    this.throwErrorIfExistsKey(e);
    const o = i.getPrevNode(), s = new A({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: o,
      nextNode: i,
      firstChildNode: null,
      lastChildNode: null
    });
    return o?.setNextNode(s), i.setPrevNode(s), i === this._firstRootNode && this.setFirstRootNode(s), this.addLinkMap(e, s, !0), s;
  }
  addLinkMap(e, t, i) {
    this._nodeLinkerMap.set(e, t), i && ++this._rootNodeCount, ++this._nodeCount;
  }
  /**
   * 자식 노드 삽입 시, 삽입 할 노드를 찾아주는 함수
   */
  findInsertChildPositionNode(e) {
    let t = e;
    for (; t; ) {
      const i = t.getNextNode();
      if (i)
        return i;
      t = t.getParentNode();
    }
    return t;
  }
  addRootNode(e, t) {
    this.throwErrorIfExistsKey(e);
    const i = new A({
      key: e,
      data: t,
      level: 0,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      parentNode: null,
      prevNode: null
    });
    return this._lastRootNode == null ? (this.setFirstRootNode(i), this.setLastRootNode(i)) : (this._lastRootNode.setNextNode(i), i.setPrevNode(this._lastRootNode), this._lastRootNode = i), this.addLinkMap(e, i, !0), i;
  }
  createNodeLink(e, t, i, o) {
    return i === void 0 ? o === void 0 ? this.addRootNode(t, e) : this.insertBeforeRootNode(t, e, this.getNodeLink(o)) : o === void 0 ? this.addChildNode(i, t, e) : this.insertBeforeChildNode(i, t, e, this.getNodeLink(o));
  }
  addChildNode(e, t, i) {
    this.throwErrorIfExistsKey(t);
    const o = this.getNodeLink(e), s = new A({
      key: t,
      data: i,
      level: o.getNodeLevel() + 1,
      parentNode: o,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return o.addChildNode(s), this.addLinkMap(t, s, !1), s;
  }
  clearChildNodes(e) {
    const t = this.getNodeLink(e);
    this.travelChildNodes(e, (i) => this.deleteNodeInMap(i.key)), t.setFirstChildNode(null), t.setLastChildNode(null);
  }
  travelAllNodes(e, t) {
    const i = this._firstRootNode;
    if (i !== null)
      return this.travelNodes(i, e, t);
  }
  /**
   * startNodeLink부터, 자식 다음 형제 노드 모두 순회
   * rootFirstNode를 넣으면, 모든 노드를 순회
   */
  async travelNodes(e, t, i) {
    const o = [{
      link: e,
      level: e.getNodeLevel()
    }];
    let s = o.pop();
    for (; s; ) {
      const { link: n, level: d } = s, a = n.getNextNode(), l = n.getFirstChildNode(), c = t(n, d);
      c instanceof Promise && await c, a && o.push({ link: a, level: d }), l && (i === void 0 || await i(n, d)) && o.push({ link: l, level: d + 1 }), s = o.pop();
    }
  }
  travelChildNodes(e, t, i) {
    const s = this.getNodeLink(e).getFirstChildNode();
    if (s !== null)
      return this.travelNodes(s, t, i);
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
    const t = this.getNodeLink(e), i = t.getPrevNode(), o = t.getNextNode();
    i?.setNextNode(o), o?.setPrevNode(i), t === this._firstRootNode && this.setFirstRootNode(o), t === this._lastRootNode && this.setLastRootNode(i), this.travelChildNodes(e, (n) => this.deleteNodeInMap(n.key)), this.deleteNodeInMap(e);
    const s = t.getParentNode();
    s ? s.removeChildNode(t) : --this._rootNodeCount;
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
class A {
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
    const t = e.getPrevNode(), i = e.getNextNode();
    t?.setNextNode(i), i?.setPrevNode(t), e === this.getFirstChildNode() && this.setFirstChildNode(i), e === this.getLastChildNode() && this.setLastChildNode(t), e.setParentNode(null);
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
class ut {
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
    }, i = e.getFirstChildNode();
    if (i) {
      const o = [];
      let s = i;
      for (; s; )
        o.push(s.data.node.serialize()), s = s.getNextNode();
      t.children = o;
    }
    return t;
  }
  setColumnText(e, t) {
    if (e === 0)
      return this.setCaption(t);
    {
      const i = this.data.columns ?? [];
      return i[e - 1] = t, this.updateNodeState({
        columns: i
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
  async changeCheck(e) {
    this.checked !== e && await this.hook.emit("nodeChangeChecking", [this, e]) && (await this.updateNodeState({ checked: e }), await this.hook.emit("nodeChangeChecked", [this, e]));
  }
  async release() {
    this.selected && (this._selected = !1, await this.updateNodeState(), await this.hook.emit("nodeRelease", [this]));
  }
  async updateNodeState(e) {
    e && Object.assign(this.data, e), await this.hook.emit("nodeUpdated", [this]);
  }
}
class pt extends K {
  constructor(e) {
    super({
      contextElement: document.createElement("div")
    }), this._hookArgs = e, this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
  _hook = Qe();
  _pluginMap = /* @__PURE__ */ new Map();
  _pluginList;
  get hook() {
    return this._hook;
  }
  get pluginList() {
    return this._pluginList;
  }
  async runPauseEmitContext(e, t) {
    try {
      e.forEach((o) => this.hook.pauseEmit(o));
      const i = t();
      i instanceof Promise && await i;
    } finally {
      e.forEach((i) => this.hook.resumeEmit(i));
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
    if (this._pluginMap.has(t))
      throw new Error("this plugin is already exists.");
    e.mount(this, this._hook), this._pluginMap.set(t, e);
  }
  removePlugin(e) {
    const t = this.getPluginOrNull(e);
    if (!t)
      throw new Error("plugin is not exists.");
    this._pluginMap.delete(e), t.unmount();
  }
  getPluginOrNull(e) {
    return this._pluginMap.get(e) ?? null;
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
class mt {
  _unmountTasks = [];
  addUnmountTask(e) {
    this._unmountTasks.push(e);
  }
  addPluginHook(e, t, i) {
    e.addHook(t, i), this._unmountTasks.push(() => e.removeHook(t, i));
  }
  unmount() {
    this._unmountTasks.forEach((e) => e()), this._unmountTasks.length = 0;
  }
}
class he extends mt {
}
class gt extends he {
  mount(e, t) {
    const i = {
      async ArrowLeft() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        a && (a.expanded === !0 ? await a.collapse() : await n(a.getNodeLink().getParentNode()?.data.node));
      },
      async ArrowRight() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        !a || !a.expandable || (a.expanded === !1 ? await a.expand() : await n(a.getNodeLink().getFirstChildNode()?.data.node));
      },
      async ArrowUp() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const l = e.getSelectedNodes().reduce((m, u) => e.getNodeRowId(u.key) < e.getNodeRowId(m.key) ? u : m, a), c = l.getNodeLink().getPrevNode();
        c ? await n(s(c)) : await n(l.getNodeLink().getParentNode()?.data.node);
      },
      async ArrowDown() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const l = e.getSelectedNodes().reduce((c, m) => e.getNodeRowId(m.key) > e.getNodeRowId(c.key) ? m : c, a);
        if (l.expanded === !1)
          return await n(o(l.getNodeLink()));
        await n(l.getNodeLink().getFirstChildNode()?.data.node);
      },
      // Space Bar
      " ": async function() {
        if (e.getSelectedNodesCount() === 0) return;
        const a = e.getSelectedNodes(), l = a.some((c) => c.checked);
        for (const c of a)
          c.hasCheckbox && await c.changeCheck(!l);
      }
    };
    this.addPluginHook(e, "keydown", d);
    function o(a) {
      const l = a.getNextNode();
      if (l) return l.data.node;
      let c = a.getParentNode();
      for (; c && !c.getNextNode(); )
        c = c.getParentNode();
      return c?.getNextNode()?.data.node;
    }
    function s(a) {
      let l = a;
      for (; l && l.data.node.expanded; ) {
        const c = l.getLastChildNode();
        if (!c) break;
        l = c;
      }
      return l.data.node;
    }
    async function n(a) {
      a && (await a.select(), e.scrollToNode(a.key));
    }
    async function d(a) {
      const l = i[a.key];
      l !== void 0 && (a.preventDefault(), await l());
    }
  }
}
const ft = "minmax(0, 1fr)";
function wt(r) {
  const e = [];
  ue(r) && e.push(`${oe("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const i = r.headerRow.width[t] ?? "";
    i.endsWith("px") ? e.push(`minmax(${i}, ${i})`) : e.push(ft);
  }
  return e.join(" ");
}
function Ct(r) {
  return q("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function _t(r) {
  return q(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function we(r) {
  return q("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function Ce(r) {
  return q("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function ue(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function Nt(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function vt(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function kt(r, e) {
  let t = 1;
  for (let i = 1; i < e && !r.getColumnText(i); i++)
    ++t;
  return t;
}
function bt({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: i }) {
  return o([], i, t, e);
  function o(s, n, d, a) {
    const l = { ...n };
    delete l.children;
    const c = a?.key ?? null, m = r(l);
    if (s.push({
      node: m,
      visible: d,
      parentKeyOrNull: c
    }), n.children && n.children.length > 0)
      for (const u of n.children)
        o(s, u, d && l.expanded === !0, m);
    return s;
  }
}
function Et(r) {
  const {
    nodeLinker: e,
    nodeList: t,
    virtualRowList: i,
    positionArgs: o
  } = r, {
    insertKey: s,
    parentKey: n,
    position: d
  } = o;
  a(), l();
  function a() {
    const c = t[0].node, m = i[0], u = { node: c, virtualRow: m };
    if (s !== void 0) {
      const w = e.getNodeLink(s);
      if (d === "firstChild")
        return e.insertAsFirstChild(w.key, c.key, u);
      const f = w.getParentNode();
      return f === null ? d === "after" ? e.insertAfterRootNode(c.key, u, w) : e.insertBeforeRootNode(c.key, u, w) : d === "after" ? e.insertAfterChildNode(f.key, c.key, u, w) : e.insertBeforeChildNode(f.key, c.key, u, w);
    }
    n === void 0 ? e.addRootNode(c.key, u) : e.addChildNode(n, c.key, u);
  }
  function l() {
    for (let c = 1; c < t.length; c++) {
      const { node: m, parentKeyOrNull: u } = t[c], w = i[c], f = { node: m, virtualRow: w };
      u ? e.addChildNode(u, m.key, f) : s ? e.insertBeforeRootNode(m.key, f, e.getNodeLink(s)) : e.addRootNode(m.key, f);
    }
  }
}
const Rt = {
  nodeDraggable: !0
};
class xt extends he {
  constructor(e = Rt) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", o), this.addPluginHook(e, "treeClick", f), this.addPluginHook(e, "treeDoubleClick", L), this.addPluginHook(e, "nodeExpandIconClick", R);
    let i = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", d), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", n), this.addPluginHook(e, "nodeMouseDown", a));
    async function o(h) {
      h.preventDefault();
      const p = u(h);
      p && (e.multiSelect ? h.ctrlKey ? await p.addSelect() : h.shiftKey ? await v(p) : p.selected === !1 && await p.select() : await p.select(), await t.emit("nodeContextMenu", [h, p]));
    }
    function s(h) {
      const p = u(h);
      p && t.emit("nodeMouseDown", [h, p]);
    }
    function n(h) {
      const p = u(h);
      p && t.emit("nodeMouseUp", [h, p]);
    }
    function d(h, p) {
      p.object && h.dataTransfer?.setData("application/json", JSON.stringify(p.object));
    }
    async function a(h, p) {
      if (!await t.emit("nodeCheckDragging", [h, p])) return;
      const _ = _t(h.target);
      _ && (_.setAttribute("draggable", "true"), _.addEventListener("dragstart", c), i = p);
    }
    function l(h) {
      h.removeEventListener("dragstart", c), h.removeEventListener("dragend", m), h.removeAttribute("draggable"), i = null;
    }
    function c(h) {
      h.target instanceof HTMLElement && i && (h.target.addEventListener("dragend", m), t.emit("nodeDragStart", [h, i]));
    }
    function m(h) {
      h.target instanceof HTMLElement && i && (l(h.target), t.emit("nodeDragEnd", [h, i]));
    }
    function u(h) {
      if (!(h.target instanceof HTMLElement)) return null;
      const N = q("[data-node-key]", ".ir-vd-container__viewport-row ", h.target)?.dataset.nodeKey;
      return N ? e.getNodeOrNull(N) : null;
    }
    async function w(h) {
      if (h.target instanceof HTMLInputElement && Ce(h.target)) {
        const p = h.target.checked;
        await t.emit("headerChangeChecking", [p]) ? await e.setHeaderRowChecked(p) : h.target.checked = !p;
        return;
      }
    }
    async function f(h) {
      if (Ct(h.target)) return w(h);
      const p = u(h);
      if (p) {
        if (we(h.target)) {
          t.emit("nodeExpandIconClick", [h, p]);
          return;
        }
        if (Ce(h.target)) {
          await p.checkToggle();
          return;
        }
        e.multiSelect ? h.ctrlKey ? await p.multiSelectToggle() : h.shiftKey ? await v(p) : await e.selectNode(p.key) : await p.selectToggle(), t.emit("nodeClick", [h, p]);
      }
    }
    async function v(h) {
      const p = e.getSelectedNodes();
      if (p.length === 0) {
        await h.select();
        return;
      }
      await e.selectRange(p[0], h);
    }
    async function R(h, p) {
      await p.toggleExpand();
    }
    function L(h) {
      const p = u(h);
      p && (we(h.target) || (h.preventDefault(), t.emit("nodeDoubleClick", [h, p])));
    }
  }
}
function ye(r) {
  const e = M("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? Oe : ne
  ), e;
}
function It(r) {
  const e = M("div", I.nodeMain, I.base, T.truncate), t = M("button", I.nodeExpandButton, I.nodeIcon), i = M("div", I.base, T.truncate, T.textAlign.center, I.headerCheckboxColumnDiv), o = M("span", I.nodeCaption, T.truncate), s = W("ir-icon--triangle-small-right"), n = W(""), d = ye(r);
  return t.dataset.irRole = "node-expand-button", n.classList.add(I.nodeIcon), s.style.setProperty("--ir-icon-foreground-color", ie.expandIconColor), t.append(s), e.appendChild(t), r.showIcon && e.appendChild(n), e.appendChild(o), i.appendChild(d), {
    mainContentDiv: e,
    expandButton: t,
    icon: n,
    text: o,
    checkbox: d,
    checkboxDiv: i
  };
}
function Tt(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(I.base, T.truncate, I.column), e;
}
function Lt(r, e) {
  return {
    columns: [],
    ...It(e)
  };
}
function yt(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(I.base, T.truncate), r > 0 && t.classList.add(I.column), t;
}
function Ht(r) {
  const e = ye(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(T.verticalAlign.bottom, I.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: M(
      "div",
      I.base,
      T.truncate,
      T.textAlign.center,
      I.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function Dt(r, e, t) {
  const i = Lt(e, t), o = r.getRowElement();
  r.setTemplateHelper(i), o.classList.add(
    te.base,
    T.userSelectNone,
    te.node,
    T.focusOutlineNone
  ), o.role = "treeitem", o.dataset.nodeKey = e.key, He(r, e, t), ue(t) ? o.appendChild(i.checkboxDiv) : vt(t, e) && i.expandButton.insertAdjacentElement("afterend", i.checkbox), o.appendChild(i.mainContentDiv), i.columns.forEach((s) => o.appendChild(s));
}
function St(r, e, t) {
  const i = Ht(e), o = r.getRowElement();
  r.setTemplateHelper(i), o.classList.add(te.base, te.header), o.dataset.nodeHeader = "true", De(r, e, t), i.columns.forEach((s) => o.appendChild(s));
}
function He(r, e, t) {
  if (!r.isCachedElement) return;
  const i = r.getRowElement(), o = e.icon ?? t.defaultIcon, s = e.iconColor ?? t.defaultIconColor, { text: n, columns: d, icon: a, expandButton: l, checkbox: c, mainContentDiv: m } = r.template;
  e.level > 0 ? Le(i, {
    [ie.nodeLevel]: String(e.level)
  }) : i.style.removeProperty(ie.nodeLevel), Y(i, "selected", e.selected), Y(i, "disabled", e.disabled), Y(i, "expanded", e.expanded), Y(i, "expandable", e.expandable), e.expandable === !1 ? l.classList.add(T.invisible) : l.classList.remove(T.invisible), e.expanded ? l.classList.add(T.rotate.deg90) : l.classList.remove(T.rotate.deg90), c.checked = e.checked, e.hasCheckbox === !1 && c.remove(), m.style.gridColumnEnd = `span ${kt(e, t.headerRow.columnCount)}`, o ? (a.className = et(I.nodeIcon, "ir-icon", o), s && a.style.setProperty("--ir-icon-foreground-color", s)) : a.className = T.invisible, n.textContent = e.caption, d.forEach((f) => f.remove());
  const u = t.headerRow.columnCount;
  let w = !1;
  for (let f = 1; f < u; f++) {
    const v = e.getColumnText(f), R = Tt(v);
    (v || w) && (w = !0, d.push(R), i.appendChild(R));
  }
}
function De(r, e, t) {
  const {
    columns: i,
    checkbox: o,
    checkboxDiv: s
  } = r.template;
  i.forEach((a) => a.remove()), i.length = 0;
  const n = ue(e);
  n && (e.headerRow.hasCheckbox && s.appendChild(o), i.push(s), r.getRowElement().appendChild(s)), o.checked = t.headerRow.checked;
  const d = e.headerRow.columnCount;
  for (let a = 0; a < d; a++) {
    const l = yt(a, e);
    i.push(l), r.getRowElement().appendChild(l);
  }
  !n && Nt(e) && i[0].prepend(o);
}
const Mt = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, Pt = {
  layout: "inner",
  ui: "checkbox",
  cascade: !0
};
function Ot() {
  return [
    new xt({
      nodeDraggable: !0
    }),
    new gt()
  ];
}
class bi extends pt {
  _nodeLinker = new ht();
  _virtualDOMContainer = document.createElement("div");
  _virtualDOM;
  _args;
  _selectedNode = [];
  _context;
  constructor(e) {
    super({
      plugins: e.plugins ?? Ot()
    }), this._args = {
      defaultIcon: e.defaultIcon,
      autoSizeColumnMode: e.autoSizeColumnMode ?? !1,
      defaultIconColor: e.defaultIconColor,
      showIcon: e.showIcon ?? !1,
      showCheckbox: e.showCheckbox ?? !1,
      multiSelect: e.multiSelect ?? !1,
      className: e.className ?? "",
      displayHeader: e.displayHeader ?? !1,
      stickyRightColumns: e.stickyRightColumns ?? !1,
      headerRow: Object.assign({}, Mt, e.headerRow),
      checkboxOptions: Object.assign({}, Pt, e.checkboxOptions),
      plugins: this.pluginList
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(Ae), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
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
    this._nodeLinker.travelChildNodes(e, ({ data: { virtualRow: t, node: i } }) => {
      this._virtualDOM.setRowVisible(t.rowId, i.isVisible());
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
    this.setBeginHook("createHeaderRow", St), this.setBeginHook("createNodeRow", Dt), this.setBeginHook("headerRender", De), this.setBeginHook("nodeRender", He), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
  }
  onCreatedRowElement(e, t) {
    e.isFreezed ? this.emitHook("createHeaderRow", [e, this._args, this._context]) : this.emitHook("createNodeRow", [e, e.object, this._args]);
  }
  onUpdatedRowObject(e, t, i) {
    e.isFreezed ? this.emitHook("headerRender", [e, this._args, this._context]) : this.emitHook("nodeRender", [e, i, this._args]);
  }
  initVirtualDOM() {
    this._virtualDOMContainer.classList.add(Ve), this._virtualDOMContainer.style.height = "100%";
    const e = new st({
      contextElement: this._virtualDOMContainer,
      // 헤더용 row 추가
      rowCount: 1,
      headerRowCount: 1,
      defaultRowHeight: oe("tree-view.nodeRowHeight"),
      onCreatedRowElement: this.onCreatedRowElement.bind(this),
      onUpdatedRowObject: this.onUpdatedRowObject.bind(this),
      rowContainer: {
        role: "tree",
        tabIndex: 0
      }
    });
    return e.setRowHeight(0, oe("tree-view.nodeHeaderRowHeight")), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
  }
  initArgs() {
    this._args.className && this.contextElement.classList.add(this._args.className);
  }
  onDestroy() {
    this._virtualDOM.destroy();
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
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.expand(), await this._nodeLinker.travelNodes(t, ({ data: { node: i } }) => i.expand()));
  }
  /**
   * 해당 key의 모든 childNode를 collapse (인자 생략 시 모든 노드 expand)
   */
  async collapseAll(e) {
    const t = e ? this._nodeLinker.getNodeLink(e).getFirstChildNode() : this._nodeLinker.getFirstRootNode();
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.collapse(), await this._nodeLinker.travelNodes(t, ({ data: { node: i } }) => i.collapse()));
  }
  setColumnCount(e) {
    this._args.headerRow.columnCount = e, this.renderHeaderRow(), this.updateTreeTemplateColumns(), this.renderAllNode();
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
  async setHeaderRowChecked(e) {
    this.setTreeContext({ headerRow: { checked: e } }), await this.emitHook("headerChangeChecked", [e]);
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
    this._args.headerRow.width[e] = t, this.updateTreeTemplateColumns();
  }
  /**
   * 현재 선택된 모든 노드 해제
   */
  async releaseSelectedNodes(...e) {
    const t = new Set(e), i = this.getSelectedNodes();
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      for (const o of i)
        t.has(o.key) || await o.release();
    }), await this.emitSelectionChange();
  }
  findNodeCallback(e, t) {
    const i = this.getNodeOrNull(e);
    return i ? t(i) : void console.warn(`node not found: ${e}`);
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
  getCheckedNodes() {
    return this.getSelectedNodes().filter((e) => e.checked);
  }
  getSelectedNodeOrNull() {
    return this._selectedNode[0] ?? null;
  }
  getDefaultMainColumnWidth() {
    const [e, t] = me(
      "tree-view.iconSize",
      "tree-view.defaultHorizontalPadding"
    );
    let i = e + t;
    return this._args.showIcon && (i += e), i;
  }
  async autoSizeColumn(e) {
    const [t, i, o, s] = me(
      "tree-view.fontSize",
      "tree-view.fontFamily",
      "tree-view.defaultHorizontalPadding",
      "tree-view.levelIndentSize"
    ), n = Ke(t, i);
    let d = n.calculateWidth(this.getColumnText(e));
    await this._nodeLinker.travelAllNodes(({ data: { node: a } }, l) => {
      d = Math.max(
        d,
        n.calculateWidth(a.getColumnText(e)) + (e === 0 ? l * s : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), d += e === 0 ? this.getDefaultMainColumnWidth() : o * 2, this.setColumnWidth(e, `${d}px`);
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
    Le(this.contextElement, {
      [ie.templateColumns]: wt(this._args)
    });
  }
  async exceptInSelected(e) {
    await this.runPauseEmitContext(["nodeSelectionChange", "nodeRelease"], async () => {
      for (const i of e)
        await i.release();
    });
    const t = new Set(e.map((i) => i.key));
    this._selectedNode = this._selectedNode.filter((i) => !t.has(i.key));
  }
  async removeNode(e) {
    const t = this._nodeLinker.getNodeLinkOrNull(e);
    if (!t) {
      console.warn(`node not found: ${e}`);
      return;
    }
    const { virtualRow: i, node: o } = t.data, s = t.getParentNode();
    this._virtualDOM.forceLayout();
    const n = i.rowId, d = n + this._nodeLinker.getChildNodeCount(e), a = [o];
    this._nodeLinker.travelChildNodes(e, ({ data: { node: l } }) => void (l.selected && a.push(l))), await this.exceptInSelected(a), this._virtualDOM.removeRows(n, d), this._nodeLinker.removeNode(e), s && await this.hook.emit("nodeUpdated", [s.data.node]);
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
    const i = this.getNode(e), o = i.serialize(), s = i.getNodeLink().getParentNode();
    await this.removeNode(e), this.addNode({
      ...o,
      insertKey: t.targetKey,
      position: t.position
    }), t.position === "firstChild" && await this.getNode(t.targetKey).expand(), s && await s.data.node.updateNodeState(), await this.emitHook("nodeMoved", [i, t]);
  }
  clearChildNodes(e) {
    const t = this._nodeLinker.getNodeLink(e);
    if (t.hasChild() === !1) return;
    const { node: i, virtualRow: o } = t.data;
    this._virtualDOM.forceLayout();
    const s = o.rowId + 1, n = s + (this._nodeLinker.getChildNodeCount(e) - 1);
    this._nodeLinker.clearChildNodes(e), this._virtualDOM.removeRows(s, n), this.hook.emit("nodeUpdated", [i]);
  }
  getNodeVisible(e) {
    return this.getNode(e).isVisible();
  }
  getRowVisible(e) {
    return this._virtualDOM.getRowById(e).visible;
  }
  getChildNodeList(e) {
    let t = this._nodeLinker.getNodeLink(e).getFirstChildNode();
    const i = [];
    for (; t; )
      i.push(t.data.node), t = t.getNextNode();
    return i;
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
      parentKey: i,
      position: o
    } = e;
    if (i === void 0 && t === void 0)
      return this._virtualDOM.getRowCount();
    if (this._virtualDOM.forceLayout(), t !== void 0) {
      const s = this.getMapValue(t).virtualRow.rowId;
      switch (o) {
        case "firstChild":
          return s + 1;
        case "after":
          return s + this._nodeLinker.getChildNodeCount(t) + 1;
        default:
          return s;
      }
    }
    if (i)
      return this.getAddingChildRowId(i);
    throw new Error(`invalid addNode args: ${JSON.stringify(e)}`);
  }
  hasNode(e) {
    return this._nodeLinker.hasNode(e);
  }
  createNode(e) {
    if (this.hasNode(e.key)) throw new Error(`node already exists: ${e.key}`);
    return new ut({
      nodeData: e,
      hook: this.hook,
      nodeLinker: this._nodeLinker
    });
  }
  getParentNodeByPosArgs(e) {
    const { parentKey: t, insertKey: i, position: o } = e;
    return i !== void 0 && o === "firstChild" ? this.getNode(i) : t !== void 0 ? this.getNode(t) : null;
  }
  /**
   * @param posArgsOrNull null 전달 시, rootNode 마지막에 추가
   * @param nodeList 추가할 노드 리스트
   */
  addNodeList(e, t) {
    const i = e ?? {}, o = this.getParentNodeByPosArgs(i), { parentNodeOrNull: s, visible: n } = o ? {
      parentNodeOrNull: o,
      visible: o.isVisible() && o.expanded === !0
    } : {
      parentNodeOrNull: null,
      visible: !0
    }, d = this.createNode.bind(this), a = t.flatMap((c) => bt({
      visible: n,
      nodeData: c,
      createNodeFunc: d,
      parentNodeOrNull: s
    })), l = this._virtualDOM.insertRows(
      a.length,
      this.getAddingRowId(i),
      void 0,
      a.map(({ node: c }) => c),
      (c) => a[c].visible
    );
    return Et({
      positionArgs: i,
      nodeList: a,
      virtualRowList: l,
      nodeLinker: this._nodeLinker
    }), s?.updateNodeState(), a;
  }
  addNode(e) {
    const {
      // position args
      parentKey: t,
      insertKey: i,
      position: o,
      ...s
    } = e, [n] = this.addNodeList({ parentKey: t, insertKey: i, position: o }, [s]);
    if (!n) throw new Error("first node is undefined");
    return n.node;
  }
  async selectRange(e, t) {
    const i = this.getMapValue(e.key), o = this.getMapValue(t.key), s = i.virtualRow.rowId, n = o.virtualRow.rowId, d = s < n ? [s, n] : [n, s];
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
const ae = "ir-style/tree-view-drag-drop-move", _e = 8;
async function At(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function Vt(r, e, t) {
  return t - r < _e ? "before" : e - t < _e ? "after" : "firstChild";
}
function Ft(r) {
  const e = r.dataTransfer?.getData(ae);
  return e ? JSON.parse(e) : null;
}
const Ne = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, Bt = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class Ei extends he {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t) {
    const {
      canNodeMoveDrop: i,
      canNodeMoveStart: o,
      canNodeMoveDragOver: s,
      onDropNodeData: n,
      onDragEnd: d
    } = this._args;
    this.addPluginHook(e, "nodeDragStart", f), this.addPluginHook(e, "nodeDragOver", v), this.addPluginHook(e, "nodeDragEnd", h), this.addPluginHook(e, "nodeDrop", p), this.addPluginHook(e, "treeDragLeave", m);
    let a = { ...Ne }, l = { ...Bt }, c = !1;
    function m() {
      L();
    }
    function u(N, _) {
      if (!N.dataTransfer) throw new Error("dataTransfer is null");
      c = !1, l = _, a = { ...Ne }, N.dataTransfer.setData(ae, JSON.stringify(_));
    }
    function w(N, _, C) {
      if (!N.dataTransfer?.types.includes(ae)) return !1;
      const k = l.srcTreeViewId === e.uuid;
      return k && (_.key === l.srcNodeData.key || _.getNodeLink().isProgenyNode(l.srcNodeData.key)) ? !1 : s?.(k, _, C) ?? !0;
    }
    function f(N, _) {
      (o?.(_) ?? !0) && u(N, { srcNodeData: _.serialize(), srcTreeViewId: e.uuid });
    }
    function v(N, _, C) {
      const { top: k, bottom: y } = e.getNodeTopBottom(_.key), g = Vt(k, y, e.scrollTop + N.offsetY);
      N.dataTransfer && w(N, _, g) ? (N.preventDefault(), N.dataTransfer.dropEffect = "move", R(_, C, g)) : L();
    }
    function R(N, _, C) {
      a.row === _ && a.cursorType === C || (L(), a = { nodeKey: N.key, row: _, cursorType: C }, _.getRowElement().dataset.drag = C);
    }
    function L() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function h(N, _) {
      try {
        N.dataTransfer?.dropEffect === "move" && d?.(c, { ...l });
      } finally {
        L();
      }
    }
    async function p(N, _) {
      try {
        const C = Ft(N), k = { ...a };
        if (!C || !await At(() => i?.(C, k))) return;
        c = !0, n?.(C.srcTreeViewId === e.uuid, C, k);
      } finally {
        L();
      }
    }
  }
}
const ve = (r, e) => r instanceof Date ? S(r).startOf("D") : typeof r == "string" ? S(r, e) : S(null);
class Ri extends K {
  selectedDate = null;
  calendarDate = /* @__PURE__ */ new Date();
  format;
  div;
  input;
  button;
  handler;
  latestValue;
  _minDate;
  _maxDate;
  constructor({
    div: e,
    defaultDate: t,
    format: i = j.datePicker.dateFormat,
    checkbox: o = !1,
    disabled: s = !1,
    allowedEmptyString: n = !0,
    onSelect: d,
    onChange: a,
    onCheckboxClick: l,
    minDate: c = ge().getStoreValue("datePicker.minDate"),
    maxDate: m = ge().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const u = ve(t, i);
      u.isValid() ? (this.calendarDate = u.toDate(), this.selectedDate = u.toDate()) : console.error(`invalid defaultDate format. it must follow ${i}`);
    }
    if (!n && this.selectedDate == null) {
      const u = ve(/* @__PURE__ */ new Date(), i);
      this.calendarDate = u.toDate(), this.selectedDate = u.toDate();
    }
    if (this.format = i, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(W("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(ke), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", this.format), this.input.classList.add(be, "tnum-adj"), this.button.className = Ee, this.button.type = "button", this._minDate = c, this._maxDate = m, d && (this.onSelect = d), a && (this.onChange = a), l && (this.onCheckboxClick = l), o) {
      const u = document.createElement("div"), w = document.createElement("label"), f = document.createElement("input");
      f.setAttribute("type", "checkbox"), u.classList.add(Re, xe), w.className = de, f.className = ne, w.appendChild(f), u.appendChild(w), this.div.appendChild(u), f.checked = !s, f.onchange = () => {
        this.disabled = !f.checked, this.onCheckboxClick(f.checked);
      }, this.addCoreElement(u);
    }
    this.disabled = s, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = S(this.selectedDate).format(i)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        n ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      const u = S(this.input.value, this.format, !0);
      !u.isValid() || u.toDate() < this.minDate || u.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(u.toDate());
    }), this.handler = Ze({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (u) => {
        this.setDate(u), this.onSelect(u), this.hide();
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
  set minDate(e) {
    this._minDate = e;
  }
  set maxDate(e) {
    this._maxDate = e;
  }
  set disabled(e) {
    e ? (this.input.setAttribute("disabled", ""), this.button.setAttribute("disabled", "")) : (this.input.removeAttribute("disabled"), this.button.removeAttribute("disabled")), this.inputCheckbox && (this.inputCheckbox.checked = !e);
  }
  setDate(e) {
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = S(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
  }
  show() {
    this.isVisible || (this.handler.update(this.calendarDate, this.selectedDate), this.handler.show());
  }
  hide() {
    this.isVisible && this.handler.hide();
  }
  /* Object Events */
  onSelect(e) {
  }
  onChange(e) {
  }
  onCheckboxClick(e) {
  }
  updateCalendar() {
    this.handler.update(this.calendarDate, this.selectedDate);
  }
}
const H = "dialog", G = {
  dialog: {
    "&": H,
    transparent: `${H}--transparent`,
    "is-visible": "is-visible"
  },
  dialogWrapper: {
    "&": `${H}__wrapper`
  },
  dialogHeader: {
    "&": `${H}__header`
  },
  dialogHeaderTitle: {
    "&": `${H}__header-title`
  },
  dialogHeaderActions: {
    "&": `${H}__header-actions`
  },
  dialogContent: {
    "&": `${H}__content`
  },
  dialogFooter: {
    "&": `${H}__footer`
  },
  dialogFooterLeft: {
    "&": `${H}__footer-left`
  },
  dialogFooterRight: {
    "&": `${H}__footer-right`
  },
  dialogButtonClose: {
    "&": `${H}__button-close`
  }
}, Ut = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function zt() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = document.createElement("div"), o = document.createElement("div"), s = document.createElement("i"), n = document.createElement("div"), d = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), l = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", G.dialog["&"], Te.zIndex.message), e.className = G.dialogWrapper["&"], t.className = G.dialogContent["&"], i.className = $.modal, o.className = $.content, n.className = $.actions, Object.values(d).forEach((c) => c.classList.add(Fe)), d.yes.classList.add(pe), d.ok.classList.add(pe), d.retry.classList.add(Be), d.ignore.classList.add(Ue), a.classList.add("ir-icon", "ir-icon--close"), l.className = $.btnClose, n.appendChild(d.no), n.appendChild(d.stop), n.appendChild(d.ignore), n.appendChild(d.retry), n.appendChild(d.yes), n.appendChild(d.ok), l.appendChild(a), i.appendChild(l), i.appendChild(s), i.appendChild(o), i.appendChild(n), t.appendChild(i), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: s,
    confirmContent: o,
    confirmActions: n,
    buttonMap: d,
    closeButton: l
  };
}
const $t = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = zt()), r;
  };
})();
function z() {
  return $t();
}
const jt = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, Gt = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), Wt = {
  onTagAttr(r, e, t, i) {
    if (!i && Gt.has(e))
      return `${e}="${Ye.escapeAttrValue(t)}"`;
  }
}, Z = {
  count: 0
}, xi = () => Z.count > 0;
class Ii {
  constructor(e) {
    this.args = e;
    const {
      iconType: t = "info",
      buttonType: i = ["ok"],
      messageHTML: o,
      msgMap: s = {},
      onClick: n,
      escButton: d,
      enterButton: a,
      contentElement: l
    } = e;
    this.visible = !1, this.iconType = t, this.buttonType = i, o && (this.messageHTML = qe(o, Wt)), l && (this.contentElement = l), this.msgMap = {
      ...s
    }, this.enterButton = a, this.escButton = d, this.escController = Ie(this), n && (this.onClick = n);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentElement;
  iconType;
  buttonType;
  msgMap;
  visible;
  messageHTML;
  enterButton;
  escButton;
  escHandler;
  enterHandler = null;
  escController;
  activeElement = null;
  updateContent() {
    const e = z();
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
    const e = z();
    Z.count++, this.updateContent(), this.visible = !0, this.activeElement = document.activeElement, e.confirmIcon.className = `${$.icon} ir-icon ${jt[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const t of Ut)
      e.buttonMap[t].remove(), e.buttonMap[t].innerText = this.msgMap[t] ?? j.confirm[t], e.buttonMap[t].onclick = () => {
        this.hide(), this._doClick(t);
      };
    for (const t of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[t]);
    e.dialog.isConnected || le("message").appendChild(e.dialog), e.dialog.classList.add(G.dialog["is-visible"]), e.dialog.focus(), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  _registerEnterESCHandler() {
    this.enterHandler = () => {
      const e = z();
      this.enterButton ? e.buttonMap[this.enterButton].click() : this.buttonType.length === 1 ? e.buttonMap[this.buttonType[0]].click() : this.hide();
    }, $e("Enter", this.enterHandler), this.escController.create();
  }
  show() {
    if (Z.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = z();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  hide() {
    if (this.visible === !1) return;
    this.escController.destroy(), Z.count = 0, setTimeout(() => {
      this.activeElement instanceof HTMLElement && (this.activeElement.focus(), this.activeElement = null);
    }, 0);
    const e = z();
    this.visible = !1, e.dialog.classList.remove(G.dialog["is-visible"]), this.enterHandler && je("Enter", this.enterHandler), this.enterHandler = null;
  }
  _doClick(e) {
    this.onClick(e);
  }
  onClick(e) {
  }
}
const V = "time-picker", P = {
  timePicker: {
    "&": V,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${V}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${V}__button-panel`
  },
  timePickerPanel: {
    "&": `${V}__panel`
  },
  timePickerPanelItem: {
    "&": `${V}__panel-item`
  },
  timePickerDivider: {
    "&": `${V}__divider`
  }
};
function Kt(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: i, minute: o, second: s } = Se(t);
    return i < 0 || i >= 24 || o < 0 || o >= 60 ? !1 : !(e && s < 0 || s >= 60);
  } else
    return !1;
}
function Se(r) {
  const [e, t, i] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(i)
  };
}
function qt(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const J = 12, Yt = 60, Xt = 60, Jt = ["period", "hour", "minute", "second"];
function Qt() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [o, s, n, d] = i;
  r.classList.add(P.timePicker["&"], Te.zIndex.popover), i.forEach((g, E) => {
    g.setAttribute("data-type", Jt[E]), g.className = P.timePickerPanel["&"], e.appendChild(g);
  }), e.className = P.timePickerPanelWrapper["&"], t.className = P.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function l(g) {
    const E = document.createElement("div");
    return E.className = P.timePickerPanelItem["&"], E.dataset.text = g, E.innerText = g, E;
  }
  return X(2, () => i[0].appendChild(l(""))), X(J, (g) => i[1].appendChild(l(`${g}`))), X(Yt, (g) => i[2].appendChild(l(`${g}`))), X(Xt, (g) => i[3].appendChild(l(`${g}`))), {
    elements: {
      nowButton: a,
      secondPanel: d,
      timePicker: r
    },
    updateI18n: c,
    removeSelected: m,
    getTimeElements: u,
    scrollIntoView: w,
    selectTime: f,
    isAM: v,
    setPeriod: R,
    setHourId: L,
    setMinuteId: h,
    setSecondId: p,
    periodGenerator: N,
    getCurrentTime: _,
    hourGenerator: C,
    minuteGenerator: k,
    secondGenerator: y
  };
  function c() {
    a.innerHTML = "", a.appendChild(W("ir-icon--check")), a.append(j.timePicker.btnNow), i[0].children[0].innerHTML = "", i[0].children[1].innerHTML = "", i[0].children[0].append(j.timePicker.am), i[0].children[1].append(j.timePicker.pm);
  }
  function m() {
    r.querySelectorAll(".is-selected").forEach((g) => g.classList.remove("is-selected"));
  }
  function u(g, E, F) {
    const O = g < J, B = O ? g : g - J, U = O ? 0 : 1;
    return {
      periodElement: o.children[U],
      hourElement: s.children[B],
      minuteElement: n.children[E],
      secondElement: d.children[F]
    };
  }
  function w(g, E, F) {
    const { hourElement: O, minuteElement: B, secondElement: U } = u(g, E, F);
    s.scrollTop = O.offsetTop - s.clientHeight / 2, n.scrollTop = B.offsetTop - n.clientHeight / 2, d.scrollTop = U.offsetTop - d.clientHeight / 2;
  }
  function f(g, E, F) {
    const { periodElement: O, hourElement: B, minuteElement: U, secondElement: Pe } = u(g, E, F);
    m(), O.classList.add("is-selected"), B.classList.add("is-selected"), U.classList.add("is-selected"), Pe.classList.add("is-selected");
  }
  function v() {
    return o.children[0].classList.contains("is-selected");
  }
  function R(g) {
    o.children[(g + 1) % 2].classList.remove("is-selected"), o.children[g].classList.add("is-selected");
  }
  function L(g) {
    s.querySelector(".is-selected")?.classList.remove("is-selected"), s.children[g].classList.add("is-selected");
  }
  function h(g) {
    n.querySelector(".is-selected")?.classList.remove("is-selected"), n.children[g].classList.add("is-selected");
  }
  function p(g) {
    d.querySelector(".is-selected")?.classList.remove("is-selected"), d.children[g].classList.add("is-selected");
  }
  function* N() {
    yield [0, o.children[0]], yield [1, o.children[1]];
  }
  function _() {
    return qt(
      se(s) + (v() ? 0 : J),
      se(n),
      se(d)
    );
  }
  function* C() {
    let g = 0;
    for (const E of s.children)
      yield [g++, E];
  }
  function* k() {
    let g = 0;
    for (const E of n.children)
      yield [g++, E];
  }
  function* y() {
    let g = 0;
    for (const E of d.children)
      yield [g++, E];
  }
}
function se(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const Zt = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Qt()), r;
  };
})();
function ei({ uuid: r, refElement: e, onChange: t, visibleSeconds: i }) {
  let o = !1, s = () => {
  };
  const {
    elements: n,
    getCurrentTime: d,
    selectTime: a,
    scrollIntoView: l,
    updateI18n: c,
    hourGenerator: m,
    minuteGenerator: u,
    secondGenerator: w,
    periodGenerator: f,
    setPeriod: v,
    setHourId: R,
    setMinuteId: L,
    setSecondId: h
  } = Zt(), p = {
    setTime(C) {
      const k = i ? C : C + ":00", { hour: y, minute: g, second: E } = Se(k);
      a(y, g, E), l(y, g, E);
    },
    show: () => {
      if (!o) {
        c(), o = !0, N.create(), _.create(), n.nowButton.onclick = (C) => {
          const k = S().format("HH:mm:ss");
          p.setTime(k), t(C, k);
        };
        for (const [C, k] of f())
          k.onclick = (y) => {
            v(C), t(y, d());
          };
        for (const [C, k] of m())
          k.onclick = (y) => {
            R(C), t(y, d());
          };
        for (const [C, k] of u())
          k.onclick = (y) => {
            L(C), t(y, d());
          };
        if (i) {
          for (const [C, k] of w())
            k.onclick = (y) => {
              h(C), t(y, d());
            };
          n.secondPanel.style.removeProperty("display");
        } else
          n.secondPanel.style.setProperty("display", "none");
        n.timePicker.isConnected || le("popover").appendChild(n.timePicker), n.timePicker.style.removeProperty("display"), n.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          n.timePicker.classList.add(P.timePicker["is-visible"]), s(), s = Ge(e, n.timePicker);
        }, 0);
      }
    },
    hide: () => {
      o && (N.destroy(), _.destroy(), n.timePicker.classList.remove(P.timePicker["is-visible"]), n.timePicker.addEventListener("transitionend", (C) => {
        C.currentTarget === C.target && (o = !1, r === n.timePicker.getAttribute("data-uuid") && (s(), n.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => p.hide(),
    get visible() {
      return o;
    }
  }, N = Ie(p), _ = Xe({
    eventElements: [n.timePicker],
    clickOutsideFunc: () => p.hide()
  });
  return p;
}
const re = { checkbox: Re, checkboxWrapper: de, checkboxInput: ne }, Q = { input: ke, inputNative: be, inputSuffix: Ee, inputPrefix: xe };
class Ti extends K {
  input;
  button;
  timePickerHandler;
  latestValue;
  _value;
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, i = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = Q.input, this.input = document.createElement("input"), this.input.placeholder = i, this.input.className = Q.inputNative, this.button = document.createElement("button"), this.button.appendChild(W("ir-icon--watch")), this.button.className = Q.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = ei({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (o, s) => {
        const n = S(s, "HH:mm:ss", !0).format(i);
        this.value = n, this.onChange(n);
      }
    }), e.checkbox) {
      const o = document.createElement("div"), s = document.createElement("label"), n = document.createElement("input");
      n.setAttribute("type", "checkbox"), o.classList.add(re.checkbox, Q.inputPrefix), s.className = re.checkboxWrapper, n.className = re.checkboxInput, s.appendChild(n), o.appendChild(s), this.contextElement.appendChild(o), n.checked = !e.disabled, n.onchange = () => this.disabled = !n.checked, this.addCoreElement(o);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = S(e.value, i).format(i)), this.input.onblur = () => {
      Kt(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
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
class ti {
  _dialogElement;
  _wrapperElement;
  _headerElement;
  _bodyElement;
  _footerElement;
  constructor() {
    this._dialogElement = M("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = x(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = x(this._wrapperElement, "div", "dialog__header"), this._bodyElement = x(this._wrapperElement, "div", "dialog__content"), this._footerElement = x(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(e) {
    return this._wrapperElement.style.width = `${e}px`, this;
  }
  addStrongHeaderTitle(e) {
    const t = x(this._headerElement, "strong", "dialog__header-title");
    return t.innerText = e, this;
  }
  createHeaderCloseButton(e) {
    const t = x(this._headerElement, "div", "dialog__header-actions"), i = x(t, "button", "dialog__button-close");
    return x(i, "i", "ir-icon", "ir-icon--close"), i.onclick = e, this;
  }
  setFooterClass(...e) {
    return this._footerElement.classList.add(...e), this;
  }
  setContentElement(...e) {
    for (; this._bodyElement.lastChild; )
      this._bodyElement.lastChild.remove();
    return this._bodyElement.append(...e), this;
  }
  addFooterButton(e, t, ...i) {
    const o = x(this._footerElement, "button", "button", ...i);
    return o.innerText = e, o.onclick = t, this;
  }
  get element() {
    return this._dialogElement;
  }
}
const ii = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
}, oi = {
  "#login-info-dialog.title": "ログイン情報",
  "#login-info-dialog.confirm-button": "確認",
  "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
  "AUTH.ACCESSIP": "最終ログインIP",
  "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
  "AUTH.SECURITY.NOTICE": "セキュリティ情報"
}, Me = {
  "#login-info-dialog.title": "로그인 정보",
  "#login-info-dialog.confirm-button": "확인",
  "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
  "AUTH.ACCESSIP": "최종 로그인 IP",
  "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
  "AUTH.SECURITY.NOTICE": "보안 사항"
}, ni = {
  "#login-info-dialog.title": "登录信息",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "密码变更期限",
  "AUTH.ACCESSIP": "最终登录IP",
  "AUTH.LASTESTLOGINTIME": "最终登录时间",
  "AUTH.SECURITY.NOTICE": "保安事项"
}, si = { ko: Me, en: ii, ja: oi, zh: ni };
function ri(r, e) {
  return r in e;
}
function ai(r) {
  const e = si[r] ?? Me;
  return {
    getMsg(t, ...i) {
      return ri(t, e) ? e[t] : t;
    }
  };
}
const di = 550, ee = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function li(r) {
  return r.props.some(([e]) => ee[e] !== void 0);
}
function ci(r) {
  return r.props.filter(([e]) => ee[e] !== void 0).sort(([e], [t]) => ee[e] - ee[t]);
}
function hi(r, e) {
  const t = document.createDocumentFragment(), i = new DOMParser(), o = e.replace(/&/g, "&amp;");
  let n = i.parseFromString(`<root>${o}</root>`, "application/xml").firstChild?.firstChild;
  for (; n; ) {
    if (n.nodeType === 1 && n instanceof Element)
      if (n.tagName.toLowerCase() === "font") {
        const d = document.createElement("span");
        d.textContent = n.textContent, d.style.cssText = n.getAttribute("style") ?? "";
        const a = n.getAttribute("color"), l = n.getAttribute("bgcolor");
        a && (d.style.color = a.replace("cl", "")), l && (d.style.backgroundColor = l.replace("cl", "")), t.append(d);
      } else n.tagName.toLowerCase() === "br" ? t.append(document.createElement("br")) : console.warn(`loginInfoDialog-parser::not allowed tag ${n.tagName}`);
    else n.textContent && t.append(n.textContent);
    n = n.nextSibling;
  }
  r.append(t);
}
function Li(r) {
  const {
    irm010Data: e,
    lang: t = "ko",
    onClose: i
  } = r;
  if (!li(e))
    throw new Error("no login info data! check irm010 response");
  const o = new ti(), { getMsg: s } = ai(t), n = () => {
    a.hide();
  }, d = (c) => {
    c.key === "Enter" && n();
  }, a = We({
    element: o.element,
    type: "dialog",
    parentElement: le("dialog"),
    onESC() {
      i?.(), window.removeEventListener("keyup", d);
    }
  }), l = (() => {
    const c = M("ul", "row", "gap-y--xs");
    return ci(e).forEach(([u, w]) => {
      const f = x(c, "li", "row", "col", "col--12");
      x(f, "div", "col", "col--4").innerText = s(u), u === "AUTH.SECURITY.NOTICE" ? hi(
        x(f, "div", "col", "col--8"),
        w
      ) : x(f, "div", "col", "col--8").innerText = w;
    }), c;
  })();
  return o.setDialogWidth(di).addStrongHeaderTitle(s("#login-info-dialog.title")).createHeaderCloseButton(n).setContentElement(l).setFooterClass("justify-content--end").addFooterButton(s("#login-info-dialog.confirm-button"), n, "button--primary"), {
    popoverHandler: a,
    show() {
      o.element.focus(), a.show(), window.addEventListener("keyup", d);
    },
    hide() {
      a.hide();
    }
  };
}
export {
  Ai as ClipboardManager,
  eo as IRCommandBlock,
  to as IRCommandManager,
  Ii as IRConfirm,
  ro as IRContextMenu,
  Ri as IRDatePicker,
  io as IRSelect,
  Ti as IRTimePicker,
  Ni as IRTree,
  bi as IRTreeView,
  Ei as IRTreeViewDragDropMovePlugin,
  gt as IRTreeViewKeyboardPlugin,
  xt as IRTreeViewMousePlugin,
  he as IRTreeViewPlugin,
  st as IRVirtualDOM,
  go as Logger,
  Vi as ReactiveState,
  x as appendElement,
  Fi as blobToStr,
  Di as clearGlobalKeyListener,
  q as closest,
  Te as clsZId,
  Xe as createClickOutsideHandler,
  Bi as createCustomIcon,
  oo as createDropdownDiv,
  no as createDropdownItem,
  Ie as createESCHideController,
  M as createElement,
  Si as createFloatingHandler,
  W as createIconElement,
  lo as createImageFromSrcUrl,
  Xi as createLoadingHandler,
  Li as createLoginInfoDialog,
  co as createObjectURLFromSvg,
  We as createPopover,
  Ji as createSplitContainer,
  Ui as createTooltip,
  zi as createTooltipBySelector,
  Qi as createTooltipContainer,
  ho as downloadDataURL,
  X as forEachBySize,
  $i as forEachFilterBySize,
  ji as get2DGenerator,
  uo as getBase64FromSvg,
  Gi as getIRIconPng,
  po as getImageBlobFromImage,
  le as getLayerElement,
  Wi as getMinMaxBetween,
  Ke as getTextWidthContext,
  ge as getThemeStore,
  Ki as getTooltipElements,
  Mi as getVirtualEl,
  xi as hasDisplayedConfirm,
  li as hasLoginInfo,
  j as i18n,
  Ge as offsetBottomAutoUpdate,
  qi as parseInt,
  Pi as peekESCStack,
  $e as registerGlobalKeyListener,
  vi as renderCheckboxTreeNode,
  ce as renderDefaultTreeNode,
  ki as setTreeDragDropReorder,
  je as unregisterGlobalKeyListener,
  Je as uuid,
  qe as xss
};
//# sourceMappingURL=index.js.map
