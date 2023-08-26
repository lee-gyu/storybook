var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "../../node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/dayjs.min.js"(exports, module) {
    "use strict";
    !function(t2, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e2();
    }(exports, function() {
      "use strict";
      var t2 = 1e3, e2 = 6e4, n3 = 36e5, r3 = "millisecond", i3 = "second", s3 = "minute", u3 = "hour", a3 = "day", o3 = "week", c3 = "month", f3 = "quarter", h3 = "year", d3 = "date", l3 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y3 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n4 = t3 % 100;
        return "[" + t3 + (e3[(n4 - 20) % 10] || e3[n4] || e3[0]) + "]";
      } }, m3 = function(t3, e3, n4) {
        var r4 = String(t3);
        return !r4 || r4.length >= e3 ? t3 : "" + Array(e3 + 1 - r4.length).join(n4) + t3;
      }, v3 = { s: m3, z: function(t3) {
        var e3 = -t3.utcOffset(), n4 = Math.abs(e3), r4 = Math.floor(n4 / 60), i4 = n4 % 60;
        return (e3 <= 0 ? "+" : "-") + m3(r4, 2, "0") + ":" + m3(i4, 2, "0");
      }, m: function t3(e3, n4) {
        if (e3.date() < n4.date())
          return -t3(n4, e3);
        var r4 = 12 * (n4.year() - e3.year()) + (n4.month() - e3.month()), i4 = e3.clone().add(r4, c3), s4 = n4 - i4 < 0, u4 = e3.clone().add(r4 + (s4 ? -1 : 1), c3);
        return +(-(r4 + (n4 - i4) / (s4 ? i4 - u4 : u4 - i4)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c3, y: h3, w: o3, d: a3, D: d3, h: u3, m: s3, s: i3, ms: r3, Q: f3 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g3 = "en", D3 = {};
      D3[g3] = M;
      var p3 = function(t3) {
        return t3 instanceof b3;
      }, S2 = function t3(e3, n4, r4) {
        var i4;
        if (!e3)
          return g3;
        if ("string" == typeof e3) {
          var s4 = e3.toLowerCase();
          D3[s4] && (i4 = s4), n4 && (D3[s4] = n4, i4 = s4);
          var u4 = e3.split("-");
          if (!i4 && u4.length > 1)
            return t3(u4[0]);
        } else {
          var a4 = e3.name;
          D3[a4] = e3, i4 = a4;
        }
        return !r4 && i4 && (g3 = i4), i4 || !r4 && g3;
      }, w3 = function(t3, e3) {
        if (p3(t3))
          return t3.clone();
        var n4 = "object" == typeof e3 ? e3 : {};
        return n4.date = t3, n4.args = arguments, new b3(n4);
      }, O3 = v3;
      O3.l = S2, O3.i = p3, O3.w = function(t3, e3) {
        return w3(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var b3 = function() {
        function M2(t3) {
          this.$L = S2(t3.locale, null, true), this.parse(t3);
        }
        var m4 = M2.prototype;
        return m4.parse = function(t3) {
          this.$d = function(t4) {
            var e3 = t4.date, n4 = t4.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (O3.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r4 = e3.match($);
              if (r4) {
                var i4 = r4[2] - 1 || 0, s4 = (r4[7] || "0").substring(0, 3);
                return n4 ? new Date(Date.UTC(r4[1], i4, r4[3] || 1, r4[4] || 0, r4[5] || 0, r4[6] || 0, s4)) : new Date(r4[1], i4, r4[3] || 1, r4[4] || 0, r4[5] || 0, r4[6] || 0, s4);
              }
            }
            return new Date(e3);
          }(t3), this.$x = t3.x || {}, this.init();
        }, m4.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m4.$utils = function() {
          return O3;
        }, m4.isValid = function() {
          return !(this.$d.toString() === l3);
        }, m4.isSame = function(t3, e3) {
          var n4 = w3(t3);
          return this.startOf(e3) <= n4 && n4 <= this.endOf(e3);
        }, m4.isAfter = function(t3, e3) {
          return w3(t3) < this.startOf(e3);
        }, m4.isBefore = function(t3, e3) {
          return this.endOf(e3) < w3(t3);
        }, m4.$g = function(t3, e3, n4) {
          return O3.u(t3) ? this[e3] : this.set(n4, t3);
        }, m4.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m4.valueOf = function() {
          return this.$d.getTime();
        }, m4.startOf = function(t3, e3) {
          var n4 = this, r4 = !!O3.u(e3) || e3, f4 = O3.p(t3), l4 = function(t4, e4) {
            var i4 = O3.w(n4.$u ? Date.UTC(n4.$y, e4, t4) : new Date(n4.$y, e4, t4), n4);
            return r4 ? i4 : i4.endOf(a3);
          }, $2 = function(t4, e4) {
            return O3.w(n4.toDate()[t4].apply(n4.toDate("s"), (r4 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n4);
          }, y4 = this.$W, M3 = this.$M, m5 = this.$D, v4 = "set" + (this.$u ? "UTC" : "");
          switch (f4) {
            case h3:
              return r4 ? l4(1, 0) : l4(31, 11);
            case c3:
              return r4 ? l4(1, M3) : l4(0, M3 + 1);
            case o3:
              var g4 = this.$locale().weekStart || 0, D4 = (y4 < g4 ? y4 + 7 : y4) - g4;
              return l4(r4 ? m5 - D4 : m5 + (6 - D4), M3);
            case a3:
            case d3:
              return $2(v4 + "Hours", 0);
            case u3:
              return $2(v4 + "Minutes", 1);
            case s3:
              return $2(v4 + "Seconds", 2);
            case i3:
              return $2(v4 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m4.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m4.$set = function(t3, e3) {
          var n4, o4 = O3.p(t3), f4 = "set" + (this.$u ? "UTC" : ""), l4 = (n4 = {}, n4[a3] = f4 + "Date", n4[d3] = f4 + "Date", n4[c3] = f4 + "Month", n4[h3] = f4 + "FullYear", n4[u3] = f4 + "Hours", n4[s3] = f4 + "Minutes", n4[i3] = f4 + "Seconds", n4[r3] = f4 + "Milliseconds", n4)[o4], $2 = o4 === a3 ? this.$D + (e3 - this.$W) : e3;
          if (o4 === c3 || o4 === h3) {
            var y4 = this.clone().set(d3, 1);
            y4.$d[l4]($2), y4.init(), this.$d = y4.set(d3, Math.min(this.$D, y4.daysInMonth())).$d;
          } else
            l4 && this.$d[l4]($2);
          return this.init(), this;
        }, m4.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m4.get = function(t3) {
          return this[O3.p(t3)]();
        }, m4.add = function(r4, f4) {
          var d4, l4 = this;
          r4 = Number(r4);
          var $2 = O3.p(f4), y4 = function(t3) {
            var e3 = w3(l4);
            return O3.w(e3.date(e3.date() + Math.round(t3 * r4)), l4);
          };
          if ($2 === c3)
            return this.set(c3, this.$M + r4);
          if ($2 === h3)
            return this.set(h3, this.$y + r4);
          if ($2 === a3)
            return y4(1);
          if ($2 === o3)
            return y4(7);
          var M3 = (d4 = {}, d4[s3] = e2, d4[u3] = n3, d4[i3] = t2, d4)[$2] || 1, m5 = this.$d.getTime() + r4 * M3;
          return O3.w(m5, this);
        }, m4.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m4.format = function(t3) {
          var e3 = this, n4 = this.$locale();
          if (!this.isValid())
            return n4.invalidDate || l3;
          var r4 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i4 = O3.z(this), s4 = this.$H, u4 = this.$m, a4 = this.$M, o4 = n4.weekdays, c4 = n4.months, f4 = n4.meridiem, h4 = function(t4, n5, i5, s5) {
            return t4 && (t4[n5] || t4(e3, r4)) || i5[n5].slice(0, s5);
          }, d4 = function(t4) {
            return O3.s(s4 % 12 || 12, t4, "0");
          }, $2 = f4 || function(t4, e4, n5) {
            var r5 = t4 < 12 ? "AM" : "PM";
            return n5 ? r5.toLowerCase() : r5;
          };
          return r4.replace(y3, function(t4, r5) {
            return r5 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return O3.s(e3.$y, 4, "0");
                case "M":
                  return a4 + 1;
                case "MM":
                  return O3.s(a4 + 1, 2, "0");
                case "MMM":
                  return h4(n4.monthsShort, a4, c4, 3);
                case "MMMM":
                  return h4(c4, a4);
                case "D":
                  return e3.$D;
                case "DD":
                  return O3.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h4(n4.weekdaysMin, e3.$W, o4, 2);
                case "ddd":
                  return h4(n4.weekdaysShort, e3.$W, o4, 3);
                case "dddd":
                  return o4[e3.$W];
                case "H":
                  return String(s4);
                case "HH":
                  return O3.s(s4, 2, "0");
                case "h":
                  return d4(1);
                case "hh":
                  return d4(2);
                case "a":
                  return $2(s4, u4, true);
                case "A":
                  return $2(s4, u4, false);
                case "m":
                  return String(u4);
                case "mm":
                  return O3.s(u4, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return O3.s(e3.$s, 2, "0");
                case "SSS":
                  return O3.s(e3.$ms, 3, "0");
                case "Z":
                  return i4;
              }
              return null;
            }(t4) || i4.replace(":", "");
          });
        }, m4.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m4.diff = function(r4, d4, l4) {
          var $2, y4 = this, M3 = O3.p(d4), m5 = w3(r4), v4 = (m5.utcOffset() - this.utcOffset()) * e2, g4 = this - m5, D4 = function() {
            return O3.m(y4, m5);
          };
          switch (M3) {
            case h3:
              $2 = D4() / 12;
              break;
            case c3:
              $2 = D4();
              break;
            case f3:
              $2 = D4() / 3;
              break;
            case o3:
              $2 = (g4 - v4) / 6048e5;
              break;
            case a3:
              $2 = (g4 - v4) / 864e5;
              break;
            case u3:
              $2 = g4 / n3;
              break;
            case s3:
              $2 = g4 / e2;
              break;
            case i3:
              $2 = g4 / t2;
              break;
            default:
              $2 = g4;
          }
          return l4 ? $2 : O3.a($2);
        }, m4.daysInMonth = function() {
          return this.endOf(c3).$D;
        }, m4.$locale = function() {
          return D3[this.$L];
        }, m4.locale = function(t3, e3) {
          if (!t3)
            return this.$L;
          var n4 = this.clone(), r4 = S2(t3, e3, true);
          return r4 && (n4.$L = r4), n4;
        }, m4.clone = function() {
          return O3.w(this.$d, this);
        }, m4.toDate = function() {
          return new Date(this.valueOf());
        }, m4.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m4.toISOString = function() {
          return this.$d.toISOString();
        }, m4.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), _ = b3.prototype;
      return w3.prototype = _, [["$ms", r3], ["$s", i3], ["$m", s3], ["$H", u3], ["$W", a3], ["$M", c3], ["$y", h3], ["$D", d3]].forEach(function(t3) {
        _[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      }), w3.extend = function(t3, e3) {
        return t3.$i || (t3(e3, b3, w3), t3.$i = true), w3;
      }, w3.locale = S2, w3.isDayjs = p3, w3.unix = function(t3) {
        return w3(1e3 * t3);
      }, w3.en = D3[g3], w3.Ls = D3, w3.p = {}, w3;
    });
  }
});

// src/version.ts
if (true) {
  if (window.__IR_STYLE_VERSION__ && window.__IR_STYLE_VERSION__ !== "1.6.1-dev-51d16a")
    console.warn(`ir-style version collision detected! currently loaded: ${window.__IR_STYLE_VERSION__}, and trying ${"1.6.1-dev-51d16a"}`);
  else
    window.__IR_STYLE_VERSION__ = "1.6.1-dev-51d16a";
}

// src/utils/layer/index.ts
var initDefaultLayerElements = (() => {
  const irStyleLayerElements = [
    "react_app",
    "floating",
    "drawer",
    "dialog",
    "popover",
    "message",
    "toast"
  ];
  function createElement(key) {
    const div = document.createElement("div");
    div.id = "ir_" + key;
    if (key !== "ir_react_app") {
      div.classList.add("ir-style-layer");
      div.classList.add(`z-index--${key}`);
    }
    return div;
  }
  return (parent) => {
    irStyleLayerElements.filter((key) => !document.getElementById(key)).forEach((key) => parent.appendChild(createElement(key)));
  };
})();

// src/_init.ts
initDefaultLayerElements(document.body);

// src/js-components/_config/index.tsx
var import_dayjs = __toESM(require_dayjs_min());
var IR_STYLE_CONFIG = {
  datePicker: {
    minDate: (0, import_dayjs.default)("1970-01-01").toDate(),
    maxDate: (0, import_dayjs.default)("9999-12-31").toDate()
  },
  grid: {
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 8,
    defaultRowMinSize: 30,
    defaultRowMaxSize: 100,
    defaultRowHeight: 30,
    defaultColumnMinSize: 80,
    defaultColumnMaxSize: 500,
    defaultColumnWidth: 100
  },
  layerElementId: {
    floating: "#ir_floating",
    drawer: "#ir_drawer",
    dialog: "#ir_dialog",
    popover: "#ir_popover",
    message: "#ir_message",
    toast: "#ir_toast"
  }
};
function getLayerElement(layer) {
  const elementId = IR_STYLE_CONFIG.layerElementId[layer];
  const element = document.querySelector(elementId);
  if (!(element instanceof HTMLElement))
    throw new Error(`Not found layer element '${elementId}'`);
  return element;
}

// src/utils/keyBinder/keyBinder.ts
var keyMap = {};
document.addEventListener("keydown", (ev) => {
  if (keyMap[ev.key])
    keyMap[ev.key].forEach((callBack) => callBack(ev));
});
var registerGlobalKeyListener = (key, callback) => {
  if (keyMap[key])
    keyMap[key].push(callback);
  else
    keyMap[key] = [callback];
};
var unregisterGlobalKeyListener = (key, callback) => {
  const id = keyMap[key].indexOf(callback);
  if (id !== -1)
    keyMap[key].splice(id, 1);
};
var clearGlobalKeyListener = (key) => {
  delete keyMap[key];
};

// src/utils/keyBinder/esc-hide.ts
var popupStack = [];
registerGlobalKeyListener("Escape", () => {
  var _a;
  const pop = popupStack.pop();
  if (pop) {
    (_a = pop.onESC) == null ? void 0 : _a.call(pop);
    pop.hide();
  }
});
function createESCHideController(obj) {
  function getId() {
    return popupStack.indexOf(obj);
  }
  return {
    create: () => {
      if (getId() === -1)
        popupStack.push(obj);
      else
        throw new Error(`Already created esc controller`);
    },
    destroy: () => {
      const id = popupStack.indexOf(obj);
      if (id !== -1)
        popupStack.splice(id, 1);
    }
  };
}

// ../../node_modules/.pnpm/@floating-ui+core@1.2.6/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[1];
}
function e(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i(i3, r3, a3) {
  let { reference: l3, floating: s3 } = i3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o(r3), u3 = e(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p3;
  switch (n(r3)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r3)) {
    case "start":
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r = async (t2, e2, n3) => {
  const { placement: o3 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
  let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }), { x: m3, y: u3 } = i(f3, o3, c3), g3 = o3, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o3, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
    m3 = null != y3 ? y3 : m3, u3 = null != x3 ? x3 : u3, d3 = { ...d3, [a4]: { ...d3[a4], ...w3 } }, v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }) : v3.rects), { x: m3, y: u3 } = i(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
async function s(t2, e2) {
  var n3;
  void 0 === e2 && (e2 = {});
  const { x: o3, y: i3, platform: r3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: m3 = "clippingAncestors", rootBoundary: u3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e2, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await r3.getClippingRect({ element: null == (n3 = await (null == r3.isElement ? void 0 : r3.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == r3.getDocumentElement ? void 0 : r3.getDocumentElement(c3.floating)), boundary: m3, rootBoundary: u3, strategy: f3 })), w3 = "floating" === g3 ? { ...s3.floating, x: o3, y: i3 } : s3.reference, v3 = await (null == r3.getOffsetParent ? void 0 : r3.getOffsetParent(c3.floating)), b3 = await (null == r3.isElement ? void 0 : r3.isElement(v3)) && await (null == r3.getScale ? void 0 : r3.getScale(v3)) || { x: 1, y: 1 }, A2 = l(r3.convertOffsetParentRelativeRectToViewportRelativeRect ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x3.top - A2.top + h3.top) / b3.y, bottom: (A2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - A2.left + h3.left) / b3.x, right: (A2.right - x3.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function m(t2, e2, n3) {
  return f(t2, c(e2, n3));
}
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => p[t3]);
}
function y(n3, i3, r3) {
  void 0 === r3 && (r3 = false);
  const a3 = t(n3), l3 = o(n3), s3 = e(l3);
  let c3 = "x" === l3 ? a3 === (r3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i3.reference[s3] > i3.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
}
var x = { start: "end", end: "start" };
function w(t2) {
  return t2.replace(/start|end/g, (t3) => x[t3]);
}
var b = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o3) {
    var i3;
    const { placement: r3, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: m3 } = o3, { mainAxis: u3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true, ...b3 } = e2, A2 = n(r3), R2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(m3.floating)), E2 = d3 || (R2 || !v3 ? [h(c3)] : function(t2) {
      const e3 = h(t2);
      return [w(t2), e3, w(e3)];
    }(c3));
    d3 || "none" === x3 || E2.push(...function(e3, o4, i4, r4) {
      const a4 = t(e3);
      let l4 = function(t2, e4, n3) {
        const o5 = ["left", "right"], i5 = ["right", "left"], r5 = ["top", "bottom"], a5 = ["bottom", "top"];
        switch (t2) {
          case "top":
          case "bottom":
            return n3 ? e4 ? i5 : o5 : e4 ? o5 : i5;
          case "left":
          case "right":
            return e4 ? r5 : a5;
          default:
            return [];
        }
      }(n(e3), "start" === i4, r4);
      return a4 && (l4 = l4.map((t2) => t2 + "-" + a4), o4 && (l4 = l4.concat(l4.map(w)))), l4;
    }(c3, v3, x3, P3));
    const T3 = [c3, ...E2], D3 = await s(o3, b3), L3 = [];
    let k3 = (null == (i3 = a3.flip) ? void 0 : i3.overflows) || [];
    if (u3 && L3.push(D3[A2]), g3) {
      const { main: t2, cross: e3 } = y(r3, l3, P3);
      L3.push(D3[t2], D3[e3]);
    }
    if (k3 = [...k3, { placement: r3, overflows: L3 }], !L3.every((t2) => t2 <= 0)) {
      var O3, B2;
      const t2 = ((null == (O3 = a3.flip) ? void 0 : O3.index) || 0) + 1, e3 = T3[t2];
      if (e3)
        return { data: { index: t2, overflows: k3 }, reset: { placement: e3 } };
      let n3 = null == (B2 = k3.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : B2.placement;
      if (!n3)
        switch (p3) {
          case "bestFit": {
            var C2;
            const t3 = null == (C2 = k3.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : C2[0];
            t3 && (n3 = t3);
            break;
          }
          case "initialPlacement":
            n3 = c3;
        }
      if (r3 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var D = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i3) {
    const { x: r3, y: a3 } = i3, l3 = await async function(e3, i4) {
      const { placement: r4, platform: a4, elements: l4 } = e3, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r4), f3 = t(r4), m3 = "x" === o(r4), u3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && m3 ? -1 : 1, d3 = "function" == typeof i4 ? i4(e3) : i4;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d3 };
      return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), m3 ? { x: h3 * g3, y: p3 * u3 } : { x: p3 * u3, y: h3 * g3 };
    }(i3, e2);
    return { x: r3 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function L(t2) {
  return "x" === t2 ? "y" : "x";
}
var k = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
    const { x: i3, y: r3, placement: a3 } = e2, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t3) => {
      let { x: e3, y: n3 } = t3;
      return { x: e3, y: n3 };
    } }, ...u3 } = t2, g3 = { x: i3, y: r3 }, d3 = await s(e2, u3), p3 = o(n(a3)), h3 = L(p3);
    let y3 = g3[p3], x3 = g3[h3];
    if (l3) {
      const t3 = "y" === p3 ? "bottom" : "right";
      y3 = m(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t3]);
    }
    if (c3) {
      const t3 = "y" === h3 ? "bottom" : "right";
      x3 = m(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t3]);
    }
    const w3 = f3.fn({ ...e2, [p3]: y3, [h3]: x3 });
    return { ...w3, data: { x: w3.x - i3, y: w3.y - r3 } };
  } };
};

// ../../node_modules/.pnpm/@floating-ui+dom@1.2.7/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e2;
  return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
}
function o2(t2) {
  return n2(t2).getComputedStyle(t2);
}
function i2(t2) {
  return t2 instanceof n2(t2).Node;
}
function r2(t2) {
  return i2(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
var l2;
function c2() {
  if (l2)
    return l2;
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? (l2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), l2) : navigator.userAgent;
}
function s2(t2) {
  return t2 instanceof n2(t2).HTMLElement;
}
function f2(t2) {
  return t2 instanceof n2(t2).Element;
}
function u2(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function a2(t2) {
  const { overflow: e2, overflowX: n3, overflowY: i3, display: r3 } = o2(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r3);
}
function d2(t2) {
  return ["table", "td", "th"].includes(r2(t2));
}
function h2(t2) {
  const e2 = /firefox/i.test(c2()), n3 = o2(t2), i3 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i3 && "none" !== i3 || e2 && "filter" === n3.willChange || e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e3 = n3.contain;
    return null != e3 && e3.includes(t3);
  });
}
function p2() {
  return /^((?!chrome|android).)*safari/i.test(c2());
}
function g2(t2) {
  return ["html", "body", "#document"].includes(r2(t2));
}
var m2 = Math.min;
var y2 = Math.max;
var x2 = Math.round;
function w2(t2) {
  const e2 = o2(t2);
  let n3 = parseFloat(e2.width), i3 = parseFloat(e2.height);
  const r3 = s2(t2), l3 = r3 ? t2.offsetWidth : n3, c3 = r3 ? t2.offsetHeight : i3, f3 = x2(n3) !== l3 || x2(i3) !== c3;
  return f3 && (n3 = l3, i3 = c3), { width: n3, height: i3, fallback: f3 };
}
function v2(t2) {
  return f2(t2) ? t2 : t2.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t2) {
  const e2 = v2(t2);
  if (!s2(e2))
    return b2;
  const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, fallback: r3 } = w2(e2);
  let l3 = (r3 ? x2(n3.width) : n3.width) / o3, c3 = (r3 ? x2(n3.height) : n3.height) / i3;
  return l3 && Number.isFinite(l3) || (l3 = 1), c3 && Number.isFinite(c3) || (c3 = 1), { x: l3, y: c3 };
}
function E(e2, o3, i3, r3) {
  var l3, c3;
  void 0 === o3 && (o3 = false), void 0 === i3 && (i3 = false);
  const s3 = e2.getBoundingClientRect(), u3 = v2(e2);
  let a3 = b2;
  o3 && (r3 ? f2(r3) && (a3 = L2(r3)) : a3 = L2(e2));
  const d3 = u3 ? n2(u3) : window, h3 = p2() && i3;
  let g3 = (s3.left + (h3 && (null == (l3 = d3.visualViewport) ? void 0 : l3.offsetLeft) || 0)) / a3.x, m3 = (s3.top + (h3 && (null == (c3 = d3.visualViewport) ? void 0 : c3.offsetTop) || 0)) / a3.y, y3 = s3.width / a3.x, x3 = s3.height / a3.y;
  if (u3) {
    const t2 = n2(u3), e3 = r3 && f2(r3) ? n2(r3) : r3;
    let o4 = t2.frameElement;
    for (; o4 && r3 && e3 !== t2; ) {
      const t3 = L2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4);
      e4.x += (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x, e4.y += (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y, g3 *= t3.x, m3 *= t3.y, y3 *= t3.x, x3 *= t3.y, g3 += e4.x, m3 += e4.y, o4 = n2(o4).frameElement;
    }
  }
  return l({ width: y3, height: x3, x: g3, y: m3 });
}
function T2(t2) {
  return ((i2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function R(t2) {
  return f2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function C(t2) {
  return E(T2(t2)).left + R(t2).scrollLeft;
}
function F(t2) {
  if ("html" === r2(t2))
    return t2;
  const e2 = t2.assignedSlot || t2.parentNode || u2(t2) && t2.host || T2(t2);
  return u2(e2) ? e2.host : e2;
}
function S(t2) {
  const e2 = F(t2);
  return g2(e2) ? e2.ownerDocument.body : s2(e2) && a2(e2) ? e2 : S(e2);
}
function W(t2, e2) {
  var o3;
  void 0 === e2 && (e2 = []);
  const i3 = S(t2), r3 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), l3 = n2(i3);
  return r3 ? e2.concat(l3, l3.visualViewport || [], a2(i3) ? i3 : []) : e2.concat(i3, W(i3));
}
function D2(e2, i3, r3) {
  let l3;
  if ("viewport" === i3)
    l3 = function(t2, e3) {
      const o3 = n2(t2), i4 = T2(t2), r4 = o3.visualViewport;
      let l4 = i4.clientWidth, c4 = i4.clientHeight, s3 = 0, f3 = 0;
      if (r4) {
        l4 = r4.width, c4 = r4.height;
        const t3 = p2();
        (!t3 || t3 && "fixed" === e3) && (s3 = r4.offsetLeft, f3 = r4.offsetTop);
      }
      return { width: l4, height: c4, x: s3, y: f3 };
    }(e2, r3);
  else if ("document" === i3)
    l3 = function(t2) {
      const e3 = T2(t2), n3 = R(t2), i4 = t2.ownerDocument.body, r4 = y2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), l4 = y2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
      let c4 = -n3.scrollLeft + C(t2);
      const s3 = -n3.scrollTop;
      return "rtl" === o2(i4).direction && (c4 += y2(e3.clientWidth, i4.clientWidth) - r4), { width: r4, height: l4, x: c4, y: s3 };
    }(T2(e2));
  else if (f2(i3))
    l3 = function(t2, e3) {
      const n3 = E(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r4 = s2(t2) ? L2(t2) : { x: 1, y: 1 };
      return { width: t2.clientWidth * r4.x, height: t2.clientHeight * r4.y, x: i4 * r4.x, y: o3 * r4.y };
    }(i3, r3);
  else {
    const t2 = { ...i3 };
    if (p2()) {
      var c3, u3;
      const o3 = n2(e2);
      t2.x -= (null == (c3 = o3.visualViewport) ? void 0 : c3.offsetLeft) || 0, t2.y -= (null == (u3 = o3.visualViewport) ? void 0 : u3.offsetTop) || 0;
    }
    l3 = t2;
  }
  return l(l3);
}
function V(t2, e2) {
  const n3 = F(t2);
  return !(n3 === e2 || !f2(n3) || g2(n3)) && ("fixed" === o2(n3).position || V(n3, e2));
}
function A(t2, e2) {
  return s2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
}
function H(t2, e2) {
  const i3 = n2(t2);
  if (!s2(t2))
    return i3;
  let l3 = A(t2, e2);
  for (; l3 && d2(l3) && "static" === o2(l3).position; )
    l3 = A(l3, e2);
  return l3 && ("html" === r2(l3) || "body" === r2(l3) && "static" === o2(l3).position && !h2(l3)) ? i3 : l3 || function(t3) {
    let e3 = F(t3);
    for (; s2(e3) && !g2(e3); ) {
      if (h2(e3))
        return e3;
      e3 = F(e3);
    }
    return null;
  }(t2) || i3;
}
function O2(t2, e2, n3) {
  const o3 = s2(e2), i3 = T2(e2), l3 = E(t2, true, "fixed" === n3, e2);
  let c3 = { scrollLeft: 0, scrollTop: 0 };
  const f3 = { x: 0, y: 0 };
  if (o3 || !o3 && "fixed" !== n3)
    if (("body" !== r2(e2) || a2(i3)) && (c3 = R(e2)), s2(e2)) {
      const t3 = E(e2, true);
      f3.x = t3.x + e2.clientLeft, f3.y = t3.y + e2.clientTop;
    } else
      i3 && (f3.x = C(i3));
  return { x: l3.left + c3.scrollLeft - f3.x, y: l3.top + c3.scrollTop - f3.y, width: l3.width, height: l3.height };
}
var P2 = { getClippingRect: function(t2) {
  let { element: e2, boundary: n3, rootBoundary: i3, strategy: l3 } = t2;
  const c3 = "clippingAncestors" === n3 ? function(t3, e3) {
    const n4 = e3.get(t3);
    if (n4)
      return n4;
    let i4 = W(t3).filter((t4) => f2(t4) && "body" !== r2(t4)), l4 = null;
    const c4 = "fixed" === o2(t3).position;
    let s4 = c4 ? F(t3) : t3;
    for (; f2(s4) && !g2(s4); ) {
      const e4 = o2(s4), n5 = h2(s4);
      n5 || "fixed" !== e4.position || (l4 = null), (c4 ? !n5 && !l4 : !n5 && "static" === e4.position && l4 && ["absolute", "fixed"].includes(l4.position) || a2(s4) && !n5 && V(t3, s4)) ? i4 = i4.filter((t4) => t4 !== s4) : l4 = e4, s4 = F(s4);
    }
    return e3.set(t3, i4), i4;
  }(e2, this._c) : [].concat(n3), s3 = [...c3, i3], u3 = s3[0], d3 = s3.reduce((t3, n4) => {
    const o3 = D2(e2, n4, l3);
    return t3.top = y2(o3.top, t3.top), t3.right = m2(o3.right, t3.right), t3.bottom = m2(o3.bottom, t3.bottom), t3.left = y2(o3.left, t3.left), t3;
  }, D2(e2, u3, l3));
  return { width: d3.right - d3.left, height: d3.bottom - d3.top, x: d3.left, y: d3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
  const i3 = s2(n3), l3 = T2(n3);
  if (n3 === l3)
    return e2;
  let c3 = { scrollLeft: 0, scrollTop: 0 }, f3 = { x: 1, y: 1 };
  const u3 = { x: 0, y: 0 };
  if ((i3 || !i3 && "fixed" !== o3) && (("body" !== r2(n3) || a2(l3)) && (c3 = R(n3)), s2(n3))) {
    const t3 = E(n3);
    f3 = L2(n3), u3.x = t3.x + n3.clientLeft, u3.y = t3.y + n3.clientTop;
  }
  return { width: e2.width * f3.x, height: e2.height * f3.y, x: e2.x * f3.x - c3.scrollLeft * f3.x + u3.x, y: e2.y * f3.y - c3.scrollTop * f3.y + u3.y };
}, isElement: f2, getDimensions: function(t2) {
  return w2(t2);
}, getOffsetParent: H, getDocumentElement: T2, getScale: L2, async getElementRects(t2) {
  let { reference: e2, floating: n3, strategy: o3 } = t2;
  const i3 = this.getOffsetParent || H, r3 = this.getDimensions;
  return { reference: O2(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r3(n3) } };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o2(t2).direction };
function z(t2, e2, n3, o3) {
  void 0 === o3 && (o3 = {});
  const { ancestorScroll: i3 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o3, s3 = i3 || r3 ? [...f2(t2) ? W(t2) : t2.contextElement ? W(t2.contextElement) : [], ...W(e2)] : [];
  s3.forEach((t3) => {
    const e3 = !f2(t3) && t3.toString().includes("V");
    !i3 || c3 && !e3 || t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
  });
  let u3, a3 = null;
  l3 && (a3 = new ResizeObserver(() => {
    n3();
  }), f2(t2) && !c3 && a3.observe(t2), f2(t2) || !t2.contextElement || c3 || a3.observe(t2.contextElement), a3.observe(e2));
  let d3 = c3 ? E(t2) : null;
  return c3 && function e3() {
    const o4 = E(t2);
    !d3 || o4.x === d3.x && o4.y === d3.y && o4.width === d3.width && o4.height === d3.height || n3();
    d3 = o4, u3 = requestAnimationFrame(e3);
  }(), n3(), () => {
    var t3;
    s3.forEach((t4) => {
      i3 && t4.removeEventListener("scroll", n3), r3 && t4.removeEventListener("resize", n3);
    }), null == (t3 = a3) || t3.disconnect(), a3 = null, c3 && cancelAnimationFrame(u3);
  };
}
var k2 = (t2, n3, o3) => {
  const i3 = /* @__PURE__ */ new Map(), r3 = { platform: P2, ...o3 }, l3 = { ...r3.platform, _c: i3 };
  return r(t2, n3, { ...r3, platform: l3 });
};

// src/utils/floating.ts
var DEFAULT_OFFSET_SIZE = 8;
function isParentHidden(refElement, floatingElement) {
  if (!refElement.isConnected)
    return true;
  let parentElement = refElement;
  while (parentElement) {
    if (parentElement.style.display === "none")
      return true;
    parentElement = parentElement.parentElement;
  }
  return false;
}
var getVirtualEl = (x3, y3) => {
  return {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: x3,
        y: y3,
        top: y3,
        left: x3,
        bottom: y3,
        right: x3
      };
    }
  };
};
var offsetBottomAutoUpdate = (refElement, floatingElement) => {
  const offsetBottomUpdate = () => {
    if (isParentHidden(refElement, floatingElement))
      return;
    k2(refElement, floatingElement, {
      strategy: "absolute",
      placement: "bottom",
      middleware: [
        D(DEFAULT_OFFSET_SIZE),
        b()
      ]
    }).then(({ x: x3, y: y3 }) => {
      floatingElement.style.top = `${y3}px`;
      floatingElement.style.left = `${x3}px`;
    });
  };
  return z(refElement, floatingElement, offsetBottomUpdate);
};

export {
  __commonJS,
  __export,
  __toESM,
  __decorateClass,
  __publicField,
  require_dayjs_min,
  IR_STYLE_CONFIG,
  getLayerElement,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener,
  clearGlobalKeyListener,
  createESCHideController,
  b,
  D,
  k,
  z,
  k2,
  getVirtualEl,
  offsetBottomAutoUpdate
};
//# sourceMappingURL=chunk-4CFQBDTJ.js.map
