const $t = {
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
class Wt {
  constructor(e = { ...$t }) {
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
const dt = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new Wt()), t);
})();
function He(t) {
  return dt().getStoreValue(t);
}
function Me(...t) {
  const e = dt();
  return t.map((n) => e.getStoreValue(n));
}
function Ut(t) {
  const n = dt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
function Ve(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function jt(t) {
  return (e) => e.matches(t);
}
function Be(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? jt(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function Ie(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function ze({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: l }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([s, a]) => r.setAttribute(s, a)), l && (r.textContent = l), o && o.forEach((s) => r.append(s.element)), {
    element: r,
    children: o ?? [],
    append(...s) {
      return s && this.element.append(...s), this;
    }
  };
}
function Ne(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const k = {};
function qt() {
  document.addEventListener("keydown", (t) => {
    k[t.key] && k[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && qt();
const Xt = (t, e) => {
  k[t] ? k[t].push(e) : k[t] = [e];
}, $e = (t, e) => {
  const n = k[t].indexOf(e);
  n !== -1 && k[t].splice(n, 1);
}, We = (t) => {
  delete k[t];
}, X = [];
Xt("Escape", () => {
  const t = X.pop();
  t && (t.onESC?.call(t), t.hide());
});
function Ue() {
  console.debug(X);
}
function Kt(t) {
  function e() {
    return X.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 ? X.push(t) : console.warn("Already created esc controller");
    },
    destroy: () => {
      const n = e();
      n !== -1 && X.splice(n, 1);
    }
  };
}
const Gt = ["top", "right", "bottom", "left"], vt = ["start", "end"], yt = /* @__PURE__ */ Gt.reduce((t, e) => t.concat(e, e + "-" + vt[0], e + "-" + vt[1]), []), ot = Math.min, I = Math.max, it = Math.round, et = Math.floor, H = (t) => ({
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
function xt(t, e, n) {
  return I(t, ot(e, n));
}
function G(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function O(t) {
  return t.split("-")[0];
}
function L(t) {
  return t.split("-")[1];
}
function Ct(t) {
  return t === "x" ? "y" : "x";
}
function Rt(t) {
  return t === "y" ? "height" : "width";
}
function W(t) {
  return ["top", "bottom"].includes(O(t)) ? "y" : "x";
}
function Lt(t) {
  return Ct(W(t));
}
function Ot(t, e, n) {
  n === void 0 && (n = !1);
  const o = L(t), i = Lt(t), l = Rt(i);
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
  const i = L(t);
  let l = Qt(O(t), n === "start", o);
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
function bt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const l = W(e), r = Lt(e), s = Rt(r), a = O(e), c = l === "y", u = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, h = o[s] / 2 - i[s] / 2;
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
  switch (L(e)) {
    case "start":
      d[r] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[r] += h * (n && c ? -1 : 1);
      break;
  }
  return d;
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
    x: u,
    y: f
  } = bt(c, o, a), h = o, d = {}, g = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: v,
      fn: m
    } = s[p], {
      x: w,
      y,
      data: b,
      reset: x
    } = await m({
      x: u,
      y: f,
      initialPlacement: o,
      placement: h,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = w ?? u, f = y ?? f, d = {
      ...d,
      [v]: {
        ...d[v],
        ...b
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : x.rects), {
      x: u,
      y: f
    } = bt(c, h, a)), p = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: d
  };
};
async function mt(t, e) {
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
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = G(e, t), g = ne(d), v = s[h ? f === "floating" ? "reference" : "floating" : f], m = lt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), w = f === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, y = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), b = await (l.isElement == null ? void 0 : l.isElement(y)) ? await (l.getScale == null ? void 0 : l.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = lt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: y,
    strategy: a
  }) : w);
  return {
    top: (m.top - x.top + g.top) / b.y,
    bottom: (x.bottom - m.bottom + g.bottom) / b.y,
    left: (m.left - x.left + g.left) / b.x,
    right: (x.right - m.right + g.right) / b.x
  };
}
function ie(t, e, n) {
  return (t ? [...n.filter((i) => L(i) === t), ...n.filter((i) => L(i) !== t)] : n.filter((i) => O(i) === i)).filter((i) => t ? L(i) === t || (e ? rt(i) !== i : !1) : !0);
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
        crossAxis: u = !1,
        alignment: f,
        allowedPlacements: h = yt,
        autoAlignment: d = !0,
        ...g
      } = G(t, e), p = f !== void 0 || h === yt ? ie(f || null, d, h) : h, v = await mt(e, g), m = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = p[m];
      if (w == null)
        return {};
      const y = Ot(w, l, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (s !== w)
        return {
          reset: {
            placement: p[0]
          }
        };
      const b = [v[O(w)], v[y[0]], v[y[1]]], x = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: b
      }], R = p[m + 1];
      if (R)
        return {
          data: {
            index: m + 1,
            overflows: x
          },
          reset: {
            placement: R
          }
        };
      const Z = x.map((E) => {
        const _ = L(E.placement);
        return [E.placement, _ && u ? (
          // Check along the mainAxis and main crossAxis side.
          E.overflows.slice(0, 2).reduce((Q, tt) => Q + tt, 0)
        ) : (
          // Check only the mainAxis.
          E.overflows[0]
        ), E.overflows];
      }).sort((E, _) => E[1] - _[1]), V = ((i = Z.filter((E) => E[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        L(E[0]) ? 2 : 3
      ).every((_) => _ <= 0))[0]) == null ? void 0 : i[0]) || Z[0][0];
      return V !== s ? {
        data: {
          index: m + 1,
          overflows: x
        },
        reset: {
          placement: V
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
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...v
      } = G(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const m = O(i), w = W(s), y = O(s) === s, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = h || (y || !p ? [st(s)] : Jt(s)), R = g !== "none";
      !h && R && x.push(...te(s, p, g, b));
      const Z = [s, ...x], J = await mt(e, v), V = [];
      let E = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (u && V.push(J[m]), f) {
        const B = Ot(i, r, b);
        V.push(J[B[0]], J[B[1]]);
      }
      if (E = [...E, {
        placement: i,
        overflows: V
      }], !V.every((B) => B <= 0)) {
        var _, Q;
        const B = (((_ = l.flip) == null ? void 0 : _.index) || 0) + 1, wt = Z[B];
        if (wt)
          return {
            data: {
              index: B,
              overflows: E
            },
            reset: {
              placement: wt
            }
          };
        let q = (Q = E.filter((N) => N.overflows[0] <= 0).sort((N, D) => N.overflows[1] - D.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!q)
          switch (d) {
            case "bestFit": {
              var tt;
              const N = (tt = E.filter((D) => {
                if (R) {
                  const F = W(D.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((F) => F > 0).reduce((F, Nt) => F + Nt, 0)]).sort((D, F) => D[1] - F[1])[0]) == null ? void 0 : tt[0];
              N && (q = N);
              break;
            }
            case "initialPlacement":
              q = s;
              break;
          }
        if (i !== q)
          return {
            reset: {
              placement: q
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
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = O(n), s = L(n), a = W(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = l && a ? -1 : 1, f = G(e, t);
  let {
    mainAxis: h,
    crossAxis: d,
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
  return s && typeof g == "number" && (d = s === "end" ? g * -1 : g), a ? {
    x: d * u,
    y: h * c
  } : {
    x: h * c,
    y: d * u
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
          fn: (v) => {
            let {
              x: m,
              y: w
            } = v;
            return {
              x: m,
              y: w
            };
          }
        },
        ...a
      } = G(t, e), c = {
        x: n,
        y: o
      }, u = await mt(e, a), f = W(O(i)), h = Ct(f);
      let d = c[h], g = c[f];
      if (l) {
        const v = h === "y" ? "top" : "left", m = h === "y" ? "bottom" : "right", w = d + u[v], y = d - u[m];
        d = xt(w, d, y);
      }
      if (r) {
        const v = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", w = g + u[v], y = g - u[m];
        g = xt(w, g, y);
      }
      const p = s.fn({
        ...e,
        [h]: d,
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
function j(t) {
  return Pt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function P(t) {
  var e;
  return (e = (Pt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Pt(t) {
  return t instanceof Node || t instanceof A(t).Node;
}
function S(t) {
  return t instanceof Element || t instanceof A(t).Element;
}
function C(t) {
  return t instanceof HTMLElement || t instanceof A(t).HTMLElement;
}
function Et(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
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
  return ["table", "td", "th"].includes(j(t));
}
function ct(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function ht(t) {
  const e = pt(), n = S(t) ? T(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ue(t) {
  let e = M(t);
  for (; C(e) && !U(e); ) {
    if (ht(e))
      return e;
    if (ct(e))
      return null;
    e = M(e);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function U(t) {
  return ["html", "body", "#document"].includes(j(t));
}
function T(t) {
  return A(t).getComputedStyle(t);
}
function at(t) {
  return S(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function M(t) {
  if (j(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Et(t) && t.host || // Fallback.
    P(t)
  );
  return Et(e) ? e.host : e;
}
function _t(t) {
  const e = M(t);
  return U(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : C(e) && Y(e) ? e : _t(e);
}
function K(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = _t(t), l = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (l) {
    const s = ut(r);
    return e.concat(r, r.visualViewport || [], Y(i) ? i : [], s && n ? K(s) : []);
  }
  return e.concat(i, K(i, [], n));
}
function ut(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Dt(t) {
  const e = T(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = C(t), l = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, s = it(n) !== l || it(o) !== r;
  return s && (n = l, o = r), {
    width: n,
    height: o,
    $: s
  };
}
function gt(t) {
  return S(t) ? t : t.contextElement;
}
function $(t) {
  const e = gt(t);
  if (!C(e))
    return H(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: l
  } = Dt(e);
  let r = (l ? it(n.width) : n.width) / o, s = (l ? it(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: r,
    y: s
  };
}
const de = /* @__PURE__ */ H(0);
function Ft(t) {
  const e = A(t);
  return !pt() || !e.visualViewport ? de : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function me(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e;
}
function z(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = gt(t);
  let r = H(1);
  e && (o ? S(o) && (r = $(o)) : r = $(t));
  const s = me(l, n, o) ? Ft(l) : H(0);
  let a = (i.left + s.x) / r.x, c = (i.top + s.y) / r.y, u = i.width / r.x, f = i.height / r.y;
  if (l) {
    const h = A(l), d = o && S(o) ? A(o) : o;
    let g = h, p = ut(g);
    for (; p && o && d !== g; ) {
      const v = $(p), m = p.getBoundingClientRect(), w = T(p), y = m.left + (p.clientLeft + parseFloat(w.paddingLeft)) * v.x, b = m.top + (p.clientTop + parseFloat(w.paddingTop)) * v.y;
      a *= v.x, c *= v.y, u *= v.x, f *= v.y, a += y, c += b, g = A(p), p = ut(g);
    }
  }
  return lt({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
function he(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const l = i === "fixed", r = P(o), s = e ? ct(e.floating) : !1;
  if (o === r || s && l)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = H(1);
  const u = H(0), f = C(o);
  if ((f || !f && !l) && ((j(o) !== "body" || Y(r)) && (a = at(o)), C(o))) {
    const h = z(o);
    c = $(o), u.x = h.x + o.clientLeft, u.y = h.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y
  };
}
function pe(t) {
  return Array.from(t.getClientRects());
}
function kt(t) {
  return z(P(t)).left + at(t).scrollLeft;
}
function ge(t) {
  const e = P(t), n = at(t), o = t.ownerDocument.body, i = I(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = I(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + kt(t);
  const s = -n.scrollTop;
  return T(o).direction === "rtl" && (r += I(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: l,
    x: r,
    y: s
  };
}
function we(t, e) {
  const n = A(t), o = P(t), i = n.visualViewport;
  let l = o.clientWidth, r = o.clientHeight, s = 0, a = 0;
  if (i) {
    l = i.width, r = i.height;
    const c = pt();
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
  const n = z(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, l = C(t) ? $(t) : H(1), r = t.clientWidth * l.x, s = t.clientHeight * l.y, a = i * l.x, c = o * l.y;
  return {
    width: r,
    height: s,
    x: a,
    y: c
  };
}
function At(t, e, n) {
  let o;
  if (e === "viewport")
    o = we(t, n);
  else if (e === "document")
    o = ge(P(t));
  else if (S(e))
    o = ve(e, n);
  else {
    const i = Ft(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return lt(o);
}
function Ht(t, e) {
  const n = M(t);
  return n === e || !S(n) || U(n) ? !1 : T(n).position === "fixed" || Ht(n, e);
}
function ye(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = K(t, [], !1).filter((s) => S(s) && j(s) !== "body"), i = null;
  const l = T(t).position === "fixed";
  let r = l ? M(t) : t;
  for (; S(r) && !U(r); ) {
    const s = T(r), a = ht(r);
    !a && s.position === "fixed" && (i = null), (l ? !a && !i : !a && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Y(r) && !a && Ht(t, r)) ? o = o.filter((u) => u !== r) : i = s, r = M(r);
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
  const r = [...n === "clippingAncestors" ? ct(e) ? [] : ye(e, this._c) : [].concat(n), o], s = r[0], a = r.reduce((c, u) => {
    const f = At(e, u, i);
    return c.top = I(f.top, c.top), c.right = ot(f.right, c.right), c.bottom = ot(f.bottom, c.bottom), c.left = I(f.left, c.left), c;
  }, At(e, s, i));
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
  } = Dt(t);
  return {
    width: e,
    height: n
  };
}
function Ee(t, e, n) {
  const o = C(e), i = P(e), l = n === "fixed", r = z(t, !0, l, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = H(0);
  if (o || !o && !l)
    if ((j(e) !== "body" || Y(i)) && (s = at(e)), o) {
      const f = z(e, !0, l, e);
      a.x = f.x + e.clientLeft, a.y = f.y + e.clientTop;
    } else i && (a.x = kt(i));
  const c = r.left + s.scrollLeft - a.x, u = r.top + s.scrollTop - a.y;
  return {
    x: c,
    y: u,
    width: r.width,
    height: r.height
  };
}
function ft(t) {
  return T(t).position === "static";
}
function St(t, e) {
  return !C(t) || T(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Mt(t, e) {
  const n = A(t);
  if (ct(t))
    return n;
  if (!C(t)) {
    let i = M(t);
    for (; i && !U(i); ) {
      if (S(i) && !ft(i))
        return i;
      i = M(i);
    }
    return n;
  }
  let o = St(t, e);
  for (; o && fe(o) && ft(o); )
    o = St(o, e);
  return o && U(o) && ft(o) && !ht(o) ? n : o || ue(t) || n;
}
const Ae = async function(t) {
  const e = this.getOffsetParent || Mt, n = this.getDimensions, o = await n(t.floating);
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
  getDocumentElement: P,
  getClippingRect: xe,
  getOffsetParent: Mt,
  getElementRects: Ae,
  getClientRects: pe,
  getDimensions: be,
  getScale: $,
  isElement: S,
  isRTL: Se
};
function Ce(t, e) {
  let n = null, o;
  const i = P(t);
  function l() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function r(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), l();
    const {
      left: c,
      top: u,
      width: f,
      height: h
    } = t.getBoundingClientRect();
    if (s || e(), !f || !h)
      return;
    const d = et(u), g = et(i.clientWidth - (c + f)), p = et(i.clientHeight - (u + h)), v = et(c), w = {
      rootMargin: -d + "px " + -g + "px " + -p + "px " + -v + "px",
      threshold: I(0, ot(1, a)) || 1
    };
    let y = !0;
    function b(x) {
      const R = x[0].intersectionRatio;
      if (R !== a) {
        if (!y)
          return r();
        R ? r(!1, R) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
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
function Vt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = gt(t), u = i || l ? [...c ? K(c) : [], ...K(e)] : [];
  u.forEach((m) => {
    i && m.addEventListener("scroll", n, {
      passive: !0
    }), l && m.addEventListener("resize", n);
  });
  const f = c && s ? Ce(c, n) : null;
  let h = -1, d = null;
  r && (d = new ResizeObserver((m) => {
    let [w] = m;
    w && w.target === c && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(e);
    })), n();
  }), c && !a && d.observe(c), d.observe(e));
  let g, p = a ? z(t) : null;
  a && v();
  function v() {
    const m = z(t);
    p && (m.x !== p.x || m.y !== p.y || m.width !== p.width || m.height !== p.height) && n(), p = m, g = requestAnimationFrame(v);
  }
  return n(), () => {
    var m;
    u.forEach((w) => {
      i && w.removeEventListener("scroll", n), l && w.removeEventListener("resize", n);
    }), f?.(), (m = d) == null || m.disconnect(), d = null, a && cancelAnimationFrame(g);
  };
}
const Bt = ce, Re = re, je = ae, Le = se, It = (t, e, n) => {
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
}, nt = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Tt = 100, Oe = (t, e) => {
  if (e >= Tt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Tt})`;
}, Pe = (t) => {
  nt[t].forEach((e, n) => e.element.style.zIndex = Oe(t, n));
}, _e = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: l, onInit: r }) => {
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
        return i && u.create(), l ? (l.appendChild(s), setTimeout(() => s.classList.add("is-visible"), 0)) : s.classList.add("is-visible"), nt[n].push(c), Pe(n), c;
    },
    hide: () => (i && u.destroy(), s.classList.remove("is-visible"), s.style.removeProperty("z-index"), l && s.addEventListener("transitionend", a), nt[n] = nt[n].filter((f) => f !== c), o && o(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, u = Kt(c);
  return r && r(s, c), l && s.isConnected && s.remove(), c;
}, zt = 0;
function De(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const qe = (t, e) => ({
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
}), Xe = (t, e, n = "bottom", o = zt) => Vt(t, e, () => {
  De(t) || It(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      Bt(o),
      Le()
    ]
  }).then(({ x: l, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${l}px`;
  });
});
class Fe {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = _e({
      type: "popover",
      parentElement: Ut("popover"),
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
    It(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        Bt(this.args.offset),
        Re({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = Vt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
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
const ke = ["right-start", "right-end", "left-start", "left-end"], Ke = (t) => new Fe({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? zt,
  autoPlacement: t.autoPlacement ?? ke,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  He as a,
  Be as b,
  Kt as c,
  Me as d,
  dt as e,
  _e as f,
  Ut as g,
  We as h,
  qe as i,
  Ke as j,
  It as k,
  Bt as l,
  Le as m,
  je as n,
  Xe as o,
  Ue as p,
  ze as q,
  Xt as r,
  Ne as s,
  Ie as t,
  $e as u,
  Ve as v
};
//# sourceMappingURL=floating-fOdDS7jf.js.map
