import { c as Ye, g as Ae } from "./_commonjsHelpers-DaMA6jEr.js";
var je = { exports: {} };
(function(a, e) {
  (function(t, n) {
    a.exports = n();
  })(Ye, function() {
    var t = 1e3, n = 6e4, s = 36e5, r = "millisecond", i = "second", o = "minute", u = "hour", c = "day", f = "week", p = "month", l = "quarter", S = "year", C = "date", N = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(x) {
      var g = ["th", "st", "nd", "rd"], d = x % 100;
      return "[" + x + (g[(d - 20) % 10] || g[d] || g[0]) + "]";
    } }, D = function(x, g, d) {
      var y = String(x);
      return !y || y.length >= g ? x : "" + Array(g + 1 - y.length).join(d) + x;
    }, P = { s: D, z: function(x) {
      var g = -x.utcOffset(), d = Math.abs(g), y = Math.floor(d / 60), h = d % 60;
      return (g <= 0 ? "+" : "-") + D(y, 2, "0") + ":" + D(h, 2, "0");
    }, m: function x(g, d) {
      if (g.date() < d.date()) return -x(d, g);
      var y = 12 * (d.year() - g.year()) + (d.month() - g.month()), h = g.clone().add(y, p), $ = d - h < 0, b = g.clone().add(y + ($ ? -1 : 1), p);
      return +(-(y + (d - h) / ($ ? h - b : b - h)) || 0);
    }, a: function(x) {
      return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
    }, p: function(x) {
      return { M: p, y: S, w: f, d: c, D: C, h: u, m: o, s: i, ms: r, Q: l }[x] || String(x || "").toLowerCase().replace(/s$/, "");
    }, u: function(x) {
      return x === void 0;
    } }, k = "en", T = {};
    T[k] = M;
    var F = "$isDayjsObject", j = function(x) {
      return x instanceof H || !(!x || !x[F]);
    }, K = function x(g, d, y) {
      var h;
      if (!g) return k;
      if (typeof g == "string") {
        var $ = g.toLowerCase();
        T[$] && (h = $), d && (T[$] = d, h = $);
        var b = g.split("-");
        if (!h && b.length > 1) return x(b[0]);
      } else {
        var O = g.name;
        T[O] = g, h = O;
      }
      return !y && h && (k = h), h || !y && k;
    }, R = function(x, g) {
      if (j(x)) return x.clone();
      var d = typeof g == "object" ? g : {};
      return d.date = x, d.args = arguments, new H(d);
    }, L = P;
    L.l = K, L.i = j, L.w = function(x, g) {
      return R(x, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
    };
    var H = function() {
      function x(d) {
        this.$L = K(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[F] = !0;
      }
      var g = x.prototype;
      return g.parse = function(d) {
        this.$d = function(y) {
          var h = y.date, $ = y.utc;
          if (h === null) return /* @__PURE__ */ new Date(NaN);
          if (L.u(h)) return /* @__PURE__ */ new Date();
          if (h instanceof Date) return new Date(h);
          if (typeof h == "string" && !/Z$/i.test(h)) {
            var b = h.match(m);
            if (b) {
              var O = b[2] - 1 || 0, E = (b[7] || "0").substring(0, 3);
              return $ ? new Date(Date.UTC(b[1], O, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, E)) : new Date(b[1], O, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, E);
            }
          }
          return new Date(h);
        }(d), this.init();
      }, g.init = function() {
        var d = this.$d;
        this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
      }, g.$utils = function() {
        return L;
      }, g.isValid = function() {
        return this.$d.toString() !== N;
      }, g.isSame = function(d, y) {
        var h = R(d);
        return this.startOf(y) <= h && h <= this.endOf(y);
      }, g.isAfter = function(d, y) {
        return R(d) < this.startOf(y);
      }, g.isBefore = function(d, y) {
        return this.endOf(y) < R(d);
      }, g.$g = function(d, y, h) {
        return L.u(d) ? this[y] : this.set(h, d);
      }, g.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, g.valueOf = function() {
        return this.$d.getTime();
      }, g.startOf = function(d, y) {
        var h = this, $ = !!L.u(y) || y, b = L.p(d), O = function(J, V) {
          var B = L.w(h.$u ? Date.UTC(h.$y, V, J) : new Date(h.$y, V, J), h);
          return $ ? B : B.endOf(c);
        }, E = function(J, V) {
          return L.w(h.toDate()[J].apply(h.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), h);
        }, A = this.$W, I = this.$M, z = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (b) {
          case S:
            return $ ? O(1, 0) : O(31, 11);
          case p:
            return $ ? O(1, I) : O(0, I + 1);
          case f:
            var Z = this.$locale().weekStart || 0, q = (A < Z ? A + 7 : A) - Z;
            return O($ ? z - q : z + (6 - q), I);
          case c:
          case C:
            return E(G + "Hours", 0);
          case u:
            return E(G + "Minutes", 1);
          case o:
            return E(G + "Seconds", 2);
          case i:
            return E(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, g.endOf = function(d) {
        return this.startOf(d, !1);
      }, g.$set = function(d, y) {
        var h, $ = L.p(d), b = "set" + (this.$u ? "UTC" : ""), O = (h = {}, h[c] = b + "Date", h[C] = b + "Date", h[p] = b + "Month", h[S] = b + "FullYear", h[u] = b + "Hours", h[o] = b + "Minutes", h[i] = b + "Seconds", h[r] = b + "Milliseconds", h)[$], E = $ === c ? this.$D + (y - this.$W) : y;
        if ($ === p || $ === S) {
          var A = this.clone().set(C, 1);
          A.$d[O](E), A.init(), this.$d = A.set(C, Math.min(this.$D, A.daysInMonth())).$d;
        } else O && this.$d[O](E);
        return this.init(), this;
      }, g.set = function(d, y) {
        return this.clone().$set(d, y);
      }, g.get = function(d) {
        return this[L.p(d)]();
      }, g.add = function(d, y) {
        var h, $ = this;
        d = Number(d);
        var b = L.p(y), O = function(I) {
          var z = R($);
          return L.w(z.date(z.date() + Math.round(I * d)), $);
        };
        if (b === p) return this.set(p, this.$M + d);
        if (b === S) return this.set(S, this.$y + d);
        if (b === c) return O(1);
        if (b === f) return O(7);
        var E = (h = {}, h[o] = n, h[u] = s, h[i] = t, h)[b] || 1, A = this.$d.getTime() + d * E;
        return L.w(A, this);
      }, g.subtract = function(d, y) {
        return this.add(-1 * d, y);
      }, g.format = function(d) {
        var y = this, h = this.$locale();
        if (!this.isValid()) return h.invalidDate || N;
        var $ = d || "YYYY-MM-DDTHH:mm:ssZ", b = L.z(this), O = this.$H, E = this.$m, A = this.$M, I = h.weekdays, z = h.months, G = h.meridiem, Z = function(V, B, Q, X) {
          return V && (V[B] || V(y, $)) || Q[B].slice(0, X);
        }, q = function(V) {
          return L.s(O % 12 || 12, V, "0");
        }, J = G || function(V, B, Q) {
          var X = V < 12 ? "AM" : "PM";
          return Q ? X.toLowerCase() : X;
        };
        return $.replace(w, function(V, B) {
          return B || function(Q) {
            switch (Q) {
              case "YY":
                return String(y.$y).slice(-2);
              case "YYYY":
                return L.s(y.$y, 4, "0");
              case "M":
                return A + 1;
              case "MM":
                return L.s(A + 1, 2, "0");
              case "MMM":
                return Z(h.monthsShort, A, z, 3);
              case "MMMM":
                return Z(z, A);
              case "D":
                return y.$D;
              case "DD":
                return L.s(y.$D, 2, "0");
              case "d":
                return String(y.$W);
              case "dd":
                return Z(h.weekdaysMin, y.$W, I, 2);
              case "ddd":
                return Z(h.weekdaysShort, y.$W, I, 3);
              case "dddd":
                return I[y.$W];
              case "H":
                return String(O);
              case "HH":
                return L.s(O, 2, "0");
              case "h":
                return q(1);
              case "hh":
                return q(2);
              case "a":
                return J(O, E, !0);
              case "A":
                return J(O, E, !1);
              case "m":
                return String(E);
              case "mm":
                return L.s(E, 2, "0");
              case "s":
                return String(y.$s);
              case "ss":
                return L.s(y.$s, 2, "0");
              case "SSS":
                return L.s(y.$ms, 3, "0");
              case "Z":
                return b;
            }
            return null;
          }(V) || b.replace(":", "");
        });
      }, g.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, g.diff = function(d, y, h) {
        var $, b = this, O = L.p(y), E = R(d), A = (E.utcOffset() - this.utcOffset()) * n, I = this - E, z = function() {
          return L.m(b, E);
        };
        switch (O) {
          case S:
            $ = z() / 12;
            break;
          case p:
            $ = z();
            break;
          case l:
            $ = z() / 3;
            break;
          case f:
            $ = (I - A) / 6048e5;
            break;
          case c:
            $ = (I - A) / 864e5;
            break;
          case u:
            $ = I / s;
            break;
          case o:
            $ = I / n;
            break;
          case i:
            $ = I / t;
            break;
          default:
            $ = I;
        }
        return h ? $ : L.a($);
      }, g.daysInMonth = function() {
        return this.endOf(p).$D;
      }, g.$locale = function() {
        return T[this.$L];
      }, g.locale = function(d, y) {
        if (!d) return this.$L;
        var h = this.clone(), $ = K(d, y, !0);
        return $ && (h.$L = $), h;
      }, g.clone = function() {
        return L.w(this.$d, this);
      }, g.toDate = function() {
        return new Date(this.valueOf());
      }, g.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, g.toISOString = function() {
        return this.$d.toISOString();
      }, g.toString = function() {
        return this.$d.toUTCString();
      }, x;
    }(), U = H.prototype;
    return R.prototype = U, [["$ms", r], ["$s", i], ["$m", o], ["$H", u], ["$W", c], ["$M", p], ["$y", S], ["$D", C]].forEach(function(x) {
      U[x[1]] = function(g) {
        return this.$g(g, x[0], x[1]);
      };
    }), R.extend = function(x, g) {
      return x.$i || (x(g, H, R), x.$i = !0), R;
    }, R.locale = K, R.isDayjs = j, R.unix = function(x) {
      return R(1e3 * x);
    }, R.en = T[k], R.Ls = T, R.p = {}, R;
  });
})(je);
var Ue = je.exports;
const $e = /* @__PURE__ */ Ae(Ue);
var Ie = { exports: {} };
(function(a, e) {
  (function(t, n) {
    a.exports = n();
  })(Ye, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, u = {}, c = function(m) {
      return (m = +m) + (m > 68 ? 1900 : 2e3);
    }, f = function(m) {
      return function(w) {
        this[m] = +w;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
      (this.zone || (this.zone = {})).offset = function(w) {
        if (!w || w === "Z") return 0;
        var M = w.match(/([+-]|\d\d)/g), D = 60 * M[1] + (+M[2] || 0);
        return D === 0 ? 0 : M[0] === "+" ? -D : D;
      }(m);
    }], l = function(m) {
      var w = u[m];
      return w && (w.indexOf ? w : w.s.concat(w.f));
    }, S = function(m, w) {
      var M, D = u.meridiem;
      if (D) {
        for (var P = 1; P <= 24; P += 1) if (m.indexOf(D(P, 0, w)) > -1) {
          M = P > 12;
          break;
        }
      } else M = m === (w ? "pm" : "PM");
      return M;
    }, C = { A: [o, function(m) {
      this.afternoon = S(m, !1);
    }], a: [o, function(m) {
      this.afternoon = S(m, !0);
    }], Q: [s, function(m) {
      this.month = 3 * (m - 1) + 1;
    }], S: [s, function(m) {
      this.milliseconds = 100 * +m;
    }], SS: [r, function(m) {
      this.milliseconds = 10 * +m;
    }], SSS: [/\d{3}/, function(m) {
      this.milliseconds = +m;
    }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(m) {
      var w = u.ordinal, M = m.match(/\d+/);
      if (this.day = M[0], w) for (var D = 1; D <= 31; D += 1) w(D).replace(/\[|\]/g, "") === m && (this.day = D);
    }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(m) {
      var w = l("months"), M = (l("monthsShort") || w.map(function(D) {
        return D.slice(0, 3);
      })).indexOf(m) + 1;
      if (M < 1) throw new Error();
      this.month = M % 12 || M;
    }], MMMM: [o, function(m) {
      var w = l("months").indexOf(m) + 1;
      if (w < 1) throw new Error();
      this.month = w % 12 || w;
    }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(m) {
      this.year = c(m);
    }], YYYY: [/\d{4}/, f("year")], Z: p, ZZ: p };
    function N(m) {
      var w, M;
      w = m, M = u && u.formats;
      for (var D = (m = w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, L, H) {
        var U = H && H.toUpperCase();
        return L || M[H] || t[H] || M[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, g, d) {
          return g || d.slice(1);
        });
      })).match(n), P = D.length, k = 0; k < P; k += 1) {
        var T = D[k], F = C[T], j = F && F[0], K = F && F[1];
        D[k] = K ? { regex: j, parser: K } : T.replace(/^\[|\]$/g, "");
      }
      return function(R) {
        for (var L = {}, H = 0, U = 0; H < P; H += 1) {
          var x = D[H];
          if (typeof x == "string") U += x.length;
          else {
            var g = x.regex, d = x.parser, y = R.slice(U), h = g.exec(y)[0];
            d.call(L, h), R = R.replace(h, "");
          }
        }
        return function($) {
          var b = $.afternoon;
          if (b !== void 0) {
            var O = $.hours;
            b ? O < 12 && ($.hours += 12) : O === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(L), L;
      };
    }
    return function(m, w, M) {
      M.p.customParseFormat = !0, m && m.parseTwoDigitYear && (c = m.parseTwoDigitYear);
      var D = w.prototype, P = D.parse;
      D.parse = function(k) {
        var T = k.date, F = k.utc, j = k.args;
        this.$u = F;
        var K = j[1];
        if (typeof K == "string") {
          var R = j[2] === !0, L = j[3] === !0, H = R || L, U = j[2];
          L && (U = j[2]), u = this.$locale(), !R && U && (u = M.Ls[U]), this.$d = function(y, h, $, b) {
            try {
              if (["x", "X"].indexOf(h) > -1) return new Date((h === "X" ? 1e3 : 1) * y);
              var O = N(h)(y), E = O.year, A = O.month, I = O.day, z = O.hours, G = O.minutes, Z = O.seconds, q = O.milliseconds, J = O.zone, V = O.week, B = /* @__PURE__ */ new Date(), Q = I || (E || A ? 1 : B.getDate()), X = E || B.getFullYear(), ae = 0;
              E && !A || (ae = A > 0 ? A - 1 : B.getMonth());
              var oe, ge = z || 0, pe = G || 0, me = Z || 0, ye = q || 0;
              return J ? new Date(Date.UTC(X, ae, Q, ge, pe, me, ye + 60 * J.offset * 1e3)) : $ ? new Date(Date.UTC(X, ae, Q, ge, pe, me, ye)) : (oe = new Date(X, ae, Q, ge, pe, me, ye), V && (oe = b(oe).week(V).toDate()), oe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(T, K, F, M), this.init(), U && U !== !0 && (this.$L = this.locale(U).$L), H && T != this.format(K) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (K instanceof Array) for (var x = K.length, g = 1; g <= x; g += 1) {
          j[1] = K[g - 1];
          var d = M.apply(this, j);
          if (d.isValid()) {
            this.$d = d.$d, this.$L = d.$L, this.init();
            break;
          }
          g === x && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else P.call(this, k);
      };
    };
  });
})(Ie);
var ze = Ie.exports;
const Be = /* @__PURE__ */ Ae(ze), v = (a) => typeof a == "string", se = () => {
  let a, e;
  const t = new Promise((n, s) => {
    a = n, e = s;
  });
  return t.resolve = a, t.reject = e, t;
}, be = (a) => a == null ? "" : "" + a, Je = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, We = /###/g, ve = (a) => a && a.indexOf("###") > -1 ? a.replace(We, ".") : a, we = (a) => !a || v(a), re = (a, e, t) => {
  const n = v(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (we(a)) return {};
    const r = ve(n[s]);
    !a[r] && t && (a[r] = new t()), Object.prototype.hasOwnProperty.call(a, r) ? a = a[r] : a = {}, ++s;
  }
  return we(a) ? {} : {
    obj: a,
    k: ve(n[s])
  };
}, Le = (a, e, t) => {
  const {
    obj: n,
    k: s
  } = re(a, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[s] = t;
    return;
  }
  let r = e[e.length - 1], i = e.slice(0, e.length - 1), o = re(a, i, Object);
  for (; o.obj === void 0 && i.length; )
    r = `${i[i.length - 1]}.${r}`, i = i.slice(0, i.length - 1), o = re(a, i, Object), o?.obj && typeof o.obj[`${o.k}.${r}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${r}`] = t;
}, Ze = (a, e, t, n) => {
  const {
    obj: s,
    k: r
  } = re(a, e, Object);
  s[r] = s[r] || [], s[r].push(t);
}, le = (a, e) => {
  const {
    obj: t,
    k: n
  } = re(a, e);
  if (t)
    return t[n];
}, Qe = (a, e, t) => {
  const n = le(a, t);
  return n !== void 0 ? n : le(e, t);
}, Ve = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? v(a[n]) || a[n] instanceof String || v(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : Ve(a[n], e[n], t) : a[n] = e[n]);
  return a;
}, _ = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Ge = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Xe = (a) => v(a) ? a.replace(/[&<>"'\/]/g, (e) => Ge[e]) : a;
class qe {
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
const _e = [" ", ",", "?", "!", ";"], et = new qe(20), tt = (a, e, t) => {
  e = e || "", t = t || "";
  const n = _e.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const s = et.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let r = !s.test(a);
  if (!r) {
    const i = a.indexOf(t);
    i > 0 && !s.test(a.substring(0, i)) && (r = !0);
  }
  return r;
}, Se = function(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!a) return;
  if (a[e]) return a[e];
  const n = e.split(t);
  let s = a;
  for (let r = 0; r < n.length; ) {
    if (!s || typeof s != "object")
      return;
    let i, o = "";
    for (let u = r; u < n.length; ++u)
      if (u !== r && (o += t), o += n[u], i = s[o], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && u < n.length - 1)
          continue;
        r += u - r + 1;
        break;
      }
    s = i;
  }
  return s;
}, ce = (a) => a?.replace("_", "-"), nt = {
  type: "logger",
  log(a) {
    this.output("log", a);
  },
  warn(a) {
    this.output("warn", a);
  },
  error(a) {
    this.output("error", a);
  },
  output(a, e) {
    console?.[a]?.apply?.(console, e);
  }
};
class fe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || nt, this.options = t, this.debug = t.debug;
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
    return s && !this.debug ? null : (v(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new fe(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new fe(this.logger, e);
  }
}
var W = new fe();
class de {
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
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((i) => {
      let [o, u] = i;
      for (let c = 0; c < u; c++)
        o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [o, u] = i;
      for (let c = 0; c < u; c++)
        o.apply(o, [e, ...n]);
    });
  }
}
class Oe extends de {
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
    const r = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, i = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : v(n) && r ? o.push(...n.split(r)) : o.push(n)));
    const u = le(this.data, o);
    return !u && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), u || !i || !v(n) ? u : Se(this.data?.[e]?.[t], n, r);
  }
  addResource(e, t, n, s) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), s = t, t = o[1]), this.addNamespaces(t), Le(this.data, o, s), r.silent || this.emit("added", e, t, n, s);
  }
  addResources(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const r in n)
      (v(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
        silent: !0
      });
    s.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, s, r) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, o = [e, t];
    e.indexOf(".") > -1 && (o = e.split("."), s = n, n = t, t = o[1]), this.addNamespaces(t);
    let u = le(this.data, o) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? Ve(u, n, r) : u = {
      ...u,
      ...n
    }, Le(this.data, o, u), i.silent || this.emit("added", e, t, n);
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
var Ke = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, e, t, n, s) {
    return a.forEach((r) => {
      e = this.processors[r]?.process(e, t, n, s) ?? e;
    }), e;
  }
};
const Ce = {};
class he extends de {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Je(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = W.create("translator");
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
    let r = t.ns || this.options.defaultNS || [];
    const i = n && e.indexOf(n) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !tt(e, n, s);
    if (i && !o) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: v(r) ? [r] : r
        };
      const c = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()), e = c.join(s);
    }
    return {
      key: e,
      namespaces: v(r) ? [r] : r
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: i,
      namespaces: o
    } = this.extractFromKey(e[e.length - 1], t), u = o[o.length - 1], c = t.lng || this.language, f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c?.toLowerCase() === "cimode") {
      if (f) {
        const P = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${u}${P}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: c,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${P}${i}`;
      }
      return s ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: c,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(t)
      } : i;
    }
    const p = this.resolve(e, t);
    let l = p?.res;
    const S = p?.usedKey || i, C = p?.exactUsedKey || i, N = Object.prototype.toString.apply(l), m = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, M = !this.i18nFormat || this.i18nFormat.handleAsObject, D = !v(l) && typeof l != "boolean" && typeof l != "number";
    if (M && l && D && m.indexOf(N) < 0 && !(v(w) && Array.isArray(l))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const P = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, l, {
          ...t,
          ns: o
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return s ? (p.res = P, p.usedParams = this.getUsedParamsDetails(t), p) : P;
      }
      if (r) {
        const P = Array.isArray(l), k = P ? [] : {}, T = P ? C : S;
        for (const F in l)
          if (Object.prototype.hasOwnProperty.call(l, F)) {
            const j = `${T}${r}${F}`;
            k[F] = this.translate(j, {
              ...t,
              joinArrays: !1,
              ns: o
            }), k[F] === j && (k[F] = l[F]);
          }
        l = k;
      }
    } else if (M && v(w) && Array.isArray(l))
      l = l.join(w), l && (l = this.extendTranslation(l, e, t, n));
    else {
      let P = !1, k = !1;
      const T = t.count !== void 0 && !v(t.count), F = he.hasDefaultValue(t), j = T ? this.pluralResolver.getSuffix(c, t.count, t) : "", K = t.ordinal && T ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", R = T && !t.ordinal && t.count === 0, L = R && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${j}`] || t[`defaultValue${K}`] || t.defaultValue;
      !this.isValidLookup(l) && F && (P = !0, l = L), this.isValidLookup(l) || (k = !0, l = i);
      const U = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : l, x = F && L !== l && this.options.updateMissing;
      if (k || P || x) {
        if (this.logger.log(x ? "updateKey" : "missingKey", c, u, i, x ? L : l), r) {
          const h = this.resolve(i, {
            ...t,
            keySeparator: !1
          });
          h && h.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let g = [];
        const d = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && d && d[0])
          for (let h = 0; h < d.length; h++)
            g.push(d[h]);
        else this.options.saveMissingTo === "all" ? g = this.languageUtils.toResolveHierarchy(t.lng || this.language) : g.push(t.lng || this.language);
        const y = (h, $, b) => {
          const O = F && b !== l ? b : U;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(h, u, $, O, x, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(h, u, $, O, x, t), this.emit("missingKey", h, u, $, l);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && T ? g.forEach((h) => {
          const $ = this.pluralResolver.getSuffixes(h, t);
          R && t[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((b) => {
            y([h], i + b, t[`defaultValue${b}`] || L);
          });
        }) : y(g, i, L));
      }
      l = this.extendTranslation(l, e, t, p, n), k && l === i && this.options.appendNamespaceToMissingKey && (l = `${u}:${i}`), (k || P) && this.options.parseMissingKeyHandler && (l = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${i}` : i, P ? l : void 0));
    }
    return s ? (p.res = l, p.usedParams = this.getUsedParamsDetails(t), p) : l;
  }
  extendTranslation(e, t, n, s, r) {
    var i = this;
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
      const c = v(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (c) {
        const l = e.match(this.interpolator.nestingRegexp);
        f = l && l.length;
      }
      let p = n.replace && !v(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, n.lng || this.language || s.usedLng, n), c) {
        const l = e.match(this.interpolator.nestingRegexp), S = l && l.length;
        f < S && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var l = arguments.length, S = new Array(l), C = 0; C < l; C++)
          S[C] = arguments[C];
        return r?.[0] === S[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`), null) : i.translate(...S, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, u = v(o) ? [o] : o;
    return e != null && u?.length && n.applyPostProcessor !== !1 && (e = Ke.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, s, r, i, o;
    return v(e) && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const c = this.extractFromKey(u, t), f = c.key;
      s = f;
      let p = c.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const l = t.count !== void 0 && !v(t.count), S = l && !t.ordinal && t.count === 0, C = t.context !== void 0 && (v(t.context) || typeof t.context == "number") && t.context !== "", N = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((m) => {
        this.isValidLookup(n) || (o = m, !Ce[`${N[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (Ce[`${N[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${N.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), N.forEach((w) => {
          if (this.isValidLookup(n)) return;
          i = w;
          const M = [f];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(M, f, w, m, t);
          else {
            let P;
            l && (P = this.pluralResolver.getSuffix(w, t.count, t));
            const k = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (l && (M.push(f + P), t.ordinal && P.indexOf(T) === 0 && M.push(f + P.replace(T, this.options.pluralSeparator)), S && M.push(f + k)), C) {
              const F = `${f}${this.options.contextSeparator}${t.context}`;
              M.push(F), l && (M.push(F + P), t.ordinal && P.indexOf(T) === 0 && M.push(F + P.replace(T, this.options.pluralSeparator)), S && M.push(F + k));
            }
          }
          let D;
          for (; D = M.pop(); )
            this.isValidLookup(n) || (r = D, n = this.getResource(w, m, D, t));
        }));
      });
    }), {
      res: n,
      usedKey: s,
      exactUsedKey: r,
      usedLng: i,
      usedNS: o
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !v(e.replace);
    let s = n ? e.replace : e;
    if (n && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !n) {
      s = {
        ...s
      };
      for (const r of t)
        delete s[r];
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
class Me {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = W.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ce(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ce(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (v(e) && e.indexOf("-") > -1) {
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
      t = this.options.supportedLngs.find((r) => {
        if (r === s) return r;
        if (!(r.indexOf("-") < 0 && s.indexOf("-") < 0) && (r.indexOf("-") > 0 && s.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === s || r.indexOf(s) === 0 && s.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), v(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], r = (i) => {
      i && (this.isSupportedCode(i) ? s.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return v(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : v(e) && r(this.formatLanguageCode(e)), n.forEach((i) => {
      s.indexOf(i) < 0 && r(this.formatLanguageCode(i));
    }), s;
  }
}
const Pe = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, De = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class st {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = W.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = ce(e === "dev" ? "en" : e), s = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
      cleanedCode: n,
      type: s
    });
    if (r in this.pluralRulesCache)
      return this.pluralRulesCache[r];
    let i;
    try {
      i = new Intl.PluralRules(n, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), De;
      if (!e.match(/-|_/)) return De;
      const u = this.languageUtils.getLanguagePartFromCode(e);
      i = this.getRule(u, t);
    }
    return this.pluralRulesCache[r] = i, i;
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
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, r) => Pe[s] - Pe[r]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const ke = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = Qe(a, e, t);
  return !r && s && v(t) && (r = Se(a, t, n), r === void 0 && (r = Se(e, t, n))), r;
}, xe = (a) => a.replace(/\$/g, "$$$$");
class rt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = W.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
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
      prefix: r,
      prefixEscaped: i,
      suffix: o,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: f,
      unescapePrefix: p,
      nestingPrefix: l,
      nestingPrefixEscaped: S,
      nestingSuffix: C,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: m,
      maxReplaces: w,
      alwaysFormat: M
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Xe, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = r ? _(r) : i || "{{", this.suffix = o ? _(o) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = f ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = l ? _(l) : S || _("$t("), this.nestingSuffix = C ? _(C) : N || _(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = M !== void 0 ? M : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => t?.source === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, s) {
    let r, i, o;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (S) => {
      if (S.indexOf(this.formatSeparator) < 0) {
        const w = ke(t, u, S, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, n, {
          ...s,
          ...t,
          interpolationkey: S
        }) : w;
      }
      const C = S.split(this.formatSeparator), N = C.shift().trim(), m = C.join(this.formatSeparator).trim();
      return this.format(ke(t, u, N, this.options.keySeparator, this.options.ignoreJSONStructure), m, n, {
        ...s,
        ...t,
        interpolationkey: N
      });
    };
    this.resetRegExp();
    const f = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, p = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (S) => xe(S)
    }, {
      regex: this.regexp,
      safeValue: (S) => this.escapeValue ? xe(this.escape(S)) : xe(S)
    }].forEach((S) => {
      for (o = 0; r = S.regex.exec(e); ) {
        const C = r[1].trim();
        if (i = c(C), i === void 0)
          if (typeof f == "function") {
            const m = f(e, r, s);
            i = v(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, C))
            i = "";
          else if (p) {
            i = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${C} for interpolating ${e}`), i = "";
        else !v(i) && !this.useRawValueToEscape && (i = be(i));
        const N = S.safeValue(i);
        if (e = e.replace(r[0], N), p ? (S.regex.lastIndex += i.length, S.regex.lastIndex -= r[0].length) : S.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, i;
    const o = (u, c) => {
      const f = this.nestingOptionsSeparator;
      if (u.indexOf(f) < 0) return u;
      const p = u.split(new RegExp(`${f}[ ]*{`));
      let l = `{${p[1]}`;
      u = p[0], l = this.interpolate(l, i);
      const S = l.match(/'/g), C = l.match(/"/g);
      ((S?.length ?? 0) % 2 === 0 && !C || C.length % 2 !== 0) && (l = l.replace(/'/g, '"'));
      try {
        i = JSON.parse(l), c && (i = {
          ...c,
          ...i
        });
      } catch (N) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, N), `${u}${f}${l}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let u = [];
      i = {
        ...n
      }, i = i.replace && !v(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const f = s[1].split(this.formatSeparator).map((p) => p.trim());
        s[1] = f.shift(), u = f, c = !0;
      }
      if (r = t(o.call(this, s[1].trim(), i), i), r && s[0] === e && !v(r)) return r;
      v(r) || (r = be(r)), r || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), r = ""), c && (r = u.reduce((f, p) => this.format(f, p, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), r.trim())), e = e.replace(s[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const it = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const n = a.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((i) => {
      if (i) {
        const [o, ...u] = i.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), f = o.trim();
        t[f] || (t[f] = c), c === "false" && (t[f] = !1), c === "true" && (t[f] = !0), isNaN(c) || (t[f] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ee = (a) => {
  const e = {};
  return (t, n, s) => {
    let r = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (r = {
      ...r,
      [s.interpolationkey]: void 0
    });
    const i = n + JSON.stringify(r);
    let o = e[i];
    return o || (o = a(ce(n), s), e[i] = o), o(t);
  };
};
class at {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = W.create("formatter"), this.options = e, this.formats = {
      number: ee((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n
        });
        return (r) => s.format(r);
      }),
      currency: ee((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (r) => s.format(r);
      }),
      datetime: ee((t, n) => {
        const s = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (r) => s.format(r);
      }),
      relativetime: ee((t, n) => {
        const s = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (r) => s.format(r, n.range || "day");
      }),
      list: ee((t, n) => {
        const s = new Intl.ListFormat(t, {
          ...n
        });
        return (r) => s.format(r);
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
    this.formats[e.toLowerCase().trim()] = ee(t);
  }
  format(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (r.length > 1 && r[0].indexOf("(") > 1 && r[0].indexOf(")") < 0 && r.find((o) => o.indexOf(")") > -1)) {
      const o = r.findIndex((u) => u.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, u) => {
      const {
        formatName: c,
        formatOptions: f
      } = it(u);
      if (this.formats[c]) {
        let p = o;
        try {
          const l = s?.formatParams?.[s.interpolationkey] || {}, S = l.locale || l.lng || s.locale || s.lng || n;
          p = this.formats[c](o, S, {
            ...f,
            ...s,
            ...l
          });
        } catch (l) {
          this.logger.warn(l);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return o;
    }, e);
  }
}
const ot = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class ut extends de {
  constructor(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = W.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const r = {}, i = {}, o = {}, u = {};
    return e.forEach((c) => {
      let f = !0;
      t.forEach((p) => {
        const l = `${c}|${p}`;
        !n.reload && this.store.hasResourceBundle(c, p) ? this.state[l] = 2 : this.state[l] < 0 || (this.state[l] === 1 ? i[l] === void 0 && (i[l] = !0) : (this.state[l] = 1, f = !1, i[l] === void 0 && (i[l] = !0), r[l] === void 0 && (r[l] = !0), u[p] === void 0 && (u[p] = !0)));
      }), f || (o[c] = !0);
    }), (Object.keys(r).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(r),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(e, t, n) {
    const s = e.split("|"), r = s[0], i = s[1];
    t && this.emit("failedLoading", r, i, t), !t && n && this.store.addResourceBundle(r, i, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((u) => {
      Ze(u.loaded, [r], i), ot(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        o[c] || (o[c] = {});
        const f = u.loaded[c];
        f.length && f.forEach((p) => {
          o[c][p] === void 0 && (o[c][p] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((u) => !u.done);
  }
  read(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, i = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: s,
        wait: r,
        callback: i
      });
      return;
    }
    this.readingCalls++;
    const o = (c, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (c && f && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, r * 2, i);
        }, r);
        return;
      }
      i(c, f);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(e, t);
        c && typeof c.then == "function" ? c.then((f) => o(null, f)).catch(o) : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return u(e, t, o);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    v(e) && (e = this.languageUtils.toResolveHierarchy(e)), v(t) && (t = [t]);
    const r = this.queueLoad(e, t, n, s);
    if (!r.toLoad.length)
      return r.pending.length || s(), null;
    r.toLoad.forEach((i) => {
      this.loadOne(i);
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
    const n = e.split("|"), s = n[0], r = n[1];
    this.read(s, r, "read", void 0, void 0, (i, o) => {
      i && this.logger.warn(`${t}loading namespace ${r} for language ${s} failed`, i), !i && o && this.logger.log(`${t}loaded namespace ${r} for language ${s}`, o), this.loaded(e, i, o);
    });
  }
  saveMissing(e, t, n, s, r) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend?.create) {
        const u = {
          ...i,
          isUpdate: r
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let f;
            c.length === 5 ? f = c(e, t, n, s, u) : f = c(e, t, n, s), f && typeof f.then == "function" ? f.then((p) => o(null, p)).catch(o) : o(null, f);
          } catch (f) {
            o(f);
          }
        else
          c(e, t, n, s, o, u);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const Re = () => ({
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
  overloadTranslationOptionHandler: (a) => {
    let e = {};
    if (typeof a[1] == "object" && (e = a[1]), v(a[1]) && (e.defaultValue = a[1]), v(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
      const t = a[3] || a[2];
      Object.keys(t).forEach((n) => {
        e[n] = t[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (a) => a,
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
}), Ne = (a) => (v(a.ns) && (a.ns = [a.ns]), v(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), v(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), a.supportedLngs?.indexOf?.("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a), ue = () => {
}, lt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class ie extends de {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ne(e), this.services = {}, this.logger = W, this.modules = {
      external: []
    }, lt(this), t && !this.isInitialized && !e.isClone) {
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
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (v(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = Re();
    this.options = {
      ...s,
      ...this.options,
      ...Ne(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? W.init(r(this.modules.logger), this.options) : W.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : f = at;
      const p = new Me(this.options);
      this.store = new Oe(this.options.resources, this.options);
      const l = this.services;
      l.logger = W, l.resourceStore = this.store, l.languageUtils = p, l.pluralResolver = new st(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (l.formatter = r(f), l.formatter.init(l, this.options), this.options.interpolation.format = l.formatter.format.bind(l.formatter)), l.interpolator = new rt(this.options), l.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, l.backendConnector = new ut(r(this.modules.backend), l.resourceStore, l, this.options), l.backendConnector.on("*", function(S) {
        for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), m = 1; m < C; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.languageDetector && (l.languageDetector = r(this.modules.languageDetector), l.languageDetector.init && l.languageDetector.init(l, this.options.detection, this.options)), this.modules.i18nFormat && (l.i18nFormat = r(this.modules.i18nFormat), l.i18nFormat.init && l.i18nFormat.init(this)), this.translator = new he(this.services, this.options), this.translator.on("*", function(S) {
        for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), m = 1; m < C; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.external.forEach((S) => {
        S.init && S.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = ue), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments), e;
      };
    });
    const u = se(), c = () => {
      const f = (p, l) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(l), n(p, l);
      };
      if (this.languages && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), u;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
    const s = v(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const r = [], i = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((c) => {
          c !== "cimode" && r.indexOf(c) < 0 && r.push(c);
        });
      };
      s ? i(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => i(u)), this.options.preload?.forEach?.((o) => i(o)), this.services.backendConnector.load(r, this.options.ns, (o) => {
        !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(o);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const s = se();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = ue), this.services.backendConnector.reload(e, t, (r) => {
      s.resolve(), n(r);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ke.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const s = se();
    this.emit("languageChanging", e);
    const r = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, i = (u, c) => {
      c ? (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return n.t(...arguments);
      }), t && t(u, function() {
        return n.t(...arguments);
      });
    }, o = (u) => {
      !e && !u && this.services.languageDetector && (u = []);
      const c = v(u) ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      c && (this.language || r(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector?.cacheUserLanguage?.(c)), this.loadResources(c, (f) => {
        i(f, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const r = function(i, o) {
      let u;
      if (typeof o != "object") {
        for (var c = arguments.length, f = new Array(c > 2 ? c - 2 : 0), p = 2; p < c; p++)
          f[p - 2] = arguments[p];
        u = s.options.overloadTranslationOptionHandler([i, o].concat(f));
      } else
        u = {
          ...o
        };
      u.lng = u.lng || r.lng, u.lngs = u.lngs || r.lngs, u.ns = u.ns || r.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || r.keyPrefix);
      const l = s.options.keySeparator || ".";
      let S;
      return u.keyPrefix && Array.isArray(i) ? S = i.map((C) => `${u.keyPrefix}${l}${C}`) : S = u.keyPrefix ? `${u.keyPrefix}${l}${i}` : i, s.t(S, u);
    };
    return v(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
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
    const n = t.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, r = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const i = (o, u) => {
      const c = this.services.backendConnector.state[`${o}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, i);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, e) && (!s || i(r, e)));
  }
  loadNamespaces(e, t) {
    const n = se();
    return this.options.ns ? (v(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = se();
    v(e) && (e = [e]);
    const s = this.options.preload || [], r = e.filter((i) => s.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return r.length ? (this.options.preload = s.concat(r), this.loadResources((i) => {
      n.resolve(), t && t(i);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new Me(Re());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ie(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, r = new ie(s);
    return (e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach((o) => {
      r[o] = this[o];
    }), r.services = {
      ...this.services
    }, r.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, n && (r.store = new Oe(this.store.data, s), r.services.resourceStore = r.store), r.translator = new he(r.services, s), r.translator.on("*", function(o) {
      for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
        c[f - 1] = arguments[f];
      r.emit(o, ...c);
    }), r.init(s, t), r.translator.options = s, r.translator.backendConnector.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, r;
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
const Y = ie.createInstance();
Y.createInstance = ie.createInstance;
Y.createInstance;
Y.dir;
Y.init;
Y.loadResources;
Y.reloadResources;
Y.use;
Y.changeLanguage;
Y.getFixedT;
Y.t;
Y.exists;
Y.setDefaultNamespace;
Y.hasLoadedNamespace;
Y.loadNamespaces;
Y.loadLanguages;
const ct = {
  sun: "Sun",
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat"
}, ft = {
  dateFormat: "MM/DD/YYYY",
  titleFormat: "MMMM YYYY",
  btnToday: "Today",
  disabledTodayTooltip: "Disabled Today Button."
}, ht = {
  am: "AM",
  pm: "PM",
  btnNow: "Current time"
}, dt = {
  cancel: "Cancel",
  ignore: "Ignore",
  no: "No",
  ok: "OK",
  retry: "Retry",
  stop: "Abort",
  yes: "Yes"
}, gt = {
  search: "Search:",
  regex: "(/{Pattern}/ for regex)",
  replace: "Text for searching:",
  with: "Text for replacing:",
  replaceYN: "Are you sure to replace?",
  yes: "Yes",
  no: "No",
  all: "All",
  stop: "Stop"
}, pt = {
  placeholder: "Enter the keywords.",
  "results.no-result": "No result was found."
}, mt = {
  common: ct,
  datePicker: ft,
  timePicker: ht,
  confirm: dt,
  editor: gt,
  pageContainer: pt
}, yt = {
  sun: "日",
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土"
}, xt = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY年MM月",
  btnToday: "今日"
}, St = {
  btnNow: "現在時刻"
}, $t = {
  cancel: "取消",
  ignore: "無視",
  no: "いいえ",
  ok: "確認",
  retry: "再開",
  stop: "中止",
  yes: "はい"
}, bt = {
  yes: "はい",
  no: "いいえ"
}, vt = {
  placeholder: "検索キーワードを入力してください。",
  "results.no-result": "検索結果がありません。"
}, wt = {
  common: yt,
  datePicker: xt,
  timePicker: St,
  confirm: $t,
  editor: bt,
  pageContainer: vt
}, Lt = {
  sun: "일",
  mon: "월",
  tue: "화",
  wed: "수",
  thu: "목",
  fri: "금",
  sat: "토"
}, Ot = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY년 M월",
  btnToday: "오늘 선택",
  disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다."
}, Ct = {
  am: "오전",
  pm: "오후",
  btnNow: "현재 시간"
}, Mt = {
  cancel: "취소",
  ignore: "무시",
  no: "아니오",
  ok: "확인",
  retry: "재시도",
  stop: "중단",
  yes: "예"
}, Pt = {
  search: "검색어:",
  regex: "(/{패턴}/으로 정규식 사용)",
  replace: "찾을 문자열:",
  with: "변경될 문자열:",
  replaceYN: "변경하시겠습니까?",
  yes: "예",
  no: "아니오",
  all: "모두",
  stop: "취소"
}, Dt = {
  placeholder: "검색어를 입력해주세요",
  "results.no-result": "검색 결과가 없습니다."
}, kt = {
  common: Lt,
  datePicker: Ot,
  timePicker: Ct,
  confirm: Mt,
  editor: Pt,
  pageContainer: Dt
}, Rt = {
  sun: "日",
  mon: "一",
  tue: "二",
  wed: "三",
  thu: "四",
  fri: "五",
  sat: "六"
}, Nt = {
  dateFormat: "YYYY-MM-DD",
  titleFormat: "YYYY年MM月",
  btnToday: "今天"
}, Ft = {
  btnNow: "当前时间"
}, Tt = {
  cancel: "取消",
  ignore: "忽略",
  no: "否",
  ok: "确认",
  retry: "重试",
  stop: "中断",
  yes: "是"
}, Et = {
  yes: "是",
  no: "否"
}, Yt = {
  placeholder: "请输入关键词。",
  "results.no-result": "无查询结果。"
}, At = {
  common: Rt,
  datePicker: Nt,
  timePicker: Ft,
  confirm: Tt,
  editor: Et,
  pageContainer: Yt
};
$e.extend(Be);
const Fe = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], Te = ["일", "월", "화", "수", "목", "금", "토"], jt = "ko", It = "en", ne = "translation";
$e.locale("ko", {
  months: Fe,
  monthsShort: Fe,
  weekdays: Te,
  weekdaysShort: Te
});
Y.isInitialized ? He() : Ht();
const Vt = {
  get currentLang() {
    return Y.language;
  },
  t: Kt,
  i18next: Y,
  setLocale: Ee,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(a) {
    Ee(a);
  },
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  common: te("common"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  datePicker: te("datePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  timePicker: te("timePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  confirm: te("confirm"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  editor: te("editor"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  pageContainer: te("pageContainer")
};
function te(a) {
  return new Proxy({}, {
    get(e, t) {
      return Y.t(`${a}.${t}`);
    },
    set(e, t, n) {
      return Y.addResource(Vt.currentLang, ne, `${a}.${t}`, n), !0;
    }
  });
}
function Ee(a) {
  $e.locale(a), Y.changeLanguage(a);
}
function Kt(a) {
  return Y.t(a);
}
Y.on("languageChanged", (a) => {
  document.documentElement.lang = a;
});
function Ht() {
  Y.init({
    lng: jt,
    fallbackLng: It,
    initAsync: !1,
    defaultNS: ne
  }), He();
}
function He() {
  Y.addResourceBundle("ko", ne, kt).addResourceBundle("en", ne, mt).addResourceBundle("ja", ne, wt).addResourceBundle("zh", ne, At);
}
export {
  $e as d,
  Vt as i
};
//# sourceMappingURL=index-DUaQNDMW.js.map
