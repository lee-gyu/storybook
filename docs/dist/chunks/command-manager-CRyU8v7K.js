import { h as N, w as B, B as M, I as R, L as O, H as F, x as U, f as Y, C as $, S as W, t as G, c as j, v as K, _ as Z, p as q, g as H, m as z, d as X, n as J } from "./_init-B0xIPnhF.js";
import { c as x, g as _, o as A } from "./floating-COQGiF1T.js";
import { I as Q } from "./index-DDbI2a2F.js";
import { c as ee, a as V, b as P, d as te } from "./rx-state-R2lsZxJ3.js";
import { i as D, d as ne } from "./ko-DexDDk13.js";
function se(s) {
  var e = s.match(/^var\((.*)\)$/);
  return e ? e[1] : s;
}
function ie(s, e, t) {
  s.style.setProperty(se(e), t);
}
function ke(s, e, t) {
  {
    var n = e;
    for (var c in n) {
      var r = n[c];
      r != null && ie(s, c, n[c]);
    }
  }
}
function S() {
  const s = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: n,
    add: r,
    remove: c,
    clear: h,
    clearAll: m,
    forEach: o,
    forEachAsync: g
  };
  function e(l) {
    return s.has(l);
  }
  function t(l) {
    return s.get(l);
  }
  function n(l) {
    const p = s.get(l);
    return p || null;
  }
  function c(l, p) {
    const a = n(l);
    if (!a)
      return;
    const u = a.indexOf(p);
    u > -1 && a.splice(u, 1);
  }
  function r(l, p) {
    e(l) ? t(l).push(p) : s.set(l, [p]);
  }
  function h(l) {
    s.set(l, []);
  }
  function m() {
    s.clear();
  }
  function o(l, p) {
    const a = n(l);
    if (!a)
      return !0;
    for (const u of a)
      if (p(u) === !1)
        return !1;
    return !0;
  }
  async function g(l, p) {
    const a = n(l);
    if (!a)
      return !0;
    try {
      for (const u of a) {
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
async function oe(s) {
  for (const { label: e, task: t } of s)
    try {
      if (await t === !1)
        return !1;
    } catch (n) {
      throw console.error(`occurred an error when ${e}`), n;
    }
  return !0;
}
function we() {
  const s = /* @__PURE__ */ new Map(), e = S(), t = S(), n = S();
  return {
    emit: h,
    pauseEmit: c,
    resumeEmit: r,
    clearHooks: m,
    addHook: o,
    setHook: l,
    removeHook: g,
    clearBeginHooks: p,
    addBeginHook: a,
    setBeginHook: u,
    clearEndHooks: v,
    addEndHook: f,
    setEndHook: L,
    destroy: w
  };
  function c(i) {
    const d = s.get(i);
    s.set(i, d ? d + 1 : 1);
  }
  function r(i) {
    const d = s.get(i);
    d && d > 1 ? s.set(i, d - 1) : d === 1 && s.delete(i);
  }
  function h(i, d) {
    if (s.has(i))
      return Promise.resolve(!0);
    const C = (b) => b(...d);
    return oe([
      {
        label: `begin_${i}`,
        task: e.forEachAsync(i, C)
      },
      {
        label: `${i}`,
        task: n.forEachAsync(i, C)
      },
      {
        label: `end_${i}`,
        task: t.forEachAsync(i, C)
      }
    ]);
  }
  function m(i) {
    n.clear(i);
  }
  function o(i, d) {
    n.add(i, d);
  }
  function g(i, d) {
    n.remove(i, d);
  }
  function l(i, d) {
    m(i), o(i, d);
  }
  function p(i) {
    e.clear(i);
  }
  function a(i, d) {
    e.add(i, d);
  }
  function u(i, d) {
    p(i), a(i, d);
  }
  function v(i) {
    t.clear(i);
  }
  function f(i, d) {
    t.add(i, d);
  }
  function L(i, d) {
    v(i), f(i, d);
  }
  function w() {
    e.clearAll(), t.clearAll(), n.clearAll();
  }
}
const E = {
  select: N,
  selectDropdown: B,
  selectDropdownList: M,
  selectDropdownButton: R,
  selectDropdownItem: O,
  selectDropdownIcon: F,
  selectInput: U,
  selectInputNative: Y,
  selectInputIcon: $,
  selectDropdownItemSelected: W
}, re = () => {
  const s = document.createElement("div"), e = document.createElement("ul");
  return s.classList.add(E.selectDropdown, ee.zIndex.popover), e.className = E.selectDropdownList, s.appendChild(e), { divDropdown: s, ulItems: e };
}, ae = (s, e) => {
  const t = document.createElement("li"), n = document.createElement("button"), c = document.createElement("i"), r = document.createElement("span");
  return r.innerText = e, n.type = "button", n.title = e, n.className = E.selectDropdownButton, t.className = E.selectDropdownItem, t.setAttribute("ir-select-value", s), c.classList.add(E.selectDropdownIcon, "ir-icon", "ir-icon--check"), n.appendChild(c), n.append(r), t.append(n), { item: t, button: n, icon: c, span: r };
};
class Ie extends Q {
  constructor(e) {
    super({
      contextElement: e instanceof HTMLSelectElement ? e : e.contextElement
    }), this.floatingCleanup = () => {
    }, this.divSelect = document.createElement("div"), this.divInput = document.createElement("div"), this.inputValue = document.createElement("input");
    const t = re();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const n = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(E.select), this.select.classList.forEach((r) => this.divSelect.classList.add(r)), this.divInput.className = E.selectInput, this.inputValue.className = E.selectInputNative, n.classList.add(E.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(n), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const c = this.select.value;
    this._value = "", Array.from(this.select.children).map((r) => r).forEach((r) => {
      const h = {};
      for (let m = 0; m < r.attributes.length; ++m) {
        const o = r.attributes.item(m);
        if (!o) return;
        h[o.name] = o.value;
      }
      this.addItem(r.value, r.text, h), r.remove();
    }), e instanceof HTMLSelectElement ? this.value = c : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || c), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = x(this), this.outsideHandler = V({
      eventElements: [this.divSelect, this.divDropDown],
      clickOutsideFunc: () => this.hide()
    });
  }
  /*
   * Getters
   */
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
    const { item: c, button: r } = ae(e, t), h = document.createElement("option");
    return Object.entries(n).forEach(([m, o]) => h.setAttribute(m, o)), h.value = e, h.innerText = t, this.select.appendChild(h), this.items.push({ text: t, value: e, element: c, option: h, attr: n }), this.ulItems.appendChild(c), c.onclick = (m) => {
      this.lastClickedOption !== h && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: n, element: c, option: h })), this.hide();
    }, r;
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
  changeValue({ text: e, value: t, option: n, element: c }, r = !0) {
    this.lastClickedOption = n, c.classList.add(E.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, r && this.onChange(this.select, n);
  }
}
const k = {
  datePicker: G,
  datePickerHeader: j,
  datePickerHeaderTitle: K,
  datePickerContent: Z,
  datePickerFooter: q,
  datePickerContentCell: H,
  datePickerContentHeaderCell: z,
  datePickerContentTable: X
};
function ce() {
  const s = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("button"), c = document.createElement("strong"), r = document.createElement("button"), h = document.createElement("button"), m = document.createElement("div"), o = document.createElement("div");
  t.appendChild(P("ir-icon--chevron-double-left")), n.appendChild(P("ir-icon--chevron-left")), r.appendChild(P("ir-icon--chevron-right")), h.appendChild(P("ir-icon--chevron-double-right"));
  const g = document.createElement("div"), l = document.createElement("table"), p = document.createElement("thead"), a = document.createElement("tbody"), u = document.createElement("div");
  s.classList.add(k.datePicker), e.classList.add(k.datePickerHeader), c.classList.add(k.datePickerHeaderTitle), g.classList.add(k.datePickerContent), u.classList.add(k.datePickerFooter), m.appendChild(t), m.appendChild(n), o.appendChild(r), o.appendChild(h), e.appendChild(m), e.appendChild(c), e.appendChild(o);
  const v = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], f = document.createElement("tr"), L = {};
  v.forEach((C) => {
    const b = document.createElement("th");
    b.className = `${k.datePickerContentCell} ${k.datePickerContentHeaderCell}`, b.setAttribute("scope", "col"), L[C] = b, f.appendChild(b);
  }), p.appendChild(f), l.className = k.datePickerContentTable, l.appendChild(p), l.appendChild(a), g.appendChild(l);
  const w = document.createElement("div"), i = document.createElement("button");
  return i.classList.add("button"), i.type = "button", w.appendChild(i), u.appendChild(w), s.appendChild(e), s.appendChild(g), s.appendChild(u), {
    datePicker: s,
    headerTitle: c,
    contentTableTbody: a,
    headerPrev: n,
    headerNext: r,
    todayButton: i,
    headerNextYear: h,
    headerPrevYear: t,
    updateI18n: d
  };
  function d() {
    i.innerHTML = "", i.appendChild(P("ir-icon--check", "button__icon-prefix")), i.append(D.datePicker.btnToday), v.forEach((C) => L[C].innerText = D.common[C]);
  }
}
const le = /* @__PURE__ */ (() => {
  let s = null;
  return function() {
    return s || (s = ce()), s;
  };
})(), T = (s) => (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0), s), de = 6, ue = 7, he = 32, me = 0, Le = ({ uuid: s, refElement: e, onClick: t, minDate: n, maxDate: c }) => {
  let r = !1, h = () => {
  }, m = null;
  T(n), T(c);
  const o = le(), g = V({
    eventElements: [o.datePicker],
    clickOutsideFunc: () => l.hide()
  }), l = {
    get visible() {
      return r;
    },
    update(a, u) {
      const v = T(/* @__PURE__ */ new Date()), f = T(new Date(a)), L = f.getMonth();
      o.headerPrev.onclick = () => {
        a.setDate(me), this.update(a, u);
      }, o.headerNext.onclick = () => {
        a.setDate(he), this.update(a, u);
      }, o.headerPrevYear.onclick = () => {
        a.setFullYear(a.getFullYear() - 1), this.update(a, u);
      }, o.headerNextYear.onclick = () => {
        a.setFullYear(a.getFullYear() + 1), this.update(a, u);
      }, o.todayButton.onclick = () => {
        t.call(null, v), this.update(v, v);
      };
      const w = v < n || v > c;
      o.todayButton.disabled = w;
      const i = o.todayButton.parentElement;
      w && i && m == null && (m = te({
        refElement: i,
        label: D.datePicker.disabledTodayTooltip,
        placement: "bottom"
      })), o.updateI18n(), o.headerTitle.innerText = ne(f).format(D.datePicker.titleFormat), f.setDate(1), f.setDate(-(f.getDay() - 1)), o.contentTableTbody.innerHTML = "";
      for (let d = 0; d < de; d++) {
        const C = document.createElement("tr");
        for (let b = 0; b < ue; b++) {
          const I = document.createElement("td"), y = new Date(f);
          I.className = H, I.innerText = `${f.getDate()}`, I.onclick = () => t(y), y < n || y > c ? I.classList.add("is-disabled") : f.getMonth() !== L ? I.classList.add("is-diff-month") : f.getTime() === (u == null ? void 0 : u.getTime()) && I.classList.add(J), C.appendChild(I), f.setDate(f.getDate() + 1);
        }
        o.contentTableTbody.appendChild(C);
      }
    },
    show() {
      r = !0, o.datePicker.isConnected || _("popover").appendChild(o.datePicker), o.datePicker.style.removeProperty("display"), o.datePicker.setAttribute("data-for", s), g.create(), p.create(), setTimeout(() => {
        o.datePicker.classList.add("is-visible"), h(), h = A(e, o.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      g.destroy(), p.destroy(), m && (m.destroy(), m = null);
      const a = (u) => {
        u.currentTarget === u.target && (r = !1, o.datePicker.removeEventListener("transitionend", a), s === o.datePicker.getAttribute("data-for") && (h(), o.datePicker.remove()));
      };
      o.datePicker.addEventListener("transitionend", a), o.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, p = x(l);
  return l;
};
class pe {
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
const fe = 1024;
class Pe {
  #e = [];
  #n = [];
  #o = !0;
  #s;
  #r;
  #i;
  #t;
  constructor({
    context: e,
    undoStackLength: t = fe,
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
      return this.#t = new pe(e), t(), this.pushCommandBlock(this.#t), this.#t;
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
  Ie as I,
  Le as a,
  re as b,
  we as c,
  ae as d,
  Pe as e,
  pe as f,
  ke as s
};
//# sourceMappingURL=command-manager-CRyU8v7K.js.map
