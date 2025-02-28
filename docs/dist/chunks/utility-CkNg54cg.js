import "./_init-D7pcIR7n.js";
import { d as te, g as we, c as Ae, o as Te, f as ye, s as Ee, a as xe } from "./floating-Cojv6uOA.js";
import { bl as B } from "./css-a1kmeZqX.js";
import { h as Le, p as re } from "./rx-state-BNRgEDqt.js";
import { v as ke } from "./v4-CKZ6klMF.js";
import { b as Se } from "./outside-DpurI6XH.js";
import "./image-Y3tFDdOU.js";
import { g as _e } from "./_commonjsHelpers-DaMA6jEr.js";
import "./logger-C1WxLZjH.js";
const Qe = () => ke();
function Ce(a, i, n, f) {
  Ae(a, i, {
    placement: n,
    strategy: "fixed",
    middleware: [
      Te(f),
      ye(),
      Ee({ padding: 5 })
    ]
  }).then(({ x: m, y: e, placement: u }) => {
    i.style.left = `${m}px`, i.style.top = `${e}px`, i.dataset.placement = u;
  });
}
function Ye(a) {
  const {
    containerElement: i,
    placement: n = "bottom",
    offset: f = 8,
    interval: m = 0
  } = a;
  let e = null;
  const { tooltipElement: u, updateText: d } = Le();
  function E(s) {
    return {
      text: s.dataset.irTooltipText ?? "",
      refMode: s.dataset.irTooltipRefMode ?? "element",
      placement: s.dataset.irTooltipPlacement ?? n,
      offset: re(s.dataset.irTooltipOffset, f),
      interval: re(s.dataset.irTooltipInterval, m)
    };
  }
  function S(s) {
    const {
      text: r,
      refMode: w,
      interval: y,
      placement: c,
      offset: _
    } = E(s);
    let g = null;
    const p = () => {
      if (!g)
        throw new Error("Reference element is not set");
      Ce(g, u, c, _);
    }, k = () => {
      d(r), we("popover").appendChild(u), p();
    }, h = () => {
      u.remove();
    }, A = window.setTimeout(() => k(), y);
    return {
      refElement: s,
      setReferenceEl(x) {
        g = x;
      },
      updateLocation: p,
      get isPointerMode() {
        return w === "pointer";
      },
      cleanup() {
        clearTimeout(A), e = null, h();
      }
    };
  }
  const L = (s) => {
    const r = Se("[data-ir-tooltip]", ".ir-tooltip-container", s.target);
    if (!r || !(r instanceof HTMLElement)) {
      e?.cleanup();
      return;
    }
    if (e?.refElement === r) {
      e.isPointerMode && (e.setReferenceEl(te(s.clientX, s.clientY)), e.updateLocation());
      return;
    }
    e?.cleanup(), e = S(r), e.setReferenceEl(e.isPointerMode ? te(s.clientX, s.clientY) : r);
  }, t = () => {
    e?.cleanup();
  };
  return i.classList.add("ir-tooltip-container"), i.addEventListener("mousemove", L), i.addEventListener("mouseleave", t), {
    destroy() {
      e?.cleanup(), i.removeEventListener("mousemove", L), i.removeEventListener("mouseleave", t);
    },
    cleanup() {
      e?.cleanup();
    }
  };
}
var F = { exports: {} }, T = {}, G = { exports: {} }, X = {}, ae;
function pe() {
  if (ae) return X;
  ae = 1;
  function a() {
    var e = {};
    return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e;
  }
  function i(e, u, d) {
  }
  function n(e, u, d) {
  }
  var f = /javascript\s*\:/img;
  function m(e, u) {
    return f.test(u) ? "" : u;
  }
  return X.whiteList = a(), X.getDefaultWhiteList = a, X.onAttr = i, X.onIgnoreAttr = n, X.safeAttrValue = m, X;
}
var Q, ie;
function me() {
  return ie || (ie = 1, Q = {
    indexOf: function(a, i) {
      var n, f;
      if (Array.prototype.indexOf)
        return a.indexOf(i);
      for (n = 0, f = a.length; n < f; n++)
        if (a[n] === i)
          return n;
      return -1;
    },
    forEach: function(a, i, n) {
      var f, m;
      if (Array.prototype.forEach)
        return a.forEach(i, n);
      for (f = 0, m = a.length; f < m; f++)
        i.call(n, a[f], f, a);
    },
    trim: function(a) {
      return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(a) {
      return String.prototype.trimRight ? a.trimRight() : a.replace(/(\s*$)/g, "");
    }
  }), Q;
}
var Y, ne;
function Ie() {
  if (ne) return Y;
  ne = 1;
  var a = me();
  function i(n, f) {
    n = a.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var m = n.length, e = !1, u = 0, d = 0, E = "";
    function S() {
      if (!e) {
        var s = a.trim(n.slice(u, d)), r = s.indexOf(":");
        if (r !== -1) {
          var w = a.trim(s.slice(0, r)), y = a.trim(s.slice(r + 1));
          if (w) {
            var c = f(u, E.length, w, y, s);
            c && (E += c + "; ");
          }
        }
      }
      u = d + 1;
    }
    for (; d < m; d++) {
      var L = n[d];
      if (L === "/" && n[d + 1] === "*") {
        var t = n.indexOf("*/", d + 2);
        if (t === -1) break;
        d = t + 1, u = d + 1, e = !1;
      } else L === "(" ? e = !0 : L === ")" ? e = !1 : L === ";" ? e || S() : L === `
` && S();
    }
    return a.trim(E);
  }
  return Y = i, Y;
}
var Z, se;
function Re() {
  if (se) return Z;
  se = 1;
  var a = pe(), i = Ie();
  me();
  function n(e) {
    return e == null;
  }
  function f(e) {
    var u = {};
    for (var d in e)
      u[d] = e[d];
    return u;
  }
  function m(e) {
    e = f(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, this.options = e;
  }
  return m.prototype.process = function(e) {
    if (e = e || "", e = e.toString(), !e) return "";
    var u = this, d = u.options, E = d.whiteList, S = d.onAttr, L = d.onIgnoreAttr, t = d.safeAttrValue, s = i(e, function(r, w, y, c, _) {
      var g = E[y], p = !1;
      if (g === !0 ? p = g : typeof g == "function" ? p = g(c) : g instanceof RegExp && (p = g.test(c)), p !== !0 && (p = !1), c = t(y, c), !!c) {
        var k = {
          position: w,
          sourcePosition: r,
          source: _,
          isWhite: p
        };
        if (p) {
          var h = S(y, c, k);
          return n(h) ? y + ":" + c : h;
        } else {
          var h = L(y, c, k);
          if (!n(h))
            return h;
        }
      }
    });
    return s;
  }, Z = m, Z;
}
var oe;
function K() {
  return oe || (oe = 1, function(a, i) {
    var n = pe(), f = Re();
    function m(u, d) {
      var E = new f(d);
      return E.process(u);
    }
    i = a.exports = m, i.FilterCSS = f;
    for (var e in n) i[e] = n[e];
    typeof window < "u" && (window.filterCSS = a.exports);
  }(G, G.exports)), G.exports;
}
var J, le;
function ee() {
  return le || (le = 1, J = {
    indexOf: function(a, i) {
      var n, f;
      if (Array.prototype.indexOf)
        return a.indexOf(i);
      for (n = 0, f = a.length; n < f; n++)
        if (a[n] === i)
          return n;
      return -1;
    },
    forEach: function(a, i, n) {
      var f, m;
      if (Array.prototype.forEach)
        return a.forEach(i, n);
      for (f = 0, m = a.length; f < m; f++)
        i.call(n, a[f], f, a);
    },
    trim: function(a) {
      return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(a) {
      var i = /\s|\n|\t/, n = i.exec(a);
      return n ? n.index : -1;
    }
  }), J;
}
var fe;
function ve() {
  if (fe) return T;
  fe = 1;
  var a = K().FilterCSS, i = K().getDefaultWhiteList, n = ee();
  function f() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var m = new a();
  function e(o, b, l) {
  }
  function u(o, b, l) {
  }
  function d(o, b, l) {
  }
  function E(o, b, l) {
  }
  function S(o) {
    return o.replace(t, "&lt;").replace(s, "&gt;");
  }
  function L(o, b, l, v) {
    if (l = U(l), b === "href" || b === "src") {
      if (l = n.trim(l), l === "#") return "#";
      if (!(l.substr(0, 7) === "http://" || l.substr(0, 8) === "https://" || l.substr(0, 7) === "mailto:" || l.substr(0, 4) === "tel:" || l.substr(0, 11) === "data:image/" || l.substr(0, 6) === "ftp://" || l.substr(0, 2) === "./" || l.substr(0, 3) === "../" || l[0] === "#" || l[0] === "/"))
        return "";
    } else if (b === "background") {
      if (g.lastIndex = 0, g.test(l))
        return "";
    } else if (b === "style") {
      if (p.lastIndex = 0, p.test(l) || (k.lastIndex = 0, k.test(l) && (g.lastIndex = 0, g.test(l))))
        return "";
      v !== !1 && (v = v || m, l = v.process(l));
    }
    return l = R(l), l;
  }
  var t = /</g, s = />/g, r = /"/g, w = /&quot;/g, y = /&#([a-zA-Z0-9]*);?/gim, c = /&colon;?/gim, _ = /&newline;?/gim, g = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, p = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, k = /u\s*r\s*l\s*\(.*/gi;
  function h(o) {
    return o.replace(r, "&quot;");
  }
  function A(o) {
    return o.replace(w, '"');
  }
  function x(o) {
    return o.replace(y, function(l, v) {
      return v[0] === "x" || v[0] === "X" ? String.fromCharCode(parseInt(v.substr(1), 16)) : String.fromCharCode(parseInt(v, 10));
    });
  }
  function C(o) {
    return o.replace(c, ":").replace(_, " ");
  }
  function D(o) {
    for (var b = "", l = 0, v = o.length; l < v; l++)
      b += o.charCodeAt(l) < 32 ? " " : o.charAt(l);
    return n.trim(b);
  }
  function U(o) {
    return o = A(o), o = x(o), o = C(o), o = D(o), o;
  }
  function R(o) {
    return o = h(o), o = S(o), o;
  }
  function O() {
    return "";
  }
  function M(o, b) {
    typeof b != "function" && (b = function() {
    });
    var l = !Array.isArray(o);
    function v(I) {
      return l ? !0 : n.indexOf(o, I) !== -1;
    }
    var P = [], q = !1;
    return {
      onIgnoreTag: function(I, $, N) {
        if (v(I))
          if (N.isClosing) {
            var H = "[/removed]", be = N.position + H.length;
            return P.push([
              q !== !1 ? q : N.position,
              be
            ]), q = !1, H;
          } else
            return q || (q = N.position), "[removed]";
        else
          return b(I, $, N);
      },
      remove: function(I) {
        var $ = "", N = 0;
        return n.forEach(P, function(H) {
          $ += I.slice(N, H[0]), N = H[1];
        }), $ += I.slice(N), $;
      }
    };
  }
  function W(o) {
    for (var b = "", l = 0; l < o.length; ) {
      var v = o.indexOf("<!--", l);
      if (v === -1) {
        b += o.slice(l);
        break;
      }
      b += o.slice(l, v);
      var P = o.indexOf("-->", v);
      if (P === -1)
        break;
      l = P + 3;
    }
    return b;
  }
  function V(o) {
    var b = o.split("");
    return b = b.filter(function(l) {
      var v = l.charCodeAt(0);
      return v === 127 ? !1 : v <= 31 ? v === 10 || v === 13 : !0;
    }), b.join("");
  }
  return T.whiteList = f(), T.getDefaultWhiteList = f, T.onTag = e, T.onIgnoreTag = u, T.onTagAttr = d, T.onIgnoreTagAttr = E, T.safeAttrValue = L, T.escapeHtml = S, T.escapeQuote = h, T.unescapeQuote = A, T.escapeHtmlEntities = x, T.escapeDangerHtml5Entities = C, T.clearNonPrintableCharacter = D, T.friendlyAttrValue = U, T.escapeAttrValue = R, T.onIgnoreTagStripAll = O, T.StripTagBody = M, T.stripCommentTag = W, T.stripBlankChar = V, T.attributeWrapSign = '"', T.cssFilter = m, T.getDefaultCSSWhiteList = i, T;
}
var z = {}, ue;
function he() {
  if (ue) return z;
  ue = 1;
  var a = ee();
  function i(t) {
    var s = a.spaceIndex(t), r;
    return s === -1 ? r = t.slice(1, -1) : r = t.slice(1, s + 1), r = a.trim(r).toLowerCase(), r.slice(0, 1) === "/" && (r = r.slice(1)), r.slice(-1) === "/" && (r = r.slice(0, -1)), r;
  }
  function n(t) {
    return t.slice(0, 2) === "</";
  }
  function f(t, s, r) {
    var w = "", y = 0, c = !1, _ = !1, g = 0, p = t.length, k = "", h = "";
    e: for (g = 0; g < p; g++) {
      var A = t.charAt(g);
      if (c === !1) {
        if (A === "<") {
          c = g;
          continue;
        }
      } else if (_ === !1) {
        if (A === "<") {
          w += r(t.slice(y, g)), c = g, y = g;
          continue;
        }
        if (A === ">" || g === p - 1) {
          w += r(t.slice(y, c)), h = t.slice(c, g + 1), k = i(h), w += s(
            c,
            w.length,
            k,
            h,
            n(h)
          ), y = g + 1, c = !1;
          continue;
        }
        if (A === '"' || A === "'")
          for (var x = 1, C = t.charAt(g - x); C.trim() === "" || C === "="; ) {
            if (C === "=") {
              _ = A;
              continue e;
            }
            C = t.charAt(g - ++x);
          }
      } else if (A === _) {
        _ = !1;
        continue;
      }
    }
    return y < p && (w += r(t.substr(y))), w;
  }
  var m = /[^a-zA-Z0-9\\_:.-]/gim;
  function e(t, s) {
    var r = 0, w = 0, y = [], c = !1, _ = t.length;
    function g(x, C) {
      if (x = a.trim(x), x = x.replace(m, "").toLowerCase(), !(x.length < 1)) {
        var D = s(x, C || "");
        D && y.push(D);
      }
    }
    for (var p = 0; p < _; p++) {
      var k = t.charAt(p), h, A;
      if (c === !1 && k === "=") {
        c = t.slice(r, p), r = p + 1, w = t.charAt(r) === '"' || t.charAt(r) === "'" ? r : d(t, p + 1);
        continue;
      }
      if (c !== !1 && p === w) {
        if (A = t.indexOf(k, p + 1), A === -1)
          break;
        h = a.trim(t.slice(w + 1, A)), g(c, h), c = !1, p = A, r = p + 1;
        continue;
      }
      if (/\s|\n|\t/.test(k))
        if (t = t.replace(/\s|\n|\t/g, " "), c === !1)
          if (A = u(t, p), A === -1) {
            h = a.trim(t.slice(r, p)), g(h), c = !1, r = p + 1;
            continue;
          } else {
            p = A - 1;
            continue;
          }
        else if (A = E(t, p - 1), A === -1) {
          h = a.trim(t.slice(r, p)), h = L(h), g(c, h), c = !1, r = p + 1;
          continue;
        } else
          continue;
    }
    return r < t.length && (c === !1 ? g(t.slice(r)) : g(c, L(a.trim(t.slice(r))))), a.trim(y.join(" "));
  }
  function u(t, s) {
    for (; s < t.length; s++) {
      var r = t[s];
      if (r !== " ")
        return r === "=" ? s : -1;
    }
  }
  function d(t, s) {
    for (; s < t.length; s++) {
      var r = t[s];
      if (r !== " ")
        return r === "'" || r === '"' ? s : -1;
    }
  }
  function E(t, s) {
    for (; s > 0; s--) {
      var r = t[s];
      if (r !== " ")
        return r === "=" ? s : -1;
    }
  }
  function S(t) {
    return t[0] === '"' && t[t.length - 1] === '"' || t[0] === "'" && t[t.length - 1] === "'";
  }
  function L(t) {
    return S(t) ? t.substr(1, t.length - 2) : t;
  }
  return z.parseTag = f, z.parseAttr = e, z;
}
var j, ce;
function Pe() {
  if (ce) return j;
  ce = 1;
  var a = K().FilterCSS, i = ve(), n = he(), f = n.parseTag, m = n.parseAttr, e = ee();
  function u(t) {
    return t == null;
  }
  function d(t) {
    var s = e.spaceIndex(t);
    if (s === -1)
      return {
        html: "",
        closing: t[t.length - 2] === "/"
      };
    t = e.trim(t.slice(s + 1, -1));
    var r = t[t.length - 1] === "/";
    return r && (t = e.trim(t.slice(0, -1))), {
      html: t,
      closing: r
    };
  }
  function E(t) {
    var s = {};
    for (var r in t)
      s[r] = t[r];
    return s;
  }
  function S(t) {
    var s = {};
    for (var r in t)
      Array.isArray(t[r]) ? s[r.toLowerCase()] = t[r].map(function(w) {
        return w.toLowerCase();
      }) : s[r.toLowerCase()] = t[r];
    return s;
  }
  function L(t) {
    t = E(t || {}), t.stripIgnoreTag && (t.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), t.onIgnoreTag = i.onIgnoreTagStripAll), t.whiteList || t.allowList ? t.whiteList = S(t.whiteList || t.allowList) : t.whiteList = i.whiteList, this.attributeWrapSign = t.singleQuotedAttributeValue === !0 ? "'" : i.attributeWrapSign, t.onTag = t.onTag || i.onTag, t.onTagAttr = t.onTagAttr || i.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || i.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || i.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || i.safeAttrValue, t.escapeHtml = t.escapeHtml || i.escapeHtml, this.options = t, t.css === !1 ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new a(t.css));
  }
  return L.prototype.process = function(t) {
    if (t = t || "", t = t.toString(), !t) return "";
    var s = this, r = s.options, w = r.whiteList, y = r.onTag, c = r.onIgnoreTag, _ = r.onTagAttr, g = r.onIgnoreTagAttr, p = r.safeAttrValue, k = r.escapeHtml, h = s.attributeWrapSign, A = s.cssFilter;
    r.stripBlankChar && (t = i.stripBlankChar(t)), r.allowCommentTag || (t = i.stripCommentTag(t));
    var x = !1;
    r.stripIgnoreTagBody && (x = i.StripTagBody(
      r.stripIgnoreTagBody,
      c
    ), c = x.onIgnoreTag);
    var C = f(
      t,
      function(D, U, R, O, M) {
        var W = {
          sourcePosition: D,
          position: U,
          isClosing: M,
          isWhite: Object.prototype.hasOwnProperty.call(w, R)
        }, V = y(R, O, W);
        if (!u(V)) return V;
        if (W.isWhite) {
          if (W.isClosing)
            return "</" + R + ">";
          var o = d(O), b = w[R], l = m(o.html, function(v, P) {
            var q = e.indexOf(b, v) !== -1, I = _(R, v, P, q);
            return u(I) ? q ? (P = p(R, v, P, A), P ? v + "=" + h + P + h : v) : (I = g(R, v, P, q), u(I) ? void 0 : I) : I;
          });
          return O = "<" + R, l && (O += " " + l), o.closing && (O += " /"), O += ">", O;
        } else
          return V = c(R, O, W), u(V) ? k(O) : V;
      },
      k
    );
    return x && (C = x.remove(C)), C;
  }, j = L, j;
}
var de;
function Oe() {
  return de || (de = 1, function(a, i) {
    var n = ve(), f = he(), m = Pe();
    function e(d, E) {
      var S = new m(E);
      return S.process(d);
    }
    i = a.exports = e, i.filterXSS = e, i.FilterXSS = m, function() {
      for (var d in n)
        i[d] = n[d];
      for (var E in f)
        i[E] = f[E];
    }(), typeof window < "u" && (window.filterXSS = a.exports);
    function u() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    u() && (self.filterXSS = a.exports);
  }(F, F.exports)), F.exports;
}
var qe = Oe();
const Ze = /* @__PURE__ */ _e(qe), Ne = 4, De = () => {
  const a = document.createElement("div"), i = document.createElement("div");
  a.className = B.base, i.className = B.items;
  for (let n = 0; n < Ne; n++)
    i.appendChild(xe({ tag: "i", className: B.item }).element);
  return a.appendChild(i), a;
}, Ve = 150, ge = /* @__PURE__ */ (() => {
  let a = null;
  function i() {
    const n = [];
    let f = !1;
    function m(e) {
      n.forEach((u) => u.updatePos());
    }
    return {
      addLoadingElement(e) {
        n.findIndex((d) => d === e) === -1 && n.push(e), f || (window.addEventListener("scroll", m, { capture: !0 }), f = !0);
      },
      removeLoadingElement(e) {
        const u = n.findIndex((d) => d === e);
        u !== -1 && n.splice(u, 1), n.length === 0 && (window.removeEventListener("scroll", m, { capture: !0 }), f = !1);
      }
    };
  }
  return () => a || (a = i());
})();
class Xe {
  _refElement;
  _onClick;
  _startDelay;
  _loadingElement = null;
  _timeoutHandler = -1;
  constructor(i) {
    this._refElement = i.refElement, this._onClick = i.onClick, this._startDelay = i.startDelay;
  }
  getLoadingElement() {
    return this._loadingElement || (this._loadingElement = De(), this._onClick && (this._loadingElement.onclick = this._onClick)), this._loadingElement;
  }
  updatePos() {
    const i = this._refElement.getBoundingClientRect(), n = this.getLoadingElement();
    n.style.top = `${i.y}px`, n.style.left = `${i.x}px`, n.style.height = `${i.height}px`, n.style.width = `${i.width}px`;
  }
  visibleAction() {
    this._refElement.after(this.getLoadingElement());
  }
  show() {
    this.updatePos(), ge().addLoadingElement(this), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.visibleAction(), this._startDelay);
  }
  remove() {
    this.getLoadingElement().remove(), ge().removeLoadingElement(this);
  }
  hide() {
    this.getLoadingElement().classList.remove("is-visible"), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.remove(), Ve);
  }
}
const Je = ({
  contextElement: a,
  onClick: i = () => {
  },
  startDelay: n = 0
}) => new Xe({
  refElement: a,
  startDelay: n,
  onClick: i
});
export {
  Je as a,
  Ye as c,
  qe as l,
  Qe as u,
  Ze as x
};
//# sourceMappingURL=utility-CkNg54cg.js.map
