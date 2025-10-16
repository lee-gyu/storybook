import { c as Zt } from "./hook-flow-h5XBPdBp.js";
import { V as xt } from "./css-CjgUAAH1.js";
const Gt = {
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
class Jt {
  constructor(e = { ...Gt }) {
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
const pt = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new Jt()), t);
})();
function rn(t) {
  return pt().getStoreValue(t);
}
function ln(...t) {
  const e = pt();
  return t.map((n) => e.getStoreValue(n));
}
function Qt(t) {
  const n = pt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
const te = ["top", "right", "bottom", "left"], bt = ["start", "end"], Et = /* @__PURE__ */ te.reduce((t, e) => t.concat(e, e + "-" + bt[0], e + "-" + bt[1]), []), ot = Math.min, $ = Math.max, it = Math.round, et = Math.floor, R = (t) => ({
  x: t,
  y: t
}), ee = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ne = {
  start: "end",
  end: "start"
};
function _t(t, e, n) {
  return $(t, ot(e, n));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function D(t) {
  return t.split("-")[0];
}
function P(t) {
  return t.split("-")[1];
}
function Ft(t) {
  return t === "x" ? "y" : "x";
}
function kt(t) {
  return t === "y" ? "height" : "width";
}
const oe = /* @__PURE__ */ new Set(["top", "bottom"]);
function V(t) {
  return oe.has(D(t)) ? "y" : "x";
}
function Mt(t) {
  return Ft(V(t));
}
function Vt(t, e, n) {
  n === void 0 && (n = !1);
  const o = P(t), i = Mt(t), r = kt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = rt(s)), [s, rt(s)];
}
function ie(t) {
  const e = rt(t);
  return [st(t), e, st(e)];
}
function st(t) {
  return t.replace(/start|end/g, (e) => ne[e]);
}
const St = ["left", "right"], Ct = ["right", "left"], se = ["top", "bottom"], re = ["bottom", "top"];
function le(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ct : St : e ? St : Ct;
    case "left":
    case "right":
      return e ? se : re;
    default:
      return [];
  }
}
function ce(t, e, n, o) {
  const i = P(t);
  let r = le(D(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(st)))), r;
}
function rt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ee[e]);
}
function ae(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function fe(t) {
  return typeof t != "number" ? ae(t) : {
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
function At(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = V(e), s = Mt(e), l = kt(s), c = D(e), a = r === "y", d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, h = o[l] / 2 - i[l] / 2;
  let u;
  switch (c) {
    case "top":
      u = {
        x: d,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (P(e)) {
    case "start":
      u[s] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      u[s] += h * (n && a ? -1 : 1);
      break;
  }
  return u;
}
const ue = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, l = r.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: f
  } = At(a, o, c), h = o, u = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: y,
      fn: p
    } = l[g], {
      x: w,
      y: v,
      data: E,
      reset: x
    } = await p({
      x: d,
      y: f,
      initialPlacement: o,
      placement: h,
      strategy: i,
      middlewareData: u,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = w ?? d, f = v ?? f, u = {
      ...u,
      [y]: {
        ...u[y],
        ...E
      }
    }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (a = x.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: d,
      y: f
    } = At(a, h, c)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: u
  };
};
async function gt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: l,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: u = 0
  } = Z(e, t), m = fe(u), y = l[h ? f === "floating" ? "reference" : "floating" : f], p = lt(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: d,
    strategy: c
  })), w = f === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), E = await (r.isElement == null ? void 0 : r.isElement(v)) ? await (r.getScale == null ? void 0 : r.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = lt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: v,
    strategy: c
  }) : w);
  return {
    top: (p.top - x.top + m.top) / E.y,
    bottom: (x.bottom - p.bottom + m.bottom) / E.y,
    left: (p.left - x.left + m.left) / E.x,
    right: (x.right - p.right + m.right) / E.x
  };
}
function de(t, e, n) {
  return (t ? [...n.filter((i) => P(i) === t), ...n.filter((i) => P(i) !== t)] : n.filter((i) => D(i) === i)).filter((i) => t ? P(i) === t || (e ? st(i) !== i : !1) : !0);
}
const he = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: r,
        middlewareData: s,
        placement: l,
        platform: c,
        elements: a
      } = e, {
        crossAxis: d = !1,
        alignment: f,
        allowedPlacements: h = Et,
        autoAlignment: u = !0,
        ...m
      } = Z(t, e), g = f !== void 0 || h === Et ? de(f || null, u, h) : h, y = await gt(e, m), p = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, w = g[p];
      if (w == null)
        return {};
      const v = Vt(w, r, await (c.isRTL == null ? void 0 : c.isRTL(a.floating)));
      if (l !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const E = [y[D(w)], y[v[0]], y[v[1]]], x = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: E
      }], F = g[p + 1];
      if (F)
        return {
          data: {
            index: p + 1,
            overflows: x
          },
          reset: {
            placement: F
          }
        };
      const O = x.map((b) => {
        const k = P(b.placement);
        return [b.placement, k && d ? (
          // Check along the mainAxis and main crossAxis side.
          b.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          b.overflows[0]
        ), b.overflows];
      }).sort((b, k) => b[1] - k[1]), N = ((i = O.filter((b) => b[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        P(b[0]) ? 2 : 3
      ).every((k) => k <= 0))[0]) == null ? void 0 : i[0]) || O[0][0];
      return N !== l ? {
        data: {
          index: p + 1,
          overflows: x
        },
        reset: {
          placement: N
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
        middlewareData: r,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: a
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = Z(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const p = D(i), w = V(l), v = D(l) === l, E = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), x = h || (v || !g ? [rt(l)] : ie(l)), F = m !== "none";
      !h && F && x.push(...ce(l, g, m, E));
      const O = [l, ...x], J = await gt(e, y), N = [];
      let b = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (d && N.push(J[p]), f) {
        const z = Vt(i, s, E);
        N.push(J[z[0]], J[z[1]]);
      }
      if (b = [...b, {
        placement: i,
        overflows: N
      }], !N.every((z) => z <= 0)) {
        var k, Q;
        const z = (((k = r.flip) == null ? void 0 : k.index) || 0) + 1, dt = O[z];
        if (dt && (!(f === "alignment" ? w !== V(dt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        b.every((S) => V(S.placement) === w ? S.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: b
            },
            reset: {
              placement: dt
            }
          };
        let K = (Q = b.filter((W) => W.overflows[0] <= 0).sort((W, S) => W.overflows[1] - S.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!K)
          switch (u) {
            case "bestFit": {
              var tt;
              const W = (tt = b.filter((S) => {
                if (F) {
                  const M = V(S.placement);
                  return M === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((S) => [S.placement, S.overflows.filter((M) => M > 0).reduce((M, Yt) => M + Yt, 0)]).sort((S, M) => S[1] - M[1])[0]) == null ? void 0 : tt[0];
              W && (K = W);
              break;
            }
            case "initialPlacement":
              K = l;
              break;
          }
        if (i !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
}, pe = /* @__PURE__ */ new Set(["left", "top"]);
async function ge(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = D(n), l = P(n), c = V(n) === "y", a = pe.has(s) ? -1 : 1, d = r && c ? -1 : 1, f = Z(e, t);
  let {
    mainAxis: h,
    crossAxis: u,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof m == "number" && (u = l === "end" ? m * -1 : m), c ? {
    x: u * d,
    y: h * a
  } : {
    x: h * a,
    y: u * d
  };
}
const we = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: l
      } = e, c = await ge(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, ye = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: p,
              y: w
            } = y;
            return {
              x: p,
              y: w
            };
          }
        },
        ...c
      } = Z(t, e), a = {
        x: n,
        y: o
      }, d = await gt(e, c), f = V(D(i)), h = Ft(f);
      let u = a[h], m = a[f];
      if (r) {
        const y = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", w = u + d[y], v = u - d[p];
        u = _t(w, u, v);
      }
      if (s) {
        const y = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", w = m + d[y], v = m - d[p];
        m = _t(w, m, v);
      }
      const g = l.fn({
        ...e,
        [h]: u,
        [f]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [h]: r,
            [f]: s
          }
        }
      };
    }
  };
};
function ct() {
  return typeof window < "u";
}
function q(t) {
  return Bt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function _(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function L(t) {
  var e;
  return (e = (Bt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Bt(t) {
  return ct() ? t instanceof Node || t instanceof _(t).Node : !1;
}
function C(t) {
  return ct() ? t instanceof Element || t instanceof _(t).Element : !1;
}
function T(t) {
  return ct() ? t instanceof HTMLElement || t instanceof _(t).HTMLElement : !1;
}
function Rt(t) {
  return !ct() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof _(t).ShadowRoot;
}
const ve = /* @__PURE__ */ new Set(["inline", "contents"]);
function G(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = A(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !ve.has(i);
}
const xe = /* @__PURE__ */ new Set(["table", "td", "th"]);
function be(t) {
  return xe.has(q(t));
}
const Ee = [":popover-open", ":modal"];
function at(t) {
  return Ee.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const _e = ["transform", "translate", "scale", "rotate", "perspective"], Se = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ce = ["paint", "layout", "strict", "content"];
function wt(t) {
  const e = yt(), n = C(t) ? A(t) : t;
  return _e.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Se.some((o) => (n.willChange || "").includes(o)) || Ce.some((o) => (n.contain || "").includes(o));
}
function Ae(t) {
  let e = I(t);
  for (; T(e) && !j(e); ) {
    if (wt(e))
      return e;
    if (at(e))
      return null;
    e = I(e);
  }
  return null;
}
function yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Re = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function j(t) {
  return Re.has(q(t));
}
function A(t) {
  return _(t).getComputedStyle(t);
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
function I(t) {
  if (q(t) === "html")
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
function Ht(t) {
  const e = I(t);
  return j(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : T(e) && G(e) ? e : Ht(e);
}
function Y(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Ht(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = _(i);
  if (r) {
    const l = mt(s);
    return e.concat(s, s.visualViewport || [], G(i) ? i : [], l && n ? Y(l) : []);
  }
  return e.concat(i, Y(i, [], n));
}
function mt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function It(t) {
  const e = A(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = T(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = it(n) !== r || it(o) !== s;
  return l && (n = r, o = s), {
    width: n,
    height: o,
    $: l
  };
}
function vt(t) {
  return C(t) ? t : t.contextElement;
}
function X(t) {
  const e = vt(t);
  if (!T(e))
    return R(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = It(e);
  let s = (r ? it(n.width) : n.width) / o, l = (r ? it(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Te = /* @__PURE__ */ R(0);
function Nt(t) {
  const e = _(t);
  return !yt() || !e.visualViewport ? Te : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Le(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== _(t) ? !1 : e;
}
function U(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = vt(t);
  let s = R(1);
  e && (o ? C(o) && (s = X(o)) : s = X(t));
  const l = Le(r, n, o) ? Nt(r) : R(0);
  let c = (i.left + l.x) / s.x, a = (i.top + l.y) / s.y, d = i.width / s.x, f = i.height / s.y;
  if (r) {
    const h = _(r), u = o && C(o) ? _(o) : o;
    let m = h, g = mt(m);
    for (; g && o && u !== m; ) {
      const y = X(g), p = g.getBoundingClientRect(), w = A(g), v = p.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, E = p.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      c *= y.x, a *= y.y, d *= y.x, f *= y.y, c += v, a += E, m = _(g), g = mt(m);
    }
  }
  return lt({
    width: d,
    height: f,
    x: c,
    y: a
  });
}
function ut(t, e) {
  const n = ft(t).scrollLeft;
  return e ? e.left + n : U(L(t)).left + n;
}
function zt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - ut(t, n), i = n.top + e.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Oe(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = L(o), l = e ? at(e.floating) : !1;
  if (o === s || l && r)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = R(1);
  const d = R(0), f = T(o);
  if ((f || !f && !r) && ((q(o) !== "body" || G(s)) && (c = ft(o)), T(o))) {
    const u = U(o);
    a = X(o), d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
  }
  const h = s && !f && !r ? zt(s, c) : R(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + d.x + h.x,
    y: n.y * a.y - c.scrollTop * a.y + d.y + h.y
  };
}
function Pe(t) {
  return Array.from(t.getClientRects());
}
function De(t) {
  const e = L(t), n = ft(t), o = t.ownerDocument.body, i = $(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = $(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + ut(t);
  const l = -n.scrollTop;
  return A(o).direction === "rtl" && (s += $(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: l
  };
}
const Tt = 25;
function Fe(t, e) {
  const n = _(t), o = L(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, l = 0, c = 0;
  if (i) {
    r = i.width, s = i.height;
    const d = yt();
    (!d || d && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  const a = ut(o);
  if (a <= 0) {
    const d = o.ownerDocument, f = d.body, h = getComputedStyle(f), u = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, m = Math.abs(o.clientWidth - f.clientWidth - u);
    m <= Tt && (r -= m);
  } else a <= Tt && (r += a);
  return {
    width: r,
    height: s,
    x: l,
    y: c
  };
}
const ke = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Me(t, e) {
  const n = U(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = T(t) ? X(t) : R(1), s = t.clientWidth * r.x, l = t.clientHeight * r.y, c = i * r.x, a = o * r.y;
  return {
    width: s,
    height: l,
    x: c,
    y: a
  };
}
function Lt(t, e, n) {
  let o;
  if (e === "viewport")
    o = Fe(t, n);
  else if (e === "document")
    o = De(L(t));
  else if (C(e))
    o = Me(e, n);
  else {
    const i = Nt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return lt(o);
}
function Wt(t, e) {
  const n = I(t);
  return n === e || !C(n) || j(n) ? !1 : A(n).position === "fixed" || Wt(n, e);
}
function Ve(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Y(t, [], !1).filter((l) => C(l) && q(l) !== "body"), i = null;
  const r = A(t).position === "fixed";
  let s = r ? I(t) : t;
  for (; C(s) && !j(s); ) {
    const l = A(s), c = wt(s);
    !c && l.position === "fixed" && (i = null), (r ? !c && !i : !c && l.position === "static" && !!i && ke.has(i.position) || G(s) && !c && Wt(t, s)) ? o = o.filter((d) => d !== s) : i = l, s = I(s);
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
  const s = [...n === "clippingAncestors" ? at(e) ? [] : Ve(e, this._c) : [].concat(n), o], l = s[0], c = s.reduce((a, d) => {
    const f = Lt(e, d, i);
    return a.top = $(f.top, a.top), a.right = ot(f.right, a.right), a.bottom = ot(f.bottom, a.bottom), a.left = $(f.left, a.left), a;
  }, Lt(e, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function He(t) {
  const {
    width: e,
    height: n
  } = It(t);
  return {
    width: e,
    height: n
  };
}
function Ie(t, e, n) {
  const o = T(e), i = L(e), r = n === "fixed", s = U(t, !0, r, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = R(0);
  function a() {
    c.x = ut(i);
  }
  if (o || !o && !r)
    if ((q(e) !== "body" || G(i)) && (l = ft(e)), o) {
      const u = U(e, !0, r, e);
      c.x = u.x + e.clientLeft, c.y = u.y + e.clientTop;
    } else i && a();
  r && !o && i && a();
  const d = i && !o && !r ? zt(i, l) : R(0), f = s.left + l.scrollLeft - c.x - d.x, h = s.top + l.scrollTop - c.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function ht(t) {
  return A(t).position === "static";
}
function Ot(t, e) {
  if (!T(t) || A(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return L(t) === n && (n = n.ownerDocument.body), n;
}
function $t(t, e) {
  const n = _(t);
  if (at(t))
    return n;
  if (!T(t)) {
    let i = I(t);
    for (; i && !j(i); ) {
      if (C(i) && !ht(i))
        return i;
      i = I(i);
    }
    return n;
  }
  let o = Ot(t, e);
  for (; o && be(o) && ht(o); )
    o = Ot(o, e);
  return o && j(o) && ht(o) && !wt(o) ? n : o || Ae(t) || n;
}
const Ne = async function(t) {
  const e = this.getOffsetParent || $t, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Ie(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ze(t) {
  return A(t).direction === "rtl";
}
const We = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Oe,
  getDocumentElement: L,
  getClippingRect: Be,
  getOffsetParent: $t,
  getElementRects: Ne,
  getClientRects: Pe,
  getDimensions: He,
  getScale: X,
  isElement: C,
  isRTL: ze
};
function Ut(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function $e(t, e) {
  let n = null, o;
  const i = L(t);
  function r() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), r();
    const a = t.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: u
    } = a;
    if (l || e(), !h || !u)
      return;
    const m = et(f), g = et(i.clientWidth - (d + h)), y = et(i.clientHeight - (f + u)), p = et(d), v = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -p + "px",
      threshold: $(0, ot(1, c)) || 1
    };
    let E = !0;
    function x(F) {
      const O = F[0].intersectionRatio;
      if (O !== c) {
        if (!E)
          return s();
        O ? s(!1, O) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Ut(a, t.getBoundingClientRect()) && s(), E = !1;
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
  return s(!0), r;
}
function Xt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, a = vt(t), d = i || r ? [...a ? Y(a) : [], ...Y(e)] : [];
  d.forEach((p) => {
    i && p.addEventListener("scroll", n, {
      passive: !0
    }), r && p.addEventListener("resize", n);
  });
  const f = a && l ? $e(a, n) : null;
  let h = -1, u = null;
  s && (u = new ResizeObserver((p) => {
    let [w] = p;
    w && w.target === a && u && (u.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), a && !c && u.observe(a), u.observe(e));
  let m, g = c ? U(t) : null;
  c && y();
  function y() {
    const p = U(t);
    g && !Ut(g, p) && n(), g = p, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var p;
    d.forEach((w) => {
      i && w.removeEventListener("scroll", n), r && w.removeEventListener("resize", n);
    }), f?.(), (p = u) == null || p.disconnect(), u = null, c && cancelAnimationFrame(m);
  };
}
const jt = we, Ue = he, cn = ye, Xe = me, qt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: We,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return ue(t, e, {
    ...i,
    platform: r
  });
}, B = {};
function je() {
  document.addEventListener("keydown", (t) => {
    B[t.key] && B[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && je();
const qe = (t, e) => {
  B[t] ? B[t].push(e) : B[t] = [e];
}, an = (t, e) => {
  const n = B[t].indexOf(e);
  n !== -1 && B[t].splice(n, 1);
}, fn = (t) => {
  delete B[t];
}, H = [];
qe("Escape", () => Ke());
function un() {
  return {
    escStackLength: H.length,
    top: H[H.length - 1]
  };
}
function Ke() {
  const t = H.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      H.push(t);
      return;
    }
    t.hide();
  }
}
function Ye(t) {
  function e() {
    return H.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 && H.push(t);
    },
    destroy: () => {
      const n = e();
      n !== -1 && H.splice(n, 1);
    }
  };
}
const nt = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Pt = 100, Ze = (t, e) => {
  if (e >= Pt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Pt})`;
}, Dt = (t) => {
  nt[t].forEach((e, n) => e.element.style.zIndex = Ze(t, n));
};
class Ge {
  _parentElement;
  _popoverElement;
  _type;
  _hook = Zt();
  _escController = Ye(this);
  _hideEventHandler;
  _onESC;
  _escClose;
  constructor(e) {
    const {
      element: n,
      selector: o,
      type: i,
      parentElement: r,
      escClose: s = !0
    } = e, l = n || document.querySelector(o || "");
    if (!l)
      throw new Error("missing element to popover. Please check the parameters (selector or element)");
    this._popoverElement = l, this._escClose = s, this._parentElement = r, this._type = i, this._onESC = e.onESC, e.onInit?.(this._popoverElement, this), r && l.isConnected && l.remove(), this._hideEventHandler = (c) => {
      c.target === l && (l.remove(), l.removeEventListener("transitionend", this._hideEventHandler));
    };
  }
  get element() {
    return this._popoverElement;
  }
  get hook() {
    return this._hook;
  }
  /**
   * 현재 인스턴스의 popover 요소를 화면에서 제거하고, z-index 관리를 해제합니다.
   * hide "hook"을 조건을 검사하지 않고, 실행하므로 hide 훅에서 false를 리턴해도 동작이 취소되지 않습니다.
   * ESC 키로 닫기 기능이 활성화된 경우, ESC 키 이벤트 리스너도 함께 제거합니다.
   */
  destroy() {
    this._escClose && this._escController.destroy(), this._popoverElement.classList.remove("is-visible"), this._popoverElement.style.removeProperty("z-index"), nt[this._type] = nt[this._type].filter((e) => e !== this), Dt(this._type);
  }
  /**
   * 현재 인스턴스의 popover 요소를 화면에 표시합니다.
   * 실행 전, "show" sync 훅을 실행하고, show 훅에서 false를 리턴하면 show 동작을 취소합니다.
   */
  show() {
    if (this._hook.emitSync("show", []) === !1) return this;
    if (!this._popoverElement.classList.contains("is-visible"))
      return this._escClose && this._escController.create(), this._parentElement ? (this._parentElement.appendChild(this._popoverElement), setTimeout(() => this._popoverElement.classList.add("is-visible"), 0)) : this._popoverElement.classList.add("is-visible"), nt[this._type].push(this), Dt(this._type), this;
  }
  /**
   * 현재 인스턴스의 요소를 숨깁니다.
   * 실행 전, "hide" sync 훅을 실행하고, hide 훅에서 false를 리턴하면 hide 동작을 취소합니다.
   */
  hide() {
    return this._hook.emitSync("hide", []) === !1 ? (this._escClose && this._escController.create(), this) : (this.destroy(), this._parentElement && this._popoverElement.addEventListener("transitionend", this._hideEventHandler), document.activeElement && Qe(this._popoverElement, document.activeElement), this._onESC?.(), this);
  }
  minimize(e, n, o) {
    e.add({
      instance: this,
      icon: o,
      title: n
    }), this.hide();
  }
  bringToTop() {
    this.hide(), this.show();
  }
}
const Je = (t) => new Ge(t);
function Qe(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const Kt = 0;
function tn(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const dn = (t, e) => ({
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
}), hn = (t, e, n = "bottom", o = Kt) => Xt(t, e, () => {
  tn(t) || qt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      jt(o),
      Xe()
    ]
  }).then(({ x: r, y: s }) => {
    e.style.top = `${s}px`, e.style.left = `${r}px`;
  });
});
class en {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = Je({
      type: "popover",
      parentElement: Qt("popover"),
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
    qt(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        jt(this.args.offset),
        Ue({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = Xt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
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
const nn = ["right-start", "right-end", "left-start", "left-end"], mn = (t) => new en({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? Kt,
  autoPlacement: t.autoPlacement ?? nn,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  Ge as I,
  Ye as a,
  dn as b,
  qt as c,
  hn as d,
  pt as e,
  Xe as f,
  Qt as g,
  rn as h,
  ln as i,
  Je as j,
  fn as k,
  Ke as l,
  mn as m,
  jt as o,
  un as p,
  qe as r,
  cn as s,
  an as u
};
