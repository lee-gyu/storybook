import { g as Ke } from "./_commonjsHelpers-DaMA6jEr.js";
var le = { exports: {} }, ze = le.exports, ve;
function Je() {
  return ve || (ve = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(ze, function() {
      var t = 1e3, n = 6e4, s = 36e5, r = "millisecond", i = "second", o = "minute", u = "hour", l = "day", c = "week", g = "month", f = "quarter", S = "year", C = "date", N = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(y) {
        var h = ["th", "st", "nd", "rd"], d = y % 100;
        return "[" + y + (h[(d - 20) % 10] || h[d] || h[0]) + "]";
      } }, P = function(y, h, d) {
        var x = String(y);
        return !x || x.length >= h ? y : "" + Array(h + 1 - x.length).join(d) + y;
      }, j = { s: P, z: function(y) {
        var h = -y.utcOffset(), d = Math.abs(h), x = Math.floor(d / 60), p = d % 60;
        return (h <= 0 ? "+" : "-") + P(x, 2, "0") + ":" + P(p, 2, "0");
      }, m: function y(h, d) {
        if (h.date() < d.date()) return -y(d, h);
        var x = 12 * (d.year() - h.year()) + (d.month() - h.month()), p = h.clone().add(x, g), b = d - p < 0, $ = h.clone().add(x + (b ? -1 : 1), g);
        return +(-(x + (d - p) / (b ? p - $ : $ - p)) || 0);
      }, a: function(y) {
        return y < 0 ? Math.ceil(y) || 0 : Math.floor(y);
      }, p: function(y) {
        return { M: g, y: S, w: c, d: l, D: C, h: u, m: o, s: i, ms: r, Q: f }[y] || String(y || "").toLowerCase().replace(/s$/, "");
      }, u: function(y) {
        return y === void 0;
      } }, I = "en", Y = {};
      Y[I] = k;
      var E = "$isDayjsObject", T = function(y) {
        return y instanceof R || !(!y || !y[E]);
      }, U = function y(h, d, x) {
        var p;
        if (!h) return I;
        if (typeof h == "string") {
          var b = h.toLowerCase();
          Y[b] && (p = b), d && (Y[b] = d, p = b);
          var $ = h.split("-");
          if (!p && $.length > 1) return y($[0]);
        } else {
          var v = h.name;
          Y[v] = h, p = v;
        }
        return !x && p && (I = p), p || !x && I;
      }, M = function(y, h) {
        if (T(y)) return y.clone();
        var d = typeof h == "object" ? h : {};
        return d.date = y, d.args = arguments, new R(d);
      }, w = j;
      w.l = U, w.i = T, w.w = function(y, h) {
        return M(y, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
      };
      var R = function() {
        function y(d) {
          this.$L = U(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[E] = !0;
        }
        var h = y.prototype;
        return h.parse = function(d) {
          this.$d = function(x) {
            var p = x.date, b = x.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (w.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var $ = p.match(m);
              if ($) {
                var v = $[2] - 1 || 0, D = ($[7] || "0").substring(0, 3);
                return b ? new Date(Date.UTC($[1], v, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, D)) : new Date($[1], v, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, D);
              }
            }
            return new Date(p);
          }(d), this.init();
        }, h.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, h.$utils = function() {
          return w;
        }, h.isValid = function() {
          return this.$d.toString() !== N;
        }, h.isSame = function(d, x) {
          var p = M(d);
          return this.startOf(x) <= p && p <= this.endOf(x);
        }, h.isAfter = function(d, x) {
          return M(d) < this.startOf(x);
        }, h.isBefore = function(d, x) {
          return this.endOf(x) < M(d);
        }, h.$g = function(d, x, p) {
          return w.u(d) ? this[x] : this.set(p, d);
        }, h.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, h.valueOf = function() {
          return this.$d.getTime();
        }, h.startOf = function(d, x) {
          var p = this, b = !!w.u(x) || x, $ = w.p(d), v = function(J, H) {
            var z = w.w(p.$u ? Date.UTC(p.$y, H, J) : new Date(p.$y, H, J), p);
            return b ? z : z.endOf(l);
          }, D = function(J, H) {
            return w.w(p.toDate()[J].apply(p.toDate("s"), (b ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)), p);
          }, A = this.$W, V = this.$M, B = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch ($) {
            case S:
              return b ? v(1, 0) : v(31, 11);
            case g:
              return b ? v(1, V) : v(0, V + 1);
            case c:
              var Z = this.$locale().weekStart || 0, X = (A < Z ? A + 7 : A) - Z;
              return v(b ? B - X : B + (6 - X), V);
            case l:
            case C:
              return D(G + "Hours", 0);
            case u:
              return D(G + "Minutes", 1);
            case o:
              return D(G + "Seconds", 2);
            case i:
              return D(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, h.endOf = function(d) {
          return this.startOf(d, !1);
        }, h.$set = function(d, x) {
          var p, b = w.p(d), $ = "set" + (this.$u ? "UTC" : ""), v = (p = {}, p[l] = $ + "Date", p[C] = $ + "Date", p[g] = $ + "Month", p[S] = $ + "FullYear", p[u] = $ + "Hours", p[o] = $ + "Minutes", p[i] = $ + "Seconds", p[r] = $ + "Milliseconds", p)[b], D = b === l ? this.$D + (x - this.$W) : x;
          if (b === g || b === S) {
            var A = this.clone().set(C, 1);
            A.$d[v](D), A.init(), this.$d = A.set(C, Math.min(this.$D, A.daysInMonth())).$d;
          } else v && this.$d[v](D);
          return this.init(), this;
        }, h.set = function(d, x) {
          return this.clone().$set(d, x);
        }, h.get = function(d) {
          return this[w.p(d)]();
        }, h.add = function(d, x) {
          var p, b = this;
          d = Number(d);
          var $ = w.p(x), v = function(V) {
            var B = M(b);
            return w.w(B.date(B.date() + Math.round(V * d)), b);
          };
          if ($ === g) return this.set(g, this.$M + d);
          if ($ === S) return this.set(S, this.$y + d);
          if ($ === l) return v(1);
          if ($ === c) return v(7);
          var D = (p = {}, p[o] = n, p[u] = s, p[i] = t, p)[$] || 1, A = this.$d.getTime() + d * D;
          return w.w(A, this);
        }, h.subtract = function(d, x) {
          return this.add(-1 * d, x);
        }, h.format = function(d) {
          var x = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || N;
          var b = d || "YYYY-MM-DDTHH:mm:ssZ", $ = w.z(this), v = this.$H, D = this.$m, A = this.$M, V = p.weekdays, B = p.months, G = p.meridiem, Z = function(H, z, Q, q) {
            return H && (H[z] || H(x, b)) || Q[z].slice(0, q);
          }, X = function(H) {
            return w.s(v % 12 || 12, H, "0");
          }, J = G || function(H, z, Q) {
            var q = H < 12 ? "AM" : "PM";
            return Q ? q.toLowerCase() : q;
          };
          return b.replace(L, function(H, z) {
            return z || function(Q) {
              switch (Q) {
                case "YY":
                  return String(x.$y).slice(-2);
                case "YYYY":
                  return w.s(x.$y, 4, "0");
                case "M":
                  return A + 1;
                case "MM":
                  return w.s(A + 1, 2, "0");
                case "MMM":
                  return Z(p.monthsShort, A, B, 3);
                case "MMMM":
                  return Z(B, A);
                case "D":
                  return x.$D;
                case "DD":
                  return w.s(x.$D, 2, "0");
                case "d":
                  return String(x.$W);
                case "dd":
                  return Z(p.weekdaysMin, x.$W, V, 2);
                case "ddd":
                  return Z(p.weekdaysShort, x.$W, V, 3);
                case "dddd":
                  return V[x.$W];
                case "H":
                  return String(v);
                case "HH":
                  return w.s(v, 2, "0");
                case "h":
                  return X(1);
                case "hh":
                  return X(2);
                case "a":
                  return J(v, D, !0);
                case "A":
                  return J(v, D, !1);
                case "m":
                  return String(D);
                case "mm":
                  return w.s(D, 2, "0");
                case "s":
                  return String(x.$s);
                case "ss":
                  return w.s(x.$s, 2, "0");
                case "SSS":
                  return w.s(x.$ms, 3, "0");
                case "Z":
                  return $;
              }
              return null;
            }(H) || $.replace(":", "");
          });
        }, h.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, h.diff = function(d, x, p) {
          var b, $ = this, v = w.p(x), D = M(d), A = (D.utcOffset() - this.utcOffset()) * n, V = this - D, B = function() {
            return w.m($, D);
          };
          switch (v) {
            case S:
              b = B() / 12;
              break;
            case g:
              b = B();
              break;
            case f:
              b = B() / 3;
              break;
            case c:
              b = (V - A) / 6048e5;
              break;
            case l:
              b = (V - A) / 864e5;
              break;
            case u:
              b = V / s;
              break;
            case o:
              b = V / n;
              break;
            case i:
              b = V / t;
              break;
            default:
              b = V;
          }
          return p ? b : w.a(b);
        }, h.daysInMonth = function() {
          return this.endOf(g).$D;
        }, h.$locale = function() {
          return Y[this.$L];
        }, h.locale = function(d, x) {
          if (!d) return this.$L;
          var p = this.clone(), b = U(d, x, !0);
          return b && (p.$L = b), p;
        }, h.clone = function() {
          return w.w(this.$d, this);
        }, h.toDate = function() {
          return new Date(this.valueOf());
        }, h.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, h.toISOString = function() {
          return this.$d.toISOString();
        }, h.toString = function() {
          return this.$d.toUTCString();
        }, y;
      }(), K = R.prototype;
      return M.prototype = K, [["$ms", r], ["$s", i], ["$m", o], ["$H", u], ["$W", l], ["$M", g], ["$y", S], ["$D", C]].forEach(function(y) {
        K[y[1]] = function(h) {
          return this.$g(h, y[0], y[1]);
        };
      }), M.extend = function(y, h) {
        return y.$i || (y(h, R, M), y.$i = !0), M;
      }, M.locale = U, M.isDayjs = T, M.unix = function(y) {
        return M(1e3 * y);
      }, M.en = Y[I], M.Ls = Y, M.p = {}, M;
    });
  }(le)), le.exports;
}
var We = Je();
const we = /* @__PURE__ */ Ke(We);
var ce = { exports: {} }, Ze = ce.exports, Oe;
function Qe() {
  return Oe || (Oe = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(Ze, function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, u = {}, l = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, c = function(m) {
        return function(L) {
          this[m] = +L;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(L) {
          if (!L || L === "Z") return 0;
          var k = L.match(/([+-]|\d\d)/g), P = 60 * k[1] + (+k[2] || 0);
          return P === 0 ? 0 : k[0] === "+" ? -P : P;
        }(m);
      }], f = function(m) {
        var L = u[m];
        return L && (L.indexOf ? L : L.s.concat(L.f));
      }, S = function(m, L) {
        var k, P = u.meridiem;
        if (P) {
          for (var j = 1; j <= 24; j += 1) if (m.indexOf(P(j, 0, L)) > -1) {
            k = j > 12;
            break;
          }
        } else k = m === (L ? "pm" : "PM");
        return k;
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
      }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [r, c("day")], Do: [o, function(m) {
        var L = u.ordinal, k = m.match(/\d+/);
        if (this.day = k[0], L) for (var P = 1; P <= 31; P += 1) L(P).replace(/\[|\]/g, "") === m && (this.day = P);
      }], w: [i, c("week")], ww: [r, c("week")], M: [i, c("month")], MM: [r, c("month")], MMM: [o, function(m) {
        var L = f("months"), k = (f("monthsShort") || L.map(function(P) {
          return P.slice(0, 3);
        })).indexOf(m) + 1;
        if (k < 1) throw new Error();
        this.month = k % 12 || k;
      }], MMMM: [o, function(m) {
        var L = f("months").indexOf(m) + 1;
        if (L < 1) throw new Error();
        this.month = L % 12 || L;
      }], Y: [/[+-]?\d+/, c("year")], YY: [r, function(m) {
        this.year = l(m);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function N(m) {
        var L, k;
        L = m, k = u && u.formats;
        for (var P = (m = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, w, R) {
          var K = R && R.toUpperCase();
          return w || k[R] || t[R] || k[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, h, d) {
            return h || d.slice(1);
          });
        })).match(n), j = P.length, I = 0; I < j; I += 1) {
          var Y = P[I], E = C[Y], T = E && E[0], U = E && E[1];
          P[I] = U ? { regex: T, parser: U } : Y.replace(/^\[|\]$/g, "");
        }
        return function(M) {
          for (var w = {}, R = 0, K = 0; R < j; R += 1) {
            var y = P[R];
            if (typeof y == "string") K += y.length;
            else {
              var h = y.regex, d = y.parser, x = M.slice(K), p = h.exec(x)[0];
              d.call(w, p), M = M.replace(p, "");
            }
          }
          return function(b) {
            var $ = b.afternoon;
            if ($ !== void 0) {
              var v = b.hours;
              $ ? v < 12 && (b.hours += 12) : v === 12 && (b.hours = 0), delete b.afternoon;
            }
          }(w), w;
        };
      }
      return function(m, L, k) {
        k.p.customParseFormat = !0, m && m.parseTwoDigitYear && (l = m.parseTwoDigitYear);
        var P = L.prototype, j = P.parse;
        P.parse = function(I) {
          var Y = I.date, E = I.utc, T = I.args;
          this.$u = E;
          var U = T[1];
          if (typeof U == "string") {
            var M = T[2] === !0, w = T[3] === !0, R = M || w, K = T[2];
            w && (K = T[2]), u = this.$locale(), !M && K && (u = k.Ls[K]), this.$d = function(x, p, b, $) {
              try {
                if (["x", "X"].indexOf(p) > -1) return new Date((p === "X" ? 1e3 : 1) * x);
                var v = N(p)(x), D = v.year, A = v.month, V = v.day, B = v.hours, G = v.minutes, Z = v.seconds, X = v.milliseconds, J = v.zone, H = v.week, z = /* @__PURE__ */ new Date(), Q = V || (D || A ? 1 : z.getDate()), q = D || z.getFullYear(), ae = 0;
                D && !A || (ae = A > 0 ? A - 1 : z.getMonth());
                var oe, me = B || 0, ye = G || 0, xe = Z || 0, be = X || 0;
                return J ? new Date(Date.UTC(q, ae, Q, me, ye, xe, be + 60 * J.offset * 1e3)) : b ? new Date(Date.UTC(q, ae, Q, me, ye, xe, be)) : (oe = new Date(q, ae, Q, me, ye, xe, be), H && (oe = $(oe).week(H).toDate()), oe);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(Y, U, E, k), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), R && Y != this.format(U) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (U instanceof Array) for (var y = U.length, h = 1; h <= y; h += 1) {
            T[1] = U[h - 1];
            var d = k.apply(this, T);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            h === y && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else j.call(this, I);
        };
      };
    });
  }(ce)), ce.exports;
}
var Ge = Qe();
const qe = /* @__PURE__ */ Ke(Ge), O = (a) => typeof a == "string", se = () => {
  let a, e;
  const t = new Promise((n, s) => {
    a = n, e = s;
  });
  return t.resolve = a, t.reject = e, t;
}, Le = (a) => a == null ? "" : "" + a, Xe = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, _e = /###/g, ke = (a) => a && a.indexOf("###") > -1 ? a.replace(_e, ".") : a, Ce = (a) => !a || O(a), re = (a, e, t) => {
  const n = O(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (Ce(a)) return {};
    const r = ke(n[s]);
    !a[r] && t && (a[r] = new t()), Object.prototype.hasOwnProperty.call(a, r) ? a = a[r] : a = {}, ++s;
  }
  return Ce(a) ? {} : {
    obj: a,
    k: ke(n[s])
  };
}, Pe = (a, e, t) => {
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
}, et = (a, e, t, n) => {
  const {
    obj: s,
    k: r
  } = re(a, e, Object);
  s[r] = s[r] || [], s[r].push(t);
}, fe = (a, e) => {
  const {
    obj: t,
    k: n
  } = re(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, n))
    return t[n];
}, tt = (a, e, t) => {
  const n = fe(a, t);
  return n !== void 0 ? n : fe(e, t);
}, He = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? O(a[n]) || a[n] instanceof String || O(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : He(a[n], e[n], t) : a[n] = e[n]);
  return a;
}, _ = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var nt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const st = (a) => O(a) ? a.replace(/[&<>"'\/]/g, (e) => nt[e]) : a;
class rt {
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
const it = [" ", ",", "?", "!", ";"], at = new rt(20), ot = (a, e, t) => {
  e = e || "", t = t || "";
  const n = it.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const s = at.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let r = !s.test(a);
  if (!r) {
    const i = a.indexOf(t);
    i > 0 && !s.test(a.substring(0, i)) && (r = !0);
  }
  return r;
}, $e = function(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!a) return;
  if (a[e])
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0;
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
}, de = (a) => a?.replace("_", "-"), ut = {
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
class he {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || ut, this.options = t, this.debug = t.debug;
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
    return new he(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new he(this.logger, e);
  }
}
var W = new he();
class pe {
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
      for (let l = 0; l < u; l++)
        o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [o, u] = i;
      for (let l = 0; l < u; l++)
        o.apply(o, [e, ...n]);
    });
  }
}
class Me extends pe {
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
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : O(n) && r ? o.push(...n.split(r)) : o.push(n)));
    const u = fe(this.data, o);
    return !u && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), u || !i || !O(n) ? u : $e(this.data?.[e]?.[t], n, r);
  }
  addResource(e, t, n, s) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), s = t, t = o[1]), this.addNamespaces(t), Pe(this.data, o, s), r.silent || this.emit("added", e, t, n, s);
  }
  addResources(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const r in n)
      (O(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
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
    let u = fe(this.data, o) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? He(u, n, r) : u = {
      ...u,
      ...n
    }, Pe(this.data, o, u), i.silent || this.emit("added", e, t, n);
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
var Ue = {
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
const De = {}, Re = (a) => !O(a) && typeof a != "boolean" && typeof a != "number";
class ge extends pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Xe(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = W.create("translator");
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
    const i = n && e.indexOf(n) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !ot(e, n, s);
    if (i && !o) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: O(r) ? [r] : r
        };
      const l = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(l[0]) > -1) && (r = l.shift()), e = l.join(s);
    }
    return {
      key: e,
      namespaces: O(r) ? [r] : r
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
    } = this.extractFromKey(e[e.length - 1], t), u = o[o.length - 1], l = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l?.toLowerCase() === "cimode") {
      if (c) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${u}${w}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: l,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${w}${i}`;
      }
      return s ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: l,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(t)
      } : i;
    }
    const g = this.resolve(e, t);
    let f = g?.res;
    const S = g?.usedKey || i, C = g?.exactUsedKey || i, N = ["[object Number]", "[object Function]", "[object RegExp]"], m = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, k = t.count !== void 0 && !O(t.count), P = ge.hasDefaultValue(t), j = k ? this.pluralResolver.getSuffix(l, t.count, t) : "", I = t.ordinal && k ? this.pluralResolver.getSuffix(l, t.count, {
      ordinal: !1
    }) : "", Y = k && !t.ordinal && t.count === 0, E = Y && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${j}`] || t[`defaultValue${I}`] || t.defaultValue;
    let T = f;
    L && !f && P && (T = E);
    const U = Re(T), M = Object.prototype.toString.apply(T);
    if (L && T && U && N.indexOf(M) < 0 && !(O(m) && Array.isArray(T))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, T, {
          ...t,
          ns: o
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return s ? (g.res = w, g.usedParams = this.getUsedParamsDetails(t), g) : w;
      }
      if (r) {
        const w = Array.isArray(T), R = w ? [] : {}, K = w ? C : S;
        for (const y in T)
          if (Object.prototype.hasOwnProperty.call(T, y)) {
            const h = `${K}${r}${y}`;
            P && !f ? R[y] = this.translate(h, {
              ...t,
              defaultValue: Re(E) ? E[y] : void 0,
              joinArrays: !1,
              ns: o
            }) : R[y] = this.translate(h, {
              ...t,
              joinArrays: !1,
              ns: o
            }), R[y] === h && (R[y] = T[y]);
          }
        f = R;
      }
    } else if (L && O(m) && Array.isArray(f))
      f = f.join(m), f && (f = this.extendTranslation(f, e, t, n));
    else {
      let w = !1, R = !1;
      !this.isValidLookup(f) && P && (w = !0, f = E), this.isValidLookup(f) || (R = !0, f = i);
      const y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : f, h = P && E !== f && this.options.updateMissing;
      if (R || w || h) {
        if (this.logger.log(h ? "updateKey" : "missingKey", l, u, i, h ? E : f), r) {
          const b = this.resolve(i, {
            ...t,
            keySeparator: !1
          });
          b && b.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let d = [];
        const x = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && x && x[0])
          for (let b = 0; b < x.length; b++)
            d.push(x[b]);
        else this.options.saveMissingTo === "all" ? d = this.languageUtils.toResolveHierarchy(t.lng || this.language) : d.push(t.lng || this.language);
        const p = (b, $, v) => {
          const D = P && v !== f ? v : y;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(b, u, $, D, h, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(b, u, $, D, h, t), this.emit("missingKey", b, u, $, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && k ? d.forEach((b) => {
          const $ = this.pluralResolver.getSuffixes(b, t);
          Y && t[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((v) => {
            p([b], i + v, t[`defaultValue${v}`] || E);
          });
        }) : p(d, i, E));
      }
      f = this.extendTranslation(f, e, t, g, n), R && f === i && this.options.appendNamespaceToMissingKey && (f = `${u}:${i}`), (R || w) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${i}` : i, w ? f : void 0));
    }
    return s ? (g.res = f, g.usedParams = this.getUsedParamsDetails(t), g) : f;
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
      const l = O(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let g = n.replace && !O(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, n.lng || this.language || s.usedLng, n), l) {
        const f = e.match(this.interpolator.nestingRegexp), S = f && f.length;
        c < S && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, S = new Array(f), C = 0; C < f; C++)
          S[C] = arguments[C];
        return r?.[0] === S[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`), null) : i.translate(...S, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, u = O(o) ? [o] : o;
    return e != null && u?.length && n.applyPostProcessor !== !1 && (e = Ue.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, s, r, i, o;
    return O(e) && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const l = this.extractFromKey(u, t), c = l.key;
      s = c;
      let g = l.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !O(t.count), S = f && !t.ordinal && t.count === 0, C = t.context !== void 0 && (O(t.context) || typeof t.context == "number") && t.context !== "", N = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      g.forEach((m) => {
        this.isValidLookup(n) || (o = m, !De[`${N[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (De[`${N[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${N.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), N.forEach((L) => {
          if (this.isValidLookup(n)) return;
          i = L;
          const k = [c];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(k, c, L, m, t);
          else {
            let j;
            f && (j = this.pluralResolver.getSuffix(L, t.count, t));
            const I = `${this.options.pluralSeparator}zero`, Y = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (k.push(c + j), t.ordinal && j.indexOf(Y) === 0 && k.push(c + j.replace(Y, this.options.pluralSeparator)), S && k.push(c + I)), C) {
              const E = `${c}${this.options.contextSeparator}${t.context}`;
              k.push(E), f && (k.push(E + j), t.ordinal && j.indexOf(Y) === 0 && k.push(E + j.replace(Y, this.options.pluralSeparator)), S && k.push(E + I));
            }
          }
          let P;
          for (; P = k.pop(); )
            this.isValidLookup(n) || (r = P, n = this.getResource(L, m, P, t));
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !O(e.replace);
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
class Ne {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = W.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = de(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = de(e), !e || e.indexOf("-") < 0) return e;
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
      t = this.options.supportedLngs.find((r) => {
        if (r === s) return r;
        if (!(r.indexOf("-") < 0 && s.indexOf("-") < 0) && (r.indexOf("-") > 0 && s.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === s || r.indexOf(s) === 0 && s.length > 1))
          return r;
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
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], r = (i) => {
      i && (this.isSupportedCode(i) ? s.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return O(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : O(e) && r(this.formatLanguageCode(e)), n.forEach((i) => {
      s.indexOf(i) < 0 && r(this.formatLanguageCode(i));
    }), s;
  }
}
const Fe = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ee = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class lt {
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
    const n = de(e === "dev" ? "en" : e), s = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Ee;
      if (!e.match(/-|_/)) return Ee;
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
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, r) => Fe[s] - Fe[r]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Te = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = tt(a, e, t);
  return !r && s && O(t) && (r = $e(a, t, n), r === void 0 && (r = $e(e, t, n))), r;
}, Se = (a) => a.replace(/\$/g, "$$$$");
class ct {
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
      formatSeparator: l,
      unescapeSuffix: c,
      unescapePrefix: g,
      nestingPrefix: f,
      nestingPrefixEscaped: S,
      nestingSuffix: C,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: m,
      maxReplaces: L,
      alwaysFormat: k
    } = e.interpolation;
    this.escape = t !== void 0 ? t : st, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = r ? _(r) : i || "{{", this.suffix = o ? _(o) : u || "}}", this.formatSeparator = l || ",", this.unescapePrefix = c ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? _(f) : S || _("$t("), this.nestingSuffix = C ? _(C) : N || _(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
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
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (S) => {
      if (S.indexOf(this.formatSeparator) < 0) {
        const L = Te(t, u, S, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, n, {
          ...s,
          ...t,
          interpolationkey: S
        }) : L;
      }
      const C = S.split(this.formatSeparator), N = C.shift().trim(), m = C.join(this.formatSeparator).trim();
      return this.format(Te(t, u, N, this.options.keySeparator, this.options.ignoreJSONStructure), m, n, {
        ...s,
        ...t,
        interpolationkey: N
      });
    };
    this.resetRegExp();
    const c = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, g = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (S) => Se(S)
    }, {
      regex: this.regexp,
      safeValue: (S) => this.escapeValue ? Se(this.escape(S)) : Se(S)
    }].forEach((S) => {
      for (o = 0; r = S.regex.exec(e); ) {
        const C = r[1].trim();
        if (i = l(C), i === void 0)
          if (typeof c == "function") {
            const m = c(e, r, s);
            i = O(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, C))
            i = "";
          else if (g) {
            i = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${C} for interpolating ${e}`), i = "";
        else !O(i) && !this.useRawValueToEscape && (i = Le(i));
        const N = S.safeValue(i);
        if (e = e.replace(r[0], N), g ? (S.regex.lastIndex += i.length, S.regex.lastIndex -= r[0].length) : S.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, i;
    const o = (u, l) => {
      const c = this.nestingOptionsSeparator;
      if (u.indexOf(c) < 0) return u;
      const g = u.split(new RegExp(`${c}[ ]*{`));
      let f = `{${g[1]}`;
      u = g[0], f = this.interpolate(f, i);
      const S = f.match(/'/g), C = f.match(/"/g);
      ((S?.length ?? 0) % 2 === 0 && !C || C.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        i = JSON.parse(f), l && (i = {
          ...l,
          ...i
        });
      } catch (N) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, N), `${u}${c}${f}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let u = [];
      i = {
        ...n
      }, i = i.replace && !O(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let l = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const c = s[1].split(this.formatSeparator).map((g) => g.trim());
        s[1] = c.shift(), u = c, l = !0;
      }
      if (r = t(o.call(this, s[1].trim(), i), i), r && s[0] === e && !O(r)) return r;
      O(r) || (r = Le(r)), r || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), r = ""), l && (r = u.reduce((c, g) => this.format(c, g, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), r.trim())), e = e.replace(s[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ft = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const n = a.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((i) => {
      if (i) {
        const [o, ...u] = i.split(":"), l = u.join(":").trim().replace(/^'+|'+$/g, ""), c = o.trim();
        t[c] || (t[c] = l), l === "false" && (t[c] = !1), l === "true" && (t[c] = !0), isNaN(l) || (t[c] = parseInt(l, 10));
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
    return o || (o = a(de(n), s), e[i] = o), o(t);
  };
};
class dt {
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
        formatName: l,
        formatOptions: c
      } = ft(u);
      if (this.formats[l]) {
        let g = o;
        try {
          const f = s?.formatParams?.[s.interpolationkey] || {}, S = f.locale || f.lng || s.locale || s.lng || n;
          g = this.formats[l](o, S, {
            ...c,
            ...s,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return o;
    }, e);
  }
}
const ht = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class gt extends pe {
  constructor(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = W.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const r = {}, i = {}, o = {}, u = {};
    return e.forEach((l) => {
      let c = !0;
      t.forEach((g) => {
        const f = `${l}|${g}`;
        !n.reload && this.store.hasResourceBundle(l, g) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? i[f] === void 0 && (i[f] = !0) : (this.state[f] = 1, c = !1, i[f] === void 0 && (i[f] = !0), r[f] === void 0 && (r[f] = !0), u[g] === void 0 && (u[g] = !0)));
      }), c || (o[l] = !0);
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
      et(u.loaded, [r], i), ht(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((l) => {
        o[l] || (o[l] = {});
        const c = u.loaded[l];
        c.length && c.forEach((g) => {
          o[l][g] === void 0 && (o[l][g] = !0);
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
    const o = (l, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      if (l && c && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, r * 2, i);
        }, r);
        return;
      }
      i(l, c);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const l = u(e, t);
        l && typeof l.then == "function" ? l.then((c) => o(null, c)).catch(o) : o(null, l);
      } catch (l) {
        o(l);
      }
      return;
    }
    return u(e, t, o);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    O(e) && (e = this.languageUtils.toResolveHierarchy(e)), O(t) && (t = [t]);
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
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let c;
            l.length === 5 ? c = l(e, t, n, s, u) : c = l(e, t, n, s), c && typeof c.then == "function" ? c.then((g) => o(null, g)).catch(o) : o(null, c);
          } catch (c) {
            o(c);
          }
        else
          l(e, t, n, s, o, u);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const Ae = () => ({
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
    if (typeof a[1] == "object" && (e = a[1]), O(a[1]) && (e.defaultValue = a[1]), O(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
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
}), je = (a) => (O(a.ns) && (a.ns = [a.ns]), O(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), O(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), a.supportedLngs?.indexOf?.("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a), ue = () => {
}, pt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class ie extends pe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = je(e), this.services = {}, this.logger = W, this.modules = {
      external: []
    }, pt(this), t && !this.isInitialized && !e.isClone) {
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
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (O(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = Ae();
    this.options = {
      ...s,
      ...this.options,
      ...je(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? W.init(r(this.modules.logger), this.options) : W.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = dt;
      const g = new Ne(this.options);
      this.store = new Me(this.options.resources, this.options);
      const f = this.services;
      f.logger = W, f.resourceStore = this.store, f.languageUtils = g, f.pluralResolver = new lt(g, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = r(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new ct(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new gt(r(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(S) {
        for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), m = 1; m < C; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.languageDetector && (f.languageDetector = r(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = r(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new ge(this.services, this.options), this.translator.on("*", function(S) {
        for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), m = 1; m < C; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.external.forEach((S) => {
        S.init && S.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = ue), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const u = se(), l = () => {
      const c = (g, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(f), n(g, f);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), u;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
    const s = O(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const r = [], i = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((l) => {
          l !== "cimode" && r.indexOf(l) < 0 && r.push(l);
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
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ue.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    }, i = (u, l) => {
      l ? (r(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return n.t(...arguments);
      }), t && t(u, function() {
        return n.t(...arguments);
      });
    }, o = (u) => {
      !e && !u && this.services.languageDetector && (u = []);
      const l = O(u) ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      l && (this.language || r(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector?.cacheUserLanguage?.(l)), this.loadResources(l, (c) => {
        i(c, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const r = function(i, o) {
      let u;
      if (typeof o != "object") {
        for (var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), g = 2; g < l; g++)
          c[g - 2] = arguments[g];
        u = s.options.overloadTranslationOptionHandler([i, o].concat(c));
      } else
        u = {
          ...o
        };
      u.lng = u.lng || r.lng, u.lngs = u.lngs || r.lngs, u.ns = u.ns || r.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || r.keyPrefix);
      const f = s.options.keySeparator || ".";
      let S;
      return u.keyPrefix && Array.isArray(i) ? S = i.map((C) => `${u.keyPrefix}${f}${C}`) : S = u.keyPrefix ? `${u.keyPrefix}${f}${i}` : i, s.t(S, u);
    };
    return O(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
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
      const l = this.services.backendConnector.state[`${o}|${u}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, i);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, e) && (!s || i(r, e)));
  }
  loadNamespaces(e, t) {
    const n = se();
    return this.options.ns ? (O(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = se();
    O(e) && (e = [e]);
    const s = this.options.preload || [], r = e.filter((i) => s.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return r.length ? (this.options.preload = s.concat(r), this.loadResources((i) => {
      n.resolve(), t && t(i);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new Ne(Ae());
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
    if ((e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach((o) => {
      r[o] = this[o];
    }), r.services = {
      ...this.services
    }, r.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, n) {
      const o = Object.keys(this.store.data).reduce((u, l) => (u[l] = {
        ...this.store.data[l]
      }, Object.keys(u[l]).reduce((c, g) => (c[g] = {
        ...u[l][g]
      }, c), {})), {});
      r.store = new Me(o, s), r.services.resourceStore = r.store;
    }
    return r.translator = new ge(r.services, s), r.translator.on("*", function(o) {
      for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++)
        l[c - 1] = arguments[c];
      r.emit(o, ...l);
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
const F = ie.createInstance();
F.createInstance = ie.createInstance;
F.createInstance;
F.dir;
F.init;
F.loadResources;
F.reloadResources;
F.use;
F.changeLanguage;
F.getFixedT;
F.t;
F.exists;
F.setDefaultNamespace;
F.hasLoadedNamespace;
F.loadNamespaces;
F.loadLanguages;
const mt = { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, yt = { dateFormat: "MM/DD/YYYY", titleFormat: "MMMM YYYY", btnToday: "Today", disabledTodayTooltip: "Disabled Today Button." }, xt = { am: "AM", pm: "PM", btnNow: "Current time" }, bt = { cancel: "Cancel", ignore: "Ignore", no: "No", ok: "OK", retry: "Retry", stop: "Abort", yes: "Yes" }, St = { search: "Search:", regex: "(/{Pattern}/ for regex)", replace: "Text for searching:", with: "Text for replacing:", replaceYN: "Are you sure to replace?", yes: "Yes", no: "No", all: "All", stop: "Stop" }, $t = { placeholder: "Enter the keywords.", "results.no-result": "No result was found." }, wt = { "sort.ascending": "Sort Ascending", "sort.descending": "Sort Descending", "sort.clear": "Clear Sort", "search.placeholder": "Enter the keywords.", "list.no-result": "No result was found.", "list.select-all": "Select All", "list.blanks": "Blanks", "string.input.placeholder": "Enter the keywords.", "check.check-all": "Check All", "check.uncheck-all": "Uncheck All", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number.", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date.", "date.between.from": "Start Date", "date.between.to": "End Date", ok: "OK", clear: "Clear" }, vt = {
  common: mt,
  datePicker: yt,
  timePicker: xt,
  confirm: bt,
  editor: St,
  pageContainer: $t,
  rowFilter: wt
}, Ot = { sun: "日", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土" }, Lt = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY年MM月", btnToday: "今日" }, kt = { btnNow: "現在時刻" }, Ct = { cancel: "取消", ignore: "無視", no: "いいえ", ok: "確認", retry: "再開", stop: "中止", yes: "はい" }, Pt = { yes: "はい", no: "いいえ" }, Mt = { placeholder: "検索キーワードを入力してください。", "results.no-result": "検索結果がありません。" }, Dt = { "sort.ascending": "昇順整列", "sort.descending": "降順整列", "sort.clear": "整列初期化", "search.placeholder": "検索キーワードを入力してください。", "list.no-result": "検索結果がありません。", "list.select-all": "全選択", "list.blanks": "空白", "string.input.placeholder": "検索キーワードを入力してください。", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date", "date.between.from": "開始日", "date.between.to": "終了日", ok: "確認", clear: "初期化" }, Rt = {
  common: Ot,
  datePicker: Lt,
  timePicker: kt,
  confirm: Ct,
  editor: Pt,
  pageContainer: Mt,
  rowFilter: Dt
}, Nt = { sun: "일", mon: "월", tue: "화", wed: "수", thu: "목", fri: "금", sat: "토" }, Ft = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY년 M월", btnToday: "오늘 선택", disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다." }, Et = { am: "오전", pm: "오후", btnNow: "현재 시간" }, Tt = { cancel: "취소", ignore: "무시", no: "아니오", ok: "확인", retry: "재시도", stop: "중단", yes: "예" }, At = { search: "검색어:", regex: "(/{패턴}/으로 정규식 사용)", replace: "찾을 문자열:", with: "변경될 문자열:", replaceYN: "변경하시겠습니까?", yes: "예", no: "아니오", all: "모두", stop: "취소" }, jt = { placeholder: "검색어를 입력해주세요", "results.no-result": "검색 결과가 없습니다." }, Yt = { "sort.ascending": "오름차순 정렬", "sort.descending": "내림차순 정렬", "sort.clear": "정렬 제거", "search.placeholder": "검색어 입력", "list.no-result": "검색 결과 없음", "list.select-all": "전체 선택", "list.blanks": "셀 값 없음", "string.input.placeholder": "검색어 입력", "check.check-all": "전체 체크", "check.uncheck-all": "전체 체크 해제", "number.select.between": "범위", "number.select.blank": "빈 값", "number.input.placeholder": "숫자 입력", "number.between.from": "최소값", "number.between.to": "최대값", "date.select.between": "범위", "date.select.blank": "빈 값", "date.input.placeholder": "날짜 입력", "date.between.from": "시작 날짜", "date.between.to": "종료 날짜", ok: "확인", clear: "초기화" }, It = {
  common: Nt,
  datePicker: Ft,
  timePicker: Et,
  confirm: Tt,
  editor: At,
  pageContainer: jt,
  rowFilter: Yt
}, Vt = { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, Kt = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY年MM月", btnToday: "今天" }, Ht = { btnNow: "当前时间" }, Ut = { cancel: "取消", ignore: "忽略", no: "否", ok: "确认", retry: "重试", stop: "中断", yes: "是" }, Bt = { yes: "是", no: "否" }, zt = { placeholder: "请输入关键词。", "results.no-result": "无查询结果。" }, Jt = { "sort.ascending": "Sort Ascending", "sort.descending": "Sort Descending", "sort.clear": "排列初始化", "search.placeholder": "请输入关键词。", "list.no-result": "无查询结果。", "list.select-all": "全部选择", "list.blanks": "空白", "string.input.placeholder": "请输入关键词。", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date", "date.between.from": "开始日期", "date.between.to": "结束日期", ok: "确认", clear: "初始化" }, Wt = {
  common: Vt,
  datePicker: Kt,
  timePicker: Ht,
  confirm: Ut,
  editor: Bt,
  pageContainer: zt,
  rowFilter: Jt
};
we.extend(qe);
const Ye = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], Ie = ["일", "월", "화", "수", "목", "금", "토"], Zt = "ko", Qt = "en", ne = "translation";
we.locale("ko", {
  months: Ye,
  monthsShort: Ye,
  weekdays: Ie,
  weekdaysShort: Ie
});
F.isInitialized ? Be() : Xt();
const Gt = {
  get currentLang() {
    return F.language;
  },
  t: qt,
  i18next: F,
  setLocale: Ve,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(a) {
    Ve(a);
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
      return F.t(`${a}.${t}`);
    },
    set(e, t, n) {
      return F.addResource(Gt.currentLang, ne, `${a}.${t}`, n), !0;
    }
  });
}
function Ve(a) {
  we.locale(a), F.changeLanguage(a);
}
function qt(a) {
  return F.t(a);
}
F.on("languageChanged", (a) => {
  document.documentElement.lang = a;
});
function Xt() {
  F.init({
    lng: Zt,
    fallbackLng: Qt,
    initAsync: !1,
    defaultNS: ne
  }), Be();
}
function Be() {
  F.addResourceBundle("ko", ne, It).addResourceBundle("en", ne, vt).addResourceBundle("ja", ne, Rt).addResourceBundle("zh", ne, Wt);
}
export {
  we as d,
  Gt as i
};
//# sourceMappingURL=index-BI35NT3p.js.map
