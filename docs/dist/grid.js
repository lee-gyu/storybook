import { k as Vt, G as Pt, l as $t, e as jt, s as Ut, o as Kt, i as Xt, u as Yt, h as Zt, x as qt, f as Jt, C as Qt, S as $e, J as en, q as tn, D as nn, j as on, y as sn, F as rn, A as ln, M as an, N as cn, Q as dn, W as hn, X as un, Z as fn, U as mn, $ as gn, Y as Cn, a0 as wn, a1 as pn, a2 as Rn, a3 as _n, a4 as xn, a5 as Ne, a6 as bn, a7 as vn, a8 as Ie, a9 as W, aa as Sn, ab as yn, ac as En, ad as In, ae as Tn, af as Te, ag as je, ah as Ln, ai as kn, aj as Mn, ak as Hn, al as Ae, am as We, an as zn, ao as Dn, ap as An, aq as Wn, z as On, ar as Nn, as as Fn, at as Bn, au as Gn, av as Vn, aw as Pn, ax as $n, ay as jn, az as Un, aA as Kn, a as Le, aB as Xn, aC as Yn, aD as Zn, aE as qn, aF as Jn, aG as Qn, aH as eo, aI as to, r as no, aJ as Ue } from "./chunks/_init-B0xIPnhF.js";
import { f as q, b as oo, d as so, a as io, s as U, c as ro, e as lo } from "./chunks/command-manager-CRyU8v7K.js";
import { I as ao } from "./chunks/index-DDbI2a2F.js";
import { q as ke, g as he, o as co, c as Ct, k as ue, t as ho, b as uo, d as fo, f as mo, s as go } from "./chunks/floating-COQGiF1T.js";
import { t as Co, u as wo, h as ne, b as wt, a as po, p as F, g as te, r as Ro, R as Fe, f as Y, C as _o, o as xo } from "./chunks/rx-state-R2lsZxJ3.js";
import { i as bo, d as ge } from "./chunks/ko-DexDDk13.js";
import { c as ee, i as pt, r as vo, w as So } from "./chunks/in-memory-clipboard-DO8U3HeN.js";
import { p as yo } from "./chunks/pick-BLZiDVxr.js";
import { c as Ke } from "./chunks/clsx-OuTLNxxd.js";
import { v as Eo } from "./chunks/v4-Cgt9uYzN.js";
function Io(s, e, t = 1) {
  const n = [];
  for (let o = s; o < e; o += t)
    n.push(o);
  return n;
}
function O(s, e, t = 1) {
  const { start: n, end: o } = e === void 0 ? { start: 0, end: s } : { start: s, end: e };
  return {
    forEach(i) {
      let r = n;
      for (; r !== o; )
        i(r), r += t;
    },
    map(i) {
      const r = [];
      for (let l = n; l < o; l += t)
        r.push(i(l));
      return r;
    },
    some(i) {
      let r = n;
      for (; r !== o; ) {
        if (i(r))
          return !0;
        r += t;
      }
      return !1;
    },
    asList() {
      return Io(n, o, t);
    },
    reduce(i, r) {
      let l = r, u = n;
      for (; u !== o; )
        l = i(l, u), u += t;
      return l;
    }
  };
}
function Me(s, e) {
  return Co(function(t, n) {
    var o = 0;
    t.subscribe(wo(n, function(i) {
      n.next(s.call(e, i, o++));
    }));
  });
}
function Xe(s, e, t) {
  return Rt(s, t) && _t(e, t);
}
function J(s) {
  const e = parseInt(s.getAttribute("data-row") || "-1"), t = parseInt(s.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function Rt(s, e) {
  return s >= e.top && s <= e.bottom;
}
function _t(s, e) {
  return s >= e.left && s <= e.right;
}
function Ce(s, e, t) {
  t ? s.classList.add(e) : s.classList.remove(e);
}
function To(s) {
  let e = s.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function Lo(s) {
  let e = s.target, t = s.offsetX, n = s.offsetY;
  for (; e !== s.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const ko = 20, Mo = 5;
class X {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = [n.icon, n.sortOrder].reduce((u, a) => a ? u + 1 : u, 0) * (ko + Mo), r = `${n.text ?? ""}`.split(`
`), l = i + o.calculateWidth(r[0] ?? "");
    return this.getHorizontalCellPadding(n) + O(1, r.length).reduce(
      (u, a) => Math.max(u, o.calculateWidth(r[a])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    const n = t.gridStore, o = t.paddingTop ?? n.getThemeValue("grid.paddingTop"), i = t.paddingBottom ?? n.getThemeValue("grid.paddingBottom");
    return o + i + To(e);
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
  get canBeClear() {
    return !0;
  }
}
class Ho {
  constructor(e, t) {
    this._args = t, this._instance = e, this._undoContext = this._getUndoContext();
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
    this._execute(), this.onExecute();
  }
  undo() {
    if (!this.canUndo)
      throw new Error("Can't undo command");
    this._undo(), this.onUndo();
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
}
class V extends Ho {
}
class re extends V {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: yo(
        this._instance.getCell(e, t),
        n
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
}
const de = {
  checkbox: jt,
  checkboxWrapper: Ut,
  checkboxText: Kt,
  checkboxInput: Xt,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, zo = 16, Oe = 6, Do = Oe * 2, Ao = 20;
class xt extends X {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("label"), r = document.createElement("input");
    if (o.classList.add(Vt, de.checkbox), i.classList.add(Pt, de.checkboxWrapper), r.type = "checkbox", r.className = de.checkboxInput, i.appendChild(r), n.icon && i.appendChild(wt(`ir-icon--${n.icon}`)), n.label) {
      const l = document.createElement("span");
      l.className = `${$t} ${de.checkboxText}`, l.innerText = n.label, i.appendChild(l);
    }
    return n.horizontalAlign && o.classList.add(de[`horizontal_${n.horizontalAlign}`]), o.appendChild(i), r.checked = n.text === "true", i.onkeydown = (l) => l.preventDefault(), r.onchange = () => {
      const l = r.checked, u = l ? "true" : "false", { commandManager: a } = n.gridStore, c = new re(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, a.pushCommandBlock(new q(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, o;
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = n.label ? Oe + o.calculateWidth(n.label) : 0, r = n.icon ? Oe + Ao : 0;
    return zo + Do + i + r + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function Vi(s) {
  const e = new xt(s ?? {});
  return () => e;
}
const we = { select: Zt, selectInput: qt, selectInputNative: Jt, selectInputIcon: Qt }, Ye = /* @__PURE__ */ new WeakMap(), Wo = 20, Oo = 4, Ze = Wo + Oo, No = 18, Fo = 150;
class Bo extends X {
  constructor({
    items: e,
    onChange: t,
    allowClear: n,
    customDisplayTextFunc: o,
    allowCustomText: i = !1,
    showErrorIfCustomText: r = !1,
    allowEdit: l = !1,
    getVisibleFunc: u = () => !0,
    mappingType: a = "text"
  }) {
    super(), this._dropDownItemList = [], this._dropDownContext = oo(), this._itemWidth = null, this._isExpanded = !1, this._floatingCleanup = () => {
    }, this.#t = n ?? !1, this.#a = a, this._items = e, this.#e = /* @__PURE__ */ new Map(), this._allowCustomText = i, this._allowEdit = l, l && (this._allowCustomText = !0), o ? this._customDisplayTextFunc = o : this._customDisplayTextFunc = a === "text" ? this.#i.bind(this) : this.#l.bind(this), this._showErrorIfCustomText = r, this._getVisibleFunc = u, t && (this.onChange = t.bind(this));
    for (const c of e) {
      const { item: h, button: g } = so(c.value, c.text), C = { ...c, buttonElement: g, itemWrapperElement: h };
      this.#e.set(c[this.#a], C), this._dropDownItemList.push(C), this._dropDownContext.ulItems.appendChild(h);
    }
  }
  #e;
  #t;
  #a;
  #i(e, t, n) {
    return t ?? "";
  }
  #l(e, t, n) {
    var i;
    const o = t ?? "";
    return ((i = this.#e.get(o)) == null ? void 0 : i.text) ?? o;
  }
  getSelectedItemOrNull(e) {
    for (const t of this._dropDownItemList)
      if (t[this.#a] === e) return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: o,
      _allowEdit: i,
      _showErrorIfCustomText: r,
      _customDisplayTextFunc: l,
      _getVisibleFunc: u,
      _dropDownContext: { divDropdown: a },
      _dropDownItemList: c
    } = this, { element: h } = ke({ tag: "div", className: Ke(Yt, we.select, we.selectInput) }), { element: g } = ke({ tag: "span", className: we.selectInputNative }), { element: C } = ke({ tag: "i", className: Ke(we.selectInputIcon, "ir-icon", "ir-icon--chevron-down") }), I = n.text === "" || n.text === null || n.text === void 0;
    i && h.classList.add("is-editable");
    const p = this.getSelectedItemOrNull(n.text), y = p !== null;
    p ? (g.textContent = l(p.value, p.text, !1), n.value = p.value) : o ? (g.textContent = l(n.value, n.text, !0), n.value = n.text) : (g.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    o && r && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !I && !y && (h.dataset.error = "true");
    const L = po({
      eventElements: [h, a],
      clickOutsideFunc: () => v.hide()
    }), v = {
      show: () => {
        this._isExpanded = !0, m.create(), L.create(), this._beforeValue = n.value, this._beforeText = n.text;
        for (const E of c) {
          const { value: f, text: S, itemWrapperElement: R, buttonElement: T } = E;
          u(E) === !1 ? R.style.display = "none" : R.style.display = "", E[this.#a] === n.text ? R.classList.add($e) : R.classList.remove($e), T.onclick = () => {
            const b = new re(n.gridStore.commandContext, [e, t, { text: S, value: f }]);
            b.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, f, S), b.onExecute = () => this.onChange(e, t, f, S, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new q(
              "Change select menu",
              b
            )), n.text = E[this.#a], n.value = f, g.textContent = l(f, S, !1), h.dataset.error && delete h.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, f, S, this._beforeValue, this._beforeText), v.hide();
          };
        }
        const w = this.getItemWidth(n.fontSize || "13px", n.fontFamily || "Pretendard", n), d = h.offsetWidth, _ = n.gridStore.getThemeValue("grid.defaultDropdownWidth");
        a.style.maxWidth = `${d > _ ? d : _}px`, a.style.width = `${Math.max(w, d)}px`, a.setAttribute("data-row", e.toString()), a.setAttribute("data-col", t.toString()), he("popover").appendChild(a), h.classList.add("is-expanded"), setTimeout(() => {
          a.classList.add("is-expanded"), this._floatingCleanup(), this._floatingCleanup = co(h.parentElement, a, "bottom-start");
        }, 0);
      },
      hide: () => {
        this._isExpanded = !1, m.destroy(), L.destroy(), h.classList.remove("is-expanded"), a.classList.remove("is-expanded"), setTimeout(() => {
          a.getAttribute("data-row") === e.toString() && a.getAttribute("data-col") === t.toString() && (this._floatingCleanup(), a.remove());
        }, Fo);
      }
    }, m = Ct(v), x = () => {
      h.classList.contains("is-expanded") ? v.hide() : v.show();
    };
    return h.onclick = (w) => {
      i && w.target !== C || x();
    }, h.appendChild(g), h.appendChild(C), h;
  }
  onChange(e, t, n, o, i, r) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const o = ne(e, t), i = this.#e.has(n.text), r = this._customDisplayTextFunc(n.value, n.text, !i), l = o.calculateWidth(r);
    return Ze + l + this.getHorizontalCellPadding(n);
  }
  getDropdownWidth(e, t, n) {
    const o = ne(e, t), i = this._items.reduce((r, l) => Math.max(r, o.calculateWidth(l.text)), 0);
    return Ze + i + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const o = Ye.get(this);
    if (o) return o;
    const i = this.getDropdownWidth(e, t, n);
    return Ye.set(this, i), i;
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + No;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
  get canBeClear() {
    return this.#t;
  }
}
const Pi = (s) => {
  const e = new Bo(s);
  return () => e;
}, He = { input: tn, inputNative: nn, inputSuffix: on }, Go = 28, oe = /* @__PURE__ */ new WeakMap();
class Vo extends X {
  constructor({
    onDateClick: e,
    format: t = bo.datePicker.dateFormat,
    minDate: n = ue().getStoreValue("datePicker.minDate"),
    maxDate: o = ue().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: i = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = o, this._allowedEmptyString = i, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return ne(e, t).calculateWidth(n.text || this._format) + Go + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("input"), r = document.createElement("button"), l = document.createElement("i"), {
      _minDate: u,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: h
    } = this;
    if (i.readOnly = !0, i.maxLength = c.length, o.classList.add(He.input, en), i.classList.add(He.inputNative), r.classList.add(He.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), i.type = "text", i.placeholder = c, n.text !== "") {
      const C = ge(n.text, c, !0);
      C.isValid() || (n.text = oe.get(n)), (C.isBefore(u) || C.isAfter(a)) && (n.text = oe.get(n));
    }
    !h && (n.text === "" || n.text === void 0) && (n.text = oe.has(n) ? oe.get(n) : ge().format(c)), i.value = n.text || "", oe.set(n, n.text ?? ""), r.appendChild(l), o.appendChild(i), o.appendChild(r);
    const g = io({
      uuid: Eo(),
      refElement: o,
      minDate: u,
      maxDate: a,
      onClick: (C) => {
        const I = n.text, p = ge(C).format(c), y = new re(n.gridStore.commandContext, [e, t, { text: p }]);
        y.onUndo = () => {
          this.onDateClick(e, t, I ?? "");
        }, y.onExecute = () => {
          this.onDateClick(e, t, p);
        }, n.gridStore.commandManager.pushCommandBlock(new q("Change datePicker", y)), i.value = p, n.text = p, oe.set(n, p), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, p), g.hide();
      }
    });
    return r.onclick = () => {
      if (!g.visible) {
        const C = ge(n.text, c, !0);
        C.isValid() ? g.update(C.toDate(), C.toDate()) : g.update(/* @__PURE__ */ new Date(), null), g.show();
      }
    }, o;
  }
  get renderType() {
    return "datePicker";
  }
}
const $i = (s) => {
  const e = new Vo(s);
  return () => e;
}, pe = {
  progress: rn,
  progressVariants: ln
}, Po = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, $o = 100, jo = 100;
class Uo extends X {
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: o = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = o;
  }
  render(e, t, n) {
    const {
      _min: o,
      _max: i,
      _afterDecimalLen: r,
      _defaultIntent: l
    } = this, u = document.createElement("div"), a = document.createElement("div");
    u.className = sn, a.className = pe.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${pe.progress}--${c}`);
    const g = (F(parseFloat(n.text || "0"), o, i) - o) / (i - o) * $o;
    return U(a, {
      [pe.progressVariants.progressPercent]: `${g}%`,
      [pe.progressVariants.progressText]: `'${g.toFixed(r)}%'`
    }), u.appendChild(a), u;
  }
  getCellInnerWidth(e, t, n) {
    return jo + this.getHorizontalCellPadding(n);
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
const ji = (s = Po) => {
  const e = new Uo(s);
  return () => e;
}, Ko = 20, Xo = 24, Yo = 24, Zo = 29, qe = {
  primary: fn,
  secondary: mn,
  tertiary: gn,
  transparent: Cn,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class qo extends X {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = Zo : e.outlineStyle ? this._extraWidth = Yo : this._extraWidth = 0;
  }
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: o,
      outlineStyle: i,
      defaultColor: r,
      defaultIcon: l,
      defaultLabel: u
    } = this.args, a = document.createElement("div"), c = document.createElement("button");
    a.className = an, c.classList.add(cn, "button");
    const h = n.intent ?? r;
    h && c.classList.add(qe[h]), i ? a.classList.add(dn) : o && a.classList.add(hn), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(qe[n.horizontalAlign]), c.onclick = (I) => this.onClick(I, e, t);
    const g = n.icon ?? l, C = o ? n.text ?? "" : n.label ?? u ?? "";
    if (g) {
      const I = document.createElement("i");
      I.classList.add(un, "ir-icon", `ir-icon--${g}`), c.appendChild(I);
    }
    if (C) {
      const I = te("span");
      if (I.innerText = C, o) {
        const p = document.createElement("div");
        I.classList.add("text--multi-ellipsis"), p.appendChild(I), a.insertAdjacentElement("afterbegin", p);
      } else
        I.classList.add("text--ellipsis"), c.appendChild(I);
    }
    return a.appendChild(c), a;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? Ko : 0;
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t);
    return this.getHorizontalCellPadding(n) + o.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    return Xo;
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
const Ui = (s) => {
  const e = new qo(s ?? {});
  return () => e;
}, Re = { radio: pn, radioWrapper: Rn, radioInput: _n, radioText: xn }, Jo = 16, bt = 6, Qo = bt * 2;
class vt extends X {
  constructor({ onRadioClick: e }) {
    super(), this._radioItemStack = [], e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("label"), r = document.createElement("input");
    if (o.className = `${wn} ${Re.radio}`, i.className = Re.radioWrapper, r.type = "radio", r.className = Re.radioInput, i.appendChild(r), n.label) {
      const l = document.createElement("span");
      l.className = Re.radioText, l.innerText = n.label, i.appendChild(l);
    }
    return o.appendChild(i), r.checked = n.text === "true", r.checked === !0 && this.stackClickedRadio({ radio: r, data: n, row: e, col: t }), i.onkeydown = (l) => l.preventDefault(), r.onclick = () => {
      const l = n.gridStore.commandContext, u = new re(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        a && (l.setCell(a.row, a.col, { text: "true" }), this.onRadioClick(a.row, a.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new q("Click radioButton", u)), this.stackClickedRadio({ radio: r, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, o;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = n.label ? bt + o.calculateWidth(n.label) : 0;
    return Jo + Qo + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Ki = ({ onRadioClick: s }) => {
  const e = new vt({ onRadioClick: s });
  return () => e;
};
function es(s) {
  const e = document.createElement("div");
  if (e.className = Ne, s.sortOrder !== void 0) {
    const t = s.sortOrder === "ASC" ? "sort-ascending" : "sort-descending", n = document.createElement("i");
    n.className = `ir-icon ir-icon--${t}`, e.appendChild(n);
  }
  if (s.icon) {
    const t = document.createElement("i");
    t.classList.add("ir-icon", `ir-icon--${s.icon}`), s.iconColor && t.style.setProperty("--ir-icon-foreground-color", s.iconColor), e.appendChild(t);
  }
  if (s.text) {
    const t = document.createElement("span");
    t.innerText = s.text, e.appendChild(t);
  }
  return e;
}
function ts(s, e, t, n) {
  const o = document.createElement("div");
  if (o.className = Ne, t.icon) {
    const i = document.createElement("button"), r = document.createElement("i");
    i.setAttribute("type", "button"), i.classList.add("icon-button", bn), i.onclick = (l) => {
      n && n(l, s, e);
    }, r.classList.add("ir-icon", `ir-icon--${t.icon}`), t.iconColor && r.style.setProperty("--ir-icon-foreground-color", t.iconColor), i.appendChild(r), o.appendChild(i);
  }
  if (t.text) {
    const i = document.createElement("span");
    i.innerText = t.text, o.appendChild(i);
  }
  return o;
}
class Be extends X {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const o = es(n), {
      ellipsis: i = !0
    } = this._args;
    return i && o.classList.add(vn), o;
  }
  get renderType() {
    return "default";
  }
}
class ns extends X {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return ts(e, t, n, (o, i, r) => this.onClick(o, i, r));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class os extends X {
  constructor(e, ...t) {
    super(), this._prefix = "", this._fixedRowCount = e, this._captionList = t;
  }
  get prefix() {
    return this._prefix;
  }
  get renderType() {
    return "rowNo";
  }
  get editable() {
    return !1;
  }
  set prefix(e) {
    this._prefix = e;
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("div"), r = e - this._fixedRowCount;
    o.className = Ne;
    const l = r < this._captionList.length ? this._captionList[r] : `${this._prefix}${1 + r - this._captionList.length}`;
    return i.innerText = l, n.text = l, o.appendChild(i), o;
  }
}
const Xi = () => {
  const s = new Be();
  return () => s;
};
function Yi({ onClick: s }) {
  const e = new ns({ onClick: s });
  return () => e;
}
function Zi(s, ...e) {
  const t = new os(s, ...e);
  return () => t;
}
const Je = /* @__PURE__ */ new WeakMap();
class St extends Be {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function qi(s) {
  const e = Je.get(s);
  if (e)
    return e;
  const t = new St(s);
  return Je.set(s, t), t;
}
function ss(s, e) {
  return {
    getPastingRange: t,
    beforePastingList: n,
    pasteTask: o
  };
  function t(i, r) {
    if (r.length === 0) throw new Error("No pasting data.");
    const l = { ...i }, u = r.length, a = r[0].length, c = l.top + u, h = l.left + a;
    for (let g = i.bottom + 1; g < c; ++g)
      (s.hasRow(g) || s.onAutoInsertRow(g)) && (l.bottom = g);
    for (let g = i.right + 1; g < h; ++g)
      (s.hasColumn(g) || s.onAutoInsertColumn(g)) && (l.right = g);
    return l;
  }
  function n(i, r) {
    if (r.length === 0) throw new Error("No pasting data.");
    const l = r.length, u = r[0].length, a = [], c = i.bottom - i.top + 1, h = i.right - i.left + 1;
    function g(C, I) {
      const [p, y] = [C % l, I % u];
      return r[p][y];
    }
    for (const { y: C, x: I } of Ro(c, h)) {
      const [p, y] = [C + i.top, I + i.left];
      if (!s.hasRow(p) && s.onAutoInsertRow(p) && (s.addRow(), s.onAutoInsertedRow(p)), !s.hasColumn(y) && s.onAutoInsertColumn(y) && (s.addColumn(), s.onAutoInsertedColumn(y)), !s.hasRow(p) || !s.hasColumn(y)) continue;
      const L = s.cell(p, y), v = g(C, I);
      v.cellVisible && s.onCheckPasteCell(L, v.text) && a.push({
        cell: L,
        cellMetaInfo: {
          text: v.text,
          cellVisible: v.cellVisible,
          rowSpan: e.rowSpan ? v.rowSpan : 1,
          colSpan: e.colSpan ? v.colSpan : 1,
          isFormatted: !1
        }
      });
    }
    return a;
  }
  function o(i) {
    for (const { cell: r, cellMetaInfo: l } of i) {
      const { rowSpan: u, colSpan: a, cellVisible: c } = l;
      if (!c) continue;
      const { row: h, col: g } = r;
      if (u > 1 || a > 1) {
        const I = { top: h, left: g, bottom: h + u - 1, right: g + a - 1 };
        s.mergeCells(I.top, I.left, I.bottom, I.right);
      }
      s.setCell(h, g, { text: l.text }), s.onClipboardAfterPasteCell(r);
    }
  }
}
function is(s) {
  return JSON.stringify(s);
}
function rs(s) {
  return JSON.parse(s);
}
function ls(s) {
  const e = new Document(), t = e.createElement("table");
  return s.forEach((n) => {
    const o = e.createElement("tr");
    n.filter((i) => i.cellVisible).forEach((i) => {
      const r = e.createElement("td");
      r.textContent = i.text, r.setAttribute("rowSpan", `${i.rowSpan}`), r.setAttribute("colSpan", `${i.colSpan}`), o.appendChild(r);
    }), t.appendChild(o);
  }), e.appendChild(t), e.documentElement.outerHTML;
}
function as(s) {
  const n = new DOMParser().parseFromString(s, "text/html").querySelectorAll("tr");
  if (n.length === 0)
    return console.warn("No tr element in clipboard data"), [];
  const o = Array(n.length).fill(void 0).map(() => []);
  function i(u, a, c, h) {
    for (let g = u; g < u + c; ++g)
      for (let C = a; C < a + h; ++C)
        o[g][C] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
  function r(u) {
    let a = u;
    for (; o[l][a] !== void 0; )
      ++a;
    return a;
  }
  let l = 0;
  for (const u of n) {
    const a = u.querySelectorAll("td");
    let c = r(0);
    for (const h of a)
      (h.rowSpan > 1 || h.colSpan > 1) && i(l, c, h.rowSpan, h.colSpan), o[l][c] = {
        text: yt(h),
        rowSpan: h.rowSpan,
        colSpan: h.colSpan,
        cellVisible: !0,
        isFormatted: h.hasAttribute("class")
      }, c = r(c);
    ++l;
  }
  return o;
}
function yt(s) {
  const e = [];
  let t = s.firstChild;
  for (; t; )
    t.nodeType === Node.TEXT_NODE && t.nodeValue ? e.push(cs(t.nodeValue)) : t.nodeType === Node.ELEMENT_NODE && t instanceof HTMLElement && (t.nodeName === "BR" ? e.push(`
`) : t.textContent && e.push(yt(t))), t = t.nextSibling;
  return e.join("");
}
function cs(s) {
  const e = [];
  let t = !1;
  for (const n of s)
    switch (n) {
      case `
`:
      case "\r":
        t = !0;
        continue;
      default:
        if (t && n === " ")
          continue;
        t = !1, e.push(n);
        break;
    }
  return e.join("");
}
function ds(s) {
  if (s.length === 0) return !0;
  const e = s[0].length;
  return s.every((t) => t.length === e);
}
const Et = "	", It = `
`;
function hs(s) {
  if (!ds(s)) throw new Error("Wrong text matrix dimension");
  return s.map(
    (e) => e.map(
      ({ text: t }) => t
    ).join(Et)
  ).join(It);
}
function us(s) {
  if (s.length === 0) return [];
  const e = [], t = [], n = [];
  function o() {
    n.push({
      text: t.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: !0,
      isFormatted: !1
    }), t.length = 0;
  }
  function i() {
    var r;
    o(), (e.length === 0 || n.length === ((r = e[0]) == null ? void 0 : r.length)) && e.push([...n]), n.length = 0;
  }
  for (const r of s)
    r !== "\r" && (r === Et ? o() : r === It ? i() : t.push(r));
  return (t.length > 0 || n.length > 0) && i(), e;
}
const ve = [
  {
    format: "ir-grid/cell",
    parseFunc: rs,
    payloadFunc: is
  },
  {
    format: "text/html",
    parseFunc: as,
    payloadFunc: ls
  },
  {
    format: "text/plain",
    parseFunc: us,
    payloadFunc: hs
  }
];
function fs(s, e) {
  ve.forEach(
    ({ format: t, payloadFunc: n }) => s.setData(t, n(e))
  );
}
function Tt(s) {
  return s.isFormatted && s.text.startsWith("#");
}
function ms(s) {
  return s.some((e) => e.some((t) => Tt(t)));
}
function gs(s, e) {
  var t, n;
  for (let o = 0; o < s.length; ++o) {
    const i = s[o].length;
    for (let r = 0; r < i; ++r)
      (n = (t = e[o]) == null ? void 0 : t[r]) != null && n.text && Tt(s[o][r]) && (s[o][r].text = e[o][r].text);
  }
  return s;
}
function Qe(s) {
  for (const { format: e, parseFunc: t } of ve) {
    const n = s.getData(e);
    if (n !== "") {
      const o = t(n);
      if (!ms(o))
        return o;
      const i = s.getData(ve[2].format);
      return gs(
        o,
        ve[2].parseFunc(i)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
class Cs extends Fe {
  constructor() {
    super([]);
  }
}
class ws extends Fe {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class le {
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let i = e; i <= n; i++)
      for (let r = t; r <= o; r++)
        yield this._rowManager.cell(i, r);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let i = 0; i < this._rowManager.headerRows; ++i)
      for (let r = t; r <= o; ++r)
        yield this._rowManager.cell(i, r);
    for (let i = e; i <= n; ++i)
      for (let r = 0; r < this._colManager.headerColumns; ++r)
        yield this._rowManager.cell(i, r);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const o of this.getSelectionGenerator(e))
      t(o) && n++;
    return n;
  }
}
class Se {
  #e;
  #t;
  constructor(e) {
    this.#e = e, this.#t = new le(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this.#e.headerRows, this.#e.getRowCount() - 1], [o, i] = [this.#e.headerColumns, this.#e.getColCount() - 1], r = {
      top: F(e.top, t, n),
      left: F(e.left, o, i),
      bottom: F(e.bottom, t, n),
      right: F(e.right, o, i)
    };
    return r.top > n || r.bottom < t || r.left > i || r.right < o ? null : r;
  }
  extendRange(e) {
    const t = this.#t, n = { ...e }, o = [...t.getSelectionGenerator(e)];
    for (; o.length; ) {
      const i = o.pop();
      if (!i.isMerged && !i.mergeMain) continue;
      const r = i.mergeMain ? i.mergeMain.mergeArea : i.mergeArea;
      if (r.top < n.top) {
        const l = t.getSelectionGenerator(
          {
            top: r.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const u of l)
          o.push(u);
        n.top = r.top;
      }
      if (r.left < n.left) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: r.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const u of l)
          o.push(u);
        n.left = r.left;
      }
      if (n.bottom < r.bottom) {
        const l = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: r.bottom,
            right: n.right
          }
        );
        for (const u of l)
          o.push(u);
        n.bottom = r.bottom;
      }
      if (n.right < r.right) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: r.right
          }
        );
        for (const u of l)
          o.push(u);
        n.right = r.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        O(e.left, e.right + 1).map((o) => this.#e.cell(n, o).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        O(e.left, e.right + 1).map((o) => this.#e.cell(n, o))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const o = this.#e.getRowCount() - 1;
    return [...this.#t.getSelectionGenerator({ top: 0, left: e, bottom: o, right: t })];
  }
  getColumnListByColumn(e, t) {
    return O(e, t + 1).map((n) => this.#e.getColumn(n));
  }
}
class ps extends Fe {
  constructor(e) {
    super(null, (t) => {
      const n = new Se(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        Me((o) => {
          if (!o || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: i, range: r } = o;
          return i.row >= r.top && i.row <= r.bottom && i.col >= r.left && i.col <= r.right ? o : {
            activeCell: e.cell(r.top, r.left),
            range: o.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        Me((o) => {
          if (!o) return null;
          const i = n.adjustRange(o.range);
          return i ? { activeCell: o.activeCell, range: i } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        Me((o) => o ? { activeCell: o.activeCell, range: n.extendRange(o.range) } : null)
      );
    });
  }
}
class Rs {
  #e;
  #t;
  #a;
  constructor(e) {
    this.#e = new ps(e), this.#t = new ws(), this.#a = new Cs();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this.#t.isIdle;
  }
  get selectionRangeState() {
    return this.#e;
  }
  get gridModeState() {
    return this.#t;
  }
  get activateHeaderCellState() {
    return this.#a;
  }
}
const _s = /^var\((.+)\)$/;
function xs(s) {
  const e = _s.exec(s);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${s}' is not custom-property name.`);
}
const bs = [
  W.zLevel0,
  W.zLevel1,
  W.zLevel2,
  W.zLevel3,
  W.zLevel4,
  W.zLevel5,
  W.zLevel6,
  W.zLevel7,
  W.zLevel8,
  W.zLevel9
], j = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
};
class vs {
  #e;
  #t;
  #a = -1;
  #i = -1;
  #l = 1;
  #f = 1;
  #s = !0;
  #o;
  #u;
  #c = null;
  #h;
  #g = "body-cell";
  constructor({ row: e, col: t, tag: n, props: o, cellRenderer: i }) {
    this.#t = { ...o }, this.#e = n, this.#u = i, this.#a = e, this.#i = t;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(Ie) || this.element.tagName === "TH";
  }
  get renderType() {
    return this.#C().renderType;
  }
  get dropDisabled() {
    return this.#t.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this.#l > 1 || this.#f > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this.#C().getCellInnerHeight(this.element, this.#t);
  }
  get fontSize() {
    return this.#t.fontSize ?? ue().getStoreValue("grid.defaultFontSize");
  }
  get fontFamily() {
    return this.#t.fontFamily ?? ue().getStoreValue("grid.defaultFontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this.#l - 1,
      right: this.col + this.#f - 1
    };
  }
  get innerWidth() {
    return this.#C().getCellInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  get rendererInnerWidth() {
    return this.#C().getRendererInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  get mergeInfo() {
    return {
      rowSpan: this.#l,
      colSpan: this.#f
    };
  }
  get mergeMain() {
    return this.#o;
  }
  get row() {
    return this.#a;
  }
  get col() {
    return this.#i;
  }
  get bottom() {
    return this.row + this.mergeInfo.rowSpan - 1;
  }
  get right() {
    return this.col + this.mergeInfo.colSpan - 1;
  }
  /**
   * 이 visible 정보는 cell 병합으로 인해 숨겨진 셀의 표시 여부만 확인이 가능합니다.
   * 숨겨진 행, 열의 경우에는 IRGrid.getCellVisible 메서드를 사용해야 합니다.
   */
  get visible() {
    return this.#s;
  }
  get cellRenderer() {
    return this.#u;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.props, o = this.#C();
    return e !== !0 && t !== !0 && n !== "" && (o.editable || o.canBeClear);
  }
  get text() {
    const { text: e } = this.#t;
    return e ?? "";
  }
  get cellType() {
    return this.#g;
  }
  get value() {
    return this.#t.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this.#t.object;
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  get metaInfo() {
    return this.#t;
  }
  get props() {
    return this.#t;
  }
  get element() {
    return this.#c === null && (this.#c = this.#I()), this.#c;
  }
  get editable() {
    return !(this.#t.editable === !1 || this.#t.disabled || this.onCheckReadonly() || this.#C().editable === !1);
  }
  get cellInfo() {
    return this.#t;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(xs(W.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this.#s = !0, this.element.style.removeProperty("display"), this.render()) : (this.#s = !1, this.element.style.display = "none");
  }
  set isDragOver(e) {
    e ? this.element.classList.add("is-dragging") : this.element.classList.remove("is-dragging");
  }
  set text(e) {
    this.props = { text: e };
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  set cellInfo(e) {
    this.props = e;
  }
  set props(e) {
    Object.assign(this.#t, e), this.render();
  }
  set cellType(e) {
    this.#g = e;
  }
  set height(e) {
    e ? U(this.element, { [W.cellHeight]: `${e}px` }) : U(this.element, { [W.cellHeight]: "" });
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    e === 1 && (this.height = null), this.element.rowSpan = e, this.element.colSpan = t, this.#l = e, this.#f = t, this.render();
  }
  set mergeMain(e) {
    this.#o = e, this.visible = e === void 0;
  }
  set row(e) {
    this.#a = e, this.#c && this.element.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this.#i = e, this.#c && this.element.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this.#u = e, this.render();
  }
  /*
   * Private Methods
   */
  #m() {
    for (; this.element.lastChild; )
      this.element.lastChild.remove();
  }
  #n(...e) {
    this.mergeMain ? this.mergeMain.element.classList.remove(...e) : this.element.classList.remove(...e);
  }
  #d(e) {
    this.#h || (this.#h = document.createElement("span")), this.#h.className = e, this.element.appendChild(this.#h);
  }
  #r() {
    this.#h && (this.#h.remove(), this.#h = void 0);
  }
  #C() {
    if (this.#u instanceof X)
      return this.#u;
    if (typeof this.#u == "function") {
      const e = this.#u(this.row, this.col, this.#t);
      if (e instanceof X)
        return e;
      if (e instanceof HTMLElement)
        return new St(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  #x() {
    return this.#C().render(this.row, this.col, this.#t);
  }
  #p() {
    this.element.classList.add(Ie);
  }
  #b() {
    this.element.classList.remove(Ie);
  }
  #R(e) {
    this.element.style.left = `${e}px`;
  }
  #_() {
    this.element.style.removeProperty("left");
  }
  #v(e) {
    this.element.style.top = `${e}px`;
  }
  #S() {
    this.element.style.removeProperty("top");
  }
  #w(e, t) {
    t !== void 0 ? U(this.element, { [e]: `${t}px` }) : U(this.element, { [e]: void 0 });
  }
  #y() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: o
    } = this.#t;
    this.#w(W.cellTopPadding, e), this.#w(W.cellLeftPadding, t), this.#w(W.cellRightPadding, n), this.#w(W.cellBottomPadding, o);
  }
  #E() {
    Ce(this.element, "is-disabled", this.#t.disabled === !0), Ce(this.element, "is-asc", this.#t.sortOrder === "ASC"), Ce(this.element, "is-desc", this.#t.sortOrder === "DESC"), this.updateReadonlyStatus(), this.#t.isError ? this.#d(Sn) : this.#t.hasMemo ? this.#d(yn) : this.#h && this.#r(), this.element.style.textAlign = this.#t.horizontalAlign || "", this.element.style.verticalAlign = this.#t.verticalAlign || "", this.element.style.fontSize = this.fontSize, this.element.style.fontFamily = this.fontFamily, this.element.style.color = this.#t.textColor || "", this.element.style.backgroundColor = this.#t.backColor || "";
  }
  #I() {
    const e = document.createElement(this.#e);
    return e.rowSpan = this.#l, e.colSpan = this.#f, e.classList.add(En, this.#e === "th" ? In : Tn), e.setAttribute("data-row", this.#a.toString()), e.setAttribute("data-col", this.#i.toString()), e.setAttribute("data-type", this.#g), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      ee(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
    }, e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this.element.classList.add("is-selected"), this.onSelect(this));
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this.#t, e), t && Object.assign(this.#t, { text: t }), this.render();
  }
  release() {
    this.element.classList.remove("is-selected"), this.deactivate();
  }
  activate() {
    this.#o ? this.#o.element.classList.add("is-active") : this.element.classList.add("is-active");
  }
  deactivate() {
    this.#n("is-active");
  }
  updateReadonlyStatus() {
    Ce(this.element, "is-readonly", this.onCheckReadonly());
  }
  setStickyZIndex(e, t, n) {
    this.element.style.removeProperty(W.stickyCellZId), this.#b(), this.#S(), this.#_(), e !== null && (U(this.element, { [W.stickyCellZId]: bs[e] }), this.#p(), e >= j.lv5 && this.#v(t), (e === j.lv9 || e === j.lv7 || e === j.lv6 || e === j.lv4 || e === j.lv3) && this.#R(n));
  }
  replaceElement(e) {
    this.#m(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  render() {
    this.#c !== null && this.visible && (this.#m(), this.#E(), this.#y(), this.element.appendChild(this.#x()));
  }
  clear() {
    this.#t.value && delete this.#t.value, this.props = { text: "" }, this.onClear(this);
  }
  /*
   * Events
   */
  onClick(e) {
  }
  onDblClick(e) {
  }
  onRightClick(e, t) {
  }
  onSelect(e) {
  }
  onClear(e) {
  }
  onCheckReadonly() {
    return this.#t.readonly === !0;
  }
}
const se = 1, ie = 1;
class Ss {
  constructor({ grid: e, rowId: t, height: n, top: o, rowType: i }) {
    this._rowElement = null, this._top = -1, this._maxCellHeight = 0, this._stickyColumns = 0, this._height = 0, this._visible = !0, this._isCalledOnMounted = !1, this._grid = e, this._cells = [], this._rowType = i, this._rowId = t, this._maxCellHeight = n, this._isMounted = !1, this._height = n, this._top = o;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this.element.classList.contains(Te);
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this.element.classList.contains(je);
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  initRowElement() {
    const e = document.createElement("tr");
    U(e, {
      [W.cellHeight]: `${this._height}px`
    }), e.setAttribute("data-top", this._top.toString()), e.dataset.row = this._rowId.toString(), this._visible || (e.style.display = "none"), this._rowElement = e;
    for (const t of this._cells)
      e.appendChild(t.element), t.setStickyZIndex(this.getFreezedCellType(t.col), this._top, this._grid.getColumnLeft(t.col)), this.isMounted && t.render();
    return e;
  }
  get element() {
    return this._rowElement === null && (this._rowElement = this.initRowElement()), this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + se;
  }
  get bottom() {
    return this.visible ? this._top + this.heightWithBorder : this._top;
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
    return this._visible;
  }
  /*
   * Setters
   */
  set rowId(e) {
    this._rowElement && (this._rowElement.dataset.row = e.toString()), this._rowId = e, this._cells.forEach((t) => t.row = e), this.render();
  }
  set textColor(e) {
    this.element.style.color = e;
  }
  set height(e) {
    this._height = e, U(this.element, {
      [W.cellHeight]: `${e}px`
    }), this.onChangedHeight(this, e);
  }
  set top(e) {
    this._top = e, this.element.setAttribute("data-top", e.toString()), this.updateStickyStatus();
  }
  set visible(e) {
    this._visible = e, this._rowElement !== null && (e ? this.element.style.removeProperty("display") : this.element.style.display = "none");
  }
  /*
   * Public Methods
   */
  unmount() {
    this._isMounted = !1, this._rowElement && this.element.remove();
  }
  updateMaxCellHeight() {
    const e = this.height;
    this._maxCellHeight = this._cells.reduce((t, n) => Math.max(t, n.height ?? e), e);
  }
  /**
   * 해당 셀의 right columnId를 얻어옴. 병합된 경우 columnId보다 큰 값을 반환하게 된다.
   */
  getEndOfColumnId(e) {
    const { col: t, mergeInfo: n, mergeMain: o } = this._cells[e];
    return o ? o.right : t + n.colSpan - 1;
  }
  getStartOfColumnId(e) {
    const { mergeMain: t } = this._cells[e];
    return t ? t.col : e;
  }
  getMaxCellWidth(e, t) {
    return O(e, t).reduce((n, o) => {
      const i = this._cells[o];
      return i.visible && i.mergeInfo.colSpan === 1 ? Math.max(n, i.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  removeCells(e, t) {
    O(e, t + 1).forEach((o) => this._cells[o].element.remove());
    const n = 1 + t - e;
    this._cells.splice(e, n), O(e, this._cells.length).forEach((o) => {
      this._cells[o].col -= n, this._cells[o].render();
    });
  }
  /**
   * 현재 row에서 가장 위에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 top을 반환
   */
  getTopRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain && (e = Math.min(e, t.mergeMain.row));
    return e;
  }
  /**
   * 현재 row에서 가장 아래에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 bottom을 반환
   */
  getBottomRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain ? e = Math.max(e, t.mergeMain.bottom) : t.mergeInfo.rowSpan > 1 && (e = Math.max(e, t.bottom));
    return e;
  }
  getFreezedCellType(e) {
    const t = e < this._grid.getFreezedColumnCount();
    return this.isHeaderRow ? t ? j.lv9 : j.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? j.lv7 : j.lv6 : j.lv5 : t ? e < this._grid.headerColumns ? j.lv4 : j.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), this._rowElement && (this._rowElement.appendChild(e.element), e.setStickyZIndex(this.getFreezedCellType(e.col), this._top, this._grid.getColumnLeft(e.col)), e.render());
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    const n = this._cells[t].element;
    O(t, this._cells.length).forEach((o) => {
      this._cells[o].col += e.length, this._cells[o].render();
    }), this._cells.splice(t, 0, ...e), e.forEach((o) => {
      o.setStickyZIndex(this.getFreezedCellType(o.col), this._top, this._grid.getColumnLeft(o.col)), n.insertAdjacentElement("beforebegin", o.element), this.isMounted && o.render();
    });
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (ho(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${o}`);
    const [i, r, l, u] = e < n ? [e, t, n, o] : [n, o, e, t];
    this._cells = [
      ...this._cells.slice(0, i),
      ...this._cells.slice(l, u + 1),
      ...this._cells.slice(r + 1, l),
      ...this._cells.slice(i, r + 1),
      ...this._cells.slice(u + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._cells.splice(e, t - e + 1), i = e < n ? n - o.length : n;
    this._cells.splice(i, 0, ...o), this.reorderCells();
  }
  render() {
    this.visible && this._cells.forEach((e) => e.render());
  }
  getCell(e) {
    const t = this._cells[e];
    if (!t) throw new Error(`Not found cell ${this._rowId}, ${e}`);
    return t;
  }
  setRowInfo(e) {
    const {
      textData: t,
      cellMetaInfo: n
    } = e;
    this._cells.forEach((o, i) => o.updateCellMetaInfo(n, t == null ? void 0 : t[i]));
  }
  *getCellGenerator(e = 0, t = this._cells.length - 1) {
    for (let n = e; n <= t; ++n)
      yield this._cells[n];
  }
  setColumnVisible(e, t) {
    this._cells[e].visible = t;
  }
  getColumnVisible(e) {
    return this._cells[e].visible;
  }
  setAutoHeight(e, t) {
    const n = Math.ceil(this.rowInnerHeight), o = F(isNaN(n) ? 0 : n, e, t);
    return this.height !== o ? (this.height = o, !0) : !1;
  }
  mount(e, t) {
    this.isMounted || (e.insertAdjacentElement(t, this.element), this.render(), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
  }
  freeze(e = !1) {
    e && this.element.classList.add(je), this.element.classList.add(Te), this.updateStickyStatus();
  }
  isBetweenTop(e) {
    return e >= this.top && e <= this.bottom;
  }
  updateStickyStatus() {
    this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n), this._top, e), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + 1 : 0)), 0);
  }
  // row에 있는 모든 셀에 metaInfo 일괄 적용
  updateCellMetaInfo(e) {
    this._cells.forEach((t) => t.cellInfo = e);
  }
  freezeColumns(e) {
    this._stickyColumns = e, this.updateStickyStatus();
  }
  unfreeze() {
    if (this.isHeaderRow) throw new Error("Can not freeze header row!");
    this.element.classList.remove(Te), this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
  }
  onChangedHeight(e, t) {
  }
}
class ys {
  constructor(e, t, n) {
    this._rowList = [], this._visibleRowList = [], this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0, this.#e = n;
  }
  #e;
  getRow(e) {
    const t = this._rowList[e];
    if (!t) throw new Error(`Not found row ${e}`);
    return t;
  }
  addRow(e) {
    this._rowList.push(e), this._visibleRowList.push(e), this.updateRowHeight(e, "add"), e.rowId < this.freezedRows && this.updateFixedHeight();
  }
  getMaxCellWidth(e, t) {
    return this._rowList.reduce((n, o) => Math.max(n, o.getMaxCellWidth(e, t)), 0);
  }
  clearRows() {
    O(this.headerRows, this._rowList.length).forEach((e) => this._rowList[e].unmount()), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this.updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((o) => {
      const i = O(t).map((r) => n(o.rowId, e + r));
      o.insertCells(i, e);
    });
  }
  removeRows(e, t) {
    const n = this._rowList.splice(e, t - e + 1);
    n.length !== 0 && (n.forEach((o) => {
      this.updateRowHeight(o, "remove"), o.unmount();
    }), this.updateVisibleRowList(), this.updateFixedHeight());
  }
  removeColumns(e, t) {
    this._rowList.forEach((n) => n.removeCells(e, t));
  }
  insertRows(e, t) {
    let n = this._rowList[e].top;
    this._rowList.splice(e, 0, ...t), this.updateVisibleRowList();
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      i.top = n, this.updateRowHeight(i, "add"), n = i.bottom;
    }
    this.updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._rowList.splice(e, t - e + 1);
    o.forEach((r) => r.unmount());
    const i = e < n ? n - o.length : n;
    this._rowList.splice(i, 0, ...o), this.updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${o}`);
    const [i, r, l, u] = e < n ? [e, t, n, o] : [n, o, e, t], a = this._rowList.slice(i, r + 1), c = this._rowList.slice(l, u + 1);
    a.forEach((h) => h.unmount()), c.forEach((h) => h.unmount()), this._rowList = [
      ...this._rowList.slice(0, i),
      ...c,
      ...this._rowList.slice(r + 1, l),
      ...a,
      ...this._rowList.slice(u + 1)
    ], this.updateVisibleRowList();
  }
  isHeaderRowId(e) {
    return e < this.headerRows;
  }
  isInvalidRowId(e) {
    return e < 0 || e >= this._rowList.length;
  }
  addFixedHeight(e, t, n = 1) {
    t < this.headerRows && (this._headerRowsHeight += e.heightWithBorder * n), t < this.freezedRows && (this._freezedRowsHeight += e.heightWithBorder * n);
  }
  updateFixedHeight() {
    this._headerRowsHeight = 0, this._freezedRowsHeight = 0;
    let e = 0;
    const t = Math.min(this.length, this.freezedRows);
    for (const n of this._rowList)
      if (n.visible && (this.addFixedHeight(n, e), ++e), e >= t) break;
    this.#e.emit("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]);
  }
  updateCellReadonlyStatus() {
    this._rowList.forEach((e) => {
      const t = e.cellCounts;
      for (let n = 0; n < t; n++)
        e.getCell(n).updateReadonlyStatus();
    });
  }
  setRowHeight(e, t) {
    const n = this.getRow(e), o = n.height - t;
    o !== 0 && (n.height = t, this.changeRowHeight(n, o));
  }
  setRowVisible(e, t) {
    const n = this.getRow(e);
    t !== n.visible && (n.visible = t, this.updateRowHeight(n, t ? "show" : "hide"), this.updateVisibleRowList(), this.updateFixedHeight());
  }
  setRowVisibleBulk(e, t) {
    const { length: n } = t;
    for (let o = 0; o < n; o++) {
      const i = this._rowList[e + o], r = t[o];
      i.visible !== r && (this.updateRowHeight(i, r ? "show" : "hide"), i.visible = r);
    }
    this.updateVisibleRowList(), this.updateFixedHeight();
  }
  updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((e) => e.visible);
  }
  changeRowHeight(e, t) {
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t, this.#e.emit("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]));
  }
  updateRowHeight(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = e.height + se, o = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += o;
  }
  sort(e, t, n, o) {
    const i = this._rowList.slice(0, n), r = this._rowList.slice(n, o), l = this._rowList.slice(o);
    r.forEach((u) => u.unmount()), r.sort((u, a) => t === "ASC" ? e(u, a) : -e(u, a)), this._rowList = [
      ...i,
      ...r,
      ...l
    ], this.updateVisibleRowList();
  }
  unfreezeAllRows() {
    let e = this.headerRows + 1, t = this._rowList[e];
    for (; t && t.isFreezed; )
      t.unfreeze(), t = this._rowList[++e];
  }
  freezeRowsByCount(e) {
    let t = this.headerRows;
    for (let n = 0; n < e; n++) {
      const o = this._rowList[t];
      if (!o) break;
      o.freeze(), t++;
    }
  }
  freezeRows(e) {
    this._freezedRows = e, this.unfreezeAllRows(), this.freezeRowsByCount(e), this.updateFixedHeight();
  }
  renderRows() {
    this._visibleRowList.forEach((e) => e.render());
  }
  getTopByRowId(e) {
    return this.getRow(e).top;
  }
  getBottomByRowId(e) {
    return this.getRow(e).bottom;
  }
  getNextRowId() {
    return this._rowList.length;
  }
  getCell(e, t) {
    return this.getRow(e).getCell(t);
  }
  // interface를 위해 추가함
  cell(e, t) {
    return this.getCell(e, t);
  }
  getRowHeight(e) {
    return this.getRow(e).height;
  }
  getRowVisible(e) {
    return this.getRow(e).visible;
  }
  getRowCount() {
    return this._rowList.length;
  }
  runFuncEachRow(e, t, n) {
    const o = t ?? 0, i = n ?? this.length;
    for (let r = o; r < i; r++)
      e(this._rowList[r]);
  }
  getStartOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getTopRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  getEndOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getBottomRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  /**
   * 현재 Column에서 가장 오른쪽에 있는 ColumnId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 Right을 반환
   */
  getEndColumnId(e) {
    return this.reduceRows({
      initValue: e,
      func: (t, n) => Math.max(t, n.getEndOfColumnId(e))
    });
  }
  getEndOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, o) => Math.max(n, o.getEndOfColumnId(e))
    });
    return t === e ? t : this.getEndOfColumnId(t);
  }
  getStartOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, o) => Math.min(n, o.getStartOfColumnId(e))
    });
    return t === e ? t : this.getStartOfColumnId(t);
  }
  findRowOrNull(e, t, n) {
    const o = t < e + this.freezedRowsHeight ? {
      startIndex: 0,
      endIndex: n,
      curIndex: Math.floor(n / 2),
      scrollTop: e
    } : {
      startIndex: 0,
      endIndex: this.length,
      curIndex: Math.floor(this.length / 2),
      scrollTop: 0
    };
    let i = this.getRow(o.curIndex);
    for (; !(t >= o.scrollTop + i.top && t <= o.scrollTop + i.bottom); ) {
      if (t < o.scrollTop + i.top) {
        if (o.endIndex === o.curIndex)
          return null;
        o.endIndex = o.curIndex;
      } else {
        if (o.startIndex === o.curIndex)
          return null;
        o.startIndex = o.curIndex;
      }
      o.curIndex = Math.floor((o.startIndex + o.endIndex) / 2), i = this.getRow(o.curIndex);
    }
    return i;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let o = e.initValue;
    for (let i = t; i < n; i++)
      o = e.func(o, this._rowList[i]);
    return o;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const i = n + Math.floor((o - n) / 2), r = t[i];
      if (r.isBetweenTop(e))
        return r;
      e < r.top ? o = i - 1 : n = i + 1;
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
}
const _e = -1, Es = [
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
class Is {
  #e;
  #t;
  #a;
  #i;
  #l;
  #f;
  #s;
  #o;
  #u = /* @__PURE__ */ new Set();
  #c = [];
  #h = _e;
  constructor(e, t, n, o, i, r) {
    this.#e = e, this.#t = t, this.#s = n, this.#a = o, this.#o = i, this.#l = r, this.#f = new Se(e), this.#i = document.createElement("tr"), this.#i.className = Ln, this.#i.dataset.hidden = "true", U(this.#i, {
      [W.emptyRowHeight]: "0"
    }), this.#a.appendChild(this.#i), e.addGlobalEventListener(i, "scroll", () => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll"), this.forceRunTasks();
    });
  }
  renderTask() {
    const e = new Set(this.#u);
    this.#u.clear(), this.#h = _e;
    for (const t of Es)
      if (!(!e.has(t) || t === "nothing"))
        try {
          this[t].call(this);
        } catch (n) {
          console.error(t, n);
        }
    this.#c.forEach((t) => t()), this.#c.length = 0;
  }
  forceRunTasks() {
    this.#h !== _e && cancelAnimationFrame(this.#h), this.renderTask();
  }
  addTask(e) {
    return this.#u.add(e), this.#h === _e && (this.#h = requestAnimationFrame(() => this.renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  getActualBodyRowsInfo() {
    const e = this.#e.getRowCount() - 1, t = Math.min(
      this.#e.getFreezedRowCount(),
      e
    ), { fixedRowHeight: n } = this.#e, { scrollTop: o, clientHeight: i } = this.#o, r = this.#e.getRowByTop(n + o + 1) ?? this.#e.firstRow, l = this.#e.getRowByTop(o + i) ?? this.#e.lastRow, u = O(0, t).asList();
    if (!r || !l) return { emptyRowHeight: 0, viewRowList: u };
    const a = r.getTopRowId(), c = l.getBottomRowId(), h = this.#e.getRow(Math.max(a - 2, t)), g = this.#e.getRow(Math.min(c + 2, e));
    return {
      emptyRowHeight: h.top - n,
      // viewport row 영역 list에 추가
      viewRowList: u.concat(O(h.rowId, g.rowId + 1).asList())
    };
  }
  getGridRow(e) {
    const t = parseInt(e.dataset.row ?? "", 10);
    return t !== t ? null : this.#e.getRow(t);
  }
  virtualRender() {
    const { emptyRowHeight: e, viewRowList: t } = this.getActualBodyRowsInfo(), n = new Set(t), o = this.#e.getFreezedRowCount(), { headerRows: i } = this.#e;
    let r = this.#a.lastElementChild;
    for (; r; ) {
      const a = this.getGridRow(r);
      r = r.previousElementSibling, a && !n.has(a.rowId) && a.unmount();
    }
    e === 0 ? this.#i.dataset.hidden = "true" : (this.#i.dataset.hidden = "false", U(this.#i, {
      [W.emptyRowHeight]: `${e}px`
    }));
    let l = null, u = !1;
    for (const a of t) {
      const c = this.#e.getRow(a);
      if (a < o ? !c.isFreezed && c.freeze(a < i) : u === !1 && (l === null ? this.#a.insertAdjacentElement("afterbegin", this.#i) : l.insertAdjacentElement("afterend", this.#i), u = !0, l = this.#i), c.isMounted) {
        l = c.element;
        continue;
      }
      c.visible && (l === null ? c.mount(this.#a, "afterbegin") : c.mount(l, "afterend"), l = c.element);
    }
  }
  updateRowsStickyLeft() {
    for (let e = 0; e < this.#e.getRowCount(); e++)
      this.#e.getRow(e).updateStickyStatus();
  }
  updateSelection() {
    this.#l.update();
  }
  updateLeft() {
    const e = this.#e.getColCount();
    let t = 0, n = 0;
    for (; t < e; ) {
      const o = this.#e.getColumn(t);
      o.left = n, o.visible && (n = o.right), ++t;
    }
  }
  updateTop() {
    const e = this.#e.getRowCount();
    let t = 0, n = 0;
    for (; t < e; ) {
      const o = this.#e.getRow(t);
      o.top = n, o.visible && (n = o.bottom), ++t;
    }
  }
  updateColumnId() {
    const e = this.#e.getColCount();
    let t = 0;
    for (; t < e; ) {
      const n = this.#e.getColumn(t);
      n.columnId = t, ++t;
    }
    this.#e.render();
  }
  updateRowId() {
    const e = this.#e.getRowCount(), t = this.#e.getFreezedRowCount();
    let n = 0;
    for (; n < e; ) {
      const o = this.#e.getRow(n);
      o.rowId = n, o.isFreezed && n >= t ? o.unfreeze() : !o.isFreezed && n < t && o.freeze(), o.render(), ++n;
    }
  }
  adjustSelection() {
    const e = this.#t.selectionRangeState.value;
    if (!e) return this.#e.releaseCells();
    const t = this.#f.adjustRange(e.range);
    if (!t) return this.#e.releaseCells();
    this.#e.select(this.#f.extendRange(t));
  }
  updateSelectionByScroll() {
    this.#l.updateScroll();
  }
  resizeGridWrapperHeight() {
    this.#s.style.height = `${this.#e.height}px`;
  }
  generateScrollBarClass() {
    this.#e.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this.#c.push(e);
  }
  get isScheduled() {
    return this.#u.size > 0;
  }
}
class et {
  #e;
  #t = 0;
  #a = 0;
  #i = 0;
  #l = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this.#e = document.createElement("col"), this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this.#a;
  }
  get left() {
    return this.#t;
  }
  get width() {
    return this.#i;
  }
  get widthWithBorder() {
    return this.#i + ie;
  }
  get colElement() {
    return this.#e;
  }
  get visible() {
    return this.#l;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this.#l = e, e ? this.#e.style.removeProperty("display") : this.#e.style.display = "none";
  }
  set columnId(e) {
    this.#a = e, this.#e.dataset.column = e.toString();
  }
  set left(e) {
    this.#t = e, this.#e.dataset.left = e.toString();
  }
  set width(e) {
    this.#i = e, this.#e.style.width = `${this.widthWithBorder}px`, this.#e.dataset.width = e.toString();
  }
  remove() {
    this.#e.remove();
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class Ts {
  constructor(e, t, n) {
    this._columnsList = [], this._visibleColumnsList = [], this._columnsWidth = 0, this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0, this._colGroup = document.createElement("colgroup"), this._rowHeaderColumns = e, this._freezedColumns = t, this.#e = n;
  }
  #e;
  addColumn(e) {
    const t = new et({
      columnId: this._columnsList.length,
      width: e,
      left: this._columnsWidth
    });
    return this._colGroup.appendChild(t.colElement), this._columnsList.push(t), this._visibleColumnsList.push(t), this.updateColumnWidth(t, "add"), this.addFixedWidth(t), t;
  }
  isHeaderColumnId(e) {
    return e < this.headerColumns;
  }
  isInvalidColumnId(e) {
    return e < 0 || e >= this._columnsList.length;
  }
  updateVisibleColumnList() {
    this._visibleColumnsList = this._columnsList.filter((e) => e.visible);
  }
  updateColumnWidth(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = t === "add" || t === "show" ? e.widthWithBorder : -e.widthWithBorder;
    this._columnsWidth += n;
  }
  removeColumns(e, t) {
    this._columnsList.splice(e, t - e + 1).forEach((o) => {
      this.updateColumnWidth(o, "remove"), o.remove();
    }), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this.#e.emit("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t, n) {
    const o = this.getColumn(e), i = o.left, r = O(t).map((l) => new et({
      columnId: e + l,
      width: n,
      left: i + (n + ie) * l
    }));
    this._columnsList.splice(e, 0, ...r), r.forEach((l) => {
      o.colElement.insertAdjacentElement("beforebegin", l.colElement), this.updateColumnWidth(l, "add");
    }), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  addFixedWidth(e, t = 1) {
    e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth += e.widthWithBorder * t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth += e.widthWithBorder * t);
  }
  updateFixedWidth() {
    this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0;
    let e = 0;
    const t = Math.min(this.freezedColumns, this._columnsList.length);
    for (; e < t; ) {
      const n = this.getColumn(e);
      n.visible && this.addFixedWidth(n), ++e;
    }
    this.#e.emit("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]);
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), o = n.width - t;
    o !== 0 && (n.width = t, this.changeColumnWidth(n, o));
  }
  setColumnVisible(e, t) {
    const n = this.getColumn(e);
    n.visible !== t && (n.visible = t, this.updateColumnWidth(n, t ? "show" : "hide"), this.updateVisibleColumnList(), this.updateFixedWidth());
  }
  getColumnLeft(e) {
    return this.getColumn(e).left;
  }
  getColumnRight(e) {
    return this.getColumn(e).right;
  }
  getColumnWidth(e) {
    return this.getColumn(e).width;
  }
  getColumnVisible(e) {
    return this.getColumn(e).visible;
  }
  getColCount() {
    return this._columnsList.length;
  }
  getColumn(e) {
    const t = this._columnsList[e];
    if (!t) throw new Error("No column");
    return t;
  }
  updateColumnsLeftFrom(e) {
    O(e, this._columnsList.length).reduce((t, n) => {
      const o = this._columnsList[n];
      return o.left = t, o.visible ? t + o.width + ie : t;
    }, this.getColumn(e).left);
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
}
function Ls({ colgroup: s }) {
  const e = document.createElement("table"), t = document.createElement("div"), n = document.createElement("tbody");
  return t.className = kn, e.classList.add(Mn), e.appendChild(s), e.appendChild(n), t.appendChild(e), {
    table: e,
    wrapper: t,
    tbody: n
  };
}
const ks = 1e4;
function Ms({ rowManager: s, colManager: e, commandManager: t, cursorManager: n }) {
  const o = te("textarea", Hn);
  let i = null;
  const r = {
    focus: u,
    runEditMode: C,
    setPosition: c,
    mountElement(d) {
      p(), d.appendChild(o);
    },
    hide() {
    },
    onEditDone(d, _, E, f, S, R) {
    },
    onEditKeyDown(d, _, E, f) {
    },
    onEnterOnEdit(d, _) {
    }
  }, l = Ct(r);
  return r;
  function u() {
    o.focus({ preventScroll: !0 });
  }
  function a(d) {
    o.value = d;
  }
  function c(d, _, E) {
    const f = s.getRow(d.row), S = e.getColumn(d.col), R = d.row < s.freezedRows ? _ : 0, T = d.col < e.freezedColumns ? E : 0;
    o.style.top = `${f.top + R}px`, o.style.left = `${S.left + T}px`;
  }
  function h(d) {
    o.style.width = `${d.element.offsetWidth - 1}px`, o.style.height = `${d.element.offsetHeight - 1}px`;
  }
  function g(d) {
    const _ = d === "" ? W.zLevel1 : `calc(${d} + 1000)`;
    o.style.zIndex = _;
  }
  function C(d, _, E, f = !1, S = !1) {
    i = {
      cell: d,
      beforeText: d.props.text ?? "",
      cancelEndEdit: !1
    }, f || a(i.beforeText), o.maxLength = d.props.maxLength ?? ks, g(d.zIndexVariant), c(d, _, E), h(d), u(), o.scrollTo(0, o.scrollHeight), S && o.setSelectionRange(0, o.value.length), l.create();
  }
  function I() {
    a(""), i = null, o.style.removeProperty("height"), o.style.removeProperty("width"), o.style.removeProperty("z-index");
  }
  function p() {
    o.addEventListener("keydown", L), o.addEventListener("blur", v), o.addEventListener("keyup", y);
  }
  function y() {
    i || a("");
  }
  function L(d) {
    if (!i) return;
    const { beforeText: _, cell: E } = i;
    if (d.key === "Escape") {
      m(o.value, !1, d.key);
      return;
    }
    if (d.key === "Enter" && d.altKey && E.metaInfo.editSingleLine !== !0) {
      d.preventDefault();
      const f = o.selectionStart;
      try {
        i.cancelEndEdit = !0, o.blur(), o.value = [
          o.value.substring(0, f),
          o.value.substring(o.selectionEnd)
        ].join(`
`), u(), o.setSelectionRange(f + 1, f + 1, "backward"), r.onEditKeyDown(d, E.row, E.col, E.metaInfo);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (x(d)) {
      d.preventDefault(), m(o.value, _ !== o.value, d.key), d.key === "Enter" ? r.onEnterOnEdit(d.ctrlKey, d.shiftKey) : w(d.key, d.shiftKey);
      return;
    }
    r.onEditKeyDown(d, E.row, E.col, E.metaInfo);
  }
  function v() {
    !i || i.cancelEndEdit || (m(o.value, i.beforeText !== o.value, ""), l.destroy());
  }
  function m(d, _, E) {
    if (!i) return;
    const { cell: f, beforeText: S } = i;
    if (I(), _ && f.checkInputValidation(d)) {
      const R = { text: d, beforeText: S };
      f.props.gridStore.hook.emit("cellEditDoneBeforeRender", [f.row, f.col, R]);
      const T = new re(t.commandContext, [
        f.row,
        f.col,
        { text: R.text }
      ]);
      T.onUndo = () => {
        r.onEditDone(f, _, S, E, o.selectionStart, o.selectionEnd);
      }, T.onExecute = () => {
        r.onEditDone(f, _, S, E, o.selectionStart, o.selectionEnd);
      }, t.pushCommandBlock(new q(
        `Edit cell (${f.row}, ${f.col}) `,
        T
      )), f.props = { text: R.text };
    }
    r.onEditDone(f, _, S, E, o.selectionStart, o.selectionEnd);
  }
  function x(d) {
    return d.key === "ArrowLeft" && o.selectionStart === 0 && o.selectionEnd === 0 || d.key === "ArrowUp" && o.selectionStart === 0 && o.selectionEnd === 0 || d.key === "ArrowRight" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || d.key === "ArrowDown" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || d.key === "Tab" ? !0 : d.key === "Enter" && !d.altKey && !d.ctrlKey && !d.shiftKey;
  }
  function w(d, _) {
    switch (d) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return _ ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
function Hs(s) {
  return s.top === s.bottom && s.left === s.right;
}
function zs(s) {
  return s.top > s.bottom || s.left > s.right;
}
function Ds(s, e) {
  const t = [], n = new le(s, e), o = ({ top: a, left: c, bottom: h, right: g }) => t.some(({ mergeArea: C }) => c <= C.right && g >= C.left && a <= C.bottom && h >= C.top) === !1, i = (a, c) => {
    let h = 0;
    for (let g = a; g <= c; ++g)
      s.getRowVisible(g) && ++h;
    return h;
  }, r = (a, c) => {
    let h = 0;
    for (let g = a; g <= c; ++g)
      e.getColumnVisible(g) && ++h;
    return h;
  }, l = ({ top: a, left: c, bottom: h, right: g }) => {
    for (let C = a; C <= h; ++C)
      if (s.getRowVisible(C) === !1) return !0;
    for (let C = c; C <= g; ++C)
      if (e.getColumnVisible(C) === !1) return !0;
    return !1;
  }, u = (a, c) => {
    const h = s.getCell(a, c), g = t.indexOf(h);
    return g < 0 ? null : t[g];
  };
  return {
    isValidatedMerging: o,
    getMergedRowHeight(a, c) {
      const h = (c - a) * se;
      let g = 0;
      for (let C = a; C <= c; ++C)
        s.getRowVisible(C) && (g += s.getRowHeight(C));
      return g + h;
    },
    mergeCells(a) {
      if (zs(a))
        throw new Error("Invalid range");
      if (o(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (Hs(a))
        throw new Error("Could not merging with single cell!");
      const c = s.getCell(a.top, a.left);
      c.height = this.getMergedRowHeight(a.top, a.bottom), c.mergeInfo = { rowSpan: i(a.top, a.bottom), colSpan: r(a.left, a.right) }, t.push(c), s.getRow(a.top).updateMaxCellHeight();
      for (const g of n.getSelectionGenerator(a))
        (g.row !== a.top || g.col !== a.left) && (g.mergeMain = c, g.metaInfo.text = "");
    },
    splitCells(a, c) {
      const h = u(a, c);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      for (const g of n.getSelectionGenerator(h.mergeArea))
        g.mergeMain = void 0, g.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(a, c), s.getRow(a).updateMaxCellHeight();
    },
    isMerged(a, c) {
      return !o({ top: a, left: c, bottom: a, right: c });
    },
    *getMergedCellGenerator(a) {
      for (const c of n.getSelectionGenerator(a))
        (c.mergeInfo.rowSpan > 1 || c.mergeInfo.colSpan > 1) && (yield c);
    },
    removeMergeCell(a, c) {
      const h = u(a, c);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      t.splice(t.indexOf(h), 1);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: h } of t)
        if (h.top < a && h.bottom >= a && h.bottom <= c || h.bottom > c && h.top >= a && h.top <= c || h.top < a && h.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: h } of t)
        if (h.left < a && h.right >= a && h.right <= c || h.right > c && h.left >= a && h.left <= c || h.left < a && h.right > c)
          return !0;
      return !1;
    },
    checkCanInsertRow(a) {
      for (const { mergeArea: c } of t)
        if (c.top < a && c.bottom >= a)
          return !1;
      return !0;
    },
    checkCanInsertColumn(a) {
      for (const { mergeArea: c } of t)
        if (c.left < a && c.right >= a)
          return !1;
      return !0;
    }
  };
}
class As {
  #e = ro();
  // HTML Elements
  #t;
  #a;
  #i;
  #l;
  #f;
  #s;
  #o;
  #u;
  #c;
  constructor(e) {
    const t = ue();
    this.#a = {
      "grid.paddingTop": t.getStoreValue("grid.paddingTop"),
      "grid.paddingBottom": t.getStoreValue("grid.paddingBottom"),
      "grid.paddingLeft": t.getStoreValue("grid.paddingLeft"),
      "grid.paddingRight": t.getStoreValue("grid.paddingRight"),
      "grid.defaultRowHeight": t.getStoreValue("grid.defaultRowHeight"),
      "grid.defaultColumnWidth": t.getStoreValue("grid.defaultColumnWidth"),
      "grid.defaultRowMinSize": t.getStoreValue("grid.defaultRowMinSize"),
      "grid.defaultRowMaxSize": t.getStoreValue("grid.defaultRowMaxSize"),
      "grid.defaultColumnMinSize": t.getStoreValue("grid.defaultColumnMinSize"),
      "grid.defaultColumnMaxSize": t.getStoreValue("grid.defaultColumnMaxSize"),
      "grid.defaultDropdownWidth": t.getStoreValue("grid.defaultDropdownWidth"),
      "grid.defaultFontFamily": t.getStoreValue("grid.defaultFontFamily"),
      "grid.defaultFontSize": t.getStoreValue("grid.defaultFontSize")
    }, this.#s = e.gridCommandManager, this.#i = new ys(e.headerRowCount, e.freezedRowCount, this.#e), this.#l = new Ts(e.headerColumnCount, e.freezedColumnCount, this.#e), this.#c = e.cursorManager, this.#f = Ds(this.#i, this.#l), this.#o = Ms({
      rowManager: this.#i,
      colManager: this.#l,
      commandManager: this.#s,
      cursorManager: this.#c
    }), this.#u = e.gridStateContext, this.#t = Ls({
      colgroup: this.#l.colgroup
    });
  }
  // theme
  getThemeValue(e) {
    return this.#a[e];
  }
  // shared utility
  get elements() {
    return this.#t;
  }
  get tableElement() {
    return this.#t.table;
  }
  get hook() {
    return this.#e;
  }
  get mergeHandler() {
    return this.#f;
  }
  get rowManager() {
    return this.#i;
  }
  get columnManager() {
    return this.#l;
  }
  get commandManager() {
    return this.#s;
  }
  /**
   * 가능하면 쓰지 말 것
   * @deprecated
   */
  get commandContext() {
    return this.#s.commandContext;
  }
  get gridTextarea() {
    return this.#o;
  }
  get gridStateContext() {
    return this.#u;
  }
  get cursorManager() {
    return this.#c;
  }
}
class Lt extends V {
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
}
class kt extends V {
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
}
class K {
  constructor() {
    this._mountRollbackStack = [], this._isMounted = !1;
  }
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  mount(e) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._mountTask(e), this._isMounted = !0;
    } catch (t) {
      console.error("Plugin mount error!", t), this.unmount();
    }
  }
  unmount() {
    if (!this.isMounted)
      throw new Error("Already unmounted plugin!");
    try {
      for (const e of this._mountRollbackStack)
        e();
      this._mountRollbackStack.length = 0, this._isMounted = !1;
    } catch (e) {
      console.error("Plugin unmount error!", e);
    }
  }
  get isMounted() {
    return this._isMounted;
  }
}
const Ws = 12, Os = 4, Ns = {
  "col-resizing": Ae,
  "row-resizing": We
}, tt = {
  "col-resizing": An,
  "row-resizing": Wn
}, nt = (s) => s.mergeInfo ? s.col + s.mergeInfo.colSpan - 1 : s.col, ot = (s) => s.mergeInfo ? s.row + s.mergeInfo.rowSpan - 1 : s.row, Fs = 500, st = 4;
class Mt extends K {
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { enabledColResizer: o, enabledRowResizer: i } = this._options, { elements: r, gridStateContext: l } = t, u = (g, C, I) => {
      e.commandManager.pushCommandBlock(new q(g, new Lt(e, [C, I])));
    }, a = (g, C, I) => {
      e.commandManager.pushCommandBlock(new q(g, new kt(e, [C, I])));
    };
    (function() {
      const C = document.createElement("div");
      let I = !1, p = null, y = 0;
      const L = () => {
        n.classList.remove(Ae), n.classList.remove(We), n.classList.remove("is-resizing"), p && n.removeEventListener("mousedown", p);
      }, v = (w, d) => {
        p && n.removeEventListener("mousedown", p), n.classList.remove(Ae), n.classList.remove(We), n.classList.add(Ns[d]), n.classList.add("is-resizing");
        let _ = 0, E = 0, f = 0, S = 0, R = 0;
        const T = () => w.col < e.getFreezedColumnCount() ? e.scrollLeft + S : S, b = () => w.row < e.getFreezedRowCount() ? e.scrollTop + S : S;
        p = (D) => {
          const N = (/* @__PURE__ */ new Date()).getTime();
          if (l.setMode({
            mode: d,
            contextParam: {}
          }), N - y <= Fs) {
            d === "col-resizing" ? e.commandManager.doRecording("Autosize column", () => {
              e.autoSizeColumn(w.col);
            }) : e.commandManager.doRecording("Autosize row", () => {
              e.autoSizeRow(w.row);
            }), y = 0;
            return;
          }
          I = !0, y = N, w.element.classList.add(tt[d]), d === "col-resizing" ? (C.className = zn, R = e.getColumnWidth(nt(w)), _ = D.pageX, E = _ - R + e.minColWidth, f = _ - R + e.maxColWidth, S = e.getColumnLeft(w.col) + e.getCellWidth(w), C.style.top = "0px", C.style.width = "0px", C.style.height = `${e.height}px`, C.style.left = `${T()}px`) : (C.className = Dn, R = e.getRowHeight(ot(w)), _ = D.pageY, E = _ - R + e.minRowHeight, f = _ - R + e.maxRowHeight, S = e.getRow(w.row).top + e.getCellHeight(w), C.style.top = `${b()}px`, C.style.width = `${e.width}px`, C.style.height = "0px", C.style.left = "0px"), r.wrapper.appendChild(C), e.addGlobalEventListener(document, "keydown", H), e.addGlobalEventListener(document, "mouseup", M), e.addGlobalEventListener(document, "mousemove", k);
        };
        const k = (D) => {
          if (d === "col-resizing") {
            const N = F(D.pageX, E, f) - _;
            C.style.left = `${T() + N}px`;
          } else {
            const N = F(D.pageY, E, f) - _;
            C.style.top = `${b() + N}px`;
          }
        }, M = (D) => {
          if (d === "col-resizing") {
            const A = F(D.pageX, E, f) - _;
            if (Math.abs(A) > st) {
              const Q = nt(w), Z = R + A;
              u("Resize column", Q, Z), e.setColumnWidth(Q, Z), y = 0;
            }
          } else {
            const A = F(D.pageY, E, f) - _;
            if (Math.abs(A) > st) {
              const Q = ot(w), Z = R + A;
              a("Resize row", Q, Z), e.setRowHeight(Q, Z), y = 0;
            }
          }
          z(), l.setIdle();
          const N = c(D);
          if (!N) return;
          const B = h(D, N);
          B !== null && v(N, B);
        };
        function z() {
          I = !1, C.remove(), L(), w.element.classList.remove(tt[d]), document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", H);
        }
        const H = (D) => {
          D.key === "Escape" && z();
        };
        e.addGlobalEventListener(n, "mousedown", p);
      }, m = (w) => {
        if (I) return;
        const d = c(w);
        if (d === null) {
          L();
          return;
        }
        const _ = h(w, d);
        _ === null ? L() : v(d, _);
      }, x = (w) => {
        L();
      };
      e.addGlobalEventListener(n, "mousemove", m), e.addGlobalEventListener(n, "mouseout", x);
    })();
    const c = (g) => {
      const C = Y("th", "tr", g.target);
      if (!C) return null;
      const [I, p] = [
        parseInt(C.getAttribute("data-row") || "-1"),
        parseInt(C.getAttribute("data-col") || "-1")
      ];
      return e.cell(I, p);
    }, h = (g, C) => C.cellType === "body-cell" ? null : o && Math.abs(e.getCellWidth(C) - g.offsetX) <= Ws ? "col-resizing" : i && Math.abs(e.getCellHeight(C) - g.offsetY) <= Os ? "row-resizing" : null;
  }
  get pluginKey() {
    return "resizer";
  }
}
function Ji(s) {
  return new Mt(s);
}
const Bs = 15, xe = 120;
class Ht extends K {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t;
    let i = null, r = null, l, u = null;
    const a = (p, y) => {
      const L = [
        p.row,
        p.bottom,
        y.row,
        y.bottom
      ], v = [
        p.col,
        p.right,
        y.col,
        y.right
      ], m = {
        top: Math.min(...L),
        left: Math.min(...v),
        bottom: Math.max(...L),
        right: Math.max(...v)
      };
      pt(m, u) || (u = m, e.select(m, i), this.onChangedSelection(m));
    };
    e.addGlobalEventListener(n, "mousedown", (p) => {
      if (!ee(p.target) || p.button !== 0 || p.target instanceof HTMLTextAreaElement || Y(".button", "tr", p.target)) return;
      const y = Y("td", "tr", p.target);
      if (!y)
        return;
      const L = J(y), v = e.activeCell;
      p.shiftKey && v ? (i = v, a(v, e.cell(L.row, L.col))) : (i = e.cell(L.row, L.col), e.selectRange(i.row, i.col, i.bottom, i.right, i), this.onChangedSelection({ top: i.row, left: i.col, bottom: i.bottom, right: i.right })), r = i, o.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function c(p, y) {
      const L = y.closest("td");
      if (!L) return;
      const v = J(L);
      r = e.cell(v.row, v.col), a(p, r);
    }
    function h(p, y) {
      const { offsetX: L, offsetY: v, target: m } = p;
      if (!ee(m)) return null;
      const x = L + m.scrollLeft, w = v + m.scrollTop, d = x > e.width ? e.width : x, _ = w > e.height ? e.height : w, E = e.findCellOrNull(_, d);
      E && (r = E, a(y, E));
    }
    function g(p) {
      const y = p.clientWidth + p.scrollLeft, L = p.clientHeight + p.scrollTop, v = p.scrollTop + e.headerHeight, m = p.scrollLeft + e.headerWidth, x = L > e.height ? e.height : L, w = y > e.width ? e.width : y, d = e.findCellOrNull(v, m), _ = e.findCellOrNull(x, w);
      return {
        top: (d == null ? void 0 : d.row) ?? 0,
        bottom: (_ == null ? void 0 : _.row) ?? 0,
        left: (d == null ? void 0 : d.col) ?? 0,
        right: (_ == null ? void 0 : _.col) ?? 0
      };
    }
    function C(p, y, L, v) {
      l = window.setTimeout(() => {
        if (!i) return;
        const w = m(), d = x(), { top: _, bottom: E, left: f, right: S } = g(p), R = {
          top: p.scrollTop,
          left: p.scrollLeft,
          targetRow: L,
          targetCol: v
        };
        w && (y.startsWith("t") ? (R.top -= e.getRowHeight(_), R.targetRow = _) : (R.top += e.getRowHeight(E), R.targetRow = E)), d && (y.endsWith("l") ? (R.left -= e.getColumnWidth(f), R.targetCol = f) : (R.left += e.getColumnWidth(S), R.targetCol = S)), (w || d) && (p.scrollTo({ top: R.top, left: R.left }), a(i, e.cell(R.targetRow, R.targetCol)), C(p, y, R.targetRow, R.targetCol));
      }, Bs);
      function m() {
        return y.startsWith("t") ? p.scrollTop > 0 : y.startsWith("b") ? p.scrollHeight - (p.scrollTop + p.clientHeight) > 0 : !1;
      }
      function x() {
        return y.endsWith("l") ? p.scrollLeft > 0 : y.endsWith("r") ? p.scrollWidth - (p.scrollLeft + p.clientWidth) > 0 : !1;
      }
    }
    function I() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (p) => {
      i && ee(p.target) && (p.target === n ? h(p, i) : c(i, p.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      i && (I(), i = null, r = null, o.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: p, clientY: y, clientX: L }) => {
      if (!i || !r || !ee(p)) return;
      const { top: v, bottom: m, left: x, right: w } = p.getBoundingClientRect();
      if (v < y && m > y && x < L && w > L) return;
      C(p, `${d()}${_()}`, r.row, r.col);
      function d() {
        return y - v <= xe ? "t" : m - y <= xe ? "b" : "";
      }
      function _() {
        return L - x <= xe ? "l" : w - L <= xe ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (p) => {
      i && ee(p.currentTarget) && I();
    }), e.onDoubleClickCell = (p) => o.isIdle && e.doEditMode(p, !1, !0), e.onColumnClick = (p) => e.selectColumn(p.col), e.onRowClick = (p) => e.selectRow(p.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function Qi() {
  return new Ht();
}
class zt extends V {
  _getUndoContext() {
    const [e] = this._args, t = [], n = new le(this._instance, this._instance);
    for (const o of n.getSelectionGenerator(e))
      this._instance.onClearCellCheck(o) && t.push({
        row: o.row,
        col: o.col,
        text: o.text
      });
    return { textSnapshot: t };
  }
  _undo() {
    const { textSnapshot: e } = this._undoContext;
    e.forEach(({ row: t, col: n, text: o }) => {
      this._instance.setCell(t, n, { text: o }), this._instance.onEditCellDone(this._instance.cell(t, n), !0, "", "", 0, 0);
    });
  }
  _execute() {
    const [e] = this._args;
    this._instance.clearCells(e);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Dt(s, e) {
  const t = (f, S, R) => {
    const T = s.headerRows;
    let b = R, k = f;
    for (; b !== 0; ) {
      const M = s.cell(k, S), H = (M.mergeMain ?? M).row - 1;
      if (H < T) break;
      s.getRowVisible(H) && ++b, k = H;
    }
    return k;
  }, n = (f, S, R) => {
    const T = s.getRowCount() - 1;
    let b = R, k = f;
    for (; b !== 0; ) {
      const M = s.cell(k, S), H = (M.mergeMain ?? M).bottom + 1;
      if (H > T) break;
      s.getRowVisible(H) && --b, k = H;
    }
    return k;
  }, o = (f, S, R) => {
    const T = s.headerColumns;
    let b = R, k = S;
    for (; b !== 0; ) {
      const M = s.cell(f, k), H = (M.mergeMain ?? M).col - 1;
      if (H < T) break;
      s.getColumnVisible(H) && ++b, k = H;
    }
    return k;
  }, i = (f, S, R) => {
    const T = s.getColCount() - 1;
    let b = R, k = S;
    for (; b !== 0; ) {
      const M = s.cell(f, k), H = (M.mergeMain ?? M).right + 1;
      if (H > T) break;
      s.getColumnVisible(H) && --b, k = H;
    }
    return k;
  }, r = () => {
    let f = s.headerColumns;
    for (; !s.getColumnVisible(f); )
      ++f;
    return f;
  }, l = () => {
    let f = s.getColCount() - 1;
    for (; !s.getColumnVisible(f); )
      --f;
    return f;
  }, u = () => {
    let f = s.headerRows;
    for (; !s.getRowVisible(f); )
      ++f;
    return f;
  }, a = () => {
    let f = s.getRowCount() - 1;
    for (; !s.getRowVisible(f); )
      --f;
    return f;
  }, c = (f) => {
    if (s.getRowCount() - 1 === f) return f;
    let R = f + 1;
    for (; !s.getRowVisible(R); )
      ++R;
    return R;
  }, h = (f) => {
    const S = s.headerRows;
    if (f === S) return f;
    let R = f - 1;
    for (; !s.getRowVisible(R); )
      ++R;
    return R;
  }, g = () => {
    const { activeCell: f } = s;
    if (!f) {
      console.warn("No active cell warning.");
      return;
    }
    const S = a(), R = l(), T = f.mergeMain ?? f;
    if (T.right === R) {
      if (f.row === S) return;
      const b = r(), k = c(f.row);
      e ? s.selectRow(k, s.cell(k, b)) : s.selectCell(k, b), s.scrollInView(k, b);
    } else {
      const b = i(f.row, T.right, 1);
      e ? s.selectRow(f.row, s.cell(f.row, b)) : s.selectCell(f.row, b), s.scrollOnCol(b);
    }
  }, C = () => {
    const { activeCell: f } = s;
    if (!f) {
      console.warn("No active cell warning.");
      return;
    }
    const S = u(), R = r(), T = f.mergeMain ?? f;
    if (T.col === R) {
      if (f.row === S) return;
      const b = l(), k = h(f.row);
      e ? s.selectRow(k, s.cell(k, b)) : s.selectCell(k, b), s.scrollInView(k, b);
    } else {
      const b = o(f.row, T.col, -1);
      e ? s.selectRow(f.row, s.cell(f.row, b)) : s.selectCell(f.row, b), s.scrollOnCol(b);
    }
  }, I = (f, S, R) => {
    let T = -1, b = -1;
    for (let k = S; k <= R; k++) {
      const M = s.cell(f, k), z = M.mergeMain ?? M, { rowSpan: H } = z.mergeInfo;
      H > T && (T = H, b = k);
    }
    return b;
  }, p = (f, S, R) => {
    let T = -1;
    for (let b = S; b <= R; b++) {
      const k = s.cell(f, b), M = k.mergeMain ?? k, { bottom: z } = M;
      z > T && (T = z);
    }
    return T;
  }, y = (f, S, R) => {
    let T = 999999999;
    for (let b = S; b <= R; b++) {
      const k = s.cell(f, b), M = k.mergeMain ?? k;
      T > M.row && (T = M.row);
    }
    return T;
  }, L = (f, S, R) => {
    let T = -1, b = -1;
    for (let k = S; k <= R; k++) {
      const M = s.cell(k, f), z = M.mergeMain ?? M, { colSpan: H } = z.mergeInfo;
      H > T && (T = H, b = k);
    }
    return b;
  }, v = (f, S, R) => {
    let T = -1;
    for (let b = S; b <= R; b++) {
      const k = s.cell(b, f), M = k.mergeMain ?? k, { right: z } = M;
      z > T && (T = z);
    }
    return T;
  }, m = (f, S, R) => {
    let T = 999999999;
    for (let b = S; b <= R; b++) {
      const k = s.cell(b, f), M = k.mergeMain ?? k;
      T > M.col && (T = M.col);
    }
    return T;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: o,
    getNextXRight: i,
    selectNextActiveCell: g,
    selectBeforeActiveCell: C,
    selectNextSelection: (f, S, R) => {
      const T = s.getSelection(), { activeCell: b } = s;
      if (T == null || b == null) {
        console.warn("No selection warning");
        return;
      }
      const k = b.mergeMain ?? b;
      if (R && e) return;
      if (!R) {
        if (f !== 0) {
          const N = f < 0 ? t(k.row, b.col, f) : n(k.bottom, b.col, f);
          e ? s.selectRow(N, s.cell(N, b.col)) : s.selectCell(N, b.col), s.scrollOnRow(N);
        } else {
          const N = S < 0 ? o(b.row, k.col, S) : i(b.row, k.right, S);
          e ? s.selectRow(b.row, s.cell(b.row, N)) : s.selectCell(b.row, N), s.scrollOnCol(N);
        }
        return;
      }
      const { top: M, bottom: z, left: H, right: D } = T;
      if (f !== 0)
        if (f < 0)
          if (p(b.row, H, D) === z) {
            const B = I(M, H, D), A = t(M, B, f);
            s.selectRange(A, H, z, D, b), s.scrollOnRow(A);
          } else {
            const B = I(z, H, D), A = t(z, B, f);
            s.selectRange(M, H, A, D, b), s.scrollOnRow(A);
          }
        else if (y(b.row, H, D) === M) {
          const B = I(z, H, D), A = n(z, B, f);
          s.selectRange(M, H, A, D, b), s.scrollOnRow(A);
        } else {
          const B = I(M, H, D), A = n(M, B, f);
          s.selectRange(A, H, z, D, b), s.scrollOnRow(A);
        }
      else if (S < 0)
        if (v(b.col, M, z) === D) {
          const B = L(H, M, z), A = o(B, H, S);
          s.selectRange(M, A, z, D, b), s.scrollOnCol(A);
        } else {
          const B = L(D, M, z), A = o(B, D, S);
          s.selectRange(M, H, z, A, b), s.scrollOnCol(A);
        }
      else if (m(b.col, M, z) === H) {
        const B = L(D, M, z), A = i(B, D, S);
        s.selectRange(M, H, z, A, b), s.scrollOnCol(A);
      } else {
        const B = L(H, M, z), A = i(B, H, S);
        s.selectRange(M, A, z, D, b), s.scrollOnCol(A);
      }
    },
    selectMoveToLastColumn: (f) => {
      const S = s.getSelection(), { activeCell: R } = s;
      if (S == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = l();
      f && e || (f ? s.selectRange(S.top, R.col, S.bottom, T, R) : e ? s.selectRow(R.row, s.cell(R.row, T)) : s.selectCell(R.row, T), s.scrollOnCol(T));
    },
    selectMoveToFirstColumn: (f) => {
      const S = s.getSelection(), { activeCell: R } = s;
      if (S == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = r();
      f && e || (f ? s.selectRange(S.top, T, S.bottom, R.col, R) : e ? s.selectRow(R.row, s.cell(R.row, T)) : s.selectCell(R.row, T), s.scrollOnCol(T));
    },
    selectMoveToLastRow: (f) => {
      const S = s.getSelection(), { activeCell: R } = s;
      if (S == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = a();
      f && e || (f ? s.selectRange(R.row, S.left, T, S.right, R) : s.selectCell(T, R.col), s.scrollOnRow(T));
    },
    selectMoveToFirstRow: (f) => {
      const S = s.getSelection(), { activeCell: R } = s;
      if (S == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = u();
      f && e || (f ? s.selectRange(T, S.left, R.bottom, S.right, R) : s.selectCell(T, R.col), s.scrollOnRow(T));
    }
  };
}
class Gs {
  constructor() {
    this.keyMap = {};
  }
  addKeyAction(e, t) {
    this.keyMap[e] || (this.keyMap[e] = []), this.keyMap[e].push(t);
  }
  hasKeyAction(e) {
    return this.keyMap[e] && this.keyMap[e].length > 0;
  }
  startKeyAction(e) {
    if (this.hasKeyAction(e.key)) {
      if (this.onStartKeyActionHook(e), this.keyMap[e.key])
        for (const t of this.keyMap[e.key])
          try {
            if (t(e) === !1)
              break;
          } catch (n) {
            console.error(n);
            break;
          }
      this.onEndKeyActionHook(e);
    }
  }
  onStartKeyActionHook(e) {
  }
  onEndKeyActionHook(e) {
  }
}
const it = 10;
class At extends K {
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const o = new Gs(), { gridStateContext: i } = n;
    o.onEndKeyActionHook = (m) => {
      rt(m.key) || m.preventDefault();
    };
    const r = (m = !1) => {
      var w;
      if (!i.isIdle) return;
      const x = ((w = e.activeCell) == null ? void 0 : w.mergeMain) ?? e.activeCell;
      x && e.doEditMode(x, m);
    };
    this._keyMiddleware.forEach(([m, x]) => o.addKeyAction(m, x));
    const l = new le(n.rowManager, n.columnManager), {
      selectNextActiveCell: u,
      selectNextSelection: a,
      selectBeforeActiveCell: c,
      selectMoveToFirstRow: h,
      selectMoveToFirstColumn: g,
      selectMoveToLastColumn: C,
      selectMoveToLastRow: I
    } = Dt(e, this._rowSelection), p = (m) => (x) => {
      i.gridModeState.value.mode !== "edit-cell" && m(x);
    };
    e.addGlobalEventListener(t, "copy", p((m) => e.onNativeCopy(m))), e.addGlobalEventListener(t, "cut", p((m) => e.onNativeCut(m))), e.addGlobalEventListener(t, "paste", p((m) => e.onNativePaste(m))), o.addKeyAction("Tab", (m) => (m.shiftKey ? c() : u(), !0)), o.addKeyAction("ArrowRight", (m) => (m.ctrlKey ? C(m.shiftKey) : a(0, 1, m.shiftKey), !0)), o.addKeyAction("ArrowUp", (m) => (m.ctrlKey ? h(m.shiftKey) : a(-1, 0, m.shiftKey), !0)), o.addKeyAction("ArrowLeft", (m) => (m.ctrlKey ? g(m.shiftKey) : a(0, -1, m.shiftKey), !0)), o.addKeyAction("ArrowDown", (m) => (m.ctrlKey ? I(m.shiftKey) : a(1, 0, m.shiftKey), !0)), o.addKeyAction("Home", (m) => (g(m.shiftKey), !0)), o.addKeyAction("End", (m) => (C(m.shiftKey), !0)), o.addKeyAction("PageUp", (m) => (a(-it, 0, m.shiftKey), !0)), o.addKeyAction("PageDown", (m) => (a(it, 0, m.shiftKey), !0)), o.addKeyAction("Enter", (m) => (a(1, 0, !1), !0)), o.addKeyAction("a", y), o.addKeyAction("A", y), o.addKeyAction("z", L), o.addKeyAction("Z", L), o.addKeyAction("y", v), o.addKeyAction("Y", v);
    function y(m) {
      return m.ctrlKey ? (e.selectAll(), m.preventDefault(), !1) : !0;
    }
    function L(m) {
      return m.ctrlKey ? (e.undo(), m.preventDefault(), !1) : !0;
    }
    function v(m) {
      return m.ctrlKey ? (e.redo(), m.preventDefault(), !1) : !0;
    }
    o.addKeyAction("F2", (m) => (r(), !0)), o.addKeyAction("Delete", (m) => {
      const x = e.getSelection();
      if (!x || l.getCanClearCellCount(x, (d) => e.onClearCellCheck(d)) === 0) return !0;
      const w = new zt(e, [x]);
      return e.commandManager.pushCommandBlock(new q("Clear cells", w)), e.clearCells(x), !0;
    }), o.addKeyAction(" ", (m) => {
      var w;
      const x = e.getSelection();
      if (!x) return !0;
      for (const d of l.getSelectionGenerator(x))
        if (!(d.onCheckReadonly() || d.metaInfo.disabled) && (d.renderType === "checkbox" || d.renderType === "radio"))
          if (e.getRow(d.row).isMounted)
            (w = d.element.querySelector("input")) == null || w.click();
          else {
            d.text = d.text === "true" ? "false" : "true";
            const _ = typeof d.cellRenderer == "function" ? d.cellRenderer(d.row, d.col, d.props) : d.cellRenderer;
            _ instanceof xt ? _.onCheckboxClick(d.row, d.col, d.text === "true") : _ instanceof vt && _.onRadioClick(d.row, d.col);
          }
      return !0;
    }), e.addGlobalEventListener(t, "input", (m) => {
      i.gridModeState.isIdle && "data" in m && r(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (m) => {
      if (
        // editMode에서 온 입력은 pass
        !(!i.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!i.isIdle) {
          m.preventDefault();
          return;
        }
        if (!m.ctrlKey && rt(m.key)) {
          r(!0);
          return;
        }
        o.startKeyAction(m);
      }
    }, !0);
  }
  get pluginKey() {
    return "default-key";
  }
}
const Vs = /^[\S]$/;
function rt(s) {
  return s === "Process" || Vs.test(s);
}
function er(s) {
  return new At(s ?? {});
}
class Ps extends K {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let o = null;
    n.addEventListener("mousedown", (i) => {
      if (i.button !== 0) return;
      const r = Y("td", "tr", i.target);
      if (!r || (r == null ? void 0 : r.tagName) === "TH") return;
      const l = J(r);
      o = e.cell(l.row, l.col), e.selectRow(o.row, o);
    }), e.addGlobalEventListener(document, "mouseup", () => o = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function tr() {
  return new Ps();
}
const ze = -1, $s = /^\d+px$/;
function js(s) {
  for (const e of s)
    if (typeof e == "string") {
      if ($s.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function Us(s) {
  let e = 0;
  for (const t of s)
    typeof t == "string" && (e += Wt(t));
  return e;
}
function Wt(s) {
  return parseInt(s.substring(0, s.length - 2), 10);
}
class Ks extends K {
  constructor({ columnWeight: e }) {
    super(), this._columnWeightList = [], js(e), this._fixedColumnWidth = Us(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: o } = n;
    let i = ze;
    const r = () => {
      const { clientWidth: c } = t;
      if (c === 0) {
        e.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const h = e.getColCount() - 1, g = c - h - this._fixedColumnWidth, C = O(e.getColCount()).reduce((y, L) => {
        if (!e.getColumnVisible(L)) return y;
        const v = this._columnWeightList[L];
        return v === void 0 ? y + 1 : typeof v == "number" ? y + v : y;
      }, 0);
      let I = 0;
      O(h).forEach((y) => {
        if (!e.getColumnVisible(y)) return;
        const L = this._columnWeightList[y] ?? 1;
        if (typeof L == "string" && L.endsWith("px")) {
          const v = Wt(L);
          e.setColumnWidth(y, v);
        } else if (typeof L == "number") {
          const v = L / C;
          e.setColumnWidth(y, Math.floor(v * g));
        }
        I += e.getColumnWidth(y);
      });
      const p = a();
      p && e.setColumnWidth(p, g - I + this._fixedColumnWidth);
    }, l = () => {
      i !== ze && cancelAnimationFrame(i), i = requestAnimationFrame(() => {
        try {
          o.pauseEmit("onColumnChanged"), r();
        } catch (c) {
          console.error(c);
        } finally {
          o.resumeEmit("onColumnChanged"), i = ze;
        }
      });
    };
    o.addHook("resize", l), o.addHook("onColumnChanged", l), this._mountRollbackStack.push(() => {
      o.removeHook("resize", l), o.removeHook("onColumnChanged", l);
    }), u();
    function u() {
      l();
    }
    function a() {
      for (let c = e.getColCount() - 1; c >= 0; c--)
        if (e.getColumnVisible(c))
          return c;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function nr(s) {
  return new Ks(s ?? { columnWeight: [] });
}
class Ot extends K {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: o } = t.elements, i = {
      latestDragOverCell: null
    }, r = () => {
      n.setIdle(), o.classList.remove("is-dragging"), l();
    }, l = () => {
      i.latestDragOverCell && (i.latestDragOverCell.isDragOver = !1);
    }, u = (c) => {
      l(), i.latestDragOverCell = c, c.isDragOver = !0;
    }, a = () => o.classList.contains("is-dragging");
    o.addEventListener("mouseup", () => a() && r()), o.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), o.classList.add("is-dragging");
    }), o.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !o.classList.contains("is-dragging")) return;
      const h = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!h || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        h.dropDisabled !== !1 && // disabled
        (h.metaInfo.disabled === !0 || // readonly
        h.onCheckReadonly() === !0 || h.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(h, c) === !0 && (h !== i.latestDragOverCell && u(h), c.preventDefault());
    }), o.addEventListener("dragleave", (c) => {
      c.target === o ? r() : l();
    }), o.addEventListener("drop", (c) => {
      try {
        i.latestDragOverCell && e.onDropOnCell(i.latestDragOverCell.row, i.latestDragOverCell.col, c);
      } finally {
        r();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function or() {
  return new Ot();
}
const lt = 10;
class Xs extends K {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements, o = {
      cell: null
    }, i = () => {
      o.cell = null, n.draggable = !1;
    }, r = (l) => {
      n.draggable = !0, o.cell = l;
    };
    n.addEventListener("mousedown", (l) => {
      if (l.button !== 0) return;
      const u = Y("td", "tr", l.target);
      if (!u) {
        i();
        return;
      }
      const a = J(u), c = e.cell(a.row, a.col);
      e.selectCell(a.row, a.col), c.metaInfo.draggable === !0 && c.metaInfo.object ? r(c) : i();
    }), n.addEventListener("dragend", () => i()), n.addEventListener("dragstart", (l) => {
      if (!l.dataTransfer || !o.cell || !e.onDragStartCell(o.cell, l)) {
        l.preventDefault();
        return;
      }
      l.dataTransfer.setDragImage(o.cell.element, lt, lt);
    });
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function sr() {
  return new Xs();
}
const at = 10;
class ir extends K {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: o = !0,
      enabledColumn: i = !0
    } = this.args, { table: r } = n.elements, { mergeHandler: l, rowManager: u, gridStateContext: a } = n;
    let c = null, h = null;
    r.addEventListener("mousedown", g), r.addEventListener("dragstart", C), r.addEventListener("dragover", I), r.addEventListener("drop", p), r.addEventListener("dragleave", y), r.addEventListener("dragend", L), r.addEventListener("mouseup", L), this._mountRollbackStack.push(() => {
      r.removeEventListener("mousedown", g), r.removeEventListener("dragstart", C), r.removeEventListener("dragover", I), r.removeEventListener("drop", p), r.removeEventListener("dragleave", y), r.removeEventListener("dragend", L), r.removeEventListener("mouseup", L);
    });
    function g(w) {
      if (w.button !== 0 || t.classList.contains("is-resizing")) return;
      const d = Y("th", "tr", w.target);
      if (!d) return;
      const _ = J(d), E = e.cell(_.row, _.col);
      if (E.cellType === "body-cell" || T(E)) return;
      v({
        direction: E.cellType,
        source: f(),
        cell: E
      });
      function f() {
        const { row: b, col: k } = E;
        return E.cellType === "row-header" ? [
          u.getStartOfRowId(b),
          u.getEndOfRowId(b)
        ] : [
          u.getStartOfColumnId(k),
          u.getEndOfColumnId(k)
        ];
      }
      function S(b) {
        return !o || b.row < e.getFreezedRowCount();
      }
      function R(b) {
        return !i || b.col < e.getFreezedColumnCount();
      }
      function T(b) {
        return b.cellType === "row-header" && S(b) || b.cellType === "col-header" && R(b);
      }
    }
    function C(w) {
      if (!w.dataTransfer || !c) {
        w.preventDefault();
        return;
      }
      a.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), w.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), w.dataTransfer.setDragImage(c.cell.element, at, at);
    }
    function I(w) {
      if (!c || !w.dataTransfer || !w.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const d = e.findCellOrNull(w.offsetY, w.offsetX);
      if (!d || !d.isHeaderCell || c.direction === "row-header" && _(d, c) || c.direction === "col-header" && E(d, c)) {
        m(), h = d;
        return;
      }
      d !== h && x(d, c.direction), w.preventDefault();
      function _(f, S) {
        return f.row === S.cell.row || f.row < e.getFreezedRowCount() || l.checkConflictingInRows(f.row, f.row);
      }
      function E(f, S) {
        return f.col === S.cell.col || f.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(f.col, f.col);
      }
    }
    function p() {
      const w = c, d = h;
      !w || !d || (m(), w.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(w.source, [d.row, d.row]);
      }), e.forceLayoutTask(), e.selectRow(w.cell.row)), w.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(w.source, [d.col, d.col]);
      }), e.forceLayoutTask(), e.selectColumn(w.cell.col)));
    }
    function y() {
      m(), h = null;
    }
    function L() {
      r.classList.remove("is-dragging"), m(), c = null, r.draggable = !1, h = null, a.setIdle();
    }
    function v({ direction: w, source: d, cell: _ }) {
      r.draggable = !0, c = {
        direction: w,
        source: d,
        cell: _
      };
    }
    function m() {
      if (!h || !c) return;
      const { direction: w } = c, d = w === "row-header" ? e.headerColumns : e.headerRows;
      for (let _ = 0; _ < d; _++)
        w === "row-header" ? e.cell(h.row, _).element.classList.remove("is-dragging") : e.cell(_, h.col).element.classList.remove("is-dragging");
    }
    function x(w, d) {
      m(), h = w;
      const _ = d === "row-header" ? e.headerColumns : e.headerRows;
      for (let E = 0; E < _; E++)
        d === "row-header" ? e.cell(w.row, E).element.classList.add("is-dragging") : e.cell(E, w.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Nt = 8, Ys = {
  normal: Fn,
  error: Bn
}, ct = (s, e, t, n) => {
  s.isConnected === !1 || s.offsetParent === null || uo(s, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      fo({
        mainAxis: Nt,
        crossAxis: n ?? 0
      }),
      mo(),
      go({ padding: 5 })
    ]
  }).then(({ x: o, y: i, placement: r }) => {
    e.style.left = `${o}px`, e.style.top = `${i}px`, e.dataset.placement = r;
  });
}, Zs = (s) => s.cellInfo.tooltip ?? s.cellInfo.text ?? "", qs = (s) => s.cellInfo.memo ?? "";
class Js extends K {
  constructor(e) {
    super(), this.options = e, this.context = null, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = On;
  }
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    var I, p, y, L;
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: o
    } = this.options, {
      hasMemo: i,
      memoIntent: r = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, u = ((p = (I = this.options).getTooltipText) == null ? void 0 : p.call(I, e)) ?? Zs(e), a = ((L = (y = this.options).getMemoText) == null ? void 0 : L.call(y, e)) ?? qs(e), c = () => {
      this._tooltipElement.textContent = u, he("popover").appendChild(this._tooltipElement), ct(e.element, this._tooltipElement, "bottom");
    }, h = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${Nn} ${Ys[r]}`, he("popover").appendChild(this._memoElement), ct(e.element, this._memoElement, "right-start", Nt);
    }, g = !(i && o) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, C = i && a ? window.setTimeout(() => h(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: g,
      memoTimeoutHandler: C,
      cleanup: () => {
        clearTimeout(g), clearTimeout(C), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t, i = (r) => {
      var c, h, g;
      if (!ee(r.target)) return;
      const l = Y("td,th", "tr", r.target);
      if (!l) {
        (c = this.context) == null || c.cleanup();
        return;
      }
      const u = J(l), a = e.cell(u.row, u.col);
      ((h = this.context) == null ? void 0 : h.targetCell) !== a && ((g = this.context) == null || g.cleanup(), this.context = this.createContext(a));
    };
    e.addGlobalEventListener(n, "mouseleave", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    }), o.gridModeState.addSubscription((r, { mode: l }) => {
      var u;
      n.removeEventListener("mousemove", i), (u = this.context) == null || u.cleanup(), (l === "idle" || l === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "scroll", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const dt = 10;
class rr extends K {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, gridStateContext: i } = n, { table: r } = n.elements, l = document.createElement("div");
    l.className = Gn;
    let u = null, a = -1;
    r.addEventListener("mousedown", c), r.addEventListener("dragstart", h), r.addEventListener("dragover", g), r.addEventListener("drop", C), r.addEventListener("dragleave", I), r.addEventListener("dragend", p), r.addEventListener("mouseup", p), this._mountRollbackStack.push(() => {
      r.removeEventListener("mousedown", c), r.removeEventListener("dragstart", h), r.removeEventListener("dragover", g), r.removeEventListener("drop", C), r.removeEventListener("dragleave", I), r.removeEventListener("dragend", p), r.removeEventListener("mouseup", p);
    });
    function c(m) {
      if (m.button !== 0 || t.classList.contains("is-resizing")) return;
      const x = Y("th", "tr", m.target);
      if (!x) return;
      const w = J(x), d = e.cell(w.row, w.col);
      if (_(d)) return;
      y({
        source: [
          o.getStartOfRowId(d.row),
          o.getEndOfRowId(d.row)
        ],
        cell: d
      });
      function _(E) {
        return E.cellType !== "row-header" || E.row < e.getFreezedRowCount() || E.row < e.headerRows;
      }
    }
    function h(m) {
      const { offsetY: x, offsetX: w } = m, d = e.findCellOrNull(x, w);
      if ((d == null ? void 0 : d.cellType) === "row-header") {
        if (!m.dataTransfer || !u) {
          m.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), m.dataTransfer.setData("ir-grid/move-rows-dragging", ""), m.dataTransfer.setDragImage(u.cell.element, dt, dt);
      }
    }
    function g(m) {
      const { dataTransfer: x, offsetY: w, offsetX: d } = m;
      if (!u || !x || !x.types.includes("ir-grid/move-rows-dragging")) return;
      const _ = e.findCellOrNull(w, d);
      if (!_) return;
      const E = f(_.row);
      if (_.cellType !== "row-header" || S(E, u)) {
        L(), a = -1;
        return;
      }
      E !== a && v(E), m.preventDefault();
      function f(R) {
        const T = e.getRow(R), b = w - T.top < T.height / 2;
        return T.rowId + (b ? 0 : 1);
      }
      function S(R, T) {
        const [b, k] = T.source;
        return R >= b && R <= k || R < e.headerRows;
      }
    }
    function C() {
      const m = u, x = a;
      !m || x < 0 || (L(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(m.source, x);
      }), e.forceLayoutTask(), e.selectRow(m.cell.row));
    }
    function I() {
      L(), a = -1;
    }
    function p() {
      r.classList.remove("is-dragging"), L(), u = null, r.draggable = !1, a = -1, i.setIdle();
    }
    function y({ source: m, cell: x }) {
      r.draggable = !0, u = {
        source: m,
        cell: x
      };
    }
    function L() {
      a < 0 || !u || l.remove();
    }
    function v(m) {
      L(), a = m;
      const x = Math.min(a, o.length - 1), w = e.getRow(x), d = w.element.getBoundingClientRect(), _ = {
        top: d.top,
        height: 16
      }, E = _.height / 2;
      m === o.length && (_.top += w.height, _.height = E + 1), l.style.top = `${_.top - E}px`, l.style.left = `${d.left + e.scrollLeft}px`, l.style.width = `${e.headerWidth}px`, l.style.height = `${_.height}px`, he("popover").appendChild(l);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const ht = 10;
class lr extends K {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: i, gridStateContext: r } = n, { table: l } = n.elements, u = document.createElement("div");
    u.className = Vn;
    let a = null, c = -1;
    l.addEventListener("mousedown", h), l.addEventListener("dragstart", g), l.addEventListener("dragover", C), l.addEventListener("drop", I), l.addEventListener("dragleave", p), l.addEventListener("dragend", y), l.addEventListener("mouseup", y), this._mountRollbackStack.push(() => {
      l.removeEventListener("mousedown", h), l.removeEventListener("dragstart", g), l.removeEventListener("dragover", C), l.removeEventListener("drop", I), l.removeEventListener("dragleave", p), l.removeEventListener("dragend", y), l.removeEventListener("mouseup", y);
    });
    function h(x) {
      if (x.button !== 0 || t.classList.contains("is-resizing")) return;
      const w = Y("th", "tr", x.target);
      if (!w) return;
      const d = J(w), _ = e.cell(d.row, d.col);
      if (E(_)) return;
      L({
        source: [
          o.getStartOfColumnId(_.col),
          o.getEndOfColumnId(_.col)
        ],
        cell: _
      });
      function E(f) {
        return f.cellType !== "col-header" || f.col < e.getFreezedColumnCount() || f.col < e.headerColumns;
      }
    }
    function g(x) {
      const { offsetY: w, offsetX: d } = x, _ = e.findCellOrNull(w, d);
      if ((_ == null ? void 0 : _.cellType) === "col-header") {
        if (!x.dataTransfer || !a) {
          x.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), x.dataTransfer.setData("ir-grid/move-columns-dragging", ""), x.dataTransfer.setDragImage(a.cell.element, ht, ht);
      }
    }
    function C(x) {
      const { dataTransfer: w, offsetY: d, offsetX: _ } = x;
      if (!a || !w || !w.types.includes("ir-grid/move-columns-dragging")) return;
      const E = e.findCellOrNull(d, _);
      if (!E) return;
      const f = S(E.col);
      if (E.cellType !== "col-header" || R(f, a)) {
        v(), c = -1;
        return;
      }
      f !== c && m(f), x.preventDefault();
      function S(T) {
        const b = e.getColumn(T), k = _ - b.left < b.width / 2;
        return b.columnId + (k ? 0 : 1);
      }
      function R(T, b) {
        const [k, M] = b.source;
        return T >= k && T <= M || T < e.headerColumns;
      }
    }
    function I() {
      const x = a, w = c;
      !x || w < 0 || (v(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(x.source, w);
      }), e.forceLayoutTask(), e.selectColumn(x.cell.col));
    }
    function p() {
      v(), c = -1;
    }
    function y() {
      l.classList.remove("is-dragging"), v(), a = null, l.draggable = !1, c = -1, r.setIdle();
    }
    function L({ source: x, cell: w }) {
      l.draggable = !0, a = {
        source: x,
        cell: w
      };
    }
    function v() {
      c < 0 || !a || u.remove();
    }
    function m(x) {
      v(), c = x;
      const w = Math.min(c, i.length - 1), d = e.getColumn(w), _ = d.colElement.getBoundingClientRect(), E = {
        left: _.left,
        width: 12
      }, f = E.width / 2;
      x === i.length && (E.left += d.width, E.width = f + 1), u.style.top = `${_.top + e.scrollTop}px`, u.style.left = `${E.left - f}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${E.width}px`, he("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const Qs = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
];
function ei() {
  const s = te("div", jn), e = [];
  for (const n of Qs)
    if (n.type === "divider") {
      const o = te("div", Un);
      s.append(o);
    } else {
      const o = te("button", Kn), i = wt(`ir-icon--chevron-${n.value}`);
      o.dataset.type = n.type, o.append(i), o.onclick = () => t.onButtonClick(n.value), s.append(o), e.push(o);
    }
  const t = {
    buttonGroup: s,
    visibleButtonGroup(n, o) {
      for (const i of e) {
        const r = i.dataset.type;
        r === "row" && i.classList.toggle(Le.display.none, !n), r === "col" && i.classList.toggle(Le.display.none, !o);
      }
      s.classList.toggle(Le.display.none, !n && !o);
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class ar extends K {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: i } = n, r = te("div", Pn), l = te("div", $n), u = ei();
    this.args.className && r.classList.add(this.args.className), Object.assign(r.style, this.args.style);
    const a = {
      up() {
        const C = h(l.scrollTop);
        if (!C) return;
        const I = C.rowId - 1, p = I < 0 ? 0 : e.getRow(I).top;
        l.scrollTop = p;
      },
      down() {
        const C = h(l.scrollTop);
        C && (l.scrollTop = C.bottom);
      },
      left() {
        const C = g(l.scrollLeft);
        if (!C) return;
        const I = C.columnId - 1, p = I < 0 ? 0 : e.getColumn(I).left;
        l.scrollLeft = p;
      },
      right() {
        const C = g(l.scrollLeft);
        C && (l.scrollLeft = C.right);
      },
      "double-top"() {
        l.scrollTo({ top: 0 }), e.scrollOnRow(0);
      },
      "double-bottom"() {
        l.scrollTo({ top: l.scrollHeight }), e.scrollOnRow(e.getRowCount() - 1);
      },
      "double-left"() {
        l.scrollTo({ left: 0 }), e.scrollOnCol(0);
      },
      "double-right"() {
        l.scrollTo({ left: l.scrollWidth }), e.scrollOnCol(e.getColCount() - 1);
      }
    };
    u.onButtonClick = (C) => a[C](), t.insertAdjacentElement("beforebegin", r), l.appendChild(t), r.append(l), r.append(u.buttonGroup), n.hook.addHook("resize", c), n.hook.addHook("changedFreezedRowHeight", c), n.hook.addHook("changedFreezedColumnWidth", c), this._mountRollbackStack.push(() => {
      n.hook.removeHook("resize", c), n.hook.removeHook("changedFreezedRowHeight", c), n.hook.removeHook("changedFreezedColumnWidth", c);
    }), this._mountRollbackStack.push(() => {
    });
    function c() {
      u.visibleButtonGroup(
        t.offsetHeight > l.clientHeight,
        t.offsetWidth > l.clientWidth
      );
    }
    function h(C) {
      let I = 0, p = o.visibleRowList.length - 1;
      for (; I <= p; ) {
        const y = I + Math.floor((p - I) / 2), L = o.visibleRowList[y];
        if (C >= L.top && C < L.bottom)
          return L;
        C < L.top ? p = y - 1 : I = y + 1;
      }
      return null;
    }
    function g(C) {
      let I = 0, p = i.visibleColumnList.length - 1;
      for (; I <= p; ) {
        const y = I + Math.floor((p - I) / 2), L = i.visibleColumnList[y];
        if (C >= L.left && C < L.right)
          return L;
        C < L.left ? p = y - 1 : I = y + 1;
      }
      return null;
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
function ti(s, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, o = 0, i = 0;
  const r = {
    setRow(g) {
      o = g;
    },
    setCol(g) {
      i = g;
    }
  }, l = () => t.hasHeaderRows ? 0 : s.headerRows, u = () => t.hasHeaderColumns ? 0 : s.headerColumns;
  function* a() {
    r.setRow(l()), r.setCol(u());
    const g = s.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield s.cell(o, i);
          break;
        case "selected-col":
          if (!g) throw new Error("No selection in finding");
          _t(i, g) && (yield s.cell(o, i));
          break;
        case "selected-row":
          if (!g) throw new Error("No selection in finding");
          Rt(o, g) && (yield s.cell(o, i));
          break;
        case "selection":
          if (!g) throw new Error("No selection in finding");
          Xe(o, i, g) && (yield s.cell(o, i));
          break;
        case "custom":
          if (!t.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          Xe(o, i, t.customRange) && (yield s.cell(o, i));
          break;
      }
      if (C()) break;
    }
    function C() {
      const I = t.direction;
      if (I === "by-columns" || I === "left-right") {
        if (++o, o >= s.getRowCount() && (++i, o = l()), i >= s.getColCount())
          if (n)
            n = !1, o = l(), i = u();
          else return !0;
      } else if (++i, i >= s.getColCount() && (++o, i = u()), o >= s.getRowCount())
        if (n)
          n = !1, o = l(), i = u();
        else return !0;
    }
  }
  function c(g) {
    const C = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), I = t.matchAll ? `^${C}$` : C, p = t.ignoreCase ? "i" : "", y = new RegExp(I, p);
    return e.onCellCheck ? e.onCellCheck(y, g) : y.test(g.text);
  }
  let h = a();
  return {
    resetCursor() {
      h = a();
    },
    findNext(g) {
      for (pt(t, g) || (h = a()), Object.assign(t, g); ; ) {
        const C = h.next();
        if (!C.done && c(C.value))
          return n = !0, C.value;
        if (C.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(g) {
      const C = [];
      g && Object.assign(t, g);
      for (const I of a())
        c(I) && C.push(I);
      return C;
    },
    setCursor(g, C) {
      if (g < 0 || C < 0) throw new Error("row or col must be greater than or equal to 0");
      r.setRow(g), r.setCol(C);
    }
  };
}
const ni = 4, be = "is-hidden";
function oi(s, e) {
  return s.top > e.bottom || e.top > s.bottom || s.left > e.right || e.left > s.right ? null : {
    top: Math.max(s.top, e.top),
    left: Math.max(s.left, e.left),
    bottom: Math.min(s.bottom, e.bottom),
    right: Math.min(s.right, e.right)
  };
}
const si = Zn, ii = [qn, Jn, Qn, eo], ri = ["top", "left", "bottom", "right"];
function li(s) {
  const e = document.createElement("div"), t = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], n = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], [o, i, r, l] = n, u = [o, r], a = [i, l];
  e.classList.add(Xn, be), n.forEach((v, m) => v.className = `${Yn} border-line__${ri[m]}`), t.forEach((v) => e.appendChild(v)), n.forEach((v) => e.appendChild(v));
  function c(v) {
    const { top: m, left: x, bottom: w, right: d } = C(v), _ = v.top < s.getFreezedRowCount() ? s.scrollTop : 0, E = v.left < s.getFreezedColumnCount() ? s.scrollLeft : 0;
    return {
      top: m + _,
      left: x + E,
      width: d - x,
      height: w - m
    };
  }
  function h(v) {
    v.classList.add(be), delete v.dataset.y, delete v.dataset.x, delete v.dataset.width, delete v.dataset.height, delete v.dataset.visible;
  }
  function g(v, m) {
    const x = t[v], w = c(m);
    x.className = `${si} ${ii[v]}`, x.dataset.top = m.top.toString(), x.dataset.left = m.left.toString(), x.dataset.bottom = m.bottom.toString(), x.dataset.right = m.right.toString(), x.dataset.y = w.top.toString(), x.dataset.x = w.left.toString(), x.dataset.width = w.width.toString(), x.dataset.height = w.height.toString(), x.dataset.visible = "true", x.style.top = `${w.top}px`, x.style.left = `${w.left}px`, x.style.width = `${w.width}px`, x.style.height = `${w.height}px`;
  }
  function C(v) {
    return {
      top: s.getRow(v.top).top - se,
      left: s.getColumn(v.left).left - ie,
      bottom: s.getRow(v.bottom).bottom,
      right: s.getColumn(v.right).right
    };
  }
  function I(v) {
    const { left: m, right: x } = v, w = s.getFreezedColumnCount();
    return O(m, x + 1).reduce((d, _) => {
      const E = s.getColumn(_);
      return E.visible ? d + (_ >= w ? E.widthWithBorder : 0) : d;
    }, 0);
  }
  function p(v) {
    const { top: m, bottom: x } = v, w = s.getFreezedRowCount();
    return O(m, x + 1).reduce((d, _) => {
      const E = s.getRow(_);
      return E.visible ? d + (_ >= w ? E.heightWithBorder : 0) : d;
    }, 0);
  }
  function y(v, m, x, w) {
    if (v <= w)
      return Math.min(m, x);
    const d = v - w;
    return x > d ? Math.max(0, x - d) : 0;
  }
  function L(v) {
    const { top: m, left: x, bottom: w, right: d } = C(v), {
      fixedRowHeight: _,
      fixedColumnWidth: E,
      scrollTop: f,
      scrollLeft: S
    } = s, R = _ + f, T = E + S, b = m < _, k = w <= _, M = x < E, z = d <= E, H = m >= R, D = w >= R, N = x >= T, B = d >= T, A = I(v), Q = p(v), Z = y(x, A, S, E), Ge = y(m, Q, f, _), ye = d - x - Z, Ee = w - m - Ge, Ve = m + (b ? f : Ge), Pe = x + (M ? S : Z), fe = Pe < 0 ? 1 : 0, me = Ve < 0 ? 1 : 0;
    (function() {
      u.forEach((ce) => {
        ce.style.left = `${Pe + fe}px`, ce.style.width = `${ye - fe}px`;
      });
    })(), function() {
      a.forEach((ce) => {
        ce.style.top = `${Ve + me}px`, ce.style.height = `${Ee - me}px`;
      });
    }(), function() {
      if (ye <= 1) {
        o.style.display = "none";
        return;
      }
      o.style.removeProperty("display"), b ? o.style.top = `${m + f + me}px` : H ? o.style.top = `${m + me}px` : o.style.display = "none";
    }(), function() {
      if (ye <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), k ? r.style.top = `${w + f - se}px` : D ? r.style.top = `${w - se}px` : r.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.left = `${x + S + fe}px` : N ? i.style.left = `${x + fe}px` : i.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), z ? l.style.left = `${d + S - ie}px` : B ? l.style.left = `${d - ie}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(v) {
      const m = s.headerRows, x = s.getFreezedRowCount(), w = s.headerColumns, d = s.getFreezedColumnCount(), _ = s.getRowCount() - 1, E = s.getColCount() - 1, S = [
        { top: m, left: w, bottom: x - 1, right: d - 1 },
        { top: m, left: d, bottom: x - 1, right: E },
        { top: x, left: w, bottom: _, right: d - 1 },
        { top: x, left: d, bottom: _, right: E }
      ].map((R) => oi(v, R));
      for (let R = 0; R < ni; R++) {
        const T = S[R];
        T ? g(R, T) : h(t[R]);
      }
      L(v);
    },
    applyGridScroll() {
      const v = s.getSelection();
      v && this.updateArea(v);
    },
    show() {
      e.classList.remove(be);
    },
    hide() {
      e.classList.add(be);
    }
  };
}
class ai {
  #e;
  #t;
  constructor(e, t, n) {
    this.#e = t, this.#t = li(e), n.appendChild(this.#t.selectionRoot);
  }
  updateScroll() {
    this.#t.applyGridScroll();
  }
  releaseRange() {
    this.#t.hide();
  }
  update() {
    const e = this.#e.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this.#t.show(), this.#t.updateArea(t);
  }
}
class ci extends V {
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
    this._instance.removeColumn(this._undoContext.addedColumn), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getColCount() > this._undoContext.addedColumn : !1;
  }
}
class di extends V {
  _execute() {
    return this._instance.addRow(...this._args);
  }
  _undo() {
    this._instance.removeRow(this._undoContext.addedRow), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      addedRow: this._instance.getRowCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getRowCount() > this._undoContext.addedRow : !1;
  }
}
class hi extends V {
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
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Ft(s, e) {
  const [t, n] = s, [o, i] = e, r = n - t, l = i - o;
  return r === l ? [e, s] : t < o ? [[i - r, i], [t, t + l]] : [[o, o + r], [n - l, n]];
}
class ui extends V {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Ft(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class fi extends V {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Ft(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class mi extends V {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeColumns(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
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
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class gi extends V {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeRows(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
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
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Ci extends V {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: o, text: i }) => {
      this._instance.setText(n, o, i);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new le(this._instance, this._instance), [t, n, o, i] = this._args, r = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: o, right: i }))
      r.push({ row: l.row, col: l.col, text: l.text });
    return {
      textSnapshot: r
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Bt(s, e) {
  const [t, n] = s, o = n - t;
  return t < e ? [[e - o - 1, e - 1], t] : [[e, e + o], n + 1];
}
class wi extends V {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...Bt(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getRowCount() ? this._instance.getStartOfRowId(this._args[1]) : this._instance.getRowCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class pi extends V {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...Bt(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getColCount() ? this._instance.getStartOfColumnId(this._args[1]) : this._instance.getColCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Ri extends V {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertColumns(this._args[0], e), this._undoContext.columnList.forEach((t, n) => {
      this._instance.setColumnWidth(n + this._args[0], t.width), this._instance.setColumnVisible(n + this._args[0], t.visible);
    }), this._undoContext.removedCells.forEach((t) => {
      this._instance.cell(t.row, t.col).cellRenderer = t.cellRenderer, this._instance.setCell(t.row, t.col, t.metaInfo), (t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1) && this._instance.mergeCells(
        t.row,
        t.col,
        t.bottom,
        t.right
      );
    }), this._undoContext.selection && this._instance.select(
      this._undoContext.selection,
      this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
    );
  }
  _getUndoContext() {
    const e = new Se(this._instance), [t, n] = this._args;
    return {
      removedCells: e.getCellListByColumn(t, n),
      columnList: e.getColumnListByColumn(t, n),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _execute() {
    return this._instance.removeColumns(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class _i extends V {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertRows(this._args[0], e), this._instance.forceLayoutTask(), this._undoContext.removedRows.forEach((t) => {
      const n = this._instance.getRow(t.rowId);
      this._instance.setRowHeight(n.rowId, t.height), this._instance.setRowVisible(n.rowId, t.visible);
      for (let o = 0; o < t.cellCounts; o++) {
        const i = t.getCell(o);
        n.getCell(o).cellRenderer = i.cellRenderer, this._instance.setCell(n.rowId, o, i.metaInfo), (i.mergeInfo.rowSpan > 1 || i.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          i.row,
          i.col,
          i.bottom,
          i.right
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
    const [e, t] = this._args;
    return {
      removedRows: O(e, t + 1).map((n) => this._instance.getRow(n)),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class xi extends V {
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
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class bi extends V {
  _undo() {
    const [e, t] = this._args;
    this._instance.mergeCells(e, t, e + this._undoContext.rowSpan - 1, t + this._undoContext.colSpan - 1);
  }
  _execute() {
    this._instance.splitCells(...this._args);
  }
  _getUndoContext() {
    const e = this._instance.cell(...this._args);
    return {
      rowSpan: e.mergeInfo.rowSpan,
      colSpan: e.mergeInfo.colSpan
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
const ut = {
  addRow: di,
  addColumn: ci,
  setCell: re,
  clearCells: zt,
  setRowHeight: kt,
  setColumnWidth: Lt,
  insertRows: gi,
  insertColumns: mi,
  setRowVisible: xi,
  setColumnVisible: hi,
  mergeCells: Ci,
  splitCells: bi,
  removeRows: _i,
  removeColumns: Ri,
  exchangeRows: ui,
  exchangeColumns: fi,
  moveRows: wi,
  moveColumns: pi
};
function vi(s) {
  if (!(s in ut)) {
    console.warn(`There is no method named ${s} in IRGridCommandMap`);
    return;
  }
  return ut[s];
}
function Si(s) {
  if (s === G.name)
    return vi;
}
function yi(s, e, t, n, o) {
  const i = Si(e);
  if (!i) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const r = i(t);
  if (!r) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  s.pushCommand(new r(n, o));
}
function P() {
  return function(e, t, n) {
    const o = n.value;
    return n.value = function(...i) {
      const { commandManager: r } = this;
      return r ? r.isRecording && yi(r, this.constructor.name, t, this, i) : console.warn("No commandManager in this context"), o.apply(this, i);
    }, n;
  };
}
var Ei = Object.defineProperty, Ii = Object.getOwnPropertyDescriptor, $ = (s, e, t, n) => {
  for (var o = Ii(e, t), i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (o = r(e, t, o) || o);
  return o && Ei(e, t, o), o;
};
const De = new Be(), ft = {}, Ti = [
  "text/html",
  "text/plain"
];
function Li() {
  return [
    new At({}),
    new Ht(),
    new Ot(),
    new Mt({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new Js({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class G extends ao {
  #e;
  #t;
  #a;
  #i = [];
  #l;
  #f = !1;
  // IRGrid Util
  #s;
  #o;
  #u = new Se(this);
  #c;
  #h;
  #g;
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: o,
      defaultColumnCellFormat: i,
      plugins: r
    } = e;
    if (this.#l = {
      all: {
        editable: !0,
        text: ""
      }
    }, this.#g = Object.assign({ rowSpan: !0, colSpan: !0 }, e.copyOptions), i)
      for (const [c, h] of Object.entries(i))
        this.#l[c] = Object.assign(this.#l[c] || {}, h);
    this.#o = new As(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: (n == null ? void 0 : n.colCount) ?? 0,
        headerRowCount: (t == null ? void 0 : t.rowCount) ?? 0,
        gridCommandManager: new lo({ context: this }),
        gridStateContext: new Rs(this),
        cursorManager: Dt(this, !1)
      }
    ), this.#I(), this.#e = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: De,
      defaultSize: this.#o.getThemeValue("grid.defaultColumnWidth"),
      minSize: this.#o.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this.#e.minSize = Math.min(this.#e.defaultSize, this.#e.minSize), this.#e.maxSize = Math.max(this.#e.defaultSize, this.#e.maxSize), this.#t = Object.assign({
      colCount: 0,
      cellRenderer: De,
      defaultSize: this.#o.getThemeValue("grid.defaultRowHeight"),
      minSize: this.#o.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultRowMaxSize")
    }, n), this.#t.minSize = Math.min(this.#t.defaultSize, this.#t.minSize), this.#t.maxSize = Math.max(this.#t.defaultSize, this.#t.maxSize), this.#a = Object.assign({
      rowCount: 5,
      cellRenderer: De
    }, o), this.contextElement.classList.add(to, no), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l, tbody: u } = this.#o.elements, { gridStateContext: a } = this.#o;
    this.contextElement.appendChild(l), this.resizeObserve(() => {
      this.#s.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection"), this.#s.forceRunTasks(), this.#o.hook.emit("resize", []), this.onResizeContext();
    }), this.#v(r ?? Li()), this.addCoreElement(l), this.#c = new le(this.#n, this.#r), this.#h = new ai(this, a, l), this.#s = new Is(this, a, l, u, this.contextElement, this.#h), a.selectionRangeState.addSubscription((c, h) => {
      (c == null ? void 0 : c.activeCell) !== (h == null ? void 0 : h.activeCell) && (c == null || c.activeCell.deactivate(), h == null || h.activeCell.activate());
    }), a.activateHeaderCellState.addSubscription((c, h) => {
      c.forEach((g) => g.deactivate()), h.forEach((g) => g.activate());
    }), a.selectionRangeState.addSubscription((c, h) => {
      h ? a.activateHeaderCellState.next([...this.#c.getSelectionHeaderIterator(h.range)]) : a.activateHeaderCellState.next([]);
    }), a.selectionRangeState.addSubscription((c, h) => {
      h ? this.onSelectCell(h.activeCell) : this.onActiveCellNull();
    }), a.selectionRangeState.addSubscription((c, h) => {
      this.onSelectChanged((h == null ? void 0 : h.range) ?? null);
    }), a.selectionRangeState.addSubscription((c, h) => {
      h != null && h.activeCell && this.#o.gridTextarea.setPosition(h.activeCell, this.scrollTop, this.scrollLeft);
    }), a.gridModeState.addSubscription((c, h) => {
      this.contextElement.dataset.mode = h.mode;
    }), a.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (c) => {
      c.preventDefault();
      const { y: h, x: g } = Lo(c);
      this.onContextMenu(c, this.findCellOrNull(h, g));
    }), this.addGlobalEventListener(this.contextElement, "focus", () => this.focus()), this.addGlobalEventListener(this.contextElement, "dragend", () => this.focus()), this.#o.hook.addHook("changedFreezedRowHeight", (c, h) => this.#x(c, h)), this.#o.hook.addHook("changedFreezedColumnWidth", (c, h) => this.#p(c, h)), this.#S(), this.#o.gridTextarea.mountElement(l);
  }
  onDestroy() {
    this.#o.hook.clearHooks("changedFreezedRowHeight"), this.#o.hook.clearHooks("changedFreezedColumnWidth");
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated getFreezedRowCount 사용 권장
   */
  get fixedRowCount() {
    return this.#e.rowCount;
  }
  get hook() {
    return this.#o.hook;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  get firstRow() {
    return this.#n.firstRow;
  }
  get lastRow() {
    return this.#n.lastRow;
  }
  get #m() {
    return this.#o.gridStateContext;
  }
  get #n() {
    return this.#o.rowManager;
  }
  get #d() {
    return this.#o.mergeHandler;
  }
  get #r() {
    return this.#o.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  get fixedColumnCount() {
    return this.#r.freezedColumns;
  }
  get width() {
    return this.#r.columnsWidth;
  }
  get height() {
    return this.#n.rowsHeight;
  }
  /**
   * headerRows + freezedRows 높이 총합
   */
  get fixedRowHeight() {
    return this.#n.freezedRowsHeight;
  }
  /**
   * rowHeaders + freezedColumns 너비 총합
   */
  get fixedColumnWidth() {
    return this.#r.fixedColumnsWidth;
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
    return this.#e.minSize;
  }
  get maxColWidth() {
    return this.#e.maxSize;
  }
  get minRowHeight() {
    return this.#t.minSize;
  }
  get maxRowHeight() {
    return this.#t.maxSize;
  }
  get commandManager() {
    return this.#o.commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수 (초기 colHeader.rowCount)
   */
  get headerRows() {
    return this.#n.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수 (초기 rowHeader.colCount)
   */
  get headerColumns() {
    return this.#r.headerColumns;
  }
  get headerWidth() {
    return this.#r.rowHeaderColumnsWidth;
  }
  get headerHeight() {
    return this.#n.headerRowsHeight;
  }
  get activeCell() {
    var e;
    return ((e = this.#m.selectionRangeState.value) == null ? void 0 : e.activeCell) ?? null;
  }
  /*
   * Setters
   */
  set activeCell(e) {
    if (e === this.activeCell) return;
    if (!e) {
      this.#m.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this.#m.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this.#m.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  set readonly(e) {
    this.#f = e, this.#n.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this.#o
    }), this.#i.push(e);
  }
  getColumnByLeft(e) {
    const t = this.#r.visibleColumnList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const i = n + Math.floor((o - n) / 2), r = t[i];
      if (r.isBetweenLeft(e))
        return r;
      e < r.left ? o = i - 1 : n = i + 1;
    }
    return null;
  }
  /**
   * 설정된 기본 열 서식을 변경합니다.
   * all 모든 셀 공통
   * {number} 해당 열 셀 공통
   * col_header_{number} 해당 열 헤더 셀
   * row_header_{number} 해당 행 헤더 셀
   * body_{number} 해당 body 열 셀
   */
  setDefaultColumnCellFormat(e, t) {
    this.#l[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this.#n.getRowByTop(e);
  }
  removePlugin(e) {
    if (!this.#i.includes(e))
      throw new Error("plugin not found");
    e.unmount(), this.#i.splice(this.#i.indexOf(e), 1);
  }
  getMergeArea(e, t) {
    const n = this.cell(e, t);
    if (n.mergeInfo)
      return {
        rowSpan: n.mergeInfo.rowSpan,
        colSpan: n.mergeInfo.colSpan
      };
    throw new Error("It's not a based cell!");
  }
  isMerged(e, t) {
    return this.#d.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this.#d.splitCells(e, t), this.#s.addTask("virtualRender");
  }
  mergeCells(e, t, n, o) {
    this.forceLayoutTask(), this.#d.mergeCells({ top: e, left: t, bottom: n, right: o }), this.#s.addTask("virtualRender");
    const i = this.getSelection();
    i && this.selectRange(i.top, i.left, i.bottom, i.right);
  }
  undo() {
    this.commandManager.undo();
  }
  redo() {
    this.commandManager.redo();
  }
  findRowOrNull(e) {
    return this.#n.findRowOrNull(this.scrollTop, e, this.fixedRowCount);
  }
  findCellOrNull(e, t) {
    const { scrollTop: n, scrollLeft: o } = this, i = e < n + this.fixedRowHeight ? e - n : e, r = t < o + this.fixedColumnWidth ? t - o : t, l = this.getRowByTop(i);
    if (!l) return null;
    const u = this.getColumnByLeft(r);
    if (!u) return null;
    const a = this.cell(l.rowId, u.columnId);
    return a.mergeMain ?? a;
  }
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return { row: n.row, col: n.col };
    if (n.mergeMain)
      return { row: n.mergeMain.row, col: n.mergeMain.col };
    throw new Error("It's not a merged cell!");
  }
  releaseCells() {
    this.#m.selectionRangeState.next(null), this.#h.releaseRange();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this.#n.clearRows(), this.commandManager.clearCommands(), this.#s.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this.#r.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    this.#m.selectionRangeState.next({
      range: e,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
      activeCell: t ?? this.cell(e.top, e.left)
    }), this.#s.addTask("updateSelection");
  }
  selectRange(e, t, n, o, i = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: o }, i);
  }
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return O(e.mergeInfo.colSpan).reduce((n, o) => this.getColumnVisible(t + o) ? n + this.getColumnWidth(t + o) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return O(e.mergeInfo.rowSpan).reduce((n, o) => this.getRowVisible(t + o) ? n + this.getRowHeight(e.row + o) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  getSelection() {
    var e;
    return ((e = this.#m.selectionRangeState.value) == null ? void 0 : e.range) ?? null;
  }
  scrollOnRow(e) {
    this.#s.isScheduled ? this.afterRender(() => this.#_(e)) : this.#_(e);
  }
  scrollOnCol(e) {
    this.#s.isScheduled ? this.afterRender(() => this.#R(e)) : this.#R(e);
  }
  forceLayoutTask() {
    this.#s.forceRunTasks();
  }
  getPlugin(e) {
    for (const t of this.#i)
      if (t instanceof e)
        return t;
    throw new Error(`not found plugin ${e}`);
  }
  resetScroll() {
    this.contextElement.scrollTop = 0, this.contextElement.scrollLeft = 0;
  }
  scrollInView(e, t) {
    this.scrollOnRow(e), this.scrollOnCol(t);
  }
  focus() {
    this.#o.tableElement.draggable || this.#o.gridTextarea.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업 예약
   */
  afterRender(e) {
    this.#s.addAfterRenderTask(e), this.#s.addTask("nothing");
  }
  /**
   * @command 내부적으로 setCell을 호출하여 command에 기록
   */
  setText(e, t, n) {
    this.setCell(e, t, { text: n });
  }
  getText(e, t) {
    return this.cell(e, t).text;
  }
  getValue(e, t) {
    return this.cell(e, t).value;
  }
  getColumnWidth(e) {
    return this.#r.getColumnWidth(e);
  }
  setColumnWidth(e, t) {
    const n = F(t, this.#e.minSize, this.#e.maxSize);
    this.#r.setColumnWidth(e, n), this.onResizeColumn(e), this.#o.hook.emit("onColumnChanged", [e, e, "setWidth"]), this.#s.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#r.freezedColumns && this.#s.addTask("updateRowsStickyLeft");
  }
  getRowHeight(e) {
    return this.#n.getRowHeight(e);
  }
  setRowHeight(e, t) {
    const n = F(t, this.minRowHeight, this.maxRowHeight);
    this.#n.setRowHeight(e, n), this.#s.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  setRowTextColor(e, t) {
    this.#n.getRow(e).textColor = t;
  }
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  setObject(e, t, n) {
    this.cell(e, t).cellInfo = { object: n };
  }
  cell(e, t) {
    return this.#n.getCell(e, t);
  }
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환합니다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).props;
  }
  getCellMetaInfo(e, t) {
    return this.cell(e, t).props;
  }
  setCell(e, t, n) {
    if (typeof n.text == "number" || typeof n.text == "boolean" || typeof n.text == "bigint")
      n.text = `${n.text}`;
    else if (n.text === null)
      n.text = "";
    else if (typeof n.text == "object" || Array.isArray(n.text))
      throw new Error("Could not set object or array in text property!");
    this.cell(e, t).cellInfo = n;
  }
  /**
   * 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용
   * rowInfo의 cellMetaInfo의 경우, 기존 속성을 상속하지 않고,
   */
  setRowInfo(e, t) {
    this.getRow(e).setRowInfo(t);
  }
  selectCell(e, t) {
    this.selectRange(e, t, e, t, this.cell(e, t));
  }
  getRowCount() {
    return this.#n.length;
  }
  getColCount() {
    return this.#r.length;
  }
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)
   */
  getFreezedRowCount() {
    return this.#n.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  getFreezedColumnCount() {
    return this.#r.freezedColumns;
  }
  getColumn(e) {
    return this.#r.getColumn(e);
  }
  getRow(e) {
    return this.#n.getRow(e);
  }
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  renderColumns(e, t) {
    this.#n.runFuncEachRow((n) => n.renderColumns(e, t));
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this.#t.defaultSize) {
    const t = F(e, this.minRowHeight, this.maxRowHeight), n = this.createIRGridRow(this.#n.getNextRowId(), this.height, t);
    return this.#n.addRow(n), n.rowId;
  }
  _createBulkRows(e, t) {
    for (let n = 0; n < e; n++)
      this._addRow(t);
    this.#s.scheduleAddRowTasks();
  }
  addRow(e) {
    return this.#s.scheduleAddRowTasks(), this._addRow(e);
  }
  /**
   *
   * @command removeRows 호출로 command화
   */
  removeRow(e) {
    return this.removeRows(e, e);
  }
  /**
   *
   * @command removeColumns 호출로 command화
   */
  removeColumn(e) {
    return this.removeColumns(e, e);
  }
  removeRows(e, t) {
    if (e < this.headerRows)
      throw new Error("Could not remove rows in header rows!");
    if (t >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount() - 1}. If you wanna clear all rows, please call clearRows()`);
    if (this.#d.checkConflictingInRows(e, t)) return !1;
    for (let n = e; n <= t; n++) {
      const o = this.getRow(n);
      for (const i of o.getCellGenerator())
        i.isMerged && this.#d.removeMergeCell(i.row, i.col);
    }
    return this.#n.removeRows(e, t), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection"), !0;
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this.#d.checkConflictingInColumns(e, t) ? !1 : (this.#n.runFuncEachRow((n) => {
      for (const o of n.getCellGenerator(e, t))
        o.isMerged && this.#d.removeMergeCell(o.row, o.col);
    }), this.#n.removeColumns(e, t), this.#r.removeColumns(e, t), this.#o.hook.emit("onColumnChanged", [e, t, "removeColumns"]), this.#s.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection"), e < this.#r.freezedColumns && this.#s.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this.#e.defaultSize) {
    const t = F(e, this.minColWidth, this.maxColWidth), n = this.#r.addColumn(t);
    return this.#n.addColumn((o) => this.createIRGridCell(o.rowId, n.columnId)), this.#o.hook.emit("onColumnChanged", [n.columnId, n.columnId, "addColumn"]), n.columnId;
  }
  addColumn(e) {
    return this.#s.addTask("generateScrollBarClass"), this._addColumn(e);
  }
  /**
   *
   * @command
   */
  insertRow(e, t) {
    return this.insertRows(e, 1, t);
  }
  insertRows(e, t = 1, n = this.#t.defaultSize) {
    const o = this.getRowCount(), i = F(e, this.headerRows, o);
    if (!this.#d.checkCanInsertRow(i)) return !1;
    const r = F(n, this.minRowHeight, this.maxRowHeight);
    if (i === o) {
      for (let u = 0; u < t; u++)
        this.addRow(r);
      return !0;
    }
    const l = O(t).map((u) => this.createIRGridRow(i + u, 0, r));
    return this.#n.insertRows(i, l), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection"), !0;
  }
  /**
   *
   * @command
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this.#e.defaultSize) {
    const o = this.getColCount(), i = F(e, this.headerColumns, o);
    if (!this.#d.checkCanInsertColumn(e)) return !1;
    const r = F(n, this.minColWidth, this.maxColWidth);
    if (i === o) {
      for (let u = 0; u < t; u++)
        this.addColumn(r);
      return !0;
    }
    this.#r.insertColumns(e, t, r), this.#n.insertColumns(e, t, (u, a) => this.createIRGridCell(u, a));
    const l = this.#s.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
    return e < this.#r.freezedColumns && l.addTask("updateRowsStickyLeft"), !0;
  }
  /**
   *
   * @command autoSizeColumns
   */
  autoSizeColumn(e) {
    this.autoSizeColumns(e, e);
  }
  /**
   *
   * @command
   */
  autoSizeColumns(e, t) {
    O(e, t + 1).forEach((n) => {
      const o = Math.ceil(this.#o.rowManager.getMaxCellWidth(n, n + 1));
      o !== this.getColumnWidth(n) && this.setColumnWidth(
        n,
        F(
          o,
          this.#e.minSize,
          this.#e.maxSize
        )
      );
    });
  }
  /**
   *
   * @command autoSizeRows
   */
  autoSizeRow(e) {
    this.autoSizeRows(e, e);
  }
  /**
   * @command
   */
  autoSizeRows(e, t) {
    O(e, t + 1).forEach((n) => {
      const o = this.#n.getRow(n).rowInnerHeight;
      o !== this.getRowHeight(n) && this.setRowHeight(n, o);
    });
  }
  copyToClipboard() {
    if (!this.getSelection()) {
      console.warn("No selection detected.");
      return;
    }
    this.focus(), document.execCommand("copy");
  }
  async _createClipboardGetter() {
    const e = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const t = (await _o.read()).flat();
      for await (const n of t)
        for (const o of Ti)
          e[o] === "" && n.types.includes(o) && (e[o] = await xo(await n.getType(o)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = vo(ft) ?? "";
    }
    return {
      getData(t) {
        return e[t] ?? "";
      }
    };
  }
  /**
   * Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * ! firefox의 경우 Clipboard API를 지원하지 않는다.
   */
  async pasteFromClipboard() {
    const e = this.getSelection();
    if (!e) {
      console.warn("no selection, it needs selection to paste");
      return;
    }
    this.paste(
      e,
      Qe(
        await this._createClipboardGetter()
      )
    );
  }
  #C(e, t) {
    if (this.#g.rowSpan)
      for (const n of this.#c.getSelectionGenerator(e))
        n.mergeInfo.rowSpan > 1 && this.splitCells(n.row, n.col);
    if (this.#g.colSpan)
      for (const n of this.#c.getSelectionGenerator(e))
        n.mergeInfo.colSpan > 1 && this.splitCells(n.row, n.col);
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = ss(this, this.#g), o = n.getPastingRange(e, t);
    this.#C(o, t);
    const i = n.beforePastingList(o, t);
    i.length !== 0 && (this.onClipboardBeforePaste(o), n.pasteTask(i), this.onClipboardAfterPaste(o), this.select(o));
  }
  hasRow(e) {
    return e < this.getRowCount();
  }
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e) {
    for (const t of this.#c.getSelectionGenerator(e))
      this.onClearCellCheck(t) && t.clear();
  }
  setRowVisible(e, t) {
    return this.#d.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this.#n.setRowVisible(e, t), this.#s.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection")), !0);
  }
  setRowVisibleBulk(e, t) {
    this.#n.setRowVisibleBulk(e, t), this.#s.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  getRowVisible(e) {
    return this.#n.getRowVisible(e);
  }
  setColumnVisible(e, t) {
    return this.#d.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this.#r.setColumnVisible(e, t), this.#n.setColumnVisible(e, t), this.#s.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#r.freezedColumns && this.#s.addTask("updateRowsStickyLeft"), this.#o.hook.emit("onColumnChanged", [e, e, "setVisible"])), !0);
  }
  getColumnVisible(e) {
    return this.#r.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return ti(this, e);
  }
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  selectColumns(e, t) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, this.cell(this.headerRows, e));
  }
  selectRow(e, t = this.activeCell) {
    this.selectRows(e, e, t);
  }
  selectRows(e, t, n = this.activeCell) {
    e < this.headerRows || this.selectRange(e, this.headerColumns, t, this.getColCount() - 1, n ?? this.cell(e, this.headerColumns));
  }
  freezeRows(e) {
    this.#n.freezeRows(e), this.#s.addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns);
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정함.
   * @param freezingColumnCount
   */
  freezeColumn(e) {
    if (e < 0)
      throw new Error("Could not be freezing minus columns!");
    if (e > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this.#r.freezeColumns(e), this.#s.addTask("updateSelection").addTask("updateRowsStickyLeft");
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  setClipboardOptions(e) {
    Object.assign(this.#g, e);
  }
  sort(e, t, n, o) {
    const i = Math.max(n ?? this.headerRows, this.headerRows), r = Math.min(o ?? this.getRowCount(), this.getRowCount());
    this.#n.sort(e, t, i, r), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(e) {
    for (const t of this.#c.getSelectionGenerator(e)) {
      const n = t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1 ? t : t.mergeMain;
      n && this.splitCells(n.row, n.col);
    }
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCellAddress(e) {
    e.length > 0 && this.selectCell(e[0][0], e[0][1]);
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCells(e) {
    e.length > 0 && this.selectCell(e[0].row, e[0].col);
  }
  /**
   *
   * @deprecated
   */
  getSelectionMode() {
    return "range";
  }
  getSelectedCells() {
    const e = this.getSelection();
    return e ? [this.cell(e.top, e.left)] : [];
  }
  /**
   * @command
   */
  exchangeRow(e, t) {
    this.exchangeRows([e, e], [t, t]);
  }
  exchangeRows(e, t) {
    if (e.some((n) => this.#n.isInvalidRowId(n)) || t.some((n) => this.#n.isInvalidRowId(n)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((n) => n < this.getFreezedRowCount()) || t.some((n) => n < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be exchanged!");
    if (this.#d.checkConflictingInRows(...e) || this.#d.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.#n.exchangeRows(e, t), this.onExchangedRows(e, t), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this.#r.isInvalidColumnId(n)) || t.some((n) => this.#r.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this.#d.checkConflictingInColumns(...e) || this.#d.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.#n.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this.#s.addTask("adjustSelection");
  }
  /**
   * @command
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((o) => this.#n.isInvalidRowId(o)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((o) => o < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this.#d.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.#n.getAdjustTargetRow(t);
    this.#n.moveRows(e, n), this.onMovedRows(e, n), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((o) => this.#n.isInvalidRowId(o)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((o) => o < this.getFreezedRowCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this.#d.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.#b(t);
    this.#n.runFuncEachRow((o) => o.moveCells(e, n)), this.onMovedColumns(e, n), this.#s.addTask("adjustSelection");
  }
  getStartOfRowId(e) {
    return this.#n.getStartOfRowId(e);
  }
  getStartOfColumnId(e) {
    return this.#n.getStartOfColumnId(e);
  }
  /**
   *
   * @deprecated
   */
  getSelectedMultipleCellAddress() {
    const e = this.getSelection();
    return e ? [[e.top, e.left]] : [];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   * @deprecated
   */
  isSelectedSingleCell() {
    const e = this.getSelection();
    if (!e) return !1;
    const { top: t, left: n, bottom: o, right: i } = e;
    if (t === o && n === i) return !0;
    const r = this.getRow(t).getCell(n);
    return o === r.bottom && i === r.right;
  }
  /**
   * @deprecated
   */
  render() {
    this.#n.renderRows();
  }
  /*
   * Object Events
   */
  onSelectCell(e) {
  }
  onActiveCellNull() {
  }
  onResizeContext() {
  }
  onResizeColumn(e) {
  }
  onEditCellDone(e, t, n, o, i, r) {
  }
  onSelectChanged(e) {
  }
  onClearCell(e) {
  }
  onClearCellCheck(e) {
    return e.canClear;
  }
  onColumnClick(e) {
  }
  onRowClick(e) {
  }
  onCreatingCell(e) {
  }
  onCellRightClick(e, t) {
  }
  onEditKeyDown(e, t, n, o) {
  }
  onMountedRow(e) {
  }
  onClipboardBeforePasteCell(e, t) {
    return !0;
  }
  onClipboardBeforePaste(e) {
  }
  onClipboardAfterPasteCell(e) {
  }
  onClipboardAfterPaste(e) {
  }
  /**
   * false를 리턴하면 자동 생성되지 않음. 기본 값 true 리턴
   * @param _row 생성될 row 값
   * @returns
   */
  onAutoInsertRow(e) {
    return !0;
  }
  onAutoInsertedRow(e) {
  }
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @returns
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  onAutoInsertedColumn(e) {
  }
  onDoubleClickCell(e) {
  }
  onDropOnCell(e, t, n) {
  }
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.props.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.props.object)), !0);
  }
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.props.disabled !== !0 && e.props.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
  }
  onUndo(e) {
  }
  onRedo(e) {
  }
  onNativeCopy(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    const o = this.#u.getCellMatrixByRange(t).map((i) => i.map((r) => ({
      text: this.onCopyCellText(r),
      cellVisible: r.mergeMain === void 0,
      rowSpan: r.mergeInfo.rowSpan,
      colSpan: r.mergeInfo.colSpan,
      isFormatted: !1
    })));
    fs(e.clipboardData, o), So(ft, JSON.stringify(o)), this.focus(), this.onCopy(), e.preventDefault();
  }
  onCopyCellText(e) {
    return e.text;
  }
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  onNativePaste(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("it needs selection to paste");
    const n = Qe(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  onExchangedRows(e, t) {
  }
  onExchangedColumns(e, t) {
  }
  onMovedRows(e, t) {
  }
  onMovedColumns(e, t) {
  }
  doEditMode(e, t = !1, n = !1) {
    if (!e.element.isConnected || !e.editable || !this.getCellVisible(e.row, e.col)) return !1;
    const o = this.#o.gridTextarea;
    o.onEditDone = (i, r, l, u, a, c) => {
      this.onEditCellDone(i, r, l, u, a, c), this.#m.gridModeState.value.mode === "edit-cell" && this.#m.setIdle();
    }, o.onEditKeyDown = (i, r, l, u) => this.onEditKeyDown(i, r, l, u), o.onEnterOnEdit = () => {
      const i = this.#o.cursorManager.getNextYBelow(e.row, e.col, 1);
      e.row !== i && (this.selectCell(i, e.col), this.#s.isScheduled && this.forceLayoutTask(), this.doEditMode(this.cell(i, e.col)));
    };
    try {
      return this.#m.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell: e }
      }), o.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
    } catch (i) {
      return console.error("IRGrid.doEditMode Error!", i), !1;
    }
  }
  onCopy() {
  }
  onContextMenu(e, t) {
  }
  onDragOverCell(e, t) {
    return !0;
  }
  /*
   * Private Methods
   * #으로 시작하도록 하여, 외부에서 호출되지 않도록 함
   */
  #x(e, t) {
    const n = t, o = e + (n < this.getRowCount() ? this.#n.getRowHeight(n) : 0) + (this.hasHorizontalScroll() ? Ue : 0);
    U(this.contextElement, {
      [W.minHeight]: `${o}px`
    });
  }
  #p(e, t) {
    const n = t, o = e + (n < this.getColCount() ? this.getColumnWidth(n) : 0) + (this.hasVerticalScroll() ? Ue : 0);
    U(this.contextElement, {
      [W.minWidth]: `${o}px`
    });
  }
  #b(e) {
    return e >= this.#r.length ? this.#r.length : e < this.#r.freezedColumns ? this.#r.freezedColumns : this.#n.getStartOfColumnId(e);
  }
  #R(e) {
    const t = F(e, 0, this.getColCount() - 1), n = this.getColumnLeft(t), o = n + this.getColumnWidth(t), { fixedColumnWidth: i, scrollRight: r, scrollLeft: l } = this, u = l + i;
    r < o ? this.contextElement.scrollLeft = l + (o - r) : u > n && (this.contextElement.scrollLeft = n - i);
  }
  #_(e) {
    const t = F(e, 0, this.getRowCount() - 1), n = this.getRow(t), o = n.top, i = n.top + n.height, { scrollBottom: r, fixedRowHeight: l, scrollTop: u } = this, a = u + l;
    r < i ? this.contextElement.scrollTop = u + (i - r) : a > o && (this.contextElement.scrollTop = o - l);
  }
  onCheckCellReadonly(e) {
    return this.#f ? !0 : e.props.readonly === !0;
  }
  #v(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  #S() {
    O(this.#e.colCount).forEach(() => this.addColumn(this.#e.defaultSize)), this._createBulkRows(this.#e.rowCount + this.#a.rowCount), this.#p(this.#r.fixedColumnsWidth, this.#r.freezedColumns);
  }
  #w(e) {
    e.cellType = "col-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onColumnClick(e);
    };
  }
  #y(e) {
    e.cellType = "row-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onRowClick(e);
    };
  }
  #E(e) {
    e.cellType = "body-cell", e.onClear = () => this.onClearCell(e), e.onDblClick = () => this.onDoubleClickCell(e);
  }
  #I() {
    U(this.contextElement, {
      [W.cellTopPadding]: `${this.#o.getThemeValue("grid.paddingTop")}px`,
      [W.cellLeftPadding]: `${this.#o.getThemeValue("grid.paddingLeft")}px`,
      [W.cellBottomPadding]: `${this.#o.getThemeValue("grid.paddingBottom")}px`,
      [W.cellRightPadding]: `${this.#o.getThemeValue("grid.paddingRight")}px`
    });
  }
  #T(e, t, n, o) {
    if (e === "col-header")
      return this.#e.cellRenderer;
    if (e === "row-header")
      return this.#t.cellRenderer;
    if (e === "body-cell")
      return this.#a.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  #L(e, t) {
    const n = e < this.headerRows, o = !n && t < this.headerColumns;
    return n ? "col-header" : o ? "row-header" : "body-cell";
  }
  #k(e, t) {
    const n = {
      gridStore: this.#o
    };
    return Object.assign(n, {
      ...this.#l.all,
      ...this.#l[t]
    }), e === "col-header" ? Object.assign(n, { dropDisabled: !0 }, this.#l[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, { dropDisabled: !0 }, this.#l[`row_header_${t}`]) : Object.assign(n, this.#l[`body_${t}`]), n;
  }
  createIRGridCell(e, t) {
    const n = this.#L(e, t), o = n.endsWith("header") ? "th" : "td", i = this.#k(n, t), r = this.#T(n, e, t, i), l = new vs({
      row: e,
      col: t,
      tag: o,
      cellRenderer: r,
      props: i
    });
    return l.onRightClick = (u, a) => this.onCellRightClick(u, a), l.onCheckReadonly = () => this.onCheckCellReadonly(l), n === "col-header" ? this.#w(l) : n === "row-header" ? this.#y(l) : this.#E(l), this.onCreatingCell(l), l;
  }
  createIRGridRow(e, t, n) {
    const o = new Ss({
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return O(this.getColCount()).forEach((i) => {
      o.addCell(this.createIRGridCell(e, i)), !this.getColumnVisible(i) && o.setColumnVisible(i, !1);
    }), o.onMounted = () => {
      o.freezeColumns(this.#t.colCount), this.onMountedRow(o.rowId);
    }, o.onChangedHeight = () => {
      O(this.getColCount()).forEach((i) => {
        const r = o.getCell(i), l = r.mergeMain ? r.mergeMain : r.mergeInfo.rowSpan > 1 ? r : null;
        l && (l.height = this.#d.getMergedRowHeight(l.row, l.row + l.mergeInfo.rowSpan - 1));
      });
    }, o;
  }
}
$([
  P()
], G.prototype, "splitCells");
$([
  P()
], G.prototype, "mergeCells");
$([
  P()
], G.prototype, "setColumnWidth");
$([
  P()
], G.prototype, "setRowHeight");
$([
  P()
], G.prototype, "setCell");
$([
  P()
], G.prototype, "addRow");
$([
  P()
], G.prototype, "removeRows");
$([
  P()
], G.prototype, "removeColumns");
$([
  P()
], G.prototype, "addColumn");
$([
  P()
], G.prototype, "insertRows");
$([
  P()
], G.prototype, "insertColumns");
$([
  P()
], G.prototype, "clearCells");
$([
  P()
], G.prototype, "setRowVisible");
$([
  P()
], G.prototype, "setColumnVisible");
$([
  P()
], G.prototype, "exchangeRows");
$([
  P()
], G.prototype, "exchangeColumns");
$([
  P()
], G.prototype, "moveRows");
$([
  P()
], G.prototype, "moveColumns");
const ki = /^-?[0-9]*(\.[0-9]+)?$/;
function mt(s) {
  return s.text === "" ? !0 : ki.test(s.text);
}
function gt(s) {
  return s.text === "" ? Number.MIN_VALUE : parseFloat(s.text);
}
function Gt(s, e) {
  const t = mt(s), n = mt(e);
  return t && n ? gt(s) - gt(e) : !t && !n ? s.text < e.text ? -1 : 1 : t ? -1 : 1;
}
const Mi = (s) => (e, t) => Gt(e.getCell(s), t.getCell(s)), cr = ({
  grid: s
}) => ({
  sortColumn(e, t, n, o) {
    s.sort(Mi(e), t, n, o);
  }
}), dr = (s) => {
  let e = null, t = !0;
  return {
    get enabledColumnClick() {
      return t;
    },
    set enabledColumnClick(n) {
      t = n;
    },
    clearSortOrder() {
      e && (e.cellInfo = { sortOrder: void 0 }), e = null;
    },
    /**
     *
     * @deprecated
     */
    clearNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    removeNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    setNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    compareTo(n, o) {
      return Gt(n, o);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${s.uuid}`), s.onColumnClick = (n) => {
        t && this.toggleSortColumn(n);
      };
    },
    sortColumn(n, o) {
      s.sort((i, r) => this.compareTo(i.getCell(n), r.getCell(n)), o);
    },
    toggleSortColumn(n) {
      if (n.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      const o = n.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== n && this.clearSortOrder(), e = n, n.cellInfo = { sortOrder: o }, this.sortColumn(n.col, o);
    }
  };
}, hr = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, ur = /^-?\d+(\.\d+)?$/;
export {
  hr as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  ur as ALLOW_ONLY_NUMBER_PATTERN,
  or as CellDropPlugin,
  nr as ColumnFillPlugin,
  St as CustomCellRenderer,
  er as DefaultKeyPlugin,
  G as IRGrid,
  qo as IRGridButtonRenderer,
  Ot as IRGridCellDropPlugin,
  X as IRGridCellRenderer,
  xt as IRGridCheckboxRenderer,
  Ks as IRGridColumnFillPlugin,
  Vo as IRGridDatePickerRenderer,
  ns as IRGridDefaultCellIconButtonRenderer,
  Be as IRGridDefaultCellRenderer,
  At as IRGridDefaultKeyPlugin,
  ir as IRGridExchangeByHeaderCellPlugin,
  Ht as IRGridMouseCellSelectorPlugin,
  lr as IRGridMoveColumnsPlugin,
  rr as IRGridMoveRowsPlugin,
  ar as IRGridOverflowPanelPlugin,
  Js as IRGridPopoverPlugin,
  Uo as IRGridProgressRenderer,
  vt as IRGridRadioCellRenderer,
  Mt as IRGridResizerPlugin,
  os as IRGridRowNoHeaderCellRenderer,
  Ps as IRGridRowSelectionPlugin,
  Bo as IRGridSelectCellRenderer,
  Xs as IRGridSingleCellDragPlugin,
  Qi as MouseCellSelectorPlugin,
  Ji as ResizerPlugin,
  tr as RowSelectionPlugin,
  sr as SingleCellDragPlugin,
  Gt as cellCompare,
  es as createCellContent,
  ts as createCellContentWithIconButton,
  qi as createCustomRenderer,
  dr as createIRGridColumnSortManager,
  cr as createInferenceSortHandler,
  Ui as renderGridButton,
  Xi as renderGridCellDefault,
  Yi as renderGridCellIconButton,
  Vi as renderGridCheckbox,
  $i as renderGridDatePicker,
  ji as renderGridProgress,
  Ki as renderGridRadio,
  Pi as renderGridSelect,
  Zi as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
