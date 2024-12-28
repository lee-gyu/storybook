import { F as xt } from "./css-D8WWZA3p.js";
const jt = {
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
class qt {
  constructor(e = { ...jt }) {
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
  return () => (t || (t = new qt()), t);
})();
function ze(t) {
  return mt().getStoreValue(t);
}
function Ne(...t) {
  const e = mt();
  return t.map((n) => e.getStoreValue(n));
}
function Kt(t) {
  const n = mt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
function $e(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function Gt(t) {
  return (e) => e.matches(t);
}
function We(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? Gt(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function Ue(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function je({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: l }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([s, a]) => r.setAttribute(s, a)), l && (r.textContent = l), o && o.forEach((s) => r.append(s.element)), {
    element: r,
    children: o ?? [],
    append(...s) {
      return s && this.element.append(...s), this;
    }
  };
}
function qe(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const Xt = ["top", "right", "bottom", "left"], bt = ["start", "end"], Et = /* @__PURE__ */ Xt.reduce((t, e) => t.concat(e, e + "-" + bt[0], e + "-" + bt[1]), []), ot = Math.min, I = Math.max, it = Math.round, et = Math.floor, C = (t) => ({
  x: t,
  y: t
}), Yt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zt = {
  start: "end",
  end: "start"
};
function At(t, e, n) {
  return I(t, ot(e, n));
}
function X(t, e) {
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
function U(t) {
  return ["top", "bottom"].includes(P(t)) ? "y" : "x";
}
function Pt(t) {
  return Ot(U(t));
}
function Dt(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), i = Pt(t), l = _t(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = st(r)), [r, st(r)];
}
function Jt(t) {
  const e = st(t);
  return [rt(t), e, rt(e)];
}
function rt(t) {
  return t.replace(/start|end/g, (e) => Zt[e]);
}
function Qt(t, e, n) {
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
function te(t, e, n, o) {
  const i = _(t);
  let l = Qt(P(t), n === "start", o);
  return i && (l = l.map((r) => r + "-" + i), e && (l = l.concat(l.map(rt)))), l;
}
function st(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Yt[e]);
}
function ee(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ne(t) {
  return typeof t != "number" ? ee(t) : {
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
  const l = U(e), r = Pt(e), s = _t(r), a = P(e), c = l === "y", d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, m = o[s] / 2 - i[s] / 2;
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
const oe = async (t, e, n) => {
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
  } = St(c, o, a), m = o, u = {}, g = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: y,
      fn: h
    } = s[p], {
      x: w,
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
    d = w ?? d, f = v ?? f, u = {
      ...u,
      [y]: {
        ...u[y],
        ...b
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: d,
      y: f
    } = St(c, m, a)), p = -1);
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
  } = X(e, t), g = ne(u), y = s[m ? f === "floating" ? "reference" : "floating" : f], h = lt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(y))) == null || n ? y : y.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), w = f === "floating" ? {
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
    rect: w,
    offsetParent: v,
    strategy: a
  }) : w);
  return {
    top: (h.top - x.top + g.top) / b.y,
    bottom: (x.bottom - h.bottom + g.bottom) / b.y,
    left: (h.left - x.left + g.left) / b.x,
    right: (x.right - h.right + g.right) / b.x
  };
}
function ie(t, e, n) {
  return (t ? [...n.filter((i) => _(i) === t), ...n.filter((i) => _(i) !== t)] : n.filter((i) => P(i) === i)).filter((i) => t ? _(i) === t || (e ? rt(i) !== i : !1) : !0);
}
const re = function(t) {
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
        ...g
      } = X(t, e), p = f !== void 0 || m === Et ? ie(f || null, u, m) : m, y = await ht(e, g), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = p[h];
      if (w == null)
        return {};
      const v = Dt(w, l, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (s !== w)
        return {
          reset: {
            placement: p[0]
          }
        };
      const b = [y[P(w)], y[v[0]], y[v[1]]], x = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: b
      }], O = p[h + 1];
      if (O)
        return {
          data: {
            index: h + 1,
            overflows: x
          },
          reset: {
            placement: O
          }
        };
      const Z = x.map((E) => {
        const D = _(E.placement);
        return [E.placement, D && d ? (
          // Check along the mainAxis and main crossAxis side.
          E.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          E.overflows[0]
        ), E.overflows];
      }).sort((E, D) => E[1] - D[1]), M = ((i = Z.filter((E) => E[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        _(E[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : i[0]) || Z[0][0];
      return M !== s ? {
        data: {
          index: h + 1,
          overflows: x
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, se = function(t) {
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
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...y
      } = X(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const h = P(i), w = U(s), v = P(s) === s, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = m || (v || !p ? [st(s)] : Jt(s)), O = g !== "none";
      !m && O && x.push(...te(s, p, g, b));
      const Z = [s, ...x], J = await ht(e, y), M = [];
      let E = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (d && M.push(J[h]), f) {
        const V = Dt(i, r, b);
        M.push(J[V[0]], J[V[1]]);
      }
      if (E = [...E, {
        placement: i,
        overflows: M
      }], !M.every((V) => V <= 0)) {
        var D, Q;
        const V = (((D = l.flip) == null ? void 0 : D.index) || 0) + 1, vt = Z[V];
        if (vt)
          return {
            data: {
              index: V,
              overflows: E
            },
            reset: {
              placement: vt
            }
          };
        let K = (Q = E.filter((N) => N.overflows[0] <= 0).sort((N, F) => N.overflows[1] - F.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!K)
          switch (u) {
            case "bestFit": {
              var tt;
              const N = (tt = E.filter((F) => {
                if (O) {
                  const k = U(F.placement);
                  return k === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((k) => k > 0).reduce((k, Ut) => k + Ut, 0)]).sort((F, k) => F[1] - k[1])[0]) == null ? void 0 : tt[0];
              N && (K = N);
              break;
            }
            case "initialPlacement":
              K = s;
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
};
async function le(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = P(n), s = _(n), a = U(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = l && a ? -1 : 1, f = X(e, t);
  let {
    mainAxis: m,
    crossAxis: u,
    alignmentAxis: g
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
  return s && typeof g == "number" && (u = s === "end" ? g * -1 : g), a ? {
    x: u * d,
    y: m * c
  } : {
    x: m * c,
    y: u * d
  };
}
const ce = function(t) {
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
      } = e, a = await le(e, t);
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
}, ae = function(t) {
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
        ...a
      } = X(t, e), c = {
        x: n,
        y: o
      }, d = await ht(e, a), f = U(P(i)), m = Ot(f);
      let u = c[m], g = c[f];
      if (l) {
        const y = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = u + d[y], v = u - d[h];
        u = At(w, u, v);
      }
      if (r) {
        const y = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", w = g + d[y], v = g - d[h];
        g = At(w, g, v);
      }
      const p = s.fn({
        ...e,
        [m]: u,
        [f]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
};
function ct() {
  return typeof window < "u";
}
function q(t) {
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
function Y(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = T(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function fe(t) {
  return ["table", "td", "th"].includes(q(t));
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
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ue(t) {
  let e = H(t);
  for (; R(e) && !j(e); ) {
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
function j(t) {
  return ["html", "body", "#document"].includes(q(t));
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
  if (q(t) === "html")
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
  return j(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : R(e) && Y(e) ? e : kt(e);
}
function G(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = kt(t), l = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (l) {
    const s = dt(r);
    return e.concat(r, r.visualViewport || [], Y(i) ? i : [], s && n ? G(s) : []);
  }
  return e.concat(i, G(i, [], n));
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
function $(t) {
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
const de = /* @__PURE__ */ C(0);
function Ht(t) {
  const e = A(t);
  return !gt() || !e.visualViewport ? de : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function me(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e;
}
function z(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = wt(t);
  let r = C(1);
  e && (o ? S(o) && (r = $(o)) : r = $(t));
  const s = me(l, n, o) ? Ht(l) : C(0);
  let a = (i.left + s.x) / r.x, c = (i.top + s.y) / r.y, d = i.width / r.x, f = i.height / r.y;
  if (l) {
    const m = A(l), u = o && S(o) ? A(o) : o;
    let g = m, p = dt(g);
    for (; p && o && u !== g; ) {
      const y = $(p), h = p.getBoundingClientRect(), w = T(p), v = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, b = h.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      a *= y.x, c *= y.y, d *= y.x, f *= y.y, a += v, c += b, g = A(p), p = dt(g);
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
  return e ? e.left + n : z(L(t)).left + n;
}
function Mt(t, e, n) {
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
function he(t) {
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
  if ((f || !f && !l) && ((q(o) !== "body" || Y(r)) && (a = ft(o)), R(o))) {
    const u = z(o);
    c = $(o), d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
  }
  const m = r && !f && !l ? Mt(r, a, !0) : C(0);
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
function ge(t) {
  const e = L(t), n = ft(t), o = t.ownerDocument.body, i = I(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = I(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + yt(t);
  const s = -n.scrollTop;
  return T(o).direction === "rtl" && (r += I(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: l,
    x: r,
    y: s
  };
}
function we(t, e) {
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
function ye(t, e) {
  const n = z(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, l = R(t) ? $(t) : C(1), r = t.clientWidth * l.x, s = t.clientHeight * l.y, a = i * l.x, c = o * l.y;
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
    o = we(t, n);
  else if (e === "document")
    o = ge(L(t));
  else if (S(e))
    o = ye(e, n);
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
function Vt(t, e) {
  const n = H(t);
  return n === e || !S(n) || j(n) ? !1 : T(n).position === "fixed" || Vt(n, e);
}
function ve(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = G(t, [], !1).filter((s) => S(s) && q(s) !== "body"), i = null;
  const l = T(t).position === "fixed";
  let r = l ? H(t) : t;
  for (; S(r) && !j(r); ) {
    const s = T(r), a = pt(r);
    !a && s.position === "fixed" && (i = null), (l ? !a && !i : !a && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Y(r) && !a && Vt(t, r)) ? o = o.filter((d) => d !== r) : i = s, r = H(r);
  }
  return e.set(t, o), o;
}
function xe(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? at(e) ? [] : ve(e, this._c) : [].concat(n), o], s = r[0], a = r.reduce((c, d) => {
    const f = Ct(e, d, i);
    return c.top = I(f.top, c.top), c.right = ot(f.right, c.right), c.bottom = ot(f.bottom, c.bottom), c.left = I(f.left, c.left), c;
  }, Ct(e, s, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function be(t) {
  const {
    width: e,
    height: n
  } = Bt(t);
  return {
    width: e,
    height: n
  };
}
function Ee(t, e, n) {
  const o = R(e), i = L(e), l = n === "fixed", r = z(t, !0, l, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = C(0);
  if (o || !o && !l)
    if ((q(e) !== "body" || Y(i)) && (s = ft(e)), o) {
      const m = z(e, !0, l, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else i && (a.x = yt(i));
  const c = i && !o && !l ? Mt(i, s) : C(0), d = r.left + s.scrollLeft - a.x - c.x, f = r.top + s.scrollTop - a.y - c.y;
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
    for (; i && !j(i); ) {
      if (S(i) && !ut(i))
        return i;
      i = H(i);
    }
    return n;
  }
  let o = Rt(t, e);
  for (; o && fe(o) && ut(o); )
    o = Rt(o, e);
  return o && j(o) && ut(o) && !pt(o) ? n : o || ue(t) || n;
}
const Ae = async function(t) {
  const e = this.getOffsetParent || It, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Ee(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Se(t) {
  return T(t).direction === "rtl";
}
const Te = {
  convertOffsetParentRelativeRectToViewportRelativeRect: he,
  getDocumentElement: L,
  getClippingRect: xe,
  getOffsetParent: It,
  getElementRects: Ae,
  getClientRects: pe,
  getDimensions: be,
  getScale: $,
  isElement: S,
  isRTL: Se
};
function Ce(t, e) {
  let n = null, o;
  const i = L(t);
  function l() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function r(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), l();
    const {
      left: c,
      top: d,
      width: f,
      height: m
    } = t.getBoundingClientRect();
    if (s || e(), !f || !m)
      return;
    const u = et(d), g = et(i.clientWidth - (c + f)), p = et(i.clientHeight - (d + m)), y = et(c), w = {
      rootMargin: -u + "px " + -g + "px " + -p + "px " + -y + "px",
      threshold: I(0, ot(1, a)) || 1
    };
    let v = !0;
    function b(x) {
      const O = x[0].intersectionRatio;
      if (O !== a) {
        if (!v)
          return r();
        O ? r(!1, O) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, w);
    }
    n.observe(t);
  }
  return r(!0), l;
}
function zt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = wt(t), d = i || l ? [...c ? G(c) : [], ...G(e)] : [];
  d.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), l && h.addEventListener("resize", n);
  });
  const f = c && s ? Ce(c, n) : null;
  let m = -1, u = null;
  r && (u = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === c && u && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), c && !a && u.observe(c), u.observe(e));
  let g, p = a ? z(t) : null;
  a && y();
  function y() {
    const h = z(t);
    p && (h.x !== p.x || h.y !== p.y || h.width !== p.width || h.height !== p.height) && n(), p = h, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var h;
    d.forEach((w) => {
      i && w.removeEventListener("scroll", n), l && w.removeEventListener("resize", n);
    }), f?.(), (h = u) == null || h.disconnect(), u = null, a && cancelAnimationFrame(g);
  };
}
const Nt = ce, Re = re, Ke = ae, Le = se, $t = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Te,
    ...n
  }, l = {
    ...i.platform,
    _c: o
  };
  return oe(t, e, {
    ...i,
    platform: l
  });
}, B = {};
function Oe() {
  document.addEventListener("keydown", (t) => {
    B[t.key] && B[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && Oe();
const _e = (t, e) => {
  B[t] ? B[t].push(e) : B[t] = [e];
}, Ge = (t, e) => {
  const n = B[t].indexOf(e);
  n !== -1 && B[t].splice(n, 1);
}, Xe = (t) => {
  delete B[t];
}, W = [];
_e("Escape", () => {
  const t = W.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      W.push(t);
      return;
    }
    t.hide();
  }
});
function Ye() {
  console.debug(W);
}
function Pe(t) {
  function e() {
    return W.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 ? W.push(t) : console.warn("Already created esc controller");
    },
    destroy: () => {
      const n = e();
      n !== -1 && W.splice(n, 1);
    }
  };
}
const nt = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Lt = 100, De = (t, e) => {
  if (e >= Lt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Lt})`;
}, Fe = (t) => {
  nt[t].forEach((e, n) => e.element.style.zIndex = De(t, n));
}, ke = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: l, onInit: r }) => {
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
        return i && d.create(), l ? (l.appendChild(s), setTimeout(() => s.classList.add("is-visible"), 0)) : s.classList.add("is-visible"), nt[n].push(c), Fe(n), c;
    },
    hide: () => (i && d.destroy(), s.classList.remove("is-visible"), s.style.removeProperty("z-index"), l && s.addEventListener("transitionend", a), nt[n] = nt[n].filter((f) => f !== c), document.activeElement && Be(s, document.activeElement), o?.(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, d = Pe(c);
  return r && r(s, c), l && s.isConnected && s.remove(), c;
};
function Be(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const Wt = 0;
function He(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const Ze = (t, e) => ({
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
}), Je = (t, e, n = "bottom", o = Wt) => zt(t, e, () => {
  He(t) || $t(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      Nt(o),
      Le()
    ]
  }).then(({ x: l, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${l}px`;
  });
});
class Me {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = ke({
      type: "popover",
      parentElement: Kt("popover"),
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
    $t(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        Nt(this.args.offset),
        Re({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = zt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
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
const Ve = ["right-start", "right-end", "left-start", "left-end"], Qe = (t) => new Me({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? Wt,
  autoPlacement: t.autoPlacement ?? Ve,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  je as a,
  Pe as b,
  $t as c,
  Ze as d,
  Je as e,
  Le as f,
  Kt as g,
  ze as h,
  $e as i,
  We as j,
  qe as k,
  Ne as l,
  mt as m,
  ke as n,
  Nt as o,
  Xe as p,
  Ye as q,
  _e as r,
  Ke as s,
  Qe as t,
  Ge as u,
  Ue as v
};
//# sourceMappingURL=floating-BiWR08NB.js.map
