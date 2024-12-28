import { k as Gt, z as Xt, l as Et } from "./css-F1iGWdNw.js";
function Yt() {
  return typeof window < "u";
}
const Zt = /* @__PURE__ */ (() => {
  const t = [
    "floating",
    "drawer",
    "dialog",
    "message",
    "popover",
    "toast"
  ];
  function e(o) {
    return `ir_${o}`;
  }
  function n(o) {
    const i = document.createElement("div");
    return i.id = e(o), i.classList.add(Gt.position.fixed, Xt[o]), i;
  }
  return (o) => {
    t.filter((i) => !document.getElementById(e(i))).forEach((i) => o.appendChild(n(i)));
  };
})();
Yt() && Zt(document.body);
const Jt = {
  // DatePicker
  "datePicker.minDate": /* @__PURE__ */ new Date("1970-01-01"),
  "datePicker.maxDate": /* @__PURE__ */ new Date("9999-12-31"),
  // Grid
  "grid.defaultFontSize": Et.fontSizeBase,
  "grid.defaultFontFamily": Et.fontFamilyBase,
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
class Qt {
  constructor(e = { ...Jt }) {
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
  return () => (t || (t = new Qt()), t);
})();
function Ze(t) {
  return pt().getStoreValue(t);
}
function Je(...t) {
  const e = pt();
  return t.map((n) => e.getStoreValue(n));
}
function te(t) {
  const n = pt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
const b = [];
for (let t = 0; t < 256; ++t)
  b.push((t + 256).toString(16).slice(1));
function ee(t, e = 0) {
  return (b[t[e + 0]] + b[t[e + 1]] + b[t[e + 2]] + b[t[e + 3]] + "-" + b[t[e + 4]] + b[t[e + 5]] + "-" + b[t[e + 6]] + b[t[e + 7]] + "-" + b[t[e + 8]] + b[t[e + 9]] + "-" + b[t[e + 10]] + b[t[e + 11]] + b[t[e + 12]] + b[t[e + 13]] + b[t[e + 14]] + b[t[e + 15]]).toLowerCase();
}
let dt;
const ne = new Uint8Array(16);
function oe() {
  if (!dt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    dt = crypto.getRandomValues.bind(crypto);
  }
  return dt(ne);
}
const ie = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), St = { randomUUID: ie };
function Qe(t, e, n) {
  if (St.randomUUID && !e && !t)
    return St.randomUUID();
  t = t || {};
  const o = t.random || (t.rng || oe)();
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, ee(o);
}
function tn(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function re(t) {
  return (e) => e.matches(t);
}
function en(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? re(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function nn(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function on({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: l }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([s, a]) => r.setAttribute(s, a)), l && (r.textContent = l), o && o.forEach((s) => r.append(s.element)), {
    element: r,
    children: o ?? [],
    append(...s) {
      return s && this.element.append(...s), this;
    }
  };
}
function rn(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const se = ["top", "right", "bottom", "left"], At = ["start", "end"], Tt = /* @__PURE__ */ se.reduce((t, e) => t.concat(e, e + "-" + At[0], e + "-" + At[1]), []), it = Math.min, z = Math.max, rt = Math.round, nt = Math.floor, R = (t) => ({
  x: t,
  y: t
}), le = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ce = {
  start: "end",
  end: "start"
};
function Ct(t, e, n) {
  return z(t, it(e, n));
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
function Dt(t) {
  return t === "x" ? "y" : "x";
}
function Ft(t) {
  return t === "y" ? "height" : "width";
}
function j(t) {
  return ["top", "bottom"].includes(D(t)) ? "y" : "x";
}
function It(t) {
  return Dt(j(t));
}
function kt(t, e, n) {
  n === void 0 && (n = !1);
  const o = P(t), i = It(t), l = Ft(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = lt(r)), [r, lt(r)];
}
function ae(t) {
  const e = lt(t);
  return [st(t), e, st(e)];
}
function st(t) {
  return t.replace(/start|end/g, (e) => ce[e]);
}
function fe(t, e, n) {
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
function ue(t, e, n, o) {
  const i = P(t);
  let l = fe(D(t), n === "start", o);
  return i && (l = l.map((r) => r + "-" + i), e && (l = l.concat(l.map(st)))), l;
}
function lt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => le[e]);
}
function de(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function me(t) {
  return typeof t != "number" ? de(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ct(t) {
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
function Rt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const l = j(e), r = It(e), s = Ft(r), a = D(e), c = l === "y", d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, m = o[s] / 2 - i[s] / 2;
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
const he = async (t, e, n) => {
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
  } = Rt(c, o, a), m = o, u = {}, g = 0;
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
    } = Rt(c, m, a)), p = -1);
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
  } = Y(e, t), g = me(u), y = s[m ? f === "floating" ? "reference" : "floating" : f], h = ct(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(y))) == null || n ? y : y.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), w = f === "floating" ? {
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
  }, x = ct(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
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
function pe(t, e, n) {
  return (t ? [...n.filter((i) => P(i) === t), ...n.filter((i) => P(i) !== t)] : n.filter((i) => D(i) === i)).filter((i) => t ? P(i) === t || (e ? st(i) !== i : !1) : !0);
}
const ge = function(t) {
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
        allowedPlacements: m = Tt,
        autoAlignment: u = !0,
        ...g
      } = Y(t, e), p = f !== void 0 || m === Tt ? pe(f || null, u, m) : m, y = await gt(e, g), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = p[h];
      if (w == null)
        return {};
      const v = kt(w, l, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (s !== w)
        return {
          reset: {
            placement: p[0]
          }
        };
      const E = [y[D(w)], y[v[0]], y[v[1]]], x = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: E
      }], _ = p[h + 1];
      if (_)
        return {
          data: {
            index: h + 1,
            overflows: x
          },
          reset: {
            placement: _
          }
        };
      const J = x.map((S) => {
        const F = P(S.placement);
        return [S.placement, F && d ? (
          // Check along the mainAxis and main crossAxis side.
          S.overflows.slice(0, 2).reduce((tt, et) => tt + et, 0)
        ) : (
          // Check only the mainAxis.
          S.overflows[0]
        ), S.overflows];
      }).sort((S, F) => S[1] - F[1]), H = ((i = J.filter((S) => S[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        P(S[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : i[0]) || J[0][0];
      return H !== s ? {
        data: {
          index: h + 1,
          overflows: x
        },
        reset: {
          placement: H
        }
      } : {};
    }
  };
}, we = function(t) {
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
      } = Y(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const h = D(i), w = j(s), v = D(s) === s, E = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = m || (v || !p ? [lt(s)] : ae(s)), _ = g !== "none";
      !m && _ && x.push(...ue(s, p, g, E));
      const J = [s, ...x], Q = await gt(e, y), H = [];
      let S = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (d && H.push(Q[h]), f) {
        const M = kt(i, r, E);
        H.push(Q[M[0]], Q[M[1]]);
      }
      if (S = [...S, {
        placement: i,
        overflows: H
      }], !H.every((M) => M <= 0)) {
        var F, tt;
        const M = (((F = l.flip) == null ? void 0 : F.index) || 0) + 1, bt = J[M];
        if (bt)
          return {
            data: {
              index: M,
              overflows: S
            },
            reset: {
              placement: bt
            }
          };
        let G = (tt = S.filter(($) => $.overflows[0] <= 0).sort(($, I) => $.overflows[1] - I.overflows[1])[0]) == null ? void 0 : tt.placement;
        if (!G)
          switch (u) {
            case "bestFit": {
              var et;
              const $ = (et = S.filter((I) => {
                if (_) {
                  const k = j(I.placement);
                  return k === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((k) => k > 0).reduce((k, Kt) => k + Kt, 0)]).sort((I, k) => I[1] - k[1])[0]) == null ? void 0 : et[0];
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
async function ye(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = D(n), s = P(n), a = j(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = l && a ? -1 : 1, f = Y(e, t);
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
const ve = function(t) {
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
      } = e, a = await ye(e, t);
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
}, xe = function(t) {
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
      } = Y(t, e), c = {
        x: n,
        y: o
      }, d = await gt(e, a), f = j(D(i)), m = Dt(f);
      let u = c[m], g = c[f];
      if (l) {
        const y = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = u + d[y], v = u - d[h];
        u = Ct(w, u, v);
      }
      if (r) {
        const y = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", w = g + d[y], v = g - d[h];
        g = Ct(w, g, v);
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
function at() {
  return typeof window < "u";
}
function K(t) {
  return Vt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function O(t) {
  var e;
  return (e = (Vt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Vt(t) {
  return at() ? t instanceof Node || t instanceof A(t).Node : !1;
}
function T(t) {
  return at() ? t instanceof Element || t instanceof A(t).Element : !1;
}
function L(t) {
  return at() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : !1;
}
function Lt(t) {
  return !at() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
}
function Z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = C(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function be(t) {
  return ["table", "td", "th"].includes(K(t));
}
function ft(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function wt(t) {
  const e = yt(), n = T(t) ? C(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ee(t) {
  let e = B(t);
  for (; L(e) && !q(e); ) {
    if (wt(e))
      return e;
    if (ft(e))
      return null;
    e = B(e);
  }
  return null;
}
function yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function q(t) {
  return ["html", "body", "#document"].includes(K(t));
}
function C(t) {
  return A(t).getComputedStyle(t);
}
function ut(t) {
  return T(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function B(t) {
  if (K(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Lt(t) && t.host || // Fallback.
    O(t)
  );
  return Lt(e) ? e.host : e;
}
function Bt(t) {
  const e = B(t);
  return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : L(e) && Z(e) ? e : Bt(e);
}
function X(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Bt(t), l = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (l) {
    const s = ht(r);
    return e.concat(r, r.visualViewport || [], Z(i) ? i : [], s && n ? X(s) : []);
  }
  return e.concat(i, X(i, [], n));
}
function ht(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ht(t) {
  const e = C(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = L(t), l = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, s = rt(n) !== l || rt(o) !== r;
  return s && (n = l, o = r), {
    width: n,
    height: o,
    $: s
  };
}
function vt(t) {
  return T(t) ? t : t.contextElement;
}
function N(t) {
  const e = vt(t);
  if (!L(e))
    return R(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: l
  } = Ht(e);
  let r = (l ? rt(n.width) : n.width) / o, s = (l ? rt(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: r,
    y: s
  };
}
const Se = /* @__PURE__ */ R(0);
function Mt(t) {
  const e = A(t);
  return !yt() || !e.visualViewport ? Se : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ae(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e;
}
function U(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = vt(t);
  let r = R(1);
  e && (o ? T(o) && (r = N(o)) : r = N(t));
  const s = Ae(l, n, o) ? Mt(l) : R(0);
  let a = (i.left + s.x) / r.x, c = (i.top + s.y) / r.y, d = i.width / r.x, f = i.height / r.y;
  if (l) {
    const m = A(l), u = o && T(o) ? A(o) : o;
    let g = m, p = ht(g);
    for (; p && o && u !== g; ) {
      const y = N(p), h = p.getBoundingClientRect(), w = C(p), v = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, E = h.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      a *= y.x, c *= y.y, d *= y.x, f *= y.y, a += v, c += E, g = A(p), p = ht(g);
    }
  }
  return ct({
    width: d,
    height: f,
    x: a,
    y: c
  });
}
function xt(t, e) {
  const n = ut(t).scrollLeft;
  return e ? e.left + n : U(O(t)).left + n;
}
function zt(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xt(t, o)
  )), l = o.top + e.scrollTop;
  return {
    x: i,
    y: l
  };
}
function Te(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const l = i === "fixed", r = O(o), s = e ? ft(e.floating) : !1;
  if (o === r || s && l)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = R(1);
  const d = R(0), f = L(o);
  if ((f || !f && !l) && ((K(o) !== "body" || Z(r)) && (a = ut(o)), L(o))) {
    const u = U(o);
    c = N(o), d.x = u.x + o.clientLeft, d.y = u.y + o.clientTop;
  }
  const m = r && !f && !l ? zt(r, a, !0) : R(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + m.y
  };
}
function Ce(t) {
  return Array.from(t.getClientRects());
}
function Re(t) {
  const e = O(t), n = ut(t), o = t.ownerDocument.body, i = z(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = z(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + xt(t);
  const s = -n.scrollTop;
  return C(o).direction === "rtl" && (r += z(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: l,
    x: r,
    y: s
  };
}
function Le(t, e) {
  const n = A(t), o = O(t), i = n.visualViewport;
  let l = o.clientWidth, r = o.clientHeight, s = 0, a = 0;
  if (i) {
    l = i.width, r = i.height;
    const c = yt();
    (!c || c && e === "fixed") && (s = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: s,
    y: a
  };
}
function Oe(t, e) {
  const n = U(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, l = L(t) ? N(t) : R(1), r = t.clientWidth * l.x, s = t.clientHeight * l.y, a = i * l.x, c = o * l.y;
  return {
    width: r,
    height: s,
    x: a,
    y: c
  };
}
function Ot(t, e, n) {
  let o;
  if (e === "viewport")
    o = Le(t, n);
  else if (e === "document")
    o = Re(O(t));
  else if (T(e))
    o = Oe(e, n);
  else {
    const i = Mt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return ct(o);
}
function Ut(t, e) {
  const n = B(t);
  return n === e || !T(n) || q(n) ? !1 : C(n).position === "fixed" || Ut(n, e);
}
function _e(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = X(t, [], !1).filter((s) => T(s) && K(s) !== "body"), i = null;
  const l = C(t).position === "fixed";
  let r = l ? B(t) : t;
  for (; T(r) && !q(r); ) {
    const s = C(r), a = wt(r);
    !a && s.position === "fixed" && (i = null), (l ? !a && !i : !a && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Z(r) && !a && Ut(t, r)) ? o = o.filter((d) => d !== r) : i = s, r = B(r);
  }
  return e.set(t, o), o;
}
function Pe(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? ft(e) ? [] : _e(e, this._c) : [].concat(n), o], s = r[0], a = r.reduce((c, d) => {
    const f = Ot(e, d, i);
    return c.top = z(f.top, c.top), c.right = it(f.right, c.right), c.bottom = it(f.bottom, c.bottom), c.left = z(f.left, c.left), c;
  }, Ot(e, s, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function De(t) {
  const {
    width: e,
    height: n
  } = Ht(t);
  return {
    width: e,
    height: n
  };
}
function Fe(t, e, n) {
  const o = L(e), i = O(e), l = n === "fixed", r = U(t, !0, l, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = R(0);
  if (o || !o && !l)
    if ((K(e) !== "body" || Z(i)) && (s = ut(e)), o) {
      const m = U(e, !0, l, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else i && (a.x = xt(i));
  const c = i && !o && !l ? zt(i, s) : R(0), d = r.left + s.scrollLeft - a.x - c.x, f = r.top + s.scrollTop - a.y - c.y;
  return {
    x: d,
    y: f,
    width: r.width,
    height: r.height
  };
}
function mt(t) {
  return C(t).position === "static";
}
function _t(t, e) {
  if (!L(t) || C(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return O(t) === n && (n = n.ownerDocument.body), n;
}
function $t(t, e) {
  const n = A(t);
  if (ft(t))
    return n;
  if (!L(t)) {
    let i = B(t);
    for (; i && !q(i); ) {
      if (T(i) && !mt(i))
        return i;
      i = B(i);
    }
    return n;
  }
  let o = _t(t, e);
  for (; o && be(o) && mt(o); )
    o = _t(o, e);
  return o && q(o) && mt(o) && !wt(o) ? n : o || Ee(t) || n;
}
const Ie = async function(t) {
  const e = this.getOffsetParent || $t, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Fe(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ke(t) {
  return C(t).direction === "rtl";
}
const Ve = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Te,
  getDocumentElement: O,
  getClippingRect: Pe,
  getOffsetParent: $t,
  getElementRects: Ie,
  getClientRects: Ce,
  getDimensions: De,
  getScale: N,
  isElement: T,
  isRTL: ke
};
function Be(t, e) {
  let n = null, o;
  const i = O(t);
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
    const u = nt(d), g = nt(i.clientWidth - (c + f)), p = nt(i.clientHeight - (d + m)), y = nt(c), w = {
      rootMargin: -u + "px " + -g + "px " + -p + "px " + -y + "px",
      threshold: z(0, it(1, a)) || 1
    };
    let v = !0;
    function E(x) {
      const _ = x[0].intersectionRatio;
      if (_ !== a) {
        if (!v)
          return r();
        _ ? r(!1, _) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, w);
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
  } = o, c = vt(t), d = i || l ? [...c ? X(c) : [], ...X(e)] : [];
  d.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), l && h.addEventListener("resize", n);
  });
  const f = c && s ? Be(c, n) : null;
  let m = -1, u = null;
  r && (u = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === c && u && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), c && !a && u.observe(c), u.observe(e));
  let g, p = a ? U(t) : null;
  a && y();
  function y() {
    const h = U(t);
    p && (h.x !== p.x || h.y !== p.y || h.width !== p.width || h.height !== p.height) && n(), p = h, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var h;
    d.forEach((w) => {
      i && w.removeEventListener("scroll", n), l && w.removeEventListener("resize", n);
    }), f?.(), (h = u) == null || h.disconnect(), u = null, a && cancelAnimationFrame(g);
  };
}
const Wt = ve, He = ge, sn = xe, Me = we, jt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ve,
    ...n
  }, l = {
    ...i.platform,
    _c: o
  };
  return he(t, e, {
    ...i,
    platform: l
  });
}, V = {};
function ze() {
  document.addEventListener("keydown", (t) => {
    V[t.key] && V[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && ze();
const Ue = (t, e) => {
  V[t] ? V[t].push(e) : V[t] = [e];
}, ln = (t, e) => {
  const n = V[t].indexOf(e);
  n !== -1 && V[t].splice(n, 1);
}, cn = (t) => {
  delete V[t];
}, W = [];
Ue("Escape", () => {
  const t = W.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      W.push(t);
      return;
    }
    t.hide();
  }
});
function an() {
  console.debug(W);
}
function $e(t) {
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
const ot = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Pt = 100, Ne = (t, e) => {
  if (e >= Pt) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Pt})`;
}, We = (t) => {
  ot[t].forEach((e, n) => e.element.style.zIndex = Ne(t, n));
}, je = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: l, onInit: r }) => {
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
        return i && d.create(), l ? (l.appendChild(s), setTimeout(() => s.classList.add("is-visible"), 0)) : s.classList.add("is-visible"), ot[n].push(c), We(n), c;
    },
    hide: () => (i && d.destroy(), s.classList.remove("is-visible"), s.style.removeProperty("z-index"), l && s.addEventListener("transitionend", a), ot[n] = ot[n].filter((f) => f !== c), document.activeElement && qe(s, document.activeElement), o?.(), c),
    bringToTop: () => {
      c.hide(), c.show();
    }
  }, d = $e(c);
  return r && r(s, c), l && s.isConnected && s.remove(), c;
};
function qe(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const qt = 0;
function Ke(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const fn = (t, e) => ({
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
}), un = (t, e, n = "bottom", o = qt) => Nt(t, e, () => {
  Ke(t) || jt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      Wt(o),
      Me()
    ]
  }).then(({ x: l, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${l}px`;
  });
});
class Ge {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = je({
      type: "popover",
      parentElement: te("popover"),
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
        Wt(this.args.offset),
        He({
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
const Xe = ["right-start", "right-end", "left-start", "left-end"], dn = (t) => new Ge({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? qt,
  autoPlacement: t.autoPlacement ?? Xe,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  on as a,
  $e as b,
  jt as c,
  fn as d,
  Yt as e,
  Me as f,
  te as g,
  un as h,
  tn as i,
  Ze as j,
  en as k,
  rn as l,
  Je as m,
  pt as n,
  Wt as o,
  je as p,
  cn as q,
  Ue as r,
  sn as s,
  an as t,
  ln as u,
  Qe as v,
  dn as w,
  ee as x,
  nn as y
};
//# sourceMappingURL=floating-DlacX8th.js.map
