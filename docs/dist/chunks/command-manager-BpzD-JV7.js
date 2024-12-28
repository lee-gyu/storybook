import { s as tt, m as nt, n as st, o as it, p as rt, q as at, r as ot, t as lt, u as ut, v as ct, w as dt, x as ht, y as ft, A as gt, B as pt, C as Ke, D as mt, E as vt, F as yt } from "./css-F1iGWdNw.js";
import { e as xt, v as bt, b as Be, g as _e, h as ze } from "./floating-DlacX8th.js";
import { L as St, c as wt, a as We, b as Je, g as Ze, d as re, e as Lt } from "./rx-state-ZWe0-z5g.js";
function $e() {
  const r = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: t,
    getListOrNull: n,
    add: i,
    remove: s,
    clear: a,
    clearAll: l,
    forEach: o,
    forEachAsync: d
  };
  function e(c) {
    return r.has(c);
  }
  function t(c) {
    return r.get(c);
  }
  function n(c) {
    const h = r.get(c);
    return h || null;
  }
  function s(c, h) {
    const u = n(c);
    if (!u)
      return;
    const m = u.indexOf(h);
    m > -1 && u.splice(m, 1);
  }
  function i(c, h) {
    e(c) ? t(c).push(h) : r.set(c, [h]);
  }
  function a(c) {
    r.set(c, []);
  }
  function l() {
    r.clear();
  }
  function o(c, h) {
    const u = n(c);
    if (!u)
      return !0;
    for (const m of u)
      if (h(m) === !1)
        return !1;
    return !0;
  }
  async function d(c, h) {
    const u = n(c);
    if (!u)
      return !0;
    try {
      for (const m of u) {
        const L = h(m);
        if (L instanceof Promise && await L === !1 || L === !1)
          return !1;
      }
    } catch (m) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(m), m;
    }
    return !0;
  }
}
async function Ct(r) {
  for (const { label: e, task: t } of r)
    try {
      if (await t === !1)
        return !1;
    } catch (n) {
      throw console.error(`occurred an error when ${e}`), n;
    }
  return !0;
}
function zn() {
  const r = /* @__PURE__ */ new Map(), e = $e(), t = $e(), n = $e();
  return {
    emit: a,
    pauseEmit: s,
    resumeEmit: i,
    clearHooks: l,
    addHook: o,
    setHook: c,
    removeHook: d,
    clearBeginHooks: h,
    addBeginHook: u,
    setBeginHook: m,
    clearEndHooks: L,
    addEndHook: D,
    setEndHook: y,
    destroy: C
  };
  function s(f) {
    const b = r.get(f);
    r.set(f, b ? b + 1 : 1);
  }
  function i(f) {
    const b = r.get(f);
    b && b > 1 ? r.set(f, b - 1) : b === 1 && r.delete(f);
  }
  function a(f, b) {
    if (r.has(f))
      return Promise.resolve(!0);
    const E = (M) => M(...b);
    return Ct([
      {
        label: `begin_${f}`,
        task: e.forEachAsync(f, E)
      },
      {
        label: `${f}`,
        task: n.forEachAsync(f, E)
      },
      {
        label: `end_${f}`,
        task: t.forEachAsync(f, E)
      }
    ]);
  }
  function l(f) {
    n.clear(f);
  }
  function o(f, b) {
    n.add(f, b);
  }
  function d(f, b) {
    n.remove(f, b);
  }
  function c(f, b) {
    l(f), o(f, b);
  }
  function h(f) {
    e.clear(f);
  }
  function u(f, b) {
    e.add(f, b);
  }
  function m(f, b) {
    h(f), u(f, b);
  }
  function L(f) {
    t.clear(f);
  }
  function D(f, b) {
    t.add(f, b);
  }
  function y(f, b) {
    L(f), D(f, b);
  }
  function C() {
    e.clearAll(), t.clearAll(), n.clearAll();
  }
}
function $t(r) {
  let e = null;
  return () => (e === null && (e = r()), e);
}
const Et = {
  isDev: !0,
  version: "2.16.2-alpha.0"
};
function Ot() {
  return {
    get irStyleVersion() {
      return Et.version;
    },
    getComponent(r) {
      return oe().get(r);
    },
    getComponents(r) {
      return oe().getComponents(r);
    }
  };
}
xt() && Object.assign(window, { __IR_DEBUG__: Ot() });
class Dt {
  _componentDict = {};
  delete(e) {
    delete this._componentDict[e];
  }
  register(e) {
    this._componentDict[e.uuid] = e;
  }
  get(e) {
    return this._componentDict[e] ?? null;
  }
  replace(e, t) {
    this.get(e)?.destroy(), this.register(t);
  }
  clear() {
    [...Object.values(this._componentDict)].forEach((e) => e.destroy());
  }
  getComponents(e) {
    return Object.values(this._componentDict).filter((t) => t && (e === void 0 || t.componentLabel === e));
  }
}
const oe = $t(() => new Dt()), kt = 12, Pt = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll"
];
class Mt {
  contextElement;
  _coreElements;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _globalEvents;
  _logger;
  _componentIdentifier;
  _resizeObserver;
  #e = !1;
  constructor({ contextElement: e }) {
    this.contextElement = e, this._coreElements = [], this._globalEvents = [], this.componentLabel && (e.dataset.componentLabel = this.componentLabel), this.hasUUID ? oe().replace(this.uuid, this) : this.initUUID(), this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`, this._logger = new St(this._componentIdentifier, "WARNING");
  }
  get hasUUID() {
    return this.contextElement.getAttribute("data-uuid") != null;
  }
  get uuid() {
    return this.contextElement.getAttribute("data-uuid") || "";
  }
  get componentLabel() {
    return "";
  }
  get isDestroyed() {
    return this.#e;
  }
  get logger() {
    return this._logger;
  }
  get contextWidth() {
    return this.contextElement.scrollWidth;
  }
  get contextHeight() {
    return this.contextElement.scrollHeight;
  }
  destroy() {
    this._coreElements.forEach((e) => e.remove()), this._globalEvents.forEach(([e, t, n, s]) => e.removeEventListener(t, n, s)), this._resizeObserver?.disconnect(), this.#e = !0, this.onDestroy(), this._coreElements.length = 0, this._globalEvents.length = 0, this._resizeObserver = void 0, oe().delete(this.uuid);
  }
  resizeObserve(e) {
    this._resizeObserver?.disconnect(), this._resizeObserver = new ResizeObserver(e), this._resizeObserver.observe(this.contextElement);
  }
  // destroy() 호출 시점에 같이 정리되는 엘리먼트 등록
  // 사용케이스: contextElement가 제거되어도 제거 되지 않는 요소 등록
  addCoreElement(e) {
    return this._coreElements.push(e), e;
  }
  /**
   * destroy() 호출 시점에 같이 정리되어야 하는 이벤트 등록
   * 해당 이벤트 처리 요소가 contextElement 내부 자식 요소가 아닌 경우에 사용
   */
  addGlobalEventListener(e, t, n, s) {
    this._globalEvents.push([e, t, n, s]), e.addEventListener(t, n, s);
  }
  /**
   * destroy 호출 시점에 같이 정리되어야 하는 이벤트 등록
   */
  onDestroy() {
  }
  getScrollCls(e, t) {
    return e && t ? "has-both-scroll" : e ? "has-vertical-scroll" : t ? "has-horizontal-scroll" : "";
  }
  hasVerticalScroll() {
    return this.contextHeight > this.contextElement.clientHeight + 1;
  }
  hasHorizontalScroll() {
    return this.contextWidth > this.contextElement.clientWidth + 1;
  }
  generateScrollBarClass() {
    const e = this.hasVerticalScroll(), t = this.hasHorizontalScroll(), n = this.getScrollCls(e, t);
    Pt.filter((s) => !n.includes(s)).forEach((s) => this.contextElement.classList.remove(s)), n !== "" && !this.contextElement.classList.contains(n) && this.contextElement.classList.add(n);
  }
  initUUID() {
    if (!this.hasUUID) {
      const e = bt().replace(/-/g, "").substring(0, kt);
      this.contextElement.setAttribute("data-uuid", e), oe().register(this);
    }
  }
}
function Wn(r, e = new Error()) {
  if (!r)
    throw typeof e == "string" ? new Error(e) : e;
}
function Jn(r) {
  return r instanceof HTMLElement;
}
const z = {
  select: tt,
  selectDropdown: nt,
  selectDropdownList: st,
  selectDropdownButton: it,
  selectDropdownItem: rt,
  selectDropdownIcon: at,
  selectInput: ot,
  selectInputNative: lt,
  selectInputIcon: ut,
  selectDropdownItemSelected: ct
}, Rt = () => {
  const r = document.createElement("div"), e = document.createElement("ul");
  return r.classList.add(z.selectDropdown, wt.zIndex.popover), e.className = z.selectDropdownList, r.appendChild(e), { divDropdown: r, ulItems: e };
}, Nt = (r, e) => {
  const t = document.createElement("li"), n = document.createElement("button"), s = document.createElement("i"), i = document.createElement("span");
  return i.innerText = e, n.type = "button", n.title = e, n.className = z.selectDropdownButton, t.className = z.selectDropdownItem, t.setAttribute("ir-select-value", r), s.classList.add(z.selectDropdownIcon, "ir-icon", "ir-icon--check"), n.appendChild(s), n.append(i), t.append(n), { item: t, button: n, icon: s, span: i };
};
class Zn extends Mt {
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
    const t = Rt();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const n = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(z.select), this.select.classList.forEach((i) => this.divSelect.classList.add(i)), this.divInput.className = z.selectInput, this.inputValue.className = z.selectInputNative, n.classList.add(z.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(n), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const s = this.select.value;
    this._value = "", Array.from(this.select.children).map((i) => i).forEach((i) => {
      const a = {};
      for (let l = 0; l < i.attributes.length; ++l) {
        const o = i.attributes.item(l);
        if (!o) return;
        a[o.name] = o.value;
      }
      this.addItem(i.value, i.text, a), i.remove();
    }), e instanceof HTMLSelectElement ? this.value = s : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || s), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = Be(this), this.outsideHandler = We({
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
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || _e("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = ze(this.divSelect, this.divDropDown);
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
    const { item: s, button: i } = Nt(e, t), a = document.createElement("option");
    return Object.entries(n).forEach(([l, o]) => a.setAttribute(l, o)), a.value = e, a.innerText = t, this.select.appendChild(a), this.items.push({ text: t, value: e, element: s, option: a, attr: n }), this.ulItems.appendChild(s), s.onclick = (l) => {
      this.lastClickedOption !== a && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: n, element: s, option: a })), this.hide();
    }, i;
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
    this.items.forEach(({ element: e }) => e.classList.remove(z.selectDropdownItemSelected));
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
  changeValue({ text: e, value: t, option: n, element: s }, i = !0) {
    this.lastClickedOption = n, s.classList.add(z.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, i && this.onChange(this.select, n);
  }
}
var Ge = { exports: {} };
(function(r, e) {
  (function(t, n) {
    r.exports = n();
  })(Je, function() {
    var t = 1e3, n = 6e4, s = 36e5, i = "millisecond", a = "second", l = "minute", o = "hour", d = "day", c = "week", h = "month", u = "quarter", m = "year", L = "date", D = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
      var v = ["th", "st", "nd", "rd"], p = S % 100;
      return "[" + S + (v[(p - 20) % 10] || v[p] || v[0]) + "]";
    } }, b = function(S, v, p) {
      var x = String(S);
      return !x || x.length >= v ? S : "" + Array(v + 1 - x.length).join(p) + S;
    }, E = { s: b, z: function(S) {
      var v = -S.utcOffset(), p = Math.abs(v), x = Math.floor(p / 60), g = p % 60;
      return (v <= 0 ? "+" : "-") + b(x, 2, "0") + ":" + b(g, 2, "0");
    }, m: function S(v, p) {
      if (v.date() < p.date()) return -S(p, v);
      var x = 12 * (p.year() - v.year()) + (p.month() - v.month()), g = v.clone().add(x, h), w = p - g < 0, $ = v.clone().add(x + (w ? -1 : 1), h);
      return +(-(x + (p - g) / (w ? g - $ : $ - g)) || 0);
    }, a: function(S) {
      return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
    }, p: function(S) {
      return { M: h, y: m, w: c, d, D: L, h: o, m: l, s: a, ms: i, Q: u }[S] || String(S || "").toLowerCase().replace(/s$/, "");
    }, u: function(S) {
      return S === void 0;
    } }, M = "en", R = {};
    R[M] = f;
    var N = "$isDayjsObject", Y = function(S) {
      return S instanceof U || !(!S || !S[N]);
    }, V = function S(v, p, x) {
      var g;
      if (!v) return M;
      if (typeof v == "string") {
        var w = v.toLowerCase();
        R[w] && (g = w), p && (R[w] = p, g = w);
        var $ = v.split("-");
        if (!g && $.length > 1) return S($[0]);
      } else {
        var P = v.name;
        R[P] = v, g = P;
      }
      return !x && g && (M = g), g || !x && M;
    }, T = function(S, v) {
      if (Y(S)) return S.clone();
      var p = typeof v == "object" ? v : {};
      return p.date = S, p.args = arguments, new U(p);
    }, k = E;
    k.l = V, k.i = Y, k.w = function(S, v) {
      return T(S, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset });
    };
    var U = function() {
      function S(p) {
        this.$L = V(p.locale, null, !0), this.parse(p), this.$x = this.$x || p.x || {}, this[N] = !0;
      }
      var v = S.prototype;
      return v.parse = function(p) {
        this.$d = function(x) {
          var g = x.date, w = x.utc;
          if (g === null) return /* @__PURE__ */ new Date(NaN);
          if (k.u(g)) return /* @__PURE__ */ new Date();
          if (g instanceof Date) return new Date(g);
          if (typeof g == "string" && !/Z$/i.test(g)) {
            var $ = g.match(y);
            if ($) {
              var P = $[2] - 1 || 0, I = ($[7] || "0").substring(0, 3);
              return w ? new Date(Date.UTC($[1], P, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, I)) : new Date($[1], P, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, I);
            }
          }
          return new Date(g);
        }(p), this.init();
      }, v.init = function() {
        var p = this.$d;
        this.$y = p.getFullYear(), this.$M = p.getMonth(), this.$D = p.getDate(), this.$W = p.getDay(), this.$H = p.getHours(), this.$m = p.getMinutes(), this.$s = p.getSeconds(), this.$ms = p.getMilliseconds();
      }, v.$utils = function() {
        return k;
      }, v.isValid = function() {
        return this.$d.toString() !== D;
      }, v.isSame = function(p, x) {
        var g = T(p);
        return this.startOf(x) <= g && g <= this.endOf(x);
      }, v.isAfter = function(p, x) {
        return T(p) < this.startOf(x);
      }, v.isBefore = function(p, x) {
        return this.endOf(x) < T(p);
      }, v.$g = function(p, x, g) {
        return k.u(p) ? this[x] : this.set(g, p);
      }, v.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, v.valueOf = function() {
        return this.$d.getTime();
      }, v.startOf = function(p, x) {
        var g = this, w = !!k.u(x) || x, $ = k.p(p), P = function(W, j) {
          var _ = k.w(g.$u ? Date.UTC(g.$y, j, W) : new Date(g.$y, j, W), g);
          return w ? _ : _.endOf(d);
        }, I = function(W, j) {
          return k.w(g.toDate()[W].apply(g.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(j)), g);
        }, F = this.$W, H = this.$M, B = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch ($) {
          case m:
            return w ? P(1, 0) : P(31, 11);
          case h:
            return w ? P(1, H) : P(0, H + 1);
          case c:
            var Z = this.$locale().weekStart || 0, ee = (F < Z ? F + 7 : F) - Z;
            return P(w ? B - ee : B + (6 - ee), H);
          case d:
          case L:
            return I(Q + "Hours", 0);
          case o:
            return I(Q + "Minutes", 1);
          case l:
            return I(Q + "Seconds", 2);
          case a:
            return I(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, v.endOf = function(p) {
        return this.startOf(p, !1);
      }, v.$set = function(p, x) {
        var g, w = k.p(p), $ = "set" + (this.$u ? "UTC" : ""), P = (g = {}, g[d] = $ + "Date", g[L] = $ + "Date", g[h] = $ + "Month", g[m] = $ + "FullYear", g[o] = $ + "Hours", g[l] = $ + "Minutes", g[a] = $ + "Seconds", g[i] = $ + "Milliseconds", g)[w], I = w === d ? this.$D + (x - this.$W) : x;
        if (w === h || w === m) {
          var F = this.clone().set(L, 1);
          F.$d[P](I), F.init(), this.$d = F.set(L, Math.min(this.$D, F.daysInMonth())).$d;
        } else P && this.$d[P](I);
        return this.init(), this;
      }, v.set = function(p, x) {
        return this.clone().$set(p, x);
      }, v.get = function(p) {
        return this[k.p(p)]();
      }, v.add = function(p, x) {
        var g, w = this;
        p = Number(p);
        var $ = k.p(x), P = function(H) {
          var B = T(w);
          return k.w(B.date(B.date() + Math.round(H * p)), w);
        };
        if ($ === h) return this.set(h, this.$M + p);
        if ($ === m) return this.set(m, this.$y + p);
        if ($ === d) return P(1);
        if ($ === c) return P(7);
        var I = (g = {}, g[l] = n, g[o] = s, g[a] = t, g)[$] || 1, F = this.$d.getTime() + p * I;
        return k.w(F, this);
      }, v.subtract = function(p, x) {
        return this.add(-1 * p, x);
      }, v.format = function(p) {
        var x = this, g = this.$locale();
        if (!this.isValid()) return g.invalidDate || D;
        var w = p || "YYYY-MM-DDTHH:mm:ssZ", $ = k.z(this), P = this.$H, I = this.$m, F = this.$M, H = g.weekdays, B = g.months, Q = g.meridiem, Z = function(j, _, G, X) {
          return j && (j[_] || j(x, w)) || G[_].slice(0, X);
        }, ee = function(j) {
          return k.s(P % 12 || 12, j, "0");
        }, W = Q || function(j, _, G) {
          var X = j < 12 ? "AM" : "PM";
          return G ? X.toLowerCase() : X;
        };
        return w.replace(C, function(j, _) {
          return _ || function(G) {
            switch (G) {
              case "YY":
                return String(x.$y).slice(-2);
              case "YYYY":
                return k.s(x.$y, 4, "0");
              case "M":
                return F + 1;
              case "MM":
                return k.s(F + 1, 2, "0");
              case "MMM":
                return Z(g.monthsShort, F, B, 3);
              case "MMMM":
                return Z(B, F);
              case "D":
                return x.$D;
              case "DD":
                return k.s(x.$D, 2, "0");
              case "d":
                return String(x.$W);
              case "dd":
                return Z(g.weekdaysMin, x.$W, H, 2);
              case "ddd":
                return Z(g.weekdaysShort, x.$W, H, 3);
              case "dddd":
                return H[x.$W];
              case "H":
                return String(P);
              case "HH":
                return k.s(P, 2, "0");
              case "h":
                return ee(1);
              case "hh":
                return ee(2);
              case "a":
                return W(P, I, !0);
              case "A":
                return W(P, I, !1);
              case "m":
                return String(I);
              case "mm":
                return k.s(I, 2, "0");
              case "s":
                return String(x.$s);
              case "ss":
                return k.s(x.$s, 2, "0");
              case "SSS":
                return k.s(x.$ms, 3, "0");
              case "Z":
                return $;
            }
            return null;
          }(j) || $.replace(":", "");
        });
      }, v.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, v.diff = function(p, x, g) {
        var w, $ = this, P = k.p(x), I = T(p), F = (I.utcOffset() - this.utcOffset()) * n, H = this - I, B = function() {
          return k.m($, I);
        };
        switch (P) {
          case m:
            w = B() / 12;
            break;
          case h:
            w = B();
            break;
          case u:
            w = B() / 3;
            break;
          case c:
            w = (H - F) / 6048e5;
            break;
          case d:
            w = (H - F) / 864e5;
            break;
          case o:
            w = H / s;
            break;
          case l:
            w = H / n;
            break;
          case a:
            w = H / t;
            break;
          default:
            w = H;
        }
        return g ? w : k.a(w);
      }, v.daysInMonth = function() {
        return this.endOf(h).$D;
      }, v.$locale = function() {
        return R[this.$L];
      }, v.locale = function(p, x) {
        if (!p) return this.$L;
        var g = this.clone(), w = V(p, x, !0);
        return w && (g.$L = w), g;
      }, v.clone = function() {
        return k.w(this.$d, this);
      }, v.toDate = function() {
        return new Date(this.valueOf());
      }, v.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, v.toISOString = function() {
        return this.$d.toISOString();
      }, v.toString = function() {
        return this.$d.toUTCString();
      }, S;
    }(), K = U.prototype;
    return T.prototype = K, [["$ms", i], ["$s", a], ["$m", l], ["$H", o], ["$W", d], ["$M", h], ["$y", m], ["$D", L]].forEach(function(S) {
      K[S[1]] = function(v) {
        return this.$g(v, S[0], S[1]);
      };
    }), T.extend = function(S, v) {
      return S.$i || (S(v, U, T), S.$i = !0), T;
    }, T.locale = V, T.isDayjs = Y, T.unix = function(S) {
      return T(1e3 * S);
    }, T.en = R[M], T.Ls = R, T.p = {}, T;
  });
})(Ge);
var Tt = Ge.exports;
const xe = /* @__PURE__ */ Ze(Tt);
var Qe = { exports: {} };
(function(r, e) {
  (function(t, n) {
    r.exports = n();
  })(Je, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, a = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, o = {}, d = function(y) {
      return (y = +y) + (y > 68 ? 1900 : 2e3);
    }, c = function(y) {
      return function(C) {
        this[y] = +C;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(y) {
      (this.zone || (this.zone = {})).offset = function(C) {
        if (!C || C === "Z") return 0;
        var f = C.match(/([+-]|\d\d)/g), b = 60 * f[1] + (+f[2] || 0);
        return b === 0 ? 0 : f[0] === "+" ? -b : b;
      }(y);
    }], u = function(y) {
      var C = o[y];
      return C && (C.indexOf ? C : C.s.concat(C.f));
    }, m = function(y, C) {
      var f, b = o.meridiem;
      if (b) {
        for (var E = 1; E <= 24; E += 1) if (y.indexOf(b(E, 0, C)) > -1) {
          f = E > 12;
          break;
        }
      } else f = y === (C ? "pm" : "PM");
      return f;
    }, L = { A: [l, function(y) {
      this.afternoon = m(y, !1);
    }], a: [l, function(y) {
      this.afternoon = m(y, !0);
    }], Q: [s, function(y) {
      this.month = 3 * (y - 1) + 1;
    }], S: [s, function(y) {
      this.milliseconds = 100 * +y;
    }], SS: [i, function(y) {
      this.milliseconds = 10 * +y;
    }], SSS: [/\d{3}/, function(y) {
      this.milliseconds = +y;
    }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [i, c("day")], Do: [l, function(y) {
      var C = o.ordinal, f = y.match(/\d+/);
      if (this.day = f[0], C) for (var b = 1; b <= 31; b += 1) C(b).replace(/\[|\]/g, "") === y && (this.day = b);
    }], w: [a, c("week")], ww: [i, c("week")], M: [a, c("month")], MM: [i, c("month")], MMM: [l, function(y) {
      var C = u("months"), f = (u("monthsShort") || C.map(function(b) {
        return b.slice(0, 3);
      })).indexOf(y) + 1;
      if (f < 1) throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [l, function(y) {
      var C = u("months").indexOf(y) + 1;
      if (C < 1) throw new Error();
      this.month = C % 12 || C;
    }], Y: [/[+-]?\d+/, c("year")], YY: [i, function(y) {
      this.year = d(y);
    }], YYYY: [/\d{4}/, c("year")], Z: h, ZZ: h };
    function D(y) {
      var C, f;
      C = y, f = o && o.formats;
      for (var b = (y = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, k, U) {
        var K = U && U.toUpperCase();
        return k || f[U] || t[U] || f[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, v, p) {
          return v || p.slice(1);
        });
      })).match(n), E = b.length, M = 0; M < E; M += 1) {
        var R = b[M], N = L[R], Y = N && N[0], V = N && N[1];
        b[M] = V ? { regex: Y, parser: V } : R.replace(/^\[|\]$/g, "");
      }
      return function(T) {
        for (var k = {}, U = 0, K = 0; U < E; U += 1) {
          var S = b[U];
          if (typeof S == "string") K += S.length;
          else {
            var v = S.regex, p = S.parser, x = T.slice(K), g = v.exec(x)[0];
            p.call(k, g), T = T.replace(g, "");
          }
        }
        return function(w) {
          var $ = w.afternoon;
          if ($ !== void 0) {
            var P = w.hours;
            $ ? P < 12 && (w.hours += 12) : P === 12 && (w.hours = 0), delete w.afternoon;
          }
        }(k), k;
      };
    }
    return function(y, C, f) {
      f.p.customParseFormat = !0, y && y.parseTwoDigitYear && (d = y.parseTwoDigitYear);
      var b = C.prototype, E = b.parse;
      b.parse = function(M) {
        var R = M.date, N = M.utc, Y = M.args;
        this.$u = N;
        var V = Y[1];
        if (typeof V == "string") {
          var T = Y[2] === !0, k = Y[3] === !0, U = T || k, K = Y[2];
          k && (K = Y[2]), o = this.$locale(), !T && K && (o = f.Ls[K]), this.$d = function(x, g, w, $) {
            try {
              if (["x", "X"].indexOf(g) > -1) return new Date((g === "X" ? 1e3 : 1) * x);
              var P = D(g)(x), I = P.year, F = P.month, H = P.day, B = P.hours, Q = P.minutes, Z = P.seconds, ee = P.milliseconds, W = P.zone, j = P.week, _ = /* @__PURE__ */ new Date(), G = H || (I || F ? 1 : _.getDate()), X = I || _.getFullYear(), de = 0;
              I && !F || (de = F > 0 ? F - 1 : _.getMonth());
              var he, Se = B || 0, we = Q || 0, Le = Z || 0, Ce = ee || 0;
              return W ? new Date(Date.UTC(X, de, G, Se, we, Le, Ce + 60 * W.offset * 1e3)) : w ? new Date(Date.UTC(X, de, G, Se, we, Le, Ce)) : (he = new Date(X, de, G, Se, we, Le, Ce), j && (he = $(he).week(j).toDate()), he);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(R, V, N, f), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), U && R != this.format(V) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
        } else if (V instanceof Array) for (var S = V.length, v = 1; v <= S; v += 1) {
          Y[1] = V[v - 1];
          var p = f.apply(this, Y);
          if (p.isValid()) {
            this.$d = p.$d, this.$L = p.$L, this.init();
            break;
          }
          v === S && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, M);
      };
    };
  });
})(Qe);
var It = Qe.exports;
const At = /* @__PURE__ */ Ze(It), O = (r) => typeof r == "string", ae = () => {
  let r, e;
  const t = new Promise((n, s) => {
    r = n, e = s;
  });
  return t.resolve = r, t.reject = e, t;
}, De = (r) => r == null ? "" : "" + r, Ft = (r, e, t) => {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, Yt = /###/g, ke = (r) => r && r.indexOf("###") > -1 ? r.replace(Yt, ".") : r, Pe = (r) => !r || O(r), le = (r, e, t) => {
  const n = O(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (Pe(r)) return {};
    const i = ke(n[s]);
    !r[i] && t && (r[i] = new t()), Object.prototype.hasOwnProperty.call(r, i) ? r = r[i] : r = {}, ++s;
  }
  return Pe(r) ? {} : {
    obj: r,
    k: ke(n[s])
  };
}, Me = (r, e, t) => {
  const {
    obj: n,
    k: s
  } = le(r, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[s] = t;
    return;
  }
  let i = e[e.length - 1], a = e.slice(0, e.length - 1), l = le(r, a, Object);
  for (; l.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), l = le(r, a, Object), l?.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = t;
}, Ht = (r, e, t, n) => {
  const {
    obj: s,
    k: i
  } = le(r, e, Object);
  s[i] = s[i] || [], s[i].push(t);
}, pe = (r, e) => {
  const {
    obj: t,
    k: n
  } = le(r, e);
  if (t)
    return t[n];
}, jt = (r, e, t) => {
  const n = pe(r, t);
  return n !== void 0 ? n : pe(e, t);
}, Xe = (r, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? O(r[n]) || r[n] instanceof String || O(e[n]) || e[n] instanceof String ? t && (r[n] = e[n]) : Xe(r[n], e[n], t) : r[n] = e[n]);
  return r;
}, te = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Vt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Ut = (r) => O(r) ? r.replace(/[&<>"'\/]/g, (e) => Vt[e]) : r;
class Kt {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const Bt = [" ", ",", "?", "!", ";"], _t = new Kt(20), zt = (r, e, t) => {
  e = e || "", t = t || "";
  const n = Bt.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (n.length === 0) return !0;
  const s = _t.getRegExp(`(${n.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !s.test(r);
  if (!i) {
    const a = r.indexOf(t);
    a > 0 && !s.test(r.substring(0, a)) && (i = !0);
  }
  return i;
}, Oe = function(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r) return;
  if (r[e]) return r[e];
  const n = e.split(t);
  let s = r;
  for (let i = 0; i < n.length; ) {
    if (!s || typeof s != "object")
      return;
    let a, l = "";
    for (let o = i; o < n.length; ++o)
      if (o !== i && (l += t), l += n[o], a = s[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && o < n.length - 1)
          continue;
        i += o - i + 1;
        break;
      }
    s = a;
  }
  return s;
}, me = (r) => r?.replace("_", "-"), Wt = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    console?.[r]?.apply?.(console, e);
  }
};
class ve {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Wt, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, s) {
    return s && !this.debug ? null : (O(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new ve(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new ve(this.logger, e);
  }
}
var J = new ve();
class be {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const s = this.observers[n].get(t) || 0;
      this.observers[n].set(t, s + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      n[s - 1] = arguments[s];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((a) => {
      let [l, o] = a;
      for (let d = 0; d < o; d++)
        l(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((a) => {
      let [l, o] = a;
      for (let d = 0; d < o; d++)
        l.apply(l, [e, ...n]);
    });
  }
}
class Re extends be {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, a = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], n && (Array.isArray(n) ? l.push(...n) : O(n) && i ? l.push(...n.split(i)) : l.push(n)));
    const o = pe(this.data, l);
    return !o && !t && !n && e.indexOf(".") > -1 && (e = l[0], t = l[1], n = l.slice(2).join(".")), o || !a || !O(n) ? o : Oe(this.data?.[e]?.[t], n, i);
  }
  addResource(e, t, n, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (l = e.split("."), s = t, t = l[1]), this.addNamespaces(t), Me(this.data, l, s), i.silent || this.emit("added", e, t, n, s);
  }
  addResources(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in n)
      (O(n[i]) || Array.isArray(n[i])) && this.addResource(e, t, i, n[i], {
        silent: !0
      });
    s.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, s, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), s = n, n = t, t = l[1]), this.addNamespaces(t);
    let o = pe(this.data, l) || {};
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? Xe(o, n, i) : o = {
      ...o,
      ...n
    }, Me(this.data, l, o), a.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((s) => t[s] && Object.keys(t[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var qe = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, n, s) {
    return r.forEach((i) => {
      e = this.processors[i]?.process(e, t, n, s) ?? e;
    }), e;
  }
};
const Ne = {};
class ye extends be {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ft(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = J.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    return e == null ? !1 : this.resolve(e, t)?.res !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const a = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !zt(e, n, s);
    if (a && !l) {
      const o = e.match(this.interpolator.nestingRegexp);
      if (o && o.length > 0)
        return {
          key: e,
          namespaces: O(i) ? [i] : i
        };
      const d = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(d[0]) > -1) && (i = d.shift()), e = d.join(s);
    }
    return {
      key: e,
      namespaces: O(i) ? [i] : i
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), o = l[l.length - 1], d = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (d?.toLowerCase() === "cimode") {
      if (c) {
        const E = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${o}${E}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: d,
          usedNS: o,
          usedParams: this.getUsedParamsDetails(t)
        } : `${o}${E}${a}`;
      }
      return s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: o,
        usedParams: this.getUsedParamsDetails(t)
      } : a;
    }
    const h = this.resolve(e, t);
    let u = h?.res;
    const m = h?.usedKey || a, L = h?.exactUsedKey || a, D = Object.prototype.toString.apply(u), y = ["[object Number]", "[object Function]", "[object RegExp]"], C = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, f = !this.i18nFormat || this.i18nFormat.handleAsObject, b = !O(u) && typeof u != "boolean" && typeof u != "number";
    if (f && u && b && y.indexOf(D) < 0 && !(O(C) && Array.isArray(u))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, u, {
          ...t,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (h.res = E, h.usedParams = this.getUsedParamsDetails(t), h) : E;
      }
      if (i) {
        const E = Array.isArray(u), M = E ? [] : {}, R = E ? L : m;
        for (const N in u)
          if (Object.prototype.hasOwnProperty.call(u, N)) {
            const Y = `${R}${i}${N}`;
            M[N] = this.translate(Y, {
              ...t,
              joinArrays: !1,
              ns: l
            }), M[N] === Y && (M[N] = u[N]);
          }
        u = M;
      }
    } else if (f && O(C) && Array.isArray(u))
      u = u.join(C), u && (u = this.extendTranslation(u, e, t, n));
    else {
      let E = !1, M = !1;
      const R = t.count !== void 0 && !O(t.count), N = ye.hasDefaultValue(t), Y = R ? this.pluralResolver.getSuffix(d, t.count, t) : "", V = t.ordinal && R ? this.pluralResolver.getSuffix(d, t.count, {
        ordinal: !1
      }) : "", T = R && !t.ordinal && t.count === 0, k = T && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${Y}`] || t[`defaultValue${V}`] || t.defaultValue;
      !this.isValidLookup(u) && N && (E = !0, u = k), this.isValidLookup(u) || (M = !0, u = a);
      const K = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && M ? void 0 : u, S = N && k !== u && this.options.updateMissing;
      if (M || E || S) {
        if (this.logger.log(S ? "updateKey" : "missingKey", d, o, a, S ? k : u), i) {
          const g = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          g && g.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let v = [];
        const p = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && p && p[0])
          for (let g = 0; g < p.length; g++)
            v.push(p[g]);
        else this.options.saveMissingTo === "all" ? v = this.languageUtils.toResolveHierarchy(t.lng || this.language) : v.push(t.lng || this.language);
        const x = (g, w, $) => {
          const P = N && $ !== u ? $ : K;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(g, o, w, P, S, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(g, o, w, P, S, t), this.emit("missingKey", g, o, w, u);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && R ? v.forEach((g) => {
          const w = this.pluralResolver.getSuffixes(g, t);
          T && t[`defaultValue${this.options.pluralSeparator}zero`] && w.indexOf(`${this.options.pluralSeparator}zero`) < 0 && w.push(`${this.options.pluralSeparator}zero`), w.forEach(($) => {
            x([g], a + $, t[`defaultValue${$}`] || k);
          });
        }) : x(v, a, k));
      }
      u = this.extendTranslation(u, e, t, h, n), M && u === a && this.options.appendNamespaceToMissingKey && (u = `${o}:${a}`), (M || E) && this.options.parseMissingKeyHandler && (u = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${o}:${a}` : a, E ? u : void 0));
    }
    return s ? (h.res = u, h.usedParams = this.getUsedParamsDetails(t), h) : u;
  }
  extendTranslation(e, t, n, s, i) {
    var a = this;
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const d = O(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (d) {
        const u = e.match(this.interpolator.nestingRegexp);
        c = u && u.length;
      }
      let h = n.replace && !O(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), e = this.interpolator.interpolate(e, h, n.lng || this.language || s.usedLng, n), d) {
        const u = e.match(this.interpolator.nestingRegexp), m = u && u.length;
        c < m && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var u = arguments.length, m = new Array(u), L = 0; L < u; L++)
          m[L] = arguments[L];
        return i?.[0] === m[0] && !n.context ? (a.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : a.translate(...m, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, o = O(l) ? [l] : l;
    return e != null && o?.length && n.applyPostProcessor !== !1 && (e = qe.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, s, i, a, l;
    return O(e) && (e = [e]), e.forEach((o) => {
      if (this.isValidLookup(n)) return;
      const d = this.extractFromKey(o, t), c = d.key;
      s = c;
      let h = d.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const u = t.count !== void 0 && !O(t.count), m = u && !t.ordinal && t.count === 0, L = t.context !== void 0 && (O(t.context) || typeof t.context == "number") && t.context !== "", D = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((y) => {
        this.isValidLookup(n) || (l = y, !Ne[`${D[0]}-${y}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(l) && (Ne[`${D[0]}-${y}`] = !0, this.logger.warn(`key "${s}" for languages "${D.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), D.forEach((C) => {
          if (this.isValidLookup(n)) return;
          a = C;
          const f = [c];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(f, c, C, y, t);
          else {
            let E;
            u && (E = this.pluralResolver.getSuffix(C, t.count, t));
            const M = `${this.options.pluralSeparator}zero`, R = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (u && (f.push(c + E), t.ordinal && E.indexOf(R) === 0 && f.push(c + E.replace(R, this.options.pluralSeparator)), m && f.push(c + M)), L) {
              const N = `${c}${this.options.contextSeparator}${t.context}`;
              f.push(N), u && (f.push(N + E), t.ordinal && E.indexOf(R) === 0 && f.push(N + E.replace(R, this.options.pluralSeparator)), m && f.push(N + M));
            }
          }
          let b;
          for (; b = f.pop(); )
            this.isValidLookup(n) || (i = b, n = this.getResource(C, y, b, t));
        }));
      });
    }), {
      res: n,
      usedKey: s,
      exactUsedKey: i,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, n, s) : this.resourceStore.getResource(e, t, n, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !O(e.replace);
    let s = n ? e.replace : e;
    if (n && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !n) {
      s = {
        ...s
      };
      for (const i of t)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class Te {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = J.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = me(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = me(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (O(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((n) => {
      if (t) return;
      const s = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
    }), !t && this.options.supportedLngs && e.forEach((n) => {
      if (t) return;
      const s = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(s)) return t = s;
      t = this.options.supportedLngs.find((i) => {
        if (i === s) return i;
        if (!(i.indexOf("-") < 0 && s.indexOf("-") < 0) && (i.indexOf("-") > 0 && s.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === s || i.indexOf(s) === 0 && s.length > 1))
          return i;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), O(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], i = (a) => {
      a && (this.isSupportedCode(a) ? s.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return O(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : O(e) && i(this.formatLanguageCode(e)), n.forEach((a) => {
      s.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), s;
  }
}
const Ie = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ae = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Jt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = J.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = me(e === "dev" ? "en" : e), s = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: n,
      type: s
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let a;
    try {
      a = new Intl.PluralRules(n, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Ae;
      if (!e.match(/-|_/)) return Ae;
      const o = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(o, t);
    }
    return this.pluralRulesCache[i] = a, a;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((s) => `${t}${s}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, i) => Ie[s] - Ie[i]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Fe = function(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = jt(r, e, t);
  return !i && s && O(t) && (i = Oe(r, t, n), i === void 0 && (i = Oe(e, t, n))), i;
}, Ee = (r) => r.replace(/\$/g, "$$$$");
class Zt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = J.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: o,
      formatSeparator: d,
      unescapeSuffix: c,
      unescapePrefix: h,
      nestingPrefix: u,
      nestingPrefixEscaped: m,
      nestingSuffix: L,
      nestingSuffixEscaped: D,
      nestingOptionsSeparator: y,
      maxReplaces: C,
      alwaysFormat: f
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Ut, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? te(i) : a || "{{", this.suffix = l ? te(l) : o || "}}", this.formatSeparator = d || ",", this.unescapePrefix = c ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = u ? te(u) : m || te("$t("), this.nestingSuffix = L ? te(L) : D || te(")"), this.nestingOptionsSeparator = y || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = f !== void 0 ? f : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => t?.source === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, s) {
    let i, a, l;
    const o = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const C = Fe(t, o, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, n, {
          ...s,
          ...t,
          interpolationkey: m
        }) : C;
      }
      const L = m.split(this.formatSeparator), D = L.shift().trim(), y = L.join(this.formatSeparator).trim();
      return this.format(Fe(t, o, D, this.options.keySeparator, this.options.ignoreJSONStructure), y, n, {
        ...s,
        ...t,
        interpolationkey: D
      });
    };
    this.resetRegExp();
    const c = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, h = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => Ee(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? Ee(this.escape(m)) : Ee(m)
    }].forEach((m) => {
      for (l = 0; i = m.regex.exec(e); ) {
        const L = i[1].trim();
        if (a = d(L), a === void 0)
          if (typeof c == "function") {
            const y = c(e, i, s);
            a = O(y) ? y : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, L))
            a = "";
          else if (h) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${L} for interpolating ${e}`), a = "";
        else !O(a) && !this.useRawValueToEscape && (a = De(a));
        const D = m.safeValue(a);
        if (e = e.replace(i[0], D), h ? (m.regex.lastIndex += a.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, i, a;
    const l = (o, d) => {
      const c = this.nestingOptionsSeparator;
      if (o.indexOf(c) < 0) return o;
      const h = o.split(new RegExp(`${c}[ ]*{`));
      let u = `{${h[1]}`;
      o = h[0], u = this.interpolate(u, a);
      const m = u.match(/'/g), L = u.match(/"/g);
      ((m?.length ?? 0) % 2 === 0 && !L || L.length % 2 !== 0) && (u = u.replace(/'/g, '"'));
      try {
        a = JSON.parse(u), d && (a = {
          ...d,
          ...a
        });
      } catch (D) {
        return this.logger.warn(`failed parsing options string in nesting for key ${o}`, D), `${o}${c}${u}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, o;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let o = [];
      a = {
        ...n
      }, a = a.replace && !O(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let d = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const c = s[1].split(this.formatSeparator).map((h) => h.trim());
        s[1] = c.shift(), o = c, d = !0;
      }
      if (i = t(l.call(this, s[1].trim(), a), a), i && s[0] === e && !O(i)) return i;
      O(i) || (i = De(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), i = ""), d && (i = o.reduce((c, h) => this.format(c, h, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), i.trim())), e = e.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Gt = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.indexOf("(") > -1) {
    const n = r.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((a) => {
      if (a) {
        const [l, ...o] = a.split(":"), d = o.join(":").trim().replace(/^'+|'+$/g, ""), c = l.trim();
        t[c] || (t[c] = d), d === "false" && (t[c] = !1), d === "true" && (t[c] = !0), isNaN(d) || (t[c] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ne = (r) => {
  const e = {};
  return (t, n, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const a = n + JSON.stringify(i);
    let l = e[a];
    return l || (l = r(me(n), s), e[a] = l), l(t);
  };
};
class Qt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = J.create("formatter"), this.options = e, this.formats = {
      number: ne((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      }),
      currency: ne((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (i) => s.format(i);
      }),
      datetime: ne((t, n) => {
        const s = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      }),
      relativetime: ne((t, n) => {
        const s = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (i) => s.format(i, n.range || "day");
      }),
      list: ne((t, n) => {
        const s = new Intl.ListFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ne(t);
  }
  format(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = t.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((l) => l.indexOf(")") > -1)) {
      const l = i.findIndex((o) => o.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator);
    }
    return i.reduce((l, o) => {
      const {
        formatName: d,
        formatOptions: c
      } = Gt(o);
      if (this.formats[d]) {
        let h = l;
        try {
          const u = s?.formatParams?.[s.interpolationkey] || {}, m = u.locale || u.lng || s.locale || s.lng || n;
          h = this.formats[d](l, m, {
            ...c,
            ...s,
            ...u
          });
        } catch (u) {
          this.logger.warn(u);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, e);
  }
}
const Xt = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class qt extends be {
  constructor(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = J.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const i = {}, a = {}, l = {}, o = {};
    return e.forEach((d) => {
      let c = !0;
      t.forEach((h) => {
        const u = `${d}|${h}`;
        !n.reload && this.store.hasResourceBundle(d, h) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? a[u] === void 0 && (a[u] = !0) : (this.state[u] = 1, c = !1, a[u] === void 0 && (a[u] = !0), i[u] === void 0 && (i[u] = !0), o[h] === void 0 && (o[h] = !0)));
      }), c || (l[d] = !0);
    }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(o)
    };
  }
  loaded(e, t, n) {
    const s = e.split("|"), i = s[0], a = s[1];
    t && this.emit("failedLoading", i, a, t), !t && n && this.store.addResourceBundle(i, a, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((o) => {
      Ht(o.loaded, [i], a), Xt(o, e), t && o.errors.push(t), o.pendingCount === 0 && !o.done && (Object.keys(o.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const c = o.loaded[d];
        c.length && c.forEach((h) => {
          l[d][h] === void 0 && (l[d][h] = !0);
        });
      }), o.done = !0, o.errors.length ? o.callback(o.errors) : o.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((o) => !o.done);
  }
  read(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: s,
        wait: i,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (d, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (d && c && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, i * 2, a);
        }, i);
        return;
      }
      a(d, c);
    }, o = this.backend[n].bind(this.backend);
    if (o.length === 2) {
      try {
        const d = o(e, t);
        d && typeof d.then == "function" ? d.then((c) => l(null, c)).catch(l) : l(null, d);
      } catch (d) {
        l(d);
      }
      return;
    }
    return o(e, t, l);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    O(e) && (e = this.languageUtils.toResolveHierarchy(e)), O(t) && (t = [t]);
    const i = this.queueLoad(e, t, n, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), s = n[0], i = n[1];
    this.read(s, i, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${i} for language ${s} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${i} for language ${s}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, n, s, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend?.create) {
        const o = {
          ...a,
          isUpdate: i
        }, d = this.backend.create.bind(this.backend);
        if (d.length < 6)
          try {
            let c;
            d.length === 5 ? c = d(e, t, n, s, o) : c = d(e, t, n, s), c && typeof c.then == "function" ? c.then((h) => l(null, h)).catch(l) : l(null, c);
          } catch (c) {
            l(c);
          }
        else
          d(e, t, n, s, l, o);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const Ye = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (r) => {
    let e = {};
    if (typeof r[1] == "object" && (e = r[1]), O(r[1]) && (e.defaultValue = r[1]), O(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const t = r[3] || r[2];
      Object.keys(t).forEach((n) => {
        e[n] = t[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (r) => r,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), He = (r) => (O(r.ns) && (r.ns = [r.ns]), O(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), O(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs?.indexOf?.("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate), r), fe = () => {
}, en = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class ue extends be {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = He(e), this.services = {}, this.logger = J, this.modules = {
      external: []
    }, en(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (O(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = Ye();
    this.options = {
      ...s,
      ...this.options,
      ...He(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? J.init(i(this.modules.logger), this.options) : J.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Qt;
      const h = new Te(this.options);
      this.store = new Re(this.options.resources, this.options);
      const u = this.services;
      u.logger = J, u.resourceStore = this.store, u.languageUtils = h, u.pluralResolver = new Jt(h, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (u.formatter = i(c), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new Zt(this.options), u.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, u.backendConnector = new qt(i(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function(m) {
        for (var L = arguments.length, D = new Array(L > 1 ? L - 1 : 0), y = 1; y < L; y++)
          D[y - 1] = arguments[y];
        e.emit(m, ...D);
      }), this.modules.languageDetector && (u.languageDetector = i(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = i(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new ye(this.services, this.options), this.translator.on("*", function(m) {
        for (var L = arguments.length, D = new Array(L > 1 ? L - 1 : 0), y = 1; y < L; y++)
          D[y - 1] = arguments[y];
        e.emit(m, ...D);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = fe), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments), e;
      };
    });
    const o = ae(), d = () => {
      const c = (h, u) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(u), n(h, u);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? d() : setTimeout(d, 0), o;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fe;
    const s = O(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const i = [], a = (l) => {
        if (!l || l === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((d) => {
          d !== "cimode" && i.indexOf(d) < 0 && i.push(d);
        });
      };
      s ? a(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((o) => a(o)), this.options.preload?.forEach?.((l) => a(l)), this.services.backendConnector.load(i, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(l);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const s = ae();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = fe), this.services.backendConnector.reload(e, t, (i) => {
      s.resolve(), n(i);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && qe.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const s = ae();
    this.emit("languageChanging", e);
    const i = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, a = (o, d) => {
      d ? (i(d), this.translator.changeLanguage(d), this.isLanguageChangingTo = void 0, this.emit("languageChanged", d), this.logger.log("languageChanged", d)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return n.t(...arguments);
      }), t && t(o, function() {
        return n.t(...arguments);
      });
    }, l = (o) => {
      !e && !o && this.services.languageDetector && (o = []);
      const d = O(o) ? o : this.services.languageUtils.getBestMatchFromCodes(o);
      d && (this.language || i(d), this.translator.language || this.translator.changeLanguage(d), this.services.languageDetector?.cacheUserLanguage?.(d)), this.loadResources(d, (c) => {
        a(c, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const i = function(a, l) {
      let o;
      if (typeof l != "object") {
        for (var d = arguments.length, c = new Array(d > 2 ? d - 2 : 0), h = 2; h < d; h++)
          c[h - 2] = arguments[h];
        o = s.options.overloadTranslationOptionHandler([a, l].concat(c));
      } else
        o = {
          ...l
        };
      o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, o.keyPrefix !== "" && (o.keyPrefix = o.keyPrefix || n || i.keyPrefix);
      const u = s.options.keySeparator || ".";
      let m;
      return o.keyPrefix && Array.isArray(a) ? m = a.map((L) => `${o.keyPrefix}${u}${L}`) : m = o.keyPrefix ? `${o.keyPrefix}${u}${a}` : a, s.t(m, o);
    };
    return O(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i;
  }
  t() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.translator?.translate(...t);
  }
  exists() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.translator?.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = t.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const a = (l, o) => {
      const d = this.services.backendConnector.state[`${l}|${o}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, e) && (!s || a(i, e)));
  }
  loadNamespaces(e, t) {
    const n = ae();
    return this.options.ns ? (O(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = ae();
    O(e) && (e = [e]);
    const s = this.options.preload || [], i = e.filter((a) => s.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((a) => {
      n.resolve(), t && t(a);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new Te(Ye());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ue(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fe;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new ue(s);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n && (i.store = new Re(this.store.data, s), i.services.resourceStore = i.store), i.translator = new ye(i.services, s), i.translator.on("*", function(l) {
      for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
        d[c - 1] = arguments[c];
      i.emit(l, ...d);
    }), i.init(s, t), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const A = ue.createInstance();
A.createInstance = ue.createInstance;
A.createInstance;
A.dir;
A.init;
A.loadResources;
A.reloadResources;
A.use;
A.changeLanguage;
A.getFixedT;
A.t;
A.exists;
A.setDefaultNamespace;
A.hasLoadedNamespace;
A.loadNamespaces;
A.loadLanguages;
const tn = {
  sun: "Sun",
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat"
}, nn = {
  dateFormat: "MM/DD/YYYY",
  titleFormat: "MMMM YYYY",
  btnToday: "Today",
  disabledTodayTooltip: "Disabled Today Button."
}, sn = {
  am: "AM",
  pm: "PM",
  btnNow: "Current time"
}, rn = {
  cancel: "Cancel",
  ignore: "Ignore",
  no: "No",
  ok: "OK",
  retry: "Retry",
  stop: "Abort",
  yes: "Yes"
}, an = {
  search: "Search:",
  regex: "(/{Pattern}/ for regex)",
  replace: "Text for searching:",
  with: "Text for replacing:",
  replaceYN: "Are you sure to replace?",
  yes: "Yes",
  no: "No",
  all: "All",
  stop: "Stop"
}, on = {
  placeholder: "Enter the keywords.",
  "results.no-result": "No result was found."
}, ln = {
  common: tn,
  datePicker: nn,
  timePicker: sn,
  confirm: rn,
  editor: an,
  pageContainer: on
}, un = {
  sun: "日",
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土"
}, cn = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY年MM月",
  btnToday: "今日"
}, dn = {
  btnNow: "現在時刻"
}, hn = {
  cancel: "取消",
  ignore: "無視",
  no: "いいえ",
  ok: "確認",
  retry: "再開",
  stop: "中止",
  yes: "はい"
}, fn = {
  yes: "はい",
  no: "いいえ"
}, gn = {
  placeholder: "検索キーワードを入力してください。",
  "results.no-result": "検索結果がありません。"
}, pn = {
  common: un,
  datePicker: cn,
  timePicker: dn,
  confirm: hn,
  editor: fn,
  pageContainer: gn
}, mn = {
  sun: "일",
  mon: "월",
  tue: "화",
  wed: "수",
  thu: "목",
  fri: "금",
  sat: "토"
}, vn = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY년 M월",
  btnToday: "오늘 선택",
  disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다."
}, yn = {
  am: "오전",
  pm: "오후",
  btnNow: "현재 시간"
}, xn = {
  cancel: "취소",
  ignore: "무시",
  no: "아니오",
  ok: "확인",
  retry: "재시도",
  stop: "중단",
  yes: "예"
}, bn = {
  search: "검색어:",
  regex: "(/{패턴}/으로 정규식 사용)",
  replace: "찾을 문자열:",
  with: "변경될 문자열:",
  replaceYN: "변경하시겠습니까?",
  yes: "예",
  no: "아니오",
  all: "모두",
  stop: "취소"
}, Sn = {
  placeholder: "검색어를 입력해주세요",
  "results.no-result": "검색 결과가 없습니다."
}, wn = {
  common: mn,
  datePicker: vn,
  timePicker: yn,
  confirm: xn,
  editor: bn,
  pageContainer: Sn
}, Ln = {
  sun: "日",
  mon: "一",
  tue: "二",
  wed: "三",
  thu: "四",
  fri: "五",
  sat: "六"
}, Cn = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY年MM月",
  btnToday: "今天"
}, $n = {
  btnNow: "当前时间"
}, En = {
  cancel: "取消",
  ignore: "忽略",
  no: "否",
  ok: "确认",
  retry: "重试",
  stop: "中断",
  yes: "是"
}, On = {
  yes: "是",
  no: "否"
}, Dn = {
  placeholder: "请输入关键词。",
  "results.no-result": "无查询结果。"
}, kn = {
  common: Ln,
  datePicker: Cn,
  timePicker: $n,
  confirm: En,
  editor: On,
  pageContainer: Dn
};
xe.extend(At);
const je = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], Ve = ["일", "월", "화", "수", "목", "금", "토"], Pn = "ko", Mn = "en", ie = "translation";
xe.locale("ko", {
  months: je,
  monthsShort: je,
  weekdays: Ve,
  weekdaysShort: Ve
});
A.isInitialized ? et() : Nn();
const ce = {
  get currentLang() {
    return A.language;
  },
  t: Rn,
  i18next: A,
  setLocale: Ue,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(r) {
    Ue(r);
  },
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  common: se("common"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  datePicker: se("datePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  timePicker: se("timePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  confirm: se("confirm"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  editor: se("editor"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  pageContainer: se("pageContainer")
};
function se(r) {
  return new Proxy({}, {
    get(e, t) {
      return A.t(`${r}.${t}`);
    },
    set(e, t, n) {
      return A.addResource(ce.currentLang, ie, `${r}.${t}`, n), !0;
    }
  });
}
function Ue(r) {
  xe.locale(r), A.changeLanguage(r);
}
function Rn(r) {
  return A.t(r);
}
A.on("languageChanged", (r) => {
  document.documentElement.lang = r;
});
function Nn() {
  A.init({
    lng: Pn,
    fallbackLng: Mn,
    initAsync: !1,
    defaultNS: ie
  }), et();
}
function et() {
  A.addResourceBundle("ko", ie, wn).addResourceBundle("en", ie, ln).addResourceBundle("ja", ie, pn).addResourceBundle("zh", ie, kn);
}
const q = {
  datePicker: dt,
  datePickerHeader: ht,
  datePickerHeaderTitle: ft,
  datePickerContent: gt,
  datePickerFooter: pt,
  datePickerContentCell: Ke,
  datePickerContentHeaderCell: mt,
  datePickerContentTable: vt
};
function Tn() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("button"), s = document.createElement("strong"), i = document.createElement("button"), a = document.createElement("button"), l = document.createElement("div"), o = document.createElement("div");
  t.appendChild(re("ir-icon--chevron-double-left")), n.appendChild(re("ir-icon--chevron-left")), i.appendChild(re("ir-icon--chevron-right")), a.appendChild(re("ir-icon--chevron-double-right"));
  const d = document.createElement("div"), c = document.createElement("table"), h = document.createElement("thead"), u = document.createElement("tbody"), m = document.createElement("div");
  r.classList.add(q.datePicker), e.classList.add(q.datePickerHeader), s.classList.add(q.datePickerHeaderTitle), d.classList.add(q.datePickerContent), m.classList.add(q.datePickerFooter), l.appendChild(t), l.appendChild(n), o.appendChild(i), o.appendChild(a), e.appendChild(l), e.appendChild(s), e.appendChild(o);
  const L = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], D = document.createElement("tr"), y = {};
  L.forEach((E) => {
    const M = document.createElement("th");
    M.className = `${q.datePickerContentCell} ${q.datePickerContentHeaderCell}`, M.setAttribute("scope", "col"), y[E] = M, D.appendChild(M);
  }), h.appendChild(D), c.className = q.datePickerContentTable, c.appendChild(h), c.appendChild(u), d.appendChild(c);
  const C = document.createElement("div"), f = document.createElement("button");
  return f.classList.add("button"), f.type = "button", C.appendChild(f), m.appendChild(C), r.appendChild(e), r.appendChild(d), r.appendChild(m), {
    datePicker: r,
    headerTitle: s,
    contentTableTbody: u,
    headerPrev: n,
    headerNext: i,
    todayButton: f,
    headerNextYear: a,
    headerPrevYear: t,
    updateI18n: b
  };
  function b() {
    f.innerHTML = "", f.appendChild(re("ir-icon--check", "button__icon-prefix")), f.append(ce.t("datePicker.btnToday")), L.forEach((E) => y[E].innerText = ce.t(`common.${E}`));
  }
}
const In = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Tn()), r;
  };
})(), ge = (r) => (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0), r), An = 6, Fn = 7, Yn = 32, Hn = 0, Gn = ({ uuid: r, refElement: e, onClick: t, minDate: n, maxDate: s }) => {
  let i = !1, a = () => {
  }, l = null;
  ge(n), ge(s);
  const o = In(), d = We({
    eventElements: [o.datePicker],
    clickOutsideFunc: () => c.hide()
  }), c = {
    get visible() {
      return i;
    },
    update(u, m) {
      const L = ge(/* @__PURE__ */ new Date()), D = ge(new Date(u)), y = D.getMonth();
      o.headerPrev.onclick = () => {
        u.setDate(Hn), this.update(u, m);
      }, o.headerNext.onclick = () => {
        u.setDate(Yn), this.update(u, m);
      }, o.headerPrevYear.onclick = () => {
        u.setFullYear(u.getFullYear() - 1), this.update(u, m);
      }, o.headerNextYear.onclick = () => {
        u.setFullYear(u.getFullYear() + 1), this.update(u, m);
      }, o.todayButton.onclick = () => {
        t.call(null, L), this.update(L, L);
      };
      const C = L < n || L > s;
      o.todayButton.disabled = C;
      const f = o.todayButton.parentElement;
      C && f && l == null && (l = Lt({
        refElement: f,
        label: ce.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), o.updateI18n(), o.headerTitle.innerText = xe(D).format(ce.t("datePicker.titleFormat")), D.setDate(1), D.setDate(-(D.getDay() - 1)), o.contentTableTbody.innerHTML = "";
      for (let b = 0; b < An; b++) {
        const E = document.createElement("tr");
        for (let M = 0; M < Fn; M++) {
          const R = document.createElement("td"), N = new Date(D);
          R.className = Ke, R.innerText = `${D.getDate()}`, R.onclick = () => t(N), N < n || N > s ? R.classList.add("is-disabled") : D.getMonth() !== y ? R.classList.add("is-diff-month") : D.getTime() === m?.getTime() && R.classList.add(yt), E.appendChild(R), D.setDate(D.getDate() + 1);
        }
        o.contentTableTbody.appendChild(E);
      }
    },
    show() {
      i = !0, o.datePicker.isConnected || _e("popover").appendChild(o.datePicker), o.datePicker.style.removeProperty("display"), o.datePicker.setAttribute("data-for", r), d.create(), h.create(), setTimeout(() => {
        o.datePicker.classList.add("is-visible"), a(), a = ze(e, o.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      d.destroy(), h.destroy(), l && (l.destroy(), l = null);
      const u = (m) => {
        m.currentTarget === m.target && (i = !1, o.datePicker.removeEventListener("transitionend", u), r === o.datePicker.getAttribute("data-for") && (a(), o.datePicker.remove()));
      };
      o.datePicker.addEventListener("transitionend", u), o.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, h = Be(c);
  return c;
};
class jn {
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
const Vn = 1024;
class Qn {
  #e = [];
  #n = [];
  #r = !0;
  #s;
  #a;
  #i;
  #t;
  constructor({
    context: e,
    undoStackLength: t = Vn,
    disabled: n = !1
  }) {
    this.#s = t, this.#a = n, this.#i = e;
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
      return this.#t = new jn(e), t(), this.pushCommandBlock(this.#t), this.#t;
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
    this.#r = !1;
  }
  startUIRecording() {
    this.#r = !0;
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
    return this.#r;
  }
  get isDisabled() {
    return this.#a;
  }
  get stackLength() {
    return this.#s;
  }
  set stackLength(e) {
    this.#s = e;
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
  Mt as I,
  Gn as a,
  Wn as b,
  zn as c,
  xe as d,
  Rt as e,
  Nt as f,
  Zn as g,
  Qn as h,
  ce as i,
  jn as j,
  Jn as k
};
//# sourceMappingURL=command-manager-BpzD-JV7.js.map
