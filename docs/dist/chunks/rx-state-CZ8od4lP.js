import { u as Z } from "./v4-BiqnG7FB.js";
import { d as J, c as Q, g as tt, o as et, f as rt, s as nt } from "./floating-BiWR08NB.js";
import { G as ot } from "./css-D8WWZA3p.js";
const it = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function st(r) {
  return typeof r == "string" && it.test(r);
}
function k(r) {
  if (!st(r))
    throw TypeError("Invalid UUID");
  let e;
  return Uint8Array.of((e = parseInt(r.slice(0, 8), 16)) >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, (e = parseInt(r.slice(9, 13), 16)) >>> 8, e & 255, (e = parseInt(r.slice(14, 18), 16)) >>> 8, e & 255, (e = parseInt(r.slice(19, 23), 16)) >>> 8, e & 255, (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e / 4294967296 & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255);
}
function ct(r) {
  r = unescape(encodeURIComponent(r));
  const e = new Uint8Array(r.length);
  for (let t = 0; t < r.length; ++t)
    e[t] = r.charCodeAt(t);
  return e;
}
const at = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", ut = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function lt(r, e, t, n, o, i) {
  const c = typeof t == "string" ? ct(t) : t, s = typeof n == "string" ? k(n) : n;
  if (typeof n == "string" && (n = k(n)), n?.length !== 16)
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  let a = new Uint8Array(16 + c.length);
  if (a.set(s), a.set(c, s.length), a = e(a), a[6] = a[6] & 15 | r, a[8] = a[8] & 63 | 128, o) {
    i = i || 0;
    for (let u = 0; u < 16; ++u)
      o[i + u] = a[u];
    return o;
  }
  return Z(a);
}
function ft(r, e, t, n) {
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
function I(r, e) {
  return r << e | r >>> 32 - e;
}
function pt(r) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n = new Uint8Array(r.length + 1);
  n.set(r), n[r.length] = 128, r = n;
  const o = r.length / 4 + 2, i = Math.ceil(o / 16), c = new Array(i);
  for (let s = 0; s < i; ++s) {
    const a = new Uint32Array(16);
    for (let u = 0; u < 16; ++u)
      a[u] = r[s * 64 + u * 4] << 24 | r[s * 64 + u * 4 + 1] << 16 | r[s * 64 + u * 4 + 2] << 8 | r[s * 64 + u * 4 + 3];
    c[s] = a;
  }
  c[i - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), c[i - 1][14] = Math.floor(c[i - 1][14]), c[i - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (let s = 0; s < i; ++s) {
    const a = new Uint32Array(80);
    for (let l = 0; l < 16; ++l)
      a[l] = c[s][l];
    for (let l = 16; l < 80; ++l)
      a[l] = I(a[l - 3] ^ a[l - 8] ^ a[l - 14] ^ a[l - 16], 1);
    let u = t[0], h = t[1], v = t[2], d = t[3], b = t[4];
    for (let l = 0; l < 80; ++l) {
      const f = Math.floor(l / 20), m = I(u, 5) + ft(f, h, v, d) + b + e[f] + a[l] >>> 0;
      b = d, d = v, v = I(h, 30) >>> 0, h = u, u = m;
    }
    t[0] = t[0] + u >>> 0, t[1] = t[1] + h >>> 0, t[2] = t[2] + v >>> 0, t[3] = t[3] + d >>> 0, t[4] = t[4] + b >>> 0;
  }
  return Uint8Array.of(t[0] >> 24, t[0] >> 16, t[0] >> 8, t[0], t[1] >> 24, t[1] >> 16, t[1] >> 8, t[1], t[2] >> 24, t[2] >> 16, t[2] >> 8, t[2], t[3] >> 24, t[3] >> 16, t[3] >> 8, t[3], t[4] >> 24, t[4] >> 16, t[4] >> 8, t[4]);
}
function j(r, e, t, n) {
  return lt(80, pt, r, e, t, n);
}
j.DNS = at;
j.URL = ut;
function Ht(r, e, ...t) {
  const n = ht(e, ...t);
  return r.appendChild(n), n;
}
function ht(r, ...e) {
  const t = document.createElement(r);
  return e.forEach((n) => t.classList.add(n)), t;
}
function Nt(r, e, t) {
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
function Yt(r, e) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${r}`, e && t.classList.add(e), t;
}
const Kt = (...r) => {
  const e = [];
  r.forEach(({ svg: n, name: o, masked: i = !1 }) => {
    const c = btoa(n), s = `.ir-icon--${o}`, a = `--ir-icon--${o}`;
    e.push(`
.ir-icon {
    ${a}: url("data:image/svg+xml;base64,${c}")
}`), i ? e.push(`
${s} {
    -webkit-mask-image: var(${a});
    mask-image: var(${a});
    background-image: none;
    background-color: none;
}`) : e.push(`
${s} {
    background: var(${a}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = e.join(`
`), document.head.appendChild(t);
}, qt = (r, e) => "";
function Vt(r) {
  return r.startsWith("ir-icon--") ? r : `ir-icon--${r}`;
}
const dt = "fd9772b4-9eac-4af6-8255-868c56557686", bt = 12;
class vt {
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
    return j(`${this.curFontSize}_${this.curFontFamily}_${e}`, dt).replace(/-/g, "").substring(0, bt);
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
let E = null;
function Wt(r, e) {
  return E || (E = new vt()), E.setFontStyle(r, e), E;
}
const Xt = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
}, yt = () => {
  const r = document.createElement("div");
  return r.className = ot, {
    tooltipElement: r,
    updateText(e) {
      r.textContent = e;
    }
  };
}, g = /* @__PURE__ */ (() => {
  let r = null;
  return () => (r || (r = yt()), r);
})(), mt = 8;
let x = null;
const _t = (r) => {
  if (r.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: e,
    offset: t = mt,
    placement: n = "bottom",
    refMode: o = "element"
  } = r;
  let i = r.label ?? "", c = r.refElement;
  e.__IR_TOOLTIP_INSTANCE__?.destroy(), e.addEventListener("mousemove", R), e.addEventListener("mouseleave", m);
  const s = {
    show: a,
    hide: u,
    update: h,
    updateText: v,
    destroy: b,
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
  return e.__IR_TOOLTIP_INSTANCE__ = s, s;
  function a() {
    return f(), s;
  }
  function u() {
    return m(), s;
  }
  function h() {
    return l(), s;
  }
  function v(p) {
    i = p, d() && g().updateText(p);
  }
  function d() {
    return x === s;
  }
  function b() {
    m(), e.removeEventListener("mousemove", R), e.removeEventListener("mouseleave", m);
  }
  function l() {
    const { tooltipElement: p } = g();
    Q(c, p, {
      // Tooltip 배치 위치
      placement: n,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        et(t),
        // 상하 스크롤 화면 overflow 방지
        rt(),
        // 좌우 스크롤 화면 overflow 방지
        nt({ padding: 5 })
      ]
    }).then(({ x: X, y: G }) => {
      p.style.left = `${X}px`, p.style.top = `${G}px`;
    });
  }
  function f() {
    if (i === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: p } = g();
    l(), v(i), tt("popover").appendChild(p);
  }
  function m() {
    g().tooltipElement.remove(), x = null;
  }
  function R(p) {
    p.__EXECUTED_TOOLTIP__ || p.target instanceof HTMLElement && (o === "element" && x === s || (x = s, p.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (c = J(p.clientX, p.clientY)), f()));
  }
}, Gt = (r) => {
  const {
    selector: e,
    offset: t = 8
  } = r, n = Array.from(document.querySelectorAll(e)).filter((o) => o.dataset.title).map((o) => {
    const { title: i, placement: c = "bottom", ref: s = "element" } = o.dataset;
    return _t({
      refElement: o,
      label: i,
      offset: t,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: c,
      refMode: s
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
      const c = n.find((s) => o === s.refElement);
      if (!c) {
        console.warn("Tooltip element not found");
        return;
      }
      i ? (o.dataset.title = i, c.updateText(i)) : c.updateText(o.dataset.title ?? "");
    }
  };
};
function* Zt(r, e) {
  for (let t = 0; t < r; ++t)
    for (let n = 0; n < e; ++n)
      yield { y: t, x: n };
}
function Jt(r, e) {
  for (let t = 0; t < r; ++t)
    e(t);
}
function Qt(r, e, t) {
  for (let n = 0; n < r; ++n)
    e(n) && t(n);
}
function te(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
function ee(r, e = 0, t = 10) {
  const n = Number.parseInt(r ?? "", t);
  return Number.isNaN(n) ? e : n;
}
function re(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onload = () => e(n.result), n.onerror = () => t(n.error), n.readAsText(r);
  });
}
const Et = /* @__PURE__ */ (() => {
  let r = null;
  return () => r || (r = document.createElement("textarea"), r.style.position = "fixed", r.style.opacity = "0", r.style.top = "0", r.style.left = "0", r.style.zIndex = "-1", r.style.outline = "0 none", r.style.overflow = "hidden", r.setAttribute("tabindex", "-1"), r.setAttribute("autocomplete", "off"), r.setAttribute("wrap", "hard"), r);
})(), ne = {
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
    const e = Et();
    document.body.appendChild(e), e.focus(), e.value = r || "\0", e.select(), document.execCommand("copy"), e.remove();
  }
};
var A = function(r, e) {
  return A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, A(r, e);
};
function _(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  A(r, e);
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
  var n = t.call(r), o, i = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (s) {
    c = { error: s };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (c) throw c.error;
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
function Y(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var O = Y(function(r) {
  return function(t) {
    r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function L(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var T = function() {
  function r(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return r.prototype.unsubscribe = function() {
    var e, t, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var c = this._parentage;
      if (c)
        if (this._parentage = null, Array.isArray(c))
          try {
            for (var s = U(c), a = s.next(); !a.done; a = s.next()) {
              var u = a.value;
              u.remove(this);
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              a && !a.done && (t = s.return) && t.call(s);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          c.remove(this);
      var h = this.initialTeardown;
      if (y(h))
        try {
          h();
        } catch (f) {
          i = f instanceof O ? f.errors : [f];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var d = U(v), b = d.next(); !b.done; b = d.next()) {
            var l = b.value;
            try {
              B(l);
            } catch (f) {
              i = i ?? [], f instanceof O ? i = F(F([], P(i)), P(f.errors)) : i.push(f);
            }
          }
        } catch (f) {
          n = { error: f };
        } finally {
          try {
            b && !b.done && (o = d.return) && o.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (i)
        throw new O(i);
    }
  }, r.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        B(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && L(t, e);
  }, r.prototype.remove = function(e) {
    var t = this._finalizers;
    t && L(t, e), e instanceof r && e._removeParent(this);
  }, r.EMPTY = function() {
    var e = new r();
    return e.closed = !0, e;
  }(), r;
}(), K = T.EMPTY;
function q(r) {
  return r instanceof T || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe);
}
function B(r) {
  y(r) ? r() : r.unsubscribe();
}
var V = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, gt = {
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
function xt(r) {
  gt.setTimeout(function() {
    throw r;
  });
}
function D() {
}
function w(r) {
  r();
}
var $ = function(r) {
  _(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, q(t) && t.add(n)) : n.destination = It, n;
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
}(T), St = Function.prototype.bind;
function C(r, e) {
  return St.call(r, e);
}
var wt = function() {
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
    var i = r.call(this) || this, c;
    if (y(t) || !t)
      c = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var s;
      i && V.useDeprecatedNextContext ? (s = Object.create(t), s.unsubscribe = function() {
        return i.unsubscribe();
      }, c = {
        next: t.next && C(t.next, s),
        error: t.error && C(t.error, s),
        complete: t.complete && C(t.complete, s)
      }) : c = t;
    }
    return i.destination = new wt(c), i;
  }
  return e;
}($);
function S(r) {
  xt(r);
}
function Tt(r) {
  throw r;
}
var It = {
  closed: !0,
  next: D,
  error: Tt,
  complete: D
}, Ot = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ct(r) {
  return r;
}
function At(r) {
  return r.length === 0 ? Ct : r.length === 1 ? r[0] : function(t) {
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
    var o = this, i = Pt(e) ? e : new M(e, t, n);
    return w(function() {
      var c = o, s = c.operator, a = c.source;
      i.add(s ? s.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = H(t), new t(function(o, i) {
      var c = new M({
        next: function(s) {
          try {
            e(s);
          } catch (a) {
            i(a), c.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(c);
    });
  }, r.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, r.prototype[Ot] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return At(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = H(e), new e(function(n, o) {
      var i;
      t.subscribe(function(c) {
        return i = c;
      }, function(c) {
        return o(c);
      }, function() {
        return n(i);
      });
    });
  }, r.create = function(e) {
    return new r(e);
  }, r;
}();
function H(r) {
  var e;
  return (e = r ?? V.Promise) !== null && e !== void 0 ? e : Promise;
}
function Ut(r) {
  return r && y(r.next) && y(r.error) && y(r.complete);
}
function Pt(r) {
  return r && r instanceof $ || Ut(r) && q(r);
}
function Ft(r) {
  return y(r?.lift);
}
function Lt(r) {
  return function(e) {
    if (Ft(e))
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
function Mt(r, e, t, n, o) {
  return new jt(r, e, t, n, o);
}
var jt = function(r) {
  _(e, r);
  function e(t, n, o, i, c, s) {
    var a = r.call(this, t) || this;
    return a.onFinalize = c, a.shouldUnsubscribe = s, a._next = n ? function(u) {
      try {
        n(u);
      } catch (h) {
        t.error(h);
      }
    } : r.prototype._next, a._error = i ? function(u) {
      try {
        i(u);
      } catch (h) {
        t.error(h);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, a._complete = o ? function() {
      try {
        o();
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete, a;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}($), $t = Y(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), W = function(r) {
  _(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new N(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new $t();
  }, e.prototype.next = function(t) {
    var n = this;
    w(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var c = U(n.currentObservers), s = c.next(); !s.done; s = c.next()) {
            var a = s.value;
            a.next(t);
          }
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            s && !s.done && (i = c.return) && i.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    w(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    w(function() {
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
    var n = this, o = this, i = o.hasError, c = o.isStopped, s = o.observers;
    return i || c ? K : (this.currentObservers = null, s.push(t), new T(function() {
      n.currentObservers = null, L(s, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, c = n.isStopped;
    o ? t.error(i) : c && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new z();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new N(t, n);
  }, e;
}(z), N = function(r) {
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
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : K;
  }, e;
}(W), Rt = function(r) {
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
}(W);
function kt() {
  return Lt(function(r, e) {
    var t, n = !1;
    r.subscribe(Mt(e, function(o) {
      var i = t;
      t = o, n && e.next([i, o]), n = !0;
    }));
  });
}
class oe {
  _state;
  _pipe;
  _value;
  _subscriptionList = [];
  constructor(e, t) {
    this._state = new Rt(e), this._pipe = t ? t(this._state) : this._state, this._value = e, this._pipe.pipe(kt()).subscribe(([n, o]) => {
      this._value = o, this._subscriptionList.forEach((i) => {
        try {
          i(n, o);
        } catch (c) {
          console.error("ReactiveState Subscription Error", this.constructor.name, c);
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
  ne as C,
  oe as R,
  Yt as a,
  _t as b,
  Xt as c,
  Ht as d,
  Nt as e,
  ht as f,
  Wt as g,
  Jt as h,
  Kt as i,
  qt as j,
  Vt as k,
  g as l,
  Gt as m,
  re as n,
  te as o,
  ee as p,
  Zt as q,
  Qt as r,
  Lt as s,
  Mt as t
};
//# sourceMappingURL=rx-state-CZ8od4lP.js.map
