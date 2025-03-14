import { g as He } from "./_commonjsHelpers-DaMA6jEr.js";
var ue = { exports: {} }, ze = ue.exports, $e;
function We() {
  return $e || ($e = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(ze, function() {
      var t = 1e3, n = 6e4, s = 36e5, r = "millisecond", i = "second", o = "minute", l = "hour", u = "day", c = "week", g = "month", f = "quarter", S = "year", k = "date", N = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(y) {
        var h = ["th", "st", "nd", "rd"], d = y % 100;
        return "[" + y + (h[(d - 20) % 10] || h[d] || h[0]) + "]";
      } }, M = function(y, h, d) {
        var b = String(y);
        return !b || b.length >= h ? y : "" + Array(h + 1 - b.length).join(d) + y;
      }, I = { s: M, z: function(y) {
        var h = -y.utcOffset(), d = Math.abs(h), b = Math.floor(d / 60), p = d % 60;
        return (h <= 0 ? "+" : "-") + M(b, 2, "0") + ":" + M(p, 2, "0");
      }, m: function y(h, d) {
        if (h.date() < d.date()) return -y(d, h);
        var b = 12 * (d.year() - h.year()) + (d.month() - h.month()), p = h.clone().add(b, g), x = d - p < 0, w = h.clone().add(b + (x ? -1 : 1), g);
        return +(-(b + (d - p) / (x ? p - w : w - p)) || 0);
      }, a: function(y) {
        return y < 0 ? Math.ceil(y) || 0 : Math.floor(y);
      }, p: function(y) {
        return { M: g, y: S, w: c, d: u, D: k, h: l, m: o, s: i, ms: r, Q: f }[y] || String(y || "").toLowerCase().replace(/s$/, "");
      }, u: function(y) {
        return y === void 0;
      } }, j = "en", Y = {};
      Y[j] = C;
      var E = "$isDayjsObject", A = function(y) {
        return y instanceof R || !(!y || !y[E]);
      }, K = function y(h, d, b) {
        var p;
        if (!h) return j;
        if (typeof h == "string") {
          var x = h.toLowerCase();
          Y[x] && (p = x), d && (Y[x] = d, p = x);
          var w = h.split("-");
          if (!p && w.length > 1) return y(w[0]);
        } else {
          var $ = h.name;
          Y[$] = h, p = $;
        }
        return !b && p && (j = p), p || !b && j;
      }, P = function(y, h) {
        if (A(y)) return y.clone();
        var d = typeof h == "object" ? h : {};
        return d.date = y, d.args = arguments, new R(d);
      }, v = I;
      v.l = K, v.i = A, v.w = function(y, h) {
        return P(y, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
      };
      var R = function() {
        function y(d) {
          this.$L = K(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[E] = !0;
        }
        var h = y.prototype;
        return h.parse = function(d) {
          this.$d = function(b) {
            var p = b.date, x = b.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (v.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var w = p.match(m);
              if (w) {
                var $ = w[2] - 1 || 0, D = (w[7] || "0").substring(0, 3);
                return x ? new Date(Date.UTC(w[1], $, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, D)) : new Date(w[1], $, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, D);
              }
            }
            return new Date(p);
          }(d), this.init();
        }, h.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, h.$utils = function() {
          return v;
        }, h.isValid = function() {
          return this.$d.toString() !== N;
        }, h.isSame = function(d, b) {
          var p = P(d);
          return this.startOf(b) <= p && p <= this.endOf(b);
        }, h.isAfter = function(d, b) {
          return P(d) < this.startOf(b);
        }, h.isBefore = function(d, b) {
          return this.endOf(b) < P(d);
        }, h.$g = function(d, b, p) {
          return v.u(d) ? this[b] : this.set(p, d);
        }, h.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, h.valueOf = function() {
          return this.$d.getTime();
        }, h.startOf = function(d, b) {
          var p = this, x = !!v.u(b) || b, w = v.p(d), $ = function(W, V) {
            var z = v.w(p.$u ? Date.UTC(p.$y, V, W) : new Date(p.$y, V, W), p);
            return x ? z : z.endOf(u);
          }, D = function(W, V) {
            return v.w(p.toDate()[W].apply(p.toDate("s"), (x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), p);
          }, F = this.$W, U = this.$M, B = this.$D, Q = "set" + (this.$u ? "UTC" : "");
          switch (w) {
            case S:
              return x ? $(1, 0) : $(31, 11);
            case g:
              return x ? $(1, U) : $(0, U + 1);
            case c:
              var Z = this.$locale().weekStart || 0, X = (F < Z ? F + 7 : F) - Z;
              return $(x ? B - X : B + (6 - X), U);
            case u:
            case k:
              return D(Q + "Hours", 0);
            case l:
              return D(Q + "Minutes", 1);
            case o:
              return D(Q + "Seconds", 2);
            case i:
              return D(Q + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, h.endOf = function(d) {
          return this.startOf(d, !1);
        }, h.$set = function(d, b) {
          var p, x = v.p(d), w = "set" + (this.$u ? "UTC" : ""), $ = (p = {}, p[u] = w + "Date", p[k] = w + "Date", p[g] = w + "Month", p[S] = w + "FullYear", p[l] = w + "Hours", p[o] = w + "Minutes", p[i] = w + "Seconds", p[r] = w + "Milliseconds", p)[x], D = x === u ? this.$D + (b - this.$W) : b;
          if (x === g || x === S) {
            var F = this.clone().set(k, 1);
            F.$d[$](D), F.init(), this.$d = F.set(k, Math.min(this.$D, F.daysInMonth())).$d;
          } else $ && this.$d[$](D);
          return this.init(), this;
        }, h.set = function(d, b) {
          return this.clone().$set(d, b);
        }, h.get = function(d) {
          return this[v.p(d)]();
        }, h.add = function(d, b) {
          var p, x = this;
          d = Number(d);
          var w = v.p(b), $ = function(U) {
            var B = P(x);
            return v.w(B.date(B.date() + Math.round(U * d)), x);
          };
          if (w === g) return this.set(g, this.$M + d);
          if (w === S) return this.set(S, this.$y + d);
          if (w === u) return $(1);
          if (w === c) return $(7);
          var D = (p = {}, p[o] = n, p[l] = s, p[i] = t, p)[w] || 1, F = this.$d.getTime() + d * D;
          return v.w(F, this);
        }, h.subtract = function(d, b) {
          return this.add(-1 * d, b);
        }, h.format = function(d) {
          var b = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || N;
          var x = d || "YYYY-MM-DDTHH:mm:ssZ", w = v.z(this), $ = this.$H, D = this.$m, F = this.$M, U = p.weekdays, B = p.months, Q = p.meridiem, Z = function(V, z, G, q) {
            return V && (V[z] || V(b, x)) || G[z].slice(0, q);
          }, X = function(V) {
            return v.s($ % 12 || 12, V, "0");
          }, W = Q || function(V, z, G) {
            var q = V < 12 ? "AM" : "PM";
            return G ? q.toLowerCase() : q;
          };
          return x.replace(L, function(V, z) {
            return z || function(G) {
              switch (G) {
                case "YY":
                  return String(b.$y).slice(-2);
                case "YYYY":
                  return v.s(b.$y, 4, "0");
                case "M":
                  return F + 1;
                case "MM":
                  return v.s(F + 1, 2, "0");
                case "MMM":
                  return Z(p.monthsShort, F, B, 3);
                case "MMMM":
                  return Z(B, F);
                case "D":
                  return b.$D;
                case "DD":
                  return v.s(b.$D, 2, "0");
                case "d":
                  return String(b.$W);
                case "dd":
                  return Z(p.weekdaysMin, b.$W, U, 2);
                case "ddd":
                  return Z(p.weekdaysShort, b.$W, U, 3);
                case "dddd":
                  return U[b.$W];
                case "H":
                  return String($);
                case "HH":
                  return v.s($, 2, "0");
                case "h":
                  return X(1);
                case "hh":
                  return X(2);
                case "a":
                  return W($, D, !0);
                case "A":
                  return W($, D, !1);
                case "m":
                  return String(D);
                case "mm":
                  return v.s(D, 2, "0");
                case "s":
                  return String(b.$s);
                case "ss":
                  return v.s(b.$s, 2, "0");
                case "SSS":
                  return v.s(b.$ms, 3, "0");
                case "Z":
                  return w;
              }
              return null;
            }(V) || w.replace(":", "");
          });
        }, h.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, h.diff = function(d, b, p) {
          var x, w = this, $ = v.p(b), D = P(d), F = (D.utcOffset() - this.utcOffset()) * n, U = this - D, B = function() {
            return v.m(w, D);
          };
          switch ($) {
            case S:
              x = B() / 12;
              break;
            case g:
              x = B();
              break;
            case f:
              x = B() / 3;
              break;
            case c:
              x = (U - F) / 6048e5;
              break;
            case u:
              x = (U - F) / 864e5;
              break;
            case l:
              x = U / s;
              break;
            case o:
              x = U / n;
              break;
            case i:
              x = U / t;
              break;
            default:
              x = U;
          }
          return p ? x : v.a(x);
        }, h.daysInMonth = function() {
          return this.endOf(g).$D;
        }, h.$locale = function() {
          return Y[this.$L];
        }, h.locale = function(d, b) {
          if (!d) return this.$L;
          var p = this.clone(), x = K(d, b, !0);
          return x && (p.$L = x), p;
        }, h.clone = function() {
          return v.w(this.$d, this);
        }, h.toDate = function() {
          return new Date(this.valueOf());
        }, h.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, h.toISOString = function() {
          return this.$d.toISOString();
        }, h.toString = function() {
          return this.$d.toUTCString();
        }, y;
      }(), H = R.prototype;
      return P.prototype = H, [["$ms", r], ["$s", i], ["$m", o], ["$H", l], ["$W", u], ["$M", g], ["$y", S], ["$D", k]].forEach(function(y) {
        H[y[1]] = function(h) {
          return this.$g(h, y[0], y[1]);
        };
      }), P.extend = function(y, h) {
        return y.$i || (y(h, R, P), y.$i = !0), P;
      }, P.locale = K, P.isDayjs = A, P.unix = function(y) {
        return P(1e3 * y);
      }, P.en = Y[j], P.Ls = Y, P.p = {}, P;
    });
  }(ue)), ue.exports;
}
var Je = We();
const ve = /* @__PURE__ */ He(Je);
var ce = { exports: {} }, Ze = ce.exports, Oe;
function Ge() {
  return Oe || (Oe = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(Ze, function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, c = function(m) {
        return function(L) {
          this[m] = +L;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(L) {
          if (!L || L === "Z") return 0;
          var C = L.match(/([+-]|\d\d)/g), M = 60 * C[1] + (+C[2] || 0);
          return M === 0 ? 0 : C[0] === "+" ? -M : M;
        }(m);
      }], f = function(m) {
        var L = l[m];
        return L && (L.indexOf ? L : L.s.concat(L.f));
      }, S = function(m, L) {
        var C, M = l.meridiem;
        if (M) {
          for (var I = 1; I <= 24; I += 1) if (m.indexOf(M(I, 0, L)) > -1) {
            C = I > 12;
            break;
          }
        } else C = m === (L ? "pm" : "PM");
        return C;
      }, k = { A: [o, function(m) {
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
        var L = l.ordinal, C = m.match(/\d+/);
        if (this.day = C[0], L) for (var M = 1; M <= 31; M += 1) L(M).replace(/\[|\]/g, "") === m && (this.day = M);
      }], w: [i, c("week")], ww: [r, c("week")], M: [i, c("month")], MM: [r, c("month")], MMM: [o, function(m) {
        var L = f("months"), C = (f("monthsShort") || L.map(function(M) {
          return M.slice(0, 3);
        })).indexOf(m) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], MMMM: [o, function(m) {
        var L = f("months").indexOf(m) + 1;
        if (L < 1) throw new Error();
        this.month = L % 12 || L;
      }], Y: [/[+-]?\d+/, c("year")], YY: [r, function(m) {
        this.year = u(m);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function N(m) {
        var L, C;
        L = m, C = l && l.formats;
        for (var M = (m = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, v, R) {
          var H = R && R.toUpperCase();
          return v || C[R] || t[R] || C[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, h, d) {
            return h || d.slice(1);
          });
        })).match(n), I = M.length, j = 0; j < I; j += 1) {
          var Y = M[j], E = k[Y], A = E && E[0], K = E && E[1];
          M[j] = K ? { regex: A, parser: K } : Y.replace(/^\[|\]$/g, "");
        }
        return function(P) {
          for (var v = {}, R = 0, H = 0; R < I; R += 1) {
            var y = M[R];
            if (typeof y == "string") H += y.length;
            else {
              var h = y.regex, d = y.parser, b = P.slice(H), p = h.exec(b)[0];
              d.call(v, p), P = P.replace(p, "");
            }
          }
          return function(x) {
            var w = x.afternoon;
            if (w !== void 0) {
              var $ = x.hours;
              w ? $ < 12 && (x.hours += 12) : $ === 12 && (x.hours = 0), delete x.afternoon;
            }
          }(v), v;
        };
      }
      return function(m, L, C) {
        C.p.customParseFormat = !0, m && m.parseTwoDigitYear && (u = m.parseTwoDigitYear);
        var M = L.prototype, I = M.parse;
        M.parse = function(j) {
          var Y = j.date, E = j.utc, A = j.args;
          this.$u = E;
          var K = A[1];
          if (typeof K == "string") {
            var P = A[2] === !0, v = A[3] === !0, R = P || v, H = A[2];
            v && (H = A[2]), l = this.$locale(), !P && H && (l = C.Ls[H]), this.$d = function(b, p, x, w) {
              try {
                if (["x", "X"].indexOf(p) > -1) return new Date((p === "X" ? 1e3 : 1) * b);
                var $ = N(p)(b), D = $.year, F = $.month, U = $.day, B = $.hours, Q = $.minutes, Z = $.seconds, X = $.milliseconds, W = $.zone, V = $.week, z = /* @__PURE__ */ new Date(), G = U || (D || F ? 1 : z.getDate()), q = D || z.getFullYear(), ae = 0;
                D && !F || (ae = F > 0 ? F - 1 : z.getMonth());
                var oe, me = B || 0, ye = Q || 0, be = Z || 0, xe = X || 0;
                return W ? new Date(Date.UTC(q, ae, G, me, ye, be, xe + 60 * W.offset * 1e3)) : x ? new Date(Date.UTC(q, ae, G, me, ye, be, xe)) : (oe = new Date(q, ae, G, me, ye, be, xe), V && (oe = w(oe).week(V).toDate()), oe);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(Y, K, E, C), this.init(), H && H !== !0 && (this.$L = this.locale(H).$L), R && Y != this.format(K) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (K instanceof Array) for (var y = K.length, h = 1; h <= y; h += 1) {
            A[1] = K[h - 1];
            var d = C.apply(this, A);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            h === y && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else I.call(this, j);
        };
      };
    });
  }(ce)), ce.exports;
}
var Qe = Ge();
const qe = /* @__PURE__ */ He(Qe), O = (a) => typeof a == "string", se = () => {
  let a, e;
  const t = new Promise((n, s) => {
    a = n, e = s;
  });
  return t.resolve = a, t.reject = e, t;
}, Le = (a) => a == null ? "" : "" + a, Xe = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, _e = /###/g, Ce = (a) => a && a.indexOf("###") > -1 ? a.replace(_e, ".") : a, ke = (a) => !a || O(a), re = (a, e, t) => {
  const n = O(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (ke(a)) return {};
    const r = Ce(n[s]);
    !a[r] && t && (a[r] = new t()), Object.prototype.hasOwnProperty.call(a, r) ? a = a[r] : a = {}, ++s;
  }
  return ke(a) ? {} : {
    obj: a,
    k: Ce(n[s])
  };
}, Me = (a, e, t) => {
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
}, Ve = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? O(a[n]) || a[n] instanceof String || O(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : Ve(a[n], e[n], t) : a[n] = e[n]);
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
}, we = function(a, e) {
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
    for (let l = r; l < n.length; ++l)
      if (l !== r && (o += t), o += n[l], i = s[o], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && l < n.length - 1)
          continue;
        r += l - r + 1;
        break;
      }
    s = i;
  }
  return s;
}, de = (a) => a?.replace("_", "-"), lt = {
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
    this.prefix = t.prefix || "i18next:", this.logger = e || lt, this.options = t, this.debug = t.debug;
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
var J = new he();
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
      let [o, l] = i;
      for (let u = 0; u < l; u++)
        o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [o, l] = i;
      for (let u = 0; u < l; u++)
        o.apply(o, [e, ...n]);
    });
  }
}
class Pe extends pe {
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
    const l = fe(this.data, o);
    return !l && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), l || !i || !O(n) ? l : we(this.data?.[e]?.[t], n, r);
  }
  addResource(e, t, n, s) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), s = t, t = o[1]), this.addNamespaces(t), Me(this.data, o, s), r.silent || this.emit("added", e, t, n, s);
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
    let l = fe(this.data, o) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? Ve(l, n, r) : l = {
      ...l,
      ...n
    }, Me(this.data, o, l), i.silent || this.emit("added", e, t, n);
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
const De = {}, Re = (a) => !O(a) && typeof a != "boolean" && typeof a != "number";
class ge extends pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Xe(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = J.create("translator");
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
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: O(r) ? [r] : r
        };
      const u = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(u[0]) > -1) && (r = u.shift()), e = u.join(s);
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
    } = this.extractFromKey(e[e.length - 1], t), l = o[o.length - 1], u = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u?.toLowerCase() === "cimode") {
      if (c) {
        const v = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${l}${v}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${v}${i}`;
      }
      return s ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : i;
    }
    const g = this.resolve(e, t);
    let f = g?.res;
    const S = g?.usedKey || i, k = g?.exactUsedKey || i, N = ["[object Number]", "[object Function]", "[object RegExp]"], m = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, C = t.count !== void 0 && !O(t.count), M = ge.hasDefaultValue(t), I = C ? this.pluralResolver.getSuffix(u, t.count, t) : "", j = t.ordinal && C ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", Y = C && !t.ordinal && t.count === 0, E = Y && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${I}`] || t[`defaultValue${j}`] || t.defaultValue;
    let A = f;
    L && !f && M && (A = E);
    const K = Re(A), P = Object.prototype.toString.apply(A);
    if (L && A && K && N.indexOf(P) < 0 && !(O(m) && Array.isArray(A))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, A, {
          ...t,
          ns: o
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return s ? (g.res = v, g.usedParams = this.getUsedParamsDetails(t), g) : v;
      }
      if (r) {
        const v = Array.isArray(A), R = v ? [] : {}, H = v ? k : S;
        for (const y in A)
          if (Object.prototype.hasOwnProperty.call(A, y)) {
            const h = `${H}${r}${y}`;
            M && !f ? R[y] = this.translate(h, {
              ...t,
              defaultValue: Re(E) ? E[y] : void 0,
              joinArrays: !1,
              ns: o
            }) : R[y] = this.translate(h, {
              ...t,
              joinArrays: !1,
              ns: o
            }), R[y] === h && (R[y] = A[y]);
          }
        f = R;
      }
    } else if (L && O(m) && Array.isArray(f))
      f = f.join(m), f && (f = this.extendTranslation(f, e, t, n));
    else {
      let v = !1, R = !1;
      !this.isValidLookup(f) && M && (v = !0, f = E), this.isValidLookup(f) || (R = !0, f = i);
      const y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : f, h = M && E !== f && this.options.updateMissing;
      if (R || v || h) {
        if (this.logger.log(h ? "updateKey" : "missingKey", u, l, i, h ? E : f), r) {
          const x = this.resolve(i, {
            ...t,
            keySeparator: !1
          });
          x && x.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let d = [];
        const b = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && b && b[0])
          for (let x = 0; x < b.length; x++)
            d.push(b[x]);
        else this.options.saveMissingTo === "all" ? d = this.languageUtils.toResolveHierarchy(t.lng || this.language) : d.push(t.lng || this.language);
        const p = (x, w, $) => {
          const D = M && $ !== f ? $ : y;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(x, l, w, D, h, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(x, l, w, D, h, t), this.emit("missingKey", x, l, w, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? d.forEach((x) => {
          const w = this.pluralResolver.getSuffixes(x, t);
          Y && t[`defaultValue${this.options.pluralSeparator}zero`] && w.indexOf(`${this.options.pluralSeparator}zero`) < 0 && w.push(`${this.options.pluralSeparator}zero`), w.forEach(($) => {
            p([x], i + $, t[`defaultValue${$}`] || E);
          });
        }) : p(d, i, E));
      }
      f = this.extendTranslation(f, e, t, g, n), R && f === i && this.options.appendNamespaceToMissingKey && (f = `${l}:${i}`), (R || v) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${i}` : i, v ? f : void 0));
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
      const u = O(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let g = n.replace && !O(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, n.lng || this.language || s.usedLng, n), u) {
        const f = e.match(this.interpolator.nestingRegexp), S = f && f.length;
        c < S && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, S = new Array(f), k = 0; k < f; k++)
          S[k] = arguments[k];
        return r?.[0] === S[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`), null) : i.translate(...S, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, l = O(o) ? [o] : o;
    return e != null && l?.length && n.applyPostProcessor !== !1 && (e = Ke.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, s, r, i, o;
    return O(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(n)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      s = c;
      let g = u.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !O(t.count), S = f && !t.ordinal && t.count === 0, k = t.context !== void 0 && (O(t.context) || typeof t.context == "number") && t.context !== "", N = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      g.forEach((m) => {
        this.isValidLookup(n) || (o = m, !De[`${N[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (De[`${N[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${N.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), N.forEach((L) => {
          if (this.isValidLookup(n)) return;
          i = L;
          const C = [c];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, c, L, m, t);
          else {
            let I;
            f && (I = this.pluralResolver.getSuffix(L, t.count, t));
            const j = `${this.options.pluralSeparator}zero`, Y = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(c + I), t.ordinal && I.indexOf(Y) === 0 && C.push(c + I.replace(Y, this.options.pluralSeparator)), S && C.push(c + j)), k) {
              const E = `${c}${this.options.contextSeparator}${t.context}`;
              C.push(E), f && (C.push(E + I), t.ordinal && I.indexOf(Y) === 0 && C.push(E + I.replace(Y, this.options.pluralSeparator)), S && C.push(E + j));
            }
          }
          let M;
          for (; M = C.pop(); )
            this.isValidLookup(n) || (r = M, n = this.getResource(L, m, M, t));
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
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = J.create("languageUtils");
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
const Te = {
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
class ut {
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
      const l = this.languageUtils.getLanguagePartFromCode(e);
      i = this.getRule(l, t);
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
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, r) => Te[s] - Te[r]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Ae = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = tt(a, e, t);
  return !r && s && O(t) && (r = we(a, t, n), r === void 0 && (r = we(e, t, n))), r;
}, Se = (a) => a.replace(/\$/g, "$$$$");
class ct {
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
      prefix: r,
      prefixEscaped: i,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: g,
      nestingPrefix: f,
      nestingPrefixEscaped: S,
      nestingSuffix: k,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: m,
      maxReplaces: L,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : st, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = r ? _(r) : i || "{{", this.suffix = o ? _(o) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? _(f) : S || _("$t("), this.nestingSuffix = k ? _(k) : N || _(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
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
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (S) => {
      if (S.indexOf(this.formatSeparator) < 0) {
        const L = Ae(t, l, S, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, n, {
          ...s,
          ...t,
          interpolationkey: S
        }) : L;
      }
      const k = S.split(this.formatSeparator), N = k.shift().trim(), m = k.join(this.formatSeparator).trim();
      return this.format(Ae(t, l, N, this.options.keySeparator, this.options.ignoreJSONStructure), m, n, {
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
        const k = r[1].trim();
        if (i = u(k), i === void 0)
          if (typeof c == "function") {
            const m = c(e, r, s);
            i = O(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, k))
            i = "";
          else if (g) {
            i = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${e}`), i = "";
        else !O(i) && !this.useRawValueToEscape && (i = Le(i));
        const N = S.safeValue(i);
        if (e = e.replace(r[0], N), g ? (S.regex.lastIndex += i.length, S.regex.lastIndex -= r[0].length) : S.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, i;
    const o = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const g = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${g[1]}`;
      l = g[0], f = this.interpolate(f, i);
      const S = f.match(/'/g), k = f.match(/"/g);
      ((S?.length ?? 0) % 2 === 0 && !k || k.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        i = JSON.parse(f), u && (i = {
          ...u,
          ...i
        });
      } catch (N) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, N), `${l}${c}${f}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, l;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let l = [];
      i = {
        ...n
      }, i = i.replace && !O(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let u = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const c = s[1].split(this.formatSeparator).map((g) => g.trim());
        s[1] = c.shift(), l = c, u = !0;
      }
      if (r = t(o.call(this, s[1].trim(), i), i), r && s[0] === e && !O(r)) return r;
      O(r) || (r = Le(r)), r || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), r = ""), u && (r = l.reduce((c, g) => this.format(c, g, n.lng, {
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
        const [o, ...l] = i.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = o.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
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
    this.logger = J.create("formatter"), this.options = e, this.formats = {
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
      const o = r.findIndex((l) => l.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = ft(l);
      if (this.formats[u]) {
        let g = o;
        try {
          const f = s?.formatParams?.[s.interpolationkey] || {}, S = f.locale || f.lng || s.locale || s.lng || n;
          g = this.formats[u](o, S, {
            ...c,
            ...s,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${u}`);
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
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = J.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const r = {}, i = {}, o = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((g) => {
        const f = `${u}|${g}`;
        !n.reload && this.store.hasResourceBundle(u, g) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? i[f] === void 0 && (i[f] = !0) : (this.state[f] = 1, c = !1, i[f] === void 0 && (i[f] = !0), r[f] === void 0 && (r[f] = !0), l[g] === void 0 && (l[g] = !0)));
      }), c || (o[u] = !0);
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
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, n) {
    const s = e.split("|"), r = s[0], i = s[1];
    t && this.emit("failedLoading", r, i, t), !t && n && this.store.addResourceBundle(r, i, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      et(l.loaded, [r], i), ht(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        o[u] || (o[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((g) => {
          o[u][g] === void 0 && (o[u][g] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
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
    const o = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      if (u && c && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, r * 2, i);
        }, r);
        return;
      }
      i(u, c);
    }, l = this.backend[n].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => o(null, c)).catch(o) : o(null, u);
      } catch (u) {
        o(u);
      }
      return;
    }
    return l(e, t, o);
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
        const l = {
          ...i,
          isUpdate: r
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, n, s, l) : c = u(e, t, n, s), c && typeof c.then == "function" ? c.then((g) => o(null, g)).catch(o) : o(null, c);
          } catch (c) {
            o(c);
          }
        else
          u(e, t, n, s, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const Fe = () => ({
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
}), Ie = (a) => (O(a.ns) && (a.ns = [a.ns]), O(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), O(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), a.supportedLngs?.indexOf?.("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a), le = () => {
}, pt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class ie extends pe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ie(e), this.services = {}, this.logger = J, this.modules = {
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
    const s = Fe();
    this.options = {
      ...s,
      ...this.options,
      ...Ie(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? J.init(r(this.modules.logger), this.options) : J.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = dt;
      const g = new Ne(this.options);
      this.store = new Pe(this.options.resources, this.options);
      const f = this.services;
      f.logger = J, f.resourceStore = this.store, f.languageUtils = g, f.pluralResolver = new ut(g, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = r(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new ct(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new gt(r(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(S) {
        for (var k = arguments.length, N = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.languageDetector && (f.languageDetector = r(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = r(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new ge(this.services, this.options), this.translator.on("*", function(S) {
        for (var k = arguments.length, N = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          N[m - 1] = arguments[m];
        e.emit(S, ...N);
      }), this.modules.external.forEach((S) => {
        S.init && S.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = le), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = se(), u = () => {
      const c = (g, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), n(g, f);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : le;
    const s = O(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const r = [], i = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((u) => {
          u !== "cimode" && r.indexOf(u) < 0 && r.push(u);
        });
      };
      s ? i(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => i(l)), this.options.preload?.forEach?.((o) => i(o)), this.services.backendConnector.load(r, this.options.ns, (o) => {
        !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(o);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const s = se();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = le), this.services.backendConnector.reload(e, t, (r) => {
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
    const r = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, i = (l, u) => {
      u ? (r(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return n.t(...arguments);
      }), t && t(l, function() {
        return n.t(...arguments);
      });
    }, o = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const u = O(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || r(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector?.cacheUserLanguage?.(u)), this.loadResources(u, (c) => {
        i(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const r = function(i, o) {
      let l;
      if (typeof o != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), g = 2; g < u; g++)
          c[g - 2] = arguments[g];
        l = s.options.overloadTranslationOptionHandler([i, o].concat(c));
      } else
        l = {
          ...o
        };
      l.lng = l.lng || r.lng, l.lngs = l.lngs || r.lngs, l.ns = l.ns || r.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || r.keyPrefix);
      const f = s.options.keySeparator || ".";
      let S;
      return l.keyPrefix && Array.isArray(i) ? S = i.map((k) => `${l.keyPrefix}${f}${k}`) : S = l.keyPrefix ? `${l.keyPrefix}${f}${i}` : i, s.t(S, l);
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
    const i = (o, l) => {
      const u = this.services.backendConnector.state[`${o}|${l}`];
      return u === -1 || u === 0 || u === 2;
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new Ne(Fe());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ie(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : le;
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
      const o = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, Object.keys(l[u]).reduce((c, g) => (c[g] = {
        ...l[u][g]
      }, c), {})), {});
      r.store = new Pe(o, s), r.services.resourceStore = r.store;
    }
    return r.translator = new ge(r.services, s), r.translator.on("*", function(o) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      r.emit(o, ...u);
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
const T = ie.createInstance();
T.createInstance = ie.createInstance;
T.createInstance;
T.dir;
T.init;
T.loadResources;
T.reloadResources;
T.use;
T.changeLanguage;
T.getFixedT;
T.t;
T.exists;
T.setDefaultNamespace;
T.hasLoadedNamespace;
T.loadNamespaces;
T.loadLanguages;
const mt = {
  common: {
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat"
  },
  datePicker: {
    dateFormat: "MM/DD/YYYY",
    titleFormat: "MMMM YYYY",
    btnToday: "Today",
    disabledTodayTooltip: "Disabled Today Button."
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    btnNow: "Current time"
  },
  confirm: {
    cancel: "Cancel",
    ignore: "Ignore",
    no: "No",
    ok: "OK",
    retry: "Retry",
    stop: "Abort",
    yes: "Yes"
  },
  editor: {
    search: "Search:",
    regex: "(/{Pattern}/ for regex)",
    replace: "Text for searching:",
    with: "Text for replacing:",
    replaceYN: "Are you sure to replace?",
    yes: "Yes",
    no: "No",
    all: "All",
    stop: "Stop"
  },
  pageContainer: {
    placeholder: "Enter the keywords.",
    "results.no-result": "No result was found."
  },
  rowFilter: {
    "sort.ascending": "Sort Ascending",
    "sort.descending": "Sort Descending",
    "sort.clear": "Clear Sort",
    "search.placeholder": "Enter the keywords.",
    "list.no-result": "No result was found.",
    "list.select-all": "Select All",
    "list.blanks": "Blanks",
    "string.input.placeholder": "Enter the keywords.",
    "check.check-all": "Check All",
    "check.uncheck-all": "Uncheck All",
    "number.select.between": "Between",
    "number.select.blank": "Blank",
    "number.input.placeholder": "Enter a number.",
    "number.between.from": "From",
    "number.between.to": "To",
    "date.select.between": "Between",
    "date.select.blank": "Blank",
    "date.input.placeholder": "Enter a date.",
    "date.between.from": "Start Date",
    "date.between.to": "End Date",
    ok: "OK",
    clear: "Clear"
  },
  loginInfoDialog: {
    title: "Login Information",
    "confirm-button": "Confirm",
    "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
    "AUTH.ACCESSIP": "Last Login IP",
    "AUTH.LASTESTLOGINTIME": "Last Login Date",
    "AUTH.SECURITY.NOTICE": "Security Issue"
  },
  gridOverflowPanel: {
    up: "Move above frozen row",
    down: "Move below frozen row",
    right: "Move right of frozen column",
    left: "Move left of frozen column",
    "double-top": "Move to first row",
    "double-bottom": "Move to last row",
    "double-left": "Move to first column",
    "double-right": "Move to last column"
  }
}, yt = {
  common: {
    sun: "日",
    mon: "月",
    tue: "火",
    wed: "水",
    thu: "木",
    fri: "金",
    sat: "土"
  },
  datePicker: {
    dateFormat: "YYYY-MM-DD",
    titleFormat: "YYYY年MM月",
    btnToday: "今日"
  },
  timePicker: {
    btnNow: "現在時刻"
  },
  confirm: {
    cancel: "取消",
    ignore: "無視",
    no: "いいえ",
    ok: "確認",
    retry: "再開",
    stop: "中止",
    yes: "はい"
  },
  editor: {
    yes: "はい",
    no: "いいえ"
  },
  pageContainer: {
    placeholder: "検索キーワードを入力してください。",
    "results.no-result": "検索結果がありません。"
  },
  rowFilter: {
    "sort.ascending": "昇順整列",
    "sort.descending": "降順整列",
    "sort.clear": "整列初期化",
    "search.placeholder": "検索キーワードを入力してください。",
    "list.no-result": "検索結果がありません。",
    "list.select-all": "全選択",
    "list.blanks": "空白",
    "string.input.placeholder": "検索キーワードを入力してください。",
    "number.select.between": "Between",
    "number.select.blank": "Blank",
    "number.input.placeholder": "Enter a number",
    "number.between.from": "From",
    "number.between.to": "To",
    "date.select.between": "Between",
    "date.select.blank": "Blank",
    "date.input.placeholder": "Enter a date",
    "date.between.from": "開始日",
    "date.between.to": "終了日",
    ok: "確認",
    clear: "初期化"
  },
  loginInfoDialog: {
    title: "ログイン情報",
    "confirm-button": "確認",
    "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
    "AUTH.ACCESSIP": "最終ログインIP",
    "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
    "AUTH.SECURITY.NOTICE": "セキュリティ情報"
  }
}, bt = {
  common: {
    sun: "일",
    mon: "월",
    tue: "화",
    wed: "수",
    thu: "목",
    fri: "금",
    sat: "토"
  },
  datePicker: {
    dateFormat: "YYYY-MM-DD",
    titleFormat: "YYYY년 M월",
    btnToday: "오늘 선택",
    disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다."
  },
  timePicker: {
    am: "오전",
    pm: "오후",
    btnNow: "현재 시간"
  },
  confirm: {
    cancel: "취소",
    ignore: "무시",
    no: "아니오",
    ok: "확인",
    retry: "재시도",
    stop: "중단",
    yes: "예"
  },
  editor: {
    search: "검색어:",
    regex: "(/{패턴}/으로 정규식 사용)",
    replace: "찾을 문자열:",
    with: "변경될 문자열:",
    replaceYN: "변경하시겠습니까?",
    yes: "예",
    no: "아니오",
    all: "모두",
    stop: "취소"
  },
  pageContainer: {
    placeholder: "검색어를 입력해주세요",
    "results.no-result": "검색 결과가 없습니다."
  },
  rowFilter: {
    "sort.ascending": "오름차순 정렬",
    "sort.descending": "내림차순 정렬",
    "sort.clear": "정렬 제거",
    "search.placeholder": "검색어 입력",
    "list.no-result": "검색 결과 없음",
    "list.select-all": "전체 선택",
    "list.blanks": "셀 값 없음",
    "string.input.placeholder": "검색어 입력",
    "check.check-all": "전체 체크",
    "check.uncheck-all": "전체 체크 해제",
    "number.select.between": "범위",
    "number.select.blank": "빈 값",
    "number.input.placeholder": "숫자 입력",
    "number.between.from": "최소값",
    "number.between.to": "최대값",
    "date.select.between": "범위",
    "date.select.blank": "빈 값",
    "date.input.placeholder": "날짜 입력",
    "date.between.from": "시작 날짜",
    "date.between.to": "종료 날짜",
    ok: "확인",
    clear: "초기화"
  },
  loginInfoDialog: {
    title: "로그인 정보",
    "confirm-button": "확인",
    "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
    "AUTH.ACCESSIP": "최종 로그인 IP",
    "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
    "AUTH.SECURITY.NOTICE": "보안 사항"
  },
  gridOverflowPanel: {
    up: "고정 행 위로 이동",
    down: "고정 행 아래로 이동",
    right: "고정 열 우측으로 이동",
    left: "고정 열 좌측으로 이동",
    "double-top": "첫 행으로 이동",
    "double-bottom": "마지막 행으로 이동",
    "double-left": "첫 열로 이동",
    "double-right": "마지막 열로 이동"
  }
}, xt = {
  common: {
    sun: "日",
    mon: "一",
    tue: "二",
    wed: "三",
    thu: "四",
    fri: "五",
    sat: "六"
  },
  datePicker: {
    dateFormat: "YYYY-MM-DD",
    titleFormat: "YYYY年MM月",
    btnToday: "今天"
  },
  timePicker: {
    btnNow: "当前时间"
  },
  confirm: {
    cancel: "取消",
    ignore: "忽略",
    no: "否",
    ok: "确认",
    retry: "重试",
    stop: "中断",
    yes: "是"
  },
  editor: {
    yes: "是",
    no: "否"
  },
  pageContainer: {
    placeholder: "请输入关键词。",
    "results.no-result": "无查询结果。"
  },
  rowFilter: {
    "sort.ascending": "Sort Ascending",
    "sort.descending": "Sort Descending",
    "sort.clear": "排列初始化",
    "search.placeholder": "请输入关键词。",
    "list.no-result": "无查询结果。",
    "list.select-all": "全部选择",
    "list.blanks": "空白",
    "string.input.placeholder": "请输入关键词。",
    "number.select.between": "Between",
    "number.select.blank": "Blank",
    "number.input.placeholder": "Enter a number",
    "number.between.from": "From",
    "number.between.to": "To",
    "date.select.between": "Between",
    "date.select.blank": "Blank",
    "date.input.placeholder": "Enter a date",
    "date.between.from": "开始日期",
    "date.between.to": "结束日期",
    ok: "确认",
    clear: "初始化"
  },
  loginInfoDialog: {
    title: "登录信息",
    "confirm-button": "Confirm",
    "AUTH.PASSWORD.NOTICE": "密码变更期限",
    "AUTH.ACCESSIP": "最终登录IP",
    "AUTH.LASTESTLOGINTIME": "最终登录时间",
    "AUTH.SECURITY.NOTICE": "保安事项"
  }
};
ve.extend(qe);
const Ye = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], je = ["일", "월", "화", "수", "목", "금", "토"], St = "ko", wt = "en", ne = "translation";
ve.locale("ko", {
  months: Ye,
  monthsShort: Ye,
  weekdays: je,
  weekdaysShort: je
});
T.isInitialized ? Be() : Ot();
const vt = {
  get currentLang() {
    return T.language;
  },
  t: $t,
  i18next: T,
  setLocale: Ue,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(a) {
    Ue(a);
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
      return T.t(`${a}.${t}`);
    },
    set(e, t, n) {
      return T.addResource(vt.currentLang, ne, `${a}.${t}`, n), !0;
    }
  });
}
function Ue(a) {
  ve.locale(a), T.changeLanguage(a);
}
function $t(a) {
  return T.t(a);
}
T.on("languageChanged", (a) => {
  document.documentElement.lang = a;
});
function Ot() {
  T.init({
    lng: St,
    fallbackLng: wt,
    initAsync: !1,
    defaultNS: ne
  }), Be();
}
function Be() {
  T.addResourceBundle("ko", ne, bt).addResourceBundle("en", ne, mt).addResourceBundle("ja", ne, yt).addResourceBundle("zh", ne, xt);
}
export {
  ve as d,
  vt as i
};
//# sourceMappingURL=index-B2FWDcG0.js.map
