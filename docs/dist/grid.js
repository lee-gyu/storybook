import "./chunks/_init-BYWIiVrY.js";
import { l as O, r as re, D as ae, n as se, p as de, q as ce, v as y, w as W, x as ue } from "./chunks/grid-JHn50Ti0.js";
import { _ as nn, Q as rn, Y as sn, I as on, A as ln, Z as an, B as dn, K as cn, J as un, X as gn, V as hn, a0 as fn, $ as mn, E as Cn, T as pn, y as _n, L as wn, W as Rn, U as vn, z as xn, a4 as Sn, a3 as In, H as En, R as Tn, a1 as Dn, a5 as bn, a2 as Ln, N as yn, O as kn, C as Hn, G as Wn, P as Mn } from "./chunks/grid-JHn50Ti0.js";
import { a as z, b as ge, g as N, h as j } from "./chunks/floating-C8SHvpqf.js";
import { V as he, p as fe, q as me, t as Ce, r as pe, F as _e, W as we, G as Re, H as ve, X as xe, Y as Se, O as Ie, Z as Ee, $ as Te, a0 as De, a1 as be, a2 as Le, a3 as ye, a4 as ke, a5 as He, a6 as We, a7 as Me, a8 as Ge, a9 as Oe, aa as Ae, ab as Pe, _ as Fe, ac as B, ad as Ne, ae as Be, af as K, ag as Y, ah as ze, ai as $e, aj as Ve } from "./chunks/css-COHHTvb1.js";
import { c as X } from "./chunks/clsx-OuTLNxxd.js";
import { I as oe, c as Ue, r as U } from "./chunks/command-manager-Bk_Y5EIz.js";
import { c as je, a as Ke, b as A } from "./chunks/outside-D1z8pt7M.js";
import { g as G, e as Ye, f as Xe, a as Ze } from "./chunks/rx-state-PaqZIPpP.js";
import { i as qe, d as M } from "./chunks/index-Bmt0z1bM.js";
import { v as Je } from "./chunks/v4-CKZ6klMF.js";
import { c as Qe } from "./chunks/in-memory-clipboard-DGTN1iKi.js";
const P = { select: fe, selectInput: me, selectInputNative: pe, selectInputIcon: Ce }, Z = /* @__PURE__ */ new WeakMap(), et = 20, tt = 4, q = et + tt, nt = 18;
class rt extends O {
  _itemTextMap;
  _allowCustomText;
  _allowEdit;
  _showErrorIfCustomText;
  _lazyItems;
  _customDisplayTextFunc;
  _items;
  _allowClear;
  _itemWidth = null;
  _isExpanded = !1;
  _beforeValue;
  _beforeText;
  _isInitItems = !1;
  _mappingType;
  constructor({
    items: e,
    onChange: n,
    allowClear: t,
    customDisplayTextFunc: s,
    lazyItems: l,
    allowCustomText: r = !1,
    showErrorIfCustomText: i = !1,
    allowEdit: o = !1,
    mappingType: u = "text"
  }) {
    super(), this._allowClear = t ?? !1, this._mappingType = u, this._items = e ?? [], this._lazyItems = l ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = r, this._allowEdit = o, o && (this._allowCustomText = !0), s ? this._customDisplayTextFunc = s : this._customDisplayTextFunc = u === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = i, n && (this.onChange = n.bind(this));
  }
  _loadItems() {
    if (!this._isInitItems) {
      this._isInitItems = !0, this._lazyItems && (this._items = this._lazyItems());
      for (const e of this._items)
        this._itemTextMap.set(e[this._mappingType], e);
    }
  }
  _defaultTextCustomDisplayTextFunc(e, n, t) {
    return n ?? "";
  }
  _defaultValueCustomDisplayTextFunc(e, n, t) {
    const s = n ?? "";
    return this._itemTextMap.get(s)?.text ?? s;
  }
  _getSelectedItemOrNull(e) {
    for (const n of this._items)
      if (n[this._mappingType] === e) return n;
    return null;
  }
  render(e, n, t) {
    const {
      _allowCustomText: s,
      _allowEdit: l,
      _showErrorIfCustomText: r,
      _customDisplayTextFunc: i
    } = this, { element: o } = z({ tag: "div", className: X(he, P.select, P.selectInput) }), { element: u } = z({ tag: "span", className: P.selectInputNative }), { element: d } = z({ tag: "i", className: X(P.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), o.setAttribute("data-has-px", ""), d.setAttribute("data-ignore-auto-size", "");
    const w = t.text === "" || t.text === null || t.text === void 0;
    l && o.classList.add("is-editable");
    let m = this._getSelectedItemOrNull(t.text);
    const x = m !== null;
    m ? (u.textContent = i(m.value, m.text, !1), t.value = m.value) : s ? (u.textContent = i(t.value, t.text, !0), t.value = t.text) : (u.textContent = "", t.value = ""), // error 상태 표시 지정 시, error 속성 추가
    s && r && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !w && !x && (o.dataset.error = "true");
    let h = () => {
    }, c = [];
    const R = je({
      eventElements: [o],
      clickOutsideFunc: () => S.hide(),
      getEventElements: () => c
    }), S = {
      show: () => {
        this._isExpanded = !0, E.create(), R.create(), this._beforeValue = t.value, this._beforeText = t.text, o.classList.add("is-expanded");
        const { breakWidth: C, contentWidth: a } = this._getCellWidthInfo(t);
        h = re(
          () => ae({
            ref: (g) => c = g ? [g.divElement] : [],
            row: e,
            col: n,
            contentWidth: a,
            breakWidth: C,
            selectedItem: m,
            items: this._items,
            refElement: o,
            onItemClick: (g) => {
              const { value: _, text: p } = g, I = new se(t.gridStore.commandContext, [e, n, { text: p, value: _ }]);
              I.onUndo = () => this.onChange(e, n, this._beforeValue, this._beforeText, _, p), I.onExecute = () => this.onChange(e, n, _, p, this._beforeValue, this._beforeText), t.gridStore.commandManager.pushCommandBlock(new oe(
                "Change select menu",
                I
              )), m = g, t.text = g[this._mappingType], t.value = _, u.textContent = i(_, p, !1), o.dataset.error && delete o.dataset.error, t.gridStore.gridTextarea.focus(), this.onChange(e, n, _, p, this._beforeValue, this._beforeText), S.hide();
            }
          }),
          N("popover")
        );
      },
      hide: () => {
        this._isExpanded = !1, o.classList.remove("is-expanded"), E.destroy(), R.destroy(), h();
      }
    }, E = ge(S), f = () => {
      o.classList.contains("is-expanded") ? S.hide() : S.show();
    };
    return o.onclick = (C) => {
      l && C.target !== d || f();
    }, o.appendChild(u), o.appendChild(d), o;
  }
  onChange(e, n, t, s, l, r) {
  }
  getCellInnerWidth(e, n, t) {
    if (!t.text) return 0;
    const s = G(e, n), l = this._itemTextMap.has(t.text), r = this._customDisplayTextFunc(t.value, t.text, !l), i = s.calculateWidth(r);
    return q + i + this.getHorizontalCellPadding(t);
  }
  _getDropdownWidth(e, n, t) {
    const s = G(e, n), l = this._items.reduce((r, i) => Math.max(r, s.calculateWidth(i.text)), 0);
    return q + l + this.getHorizontalCellPadding(t);
  }
  getRendererInnerWidth(e, n, t) {
    const s = Z.get(this);
    if (s) return s;
    const l = this._getDropdownWidth(e, n, t);
    return Z.set(this, l), l;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, n, t) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, n, t)), this._itemWidth + nt;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
  get canBeClear() {
    return this._allowClear;
  }
}
const At = (v) => {
  const e = new rt(v);
  return () => e;
}, $ = { input: _e, inputNative: Re, inputSuffix: ve }, st = 28, H = /* @__PURE__ */ new WeakMap();
class ot extends O {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: n = qe.t("datePicker.dateFormat"),
    minDate: t = j().getStoreValue("datePicker.minDate"),
    maxDate: s = j().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: l = !0
  }) {
    super(), this._format = n, this._minDate = t, this._maxDate = s, this._allowedEmptyString = l, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, n, t) {
  }
  getCellInnerWidth(e, n, t) {
    return G(e, n).calculateWidth(t.text || this._format) + st + this.getHorizontalCellPadding(t);
  }
  render(e, n, t) {
    const s = document.createElement("div"), l = document.createElement("input"), r = document.createElement("button"), i = document.createElement("i"), {
      _minDate: o,
      _maxDate: u,
      _format: d,
      _allowedEmptyString: w
    } = this;
    if (l.readOnly = !0, l.maxLength = d.length, s.setAttribute("data-has-px", ""), s.classList.add($.input, we), l.classList.add($.inputNative, "tnum-adj"), r.classList.add($.inputSuffix), i.classList.add("ir-icon", "ir-icon--calendar"), l.type = "text", l.placeholder = d, t.text !== "") {
      const x = d.replace(/-/g, "");
      let h = M(t.text, d, !0);
      h.isValid() || (h = M(t.text, x, !0), t.text = h.format(d)), h.isValid() || (t.text = H.get(t)), (h.isBefore(o) || h.isAfter(u)) && (t.text = H.get(t));
    }
    !w && (t.text === "" || t.text === void 0) && (t.text = H.has(t) ? H.get(t) : M().format(d)), l.value = t.text || "", H.set(t, t.text ?? ""), r.appendChild(i), s.appendChild(l), s.appendChild(r);
    const m = Ue({
      uuid: Je(),
      refElement: s,
      minDate: o,
      maxDate: u,
      onClick: (x) => {
        const h = t.text, c = M(x).format(d), R = new se(t.gridStore.commandContext, [e, n, { text: c }]);
        R.onUndo = () => {
          this.onDateClick(e, n, h ?? "");
        }, R.onExecute = () => {
          this.onDateClick(e, n, c);
        }, t.gridStore.commandManager.pushCommandBlock(new oe("Change datePicker", R)), l.value = c, t.text = c, H.set(t, c), t.gridStore.gridTextarea.focus(), this.onDateClick(e, n, c), m.hide();
      }
    });
    return r.onclick = () => {
      if (!m.visible) {
        const x = M(t.text, d, !0);
        x.isValid() ? m.update(x.toDate(), x.toDate()) : m.update(/* @__PURE__ */ new Date(), null), m.show();
      }
    }, s;
  }
  get renderType() {
    return "datePicker";
  }
}
const Pt = (v) => {
  const e = new ot(v);
  return () => e;
}, F = {
  progress: Se,
  progressVariants: Ee
}, lt = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, it = 100, at = 100;
class dt extends O {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: n = 100, defaultIntent: t, afterDecimalLen: s = 2 }) {
    super(), this._min = e, this._max = n, this._defaultIntent = t, this._afterDecimalLen = s;
  }
  render(e, n, t) {
    const {
      _min: s,
      _max: l,
      _afterDecimalLen: r,
      _defaultIntent: i
    } = this, o = document.createElement("div"), u = document.createElement("div");
    o.setAttribute("data-has-px", ""), o.className = xe, u.className = F.progress;
    const d = t.intent ?? i;
    d && u.classList.add(`${F.progress}--${d}`);
    const m = (Ye(parseFloat(t.text || "0"), s, l) - s) / (l - s) * it;
    return Ie(u, {
      [F.progressVariants.progressPercent]: `${m}%`,
      [F.progressVariants.progressText]: `'${m.toFixed(r)}%'`
    }), o.appendChild(u), o;
  }
  getCellInnerWidth(e, n, t) {
    return at + this.getHorizontalCellPadding(t);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Ft = (v = lt) => {
  const e = new dt(v);
  return () => e;
}, ct = 20, ut = 4, gt = 24, ht = 24, ft = 29, J = {
  primary: ke,
  secondary: ye,
  tertiary: Le,
  transparent: be,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class mt extends O {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = ft : e.outlineStyle ? this._extraWidth = ht : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, n, t) {
  }
  render(e, n, t) {
    const {
      iconDividerStyle: s,
      outlineStyle: l,
      defaultColor: r,
      defaultIcon: i,
      defaultLabel: o
    } = this.args, u = document.createElement("div"), d = document.createElement("button");
    u.className = Te, d.classList.add(De, "button"), d.dataset.ignoreAutoSize = "";
    const w = t.intent ?? r;
    w && d.classList.add(J[w]), l ? (u.setAttribute("data-has-px", ""), u.classList.add(He)) : s && u.classList.add(We), !this.args.iconDividerStyle && t.horizontalAlign && d.classList.add(J[t.horizontalAlign]), d.onclick = (h) => this.onClick(h, e, n);
    const m = t.icon ?? i, x = s ? t.text ?? "" : t.label ?? o ?? "";
    if (m) {
      const h = document.createElement("i");
      h.className = `${Me} ir-icon ${Xe(m)}`, d.appendChild(h);
    }
    if (x) {
      const h = Ke("span");
      if (h.innerText = x, s) {
        const c = document.createElement("div");
        h.classList.add("text--multi-ellipsis"), c.setAttribute("data-has-px", ""), t.lineClamp === void 0 ? h.style.removeProperty("-webkit-line-clamp") : h.style.setProperty("-webkit-line-clamp", t.lineClamp), c.appendChild(h), u.insertAdjacentElement("afterbegin", c);
      } else
        h.classList.add("text--ellipsis"), d.appendChild(h);
    }
    return u.appendChild(d), u;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const n = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : n ? ct + ut : 0;
  }
  getCellInnerWidth(e, n, t) {
    const s = G(e, n);
    return this.getHorizontalCellPadding(t) + s.calculateWidth(this.getCellLabel(t)) + this.getExtraWidth(t);
  }
  getCellInnerHeight(e, n) {
    if (this.args.iconDividerStyle) {
      const t = e.querySelector(".text--multi-ellipsis");
      if (t)
        return this.getVerticalCellPadding(n) + t.offsetHeight;
    }
    return gt;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Nt = (v) => {
  const e = new mt(v ?? {});
  return () => e;
}, V = 20;
class Bt extends O {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, n, t) {
    const {
      plugin: s,
      onDropdownButtonClick: l,
      visibleSortButton: r = !0,
      visibleCheckAllButton: i = !0,
      stringEqualsFilterOption: o = "contains",
      ignoreCase: u = !1
    } = this._args, d = document.createElement("div"), w = s.pluginAPI;
    d.className = Ge, d.setAttribute("data-has-px", "");
    const m = de(t);
    return m.removeAttribute("data-has-px"), m.removeAttribute("data-has-py"), m.classList.add(Oe, Ae), d.append(m), w.getColumnMetaInfo(n).enabled !== !1 && d.appendChild(h()), d;
    function h() {
      const c = Ze("ir-icon--filter", Pe);
      c.style.setProperty("--ir-icon-badge-color", Fe.info.active), E();
      let R = null;
      return c.onclick = () => {
        if (R) return S();
        R = re(
          () => ce({
            pluginAPI: w,
            visibleSortButton: r,
            visibleCheckAllButton: i,
            onDropdownButtonClick: l,
            refElement: c,
            rowId: e,
            columnId: n,
            sortOrder: t.sortOrder,
            onClose: S,
            onSubmit: E,
            onClear: E,
            stringEqualsFilterOption: o,
            ignoreCase: u
          }),
          N("popover")
        );
      }, c;
      function S() {
        R?.(), R = null, t.gridStore.gridTextarea.focus();
      }
      function E() {
        const f = !!w.getFilterOptionByCol(n);
        c.classList.toggle("ir-icon-badge--right", f);
      }
    }
  }
  getCellInnerWidth(e, n, t) {
    const s = G(e, n);
    return this.getHorizontalCellPadding(t) + s.calculateWidth(t.text ?? "") + (t.sortOrder ? V : 0) + (t.icon ? V : 0) + V;
  }
  get renderType() {
    return "filter";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
class Ct extends y {
  _mountTask({ grid: e, gridStore: n }) {
    const { table: t } = n.elements;
    let s = null;
    t.addEventListener("mousedown", (l) => {
      if (l.button !== 0) return;
      const r = A("td", "tr", l.target);
      if (!r || r?.tagName === "TH") return;
      const i = W(r);
      s = e.cell(i.row, i.col), e.selectRow(s.row, s);
    }), e.addGlobalEventListener(document, "mouseup", () => s = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function zt() {
  return new Ct();
}
const pt = /^\d+px$/;
function _t(v) {
  for (const e of v)
    if (typeof e == "string") {
      if (pt.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function wt(v) {
  let e = 0;
  for (const n of v)
    typeof n == "string" && (e += le(n));
  return e;
}
function le(v) {
  return parseInt(v.substring(0, v.length - 2), 10);
}
class Rt extends y {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), _t(e), this._fixedColumnWidth = wt(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { hook: s } = t, l = () => {
      const { clientWidth: o } = n;
      if (o === 0) return;
      const u = e.getColCount() - 1, d = o - u - this._fixedColumnWidth, w = U(e.getColCount()).reduce((h, c) => {
        if (!e.getColumnVisible(c)) return h;
        const R = this._columnWeightList[c];
        return R === void 0 ? h + 1 : typeof R == "number" ? h + R : h;
      }, 0);
      let m = 0;
      U(u).forEach((h) => {
        if (!e.getColumnVisible(h)) return;
        const c = this._columnWeightList[h] ?? 1;
        if (typeof c == "string" && c.endsWith("px")) {
          const R = le(c);
          e.setColumnWidth(h, R);
        } else if (typeof c == "number") {
          const R = c / w;
          e.setColumnWidth(h, Math.floor(R * d));
        }
        m += e.getColumnWidth(h);
      });
      const x = i();
      x && e.setColumnWidth(x, d - m + this._fixedColumnWidth);
    }, r = () => {
      try {
        s.pauseEmit("columnChanged"), l();
      } catch (o) {
        console.error(o);
      } finally {
        s.resumeEmit("columnChanged");
      }
    };
    s.addHook("resize", r), s.addHook("columnChanged", r), this.addRollbackTask(() => {
      s.removeHook("resize", r), s.removeHook("columnChanged", r);
    }), r();
    function i() {
      for (let o = e.getColCount() - 1; o >= 0; o--)
        if (e.getColumnVisible(o))
          return o;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function $t(v) {
  return new Rt(v ?? { columnWeight: [] });
}
const Q = 10;
class vt extends y {
  _mountTask({ grid: e, gridStore: n }) {
    const { hook: t } = n, { table: s } = n.elements, l = {
      cell: null
    }, r = () => {
      l.cell = null, s.draggable = !1;
    }, i = (m) => {
      s.draggable = !0, l.cell = m;
    };
    t.addHook("contextMouseDown", d), t.addHook("contextMouseUp", o), t.addHook("contextDragStart", w), t.addHook("contextDragEnd", u), this.addRollbackTask(() => {
      t.removeHook("contextMouseDown", d), t.removeHook("contextMouseUp", o), t.removeHook("contextDragStart", w), t.removeHook("contextDragEnd", u);
    });
    function o(m) {
      r();
    }
    function u(m) {
      r();
    }
    function d(m) {
      if (m.button !== 0) return;
      const x = A("td", "tr", m.target);
      if (!x) {
        r();
        return;
      }
      const h = W(x), c = e.cell(h.row, h.col);
      m.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(h.row, h.col), c.props.draggable === !0 && c.props.object ? i(c) : r();
    }
    function w(m) {
      if (!m.dataTransfer || !l.cell || !e.onDragStartCell(l.cell, m)) {
        m.preventDefault();
        return;
      }
      m.dataTransfer.setDragImage(l.cell.element, Q, Q);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Vt() {
  return new vt();
}
const ee = 10;
class Ut extends y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const {
      enabledRow: s = !0,
      enabledColumn: l = !0
    } = this.args, { table: r } = t.elements, { mergeHandler: i, rowManager: o, gridStateContext: u } = t;
    let d = null, w = null;
    r.addEventListener("mousedown", m), r.addEventListener("dragstart", x), r.addEventListener("dragover", h), r.addEventListener("drop", c), r.addEventListener("dragleave", R), r.addEventListener("dragend", S), r.addEventListener("mouseup", S), this.addRollbackTask(() => {
      r.removeEventListener("mousedown", m), r.removeEventListener("dragstart", x), r.removeEventListener("dragover", h), r.removeEventListener("drop", c), r.removeEventListener("dragleave", R), r.removeEventListener("dragend", S), r.removeEventListener("mouseup", S);
    });
    function m(a) {
      if (a.button !== 0 || n.classList.contains(B)) return;
      const g = A("th", "tr", a.target);
      if (!g) return;
      const _ = W(g), p = e.cell(_.row, _.col);
      if (p.cellType === "body-cell" || b(p)) return;
      E({
        direction: p.cellType,
        source: I(),
        cell: p
      });
      function I() {
        const { row: T, col: k } = p;
        return p.cellType === "row-header" ? [
          o.getStartOfRowId(T),
          o.getEndOfRowId(T)
        ] : [
          o.getStartOfColumnId(k),
          o.getEndOfColumnId(k)
        ];
      }
      function D(T) {
        return !s || T.row < e.getFreezedRowCount();
      }
      function L(T) {
        return !l || T.col < e.getFreezedColumnCount();
      }
      function b(T) {
        return T.cellType === "row-header" && D(T) || T.cellType === "col-header" && L(T);
      }
    }
    function x(a) {
      if (!a.dataTransfer || !d) {
        a.preventDefault();
        return;
      }
      u.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), a.dataTransfer.effectAllowed = "move", a.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), a.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), a.dataTransfer.setDragImage(d.cell.element, ee, ee);
    }
    function h(a) {
      if (!d || !a.dataTransfer || !a.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const g = e.findCellOrNull(a.offsetY, a.offsetX);
      if (!g || !g.isHeaderCell || d.direction === "row-header" && _(g, d) || d.direction === "col-header" && p(g, d)) {
        f(), w = g;
        return;
      }
      g !== w && C(g, d.direction), a.preventDefault();
      function _(I, D) {
        return I.row === D.cell.row || I.row < e.getFreezedRowCount() || i.checkConflictingInRows(I.row, I.row);
      }
      function p(I, D) {
        return I.col === D.cell.col || I.col < e.getFreezedColumnCount() || i.checkConflictingInColumns(I.col, I.col);
      }
    }
    function c() {
      const a = d, g = w;
      !a || !g || (f(), a.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(a.source, [g.row, g.row]);
      }), e.forceLayoutTask(), e.selectRow(a.cell.row)), a.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(a.source, [g.col, g.col]);
      }), e.forceLayoutTask(), e.selectColumn(a.cell.col)));
    }
    function R() {
      f(), w = null;
    }
    function S() {
      r.classList.remove("is-dragging"), f(), d = null, r.draggable = !1, w = null, u.setIdle();
    }
    function E({ direction: a, source: g, cell: _ }) {
      r.draggable = !0, d = {
        direction: a,
        source: g,
        cell: _
      };
    }
    function f() {
      if (!w || !d) return;
      const { direction: a } = d, g = a === "row-header" ? e.headerColumns : e.headerRows;
      for (let _ = 0; _ < g; _++)
        a === "row-header" ? e.cell(w.row, _).element.classList.remove("is-dragging") : e.cell(_, w.col).element.classList.remove("is-dragging");
    }
    function C(a, g) {
      f(), w = a;
      const _ = g === "row-header" ? e.headerColumns : e.headerRows;
      for (let p = 0; p < _; p++)
        g === "row-header" ? e.cell(a.row, p).element.classList.add("is-dragging") : e.cell(p, a.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const te = 10;
class jt extends y {
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { rowManager: s, gridStateContext: l } = t, { table: r } = t.elements, i = document.createElement("div");
    i.className = Ne;
    let o = null, u = -1;
    r.addEventListener("mousedown", d), r.addEventListener("dragstart", w), r.addEventListener("dragover", m), r.addEventListener("drop", x), r.addEventListener("dragleave", h), r.addEventListener("dragend", c), r.addEventListener("mouseup", c), this.addRollbackTask(() => {
      r.removeEventListener("mousedown", d), r.removeEventListener("dragstart", w), r.removeEventListener("dragover", m), r.removeEventListener("drop", x), r.removeEventListener("dragleave", h), r.removeEventListener("dragend", c), r.removeEventListener("mouseup", c);
    });
    function d(f) {
      if (f.button !== 0 || n.classList.contains(B)) return;
      const C = A("th", "tr", f.target);
      if (!C) return;
      const a = W(C), g = e.cell(a.row, a.col);
      if (_(g)) return;
      Object.assign(f, { __IGNORE_HEADER_SELECT__: !0 }), R({
        source: [
          s.getStartOfRowId(g.row),
          s.getEndOfRowId(g.row)
        ],
        cell: g
      });
      function _(p) {
        return p.cellType !== "row-header" || p.row < e.getFreezedRowCount() || p.row < e.headerRows;
      }
    }
    function w(f) {
      const { offsetY: C, offsetX: a } = f;
      if (e.findCellOrNull(C, a)?.cellType === "row-header") {
        if (!f.dataTransfer || !o) {
          f.preventDefault();
          return;
        }
        l.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), f.dataTransfer.effectAllowed = "move", f.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), f.dataTransfer.setData("ir-grid/move-rows-dragging", ""), f.dataTransfer.setDragImage(o.cell.element, te, te);
      }
    }
    function m(f) {
      const { dataTransfer: C, offsetY: a, offsetX: g } = f;
      if (!o || !C || !C.types.includes("ir-grid/move-rows-dragging")) return;
      const _ = e.findCellOrNull(a, g);
      if (!_) return;
      const p = I(_.row);
      if (_.cellType !== "row-header" || D(p, o)) {
        S(), u = -1;
        return;
      }
      p !== u && E(p, _.col), f.preventDefault();
      function I(L) {
        const b = e.getRow(L), T = a - b.top < b.height / 2;
        return b.rowId + (T ? 0 : 1);
      }
      function D(L, b) {
        const [T, k] = b.source;
        return L >= T && L <= k || L < e.headerRows;
      }
    }
    function x() {
      const f = o, C = u;
      !f || C < 0 || (S(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(f.source, C);
      }), e.forceLayoutTask(), e.selectRow(f.cell.row));
    }
    function h() {
      S(), u = -1;
    }
    function c() {
      r.classList.remove("is-dragging"), S(), o = null, r.draggable = !1, u = -1, l.setIdle();
    }
    function R({ source: f, cell: C }) {
      r.draggable = !0, o = {
        source: f,
        cell: C
      };
    }
    function S() {
      u < 0 || !o || i.remove();
    }
    function E(f, C) {
      S(), u = f;
      const a = Math.min(u, s.length - 1), g = e.getRow(a), _ = g.getCell(C).element.getBoundingClientRect(), p = {
        top: _.top,
        height: 16
      }, I = p.height / 2;
      f === s.length && (p.top += g.height, p.height = I + 1), i.style.top = `${p.top - I}px`, i.style.left = `${_.left}px`, i.style.width = `${e.headerWidth}px`, i.style.height = `${p.height}px`, N("popover").appendChild(i);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const ne = 10;
class Kt extends y {
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { rowManager: s, columnManager: l, gridStateContext: r } = t, { table: i } = t.elements, o = document.createElement("div");
    o.className = Be;
    let u = null, d = -1;
    i.addEventListener("mousedown", w), i.addEventListener("dragstart", m), i.addEventListener("dragover", x), i.addEventListener("drop", h), i.addEventListener("dragleave", c), i.addEventListener("dragend", R), i.addEventListener("mouseup", R), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", w), i.removeEventListener("dragstart", m), i.removeEventListener("dragover", x), i.removeEventListener("drop", h), i.removeEventListener("dragleave", c), i.removeEventListener("dragend", R), i.removeEventListener("mouseup", R);
    });
    function w(C) {
      if (C.button !== 0 || n.classList.contains(B)) return;
      const a = A("th", "tr", C.target);
      if (!a) return;
      const g = W(a), _ = e.cell(g.row, g.col);
      if (p(_)) return;
      Object.assign(C, { __IGNORE_HEADER_SELECT__: !0 }), S({
        source: [
          s.getStartOfColumnId(_.col),
          s.getEndOfColumnId(_.col)
        ],
        cell: _
      });
      function p(I) {
        return I.cellType !== "col-header" || I.col < e.getFreezedColumnCount() || I.col < e.headerColumns;
      }
    }
    function m(C) {
      const { offsetY: a, offsetX: g } = C;
      if (e.findCellOrNull(a, g)?.cellType === "col-header") {
        if (!C.dataTransfer || !u) {
          C.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), C.dataTransfer.setData("ir-grid/move-columns-dragging", ""), C.dataTransfer.setDragImage(u.cell.element, ne, ne);
      }
    }
    function x(C) {
      const { dataTransfer: a, offsetY: g, offsetX: _ } = C;
      if (!u || !a || !a.types.includes("ir-grid/move-columns-dragging")) return;
      const p = e.findCellOrNull(g, _);
      if (!p) return;
      const I = D(p.col);
      if (p.cellType !== "col-header" || L(I, u)) {
        E(), d = -1;
        return;
      }
      I !== d && f(p.row, I), C.preventDefault();
      function D(b) {
        const T = e.getColumn(b), k = _ - T.left < T.width / 2;
        return T.columnId + (k ? 0 : 1);
      }
      function L(b, T) {
        const [k, ie] = T.source;
        return b >= k && b <= ie || b < e.headerColumns;
      }
    }
    function h() {
      const C = u, a = d;
      !C || a < 0 || (E(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(C.source, a);
      }), e.forceLayoutTask(), e.selectColumn(C.cell.col));
    }
    function c() {
      E(), d = -1;
    }
    function R() {
      i.classList.remove("is-dragging"), E(), u = null, i.draggable = !1, d = -1, r.setIdle();
    }
    function S({ source: C, cell: a }) {
      i.draggable = !0, u = {
        source: C,
        cell: a
      };
    }
    function E() {
      d < 0 || !u || o.remove();
    }
    function f(C, a) {
      E(), d = a;
      const g = Math.min(d, l.length - 1), _ = e.getColumn(g), p = e.cell(C, g);
      if (!p.isConnected) return;
      const I = p.element.getBoundingClientRect(), D = {
        left: I.left,
        width: 12
      }, L = D.width / 2;
      a === l.length && (D.left += _.width, D.width = L + 1), o.style.top = `${I.top}px`, o.style.left = `${D.left - L}px`, o.style.height = `${e.headerHeight}px`, o.style.width = `${D.width}px`, N("popover").appendChild(o);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
class Yt extends y {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const {
      onRowClick: s,
      freezeLastColumn: l,
      multipleSelect: r = !1,
      selectOnRightClick: i = !1
    } = this._args, { hook: o, columnManager: u } = t, { visibleColumnList: d } = u, w = this.setPluginAPI(new xt(e, r)), m = /* @__PURE__ */ new Set([0]);
    if (i && m.add(2), n.classList.add(K), l) {
      n.classList.add(Y);
      const f = t.getThemeValue("grid.forceRenderRightCol");
      t.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), o.addSyncHook("cellLayout", h), o.addHook("postRenderCell", c), this.addRollbackTask(() => {
        t.setGridConfig({ "grid.forceRenderRightCol": f }), o.removeSyncHook("cellLayout", h), o.removeHook("postRenderCell", c);
      });
    }
    const x = (f) => e.onNativeCopy(f);
    o.addBeginHook("contextMouseDown", R), o.addHook("contextMouseDown", S), o.addHook("renderRowElement", E), e.addGlobalEventListener(n, "copy", x), this.addRollbackTask(() => {
      w.clearAllSelections(), n.classList.remove(K, Y), o.removeHook("contextMouseDown", R), o.removeHook("contextMouseDown", S), o.removeHook("renderRowElement", E), n.removeEventListener("copy", x);
    });
    function h(f, C, a) {
      // 가로 scroll이 안생겼다면 리턴
      e.width <= n.clientWidth || // 마지막 열이 아니면 리턴
      C < d.length - 1 || (a.left = e.scrollRight - a.width);
    }
    function c(f) {
      f.isHeaderCell || f.col < d.length - 1 || f.element.classList.add(ze);
    }
    function R(f) {
      f.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function S(f) {
      if (!m.has(f.button) || f.target instanceof HTMLButtonElement) return;
      const C = f.target.closest("td");
      if (!C) return;
      const a = W(C), g = e.cell(a.row, a.col);
      g.cellType === "body-cell" && (w.runMouseDownTask(g, f), s?.(e, g.row, f));
    }
    function E(f, C) {
      C.classList.toggle($e, w.isRowSelected(f.rowId, !0));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class xt {
  constructor(e, n) {
    this._grid = e, this._multipleSelect = n, this.setMultipleSelect(n);
  }
  _selectedRowIdSet = /* @__PURE__ */ new Set();
  _mouseDownTasks = [];
  get multipleSelect() {
    return this._multipleSelect;
  }
  addSelectedRow(e) {
    this.addSelectedRows([e]);
  }
  addSelectedRows(e) {
    e.forEach((n) => {
      this._selectedRowIdSet.add(n);
      const t = this._grid.getRow(n);
      t.isMounted && t.render();
    });
  }
  removeSelectedRow(e) {
    this.removeSelectedRows([e]);
  }
  removeSelectedRows(e) {
    e.forEach((n) => {
      this._selectedRowIdSet.delete(n);
      const t = this._grid.getRow(n);
      t.isMounted && t.render();
    });
  }
  clearSelectedRows() {
    this.removeSelectedRows([...this._selectedRowIdSet]);
  }
  clearAllSelections() {
    this._grid.releaseCells(), this.clearSelectedRows();
  }
  isRowSelected(e, n = !1) {
    if (this._selectedRowIdSet.has(e)) return !0;
    if (n) return !1;
    const t = this._grid.getSelection();
    return t !== null && e >= t.top && e <= t.bottom;
  }
  getSelectedRows() {
    const e = this._grid.getSelection();
    if (!e) return [...this._selectedRowIdSet];
    const n = new Set(this._selectedRowIdSet);
    for (let t = e.top; t <= e.bottom; t++)
      n.add(t);
    return [...n];
  }
  setMultipleSelect(e) {
    this._multipleSelect = e, e || this.selectRowWithActiveCell(), this._mouseDownTasks = [], e && this._mouseDownTasks.push(
      this._mousedownWithCtrlTask,
      this._mousedownWithShiftTask
    ), this._mouseDownTasks.push(this._mousedownSingleCellTask);
  }
  runMouseDownTask(e, n) {
    for (const t of this._mouseDownTasks)
      if (t.call(this, e, n)) break;
  }
  _mousedownWithCtrlTask(e, n) {
    if (!n.ctrlKey) return;
    const t = this._grid.getSelection();
    return t && (this.addSelectedRows(U(t.top, t.bottom + 1).asList()), this._grid.releaseCells()), this.isRowSelected(e.row) ? this.removeSelectedRow(e.row) : this._grid.selectRow(e.row, e), !0;
  }
  _mousedownWithShiftTask(e, n) {
    if (!(!n.shiftKey || !this._grid.activeCell))
      return this.clearSelectedRows(), this._grid.selectRows(
        Math.min(this._grid.activeCell.row, e.row),
        Math.max(this._grid.activeCell.row, e.row),
        this._grid.activeCell
      ), !0;
  }
  _mousedownSingleCellTask(e, n) {
    this.isRowSelected(e.row) && n.button === 2 || (this.clearAllSelections(), this._grid.selectRow(e.row, e));
  }
  /** activeCell이 있는 Row만 선택하는 함수 (active가 없고, selectedCls만 있는 경우 그 중 첫번째 행 선택) */
  selectRowWithActiveCell() {
    if (this.getSelectedRows().length !== 0) {
      if (this._grid.activeCell)
        this._grid.selectRow(this._grid.activeCell.row, this._grid.activeCell);
      else {
        const e = [...this._selectedRowIdSet][0];
        e && this._grid.selectRow(e);
      }
      this.clearSelectedRows();
    }
  }
}
class Xt extends y {
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: n, gridStore: t } = e, s = this.setPluginAPI(new ue(n, this._args?.columnMetaInfo ?? {})), l = (i, o, u) => {
      (u === "insertColumns" || u === "removeColumns") && s.clearFilters();
    }, r = (i) => {
      document.getElementById(s.dropdownId)?.isConnected && (i.__IGNORE_GRID_FOCUS__ = !0);
    };
    t.hook.addHook("columnChanged", l), t.hook.addHook("contextMouseUp", r), this.addRollbackTask(() => {
      s.clearFilters(), s.clearSortOrder(), t.hook.removeHook("columnChanged", l), t.hook.removeHook("contextMouseUp", r);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
class Zt extends y {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { onCopyFail: s } = this._args, { hook: l } = t, r = this.setPluginAPI(new St(e));
    let i = !1;
    l.addSyncHook("selectChanged", o), l.addBeginHook("contextMouseDown", u), l.addSyncBeginHook("copy", w), l.addSyncBeginHook("cut", m), l.addHook("postRenderCell", x), this.addRollbackTask(() => {
      r.clearSelectedCells(), l.removeSyncHook("selectChanged", o), l.removeBeginHook("contextMouseDown", u), l.removeSyncBeginHook("copy", w), l.removeSyncBeginHook("cut", m), l.removeHook("postRenderCell", x);
    });
    function o() {
      !i && r.hasMultipleSelection() && r.clearSelectedCells();
    }
    function u(c) {
      if (c.button !== 0 || n.classList.contains(B) || !c.target.closest("td,th")) return;
      if (!c.ctrlKey || c.shiftKey) return r.clearSelectedCells();
      const S = e.getSelection();
      S && r.toggleCells(h(S)), i = !0, document.addEventListener("mouseup", d);
    }
    function d() {
      const c = e.getSelection();
      c && r.hasSelectedCellInRange(c) && (r.toggleCells(h(c)), e.releaseCells()), i = !1, document.removeEventListener("mouseup", d);
    }
    function w(c) {
      return r.hasMultipleSelection() ? (e.onMultipleCellsNativeCopy(c, r.getSelectedCells()) === !1 && s?.(), !1) : !0;
    }
    function m(c) {
      if (!r.hasMultipleSelection()) return !0;
      const R = r.getSelectedCells();
      return e.onMultipleCellsNativeCopy(c, R) === !1 ? (s?.(), !1) : (e.commandManager.doRecording("Multiple Cut", () => {
        R.forEach((S) => e.setText(S.row, S.col, ""));
      }), !1);
    }
    function x(c) {
      c.element.classList.toggle(Ve, r.isCellSelected(c));
    }
    function h(c) {
      const R = [], { top: S, bottom: E, left: f, right: C } = c;
      for (let a = S; a <= E; a++)
        for (let g = f; g <= C; g++)
          R.push(e.cell(a, g));
      return R;
    }
  }
  get pluginKey() {
    return "grid-multi-select-cell";
  }
}
class St {
  constructor(e) {
    this._grid = e, this._debouncedRender = Qe(() => this._render());
  }
  _selectedSet = /* @__PURE__ */ new Set();
  _pendingRenderCellSet = /* @__PURE__ */ new Set();
  _debouncedRender;
  hasMultipleSelection() {
    return this._selectedSet.size > 0;
  }
  isCellSelected(e) {
    return this._selectedSet.has(e);
  }
  hasSelectedCellInRange(e) {
    const { top: n, bottom: t, left: s, right: l } = e;
    for (let r = n; r <= t; r++)
      for (let i = s; i <= l; i++)
        if (this._selectedSet.has(this._grid.cell(r, i))) return !0;
    return !1;
  }
  getSelectedCells() {
    const e = new Set(this._selectedSet), n = this._grid.getSelection();
    if (n) {
      const { top: t, bottom: s, left: l, right: r } = n;
      for (let i = t; i <= s; i++)
        for (let o = l; o <= r; o++)
          e.add(this._grid.cell(i, o));
    }
    return [...e];
  }
  toggleCells(e) {
    e.forEach((n) => {
      this._selectedSet.has(n) ? this._selectedSet.delete(n) : this._selectedSet.add(n), this._pendingRenderCellSet.add(n);
    }), this._debouncedRender();
  }
  removeCells(e) {
    for (const n of e)
      this._selectedSet.delete(n), this._pendingRenderCellSet.add(n);
    this._debouncedRender();
  }
  clearSelectedCells() {
    const e = [...this._selectedSet];
    this._selectedSet.clear(), e.forEach((n) => this._pendingRenderCellSet.add(n)), this._debouncedRender();
  }
  _render() {
    this._pendingRenderCellSet.forEach((e) => e.render()), this._pendingRenderCellSet.clear();
  }
}
const It = /^[-+]?\d+(\.\d+)?$/, Et = /^([-+])?0*(\d+)(\.\d+?)?0*$/;
function qt(v) {
  if (!It.test(v)) return v;
  const e = Et.exec(v);
  if (!e) return v;
  const [n, t, s] = e.slice(1), l = [];
  return n && n !== "+" && l.push(n), t && l.push(t.replace(/\B(?=(\d{3})+(?!\d))/g, ",")), s && l.push(s), l.join("");
}
const Jt = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, Qt = /^-?\d+(\.\d+)?$/;
export {
  Jt as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  Qt as ALLOW_ONLY_NUMBER_PATTERN,
  nn as CellDropPlugin,
  $t as ColumnFillPlugin,
  rn as CustomCellRenderer,
  sn as DefaultKeyPlugin,
  on as IRGrid,
  mt as IRGridButtonRenderer,
  ln as IRGridCell,
  an as IRGridCellDropPlugin,
  O as IRGridCellRenderer,
  dn as IRGridCheckboxRenderer,
  Rt as IRGridColumnFillPlugin,
  ot as IRGridDatePickerRenderer,
  cn as IRGridDefaultCellIconButtonRenderer,
  un as IRGridDefaultCellRenderer,
  gn as IRGridDefaultKeyPlugin,
  Ut as IRGridExchangeByHeaderCellPlugin,
  hn as IRGridMouseCellSelectorPlugin,
  Kt as IRGridMoveColumnsPlugin,
  jt as IRGridMoveRowsPlugin,
  Zt as IRGridMultiSelectCellPlugin,
  fn as IRGridOverflowPanelPlugin,
  mn as IRGridPopoverPlugin,
  dt as IRGridProgressRenderer,
  Cn as IRGridRadioCellRenderer,
  pn as IRGridResizerPlugin,
  _n as IRGridRow,
  Bt as IRGridRowFilterCellRenderer,
  Xt as IRGridRowFilterPlugin,
  wn as IRGridRowNoHeaderCellRenderer,
  Ct as IRGridRowSelectionPlugin,
  rt as IRGridSelectCellRenderer,
  vt as IRGridSingleCellDragPlugin,
  Yt as IRGridTablePlugin,
  Rn as MouseCellSelectorPlugin,
  vn as ResizerPlugin,
  zt as RowSelectionPlugin,
  xn as STICKY_Z_INDEX,
  Vt as SingleCellDragPlugin,
  Sn as cellCompare,
  In as cellTextToNum,
  de as createCellContent,
  En as createCellContentWithIconButton,
  Tn as createCustomRenderer,
  Dn as createIRGridColumnSortManager,
  bn as createInferenceSortHandler,
  Ln as numberCheckDefault,
  qt as numberWithCommasFormatter,
  Nt as renderGridButton,
  yn as renderGridCellDefault,
  kn as renderGridCellIconButton,
  Hn as renderGridCheckbox,
  Pt as renderGridDatePicker,
  Ft as renderGridProgress,
  Wn as renderGridRadio,
  At as renderGridSelect,
  Mn as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
