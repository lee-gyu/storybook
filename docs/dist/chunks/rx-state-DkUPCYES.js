import { a as Sr, b as xr, d as Er, f as Tr, s as zr, g as Ar } from "./floating-B9y9ooPB.js";
import { g as Cr } from "./_commonjsHelpers-DaMA6jEr.js";
function ci(e, t, ...r) {
  const i = kr(t, ...r);
  return e.appendChild(i), i;
}
function kr(e, ...t) {
  const r = document.createElement(e);
  return t.forEach((i) => r.classList.add(i)), r;
}
function fi(e, t, r) {
  let i = e;
  for (; i && !i.classList.contains(t); ) {
    if (i === r)
      return null;
    i = i.parentElement;
  }
  return i;
}
function di(e) {
  const t = document.querySelector(e);
  if (t)
    return t;
  throw new Error(`There is no '${e}'`);
}
function pi(e, t, r) {
  let i = r;
  for (; i; ) {
    if (i.matches(e))
      return i;
    if (i.matches(t))
      break;
    i = i.parentElement;
  }
  return null;
}
function gi(e) {
  for (; e.lastChild; )
    e.lastChild.remove();
}
function vi(e, t, r) {
  r ? e.dataset[t] = "true" : delete e.dataset[t];
}
var Ir = "ir_tooltip", hi = "select", _i = "ir_select_input", bi = "ir_select_input_native", mi = "ir_select_input_icon", yi = "ir_select_dropdown", wi = "ir_select_dropdown_list", Si = "ir_select_dropdown_button", xi = "ir_select_dropdown_icon", Ei = "ir_select_dropdown_item", Ti = "ir_select_dropdown_item_selected", zi = "radio", Ai = "radio__wrapper", Ci = "radio__input", ki = "radio__text", Ii = "progress", Li = { borderColor: "var(--ir_progress_border_color)", textColor: "var(--ir_progress_text_color)", lineHeight: "var(--ir_progress_line_height)", fontWeight: "var(--ir_progress_font_weight)", height: "var(--ir_progress_height)", borderRadius: "var(--ir_progress_border_radius)", progressText: "var(--ir_progress_text)", progressPercent: "var(--ir_progress_percent)" }, Oi = "input", Pi = "input__native", Fi = "input__prefix", Ri = "input__suffix", Bi = "button", $i = "button--primary", Di = "button--secondary", Ui = "button--tertiary", Mi = "button__icon-prefix", Hi = "button--transparent", Ni = "checkbox", ji = "checkbox__wrapper", Wi = "checkbox__input", Gi = "checkbox__text", Vi = "ir_date_picker", Xi = "ir_date_picker_header", qi = "ir_date_picker_header_title", Qi = "ir_date_picker_content", Zi = "ir_date_picker_content_table", Yi = "ir_date_picker_content_cell", Ki = "ir_date_picker_content_cell_selected", Ji = "ir_date_picker_content_header_cell", en = "ir_date_picker_footer", rn = "ir_grid", tn = "ir_grid_wrapper", nn = "ir_grid_table", an = "ir_grid_selection", on = "ir_grid_selection_border_line", sn = "ir_grid_sub_selection", ln = "ir_grid_cell", un = "ir_grid_header_cell", cn = "ir_grid_body_cell", fn = "ir_grid_cell_memo", dn = "ir_grid_cell_error", pn = "ir_grid_empty_row", gn = "ir_grid_cell_content", vn = "ir_grid_cell_content_ellipsis", hn = "ir_grid_sticky_row", _n = "ir_grid_sticky_header_row", bn = "ir_grid_sticky_cell", mn = "ir_grid_selection_all_freezed_area", yn = "ir_grid_selection_freezed_row_area", wn = "ir_grid_selection_freezed_col_area", Sn = "ir_grid_selection_non_freezed_area", xn = "ir-grid-textarea", En = "ir_grid_cell_button_wrapper", Tn = "ir_grid_cell_button", zn = "ir_grid_cell_button_outline", An = "ir_grid_cell_icon", Cn = "ir_grid_cell_button_icon_divider", kn = "ir_grid_select", In = "ir_grid_cell_checkbox_wrapper", Ln = "ir_grid_cell_checkbox", On = "ir_grid_cell_checkbox_text", Pn = "ir_grid_date_picker", Fn = "ir_grid_progress", Rn = "ir_grid_radio", Bn = "ir_grid_memo", $n = "ir_grid_memo_normal", Dn = "ir_grid_memo_error", Un = "ir_grid_row_resizer_guide", Mn = "ir_grid_col_resizer_guide", Hn = "ir_grid_header_cell_col_resizing", Nn = "ir_grid_header_cell_row_resizing", jn = "ir_grid_col_resizing", Wn = "ir_grid_row_resizing", Gn = "ir_grid_row_move_guide", Vn = "ir_grid_col_move_guide", Xn = "ir_grid_overflow_panel", qn = "ir_grid_overflow_wrapper", Qn = "ir_grid_overflow_panel_button_group", Zn = "ir_grid_overflow_panel_button", Yn = "ir_grid_overflow_panel_divider", Kn = { border: "var(--grid_border)", background: "var(--grid_bg)", minWidth: "var(--grid_min_width)", minHeight: "var(--grid_min_height)", headerBackground: "var(--grid_header_bg)", scrollBgColor: "var(--grid_scroll_bg)", scrollBorderColor: "var(--grid_scroll_border_color)", defaultFontSize: "var(--grid_default_font_size)", defaultLineHeight: "var(--grid_default_line_height)", defaultTextColor: "var(--grid_default_text_color)", cellHeight: "var(--grid_cell_height)", emptyRowHeight: "var(--grid_empty_row_height)", disabledBgColor: "var(--grid_disabled_bg_color)", headerActiveBgColor: "var(--grid_header_active_bg_color)", headerActiveFontWeight: "var(--grid_header_active_font_weight)", contentSelectedBgColor: "var(--grid_content_selected_bg_color)", activeBgColor: "var(--grid_active_bg_color)", activeBorderColor: "var(--grid_active_border_color)", errorBorderColor: "var(--grid_error_border_color)", diffBorderColor: "var(--grid_diff_border_color)", diffTextColor: "var(--grid_diff_text_color)", sameBorderColor: "var(--grid_same_border_color)", sameTextColor: "var(--grid_same_text_color)", dragBorderColor: "var(--grid_drag_border_color)", dragHeaderBgColor: "var(--grid_drag_header_bg_color)", moveHeaderBgColor: "var(--grid_move_header_bg_color)", moveHeaderLineSize: "var(--grid_move_header_line_size)", cellMemoColor: "var(--grid_cell_memo_color)", cellErrorColor: "var(--grid_cell_error_color)", zLevel9: "var(--grid_z_level_9)", zLevel8: "var(--grid_z_level_8)", zLevel7: "var(--grid_z_level_7)", zLevel6: "var(--grid_z_level_6)", zLevel5: "var(--grid_z_level_5)", zLevel4: "var(--grid_z_level_4)", zLevel3: "var(--grid_z_level_3)", zLevel2: "var(--grid_z_level_2)", zLevel1: "var(--grid_z_level_1)", zLevel0: "var(--grid_z_level_0)", selectionAllFreezedZId: "var(--grid_all_freezed_zId)", selectionFreezedRowZId: "var(--grid_freezed_row_zId)", selectionFreezedColumnZId: "var(--grid_freezed_column_zId)", selectionFreezedBodyZId: "var(--grid_freezed_body_zId)", cellTopPadding: "var(--grid_cell_top_padding)", cellBottomPadding: "var(--grid_cell_bottom_padding)", cellLeftPadding: "var(--grid_cell_left_padding)", cellRightPadding: "var(--grid_cell_right_padding)", stickyCellZId: "var(--grid_sticky_cell_zId)" }, Jn = "ir-tv-favorite", ea = { templateColumns: "var(--ir-tv-template-columns)", nodeLevel: "var(--ir-tv-node-level)", nodeIndentPadding: "var(--ir-tv-indent-padding)", defaultRowPaddingLeft: "var(--ir-tv-default-row-padding)", defaultCellPadding: "var(--ir-tv-default-cell-padding)", nodeBg: "var(--ir-tv-node-bg)", nodeHeaderBg: "var(--ir-tv-node-header-bg)", nodeHoverBg: "var(--ir-tv-node-hover-bg)", rowSelectedBg: "var(--ir-tv-row-selected-bg)", rowHoverSelectedBorder: "var(--ir-tv-row-hover-selected-bg)", expandIconColor: "var(--ir-tv-expand-icon-color)", dragBorderColor: "var(--ir-tv-drag-border)", rowDisabledBg: "var(--ir-tv-row-disabled-bg)", headerFontColor: "var(--ir-tv-header-font-color)", nodeFontColor: "var(--ir-tv-node-font-color)" }, ra = "it-tree-view", ta = { base: "css_1dm57f5g", node: "css_1dm57f5h", header: "css_1dm57f5i" }, ia = { base: "css_1dm57f5j", nodeMain: "css_1dm57f5k", nodeIcon: "css_1dm57f5l", nodeExpandButton: "css_1dm57f5m", nodeCaption: "css_1dm57f5n", column: "css_1dm57f5o", headerInnerCheckbox: "css_1dm57f5p", headerCheckboxColumnDiv: "css_1dm57f5q" }, na = 15, aa = "ir-border-scroll-container", Lr = "ir-truncate", Or = { bottom: "ir-border-bottom", right: "ir-border-right" }, Pr = { pointer: "ir-cursor-pointer" }, Fr = { disabled: "ir-opacity-disabled" }, Rr = "ir-pointer-events-none", Br = "ir-invisible", $r = { deg90: "ir-rotate-deg90" }, Dr = "ir-user-select-none", Ur = "ir-focus-outline-none", Mr = { left: "ir-text-align-left", center: "ir-text-align-center", right: "ir-text-align-right" }, Hr = { bottom: "ir-vertical-align-bottom" }, Nr = { none: "css_gmrzsae" };
const oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  border: Or,
  cursor: Pr,
  display: Nr,
  focusOutlineNone: Ur,
  invisible: Br,
  opacity: Fr,
  pointerEventNone: Rr,
  rotate: $r,
  textAlign: Mr,
  truncate: Lr,
  userSelectNone: Dr,
  verticalAlign: Hr
}, Symbol.toStringTag, { value: "Module" }));
function sa(e, t) {
  const r = document.createElement("i");
  return r.className = `ir-icon ${e}`, t && r.classList.add(t), r;
}
const la = (...e) => {
  const t = [];
  e.forEach(({ svg: i, name: n, masked: a = !1 }) => {
    const u = btoa(i), l = `.ir-icon--${n}`, o = `--ir-icon--${n}`;
    t.push(`
.ir-icon {
    ${o}: url("data:image/svg+xml;base64,${u}")
}`), a ? t.push(`
${l} {
    -webkit-mask-image: var(${o});
    mask-image: var(${o});
    background-image: none;
    background-color: none;
}`) : t.push(`
${l} {
    background: var(${o}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const r = document.createElement("style");
  r.innerHTML = t.join(`
`), document.head.appendChild(r);
}, ua = (e, t) => "", jr = 3.4, Wr = 0.65;
class Gr {
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
  setFontStyle(t, r) {
    (this.curFontSize !== t || this.curFontFamily !== r) && (this.getContext().font = `${t} ${r}`, this.curFontSize = t, this.curFontFamily = r);
  }
  getCacheKey(t) {
    return `${this.curFontSize}_${this.curFontFamily}_${t}`;
  }
  _calculate(t) {
    const r = t.replace(/ /g, ""), i = t.length - r.length, n = r.replace(/\d/g, ""), a = r.length - n.length, u = parseInt(this.curFontSize, 10) * Wr;
    return Number.isNaN(u) && console.error(`ir-style text calculation occurred a NaN. fontSize: ${this.curFontSize}, fontFamily: ${this.curFontFamily}`), Math.ceil(this.getContext().measureText(n).width + i * jr + a * u);
  }
  calculateWidth(t) {
    const r = this.getCacheKey(t);
    let i = this.cacheMap.get(r);
    return i === void 0 && (i = this._calculate(t), this.cacheMap.set(r, i)), i;
  }
}
let te = null;
function ca(e, t) {
  return te || (te = new Gr()), te.setFontStyle(e, t), te;
}
const Vr = () => {
  const e = document.createElement("div");
  return e.className = Ir, {
    tooltipElement: e,
    updateText(t) {
      e.textContent = t;
    }
  };
}, ie = /* @__PURE__ */ (() => {
  let e = null;
  return () => (e || (e = Vr()), e);
})(), Xr = 8;
let ve = null;
const qr = (e) => {
  var G;
  if (e.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: t,
    offset: r = Xr,
    placement: i = "bottom",
    refMode: n = "element"
  } = e;
  let a = e.label ?? "", u = e.refElement;
  (G = t.__IR_TOOLTIP_INSTANCE__) == null || G.destroy(), t.addEventListener("mousemove", w), t.addEventListener("mouseleave", h);
  const l = {
    show: o,
    hide: v,
    update: g,
    updateText: p,
    destroy: b,
    get text() {
      return a;
    },
    get refMode() {
      return n;
    },
    get placement() {
      return i;
    },
    get offset() {
      return r;
    },
    get refElement() {
      return t;
    }
  };
  return t.__IR_TOOLTIP_INSTANCE__ = l, l;
  function o() {
    return m(), l;
  }
  function v() {
    return h(), l;
  }
  function g() {
    return _(), l;
  }
  function p(S) {
    const { updateText: z } = ie();
    a = S, z(S);
  }
  function b() {
    h(), t.removeEventListener("mousemove", w), t.removeEventListener("mouseleave", h);
  }
  function _() {
    const { tooltipElement: S } = ie();
    xr(u, S, {
      // Tooltip 배치 위치
      placement: i,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        Er(r),
        // 상하 스크롤 화면 overflow 방지
        Tr(),
        // 좌우 스크롤 화면 overflow 방지
        zr({ padding: 5 })
      ]
    }).then(({ x: z, y: $ }) => {
      S.style.left = `${z}px`, S.style.top = `${$}px`;
    });
  }
  function m() {
    if (a === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: S } = ie();
    _(), p(a), Ar("popover").appendChild(S);
  }
  function h() {
    ie().tooltipElement.remove(), ve = null;
  }
  function w(S) {
    S.__EXECUTED_TOOLTIP__ || S.target instanceof HTMLElement && (n === "element" && ve === l || (ve = l, S.__EXECUTED_TOOLTIP__ = !0, n === "pointer" && (u = Sr(S.clientX, S.clientY)), m()));
  }
}, fa = (e) => {
  const {
    selector: t,
    offset: r = 8
  } = e, i = Array.from(document.querySelectorAll(t)).filter((n) => n.dataset.title).map((n) => {
    const { title: a, placement: u = "bottom", ref: l = "element" } = n.dataset;
    return qr({
      refElement: n,
      label: a,
      offset: r,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: u,
      refMode: l
    });
  });
  return {
    destroy: () => {
      i.forEach((n) => n.destroy());
    },
    updateTextAll() {
      i.forEach((n) => {
        const a = n.refElement.dataset.title ?? "";
        n.text !== a && n.updateText(a);
      });
    },
    updateTextOne(n, a) {
      const u = i.find((l) => n === l.refElement);
      if (!u) {
        console.warn("Tooltip element not found");
        return;
      }
      a ? (n.dataset.title = a, u.updateText(a)) : u.updateText(n.dataset.title ?? "");
    }
  };
};
function da(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function pa(e, t = 0, r = 10) {
  const i = Number.parseInt(e ?? "", r);
  return Number.isNaN(i) ? t : i;
}
var k = typeof window < "u" ? window : null, Ae = k === null, Y = Ae ? void 0 : k.document, I = "addEventListener", L = "removeEventListener", he = "getBoundingClientRect", Q = "_a", O = "_b", D = "_c", ne = "horizontal", P = function() {
  return !1;
}, Qr = Ae ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(e) {
  var t = Y.createElement("div");
  return t.style.cssText = "width:" + e + "calc(9px)", !!t.style.length;
}).shift() + "calc", Xe = function(e) {
  return typeof e == "string" || e instanceof String;
}, $e = function(e) {
  if (Xe(e)) {
    var t = Y.querySelector(e);
    if (!t)
      throw new Error("Selector " + e + " did not match a DOM element");
    return t;
  }
  return e;
}, T = function(e, t, r) {
  var i = e[t];
  return i !== void 0 ? i : r;
}, ae = function(e, t, r, i) {
  if (t) {
    if (i === "end")
      return 0;
    if (i === "center")
      return e / 2;
  } else if (r) {
    if (i === "start")
      return 0;
    if (i === "center")
      return e / 2;
  }
  return e;
}, Zr = function(e, t) {
  var r = Y.createElement("div");
  return r.className = "gutter gutter-" + t, r;
}, Yr = function(e, t, r) {
  var i = {};
  return Xe(t) ? i[e] = t : i[e] = Qr + "(" + t + "% - " + r + "px)", i;
}, Kr = function(e, t) {
  var r;
  return r = {}, r[e] = t + "px", r;
}, ga = function(e, t) {
  if (t === void 0 && (t = {}), Ae)
    return {};
  var r = e, i, n, a, u, l, o;
  Array.from && (r = Array.from(r));
  var v = $e(r[0]), g = v.parentNode, p = getComputedStyle ? getComputedStyle(g) : null, b = p ? p.flexDirection : null, _ = T(t, "sizes") || r.map(function() {
    return 100 / r.length;
  }), m = T(t, "minSize", 100), h = Array.isArray(m) ? m : r.map(function() {
    return m;
  }), w = T(t, "maxSize", 1 / 0), G = Array.isArray(w) ? w : r.map(function() {
    return w;
  }), S = T(t, "expandToMin", !1), z = T(t, "gutterSize", 10), $ = T(t, "gutterAlign", "center"), X = T(t, "snapOffset", 30), K = Array.isArray(X) ? X : r.map(function() {
    return X;
  }), R = T(t, "dragInterval", 1), A = T(t, "direction", ne), M = T(
    t,
    "cursor",
    A === ne ? "col-resize" : "row-resize"
  ), H = T(t, "gutter", Zr), Le = T(
    t,
    "elementStyle",
    Yr
  ), gr = T(t, "gutterStyle", Kr);
  A === ne ? (i = "width", n = "clientX", a = "left", u = "right", l = "clientWidth") : A === "vertical" && (i = "height", n = "clientY", a = "top", u = "bottom", l = "clientHeight");
  function q(f, s, c, d) {
    var E = Le(i, s, c, d);
    Object.keys(E).forEach(function(x) {
      f.style[x] = E[x];
    });
  }
  function vr(f, s, c) {
    var d = gr(i, s, c);
    Object.keys(d).forEach(function(E) {
      f.style[E] = d[E];
    });
  }
  function J() {
    return o.map(function(f) {
      return f.size;
    });
  }
  function Oe(f) {
    return "touches" in f ? f.touches[0][n] : f[n];
  }
  function Pe(f) {
    var s = o[this.a], c = o[this.b], d = s.size + c.size;
    s.size = f / this.size * d, c.size = d - f / this.size * d, q(s.element, s.size, this[O], s.i), q(c.element, c.size, this[D], c.i);
  }
  function hr(f) {
    var s, c = o[this.a], d = o[this.b];
    this.dragging && (s = Oe(f) - this.start + (this[O] - this.dragOffset), R > 1 && (s = Math.round(s / R) * R), s <= c.minSize + c.snapOffset + this[O] ? s = c.minSize + this[O] : s >= this.size - (d.minSize + d.snapOffset + this[D]) && (s = this.size - (d.minSize + this[D])), s >= c.maxSize - c.snapOffset + this[O] ? s = c.maxSize + this[O] : s <= this.size - (d.maxSize - d.snapOffset + this[D]) && (s = this.size - (d.maxSize + this[D])), Pe.call(this, s), T(t, "onDrag", P)(J()));
  }
  function Fe() {
    var f = o[this.a].element, s = o[this.b].element, c = f[he](), d = s[he]();
    this.size = c[i] + d[i] + this[O] + this[D], this.start = c[a], this.end = c[u];
  }
  function _r(f) {
    if (!getComputedStyle)
      return null;
    var s = getComputedStyle(f);
    if (!s)
      return null;
    var c = f[l];
    return c === 0 ? null : (A === ne ? c -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) : c -= parseFloat(s.paddingTop) + parseFloat(s.paddingBottom), c);
  }
  function Re(f) {
    var s = _r(g);
    if (s === null || h.reduce(function(x, C) {
      return x + C;
    }, 0) > s)
      return f;
    var c = 0, d = [], E = f.map(function(x, C) {
      var j = s * x / 100, ee = ae(
        z,
        C === 0,
        C === f.length - 1,
        $
      ), re = h[C] + ee;
      return j < re ? (c += re - j, d.push(0), re) : (d.push(j - re), j);
    });
    return c === 0 ? f : E.map(function(x, C) {
      var j = x;
      if (c > 0 && d[C] - c > 0) {
        var ee = Math.min(
          c,
          d[C] - c
        );
        c -= ee, j = x - ee;
      }
      return j / s * 100;
    });
  }
  function br() {
    var f = this, s = o[f.a].element, c = o[f.b].element;
    f.dragging && T(t, "onDragEnd", P)(J()), f.dragging = !1, k[L]("mouseup", f.stop), k[L]("touchend", f.stop), k[L]("touchcancel", f.stop), k[L]("mousemove", f.move), k[L]("touchmove", f.move), f.stop = null, f.move = null, s[L]("selectstart", P), s[L]("dragstart", P), c[L]("selectstart", P), c[L]("dragstart", P), s.style.userSelect = "", s.style.webkitUserSelect = "", s.style.MozUserSelect = "", s.style.pointerEvents = "", c.style.userSelect = "", c.style.webkitUserSelect = "", c.style.MozUserSelect = "", c.style.pointerEvents = "", f.gutter.style.cursor = "", f.parent.style.cursor = "", Y.body.style.cursor = "";
  }
  function mr(f) {
    if (!("button" in f && f.button !== 0)) {
      var s = this, c = o[s.a].element, d = o[s.b].element;
      s.dragging || T(t, "onDragStart", P)(J()), f.preventDefault(), s.dragging = !0, s.move = hr.bind(s), s.stop = br.bind(s), k[I]("mouseup", s.stop), k[I]("touchend", s.stop), k[I]("touchcancel", s.stop), k[I]("mousemove", s.move), k[I]("touchmove", s.move), c[I]("selectstart", P), c[I]("dragstart", P), d[I]("selectstart", P), d[I]("dragstart", P), c.style.userSelect = "none", c.style.webkitUserSelect = "none", c.style.MozUserSelect = "none", c.style.pointerEvents = "none", d.style.userSelect = "none", d.style.webkitUserSelect = "none", d.style.MozUserSelect = "none", d.style.pointerEvents = "none", s.gutter.style.cursor = M, s.parent.style.cursor = M, Y.body.style.cursor = M, Fe.call(s), s.dragOffset = Oe(f) - s.end;
    }
  }
  _ = Re(_);
  var N = [];
  o = r.map(function(f, s) {
    var c = {
      element: $e(f),
      size: _[s],
      minSize: h[s],
      maxSize: G[s],
      snapOffset: K[s],
      i: s
    }, d;
    if (s > 0 && (d = {
      a: s - 1,
      b: s,
      dragging: !1,
      direction: A,
      parent: g
    }, d[O] = ae(
      z,
      s - 1 === 0,
      !1,
      $
    ), d[D] = ae(
      z,
      !1,
      s === r.length - 1,
      $
    ), b === "row-reverse" || b === "column-reverse")) {
      var E = d.a;
      d.a = d.b, d.b = E;
    }
    if (s > 0) {
      var x = H(s, A, c.element);
      vr(x, z, s), d[Q] = mr.bind(d), x[I](
        "mousedown",
        d[Q]
      ), x[I](
        "touchstart",
        d[Q]
      ), g.insertBefore(x, c.element), d.gutter = x;
    }
    return q(
      c.element,
      c.size,
      ae(
        z,
        s === 0,
        s === r.length - 1,
        $
      ),
      s
    ), s > 0 && N.push(d), c;
  });
  function Be(f) {
    var s = f.i === N.length, c = s ? N[f.i - 1] : N[f.i];
    Fe.call(c);
    var d = s ? c.size - f.minSize - c[D] : f.minSize + c[O];
    Pe.call(c, d);
  }
  o.forEach(function(f) {
    var s = f.element[he]()[i];
    s < f.minSize && (S ? Be(f) : f.minSize = s);
  });
  function yr(f) {
    var s = Re(f);
    s.forEach(function(c, d) {
      if (d > 0) {
        var E = N[d - 1], x = o[E.a], C = o[E.b];
        x.size = s[d - 1], C.size = c, q(x.element, x.size, E[O], x.i), q(C.element, C.size, E[D], C.i);
      }
    });
  }
  function wr(f, s) {
    N.forEach(function(c) {
      if (s !== !0 ? c.parent.removeChild(c.gutter) : (c.gutter[L](
        "mousedown",
        c[Q]
      ), c.gutter[L](
        "touchstart",
        c[Q]
      )), f !== !0) {
        var d = Le(
          i,
          c.a.size,
          c[O]
        );
        Object.keys(d).forEach(function(E) {
          o[c.a].element.style[E] = "", o[c.b].element.style[E] = "";
        });
      }
    });
  }
  return {
    setSizes: yr,
    getSizes: J,
    collapse: function(s) {
      Be(o[s]);
    },
    destroy: wr,
    parent: g,
    pairs: N
  };
};
function va(e) {
  return new Promise((t, r) => {
    const i = new FileReader();
    i.onload = () => t(i.result), i.onerror = () => r(i.error), i.readAsText(e);
  });
}
var me = { exports: {} }, y = {}, ye = { exports: {} }, W = {};
function qe() {
  var e = {};
  return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e;
}
function Jr(e, t, r) {
}
function et(e, t, r) {
}
var rt = /javascript\s*\:/img;
function tt(e, t) {
  return rt.test(t) ? "" : t;
}
W.whiteList = qe();
W.getDefaultWhiteList = qe;
W.onAttr = Jr;
W.onIgnoreAttr = et;
W.safeAttrValue = tt;
var it = {
  indexOf: function(e, t) {
    var r, i;
    if (Array.prototype.indexOf)
      return e.indexOf(t);
    for (r = 0, i = e.length; r < i; r++)
      if (e[r] === t)
        return r;
    return -1;
  },
  forEach: function(e, t, r) {
    var i, n;
    if (Array.prototype.forEach)
      return e.forEach(t, r);
    for (i = 0, n = e.length; i < n; i++)
      t.call(r, e[i], i, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(e) {
    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
  }
}, Z = it;
function nt(e, t) {
  e = Z.trimRight(e), e[e.length - 1] !== ";" && (e += ";");
  var r = e.length, i = !1, n = 0, a = 0, u = "";
  function l() {
    if (!i) {
      var g = Z.trim(e.slice(n, a)), p = g.indexOf(":");
      if (p !== -1) {
        var b = Z.trim(g.slice(0, p)), _ = Z.trim(g.slice(p + 1));
        if (b) {
          var m = t(n, u.length, b, _, g);
          m && (u += m + "; ");
        }
      }
    }
    n = a + 1;
  }
  for (; a < r; a++) {
    var o = e[a];
    if (o === "/" && e[a + 1] === "*") {
      var v = e.indexOf("*/", a + 2);
      if (v === -1)
        break;
      a = v + 1, n = a + 1, i = !1;
    } else
      o === "(" ? i = !0 : o === ")" ? i = !1 : o === ";" ? i || l() : o === `
` && l();
  }
  return Z.trim(u);
}
var at = nt, oe = W, ot = at;
function De(e) {
  return e == null;
}
function st(e) {
  var t = {};
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Qe(e) {
  e = st(e || {}), e.whiteList = e.whiteList || oe.whiteList, e.onAttr = e.onAttr || oe.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || oe.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || oe.safeAttrValue, this.options = e;
}
Qe.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e)
    return "";
  var t = this, r = t.options, i = r.whiteList, n = r.onAttr, a = r.onIgnoreAttr, u = r.safeAttrValue, l = ot(e, function(o, v, g, p, b) {
    var _ = i[g], m = !1;
    if (_ === !0 ? m = _ : typeof _ == "function" ? m = _(p) : _ instanceof RegExp && (m = _.test(p)), m !== !0 && (m = !1), p = u(g, p), !!p) {
      var h = {
        position: v,
        sourcePosition: o,
        source: b,
        isWhite: m
      };
      if (m) {
        var w = n(g, p, h);
        return De(w) ? g + ":" + p : w;
      } else {
        var w = a(g, p, h);
        if (!De(w))
          return w;
      }
    }
  });
  return l;
};
var lt = Qe;
(function(e, t) {
  var r = W, i = lt;
  function n(u, l) {
    var o = new i(l);
    return o.process(u);
  }
  t = e.exports = n, t.FilterCSS = i;
  for (var a in r)
    t[a] = r[a];
  typeof window < "u" && (window.filterCSS = e.exports);
})(ye, ye.exports);
var Ce = ye.exports, ke = {
  indexOf: function(e, t) {
    var r, i;
    if (Array.prototype.indexOf)
      return e.indexOf(t);
    for (r = 0, i = e.length; r < i; r++)
      if (e[r] === t)
        return r;
    return -1;
  },
  forEach: function(e, t, r) {
    var i, n;
    if (Array.prototype.forEach)
      return e.forEach(t, r);
    for (i = 0, n = e.length; i < n; i++)
      t.call(r, e[i], i, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(e) {
    var t = /\s|\n|\t/, r = t.exec(e);
    return r ? r.index : -1;
  }
}, ut = Ce.FilterCSS, ct = Ce.getDefaultWhiteList, de = ke;
function Ze() {
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
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
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
var Ye = new ut();
function ft(e, t, r) {
}
function dt(e, t, r) {
}
function pt(e, t, r) {
}
function gt(e, t, r) {
}
function Ke(e) {
  return e.replace(ht, "&lt;").replace(_t, "&gt;");
}
function vt(e, t, r, i) {
  if (r = nr(r), t === "href" || t === "src") {
    if (r = de.trim(r), r === "#")
      return "#";
    if (!(r.substr(0, 7) === "http://" || r.substr(0, 8) === "https://" || r.substr(0, 7) === "mailto:" || r.substr(0, 4) === "tel:" || r.substr(0, 11) === "data:image/" || r.substr(0, 6) === "ftp://" || r.substr(0, 2) === "./" || r.substr(0, 3) === "../" || r[0] === "#" || r[0] === "/"))
      return "";
  } else if (t === "background") {
    if (se.lastIndex = 0, se.test(r))
      return "";
  } else if (t === "style") {
    if (Ue.lastIndex = 0, Ue.test(r) || (Me.lastIndex = 0, Me.test(r) && (se.lastIndex = 0, se.test(r))))
      return "";
    i !== !1 && (i = i || Ye, r = i.process(r));
  }
  return r = ar(r), r;
}
var ht = /</g, _t = />/g, bt = /"/g, mt = /&quot;/g, yt = /&#([a-zA-Z0-9]*);?/gim, wt = /&colon;?/gim, St = /&newline;?/gim, se = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, Ue = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, Me = /u\s*r\s*l\s*\(.*/gi;
function Je(e) {
  return e.replace(bt, "&quot;");
}
function er(e) {
  return e.replace(mt, '"');
}
function rr(e) {
  return e.replace(yt, function(r, i) {
    return i[0] === "x" || i[0] === "X" ? String.fromCharCode(parseInt(i.substr(1), 16)) : String.fromCharCode(parseInt(i, 10));
  });
}
function tr(e) {
  return e.replace(wt, ":").replace(St, " ");
}
function ir(e) {
  for (var t = "", r = 0, i = e.length; r < i; r++)
    t += e.charCodeAt(r) < 32 ? " " : e.charAt(r);
  return de.trim(t);
}
function nr(e) {
  return e = er(e), e = rr(e), e = tr(e), e = ir(e), e;
}
function ar(e) {
  return e = Je(e), e = Ke(e), e;
}
function xt() {
  return "";
}
function Et(e, t) {
  typeof t != "function" && (t = function() {
  });
  var r = !Array.isArray(e);
  function i(u) {
    return r ? !0 : de.indexOf(e, u) !== -1;
  }
  var n = [], a = !1;
  return {
    onIgnoreTag: function(u, l, o) {
      if (i(u))
        if (o.isClosing) {
          var v = "[/removed]", g = o.position + v.length;
          return n.push([
            a !== !1 ? a : o.position,
            g
          ]), a = !1, v;
        } else
          return a || (a = o.position), "[removed]";
      else
        return t(u, l, o);
    },
    remove: function(u) {
      var l = "", o = 0;
      return de.forEach(n, function(v) {
        l += u.slice(o, v[0]), o = v[1];
      }), l += u.slice(o), l;
    }
  };
}
function Tt(e) {
  for (var t = "", r = 0; r < e.length; ) {
    var i = e.indexOf("<!--", r);
    if (i === -1) {
      t += e.slice(r);
      break;
    }
    t += e.slice(r, i);
    var n = e.indexOf("-->", i);
    if (n === -1)
      break;
    r = n + 3;
  }
  return t;
}
function zt(e) {
  var t = e.split("");
  return t = t.filter(function(r) {
    var i = r.charCodeAt(0);
    return i === 127 ? !1 : i <= 31 ? i === 10 || i === 13 : !0;
  }), t.join("");
}
y.whiteList = Ze();
y.getDefaultWhiteList = Ze;
y.onTag = ft;
y.onIgnoreTag = dt;
y.onTagAttr = pt;
y.onIgnoreTagAttr = gt;
y.safeAttrValue = vt;
y.escapeHtml = Ke;
y.escapeQuote = Je;
y.unescapeQuote = er;
y.escapeHtmlEntities = rr;
y.escapeDangerHtml5Entities = tr;
y.clearNonPrintableCharacter = ir;
y.friendlyAttrValue = nr;
y.escapeAttrValue = ar;
y.onIgnoreTagStripAll = xt;
y.StripTagBody = Et;
y.stripCommentTag = Tt;
y.stripBlankChar = zt;
y.cssFilter = Ye;
y.getDefaultCSSWhiteList = ct;
var pe = {}, U = ke;
function At(e) {
  var t = U.spaceIndex(e), r;
  return t === -1 ? r = e.slice(1, -1) : r = e.slice(1, t + 1), r = U.trim(r).toLowerCase(), r.slice(0, 1) === "/" && (r = r.slice(1)), r.slice(-1) === "/" && (r = r.slice(0, -1)), r;
}
function Ct(e) {
  return e.slice(0, 2) === "</";
}
function kt(e, t, r) {
  var i = "", n = 0, a = !1, u = !1, l = 0, o = e.length, v = "", g = "";
  e:
    for (l = 0; l < o; l++) {
      var p = e.charAt(l);
      if (a === !1) {
        if (p === "<") {
          a = l;
          continue;
        }
      } else if (u === !1) {
        if (p === "<") {
          i += r(e.slice(n, l)), a = l, n = l;
          continue;
        }
        if (p === ">" || l === o - 1) {
          i += r(e.slice(n, a)), g = e.slice(a, l + 1), v = At(g), i += t(
            a,
            i.length,
            v,
            g,
            Ct(g)
          ), n = l + 1, a = !1;
          continue;
        }
        if (p === '"' || p === "'")
          for (var b = 1, _ = e.charAt(l - b); _.trim() === "" || _ === "="; ) {
            if (_ === "=") {
              u = p;
              continue e;
            }
            _ = e.charAt(l - ++b);
          }
      } else if (p === u) {
        u = !1;
        continue;
      }
    }
  return n < o && (i += r(e.substr(n))), i;
}
var It = /[^a-zA-Z0-9\\_:.-]/gim;
function Lt(e, t) {
  var r = 0, i = 0, n = [], a = !1, u = e.length;
  function l(b, _) {
    if (b = U.trim(b), b = b.replace(It, "").toLowerCase(), !(b.length < 1)) {
      var m = t(b, _ || "");
      m && n.push(m);
    }
  }
  for (var o = 0; o < u; o++) {
    var v = e.charAt(o), g, p;
    if (a === !1 && v === "=") {
      a = e.slice(r, o), r = o + 1, i = e.charAt(r) === '"' || e.charAt(r) === "'" ? r : Pt(e, o + 1);
      continue;
    }
    if (a !== !1 && o === i) {
      if (p = e.indexOf(v, o + 1), p === -1)
        break;
      g = U.trim(e.slice(i + 1, p)), l(a, g), a = !1, o = p, r = o + 1;
      continue;
    }
    if (/\s|\n|\t/.test(v))
      if (e = e.replace(/\s|\n|\t/g, " "), a === !1)
        if (p = Ot(e, o), p === -1) {
          g = U.trim(e.slice(r, o)), l(g), a = !1, r = o + 1;
          continue;
        } else {
          o = p - 1;
          continue;
        }
      else if (p = Ft(e, o - 1), p === -1) {
        g = U.trim(e.slice(r, o)), g = He(g), l(a, g), a = !1, r = o + 1;
        continue;
      } else
        continue;
  }
  return r < e.length && (a === !1 ? l(e.slice(r)) : l(a, He(U.trim(e.slice(r))))), U.trim(n.join(" "));
}
function Ot(e, t) {
  for (; t < e.length; t++) {
    var r = e[t];
    if (r !== " ")
      return r === "=" ? t : -1;
  }
}
function Pt(e, t) {
  for (; t < e.length; t++) {
    var r = e[t];
    if (r !== " ")
      return r === "'" || r === '"' ? t : -1;
  }
}
function Ft(e, t) {
  for (; t > 0; t--) {
    var r = e[t];
    if (r !== " ")
      return r === "=" ? t : -1;
  }
}
function Rt(e) {
  return e[0] === '"' && e[e.length - 1] === '"' || e[0] === "'" && e[e.length - 1] === "'";
}
function He(e) {
  return Rt(e) ? e.substr(1, e.length - 2) : e;
}
pe.parseTag = kt;
pe.parseAttr = Lt;
var Bt = Ce.FilterCSS, F = y, or = pe, $t = or.parseTag, Dt = or.parseAttr, ce = ke;
function le(e) {
  return e == null;
}
function Ut(e) {
  var t = ce.spaceIndex(e);
  if (t === -1)
    return {
      html: "",
      closing: e[e.length - 2] === "/"
    };
  e = ce.trim(e.slice(t + 1, -1));
  var r = e[e.length - 1] === "/";
  return r && (e = ce.trim(e.slice(0, -1))), {
    html: e,
    closing: r
  };
}
function Mt(e) {
  var t = {};
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Ht(e) {
  var t = {};
  for (var r in e)
    Array.isArray(e[r]) ? t[r.toLowerCase()] = e[r].map(function(i) {
      return i.toLowerCase();
    }) : t[r.toLowerCase()] = e[r];
  return t;
}
function sr(e) {
  e = Mt(e || {}), e.stripIgnoreTag && (e.onIgnoreTag && console.error(
    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
  ), e.onIgnoreTag = F.onIgnoreTagStripAll), e.whiteList || e.allowList ? e.whiteList = Ht(e.whiteList || e.allowList) : e.whiteList = F.whiteList, e.onTag = e.onTag || F.onTag, e.onTagAttr = e.onTagAttr || F.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || F.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || F.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || F.safeAttrValue, e.escapeHtml = e.escapeHtml || F.escapeHtml, this.options = e, e.css === !1 ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new Bt(e.css));
}
sr.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e)
    return "";
  var t = this, r = t.options, i = r.whiteList, n = r.onTag, a = r.onIgnoreTag, u = r.onTagAttr, l = r.onIgnoreTagAttr, o = r.safeAttrValue, v = r.escapeHtml, g = t.cssFilter;
  r.stripBlankChar && (e = F.stripBlankChar(e)), r.allowCommentTag || (e = F.stripCommentTag(e));
  var p = !1;
  r.stripIgnoreTagBody && (p = F.StripTagBody(
    r.stripIgnoreTagBody,
    a
  ), a = p.onIgnoreTag);
  var b = $t(
    e,
    function(_, m, h, w, G) {
      var S = {
        sourcePosition: _,
        position: m,
        isClosing: G,
        isWhite: Object.prototype.hasOwnProperty.call(i, h)
      }, z = n(h, w, S);
      if (!le(z))
        return z;
      if (S.isWhite) {
        if (S.isClosing)
          return "</" + h + ">";
        var $ = Ut(w), X = i[h], K = Dt($.html, function(R, A) {
          var M = ce.indexOf(X, R) !== -1, H = u(h, R, A, M);
          return le(H) ? M ? (A = o(h, R, A, g), A ? R + '="' + A + '"' : R) : (H = l(h, R, A, M), le(H) ? void 0 : H) : H;
        });
        return w = "<" + h, K && (w += " " + K), $.closing && (w += " /"), w += ">", w;
      } else
        return z = a(h, w, S), le(z) ? v(w) : z;
    },
    v
  );
  return p && (b = p.remove(b)), b;
};
var Nt = sr;
(function(e, t) {
  var r = y, i = pe, n = Nt;
  function a(l, o) {
    var v = new n(o);
    return v.process(l);
  }
  t = e.exports = a, t.filterXSS = a, t.FilterXSS = n, function() {
    for (var l in r)
      t[l] = r[l];
    for (var o in i)
      t[o] = i[o];
  }(), typeof window < "u" && (window.filterXSS = e.exports);
  function u() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  u() && (self.filterXSS = e.exports);
})(me, me.exports);
var jt = me.exports;
const ha = /* @__PURE__ */ Cr(jt);
function _a({ eventElements: e, initFunc: t, clickOutsideFunc: r }) {
  const i = (a) => {
    let u = a.target;
    for (; u !== null; ) {
      if (e.indexOf(u) !== -1)
        return;
      u = u.parentElement;
    }
    r && r(), n.destroy();
  }, n = {
    create: () => {
      t && t(), window.addEventListener("scroll", i, !0), window.addEventListener("mousedown", i);
    },
    destroy: () => {
      window.removeEventListener("scroll", i, !0), window.removeEventListener("mousedown", i);
    }
  };
  return n;
}
const ba = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
}, Wt = /* @__PURE__ */ (() => {
  let e = null;
  return () => e || (e = document.createElement("textarea"), e.style.position = "fixed", e.style.opacity = "0", e.style.top = "0", e.style.left = "0", e.style.zIndex = "-1", e.style.outline = "0 none", e.style.overflow = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("autocomplete", "off"), e.setAttribute("wrap", "hard"), e);
})(), ma = {
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
    const t = Wt();
    document.body.appendChild(t), t.focus(), t.value = e || "\0", t.select(), document.execCommand("copy"), t.remove();
  }
};
function* ya(e, t) {
  for (let r = 0; r < e; ++r)
    for (let i = 0; i < t; ++i)
      yield { y: r, x: i };
}
function wa(e, t) {
  for (let r = 0; r < e; ++r)
    t(r);
}
function Sa(e, t, r) {
  for (let i = 0; i < e; ++i)
    t(i) && r(i);
}
var we = function(e, t) {
  return we = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
  }, we(e, t);
};
function V(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  we(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Se(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], i = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function xe(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var i = r.call(e), n, a = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; )
      a.push(n.value);
  } catch (l) {
    u = { error: l };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return a;
}
function Ee(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, a; i < n; i++)
      (a || !(i in t)) && (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function B(e) {
  return typeof e == "function";
}
function lr(e) {
  var t = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var _e = lr(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(i, n) {
      return n + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Te(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var ge = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, i, n, a;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var l = Se(u), o = l.next(); !o.done; o = l.next()) {
              var v = o.value;
              v.remove(this);
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              o && !o.done && (r = l.return) && r.call(l);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          u.remove(this);
      var g = this.initialTeardown;
      if (B(g))
        try {
          g();
        } catch (h) {
          a = h instanceof _e ? h.errors : [h];
        }
      var p = this._finalizers;
      if (p) {
        this._finalizers = null;
        try {
          for (var b = Se(p), _ = b.next(); !_.done; _ = b.next()) {
            var m = _.value;
            try {
              Ne(m);
            } catch (h) {
              a = a ?? [], h instanceof _e ? a = Ee(Ee([], xe(a)), xe(h.errors)) : a.push(h);
            }
          }
        } catch (h) {
          i = { error: h };
        } finally {
          try {
            _ && !_.done && (n = b.return) && n.call(b);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (a)
        throw new _e(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Ne(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && Te(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && Te(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), ur = ge.EMPTY;
function cr(e) {
  return e instanceof ge || e && "closed" in e && B(e.remove) && B(e.add) && B(e.unsubscribe);
}
function Ne(e) {
  B(e) ? e() : e.unsubscribe();
}
var fr = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, dr = {
  setTimeout: function(e, t) {
    for (var r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Ee([e, t], xe(r)));
  },
  clearTimeout: function(e) {
    var t = dr.delegate;
    return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function Gt(e) {
  dr.setTimeout(function() {
    throw e;
  });
}
function je() {
}
function fe(e) {
  e();
}
var Ie = function(e) {
  V(t, e);
  function t(r) {
    var i = e.call(this) || this;
    return i.isStopped = !1, r ? (i.destination = r, cr(r) && r.add(i)) : i.destination = Qt, i;
  }
  return t.create = function(r, i, n) {
    return new ze(r, i, n);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(ge), Vt = Function.prototype.bind;
function be(e, t) {
  return Vt.call(e, t);
}
var Xt = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (i) {
        ue(i);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (i) {
        ue(i);
      }
    else
      ue(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        ue(r);
      }
  }, e;
}(), ze = function(e) {
  V(t, e);
  function t(r, i, n) {
    var a = e.call(this) || this, u;
    if (B(r) || !r)
      u = {
        next: r ?? void 0,
        error: i ?? void 0,
        complete: n ?? void 0
      };
    else {
      var l;
      a && fr.useDeprecatedNextContext ? (l = Object.create(r), l.unsubscribe = function() {
        return a.unsubscribe();
      }, u = {
        next: r.next && be(r.next, l),
        error: r.error && be(r.error, l),
        complete: r.complete && be(r.complete, l)
      }) : u = r;
    }
    return a.destination = new Xt(u), a;
  }
  return t;
}(Ie);
function ue(e) {
  Gt(e);
}
function qt(e) {
  throw e;
}
var Qt = {
  closed: !0,
  next: je,
  error: qt,
  complete: je
}, Zt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Yt(e) {
  return e;
}
function Kt(e) {
  return e.length === 0 ? Yt : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(i, n) {
      return n(i);
    }, r);
  };
}
var We = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, i) {
    var n = this, a = ei(t) ? t : new ze(t, r, i);
    return fe(function() {
      var u = n, l = u.operator, o = u.source;
      a.add(l ? l.call(a, o) : o ? n._subscribe(a) : n._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var i = this;
    return r = Ge(r), new r(function(n, a) {
      var u = new ze({
        next: function(l) {
          try {
            t(l);
          } catch (o) {
            a(o), u.unsubscribe();
          }
        },
        error: a,
        complete: n
      });
      i.subscribe(u);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[Zt] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return Kt(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = Ge(t), new t(function(i, n) {
      var a;
      r.subscribe(function(u) {
        return a = u;
      }, function(u) {
        return n(u);
      }, function() {
        return i(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ge(e) {
  var t;
  return (t = e ?? fr.Promise) !== null && t !== void 0 ? t : Promise;
}
function Jt(e) {
  return e && B(e.next) && B(e.error) && B(e.complete);
}
function ei(e) {
  return e && e instanceof Ie || Jt(e) && cr(e);
}
function ri(e) {
  return B(e == null ? void 0 : e.lift);
}
function ti(e) {
  return function(t) {
    if (ri(t))
      return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function ii(e, t, r, i, n) {
  return new ni(e, t, r, i, n);
}
var ni = function(e) {
  V(t, e);
  function t(r, i, n, a, u, l) {
    var o = e.call(this, r) || this;
    return o.onFinalize = u, o.shouldUnsubscribe = l, o._next = i ? function(v) {
      try {
        i(v);
      } catch (g) {
        r.error(g);
      }
    } : e.prototype._next, o._error = a ? function(v) {
      try {
        a(v);
      } catch (g) {
        r.error(g);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, o._complete = n ? function() {
      try {
        n();
      } catch (v) {
        r.error(v);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, o;
  }
  return t.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      e.prototype.unsubscribe.call(this), !i && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, t;
}(Ie), ai = lr(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), pr = function(e) {
  V(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var i = new Ve(this, this);
    return i.operator = r, i;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ai();
  }, t.prototype.next = function(r) {
    var i = this;
    fe(function() {
      var n, a;
      if (i._throwIfClosed(), !i.isStopped) {
        i.currentObservers || (i.currentObservers = Array.from(i.observers));
        try {
          for (var u = Se(i.currentObservers), l = u.next(); !l.done; l = u.next()) {
            var o = l.value;
            o.next(r);
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            l && !l.done && (a = u.return) && a.call(u);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var i = this;
    fe(function() {
      if (i._throwIfClosed(), !i.isStopped) {
        i.hasError = i.isStopped = !0, i.thrownError = r;
        for (var n = i.observers; n.length; )
          n.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    fe(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var i = r.observers; i.length; )
          i.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var i = this, n = this, a = n.hasError, u = n.isStopped, l = n.observers;
    return a || u ? ur : (this.currentObservers = null, l.push(r), new ge(function() {
      i.currentObservers = null, Te(l, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var i = this, n = i.hasError, a = i.thrownError, u = i.isStopped;
    n ? r.error(a) : u && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new We();
    return r.source = this, r;
  }, t.create = function(r, i) {
    return new Ve(r, i);
  }, t;
}(We), Ve = function(e) {
  V(t, e);
  function t(r, i) {
    var n = e.call(this) || this;
    return n.destination = r, n.source = i, n;
  }
  return t.prototype.next = function(r) {
    var i, n;
    (n = (i = this.destination) === null || i === void 0 ? void 0 : i.next) === null || n === void 0 || n.call(i, r);
  }, t.prototype.error = function(r) {
    var i, n;
    (n = (i = this.destination) === null || i === void 0 ? void 0 : i.error) === null || n === void 0 || n.call(i, r);
  }, t.prototype.complete = function() {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || i === void 0 || i.call(r);
  }, t.prototype._subscribe = function(r) {
    var i, n;
    return (n = (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(r)) !== null && n !== void 0 ? n : ur;
  }, t;
}(pr), oi = function(e) {
  V(t, e);
  function t(r) {
    var i = e.call(this) || this;
    return i._value = r, i;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(r) {
    var i = e.prototype._subscribe.call(this, r);
    return !i.closed && r.next(this._value), i;
  }, t.prototype.getValue = function() {
    var r = this, i = r.hasError, n = r.thrownError, a = r._value;
    if (i)
      throw n;
    return this._throwIfClosed(), a;
  }, t.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, t;
}(pr);
function si() {
  return ti(function(e, t) {
    var r, i = !1;
    e.subscribe(ii(t, function(n) {
      var a = r;
      r = n, i && t.next([a, n]), i = !0;
    }));
  });
}
class xa {
  constructor(t, r) {
    this._subscriptionList = [], this._state = new oi(t), this._pipe = r ? r(this._state) : this._state, this._value = t, this._pipe.pipe(si()).subscribe(([i, n]) => {
      this._value = n, this._subscriptionList.forEach((a) => {
        try {
          a(i, n);
        } catch (u) {
          console.error("ReactiveState Subscription Error", this.constructor.name, u);
        }
      });
    });
  }
  addSubscription(t) {
    this._subscriptionList.push(t);
  }
  removeSubscription(t) {
    const r = this._subscriptionList.indexOf(t);
    r >= 0 ? this._subscriptionList.splice(r, 1) : console.warn("ReactiveState.removeSubscription: subscriber not found");
  }
  next(t) {
    this._state.next(t);
  }
  get value() {
    return this._value;
  }
}
export {
  fa as $,
  Fi as A,
  Zi as B,
  Bi as C,
  mi as D,
  wi as E,
  bi as F,
  Ei as G,
  Yi as H,
  Di as I,
  Ui as J,
  ha as K,
  Jn as L,
  yi as M,
  Si as N,
  _i as O,
  en as P,
  jt as Q,
  wa as R,
  Ki as S,
  hi as T,
  la as U,
  Ji as V,
  ia as W,
  ua as X,
  ie as Y,
  xi as Z,
  $i as _,
  _a as a,
  Zn as a$,
  va as a0,
  di as a1,
  gi as a2,
  da as a3,
  pa as a4,
  ma as a5,
  ya as a6,
  Sa as a7,
  xa as a8,
  ti as a9,
  un as aA,
  cn as aB,
  Kn as aC,
  dn as aD,
  fn as aE,
  pn as aF,
  hn as aG,
  _n as aH,
  tn as aI,
  nn as aJ,
  xn as aK,
  jn as aL,
  Wn as aM,
  Mn as aN,
  Un as aO,
  Hn as aP,
  Nn as aQ,
  Ir as aR,
  Bn as aS,
  $n as aT,
  Dn as aU,
  Gn as aV,
  Vn as aW,
  Xn as aX,
  qn as aY,
  Qn as aZ,
  Yn as a_,
  ii as aa,
  Ln as ab,
  In as ac,
  On as ad,
  Gi as ae,
  kn as af,
  Pn as ag,
  Fn as ah,
  Ii as ai,
  Li as aj,
  En as ak,
  Tn as al,
  zn as am,
  Cn as an,
  Mi as ao,
  Hi as ap,
  Rn as aq,
  zi as ar,
  Ai as as,
  Ci as at,
  ki as au,
  gn as av,
  An as aw,
  vn as ax,
  bn as ay,
  ln as az,
  sa as b,
  an as b0,
  on as b1,
  sn as b2,
  mn as b3,
  yn as b4,
  wn as b5,
  Sn as b6,
  rn as b7,
  na as b8,
  ga as b9,
  ba as c,
  qr as d,
  ci as e,
  ji as f,
  pi as g,
  fi as h,
  ta as i,
  Ti as j,
  qi as k,
  oa as l,
  Xi as m,
  ea as n,
  kr as o,
  ra as p,
  aa as q,
  ca as r,
  vi as s,
  Oi as t,
  Pi as u,
  Ri as v,
  Vi as w,
  Ni as x,
  Wi as y,
  Qi as z
};
//# sourceMappingURL=rx-state-DkUPCYES.js.map
