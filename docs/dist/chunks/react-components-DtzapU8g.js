import "./_init-CqtFEZw2.js";
import { g as Ic } from "./_commonjsHelpers-DaMA6jEr.js";
import { b as Oc, f as fs, s as ds, c as Dc, m as jc, d as Fc, a as Uc, g as Ac } from "./floating-B9y9ooPB.js";
import { u as $c } from "./uuid-P7jWfzzn.js";
var ps = { exports: {} }, vl = {}, ms = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Bc = Symbol.for("react.portal"), Vc = Symbol.for("react.fragment"), Hc = Symbol.for("react.strict_mode"), Wc = Symbol.for("react.profiler"), Qc = Symbol.for("react.provider"), Kc = Symbol.for("react.context"), Yc = Symbol.for("react.forward_ref"), Xc = Symbol.for("react.suspense"), Gc = Symbol.for("react.memo"), Zc = Symbol.for("react.lazy"), Gi = Symbol.iterator;
function Jc(e) {
  return e === null || typeof e != "object" ? null : (e = Gi && e[Gi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, hs = Object.assign, ys = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ys, this.updater = n || vs;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gs() {
}
gs.prototype = vn.prototype;
function ei(e, t, n) {
  this.props = e, this.context = t, this.refs = ys, this.updater = n || vs;
}
var ti = ei.prototype = new gs();
ti.constructor = ei;
hs(ti, vn.prototype);
ti.isPureReactComponent = !0;
var Zi = Array.isArray, ws = Object.prototype.hasOwnProperty, ni = { current: null }, Ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      ws.call(t, r) && !Ss.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: ni.current };
}
function qc(e, t) {
  return { $$typeof: lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ri(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function bc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ji = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bc("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case Bc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Rl(i, 0) : r, Zi(l) ? (n = "", e != null && (n = e.replace(Ji, "$&/") + "/"), Mr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (ri(l) && (l = qc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ji, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Zi(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Rl(o, u);
      i += Mr(o, t, n, s, l);
    }
  else if (s = Jc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Rl(o, u++), i += Mr(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Mr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function ef(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var he = { current: null }, Tr = { transition: null }, tf = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: ni };
F.Children = { map: fr, forEach: function(e, t, n) {
  fr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ri(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = vn;
F.Fragment = Vc;
F.Profiler = Wc;
F.PureComponent = ei;
F.StrictMode = Hc;
F.Suspense = Xc;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tf;
F.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hs({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ni.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ws.call(t, s) && !Ss.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function(e) {
  return e = { $$typeof: Kc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qc, _context: e }, e.Consumer = e;
};
F.createElement = ks;
F.createFactory = function(e) {
  var t = ks.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: Yc, render: e };
};
F.isValidElement = ri;
F.lazy = function(e) {
  return { $$typeof: Zc, _payload: { _status: -1, _result: e }, _init: ef };
};
F.memo = function(e, t) {
  return { $$typeof: Gc, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
F.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function(e, t) {
  return he.current.useCallback(e, t);
};
F.useContext = function(e) {
  return he.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return he.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return he.current.useEffect(e, t);
};
F.useId = function() {
  return he.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return he.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return he.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return he.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return he.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return he.current.useRef(e);
};
F.useState = function(e) {
  return he.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return he.current.useTransition();
};
F.version = "18.2.0";
ms.exports = F;
var A = ms.exports;
const nf = /* @__PURE__ */ Ic(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf = A, lf = Symbol.for("react.element"), of = Symbol.for("react.fragment"), uf = Object.prototype.hasOwnProperty, sf = rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, af = { key: !0, ref: !0, __self: !0, __source: !0 };
function Es(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    uf.call(t, r) && !af.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: lf, type: e, key: o, ref: i, props: l, _owner: sf.current };
}
vl.Fragment = of;
vl.jsx = Es;
vl.jsxs = Es;
ps.exports = vl;
var H = ps.exports, _s = { exports: {} }, Ne = {}, xs = { exports: {} }, Cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(g, M) {
    var j = g.length;
    g.push(M);
    e:
      for (; 0 < j; ) {
        var q = j - 1 >>> 1, le = g[q];
        if (0 < l(le, M))
          g[q] = M, g[j] = le, j = q;
        else
          break e;
      }
  }
  function n(g) {
    return g.length === 0 ? null : g[0];
  }
  function r(g) {
    if (g.length === 0)
      return null;
    var M = g[0], j = g.pop();
    if (j !== M) {
      g[0] = j;
      e:
        for (var q = 0, le = g.length, ar = le >>> 1; q < ar; ) {
          var xt = 2 * (q + 1) - 1, Tl = g[xt], Ct = xt + 1, cr = g[Ct];
          if (0 > l(Tl, j))
            Ct < le && 0 > l(cr, Tl) ? (g[q] = cr, g[Ct] = j, q = Ct) : (g[q] = Tl, g[xt] = j, q = xt);
          else if (Ct < le && 0 > l(cr, j))
            g[q] = cr, g[Ct] = j, q = Ct;
          else
            break e;
        }
    }
    return M;
  }
  function l(g, M) {
    var j = g.sortIndex - M.sortIndex;
    return j !== 0 ? j : g.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], h = 1, v = null, m = 3, E = !1, _ = !1, C = !1, $ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(g) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null)
        r(c);
      else if (M.startTime <= g)
        r(c), M.sortIndex = M.expirationTime, t(s, M);
      else
        break;
      M = n(c);
    }
  }
  function y(g) {
    if (C = !1, d(g), !_)
      if (n(s) !== null)
        _ = !0, V(x);
      else {
        var M = n(c);
        M !== null && D(y, M.startTime - g);
      }
  }
  function x(g, M) {
    _ = !1, C && (C = !1, f(p), p = -1), E = !0;
    var j = m;
    try {
      for (d(M), v = n(s); v !== null && (!(v.expirationTime > M) || g && !z()); ) {
        var q = v.callback;
        if (typeof q == "function") {
          v.callback = null, m = v.priorityLevel;
          var le = q(v.expirationTime <= M);
          M = e.unstable_now(), typeof le == "function" ? v.callback = le : v === n(s) && r(s), d(M);
        } else
          r(s);
        v = n(s);
      }
      if (v !== null)
        var ar = !0;
      else {
        var xt = n(c);
        xt !== null && D(y, xt.startTime - M), ar = !1;
      }
      return ar;
    } finally {
      v = null, m = j, E = !1;
    }
  }
  var P = !1, L = null, p = -1, k = 5, w = -1;
  function z() {
    return !(e.unstable_now() - w < k);
  }
  function R() {
    if (L !== null) {
      var g = e.unstable_now();
      w = g;
      var M = !0;
      try {
        M = L(!0, g);
      } finally {
        M ? O() : (P = !1, L = null);
      }
    } else
      P = !1;
  }
  var O;
  if (typeof a == "function")
    O = function() {
      a(R);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), I = N.port2;
    N.port1.onmessage = R, O = function() {
      I.postMessage(null);
    };
  } else
    O = function() {
      $(R, 0);
    };
  function V(g) {
    L = g, P || (P = !0, O());
  }
  function D(g, M) {
    p = $(function() {
      g(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(g) {
    g.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || E || (_ = !0, V(x));
  }, e.unstable_forceFrameRate = function(g) {
    0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < g ? Math.floor(1e3 / g) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(g) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = m;
    }
    var j = m;
    m = M;
    try {
      return g();
    } finally {
      m = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(g, M) {
    switch (g) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        g = 3;
    }
    var j = m;
    m = g;
    try {
      return M();
    } finally {
      m = j;
    }
  }, e.unstable_scheduleCallback = function(g, M, j) {
    var q = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? q + j : q) : j = q, g) {
      case 1:
        var le = -1;
        break;
      case 2:
        le = 250;
        break;
      case 5:
        le = 1073741823;
        break;
      case 4:
        le = 1e4;
        break;
      default:
        le = 5e3;
    }
    return le = j + le, g = { id: h++, callback: M, priorityLevel: g, startTime: j, expirationTime: le, sortIndex: -1 }, j > q ? (g.sortIndex = j, t(c, g), n(s) === null && g === n(c) && (C ? (f(p), p = -1) : C = !0, D(y, j - q))) : (g.sortIndex = le, t(s, g), _ || E || (_ = !0, V(x))), g;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(g) {
    var M = m;
    return function() {
      var j = m;
      m = M;
      try {
        return g.apply(this, arguments);
      } finally {
        m = j;
      }
    };
  };
})(Cs);
xs.exports = Cs;
var cf = xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = A, Pe = cf;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ns = /* @__PURE__ */ new Set(), $n = {};
function At(e, t) {
  sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++)
    Ns.add(t[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uo = Object.prototype.hasOwnProperty, ff = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qi = {}, bi = {};
function df(e) {
  return uo.call(bi, e) ? !0 : uo.call(qi, e) ? !1 : ff.test(e) ? bi[e] = !0 : (qi[e] = !0, !1);
}
function pf(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function mf(e, t, n, r) {
  if (t === null || typeof t > "u" || pf(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ae[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ae[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ae[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ae[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ae[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ae[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var li = /[\-:]([a-z])/g;
function oi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    li,
    oi
  );
  ae[t] = new ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(li, oi);
  ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(li, oi);
  ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ii(e, t, n, r) {
  var l = ae.hasOwnProperty(t) ? ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (mf(t, n, l, r) && (n = null), r || l === null ? df(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Ps.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), ui = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), zs = Symbol.for("react.provider"), Ls = Symbol.for("react.context"), si = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), co = Symbol.for("react.suspense_list"), ai = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Ms = Symbol.for("react.offscreen"), eu = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, Il;
function Nn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = t && t[1] || "";
    }
  return `
` + Il + e;
}
var Ol = !1;
function Dl(e, t) {
  if (!e || Ol)
    return "";
  Ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function vf(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Dl(e.type, !1), e;
    case 11:
      return e = Dl(e.type.render, !1), e;
    case 1:
      return e = Dl(e.type, !0), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Ht:
      return "Portal";
    case so:
      return "Profiler";
    case ui:
      return "StrictMode";
    case ao:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ls:
        return (e.displayName || "Context") + ".Consumer";
      case zs:
        return (e._context.displayName || "Context") + ".Provider";
      case si:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ai:
        return t = e.displayName || null, t !== null ? t : fo(e.type) || "Memo";
      case ot:
        t = e._payload, e = e._init;
        try {
          return fo(e(t));
        } catch {
        }
    }
  return null;
}
function hf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fo(t);
    case 8:
      return t === ui ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ts(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function yf(e) {
  var t = Ts(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = yf(e));
}
function Rs(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ts(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function po(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Is(e, t) {
  t = t.checked, t != null && ii(e, "checked", t, !1);
}
function mo(e, t) {
  Is(e, t);
  var n = wt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vo(e, t.type, n) : t.hasOwnProperty("defaultValue") && vo(e, t.type, wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function nu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vo(e, t, n) {
  (t !== "number" || Hr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ru(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (zn(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wt(n) };
}
function Os(e, t) {
  var n = wt(t.value), r = wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ds(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, js = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
  gf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e];
  });
});
function Fs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px";
}
function Us(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Fs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var wf = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function go(e, t) {
  if (t) {
    if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(S(62));
  }
}
function wo(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var So = null;
function ci(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ko = null, nn = null, rn = null;
function ou(e) {
  if (e = ur(e)) {
    if (typeof ko != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = Sl(t), ko(e.stateNode, e.type, t));
  }
}
function As(e) {
  nn ? rn ? rn.push(e) : rn = [e] : nn = e;
}
function $s() {
  if (nn) {
    var e = nn, t = rn;
    if (rn = nn = null, ou(e), t)
      for (e = 0; e < t.length; e++)
        ou(t[e]);
  }
}
function Bs(e, t) {
  return e(t);
}
function Vs() {
}
var jl = !1;
function Hs(e, t, n) {
  if (jl)
    return e(t, n);
  jl = !0;
  try {
    return Bs(e, t, n);
  } finally {
    jl = !1, (nn !== null || rn !== null) && (Vs(), $s());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Sl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(S(231, t, typeof n));
  return n;
}
var Eo = !1;
if (be)
  try {
    var wn = {};
    Object.defineProperty(wn, "passive", { get: function() {
      Eo = !0;
    } }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
  } catch {
    Eo = !1;
  }
function Sf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1, Wr = null, Qr = !1, _o = null, kf = { onError: function(e) {
  Rn = !0, Wr = e;
} };
function Ef(e, t, n, r, l, o, i, u, s) {
  Rn = !1, Wr = null, Sf.apply(kf, arguments);
}
function _f(e, t, n, r, l, o, i, u, s) {
  if (Ef.apply(this, arguments), Rn) {
    if (Rn) {
      var c = Wr;
      Rn = !1, Wr = null;
    } else
      throw Error(S(198));
    Qr || (Qr = !0, _o = c);
  }
}
function $t(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ws(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function iu(e) {
  if ($t(e) !== e)
    throw Error(S(188));
}
function xf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null)
      throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return iu(l), e;
        if (o === r)
          return iu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(S(189));
      }
    }
    if (n.alternate !== r)
      throw Error(S(190));
  }
  if (n.tag !== 3)
    throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Qs(e) {
  return e = xf(e), e !== null ? Ks(e) : null;
}
function Ks(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ks(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ys = Pe.unstable_scheduleCallback, uu = Pe.unstable_cancelCallback, Cf = Pe.unstable_shouldYield, Pf = Pe.unstable_requestPaint, b = Pe.unstable_now, Nf = Pe.unstable_getCurrentPriorityLevel, fi = Pe.unstable_ImmediatePriority, Xs = Pe.unstable_UserBlockingPriority, Kr = Pe.unstable_NormalPriority, zf = Pe.unstable_LowPriority, Gs = Pe.unstable_IdlePriority, hl = null, Ke = null;
function Lf(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $e = Math.clz32 ? Math.clz32 : Rf, Mf = Math.log, Tf = Math.LN2;
function Rf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mf(e) / Tf | 0) | 0;
}
var vr = 64, hr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Ln(u) : (o &= i, o !== 0 && (r = Ln(o)));
  } else
    i = n & ~l, i !== 0 ? r = Ln(i) : o !== 0 && (r = Ln(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $e(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function If(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - $e(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = If(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function xo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zs() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $e(t), e[t] = n;
}
function Df(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - $e(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function di(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function Js(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qs, pi, bs, ea, ta, Co = !1, yr = [], ft = null, dt = null, pt = null, Hn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), ut = [], jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ur(t), t !== null && pi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ff(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = Sn(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = Sn(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = Sn(pt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Wn.set(o, Sn(Wn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function na(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ws(n), t !== null) {
          e.blockedOn = t, ta(e.priority, function() {
            bs(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      So = r, n.target.dispatchEvent(r), So = null;
    } else
      return t = ur(n), t !== null && pi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function au(e, t, n) {
  Rr(e) && n.delete(t);
}
function Uf() {
  Co = !1, ft !== null && Rr(ft) && (ft = null), dt !== null && Rr(dt) && (dt = null), pt !== null && Rr(pt) && (pt = null), Hn.forEach(au), Wn.forEach(au);
}
function kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Co || (Co = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Uf)));
}
function Qn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < yr.length) {
    kn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && kn(ft, e), dt !== null && kn(dt, e), pt !== null && kn(pt, e), Hn.forEach(t), Wn.forEach(t), n = 0; n < ut.length; n++)
    r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); )
    na(n), n.blockedOn === null && ut.shift();
}
var ln = rt.ReactCurrentBatchConfig, Xr = !0;
function Af(e, t, n, r) {
  var l = B, o = ln.transition;
  ln.transition = null;
  try {
    B = 1, mi(e, t, n, r);
  } finally {
    B = l, ln.transition = o;
  }
}
function $f(e, t, n, r) {
  var l = B, o = ln.transition;
  ln.transition = null;
  try {
    B = 4, mi(e, t, n, r);
  } finally {
    B = l, ln.transition = o;
  }
}
function mi(e, t, n, r) {
  if (Xr) {
    var l = Po(e, t, n, r);
    if (l === null)
      Yl(e, t, r, Gr, n), su(e, r);
    else if (Ff(l, e, t, n, r))
      r.stopPropagation();
    else if (su(e, r), t & 4 && -1 < jf.indexOf(e)) {
      for (; l !== null; ) {
        var o = ur(l);
        if (o !== null && qs(o), o = Po(e, t, n, r), o === null && Yl(e, t, r, Gr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Yl(e, t, r, null, n);
  }
}
var Gr = null;
function Po(e, t, n, r) {
  if (Gr = null, e = ci(r), e = zt(e), e !== null)
    if (t = $t(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ws(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Gr = e, null;
}
function ra(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Nf()) {
        case fi:
          return 1;
        case Xs:
          return 4;
        case Kr:
        case zf:
          return 16;
        case Gs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null, vi = null, Ir = null;
function la() {
  if (Ir)
    return Ir;
  var e, t = vi, n = t.length, r, l = "value" in at ? at.value : at.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gr() {
  return !0;
}
function cu() {
  return !1;
}
function ze(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gr : cu, this.isPropagationStopped = cu, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gr);
  }, persist: function() {
  }, isPersistent: gr }), t;
}
var hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hi = ze(hn), ir = Z({}, hn, { view: 0, detail: 0 }), Bf = ze(ir), Ul, Al, En, yl = Z({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Ul = e.screenX - En.screenX, Al = e.screenY - En.screenY) : Al = Ul = 0, En = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Al;
} }), fu = ze(yl), Vf = Z({}, yl, { dataTransfer: 0 }), Hf = ze(Vf), Wf = Z({}, ir, { relatedTarget: 0 }), $l = ze(Wf), Qf = Z({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = ze(Qf), Yf = Z({}, hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Xf = ze(Yf), Gf = Z({}, hn, { data: 0 }), du = ze(Gf), Zf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Jf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qf[e]) ? !!t[e] : !1;
}
function yi() {
  return bf;
}
var ed = Z({}, ir, { key: function(e) {
  if (e.key) {
    var t = Zf[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yi, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), td = ze(ed), nd = Z({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pu = ze(nd), rd = Z({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yi }), ld = ze(rd), od = Z({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), id = ze(od), ud = Z({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sd = ze(ud), ad = [9, 13, 27, 32], gi = be && "CompositionEvent" in window, In = null;
be && "documentMode" in document && (In = document.documentMode);
var cd = be && "TextEvent" in window && !In, oa = be && (!gi || In && 8 < In && 11 >= In), mu = " ", vu = !1;
function ia(e, t) {
  switch (e) {
    case "keyup":
      return ad.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ua(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function fd(e, t) {
  switch (e) {
    case "compositionend":
      return ua(t);
    case "keypress":
      return t.which !== 32 ? null : (vu = !0, mu);
    case "textInput":
      return e = t.data, e === mu && vu ? null : e;
    default:
      return null;
  }
}
function dd(e, t) {
  if (Qt)
    return e === "compositionend" || !gi && ia(e, t) ? (e = la(), Ir = vi = at = null, Qt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return oa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pd[e.type] : t === "textarea";
}
function sa(e, t, n, r) {
  As(r), t = Zr(t, "onChange"), 0 < t.length && (n = new hi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var On = null, Kn = null;
function md(e) {
  wa(e, 0);
}
function gl(e) {
  var t = Xt(e);
  if (Rs(t))
    return e;
}
function vd(e, t) {
  if (e === "change")
    return t;
}
var aa = !1;
if (be) {
  var Bl;
  if (be) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var yu = document.createElement("div");
      yu.setAttribute("oninput", "return;"), Vl = typeof yu.oninput == "function";
    }
    Bl = Vl;
  } else
    Bl = !1;
  aa = Bl && (!document.documentMode || 9 < document.documentMode);
}
function gu() {
  On && (On.detachEvent("onpropertychange", ca), Kn = On = null);
}
function ca(e) {
  if (e.propertyName === "value" && gl(Kn)) {
    var t = [];
    sa(t, Kn, e, ci(e)), Hs(md, t);
  }
}
function hd(e, t, n) {
  e === "focusin" ? (gu(), On = t, Kn = n, On.attachEvent("onpropertychange", ca)) : e === "focusout" && gu();
}
function yd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Kn);
}
function gd(e, t) {
  if (e === "click")
    return gl(t);
}
function wd(e, t) {
  if (e === "input" || e === "change")
    return gl(t);
}
function Sd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ve = typeof Object.is == "function" ? Object.is : Sd;
function Yn(e, t) {
  if (Ve(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uo.call(t, l) || !Ve(e[l], t[l]))
      return !1;
  }
  return !0;
}
function wu(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wu(n);
  }
}
function fa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function da() {
  for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Hr(e.document);
  }
  return t;
}
function wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kd(e) {
  var t = da(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fa(n.ownerDocument.documentElement, n)) {
    if (r !== null && wi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Su(n, o);
        var i = Su(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Ed = be && "documentMode" in document && 11 >= document.documentMode, Kt = null, No = null, Dn = null, zo = !1;
function ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo || Kt == null || Kt !== Hr(r) || (r = Kt, "selectionStart" in r && wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Yn(Dn, r) || (Dn = r, r = Zr(No, "onSelect"), 0 < r.length && (t = new hi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kt)));
}
function wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yt = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Hl = {}, pa = {};
be && (pa = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);
function wl(e) {
  if (Hl[e])
    return Hl[e];
  if (!Yt[e])
    return e;
  var t = Yt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in pa)
      return Hl[e] = t[n];
  return e;
}
var ma = wl("animationend"), va = wl("animationiteration"), ha = wl("animationstart"), ya = wl("transitionend"), ga = /* @__PURE__ */ new Map(), Eu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kt(e, t) {
  ga.set(e, t), At(t, [e]);
}
for (var Wl = 0; Wl < Eu.length; Wl++) {
  var Ql = Eu[Wl], _d = Ql.toLowerCase(), xd = Ql[0].toUpperCase() + Ql.slice(1);
  kt(_d, "on" + xd);
}
kt(ma, "onAnimationEnd");
kt(va, "onAnimationIteration");
kt(ha, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(ya, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
At("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
At("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
At("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
At("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _f(r, t, void 0, e), e.currentTarget = null;
}
function wa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          _u(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          _u(l, u, c), o = s;
        }
    }
  }
  if (Qr)
    throw e = _o, Qr = !1, _o = null, e;
}
function Q(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sa(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), Sa(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[Sr]) {
    e[Sr] = !0, Ns.forEach(function(n) {
      n !== "selectionchange" && (Cd.has(n) || Kl(n, !1, e), Kl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || (t[Sr] = !0, Kl("selectionchange", !1, t));
  }
}
function Sa(e, t, n, r) {
  switch (ra(t)) {
    case 1:
      var l = Af;
      break;
    case 4:
      l = $f;
      break;
    default:
      l = mi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = zt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Hs(function() {
    var c = o, h = ci(n), v = [];
    e: {
      var m = ga.get(e);
      if (m !== void 0) {
        var E = hi, _ = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            E = td;
            break;
          case "focusin":
            _ = "focus", E = $l;
            break;
          case "focusout":
            _ = "blur", E = $l;
            break;
          case "beforeblur":
          case "afterblur":
            E = $l;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = ld;
            break;
          case ma:
          case va:
          case ha:
            E = Kf;
            break;
          case ya:
            E = id;
            break;
          case "scroll":
            E = Bf;
            break;
          case "wheel":
            E = sd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = pu;
        }
        var C = (t & 4) !== 0, $ = !C && e === "scroll", f = C ? m !== null ? m + "Capture" : null : m;
        C = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, f !== null && (y = Vn(a, f), y != null && C.push(Gn(a, y, d)))), $)
            break;
          a = a.return;
        }
        0 < C.length && (m = new E(m, _, null, n, h), v.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", m && n !== So && (_ = n.relatedTarget || n.fromElement) && (zt(_) || _[et]))
          break e;
        if ((E || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, E ? (_ = n.relatedTarget || n.toElement, E = c, _ = _ ? zt(_) : null, _ !== null && ($ = $t(_), _ !== $ || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (E = null, _ = c), E !== _)) {
          if (C = fu, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (C = pu, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), $ = E == null ? m : Xt(E), d = _ == null ? m : Xt(_), m = new C(y, a + "leave", E, n, h), m.target = $, m.relatedTarget = d, y = null, zt(h) === c && (C = new C(f, a + "enter", _, n, h), C.target = d, C.relatedTarget = $, y = C), $ = y, E && _)
            t: {
              for (C = E, f = _, a = 0, d = C; d; d = Bt(d))
                a++;
              for (d = 0, y = f; y; y = Bt(y))
                d++;
              for (; 0 < a - d; )
                C = Bt(C), a--;
              for (; 0 < d - a; )
                f = Bt(f), d--;
              for (; a--; ) {
                if (C === f || f !== null && C === f.alternate)
                  break t;
                C = Bt(C), f = Bt(f);
              }
              C = null;
            }
          else
            C = null;
          E !== null && xu(v, m, E, C, !1), _ !== null && $ !== null && xu(v, $, _, C, !0);
        }
      }
      e: {
        if (m = c ? Xt(c) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file")
          var x = vd;
        else if (hu(m))
          if (aa)
            x = wd;
          else {
            x = yd;
            var P = hd;
          }
        else
          (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = gd);
        if (x && (x = x(e, c))) {
          sa(v, x, n, h);
          break e;
        }
        P && P(e, m, c), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && vo(m, "number", m.value);
      }
      switch (P = c ? Xt(c) : window, e) {
        case "focusin":
          (hu(P) || P.contentEditable === "true") && (Kt = P, No = c, Dn = null);
          break;
        case "focusout":
          Dn = No = Kt = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zo = !1, ku(v, n, h);
          break;
        case "selectionchange":
          if (Ed)
            break;
        case "keydown":
        case "keyup":
          ku(v, n, h);
      }
      var L;
      if (gi)
        e: {
          switch (e) {
            case "compositionstart":
              var p = "onCompositionStart";
              break e;
            case "compositionend":
              p = "onCompositionEnd";
              break e;
            case "compositionupdate":
              p = "onCompositionUpdate";
              break e;
          }
          p = void 0;
        }
      else
        Qt ? ia(e, n) && (p = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (p = "onCompositionStart");
      p && (oa && n.locale !== "ko" && (Qt || p !== "onCompositionStart" ? p === "onCompositionEnd" && Qt && (L = la()) : (at = h, vi = "value" in at ? at.value : at.textContent, Qt = !0)), P = Zr(c, p), 0 < P.length && (p = new du(p, e, null, n, h), v.push({ event: p, listeners: P }), L ? p.data = L : (L = ua(n), L !== null && (p.data = L)))), (L = cd ? fd(e, n) : dd(e, n)) && (c = Zr(c, "onBeforeInput"), 0 < c.length && (h = new du("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: c }), h.data = L));
    }
    wa(v, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Vn(e, n), o != null && r.unshift(Gn(e, o, l)), o = Vn(e, t), o != null && r.push(Gn(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Vn(n, o), s != null && i.unshift(Gn(n, s, u))) : l || (s = Vn(n, o), s != null && i.push(Gn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Pd = /\r\n?/g, Nd = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Pd, `
`).replace(Nd, "");
}
function kr(e, t, n) {
  if (t = Cu(t), Cu(e) !== t && n)
    throw Error(S(425));
}
function Jr() {
}
var Lo = null, Mo = null;
function To(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ro = typeof setTimeout == "function" ? setTimeout : void 0, zd = typeof clearTimeout == "function" ? clearTimeout : void 0, Pu = typeof Promise == "function" ? Promise : void 0, Ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pu < "u" ? function(e) {
  return Pu.resolve(null).then(e).catch(Md);
} : Ro;
function Md(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Qn(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Nu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yn = Math.random().toString(36).slice(2), Qe = "__reactFiber$" + yn, Zn = "__reactProps$" + yn, et = "__reactContainer$" + yn, Io = "__reactEvents$" + yn, Td = "__reactListeners$" + yn, Rd = "__reactHandles$" + yn;
function zt(e) {
  var t = e[Qe];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[et] || n[Qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Nu(e); e !== null; ) {
          if (n = e[Qe])
            return n;
          e = Nu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[Qe] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function Sl(e) {
  return e[Zn] || null;
}
var Oo = [], Gt = -1;
function Et(e) {
  return { current: e };
}
function K(e) {
  0 > Gt || (e.current = Oo[Gt], Oo[Gt] = null, Gt--);
}
function W(e, t) {
  Gt++, Oo[Gt] = e.current, e.current = t;
}
var St = {}, pe = Et(St), Se = Et(!1), It = St;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function qr() {
  K(Se), K(pe);
}
function zu(e, t, n) {
  if (pe.current !== St)
    throw Error(S(168));
  W(pe, t), W(Se, n);
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(S(108, hf(e) || "Unknown", l));
  return Z({}, n, r);
}
function br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, It = pe.current, W(pe, e), W(Se, Se.current), !0;
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = ka(e, t, It), r.__reactInternalMemoizedMergedChildContext = e, K(Se), K(pe), W(pe, e)) : K(Se), W(Se, n);
}
var Ge = null, kl = !1, Gl = !1;
function Ea(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
function Id(e) {
  kl = !0, Ea(e);
}
function _t() {
  if (!Gl && Ge !== null) {
    Gl = !0;
    var e = 0, t = B;
    try {
      var n = Ge;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ge = null, kl = !1;
    } catch (l) {
      throw Ge !== null && (Ge = Ge.slice(e + 1)), Ys(fi, _t), l;
    } finally {
      B = t, Gl = !1;
    }
  }
  return null;
}
var Zt = [], Jt = 0, el = null, tl = 0, Le = [], Me = 0, Ot = null, Ze = 1, Je = "";
function Pt(e, t) {
  Zt[Jt++] = tl, Zt[Jt++] = el, el = e, tl = t;
}
function _a(e, t, n) {
  Le[Me++] = Ze, Le[Me++] = Je, Le[Me++] = Ot, Ot = e;
  var r = Ze;
  e = Je;
  var l = 32 - $e(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - $e(t) + l | n << l | r, Je = o + e;
  } else
    Ze = 1 << o | n << l | r, Je = e;
}
function Si(e) {
  e.return !== null && (Pt(e, 1), _a(e, 1, 0));
}
function ki(e) {
  for (; e === el; )
    el = Zt[--Jt], Zt[Jt] = null, tl = Zt[--Jt], Zt[Jt] = null;
  for (; e === Ot; )
    Ot = Le[--Me], Le[Me] = null, Je = Le[--Me], Le[Me] = null, Ze = Le[--Me], Le[Me] = null;
}
var Ce = null, xe = null, Y = !1, Ae = null;
function xa(e, t) {
  var n = Te(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, xe = mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? { id: Ze, overflow: Je } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if (Y) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Mu(e, t)) {
        if (Do(e))
          throw Error(S(418));
        t = mt(n.nextSibling);
        var r = Ce;
        t && Mu(e, t) ? xa(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, Ce = e);
      }
    } else {
      if (Do(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, Y = !1, Ce = e;
    }
  }
}
function Tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Er(e) {
  if (e !== Ce)
    return !1;
  if (!Y)
    return Tu(e), Y = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !To(e.type, e.memoizedProps)), t && (t = xe)) {
    if (Do(e))
      throw Ca(), Error(S(418));
    for (; t; )
      xa(e, t), t = mt(t.nextSibling);
  }
  if (Tu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = mt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else
    xe = Ce ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ca() {
  for (var e = xe; e; )
    e = mt(e.nextSibling);
}
function cn() {
  xe = Ce = null, Y = !1;
}
function Ei(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
var Od = rt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var nl = Et(null), rl = null, qt = null, _i = null;
function xi() {
  _i = qt = rl = null;
}
function Ci(e) {
  var t = nl.current;
  K(nl), e._currentValue = t;
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function on(e, t) {
  rl = e, _i = qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (_i !== e)
    if (e = { context: e, memoizedValue: t, next: null }, qt === null) {
      if (rl === null)
        throw Error(S(308));
      qt = e, rl.dependencies = { lanes: 0, firstContext: e };
    } else
      qt = qt.next = e;
  return t;
}
var Lt = null;
function Pi(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r);
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function Ni(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Na(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, U & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n);
}
function Dr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, di(e, n);
  }
}
function Ru(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var v = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var m = u.lane, E = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: E,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var _ = e, C = u;
          switch (m = t, E = n, C.tag) {
            case 1:
              if (_ = C.payload, typeof _ == "function") {
                v = _.call(E, v, m);
                break e;
              }
              v = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = C.payload, m = typeof _ == "function" ? _.call(E, v, m) : _, m == null)
                break e;
              v = Z({}, v, m);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else
        E = { eventTime: E, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = E, s = v) : h = h.next = E, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = v), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    jt |= i, e.lanes = i, e.memoizedState = v;
  }
}
function Iu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var za = new Ps.Component().refs;
function Uo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = yt(e), o = qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Be(t, e, l, r), Dr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = yt(e), o = qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Be(t, e, l, r), Dr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = yt(e), l = qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = vt(e, l, r), t !== null && (Be(t, e, r, n), Dr(t, e, r));
} };
function Ou(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function La(e, t, n) {
  var r = !1, l = St, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ie(o) : (l = ke(t) ? It : pe.current, r = t.contextTypes, o = (r = r != null) ? an(e, l) : St), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Du(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Ao(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = za, Ni(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ie(o) : (o = ke(t) ? It : pe.current, l.context = an(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Uo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && El.enqueueReplaceState(l, l.state, null), ll(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _n(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === za && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function _r(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ju(e) {
  var t = e._init;
  return t(e._payload);
}
function Ma(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = gt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6 ? (a = no(d, f.mode, y), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, y) {
    var x = d.type;
    return x === Wt ? h(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && ju(x) === a.type) ? (y = l(a, d.props), y.ref = _n(f, a, d), y.return = f, y) : (y = Br(d.type, d.key, d.props, null, f.mode, y), y.ref = _n(f, a, d), y.return = f, y);
  }
  function c(f, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ro(d, f.mode, y), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, y, x) {
    return a === null || a.tag !== 7 ? (a = Rt(d, f.mode, y, x), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function v(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = no("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case dr:
          return d = Br(a.type, a.key, a.props, null, f.mode, d), d.ref = _n(f, null, a), d.return = f, d;
        case Ht:
          return a = ro(a, f.mode, d), a.return = f, a;
        case ot:
          var y = a._init;
          return v(f, y(a._payload), d);
      }
      if (zn(a) || gn(a))
        return a = Rt(a, f.mode, d, null), a.return = f, a;
      _r(f, a);
    }
    return null;
  }
  function m(f, a, d, y) {
    var x = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return x !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          return d.key === x ? s(f, a, d, y) : null;
        case Ht:
          return d.key === x ? c(f, a, d, y) : null;
        case ot:
          return x = d._init, m(
            f,
            a,
            x(d._payload),
            y
          );
      }
      if (zn(d) || gn(d))
        return x !== null ? null : h(f, a, d, y, null);
      _r(f, d);
    }
    return null;
  }
  function E(f, a, d, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return f = f.get(d) || null, u(a, f, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case dr:
          return f = f.get(y.key === null ? d : y.key) || null, s(a, f, y, x);
        case Ht:
          return f = f.get(y.key === null ? d : y.key) || null, c(a, f, y, x);
        case ot:
          var P = y._init;
          return E(f, a, d, P(y._payload), x);
      }
      if (zn(y) || gn(y))
        return f = f.get(d) || null, h(a, f, y, x, null);
      _r(a, y);
    }
    return null;
  }
  function _(f, a, d, y) {
    for (var x = null, P = null, L = a, p = a = 0, k = null; L !== null && p < d.length; p++) {
      L.index > p ? (k = L, L = null) : k = L.sibling;
      var w = m(f, L, d[p], y);
      if (w === null) {
        L === null && (L = k);
        break;
      }
      e && L && w.alternate === null && t(f, L), a = o(w, a, p), P === null ? x = w : P.sibling = w, P = w, L = k;
    }
    if (p === d.length)
      return n(f, L), Y && Pt(f, p), x;
    if (L === null) {
      for (; p < d.length; p++)
        L = v(f, d[p], y), L !== null && (a = o(L, a, p), P === null ? x = L : P.sibling = L, P = L);
      return Y && Pt(f, p), x;
    }
    for (L = r(f, L); p < d.length; p++)
      k = E(L, f, p, d[p], y), k !== null && (e && k.alternate !== null && L.delete(k.key === null ? p : k.key), a = o(k, a, p), P === null ? x = k : P.sibling = k, P = k);
    return e && L.forEach(function(z) {
      return t(f, z);
    }), Y && Pt(f, p), x;
  }
  function C(f, a, d, y) {
    var x = gn(d);
    if (typeof x != "function")
      throw Error(S(150));
    if (d = x.call(d), d == null)
      throw Error(S(151));
    for (var P = x = null, L = a, p = a = 0, k = null, w = d.next(); L !== null && !w.done; p++, w = d.next()) {
      L.index > p ? (k = L, L = null) : k = L.sibling;
      var z = m(f, L, w.value, y);
      if (z === null) {
        L === null && (L = k);
        break;
      }
      e && L && z.alternate === null && t(f, L), a = o(z, a, p), P === null ? x = z : P.sibling = z, P = z, L = k;
    }
    if (w.done)
      return n(
        f,
        L
      ), Y && Pt(f, p), x;
    if (L === null) {
      for (; !w.done; p++, w = d.next())
        w = v(f, w.value, y), w !== null && (a = o(w, a, p), P === null ? x = w : P.sibling = w, P = w);
      return Y && Pt(f, p), x;
    }
    for (L = r(f, L); !w.done; p++, w = d.next())
      w = E(L, f, p, w.value, y), w !== null && (e && w.alternate !== null && L.delete(w.key === null ? p : w.key), a = o(w, a, p), P === null ? x = w : P.sibling = w, P = w);
    return e && L.forEach(function(R) {
      return t(f, R);
    }), Y && Pt(f, p), x;
  }
  function $(f, a, d, y) {
    if (typeof d == "object" && d !== null && d.type === Wt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          e: {
            for (var x = d.key, P = a; P !== null; ) {
              if (P.key === x) {
                if (x = d.type, x === Wt) {
                  if (P.tag === 7) {
                    n(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (P.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && ju(x) === P.type) {
                  n(f, P.sibling), a = l(P, d.props), a.ref = _n(f, P, d), a.return = f, f = a;
                  break e;
                }
                n(f, P);
                break;
              } else
                t(f, P);
              P = P.sibling;
            }
            d.type === Wt ? (a = Rt(d.props.children, f.mode, y, d.key), a.return = f, f = a) : (y = Br(d.type, d.key, d.props, null, f.mode, y), y.ref = _n(f, a, d), y.return = f, f = y);
          }
          return i(f);
        case Ht:
          e: {
            for (P = d.key; a !== null; ) {
              if (a.key === P)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else
                t(f, a);
              a = a.sibling;
            }
            a = ro(d, f.mode, y), a.return = f, f = a;
          }
          return i(f);
        case ot:
          return P = d._init, $(f, a, P(d._payload), y);
      }
      if (zn(d))
        return _(f, a, d, y);
      if (gn(d))
        return C(f, a, d, y);
      _r(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = no(d, f.mode, y), a.return = f, f = a), i(f)) : n(f, a);
  }
  return $;
}
var fn = Ma(!0), Ta = Ma(!1), sr = {}, Ye = Et(sr), Jn = Et(sr), qn = Et(sr);
function Mt(e) {
  if (e === sr)
    throw Error(S(174));
  return e;
}
function zi(e, t) {
  switch (W(qn, t), W(Jn, e), W(Ye, sr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yo(t, e);
  }
  K(Ye), W(Ye, t);
}
function dn() {
  K(Ye), K(Jn), K(qn);
}
function Ra(e) {
  Mt(qn.current);
  var t = Mt(Ye.current), n = yo(t, e.type);
  t !== n && (W(Jn, e), W(Ye, n));
}
function Li(e) {
  Jn.current === e && (K(Ye), K(Jn));
}
var X = Et(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Zl = [];
function Mi() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var jr = rt.ReactCurrentDispatcher, Jl = rt.ReactCurrentBatchConfig, Dt = 0, G = null, ne = null, oe = null, il = !1, jn = !1, bn = 0, Dd = 0;
function ce() {
  throw Error(S(321));
}
function Ti(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n]))
      return !1;
  return !0;
}
function Ri(e, t, n, r, l, o) {
  if (Dt = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jr.current = e === null || e.memoizedState === null ? Ad : $d, e = n(r, l), jn) {
    o = 0;
    do {
      if (jn = !1, bn = 0, 25 <= o)
        throw Error(S(301));
      o += 1, oe = ne = null, t.updateQueue = null, jr.current = Bd, e = n(r, l);
    } while (jn);
  }
  if (jr.current = ul, t = ne !== null && ne.next !== null, Dt = 0, oe = ne = G = null, il = !1, t)
    throw Error(S(300));
  return e;
}
function Ii() {
  var e = bn !== 0;
  return bn = 0, e;
}
function We() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? G.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Oe() {
  if (ne === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ne.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null)
    oe = t, ne = e;
  else {
    if (e === null)
      throw Error(S(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, oe === null ? G.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = Oe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ne, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Dt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var v = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = v, i = r) : s = s.next = v, G.lanes |= h, jt |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Ve(r, t.memoizedState) || (we = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, jt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = Oe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ve(o, t.memoizedState) || (we = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ia() {
}
function Oa(e, t) {
  var n = G, r = Oe(), l = t(), o = !Ve(r.memoizedState, l);
  if (o && (r.memoizedState = l, we = !0), r = r.queue, Oi(Fa.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, tr(9, ja.bind(null, n, r, l, t), void 0, null), ie === null)
      throw Error(S(349));
    Dt & 30 || Da(n, t, l);
  }
  return l;
}
function Da(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ja(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ua(t) && Aa(e);
}
function Fa(e, t, n) {
  return n(function() {
    Ua(t) && Aa(e);
  });
}
function Ua(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Aa(e) {
  var t = tt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Fu(e) {
  var t = We();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: er, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ud.bind(null, G, e), [t.memoizedState, e];
}
function tr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $a() {
  return Oe().memoizedState;
}
function Fr(e, t, n, r) {
  var l = We();
  G.flags |= e, l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r);
}
function _l(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (o = i.destroy, r !== null && Ti(r, i.deps)) {
      l.memoizedState = tr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = tr(1 | t, n, o, r);
}
function Uu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Oi(e, t) {
  return _l(2048, 8, e, t);
}
function Ba(e, t) {
  return _l(4, 2, e, t);
}
function Va(e, t) {
  return _l(4, 4, e, t);
}
function Ha(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Wa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _l(4, 4, Ha.bind(null, t, e), n);
}
function Di() {
}
function Qa(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ka(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ya(e, t, n) {
  return Dt & 21 ? (Ve(n, t) || (n = Zs(), G.lanes |= n, jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = n);
}
function jd(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Jl.transition = r;
  }
}
function Xa() {
  return Oe().memoizedState;
}
function Fd(e, t, n) {
  var r = yt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ga(e))
    Za(t, n);
  else if (n = Pa(e, t, n, r), n !== null) {
    var l = ve();
    Be(n, e, r, l), Ja(n, t, r);
  }
}
function Ud(e, t, n) {
  var r = yt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ga(e))
    Za(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, Ve(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Pa(e, t, l, r), n !== null && (l = ve(), Be(n, e, r, l), Ja(n, t, r));
  }
}
function Ga(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Za(e, t) {
  jn = il = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, di(e, n);
  }
}
var ul = { readContext: Ie, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, Ad = { readContext: Ie, useCallback: function(e, t) {
  return We().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: Uu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fr(
    4194308,
    4,
    Ha.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = We();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = We();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fd.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = We();
  return e = { current: e }, t.memoizedState = e;
}, useState: Fu, useDebugValue: Di, useDeferredValue: function(e) {
  return We().memoizedState = e;
}, useTransition: function() {
  var e = Fu(!1), t = e[0];
  return e = jd.bind(null, e[1]), We().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = We();
  if (Y) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ie === null)
      throw Error(S(349));
    Dt & 30 || Da(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Uu(Fa.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, tr(9, ja.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = We(), t = ie.identifierPrefix;
  if (Y) {
    var n = Je, r = Ze;
    n = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Dd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, $d = {
  readContext: Ie,
  useCallback: Qa,
  useContext: Ie,
  useEffect: Oi,
  useImperativeHandle: Wa,
  useInsertionEffect: Ba,
  useLayoutEffect: Va,
  useMemo: Ka,
  useReducer: ql,
  useRef: $a,
  useState: function() {
    return ql(er);
  },
  useDebugValue: Di,
  useDeferredValue: function(e) {
    var t = Oe();
    return Ya(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ql(er)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: Ia,
  useSyncExternalStore: Oa,
  useId: Xa,
  unstable_isNewReconciler: !1
}, Bd = { readContext: Ie, useCallback: Qa, useContext: Ie, useEffect: Oi, useImperativeHandle: Wa, useInsertionEffect: Ba, useLayoutEffect: Va, useMemo: Ka, useReducer: bl, useRef: $a, useState: function() {
  return bl(er);
}, useDebugValue: Di, useDeferredValue: function(e) {
  var t = Oe();
  return ne === null ? t.memoizedState = e : Ya(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = bl(er)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: Ia, useSyncExternalStore: Oa, useId: Xa, unstable_isNewReconciler: !1 };
function pn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function eo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Vd = typeof WeakMap == "function" ? WeakMap : Map;
function qa(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    al || (al = !0, Zo = r), $o(e, t);
  }, n;
}
function ba(e, t, n) {
  n = qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $o(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    $o(e, t), typeof r != "function" && (ht === null ? ht = /* @__PURE__ */ new Set([this]) : ht.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = np.bind(null, e, t, n), t.then(e, e));
}
function $u(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, vt(n, t, 1))), n.lanes |= 1), e);
}
var Hd = rt.ReactCurrentOwner, we = !1;
function me(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : fn(t, e.child, n, r);
}
function Vu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return on(t, l), r = Ri(e, t, n, r, o, l), n = Ii(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (Y && n && Si(t), t.flags |= 1, me(e, t, r, l), t.child);
}
function Hu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Hi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ec(e, t, o, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref)
      return nt(e, t, l);
  }
  return t.flags |= 1, e = gt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ec(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref)
      if (we = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (we = !0);
      else
        return t.lanes = e.lanes, nt(e, t, l);
  }
  return Bo(e, t, n, r, l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(en, _e), _e |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(en, _e), _e |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, W(en, _e), _e |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(en, _e), _e |= r;
  return me(e, t, l, n), t.child;
}
function nc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bo(e, t, n, r, l) {
  var o = ke(n) ? It : pe.current;
  return o = an(t, o), on(t, l), n = Ri(e, t, n, r, o, l), r = Ii(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (Y && r && Si(t), t.flags |= 1, me(e, t, n, l), t.child);
}
function Wu(e, t, n, r, l) {
  if (ke(n)) {
    var o = !0;
    br(t);
  } else
    o = !1;
  if (on(t, l), t.stateNode === null)
    Ur(e, t), La(t, n, r), Ao(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ie(c) : (c = ke(n) ? It : pe.current, c = an(t, c));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    v || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Du(t, i, r, c), it = !1;
    var m = t.memoizedState;
    i.state = m, ll(t, r, i, l), s = t.memoizedState, u !== r || m !== s || Se.current || it ? (typeof h == "function" && (Uo(t, n, h, r), s = t.memoizedState), (u = it || Ou(t, n, u, r, m, s, c)) ? (v || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Na(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Fe(t.type, u), i.props = c, v = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ke(n) ? It : pe.current, s = an(t, s));
    var E = n.getDerivedStateFromProps;
    (h = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== v || m !== s) && Du(t, i, r, s), it = !1, m = t.memoizedState, i.state = m, ll(t, r, i, l);
    var _ = t.memoizedState;
    u !== v || m !== _ || Se.current || it ? (typeof E == "function" && (Uo(t, n, E, r), _ = t.memoizedState), (c = it || Ou(t, n, c, r, m, _, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, _, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, _, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), i.props = r, i.state = _, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vo(e, t, n, r, o, l);
}
function Vo(e, t, n, r, l, o) {
  nc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Lu(t, n, !1), nt(e, t, o);
  r = t.stateNode, Hd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = fn(t, e.child, null, o), t.child = fn(t, null, u, o)) : me(e, t, u, o), t.memoizedState = r.state, l && Lu(t, n, !0), t.child;
}
function rc(e) {
  var t = e.stateNode;
  t.pendingContext ? zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zu(e, t.context, !1), zi(e, t.containerInfo);
}
function Qu(e, t, n, r, l) {
  return cn(), Ei(l), t.flags |= 256, me(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lc(e, t, n) {
  var r = t.pendingProps, l = X.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(X, l & 1), e === null)
    return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Pl(i, r, 0, null), e = Rt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Wo(n), t.memoizedState = Ho, e) : ji(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Wd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = gt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = gt(u, o) : (o = Rt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Wo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ho, r;
  }
  return o = e.child, e = o.sibling, r = gt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ji(e, t) {
  return t = Pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xr(e, t, n, r) {
  return r !== null && Ei(r), fn(t, e.child, null, n), e = ji(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Wd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = eo(Error(S(422))), xr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Pl({ mode: "visible", children: r.children }, l, 0, null), o = Rt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && fn(t, e.child, null, i), t.child.memoizedState = Wo(i), t.memoizedState = Ho, o);
  if (!(t.mode & 1))
    return xr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = eo(o, r, void 0), xr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, we || u) {
    if (r = ie, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tt(e, l), Be(r, e, l, -1));
    }
    return Vi(), r = eo(Error(S(421))), xr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, xe = mt(l.nextSibling), Ce = t, Y = !0, Ae = null, e !== null && (Le[Me++] = Ze, Le[Me++] = Je, Le[Me++] = Ot, Ze = e.id, Je = e.overflow, Ot = t), t = ji(t, r.children), t.flags |= 4096, t);
}
function Ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function to(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function oc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (me(e, t, r.children, n), r = X.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ku(e, n, t);
          else if (e.tag === 19)
            Ku(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (W(X, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && ol(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ol(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        to(t, !0, n, null, o);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Qd(e, t, n) {
  switch (t.tag) {
    case 3:
      rc(t), cn();
      break;
    case 5:
      Ra(t);
      break;
    case 1:
      ke(t.type) && br(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      W(nl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lc(e, t, n) : (W(X, X.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, tc(e, t, n);
  }
  return nt(e, t, n);
}
var ic, Qo, uc, sc;
ic = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Qo = function() {
};
uc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Ye.current);
    var o = null;
    switch (n) {
      case "input":
        l = po(e, l), r = po(e, r), o = [];
        break;
      case "select":
        l = Z({}, l, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
    }
    go(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && ($n.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && ($n.hasOwnProperty(c) ? (s != null && c === "onScroll" && Q("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
sc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Kd(e, t, n) {
  var r = t.pendingProps;
  switch (ki(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return ke(t.type) && qr(), fe(t), null;
    case 3:
      return r = t.stateNode, dn(), K(Se), K(pe), Mi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Er(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ae !== null && (bo(Ae), Ae = null))), Qo(e, t), fe(t), null;
    case 5:
      Li(t);
      var l = Mt(qn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        uc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return fe(t), null;
        }
        if (e = Mt(Ye.current), Er(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Qe] = t, r[Zn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++)
                Q(Mn[l], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q(
                "error",
                r
              ), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              tu(r, o), Q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Q("invalid", r);
              break;
            case "textarea":
              ru(r, o), Q("invalid", r);
          }
          go(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && kr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && kr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : $n.hasOwnProperty(i) && u != null && i === "onScroll" && Q("scroll", r);
            }
          switch (n) {
            case "input":
              pr(r), nu(r, o, !0);
              break;
            case "textarea":
              pr(r), lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ds(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Qe] = t, e[Zn] = r, ic(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = wo(n, r), n) {
              case "dialog":
                Q("cancel", e), Q("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++)
                  Q(Mn[l], e);
                l = r;
                break;
              case "source":
                Q("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  e
                ), Q("load", e), l = r;
                break;
              case "details":
                Q("toggle", e), l = r;
                break;
              case "input":
                tu(e, r), l = po(e, r), Q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Z({}, r, { value: void 0 }), Q("invalid", e);
                break;
              case "textarea":
                ru(e, r), l = ho(e, r), Q("invalid", e);
                break;
              default:
                l = r;
            }
            go(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Us(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && js(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Bn(e, s) : typeof s == "number" && Bn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($n.hasOwnProperty(o) ? s != null && o === "onScroll" && Q("scroll", e) : s != null && ii(e, o, s, i));
              }
            switch (n) {
              case "input":
                pr(e), nu(e, r, !1);
                break;
              case "textarea":
                pr(e), lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? tn(e, !!r.multiple, o, !1) : r.defaultValue != null && tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null)
        sc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Mt(qn.current), Mt(Ye.current), Er(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Qe] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null))
            switch (e.tag) {
              case 3:
                kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qe] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (K(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && xe !== null && t.mode & 1 && !(t.flags & 128))
          Ca(), cn(), t.flags |= 98560, o = !1;
        else if (o = Er(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[Qe] = t;
          } else
            cn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else
          Ae !== null && (bo(Ae), Ae = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? re === 0 && (re = 3) : Vi())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return dn(), Qo(e, t), e === null && Xn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Ci(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && qr(), fe(t), null;
    case 19:
      if (K(X), o = t.memoizedState, o === null)
        return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          xn(o, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = ol(e), i !== null) {
                for (t.flags |= 128, xn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return W(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && b() > mn && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ol(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !Y)
              return fe(t), null;
          } else
            2 * b() - o.renderingStartTime > mn && n !== 1073741824 && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = X.current, W(X, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Bi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Yd(e, t) {
  switch (ki(t), t.tag) {
    case 1:
      return ke(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dn(), K(Se), K(pe), Mi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Li(t), null;
    case 13:
      if (K(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        cn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(X), null;
    case 4:
      return dn(), null;
    case 10:
      return Ci(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1, de = !1, Xd = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else
      n.current = null;
}
function Ko(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Yu = !1;
function Gd(e, t) {
  if (Lo = Xr, e = da(), wi(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, c = 0, h = 0, v = e, m = null;
          t:
            for (; ; ) {
              for (var E; v !== n || l !== 0 && v.nodeType !== 3 || (u = i + l), v !== o || r !== 0 && v.nodeType !== 3 || (s = i + r), v.nodeType === 3 && (i += v.nodeValue.length), (E = v.firstChild) !== null; )
                m = v, v = E;
              for (; ; ) {
                if (v === e)
                  break t;
                if (m === n && ++c === l && (u = i), m === o && ++h === r && (s = i), (E = v.nextSibling) !== null)
                  break;
                v = m, m = v.parentNode;
              }
              v = E;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Mo = { focusedElem: e, selectionRange: n }, Xr = !1, T = t; T !== null; )
    if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, T = e;
    else
      for (; T !== null; ) {
        t = T;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var C = _.memoizedProps, $ = _.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Fe(t.type, C), $);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          J(t, t.return, y);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, T = e;
          break;
        }
        T = t.return;
      }
  return _ = Yu, Yu = !1, _;
}
function Fn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ko(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function ac(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ac(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qe], delete t[Zn], delete t[Io], delete t[Td], delete t[Rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cc(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; )
      Xo(e, t, n), e = e.sibling;
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; )
      Go(e, t, n), e = e.sibling;
}
var ue = null, Ue = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; )
    fc(e, t, n), n = n.sibling;
}
function fc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(hl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      de || bt(n, t);
    case 6:
      var r = ue, l = Ue;
      ue = null, lt(e, t, n), ue = r, Ue = l, ue !== null && (Ue ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ue ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), Qn(e)) : Xl(ue, n.stateNode));
      break;
    case 4:
      r = ue, l = Ue, ue = n.stateNode.containerInfo, Ue = !0, lt(e, t, n), ue = r, Ue = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ko(n, t, i), l = l.next;
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (!de && (bt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          J(n, t, u);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, lt(e, t, n), de = r) : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xd()), t.forEach(function(r) {
      var l = lp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ue = u.stateNode, Ue = !1;
                break e;
              case 3:
                ue = u.stateNode.containerInfo, Ue = !0;
                break e;
              case 4:
                ue = u.stateNode.containerInfo, Ue = !0;
                break e;
            }
            u = u.return;
          }
        if (ue === null)
          throw Error(S(160));
        fc(o, i, l), ue = null, Ue = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        J(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      dc(t, e), t = t.sibling;
}
function dc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (De(t, e), He(e), r & 4) {
        try {
          Fn(3, e, e.return), xl(3, e);
        } catch (C) {
          J(e, e.return, C);
        }
        try {
          Fn(5, e, e.return);
        } catch (C) {
          J(e, e.return, C);
        }
      }
      break;
    case 1:
      De(t, e), He(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (De(t, e), He(e), r & 512 && n !== null && bt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (C) {
          J(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Is(l, o), wo(u, i);
            var c = wo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], v = s[i + 1];
              h === "style" ? Us(l, v) : h === "dangerouslySetInnerHTML" ? js(l, v) : h === "children" ? Bn(l, v) : ii(l, h, v, c);
            }
            switch (u) {
              case "input":
                mo(l, o);
                break;
              case "textarea":
                Os(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? tn(l, !!o.multiple, E, !1) : m !== !!o.multiple && (o.defaultValue != null ? tn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Zn] = o;
          } catch (C) {
            J(e, e.return, C);
          }
      }
      break;
    case 6:
      if (De(t, e), He(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (C) {
          J(e, e.return, C);
        }
      }
      break;
    case 3:
      if (De(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Qn(t.containerInfo);
        } catch (C) {
          J(e, e.return, C);
        }
      break;
    case 4:
      De(t, e), He(e);
      break;
    case 13:
      De(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ai = b())), r & 4 && Gu(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (c = de) || h, De(t, e), de = c) : De(t, e), He(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1)
          for (T = e, h = e.child; h !== null; ) {
            for (v = T = h; T !== null; ) {
              switch (m = T, E = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, m, m.return);
                  break;
                case 1:
                  bt(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                    } catch (C) {
                      J(r, n, C);
                    }
                  }
                  break;
                case 5:
                  bt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ju(v);
                    continue;
                  }
              }
              E !== null ? (E.return = m, T = E) : Ju(v);
            }
            h = h.sibling;
          }
        e:
          for (h = null, v = e; ; ) {
            if (v.tag === 5) {
              if (h === null) {
                h = v;
                try {
                  l = v.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode, s = v.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Fs("display", i));
                } catch (C) {
                  J(e, e.return, C);
                }
              }
            } else if (v.tag === 6) {
              if (h === null)
                try {
                  v.stateNode.nodeValue = c ? "" : v.memoizedProps;
                } catch (C) {
                  J(e, e.return, C);
                }
            } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
              v.child.return = v, v = v.child;
              continue;
            }
            if (v === e)
              break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e)
                break e;
              h === v && (h = null), v = v.return;
            }
            h === v && (h = null), v.sibling.return = v.return, v = v.sibling;
          }
      }
      break;
    case 19:
      De(t, e), He(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      De(
        t,
        e
      ), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), r.flags &= -33);
          var o = Xu(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Xu(e);
          Xo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      J(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zd(e, t, n) {
  T = e, pc(e);
}
function pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || de;
        u = Cr;
        var c = de;
        if (Cr = i, (de = s) && !c)
          for (T = l; T !== null; )
            i = T, s = i.child, i.tag === 22 && i.memoizedState !== null ? qu(l) : s !== null ? (s.return = i, T = s) : qu(l);
        for (; o !== null; )
          T = o, pc(o), o = o.sibling;
        T = l, Cr = u, de = c;
      }
      Zu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : Zu(e);
  }
}
function Zu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Iu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Iu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Qn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        de || t.flags & 512 && Yo(t);
      } catch (m) {
        J(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Ju(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function qu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
          } catch (s) {
            J(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              J(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var Jd = Math.ceil, sl = rt.ReactCurrentDispatcher, Fi = rt.ReactCurrentOwner, Re = rt.ReactCurrentBatchConfig, U = 0, ie = null, ee = null, se = 0, _e = 0, en = Et(0), re = 0, nr = null, jt = 0, Cl = 0, Ui = 0, Un = null, ge = null, Ai = 0, mn = 1 / 0, Xe = null, al = !1, Zo = null, ht = null, Pr = !1, ct = null, cl = 0, An = 0, Jo = null, Ar = -1, $r = 0;
function ve() {
  return U & 6 ? b() : Ar !== -1 ? Ar : Ar = b();
}
function yt(e) {
  return e.mode & 1 ? U & 2 && se !== 0 ? se & -se : Od.transition !== null ? ($r === 0 && ($r = Zs()), $r) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ra(e.type)), e) : 1;
}
function Be(e, t, n, r) {
  if (50 < An)
    throw An = 0, Jo = null, Error(S(185));
  or(e, n, r), (!(U & 2) || e !== ie) && (e === ie && (!(U & 2) && (Cl |= n), re === 4 && st(e, se)), Ee(e, r), n === 1 && U === 0 && !(t.mode & 1) && (mn = b() + 500, kl && _t()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = Yr(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && uu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && uu(n), t === 1)
      e.tag === 0 ? Id(bu.bind(null, e)) : Ea(bu.bind(null, e)), Ld(function() {
        !(U & 6) && _t();
      }), n = null;
    else {
      switch (Js(r)) {
        case 1:
          n = fi;
          break;
        case 4:
          n = Xs;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Gs;
          break;
        default:
          n = Kr;
      }
      n = kc(n, mc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function mc(e, t) {
  if (Ar = -1, $r = 0, U & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n)
    return null;
  var r = Yr(e, e === ie ? se : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = fl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = hc();
    (ie !== e || se !== t) && (Xe = null, mn = b() + 500, Tt(e, t));
    do
      try {
        ep();
        break;
      } catch (u) {
        vc(e, u);
      }
    while (!0);
    xi(), sl.current = o, U = l, ee !== null ? t = 0 : (ie = null, se = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (l = xo(e), l !== 0 && (r = l, t = qo(e, l))), t === 1)
      throw n = nr, Tt(e, 0), st(e, r), Ee(e, b()), n;
    if (t === 6)
      st(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !qd(l) && (t = fl(e, r), t === 2 && (o = xo(e), o !== 0 && (r = o, t = qo(e, o))), t === 1))
        throw n = nr, Tt(e, 0), st(e, r), Ee(e, b()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nt(e, ge, Xe);
          break;
        case 3:
          if (st(e, r), (r & 130023424) === r && (t = Ai + 500 - b(), 10 < t)) {
            if (Yr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ro(Nt.bind(null, e, ge, Xe), t);
            break;
          }
          Nt(e, ge, Xe);
          break;
        case 4:
          if (st(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ro(Nt.bind(null, e, ge, Xe), r);
            break;
          }
          Nt(e, ge, Xe);
          break;
        case 5:
          Nt(e, ge, Xe);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, b()), e.callbackNode === n ? mc.bind(null, e) : null;
}
function qo(e, t) {
  var n = Un;
  return e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = ge, ge = n, t !== null && bo(t)), e;
}
function bo(e) {
  ge === null ? ge = e : ge.push.apply(ge, e);
}
function qd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ve(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function st(e, t) {
  for (t &= ~Ui, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $e(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function bu(e) {
  if (U & 6)
    throw Error(S(327));
  un();
  var t = Yr(e, 0);
  if (!(t & 1))
    return Ee(e, b()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xo(e);
    r !== 0 && (t = r, n = qo(e, r));
  }
  if (n === 1)
    throw n = nr, Tt(e, 0), st(e, t), Ee(e, b()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nt(e, ge, Xe), Ee(e, b()), null;
}
function $i(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (mn = b() + 500, kl && _t());
  }
}
function Ft(e) {
  ct !== null && ct.tag === 0 && !(U & 6) && un();
  var t = U;
  U |= 1;
  var n = Re.transition, r = B;
  try {
    if (Re.transition = null, B = 1, e)
      return e();
  } finally {
    B = r, Re.transition = n, U = t, !(U & 6) && _t();
  }
}
function Bi() {
  _e = en.current, K(en);
}
function Tt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zd(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch (ki(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && qr();
          break;
        case 3:
          dn(), K(Se), K(pe), Mi();
          break;
        case 5:
          Li(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          Ci(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (ie = e, ee = e = gt(e.current, null), se = _e = t, re = 0, nr = null, Ui = Cl = jt = 0, ge = Un = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++)
      if (n = Lt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function vc(e, t) {
  do {
    var n = ee;
    try {
      if (xi(), jr.current = ul, il) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        il = !1;
      }
      if (Dt = 0, oe = ne = G = null, jn = !1, bn = 0, Fi.current = null, n === null || n.return === null) {
        re = 1, nr = t, ee = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = se, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var E = $u(i);
          if (E !== null) {
            E.flags &= -257, Bu(E, i, u, o, t), E.mode & 1 && Au(o, c, t), t = E, s = c;
            var _ = t.updateQueue;
            if (_ === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(s), t.updateQueue = C;
            } else
              _.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, c, t), Vi();
              break e;
            }
            s = Error(S(426));
          }
        } else if (Y && u.mode & 1) {
          var $ = $u(i);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256), Bu($, i, u, o, t), Ei(pn(s, u));
            break e;
          }
        }
        o = s = pn(s, u), re !== 4 && (re = 2), Un === null ? Un = [o] : Un.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = qa(o, s, t);
              Ru(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ht === null || !ht.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = ba(o, u, t);
                Ru(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gc(n);
    } catch (x) {
      t = x, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hc() {
  var e = sl.current;
  return sl.current = ul, e === null ? ul : e;
}
function Vi() {
  (re === 0 || re === 3 || re === 2) && (re = 4), ie === null || !(jt & 268435455) && !(Cl & 268435455) || st(ie, se);
}
function fl(e, t) {
  var n = U;
  U |= 2;
  var r = hc();
  (ie !== e || se !== t) && (Xe = null, Tt(e, t));
  do
    try {
      bd();
      break;
    } catch (l) {
      vc(e, l);
    }
  while (!0);
  if (xi(), U = n, sl.current = r, ee !== null)
    throw Error(S(261));
  return ie = null, se = 0, re;
}
function bd() {
  for (; ee !== null; )
    yc(ee);
}
function ep() {
  for (; ee !== null && !Cf(); )
    yc(ee);
}
function yc(e) {
  var t = Sc(e.alternate, e, _e);
  e.memoizedProps = e.pendingProps, t === null ? gc(e) : ee = t, Fi.current = null;
}
function gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Yd(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, ee = null;
        return;
      }
    } else if (n = Kd(n, t, _e), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Nt(e, t, n) {
  var r = B, l = Re.transition;
  try {
    Re.transition = null, B = 1, tp(e, t, n, r);
  } finally {
    Re.transition = l, B = r;
  }
  return null;
}
function tp(e, t, n, r) {
  do
    un();
  while (ct !== null);
  if (U & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Df(e, o), e === ie && (ee = ie = null, se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, kc(Kr, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = B;
    B = 1;
    var u = U;
    U |= 4, Fi.current = null, Gd(e, n), dc(n, e), kd(Mo), Xr = !!Lo, Mo = Lo = null, e.current = n, Zd(n), Pf(), U = u, B = i, Re.transition = o;
  } else
    e.current = n;
  if (Pr && (Pr = !1, ct = e, cl = l), o = e.pendingLanes, o === 0 && (ht = null), Lf(n.stateNode), Ee(e, b()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al)
    throw al = !1, e = Zo, Zo = null, e;
  return cl & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Jo ? An++ : (An = 0, Jo = e) : An = 0, _t(), null;
}
function un() {
  if (ct !== null) {
    var e = Js(cl), t = Re.transition, n = B;
    try {
      if (Re.transition = null, B = 16 > e ? 16 : e, ct === null)
        var r = !1;
      else {
        if (e = ct, ct = null, cl = 0, U & 6)
          throw Error(S(331));
        var l = U;
        for (U |= 4, T = e.current; T !== null; ) {
          var o = T, i = o.child;
          if (T.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (T = c; T !== null; ) {
                  var h = T;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, h, o);
                  }
                  var v = h.child;
                  if (v !== null)
                    v.return = h, T = v;
                  else
                    for (; T !== null; ) {
                      h = T;
                      var m = h.sibling, E = h.return;
                      if (ac(h), h === c) {
                        T = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = E, T = m;
                        break;
                      }
                      T = E;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var C = _.child;
                if (C !== null) {
                  _.child = null;
                  do {
                    var $ = C.sibling;
                    C.sibling = null, C = $;
                  } while (C !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, T = i;
          else
            e:
              for (; T !== null; ) {
                if (o = T, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, T = f;
                  break e;
                }
                T = o.return;
              }
        }
        var a = e.current;
        for (T = a; T !== null; ) {
          i = T;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, T = d;
          else
            e:
              for (i = a; T !== null; ) {
                if (u = T, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xl(9, u);
                    }
                  } catch (x) {
                    J(u, u.return, x);
                  }
                if (u === i) {
                  T = null;
                  break e;
                }
                var y = u.sibling;
                if (y !== null) {
                  y.return = u.return, T = y;
                  break e;
                }
                T = u.return;
              }
        }
        if (U = l, _t(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
          try {
            Ke.onPostCommitFiberRoot(hl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      B = n, Re.transition = t;
    }
  }
  return !1;
}
function es(e, t, n) {
  t = pn(n, t), t = qa(e, t, 1), e = vt(e, t, 1), t = ve(), e !== null && (or(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3)
    es(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        es(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
          e = pn(n, e), e = ba(t, e, 1), t = vt(t, e, 1), e = ve(), t !== null && (or(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function np(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (se & n) === n && (re === 4 || re === 3 && (se & 130023424) === se && 500 > b() - Ai ? Tt(e, 0) : Ui |= n), Ee(e, t);
}
function wc(e, t) {
  t === 0 && (e.mode & 1 ? (t = hr, hr <<= 1, !(hr & 130023424) && (hr = 4194304)) : t = 1);
  var n = ve();
  e = tt(e, t), e !== null && (or(e, t, n), Ee(e, n));
}
function rp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), wc(e, n);
}
function lp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), wc(e, n);
}
var Sc;
Sc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current)
      we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return we = !1, Qd(e, t, n);
      we = !!(e.flags & 131072);
    }
  else
    we = !1, Y && t.flags & 1048576 && _a(t, tl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ur(e, t), e = t.pendingProps;
      var l = an(t, pe.current);
      on(t, n), l = Ri(null, t, r, e, l, n);
      var o = Ii();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, br(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ni(t), l.updater = El, t.stateNode = l, l._reactInternals = t, Ao(t, r, e, n), t = Vo(null, t, r, !0, o, n)) : (t.tag = 0, Y && o && Si(t), me(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ur(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = ip(r), e = Fe(r, e), l) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = Wu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Hu(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Bo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Wu(e, t, r, l, n);
    case 3:
      e: {
        if (rc(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Na(e, t), ll(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = pn(Error(S(423)), t), t = Qu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = pn(Error(S(424)), t), t = Qu(e, t, r, n, l);
            break e;
          } else
            for (xe = mt(t.stateNode.containerInfo.firstChild), Ce = t, Y = !0, Ae = null, n = Ta(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (cn(), r === l) {
            t = nt(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ra(t), e === null && jo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, To(r, l) ? i = null : o !== null && To(r, o) && (t.flags |= 32), nc(e, t), me(e, t, i, n), t.child;
    case 6:
      return e === null && jo(t), null;
    case 13:
      return lc(e, t, n);
    case 4:
      return zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fn(t, null, r, n) : me(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Vu(e, t, r, l, n);
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, W(nl, r._currentValue), r._currentValue = i, o !== null)
          if (Ve(o.value, i)) {
            if (o.children === l.children && !Se.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = qe(-1, n & -n), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Fo(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(S(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fo(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        me(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, on(t, n), l = Ie(l), r = r(l), t.flags |= 1, me(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Fe(r, t.pendingProps), l = Fe(r.type, l), Hu(e, t, r, l, n);
    case 15:
      return ec(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Ur(e, t), t.tag = 1, ke(r) ? (e = !0, br(t)) : e = !1, on(t, n), La(t, r, l), Ao(t, r, l, n), Vo(null, t, r, !0, e, n);
    case 19:
      return oc(e, t, n);
    case 22:
      return tc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function kc(e, t) {
  return Ys(e, t);
}
function op(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Te(e, t, n, r) {
  return new op(e, t, n, r);
}
function Hi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ip(e) {
  if (typeof e == "function")
    return Hi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === si)
      return 11;
    if (e === ai)
      return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Br(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Hi(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Wt:
          return Rt(n.children, l, o, t);
        case ui:
          i = 8, l |= 8;
          break;
        case so:
          return e = Te(12, n, t, l | 2), e.elementType = so, e.lanes = o, e;
        case ao:
          return e = Te(13, n, t, l), e.elementType = ao, e.lanes = o, e;
        case co:
          return e = Te(19, n, t, l), e.elementType = co, e.lanes = o, e;
        case Ms:
          return Pl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case zs:
                i = 10;
                break e;
              case Ls:
                i = 9;
                break e;
              case si:
                i = 11;
                break e;
              case ai:
                i = 14;
                break e;
              case ot:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Te(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Rt(e, t, n, r) {
  return e = Te(7, e, r, t), e.lanes = n, e;
}
function Pl(e, t, n, r) {
  return e = Te(22, e, r, t), e.elementType = Ms, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function no(e, t, n) {
  return e = Te(6, e, null, t), e.lanes = n, e;
}
function ro(e, t, n) {
  return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function up(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Wi(e, t, n, r, l, o, i, u, s) {
  return e = new up(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Te(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ni(o), e;
}
function sp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ec(e) {
  if (!e)
    return St;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1)
      throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n))
      return ka(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, o, i, u, s) {
  return e = Wi(n, r, !0, e, l, o, i, u, s), e.context = Ec(null), n = e.current, r = ve(), l = yt(n), o = qe(r, l), o.callback = t ?? null, vt(n, o, l), e.current.lanes = l, or(e, l, r), Ee(e, r), e;
}
function Nl(e, t, n, r) {
  var l = t.current, o = ve(), i = yt(l);
  return n = Ec(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vt(l, t, i), e !== null && (Be(e, l, i, o), Dr(e, l, i)), i;
}
function dl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ts(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qi(e, t) {
  ts(e, t), (e = e.alternate) && ts(e, t);
}
function ap() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ki(e) {
  this._internalRoot = e;
}
zl.prototype.render = Ki.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  Nl(e, t, null, null);
};
zl.prototype.unmount = Ki.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ft(function() {
      Nl(null, e, null, null);
    }), t[et] = null;
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ea();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++)
      ;
    ut.splice(n, 0, e), n === 0 && na(e);
  }
};
function Yi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ll(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ns() {
}
function cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = dl(i);
        o.call(c);
      };
    }
    var i = _c(t, r, e, 0, null, !1, !1, "", ns);
    return e._reactRootContainer = i, e[et] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ft(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = dl(s);
      u.call(c);
    };
  }
  var s = Wi(e, 0, !1, null, null, !1, !1, "", ns);
  return e._reactRootContainer = s, e[et] = s.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ft(function() {
    Nl(t, s, n, r);
  }), s;
}
function Ml(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = dl(i);
        u.call(s);
      };
    }
    Nl(t, i, e, l);
  } else
    i = cp(n, t, e, l, r);
  return dl(i);
}
qs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 && (di(t, n | 1), Ee(t, b()), !(U & 6) && (mn = b() + 500, _t()));
      }
      break;
    case 13:
      Ft(function() {
        var r = tt(e, 1);
        if (r !== null) {
          var l = ve();
          Be(r, e, 1, l);
        }
      }), Qi(e, 1);
  }
};
pi = function(e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Be(t, e, 134217728, n);
    }
    Qi(e, 134217728);
  }
};
bs = function(e) {
  if (e.tag === 13) {
    var t = yt(e), n = tt(e, t);
    if (n !== null) {
      var r = ve();
      Be(n, e, t, r);
    }
    Qi(e, t);
  }
};
ea = function() {
  return B;
};
ta = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
ko = function(e, t, n) {
  switch (t) {
    case "input":
      if (mo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l)
              throw Error(S(90));
            Rs(r), mo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Os(e, n);
      break;
    case "select":
      t = n.value, t != null && tn(e, !!n.multiple, t, !1);
  }
};
Bs = $i;
Vs = Ft;
var fp = { usingClientEntryPoint: !1, Events: [ur, Xt, Sl, As, $s, $i] }, Cn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, dp = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || ap, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber)
    try {
      hl = Nr.inject(dp), Ke = Nr;
    } catch {
    }
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
Ne.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yi(t))
    throw Error(S(200));
  return sp(e, t, null, n);
};
Ne.createRoot = function(e, t) {
  if (!Yi(e))
    throw Error(S(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wi(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Ki(t);
};
Ne.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Qs(t), e = e === null ? null : e.stateNode, e;
};
Ne.flushSync = function(e) {
  return Ft(e);
};
Ne.hydrate = function(e, t, n) {
  if (!Ll(t))
    throw Error(S(200));
  return Ml(null, e, t, !0, n);
};
Ne.hydrateRoot = function(e, t, n) {
  if (!Yi(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = _c(t, null, e, 1, n ?? null, l, !1, o, i), e[et] = t.current, Xn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new zl(t);
};
Ne.render = function(e, t, n) {
  if (!Ll(t))
    throw Error(S(200));
  return Ml(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function(e) {
  if (!Ll(e))
    throw Error(S(40));
  return e._reactRootContainer ? (Ft(function() {
    Ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[et] = null;
    });
  }), !0) : !1;
};
Ne.unstable_batchedUpdates = $i;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ll(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return Ml(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Cc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cc);
    } catch (e) {
      console.error(e);
    }
}
Cc(), _s.exports = Ne;
var Pc = _s.exports, Vr = typeof document < "u" ? A.useLayoutEffect : A.useEffect;
function pl(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, l;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!pl(e[r], t[r]))
          return !1;
      return !0;
    }
    if (l = Object.keys(e), n = l.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, l[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = l[r];
      if (!(o === "_owner" && e.$$typeof) && !pl(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Nc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rs(e, t) {
  const n = Nc(e);
  return Math.round(t * n) / n;
}
function ls(e) {
  const t = A.useRef(e);
  return Vr(() => {
    t.current = e;
  }), t;
}
function zc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: l,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: u = !0,
    whileElementsMounted: s,
    open: c
  } = e, [h, v] = A.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, E] = A.useState(r);
  pl(m, r) || E(r);
  const [_, C] = A.useState(null), [$, f] = A.useState(null), a = A.useCallback((D) => {
    D !== P.current && (P.current = D, C(D));
  }, []), d = A.useCallback((D) => {
    D !== L.current && (L.current = D, f(D));
  }, []), y = o || _, x = i || $, P = A.useRef(null), L = A.useRef(null), p = A.useRef(h), k = s != null, w = ls(s), z = ls(l), R = A.useCallback(() => {
    if (!P.current || !L.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: m
    };
    z.current && (D.platform = z.current), Oc(P.current, L.current, D).then((g) => {
      const M = {
        ...g,
        isPositioned: !0
      };
      O.current && !pl(p.current, M) && (p.current = M, Pc.flushSync(() => {
        v(M);
      }));
    });
  }, [m, t, n, z]);
  Vr(() => {
    c === !1 && p.current.isPositioned && (p.current.isPositioned = !1, v((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [c]);
  const O = A.useRef(!1);
  Vr(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Vr(() => {
    if (y && (P.current = y), x && (L.current = x), y && x) {
      if (w.current)
        return w.current(y, x, R);
      R();
    }
  }, [y, x, R, w, k]);
  const N = A.useMemo(() => ({
    reference: P,
    floating: L,
    setReference: a,
    setFloating: d
  }), [a, d]), I = A.useMemo(() => ({
    reference: y,
    floating: x
  }), [y, x]), V = A.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return D;
    const g = rs(I.floating, h.x), M = rs(I.floating, h.y);
    return u ? {
      ...D,
      transform: "translate(" + g + "px, " + M + "px)",
      ...Nc(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: g,
      top: M
    };
  }, [n, u, I.floating, h.x, h.y]);
  return A.useMemo(() => ({
    ...h,
    update: R,
    refs: N,
    elements: I,
    floatingStyles: V
  }), [h, R, N, I, V]);
}
var te = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let pp = 0;
function Lc(e, t) {
  const n = `atom${++pp}`, r = {
    toString: () => n
  };
  return typeof e == "function" ? r.read = e : (r.init = e, r.read = mp, r.write = vp), r;
}
function mp(e) {
  return e(this);
}
function vp(e, t, n) {
  return t(
    this,
    typeof n == "function" ? n(e(this)) : n
  );
}
const zr = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e, lo = (e) => "init" in e, oo = (e) => !!e.write, ml = /* @__PURE__ */ new WeakMap(), hp = (e, t) => {
  ml.set(e, t), e.catch(() => {
  }).finally(() => ml.delete(e));
}, os = (e, t) => {
  const n = ml.get(e);
  n && (ml.delete(e), n(t));
}, is = (e, t) => {
  e.status = "fulfilled", e.value = t;
}, us = (e, t) => {
  e.status = "rejected", e.reason = t;
}, yp = (e) => typeof (e == null ? void 0 : e.then) == "function", Pn = (e, t) => !!e && "v" in e && "v" in t && Object.is(e.v, t.v), ss = (e, t) => !!e && "e" in e && "e" in t && Object.is(e.e, t.e), Vt = (e) => !!e && "v" in e && e.v instanceof Promise, gp = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig, Lr = (e) => {
  if ("e" in e)
    throw e.e;
  return e.v;
}, wp = () => {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Map();
  let r, l;
  (te ? "production" : void 0) !== "production" && (r = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set());
  const o = (p) => e.get(p), i = (p, k) => {
    (te ? "production" : void 0) !== "production" && Object.freeze(k);
    const w = e.get(p);
    if (e.set(p, k), n.has(p) || n.set(p, w), Vt(w)) {
      const z = "v" in k ? k.v instanceof Promise ? k.v : Promise.resolve(k.v) : Promise.reject(k.e);
      w.v !== z && os(w.v, z);
    }
  }, u = (p, k, w, z) => {
    const R = new Map(
      z ? k.d : null
    );
    let O = !1;
    w.forEach((N, I) => {
      !N && zr(p, I) && (N = k), N ? (R.set(I, N), k.d.get(I) !== N && (O = !0)) : (te ? "production" : void 0) !== "production" && console.warn("[Bug] atom state not found");
    }), (O || k.d.size !== R.size) && (k.d = R);
  }, s = (p, k, w, z) => {
    const R = o(p), O = {
      d: (R == null ? void 0 : R.d) || /* @__PURE__ */ new Map(),
      v: k
    };
    if (w && u(
      p,
      O,
      w,
      z
    ), Pn(R, O) && R.d === O.d)
      return R;
    if (Vt(R) && Vt(O) && gp(R, O)) {
      if (R.d === O.d)
        return R;
      O.v = R.v;
    }
    return i(p, O), O;
  }, c = (p, k, w, z) => {
    if (yp(k)) {
      let R;
      const O = () => {
        const I = o(p);
        if (!Vt(I) || I.v !== N)
          return;
        const V = s(
          p,
          N,
          w
        );
        t.has(p) && I.d !== V.d && x(p, V, I.d);
      }, N = new Promise((I, V) => {
        let D = !1;
        k.then(
          (g) => {
            D || (D = !0, is(N, g), I(g), O());
          },
          (g) => {
            D || (D = !0, us(N, g), V(g), O());
          }
        ), R = (g) => {
          D || (D = !0, g.then(
            (M) => is(N, M),
            (M) => us(N, M)
          ), I(g));
        };
      });
      return N.orig = k, N.status = "pending", hp(N, (I) => {
        I && R(I), z == null || z();
      }), s(p, N, w, !0);
    }
    return s(p, k, w);
  }, h = (p, k, w) => {
    const z = o(p), R = {
      d: (z == null ? void 0 : z.d) || /* @__PURE__ */ new Map(),
      e: k
    };
    return w && u(p, R, w), ss(z, R) && z.d === R.d ? z : (i(p, R), R);
  }, v = (p, k) => {
    const w = o(p);
    if (!k && w && (t.has(p) || Array.from(w.d).every(([D, g]) => {
      if (zr(p, D))
        return !0;
      const M = v(D);
      return M === g || Pn(M, g);
    })))
      return w;
    const z = /* @__PURE__ */ new Map();
    let R = !0;
    const O = (D) => {
      if (zr(p, D)) {
        const M = o(D);
        if (M)
          return z.set(D, M), Lr(M);
        if (lo(D))
          return z.set(D, void 0), D.init;
        throw new Error("no atom init");
      }
      const g = v(D);
      return z.set(D, g), Lr(g);
    };
    let N, I;
    const V = {
      get signal() {
        return N || (N = new AbortController()), N.signal;
      },
      get setSelf() {
        return (te ? "production" : void 0) !== "production" && !oo(p) && console.warn("setSelf function cannot be used with read-only atom"), !I && oo(p) && (I = (...D) => {
          if ((te ? "production" : void 0) !== "production" && R && console.warn("setSelf function cannot be called in sync"), !R)
            return a(p, ...D);
        }), I;
      }
    };
    try {
      const D = p.read(O, V);
      return c(
        p,
        D,
        z,
        () => N == null ? void 0 : N.abort()
      );
    } catch (D) {
      return h(p, D, z);
    } finally {
      R = !1;
    }
  }, m = (p) => Lr(v(p)), E = (p) => {
    let k = t.get(p);
    return k || (k = d(p)), k;
  }, _ = (p, k) => !k.l.size && (!k.t.size || k.t.size === 1 && k.t.has(p)), C = (p) => {
    const k = t.get(p);
    k && _(p, k) && y(p);
  }, $ = (p) => {
    const k = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new WeakMap(), z = (N) => {
      var I;
      const V = new Set((I = t.get(N)) == null ? void 0 : I.t);
      return n.forEach((D, g) => {
        var M;
        (M = o(g)) != null && M.d.has(N) && V.add(g);
      }), V;
    }, R = (N) => {
      z(N).forEach((I) => {
        I !== N && (k.set(
          I,
          (k.get(I) || /* @__PURE__ */ new Set()).add(N)
        ), w.set(I, (w.get(I) || 0) + 1), R(I));
      });
    };
    R(p);
    const O = (N) => {
      z(N).forEach((I) => {
        var V;
        if (I !== N) {
          let D = w.get(I);
          if (D && w.set(I, --D), !D) {
            let g = !!((V = k.get(I)) != null && V.size);
            if (g) {
              const M = o(I), j = v(I, !0);
              g = !Pn(M, j);
            }
            g || k.forEach((M) => M.delete(I));
          }
          O(I);
        }
      });
    };
    O(p);
  }, f = (p, ...k) => {
    let w = !0;
    const z = (N) => Lr(v(N)), R = (N, ...I) => {
      let V;
      if (zr(p, N)) {
        if (!lo(N))
          throw new Error("atom not writable");
        const D = o(N), g = c(N, I[0]);
        Pn(D, g) || $(N);
      } else
        V = f(N, ...I);
      if (!w) {
        const D = P();
        (te ? "production" : void 0) !== "production" && r.forEach(
          (g) => g({ type: "async-write", flushed: D })
        );
      }
      return V;
    }, O = p.write(z, R, ...k);
    return w = !1, O;
  }, a = (p, ...k) => {
    const w = f(p, ...k), z = P();
    return (te ? "production" : void 0) !== "production" && r.forEach(
      (R) => R({ type: "write", flushed: z })
    ), w;
  }, d = (p, k, w) => {
    var z;
    const R = w || [];
    (z = o(p)) == null || z.d.forEach((N, I) => {
      const V = t.get(I);
      V ? V.t.add(p) : I !== p && d(I, p, R);
    }), v(p);
    const O = {
      t: new Set(k && [k]),
      l: /* @__PURE__ */ new Set()
    };
    if (t.set(p, O), (te ? "production" : void 0) !== "production" && l.add(p), oo(p) && p.onMount) {
      const { onMount: N } = p;
      R.push(() => {
        const I = N((...V) => a(p, ...V));
        I && (O.u = I);
      });
    }
    return w || R.forEach((N) => N()), O;
  }, y = (p) => {
    var k;
    const w = (k = t.get(p)) == null ? void 0 : k.u;
    w && w(), t.delete(p), (te ? "production" : void 0) !== "production" && l.delete(p);
    const z = o(p);
    z ? (Vt(z) && os(z.v), z.d.forEach((R, O) => {
      if (O !== p) {
        const N = t.get(O);
        N && (N.t.delete(p), _(O, N) && y(O));
      }
    })) : (te ? "production" : void 0) !== "production" && console.warn("[Bug] could not find atom state to unmount", p);
  }, x = (p, k, w) => {
    const z = new Set(k.d.keys()), R = /* @__PURE__ */ new Set();
    w == null || w.forEach((O, N) => {
      if (z.has(N)) {
        z.delete(N);
        return;
      }
      R.add(N);
      const I = t.get(N);
      I && I.t.delete(p);
    }), z.forEach((O) => {
      const N = t.get(O);
      N ? N.t.add(p) : t.has(p) && d(O, p);
    }), R.forEach((O) => {
      const N = t.get(O);
      N && _(O, N) && y(O);
    });
  }, P = () => {
    let p;
    for ((te ? "production" : void 0) !== "production" && (p = /* @__PURE__ */ new Set()); n.size; ) {
      const k = Array.from(n);
      n.clear(), k.forEach(([w, z]) => {
        const R = o(w);
        if (R) {
          const O = t.get(w);
          O && R.d !== (z == null ? void 0 : z.d) && x(w, R, z == null ? void 0 : z.d), O && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!Vt(z) && (Pn(z, R) || ss(z, R))) && (O.l.forEach((N) => N()), (te ? "production" : void 0) !== "production" && p.add(w));
        } else
          (te ? "production" : void 0) !== "production" && console.warn("[Bug] no atom state to flush");
      });
    }
    if ((te ? "production" : void 0) !== "production")
      return p;
  }, L = (p, k) => {
    const w = E(p), z = P(), R = w.l;
    return R.add(k), (te ? "production" : void 0) !== "production" && r.forEach(
      (O) => O({ type: "sub", flushed: z })
    ), () => {
      R.delete(k), C(p), (te ? "production" : void 0) !== "production" && r.forEach((O) => O({ type: "unsub" }));
    };
  };
  return (te ? "production" : void 0) !== "production" ? {
    get: m,
    set: a,
    sub: L,
    // store dev methods (these are tentative and subject to change without notice)
    dev_subscribe_store: (p, k) => {
      if (k !== 2)
        throw new Error("The current StoreListener revision is 2.");
      return r.add(p), () => {
        r.delete(p);
      };
    },
    dev_get_mounted_atoms: () => l.values(),
    dev_get_atom_state: (p) => e.get(p),
    dev_get_mounted: (p) => t.get(p),
    dev_restore_atoms: (p) => {
      for (const [w, z] of p)
        lo(w) && (c(w, z), $(w));
      const k = P();
      r.forEach(
        (w) => w({ type: "restore", flushed: k })
      );
    }
  } : {
    get: m,
    set: a,
    sub: L
  };
};
let io;
(te ? "production" : void 0) !== "production" && (typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ == "number" ? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__ : globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1);
const Sp = () => (io || ((te ? "production" : void 0) !== "production" && globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1 && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
), io = wp()), io), kp = A.createContext(void 0), Ep = (e) => A.useContext(kp) || Sp(), _p = (e) => typeof (e == null ? void 0 : e.then) == "function", xp = nf.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then(
    (t) => {
      e.status = "fulfilled", e.value = t;
    },
    (t) => {
      e.status = "rejected", e.reason = t;
    }
  ), e);
});
function Mc(e, t) {
  const n = Ep(), [[r, l, o], i] = A.useReducer(
    (c) => {
      const h = n.get(e);
      return Object.is(c[0], h) && c[1] === n && c[2] === e ? c : [h, n, e];
    },
    void 0,
    () => [n.get(e), n, e]
  );
  let u = r;
  return (l !== n || o !== e) && (i(), u = n.get(e)), A.useEffect(() => {
    const c = n.sub(e, () => {
      i();
    });
    return i(), c;
  }, [n, e, void 0]), A.useDebugValue(u), _p(u) ? xp(u) : u;
}
function Tc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Tc(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function rr() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Tc(e)) && (r && (r += " "), r += t);
  return r;
}
const je = "context-menu", Ut = {
  contextMenu: {
    "&": je
  },
  contextMenuList: {
    "&": `${je}__list`,
    iconHidden: `${je}__list--icon-hidden`
  },
  contextMenuListItem: {
    "&": `${je}__list-item`,
    disabled: `${je}__list-item--disabled`,
    selected: `${je}__list-item--selected`
  },
  contextMenuDivider: {
    "&": `${je}__divider`
  },
  contextMenuButton: {
    "&": `${je}__button`,
    icon: `${je}__button-icon`,
    expand: `${je}__button-expand`
  },
  contextMenuDropdown: {
    "&": `${je}__dropdown`
  }
}, Rc = A.createContext({
  onCommandButtonClick: (e, t) => {
  }
});
function Cp() {
  return A.useContext(Rc);
}
const Pp = Rc.Provider;
function Np(e) {
  const { id: t, label: n, disabled: r, icon: l, shortcutKey: o } = e, { contextMenuListItem: i, contextMenuButton: u } = Ut, s = Cp();
  return /* @__PURE__ */ H.jsx(
    "li",
    {
      className: rr(i["&"], {
        [i.disabled]: r
      }),
      "data-id": t,
      children: /* @__PURE__ */ H.jsxs(
        "button",
        {
          className: u["&"],
          title: n,
          onClick: (c) => s.onCommandButtonClick(c, e),
          children: [
            /* @__PURE__ */ H.jsx("i", { className: rr(
              `${u.icon} ir-icon ${l}`,
              !l && "invisible"
            ) }),
            /* @__PURE__ */ H.jsxs("span", { children: [
              n,
              o && `(${o})`
            ] })
          ]
        }
      )
    }
  );
}
function zp(e) {
  return /* @__PURE__ */ H.jsx(
    "li",
    {
      className: Ut.contextMenuDivider["&"],
      "data-id": e.id
    }
  );
}
const as = 8;
function Lp(e) {
  const { id: t, label: n, disabled: r, icon: l, children: o } = e, { contextMenuListItem: i, contextMenuButton: u } = Ut, s = zc({
    placement: e.placement ?? "right-start",
    middleware: [
      fs(),
      ds()
    ]
  }), { refs: c } = s, [h, v] = A.useState(!1);
  return /* @__PURE__ */ H.jsxs(
    "li",
    {
      className: rr(i["&"], {
        [i.disabled]: r,
        [i.selected]: h
      }),
      ref: c.setReference,
      "data-id": t,
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      children: [
        /* @__PURE__ */ H.jsxs(
          "button",
          {
            className: u["&"],
            title: n,
            children: [
              /* @__PURE__ */ H.jsx("i", { className: rr(
                `${u.icon} ir-icon ${l}`,
                !l && "invisible"
              ) }),
              /* @__PURE__ */ H.jsx("span", { children: n }),
              /* @__PURE__ */ H.jsx("i", { className: `${u.expand} ir-icon ir-icon--triangle-small-right` })
            ]
          }
        ),
        h && /* @__PURE__ */ H.jsx(
          Xi,
          {
            ref: c.setFloating,
            top: (s.y ?? 0) + (s.placement.includes("end") ? as : -as),
            left: s.x ?? 0,
            strategy: s.strategy,
            placement: s.placement,
            items: o
          }
        )
      ]
    }
  );
}
function cs(e) {
  switch (e.type) {
    case "divider":
      return /* @__PURE__ */ H.jsx(
        zp,
        {
          ...e
        },
        e.id
      );
    case "command-button":
      return /* @__PURE__ */ H.jsx(
        Np,
        {
          ...e
        },
        e.id
      );
    case "dropdown":
      return /* @__PURE__ */ H.jsx(
        Lp,
        {
          ...e
        },
        e.id
      );
    default:
      throw console.error("Unknown type", e), new Error("Unknown type");
  }
}
const Xi = A.forwardRef((e, t) => {
  const r = e.items.filter((o) => o.visible !== !1).reduce((o, i) => i.type === "divider" ? (o.dividerBuffer = !0, o.dividerKey = i.id ?? $c(), o) : (o.dividerBuffer && o.elements.length > 0 && (o.elements.push(cs({ id: o.dividerKey, type: "divider" })), o.dividerBuffer = !1), o.elements.push(cs(i)), o), {
    elements: [],
    dividerBuffer: !1,
    dividerKey: ""
  }), l = e.items.some((o) => o.type !== "divider" && o.icon);
  return /* @__PURE__ */ H.jsx(
    "ul",
    {
      ref: t,
      style: {
        position: e.strategy,
        top: e.top,
        left: e.left
      },
      className: rr(
        Ut.contextMenuList["&"],
        !l && Ut.contextMenuList.iconHidden
      ),
      children: r.elements
    }
  );
});
Xi.displayName = "IRContextMenuList";
const Mp = Lc([]), Tp = Lc(null);
function Rp(e) {
  return A.useEffect(() => {
    const t = Dc({
      hide() {
        e.onESC();
      }
    });
    return t.create(), () => t.destroy();
  }, [e]), /* @__PURE__ */ H.jsx(H.Fragment, {});
}
function Ip(e) {
  const n = Mc(Tp) === e.uuid, { x: r, y: l, refs: o, strategy: i } = zc({
    placement: e.placement,
    whileElementsMounted: jc,
    middleware: [
      Fc(e.offset),
      fs(),
      ds()
    ]
  }), u = (c, h) => {
    if (c.button === 0)
      try {
        e.onCommandButtonClick(c, h);
      } catch (v) {
        console.error(v);
      } finally {
        e.onHide();
      }
  }, s = (c) => {
    o.floating.current && ("blurDisabled" in e && e.blurDisabled || (c.relatedTarget === null && e.onHide(), c.relatedTarget instanceof HTMLElement && (c.relatedTarget.closest(`.${Ut.contextMenu["&"]}`) || e.onHide())));
  };
  return A.useLayoutEffect(() => {
    var c;
    if (n) {
      if (e.point)
        o.setReference(Uc(e.point.x, e.point.y));
      else if (e.onGetRefElement)
        o.setReference(e.onGetRefElement());
      else
        throw new Error("Unknown floating point!");
      (c = o.floating.current) == null || c.focus();
    }
  }, [o, e, n]), n ? /* @__PURE__ */ H.jsxs(Pp, { value: {
    onCommandButtonClick: u
  }, children: [
    /* @__PURE__ */ H.jsx(
      "div",
      {
        ref: o.setFloating,
        style: {
          position: i,
          top: l ?? 0,
          left: r ?? 0
        },
        tabIndex: -1,
        className: Ut.contextMenu["&"],
        onContextMenu: (c) => c.preventDefault(),
        onBlur: s,
        children: /* @__PURE__ */ H.jsx(Xi, { items: e.items })
      }
    ),
    /* @__PURE__ */ H.jsx(Rp, { onESC: e.onHide })
  ] }) : /* @__PURE__ */ H.jsx(H.Fragment, {});
}
function Up() {
  const e = Mc(Mp);
  return Pc.createPortal(/* @__PURE__ */ H.jsx(H.Fragment, { children: e.map((t) => {
    const { key: n, ...r } = t;
    return /* @__PURE__ */ H.jsx(
      Ip,
      {
        ...r
      },
      n
    );
  }) }), Ac("popover"));
}
export {
  Rp as E,
  Up as I,
  nf as R,
  Tp as a,
  Ip as b,
  Mp as c,
  Sp as g,
  H as j,
  Pc as r
};
//# sourceMappingURL=react-components-DtzapU8g.js.map
