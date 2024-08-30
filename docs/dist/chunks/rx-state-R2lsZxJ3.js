import { a as Et, b as xt, g as Tt, d as _t, f as At, s as kt } from "./floating-COQGiF1T.js";
import { z as zt } from "./_init-B0xIPnhF.js";
import { g as Ct } from "./_commonjsHelpers-DaMA6jEr.js";
function Jr(e, r, ...t) {
  const n = Ot(r, ...t);
  return e.appendChild(n), n;
}
function Ot(e, ...r) {
  const t = document.createElement(e);
  return r.forEach((n) => t.classList.add(n)), t;
}
function en(e, r, t) {
  let n = t;
  for (; n; ) {
    if (n.matches(e))
      return n;
    if (n.matches(r))
      break;
    n = n.parentElement;
  }
  return null;
}
function tn(e, r) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${e}`, r && t.classList.add(r), t;
}
const rn = (...e) => {
  const r = [];
  e.forEach(({ svg: n, name: i, masked: a = !1 }) => {
    const u = btoa(n), l = `.ir-icon--${i}`, o = `--ir-icon--${i}`;
    r.push(`
.ir-icon {
    ${o}: url("data:image/svg+xml;base64,${u}")
}`), a ? r.push(`
${l} {
    -webkit-mask-image: var(${o});
    mask-image: var(${o});
    background-image: none;
    background-color: none;
}`) : r.push(`
${l} {
    background: var(${o}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = r.join(`
`), document.head.appendChild(t);
}, nn = (e, r) => "", It = 3.4, Lt = 0.65;
class Pt {
  constructor() {
    this.isInit = !1, this.context = null, this.cacheMap = /* @__PURE__ */ new Map(), this.curFontSize = "", this.curFontFamily = "", this._offscreenCanvas = null;
  }
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
    const t = r.replace(/ /g, ""), n = r.length - t.length, i = t.replace(/\d/g, ""), a = t.length - i.length, u = parseInt(this.curFontSize, 10) * Lt;
    return Number.isNaN(u) && console.error(`ir-style text calculation occurred a NaN. fontSize: ${this.curFontSize}, fontFamily: ${this.curFontFamily}`), Math.ceil(this.getContext().measureText(i).width + n * It + a * u);
  }
  calculateWidth(r) {
    const t = this.getCacheKey(r);
    let n = this.cacheMap.get(t);
    return n === void 0 && (n = this._calculate(r), this.cacheMap.set(t, n)), n;
  }
}
let re = null;
function an(e, r) {
  return re || (re = new Pt()), re.setFontStyle(e, r), re;
}
const Ft = () => {
  const e = document.createElement("div");
  return e.className = zt, {
    tooltipElement: e,
    updateText(r) {
      e.textContent = r;
    }
  };
}, ne = /* @__PURE__ */ (() => {
  let e = null;
  return () => (e || (e = Ft()), e);
})(), Rt = 8;
let ge = null;
const $t = (e) => {
  var A;
  if (e.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: r,
    offset: t = Rt,
    placement: n = "bottom",
    refMode: i = "element"
  } = e;
  let a = e.label ?? "", u = e.refElement;
  (A = r.__IR_TOOLTIP_INSTANCE__) == null || A.destroy(), r.addEventListener("mousemove", w), r.addEventListener("mouseleave", b);
  const l = {
    show: o,
    hide: v,
    update: d,
    updateText: h,
    destroy: m,
    get text() {
      return a;
    },
    get refMode() {
      return i;
    },
    get placement() {
      return n;
    },
    get offset() {
      return t;
    },
    get refElement() {
      return r;
    }
  };
  return r.__IR_TOOLTIP_INSTANCE__ = l, l;
  function o() {
    return y(), l;
  }
  function v() {
    return b(), l;
  }
  function d() {
    return g(), l;
  }
  function h(x) {
    const { updateText: k } = ne();
    a = x, k(x);
  }
  function m() {
    b(), r.removeEventListener("mousemove", w), r.removeEventListener("mouseleave", b);
  }
  function g() {
    const { tooltipElement: x } = ne();
    xt(u, x, {
      // Tooltip 배치 위치
      placement: n,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        _t(t),
        // 상하 스크롤 화면 overflow 방지
        At(),
        // 좌우 스크롤 화면 overflow 방지
        kt({ padding: 5 })
      ]
    }).then(({ x: k, y: O }) => {
      x.style.left = `${k}px`, x.style.top = `${O}px`;
    });
  }
  function y() {
    if (a === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: x } = ne();
    g(), h(a), Tt("popover").appendChild(x);
  }
  function b() {
    ne().tooltipElement.remove(), ge = null;
  }
  function w(x) {
    x.__EXECUTED_TOOLTIP__ || x.target instanceof HTMLElement && (i === "element" && ge === l || (ge = l, x.__EXECUTED_TOOLTIP__ = !0, i === "pointer" && (u = Et(x.clientX, x.clientY)), y()));
  }
}, on = (e) => {
  const {
    selector: r,
    offset: t = 8
  } = e, n = Array.from(document.querySelectorAll(r)).filter((i) => i.dataset.title).map((i) => {
    const { title: a, placement: u = "bottom", ref: l = "element" } = i.dataset;
    return $t({
      refElement: i,
      label: a,
      offset: t,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: u,
      refMode: l
    });
  });
  return {
    destroy: () => {
      n.forEach((i) => i.destroy());
    },
    updateTextAll() {
      n.forEach((i) => {
        const a = i.refElement.dataset.title ?? "";
        i.text !== a && i.updateText(a);
      });
    },
    updateTextOne(i, a) {
      const u = n.find((l) => i === l.refElement);
      if (!u) {
        console.warn("Tooltip element not found");
        return;
      }
      a ? (i.dataset.title = a, u.updateText(a)) : u.updateText(i.dataset.title ?? "");
    }
  };
};
function sn(e, r, t) {
  return e < r ? r : e > t ? t : e;
}
function ln(e, r = 0, t = 10) {
  const n = Number.parseInt(e ?? "", t);
  return Number.isNaN(n) ? r : n;
}
var I = typeof window < "u" ? window : null, ze = I === null, K = ze ? void 0 : I.document, P = "addEventListener", F = "removeEventListener", me = "getBoundingClientRect", Y = "_a", R = "_b", M = "_c", ie = "horizontal", $ = function() {
  return !1;
}, Ut = ze ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(e) {
  var r = K.createElement("div");
  return r.style.cssText = "width:" + e + "calc(9px)", !!r.style.length;
}).shift() + "calc", He = function(e) {
  return typeof e == "string" || e instanceof String;
}, Ue = function(e) {
  if (He(e)) {
    var r = K.querySelector(e);
    if (!r)
      throw new Error("Selector " + e + " did not match a DOM element");
    return r;
  }
  return e;
}, _ = function(e, r, t) {
  var n = e[r];
  return n !== void 0 ? n : t;
}, ae = function(e, r, t, n) {
  if (r) {
    if (n === "end")
      return 0;
    if (n === "center")
      return e / 2;
  } else if (t) {
    if (n === "start")
      return 0;
    if (n === "center")
      return e / 2;
  }
  return e;
}, Dt = function(e, r) {
  var t = K.createElement("div");
  return t.className = "gutter gutter-" + r, t;
}, Mt = function(e, r, t) {
  var n = {};
  return He(r) ? n[e] = r : n[e] = Ut + "(" + r + "% - " + t + "px)", n;
}, Nt = function(e, r) {
  var t;
  return t = {}, t[e] = r + "px", t;
}, un = function(e, r) {
  if (r === void 0 && (r = {}), ze)
    return {};
  var t = e, n, i, a, u, l, o;
  Array.from && (t = Array.from(t));
  var v = Ue(t[0]), d = v.parentNode, h = getComputedStyle ? getComputedStyle(d) : null, m = h ? h.flexDirection : null, g = _(r, "sizes") || t.map(function() {
    return 100 / t.length;
  }), y = _(r, "minSize", 100), b = Array.isArray(y) ? y : t.map(function() {
    return y;
  }), w = _(r, "maxSize", 1 / 0), A = Array.isArray(w) ? w : t.map(function() {
    return w;
  }), x = _(r, "expandToMin", !1), k = _(r, "gutterSize", 10), O = _(r, "gutterAlign", "center"), B = _(r, "snapOffset", 30), ve = Array.isArray(B) ? B : t.map(function() {
    return B;
  }), X = _(r, "dragInterval", 1), z = _(r, "direction", ie), U = _(
    r,
    "cursor",
    z === ie ? "col-resize" : "row-resize"
  ), q = _(r, "gutter", Dt), N = _(
    r,
    "elementStyle",
    Mt
  ), ht = _(r, "gutterStyle", Nt);
  z === ie ? (n = "width", i = "clientX", a = "left", u = "right", l = "clientWidth") : z === "vertical" && (n = "height", i = "clientY", a = "top", u = "bottom", l = "clientHeight");
  function Q(c, s, f, p) {
    var T = N(n, s, f, p);
    Object.keys(T).forEach(function(E) {
      c.style[E] = T[E];
    });
  }
  function vt(c, s, f) {
    var p = ht(n, s, f);
    Object.keys(p).forEach(function(T) {
      c.style[T] = p[T];
    });
  }
  function J() {
    return o.map(function(c) {
      return c.size;
    });
  }
  function Le(c) {
    return "touches" in c ? c.touches[0][i] : c[i];
  }
  function Pe(c) {
    var s = o[this.a], f = o[this.b], p = s.size + f.size;
    s.size = c / this.size * p, f.size = p - c / this.size * p, Q(s.element, s.size, this[R], s.i), Q(f.element, f.size, this[M], f.i);
  }
  function gt(c) {
    var s, f = o[this.a], p = o[this.b];
    this.dragging && (s = Le(c) - this.start + (this[R] - this.dragOffset), X > 1 && (s = Math.round(s / X) * X), s <= f.minSize + f.snapOffset + this[R] ? s = f.minSize + this[R] : s >= this.size - (p.minSize + p.snapOffset + this[M]) && (s = this.size - (p.minSize + this[M])), s >= f.maxSize - f.snapOffset + this[R] ? s = f.maxSize + this[R] : s <= this.size - (p.maxSize - p.snapOffset + this[M]) && (s = this.size - (p.maxSize + this[M])), Pe.call(this, s), _(r, "onDrag", $)(J()));
  }
  function Fe() {
    var c = o[this.a].element, s = o[this.b].element, f = c[me](), p = s[me]();
    this.size = f[n] + p[n] + this[R] + this[M], this.start = f[a], this.end = f[u];
  }
  function mt(c) {
    if (!getComputedStyle)
      return null;
    var s = getComputedStyle(c);
    if (!s)
      return null;
    var f = c[l];
    return f === 0 ? null : (z === ie ? f -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) : f -= parseFloat(s.paddingTop) + parseFloat(s.paddingBottom), f);
  }
  function Re(c) {
    var s = mt(d);
    if (s === null || b.reduce(function(E, C) {
      return E + C;
    }, 0) > s)
      return c;
    var f = 0, p = [], T = c.map(function(E, C) {
      var G = s * E / 100, ee = ae(
        k,
        C === 0,
        C === c.length - 1,
        O
      ), te = b[C] + ee;
      return G < te ? (f += te - G, p.push(0), te) : (p.push(G - te), G);
    });
    return f === 0 ? c : T.map(function(E, C) {
      var G = E;
      if (f > 0 && p[C] - f > 0) {
        var ee = Math.min(
          f,
          p[C] - f
        );
        f -= ee, G = E - ee;
      }
      return G / s * 100;
    });
  }
  function bt() {
    var c = this, s = o[c.a].element, f = o[c.b].element;
    c.dragging && _(r, "onDragEnd", $)(J()), c.dragging = !1, I[F]("mouseup", c.stop), I[F]("touchend", c.stop), I[F]("touchcancel", c.stop), I[F]("mousemove", c.move), I[F]("touchmove", c.move), c.stop = null, c.move = null, s[F]("selectstart", $), s[F]("dragstart", $), f[F]("selectstart", $), f[F]("dragstart", $), s.style.userSelect = "", s.style.webkitUserSelect = "", s.style.MozUserSelect = "", s.style.pointerEvents = "", f.style.userSelect = "", f.style.webkitUserSelect = "", f.style.MozUserSelect = "", f.style.pointerEvents = "", c.gutter.style.cursor = "", c.parent.style.cursor = "", K.body.style.cursor = "";
  }
  function yt(c) {
    if (!("button" in c && c.button !== 0)) {
      var s = this, f = o[s.a].element, p = o[s.b].element;
      s.dragging || _(r, "onDragStart", $)(J()), c.preventDefault(), s.dragging = !0, s.move = gt.bind(s), s.stop = bt.bind(s), I[P]("mouseup", s.stop), I[P]("touchend", s.stop), I[P]("touchcancel", s.stop), I[P]("mousemove", s.move), I[P]("touchmove", s.move), f[P]("selectstart", $), f[P]("dragstart", $), p[P]("selectstart", $), p[P]("dragstart", $), f.style.userSelect = "none", f.style.webkitUserSelect = "none", f.style.MozUserSelect = "none", f.style.pointerEvents = "none", p.style.userSelect = "none", p.style.webkitUserSelect = "none", p.style.MozUserSelect = "none", p.style.pointerEvents = "none", s.gutter.style.cursor = U, s.parent.style.cursor = U, K.body.style.cursor = U, Fe.call(s), s.dragOffset = Le(c) - s.end;
    }
  }
  g = Re(g);
  var j = [];
  o = t.map(function(c, s) {
    var f = {
      element: Ue(c),
      size: g[s],
      minSize: b[s],
      maxSize: A[s],
      snapOffset: ve[s],
      i: s
    }, p;
    if (s > 0 && (p = {
      a: s - 1,
      b: s,
      dragging: !1,
      direction: z,
      parent: d
    }, p[R] = ae(
      k,
      s - 1 === 0,
      !1,
      O
    ), p[M] = ae(
      k,
      !1,
      s === t.length - 1,
      O
    ), m === "row-reverse" || m === "column-reverse")) {
      var T = p.a;
      p.a = p.b, p.b = T;
    }
    if (s > 0) {
      var E = q(s, z, f.element);
      vt(E, k, s), p[Y] = yt.bind(p), E[P](
        "mousedown",
        p[Y]
      ), E[P](
        "touchstart",
        p[Y]
      ), d.insertBefore(E, f.element), p.gutter = E;
    }
    return Q(
      f.element,
      f.size,
      ae(
        k,
        s === 0,
        s === t.length - 1,
        O
      ),
      s
    ), s > 0 && j.push(p), f;
  });
  function $e(c) {
    var s = c.i === j.length, f = s ? j[c.i - 1] : j[c.i];
    Fe.call(f);
    var p = s ? f.size - c.minSize - f[M] : c.minSize + f[R];
    Pe.call(f, p);
  }
  o.forEach(function(c) {
    var s = c.element[me]()[n];
    s < c.minSize && (x ? $e(c) : c.minSize = s);
  });
  function St(c) {
    var s = Re(c);
    s.forEach(function(f, p) {
      if (p > 0) {
        var T = j[p - 1], E = o[T.a], C = o[T.b];
        E.size = s[p - 1], C.size = f, Q(E.element, E.size, T[R], E.i), Q(C.element, C.size, T[M], C.i);
      }
    });
  }
  function wt(c, s) {
    j.forEach(function(f) {
      if (s !== !0 ? f.parent.removeChild(f.gutter) : (f.gutter[F](
        "mousedown",
        f[Y]
      ), f.gutter[F](
        "touchstart",
        f[Y]
      )), c !== !0) {
        var p = N(
          n,
          f.a.size,
          f[R]
        );
        Object.keys(p).forEach(function(T) {
          o[f.a].element.style[T] = "", o[f.b].element.style[T] = "";
        });
      }
    });
  }
  return {
    setSizes: St,
    getSizes: J,
    collapse: function(s) {
      $e(o[s]);
    },
    destroy: wt,
    parent: d,
    pairs: j
  };
};
function fn(e) {
  return new Promise((r, t) => {
    const n = new FileReader();
    n.onload = () => r(n.result), n.onerror = () => t(n.error), n.readAsText(e);
  });
}
var Se = { exports: {} }, S = {}, we = { exports: {} }, V = {};
function qe() {
  var e = {};
  return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e;
}
function Wt(e, r, t) {
}
function jt(e, r, t) {
}
var Gt = /javascript\s*\:/img;
function Vt(e, r) {
  return Gt.test(r) ? "" : r;
}
V.whiteList = qe();
V.getDefaultWhiteList = qe;
V.onAttr = Wt;
V.onIgnoreAttr = jt;
V.safeAttrValue = Vt;
var Bt = {
  indexOf: function(e, r) {
    var t, n;
    if (Array.prototype.indexOf)
      return e.indexOf(r);
    for (t = 0, n = e.length; t < n; t++)
      if (e[t] === r)
        return t;
    return -1;
  },
  forEach: function(e, r, t) {
    var n, i;
    if (Array.prototype.forEach)
      return e.forEach(r, t);
    for (n = 0, i = e.length; n < i; n++)
      r.call(t, e[n], n, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(e) {
    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
  }
}, Z = Bt;
function Xt(e, r) {
  e = Z.trimRight(e), e[e.length - 1] !== ";" && (e += ";");
  var t = e.length, n = !1, i = 0, a = 0, u = "";
  function l() {
    if (!n) {
      var d = Z.trim(e.slice(i, a)), h = d.indexOf(":");
      if (h !== -1) {
        var m = Z.trim(d.slice(0, h)), g = Z.trim(d.slice(h + 1));
        if (m) {
          var y = r(i, u.length, m, g, d);
          y && (u += y + "; ");
        }
      }
    }
    i = a + 1;
  }
  for (; a < t; a++) {
    var o = e[a];
    if (o === "/" && e[a + 1] === "*") {
      var v = e.indexOf("*/", a + 2);
      if (v === -1) break;
      a = v + 1, i = a + 1, n = !1;
    } else o === "(" ? n = !0 : o === ")" ? n = !1 : o === ";" ? n || l() : o === `
` && l();
  }
  return Z.trim(u);
}
var Ht = Xt, oe = V, qt = Ht;
function De(e) {
  return e == null;
}
function Qt(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Qe(e) {
  e = Qt(e || {}), e.whiteList = e.whiteList || oe.whiteList, e.onAttr = e.onAttr || oe.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || oe.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || oe.safeAttrValue, this.options = e;
}
Qe.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e) return "";
  var r = this, t = r.options, n = t.whiteList, i = t.onAttr, a = t.onIgnoreAttr, u = t.safeAttrValue, l = qt(e, function(o, v, d, h, m) {
    var g = n[d], y = !1;
    if (g === !0 ? y = g : typeof g == "function" ? y = g(h) : g instanceof RegExp && (y = g.test(h)), y !== !0 && (y = !1), h = u(d, h), !!h) {
      var b = {
        position: v,
        sourcePosition: o,
        source: m,
        isWhite: y
      };
      if (y) {
        var w = i(d, h, b);
        return De(w) ? d + ":" + h : w;
      } else {
        var w = a(d, h, b);
        if (!De(w))
          return w;
      }
    }
  });
  return l;
};
var Yt = Qe;
(function(e, r) {
  var t = V, n = Yt;
  function i(u, l) {
    var o = new n(l);
    return o.process(u);
  }
  r = e.exports = i, r.FilterCSS = n;
  for (var a in t) r[a] = t[a];
  typeof window < "u" && (window.filterCSS = e.exports);
})(we, we.exports);
var Ce = we.exports, Oe = {
  indexOf: function(e, r) {
    var t, n;
    if (Array.prototype.indexOf)
      return e.indexOf(r);
    for (t = 0, n = e.length; t < n; t++)
      if (e[t] === r)
        return t;
    return -1;
  },
  forEach: function(e, r, t) {
    var n, i;
    if (Array.prototype.forEach)
      return e.forEach(r, t);
    for (n = 0, i = e.length; n < i; n++)
      r.call(t, e[n], n, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(e) {
    var r = /\s|\n|\t/, t = r.exec(e);
    return t ? t.index : -1;
  }
}, Zt = Ce.FilterCSS, Kt = Ce.getDefaultWhiteList, pe = Oe;
function Ye() {
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
var Ze = new Zt();
function Jt(e, r, t) {
}
function er(e, r, t) {
}
function tr(e, r, t) {
}
function rr(e, r, t) {
}
function Ke(e) {
  return e.replace(ir, "&lt;").replace(ar, "&gt;");
}
function nr(e, r, t, n) {
  if (t = it(t), r === "href" || r === "src") {
    if (t = pe.trim(t), t === "#") return "#";
    if (!(t.substr(0, 7) === "http://" || t.substr(0, 8) === "https://" || t.substr(0, 7) === "mailto:" || t.substr(0, 4) === "tel:" || t.substr(0, 11) === "data:image/" || t.substr(0, 6) === "ftp://" || t.substr(0, 2) === "./" || t.substr(0, 3) === "../" || t[0] === "#" || t[0] === "/"))
      return "";
  } else if (r === "background") {
    if (se.lastIndex = 0, se.test(t))
      return "";
  } else if (r === "style") {
    if (Me.lastIndex = 0, Me.test(t) || (Ne.lastIndex = 0, Ne.test(t) && (se.lastIndex = 0, se.test(t))))
      return "";
    n !== !1 && (n = n || Ze, t = n.process(t));
  }
  return t = at(t), t;
}
var ir = /</g, ar = />/g, or = /"/g, sr = /&quot;/g, lr = /&#([a-zA-Z0-9]*);?/gim, ur = /&colon;?/gim, fr = /&newline;?/gim, se = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, Me = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, Ne = /u\s*r\s*l\s*\(.*/gi;
function Je(e) {
  return e.replace(or, "&quot;");
}
function et(e) {
  return e.replace(sr, '"');
}
function tt(e) {
  return e.replace(lr, function(t, n) {
    return n[0] === "x" || n[0] === "X" ? String.fromCharCode(parseInt(n.substr(1), 16)) : String.fromCharCode(parseInt(n, 10));
  });
}
function rt(e) {
  return e.replace(ur, ":").replace(fr, " ");
}
function nt(e) {
  for (var r = "", t = 0, n = e.length; t < n; t++)
    r += e.charCodeAt(t) < 32 ? " " : e.charAt(t);
  return pe.trim(r);
}
function it(e) {
  return e = et(e), e = tt(e), e = rt(e), e = nt(e), e;
}
function at(e) {
  return e = Je(e), e = Ke(e), e;
}
function cr() {
  return "";
}
function pr(e, r) {
  typeof r != "function" && (r = function() {
  });
  var t = !Array.isArray(e);
  function n(u) {
    return t ? !0 : pe.indexOf(e, u) !== -1;
  }
  var i = [], a = !1;
  return {
    onIgnoreTag: function(u, l, o) {
      if (n(u))
        if (o.isClosing) {
          var v = "[/removed]", d = o.position + v.length;
          return i.push([
            a !== !1 ? a : o.position,
            d
          ]), a = !1, v;
        } else
          return a || (a = o.position), "[removed]";
      else
        return r(u, l, o);
    },
    remove: function(u) {
      var l = "", o = 0;
      return pe.forEach(i, function(v) {
        l += u.slice(o, v[0]), o = v[1];
      }), l += u.slice(o), l;
    }
  };
}
function dr(e) {
  for (var r = "", t = 0; t < e.length; ) {
    var n = e.indexOf("<!--", t);
    if (n === -1) {
      r += e.slice(t);
      break;
    }
    r += e.slice(t, n);
    var i = e.indexOf("-->", n);
    if (i === -1)
      break;
    t = i + 3;
  }
  return r;
}
function hr(e) {
  var r = e.split("");
  return r = r.filter(function(t) {
    var n = t.charCodeAt(0);
    return n === 127 ? !1 : n <= 31 ? n === 10 || n === 13 : !0;
  }), r.join("");
}
S.whiteList = Ye();
S.getDefaultWhiteList = Ye;
S.onTag = Jt;
S.onIgnoreTag = er;
S.onTagAttr = tr;
S.onIgnoreTagAttr = rr;
S.safeAttrValue = nr;
S.escapeHtml = Ke;
S.escapeQuote = Je;
S.unescapeQuote = et;
S.escapeHtmlEntities = tt;
S.escapeDangerHtml5Entities = rt;
S.clearNonPrintableCharacter = nt;
S.friendlyAttrValue = it;
S.escapeAttrValue = at;
S.onIgnoreTagStripAll = cr;
S.StripTagBody = pr;
S.stripCommentTag = dr;
S.stripBlankChar = hr;
S.attributeWrapSign = '"';
S.cssFilter = Ze;
S.getDefaultCSSWhiteList = Kt;
var de = {}, W = Oe;
function vr(e) {
  var r = W.spaceIndex(e), t;
  return r === -1 ? t = e.slice(1, -1) : t = e.slice(1, r + 1), t = W.trim(t).toLowerCase(), t.slice(0, 1) === "/" && (t = t.slice(1)), t.slice(-1) === "/" && (t = t.slice(0, -1)), t;
}
function gr(e) {
  return e.slice(0, 2) === "</";
}
function mr(e, r, t) {
  var n = "", i = 0, a = !1, u = !1, l = 0, o = e.length, v = "", d = "";
  e: for (l = 0; l < o; l++) {
    var h = e.charAt(l);
    if (a === !1) {
      if (h === "<") {
        a = l;
        continue;
      }
    } else if (u === !1) {
      if (h === "<") {
        n += t(e.slice(i, l)), a = l, i = l;
        continue;
      }
      if (h === ">" || l === o - 1) {
        n += t(e.slice(i, a)), d = e.slice(a, l + 1), v = vr(d), n += r(
          a,
          n.length,
          v,
          d,
          gr(d)
        ), i = l + 1, a = !1;
        continue;
      }
      if (h === '"' || h === "'")
        for (var m = 1, g = e.charAt(l - m); g.trim() === "" || g === "="; ) {
          if (g === "=") {
            u = h;
            continue e;
          }
          g = e.charAt(l - ++m);
        }
    } else if (h === u) {
      u = !1;
      continue;
    }
  }
  return i < o && (n += t(e.substr(i))), n;
}
var br = /[^a-zA-Z0-9\\_:.-]/gim;
function yr(e, r) {
  var t = 0, n = 0, i = [], a = !1, u = e.length;
  function l(m, g) {
    if (m = W.trim(m), m = m.replace(br, "").toLowerCase(), !(m.length < 1)) {
      var y = r(m, g || "");
      y && i.push(y);
    }
  }
  for (var o = 0; o < u; o++) {
    var v = e.charAt(o), d, h;
    if (a === !1 && v === "=") {
      a = e.slice(t, o), t = o + 1, n = e.charAt(t) === '"' || e.charAt(t) === "'" ? t : wr(e, o + 1);
      continue;
    }
    if (a !== !1 && o === n) {
      if (h = e.indexOf(v, o + 1), h === -1)
        break;
      d = W.trim(e.slice(n + 1, h)), l(a, d), a = !1, o = h, t = o + 1;
      continue;
    }
    if (/\s|\n|\t/.test(v))
      if (e = e.replace(/\s|\n|\t/g, " "), a === !1)
        if (h = Sr(e, o), h === -1) {
          d = W.trim(e.slice(t, o)), l(d), a = !1, t = o + 1;
          continue;
        } else {
          o = h - 1;
          continue;
        }
      else if (h = Er(e, o - 1), h === -1) {
        d = W.trim(e.slice(t, o)), d = We(d), l(a, d), a = !1, t = o + 1;
        continue;
      } else
        continue;
  }
  return t < e.length && (a === !1 ? l(e.slice(t)) : l(a, We(W.trim(e.slice(t))))), W.trim(i.join(" "));
}
function Sr(e, r) {
  for (; r < e.length; r++) {
    var t = e[r];
    if (t !== " ")
      return t === "=" ? r : -1;
  }
}
function wr(e, r) {
  for (; r < e.length; r++) {
    var t = e[r];
    if (t !== " ")
      return t === "'" || t === '"' ? r : -1;
  }
}
function Er(e, r) {
  for (; r > 0; r--) {
    var t = e[r];
    if (t !== " ")
      return t === "=" ? r : -1;
  }
}
function xr(e) {
  return e[0] === '"' && e[e.length - 1] === '"' || e[0] === "'" && e[e.length - 1] === "'";
}
function We(e) {
  return xr(e) ? e.substr(1, e.length - 2) : e;
}
de.parseTag = mr;
de.parseAttr = yr;
var Tr = Ce.FilterCSS, L = S, ot = de, _r = ot.parseTag, Ar = ot.parseAttr, fe = Oe;
function le(e) {
  return e == null;
}
function kr(e) {
  var r = fe.spaceIndex(e);
  if (r === -1)
    return {
      html: "",
      closing: e[e.length - 2] === "/"
    };
  e = fe.trim(e.slice(r + 1, -1));
  var t = e[e.length - 1] === "/";
  return t && (e = fe.trim(e.slice(0, -1))), {
    html: e,
    closing: t
  };
}
function zr(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Cr(e) {
  var r = {};
  for (var t in e)
    Array.isArray(e[t]) ? r[t.toLowerCase()] = e[t].map(function(n) {
      return n.toLowerCase();
    }) : r[t.toLowerCase()] = e[t];
  return r;
}
function st(e) {
  e = zr(e || {}), e.stripIgnoreTag && (e.onIgnoreTag && console.error(
    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
  ), e.onIgnoreTag = L.onIgnoreTagStripAll), e.whiteList || e.allowList ? e.whiteList = Cr(e.whiteList || e.allowList) : e.whiteList = L.whiteList, this.attributeWrapSign = e.singleQuotedAttributeValue === !0 ? "'" : L.attributeWrapSign, e.onTag = e.onTag || L.onTag, e.onTagAttr = e.onTagAttr || L.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || L.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || L.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || L.safeAttrValue, e.escapeHtml = e.escapeHtml || L.escapeHtml, this.options = e, e.css === !1 ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new Tr(e.css));
}
st.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e) return "";
  var r = this, t = r.options, n = t.whiteList, i = t.onTag, a = t.onIgnoreTag, u = t.onTagAttr, l = t.onIgnoreTagAttr, o = t.safeAttrValue, v = t.escapeHtml, d = r.attributeWrapSign, h = r.cssFilter;
  t.stripBlankChar && (e = L.stripBlankChar(e)), t.allowCommentTag || (e = L.stripCommentTag(e));
  var m = !1;
  t.stripIgnoreTagBody && (m = L.StripTagBody(
    t.stripIgnoreTagBody,
    a
  ), a = m.onIgnoreTag);
  var g = _r(
    e,
    function(y, b, w, A, x) {
      var k = {
        sourcePosition: y,
        position: b,
        isClosing: x,
        isWhite: Object.prototype.hasOwnProperty.call(n, w)
      }, O = i(w, A, k);
      if (!le(O)) return O;
      if (k.isWhite) {
        if (k.isClosing)
          return "</" + w + ">";
        var B = kr(A), ve = n[w], X = Ar(B.html, function(z, U) {
          var q = fe.indexOf(ve, z) !== -1, N = u(w, z, U, q);
          return le(N) ? q ? (U = o(w, z, U, h), U ? z + "=" + d + U + d : z) : (N = l(w, z, U, q), le(N) ? void 0 : N) : N;
        });
        return A = "<" + w, X && (A += " " + X), B.closing && (A += " /"), A += ">", A;
      } else
        return O = a(w, A, k), le(O) ? v(A) : O;
    },
    v
  );
  return m && (g = m.remove(g)), g;
};
var Or = st;
(function(e, r) {
  var t = S, n = de, i = Or;
  function a(l, o) {
    var v = new i(o);
    return v.process(l);
  }
  r = e.exports = a, r.filterXSS = a, r.FilterXSS = i, function() {
    for (var l in t)
      r[l] = t[l];
    for (var o in n)
      r[o] = n[o];
  }(), typeof window < "u" && (window.filterXSS = e.exports);
  function u() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  u() && (self.filterXSS = e.exports);
})(Se, Se.exports);
var Ir = Se.exports;
const cn = /* @__PURE__ */ Ct(Ir);
function pn({ eventElements: e, initFunc: r, clickOutsideFunc: t }) {
  const n = (a) => {
    let u = a.target;
    for (; u !== null; ) {
      if (e.indexOf(u) !== -1)
        return;
      u = u.parentElement;
    }
    t && t(), i.destroy();
  }, i = {
    create: () => {
      r && r(), window.addEventListener("scroll", n, !0), window.addEventListener("mousedown", n);
    },
    destroy: () => {
      window.removeEventListener("scroll", n, !0), window.removeEventListener("mousedown", n);
    }
  };
  return i;
}
const dn = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
}, Lr = /* @__PURE__ */ (() => {
  let e = null;
  return () => e || (e = document.createElement("textarea"), e.style.position = "fixed", e.style.opacity = "0", e.style.top = "0", e.style.left = "0", e.style.zIndex = "-1", e.style.outline = "0 none", e.style.overflow = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("autocomplete", "off"), e.setAttribute("wrap", "hard"), e);
})(), hn = {
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
    const r = Lr();
    document.body.appendChild(r), r.focus(), r.value = e || "\0", r.select(), document.execCommand("copy"), r.remove();
  }
};
function* vn(e, r) {
  for (let t = 0; t < e; ++t)
    for (let n = 0; n < r; ++n)
      yield { y: t, x: n };
}
function gn(e, r) {
  for (let t = 0; t < e; ++t)
    r(t);
}
function mn(e, r, t) {
  for (let n = 0; n < e; ++n)
    r(n) && t(n);
}
var Ee = function(e, r) {
  return Ee = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, Ee(e, r);
};
function H(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ee(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function xe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Te(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, a = [], u;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (l) {
    u = { error: l };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function _e(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, i = r.length, a; n < i; n++)
    (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return e.concat(a || Array.prototype.slice.call(r));
}
function D(e) {
  return typeof e == "function";
}
function lt(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var be = lt(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Ae(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var he = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, i, a;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var l = xe(u), o = l.next(); !o.done; o = l.next()) {
              var v = o.value;
              v.remove(this);
            }
          } catch (b) {
            r = { error: b };
          } finally {
            try {
              o && !o.done && (t = l.return) && t.call(l);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          u.remove(this);
      var d = this.initialTeardown;
      if (D(d))
        try {
          d();
        } catch (b) {
          a = b instanceof be ? b.errors : [b];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var m = xe(h), g = m.next(); !g.done; g = m.next()) {
            var y = g.value;
            try {
              je(y);
            } catch (b) {
              a = a ?? [], b instanceof be ? a = _e(_e([], Te(a)), Te(b.errors)) : a.push(b);
            }
          }
        } catch (b) {
          n = { error: b };
        } finally {
          try {
            g && !g.done && (i = m.return) && i.call(m);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new be(a);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        je(r);
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
    t === r ? this._parentage = null : Array.isArray(t) && Ae(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && Ae(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), ut = he.EMPTY;
function ft(e) {
  return e instanceof he || e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe);
}
function je(e) {
  D(e) ? e() : e.unsubscribe();
}
var ct = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, pt = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, _e([e, r], Te(t)));
  },
  clearTimeout: function(e) {
    var r = pt.delegate;
    return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function Pr(e) {
  pt.setTimeout(function() {
    throw e;
  });
}
function Ge() {
}
function ce(e) {
  e();
}
var Ie = function(e) {
  H(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, ft(t) && t.add(n)) : n.destination = Ur, n;
  }
  return r.create = function(t, n, i) {
    return new ke(t, n, i);
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
}(he), Fr = Function.prototype.bind;
function ye(e, r) {
  return Fr.call(e, r);
}
var Rr = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        ue(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        ue(n);
      }
    else
      ue(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        ue(t);
      }
  }, e;
}(), ke = function(e) {
  H(r, e);
  function r(t, n, i) {
    var a = e.call(this) || this, u;
    if (D(t) || !t)
      u = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      a && ct.useDeprecatedNextContext ? (l = Object.create(t), l.unsubscribe = function() {
        return a.unsubscribe();
      }, u = {
        next: t.next && ye(t.next, l),
        error: t.error && ye(t.error, l),
        complete: t.complete && ye(t.complete, l)
      }) : u = t;
    }
    return a.destination = new Rr(u), a;
  }
  return r;
}(Ie);
function ue(e) {
  Pr(e);
}
function $r(e) {
  throw e;
}
var Ur = {
  closed: !0,
  next: Ge,
  error: $r,
  complete: Ge
}, Dr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Mr(e) {
  return e;
}
function Nr(e) {
  return e.length === 0 ? Mr : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var Ve = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, a = jr(r) ? r : new ke(r, t, n);
    return ce(function() {
      var u = i, l = u.operator, o = u.source;
      a.add(l ? l.call(a, o) : o ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = Be(t), new t(function(i, a) {
      var u = new ke({
        next: function(l) {
          try {
            r(l);
          } catch (o) {
            a(o), u.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      n.subscribe(u);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[Dr] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return Nr(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = Be(r), new r(function(n, i) {
      var a;
      t.subscribe(function(u) {
        return a = u;
      }, function(u) {
        return i(u);
      }, function() {
        return n(a);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function Be(e) {
  var r;
  return (r = e ?? ct.Promise) !== null && r !== void 0 ? r : Promise;
}
function Wr(e) {
  return e && D(e.next) && D(e.error) && D(e.complete);
}
function jr(e) {
  return e && e instanceof Ie || Wr(e) && ft(e);
}
function Gr(e) {
  return D(e == null ? void 0 : e.lift);
}
function Vr(e) {
  return function(r) {
    if (Gr(r))
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
function Br(e, r, t, n, i) {
  return new Xr(e, r, t, n, i);
}
var Xr = function(e) {
  H(r, e);
  function r(t, n, i, a, u, l) {
    var o = e.call(this, t) || this;
    return o.onFinalize = u, o.shouldUnsubscribe = l, o._next = n ? function(v) {
      try {
        n(v);
      } catch (d) {
        t.error(d);
      }
    } : e.prototype._next, o._error = a ? function(v) {
      try {
        a(v);
      } catch (d) {
        t.error(d);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, o._complete = i ? function() {
      try {
        i();
      } catch (v) {
        t.error(v);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, o;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
}(Ie), Hr = lt(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), dt = function(e) {
  H(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new Xe(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Hr();
  }, r.prototype.next = function(t) {
    var n = this;
    ce(function() {
      var i, a;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var u = xe(n.currentObservers), l = u.next(); !l.done; l = u.next()) {
            var o = l.value;
            o.next(t);
          }
        } catch (v) {
          i = { error: v };
        } finally {
          try {
            l && !l.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var n = this;
    ce(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    ce(function() {
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
    var n = this, i = this, a = i.hasError, u = i.isStopped, l = i.observers;
    return a || u ? ut : (this.currentObservers = null, l.push(t), new he(function() {
      n.currentObservers = null, Ae(l, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, a = n.thrownError, u = n.isStopped;
    i ? t.error(a) : u && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new Ve();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new Xe(t, n);
  }, r;
}(Ve), Xe = function(e) {
  H(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return r.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, r.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : ut;
  }, r;
}(dt), qr = function(e) {
  H(r, e);
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
    var t = this, n = t.hasError, i = t.thrownError, a = t._value;
    if (n)
      throw i;
    return this._throwIfClosed(), a;
  }, r.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, r;
}(dt);
function Qr() {
  return Vr(function(e, r) {
    var t, n = !1;
    e.subscribe(Br(r, function(i) {
      var a = t;
      t = i, n && r.next([a, i]), n = !0;
    }));
  });
}
class bn {
  constructor(r, t) {
    this._subscriptionList = [], this._state = new qr(r), this._pipe = t ? t(this._state) : this._state, this._value = r, this._pipe.pipe(Qr()).subscribe(([n, i]) => {
      this._value = i, this._subscriptionList.forEach((a) => {
        try {
          a(n, i);
        } catch (u) {
          console.error("ReactiveState Subscription Error", this.constructor.name, u);
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
  hn as C,
  bn as R,
  un as S,
  pn as a,
  tn as b,
  dn as c,
  $t as d,
  Jr as e,
  en as f,
  Ot as g,
  an as h,
  gn as i,
  rn as j,
  nn as k,
  Ir as l,
  ne as m,
  on as n,
  fn as o,
  sn as p,
  ln as q,
  vn as r,
  mn as s,
  Vr as t,
  Br as u,
  cn as x
};
//# sourceMappingURL=rx-state-R2lsZxJ3.js.map
