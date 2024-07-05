import { c as B, a as T, P as H, A as N, M as A, E as O, Z as U, N as M, L as F, F as Y, D as $, G, b as _, x as W, m as j, k as z, w as K, V as Z, B as L, S as q, z as X, d as J, H as Q } from "./rx-state-CHpF6m8D.js";
import { c as x, g as R, o as V } from "./floating-B9y9ooPB.js";
import { I as ee } from "./index-cpGHHlo1.js";
import { i as y, d as te } from "./ko-CwHxoe1v.js";
function ne(i) {
  var e = i.match(/^var\((.*)\)$/);
  return e ? e[1] : i;
}
function ie(i, e, t) {
  i.style.setProperty(ne(e), t);
}
function ke(i, e, t) {
  {
    var n = e;
    for (var r in n) {
      var o = n[r];
      o != null && ie(i, r, n[r]);
    }
  }
}
const u = {
  select: H,
  selectDropdown: N,
  selectDropdownList: A,
  selectDropdownButton: O,
  selectDropdownItem: U,
  selectDropdownIcon: M,
  selectInput: F,
  selectInputNative: Y,
  selectInputIcon: $,
  selectDropdownItemSelected: G
}, se = () => {
  const i = document.createElement("div"), e = document.createElement("ul");
  return i.classList.add(u.selectDropdown, B.zIndex.popover), e.className = u.selectDropdownList, i.appendChild(e), { divDropdown: i, ulItems: e };
}, oe = (i, e) => {
  const t = document.createElement("li"), n = document.createElement("button"), r = document.createElement("i"), o = document.createElement("span");
  return o.innerText = e, n.type = "button", n.title = e, n.className = u.selectDropdownButton, t.className = u.selectDropdownItem, t.setAttribute("ir-select-value", i), r.classList.add(u.selectDropdownIcon, "ir-icon", "ir-icon--check"), n.appendChild(r), n.append(o), t.append(n), { item: t, button: n, icon: r, span: o };
};
class Ee extends ee {
  constructor(e) {
    super({
      contextElement: e instanceof HTMLSelectElement ? e : e.contextElement
    }), this.floatingCleanup = () => {
    }, this.divSelect = document.createElement("div"), this.divInput = document.createElement("div"), this.inputValue = document.createElement("input");
    const t = se();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const n = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(u.select), this.select.classList.forEach((o) => this.divSelect.classList.add(o)), this.divInput.className = u.selectInput, this.inputValue.className = u.selectInputNative, n.classList.add(u.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(n), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const r = this.select.value;
    this._value = "", Array.from(this.select.children).map((o) => o).forEach((o) => {
      const d = {};
      for (let a = 0; a < o.attributes.length; ++a) {
        const s = o.attributes.item(a);
        if (!s)
          return;
        d[s.name] = s.value;
      }
      this.addItem(o.value, o.text, d), o.remove();
    }), e instanceof HTMLSelectElement ? this.value = r : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || r), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = x(this), this.outsideHandler = T({
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
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || R("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = V(this.divSelect, this.divDropDown);
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
    const { item: r, button: o } = oe(e, t), d = document.createElement("option");
    return Object.entries(n).forEach(([a, s]) => d.setAttribute(a, s)), d.value = e, d.innerText = t, this.select.appendChild(d), this.items.push({ text: t, value: e, element: r, option: d, attr: n }), this.ulItems.appendChild(r), r.onclick = (a) => {
      this.lastClickedOption !== d && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: n, element: r, option: d })), this.hide();
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
    this.items.forEach(({ element: e }) => e.classList.remove(u.selectDropdownItemSelected));
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
  changeValue({ text: e, value: t, option: n, element: r }, o = !0) {
    this.lastClickedOption = n, r.classList.add(u.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, o && this.onChange(this.select, n);
  }
}
const f = {
  datePicker: W,
  datePickerHeader: j,
  datePickerHeaderTitle: z,
  datePickerContent: K,
  datePickerFooter: Z,
  datePickerContentCell: L,
  datePickerContentHeaderCell: q,
  datePickerContentTable: X
};
function re() {
  const i = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("button"), r = document.createElement("strong"), o = document.createElement("button"), d = document.createElement("button"), a = document.createElement("div"), s = document.createElement("div");
  t.appendChild(_("ir-icon--chevron-double-left")), n.appendChild(_("ir-icon--chevron-left")), o.appendChild(_("ir-icon--chevron-right")), d.appendChild(_("ir-icon--chevron-double-right"));
  const g = document.createElement("div"), p = document.createElement("table"), b = document.createElement("thead"), c = document.createElement("tbody"), l = document.createElement("div");
  i.classList.add(f.datePicker), e.classList.add(f.datePickerHeader), r.classList.add(f.datePickerHeaderTitle), g.classList.add(f.datePickerContent), l.classList.add(f.datePickerFooter), a.appendChild(t), a.appendChild(n), s.appendChild(o), s.appendChild(d), e.appendChild(a), e.appendChild(r), e.appendChild(s);
  const v = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], h = document.createElement("tr"), w = {};
  v.forEach((C) => {
    const k = document.createElement("th");
    k.className = `${f.datePickerContentCell} ${f.datePickerContentHeaderCell}`, k.setAttribute("scope", "col"), w[C] = k, h.appendChild(k);
  }), b.appendChild(h), p.className = f.datePickerContentTable, p.appendChild(b), p.appendChild(c), g.appendChild(p);
  const I = document.createElement("div"), m = document.createElement("button");
  return m.classList.add("button"), m.type = "button", I.appendChild(m), l.appendChild(I), i.appendChild(e), i.appendChild(g), i.appendChild(l), {
    datePicker: i,
    headerTitle: r,
    contentTableTbody: c,
    headerPrev: n,
    headerNext: o,
    todayButton: m,
    headerNextYear: d,
    headerPrevYear: t,
    updateI18n: P
  };
  function P() {
    m.innerHTML = "", m.appendChild(_("ir-icon--check", "button__icon-prefix")), m.append(y.datePicker.btnToday), v.forEach((C) => w[C].innerText = y.common[C]);
  }
}
const de = /* @__PURE__ */ (() => {
  let i = null;
  return function() {
    return i || (i = re()), i;
  };
})(), S = (i) => (i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i), ce = 6, ae = 7, le = 32, he = 0, ge = ({ uuid: i, refElement: e, onClick: t, minDate: n, maxDate: r }) => {
  let o = !1, d = () => {
  }, a = null;
  S(n), S(r);
  const s = de(), g = T({
    eventElements: [s.datePicker],
    clickOutsideFunc: () => p.hide()
  }), p = {
    get visible() {
      return o;
    },
    update(c, l) {
      const v = S(/* @__PURE__ */ new Date()), h = S(new Date(c)), w = h.getMonth();
      s.headerPrev.onclick = () => {
        c.setDate(he), this.update(c, l);
      }, s.headerNext.onclick = () => {
        c.setDate(le), this.update(c, l);
      }, s.headerPrevYear.onclick = () => {
        c.setFullYear(c.getFullYear() - 1), this.update(c, l);
      }, s.headerNextYear.onclick = () => {
        c.setFullYear(c.getFullYear() + 1), this.update(c, l);
      }, s.todayButton.onclick = () => {
        t.call(null, v), this.update(v, v);
      };
      const I = v < n || v > r;
      s.todayButton.disabled = I;
      const m = s.todayButton.parentElement;
      I && m && a == null && (a = J({
        refElement: m,
        label: y.datePicker.disabledTodayTooltip,
        placement: "bottom"
      })), s.updateI18n(), s.headerTitle.innerText = te(h).format(y.datePicker.titleFormat), h.setDate(1), h.setDate(-(h.getDay() - 1)), s.contentTableTbody.innerHTML = "";
      for (let P = 0; P < ce; P++) {
        const C = document.createElement("tr");
        for (let k = 0; k < ae; k++) {
          const E = document.createElement("td"), D = new Date(h);
          E.className = L, E.innerText = `${h.getDate()}`, E.onclick = () => t(D), D < n || D > r ? E.classList.add("is-disabled") : h.getMonth() !== w ? E.classList.add("is-diff-month") : h.getTime() === (l == null ? void 0 : l.getTime()) && E.classList.add(Q), C.appendChild(E), h.setDate(h.getDate() + 1);
        }
        s.contentTableTbody.appendChild(C);
      }
    },
    show() {
      o = !0, s.datePicker.isConnected || R("popover").appendChild(s.datePicker), s.datePicker.style.removeProperty("display"), s.datePicker.setAttribute("data-for", i), g.create(), b.create(), setTimeout(() => {
        s.datePicker.classList.add("is-visible"), d(), d = V(e, s.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      g.destroy(), b.destroy(), a && (a.destroy(), a = null);
      const c = (l) => {
        l.currentTarget === l.target && (o = !1, s.datePicker.removeEventListener("transitionend", c), i === s.datePicker.getAttribute("data-for") && (d(), s.datePicker.remove()));
      };
      s.datePicker.addEventListener("transitionend", c), s.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, b = x(p);
  return p;
};
class ue {
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
class be {
  constructor({
    context: e,
    undoStackLength: t = me,
    disabled: n = !1
  }) {
    this._isPreventedUIRecording = !0, this._undoCommandStack = [], this._redoCommandStack = [], this._stackLength = t, this._disabled = n, this._context = e;
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
      return this._currentRecordingBlock = new ue(e), t(), this.pushCommandBlock(this._currentRecordingBlock), this._currentRecordingBlock;
    } catch (n) {
      console.error("Got an error during recording!"), console.error(n);
    } finally {
      this._currentRecordingBlock = void 0;
    }
  }
  undo() {
    const e = this._undoCommandStack.pop();
    e && e.undo() && (this._redoCommandStack.push(e), this._context.onUndo(e));
  }
  redo() {
    const e = this._redoCommandStack.pop();
    e && e.execute() && (this._undoCommandStack.push(e), this._context.onRedo(e));
  }
  pushCommandBlock(e) {
    this.isDisabled || (this._undoCommandStack.length >= this._stackLength && this._undoCommandStack.shift(), this._undoCommandStack.push(e), this._redoCommandStack = []);
  }
  pushCommand(e) {
    if (!this._currentRecordingBlock)
      throw new Error("Not recording!");
    this._currentRecordingBlock.pushCommand(e);
  }
  clearCommands() {
    this._undoCommandStack = [], this._redoCommandStack = [];
  }
  pauseUIRecording() {
    this._isPreventedUIRecording = !1;
  }
  startUIRecording() {
    this._isPreventedUIRecording = !0;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get isRecording() {
    return this._currentRecordingBlock !== void 0;
  }
  get isPreventedUIRecording() {
    return this._isPreventedUIRecording;
  }
  get isDisabled() {
    return this._disabled;
  }
  get stackLength() {
    return this._stackLength;
  }
  set stackLength(e) {
    this._stackLength = e;
  }
  set isDisabled(e) {
    this._disabled = e;
  }
}
export {
  Ee as I,
  se as a,
  oe as b,
  ge as c,
  be as d,
  ue as e,
  ke as s
};
//# sourceMappingURL=command-manager-B89JK2HT.js.map
