import { s as V, l as B, m as M, n as O, o as R, p as F, q as U, r as Y, t as $, u as W, v as G, w as j, x as K, y as q, A as Z, B as H, C as z, D as X, E as J } from "./css-D8WWZA3p.js";
import { b as x, g as _, e as A } from "./floating-BiWR08NB.js";
import { I as Q } from "./index-BK-o6tIM.js";
import { c as ee, a as P, b as te } from "./rx-state-CZ8od4lP.js";
import { c as N } from "./outside-C4hfBiDS.js";
import { i as T, d as ne } from "./index-DUaQNDMW.js";
function S() {
  const i = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: n,
    add: c,
    remove: d,
    clear: h,
    clearAll: m,
    forEach: o,
    forEachAsync: g
  };
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    return i.get(a);
  }
  function n(a) {
    const p = i.get(a);
    return p || null;
  }
  function d(a, p) {
    const r = n(a);
    if (!r)
      return;
    const u = r.indexOf(p);
    u > -1 && r.splice(u, 1);
  }
  function c(a, p) {
    e(a) ? t(a).push(p) : i.set(a, [p]);
  }
  function h(a) {
    i.set(a, []);
  }
  function m() {
    i.clear();
  }
  function o(a, p) {
    const r = n(a);
    if (!r)
      return !0;
    for (const u of r)
      if (p(u) === !1)
        return !1;
    return !0;
  }
  async function g(a, p) {
    const r = n(a);
    if (!r)
      return !0;
    try {
      for (const u of r) {
        const v = p(u);
        if (v instanceof Promise && await v === !1 || v === !1)
          return !1;
      }
    } catch (u) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(u), u;
    }
    return !0;
  }
}
async function se(i) {
  for (const { label: e, task: t } of i)
    try {
      if (await t === !1)
        return !1;
    } catch (n) {
      throw console.error(`occurred an error when ${e}`), n;
    }
  return !0;
}
function be() {
  const i = /* @__PURE__ */ new Map(), e = S(), t = S(), n = S();
  return {
    emit: h,
    pauseEmit: d,
    resumeEmit: c,
    clearHooks: m,
    addHook: o,
    setHook: a,
    removeHook: g,
    clearBeginHooks: p,
    addBeginHook: r,
    setBeginHook: u,
    clearEndHooks: v,
    addEndHook: f,
    setEndHook: D,
    destroy: w
  };
  function d(s) {
    const l = i.get(s);
    i.set(s, l ? l + 1 : 1);
  }
  function c(s) {
    const l = i.get(s);
    l && l > 1 ? i.set(s, l - 1) : l === 1 && i.delete(s);
  }
  function h(s, l) {
    if (i.has(s))
      return Promise.resolve(!0);
    const C = (b) => b(...l);
    return se([
      {
        label: `begin_${s}`,
        task: e.forEachAsync(s, C)
      },
      {
        label: `${s}`,
        task: n.forEachAsync(s, C)
      },
      {
        label: `end_${s}`,
        task: t.forEachAsync(s, C)
      }
    ]);
  }
  function m(s) {
    n.clear(s);
  }
  function o(s, l) {
    n.add(s, l);
  }
  function g(s, l) {
    n.remove(s, l);
  }
  function a(s, l) {
    m(s), o(s, l);
  }
  function p(s) {
    e.clear(s);
  }
  function r(s, l) {
    e.add(s, l);
  }
  function u(s, l) {
    p(s), r(s, l);
  }
  function v(s) {
    t.clear(s);
  }
  function f(s, l) {
    t.add(s, l);
  }
  function D(s, l) {
    v(s), f(s, l);
  }
  function w() {
    e.clearAll(), t.clearAll(), n.clearAll();
  }
}
const E = {
  select: V,
  selectDropdown: B,
  selectDropdownList: M,
  selectDropdownButton: O,
  selectDropdownItem: R,
  selectDropdownIcon: F,
  selectInput: U,
  selectInputNative: Y,
  selectInputIcon: $,
  selectDropdownItemSelected: W
}, ie = () => {
  const i = document.createElement("div"), e = document.createElement("ul");
  return i.classList.add(E.selectDropdown, ee.zIndex.popover), e.className = E.selectDropdownList, i.appendChild(e), { divDropdown: i, ulItems: e };
}, oe = (i, e) => {
  const t = document.createElement("li"), n = document.createElement("button"), d = document.createElement("i"), c = document.createElement("span");
  return c.innerText = e, n.type = "button", n.title = e, n.className = E.selectDropdownButton, t.className = E.selectDropdownItem, t.setAttribute("ir-select-value", i), d.classList.add(E.selectDropdownIcon, "ir-icon", "ir-icon--check"), n.appendChild(d), n.append(c), t.append(n), { item: t, button: n, icon: d, span: c };
};
class ke extends Q {
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
    const t = ie();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const n = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(E.select), this.select.classList.forEach((c) => this.divSelect.classList.add(c)), this.divInput.className = E.selectInput, this.inputValue.className = E.selectInputNative, n.classList.add(E.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(n), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const d = this.select.value;
    this._value = "", Array.from(this.select.children).map((c) => c).forEach((c) => {
      const h = {};
      for (let m = 0; m < c.attributes.length; ++m) {
        const o = c.attributes.item(m);
        if (!o) return;
        h[o.name] = o.value;
      }
      this.addItem(c.value, c.text, h), c.remove();
    }), e instanceof HTMLSelectElement ? this.value = d : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || d), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = x(this), this.outsideHandler = N({
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
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || _("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = A(this.divSelect, this.divDropDown);
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
    const { item: d, button: c } = oe(e, t), h = document.createElement("option");
    return Object.entries(n).forEach(([m, o]) => h.setAttribute(m, o)), h.value = e, h.innerText = t, this.select.appendChild(h), this.items.push({ text: t, value: e, element: d, option: h, attr: n }), this.ulItems.appendChild(d), d.onclick = (m) => {
      this.lastClickedOption !== h && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: n, element: d, option: h })), this.hide();
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
    this.items.forEach(({ element: e }) => e.classList.remove(E.selectDropdownItemSelected));
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
  changeValue({ text: e, value: t, option: n, element: d }, c = !0) {
    this.lastClickedOption = n, d.classList.add(E.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, c && this.onChange(this.select, n);
  }
}
const k = {
  datePicker: G,
  datePickerHeader: j,
  datePickerHeaderTitle: K,
  datePickerContent: q,
  datePickerFooter: Z,
  datePickerContentCell: H,
  datePickerContentHeaderCell: z,
  datePickerContentTable: X
};
function re() {
  const i = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("button"), d = document.createElement("strong"), c = document.createElement("button"), h = document.createElement("button"), m = document.createElement("div"), o = document.createElement("div");
  t.appendChild(P("ir-icon--chevron-double-left")), n.appendChild(P("ir-icon--chevron-left")), c.appendChild(P("ir-icon--chevron-right")), h.appendChild(P("ir-icon--chevron-double-right"));
  const g = document.createElement("div"), a = document.createElement("table"), p = document.createElement("thead"), r = document.createElement("tbody"), u = document.createElement("div");
  i.classList.add(k.datePicker), e.classList.add(k.datePickerHeader), d.classList.add(k.datePickerHeaderTitle), g.classList.add(k.datePickerContent), u.classList.add(k.datePickerFooter), m.appendChild(t), m.appendChild(n), o.appendChild(c), o.appendChild(h), e.appendChild(m), e.appendChild(d), e.appendChild(o);
  const v = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], f = document.createElement("tr"), D = {};
  v.forEach((C) => {
    const b = document.createElement("th");
    b.className = `${k.datePickerContentCell} ${k.datePickerContentHeaderCell}`, b.setAttribute("scope", "col"), D[C] = b, f.appendChild(b);
  }), p.appendChild(f), a.className = k.datePickerContentTable, a.appendChild(p), a.appendChild(r), g.appendChild(a);
  const w = document.createElement("div"), s = document.createElement("button");
  return s.classList.add("button"), s.type = "button", w.appendChild(s), u.appendChild(w), i.appendChild(e), i.appendChild(g), i.appendChild(u), {
    datePicker: i,
    headerTitle: d,
    contentTableTbody: r,
    headerPrev: n,
    headerNext: c,
    todayButton: s,
    headerNextYear: h,
    headerPrevYear: t,
    updateI18n: l
  };
  function l() {
    s.innerHTML = "", s.appendChild(P("ir-icon--check", "button__icon-prefix")), s.append(T.t("datePicker.btnToday")), v.forEach((C) => D[C].innerText = T.t(`common.${C}`));
  }
}
const ce = /* @__PURE__ */ (() => {
  let i = null;
  return function() {
    return i || (i = re()), i;
  };
})(), L = (i) => (i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i), ae = 6, le = 7, de = 32, ue = 0, we = ({ uuid: i, refElement: e, onClick: t, minDate: n, maxDate: d }) => {
  let c = !1, h = () => {
  }, m = null;
  L(n), L(d);
  const o = ce(), g = N({
    eventElements: [o.datePicker],
    clickOutsideFunc: () => a.hide()
  }), a = {
    get visible() {
      return c;
    },
    update(r, u) {
      const v = L(/* @__PURE__ */ new Date()), f = L(new Date(r)), D = f.getMonth();
      o.headerPrev.onclick = () => {
        r.setDate(ue), this.update(r, u);
      }, o.headerNext.onclick = () => {
        r.setDate(de), this.update(r, u);
      }, o.headerPrevYear.onclick = () => {
        r.setFullYear(r.getFullYear() - 1), this.update(r, u);
      }, o.headerNextYear.onclick = () => {
        r.setFullYear(r.getFullYear() + 1), this.update(r, u);
      }, o.todayButton.onclick = () => {
        t.call(null, v), this.update(v, v);
      };
      const w = v < n || v > d;
      o.todayButton.disabled = w;
      const s = o.todayButton.parentElement;
      w && s && m == null && (m = te({
        refElement: s,
        label: T.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), o.updateI18n(), o.headerTitle.innerText = ne(f).format(T.t("datePicker.titleFormat")), f.setDate(1), f.setDate(-(f.getDay() - 1)), o.contentTableTbody.innerHTML = "";
      for (let l = 0; l < ae; l++) {
        const C = document.createElement("tr");
        for (let b = 0; b < le; b++) {
          const I = document.createElement("td"), y = new Date(f);
          I.className = H, I.innerText = `${f.getDate()}`, I.onclick = () => t(y), y < n || y > d ? I.classList.add("is-disabled") : f.getMonth() !== D ? I.classList.add("is-diff-month") : f.getTime() === u?.getTime() && I.classList.add(J), C.appendChild(I), f.setDate(f.getDate() + 1);
        }
        o.contentTableTbody.appendChild(C);
      }
    },
    show() {
      c = !0, o.datePicker.isConnected || _("popover").appendChild(o.datePicker), o.datePicker.style.removeProperty("display"), o.datePicker.setAttribute("data-for", i), g.create(), p.create(), setTimeout(() => {
        o.datePicker.classList.add("is-visible"), h(), h = A(e, o.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      g.destroy(), p.destroy(), m && (m.destroy(), m = null);
      const r = (u) => {
        u.currentTarget === u.target && (c = !1, o.datePicker.removeEventListener("transitionend", r), i === o.datePicker.getAttribute("data-for") && (h(), o.datePicker.remove()));
      };
      o.datePicker.addEventListener("transitionend", r), o.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, p = x(a);
  return a;
};
class he {
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
const me = 1024;
class Ie {
  #e = [];
  #n = [];
  #o = !0;
  #s;
  #r;
  #i;
  #t;
  constructor({
    context: e,
    undoStackLength: t = me,
    disabled: n = !1
  }) {
    this.#s = t, this.#r = n, this.#i = e;
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
      return this.#t = new he(e), t(), this.pushCommandBlock(this.#t), this.#t;
    } catch (n) {
      console.error("Got an error during recording!"), console.error(n);
    } finally {
      this.#t = void 0;
    }
  }
  undo() {
    const e = this.#e.pop();
    e && e.undo() && (this.#n.push(e), this.#i.onUndo(e));
  }
  redo() {
    const e = this.#n.pop();
    e && e.execute() && (this.#e.push(e), this.#i.onRedo(e));
  }
  pushCommandBlock(e) {
    this.isDisabled || (this.#e.length >= this.#s && this.#e.shift(), this.#e.push(e), this.#n.length = 0);
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
    return this.#i;
  }
  get isRecording() {
    return this.#t !== void 0;
  }
  get isPreventedUIRecording() {
    return this.#o;
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
    return [...this.#n];
  }
}
export {
  ke as I,
  we as a,
  ie as b,
  be as c,
  oe as d,
  Ie as e,
  he as f
};
//# sourceMappingURL=command-manager-DI635ifo.js.map
