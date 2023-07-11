import {
  __commonJS,
  __toESM,
  require_dayjs_min
} from "./chunk-56RD7WBD.js";

// ../../node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "../../node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    "use strict";
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var a = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3)
            return 0;
          if ("Z" === e3)
            return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], h = function(e2) {
        var t2 = o[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, u = function(e2, t2) {
        var n2, r2 = o.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1)
            if (e2.indexOf(r2(i2, 0, t2)) > -1) {
              n2 = i2 > 12;
              break;
            }
        } else
          n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, d = { A: [i, function(e2) {
        this.afternoon = u(e2, false);
      }], a: [i, function(e2) {
        this.afternoon = u(e2, true);
      }], S: [/\d/, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [n, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(e2) {
        var t2 = o.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2)
          for (var r2 = 1; r2 <= 31; r2 += 1)
            t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(e2) {
        var t2 = h("months"), n2 = (h("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1)
          throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [i, function(e2) {
        var t2 = h("months").indexOf(e2) + 1;
        if (t2 < 1)
          throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(e2) {
        this.year = s(e2);
      }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
      function c(n2) {
        var r2, i2;
        r2 = n2, i2 = o && o.formats;
        for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o2 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = s2[f2], u2 = d[h2], c2 = u2 && u2[0], l = u2 && u2[1];
          s2[f2] = l ? { regex: c2, parser: l } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = s2[n3];
            if ("string" == typeof i3)
              r3 += i3.length;
            else {
              var o2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = o2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, s2 = e3.args;
          this.$u = r3;
          var a2 = s2[1];
          if ("string" == typeof a2) {
            var f2 = true === s2[2], h2 = true === s2[3], u2 = f2 || h2, d2 = s2[2];
            h2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(e4, t4, n3) {
              try {
                if (["x", "X"].indexOf(t4) > -1)
                  return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var r4 = c(t4)(e4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, h3 = r4.seconds, u3 = r4.milliseconds, d3 = r4.zone, l2 = /* @__PURE__ */ new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
                i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
                var p = a3 || 0, v = f3 || 0, D = h3 || 0, g = u3 || 0;
                return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
          } else if (a2 instanceof Array)
            for (var l = a2.length, m = 1; m <= l; m += 1) {
              s2[1] = a2[m - 1];
              var M = n2.apply(this, s2);
              if (M.isValid()) {
                this.$d = M.$d, this.$L = M.$L, this.init();
                break;
              }
              m === l && (this.$d = /* @__PURE__ */ new Date(""));
            }
          else
            i2.call(this, e3);
        };
      };
    });
  }
});

// src/i18n/ko.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("ko", {
  months: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
  monthsShort: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
  weekdays: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
  weekdaysShort: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"]
});
import_dayjs.default.locale("ko");
var i18n = {
  setLocale(lang, definition) {
    import_dayjs.default.locale(lang, definition);
  },
  setDefaultLocale(lang) {
    import_dayjs.default.locale(lang);
  },
  setMomentLocale(lang, definition) {
    this.setLocale(lang, definition);
  },
  setDefaultMomentLocale(lang) {
    this.setDefaultLocale(lang);
  },
  common: {
    sun: "\uC77C",
    mon: "\uC6D4",
    tue: "\uD654",
    wed: "\uC218",
    thu: "\uBAA9",
    fri: "\uAE08",
    sat: "\uD1A0"
  },
  datePicker: {
    dateFormat: "YYYY-MM-DD",
    titleFormat: "YYYY\uB144 M\uC6D4",
    btnToday: "\uC624\uB298 \uC120\uD0DD",
    disabledTodayTooltip: "\uC624\uB298 \uB0A0\uC9DC\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."
  },
  timePicker: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    btnNow: "\uD604\uC7AC \uC2DC\uAC04"
  },
  confirm: {
    cancel: "\uCDE8\uC18C",
    ignore: "\uBB34\uC2DC",
    no: "\uC544\uB2C8\uC624",
    ok: "\uD655\uC778",
    retry: "\uC7AC\uC2DC\uB3C4",
    stop: "\uC911\uB2E8",
    yes: "\uC608"
  },
  editor: {
    search: "\uAC80\uC0C9\uC5B4:",
    regex: "(/{\uD328\uD134}/\uC73C\uB85C \uC815\uADDC\uC2DD \uC0AC\uC6A9)",
    replace: "\uCC3E\uC744 \uBB38\uC790\uC5F4:",
    with: "\uBCC0\uACBD\uB420 \uBB38\uC790\uC5F4:",
    replaceYN: "\uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
    yes: "\uC608",
    no: "\uC544\uB2C8\uC624",
    all: "\uBAA8\uB450",
    stop: "\uCDE8\uC18C"
  }
};
var ko_default = i18n;

// src/i18n/index.ts
var i18n_default = ko_default;

export {
  i18n_default
};
//# sourceMappingURL=chunk-QWQ3YZPD.js.map
