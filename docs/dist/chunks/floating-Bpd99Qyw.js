import { M as xt } from "./css-DfN_pP8W.js";
const qt = {
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
class Kt {
  constructor(e = { ...qt }) {
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
  return () => (t || (t = new Kt()), t);
})();
function Ne(t) {
  return ht().getStoreValue(t);
}
function $e(...t) {
  const e = ht();
  return t.map((n) => e.getStoreValue(n));
}
function Gt(t) {
  const n = ht().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
function We(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function Xt(t) {
  return (e) => e.matches(t);
}
function Ue(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? Xt(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function je(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function qe({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: s }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([l, a]) => r.setAttribute(l, a)), s && (r.textContent = s), o && o.forEach((l) => r.append(l.element)), {
    element: r,
    children: o ?? [],
    append(...l) {
      return l && this.element.append(...l), this;
    }
  };
}
function Ke(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const Yt = ["top", "right", "bottom", "left"], bt = ["start", "end"], Et = /* @__PURE__ */ Yt.reduce((t, e) => t.concat(e, e + "-" + bt[0], e + "-" + bt[1]), []), ot = Math.min, $ = Math.max, it = Math.round, et = Math.floor, T = (t) => ({
  x: t,
  y: t
}), Zt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jt = {
  start: "end",
  end: "start"
};
function At(t, e, n) {
  return $(t, ot(e, n));
}
function Y(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function D(t) {
  return t.split("-")[0];
}
function P(t) {
  return t.split("-")[1];
}
function Ot(t) {
  return t === "x" ? "y" : "x";
}
function _t(t) {
  return t === "y" ? "height" : "width";
}
function M(t) {
  return ["top", "bottom"].includes(D(t)) ? "y" : "x";
}
function Pt(t) {
  return Ot(M(t));
}
function Dt(t, e, n) {
  n === void 0 && (n = !1);
  const o = P(t), i = Pt(t), s = _t(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = st(r)), [r, st(r)];
}
function Qt(t) {
  const e = st(t);
  return [rt(t), e, rt(e)];
}
function rt(t) {
  return t.replace(/start|end/g, (e) => Jt[e]);
}
function te(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function ee(t, e, n, o) {
  const i = P(t);
  let s = te(D(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(rt)))), s;
}
function st(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Zt[e]);
}
function ne(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function oe(t) {
  return typeof t != "number" ? ne(t) : {
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
function Ct(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = M(e), r = Pt(e), l = _t(r), a = D(e), c = s === "y", d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
  let u;
  switch (a) {
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
      u[r] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      u[r] += m * (n && c ? -1 : 1);
      break;
  }
  return u;
}
const ie = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: f
  } = Ct(c, o, a), m = o, u = {}, g = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: y,
      fn: h
    } = l[p], {
      x: w,
      y: v,
      data: E,
      reset: x
    } = await h({
      x: d,
      y: f,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: u,
      rects: c,
      platform: r,
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
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: d,
      y: f
    } = Ct(c, m, a)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
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
    platform: s,
    rects: r,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: u = 0
  } = Y(e, t), g = oe(u), y = l[m ? f === "floating" ? "reference" : "floating" : f], h = lt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), w = f === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), E = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = lt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: v,
    strategy: a
  }) : w);
  return {
    top: (h.top - x.top + g.top) / E.y,
    bottom: (x.bottom - h.bottom + g.bottom) / E.y,
    left: (h.left - x.left + g.left) / E.x,
    right: (x.right - h.right + g.right) / E.x
  };
}
function re(t, e, n) {
  return (t ? [...n.filter((i) => P(i) === t), ...n.filter((i) => P(i) !== t)] : n.filter((i) => D(i) === i)).filter((i) => t ? P(i) === t || (e ? rt(i) !== i : !1) : !0);
}
const se = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: s,
        middlewareData: r,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: f,
        allowedPlacements: m = Et,
        autoAlignment: u = !0,
        ...g
      } = Y(t, e), p = f !== void 0 || m === Et ? re(f || null, u, m) : m, y = await gt(e, g), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = p[h];
      if (w == null)
        return {};
      const v = Dt(w, s, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== w)
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
      const _ = x.map((b) => {
        const k = P(b.placement);
        return [b.placement, k && d ? (
          // Check along the mainAxis and main crossAxis side.
          b.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          b.overflows[0]
        ), b.overflows];
      }).sort((b, k) => b[1] - k[1]), I = ((i = _.filter((b) => b[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        P(b[0]) ? 2 : 3
      ).every((k) => k <= 0))[0]) == null ? void 0 : i[0]) || _[0][0];
      return I !== l ? {
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
}, le = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...y
      } = Y(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const h = D(i), w = M(l), v = D(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = m || (v || !p ? [st(l)] : Qt(l)), F = g !== "none";
      !m && F && x.push(...ee(l, p, g, E));
      const _ = [l, ...x], J = await gt(e, y), I = [];
      let b = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && I.push(J[h]), f) {
        const z = Dt(i, r, E);
        I.push(J[z[0]], J[z[1]]);
      }
      if (b = [...b, {
        placement: i,
        overflows: I
      }], !I.every((z) => z <= 0)) {
        var k, Q;
        const z = (((k = s.flip) == null ? void 0 : k.index) || 0) + 1, ut = _[z];
        if (ut && (!(f === "alignment" ? w !== M(ut) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        b.every((C) => C.overflows[0] > 0 && M(C.placement) === w)))
          return {
            data: {
              index: z,
              overflows: b
            },
            reset: {
              placement: ut
            }
          };
        let G = (Q = b.filter((N) => N.overflows[0] <= 0).sort((N, C) => N.overflows[1] - C.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!G)
          switch (u) {
            case "bestFit": {
              var tt;
              const N = (tt = b.filter((C) => {
                if (F) {
                  const B = M(C.placement);
                  return B === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  B === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((B) => B > 0).reduce((B, jt) => B + jt, 0)]).sort((C, B) => C[1] - B[1])[0]) == null ? void 0 : tt[0];
              N && (G = N);
              break;
            }
            case "initialPlacement":
              G = l;
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
};
async function ce(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = D(n), l = P(n), a = M(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = s && a ? -1 : 1, f = Y(e, t);
  let {
    mainAxis: m,
    crossAxis: u,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof g == "number" && (u = l === "end" ? g * -1 : g), a ? {
    x: u * d,
    y: m * c
  } : {
    x: m * c,
    y: u * d
  };
}
const ae = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: l
      } = e, a = await ce(e, t);
      return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, fe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
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
        ...a
      } = Y(t, e), c = {
        x: n,
        y: o
      }, d = await gt(e, a), f = M(D(i)), m = Ot(f);
      let u = c[m], g = c[f];
      if (s) {
        const y = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = u + d[y], v = u - d[h];
        u = At(w, u, v);
      }
      if (r) {
        const y = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", w = g + d[y], v = g - d[h];
        g = At(w, g, v);
      }
      const p = l.fn({
        ...e,
        [m]: u,
        [f]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o,
          enabled: {
            [m]: s,
            [f]: r
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
  return Ft(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function O(t) {
  var e;
  return (e = (Ft(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ft(t) {
  return ct() ? t instanceof Node || t instanceof A(t).Node : !1;
}
function R(t) {
  return ct() ? t instanceof Element || t instanceof A(t).Element : !1;
}
function L(t) {
  return ct() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : !1;
}
function Rt(t) {
  return !ct() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
}
function Z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = S(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function ue(t) {
  return ["table", "td", "th"].includes(K(t));
}
function at(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function pt(t) {
  const e = wt(), n = R(t) ? S(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function de(t) {
  let e = H(t);
  for (; L(e) && !q(e); ) {
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
function q(t) {
  return ["html", "body", "#document"].includes(K(t));
}
function S(t) {
  return A(t).getComputedStyle(t);
}
function ft(t) {
  return R(t) ? {
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
    O(t)
  );
  return Rt(e) ? e.host : e;
}
function kt(t) {
  const e = H(t);
  return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : L(e) && Z(e) ? e : kt(e);
}
function X(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = kt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (s) {
    const l = mt(r);
    return e.concat(r, r.visualViewport || [], Z(i) ? i : [], l && n ? X(l) : []);
  }
  return e.concat(i, X(i, [], n));
}
function mt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Bt(t) {
  const e = S(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = L(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = it(n) !== s || it(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    $: l
  };
}
function yt(t) {
  return R(t) ? t : t.contextElement;
}
function U(t) {
  const e = yt(t);
  if (!L(e))
    return T(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = Bt(e);
  let r = (s ? it(n.width) : n.width) / o, l = (s ? it(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const me = /* @__PURE__ */ T(0);
function Mt(t) {
  const e = A(t);
  return !wt() || !e.visualViewport ? me : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function he(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e;
}
function W(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = yt(t);
  let r = T(1);
  e && (o ? R(o) && (r = U(o)) : r = U(t));
  const l = he(s, n, o) ? Mt(s) : T(0);
  let a = (i.left + l.x) / r.x, c = (i.top + l.y) / r.y, d = i.width / r.x, f = i.height / r.y;
  if (s) {
    const m = A(s), u = o && R(o) ? A(o) : o;
    let g = m, p = mt(g);
    for (; p && o && u !== g; ) {
      const y = U(p), h = p.getBoundingClientRect(), w = S(p), v = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, E = h.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      a *= y.x, c *= y.y, d *= y.x, f *= y.y, a += v, c += E, g = A(p), p = mt(g);
    }
  }
  return lt({
    width: d,
    height: f,
    x: a,
    y: c
  });
}
function vt(t, e) {
  const n = ft(t).scrollLeft;
  return e ? e.left + n : W(O(t)).left + n;
}
function Vt(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    vt(t, o)
  )), s = o.top + e.scrollTop;
  return {
    x: i,
    y: s
  };
}
function ge(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const s = i === "fixed", r = O(o), l = e ? at(e.floating) : !1;
  if (o === r || l && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = T(1);
  const d = T(0), f = L(o);
  if ((f || !f && !s) && ((K(o) !== "body" || Z(r)) && (a = ft(o)), L(o))) {
    const u = W(o);
    c = U(o), d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
  }
  const m = r && !f && !s ? Vt(r, a, !0) : T(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + m.y
  };
}
function pe(t) {
  return Array.from(t.getClientRects());
}
function we(t) {
  const e = O(t), n = ft(t), o = t.ownerDocument.body, i = $(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = $(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + vt(t);
  const l = -n.scrollTop;
  return S(o).direction === "rtl" && (r += $(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function ye(t, e) {
  const n = A(t), o = O(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, r = i.height;
    const c = wt();
    (!c || c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: a
  };
}
function ve(t, e) {
  const n = W(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = L(t) ? U(t) : T(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, a = i * s.x, c = o * s.y;
  return {
    width: r,
    height: l,
    x: a,
    y: c
  };
}
function St(t, e, n) {
  let o;
  if (e === "viewport")
    o = ye(t, n);
  else if (e === "document")
    o = we(O(t));
  else if (R(e))
    o = ve(e, n);
  else {
    const i = Mt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return lt(o);
}
function Ht(t, e) {
  const n = H(t);
  return n === e || !R(n) || q(n) ? !1 : S(n).position === "fixed" || Ht(n, e);
}
function xe(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = X(t, [], !1).filter((l) => R(l) && K(l) !== "body"), i = null;
  const s = S(t).position === "fixed";
  let r = s ? H(t) : t;
  for (; R(r) && !q(r); ) {
    const l = S(r), a = pt(r);
    !a && l.position === "fixed" && (i = null), (s ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Z(r) && !a && Ht(t, r)) ? o = o.filter((d) => d !== r) : i = l, r = H(r);
  }
  return e.set(t, o), o;
}
function be(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? at(e) ? [] : xe(e, this._c) : [].concat(n), o], l = r[0], a = r.reduce((c, d) => {
    const f = St(e, d, i);
    return c.top = $(f.top, c.top), c.right = ot(f.right, c.right), c.bottom = ot(f.bottom, c.bottom), c.left = $(f.left, c.left), c;
  }, St(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Ee(t) {
  const {
    width: e,
    height: n
  } = Bt(t);
  return {
    width: e,
    height: n
  };
}
function Ae(t, e, n) {
  const o = L(e), i = O(e), s = n === "fixed", r = W(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = T(0);
  function c() {
    a.x = vt(i);
  }
  if (o || !o && !s)
    if ((K(e) !== "body" || Z(i)) && (l = ft(e)), o) {
      const u = W(e, !0, s, e);
      a.x = u.x + e.clientLeft, a.y = u.y + e.clientTop;
    } else i && c();
  s && !o && i && c();
  const d = i && !o && !s ? Vt(i, l) : T(0), f = r.left + l.scrollLeft - a.x - d.x, m = r.top + l.scrollTop - a.y - d.y;
  return {
    x: f,
    y: m,
    width: r.width,
    height: r.height
  };
}
function dt(t) {
  return S(t).position === "static";
}
function Tt(t, e) {
  if (!L(t) || S(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return O(t) === n && (n = n.ownerDocument.body), n;
}
function It(t, e) {
  const n = A(t);
  if (at(t))
    return n;
  if (!L(t)) {
    let i = H(t);
    for (; i && !q(i); ) {
      if (R(i) && !dt(i))
        return i;
      i = H(i);
    }
    return n;
  }
  let o = Tt(t, e);
  for (; o && ue(o) && dt(o); )
    o = Tt(o, e);
  return o && q(o) && dt(o) && !pt(o) ? n : o || de(t) || n;
}
const Ce = async function(t) {
  const e = this.getOffsetParent || It, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Ae(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Re(t) {
  return S(t).direction === "rtl";
}
const Se = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ge,
  getDocumentElement: O,
  getClippingRect: be,
  getOffsetParent: It,
  getElementRects: Ce,
  getClientRects: pe,
  getDimensions: Ee,
  getScale: U,
  isElement: R,
  isRTL: Re
};
function zt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Te(t, e) {
  let n = null, o;
  const i = O(t);
  function s() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function r(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: f,
      width: m,
      height: u
    } = c;
    if (l || e(), !m || !u)
      return;
    const g = et(f), p = et(i.clientWidth - (d + m)), y = et(i.clientHeight - (f + u)), h = et(d), v = {
      rootMargin: -g + "px " + -p + "px " + -y + "px " + -h + "px",
      threshold: $(0, ot(1, a)) || 1
    };
    let E = !0;
    function x(F) {
      const _ = F[0].intersectionRatio;
      if (_ !== a) {
        if (!E)
          return r();
        _ ? r(!1, _) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !zt(c, t.getBoundingClientRect()) && r(), E = !1;
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
  return r(!0), s;
}
function Nt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = yt(t), d = i || s ? [...c ? X(c) : [], ...X(e)] : [];
  d.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), s && h.addEventListener("resize", n);
  });
  const f = c && l ? Te(c, n) : null;
  let m = -1, u = null;
  r && (u = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === c && u && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), c && !a && u.observe(c), u.observe(e));
  let g, p = a ? W(t) : null;
  a && y();
  function y() {
    const h = W(t);
    p && !zt(p, h) && n(), p = h, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var h;
    d.forEach((w) => {
      i && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (h = u) == null || h.disconnect(), u = null, a && cancelAnimationFrame(g);
  };
}
const $t = ae, Le = se, Ge = fe, Oe = le, Wt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Se,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return ie(t, e, {
    ...i,
    platform: s
  });
}, V = {};
function _e() {
  document.addEventListener("keydown", (t) => {
    V[t.key] && V[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && _e();
const Pe = (t, e) => {
  V[t] ? V[t].push(e) : V[t] = [e];
}, Xe = (t, e) => {
  const n = V[t].indexOf(e);
  n !== -1 && V[t].splice(n, 1);
}, Ye = (t) => {
  delete V[t];
}, j = [];
Pe("Escape", () => {
  const t = j.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      j.push(t);
      return;
    }
    t.hide();
  }
});
function Ze() {
  console.debug(j);
}
function De(t) {
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
}, Lt = 100, Fe = (t, e) => {
  if (e >= Lt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Lt})`;
}, ke = (t) => {
  nt[t].forEach((e, n) => e.element.style.zIndex = Fe(t, n));
}, Be = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: s, onInit: r }) => {
  const l = e || document.querySelector(t || "");
  if (!l)
    throw new Error("missing element to popover. Please check the parameters (selector or element)");
  const a = (f) => {
    f.target === l && (l.remove(), l.removeEventListener("transitionend", a));
  }, c = {
    get element() {
      return l;
    },
    show: () => {
      if (!l.classList.contains("is-visible"))
        return i && d.create(), s ? (s.appendChild(l), setTimeout(() => l.classList.add("is-visible"), 0)) : l.classList.add("is-visible"), nt[n].push(c), ke(n), c;
    },
    hide: () => (i && d.destroy(), l.classList.remove("is-visible"), l.style.removeProperty("z-index"), s && l.addEventListener("transitionend", a), nt[n] = nt[n].filter((f) => f !== c), document.activeElement && Me(l, document.activeElement), o?.(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, d = De(c);
  return r && r(l, c), s && l.isConnected && l.remove(), c;
};
function Me(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const Ut = 0;
function Ve(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const Je = (t, e) => ({
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
}), Qe = (t, e, n = "bottom", o = Ut) => Nt(t, e, () => {
  Ve(t) || Wt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      $t(o),
      Oe()
    ]
  }).then(({ x: s, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${s}px`;
  });
});
class He {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = Be({
      type: "popover",
      parentElement: Gt("popover"),
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
    Wt(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        $t(this.args.offset),
        Le({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = Nt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
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
const Ie = ["right-start", "right-end", "left-start", "left-end"], tn = (t) => new He({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? Ut,
  autoPlacement: t.autoPlacement ?? Ie,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  qe as a,
  De as b,
  Wt as c,
  Je as d,
  Qe as e,
  Oe as f,
  Gt as g,
  ht as h,
  We as i,
  Ne as j,
  Ue as k,
  Ke as l,
  $e as m,
  Be as n,
  $t as o,
  Ye as p,
  Ze as q,
  Pe as r,
  Ge as s,
  tn as t,
  Xe as u,
  je as v
};
//# sourceMappingURL=floating-Bpd99Qyw.js.map
