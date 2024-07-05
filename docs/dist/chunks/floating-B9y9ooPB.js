const Mt = {
  // DatePicker
  "datePicker.minDate": /* @__PURE__ */ new Date("1970-01-01"),
  "datePicker.maxDate": /* @__PURE__ */ new Date("9999-12-31"),
  // Grid
  "grid.defaultFontSize": "13px",
  "grid.defaultFontFamily": "Pretendard",
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
  "tree-view.fontSize": "13px",
  "tree-view.fontFamily": "Pretendard",
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
class zt {
  constructor(e = { ...Mt }) {
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
const ct = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new zt()), t);
})();
function _e(t) {
  return ct().getStoreValue(t);
}
function Pe(...t) {
  const e = ct();
  return t.map((n) => e.getStoreValue(n));
}
function Nt(t) {
  const n = ct().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement))
    throw new Error(`Not found layer element '${n}'`);
  return o;
}
const F = {};
function $t() {
  document.addEventListener("keydown", (t) => {
    F[t.key] && F[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && $t();
const Wt = (t, e) => {
  F[t] ? F[t].push(e) : F[t] = [e];
}, De = (t, e) => {
  const n = F[t].indexOf(e);
  n !== -1 && F[t].splice(n, 1);
}, Fe = (t) => {
  delete F[t];
}, Y = [];
Wt("Escape", () => {
  var e;
  const t = Y.pop();
  t && ((e = t.onESC) == null || e.call(t), t.hide());
});
function Ut(t) {
  function e() {
    return Y.indexOf(t);
  }
  return {
    create: () => {
      if (e() === -1)
        Y.push(t);
      else
        throw new Error("Already created esc controller");
    },
    destroy: () => {
      const n = Y.indexOf(t);
      n !== -1 && Y.splice(n, 1);
    }
  };
}
const Xt = ["top", "right", "bottom", "left"], mt = ["start", "end"], ht = /* @__PURE__ */ Xt.reduce((t, e) => t.concat(e, e + "-" + mt[0], e + "-" + mt[1]), []), tt = Math.min, H = Math.max, et = Math.round, J = Math.floor, k = (t) => ({
  x: t,
  y: t
}), Kt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yt = {
  start: "end",
  end: "start"
};
function pt(t, e, n) {
  return H(t, tt(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function O(t) {
  return t.split("-")[0];
}
function C(t) {
  return t.split("-")[1];
}
function bt(t) {
  return t === "x" ? "y" : "x";
}
function Et(t) {
  return t === "y" ? "height" : "width";
}
function rt(t) {
  return ["top", "bottom"].includes(O(t)) ? "y" : "x";
}
function Tt(t) {
  return bt(rt(t));
}
function Lt(t, e, n) {
  n === void 0 && (n = !1);
  const o = C(t), i = Tt(t), r = Et(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ot(s)), [s, ot(s)];
}
function jt(t) {
  const e = ot(t);
  return [nt(t), e, nt(e)];
}
function nt(t) {
  return t.replace(/start|end/g, (e) => Yt[e]);
}
function qt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function Zt(t, e, n, o) {
  const i = C(t);
  let r = qt(O(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(nt)))), r;
}
function ot(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Kt[e]);
}
function Gt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Jt(t) {
  return typeof t != "number" ? Gt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function it(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function gt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = rt(e), s = Tt(e), l = Et(s), a = O(e), c = r === "y", u = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[l] / 2 - i[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: u,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (C(e)) {
    case "start":
      d[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const Qt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, l = r.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = gt(c, o, a), p = o, d = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: y,
      fn: h
    } = l[g], {
      x: w,
      y: x,
      data: b,
      reset: v
    } = await h({
      x: u,
      y: f,
      initialPlacement: o,
      placement: p,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = w ?? u, f = x ?? f, d = {
      ...d,
      [y]: {
        ...d[y],
        ...b
      }
    }, v && m <= 50 && (m++, typeof v == "object" && (v.placement && (p = v.placement), v.rects && (c = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: u,
      y: f
    } = gt(c, p, a)), g = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: i,
    middlewareData: d
  };
};
async function at(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = q(e, t), m = Jt(d), y = l[p ? f === "floating" ? "reference" : "floating" : f], h = it(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), w = f === "floating" ? {
    ...s.floating,
    x: o,
    y: i
  } : s.reference, x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), b = await (r.isElement == null ? void 0 : r.isElement(x)) ? await (r.getScale == null ? void 0 : r.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = it(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: x,
    strategy: a
  }) : w);
  return {
    top: (h.top - v.top + m.top) / b.y,
    bottom: (v.bottom - h.bottom + m.bottom) / b.y,
    left: (h.left - v.left + m.left) / b.x,
    right: (v.right - h.right + m.right) / b.x
  };
}
function te(t, e, n) {
  return (t ? [...n.filter((i) => C(i) === t), ...n.filter((i) => C(i) !== t)] : n.filter((i) => O(i) === i)).filter((i) => t ? C(i) === t || (e ? nt(i) !== i : !1) : !0);
}
const ee = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: r,
        middlewareData: s,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: u = !1,
        alignment: f,
        allowedPlacements: p = ht,
        autoAlignment: d = !0,
        ...m
      } = q(t, e), g = f !== void 0 || p === ht ? te(f || null, d, p) : p, y = await at(e, m), h = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, w = g[h];
      if (w == null)
        return {};
      const x = Lt(w, r, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const b = [y[O(w)], y[x[0]], y[x[1]]], v = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: b
      }], A = g[h + 1];
      if (A)
        return {
          data: {
            index: h + 1,
            overflows: v
          },
          reset: {
            placement: A
          }
        };
      const V = v.map((E) => {
        const D = C(E.placement);
        return [E.placement, D && u ? (
          // Check along the mainAxis and main crossAxis side.
          E.overflows.slice(0, 2).reduce((S, G) => S + G, 0)
        ) : (
          // Check only the mainAxis.
          E.overflows[0]
        ), E.overflows];
      }).sort((E, D) => E[1] - D[1]), U = ((i = V.filter((E) => E[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        C(E[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : i[0]) || V[0][0];
      return U !== l ? {
        data: {
          index: h + 1,
          overflows: v
        },
        reset: {
          placement: U
        }
      } : {};
    }
  };
}, ne = function(t) {
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
        platform: a,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const h = O(i), w = O(l) === l, x = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), b = p || (w || !g ? [ot(l)] : jt(l));
      !p && m !== "none" && b.push(...Zt(l, g, m, x));
      const v = [l, ...b], A = await at(e, y), V = [];
      let M = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (u && V.push(A[h]), f) {
        const S = Lt(i, s, x);
        V.push(A[S[0]], A[S[1]]);
      }
      if (M = [...M, {
        placement: i,
        overflows: V
      }], !V.every((S) => S <= 0)) {
        var U, E;
        const S = (((U = r.flip) == null ? void 0 : U.index) || 0) + 1, G = v[S];
        if (G)
          return {
            data: {
              index: S,
              overflows: M
            },
            reset: {
              placement: G
            }
          };
        let X = (E = M.filter((z) => z.overflows[0] <= 0).sort((z, N) => z.overflows[1] - N.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!X)
          switch (d) {
            case "bestFit": {
              var D;
              const z = (D = M.map((N) => [N.placement, N.overflows.filter((K) => K > 0).reduce((K, It) => K + It, 0)]).sort((N, K) => N[1] - K[1])[0]) == null ? void 0 : D[0];
              z && (X = z);
              break;
            }
            case "initialPlacement":
              X = l;
              break;
          }
        if (i !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
async function oe(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = O(n), l = C(n), a = rt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = r && a ? -1 : 1, f = q(e, t);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: m
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
  return l && typeof m == "number" && (d = l === "end" ? m * -1 : m), a ? {
    x: d * u,
    y: p * c
  } : {
    x: p * c,
    y: d * u
  };
}
const At = function(t) {
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
      } = e, a = await oe(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, ie = function(t) {
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
      } = q(t, e), c = {
        x: n,
        y: o
      }, u = await at(e, a), f = rt(O(i)), p = bt(f);
      let d = c[p], m = c[f];
      if (r) {
        const y = p === "y" ? "top" : "left", h = p === "y" ? "bottom" : "right", w = d + u[y], x = d - u[h];
        d = pt(w, d, x);
      }
      if (s) {
        const y = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", w = m + u[y], x = m - u[h];
        m = pt(w, m, x);
      }
      const g = l.fn({
        ...e,
        [p]: d,
        [f]: m
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
function B(t) {
  return Rt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function T(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function P(t) {
  var e;
  return (e = (Rt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Rt(t) {
  return t instanceof Node || t instanceof T(t).Node;
}
function _(t) {
  return t instanceof Element || t instanceof T(t).Element;
}
function R(t) {
  return t instanceof HTMLElement || t instanceof T(t).HTMLElement;
}
function wt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof T(t).ShadowRoot;
}
function Z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = L(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function re(t) {
  return ["table", "td", "th"].includes(B(t));
}
function ft(t) {
  const e = ut(), n = L(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function St(t) {
  let e = W(t);
  for (; R(e) && !st(e); ) {
    if (ft(e))
      return e;
    e = W(e);
  }
  return null;
}
function ut() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function st(t) {
  return ["html", "body", "#document"].includes(B(t));
}
function L(t) {
  return T(t).getComputedStyle(t);
}
function lt(t) {
  return _(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function W(t) {
  if (B(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    wt(t) && t.host || // Fallback.
    P(t)
  );
  return wt(e) ? e.host : e;
}
function Ct(t) {
  const e = W(t);
  return st(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : R(e) && Z(e) ? e : Ct(e);
}
function j(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Ct(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = T(i);
  return r ? e.concat(s, s.visualViewport || [], Z(i) ? i : [], s.frameElement && n ? j(s.frameElement) : []) : e.concat(i, j(i, [], n));
}
function Ot(t) {
  const e = L(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = R(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = et(n) !== r || et(o) !== s;
  return l && (n = r, o = s), {
    width: n,
    height: o,
    $: l
  };
}
function dt(t) {
  return _(t) ? t : t.contextElement;
}
function $(t) {
  const e = dt(t);
  if (!R(e))
    return k(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Ot(e);
  let s = (r ? et(n.width) : n.width) / o, l = (r ? et(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const se = /* @__PURE__ */ k(0);
function _t(t) {
  const e = T(t);
  return !ut() || !e.visualViewport ? se : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function le(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== T(t) ? !1 : e;
}
function I(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = dt(t);
  let s = k(1);
  e && (o ? _(o) && (s = $(o)) : s = $(t));
  const l = le(r, n, o) ? _t(r) : k(0);
  let a = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, u = i.width / s.x, f = i.height / s.y;
  if (r) {
    const p = T(r), d = o && _(o) ? T(o) : o;
    let m = p.frameElement;
    for (; m && o && d !== p; ) {
      const g = $(m), y = m.getBoundingClientRect(), h = L(m), w = y.left + (m.clientLeft + parseFloat(h.paddingLeft)) * g.x, x = y.top + (m.clientTop + parseFloat(h.paddingTop)) * g.y;
      a *= g.x, c *= g.y, u *= g.x, f *= g.y, a += w, c += x, m = T(m).frameElement;
    }
  }
  return it({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
const ce = [":popover-open", ":modal"];
function Pt(t) {
  let e = !1, n = 0, o = 0;
  function i(r) {
    try {
      e = e || t.matches(r);
    } catch {
    }
  }
  if (ce.forEach((r) => {
    i(r);
  }), e) {
    const r = St(t);
    if (r) {
      const s = r.getBoundingClientRect();
      n = s.x, o = s.y;
    }
  }
  return [e, n, o];
}
function ae(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = P(o), [s] = e ? Pt(e.floating) : [!1];
  if (o === r || s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = k(1);
  const c = k(0), u = R(o);
  if ((u || !u && i !== "fixed") && ((B(o) !== "body" || Z(r)) && (l = lt(o)), R(o))) {
    const f = I(o);
    a = $(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + c.x,
    y: n.y * a.y - l.scrollTop * a.y + c.y
  };
}
function fe(t) {
  return Array.from(t.getClientRects());
}
function Dt(t) {
  return I(P(t)).left + lt(t).scrollLeft;
}
function ue(t) {
  const e = P(t), n = lt(t), o = t.ownerDocument.body, i = H(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = H(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Dt(t);
  const l = -n.scrollTop;
  return L(o).direction === "rtl" && (s += H(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: l
  };
}
function de(t, e) {
  const n = T(t), o = P(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
  if (i) {
    r = i.width, s = i.height;
    const c = ut();
    (!c || c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: l,
    y: a
  };
}
function me(t, e) {
  const n = I(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = R(t) ? $(t) : k(1), s = t.clientWidth * r.x, l = t.clientHeight * r.y, a = i * r.x, c = o * r.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function yt(t, e, n) {
  let o;
  if (e === "viewport")
    o = de(t, n);
  else if (e === "document")
    o = ue(P(t));
  else if (_(e))
    o = me(e, n);
  else {
    const i = _t(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return it(o);
}
function Ft(t, e) {
  const n = W(t);
  return n === e || !_(n) || st(n) ? !1 : L(n).position === "fixed" || Ft(n, e);
}
function he(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = j(t, [], !1).filter((l) => _(l) && B(l) !== "body"), i = null;
  const r = L(t).position === "fixed";
  let s = r ? W(t) : t;
  for (; _(s) && !st(s); ) {
    const l = L(s), a = ft(s);
    !a && l.position === "fixed" && (i = null), (r ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Z(s) && !a && Ft(t, s)) ? o = o.filter((u) => u !== s) : i = l, s = W(s);
  }
  return e.set(t, o), o;
}
function pe(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? he(e, this._c) : [].concat(n), o], l = s[0], a = s.reduce((c, u) => {
    const f = yt(e, u, i);
    return c.top = H(f.top, c.top), c.right = tt(f.right, c.right), c.bottom = tt(f.bottom, c.bottom), c.left = H(f.left, c.left), c;
  }, yt(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ge(t) {
  const {
    width: e,
    height: n
  } = Ot(t);
  return {
    width: e,
    height: n
  };
}
function we(t, e, n, o) {
  const i = R(e), r = P(e), s = n === "fixed", l = I(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = k(0);
  if (i || !i && !s)
    if ((B(e) !== "body" || Z(r)) && (a = lt(e)), i) {
      const g = I(e, !0, s, e);
      c.x = g.x + e.clientLeft, c.y = g.y + e.clientTop;
    } else
      r && (c.x = Dt(r));
  let u = l.left + a.scrollLeft - c.x, f = l.top + a.scrollTop - c.y;
  const [p, d, m] = Pt(o);
  return p && (u += d, f += m, i && (u += e.clientLeft, f += e.clientTop)), {
    x: u,
    y: f,
    width: l.width,
    height: l.height
  };
}
function xt(t, e) {
  return !R(t) || L(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function kt(t, e) {
  const n = T(t);
  if (!R(t))
    return n;
  let o = xt(t, e);
  for (; o && re(o) && L(o).position === "static"; )
    o = xt(o, e);
  return o && (B(o) === "html" || B(o) === "body" && L(o).position === "static" && !ft(o)) ? n : o || St(t) || n;
}
const ye = async function(t) {
  const e = this.getOffsetParent || kt, n = this.getDimensions;
  return {
    reference: we(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await n(t.floating)
    }
  };
};
function xe(t) {
  return L(t).direction === "rtl";
}
const ve = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ae,
  getDocumentElement: P,
  getClippingRect: pe,
  getOffsetParent: kt,
  getElementRects: ye,
  getClientRects: fe,
  getDimensions: ge,
  getScale: $,
  isElement: _,
  isRTL: xe
};
function be(t, e) {
  let n = null, o;
  const i = P(t);
  function r() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), r();
    const {
      left: c,
      top: u,
      width: f,
      height: p
    } = t.getBoundingClientRect();
    if (l || e(), !f || !p)
      return;
    const d = J(u), m = J(i.clientWidth - (c + f)), g = J(i.clientHeight - (u + p)), y = J(c), w = {
      rootMargin: -d + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: H(0, tt(1, a)) || 1
    };
    let x = !0;
    function b(v) {
      const A = v[0].intersectionRatio;
      if (A !== a) {
        if (!x)
          return s();
        A ? s(!1, A) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      x = !1;
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
  return s(!0), r;
}
function Bt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = dt(t), u = i || r ? [...c ? j(c) : [], ...j(e)] : [];
  u.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), r && h.addEventListener("resize", n);
  });
  const f = c && l ? be(c, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === c && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = d) == null || x.observe(e);
    })), n();
  }), c && !a && d.observe(c), d.observe(e));
  let m, g = a ? I(t) : null;
  a && y();
  function y() {
    const h = I(t);
    g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && n(), g = h, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var h;
    u.forEach((w) => {
      i && w.removeEventListener("scroll", n), r && w.removeEventListener("resize", n);
    }), f == null || f(), (h = d) == null || h.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const Ee = ee, ke = ie, Te = ne, Vt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ve,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Qt(t, e, {
    ...i,
    platform: r
  });
}, Q = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, vt = 100, Le = (t, e) => {
  if (e >= vt)
    throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * vt})`;
}, Ae = (t) => {
  Q[t].forEach((e, n) => e.element.style.zIndex = Le(t, n));
}, Re = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: r, onInit: s }) => {
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
        return i && u.create(), r ? (r.appendChild(l), setTimeout(() => l.classList.add("is-visible"), 0)) : l.classList.add("is-visible"), Q[n].push(c), Ae(n), c;
    },
    hide: () => (i && u.destroy(), l.classList.remove("is-visible"), l.style.removeProperty("z-index"), r && l.addEventListener("transitionend", a), Q[n] = Q[n].filter((f) => f !== c), o && o(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, u = Ut(c);
  return s && s(l, c), r && l.isConnected && l.remove(), c;
}, Ht = 8;
function Se(t, e) {
  if (!t.isConnected)
    return !0;
  let n = t;
  for (; n; ) {
    if (n.style.display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
const Be = (t, e) => ({
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
}), Ve = (t, e, n = "bottom", o = Ht) => Bt(t, e, () => {
  Se(t) || Vt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      At(o),
      Te()
    ]
  }).then(({ x: r, y: s }) => {
    e.style.top = `${s}px`, e.style.left = `${r}px`;
  });
});
class Ce {
  constructor(e) {
    this.args = e, this._visible = !1, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = Re({
      type: "popover",
      parentElement: Nt("popover"),
      element: this._cachedElement,
      onESC: () => {
        this._visible = !1;
      }
    });
  }
  get cachedElement() {
    return this._cachedElement;
  }
  _computePosition() {
    Vt(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        At(this.args.offset),
        Ee({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = Bt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
  }
  hide() {
    var e;
    this._visible && (this._visible = !1, this._popoverHandler.hide(), (e = this._cleanup) == null || e.call(this), this._cleanup = void 0);
  }
  destroy() {
    this.hide();
  }
  get isVisible() {
    return this._visible;
  }
}
const Oe = ["right-start", "right-end", "left-start", "left-end"], He = (t) => new Ce({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? Ht,
  autoPlacement: t.autoPlacement ?? Oe,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  Be as a,
  Vt as b,
  Ut as c,
  At as d,
  _e as e,
  Te as f,
  Nt as g,
  Pe as h,
  ct as i,
  Re as j,
  Fe as k,
  He as l,
  Bt as m,
  Ve as o,
  Wt as r,
  ke as s,
  De as u
};
//# sourceMappingURL=floating-B9y9ooPB.js.map
