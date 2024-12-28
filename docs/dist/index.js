import { j as xe, k as yt, l as Ce, m as Ke, n as qe, b as at, g as Ae, u as It, h as Lt, p as Tt } from "./chunks/floating-DlacX8th.js";
import { q as zn, w as Fn, d as Vn, t as Bn, r as Un } from "./chunks/floating-DlacX8th.js";
import { I as pe, c as St, d as Y, a as Ht, i as le, b as ye } from "./chunks/command-manager-BpzD-JV7.js";
import { j as jn, h as Gn, g as Wn, e as Kn, f as qn } from "./chunks/command-manager-BpzD-JV7.js";
import { f as P, h as ge, i as Z, d as he, j as Dt, c as dt, k as _e, a as Pt } from "./chunks/rx-state-ZWe0-z5g.js";
import { C as Xn, L as Jn, R as Zn, q as Qn, l as eo, e as to, p as io, r as no, v as oo, u as so, n as ro, m as ao, s as lo, o as co, t as ho } from "./chunks/rx-state-ZWe0-z5g.js";
import { u as Mt, x as Ot, l as At } from "./chunks/utility-D14ZXKIY.js";
import { e as po, c as go, b as fo, a as mo, d as wo, g as Co, f as _o } from "./chunks/utility-D14ZXKIY.js";
import { G as ze, H as Te, I as Ie, k as O, J as Le, K as q, L as M, M as zt, N as Ft, O as Vt, P as Ye, Q as lt, R as ct, S as ht, T as ut, U as pt, V as de, W as Bt, X as Ut, Y as Xe, Z as Je, _ as Ze, $ as Se } from "./chunks/css-F1iGWdNw.js";
import { c as $t } from "./chunks/clsx-OuTLNxxd.js";
import { I as vo } from "./chunks/index-DF0EIZtR.js";
class Qe {
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
    defaultHeight: n,
    object: s,
    visible: o
  }) {
    this._rowId = e, this._top = t, this._height = i, this._object = s ?? null, this._visible = o, this._defaultHeight = n;
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
class jt {
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
    for (let n = e; n <= t; n++) {
      const s = this._rows[n];
      if (s.visible) {
        const o = s.getRowElement();
        i.appendChild(o), s.onMounted(s, o);
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
      const n = Math.floor((t + i) / 2), s = this._visibleRowList[n];
      if (e >= s.top && e <= s.bottom)
        return s;
      e < s.top ? i = n - 1 : t = n + 1;
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
      const n = this._rows[i];
      n.remove(), n.visible && (this._totalHeight -= n.height);
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
  addRow(e, t, i, n = !0) {
    const s = new Qe({
      rowId: this._rows.length,
      height: e,
      top: this._totalHeight,
      defaultHeight: t,
      object: i,
      visible: n
    });
    return this._rows.push(s), n && (this._visibleRowList.push(s), this._totalHeight += e), s;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(e, t, i, n, s = !0) {
    const o = this.insertRows(1, e, t, i, [n], s);
    return n && o[0].updateObject(n, !1), o[0];
  }
  insertRows(e, t, i, n, s, o = !0) {
    if (t < this._headerRowsCount || t > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const d = this._rows[t], a = [];
    let h = d ? d.top : this._totalHeight;
    for (let l = 0; l < e; ++l) {
      const C = t + l, g = typeof o == "function" ? o(l, C) : o;
      a.push(new Qe({
        rowId: C,
        height: i,
        defaultHeight: n,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: h,
        visible: g,
        object: s?.[l] ?? void 0
      })), h += i, g && (this._totalHeight += i);
    }
    return d ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
  }
  setRowHeight(e, t) {
    const i = this.getRowById(e), n = i.height;
    i.setHeight(t), i.visible && (this._totalHeight += t - n, i.isFreezed && (this._freezedHeight += t - n));
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
    const n = t ? 1 : -1, s = i.height * n;
    i.setVisible(t), this._totalHeight += s, e < this._headerRowsCount && (this._freezedHeight += s, this._hiddenHeaderRowsCount += n), i.visible || i.remove();
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
function Gt(r) {
  const e = document.createElement("div"), t = document.createElement("div");
  return t.className = "ir-vd-container__viewport ir-vd-container__viewport--freezed", e.className = "ir-vd-container__viewport", r?.className && (e.classList.add(r.className), t.classList.add(r.className)), r?.role && e.setAttribute("role", r.role), r?.tabIndex !== void 0 && e.setAttribute("tabindex", String(r.tabIndex)), {
    viewport: e,
    freezedViewport: t
  };
}
const Wt = 4;
function Kt() {
  return {
    rAFHandler: -1,
    startRowId: -1,
    scrollRow: -1,
    registeredTasks: /* @__PURE__ */ new Set(),
    afterRenderTasks: []
  };
}
class qt extends pe {
  constructor(e) {
    super(e), this.args = e, this.contextElement.classList.add("ir-vd-container"), this._viewportElements = Gt(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new jt(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? xe("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * Wt, this.contextElement.style.setProperty("--ir-vd-default-row-height", `${this._defaultRowHeight}px`), this.initScrollEvent(), this.initRowCol();
  }
  _viewportElements;
  _itemManager;
  _debounceContext = Kt();
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
      totalHeight: n
    } = this._itemManager;
    e.style.setProperty("--ir-vd-container-height", `${String(i)}px`), e.style.setProperty("--ir-vd-row-count", `${this._itemManager.headerRowsCount}`), t.style.setProperty("--ir-vd-container-height", `${String(n)}px`), t.style.setProperty("--ir-vd-row-count", `${this._itemManager.rowCount}`);
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
      const n = this._itemManager.getRowByElement(i);
      i = i.nextElementSibling, n && (n.rowId < e || n.rowId > t) && n.isConnectedInDOM && n.remove();
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
    const e = this.contextElement.scrollTop, t = Math.max(0, e - this._viewportGap, this._itemManager.freezedHeight + 1), i = e + this.contextElement.clientHeight + this._viewportGap, n = this._itemManager.getRowByTop(t), s = this._itemManager.getRowByTop(i) ?? this._itemManager.lastRow;
    if (!n)
      return;
    this.unmountNotInViewport(n.rowId, s.rowId);
    const { viewport: o } = this._viewportElements;
    if (o.childElementCount === 0) {
      o.append(this._itemManager.createRowsFragment(n.rowId, s.rowId));
      return;
    }
    let d = null;
    for (let a = n.rowId; a <= s.rowId; ++a) {
      const h = this._itemManager.getRowById(a);
      if (h.visible) {
        if (!h.isConnectedInDOM) {
          const l = h.getRowElement();
          d ? d.getRowElement().after(l) : o.prepend(l), h.onMounted(h, l);
        }
        d = h;
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
    const i = this.contextElement.scrollTop + this._itemManager.freezedHeight, n = this.contextElement.scrollTop + this.contextElement.clientHeight;
    return t.top >= i && t.bottom <= n;
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
    e.onMounted = (t, i) => this.onMountedRow(t, i), e.onCreatedElement = (t, i) => this.onCreatedRowElement(t, i), e.onUpdatedObject = (t, i, n) => this.onUpdatedRowObject(t, i, n);
  }
  insertRow(e, t, i, n = !0) {
    const s = this.insertRows(1, e, t, [i], n);
    return i && s[0] && s[0].updateObject(i, !1), s[0];
  }
  insertRows(e, t, i, n, s = !0) {
    const o = this._itemManager.insertRows(
      e,
      t,
      i ?? this._defaultRowHeight,
      this._defaultRowHeight,
      n,
      s
    );
    return o.forEach((d) => this.bindEventsToRow(d)), s && o[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(o[0].rowId + 1)), o;
  }
  *getRowIter() {
    yield* this._itemManager.getRowIter();
  }
  getRowVisible(e) {
    return this._itemManager.getRowById(e).visible;
  }
  addRow(e, t, i = !0) {
    const n = this._itemManager.addRow(e ?? this._defaultRowHeight, this._defaultRowHeight, t, i);
    return this.bindEventsToRow(n), i && this.scheduleTasks("update-container-size", "update-viewport"), n;
  }
  removeRow(e) {
    this.removeRows(e, e);
  }
  removeRows(e, t) {
    this._itemManager.removeRows(e, t), this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  updateRowsVisible(e, t, i) {
    const { freezedViewport: n } = this._viewportElements;
    for (let s = e; s <= t; ++s) {
      const o = this._itemManager.getRowById(s), d = i(o);
      this._itemManager.setRowVisible(s, d), d && s < this._itemManager.headerRowsCount && n.append(this._itemManager.getRowById(s).getRowElement());
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
function Yt(r) {
  const t = [{ list: r.filter((n) => !n.parentItem), index: 0 }], i = [];
  if (r.length === 0) return i;
  for (; t.length; ) {
    const n = t[t.length - 1], { index: s, list: o } = n, d = o[s], { items: a, isDisabled: h } = d;
    h || i.push(d), ++n.index, n.index === o.length && t.pop(), d.expanded && a.length > 0 && t.push({
      index: 0,
      list: a
    });
  }
  return i;
}
function Xt(r, e) {
  let t = null, i = [], n = !1;
  const s = {
    ArrowUp: a,
    ArrowDown: h,
    ArrowLeft: C,
    ArrowRight: l,
    " ": g
  };
  return r.addGlobalEventListener(e, "focus", () => {
    t && N(t, !1);
  }), r.addGlobalEventListener(e, "blur", () => {
    v();
  }), r.addGlobalEventListener(e, "keydown", (R) => {
    s[R.key] && (s[R.key](), R.preventDefault());
  }), {
    updateTreeVisibleInfo: o,
    setFocusNode: N
  };
  function o() {
    n = !0;
  }
  function d() {
    return n && (i = Yt(r.getOrderedNodes()), n = !1), i;
  }
  function a() {
    const R = t, T = d();
    if (R === null) {
      N(T[0]);
      return;
    }
    const H = T.findIndex((m) => m.uuid === R.uuid), p = T[H - 1];
    p && N(p);
  }
  function h() {
    const R = t, T = d();
    if (R === null) {
      N(T[0]);
      return;
    }
    const H = T.findIndex((m) => m.uuid === R.uuid), p = T[H + 1];
    p && N(p);
  }
  function l() {
    t !== null && t.items.length !== 0 && (t.expanded && !t.items[0].isDisabled ? N(t.items[0]) : t.expand());
  }
  function C() {
    t != null && (t.expanded ? t.collapse() : t.parentItem && N(t.parentItem));
  }
  function g() {
    t && t.select();
  }
  function N(R, T = !0) {
    v(), t = R, t.liTreeItem.classList.add("is-focus"), T && R.scrollIntoView();
  }
  function v() {
    t && t.liTreeItem.classList.remove("is-focus");
  }
}
const W = "tree", L = {
  tree: {
    "&": W
  },
  treeList: {
    "&": `${W}__list`
  },
  treeListRoot: {
    "&": `${W}__list--root`
  },
  treeLabel: {
    "&": `${W}__label`
  },
  treeLabelText: {
    "&": `${W}__label-text`
  },
  treeItem: {
    "&": `${W}__item`,
    parent: `${W}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${W}__item-content`
  },
  treeIconFolder: {
    "&": `${W}__icon-folder`
  },
  treeIconExpand: {
    "&": `${W}__icon-expand`
  }
}, Fe = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), i = document.createElement("span");
  return e.className = L.treeLabel["&"], i.className = L.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (n) => {
      n.iconClass ? (t.isConnected || i.insertAdjacentElement("beforebegin", t), t.className = `${L.treeIconFolder["&"]} ir-icon ${n.iconClass}`, n.iconColor ? t.style.setProperty("--ir-icon-foreground-color", n.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), n.caption ? (i.textContent = n.caption, e.appendChild(i)) : i.remove();
    }
  };
}, Jt = "ir-icon--triangle-small-right";
class Zt {
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
    data: n,
    level: s,
    uuid: o,
    defaultChecked: d = !1,
    renderer: a = Fe,
    disabled: h = !1,
    draggable: l
  }) {
    this.children = [], this._parentItem = e, this.data = n, this._level = s, this._iconClass = t, this._caption = i, this._template = a(this), this._checked = d, this._subChecked = d, this._disabled = h, this._uuid = o, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(L.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = P(this.liTreeItem, "div", L.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(L.treeList["&"]), this.iconExpand = P(this.divTreeItemContent, "i", L.treeIconExpand["&"], "ir-icon", Jt), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (C) => this.onDragStart(C)), this.divTreeItemContent.addEventListener("dragenter", (C) => this.onDragOver(C) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (C) => this.onDragOver(C) && C.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (C) => this.onDragEnd(C)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (C) => {
      try {
        this.onDrop(C);
      } finally {
        this.clearDragging();
      }
    }), l && this.divTreeItemContent.setAttribute("draggable", "true");
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
    return this.liTreeItem.classList.contains(L.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((e) => e.checked || e.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(L.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(L.treeItem["is-selected"]);
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
    e ? this.liTreeItem.classList.add(L.treeItem.parent) : this.liTreeItem.classList.remove(L.treeItem.parent);
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
    this.hasChildren && this.expanded && this.onCollapsing(this) && (this.liTreeItem.classList.remove(L.treeItem["is-expanded"]), this.ulTreeList.remove(), this.onCollapse(this));
  }
  scrollIntoView(e = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(e);
  }
  expand() {
    this.hasChildren && (this.expanded || this.onExpanding(this) && (this.liTreeItem.classList.add(L.treeItem["is-expanded"]), this.liTreeItem.appendChild(this.ulTreeList), this.onExpand(this)));
  }
  toggle() {
    this.liTreeItem.classList.contains(L.treeItem["is-expanded"]) ? this.collapse() : this.expand();
  }
  select() {
    this.selected || (this.liTreeItem.classList.add(L.treeItem["is-selected"]), this.onSelect(this));
  }
  release() {
    this.selected && (this.liTreeItem.classList.remove(L.treeItem["is-selected"]), this.onRelease(this));
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
class bn extends pe {
  _keyboardInteraction;
  rootElement;
  nodes;
  selectedNode;
  renderer;
  _nodeDraggable;
  _nodeMap = /* @__PURE__ */ new Map();
  constructor({
    contextElement: e,
    renderer: t = Fe,
    nodeDraggable: i = !0,
    enabledKeyboard: n = !0
  }) {
    super({ contextElement: e }), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = i, e.classList.add(L.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), n && (this._keyboardInteraction = Xt(this, e)), i === !1 && e.setAttribute("draggable", "false"), this.rootElement = P(e, "ul", L.treeList["&"], L.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (s) => {
      if (s.preventDefault(), !(s.target instanceof HTMLElement)) return;
      const o = s.target.closest(`.${L.treeItem["&"]}`), d = o ? this.findNodeByUUID(o.dataset.uuid) : null;
      d?.select(), this.onContextMenu(s, d);
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
    const i = Math.max(e.length, t.length);
    for (let n = 0; n < i; n++) {
      const s = e[n], o = t[n];
      if (s === void 0) return !0;
      if (o === void 0) return !1;
      if (s < o) return !0;
      if (s > o) return !1;
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
  addChild(e, t, i, n = void 0) {
    const s = Mt();
    if (this._nodeMap.has(s)) throw new Error("UUID already exists");
    const o = new Zt({
      parentItem: e,
      caption: t,
      data: i,
      level: e ? e.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: e?.checked,
      draggable: this.nodeDraggable,
      uuid: s
    });
    this._nodeMap.set(o.uuid, o), e && e.addNode(o), this.nodes.push(o), o.divTreeItemContent.ondblclick = (a) => {
      a.target.classList.contains("checkbox__wrapper") || this.onDblClick(o);
    }, o.divTreeItemContent.onclick = (a) => {
      this.onLabelClick(o);
    }, o.iconExpand.onclick = () => this.onToggleClick(o), o.onSelect = () => this.selected = o, o.onRelease = (a) => {
      this.selectedNode = null, this.onReleaseNode(a);
    }, o.onRemove = () => {
      this.nodes.indexOf(o) !== -1 && this.nodes.splice(this.nodes.indexOf(o), 1), this.onRemoveNode(o), this._nodeMap.delete(o.uuid), this._keyboardInteraction?.updateTreeVisibleInfo();
    }, o.onExpanding = () => this.onExpanding(o), o.onExpand = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onExpand(o);
    }, o.onCollapsing = () => this.onCollapsing(o), o.onCollapse = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onCollapse(o);
    }, o.onDragStart = (a) => this.onDragStartNode(o, a), o.onDrop = (a) => this.onDropOnNode(o, a), o.onDragOver = (a) => this.onDragOverOnNode(o, a), o.onDragEnd = (a) => this.onDragEndNode(o, a), o.onRender = (a) => this.onRenderNode(o, a), o.render(), this._keyboardInteraction?.updateTreeVisibleInfo();
    const d = e ? e.ulTreeList : this.rootElement;
    return n === void 0 ? d.appendChild(o.liTreeItem) : n >= d.children.length ? d.insertAdjacentElement("beforeend", o.liTreeItem) : d.children[n].insertAdjacentElement("beforebegin", o.liTreeItem), o;
  }
  moveNode(e, t, i) {
    if (e === t.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const n = e.order;
    e.parentItem = t.parentItem, t.parentItem === null ? e.level = 0 : e.level = t.parentItem.level + 1, t.liTreeItem.insertAdjacentElement(i ? "beforebegin" : "afterend", e.liTreeItem), this.onNodeMoved(e, n);
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
    const t = yt(
      e.target,
      this.contextElement,
      `.${L.treeLabel["&"]}`
    );
    return t !== null ? t.parentElement?.parentElement : null;
  }
  getNodeByOffsetTopOrNull(e) {
    return null;
  }
}
const En = ({ onCheck: r }) => (e) => {
  const t = Fe(), i = document.createElement("label"), n = document.createElement("input");
  return n.type = "checkbox", i.classList.add(ze), n.classList.add(Te), i.appendChild(n), t.template.insertAdjacentElement("afterbegin", i), n.addEventListener("click", () => {
    e.updateCheckedWithPropagation(n.checked), e.parentItem?.updateCheckedStatus(), n.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (s) => {
      t.update(s), s.checked !== n.checked && (n.checked = s.checked), s.parentItem?.updateCheckedStatus(), s.updateSubCheckedStatus(), n.dataset.state = s.subChecked ? "sub-checked" : "";
    }
  };
}, Qt = 16, Rn = (r) => {
  let e = null, t = null;
  const i = () => {
    t && (t.divTreeItemContent.classList.remove("is-top"), t.divTreeItemContent.classList.remove("is-bottom")), t = null;
  };
  r.onDragStartNode = (n, s) => {
    s.dataTransfer && (s.dataTransfer.dropEffect = "move", e = n);
  }, r.onDragOverOnNode = (n, s) => {
    if (e === n)
      return !1;
    let o = n._parentItem;
    for (; o !== null; ) {
      if (o === e) return !1;
      o = o._parentItem;
    }
    return i(), n.divTreeItemContent.classList.add(s.offsetY < Qt ? "is-top" : "is-bottom"), t = n, !0;
  }, r.onDropOnNode = (n) => {
    if (!e) throw new Error("No start dragging node!");
    r.moveNode(
      e,
      n,
      n.divTreeItemContent.classList.contains("is-top")
    );
  }, r.onDragEndNode = () => {
    i();
  };
};
class ei {
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
    const n = this.getNodeLink(e), s = n.getFirstChildNode();
    s === null ? this.addChildNode(e, t, i) : this.insertBeforeChildNode(n.key, t, i, s);
  }
  insertBeforeChildNode(e, t, i, n) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), o = new oe({
      data: i,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertBeforeChildNode(o, n), this.addLinkMap(t, o, !1), o;
  }
  insertAfterChildNode(e, t, i, n) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), o = new oe({
      data: i,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertAfterChildNode(o, n), this.addLinkMap(t, o, !1), o;
  }
  insertAfterRootNode(e, t, i) {
    this.throwErrorIfExistsKey(e);
    const n = i.getNextNode(), s = new oe({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: i,
      nextNode: n,
      firstChildNode: null,
      lastChildNode: null
    });
    return n?.setPrevNode(s), i.setNextNode(s), i === this._lastRootNode && this.setLastRootNode(s), this.addLinkMap(e, s, !0), s;
  }
  insertBeforeRootNode(e, t, i) {
    this.throwErrorIfExistsKey(e);
    const n = i.getPrevNode(), s = new oe({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: n,
      nextNode: i,
      firstChildNode: null,
      lastChildNode: null
    });
    return n?.setNextNode(s), i.setPrevNode(s), i === this._firstRootNode && this.setFirstRootNode(s), this.addLinkMap(e, s, !0), s;
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
    const i = new oe({
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
  createNodeLink(e, t, i, n) {
    return i === void 0 ? n === void 0 ? this.addRootNode(t, e) : this.insertBeforeRootNode(t, e, this.getNodeLink(n)) : n === void 0 ? this.addChildNode(i, t, e) : this.insertBeforeChildNode(i, t, e, this.getNodeLink(n));
  }
  addChildNode(e, t, i) {
    this.throwErrorIfExistsKey(t);
    const n = this.getNodeLink(e), s = new oe({
      key: t,
      data: i,
      level: n.getNodeLevel() + 1,
      parentNode: n,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return n.addChildNode(s), this.addLinkMap(t, s, !1), s;
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
    const n = [{
      link: e,
      level: e.getNodeLevel()
    }];
    let s = n.pop();
    for (; s; ) {
      const { link: o, level: d } = s, a = o.getNextNode(), h = o.getFirstChildNode(), l = t(o, d);
      l instanceof Promise && await l, a && n.push({ link: a, level: d }), h && (i === void 0 || await i(o, d)) && n.push({ link: h, level: d + 1 }), s = n.pop();
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
    const t = this.getNodeLink(e), i = t.getPrevNode(), n = t.getNextNode();
    i?.setNextNode(n), n?.setPrevNode(i), t === this._firstRootNode && this.setFirstRootNode(n), t === this._lastRootNode && this.setLastRootNode(i), this.travelChildNodes(e, (o) => this.deleteNodeInMap(o.key)), this.deleteNodeInMap(e);
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
class oe {
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
class ti {
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
    }, i = e.getFirstChildNode();
    if (i) {
      const n = [];
      let s = i;
      for (; s; )
        n.push(s.data.node.serialize()), s = s.getNextNode();
      t.children = n;
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
class gt extends pe {
  constructor(e) {
    super({
      contextElement: e.contextElement ?? document.createElement("div")
    }), this._hookArgs = e, this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
  _hook = St();
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
      e.forEach((n) => this.hook.pauseEmit(n));
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
class ii {
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
class fe extends ii {
}
class ni extends fe {
  mount(e, t) {
    const i = {
      async ArrowLeft() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        a && (a.expanded === !0 ? await a.collapse() : await o(a.getNodeLink().getParentNode()?.data.node));
      },
      async ArrowRight() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        !a || !a.expandable || (a.expanded === !1 ? await a.expand() : await o(a.getNodeLink().getFirstChildNode()?.data.node));
      },
      async ArrowUp() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const h = e.getSelectedNodes().reduce((C, g) => e.getNodeRowId(g.key) < e.getNodeRowId(C.key) ? g : C, a), l = h.getNodeLink().getPrevNode();
        l ? await o(s(l)) : await o(h.getNodeLink().getParentNode()?.data.node);
      },
      async ArrowDown() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const h = e.getSelectedNodes().reduce((l, C) => e.getNodeRowId(C.key) > e.getNodeRowId(l.key) ? C : l, a);
        if (h.expanded === !1)
          return await o(n(h.getNodeLink()));
        await o(h.getNodeLink().getFirstChildNode()?.data.node);
      },
      // Space Bar
      " ": async function() {
        if (e.getSelectedNodesCount() === 0) return;
        const a = e.getSelectedNodes(), h = a.some((l) => l.checked);
        for (const l of a)
          l.hasCheckbox && await l.changeCheck(!h);
      }
    };
    this.addPluginHook(e, "keydown", d);
    function n(a) {
      const h = a.getNextNode();
      if (h) return h.data.node;
      let l = a.getParentNode();
      for (; l && !l.getNextNode(); )
        l = l.getParentNode();
      return l?.getNextNode()?.data.node;
    }
    function s(a) {
      let h = a;
      for (; h && h.data.node.expanded; ) {
        const l = h.getLastChildNode();
        if (!l) break;
        h = l;
      }
      return h.data.node;
    }
    async function o(a) {
      a && (await a.select(), e.scrollToNode(a.key));
    }
    async function d(a) {
      const h = i[a.key];
      h !== void 0 && (a.preventDefault(), await h());
    }
  }
}
const oi = "minmax(0, 1fr)";
function si(r) {
  const e = [];
  Ve(r) && e.push(`${xe("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const i = r.headerRow.width[t] ?? "";
    i.endsWith("px") ? e.push(`minmax(${i}, ${i})`) : e.push(oi);
  }
  return e.join(" ");
}
function ri(r) {
  return ge("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function ai(r) {
  return ge(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function et(r) {
  return ge("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function tt(r) {
  return ge("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function Ve(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function di(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function li(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function it(r, e) {
  return e === "*" && r === 0 || e.endsWith("px");
}
function ci({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: i }) {
  return n([], i, t, e);
  function n(s, o, d, a) {
    const h = { ...o };
    delete h.children;
    const l = a?.key ?? null, C = r(h);
    if (s.push({
      node: C,
      visible: d,
      parentKeyOrNull: l
    }), o.children && o.children.length > 0)
      for (const g of o.children)
        n(s, g, d && h.expanded === !0, C);
    return s;
  }
}
function hi(r) {
  const {
    nodeLinker: e,
    nodeList: t,
    virtualRowList: i,
    positionArgs: n
  } = r, {
    insertKey: s,
    parentKey: o,
    position: d
  } = n;
  a(), h();
  function a() {
    if (t.length === 0) return;
    const l = t[0].node, C = i[0], g = { node: l, virtualRow: C };
    if (s !== void 0) {
      const N = e.getNodeLink(s);
      if (d === "firstChild")
        return e.insertAsFirstChild(N.key, l.key, g);
      const v = N.getParentNode();
      return v === null ? d === "after" ? e.insertAfterRootNode(l.key, g, N) : e.insertBeforeRootNode(l.key, g, N) : d === "after" ? e.insertAfterChildNode(v.key, l.key, g, N) : e.insertBeforeChildNode(v.key, l.key, g, N);
    }
    o === void 0 ? e.addRootNode(l.key, g) : e.addChildNode(o, l.key, g);
  }
  function h() {
    for (let l = 1; l < t.length; l++) {
      const { node: C, parentKeyOrNull: g } = t[l], N = i[l], v = { node: C, virtualRow: N };
      g ? e.addChildNode(g, C.key, v) : s ? e.insertBeforeRootNode(C.key, v, e.getNodeLink(s)) : e.addRootNode(C.key, v);
    }
  }
}
const ui = {
  nodeDraggable: !0
};
class pi extends fe {
  constructor(e = ui) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", n), this.addPluginHook(e, "treeClick", v), this.addPluginHook(e, "treeDoubleClick", H), this.addPluginHook(e, "nodeExpandIconClick", T);
    let i = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", d), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", o), this.addPluginHook(e, "nodeMouseDown", a));
    async function n(p) {
      p.preventDefault();
      const m = g(p);
      m && (e.multiSelect ? p.ctrlKey ? await m.addSelect() : p.shiftKey ? await R(m) : m.selected === !1 && await m.select() : await m.select(), await t.emit("nodeContextMenu", [p, m]));
    }
    function s(p) {
      const m = g(p);
      m && t.emit("nodeMouseDown", [p, m]);
    }
    function o(p) {
      const m = g(p);
      m && t.emit("nodeMouseUp", [p, m]);
    }
    function d(p, m) {
      m.object && p.dataTransfer?.setData("application/json", JSON.stringify(m.object));
    }
    async function a(p, m) {
      if (!await t.emit("nodeCheckDragging", [p, m])) return;
      const b = ai(p.target);
      b && (b.setAttribute("draggable", "true"), b.addEventListener("dragstart", l), i = m);
    }
    function h(p) {
      p.removeEventListener("dragstart", l), p.removeEventListener("dragend", C), p.removeAttribute("draggable"), i = null;
    }
    function l(p) {
      p.target instanceof HTMLElement && i && (p.target.addEventListener("dragend", C), t.emit("nodeDragStart", [p, i]));
    }
    function C(p) {
      p.target instanceof HTMLElement && i && (h(p.target), t.emit("nodeDragEnd", [p, i]));
    }
    function g(p) {
      if (!(p.target instanceof HTMLElement)) return null;
      const k = ge("[data-node-key]", ".ir-vd-container__viewport-row ", p.target)?.dataset.nodeKey;
      return k ? e.getNodeOrNull(k) : null;
    }
    async function N(p) {
      if (p.target instanceof HTMLInputElement && tt(p.target)) {
        const m = p.target.checked;
        await t.emit("headerChangeChecking", [m]) ? await e.setHeaderRowChecked(m) : p.target.checked = !m;
        return;
      }
    }
    async function v(p) {
      if (ri(p.target)) return N(p);
      const m = g(p);
      if (m) {
        if (et(p.target)) {
          t.emit("nodeExpandIconClick", [p, m]);
          return;
        }
        if (p.target instanceof HTMLInputElement && tt(p.target)) {
          await m.checkToggle(), p.target.checked = m.checked;
          return;
        }
        e.multiSelect ? p.ctrlKey ? await m.multiSelectToggle() : p.shiftKey ? await R(m) : await e.selectNode(m.key) : await m.selectToggle(), t.emit("nodeClick", [p, m]);
      }
    }
    async function R(p) {
      const m = e.getSelectedNodes();
      if (m.length === 0) {
        await p.select();
        return;
      }
      await e.selectRange(m[0], p);
    }
    async function T(p, m) {
      await m.toggleExpand();
    }
    function H(p) {
      const m = g(p);
      m && (et(p.target) || (p.preventDefault(), t.emit("nodeDoubleClick", [p, m])));
    }
  }
}
function ft(r) {
  const e = Z("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? zt : Te
  ), e;
}
function gi(r) {
  const e = Z("div", M.nodeMain, M.base, O.truncate), t = Z("button", M.nodeExpandButton, M.nodeIcon), i = Z("div", M.base, O.truncate, O.textAlign.center, M.headerCheckboxColumnDiv), n = Z("span", M.nodeCaption, O.truncate), s = he("ir-icon--triangle-small-right"), o = he(""), d = ft(r);
  return t.dataset.irRole = "node-expand-button", o.classList.add(M.nodeIcon), s.style.setProperty("--ir-icon-foreground-color", q.expandIconColor), t.append(s), e.appendChild(t), r.showIcon && e.appendChild(o), e.appendChild(n), i.appendChild(d), r.hiddenExpandIcon && (s.style.display = "none"), {
    mainContentDiv: e,
    expandButton: t,
    icon: o,
    text: n,
    checkbox: d,
    checkboxDiv: i
  };
}
function fi(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(M.base, O.truncate, M.column), e;
}
function mi(r, e) {
  return {
    columns: [],
    ...gi(e)
  };
}
function wi(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(M.base, O.truncate), r > 0 && t.classList.add(M.column), t;
}
function Ci(r) {
  const e = ft(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(O.verticalAlign.bottom, M.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: Z(
      "div",
      M.base,
      O.truncate,
      O.textAlign.center,
      M.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function _i(r, e, t) {
  const i = mi(e, t), n = r.getRowElement();
  r.setTemplateHelper(i), n.classList.add(
    Ie.base,
    O.userSelectNone,
    Ie.node,
    O.focusOutlineNone
  ), n.role = "treeitem", n.dataset.nodeKey = e.key, mt(r, e, t), Ve(t) ? n.appendChild(i.checkboxDiv) : li(t, e) && i.expandButton.insertAdjacentElement("afterend", i.checkbox), n.appendChild(i.mainContentDiv), i.columns.forEach((s) => n.appendChild(s));
}
function Ni(r, e, t) {
  const i = Ci(e), n = r.getRowElement();
  r.setTemplateHelper(i), n.classList.add(Ie.base, Ie.header), n.dataset.nodeHeader = "true", wt(r, e, t), i.columns.forEach((s) => n.appendChild(s));
}
function mt(r, e, t) {
  if (!r.isCachedElement) return;
  const i = r.getRowElement(), n = e.icon ?? t.defaultIcon, s = e.iconColor ?? t.defaultIconColor, { text: o, columns: d, icon: a, expandButton: h, checkbox: l } = r.template;
  e.level > 0 ? Le(i, {
    [q.nodeLevel]: String(e.level)
  }) : i.style.removeProperty(q.nodeLevel), Ce(i, "selected", e.selected), Ce(i, "disabled", e.disabled), Ce(i, "expanded", e.expanded), Ce(i, "expandable", e.expandable), e.expandable === !1 ? h.classList.add(O.invisible) : h.classList.remove(O.invisible), e.expanded ? h.classList.add(O.rotate.deg90) : h.classList.remove(O.rotate.deg90), e.subChecked ? l.dataset.state = "sub-checked" : delete l.dataset.state, l.checked = e.checked, e.hasCheckbox === !1 && l.remove(), n ? (a.className = $t(M.nodeIcon, "ir-icon", n), s && a.style.setProperty("--ir-icon-foreground-color", s)) : a.className = O.invisible, o.textContent = e.caption, d.forEach((g) => g.remove()), d.length = 0;
  const C = t.headerRow.columnCount;
  for (let g = 1; g < C; g++) {
    const N = fi(e.getColumnText(g));
    d.push(N), i.appendChild(N);
  }
}
function wt(r, e, t) {
  const {
    columns: i,
    checkbox: n,
    checkboxDiv: s
  } = r.template;
  i.forEach((a) => a.remove()), i.length = 0;
  const o = Ve(e);
  o && (e.headerRow.hasCheckbox && s.appendChild(n), i.push(s), r.getRowElement().appendChild(s)), n.checked = t.headerRow.checked;
  const d = e.headerRow.columnCount;
  for (let a = 0; a < d; a++) {
    const h = wi(a, e);
    i.push(h), r.getRowElement().appendChild(h);
  }
  !o && di(e) && i[0].prepend(n);
}
const vi = "80px", ki = 4, bi = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, Ei = {
  layout: "inner",
  ui: "checkbox"
};
function Ri() {
  return [
    new pi({
      nodeDraggable: !0
    }),
    new ni()
  ];
}
class xn extends gt {
  _nodeLinker = new ei();
  _virtualDOMContainer = document.createElement("div");
  _virtualDOM;
  _args;
  _selectedNode = [];
  _context;
  constructor(e) {
    super({
      plugins: e.plugins ?? Ri()
    }), this._args = {
      defaultRowHeight: e.defaultRowHeight ?? xe("tree-view.nodeRowHeight"),
      hiddenExpandIcon: e.hiddenExpandIcon ?? !1,
      removeIndent: e.removeIndent ?? !1,
      defaultIcon: e.defaultIcon,
      autoSizeColumnMode: e.autoSizeColumnMode ?? !1,
      defaultIconColor: e.defaultIconColor,
      showIcon: e.showIcon ?? !1,
      showCheckbox: e.showCheckbox ?? !1,
      multiSelect: e.multiSelect ?? !1,
      className: e.className ?? "",
      displayHeader: e.displayHeader ?? !1,
      headerRow: Object.assign({}, bi, e.headerRow),
      checkboxOptions: Object.assign({}, Ei, e.checkboxOptions),
      plugins: this.pluginList
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, e.removeIndent && Le(this.contextElement, {
      [q.nodeIndentPadding]: "0"
    }), this.validateArgs(), this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.setDefaultColumnWidths(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(Ft), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
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
    this.setBeginHook("createHeaderRow", Ni), this.setBeginHook("createNodeRow", _i), this.setBeginHook("headerRender", wt), this.setBeginHook("nodeRender", mt), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
  }
  onCreatedRowElement(e, t) {
    e.isFreezed ? this.emitHook("createHeaderRow", [e, this._args, this._context]) : this.emitHook("createNodeRow", [e, e.object, this._args]);
  }
  onUpdatedRowObject(e, t, i) {
    e.isFreezed ? this.emitHook("headerRender", [e, this._args, this._context]) : this.emitHook("nodeRender", [e, i, this._args]);
  }
  initVirtualDOM() {
    this._virtualDOMContainer.classList.add(Vt), this._virtualDOMContainer.style.height = "100%";
    const e = new qt({
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
    return e.setRowHeight(0, this._args.defaultRowHeight ?? xe("tree-view.nodeHeaderRowHeight")), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
  }
  initArgs() {
    this._args.className && this.contextElement.classList.add(this._args.className);
  }
  validateArgs() {
    if (this._args.headerRow.width.some((e, t) => !it(t, e)))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
  }
  onDestroy() {
    this._virtualDOM.destroy();
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
    this._args.headerRow.columnCount = e, this.setDefaultColumnWidths(), this.renderHeaderRow(), this.updateTreeTemplateColumns(), this.renderAllNode(), this.emitHook("changeColumnCount", [e]);
  }
  setDefaultColumnWidths() {
    const { width: e, columnCount: t } = this._args.headerRow;
    if (t > e.length) {
      const i = Array(t - e.length).fill(vi);
      e[0] || (i[0] = "*"), this._args.headerRow.width.push(...i);
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
    if (!it(e, t))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
    this._args.headerRow.width[e] = t, this.emitHook("columnWidthChange", [[...this._args.headerRow.width]]), this.updateTreeTemplateColumns();
  }
  /**
   * 현재 선택된 모든 노드 해제
   */
  async releaseSelectedNodes(...e) {
    const t = new Set(e), i = this.getSelectedNodes();
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      for (const n of i)
        t.has(n.key) || await n.release();
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
  getNodesWithPredicate(e) {
    const t = [];
    return this._nodeLinker.travelAllNodes(({ data: { node: i } }) => void (e(i) && t.push(i))), t;
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
    const [e, t] = Ke(
      "tree-view.iconSize",
      "tree-view.defaultHorizontalPadding"
    );
    let i = e + t;
    return this._args.showIcon && (i += e), i;
  }
  async autoSizeColumn(e) {
    const [t, i] = Ke(
      "tree-view.defaultHorizontalPadding",
      "tree-view.levelIndentSize"
    ), { fontFamily: n, fontSize: s } = getComputedStyle(this.contextElement), o = Dt(s, n);
    let d = o.calculateWidth(this.getColumnText(e));
    if (await this._nodeLinker.travelAllNodes(({ data: { node: a } }, h) => {
      d = Math.max(
        d,
        o.calculateWidth(a.getColumnText(e)) + (e === 0 ? h * i : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), d += e === 0 ? this.getDefaultMainColumnWidth() : t * 2, d += ki, e === 0) {
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
    let i = e;
    for (let n = 1; n < t; n++) {
      const s = parseInt(this._args.headerRow.width[n], 10);
      Number.isNaN(s) || (i += s);
    }
    return i < this._virtualDOMContainer.clientWidth;
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
      [q.templateColumns]: si(this._args)
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
    const { virtualRow: i, node: n } = t.data, s = t.getParentNode();
    this._virtualDOM.forceLayout();
    const o = i.rowId, d = o + this._nodeLinker.getChildNodeCount(e), a = [n];
    this._nodeLinker.travelChildNodes(e, ({ data: { node: h } }) => void (h.selected && a.push(h))), await this.exceptInSelected(a), this._virtualDOM.removeRows(o, d), this._nodeLinker.removeNode(e), s && await this.hook.emit("nodeUpdated", [s.data.node]);
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
    const i = this.getNode(e);
    if (await this.emitHook("nodeCheckMoving", [i, t]) === !1)
      throw new Error("nodeCheckMoving hook return false");
    const n = i.serialize(), s = i.getNodeLink().getParentNode();
    await this.removeNode(e), this.addNode({
      ...n,
      insertKey: t.targetKey,
      position: t.position
    }), t.position === "firstChild" && await this.getNode(t.targetKey).expand(), s && await s.data.node.updateNodeState(), await this.emitHook("nodeMoved", [i, t]);
  }
  clearChildNodes(e) {
    const t = this._nodeLinker.getNodeLink(e);
    if (t.hasChild() === !1) return;
    const { node: i, virtualRow: n } = t.data;
    this._virtualDOM.forceLayout();
    const s = n.rowId + 1, o = s + (this._nodeLinker.getChildNodeCount(e) - 1);
    this._nodeLinker.clearChildNodes(e), this._virtualDOM.removeRows(s, o), this.hook.emit("nodeUpdated", [i]);
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
      position: n
    } = e;
    if (i === void 0 && t === void 0)
      return this._virtualDOM.getRowCount();
    if (this._virtualDOM.forceLayout(), t !== void 0) {
      const s = this.getMapValue(t).virtualRow.rowId;
      switch (n) {
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
    return new ti({
      nodeData: e,
      hook: this.hook,
      nodeLinker: this._nodeLinker
    });
  }
  getParentNodeByPosArgs(e) {
    const { parentKey: t, insertKey: i, position: n } = e;
    return i !== void 0 && n === "firstChild" ? this.getNode(i) : t !== void 0 ? this.getNode(t) : null;
  }
  /**
   * @param posArgsOrNull null 전달 시, rootNode 마지막에 추가
   * @param nodeList 추가할 노드 리스트
   */
  addNodeList(e, t) {
    const i = e ?? {}, n = this.getParentNodeByPosArgs(i), { parentNodeOrNull: s, visible: o } = n ? {
      parentNodeOrNull: n,
      visible: n.isVisible() && n.expanded === !0
    } : {
      parentNodeOrNull: null,
      visible: !0
    }, d = this.createNode.bind(this), a = t.flatMap((l) => ci({
      visible: o,
      nodeData: l,
      createNodeFunc: d,
      parentNodeOrNull: s
    })), h = this._virtualDOM.insertRows(
      a.length,
      this.getAddingRowId(i),
      void 0,
      a.map(({ node: l }) => l),
      (l) => a[l].visible
    );
    return hi({
      positionArgs: i,
      nodeList: a,
      virtualRowList: h,
      nodeLinker: this._nodeLinker
    }), s?.updateNodeState(), a;
  }
  addNode(e) {
    if (typeof e.key != "string") throw new Error("key's type is not string");
    const {
      // position args
      parentKey: t,
      insertKey: i,
      position: n,
      ...s
    } = e, [o] = this.addNodeList({ parentKey: t, insertKey: i, position: n }, [s]);
    if (!o) throw new Error("first node is undefined");
    return o.node;
  }
  async selectRange(e, t) {
    const i = this.getMapValue(e.key), n = this.getMapValue(t.key), s = i.virtualRow.rowId, o = n.virtualRow.rowId, d = s < o ? [s, o] : [o, s];
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
const Me = "ir-style/tree-view-drag-drop-move", nt = 8;
async function xi(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function yi(r, e, t) {
  return t - r < nt ? "before" : e - t < nt ? "after" : "firstChild";
}
function Ii(r) {
  const e = r.dataTransfer?.getData(Me);
  return e ? JSON.parse(e) : null;
}
const ot = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, Li = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class yn extends fe {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t) {
    const {
      canNodeMoveDrop: i,
      canNodeMoveStart: n,
      canNodeMoveDragOver: s,
      onDropNodeData: o,
      onDragEnd: d
    } = this._args;
    this.addPluginHook(e, "nodeDragStart", v), this.addPluginHook(e, "nodeDragOver", R), this.addPluginHook(e, "nodeDragEnd", p), this.addPluginHook(e, "nodeDrop", m), this.addPluginHook(e, "treeDragLeave", C);
    let a = { ...ot }, h = { ...Li }, l = !1;
    function C() {
      H();
    }
    function g(k, b) {
      if (!k.dataTransfer) throw new Error("dataTransfer is null");
      l = !1, h = b, a = { ...ot }, k.dataTransfer.setData(Me, JSON.stringify(b));
    }
    function N(k, b, E) {
      if (!k.dataTransfer?.types.includes(Me)) return !1;
      const x = h.srcTreeViewId === e.uuid;
      return x && (b.key === h.srcNodeData.key || b.getNodeLink().isProgenyNode(h.srcNodeData.key)) ? !1 : s?.(x, b, E) ?? !0;
    }
    function v(k, b) {
      (n?.(b) ?? !0) && g(k, { srcNodeData: b.serialize(), srcTreeViewId: e.uuid });
    }
    function R(k, b, E) {
      const { top: x, bottom: S } = e.getNodeTopBottom(b.key), _ = yi(x, S, e.scrollTop + k.offsetY);
      k.dataTransfer && N(k, b, _) ? (k.preventDefault(), k.dataTransfer.dropEffect = "move", T(b, E, _)) : H();
    }
    function T(k, b, E) {
      a.row === b && a.cursorType === E || (H(), a = { nodeKey: k.key, row: b, cursorType: E }, b.getRowElement().dataset.drag = E);
    }
    function H() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function p(k, b) {
      try {
        k.dataTransfer?.dropEffect === "move" && d?.(l, { ...h });
      } finally {
        H();
      }
    }
    async function m(k, b) {
      try {
        const E = Ii(k), x = { ...a };
        if (!E || !await xi(() => i?.(E, x))) return;
        l = !0, o?.(E.srcTreeViewId === e.uuid, E, x);
      } finally {
        H();
      }
    }
  }
}
class In extends fe {
  constructor(e = {}) {
    super(), this._options = e;
  }
  mount(e, t) {
    const i = {
      isRunning: !1,
      updateInfoList: []
    }, n = async (o) => {
      if (!i.isRunning)
        try {
          i.isRunning = !0, i.updateInfoList.length = 0;
          for (const d of Si(o))
            await s(d);
          for (const d of Hi(o))
            await s(d);
          this._options.onChanged?.(i.updateInfoList);
        } finally {
          i.isRunning = !1;
        }
    };
    t.addHook("nodeChangeChecked", n);
    async function s(o) {
      const d = e.getNode(o.key);
      i.updateInfoList.push(o), o.checked !== void 0 && await d.changeCheck(o.checked), o.subChecked !== void 0 && await d.updateNodeState({ subChecked: o.subChecked });
    }
    this.addUnmountTask(() => {
      t.removeHook("nodeChangeChecked", n);
    });
  }
}
function Ti(r) {
  let e = 0, t = 0, i = 0, n = r.getFirstChildNode();
  for (; n; )
    n.data.node.checked ? ++e : ++t, n.data.node.subChecked && ++i, n = n.getNextNode();
  return { checked: e, unchecked: t, subChecked: i };
}
function* Si(r) {
  const e = r.getNodeLink(), t = [], i = r.checked;
  for (yield { key: r.key, checked: i, subChecked: !1 }, e.getFirstChildNode() && t.push(e.getFirstChildNode()); t.length; ) {
    const n = t.pop(), s = n.getNextNode(), o = n.getFirstChildNode();
    i !== n.data.node.checked && (yield { key: n.key, checked: i, subChecked: !1 }), s && t.push(s), o && t.push(o);
  }
}
function* Hi(r) {
  let e = r.getNodeLink().getParentNode();
  for (; e; ) {
    const t = Ti(e), i = t.unchecked === 0, n = !i && t.checked + t.subChecked > 0;
    (e.data.node.checked !== i || e.data.node.subChecked !== n) && (yield {
      key: e.key,
      checked: i,
      subChecked: n
    }), e = e.getParentNode();
  }
}
const Oe = [
  q.stickyRightCol2,
  q.stickyRightCol3,
  q.stickyRightCol4,
  q.stickyRightCol5
];
function* Di(r, e) {
  let t = 0;
  const i = e - 1, n = Math.min(Oe.length, i - 1);
  for (let s = i; s > i - n; s--)
    t += parseInt(r[s], 10), yield { right: t, varName: Oe[i - s] };
}
class Ln extends fe {
  constructor() {
    super();
  }
  mount(e, t, i) {
    i.classList.add(Ye), n(), t.addHook("columnWidthChange", n), t.addHook("changeColumnCount", n), this.addUnmountTask(() => {
      i.classList.remove(Ye), s(), t.removeHook("columnWidthChange", n), t.removeHook("changeColumnCount", n);
    });
    function n() {
      for (const { right: o, varName: d } of Di(e.columnWidthList, e.getColumnCount()))
        Le(i, {
          [d]: `${o}px`
        });
    }
    function s() {
      for (const o of Oe)
        i.style.removeProperty(o.match(/\((.*)\)/)[1]);
    }
  }
}
const st = (r, e) => r instanceof Date ? Y(r).startOf("D") : typeof r == "string" ? Y(r, e) : Y(null);
class Tn extends pe {
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
    format: i = le.t("datePicker.dateFormat"),
    checkbox: n = !1,
    disabled: s = !1,
    allowedEmptyString: o = !0,
    onSelect: d,
    onChange: a,
    onCheckboxClick: h,
    minDate: l = qe().getStoreValue("datePicker.minDate"),
    maxDate: C = qe().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const g = st(t, i);
      g.isValid() ? (this.calendarDate = g.toDate(), this.selectedDate = g.toDate()) : console.error(`invalid defaultDate format. it must follow ${i}`);
    }
    if (!o && this.selectedDate == null) {
      const g = st(/* @__PURE__ */ new Date(), i);
      this.calendarDate = g.toDate(), this.selectedDate = g.toDate();
    }
    if (this.format = i, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(he("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(lt), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", this.format), this.input.classList.add(ct, "tnum-adj"), this.button.className = ht, this.button.type = "button", this._minDate = l, this._maxDate = C, d && (this.onSelect = d), a && (this.onChange = a), h && (this.onCheckboxClick = h), n) {
      const g = document.createElement("div"), N = document.createElement("label"), v = document.createElement("input");
      v.setAttribute("type", "checkbox"), g.classList.add(ut, pt), N.className = ze, v.className = Te, N.appendChild(v), g.appendChild(N), this.div.appendChild(g), v.checked = !s, v.onchange = () => {
        this.disabled = !v.checked, this.onCheckboxClick(v.checked);
      }, this.addCoreElement(g);
    }
    this.disabled = s, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = Y(this.selectedDate).format(i)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        o ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      const g = Y(this.input.value, this.format, !0);
      !g.isValid() || g.toDate() < this.minDate || g.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(g.toDate());
    }), this.handler = Ht({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (g) => {
        this.setDate(g), this.onSelect(g), this.hide();
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
  get componentLabel() {
    return "date-picker";
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
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = Y(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
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
const B = "dialog", ce = {
  dialog: {
    "&": B,
    transparent: `${B}--transparent`,
    "is-visible": "is-visible"
  },
  dialogWrapper: {
    "&": `${B}__wrapper`
  },
  dialogHeader: {
    "&": `${B}__header`
  },
  dialogHeaderTitle: {
    "&": `${B}__header-title`
  },
  dialogHeaderActions: {
    "&": `${B}__header-actions`
  },
  dialogContent: {
    "&": `${B}__content`
  },
  dialogFooter: {
    "&": `${B}__footer`
  },
  dialogFooterLeft: {
    "&": `${B}__footer-left`
  },
  dialogFooterRight: {
    "&": `${B}__footer-right`
  },
  dialogButtonClose: {
    "&": `${B}__button-close`
  }
}, Pi = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function Mi() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = document.createElement("div"), n = document.createElement("div"), s = document.createElement("i"), o = document.createElement("div"), d = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), h = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", ce.dialog["&"], dt.zIndex.message), e.className = ce.dialogWrapper["&"], t.className = ce.dialogContent["&"], i.className = de.modal, n.className = de.content, o.className = de.actions, a.classList.add("ir-icon", "ir-icon--close"), h.className = de.btnClose, o.appendChild(d.no), o.appendChild(d.stop), o.appendChild(d.ignore), o.appendChild(d.retry), o.appendChild(d.yes), o.appendChild(d.ok), h.appendChild(a), i.appendChild(h), i.appendChild(s), i.appendChild(n), i.appendChild(o), t.appendChild(i), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: s,
    confirmContent: n,
    confirmActions: o,
    buttonMap: d,
    closeButton: h,
    resetButtonCls() {
      Object.values(d).forEach((l) => l.className = Bt);
    }
  };
}
const Oi = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Mi()), r;
  };
})();
function re() {
  return Oi();
}
const Ai = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, zi = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), Fi = {
  onTagAttr(r, e, t, i) {
    if (!i && zi.has(e))
      return `${e}="${At.escapeAttrValue(t)}"`;
  }
}, Ee = {
  count: 0
}, Sn = () => Ee.count > 0;
class Hn {
  constructor(e) {
    this.args = e;
    const {
      iconType: t = "info",
      buttonType: i = ["ok"],
      messageHTML: n,
      msgMap: s = {},
      onClick: o,
      escButton: d,
      contentElement: a
    } = e;
    this.visible = !1, this.iconType = t, this.buttonType = i, n && (this.messageHTML = Ot(n, Fi)), a && (this.contentElement = a), this.msgMap = {
      ...s
    }, this.escButton = d, this.escController = at(this), o && (this.onClick = o);
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
    Ee.count++, this.updateContent(), this.visible = !0, e.confirmIcon.className = `${de.icon} ir-icon ${Ai[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const i of Pi)
      e.buttonMap[i].remove(), e.buttonMap[i].innerText = this.msgMap[i] ?? le.t(`confirm.${i}`), e.buttonMap[i].onclick = () => {
        this.hide().then(() => this._doClick(i));
      };
    for (const i of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[i]);
    e.dialog.isConnected || Ae("message").appendChild(e.dialog), e.dialog.classList.add(ce.dialog["is-visible"]), e.dialog.focus(), e.dialog.onkeydown = this.dialogKeyDownHandler.bind(this);
    const t = this.buttonType.indexOf(this.args.enterButton ?? this.buttonType[0]);
    this.setFocus(t === -1 ? 0 : t), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  setFocus(e) {
    const { confirmActions: t, resetButtonCls: i } = re();
    e < 0 ? e = 0 : e >= this.buttonType.length && (e = this.buttonType.length - 1), this.activeButtonId = e, i();
    const n = t.children[e];
    n.classList.add(Ut), n.focus();
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
    if (Ee.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = re();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  async hide() {
    if (this.visible !== !1)
      return this.escController.destroy(), Ee.count = 0, new Promise((e) => {
        const t = re();
        this.visible = !1, t.dialog.classList.remove(ce.dialog["is-visible"]), this.enterHandler && It("Enter", this.enterHandler), this.enterHandler = null;
        const i = this.args.focusAfterHide;
        i instanceof HTMLElement ? setTimeout(() => {
          i.focus(), e();
        }) : e();
      });
  }
  _doClick(e) {
    this.onClick(e);
  }
  onClick(e) {
  }
}
const se = "time-picker", ie = {
  timePicker: {
    "&": se,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${se}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${se}__button-panel`
  },
  timePickerPanel: {
    "&": `${se}__panel`
  },
  timePickerPanelItem: {
    "&": `${se}__panel-item`
  },
  timePickerDivider: {
    "&": `${se}__divider`
  }
};
function Vi(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: i, minute: n, second: s } = Ct(t);
    return i < 0 || i >= 24 || n < 0 || n >= 60 ? !1 : !(e && s < 0 || s >= 60);
  } else
    return !1;
}
function Ct(r) {
  const [e, t, i] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(i)
  };
}
function Bi(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const Ne = 12, Ui = 60, $i = 60, ji = ["period", "hour", "minute", "second"];
function Gi() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [n, s, o, d] = i;
  r.classList.add(ie.timePicker["&"], dt.zIndex.popover), i.forEach((_, y) => {
    _.setAttribute("data-type", ji[y]), _.className = ie.timePickerPanel["&"], e.appendChild(_);
  }), e.className = ie.timePickerPanelWrapper["&"], t.className = ie.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function h(_) {
    const y = document.createElement("div");
    return y.className = ie.timePickerPanelItem["&"], y.dataset.text = _, y.innerText = _, y;
  }
  return _e(2, () => i[0].appendChild(h(""))), _e(Ne, (_) => i[1].appendChild(h(`${_}`))), _e(Ui, (_) => i[2].appendChild(h(`${_}`))), _e($i, (_) => i[3].appendChild(h(`${_}`))), {
    elements: {
      nowButton: a,
      secondPanel: d,
      timePicker: r
    },
    updateI18n: l,
    removeSelected: C,
    getTimeElements: g,
    scrollIntoView: N,
    selectTime: v,
    isAM: R,
    setPeriod: T,
    setHourId: H,
    setMinuteId: p,
    setSecondId: m,
    periodGenerator: k,
    getCurrentTime: b,
    hourGenerator: E,
    minuteGenerator: x,
    secondGenerator: S
  };
  function l() {
    a.innerHTML = "", a.appendChild(he("ir-icon--check")), a.append(le.t("timePicker.btnNow")), i[0].children[0].innerHTML = "", i[0].children[1].innerHTML = "", i[0].children[0].append(le.t("timePicker.am")), i[0].children[1].append(le.t("timePicker.pm"));
  }
  function C() {
    r.querySelectorAll(".is-selected").forEach((_) => _.classList.remove("is-selected"));
  }
  function g(_, y, X) {
    const J = _ < Ne, V = J ? _ : _ - Ne, Q = J ? 0 : 1;
    return {
      periodElement: n.children[Q],
      hourElement: s.children[V],
      minuteElement: o.children[y],
      secondElement: d.children[X]
    };
  }
  function N(_, y, X) {
    const { hourElement: J, minuteElement: V, secondElement: Q } = g(_, y, X);
    s.scrollTop = J.offsetTop - s.clientHeight / 2, o.scrollTop = V.offsetTop - o.clientHeight / 2, d.scrollTop = Q.offsetTop - d.clientHeight / 2;
  }
  function v(_, y, X) {
    const { periodElement: J, hourElement: V, minuteElement: Q, secondElement: ne } = g(_, y, X);
    C(), J.classList.add("is-selected"), V.classList.add("is-selected"), Q.classList.add("is-selected"), ne.classList.add("is-selected");
  }
  function R() {
    return n.children[0].classList.contains("is-selected");
  }
  function T(_) {
    n.children[(_ + 1) % 2].classList.remove("is-selected"), n.children[_].classList.add("is-selected");
  }
  function H(_) {
    s.querySelector(".is-selected")?.classList.remove("is-selected"), s.children[_].classList.add("is-selected");
  }
  function p(_) {
    o.querySelector(".is-selected")?.classList.remove("is-selected"), o.children[_].classList.add("is-selected");
  }
  function m(_) {
    d.querySelector(".is-selected")?.classList.remove("is-selected"), d.children[_].classList.add("is-selected");
  }
  function* k() {
    yield [0, n.children[0]], yield [1, n.children[1]];
  }
  function b() {
    return Bi(
      He(s) + (R() ? 0 : Ne),
      He(o),
      He(d)
    );
  }
  function* E() {
    let _ = 0;
    for (const y of s.children)
      yield [_++, y];
  }
  function* x() {
    let _ = 0;
    for (const y of o.children)
      yield [_++, y];
  }
  function* S() {
    let _ = 0;
    for (const y of d.children)
      yield [_++, y];
  }
}
function He(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const Wi = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Gi()), r;
  };
})();
function Ki({ uuid: r, refElement: e, onChange: t, visibleSeconds: i }) {
  let n = !1, s = () => {
  };
  const {
    elements: o,
    getCurrentTime: d,
    selectTime: a,
    scrollIntoView: h,
    updateI18n: l,
    hourGenerator: C,
    minuteGenerator: g,
    secondGenerator: N,
    periodGenerator: v,
    setPeriod: R,
    setHourId: T,
    setMinuteId: H,
    setSecondId: p
  } = Wi(), m = {
    setTime(E) {
      const x = i ? E : E + ":00", { hour: S, minute: _, second: y } = Ct(x);
      a(S, _, y), h(S, _, y);
    },
    show: () => {
      if (!n) {
        l(), n = !0, k.create(), b.create(), o.nowButton.onclick = (E) => {
          const x = Y().format("HH:mm:ss");
          m.setTime(x), t(E, x);
        };
        for (const [E, x] of v())
          x.onclick = (S) => {
            R(E), t(S, d());
          };
        for (const [E, x] of C())
          x.onclick = (S) => {
            T(E), t(S, d());
          };
        for (const [E, x] of g())
          x.onclick = (S) => {
            H(E), t(S, d());
          };
        if (i) {
          for (const [E, x] of N())
            x.onclick = (S) => {
              p(E), t(S, d());
            };
          o.secondPanel.style.removeProperty("display");
        } else
          o.secondPanel.style.setProperty("display", "none");
        o.timePicker.isConnected || Ae("popover").appendChild(o.timePicker), o.timePicker.style.removeProperty("display"), o.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          o.timePicker.classList.add(ie.timePicker["is-visible"]), s(), s = Lt(e, o.timePicker);
        }, 0);
      }
    },
    hide: () => {
      n && (k.destroy(), b.destroy(), o.timePicker.classList.remove(ie.timePicker["is-visible"]), o.timePicker.addEventListener("transitionend", (E) => {
        E.currentTarget === E.target && (n = !1, r === o.timePicker.getAttribute("data-uuid") && (s(), o.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => m.hide(),
    get visible() {
      return n;
    }
  }, k = at(m), b = Pt({
    eventElements: [o.timePicker],
    clickOutsideFunc: () => m.hide()
  });
  return m;
}
const De = { checkbox: ut, checkboxWrapper: ze, checkboxInput: Te }, ve = { input: lt, inputNative: ct, inputSuffix: ht, inputPrefix: pt };
class Dn extends pe {
  input;
  button;
  timePickerHandler;
  latestValue;
  _value;
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, i = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = ve.input, this.input = document.createElement("input"), this.input.placeholder = i, this.input.className = ve.inputNative, this.button = document.createElement("button"), this.button.appendChild(he("ir-icon--watch")), this.button.className = ve.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = Ki({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (n, s) => {
        const o = Y(s, "HH:mm:ss", !0).format(i);
        this.value = o, this.onChange(o);
      }
    }), e.checkbox) {
      const n = document.createElement("div"), s = document.createElement("label"), o = document.createElement("input");
      o.setAttribute("type", "checkbox"), n.classList.add(De.checkbox, ve.inputPrefix), s.className = De.checkboxWrapper, o.className = De.checkboxInput, s.appendChild(o), n.appendChild(s), this.contextElement.appendChild(n), o.checked = !e.disabled, o.onchange = () => this.disabled = !o.checked, this.addCoreElement(n);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = Y(e.value, i).format(i)), this.input.onblur = () => {
      Vi(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
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
const F = typeof window < "u" ? window : null, Be = F === null, ue = Be ? void 0 : F.document, U = "addEventListener", $ = "removeEventListener", Pe = "getBoundingClientRect", ae = "_a", j = "_b", K = "_c", ke = "horizontal", G = () => !1, qi = Be ? "calc" : `${["", "-webkit-", "-moz-", "-o-"].filter((r) => {
  const e = ue.createElement("div");
  return e.style.cssText = `width:${r}calc(9px)`, !!e.style.length;
}).shift()}calc`, _t = (r) => typeof r == "string" || r instanceof String, rt = (r) => {
  if (_t(r)) {
    const e = ue.querySelector(r);
    if (!e)
      throw new Error(`Selector ${r} did not match a DOM element`);
    return e;
  }
  return r;
}, D = (r, e, t) => {
  const i = r[e];
  return i !== void 0 ? i : t;
}, be = (r, e, t, i) => {
  if (e) {
    if (i === "end")
      return 0;
    if (i === "center")
      return r / 2;
  } else if (t) {
    if (i === "start")
      return 0;
    if (i === "center")
      return r / 2;
  }
  return r;
}, Yi = (r, e) => {
  const t = ue.createElement("div");
  return t.className = `gutter gutter-${e}`, t;
}, Xi = (r, e, t) => {
  const i = {};
  return _t(e) ? i[r] = e : i[r] = `${qi}(${e}% - ${t}px)`, i;
}, Ji = (r, e) => ({ [r]: `${e}px` }), Zi = (r, e = {}) => {
  if (Be) return {};
  let t = r, i, n, s, o, d, a;
  Array.from && (t = Array.from(t));
  const l = rt(t[0]).parentNode, C = getComputedStyle ? getComputedStyle(l) : null, g = C ? C.flexDirection : null;
  let N = D(e, "sizes") || t.map(() => 100 / t.length);
  const v = D(e, "minSize", 100), R = Array.isArray(v) ? v : t.map(() => v), T = D(e, "maxSize", 1 / 0), H = Array.isArray(T) ? T : t.map(() => T), p = D(e, "expandToMin", !1), m = D(e, "gutterSize", 10), k = D(e, "gutterAlign", "center"), b = D(e, "snapOffset", 30), E = Array.isArray(b) ? b : t.map(() => b), x = D(e, "dragInterval", 1), S = D(e, "direction", ke), _ = D(
    e,
    "cursor",
    S === ke ? "col-resize" : "row-resize"
  ), y = D(e, "gutter", Yi), X = D(
    e,
    "elementStyle",
    Xi
  ), J = D(e, "gutterStyle", Ji);
  S === ke ? (i = "width", n = "clientX", s = "left", o = "right", d = "clientWidth") : S === "vertical" && (i = "height", n = "clientY", s = "top", o = "bottom", d = "clientHeight");
  function V(f, c, u, w) {
    const I = X(i, c, u, w);
    Object.keys(I).forEach((A) => {
      f.style[A] = I[A];
    });
  }
  function Q(f, c, u) {
    const w = J(i, c, u);
    Object.keys(w).forEach((I) => {
      f.style[I] = w[I];
    });
  }
  function ne() {
    return a.map((f) => f.size);
  }
  function Ue(f) {
    return "touches" in f ? f.touches[0][n] : f[n];
  }
  function $e(f) {
    const c = a[this.a], u = a[this.b], w = c.size + u.size;
    c.size = f / this.size * w, u.size = w - f / this.size * w, V(c.element, c.size, this[j], c.i), V(u.element, u.size, this[K], u.i);
  }
  function vt(f) {
    let c;
    const u = a[this.a], w = a[this.b];
    this.dragging && (c = Ue(f) - this.start + (this[j] - this.dragOffset), x > 1 && (c = Math.round(c / x) * x), c <= u.minSize + u.snapOffset + this[j] ? c = u.minSize + this[j] : c >= this.size - (w.minSize + w.snapOffset + this[K]) && (c = this.size - (w.minSize + this[K])), c >= u.maxSize - u.snapOffset + this[j] ? c = u.maxSize + this[j] : c <= this.size - (w.maxSize - w.snapOffset + this[K]) && (c = this.size - (w.maxSize + this[K])), $e.call(this, c), D(e, "onDrag", G)(ne()));
  }
  function je() {
    const f = a[this.a].element, c = a[this.b].element, u = f[Pe](), w = c[Pe]();
    this.size = u[i] + w[i] + this[j] + this[K], this.start = u[s], this.end = u[o];
  }
  function kt(f) {
    if (!getComputedStyle) return null;
    const c = getComputedStyle(f);
    if (!c) return null;
    let u = f[d];
    return u === 0 ? null : (S === ke ? u -= parseFloat(c.paddingLeft) + parseFloat(c.paddingRight) : u -= parseFloat(c.paddingTop) + parseFloat(c.paddingBottom), u);
  }
  function Ge(f) {
    const c = kt(l);
    if (c === null || R.reduce((A, z) => A + z, 0) > c)
      return f;
    let u = 0;
    const w = [], I = f.map((A, z) => {
      const te = c * A / 100, me = be(
        m,
        z === 0,
        z === f.length - 1,
        k
      ), we = R[z] + me;
      return te < we ? (u += we - te, w.push(0), we) : (w.push(te - we), te);
    });
    return u === 0 ? f : I.map((A, z) => {
      let te = A;
      if (u > 0 && w[z] - u > 0) {
        const me = Math.min(
          u,
          w[z] - u
        );
        u -= me, te = A - me;
      }
      return te / c * 100;
    });
  }
  function bt() {
    const f = this, c = a[f.a].element, u = a[f.b].element;
    f.dragging && D(e, "onDragEnd", G)(ne()), f.dragging = !1, F[$]("mouseup", f.stop), F[$]("touchend", f.stop), F[$]("touchcancel", f.stop), F[$]("mousemove", f.move), F[$]("touchmove", f.move), f.stop = null, f.move = null, c[$]("selectstart", G), c[$]("dragstart", G), u[$]("selectstart", G), u[$]("dragstart", G), c.style.userSelect = "", c.style.webkitUserSelect = "", c.style.MozUserSelect = "", c.style.pointerEvents = "", u.style.userSelect = "", u.style.webkitUserSelect = "", u.style.MozUserSelect = "", u.style.pointerEvents = "", f.gutter.style.cursor = "", f.parent.style.cursor = "", ue.body.style.cursor = "";
  }
  function Et(f) {
    if ("button" in f && f.button !== 0)
      return;
    const c = this, u = a[c.a].element, w = a[c.b].element;
    c.dragging || D(e, "onDragStart", G)(ne()), f.preventDefault(), c.dragging = !0, c.move = vt.bind(c), c.stop = bt.bind(c), F[U]("mouseup", c.stop), F[U]("touchend", c.stop), F[U]("touchcancel", c.stop), F[U]("mousemove", c.move), F[U]("touchmove", c.move), u[U]("selectstart", G), u[U]("dragstart", G), w[U]("selectstart", G), w[U]("dragstart", G), u.style.userSelect = "none", u.style.webkitUserSelect = "none", u.style.MozUserSelect = "none", u.style.pointerEvents = "none", w.style.userSelect = "none", w.style.webkitUserSelect = "none", w.style.MozUserSelect = "none", w.style.pointerEvents = "none", c.gutter.style.cursor = _, c.parent.style.cursor = _, ue.body.style.cursor = _, je.call(c), c.dragOffset = Ue(f) - c.end;
  }
  N = Ge(N);
  const ee = [];
  a = t.map((f, c) => {
    const u = {
      element: rt(f),
      size: N[c],
      minSize: R[c],
      maxSize: H[c],
      snapOffset: E[c],
      i: c
    };
    let w;
    if (c > 0 && (w = {
      a: c - 1,
      b: c,
      dragging: !1,
      direction: S,
      parent: l
    }, w[j] = be(
      m,
      c - 1 === 0,
      !1,
      k
    ), w[K] = be(
      m,
      !1,
      c === t.length - 1,
      k
    ), g === "row-reverse" || g === "column-reverse")) {
      const I = w.a;
      w.a = w.b, w.b = I;
    }
    if (c > 0) {
      const I = y(c, S, u.element);
      Q(I, m, c), w[ae] = Et.bind(w), I[U](
        "mousedown",
        w[ae]
      ), I[U](
        "touchstart",
        w[ae]
      ), l.insertBefore(I, u.element), w.gutter = I;
    }
    return V(
      u.element,
      u.size,
      be(
        m,
        c === 0,
        c === t.length - 1,
        k
      ),
      c
    ), c > 0 && ee.push(w), u;
  });
  function We(f) {
    const c = f.i === ee.length, u = c ? ee[f.i - 1] : ee[f.i];
    je.call(u);
    const w = c ? u.size - f.minSize - u[K] : f.minSize + u[j];
    $e.call(u, w);
  }
  l.offsetWidth > 0 && a.forEach((f) => {
    const c = f.element[Pe]()[i];
    c < f.minSize && (p ? We(f) : f.minSize = c);
  });
  function Rt(f) {
    const c = Ge(f);
    c.forEach((u, w) => {
      if (w > 0) {
        const I = ee[w - 1], A = a[I.a], z = a[I.b];
        A.size = c[w - 1], z.size = u, V(A.element, A.size, I[j], A.i), V(z.element, z.size, I[K], z.i);
      }
    });
  }
  function xt(f, c) {
    ee.forEach((u) => {
      if (c !== !0 ? u.parent.removeChild(u.gutter) : (u.gutter[$](
        "mousedown",
        u[ae]
      ), u.gutter[$](
        "touchstart",
        u[ae]
      )), f !== !0) {
        const w = X(
          i,
          u.a.size,
          u[j]
        );
        Object.keys(w).forEach((I) => {
          a[u.a].element.style[I] = "", a[u.b].element.style[I] = "";
        });
      }
    });
  }
  return {
    setSizes: Rt,
    getSizes: ne,
    collapse(f) {
      We(a[f]);
    },
    destroy: xt,
    parent: l,
    pairs: ee
  };
};
function Qi(r) {
  const e = r[0] instanceof HTMLElement ? r[0] : document.querySelector(r[0]);
  ye(e, "First element is not found.");
  const t = e.parentElement;
  return ye(t, "Parent element is not found."), t;
}
const en = {
  gutterCls: "thick",
  direction: "horizontal",
  snapOffset: 10,
  dragInterval: 5,
  minSize: 100
}, tn = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
}, nn = 100, on = 0.1;
class sn extends gt {
  _splitHandler;
  _splitElements;
  #e;
  #r = [];
  #n = [];
  #t = {
    dragged: !1,
    dragStartSize: 0,
    beforeCollapsed: !1
  };
  #i = {
    prevSize: 0
  };
  constructor({ elements: e, options: t }) {
    super({
      contextElement: Qi(e)
    }), this.#e = Object.assign({}, en, t);
    const { gutterCls: i } = this.#e;
    this._splitElements = this.#a(), this._splitHandler = Zi(e, {
      ...this.#e,
      gutterSize: tn.gutterSize[i],
      gutter: this.#d(),
      onDragStart: (n) => {
        Object.assign(this.#t, {
          dragged: !1,
          dragStartSize: this._splitHandler.getSizes()[0],
          beforeCollapsed: this.isCollapsed()
        }), this.#n = n, this.#e.onDragStart?.(n);
      },
      onDrag: (n) => {
        this.#t.dragged = this.#t.dragged || this.#n.reduce((s, o, d) => s += Math.abs(o - n[d]), 0) > on, this.#e.onDrag?.(n);
      },
      onDragEnd: (n) => {
        this.#t.dragged && !this.#t.beforeCollapsed && this.isCollapsed() && (this.#i.prevSize = this.#t.dragStartSize), this.#e.onDragEnd?.(n);
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
    const { minSize: e, snapOffset: t } = this.#e, i = typeof e == "number" ? e : Array.isArray(e) ? e[0] : 0;
    return this.getFirstPanelSize() <= i + t;
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
    return ye(e instanceof HTMLElement, "Split parent element is not found."), ye(t instanceof HTMLElement, "First panel element is not found."), { splitParent: e, firstPanel: t };
  }
  #d() {
    const { direction: e, gutterCls: t } = this.#e, i = [
      Se.base,
      Se[t]
    ].join(" ");
    return (n) => {
      const s = document.createElement("div");
      return s.className = i, s.dataset.dir = e, this.#e.gutterClickAction === "toggleVisible" && n === 1 && (s.onclick = () => this.#l()), this.#r.push(s), s;
    };
  }
  #l() {
    if (this.#t.dragged) return this.#o();
    this.isCollapsed() ? this.#h() : this.#c(), this.#o();
  }
  #c() {
    this.#i.prevSize = this._splitHandler.getSizes()[0], this._splitHandler.collapse(0);
  }
  #h() {
    const e = this._splitHandler.getSizes(), t = e.slice(2), i = t.reduce((o, d) => o += d, 0), n = this.#i.prevSize <= e[1] ? this.#i.prevSize : e[1], s = [
      // 접히기 전 크기로 리셋
      n,
      // gutter 다음 패널의 크기 (100에서 나머지 패널 크기를 빼서 계산)
      nn - i - n,
      ...t
    ];
    this._splitHandler.setSizes(s);
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
    e.classList.add(Xe), t === "vertical" && e.classList.add(Je({ flexDirection: "column" })), this.#s(e.firstElementChild, (i) => i.classList.add(Ze));
  }
  #s(e, t) {
    let i = e;
    for (; i; )
      i.classList.contains(Se.base) || t(i), i = i.nextElementSibling;
  }
  #p() {
    const { splitParent: e } = this._splitElements;
    e.classList.remove(Xe, Je({ flexDirection: "column" })), this.#s(e.firstElementChild, (t) => t.classList.remove(Ze));
  }
  onInitDOMEvents(e) {
  }
  onInitHooks() {
  }
  destroy() {
    super.destroy(), this._splitHandler.destroy();
  }
}
function Pn(r, e) {
  return new sn({ elements: r, options: e });
}
class rn {
  _dialogElement;
  _wrapperElement;
  _headerElement;
  _bodyElement;
  _footerElement;
  constructor() {
    this._dialogElement = Z("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = P(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = P(this._wrapperElement, "div", "dialog__header"), this._bodyElement = P(this._wrapperElement, "div", "dialog__content"), this._footerElement = P(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(e) {
    return this._wrapperElement.style.width = `${e}px`, this;
  }
  addStrongHeaderTitle(e) {
    const t = P(this._headerElement, "strong", "dialog__header-title");
    return t.innerText = e, this;
  }
  createHeaderCloseButton(e) {
    const t = P(this._headerElement, "div", "dialog__header-actions"), i = P(t, "button", "dialog__button-close");
    return P(i, "i", "ir-icon", "ir-icon--close"), i.onclick = e, this;
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
    const n = P(this._footerElement, "button", "button", ...i);
    return n.innerText = e, n.onclick = t, this;
  }
  get element() {
    return this._dialogElement;
  }
}
const an = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
}, dn = {
  "#login-info-dialog.title": "ログイン情報",
  "#login-info-dialog.confirm-button": "確認",
  "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
  "AUTH.ACCESSIP": "最終ログインIP",
  "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
  "AUTH.SECURITY.NOTICE": "セキュリティ情報"
}, Nt = {
  "#login-info-dialog.title": "로그인 정보",
  "#login-info-dialog.confirm-button": "확인",
  "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
  "AUTH.ACCESSIP": "최종 로그인 IP",
  "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
  "AUTH.SECURITY.NOTICE": "보안 사항"
}, ln = {
  "#login-info-dialog.title": "登录信息",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "密码变更期限",
  "AUTH.ACCESSIP": "最终登录IP",
  "AUTH.LASTESTLOGINTIME": "最终登录时间",
  "AUTH.SECURITY.NOTICE": "保安事项"
}, cn = { ko: Nt, en: an, ja: dn, zh: ln };
function hn(r, e) {
  return r in e;
}
function un(r) {
  const e = cn[r] ?? Nt;
  return {
    getMsg(t, ...i) {
      return hn(t, e) ? e[t] : t;
    }
  };
}
const pn = 550, Re = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function gn(r) {
  return r.props.some(([e]) => Re[e] !== void 0);
}
function fn(r) {
  return r.props.filter(([e]) => Re[e] !== void 0).sort(([e], [t]) => Re[e] - Re[t]);
}
function mn(r, e) {
  const t = document.createDocumentFragment(), i = new DOMParser(), n = e.replace(/&/g, "&amp;");
  let o = i.parseFromString(`<root>${n}</root>`, "application/xml").firstChild?.firstChild;
  for (; o; ) {
    if (o.nodeType === 1 && o instanceof Element)
      if (o.tagName.toLowerCase() === "font") {
        const d = document.createElement("span");
        d.textContent = o.textContent, d.style.cssText = o.getAttribute("style") ?? "";
        const a = o.getAttribute("color"), h = o.getAttribute("bgcolor");
        a && (d.style.color = a.replace("cl", "")), h && (d.style.backgroundColor = h.replace("cl", "")), t.append(d);
      } else o.tagName.toLowerCase() === "br" ? t.append(document.createElement("br")) : console.warn(`loginInfoDialog-parser::not allowed tag ${o.tagName}`);
    else o.textContent && t.append(o.textContent);
    o = o.nextSibling;
  }
  r.append(t);
}
function Mn(r) {
  const {
    irm010Data: e,
    lang: t = "ko",
    onClose: i
  } = r;
  if (!gn(e))
    throw new Error("no login info data! check irm010 response");
  const n = new rn(), { getMsg: s } = un(t), o = () => {
    a.hide();
  }, d = (l) => {
    l.key === "Enter" && o();
  }, a = Tt({
    element: n.element,
    type: "dialog",
    parentElement: Ae("dialog"),
    onESC() {
      i?.(), window.removeEventListener("keyup", d);
    }
  }), h = (() => {
    const l = Z("ul", "row", "gap-y--xs");
    return fn(e).forEach(([g, N]) => {
      const v = P(l, "li", "row", "col", "col--12");
      P(v, "div", "col", "col--4").innerText = s(g), g === "AUTH.SECURITY.NOTICE" ? mn(
        P(v, "div", "col", "col--8"),
        N
      ) : P(v, "div", "col", "col--8").innerText = N;
    }), l;
  })();
  return n.setDialogWidth(pn).addStrongHeaderTitle(s("#login-info-dialog.title")).createHeaderCloseButton(o).setContentElement(h).setFooterClass("justify-content--end").addFooterButton(s("#login-info-dialog.confirm-button"), o, "button--primary"), {
    popoverHandler: a,
    show() {
      n.element.focus(), a.show(), window.addEventListener("keyup", d);
    },
    hide() {
      a.hide();
    }
  };
}
export {
  Xn as ClipboardManager,
  jn as IRCommandBlock,
  Gn as IRCommandManager,
  Hn as IRConfirm,
  vo as IRContextMenu,
  Tn as IRDatePicker,
  Wn as IRSelect,
  sn as IRSplitContainer,
  Dn as IRTimePicker,
  bn as IRTree,
  xn as IRTreeView,
  In as IRTreeViewCascadeCheckingPlugin,
  Ln as IRTreeViewColStickyPlugin,
  yn as IRTreeViewDragDropMovePlugin,
  ni as IRTreeViewKeyboardPlugin,
  pi as IRTreeViewMousePlugin,
  fe as IRTreeViewPlugin,
  qt as IRVirtualDOM,
  Jn as Logger,
  Zn as ReactiveState,
  P as appendElement,
  Qn as blobToStr,
  zn as clearGlobalKeyListener,
  ge as closest,
  dt as clsZId,
  Pt as createClickOutsideHandler,
  eo as createCustomIcon,
  Kn as createDropdownDiv,
  qn as createDropdownItem,
  at as createESCHideController,
  Z as createElement,
  Fn as createFloatingHandler,
  he as createIconElement,
  po as createImageFromSrcUrl,
  go as createLoadingHandler,
  Mn as createLoginInfoDialog,
  fo as createObjectURLFromSvg,
  Tt as createPopover,
  Pn as createSplitContainer,
  to as createTooltip,
  io as createTooltipBySelector,
  mo as createTooltipContainer,
  no as dispatchClickOutsideEvent,
  wo as downloadDataURL,
  _e as forEachBySize,
  oo as forEachFilterBySize,
  so as get2DGenerator,
  Co as getBase64FromSvg,
  ro as getIRIconFormat,
  ao as getIRIconPng,
  _o as getImageBlobFromImage,
  Ae as getLayerElement,
  lo as getMinMaxBetween,
  Dt as getTextWidthContext,
  qe as getThemeStore,
  co as getTooltipElements,
  Vn as getVirtualEl,
  Sn as hasDisplayedConfirm,
  gn as hasLoginInfo,
  le as i18n,
  Lt as offsetBottomAutoUpdate,
  ho as parseInt,
  Bn as peekESCStack,
  Un as registerGlobalKeyListener,
  En as renderCheckboxTreeNode,
  Fe as renderDefaultTreeNode,
  Rn as setTreeDragDropReorder,
  It as unregisterGlobalKeyListener,
  Mt as uuid,
  Ot as xss
};
//# sourceMappingURL=index.js.map
