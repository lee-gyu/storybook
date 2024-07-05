import "./chunks/_init-CqtFEZw2.js";
import { e as ie, h as me, i as ge, c as Ee, g as ce, r as Ve, u as Fe, o as Be, j as Ue } from "./chunks/floating-B9y9ooPB.js";
import { k as Si, l as Mi, a as Pi } from "./chunks/floating-B9y9ooPB.js";
import { I as q } from "./chunks/index-cpGHHlo1.js";
import { e as L, h as ze, u as he, y as se, f as Y, I as oe, g as T, i as ne, s as X, j as y, l as M, n as $e, b as K, R as je, o as Ge, p as We, Y as Re, r as xe, q as Ie, t as Te, v as Le, c as ye, C as Ke, J as we, K as qe, O as Ye, Q as Xe, T as Je, U as J, a as Ze } from "./chunks/rx-state-CHpF6m8D.js";
import { a5 as Ai, a8 as Vi, a0 as Fi, W as Bi, d as Ui, $ as zi, a7 as $i, a6 as ji, a1 as Gi, X as Wi, a3 as Ki, _ as qi, a4 as Yi, a2 as Xi } from "./chunks/rx-state-CHpF6m8D.js";
import { u as Qe } from "./chunks/uuid-P7jWfzzn.js";
import { s as He, c as et } from "./chunks/command-manager-B89JK2HT.js";
import { e as Zi, d as Qi, I as eo, a as to, b as io } from "./chunks/command-manager-B89JK2HT.js";
import { d as S, i as G } from "./chunks/ko-CwHxoe1v.js";
import { createLoadingHandler as no, createSplitContainer as so, createTooltipContainer as ro } from "./utility.js";
import { a as lo, c as co, d as ho, g as uo, b as po } from "./chunks/image-HI2BJVWo.js";
import { L as mo } from "./chunks/logger-BzjoGhbK.js";
class Ce {
  constructor({
    rowId: e,
    top: t,
    height: i,
    defaultHeight: o,
    object: s,
    visible: n
  }) {
    this._isFreezed = !1, this._cachedElement = null, this._templateHelperObj = null, this._rowId = e, this._top = t, this._height = i, this._object = s ?? null, this._visible = n, this._defaultHeight = o;
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
    if (!this.isCachedElement)
      return;
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
    if (!this.isCachedElement)
      return;
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
  constructor() {
    this._rows = [], this._visibleRowList = [], this._totalHeight = 0, this._totalWidth = 0, this._freezedHeight = 0, this._headerRowsCount = 0, this._hiddenHeaderRowsCount = 0;
  }
  updateRowInfo(e) {
    let t = e;
    for (; t < this.rowCount; ) {
      const i = this._rows[t - 1];
      this._rows[t].setRowInfo(t, (i == null ? void 0 : i.bottom) ?? 0), ++t;
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
    const s = new Ce({
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
    const l = this._rows[t], a = [];
    let d = l ? l.top : this._totalHeight;
    for (let c = 0; c < e; ++c) {
      const f = t + c, p = typeof n == "function" ? n(c, f) : n;
      a.push(new Ce({
        rowId: f,
        height: i,
        defaultHeight: o,
        // row가 존재하면 해당 row로 설정 없다면, 맨 끝이니 totalHeight
        top: d,
        visible: p,
        object: (s == null ? void 0 : s[c]) ?? void 0
      })), d += i, p && (this._totalHeight += i);
    }
    return l ? this._rows.splice(t, 0, ...a) : this._rows.push(...a), a;
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
    if (i.visible === t)
      return;
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
  return t.className = "ir-vd-container__viewport ir-vd-container__viewport--freezed", e.className = "ir-vd-container__viewport", r != null && r.className && e.classList.add(r.className), r != null && r.role && e.setAttribute("role", r.role), (r == null ? void 0 : r.tabIndex) !== void 0 && e.setAttribute("tabindex", String(r.tabIndex)), {
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
class st extends q {
  constructor(e) {
    super(e), this.args = e, this._debounceContext = nt(), this.contextElement.classList.add("ir-vd-container"), this._viewportElements = it(e.rowContainer), this.contextElement.append(
      this._viewportElements.freezedViewport,
      this._viewportElements.viewport
    ), this._itemManager = new tt(), this.resizeObserve(() => {
      this.scheduleTasks("update-viewport");
    }), e.onMountedRow && (this.onMountedRow = e.onMountedRow), e.onCreatedRowElement && (this.onCreatedRowElement = e.onCreatedRowElement), e.onUpdatedRowObject && (this.onUpdatedRowObject = e.onUpdatedRowObject), this._defaultRowHeight = e.defaultRowHeight ?? ie("virtual-dom.defaultHeight"), this._viewportGap = this._defaultRowHeight * ot, this.contextElement.style.setProperty("--ir-vd-default-row-height", `${this._defaultRowHeight}px`), this.initScrollEvent(), this.initRowCol();
  }
  initScrollEvent() {
    this.addGlobalEventListener(this.contextElement, "scroll", (e) => {
      this.scheduleTasks("update-viewport");
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
    e.style.setProperty("--ir-vd-container-height", `${String(i)}px`), t.style.setProperty("--ir-vd-container-height", `${String(o)}px`);
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
    if (this._itemManager.rowCount === 0 || this.isElementMounted() === !1)
      return;
    const e = this.contextElement.scrollTop, t = Math.max(0, e - this._viewportGap, this._itemManager.freezedHeight + 1), i = e + this.contextElement.clientHeight + this._viewportGap, o = this._itemManager.getRowByTop(t), s = this._itemManager.getRowByTop(i) ?? this._itemManager.lastRow;
    if (!o)
      return;
    this.unmountNotInViewport(o.rowId, s.rowId);
    const { viewport: n } = this._viewportElements;
    if (n.childElementCount === 0) {
      n.append(this._itemManager.createRowsFragment(o.rowId, s.rowId));
      return;
    }
    let l = null;
    for (let a = o.rowId; a <= s.rowId; ++a) {
      const d = this._itemManager.getRowById(a);
      if (d.visible) {
        if (!d.isConnectedInDOM) {
          const c = d.getRowElement();
          l ? l.getRowElement().after(c) : n.prepend(c), d.onMounted(d, c);
        }
        l = d;
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
    return n.forEach((l) => this.bindEventsToRow(l)), s && n[0] && (this.scheduleTasks("update-container-size", "update-viewport", "update-visible-row"), this.scheduleCascadeRowInfoUpdate(n[0].rowId + 1)), n;
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
      const n = this._itemManager.getRowById(s), l = i(n);
      this._itemManager.setRowVisible(s, l), l && s < this._itemManager.headerRowsCount && o.append(this._itemManager.getRowById(s).getRowElement());
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
  if (r.length === 0)
    return i;
  for (; t.length; ) {
    const o = t[t.length - 1], { index: s, list: n } = o, l = n[s], { items: a, isDisabled: d } = l;
    d || i.push(l), ++o.index, o.index === n.length && t.pop(), l.expanded && a.length > 0 && t.push({
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
    ArrowDown: d,
    ArrowLeft: f,
    ArrowRight: c,
    " ": p
  };
  return r.addGlobalEventListener(e, "focus", () => {
    t && m(t, !1);
  }), r.addGlobalEventListener(e, "blur", () => {
    g();
  }), r.addGlobalEventListener(e, "keydown", (k) => {
    s[k.key] && (s[k.key](), k.preventDefault());
  }), {
    updateTreeVisibleInfo: n,
    setFocusNode: m
  };
  function n() {
    o = !0;
  }
  function l() {
    return o && (i = rt(r.getOrderedNodes()), o = !1), i;
  }
  function a() {
    const k = t, b = l();
    if (k === null) {
      m(b[0]);
      return;
    }
    const x = b.findIndex((u) => u.uuid === k.uuid), h = b[x - 1];
    h && m(h);
  }
  function d() {
    const k = t, b = l();
    if (k === null) {
      m(b[0]);
      return;
    }
    const x = b.findIndex((u) => u.uuid === k.uuid), h = b[x + 1];
    h && m(h);
  }
  function c() {
    t !== null && t.items.length !== 0 && (t.expanded && !t.items[0].isDisabled ? m(t.items[0]) : t.expand());
  }
  function f() {
    t != null && (t.expanded ? t.collapse() : t.parentItem && m(t.parentItem));
  }
  function p() {
    t && t.select();
  }
  function m(k, b = !0) {
    g(), t = k, t.liTreeItem.classList.add("is-focus"), b && k.scrollIntoView();
  }
  function g() {
    t && t.liTreeItem.classList.remove("is-focus");
  }
}
const D = "tree", R = {
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
}, ue = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), i = document.createElement("span");
  return e.className = R.treeLabel["&"], i.className = R.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (o) => {
      o.iconClass ? (t.isConnected || i.insertAdjacentElement("beforebegin", t), t.className = `${R.treeIconFolder["&"]} ir-icon ${o.iconClass}`, o.iconColor ? t.style.setProperty("--ir-icon-foreground-color", o.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), o.caption ? (e.appendChild(i), i.innerText = o.caption) : i.remove();
    }
  };
}, dt = "ir-icon--triangle-small-right";
class lt {
  constructor({
    parentItem: e,
    icon: t,
    caption: i,
    data: o,
    level: s,
    uuid: n,
    defaultChecked: l = !1,
    renderer: a = ue,
    disabled: d = !1,
    draggable: c
  }) {
    this.children = [], this._parentItem = e, this.data = o, this._level = s, this._iconClass = t, this._caption = i, this._template = a(this), this._checked = l, this._subChecked = l, this._disabled = d, this._uuid = n, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(R.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = L(this.liTreeItem, "div", R.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(R.treeList["&"]), this.iconExpand = L(this.divTreeItemContent, "i", R.treeIconExpand["&"], "ir-icon", dt), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (f) => this.onDragStart(f)), this.divTreeItemContent.addEventListener("dragenter", (f) => this.onDragOver(f) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (f) => this.onDragOver(f) && f.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (f) => this.onDragEnd(f)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (f) => {
      try {
        this.onDrop(f);
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
    return this.liTreeItem.classList.contains(R.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((e) => e.checked || e.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(R.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(R.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(e) {
    if (e === this._parentItem)
      return;
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
    e ? this.liTreeItem.classList.add(R.treeItem.parent) : this.liTreeItem.classList.remove(R.treeItem.parent);
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
    var e;
    this.checked = this.children.every((t) => t.checked), (e = this.parentItem) == null || e.updateCheckedStatus();
  }
  updateSubCheckedStatus() {
    this._subChecked = this.hasCheckedChildren;
  }
  delete() {
    this.liTreeItem.remove(), this.emitDeleteRecursive(), this._parentItem && this._parentItem.removeChildNode(this);
  }
  collapse() {
    this.hasChildren && this.expanded && this.onCollapsing(this) && (this.liTreeItem.classList.remove(R.treeItem["is-expanded"]), this.ulTreeList.remove(), this.onCollapse(this));
  }
  scrollIntoView(e = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(e);
  }
  expand() {
    this.hasChildren && (this.expanded || this.onExpanding(this) && (this.liTreeItem.classList.add(R.treeItem["is-expanded"]), this.liTreeItem.appendChild(this.ulTreeList), this.onExpand(this)));
  }
  toggle() {
    this.liTreeItem.classList.contains(R.treeItem["is-expanded"]) ? this.collapse() : this.expand();
  }
  select() {
    this.selected || (this.liTreeItem.classList.add(R.treeItem["is-selected"]), this.onSelect(this));
  }
  release() {
    this.selected && (this.liTreeItem.classList.remove(R.treeItem["is-selected"]), this.onRelease(this));
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
class vi extends q {
  constructor({
    contextElement: e,
    renderer: t = ue,
    nodeDraggable: i = !0,
    enabledKeyboard: o = !0
  }) {
    super({ contextElement: e }), this._nodeMap = /* @__PURE__ */ new Map(), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = i, e.classList.add(R.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), o && (this._keyboardInteraction = at(this, e)), i === !1 && e.setAttribute("draggable", "false"), this.rootElement = L(e, "ul", R.treeList["&"], R.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (s) => {
      if (s.preventDefault(), !(s.target instanceof HTMLElement))
        return;
      const n = s.target.closest(`.${R.treeItem["&"]}`), l = n ? this.findNodeByUUID(n.dataset.uuid) : null;
      l == null || l.select(), this.onContextMenu(s, l);
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
    var t, i;
    this.selected !== e && ((t = this.selectedNode) == null || t.release(), this.selectedNode = e, this.onChanged(e), e && (e.select(), this.onSelectNode(e), (i = this._keyboardInteraction) == null || i.setFocusNode(e, !1)));
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
      if (s === void 0)
        return !0;
      if (n === void 0)
        return !1;
      if (s < n)
        return !0;
      if (s > n)
        return !1;
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
    if (!t)
      throw new Error(`not found node uuid: ${e}`);
    return t;
  }
  addChild(e, t, i, o = void 0) {
    var a;
    const s = Qe();
    if (this._nodeMap.has(s))
      throw new Error("UUID already exists");
    const n = new lt({
      parentItem: e,
      caption: t,
      data: i,
      level: e ? e.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: e == null ? void 0 : e.checked,
      draggable: this.nodeDraggable,
      uuid: s
    });
    this._nodeMap.set(n.uuid, n), e && e.addNode(n), this.nodes.push(n), n.divTreeItemContent.ondblclick = (d) => {
      d.target.classList.contains("checkbox__wrapper") || this.onDblClick(n);
    }, n.divTreeItemContent.onclick = (d) => {
      this.onLabelClick(n);
    }, n.iconExpand.onclick = () => this.onToggleClick(n), n.onSelect = () => this.selected = n, n.onRelease = (d) => {
      this.selectedNode = null, this.onReleaseNode(d);
    }, n.onRemove = () => {
      var c;
      this.nodes.indexOf(n) !== -1 && this.nodes.splice(this.nodes.indexOf(n), 1), this.onRemoveNode(n), this._nodeMap.delete(n.uuid), (c = this._keyboardInteraction) == null || c.updateTreeVisibleInfo();
    }, n.onExpanding = () => this.onExpanding(n), n.onExpand = () => {
      var d;
      (d = this._keyboardInteraction) == null || d.updateTreeVisibleInfo(), this.onExpand(n);
    }, n.onCollapsing = () => this.onCollapsing(n), n.onCollapse = () => {
      var d;
      (d = this._keyboardInteraction) == null || d.updateTreeVisibleInfo(), this.onCollapse(n);
    }, n.onDragStart = (d) => this.onDragStartNode(n, d), n.onDrop = (d) => this.onDropOnNode(n, d), n.onDragOver = (d) => this.onDragOverOnNode(n, d), n.onDragEnd = (d) => this.onDragEndNode(n, d), n.onRender = (d) => this.onRenderNode(n, d), n.render(), (a = this._keyboardInteraction) == null || a.updateTreeVisibleInfo();
    const l = e ? e.ulTreeList : this.rootElement;
    return o === void 0 ? l.appendChild(n.liTreeItem) : o >= l.children.length ? l.insertAdjacentElement("beforeend", n.liTreeItem) : l.children[o].insertAdjacentElement("beforebegin", n.liTreeItem), n;
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
    var i;
    const t = ze(e.target, R.treeLabel["&"], this.contextElement);
    return t !== null ? (i = t.parentElement) == null ? void 0 : i.parentElement : null;
  }
  getNodeByOffsetTopOrNull(e) {
    return null;
  }
}
const ki = ({ onCheck: r }) => (e) => {
  const t = ue(), i = document.createElement("label"), o = document.createElement("input");
  return o.type = "checkbox", i.classList.add(he), o.classList.add(se), i.appendChild(o), t.template.insertAdjacentElement("afterbegin", i), o.addEventListener("click", () => {
    var s;
    e.updateCheckedWithPropagation(o.checked), (s = e.parentItem) == null || s.updateCheckedStatus(), o.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (s) => {
      var n;
      t.update(s), s.checked !== o.checked && (o.checked = s.checked), (n = s.parentItem) == null || n.updateCheckedStatus(), s.updateSubCheckedStatus(), o.dataset.state = s.subChecked ? "sub-checked" : "";
    }
  };
}, ct = 16, bi = (r) => {
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
      if (n === e)
        return !1;
      n = n._parentItem;
    }
    return i(), o.divTreeItemContent.classList.add(s.offsetY < ct ? "is-top" : "is-bottom"), t = o, !0;
  }, r.onDropOnNode = (o) => {
    if (!e)
      throw new Error("No start dragging node!");
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
  constructor() {
    this._nodeLinkerMap = /* @__PURE__ */ new Map(), this._firstRootNode = null, this._lastRootNode = null, this._rootNodeCount = 0, this._nodeCount = 0;
  }
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
    return o == null || o.setPrevNode(s), i.setNextNode(s), i === this._lastRootNode && this.setLastRootNode(s), this.addLinkMap(e, s, !0), s;
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
    return o == null || o.setNextNode(s), i.setPrevNode(s), i === this._firstRootNode && this.setFirstRootNode(s), this.addLinkMap(e, s, !0), s;
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
      const { link: n, level: l } = s, a = n.getNextNode(), d = n.getFirstChildNode(), c = t(n, l);
      c instanceof Promise && await c, a && o.push({ link: a, level: l }), d && (i === void 0 || await i(n, l)) && o.push({ link: d, level: l + 1 }), s = o.pop();
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
    i == null || i.setNextNode(o), o == null || o.setPrevNode(i), t === this._firstRootNode && this.setFirstRootNode(o), t === this._lastRootNode && this.setLastRootNode(i), this.travelChildNodes(e, (n) => this.deleteNodeInMap(n.key)), this.deleteNodeInMap(e);
    const s = t.getParentNode();
    s ? s.removeChildNode(t) : --this._rootNodeCount;
  }
  getNodeLinkOrNull(e) {
    return this._nodeLinkerMap.get(e) ?? null;
  }
  getNodeLink(e) {
    const t = this.getNodeLinkOrNull(e);
    if (t == null)
      throw new Error(`NodeLinker: NodeLink not found for key: ${e}`);
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
      if (t.key === e)
        return !0;
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
    t == null || t.setNextNode(i), i == null || i.setPrevNode(t), e === this.getFirstChildNode() && this.setFirstChildNode(i), e === this.getLastChildNode() && this.setLastChildNode(t), e.setParentNode(null);
  }
  insertAfterChildNode(e, t) {
    var i;
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getNextNode() && e.setNextNode(t.getNextNode()), e.setPrevNode(t), (i = t.getNextNode()) == null || i.setPrevNode(e), t.setNextNode(e), this.getLastChildNode() === t && this.setLastChildNode(e);
  }
  insertBeforeChildNode(e, t) {
    var i;
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getPrevNode() && e.setPrevNode(t.getPrevNode()), e.setNextNode(t), (i = t.getPrevNode()) == null || i.setNextNode(e), t.setPrevNode(e), this.getFirstChildNode() === t && this.setFirstChildNode(e);
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
    this.args = e, this._selected = !1, this._nodeData = { ...e.nodeData }, this._nodeLinker = e.nodeLinker;
  }
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
      if (e.data.node.expanded === !1)
        return !1;
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
    var t;
    return e === 0 ? this.caption : ((t = this.data.columns) == null ? void 0 : t[e - 1]) ?? "";
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
function re() {
  const r = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: i,
    add: s,
    remove: o,
    clear: n,
    clearAll: l,
    forEach: a,
    forEachAsync: d
  };
  function e(c) {
    return r.has(c);
  }
  function t(c) {
    return r.get(c);
  }
  function i(c) {
    const f = r.get(c);
    return f || null;
  }
  function o(c, f) {
    const p = i(c);
    if (!p)
      return;
    const m = p.indexOf(f);
    m > -1 && p.splice(m, 1);
  }
  function s(c, f) {
    e(c) ? t(c).push(f) : r.set(c, [f]);
  }
  function n(c) {
    r.set(c, []);
  }
  function l() {
    r.clear();
  }
  function a(c, f) {
    const p = i(c);
    if (!p)
      return !0;
    for (const m of p)
      if (f(m) === !1)
        return !1;
    return !0;
  }
  async function d(c, f) {
    const p = i(c);
    if (!p)
      return !0;
    try {
      for (const m of p) {
        const g = f(m);
        if (g instanceof Promise && await g === !1 || g === !1)
          return !1;
      }
    } catch (m) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(m), m;
    }
    return !0;
  }
}
async function pt(r) {
  for (const { label: e, task: t } of r)
    try {
      if (await t === !1)
        return !1;
    } catch (i) {
      throw console.error(`occurred an error when ${e}`), i;
    }
  return !0;
}
function ft() {
  const r = /* @__PURE__ */ new Map(), e = re(), t = re(), i = re();
  return {
    emit: n,
    pauseEmit: o,
    resumeEmit: s,
    clearHooks: l,
    addHook: a,
    setHook: c,
    removeHook: d,
    clearBeginHooks: f,
    addBeginHook: p,
    setBeginHook: m,
    clearEndHooks: g,
    addEndHook: k,
    setEndHook: b,
    destroy: x
  };
  function o(h) {
    const u = r.get(h);
    r.set(h, u ? u + 1 : 1);
  }
  function s(h) {
    const u = r.get(h);
    u && u > 1 ? r.set(h, u - 1) : u === 1 && r.delete(h);
  }
  function n(h, u) {
    if (r.has(h))
      return Promise.resolve(!0);
    const C = (N) => N(...u);
    return pt([
      {
        label: `begin_${h}`,
        task: e.forEachAsync(h, C)
      },
      {
        label: `${h}`,
        task: i.forEachAsync(h, C)
      },
      {
        label: `end_${h}`,
        task: t.forEachAsync(h, C)
      }
    ]);
  }
  function l(h) {
    i.clear(h);
  }
  function a(h, u) {
    i.add(h, u);
  }
  function d(h, u) {
    i.remove(h, u);
  }
  function c(h, u) {
    l(h), a(h, u);
  }
  function f(h) {
    e.clear(h);
  }
  function p(h, u) {
    e.add(h, u);
  }
  function m(h, u) {
    f(h), p(h, u);
  }
  function g(h) {
    t.clear(h);
  }
  function k(h, u) {
    t.add(h, u);
  }
  function b(h, u) {
    g(h), k(h, u);
  }
  function x() {
    e.clearAll(), t.clearAll(), i.clearAll();
  }
}
class mt extends q {
  constructor(e) {
    super({
      contextElement: document.createElement("div")
    }), this._hookArgs = e, this._hook = ft(), this._pluginMap = /* @__PURE__ */ new Map(), this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
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
    var e;
    (e = this._hookArgs.plugins) == null || e.forEach((t) => this.addPlugin(t));
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
  get element() {
    return this.contextElement;
  }
}
class gt {
  constructor() {
    this._unmountTasks = [];
  }
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
class pe extends gt {
}
class wt extends pe {
  mount(e, t) {
    const i = {
      async ArrowLeft() {
        var d;
        if (e.getSelectedNodesCount() > 1)
          return;
        const a = e.getSelectedNodeOrNull();
        a && (a.expanded === !0 ? await a.collapse() : await n((d = a.getNodeLink().getParentNode()) == null ? void 0 : d.data.node));
      },
      async ArrowRight() {
        var d;
        if (e.getSelectedNodesCount() > 1)
          return;
        const a = e.getSelectedNodeOrNull();
        !a || !a.expandable || (a.expanded === !1 ? await a.expand() : await n((d = a.getNodeLink().getFirstChildNode()) == null ? void 0 : d.data.node));
      },
      async ArrowUp() {
        var f;
        const a = e.getSelectedNodeOrNull();
        if (!a)
          return;
        const d = e.getSelectedNodes().reduce((p, m) => e.getNodeRowId(m.key) < e.getNodeRowId(p.key) ? m : p, a), c = d.getNodeLink().getPrevNode();
        c ? await n(s(c)) : await n((f = d.getNodeLink().getParentNode()) == null ? void 0 : f.data.node);
      },
      async ArrowDown() {
        var c;
        const a = e.getSelectedNodeOrNull();
        if (!a)
          return;
        const d = e.getSelectedNodes().reduce((f, p) => e.getNodeRowId(p.key) > e.getNodeRowId(f.key) ? p : f, a);
        if (d.expanded === !1)
          return await n(o(d.getNodeLink()));
        await n((c = d.getNodeLink().getFirstChildNode()) == null ? void 0 : c.data.node);
      },
      // Space Bar
      " ": async function() {
        if (e.getSelectedNodesCount() === 0)
          return;
        const a = e.getSelectedNodes(), d = a.some((c) => c.checked);
        for (const c of a)
          c.hasCheckbox && await c.changeCheck(!d);
      }
    };
    this.addPluginHook(e, "keydown", l);
    function o(a) {
      var f;
      const d = a.getNextNode();
      if (d)
        return d.data.node;
      let c = a.getParentNode();
      for (; c && !c.getNextNode(); )
        c = c.getParentNode();
      return (f = c == null ? void 0 : c.getNextNode()) == null ? void 0 : f.data.node;
    }
    function s(a) {
      let d = a;
      for (; d && d.data.node.expanded; ) {
        const c = d.getLastChildNode();
        if (!c)
          break;
        d = c;
      }
      return d.data.node;
    }
    async function n(a) {
      a && (await a.select(), e.scrollToNode(a.key));
    }
    async function l(a) {
      const d = i[a.key];
      d !== void 0 && (a.preventDefault(), await d());
    }
  }
}
const Ct = "minmax(0, 1fr)";
function _t(r) {
  const e = [];
  fe(r) && e.push(`${ie("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const i = r.headerRow.width[t] ?? "";
    i.endsWith("px") ? e.push(`minmax(${i}, ${i})`) : e.push(Ct);
  }
  return e.join(" ");
}
function Nt(r) {
  return Y("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function vt(r) {
  return Y(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function _e(r) {
  return Y("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function Ne(r) {
  return Y("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function fe(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function kt(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function bt(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function Et(r, e) {
  let t = 1;
  for (let i = 1; i < e && !r.getColumnText(i); i++)
    ++t;
  return t;
}
function Rt({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: i }) {
  return o([], i, t, e);
  function o(s, n, l, a) {
    const d = { ...n };
    delete d.children;
    const c = (a == null ? void 0 : a.key) ?? null, f = r(d);
    if (s.push({
      node: f,
      visible: l,
      parentKeyOrNull: c
    }), n.children && n.children.length > 0)
      for (const p of n.children)
        o(s, p, l && d.expanded === !0, f);
    return s;
  }
}
function xt(r) {
  const {
    nodeLinker: e,
    nodeList: t,
    virtualRowList: i,
    positionArgs: o
  } = r, {
    insertKey: s,
    parentKey: n,
    position: l
  } = o;
  a(), d();
  function a() {
    const c = t[0].node, f = i[0], p = { node: c, virtualRow: f };
    if (s !== void 0) {
      const m = e.getNodeLink(s);
      if (l === "firstChild")
        return e.insertAsFirstChild(m.key, c.key, p);
      const g = m.getParentNode();
      return g === null ? l === "after" ? e.insertAfterRootNode(c.key, p, m) : e.insertBeforeRootNode(c.key, p, m) : l === "after" ? e.insertAfterChildNode(g.key, c.key, p, m) : e.insertBeforeChildNode(g.key, c.key, p, m);
    }
    n === void 0 ? e.addRootNode(c.key, p) : e.addChildNode(n, c.key, p);
  }
  function d() {
    for (let c = 1; c < t.length; c++) {
      const { node: f, parentKeyOrNull: p } = t[c], m = i[c], g = { node: f, virtualRow: m };
      p ? e.addChildNode(p, f.key, g) : s ? e.insertBeforeRootNode(f.key, g, e.getNodeLink(s)) : e.addRootNode(f.key, g);
    }
  }
}
const It = {
  nodeDraggable: !0
};
class Tt extends pe {
  constructor(e = It) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", o), this.addPluginHook(e, "treeClick", g), this.addPluginHook(e, "treeDoubleClick", x), this.addPluginHook(e, "nodeExpandIconClick", b);
    let i = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", l), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", n), this.addPluginHook(e, "nodeMouseDown", a));
    async function o(h) {
      h.preventDefault();
      const u = p(h);
      u && (e.multiSelect ? h.ctrlKey ? await u.addSelect() : h.shiftKey ? await k(u) : u.selected === !1 && await u.select() : await u.select(), await t.emit("nodeContextMenu", [h, u]));
    }
    function s(h) {
      const u = p(h);
      u && t.emit("nodeMouseDown", [h, u]);
    }
    function n(h) {
      const u = p(h);
      u && t.emit("nodeMouseUp", [h, u]);
    }
    function l(h, u) {
      var C;
      u.object && ((C = h.dataTransfer) == null || C.setData("application/json", JSON.stringify(u.object)));
    }
    async function a(h, u) {
      if (!await t.emit("nodeCheckDragging", [h, u]))
        return;
      const N = vt(h.target);
      N && (N.setAttribute("draggable", "true"), N.addEventListener("dragstart", c), i = u);
    }
    function d(h) {
      h.removeEventListener("dragstart", c), h.removeEventListener("dragend", f), h.removeAttribute("draggable"), i = null;
    }
    function c(h) {
      h.target instanceof HTMLElement && i && (h.target.addEventListener("dragend", f), t.emit("nodeDragStart", [h, i]));
    }
    function f(h) {
      h.target instanceof HTMLElement && i && (d(h.target), t.emit("nodeDragEnd", [h, i]));
    }
    function p(h) {
      if (!(h.target instanceof HTMLElement))
        return null;
      const u = Y("[data-node-key]", ".ir-vd-container__viewport-row ", h.target), C = u == null ? void 0 : u.dataset.nodeKey;
      return C ? e.getNodeOrNull(C) : null;
    }
    async function m(h) {
      if (h.target instanceof HTMLInputElement && Ne(h.target)) {
        const u = h.target.checked;
        await t.emit("headerChangeChecking", [u]) ? await e.setHeaderRowChecked(u) : h.target.checked = !u;
        return;
      }
    }
    async function g(h) {
      if (Nt(h.target))
        return m(h);
      const u = p(h);
      if (u) {
        if (_e(h.target)) {
          t.emit("nodeExpandIconClick", [h, u]);
          return;
        }
        if (Ne(h.target)) {
          await u.checkToggle();
          return;
        }
        e.multiSelect ? h.ctrlKey ? await u.multiSelectToggle() : h.shiftKey ? await k(u) : await e.selectNode(u.key) : await u.selectToggle(), t.emit("nodeClick", [h, u]);
      }
    }
    async function k(h) {
      const u = e.getSelectedNodes();
      if (u.length === 0) {
        await h.select();
        return;
      }
      await e.selectRange(u[0], h);
    }
    async function b(h, u) {
      await u.toggleExpand();
    }
    function x(h) {
      const u = p(h);
      u && (_e(h.target) || (h.preventDefault(), t.emit("nodeDoubleClick", [h, u])));
    }
  }
}
function De(r) {
  const e = M("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? $e : se
  ), e;
}
function Lt(r) {
  const e = M("div", y.nodeMain, y.base, T.truncate), t = M("button", y.nodeExpandButton, y.nodeIcon), i = M("div", y.base, T.truncate, T.textAlign.center, y.headerCheckboxColumnDiv), o = M("span", y.nodeCaption, T.truncate), s = K("ir-icon--triangle-small-right"), n = K(""), l = De(r);
  return t.dataset.irRole = "node-expand-button", n.classList.add(y.nodeIcon), s.style.setProperty("--ir-icon-foreground-color", ne.expandIconColor), t.append(s), e.appendChild(t), r.showIcon && e.appendChild(n), e.appendChild(o), i.appendChild(l), {
    mainContentDiv: e,
    expandButton: t,
    icon: n,
    text: o,
    checkbox: l,
    checkboxDiv: i
  };
}
function yt(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(y.base, T.truncate, y.column), e;
}
function Ht(r, e) {
  return {
    columns: [],
    ...Lt(e)
  };
}
function Dt(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(y.base, T.truncate), r > 0 && t.classList.add(y.column), t;
}
function St(r) {
  const e = De(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(T.verticalAlign.bottom, y.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: M(
      "div",
      y.base,
      T.truncate,
      T.textAlign.center,
      y.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function Mt(r, e, t) {
  const i = Ht(e, t), o = r.getRowElement();
  r.setTemplateHelper(i), o.classList.add(
    oe.base,
    T.userSelectNone,
    oe.node,
    T.focusOutlineNone
  ), o.role = "treeitem", o.dataset.nodeKey = e.key, Se(r, e, t), fe(t) ? o.appendChild(i.checkboxDiv) : bt(t, e) && i.expandButton.insertAdjacentElement("afterend", i.checkbox), o.appendChild(i.mainContentDiv), i.columns.forEach((s) => o.appendChild(s));
}
function Pt(r, e, t) {
  const i = St(e), o = r.getRowElement();
  r.setTemplateHelper(i), o.classList.add(oe.base, oe.header), o.dataset.nodeHeader = "true", Me(r, e, t), i.columns.forEach((s) => o.appendChild(s));
}
function Se(r, e, t) {
  if (!r.isCachedElement)
    return;
  const i = r.getRowElement(), o = e.icon ?? t.defaultIcon, s = e.iconColor ?? t.defaultIconColor, { text: n, columns: l, icon: a, expandButton: d, checkbox: c, mainContentDiv: f } = r.template;
  e.level > 0 ? He(i, {
    [ne.nodeLevel]: String(e.level)
  }) : i.style.removeProperty(ne.nodeLevel), X(i, "selected", e.selected), X(i, "disabled", e.disabled), X(i, "expanded", e.expanded), X(i, "expandable", e.expandable), e.expandable === !1 ? d.classList.add(T.invisible) : d.classList.remove(T.invisible), e.expanded ? d.classList.add(T.rotate.deg90) : d.classList.remove(T.rotate.deg90), c.checked = e.checked, e.hasCheckbox === !1 && c.remove(), f.style.gridColumnEnd = `span ${Et(e, t.headerRow.columnCount)}`, o ? (a.classList.remove(T.invisible), a.classList.add(y.nodeIcon, "ir-icon", o), s && a.style.setProperty("--ir-icon-foreground-color", s)) : a.classList.add(T.invisible), n.textContent = e.caption, l.forEach((g) => g.remove());
  const p = t.headerRow.columnCount;
  let m = !1;
  for (let g = 1; g < p; g++) {
    const k = e.getColumnText(g), b = yt(k);
    (k || m) && (m = !0, l.push(b), i.appendChild(b));
  }
}
function Me(r, e, t) {
  const {
    columns: i,
    checkbox: o,
    checkboxDiv: s
  } = r.template;
  i.forEach((a) => a.remove()), i.length = 0;
  const n = fe(e);
  n && (e.headerRow.hasCheckbox && s.appendChild(o), i.push(s), r.getRowElement().appendChild(s)), o.checked = t.headerRow.checked;
  const l = e.headerRow.columnCount;
  for (let a = 0; a < l; a++) {
    const d = Dt(a, e);
    i.push(d), r.getRowElement().appendChild(d);
  }
  !n && kt(e) && i[0].prepend(o);
}
const Ot = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, At = {
  layout: "inner",
  ui: "checkbox",
  cascade: !0
};
function Vt() {
  return [
    new Tt({
      nodeDraggable: !0
    }),
    new wt()
  ];
}
class Ei extends mt {
  constructor(e) {
    super({
      plugins: e.plugins ?? Vt()
    }), this._nodeLinker = new ht(), this._virtualDOMContainer = document.createElement("div"), this._selectedNode = [], this._args = {
      defaultIcon: e.defaultIcon,
      autoSizeColumnMode: e.autoSizeColumnMode ?? !1,
      defaultIconColor: e.defaultIconColor,
      showIcon: e.showIcon ?? !1,
      showCheckbox: e.showCheckbox ?? !1,
      multiSelect: e.multiSelect ?? !1,
      className: e.className ?? "",
      displayHeader: e.displayHeader ?? !1,
      headerRow: Object.assign({}, Ot, e.headerRow),
      checkboxOptions: Object.assign({}, At, e.checkboxOptions),
      plugins: this.pluginList
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(je), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
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
    this.setBeginHook("createHeaderRow", Pt), this.setBeginHook("createNodeRow", Mt), this.setBeginHook("headerRender", Me), this.setBeginHook("nodeRender", Se), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
  }
  onCreatedRowElement(e, t) {
    e.isFreezed ? this.emitHook("createHeaderRow", [e, this._args, this._context]) : this.emitHook("createNodeRow", [e, e.object, this._args]);
  }
  onUpdatedRowObject(e, t, i) {
    e.isFreezed ? this.emitHook("headerRender", [e, this._args, this._context]) : this.emitHook("nodeRender", [e, i, this._args]);
  }
  initVirtualDOM() {
    this._virtualDOMContainer.classList.add(Ge), this._virtualDOMContainer.style.height = "100%";
    const e = new st({
      contextElement: this._virtualDOMContainer,
      // 헤더용 row 추가
      rowCount: 1,
      headerRowCount: 1,
      defaultRowHeight: ie("tree-view.nodeRowHeight"),
      onCreatedRowElement: this.onCreatedRowElement.bind(this),
      onUpdatedRowObject: this.onUpdatedRowObject.bind(this),
      rowContainer: {
        role: "tree",
        tabIndex: 0
      }
    });
    return e.setRowHeight(0, ie("tree-view.nodeHeaderRowHeight")), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
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
    ), n = We(t, i);
    let l = n.calculateWidth(this.getColumnText(e));
    await this._nodeLinker.travelAllNodes(({ data: { node: a } }, d) => {
      l = Math.max(
        l,
        n.calculateWidth(a.getColumnText(e)) + (e === 0 ? d * s : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), l += e === 0 ? this.getDefaultMainColumnWidth() : o * 2, this.setColumnWidth(e, `${l}px`);
  }
  getNodeOrNull(e) {
    var t;
    return ((t = this._nodeLinker.getNodeLinkOrNull(e)) == null ? void 0 : t.data.node) ?? null;
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
    He(this.contextElement, {
      [ne.templateColumns]: _t(this._args)
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
    const n = i.rowId, l = n + this._nodeLinker.getChildNodeCount(e), a = [o];
    this._nodeLinker.travelChildNodes(e, ({ data: { node: d } }) => void (d.selected && a.push(d))), await this.exceptInSelected(a), this._virtualDOM.removeRows(n, l), this._nodeLinker.removeNode(e), s && await this.hook.emit("nodeUpdated", [s.data.node]);
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
    if (t.hasChild() === !1)
      return;
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
    if (!t)
      throw new Error(`parent node not found: ${e}`);
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
    if (this.hasNode(e.key))
      throw new Error(`node already exists: ${e.key}`);
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
    }, l = this.createNode.bind(this), a = t.flatMap((c) => Rt({
      visible: n,
      nodeData: c,
      createNodeFunc: l,
      parentNodeOrNull: s
    })), d = this._virtualDOM.insertRows(
      a.length,
      this.getAddingRowId(i),
      void 0,
      a.map(({ node: c }) => c),
      (c) => a[c].visible
    );
    return xt({
      positionArgs: i,
      nodeList: a,
      virtualRowList: d,
      nodeLinker: this._nodeLinker
    }), s == null || s.updateNodeState(), a;
  }
  addNode(e) {
    const {
      // position args
      parentKey: t,
      insertKey: i,
      position: o,
      ...s
    } = e, [n] = this.addNodeList({ parentKey: t, insertKey: i, position: o }, [s]);
    if (!n)
      throw new Error("first node is undefined");
    return n.node;
  }
  async selectRange(e, t) {
    const i = this.getMapValue(e.key), o = this.getMapValue(t.key), s = i.virtualRow.rowId, n = o.virtualRow.rowId, l = s < n ? [s, n] : [n, s];
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      await e.addSelect(), await this.releaseSelectedNodes();
      for (let a = l[0]; a <= l[1]; ++a)
        await this._virtualDOM.getRowById(a).object.addSelect();
    }), await this.emitSelectionChange();
  }
  scrollToNode(e) {
    this._virtualDOM.scrollToRow(this.getNodeRowId(e));
  }
  focus() {
    this.contextElement.focus();
  }
}
const le = "ir-style/tree-view-drag-drop-move", ve = 8;
async function Ft(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function Bt(r, e, t) {
  return t - r < ve ? "before" : e - t < ve ? "after" : "firstChild";
}
function Ut(r) {
  var t;
  const e = (t = r.dataTransfer) == null ? void 0 : t.getData(le);
  return e ? JSON.parse(e) : null;
}
const ke = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, zt = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class Ri extends pe {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t) {
    const {
      canNodeMoveDrop: i,
      canNodeMoveStart: o,
      canNodeMoveDragOver: s,
      onDropNodeData: n,
      onDragEnd: l
    } = this._args;
    this.addPluginHook(e, "nodeDragStart", g), this.addPluginHook(e, "nodeDragOver", k), this.addPluginHook(e, "nodeDragEnd", h), this.addPluginHook(e, "nodeDrop", u), this.addPluginHook(e, "treeDragLeave", f);
    let a = { ...ke }, d = { ...zt }, c = !1;
    function f() {
      x();
    }
    function p(C, N) {
      if (!C.dataTransfer)
        throw new Error("dataTransfer is null");
      c = !1, d = N, a = { ...ke }, C.dataTransfer.setData(le, JSON.stringify(N));
    }
    function m(C, N, _) {
      var I;
      if (!((I = C.dataTransfer) != null && I.types.includes(le)))
        return !1;
      const E = d.srcTreeViewId === e.uuid;
      return E && (N.key === d.srcNodeData.key || N.getNodeLink().isProgenyNode(d.srcNodeData.key)) ? !1 : (s == null ? void 0 : s(E, N, _)) ?? !0;
    }
    function g(C, N) {
      ((o == null ? void 0 : o(N)) ?? !0) && p(C, { srcNodeData: N.serialize(), srcTreeViewId: e.uuid });
    }
    function k(C, N, _) {
      const { top: E, bottom: I } = e.getNodeTopBottom(N.key), w = Bt(E, I, e.scrollTop + C.offsetY);
      C.dataTransfer && m(C, N, w) ? (C.preventDefault(), C.dataTransfer.dropEffect = "move", b(N, _, w)) : x();
    }
    function b(C, N, _) {
      a.row === N && a.cursorType === _ || (x(), a = { nodeKey: C.key, row: N, cursorType: _ }, N.getRowElement().dataset.drag = _);
    }
    function x() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function h(C, N) {
      var _;
      try {
        ((_ = C.dataTransfer) == null ? void 0 : _.dropEffect) === "move" && (l == null || l(c, { ...d }));
      } finally {
        x();
      }
    }
    async function u(C, N) {
      try {
        const _ = Ut(C), E = { ...a };
        if (!_ || !await Ft(() => i == null ? void 0 : i(_, E)))
          return;
        c = !0, n == null || n(_.srcTreeViewId === e.uuid, _, E);
      } finally {
        x();
      }
    }
  }
}
const be = (r, e) => r instanceof Date ? S(r).startOf("D") : typeof r == "string" ? S(r, e) : S(null);
class xi extends q {
  constructor({
    div: e,
    defaultDate: t,
    format: i = G.datePicker.dateFormat,
    checkbox: o = !1,
    disabled: s = !1,
    allowedEmptyString: n = !0,
    onSelect: l,
    onChange: a,
    onCheckboxClick: d,
    minDate: c = ge().getStoreValue("datePicker.minDate"),
    maxDate: f = ge().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), this.selectedDate = null, this.calendarDate = /* @__PURE__ */ new Date(), t) {
      const p = be(t, i);
      p.isValid() ? (this.calendarDate = p.toDate(), this.selectedDate = p.toDate()) : console.error(`invalid defaultDate format. it must follow ${i}`);
    }
    if (!n && this.selectedDate == null) {
      const p = be(/* @__PURE__ */ new Date(), i);
      this.calendarDate = p.toDate(), this.selectedDate = p.toDate();
    }
    if (this.format = i, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(K("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(Re), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", this.format), this.input.classList.add(xe, "tnum-adj"), this.button.className = Ie, this.button.type = "button", this._minDate = c, this._maxDate = f, l && (this.onSelect = l), a && (this.onChange = a), d && (this.onCheckboxClick = d), o) {
      const p = document.createElement("div"), m = document.createElement("label"), g = document.createElement("input");
      g.setAttribute("type", "checkbox"), p.classList.add(Te, Le), m.className = he, g.className = se, m.appendChild(g), p.appendChild(m), this.div.appendChild(p), g.checked = !s, g.onchange = () => {
        this.disabled = !g.checked, this.onCheckboxClick(g.checked);
      }, this.addCoreElement(p);
    }
    this.disabled = s, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = S(this.selectedDate).format(i)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        n ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      const p = S(this.input.value, this.format, !0);
      !p.isValid() || p.toDate() < this.minDate || p.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(p.toDate());
    }), this.handler = et({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (p) => {
        this.setDate(p), this.onSelect(p), this.hide();
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
const z = "confirm", j = {
  confirm: {
    "&": z
  },
  confirmIcon: {
    "&": `${z}__icon`
  },
  confirmContent: {
    "&": `${z}__content`
  },
  confirmActions: {
    "&": `${z}__actions`
  },
  confirmButtonClose: {
    "&": `${z}__button-close`
  }
}, H = "dialog", W = {
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
}, $t = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function jt() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = document.createElement("div"), o = document.createElement("div"), s = document.createElement("i"), n = document.createElement("div"), l = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), d = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", W.dialog["&"], ye.zIndex.message), e.className = W.dialogWrapper["&"], t.className = W.dialogContent["&"], i.className = j.confirm["&"], o.className = j.confirmContent["&"], n.className = j.confirmActions["&"], Object.values(l).forEach((c) => c.classList.add(Ke)), l.yes.classList.add(we), l.ok.classList.add(we), l.retry.classList.add(qe), l.ignore.classList.add(Ye), a.classList.add("ir-icon", "ir-icon--close"), d.className = j.confirmButtonClose["&"], n.appendChild(l.no), n.appendChild(l.stop), n.appendChild(l.ignore), n.appendChild(l.retry), n.appendChild(l.yes), n.appendChild(l.ok), d.appendChild(a), i.appendChild(d), i.appendChild(s), i.appendChild(o), i.appendChild(n), t.appendChild(i), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: s,
    confirmContent: o,
    confirmActions: n,
    buttonMap: l,
    closeButton: d
  };
}
const Gt = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = jt()), r;
  };
})();
function $() {
  return Gt();
}
const Wt = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, Kt = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), qt = {
  onTagAttr(r, e, t, i) {
    if (!i && Kt.has(e))
      return `${e}="${Je.escapeAttrValue(t)}"`;
  }
}, ee = {
  count: 0
}, Ii = () => ee.count > 0;
class Ti {
  constructor(e) {
    this.args = e, this.enterHandler = null, this.activeElement = null;
    const {
      iconType: t = "info",
      buttonType: i = ["ok"],
      messageHTML: o,
      msgMap: s = {},
      onClick: n,
      escButton: l,
      enterButton: a,
      contentElement: d
    } = e;
    this.visible = !1, this.iconType = t, this.buttonType = i, o && (this.messageHTML = Xe(o, qt)), d && (this.contentElement = d), this.msgMap = {
      ...s
    }, this.enterButton = a, this.escButton = l, this.escController = Ee(this), n && (this.onClick = n);
  }
  updateContent() {
    const e = $();
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
    const e = $();
    ee.count++, this.updateContent(), this.visible = !0, this.activeElement = document.activeElement, e.confirmIcon.className = `${j.confirmIcon["&"]} ir-icon ${Wt[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const t of $t)
      e.buttonMap[t].remove(), e.buttonMap[t].innerText = this.msgMap[t] ?? G.confirm[t], e.buttonMap[t].onclick = () => {
        this.hide(), this._doClick(t);
      };
    for (const t of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[t]);
    e.dialog.isConnected || ce("message").appendChild(e.dialog), e.dialog.classList.add(W.dialog["is-visible"]), e.dialog.focus(), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  _registerEnterESCHandler() {
    this.enterHandler = () => {
      const e = $();
      this.enterButton ? e.buttonMap[this.enterButton].click() : this.buttonType.length === 1 ? e.buttonMap[this.buttonType[0]].click() : this.hide();
    }, Ve("Enter", this.enterHandler), this.escController.create();
  }
  show() {
    if (ee.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = $();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  hide() {
    if (this.visible === !1)
      return;
    this.escController.destroy(), ee.count = 0, setTimeout(() => {
      this.activeElement instanceof HTMLElement && (this.activeElement.focus(), this.activeElement = null);
    }, 0);
    const e = $();
    this.visible = !1, e.dialog.classList.remove(W.dialog["is-visible"]), this.enterHandler && Fe("Enter", this.enterHandler), this.enterHandler = null;
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
function Yt(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: i, minute: o, second: s } = Pe(t);
    return i < 0 || i >= 24 || o < 0 || o >= 60 ? !1 : !(e && s < 0 || s >= 60);
  } else
    return !1;
}
function Pe(r) {
  const [e, t, i] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(i)
  };
}
function Xt(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const Z = 12, Jt = 60, Zt = 60, Qt = ["period", "hour", "minute", "second"];
function ei() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), i = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [o, s, n, l] = i;
  r.classList.add(P.timePicker["&"], ye.zIndex.popover), i.forEach((w, v) => {
    w.setAttribute("data-type", Qt[v]), w.className = P.timePickerPanel["&"], e.appendChild(w);
  }), e.className = P.timePickerPanelWrapper["&"], t.className = P.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function d(w) {
    const v = document.createElement("div");
    return v.className = P.timePickerPanelItem["&"], v.dataset.text = w, v.innerText = w, v;
  }
  return J(2, () => i[0].appendChild(d(""))), J(Z, (w) => i[1].appendChild(d(`${w}`))), J(Jt, (w) => i[2].appendChild(d(`${w}`))), J(Zt, (w) => i[3].appendChild(d(`${w}`))), {
    elements: {
      nowButton: a,
      secondPanel: l,
      timePicker: r
    },
    updateI18n: c,
    removeSelected: f,
    getTimeElements: p,
    scrollIntoView: m,
    selectTime: g,
    isAM: k,
    setPeriod: b,
    setHourId: x,
    setMinuteId: h,
    setSecondId: u,
    periodGenerator: C,
    getCurrentTime: N,
    hourGenerator: _,
    minuteGenerator: E,
    secondGenerator: I
  };
  function c() {
    a.innerHTML = "", a.appendChild(K("ir-icon--check")), a.append(G.timePicker.btnNow), i[0].children[0].innerHTML = "", i[0].children[1].innerHTML = "", i[0].children[0].append(G.timePicker.am), i[0].children[1].append(G.timePicker.pm);
  }
  function f() {
    r.querySelectorAll(".is-selected").forEach((w) => w.classList.remove("is-selected"));
  }
  function p(w, v, F) {
    const O = w < Z, B = O ? w : w - Z, U = O ? 0 : 1;
    return {
      periodElement: o.children[U],
      hourElement: s.children[B],
      minuteElement: n.children[v],
      secondElement: l.children[F]
    };
  }
  function m(w, v, F) {
    const { hourElement: O, minuteElement: B, secondElement: U } = p(w, v, F);
    s.scrollTop = O.offsetTop - s.clientHeight / 2, n.scrollTop = B.offsetTop - n.clientHeight / 2, l.scrollTop = U.offsetTop - l.clientHeight / 2;
  }
  function g(w, v, F) {
    const { periodElement: O, hourElement: B, minuteElement: U, secondElement: Ae } = p(w, v, F);
    f(), O.classList.add("is-selected"), B.classList.add("is-selected"), U.classList.add("is-selected"), Ae.classList.add("is-selected");
  }
  function k() {
    return o.children[0].classList.contains("is-selected");
  }
  function b(w) {
    o.children[(w + 1) % 2].classList.remove("is-selected"), o.children[w].classList.add("is-selected");
  }
  function x(w) {
    var v;
    (v = s.querySelector(".is-selected")) == null || v.classList.remove("is-selected"), s.children[w].classList.add("is-selected");
  }
  function h(w) {
    var v;
    (v = n.querySelector(".is-selected")) == null || v.classList.remove("is-selected"), n.children[w].classList.add("is-selected");
  }
  function u(w) {
    var v;
    (v = l.querySelector(".is-selected")) == null || v.classList.remove("is-selected"), l.children[w].classList.add("is-selected");
  }
  function* C() {
    yield [0, o.children[0]], yield [1, o.children[1]];
  }
  function N() {
    return Xt(
      ae(s) + (k() ? 0 : Z),
      ae(n),
      ae(l)
    );
  }
  function* _() {
    let w = 0;
    for (const v of s.children)
      yield [w++, v];
  }
  function* E() {
    let w = 0;
    for (const v of n.children)
      yield [w++, v];
  }
  function* I() {
    let w = 0;
    for (const v of l.children)
      yield [w++, v];
  }
}
function ae(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const ti = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = ei()), r;
  };
})();
function ii({ uuid: r, refElement: e, onChange: t, visibleSeconds: i }) {
  let o = !1, s = () => {
  };
  const {
    elements: n,
    getCurrentTime: l,
    selectTime: a,
    scrollIntoView: d,
    updateI18n: c,
    hourGenerator: f,
    minuteGenerator: p,
    secondGenerator: m,
    periodGenerator: g,
    setPeriod: k,
    setHourId: b,
    setMinuteId: x,
    setSecondId: h
  } = ti(), u = {
    setTime(_) {
      const E = i ? _ : _ + ":00", { hour: I, minute: w, second: v } = Pe(E);
      a(I, w, v), d(I, w, v);
    },
    show: () => {
      if (!o) {
        c(), o = !0, C.create(), N.create(), n.nowButton.onclick = (_) => {
          const E = S().format("HH:mm:ss");
          u.setTime(E), t(_, E);
        };
        for (const [_, E] of g())
          E.onclick = (I) => {
            k(_), t(I, l());
          };
        for (const [_, E] of f())
          E.onclick = (I) => {
            b(_), t(I, l());
          };
        for (const [_, E] of p())
          E.onclick = (I) => {
            x(_), t(I, l());
          };
        if (i) {
          for (const [_, E] of m())
            E.onclick = (I) => {
              h(_), t(I, l());
            };
          n.secondPanel.style.removeProperty("display");
        } else
          n.secondPanel.style.setProperty("display", "none");
        n.timePicker.isConnected || ce("popover").appendChild(n.timePicker), n.timePicker.style.removeProperty("display"), n.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          n.timePicker.classList.add(P.timePicker["is-visible"]), s(), s = Be(e, n.timePicker);
        }, 0);
      }
    },
    hide: () => {
      o && (C.destroy(), N.destroy(), n.timePicker.classList.remove(P.timePicker["is-visible"]), n.timePicker.addEventListener("transitionend", (_) => {
        _.currentTarget === _.target && (o = !1, r === n.timePicker.getAttribute("data-uuid") && (s(), n.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => u.hide(),
    get visible() {
      return o;
    }
  }, C = Ee(u), N = Ze({
    eventElements: [n.timePicker],
    clickOutsideFunc: () => u.hide()
  });
  return u;
}
const de = { checkbox: Te, checkboxWrapper: he, checkboxInput: se }, Q = { input: Re, inputNative: xe, inputSuffix: Ie, inputPrefix: Le };
class Li extends q {
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, i = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = Q.input, this.input = document.createElement("input"), this.input.placeholder = i, this.input.className = Q.inputNative, this.button = document.createElement("button"), this.button.appendChild(K("ir-icon--watch")), this.button.className = Q.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = ii({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (o, s) => {
        const n = S(s, "HH:mm:ss", !0).format(i);
        this.value = n, this.onChange(n);
      }
    }), e.checkbox) {
      const o = document.createElement("div"), s = document.createElement("label"), n = document.createElement("input");
      n.setAttribute("type", "checkbox"), o.classList.add(de.checkbox, Q.inputPrefix), s.className = de.checkboxWrapper, n.className = de.checkboxInput, s.appendChild(n), o.appendChild(s), this.contextElement.appendChild(o), n.checked = !e.disabled, n.onchange = () => this.disabled = !n.checked, this.addCoreElement(o);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = S(e.value, i).format(i)), this.input.onblur = () => {
      Yt(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
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
class oi {
  constructor() {
    this._dialogElement = M("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = L(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = L(this._wrapperElement, "div", "dialog__header"), this._bodyElement = L(this._wrapperElement, "div", "dialog__content"), this._footerElement = L(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(e) {
    return this._wrapperElement.style.width = `${e}px`, this;
  }
  addStrongHeaderTitle(e) {
    const t = L(this._headerElement, "strong", "dialog__header-title");
    return t.innerText = e, this;
  }
  createHeaderCloseButton(e) {
    const t = L(this._headerElement, "div", "dialog__header-actions"), i = L(t, "button", "dialog__button-close");
    return L(i, "i", "ir-icon", "ir-icon--close"), i.onclick = e, this;
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
    const o = L(this._footerElement, "button", "button", ...i);
    return o.innerText = e, o.onclick = t, this;
  }
  get element() {
    return this._dialogElement;
  }
}
const ni = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
}, si = {
  "#login-info-dialog.title": "ログイン情報",
  "#login-info-dialog.confirm-button": "確認",
  "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
  "AUTH.ACCESSIP": "最終ログインIP",
  "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
  "AUTH.SECURITY.NOTICE": "セキュリティ情報"
}, Oe = {
  "#login-info-dialog.title": "로그인 정보",
  "#login-info-dialog.confirm-button": "확인",
  "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
  "AUTH.ACCESSIP": "최종 로그인 IP",
  "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
  "AUTH.SECURITY.NOTICE": "보안 사항"
}, ri = {
  "#login-info-dialog.title": "登录信息",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "密码变更期限",
  "AUTH.ACCESSIP": "最终登录IP",
  "AUTH.LASTESTLOGINTIME": "最终登录时间",
  "AUTH.SECURITY.NOTICE": "保安事项"
}, ai = { ko: Oe, en: ni, ja: si, zh: ri };
function di(r, e) {
  return r in e;
}
function li(r) {
  const e = ai[r] ?? Oe;
  return {
    getMsg(t, ...i) {
      return di(t, e) ? e[t] : t;
    }
  };
}
const ci = 550, te = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function hi(r) {
  return r.props.some(([e]) => te[e] !== void 0);
}
function ui(r) {
  return r.props.filter(([e]) => te[e] !== void 0).sort(([e], [t]) => te[e] - te[t]);
}
function pi(r, e) {
  var l;
  const t = document.createDocumentFragment(), i = new DOMParser(), o = e.replace(/&/g, "&amp;");
  let n = (l = i.parseFromString(`<root>${o}</root>`, "application/xml").firstChild) == null ? void 0 : l.firstChild;
  for (; n; ) {
    if (n.nodeType === 1 && n instanceof Element)
      if (n.tagName.toLowerCase() === "font") {
        const a = document.createElement("span");
        a.textContent = n.textContent, a.style.cssText = n.getAttribute("style") ?? "";
        const d = n.getAttribute("color"), c = n.getAttribute("bgcolor");
        d && (a.style.color = d.replace("cl", "")), c && (a.style.backgroundColor = c.replace("cl", "")), t.append(a);
      } else
        n.tagName.toLowerCase() === "br" ? t.append(document.createElement("br")) : console.warn(`loginInfoDialog-parser::not allowed tag ${n.tagName}`);
    else
      n.textContent && t.append(n.textContent);
    n = n.nextSibling;
  }
  r.append(t);
}
function yi(r) {
  const {
    irm010Data: e,
    lang: t = "ko",
    onClose: i
  } = r;
  if (!hi(e))
    throw new Error("no login info data! check irm010 response");
  const o = new oi(), { getMsg: s } = li(t), n = () => {
    a.hide();
  }, l = (c) => {
    c.key === "Enter" && n();
  }, a = Ue({
    element: o.element,
    type: "dialog",
    parentElement: ce("dialog"),
    onESC() {
      i == null || i(), window.removeEventListener("keyup", l);
    }
  }), d = (() => {
    const c = M("ul", "row", "gap-y--xs");
    return ui(e).forEach(([p, m]) => {
      const g = L(c, "li", "row", "col", "col--12");
      L(g, "div", "col", "col--4").innerText = s(p), p === "AUTH.SECURITY.NOTICE" ? pi(
        L(g, "div", "col", "col--8"),
        m
      ) : L(g, "div", "col", "col--8").innerText = m;
    }), c;
  })();
  return o.setDialogWidth(ci).addStrongHeaderTitle(s("#login-info-dialog.title")).createHeaderCloseButton(n).setContentElement(d).setFooterClass("justify-content--end").addFooterButton(s("#login-info-dialog.confirm-button"), n, "button--primary"), {
    popoverHandler: a,
    show() {
      o.element.focus(), a.show(), window.addEventListener("keyup", l);
    },
    hide() {
      a.hide();
    }
  };
}
export {
  Ai as ClipboardManager,
  Zi as IRCommandBlock,
  Qi as IRCommandManager,
  Ti as IRConfirm,
  xi as IRDatePicker,
  eo as IRSelect,
  Li as IRTimePicker,
  vi as IRTree,
  Ei as IRTreeView,
  Ri as IRTreeViewDragDropMovePlugin,
  wt as IRTreeViewKeyboardPlugin,
  Tt as IRTreeViewMousePlugin,
  pe as IRTreeViewPlugin,
  st as IRVirtualDOM,
  mo as Logger,
  Vi as ReactiveState,
  L as appendElement,
  Fi as blobToStr,
  Si as clearGlobalKeyListener,
  Y as closest,
  ye as clsZId,
  Ze as createClickOutsideHandler,
  Bi as createCustomIcon,
  to as createDropdownDiv,
  io as createDropdownItem,
  Ee as createESCHideController,
  M as createElement,
  Mi as createFloatingHandler,
  K as createIconElement,
  lo as createImageFromSrcUrl,
  no as createLoadingHandler,
  yi as createLoginInfoDialog,
  co as createObjectURLFromSvg,
  Ue as createPopover,
  so as createSplitContainer,
  Ui as createTooltip,
  zi as createTooltipBySelector,
  ro as createTooltipContainer,
  ho as downloadDataURL,
  J as forEachBySize,
  $i as forEachFilterBySize,
  ji as get2DGenerator,
  uo as getBase64FromSvg,
  Gi as getElement,
  Wi as getIRIconPng,
  po as getImageBlobFromImage,
  ce as getLayerElement,
  Ki as getMinMaxBetween,
  We as getTextWidthContext,
  ge as getThemeStore,
  qi as getTooltipElements,
  Pi as getVirtualEl,
  ze as hasClass,
  Ii as hasDisplayedConfirm,
  hi as hasLoginInfo,
  G as i18n,
  Be as offsetBottomAutoUpdate,
  Yi as parseInt,
  Ve as registerGlobalKeyListener,
  Xi as removeAllChildren,
  ki as renderCheckboxTreeNode,
  ue as renderDefaultTreeNode,
  X as setDataSetFlag,
  bi as setTreeDragDropReorder,
  Fe as unregisterGlobalKeyListener,
  Qe as uuid,
  Xe as xss
};
//# sourceMappingURL=index.js.map
