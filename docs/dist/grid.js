import "./chunks/_init-CqtFEZw2.js";
import { a9 as Jt, aa as Qt, p as se, ab as en, ac as tn, b as nn, ad as on, t as sn, u as rn, ae as ln, y as an, af as cn, P as dn, L as un, F as hn, D as gn, G as ot, a as fn, ag as mn, Y as Cn, r as wn, q as pn, ah as _n, a3 as P, ai as Rn, aj as xn, ak as bn, al as yn, am as Sn, an as En, ao as vn, l as kt, J as In, K as Tn, O as Mn, ap as Ln, aq as kn, ar as Hn, as as zn, at as An, au as Dn, av as Ze, aw as Wn, ax as On, a6 as Fn, a8 as qe, ay as Ge, az as Pn, aA as Gn, aB as Bn, aC as W, aD as Vn, aE as Nn, aF as $n, aG as Be, aH as st, a2 as jn, f as Z, aI as Ue, aJ as Ke, aK as Un, aL as Kn, aM as Xn, aN as Yn, aO as Zn, aP as qn, aQ as Jn, aR as Qn, aS as eo, aT as to, aU as no, aV as oo, aW as so, aX as ro, aY as io, aZ as lo, a_ as ao, a$ as co, o as uo, a5 as ho, a0 as go, b0 as rt, b1 as fo, b2 as mo, b3 as Co } from "./chunks/rx-state-CHpF6m8D.js";
import { e as J, a as wo, b as po, c as _o, s as U, d as Ro } from "./chunks/command-manager-B89JK2HT.js";
import { I as xo } from "./chunks/index-cpGHHlo1.js";
import { g as Xe, o as bo, c as yo, i as pe, b as So, d as Eo, f as vo, s as Io } from "./chunks/floating-B9y9ooPB.js";
import { i as To, d as xe } from "./chunks/ko-CwHxoe1v.js";
import { i as Ht, r as Mo, w as Lo } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { p as ko } from "./chunks/pick-BLZiDVxr.js";
import { v as Ho } from "./chunks/v4-ANoOI1Qw.js";
function zo(s, e, t = 1) {
  const n = [];
  for (let o = s; o < e; o += t)
    n.push(o);
  return n;
}
function O(s, e, t = 1) {
  const { start: n, end: o } = e === void 0 ? { start: 0, end: s } : { start: s, end: e };
  return {
    forEach(r) {
      let i = n;
      for (; i !== o; )
        r(i), i += t;
    },
    map(r) {
      const i = [];
      for (let l = n; l < o; l += t)
        i.push(r(l));
      return i;
    },
    some(r) {
      let i = n;
      for (; i !== o; ) {
        if (r(i))
          return !0;
        i += t;
      }
      return !1;
    },
    asList() {
      return zo(n, o, t);
    },
    reduce(r, i) {
      let l = i, h = n;
      for (; h !== o; )
        l = r(l, h), h += t;
      return l;
    }
  };
}
function oe(s) {
  return s instanceof HTMLElement;
}
function Ve(s, e) {
  return Jt(function(t, n) {
    var o = 0;
    t.subscribe(Qt(n, function(r) {
      n.next(s.call(e, r, o++));
    }));
  });
}
function it(s, e, t) {
  return zt(s, t) && At(e, t);
}
function Q(s) {
  const e = parseInt(s.getAttribute("data-row") || "-1"), t = parseInt(s.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function zt(s, e) {
  return s >= e.top && s <= e.bottom;
}
function At(s, e) {
  return s >= e.left && s <= e.right;
}
function be(s, e, t) {
  t ? s.classList.add(e) : s.classList.remove(e);
}
function Ao(s) {
  let e = s.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function Do(s) {
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
const Wo = 20, Oo = 5;
class K {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding(e) {
    return (e.paddingLeft ?? e.getGridStore().getThemeValue("grid.paddingLeft")) + (e.paddingRight ?? e.getGridStore().getThemeValue("grid.paddingRight"));
  }
  getCellInnerWidth(e, t, n) {
    const o = se(e, t), r = [n.icon, n.sortOrder].reduce((h, a) => a ? h + 1 : h, 0) * (Wo + Oo), i = `${n.text ?? ""}`.split(`
`), l = r + o.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + O(1, i.length).reduce(
      (h, a) => Math.max(h, o.calculateWidth(i[a])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    const n = t.getGridStore(), o = t.paddingTop ?? n.getThemeValue("grid.paddingTop"), r = t.paddingBottom ?? n.getThemeValue("grid.paddingBottom");
    return o + r + Ao(e);
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
}
class Fo {
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
class B extends Fo {
}
class he extends B {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: ko(
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
const Ce = {
  checkbox: sn,
  checkboxWrapper: rn,
  checkboxText: ln,
  checkboxInput: an,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, Po = 16, Ye = 6, Go = Ye * 2, Bo = 20;
class Vo extends K {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (o.classList.add(en, Ce.checkbox), r.classList.add(tn, Ce.checkboxWrapper), i.type = "checkbox", i.className = Ce.checkboxInput, r.appendChild(i), n.icon && r.appendChild(nn(`ir-icon--${n.icon}`)), n.label) {
      const l = document.createElement("span");
      l.className = `${on} ${Ce.checkboxText}`, l.innerText = n.label, r.appendChild(l);
    }
    return n.horizontalAlign && o.classList.add(Ce[`horizontal_${n.horizontalAlign}`]), o.appendChild(r), i.checked = n.text === "true", r.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, h = l ? "true" : "false", a = n.commandManager, c = new he(a, [e, t, { text: h }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, n.commandManager.commandManager.pushCommandBlock(new J(
        "Change checkbox",
        c
      )), n.text = h, this.onCheckboxClick(e, t, l);
    }, o;
  }
  getCellInnerWidth(e, t, n) {
    const o = se(e, t), r = n.label ? Ye + o.calculateWidth(n.label) : 0, i = n.icon ? Ye + Bo : 0;
    return Po + Go + r + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
}
function Qr(s) {
  const e = new Vo(s ?? {});
  return () => e;
}
const ye = { select: dn, selectInput: un, selectInputNative: hn, selectInputIcon: gn }, lt = /* @__PURE__ */ new WeakMap(), No = 20, $o = 4, at = No + $o, jo = 18, Uo = 150, Ko = (s, e) => e ?? "";
class Xo extends K {
  constructor({
    items: e,
    allowCustomText: t = !1,
    showErrorIfCustomText: n = !1,
    allowEdit: o = !1,
    onChange: r,
    customDisplayTextFunc: i = Ko,
    getVisibleFunc: l = () => !0
  }) {
    super(), this._dropDownItemList = [], this._dropDownContext = wo(), this._itemWidth = null, this._isExpanded = !1, this._floatingCleanup = () => {
    }, this._items = e, this._itemTextSet = /* @__PURE__ */ new Set(), this._allowCustomText = t, this._allowEdit = o, o && (this._allowCustomText = !0), this._customDisplayTextFunc = i, this._showErrorIfCustomText = n, this._getVisibleFunc = l, r && (this.onChange = r.bind(this));
    for (const { value: h, text: a } of e) {
      const { item: c, button: g } = po(h, a);
      this._itemTextSet.add(a), this._dropDownItemList.push({ value: h, text: a, buttonElement: g, itemWrapperElement: c }), this._dropDownContext.ulItems.appendChild(c);
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
      _allowEdit: r,
      _showErrorIfCustomText: i,
      _customDisplayTextFunc: l,
      _getVisibleFunc: h,
      _dropDownContext: { divDropdown: a },
      _dropDownItemList: c
    } = this, g = document.createElement("div"), C = document.createElement("span"), f = document.createElement("i"), R = n.text === "" || n.text === null || n.text === void 0;
    g.classList.add(cn, ye.select, ye.selectInput), C.classList.add(ye.selectInputNative), f.classList.add(ye.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), r && g.classList.add("is-editable");
    let S = !1;
    const w = this.getSelectedItemOrNull(n.text);
    w && (C.textContent = l(w.value, w.text, !1), n.value = w.value, S = !0), S || (o ? (C.textContent = l(n.value, n.text, !0), n.value = n.text) : (C.textContent = "", n.value = "")), // error 상태 표시 지정 시, error 속성 추가
    o && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !R && !S && (g.dataset.error = "true");
    const I = fn({
      eventElements: [g, a],
      clickOutsideFunc: () => x.hide()
    }), x = {
      show: () => {
        this._isExpanded = !0, E.create(), I.create(), this._beforeValue = n.value, this._beforeText = n.text;
        for (const L of c) {
          const { value: u, text: b, itemWrapperElement: y, buttonElement: T } = L;
          h(L) === !1 ? y.style.display = "none" : y.style.display = "", b === n.text ? y.classList.add(ot) : y.classList.remove(ot), T.onclick = () => {
            const p = n.commandManager, M = new he(p, [e, t, { text: b, value: u }]);
            M.onUndo = () => {
              this.onChange(e, t, this._beforeValue, this._beforeText, u, b);
            }, M.onExecute = () => {
              this.onChange(e, t, u, b, this._beforeValue, this._beforeText);
            }, n.commandManager.commandManager.pushCommandBlock(new J(
              "Change select menu",
              M
            )), n.text = b, n.value = u, C.textContent = l(u, b, !1), g.dataset.error && delete g.dataset.error, this.onChange(e, t, u, b, this._beforeValue, this._beforeText), x.hide();
          };
        }
        const m = this.getItemWidth(n.fontSize || "13px", n.fontFamily || "Pretendard", n), _ = g.offsetWidth, v = n.getGridStore().getThemeValue("grid.defaultDropdownWidth");
        a.style.maxWidth = `${_ > v ? _ : v}px`, a.style.width = `${Math.max(m, _)}px`, a.setAttribute("data-row", e.toString()), a.setAttribute("data-col", t.toString()), Xe("popover").appendChild(a), g.classList.add("is-expanded"), setTimeout(() => {
          a.classList.add("is-expanded"), this._floatingCleanup(), this._floatingCleanup = bo(g.parentElement, a, "bottom-start");
        }, 0);
      },
      hide: () => {
        this._isExpanded = !1, E.destroy(), I.destroy(), g.classList.remove("is-expanded"), a.classList.remove("is-expanded"), setTimeout(() => {
          a.getAttribute("data-row") === e.toString() && a.getAttribute("data-col") === t.toString() && (this._floatingCleanup(), a.remove());
        }, Uo);
      }
    }, E = yo(x), d = () => {
      g.classList.contains("is-expanded") ? x.hide() : x.show();
    };
    return g.onclick = (m) => {
      r && m.target !== f || d();
    }, g.appendChild(C), g.appendChild(f), g;
  }
  onChange(e, t, n, o, r, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text)
      return 0;
    const o = se(e, t), r = this._itemTextSet.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !r), l = o.calculateWidth(i);
    return at + l + this.getHorizontalCellPadding(n);
  }
  getDropdownWidth(e, t, n) {
    const o = se(e, t), r = this._items.reduce((i, l) => Math.max(i, o.calculateWidth(l.text)), 0);
    return at + r + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const o = lt.get(this);
    if (o)
      return o;
    const r = this.getDropdownWidth(e, t, n);
    return lt.set(this, r), r;
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + jo;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
}
const ei = (s) => {
  const e = new Xo(s);
  return () => e;
}, Ne = { input: Cn, inputNative: wn, inputSuffix: pn }, Yo = 28, ie = /* @__PURE__ */ new WeakMap();
class Zo extends K {
  constructor({
    onDateClick: e,
    format: t = To.datePicker.dateFormat,
    minDate: n = pe().getStoreValue("datePicker.minDate"),
    maxDate: o = pe().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: r = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = o, this._allowedEmptyString = r, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return se(e, t).calculateWidth(n.text || this._format) + Yo + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("input"), i = document.createElement("button"), l = document.createElement("i"), {
      _minDate: h,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: g
    } = this;
    if (r.readOnly = !0, r.maxLength = c.length, o.classList.add(Ne.input, mn), r.classList.add(Ne.inputNative), i.classList.add(Ne.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), r.type = "text", r.placeholder = c, n.text !== "") {
      const f = xe(n.text, c, !0);
      f.isValid() || (n.text = ie.get(n)), (f.isBefore(h) || f.isAfter(a)) && (n.text = ie.get(n));
    }
    !g && (n.text === "" || n.text === void 0) && (n.text = ie.has(n) ? ie.get(n) : xe().format(c)), r.value = n.text || "", ie.set(n, n.text ?? ""), i.appendChild(l), o.appendChild(r), o.appendChild(i);
    const C = _o({
      uuid: Ho(),
      refElement: o,
      minDate: h,
      maxDate: a,
      onClick: (f) => {
        const R = n.text, S = xe(f).format(c), w = n.commandManager, I = new he(w, [e, t, { text: S }]);
        I.onUndo = () => {
          this.onDateClick(e, t, R ?? "");
        }, I.onExecute = () => {
          this.onDateClick(e, t, S);
        }, w.commandManager.pushCommandBlock(new J("Change datePicker", I)), r.value = S, n.text = S, ie.set(n, S), this.onDateClick(e, t, S), C.hide();
      }
    });
    return i.onclick = () => {
      if (!C.visible) {
        const f = xe(n.text, c, !0);
        f.isValid() ? C.update(f.toDate(), f.toDate()) : C.update(/* @__PURE__ */ new Date(), null), C.show();
      }
    }, o;
  }
  get renderType() {
    return "datePicker";
  }
}
const ti = (s) => {
  const e = new Zo(s);
  return () => e;
}, Se = {
  progress: Rn,
  progressVariants: xn
}, qo = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, Jo = 100, Qo = 100;
class es extends K {
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: o = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = o;
  }
  render(e, t, n) {
    const {
      _min: o,
      _max: r,
      _afterDecimalLen: i,
      _defaultIntent: l
    } = this, h = document.createElement("div"), a = document.createElement("div");
    h.className = _n, a.className = Se.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${Se.progress}--${c}`);
    const C = (P(parseFloat(n.text || "0"), o, r) - o) / (r - o) * Jo;
    return U(a, {
      [Se.progressVariants.progressPercent]: `${C}%`,
      [Se.progressVariants.progressText]: `'${C.toFixed(i)}%'`
    }), h.appendChild(a), h;
  }
  getCellInnerWidth(e, t, n) {
    return Qo + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
}
const ni = (s = qo) => {
  const e = new es(s);
  return () => e;
}, ts = 20, ns = 24, os = 24, ss = 29, ct = {
  primary: In,
  secondary: Tn,
  tertiary: Mn,
  transparent: Ln,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class rs extends K {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = ss : e.outlineStyle ? this._extraWidth = os : this._extraWidth = 0;
  }
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: o,
      outlineStyle: r,
      defaultColor: i,
      defaultIcon: l,
      defaultLabel: h
    } = this.args, a = document.createElement("div"), c = document.createElement("button");
    a.className = bn, c.classList.add(yn, "button");
    const g = n.intent ?? i;
    g && c.classList.add(ct[g]), r ? a.classList.add(Sn) : o && a.classList.add(En), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(ct[n.horizontalAlign]), c.onclick = (R) => this.onClick(R, e, t);
    const C = n.icon ?? l, f = o ? n.text ?? "" : n.label ?? h ?? "";
    if (C) {
      const R = document.createElement("i");
      R.classList.add(vn, "ir-icon", `ir-icon--${C}`), c.appendChild(R);
    }
    if (f) {
      const R = kt("span");
      if (R.innerText = f, o) {
        const S = document.createElement("div");
        R.classList.add("text--multi-ellipsis"), S.appendChild(R), a.insertAdjacentElement("afterbegin", S);
      } else
        R.classList.add("text--ellipsis"), c.appendChild(R);
    }
    return a.appendChild(c), a;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? ts : 0;
  }
  getCellInnerWidth(e, t, n) {
    const o = se(e, t);
    return this.getHorizontalCellPadding(n) + o.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    return ns;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
}
const oi = (s) => {
  const e = new rs(s ?? {});
  return () => e;
}, Ee = { radio: Hn, radioWrapper: zn, radioInput: An, radioText: Dn }, is = 16, Dt = 6, ls = Dt * 2;
class as extends K {
  constructor({ onRadioClick: e }) {
    super(), this._radioItemStack = [], e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (o.className = `${kn} ${Ee.radio}`, r.className = Ee.radioWrapper, i.type = "radio", i.className = Ee.radioInput, r.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = Ee.radioText, l.innerText = n.label, r.appendChild(l);
    }
    return o.appendChild(r), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), r.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.commandManager, h = new he(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
      h.onUndo = () => {
        a && (l.setCell(a.row, a.col, { text: "true" }), this.onRadioClick(a.row, a.col));
      }, h.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new J("Click radioButton", h)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, o;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const o = se(e, t), r = n.label ? Dt + o.calculateWidth(n.label) : 0;
    return is + ls + r + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
}
const si = ({ onRadioClick: s }) => {
  const e = new as({ onRadioClick: s });
  return () => e;
};
function cs(s) {
  const e = document.createElement("div");
  if (e.className = Ze, s.sortOrder !== void 0) {
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
function ds(s, e, t, n) {
  const o = document.createElement("div");
  if (o.className = Ze, t.icon) {
    const r = document.createElement("button"), i = document.createElement("i");
    r.setAttribute("type", "button"), r.classList.add("icon-button", Wn), r.onclick = (l) => {
      n && n(l, s, e);
    }, i.classList.add("ir-icon", `ir-icon--${t.icon}`), t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), r.appendChild(i), o.appendChild(r);
  }
  if (t.text) {
    const r = document.createElement("span");
    r.innerText = t.text, o.appendChild(r);
  }
  return o;
}
class Je extends K {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const o = cs(n), {
      ellipsis: r = !0
    } = this._args;
    return r && o.classList.add(On), o;
  }
  get renderType() {
    return "default";
  }
}
class us extends K {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return ds(e, t, n, (o, r, i) => this.onClick(o, r, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class hs extends K {
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
    const o = document.createElement("div"), r = document.createElement("div"), i = e - this._fixedRowCount;
    o.className = Ze;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return r.innerText = l, n.text = l, o.appendChild(r), o;
  }
}
const ri = () => {
  const s = new Je();
  return () => s;
};
function ii({ onClick: s }) {
  const e = new us({ onClick: s });
  return () => e;
}
function li(s, ...e) {
  const t = new hs(s, ...e);
  return () => t;
}
const dt = /* @__PURE__ */ new WeakMap();
class gs extends Je {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function fs(s) {
  const e = dt.get(s);
  if (e)
    return e;
  const t = new gs(s);
  return dt.set(s, t), t;
}
function ms(s, e) {
  function t(r, i) {
    if (i.length === 0)
      throw new Error("No pasting data.");
    const l = { ...r }, h = i.length, a = i[0].length, c = l.top + h, g = l.left + a;
    for (let C = r.bottom + 1; C < c; ++C)
      (s.hasRow(C) || s.onAutoInsertRow(C)) && (l.bottom = C);
    for (let C = r.right + 1; C < g; ++C)
      (s.hasColumn(C) || s.onAutoInsertColumn(C)) && (l.right = C);
    return l;
  }
  function n(r, i) {
    if (i.length === 0)
      throw new Error("No pasting data.");
    const l = i.length, h = i[0].length, a = [], c = r.bottom - r.top + 1, g = r.right - r.left + 1;
    function C(f, R) {
      const [S, w] = [f % l, R % h];
      return i[S][w];
    }
    for (const { y: f, x: R } of Fn(c, g)) {
      const [S, w] = [f + r.top, R + r.left];
      if (!s.hasRow(S) && s.onAutoInsertRow(S) && s.addRow(), !s.hasColumn(w) && s.onAutoInsertColumn(w) && s.addColumn(), !s.hasRow(S) || !s.hasColumn(w))
        continue;
      const I = s.cell(S, w), x = C(f, R);
      x.cellVisible && s.onCheckPasteCell(I, x.text) && a.push({
        cell: I,
        cellMetaInfo: {
          text: x.text,
          cellVisible: x.cellVisible,
          rowSpan: e.rowSpan ? x.rowSpan : 1,
          colSpan: e.colSpan ? x.colSpan : 1,
          isFormatted: !1
        }
      });
    }
    return a;
  }
  function o(r) {
    for (const { cell: i, cellMetaInfo: l } of r) {
      const { rowSpan: h, colSpan: a, cellVisible: c } = l;
      if (!c)
        continue;
      const { row: g, col: C } = i;
      if (h > 1 || a > 1) {
        const R = { top: g, left: C, bottom: g + h - 1, right: C + a - 1 };
        s.mergeCells(R.top, R.left, R.bottom, R.right);
      }
      s.setCell(g, C, { text: l.text }), s.onClipboardAfterPasteCell(i);
    }
  }
  return { getPastingRange: t, beforePastingList: n, pasteTask: o };
}
function Cs(s) {
  return JSON.stringify(s);
}
function ws(s) {
  return JSON.parse(s);
}
function ps(s) {
  const e = new Document(), t = e.createElement("table");
  return s.forEach((n) => {
    const o = e.createElement("tr");
    n.filter((r) => r.cellVisible).forEach((r) => {
      const i = e.createElement("td");
      i.textContent = r.text, i.setAttribute("rowSpan", `${r.rowSpan}`), i.setAttribute("colSpan", `${r.colSpan}`), o.appendChild(i);
    }), t.appendChild(o);
  }), e.appendChild(t), e.documentElement.outerHTML;
}
function _s(s) {
  const n = new DOMParser().parseFromString(s, "text/html").querySelectorAll("tr");
  if (n.length === 0)
    return console.warn("No tr element in clipboard data"), [];
  const o = Array(n.length).fill(void 0).map(() => []);
  function r(h, a, c, g) {
    for (let C = h; C < h + c; ++C)
      for (let f = a; f < a + g; ++f)
        o[C][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
  function i(h) {
    let a = h;
    for (; o[l][a] !== void 0; )
      ++a;
    return a;
  }
  let l = 0;
  for (const h of n) {
    const a = h.querySelectorAll("td");
    let c = i(0);
    for (const g of a)
      (g.rowSpan > 1 || g.colSpan > 1) && r(l, c, g.rowSpan, g.colSpan), o[l][c] = {
        text: Wt(g),
        rowSpan: g.rowSpan,
        colSpan: g.colSpan,
        cellVisible: !0,
        isFormatted: g.hasAttribute("class")
      }, c = i(c);
    ++l;
  }
  return o;
}
function Wt(s) {
  const e = [];
  let t = s.firstChild;
  for (; t; )
    t.nodeType === Node.TEXT_NODE && t.nodeValue ? e.push(Rs(t.nodeValue)) : t.nodeType === Node.ELEMENT_NODE && t instanceof HTMLElement && (t.nodeName === "BR" ? e.push(`
`) : t.textContent && e.push(Wt(t))), t = t.nextSibling;
  return e.join("");
}
function Rs(s) {
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
function xs(s) {
  if (s.length === 0)
    return !0;
  const e = s[0].length;
  return s.every((t) => t.length === e);
}
const Ot = "	", Ft = `
`;
function bs(s) {
  if (!xs(s))
    throw new Error("Wrong text matrix dimension");
  return s.map(
    (e) => e.map(
      ({ text: t }) => t
    ).join(Ot)
  ).join(Ft);
}
function ys(s) {
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
  function r() {
    var i;
    o(), (e.length === 0 || n.length === ((i = e[0]) == null ? void 0 : i.length)) && e.push([...n]), n.length = 0;
  }
  for (const i of s)
    i !== "\r" && (i === Ot ? o() : i === Ft ? r() : t.push(i));
  return (t.length > 0 || n.length > 0) && r(), e;
}
const ke = [
  {
    format: "ir-grid/cell",
    parseFunc: ws,
    payloadFunc: Cs
  },
  {
    format: "text/html",
    parseFunc: _s,
    payloadFunc: ps
  },
  {
    format: "text/plain",
    parseFunc: ys,
    payloadFunc: bs
  }
];
function Ss(s, e) {
  ke.forEach(
    ({ format: t, payloadFunc: n }) => s.setData(t, n(e))
  );
}
function Pt(s) {
  return s.isFormatted && s.text.startsWith("#");
}
function Es(s) {
  return s.some((e) => e.some((t) => Pt(t)));
}
function vs(s, e) {
  var t, n;
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].length;
    for (let i = 0; i < r; ++i)
      (n = (t = e[o]) == null ? void 0 : t[i]) != null && n.text && Pt(s[o][i]) && (s[o][i].text = e[o][i].text);
  }
  return s;
}
function ut(s) {
  for (const { format: e, parseFunc: t } of ke) {
    const n = s.getData(e);
    if (n !== "") {
      const o = t(n);
      if (!Es(o))
        return o;
      const r = s.getData(ke[2].format);
      return vs(
        o,
        ke[2].parseFunc(r)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
class Is extends qe {
  constructor() {
    super([]);
  }
}
class Ts extends qe {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class ge {
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = e; r <= n; r++)
      for (let i = t; i <= o; i++)
        yield this._rowManager.cell(r, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = 0; r < this._rowManager.headerRows; ++r)
      for (let i = t; i <= o; ++i)
        yield this._rowManager.cell(r, i);
    for (let r = e; r <= n; ++r)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(r, i);
  }
  getCanClearCellCount(e) {
    let t = 0;
    for (const n of this.getSelectionGenerator(e))
      n.canClear && t++;
    return t;
  }
}
class Oe {
  constructor(e) {
    this._grid = e, this._generator = new ge(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [o, r] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: P(e.top, t, n),
      left: P(e.left, o, r),
      bottom: P(e.bottom, t, n),
      right: P(e.right, o, r)
    };
    return i.top > n || i.bottom < t || i.left > r || i.right < o ? null : i;
  }
  extendRange(e) {
    const t = this._generator, n = { ...e }, o = [...t.getSelectionGenerator(e)];
    for (; o.length; ) {
      const r = o.pop();
      if (!r.isMerged && !r.mergeMain)
        continue;
      const i = r.mergeMain ? r.mergeMain.mergeArea : r.mergeArea;
      if (i.top < n.top) {
        const l = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const h of l)
          o.push(h);
        n.top = i.top;
      }
      if (i.left < n.left) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: i.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const h of l)
          o.push(h);
        n.left = i.left;
      }
      if (n.bottom < i.bottom) {
        const l = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: i.bottom,
            right: n.right
          }
        );
        for (const h of l)
          o.push(h);
        n.bottom = i.bottom;
      }
      if (n.right < i.right) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: i.right
          }
        );
        for (const h of l)
          o.push(h);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        O(e.left, e.right + 1).map((o) => this._grid.cell(n, o).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        O(e.left, e.right + 1).map((o) => this._grid.cell(n, o))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const o = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: o, right: t })];
  }
  getColumnListByColumn(e, t) {
    return O(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class Ms extends qe {
  constructor(e) {
    super(null, (t) => {
      const n = new Oe(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        Ve((o) => {
          if (!o || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns)
            return null;
          const { activeCell: r, range: i } = o;
          return r.element.isConnected && r.row >= i.top && r.row <= i.bottom && r.col >= i.left && r.col <= i.right ? o : {
            activeCell: e.cell(i.top, i.left),
            range: o.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        Ve((o) => {
          if (!o)
            return null;
          const r = n.adjustRange(o.range);
          return r ? { activeCell: o.activeCell, range: r } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        Ve((o) => o ? { activeCell: o.activeCell, range: n.extendRange(o.range) } : null)
      );
    });
  }
}
class Ls {
  constructor(e) {
    this._selectionState = new Ms(e), this._gridModeState = new Ts(), this._headerCellListState = new Is();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this._gridModeState.isIdle;
  }
  get selectionRangeState() {
    return this._selectionState;
  }
  get gridModeState() {
    return this._gridModeState;
  }
  get activateHeaderCellState() {
    return this._headerCellListState;
  }
}
const ks = /^var\((.+)\)$/;
function Hs(s) {
  const e = ks.exec(s);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${s}' is not custom-property name.`);
}
const zs = [
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
class As {
  constructor({ row: e, col: t, tag: n, metaInfo: o, cellRenderer: r }) {
    this._row = -1, this._col = -1, this._rowSpan = 1, this._colSpan = 1, this._element = null, this._cellType = "body-cell", this._visible = !0, this._metaInfo = { ...o }, this._tag = n, this._cellRenderer = r, this._row = e, this._col = t;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(Ge) || this.element.tagName === "TH";
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this._metaInfo.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this._rowSpan > 1 || this._colSpan > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this._metaInfo);
  }
  get fontSize() {
    return this._metaInfo.fontSize ?? pe().getStoreValue("grid.defaultFontSize");
  }
  get fontFamily() {
    return this._metaInfo.fontFamily ?? pe().getStoreValue("grid.defaultFontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this._rowSpan - 1,
      right: this.col + this._colSpan - 1
    };
  }
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this._metaInfo);
  }
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this._metaInfo);
  }
  get mergeInfo() {
    return {
      rowSpan: this._rowSpan,
      colSpan: this._colSpan
    };
  }
  get mergeMain() {
    return this._mergeMain;
  }
  get row() {
    return this._row;
  }
  get col() {
    return this._col;
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
    return this._visible;
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.metaInfo;
    return e !== !0 && t !== !0 && this._getRenderInstance().editable && n !== "";
  }
  get text() {
    const { text: e } = this._metaInfo;
    return e ?? "";
  }
  get cellType() {
    return this._cellType;
  }
  get value() {
    return this._metaInfo.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this._metaInfo.object;
  }
  get metaInfo() {
    return this._metaInfo;
  }
  initElement() {
    const e = document.createElement(this._tag);
    return e.rowSpan = this._rowSpan, e.colSpan = this._colSpan, e.classList.add(Pn, this._tag === "th" ? Gn : Bn), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      oe(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
    }, e;
  }
  get element() {
    return this._element === null && (this._element = this.initElement()), this._element;
  }
  get editable() {
    return !(this._metaInfo.editable === !1 || this._metaInfo.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._metaInfo;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(Hs(W.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.element.style.removeProperty("display"), this.render()) : (this._visible = !1, this.element.style.display = "none");
  }
  set isDragOver(e) {
    e ? this.element.classList.add("is-dragging") : this.element.classList.remove("is-dragging");
  }
  set text(e) {
    this.cellInfo = { text: e };
  }
  set cellInfo(e) {
    Object.assign(this._metaInfo, e), this.render();
  }
  set cellType(e) {
    this._cellType = e;
  }
  set height(e) {
    e ? U(this.element, { [W.cellHeight]: `${e}px` }) : U(this.element, { [W.cellHeight]: "" });
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    e === 1 && (this.height = null), this.element.rowSpan = e, this.element.colSpan = t, this._rowSpan = e, this._colSpan = t, this.render();
  }
  set mergeMain(e) {
    this._mergeMain = e, this.visible = e === void 0;
  }
  set row(e) {
    this._row = e, this._element && this.element.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this._col = e, this._element && this.element.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this._cellRenderer = e, this.render();
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this.element.classList.add("is-selected"), this.onSelect(this));
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this._metaInfo, e), t && Object.assign(this._metaInfo, { text: t }), this.render();
  }
  release() {
    this.element.classList.remove("is-selected"), this.deactivate();
  }
  activate() {
    this._mergeMain ? this._mergeMain.element.classList.add("is-active") : this.element.classList.add("is-active");
  }
  deactivate() {
    this.syncClassRemoveWithMergeMain("is-active");
  }
  updateReadonlyStatus() {
    be(this.element, "is-readonly", this.onCheckReadonly());
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
    this.element.style.removeProperty(W.stickyCellZId), this.removeStickyCls(), this.removeStickyTop(), this.removeStickyLeft(), e !== null && (U(this.element, { [W.stickyCellZId]: zs[e] }), this.addStickyCls(), e >= j.lv5 && this.setStickyTop(t), (e === j.lv9 || e === j.lv7 || e === j.lv6 || e === j.lv4 || e === j.lv3) && this.setStickyLeft(n));
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
    } = this._metaInfo;
    this.applyCustomProp(W.cellTopPadding, e), this.applyCustomProp(W.cellLeftPadding, t), this.applyCustomProp(W.cellRightPadding, n), this.applyCustomProp(W.cellBottomPadding, o);
  }
  updateCellStatus() {
    be(this.element, "is-disabled", this._metaInfo.disabled === !0), be(this.element, "is-asc", this._metaInfo.sortOrder === "ASC"), be(this.element, "is-desc", this._metaInfo.sortOrder === "DESC"), this.updateReadonlyStatus(), this._metaInfo.isError ? this.addMark(Vn) : this._metaInfo.hasMemo ? this.addMark(Nn) : this._mark && this.removeMark(), this.element.style.textAlign = this._metaInfo.horizontalAlign || "", this.element.style.verticalAlign = this._metaInfo.verticalAlign || "", this.element.style.fontSize = this.fontSize, this.element.style.fontFamily = this.fontFamily, this.element.style.color = this._metaInfo.textColor || "", this.element.style.backgroundColor = this._metaInfo.backColor || "";
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof K)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._metaInfo);
      if (e instanceof K)
        return e;
      if (e instanceof HTMLElement)
        return fs(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this.row, this.col, this._metaInfo);
  }
  replaceElement(e) {
    this.removeChildren(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  render() {
    this._element !== null && this.visible && (this.removeChildren(), this.updateCellStatus(), this.updateCellAttr(), this.element.appendChild(this._getRenderElement()));
  }
  clear() {
    this.cellInfo = { text: "" }, this.onClear(this);
  }
  addStickyCls() {
    this.element.classList.add(Ge);
  }
  removeStickyCls() {
    this.element.classList.remove(Ge);
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
    return this._metaInfo.readonly === !0;
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
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this.element.appendChild(this._mark);
  }
  removeMark() {
    this._mark && (this._mark.remove(), this._mark = void 0);
  }
}
const ve = -1, Ds = [
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
class Ws {
  constructor(e, t, n, o, r, i) {
    this._scheduledTaskSet = /* @__PURE__ */ new Set(), this._afterRenderCallbackList = [], this._rafHandler = ve, this._grid = e, this._gridContext = t, this._wrapperElement = n, this._tbody = o, this._contextElement = r, this._selector = i, this._gridRangeUtil = new Oe(e), this._emptyRow = document.createElement("tr"), this._emptyRow.className = $n, this._emptyRow.dataset.hidden = "true", U(this._emptyRow, {
      [W.emptyRowHeight]: "0"
    }), this._tbody.appendChild(this._emptyRow), e.addGlobalEventListener(r, "scroll", (l) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll"), l.preventDefault();
    });
  }
  renderTask() {
    const e = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = ve;
    for (const t of Ds)
      if (!(!e.has(t) || t === "nothing"))
        try {
          this[t].call(this);
        } catch (n) {
          console.error(t, n);
        }
    this._afterRenderCallbackList.forEach((t) => t()), this._afterRenderCallbackList.length = 0;
  }
  forceRunTasks() {
    this._rafHandler !== ve && cancelAnimationFrame(this._rafHandler), this.renderTask();
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === ve && (this._rafHandler = requestAnimationFrame(() => this.renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  getActualBodyRowsInfo() {
    const e = this._grid.getRowCount() - 1, t = Math.min(
      this._grid.getFreezedRowCount(),
      e
    ), { fixedRowHeight: n } = this._grid, { scrollTop: o, clientHeight: r } = this._contextElement, i = this._grid.getRowByTop(n + o + 1) ?? this._grid.firstRow, l = this._grid.getRowByTop(o + r) ?? this._grid.lastRow, h = O(0, t).asList();
    if (!i || !l)
      return { emptyRowHeight: 0, viewRowList: h };
    const a = i.getTopRowId(), c = l.getBottomRowId(), g = this._grid.getRow(Math.max(a - 2, t)), C = this._grid.getRow(Math.min(c + 2, e));
    return {
      emptyRowHeight: g.top - n,
      // viewport row 영역 list에 추가
      viewRowList: h.concat(O(g.rowId, C.rowId + 1).asList())
    };
  }
  getGridRow(e) {
    const t = parseInt(e.dataset.row ?? "", 10);
    return t !== t ? null : this._grid.getRow(t);
  }
  virtualRender() {
    const { emptyRowHeight: e, viewRowList: t } = this.getActualBodyRowsInfo(), n = new Set(t), o = this._grid.getFreezedRowCount(), { headerRows: r } = this._grid;
    let i = this._tbody.lastElementChild;
    for (; i; ) {
      const a = this.getGridRow(i);
      i = i.previousElementSibling, a && !n.has(a.rowId) && a.unmount();
    }
    e === 0 ? this._emptyRow.dataset.hidden = "true" : (this._emptyRow.dataset.hidden = "false", U(this._emptyRow, {
      [W.emptyRowHeight]: `${e}px`
    }));
    let l = null, h = !1;
    for (const a of t) {
      const c = this._grid.getRow(a);
      if (a < o ? !c.isFreezed && c.freeze(a < r) : h === !1 && (l === null ? this._tbody.insertAdjacentElement("afterbegin", this._emptyRow) : l.insertAdjacentElement("afterend", this._emptyRow), h = !0, l = this._emptyRow), c.isMounted) {
        l = c.element;
        continue;
      }
      c.visible && (l === null ? c.mount(this._tbody, "afterbegin") : c.mount(l, "afterend"), l = c.element);
    }
  }
  updateRowsStickyLeft() {
    for (let e = 0; e < this._grid.getRowCount(); e++)
      this._grid.getRow(e).updateStickyStatus();
  }
  updateSelection() {
    this._selector.update();
  }
  updateLeft() {
    const e = this._grid.getColCount();
    let t = 0, n = 0;
    for (; t < e; ) {
      const o = this._grid.getColumn(t);
      o.left = n, o.visible && (n = o.right), ++t;
    }
  }
  updateTop() {
    const e = this._grid.getRowCount();
    let t = 0, n = 0;
    for (; t < e; ) {
      const o = this._grid.getRow(t);
      o.top = n, o.visible && (n = o.bottom), ++t;
    }
  }
  updateColumnId() {
    const e = this._grid.getColCount();
    let t = 0;
    for (; t < e; ) {
      const n = this._grid.getColumn(t);
      n.columnId = t, ++t;
    }
    this._grid.render();
  }
  updateRowId() {
    const e = this._grid.getRowCount(), t = this._grid.getFreezedRowCount();
    let n = 0;
    for (; n < e; ) {
      const o = this._grid.getRow(n);
      o.rowId = n, o.isFreezed && n >= t ? o.unfreeze() : !o.isFreezed && n < t && o.freeze(), o.render(), ++n;
    }
  }
  adjustSelection() {
    const e = this._gridContext.selectionRangeState.value;
    if (!e)
      return this._grid.releaseCells();
    const t = this._gridRangeUtil.adjustRange(e.range);
    if (!t)
      return this._grid.releaseCells();
    this._grid.select(this._gridRangeUtil.extendRange(t));
  }
  updateSelectionByScroll() {
    this._selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this._wrapperElement.style.height = `${this._grid.height}px`;
  }
  generateScrollBarClass() {
    this._grid.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this._afterRenderCallbackList.push(e);
  }
  get isScheduled() {
    return this._scheduledTaskSet.size > 0;
  }
}
const de = 1, ue = 1;
class Os {
  constructor({ grid: e, rowId: t, height: n, top: o, rowType: r }) {
    this._rowElement = null, this._top = -1, this._maxCellHeight = 0, this._stickyColumns = 0, this._height = 0, this._visible = !0, this._isCalledOnMounted = !1, this._grid = e, this._cells = [], this._rowType = r, this._rowId = t, this._maxCellHeight = n, this._isMounted = !1, this._height = n, this._top = o;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this.element.classList.contains(Be);
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this.element.classList.contains(st);
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
    return this._height + de;
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
      const r = this._cells[o];
      return r.visible && r.mergeInfo.colSpan === 1 ? Math.max(n, r.innerWidth) : n;
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
    e && (jn(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, o]) {
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n)
      throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${o}`);
    const [r, i, l, h] = e < n ? [e, t, n, o] : [n, o, e, t];
    this._cells = [
      ...this._cells.slice(0, r),
      ...this._cells.slice(l, h + 1),
      ...this._cells.slice(i + 1, l),
      ...this._cells.slice(r, i + 1),
      ...this._cells.slice(h + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._cells.splice(e, t - e + 1), r = e < n ? n - o.length : n;
    this._cells.splice(r, 0, ...o), this.reorderCells();
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
    this._cells.forEach((o, r) => o.updateCellMetaInfo(n, t == null ? void 0 : t[r]));
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
    const n = Math.ceil(this.rowInnerHeight), o = P(isNaN(n) ? 0 : n, e, t);
    return this.height !== o ? (this.height = o, !0) : !1;
  }
  mount(e, t) {
    this.isMounted || (e.insertAdjacentElement(t, this.element), this.render(), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
  }
  freeze(e = !1) {
    e && this.element.classList.add(st), this.element.classList.add(Be), this.updateStickyStatus();
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
    this.element.classList.remove(Be), this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
  }
  onChangedHeight(e, t) {
  }
}
class Fs {
  constructor(e, t) {
    this._rowList = [], this._visibleRowList = [], this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0;
  }
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
      const r = O(t).map((i) => n(o.rowId, e + i));
      o.insertCells(r, e);
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
      const r = t[o];
      r.top = n, this.updateRowHeight(r, "add"), n = r.bottom;
    }
    this.updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e)
      throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._rowList.splice(e, t - e + 1);
    o.forEach((i) => i.unmount());
    const r = e < n ? n - o.length : n;
    this._rowList.splice(r, 0, ...o), this.updateVisibleRowList();
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
    const [r, i, l, h] = e < n ? [e, t, n, o] : [n, o, e, t], a = this._rowList.slice(r, i + 1), c = this._rowList.slice(l, h + 1);
    a.forEach((g) => g.unmount()), c.forEach((g) => g.unmount()), this._rowList = [
      ...this._rowList.slice(0, r),
      ...c,
      ...this._rowList.slice(i + 1, l),
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
      const r = this._rowList[e + o], i = t[o];
      r.visible !== i && (this.updateRowHeight(r, i ? "show" : "hide"), r.visible = i);
    }
    this.updateVisibleRowList(), this.updateFixedHeight();
  }
  updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((e) => e.visible);
  }
  changeRowHeight(e, t) {
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t);
  }
  updateRowHeight(e, t) {
    if (t === "remove" && !e.visible)
      return;
    const n = e.height + de, o = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += o;
  }
  sort(e, t, n, o) {
    const r = this._rowList.slice(0, n), i = this._rowList.slice(n, o), l = this._rowList.slice(o);
    i.forEach((h) => h.unmount()), i.sort((h, a) => t === "ASC" ? e(h, a) : -e(h, a)), this._rowList = [
      ...r,
      ...i,
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
    const o = t ?? 0, r = n ?? this.length;
    for (let i = o; i < r; i++)
      e(this._rowList[i]);
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
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let o = e.initValue;
    for (let r = t; r < n; r++)
      o = e.func(o, this._rowList[r]);
    return o;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const r = n + Math.floor((o - n) / 2), i = t[r];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? o = r - 1 : n = r + 1;
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
class ht {
  constructor({ columnId: e, width: t, left: n }) {
    this._left = 0, this._columnId = 0, this._width = 0, this._visible = !0, this._colElement = document.createElement("col"), this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this._columnId;
  }
  get left() {
    return this._left;
  }
  get width() {
    return this._width;
  }
  get widthWithBorder() {
    return this._width + ue;
  }
  get colElement() {
    return this._colElement;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this._visible = e, e ? this._colElement.style.removeProperty("display") : this._colElement.style.display = "none";
  }
  set columnId(e) {
    this._columnId = e, this._colElement.dataset.column = e.toString();
  }
  set left(e) {
    this._left = e, this._colElement.dataset.left = e.toString();
  }
  set width(e) {
    this._width = e, this._colElement.style.width = `${this.widthWithBorder}px`, this._colElement.dataset.width = e.toString();
  }
  remove() {
    this._colElement.remove();
  }
  isBetweenLeft(e) {
    return e >= this.left && e <= this.right;
  }
}
class Ps {
  constructor(e, t) {
    this._columnsList = [], this._visibleColumnsList = [], this._columnsWidth = 0, this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0, this._colGroup = document.createElement("colgroup"), this._rowHeaderColumns = e, this._freezedColumns = t;
  }
  addColumn(e) {
    const t = new ht({
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
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t);
  }
  insertColumns(e, t, n) {
    const o = this.getColumn(e), r = o.left, i = O(t).map((l) => new ht({
      columnId: e + l,
      width: n,
      left: r + (n + ue) * l
    }));
    this._columnsList.splice(e, 0, ...i), i.forEach((l) => {
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
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), o = n.width - t;
    o !== 0 && (n.width = t, this.changeColumnWidth(n, o));
  }
  setColumnVisible(e, t) {
    const n = this.getColumn(e);
    n.visible !== t && (n.visible = t, this.updateColumnWidth(n, t ? "show" : "hide"), this.updateVisibleColumnList(), this.addFixedWidth(n, t ? 1 : -1));
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
      return o.left = t, o.visible ? t + o.width + ue : t;
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
function Gs(s) {
  return s.top === s.bottom && s.left === s.right;
}
function Bs(s) {
  return s.top > s.bottom || s.left > s.right;
}
function Vs(s, e) {
  const t = [], n = new ge(s, e), o = ({ top: a, left: c, bottom: g, right: C }) => t.some(({ mergeArea: f }) => c <= f.right && C >= f.left && a <= f.bottom && g >= f.top) === !1, r = (a, c) => {
    let g = 0;
    for (let C = a; C <= c; ++C)
      s.getRowVisible(C) && ++g;
    return g;
  }, i = (a, c) => {
    let g = 0;
    for (let C = a; C <= c; ++C)
      e.getColumnVisible(C) && ++g;
    return g;
  }, l = ({ top: a, left: c, bottom: g, right: C }) => {
    for (let f = a; f <= g; ++f)
      if (s.getRowVisible(f) === !1)
        return !0;
    for (let f = c; f <= C; ++f)
      if (e.getColumnVisible(f) === !1)
        return !0;
    return !1;
  }, h = (a, c) => {
    const g = s.getCell(a, c), C = t.indexOf(g);
    return C < 0 ? null : t[C];
  };
  return {
    isValidatedMerging: o,
    getMergedRowHeight(a, c) {
      const g = (c - a) * de;
      let C = 0;
      for (let f = a; f <= c; ++f)
        s.getRowVisible(f) && (C += s.getRowHeight(f));
      return C + g;
    },
    mergeCells(a) {
      if (Bs(a))
        throw new Error("Invalid range");
      if (o(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (Gs(a))
        throw new Error("Could not merging with single cell!");
      const c = s.getCell(a.top, a.left);
      c.height = this.getMergedRowHeight(a.top, a.bottom), c.mergeInfo = { rowSpan: r(a.top, a.bottom), colSpan: i(a.left, a.right) }, t.push(c), s.getRow(a.top).updateMaxCellHeight();
      for (const C of n.getSelectionGenerator(a))
        (C.row !== a.top || C.col !== a.left) && (C.mergeMain = c, C.metaInfo.text = "");
    },
    splitCells(a, c) {
      const g = h(a, c);
      if (!g)
        throw new Error("Could not split on a not merged cell!");
      for (const C of n.getSelectionGenerator(g.mergeArea))
        C.mergeMain = void 0, C.mergeInfo = { rowSpan: 1, colSpan: 1 };
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
      const g = h(a, c);
      if (!g)
        throw new Error("Could not split on a not merged cell!");
      t.splice(t.indexOf(g), 1);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: g } of t)
        if (g.top < a && g.bottom >= a && g.bottom <= c || g.bottom > c && g.top >= a && g.top <= c || g.top < a && g.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: g } of t)
        if (g.left < a && g.right >= a && g.right <= c || g.right > c && g.left >= a && g.left <= c || g.left < a && g.right > c)
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
class Ns {
  constructor(e) {
    const t = pe();
    this._gridThemeConfig = {
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
    }, this._rowManager = new Fs(e.headerRowCount, e.freezedRowCount), this._columnManager = new Ps(e.headerColumnCount, e.freezedColumnCount), this._mergeHandler = Vs(this._rowManager, this._columnManager);
  }
  // theme
  getThemeValue(e) {
    return this._gridThemeConfig[e];
  }
  // shared utility
  get mergeHandler() {
    return this._mergeHandler;
  }
  get rowManager() {
    return this._rowManager;
  }
  get columnManager() {
    return this._columnManager;
  }
}
class Gt extends B {
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
class Bt extends B {
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
class X {
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
const $s = 12, js = 4, Us = {
  "col-resizing": Ue,
  "row-resizing": Ke
}, gt = {
  "col-resizing": Xn,
  "row-resizing": Yn
}, ft = (s) => s.mergeInfo ? s.col + s.mergeInfo.colSpan - 1 : s.col, mt = (s) => s.mergeInfo ? s.row + s.mergeInfo.rowSpan - 1 : s.row, Ks = 500, Ct = 4;
class Vt extends X {
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, wrapperElement: t, gridContext: n, contextElement: o }) {
    const { enabledColResizer: r, enabledRowResizer: i } = this._options, l = (g, C, f) => {
      e.commandManager.pushCommandBlock(new J(g, new Gt(e, [C, f])));
    }, h = (g, C, f) => {
      e.commandManager.pushCommandBlock(new J(g, new Bt(e, [C, f])));
    };
    (function() {
      const C = document.createElement("div");
      let f = !1, R = null, S = 0;
      const w = () => {
        o.classList.remove(Ue), o.classList.remove(Ke), o.classList.remove("is-resizing"), R && o.removeEventListener("mousedown", R);
      }, I = (d, m) => {
        R && o.removeEventListener("mousedown", R), o.classList.remove(Ue), o.classList.remove(Ke), o.classList.add(Us[m]), o.classList.add("is-resizing");
        let _ = 0, v = 0, L = 0, u = 0, b = 0;
        const y = () => d.col < e.getFreezedColumnCount() ? e.scrollLeft + u : u, T = () => d.row < e.getFreezedRowCount() ? e.scrollTop + u : u;
        R = (H) => {
          const D = (/* @__PURE__ */ new Date()).getTime();
          if (n.setMode({
            mode: m,
            contextParam: {}
          }), D - S <= Ks) {
            m === "col-resizing" ? e.commandManager.doRecording("Autosize column", () => {
              e.autoSizeColumn(d.col);
            }) : e.commandManager.doRecording("Autosize row", () => {
              e.autoSizeRow(d.row);
            }), S = 0;
            return;
          }
          f = !0, S = D, d.element.classList.add(gt[m]), m === "col-resizing" ? (C.className = Un, b = e.getColumnWidth(ft(d)), _ = H.pageX, v = _ - b + e.minColWidth, L = _ - b + e.maxColWidth, u = e.getColumnLeft(d.col) + e.getCellWidth(d), C.style.top = "0px", C.style.width = "0px", C.style.height = `${e.height}px`, C.style.left = `${y()}px`) : (C.className = Kn, b = e.getRowHeight(mt(d)), _ = H.pageY, v = _ - b + e.minRowHeight, L = _ - b + e.maxRowHeight, u = e.getRow(d.row).top + e.getCellHeight(d), C.style.top = `${T()}px`, C.style.width = `${e.width}px`, C.style.height = "0px", C.style.left = "0px"), t.appendChild(C), e.addGlobalEventListener(document, "keydown", z), e.addGlobalEventListener(document, "mouseup", M), e.addGlobalEventListener(document, "mousemove", p);
        };
        const p = (H) => {
          if (m === "col-resizing") {
            const D = P(H.pageX, v, L) - _;
            C.style.left = `${y() + D}px`;
          } else {
            const D = P(H.pageY, v, L) - _;
            C.style.top = `${T() + D}px`;
          }
        }, M = (H) => {
          if (m === "col-resizing") {
            const F = P(H.pageX, v, L) - _;
            if (Math.abs(F) > Ct) {
              const A = ft(d), ee = b + F;
              l("Resize column", A, ee), e.setColumnWidth(A, ee), S = 0;
            }
          } else {
            const F = P(H.pageY, v, L) - _;
            if (Math.abs(F) > Ct) {
              const A = mt(d), ee = b + F;
              h("Resize row", A, ee), e.setRowHeight(A, ee), S = 0;
            }
          }
          k(), n.setIdle();
          const D = a(H);
          if (!D)
            return;
          const $ = c(H, D);
          $ !== null && I(D, $);
        };
        function k() {
          f = !1, C.remove(), w(), d.element.classList.remove(gt[m]), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", M), document.removeEventListener("keydown", z);
        }
        const z = (H) => {
          H.key === "Escape" && k();
        };
        e.addGlobalEventListener(o, "mousedown", R);
      }, x = (d) => {
        if (f)
          return;
        const m = a(d);
        if (m === null) {
          w();
          return;
        }
        const _ = c(d, m);
        _ === null ? w() : I(m, _);
      }, E = (d) => {
        w();
      };
      e.addGlobalEventListener(o, "mousemove", x), e.addGlobalEventListener(o, "mouseout", E);
    })();
    const a = (g) => {
      const C = Z("th", "tr", g.target);
      if (!C)
        return null;
      const [f, R] = [
        parseInt(C.getAttribute("data-row") || "-1"),
        parseInt(C.getAttribute("data-col") || "-1")
      ];
      return e.cell(f, R);
    }, c = (g, C) => C.cellType === "body-cell" ? null : r && Math.abs(e.getCellWidth(C) - g.offsetX) <= $s ? "col-resizing" : i && Math.abs(e.getCellHeight(C) - g.offsetY) <= js ? "row-resizing" : null;
  }
  get pluginKey() {
    return "resizer";
  }
}
function ai(s) {
  return new Vt(s);
}
const Xs = 15, Ie = 120;
class Nt extends X {
  _mountTask({ grid: e, gridContext: t, contextElement: n }) {
    let o = null, r = null, i;
    const l = (f, R) => {
      const S = [
        f.row,
        f.bottom,
        R.row,
        R.bottom
      ], w = [
        f.col,
        f.right,
        R.col,
        R.right
      ], I = {
        top: Math.min(...S),
        left: Math.min(...w),
        bottom: Math.max(...S),
        right: Math.max(...w)
      };
      Ht(I, e.getSelection()) || (e.select(I, o), this.onChangedSelection(I));
    };
    e.addGlobalEventListener(n, "mousedown", (f) => {
      if (!oe(f.target) || f.button !== 0 || f.target instanceof HTMLTextAreaElement || Z(".button", "tr", f.target))
        return;
      const R = Z("td", "tr", f.target);
      if (!R)
        return;
      const S = Q(R), w = e.activeCell;
      f.shiftKey && w ? (o = w, l(w, e.cell(S.row, S.col))) : (o = e.cell(S.row, S.col), e.selectRange(o.row, o.col, o.bottom, o.right, o), this.onChangedSelection({ top: o.row, left: o.col, bottom: o.bottom, right: o.right })), r = o, t.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function h(f, R) {
      const S = R.closest("td");
      if (!S)
        return;
      const w = Q(S);
      r = e.cell(w.row, w.col), l(f, r);
    }
    function a(f, R) {
      const { offsetX: S, offsetY: w, target: I } = f;
      if (!oe(I))
        return null;
      const x = S + I.scrollLeft, E = w + I.scrollTop, d = x > e.width ? e.width : x, m = E > e.height ? e.height : E, _ = e.findCellOrNull(m, d);
      _ && (r = _, l(R, _));
    }
    function c(f) {
      const R = f.clientWidth + f.scrollLeft, S = f.clientHeight + f.scrollTop, w = f.scrollTop + e.headerHeight, I = f.scrollLeft + e.headerWidth, x = S > e.height ? e.height : S, E = R > e.width ? e.width : R, d = e.findCellOrNull(w, I), m = e.findCellOrNull(x, E);
      return {
        top: (d == null ? void 0 : d.row) ?? 0,
        bottom: (m == null ? void 0 : m.row) ?? 0,
        left: (d == null ? void 0 : d.col) ?? 0,
        right: (m == null ? void 0 : m.col) ?? 0
      };
    }
    function g(f, R, S, w) {
      i = window.setTimeout(() => {
        if (!o)
          return;
        const E = I(), d = x(), { top: m, bottom: _, left: v, right: L } = c(f), u = {
          top: f.scrollTop,
          left: f.scrollLeft,
          targetRow: S,
          targetCol: w
        };
        E && (R.startsWith("t") ? (u.top -= e.getRowHeight(m), u.targetRow = m) : (u.top += e.getRowHeight(_), u.targetRow = _)), d && (R.endsWith("l") ? (u.left -= e.getColumnWidth(v), u.targetCol = v) : (u.left += e.getColumnWidth(L), u.targetCol = L)), (E || d) && (f.scrollTo({ top: u.top, left: u.left }), l(o, e.cell(u.targetRow, u.targetCol)), g(f, R, u.targetRow, u.targetCol));
      }, Xs);
      function I() {
        return R.startsWith("t") ? f.scrollTop > 0 : R.startsWith("b") ? f.scrollHeight - (f.scrollTop + f.clientHeight) > 0 : !1;
      }
      function x() {
        return R.endsWith("l") ? f.scrollLeft > 0 : R.endsWith("r") ? f.scrollWidth - (f.scrollLeft + f.clientWidth) > 0 : !1;
      }
    }
    function C() {
      i && (clearTimeout(i), i = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (f) => {
      o && oe(f.target) && (f.target === n ? a(f, o) : h(o, f.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      o && (C(), o = null, r = null, t.setIdle(), n.focus());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: f, clientY: R, clientX: S }) => {
      if (!o || !r || !oe(f))
        return;
      const { top: w, bottom: I, left: x, right: E } = f.getBoundingClientRect();
      if (w < R && I > R && x < S && E > S)
        return;
      g(f, `${d()}${m()}`, r.row, r.col);
      function d() {
        return R - w <= Ie ? "t" : I - R <= Ie ? "b" : "";
      }
      function m() {
        return S - x <= Ie ? "l" : E - S <= Ie ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (f) => {
      o && oe(f.currentTarget) && C();
    }), e.onDoubleClickCell = (f) => t.isIdle && e.doEditMode(f), e.onColumnClick = (f) => e.selectColumn(f.col), e.onRowClick = (f) => e.selectRow(f.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function ci() {
  return new Nt();
}
class $t extends B {
  _getUndoContext() {
    const [e] = this._args, t = [], n = new ge(this._instance, this._instance);
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
function jt(s, e) {
  const t = (u, b, y) => {
    const T = s.headerRows;
    let p = y, M = u;
    for (; p !== 0; ) {
      const k = s.cell(M, b), H = (k.mergeMain ?? k).row - 1;
      if (H < T)
        break;
      s.getRowVisible(H) && ++p, M = H;
    }
    return M;
  }, n = (u, b, y) => {
    const T = s.getRowCount() - 1;
    let p = y, M = u;
    for (; p !== 0; ) {
      const k = s.cell(M, b), H = (k.mergeMain ?? k).bottom + 1;
      if (H > T)
        break;
      s.getRowVisible(H) && --p, M = H;
    }
    return M;
  }, o = (u, b, y) => {
    const T = s.headerColumns;
    let p = y, M = b;
    for (; p !== 0; ) {
      const k = s.cell(u, M), H = (k.mergeMain ?? k).col - 1;
      if (H < T)
        break;
      s.getColumnVisible(H) && ++p, M = H;
    }
    return M;
  }, r = (u, b, y) => {
    const T = s.getColCount() - 1;
    let p = y, M = b;
    for (; p !== 0; ) {
      const k = s.cell(u, M), H = (k.mergeMain ?? k).right + 1;
      if (H > T)
        break;
      s.getColumnVisible(H) && --p, M = H;
    }
    return M;
  }, i = () => {
    let u = s.headerColumns;
    for (; !s.getColumnVisible(u); )
      ++u;
    return u;
  }, l = () => {
    let u = s.getColCount() - 1;
    for (; !s.getColumnVisible(u); )
      --u;
    return u;
  }, h = () => {
    let u = s.headerRows;
    for (; !s.getRowVisible(u); )
      ++u;
    return u;
  }, a = () => {
    let u = s.getRowCount() - 1;
    for (; !s.getRowVisible(u); )
      --u;
    return u;
  }, c = (u) => {
    if (s.getRowCount() - 1 === u)
      return u;
    let y = u + 1;
    for (; !s.getRowVisible(y); )
      ++y;
    return y;
  }, g = (u) => {
    const b = s.headerRows;
    if (u === b)
      return u;
    let y = u - 1;
    for (; !s.getRowVisible(y); )
      ++y;
    return y;
  }, C = () => {
    const { activeCell: u } = s;
    if (!u) {
      console.warn("No active cell warning.");
      return;
    }
    const b = a(), y = l(), T = u.mergeMain ?? u;
    if (T.right === y) {
      if (u.row === b)
        return;
      const p = i(), M = c(u.row);
      e ? s.selectRow(M, s.cell(M, p)) : s.selectCell(M, p), s.scrollInView(M, p);
    } else {
      const p = r(u.row, T.right, 1);
      e ? s.selectRow(u.row, s.cell(u.row, p)) : s.selectCell(u.row, p), s.scrollOnCol(p);
    }
  }, f = () => {
    const { activeCell: u } = s;
    if (!u) {
      console.warn("No active cell warning.");
      return;
    }
    const b = h(), y = i(), T = u.mergeMain ?? u;
    if (T.col === y) {
      if (u.row === b)
        return;
      const p = l(), M = g(u.row);
      e ? s.selectRow(M, s.cell(M, p)) : s.selectCell(M, p), s.scrollInView(M, p);
    } else {
      const p = o(u.row, T.col, -1);
      e ? s.selectRow(u.row, s.cell(u.row, p)) : s.selectCell(u.row, p), s.scrollOnCol(p);
    }
  }, R = (u, b, y) => {
    let T = -1, p = -1;
    for (let M = b; M <= y; M++) {
      const k = s.cell(u, M), z = k.mergeMain ?? k, { rowSpan: H } = z.mergeInfo;
      H > T && (T = H, p = M);
    }
    return p;
  }, S = (u, b, y) => {
    let T = -1;
    for (let p = b; p <= y; p++) {
      const M = s.cell(u, p), k = M.mergeMain ?? M, { bottom: z } = k;
      z > T && (T = z);
    }
    return T;
  }, w = (u, b, y) => {
    let T = 999999999;
    for (let p = b; p <= y; p++) {
      const M = s.cell(u, p), k = M.mergeMain ?? M;
      T > k.row && (T = k.row);
    }
    return T;
  }, I = (u, b, y) => {
    let T = -1, p = -1;
    for (let M = b; M <= y; M++) {
      const k = s.cell(M, u), z = k.mergeMain ?? k, { colSpan: H } = z.mergeInfo;
      H > T && (T = H, p = M);
    }
    return p;
  }, x = (u, b, y) => {
    let T = -1;
    for (let p = b; p <= y; p++) {
      const M = s.cell(p, u), k = M.mergeMain ?? M, { right: z } = k;
      z > T && (T = z);
    }
    return T;
  }, E = (u, b, y) => {
    let T = 999999999;
    for (let p = b; p <= y; p++) {
      const M = s.cell(p, u), k = M.mergeMain ?? M;
      T > k.col && (T = k.col);
    }
    return T;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: o,
    getNextXRight: r,
    selectNextActiveCell: C,
    selectBeforeActiveCell: f,
    selectNextSelection: (u, b, y) => {
      const T = s.getSelection(), { activeCell: p } = s;
      if (T == null || p == null) {
        console.warn("No selection warning");
        return;
      }
      const M = p.mergeMain ?? p;
      if (y && e)
        return;
      if (!y) {
        if (u !== 0) {
          const $ = u < 0 ? t(M.row, p.col, u) : n(M.bottom, p.col, u);
          e ? s.selectRow($, s.cell($, p.col)) : s.selectCell($, p.col), s.scrollOnRow($);
        } else {
          const $ = b < 0 ? o(p.row, M.col, b) : r(p.row, M.right, b);
          e ? s.selectRow(p.row, s.cell(p.row, $)) : s.selectCell(p.row, $), s.scrollOnCol($);
        }
        return;
      }
      const { top: k, bottom: z, left: H, right: D } = T;
      if (u !== 0)
        if (u < 0)
          if (S(p.row, H, D) === z) {
            const F = R(k, H, D), A = t(k, F, u);
            s.selectRange(A, H, z, D, p), s.scrollOnRow(A);
          } else {
            const F = R(z, H, D), A = t(z, F, u);
            s.selectRange(k, H, A, D, p), s.scrollOnRow(A);
          }
        else if (w(p.row, H, D) === k) {
          const F = R(z, H, D), A = n(z, F, u);
          s.selectRange(k, H, A, D, p), s.scrollOnRow(A);
        } else {
          const F = R(k, H, D), A = n(k, F, u);
          s.selectRange(A, H, z, D, p), s.scrollOnRow(A);
        }
      else if (b < 0)
        if (x(p.col, k, z) === D) {
          const F = I(H, k, z), A = o(F, H, b);
          s.selectRange(k, A, z, D, p), s.scrollOnCol(A);
        } else {
          const F = I(D, k, z), A = o(F, D, b);
          s.selectRange(k, H, z, A, p), s.scrollOnCol(A);
        }
      else if (E(p.col, k, z) === H) {
        const F = I(D, k, z), A = r(F, D, b);
        s.selectRange(k, H, z, A, p), s.scrollOnCol(A);
      } else {
        const F = I(H, k, z), A = r(F, H, b);
        s.selectRange(k, A, z, D, p), s.scrollOnCol(A);
      }
    },
    selectMoveToLastColumn: (u) => {
      const b = s.getSelection(), { activeCell: y } = s;
      if (b == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const T = l();
      u && e || (u ? s.selectRange(b.top, y.col, b.bottom, T, y) : e ? s.selectRow(y.row, s.cell(y.row, T)) : s.selectCell(y.row, T), s.scrollOnCol(T));
    },
    selectMoveToFirstColumn: (u) => {
      const b = s.getSelection(), { activeCell: y } = s;
      if (b == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const T = i();
      u && e || (u ? s.selectRange(b.top, T, b.bottom, y.col, y) : e ? s.selectRow(y.row, s.cell(y.row, T)) : s.selectCell(y.row, T), s.scrollOnCol(T));
    },
    selectMoveToLastRow: (u) => {
      const b = s.getSelection(), { activeCell: y } = s;
      if (b == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const T = a();
      u && e || (u ? s.selectRange(y.row, b.left, T, b.right, y) : s.selectCell(T, y.col), s.scrollOnRow(T));
    },
    selectMoveToFirstRow: (u) => {
      const b = s.getSelection(), { activeCell: y } = s;
      if (b == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const T = h();
      u && e || (u ? s.selectRange(T, b.left, y.bottom, b.right, y) : s.selectCell(T, y.col), s.scrollOnRow(T));
    }
  };
}
class Ys {
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
const wt = 10;
class Ut extends X {
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, gridContext: t, contextElement: n, gridStore: o, wrapperElement: r }) {
    const i = new Ys();
    i.onEndKeyActionHook = (d) => {
      pt(d.key) || d.preventDefault();
    };
    const l = (d = !1) => {
      var _;
      if (!t.isIdle)
        return;
      const m = ((_ = e.activeCell) == null ? void 0 : _.mergeMain) ?? e.activeCell;
      m && e.doEditMode(m, d);
    };
    this._keyMiddleware.forEach(([d, m]) => i.addKeyAction(d, m));
    const h = new ge(o.rowManager, o.columnManager), {
      selectNextActiveCell: a,
      selectNextSelection: c,
      selectBeforeActiveCell: g,
      selectMoveToFirstRow: C,
      selectMoveToFirstColumn: f,
      selectMoveToLastColumn: R,
      selectMoveToLastRow: S
    } = jt(e, this._rowSelection), w = (d) => (m) => {
      t.gridModeState.value.mode !== "edit-cell" && d(m);
    };
    e.addGlobalEventListener(n, "copy", w((d) => e.onNativeCopy(d))), e.addGlobalEventListener(n, "cut", w((d) => e.onNativeCut(d))), e.addGlobalEventListener(n, "paste", w((d) => e.onNativePaste(d))), i.addKeyAction("Tab", (d) => (d.shiftKey ? g() : a(), !0)), i.addKeyAction("ArrowRight", (d) => (d.ctrlKey ? R(d.shiftKey) : c(0, 1, d.shiftKey), !0)), i.addKeyAction("ArrowUp", (d) => (d.ctrlKey ? C(d.shiftKey) : c(-1, 0, d.shiftKey), !0)), i.addKeyAction("ArrowLeft", (d) => (d.ctrlKey ? f(d.shiftKey) : c(0, -1, d.shiftKey), !0)), i.addKeyAction("ArrowDown", (d) => (d.ctrlKey ? S(d.shiftKey) : c(1, 0, d.shiftKey), !0)), i.addKeyAction("Home", (d) => (f(d.shiftKey), !0)), i.addKeyAction("End", (d) => (R(d.shiftKey), !0)), i.addKeyAction("PageUp", (d) => (c(-wt, 0, d.shiftKey), !0)), i.addKeyAction("PageDown", (d) => (c(wt, 0, d.shiftKey), !0)), i.addKeyAction("Enter", (d) => (c(1, 0, !1), !0)), i.addKeyAction("a", I), i.addKeyAction("A", I), i.addKeyAction("z", x), i.addKeyAction("Z", x), i.addKeyAction("y", E), i.addKeyAction("Y", E);
    function I(d) {
      return d.ctrlKey ? (e.selectAll(), d.preventDefault(), !1) : !0;
    }
    function x(d) {
      return d.ctrlKey ? (e.undo(), d.preventDefault(), !1) : !0;
    }
    function E(d) {
      return d.ctrlKey ? (e.redo(), d.preventDefault(), !1) : !0;
    }
    i.addKeyAction("F2", (d) => (l(), !0)), i.addKeyAction("Delete", (d) => {
      const m = e.getSelection();
      if (!m || h.getCanClearCellCount(m) === 0)
        return !0;
      const _ = new $t(e, [m]);
      return e.commandManager.pushCommandBlock(new J("Clear cells", _)), e.clearCells(m), !0;
    }), i.addKeyAction(" ", (d) => {
      var _;
      const m = e.getSelection();
      if (!m)
        return !0;
      for (const v of h.getSelectionGenerator(m))
        v.onCheckReadonly() || v.metaInfo.disabled || (v.renderType === "checkbox" || v.renderType === "radio") && (e.getRow(v.row).isMounted ? (_ = v.element.querySelector("input")) == null || _.click() : v.text = v.text === "true" ? "false" : "true");
      return !0;
    }), e.addGlobalEventListener(n, "input", () => {
      t.gridModeState.value.mode !== "edit-cell" && l(!0);
    }), e.addGlobalEventListener(n, "keydown", (d) => {
      if (
        // editMode에서 온 입력은 pass
        !(t.gridModeState.value.mode === "edit-cell" || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!t.isIdle) {
          d.preventDefault();
          return;
        }
        if (!d.ctrlKey && pt(d.key)) {
          l(!0);
          return;
        }
        i.startKeyAction(d);
      }
    });
  }
  get pluginKey() {
    return "default-key";
  }
}
const Zs = /^[\S]$/;
function pt(s) {
  return s === "Process" || Zs.test(s);
}
function di(s) {
  return new Ut(s ?? {});
}
class qs extends X {
  _mountTask({ grid: e, table: t }) {
    let n = null;
    t.addEventListener("mousedown", (o) => {
      if (o.button !== 0)
        return;
      const r = Z("td", "tr", o.target);
      if (!r || (r == null ? void 0 : r.tagName) === "TH")
        return;
      const i = Q(r);
      n = e.cell(i.row, i.col), e.selectRow(n.row, n);
    }), e.addGlobalEventListener(document, "mouseup", () => n = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function ui() {
  return new qs();
}
const $e = -1, Js = /^\d+px$/;
function Qs(s) {
  for (const e of s)
    if (typeof e == "string") {
      if (Js.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function er(s) {
  let e = 0;
  for (const t of s)
    typeof t == "string" && (e += Kt(t));
  return e;
}
function Kt(s) {
  return parseInt(s.substring(0, s.length - 2), 10);
}
class tr extends X {
  constructor({ columnWeight: e }) {
    super(), this._columnWeightList = [], Qs(e), this._fixedColumnWidth = er(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, emitController: n }) {
    let o = $e;
    const r = () => {
      const { clientWidth: a } = t;
      if (a === 0) {
        e.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const c = e.getColCount() - 1, g = a - c - this._fixedColumnWidth, C = O(e.getColCount()).reduce((S, w) => {
        if (!e.getColumnVisible(w))
          return S;
        const I = this._columnWeightList[w];
        return I === void 0 ? S + 1 : typeof I == "number" ? S + I : S;
      }, 0);
      let f = 0;
      O(c).forEach((S) => {
        if (!e.getColumnVisible(S))
          return;
        const w = this._columnWeightList[S] ?? 1;
        if (typeof w == "string" && w.endsWith("px")) {
          const I = Kt(w);
          e.setColumnWidth(S, I);
        } else if (typeof w == "number") {
          const I = w / C;
          e.setColumnWidth(S, Math.floor(I * g));
        }
        f += e.getColumnWidth(S);
      });
      const R = h();
      R && e.setColumnWidth(R, g - f + this._fixedColumnWidth);
    }, i = () => {
      o !== $e && cancelAnimationFrame(o), o = requestAnimationFrame(() => {
        try {
          n.lockEmit("onColumnChanged"), r();
        } catch (a) {
          console.error(a);
        } finally {
          n.unlockEmit("onColumnChanged"), o = $e;
        }
      });
    };
    n.emitter.on("onWrapperResized", i), n.emitter.on("onColumnChanged", i), l();
    function l() {
      i();
    }
    function h() {
      for (let a = e.getColCount() - 1; a >= 0; a--)
        if (e.getColumnVisible(a))
          return a;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function hi(s) {
  return new tr(s ?? { columnWeight: [] });
}
class Xt extends X {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridContext: t, table: n }) {
    const o = {
      latestDragOverCell: null
    }, r = () => {
      t.setIdle(), n.classList.remove("is-dragging"), i();
    }, i = () => {
      o.latestDragOverCell && (o.latestDragOverCell.isDragOver = !1);
    }, l = (a) => {
      i(), o.latestDragOverCell = a, a.isDragOver = !0;
    }, h = () => n.classList.contains("is-dragging");
    n.addEventListener("mouseup", () => h() && r()), n.addEventListener("dragenter", () => {
      t.setMode({ mode: "dragging", contextParam: {} }), n.classList.add("is-dragging");
    }), n.addEventListener("dragover", (a) => {
      if (!a.dataTransfer || !n.classList.contains("is-dragging"))
        return;
      const c = e.findCellOrNull(a.offsetY, a.offsetX);
      if (!c || a.dataTransfer.types.includes("ir-grid/disabled-cell-drop"))
        return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        c.dropDisabled !== !1 && // disabled
        (c.metaInfo.disabled === !0 || // readonly
        c.onCheckReadonly() === !0 || c.dropDisabled === !0)
      )
        return i(), null;
      e.onDragOverCell(c, a) === !0 && (c !== o.latestDragOverCell && l(c), a.preventDefault());
    }), n.addEventListener("dragleave", (a) => {
      a.target === n ? r() : i();
    }), n.addEventListener("drop", (a) => {
      try {
        o.latestDragOverCell && e.onDropOnCell(o.latestDragOverCell.row, o.latestDragOverCell.col, a);
      } finally {
        r();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function gi() {
  return new Xt();
}
const _t = 10;
class nr extends X {
  _mountTask({ grid: e, table: t }) {
    const n = {
      cell: null
    }, o = () => {
      n.cell = null, t.draggable = !1;
    }, r = (i) => {
      t.draggable = !0, n.cell = i;
    };
    t.addEventListener("mousedown", (i) => {
      if (i.button !== 0)
        return;
      const l = Z("td", "tr", i.target);
      if (!l) {
        o();
        return;
      }
      const h = Q(l), a = e.cell(h.row, h.col);
      e.selectCell(h.row, h.col), a.metaInfo.draggable === !0 && a.metaInfo.object ? r(a) : o();
    }), t.addEventListener("dragend", () => o()), t.addEventListener("dragstart", (i) => {
      if (!i.dataTransfer || !n.cell || !e.onDragStartCell(n.cell, i)) {
        i.preventDefault();
        return;
      }
      i.dataTransfer.setDragImage(n.cell.element, _t, _t);
    });
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function fi() {
  return new nr();
}
const Rt = 10;
class mi extends X {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, table: t, gridContext: n, contextElement: o, gridStore: r }) {
    const {
      enabledRow: i = !0,
      enabledColumn: l = !0
    } = this.args, { mergeHandler: h, rowManager: a } = r;
    let c = null, g = null;
    t.addEventListener("mousedown", C), t.addEventListener("dragstart", f), t.addEventListener("dragover", R), t.addEventListener("drop", S), t.addEventListener("dragleave", w), t.addEventListener("dragend", I), t.addEventListener("mouseup", I), this._mountRollbackStack.push(() => {
      t.removeEventListener("mousedown", C), t.removeEventListener("dragstart", f), t.removeEventListener("dragover", R), t.removeEventListener("drop", S), t.removeEventListener("dragleave", w), t.removeEventListener("dragend", I), t.removeEventListener("mouseup", I);
    });
    function C(m) {
      if (m.button !== 0 || o.classList.contains("is-resizing"))
        return;
      const _ = Z("th", "tr", m.target);
      if (!_)
        return;
      const v = Q(_), L = e.cell(v.row, v.col);
      if (L.cellType === "body-cell" || T(L))
        return;
      x({
        direction: L.cellType,
        source: u(),
        cell: L
      });
      function u() {
        const { row: p, col: M } = L;
        return L.cellType === "row-header" ? [
          a.getStartOfRowId(p),
          a.getEndOfRowId(p)
        ] : [
          a.getStartOfColumnId(M),
          a.getEndOfColumnId(M)
        ];
      }
      function b(p) {
        return !i || p.row < e.getFreezedRowCount();
      }
      function y(p) {
        return !l || p.col < e.getFreezedColumnCount();
      }
      function T(p) {
        return p.cellType === "row-header" && b(p) || p.cellType === "col-header" && y(p);
      }
    }
    function f(m) {
      if (!m.dataTransfer || !c) {
        m.preventDefault();
        return;
      }
      n.setMode({ mode: "dragging", contextParam: {} }), t.classList.add("is-dragging"), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), m.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), m.dataTransfer.setDragImage(c.cell.element, Rt, Rt);
    }
    function R(m) {
      if (!c || !m.dataTransfer || !m.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging"))
        return;
      const _ = e.findCellOrNull(m.offsetY, m.offsetX);
      if (!_ || !_.isHeaderCell || c.direction === "row-header" && v(_, c) || c.direction === "col-header" && L(_, c)) {
        E(), g = _;
        return;
      }
      _ !== g && d(_, c.direction), m.preventDefault();
      function v(u, b) {
        return u.row === b.cell.row || u.row < e.getFreezedRowCount() || h.checkConflictingInRows(u.row, u.row);
      }
      function L(u, b) {
        return u.col === b.cell.col || u.col < e.getFreezedColumnCount() || h.checkConflictingInColumns(u.col, u.col);
      }
    }
    function S() {
      const m = c, _ = g;
      !m || !_ || (E(), m.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(m.source, [_.row, _.row]);
      }), e.forceLayoutTask(), e.selectRow(m.cell.row)), m.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(m.source, [_.col, _.col]);
      }), e.forceLayoutTask(), e.selectColumn(m.cell.col)));
    }
    function w() {
      E(), g = null;
    }
    function I() {
      t.classList.remove("is-dragging"), E(), c = null, t.draggable = !1, g = null, n.setIdle();
    }
    function x({ direction: m, source: _, cell: v }) {
      t.draggable = !0, c = {
        direction: m,
        source: _,
        cell: v
      };
    }
    function E() {
      if (!g || !c)
        return;
      const { direction: m } = c, _ = m === "row-header" ? e.headerColumns : e.headerRows;
      for (let v = 0; v < _; v++)
        m === "row-header" ? e.cell(g.row, v).element.classList.remove("is-dragging") : e.cell(v, g.col).element.classList.remove("is-dragging");
    }
    function d(m, _) {
      E(), g = m;
      const v = _ === "row-header" ? e.headerColumns : e.headerRows;
      for (let L = 0; L < v; L++)
        _ === "row-header" ? e.cell(m.row, L).element.classList.add("is-dragging") : e.cell(L, m.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Yt = 8, or = {
  normal: Jn,
  error: Qn
}, xt = (s, e, t, n) => {
  s.isConnected === !1 || s.offsetParent === null || So(s, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      Eo({
        mainAxis: Yt,
        crossAxis: n ?? 0
      }),
      vo(),
      Io({ padding: 5 })
    ]
  }).then(({ x: o, y: r, placement: i }) => {
    e.style.left = `${o}px`, e.style.top = `${r}px`, e.dataset.placement = i;
  });
}, sr = (s) => s.cellInfo.tooltip ?? s.cellInfo.text ?? "", rr = (s) => s.cellInfo.memo ?? "";
class ir extends X {
  constructor(e) {
    super(), this.options = e, this.context = null, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Zn;
  }
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    var R, S, w, I;
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: o
    } = this.options, {
      hasMemo: r,
      memoIntent: i = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, h = ((S = (R = this.options).getTooltipText) == null ? void 0 : S.call(R, e)) ?? sr(e), a = ((I = (w = this.options).getMemoText) == null ? void 0 : I.call(w, e)) ?? rr(e), c = () => {
      this._tooltipElement.textContent = h, Xe("popover").appendChild(this._tooltipElement), xt(e.element, this._tooltipElement, "bottom");
    }, g = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${qn} ${or[i]}`, Xe("popover").appendChild(this._memoElement), xt(e.element, this._memoElement, "right-start", Yt);
    }, C = !(r && o) && l === !1 && h ? window.setTimeout(() => c(), n) : -1, f = r && a ? window.setTimeout(() => g(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: C,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(C), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridContext: t, contextElement: n }) {
    const o = (r) => {
      var a, c, g;
      if (!oe(r.target))
        return;
      const i = Z("td,th", "tr", r.target);
      if (!i) {
        (a = this.context) == null || a.cleanup();
        return;
      }
      const l = Q(i), h = e.cell(l.row, l.col);
      ((c = this.context) == null ? void 0 : c.targetCell) !== h && ((g = this.context) == null || g.cleanup(), this.context = this.createContext(h));
    };
    e.addGlobalEventListener(n, "mouseleave", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    }), t.gridModeState.addSubscription((r, { mode: i }) => {
      var l;
      n.removeEventListener("mousemove", o), (l = this.context) == null || l.cleanup(), (i === "idle" || i === "edit-cell") && e.addGlobalEventListener(n, "mousemove", o);
    }), e.addGlobalEventListener(n, "scroll", () => {
      var r;
      return (r = this.context) == null ? void 0 : r.cleanup();
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const bt = 10;
class Ci extends X {
  _mountTask({ grid: e, table: t, gridContext: n, contextElement: o, wrapperElement: r, gridStore: i }) {
    const { rowManager: l } = i, h = document.createElement("div");
    h.className = eo;
    let a = null, c = -1;
    t.addEventListener("mousedown", g), t.addEventListener("dragstart", C), t.addEventListener("dragover", f), t.addEventListener("drop", R), t.addEventListener("dragleave", S), t.addEventListener("dragend", w), t.addEventListener("mouseup", w), this._mountRollbackStack.push(() => {
      t.removeEventListener("mousedown", g), t.removeEventListener("dragstart", C), t.removeEventListener("dragover", f), t.removeEventListener("drop", R), t.removeEventListener("dragleave", S), t.removeEventListener("dragend", w), t.removeEventListener("mouseup", w);
    });
    function g(d) {
      if (d.button !== 0 || o.classList.contains("is-resizing"))
        return;
      const m = Z("th", "tr", d.target);
      if (!m)
        return;
      const _ = Q(m), v = e.cell(_.row, _.col);
      if (L(v))
        return;
      I({
        source: [
          l.getStartOfRowId(v.row),
          l.getEndOfRowId(v.row)
        ],
        cell: v
      });
      function L(u) {
        return u.cellType !== "row-header" || u.row < e.getFreezedRowCount() || u.row < e.headerRows;
      }
    }
    function C(d) {
      const { offsetY: m, offsetX: _ } = d, v = e.findCellOrNull(m, _);
      if ((v == null ? void 0 : v.cellType) === "row-header") {
        if (!d.dataTransfer || !a) {
          d.preventDefault();
          return;
        }
        n.setMode({ mode: "dragging", contextParam: {} }), t.classList.add("is-dragging"), d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), d.dataTransfer.setData("ir-grid/move-rows-dragging", ""), d.dataTransfer.setDragImage(a.cell.element, bt, bt);
      }
    }
    function f(d) {
      const { dataTransfer: m, offsetY: _, offsetX: v } = d;
      if (!a || !m || !m.types.includes("ir-grid/move-rows-dragging"))
        return;
      const L = e.findCellOrNull(_, v);
      if (!L)
        return;
      const u = b(L.row);
      if (L.cellType !== "row-header" || y(u, a)) {
        x(), c = -1;
        return;
      }
      u !== c && E(u), d.preventDefault();
      function b(T) {
        const p = e.getRow(T), M = _ - p.top < p.height / 2;
        return p.rowId + (M ? 0 : 1);
      }
      function y(T, p) {
        const [M, k] = p.source;
        return T >= M && T <= k || T < e.headerRows;
      }
    }
    function R() {
      const d = a, m = c;
      !d || m < 0 || (x(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(d.source, m);
      }), e.forceLayoutTask(), e.selectRow(d.cell.row));
    }
    function S() {
      x(), c = -1;
    }
    function w() {
      t.classList.remove("is-dragging"), x(), a = null, t.draggable = !1, c = -1, n.setIdle();
    }
    function I({ source: d, cell: m }) {
      t.draggable = !0, a = {
        source: d,
        cell: m
      };
    }
    function x() {
      c < 0 || !a || h.remove();
    }
    function E(d) {
      x(), c = d;
      const m = Math.min(c, l.length - 1), _ = e.getRow(m), v = {
        top: _.top,
        height: 16
      }, L = v.height / 2;
      d === l.length && (v.top += _.height, v.height = L + 1), h.style.top = `${v.top - L}px`, h.style.width = `${e.headerWidth}px`, h.style.height = `${v.height}px`, r.append(h);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const yt = 10;
class wi extends X {
  _mountTask({ grid: e, table: t, gridContext: n, contextElement: o, wrapperElement: r, gridStore: i }) {
    const { rowManager: l, columnManager: h } = i, a = document.createElement("div");
    a.className = to;
    let c = null, g = -1;
    t.addEventListener("mousedown", C), t.addEventListener("dragstart", f), t.addEventListener("dragover", R), t.addEventListener("drop", S), t.addEventListener("dragleave", w), t.addEventListener("dragend", I), t.addEventListener("mouseup", I), this._mountRollbackStack.push(() => {
      t.removeEventListener("mousedown", C), t.removeEventListener("dragstart", f), t.removeEventListener("dragover", R), t.removeEventListener("drop", S), t.removeEventListener("dragleave", w), t.removeEventListener("dragend", I), t.removeEventListener("mouseup", I);
    });
    function C(m) {
      if (m.button !== 0 || o.classList.contains("is-resizing"))
        return;
      const _ = Z("th", "tr", m.target);
      if (!_)
        return;
      const v = Q(_), L = e.cell(v.row, v.col);
      if (u(L))
        return;
      x({
        source: [
          l.getStartOfColumnId(L.col),
          l.getEndOfColumnId(L.col)
        ],
        cell: L
      });
      function u(b) {
        return b.cellType !== "col-header" || b.col < e.getFreezedColumnCount() || b.col < e.headerColumns;
      }
    }
    function f(m) {
      const { offsetY: _, offsetX: v } = m, L = e.findCellOrNull(_, v);
      if ((L == null ? void 0 : L.cellType) === "col-header") {
        if (!m.dataTransfer || !c) {
          m.preventDefault();
          return;
        }
        n.setMode({ mode: "dragging", contextParam: {} }), t.classList.add("is-dragging"), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), m.dataTransfer.setData("ir-grid/move-columns-dragging", ""), m.dataTransfer.setDragImage(c.cell.element, yt, yt);
      }
    }
    function R(m) {
      const { dataTransfer: _, offsetY: v, offsetX: L } = m;
      if (!c || !_ || !_.types.includes("ir-grid/move-columns-dragging"))
        return;
      const u = e.findCellOrNull(v, L);
      if (!u)
        return;
      const b = y(u.col);
      if (u.cellType !== "col-header" || T(b, c)) {
        E(), g = -1;
        return;
      }
      b !== g && d(b), m.preventDefault();
      function y(p) {
        const M = e.getColumn(p), k = L - M.left < M.width / 2;
        return M.columnId + (k ? 0 : 1);
      }
      function T(p, M) {
        const [k, z] = M.source;
        return p >= k && p <= z || p < e.headerColumns;
      }
    }
    function S() {
      const m = c, _ = g;
      !m || _ < 0 || (E(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(m.source, _);
      }), e.forceLayoutTask(), e.selectColumn(m.cell.col));
    }
    function w() {
      E(), g = -1;
    }
    function I() {
      t.classList.remove("is-dragging"), E(), c = null, t.draggable = !1, g = -1, n.setIdle();
    }
    function x({ source: m, cell: _ }) {
      t.draggable = !0, c = {
        source: m,
        cell: _
      };
    }
    function E() {
      g < 0 || !c || a.remove();
    }
    function d(m) {
      E(), g = m;
      const _ = Math.min(g, h.length - 1), v = e.getColumn(_), L = {
        left: v.left,
        width: 12
      }, u = L.width / 2;
      m === h.length && (L.left += v.width, L.width = u + 1), a.style.left = `${L.left - u}px`, a.style.height = `${e.headerHeight}px`, a.style.width = `${L.width}px`, r.append(a);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const q = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), He = Symbol("anyProducer"), St = Promise.resolve(), ze = Symbol("listenerAdded"), Ae = Symbol("listenerRemoved");
let De = !1, je = !1;
const We = (s) => typeof s == "string" || typeof s == "symbol" || typeof s == "number";
function le(s) {
  if (!We(s))
    throw new TypeError("`eventName` must be a string, symbol, or number");
}
function Te(s) {
  if (typeof s != "function")
    throw new TypeError("listener must be a function");
}
function ae(s, e) {
  const t = ne.get(s);
  if (t.has(e))
    return t.get(e);
}
function we(s, e) {
  const t = We(e) ? e : He, n = Y.get(s);
  if (n.has(t))
    return n.get(t);
}
function lr(s, e, t) {
  const n = Y.get(s);
  if (n.has(e))
    for (const o of n.get(e))
      o.enqueue(t);
  if (n.has(He)) {
    const o = Promise.all([e, t]);
    for (const r of n.get(He))
      r.enqueue(o);
  }
}
function Et(s, e) {
  e = Array.isArray(e) ? e : [e];
  let t = !1, n = () => {
  }, o = [];
  const r = {
    enqueue(i) {
      o.push(i), n();
    },
    finish() {
      t = !0, n();
    }
  };
  for (const i of e) {
    let l = we(s, i);
    l || (l = /* @__PURE__ */ new Set(), Y.get(s).set(i, l)), l.add(r);
  }
  return {
    async next() {
      return o ? o.length === 0 ? t ? (o = void 0, this.next()) : (await new Promise((i) => {
        n = i;
      }), this.next()) : {
        done: !1,
        value: await o.shift()
      } : { done: !0 };
    },
    async return(i) {
      o = void 0;
      for (const l of e) {
        const h = we(s, l);
        h && (h.delete(r), h.size === 0 && Y.get(s).delete(l));
      }
      return n(), arguments.length > 0 ? { done: !0, value: await i } : { done: !0 };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
function vt(s) {
  if (s === void 0)
    return It;
  if (!Array.isArray(s))
    throw new TypeError("`methodNames` must be an array of strings");
  for (const e of s)
    if (!It.includes(e))
      throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
  return s;
}
const ce = (s) => s === ze || s === Ae;
function Me(s, e, t) {
  if (ce(e))
    try {
      De = !0, s.emit(e, t);
    } finally {
      De = !1;
    }
}
class re {
  static mixin(e, t) {
    return t = vt(t), (n) => {
      if (typeof n != "function")
        throw new TypeError("`target` must be function");
      for (const i of t)
        if (n.prototype[i] !== void 0)
          throw new Error(`The property \`${i}\` already exists on \`target\``);
      function o() {
        return Object.defineProperty(this, e, {
          enumerable: !1,
          value: new re()
        }), this[e];
      }
      Object.defineProperty(n.prototype, e, {
        enumerable: !1,
        get: o
      });
      const r = (i) => function(...l) {
        return this[e][i](...l);
      };
      for (const i of t)
        Object.defineProperty(n.prototype, i, {
          enumerable: !1,
          value: r(i)
        });
      return n;
    };
  }
  static get isDebugEnabled() {
    var t;
    if (typeof ((t = globalThis.process) == null ? void 0 : t.env) != "object")
      return je;
    const { env: e } = globalThis.process ?? { env: {} };
    return e.DEBUG === "emittery" || e.DEBUG === "*" || je;
  }
  static set isDebugEnabled(e) {
    je = e;
  }
  constructor(e = {}) {
    q.set(this, /* @__PURE__ */ new Set()), ne.set(this, /* @__PURE__ */ new Map()), Y.set(this, /* @__PURE__ */ new Map()), Y.get(this).set(He, /* @__PURE__ */ new Set()), this.debug = e.debug ?? {}, this.debug.enabled === void 0 && (this.debug.enabled = !1), this.debug.logger || (this.debug.logger = (t, n, o, r) => {
      try {
        r = JSON.stringify(r);
      } catch {
        r = `Object with the following keys failed to stringify: ${Object.keys(r).join(",")}`;
      }
      (typeof o == "symbol" || typeof o == "number") && (o = o.toString());
      const i = /* @__PURE__ */ new Date(), l = `${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;
      console.log(`[${l}][emittery:${t}][${n}] Event Name: ${o}
	data: ${r}`);
    });
  }
  logIfDebugEnabled(e, t, n) {
    (re.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, n);
  }
  on(e, t) {
    Te(t), e = Array.isArray(e) ? e : [e];
    for (const n of e) {
      le(n);
      let o = ae(this, n);
      o || (o = /* @__PURE__ */ new Set(), ne.get(this).set(n, o)), o.add(t), this.logIfDebugEnabled("subscribe", n, void 0), ce(n) || Me(this, ze, { eventName: n, listener: t });
    }
    return this.off.bind(this, e, t);
  }
  off(e, t) {
    Te(t), e = Array.isArray(e) ? e : [e];
    for (const n of e) {
      le(n);
      const o = ae(this, n);
      o && (o.delete(t), o.size === 0 && ne.get(this).delete(n)), this.logIfDebugEnabled("unsubscribe", n, void 0), ce(n) || Me(this, Ae, { eventName: n, listener: t });
    }
  }
  once(e) {
    let t;
    const n = new Promise((o) => {
      t = this.on(e, (r) => {
        t(), o(r);
      });
    });
    return n.off = t, n;
  }
  events(e) {
    e = Array.isArray(e) ? e : [e];
    for (const t of e)
      le(t);
    return Et(this, e);
  }
  async emit(e, t) {
    if (le(e), ce(e) && !De)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emit", e, t), lr(this, e, t);
    const n = ae(this, e) ?? /* @__PURE__ */ new Set(), o = q.get(this), r = [...n], i = ce(e) ? [] : [...o];
    await St, await Promise.all([
      ...r.map(async (l) => {
        if (n.has(l))
          return l(t);
      }),
      ...i.map(async (l) => {
        if (o.has(l))
          return l(e, t);
      })
    ]);
  }
  async emitSerial(e, t) {
    if (le(e), ce(e) && !De)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emitSerial", e, t);
    const n = ae(this, e) ?? /* @__PURE__ */ new Set(), o = q.get(this), r = [...n], i = [...o];
    await St;
    for (const l of r)
      n.has(l) && await l(t);
    for (const l of i)
      o.has(l) && await l(e, t);
  }
  onAny(e) {
    return Te(e), this.logIfDebugEnabled("subscribeAny", void 0, void 0), q.get(this).add(e), Me(this, ze, { listener: e }), this.offAny.bind(this, e);
  }
  anyEvent() {
    return Et(this);
  }
  offAny(e) {
    Te(e), this.logIfDebugEnabled("unsubscribeAny", void 0, void 0), Me(this, Ae, { listener: e }), q.get(this).delete(e);
  }
  clearListeners(e) {
    e = Array.isArray(e) ? e : [e];
    for (const t of e)
      if (this.logIfDebugEnabled("clear", t, void 0), We(t)) {
        const n = ae(this, t);
        n && n.clear();
        const o = we(this, t);
        if (o) {
          for (const r of o)
            r.finish();
          o.clear();
        }
      } else {
        q.get(this).clear();
        for (const [n, o] of ne.get(this).entries())
          o.clear(), ne.get(this).delete(n);
        for (const [n, o] of Y.get(this).entries()) {
          for (const r of o)
            r.finish();
          o.clear(), Y.get(this).delete(n);
        }
      }
  }
  listenerCount(e) {
    var n, o, r;
    e = Array.isArray(e) ? e : [e];
    let t = 0;
    for (const i of e) {
      if (We(i)) {
        t += q.get(this).size + (((n = ae(this, i)) == null ? void 0 : n.size) ?? 0) + (((o = we(this, i)) == null ? void 0 : o.size) ?? 0) + (((r = we(this)) == null ? void 0 : r.size) ?? 0);
        continue;
      }
      i !== void 0 && le(i), t += q.get(this).size;
      for (const l of ne.get(this).values())
        t += l.size;
      for (const l of Y.get(this).values())
        t += l.size;
    }
    return t;
  }
  bindMethods(e, t) {
    if (typeof e != "object" || e === null)
      throw new TypeError("`target` must be an object");
    t = vt(t);
    for (const n of t) {
      if (e[n] !== void 0)
        throw new Error(`The property \`${n}\` already exists on \`target\``);
      Object.defineProperty(e, n, {
        enumerable: !1,
        value: this[n].bind(this)
      });
    }
  }
}
const It = Object.getOwnPropertyNames(re.prototype).filter((s) => s !== "constructor");
Object.defineProperty(re, "listenerAdded", {
  value: ze,
  writable: !1,
  enumerable: !0,
  configurable: !1
});
Object.defineProperty(re, "listenerRemoved", {
  value: Ae,
  writable: !1,
  enumerable: !0,
  configurable: !1
});
const ar = (s) => {
  const e = new re({ debug: { name: s.uuid } }), t = /* @__PURE__ */ new Set();
  return {
    get emitter() {
      return e;
    },
    emit(...n) {
      t.has(n[0]) || e.emit(...n);
    },
    lockEmit(n) {
      t.add(n);
    },
    unlockEmit(n) {
      t.delete(n);
    }
  };
};
function cr(s, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, o = 0, r = 0;
  const i = {
    setRow(C) {
      o = C;
    },
    setCol(C) {
      r = C;
    }
  }, l = () => t.hasHeaderRows ? 0 : s.headerRows, h = () => t.hasHeaderColumns ? 0 : s.headerColumns;
  function* a() {
    i.setRow(l()), i.setCol(h());
    const C = s.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield s.cell(o, r);
          break;
        case "selected-col":
          if (!C)
            throw new Error("No selection in finding");
          At(r, C) && (yield s.cell(o, r));
          break;
        case "selected-row":
          if (!C)
            throw new Error("No selection in finding");
          zt(o, C) && (yield s.cell(o, r));
          break;
        case "selection":
          if (!C)
            throw new Error("No selection in finding");
          it(o, r, C) && (yield s.cell(o, r));
          break;
        case "custom":
          if (!t.customRange)
            throw new Error("Please call with customRange in 'custom' finding.");
          it(o, r, t.customRange) && (yield s.cell(o, r));
          break;
      }
      if (f())
        break;
    }
    function f() {
      const R = t.direction;
      if (R === "by-columns" || R === "left-right") {
        if (++o, o >= s.getRowCount() && (++r, o = l()), r >= s.getColCount())
          if (n)
            n = !1, o = l(), r = h();
          else
            return !0;
      } else if (++r, r >= s.getColCount() && (++o, r = h()), o >= s.getRowCount())
        if (n)
          n = !1, o = l(), r = h();
        else
          return !0;
    }
  }
  function c(C) {
    const f = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), R = t.matchAll ? `^${f}$` : f, S = t.ignoreCase ? "i" : "", w = new RegExp(R, S);
    return e.onCellCheck ? e.onCellCheck(w, C) : w.test(C.text);
  }
  let g = a();
  return {
    resetCursor() {
      g = a();
    },
    findNext(C) {
      for (Ht(t, C) || (g = a()), Object.assign(t, C); ; ) {
        const f = g.next();
        if (!f.done && c(f.value))
          return n = !0, f.value;
        if (f.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(C) {
      const f = [];
      C && Object.assign(t, C);
      for (const R of a())
        c(R) && f.push(R);
      return f;
    },
    setCursor(C, f) {
      if (C < 0 || f < 0)
        throw new Error("row or col must be greater than or equal to 0");
      i.setRow(C), i.setCol(f);
    }
  };
}
const dr = 1e4;
function ur(s) {
  const e = kt("textarea", no);
  let t = null;
  const n = {
    get element() {
      return e;
    },
    focus: o,
    runEditMode: h,
    onEditDone(w, I, x, E, d, m) {
    },
    onEditKeyDown(w, I, x, E) {
    },
    onEnterOnEdit(w, I) {
    }
  };
  return c(), n;
  function o() {
    e.focus({ preventScroll: !0 });
  }
  function r(w) {
    e.value = w;
  }
  function i(w) {
    const I = s.getRow(w.row), x = s.getColumn(w.col), E = w.row < s.getFreezedRowCount() ? s.scrollTop : 0, d = w.col < s.getFreezedColumnCount() ? s.scrollLeft : 0;
    e.style.top = `${I.top + E}px`, e.style.left = `${x.left + d}px`, e.style.width = `${w.element.offsetWidth - 1}px`, e.style.height = `${w.element.offsetHeight - 1}px`;
  }
  function l(w) {
    const I = w === "" ? W.zLevel1 : `calc(${w} + 1000)`;
    e.style.zIndex = I;
  }
  function h(w, I = !1) {
    t = {
      cell: w,
      beforeText: w.metaInfo.text ?? "",
      cancelEndEdit: !1
    }, I || r(t.beforeText), e.maxLength = w.metaInfo.maxLength ?? dr, l(w.zIndexVariant), i(w), o(), e.scrollTo(0, e.scrollHeight);
  }
  function a() {
    r(""), t = null, e.style.removeProperty("top"), e.style.removeProperty("left"), e.style.removeProperty("height"), e.style.removeProperty("width"), e.style.removeProperty("z-index");
  }
  function c() {
    e.addEventListener("keydown", C), e.addEventListener("blur", f), e.addEventListener("keyup", g);
  }
  function g() {
    t || r("");
  }
  function C(w) {
    if (!t)
      return;
    const { beforeText: I, cell: x } = t;
    if (S(w)) {
      R(e.value, I !== e.value, w.key), w.preventDefault();
      return;
    }
    if (w.key === "Escape") {
      R(e.value, !1, w.key);
      return;
    }
    if (w.key === "Enter" && w.altKey && x.metaInfo.editSingleLine !== !0) {
      w.preventDefault();
      const E = e.selectionStart;
      try {
        t.cancelEndEdit = !0, e.blur(), e.value = [
          e.value.substring(0, E),
          e.value.substring(e.selectionEnd)
        ].join(`
`), o(), e.setSelectionRange(E + 1, E + 1, "backward"), n.onEditKeyDown(w, x.row, x.col, x.metaInfo);
      } finally {
        t.cancelEndEdit = !1;
      }
      return;
    }
    if (w.key === "Enter") {
      w.preventDefault(), R(e.value, I !== e.value, w.key), n.onEnterOnEdit(w.ctrlKey, w.shiftKey);
      return;
    }
    n.onEditKeyDown(w, x.row, x.col, x.metaInfo);
  }
  function f() {
    !t || t.cancelEndEdit || R(e.value, t.beforeText !== e.value, "");
  }
  function R(w, I, x) {
    if (!t)
      return;
    const { cell: E, beforeText: d } = t;
    if (a(), I && E.checkInputValidation(w)) {
      const m = new he(E.metaInfo.commandManager, [
        E.row,
        E.col,
        { text: w }
      ]);
      m.onUndo = () => {
        n.onEditDone(E, I, d, x, e.selectionStart, e.selectionEnd);
      }, m.onExecute = () => {
        n.onEditDone(E, I, d, x, e.selectionStart, e.selectionEnd);
      }, s.commandManager.pushCommandBlock(new J(
        `Edit cell (${E.row}, ${E.col}) `,
        m
      )), E.cellInfo = { text: w }, E.render();
    }
    n.onEditDone(E, I, d, x, e.selectionStart, e.selectionEnd);
  }
  function S(w) {
    return w.key === "ArrowLeft" && e.selectionStart === 0 && e.selectionEnd === 0 || w.key === "ArrowUp" && e.selectionStart === 0 && e.selectionEnd === 0 || w.key === "ArrowRight" && e.selectionStart === e.textLength && e.selectionEnd === e.textLength || w.key === "ArrowDown" && e.selectionStart === e.textLength && e.selectionEnd === e.textLength ? !0 : w.key === "Tab";
  }
}
const hr = 4, Le = "is-hidden";
function gr(s, e) {
  return s.top > e.bottom || e.top > s.bottom || s.left > e.right || e.left > s.right ? null : {
    top: Math.max(s.top, e.top),
    left: Math.max(s.left, e.left),
    bottom: Math.min(s.bottom, e.bottom),
    right: Math.min(s.right, e.right)
  };
}
const fr = ro, mr = [io, lo, ao, co], Cr = ["top", "left", "bottom", "right"];
function wr(s) {
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
  ], [o, r, i, l] = n, h = [o, i], a = [r, l];
  e.classList.add(oo, Le), n.forEach((x, E) => x.className = `${so} border-line__${Cr[E]}`), t.forEach((x) => e.appendChild(x)), n.forEach((x) => e.appendChild(x));
  function c(x) {
    const { top: E, left: d, bottom: m, right: _ } = f(x), v = x.top < s.getFreezedRowCount() ? s.scrollTop : 0, L = x.left < s.getFreezedColumnCount() ? s.scrollLeft : 0;
    return {
      top: E + v,
      left: d + L,
      width: _ - d,
      height: m - E
    };
  }
  function g(x) {
    x.classList.add(Le), delete x.dataset.y, delete x.dataset.x, delete x.dataset.width, delete x.dataset.height, delete x.dataset.visible;
  }
  function C(x, E) {
    const d = t[x], m = c(E);
    d.className = `${fr} ${mr[x]}`, d.dataset.top = E.top.toString(), d.dataset.left = E.left.toString(), d.dataset.bottom = E.bottom.toString(), d.dataset.right = E.right.toString(), d.dataset.y = m.top.toString(), d.dataset.x = m.left.toString(), d.dataset.width = m.width.toString(), d.dataset.height = m.height.toString(), d.dataset.visible = "true", d.style.top = `${m.top}px`, d.style.left = `${m.left}px`, d.style.width = `${m.width}px`, d.style.height = `${m.height}px`;
  }
  function f(x) {
    return {
      top: s.getRow(x.top).top - de,
      left: s.getColumn(x.left).left - ue,
      bottom: s.getRow(x.bottom).bottom,
      right: s.getColumn(x.right).right
    };
  }
  function R(x) {
    const { left: E, right: d } = x, m = s.getFreezedColumnCount();
    return O(E, d + 1).reduce((_, v) => {
      const L = s.getColumn(v);
      return L.visible ? _ + (v >= m ? L.widthWithBorder : 0) : _;
    }, 0);
  }
  function S(x) {
    const { top: E, bottom: d } = x, m = s.getFreezedRowCount();
    return O(E, d + 1).reduce((_, v) => {
      const L = s.getRow(v);
      return L.visible ? _ + (v >= m ? L.heightWithBorder : 0) : _;
    }, 0);
  }
  function w(x, E, d, m) {
    if (x <= m)
      return Math.min(E, d);
    const _ = x - m;
    return d > _ ? Math.max(0, d - _) : 0;
  }
  function I(x) {
    const { top: E, left: d, bottom: m, right: _ } = f(x), {
      fixedRowHeight: v,
      fixedColumnWidth: L,
      scrollTop: u,
      scrollLeft: b
    } = s, y = v + u, T = L + b, p = E < v, M = m <= v, k = d < L, z = _ <= L, H = E >= y, D = m >= y, $ = d >= T, F = _ >= T, A = R(x), ee = S(x), Qe = w(d, A, b, L), et = w(E, ee, u, v), Fe = _ - d - Qe, Pe = m - E - et, tt = E + (p ? u : et), nt = d + (k ? b : Qe), _e = nt < 0 ? 1 : 0, Re = tt < 0 ? 1 : 0;
    (function() {
      h.forEach((me) => {
        me.style.left = `${nt + _e}px`, me.style.width = `${Fe - _e}px`;
      });
    })(), function() {
      a.forEach((me) => {
        me.style.top = `${tt + Re}px`, me.style.height = `${Pe - Re}px`;
      });
    }(), function() {
      if (Fe <= 1) {
        o.style.display = "none";
        return;
      }
      o.style.removeProperty("display"), p ? o.style.top = `${E + u + Re}px` : H ? o.style.top = `${E + Re}px` : o.style.display = "none";
    }(), function() {
      if (Fe <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.top = `${m + u - de}px` : D ? i.style.top = `${m - de}px` : i.style.display = "none";
    }(), function() {
      if (Pe <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), k ? r.style.left = `${d + b + _e}px` : $ ? r.style.left = `${d + _e}px` : r.style.display = "none";
    }(), function() {
      if (Pe <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), z ? l.style.left = `${_ + b - ue}px` : F ? l.style.left = `${_ - ue}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(x) {
      const E = s.headerRows, d = s.getFreezedRowCount(), m = s.headerColumns, _ = s.getFreezedColumnCount(), v = s.getRowCount() - 1, L = s.getColCount() - 1, b = [
        { top: E, left: m, bottom: d - 1, right: _ - 1 },
        { top: E, left: _, bottom: d - 1, right: L },
        { top: d, left: m, bottom: v, right: _ - 1 },
        { top: d, left: _, bottom: v, right: L }
      ].map((y) => gr(x, y));
      for (let y = 0; y < hr; y++) {
        const T = b[y];
        T ? C(y, T) : g(t[y]);
      }
      I(x);
    },
    applyGridScroll() {
      const x = s.getSelection();
      x && this.updateArea(x);
    },
    show() {
      e.classList.remove(Le);
    },
    hide() {
      e.classList.add(Le);
    }
  };
}
class pr {
  constructor(e, t, n) {
    this._activatedHeaderCellList = [], this._gridContext = t, this._selectionHandler = wr(e), n.appendChild(this._selectionHandler.selectionRoot);
  }
  updateScroll() {
    this._selectionHandler.applyGridScroll();
  }
  releaseRange() {
    this._selectionHandler.hide();
  }
  update() {
    const e = this._gridContext.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this._selectionHandler.show(), this._selectionHandler.updateArea(t);
  }
}
class _r extends B {
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
class Rr extends B {
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
class xr extends B {
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
function Zt(s, e) {
  const [t, n] = s, [o, r] = e, i = n - t, l = r - o;
  return i === l ? [e, s] : t < o ? [[r - i, r], [t, t + l]] : [[o, o + i], [n - l, n]];
}
class br extends B {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Zt(...this._args));
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
class yr extends B {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Zt(...this._args));
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
class Sr extends B {
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
class Er extends B {
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
class vr extends B {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: o, text: r }) => {
      this._instance.setText(n, o, r);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new ge(this._instance, this._instance), [t, n, o, r] = this._args, i = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: o, right: r }))
      i.push({ row: l.row, col: l.col, text: l.text });
    return {
      textSnapshot: i
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function qt(s, e) {
  const [t, n] = s, o = n - t;
  return t < e ? [[e - o - 1, e - 1], t] : [[e, e + o], n + 1];
}
class Ir extends B {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...qt(this._args[0], this._undoContext.targetId));
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
class Tr extends B {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...qt(this._args[0], this._undoContext.targetId));
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
class Mr extends B {
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
    const e = new Oe(this._instance), [t, n] = this._args;
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
class Lr extends B {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertRows(this._args[0], e), this._instance.forceLayoutTask(), this._undoContext.removedRows.forEach((t) => {
      const n = this._instance.getRow(t.rowId);
      this._instance.setRowHeight(n.rowId, t.height), this._instance.setRowVisible(n.rowId, t.visible);
      for (let o = 0; o < t.cellCounts; o++) {
        const r = t.getCell(o);
        n.getCell(o).cellRenderer = r.cellRenderer, this._instance.setCell(n.rowId, o, r.metaInfo), (r.mergeInfo.rowSpan > 1 || r.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          r.row,
          r.col,
          r.bottom,
          r.right
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
class kr extends B {
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
class Hr extends B {
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
const Tt = {
  addRow: Rr,
  addColumn: _r,
  setCell: he,
  clearCells: $t,
  setRowHeight: Bt,
  setColumnWidth: Gt,
  insertRows: Er,
  insertColumns: Sr,
  setRowVisible: kr,
  setColumnVisible: xr,
  mergeCells: vr,
  splitCells: Hr,
  removeRows: Lr,
  removeColumns: Mr,
  exchangeRows: br,
  exchangeColumns: yr,
  moveRows: Ir,
  moveColumns: Tr
};
function zr(s) {
  if (!(s in Tt)) {
    console.warn(`There is no method named ${s} in IRGridCommandMap`);
    return;
  }
  return Tt[s];
}
function Ar(s) {
  if (s === G.name)
    return zr;
}
function Dr(s, e, t, n, o) {
  const r = Ar(e);
  if (!r) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = r(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  s.pushCommand(new i(n, o));
}
function V() {
  return function(e, t, n) {
    const o = n.value;
    return n.value = function(...r) {
      const { commandManager: i } = this;
      return i ? i.isRecording && Dr(i, this.constructor.name, t, this, r) : console.warn("No commandManager in this context"), o.apply(this, r);
    }, n;
  };
}
var Wr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, N = (s, e, t, n) => {
  for (var o = Or(e, t), r = s.length - 1, i; r >= 0; r--)
    (i = s[r]) && (o = i(e, t, o) || o);
  return o && Wr(e, t, o), o;
};
const te = {
  grid: fo,
  gridWrapper: mo,
  gridTable: Co,
  gridVariants: W
}, Mt = {}, Fr = [
  "text/html",
  "text/plain"
];
function Pr() {
  return [
    new Ut({}),
    new Nt(),
    new Xt(),
    new Vt({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new ir({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class G extends xo {
  constructor(e) {
    super({ contextElement: e.contextElement ?? document.createElement("div") }), this._gridContext = new Ls(this), this._gridRangeUtils = new Oe(this), this._plugins = [], this._readonly = !1;
    const {
      colHeader: t,
      rowHeader: n,
      body: o,
      defaultColumnCellFormat: r,
      plugins: i
    } = e;
    if (this._cursorManager = jt(this, !1), this._commandManager = new Ro({ context: this }), this._defaultColumnCellFormat = {
      all: {
        editable: !0,
        text: ""
      }
    }, this._copyOptions = e.copyOptions ?? { rowSpan: !0, colSpan: !0 }, r)
      for (const [a, c] of Object.entries(r))
        this._defaultColumnCellFormat[a] = Object.assign(this._defaultColumnCellFormat[a] || {}, c);
    const l = () => new Je();
    this._gridStore = new Ns(
      Object.assign({
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: (n == null ? void 0 : n.colCount) ?? 0,
        headerRowCount: (t == null ? void 0 : t.rowCount) ?? 0
      })
    ), this.initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: l,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._textarea = ur(this), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      cellRenderer: l,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: l
    }, o), this.contextElement.classList.add(te.grid, uo), this.contextElement.tabIndex = 0, this.contextElement.role = "grid", this._tableElement = document.createElement("table"), this._divWrapper = document.createElement("div");
    const h = document.createElement("tbody");
    this._divWrapper.className = te.gridWrapper, this._tableElement.classList.add(te.gridTable), this._tableElement.appendChild(this.colManager.colgroup), this._tableElement.appendChild(h), this._divWrapper.appendChild(this._tableElement), this.contextElement.appendChild(this._divWrapper), this.addGlobalEventListener(this.contextElement, "focus", () => this.focus()), this.resizeObserve(() => {
      this._emitterController.emit("onWrapperResized", {}), this._debounceManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection"), this.onResizeContext();
    }), this.initPlugins(i ?? Pr()), this.addCoreElement(this._divWrapper), this._emitterController = ar(this), this._generator = new ge(this.rowManager, this.colManager), this._selector = new pr(this, this._gridContext, this._divWrapper), this._divWrapper.appendChild(this._textarea.element), this._debounceManager = new Ws(this, this._gridContext, this._divWrapper, h, this.contextElement, this._selector), this._gridContext.selectionRangeState.addSubscription((a, c) => {
      (a == null ? void 0 : a.activeCell) !== (c == null ? void 0 : c.activeCell) && (a == null || a.activeCell.deactivate(), c == null || c.activeCell.activate());
    }), this._gridContext.activateHeaderCellState.addSubscription((a, c) => {
      a.forEach((g) => g.deactivate()), c.forEach((g) => g.activate());
    }), this._gridContext.selectionRangeState.addSubscription((a, c) => {
      c ? this._gridContext.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(c.range)]) : this._gridContext.activateHeaderCellState.next([]);
    }), this._gridContext.selectionRangeState.addSubscription((a, c) => {
      c ? this.onSelectCell(c.activeCell) : this.onActiveCellNull();
    }), this._gridContext.selectionRangeState.addSubscription((a, c) => {
      this.onSelectChanged((c == null ? void 0 : c.range) ?? null);
    }), this._gridContext.gridModeState.addSubscription((a, c) => {
      this.contextElement.dataset.mode = c.mode;
    }), this._gridContext.gridModeState.next({ mode: "idle", contextParam: {} }), this.initTableRowCol(), this.addGlobalEventListener(this.contextElement, "contextmenu", (a) => {
      a.preventDefault();
      const { y: c, x: g } = Do(a);
      this.onContextMenu(a, this.findCellOrNull(c, g));
    }), this.addGlobalEventListener(this.contextElement, "dragend", () => {
      this.focus();
    });
  }
  /**
   * 현재 고정된 행 개수 (header)
   * header + body를 사용하려면 getFreezedRowCount를 사용
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  get firstRow() {
    return this.rowManager.firstRow;
  }
  get lastRow() {
    return this.rowManager.lastRow;
  }
  get rowManager() {
    return this._gridStore.rowManager;
  }
  get mergeHandler() {
    return this._gridStore.mergeHandler;
  }
  get colManager() {
    return this._gridStore.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  get fixedColumnCount() {
    return this.colManager.freezedColumns;
  }
  get width() {
    return this.colManager.columnsWidth;
  }
  get height() {
    return this.rowManager.rowsHeight;
  }
  /**
   * headerRows + freezedRows 높이 총합
   */
  get fixedRowHeight() {
    return this.rowManager.freezedRowsHeight;
  }
  /**
   * rowHeaders + freezedColumns 너비 총합
   */
  get fixedColumnWidth() {
    return this.colManager.fixedColumnsWidth;
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
    return this._colHeaderInfo.minSize;
  }
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  get commandManager() {
    return this._commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수 (초기 colHeader.rowCount)
   */
  get headerRows() {
    return this.rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수 (초기 rowHeader.colCount)
   */
  get headerColumns() {
    return this.colManager.headerColumns;
  }
  get headerWidth() {
    return this.colManager.rowHeaderColumnsWidth;
  }
  get headerHeight() {
    return this.rowManager.headerRowsHeight;
  }
  get activeCell() {
    var e;
    return ((e = this._gridContext.selectionRangeState.value) == null ? void 0 : e.activeCell) ?? null;
  }
  /*
   * Setters
   */
  set activeCell(e) {
    if (e === this.activeCell)
      return;
    if (!e) {
      this._gridContext.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  set readonly(e) {
    this._readonly = e, this.rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      table: this._tableElement,
      contextElement: this.contextElement,
      emitController: this._emitterController,
      wrapperElement: this._divWrapper,
      gridContext: this._gridContext,
      gridStore: this._gridStore
    }), this._plugins.push(e);
  }
  getColumnByLeft(e) {
    const t = this.colManager.visibleColumnList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const r = n + Math.floor((o - n) / 2), i = t[r];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? o = r - 1 : n = r + 1;
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
    this._defaultColumnCellFormat[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this.rowManager.getRowByTop(e);
  }
  removePlugin(e) {
    if (!this._plugins.includes(e))
      throw new Error("plugin not found");
    e.unmount(), this._plugins.splice(this._plugins.indexOf(e), 1);
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
    return this.mergeHandler.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this.mergeHandler.splitCells(e, t), this._debounceManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, o) {
    this.forceLayoutTask(), this.mergeHandler.mergeCells({ top: e, left: t, bottom: n, right: o }), this._debounceManager.addTask("virtualRender");
    const r = this.getSelection();
    r && this.selectRange(r.top, r.left, r.bottom, r.right);
  }
  undo() {
    this._commandManager.undo();
  }
  redo() {
    this._commandManager.redo();
  }
  findRowOrNull(e) {
    const { scrollTop: t } = this, n = e < t + this.fixedRowHeight ? {
      startIndex: 0,
      endIndex: this.fixedRowCount,
      curIndex: Math.floor(this.fixedRowCount / 2),
      scrollTop: t
    } : {
      startIndex: 0,
      endIndex: this.rowManager.length,
      curIndex: Math.floor(this.rowManager.length / 2),
      scrollTop: 0
    };
    let o = this.rowManager.getRow(n.curIndex);
    for (; !(e >= n.scrollTop + o.top && e <= n.scrollTop + o.bottom); ) {
      if (e < n.scrollTop + o.top) {
        if (n.endIndex === n.curIndex)
          return null;
        n.endIndex = n.curIndex;
      } else {
        if (n.startIndex === n.curIndex)
          return null;
        n.startIndex = n.curIndex;
      }
      n.curIndex = Math.floor((n.startIndex + n.endIndex) / 2), o = this.rowManager.getRow(n.curIndex);
    }
    return o;
  }
  findCellOrNull(e, t) {
    const { scrollTop: n, scrollLeft: o } = this, r = e < n + this.fixedRowHeight ? e - n : e, i = t < o + this.fixedColumnWidth ? t - o : t, l = this.getRowByTop(r);
    if (!l)
      return null;
    const h = this.getColumnByLeft(i);
    if (!h)
      return null;
    const a = this.cell(l.rowId, h.columnId);
    return a.mergeMain ?? a;
  }
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return {
        row: n.row,
        col: n.col
      };
    if (n.mergeMain)
      return {
        row: n.mergeMain.row,
        col: n.mergeMain.col
      };
    throw new Error("It's not a merged cell!");
  }
  releaseCells() {
    this._gridContext.selectionRangeState.next(null), this._selector.releaseRange();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this.rowManager.clearRows(), this._commandManager.clearCommands(), this._debounceManager.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this.colManager.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    this._gridContext.selectionRangeState.next({
      range: e,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._debounceManager.addTask("updateSelection");
  }
  selectRange(e, t, n, o, r = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: o }, r);
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
    return ((e = this._gridContext.selectionRangeState.value) == null ? void 0 : e.range) ?? null;
  }
  scrollOnRow(e) {
    this._debounceManager.isScheduled ? this.afterRender(() => this.scrollOnRowTask(e)) : this.scrollOnRowTask(e);
  }
  forceLayoutTask() {
    this._debounceManager.forceRunTasks();
  }
  scrollOnCol(e) {
    this._debounceManager.isScheduled ? this.afterRender(() => this.scrollOnColTask(e)) : this.scrollOnColTask(e);
  }
  getPlugin(e) {
    for (const t of this._plugins)
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
    this._tableElement.draggable || this._textarea.focus();
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
    return this.colManager.getColumnWidth(e);
  }
  setColumnWidth(e, t) {
    const n = P(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this.colManager.setColumnWidth(e, n), this.onResizeColumn(e), this._emitterController.emit("onColumnChanged", { left: e, right: e, type: "setWidth" }), this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.colManager.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft");
  }
  getRowHeight(e) {
    return this.rowManager.getRowHeight(e);
  }
  setRowHeight(e, t) {
    const n = P(t, this.minRowHeight, this.maxRowHeight);
    this.rowManager.setRowHeight(e, n), this._debounceManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  setRowTextColor(e, t) {
    this.rowManager.getRow(e).textColor = t;
  }
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  setObject(e, t, n) {
    this.cell(e, t).cellInfo = { object: n };
  }
  cell(e, t) {
    return this.rowManager.getCell(e, t);
  }
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환합니다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).metaInfo;
  }
  getCellMetaInfo(e, t) {
    return this.cell(e, t).metaInfo;
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
    return this.rowManager.length;
  }
  getColCount() {
    return this.colManager.length;
  }
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)
   */
  getFreezedRowCount() {
    return this.rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  getFreezedColumnCount() {
    return this.colManager.freezedColumns;
  }
  getColumn(e) {
    return this.colManager.getColumn(e);
  }
  getRow(e) {
    return this.rowManager.getRow(e);
  }
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  renderColumns(e, t) {
    this.rowManager.runFuncEachRow((n) => n.renderColumns(e, t));
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this._rowHeaderInfo.defaultSize) {
    const t = P(e, this.minRowHeight, this.maxRowHeight), n = this.createIRGridRow(this.rowManager.getNextRowId(), this.height, t);
    return this.rowManager.addRow(n), n.rowId;
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
    if (this.mergeHandler.checkConflictingInRows(e, t))
      return !1;
    for (let n = e; n <= t; n++) {
      const o = this.getRow(n);
      for (const r of o.getCellGenerator())
        r.isMerged && this.mergeHandler.removeMergeCell(r.row, r.col);
    }
    return this.rowManager.removeRows(e, t), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection"), !0;
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this.mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this.rowManager.runFuncEachRow((n) => {
      for (const o of n.getCellGenerator(e, t))
        o.isMerged && this.mergeHandler.removeMergeCell(o.row, o.col);
    }), this.rowManager.removeColumns(e, t), this.colManager.removeColumns(e, t), this._emitterController.emit("onColumnChanged", { left: e, right: t, type: "removeColumns" }), this._debounceManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection"), e < this.colManager.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = P(e, this.minColWidth, this.maxColWidth), n = this.colManager.addColumn(t);
    return this.rowManager.addColumn((o) => this.createIRGridCell(o.rowId, n.columnId)), this._emitterController.emit("onColumnChanged", { left: n.columnId, right: n.columnId, type: "addColumn" }), n.columnId;
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
  insertRows(e, t = 1, n = this._rowHeaderInfo.defaultSize) {
    const o = this.getRowCount(), r = P(e, this.headerRows, o);
    if (!this.mergeHandler.checkCanInsertRow(r))
      return !1;
    const i = P(n, this.minRowHeight, this.maxRowHeight);
    if (r === o) {
      for (let h = 0; h < t; h++)
        this.addRow(i);
      return !0;
    }
    const l = O(t).map((h) => this.createIRGridRow(r + h, 0, i));
    return this.rowManager.insertRows(r, l), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection"), !0;
  }
  /**
   *
   * @command
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this._colHeaderInfo.defaultSize) {
    const o = this.getColCount(), r = P(e, this.headerColumns, o);
    if (!this.mergeHandler.checkCanInsertColumn(e))
      return !1;
    const i = P(n, this.minColWidth, this.maxColWidth);
    if (r === o) {
      for (let h = 0; h < t; h++)
        this.addColumn(i);
      return !0;
    }
    this.colManager.insertColumns(e, t, i), this.rowManager.insertColumns(e, t, (h, a) => this.createIRGridCell(h, a));
    const l = this._debounceManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
    return e < this.colManager.freezedColumns && l.addTask("updateRowsStickyLeft"), !0;
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
      const o = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      o !== this.getColumnWidth(n) && this.setColumnWidth(
        n,
        P(
          o,
          this._colHeaderInfo.minSize,
          this._colHeaderInfo.maxSize
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
      const o = this.rowManager.getRow(n).rowInnerHeight;
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
  _hasToSplitBeforePasting(e) {
    return !this._copyOptions.rowSpan && !this._copyOptions.colSpan ? !1 : e.flat().some((t) => t.rowSpan > 1 || t.colSpan > 1);
  }
  async _createClipboardGetter() {
    const e = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const t = (await ho.read()).flat();
      for await (const n of t)
        for (const o of Fr)
          e[o] === "" && n.types.includes(o) && (e[o] = await go(await n.getType(o)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = Mo(Mt) ?? "";
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
      ut(
        await this._createClipboardGetter()
      )
    );
  }
  #e(e, t) {
    if (this._copyOptions.rowSpan)
      for (const n of this._generator.getSelectionGenerator(e))
        n.mergeInfo.rowSpan > 1 && this.splitCells(n.row, n.col);
    if (this._copyOptions.colSpan)
      for (const n of this._generator.getSelectionGenerator(e))
        n.mergeInfo.colSpan > 1 && this.splitCells(n.row, n.col);
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = ms(this, this._copyOptions), o = n.getPastingRange(e, t);
    this.#e(o, t);
    const r = n.beforePastingList(o, t);
    r.length !== 0 && (this.onClipboardBeforePaste(o), n.pasteTask(r), this.onClipboardAfterPaste(o), this.select(o));
  }
  hasRow(e) {
    return e < this.getRowCount();
  }
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e) {
    for (const t of this._generator.getSelectionGenerator(e))
      this.onClearCellCheck(t) && t.clear();
  }
  setRowVisible(e, t) {
    return this.mergeHandler.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this.rowManager.setRowVisible(e, t), this._debounceManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection")), !0);
  }
  setRowVisibleBulk(e, t) {
    this.rowManager.setRowVisibleBulk(e, t), this._debounceManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  getRowVisible(e) {
    return this.rowManager.getRowVisible(e);
  }
  setColumnVisible(e, t) {
    return this.mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this.colManager.setColumnVisible(e, t), this.rowManager.setColumnVisible(e, t), this._debounceManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.colManager.freezedColumns && this._debounceManager.addTask("updateRowsStickyLeft"), this._emitterController.emit("onColumnChanged", { left: e, right: e, type: "setVisible" })), !0);
  }
  getColumnVisible(e) {
    return this.colManager.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return cr(this, e);
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
    this.rowManager.freezeRows(e);
    const t = this.rowManager.freezedRows, n = this.rowManager.freezedRowsHeight + (t < this.getRowCount() ? this.rowManager.getRowHeight(t) : 0) + (this.hasHorizontalScroll() ? rt : 0);
    U(this.contextElement, {
      [W.minHeight]: `${n}px`
    }), this._debounceManager.addTask("updateSelection");
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
    this.colManager.freezeColumns(e);
    const t = this.colManager.freezedColumns, n = this.colManager.fixedColumnsWidth + (t < this.getColCount() ? this.getColumnWidth(t) : 0) + (this.hasVerticalScroll() ? rt : 0);
    U(this.contextElement, {
      [W.minWidth]: `${n}px`
    }), this._debounceManager.addTask("updateSelection").addTask("updateRowsStickyLeft");
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  setClipboardOptions(e) {
    Object.assign(this._copyOptions, e);
  }
  sort(e, t, n, o) {
    const r = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(o ?? this.getRowCount(), this.getRowCount());
    this.rowManager.sort(e, t, r, i), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(e) {
    for (const t of this._generator.getSelectionGenerator(e)) {
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
    if (e.some((n) => this.rowManager.isInvalidRowId(n)) || t.some((n) => this.rowManager.isInvalidRowId(n)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((n) => n < this.getFreezedRowCount()) || t.some((n) => n < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be exchanged!");
    if (this.mergeHandler.checkConflictingInRows(...e) || this.mergeHandler.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.rowManager.exchangeRows(e, t), this.onExchangedRows(e, t), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this.colManager.isInvalidColumnId(n)) || t.some((n) => this.colManager.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this.mergeHandler.checkConflictingInColumns(...e) || this.mergeHandler.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this.rowManager.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._debounceManager.addTask("adjustSelection");
  }
  /**
   * @command
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((o) => this.rowManager.isInvalidRowId(o)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((o) => o < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this.mergeHandler.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.rowManager.getAdjustTargetRow(t);
    this.rowManager.moveRows(e, n), this.onMovedRows(e, n), this._debounceManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((o) => this.rowManager.isInvalidRowId(o)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((o) => o < this.getFreezedRowCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this.mergeHandler.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.getAdjustTargetColumn(t);
    this.rowManager.runFuncEachRow((o) => o.moveCells(e, n)), this.onMovedColumns(e, n), this._debounceManager.addTask("adjustSelection");
  }
  getStartOfRowId(e) {
    return this.rowManager.getStartOfRowId(e);
  }
  getStartOfColumnId(e) {
    return this.rowManager.getStartOfColumnId(e);
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
    const { top: t, left: n, bottom: o, right: r } = e;
    if (t === o && n === r)
      return !0;
    const i = this.getRow(t).getCell(n);
    return o === i.bottom && r === i.right;
  }
  render() {
    this.rowManager.renderRows();
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
  onEditCellDone(e, t, n, o, r, i) {
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
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @returns
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  onDoubleClickCell(e) {
  }
  onDropOnCell(e, t, n) {
  }
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.metaInfo.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.metaInfo.object)), !0);
  }
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.metaInfo.disabled !== !0 && e.metaInfo.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
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
    const o = this._gridRangeUtils.getCellMatrixByRange(t).map((r) => r.map((i) => ({
      text: this.onCopyCellText(i),
      cellVisible: i.mergeMain === void 0,
      rowSpan: i.mergeInfo.rowSpan,
      colSpan: i.mergeInfo.colSpan,
      isFormatted: !1
    })));
    Ss(e.clipboardData, o), Lo(Mt, JSON.stringify(o)), this.focus(), this.onCopy(), e.preventDefault();
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
    const n = ut(e.clipboardData);
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
    this._textarea.onEditDone = (n, o, r, i, l, h) => {
      this.onEditCellDone(n, o, r, i, l, h), this.focus(), this._gridContext.gridModeState.value.mode === "edit-cell" && this._gridContext.setIdle();
    }, this._textarea.onEditKeyDown = (n, o, r, i) => this.onEditKeyDown(n, o, r, i), this._textarea.onEnterOnEdit = () => {
      const n = this._cursorManager.getNextYBelow(e.row, e.col, 1);
      e.row !== n && (this.selectCell(n, e.col), this.doEditMode(this.cell(n, e.col)));
    };
    try {
      return this._gridContext.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell: e }
      }), this._textarea.runEditMode(e, t), !0;
    } catch (n) {
      return console.error("IRGrid.doEditMode Error!", n), !1;
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
   */
  getAdjustTargetColumn(e) {
    return e >= this.colManager.length ? this.colManager.length : e < this.colManager.freezedColumns ? this.colManager.freezedColumns : this.rowManager.getStartOfColumnId(e);
  }
  scrollOnColTask(e) {
    const t = P(e, 0, this.getColCount() - 1), n = this.getColumnLeft(t), o = n + this.getColumnWidth(t), { fixedColumnWidth: r, scrollRight: i, scrollLeft: l } = this, h = l + r;
    i < o ? this.contextElement.scrollLeft = l + (o - i) : h > n && (this.contextElement.scrollLeft = n - r);
  }
  scrollOnRowTask(e) {
    const t = P(e, 0, this.getRowCount() - 1), n = this.getRow(t), o = n.top, r = n.top + n.height, { scrollBottom: i, fixedRowHeight: l, scrollTop: h } = this, a = h + l;
    i < r ? this.contextElement.scrollTop = h + (r - i) : a > o && (this.contextElement.scrollTop = o - l);
  }
  onCheckCellReadonly(e) {
    return this._readonly ? !0 : e.metaInfo.readonly === !0;
  }
  initPlugins(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  initTableRowCol() {
    O(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  initColumnHeaderCell(e) {
    e.cellType = "col-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onColumnClick(e);
    };
  }
  initRowHeaderCell(e) {
    e.cellType = "row-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onRowClick(e);
    };
  }
  initBodyCell(e) {
    e.cellType = "body-cell", e.onClear = () => this.onClearCell(e), e.onDblClick = () => this.onDoubleClickCell(e);
  }
  initGridCellPadding() {
    U(this.contextElement, {
      [te.gridVariants.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [te.gridVariants.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [te.gridVariants.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [te.gridVariants.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
    });
  }
  getCellRenderer(e, t, n, o) {
    if (e === "col-header")
      return this._colHeaderInfo.cellRenderer;
    if (e === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    if (e === "body-cell")
      return this._bodyInfo.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  getCellType(e, t) {
    const n = e < this.headerRows, o = !n && t < this.headerColumns;
    return n ? "col-header" : o ? "row-header" : "body-cell";
  }
  getDefaultCellFormat(e, t) {
    const n = {
      commandManager: this,
      getGridStore: () => this._gridStore
    };
    return Object.assign(n, {
      ...this._defaultColumnCellFormat.all,
      ...this._defaultColumnCellFormat[t]
    }), e === "col-header" ? Object.assign(n, this._defaultColumnCellFormat[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, this._defaultColumnCellFormat[`row_header_${t}`]) : Object.assign(n, this._defaultColumnCellFormat[`body_${t}`]), n;
  }
  createIRGridCell(e, t) {
    const n = this.getCellType(e, t), o = n.endsWith("header") ? "th" : "td", r = this.getDefaultCellFormat(n, t), i = this.getCellRenderer(n, e, t, r), l = new As({
      row: e,
      col: t,
      tag: o,
      cellRenderer: i,
      metaInfo: r
    });
    return l.onRightClick = (h, a) => this.onCellRightClick(h, a), l.onCheckReadonly = () => this.onCheckCellReadonly(l), n === "col-header" ? this.initColumnHeaderCell(l) : n === "row-header" ? this.initRowHeaderCell(l) : this.initBodyCell(l), this.onCreatingCell(l), l;
  }
  createIRGridRow(e, t, n) {
    const o = new Os({
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return O(this.getColCount()).forEach((r) => {
      o.addCell(this.createIRGridCell(e, r)), !this.getColumnVisible(r) && o.setColumnVisible(r, !1);
    }), o.onMounted = () => {
      o.freezeColumns(this._rowHeaderInfo.colCount), this.onMountedRow(o.rowId);
    }, o.onChangedHeight = () => {
      O(this.getColCount()).forEach((r) => {
        const i = o.getCell(r), l = i.mergeMain ? i.mergeMain : i.mergeInfo.rowSpan > 1 ? i : null;
        l && (l.height = this.mergeHandler.getMergedRowHeight(l.row, l.row + l.mergeInfo.rowSpan - 1));
      });
    }, o;
  }
  get gridContextElement() {
    return this.contextElement;
  }
}
N([
  V()
], G.prototype, "splitCells");
N([
  V()
], G.prototype, "mergeCells");
N([
  V()
], G.prototype, "setColumnWidth");
N([
  V()
], G.prototype, "setRowHeight");
N([
  V()
], G.prototype, "setCell");
N([
  V()
], G.prototype, "addRow");
N([
  V()
], G.prototype, "removeRows");
N([
  V()
], G.prototype, "removeColumns");
N([
  V()
], G.prototype, "addColumn");
N([
  V()
], G.prototype, "insertRows");
N([
  V()
], G.prototype, "insertColumns");
N([
  V()
], G.prototype, "clearCells");
N([
  V()
], G.prototype, "setRowVisible");
N([
  V()
], G.prototype, "setColumnVisible");
N([
  V()
], G.prototype, "exchangeRows");
N([
  V()
], G.prototype, "exchangeColumns");
N([
  V()
], G.prototype, "moveRows");
N([
  V()
], G.prototype, "moveColumns");
const Lt = (s) => s === "" || !s ? -Number.MAX_SAFE_INTEGER : parseInt(s, 10), pi = (s) => {
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
      o.forEach((r) => e.delete(r));
    },
    setNumberColumns(...o) {
      o.forEach((r) => e.add(r));
    },
    compareTo(o, r) {
      const i = e.has(o.col) ? Lt(o.text) : o.text, l = e.has(r.col) ? Lt(r.text) : r.text;
      return i < l ? -1 : i > l ? 1 : 0;
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${s.uuid}`), s.onColumnClick = (o) => {
        n && this.toggleSortColumn(o);
      };
    },
    sortColumn(o, r) {
      s.sort((i, l) => this.compareTo(i.getCell(o), l.getCell(o)), r);
    },
    toggleSortColumn(o) {
      if (o.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      const r = o.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      t !== o && this.clearSortOrder(), t = o, o.cellInfo = { sortOrder: r }, this.sortColumn(o.col, r);
    }
  };
}, Gr = /^[0-9]*(\.[0-9]+)?$/, Br = (s) => s.text === "" ? !0 : Gr.test(s.text), Vr = (s) => (e, t) => {
  const n = e.getCell(s).text, o = t.getCell(s).text, r = n === "" ? Number.MIN_VALUE : parseFloat(n), i = o === "" ? Number.MIN_VALUE : parseFloat(o);
  return r < i ? -1 : 1;
}, Nr = (s) => (e, t) => e.getCell(s).text < t.getCell(s).text ? -1 : 1, _i = ({
  grid: s,
  onNumberCheck: e = Br
}) => ({
  sortColumn(t, n, o, r) {
    (() => {
      for (let l = o; l < r; l++) {
        const h = s.getRow(l).getCell(t);
        if (e(h))
          return !1;
      }
      return !0;
    })() ? s.sort(Nr(t), n, o, r) : s.sort(Vr(t), n, o, r);
  }
}), Ri = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, xi = /^-?\d+(\.\d+)?$/;
export {
  Ri as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  xi as ALLOW_ONLY_NUMBER_PATTERN,
  gi as CellDropPlugin,
  hi as ColumnFillPlugin,
  di as DefaultKeyPlugin,
  G as IRGrid,
  rs as IRGridButtonRenderer,
  Xt as IRGridCellDropPlugin,
  K as IRGridCellRenderer,
  Vo as IRGridCheckboxRenderer,
  tr as IRGridColumnFillPlugin,
  Zo as IRGridDatePickerRenderer,
  us as IRGridDefaultCellIconButtonRenderer,
  Je as IRGridDefaultCellRenderer,
  Ut as IRGridDefaultKeyPlugin,
  mi as IRGridExchangeByHeaderCellPlugin,
  Nt as IRGridMouseCellSelectorPlugin,
  wi as IRGridMoveColumnsPlugin,
  Ci as IRGridMoveRowsPlugin,
  ir as IRGridPopoverPlugin,
  es as IRGridProgressRenderer,
  as as IRGridRadioCellRenderer,
  Vt as IRGridResizerPlugin,
  hs as IRGridRowNoHeaderCellRenderer,
  qs as IRGridRowSelectionPlugin,
  Xo as IRGridSelectCellRenderer,
  nr as IRGridSingleCellDragPlugin,
  ci as MouseCellSelectorPlugin,
  ai as ResizerPlugin,
  ui as RowSelectionPlugin,
  fi as SingleCellDragPlugin,
  cs as createCellContent,
  ds as createCellContentWithIconButton,
  fs as createCustomRenderer,
  pi as createIRGridColumnSortManager,
  _i as createInferenceSortHandler,
  oi as renderGridButton,
  ri as renderGridCellDefault,
  ii as renderGridCellIconButton,
  Qr as renderGridCheckbox,
  ti as renderGridDatePicker,
  ni as renderGridProgress,
  si as renderGridRadio,
  ei as renderGridSelect,
  li as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
