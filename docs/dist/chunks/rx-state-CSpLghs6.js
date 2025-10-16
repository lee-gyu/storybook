function it(e, r) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${e}`, r && t.classList.add(r), t;
}
const st = (...e) => {
  const r = [];
  e.forEach(({ svg: n, name: o, masked: i = !1 }) => {
    const s = btoa(n), c = `.ir-icon--${o}`, u = `--ir-icon--${o}`;
    r.push(`
.ir-icon {
    ${u}: url("data:image/svg+xml;base64,${s}")
}`), i ? r.push(`
${c} {
    -webkit-mask-image: var(${u});
    mask-image: var(${u});
    background-image: none;
    background-color: none;
}`) : r.push(`
${c} {
    background: var(${u}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = r.join(`
`), document.head.appendChild(t);
}, ct = (e, r) => "";
function ut(e) {
  return e.startsWith("ir-icon--") ? e : `ir-icon--${e}`;
}
class L {
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
  setFontStyle(r, t) {
    (this.curFontSize !== r || this.curFontFamily !== t) && (this.getContext().font = `${r} ${t}`, this.curFontSize = r, this.curFontFamily = t);
  }
  getCacheKey(r) {
    return `${this.curFontSize}_${this.curFontFamily}_${r}`;
  }
  _calculate(r) {
    return Math.ceil(this.getContext().measureText(r).width);
  }
  calculateWidth(r) {
    const t = this.getCacheKey(r);
    let n = this.cacheMap.get(t);
    return n === void 0 && (n = this._calculate(r), this.cacheMap.set(t, n)), n;
  }
}
let b = null;
function at(e, r) {
  return b || (b = new L()), b.setFontStyle(e, r), b;
}
const lt = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
};
function ft(e) {
  return new Promise((r, t) => {
    const n = new FileReader();
    n.onload = () => r(n.result), n.onerror = () => t(n.error), n.readAsText(e);
  });
}
const B = /* @__PURE__ */ (() => {
  let e = null;
  return () => e || (e = document.createElement("textarea"), e.style.position = "fixed", e.style.opacity = "0", e.style.top = "0", e.style.left = "0", e.style.zIndex = "-1", e.style.outline = "0 none", e.style.overflow = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("autocomplete", "off"), e.setAttribute("wrap", "hard"), e);
})(), ht = {
  async check(e) {
    return (await navigator.permissions.query({ name: e })).state;
  },
  getText() {
    return navigator.clipboard.readText();
  },
  read() {
    return navigator.clipboard.read();
  },
  setText(e) {
    const r = B();
    document.body.appendChild(r), r.focus(), r.value = e || "\0", r.select(), document.execCommand("copy"), r.remove();
  }
};
var g = function(e, r) {
  return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, g(e, r);
};
function p(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  g(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function w(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function x(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), o, i = [], s;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function E(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, o = r.length, i; n < o; n++)
    (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function l(e) {
  return typeof e == "function";
}
function k(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var S = k(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function O(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var _ = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var c = w(s), u = c.next(); !u.done; u = c.next()) {
              var f = u.value;
              f.remove(this);
            }
          } catch (a) {
            r = { error: a };
          } finally {
            try {
              u && !u.done && (t = c.return) && t.call(c);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          s.remove(this);
      var h = this.initialTeardown;
      if (l(h))
        try {
          h();
        } catch (a) {
          i = a instanceof S ? a.errors : [a];
        }
      var P = this._finalizers;
      if (P) {
        this._finalizers = null;
        try {
          for (var v = w(P), d = v.next(); !d.done; d = v.next()) {
            var R = d.value;
            try {
              I(R);
            } catch (a) {
              i = i ?? [], a instanceof S ? i = E(E([], x(i)), x(a.errors)) : i.push(a);
            }
          }
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            d && !d.done && (o = v.return) && o.call(v);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (i)
        throw new S(i);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        I(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && O(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && O(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), U = _.EMPTY;
function z(e) {
  return e instanceof _ || e && "closed" in e && l(e.remove) && l(e.add) && l(e.unsubscribe);
}
function I(e) {
  l(e) ? e() : e.unsubscribe();
}
var Y = {
  Promise: void 0
}, K = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, E([e, r], x(t)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function V(e) {
  K.setTimeout(function() {
    throw e;
  });
}
function F() {
}
function m(e) {
  e();
}
var T = function(e) {
  p(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, z(t) && t.add(n)) : n.destination = q, n;
  }
  return r.create = function(t, n, o) {
    return new C(t, n, o);
  }, r.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
}(_), W = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        y(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        y(n);
      }
    else
      y(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        y(t);
      }
  }, e;
}(), C = function(e) {
  p(r, e);
  function r(t, n, o) {
    var i = e.call(this) || this, s;
    return l(t) || !t ? s = {
      next: t ?? void 0,
      error: n ?? void 0,
      complete: o ?? void 0
    } : s = t, i.destination = new W(s), i;
  }
  return r;
}(T);
function y(e) {
  V(e);
}
function H(e) {
  throw e;
}
var q = {
  closed: !0,
  next: F,
  error: H,
  complete: F
}, Z = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function D(e) {
  return e;
}
function G(e) {
  return e.length === 0 ? D : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, o) {
      return o(n);
    }, t);
  };
}
var A = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var o = this, i = Q(r) ? r : new C(r, t, n);
    return m(function() {
      var s = o, c = s.operator, u = s.source;
      i.add(c ? c.call(i, u) : u ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = j(t), new t(function(o, i) {
      var s = new C({
        next: function(c) {
          try {
            r(c);
          } catch (u) {
            i(u), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[Z] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return G(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = j(r), new r(function(n, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function j(e) {
  var r;
  return (r = e ?? Y.Promise) !== null && r !== void 0 ? r : Promise;
}
function J(e) {
  return e && l(e.next) && l(e.error) && l(e.complete);
}
function Q(e) {
  return e && e instanceof T || J(e) && z(e);
}
function X(e) {
  return l(e?.lift);
}
function N(e) {
  return function(r) {
    if (X(r))
      return r.lift(function(t) {
        try {
          return e(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function tt(e, r, t, n, o) {
  return new rt(e, r, t, n, o);
}
var rt = function(e) {
  p(r, e);
  function r(t, n, o, i, s, c) {
    var u = e.call(this, t) || this;
    return u.onFinalize = s, u.shouldUnsubscribe = c, u._next = n ? function(f) {
      try {
        n(f);
      } catch (h) {
        t.error(h);
      }
    } : e.prototype._next, u._error = i ? function(f) {
      try {
        i(f);
      } catch (h) {
        t.error(h);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, u._complete = o ? function() {
      try {
        o();
      } catch (f) {
        t.error(f);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, u;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
}(T), et = k(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), M = function(e) {
  p(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new $(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new et();
  }, r.prototype.next = function(t) {
    var n = this;
    m(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = w(n.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var u = c.value;
            u.next(t);
          }
        } catch (f) {
          o = { error: f };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var n = this;
    m(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    m(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, c = o.observers;
    return i || s ? U : (this.currentObservers = null, c.push(t), new _(function() {
      n.currentObservers = null, O(c, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? t.error(i) : s && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new A();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new $(t, n);
  }, r;
}(A), $ = function(e) {
  p(r, e);
  function r(t, n) {
    var o = e.call(this) || this;
    return o.destination = t, o.source = n, o;
  }
  return r.prototype.next = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t);
  }, r.prototype.error = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : U;
  }, r;
}(M), nt = function(e) {
  p(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._value = t, n;
  }
  return Object.defineProperty(r.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._subscribe = function(t) {
    var n = e.prototype._subscribe.call(this, t);
    return !n.closed && t.next(this._value), n;
  }, r.prototype.getValue = function() {
    var t = this, n = t.hasError, o = t.thrownError, i = t._value;
    if (n)
      throw o;
    return this._throwIfClosed(), i;
  }, r.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, r;
}(M);
function ot() {
  return N(function(e, r) {
    var t, n = !1;
    e.subscribe(tt(r, function(o) {
      var i = t;
      t = o, n && r.next([i, o]), n = !0;
    }));
  });
}
class pt {
  _state;
  _pipe;
  _value;
  _subscriptionList = [];
  constructor(r, t) {
    this._state = new nt(r), this._pipe = t ? t(this._state) : this._state, this._value = r, this._pipe.pipe(ot()).subscribe(([n, o]) => {
      this._value = o, this._subscriptionList.forEach((i) => {
        try {
          i(n, o);
        } catch (s) {
          console.error("ReactiveState Subscription Error", this.constructor.name, s);
        }
      });
    });
  }
  addSubscription(r) {
    this._subscriptionList.push(r);
  }
  removeSubscription(r) {
    const t = this._subscriptionList.indexOf(r);
    t >= 0 ? this._subscriptionList.splice(t, 1) : console.warn("ReactiveState.removeSubscription: subscriber not found");
  }
  next(r) {
    this._state.next(r);
  }
  get value() {
    return this._value;
  }
}
export {
  ht as C,
  pt as R,
  it as a,
  st as b,
  lt as c,
  ct as d,
  ut as e,
  ft as f,
  at as g,
  tt as h,
  N as o
};
