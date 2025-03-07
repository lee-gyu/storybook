import { _ as H, s as $, m as G, n as Y, o as W, p as q, q as K, r as Z, t as J, u as X, v as Q, w as ee, x as te, y as ie, A as se, B as oe, C as B, D as ne, E as re, F as ae, G as le, H as de, I as ce, J as he, K as ue, L as me, M as pe } from "./css-a1kmeZqX.js";
import { e as we, b as F, g as N, h as j, j as P } from "./floating-Cojv6uOA.js";
import { I as z } from "./index-BT2Mz6GA.js";
import { c as fe, a as T, b as ge } from "./rx-state-BNRgEDqt.js";
import { c as U } from "./outside-DpurI6XH.js";
import { i as y, d as I } from "./index-BI35NT3p.js";
class A {
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
    height: i,
    object: s,
    visible: o
  }) {
    this._rowId = e, this._top = t, this._height = i, this._object = s ?? null, this._visible = o;
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
    return this._cachedElement = e, e.classList.add(H.row), this.updateRowIdTopAttr(), this.updateRowStyles(), e;
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
class _e {
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
    for (let s = e; s <= t; s++) {
      const o = this._rows[s];
      if (o.visible) {
        const r = o.getRowElement();
        i.appendChild(r), o.onMounted(o, r);
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
      const s = Math.floor((t + i) / 2), o = this._visibleRowList[s];
      if (e >= o.top && e <= o.bottom)
        return o;
      e < o.top ? i = s - 1 : t = s + 1;
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
      const s = this._rows[i];
      s.remove(), s.visible && (this._totalHeight -= s.height);
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
  addRow(e, t, i, s = !0) {
    const o = new A({
      rowId: this._rows.length,
      height: e,
      top: this._totalHeight,
      object: i,
      visible: s
    });
    return this._rows.push(o), s && (this._visibleRowList.push(o), this._totalHeight += e), o;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(e, t, i, s, o = !0) {
    const r = this.insertRows(1, e, t, i, s && [s], o);
    return s && r[0].updateObject(s, !1), r[0];
  }
  insertRows(e, t, i, s, o, r = !0) {
    if (t < this._headerRowsCount || t > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const c = this._rows[t], a = [];
    let p = c ? c.top : this._totalHeight;
    for (let h = 0; h < e; ++h) {
      const w = t + h, l = typeof r == "function" ? r(h, w) : r;
      a.push(new A({
        rowId: w,
        height: i,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: p,
        visible: l,
        object: o?.[h] ?? void 0
      })), p += i, l && (this._totalHeight += i);
    }
    return c ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
  }
  setRowHeight(e, t) {
    const i = this.getRowById(e), s = i.height;
    i.setHeight(t), i.visible && (this._totalHeight += t - s, i.isFreezed && (this._freezedHeight += t - s));
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
    const s = t ? 1 : -1, o = i.height * s;
    i.setVisible(t), this._totalHeight += o, e < this._headerRowsCount && (this._freezedHeight += o, this._hiddenHeaderRowsCount += s), i.visible || i.remove();
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
function be(n, e, t = 1) {
  const i = [];
  for (let s = n; s < e; s += t)
    i.push(s);
  return i;
}
function Ne(n, e, t = 1) {
  const { start: i, end: s } = e === void 0 ? { start: 0, end: n } : { start: n, end: e };
  return {
    forEach(o) {
      let r = i;
      for (; r !== s; )
        o(r), r += t;
    },
    map(o) {
      const r = [];
      for (let c = i; c < s; c += t)
        r.push(o(c));
      return r;
    },
    some(o) {
      let r = i;
      for (; r !== s; ) {
        if (o(r))
          return !0;
        r += t;
      }
      return !1;
    },
    asList() {
      return be(i, s, t);
    },
    reduce(o, r) {
      let c = r, a = i;
      for (; a !== s; )
        c = o(c, a), a += t;
      return c;
    }
  };
}
function L() {
  const n = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: i,
    add: o,
    remove: s,
    clear: r,
    clearAll: c,
    forEach: a,
    forEachAsync: p
  };
  function e(h) {
    return n.has(h);
  }
  function t(h) {
    return n.get(h);
  }
  function i(h) {
    const w = n.get(h);
    return w || null;
  }
  function s(h, w) {
    const l = i(h);
    if (!l)
      return;
    const m = l.indexOf(w);
    m > -1 && l.splice(m, 1);
  }
  function o(h, w) {
    e(h) ? t(h).push(w) : n.set(h, [w]);
  }
  function r(h) {
    n.set(h, []);
  }
  function c() {
    n.clear();
  }
  function a(h, w) {
    const l = i(h);
    if (!l)
      return !0;
    for (const m of l)
      if (w(m) === !1)
        return !1;
    return !0;
  }
  async function p(h, w) {
    const l = i(h);
    if (!l)
      return !0;
    try {
      for (const m of l) {
        const f = w(m);
        if (f === !1 || f instanceof Promise && await f === !1)
          return !1;
      }
    } catch (m) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(m), m;
    }
    return !0;
  }
}
async function ve(n) {
  for (const { label: e, task: t } of n)
    try {
      if (await t() === !1)
        return !1;
    } catch (i) {
      throw console.error(`occurred an error when ${e}`), i;
    }
  return !0;
}
function je() {
  const n = /* @__PURE__ */ new Map(), e = L(), t = L(), i = L(), s = L();
  return {
    emit: a,
    emitSync: o,
    pauseEmit: r,
    resumeEmit: c,
    clearHooks: p,
    addHook: h,
    addSyncHook: w,
    setHook: f,
    removeHook: l,
    removeSyncHook: m,
    clearBeginHooks: g,
    clearSyncHooks: x,
    addBeginHook: k,
    setBeginHook: D,
    clearEndHooks: _,
    addEndHook: v,
    setEndHook: C,
    destroy: E
  };
  function o(d, u) {
    if (n.has(d))
      return !0;
    const M = (S) => S(...u);
    return s.forEach(d, M);
  }
  function r(d) {
    const u = n.get(d);
    n.set(d, u ? u + 1 : 1);
  }
  function c(d) {
    const u = n.get(d);
    u && u > 1 ? n.set(d, u - 1) : u === 1 && n.delete(d);
  }
  function a(d, u) {
    if (n.has(d))
      return Promise.resolve(!0);
    const M = (S) => S(...u);
    return ve([
      {
        label: `begin_${d}`,
        task: () => e.forEachAsync(d, M)
      },
      {
        label: `${d}`,
        task: () => i.forEachAsync(d, M)
      },
      {
        label: `end_${d}`,
        task: () => t.forEachAsync(d, M)
      }
    ]);
  }
  function p(d) {
    i.clear(d);
  }
  function h(d, u) {
    i.add(d, u);
  }
  function w(d, u) {
    s.add(d, u);
  }
  function l(d, u) {
    i.remove(d, u);
  }
  function m(d, u) {
    s.remove(d, u);
  }
  function f(d, u) {
    p(d), h(d, u);
  }
  function g(d) {
    e.clear(d);
  }
  function k(d, u) {
    e.add(d, u);
  }
  function D(d, u) {
    g(d), k(d, u);
  }
  function _(d) {
    t.clear(d);
  }
  function x(d) {
    s.clear(d);
  }
  function v(d, u) {
    t.add(d, u);
  }
  function C(d, u) {
    _(d), v(d, u);
  }
  function E() {
    e.clearAll(), t.clearAll(), i.clearAll(), s.clearAll();
  }
}
function Ce(n) {
  const e = document.createElement("div"), t = document.createElement("div");
  return t.className = H.viewport, e.className = H.viewport, t.setAttribute("data-freezed", ""), n?.className && (e.classList.add(n.className), t.classList.add(n.className)), n?.role && e.setAttribute("role", n.role), n?.tabIndex !== void 0 && e.setAttribute("tabindex", String(n.tabIndex)), {
    viewport: e,
    freezedViewport: t
  };
}
const Ee = 4;
function Re() {
  return {
    rAFHandler: -1,
    startRowId: -1,
    scrollRow: -1,
    registeredTasks: /* @__PURE__ */ new Set(),
    afterRenderTasks: []
  };
}
class Ue extends z {
  constructor(e) {
    super(e), this.args = e, this.contextElement.classList.add(H.container), this._viewportElements = Ce(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new _e(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? we("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * Ee, this.initScrollEvent(), this.initRowCol();
  }
  _viewportElements;
  _itemManager;
  _debounceContext = Re();
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
      totalHeight: s
    } = this._itemManager;
    e.style.height = `${i}px`, e.setAttribute("data-vd-row-count", `${this._itemManager.headerRowsCount}`), t.style.height = `${s}px`, t.setAttribute("data-vd-row-count", `${this._itemManager.rowCount}`);
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
      const s = this._itemManager.getRowByElement(i);
      i = i.nextElementSibling, s && (s.rowId < e || s.rowId > t) && s.isConnectedInDOM && s.remove();
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
    const e = this.contextElement.scrollTop, t = Math.max(0, e - this._viewportGap, this._itemManager.freezedHeight + 1), i = e + this.contextElement.clientHeight + this._viewportGap, s = this._itemManager.getRowByTop(t), o = this._itemManager.getRowByTop(i) ?? this._itemManager.lastRow;
    if (!s)
      return;
    this.unmountNotInViewport(s.rowId, o.rowId);
    const { viewport: r } = this._viewportElements;
    if (r.childElementCount === 0) {
      r.append(this._itemManager.createRowsFragment(s.rowId, o.rowId));
      return;
    }
    let c = null;
    for (let a = s.rowId; a <= o.rowId; ++a) {
      const p = this._itemManager.getRowById(a);
      if (p.visible) {
        if (!p.isConnectedInDOM) {
          const h = p.getRowElement();
          c ? c.getRowElement().after(h) : r.prepend(h), p.onMounted(p, h);
        }
        c = p;
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
    const i = this.contextElement.scrollTop + this._itemManager.freezedHeight, s = this.contextElement.scrollTop + this.contextElement.clientHeight;
    return t.top >= i && t.bottom <= s;
  }
  moveRows(e, t, i) {
    this._itemManager.moveRows(e, t, i), this.scheduleCascadeRowInfoUpdate(Math.min(e, i)), this.scheduleTasks("update-visible-row", "update-viewport");
  }
  scrollToRow(e) {
    this.isInViewport(e) || (this._debounceContext.registeredTasks.has("update-container-size") ? this.afterRender(() => this._scrollToRow(e)) : this._scrollToRow(e));
  }
  lockMouseEvents() {
    this.contextElement.classList.add(H.containerDragging);
  }
  unlockMouseEvents() {
    this.contextElement.classList.remove(H.containerDragging);
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
    e.onMounted = (t, i) => this.onMountedRow(t, i), e.onCreatedElement = (t, i) => this.onCreatedRowElement(t, i), e.onUpdatedObject = (t, i, s) => this.onUpdatedRowObject(t, i, s);
  }
  insertRow(e, t, i, s = !0) {
    const o = this.insertRows(1, e, t, i ? [i] : void 0, s);
    return i && o[0] && o[0].updateObject(i, !1), o[0];
  }
  insertRows(e, t, i, s, o = !0) {
    const r = this._itemManager.insertRows(
      e,
      t,
      i ?? this._defaultRowHeight,
      this._defaultRowHeight,
      s,
      o
    );
    return r.forEach((c) => this.bindEventsToRow(c)), o && r[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(r[0].rowId + 1)), r;
  }
  *getRowIter() {
    yield* this._itemManager.getRowIter();
  }
  getRowVisible(e) {
    return this._itemManager.getRowById(e).visible;
  }
  addRow(e, t, i = !0) {
    const s = this._itemManager.addRow(e ?? this._defaultRowHeight, this._defaultRowHeight, t, i);
    return this.bindEventsToRow(s), i && this.scheduleTasks("update-container-size", "update-viewport"), s;
  }
  removeRow(e) {
    this.removeRows(e, e);
  }
  removeRows(e, t) {
    this._itemManager.removeRows(e, t), this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(e);
  }
  updateRowsVisible(e, t, i) {
    const { freezedViewport: s } = this._viewportElements;
    for (let o = e; o <= t; ++o) {
      const r = this._itemManager.getRowById(o), c = i(r);
      this._itemManager.setRowVisible(o, c), c && o < this._itemManager.headerRowsCount && s.append(this._itemManager.getRowById(o).getRowElement());
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
const b = {
  select: K,
  selectDropdown: $,
  selectDropdownList: G,
  selectDropdownButton: Y,
  selectDropdownItem: W,
  selectDropdownIcon: q,
  selectInput: Z,
  selectInputNative: J,
  selectInputIcon: X,
  selectDropdownItemSelected: Q
}, ke = () => {
  const n = document.createElement("div"), e = document.createElement("ul");
  return n.classList.add(b.selectDropdown, fe.zIndex.popover), e.className = b.selectDropdownList, n.appendChild(e), { divDropdown: n, ulItems: e };
}, De = (n, e) => {
  const t = document.createElement("li"), i = document.createElement("button"), s = document.createElement("i"), o = document.createElement("span");
  return o.innerText = e, i.type = "button", i.title = e, i.className = b.selectDropdownButton, t.className = b.selectDropdownItem, t.setAttribute("ir-select-value", n), s.classList.add(b.selectDropdownIcon, "ir-icon", "ir-icon--check"), i.appendChild(s), i.append(o), t.append(i), { item: t, button: i, icon: s, span: o };
};
class $e extends z {
  divSelect;
  divInput;
  divDropDown;
  inputValue;
  ulItems;
  select;
  items;
  escController;
  outsideHandler;
  _value;
  lastClickedOption;
  floatingCleanup;
  constructor(e) {
    super({
      contextElement: e instanceof HTMLSelectElement ? e : e.contextElement
    }), this.floatingCleanup = () => {
    }, this.divSelect = document.createElement("div"), this.divInput = document.createElement("div"), this.inputValue = document.createElement("input");
    const t = ke();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const i = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(b.select), this.select.classList.forEach((o) => this.divSelect.classList.add(o)), this.divInput.className = b.selectInput, this.inputValue.className = b.selectInputNative, i.classList.add(b.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(i), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const s = this.select.value;
    this._value = "", Array.from(this.select.children).map((o) => o).forEach((o) => {
      const r = {};
      for (let c = 0; c < o.attributes.length; ++c) {
        const a = o.attributes.item(c);
        if (!a) return;
        r[a.name] = a.value;
      }
      this.addItem(o.value, o.text, r), o.remove();
    }), e instanceof HTMLSelectElement ? this.value = s : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || s), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = F(this), this.outsideHandler = U({
      eventElements: [this.divSelect, this.divDropDown],
      clickOutsideFunc: () => this.hide()
    });
  }
  /*
   * Getters
   */
  get componentLabel() {
    return "select";
  }
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
  set disabled(e) {
    e ? this.inputValue.setAttribute("disabled", "true") : this.inputValue.removeAttribute("disabled");
  }
  set value(e) {
    if (this._value !== e)
      if (this.hasElementByValue(e))
        this.selectItem(e);
      else
        throw new Error(`There is no '${e}' value`);
  }
  clearItems() {
    this.lastClickedOption = void 0, this.items.forEach(({ element: e, option: t }) => {
      e.remove(), t.remove();
    }), this.items = [], this.inputValue.value = "", this.select.value = "", this._value = "";
  }
  removeItem(e) {
    this.items.filter((t) => t.value === e).forEach(({ element: t, option: i }) => {
      t.remove(), i.remove();
    }), this.items = this.items.filter((t) => t.value !== e);
  }
  expand() {
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || N("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = j(this.divSelect, this.divDropDown);
    }, 0));
  }
  hide() {
    this.floatingCleanup(), this.escController.destroy(), this.outsideHandler.destroy(), this.divSelect.classList.remove("is-expanded"), this.divDropDown.classList.remove("is-expanded"), this.divDropDown.addEventListener("transitionend", (e) => {
      e.currentTarget === e.target && this.divDropDown.remove();
    }, { once: !0 });
  }
  toggle() {
    this.divSelect.classList.contains("is-expanded") ? this.hide() : this.expand();
  }
  addItem(e, t, i = {}) {
    const { item: s, button: o } = De(e, t), r = document.createElement("option");
    return Object.entries(i).forEach(([c, a]) => r.setAttribute(c, a)), r.value = e, r.innerText = t, this.select.appendChild(r), this.items.push({ text: t, value: e, element: s, option: r, attr: i }), this.ulItems.appendChild(s), s.onclick = (c) => {
      this.lastClickedOption !== r && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: i, element: s, option: r })), this.hide();
    }, o;
  }
  /*
   * Object Events
   */
  onChange(e, t) {
  }
  setValueWithoutEvent(e) {
    if (this._value !== e)
      if (this.hasElementByValue(e))
        this.selectItem(e, !1);
      else
        throw new Error(`There is no '${e}' value`);
  }
  /*
   * Private Methods
   */
  hasElementByValue(e) {
    return [...this.ulItems.querySelectorAll("[ir-select-value]")].map((t) => t).some((t) => t.getAttribute("ir-select-value") === e);
  }
  clearSelectedStatus() {
    this.items.forEach(({ element: e }) => e.classList.remove(b.selectDropdownItemSelected));
  }
  selectItem(e, t = !0) {
    this.clearSelectedStatus();
    const i = this.getSelectedItemOrNull(e);
    i && this.changeValue(i, t);
  }
  getSelectedItemOrNull(e) {
    for (const t of this.items)
      if (t.value === e)
        return t;
    return null;
  }
  changeValue({ text: e, value: t, option: i, element: s }, o = !0) {
    this.lastClickedOption = i, s.classList.add(b.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, o && this.onChange(this.select, i);
  }
}
const R = {
  datePicker: ee,
  datePickerHeader: te,
  datePickerHeaderTitle: ie,
  datePickerContent: se,
  datePickerFooter: oe,
  datePickerContentCell: B,
  datePickerContentHeaderCell: ne,
  datePickerContentTable: re
};
function Ie() {
  const n = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), i = document.createElement("button"), s = document.createElement("strong"), o = document.createElement("button"), r = document.createElement("button"), c = document.createElement("div"), a = document.createElement("div");
  t.appendChild(T("ir-icon--chevron-double-left")), i.appendChild(T("ir-icon--chevron-left")), o.appendChild(T("ir-icon--chevron-right")), r.appendChild(T("ir-icon--chevron-double-right"));
  const p = document.createElement("div"), h = document.createElement("table"), w = document.createElement("thead"), l = document.createElement("tbody"), m = document.createElement("div");
  n.classList.add(R.datePicker), e.classList.add(R.datePickerHeader), s.classList.add(R.datePickerHeaderTitle), p.classList.add(R.datePickerContent), m.classList.add(R.datePickerFooter), c.appendChild(t), c.appendChild(i), a.appendChild(o), a.appendChild(r), e.appendChild(c), e.appendChild(s), e.appendChild(a);
  const f = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], g = document.createElement("tr"), k = {};
  f.forEach((v) => {
    const C = document.createElement("th");
    C.className = `${R.datePickerContentCell} ${R.datePickerContentHeaderCell}`, C.setAttribute("scope", "col"), k[v] = C, g.appendChild(C);
  }), w.appendChild(g), h.className = R.datePickerContentTable, h.appendChild(w), h.appendChild(l), p.appendChild(h);
  const D = document.createElement("div"), _ = document.createElement("button");
  return _.classList.add("button"), _.type = "button", D.appendChild(_), m.appendChild(D), n.appendChild(e), n.appendChild(p), n.appendChild(m), {
    datePicker: n,
    headerTitle: s,
    contentTableTbody: l,
    headerPrev: i,
    headerNext: o,
    todayButton: _,
    headerNextYear: r,
    headerPrevYear: t,
    updateI18n: x
  };
  function x() {
    _.innerHTML = "", _.appendChild(T("ir-icon--check", "button__icon-prefix")), _.append(y.t("datePicker.btnToday")), f.forEach((v) => k[v].innerText = y.t(`common.${v}`));
  }
}
const xe = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    return n || (n = Ie()), n;
  };
})(), V = (n) => (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0), n), Te = 6, He = 7, Me = 32, ye = 0, Le = ({ uuid: n, refElement: e, onClick: t, minDate: i, maxDate: s }) => {
  let o = !1, r = () => {
  }, c = null;
  V(i), V(s);
  const a = xe(), p = U({
    eventElements: [a.datePicker],
    clickOutsideFunc: () => h.hide()
  }), h = {
    get visible() {
      return o;
    },
    update(l, m) {
      const f = V(/* @__PURE__ */ new Date()), g = V(new Date(l)), k = g.getMonth();
      a.headerPrev.onclick = () => {
        l.setDate(ye), this.update(l, m);
      }, a.headerNext.onclick = () => {
        l.setDate(Me), this.update(l, m);
      }, a.headerPrevYear.onclick = () => {
        l.setFullYear(l.getFullYear() - 1), this.update(l, m);
      }, a.headerNextYear.onclick = () => {
        l.setFullYear(l.getFullYear() + 1), this.update(l, m);
      }, a.todayButton.onclick = () => {
        t.call(null, f), this.update(f, f);
      };
      const D = f < i || f > s;
      a.todayButton.disabled = D;
      const _ = a.todayButton.parentElement;
      D && _ && c == null && (c = ge({
        refElement: _,
        label: y.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), a.updateI18n(), a.headerTitle.innerText = I(g).format(y.t("datePicker.titleFormat")), g.setDate(1), g.setDate(-(g.getDay() - 1)), a.contentTableTbody.innerHTML = "";
      for (let x = 0; x < Te; x++) {
        const v = document.createElement("tr");
        for (let C = 0; C < He; C++) {
          const E = document.createElement("td"), d = new Date(g);
          E.className = B, E.innerText = `${g.getDate()}`, E.onclick = () => t(d), d < i || d > s ? E.classList.add("is-disabled") : g.getMonth() !== k ? E.classList.add("is-diff-month") : g.getTime() === m?.getTime() && E.classList.add(ae), v.appendChild(E), g.setDate(g.getDate() + 1);
        }
        a.contentTableTbody.appendChild(v);
      }
    },
    show() {
      o = !0, a.datePicker.isConnected || N("popover").appendChild(a.datePicker), a.datePicker.style.removeProperty("display"), a.datePicker.setAttribute("data-for", n), p.create(), w.create(), setTimeout(() => {
        a.datePicker.classList.add("is-visible"), r(), r = j(e, a.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      p.destroy(), w.destroy(), c && (c.destroy(), c = null);
      const l = (m) => {
        m.currentTarget === m.target && (o = !1, a.datePicker.removeEventListener("transitionend", l), n === a.datePicker.getAttribute("data-for") && (r(), a.datePicker.remove()));
      };
      a.datePicker.addEventListener("transitionend", l), a.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, w = F(h);
  return h;
}, O = (n, e) => n instanceof Date ? I(n).startOf("D") : typeof n == "string" ? I(n, e) : I(null);
class Ge extends z {
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
    format: i = y.t("datePicker.dateFormat"),
    checkbox: s = !1,
    disabled: o = !1,
    allowedEmptyString: r = !0,
    onSelect: c,
    onChange: a,
    onCheckboxClick: p,
    minDate: h = P().getStoreValue("datePicker.minDate"),
    maxDate: w = P().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const l = O(t, i);
      l.isValid() ? (this.calendarDate = l.toDate(), this.selectedDate = l.toDate()) : console.error(`invalid defaultDate format. it must follow ${i}`);
    }
    if (!r && this.selectedDate == null) {
      const l = O(/* @__PURE__ */ new Date(), i);
      this.calendarDate = l.toDate(), this.selectedDate = l.toDate();
    }
    if (this.format = i, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(T("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(le), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", this.format), this.input.classList.add(de, "tnum-adj"), this.button.className = ce, this.button.type = "button", this._minDate = h, this._maxDate = w, c && (this.onSelect = c), a && (this.onChange = a), p && (this.onCheckboxClick = p), s) {
      const l = document.createElement("div"), m = document.createElement("label"), f = document.createElement("input");
      f.setAttribute("type", "checkbox"), l.classList.add(he, ue), m.className = me, f.className = pe, m.appendChild(f), l.appendChild(m), this.div.appendChild(l), f.checked = !o, f.onchange = () => {
        this.disabled = !f.checked, this.onCheckboxClick(f.checked);
      }, this.addCoreElement(l);
    }
    this.disabled = o, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = I(this.selectedDate).format(i)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        r ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      const l = I(this.input.value, this.format, !0);
      !l.isValid() || l.toDate() < this.minDate || l.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(l.toDate());
    }), this.handler = Le({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (l) => {
        this.setDate(l), this.onSelect(l), this.hide();
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
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = I(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
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
class Ve {
  _commands;
  _label;
  constructor(e, ...t) {
    this._label = e, this._commands = t;
  }
  get commandLength() {
    return this._commands.length;
  }
  pushCommand(e) {
    this._commands.push(e);
  }
  execute() {
    const e = [];
    try {
      let t = 0;
      for (; t < this._commands.length; ) {
        const i = this._commands[t];
        if (!i.canExecute)
          throw console.error(i), new Error("Can't execute this command");
        i.execute(), e.push(i), ++t;
      }
    } catch (t) {
      return console.error("execute error!", t), e.reverse().forEach((i) => i.undo()), !1;
    }
    return !0;
  }
  undo() {
    const e = [];
    try {
      let t = this._commands.length - 1;
      for (; t >= 0; ) {
        const i = this._commands[t];
        if (!i.canUndo)
          throw console.error(i), new Error("Can't undo this command");
        i.undo(), e.push(i), --t;
      }
    } catch (t) {
      return console.error("undo error!", t), e.forEach((i) => i.execute()), !1;
    }
    return !0;
  }
  get label() {
    return this._label;
  }
}
const Se = 1024;
class Ye {
  #e = [];
  #i = [];
  #n = !0;
  #s;
  #r;
  #o;
  #t;
  constructor({
    context: e,
    undoStackLength: t = Se,
    disabled: i = !1
  }) {
    this.#s = t, this.#r = i, this.#o = e;
  }
  /**
   * IRGrid Undo / Redo를 위한 동작 블럭을 녹화함
   * @description 하나의 동기적인 흐름 안에서만 사용할 것
   */
  doRecording(e = "", t) {
    if (this.isDisabled)
      return t();
    if (this.isRecording)
      throw new Error("Already doing record!");
    try {
      return this.#t = new Ve(e), t(), this.pushCommandBlock(this.#t), this.#t;
    } catch (i) {
      console.error("Got an error during recording!"), console.error(i);
    } finally {
      this.#t = void 0;
    }
  }
  undo() {
    const e = this.#e.pop();
    return e?.undo() ? (this.#i.push(e), this.#o.onUndo(e), e) : null;
  }
  redo() {
    const e = this.#i.pop();
    return e?.execute() ? (this.#e.push(e), this.#o.onRedo(e), e) : null;
  }
  pushCommandBlock(e) {
    this.isDisabled || (this.#e.length >= this.#s && this.#e.shift(), this.#e.push(e), this.#i.length = 0);
  }
  pushCommand(e) {
    if (!this.#t)
      throw new Error("Not recording!");
    this.#t.pushCommand(e);
  }
  clearCommands() {
    this.#e.length = 0, this.#i.length = 0;
  }
  pauseUIRecording() {
    this.#n = !1;
  }
  startUIRecording() {
    this.#n = !0;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get commandContext() {
    return this.#o;
  }
  get isRecording() {
    return this.#t !== void 0;
  }
  get isPreventedUIRecording() {
    return this.#n;
  }
  get isDisabled() {
    return this.#r;
  }
  get stackLength() {
    return this.#s;
  }
  set stackLength(e) {
    this.#s = e;
  }
  set isDisabled(e) {
    this.#r = e;
  }
  get undoCommandStack() {
    return [...this.#e];
  }
  get redoCommandStack() {
    return [...this.#i];
  }
}
export {
  Ue as I,
  ke as a,
  De as b,
  je as c,
  $e as d,
  Ge as e,
  Ye as f,
  Ve as g,
  Le as h,
  xe as i,
  Ne as r
};
//# sourceMappingURL=command-manager-DADytCBz.js.map
