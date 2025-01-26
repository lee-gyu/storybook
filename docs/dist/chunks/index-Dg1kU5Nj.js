import { g as Ke } from "./_commonjsHelpers-DaMA6jEr.js";
var le = { exports: {} }, Be = le.exports, ve;
function ze() {
  return ve || (ve = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(Be, function() {
      var t = 1e3, n = 6e4, s = 36e5, r = "millisecond", i = "second", o = "minute", u = "hour", l = "day", f = "week", p = "month", c = "quarter", b = "year", k = "date", N = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(x) {
        var g = ["th", "st", "nd", "rd"], h = x % 100;
        return "[" + x + (g[(h - 20) % 10] || g[h] || g[0]) + "]";
      } }, M = function(x, g, h) {
        var y = String(x);
        return !y || y.length >= g ? x : "" + Array(g + 1 - y.length).join(h) + x;
      }, P = { s: M, z: function(x) {
        var g = -x.utcOffset(), h = Math.abs(g), y = Math.floor(h / 60), d = h % 60;
        return (g <= 0 ? "+" : "-") + M(y, 2, "0") + ":" + M(d, 2, "0");
      }, m: function x(g, h) {
        if (g.date() < h.date()) return -x(h, g);
        var y = 12 * (h.year() - g.year()) + (h.month() - g.month()), d = g.clone().add(y, p), S = h - d < 0, $ = g.clone().add(y + (S ? -1 : 1), p);
        return +(-(y + (h - d) / (S ? d - $ : $ - d)) || 0);
      }, a: function(x) {
        return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
      }, p: function(x) {
        return { M: p, y: b, w: f, d: l, D: k, h: u, m: o, s: i, ms: r, Q: c }[x] || String(x || "").toLowerCase().replace(/s$/, "");
      }, u: function(x) {
        return x === void 0;
      } }, D = "en", E = {};
      E[D] = C;
      var F = "$isDayjsObject", j = function(x) {
        return x instanceof U || !(!x || !x[F]);
      }, V = function x(g, h, y) {
        var d;
        if (!g) return D;
        if (typeof g == "string") {
          var S = g.toLowerCase();
          E[S] && (d = S), h && (E[S] = h, d = S);
          var $ = g.split("-");
          if (!d && $.length > 1) return x($[0]);
        } else {
          var L = g.name;
          E[L] = g, d = L;
        }
        return !y && d && (D = d), d || !y && D;
      }, R = function(x, g) {
        if (j(x)) return x.clone();
        var h = typeof g == "object" ? g : {};
        return h.date = x, h.args = arguments, new U(h);
      }, O = P;
      O.l = V, O.i = j, O.w = function(x, g) {
        return R(x, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
      };
      var U = function() {
        function x(h) {
          this.$L = V(h.locale, null, !0), this.parse(h), this.$x = this.$x || h.x || {}, this[F] = !0;
        }
        var g = x.prototype;
        return g.parse = function(h) {
          this.$d = function(y) {
            var d = y.date, S = y.utc;
            if (d === null) return /* @__PURE__ */ new Date(NaN);
            if (O.u(d)) return /* @__PURE__ */ new Date();
            if (d instanceof Date) return new Date(d);
            if (typeof d == "string" && !/Z$/i.test(d)) {
              var $ = d.match(m);
              if ($) {
                var L = $[2] - 1 || 0, T = ($[7] || "0").substring(0, 3);
                return S ? new Date(Date.UTC($[1], L, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, T)) : new Date($[1], L, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, T);
              }
            }
            return new Date(d);
          }(h), this.init();
        }, g.init = function() {
          var h = this.$d;
          this.$y = h.getFullYear(), this.$M = h.getMonth(), this.$D = h.getDate(), this.$W = h.getDay(), this.$H = h.getHours(), this.$m = h.getMinutes(), this.$s = h.getSeconds(), this.$ms = h.getMilliseconds();
        }, g.$utils = function() {
          return O;
        }, g.isValid = function() {
          return this.$d.toString() !== N;
        }, g.isSame = function(h, y) {
          var d = R(h);
          return this.startOf(y) <= d && d <= this.endOf(y);
        }, g.isAfter = function(h, y) {
          return R(h) < this.startOf(y);
        }, g.isBefore = function(h, y) {
          return this.endOf(y) < R(h);
        }, g.$g = function(h, y, d) {
          return O.u(h) ? this[y] : this.set(d, h);
        }, g.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, g.valueOf = function() {
          return this.$d.getTime();
        }, g.startOf = function(h, y) {
          var d = this, S = !!O.u(y) || y, $ = O.p(h), L = function(J, K) {
            var z = O.w(d.$u ? Date.UTC(d.$y, K, J) : new Date(d.$y, K, J), d);
            return S ? z : z.endOf(l);
          }, T = function(J, K) {
            return O.w(d.toDate()[J].apply(d.toDate("s"), (S ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(K)), d);
          }, Y = this.$W, I = this.$M, B = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch ($) {
            case b:
              return S ? L(1, 0) : L(31, 11);
            case p:
              return S ? L(1, I) : L(0, I + 1);
            case f:
              var Z = this.$locale().weekStart || 0, X = (Y < Z ? Y + 7 : Y) - Z;
              return L(S ? B - X : B + (6 - X), I);
            case l:
            case k:
              return T(G + "Hours", 0);
            case u:
              return T(G + "Minutes", 1);
            case o:
              return T(G + "Seconds", 2);
            case i:
              return T(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, g.endOf = function(h) {
          return this.startOf(h, !1);
        }, g.$set = function(h, y) {
          var d, S = O.p(h), $ = "set" + (this.$u ? "UTC" : ""), L = (d = {}, d[l] = $ + "Date", d[k] = $ + "Date", d[p] = $ + "Month", d[b] = $ + "FullYear", d[u] = $ + "Hours", d[o] = $ + "Minutes", d[i] = $ + "Seconds", d[r] = $ + "Milliseconds", d)[S], T = S === l ? this.$D + (y - this.$W) : y;
          if (S === p || S === b) {
            var Y = this.clone().set(k, 1);
            Y.$d[L](T), Y.init(), this.$d = Y.set(k, Math.min(this.$D, Y.daysInMonth())).$d;
          } else L && this.$d[L](T);
          return this.init(), this;
        }, g.set = function(h, y) {
          return this.clone().$set(h, y);
        }, g.get = function(h) {
          return this[O.p(h)]();
        }, g.add = function(h, y) {
          var d, S = this;
          h = Number(h);
          var $ = O.p(y), L = function(I) {
            var B = R(S);
            return O.w(B.date(B.date() + Math.round(I * h)), S);
          };
          if ($ === p) return this.set(p, this.$M + h);
          if ($ === b) return this.set(b, this.$y + h);
          if ($ === l) return L(1);
          if ($ === f) return L(7);
          var T = (d = {}, d[o] = n, d[u] = s, d[i] = t, d)[$] || 1, Y = this.$d.getTime() + h * T;
          return O.w(Y, this);
        }, g.subtract = function(h, y) {
          return this.add(-1 * h, y);
        }, g.format = function(h) {
          var y = this, d = this.$locale();
          if (!this.isValid()) return d.invalidDate || N;
          var S = h || "YYYY-MM-DDTHH:mm:ssZ", $ = O.z(this), L = this.$H, T = this.$m, Y = this.$M, I = d.weekdays, B = d.months, G = d.meridiem, Z = function(K, z, Q, q) {
            return K && (K[z] || K(y, S)) || Q[z].slice(0, q);
          }, X = function(K) {
            return O.s(L % 12 || 12, K, "0");
          }, J = G || function(K, z, Q) {
            var q = K < 12 ? "AM" : "PM";
            return Q ? q.toLowerCase() : q;
          };
          return S.replace(v, function(K, z) {
            return z || function(Q) {
              switch (Q) {
                case "YY":
                  return String(y.$y).slice(-2);
                case "YYYY":
                  return O.s(y.$y, 4, "0");
                case "M":
                  return Y + 1;
                case "MM":
                  return O.s(Y + 1, 2, "0");
                case "MMM":
                  return Z(d.monthsShort, Y, B, 3);
                case "MMMM":
                  return Z(B, Y);
                case "D":
                  return y.$D;
                case "DD":
                  return O.s(y.$D, 2, "0");
                case "d":
                  return String(y.$W);
                case "dd":
                  return Z(d.weekdaysMin, y.$W, I, 2);
                case "ddd":
                  return Z(d.weekdaysShort, y.$W, I, 3);
                case "dddd":
                  return I[y.$W];
                case "H":
                  return String(L);
                case "HH":
                  return O.s(L, 2, "0");
                case "h":
                  return X(1);
                case "hh":
                  return X(2);
                case "a":
                  return J(L, T, !0);
                case "A":
                  return J(L, T, !1);
                case "m":
                  return String(T);
                case "mm":
                  return O.s(T, 2, "0");
                case "s":
                  return String(y.$s);
                case "ss":
                  return O.s(y.$s, 2, "0");
                case "SSS":
                  return O.s(y.$ms, 3, "0");
                case "Z":
                  return $;
              }
              return null;
            }(K) || $.replace(":", "");
          });
        }, g.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, g.diff = function(h, y, d) {
          var S, $ = this, L = O.p(y), T = R(h), Y = (T.utcOffset() - this.utcOffset()) * n, I = this - T, B = function() {
            return O.m($, T);
          };
          switch (L) {
            case b:
              S = B() / 12;
              break;
            case p:
              S = B();
              break;
            case c:
              S = B() / 3;
              break;
            case f:
              S = (I - Y) / 6048e5;
              break;
            case l:
              S = (I - Y) / 864e5;
              break;
            case u:
              S = I / s;
              break;
            case o:
              S = I / n;
              break;
            case i:
              S = I / t;
              break;
            default:
              S = I;
          }
          return d ? S : O.a(S);
        }, g.daysInMonth = function() {
          return this.endOf(p).$D;
        }, g.$locale = function() {
          return E[this.$L];
        }, g.locale = function(h, y) {
          if (!h) return this.$L;
          var d = this.clone(), S = V(h, y, !0);
          return S && (d.$L = S), d;
        }, g.clone = function() {
          return O.w(this.$d, this);
        }, g.toDate = function() {
          return new Date(this.valueOf());
        }, g.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, g.toISOString = function() {
          return this.$d.toISOString();
        }, g.toString = function() {
          return this.$d.toUTCString();
        }, x;
      }(), H = U.prototype;
      return R.prototype = H, [["$ms", r], ["$s", i], ["$m", o], ["$H", u], ["$W", l], ["$M", p], ["$y", b], ["$D", k]].forEach(function(x) {
        H[x[1]] = function(g) {
          return this.$g(g, x[0], x[1]);
        };
      }), R.extend = function(x, g) {
        return x.$i || (x(g, U, R), x.$i = !0), R;
      }, R.locale = V, R.isDayjs = j, R.unix = function(x) {
        return R(1e3 * x);
      }, R.en = E[D], R.Ls = E, R.p = {}, R;
    });
  }(le)), le.exports;
}
var Je = ze();
const we = /* @__PURE__ */ Ke(Je);
var ce = { exports: {} }, We = ce.exports, Oe;
function Ze() {
  return Oe || (Oe = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(We, function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, u = {}, l = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, f = function(m) {
        return function(v) {
          this[m] = +v;
        };
      }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(v) {
          if (!v || v === "Z") return 0;
          var C = v.match(/([+-]|\d\d)/g), M = 60 * C[1] + (+C[2] || 0);
          return M === 0 ? 0 : C[0] === "+" ? -M : M;
        }(m);
      }], c = function(m) {
        var v = u[m];
        return v && (v.indexOf ? v : v.s.concat(v.f));
      }, b = function(m, v) {
        var C, M = u.meridiem;
        if (M) {
          for (var P = 1; P <= 24; P += 1) if (m.indexOf(M(P, 0, v)) > -1) {
            C = P > 12;
            break;
          }
        } else C = m === (v ? "pm" : "PM");
        return C;
      }, k = { A: [o, function(m) {
        this.afternoon = b(m, !1);
      }], a: [o, function(m) {
        this.afternoon = b(m, !0);
      }], Q: [s, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [s, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [r, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(m) {
        var v = u.ordinal, C = m.match(/\d+/);
        if (this.day = C[0], v) for (var M = 1; M <= 31; M += 1) v(M).replace(/\[|\]/g, "") === m && (this.day = M);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(m) {
        var v = c("months"), C = (c("monthsShort") || v.map(function(M) {
          return M.slice(0, 3);
        })).indexOf(m) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], MMMM: [o, function(m) {
        var v = c("months").indexOf(m) + 1;
        if (v < 1) throw new Error();
        this.month = v % 12 || v;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(m) {
        this.year = l(m);
      }], YYYY: [/\d{4}/, f("year")], Z: p, ZZ: p };
      function N(m) {
        var v, C;
        v = m, C = u && u.formats;
        for (var M = (m = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, O, U) {
          var H = U && U.toUpperCase();
          return O || C[U] || t[U] || C[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, g, h) {
            return g || h.slice(1);
          });
        })).match(n), P = M.length, D = 0; D < P; D += 1) {
          var E = M[D], F = k[E], j = F && F[0], V = F && F[1];
          M[D] = V ? { regex: j, parser: V } : E.replace(/^\[|\]$/g, "");
        }
        return function(R) {
          for (var O = {}, U = 0, H = 0; U < P; U += 1) {
            var x = M[U];
            if (typeof x == "string") H += x.length;
            else {
              var g = x.regex, h = x.parser, y = R.slice(H), d = g.exec(y)[0];
              h.call(O, d), R = R.replace(d, "");
            }
          }
          return function(S) {
            var $ = S.afternoon;
            if ($ !== void 0) {
              var L = S.hours;
              $ ? L < 12 && (S.hours += 12) : L === 12 && (S.hours = 0), delete S.afternoon;
            }
          }(O), O;
        };
      }
      return function(m, v, C) {
        C.p.customParseFormat = !0, m && m.parseTwoDigitYear && (l = m.parseTwoDigitYear);
        var M = v.prototype, P = M.parse;
        M.parse = function(D) {
          var E = D.date, F = D.utc, j = D.args;
          this.$u = F;
          var V = j[1];
          if (typeof V == "string") {
            var R = j[2] === !0, O = j[3] === !0, U = R || O, H = j[2];
            O && (H = j[2]), u = this.$locale(), !R && H && (u = C.Ls[H]), this.$d = function(y, d, S, $) {
              try {
                if (["x", "X"].indexOf(d) > -1) return new Date((d === "X" ? 1e3 : 1) * y);
                var L = N(d)(y), T = L.year, Y = L.month, I = L.day, B = L.hours, G = L.minutes, Z = L.seconds, X = L.milliseconds, J = L.zone, K = L.week, z = /* @__PURE__ */ new Date(), Q = I || (T || Y ? 1 : z.getDate()), q = T || z.getFullYear(), ae = 0;
                T && !Y || (ae = Y > 0 ? Y - 1 : z.getMonth());
                var oe, me = B || 0, ye = G || 0, xe = Z || 0, be = X || 0;
                return J ? new Date(Date.UTC(q, ae, Q, me, ye, xe, be + 60 * J.offset * 1e3)) : S ? new Date(Date.UTC(q, ae, Q, me, ye, xe, be)) : (oe = new Date(q, ae, Q, me, ye, xe, be), K && (oe = $(oe).week(K).toDate()), oe);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(E, V, F, C), this.init(), H && H !== !0 && (this.$L = this.locale(H).$L), U && E != this.format(V) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (V instanceof Array) for (var x = V.length, g = 1; g <= x; g += 1) {
            j[1] = V[g - 1];
            var h = C.apply(this, j);
            if (h.isValid()) {
              this.$d = h.$d, this.$L = h.$L, this.init();
              break;
            }
            g === x && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else P.call(this, D);
        };
      };
    });
  }(ce)), ce.exports;
}
var Qe = Ze();
const Ge = /* @__PURE__ */ Ke(Qe), w = (a) => typeof a == "string", se = () => {
  let a, e;
  const t = new Promise((n, s) => {
    a = n, e = s;
  });
  return t.resolve = a, t.reject = e, t;
}, Le = (a) => a == null ? "" : "" + a, qe = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, Xe = /###/g, ke = (a) => a && a.indexOf("###") > -1 ? a.replace(Xe, ".") : a, Ce = (a) => !a || w(a), re = (a, e, t) => {
  const n = w(e) ? e.split(".") : e;
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
}, _e = (a, e, t, n) => {
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
}, et = (a, e, t) => {
  const n = fe(a, t);
  return n !== void 0 ? n : fe(e, t);
}, Ve = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? w(a[n]) || a[n] instanceof String || w(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : Ve(a[n], e[n], t) : a[n] = e[n]);
  return a;
}, _ = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var tt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const nt = (a) => w(a) ? a.replace(/[&<>"'\/]/g, (e) => tt[e]) : a;
class st {
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
const rt = [" ", ",", "?", "!", ";"], it = new st(20), at = (a, e, t) => {
  e = e || "", t = t || "";
  const n = rt.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const s = it.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
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
}, de = (a) => a?.replace("_", "-"), ot = {
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
    this.prefix = t.prefix || "i18next:", this.logger = e || ot, this.options = t, this.debug = t.debug;
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
    return s && !this.debug ? null : (w(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
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
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : w(n) && r ? o.push(...n.split(r)) : o.push(n)));
    const u = fe(this.data, o);
    return !u && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), u || !i || !w(n) ? u : $e(this.data?.[e]?.[t], n, r);
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
      (w(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
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
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? Ve(u, n, r) : u = {
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
const De = {};
class ge extends pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), qe(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = W.create("translator");
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
    const i = n && e.indexOf(n) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !at(e, n, s);
    if (i && !o) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: w(r) ? [r] : r
        };
      const l = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(l[0]) > -1) && (r = l.shift()), e = l.join(s);
    }
    return {
      key: e,
      namespaces: w(r) ? [r] : r
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
    } = this.extractFromKey(e[e.length - 1], t), u = o[o.length - 1], l = t.lng || this.language, f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l?.toLowerCase() === "cimode") {
      if (f) {
        const P = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${u}${P}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: l,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${P}${i}`;
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
    const p = this.resolve(e, t);
    let c = p?.res;
    const b = p?.usedKey || i, k = p?.exactUsedKey || i, N = Object.prototype.toString.apply(c), m = ["[object Number]", "[object Function]", "[object RegExp]"], v = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, M = !w(c) && typeof c != "boolean" && typeof c != "number";
    if (C && c && M && m.indexOf(N) < 0 && !(w(v) && Array.isArray(c))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const P = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, c, {
          ...t,
          ns: o
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return s ? (p.res = P, p.usedParams = this.getUsedParamsDetails(t), p) : P;
      }
      if (r) {
        const P = Array.isArray(c), D = P ? [] : {}, E = P ? k : b;
        for (const F in c)
          if (Object.prototype.hasOwnProperty.call(c, F)) {
            const j = `${E}${r}${F}`;
            D[F] = this.translate(j, {
              ...t,
              joinArrays: !1,
              ns: o
            }), D[F] === j && (D[F] = c[F]);
          }
        c = D;
      }
    } else if (C && w(v) && Array.isArray(c))
      c = c.join(v), c && (c = this.extendTranslation(c, e, t, n));
    else {
      let P = !1, D = !1;
      const E = t.count !== void 0 && !w(t.count), F = ge.hasDefaultValue(t), j = E ? this.pluralResolver.getSuffix(l, t.count, t) : "", V = t.ordinal && E ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", R = E && !t.ordinal && t.count === 0, O = R && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${j}`] || t[`defaultValue${V}`] || t.defaultValue;
      !this.isValidLookup(c) && F && (P = !0, c = O), this.isValidLookup(c) || (D = !0, c = i);
      const H = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && D ? void 0 : c, x = F && O !== c && this.options.updateMissing;
      if (D || P || x) {
        if (this.logger.log(x ? "updateKey" : "missingKey", l, u, i, x ? O : c), r) {
          const d = this.resolve(i, {
            ...t,
            keySeparator: !1
          });
          d && d.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let g = [];
        const h = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && h && h[0])
          for (let d = 0; d < h.length; d++)
            g.push(h[d]);
        else this.options.saveMissingTo === "all" ? g = this.languageUtils.toResolveHierarchy(t.lng || this.language) : g.push(t.lng || this.language);
        const y = (d, S, $) => {
          const L = F && $ !== c ? $ : H;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(d, u, S, L, x, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(d, u, S, L, x, t), this.emit("missingKey", d, u, S, c);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? g.forEach((d) => {
          const S = this.pluralResolver.getSuffixes(d, t);
          R && t[`defaultValue${this.options.pluralSeparator}zero`] && S.indexOf(`${this.options.pluralSeparator}zero`) < 0 && S.push(`${this.options.pluralSeparator}zero`), S.forEach(($) => {
            y([d], i + $, t[`defaultValue${$}`] || O);
          });
        }) : y(g, i, O));
      }
      c = this.extendTranslation(c, e, t, p, n), D && c === i && this.options.appendNamespaceToMissingKey && (c = `${u}:${i}`), (D || P) && this.options.parseMissingKeyHandler && (c = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${i}` : i, P ? c : void 0));
    }
    return s ? (p.res = c, p.usedParams = this.getUsedParamsDetails(t), p) : c;
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
      const l = w(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (l) {
        const c = e.match(this.interpolator.nestingRegexp);
        f = c && c.length;
      }
      let p = n.replace && !w(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, n.lng || this.language || s.usedLng, n), l) {
        const c = e.match(this.interpolator.nestingRegexp), b = c && c.length;
        f < b && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var c = arguments.length, b = new Array(c), k = 0; k < c; k++)
          b[k] = arguments[k];
        return r?.[0] === b[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${t[0]}`), null) : i.translate(...b, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, u = w(o) ? [o] : o;
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
    return w(e) && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const l = this.extractFromKey(u, t), f = l.key;
      s = f;
      let p = l.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const c = t.count !== void 0 && !w(t.count), b = c && !t.ordinal && t.count === 0, k = t.context !== void 0 && (w(t.context) || typeof t.context == "number") && t.context !== "", N = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((m) => {
        this.isValidLookup(n) || (o = m, !De[`${N[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (De[`${N[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${N.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), N.forEach((v) => {
          if (this.isValidLookup(n)) return;
          i = v;
          const C = [f];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, f, v, m, t);
          else {
            let P;
            c && (P = this.pluralResolver.getSuffix(v, t.count, t));
            const D = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (c && (C.push(f + P), t.ordinal && P.indexOf(E) === 0 && C.push(f + P.replace(E, this.options.pluralSeparator)), b && C.push(f + D)), k) {
              const F = `${f}${this.options.contextSeparator}${t.context}`;
              C.push(F), c && (C.push(F + P), t.ordinal && P.indexOf(E) === 0 && C.push(F + P.replace(E, this.options.pluralSeparator)), b && C.push(F + D));
            }
          }
          let M;
          for (; M = C.pop(); )
            this.isValidLookup(n) || (r = M, n = this.getResource(v, m, M, t));
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !w(e.replace);
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
class Re {
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
    if (w(e) && e.indexOf("-") > -1) {
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
    if (typeof e == "function" && (e = e(t)), w(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], r = (i) => {
      i && (this.isSupportedCode(i) ? s.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return w(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : w(e) && r(this.formatLanguageCode(e)), n.forEach((i) => {
      s.indexOf(i) < 0 && r(this.formatLanguageCode(i));
    }), s;
  }
}
const Ne = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Fe = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class ut {
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Fe;
      if (!e.match(/-|_/)) return Fe;
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
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, r) => Ne[s] - Ne[r]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Ee = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = et(a, e, t);
  return !r && s && w(t) && (r = $e(a, t, n), r === void 0 && (r = $e(e, t, n))), r;
}, Se = (a) => a.replace(/\$/g, "$$$$");
class lt {
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
      unescapeSuffix: f,
      unescapePrefix: p,
      nestingPrefix: c,
      nestingPrefixEscaped: b,
      nestingSuffix: k,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: m,
      maxReplaces: v,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : nt, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = r ? _(r) : i || "{{", this.suffix = o ? _(o) : u || "}}", this.formatSeparator = l || ",", this.unescapePrefix = f ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = c ? _(c) : b || _("$t("), this.nestingSuffix = k ? _(k) : N || _(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
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
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (b) => {
      if (b.indexOf(this.formatSeparator) < 0) {
        const v = Ee(t, u, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, n, {
          ...s,
          ...t,
          interpolationkey: b
        }) : v;
      }
      const k = b.split(this.formatSeparator), N = k.shift().trim(), m = k.join(this.formatSeparator).trim();
      return this.format(Ee(t, u, N, this.options.keySeparator, this.options.ignoreJSONStructure), m, n, {
        ...s,
        ...t,
        interpolationkey: N
      });
    };
    this.resetRegExp();
    const f = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, p = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (b) => Se(b)
    }, {
      regex: this.regexp,
      safeValue: (b) => this.escapeValue ? Se(this.escape(b)) : Se(b)
    }].forEach((b) => {
      for (o = 0; r = b.regex.exec(e); ) {
        const k = r[1].trim();
        if (i = l(k), i === void 0)
          if (typeof f == "function") {
            const m = f(e, r, s);
            i = w(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, k))
            i = "";
          else if (p) {
            i = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${e}`), i = "";
        else !w(i) && !this.useRawValueToEscape && (i = Le(i));
        const N = b.safeValue(i);
        if (e = e.replace(r[0], N), p ? (b.regex.lastIndex += i.length, b.regex.lastIndex -= r[0].length) : b.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, i;
    const o = (u, l) => {
      const f = this.nestingOptionsSeparator;
      if (u.indexOf(f) < 0) return u;
      const p = u.split(new RegExp(`${f}[ ]*{`));
      let c = `{${p[1]}`;
      u = p[0], c = this.interpolate(c, i);
      const b = c.match(/'/g), k = c.match(/"/g);
      ((b?.length ?? 0) % 2 === 0 && !k || k.length % 2 !== 0) && (c = c.replace(/'/g, '"'));
      try {
        i = JSON.parse(c), l && (i = {
          ...l,
          ...i
        });
      } catch (N) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, N), `${u}${f}${c}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let u = [];
      i = {
        ...n
      }, i = i.replace && !w(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let l = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const f = s[1].split(this.formatSeparator).map((p) => p.trim());
        s[1] = f.shift(), u = f, l = !0;
      }
      if (r = t(o.call(this, s[1].trim(), i), i), r && s[0] === e && !w(r)) return r;
      w(r) || (r = Le(r)), r || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), r = ""), l && (r = u.reduce((f, p) => this.format(f, p, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), r.trim())), e = e.replace(s[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ct = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const n = a.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((i) => {
      if (i) {
        const [o, ...u] = i.split(":"), l = u.join(":").trim().replace(/^'+|'+$/g, ""), f = o.trim();
        t[f] || (t[f] = l), l === "false" && (t[f] = !1), l === "true" && (t[f] = !0), isNaN(l) || (t[f] = parseInt(l, 10));
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
class ft {
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
        formatOptions: f
      } = ct(u);
      if (this.formats[l]) {
        let p = o;
        try {
          const c = s?.formatParams?.[s.interpolationkey] || {}, b = c.locale || c.lng || s.locale || s.lng || n;
          p = this.formats[l](o, b, {
            ...f,
            ...s,
            ...c
          });
        } catch (c) {
          this.logger.warn(c);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return o;
    }, e);
  }
}
const dt = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class ht extends pe {
  constructor(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = W.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const r = {}, i = {}, o = {}, u = {};
    return e.forEach((l) => {
      let f = !0;
      t.forEach((p) => {
        const c = `${l}|${p}`;
        !n.reload && this.store.hasResourceBundle(l, p) ? this.state[c] = 2 : this.state[c] < 0 || (this.state[c] === 1 ? i[c] === void 0 && (i[c] = !0) : (this.state[c] = 1, f = !1, i[c] === void 0 && (i[c] = !0), r[c] === void 0 && (r[c] = !0), u[p] === void 0 && (u[p] = !0)));
      }), f || (o[l] = !0);
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
      _e(u.loaded, [r], i), dt(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((l) => {
        o[l] || (o[l] = {});
        const f = u.loaded[l];
        f.length && f.forEach((p) => {
          o[l][p] === void 0 && (o[l][p] = !0);
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
    const o = (l, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (l && f && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, r * 2, i);
        }, r);
        return;
      }
      i(l, f);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const l = u(e, t);
        l && typeof l.then == "function" ? l.then((f) => o(null, f)).catch(o) : o(null, l);
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
    w(e) && (e = this.languageUtils.toResolveHierarchy(e)), w(t) && (t = [t]);
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
            let f;
            l.length === 5 ? f = l(e, t, n, s, u) : f = l(e, t, n, s), f && typeof f.then == "function" ? f.then((p) => o(null, p)).catch(o) : o(null, f);
          } catch (f) {
            o(f);
          }
        else
          l(e, t, n, s, o, u);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const Te = () => ({
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
    if (typeof a[1] == "object" && (e = a[1]), w(a[1]) && (e.defaultValue = a[1]), w(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
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
}), Ae = (a) => (w(a.ns) && (a.ns = [a.ns]), w(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), w(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), a.supportedLngs?.indexOf?.("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a), ue = () => {
}, gt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class ie extends pe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ae(e), this.services = {}, this.logger = W, this.modules = {
      external: []
    }, gt(this), t && !this.isInitialized && !e.isClone) {
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
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (w(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = Te();
    this.options = {
      ...s,
      ...this.options,
      ...Ae(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? W.init(r(this.modules.logger), this.options) : W.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : f = ft;
      const p = new Re(this.options);
      this.store = new Me(this.options.resources, this.options);
      const c = this.services;
      c.logger = W, c.resourceStore = this.store, c.languageUtils = p, c.pluralResolver = new ut(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = r(f), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new lt(this.options), c.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, c.backendConnector = new ht(r(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(b) {
        for (var k = arguments.length, N = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          N[m - 1] = arguments[m];
        e.emit(b, ...N);
      }), this.modules.languageDetector && (c.languageDetector = r(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = r(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new ge(this.services, this.options), this.translator.on("*", function(b) {
        for (var k = arguments.length, N = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          N[m - 1] = arguments[m];
        e.emit(b, ...N);
      }), this.modules.external.forEach((b) => {
        b.init && b.init(this);
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
    const u = se(), l = () => {
      const f = (p, c) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(c), n(p, c);
      };
      if (this.languages && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), u;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue;
    const s = w(e) ? e : this.language;
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
      const l = w(u) ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      l && (this.language || r(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector?.cacheUserLanguage?.(l)), this.loadResources(l, (f) => {
        i(f, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const r = function(i, o) {
      let u;
      if (typeof o != "object") {
        for (var l = arguments.length, f = new Array(l > 2 ? l - 2 : 0), p = 2; p < l; p++)
          f[p - 2] = arguments[p];
        u = s.options.overloadTranslationOptionHandler([i, o].concat(f));
      } else
        u = {
          ...o
        };
      u.lng = u.lng || r.lng, u.lngs = u.lngs || r.lngs, u.ns = u.ns || r.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || r.keyPrefix);
      const c = s.options.keySeparator || ".";
      let b;
      return u.keyPrefix && Array.isArray(i) ? b = i.map((k) => `${u.keyPrefix}${c}${k}`) : b = u.keyPrefix ? `${u.keyPrefix}${c}${i}` : i, s.t(b, u);
    };
    return w(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
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
    return this.options.ns ? (w(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = se();
    w(e) && (e = [e]);
    const s = this.options.preload || [], r = e.filter((i) => s.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return r.length ? (this.options.preload = s.concat(r), this.loadResources((i) => {
      n.resolve(), t && t(i);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new Re(Te());
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
      }, Object.keys(u[l]).reduce((f, p) => (f[p] = {
        ...u[l][p]
      }, f), {})), {});
      r.store = new Me(o, s), r.services.resourceStore = r.store;
    }
    return r.translator = new ge(r.services, s), r.translator.on("*", function(o) {
      for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
        l[f - 1] = arguments[f];
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
const A = ie.createInstance();
A.createInstance = ie.createInstance;
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
const pt = { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, mt = { dateFormat: "MM/DD/YYYY", titleFormat: "MMMM YYYY", btnToday: "Today", disabledTodayTooltip: "Disabled Today Button." }, yt = { am: "AM", pm: "PM", btnNow: "Current time" }, xt = { cancel: "Cancel", ignore: "Ignore", no: "No", ok: "OK", retry: "Retry", stop: "Abort", yes: "Yes" }, bt = { search: "Search:", regex: "(/{Pattern}/ for regex)", replace: "Text for searching:", with: "Text for replacing:", replaceYN: "Are you sure to replace?", yes: "Yes", no: "No", all: "All", stop: "Stop" }, St = { placeholder: "Enter the keywords.", "results.no-result": "No result was found." }, $t = { "sort.ascending": "Sort Ascending", "sort.descending": "Sort Descending", "sort.clear": "Clear Sort", "search.placeholder": "Enter the keywords.", "list.no-result": "No result was found.", "list.select-all": "Select All", "list.blanks": "Blanks", "string.input.placeholder": "Enter the keywords.", "check.check-all": "Check All", "check.uncheck-all": "Uncheck All", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number.", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date.", "date.between.from": "Start Date", "date.between.to": "End Date", ok: "OK", clear: "Clear" }, wt = {
  common: pt,
  datePicker: mt,
  timePicker: yt,
  confirm: xt,
  editor: bt,
  pageContainer: St,
  rowFilter: $t
}, vt = { sun: "日", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土" }, Ot = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY年MM月", btnToday: "今日" }, Lt = { btnNow: "現在時刻" }, kt = { cancel: "取消", ignore: "無視", no: "いいえ", ok: "確認", retry: "再開", stop: "中止", yes: "はい" }, Ct = { yes: "はい", no: "いいえ" }, Pt = { placeholder: "検索キーワードを入力してください。", "results.no-result": "検索結果がありません。" }, Mt = { "sort.ascending": "昇順整列", "sort.descending": "降順整列", "sort.clear": "整列初期化", "search.placeholder": "検索キーワードを入力してください。", "list.no-result": "検索結果がありません。", "list.select-all": "全選択", "list.blanks": "空白", "string.input.placeholder": "検索キーワードを入力してください。", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date", "date.between.from": "開始日", "date.between.to": "終了日", ok: "確認", clear: "初期化" }, Dt = {
  common: vt,
  datePicker: Ot,
  timePicker: Lt,
  confirm: kt,
  editor: Ct,
  pageContainer: Pt,
  rowFilter: Mt
}, Rt = { sun: "일", mon: "월", tue: "화", wed: "수", thu: "목", fri: "금", sat: "토" }, Nt = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY년 M월", btnToday: "오늘 선택", disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다." }, Ft = { am: "오전", pm: "오후", btnNow: "현재 시간" }, Et = { cancel: "취소", ignore: "무시", no: "아니오", ok: "확인", retry: "재시도", stop: "중단", yes: "예" }, Tt = { search: "검색어:", regex: "(/{패턴}/으로 정규식 사용)", replace: "찾을 문자열:", with: "변경될 문자열:", replaceYN: "변경하시겠습니까?", yes: "예", no: "아니오", all: "모두", stop: "취소" }, At = { placeholder: "검색어를 입력해주세요", "results.no-result": "검색 결과가 없습니다." }, Yt = { "sort.ascending": "오름차순 정렬", "sort.descending": "내림차순 정렬", "sort.clear": "정렬 제거", "search.placeholder": "검색어 입력", "list.no-result": "검색 결과 없음", "list.select-all": "전체 선택", "list.blanks": "셀 값 없음", "string.input.placeholder": "검색어 입력", "check.check-all": "전체 체크", "check.uncheck-all": "전체 체크 해제", "number.select.between": "범위", "number.select.blank": "빈 값", "number.input.placeholder": "숫자 입력", "number.between.from": "최소값", "number.between.to": "최대값", "date.select.between": "범위", "date.select.blank": "빈 값", "date.input.placeholder": "날짜 입력", "date.between.from": "시작 날짜", "date.between.to": "종료 날짜", ok: "확인", clear: "초기화" }, jt = {
  common: Rt,
  datePicker: Nt,
  timePicker: Ft,
  confirm: Et,
  editor: Tt,
  pageContainer: At,
  rowFilter: Yt
}, It = { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, Kt = { dateFormat: "YYYY-MM-DD", titleFormat: "YYYY年MM月", btnToday: "今天" }, Vt = { btnNow: "当前时间" }, Ut = { cancel: "取消", ignore: "忽略", no: "否", ok: "确认", retry: "重试", stop: "中断", yes: "是" }, Ht = { yes: "是", no: "否" }, Bt = { placeholder: "请输入关键词。", "results.no-result": "无查询结果。" }, zt = { "sort.ascending": "Sort Ascending", "sort.descending": "Sort Descending", "sort.clear": "排列初始化", "search.placeholder": "请输入关键词。", "list.no-result": "无查询结果。", "list.select-all": "全部选择", "list.blanks": "空白", "string.input.placeholder": "请输入关键词。", "number.select.between": "Between", "number.select.blank": "Blank", "number.input.placeholder": "Enter a number", "number.between.from": "From", "number.between.to": "To", "date.select.between": "Between", "date.select.blank": "Blank", "date.input.placeholder": "Enter a date", "date.between.from": "开始日期", "date.between.to": "结束日期", ok: "确认", clear: "初始化" }, Jt = {
  common: It,
  datePicker: Kt,
  timePicker: Vt,
  confirm: Ut,
  editor: Ht,
  pageContainer: Bt,
  rowFilter: zt
};
we.extend(Ge);
const Ye = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], je = ["일", "월", "화", "수", "목", "금", "토"], Wt = "ko", Zt = "en", ne = "translation";
we.locale("ko", {
  months: Ye,
  monthsShort: Ye,
  weekdays: je,
  weekdaysShort: je
});
A.isInitialized ? He() : qt();
const Qt = {
  get currentLang() {
    return A.language;
  },
  t: Gt,
  i18next: A,
  setLocale: Ie,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(a) {
    Ie(a);
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
      return A.t(`${a}.${t}`);
    },
    set(e, t, n) {
      return A.addResource(Qt.currentLang, ne, `${a}.${t}`, n), !0;
    }
  });
}
function Ie(a) {
  we.locale(a), A.changeLanguage(a);
}
function Gt(a) {
  return A.t(a);
}
A.on("languageChanged", (a) => {
  document.documentElement.lang = a;
});
function qt() {
  A.init({
    lng: Wt,
    fallbackLng: Zt,
    initAsync: !1,
    defaultNS: ne
  }), He();
}
function He() {
  A.addResourceBundle("ko", ne, jt).addResourceBundle("en", ne, wt).addResourceBundle("ja", ne, Dt).addResourceBundle("zh", ne, Jt);
}
export {
  we as d,
  Qt as i
};
//# sourceMappingURL=index-Dg1kU5Nj.js.map
