import { e as F, b as P, g as z, h as O, j as L } from "./floating-CqSaT-kJ.js";
import { I as M } from "./index-D3h_uvNf.js";
import { s as N, m as j, n as U, o as $, p as G, q as Y, r as W, t as q, u as K, v as Z, w as J, x as X, y as Q, A as ee, B as te, C as A, D as ie, E as se, F as oe, G as ne, H as re, I as ae, J as le, K as de, L as he, M as ce } from "./css-rF0v2sLP.js";
import { c as ue, a as D, b as pe } from "./rx-state-qVN2AgXP.js";
import { c as B } from "./outside-DA89_Rlc.js";
import { i as x, d as k } from "./index-Dg1kU5Nj.js";
class V {
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
    defaultHeight: s,
    object: o,
    visible: r
  }) {
    this._rowId = e, this._top = t, this._height = i, this._object = o ?? null, this._visible = r, this._defaultHeight = s;
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
class me {
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
    const o = new V({
      rowId: this._rows.length,
      height: e,
      top: this._totalHeight,
      defaultHeight: t,
      object: i,
      visible: s
    });
    return this._rows.push(o), s && (this._visibleRowList.push(o), this._totalHeight += e), o;
  }
  /**
   * row를 rowId에 넣는다. (이미 row가 존재하면 뒤로 민다.)
   */
  insertRow(e, t, i, s, o = !0) {
    const r = this.insertRows(1, e, t, i, [s], o);
    return s && r[0].updateObject(s, !1), r[0];
  }
  insertRows(e, t, i, s, o, r = !0) {
    if (t < this._headerRowsCount || t > this.rowCount)
      throw new Error(`invalid row range. it must be between ${this._headerRowsCount} ~ ${this.rowCount}`);
    const h = this._rows[t], a = [];
    let w = h ? h.top : this._totalHeight;
    for (let c = 0; c < e; ++c) {
      const m = t + c, l = typeof r == "function" ? r(c, m) : r;
      a.push(new V({
        rowId: m,
        height: i,
        defaultHeight: s,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: w,
        visible: l,
        object: o?.[c] ?? void 0
      })), w += i, l && (this._totalHeight += i);
    }
    return h ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
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
function we(n, e, t = 1) {
  const i = [];
  for (let s = n; s < e; s += t)
    i.push(s);
  return i;
}
function Oe(n, e, t = 1) {
  const { start: i, end: s } = e === void 0 ? { start: 0, end: n } : { start: n, end: e };
  return {
    forEach(o) {
      let r = i;
      for (; r !== s; )
        o(r), r += t;
    },
    map(o) {
      const r = [];
      for (let h = i; h < s; h += t)
        r.push(o(h));
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
      return we(i, s, t);
    },
    reduce(o, r) {
      let h = r, a = i;
      for (; a !== s; )
        h = o(h, a), a += t;
      return h;
    }
  };
}
function y() {
  const n = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: i,
    add: o,
    remove: s,
    clear: r,
    clearAll: h,
    forEach: a,
    forEachAsync: w
  };
  function e(c) {
    return n.has(c);
  }
  function t(c) {
    return n.get(c);
  }
  function i(c) {
    const m = n.get(c);
    return m || null;
  }
  function s(c, m) {
    const l = i(c);
    if (!l)
      return;
    const u = l.indexOf(m);
    u > -1 && l.splice(u, 1);
  }
  function o(c, m) {
    e(c) ? t(c).push(m) : n.set(c, [m]);
  }
  function r(c) {
    n.set(c, []);
  }
  function h() {
    n.clear();
  }
  function a(c, m) {
    const l = i(c);
    if (!l)
      return !0;
    for (const u of l)
      if (m(u) === !1)
        return !1;
    return !0;
  }
  async function w(c, m) {
    const l = i(c);
    if (!l)
      return !0;
    try {
      for (const u of l) {
        const f = m(u);
        if (f === !1 || f instanceof Promise && await f === !1)
          return !1;
      }
    } catch (u) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(u), u;
    }
    return !0;
  }
}
async function fe(n) {
  for (const { label: e, task: t } of n)
    try {
      if (await t() === !1)
        return !1;
    } catch (i) {
      throw console.error(`occurred an error when ${e}`), i;
    }
  return !0;
}
function Ae() {
  const n = /* @__PURE__ */ new Map(), e = y(), t = y(), i = y();
  return {
    emit: r,
    pauseEmit: s,
    resumeEmit: o,
    clearHooks: h,
    addHook: a,
    setHook: c,
    removeHook: w,
    clearBeginHooks: m,
    addBeginHook: l,
    setBeginHook: u,
    clearEndHooks: f,
    addEndHook: g,
    setEndHook: I,
    destroy: E
  };
  function s(d) {
    const p = n.get(d);
    n.set(d, p ? p + 1 : 1);
  }
  function o(d) {
    const p = n.get(d);
    p && p > 1 ? n.set(d, p - 1) : p === 1 && n.delete(d);
  }
  function r(d, p) {
    if (n.has(d))
      return Promise.resolve(!0);
    const v = (b) => b(...p);
    return fe([
      {
        label: `begin_${d}`,
        task: () => e.forEachAsync(d, v)
      },
      {
        label: `${d}`,
        task: () => i.forEachAsync(d, v)
      },
      {
        label: `end_${d}`,
        task: () => t.forEachAsync(d, v)
      }
    ]);
  }
  function h(d) {
    i.clear(d);
  }
  function a(d, p) {
    i.add(d, p);
  }
  function w(d, p) {
    i.remove(d, p);
  }
  function c(d, p) {
    h(d), a(d, p);
  }
  function m(d) {
    e.clear(d);
  }
  function l(d, p) {
    e.add(d, p);
  }
  function u(d, p) {
    m(d), l(d, p);
  }
  function f(d) {
    t.clear(d);
  }
  function g(d, p) {
    t.add(d, p);
  }
  function I(d, p) {
    f(d), g(d, p);
  }
  function E() {
    e.clearAll(), t.clearAll(), i.clearAll();
  }
}
function ge(n) {
  const e = document.createElement("div"), t = document.createElement("div");
  return t.className = "ir-vd-container__viewport ir-vd-container__viewport--freezed", e.className = "ir-vd-container__viewport", n?.className && (e.classList.add(n.className), t.classList.add(n.className)), n?.role && e.setAttribute("role", n.role), n?.tabIndex !== void 0 && e.setAttribute("tabindex", String(n.tabIndex)), {
    viewport: e,
    freezedViewport: t
  };
}
const ve = 4;
function _e() {
  return {
    rAFHandler: -1,
    startRowId: -1,
    scrollRow: -1,
    registeredTasks: /* @__PURE__ */ new Set(),
    afterRenderTasks: []
  };
}
class Be extends M {
  constructor(e) {
    super(e), this.args = e, this.contextElement.classList.add("ir-vd-container"), this._viewportElements = ge(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new me(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? F("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * ve, this.contextElement.style.setProperty("--ir-vd-default-row-height", `${this._defaultRowHeight}px`), this.initScrollEvent(), this.initRowCol();
  }
  _viewportElements;
  _itemManager;
  _debounceContext = _e();
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
    e.style.setProperty("--ir-vd-container-height", `${String(i)}px`), e.style.setProperty("--ir-vd-row-count", `${this._itemManager.headerRowsCount}`), t.style.setProperty("--ir-vd-container-height", `${String(s)}px`), t.style.setProperty("--ir-vd-row-count", `${this._itemManager.rowCount}`);
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
    let h = null;
    for (let a = s.rowId; a <= o.rowId; ++a) {
      const w = this._itemManager.getRowById(a);
      if (w.visible) {
        if (!w.isConnectedInDOM) {
          const c = w.getRowElement();
          h ? h.getRowElement().after(c) : r.prepend(c), w.onMounted(w, c);
        }
        h = w;
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
    return r.forEach((h) => this.bindEventsToRow(h)), o && r[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(r[0].rowId + 1)), r;
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
      const r = this._itemManager.getRowById(o), h = i(r);
      this._itemManager.setRowVisible(o, h), h && o < this._itemManager.headerRowsCount && s.append(this._itemManager.getRowById(o).getRowElement());
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
const _ = {
  select: N,
  selectDropdown: j,
  selectDropdownList: U,
  selectDropdownButton: $,
  selectDropdownItem: G,
  selectDropdownIcon: Y,
  selectInput: W,
  selectInputNative: q,
  selectInputIcon: K,
  selectDropdownItemSelected: Z
}, be = () => {
  const n = document.createElement("div"), e = document.createElement("ul");
  return n.classList.add(_.selectDropdown, ue.zIndex.popover), e.className = _.selectDropdownList, n.appendChild(e), { divDropdown: n, ulItems: e };
}, Ce = (n, e) => {
  const t = document.createElement("li"), i = document.createElement("button"), s = document.createElement("i"), o = document.createElement("span");
  return o.innerText = e, i.type = "button", i.title = e, i.className = _.selectDropdownButton, t.className = _.selectDropdownItem, t.setAttribute("ir-select-value", n), s.classList.add(_.selectDropdownIcon, "ir-icon", "ir-icon--check"), i.appendChild(s), i.append(o), t.append(i), { item: t, button: i, icon: s, span: o };
};
class Fe extends M {
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
    const t = be();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const i = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(_.select), this.select.classList.forEach((o) => this.divSelect.classList.add(o)), this.divInput.className = _.selectInput, this.inputValue.className = _.selectInputNative, i.classList.add(_.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(i), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const s = this.select.value;
    this._value = "", Array.from(this.select.children).map((o) => o).forEach((o) => {
      const r = {};
      for (let h = 0; h < o.attributes.length; ++h) {
        const a = o.attributes.item(h);
        if (!a) return;
        r[a.name] = a.value;
      }
      this.addItem(o.value, o.text, r), o.remove();
    }), e instanceof HTMLSelectElement ? this.value = s : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || s), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = P(this), this.outsideHandler = B({
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
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || z("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = O(this.divSelect, this.divDropDown);
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
    const { item: s, button: o } = Ce(e, t), r = document.createElement("option");
    return Object.entries(i).forEach(([h, a]) => r.setAttribute(h, a)), r.value = e, r.innerText = t, this.select.appendChild(r), this.items.push({ text: t, value: e, element: s, option: r, attr: i }), this.ulItems.appendChild(s), s.onclick = (h) => {
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
    this.items.forEach(({ element: e }) => e.classList.remove(_.selectDropdownItemSelected));
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
    this.lastClickedOption = i, s.classList.add(_.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, o && this.onChange(this.select, i);
  }
}
const C = {
  datePicker: J,
  datePickerHeader: X,
  datePickerHeaderTitle: Q,
  datePickerContent: ee,
  datePickerFooter: te,
  datePickerContentCell: A,
  datePickerContentHeaderCell: ie,
  datePickerContentTable: se
};
function Ee() {
  const n = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), i = document.createElement("button"), s = document.createElement("strong"), o = document.createElement("button"), r = document.createElement("button"), h = document.createElement("div"), a = document.createElement("div");
  t.appendChild(D("ir-icon--chevron-double-left")), i.appendChild(D("ir-icon--chevron-left")), o.appendChild(D("ir-icon--chevron-right")), r.appendChild(D("ir-icon--chevron-double-right"));
  const w = document.createElement("div"), c = document.createElement("table"), m = document.createElement("thead"), l = document.createElement("tbody"), u = document.createElement("div");
  n.classList.add(C.datePicker), e.classList.add(C.datePickerHeader), s.classList.add(C.datePickerHeaderTitle), w.classList.add(C.datePickerContent), u.classList.add(C.datePickerFooter), h.appendChild(t), h.appendChild(i), a.appendChild(o), a.appendChild(r), e.appendChild(h), e.appendChild(s), e.appendChild(a);
  const f = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], g = document.createElement("tr"), I = {};
  f.forEach((v) => {
    const b = document.createElement("th");
    b.className = `${C.datePickerContentCell} ${C.datePickerContentHeaderCell}`, b.setAttribute("scope", "col"), I[v] = b, g.appendChild(b);
  }), m.appendChild(g), c.className = C.datePickerContentTable, c.appendChild(m), c.appendChild(l), w.appendChild(c);
  const E = document.createElement("div"), d = document.createElement("button");
  return d.classList.add("button"), d.type = "button", E.appendChild(d), u.appendChild(E), n.appendChild(e), n.appendChild(w), n.appendChild(u), {
    datePicker: n,
    headerTitle: s,
    contentTableTbody: l,
    headerPrev: i,
    headerNext: o,
    todayButton: d,
    headerNextYear: r,
    headerPrevYear: t,
    updateI18n: p
  };
  function p() {
    d.innerHTML = "", d.appendChild(D("ir-icon--check", "button__icon-prefix")), d.append(x.t("datePicker.btnToday")), f.forEach((v) => I[v].innerText = x.t(`common.${v}`));
  }
}
const Re = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    return n || (n = Ee()), n;
  };
})(), T = (n) => (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0), n), ke = 6, Ie = 7, De = 32, xe = 0, Te = ({ uuid: n, refElement: e, onClick: t, minDate: i, maxDate: s }) => {
  let o = !1, r = () => {
  }, h = null;
  T(i), T(s);
  const a = Re(), w = B({
    eventElements: [a.datePicker],
    clickOutsideFunc: () => c.hide()
  }), c = {
    get visible() {
      return o;
    },
    update(l, u) {
      const f = T(/* @__PURE__ */ new Date()), g = T(new Date(l)), I = g.getMonth();
      a.headerPrev.onclick = () => {
        l.setDate(xe), this.update(l, u);
      }, a.headerNext.onclick = () => {
        l.setDate(De), this.update(l, u);
      }, a.headerPrevYear.onclick = () => {
        l.setFullYear(l.getFullYear() - 1), this.update(l, u);
      }, a.headerNextYear.onclick = () => {
        l.setFullYear(l.getFullYear() + 1), this.update(l, u);
      }, a.todayButton.onclick = () => {
        t.call(null, f), this.update(f, f);
      };
      const E = f < i || f > s;
      a.todayButton.disabled = E;
      const d = a.todayButton.parentElement;
      E && d && h == null && (h = pe({
        refElement: d,
        label: x.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), a.updateI18n(), a.headerTitle.innerText = k(g).format(x.t("datePicker.titleFormat")), g.setDate(1), g.setDate(-(g.getDay() - 1)), a.contentTableTbody.innerHTML = "";
      for (let p = 0; p < ke; p++) {
        const v = document.createElement("tr");
        for (let b = 0; b < Ie; b++) {
          const R = document.createElement("td"), H = new Date(g);
          R.className = A, R.innerText = `${g.getDate()}`, R.onclick = () => t(H), H < i || H > s ? R.classList.add("is-disabled") : g.getMonth() !== I ? R.classList.add("is-diff-month") : g.getTime() === u?.getTime() && R.classList.add(oe), v.appendChild(R), g.setDate(g.getDate() + 1);
        }
        a.contentTableTbody.appendChild(v);
      }
    },
    show() {
      o = !0, a.datePicker.isConnected || z("popover").appendChild(a.datePicker), a.datePicker.style.removeProperty("display"), a.datePicker.setAttribute("data-for", n), w.create(), m.create(), setTimeout(() => {
        a.datePicker.classList.add("is-visible"), r(), r = O(e, a.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      w.destroy(), m.destroy(), h && (h.destroy(), h = null);
      const l = (u) => {
        u.currentTarget === u.target && (o = !1, a.datePicker.removeEventListener("transitionend", l), n === a.datePicker.getAttribute("data-for") && (r(), a.datePicker.remove()));
      };
      a.datePicker.addEventListener("transitionend", l), a.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, m = P(c);
  return c;
}, S = (n, e) => n instanceof Date ? k(n).startOf("D") : typeof n == "string" ? k(n, e) : k(null);
class Ne extends M {
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
    format: i = x.t("datePicker.dateFormat"),
    checkbox: s = !1,
    disabled: o = !1,
    allowedEmptyString: r = !0,
    onSelect: h,
    onChange: a,
    onCheckboxClick: w,
    minDate: c = L().getStoreValue("datePicker.minDate"),
    maxDate: m = L().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const l = S(t, i);
      l.isValid() ? (this.calendarDate = l.toDate(), this.selectedDate = l.toDate()) : console.error(`invalid defaultDate format. it must follow ${i}`);
    }
    if (!r && this.selectedDate == null) {
      const l = S(/* @__PURE__ */ new Date(), i);
      this.calendarDate = l.toDate(), this.selectedDate = l.toDate();
    }
    if (this.format = i, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(D("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(ne), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", this.format), this.input.classList.add(re, "tnum-adj"), this.button.className = ae, this.button.type = "button", this._minDate = c, this._maxDate = m, h && (this.onSelect = h), a && (this.onChange = a), w && (this.onCheckboxClick = w), s) {
      const l = document.createElement("div"), u = document.createElement("label"), f = document.createElement("input");
      f.setAttribute("type", "checkbox"), l.classList.add(le, de), u.className = he, f.className = ce, u.appendChild(f), l.appendChild(u), this.div.appendChild(l), f.checked = !o, f.onchange = () => {
        this.disabled = !f.checked, this.onCheckboxClick(f.checked);
      }, this.addCoreElement(l);
    }
    this.disabled = o, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = k(this.selectedDate).format(i)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        r ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      const l = k(this.input.value, this.format, !0);
      !l.isValid() || l.toDate() < this.minDate || l.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(l.toDate());
    }), this.handler = Te({
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
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = k(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
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
class He {
  _commands;
  _label;
  constructor(e, ...t) {
    this._label = e, this._commands = t;
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
const ye = 1024;
class je {
  #e = [];
  #i = [];
  #n = !0;
  #s;
  #r;
  #o;
  #t;
  constructor({
    context: e,
    undoStackLength: t = ye,
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
      return this.#t = new He(e), t(), this.pushCommandBlock(this.#t), this.#t;
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
  Be as I,
  be as a,
  Ce as b,
  Ae as c,
  Fe as d,
  Ne as e,
  je as f,
  He as g,
  Te as h,
  Re as i,
  Oe as r
};
//# sourceMappingURL=command-manager-13fgVXM7.js.map
