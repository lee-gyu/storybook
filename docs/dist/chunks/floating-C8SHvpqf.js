import { c as Gt } from "./hook-flow-h5XBPdBp.js";
import { U as xt } from "./css-COHHTvb1.js";
const Xt = {
  // DatePicker
  "datePicker.minDate": /* @__PURE__ */ new Date("1970-01-01"),
  "datePicker.maxDate": /* @__PURE__ */ new Date("9999-12-31"),
  // Grid
  "grid.defaultFontSize": xt.fontSizeBase,
  "grid.defaultFontFamily": xt.fontFamilyBase,
  "grid.paddingTop": 4,
  "grid.paddingBottom": 4,
  "grid.paddingLeft": 8,
  "grid.paddingRight": 8,
  "grid.defaultRowMinSize": 20,
  "grid.defaultRowMaxSize": 100,
  "grid.defaultRowHeight": 24,
  "grid.defaultColumnMinSize": 80,
  "grid.defaultColumnMaxSize": 500,
  "grid.defaultColumnWidth": 100,
  "grid.defaultDropdownWidth": 240,
  "grid.forceRenderLeftCol": 0,
  "grid.forceRenderRightCol": 0,
  "grid.emptyDefaultHeight": 16,
  // TreeView
  "tree-view.nodeRowHeight": 24,
  "tree-view.defaultHorizontalPadding": 8,
  "tree-view.checkboxColumnWidth": 28,
  "tree-view.iconSize": 22,
  "tree-view.levelIndentSize": 22,
  // Layer
  "layerElementId.floating": "#ir_floating",
  "layerElementId.drawer": "#ir_drawer",
  "layerElementId.dialog": "#ir_dialog",
  "layerElementId.popover": "#ir_popover",
  "layerElementId.message": "#ir_message",
  "layerElementId.toast": "#ir_toast",
  // VirtualDOM
  "virtual-dom.defaultHeight": 28
};
class Yt {
  constructor(e = { ...Xt }) {
    this.config = e;
  }
  getStoreValue(e) {
    return this.config[e];
  }
  setStoreValue(e, n) {
    this.config[e] = n;
  }
  setTheme(e) {
    Object.assign(this.config, e);
  }
}
const ht = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new Yt()), t);
})();
function on(t) {
  return ht().getStoreValue(t);
}
function rn(...t) {
  const e = ht();
  return t.map((n) => e.getStoreValue(n));
}
function Zt(t) {
  const n = ht().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
function sn(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function Jt(t) {
  return (e) => e.matches(t);
}
function ln(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? Jt(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function cn(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function an({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: l }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([s, c]) => r.setAttribute(s, c)), l && (r.textContent = l), o && o.forEach((s) => r.append(s.element)), {
    element: r,
    children: o ?? [],
    append(...s) {
      return s && this.element.append(...s), this;
    }
  };
}
function fn(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const Qt = ["top", "right", "bottom", "left"], bt = ["start", "end"], Et = /* @__PURE__ */ Qt.reduce((t, e) => t.concat(e, e + "-" + bt[0], e + "-" + bt[1]), []), ot = Math.min, $ = Math.max, it = Math.round, et = Math.floor, R = (t) => ({
  x: t,
  y: t
}), te = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ee = {
  start: "end",
  end: "start"
};
function St(t, e, n) {
  return $(t, ot(e, n));
}
function Y(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function D(t) {
  return t.split("-")[0];
}
function _(t) {
  return t.split("-")[1];
}
function _t(t) {
  return t === "x" ? "y" : "x";
}
function Dt(t) {
  return t === "y" ? "height" : "width";
}
const ne = /* @__PURE__ */ new Set(["top", "bottom"]);
function B(t) {
  return ne.has(D(t)) ? "y" : "x";
}
function Ft(t) {
  return _t(B(t));
}
function kt(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), i = Ft(t), l = Dt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = st(r)), [r, st(r)];
}
function oe(t) {
  const e = st(t);
  return [rt(t), e, rt(e)];
}
function rt(t) {
  return t.replace(/start|end/g, (e) => ee[e]);
}
const At = ["left", "right"], Ct = ["right", "left"], ie = ["top", "bottom"], re = ["bottom", "top"];
function se(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ct : At : e ? At : Ct;
    case "left":
    case "right":
      return e ? ie : re;
    default:
      return [];
  }
}
function le(t, e, n, o) {
  const i = _(t);
  let l = se(D(t), n === "start", o);
  return i && (l = l.map((r) => r + "-" + i), e && (l = l.concat(l.map(rt)))), l;
}
function st(t) {
  return t.replace(/left|right|bottom|top/g, (e) => te[e]);
}
function ce(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ae(t) {
  return typeof t != "number" ? ce(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function lt(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Tt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const l = B(e), r = Ft(e), s = Dt(r), c = D(e), a = l === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, m = o[s] / 2 - i[s] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: f,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (_(e)) {
    case "start":
      d[r] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      d[r] += m * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const fe = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: l = [],
    platform: r
  } = n, s = l.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: u
  } = Tt(a, o, c), m = o, d = {}, g = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: y,
      fn: h
    } = s[p], {
      x: w,
      y: v,
      data: E,
      reset: x
    } = await h({
      x: f,
      y: u,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = w ?? f, u = v ?? u, d = {
      ...d,
      [y]: {
        ...d[y],
        ...E
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (a = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: f,
      y: u
    } = Tt(a, m, c)), p = -1);
  }
  return {
    x: f,
    y: u,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function gt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: l,
    rects: r,
    elements: s,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = Y(e, t), g = ae(d), y = s[m ? u === "floating" ? "reference" : "floating" : u], h = lt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(y))) == null || n ? y : y.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: c
  })), w = u === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), E = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = lt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: v,
    strategy: c
  }) : w);
  return {
    top: (h.top - x.top + g.top) / E.y,
    bottom: (x.bottom - h.bottom + g.bottom) / E.y,
    left: (h.left - x.left + g.left) / E.x,
    right: (x.right - h.right + g.right) / E.x
  };
}
function ue(t, e, n) {
  return (t ? [...n.filter((i) => _(i) === t), ...n.filter((i) => _(i) !== t)] : n.filter((i) => D(i) === i)).filter((i) => t ? _(i) === t || (e ? rt(i) !== i : !1) : !0);
}
const de = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: l,
        middlewareData: r,
        placement: s,
        platform: c,
        elements: a
      } = e, {
        crossAxis: f = !1,
        alignment: u,
        allowedPlacements: m = Et,
        autoAlignment: d = !0,
        ...g
      } = Y(t, e), p = u !== void 0 || m === Et ? ue(u || null, d, m) : m, y = await gt(e, g), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = p[h];
      if (w == null)
        return {};
      const v = kt(w, l, await (c.isRTL == null ? void 0 : c.isRTL(a.floating)));
      if (s !== w)
        return {
          reset: {
            placement: p[0]
          }
        };
      const E = [y[D(w)], y[v[0]], y[v[1]]], x = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: E
      }], F = p[h + 1];
      if (F)
        return {
          data: {
            index: h + 1,
            overflows: x
          },
          reset: {
            placement: F
          }
        };
      const P = x.map((b) => {
        const k = _(b.placement);
        return [b.placement, k && f ? (
          // Check along the mainAxis and main crossAxis side.
          b.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          b.overflows[0]
        ), b.overflows];
      }).sort((b, k) => b[1] - k[1]), I = ((i = P.filter((b) => b[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        _(b[0]) ? 2 : 3
      ).every((k) => k <= 0))[0]) == null ? void 0 : i[0]) || P[0][0];
      return I !== s ? {
        data: {
          index: h + 1,
          overflows: x
        },
        reset: {
          placement: I
        }
      } : {};
    }
  };
}, me = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: l,
        rects: r,
        initialPlacement: s,
        platform: c,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...y
      } = Y(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const h = D(i), w = B(s), v = D(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), x = m || (v || !p ? [st(s)] : oe(s)), F = g !== "none";
      !m && F && x.push(...le(s, p, g, E));
      const P = [s, ...x], J = await gt(e, y), I = [];
      let b = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (f && I.push(J[h]), u) {
        const N = kt(i, r, E);
        I.push(J[N[0]], J[N[1]]);
      }
      if (b = [...b, {
        placement: i,
        overflows: I
      }], !I.every((N) => N <= 0)) {
        var k, Q;
        const N = (((k = l.flip) == null ? void 0 : k.index) || 0) + 1, ut = P[N];
        if (ut && (!(u === "alignment" ? w !== B(ut) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        b.every((A) => A.overflows[0] > 0 && B(A.placement) === w)))
          return {
            data: {
              index: N,
              overflows: b
            },
            reset: {
              placement: ut
            }
          };
        let G = (Q = b.filter((z) => z.overflows[0] <= 0).sort((z, A) => z.overflows[1] - A.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!G)
          switch (d) {
            case "bestFit": {
              var tt;
              const z = (tt = b.filter((A) => {
                if (F) {
                  const V = B(A.placement);
                  return V === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((V) => V > 0).reduce((V, Kt) => V + Kt, 0)]).sort((A, V) => A[1] - V[1])[0]) == null ? void 0 : tt[0];
              z && (G = z);
              break;
            }
            case "initialPlacement":
              G = s;
              break;
          }
        if (i !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
}, he = /* @__PURE__ */ new Set(["left", "top"]);
async function ge(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = D(n), s = _(n), c = B(n) === "y", a = he.has(r) ? -1 : 1, f = l && c ? -1 : 1, u = Y(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: g
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return s && typeof g == "number" && (d = s === "end" ? g * -1 : g), c ? {
    x: d * f,
    y: m * a
  } : {
    x: m * a,
    y: d * f
  };
}
const pe = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: l,
        placement: r,
        middlewareData: s
      } = e, c = await ge(e, t);
      return r === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: i + c.x,
        y: l + c.y,
        data: {
          ...c,
          placement: r
        }
      };
    }
  };
}, we = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: l = !0,
        crossAxis: r = !1,
        limiter: s = {
          fn: (y) => {
            let {
              x: h,
              y: w
            } = y;
            return {
              x: h,
              y: w
            };
          }
        },
        ...c
      } = Y(t, e), a = {
        x: n,
        y: o
      }, f = await gt(e, c), u = B(D(i)), m = _t(u);
      let d = a[m], g = a[u];
      if (l) {
        const y = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = d + f[y], v = d - f[h];
        d = St(w, d, v);
      }
      if (r) {
        const y = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", w = g + f[y], v = g - f[h];
        g = St(w, g, v);
      }
      const p = s.fn({
        ...e,
        [m]: d,
        [u]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o,
          enabled: {
            [m]: l,
            [u]: r
          }
        }
      };
    }
  };
};
function ct() {
  return typeof window < "u";
}
function K(t) {
  return Vt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function S(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function L(t) {
  var e;
  return (e = (Vt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Vt(t) {
  return ct() ? t instanceof Node || t instanceof S(t).Node : !1;
}
function C(t) {
  return ct() ? t instanceof Element || t instanceof S(t).Element : !1;
}
function O(t) {
  return ct() ? t instanceof HTMLElement || t instanceof S(t).HTMLElement : !1;
}
function Rt(t) {
  return !ct() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof S(t).ShadowRoot;
}
const ye = /* @__PURE__ */ new Set(["inline", "contents"]);
function Z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = T(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !ye.has(i);
}
const ve = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xe(t) {
  return ve.has(K(t));
}
const be = [":popover-open", ":modal"];
function at(t) {
  return be.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Ee = ["transform", "translate", "scale", "rotate", "perspective"], Se = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ae = ["paint", "layout", "strict", "content"];
function pt(t) {
  const e = wt(), n = C(t) ? T(t) : t;
  return Ee.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Se.some((o) => (n.willChange || "").includes(o)) || Ae.some((o) => (n.contain || "").includes(o));
}
function Ce(t) {
  let e = H(t);
  for (; O(e) && !q(e); ) {
    if (pt(e))
      return e;
    if (at(e))
      return null;
    e = H(e);
  }
  return null;
}
function wt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Te = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function q(t) {
  return Te.has(K(t));
}
function T(t) {
  return S(t).getComputedStyle(t);
}
function ft(t) {
  return C(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function H(t) {
  if (K(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Rt(t) && t.host || // Fallback.
    L(t)
  );
  return Rt(e) ? e.host : e;
}
function Bt(t) {
  const e = H(t);
  return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : O(e) && Z(e) ? e : Bt(e);
}
function X(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Bt(t), l = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = S(i);
  if (l) {
    const s = mt(r);
    return e.concat(r, r.visualViewport || [], Z(i) ? i : [], s && n ? X(s) : []);
  }
  return e.concat(i, X(i, [], n));
}
function mt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Mt(t) {
  const e = T(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = O(t), l = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, s = it(n) !== l || it(o) !== r;
  return s && (n = l, o = r), {
    width: n,
    height: o,
    $: s
  };
}
function yt(t) {
  return C(t) ? t : t.contextElement;
}
function U(t) {
  const e = yt(t);
  if (!O(e))
    return R(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: l
  } = Mt(e);
  let r = (l ? it(n.width) : n.width) / o, s = (l ? it(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: r,
    y: s
  };
}
const Re = /* @__PURE__ */ R(0);
function Ht(t) {
  const e = S(t);
  return !wt() || !e.visualViewport ? Re : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Oe(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== S(t) ? !1 : e;
}
function W(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = yt(t);
  let r = R(1);
  e && (o ? C(o) && (r = U(o)) : r = U(t));
  const s = Oe(l, n, o) ? Ht(l) : R(0);
  let c = (i.left + s.x) / r.x, a = (i.top + s.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (l) {
    const m = S(l), d = o && C(o) ? S(o) : o;
    let g = m, p = mt(g);
    for (; p && o && d !== g; ) {
      const y = U(p), h = p.getBoundingClientRect(), w = T(p), v = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, E = h.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      c *= y.x, a *= y.y, f *= y.x, u *= y.y, c += v, a += E, g = S(p), p = mt(g);
    }
  }
  return lt({
    width: f,
    height: u,
    x: c,
    y: a
  });
}
function vt(t, e) {
  const n = ft(t).scrollLeft;
  return e ? e.left + n : W(L(t)).left + n;
}
function It(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    vt(t, o)
  )), l = o.top + e.scrollTop;
  return {
    x: i,
    y: l
  };
}
function Le(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const l = i === "fixed", r = L(o), s = e ? at(e.floating) : !1;
  if (o === r || s && l)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = R(1);
  const f = R(0), u = O(o);
  if ((u || !u && !l) && ((K(o) !== "body" || Z(r)) && (c = ft(o)), O(o))) {
    const d = W(o);
    a = U(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const m = r && !u && !l ? It(r, c, !0) : R(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + f.x + m.x,
    y: n.y * a.y - c.scrollTop * a.y + f.y + m.y
  };
}
function Pe(t) {
  return Array.from(t.getClientRects());
}
function _e(t) {
  const e = L(t), n = ft(t), o = t.ownerDocument.body, i = $(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = $(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + vt(t);
  const s = -n.scrollTop;
  return T(o).direction === "rtl" && (r += $(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: l,
    x: r,
    y: s
  };
}
function De(t, e) {
  const n = S(t), o = L(t), i = n.visualViewport;
  let l = o.clientWidth, r = o.clientHeight, s = 0, c = 0;
  if (i) {
    l = i.width, r = i.height;
    const a = wt();
    (!a || a && e === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: s,
    y: c
  };
}
const Fe = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ke(t, e) {
  const n = W(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, l = O(t) ? U(t) : R(1), r = t.clientWidth * l.x, s = t.clientHeight * l.y, c = i * l.x, a = o * l.y;
  return {
    width: r,
    height: s,
    x: c,
    y: a
  };
}
function Ot(t, e, n) {
  let o;
  if (e === "viewport")
    o = De(t, n);
  else if (e === "document")
    o = _e(L(t));
  else if (C(e))
    o = ke(e, n);
  else {
    const i = Ht(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return lt(o);
}
function Nt(t, e) {
  const n = H(t);
  return n === e || !C(n) || q(n) ? !1 : T(n).position === "fixed" || Nt(n, e);
}
function Ve(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = X(t, [], !1).filter((s) => C(s) && K(s) !== "body"), i = null;
  const l = T(t).position === "fixed";
  let r = l ? H(t) : t;
  for (; C(r) && !q(r); ) {
    const s = T(r), c = pt(r);
    !c && s.position === "fixed" && (i = null), (l ? !c && !i : !c && s.position === "static" && !!i && Fe.has(i.position) || Z(r) && !c && Nt(t, r)) ? o = o.filter((f) => f !== r) : i = s, r = H(r);
  }
  return e.set(t, o), o;
}
function Be(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? at(e) ? [] : Ve(e, this._c) : [].concat(n), o], s = r[0], c = r.reduce((a, f) => {
    const u = Ot(e, f, i);
    return a.top = $(u.top, a.top), a.right = ot(u.right, a.right), a.bottom = ot(u.bottom, a.bottom), a.left = $(u.left, a.left), a;
  }, Ot(e, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Me(t) {
  const {
    width: e,
    height: n
  } = Mt(t);
  return {
    width: e,
    height: n
  };
}
function He(t, e, n) {
  const o = O(e), i = L(e), l = n === "fixed", r = W(t, !0, l, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = R(0);
  function a() {
    c.x = vt(i);
  }
  if (o || !o && !l)
    if ((K(e) !== "body" || Z(i)) && (s = ft(e)), o) {
      const d = W(e, !0, l, e);
      c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
    } else i && a();
  l && !o && i && a();
  const f = i && !o && !l ? It(i, s) : R(0), u = r.left + s.scrollLeft - c.x - f.x, m = r.top + s.scrollTop - c.y - f.y;
  return {
    x: u,
    y: m,
    width: r.width,
    height: r.height
  };
}
function dt(t) {
  return T(t).position === "static";
}
function Lt(t, e) {
  if (!O(t) || T(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return L(t) === n && (n = n.ownerDocument.body), n;
}
function zt(t, e) {
  const n = S(t);
  if (at(t))
    return n;
  if (!O(t)) {
    let i = H(t);
    for (; i && !q(i); ) {
      if (C(i) && !dt(i))
        return i;
      i = H(i);
    }
    return n;
  }
  let o = Lt(t, e);
  for (; o && xe(o) && dt(o); )
    o = Lt(o, e);
  return o && q(o) && dt(o) && !pt(o) ? n : o || Ce(t) || n;
}
const Ie = async function(t) {
  const e = this.getOffsetParent || zt, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: He(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ne(t) {
  return T(t).direction === "rtl";
}
const ze = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Le,
  getDocumentElement: L,
  getClippingRect: Be,
  getOffsetParent: zt,
  getElementRects: Ie,
  getClientRects: Pe,
  getDimensions: Me,
  getScale: U,
  isElement: C,
  isRTL: Ne
};
function $t(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function $e(t, e) {
  let n = null, o;
  const i = L(t);
  function l() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function r(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), l();
    const a = t.getBoundingClientRect(), {
      left: f,
      top: u,
      width: m,
      height: d
    } = a;
    if (s || e(), !m || !d)
      return;
    const g = et(u), p = et(i.clientWidth - (f + m)), y = et(i.clientHeight - (u + d)), h = et(f), v = {
      rootMargin: -g + "px " + -p + "px " + -y + "px " + -h + "px",
      threshold: $(0, ot(1, c)) || 1
    };
    let E = !0;
    function x(F) {
      const P = F[0].intersectionRatio;
      if (P !== c) {
        if (!E)
          return r();
        P ? r(!1, P) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !$t(a, t.getBoundingClientRect()) && r(), E = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, v);
    }
    n.observe(t);
  }
  return r(!0), l;
}
function Wt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, a = yt(t), f = i || l ? [...a ? X(a) : [], ...X(e)] : [];
  f.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), l && h.addEventListener("resize", n);
  });
  const u = a && s ? $e(a, n) : null;
  let m = -1, d = null;
  r && (d = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === a && d && (d.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = d) == null || v.observe(e);
    })), n();
  }), a && !c && d.observe(a), d.observe(e));
  let g, p = c ? W(t) : null;
  c && y();
  function y() {
    const h = W(t);
    p && !$t(p, h) && n(), p = h, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var h;
    f.forEach((w) => {
      i && w.removeEventListener("scroll", n), l && w.removeEventListener("resize", n);
    }), u?.(), (h = d) == null || h.disconnect(), d = null, c && cancelAnimationFrame(g);
  };
}
const Ut = pe, We = de, un = we, Ue = me, jt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ze,
    ...n
  }, l = {
    ...i.platform,
    _c: o
  };
  return fe(t, e, {
    ...i,
    platform: l
  });
}, M = {};
function je() {
  document.addEventListener("keydown", (t) => {
    M[t.key] && M[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && je();
const qe = (t, e) => {
  M[t] ? M[t].push(e) : M[t] = [e];
}, dn = (t, e) => {
  const n = M[t].indexOf(e);
  n !== -1 && M[t].splice(n, 1);
}, mn = (t) => {
  delete M[t];
}, j = [];
qe("Escape", () => {
  const t = j.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      j.push(t);
      return;
    }
    t.hide();
  }
});
function hn() {
  console.debug(j);
}
function Ke(t) {
  function e() {
    return j.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 ? j.push(t) : console.warn("Already created esc controller");
    },
    destroy: () => {
      const n = e();
      n !== -1 && j.splice(n, 1);
    }
  };
}
const nt = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Pt = 100, Ge = (t, e) => {
  if (e >= Pt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Pt})`;
}, Xe = (t) => {
  nt[t].forEach((e, n) => e.element.style.zIndex = Ge(t, n));
}, Ye = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: l, onInit: r }) => {
  const s = e || document.querySelector(t || "");
  if (!s)
    throw new Error("missing element to popover. Please check the parameters (selector or element)");
  const c = (m) => {
    m.target === s && (s.remove(), s.removeEventListener("transitionend", c));
  }, a = Gt(), f = {
    get element() {
      return s;
    },
    get hook() {
      return a;
    },
    show: () => {
      if (!s.classList.contains("is-visible"))
        return i && u.create(), l ? (l.appendChild(s), setTimeout(() => s.classList.add("is-visible"), 0)) : s.classList.add("is-visible"), nt[n].push(f), Xe(n), a.emitSync("show", []), f;
    },
    hide: () => (i && u.destroy(), s.classList.remove("is-visible"), s.style.removeProperty("z-index"), l && s.addEventListener("transitionend", c), nt[n] = nt[n].filter((m) => m !== f), document.activeElement && Ze(s, document.activeElement), o?.(), f),
    minimize(m, d, g) {
      m.add({
        instance: f,
        icon: g,
        title: d
      }), this.hide();
    },
    bringToTop: () => {
      f.hide(), f.show();
    }
  }, u = Ke(f);
  return r && r(s, f), l && s.isConnected && s.remove(), f;
};
function Ze(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const qt = 0;
function Je(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const gn = (t, e) => ({
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x: t,
      y: e,
      top: e,
      left: t,
      bottom: e,
      right: t
    };
  }
}), pn = (t, e, n = "bottom", o = qt) => Wt(t, e, () => {
  Je(t) || jt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      Ut(o),
      Ue()
    ]
  }).then(({ x: l, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${l}px`;
  });
});
class Qe {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = Ye({
      type: "popover",
      parentElement: Zt("popover"),
      element: this._cachedElement,
      onESC: () => {
        this._visible = !1;
      }
    });
  }
  _cachedElement;
  _popoverHandler;
  _visible = !1;
  _cleanup;
  get cachedElement() {
    return this._cachedElement;
  }
  _computePosition() {
    jt(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        Ut(this.args.offset),
        We({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = Wt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
  }
  hide() {
    this._visible && (this._visible = !1, this._popoverHandler.hide(), this._cleanup?.(), this._cleanup = void 0);
  }
  destroy() {
    this.hide();
  }
  get isVisible() {
    return this._visible;
  }
}
const tn = ["right-start", "right-end", "left-start", "left-end"], wn = (t) => new Qe({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? qt,
  autoPlacement: t.autoPlacement ?? tn,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  an as a,
  Ke as b,
  jt as c,
  gn as d,
  pn as e,
  Ue as f,
  Zt as g,
  ht as h,
  sn as i,
  on as j,
  ln as k,
  fn as l,
  rn as m,
  Ye as n,
  Ut as o,
  mn as p,
  hn as q,
  qe as r,
  un as s,
  wn as t,
  dn as u,
  cn as v
};
//# sourceMappingURL=floating-C8SHvpqf.js.map
