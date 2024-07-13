import "./chunks/_init-CqtFEZw2.js";
import { a9 as At, aa as Dt, r as ne, ab as Wt, ac as Ot, b as gt, ad as Nt, x as Ft, f as Bt, ae as Gt, y as Pt, af as Vt, T as $t, O as jt, F as Ut, D as Kt, j as Ve, a as Xt, ag as Yt, t as Zt, u as qt, v as Jt, ah as Qt, a3 as F, ai as en, aj as tn, ak as nn, al as on, am as sn, an as rn, ao as ln, o as te, _ as an, I as cn, J as dn, ap as un, aq as hn, ar as gn, as as mn, at as fn, au as Cn, av as Oe, aw as wn, ax as pn, a6 as Rn, a8 as Ne, ay as Ee, az as _n, aA as xn, aB as bn, aC as W, aD as vn, aE as Sn, aF as yn, aG as Ie, aH as $e, a2 as En, aI as In, aJ as Tn, aK as Ln, g as Y, aL as ze, aM as Ae, aN as kn, aO as Mn, aP as Hn, aQ as zn, aR as An, aS as Dn, aT as Wn, aU as On, aV as Nn, aW as Fn, aX as Bn, aY as Gn, aZ as Pn, a_ as Vn, a$ as $n, l as Te, b0 as jn, b1 as Un, b2 as Kn, b3 as Xn, b4 as Yn, b5 as Zn, b6 as qn, b7 as Jn, q as Qn, a5 as eo, a0 as to, b8 as je } from "./chunks/rx-state-DkUPCYES.js";
import { f as q, b as no, d as oo, a as so, s as U, c as io, e as ro } from "./chunks/command-manager-6UH0gu0I.js";
import { I as lo } from "./chunks/index-E8PN8AEz.js";
import { g as De, o as ao, c as co, i as ue, b as uo, d as ho, f as go, s as mo } from "./chunks/floating-B9y9ooPB.js";
import { i as fo, d as me } from "./chunks/ko-CwHxoe1v.js";
import { p as Co } from "./chunks/pick-BLZiDVxr.js";
import { i as mt, r as wo, w as po } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { v as Ro } from "./chunks/v4-ANoOI1Qw.js";
function _o(s, e, t = 1) {
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
      return _o(n, o, t);
    },
    reduce(i, r) {
      let l = r, h = n;
      for (; h !== o; )
        l = i(l, h), h += t;
      return l;
    }
  };
}
function ee(s) {
  return s instanceof HTMLElement;
}
function Le(s, e) {
  return At(function(t, n) {
    var o = 0;
    t.subscribe(Dt(n, function(i) {
      n.next(s.call(e, i, o++));
    }));
  });
}
function Ue(s, e, t) {
  return ft(s, t) && Ct(e, t);
}
function J(s) {
  const e = parseInt(s.getAttribute("data-row") || "-1"), t = parseInt(s.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function ft(s, e) {
  return s >= e.top && s <= e.bottom;
}
function Ct(s, e) {
  return s >= e.left && s <= e.right;
}
function fe(s, e, t) {
  t ? s.classList.add(e) : s.classList.remove(e);
}
function xo(s) {
  let e = s.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function bo(s) {
  let e = s.target, t = s.offsetX, n = s.offsetY;
  for (; e !== s.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR")
      break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const vo = 20, So = 5;
class X {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = [n.icon, n.sortOrder].reduce((h, a) => a ? h + 1 : h, 0) * (vo + So), r = `${n.text ?? ""}`.split(`
`), l = i + o.calculateWidth(r[0] ?? "");
    return this.getHorizontalCellPadding(n) + O(1, r.length).reduce(
      (h, a) => Math.max(h, o.calculateWidth(r[a])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    const n = t.gridStore, o = t.paddingTop ?? n.getThemeValue("grid.paddingTop"), i = t.paddingBottom ?? n.getThemeValue("grid.paddingBottom");
    return o + i + xo(e);
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
}
class yo {
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
class P extends yo {
}
class re extends P {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: Co(
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
  checkbox: Ft,
  checkboxWrapper: Bt,
  checkboxText: Gt,
  checkboxInput: Pt,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, Eo = 16, We = 6, Io = We * 2, To = 20;
class Lo extends X {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("label"), r = document.createElement("input");
    if (o.classList.add(Wt, de.checkbox), i.classList.add(Ot, de.checkboxWrapper), r.type = "checkbox", r.className = de.checkboxInput, i.appendChild(r), n.icon && i.appendChild(gt(`ir-icon--${n.icon}`)), n.label) {
      const l = document.createElement("span");
      l.className = `${Nt} ${de.checkboxText}`, l.innerText = n.label, i.appendChild(l);
    }
    return n.horizontalAlign && o.classList.add(de[`horizontal_${n.horizontalAlign}`]), o.appendChild(i), r.checked = n.text === "true", i.onkeydown = (l) => l.preventDefault(), r.onchange = () => {
      const l = r.checked, h = l ? "true" : "false", { commandManager: a } = n.gridStore, c = new re(n.gridStore.commandContext, [e, t, { text: h }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, a.pushCommandBlock(new q(
        "Change checkbox",
        c
      )), n.text = h, this.onCheckboxClick(e, t, l);
    }, o;
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = n.label ? We + o.calculateWidth(n.label) : 0, r = n.icon ? We + To : 0;
    return Eo + Io + i + r + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
}
function Gi(s) {
  const e = new Lo(s ?? {});
  return () => e;
}
const Ce = { select: $t, selectInput: jt, selectInputNative: Ut, selectInputIcon: Kt }, Ke = /* @__PURE__ */ new WeakMap(), ko = 20, Mo = 4, Xe = ko + Mo, Ho = 18, zo = 150, Ao = (s, e) => e ?? "";
class Do extends X {
  constructor({
    items: e,
    allowCustomText: t = !1,
    showErrorIfCustomText: n = !1,
    allowEdit: o = !1,
    onChange: i,
    customDisplayTextFunc: r = Ao,
    getVisibleFunc: l = () => !0
  }) {
    super(), this._dropDownItemList = [], this._dropDownContext = no(), this._itemWidth = null, this._isExpanded = !1, this._floatingCleanup = () => {
    }, this._items = e, this._itemTextSet = /* @__PURE__ */ new Set(), this._allowCustomText = t, this._allowEdit = o, o && (this._allowCustomText = !0), this._customDisplayTextFunc = r, this._showErrorIfCustomText = n, this._getVisibleFunc = l, i && (this.onChange = i.bind(this));
    for (const { value: h, text: a } of e) {
      const { item: c, button: u } = oo(h, a);
      this._itemTextSet.add(a), this._dropDownItemList.push({ value: h, text: a, buttonElement: u, itemWrapperElement: c }), this._dropDownContext.ulItems.appendChild(c);
    }
  }
  getSelectedItemOrNull(e) {
    for (const t of this._dropDownItemList)
      if (t.text === e)
        return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: o,
      _allowEdit: i,
      _showErrorIfCustomText: r,
      _customDisplayTextFunc: l,
      _getVisibleFunc: h,
      _dropDownContext: { divDropdown: a },
      _dropDownItemList: c
    } = this, u = document.createElement("div"), m = document.createElement("span"), f = document.createElement("i"), I = n.text === "" || n.text === null || n.text === void 0;
    u.classList.add(Vt, Ce.select, Ce.selectInput), m.classList.add(Ce.selectInputNative), f.classList.add(Ce.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), i && u.classList.add("is-editable");
    let p = !1;
    const y = this.getSelectedItemOrNull(n.text);
    y && (m.textContent = l(y.value, y.text, !1), n.value = y.value, p = !0), p || (o ? (m.textContent = l(n.value, n.text, !0), n.value = n.text) : (m.textContent = "", n.value = "")), // error 상태 표시 지정 시, error 속성 추가
    o && r && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !I && !p && (u.dataset.error = "true");
    const T = Xt({
      eventElements: [u, a],
      clickOutsideFunc: () => b.hide()
    }), b = {
      show: () => {
        this._isExpanded = !0, w.create(), T.create(), this._beforeValue = n.value, this._beforeText = n.text;
        for (const E of c) {
          const { value: g, text: v, itemWrapperElement: x, buttonElement: L } = E;
          h(E) === !1 ? x.style.display = "none" : x.style.display = "", v === n.text ? x.classList.add(Ve) : x.classList.remove(Ve), L.onclick = () => {
            const R = new re(n.gridStore.commandContext, [e, t, { text: v, value: g }]);
            R.onUndo = () => {
              this.onChange(e, t, this._beforeValue, this._beforeText, g, v);
            }, R.onExecute = () => {
              this.onChange(e, t, g, v, this._beforeValue, this._beforeText);
            }, n.gridStore.commandManager.pushCommandBlock(new q(
              "Change select menu",
              R
            )), n.text = v, n.value = g, m.textContent = l(g, v, !1), u.dataset.error && delete u.dataset.error, this.onChange(e, t, g, v, this._beforeValue, this._beforeText), b.hide();
          };
        }
        const d = this.getItemWidth(n.fontSize || "13px", n.fontFamily || "Pretendard", n), C = u.offsetWidth, _ = n.gridStore.getThemeValue("grid.defaultDropdownWidth");
        a.style.maxWidth = `${C > _ ? C : _}px`, a.style.width = `${Math.max(d, C)}px`, a.setAttribute("data-row", e.toString()), a.setAttribute("data-col", t.toString()), De("popover").appendChild(a), u.classList.add("is-expanded"), setTimeout(() => {
          a.classList.add("is-expanded"), this._floatingCleanup(), this._floatingCleanup = ao(u.parentElement, a, "bottom-start");
        }, 0);
      },
      hide: () => {
        this._isExpanded = !1, w.destroy(), T.destroy(), u.classList.remove("is-expanded"), a.classList.remove("is-expanded"), setTimeout(() => {
          a.getAttribute("data-row") === e.toString() && a.getAttribute("data-col") === t.toString() && (this._floatingCleanup(), a.remove());
        }, zo);
      }
    }, w = co(b), S = () => {
      u.classList.contains("is-expanded") ? b.hide() : b.show();
    };
    return u.onclick = (d) => {
      i && d.target !== f || S();
    }, u.appendChild(m), u.appendChild(f), u;
  }
  onChange(e, t, n, o, i, r) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text)
      return 0;
    const o = ne(e, t), i = this._itemTextSet.has(n.text), r = this._customDisplayTextFunc(n.value, n.text, !i), l = o.calculateWidth(r);
    return Xe + l + this.getHorizontalCellPadding(n);
  }
  getDropdownWidth(e, t, n) {
    const o = ne(e, t), i = this._items.reduce((r, l) => Math.max(r, o.calculateWidth(l.text)), 0);
    return Xe + i + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const o = Ke.get(this);
    if (o)
      return o;
    const i = this.getDropdownWidth(e, t, n);
    return Ke.set(this, i), i;
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + Ho;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
}
const Pi = (s) => {
  const e = new Do(s);
  return () => e;
}, ke = { input: Zt, inputNative: qt, inputSuffix: Jt }, Wo = 28, oe = /* @__PURE__ */ new WeakMap();
class Oo extends X {
  constructor({
    onDateClick: e,
    format: t = fo.datePicker.dateFormat,
    minDate: n = ue().getStoreValue("datePicker.minDate"),
    maxDate: o = ue().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: i = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = o, this._allowedEmptyString = i, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return ne(e, t).calculateWidth(n.text || this._format) + Wo + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("input"), r = document.createElement("button"), l = document.createElement("i"), {
      _minDate: h,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: u
    } = this;
    if (i.readOnly = !0, i.maxLength = c.length, o.classList.add(ke.input, Yt), i.classList.add(ke.inputNative), r.classList.add(ke.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), i.type = "text", i.placeholder = c, n.text !== "") {
      const f = me(n.text, c, !0);
      f.isValid() || (n.text = oe.get(n)), (f.isBefore(h) || f.isAfter(a)) && (n.text = oe.get(n));
    }
    !u && (n.text === "" || n.text === void 0) && (n.text = oe.has(n) ? oe.get(n) : me().format(c)), i.value = n.text || "", oe.set(n, n.text ?? ""), r.appendChild(l), o.appendChild(i), o.appendChild(r);
    const m = so({
      uuid: Ro(),
      refElement: o,
      minDate: h,
      maxDate: a,
      onClick: (f) => {
        const I = n.text, p = me(f).format(c), y = new re(n.gridStore.commandContext, [e, t, { text: p }]);
        y.onUndo = () => {
          this.onDateClick(e, t, I ?? "");
        }, y.onExecute = () => {
          this.onDateClick(e, t, p);
        }, n.gridStore.commandManager.pushCommandBlock(new q("Change datePicker", y)), i.value = p, n.text = p, oe.set(n, p), this.onDateClick(e, t, p), m.hide();
      }
    });
    return r.onclick = () => {
      if (!m.visible) {
        const f = me(n.text, c, !0);
        f.isValid() ? m.update(f.toDate(), f.toDate()) : m.update(/* @__PURE__ */ new Date(), null), m.show();
      }
    }, o;
  }
  get renderType() {
    return "datePicker";
  }
}
const Vi = (s) => {
  const e = new Oo(s);
  return () => e;
}, we = {
  progress: en,
  progressVariants: tn
}, No = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, Fo = 100, Bo = 100;
class Go extends X {
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: o = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = o;
  }
  render(e, t, n) {
    const {
      _min: o,
      _max: i,
      _afterDecimalLen: r,
      _defaultIntent: l
    } = this, h = document.createElement("div"), a = document.createElement("div");
    h.className = Qt, a.className = we.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${we.progress}--${c}`);
    const m = (F(parseFloat(n.text || "0"), o, i) - o) / (i - o) * Fo;
    return U(a, {
      [we.progressVariants.progressPercent]: `${m}%`,
      [we.progressVariants.progressText]: `'${m.toFixed(r)}%'`
    }), h.appendChild(a), h;
  }
  getCellInnerWidth(e, t, n) {
    return Bo + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
}
const $i = (s = No) => {
  const e = new Go(s);
  return () => e;
}, Po = 20, Vo = 24, $o = 24, jo = 29, Ye = {
  primary: an,
  secondary: cn,
  tertiary: dn,
  transparent: un,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Uo extends X {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = jo : e.outlineStyle ? this._extraWidth = $o : this._extraWidth = 0;
  }
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: o,
      outlineStyle: i,
      defaultColor: r,
      defaultIcon: l,
      defaultLabel: h
    } = this.args, a = document.createElement("div"), c = document.createElement("button");
    a.className = nn, c.classList.add(on, "button");
    const u = n.intent ?? r;
    u && c.classList.add(Ye[u]), i ? a.classList.add(sn) : o && a.classList.add(rn), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(Ye[n.horizontalAlign]), c.onclick = (I) => this.onClick(I, e, t);
    const m = n.icon ?? l, f = o ? n.text ?? "" : n.label ?? h ?? "";
    if (m) {
      const I = document.createElement("i");
      I.classList.add(ln, "ir-icon", `ir-icon--${m}`), c.appendChild(I);
    }
    if (f) {
      const I = te("span");
      if (I.innerText = f, o) {
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
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? Po : 0;
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t);
    return this.getHorizontalCellPadding(n) + o.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    return Vo;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
}
const ji = (s) => {
  const e = new Uo(s ?? {});
  return () => e;
}, pe = { radio: gn, radioWrapper: mn, radioInput: fn, radioText: Cn }, Ko = 16, wt = 6, Xo = wt * 2;
class Yo extends X {
  constructor({ onRadioClick: e }) {
    super(), this._radioItemStack = [], e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  render(e, t, n) {
    const o = document.createElement("div"), i = document.createElement("label"), r = document.createElement("input");
    if (o.className = `${hn} ${pe.radio}`, i.className = pe.radioWrapper, r.type = "radio", r.className = pe.radioInput, i.appendChild(r), n.label) {
      const l = document.createElement("span");
      l.className = pe.radioText, l.innerText = n.label, i.appendChild(l);
    }
    return o.appendChild(i), r.checked = n.text === "true", r.checked === !0 && this.stackClickedRadio({ radio: r, data: n, row: e, col: t }), i.onkeydown = (l) => l.preventDefault(), r.onclick = () => {
      const l = n.gridStore.commandContext, h = new re(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
      h.onUndo = () => {
        a && (l.setCell(a.row, a.col, { text: "true" }), this.onRadioClick(a.row, a.col));
      }, h.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new q("Click radioButton", h)), this.stackClickedRadio({ radio: r, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, o;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const o = ne(e, t), i = n.label ? wt + o.calculateWidth(n.label) : 0;
    return Ko + Xo + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
}
const Ui = ({ onRadioClick: s }) => {
  const e = new Yo({ onRadioClick: s });
  return () => e;
};
function Zo(s) {
  const e = document.createElement("div");
  if (e.className = Oe, s.sortOrder !== void 0) {
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
function qo(s, e, t, n) {
  const o = document.createElement("div");
  if (o.className = Oe, t.icon) {
    const i = document.createElement("button"), r = document.createElement("i");
    i.setAttribute("type", "button"), i.classList.add("icon-button", wn), i.onclick = (l) => {
      n && n(l, s, e);
    }, r.classList.add("ir-icon", `ir-icon--${t.icon}`), t.iconColor && r.style.setProperty("--ir-icon-foreground-color", t.iconColor), i.appendChild(r), o.appendChild(i);
  }
  if (t.text) {
    const i = document.createElement("span");
    i.innerText = t.text, o.appendChild(i);
  }
  return o;
}
class Fe extends X {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const o = Zo(n), {
      ellipsis: i = !0
    } = this._args;
    return i && o.classList.add(pn), o;
  }
  get renderType() {
    return "default";
  }
}
class Jo extends X {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return qo(e, t, n, (o, i, r) => this.onClick(o, i, r));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Qo extends X {
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
    o.className = Oe;
    const l = r < this._captionList.length ? this._captionList[r] : `${this._prefix}${1 + r - this._captionList.length}`;
    return i.innerText = l, n.text = l, o.appendChild(i), o;
  }
}
const Ki = () => {
  const s = new Fe();
  return () => s;
};
function Xi({ onClick: s }) {
  const e = new Jo({ onClick: s });
  return () => e;
}
function Yi(s, ...e) {
  const t = new Qo(s, ...e);
  return () => t;
}
const Ze = /* @__PURE__ */ new WeakMap();
class es extends Fe {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function ts(s) {
  const e = Ze.get(s);
  if (e)
    return e;
  const t = new es(s);
  return Ze.set(s, t), t;
}
function ns(s, e) {
  return {
    getPastingRange: t,
    beforePastingList: n,
    pasteTask: o
  };
  function t(i, r) {
    if (r.length === 0)
      throw new Error("No pasting data.");
    const l = { ...i }, h = r.length, a = r[0].length, c = l.top + h, u = l.left + a;
    for (let m = i.bottom + 1; m < c; ++m)
      (s.hasRow(m) || s.onAutoInsertRow(m)) && (l.bottom = m);
    for (let m = i.right + 1; m < u; ++m)
      (s.hasColumn(m) || s.onAutoInsertColumn(m)) && (l.right = m);
    return l;
  }
  function n(i, r) {
    if (r.length === 0)
      throw new Error("No pasting data.");
    const l = r.length, h = r[0].length, a = [], c = i.bottom - i.top + 1, u = i.right - i.left + 1;
    function m(f, I) {
      const [p, y] = [f % l, I % h];
      return r[p][y];
    }
    for (const { y: f, x: I } of Rn(c, u)) {
      const [p, y] = [f + i.top, I + i.left];
      if (!s.hasRow(p) && s.onAutoInsertRow(p) && (s.addRow(), s.onAutoInsertedRow(p)), !s.hasColumn(y) && s.onAutoInsertColumn(y) && (s.addColumn(), s.onAutoInsertedColumn(y)), !s.hasRow(p) || !s.hasColumn(y))
        continue;
      const T = s.cell(p, y), b = m(f, I);
      b.cellVisible && s.onCheckPasteCell(T, b.text) && a.push({
        cell: T,
        cellMetaInfo: {
          text: b.text,
          cellVisible: b.cellVisible,
          rowSpan: e.rowSpan ? b.rowSpan : 1,
          colSpan: e.colSpan ? b.colSpan : 1,
          isFormatted: !1
        }
      });
    }
    return a;
  }
  function o(i) {
    for (const { cell: r, cellMetaInfo: l } of i) {
      const { rowSpan: h, colSpan: a, cellVisible: c } = l;
      if (!c)
        continue;
      const { row: u, col: m } = r;
      if (h > 1 || a > 1) {
        const I = { top: u, left: m, bottom: u + h - 1, right: m + a - 1 };
        s.mergeCells(I.top, I.left, I.bottom, I.right);
      }
      s.setCell(u, m, { text: l.text }), s.onClipboardAfterPasteCell(r);
    }
  }
}
function os(s) {
  return JSON.stringify(s);
}
function ss(s) {
  return JSON.parse(s);
}
function is(s) {
  const e = new Document(), t = e.createElement("table");
  return s.forEach((n) => {
    const o = e.createElement("tr");
    n.filter((i) => i.cellVisible).forEach((i) => {
      const r = e.createElement("td");
      r.textContent = i.text, r.setAttribute("rowSpan", `${i.rowSpan}`), r.setAttribute("colSpan", `${i.colSpan}`), o.appendChild(r);
    }), t.appendChild(o);
  }), e.appendChild(t), e.documentElement.outerHTML;
}
function rs(s) {
  const n = new DOMParser().parseFromString(s, "text/html").querySelectorAll("tr");
  if (n.length === 0)
    return console.warn("No tr element in clipboard data"), [];
  const o = Array(n.length).fill(void 0).map(() => []);
  function i(h, a, c, u) {
    for (let m = h; m < h + c; ++m)
      for (let f = a; f < a + u; ++f)
        o[m][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
  function r(h) {
    let a = h;
    for (; o[l][a] !== void 0; )
      ++a;
    return a;
  }
  let l = 0;
  for (const h of n) {
    const a = h.querySelectorAll("td");
    let c = r(0);
    for (const u of a)
      (u.rowSpan > 1 || u.colSpan > 1) && i(l, c, u.rowSpan, u.colSpan), o[l][c] = {
        text: pt(u),
        rowSpan: u.rowSpan,
        colSpan: u.colSpan,
        cellVisible: !0,
        isFormatted: u.hasAttribute("class")
      }, c = r(c);
    ++l;
  }
  return o;
}
function pt(s) {
  const e = [];
  let t = s.firstChild;
  for (; t; )
    t.nodeType === Node.TEXT_NODE && t.nodeValue ? e.push(ls(t.nodeValue)) : t.nodeType === Node.ELEMENT_NODE && t instanceof HTMLElement && (t.nodeName === "BR" ? e.push(`
`) : t.textContent && e.push(pt(t))), t = t.nextSibling;
  return e.join("");
}
function ls(s) {
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
function as(s) {
  if (s.length === 0)
    return !0;
  const e = s[0].length;
  return s.every((t) => t.length === e);
}
const Rt = "	", _t = `
`;
function cs(s) {
  if (!as(s))
    throw new Error("Wrong text matrix dimension");
  return s.map(
    (e) => e.map(
      ({ text: t }) => t
    ).join(Rt)
  ).join(_t);
}
function ds(s) {
  if (s.length === 0)
    return [];
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
    r !== "\r" && (r === Rt ? o() : r === _t ? i() : t.push(r));
  return (t.length > 0 || n.length > 0) && i(), e;
}
const be = [
  {
    format: "ir-grid/cell",
    parseFunc: ss,
    payloadFunc: os
  },
  {
    format: "text/html",
    parseFunc: rs,
    payloadFunc: is
  },
  {
    format: "text/plain",
    parseFunc: ds,
    payloadFunc: cs
  }
];
function us(s, e) {
  be.forEach(
    ({ format: t, payloadFunc: n }) => s.setData(t, n(e))
  );
}
function xt(s) {
  return s.isFormatted && s.text.startsWith("#");
}
function hs(s) {
  return s.some((e) => e.some((t) => xt(t)));
}
function gs(s, e) {
  var t, n;
  for (let o = 0; o < s.length; ++o) {
    const i = s[o].length;
    for (let r = 0; r < i; ++r)
      (n = (t = e[o]) == null ? void 0 : t[r]) != null && n.text && xt(s[o][r]) && (s[o][r].text = e[o][r].text);
  }
  return s;
}
function qe(s) {
  for (const { format: e, parseFunc: t } of be) {
    const n = s.getData(e);
    if (n !== "") {
      const o = t(n);
      if (!hs(o))
        return o;
      const i = s.getData(be[2].format);
      return gs(
        o,
        be[2].parseFunc(i)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
class ms extends Ne {
  constructor() {
    super([]);
  }
}
class fs extends Ne {
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
  getCanClearCellCount(e) {
    let t = 0;
    for (const n of this.getSelectionGenerator(e))
      n.canClear && t++;
    return t;
  }
}
class ve {
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
      if (!i.isMerged && !i.mergeMain)
        continue;
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
        for (const h of l)
          o.push(h);
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
        for (const h of l)
          o.push(h);
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
        for (const h of l)
          o.push(h);
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
        for (const h of l)
          o.push(h);
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
class Cs extends Ne {
  constructor(e) {
    super(null, (t) => {
      const n = new ve(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        Le((o) => {
          if (!o || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns)
            return null;
          const { activeCell: i, range: r } = o;
          return i.element.isConnected && i.row >= r.top && i.row <= r.bottom && i.col >= r.left && i.col <= r.right ? o : {
            activeCell: e.cell(r.top, r.left),
            range: o.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        Le((o) => {
          if (!o)
            return null;
          const i = n.adjustRange(o.range);
          return i ? { activeCell: o.activeCell, range: i } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        Le((o) => o ? { activeCell: o.activeCell, range: n.extendRange(o.range) } : null)
      );
    });
  }
}
class ws {
  #e;
  #t;
  #l;
  constructor(e) {
    this.#e = new Cs(e), this.#t = new fs(), this.#l = new ms();
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
    return this.#l;
  }
}
const ps = /^var\((.+)\)$/;
function Rs(s) {
  const e = ps.exec(s);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${s}' is not custom-property name.`);
}
const _s = [
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
class xs {
  #e;
  #t;
  #l = -1;
  #s = -1;
  #r = 1;
  #h = 1;
  #o = !0;
  #m;
  #a;
  #d = null;
  #c;
  #g = "body-cell";
  constructor({ row: e, col: t, tag: n, props: o, cellRenderer: i }) {
    this.#t = { ...o }, this.#e = n, this.#a = i, this.#l = e, this.#s = t;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(Ee) || this.element.tagName === "TH";
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this.#t.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this.#r > 1 || this.#h > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this.#t);
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
      bottom: this.row + this.#r - 1,
      right: this.col + this.#h - 1
    };
  }
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  get mergeInfo() {
    return {
      rowSpan: this.#r,
      colSpan: this.#h
    };
  }
  get mergeMain() {
    return this.#m;
  }
  get row() {
    return this.#l;
  }
  get col() {
    return this.#s;
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
    return this.#o;
  }
  get cellRenderer() {
    return this.#a;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.metaInfo;
    return e !== !0 && t !== !0 && this._getRenderInstance().editable && n !== "";
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
  initElement() {
    const e = document.createElement(this.#e);
    return e.rowSpan = this.#r, e.colSpan = this.#h, e.classList.add(_n, this.#e === "th" ? xn : bn), e.setAttribute("data-row", this.#l.toString()), e.setAttribute("data-col", this.#s.toString()), e.setAttribute("data-type", this.#g), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      ee(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
    }, e;
  }
  get element() {
    return this.#d === null && (this.#d = this.initElement()), this.#d;
  }
  get editable() {
    return !(this.#t.editable === !1 || this.#t.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this.#t;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(Rs(W.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this.#o = !0, this.element.style.removeProperty("display"), this.render()) : (this.#o = !1, this.element.style.display = "none");
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
    e === 1 && (this.height = null), this.element.rowSpan = e, this.element.colSpan = t, this.#r = e, this.#h = t, this.render();
  }
  set mergeMain(e) {
    this.#m = e, this.visible = e === void 0;
  }
  set row(e) {
    this.#l = e, this.#d && this.element.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this.#s = e, this.#d && this.element.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this.#a = e, this.render();
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
    this.#m ? this.#m.element.classList.add("is-active") : this.element.classList.add("is-active");
  }
  deactivate() {
    this.syncClassRemoveWithMergeMain("is-active");
  }
  updateReadonlyStatus() {
    fe(this.element, "is-readonly", this.onCheckReadonly());
  }
  setStickyLeft(e) {
    this.element.style.left = `${e}px`;
  }
  removeStickyLeft() {
    this.element.style.removeProperty("left");
  }
  setStickyTop(e) {
    this.element.style.top = `${e}px`;
  }
  removeStickyTop() {
    this.element.style.removeProperty("top");
  }
  setStickyZIndex(e, t, n) {
    this.element.style.removeProperty(W.stickyCellZId), this.removeStickyCls(), this.removeStickyTop(), this.removeStickyLeft(), e !== null && (U(this.element, { [W.stickyCellZId]: _s[e] }), this.addStickyCls(), e >= j.lv5 && this.setStickyTop(t), (e === j.lv9 || e === j.lv7 || e === j.lv6 || e === j.lv4 || e === j.lv3) && this.setStickyLeft(n));
  }
  applyCustomProp(e, t) {
    t !== void 0 ? U(this.element, { [e]: `${t}px` }) : U(this.element, { [e]: void 0 });
  }
  updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: o
    } = this.#t;
    this.applyCustomProp(W.cellTopPadding, e), this.applyCustomProp(W.cellLeftPadding, t), this.applyCustomProp(W.cellRightPadding, n), this.applyCustomProp(W.cellBottomPadding, o);
  }
  updateCellStatus() {
    fe(this.element, "is-disabled", this.#t.disabled === !0), fe(this.element, "is-asc", this.#t.sortOrder === "ASC"), fe(this.element, "is-desc", this.#t.sortOrder === "DESC"), this.updateReadonlyStatus(), this.#t.isError ? this.addMark(vn) : this.#t.hasMemo ? this.addMark(Sn) : this.#c && this.removeMark(), this.element.style.textAlign = this.#t.horizontalAlign || "", this.element.style.verticalAlign = this.#t.verticalAlign || "", this.element.style.fontSize = this.fontSize, this.element.style.fontFamily = this.fontFamily, this.element.style.color = this.#t.textColor || "", this.element.style.backgroundColor = this.#t.backColor || "";
  }
  _getRenderInstance() {
    if (this.#a instanceof X)
      return this.#a;
    if (typeof this.#a == "function") {
      const e = this.#a(this.row, this.col, this.#t);
      if (e instanceof X)
        return e;
      if (e instanceof HTMLElement)
        return ts(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this.row, this.col, this.#t);
  }
  replaceElement(e) {
    this.removeChildren(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  render() {
    this.#d !== null && this.visible && (this.removeChildren(), this.updateCellStatus(), this.updateCellAttr(), this.element.appendChild(this._getRenderElement()));
  }
  clear() {
    this.cellInfo = { text: "" }, this.onClear(this);
  }
  addStickyCls() {
    this.element.classList.add(Ee);
  }
  removeStickyCls() {
    this.element.classList.remove(Ee);
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
  /*
   * Private Methods
   */
  removeChildren() {
    for (; this.element.lastChild; )
      this.element.lastChild.remove();
  }
  syncClassRemoveWithMergeMain(...e) {
    this.mergeMain ? this.mergeMain.element.classList.remove(...e) : this.element.classList.remove(...e);
  }
  addMark(e) {
    this.#c || (this.#c = document.createElement("span")), this.#c.className = e, this.element.appendChild(this.#c);
  }
  removeMark() {
    this.#c && (this.#c.remove(), this.#c = void 0);
  }
}
const Re = -1, bs = [
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
class vs {
  #e;
  #t;
  #l;
  #s;
  #r;
  #h;
  #o;
  #m;
  #a = /* @__PURE__ */ new Set();
  #d = [];
  #c = Re;
  constructor(e, t, n, o, i, r) {
    this.#e = e, this.#t = t, this.#o = n, this.#l = o, this.#m = i, this.#r = r, this.#h = new ve(e), this.#s = document.createElement("tr"), this.#s.className = yn, this.#s.dataset.hidden = "true", U(this.#s, {
      [W.emptyRowHeight]: "0"
    }), this.#l.appendChild(this.#s), e.addGlobalEventListener(i, "scroll", () => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll"), this.forceRunTasks();
    });
  }
  renderTask() {
    const e = new Set(this.#a);
    this.#a.clear(), this.#c = Re;
    for (const t of bs)
      if (!(!e.has(t) || t === "nothing"))
        try {
          this[t].call(this);
        } catch (n) {
          console.error(t, n);
        }
    this.#d.forEach((t) => t()), this.#d.length = 0;
  }
  forceRunTasks() {
    this.#c !== Re && cancelAnimationFrame(this.#c), this.renderTask();
  }
  addTask(e) {
    return this.#a.add(e), this.#c === Re && (this.#c = requestAnimationFrame(() => this.renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  getActualBodyRowsInfo() {
    const e = this.#e.getRowCount() - 1, t = Math.min(
      this.#e.getFreezedRowCount(),
      e
    ), { fixedRowHeight: n } = this.#e, { scrollTop: o, clientHeight: i } = this.#m, r = this.#e.getRowByTop(n + o + 1) ?? this.#e.firstRow, l = this.#e.getRowByTop(o + i) ?? this.#e.lastRow, h = O(0, t).asList();
    if (!r || !l)
      return { emptyRowHeight: 0, viewRowList: h };
    const a = r.getTopRowId(), c = l.getBottomRowId(), u = this.#e.getRow(Math.max(a - 2, t)), m = this.#e.getRow(Math.min(c + 2, e));
    return {
      emptyRowHeight: u.top - n,
      // viewport row 영역 list에 추가
      viewRowList: h.concat(O(u.rowId, m.rowId + 1).asList())
    };
  }
  getGridRow(e) {
    const t = parseInt(e.dataset.row ?? "", 10);
    return t !== t ? null : this.#e.getRow(t);
  }
  virtualRender() {
    const { emptyRowHeight: e, viewRowList: t } = this.getActualBodyRowsInfo(), n = new Set(t), o = this.#e.getFreezedRowCount(), { headerRows: i } = this.#e;
    let r = this.#l.lastElementChild;
    for (; r; ) {
      const a = this.getGridRow(r);
      r = r.previousElementSibling, a && !n.has(a.rowId) && a.unmount();
    }
    e === 0 ? this.#s.dataset.hidden = "true" : (this.#s.dataset.hidden = "false", U(this.#s, {
      [W.emptyRowHeight]: `${e}px`
    }));
    let l = null, h = !1;
    for (const a of t) {
      const c = this.#e.getRow(a);
      if (a < o ? !c.isFreezed && c.freeze(a < i) : h === !1 && (l === null ? this.#l.insertAdjacentElement("afterbegin", this.#s) : l.insertAdjacentElement("afterend", this.#s), h = !0, l = this.#s), c.isMounted) {
        l = c.element;
        continue;
      }
      c.visible && (l === null ? c.mount(this.#l, "afterbegin") : c.mount(l, "afterend"), l = c.element);
    }
  }
  updateRowsStickyLeft() {
    for (let e = 0; e < this.#e.getRowCount(); e++)
      this.#e.getRow(e).updateStickyStatus();
  }
  updateSelection() {
    this.#r.update();
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
    if (!e)
      return this.#e.releaseCells();
    const t = this.#h.adjustRange(e.range);
    if (!t)
      return this.#e.releaseCells();
    this.#e.select(this.#h.extendRange(t));
  }
  updateSelectionByScroll() {
    this.#r.updateScroll();
  }
  resizeGridWrapperHeight() {
    this.#o.style.height = `${this.#e.height}px`;
  }
  generateScrollBarClass() {
    this.#e.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this.#d.push(e);
  }
  get isScheduled() {
    return this.#a.size > 0;
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
    return this.element.classList.contains(Ie);
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this.element.classList.contains($e);
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
    e && (En(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, o]) {
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n)
      throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${o}`);
    const [i, r, l, h] = e < n ? [e, t, n, o] : [n, o, e, t];
    this._cells = [
      ...this._cells.slice(0, i),
      ...this._cells.slice(l, h + 1),
      ...this._cells.slice(r + 1, l),
      ...this._cells.slice(i, r + 1),
      ...this._cells.slice(h + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
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
    if (!t)
      throw new Error(`Not found cell ${this._rowId}, ${e}`);
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
    e && this.element.classList.add($e), this.element.classList.add(Ie), this.updateStickyStatus();
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
    if (this.isHeaderRow)
      throw new Error("Can not freeze header row!");
    this.element.classList.remove(Ie), this.updateStickyStatus();
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
    if (!t)
      throw new Error(`Not found row ${e}`);
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
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
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
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n)
      throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${o}`);
    const [i, r, l, h] = e < n ? [e, t, n, o] : [n, o, e, t], a = this._rowList.slice(i, r + 1), c = this._rowList.slice(l, h + 1);
    a.forEach((u) => u.unmount()), c.forEach((u) => u.unmount()), this._rowList = [
      ...this._rowList.slice(0, i),
      ...c,
      ...this._rowList.slice(r + 1, l),
      ...a,
      ...this._rowList.slice(h + 1)
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
      if (n.visible && (this.addFixedHeight(n, e), ++e), e >= t)
        break;
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
    if (t === "remove" && !e.visible)
      return;
    const n = e.height + se, o = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += o;
  }
  sort(e, t, n, o) {
    const i = this._rowList.slice(0, n), r = this._rowList.slice(n, o), l = this._rowList.slice(o);
    r.forEach((h) => h.unmount()), r.sort((h, a) => t === "ASC" ? e(h, a) : -e(h, a)), this._rowList = [
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
      if (!o)
        break;
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
class Je {
  #e;
  #t = 0;
  #l = 0;
  #s = 0;
  #r = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this.#e = document.createElement("col"), this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this.#l;
  }
  get left() {
    return this.#t;
  }
  get width() {
    return this.#s;
  }
  get widthWithBorder() {
    return this.#s + ie;
  }
  get colElement() {
    return this.#e;
  }
  get visible() {
    return this.#r;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this.#r = e, e ? this.#e.style.removeProperty("display") : this.#e.style.display = "none";
  }
  set columnId(e) {
    this.#l = e, this.#e.dataset.column = e.toString();
  }
  set left(e) {
    this.#t = e, this.#e.dataset.left = e.toString();
  }
  set width(e) {
    this.#s = e, this.#e.style.width = `${this.widthWithBorder}px`, this.#e.dataset.width = e.toString();
  }
  remove() {
    this.#e.remove();
  }
  isBetweenLeft(e) {
    return e >= this.left && e <= this.right;
  }
}
class Es {
  constructor(e, t, n) {
    this._columnsList = [], this._visibleColumnsList = [], this._columnsWidth = 0, this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0, this._colGroup = document.createElement("colgroup"), this._rowHeaderColumns = e, this._freezedColumns = t, this.#e = n;
  }
  #e;
  addColumn(e) {
    const t = new Je({
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
    if (t === "remove" && !e.visible)
      return;
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
    const o = this.getColumn(e), i = o.left, r = O(t).map((l) => new Je({
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
    if (!t)
      throw new Error("No column");
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
function Is({ colgroup: s }) {
  const e = document.createElement("table"), t = document.createElement("div"), n = document.createElement("tbody");
  return t.className = In, e.classList.add(Tn), e.appendChild(s), e.appendChild(n), t.appendChild(e), {
    table: e,
    wrapper: t,
    tbody: n
  };
}
const Ts = 1e4;
function Ls({ rowManager: s, colManager: e, commandManager: t, cursorManager: n }) {
  const o = te("textarea", Ln);
  let i = null;
  const r = {
    focus: l,
    runEditMode: m,
    setPosition: a,
    mountElement(d) {
      I(), d.appendChild(o);
    },
    onEditDone(d, C, _, E, g, v) {
    },
    onEditKeyDown(d, C, _, E) {
    },
    onEnterOnEdit(d, C) {
    }
  };
  return r;
  function l() {
    o.focus({ preventScroll: !0 });
  }
  function h(d) {
    o.value = d;
  }
  function a(d, C, _) {
    const E = s.getRow(d.row), g = e.getColumn(d.col), v = d.row < s.freezedRows ? C : 0, x = d.col < e.freezedColumns ? _ : 0;
    o.style.top = `${E.top + v}px`, o.style.left = `${g.left + x}px`;
  }
  function c(d) {
    o.style.width = `${d.element.offsetWidth - 1}px`, o.style.height = `${d.element.offsetHeight - 1}px`;
  }
  function u(d) {
    const C = d === "" ? W.zLevel1 : `calc(${d} + 1000)`;
    o.style.zIndex = C;
  }
  function m(d, C, _, E = !1) {
    i = {
      cell: d,
      beforeText: d.metaInfo.text ?? "",
      cancelEndEdit: !1
    }, E || h(i.beforeText), o.maxLength = d.props.maxLength ?? Ts, u(d.zIndexVariant), a(d, C, _), c(d), l(), o.scrollTo(0, o.scrollHeight);
  }
  function f() {
    h(""), i = null, o.style.removeProperty("height"), o.style.removeProperty("width"), o.style.removeProperty("z-index");
  }
  function I() {
    o.addEventListener("keydown", y), o.addEventListener("blur", T), o.addEventListener("keyup", p);
  }
  function p() {
    i || h("");
  }
  function y(d) {
    if (!i)
      return;
    const { beforeText: C, cell: _ } = i;
    if (d.key === "Escape") {
      b(o.value, !1, d.key);
      return;
    }
    if (d.key === "Enter" && d.altKey && _.metaInfo.editSingleLine !== !0) {
      d.preventDefault();
      const E = o.selectionStart;
      try {
        i.cancelEndEdit = !0, o.blur(), o.value = [
          o.value.substring(0, E),
          o.value.substring(o.selectionEnd)
        ].join(`
`), l(), o.setSelectionRange(E + 1, E + 1, "backward"), r.onEditKeyDown(d, _.row, _.col, _.metaInfo);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (w(d)) {
      d.preventDefault(), b(o.value, C !== o.value, d.key), d.key === "Enter" ? r.onEnterOnEdit(d.ctrlKey, d.shiftKey) : S(d.key, d.shiftKey);
      return;
    }
    r.onEditKeyDown(d, _.row, _.col, _.metaInfo);
  }
  function T() {
    !i || i.cancelEndEdit || b(o.value, i.beforeText !== o.value, "");
  }
  function b(d, C, _) {
    if (!i)
      return;
    const { cell: E, beforeText: g } = i;
    if (f(), C && E.checkInputValidation(d)) {
      const v = new re(t.commandContext, [
        E.row,
        E.col,
        { text: d }
      ]);
      v.onUndo = () => {
        r.onEditDone(E, C, g, _, o.selectionStart, o.selectionEnd);
      }, v.onExecute = () => {
        r.onEditDone(E, C, g, _, o.selectionStart, o.selectionEnd);
      }, t.pushCommandBlock(new q(
        `Edit cell (${E.row}, ${E.col}) `,
        v
      )), E.cellInfo = { text: d }, E.render();
    }
    r.onEditDone(E, C, g, _, o.selectionStart, o.selectionEnd);
  }
  function w(d) {
    return d.key === "ArrowLeft" && o.selectionStart === 0 && o.selectionEnd === 0 || d.key === "ArrowUp" && o.selectionStart === 0 && o.selectionEnd === 0 || d.key === "ArrowRight" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || d.key === "ArrowDown" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || d.key === "Tab" ? !0 : d.key === "Enter" && !d.altKey && !d.ctrlKey && !d.shiftKey;
  }
  function S(d, C) {
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
        return C ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
function ks(s) {
  return s.top === s.bottom && s.left === s.right;
}
function Ms(s) {
  return s.top > s.bottom || s.left > s.right;
}
function Hs(s, e) {
  const t = [], n = new le(s, e), o = ({ top: a, left: c, bottom: u, right: m }) => t.some(({ mergeArea: f }) => c <= f.right && m >= f.left && a <= f.bottom && u >= f.top) === !1, i = (a, c) => {
    let u = 0;
    for (let m = a; m <= c; ++m)
      s.getRowVisible(m) && ++u;
    return u;
  }, r = (a, c) => {
    let u = 0;
    for (let m = a; m <= c; ++m)
      e.getColumnVisible(m) && ++u;
    return u;
  }, l = ({ top: a, left: c, bottom: u, right: m }) => {
    for (let f = a; f <= u; ++f)
      if (s.getRowVisible(f) === !1)
        return !0;
    for (let f = c; f <= m; ++f)
      if (e.getColumnVisible(f) === !1)
        return !0;
    return !1;
  }, h = (a, c) => {
    const u = s.getCell(a, c), m = t.indexOf(u);
    return m < 0 ? null : t[m];
  };
  return {
    isValidatedMerging: o,
    getMergedRowHeight(a, c) {
      const u = (c - a) * se;
      let m = 0;
      for (let f = a; f <= c; ++f)
        s.getRowVisible(f) && (m += s.getRowHeight(f));
      return m + u;
    },
    mergeCells(a) {
      if (Ms(a))
        throw new Error("Invalid range");
      if (o(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (ks(a))
        throw new Error("Could not merging with single cell!");
      const c = s.getCell(a.top, a.left);
      c.height = this.getMergedRowHeight(a.top, a.bottom), c.mergeInfo = { rowSpan: i(a.top, a.bottom), colSpan: r(a.left, a.right) }, t.push(c), s.getRow(a.top).updateMaxCellHeight();
      for (const m of n.getSelectionGenerator(a))
        (m.row !== a.top || m.col !== a.left) && (m.mergeMain = c, m.metaInfo.text = "");
    },
    splitCells(a, c) {
      const u = h(a, c);
      if (!u)
        throw new Error("Could not split on a not merged cell!");
      for (const m of n.getSelectionGenerator(u.mergeArea))
        m.mergeMain = void 0, m.mergeInfo = { rowSpan: 1, colSpan: 1 };
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
      const u = h(a, c);
      if (!u)
        throw new Error("Could not split on a not merged cell!");
      t.splice(t.indexOf(u), 1);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: u } of t)
        if (u.top < a && u.bottom >= a && u.bottom <= c || u.bottom > c && u.top >= a && u.top <= c || u.top < a && u.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: u } of t)
        if (u.left < a && u.right >= a && u.right <= c || u.right > c && u.left >= a && u.left <= c || u.left < a && u.right > c)
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
class zs {
  #e = io();
  // HTML Elements
  #t;
  #l;
  #s;
  #r;
  #h;
  #o;
  #m;
  #a;
  #d;
  constructor(e) {
    const t = ue();
    this.#l = {
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
    }, this.#o = e.gridCommandManager, this.#s = new ys(e.headerRowCount, e.freezedRowCount, this.#e), this.#r = new Es(e.headerColumnCount, e.freezedColumnCount, this.#e), this.#d = e.cursorManager, this.#h = Hs(this.#s, this.#r), this.#m = Ls({
      rowManager: this.#s,
      colManager: this.#r,
      commandManager: this.#o,
      cursorManager: this.#d
    }), this.#a = e.gridStateContext, this.#t = Is({
      colgroup: this.#r.colgroup
    });
  }
  // theme
  getThemeValue(e) {
    return this.#l[e];
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
    return this.#h;
  }
  get rowManager() {
    return this.#s;
  }
  get columnManager() {
    return this.#r;
  }
  get commandManager() {
    return this.#o;
  }
  /**
   * 가능하면 쓰지 말 것
   * @deprecated
   */
  get commandContext() {
    return this.#o.commandContext;
  }
  get gridTextarea() {
    return this.#m;
  }
  get gridStateContext() {
    return this.#a;
  }
  get cursorManager() {
    return this.#d;
  }
}
class bt extends P {
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
class vt extends P {
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
const As = 12, Ds = 4, Ws = {
  "col-resizing": ze,
  "row-resizing": Ae
}, Qe = {
  "col-resizing": Hn,
  "row-resizing": zn
}, et = (s) => s.mergeInfo ? s.col + s.mergeInfo.colSpan - 1 : s.col, tt = (s) => s.mergeInfo ? s.row + s.mergeInfo.rowSpan - 1 : s.row, Os = 500, nt = 4;
class St extends K {
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { enabledColResizer: o, enabledRowResizer: i } = this._options, { elements: r, gridStateContext: l } = t, h = (m, f, I) => {
      e.commandManager.pushCommandBlock(new q(m, new bt(e, [f, I])));
    }, a = (m, f, I) => {
      e.commandManager.pushCommandBlock(new q(m, new vt(e, [f, I])));
    };
    (function() {
      const f = document.createElement("div");
      let I = !1, p = null, y = 0;
      const T = () => {
        n.classList.remove(ze), n.classList.remove(Ae), n.classList.remove("is-resizing"), p && n.removeEventListener("mousedown", p);
      }, b = (d, C) => {
        p && n.removeEventListener("mousedown", p), n.classList.remove(ze), n.classList.remove(Ae), n.classList.add(Ws[C]), n.classList.add("is-resizing");
        let _ = 0, E = 0, g = 0, v = 0, x = 0;
        const L = () => d.col < e.getFreezedColumnCount() ? e.scrollLeft + v : v, R = () => d.row < e.getFreezedRowCount() ? e.scrollTop + v : v;
        p = (A) => {
          const N = (/* @__PURE__ */ new Date()).getTime();
          if (l.setMode({
            mode: C,
            contextParam: {}
          }), N - y <= Os) {
            C === "col-resizing" ? e.commandManager.doRecording("Autosize column", () => {
              e.autoSizeColumn(d.col);
            }) : e.commandManager.doRecording("Autosize row", () => {
              e.autoSizeRow(d.row);
            }), y = 0;
            return;
          }
          I = !0, y = N, d.element.classList.add(Qe[C]), C === "col-resizing" ? (f.className = kn, x = e.getColumnWidth(et(d)), _ = A.pageX, E = _ - x + e.minColWidth, g = _ - x + e.maxColWidth, v = e.getColumnLeft(d.col) + e.getCellWidth(d), f.style.top = "0px", f.style.width = "0px", f.style.height = `${e.height}px`, f.style.left = `${L()}px`) : (f.className = Mn, x = e.getRowHeight(tt(d)), _ = A.pageY, E = _ - x + e.minRowHeight, g = _ - x + e.maxRowHeight, v = e.getRow(d.row).top + e.getCellHeight(d), f.style.top = `${R()}px`, f.style.width = `${e.width}px`, f.style.height = "0px", f.style.left = "0px"), r.wrapper.appendChild(f), e.addGlobalEventListener(document, "keydown", H), e.addGlobalEventListener(document, "mouseup", M), e.addGlobalEventListener(document, "mousemove", k);
        };
        const k = (A) => {
          if (C === "col-resizing") {
            const N = F(A.pageX, E, g) - _;
            f.style.left = `${L() + N}px`;
          } else {
            const N = F(A.pageY, E, g) - _;
            f.style.top = `${R() + N}px`;
          }
        }, M = (A) => {
          if (C === "col-resizing") {
            const D = F(A.pageX, E, g) - _;
            if (Math.abs(D) > nt) {
              const Q = et(d), Z = x + D;
              h("Resize column", Q, Z), e.setColumnWidth(Q, Z), y = 0;
            }
          } else {
            const D = F(A.pageY, E, g) - _;
            if (Math.abs(D) > nt) {
              const Q = tt(d), Z = x + D;
              a("Resize row", Q, Z), e.setRowHeight(Q, Z), y = 0;
            }
          }
          z(), l.setIdle();
          const N = c(A);
          if (!N)
            return;
          const B = u(A, N);
          B !== null && b(N, B);
        };
        function z() {
          I = !1, f.remove(), T(), d.element.classList.remove(Qe[C]), document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", H);
        }
        const H = (A) => {
          A.key === "Escape" && z();
        };
        e.addGlobalEventListener(n, "mousedown", p);
      }, w = (d) => {
        if (I)
          return;
        const C = c(d);
        if (C === null) {
          T();
          return;
        }
        const _ = u(d, C);
        _ === null ? T() : b(C, _);
      }, S = (d) => {
        T();
      };
      e.addGlobalEventListener(n, "mousemove", w), e.addGlobalEventListener(n, "mouseout", S);
    })();
    const c = (m) => {
      const f = Y("th", "tr", m.target);
      if (!f)
        return null;
      const [I, p] = [
        parseInt(f.getAttribute("data-row") || "-1"),
        parseInt(f.getAttribute("data-col") || "-1")
      ];
      return e.cell(I, p);
    }, u = (m, f) => f.cellType === "body-cell" ? null : o && Math.abs(e.getCellWidth(f) - m.offsetX) <= As ? "col-resizing" : i && Math.abs(e.getCellHeight(f) - m.offsetY) <= Ds ? "row-resizing" : null;
  }
  get pluginKey() {
    return "resizer";
  }
}
function Zi(s) {
  return new St(s);
}
const Ns = 15, _e = 120;
class yt extends K {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t;
    let i = null, r = null, l, h = null;
    const a = (p, y) => {
      const T = [
        p.row,
        p.bottom,
        y.row,
        y.bottom
      ], b = [
        p.col,
        p.right,
        y.col,
        y.right
      ], w = {
        top: Math.min(...T),
        left: Math.min(...b),
        bottom: Math.max(...T),
        right: Math.max(...b)
      };
      mt(w, h) || (h = w, e.select(w, i), this.onChangedSelection(w));
    };
    e.addGlobalEventListener(n, "mousedown", (p) => {
      if (!ee(p.target) || p.button !== 0 || p.target instanceof HTMLTextAreaElement || Y(".button", "tr", p.target))
        return;
      const y = Y("td", "tr", p.target);
      if (!y)
        return;
      const T = J(y), b = e.activeCell;
      p.shiftKey && b ? (i = b, a(b, e.cell(T.row, T.col))) : (i = e.cell(T.row, T.col), e.selectRange(i.row, i.col, i.bottom, i.right, i), this.onChangedSelection({ top: i.row, left: i.col, bottom: i.bottom, right: i.right })), r = i, o.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function c(p, y) {
      const T = y.closest("td");
      if (!T)
        return;
      const b = J(T);
      r = e.cell(b.row, b.col), a(p, r);
    }
    function u(p, y) {
      const { offsetX: T, offsetY: b, target: w } = p;
      if (!ee(w))
        return null;
      const S = T + w.scrollLeft, d = b + w.scrollTop, C = S > e.width ? e.width : S, _ = d > e.height ? e.height : d, E = e.findCellOrNull(_, C);
      E && (r = E, a(y, E));
    }
    function m(p) {
      const y = p.clientWidth + p.scrollLeft, T = p.clientHeight + p.scrollTop, b = p.scrollTop + e.headerHeight, w = p.scrollLeft + e.headerWidth, S = T > e.height ? e.height : T, d = y > e.width ? e.width : y, C = e.findCellOrNull(b, w), _ = e.findCellOrNull(S, d);
      return {
        top: (C == null ? void 0 : C.row) ?? 0,
        bottom: (_ == null ? void 0 : _.row) ?? 0,
        left: (C == null ? void 0 : C.col) ?? 0,
        right: (_ == null ? void 0 : _.col) ?? 0
      };
    }
    function f(p, y, T, b) {
      l = window.setTimeout(() => {
        if (!i)
          return;
        const d = w(), C = S(), { top: _, bottom: E, left: g, right: v } = m(p), x = {
          top: p.scrollTop,
          left: p.scrollLeft,
          targetRow: T,
          targetCol: b
        };
        d && (y.startsWith("t") ? (x.top -= e.getRowHeight(_), x.targetRow = _) : (x.top += e.getRowHeight(E), x.targetRow = E)), C && (y.endsWith("l") ? (x.left -= e.getColumnWidth(g), x.targetCol = g) : (x.left += e.getColumnWidth(v), x.targetCol = v)), (d || C) && (p.scrollTo({ top: x.top, left: x.left }), a(i, e.cell(x.targetRow, x.targetCol)), f(p, y, x.targetRow, x.targetCol));
      }, Ns);
      function w() {
        return y.startsWith("t") ? p.scrollTop > 0 : y.startsWith("b") ? p.scrollHeight - (p.scrollTop + p.clientHeight) > 0 : !1;
      }
      function S() {
        return y.endsWith("l") ? p.scrollLeft > 0 : y.endsWith("r") ? p.scrollWidth - (p.scrollLeft + p.clientWidth) > 0 : !1;
      }
    }
    function I() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (p) => {
      i && ee(p.target) && (p.target === n ? u(p, i) : c(i, p.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      i && (I(), i = null, r = null, o.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: p, clientY: y, clientX: T }) => {
      if (!i || !r || !ee(p))
        return;
      const { top: b, bottom: w, left: S, right: d } = p.getBoundingClientRect();
      if (b < y && w > y && S < T && d > T)
        return;
      f(p, `${C()}${_()}`, r.row, r.col);
      function C() {
        return y - b <= _e ? "t" : w - y <= _e ? "b" : "";
      }
      function _() {
        return T - S <= _e ? "l" : d - T <= _e ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (p) => {
      i && ee(p.currentTarget) && I();
    }), e.onDoubleClickCell = (p) => o.isIdle && e.doEditMode(p), e.onColumnClick = (p) => e.selectColumn(p.col), e.onRowClick = (p) => e.selectRow(p.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function qi() {
  return new yt();
}
class Et extends P {
  _getUndoContext() {
    const [e] = this._args, t = [], n = new le(this._instance, this._instance);
    for (const o of n.getSelectionGenerator(e))
      o.canClear && t.push({
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
function It(s, e) {
  const t = (g, v, x) => {
    const L = s.headerRows;
    let R = x, k = g;
    for (; R !== 0; ) {
      const M = s.cell(k, v), H = (M.mergeMain ?? M).row - 1;
      if (H < L)
        break;
      s.getRowVisible(H) && ++R, k = H;
    }
    return k;
  }, n = (g, v, x) => {
    const L = s.getRowCount() - 1;
    let R = x, k = g;
    for (; R !== 0; ) {
      const M = s.cell(k, v), H = (M.mergeMain ?? M).bottom + 1;
      if (H > L)
        break;
      s.getRowVisible(H) && --R, k = H;
    }
    return k;
  }, o = (g, v, x) => {
    const L = s.headerColumns;
    let R = x, k = v;
    for (; R !== 0; ) {
      const M = s.cell(g, k), H = (M.mergeMain ?? M).col - 1;
      if (H < L)
        break;
      s.getColumnVisible(H) && ++R, k = H;
    }
    return k;
  }, i = (g, v, x) => {
    const L = s.getColCount() - 1;
    let R = x, k = v;
    for (; R !== 0; ) {
      const M = s.cell(g, k), H = (M.mergeMain ?? M).right + 1;
      if (H > L)
        break;
      s.getColumnVisible(H) && --R, k = H;
    }
    return k;
  }, r = () => {
    let g = s.headerColumns;
    for (; !s.getColumnVisible(g); )
      ++g;
    return g;
  }, l = () => {
    let g = s.getColCount() - 1;
    for (; !s.getColumnVisible(g); )
      --g;
    return g;
  }, h = () => {
    let g = s.headerRows;
    for (; !s.getRowVisible(g); )
      ++g;
    return g;
  }, a = () => {
    let g = s.getRowCount() - 1;
    for (; !s.getRowVisible(g); )
      --g;
    return g;
  }, c = (g) => {
    if (s.getRowCount() - 1 === g)
      return g;
    let x = g + 1;
    for (; !s.getRowVisible(x); )
      ++x;
    return x;
  }, u = (g) => {
    const v = s.headerRows;
    if (g === v)
      return g;
    let x = g - 1;
    for (; !s.getRowVisible(x); )
      ++x;
    return x;
  }, m = () => {
    const { activeCell: g } = s;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const v = a(), x = l(), L = g.mergeMain ?? g;
    if (L.right === x) {
      if (g.row === v)
        return;
      const R = r(), k = c(g.row);
      e ? s.selectRow(k, s.cell(k, R)) : s.selectCell(k, R), s.scrollInView(k, R);
    } else {
      const R = i(g.row, L.right, 1);
      e ? s.selectRow(g.row, s.cell(g.row, R)) : s.selectCell(g.row, R), s.scrollOnCol(R);
    }
  }, f = () => {
    const { activeCell: g } = s;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const v = h(), x = r(), L = g.mergeMain ?? g;
    if (L.col === x) {
      if (g.row === v)
        return;
      const R = l(), k = u(g.row);
      e ? s.selectRow(k, s.cell(k, R)) : s.selectCell(k, R), s.scrollInView(k, R);
    } else {
      const R = o(g.row, L.col, -1);
      e ? s.selectRow(g.row, s.cell(g.row, R)) : s.selectCell(g.row, R), s.scrollOnCol(R);
    }
  }, I = (g, v, x) => {
    let L = -1, R = -1;
    for (let k = v; k <= x; k++) {
      const M = s.cell(g, k), z = M.mergeMain ?? M, { rowSpan: H } = z.mergeInfo;
      H > L && (L = H, R = k);
    }
    return R;
  }, p = (g, v, x) => {
    let L = -1;
    for (let R = v; R <= x; R++) {
      const k = s.cell(g, R), M = k.mergeMain ?? k, { bottom: z } = M;
      z > L && (L = z);
    }
    return L;
  }, y = (g, v, x) => {
    let L = 999999999;
    for (let R = v; R <= x; R++) {
      const k = s.cell(g, R), M = k.mergeMain ?? k;
      L > M.row && (L = M.row);
    }
    return L;
  }, T = (g, v, x) => {
    let L = -1, R = -1;
    for (let k = v; k <= x; k++) {
      const M = s.cell(k, g), z = M.mergeMain ?? M, { colSpan: H } = z.mergeInfo;
      H > L && (L = H, R = k);
    }
    return R;
  }, b = (g, v, x) => {
    let L = -1;
    for (let R = v; R <= x; R++) {
      const k = s.cell(R, g), M = k.mergeMain ?? k, { right: z } = M;
      z > L && (L = z);
    }
    return L;
  }, w = (g, v, x) => {
    let L = 999999999;
    for (let R = v; R <= x; R++) {
      const k = s.cell(R, g), M = k.mergeMain ?? k;
      L > M.col && (L = M.col);
    }
    return L;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: o,
    getNextXRight: i,
    selectNextActiveCell: m,
    selectBeforeActiveCell: f,
    selectNextSelection: (g, v, x) => {
      const L = s.getSelection(), { activeCell: R } = s;
      if (L == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const k = R.mergeMain ?? R;
      if (x && e)
        return;
      if (!x) {
        if (g !== 0) {
          const N = g < 0 ? t(k.row, R.col, g) : n(k.bottom, R.col, g);
          e ? s.selectRow(N, s.cell(N, R.col)) : s.selectCell(N, R.col), s.scrollOnRow(N);
        } else {
          const N = v < 0 ? o(R.row, k.col, v) : i(R.row, k.right, v);
          e ? s.selectRow(R.row, s.cell(R.row, N)) : s.selectCell(R.row, N), s.scrollOnCol(N);
        }
        return;
      }
      const { top: M, bottom: z, left: H, right: A } = L;
      if (g !== 0)
        if (g < 0)
          if (p(R.row, H, A) === z) {
            const B = I(M, H, A), D = t(M, B, g);
            s.selectRange(D, H, z, A, R), s.scrollOnRow(D);
          } else {
            const B = I(z, H, A), D = t(z, B, g);
            s.selectRange(M, H, D, A, R), s.scrollOnRow(D);
          }
        else if (y(R.row, H, A) === M) {
          const B = I(z, H, A), D = n(z, B, g);
          s.selectRange(M, H, D, A, R), s.scrollOnRow(D);
        } else {
          const B = I(M, H, A), D = n(M, B, g);
          s.selectRange(D, H, z, A, R), s.scrollOnRow(D);
        }
      else if (v < 0)
        if (b(R.col, M, z) === A) {
          const B = T(H, M, z), D = o(B, H, v);
          s.selectRange(M, D, z, A, R), s.scrollOnCol(D);
        } else {
          const B = T(A, M, z), D = o(B, A, v);
          s.selectRange(M, H, z, D, R), s.scrollOnCol(D);
        }
      else if (w(R.col, M, z) === H) {
        const B = T(A, M, z), D = i(B, A, v);
        s.selectRange(M, H, z, D, R), s.scrollOnCol(D);
      } else {
        const B = T(H, M, z), D = i(B, H, v);
        s.selectRange(M, D, z, A, R), s.scrollOnCol(D);
      }
    },
    selectMoveToLastColumn: (g) => {
      const v = s.getSelection(), { activeCell: x } = s;
      if (v == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const L = l();
      g && e || (g ? s.selectRange(v.top, x.col, v.bottom, L, x) : e ? s.selectRow(x.row, s.cell(x.row, L)) : s.selectCell(x.row, L), s.scrollOnCol(L));
    },
    selectMoveToFirstColumn: (g) => {
      const v = s.getSelection(), { activeCell: x } = s;
      if (v == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const L = r();
      g && e || (g ? s.selectRange(v.top, L, v.bottom, x.col, x) : e ? s.selectRow(x.row, s.cell(x.row, L)) : s.selectCell(x.row, L), s.scrollOnCol(L));
    },
    selectMoveToLastRow: (g) => {
      const v = s.getSelection(), { activeCell: x } = s;
      if (v == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const L = a();
      g && e || (g ? s.selectRange(x.row, v.left, L, v.right, x) : s.selectCell(L, x.col), s.scrollOnRow(L));
    },
    selectMoveToFirstRow: (g) => {
      const v = s.getSelection(), { activeCell: x } = s;
      if (v == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const L = h();
      g && e || (g ? s.selectRange(L, v.left, x.bottom, v.right, x) : s.selectCell(L, x.col), s.scrollOnRow(L));
    }
  };
}
class Fs {
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
const ot = 10;
class Tt extends K {
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const o = new Fs(), { gridStateContext: i } = n;
    o.onEndKeyActionHook = (w) => {
      st(w.key) || w.preventDefault();
    };
    const r = (w = !1) => {
      var d;
      if (!i.isIdle)
        return;
      const S = ((d = e.activeCell) == null ? void 0 : d.mergeMain) ?? e.activeCell;
      S && e.doEditMode(S, w);
    };
    this._keyMiddleware.forEach(([w, S]) => o.addKeyAction(w, S));
    const l = new le(n.rowManager, n.columnManager), {
      selectNextActiveCell: h,
      selectNextSelection: a,
      selectBeforeActiveCell: c,
      selectMoveToFirstRow: u,
      selectMoveToFirstColumn: m,
      selectMoveToLastColumn: f,
      selectMoveToLastRow: I
    } = It(e, this._rowSelection), p = (w) => (S) => {
      i.gridModeState.value.mode !== "edit-cell" && w(S);
    };
    e.addGlobalEventListener(t, "copy", p((w) => e.onNativeCopy(w))), e.addGlobalEventListener(t, "cut", p((w) => e.onNativeCut(w))), e.addGlobalEventListener(t, "paste", p((w) => e.onNativePaste(w))), o.addKeyAction("Tab", (w) => (w.shiftKey ? c() : h(), !0)), o.addKeyAction("ArrowRight", (w) => (w.ctrlKey ? f(w.shiftKey) : a(0, 1, w.shiftKey), !0)), o.addKeyAction("ArrowUp", (w) => (w.ctrlKey ? u(w.shiftKey) : a(-1, 0, w.shiftKey), !0)), o.addKeyAction("ArrowLeft", (w) => (w.ctrlKey ? m(w.shiftKey) : a(0, -1, w.shiftKey), !0)), o.addKeyAction("ArrowDown", (w) => (w.ctrlKey ? I(w.shiftKey) : a(1, 0, w.shiftKey), !0)), o.addKeyAction("Home", (w) => (m(w.shiftKey), !0)), o.addKeyAction("End", (w) => (f(w.shiftKey), !0)), o.addKeyAction("PageUp", (w) => (a(-ot, 0, w.shiftKey), !0)), o.addKeyAction("PageDown", (w) => (a(ot, 0, w.shiftKey), !0)), o.addKeyAction("Enter", (w) => (a(1, 0, !1), !0)), o.addKeyAction("a", y), o.addKeyAction("A", y), o.addKeyAction("z", T), o.addKeyAction("Z", T), o.addKeyAction("y", b), o.addKeyAction("Y", b);
    function y(w) {
      return w.ctrlKey ? (e.selectAll(), w.preventDefault(), !1) : !0;
    }
    function T(w) {
      return w.ctrlKey ? (e.undo(), w.preventDefault(), !1) : !0;
    }
    function b(w) {
      return w.ctrlKey ? (e.redo(), w.preventDefault(), !1) : !0;
    }
    o.addKeyAction("F2", (w) => (r(), !0)), o.addKeyAction("Delete", (w) => {
      const S = e.getSelection();
      if (!S || l.getCanClearCellCount(S) === 0)
        return !0;
      const d = new Et(e, [S]);
      return e.commandManager.pushCommandBlock(new q("Clear cells", d)), e.clearCells(S), !0;
    }), o.addKeyAction(" ", (w) => {
      var d;
      const S = e.getSelection();
      if (!S)
        return !0;
      for (const C of l.getSelectionGenerator(S))
        C.onCheckReadonly() || C.metaInfo.disabled || (C.renderType === "checkbox" || C.renderType === "radio") && (e.getRow(C.row).isMounted ? (d = C.element.querySelector("input")) == null || d.click() : C.text = C.text === "true" ? "false" : "true");
      return !0;
    }), e.addGlobalEventListener(t, "input", () => {
      i.gridModeState.isIdle && r(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (w) => {
      if (
        // editMode에서 온 입력은 pass
        !(!i.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!i.isIdle) {
          w.preventDefault();
          return;
        }
        if (!w.ctrlKey && st(w.key)) {
          r(!0);
          return;
        }
        o.startKeyAction(w);
      }
    }, !0);
  }
  get pluginKey() {
    return "default-key";
  }
}
const Bs = /^[\S]$/;
function st(s) {
  return s === "Process" || Bs.test(s);
}
function Ji(s) {
  return new Tt(s ?? {});
}
class Gs extends K {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let o = null;
    n.addEventListener("mousedown", (i) => {
      if (i.button !== 0)
        return;
      const r = Y("td", "tr", i.target);
      if (!r || (r == null ? void 0 : r.tagName) === "TH")
        return;
      const l = J(r);
      o = e.cell(l.row, l.col), e.selectRow(o.row, o);
    }), e.addGlobalEventListener(document, "mouseup", () => o = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function Qi() {
  return new Gs();
}
const Me = -1, Ps = /^\d+px$/;
function Vs(s) {
  for (const e of s)
    if (typeof e == "string") {
      if (Ps.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function $s(s) {
  let e = 0;
  for (const t of s)
    typeof t == "string" && (e += Lt(t));
  return e;
}
function Lt(s) {
  return parseInt(s.substring(0, s.length - 2), 10);
}
class js extends K {
  constructor({ columnWeight: e }) {
    super(), this._columnWeightList = [], Vs(e), this._fixedColumnWidth = $s(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: o } = n;
    let i = Me;
    const r = () => {
      const { clientWidth: c } = t;
      if (c === 0) {
        e.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const u = e.getColCount() - 1, m = c - u - this._fixedColumnWidth, f = O(e.getColCount()).reduce((y, T) => {
        if (!e.getColumnVisible(T))
          return y;
        const b = this._columnWeightList[T];
        return b === void 0 ? y + 1 : typeof b == "number" ? y + b : y;
      }, 0);
      let I = 0;
      O(u).forEach((y) => {
        if (!e.getColumnVisible(y))
          return;
        const T = this._columnWeightList[y] ?? 1;
        if (typeof T == "string" && T.endsWith("px")) {
          const b = Lt(T);
          e.setColumnWidth(y, b);
        } else if (typeof T == "number") {
          const b = T / f;
          e.setColumnWidth(y, Math.floor(b * m));
        }
        I += e.getColumnWidth(y);
      });
      const p = a();
      p && e.setColumnWidth(p, m - I + this._fixedColumnWidth);
    }, l = () => {
      i !== Me && cancelAnimationFrame(i), i = requestAnimationFrame(() => {
        try {
          o.pauseEmit("onColumnChanged"), r();
        } catch (c) {
          console.error(c);
        } finally {
          o.resumeEmit("onColumnChanged"), i = Me;
        }
      });
    };
    o.addHook("onWrapperResized", l), o.addHook("onColumnChanged", l), this._mountRollbackStack.push(() => {
      o.removeHook("onWrapperResized", l), o.removeHook("onColumnChanged", l);
    }), h();
    function h() {
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
function er(s) {
  return new js(s ?? { columnWeight: [] });
}
class kt extends K {
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
    }, h = (c) => {
      l(), i.latestDragOverCell = c, c.isDragOver = !0;
    }, a = () => o.classList.contains("is-dragging");
    o.addEventListener("mouseup", () => a() && r()), o.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), o.classList.add("is-dragging");
    }), o.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !o.classList.contains("is-dragging"))
        return;
      const u = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!u || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop"))
        return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        u.dropDisabled !== !1 && // disabled
        (u.metaInfo.disabled === !0 || // readonly
        u.onCheckReadonly() === !0 || u.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(u, c) === !0 && (u !== i.latestDragOverCell && h(u), c.preventDefault());
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
function tr() {
  return new kt();
}
const it = 10;
class Us extends K {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements, o = {
      cell: null
    }, i = () => {
      o.cell = null, n.draggable = !1;
    }, r = (l) => {
      n.draggable = !0, o.cell = l;
    };
    n.addEventListener("mousedown", (l) => {
      if (l.button !== 0)
        return;
      const h = Y("td", "tr", l.target);
      if (!h) {
        i();
        return;
      }
      const a = J(h), c = e.cell(a.row, a.col);
      e.selectCell(a.row, a.col), c.metaInfo.draggable === !0 && c.metaInfo.object ? r(c) : i();
    }), n.addEventListener("dragend", () => i()), n.addEventListener("dragstart", (l) => {
      if (!l.dataTransfer || !o.cell || !e.onDragStartCell(o.cell, l)) {
        l.preventDefault();
        return;
      }
      l.dataTransfer.setDragImage(o.cell.element, it, it);
    });
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function nr() {
  return new Us();
}
const rt = 10;
class or extends K {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: o = !0,
      enabledColumn: i = !0
    } = this.args, { table: r } = n.elements, { mergeHandler: l, rowManager: h, gridStateContext: a } = n;
    let c = null, u = null;
    r.addEventListener("mousedown", m), r.addEventListener("dragstart", f), r.addEventListener("dragover", I), r.addEventListener("drop", p), r.addEventListener("dragleave", y), r.addEventListener("dragend", T), r.addEventListener("mouseup", T), this._mountRollbackStack.push(() => {
      r.removeEventListener("mousedown", m), r.removeEventListener("dragstart", f), r.removeEventListener("dragover", I), r.removeEventListener("drop", p), r.removeEventListener("dragleave", y), r.removeEventListener("dragend", T), r.removeEventListener("mouseup", T);
    });
    function m(d) {
      if (d.button !== 0 || t.classList.contains("is-resizing"))
        return;
      const C = Y("th", "tr", d.target);
      if (!C)
        return;
      const _ = J(C), E = e.cell(_.row, _.col);
      if (E.cellType === "body-cell" || L(E))
        return;
      b({
        direction: E.cellType,
        source: g(),
        cell: E
      });
      function g() {
        const { row: R, col: k } = E;
        return E.cellType === "row-header" ? [
          h.getStartOfRowId(R),
          h.getEndOfRowId(R)
        ] : [
          h.getStartOfColumnId(k),
          h.getEndOfColumnId(k)
        ];
      }
      function v(R) {
        return !o || R.row < e.getFreezedRowCount();
      }
      function x(R) {
        return !i || R.col < e.getFreezedColumnCount();
      }
      function L(R) {
        return R.cellType === "row-header" && v(R) || R.cellType === "col-header" && x(R);
      }
    }
    function f(d) {
      if (!d.dataTransfer || !c) {
        d.preventDefault();
        return;
      }
      a.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), d.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), d.dataTransfer.setDragImage(c.cell.element, rt, rt);
    }
    function I(d) {
      if (!c || !d.dataTransfer || !d.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging"))
        return;
      const C = e.findCellOrNull(d.offsetY, d.offsetX);
      if (!C || !C.isHeaderCell || c.direction === "row-header" && _(C, c) || c.direction === "col-header" && E(C, c)) {
        w(), u = C;
        return;
      }
      C !== u && S(C, c.direction), d.preventDefault();
      function _(g, v) {
        return g.row === v.cell.row || g.row < e.getFreezedRowCount() || l.checkConflictingInRows(g.row, g.row);
      }
      function E(g, v) {
        return g.col === v.cell.col || g.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(g.col, g.col);
      }
    }
    function p() {
      const d = c, C = u;
      !d || !C || (w(), d.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(d.source, [C.row, C.row]);
      }), e.forceLayoutTask(), e.selectRow(d.cell.row)), d.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(d.source, [C.col, C.col]);
      }), e.forceLayoutTask(), e.selectColumn(d.cell.col)));
    }
    function y() {
      w(), u = null;
    }
    function T() {
      r.classList.remove("is-dragging"), w(), c = null, r.draggable = !1, u = null, a.setIdle();
    }
    function b({ direction: d, source: C, cell: _ }) {
      r.draggable = !0, c = {
        direction: d,
        source: C,
        cell: _
      };
    }
    function w() {
      if (!u || !c)
        return;
      const { direction: d } = c, C = d === "row-header" ? e.headerColumns : e.headerRows;
      for (let _ = 0; _ < C; _++)
        d === "row-header" ? e.cell(u.row, _).element.classList.remove("is-dragging") : e.cell(_, u.col).element.classList.remove("is-dragging");
    }
    function S(d, C) {
      w(), u = d;
      const _ = C === "row-header" ? e.headerColumns : e.headerRows;
      for (let E = 0; E < _; E++)
        C === "row-header" ? e.cell(d.row, E).element.classList.add("is-dragging") : e.cell(E, d.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Mt = 8, Ks = {
  normal: Wn,
  error: On
}, lt = (s, e, t, n) => {
  s.isConnected === !1 || s.offsetParent === null || uo(s, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      ho({
        mainAxis: Mt,
        crossAxis: n ?? 0
      }),
      go(),
      mo({ padding: 5 })
    ]
  }).then(({ x: o, y: i, placement: r }) => {
    e.style.left = `${o}px`, e.style.top = `${i}px`, e.dataset.placement = r;
  });
}, Xs = (s) => s.cellInfo.tooltip ?? s.cellInfo.text ?? "", Ys = (s) => s.cellInfo.memo ?? "";
class Zs extends K {
  constructor(e) {
    super(), this.options = e, this.context = null, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = An;
  }
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    var I, p, y, T;
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: o
    } = this.options, {
      hasMemo: i,
      memoIntent: r = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, h = ((p = (I = this.options).getTooltipText) == null ? void 0 : p.call(I, e)) ?? Xs(e), a = ((T = (y = this.options).getMemoText) == null ? void 0 : T.call(y, e)) ?? Ys(e), c = () => {
      this._tooltipElement.textContent = h, De("popover").appendChild(this._tooltipElement), lt(e.element, this._tooltipElement, "bottom");
    }, u = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${Dn} ${Ks[r]}`, De("popover").appendChild(this._memoElement), lt(e.element, this._memoElement, "right-start", Mt);
    }, m = !(i && o) && l === !1 && h ? window.setTimeout(() => c(), n) : -1, f = i && a ? window.setTimeout(() => u(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: m,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(m), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t, i = (r) => {
      var c, u, m;
      if (!ee(r.target))
        return;
      const l = Y("td,th", "tr", r.target);
      if (!l) {
        (c = this.context) == null || c.cleanup();
        return;
      }
      const h = J(l), a = e.cell(h.row, h.col);
      ((u = this.context) == null ? void 0 : u.targetCell) !== a && ((m = this.context) == null || m.cleanup(), this.context = this.createContext(a));
    };
    e.addGlobalEventListener(n, "mouseleave", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    }), o.gridModeState.addSubscription((r, { mode: l }) => {
      var h;
      n.removeEventListener("mousemove", i), (h = this.context) == null || h.cleanup(), (l === "idle" || l === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "scroll", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const at = 10;
class sr extends K {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, gridStateContext: i } = n, { table: r, wrapper: l } = n.elements, h = document.createElement("div");
    h.className = Nn;
    let a = null, c = -1;
    r.addEventListener("mousedown", u), r.addEventListener("dragstart", m), r.addEventListener("dragover", f), r.addEventListener("drop", I), r.addEventListener("dragleave", p), r.addEventListener("dragend", y), r.addEventListener("mouseup", y), this._mountRollbackStack.push(() => {
      r.removeEventListener("mousedown", u), r.removeEventListener("dragstart", m), r.removeEventListener("dragover", f), r.removeEventListener("drop", I), r.removeEventListener("dragleave", p), r.removeEventListener("dragend", y), r.removeEventListener("mouseup", y);
    });
    function u(S) {
      if (S.button !== 0 || t.classList.contains("is-resizing"))
        return;
      const d = Y("th", "tr", S.target);
      if (!d)
        return;
      const C = J(d), _ = e.cell(C.row, C.col);
      if (E(_))
        return;
      T({
        source: [
          o.getStartOfRowId(_.row),
          o.getEndOfRowId(_.row)
        ],
        cell: _
      });
      function E(g) {
        return g.cellType !== "row-header" || g.row < e.getFreezedRowCount() || g.row < e.headerRows;
      }
    }
    function m(S) {
      const { offsetY: d, offsetX: C } = S, _ = e.findCellOrNull(d, C);
      if ((_ == null ? void 0 : _.cellType) === "row-header") {
        if (!S.dataTransfer || !a) {
          S.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), S.dataTransfer.setData("ir-grid/move-rows-dragging", ""), S.dataTransfer.setDragImage(a.cell.element, at, at);
      }
    }
    function f(S) {
      const { dataTransfer: d, offsetY: C, offsetX: _ } = S;
      if (!a || !d || !d.types.includes("ir-grid/move-rows-dragging"))
        return;
      const E = e.findCellOrNull(C, _);
      if (!E)
        return;
      const g = v(E.row);
      if (E.cellType !== "row-header" || x(g, a)) {
        b(), c = -1;
        return;
      }
      g !== c && w(g), S.preventDefault();
      function v(L) {
        const R = e.getRow(L), k = C - R.top < R.height / 2;
        return R.rowId + (k ? 0 : 1);
      }
      function x(L, R) {
        const [k, M] = R.source;
        return L >= k && L <= M || L < e.headerRows;
      }
    }
    function I() {
      const S = a, d = c;
      !S || d < 0 || (b(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(S.source, d);
      }), e.forceLayoutTask(), e.selectRow(S.cell.row));
    }
    function p() {
      b(), c = -1;
    }
    function y() {
      r.classList.remove("is-dragging"), b(), a = null, r.draggable = !1, c = -1, i.setIdle();
    }
    function T({ source: S, cell: d }) {
      r.draggable = !0, a = {
        source: S,
        cell: d
      };
    }
    function b() {
      c < 0 || !a || h.remove();
    }
    function w(S) {
      b(), c = S;
      const d = Math.min(c, o.length - 1), C = e.getRow(d), _ = {
        top: C.top,
        height: 16
      }, E = _.height / 2;
      S === o.length && (_.top += C.height, _.height = E + 1), h.style.top = `${_.top - E}px`, h.style.width = `${e.headerWidth}px`, h.style.height = `${_.height}px`, l.append(h);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const ct = 10;
class ir extends K {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: i, gridStateContext: r } = n, { table: l, wrapper: h } = n.elements, a = document.createElement("div");
    a.className = Fn;
    let c = null, u = -1;
    l.addEventListener("mousedown", m), l.addEventListener("dragstart", f), l.addEventListener("dragover", I), l.addEventListener("drop", p), l.addEventListener("dragleave", y), l.addEventListener("dragend", T), l.addEventListener("mouseup", T), this._mountRollbackStack.push(() => {
      l.removeEventListener("mousedown", m), l.removeEventListener("dragstart", f), l.removeEventListener("dragover", I), l.removeEventListener("drop", p), l.removeEventListener("dragleave", y), l.removeEventListener("dragend", T), l.removeEventListener("mouseup", T);
    });
    function m(d) {
      if (d.button !== 0 || t.classList.contains("is-resizing"))
        return;
      const C = Y("th", "tr", d.target);
      if (!C)
        return;
      const _ = J(C), E = e.cell(_.row, _.col);
      if (g(E))
        return;
      b({
        source: [
          o.getStartOfColumnId(E.col),
          o.getEndOfColumnId(E.col)
        ],
        cell: E
      });
      function g(v) {
        return v.cellType !== "col-header" || v.col < e.getFreezedColumnCount() || v.col < e.headerColumns;
      }
    }
    function f(d) {
      const { offsetY: C, offsetX: _ } = d, E = e.findCellOrNull(C, _);
      if ((E == null ? void 0 : E.cellType) === "col-header") {
        if (!d.dataTransfer || !c) {
          d.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), d.dataTransfer.setData("ir-grid/move-columns-dragging", ""), d.dataTransfer.setDragImage(c.cell.element, ct, ct);
      }
    }
    function I(d) {
      const { dataTransfer: C, offsetY: _, offsetX: E } = d;
      if (!c || !C || !C.types.includes("ir-grid/move-columns-dragging"))
        return;
      const g = e.findCellOrNull(_, E);
      if (!g)
        return;
      const v = x(g.col);
      if (g.cellType !== "col-header" || L(v, c)) {
        w(), u = -1;
        return;
      }
      v !== u && S(v), d.preventDefault();
      function x(R) {
        const k = e.getColumn(R), M = E - k.left < k.width / 2;
        return k.columnId + (M ? 0 : 1);
      }
      function L(R, k) {
        const [M, z] = k.source;
        return R >= M && R <= z || R < e.headerColumns;
      }
    }
    function p() {
      const d = c, C = u;
      !d || C < 0 || (w(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(d.source, C);
      }), e.forceLayoutTask(), e.selectColumn(d.cell.col));
    }
    function y() {
      w(), u = -1;
    }
    function T() {
      l.classList.remove("is-dragging"), w(), c = null, l.draggable = !1, u = -1, r.setIdle();
    }
    function b({ source: d, cell: C }) {
      l.draggable = !0, c = {
        source: d,
        cell: C
      };
    }
    function w() {
      u < 0 || !c || a.remove();
    }
    function S(d) {
      w(), u = d;
      const C = Math.min(u, i.length - 1), _ = e.getColumn(C), E = {
        left: _.left,
        width: 12
      }, g = E.width / 2;
      d === i.length && (E.left += _.width, E.width = g + 1), a.style.left = `${E.left - g}px`, a.style.height = `${e.headerHeight}px`, a.style.width = `${E.width}px`, h.append(a);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const qs = [
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
function Js() {
  const s = te("div", Pn), e = [];
  for (const n of qs)
    if (n.type === "divider") {
      const o = te("div", Vn);
      s.append(o);
    } else {
      const o = te("button", $n), i = gt(`ir-icon--chevron-${n.value}`);
      o.dataset.type = n.type, o.append(i), o.onclick = () => t.onButtonClick(n.value), s.append(o), e.push(o);
    }
  const t = {
    buttonGroup: s,
    visibleButtonGroup(n, o) {
      for (const i of e) {
        const r = i.dataset.type;
        r === "row" && i.classList.toggle(Te.display.none, !n), r === "col" && i.classList.toggle(Te.display.none, !o);
      }
      s.classList.toggle(Te.display.none, !n && !o);
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class rr extends K {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: i } = n, r = te("div", Bn), l = te("div", Gn), h = Js();
    this.args.className && r.classList.add(this.args.className), Object.assign(r.style, this.args.style);
    const a = {
      up() {
        const f = u(l.scrollTop);
        if (!f)
          return;
        const I = f.rowId - 1, p = I < 0 ? 0 : e.getRow(I).top;
        l.scrollTop = p;
      },
      down() {
        const f = u(l.scrollTop);
        f && (l.scrollTop = f.bottom);
      },
      left() {
        const f = m(l.scrollLeft);
        if (!f)
          return;
        const I = f.columnId - 1, p = I < 0 ? 0 : e.getColumn(I).left;
        l.scrollLeft = p;
      },
      right() {
        const f = m(l.scrollLeft);
        f && (l.scrollLeft = f.right);
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
    h.onButtonClick = (f) => a[f](), t.insertAdjacentElement("beforebegin", r), l.appendChild(t), r.append(l), r.append(h.buttonGroup), n.hook.addHook("resize", c), n.hook.addHook("changedFreezedRowHeight", c), n.hook.addHook("changedFreezedColumnWidth", c), this._mountRollbackStack.push(() => {
      n.hook.removeHook("resize", c), n.hook.removeHook("changedFreezedRowHeight", c), n.hook.removeHook("changedFreezedColumnWidth", c);
    }), this._mountRollbackStack.push(() => {
    });
    function c() {
      h.visibleButtonGroup(
        t.offsetHeight > l.clientHeight,
        t.offsetWidth > l.clientWidth
      );
    }
    function u(f) {
      let I = 0, p = o.visibleRowList.length - 1;
      for (; I <= p; ) {
        const y = I + Math.floor((p - I) / 2), T = o.visibleRowList[y];
        if (f >= T.top && f < T.bottom)
          return T;
        f < T.top ? p = y - 1 : I = y + 1;
      }
      return null;
    }
    function m(f) {
      let I = 0, p = i.visibleColumnList.length - 1;
      for (; I <= p; ) {
        const y = I + Math.floor((p - I) / 2), T = i.visibleColumnList[y];
        if (f >= T.left && f < T.right)
          return T;
        f < T.left ? p = y - 1 : I = y + 1;
      }
      return null;
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
function Qs(s, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, o = 0, i = 0;
  const r = {
    setRow(m) {
      o = m;
    },
    setCol(m) {
      i = m;
    }
  }, l = () => t.hasHeaderRows ? 0 : s.headerRows, h = () => t.hasHeaderColumns ? 0 : s.headerColumns;
  function* a() {
    r.setRow(l()), r.setCol(h());
    const m = s.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield s.cell(o, i);
          break;
        case "selected-col":
          if (!m)
            throw new Error("No selection in finding");
          Ct(i, m) && (yield s.cell(o, i));
          break;
        case "selected-row":
          if (!m)
            throw new Error("No selection in finding");
          ft(o, m) && (yield s.cell(o, i));
          break;
        case "selection":
          if (!m)
            throw new Error("No selection in finding");
          Ue(o, i, m) && (yield s.cell(o, i));
          break;
        case "custom":
          if (!t.customRange)
            throw new Error("Please call with customRange in 'custom' finding.");
          Ue(o, i, t.customRange) && (yield s.cell(o, i));
          break;
      }
      if (f())
        break;
    }
    function f() {
      const I = t.direction;
      if (I === "by-columns" || I === "left-right") {
        if (++o, o >= s.getRowCount() && (++i, o = l()), i >= s.getColCount())
          if (n)
            n = !1, o = l(), i = h();
          else
            return !0;
      } else if (++i, i >= s.getColCount() && (++o, i = h()), o >= s.getRowCount())
        if (n)
          n = !1, o = l(), i = h();
        else
          return !0;
    }
  }
  function c(m) {
    const f = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), I = t.matchAll ? `^${f}$` : f, p = t.ignoreCase ? "i" : "", y = new RegExp(I, p);
    return e.onCellCheck ? e.onCellCheck(y, m) : y.test(m.text);
  }
  let u = a();
  return {
    resetCursor() {
      u = a();
    },
    findNext(m) {
      for (mt(t, m) || (u = a()), Object.assign(t, m); ; ) {
        const f = u.next();
        if (!f.done && c(f.value))
          return n = !0, f.value;
        if (f.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(m) {
      const f = [];
      m && Object.assign(t, m);
      for (const I of a())
        c(I) && f.push(I);
      return f;
    },
    setCursor(m, f) {
      if (m < 0 || f < 0)
        throw new Error("row or col must be greater than or equal to 0");
      r.setRow(m), r.setCol(f);
    }
  };
}
const ei = 4, xe = "is-hidden";
function ti(s, e) {
  return s.top > e.bottom || e.top > s.bottom || s.left > e.right || e.left > s.right ? null : {
    top: Math.max(s.top, e.top),
    left: Math.max(s.left, e.left),
    bottom: Math.min(s.bottom, e.bottom),
    right: Math.min(s.right, e.right)
  };
}
const ni = Kn, oi = [Xn, Yn, Zn, qn], si = ["top", "left", "bottom", "right"];
function ii(s) {
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
  ], [o, i, r, l] = n, h = [o, r], a = [i, l];
  e.classList.add(jn, xe), n.forEach((b, w) => b.className = `${Un} border-line__${si[w]}`), t.forEach((b) => e.appendChild(b)), n.forEach((b) => e.appendChild(b));
  function c(b) {
    const { top: w, left: S, bottom: d, right: C } = f(b), _ = b.top < s.getFreezedRowCount() ? s.scrollTop : 0, E = b.left < s.getFreezedColumnCount() ? s.scrollLeft : 0;
    return {
      top: w + _,
      left: S + E,
      width: C - S,
      height: d - w
    };
  }
  function u(b) {
    b.classList.add(xe), delete b.dataset.y, delete b.dataset.x, delete b.dataset.width, delete b.dataset.height, delete b.dataset.visible;
  }
  function m(b, w) {
    const S = t[b], d = c(w);
    S.className = `${ni} ${oi[b]}`, S.dataset.top = w.top.toString(), S.dataset.left = w.left.toString(), S.dataset.bottom = w.bottom.toString(), S.dataset.right = w.right.toString(), S.dataset.y = d.top.toString(), S.dataset.x = d.left.toString(), S.dataset.width = d.width.toString(), S.dataset.height = d.height.toString(), S.dataset.visible = "true", S.style.top = `${d.top}px`, S.style.left = `${d.left}px`, S.style.width = `${d.width}px`, S.style.height = `${d.height}px`;
  }
  function f(b) {
    return {
      top: s.getRow(b.top).top - se,
      left: s.getColumn(b.left).left - ie,
      bottom: s.getRow(b.bottom).bottom,
      right: s.getColumn(b.right).right
    };
  }
  function I(b) {
    const { left: w, right: S } = b, d = s.getFreezedColumnCount();
    return O(w, S + 1).reduce((C, _) => {
      const E = s.getColumn(_);
      return E.visible ? C + (_ >= d ? E.widthWithBorder : 0) : C;
    }, 0);
  }
  function p(b) {
    const { top: w, bottom: S } = b, d = s.getFreezedRowCount();
    return O(w, S + 1).reduce((C, _) => {
      const E = s.getRow(_);
      return E.visible ? C + (_ >= d ? E.heightWithBorder : 0) : C;
    }, 0);
  }
  function y(b, w, S, d) {
    if (b <= d)
      return Math.min(w, S);
    const C = b - d;
    return S > C ? Math.max(0, S - C) : 0;
  }
  function T(b) {
    const { top: w, left: S, bottom: d, right: C } = f(b), {
      fixedRowHeight: _,
      fixedColumnWidth: E,
      scrollTop: g,
      scrollLeft: v
    } = s, x = _ + g, L = E + v, R = w < _, k = d <= _, M = S < E, z = C <= E, H = w >= x, A = d >= x, N = S >= L, B = C >= L, D = I(b), Q = p(b), Z = y(S, D, v, E), Be = y(w, Q, g, _), Se = C - S - Z, ye = d - w - Be, Ge = w + (R ? g : Be), Pe = S + (M ? v : Z), he = Pe < 0 ? 1 : 0, ge = Ge < 0 ? 1 : 0;
    (function() {
      h.forEach((ce) => {
        ce.style.left = `${Pe + he}px`, ce.style.width = `${Se - he}px`;
      });
    })(), function() {
      a.forEach((ce) => {
        ce.style.top = `${Ge + ge}px`, ce.style.height = `${ye - ge}px`;
      });
    }(), function() {
      if (Se <= 1) {
        o.style.display = "none";
        return;
      }
      o.style.removeProperty("display"), R ? o.style.top = `${w + g + ge}px` : H ? o.style.top = `${w + ge}px` : o.style.display = "none";
    }(), function() {
      if (Se <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), k ? r.style.top = `${d + g - se}px` : A ? r.style.top = `${d - se}px` : r.style.display = "none";
    }(), function() {
      if (ye <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.left = `${S + v + he}px` : N ? i.style.left = `${S + he}px` : i.style.display = "none";
    }(), function() {
      if (ye <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), z ? l.style.left = `${C + v - ie}px` : B ? l.style.left = `${C - ie}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(b) {
      const w = s.headerRows, S = s.getFreezedRowCount(), d = s.headerColumns, C = s.getFreezedColumnCount(), _ = s.getRowCount() - 1, E = s.getColCount() - 1, v = [
        { top: w, left: d, bottom: S - 1, right: C - 1 },
        { top: w, left: C, bottom: S - 1, right: E },
        { top: S, left: d, bottom: _, right: C - 1 },
        { top: S, left: C, bottom: _, right: E }
      ].map((x) => ti(b, x));
      for (let x = 0; x < ei; x++) {
        const L = v[x];
        L ? m(x, L) : u(t[x]);
      }
      T(b);
    },
    applyGridScroll() {
      const b = s.getSelection();
      b && this.updateArea(b);
    },
    show() {
      e.classList.remove(xe);
    },
    hide() {
      e.classList.add(xe);
    }
  };
}
class ri {
  #e;
  #t;
  constructor(e, t, n) {
    this.#e = t, this.#t = ii(e), n.appendChild(this.#t.selectionRoot);
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
class li extends P {
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
class ai extends P {
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
class ci extends P {
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
function Ht(s, e) {
  const [t, n] = s, [o, i] = e, r = n - t, l = i - o;
  return r === l ? [e, s] : t < o ? [[i - r, i], [t, t + l]] : [[o, o + r], [n - l, n]];
}
class di extends P {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Ht(...this._args));
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
class ui extends P {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Ht(...this._args));
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
class hi extends P {
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
class gi extends P {
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
class mi extends P {
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
function zt(s, e) {
  const [t, n] = s, o = n - t;
  return t < e ? [[e - o - 1, e - 1], t] : [[e, e + o], n + 1];
}
class fi extends P {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...zt(this._args[0], this._undoContext.targetId));
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
class Ci extends P {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...zt(this._args[0], this._undoContext.targetId));
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
class wi extends P {
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
    const e = new ve(this._instance), [t, n] = this._args;
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
class pi extends P {
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
class Ri extends P {
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
class _i extends P {
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
const dt = {
  addRow: ai,
  addColumn: li,
  setCell: re,
  clearCells: Et,
  setRowHeight: vt,
  setColumnWidth: bt,
  insertRows: gi,
  insertColumns: hi,
  setRowVisible: Ri,
  setColumnVisible: ci,
  mergeCells: mi,
  splitCells: _i,
  removeRows: pi,
  removeColumns: wi,
  exchangeRows: di,
  exchangeColumns: ui,
  moveRows: fi,
  moveColumns: Ci
};
function xi(s) {
  if (!(s in dt)) {
    console.warn(`There is no method named ${s} in IRGridCommandMap`);
    return;
  }
  return dt[s];
}
function bi(s) {
  if (s === G.name)
    return xi;
}
function vi(s, e, t, n, o) {
  const i = bi(e);
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
function V() {
  return function(e, t, n) {
    const o = n.value;
    return n.value = function(...i) {
      const { commandManager: r } = this;
      return r ? r.isRecording && vi(r, this.constructor.name, t, this, i) : console.warn("No commandManager in this context"), o.apply(this, i);
    }, n;
  };
}
var Si = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, $ = (s, e, t, n) => {
  for (var o = yi(e, t), i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (o = r(e, t, o) || o);
  return o && Si(e, t, o), o;
};
const He = new Fe(), ut = {}, Ei = [
  "text/html",
  "text/plain"
];
function Ii() {
  return [
    new Tt({}),
    new yt(),
    new kt(),
    new St({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new Zs({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class G extends lo {
  #e;
  #t;
  #l;
  #s = [];
  #r;
  #h = !1;
  #o;
  #m = new ve(this);
  #a;
  #d;
  #c;
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: o,
      defaultColumnCellFormat: i,
      plugins: r
    } = e;
    if (this.#r = {
      all: {
        editable: !0,
        text: ""
      }
    }, this.#c = Object.assign({ rowSpan: !0, colSpan: !0 }, e.copyOptions), i)
      for (const [c, u] of Object.entries(i))
        this.#r[c] = Object.assign(this.#r[c] || {}, u);
    this.#o = new zs(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: (n == null ? void 0 : n.colCount) ?? 0,
        headerRowCount: (t == null ? void 0 : t.rowCount) ?? 0,
        gridCommandManager: new ro({ context: this }),
        gridStateContext: new ws(this),
        cursorManager: It(this, !1)
      }
    ), this.#T(), this.#e = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: He,
      defaultSize: this.#o.getThemeValue("grid.defaultColumnWidth"),
      minSize: this.#o.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this.#e.minSize = Math.min(this.#e.defaultSize, this.#e.minSize), this.#e.maxSize = Math.max(this.#e.defaultSize, this.#e.maxSize), this.#t = Object.assign({
      colCount: 0,
      cellRenderer: He,
      defaultSize: this.#o.getThemeValue("grid.defaultRowHeight"),
      minSize: this.#o.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultRowMaxSize")
    }, n), this.#t.minSize = Math.min(this.#t.defaultSize, this.#t.minSize), this.#t.maxSize = Math.max(this.#t.defaultSize, this.#t.maxSize), this.#l = Object.assign({
      rowCount: 5,
      cellRenderer: He
    }, o), this.contextElement.classList.add(Jn, Qn), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l, tbody: h } = this.#o.elements, { gridStateContext: a } = this.#o;
    this.contextElement.appendChild(l), this.resizeObserve(() => {
      this.#o.hook.emit("onWrapperResized", []), this._debounceManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection"), this._debounceManager.forceRunTasks(), this.#o.hook.emit("resize", []), this.onResizeContext();
    }), this.#v(r ?? Ii()), this.addCoreElement(l), this.#a = new le(this.#n, this.#i), this.#d = new ri(this, a, l), this._debounceManager = new vs(this, a, l, h, this.contextElement, this.#d), a.selectionRangeState.addSubscription((c, u) => {
      (c == null ? void 0 : c.activeCell) !== (u == null ? void 0 : u.activeCell) && (c == null || c.activeCell.deactivate(), u == null || u.activeCell.activate());
    }), a.activateHeaderCellState.addSubscription((c, u) => {
      c.forEach((m) => m.deactivate()), u.forEach((m) => m.activate());
    }), a.selectionRangeState.addSubscription((c, u) => {
      u ? a.activateHeaderCellState.next([...this.#a.getSelectionHeaderIterator(u.range)]) : a.activateHeaderCellState.next([]);
    }), a.selectionRangeState.addSubscription((c, u) => {
      u ? this.onSelectCell(u.activeCell) : this.onActiveCellNull();
    }), a.selectionRangeState.addSubscription((c, u) => {
      this.onSelectChanged((u == null ? void 0 : u.range) ?? null);
    }), a.selectionRangeState.addSubscription((c, u) => {
      u != null && u.activeCell && this.#o.gridTextarea.setPosition(u.activeCell, this.scrollTop, this.scrollLeft);
    }), a.gridModeState.addSubscription((c, u) => {
      this.contextElement.dataset.mode = u.mode;
    }), a.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (c) => {
      c.preventDefault();
      const { y: u, x: m } = bo(c);
      this.onContextMenu(c, this.findCellOrNull(u, m));
    }), this.addGlobalEventListener(this.contextElement, "focus", () => this.focus()), this.addGlobalEventListener(this.contextElement, "dragend", () => this.focus()), this.#o.hook.addHook("changedFreezedRowHeight", (c, u) => this.#_(c, u)), this.#o.hook.addHook("changedFreezedColumnWidth", (c, u) => this.#x(c, u)), this.#S(), this.#o.gridTextarea.mountElement(l);
  }
  onDestroy() {
    this.#o.hook.clearHooks("changedFreezedRowHeight"), this.#o.hook.clearHooks("changedFreezedColumnWidth");
  }
  /**
   * 현재 고정된 행 개수 (header)
   * header + body를 사용하려면 getFreezedRowCount를 사용
   */
  get fixedRowCount() {
    return this.#e.rowCount;
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
  get #g() {
    return this.#o.gridStateContext;
  }
  get #n() {
    return this.#o.rowManager;
  }
  get #u() {
    return this.#o.mergeHandler;
  }
  get #i() {
    return this.#o.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  get fixedColumnCount() {
    return this.#i.freezedColumns;
  }
  get width() {
    return this.#i.columnsWidth;
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
    return this.#i.fixedColumnsWidth;
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
    return this.#i.headerColumns;
  }
  get headerWidth() {
    return this.#i.rowHeaderColumnsWidth;
  }
  get headerHeight() {
    return this.#n.headerRowsHeight;
  }
  get activeCell() {
    var e;
    return ((e = this.#g.selectionRangeState.value) == null ? void 0 : e.activeCell) ?? null;
  }
  /*
   * Setters
   */
  set activeCell(e) {
    if (e === this.activeCell)
      return;
    if (!e) {
      this.#g.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this.#g.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this.#g.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  set readonly(e) {
    this.#h = e, this.#n.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this.#o
    }), this.#s.push(e);
  }
  getColumnByLeft(e) {
    const t = this.#i.visibleColumnList;
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
    this.#r[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this.#n.getRowByTop(e);
  }
  removePlugin(e) {
    if (!this.#s.includes(e))
      throw new Error("plugin not found");
    e.unmount(), this.#s.splice(this.#s.indexOf(e), 1);
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
    return this.#u.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this.#u.splitCells(e, t), this._debounceManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, o) {
    this.forceLayoutTask(), this.#u.mergeCells({ top: e, left: t, bottom: n, right: o }), this._debounceManager.addTask("virtualRender");
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
    if (!l)
      return null;
    const h = this.getColumnByLeft(r);
    if (!h)
      return null;
    const a = this.cell(l.rowId, h.columnId);
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
    this.#g.selectionRangeState.next(null), this.#d.releaseRange();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this.#n.clearRows(), this.commandManager.clearCommands(), this._debounceManager.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this.#i.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    this.#g.selectionRangeState.next({
      range: e,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._debounceManager.addTask("updateSelection");
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
    return ((e = this.#g.selectionRangeState.value) == null ? void 0 : e.range) ?? null;
  }
  scrollOnRow(e) {
    this._debounceManager.isScheduled ? this.afterRender(() => this.#C(e)) : this.#C(e);
  }
  forceLayoutTask() {
    this._debounceManager.forceRunTasks();
  }
  scrollOnCol(e) {
    this._debounceManager.isScheduled ? this.afterRender(() => this.#f(e)) : this.#f(e);
  }
  getPlugin(e) {
    for (const t of this.#s)
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
    this._debounceManager.addAfterRenderTask(e), this._debounceManager.addTask("nothing");
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
    return this.#i.getColumnWidth(e);
  }
  setColumnWidth(e, t) {
    const n = F(t, this.#e.minSize, this.#e.maxSize);
    this.#i.setColumnWidth(e, n), this.onResizeColumn(e), this.#o.hook.emit("onColumnChanged", [e, e, "setWidth"]), this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#i.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft");
  }
  getRowHeight(e) {
    return this.#n.getRowHeight(e);
  }
  setRowHeight(e, t) {
    const n = F(t, this.minRowHeight, this.maxRowHeight);
    this.#n.setRowHeight(e, n), this._debounceManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
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
    return this.#i.length;
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
    return this.#i.freezedColumns;
  }
  getColumn(e) {
    return this.#i.getColumn(e);
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
    this._debounceManager.scheduleAddRowTasks();
  }
  addRow(e) {
    return this._debounceManager.scheduleAddRowTasks(), this._addRow(e);
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
    if (this.#u.checkConflictingInRows(e, t))
      return !1;
    for (let n = e; n <= t; n++) {
      const o = this.getRow(n);
      for (const i of o.getCellGenerator())
        i.isMerged && this.#u.removeMergeCell(i.row, i.col);
    }
    return this.#n.removeRows(e, t), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection"), !0;
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this.#u.checkConflictingInColumns(e, t) ? !1 : (this.#n.runFuncEachRow((n) => {
      for (const o of n.getCellGenerator(e, t))
        o.isMerged && this.#u.removeMergeCell(o.row, o.col);
    }), this.#n.removeColumns(e, t), this.#i.removeColumns(e, t), this.#o.hook.emit("onColumnChanged", [e, t, "removeColumns"]), this._debounceManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection"), e < this.#i.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this.#e.defaultSize) {
    const t = F(e, this.minColWidth, this.maxColWidth), n = this.#i.addColumn(t);
    return this.#n.addColumn((o) => this.createIRGridCell(o.rowId, n.columnId)), this.#o.hook.emit("onColumnChanged", [n.columnId, n.columnId, "addColumn"]), n.columnId;
  }
  addColumn(e) {
    return this._debounceManager.addTask("generateScrollBarClass"), this._addColumn(e);
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
    if (!this.#u.checkCanInsertRow(i))
      return !1;
    const r = F(n, this.minRowHeight, this.maxRowHeight);
    if (i === o) {
      for (let h = 0; h < t; h++)
        this.addRow(r);
      return !0;
    }
    const l = O(t).map((h) => this.createIRGridRow(i + h, 0, r));
    return this.#n.insertRows(i, l), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection"), !0;
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
    if (!this.#u.checkCanInsertColumn(e))
      return !1;
    const r = F(n, this.minColWidth, this.maxColWidth);
    if (i === o) {
      for (let h = 0; h < t; h++)
        this.addColumn(r);
      return !0;
    }
    this.#i.insertColumns(e, t, r), this.#n.insertColumns(e, t, (h, a) => this.createIRGridCell(h, a));
    const l = this._debounceManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
    return e < this.#i.freezedColumns && l.addTask("updateRowsStickyLeft"), !0;
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
      const t = (await eo.read()).flat();
      for await (const n of t)
        for (const o of Ei)
          e[o] === "" && n.types.includes(o) && (e[o] = await to(await n.getType(o)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = wo(ut) ?? "";
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
      qe(
        await this._createClipboardGetter()
      )
    );
  }
  #w(e, t) {
    if (this.#c.rowSpan)
      for (const n of this.#a.getSelectionGenerator(e))
        n.mergeInfo.rowSpan > 1 && this.splitCells(n.row, n.col);
    if (this.#c.colSpan)
      for (const n of this.#a.getSelectionGenerator(e))
        n.mergeInfo.colSpan > 1 && this.splitCells(n.row, n.col);
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = ns(this, this.#c), o = n.getPastingRange(e, t);
    this.#w(o, t);
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
    for (const t of this.#a.getSelectionGenerator(e))
      this.onClearCellCheck(t) && t.clear();
  }
  setRowVisible(e, t) {
    return this.#u.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this.#n.setRowVisible(e, t), this._debounceManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection")), !0);
  }
  setRowVisibleBulk(e, t) {
    this.#n.setRowVisibleBulk(e, t), this._debounceManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  getRowVisible(e) {
    return this.#n.getRowVisible(e);
  }
  setColumnVisible(e, t) {
    return this.#u.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this.#i.setColumnVisible(e, t), this.#n.setColumnVisible(e, t), this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#i.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft"), this.#o.hook.emit("onColumnChanged", [e, e, "setVisible"])), !0);
  }
  getColumnVisible(e) {
    return this.#i.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return Qs(this, e);
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
    this.#n.freezeRows(e);
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns), this._debounceManager.addTask("updateSelection");
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
    this.#i.freezeColumns(e);
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  setClipboardOptions(e) {
    Object.assign(this.#c, e);
  }
  sort(e, t, n, o) {
    const i = Math.max(n ?? this.headerRows, this.headerRows), r = Math.min(o ?? this.getRowCount(), this.getRowCount());
    this.#n.sort(e, t, i, r), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(e) {
    for (const t of this.#a.getSelectionGenerator(e)) {
      const n = t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1 ? t : t.mergeMain;
      n && this.splitCells(n.row, n.col);
    }
  }
  selectMultipleCellAddress(e) {
    e.length > 0 && this.selectCell(e[0][0], e[0][1]);
  }
  selectMultipleCells(e) {
    e.length > 0 && this.selectCell(e[0].row, e[0].col);
  }
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
    if (this.#u.checkConflictingInRows(...e) || this.#u.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.#n.exchangeRows(e, t), this.onExchangedRows(e, t), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this.#i.isInvalidColumnId(n)) || t.some((n) => this.#i.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this.#u.checkConflictingInColumns(...e) || this.#u.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.#n.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._debounceManager.addTask("adjustSelection");
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
    if (this.#u.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.#n.getAdjustTargetRow(t);
    this.#n.moveRows(e, n), this.onMovedRows(e, n), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
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
    if (this.#u.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.#b(t);
    this.#n.runFuncEachRow((o) => o.moveCells(e, n)), this.onMovedColumns(e, n), this._debounceManager.addTask("adjustSelection");
  }
  getStartOfRowId(e) {
    return this.#n.getStartOfRowId(e);
  }
  getStartOfColumnId(e) {
    return this.#n.getStartOfColumnId(e);
  }
  getSelectedMultipleCellAddress() {
    const e = this.getSelection();
    return e ? [[e.top, e.left]] : [];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   */
  isSelectedSingleCell() {
    const e = this.getSelection();
    if (!e)
      return !1;
    const { top: t, left: n, bottom: o, right: i } = e;
    if (t === o && n === i)
      return !0;
    const r = this.getRow(t).getCell(n);
    return o === r.bottom && i === r.right;
  }
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
    if (!e.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t)
      throw new Error("Detected copy without selection");
    const o = this.#m.getCellMatrixByRange(t).map((i) => i.map((r) => ({
      text: this.onCopyCellText(r),
      cellVisible: r.mergeMain === void 0,
      rowSpan: r.mergeInfo.rowSpan,
      colSpan: r.mergeInfo.colSpan,
      isFormatted: !1
    })));
    us(e.clipboardData, o), po(ut, JSON.stringify(o)), this.focus(), this.onCopy(), e.preventDefault();
  }
  onCopyCellText(e) {
    return e.text;
  }
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t)
      throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  onNativePaste(e) {
    if (!e.clipboardData)
      throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t)
      throw new Error("it needs selection to paste");
    const n = qe(e.clipboardData);
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
  doEditMode(e, t = !1) {
    if (!e.element.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return !1;
    const n = this.#o.gridTextarea;
    n.onEditDone = (o, i, r, l, h, a) => {
      this.onEditCellDone(o, i, r, l, h, a), this.focus(), this.#g.gridModeState.value.mode === "edit-cell" && this.#g.setIdle();
    }, n.onEditKeyDown = (o, i, r, l) => this.onEditKeyDown(o, i, r, l), n.onEnterOnEdit = () => {
      const o = this.#o.cursorManager.getNextYBelow(e.row, e.col, 1);
      e.row !== o && (this.selectCell(o, e.col), this.doEditMode(this.cell(o, e.col)));
    };
    try {
      return this.#g.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell: e }
      }), n.runEditMode(e, this.scrollTop, this.scrollLeft, t), !0;
    } catch (o) {
      return console.error("IRGrid.doEditMode Error!", o), !1;
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
  #p(e) {
    const t = this.#n.getRow(e);
    return this.#n.getBottomByRowId(t.getBottomRowId()) - this.#n.getTopByRowId(e);
  }
  #R(e) {
    return this.#i.getColumnRight(this.#n.getEndColumnId(e)) - this.#i.getColumnLeft(e);
  }
  #_(e, t) {
    const n = t, o = e + (n < this.getRowCount() ? this.#p(n) : 0) + (this.hasHorizontalScroll() ? je : 0);
    U(this.contextElement, {
      [W.minHeight]: `${o}px`
    }), this._debounceManager.addTask("updateSelection");
  }
  #x(e, t) {
    const n = t, o = e + (n < this.getColCount() ? this.#R(n) : 0) + (this.hasVerticalScroll() ? je : 0);
    U(this.contextElement, {
      [W.minWidth]: `${o}px`
    }), this._debounceManager.addTask("updateSelection").addTask("updateRowsStickyLeft");
  }
  #b(e) {
    return e >= this.#i.length ? this.#i.length : e < this.#i.freezedColumns ? this.#i.freezedColumns : this.#n.getStartOfColumnId(e);
  }
  #f(e) {
    const t = F(e, 0, this.getColCount() - 1), n = this.getColumnLeft(t), o = n + this.getColumnWidth(t), { fixedColumnWidth: i, scrollRight: r, scrollLeft: l } = this, h = l + i;
    r < o ? this.contextElement.scrollLeft = l + (o - r) : h > n && (this.contextElement.scrollLeft = n - i);
  }
  #C(e) {
    const t = F(e, 0, this.getRowCount() - 1), n = this.getRow(t), o = n.top, i = n.top + n.height, { scrollBottom: r, fixedRowHeight: l, scrollTop: h } = this, a = h + l;
    r < i ? this.contextElement.scrollTop = h + (i - r) : a > o && (this.contextElement.scrollTop = o - l);
  }
  onCheckCellReadonly(e) {
    return this.#h ? !0 : e.props.readonly === !0;
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
    O(this.#e.colCount).forEach(() => this.addColumn(this.#e.defaultSize)), this._createBulkRows(this.#e.rowCount + this.#l.rowCount);
  }
  #y(e) {
    e.cellType = "col-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onColumnClick(e);
    };
  }
  #E(e) {
    e.cellType = "row-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onRowClick(e);
    };
  }
  #I(e) {
    e.cellType = "body-cell", e.onClear = () => this.onClearCell(e), e.onDblClick = () => this.onDoubleClickCell(e);
  }
  #T() {
    U(this.contextElement, {
      [W.cellTopPadding]: `${this.#o.getThemeValue("grid.paddingTop")}px`,
      [W.cellLeftPadding]: `${this.#o.getThemeValue("grid.paddingLeft")}px`,
      [W.cellBottomPadding]: `${this.#o.getThemeValue("grid.paddingBottom")}px`,
      [W.cellRightPadding]: `${this.#o.getThemeValue("grid.paddingRight")}px`
    });
  }
  #L(e, t, n, o) {
    if (e === "col-header")
      return this.#e.cellRenderer;
    if (e === "row-header")
      return this.#t.cellRenderer;
    if (e === "body-cell")
      return this.#l.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  #k(e, t) {
    const n = e < this.headerRows, o = !n && t < this.headerColumns;
    return n ? "col-header" : o ? "row-header" : "body-cell";
  }
  #M(e, t) {
    const n = {
      gridStore: this.#o
    };
    return Object.assign(n, {
      ...this.#r.all,
      ...this.#r[t]
    }), e === "col-header" ? Object.assign(n, { dropDisabled: !0 }, this.#r[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, { dropDisabled: !0 }, this.#r[`row_header_${t}`]) : Object.assign(n, this.#r[`body_${t}`]), n;
  }
  createIRGridCell(e, t) {
    const n = this.#k(e, t), o = n.endsWith("header") ? "th" : "td", i = this.#M(n, t), r = this.#L(n, e, t, i), l = new xs({
      row: e,
      col: t,
      tag: o,
      cellRenderer: r,
      props: i
    });
    return l.onRightClick = (h, a) => this.onCellRightClick(h, a), l.onCheckReadonly = () => this.onCheckCellReadonly(l), n === "col-header" ? this.#y(l) : n === "row-header" ? this.#E(l) : this.#I(l), this.onCreatingCell(l), l;
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
        l && (l.height = this.#u.getMergedRowHeight(l.row, l.row + l.mergeInfo.rowSpan - 1));
      });
    }, o;
  }
  get gridContextElement() {
    return this.contextElement;
  }
}
$([
  V()
], G.prototype, "splitCells");
$([
  V()
], G.prototype, "mergeCells");
$([
  V()
], G.prototype, "setColumnWidth");
$([
  V()
], G.prototype, "setRowHeight");
$([
  V()
], G.prototype, "setCell");
$([
  V()
], G.prototype, "addRow");
$([
  V()
], G.prototype, "removeRows");
$([
  V()
], G.prototype, "removeColumns");
$([
  V()
], G.prototype, "addColumn");
$([
  V()
], G.prototype, "insertRows");
$([
  V()
], G.prototype, "insertColumns");
$([
  V()
], G.prototype, "clearCells");
$([
  V()
], G.prototype, "setRowVisible");
$([
  V()
], G.prototype, "setColumnVisible");
$([
  V()
], G.prototype, "exchangeRows");
$([
  V()
], G.prototype, "exchangeColumns");
$([
  V()
], G.prototype, "moveRows");
$([
  V()
], G.prototype, "moveColumns");
const ht = (s) => s === "" || !s ? -Number.MAX_SAFE_INTEGER : parseInt(s, 10), lr = (s) => {
  const e = /* @__PURE__ */ new Set();
  let t = null, n = !0;
  return {
    get enabledColumnClick() {
      return n;
    },
    set enabledColumnClick(o) {
      n = o;
    },
    clearNumberColumns() {
      e.clear();
    },
    clearSortOrder() {
      t && (t.cellInfo = { sortOrder: void 0 }), t = null;
    },
    removeNumberColumns(...o) {
      o.forEach((i) => e.delete(i));
    },
    setNumberColumns(...o) {
      o.forEach((i) => e.add(i));
    },
    compareTo(o, i) {
      const r = e.has(o.col) ? ht(o.text) : o.text, l = e.has(i.col) ? ht(i.text) : i.text;
      return r < l ? -1 : r > l ? 1 : 0;
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${s.uuid}`), s.onColumnClick = (o) => {
        n && this.toggleSortColumn(o);
      };
    },
    sortColumn(o, i) {
      s.sort((r, l) => this.compareTo(r.getCell(o), l.getCell(o)), i);
    },
    toggleSortColumn(o) {
      if (o.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      const i = o.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      t !== o && this.clearSortOrder(), t = o, o.cellInfo = { sortOrder: i }, this.sortColumn(o.col, i);
    }
  };
}, Ti = /^[0-9]*(\.[0-9]+)?$/, Li = (s) => s.text === "" ? !0 : Ti.test(s.text), ki = (s) => (e, t) => {
  const n = e.getCell(s).text, o = t.getCell(s).text, i = n === "" ? Number.MIN_VALUE : parseFloat(n), r = o === "" ? Number.MIN_VALUE : parseFloat(o);
  return i < r ? -1 : 1;
}, Mi = (s) => (e, t) => e.getCell(s).text < t.getCell(s).text ? -1 : 1, ar = ({
  grid: s,
  onNumberCheck: e = Li
}) => ({
  sortColumn(t, n, o, i) {
    (() => {
      for (let l = o; l < i; l++) {
        const h = s.getRow(l).getCell(t);
        if (e(h))
          return !1;
      }
      return !0;
    })() ? s.sort(Mi(t), n, o, i) : s.sort(ki(t), n, o, i);
  }
}), cr = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, dr = /^-?\d+(\.\d+)?$/;
export {
  cr as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  dr as ALLOW_ONLY_NUMBER_PATTERN,
  tr as CellDropPlugin,
  er as ColumnFillPlugin,
  Ji as DefaultKeyPlugin,
  G as IRGrid,
  Uo as IRGridButtonRenderer,
  kt as IRGridCellDropPlugin,
  X as IRGridCellRenderer,
  Lo as IRGridCheckboxRenderer,
  js as IRGridColumnFillPlugin,
  Oo as IRGridDatePickerRenderer,
  Jo as IRGridDefaultCellIconButtonRenderer,
  Fe as IRGridDefaultCellRenderer,
  Tt as IRGridDefaultKeyPlugin,
  or as IRGridExchangeByHeaderCellPlugin,
  yt as IRGridMouseCellSelectorPlugin,
  ir as IRGridMoveColumnsPlugin,
  sr as IRGridMoveRowsPlugin,
  rr as IRGridOverflowPanelPlugin,
  Zs as IRGridPopoverPlugin,
  Go as IRGridProgressRenderer,
  Yo as IRGridRadioCellRenderer,
  St as IRGridResizerPlugin,
  Qo as IRGridRowNoHeaderCellRenderer,
  Gs as IRGridRowSelectionPlugin,
  Do as IRGridSelectCellRenderer,
  Us as IRGridSingleCellDragPlugin,
  qi as MouseCellSelectorPlugin,
  Zi as ResizerPlugin,
  Qi as RowSelectionPlugin,
  nr as SingleCellDragPlugin,
  Zo as createCellContent,
  qo as createCellContentWithIconButton,
  ts as createCustomRenderer,
  lr as createIRGridColumnSortManager,
  ar as createInferenceSortHandler,
  ji as renderGridButton,
  Ki as renderGridCellDefault,
  Xi as renderGridCellIconButton,
  Gi as renderGridCheckbox,
  Vi as renderGridDatePicker,
  $i as renderGridProgress,
  Ui as renderGridRadio,
  Pi as renderGridSelect,
  Yi as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
