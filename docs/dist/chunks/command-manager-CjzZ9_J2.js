import { s as X, l as Q, m as ee, n as te, o as ne, p as ie, q as se, r as oe, t as ae, u as re, v as ce, w as le, x as de, y as ue, A as he, B as $, C as me, D as pe, E as fe, F as ve, G as be, H as Ce, I as ke, J as Ee, K as ge, L as De } from "./css-DfN_pP8W.js";
import { b as F, g as U, e as Y, h as O } from "./floating-Bpd99Qyw.js";
import { I as W } from "./index-BWYFssyG.js";
import { c as we, a as _, b as xe } from "./rx-state-6cX-rPVL.js";
import { c as G } from "./outside-CbbQ5fFh.js";
import { i as T, d as x } from "./index-Bmt0z1bM.js";
function Ie(s, e, t = 1) {
  const n = [];
  for (let a = s; a < e; a += t)
    n.push(a);
  return n;
}
function Ge(s, e, t = 1) {
  const { start: n, end: a } = e === void 0 ? { start: 0, end: s } : { start: s, end: e };
  return {
    forEach(c) {
      let l = n;
      for (; l !== a; )
        c(l), l += t;
    },
    map(c) {
      const l = [];
      for (let h = n; h < a; h += t)
        l.push(c(h));
      return l;
    },
    some(c) {
      let l = n;
      for (; l !== a; ) {
        if (c(l))
          return !0;
        l += t;
      }
      return !1;
    },
    asList() {
      return Ie(n, a, t);
    },
    reduce(c, l) {
      let h = l, r = n;
      for (; r !== a; )
        h = c(h, r), r += t;
      return h;
    }
  };
}
function H() {
  const s = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: n,
    add: c,
    remove: a,
    clear: l,
    clearAll: h,
    forEach: r,
    forEachAsync: b
  };
  function e(m) {
    return s.has(m);
  }
  function t(m) {
    return s.get(m);
  }
  function n(m) {
    const f = s.get(m);
    return f || null;
  }
  function a(m, f) {
    const u = n(m);
    if (!u)
      return;
    const o = u.indexOf(f);
    o > -1 && u.splice(o, 1);
  }
  function c(m, f) {
    e(m) ? t(m).push(f) : s.set(m, [f]);
  }
  function l(m) {
    s.set(m, []);
  }
  function h() {
    s.clear();
  }
  function r(m, f) {
    const u = n(m);
    if (!u)
      return !0;
    for (const o of u)
      if (f(o) === !1)
        return !1;
    return !0;
  }
  async function b(m, f) {
    const u = n(m);
    if (!u)
      return !0;
    try {
      for (const o of u) {
        let v = f(o);
        if (v instanceof Promise && (v = await v), v === !1)
          return !1;
      }
    } catch (o) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(o), o;
    }
    return !0;
  }
}
async function Le(s) {
  for (const { label: e, task: t } of s)
    try {
      if (await t() === !1)
        return !1;
    } catch (n) {
      throw console.error(`occurred an error when ${e}`), n;
    }
  return !0;
}
function ye(s) {
  for (const { label: e, task: t } of s)
    try {
      if (t() === !1)
        return !1;
    } catch (n) {
      throw console.error(`occurred an error when ${e}`), n;
    }
  return !0;
}
function je() {
  const s = /* @__PURE__ */ new Map(), e = H(), t = H(), n = H(), a = H(), c = H(), l = H();
  return {
    emit: m,
    emitSync: h,
    pauseEmit: r,
    resumeEmit: b,
    addBeginHook: N,
    addHook: u,
    addEndHook: M,
    addSyncBeginHook: v,
    addSyncHook: o,
    addSyncEndHook: p,
    removeHook: y,
    removeBeginHook: I,
    removeEndHook: C,
    removeSyncHook: S,
    removeSyncBeginHook: E,
    removeSyncEndHook: g,
    setHook: D,
    setBeginHook: j,
    setEndHook: z,
    clearHooks: f,
    clearBeginHooks: P,
    clearEndHooks: B,
    clearSyncHooks: K,
    clearSyncBeginHooks: q,
    clearSyncEndHooks: Z,
    destroy: J
  };
  function h(i, d) {
    if (s.has(i))
      return !0;
    const L = (V) => V(...d);
    return ye([
      {
        label: `sync_begin_${i}`,
        task: () => c.forEach(i, L)
      },
      {
        label: `sync_${i}`,
        task: () => a.forEach(i, L)
      },
      {
        label: `sync_end_${i}`,
        task: () => l.forEach(i, L)
      }
    ]);
  }
  function r(i) {
    const d = s.get(i);
    s.set(i, d ? d + 1 : 1);
  }
  function b(i) {
    const d = s.get(i);
    d && d > 1 ? s.set(i, d - 1) : d === 1 && s.delete(i);
  }
  function m(i, d) {
    if (s.has(i))
      return Promise.resolve(!0);
    const L = (V) => V(...d);
    return Le([
      {
        label: `begin_${i}`,
        task: () => e.forEachAsync(i, L)
      },
      {
        label: `${i}`,
        task: () => n.forEachAsync(i, L)
      },
      {
        label: `end_${i}`,
        task: () => t.forEachAsync(i, L)
      }
    ]);
  }
  function f(i) {
    n.clear(i);
  }
  function u(i, d) {
    n.add(i, d);
  }
  function o(i, d) {
    a.add(i, d);
  }
  function v(i, d) {
    c.add(i, d);
  }
  function p(i, d) {
    l.add(i, d);
  }
  function y(i, d) {
    n.remove(i, d);
  }
  function I(i, d) {
    e.remove(i, d);
  }
  function C(i, d) {
    t.remove(i, d);
  }
  function S(i, d) {
    a.remove(i, d);
  }
  function E(i, d) {
    c.remove(i, d);
  }
  function g(i, d) {
    l.remove(i, d);
  }
  function D(i, d) {
    f(i), u(i, d);
  }
  function P(i) {
    e.clear(i);
  }
  function N(i, d) {
    e.add(i, d);
  }
  function j(i, d) {
    P(i), N(i, d);
  }
  function B(i) {
    t.clear(i);
  }
  function K(i) {
    a.clear(i);
  }
  function q(i) {
    c.clear(i);
  }
  function Z(i) {
    l.clear(i);
  }
  function M(i, d) {
    t.add(i, d);
  }
  function z(i, d) {
    B(i), M(i, d);
  }
  function J() {
    e.clearAll(), t.clearAll(), n.clearAll(), a.clearAll(), c.clearAll(), l.clearAll();
  }
}
const k = {
  select: ie,
  selectDropdown: X,
  selectDropdownList: Q,
  selectDropdownButton: ee,
  selectDropdownItem: te,
  selectDropdownIcon: ne,
  selectInput: se,
  selectInputNative: oe,
  selectInputIcon: ae,
  selectDropdownItemSelected: re
}, Se = () => {
  const s = document.createElement("div"), e = document.createElement("ul");
  return s.classList.add(k.selectDropdown, we.zIndex.popover), e.className = k.selectDropdownList, s.appendChild(e), { divDropdown: s, ulItems: e };
}, Pe = (s, e) => {
  const t = document.createElement("li"), n = document.createElement("button"), a = document.createElement("i"), c = document.createElement("span");
  return c.innerText = e, n.type = "button", n.title = e, n.className = k.selectDropdownButton, t.className = k.selectDropdownItem, t.setAttribute("ir-select-value", s), a.classList.add(k.selectDropdownIcon, "ir-icon", "ir-icon--check"), n.appendChild(a), n.append(c), t.append(n), { item: t, button: n, icon: a, span: c };
};
class Ke extends W {
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
    const t = Se();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const n = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(k.select), this.select.classList.forEach((c) => this.divSelect.classList.add(c)), this.divInput.className = k.selectInput, this.inputValue.className = k.selectInputNative, n.classList.add(k.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(n), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const a = this.select.value;
    this._value = "", Array.from(this.select.children).map((c) => c).forEach((c) => {
      const l = {};
      for (let h = 0; h < c.attributes.length; ++h) {
        const r = c.attributes.item(h);
        if (!r) return;
        l[r.name] = r.value;
      }
      this.addItem(c.value, c.text, l), c.remove();
    }), e instanceof HTMLSelectElement ? this.value = a : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || a), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = F(this), this.outsideHandler = G({
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
    this.items.filter((t) => t.value === e).forEach(({ element: t, option: n }) => {
      t.remove(), n.remove();
    }), this.items = this.items.filter((t) => t.value !== e);
  }
  expand() {
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || U("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = Y(this.divSelect, this.divDropDown);
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
  addItem(e, t, n = {}) {
    const { item: a, button: c } = Pe(e, t), l = document.createElement("option");
    return Object.entries(n).forEach(([h, r]) => l.setAttribute(h, r)), l.value = e, l.innerText = t, this.select.appendChild(l), this.items.push({ text: t, value: e, element: a, option: l, attr: n }), this.ulItems.appendChild(a), a.onclick = (h) => {
      this.lastClickedOption !== l && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: n, element: a, option: l })), this.hide();
    }, c;
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
    this.items.forEach(({ element: e }) => e.classList.remove(k.selectDropdownItemSelected));
  }
  selectItem(e, t = !0) {
    this.clearSelectedStatus();
    const n = this.getSelectedItemOrNull(e);
    n && this.changeValue(n, t);
  }
  getSelectedItemOrNull(e) {
    for (const t of this.items)
      if (t.value === e)
        return t;
    return null;
  }
  changeValue({ text: e, value: t, option: n, element: a }, c = !0) {
    this.lastClickedOption = n, a.classList.add(k.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, c && this.onChange(this.select, n);
  }
}
const w = {
  datePicker: ce,
  datePickerHeader: le,
  datePickerHeaderTitle: de,
  datePickerContent: ue,
  datePickerFooter: he,
  datePickerContentCell: $,
  datePickerContentHeaderCell: me,
  datePickerContentTable: pe
};
function He() {
  const s = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("button"), a = document.createElement("strong"), c = document.createElement("button"), l = document.createElement("button"), h = document.createElement("div"), r = document.createElement("div");
  t.appendChild(_("ir-icon--chevron-double-left")), n.appendChild(_("ir-icon--chevron-left")), c.appendChild(_("ir-icon--chevron-right")), l.appendChild(_("ir-icon--chevron-double-right"));
  const b = document.createElement("div"), m = document.createElement("table"), f = document.createElement("thead"), u = document.createElement("tbody"), o = document.createElement("div");
  s.classList.add(w.datePicker), e.classList.add(w.datePickerHeader), a.classList.add(w.datePickerHeaderTitle), b.classList.add(w.datePickerContent), o.classList.add(w.datePickerFooter), h.appendChild(t), h.appendChild(n), r.appendChild(c), r.appendChild(l), e.appendChild(h), e.appendChild(a), e.appendChild(r);
  const v = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], p = document.createElement("tr"), y = {};
  v.forEach((E) => {
    const g = document.createElement("th");
    g.className = `${w.datePickerContentCell} ${w.datePickerContentHeaderCell}`, g.setAttribute("scope", "col"), y[E] = g, p.appendChild(g);
  }), f.appendChild(p), m.className = w.datePickerContentTable, m.appendChild(f), m.appendChild(u), b.appendChild(m);
  const I = document.createElement("div"), C = document.createElement("button");
  return C.classList.add("button"), C.type = "button", I.appendChild(C), o.appendChild(I), s.appendChild(e), s.appendChild(b), s.appendChild(o), {
    datePicker: s,
    headerTitle: a,
    contentTableTbody: u,
    headerPrev: n,
    headerNext: c,
    todayButton: C,
    headerNextYear: l,
    headerPrevYear: t,
    updateI18n: S
  };
  function S() {
    C.innerHTML = "", C.appendChild(_("ir-icon--check", "button__icon-prefix")), C.append(T.t("datePicker.btnToday")), v.forEach((E) => y[E].innerText = T.t(`common.${E}`));
  }
}
const _e = /* @__PURE__ */ (() => {
  let s = null;
  return function() {
    return s || (s = He()), s;
  };
})(), A = (s) => (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0), s), Te = 6, Ae = 7, Ve = 32, Ne = 0, Be = ({ uuid: s, refElement: e, onClick: t, minDate: n, maxDate: a }) => {
  let c = !1, l = () => {
  }, h = null;
  A(n), A(a);
  const r = _e(), b = G({
    eventElements: [r.datePicker],
    clickOutsideFunc: () => m.hide()
  }), m = {
    get visible() {
      return c;
    },
    update(u, o) {
      const v = A(/* @__PURE__ */ new Date()), p = A(new Date(u)), y = p.getMonth();
      r.headerPrev.onclick = () => {
        u.setDate(Ne), this.update(u, o);
      }, r.headerNext.onclick = () => {
        u.setDate(Ve), this.update(u, o);
      }, r.headerPrevYear.onclick = () => {
        u.setFullYear(u.getFullYear() - 1), this.update(u, o);
      }, r.headerNextYear.onclick = () => {
        u.setFullYear(u.getFullYear() + 1), this.update(u, o);
      }, r.todayButton.onclick = () => {
        t.call(null, v), this.update(v, v);
      };
      const I = v < n || v > a;
      r.todayButton.disabled = I;
      const C = r.todayButton.parentElement;
      I && C && h == null && (h = xe({
        refElement: C,
        label: T.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), r.updateI18n(), r.headerTitle.innerText = x(p).format(T.t("datePicker.titleFormat")), p.setDate(1), p.setDate(-(p.getDay() - 1)), r.contentTableTbody.innerHTML = "";
      for (let S = 0; S < Te; S++) {
        const E = document.createElement("tr");
        for (let g = 0; g < Ae; g++) {
          const D = document.createElement("td"), P = new Date(p);
          D.className = $, D.innerText = `${p.getDate()}`, D.onclick = () => t(P), P < n || P > a ? D.classList.add("is-disabled") : p.getMonth() !== y ? D.classList.add("is-diff-month") : p.getTime() === o?.getTime() && D.classList.add(fe), E.appendChild(D), p.setDate(p.getDate() + 1);
        }
        r.contentTableTbody.appendChild(E);
      }
    },
    show() {
      c = !0, r.datePicker.isConnected || U("popover").appendChild(r.datePicker), r.datePicker.style.removeProperty("display"), r.datePicker.setAttribute("data-for", s), b.create(), f.create(), setTimeout(() => {
        r.datePicker.classList.add("is-visible"), l(), l = Y(e, r.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      b.destroy(), f.destroy(), h && (h.destroy(), h = null);
      const u = (o) => {
        o.currentTarget === o.target && (c = !1, r.datePicker.removeEventListener("transitionend", u), s === r.datePicker.getAttribute("data-for") && (l(), r.datePicker.remove()));
      };
      r.datePicker.addEventListener("transitionend", u), r.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, f = F(m);
  return m;
}, R = (s, e) => s instanceof Date ? x(s).startOf("D") : typeof s == "string" ? x(s, e) : x(null);
class qe extends W {
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
    placeholder: n,
    format: a = T.t("datePicker.dateFormat"),
    checkbox: c = !1,
    disabled: l = !1,
    allowedEmptyString: h = !0,
    onSelect: r,
    onChange: b,
    onCheckboxClick: m,
    minDate: f = O().getStoreValue("datePicker.minDate"),
    maxDate: u = O().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const o = R(t, a);
      o.isValid() ? (this.calendarDate = o.toDate(), this.selectedDate = o.toDate()) : console.error(`invalid defaultDate format. it must follow ${a}`);
    }
    if (!h && this.selectedDate == null) {
      const o = R(/* @__PURE__ */ new Date(), a);
      this.calendarDate = o.toDate(), this.selectedDate = o.toDate();
    }
    if (this.format = a, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(_("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(ve), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", n ?? this.format), this.input.classList.add(be, "tnum-adj"), this.button.className = Ce, this.button.type = "button", this._minDate = f, this._maxDate = u, r && (this.onSelect = r), b && (this.onChange = b), m && (this.onCheckboxClick = m), c) {
      const o = document.createElement("div"), v = document.createElement("label"), p = document.createElement("input");
      p.setAttribute("type", "checkbox"), o.classList.add(ke, Ee), v.className = ge, p.className = De, v.appendChild(p), o.appendChild(v), this.div.appendChild(o), p.checked = !l, p.onchange = () => {
        this.disabled = !p.checked, this.onCheckboxClick(p.checked);
      }, this.addCoreElement(o);
    }
    this.disabled = l, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = x(this.selectedDate).format(a)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        h ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      let o = x(this.input.value, this.format, !0);
      o.isValid() || (o = x(this.input.value, this.format.replace(/-/g, ""), !0)), !o.isValid() || o.toDate() < this.minDate || o.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(o.toDate());
    }), this.handler = Be({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (o) => {
        this.setDate(o), this.onSelect(o), this.hide();
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
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = x(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
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
class Me {
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
        const n = this._commands[t];
        if (!n.canExecute)
          throw console.error(n), new Error("Can't execute this command");
        n.execute(), e.push(n), ++t;
      }
    } catch (t) {
      return console.error("execute error!", t), e.reverse().forEach((n) => n.undo()), !1;
    }
    return !0;
  }
  undo() {
    const e = [];
    try {
      let t = this._commands.length - 1;
      for (; t >= 0; ) {
        const n = this._commands[t];
        if (!n.canUndo)
          throw console.error(n), new Error("Can't undo this command");
        n.undo(), e.push(n), --t;
      }
    } catch (t) {
      return console.error("undo error!", t), e.forEach((n) => n.execute()), !1;
    }
    return !0;
  }
  get label() {
    return this._label;
  }
}
const Oe = 1024;
class Ze {
  #e = [];
  #n = [];
  #o = !0;
  #i;
  #a;
  #s;
  #t;
  constructor({
    context: e,
    undoStackLength: t = Oe,
    disabled: n = !1
  }) {
    this.#i = t, this.#a = n, this.#s = e;
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
      return this.#t = new Me(e), t(), this.pushCommandBlock(this.#t), this.#t;
    } catch (n) {
      console.error("Got an error during recording!"), console.error(n);
    } finally {
      this.#t = void 0;
    }
  }
  undo() {
    const e = this.#e.pop();
    return e?.undo() ? (this.#n.push(e), this.#s.onUndo(e), e) : null;
  }
  redo() {
    const e = this.#n.pop();
    return e?.execute() ? (this.#e.push(e), this.#s.onRedo(e), e) : null;
  }
  pushCommandBlock(e) {
    this.isDisabled || (this.#e.length >= this.#i && this.#e.shift(), this.#e.push(e), this.#n.length = 0);
  }
  pushCommand(e) {
    if (!this.#t)
      throw new Error("Not recording!");
    this.#t.pushCommand(e);
  }
  clearCommands() {
    this.#e.length = 0, this.#n.length = 0;
  }
  pauseUIRecording() {
    this.#o = !1;
  }
  startUIRecording() {
    this.#o = !0;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get commandContext() {
    return this.#s;
  }
  get isRecording() {
    return this.#t !== void 0;
  }
  get isPreventedUIRecording() {
    return this.#o;
  }
  get isDisabled() {
    return this.#a;
  }
  get stackLength() {
    return this.#i;
  }
  set stackLength(e) {
    this.#i = e;
  }
  set isDisabled(e) {
    this.#a = e;
  }
  get undoCommandStack() {
    return [...this.#e];
  }
  get redoCommandStack() {
    return [...this.#n];
  }
}
export {
  Ke as I,
  Se as a,
  Pe as b,
  je as c,
  qe as d,
  Ze as e,
  Me as f,
  Be as g,
  _e as h,
  Ge as r
};
//# sourceMappingURL=command-manager-CjzZ9_J2.js.map
