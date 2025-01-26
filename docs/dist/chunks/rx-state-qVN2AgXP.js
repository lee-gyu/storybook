import { d as X, c as N, g as Z, o as G, f as J, s as Q } from "./floating-CqSaT-kJ.js";
import { N as tt } from "./css-rF0v2sLP.js";
function Ct(r, e, ...t) {
  const n = et(e, ...t);
  return r.appendChild(n), n;
}
function et(r, ...e) {
  const t = document.createElement(r);
  return e.forEach((n) => t.classList.add(n)), t;
}
function It(r, e, t) {
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
function Pt(r, e) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${r}`, e && t.classList.add(e), t;
}
const At = (...r) => {
  const e = [];
  r.forEach(({ svg: n, name: o, masked: i = !1 }) => {
    const s = btoa(n), u = `.ir-icon--${o}`, a = `--ir-icon--${o}`;
    e.push(`
.ir-icon {
    ${a}: url("data:image/svg+xml;base64,${s}")
}`), i ? e.push(`
${u} {
    -webkit-mask-image: var(${a});
    mask-image: var(${a});
    background-image: none;
    background-color: none;
}`) : e.push(`
${u} {
    background: var(${a}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = e.join(`
`), document.head.appendChild(t);
}, Ft = (r, e) => "";
function Lt(r) {
  return r.startsWith("ir-icon--") ? r : `ir-icon--${r}`;
}
class rt {
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
    return `${this.curFontSize}_${this.curFontFamily}_${e}`;
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
function jt(r, e) {
  return E || (E = new rt()), E.setFontStyle(r, e), E;
}
function $t(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
function Mt(r, e = 0, t = 10) {
  const n = Number.parseInt(r ?? "", t);
  return Number.isNaN(n) ? e : n;
}
const nt = () => {
  const r = document.createElement("div");
  return r.className = tt, {
    tooltipElement: r,
    updateText(e) {
      r.textContent = e;
    }
  };
}, g = /* @__PURE__ */ (() => {
  let r = null;
  return () => (r || (r = nt()), r);
})(), ot = 8;
let S = null;
const it = (r) => {
  if (r.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: e,
    offset: t = ot,
    placement: n = "bottom",
    refMode: o = "element"
  } = r;
  let i = r.label ?? "", s = r.refElement;
  e.__IR_TOOLTIP_INSTANCE__?.destroy(), e.addEventListener("mousemove", M), e.addEventListener("mouseleave", _);
  const u = {
    show: a,
    hide: f,
    update: h,
    updateText: y,
    destroy: d,
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
  return e.__IR_TOOLTIP_INSTANCE__ = u, u;
  function a() {
    return c(), u;
  }
  function f() {
    return _(), u;
  }
  function h() {
    return m(), u;
  }
  function y(l) {
    i = l, b() && g().updateText(l);
  }
  function b() {
    return S === u;
  }
  function d() {
    _(), e.removeEventListener("mousemove", M), e.removeEventListener("mouseleave", _);
  }
  function m() {
    const { tooltipElement: l } = g();
    N(s, l, {
      // Tooltip 배치 위치
      placement: n,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        G(t),
        // 상하 스크롤 화면 overflow 방지
        J(),
        // 좌우 스크롤 화면 overflow 방지
        Q({ padding: 5 })
      ]
    }).then(({ x: K, y: W }) => {
      l.style.left = `${K}px`, l.style.top = `${W}px`;
    });
  }
  function c() {
    if (i === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: l } = g();
    m(), y(i), Z("popover").appendChild(l);
  }
  function _() {
    g().tooltipElement.remove(), S = null;
  }
  function M(l) {
    l.__EXECUTED_TOOLTIP__ || l.target instanceof HTMLElement && (o === "element" && S === u || (S = u, l.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (s = X(l.clientX, l.clientY)), c()));
  }
}, Ut = (r) => {
  const {
    selector: e,
    offset: t = 8
  } = r, n = Array.from(document.querySelectorAll(e)).filter((o) => o.dataset.title).map((o) => {
    const { title: i, placement: s = "bottom", ref: u = "element" } = o.dataset;
    return it({
      refElement: o,
      label: i,
      offset: t,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: s,
      refMode: u
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
      const s = n.find((u) => o === u.refElement);
      if (!s) {
        console.warn("Tooltip element not found");
        return;
      }
      i ? (o.dataset.title = i, s.updateText(i)) : s.updateText(o.dataset.title ?? "");
    }
  };
}, kt = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
};
function Rt(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onload = () => e(n.result), n.onerror = () => t(n.error), n.readAsText(r);
  });
}
const st = /* @__PURE__ */ (() => {
  let r = null;
  return () => r || (r = document.createElement("textarea"), r.style.position = "fixed", r.style.opacity = "0", r.style.top = "0", r.style.left = "0", r.style.zIndex = "-1", r.style.outline = "0 none", r.style.overflow = "hidden", r.setAttribute("tabindex", "-1"), r.setAttribute("autocomplete", "off"), r.setAttribute("wrap", "hard"), r);
})(), zt = {
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
    const e = st();
    document.body.appendChild(e), e.focus(), e.value = r || "\0", e.select(), document.execCommand("copy"), e.remove();
  }
};
var I = function(r, e) {
  return I = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, I(r, e);
};
function v(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  I(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function P(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function A(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (u) {
    s = { error: u };
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
function p(r) {
  return typeof r == "function";
}
function B(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var O = B(function(r) {
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
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var u = P(s), a = u.next(); !a.done; a = u.next()) {
              var f = a.value;
              f.remove(this);
            }
          } catch (c) {
            e = { error: c };
          } finally {
            try {
              a && !a.done && (t = u.return) && t.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var h = this.initialTeardown;
      if (p(h))
        try {
          h();
        } catch (c) {
          i = c instanceof O ? c.errors : [c];
        }
      var y = this._finalizers;
      if (y) {
        this._finalizers = null;
        try {
          for (var b = P(y), d = b.next(); !d.done; d = b.next()) {
            var m = d.value;
            try {
              U(m);
            } catch (c) {
              i = i ?? [], c instanceof O ? i = F(F([], A(i)), A(c.errors)) : i.push(c);
            }
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            d && !d.done && (o = b.return) && o.call(b);
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
        U(e);
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
}(), H = T.EMPTY;
function Y(r) {
  return r instanceof T || r && "closed" in r && p(r.remove) && p(r.add) && p(r.unsubscribe);
}
function U(r) {
  p(r) ? r() : r.unsubscribe();
}
var q = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ut = {
  setTimeout: function(r, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, F([r, e], A(t)));
  },
  clearTimeout: function(r) {
    return clearTimeout(r);
  },
  delegate: void 0
};
function at(r) {
  ut.setTimeout(function() {
    throw r;
  });
}
function k() {
}
function x(r) {
  r();
}
var $ = function(r) {
  v(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, Y(t) && t.add(n)) : n.destination = pt, n;
  }
  return e.create = function(t, n, o) {
    return new j(t, n, o);
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
}(T), ct = Function.prototype.bind;
function C(r, e) {
  return ct.call(r, e);
}
var lt = function() {
  function r(e) {
    this.partialObserver = e;
  }
  return r.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (n) {
        w(n);
      }
  }, r.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (n) {
        w(n);
      }
    else
      w(e);
  }, r.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        w(t);
      }
  }, r;
}(), j = function(r) {
  v(e, r);
  function e(t, n, o) {
    var i = r.call(this) || this, s;
    if (p(t) || !t)
      s = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var u;
      i && q.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: t.next && C(t.next, u),
        error: t.error && C(t.error, u),
        complete: t.complete && C(t.complete, u)
      }) : s = t;
    }
    return i.destination = new lt(s), i;
  }
  return e;
}($);
function w(r) {
  at(r);
}
function ft(r) {
  throw r;
}
var pt = {
  closed: !0,
  next: k,
  error: ft,
  complete: k
}, ht = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function dt(r) {
  return r;
}
function bt(r) {
  return r.length === 0 ? dt : r.length === 1 ? r[0] : function(t) {
    return r.reduce(function(n, o) {
      return o(n);
    }, t);
  };
}
var R = function() {
  function r(e) {
    e && (this._subscribe = e);
  }
  return r.prototype.lift = function(e) {
    var t = new r();
    return t.source = this, t.operator = e, t;
  }, r.prototype.subscribe = function(e, t, n) {
    var o = this, i = yt(e) ? e : new j(e, t, n);
    return x(function() {
      var s = o, u = s.operator, a = s.source;
      i.add(u ? u.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = z(t), new t(function(o, i) {
      var s = new j({
        next: function(u) {
          try {
            e(u);
          } catch (a) {
            i(a), s.unsubscribe();
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
  }, r.prototype[ht] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return bt(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = z(e), new e(function(n, o) {
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
function z(r) {
  var e;
  return (e = r ?? q.Promise) !== null && e !== void 0 ? e : Promise;
}
function vt(r) {
  return r && p(r.next) && p(r.error) && p(r.complete);
}
function yt(r) {
  return r && r instanceof $ || vt(r) && Y(r);
}
function mt(r) {
  return p(r?.lift);
}
function _t(r) {
  return function(e) {
    if (mt(e))
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
function Et(r, e, t, n, o) {
  return new gt(r, e, t, n, o);
}
var gt = function(r) {
  v(e, r);
  function e(t, n, o, i, s, u) {
    var a = r.call(this, t) || this;
    return a.onFinalize = s, a.shouldUnsubscribe = u, a._next = n ? function(f) {
      try {
        n(f);
      } catch (h) {
        t.error(h);
      }
    } : r.prototype._next, a._error = i ? function(f) {
      try {
        i(f);
      } catch (h) {
        t.error(h);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, a._complete = o ? function() {
      try {
        o();
      } catch (f) {
        t.error(f);
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
}($), St = B(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), V = function(r) {
  v(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new D(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new St();
  }, e.prototype.next = function(t) {
    var n = this;
    x(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = P(n.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var a = u.value;
            a.next(t);
          }
        } catch (f) {
          o = { error: f };
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    x(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    x(function() {
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
    var n = this, o = this, i = o.hasError, s = o.isStopped, u = o.observers;
    return i || s ? H : (this.currentObservers = null, u.push(t), new T(function() {
      n.currentObservers = null, L(u, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? t.error(i) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new R();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new D(t, n);
  }, e;
}(R), D = function(r) {
  v(e, r);
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
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : H;
  }, e;
}(V), wt = function(r) {
  v(e, r);
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
}(V);
function xt() {
  return _t(function(r, e) {
    var t, n = !1;
    r.subscribe(Et(e, function(o) {
      var i = t;
      t = o, n && e.next([i, o]), n = !0;
    }));
  });
}
class Dt {
  _state;
  _pipe;
  _value;
  _subscriptionList = [];
  constructor(e, t) {
    this._state = new wt(e), this._pipe = t ? t(this._state) : this._state, this._value = e, this._pipe.pipe(xt()).subscribe(([n, o]) => {
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
  zt as C,
  Dt as R,
  Pt as a,
  it as b,
  kt as c,
  Ct as d,
  It as e,
  et as f,
  jt as g,
  At as h,
  Ft as i,
  Lt as j,
  g as k,
  Ut as l,
  Rt as m,
  $t as n,
  _t as o,
  Mt as p,
  Et as q
};
//# sourceMappingURL=rx-state-qVN2AgXP.js.map
