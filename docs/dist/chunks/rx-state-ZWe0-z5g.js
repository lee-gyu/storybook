import { x as Q, d as tt, c as et, g as rt, o as nt, f as ot, s as it } from "./floating-DlacX8th.js";
import { a0 as st } from "./css-F1iGWdNw.js";
const at = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function ct(r) {
  return typeof r == "string" && at.test(r);
}
function D(r) {
  if (!ct(r))
    throw TypeError("Invalid UUID");
  let e;
  return Uint8Array.of((e = parseInt(r.slice(0, 8), 16)) >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, (e = parseInt(r.slice(9, 13), 16)) >>> 8, e & 255, (e = parseInt(r.slice(14, 18), 16)) >>> 8, e & 255, (e = parseInt(r.slice(19, 23), 16)) >>> 8, e & 255, (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e / 4294967296 & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255);
}
function ut(r) {
  r = unescape(encodeURIComponent(r));
  const e = new Uint8Array(r.length);
  for (let t = 0; t < r.length; ++t)
    e[t] = r.charCodeAt(t);
  return e;
}
const lt = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", ft = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function pt(r, e, t, n, o, i) {
  const s = typeof t == "string" ? ut(t) : t, a = typeof n == "string" ? D(n) : n;
  if (typeof n == "string" && (n = D(n)), n?.length !== 16)
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  let c = new Uint8Array(16 + s.length);
  if (c.set(a), c.set(s, a.length), c = e(c), c[6] = c[6] & 15 | r, c[8] = c[8] & 63 | 128, o) {
    i = i || 0;
    for (let u = 0; u < 16; ++u)
      o[i + u] = c[u];
    return o;
  }
  return Q(c);
}
function ht(r, e, t, n) {
  switch (r) {
    case 0:
      return e & t ^ ~e & n;
    case 1:
      return e ^ t ^ n;
    case 2:
      return e & t ^ e & n ^ t & n;
    case 3:
      return e ^ t ^ n;
  }
}
function O(r, e) {
  return r << e | r >>> 32 - e;
}
function dt(r) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n = new Uint8Array(r.length + 1);
  n.set(r), n[r.length] = 128, r = n;
  const o = r.length / 4 + 2, i = Math.ceil(o / 16), s = new Array(i);
  for (let a = 0; a < i; ++a) {
    const c = new Uint32Array(16);
    for (let u = 0; u < 16; ++u)
      c[u] = r[a * 64 + u * 4] << 24 | r[a * 64 + u * 4 + 1] << 16 | r[a * 64 + u * 4 + 2] << 8 | r[a * 64 + u * 4 + 3];
    s[a] = c;
  }
  s[i - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), s[i - 1][14] = Math.floor(s[i - 1][14]), s[i - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (let a = 0; a < i; ++a) {
    const c = new Uint32Array(80);
    for (let l = 0; l < 16; ++l)
      c[l] = s[a][l];
    for (let l = 16; l < 80; ++l)
      c[l] = O(c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16], 1);
    let u = t[0], h = t[1], b = t[2], d = t[3], v = t[4];
    for (let l = 0; l < 80; ++l) {
      const f = Math.floor(l / 20), E = O(u, 5) + ht(f, h, b, d) + v + e[f] + c[l] >>> 0;
      v = d, d = b, b = O(h, 30) >>> 0, h = u, u = E;
    }
    t[0] = t[0] + u >>> 0, t[1] = t[1] + h >>> 0, t[2] = t[2] + b >>> 0, t[3] = t[3] + d >>> 0, t[4] = t[4] + v >>> 0;
  }
  return Uint8Array.of(t[0] >> 24, t[0] >> 16, t[0] >> 8, t[0], t[1] >> 24, t[1] >> 16, t[1] >> 8, t[1], t[2] >> 24, t[2] >> 16, t[2] >> 8, t[2], t[3] >> 24, t[3] >> 16, t[3] >> 8, t[3], t[4] >> 24, t[4] >> 16, t[4] >> 8, t[4]);
}
function k(r, e, t, n) {
  return pt(80, dt, r, e, t, n);
}
k.DNS = lt;
k.URL = ft;
const m = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
}, vt = m.ERROR, bt = m.WARNING, yt = m.DEBUG, mt = m.INFO, Et = Object.keys(m);
class Kt {
  id;
  // error = 0, warning = 1, debug = 2, info = 3
  _logLevel;
  constructor(e, t = "ERROR") {
    this.id = e, this._logLevel = m[t];
  }
  get logLevel() {
    return Et[this._logLevel];
  }
  set logLevel(e) {
    this._logLevel = m[e];
  }
  error(...e) {
    this._logLevel >= vt && console.error(this.id, ...e);
  }
  warn(...e) {
    this._logLevel >= bt && console.warn(this.id, ...e);
  }
  debug(...e) {
    this._logLevel >= yt && console.debug(this.id, ...e);
  }
  info(...e) {
    this._logLevel >= mt && console.info(this.id, ...e);
  }
}
function qt(r, e, ...t) {
  const n = _t(e, ...t);
  return r.appendChild(n), n;
}
function _t(r, ...e) {
  const t = document.createElement(r);
  return e.forEach((n) => t.classList.add(n)), t;
}
function Xt(r, e, t) {
  let n = t;
  for (; n; ) {
    if (n.matches(r))
      return n;
    if (n.matches(e))
      break;
    n = n.parentElement;
  }
  return null;
}
function Zt(r, e) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${r}`, e && t.classList.add(e), t;
}
const Jt = (...r) => {
  const e = [];
  r.forEach(({ svg: n, name: o, masked: i = !1 }) => {
    const s = btoa(n), a = `.ir-icon--${o}`, c = `--ir-icon--${o}`;
    e.push(`
.ir-icon {
    ${c}: url("data:image/svg+xml;base64,${s}")
}`), i ? e.push(`
${a} {
    -webkit-mask-image: var(${c});
    mask-image: var(${c});
    background-image: none;
    background-color: none;
}`) : e.push(`
${a} {
    background: var(${c}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = e.join(`
`), document.head.appendChild(t);
}, Qt = (r, e) => "";
function te(r) {
  return r.startsWith("ir-icon--") ? r : `ir-icon--${r}`;
}
const gt = "fd9772b4-9eac-4af6-8255-868c56557686", wt = 12;
class xt {
  isInit = !1;
  context = null;
  cacheMap = /* @__PURE__ */ new Map();
  curFontSize = "";
  curFontFamily = "";
  _offscreenCanvas = null;
  init() {
    this.isInit || (this.isInit = !0, this._offscreenCanvas = new OffscreenCanvas(0, 0), this.context = this._offscreenCanvas.getContext("2d"));
  }
  getContext() {
    if (this.init(), !this.context)
      throw new Error("Can't create canvas context");
    return this.context;
  }
  setFontStyle(e, t) {
    (this.curFontSize !== e || this.curFontFamily !== t) && (this.getContext().font = `${e} ${t}`, this.curFontSize = e, this.curFontFamily = t);
  }
  getCacheKey(e) {
    return k(`${this.curFontSize}_${this.curFontFamily}_${e}`, gt).replace(/-/g, "").substring(0, wt);
  }
  _calculate(e) {
    return Math.ceil(this.getContext().measureText(e).width);
  }
  calculateWidth(e) {
    const t = this.getCacheKey(e);
    let n = this.cacheMap.get(t);
    return n === void 0 && (n = this._calculate(e), this.cacheMap.set(t, n)), n;
  }
}
let g = null;
function ee(r, e) {
  return g || (g = new xt()), g.setFontStyle(r, e), g;
}
const re = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
};
function ne(r) {
  r.dispatchEvent(new CustomEvent(A, { bubbles: !0 }));
}
const A = "ir::click-outside-custom";
function oe({ eventElements: r, initFunc: e, clickOutsideFunc: t }) {
  const n = (i) => {
    let s = i.target;
    for (; s !== null; ) {
      if (r.indexOf(s) !== -1)
        return;
      s = s.parentElement;
    }
    t && t(), o.destroy();
  }, o = {
    create: () => {
      e && e(), window.addEventListener("scroll", n, !0), window.addEventListener("mousedown", n), window.addEventListener(A, n);
    },
    destroy: () => {
      window.removeEventListener("scroll", n, !0), window.removeEventListener("mousedown", n), window.removeEventListener(A, n);
    }
  };
  return o;
}
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function se(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
const St = () => {
  const r = document.createElement("div");
  return r.className = st, {
    tooltipElement: r,
    updateText(e) {
      r.textContent = e;
    }
  };
}, w = /* @__PURE__ */ (() => {
  let r = null;
  return () => (r || (r = St()), r);
})(), Tt = 8;
let x = null;
const Lt = (r) => {
  if (r.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: e,
    offset: t = Tt,
    placement: n = "bottom",
    refMode: o = "element"
  } = r;
  let i = r.label ?? "", s = r.refElement;
  e.__IR_TOOLTIP_INSTANCE__?.destroy(), e.addEventListener("mousemove", B), e.addEventListener("mouseleave", E);
  const a = {
    show: c,
    hide: u,
    update: h,
    updateText: b,
    destroy: v,
    get text() {
      return i;
    },
    get refMode() {
      return o;
    },
    get placement() {
      return n;
    },
    get offset() {
      return t;
    },
    get refElement() {
      return e;
    }
  };
  return e.__IR_TOOLTIP_INSTANCE__ = a, a;
  function c() {
    return f(), a;
  }
  function u() {
    return E(), a;
  }
  function h() {
    return l(), a;
  }
  function b(p) {
    i = p, d() && w().updateText(p);
  }
  function d() {
    return x === a;
  }
  function v() {
    E(), e.removeEventListener("mousemove", B), e.removeEventListener("mouseleave", E);
  }
  function l() {
    const { tooltipElement: p } = w();
    et(s, p, {
      // Tooltip 배치 위치
      placement: n,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        nt(t),
        // 상하 스크롤 화면 overflow 방지
        ot(),
        // 좌우 스크롤 화면 overflow 방지
        it({ padding: 5 })
      ]
    }).then(({ x: Z, y: J }) => {
      p.style.left = `${Z}px`, p.style.top = `${J}px`;
    });
  }
  function f() {
    if (i === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: p } = w();
    l(), b(i), rt("popover").appendChild(p);
  }
  function E() {
    w().tooltipElement.remove(), x = null;
  }
  function B(p) {
    p.__EXECUTED_TOOLTIP__ || p.target instanceof HTMLElement && (o === "element" && x === a || (x = a, p.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (s = tt(p.clientX, p.clientY)), f()));
  }
}, ae = (r) => {
  const {
    selector: e,
    offset: t = 8
  } = r, n = Array.from(document.querySelectorAll(e)).filter((o) => o.dataset.title).map((o) => {
    const { title: i, placement: s = "bottom", ref: a = "element" } = o.dataset;
    return Lt({
      refElement: o,
      label: i,
      offset: t,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: s,
      refMode: a
    });
  });
  return {
    destroy: () => {
      n.forEach((o) => o.destroy());
    },
    updateTextAll() {
      n.forEach((o) => {
        const i = o.refElement.dataset.title ?? "";
        o.text !== i && o.updateText(i);
      });
    },
    updateTextOne(o, i) {
      const s = n.find((a) => o === a.refElement);
      if (!s) {
        console.warn("Tooltip element not found");
        return;
      }
      i ? (o.dataset.title = i, s.updateText(i)) : s.updateText(o.dataset.title ?? "");
    }
  };
};
function* ce(r, e) {
  for (let t = 0; t < r; ++t)
    for (let n = 0; n < e; ++n)
      yield { y: t, x: n };
}
function ue(r, e) {
  for (let t = 0; t < r; ++t)
    e(t);
}
function le(r, e, t) {
  for (let n = 0; n < r; ++n)
    e(n) && t(n);
}
function fe(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
function pe(r, e = 0, t = 10) {
  const n = Number.parseInt(r ?? "", t);
  return Number.isNaN(n) ? e : n;
}
function he(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onload = () => e(n.result), n.onerror = () => t(n.error), n.readAsText(r);
  });
}
const Ot = /* @__PURE__ */ (() => {
  let r = null;
  return () => r || (r = document.createElement("textarea"), r.style.position = "fixed", r.style.opacity = "0", r.style.top = "0", r.style.left = "0", r.style.zIndex = "-1", r.style.outline = "0 none", r.style.overflow = "hidden", r.setAttribute("tabindex", "-1"), r.setAttribute("autocomplete", "off"), r.setAttribute("wrap", "hard"), r);
})(), de = {
  async check(r) {
    return (await navigator.permissions.query({ name: r })).state;
  },
  getText() {
    return navigator.clipboard.readText();
  },
  read() {
    return navigator.clipboard.read();
  },
  setText(r) {
    const e = Ot();
    document.body.appendChild(e), e.focus(), e.value = r || "\0", e.select(), document.execCommand("copy"), e.remove();
  }
};
var R = function(r, e) {
  return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, R(r, e);
};
function _(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  R(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function U(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function P(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function F(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return r.concat(i || Array.prototype.slice.call(e));
}
function y(r) {
  return typeof r == "function";
}
function W(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var I = W(function(r) {
  return function(t) {
    r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function j(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var L = function() {
  function r(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return r.prototype.unsubscribe = function() {
    var e, t, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var a = U(s), c = a.next(); !c.done; c = a.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              c && !c.done && (t = a.return) && t.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var h = this.initialTeardown;
      if (y(h))
        try {
          h();
        } catch (f) {
          i = f instanceof I ? f.errors : [f];
        }
      var b = this._finalizers;
      if (b) {
        this._finalizers = null;
        try {
          for (var d = U(b), v = d.next(); !v.done; v = d.next()) {
            var l = v.value;
            try {
              N(l);
            } catch (f) {
              i = i ?? [], f instanceof I ? i = F(F([], P(i)), P(f.errors)) : i.push(f);
            }
          }
        } catch (f) {
          n = { error: f };
        } finally {
          try {
            v && !v.done && (o = d.return) && o.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (i)
        throw new I(i);
    }
  }, r.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        N(e);
      else {
        if (e instanceof r) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, r.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, r.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, r.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && j(t, e);
  }, r.prototype.remove = function(e) {
    var t = this._finalizers;
    t && j(t, e), e instanceof r && e._removeParent(this);
  }, r.EMPTY = function() {
    var e = new r();
    return e.closed = !0, e;
  }(), r;
}(), Y = L.EMPTY;
function K(r) {
  return r instanceof L || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe);
}
function N(r) {
  y(r) ? r() : r.unsubscribe();
}
var q = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, It = {
  setTimeout: function(r, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, F([r, e], P(t)));
  },
  clearTimeout: function(r) {
    return clearTimeout(r);
  },
  delegate: void 0
};
function Ct(r) {
  It.setTimeout(function() {
    throw r;
  });
}
function H() {
}
function T(r) {
  r();
}
var $ = function(r) {
  _(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, K(t) && t.add(n)) : n.destination = Pt, n;
  }
  return e.create = function(t, n, o) {
    return new M(t, n, o);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(L), At = Function.prototype.bind;
function C(r, e) {
  return At.call(r, e);
}
var Rt = function() {
  function r(e) {
    this.partialObserver = e;
  }
  return r.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (n) {
        S(n);
      }
  }, r.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (n) {
        S(n);
      }
    else
      S(e);
  }, r.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        S(t);
      }
  }, r;
}(), M = function(r) {
  _(e, r);
  function e(t, n, o) {
    var i = r.call(this) || this, s;
    if (y(t) || !t)
      s = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var a;
      i && q.useDeprecatedNextContext ? (a = Object.create(t), a.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: t.next && C(t.next, a),
        error: t.error && C(t.error, a),
        complete: t.complete && C(t.complete, a)
      }) : s = t;
    }
    return i.destination = new Rt(s), i;
  }
  return e;
}($);
function S(r) {
  Ct(r);
}
function Ut(r) {
  throw r;
}
var Pt = {
  closed: !0,
  next: H,
  error: Ut,
  complete: H
}, Ft = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function jt(r) {
  return r;
}
function Mt(r) {
  return r.length === 0 ? jt : r.length === 1 ? r[0] : function(t) {
    return r.reduce(function(n, o) {
      return o(n);
    }, t);
  };
}
var z = function() {
  function r(e) {
    e && (this._subscribe = e);
  }
  return r.prototype.lift = function(e) {
    var t = new r();
    return t.source = this, t.operator = e, t;
  }, r.prototype.subscribe = function(e, t, n) {
    var o = this, i = $t(e) ? e : new M(e, t, n);
    return T(function() {
      var s = o, a = s.operator, c = s.source;
      i.add(a ? a.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = G(t), new t(function(o, i) {
      var s = new M({
        next: function(a) {
          try {
            e(a);
          } catch (c) {
            i(c), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, r.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, r.prototype[Ft] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Mt(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = G(e), new e(function(n, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, r.create = function(e) {
    return new r(e);
  }, r;
}();
function G(r) {
  var e;
  return (e = r ?? q.Promise) !== null && e !== void 0 ? e : Promise;
}
function kt(r) {
  return r && y(r.next) && y(r.error) && y(r.complete);
}
function $t(r) {
  return r && r instanceof $ || kt(r) && K(r);
}
function Bt(r) {
  return y(r?.lift);
}
function Dt(r) {
  return function(e) {
    if (Bt(e))
      return e.lift(function(t) {
        try {
          return r(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Nt(r, e, t, n, o) {
  return new Ht(r, e, t, n, o);
}
var Ht = function(r) {
  _(e, r);
  function e(t, n, o, i, s, a) {
    var c = r.call(this, t) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = a, c._next = n ? function(u) {
      try {
        n(u);
      } catch (h) {
        t.error(h);
      }
    } : r.prototype._next, c._error = i ? function(u) {
      try {
        i(u);
      } catch (h) {
        t.error(h);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, c._complete = o ? function() {
      try {
        o();
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}($), zt = W(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), X = function(r) {
  _(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new V(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new zt();
  }, e.prototype.next = function(t) {
    var n = this;
    T(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = U(n.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var c = a.value;
            c.next(t);
          }
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            a && !a.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    T(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    T(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), r.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, a = o.observers;
    return i || s ? Y : (this.currentObservers = null, a.push(t), new L(function() {
      n.currentObservers = null, j(a, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? t.error(i) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new z();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new V(t, n);
  }, e;
}(z), V = function(r) {
  _(e, r);
  function e(t, n) {
    var o = r.call(this) || this;
    return o.destination = t, o.source = n, o;
  }
  return e.prototype.next = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t);
  }, e.prototype.error = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t);
  }, e.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, e.prototype._subscribe = function(t) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : Y;
  }, e;
}(X), Gt = function(r) {
  _(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n._value = t, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var n = r.prototype._subscribe.call(this, t);
    return !n.closed && t.next(this._value), n;
  }, e.prototype.getValue = function() {
    var t = this, n = t.hasError, o = t.thrownError, i = t._value;
    if (n)
      throw o;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(t) {
    r.prototype.next.call(this, this._value = t);
  }, e;
}(X);
function Vt() {
  return Dt(function(r, e) {
    var t, n = !1;
    r.subscribe(Nt(e, function(o) {
      var i = t;
      t = o, n && e.next([i, o]), n = !0;
    }));
  });
}
class ve {
  _state;
  _pipe;
  _value;
  _subscriptionList = [];
  constructor(e, t) {
    this._state = new Gt(e), this._pipe = t ? t(this._state) : this._state, this._value = e, this._pipe.pipe(Vt()).subscribe(([n, o]) => {
      this._value = o, this._subscriptionList.forEach((i) => {
        try {
          i(n, o);
        } catch (s) {
          console.error("ReactiveState Subscription Error", this.constructor.name, s);
        }
      });
    });
  }
  addSubscription(e) {
    this._subscriptionList.push(e);
  }
  removeSubscription(e) {
    const t = this._subscriptionList.indexOf(e);
    t >= 0 ? this._subscriptionList.splice(t, 1) : console.warn("ReactiveState.removeSubscription: subscriber not found");
  }
  next(e) {
    this._state.next(e);
  }
  get value() {
    return this._value;
  }
}
export {
  de as C,
  Kt as L,
  ve as R,
  oe as a,
  ie as b,
  re as c,
  Zt as d,
  Lt as e,
  qt as f,
  se as g,
  Xt as h,
  _t as i,
  ee as j,
  ue as k,
  Jt as l,
  Qt as m,
  te as n,
  w as o,
  ae as p,
  he as q,
  ne as r,
  fe as s,
  pe as t,
  ce as u,
  le as v,
  Dt as w,
  Nt as x
};
//# sourceMappingURL=rx-state-ZWe0-z5g.js.map
