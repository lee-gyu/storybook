import { l as xt } from "./css-rF0v2sLP.js";
const qt = {
  // DatePicker
  "datePicker.minDate": /* @__PURE__ */ new Date("1970-01-01"),
  "datePicker.maxDate": /* @__PURE__ */ new Date("9999-12-31"),
  // Grid
  "grid.defaultFontSize": xt.fontSizeBase,
  "grid.defaultFontFamily": xt.fontFamilyBase,
  "grid.paddingTop": 6,
  "grid.paddingBottom": 6,
  "grid.paddingLeft": 8,
  "grid.paddingRight": 8,
  "grid.defaultRowMinSize": 28,
  "grid.defaultRowMaxSize": 100,
  "grid.defaultRowHeight": 28,
  "grid.defaultColumnMinSize": 80,
  "grid.defaultColumnMaxSize": 500,
  "grid.defaultColumnWidth": 100,
  "grid.defaultDropdownWidth": 240,
  // TreeView
  "tree-view.nodeHeaderRowHeight": 29,
  "tree-view.nodeRowHeight": 28,
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
const mt = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new Kt()), t);
})();
function Ne(t) {
  return mt().getStoreValue(t);
}
function $e(...t) {
  const e = mt();
  return t.map((n) => e.getStoreValue(n));
}
function Gt(t) {
  const n = mt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
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
function qe({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: l }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([s, a]) => r.setAttribute(s, a)), l && (r.textContent = l), o && o.forEach((s) => r.append(s.element)), {
    element: r,
    children: o ?? [],
    append(...s) {
      return s && this.element.append(...s), this;
    }
  };
}
function Ke(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const Yt = ["top", "right", "bottom", "left"], bt = ["start", "end"], Et = /* @__PURE__ */ Yt.reduce((t, e) => t.concat(e, e + "-" + bt[0], e + "-" + bt[1]), []), ot = Math.min, z = Math.max, it = Math.round, et = Math.floor, C = (t) => ({
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
  return z(t, ot(e, n));
}
function Y(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function P(t) {
  return t.split("-")[0];
}
function _(t) {
  return t.split("-")[1];
}
function Ot(t) {
  return t === "x" ? "y" : "x";
}
function _t(t) {
  return t === "y" ? "height" : "width";
}
function j(t) {
  return ["top", "bottom"].includes(P(t)) ? "y" : "x";
}
function Pt(t) {
  return Ot(j(t));
}
function Dt(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), i = Pt(t), l = _t(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = st(r)), [r, st(r)];
}
function Qt(t) {
  const e = st(t);
  return [rt(t), e, rt(e)];
}
function rt(t) {
  return t.replace(/start|end/g, (e) => Jt[e]);
}
function te(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], l = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? l : r;
    default:
      return [];
  }
}
function ee(t, e, n, o) {
  const i = _(t);
  let l = te(P(t), n === "start", o);
  return i && (l = l.map((r) => r + "-" + i), e && (l = l.concat(l.map(rt)))), l;
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
function St(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const l = j(e), r = Pt(e), s = _t(r), a = P(e), c = l === "y", d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, m = o[s] / 2 - i[s] / 2;
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
  switch (_(e)) {
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
    middleware: l = [],
    platform: r
  } = n, s = l.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: f
  } = St(c, o, a), m = o, u = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: w,
      fn: h
    } = s[g], {
      x: y,
      y: v,
      data: b,
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
    d = y ?? d, f = v ?? f, u = {
      ...u,
      [w]: {
        ...u[w],
        ...b
      }
    }, x && p <= 50 && (p++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: d,
      y: f
    } = St(c, m, a)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: u
  };
};
async function ht(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: l,
    rects: r,
    elements: s,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: u = 0
  } = Y(e, t), p = oe(u), w = s[m ? f === "floating" ? "reference" : "floating" : f], h = lt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(w))) == null || n ? w : w.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), y = f === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), b = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = lt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: v,
    strategy: a
  }) : y);
  return {
    top: (h.top - x.top + p.top) / b.y,
    bottom: (x.bottom - h.bottom + p.bottom) / b.y,
    left: (h.left - x.left + p.left) / b.x,
    right: (x.right - h.right + p.right) / b.x
  };
}
function re(t, e, n) {
  return (t ? [...n.filter((i) => _(i) === t), ...n.filter((i) => _(i) !== t)] : n.filter((i) => P(i) === i)).filter((i) => t ? _(i) === t || (e ? rt(i) !== i : !1) : !0);
}
const se = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: l,
        middlewareData: r,
        placement: s,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: f,
        allowedPlacements: m = Et,
        autoAlignment: u = !0,
        ...p
      } = Y(t, e), g = f !== void 0 || m === Et ? re(f || null, u, m) : m, w = await ht(e, p), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, y = g[h];
      if (y == null)
        return {};
      const v = Dt(y, l, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (s !== y)
        return {
          reset: {
            placement: g[0]
          }
        };
      const b = [w[P(y)], w[v[0]], w[v[1]]], x = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: b
      }], D = g[h + 1];
      if (D)
        return {
          data: {
            index: h + 1,
            overflows: x
          },
          reset: {
            placement: D
          }
        };
      const O = x.map((E) => {
        const F = _(E.placement);
        return [E.placement, F && d ? (
          // Check along the mainAxis and main crossAxis side.
          E.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          E.overflows[0]
        ), E.overflows];
      }).sort((E, F) => E[1] - F[1]), V = ((i = O.filter((E) => E[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        _(E[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : i[0]) || O[0][0];
      return V !== s ? {
        data: {
          index: h + 1,
          overflows: x
        },
        reset: {
          placement: V
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
        middlewareData: l,
        rects: r,
        initialPlacement: s,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...w
      } = Y(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const h = P(i), y = j(s), v = P(s) === s, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = m || (v || !g ? [st(s)] : Qt(s)), D = p !== "none";
      !m && D && x.push(...ee(s, g, p, b));
      const O = [s, ...x], J = await ht(e, w), V = [];
      let E = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (d && V.push(J[h]), f) {
        const I = Dt(i, r, b);
        V.push(J[I[0]], J[I[1]]);
      }
      if (E = [...E, {
        placement: i,
        overflows: V
      }], !V.every((I) => I <= 0)) {
        var F, Q;
        const I = (((F = l.flip) == null ? void 0 : F.index) || 0) + 1, vt = O[I];
        if (vt)
          return {
            data: {
              index: I,
              overflows: E
            },
            reset: {
              placement: vt
            }
          };
        let G = (Q = E.filter(($) => $.overflows[0] <= 0).sort(($, k) => $.overflows[1] - k.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!G)
          switch (u) {
            case "bestFit": {
              var tt;
              const $ = (tt = E.filter((k) => {
                if (D) {
                  const B = j(k.placement);
                  return B === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  B === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((B) => B > 0).reduce((B, jt) => B + jt, 0)]).sort((k, B) => k[1] - B[1])[0]) == null ? void 0 : tt[0];
              $ && (G = $);
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
};
async function ce(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = P(n), s = _(n), a = j(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = l && a ? -1 : 1, f = Y(e, t);
  let {
    mainAxis: m,
    crossAxis: u,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && typeof p == "number" && (u = s === "end" ? p * -1 : p), a ? {
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
        y: l,
        placement: r,
        middlewareData: s
      } = e, a = await ce(e, t);
      return r === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: l + a.y,
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
        mainAxis: l = !0,
        crossAxis: r = !1,
        limiter: s = {
          fn: (w) => {
            let {
              x: h,
              y
            } = w;
            return {
              x: h,
              y
            };
          }
        },
        ...a
      } = Y(t, e), c = {
        x: n,
        y: o
      }, d = await ht(e, a), f = j(P(i)), m = Ot(f);
      let u = c[m], p = c[f];
      if (l) {
        const w = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", y = u + d[w], v = u - d[h];
        u = At(y, u, v);
      }
      if (r) {
        const w = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", y = p + d[w], v = p - d[h];
        p = At(y, p, v);
      }
      const g = s.fn({
        ...e,
        [m]: u,
        [f]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
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
function L(t) {
  var e;
  return (e = (Ft(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ft(t) {
  return ct() ? t instanceof Node || t instanceof A(t).Node : !1;
}
function S(t) {
  return ct() ? t instanceof Element || t instanceof A(t).Element : !1;
}
function R(t) {
  return ct() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : !1;
}
function Tt(t) {
  return !ct() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
}
function Z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = T(t);
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
  const e = gt(), n = S(t) ? T(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function de(t) {
  let e = H(t);
  for (; R(e) && !q(e); ) {
    if (pt(e))
      return e;
    if (at(e))
      return null;
    e = H(e);
  }
  return null;
}
function gt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function q(t) {
  return ["html", "body", "#document"].includes(K(t));
}
function T(t) {
  return A(t).getComputedStyle(t);
}
function ft(t) {
  return S(t) ? {
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
    Tt(t) && t.host || // Fallback.
    L(t)
  );
  return Tt(e) ? e.host : e;
}
function kt(t) {
  const e = H(t);
  return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : R(e) && Z(e) ? e : kt(e);
}
function X(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = kt(t), l = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (l) {
    const s = dt(r);
    return e.concat(r, r.visualViewport || [], Z(i) ? i : [], s && n ? X(s) : []);
  }
  return e.concat(i, X(i, [], n));
}
function dt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Bt(t) {
  const e = T(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = R(t), l = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, s = it(n) !== l || it(o) !== r;
  return s && (n = l, o = r), {
    width: n,
    height: o,
    $: s
  };
}
function wt(t) {
  return S(t) ? t : t.contextElement;
}
function W(t) {
  const e = wt(t);
  if (!R(e))
    return C(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: l
  } = Bt(e);
  let r = (l ? it(n.width) : n.width) / o, s = (l ? it(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: r,
    y: s
  };
}
const me = /* @__PURE__ */ C(0);
function Mt(t) {
  const e = A(t);
  return !gt() || !e.visualViewport ? me : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function he(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e;
}
function N(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = wt(t);
  let r = C(1);
  e && (o ? S(o) && (r = W(o)) : r = W(t));
  const s = he(l, n, o) ? Mt(l) : C(0);
  let a = (i.left + s.x) / r.x, c = (i.top + s.y) / r.y, d = i.width / r.x, f = i.height / r.y;
  if (l) {
    const m = A(l), u = o && S(o) ? A(o) : o;
    let p = m, g = dt(p);
    for (; g && o && u !== p; ) {
      const w = W(g), h = g.getBoundingClientRect(), y = T(g), v = h.left + (g.clientLeft + parseFloat(y.paddingLeft)) * w.x, b = h.top + (g.clientTop + parseFloat(y.paddingTop)) * w.y;
      a *= w.x, c *= w.y, d *= w.x, f *= w.y, a += v, c += b, p = A(g), g = dt(p);
    }
  }
  return lt({
    width: d,
    height: f,
    x: a,
    y: c
  });
}
function yt(t, e) {
  const n = ft(t).scrollLeft;
  return e ? e.left + n : N(L(t)).left + n;
}
function Ht(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    yt(t, o)
  )), l = o.top + e.scrollTop;
  return {
    x: i,
    y: l
  };
}
function pe(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const l = i === "fixed", r = L(o), s = e ? at(e.floating) : !1;
  if (o === r || s && l)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = C(1);
  const d = C(0), f = R(o);
  if ((f || !f && !l) && ((K(o) !== "body" || Z(r)) && (a = ft(o)), R(o))) {
    const u = N(o);
    c = W(o), d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
  }
  const m = r && !f && !l ? Ht(r, a, !0) : C(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + m.y
  };
}
function ge(t) {
  return Array.from(t.getClientRects());
}
function we(t) {
  const e = L(t), n = ft(t), o = t.ownerDocument.body, i = z(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = z(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + yt(t);
  const s = -n.scrollTop;
  return T(o).direction === "rtl" && (r += z(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: l,
    x: r,
    y: s
  };
}
function ye(t, e) {
  const n = A(t), o = L(t), i = n.visualViewport;
  let l = o.clientWidth, r = o.clientHeight, s = 0, a = 0;
  if (i) {
    l = i.width, r = i.height;
    const c = gt();
    (!c || c && e === "fixed") && (s = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: s,
    y: a
  };
}
function ve(t, e) {
  const n = N(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, l = R(t) ? W(t) : C(1), r = t.clientWidth * l.x, s = t.clientHeight * l.y, a = i * l.x, c = o * l.y;
  return {
    width: r,
    height: s,
    x: a,
    y: c
  };
}
function Ct(t, e, n) {
  let o;
  if (e === "viewport")
    o = ye(t, n);
  else if (e === "document")
    o = we(L(t));
  else if (S(e))
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
function Vt(t, e) {
  const n = H(t);
  return n === e || !S(n) || q(n) ? !1 : T(n).position === "fixed" || Vt(n, e);
}
function xe(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = X(t, [], !1).filter((s) => S(s) && K(s) !== "body"), i = null;
  const l = T(t).position === "fixed";
  let r = l ? H(t) : t;
  for (; S(r) && !q(r); ) {
    const s = T(r), a = pt(r);
    !a && s.position === "fixed" && (i = null), (l ? !a && !i : !a && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Z(r) && !a && Vt(t, r)) ? o = o.filter((d) => d !== r) : i = s, r = H(r);
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
  const r = [...n === "clippingAncestors" ? at(e) ? [] : xe(e, this._c) : [].concat(n), o], s = r[0], a = r.reduce((c, d) => {
    const f = Ct(e, d, i);
    return c.top = z(f.top, c.top), c.right = ot(f.right, c.right), c.bottom = ot(f.bottom, c.bottom), c.left = z(f.left, c.left), c;
  }, Ct(e, s, i));
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
  const o = R(e), i = L(e), l = n === "fixed", r = N(t, !0, l, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = C(0);
  if (o || !o && !l)
    if ((K(e) !== "body" || Z(i)) && (s = ft(e)), o) {
      const m = N(e, !0, l, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else i && (a.x = yt(i));
  const c = i && !o && !l ? Ht(i, s) : C(0), d = r.left + s.scrollLeft - a.x - c.x, f = r.top + s.scrollTop - a.y - c.y;
  return {
    x: d,
    y: f,
    width: r.width,
    height: r.height
  };
}
function ut(t) {
  return T(t).position === "static";
}
function Rt(t, e) {
  if (!R(t) || T(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return L(t) === n && (n = n.ownerDocument.body), n;
}
function It(t, e) {
  const n = A(t);
  if (at(t))
    return n;
  if (!R(t)) {
    let i = H(t);
    for (; i && !q(i); ) {
      if (S(i) && !ut(i))
        return i;
      i = H(i);
    }
    return n;
  }
  let o = Rt(t, e);
  for (; o && ue(o) && ut(o); )
    o = Rt(o, e);
  return o && q(o) && ut(o) && !pt(o) ? n : o || de(t) || n;
}
const Se = async function(t) {
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
function Te(t) {
  return T(t).direction === "rtl";
}
const Ce = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pe,
  getDocumentElement: L,
  getClippingRect: be,
  getOffsetParent: It,
  getElementRects: Se,
  getClientRects: ge,
  getDimensions: Ee,
  getScale: W,
  isElement: S,
  isRTL: Te
};
function zt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Re(t, e) {
  let n = null, o;
  const i = L(t);
  function l() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function r(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), l();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: f,
      width: m,
      height: u
    } = c;
    if (s || e(), !m || !u)
      return;
    const p = et(f), g = et(i.clientWidth - (d + m)), w = et(i.clientHeight - (f + u)), h = et(d), v = {
      rootMargin: -p + "px " + -g + "px " + -w + "px " + -h + "px",
      threshold: z(0, ot(1, a)) || 1
    };
    let b = !0;
    function x(D) {
      const O = D[0].intersectionRatio;
      if (O !== a) {
        if (!b)
          return r();
        O ? r(!1, O) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !zt(c, t.getBoundingClientRect()) && r(), b = !1;
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
function Nt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = wt(t), d = i || l ? [...c ? X(c) : [], ...X(e)] : [];
  d.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), l && h.addEventListener("resize", n);
  });
  const f = c && s ? Re(c, n) : null;
  let m = -1, u = null;
  r && (u = new ResizeObserver((h) => {
    let [y] = h;
    y && y.target === c && u && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), c && !a && u.observe(c), u.observe(e));
  let p, g = a ? N(t) : null;
  a && w();
  function w() {
    const h = N(t);
    g && !zt(g, h) && n(), g = h, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var h;
    d.forEach((y) => {
      i && y.removeEventListener("scroll", n), l && y.removeEventListener("resize", n);
    }), f?.(), (h = u) == null || h.disconnect(), u = null, a && cancelAnimationFrame(p);
  };
}
const $t = ae, Le = se, Ge = fe, Oe = le, Wt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ce,
    ...n
  }, l = {
    ...i.platform,
    _c: o
  };
  return ie(t, e, {
    ...i,
    platform: l
  });
}, M = {};
function _e() {
  document.addEventListener("keydown", (t) => {
    M[t.key] && M[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && _e();
const Pe = (t, e) => {
  M[t] ? M[t].push(e) : M[t] = [e];
}, Xe = (t, e) => {
  const n = M[t].indexOf(e);
  n !== -1 && M[t].splice(n, 1);
}, Ye = (t) => {
  delete M[t];
}, U = [];
Pe("Escape", () => {
  const t = U.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      U.push(t);
      return;
    }
    t.hide();
  }
});
function Ze() {
  console.debug(U);
}
function De(t) {
  function e() {
    return U.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 ? U.push(t) : console.warn("Already created esc controller");
    },
    destroy: () => {
      const n = e();
      n !== -1 && U.splice(n, 1);
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
}, Be = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: l, onInit: r }) => {
  const s = e || document.querySelector(t || "");
  if (!s)
    throw new Error("missing element to popover. Please check the parameters (selector or element)");
  const a = (f) => {
    f.target === s && (s.remove(), s.removeEventListener("transitionend", a));
  }, c = {
    get element() {
      return s;
    },
    show: () => {
      if (!s.classList.contains("is-visible"))
        return i && d.create(), l ? (l.appendChild(s), setTimeout(() => s.classList.add("is-visible"), 0)) : s.classList.add("is-visible"), nt[n].push(c), ke(n), c;
    },
    hide: () => (i && d.destroy(), s.classList.remove("is-visible"), s.style.removeProperty("z-index"), l && s.addEventListener("transitionend", a), nt[n] = nt[n].filter((f) => f !== c), document.activeElement && Me(s, document.activeElement), o?.(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, d = De(c);
  return r && r(s, c), l && s.isConnected && s.remove(), c;
};
function Me(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const Ut = 0;
function He(t) {
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
  He(t) || Wt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      $t(o),
      Oe()
    ]
  }).then(({ x: l, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${l}px`;
  });
});
class Ve {
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
const Ie = ["right-start", "right-end", "left-start", "left-end"], tn = (t) => new Ve({
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
  Ne as e,
  Oe as f,
  Gt as g,
  Qe as h,
  We as i,
  mt as j,
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
//# sourceMappingURL=floating-CqSaT-kJ.js.map
