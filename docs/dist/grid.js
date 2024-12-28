import "./chunks/_init-DoZKvVzM.js";
import { a1 as Kt, a2 as Ut, a3 as Xt, U as Yt, H as Zt, a4 as qt, I as Jt, a5 as Qt, s as en, q as tn, r as nn, t as on, u as $e, a6 as sn, R as rn, S as ln, T as an, a7 as cn, K as X, a8 as dn, a9 as un, aa as hn, ab as gn, ac as fn, ad as mn, ae as Cn, Y as wn, af as pn, ag as Rn, ah as _n, ai as xn, aj as bn, ak as vn, al as yn, am as Sn, an as Ge, ao as En, ap as Tn, aq as Me, ar as A, as as In, at as Ln, au as kn, av as Mn, aw as Hn, F as je, ax as He, ay as Ke, az as zn, aA as An, aB as Dn, aC as Wn, aD as On, aE as Fn, aF as Rt, aG as _t, aH as Ue, aI as Nn, aJ as Bn, aK as Gn, aL as Vn, G as Pn, aM as $n, aN as jn, aO as Kn, aP as Un, aQ as Xn, aR as Yn, aS as Zn, aT as qn, aU as Jn, aV as Qn, aW as Xe, aX as Ye, aY as eo, aZ as to, a_ as no, a$ as oo, b0 as so, b1 as ro, b2 as io, b3 as lo, P as ao, b4 as Ze } from "./chunks/css-D8WWZA3p.js";
import { f as ne, b as co, d as uo, a as ho, c as go, e as fo } from "./chunks/command-manager-DI635ifo.js";
import { I as mo } from "./chunks/index-BK-o6tIM.js";
import { a as ze, g as me, e as Co, b as xt, m as Le, v as wo, c as po, o as Ro, f as _o, s as xo } from "./chunks/floating-BiWR08NB.js";
import { i as bo, d as _e } from "./chunks/index-DUaQNDMW.js";
import { s as vo, t as yo, g as re, a as bt, k as Ce, o as F, f as se, q as So, R as Ve, e as J, C as Eo, n as To } from "./chunks/rx-state-CZ8od4lP.js";
import { c as oe, a as Io } from "./chunks/asserts-CpwDJsre.js";
import { p as Lo } from "./chunks/pick-BLZiDVxr.js";
import { i as vt, r as ko, w as Mo } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { c as qe } from "./chunks/clsx-OuTLNxxd.js";
import { c as Ho } from "./chunks/outside-C4hfBiDS.js";
import { v as zo } from "./chunks/v4-BiqnG7FB.js";
function Ao(r, e, t = 1) {
  const n = [];
  for (let o = r; o < e; o += t)
    n.push(o);
  return n;
}
function W(r, e, t = 1) {
  const { start: n, end: o } = e === void 0 ? { start: 0, end: r } : { start: r, end: e };
  return {
    forEach(s) {
      let i = n;
      for (; i !== o; )
        s(i), i += t;
    },
    map(s) {
      const i = [];
      for (let l = n; l < o; l += t)
        i.push(s(l));
      return i;
    },
    some(s) {
      let i = n;
      for (; i !== o; ) {
        if (s(i))
          return !0;
        i += t;
      }
      return !1;
    },
    asList() {
      return Ao(n, o, t);
    },
    reduce(s, i) {
      let l = i, u = n;
      for (; u !== o; )
        l = s(l, u), u += t;
      return l;
    }
  };
}
function Ae(r, e) {
  return vo(function(t, n) {
    var o = 0;
    t.subscribe(yo(n, function(s) {
      n.next(r.call(e, s, o++));
    }));
  });
}
function Je(r, e, t) {
  return yt(r, t) && St(e, t);
}
function Q(r) {
  const e = parseInt(r.getAttribute("data-row") || "-1"), t = parseInt(r.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function yt(r, e) {
  return r >= e.top && r <= e.bottom;
}
function St(r, e) {
  return r >= e.left && r <= e.right;
}
function xe(r, e, t) {
  t ? r.classList.add(e) : r.classList.remove(e);
}
function Do(r) {
  let e = r.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function Wo(r) {
  let e = r.target, t = r.offsetX, n = r.offsetY;
  for (; e !== r.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const Oo = 20, Fo = 5;
class Z {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getCellInnerWidth(e, t, n) {
    const o = re(e, t), s = [n.icon, n.sortOrder].reduce((u, a) => a ? u + 1 : u, 0) * (Oo + Fo), i = `${n.text ?? ""}`.split(`
`), l = s + o.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + W(1, i.length).reduce(
      (u, a) => Math.max(u, o.calculateWidth(i[a])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    const n = t.gridStore, o = t.paddingTop ?? n.getThemeValue("grid.paddingTop"), s = t.paddingBottom ?? n.getThemeValue("grid.paddingBottom");
    return o + s + Do(e);
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
class No {
  /* 커맨드 실행 인자 */
  _args;
  /* 실행을 위한 컴포넌트 인스턴스 */
  _instance;
  /* 되돌리기 위해 필요한 데이터 context */
  _undoContext;
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
class G extends No {
}
class de extends G {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: Lo(
        this._instance.getCellMetaInfo(e, t),
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
const fe = {
  checkbox: Yt,
  checkboxWrapper: Zt,
  checkboxText: qt,
  checkboxInput: Jt,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, Bo = 16, Be = 6, Go = Be * 2, Vo = 20;
class Et extends Z {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const o = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.classList.add(Kt, fe.checkbox), s.classList.add(Ut, fe.checkboxWrapper), i.type = "checkbox", i.className = fe.checkboxInput, s.appendChild(i), n.icon && s.appendChild(bt(Ce(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${Xt} ${fe.checkboxText}`, l.innerText = n.label, s.appendChild(l);
    }
    return n.horizontalAlign && o.classList.add(fe[`horizontal_${n.horizontalAlign}`]), o.appendChild(s), i.checked = n.text === "true", s.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: a } = n.gridStore, c = new de(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, a.pushCommandBlock(new ne(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, o;
  }
  getCellInnerWidth(e, t, n) {
    const o = re(e, t), s = n.label ? Be + o.calculateWidth(n.label) : 0, i = n.icon ? Be + Vo : 0;
    return Bo + Go + s + i + this.getHorizontalCellPadding(n);
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
function ei(r) {
  const e = new Et(r ?? {});
  return () => e;
}
const be = { select: en, selectInput: tn, selectInputNative: nn, selectInputIcon: on }, Qe = /* @__PURE__ */ new WeakMap(), Po = 20, $o = 4, et = Po + $o, jo = 18, Ko = 150;
class Uo extends Z {
  #e;
  _dropDownItemList = [];
  _dropDownContext = co();
  _items;
  _allowCustomText;
  _allowEdit;
  _showErrorIfCustomText;
  _customDisplayTextFunc;
  _getVisibleFunc;
  #t;
  _itemWidth = null;
  _isExpanded = !1;
  _beforeValue;
  _beforeText;
  _floatingCleanup = () => {
  };
  #r;
  constructor({
    items: e,
    onChange: t,
    allowClear: n,
    customDisplayTextFunc: o,
    allowCustomText: s = !1,
    showErrorIfCustomText: i = !1,
    allowEdit: l = !1,
    getVisibleFunc: u = () => !0,
    mappingType: a = "text"
  }) {
    super(), this.#t = n ?? !1, this.#r = a, this._items = e, this.#e = /* @__PURE__ */ new Map(), this._allowCustomText = s, this._allowEdit = l, l && (this._allowCustomText = !0), o ? this._customDisplayTextFunc = o : this._customDisplayTextFunc = a === "text" ? this.#a.bind(this) : this.#l.bind(this), this._showErrorIfCustomText = i, this._getVisibleFunc = u, t && (this.onChange = t.bind(this));
    for (const c of e) {
      const { item: d, button: C } = uo(c.value, c.text), w = { ...c, buttonElement: C, itemWrapperElement: d };
      this.#e.set(c[this.#r], w), this._dropDownItemList.push(w), this._dropDownContext.ulItems.appendChild(d);
    }
  }
  #a(e, t, n) {
    return t ?? "";
  }
  #l(e, t, n) {
    const o = t ?? "";
    return this.#e.get(o)?.text ?? o;
  }
  getSelectedItemOrNull(e) {
    for (const t of this._dropDownItemList)
      if (t[this.#r] === e) return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: o,
      _allowEdit: s,
      _showErrorIfCustomText: i,
      _customDisplayTextFunc: l,
      _getVisibleFunc: u,
      _dropDownContext: { divDropdown: a },
      _dropDownItemList: c
    } = this, { element: d } = ze({ tag: "div", className: qe(Qt, be.select, be.selectInput) }), { element: C } = ze({ tag: "span", className: be.selectInputNative }), { element: w } = ze({ tag: "i", className: qe(be.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    d.setAttribute("data-has-px", "");
    const L = n.text === "" || n.text === null || n.text === void 0;
    s && d.classList.add("is-editable");
    const R = this.getSelectedItemOrNull(n.text), E = R !== null;
    R ? (C.textContent = l(R.value, R.text, !1), n.value = R.value) : o ? (C.textContent = l(n.value, n.text, !0), n.value = n.text) : (C.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    o && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !L && !E && (d.dataset.error = "true");
    const y = Ho({
      eventElements: [d, a],
      clickOutsideFunc: () => b.hide()
    }), b = {
      show: () => {
        this._isExpanded = !0, I.create(), y.create(), this._beforeValue = n.value, this._beforeText = n.text;
        for (const T of c) {
          const { value: f, text: m, itemWrapperElement: p, buttonElement: S } = T;
          u(T) === !1 ? p.style.display = "none" : p.style.display = "", T[this.#r] === n.text ? p.classList.add($e) : p.classList.remove($e), S.onclick = () => {
            const _ = new de(n.gridStore.commandContext, [e, t, { text: m, value: f }]);
            _.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, f, m), _.onExecute = () => this.onChange(e, t, f, m, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new ne(
              "Change select menu",
              _
            )), n.text = T[this.#r], n.value = f, C.textContent = l(f, m, !1), d.dataset.error && delete d.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, f, m, this._beforeValue, this._beforeText), b.hide();
          };
        }
        const x = this.getItemWidth(n.fontSize || "13px", n.fontFamily || "Pretendard", n), h = d.offsetWidth, g = n.gridStore.getThemeValue("grid.defaultDropdownWidth");
        a.style.maxWidth = `${h > g ? h : g}px`, a.style.width = `${Math.max(x, h)}px`, a.setAttribute("data-row", e.toString()), a.setAttribute("data-col", t.toString()), me("popover").appendChild(a), d.classList.add("is-expanded"), setTimeout(() => {
          a.classList.add("is-expanded"), this._floatingCleanup(), this._floatingCleanup = Co(d.parentElement, a, "bottom-start");
        }, 0);
      },
      hide: () => {
        this._isExpanded = !1, I.destroy(), y.destroy(), d.classList.remove("is-expanded"), a.classList.remove("is-expanded"), setTimeout(() => {
          a.getAttribute("data-row") === e.toString() && a.getAttribute("data-col") === t.toString() && (this._floatingCleanup(), a.remove());
        }, Ko);
      }
    }, I = xt(b), v = () => {
      d.classList.contains("is-expanded") ? b.hide() : b.show();
    };
    return d.onclick = (x) => {
      s && x.target !== w || v();
    }, d.appendChild(C), d.appendChild(w), d;
  }
  onChange(e, t, n, o, s, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const o = re(e, t), s = this.#e.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !s), l = o.calculateWidth(i);
    return et + l + this.getHorizontalCellPadding(n);
  }
  getDropdownWidth(e, t, n) {
    const o = re(e, t), s = this._items.reduce((i, l) => Math.max(i, o.calculateWidth(l.text)), 0);
    return et + s + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const o = Qe.get(this);
    if (o) return o;
    const s = this.getDropdownWidth(e, t, n);
    return Qe.set(this, s), s;
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
  get canBeClear() {
    return this.#t;
  }
}
const ti = (r) => {
  const e = new Uo(r);
  return () => e;
}, De = { input: rn, inputNative: ln, inputSuffix: an }, Xo = 28, le = /* @__PURE__ */ new WeakMap();
class Yo extends Z {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = bo.t("datePicker.dateFormat"),
    minDate: n = Le().getStoreValue("datePicker.minDate"),
    maxDate: o = Le().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: s = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = o, this._allowedEmptyString = s, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return re(e, t).calculateWidth(n.text || this._format) + Xo + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const o = document.createElement("div"), s = document.createElement("input"), i = document.createElement("button"), l = document.createElement("i"), {
      _minDate: u,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: d
    } = this;
    if (s.readOnly = !0, s.maxLength = c.length, o.setAttribute("data-has-px", ""), o.classList.add(De.input, sn), s.classList.add(De.inputNative), i.classList.add(De.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), s.type = "text", s.placeholder = c, n.text !== "") {
      const w = _e(n.text, c, !0);
      w.isValid() || (n.text = le.get(n)), (w.isBefore(u) || w.isAfter(a)) && (n.text = le.get(n));
    }
    !d && (n.text === "" || n.text === void 0) && (n.text = le.has(n) ? le.get(n) : _e().format(c)), s.value = n.text || "", le.set(n, n.text ?? ""), i.appendChild(l), o.appendChild(s), o.appendChild(i);
    const C = ho({
      uuid: zo(),
      refElement: o,
      minDate: u,
      maxDate: a,
      onClick: (w) => {
        const L = n.text, R = _e(w).format(c), E = new de(n.gridStore.commandContext, [e, t, { text: R }]);
        E.onUndo = () => {
          this.onDateClick(e, t, L ?? "");
        }, E.onExecute = () => {
          this.onDateClick(e, t, R);
        }, n.gridStore.commandManager.pushCommandBlock(new ne("Change datePicker", E)), s.value = R, n.text = R, le.set(n, R), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, R), C.hide();
      }
    });
    return i.onclick = () => {
      if (!C.visible) {
        const w = _e(n.text, c, !0);
        w.isValid() ? C.update(w.toDate(), w.toDate()) : C.update(/* @__PURE__ */ new Date(), null), C.show();
      }
    }, o;
  }
  get renderType() {
    return "datePicker";
  }
}
const ni = (r) => {
  const e = new Yo(r);
  return () => e;
}, ve = {
  progress: dn,
  progressVariants: un
}, Zo = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, qo = 100, Jo = 100;
class Qo extends Z {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: o = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = o;
  }
  render(e, t, n) {
    const {
      _min: o,
      _max: s,
      _afterDecimalLen: i,
      _defaultIntent: l
    } = this, u = document.createElement("div"), a = document.createElement("div");
    u.setAttribute("data-has-px", ""), u.className = cn, a.className = ve.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${ve.progress}--${c}`);
    const C = (F(parseFloat(n.text || "0"), o, s) - o) / (s - o) * qo;
    return X(a, {
      [ve.progressVariants.progressPercent]: `${C}%`,
      [ve.progressVariants.progressText]: `'${C.toFixed(i)}%'`
    }), u.appendChild(a), u;
  }
  getCellInnerWidth(e, t, n) {
    return Jo + this.getHorizontalCellPadding(n);
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
const oi = (r = Zo) => {
  const e = new Qo(r);
  return () => e;
}, es = 20, ts = 4, ns = 24, os = 24, ss = 29, tt = {
  primary: wn,
  secondary: pn,
  tertiary: Rn,
  transparent: _n,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class rs extends Z {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = ss : e.outlineStyle ? this._extraWidth = os : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: o,
      outlineStyle: s,
      defaultColor: i,
      defaultIcon: l,
      defaultLabel: u
    } = this.args, a = document.createElement("div"), c = document.createElement("button");
    a.className = hn, c.classList.add(gn, "button");
    const d = n.intent ?? i;
    d && c.classList.add(tt[d]), s ? (a.setAttribute("data-has-px", ""), a.classList.add(fn)) : o && a.classList.add(mn), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(tt[n.horizontalAlign]), c.onclick = (L) => this.onClick(L, e, t);
    const C = n.icon ?? l, w = o ? n.text ?? "" : n.label ?? u ?? "";
    if (C) {
      const L = document.createElement("i");
      L.className = `${Cn} ir-icon ${Ce(C)}`, c.appendChild(L);
    }
    if (w) {
      const L = se("span");
      if (L.innerText = w, o) {
        const R = document.createElement("div");
        L.classList.add("text--multi-ellipsis"), R.setAttribute("data-has-px", ""), R.appendChild(L), a.insertAdjacentElement("afterbegin", R);
      } else
        L.classList.add("text--ellipsis"), c.appendChild(L);
    }
    return a.appendChild(c), a;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? es + ts : 0;
  }
  getCellInnerWidth(e, t, n) {
    const o = re(e, t);
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
  get canBeClear() {
    return !1;
  }
}
const si = (r) => {
  const e = new rs(r ?? {});
  return () => e;
}, ye = { radio: bn, radioWrapper: vn, radioInput: yn, radioText: Sn }, is = 16, Tt = 6, ls = Tt * 2;
class It extends Z {
  _radioItemStack = [];
  constructor({ onRadioClick: e }) {
    super(), e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  render(e, t, n) {
    const o = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (o.setAttribute("data-has-px", ""), o.className = `${xn} ${ye.radio}`, s.className = ye.radioWrapper, i.type = "radio", i.className = ye.radioInput, s.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = ye.radioText, l.innerText = n.label, s.appendChild(l);
    }
    return o.appendChild(s), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), s.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new de(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        a && (l.setCell(a.row, a.col, { text: "true" }), this.onRadioClick(a.row, a.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new ne("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, o;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const o = re(e, t), s = n.label ? Tt + o.calculateWidth(n.label) : 0;
    return is + ls + s + this.getHorizontalCellPadding(n);
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
const ri = ({ onRadioClick: r }) => {
  const e = new It({ onRadioClick: r });
  return () => e;
};
function as(r) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = Ge, r.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${Ce(r.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (r.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${Ce(r.icon)}`, r.iconColor && t.style.setProperty("--ir-icon-foreground-color", r.iconColor), e.appendChild(t);
  }
  if (r.text) {
    const t = document.createElement("span");
    t.innerText = r.text, e.appendChild(t);
  }
  return e;
}
function cs(r, e, t, n) {
  const o = document.createElement("div");
  if (o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.className = Ge, t.icon) {
    const s = document.createElement("button"), i = document.createElement("i");
    s.setAttribute("type", "button"), s.classList.add("icon-button", En), s.onclick = (l) => {
      n && n(l, r, e);
    }, i.className = `ir-icon ${Ce(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), s.appendChild(i), o.appendChild(s);
  }
  if (t.text) {
    const s = document.createElement("span");
    s.innerText = t.text, o.appendChild(s);
  }
  return o;
}
class Pe extends Z {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const o = as(n), {
      ellipsis: s = !0,
      whiteSpace: i
    } = this._args;
    return s && o.classList.add(Tn), i && (o.style.whiteSpace = i), o;
  }
  get renderType() {
    return "default";
  }
}
class ds extends Z {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return cs(e, t, n, (o, s, i) => this.onClick(o, s, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class us extends Z {
  _fixedRowCount;
  _captionList;
  _prefix = "";
  constructor(e, ...t) {
    super(), this._fixedRowCount = e, this._captionList = t;
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
    const o = document.createElement("div"), s = document.createElement("span"), i = e - this._fixedRowCount;
    o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.className = Ge;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return s.innerText = l, n.text = l, o.appendChild(s), o;
  }
}
const ii = () => {
  const r = new Pe();
  return () => r;
};
function li({ onClick: r }) {
  const e = new ds({ onClick: r });
  return () => e;
}
function ai(r, ...e) {
  const t = new us(r, ...e);
  return () => t;
}
const nt = /* @__PURE__ */ new WeakMap();
class Lt extends Pe {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function ci(r) {
  const e = nt.get(r);
  if (e)
    return e;
  const t = new Lt(r);
  return nt.set(r, t), t;
}
function hs(r, e) {
  return {
    getPastingRange: t,
    beforePastingList: n,
    pasteTask: o
  };
  function t(s, i) {
    if (i.length === 0) throw new Error("No pasting data.");
    const l = { ...s }, u = i.length, a = i[0].length, c = l.top + u, d = l.left + a;
    for (let C = s.bottom + 1; C < c; ++C)
      (r.hasRow(C) || r.onAutoInsertRow(C)) && (l.bottom = C);
    for (let C = s.right + 1; C < d; ++C)
      (r.hasColumn(C) || r.onAutoInsertColumn(C)) && (l.right = C);
    return l;
  }
  function n(s, i) {
    if (i.length === 0) throw new Error("No pasting data.");
    const l = i.length, u = i[0].length, a = [], c = s.bottom - s.top + 1, d = s.right - s.left + 1;
    function C(w, L) {
      const [R, E] = [w % l, L % u];
      return i[R][E];
    }
    for (const { y: w, x: L } of So(c, d)) {
      const [R, E] = [w + s.top, L + s.left];
      if (!r.hasRow(R) && r.onAutoInsertRow(R) && (r.addRow(), r.onAutoInsertedRow(R)), !r.hasColumn(E) && r.onAutoInsertColumn(E) && (r.addColumn(), r.onAutoInsertedColumn(E)), !r.hasRow(R) || !r.hasColumn(E)) continue;
      const y = r.cell(R, E), b = C(w, L);
      b.cellVisible && r.onCheckPasteCell(y, b.text) && a.push({
        cell: y,
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
  function o(s) {
    for (const { cell: i, cellMetaInfo: l } of s) {
      const { rowSpan: u, colSpan: a, cellVisible: c } = l;
      if (!c) continue;
      const { row: d, col: C } = i;
      if (u > 1 || a > 1) {
        const L = { top: d, left: C, bottom: d + u - 1, right: C + a - 1 };
        r.mergeCells(L.top, L.left, L.bottom, L.right);
      }
      r.setCell(d, C, { text: l.text }), r.onClipboardAfterPasteCell(i);
    }
  }
}
function gs(r) {
  return JSON.stringify(r);
}
function fs(r) {
  return JSON.parse(r);
}
function ms(r) {
  const e = [], t = [];
  for (const n of r)
    switch (n) {
      case " ":
        t.push(" ");
        break;
      case `
`:
        e.push(document.createTextNode(t.join(""))), e.push(document.createElement("br")), t.length = 0;
        break;
      default:
        t.push(n);
        break;
    }
  return e.push(document.createTextNode(t.join(""))), e;
}
function Cs(r) {
  const e = document.createElement("table");
  return r.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((o) => o.cellVisible).forEach((o) => {
      const s = document.createElement("td");
      s.setAttribute("rowSpan", `${o.rowSpan}`), s.setAttribute("colSpan", `${o.colSpan}`), s.append(...ms(o.text)), n.append(s);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function ws(r) {
  const n = new DOMParser().parseFromString(r, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const o = Array(n.length).fill(null).map(() => []);
  let s = 0;
  for (const u of n) {
    const a = u.querySelectorAll("td");
    let c = i(0);
    for (const d of a)
      (d.rowSpan > 1 || d.colSpan > 1) && l(s, c, d.rowSpan, d.colSpan), o[s][c] = {
        text: ps(d),
        rowSpan: d.rowSpan,
        colSpan: d.colSpan,
        cellVisible: !0,
        isFormatted: d.hasAttribute("class")
      }, c = i(c);
    ++s;
  }
  return o;
  function i(u) {
    let a = u;
    for (; o[s][a]; )
      ++a;
    return a;
  }
  function l(u, a, c, d) {
    for (let C = u; C < u + c; ++C)
      for (let w = a; w < a + d; ++w)
        o[C][w] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function ps(r) {
  const e = [], t = [];
  let n = r.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return Rs(t);
}
function Rs(r) {
  const e = [];
  let t = !1;
  for (const n of r) {
    if (n === `

`) {
      e.push(`
`);
      continue;
    }
    let o = !1;
    for (const s of n)
      switch (s) {
        case " ":
        case `
`:
          o && (t = !0);
          break;
        default:
          t && (e.push(" "), t = !1), o = !0, e.push(s === " " ? " " : s);
          break;
      }
  }
  return e.join("");
}
function _s(r) {
  if (r.length === 0) return !0;
  const e = r[0].length;
  return r.every((t) => t.length === e);
}
const kt = "	", Mt = `
`;
function xs(r) {
  if (!_s(r)) throw new Error("Wrong text matrix dimension");
  return r.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(kt)
  ).join(Mt);
}
function bs(r) {
  if (r.length === 0) return [];
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
  function s() {
    o(), (e.length === 0 || n.length === e[0]?.length) && e.push([...n]), n.length = 0;
  }
  for (const i of r)
    i !== "\r" && (i === kt ? o() : i === Mt ? s() : t.push(i));
  return (t.length > 0 || n.length > 0) && s(), e;
}
const Ie = [
  {
    format: "ir-grid/cell",
    parseFunc: fs,
    payloadFunc: gs
  },
  {
    format: "text/html",
    parseFunc: ws,
    payloadFunc: Cs
  },
  {
    format: "text/plain",
    parseFunc: bs,
    payloadFunc: xs
  }
];
function vs(r, e) {
  Ie.forEach(
    ({ format: t, payloadFunc: n }) => r.setData(t, n(e))
  );
}
function Ht(r) {
  return r.isFormatted && r.text.startsWith("#");
}
function ys(r) {
  return r.some((e) => e.some((t) => Ht(t)));
}
function Ss(r, e) {
  for (let t = 0; t < r.length; ++t) {
    const n = r[t].length;
    for (let o = 0; o < n; ++o)
      e[t]?.[o]?.text && Ht(r[t][o]) && (r[t][o].text = e[t][o].text);
  }
  return r;
}
function ot(r) {
  for (const { format: e, parseFunc: t } of Ie) {
    const n = r.getData(e);
    if (n !== "") {
      const o = t(n);
      if (!ys(o))
        return o;
      const s = r.getData(Ie[2].format);
      return Ss(
        o,
        Ie[2].parseFunc(s)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
class Es extends Ve {
  constructor() {
    super([]);
  }
}
class Ts extends Ve {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class ue {
  _rowManager;
  _colManager;
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let s = e; s <= n; s++)
      for (let i = t; i <= o; i++)
        yield this._rowManager.cell(s, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let s = 0; s < this._rowManager.headerRows; ++s)
      for (let i = t; i <= o; ++i)
        yield this._rowManager.cell(s, i);
    for (let s = e; s <= n; ++s)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(s, i);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const o of this.getSelectionGenerator(e))
      t(o) && n++;
    return n;
  }
}
class ke {
  #e;
  #t;
  constructor(e) {
    this.#e = e, this.#t = new ue(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this.#e.headerRows, this.#e.getRowCount() - 1], [o, s] = [this.#e.headerColumns, this.#e.getColCount() - 1], i = {
      top: F(e.top, t, n),
      left: F(e.left, o, s),
      bottom: F(e.bottom, t, n),
      right: F(e.right, o, s)
    };
    return i.top > n || i.bottom < t || i.left > s || i.right < o ? null : i;
  }
  extendRange(e) {
    const t = this.#t, n = { ...e }, o = [...t.getSelectionGenerator(e)];
    for (; o.length; ) {
      const s = o.pop();
      if (!s.isMerged && !s.mergeMain) continue;
      const i = s.mergeMain ? s.mergeMain.mergeArea : s.mergeArea;
      if (i.top < n.top) {
        const l = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const u of l)
          o.push(u);
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
        for (const u of l)
          o.push(u);
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
        for (const u of l)
          o.push(u);
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
        for (const u of l)
          o.push(u);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        W(e.left, e.right + 1).map((o) => this.#e.cell(n, o).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        W(e.left, e.right + 1).map((o) => this.#e.cell(n, o))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const o = this.#e.getRowCount() - 1;
    return [...this.#t.getSelectionGenerator({ top: 0, left: e, bottom: o, right: t })];
  }
  getColumnListByColumn(e, t) {
    return W(e, t + 1).map((n) => this.#e.getColumn(n));
  }
}
class Is extends Ve {
  constructor(e) {
    super(null, (t) => {
      const n = new ke(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        Ae((o) => {
          if (!o || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: s, range: i } = o;
          return s.row >= i.top && s.row <= i.bottom && s.col >= i.left && s.col <= i.right ? o : {
            activeCell: e.cell(i.top, i.left),
            range: o.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        Ae((o) => {
          if (!o) return null;
          const s = n.adjustRange(o.range);
          return s ? { activeCell: o.activeCell, range: s } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        Ae((o) => o ? { activeCell: o.activeCell, range: n.extendRange(o.range) } : null)
      );
    });
  }
}
class Ls {
  #e;
  #t;
  #r;
  constructor(e) {
    this.#e = new Is(e), this.#t = new Ts(), this.#r = new Es();
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
    return this.#r;
  }
}
const ks = /^var\((.+)\)$/;
function Ms(r) {
  const e = ks.exec(r);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${r}' is not custom-property name.`);
}
const Hs = [
  A.zLevel0,
  A.zLevel1,
  A.zLevel2,
  A.zLevel3,
  A.zLevel4,
  A.zLevel5,
  A.zLevel6,
  A.zLevel7,
  A.zLevel8,
  A.zLevel9
], U = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
};
class zs {
  #e;
  #t;
  #r = -1;
  #a = -1;
  #l = 1;
  #u = 1;
  #s = !0;
  #o;
  #g;
  #d = null;
  #f;
  #m = "body-cell";
  constructor({ row: e, col: t, tag: n, props: o, cellRenderer: s }) {
    this.#t = { ...o }, this.#e = n, this.#g = s, this.#r = e, this.#a = t;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(Me) || this.element.tagName === "TH";
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
    return this.#l > 1 || this.#u > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this.#C().getCellInnerHeight(this.element, this.#t);
  }
  get fontSize() {
    return this.#t.fontSize ? this.#t.fontSize : this.#d ? getComputedStyle(this.#d).fontSize : st("grid.defaultFontSize", je.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this.#t.fontFamily ? this.#t.fontFamily : this.#d ? getComputedStyle(this.#d).fontFamily : st("grid.defaultFontFamily", je.fontFamilyBase, "fontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this.#l - 1,
      right: this.col + this.#u - 1
    };
  }
  /**
   * IRGrid 셀 내부 너비 계산 값
   */
  get innerWidth() {
    return this.#C().getCellInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  /**
   * 렌더러 내부에서 사용하는 별도 컨텐츠 너비 계산 값
   * @example Select 렌더러의 Dropdown 영역 너비
   */
  get rendererInnerWidth() {
    return this.#C().getRendererInnerWidth(this.fontSize, this.fontFamily, this.#t);
  }
  get mergeInfo() {
    return {
      rowSpan: this.#l,
      colSpan: this.#u
    };
  }
  get mergeMain() {
    return this.#o;
  }
  get row() {
    return this.#r;
  }
  get col() {
    return this.#a;
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
    return this.#g;
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
    return this.#m;
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
    return this.#d === null && (this.#d = this.#I()), this.#d;
  }
  get editable() {
    return !(this.#t.editable === !1 || this.#t.disabled || this.onCheckReadonly() || this.#C().editable === !1);
  }
  get cellInfo() {
    return this.#t;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(Ms(A.stickyCellZId));
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
    this.#m = e;
  }
  set height(e) {
    e ? X(this.element, { [A.cellHeight]: `${e}px` }) : X(this.element, { [A.cellHeight]: "" });
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    e === 1 && (this.height = null), this.element.rowSpan = e, this.element.colSpan = t, this.#l = e, this.#u = t, this.render();
  }
  set mergeMain(e) {
    this.#o = e, this.visible = e === void 0;
  }
  set row(e) {
    this.#r = e, this.#d && this.element.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this.#a = e, this.#d && this.element.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this.#g = e, this.render();
  }
  /*
   * Private Methods
   */
  #h() {
    for (; this.element.lastChild; )
      this.element.lastChild.remove();
  }
  #n(...e) {
    this.mergeMain ? this.mergeMain.element.classList.remove(...e) : this.element.classList.remove(...e);
  }
  #c(e) {
    this.#f || (this.#f = document.createElement("span")), this.#f.className = e, this.element.appendChild(this.#f);
  }
  #i() {
    this.#f && (this.#f.remove(), this.#f = void 0);
  }
  #C() {
    if (this.#g instanceof Z)
      return this.#g;
    if (typeof this.#g == "function") {
      const e = this.#g(this.row, this.col, this.#t);
      if (e instanceof Z)
        return e;
      if (e instanceof HTMLElement)
        return new Lt(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  #b() {
    return this.#C().render(this.row, this.col, this.#t);
  }
  #R() {
    this.element.classList.add(Me);
  }
  #v() {
    this.element.classList.remove(Me);
  }
  #_(e) {
    this.element.style.left = `${e}px`;
  }
  #x() {
    this.element.style.removeProperty("left");
  }
  #y(e) {
    this.element.style.top = `${e}px`;
  }
  #S() {
    this.element.style.removeProperty("top");
  }
  #p(e, t) {
    t !== void 0 ? X(this.element, { [e]: `${t}px` }) : X(this.element, { [e]: void 0 });
  }
  #E() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: o
    } = this.#t;
    this.#p(A.cellTopPadding, e), this.#p(A.cellLeftPadding, t), this.#p(A.cellRightPadding, n), this.#p(A.cellBottomPadding, o);
  }
  #T() {
    xe(this.element, "is-disabled", this.#t.disabled === !0), xe(this.element, "is-asc", this.#t.sortOrder === "ASC"), xe(this.element, "is-desc", this.#t.sortOrder === "DESC"), this.updateReadonlyStatus(), this.#t.isError ? this.#c(In) : this.#t.hasMemo ? this.#c(Ln) : this.#f && this.#i(), this.#w("horizontalAlign", "textAlign"), this.#w("verticalAlign", "verticalAlign"), this.#w("fontSize", "fontSize"), this.#w("fontFamily", "fontFamily"), this.#w("textColor", "color"), this.#w("backColor", "backgroundColor");
  }
  #w(e, t) {
    this.#t[e] && Object.assign(this.element.style, { [t]: this.#t[e] });
  }
  #I() {
    const e = document.createElement(this.#e);
    return e.rowSpan = this.#l, e.colSpan = this.#u, e.classList.add(kn, this.#e === "th" ? Mn : Hn), e.setAttribute("data-row", this.#r.toString()), e.setAttribute("data-col", this.#a.toString()), e.setAttribute("data-type", this.#m), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      oe(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
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
    xe(this.element, "is-readonly", this.onCheckReadonly());
  }
  setStickyZIndex(e, t, n) {
    this.element.style.removeProperty(A.stickyCellZId), this.#v(), this.#S(), this.#x(), e !== null && (X(this.element, { [A.stickyCellZId]: Hs[e] }), this.#R(), e >= U.lv5 && this.#y(t), (e === U.lv9 || e === U.lv7 || e === U.lv6 || e === U.lv4 || e === U.lv3) && this.#_(n));
  }
  replaceElement(e) {
    this.#h(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  render() {
    this.#d !== null && this.visible && (this.#h(), this.#T(), this.#E(), this.element.appendChild(this.#b()));
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
function st(r, e, t) {
  const n = Le().getStoreValue(r);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
const ae = 1, ce = 1;
class As {
  _grid;
  _rowType;
  _cells;
  _rowId;
  _rowElement = null;
  _isMounted;
  _top = -1;
  _maxCellHeight = 0;
  _stickyColumns = 0;
  _height = 0;
  _visible = !0;
  _isCalledOnMounted = !1;
  constructor({ grid: e, rowId: t, height: n, top: o, rowType: s }) {
    this._grid = e, this._cells = [], this._rowType = s, this._rowId = t, this._maxCellHeight = n, this._isMounted = !1, this._height = n, this._top = o;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this.element.classList.contains(He);
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this.element.classList.contains(Ke);
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  initRowElement() {
    const e = document.createElement("tr");
    X(e, {
      [A.cellHeight]: `${this._height}px`
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
    return this._height + ae;
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
    this._height = e, X(this.element, {
      [A.cellHeight]: `${e}px`
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
    return W(e, t).reduce((n, o) => {
      const s = this._cells[o];
      return s.visible && s.mergeInfo.colSpan === 1 ? Math.max(n, s.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  removeCells(e, t) {
    W(e, t + 1).forEach((o) => this._cells[o].element.remove());
    const n = 1 + t - e;
    this._cells.splice(e, n), W(e, this._cells.length).forEach((o) => {
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
    return this.isHeaderRow ? t ? U.lv9 : U.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? U.lv7 : U.lv6 : U.lv5 : t ? e < this._grid.headerColumns ? U.lv4 : U.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), this._rowElement && (this._rowElement.appendChild(e.element), e.setStickyZIndex(this.getFreezedCellType(e.col), this._top, this._grid.getColumnLeft(e.col)), e.render());
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    const n = this._cells[t].element;
    W(t, this._cells.length).forEach((o) => {
      this._cells[o].col += e.length, this._cells[o].render();
    }), this._cells.splice(t, 0, ...e), e.forEach((o) => {
      o.setStickyZIndex(this.getFreezedCellType(o.col), this._top, this._grid.getColumnLeft(o.col)), n.insertAdjacentElement("beforebegin", o.element), this.isMounted && o.render();
    });
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (wo(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${o}`);
    const [s, i, l, u] = e < n ? [e, t, n, o] : [n, o, e, t];
    this._cells = [
      ...this._cells.slice(0, s),
      ...this._cells.slice(l, u + 1),
      ...this._cells.slice(i + 1, l),
      ...this._cells.slice(s, i + 1),
      ...this._cells.slice(u + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._cells.splice(e, t - e + 1), s = e < n ? n - o.length : n;
    this._cells.splice(s, 0, ...o), this.reorderCells();
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
    this._cells.forEach((o, s) => o.updateCellMetaInfo(n, t?.[s]));
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
    e && this.element.classList.add(Ke), this.element.classList.add(He), this.updateStickyStatus();
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
    this.element.classList.remove(He), this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
  }
  onChangedHeight(e, t) {
  }
}
class Ds {
  _headerRows;
  _rowList = [];
  _visibleRowList = [];
  _freezedRows;
  _rowsHeight;
  _headerRowsHeight;
  _freezedRowsHeight;
  #e;
  constructor(e, t, n) {
    this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0, this.#e = n;
  }
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
    W(this.headerRows, this._rowList.length).forEach((e) => this._rowList[e].unmount()), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this.updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((o) => {
      const s = W(t).map((i) => n(o.rowId, e + i));
      o.insertCells(s, e);
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
      const s = t[o];
      s.top = n, this.updateRowHeight(s, "add"), n = s.bottom;
    }
    this.updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._rowList.splice(e, t - e + 1);
    o.forEach((i) => i.unmount());
    const s = e < n ? n - o.length : n;
    this._rowList.splice(s, 0, ...o), this.updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${o}`);
    const [s, i, l, u] = e < n ? [e, t, n, o] : [n, o, e, t], a = this._rowList.slice(s, i + 1), c = this._rowList.slice(l, u + 1);
    a.forEach((d) => d.unmount()), c.forEach((d) => d.unmount()), this._rowList = [
      ...this._rowList.slice(0, s),
      ...c,
      ...this._rowList.slice(i + 1, l),
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
      const s = this._rowList[e + o], i = t[o];
      s.visible !== i && (this.updateRowHeight(s, i ? "show" : "hide"), s.visible = i);
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
    const n = e.height + ae, o = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += o;
  }
  sort(e, t, n, o) {
    const s = this._rowList.slice(0, n), i = this._rowList.slice(n, o), l = this._rowList.slice(o);
    i.forEach((u) => u.unmount()), i.sort((u, a) => t === "ASC" ? e(u, a) : -e(u, a)), this._rowList = [
      ...s,
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
    const o = t ?? 0, s = n ?? this.length;
    for (let i = o; i < s; i++)
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
    let s = this.getRow(o.curIndex);
    for (; !(t >= o.scrollTop + s.top && t <= o.scrollTop + s.bottom); ) {
      if (t < o.scrollTop + s.top) {
        if (o.endIndex === o.curIndex)
          return null;
        o.endIndex = o.curIndex;
      } else {
        if (o.startIndex === o.curIndex)
          return null;
        o.startIndex = o.curIndex;
      }
      o.curIndex = Math.floor((o.startIndex + o.endIndex) / 2), s = this.getRow(o.curIndex);
    }
    return s;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let o = e.initValue;
    for (let s = t; s < n; s++)
      o = e.func(o, this._rowList[s]);
    return o;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const s = n + Math.floor((o - n) / 2), i = t[s];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? o = s - 1 : n = s + 1;
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
const Se = -1, Ws = [
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
class Os {
  #e;
  #t;
  #r;
  #a = /* @__PURE__ */ new Set();
  #l = [];
  #u = Se;
  constructor(e) {
    const { grid: t, contextElement: n } = e;
    this.#e = e, this.#t = new ke(t), this.#r = document.createElement("tr"), this.#r.className = zn, this.#r.dataset.hidden = "true", X(this.#r, {
      [A.emptyRowHeight]: "0"
    }), t.addGlobalEventListener(n, "scroll", () => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll"), this.forceRunTasks();
    });
  }
  renderTask() {
    const e = new Set(this.#a);
    this.#a.clear(), this.#u = Se;
    for (const t of Ws)
      if (!(!e.has(t) || t === "nothing"))
        try {
          this[t].call(this);
        } catch (n) {
          console.error(t, n);
        }
    this.#l.forEach((t) => t()), this.#l.length = 0;
  }
  forceRunTasks() {
    this.#u !== Se && cancelAnimationFrame(this.#u), this.renderTask();
  }
  addTask(e) {
    return this.#a.add(e), this.#u === Se && (this.#u = requestAnimationFrame(() => this.renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  getActualBodyRowsInfo() {
    const { grid: e, contextElement: t } = this.#e, n = e.getRowCount() - 1, o = Math.min(
      e.getFreezedRowCount(),
      n
    ), { fixedRowHeight: s } = e, { scrollTop: i, clientHeight: l } = t, u = e.getRowByTop(s + i + 1) ?? e.firstRow, a = e.getRowByTop(i + l) ?? e.lastRow, c = W(0, o).asList();
    if (!u || !a) return { emptyRowHeight: 0, viewRowList: c };
    const d = u.getTopRowId(), C = a.getBottomRowId(), w = e.getRow(Math.max(d - 2, o)), L = e.getRow(Math.min(C + 2, n));
    return {
      emptyRowHeight: w.top - s,
      // viewport row 영역 list에 추가
      viewRowList: c.concat(W(w.rowId, L.rowId + 1).asList())
    };
  }
  getGridRow(e) {
    const t = parseInt(e.dataset.row ?? "", 10);
    return t !== t ? null : this.#e.grid.getRow(t);
  }
  virtualRender() {
    const { grid: e, store: t } = this.#e, n = t.elements.tbody, { emptyRowHeight: o, viewRowList: s } = this.getActualBodyRowsInfo(), i = new Set(s), l = e.getFreezedRowCount(), { headerRows: u } = e;
    let a = n.lastElementChild;
    for (; a; ) {
      const C = this.getGridRow(a);
      a = a.previousElementSibling, C && !i.has(C.rowId) && C.unmount();
    }
    o === 0 ? this.#r.dataset.hidden = "true" : (this.#r.dataset.hidden = "false", X(this.#r, {
      [A.emptyRowHeight]: `${o}px`
    }));
    let c = null, d = !1;
    for (const C of s) {
      const w = e.getRow(C);
      if (C < l ? !w.isFreezed && w.freeze(C < u) : d === !1 && (c === null ? n.insertAdjacentElement("afterbegin", this.#r) : c.insertAdjacentElement("afterend", this.#r), d = !0, c = this.#r), w.isMounted) {
        c = w.element;
        continue;
      }
      w.visible && (c === null ? w.mount(n, "afterbegin") : w.mount(c, "afterend"), c = w.element);
    }
  }
  updateRowsStickyLeft() {
    const { grid: e } = this.#e;
    for (let t = 0; t < e.getRowCount(); t++)
      e.getRow(t).updateStickyStatus();
  }
  updateSelection() {
    this.#e.selector.update();
  }
  updateLeft() {
    const { grid: e } = this.#e, t = e.getColCount();
    let n = 0, o = 0;
    for (; n < t; ) {
      const s = e.getColumn(n);
      s.left = o, s.visible && (o = s.right), ++n;
    }
  }
  updateTop() {
    const { grid: e } = this.#e, t = e.getRowCount();
    let n = 0, o = 0;
    for (; n < t; ) {
      const s = e.getRow(n);
      s.top = o, s.visible && (o = s.bottom), ++n;
    }
  }
  updateColumnId() {
    const { grid: e } = this.#e, t = e.getColCount();
    let n = 0;
    for (; n < t; ) {
      const o = e.getColumn(n);
      o.columnId = n, ++n;
    }
    e.render();
  }
  updateRowId() {
    const { grid: e } = this.#e, t = e.getRowCount(), n = e.getFreezedRowCount();
    let o = 0;
    for (; o < t; ) {
      const s = e.getRow(o);
      s.rowId = o, s.isFreezed && o >= n ? s.unfreeze() : !s.isFreezed && o < n && s.freeze(), s.render(), ++o;
    }
  }
  adjustSelection() {
    const { grid: e, store: t } = this.#e, { gridStateContext: n } = t, o = n.selectionRangeState.value;
    if (!o) return e.releaseCells();
    const s = this.#t.adjustRange(o.range);
    if (!s) return e.releaseCells();
    e.select(this.#t.extendRange(s));
  }
  updateSelectionByScroll() {
    this.#e.selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this.#e.store.elements.wrapper.style.height = `${this.#e.grid.height}px`;
  }
  generateScrollBarClass() {
    this.#e.grid.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this.#l.push(e);
  }
  get isScheduled() {
    return this.#a.size > 0;
  }
}
class rt {
  #e;
  #t = 0;
  #r = 0;
  #a = 0;
  #l = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this.#e = document.createElement("col"), this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this.#r;
  }
  get left() {
    return this.#t;
  }
  get width() {
    return this.#a;
  }
  get widthWithBorder() {
    return this.#a + ce;
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
    this.#r = e, this.#e.dataset.column = e.toString();
  }
  set left(e) {
    this.#t = e, this.#e.dataset.left = e.toString();
  }
  set width(e) {
    this.#a = e, this.#e.style.width = `${this.widthWithBorder}px`, this.#e.dataset.width = e.toString();
  }
  remove() {
    this.#e.remove();
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class Fs {
  _colGroup;
  _rowHeaderColumns;
  #e;
  _freezedColumns;
  _columnsList = [];
  _visibleColumnsList = [];
  _columnsWidth = 0;
  _rowHeaderColumnsWidth = 0;
  _freezedColumnsWidth = 0;
  constructor(e, t, n) {
    this._colGroup = document.createElement("colgroup"), this._rowHeaderColumns = e, this._freezedColumns = t, this.#e = n;
  }
  addColumn(e) {
    const t = new rt({
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
    const o = this.getColumn(e), s = o.left, i = W(t).map((l) => new rt({
      columnId: e + l,
      width: n,
      left: s + (n + ce) * l
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
    W(e, this._columnsList.length).reduce((t, n) => {
      const o = this._columnsList[n];
      return o.left = t, o.visible ? t + o.width + ce : t;
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
function Ns({ colgroup: r }) {
  const e = document.createElement("table"), t = document.createElement("div"), n = document.createElement("thead"), o = document.createElement("tbody");
  return t.className = An, e.classList.add(Dn), e.appendChild(r), e.appendChild(n), e.appendChild(o), t.appendChild(e), { table: e, wrapper: t, thead: n, tbody: o };
}
const Bs = 1e4;
function Gs({ rowManager: r, colManager: e, commandManager: t, cursorManager: n }) {
  const o = se("textarea", Wn);
  o.style.padding = "0";
  let s = null;
  const i = {
    focus: u,
    runEditMode: w,
    setPosition: c,
    mountElement(g) {
      R(), g.appendChild(o);
    },
    hide() {
    },
    onEditDone(g, T, f, m, p, S) {
    },
    onEditKeyDown(g, T, f, m) {
    },
    onEnterOnEdit(g, T) {
    },
    onEditInput(g, T) {
    }
  }, l = xt(i);
  return i;
  function u() {
    o.focus({ preventScroll: !0 });
  }
  function a(g) {
    o.value = g;
  }
  function c(g, T, f) {
    const m = r.getRow(g.row), p = e.getColumn(g.col), S = g.row < r.freezedRows ? T : 0, _ = g.col < e.freezedColumns ? f : 0;
    o.style.top = `${m.top + S}px`, o.style.left = `${p.left + _}px`;
  }
  function d(g) {
    o.style.width = `${g.element.offsetWidth - 1}px`, o.style.height = `${g.element.offsetHeight - 1}px`;
  }
  function C(g) {
    const T = g === "" ? A.zLevel1 : `calc(${g} + 1000)`;
    o.style.zIndex = T;
  }
  function w(g, T, f, m = !1, p = !1) {
    s = {
      cell: g,
      beforeText: g.props.text ?? "",
      cancelEndEdit: !1
    }, o.style.removeProperty("padding"), m || a(s.beforeText), o.maxLength = g.props.maxLength ?? Bs, C(g.zIndexVariant), c(g, T, f), d(g), u(), o.scrollTo(0, o.scrollHeight), p && o.setSelectionRange(0, o.value.length), l.create();
  }
  function L() {
    a(""), s = null, o.style.removeProperty("height"), o.style.removeProperty("width"), o.style.removeProperty("z-index");
  }
  function R() {
    o.addEventListener("keydown", b), o.addEventListener("blur", I), o.addEventListener("keyup", y), o.addEventListener("input", E);
  }
  function E(g) {
    s && i.onEditInput(g, o.value);
  }
  function y() {
    s || a("");
  }
  function b(g) {
    if (!s) return;
    const { beforeText: T, cell: f } = s;
    if (g.key === "Escape") {
      v(o.value, !1, g.key);
      return;
    }
    if (g.key === " " && !g.ctrlKey) {
      g.preventDefault();
      const m = o.value, { selectionStart: p, selectionEnd: S } = o;
      o.value = m.slice(0, p) + " " + m.slice(S), o.selectionStart = p + 1, o.selectionEnd = p + 1, i.onEditInput(g, o.value);
      return;
    }
    if (g.key === "Enter" && g.altKey && f.metaInfo.editSingleLine !== !0) {
      g.preventDefault();
      const m = o.selectionStart;
      try {
        s.cancelEndEdit = !0, o.blur(), o.value = [
          o.value.substring(0, m),
          o.value.substring(o.selectionEnd)
        ].join(`
`), u(), o.setSelectionRange(m + 1, m + 1, "backward"), i.onEditKeyDown(g, f.row, f.col, f.props);
      } finally {
        s.cancelEndEdit = !1;
      }
      return;
    }
    if (x(g)) {
      g.preventDefault(), v(o.value, T !== o.value, g.key), g.key === "Enter" ? i.onEnterOnEdit(g.ctrlKey, g.shiftKey) : h(g.key, g.shiftKey);
      return;
    }
    i.onEditKeyDown(g, f.row, f.col, f.metaInfo);
  }
  function I() {
    !s || s.cancelEndEdit || (v(o.value, s.beforeText !== o.value, ""), l.destroy());
  }
  function v(g, T, f) {
    if (s)
      try {
        const { cell: m, beforeText: p } = s;
        if (T && m.checkInputValidation(g)) {
          const S = { text: g, beforeText: p };
          m.props.gridStore.hook.emit("cellEditDoneBeforeRender", [m.row, m.col, S]);
          const _ = new de(t.commandContext, [
            m.row,
            m.col,
            { text: S.text }
          ]);
          _.onUndo = () => {
            i.onEditDone(m, T, p, f, o.selectionStart, o.selectionEnd);
          }, _.onExecute = () => {
            i.onEditDone(m, T, p, f, o.selectionStart, o.selectionEnd);
          }, t.pushCommandBlock(new ne(
            `Edit cell (${m.row}, ${m.col}) `,
            _
          )), m.props = { text: S.text };
        }
        i.onEditDone(m, T, p, f, o.selectionStart, o.selectionEnd);
      } finally {
        o.style.padding = "0", L();
      }
  }
  function x(g) {
    return g.key === "ArrowLeft" && o.selectionStart === 0 && o.selectionEnd === 0 || g.key === "ArrowUp" && o.selectionStart === 0 && o.selectionEnd === 0 || g.key === "ArrowRight" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || g.key === "ArrowDown" && o.selectionStart === o.textLength && o.selectionEnd === o.textLength || g.key === "Tab" ? !0 : g.key === "Enter" && !g.altKey && !g.ctrlKey && !g.shiftKey;
  }
  function h(g, T) {
    switch (g) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return T ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
function Vs(r) {
  return r.top === r.bottom && r.left === r.right;
}
function Ps(r) {
  return r.top > r.bottom || r.left > r.right;
}
function $s(r, e) {
  let t = [];
  const n = new ue(r, e), o = ({ top: a, left: c, bottom: d, right: C }) => t.some(({ mergeArea: w }) => c <= w.right && C >= w.left && a <= w.bottom && d >= w.top) === !1, s = (a, c) => {
    let d = 0;
    for (let C = a; C <= c; ++C)
      r.getRowVisible(C) && ++d;
    return d;
  }, i = (a, c) => {
    let d = 0;
    for (let C = a; C <= c; ++C)
      e.getColumnVisible(C) && ++d;
    return d;
  }, l = ({ top: a, left: c, bottom: d, right: C }) => {
    for (let w = a; w <= d; ++w)
      if (r.getRowVisible(w) === !1) return !0;
    for (let w = c; w <= C; ++w)
      if (e.getColumnVisible(w) === !1) return !0;
    return !1;
  }, u = (a, c) => {
    const d = r.getCell(a, c), C = t.indexOf(d);
    return C < 0 ? null : t[C];
  };
  return {
    isValidatedMerging: o,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(a) {
      t = t.filter(({ row: c }) => c < a);
    },
    getMergedRowHeight(a, c) {
      const d = (c - a) * ae;
      let C = 0;
      for (let w = a; w <= c; ++w)
        r.getRowVisible(w) && (C += r.getRowHeight(w));
      return C + d;
    },
    mergeCells(a) {
      if (Ps(a))
        throw new Error("Invalid range");
      if (o(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (Vs(a))
        throw new Error("Could not merging with single cell!");
      const c = r.getCell(a.top, a.left);
      c.height = this.getMergedRowHeight(a.top, a.bottom), c.mergeInfo = { rowSpan: s(a.top, a.bottom), colSpan: i(a.left, a.right) }, t.push(c), r.getRow(a.top).updateMaxCellHeight();
      for (const C of n.getSelectionGenerator(a))
        (C.row !== a.top || C.col !== a.left) && (C.mergeMain = c);
    },
    splitCells(a, c) {
      const d = u(a, c);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      for (const C of n.getSelectionGenerator(d.mergeArea))
        C.mergeMain = void 0, C.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(a, c), r.getRow(a).updateMaxCellHeight();
    },
    isMerged(a, c) {
      return !o({ top: a, left: c, bottom: a, right: c });
    },
    *getMergedCellGenerator(a) {
      for (const c of n.getSelectionGenerator(a))
        (c.mergeInfo.rowSpan > 1 || c.mergeInfo.colSpan > 1) && (yield c);
    },
    removeMergeCell(a, c) {
      const d = u(a, c);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((C) => C !== d);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: d } of t)
        if (d.top < a && d.bottom >= a && d.bottom <= c || d.bottom > c && d.top >= a && d.top <= c || d.top < a && d.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: d } of t)
        if (d.left < a && d.right >= a && d.right <= c || d.right > c && d.left >= a && d.left <= c || d.left < a && d.right > c)
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
class js {
  #e = go();
  // HTML Elements
  #t;
  #r;
  #a;
  #l;
  #u;
  #s;
  #o;
  #g;
  #d;
  constructor(e) {
    const t = Le();
    this.#r = {
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
    }, this.#s = e.gridCommandManager, this.#a = new Ds(e.headerRowCount, e.freezedRowCount, this.#e), this.#l = new Fs(e.headerColumnCount, e.freezedColumnCount, this.#e), this.#d = e.cursorManager, this.#u = $s(this.#a, this.#l), this.#o = Gs({
      rowManager: this.#a,
      colManager: this.#l,
      commandManager: this.#s,
      cursorManager: this.#d
    }), this.#g = e.gridStateContext, this.#t = Ns({
      colgroup: this.#l.colgroup
    });
  }
  // theme
  getThemeValue(e) {
    return this.#r[e];
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
    return this.#u;
  }
  get rowManager() {
    return this.#a;
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
    return this.#g;
  }
  get cursorManager() {
    return this.#d;
  }
}
class zt extends G {
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
class At extends G {
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
class Y {
  _mountRollbackStack = [];
  _isMounted = !1;
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  addRollbackTask(e) {
    this._mountRollbackStack.push(e);
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
const Ks = {
  "col-resizing": Rt,
  "row-resizing": _t
}, We = {
  "col-resizing": Nn,
  "row-resizing": Bn
}, it = (r) => r.mergeInfo ? r.col + r.mergeInfo.colSpan - 1 : r.col, lt = (r) => r.mergeInfo ? r.row + r.mergeInfo.rowSpan - 1 : r.row, Us = 500, at = 4;
class Dt extends Y {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: o,
      enabledRowResizer: s,
      disabledColumns: i,
      disabledRows: l
    } = this._options, { elements: u, gridStateContext: a } = t, c = new Set(i), d = new Set(l), C = (E, y, b) => {
      e.commandManager.pushCommandBlock(new ne(E, new zt(e, [y, b])));
    }, w = (E, y, b) => {
      e.commandManager.pushCommandBlock(new ne(E, new At(e, [y, b])));
    };
    (function() {
      const y = document.createElement("div");
      let b = null, I = !1, v = 0, x = null;
      const h = () => {
        b && (b.element.classList.remove(We["col-resizing"]), b.element.classList.remove(We["row-resizing"]), b = null), n.classList.remove(Rt), n.classList.remove(_t), n.classList.remove(Ue), x && n.removeEventListener("mousedown", x);
      }, g = (m, p) => {
        b = m, n.classList.add(Ue), n.classList.add(Ks[p]), m.element.classList.add(We[p]);
        let S = 0, _ = 0, k = 0, M = 0, z = 0;
        const H = () => m.col < e.getFreezedColumnCount() ? e.scrollLeft + M : M, O = () => m.row < e.getFreezedRowCount() ? e.scrollTop + M : M;
        x = (j) => {
          const K = (/* @__PURE__ */ new Date()).getTime();
          if (a.setMode({
            mode: p,
            contextParam: {}
          }), K - v <= Us) {
            p === "col-resizing" ? e.commandManager.doRecording("Autosize column", () => {
              e.autoSizeColumn(m.col);
            }) : e.commandManager.doRecording("Autosize row", () => {
              e.autoSizeRow(m.row);
            }), v = 0, a.setIdle();
            return;
          }
          I = !0, v = K, p === "col-resizing" ? (y.className = Gn, z = e.getColumnWidth(it(m)), S = j.pageX, _ = S - z + e.minColWidth, k = S - z + e.maxColWidth, M = e.getColumnLeft(m.col) + e.getCellWidth(m), y.style.top = "0px", y.style.width = "0px", y.style.height = `${e.height}px`, y.style.left = `${H()}px`) : (y.className = Vn, z = e.getRowHeight(lt(m)), S = j.pageY, _ = S - z + e.minRowHeight, k = S - z + e.maxRowHeight, M = e.getRow(m.row).top + e.getCellHeight(m), y.style.top = `${O()}px`, y.style.width = `${e.width}px`, y.style.height = "0px", y.style.left = "0px"), u.wrapper.appendChild(y), e.addGlobalEventListener(document, "keydown", we), e.addGlobalEventListener(document, "mouseup", N), e.addGlobalEventListener(document, "mousemove", $);
        };
        const $ = (j) => {
          if (p === "col-resizing") {
            const K = F(j.pageX, _, k) - S;
            y.style.left = `${H() + K}px`;
          } else {
            const K = F(j.pageY, _, k) - S;
            y.style.top = `${O() + K}px`;
          }
        }, N = (j) => {
          if (p === "col-resizing") {
            const q = F(j.pageX, _, k) - S;
            if (Math.abs(q) > at) {
              const ee = it(m), te = z + q;
              C("Resize column", ee, te), e.setColumnWidth(ee, te), v = 0;
            }
          } else {
            const q = F(j.pageY, _, k) - S;
            if (Math.abs(q) > at) {
              const ee = lt(m), te = z + q;
              w("Resize row", ee, te), e.setRowHeight(ee, te), v = 0;
            }
          }
          D(), a.setIdle();
          const K = L(j);
          if (!K) return;
          const ie = R(j, K);
          ie !== null && g(K, ie);
        };
        function D() {
          I = !1, y.remove(), h(), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", N), document.removeEventListener("keydown", we);
        }
        const we = (j) => {
          j.key === "Escape" && D();
        };
        e.addGlobalEventListener(n, "mousedown", x);
      }, T = (m) => {
        if (I) return;
        const p = L(m);
        if (h(), p === null) return;
        const S = R(m, p);
        S && g(p, S);
      }, f = (m) => {
        I || h();
      };
      e.addGlobalEventListener(n, "mousemove", T), e.addGlobalEventListener(n, "mouseout", f);
    })();
    const L = (E) => {
      const y = J("th", "tr", E.target);
      if (!y) return null;
      const [b, I] = [
        parseInt(y.getAttribute("data-row") || "-1"),
        parseInt(y.getAttribute("data-col") || "-1")
      ];
      return e.cell(b, I);
    }, R = (E, y) => y.cellType === "body-cell" ? null : o && Math.abs(e.getCellWidth(y) - E.offsetX) <= On && !c.has(y.col) ? "col-resizing" : s && Math.abs(e.getCellHeight(y) - E.offsetY) <= Fn && !d.has(y.row) ? "row-resizing" : null;
  }
  get pluginKey() {
    return "resizer";
  }
}
function di(r) {
  return new Dt(r);
}
const Xs = 15, Ee = 120;
class Wt extends Y {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t;
    let s = null, i = null, l, u = null;
    const a = (R, E) => {
      const y = [
        R.row,
        R.bottom,
        E.row,
        E.bottom
      ], b = [
        R.col,
        R.right,
        E.col,
        E.right
      ], I = {
        top: Math.min(...y),
        left: Math.min(...b),
        bottom: Math.max(...y),
        right: Math.max(...b)
      };
      vt(I, u) || (u = I, e.select(I, s), this.onChangedSelection(I));
    };
    e.addGlobalEventListener(n, "mousedown", (R) => {
      if (!oe(R.target) || R.button !== 0 || R.target instanceof HTMLTextAreaElement || J(".button", "tr", R.target)) return;
      const E = J("td", "tr", R.target);
      if (!E)
        return;
      const y = Q(E), b = e.activeCell;
      R.shiftKey && b ? (s = b, a(b, e.cell(y.row, y.col))) : (s = e.cell(y.row, y.col), e.selectRange(s.row, s.col, s.bottom, s.right, s), this.onChangedSelection({ top: s.row, left: s.col, bottom: s.bottom, right: s.right })), i = s, o.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function c(R, E) {
      const y = E.closest("td");
      if (!y) return;
      const b = Q(y);
      i = e.cell(b.row, b.col), a(R, i);
    }
    function d(R, E) {
      const { offsetX: y, offsetY: b, target: I } = R;
      if (!oe(I)) return null;
      const v = y + I.scrollLeft, x = b + I.scrollTop, h = v > e.width ? e.width : v, g = x > e.height ? e.height : x, T = e.findCellOrNull(g, h);
      T && (i = T, a(E, T));
    }
    function C(R) {
      const E = R.clientWidth + R.scrollLeft, y = R.clientHeight + R.scrollTop, b = R.scrollTop + e.headerHeight, I = R.scrollLeft + e.headerWidth, v = y > e.height ? e.height : y, x = E > e.width ? e.width : E, h = e.findCellOrNull(b, I), g = e.findCellOrNull(v, x);
      return {
        top: h?.row ?? 0,
        bottom: g?.row ?? 0,
        left: h?.col ?? 0,
        right: g?.col ?? 0
      };
    }
    function w(R, E, y, b) {
      l = window.setTimeout(() => {
        if (!s) return;
        const x = I(), h = v(), { top: g, bottom: T, left: f, right: m } = C(R), p = {
          top: R.scrollTop,
          left: R.scrollLeft,
          targetRow: y,
          targetCol: b
        };
        x && (E.startsWith("t") ? (p.top -= e.getRowHeight(g), p.targetRow = g) : (p.top += e.getRowHeight(T), p.targetRow = T)), h && (E.endsWith("l") ? (p.left -= e.getColumnWidth(f), p.targetCol = f) : (p.left += e.getColumnWidth(m), p.targetCol = m)), (x || h) && (R.scrollTo({ top: p.top, left: p.left }), a(s, e.cell(p.targetRow, p.targetCol)), w(R, E, p.targetRow, p.targetCol));
      }, Xs);
      function I() {
        return E.startsWith("t") ? R.scrollTop > 0 : E.startsWith("b") ? R.scrollHeight - (R.scrollTop + R.clientHeight) > 0 : !1;
      }
      function v() {
        return E.endsWith("l") ? R.scrollLeft > 0 : E.endsWith("r") ? R.scrollWidth - (R.scrollLeft + R.clientWidth) > 0 : !1;
      }
    }
    function L() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (R) => {
      s && oe(R.target) && (R.target === n ? d(R, s) : c(s, R.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      s && (L(), s = null, i = null, o.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: R, clientY: E, clientX: y }) => {
      if (!s || !i || !oe(R)) return;
      const { top: b, bottom: I, left: v, right: x } = R.getBoundingClientRect();
      if (b < E && I > E && v < y && x > y) return;
      w(R, `${h()}${g()}`, i.row, i.col);
      function h() {
        return E - b <= Ee ? "t" : I - E <= Ee ? "b" : "";
      }
      function g() {
        return y - v <= Ee ? "l" : x - y <= Ee ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (R) => {
      s && oe(R.currentTarget) && L();
    }), e.onDoubleClickCell = (R) => o.isIdle && e.doEditMode(R, !1, !0), e.onColumnClick = (R) => e.selectColumn(R.col), e.onRowClick = (R) => e.selectRow(R.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function ui() {
  return new Wt();
}
class Ot extends G {
  _getUndoContext() {
    const [e] = this._args, t = [], n = new ue(this._instance, this._instance);
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
function Ft(r, e) {
  const t = (f, m, p) => {
    const S = r.headerRows;
    let _ = p, k = f;
    for (; _ !== 0; ) {
      const M = r.cell(k, m), H = (M.mergeMain ?? M).row - 1;
      if (H < S) break;
      r.getRowVisible(H) && ++_, k = H;
    }
    return k;
  }, n = (f, m, p) => {
    const S = r.getRowCount() - 1;
    let _ = p, k = f;
    for (; _ !== 0; ) {
      const M = r.cell(k, m), H = (M.mergeMain ?? M).bottom + 1;
      if (H > S) break;
      r.getRowVisible(H) && --_, k = H;
    }
    return k;
  }, o = (f, m, p) => {
    const S = r.headerColumns;
    let _ = p, k = m;
    for (; _ !== 0; ) {
      const M = r.cell(f, k), H = (M.mergeMain ?? M).col - 1;
      if (H < S) break;
      r.getColumnVisible(H) && ++_, k = H;
    }
    return k;
  }, s = (f, m, p) => {
    const S = r.getColCount() - 1;
    let _ = p, k = m;
    for (; _ !== 0; ) {
      const M = r.cell(f, k), H = (M.mergeMain ?? M).right + 1;
      if (H > S) break;
      r.getColumnVisible(H) && --_, k = H;
    }
    return k;
  }, i = () => {
    let f = r.headerColumns;
    for (; !r.getColumnVisible(f); )
      ++f;
    return f;
  }, l = () => {
    let f = r.getColCount() - 1;
    for (; !r.getColumnVisible(f); )
      --f;
    return f;
  }, u = () => {
    let f = r.headerRows;
    for (; !r.getRowVisible(f); )
      ++f;
    return f;
  }, a = () => {
    let f = r.getRowCount() - 1;
    for (; !r.getRowVisible(f); )
      --f;
    return f;
  }, c = (f) => {
    if (r.getRowCount() - 1 === f) return f;
    let p = f + 1;
    for (; !r.getRowVisible(p); )
      ++p;
    return p;
  }, d = (f) => {
    const m = r.headerRows;
    if (f === m) return f;
    let p = f - 1;
    for (; !r.getRowVisible(p); )
      ++p;
    return p;
  }, C = () => {
    const { activeCell: f } = r;
    if (!f) {
      console.warn("No active cell warning.");
      return;
    }
    const m = a(), p = l(), S = f.mergeMain ?? f;
    if (S.right === p) {
      if (f.row === m) return;
      const _ = i(), k = c(f.row);
      e ? r.selectRow(k, r.cell(k, _)) : r.selectCell(k, _), r.scrollInView(k, _);
    } else {
      const _ = s(f.row, S.right, 1);
      e ? r.selectRow(f.row, r.cell(f.row, _)) : r.selectCell(f.row, _), r.scrollOnCol(_);
    }
  }, w = () => {
    const { activeCell: f } = r;
    if (!f) {
      console.warn("No active cell warning.");
      return;
    }
    const m = u(), p = i(), S = f.mergeMain ?? f;
    if (S.col === p) {
      if (f.row === m) return;
      const _ = l(), k = d(f.row);
      e ? r.selectRow(k, r.cell(k, _)) : r.selectCell(k, _), r.scrollInView(k, _);
    } else {
      const _ = o(f.row, S.col, -1);
      e ? r.selectRow(f.row, r.cell(f.row, _)) : r.selectCell(f.row, _), r.scrollOnCol(_);
    }
  }, L = (f, m, p) => {
    let S = -1, _ = -1;
    for (let k = m; k <= p; k++) {
      const M = r.cell(f, k), z = M.mergeMain ?? M, { rowSpan: H } = z.mergeInfo;
      H > S && (S = H, _ = k);
    }
    return _;
  }, R = (f, m, p) => {
    let S = -1;
    for (let _ = m; _ <= p; _++) {
      const k = r.cell(f, _), M = k.mergeMain ?? k, { bottom: z } = M;
      z > S && (S = z);
    }
    return S;
  }, E = (f, m, p) => {
    let S = 999999999;
    for (let _ = m; _ <= p; _++) {
      const k = r.cell(f, _), M = k.mergeMain ?? k;
      S > M.row && (S = M.row);
    }
    return S;
  }, y = (f, m, p) => {
    let S = -1, _ = -1;
    for (let k = m; k <= p; k++) {
      const M = r.cell(k, f), z = M.mergeMain ?? M, { colSpan: H } = z.mergeInfo;
      H > S && (S = H, _ = k);
    }
    return _;
  }, b = (f, m, p) => {
    let S = -1;
    for (let _ = m; _ <= p; _++) {
      const k = r.cell(_, f), M = k.mergeMain ?? k, { right: z } = M;
      z > S && (S = z);
    }
    return S;
  }, I = (f, m, p) => {
    let S = 999999999;
    for (let _ = m; _ <= p; _++) {
      const k = r.cell(_, f), M = k.mergeMain ?? k;
      S > M.col && (S = M.col);
    }
    return S;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: o,
    getNextXRight: s,
    getFirstActiveRow: u,
    selectNextActiveCell: C,
    selectBeforeActiveCell: w,
    selectNextSelection: (f, m, p) => {
      const S = r.getSelection(), { activeCell: _ } = r;
      if (S == null || _ == null) {
        console.warn("No selection warning");
        return;
      }
      const k = _.mergeMain ?? _;
      if (p && e) return;
      if (!p) {
        if (f !== 0) {
          const $ = f < 0 ? t(k.row, _.col, f) : n(k.bottom, _.col, f);
          e ? r.selectRow($, r.cell($, _.col)) : r.selectCell($, _.col), r.scrollOnRow($);
        } else {
          const $ = m < 0 ? o(_.row, k.col, m) : s(_.row, k.right, m);
          e ? r.selectRow(_.row, r.cell(_.row, $)) : r.selectCell(_.row, $), r.scrollOnCol($);
        }
        return;
      }
      const { top: M, bottom: z, left: H, right: O } = S;
      if (f !== 0)
        if (f < 0)
          if (R(_.row, H, O) === z) {
            const N = L(M, H, O), D = t(M, N, f);
            r.selectRange(D, H, z, O, _), r.scrollOnRow(D);
          } else {
            const N = L(z, H, O), D = t(z, N, f);
            r.selectRange(M, H, D, O, _), r.scrollOnRow(D);
          }
        else if (E(_.row, H, O) === M) {
          const N = L(z, H, O), D = n(z, N, f);
          r.selectRange(M, H, D, O, _), r.scrollOnRow(D);
        } else {
          const N = L(M, H, O), D = n(M, N, f);
          r.selectRange(D, H, z, O, _), r.scrollOnRow(D);
        }
      else if (m < 0)
        if (b(_.col, M, z) === O) {
          const N = y(H, M, z), D = o(N, H, m);
          r.selectRange(M, D, z, O, _), r.scrollOnCol(D);
        } else {
          const N = y(O, M, z), D = o(N, O, m);
          r.selectRange(M, H, z, D, _), r.scrollOnCol(D);
        }
      else if (I(_.col, M, z) === H) {
        const N = y(O, M, z), D = s(N, O, m);
        r.selectRange(M, H, z, D, _), r.scrollOnCol(D);
      } else {
        const N = y(H, M, z), D = s(N, H, m);
        r.selectRange(M, D, z, O, _), r.scrollOnCol(D);
      }
    },
    selectMoveToLastColumn: (f) => {
      const m = r.getSelection(), { activeCell: p } = r;
      if (m == null || p == null) {
        console.warn("No selection warning");
        return;
      }
      const S = l();
      f && e || (f ? r.selectRange(m.top, p.col, m.bottom, S, p) : e ? r.selectRow(p.row, r.cell(p.row, S)) : r.selectCell(p.row, S), r.scrollOnCol(S));
    },
    selectMoveToFirstColumn: (f) => {
      const m = r.getSelection(), { activeCell: p } = r;
      if (m == null || p == null) {
        console.warn("No selection warning");
        return;
      }
      const S = i();
      f && e || (f ? r.selectRange(m.top, S, m.bottom, p.col, p) : e ? r.selectRow(p.row, r.cell(p.row, S)) : r.selectCell(p.row, S), r.scrollOnCol(S));
    },
    selectMoveToLastRow: (f) => {
      const m = r.getSelection(), { activeCell: p } = r;
      if (m == null || p == null) {
        console.warn("No selection warning");
        return;
      }
      const S = a();
      f && e || (f ? r.selectRange(p.row, m.left, S, m.right, p) : r.selectCell(S, p.col), r.scrollOnRow(S));
    },
    selectMoveToFirstRow: (f) => {
      const m = r.getSelection(), { activeCell: p } = r;
      if (m == null || p == null) {
        console.warn("No selection warning");
        return;
      }
      const S = u();
      f && e || (f ? r.selectRange(S, m.left, p.bottom, m.right, p) : r.selectCell(S, p.col), r.scrollOnRow(S));
    }
  };
}
class Ys {
  keyMap;
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
const ct = 10;
class Nt extends Y {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const o = new Ys(), { gridStateContext: s } = n;
    o.onEndKeyActionHook = (h) => {
      !h.ctrlKey && !h.shiftKey && h.key === " " && v() === !1 || x(h.key) || h.preventDefault();
    };
    const i = (h = !1) => {
      if (!s.isIdle) return;
      const g = e.activeCell?.mergeMain ?? e.activeCell;
      g && e.doEditMode(g, h);
    };
    this._keyMiddleware.forEach(([h, g]) => o.addKeyAction(h, g));
    const l = new ue(n.rowManager, n.columnManager), {
      selectNextActiveCell: u,
      selectNextSelection: a,
      selectBeforeActiveCell: c,
      selectMoveToFirstRow: d,
      selectMoveToFirstColumn: C,
      selectMoveToLastColumn: w,
      selectMoveToLastRow: L,
      getFirstActiveRow: R
    } = Ft(e, this._rowSelection), E = (h) => (g) => {
      s.gridModeState.value.mode !== "edit-cell" && h(g);
    };
    e.addGlobalEventListener(t, "copy", E((h) => e.onNativeCopy(h))), e.addGlobalEventListener(t, "cut", E((h) => e.onNativeCut(h))), e.addGlobalEventListener(t, "paste", E((h) => e.onNativePaste(h))), o.addKeyAction("Tab", (h) => (h.shiftKey ? c() : u(), !0)), o.addKeyAction("ArrowRight", (h) => (h.ctrlKey ? w(h.shiftKey) : a(0, 1, h.shiftKey), !0)), o.addKeyAction("ArrowUp", (h) => (h.ctrlKey ? d(h.shiftKey) : a(-1, 0, h.shiftKey), !0)), o.addKeyAction("ArrowLeft", (h) => (h.ctrlKey ? C(h.shiftKey) : a(0, -1, h.shiftKey), !0)), o.addKeyAction("ArrowDown", (h) => (h.ctrlKey ? L(h.shiftKey) : a(1, 0, h.shiftKey), !0)), o.addKeyAction("Home", (h) => (h.ctrlKey ? (C(h.shiftKey), d(h.shiftKey)) : C(h.shiftKey), !0)), o.addKeyAction("End", (h) => (h.ctrlKey ? (w(h.shiftKey), L(h.shiftKey)) : w(h.shiftKey), !0)), o.addKeyAction("PageUp", (h) => (a(-ct, 0, h.shiftKey), !0)), o.addKeyAction("PageDown", (h) => (a(ct, 0, h.shiftKey), !0)), o.addKeyAction("Enter", () => {
      const h = e.getSelection();
      return h && (h.top === e.getRowCount() - 1 ? e.selectCell(R(), h.left + 1) : a(1, 0, !1)), !0;
    }), o.addKeyAction("a", y), o.addKeyAction("A", y), o.addKeyAction("z", b), o.addKeyAction("Z", b), o.addKeyAction("y", I), o.addKeyAction("Y", I);
    function y(h) {
      return h.ctrlKey ? (e.selectAll(), h.preventDefault(), !1) : !0;
    }
    function b(h) {
      return h.ctrlKey ? (e.undo(), h.preventDefault(), !1) : !0;
    }
    function I(h) {
      return h.ctrlKey ? (e.redo(), h.preventDefault(), !1) : !0;
    }
    o.addKeyAction("F2", (h) => (i(), !0)), o.addKeyAction("Backspace", (h) => {
      const g = e.getSelection(), T = e.activeCell;
      return !g || !T || e.doEditMode(T, !0), !0;
    }), o.addKeyAction("Delete", (h) => {
      const g = e.getSelection();
      if (!g || l.getCanClearCellCount(g, (f) => e.onClearCellCheck(f)) === 0) return !0;
      const T = new Ot(e, [g]);
      return e.commandManager.pushCommandBlock(new ne("Clear cells", T)), e.clearCells(g), !0;
    }), o.addKeyAction(" ", (h) => {
      const g = e.getSelection();
      if (g === null) return !0;
      if (h.ctrlKey)
        return e.selectColumns(g.left, g.right), !0;
      if (h.shiftKey)
        return e.selectRows(g.top, g.bottom), !0;
      let T = !1;
      const f = (m) => {
        if (e.getRow(m.row).isMounted)
          m.element.querySelector("input")?.click();
        else {
          m.text = m.text === "true" ? "false" : "true";
          const p = typeof m.cellRenderer == "function" ? m.cellRenderer(m.row, m.col, m.props) : m.cellRenderer;
          p instanceof Et ? p.onCheckboxClick(m.row, m.col, m.text === "true") : p instanceof It && p.onRadioClick(m.row, m.col);
        }
      };
      for (const m of l.getSelectionGenerator(g))
        m.onCheckReadonly() || m.props.disabled || (m.renderType === "checkbox" && f(m), m.renderType === "radio" && !T && (f(m), T = !0));
      return !0;
    }), e.addGlobalEventListener(t, "input", (h) => {
      s.gridModeState.isIdle && "data" in h && i(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (h) => {
      if (
        // editMode에서 온 입력은 pass
        !(!s.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!s.isIdle) {
          h.preventDefault();
          return;
        }
        if (!h.ctrlKey && x(h.key)) {
          i(!0);
          return;
        }
        o.startKeyAction(h);
      }
    }, !0);
    function v() {
      const h = e.getSelection();
      if (!h) return !1;
      for (const g of l.getSelectionGenerator(h))
        if (g.renderType === "checkbox" || g.renderType === "radio") return !0;
      return !1;
    }
    function x(h) {
      return h === "Process" || Zs.test(h);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const Zs = /^[\w]$/;
function hi(r) {
  return new Nt(r ?? {});
}
class qs extends Y {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let o = null;
    n.addEventListener("mousedown", (s) => {
      if (s.button !== 0) return;
      const i = J("td", "tr", s.target);
      if (!i || i?.tagName === "TH") return;
      const l = Q(i);
      o = e.cell(l.row, l.col), e.selectRow(o.row, o);
    }), e.addGlobalEventListener(document, "mouseup", () => o = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function gi() {
  return new qs();
}
const Oe = -1, Js = /^\d+px$/;
function Qs(r) {
  for (const e of r)
    if (typeof e == "string") {
      if (Js.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function er(r) {
  let e = 0;
  for (const t of r)
    typeof t == "string" && (e += Bt(t));
  return e;
}
function Bt(r) {
  return parseInt(r.substring(0, r.length - 2), 10);
}
class tr extends Y {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), Qs(e), this._fixedColumnWidth = er(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: o } = n;
    let s = Oe;
    const i = () => {
      const { clientWidth: c } = t;
      if (c === 0) {
        e.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const d = e.getColCount() - 1, C = c - d - this._fixedColumnWidth, w = W(e.getColCount()).reduce((E, y) => {
        if (!e.getColumnVisible(y)) return E;
        const b = this._columnWeightList[y];
        return b === void 0 ? E + 1 : typeof b == "number" ? E + b : E;
      }, 0);
      let L = 0;
      W(d).forEach((E) => {
        if (!e.getColumnVisible(E)) return;
        const y = this._columnWeightList[E] ?? 1;
        if (typeof y == "string" && y.endsWith("px")) {
          const b = Bt(y);
          e.setColumnWidth(E, b);
        } else if (typeof y == "number") {
          const b = y / w;
          e.setColumnWidth(E, Math.floor(b * C));
        }
        L += e.getColumnWidth(E);
      });
      const R = a();
      R && e.setColumnWidth(R, C - L + this._fixedColumnWidth);
    }, l = () => {
      s !== Oe && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
        try {
          o.pauseEmit("onColumnChanged"), i();
        } catch (c) {
          console.error(c);
        } finally {
          o.resumeEmit("onColumnChanged"), s = Oe;
        }
      });
    };
    o.addHook("resize", l), o.addHook("onColumnChanged", l), this.addRollbackTask(() => {
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
function fi(r) {
  return new tr(r ?? { columnWeight: [] });
}
class Gt extends Y {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: o } = t.elements, s = {
      latestDragOverCell: null
    }, i = () => {
      n.setIdle(), o.classList.remove("is-dragging"), l();
    }, l = () => {
      s.latestDragOverCell && (s.latestDragOverCell.isDragOver = !1);
    }, u = (c) => {
      l(), s.latestDragOverCell = c, c.isDragOver = !0;
    }, a = () => o.classList.contains("is-dragging");
    o.addEventListener("mouseup", () => a() && i()), o.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), o.classList.add("is-dragging");
    }), o.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !o.classList.contains("is-dragging")) return;
      const d = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!d || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        d.dropDisabled !== !1 && // disabled
        (d.metaInfo.disabled === !0 || // readonly
        d.onCheckReadonly() === !0 || d.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(d, c) === !0 && (d !== s.latestDragOverCell && u(d), c.preventDefault());
    }), o.addEventListener("dragleave", (c) => {
      c.target === o ? i() : l();
    }), o.addEventListener("drop", (c) => {
      try {
        s.latestDragOverCell && e.onDropOnCell(s.latestDragOverCell.row, s.latestDragOverCell.col, c);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function mi() {
  return new Gt();
}
const dt = 10;
class nr extends Y {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements, o = {
      cell: null
    }, s = () => {
      o.cell = null, n.draggable = !1;
    }, i = (d) => {
      n.draggable = !0, o.cell = d;
    };
    n.addEventListener("mousedown", a), n.addEventListener("mouseup", l), n.addEventListener("dragend", u), n.addEventListener("dragstart", c), this.addRollbackTask(() => {
      n.removeEventListener("mousedown", a), n.removeEventListener("mouseup", l), n.removeEventListener("dragend", u), n.removeEventListener("dragstart", c);
    });
    function l(d) {
      s();
    }
    function u(d) {
      s();
    }
    function a(d) {
      if (d.button !== 0) return;
      const C = J("td", "tr", d.target);
      if (!C) {
        s();
        return;
      }
      const w = Q(C), L = e.cell(w.row, w.col);
      e.selectCell(w.row, w.col), L.props.draggable === !0 && L.props.object ? i(L) : s();
    }
    function c(d) {
      if (!d.dataTransfer || !o.cell || !e.onDragStartCell(o.cell, d)) {
        d.preventDefault();
        return;
      }
      d.dataTransfer.setDragImage(o.cell.element, dt, dt);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Ci() {
  return new nr();
}
const ut = 10;
class wi extends Y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: o = !0,
      enabledColumn: s = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: l, rowManager: u, gridStateContext: a } = n;
    let c = null, d = null;
    i.addEventListener("mousedown", C), i.addEventListener("dragstart", w), i.addEventListener("dragover", L), i.addEventListener("drop", R), i.addEventListener("dragleave", E), i.addEventListener("dragend", y), i.addEventListener("mouseup", y), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", C), i.removeEventListener("dragstart", w), i.removeEventListener("dragover", L), i.removeEventListener("drop", R), i.removeEventListener("dragleave", E), i.removeEventListener("dragend", y), i.removeEventListener("mouseup", y);
    });
    function C(x) {
      if (x.button !== 0 || t.classList.contains("is-resizing")) return;
      const h = J("th", "tr", x.target);
      if (!h) return;
      const g = Q(h), T = e.cell(g.row, g.col);
      if (T.cellType === "body-cell" || S(T)) return;
      b({
        direction: T.cellType,
        source: f(),
        cell: T
      });
      function f() {
        const { row: _, col: k } = T;
        return T.cellType === "row-header" ? [
          u.getStartOfRowId(_),
          u.getEndOfRowId(_)
        ] : [
          u.getStartOfColumnId(k),
          u.getEndOfColumnId(k)
        ];
      }
      function m(_) {
        return !o || _.row < e.getFreezedRowCount();
      }
      function p(_) {
        return !s || _.col < e.getFreezedColumnCount();
      }
      function S(_) {
        return _.cellType === "row-header" && m(_) || _.cellType === "col-header" && p(_);
      }
    }
    function w(x) {
      if (!x.dataTransfer || !c) {
        x.preventDefault();
        return;
      }
      a.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), x.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), x.dataTransfer.setDragImage(c.cell.element, ut, ut);
    }
    function L(x) {
      if (!c || !x.dataTransfer || !x.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const h = e.findCellOrNull(x.offsetY, x.offsetX);
      if (!h || !h.isHeaderCell || c.direction === "row-header" && g(h, c) || c.direction === "col-header" && T(h, c)) {
        I(), d = h;
        return;
      }
      h !== d && v(h, c.direction), x.preventDefault();
      function g(f, m) {
        return f.row === m.cell.row || f.row < e.getFreezedRowCount() || l.checkConflictingInRows(f.row, f.row);
      }
      function T(f, m) {
        return f.col === m.cell.col || f.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(f.col, f.col);
      }
    }
    function R() {
      const x = c, h = d;
      !x || !h || (I(), x.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(x.source, [h.row, h.row]);
      }), e.forceLayoutTask(), e.selectRow(x.cell.row)), x.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(x.source, [h.col, h.col]);
      }), e.forceLayoutTask(), e.selectColumn(x.cell.col)));
    }
    function E() {
      I(), d = null;
    }
    function y() {
      i.classList.remove("is-dragging"), I(), c = null, i.draggable = !1, d = null, a.setIdle();
    }
    function b({ direction: x, source: h, cell: g }) {
      i.draggable = !0, c = {
        direction: x,
        source: h,
        cell: g
      };
    }
    function I() {
      if (!d || !c) return;
      const { direction: x } = c, h = x === "row-header" ? e.headerColumns : e.headerRows;
      for (let g = 0; g < h; g++)
        x === "row-header" ? e.cell(d.row, g).element.classList.remove("is-dragging") : e.cell(g, d.col).element.classList.remove("is-dragging");
    }
    function v(x, h) {
      I(), d = x;
      const g = h === "row-header" ? e.headerColumns : e.headerRows;
      for (let T = 0; T < g; T++)
        h === "row-header" ? e.cell(x.row, T).element.classList.add("is-dragging") : e.cell(T, x.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Vt = 8, or = {
  normal: jn,
  error: Kn
}, ht = (r, e, t, n) => {
  r.isConnected === !1 || r.offsetParent === null || po(r, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      Ro({
        mainAxis: Vt,
        crossAxis: n ?? 0
      }),
      _o(),
      xo({ padding: 5 })
    ]
  }).then(({ x: o, y: s, placement: i }) => {
    e.style.left = `${o}px`, e.style.top = `${s}px`, e.dataset.placement = i;
  });
}, sr = (r) => r.cellInfo.tooltip ?? r.cellInfo.text ?? "", rr = (r) => r.cellInfo.memo ?? "";
class ir extends Y {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Pn;
  }
  _tooltipElement;
  _memoElement;
  context = null;
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: o
    } = this.options, {
      hasMemo: s,
      memoIntent: i = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? sr(e), a = this.options.getMemoText?.(e) ?? rr(e), c = () => {
      this._tooltipElement.textContent = u, me("popover").appendChild(this._tooltipElement), ht(e.element, this._tooltipElement, "bottom");
    }, d = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${$n} ${or[i]}`, me("popover").appendChild(this._memoElement), ht(e.element, this._memoElement, "right-start", Vt);
    }, C = !(s && o) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, w = s && a ? window.setTimeout(() => d(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: C,
      memoTimeoutHandler: w,
      cleanup: () => {
        clearTimeout(C), clearTimeout(w), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t, s = (i) => {
      if (!oe(i.target)) return;
      const l = J("td,th", "tr", i.target);
      if (!l) {
        this.context?.cleanup();
        return;
      }
      const u = Q(l), a = e.cell(u.row, u.col);
      this.context?.targetCell !== a && (this.context?.cleanup(), this.context = this.createContext(a));
    };
    e.addGlobalEventListener(n, "mouseleave", () => this.context?.cleanup()), o.gridModeState.addSubscription((i, { mode: l }) => {
      n.removeEventListener("mousemove", s), this.context?.cleanup(), (l === "idle" || l === "edit-cell") && e.addGlobalEventListener(n, "mousemove", s);
    }), e.addGlobalEventListener(n, "scroll", () => this.context?.cleanup());
  }
  get pluginKey() {
    return "popover";
  }
}
const gt = 10;
class pi extends Y {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, gridStateContext: s } = n, { table: i } = n.elements, l = document.createElement("div");
    l.className = Un;
    let u = null, a = -1;
    i.addEventListener("mousedown", c), i.addEventListener("dragstart", d), i.addEventListener("dragover", C), i.addEventListener("drop", w), i.addEventListener("dragleave", L), i.addEventListener("dragend", R), i.addEventListener("mouseup", R), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", c), i.removeEventListener("dragstart", d), i.removeEventListener("dragover", C), i.removeEventListener("drop", w), i.removeEventListener("dragleave", L), i.removeEventListener("dragend", R), i.removeEventListener("mouseup", R);
    });
    function c(I) {
      if (I.button !== 0 || t.classList.contains("is-resizing")) return;
      const v = J("th", "tr", I.target);
      if (!v) return;
      const x = Q(v), h = e.cell(x.row, x.col);
      if (g(h)) return;
      E({
        source: [
          o.getStartOfRowId(h.row),
          o.getEndOfRowId(h.row)
        ],
        cell: h
      });
      function g(T) {
        return T.cellType !== "row-header" || T.row < e.getFreezedRowCount() || T.row < e.headerRows;
      }
    }
    function d(I) {
      const { offsetY: v, offsetX: x } = I;
      if (e.findCellOrNull(v, x)?.cellType === "row-header") {
        if (!I.dataTransfer || !u) {
          I.preventDefault();
          return;
        }
        s.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), I.dataTransfer.effectAllowed = "move", I.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), I.dataTransfer.setData("ir-grid/move-rows-dragging", ""), I.dataTransfer.setDragImage(u.cell.element, gt, gt);
      }
    }
    function C(I) {
      const { dataTransfer: v, offsetY: x, offsetX: h } = I;
      if (!u || !v || !v.types.includes("ir-grid/move-rows-dragging")) return;
      const g = e.findCellOrNull(x, h);
      if (!g) return;
      const T = f(g.row);
      if (g.cellType !== "row-header" || m(T, u)) {
        y(), a = -1;
        return;
      }
      T !== a && b(T), I.preventDefault();
      function f(p) {
        const S = e.getRow(p), _ = x - S.top < S.height / 2;
        return S.rowId + (_ ? 0 : 1);
      }
      function m(p, S) {
        const [_, k] = S.source;
        return p >= _ && p <= k || p < e.headerRows;
      }
    }
    function w() {
      const I = u, v = a;
      !I || v < 0 || (y(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(I.source, v);
      }), e.forceLayoutTask(), e.selectRow(I.cell.row));
    }
    function L() {
      y(), a = -1;
    }
    function R() {
      i.classList.remove("is-dragging"), y(), u = null, i.draggable = !1, a = -1, s.setIdle();
    }
    function E({ source: I, cell: v }) {
      i.draggable = !0, u = {
        source: I,
        cell: v
      };
    }
    function y() {
      a < 0 || !u || l.remove();
    }
    function b(I) {
      y(), a = I;
      const v = Math.min(a, o.length - 1), x = e.getRow(v), h = x.element.getBoundingClientRect(), g = {
        top: h.top,
        height: 16
      }, T = g.height / 2;
      I === o.length && (g.top += x.height, g.height = T + 1), l.style.top = `${g.top - T}px`, l.style.left = `${h.left + e.scrollLeft}px`, l.style.width = `${e.headerWidth}px`, l.style.height = `${g.height}px`, me("popover").appendChild(l);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const ft = 10;
class Ri extends Y {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: s, gridStateContext: i } = n, { table: l } = n.elements, u = document.createElement("div");
    u.className = Xn;
    let a = null, c = -1;
    l.addEventListener("mousedown", d), l.addEventListener("dragstart", C), l.addEventListener("dragover", w), l.addEventListener("drop", L), l.addEventListener("dragleave", R), l.addEventListener("dragend", E), l.addEventListener("mouseup", E), this.addRollbackTask(() => {
      l.removeEventListener("mousedown", d), l.removeEventListener("dragstart", C), l.removeEventListener("dragover", w), l.removeEventListener("drop", L), l.removeEventListener("dragleave", R), l.removeEventListener("dragend", E), l.removeEventListener("mouseup", E);
    });
    function d(v) {
      if (v.button !== 0 || t.classList.contains("is-resizing")) return;
      const x = J("th", "tr", v.target);
      if (!x) return;
      const h = Q(x), g = e.cell(h.row, h.col);
      if (T(g)) return;
      y({
        source: [
          o.getStartOfColumnId(g.col),
          o.getEndOfColumnId(g.col)
        ],
        cell: g
      });
      function T(f) {
        return f.cellType !== "col-header" || f.col < e.getFreezedColumnCount() || f.col < e.headerColumns;
      }
    }
    function C(v) {
      const { offsetY: x, offsetX: h } = v;
      if (e.findCellOrNull(x, h)?.cellType === "col-header") {
        if (!v.dataTransfer || !a) {
          v.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), v.dataTransfer.setData("ir-grid/move-columns-dragging", ""), v.dataTransfer.setDragImage(a.cell.element, ft, ft);
      }
    }
    function w(v) {
      const { dataTransfer: x, offsetY: h, offsetX: g } = v;
      if (!a || !x || !x.types.includes("ir-grid/move-columns-dragging")) return;
      const T = e.findCellOrNull(h, g);
      if (!T) return;
      const f = m(T.col);
      if (T.cellType !== "col-header" || p(f, a)) {
        b(), c = -1;
        return;
      }
      f !== c && I(f), v.preventDefault();
      function m(S) {
        const _ = e.getColumn(S), k = g - _.left < _.width / 2;
        return _.columnId + (k ? 0 : 1);
      }
      function p(S, _) {
        const [k, M] = _.source;
        return S >= k && S <= M || S < e.headerColumns;
      }
    }
    function L() {
      const v = a, x = c;
      !v || x < 0 || (b(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(v.source, x);
      }), e.forceLayoutTask(), e.selectColumn(v.cell.col));
    }
    function R() {
      b(), c = -1;
    }
    function E() {
      l.classList.remove("is-dragging"), b(), a = null, l.draggable = !1, c = -1, i.setIdle();
    }
    function y({ source: v, cell: x }) {
      l.draggable = !0, a = {
        source: v,
        cell: x
      };
    }
    function b() {
      c < 0 || !a || u.remove();
    }
    function I(v) {
      b(), c = v;
      const x = Math.min(c, s.length - 1), h = e.getColumn(x), g = h.colElement.getBoundingClientRect(), T = {
        left: g.left,
        width: 12
      }, f = T.width / 2;
      v === s.length && (T.left += h.width, T.width = f + 1), u.style.top = `${g.top + e.scrollTop}px`, u.style.left = `${T.left - f}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${T.width}px`, me("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const lr = [
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
function ar() {
  const r = se("div", qn), e = [];
  for (const n of lr)
    if (n.type === "divider") {
      const o = se("div", Jn);
      r.append(o);
    } else {
      const o = se("button", Qn), s = bt(`ir-icon--chevron-${n.value}`);
      o.dataset.type = n.type, o.append(s), o.onclick = () => t.onButtonClick(n.value), r.append(o), e.push(o);
    }
  const t = {
    buttonGroup: r,
    visibleButtonGroup(n, o) {
      r.style.display = n || o ? "" : "none";
      for (const s of e) {
        const l = s.dataset.type === "row" ? n : o;
        s.style.display = l ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class _i extends Y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: s } = n, i = se("div", Yn), l = se("div", Zn), u = ar();
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const a = {
      up() {
        const w = d(l.scrollTop);
        if (!w) return;
        const L = w.rowId - 1, R = L < 0 ? 0 : e.getRow(L).top;
        l.scrollTop = R;
      },
      down() {
        const w = d(l.scrollTop);
        w && (l.scrollTop = w.bottom);
      },
      left() {
        const w = C(l.scrollLeft);
        if (!w) return;
        const L = w.columnId - 1, R = L < 0 ? 0 : e.getColumn(L).left;
        l.scrollLeft = R;
      },
      right() {
        const w = C(l.scrollLeft);
        w && (l.scrollLeft = w.right);
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
    u.onButtonClick = (w) => a[w](), t.insertAdjacentElement("beforebegin", i), l.appendChild(t), i.append(l), i.append(u.buttonGroup), n.hook.addHook("resize", c), n.hook.addHook("changedFreezedRowHeight", c), n.hook.addHook("changedFreezedColumnWidth", c), this.addRollbackTask(() => {
      n.hook.removeHook("resize", c), n.hook.removeHook("changedFreezedRowHeight", c), n.hook.removeHook("changedFreezedColumnWidth", c);
    }), this.addRollbackTask(() => {
      const w = i.nextElementSibling;
      w ? w.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function c() {
      u.visibleButtonGroup(
        t.offsetHeight > l.clientHeight,
        t.offsetWidth > l.clientWidth
      );
    }
    function d(w) {
      let L = 0, R = o.visibleRowList.length - 1;
      for (; L <= R; ) {
        const E = L + Math.floor((R - L) / 2), y = o.visibleRowList[E];
        if (w >= y.top && w < y.bottom)
          return y;
        w < y.top ? R = E - 1 : L = E + 1;
      }
      return null;
    }
    function C(w) {
      let L = 0, R = s.visibleColumnList.length - 1;
      for (; L <= R; ) {
        const E = L + Math.floor((R - L) / 2), y = s.visibleColumnList[E];
        if (w >= y.left && w < y.right)
          return y;
        w < y.left ? R = E - 1 : L = E + 1;
      }
      return null;
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
class xi extends Y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { onRowClick: o, freezeLastColumn: s } = this.args;
    t.classList.add(Xe), s && t.classList.add(Ye), e.addGlobalEventListener(t, "mousedown", i), e.addGlobalEventListener(t, "copy", l), this.addRollbackTask(() => {
      t.classList.remove(Xe, Ye), t.removeEventListener("mousedown", i), t.removeEventListener("copy", l);
    });
    function i(u) {
      Io(u.target instanceof HTMLElement);
      const a = u.target.closest("td");
      if (!a) return;
      const c = Q(a), d = e.cell(c.row, c.col);
      d.cellType === "body-cell" && (e.selectRow(d.row, d), !u.target.closest("button") && o?.(e, d.row, u));
    }
    function l(u) {
      e.onNativeCopy(u);
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
function cr(r, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, o = 0, s = 0;
  const i = {
    setRow(C) {
      o = C;
    },
    setCol(C) {
      s = C;
    }
  }, l = () => t.hasHeaderRows ? 0 : r.headerRows, u = () => t.hasHeaderColumns ? 0 : r.headerColumns;
  function* a() {
    i.setRow(l()), i.setCol(u());
    const C = r.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield r.cell(o, s);
          break;
        case "selected-col":
          if (!C) throw new Error("No selection in finding");
          St(s, C) && (yield r.cell(o, s));
          break;
        case "selected-row":
          if (!C) throw new Error("No selection in finding");
          yt(o, C) && (yield r.cell(o, s));
          break;
        case "selection":
          if (!C) throw new Error("No selection in finding");
          Je(o, s, C) && (yield r.cell(o, s));
          break;
        case "custom":
          if (!t.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          Je(o, s, t.customRange) && (yield r.cell(o, s));
          break;
      }
      if (w()) break;
    }
    function w() {
      const L = t.direction;
      if (L === "by-columns" || L === "left-right") {
        if (++o, o >= r.getRowCount() && (++s, o = l()), s >= r.getColCount())
          if (n)
            n = !1, o = l(), s = u();
          else return !0;
      } else if (++s, s >= r.getColCount() && (++o, s = u()), o >= r.getRowCount())
        if (n)
          n = !1, o = l(), s = u();
        else return !0;
    }
  }
  function c(C) {
    const w = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), L = t.matchAll ? `^${w}$` : w, R = t.ignoreCase ? "i" : "", E = new RegExp(L, R);
    return e.onCellCheck ? e.onCellCheck(E, C) : E.test(C.text);
  }
  let d = a();
  return {
    resetCursor() {
      d = a();
    },
    findNext(C) {
      for (vt(t, C) || (d = a()), Object.assign(t, C); ; ) {
        const w = d.next();
        if (!w.done && w.value && c(w.value))
          return n = !0, w.value;
        if (w.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(C) {
      const w = [];
      C && Object.assign(t, C);
      for (const L of a())
        c(L) && w.push(L);
      return w;
    },
    setCursor(C, w) {
      if (C < 0 || w < 0) throw new Error("row or col must be greater than or equal to 0");
      i.setRow(C), i.setCol(w);
    }
  };
}
function Fe(r) {
  if (!(r instanceof Function))
    throw new Error("func is not a function");
  try {
    return r();
  } catch (e) {
    console.error(e);
  }
}
const dr = 4, Te = "is-hidden";
function ur(r, e) {
  return r.top > e.bottom || e.top > r.bottom || r.left > e.right || e.left > r.right ? null : {
    top: Math.max(r.top, e.top),
    left: Math.max(r.left, e.left),
    bottom: Math.min(r.bottom, e.bottom),
    right: Math.min(r.right, e.right)
  };
}
const hr = no, gr = [oo, so, ro, io], fr = ["top", "left", "bottom", "right"];
function mr(r) {
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
  ], [o, s, i, l] = n, u = [o, i], a = [s, l];
  e.classList.add(eo, Te), n.forEach((b, I) => b.className = `${to} border-line__${fr[I]}`), t.forEach((b) => e.appendChild(b)), n.forEach((b) => e.appendChild(b));
  function c(b) {
    const { top: I, left: v, bottom: x, right: h } = w(b), g = b.top < r.getFreezedRowCount() ? r.scrollTop : 0, T = b.left < r.getFreezedColumnCount() ? r.scrollLeft : 0;
    return {
      top: I + g,
      left: v + T,
      width: h - v,
      height: x - I
    };
  }
  function d(b) {
    b.classList.add(Te), delete b.dataset.y, delete b.dataset.x, delete b.dataset.width, delete b.dataset.height, delete b.dataset.visible;
  }
  function C(b, I) {
    const v = t[b], x = c(I);
    v.className = `${hr} ${gr[b]}`, v.dataset.top = I.top.toString(), v.dataset.left = I.left.toString(), v.dataset.bottom = I.bottom.toString(), v.dataset.right = I.right.toString(), v.dataset.y = x.top.toString(), v.dataset.x = x.left.toString(), v.dataset.width = x.width.toString(), v.dataset.height = x.height.toString(), v.dataset.visible = "true", v.style.top = `${x.top}px`, v.style.left = `${x.left}px`, v.style.width = `${x.width}px`, v.style.height = `${x.height}px`;
  }
  function w(b) {
    return {
      top: r.getRow(b.top).top - ae,
      left: r.getColumn(b.left).left - ce,
      bottom: r.getRow(b.bottom).bottom,
      right: r.getColumn(b.right).right
    };
  }
  function L(b) {
    const { left: I, right: v } = b, x = r.getFreezedColumnCount();
    return W(I, v + 1).reduce((h, g) => {
      const T = r.getColumn(g);
      return T.visible ? h + (g >= x ? T.widthWithBorder : 0) : h;
    }, 0);
  }
  function R(b) {
    const { top: I, bottom: v } = b, x = r.getFreezedRowCount();
    return W(I, v + 1).reduce((h, g) => {
      const T = r.getRow(g);
      return T.visible ? h + (g >= x ? T.heightWithBorder : 0) : h;
    }, 0);
  }
  function E(b, I, v, x) {
    if (b <= x)
      return Math.min(I, v);
    const h = b - x;
    return v > h ? Math.max(0, v - h) : 0;
  }
  function y(b) {
    const { top: I, left: v, bottom: x, right: h } = w(b), {
      fixedRowHeight: g,
      fixedColumnWidth: T,
      scrollTop: f,
      scrollLeft: m
    } = r, p = g + f, S = T + m, _ = I < g, k = x <= g, M = v < T, z = h <= T, H = I >= p, O = x >= p, $ = v >= S, N = h >= S, D = L(b), we = R(b), j = E(v, D, m, T), K = E(I, we, f, g), ie = h - v - j, q = x - I - K, ee = I + (_ ? f : K), te = v + (M ? m : j), pe = te < 0 ? 1 : 0, Re = ee < 0 ? 1 : 0;
    (function() {
      u.forEach((ge) => {
        ge.style.left = `${te + pe}px`, ge.style.width = `${ie - pe}px`;
      });
    })(), function() {
      a.forEach((ge) => {
        ge.style.top = `${ee + Re}px`, ge.style.height = `${q - Re}px`;
      });
    }(), function() {
      if (ie <= 1) {
        o.style.display = "none";
        return;
      }
      o.style.removeProperty("display"), _ ? o.style.top = `${I + f + Re}px` : H ? o.style.top = `${I + Re}px` : o.style.display = "none";
    }(), function() {
      if (ie <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), k ? i.style.top = `${x + f - ae}px` : O ? i.style.top = `${x - ae}px` : i.style.display = "none";
    }(), function() {
      if (q <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), M ? s.style.left = `${v + m + pe}px` : $ ? s.style.left = `${v + pe}px` : s.style.display = "none";
    }(), function() {
      if (q <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), z ? l.style.left = `${h + m - ce}px` : N ? l.style.left = `${h - ce}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(b) {
      const I = r.headerRows, v = r.getFreezedRowCount(), x = r.headerColumns, h = r.getFreezedColumnCount(), g = r.getRowCount() - 1, T = r.getColCount() - 1, m = [
        { top: I, left: x, bottom: v - 1, right: h - 1 },
        { top: I, left: h, bottom: v - 1, right: T },
        { top: v, left: x, bottom: g, right: h - 1 },
        { top: v, left: h, bottom: g, right: T }
      ].map((p) => ur(b, p));
      for (let p = 0; p < dr; p++) {
        const S = m[p];
        S ? C(p, S) : d(t[p]);
      }
      y(b);
    },
    applyGridScroll() {
      const b = r.getSelection();
      b && this.updateArea(b);
    },
    show() {
      e.classList.remove(Te);
    },
    hide() {
      e.classList.add(Te);
    }
  };
}
class Cr {
  #e;
  #t;
  constructor(e, t, n) {
    this.#e = t, this.#t = mr(e), n.appendChild(this.#t.selectionRoot);
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
class wr extends G {
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
class pr extends G {
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
class Rr extends G {
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
function Pt(r, e) {
  const [t, n] = r, [o, s] = e, i = n - t, l = s - o;
  return i === l ? [e, r] : t < o ? [[s - i, s], [t, t + l]] : [[o, o + i], [n - l, n]];
}
class _r extends G {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Pt(...this._args));
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
class xr extends G {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Pt(...this._args));
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
class br extends G {
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
class vr extends G {
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
class yr extends G {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: o, text: s }) => {
      this._instance.setText(n, o, s);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new ue(this._instance, this._instance), [t, n, o, s] = this._args, i = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: o, right: s }))
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
function $t(r, e) {
  const [t, n] = r, o = n - t;
  return t < e ? [[e - o - 1, e - 1], t] : [[e, e + o], n + 1];
}
class Sr extends G {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...$t(this._args[0], this._undoContext.targetId));
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
class Er extends G {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...$t(this._args[0], this._undoContext.targetId));
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
class Tr extends G {
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
    const e = new ke(this._instance), [t, n] = this._args;
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
class Ir extends G {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertRows(this._args[0], e), this._instance.forceLayoutTask(), this._undoContext.removedRows.forEach((t) => {
      const n = this._instance.getRow(t.rowId);
      this._instance.setRowHeight(n.rowId, t.height), this._instance.setRowVisible(n.rowId, t.visible);
      for (let o = 0; o < t.cellCounts; o++) {
        const s = t.getCell(o);
        n.getCell(o).cellRenderer = s.cellRenderer, this._instance.setCell(n.rowId, o, s.metaInfo), (s.mergeInfo.rowSpan > 1 || s.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          s.row,
          s.col,
          s.bottom,
          s.right
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
      removedRows: W(e, t + 1).map((n) => this._instance.getRow(n)),
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
class Lr extends G {
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
class kr extends G {
  _execute() {
    this._instance.setCellRenderer(...this._args);
  }
  _getUndoContext() {
    const [e, t] = this._args;
    return {
      row: e,
      col: t,
      cellRenderer: this._instance.cell(e, t).cellRenderer
    };
  }
  _undo() {
    this._instance.setCellRenderer(this._args[0], this._args[1], this._undoContext.cellRenderer);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
class Mr extends G {
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
const mt = {
  addRow: pr,
  addColumn: wr,
  setCell: de,
  clearCells: Ot,
  setRowHeight: At,
  setColumnWidth: zt,
  insertRows: vr,
  insertColumns: br,
  setRowVisible: Lr,
  setColumnVisible: Rr,
  mergeCells: yr,
  splitCells: Mr,
  removeRows: Ir,
  removeColumns: Tr,
  exchangeRows: _r,
  exchangeColumns: xr,
  moveRows: Sr,
  moveColumns: Er,
  setCellRenderer: kr
};
function Hr(r) {
  if (!(r in mt)) {
    console.warn(`There is no method named ${r} in IRGridCommandMap`);
    return;
  }
  return mt[r];
}
function zr(r) {
  if (r === B.name)
    return Hr;
}
function Ar(r, e, t, n, o) {
  const s = zr(e);
  if (!s) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = s(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  r.pushCommand(new i(n, o));
}
function V() {
  return function(e, t, n) {
    const o = n.value;
    return n.value = function(...s) {
      const { commandManager: i } = this;
      return i ? i.isRecording && Ar(i, this.constructor.name, t, this, s) : console.warn("No commandManager in this context"), o.apply(this, s);
    }, n;
  };
}
var Dr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, P = (r, e, t, n) => {
  for (var o = Wr(e, t), s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Dr(e, t, o), o;
};
const Ne = new Pe(), Ct = {}, Or = [
  "text/html",
  "text/plain"
];
function Fr() {
  return [
    new Nt({}),
    new Wt(),
    new Gt(),
    new Dt({
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
class B extends mo {
  #e;
  #t;
  #r;
  #a = [];
  #l;
  #u = !1;
  // IRGrid Util
  #s;
  #o;
  #g = new ke(this);
  #d;
  #f;
  #m;
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: o,
      defaultColumnCellFormat: s,
      plugins: i
    } = e;
    if (this.#l = {
      all: {
        editable: !0,
        text: ""
      }
    }, this.#m = Object.assign({ rowSpan: !0, colSpan: !0 }, e.copyOptions), s)
      for (const [c, d] of Object.entries(s))
        this.#l[c] = Object.assign(this.#l[c] || {}, d);
    this.#o = new js(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new fo({ context: this }),
        gridStateContext: new Ls(this),
        cursorManager: Ft(this, !1)
      }
    ), this.#w(), this.#e = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: Ne,
      defaultSize: this.#o.getThemeValue("grid.defaultColumnWidth"),
      minSize: this.#o.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this.#e.minSize = Math.min(this.#e.defaultSize, this.#e.minSize), this.#e.maxSize = Math.max(this.#e.defaultSize, this.#e.maxSize), this.#t = Object.assign({
      colCount: 0,
      cellRenderer: Ne,
      defaultSize: this.#o.getThemeValue("grid.defaultRowHeight"),
      minSize: this.#o.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this.#o.getThemeValue("grid.defaultRowMaxSize")
    }, n), this.#t.minSize = Math.min(this.#t.defaultSize, this.#t.minSize), this.#t.maxSize = Math.max(this.#t.defaultSize, this.#t.maxSize), this.#r = Object.assign({
      rowCount: 5,
      cellRenderer: Ne
    }, o), this.contextElement.classList.add(lo, ao), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l } = this.#o.elements, { gridStateContext: u } = this.#o;
    this.contextElement.appendChild(l), this.resizeObserve(() => {
      this.#s.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection"), this.#s.forceRunTasks(), this.#o.hook.emit("resize", []), this.onResizeContext();
    }), this.#y(i ?? Fr()), this.addCoreElement(l), this.#d = new ue(this.#n, this.#i), this.#f = new Cr(this, u, l), this.#s = new Os({
      grid: this,
      store: this.#o,
      contextElement: this.contextElement,
      selector: this.#f
    }), u.selectionRangeState.addSubscription((c, d) => {
      c?.activeCell !== d?.activeCell && (c?.activeCell.deactivate(), d?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((c, d) => {
      c.forEach((C) => C.deactivate()), d.forEach((C) => C.activate());
    }), u.selectionRangeState.addSubscription((c, d) => {
      d ? u.activateHeaderCellState.next([...this.#d.getSelectionHeaderIterator(d.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((c, d) => {
      c?.activeCell !== d?.activeCell && Fe(() => this.onChangeCell(d?.activeCell ?? null)), Fe(d ? () => this.onSelectCell(d.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((c, d) => {
      this.onSelectChanged(d?.range ?? null, c?.range ?? null);
    }), u.selectionRangeState.addSubscription((c, d) => {
      d?.activeCell && this.#o.gridTextarea.setPosition(d.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((c, d) => {
      this.contextElement.dataset.mode = d.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (c) => {
      c.preventDefault();
      const { y: d, x: C } = Wo(c);
      this.onContextMenu(c, this.findCellOrNull(d, C));
    });
    const a = () => this.focus();
    this.addGlobalEventListener(this.contextElement, "focus", a), this.addGlobalEventListener(this.contextElement, "dragend", a), this.addGlobalEventListener(this.contextElement, "mouseup", a), this.#o.hook.addHook("changedFreezedRowHeight", (c, d) => this.#b(c, d)), this.#o.hook.addHook("changedFreezedColumnWidth", (c, d) => this.#R(c, d)), this.#S(), this.#o.gridTextarea.mountElement(l);
  }
  /**
   * @version ^2.15.1
   */
  clearPlugins() {
    const e = this.#a.slice();
    for (const t of e)
      this.removePlugin(t);
  }
  onDestroy() {
    this.clearPlugins(), this.#o.hook.clearHooks("changedFreezedRowHeight"), this.#o.hook.clearHooks("changedFreezedColumnWidth");
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated getFreezedRowCount 사용 권장
   */
  get fixedRowCount() {
    return this.#e.rowCount;
  }
  get componentLabel() {
    return "grid";
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
  get #h() {
    return this.#o.gridStateContext;
  }
  get #n() {
    return this.#o.rowManager;
  }
  get #c() {
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
    const { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: o } = this.contextElement;
    return { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: o };
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
    return this.#h.selectionRangeState.value?.activeCell ?? null;
  }
  /*
   * Setters
   */
  set activeCell(e) {
    if (e === this.activeCell) return;
    if (!e) {
      this.#h.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this.#h.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this.#h.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  set readonly(e) {
    this.#u = e, this.#n.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this.#o
    }), this.#a.push(e);
  }
  getColumnByLeft(e) {
    const t = this.#i.visibleColumnList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const s = n + Math.floor((o - n) / 2), i = t[s];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? o = s - 1 : n = s + 1;
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
    if (!this.#a.includes(e))
      throw new Error("plugin not found");
    try {
      e.unmount(), this.#a.splice(this.#a.indexOf(e), 1);
    } catch (t) {
      console.error("removing plugin error!", t);
    }
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
    return this.#c.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this.#c.splitCells(e, t), this.#s.addTask("virtualRender");
  }
  mergeCells(e, t, n, o) {
    this.forceLayoutTask(), this.#c.mergeCells({ top: e, left: t, bottom: n, right: o }), this.#s.addTask("virtualRender");
    const s = this.getSelection();
    s && this.selectRange(s.top, s.left, s.bottom, s.right);
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
    const { scrollTop: n, scrollLeft: o } = this, s = e < n + this.fixedRowHeight ? e - n : e, i = t < o + this.fixedColumnWidth ? t - o : t, l = this.getRowByTop(s);
    if (!l) return null;
    const u = this.getColumnByLeft(i);
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
    this.#h.selectionRangeState.next(null), this.#f.releaseRange();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this.#n.clearRows(), this.#c.clearMergeCells(this.headerRows), this.commandManager.clearCommands(), this.#s.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this.#i.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    this.#h.selectionRangeState.next({
      range: e,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
      activeCell: t ?? this.cell(e.top, e.left)
    }), this.#s.addTask("updateSelection");
  }
  selectRange(e, t, n, o, s = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: o }, s);
  }
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return W(e.mergeInfo.colSpan).reduce((n, o) => this.getColumnVisible(t + o) ? n + this.getColumnWidth(t + o) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return W(e.mergeInfo.rowSpan).reduce((n, o) => this.getRowVisible(t + o) ? n + this.getRowHeight(e.row + o) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  getSelection() {
    return this.#h.selectionRangeState.value?.range ?? null;
  }
  scrollOnRow(e) {
    this.#s.isScheduled ? this.afterRender(() => this.#x(e)) : this.#x(e);
  }
  scrollOnCol(e) {
    this.#s.isScheduled ? this.afterRender(() => this.#_(e)) : this.#_(e);
  }
  forceLayoutTask() {
    this.#s.forceRunTasks();
  }
  getPlugin(e) {
    for (const t of this.#a)
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
  setCellRenderer(e, t, n) {
    this.cell(e, t).cellRenderer = n;
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
    this.#i.setColumnWidth(e, n), this.onResizeColumn(e), this.#o.hook.emit("onColumnChanged", [e, e, "setWidth"]), this.#s.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#i.freezedColumns && this.#s.addTask("updateRowsStickyLeft");
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
    this.cell(e, t).props = { object: n };
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
    if (this.#c.checkConflictingInRows(e, t)) return !1;
    for (let n = e; n <= t; n++) {
      const o = this.getRow(n);
      for (const s of o.getCellGenerator())
        s.isMerged && this.#c.removeMergeCell(s.row, s.col);
    }
    return this.#n.removeRows(e, t), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection"), !0;
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this.#c.checkConflictingInColumns(e, t) ? !1 : (this.#n.runFuncEachRow((n) => {
      for (const o of n.getCellGenerator(e, t))
        o.isMerged && this.#c.removeMergeCell(o.row, o.col);
    }), this.#n.removeColumns(e, t), this.#i.removeColumns(e, t), this.#o.hook.emit("onColumnChanged", [e, t, "removeColumns"]), this.#s.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection"), e < this.#i.freezedColumns && this.#s.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this.#e.defaultSize) {
    const t = F(e, this.minColWidth, this.maxColWidth), n = this.#i.addColumn(t);
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
    const o = this.getRowCount(), s = F(e, this.headerRows, o);
    if (!this.#c.checkCanInsertRow(s)) return !1;
    const i = F(n, this.minRowHeight, this.maxRowHeight);
    if (s === o) {
      for (let u = 0; u < t; u++)
        this.addRow(i);
      return !0;
    }
    const l = W(t).map((u) => this.createIRGridRow(s + u, 0, i));
    return this.#n.insertRows(s, l), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection"), !0;
  }
  /**
   *
   * @command
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this.#e.defaultSize) {
    const o = this.getColCount(), s = F(e, this.headerColumns, o);
    if (!this.#c.checkCanInsertColumn(e)) return !1;
    const i = F(n, this.minColWidth, this.maxColWidth);
    if (s === o) {
      for (let u = 0; u < t; u++)
        this.addColumn(i);
      return !0;
    }
    this.#i.insertColumns(e, t, i), this.#n.insertColumns(e, t, (u, a) => this.createIRGridCell(u, a));
    const l = this.#s.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
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
    W(e, t + 1).forEach((n) => {
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
    W(e, t + 1).forEach((n) => {
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
      const t = (await Eo.read()).flat();
      for await (const n of t)
        for (const o of Or)
          e[o] === "" && n.types.includes(o) && (e[o] = await To(await n.getType(o)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = ko(Ct) ?? "";
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
      ot(
        await this._createClipboardGetter()
      )
    );
  }
  #C(e, t) {
    if (this.#m.rowSpan)
      for (const n of this.#d.getSelectionGenerator(e))
        n.mergeInfo.rowSpan > 1 && this.splitCells(n.row, n.col);
    if (this.#m.colSpan)
      for (const n of this.#d.getSelectionGenerator(e))
        n.mergeInfo.colSpan > 1 && this.splitCells(n.row, n.col);
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = hs(this, this.#m), o = n.getPastingRange(e, t);
    this.#C(o, t);
    const s = n.beforePastingList(o, t);
    s.length !== 0 && (this.onClipboardBeforePaste(o), n.pasteTask(s), this.onClipboardAfterPaste(o), this.select(o));
  }
  hasRow(e) {
    return e < this.getRowCount();
  }
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e) {
    for (const t of this.#d.getSelectionGenerator(e))
      this.onClearCellCheck(t) && t.clear();
  }
  setRowVisible(e, t) {
    return this.#c.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this.#n.setRowVisible(e, t), this.#s.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection")), !0);
  }
  setRowVisibleBulk(e, t) {
    this.#n.setRowVisibleBulk(e, t), this.#s.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  getRowVisible(e) {
    return this.#n.getRowVisible(e);
  }
  setColumnVisible(e, t) {
    return this.#c.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this.#i.setColumnVisible(e, t), this.#n.setColumnVisible(e, t), this.#s.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this.#i.freezedColumns && this.#s.addTask("updateRowsStickyLeft"), this.#o.hook.emit("onColumnChanged", [e, e, "setVisible"])), !0);
  }
  getColumnVisible(e) {
    return this.#i.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return cr(this, e);
  }
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  selectColumns(e, t, n = this.activeCell) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, n ?? this.cell(this.headerRows, e));
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
    this.#i.freezeColumns(e), this.#s.addTask("updateSelection").addTask("updateRowsStickyLeft");
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  setClipboardOptions(e) {
    Object.assign(this.#m, e);
  }
  sort(e, t, n, o) {
    const s = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(o ?? this.getRowCount(), this.getRowCount());
    this.#n.sort(e, t, s, i), this.#s.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(e) {
    for (const t of this.#d.getSelectionGenerator(e)) {
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
    if (this.#c.checkConflictingInRows(...e) || this.#c.checkConflictingInRows(...t))
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
    if (e.some((n) => this.#i.isInvalidColumnId(n)) || t.some((n) => this.#i.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this.#c.checkConflictingInColumns(...e) || this.#c.checkConflictingInColumns(...t))
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
    if (this.#c.checkConflictingInRows(...e))
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
    if (this.#c.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this.#v(t);
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
    const { top: t, left: n, bottom: o, right: s } = e;
    if (t === o && n === s) return !0;
    const i = this.getRow(t).getCell(n);
    return o === i.bottom && s === i.right;
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
  /**
   * 셀을 클릭하거나 선택된 범위가 변경되었을 때, activeCell이 호출됨.
   * @deprecated 같은 셀을 클릭하여도 발동하여 성능 이슈가 있으므로, 더블 클릭 등의 기능과 연계할 떄는 `onChangeCell`을 사용할 것.
   */
  onSelectCell(e) {
  }
  onChangeCell(e) {
  }
  onActiveCellNull() {
  }
  onResizeContext() {
  }
  onResizeColumn(e) {
  }
  onEditCellDone(e, t, n, o, s, i) {
  }
  onSelectChanged(e, t) {
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
  onEditInput(e, t, n) {
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
    const o = this.#g.getCellMatrixByRange(t).map((s) => s.map((i) => ({
      text: this.onCopyCellText(i),
      cellVisible: i.mergeMain === void 0,
      rowSpan: i.mergeInfo.rowSpan,
      colSpan: i.mergeInfo.colSpan,
      isFormatted: !1
    })));
    vs(e.clipboardData, o), Mo(Ct, JSON.stringify(o)), this.focus(), this.onCopy(), e.preventDefault();
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
    const n = ot(e.clipboardData);
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
    if (!e.element.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return console.warn(`not connected cell element row: ${e.row}, col: ${e.col}`), !1;
    const o = this.#o.gridTextarea;
    o.onEditDone = (s, i, l, u, a, c) => {
      this.onEditCellDone(s, i, l, u, a, c), this.#h.gridModeState.value.mode === "edit-cell" && this.#h.setIdle();
    }, o.onEditKeyDown = (s, i, l, u) => this.onEditKeyDown(s, i, l, u), o.onEditInput = (s, i) => this.onEditInput(s, i, e), o.onEnterOnEdit = () => {
      let s = this.#o.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === s) {
        if (i = this.#o.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        s = this.#o.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(s, i), this.selectCell(s, i), this.afterRender(() => this.doEditMode(this.cell(s, i), !1, !0));
    };
    try {
      return this.#h.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell: e }
      }), o.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
    } catch (s) {
      return console.error("IRGrid.doEditMode Error!", s), !1;
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
  #b(e, t) {
    const n = t, o = e + (n < this.getRowCount() ? this.#n.getRowHeight(n) : 0) + (this.hasHorizontalScroll() ? Ze : 0);
    X(this.contextElement, {
      [A.minHeight]: `${o}px`
    });
  }
  #R(e, t) {
    const n = t, o = e + (n < this.getColCount() ? this.getColumnWidth(n) : 0) + (this.hasVerticalScroll() ? Ze : 0);
    X(this.contextElement, {
      [A.minWidth]: `${o}px`
    });
  }
  #v(e) {
    return e >= this.#i.length ? this.#i.length : e < this.#i.freezedColumns ? this.#i.freezedColumns : this.#n.getStartOfColumnId(e);
  }
  #_(e) {
    const t = F(e, 0, this.getColCount() - 1), n = this.getColumnLeft(t), o = n + this.getColumnWidth(t), { fixedColumnWidth: s, scrollRight: i, scrollLeft: l } = this, u = l + s;
    i < o ? this.contextElement.scrollLeft = l + (o - i) : u > n && (this.contextElement.scrollLeft = n - s);
  }
  #x(e) {
    const t = F(e, 0, this.getRowCount() - 1), n = this.getRow(t), o = n.top, s = n.top + n.height, { scrollBottom: i, fixedRowHeight: l, scrollTop: u } = this, a = u + l;
    i < s ? this.contextElement.scrollTop = u + (s - i) : a > o && (this.contextElement.scrollTop = o - l);
  }
  onCheckCellReadonly(e) {
    return this.#u ? !0 : e.props.readonly === !0;
  }
  #y(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  #S() {
    W(this.#e.colCount).forEach(() => this.addColumn(this.#e.defaultSize)), this._createBulkRows(this.#e.rowCount + this.#r.rowCount), this.#R(this.#i.fixedColumnsWidth, this.#i.freezedColumns);
  }
  #p(e) {
    e.cellType = "col-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onColumnClick(e);
    };
  }
  #E(e) {
    e.cellType = "row-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onRowClick(e);
    };
  }
  #T(e) {
    e.cellType = "body-cell", e.onClear = () => this.onClearCell(e), e.onDblClick = () => this.onDoubleClickCell(e);
  }
  #w() {
    X(this.contextElement, {
      [A.cellTopPadding]: `${this.#o.getThemeValue("grid.paddingTop")}px`,
      [A.cellLeftPadding]: `${this.#o.getThemeValue("grid.paddingLeft")}px`,
      [A.cellBottomPadding]: `${this.#o.getThemeValue("grid.paddingBottom")}px`,
      [A.cellRightPadding]: `${this.#o.getThemeValue("grid.paddingRight")}px`
    });
  }
  #I(e, t, n, o) {
    if (e === "col-header")
      return this.#e.cellRenderer;
    if (e === "row-header")
      return this.#t.cellRenderer;
    if (e === "body-cell")
      return this.#r.cellRenderer;
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
    const n = this.#L(e, t), o = n.endsWith("header") ? "th" : "td", s = this.#k(n, t), i = this.#I(n, e, t, s), l = new zs({
      row: e,
      col: t,
      tag: o,
      cellRenderer: i,
      props: s
    });
    return l.onRightClick = (u, a) => this.onCellRightClick(u, a), l.onCheckReadonly = () => this.onCheckCellReadonly(l), n === "col-header" ? this.#p(l) : n === "row-header" ? this.#E(l) : this.#T(l), this.onCreatingCell(l), l;
  }
  createIRGridRow(e, t, n) {
    const o = new As({
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return W(this.getColCount()).forEach((s) => {
      o.addCell(this.createIRGridCell(e, s)), !this.getColumnVisible(s) && o.setColumnVisible(s, !1);
    }), o.onMounted = () => {
      o.freezeColumns(this.#t.colCount), this.onMountedRow(o.rowId);
    }, o.onChangedHeight = () => {
      W(this.getColCount()).forEach((s) => {
        const i = o.getCell(s), l = i.mergeMain ? i.mergeMain : i.mergeInfo.rowSpan > 1 ? i : null;
        l && (l.height = this.#c.getMergedRowHeight(l.row, l.row + l.mergeInfo.rowSpan - 1));
      });
    }, o;
  }
}
P([
  V()
], B.prototype, "splitCells");
P([
  V()
], B.prototype, "mergeCells");
P([
  V()
], B.prototype, "setCellRenderer");
P([
  V()
], B.prototype, "setColumnWidth");
P([
  V()
], B.prototype, "setRowHeight");
P([
  V()
], B.prototype, "setCell");
P([
  V()
], B.prototype, "addRow");
P([
  V()
], B.prototype, "removeRows");
P([
  V()
], B.prototype, "removeColumns");
P([
  V()
], B.prototype, "addColumn");
P([
  V()
], B.prototype, "insertRows");
P([
  V()
], B.prototype, "insertColumns");
P([
  V()
], B.prototype, "clearCells");
P([
  V()
], B.prototype, "setRowVisible");
P([
  V()
], B.prototype, "setColumnVisible");
P([
  V()
], B.prototype, "exchangeRows");
P([
  V()
], B.prototype, "exchangeColumns");
P([
  V()
], B.prototype, "moveRows");
P([
  V()
], B.prototype, "moveColumns");
const Nr = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function wt(r) {
  return r === "" ? !0 : Nr.test(r);
}
function pt(r) {
  return r === "" ? Number.NEGATIVE_INFINITY : parseFloat(r);
}
function jt(r, e) {
  const t = wt(r), n = wt(e);
  return t && n ? pt(r) < pt(e) ? -1 : 1 : !t && !n ? r < e ? -1 : 1 : t ? -1 : 1;
}
const Br = (r) => (e, t) => jt(e.getCell(r).text, t.getCell(r).text), bi = ({
  grid: r
}) => ({
  sortColumn(e, t, n, o) {
    r.sort(Br(e), t, n, o);
  }
}), vi = (r) => {
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
      return jt(n.text, o.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${r.uuid}`), r.onColumnClick = (n) => {
        t && this.toggleSortColumn(n);
      };
    },
    sortColumn(n, o) {
      r.sort((s, i) => this.compareTo(s.getCell(n), i.getCell(n)), o);
    },
    toggleSortColumn(n) {
      if (n.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      const o = n.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== n && this.clearSortOrder(), e = n, n.cellInfo = { sortOrder: o }, this.sortColumn(n.col, o);
    }
  };
}, yi = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, Si = /^-?\d+(\.\d+)?$/;
export {
  yi as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  Si as ALLOW_ONLY_NUMBER_PATTERN,
  mi as CellDropPlugin,
  fi as ColumnFillPlugin,
  Lt as CustomCellRenderer,
  hi as DefaultKeyPlugin,
  B as IRGrid,
  rs as IRGridButtonRenderer,
  Gt as IRGridCellDropPlugin,
  Z as IRGridCellRenderer,
  Et as IRGridCheckboxRenderer,
  tr as IRGridColumnFillPlugin,
  Yo as IRGridDatePickerRenderer,
  ds as IRGridDefaultCellIconButtonRenderer,
  Pe as IRGridDefaultCellRenderer,
  Nt as IRGridDefaultKeyPlugin,
  wi as IRGridExchangeByHeaderCellPlugin,
  Wt as IRGridMouseCellSelectorPlugin,
  Ri as IRGridMoveColumnsPlugin,
  pi as IRGridMoveRowsPlugin,
  _i as IRGridOverflowPanelPlugin,
  ir as IRGridPopoverPlugin,
  Qo as IRGridProgressRenderer,
  It as IRGridRadioCellRenderer,
  Dt as IRGridResizerPlugin,
  us as IRGridRowNoHeaderCellRenderer,
  qs as IRGridRowSelectionPlugin,
  Uo as IRGridSelectCellRenderer,
  nr as IRGridSingleCellDragPlugin,
  xi as IRGridTablePlugin,
  ui as MouseCellSelectorPlugin,
  di as ResizerPlugin,
  gi as RowSelectionPlugin,
  Ci as SingleCellDragPlugin,
  jt as cellCompare,
  pt as cellTextToNum,
  as as createCellContent,
  cs as createCellContentWithIconButton,
  ci as createCustomRenderer,
  vi as createIRGridColumnSortManager,
  bi as createInferenceSortHandler,
  wt as numberCheckDefault,
  si as renderGridButton,
  ii as renderGridCellDefault,
  li as renderGridCellIconButton,
  ei as renderGridCheckbox,
  ni as renderGridDatePicker,
  oi as renderGridProgress,
  ri as renderGridRadio,
  ti as renderGridSelect,
  ai as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
