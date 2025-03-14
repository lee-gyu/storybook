import "./chunks/_init-BIZHSL6w.js";
import { a2 as Rs, J as xs, a3 as bs, L as Ss, M as nr, a4 as ys, a5 as or, n as Es, p as ks, o as Is, v as Ts, m as Ms, s as Ls, a6 as Hs, q as Os, r as As, t as zs, u as Fs, G as Ds, a7 as Ws, H as Vn, I as rr, a8 as Ns, a9 as Ps, O as Ae, aa as Bs, ab as Vs, ac as Gs, ad as js, ae as Us, af as Ks, X as $s, ag as qs, ah as Ys, ai as Xs, aj as Zs, ak as Js, al as Qs, am as ei, an as ti, ao as sr, ap as Gn, aq as ni, ar as oi, j as Ee, as as ir, at as ri, au as si, av as ii, aw as lr, ax as ar, ay as cr, az as li, aA as ai, aB as ci, aC as ui, aD as di, aE as hi, aF as go, aG as fi, aH as gi, aI as mi, aJ as pi, aK as _i, aL as B, aM as _n, aN as wi, aO as Ci, aP as vi, aQ as Ri, aR as xi, l as mo, aS as bi, aT as Si, aU as yi, aV as Ei, aW as ki, aX as Ii, aY as Ti, aZ as Mi, a_ as Li, a$ as Hi, b0 as Oi, b1 as ur, b2 as dr, b3 as Ln, b4 as Ai, b5 as zi, a1 as Fi, b6 as Di, b7 as Wi, b8 as Ni, b9 as Pi, ba as Bi, bb as Vi, bc as Gi, bd as po, be as ji, bf as Ui, bg as Ki, bh as _o, bi as wo, bj as $i, bk as qi, T as Yi } from "./chunks/css-CRaalvBe.js";
import { r as N, g as Ue, h as Xi, I as Zi, d as Ji, e as Qi, i as el, c as tl, f as nl } from "./chunks/command-manager-BBIIIsTq.js";
import { h as hr, a as wn, b as jn, g as ct, j as Kt, r as ol, u as rl, v as sl, c as il, o as ll, f as al, s as cl } from "./chunks/floating-DHrukXbm.js";
import { c as Hn } from "./chunks/clsx-OuTLNxxd.js";
import { i as oe, d as ke } from "./chunks/index-B2FWDcG0.js";
import { o as ul, m as dl, g as Ke, a as Un, h as xt, c as hl, l as Y, R as Kn, d as fl, C as gl, k as ml } from "./chunks/rx-state-DO6mSiKM.js";
import { a as pl, c as Ze } from "./chunks/asserts-CpwDJsre.js";
import { c as fr, d as Qe, b as We } from "./chunks/outside-DpurI6XH.js";
import { p as _l } from "./chunks/pick-BLZiDVxr.js";
import { i as gr, r as wl, w as Cl } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { g as $n } from "./chunks/_commonjsHelpers-DaMA6jEr.js";
import { I as vl } from "./chunks/index-oHlTgW2C.js";
import { v as Rl } from "./chunks/v4-CKZ6klMF.js";
class xl {
  /* 커맨드 실행 인자 */
  _args;
  /* 실행을 위한 컴포넌트 인스턴스 */
  _instance;
  /* 되돌리기 위해 필요한 데이터 context */
  _undoContext;
  constructor(e, t) {
    this._args = t, this._instance = e, this._undoContext = this._getUndoContext();
  }
  /* 커맨드 실행 전, 되돌이기 위한 Context 정보를 저장 */
  _getUndoContext() {
    throw new Error("Not implemented");
  }
  /**
   * Redo 시 재실행
   * */
  _execute() {
    throw new Error("Not implemented");
  }
  /**
   * Undo 되돌리기
   * */
  _undo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 undo 가능한 상태인가?
   */
  get canUndo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 다시 되돌릴 수 있는 상태인가?
   */
  get canExecute() {
    throw new Error("Not implemented");
  }
  execute() {
    if (!this.canExecute)
      throw new Error("Can't execute command");
    this._execute(), this.onExecute();
  }
  undo() {
    if (!this.canUndo)
      throw new Error("Can't undo command");
    this._undo(), this.onUndo();
  }
  /**
   * Undo 이후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onUndo() {
  }
  /**
   * 되돌리기 후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onExecute() {
  }
}
function Cn(o, e) {
  return ul(function(t, n) {
    var r = 0;
    t.subscribe(dl(n, function(s) {
      n.next(o.call(e, s, r++));
    }));
  });
}
function Co(o, e, t) {
  return mr(o, t) && pr(e, t);
}
function Ne(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1"), t = parseInt(o.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function mr(o, e) {
  return o >= e.top && o <= e.bottom;
}
function pr(o, e) {
  return o >= e.left && o <= e.right;
}
function Mt(o, e, t) {
  t ? o.classList.add(e) : o.classList.remove(e);
}
function bl(o) {
  let e = o.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && n.dataset.ignoreAutoSize === void 0 && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function Sl(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const yl = 20, El = 5;
class fe {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getVerticalCellPadding({ paddingTop: e, paddingBottom: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingTop")) + (t ?? n.getThemeValue("grid.paddingBottom"));
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t), s = [n.icon, n.sortOrder].reduce((u, a) => a ? u + 1 : u, 0) * (yl + El), i = `${n.text ?? ""}`.split(`
`), l = s + r.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + N(1, i.length).reduce(
      (u, a) => Math.max(u, r.calculateWidth(i[a])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    return this.getVerticalCellPadding(t) + bl(e);
  }
  /**
   * 현재 셀 렌더러가 cell props를 write하여 변경이 일어났을 때 호출.
   * Undo / Redo 등의 작업, 또는 setCell 등의 작업에서 호출 됨.
   * 단, DOM click 등의 렌더러 내부에서 직접 access한 경우는 호출되지 않음.
   * @version ^2.18.0
   * @experimental 실험적 기능
   */
  onUpdateCell(e, t, n) {
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
  get canBeClear() {
    return !0;
  }
}
class J extends xl {
}
class ze extends J {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: _l(
        this._instance.getCellMetaInfo(e, t),
        n
      )
    };
  }
  _undo() {
    this._instance.setCell(this._args[0], this._args[1], this._undoContext.beforeValue);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
const wt = {
  checkbox: xs,
  checkboxWrapper: Ss,
  checkboxText: or,
  checkboxInput: nr,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, kl = 16, On = 6, Il = On * 2, Tl = 20;
class _r extends fe {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.classList.add(Rs, wt.checkbox), s.classList.add(bs, wt.checkboxWrapper), i.type = "checkbox", i.className = wt.checkboxInput, s.appendChild(i), n.icon && s.appendChild(Un(xt(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${ys} ${wt.checkboxText}`, l.innerText = n.label, s.appendChild(l);
    }
    return n.horizontalAlign && r.classList.add(wt[`horizontal_${n.horizontalAlign}`]), r.appendChild(s), i.checked = n.text === "true", s.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: a } = n.gridStore, c = new ze(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, a.pushCommandBlock(new Ue(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, r;
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t), s = n.label ? On + r.calculateWidth(n.label) : 0, i = n.icon ? On + Tl : 0;
    return kl + Il + s + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function Th(o) {
  const e = new _r(o ?? {});
  return () => e;
}
const vo = !1;
var qn = Array.isArray, Ml = Array.prototype.indexOf, Yn = Array.from, wr = Object.defineProperty, et = Object.getOwnPropertyDescriptor, Cr = Object.getOwnPropertyDescriptors, Ll = Object.prototype, Hl = Array.prototype, Xn = Object.getPrototypeOf;
const je = () => {
};
function Ol(o) {
  return o();
}
function $t(o) {
  for (var e = 0; e < o.length; e++)
    o[e]();
}
const Re = 2, vr = 4, nn = 8, Zn = 16, Pe = 32, yt = 64, qt = 128, _e = 256, Yt = 512, ie = 1024, Be = 2048, ht = 4096, Fe = 8192, on = 16384, Al = 32768, rn = 65536, zl = 1 << 19, Rr = 1 << 20, tt = Symbol("$state"), Fl = Symbol("legacy props"), Dl = Symbol("");
function xr(o) {
  return o === this.v;
}
function br(o, e) {
  return o != o ? e == e : o !== e || o !== null && typeof o == "object" || typeof o == "function";
}
function Sr(o) {
  return !br(o, this.v);
}
function Wl(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pl(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Et = !1, Kl = !1;
function $l() {
  Et = !0;
}
const Jn = 1, Qn = 2, yr = 4, ql = 8, Yl = 16, Xl = 1, Zl = 2, le = Symbol();
function Er(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let G = null;
function Ro(o) {
  G = o;
}
function ae(o) {
  return (
    /** @type {T} */
    kr().get(o)
  );
}
function Lt(o, e) {
  return kr().set(o, e), e;
}
function ge(o, e = !1, t) {
  G = {
    p: G,
    c: null,
    e: null,
    m: !1,
    s: o,
    x: null,
    l: null
  }, Et && !e && (G.l = {
    s: null,
    u: null,
    r1: [],
    r2: he(!1)
  });
}
function me(o) {
  const e = G;
  if (e !== null) {
    o !== void 0 && (e.x = o);
    const i = e.e;
    if (i !== null) {
      var t = V, n = P;
      e.e = null;
      try {
        for (var r = 0; r < i.length; r++) {
          var s = i[r];
          Ye(s.effect), qe(s.reaction), cn(s.fn);
        }
      } finally {
        Ye(t), qe(n);
      }
    }
    G = e.p, e.m = !0;
  }
  return o || /** @type {T} */
  {};
}
function sn() {
  return !Et || G !== null && G.l === null;
}
function kr(o) {
  return G === null && Er(), G.c ??= new Map(Jl(G) || void 0);
}
function Jl(o) {
  let e = o.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
function he(o, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: o,
    reactions: null,
    equals: xr,
    rv: 0,
    wv: 0
  };
  return t;
}
function Ie(o) {
  return /* @__PURE__ */ Ir(he(o));
}
// @__NO_SIDE_EFFECTS__
function ln(o, e = !1) {
  const t = he(o);
  return e || (t.equals = Sr), Et && G !== null && G.l !== null && (G.l.s ??= []).push(t), t;
}
function Ql(o, e = !1) {
  return /* @__PURE__ */ Ir(/* @__PURE__ */ ln(o, e));
}
// @__NO_SIDE_EFFECTS__
function Ir(o) {
  return P !== null && !Ce && (P.f & Re) !== 0 && (Me === null ? da([o]) : Me.push(o)), o;
}
function j(o, e) {
  return P !== null && !Ce && sn() && (P.f & (Re | Zn)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Me === null || !Me.includes(o)) && Ul(), An(o, e);
}
function An(o, e) {
  return o.equals(e) || (o.v, o.v = e, o.wv = Gr(), Tr(o, Be), sn() && V !== null && (V.f & ie) !== 0 && (V.f & (Pe | yt)) === 0 && (Oe === null ? ha([o]) : Oe.push(o))), e;
}
function Tr(o, e) {
  var t = o.reactions;
  if (t !== null)
    for (var n = sn(), r = t.length, s = 0; s < r; s++) {
      var i = t[s], l = i.f;
      (l & Be) === 0 && (!n && i === V || (Le(i, e), (l & (ie | _e)) !== 0 && ((l & Re) !== 0 ? Tr(
        /** @type {Derived} */
        i,
        ht
      ) : hn(
        /** @type {Effect} */
        i
      ))));
    }
}
let ea = !1;
function U(o, e = null, t) {
  if (typeof o != "object" || o === null || tt in o)
    return o;
  const n = Xn(o);
  if (n !== Ll && n !== Hl)
    return o;
  var r = /* @__PURE__ */ new Map(), s = qn(o), i = he(0);
  s && r.set("length", he(
    /** @type {any[]} */
    o.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    o,
    {
      defineProperty(u, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Vl();
        var d = r.get(a);
        return d === void 0 ? (d = he(c.value), r.set(a, d)) : j(d, U(c.value, l)), !0;
      },
      deleteProperty(u, a) {
        var c = r.get(a);
        if (c === void 0)
          a in u && r.set(a, he(le));
        else {
          if (s && typeof a == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(a);
            Number.isInteger(h) && h < d.v && j(d, h);
          }
          j(c, le), xo(i);
        }
        return !0;
      },
      get(u, a, c) {
        if (a === tt)
          return o;
        var d = r.get(a), h = a in u;
        if (d === void 0 && (!h || et(u, a)?.writable) && (d = he(U(h ? u[a] : le, l)), r.set(a, d)), d !== void 0) {
          var f = H(d);
          return f === le ? void 0 : f;
        }
        return Reflect.get(u, a, c);
      },
      getOwnPropertyDescriptor(u, a) {
        var c = Reflect.getOwnPropertyDescriptor(u, a);
        if (c && "value" in c) {
          var d = r.get(a);
          d && (c.value = H(d));
        } else if (c === void 0) {
          var h = r.get(a), f = h?.v;
          if (h !== void 0 && f !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(u, a) {
        if (a === tt)
          return !0;
        var c = r.get(a), d = c !== void 0 && c.v !== le || Reflect.has(u, a);
        if (c !== void 0 || V !== null && (!d || et(u, a)?.writable)) {
          c === void 0 && (c = he(d ? U(u[a], l) : le), r.set(a, c));
          var h = H(c);
          if (h === le)
            return !1;
        }
        return d;
      },
      set(u, a, c, d) {
        var h = r.get(a), f = a in u;
        if (s && a === "length")
          for (var w = c; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var _ = r.get(w + "");
            _ !== void 0 ? j(_, le) : w in u && (_ = he(le), r.set(w + "", _));
          }
        h === void 0 ? (!f || et(u, a)?.writable) && (h = he(void 0), j(h, U(c, l)), r.set(a, h)) : (f = h.v !== le, j(h, U(c, l)));
        var v = Reflect.getOwnPropertyDescriptor(u, a);
        if (v?.set && v.set.call(d, c), !f) {
          if (s && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(a);
            Number.isInteger(y) && y >= S.v && j(S, y + 1);
          }
          xo(i);
        }
        return !0;
      },
      ownKeys(u) {
        H(i);
        var a = Reflect.ownKeys(u).filter((h) => {
          var f = r.get(h);
          return f === void 0 || f.v !== le;
        });
        for (var [c, d] of r)
          d.v !== le && !(c in u) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Gl();
      }
    }
  );
}
function xo(o, e = 1) {
  j(o, o.v + e);
}
var bo, Mr, Lr, Hr;
function ta() {
  if (bo === void 0) {
    bo = window, Mr = /Firefox/.test(navigator.userAgent);
    var o = Element.prototype, e = Node.prototype;
    Lr = et(e, "firstChild").get, Hr = et(e, "nextSibling").get, o.__click = void 0, o.__className = void 0, o.__attributes = null, o.__styles = null, o.__e = void 0, Text.prototype.__t = void 0;
  }
}
function eo(o = "") {
  return document.createTextNode(o);
}
// @__NO_SIDE_EFFECTS__
function Xt(o) {
  return Lr.call(o);
}
// @__NO_SIDE_EFFECTS__
function an(o) {
  return Hr.call(o);
}
function ne(o, e) {
  return /* @__PURE__ */ Xt(o);
}
function Je(o, e) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Xt(
        /** @type {Node} */
        o
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ an(t) : t;
  }
}
function Te(o, e = 1, t = !1) {
  let n = o;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ an(n);
  return n;
}
function na(o) {
  o.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function $(o) {
  var e = Re | Be, t = P !== null && (P.f & Re) !== 0 ? (
    /** @type {Derived} */
    P
  ) : null;
  return V === null || t !== null && (t.f & _e) !== 0 ? e |= _e : V.f |= Rr, {
    ctx: G,
    deps: null,
    effects: null,
    equals: xr,
    f: e,
    fn: o,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? V
  };
}
// @__NO_SIDE_EFFECTS__
function oa(o) {
  const e = /* @__PURE__ */ $(o);
  return e.equals = Sr, e;
}
function Or(o) {
  var e = o.effects;
  if (e !== null) {
    o.effects = null;
    for (var t = 0; t < e.length; t += 1)
      $e(
        /** @type {Effect} */
        e[t]
      );
  }
}
function ra(o) {
  for (var e = o.parent; e !== null; ) {
    if ((e.f & Re) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function sa(o) {
  var e, t = V;
  Ye(ra(o));
  try {
    Or(o), e = Ur(o);
  } finally {
    Ye(t);
  }
  return e;
}
function Ar(o) {
  var e = sa(o), t = (Ge || (o.f & _e) !== 0) && o.deps !== null ? ht : ie;
  Le(o, t), o.equals(e) || (o.v = e, o.wv = Gr());
}
function zr(o) {
  V === null && P === null && Pl(), P !== null && (P.f & _e) !== 0 && V === null && Nl(), ro && Wl();
}
function ia(o, e) {
  var t = e.last;
  t === null ? e.last = e.first = o : (t.next = o, o.prev = t, e.last = o);
}
function ft(o, e, t, n = !0) {
  var r = (o & yt) !== 0, s = V, i = {
    ctx: G,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: o | Be,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (t)
    try {
      so(i), i.f |= Al;
    } catch (a) {
      throw $e(i), a;
    }
  else e !== null && hn(i);
  var l = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Rr | qt)) === 0;
  if (!l && !r && n && (s !== null && ia(i, s), P !== null && (P.f & Re) !== 0)) {
    var u = (
      /** @type {Derived} */
      P
    );
    (u.effects ??= []).push(i);
  }
  return i;
}
function to(o) {
  const e = ft(nn, null, !1);
  return Le(e, ie), e.teardown = o, e;
}
function bt(o) {
  zr();
  var e = V !== null && (V.f & Pe) !== 0 && G !== null && !G.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      G
    );
    (t.e ??= []).push({
      fn: o,
      effect: V,
      reaction: P
    });
  } else {
    var n = cn(o);
    return n;
  }
}
function la(o) {
  return zr(), Fr(o);
}
function aa(o) {
  const e = ft(yt, o, !0);
  return (t = {}) => new Promise((n) => {
    t.outro ? St(e, () => {
      $e(e), n(void 0);
    }) : ($e(e), n(void 0));
  });
}
function cn(o) {
  return ft(vr, o, !1);
}
function Fr(o) {
  return ft(nn, o, !0);
}
function xe(o, e = [], t = $) {
  const n = e.map(t);
  return un(() => o(...n.map(H)));
}
function un(o, e = 0) {
  return ft(nn | Zn | e, o, !0);
}
function ut(o, e = !0) {
  return ft(nn | Pe, o, !0, e);
}
function Dr(o) {
  var e = o.teardown;
  if (e !== null) {
    const t = ro, n = P;
    So(!0), qe(null);
    try {
      e.call(null);
    } finally {
      So(t), qe(n);
    }
  }
}
function Wr(o, e = !1) {
  var t = o.first;
  for (o.first = o.last = null; t !== null; ) {
    var n = t.next;
    $e(t, e), t = n;
  }
}
function ca(o) {
  for (var e = o.first; e !== null; ) {
    var t = e.next;
    (e.f & Pe) === 0 && $e(e), e = t;
  }
}
function $e(o, e = !0) {
  var t = !1;
  if ((e || (o.f & zl) !== 0) && o.nodes_start !== null) {
    for (var n = o.nodes_start, r = o.nodes_end; n !== null; ) {
      var s = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ an(n)
      );
      n.remove(), n = s;
    }
    t = !0;
  }
  Wr(o, e && !t), tn(o, 0), Le(o, on);
  var i = o.transitions;
  if (i !== null)
    for (const u of i)
      u.stop();
  Dr(o);
  var l = o.parent;
  l !== null && l.first !== null && Nr(o), o.next = o.prev = o.teardown = o.ctx = o.deps = o.fn = o.nodes_start = o.nodes_end = null;
}
function Nr(o) {
  var e = o.parent, t = o.prev, n = o.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), e !== null && (e.first === o && (e.first = n), e.last === o && (e.last = t));
}
function St(o, e) {
  var t = [];
  no(o, t, !0), Pr(t, () => {
    $e(o), e && e();
  });
}
function Pr(o, e) {
  var t = o.length;
  if (t > 0) {
    var n = () => --t || e();
    for (var r of o)
      r.out(n);
  } else
    e();
}
function no(o, e, t) {
  if ((o.f & Fe) === 0) {
    if (o.f ^= Fe, o.transitions !== null)
      for (const i of o.transitions)
        (i.is_global || t) && e.push(i);
    for (var n = o.first; n !== null; ) {
      var r = n.next, s = (n.f & rn) !== 0 || (n.f & Pe) !== 0;
      no(n, e, s ? t : !1), n = r;
    }
  }
}
function Zt(o) {
  Br(o, !0);
}
function Br(o, e) {
  if ((o.f & Fe) !== 0) {
    o.f ^= Fe, (o.f & ie) === 0 && (o.f ^= ie), kt(o) && (Le(o, Be), hn(o));
    for (var t = o.first; t !== null; ) {
      var n = t.next, r = (t.f & rn) !== 0 || (t.f & Pe) !== 0;
      Br(t, r ? e : !1), t = n;
    }
    if (o.transitions !== null)
      for (const s of o.transitions)
        (s.is_global || e) && s.in();
  }
}
let Jt = [];
function ua() {
  var o = Jt;
  Jt = [], $t(o);
}
function oo(o) {
  Jt.length === 0 && queueMicrotask(ua), Jt.push(o);
}
let Nt = !1, zn = !1, Qt = null, Pt = !1, ro = !1;
function So(o) {
  ro = o;
}
let Bt = [];
let P = null, Ce = !1;
function qe(o) {
  P = o;
}
let V = null;
function Ye(o) {
  V = o;
}
let Me = null;
function da(o) {
  Me = o;
}
let se = null, de = 0, Oe = null;
function ha(o) {
  Oe = o;
}
let Vr = 1, en = 0, Ge = !1;
function Gr() {
  return ++Vr;
}
function kt(o) {
  var e = o.f;
  if ((e & Be) !== 0)
    return !0;
  if ((e & ht) !== 0) {
    var t = o.deps, n = (e & _e) !== 0;
    if (t !== null) {
      var r, s, i = (e & Yt) !== 0, l = n && V !== null && !Ge, u = t.length;
      if (i || l) {
        var a = (
          /** @type {Derived} */
          o
        ), c = a.parent;
        for (r = 0; r < u; r++)
          s = t[r], (i || !s?.reactions?.includes(a)) && (s.reactions ??= []).push(a);
        i && (a.f ^= Yt), l && c !== null && (c.f & _e) === 0 && (a.f ^= _e);
      }
      for (r = 0; r < u; r++)
        if (s = t[r], kt(
          /** @type {Derived} */
          s
        ) && Ar(
          /** @type {Derived} */
          s
        ), s.wv > o.wv)
          return !0;
    }
    (!n || V !== null && !Ge) && Le(o, ie);
  }
  return !1;
}
function fa(o, e) {
  for (var t = e; t !== null; ) {
    if ((t.f & qt) !== 0)
      try {
        t.fn(o);
        return;
      } catch {
        t.f ^= qt;
      }
    t = t.parent;
  }
  throw Nt = !1, o;
}
function ga(o) {
  return (o.f & on) === 0 && (o.parent === null || (o.parent.f & qt) === 0);
}
function dn(o, e, t, n) {
  if (Nt) {
    if (t === null && (Nt = !1), ga(e))
      throw o;
    return;
  }
  t !== null && (Nt = !0);
  {
    fa(o, e);
    return;
  }
}
function jr(o, e, t = !0) {
  var n = o.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      (s.f & Re) !== 0 ? jr(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? Le(s, Be) : (s.f & ie) !== 0 && Le(s, ht), hn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ur(o) {
  var e = se, t = de, n = Oe, r = P, s = Ge, i = Me, l = G, u = Ce, a = o.f;
  se = /** @type {null | Value[]} */
  null, de = 0, Oe = null, Ge = (a & _e) !== 0 && (Ce || !Pt || P === null), P = (a & (Pe | yt)) === 0 ? o : null, Me = null, Ro(o.ctx), Ce = !1, en++;
  try {
    var c = (
      /** @type {Function} */
      (0, o.fn)()
    ), d = o.deps;
    if (se !== null) {
      var h;
      if (tn(o, de), d !== null && de > 0)
        for (d.length = de + se.length, h = 0; h < se.length; h++)
          d[de + h] = se[h];
      else
        o.deps = d = se;
      if (!Ge)
        for (h = de; h < d.length; h++)
          (d[h].reactions ??= []).push(o);
    } else d !== null && de < d.length && (tn(o, de), d.length = de);
    if (sn() && Oe !== null && !Ce && d !== null && (o.f & (Re | ht | Be)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Oe.length; h++)
        jr(
          Oe[h],
          /** @type {Effect} */
          o
        );
    return r !== null && en++, c;
  } finally {
    se = e, de = t, Oe = n, P = r, Ge = s, Me = i, Ro(l), Ce = u;
  }
}
function ma(o, e) {
  let t = e.reactions;
  if (t !== null) {
    var n = Ml.call(t, o);
    if (n !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[n] = t[r], t.pop());
    }
  }
  t === null && (e.f & Re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !se.includes(e)) && (Le(e, ht), (e.f & (_e | Yt)) === 0 && (e.f ^= Yt), Or(
    /** @type {Derived} **/
    e
  ), tn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function tn(o, e) {
  var t = o.deps;
  if (t !== null)
    for (var n = e; n < t.length; n++)
      ma(o, t[n]);
}
function so(o) {
  var e = o.f;
  if ((e & on) === 0) {
    Le(o, ie);
    var t = V, n = G, r = Pt;
    V = o, Pt = !0;
    try {
      (e & Zn) !== 0 ? ca(o) : Wr(o), Dr(o);
      var s = Ur(o);
      o.teardown = typeof s == "function" ? s : null, o.wv = Vr;
      var i = o.deps, l;
      vo && Kl && o.f & Be;
    } catch (u) {
      dn(u, o, t, n || o.ctx);
    } finally {
      Pt = r, V = t;
    }
  }
}
function pa() {
  try {
    Bl();
  } catch (o) {
    if (Qt !== null)
      dn(o, Qt, null);
    else
      throw o;
  }
}
function _a() {
  try {
    for (var o = 0; Bt.length > 0; ) {
      o++ > 1e3 && pa();
      var e = Bt, t = e.length;
      Bt = [];
      for (var n = 0; n < t; n++) {
        var r = e[n];
        (r.f & ie) === 0 && (r.f ^= ie);
        var s = Ca(r);
        wa(s);
      }
    }
  } finally {
    zn = !1, Qt = null;
  }
}
function wa(o) {
  var e = o.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var n = o[t];
      if ((n.f & (on | Fe)) === 0)
        try {
          kt(n) && (so(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Nr(n) : n.fn = null));
        } catch (r) {
          dn(r, n, null, n.ctx);
        }
    }
}
function hn(o) {
  zn || (zn = !0, queueMicrotask(_a));
  for (var e = Qt = o; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if ((t & (yt | Pe)) !== 0) {
      if ((t & ie) === 0) return;
      e.f ^= ie;
    }
  }
  Bt.push(e);
}
function Ca(o) {
  var e = [], t = o.first;
  e: for (; t !== null; ) {
    var n = t.f, r = (n & Pe) !== 0, s = r && (n & ie) !== 0, i = t.next;
    if (!s && (n & Fe) === 0) {
      if ((n & vr) !== 0)
        e.push(t);
      else if (r)
        t.f ^= ie;
      else {
        var l = P;
        try {
          P = t, kt(t) && so(t);
        } catch (c) {
          dn(c, t, null, t.ctx);
        } finally {
          P = l;
        }
      }
      var u = t.first;
      if (u !== null) {
        t = u;
        continue;
      }
    }
    if (i === null) {
      let c = t.parent;
      for (; c !== null; ) {
        if (o === c)
          break e;
        var a = c.next;
        if (a !== null) {
          t = a;
          continue e;
        }
        c = c.parent;
      }
    }
    t = i;
  }
  return e;
}
function H(o) {
  var e = o.f, t = (e & Re) !== 0;
  if (P !== null && !Ce) {
    Me !== null && Me.includes(o) && jl();
    var n = P.deps;
    o.rv < en && (o.rv = en, se === null && n !== null && n[de] === o ? de++ : se === null ? se = [o] : (!Ge || !se.includes(o)) && se.push(o));
  } else if (t && /** @type {Derived} */
  o.deps === null && /** @type {Derived} */
  o.effects === null) {
    var r = (
      /** @type {Derived} */
      o
    ), s = r.parent;
    s !== null && (s.f & _e) === 0 && (r.f ^= _e);
  }
  return t && (r = /** @type {Derived} */
  o, kt(r) && Ar(r)), o.v;
}
function gt(o) {
  var e = Ce;
  try {
    return Ce = !0, o();
  } finally {
    Ce = e;
  }
}
const va = -7169;
function Le(o, e) {
  o.f = o.f & va | e;
}
function Ra(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (tt in o)
      Fn(o);
    else if (!Array.isArray(o))
      for (let e in o) {
        const t = o[e];
        typeof t == "object" && t && tt in t && Fn(t);
      }
  }
}
function Fn(o, e = /* @__PURE__ */ new Set()) {
  if (typeof o == "object" && o !== null && // We don't want to traverse DOM elements
  !(o instanceof EventTarget) && !e.has(o)) {
    e.add(o), o instanceof Date && o.getTime();
    for (let n in o)
      try {
        Fn(o[n], e);
      } catch {
      }
    const t = Xn(o);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const n = Cr(t);
      for (let r in n) {
        const s = n[r].get;
        if (s)
          try {
            s.call(o);
          } catch {
          }
      }
    }
  }
}
const xa = ["touchstart", "touchmove"];
function ba(o) {
  return xa.includes(o);
}
function Sa(o) {
  var e = P, t = V;
  qe(null), Ye(null);
  try {
    return o();
  } finally {
    qe(e), Ye(t);
  }
}
const Kr = /* @__PURE__ */ new Set(), Dn = /* @__PURE__ */ new Set();
function ya(o, e, t, n = {}) {
  function r(s) {
    if (n.capture || vt.call(e, s), !s.cancelBubble)
      return Sa(() => t?.call(this, s));
  }
  return o.startsWith("pointer") || o.startsWith("touch") || o === "wheel" ? oo(() => {
    e.addEventListener(o, r, n);
  }) : e.addEventListener(o, r, n), r;
}
function Ea(o, e, t, n, r) {
  var s = { capture: n, passive: r }, i = ya(o, e, t, s);
  (e === document.body || e === window || e === document) && to(() => {
    e.removeEventListener(o, i, s);
  });
}
function fn(o) {
  for (var e = 0; e < o.length; e++)
    Kr.add(o[e]);
  for (var t of Dn)
    t(o);
}
function vt(o) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), n = o.type, r = o.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || o.target
  ), i = 0, l = o.__root;
  if (l) {
    var u = r.indexOf(l);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      o.__root = e;
      return;
    }
    var a = r.indexOf(e);
    if (a === -1)
      return;
    u <= a && (i = u);
  }
  if (s = /** @type {Element} */
  r[i] || o.target, s !== e) {
    wr(o, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var c = P, d = V;
    qe(null), Ye(null);
    try {
      for (var h, f = []; s !== null; ) {
        var w = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var _ = s["__" + n];
          if (_ !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          o.target === s))
            if (qn(_)) {
              var [v, ...S] = _;
              v.apply(s, [o, ...S]);
            } else
              _.call(s, o);
        } catch (y) {
          h ? f.push(y) : h = y;
        }
        if (o.cancelBubble || w === e || w === null)
          break;
        s = w;
      }
      if (h) {
        for (let y of f)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      o.__root = e, delete o.currentTarget, qe(c), Ye(d);
    }
  }
}
function ka(o) {
  var e = document.createElement("template");
  return e.innerHTML = o, e.content;
}
function Wn(o, e) {
  var t = (
    /** @type {Effect} */
    V
  );
  t.nodes_start === null && (t.nodes_start = o, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function te(o, e) {
  var t = (e & Xl) !== 0, n = (e & Zl) !== 0, r, s = !o.startsWith("<!>");
  return () => {
    r === void 0 && (r = ka(s ? o : "<!>" + o), t || (r = /** @type {Node} */
    /* @__PURE__ */ Xt(r)));
    var i = (
      /** @type {TemplateNode} */
      n || Mr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xt(i)
      ), u = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Wn(l, u);
    } else
      Wn(i, i);
    return i;
  };
}
function vn() {
  var o = document.createDocumentFragment(), e = document.createComment(""), t = eo();
  return o.append(e, t), Wn(e, t), o;
}
function q(o, e) {
  o !== null && o.before(
    /** @type {Node} */
    e
  );
}
function dt(o, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (o.__t ??= o.nodeValue) && (o.__t = t, o.nodeValue = t + "");
}
function $r(o, e) {
  return Ia(o, e);
}
const st = /* @__PURE__ */ new Map();
function Ia(o, { target: e, anchor: t, props: n = {}, events: r, context: s, intro: i = !0 }) {
  ta();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var h = 0; h < d.length; h++) {
      var f = d[h];
      if (!l.has(f)) {
        l.add(f);
        var w = ba(f);
        e.addEventListener(f, vt, { passive: w });
        var _ = st.get(f);
        _ === void 0 ? (document.addEventListener(f, vt, { passive: w }), st.set(f, 1)) : st.set(f, _ + 1);
      }
    }
  };
  u(Yn(Kr)), Dn.add(u);
  var a = void 0, c = aa(() => {
    var d = t ?? e.appendChild(eo());
    return ut(() => {
      if (s) {
        ge({});
        var h = (
          /** @type {ComponentContext} */
          G
        );
        h.c = s;
      }
      r && (n.$$events = r), a = o(d, n) || {}, s && me();
    }), () => {
      for (var h of l) {
        e.removeEventListener(h, vt);
        var f = (
          /** @type {number} */
          st.get(h)
        );
        --f === 0 ? (document.removeEventListener(h, vt), st.delete(h)) : st.set(h, f);
      }
      Dn.delete(u), d !== t && d.parentNode?.removeChild(d);
    };
  });
  return Nn.set(a, c), a;
}
let Nn = /* @__PURE__ */ new WeakMap();
function qr(o, e) {
  const t = Nn.get(o);
  return t ? (Nn.delete(o), t(e)) : Promise.resolve();
}
function De(o, e, t = !1) {
  var n = o, r = null, s = null, i = le, l = t ? rn : 0, u = !1;
  const a = (d, h = !0) => {
    u = !0, c(h, d);
  }, c = (d, h) => {
    i !== (i = d) && (i ? (r ? Zt(r) : h && (r = ut(() => h(n))), s && St(s, () => {
      s = null;
    })) : (s ? Zt(s) : h && (s = ut(() => h(n))), r && St(r, () => {
      r = null;
    })));
  };
  un(() => {
    u = !1, e(a), u || c(null, null);
  }, l);
}
function io(o, e) {
  return e;
}
function Ta(o, e, t, n) {
  for (var r = [], s = e.length, i = 0; i < s; i++)
    no(e[i].e, r, !0);
  var l = s > 0 && r.length === 0 && t !== null;
  if (l) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    na(u), u.append(
      /** @type {Element} */
      t
    ), n.clear(), Ve(o, e[0].prev, e[s - 1].next);
  }
  Pr(r, () => {
    for (var a = 0; a < s; a++) {
      var c = e[a];
      l || (n.delete(c.k), Ve(o, c.prev, c.next)), $e(c.e, !l);
    }
  });
}
function gn(o, e, t, n, r, s = null) {
  var i = o, l = { items: /* @__PURE__ */ new Map(), first: null }, u = (e & yr) !== 0;
  if (u) {
    var a = (
      /** @type {Element} */
      o
    );
    i = a.appendChild(eo());
  }
  var c = null, d = !1, h = /* @__PURE__ */ oa(() => {
    var f = t();
    return qn(f) ? f : f == null ? [] : Yn(f);
  });
  un(() => {
    var f = H(h), w = f.length;
    d && w === 0 || (d = w === 0, Ma(f, l, i, r, e, n, t), s !== null && (w === 0 ? c ? Zt(c) : c = ut(() => s(i)) : c !== null && St(c, () => {
      c = null;
    })), H(h));
  });
}
function Ma(o, e, t, n, r, s, i) {
  var l = (r & ql) !== 0, u = (r & (Jn | Qn)) !== 0, a = o.length, c = e.items, d = e.first, h = d, f, w = null, _, v = [], S = [], y, E, C, m;
  if (l)
    for (m = 0; m < a; m += 1)
      y = o[m], E = s(y, m), C = c.get(E), C !== void 0 && (C.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(C));
  for (m = 0; m < a; m += 1) {
    if (y = o[m], E = s(y, m), C = c.get(E), C === void 0) {
      var p = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : t;
      w = Ha(
        p,
        e,
        w,
        w === null ? e.first : w.next,
        y,
        E,
        m,
        n,
        r,
        i
      ), c.set(E, w), v = [], S = [], h = w.next;
      continue;
    }
    if (u && La(C, y, m, r), (C.e.f & Fe) !== 0 && (Zt(C.e), l && (C.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(C))), C !== h) {
      if (f !== void 0 && f.has(C)) {
        if (v.length < S.length) {
          var k = S[0], x;
          w = k.prev;
          var g = v[0], b = v[v.length - 1];
          for (x = 0; x < v.length; x += 1)
            yo(v[x], k, t);
          for (x = 0; x < S.length; x += 1)
            f.delete(S[x]);
          Ve(e, g.prev, b.next), Ve(e, w, g), Ve(e, b, k), h = k, w = b, m -= 1, v = [], S = [];
        } else
          f.delete(C), yo(C, h, t), Ve(e, C.prev, C.next), Ve(e, C, w === null ? e.first : w.next), Ve(e, w, C), w = C;
        continue;
      }
      for (v = [], S = []; h !== null && h.k !== E; )
        (h.e.f & Fe) === 0 && (f ??= /* @__PURE__ */ new Set()).add(h), S.push(h), h = h.next;
      if (h === null)
        continue;
      C = h;
    }
    v.push(C), w = C, h = C.next;
  }
  if (h !== null || f !== void 0) {
    for (var R = f === void 0 ? [] : Yn(f); h !== null; )
      (h.e.f & Fe) === 0 && R.push(h), h = h.next;
    var T = R.length;
    if (T > 0) {
      var I = (r & yr) !== 0 && a === 0 ? t : null;
      if (l) {
        for (m = 0; m < T; m += 1)
          R[m].a?.measure();
        for (m = 0; m < T; m += 1)
          R[m].a?.fix();
      }
      Ta(e, R, I, c);
    }
  }
  l && oo(() => {
    if (_ !== void 0)
      for (C of _)
        C.a?.apply();
  }), V.first = e.first && e.first.e, V.last = w && w.e;
}
function La(o, e, t, n) {
  (n & Jn) !== 0 && An(o.v, e), (n & Qn) !== 0 ? An(
    /** @type {Value<number>} */
    o.i,
    t
  ) : o.i = t;
}
function Ha(o, e, t, n, r, s, i, l, u, a) {
  var c = (u & Jn) !== 0, d = (u & Yl) === 0, h = c ? d ? /* @__PURE__ */ ln(r) : he(r) : r, f = (u & Qn) === 0 ? i : he(i), w = {
    i: f,
    v: h,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: n
  };
  try {
    return w.e = ut(() => l(o, h, f, a), ea), w.e.prev = t && t.e, w.e.next = n && n.e, t === null ? e.first = w : (t.next = w, t.e.next = w.e), n !== null && (n.prev = w, n.e.prev = w.e), w;
  } finally {
  }
}
function yo(o, e, t) {
  for (var n = o.next ? (
    /** @type {TemplateNode} */
    o.next.e.nodes_start
  ) : t, r = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, s = (
    /** @type {TemplateNode} */
    o.e.nodes_start
  ); s !== n; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(s)
    );
    r.before(s), s = i;
  }
}
function Ve(o, e, t) {
  e === null ? o.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Oa(o, e, t) {
  var n = o, r, s;
  un(() => {
    r !== (r = e()) && (s && (St(s), s = null), r && (s = ut(() => t(n, r))));
  }, rn);
}
function Yr(o, e, t) {
  cn(() => {
    var n = gt(() => e(o, t?.()) || {});
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function X(o) {
  return typeof o == "object" ? Hn(o) : o ?? "";
}
function Aa(o, e, t) {
  var n = o == null ? "" : "" + o;
  return n === "" ? null : n;
}
function K(o, e, t, n, r, s) {
  var i = o.__className;
  if (i !== t) {
    var l = Aa(t);
    l == null ? o.removeAttribute("class") : o.className = l, o.__className = t;
  }
  return s;
}
function za(o, e) {
  var t = o.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  o.value === e && (e !== 0 || o.nodeName !== "PROGRESS") || (o.value = e ?? "");
}
function ve(o, e, t, n) {
  var r = o.__attributes ??= {};
  r[e] !== (r[e] = t) && (e === "style" && "__styles" in o && (o.__styles = {}), e === "loading" && (o[Dl] = t), t == null ? o.removeAttribute(e) : typeof t != "string" && Fa(o).includes(e) ? o[e] = t : o.setAttribute(e, t));
}
var Eo = /* @__PURE__ */ new Map();
function Fa(o) {
  var e = Eo.get(o.nodeName);
  if (e) return e;
  Eo.set(o.nodeName, e = []);
  for (var t, n = o, r = Element.prototype; r !== n; ) {
    t = Cr(n);
    for (var s in t)
      t[s].set && e.push(s);
    n = Xn(n);
  }
  return e;
}
function Da(o, e, t, n) {
  var r = o.__styles ??= {};
  r[e] !== t && (r[e] = t, t == null ? o.style.removeProperty(e) : o.style.setProperty(e, t, ""));
}
function Wa(o, e, t) {
  var n = et(o, e);
  n && n.set && (o[e] = t, to(() => {
    o[e] = null;
  }));
}
function ko(o, e) {
  return o === e || o?.[tt] === e;
}
function He(o = {}, e, t, n) {
  return cn(() => {
    var r, s;
    return Fr(() => {
      r = s, s = [], gt(() => {
        o !== t(...s) && (e(o, ...s), r && ko(t(...r), o) && e(null, ...r));
      });
    }), () => {
      oo(() => {
        s && ko(t(...s), o) && e(null, ...s);
      });
    };
  }), o;
}
function Na(o = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    G
  ), t = e.l.u;
  if (!t) return;
  let n = () => Ra(e.s);
  if (o) {
    let r = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ $(() => {
      let l = !1;
      const u = e.s;
      for (const a in u)
        u[a] !== s[a] && (s[a] = u[a], l = !0);
      return l && r++, r;
    });
    n = () => H(i);
  }
  t.b.length && la(() => {
    Io(e, n), $t(t.b);
  }), bt(() => {
    const r = gt(() => t.m.map(Ol));
    return () => {
      for (const s of r)
        typeof s == "function" && s();
    };
  }), t.a.length && bt(() => {
    Io(e, n), $t(t.a);
  });
}
function Io(o, e) {
  if (o.l.s)
    for (const t of o.l.s) H(t);
  e();
}
function lo(o, e, t) {
  if (o == null)
    return e(void 0), t && t(void 0), je;
  const n = gt(
    () => o.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const it = [];
function Pa(o, e) {
  return {
    subscribe: Xr(o, e).subscribe
  };
}
function Xr(o, e = je) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function r(l) {
    if (br(o, l) && (o = l, t)) {
      const u = !it.length;
      for (const a of n)
        a[1](), it.push(a, o);
      if (u) {
        for (let a = 0; a < it.length; a += 2)
          it[a][0](it[a + 1]);
        it.length = 0;
      }
    }
  }
  function s(l) {
    r(l(
      /** @type {T} */
      o
    ));
  }
  function i(l, u = je) {
    const a = [l, u];
    return n.add(a), n.size === 1 && (t = e(r, s) || je), l(
      /** @type {T} */
      o
    ), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: s, subscribe: i };
}
function Ba(o, e, t) {
  const n = !Array.isArray(o), r = n ? [o] : o;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Pa(t, (i, l) => {
    let u = !1;
    const a = [];
    let c = 0, d = je;
    const h = () => {
      if (c)
        return;
      d();
      const w = e(n ? a[0] : a, i, l);
      s ? i(w) : d = typeof w == "function" ? w : je;
    }, f = r.map(
      (w, _) => lo(
        w,
        (v) => {
          a[_] = v, c &= ~(1 << _), u && h();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return u = !0, h(), function() {
      $t(f), d(), u = !1;
    };
  });
}
function Va(o) {
  let e;
  return lo(o, (t) => e = t)(), e;
}
let Ht = !1, Pn = Symbol();
function Ga(o, e, t) {
  const n = t[e] ??= {
    store: null,
    source: /* @__PURE__ */ ln(void 0),
    unsubscribe: je
  };
  if (n.store !== o && !(Pn in t))
    if (n.unsubscribe(), n.store = o ?? null, o == null)
      n.source.v = void 0, n.unsubscribe = je;
    else {
      var r = !0;
      n.unsubscribe = lo(o, (s) => {
        r ? n.source.v = s : j(n.source, s);
      }), r = !1;
    }
  return o && Pn in t ? Va(o) : H(n.source);
}
function ja() {
  const o = {};
  function e() {
    to(() => {
      for (var t in o)
        o[t].unsubscribe();
      wr(o, Pn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [o, e];
}
function Ua(o) {
  var e = Ht;
  try {
    return Ht = !1, [o(), Ht];
  } finally {
    Ht = e;
  }
}
const Ka = {
  get(o, e) {
    if (!o.exclude.includes(e))
      return o.props[e];
  },
  set(o, e) {
    return !1;
  },
  getOwnPropertyDescriptor(o, e) {
    if (!o.exclude.includes(e) && e in o.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: o.props[e]
      };
  },
  has(o, e) {
    return o.exclude.includes(e) ? !1 : e in o.props;
  },
  ownKeys(o) {
    return Reflect.ownKeys(o.props).filter((e) => !o.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function $a(o, e, t) {
  return new Proxy(
    { props: o, exclude: e },
    Ka
  );
}
function qa(o, e, t, n) {
  var r = !1, s;
  [s, r] = Ua(() => (
    /** @type {V} */
    o[e]
  ));
  var i = tt in o || Fl in o, l = (et(o, e)?.set ?? (i && e in o && ((S) => o[e] = S))) || void 0, u = (
    /** @type {V} */
    n
  ), a = !0, c = !1, d = () => (c = !0, a && (a = !1, u = /** @type {V} */
  n), u), h;
  if (h = () => {
    var S = (
      /** @type {V} */
      o[e]
    );
    return S === void 0 ? d() : (a = !0, c = !1, S);
  }, l) {
    var f = o.$$legacy;
    return function(S, y) {
      return arguments.length > 0 ? ((!y || f || r) && l(y ? h() : S), S) : h();
    };
  }
  var w = !1, _ = /* @__PURE__ */ ln(s), v = /* @__PURE__ */ $(() => {
    var S = h(), y = H(_);
    return w ? (w = !1, y) : _.v = S;
  });
  return function(S, y) {
    if (arguments.length > 0) {
      const E = y ? H(v) : U(S);
      return v.equals(E) || (w = !0, j(_, E), c && u !== void 0 && (u = E), gt(() => H(v))), S;
    }
    return H(v);
  };
}
function It(o) {
  G === null && Er(), Et && G.l !== null ? Ya(G).m.push(o) : bt(() => {
    const e = gt(o);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ya(o) {
  var e = (
    /** @type {ComponentContextLegacy} */
    o.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
const Xa = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(Xa);
function lt(o, e, t) {
  let n = t.initialDeps ?? [], r;
  return () => {
    var s, i, l, u;
    let a;
    t.key && ((s = t.debug) != null && s.call(t)) && (a = Date.now());
    const c = o();
    if (!(c.length !== n.length || c.some((f, w) => n[w] !== f)))
      return r;
    n = c;
    let h;
    if (t.key && ((i = t.debug) != null && i.call(t)) && (h = Date.now()), r = e(...c), t.key && ((l = t.debug) != null && l.call(t))) {
      const f = Math.round((Date.now() - a) * 100) / 100, w = Math.round((Date.now() - h) * 100) / 100, _ = w / 16, v = (S, y) => {
        for (S = String(S); S.length < y; )
          S = " " + S;
        return S;
      };
      console.info(
        `%c⏱ ${v(w, 5)} /${v(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * _, 120)
        )}deg 100% 31%);`,
        t?.key
      );
    }
    return (u = t?.onChange) == null || u.call(t, r), r;
  };
}
function Rn(o, e) {
  if (o === void 0)
    throw new Error("Unexpected undefined");
  return o;
}
const Za = (o, e) => Math.abs(o - e) < 1, Ja = (o, e, t) => {
  let n;
  return function(...r) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, r), t);
  };
}, Qa = (o) => o, ec = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, tc = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  const r = (i) => {
    const { width: l, height: u } = i;
    e({ width: Math.round(l), height: Math.round(u) });
  };
  if (r(t.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const s = new n.ResizeObserver((i) => {
    const l = () => {
      const u = i[0];
      if (u?.borderBoxSize) {
        const a = u.borderBoxSize[0];
        if (a) {
          r({ width: a.inlineSize, height: a.blockSize });
          return;
        }
      }
      r(t.getBoundingClientRect());
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return s.observe(t, { box: "border-box" }), () => {
    s.unobserve(t);
  };
}, To = {
  passive: !0
}, Mo = typeof window > "u" ? !0 : "onscrollend" in window, nc = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let r = 0;
  const s = o.options.useScrollendEvent && Mo ? () => {
  } : Ja(
    n,
    () => {
      e(r, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (c) => () => {
    const { horizontal: d, isRtl: h } = o.options;
    r = d ? t.scrollLeft * (h && -1 || 1) : t.scrollTop, s(), e(r, c);
  }, l = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", l, To);
  const a = o.options.useScrollendEvent && Mo;
  return a && t.addEventListener("scrollend", u, To), () => {
    t.removeEventListener("scroll", l), a && t.removeEventListener("scrollend", u);
  };
}, oc = (o, e, t) => {
  if (e?.borderBoxSize) {
    const n = e.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    o.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, rc = (o, {
  adjustments: e = 0,
  behavior: t
}, n) => {
  var r, s;
  const i = o + e;
  (s = (r = n.scrollElement) == null ? void 0 : r.scrollTo) == null || s.call(r, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class sc {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((r) => {
        r.forEach((s) => {
          const i = () => {
            this._measureElement(s.target, s);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var r;
          (r = n()) == null || r.disconnect(), t = null;
        },
        observe: (r) => {
          var s;
          return (s = n()) == null ? void 0 : s.observe(r, { box: "border-box" });
        },
        unobserve: (r) => {
          var s;
          return (s = n()) == null ? void 0 : s.unobserve(r);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, r]) => {
        typeof r > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Qa,
        rangeExtractor: ec,
        onChange: () => {
        },
        measureElement: oc,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !0,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var n, r;
      (r = (n = this.options).onChange) == null || r.call(n, this, t);
    }, this.maybeNotify = lt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = s, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let i = n - 1; i >= 0; i--) {
        const l = t[i];
        if (r.has(l.lane))
          continue;
        const u = s.get(
          l.lane
        );
        if (u == null || l.end > u.end ? s.set(l.lane, l) : l.end < u.end && r.set(l.lane, !0), r.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = lt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, r, s, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: r,
        getItemKey: s,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = lt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: r, getItemKey: s, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const a = this.measurementsCache.slice(0, u);
        for (let c = u; c < t; c++) {
          const d = s(c), h = this.options.lanes === 1 ? a[c - 1] : this.getFurthestMeasurement(a, c), f = h ? h.end + this.options.gap : n + r, w = l.get(d), _ = typeof w == "number" ? w : this.options.estimateSize(c), v = f + _, S = h ? h.lane : c % this.options.lanes;
          a[c] = {
            index: c,
            start: f,
            size: _,
            end: v,
            key: d,
            lane: S
          };
        }
        return this.measurementsCache = a, a;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = lt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, r, s) => this.range = t.length > 0 && n > 0 ? ic({
        measurements: t,
        outerSize: n,
        scrollOffset: r,
        lanes: s
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = lt(
      () => {
        let t = null, n = null;
        const r = this.calculateRange();
        return r && (t = r.startIndex, n = r.endIndex), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, r, s, i) => s === null || i === null ? [] : t({
        startIndex: s,
        endIndex: i,
        overscan: n,
        count: r
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, r = t.getAttribute(n);
      return r ? parseInt(r, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const r = this.indexFromElement(t), s = this.measurementsCache[r];
      if (!s)
        return;
      const i = s.key, l = this.elementsCache.get(i);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(r, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const r = this.measurementsCache[t];
      if (!r)
        return;
      const s = this.itemSizeCache.get(r.key) ?? r.size, i = n - s;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, i, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, r) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(r));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = lt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const r = [];
        for (let s = 0, i = t.length; s < i; s++) {
          const l = t[s], u = n[l];
          r.push(u);
        }
        return r;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return Rn(
          n[Zr(
            0,
            n.length - 1,
            (r) => Rn(n[r]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, r = 0) => {
      const s = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + s ? "end" : "start"), n === "center" ? t += (r - s) / 2 : n === "end" && (t -= s);
      const l = this.options.horizontal ? "scrollWidth" : "scrollHeight", a = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[l] : this.scrollElement[l] : 0) - s;
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.measurementsCache[t];
      if (!r)
        return;
      const s = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (r.end >= i + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (r.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
      const l = n === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, r.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: n = "start", behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: r
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: r } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const s = this.getOffsetForIndex(t, n);
      if (!s) return;
      const [i, l] = s;
      this._scrollToOffset(i, { adjustments: void 0, behavior: r }), r !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [a] = Rn(
            this.getOffsetForIndex(t, l)
          );
          Za(a, this.getScrollOffset()) || this.scrollToIndex(t, { align: l, behavior: r });
        } else
          this.scrollToIndex(t, { align: l, behavior: r });
      }));
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var t;
      const n = this.getMeasurements();
      let r;
      return n.length === 0 ? r = this.options.paddingStart : r = this.options.lanes === 1 ? ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((s) => s.end)
      ), Math.max(
        r - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: r
    }) => {
      this.options.scrollToFn(t, { behavior: r, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
}
const Zr = (o, e, t, n) => {
  for (; o <= e; ) {
    const r = (o + e) / 2 | 0, s = t(r);
    if (s < n)
      o = r + 1;
    else if (s > n)
      e = r - 1;
    else
      return r;
  }
  return o > 0 ? o - 1 : 0;
};
function ic({
  measurements: o,
  outerSize: e,
  scrollOffset: t,
  lanes: n
}) {
  const r = o.length - 1;
  let i = Zr(
    0,
    r,
    (u) => o[u].start,
    t
  ), l = i;
  for (; l < r && o[l].end < t + e; )
    l++;
  return n > 1 && (i = Math.max(0, i - i % n), l = Math.min(r, l + (n - 1 - l % n))), { startIndex: i, endIndex: l };
}
function lc(o) {
  const e = new sc(o), t = e.setOptions;
  let n;
  const r = (s) => {
    const i = {
      ...e.options,
      ...s,
      onChange: s.onChange
    };
    t({
      ...i,
      onChange: (l, u) => {
        n.set(l), i.onChange?.(l, u);
      }
    }), e._willUpdate();
  };
  return n = Xr(e, () => (r(o), e._didMount())), Ba(n, (s) => Object.assign(s, { setOptions: r }));
}
function ac(o) {
  return lc({
    observeElementRect: tc,
    observeElementOffset: nc,
    scrollToFn: rc,
    ...o
  });
}
var cc = /* @__PURE__ */ te('<div><button type="button"><i></i> <span> </span></button></div>');
function uc(o, e) {
  ge(e, !0);
  var t = cc(), n = ne(t);
  K(n, 1, X(Es)), n.__click = function(...l) {
    e.onClick?.apply(this, l);
  };
  var r = ne(n);
  K(r, 1, `${ks} ir-icon ir-icon--check`);
  var s = Te(r, 2), i = ne(s);
  xe(() => {
    K(t, 1, X([
      Is,
      e.isSelected && Ts
    ])), ve(t, "data-value", e.value), ve(t, "style", `position: absolute; top: ${e.top ?? ""}px; width: 100%;`), ve(n, "title", e.text), dt(i, e.text);
  }), q(o, t), me();
}
fn(["click"]);
const Lo = 26;
var dc = /* @__PURE__ */ te("<div></div>"), hc = /* @__PURE__ */ te("<div><!></div>");
function fc(o, e) {
  ge(e, !0);
  const [t, n] = ja(), r = () => Ga(H(l), "$virtualizer", t);
  let s = Ie(!1), i, l = /* @__PURE__ */ $(() => H(s) === !1 ? null : ac({
    count: e.items.length,
    getScrollElement: () => i,
    estimateSize: () => Lo,
    overscan: 4
  }));
  It(() => {
    const S = hr(e.refElement, i, "bottom-start");
    return j(s, !0), () => S();
  });
  const u = e.refElement.offsetWidth, a = Math.max(u, e.breakWidth), c = Math.max(e.contentWidth, u), d = () => {
    e.selectedItem && (i.scrollTop = e.items.indexOf(e.selectedItem) * Lo);
  };
  function h() {
    return i;
  }
  var f = hc();
  ve(f, "style", `width: ${c ?? ""}px; max-width: ${a ?? ""}px;`);
  var w = ne(f);
  {
    var _ = (S) => {
      var y = dc();
      K(y, 1, X(Ms)), gn(y, 5, () => r().getVirtualItems(), (E) => E.index, (E, C) => {
        const m = /* @__PURE__ */ $(() => e.selectedItem === e.items[H(C).index]);
        uc(E, {
          get top() {
            return H(C).start;
          },
          get isSelected() {
            return H(m);
          },
          get text() {
            return e.items[H(C).index].text;
          },
          get value() {
            return e.items[H(C).index].value;
          },
          onClick: () => e.onItemClick(e.items[H(C).index])
        });
      }), Yr(y, (E) => d?.()), xe((E) => ve(y, "style", `position: relative; height: ${E ?? ""}px;`), [() => r().getTotalSize()]), q(S, y);
    };
    De(w, (S) => {
      r() && S(_);
    });
  }
  He(f, (S) => i = S, () => i), xe(() => {
    K(f, 1, X([
      Ls,
      hl.zIndex.popover,
      "is-expanded"
    ])), ve(f, "data-row", e.row), ve(f, "data-col", e.col);
  }), q(o, f);
  var v = me({ getDropdownElement: h });
  return n(), v;
}
const Ot = { select: Os, selectInput: As, selectInputNative: zs, selectInputIcon: Fs }, Ho = /* @__PURE__ */ new WeakMap(), gc = 20, mc = 4, Oo = gc + mc, pc = 18;
class _c extends fe {
  _itemTextMap;
  _allowCustomText;
  _allowEdit;
  _showErrorIfCustomText;
  _lazyItems;
  _customDisplayTextFunc;
  _items;
  _allowClear;
  _itemWidth = null;
  _isExpanded = !1;
  _beforeValue;
  _beforeText;
  _isInitItems = !1;
  _mappingType;
  constructor({
    items: e,
    onChange: t,
    allowClear: n,
    customDisplayTextFunc: r,
    lazyItems: s,
    allowCustomText: i = !1,
    showErrorIfCustomText: l = !1,
    allowEdit: u = !1,
    mappingType: a = "text"
  }) {
    super(), this._allowClear = n ?? !1, this._mappingType = a, this._items = e ?? [], this._lazyItems = s ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = i, this._allowEdit = u, u && (this._allowCustomText = !0), r ? this._customDisplayTextFunc = r : this._customDisplayTextFunc = a === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = l, t && (this.onChange = t.bind(this));
  }
  _loadItems() {
    if (!this._isInitItems) {
      this._isInitItems = !0, this._lazyItems && (this._items = this._lazyItems());
      for (const e of this._items)
        this._itemTextMap.set(e[this._mappingType], e);
    }
  }
  _defaultTextCustomDisplayTextFunc(e, t, n) {
    return t ?? "";
  }
  _defaultValueCustomDisplayTextFunc(e, t, n) {
    const r = t ?? "";
    return this._itemTextMap.get(r)?.text ?? r;
  }
  _getSelectedItemOrNull(e) {
    for (const t of this._items)
      if (t[this._mappingType] === e) return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: r,
      _allowEdit: s,
      _showErrorIfCustomText: i,
      _customDisplayTextFunc: l
    } = this, { element: u } = wn({ tag: "div", className: Hn(Hs, Ot.select, Ot.selectInput) }), { element: a } = wn({ tag: "span", className: Ot.selectInputNative }), { element: c } = wn({ tag: "i", className: Hn(Ot.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), u.setAttribute("data-has-px", "");
    const d = n.text === "" || n.text === null || n.text === void 0;
    s && u.classList.add("is-editable");
    let h = this._getSelectedItemOrNull(n.text);
    const f = h !== null;
    h ? (a.textContent = l(h.value, h.text, !1), n.value = h.value) : r ? (a.textContent = l(n.value, n.text, !0), n.value = n.text) : (a.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    r && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !d && !f && (u.dataset.error = "true");
    let w = null;
    const _ = fr({
      eventElements: [u],
      clickOutsideFunc: () => v.hide(),
      getEventElements() {
        return w ? [w.getDropdownElement()] : [];
      }
    }), v = {
      show: () => {
        this._isExpanded = !0, S.create(), _.create(), this._beforeValue = n.value, this._beforeText = n.text, u.classList.add("is-expanded");
        const { breakWidth: E, contentWidth: C } = this._getCellWidthInfo(n);
        w = $r(fc, {
          target: ct("popover"),
          props: {
            row: e,
            col: t,
            contentWidth: C,
            breakWidth: E,
            selectedItem: h,
            items: this._items,
            refElement: u,
            onItemClick: (m) => {
              const { value: p, text: k } = m, x = new ze(n.gridStore.commandContext, [e, t, { text: k, value: p }]);
              h = m, x.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, p, k), x.onExecute = () => this.onChange(e, t, p, k, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new Ue(
                "Change select menu",
                x
              )), n.text = m[this._mappingType], n.value = p, a.textContent = l(p, k, !1), u.dataset.error && delete u.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, p, k, this._beforeValue, this._beforeText), v.hide();
            }
          }
        });
      },
      hide: () => {
        this._isExpanded = !1, u.classList.remove("is-expanded"), S.destroy(), _.destroy(), w && qr(w);
      }
    }, S = jn(v), y = () => {
      u.classList.contains("is-expanded") ? v.hide() : v.show();
    };
    return u.onclick = (E) => {
      s && E.target !== c || y();
    }, u.appendChild(a), u.appendChild(c), u;
  }
  onChange(e, t, n, r, s, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const r = Ke(e, t), s = this._itemTextMap.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !s), l = r.calculateWidth(i);
    return Oo + l + this.getHorizontalCellPadding(n);
  }
  _getDropdownWidth(e, t, n) {
    const r = Ke(e, t), s = this._items.reduce((i, l) => Math.max(i, r.calculateWidth(l.text)), 0);
    return Oo + s + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const r = Ho.get(this);
    if (r) return r;
    const s = this._getDropdownWidth(e, t, n);
    return Ho.set(this, s), s;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + pc;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
  get canBeClear() {
    return this._allowClear;
  }
}
const Mh = (o) => {
  const e = new _c(o);
  return () => e;
}, xn = { input: Ds, inputNative: Vn, inputSuffix: rr }, wc = 28, at = /* @__PURE__ */ new WeakMap();
class Cc extends fe {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = oe.t("datePicker.dateFormat"),
    minDate: n = Kt().getStoreValue("datePicker.minDate"),
    maxDate: r = Kt().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: s = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = r, this._allowedEmptyString = s, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return Ke(e, t).calculateWidth(n.text || this._format) + wc + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("input"), i = document.createElement("button"), l = document.createElement("i"), {
      _minDate: u,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: d
    } = this;
    if (s.readOnly = !0, s.maxLength = c.length, r.setAttribute("data-has-px", ""), r.classList.add(xn.input, Ws), s.classList.add(xn.inputNative), i.classList.add(xn.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), s.type = "text", s.placeholder = c, n.text !== "") {
      const f = ke(n.text, c, !0);
      f.isValid() || (n.text = at.get(n)), (f.isBefore(u) || f.isAfter(a)) && (n.text = at.get(n));
    }
    !d && (n.text === "" || n.text === void 0) && (n.text = at.has(n) ? at.get(n) : ke().format(c)), s.value = n.text || "", at.set(n, n.text ?? ""), i.appendChild(l), r.appendChild(s), r.appendChild(i);
    const h = Xi({
      uuid: Rl(),
      refElement: r,
      minDate: u,
      maxDate: a,
      onClick: (f) => {
        const w = n.text, _ = ke(f).format(c), v = new ze(n.gridStore.commandContext, [e, t, { text: _ }]);
        v.onUndo = () => {
          this.onDateClick(e, t, w ?? "");
        }, v.onExecute = () => {
          this.onDateClick(e, t, _);
        }, n.gridStore.commandManager.pushCommandBlock(new Ue("Change datePicker", v)), s.value = _, n.text = _, at.set(n, _), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, _), h.hide();
      }
    });
    return i.onclick = () => {
      if (!h.visible) {
        const f = ke(n.text, c, !0);
        f.isValid() ? h.update(f.toDate(), f.toDate()) : h.update(/* @__PURE__ */ new Date(), null), h.show();
      }
    }, r;
  }
  get renderType() {
    return "datePicker";
  }
}
const Lh = (o) => {
  const e = new Cc(o);
  return () => e;
}, At = {
  progress: Ps,
  progressVariants: Bs
}, vc = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, Rc = 100, xc = 100;
class bc extends fe {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: r = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = r;
  }
  render(e, t, n) {
    const {
      _min: r,
      _max: s,
      _afterDecimalLen: i,
      _defaultIntent: l
    } = this, u = document.createElement("div"), a = document.createElement("div");
    u.setAttribute("data-has-px", ""), u.className = Ns, a.className = At.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${At.progress}--${c}`);
    const h = (Y(parseFloat(n.text || "0"), r, s) - r) / (s - r) * Rc;
    return Ae(a, {
      [At.progressVariants.progressPercent]: `${h}%`,
      [At.progressVariants.progressText]: `'${h.toFixed(i)}%'`
    }), u.appendChild(a), u;
  }
  getCellInnerWidth(e, t, n) {
    return xc + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Hh = (o = vc) => {
  const e = new bc(o);
  return () => e;
}, Sc = 20, yc = 4, Ec = 24, kc = 24, Ic = 29, Ao = {
  primary: $s,
  secondary: Ks,
  tertiary: Us,
  transparent: js,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Tc extends fe {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = Ic : e.outlineStyle ? this._extraWidth = kc : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: r,
      outlineStyle: s,
      defaultColor: i,
      defaultIcon: l,
      defaultLabel: u
    } = this.args, a = document.createElement("div"), c = document.createElement("button");
    a.className = Vs, c.classList.add(Gs, "button"), c.dataset.ignoreAutoSize = "";
    const d = n.intent ?? i;
    d && c.classList.add(Ao[d]), s ? (a.setAttribute("data-has-px", ""), a.classList.add(qs)) : r && a.classList.add(Ys), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(Ao[n.horizontalAlign]), c.onclick = (w) => this.onClick(w, e, t);
    const h = n.icon ?? l, f = r ? n.text ?? "" : n.label ?? u ?? "";
    if (h) {
      const w = document.createElement("i");
      w.className = `${Xs} ir-icon ${xt(h)}`, c.appendChild(w);
    }
    if (f) {
      const w = Qe("span");
      if (w.innerText = f, r) {
        const _ = document.createElement("div");
        w.classList.add("text--multi-ellipsis"), _.setAttribute("data-has-px", ""), n.lineClamp === void 0 ? w.style.removeProperty("-webkit-line-clamp") : w.style.setProperty("-webkit-line-clamp", n.lineClamp), _.appendChild(w), a.insertAdjacentElement("afterbegin", _);
      } else
        w.classList.add("text--ellipsis"), c.appendChild(w);
    }
    return a.appendChild(c), a;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? Sc + yc : 0;
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t);
    return this.getHorizontalCellPadding(n) + r.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    if (this.args.iconDividerStyle) {
      const n = e.querySelector(".text--multi-ellipsis");
      if (n)
        return this.getVerticalCellPadding(t) + n.offsetHeight;
    }
    return Ec;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Oh = (o) => {
  const e = new Tc(o ?? {});
  return () => e;
}, zt = { radio: Js, radioWrapper: Qs, radioInput: ei, radioText: ti }, Mc = 16, Jr = 6, Lc = Jr * 2;
class Qr extends fe {
  _radioItemStack = [];
  constructor({ onRadioClick: e }) {
    super(), e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  get lastClickedRadio() {
    return this._radioItemStack[this._radioItemStack.length - 1] ?? null;
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (r.setAttribute("data-has-px", ""), r.className = `${Zs} ${zt.radio}`, s.className = zt.radioWrapper, i.type = "radio", i.className = zt.radioInput, s.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = zt.radioText, l.innerText = n.label, s.appendChild(l);
    }
    return r.appendChild(s), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), s.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new ze(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        a && (l.setCell(a.row, a.col, { text: "true" }), this.onRadioClick(a.row, a.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new Ue("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, r;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t), s = n.label ? Jr + r.calculateWidth(n.label) : 0;
    return Mc + Lc + s + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Ah = ({ onRadioClick: o }) => {
  const e = new Qr({ onRadioClick: o });
  return () => e;
};
function es(o) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = Gn, o.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${xt(o.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (o.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${xt(o.icon)}`, o.iconColor && t.style.setProperty("--ir-icon-foreground-color", o.iconColor), e.appendChild(t);
  }
  if (o.text) {
    const t = document.createElement("span");
    t.innerText = o.text, e.appendChild(t);
  }
  return e;
}
function Hc(o, e, t, n) {
  const r = document.createElement("div");
  if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.className = Gn, t.icon) {
    const s = document.createElement("button"), i = document.createElement("i");
    s.setAttribute("type", "button"), s.classList.add("icon-button", ni), s.onclick = (l) => {
      n && n(l, o, e);
    }, i.className = `ir-icon ${xt(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), s.appendChild(i), r.appendChild(s);
  }
  if (t.text) {
    const s = document.createElement("span");
    s.innerText = t.text, r.appendChild(s);
  }
  return r;
}
class ao extends fe {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const r = es(n), {
      ellipsis: s = !0,
      whiteSpace: i
    } = this._args;
    return s && r.classList.add(sr), i && (r.style.whiteSpace = i), r;
  }
  get renderType() {
    return "default";
  }
}
class Oc extends fe {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return Hc(e, t, n, (r, s, i) => this.onClick(r, s, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Ac extends fe {
  _fixedRowCount;
  _captionList;
  _prefix = "";
  constructor(e, ...t) {
    super(), this._fixedRowCount = e, this._captionList = t;
  }
  get prefix() {
    return this._prefix;
  }
  get renderType() {
    return "rowNo";
  }
  get editable() {
    return !1;
  }
  set prefix(e) {
    this._prefix = e;
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("span"), i = e - this._fixedRowCount;
    r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.className = Gn;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return s.innerText = l, n.text = l, r.appendChild(s), r;
  }
}
const zh = () => {
  const o = new ao();
  return () => o;
};
function Fh({ onClick: o }) {
  const e = new Oc({ onClick: o });
  return () => e;
}
function Dh(o, ...e) {
  const t = new Ac(o, ...e);
  return () => t;
}
const zo = /* @__PURE__ */ new WeakMap();
class ts extends ao {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function Wh(o) {
  const e = zo.get(o);
  if (e)
    return e;
  const t = new ts(o);
  return zo.set(o, t), t;
}
const Bn = "$$all", ns = {
  visible: !0,
  subChecked: !1
};
function zc(o) {
  return (e, t) => {
    t.style.width = "100%";
    const n = {
      ...ns,
      ...e.object
    }, r = document.createElement("label"), s = document.createElement("span");
    if (r.className = oi, s.classList.add(
      or,
      Ee.truncate,
      Ee.flex110
    ), n.text && (s.textContent = n.text, s.title = s.textContent), n.icon) {
      const l = document.createElement("i");
      l.style.setProperty(
        "--ir-icon-foreground-color",
        ir.textColor.inverse
      ), l.className = `ir-icon ${n.icon}`, s.append(l);
    }
    r.appendChild(s);
    const i = document.createElement("input");
    i.type = "checkbox", i.className = nr, i.checked = n.checked, n.subChecked && (i.dataset.state = "sub-checked"), i.onchange = () => {
      n.key === Bn ? o.onSelectAll(i.checked) : o.onItemChecked(n.key, i.checked);
    }, r.insertAdjacentElement("afterbegin", i), e.setVisible(n.visible), t.append(r);
  };
}
function Fc(o, e, t) {
  const n = o.getRowElement(), r = {
    ...ns,
    ...t
  }, s = n.querySelector("input[type='checkbox']");
  pl(
    s && s instanceof HTMLInputElement,
    "Checkbox element not found in the row element."
  ), s.checked = r.checked, r.checked === !1 && r.subChecked ? s.dataset.state = "sub-checked" : delete s.dataset.state;
}
const Dc = (o) => {
  var e = Wc(), t = ne(e), n = ne(t);
  xe(
    (r) => {
      K(e, 1, X([
        Ee.mx.sm,
        Ee.display.flex,
        Ee.alignCenter
      ])), Da(e, "height", `${lr}px`), K(t, 1, X(Ee.truncate)), dt(n, r);
    },
    [() => oe.t("rowFilter.list.no-result")]
  ), q(o, e);
};
var Wc = /* @__PURE__ */ te("<div><span> </span></div>"), Nc = /* @__PURE__ */ te('<form><input> <button aria-label="검색" type="submit"><i class="ir-icon ir-icon--search"></i></button></form>'), Pc = /* @__PURE__ */ te("<!> <div></div>", 1), Bc = /* @__PURE__ */ te("<div></div>"), Vc = /* @__PURE__ */ te("<!> <!>", 1);
function os(o, e) {
  ge(e, !0);
  const t = (g) => {
    var b = Nc();
    K(b, 1, X(ii));
    var R = ne(b);
    K(R, 1, X(Vn)), He(R, (I) => j(u, I), () => H(u));
    var T = Te(R, 2);
    K(T, 1, X(rr)), xe((I) => ve(R, "placeholder", I), [
      () => oe.t("rowFilter.search.placeholder")
    ]), Ea("submit", b, f), q(g, b);
  }, n = ae("row-filter-ok-disabled");
  let r = U(e.defaultRowItems);
  const s = /* @__PURE__ */ $(() => r.filter(({ visible: g }) => g !== !1)), i = /* @__PURE__ */ $(() => H(s).some(({ checked: g }) => g)), l = /* @__PURE__ */ $(() => H(s).length > 0);
  let u = Ie(null), a = Ie(null);
  const c = /* @__PURE__ */ $(() => H(a) ? new Map([...H(a).getRowIter()].map((g) => [g.object.key, g])) : /* @__PURE__ */ new Map()), d = (g) => {
    w({ checked: g, subChecked: !1 }), H(s).forEach((b) => {
      _(b, g);
    }), n(!H(i));
  }, h = (g, b) => {
    const R = r.find((T) => g === T.key);
    R && (_(R, b), w(), n(!H(i)));
  }, f = (g) => {
    g.preventDefault();
    const b = H(u)?.value.toLocaleLowerCase() ?? "", R = (T) => T === "" || T.toLocaleLowerCase().includes(b);
    for (const T of r)
      T.visible = R(T.text ?? T.key), v(T.key, T.visible);
    w(), n(!H(i));
  };
  function w(g = {}) {
    const b = H(c).get(Bn);
    if (!b) return;
    const {
      checked: R = !H(s).some((I) => !I.checked),
      subChecked: T = H(s).some((I) => I.checked)
    } = g;
    b.updateObject({ ...b.object, checked: R, subChecked: T });
  }
  function _(g, b) {
    g.checked = b;
    const R = H(c).get(g.key);
    R && R.updateObject({ ...R.object, checked: b });
  }
  function v(g, b) {
    const R = H(c).get(g);
    R && (H(a)?.setRowVisible(R.rowId, b), R.updateObject({ ...R.object, visible: b }));
  }
  const S = (g) => {
    j(a, U(new Zi({
      contextElement: g,
      rowCount: 0,
      defaultRowHeight: lr,
      onCreatedRowElement: zc({
        onSelectAll: d,
        onItemChecked: h
      }),
      onUpdatedRowObject: Fc
    })));
    const b = { isAllChecked: !0, isSomeChecked: !1 };
    for (const R of r) {
      const { visible: T = !0 } = R;
      R.checked ? b.isSomeChecked = !0 : T && (b.isAllChecked = !1), H(a).addRow(void 0, R, T);
    }
    return H(a).getRowCount() > 0 && H(a).insertRow(0, void 0, {
      key: Bn,
      text: `(${oe.t("rowFilter.list.select-all")})`,
      checked: b.isAllChecked,
      subChecked: b.isSomeChecked
    }), n(!H(i)), {
      destroy: () => {
        H(a)?.destroy();
      }
    };
  };
  function y() {
    return H(s).filter(({ checked: g }) => g).map(({ key: g }) => g);
  }
  var E = Vc(), C = Je(E);
  {
    var m = (g) => {
      var b = Pc(), R = Je(b);
      t(R);
      var T = Te(R, 2);
      K(T, 1, X(ri)), q(g, b);
    };
    De(C, (g) => {
      e.visibleSearchInput && g(m);
    });
  }
  var p = Te(C, 2);
  {
    var k = (g) => {
      var b = Bc();
      K(b, 1, X(si)), Yr(b, (R) => S?.(R)), q(g, b);
    }, x = (g) => {
      Dc(g);
    };
    De(p, (g) => {
      H(l) ? g(k) : g(x, !1);
    });
  }
  return q(o, E), me({ getCheckedItemKeys: y });
}
const Gc = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Fo(o) {
  return o === "" ? !0 : Gc.test(o);
}
function Do(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function co(o, e) {
  if (o === e) return 0;
  const t = Fo(o), n = Fo(e);
  return t && n ? Do(o) < Do(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const jc = (o) => (e, t) => co(e.getCell(o).text, t.getCell(o).text), Nh = ({
  grid: o
}) => ({
  sortColumn(e, t, n, r) {
    o.sort(jc(e), t, n, r);
  }
});
var Uc = /* @__PURE__ */ te("<option> </option>"), Kc = /* @__PURE__ */ te("<select></select>");
function rs(o, e) {
  ge(e, !0);
  let t, n;
  const r = ae("row-filter-add-click-outside-element");
  It(() => (n = new Ji({ contextElement: t }), n.divSelect.classList.add(Ee.mx.sm), n.onChange = (l, u) => e.onChange(u.value), n.value = e.value, r && r(n.divDropDown), () => {
    n.destroy();
  }));
  function s() {
    return n.divDropDown;
  }
  var i = Kc();
  return gn(i, 21, () => e.options, io, (l, u, a, c) => {
    let d = () => H(u).key, h = () => H(u).value;
    var f = Uc(), w = {}, _ = ne(f);
    xe(
      (v) => {
        w !== (w = d()) && (f.value = (f.__value = d()) == null ? "" : d()), dt(_, v);
      },
      [() => oe.t(h())]
    ), q(l, f);
  }), He(i, (l) => t = l, () => t), q(o, i), me({ getDropdownEl: s });
}
var $c = (o, e) => e.onInput(o.currentTarget.value), qc = /* @__PURE__ */ te("<div><input></div>");
function ss(o, e) {
  ge(e, !0);
  var t = qc(), n = ne(t);
  K(n, 1, X(Vn)), n.__input = [$c, e], xe(() => {
    K(t, 1, X(Ee.mx.sm)), ve(n, "type", e.type), za(n, e.value), ve(n, "placeholder", e.placeholder);
  }), q(o, t), me();
}
fn(["input"]);
const bn = [
  { key: "equals", value: "=" },
  { key: "not-equals", value: "<>" },
  { key: "contains", value: "LIKE" },
  { key: "not-contains", value: "NOT LIKE" },
  { key: "starts-with", value: "Starts with" },
  { key: "ends-with", value: "Ends with" }
];
var Yc = /* @__PURE__ */ te("<!> <!>", 1);
function Xc(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = ae("row-filter-ok-disabled"), s = t.getTextListForCol(n).sort((C, m) => co(C.text, m.text)).map(({ text: C, checked: m }) => ({
    key: C,
    checked: m,
    text: C === "" ? `(${oe.t("rowFilter.list.blanks")})` : C
  }));
  let i = Ie(U(bn[0].key)), l = Ie(null), u = Ie("");
  a();
  function a() {
    const C = t.getFilterOptionByCol(n);
    if (!C) return;
    const { operand: m, operator: p } = C;
    p !== "equals" && bn.some(({ key: k }) => k === p) && (j(i, U(p)), j(u, U(m[0])));
  }
  function c() {
    if (!H(l)) return;
    const C = H(l).getCheckedItemKeys();
    C.length !== s.length && t.setColFilter({
      column: n,
      operator: "equals",
      operand: C
    });
  }
  function d() {
    H(u) !== "" && t.setColFilter({
      column: n,
      operator: H(i),
      operand: [H(u)]
    });
  }
  const h = (C) => {
    if (j(i, U(C)), H(i) === "equals") return;
    r(!1);
    const m = t.getFilterOptionByCol(n);
    m && m.operand.length === 1 && j(u, U(m.operand[0]));
  };
  function f() {
    t.removeColFilter(n), H(i) === "equals" ? c() : d();
  }
  function w() {
    return H(i) !== "equals";
  }
  var _ = Yc(), v = Je(_);
  rs(v, {
    get value() {
      return H(i);
    },
    options: bn,
    onChange: h
  });
  var S = Te(v, 2);
  {
    var y = (C) => {
      He(
        os(C, {
          visibleSearchInput: !0,
          defaultRowItems: s
        }),
        (m) => j(l, U(m)),
        () => H(l)
      );
    }, E = (C) => {
      const m = /* @__PURE__ */ $(() => oe.t("rowFilter.string.input.placeholder"));
      ss(C, {
        get value() {
          return H(u);
        },
        get placeholder() {
          return H(m);
        },
        onInput: (p) => j(u, U(p))
      });
    };
    De(S, (C) => {
      H(i) === "equals" ? C(y) : C(E, !1);
    });
  }
  return q(o, _), me({ onSubmit: f, canApplyEnterFilter: w });
}
$l();
function Zc(o, e) {
  ge(e, !1);
  let t = Ql();
  const n = ae("row-filter-plugin"), r = ae("row-filter-colId"), s = n.getTextListForCol(r), i = [], l = s.find((c) => c.text === "true"), u = s.find((c) => c.text !== "true");
  l && i.push({
    key: "true",
    checked: l.checked,
    icon: "ir-icon--check-all-rectangle",
    text: ""
  }), u && i.push({
    key: "false",
    checked: u.checked,
    icon: "ir-icon--uncheck-all-rectangle",
    text: ""
  });
  function a() {
    n.removeColFilter(r);
    const c = H(t).getCheckedItemKeys();
    c.length !== i.length && n.setColFilter({
      column: r,
      operator: "equals",
      operand: c
    });
  }
  return Na(), He(os(o, { defaultRowItems: i, $$legacy: !0 }), (c) => j(t, c), () => H(t)), Wa(e, "onSubmit", a), me({ onSubmit: a });
}
var Jc = /* @__PURE__ */ te("<div></div>");
function Qc(o, e) {
  ge(e, !0);
  let t, n;
  const r = ae("row-filter-add-click-outside-element");
  It(() => {
    n = new Qi({
      div: t,
      format: e.format,
      onChange: e.onChange
    });
    const i = n.input, l = n.button;
    r && r(el().datePicker), i.oninput = () => e.onChange(n.textValue), l.onkeydown = (a) => {
      a.key === "Enter" && n.hide();
    }, i.addEventListener("blur", u, { capture: !0 });
    function u(a) {
      a.relatedTarget instanceof HTMLElement && a.relatedTarget.closest(`.${ar}`) && a.relatedTarget.textContent === oe.t("rowFilter.ok") && a.stopPropagation();
    }
    return () => {
      n.destroy(), i.removeEventListener("blur", u);
    };
  }), bt(() => {
    n.input.value = e.value;
  }), bt(() => {
    n.input.placeholder = `${e.placeholder}(${e.format})`;
  });
  var s = Jc();
  He(s, (i) => t = i, () => t), xe(() => K(s, 1, X([Ee.widthAuto, Ee.mx.sm]))), q(o, s), me();
}
const eu = [
  { key: "equals", value: "=" },
  { key: "not-equals", value: "<>" },
  { key: "less-than", value: "<" },
  { key: "less-than-or-equal", value: "<=" },
  { key: "greater-than", value: ">" },
  { key: "greater-than-or-equal", value: ">=" },
  {
    key: "in-range",
    value: "rowFilter.number.select.between"
  },
  {
    key: "blank",
    value: "rowFilter.number.select.blank"
  }
];
function tu(o) {
  return o === "in-range" ? [!0, !0] : o === "blank" ? [!1, !1] : [!0, !1];
}
function nu(o, e) {
  return o === "in-range" ? [
    `rowFilter.${e}.between.from`,
    `rowFilter.${e}.between.to`
  ] : [
    `rowFilter.${e}.input.placeholder`,
    `rowFilter.${e}.input.placeholder`
  ];
}
var ou = /* @__PURE__ */ te("<!> <!>", 1);
function is(o, e) {
  ge(e, !0);
  let t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = t.getColumnMetaInfo(n), s = qa(e, "operator"), i = U([
    { value: "", placeholder: "", visible: !0 },
    { value: "", placeholder: "", visible: !1 }
  ]);
  const l = (_) => {
    const v = nu(_, r.textType), S = tu(_);
    i.forEach((y, E) => {
      y.visible = S[E], y.placeholder = v[E];
    });
  }, u = (_, v) => {
    v.value = _;
  }, a = (_) => {
    const v = _;
    s(v), l(v);
  };
  It(() => {
    i.forEach((_, v) => {
      _.value = e.defaultValue[v] ?? "";
    }), l(s());
  });
  function c() {
    return i.filter(({ visible: _ }) => _).map(({ value: _ }) => _);
  }
  function d() {
    i.forEach((_) => {
      _.value = "";
    });
  }
  var h = ou(), f = Je(h);
  rs(f, {
    get value() {
      return s();
    },
    options: eu,
    onChange: a
  });
  var w = Te(f, 2);
  return gn(w, 17, () => i, io, (_, v) => {
    var S = vn(), y = Je(S);
    {
      var E = (C) => {
        var m = vn(), p = Je(m);
        {
          var k = (g) => {
            const b = /* @__PURE__ */ $(() => r.format ?? oe.t("datePicker.dateFormat")), R = /* @__PURE__ */ $(() => oe.t(H(v).placeholder));
            Qc(g, {
              get format() {
                return H(b);
              },
              get value() {
                return H(v).value;
              },
              onChange: (T) => u(T, H(v)),
              get placeholder() {
                return H(R);
              }
            });
          }, x = (g) => {
            var b = vn(), R = Je(b);
            {
              var T = (I) => {
                const M = /* @__PURE__ */ $(() => oe.t(H(v).placeholder));
                ss(I, {
                  type: "number",
                  get value() {
                    return H(v).value;
                  },
                  get placeholder() {
                    return H(M);
                  },
                  onInput: (L) => u(L, H(v))
                });
              };
              De(
                R,
                (I) => {
                  r.textType === "number" && I(T);
                },
                !0
              );
            }
            q(g, b);
          };
          De(p, (g) => {
            r.textType === "date" ? g(k) : g(x, !1);
          });
        }
        q(C, m);
      };
      De(y, (C) => {
        H(v).visible && C(E);
      });
    }
    q(_, S);
  }), q(o, h), me({ getValues: c, clearValues: d });
}
function ru(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = t.getFilterOptionByCol(n);
  let s, i = Ie(U(r ? r.operator : "equals"));
  function l() {
    const c = s.getValues();
    t.removeColFilter(n), (H(i) === "blank" || !c.includes("")) && t.setColFilter({
      column: n,
      operator: H(i),
      operand: c
    });
  }
  function u() {
    return !0;
  }
  const a = /* @__PURE__ */ $(() => r?.operand ?? []);
  return He(
    is(o, {
      get defaultValue() {
        return H(a);
      },
      get operator() {
        return H(i);
      },
      set operator(c) {
        j(i, U(c));
      }
    }),
    (c) => s = c,
    () => s
  ), me({ onSubmit: l, canApplyEnterFilter: u });
}
function su(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = /* @__PURE__ */ $(() => t.getColumnMetaInfo(n).format), s = t.getFilterOptionByCol(n);
  let i, l = Ie(U(s ? s.operator : "equals"));
  function u(f) {
    return f === "" ? !0 : ke(f, H(r), !0).isValid();
  }
  function a() {
    const f = i.getValues();
    if (!f.every(u))
      return i.clearValues(), !0;
    t.removeColFilter(n), (H(l) === "blank" || !f.includes("")) && t.setColFilter({
      column: n,
      operator: H(l),
      operand: f
    });
  }
  function c(f) {
    Ae(f, { [cr.minWidth]: "200px" });
  }
  function d() {
    return !0;
  }
  const h = /* @__PURE__ */ $(() => s?.operand ?? []);
  return He(
    is(o, {
      get defaultValue() {
        return H(h);
      },
      get operator() {
        return H(l);
      },
      set operator(f) {
        j(l, U(f));
      }
    }),
    (f) => i = f,
    () => i
  ), me({
    onSubmit: a,
    updateDropdownStyle: c,
    canApplyEnterFilter: d
  });
}
var iu = /* @__PURE__ */ te("<i></i>"), lu = /* @__PURE__ */ te("<button><!> <span> </span></button>");
function au(o, e) {
  var t = lu();
  K(t, 1, X(li)), t.__click = function(...l) {
    e.onClick?.apply(this, l);
  };
  var n = ne(t);
  {
    var r = (l) => {
      var u = iu();
      xe(() => K(u, 1, X(["ir-icon ir-icon-text", e.icon]))), q(l, u);
    };
    De(n, (l) => {
      e.icon && l(r);
    });
  }
  var s = Te(n, 2), i = ne(s);
  xe(() => dt(i, e.label)), q(o, t);
}
fn(["click"]);
const cu = {
  string: Xc,
  checked: Zc,
  number: ru,
  date: su
}, uu = (o, e, t, n, r) => {
  e.getFilterOptionByCol(t) && e.removeColFilter(t), n?.(), r();
};
var du = /* @__PURE__ */ te("<div></div>"), hu = /* @__PURE__ */ te('<div><!> <div><!></div> <div><button class="button"> </button> <button class="button button--primary"> </button></div></div>');
function fu(o, e) {
  ge(e, !0);
  let t = /* @__PURE__ */ $a(e, ["$$slots", "$$events", "$$legacy"]), {
    pluginAPI: n,
    refElement: r,
    rowId: s,
    columnId: i,
    visibleSortButton: l,
    visibleCheckAllButton: u,
    sortOrder: a,
    onClose: c,
    onSubmit: d,
    onClear: h,
    onDropdownButtonClick: f
  } = t, w = /* @__PURE__ */ $(() => {
    return [...O(), ...z()];
    function* O() {
      if (!l) return;
      a ? yield {
        key: "DELETE",
        i18nKey: "rowFilter.sort.clear",
        icon: "ir-icon--delete"
      } : yield {
        key: "ASC",
        i18nKey: "rowFilter.sort.ascending",
        icon: "ir-icon--sort-ascending"
      };
      const D = a && a === "DESC" ? "ascending" : "descending";
      yield {
        key: D[0] === "a" ? "ASC" : "DESC",
        i18nKey: `rowFilter.sort.${D}`,
        icon: `ir-icon--sort-${D}`
      };
    }
    function* z() {
      !u || H(_).textType !== "checked" || (yield {
        key: "CHECK-ALL",
        i18nKey: "rowFilter.check.check-all",
        icon: "ir-icon--check-all-rectangle"
      }, yield {
        key: "UNCHECK-ALL",
        i18nKey: "rowFilter.check.uncheck-all",
        icon: "ir-icon--uncheck-all-rectangle"
      });
    }
  }), _ = /* @__PURE__ */ $(() => n.getColumnMetaInfo(i)), v = Ie(!1), S = U([]);
  Lt("row-filter-plugin", n), Lt("row-filter-colId", i), Lt("row-filter-ok-disabled", (O) => {
    j(v, U(O));
  }), Lt("row-filter-add-click-outside-element", (O) => {
    S.push(O);
  });
  let y, E = Ie(U({ onSubmit: () => {
  } }));
  const C = /* @__PURE__ */ $(() => cu[H(_).textType]), m = (O) => {
    const { key: z } = O;
    switch (z) {
      case "DELETE":
        n.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        n.setSortOrder(s, i, z);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        n.setCheckAll(i, z === "CHECK-ALL");
        break;
    }
    f?.(z), c();
  }, p = () => {
    H(v) || H(E).onSubmit() !== !0 && (d(), c());
  };
  It(() => {
    const O = hr(r, y, "bottom-start"), z = jn({ hide: c }), D = fr({
      eventElements: [
        y,
        r,
        ...S
      ],
      clickOutsideFunc: c
    });
    D.create(), z.create(), l && Ae(y, { [cr.maxHeight]: "360px" }), H(E).updateDropdownStyle?.(y), ol("Enter", F);
    function F() {
      H(E).canApplyEnterFilter?.() && p();
    }
    return () => {
      O(), z.destroy(), D.destroy(), rl("Enter", F);
    };
  });
  var k = hu();
  K(k, 1, X(ai));
  var x = ne(k);
  {
    var g = (O) => {
      var z = du();
      K(z, 1, X(ui)), gn(z, 21, () => H(w), io, (D, F) => {
        const W = /* @__PURE__ */ $(() => oe.t(H(F).i18nKey));
        au(D, {
          get label() {
            return H(W);
          },
          get icon() {
            return H(F).icon;
          },
          onClick: () => m(H(F))
        });
      }), q(O, z);
    };
    De(x, (O) => {
      H(w).length > 0 && O(g);
    });
  }
  var b = Te(x, 2);
  K(b, 1, X(ci));
  var R = ne(b);
  Oa(R, () => H(C), (O, z) => {
    He(z(O, {}), (D) => j(E, U(D)), () => H(E));
  });
  var T = Te(b, 2);
  K(T, 1, X(ar));
  var I = ne(T);
  I.__click = [
    uu,
    n,
    i,
    h,
    c
  ];
  var M = ne(I), L = Te(I, 2);
  L.__click = p;
  var A = ne(L);
  He(k, (O) => y = O, () => y), xe(
    (O, z) => {
      ve(k, "id", n.dropdownId), dt(M, O), L.disabled = H(v), dt(A, z);
    },
    [
      () => oe.t("rowFilter.clear"),
      () => oe.t("rowFilter.ok")
    ]
  ), q(o, k), me();
}
fn(["click"]);
const Sn = 20;
class Ph extends fe {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const {
      plugin: r,
      onDropdownButtonClick: s,
      visibleSortButton: i = !0,
      visibleCheckAllButton: l = !0
    } = this._args, u = document.createElement("div"), a = r.pluginAPI;
    u.className = di, u.setAttribute("data-has-px", "");
    const c = es(n);
    return c.removeAttribute("data-has-px"), c.removeAttribute("data-has-py"), c.classList.add(sr, hi), u.append(c), u.onclick = (f) => {
      !a.columnSortManager.enabledColumnClick && !n.sortOrder || f.target instanceof HTMLElement && (f.target.closest(`.${go}`) || a.toggleSortOrder(e, t));
    }, a.getColumnMetaInfo(t).enabled !== !1 && u.appendChild(h()), u;
    function h() {
      const f = Un("ir-icon--filter", go);
      f.style.setProperty("--ir-icon-badge-color", ir.info.active), v();
      let w = null;
      return f.onclick = () => {
        if (w) return _();
        w = $r(fu, {
          target: ct("popover"),
          props: {
            pluginAPI: a,
            visibleSortButton: i,
            visibleCheckAllButton: l,
            onDropdownButtonClick: s,
            refElement: f,
            rowId: e,
            columnId: t,
            sortOrder: n.sortOrder,
            onClose: _,
            onSubmit: v,
            onClear: v
          }
        });
      }, f;
      function _() {
        w && (qr(w), w = null);
      }
      function v() {
        const S = !!a.getFilterOptionByCol(t);
        f.classList.toggle("ir-icon-badge--right", S);
      }
    }
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t);
    return this.getHorizontalCellPadding(n) + r.calculateWidth(n.text ?? "") + (n.sortOrder ? Sn : 0) + (n.icon ? Sn : 0) + Sn;
  }
  get renderType() {
    return "filter";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function gu(o, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: r } = e;
  return {
    getPastingRange: l,
    beforePastingList: u,
    pasteTask: a
  };
  function s(c, d) {
    const h = o.getRowCount();
    let f = 0, w = c;
    for (; w < h; ) {
      if (o.isFilteredRow(w) || f++, f === d) return w;
      ++w;
    }
    return w - 1 + (d - f);
  }
  function i(c) {
    return c.top === c.bottom && c.left === c.right;
  }
  function l(c, d) {
    if (d.length === 0) throw new Error("No pasting data.");
    const h = { ...c }, f = d.length, w = d[0].length, _ = i(c) ? s(c.top, f) + 1 : h.top + f, v = h.left + w;
    for (let S = c.bottom + 1; S < _; ++S)
      (o.hasRow(S) || o.onAutoInsertRow(S)) && (h.bottom = S);
    for (let S = c.right + 1; S < v; ++S)
      (o.hasColumn(S) || o.onAutoInsertColumn(S)) && (h.right = S);
    return h;
  }
  function u(c, d) {
    if (d.length === 0) throw new Error("No pasting data.");
    const h = [], f = d.length, w = d[0].length, _ = c.bottom - c.top, v = c.right - c.left;
    let S = 0;
    for (let m = 0; m <= _; ++m) {
      const p = m + c.top;
      if (y(p), !!o.hasRow(p)) {
        if (r && o.isFilteredRow(p)) {
          ++S;
          continue;
        }
        for (let k = 0; k <= v; ++k) {
          const x = k + c.left;
          if (E(x), !o.hasColumn(x)) break;
          const g = o.cell(p, x), b = C(m - S, k), R = o.onCheckPasteCell(g, b.text);
          b.cellVisible && R && h.push({
            cell: g,
            cellMetaInfo: {
              text: b.text,
              cellVisible: b.cellVisible,
              rowSpan: t ? b.rowSpan : 1,
              colSpan: n ? b.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof R == "object" ? R : void 0
          });
        }
      }
    }
    return h;
    function y(m) {
      !o.hasRow(m) && o.onAutoInsertRow(m) && (o.addRow(), o.onAutoInsertedRow(m));
    }
    function E(m) {
      !o.hasColumn(m) && o.onAutoInsertColumn(m) && (o.addColumn(), o.onAutoInsertedColumn(m));
    }
    function C(m, p) {
      const [k, x] = [m % f, p % w];
      return d[k][x];
    }
  }
  function a(c) {
    for (const { cell: d, cellMetaInfo: h, pasteOption: f } of c) {
      const { rowSpan: w, colSpan: _, cellVisible: v } = h;
      if (!v) continue;
      const { row: S, col: y } = d;
      if (f?.ignoreRowSpan !== !0 && w > 1 || f?.ignoreColSpan !== !0 && _ > 1) {
        const C = { top: S, left: y, bottom: S + w - 1, right: y + _ - 1 };
        o.mergeCells(C.top, C.left, C.bottom, C.right);
      }
      f?.ignoreText || o.setCell(S, y, { text: h.text }), o.onClipboardAfterPasteCell(d);
    }
  }
}
function mu(o) {
  return JSON.stringify(o);
}
function pu(o) {
  return JSON.parse(o);
}
function _u(o) {
  const e = [], t = [];
  for (const n of o)
    switch (n) {
      case " ":
        t.push(" ");
        break;
      case `
`:
        e.push(document.createTextNode(t.join(""))), e.push(document.createElement("br")), t.length = 0;
        break;
      default:
        t.push(n);
        break;
    }
  return e.push(document.createTextNode(t.join(""))), e;
}
function wu(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((r) => r.cellVisible).forEach((r) => {
      const s = document.createElement("td");
      s.setAttribute("rowSpan", `${r.rowSpan}`), s.setAttribute("colSpan", `${r.colSpan}`), s.append(..._u(r.text)), n.append(s);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function Cu(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const r = Array(n.length).fill(null).map(() => []);
  let s = 0;
  for (const u of n) {
    const a = u.querySelectorAll("td");
    let c = i(0);
    for (const d of a)
      (d.rowSpan > 1 || d.colSpan > 1) && l(s, c, d.rowSpan, d.colSpan), r[s][c] = {
        text: vu(d),
        rowSpan: d.rowSpan,
        colSpan: d.colSpan,
        cellVisible: !0,
        isFormatted: d.hasAttribute("class")
      }, c = i(c);
    ++s;
  }
  return r;
  function i(u) {
    let a = u;
    for (; r[s][a]; )
      ++a;
    return a;
  }
  function l(u, a, c, d) {
    for (let h = u; h < u + c; ++h)
      for (let f = a; f < a + d; ++f)
        r[h][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function vu(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return Ru(t);
}
function Ru(o) {
  const e = [];
  let t = !1;
  for (const n of o) {
    if (n === `

`) {
      e.push(`
`);
      continue;
    }
    let r = !1;
    for (const s of n)
      switch (s) {
        // Ideographic Space
        case "　":
        case " ":
        case `
`:
          r && (t = !0);
          break;
        default:
          t && (e.push(" "), t = !1), r = !0, e.push(s === " " ? " " : s);
          break;
      }
  }
  return e.join("");
}
function xu(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const ls = "	", as = `
`;
function bu(o) {
  if (!xu(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(ls)
  ).join(as);
}
function Su(o) {
  if (o.length === 0) return [];
  const e = [], t = [], n = [];
  function r() {
    n.push({
      text: t.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: !0,
      isFormatted: !1
    }), t.length = 0;
  }
  function s() {
    r(), (e.length === 0 || n.length === e[0]?.length) && e.push([...n]), n.length = 0;
  }
  for (const i of o)
    i !== "\r" && (i === ls ? r() : i === as ? s() : t.push(i));
  return (t.length > 0 || n.length > 0) && s(), e;
}
const Vt = [
  {
    format: "ir-grid/cell",
    parseFunc: pu,
    payloadFunc: mu
  },
  {
    format: "text/html",
    parseFunc: Cu,
    payloadFunc: wu
  },
  {
    format: "text/plain",
    parseFunc: Su,
    payloadFunc: bu
  }
];
function yu(o, e) {
  Vt.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function cs(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function Eu(o) {
  return o.some((e) => e.some((t) => cs(t)));
}
function ku(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let r = 0; r < n; ++r)
      e[t]?.[r]?.text && cs(o[t][r]) && (o[t][r].text = e[t][r].text);
  }
  return o;
}
function Wo(o) {
  for (const { format: e, parseFunc: t } of Vt) {
    const n = o.getData(e);
    if (n !== "") {
      const r = t(n);
      if (!Eu(r))
        return r;
      const s = o.getData(Vt[2].format);
      return ku(
        r,
        Vt[2].parseFunc(s)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const Rt = 1, nt = 1;
class No {
  _left = 0;
  _columnId = 0;
  _width = 0;
  _visible = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this._columnId;
  }
  get left() {
    return this._left;
  }
  get width() {
    return this._width;
  }
  get widthWithBorder() {
    return this._width + nt;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this._visible = e;
  }
  set columnId(e) {
    this._columnId = e;
  }
  set left(e) {
    this._left = e;
  }
  set width(e) {
    this._width = e;
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class Iu {
  _rowHeaderColumns;
  _gridHookFlow;
  _freezedColumns;
  _columnsList = [];
  _visibleColumnsList = [];
  _columnsWidth = 0;
  _rowHeaderColumnsWidth = 0;
  _freezedColumnsWidth = 0;
  constructor(e, t, n) {
    this._rowHeaderColumns = e, this._freezedColumns = t, this._gridHookFlow = n;
  }
  addColumn(e) {
    const t = new No({
      columnId: this._columnsList.length,
      width: e,
      left: this._columnsWidth
    });
    return this._columnsList.push(t), this._visibleColumnsList.push(t), this.updateColumnWidth(t, "add"), this.addFixedWidth(t), t;
  }
  isHeaderColumnId(e) {
    return e < this.headerColumns;
  }
  isInvalidColumnId(e) {
    return e < 0 || e >= this._columnsList.length;
  }
  updateVisibleColumnList() {
    this._visibleColumnsList = this._columnsList.filter((e) => e.visible);
  }
  updateColumnWidth(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = t === "add" || t === "show" ? e.widthWithBorder : -e.widthWithBorder;
    this._columnsWidth += n;
  }
  removeColumns(e, t) {
    this._columnsList.splice(e, t - e + 1).forEach((r) => this.updateColumnWidth(r, "remove")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  _changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t, n) {
    const s = this.getColumn(e).left, i = N(t).map((l) => new No({
      columnId: e + l,
      width: n,
      left: s + (n + nt) * l
    }));
    this._columnsList.splice(e, 0, ...i), i.forEach((l) => this.updateColumnWidth(l, "add")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  addFixedWidth(e, t = 1) {
    e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth += e.widthWithBorder * t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth += e.widthWithBorder * t);
  }
  updateFixedWidth() {
    this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0;
    let e = 0;
    const t = Math.min(this.freezedColumns, this._columnsList.length);
    for (; e < t; ) {
      const n = this.getColumn(e);
      n.visible && this.addFixedWidth(n), ++e;
    }
    this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]);
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), r = n.width - t;
    r !== 0 && (n.width = t, n.visible && this._changeColumnWidth(n, r));
  }
  setColumnVisible(e, t) {
    const n = this.getColumn(e);
    n.visible !== t && (n.visible = t, this.updateColumnWidth(n, t ? "show" : "hide"), this.updateVisibleColumnList(), this.updateFixedWidth());
  }
  getColumnLeft(e) {
    return this.getColumn(e).left;
  }
  getColumnRight(e) {
    return this.getColumn(e).right;
  }
  getColumnWidth(e) {
    return this._columnsList[e].width;
  }
  getColumnVisible(e) {
    return this._columnsList[e]?.visible ?? !1;
  }
  getColCount() {
    return this._columnsList.length;
  }
  getColumn(e) {
    const t = this._columnsList[e];
    if (!t) throw new Error("No column");
    return t;
  }
  getColumnUnstable(e) {
    return this._columnsList[e];
  }
  updateColumnsLeftFrom(e) {
    N(e, this._columnsList.length).reduce((t, n) => {
      const r = this._columnsList[n];
      return r.left = t, r.visible ? t + r.width + nt : t;
    }, this.getColumn(e).left);
  }
  get firstColumn() {
    return this._columnsList[0];
  }
  get lastColumn() {
    return this._columnsList[this._columnsList.length - 1];
  }
  get visibleColumnList() {
    return this._visibleColumnsList;
  }
  get columnsWidth() {
    return this._columnsWidth;
  }
  get rowHeaderColumnsWidth() {
    return this._rowHeaderColumnsWidth;
  }
  get length() {
    return this._columnsList.length;
  }
  get fixedColumnsWidth() {
    return this._freezedColumnsWidth;
  }
  get headerColumns() {
    return this._rowHeaderColumns;
  }
  get freezedColumns() {
    return this._rowHeaderColumns + this._freezedColumns;
  }
  get bodyFreezedColumns() {
    return this._freezedColumns;
  }
}
class Tu {
  _headerRows;
  _gridHookFlow;
  _rowList = [];
  _visibleRowList = [];
  _freezedRows;
  _rowsHeight;
  _headerRowsHeight;
  _freezedRowsHeight;
  constructor(e, t, n) {
    this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0, this._gridHookFlow = n;
  }
  getRow(e) {
    const t = this._rowList[e];
    if (!t) throw new Error(`Not found row ${e}`);
    return t;
  }
  /**
   * null일 수 있지만, 빠른 접근을 위해 사용
   */
  getRowUnstable(e) {
    return this._rowList[e];
  }
  addRow(e) {
    this._rowList.push(e), this._visibleRowList.push(e), this._updateRowHeight(e, "add"), e.rowId < this.freezedRows && this._updateFixedHeight();
  }
  getMaxCellWidth(e, t) {
    return this._rowList.reduce((n, r) => Math.max(n, r.getMaxCellWidth(e, t)), 0);
  }
  clearRows() {
    this.runFuncEachRow(
      (e) => e.remove(),
      this.headerRows
    ), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this._updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((r) => {
      const s = N(t).map((i) => n(r.rowId, e + i));
      r.insertCells(s, e);
    });
  }
  removeRows(e, t, n) {
    const r = this._rowList.slice(e, t + 1), s = n?.ignoreFiltered === !0 ? r.filter((i) => !i.filtered) : r;
    if (this._rowList = [
      ...this._rowList.slice(0, e),
      // filter 되지 않은 row
      ...r.filter((i) => !s.includes(i)),
      ...this._rowList.slice(t + 1)
    ], s.length !== 0) {
      for (const i of s)
        this._updateRowHeight(i, "remove"), i.remove();
      this._updateVisibleRowList(), this._updateFixedHeight();
    }
  }
  removeColumns(e, t) {
    this._rowList.forEach((n) => n.removeCells(e, t));
  }
  setColumnWidth(e, t) {
    this._rowList.forEach((n) => n.updateColumnWidth(e, t));
  }
  insertRows(e, t) {
    let n = this._rowList[e].top;
    this._rowList.splice(e, 0, ...t);
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      s.top = n, this._updateRowHeight(s, "add"), n = s.bottom;
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  insertRowByList(e) {
    const t = [...this._rowList];
    this._rowList.length = 0;
    const n = t[Symbol.iterator](), r = e[Symbol.iterator]();
    let s = r.next().value, i = n.next().value, l = 0;
    for (; i; )
      s && s.rowId === l ? (this._rowList.push(s), this._updateRowHeight(s, "add"), s = r.next().value) : (this._rowList.push(i), i = n.next().value), ++l;
    for (; s; )
      this._rowList.push(s), this._updateRowHeight(s, "add"), s = r.next().value;
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const r = this._rowList.splice(e, t - e + 1);
    r.forEach((i) => i.unmount());
    const s = e < n ? n - r.length : n;
    this._rowList.splice(s, 0, ...r), this._updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, r]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (r < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= r && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${r}`);
    const [s, i, l, u] = e < n ? [e, t, n, r] : [n, r, e, t], a = this._rowList.slice(s, i + 1), c = this._rowList.slice(l, u + 1);
    a.forEach((d) => d.unmount()), c.forEach((d) => d.unmount()), this._rowList = [
      ...this._rowList.slice(0, s),
      ...c,
      ...this._rowList.slice(i + 1, l),
      ...a,
      ...this._rowList.slice(u + 1)
    ], this._updateVisibleRowList();
  }
  isHeaderRowId(e) {
    return e < this.headerRows;
  }
  isInvalidRowId(e) {
    return e < 0 || e >= this._rowList.length;
  }
  getSnapshotRows() {
    return [...this._rowList];
  }
  _addFixedHeight(e, t, n = 1) {
    t < this.headerRows && (this._headerRowsHeight += e.heightWithBorder * n), t < this.freezedRows && (this._freezedRowsHeight += e.heightWithBorder * n);
  }
  _updateFixedHeight() {
    const e = Math.min(this.length, this.freezedRows);
    this._headerRowsHeight = 0, this._freezedRowsHeight = 0;
    for (let t = 0; t < e; ++t) {
      const n = this._rowList[t];
      n.visible && this._addFixedHeight(n, t);
    }
    this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]);
  }
  updateCellReadonlyStatus() {
    this._rowList.forEach((e) => {
      const t = e.cellCounts;
      for (let n = 0; n < t; n++)
        e.getCell(n).updateReadonlyStatus();
    });
  }
  setRowHeight(e, t) {
    const n = this.getRow(e), r = n.height - t;
    r !== 0 && (n.height = t, n.visible && this._changeRowHeight(n, r));
  }
  setRowVisible(e, t) {
    const n = this.getRow(e);
    t !== n.visible && (n.setVisible(t), this._updateRowHeight(n, t ? "show" : "hide"), this._updateVisibleRowList(), this._updateFixedHeight());
  }
  setRowVisibleBulk(e, t) {
    const { length: n } = t;
    for (let r = 0; r < n; ++r) {
      const s = this._rowList[e + r], i = t[r];
      s.visible !== i && (s.setVisible(i), this._updateRowHeight(s, i ? "show" : "hide"));
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  setRowFilter(e) {
    const t = this.headerRows;
    this.runFuncEachRow(
      (n) => n.render(),
      0,
      t
    ), this.runFuncEachRow(
      (n) => {
        const r = e(n);
        n.visible !== r && (n.setFiltered(!r), n.setVisible(r), this._updateRowHeight(n, r ? "show" : "hide"));
      },
      t
    ), this._updateVisibleRowList(), this._updateFixedHeight();
  }
  _updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((e) => e.visible);
  }
  _changeRowHeight(e, t) {
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t, this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]));
  }
  _updateRowHeight(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = e.height + Rt, r = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += r;
  }
  sort(e, t, n, r) {
    const s = this._rowList.slice(0, n), i = this._rowList.slice(n, r), l = this._rowList.slice(r);
    i.forEach((u) => u.unmount()), i.sort((u, a) => {
      let c = e(u, a);
      return c === 0 && (c = u.seq - a.seq), c * (t === "ASC" ? 1 : -1);
    }), this._rowList = [
      ...s,
      ...i,
      ...l
    ], this._updateVisibleRowList();
  }
  _unfreezeAllRows() {
    let e = this.headerRows, t = this._rowList[e];
    for (; t && t.isFreezed; )
      t.unfreeze(), t = this._rowList[++e];
  }
  _freezeRowsByCount(e) {
    let t = this.headerRows;
    for (let n = 0; n < e; n++) {
      const r = this._rowList[t];
      if (!r) break;
      r.freeze(), t++;
    }
  }
  freezeRows(e) {
    this._freezedRows = e, this._unfreezeAllRows(), this._freezeRowsByCount(e), this._updateFixedHeight();
  }
  renderRows() {
    this._visibleRowList.forEach((e) => e.render());
  }
  getTopByRowId(e) {
    return this.getRow(e).top;
  }
  getBottomByRowId(e) {
    return this.getRow(e).bottom;
  }
  getNextRowId() {
    return this._rowList.length;
  }
  getCell(e, t) {
    return this.getRow(e).getCell(t);
  }
  // interface를 위해 추가함
  cell(e, t) {
    return this.getCell(e, t);
  }
  getRowHeight(e) {
    return this._rowList[e].height;
  }
  getRowVisible(e) {
    return this._rowList[e]?.visible ?? !1;
  }
  getRowCount() {
    return this._rowList.length;
  }
  getVisibleRowCount() {
    return this._visibleRowList.length;
  }
  runFuncEachRow(e, t, n) {
    const r = t ?? 0, s = n ?? this.length;
    for (let i = r; i < s; i++) {
      const l = this._rowList[i];
      l && e(l);
    }
  }
  getStartOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getTopRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  getEndOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getBottomRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  /**
   * 현재 Column에서 가장 오른쪽에 있는 ColumnId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 Right을 반환
   */
  getEndColumnId(e) {
    return this.reduceRows({
      initValue: e,
      func: (t, n) => Math.max(t, n.getEndOfColumnId(e))
    });
  }
  getEndOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, r) => Math.max(n, r.getEndOfColumnId(e))
    });
    return t === e ? t : this.getEndOfColumnId(t);
  }
  getStartOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, r) => Math.min(n, r.getStartOfColumnId(e))
    });
    return t === e ? t : this.getStartOfColumnId(t);
  }
  findRowOrNull(e, t, n) {
    const r = t < e + this.freezedRowsHeight ? {
      startIndex: 0,
      endIndex: n,
      curIndex: Math.floor(n / 2),
      scrollTop: e
    } : {
      startIndex: 0,
      endIndex: this.length,
      curIndex: Math.floor(this.length / 2),
      scrollTop: 0
    };
    let s = this.getRow(r.curIndex);
    for (; !(t >= r.scrollTop + s.top && t <= r.scrollTop + s.bottom); ) {
      if (t < r.scrollTop + s.top) {
        if (r.endIndex === r.curIndex)
          return null;
        r.endIndex = r.curIndex;
      } else {
        if (r.startIndex === r.curIndex)
          return null;
        r.startIndex = r.curIndex;
      }
      r.curIndex = Math.floor((r.startIndex + r.endIndex) / 2), s = this.getRow(r.curIndex);
    }
    return s;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let r = e.initValue;
    for (let s = t; s < n; s++)
      r = e.func(r, this._rowList[s]);
    return r;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, r = t.length - 1;
    for (; n <= r; ) {
      const s = n + Math.floor((r - n) / 2), i = t[s];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? r = s - 1 : n = s + 1;
    }
    return null;
  }
  get visibleRowList() {
    return this._visibleRowList;
  }
  get freezedRowsHeight() {
    return this._freezedRowsHeight;
  }
  get headerRowsHeight() {
    return this._headerRowsHeight;
  }
  get rowsHeight() {
    return this._rowsHeight;
  }
  get length() {
    return this._rowList.length;
  }
  get headerRows() {
    return this._headerRows;
  }
  get freezedRows() {
    return this._headerRows + this._freezedRows;
  }
  get bodyFreezedRows() {
    return this._freezedRows;
  }
  get firstRow() {
    return this._rowList[0];
  }
  get lastRow() {
    return this._rowList[this._rowList.length - 1];
  }
}
function Mu() {
  const o = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
  return e.className = fi, o.className = gi, t.className = mi, n.className = pi, o.appendChild(t), o.appendChild(n), e.appendChild(o), { table: o, wrapper: e, freezedRows: t, bodyRows: n };
}
const Lu = 1e4;
function Hu({ rowManager: o, colManager: e, commandManager: t, cursorManager: n, hook: r }) {
  const s = Qe("textarea", _i);
  s.style.padding = "0";
  let i = null;
  const l = {
    focus: a,
    runEditMode: w,
    setPosition: d,
    mountElement(x) {
      v(), x.appendChild(s);
    },
    hide() {
    },
    onEditDone(x, g, b, R, T, I) {
    },
    onEditKeyDown(x, g, b, R) {
    },
    onEnterOnEdit(x, g) {
    },
    onEditInput(x, g) {
    },
    onDragEnd(x) {
    }
  }, u = jn(l);
  return r.addSyncHook("contextScroll", (x, g, b) => {
    i && d(i.cell, g, b);
  }), s.ondragend = (x) => l.onDragEnd(x), l;
  function a() {
    s.focus({ preventScroll: !0 });
  }
  function c(x) {
    s.value = x;
  }
  function d(x, g, b) {
    const R = o.getRow(x.row), T = e.getColumn(x.col), I = x.row < o.freezedRows ? g : 0, M = x.col < e.freezedColumns ? b : 0;
    s.style.top = `${R.top + I}px`, s.style.left = `${T.left + M}px`;
  }
  function h(x) {
    s.style.width = `${x.width}px`, s.style.height = `${x.height}px`;
  }
  function f(x) {
    const g = x === "" ? B.zLevel1 : `calc(${x} + 1000)`;
    s.style.zIndex = g;
  }
  function w(x, g, b, R = !1, T = !1) {
    i = {
      cell: x,
      beforeText: x.props.text ?? "",
      cancelEndEdit: !1
    }, s.style.removeProperty("padding"), R || c(i.beforeText), s.maxLength = x.props.maxLength ?? Lu, f(x.zIndexVariant), d(x, g, b), h(x), a(), s.scrollTo(0, s.scrollHeight), T && s.setSelectionRange(0, s.value.length), u.destroy(), u.create();
  }
  function _() {
    c(""), i = null, s.style.removeProperty("height"), s.style.removeProperty("width"), s.style.removeProperty("z-index");
  }
  function v() {
    s.addEventListener("keydown", E), s.addEventListener("blur", C), s.addEventListener("keyup", y), s.addEventListener("input", S);
  }
  function S(x) {
    i && l.onEditInput(x, s.value);
  }
  function y() {
    i || c("");
  }
  function E(x) {
    if (!i) return;
    const { beforeText: g, cell: b } = i;
    if (x.key === "Escape") {
      m(s.value, !1, x.key);
      return;
    }
    if (x.key === " " && !x.ctrlKey) {
      x.preventDefault();
      const R = s.value, { selectionStart: T, selectionEnd: I } = s;
      s.value = R.slice(0, T) + " " + R.slice(I), s.selectionStart = T + 1, s.selectionEnd = T + 1, l.onEditInput(x, s.value);
      return;
    }
    if (x.key === "Enter" && x.altKey && b.metaInfo.editSingleLine !== !0) {
      x.preventDefault();
      const R = s.selectionStart;
      try {
        i.cancelEndEdit = !0, s.blur(), s.value = [
          s.value.substring(0, R),
          s.value.substring(s.selectionEnd)
        ].join(`
`), a(), s.setSelectionRange(R + 1, R + 1, "backward"), l.onEditKeyDown(x, b.row, b.col, b.props);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (p(x)) {
      x.preventDefault(), m(s.value, g !== s.value, x.key), x.key === "Enter" ? l.onEnterOnEdit(x.ctrlKey, x.shiftKey) : k(x.key, x.shiftKey);
      return;
    }
    l.onEditKeyDown(x, b.row, b.col, b.metaInfo);
  }
  function C() {
    !i || i.cancelEndEdit || (m(s.value, i.beforeText !== s.value, ""), u.destroy());
  }
  function m(x, g, b) {
    if (i)
      try {
        const { cell: R, beforeText: T } = i;
        if (g && R.checkInputValidation(x)) {
          const I = { text: x, beforeText: T };
          R.props.gridStore.hook.emit("cellEditDoneBeforeRender", [R.row, R.col, I]);
          const M = new ze(t.commandContext, [
            R.row,
            R.col,
            { text: I.text }
          ]);
          M.onUndo = () => {
            l.onEditDone(R, g, T, b, s.selectionStart, s.selectionEnd);
          }, M.onExecute = () => {
            l.onEditDone(R, g, T, b, s.selectionStart, s.selectionEnd);
          }, t.pushCommandBlock(new Ue(
            `Edit cell (${R.row}, ${R.col}) `,
            M
          )), R.props = { text: I.text };
        }
        l.onEditDone(R, g, T, b, s.selectionStart, s.selectionEnd);
      } finally {
        s.style.padding = "0", _();
      }
  }
  function p(x) {
    return x.key === "ArrowLeft" && s.selectionStart === 0 && s.selectionEnd === 0 || x.key === "ArrowUp" && s.selectionStart === 0 && s.selectionEnd === 0 || x.key === "ArrowRight" && s.selectionStart === s.textLength && s.selectionEnd === s.textLength || x.key === "ArrowDown" && s.selectionStart === s.textLength && s.selectionEnd === s.textLength || x.key === "Tab" ? !0 : x.key === "Enter" && !x.altKey && !x.ctrlKey && !x.shiftKey;
  }
  function k(x, g) {
    switch (x) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return g ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
class mt {
  _rowManager;
  _colManager;
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: r }) {
    r = Math.min(r, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let s = e; s <= n; s++)
      for (let i = t; i <= r; i++)
        yield this._rowManager.cell(s, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: r }) {
    r = Math.min(r, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let s = 0; s < this._rowManager.headerRows; ++s)
      for (let i = t; i <= r; ++i)
        yield this._rowManager.cell(s, i);
    for (let s = e; s <= n; ++s)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(s, i);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const r of this.getSelectionGenerator(e))
      t(r) && n++;
    return n;
  }
}
function Ou(o) {
  return o.top === o.bottom && o.left === o.right;
}
function Au(o) {
  return o.top > o.bottom || o.left > o.right;
}
function zu(o, e) {
  let t = [];
  const n = new mt(o, e), r = ({ top: a, left: c, bottom: d, right: h }) => t.some(({ mergeArea: f }) => c <= f.right && h >= f.left && a <= f.bottom && d >= f.top) === !1, s = (a, c) => {
    let d = 0;
    for (let h = a; h <= c; ++h)
      o.getRowVisible(h) && ++d;
    return d;
  }, i = (a, c) => {
    let d = 0;
    for (let h = a; h <= c; ++h)
      e.getColumnVisible(h) && ++d;
    return d;
  }, l = ({ top: a, left: c, bottom: d, right: h }) => {
    for (let f = a; f <= d; ++f)
      if (o.getRowVisible(f) === !1) return !0;
    for (let f = c; f <= h; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, u = (a, c) => {
    const d = o.getCell(a, c), h = t.indexOf(d);
    return h < 0 ? null : t[h];
  };
  return {
    isValidatedMerging: r,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(a) {
      t = t.filter(({ row: c }) => c < a);
    },
    mergeCells(a) {
      if (Au(a))
        throw new Error("Invalid range");
      if (r(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (Ou(a))
        throw new Error("Could not merging with single cell!");
      const c = o.getCell(a.top, a.left);
      c.mergeInfo = { rowSpan: s(a.top, a.bottom), colSpan: i(a.left, a.right) }, t.push(c);
      for (const d of n.getSelectionGenerator(a))
        (d.row !== a.top || d.col !== a.left) && (d.mergeMain = c);
    },
    splitCells(a, c) {
      const d = u(a, c);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      for (const h of n.getSelectionGenerator(d.mergeArea))
        h.mergeMain = void 0, h.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(a, c);
    },
    isMerged(a, c) {
      return !r({ top: a, left: c, bottom: a, right: c });
    },
    *getMergedCellGenerator(a) {
      for (const c of n.getSelectionGenerator(a))
        (c.mergeInfo.rowSpan > 1 || c.mergeInfo.colSpan > 1) && (yield c);
    },
    removeMergeCell(a, c) {
      const d = u(a, c);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((h) => h !== d);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: d } of t)
        if (d.top < a && d.bottom >= a && d.bottom <= c || d.bottom > c && d.top >= a && d.top <= c || d.top < a && d.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: d } of t)
        if (d.left < a && d.right >= a && d.right <= c || d.right > c && d.left >= a && d.left <= c || d.left < a && d.right > c)
          return !0;
      return !1;
    },
    checkCanInsertRow(a) {
      for (const { mergeArea: c } of t)
        if (c.top < a && c.bottom >= a)
          return !1;
      return !0;
    },
    checkCanInsertColumn(a) {
      for (const { mergeArea: c } of t)
        if (c.left < a && c.right >= a)
          return !1;
      return !0;
    }
  };
}
class Fu {
  _gridHookFlow = tl();
  // HTML Elements
  _elements;
  _gridThemeConfig;
  _rowManager;
  _columnManager;
  _mergeHandler;
  _commandManager;
  _gridTextarea;
  _gridStateContext;
  _gridCursorManager;
  constructor(e) {
    const t = Kt();
    this._gridThemeConfig = {
      "grid.paddingTop": t.getStoreValue("grid.paddingTop"),
      "grid.paddingBottom": t.getStoreValue("grid.paddingBottom"),
      "grid.paddingLeft": t.getStoreValue("grid.paddingLeft"),
      "grid.paddingRight": t.getStoreValue("grid.paddingRight"),
      "grid.defaultRowHeight": t.getStoreValue("grid.defaultRowHeight"),
      "grid.defaultColumnWidth": t.getStoreValue("grid.defaultColumnWidth"),
      "grid.defaultRowMinSize": t.getStoreValue("grid.defaultRowMinSize"),
      "grid.defaultRowMaxSize": t.getStoreValue("grid.defaultRowMaxSize"),
      "grid.defaultColumnMinSize": t.getStoreValue("grid.defaultColumnMinSize"),
      "grid.defaultColumnMaxSize": t.getStoreValue("grid.defaultColumnMaxSize"),
      "grid.defaultDropdownWidth": t.getStoreValue("grid.defaultDropdownWidth"),
      "grid.defaultFontFamily": t.getStoreValue("grid.defaultFontFamily"),
      "grid.defaultFontSize": t.getStoreValue("grid.defaultFontSize"),
      "grid.forceRenderLeftCol": t.getStoreValue("grid.forceRenderLeftCol"),
      "grid.forceRenderRightCol": t.getStoreValue("grid.forceRenderRightCol")
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Tu(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new Iu(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = zu(this._rowManager, this._columnManager), this._gridTextarea = Hu({
      hook: this._gridHookFlow,
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = Mu();
  }
  setGridConfig(e) {
    Object.assign(this._gridThemeConfig, e);
  }
  // theme
  getThemeValue(e) {
    return this._gridThemeConfig[e];
  }
  // shared utility
  get elements() {
    return this._elements;
  }
  get tableElement() {
    return this._elements.table;
  }
  get hook() {
    return this._gridHookFlow;
  }
  get mergeHandler() {
    return this._mergeHandler;
  }
  get rowManager() {
    return this._rowManager;
  }
  get columnManager() {
    return this._columnManager;
  }
  get commandManager() {
    return this._commandManager;
  }
  /**
   * 가능하면 쓰지 말 것
   * @deprecated
   */
  get commandContext() {
    return this._commandManager.commandContext;
  }
  get gridTextarea() {
    return this._gridTextarea;
  }
  get gridStateContext() {
    return this._gridStateContext;
  }
  get cursorManager() {
    return this._gridCursorManager;
  }
}
const Du = /^var\((.+)\)$/;
function uo(o) {
  const e = Du.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Wu = [
  B.zLevel0,
  B.zLevel1,
  B.zLevel2,
  B.zLevel3,
  B.zLevel4,
  B.zLevel5,
  B.zLevel6,
  B.zLevel7,
  B.zLevel8,
  B.zLevel9
], Nu = [
  [
    "horizontalAlign",
    { key: "text-align" }
  ],
  [
    "verticalAlign",
    {
      key: "justify-content",
      custom: {
        top: "flex-start",
        middle: "center",
        bottom: "flex-end"
      }
    }
  ],
  [
    "fontSize",
    { key: "font-size" }
  ],
  [
    "fontFamily",
    { key: "font-family" }
  ],
  [
    "textColor",
    { key: "color" }
  ],
  [
    "backColor",
    { key: "background-color" }
  ],
  [
    "textDecoration",
    { key: "text-decoration" }
  ],
  [
    "fontWeight",
    { key: "font-weight" }
  ]
], pe = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
}, Pu = /* @__PURE__ */ new Set([
  pe.lv9,
  pe.lv7,
  pe.lv6,
  pe.lv4,
  pe.lv3
]);
class Bu {
  _tag;
  _cellProps;
  _row = -1;
  _col = -1;
  _rowSpan = 1;
  _colSpan = 1;
  _visible = !0;
  _needRender = !0;
  _zIndex = null;
  _left = 0;
  _top = 0;
  _width = 0;
  _height = 0;
  _mergeMain;
  _isActivate = !1;
  _cellRenderer;
  _isRemoved = !1;
  _element = null;
  _mark;
  _cellType;
  constructor({ row: e, col: t, tag: n, props: r, cellRenderer: s, cellType: i }) {
    this._cellProps = { ...r }, this._tag = n, this._cellRenderer = s, this._row = e, this._col = t, this._cellType = i;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(_n) || this.element.tagName === "TH";
  }
  /**
   * @version ^2.18.0
   */
  get width() {
    return this._width;
  }
  /**
   * @version ^2.18.0
   */
  get height() {
    return this._height;
  }
  /**
   * @version ^2.18.0
   */
  get isRemoved() {
    return this._isRemoved;
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this._cellProps.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this._rowSpan > 1 || this._colSpan > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this._cellProps);
  }
  get fontSize() {
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : Po("grid.defaultFontSize", mo.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : Po("grid.defaultFontFamily", mo.fontFamilyBase, "fontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this._rowSpan - 1,
      right: this.col + this._colSpan - 1
    };
  }
  /**
   * IRGrid 셀 내부 너비 계산 값
   */
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  /**
   * 렌더러 내부에서 사용하는 별도 컨텐츠 너비 계산 값
   * @example Select 렌더러의 Dropdown 영역 너비
   */
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  get mergeInfo() {
    return {
      rowSpan: this._rowSpan,
      colSpan: this._colSpan
    };
  }
  get mergeMain() {
    return this._mergeMain;
  }
  get row() {
    return this._row;
  }
  get col() {
    return this._col;
  }
  get colSpan() {
    return this._colSpan;
  }
  get rowSpan() {
    return this._rowSpan;
  }
  get bottom() {
    return this.row + this.mergeInfo.rowSpan - 1;
  }
  get right() {
    return this.col + this.mergeInfo.colSpan - 1;
  }
  /**
   * 이 visible 정보는 cell 병합으로 인해 숨겨진 셀의 표시 여부만 확인이 가능합니다.
   * 숨겨진 행, 열의 경우에는 IRGrid.getCellVisible 메서드를 사용해야 합니다.
   */
  get visible() {
    return this._visible;
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.props, r = this._getRenderInstance();
    return e !== !0 && t !== !0 && n !== "" && (r.editable || r.canBeClear);
  }
  get text() {
    const { text: e } = this._cellProps;
    return e ?? "";
  }
  get cellType() {
    return this._cellType;
  }
  get value() {
    return this._cellProps.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this._cellProps.object;
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  get metaInfo() {
    return this._cellProps;
  }
  get props() {
    return this._cellProps;
  }
  get element() {
    return this._element === null ? this._initElement() : this._element;
  }
  get needRender() {
    return this._needRender;
  }
  get isConnected() {
    return this._element === null ? !1 : this._element.isConnected;
  }
  get editable() {
    return !(this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(uo(B.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.render()) : (this._visible = !1, this.unmount());
  }
  set isDragOver(e) {
    e ? this.element.classList.add("is-dragging") : this.element.classList.remove("is-dragging");
  }
  set text(e) {
    this.props = { text: e };
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  set cellInfo(e) {
    this.props = e;
  }
  set props(e) {
    Object.assign(this._cellProps, e), this.render(), this.renderInstance instanceof fe && this.renderInstance.onUpdateCell(this._row, this._col, e);
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    this._rowSpan = e, this._colSpan = t, this.render();
  }
  set mergeMain(e) {
    this._mergeMain = e, this.visible = e === void 0, e !== void 0 && this.unmount();
  }
  set row(e) {
    this._row = e, this.setNeedRender(), this._element?.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this._col = e, this.setNeedRender(), this._element?.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this._cellRenderer = e, this.render();
  }
  /*
   * Private Methods
   */
  _removeChildren() {
    for (; this._element.lastChild; )
      this._element.lastChild.remove();
  }
  _addMark(e) {
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this._element.appendChild(this._mark);
  }
  _removeMark() {
    this._mark && (this._mark.remove(), this._mark = void 0);
  }
  /**
   * @version ^2.18.0
   */
  get renderInstance() {
    return this._getRenderInstance();
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof fe)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof fe)
        return e;
      if (e instanceof HTMLElement)
        return new ts(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _addStickyCls() {
    this._element.classList.add(_n);
  }
  _removeStickyCls() {
    this._element.classList.remove(_n);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? Ae(this._element, { [e]: `${t}px` }) : Ae(this._element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: r
    } = this._cellProps;
    this._applyCustomProp(B.cellTopPadding, e), this._applyCustomProp(B.cellLeftPadding, t), this._applyCustomProp(B.cellRightPadding, n), this._applyCustomProp(B.cellBottomPadding, r);
  }
  _updateActivate() {
    this._element && (this._isActivate ? this._element.classList.add("is-active") : this._element.classList.remove("is-active"));
  }
  _updateCellLayout() {
    this._element && (this._element.style.top = `${this._top}px`, this._element.style.left = `${this._left}px`, this._element.style.width = `${this._width}px`, this._element.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._updateActivate(), Mt(this._element, "is-disabled", this._cellProps.disabled === !0), Mt(this._element, "is-asc", this._cellProps.sortOrder === "ASC"), Mt(this._element, "is-desc", this._cellProps.sortOrder === "DESC"), this.updateReadonlyStatus(), this._cellProps.isError ? this._addMark(wi) : this._cellProps.hasMemo ? this._addMark(Ci) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of Nu) {
        const n = this._cellProps[e];
        if (n === void 0) {
          this._element.style.removeProperty(t.key);
          continue;
        }
        this._element.style.setProperty(
          t.key,
          t.custom ? t.custom[n] : n.toString()
        );
      }
  }
  _initElement() {
    const e = document.createElement(this._tag);
    return this._element = e, this._rowSpan > 1 && (e.rowSpan = this._rowSpan), this._colSpan > 1 && (e.colSpan = this._colSpan), e.classList.add(vi, this._tag === "th" ? Ri : xi), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), this._updateStickyZId(), this._updateCellLayout(), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      Ze(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
    }, e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this.element.classList.add("is-selected"), this.onSelect(this));
  }
  setNeedRender() {
    this._needRender = !0;
  }
  updateHeight(e) {
    this._height !== e && (this._height = e, this._updateCellLayout());
  }
  updateWidth(e) {
    this._width !== e && (this._width = e, this._updateCellLayout());
  }
  updateCellLayout(e, t, n, r, s) {
    this._zIndex && Pu.has(this._zIndex) && (t += s), !(this._top === e && this._left === t && this._height === n && this._width === r) && (this._top = e, this._height = n, this._left = t, this._width = r, this._updateCellLayout());
  }
  unmount() {
    this._element?.remove();
  }
  remove() {
    this.unmount(), this._isRemoved = !0;
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this._cellProps, e), t && Object.assign(this._cellProps, { text: t }), this.render();
  }
  release() {
    this.element.classList.remove("is-selected"), this.deactivate();
  }
  activate() {
    this._isActivate = !0, this._updateActivate(), this._mergeMain?.activate();
  }
  deactivate() {
    this._isActivate = !1, this._updateActivate(), this._mergeMain?.deactivate();
  }
  updateReadonlyStatus() {
    Mt(this.element, "is-readonly", this.onCheckReadonly());
  }
  _updateStickyZId() {
    this._element && (this._element.style.removeProperty(B.stickyCellZId), this._removeStickyCls(), this._zIndex !== null && (Ae(this._element, { [B.stickyCellZId]: Wu[this._zIndex] }), this._addStickyCls()));
  }
  setStickyZIndex(e) {
    this._zIndex = e, this._updateStickyZId();
  }
  checkInputValidation(e) {
    return this.props.enabledPatternCheck && this.props.allowedRegExpPattern ? this.props.allowedRegExpPattern.test(e) : !0;
  }
  _renderInnerCell() {
    this._element || this._initElement(), this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this._element.appendChild(this._getRenderElement()), this._needRender = !1, this.onPostRender();
  }
  render() {
    this._element !== null && this.visible && this._renderInnerCell();
  }
  clear() {
    this._cellProps.value && delete this._cellProps.value, this.props = { text: "" }, this.onClear(this);
  }
  /*
   * Events
   */
  onClick(e) {
    this.props.gridStore.hook.emitSync("cellClick", [e]);
  }
  onDblClick(e) {
    this.props.gridStore.hook.emitSync("cellDblClick", [e]);
  }
  onRightClick(e, t) {
    this.props.gridStore.hook.emitSync("cellRightClick", [t, e]);
  }
  onPostRender() {
    this.props.gridStore.hook.emitSync("postRenderCell", [this]);
  }
  onSelect(e) {
    this.props.gridStore.hook.emitSync("cellSelect", [e]);
  }
  onClear(e) {
    this.props.gridStore.hook.emitSync("cellClear", [e]);
  }
  onCheckReadonly() {
    return this._cellProps.readonly === !0;
  }
}
function Po(o, e, t) {
  const n = Kt().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Vu extends Kn {
  constructor() {
    super([]);
  }
}
class Gu extends Kn {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class mn {
  _grid;
  _generator;
  constructor(e) {
    this._grid = e, this._generator = new mt(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [r, s] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: Y(e.top, t, n),
      left: Y(e.left, r, s),
      bottom: Y(e.bottom, t, n),
      right: Y(e.right, r, s)
    };
    return i.top > n || i.bottom < t || i.left > s || i.right < r ? null : i;
  }
  extendRange(e) {
    const t = this._generator, n = { ...e }, r = [...t.getSelectionGenerator(e)];
    for (; r.length; ) {
      const s = r.pop();
      if (!s.isMerged && !s.mergeMain) continue;
      const i = s.mergeMain ? s.mergeMain.mergeArea : s.mergeArea;
      if (i.top < n.top) {
        const l = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const u of l)
          r.push(u);
        n.top = i.top;
      }
      if (i.left < n.left) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: i.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const u of l)
          r.push(u);
        n.left = i.left;
      }
      if (n.bottom < i.bottom) {
        const l = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: i.bottom,
            right: n.right
          }
        );
        for (const u of l)
          r.push(u);
        n.bottom = i.bottom;
      }
      if (n.right < i.right) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: i.right
          }
        );
        for (const u of l)
          r.push(u);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        N(e.left, e.right + 1).map((r) => this._grid.cell(n, r).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        N(e.left, e.right + 1).map((r) => this._grid.cell(n, r))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const r = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: r, right: t })];
  }
  getColumnListByColumn(e, t) {
    return N(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class ju extends Kn {
  constructor(e) {
    super(null, (t) => {
      const n = new mn(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        Cn((r) => {
          if (!r || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: s, range: i } = r;
          return s.row >= i.top && s.row <= i.bottom && s.col >= i.left && s.col <= i.right ? r : {
            activeCell: e.cell(i.top, i.left),
            range: r.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        Cn((r) => {
          if (!r) return null;
          const s = n.adjustRange(r.range);
          return s ? { activeCell: r.activeCell, range: s } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        Cn((r) => r ? { activeCell: r.activeCell, range: n.extendRange(r.range) } : null)
      );
    });
  }
}
class Uu {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new ju(e), this._gridModeState = new Gu(), this._headerCellListState = new Vu();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this._gridModeState.isIdle;
  }
  get selectionRangeState() {
    return this._selectionState;
  }
  get gridModeState() {
    return this._gridModeState;
  }
  get activateHeaderCellState() {
    return this._headerCellListState;
  }
}
class ce {
  _mountRollbackStack = [];
  _isMounted = !1;
  _pluginAPI = null;
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  addRollbackTask(e) {
    this._mountRollbackStack.push(e);
  }
  mount(e) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._mountTask(e), this._isMounted = !0;
    } catch (t) {
      console.error("Plugin mount error!", t), this.unmount();
    }
  }
  unmount() {
    if (!this.isMounted)
      throw new Error("Already unmounted plugin!");
    try {
      for (const e of this._mountRollbackStack)
        e();
      this._mountRollbackStack.length = 0, this._isMounted = !1;
    } catch (e) {
      console.error("Plugin unmount error!", e);
    }
  }
  setPluginAPI(e) {
    return this._pluginAPI = e, this._pluginAPI;
  }
  get pluginAPI() {
    if (this._pluginAPI === null) throw new Error("Plugin API is not initialized. You muse read this property since addPlugin.");
    return this._pluginAPI;
  }
  get isMounted() {
    return this._isMounted;
  }
}
class Ku {
  _grid;
  _rowType;
  _cells;
  _rowId;
  _rowElement = null;
  _viewportCellList = [];
  _isMounted;
  _filtered;
  _isHeaderRow;
  _isFreezed;
  _top = -1;
  _stickyColumns = 0;
  _height = 0;
  _seq;
  _visible = !0;
  _isCalledOnMounted = !1;
  constructor({ grid: e, rowId: t, height: n, top: r, rowType: s, seq: i }) {
    this._grid = e, this._cells = [], this._rowType = s, this._rowId = t, this._seq = i, this._isMounted = !1, this._isFreezed = !1, this._isHeaderRow = !1, this._filtered = !1, this._height = n, this._top = r;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this._isFreezed;
  }
  /**
   * 각 Grid별 Row 생성 시퀀스 id
   */
  get seq() {
    return this._seq;
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this._isHeaderRow;
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  _updateVars() {
    if (!this._rowElement) return;
    const e = this._rowElement;
    e.setAttribute("data-top", this._top.toString()), e.setAttribute("data-row", this._rowId.toString());
  }
  _initRowElement() {
    const e = document.createElement("tr");
    return this._rowElement = e, this._updateVars(), this.updateStickyStatus(), this.onRenderRow(e), e;
  }
  get element() {
    return this._rowElement === null ? this._initRowElement() : this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + Rt;
  }
  get bottom() {
    return this.visible ? this._top + this.heightWithBorder : this._top;
  }
  get stickyColumns() {
    return this._stickyColumns;
  }
  get top() {
    return this._top;
  }
  get visible() {
    return this._visible;
  }
  get filtered() {
    return this._filtered;
  }
  /*
   * Setters
   */
  set rowId(e) {
    this._rowElement && (this._rowElement.dataset.row = e.toString()), this._rowId = e, this._cells.forEach((t) => t.row = e);
  }
  set textColor(e) {
    this.element.style.color = e;
  }
  set height(e) {
    this._height = e, this.updateRowHeight();
  }
  set top(e) {
    this._top = e, this._updateVars();
  }
  /*
   * Public Methods
   */
  setVisible(e) {
    if (e && this.filtered) throw new Error("It can not set visible to be true when filtered is true.");
    this._visible = e;
  }
  setFiltered(e) {
    this._filtered = e;
  }
  /**
   * @version ^2.18.1
   */
  remove() {
    this.unmount(), this._cells.forEach((e) => e.remove());
  }
  unmount() {
    this._isMounted = !1, this._rowElement?.remove();
  }
  /**
   * 해당 셀의 right columnId를 얻어옴. 병합된 경우 columnId보다 큰 값을 반환하게 된다.
   */
  getEndOfColumnId(e) {
    const { col: t, mergeInfo: n, mergeMain: r } = this._cells[e];
    return r ? r.right : t + n.colSpan - 1;
  }
  getStartOfColumnId(e) {
    const { mergeMain: t } = this._cells[e];
    return t ? t.col : e;
  }
  getMaxCellWidth(e, t) {
    return N(e, t).reduce((n, r) => {
      const s = this._cells[r];
      return s.visible && s.mergeInfo.colSpan === 1 ? Math.max(n, s.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  updateColumnWidth(e, t) {
    const n = this._cells[e];
    n.updateWidth(
      n.colSpan === 1 ? t : this._grid.getColWidthWithSpan(n.col, n.colSpan)
    );
  }
  removeCells(e, t) {
    const n = 1 + t - e;
    this._cells.splice(e, n).forEach((s) => s.remove()), N(e, this._cells.length).forEach((s) => this._cells[s].col -= n);
  }
  /**
   * 현재 row에서 가장 위에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 top을 반환
   */
  getTopRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain && (e = Math.min(e, t.mergeMain.row));
    return e;
  }
  getLeftColumnId(e) {
    return this._cells[e].mergeMain ? this._cells[e].mergeMain.col : e;
  }
  /**
   * 현재 row에서 가장 아래에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 bottom을 반환
   */
  getBottomRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain ? e = Math.max(e, t.mergeMain.bottom) : t.mergeInfo.rowSpan > 1 && (e = Math.max(e, t.bottom));
    return e;
  }
  getFreezedCellType(e) {
    const t = e < this._grid.getFreezedColumnCount();
    return this.isHeaderRow ? t ? pe.lv9 : pe.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? pe.lv7 : pe.lv6 : pe.lv5 : t ? e < this._grid.headerColumns ? pe.lv4 : pe.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), e.setStickyZIndex(this.getFreezedCellType(e.col));
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    N(t, this._cells.length).forEach((n) => this._cells[n].col += e.length), this._cells.splice(t, 0, ...e), e.forEach((n) => n.setStickyZIndex(this.getFreezedCellType(n.col)));
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (sl(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, r]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (r < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= r && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${r}`);
    const [s, i, l, u] = e < n ? [e, t, n, r] : [n, r, e, t];
    this._cells = [
      ...this._cells.slice(0, s),
      ...this._cells.slice(l, u + 1),
      ...this._cells.slice(i + 1, l),
      ...this._cells.slice(s, i + 1),
      ...this._cells.slice(u + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const r = this._cells.splice(e, t - e + 1), s = e < n ? n - r.length : n;
    this._cells.splice(s, 0, ...r), this.reorderCells();
  }
  render() {
    if (this._viewportCellList.length !== 0 && this._rowElement && this.visible) {
      for (const e of this._viewportCellList)
        e.render();
      this.onRenderRow(this._rowElement);
    }
  }
  getCell(e) {
    const t = this._cells[e];
    if (!t) throw new Error(`Not found cell ${this._rowId}, ${e}`);
    return t;
  }
  getCellUnstable(e) {
    return this._cells[e];
  }
  setRowInfo(e) {
    const {
      textData: t,
      cellMetaInfo: n
    } = e;
    this._cells.forEach((r, s) => r.updateCellMetaInfo(n, t?.[s]));
  }
  *getCellGenerator(e = 0, t = this._cells.length - 1) {
    for (let n = e; n <= t; ++n)
      yield this._cells[n];
  }
  setColumnVisible(e, t) {
    this._cells[e].visible = t;
  }
  getColumnVisible(e) {
    return this._cells[e].visible;
  }
  setAutoHeight(e, t) {
    const n = Math.ceil(this.rowInnerHeight), r = Y(isNaN(n) ? 0 : n, e, t);
    return this.height !== r ? (this.height = r, !0) : !1;
  }
  _removeCellsByColIdList() {
    const e = new Set(this._viewportCellList);
    for (const t of this._cells)
      t.isConnected && (!e.has(t) || t.mergeMain) && t.unmount();
  }
  updateRowHeight() {
    this._cells.forEach((e) => {
      e.updateHeight(e.rowSpan === 1 ? this._height : this._grid.getRowHeightWithSpan(this._rowId, e.rowSpan));
    });
  }
  updateViewportCells(e, t, n) {
    this._viewportCellList = e, this._removeCellsByColIdList();
    const { rowId: r, top: s, heightWithBorder: i } = this;
    let l = null;
    for (const u of e) {
      if (u.mergeMain) continue;
      const { needRender: a } = u, c = u.element;
      u.isConnected || (l === null ? this.element.prepend(c) : l.after(c));
      const { rowSpan: d, colSpan: h, col: f } = u, w = {
        top: s,
        left: this._grid.getColumnLeft(f),
        width: h === 1 ? this._grid.getColumnWidth(f) + 1 : this._grid.getColWidthWithSpan(f, h),
        height: d === 1 ? i : this._grid.getRowHeightWithSpan(r, d),
        scrollLeft: n,
        scrollTop: t
      };
      this._grid.hook.emitSync("cellLayout", [r, f, w]), u.updateCellLayout(
        w.top,
        w.left,
        w.height,
        w.width,
        w.scrollLeft
      ), a && u.render(), l = c;
    }
  }
  mount(e, t) {
    this.isMounted || (e.insertAdjacentElement(t, this.element), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
  }
  freeze(e = !1) {
    this._isFreezed = !0, e && (this._isHeaderRow = !0), this._rowElement && this.updateStickyStatus();
  }
  isBetweenTop(e) {
    return e >= this.top && e <= this.bottom;
  }
  updateStickyStatus() {
    this._rowElement && this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n)), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + nt : 0)), 0);
  }
  // row에 있는 모든 셀에 metaInfo 일괄 적용
  updateCellMetaInfo(e) {
    this._cells.forEach((t) => t.cellInfo = e);
  }
  freezeColumns(e) {
    this._stickyColumns = e, this.updateStickyStatus();
  }
  unfreeze() {
    if (this.isHeaderRow) throw new Error("Can not freeze header row!");
    this._isFreezed = !1, this._rowElement && this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
  }
  onRenderRow(e) {
  }
}
const $u = 4, Ft = "is-hidden";
function qu(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const Yu = yi, Xu = [
  Ei,
  ki,
  Ii,
  Ti
], Zu = ["top", "left", "bottom", "right"];
function Ju(o) {
  const e = document.createElement("div"), t = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], n = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], [r, s, i, l] = n, u = [r, i], a = [s, l];
  e.classList.add(bi, Ft), n.forEach((y, E) => y.className = `${Si} border-line__${Zu[E]}`), t.forEach((y) => e.appendChild(y)), n.forEach((y) => e.appendChild(y));
  function c(y) {
    const { top: E, left: C, bottom: m, right: p } = f(y), { scrollTop: k, scrollLeft: x } = o;
    let g = 0, b = 0;
    return y.top < o.getFreezedRowCount() && (b = k), y.left < o.getFreezedColumnCount() && (g = x), {
      top: E + b,
      left: C + g,
      width: Math.max(0, p - C),
      height: m - E
    };
  }
  function d(y) {
    y.classList.add(Ft), delete y.dataset.top, delete y.dataset.left, delete y.dataset.bottom, delete y.dataset.right, delete y.dataset.visible;
  }
  function h(y, E) {
    const C = t[y], m = c(E);
    C.className = `${Yu} ${Xu[y]}`, Object.assign(C.dataset, {
      top: String(E.top),
      left: String(E.left),
      bottom: String(E.bottom),
      right: String(E.right),
      visible: "true"
    }), C.style.top = `${m.top}px`, C.style.left = `${m.left}px`, C.style.width = `${m.width}px`, C.style.height = `${m.height}px`;
  }
  function f(y) {
    return {
      top: o.getRow(y.top).top - Rt,
      left: o.getColumn(y.left).left - nt,
      bottom: o.getRow(y.bottom).bottom,
      right: o.getColumn(y.right).right
    };
  }
  function w(y) {
    const { left: E, right: C } = y, m = o.getFreezedColumnCount();
    return N(E, C + 1).reduce((p, k) => {
      const x = o.getColumn(k);
      return x.visible ? p + (k >= m ? x.widthWithBorder : 0) : p;
    }, 0);
  }
  function _(y) {
    const { top: E, bottom: C } = y, m = o.getFreezedRowCount();
    return N(E, C + 1).reduce((p, k) => {
      const x = o.getRow(k);
      return x.visible ? p + (k >= m ? x.heightWithBorder : 0) : p;
    }, 0);
  }
  function v(y, E, C, m) {
    if (y <= m)
      return Math.min(E, C);
    const p = y - m;
    return C > p ? Math.max(0, C - p) : 0;
  }
  function S(y) {
    const { top: E, left: C, bottom: m, right: p } = f(y), {
      fixedRowHeight: k,
      fixedColumnWidth: x,
      scrollTop: g,
      scrollLeft: b
    } = o, R = k + g, T = x + b, I = E < k, M = m <= k, L = C < x, A = p <= x, O = E >= R, z = m >= R, D = C >= T, F = p >= T, W = w(y), Tt = _(y), pt = v(C, W, b, x), _t = v(E, Tt, g, k), ot = p - C - pt, rt = m - E - _t, re = E + (I ? g : _t), ue = C + (L ? b : pt), we = ue < 0 ? 1 : 0, be = re < 0 ? 1 : 0;
    (function() {
      u.forEach((ye) => {
        ye.style.left = `${ue + we}px`, ye.style.width = `${ot - we}px`;
      });
    })(), function() {
      a.forEach((ye) => {
        ye.style.top = `${re + be}px`, ye.style.height = `${rt - be}px`;
      });
    }(), function() {
      if (ot <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), I ? r.style.top = `${E + g + be}px` : O ? r.style.top = `${E + be}px` : r.style.display = "none";
    }(), function() {
      if (ot <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.top = `${m + g - Rt}px` : z ? i.style.top = `${m - Rt}px` : i.style.display = "none";
    }(), function() {
      if (rt <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), L ? s.style.left = `${C + b + we}px` : D ? s.style.left = `${C + we}px` : s.style.display = "none";
    }(), function() {
      if (rt <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), A ? l.style.left = `${p + b - nt}px` : F ? l.style.left = `${p - nt}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(y) {
      const { headerRows: E, headerColumns: C } = o, m = o.getFreezedRowCount(), p = o.getFreezedColumnCount(), k = o.getRowCount() - 1, x = o.getColCount() - 1, g = [
        { top: E, left: C, bottom: m - 1, right: p - 1 },
        { top: E, left: p, bottom: m - 1, right: x },
        { top: m, left: C, bottom: k, right: p - 1 },
        { top: m, left: p, bottom: k, right: x }
      ].map((b) => qu(y, b));
      for (let b = 0; b < $u; b++) {
        const R = g[b];
        R ? h(b, R) : d(t[b]);
      }
      S(y);
    },
    applyGridScroll() {
      const y = o.getSelection();
      y && this.updateArea(y);
    },
    show() {
      e.classList.remove(Ft);
    },
    hide() {
      e.classList.add(Ft);
    }
  };
}
class Qu {
  #t;
  #e;
  constructor(e, t, n) {
    this.#t = t, this.#e = Ju(e), n.appendChild(this.#e.selectionRoot);
  }
  updateScroll() {
    this.#e.applyGridScroll();
  }
  releaseRange() {
    this.#e.hide();
  }
  update() {
    const e = this.#t.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this.#e.show(), this.#e.updateArea(t);
  }
}
const Dt = -1, Bo = 2, Vo = 2, ed = 2, td = [
  "nothing",
  // row id, column id, left top, height 영향
  "updateColumnId",
  "updateRowId",
  // 상위에서 height가 영향 받으므로, top을 그 다음으로 처리함
  "updateTop",
  "updateLeft",
  "updateRowsStickyLeft",
  //
  "resizeGridWrapperHeight",
  "resizeGridWrapperWidth",
  "generateScrollBarClass",
  //
  "updateScroll",
  //
  "virtualRender",
  "adjustSelection",
  "updateSelection",
  "updateSelectionByScroll"
];
function nd(o) {
  return o.mergeMain ?? o;
}
class od {
  _args;
  _wrapperElement;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = Dt;
  constructor(e) {
    const { grid: t, store: n } = e;
    this._args = e, this._wrapperElement = e.store.elements.wrapper, this._gridRangeUtil = new mn(t), n.hook.addSyncHook("contextScroll", (r) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll").forceRunTasks();
    });
  }
  _resetContext() {
    this._updateScrollInfo = { row: -1, col: -1 };
  }
  _renderTask(e = 0) {
    if (e > ed) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = Dt;
    for (const n of td)
      if (!(!t.has(n) || n === "nothing"))
        try {
          this[n].call(this);
        } catch (r) {
          console.error(n, r);
        }
    this._afterRenderCallbackList.forEach((n) => n()), this._afterRenderCallbackList.length = 0, this.checkScheduled("updateTop") && this.forceRunTasks(e + 1);
  }
  updateScrollInfo(e) {
    return Object.assign(this._updateScrollInfo, e), this.addTask("updateScroll").addTask("virtualRender");
  }
  _scrollOnRowTask() {
    if (this._updateScrollInfo.row === -1) return;
    const e = this._updateScrollInfo.row, { grid: t, contextElement: n } = this._args, r = Y(e, 0, t.getRowCount() - 1), s = t.getRow(r), i = s.top, l = s.bottom, { fixedRowHeight: u, scrollBottom: a, scrollTop: c } = t, d = c + u;
    a < l ? n.scrollTop = c + (l - a) : d > i && (n.scrollTop = i - u), this._updateScrollInfo.row = -1;
  }
  _scrollOnColTask() {
    if (this._updateScrollInfo.col === -1) return;
    const e = this._updateScrollInfo.col, { grid: t, contextElement: n } = this._args, r = Y(e, 0, t.getColCount() - 1), s = t.getColumnLeft(r), i = s + t.getColumnWidth(r), { fixedColumnWidth: l, scrollRight: u, scrollLeft: a } = t, c = a + l;
    u < i ? n.scrollLeft = a + (i - u) : c > s && (n.scrollLeft = s - l), this._updateScrollInfo.col = -1;
  }
  updateScroll() {
    this._scrollOnRowTask(), this._scrollOnColTask();
  }
  forceRunTasks(e = 0) {
    this._rafHandler !== Dt && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === Dt && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getViewportRowMap() {
    const e = /* @__PURE__ */ new Map(), { grid: t, contextElement: n, store: r } = this._args, { rowManager: s, columnManager: i } = r, { fixedRowHeight: l, fixedColumnWidth: u, activeCell: a } = t, {
      scrollTop: c,
      scrollLeft: d,
      clientHeight: h,
      clientWidth: f
    } = n, w = t.getRowCount() - 1, _ = t.getColCount() - 1, v = Math.min(t.getFreezedRowCount(), w), S = Math.min(t.getFreezedColumnCount(), _), y = t.getRowByTop(l + c + 1) ?? t.firstRow, E = t.getRowByTop(c + h) ?? t.lastRow, C = t.getColumnByLeft(u + d + 1) ?? i.firstColumn, m = t.getColumnByLeft(d + f) ?? i.lastColumn;
    if (!y || !E || !C || !m) return e;
    const p = s.getRowUnstable(Math.max(y.rowId - Bo, v)), k = s.getRowUnstable(Math.min(E.rowId + Bo, w)), x = i.getColumnUnstable(Math.max(C.columnId - Vo, S)), g = i.getColumnUnstable(Math.min(m.columnId + Vo, _));
    let b = N(0, v).asList(), R = N(0, Math.max(S, r.getThemeValue("grid.forceRenderLeftCol"))).asList();
    b = b.concat(N(p.rowId, k.rowId + 1).asList()), R = R.concat(N(x.columnId, g.columnId + 1).asList());
    const T = _ - r.getThemeValue("grid.forceRenderRightCol") + 1;
    T > g.columnId && (R = R.concat(N(T, _ + 1).asList()));
    for (const M of b) {
      const L = s.getRowUnstable(M);
      if (L.visible)
        for (const A of R)
          i.getColumnUnstable(A).visible && I(nd(L.getCellUnstable(A)));
    }
    return a && !a.isRemoved && s.getRowVisible(a.row) && i.getColumnVisible(a.col) && I(a), e;
    function I(M) {
      const L = e.get(M.row);
      L ? L.push(M) : e.set(M.row, [M]);
    }
  }
  updateFreezeRowOffsetTop() {
    const { grid: e, store: { elements: t } } = this._args;
    t.freezedRows.style.top = `${e.scrollTop}px`;
  }
  virtualRender() {
    const {
      grid: e,
      contextElement: t,
      store: {
        elements: {
          freezedRows: n,
          bodyRows: r
        },
        rowManager: s
      }
    } = this._args;
    if (t.offsetWidth === 0) return;
    const { scrollTop: i, scrollLeft: l } = e, u = e.getFreezedRowCount(), a = this._getViewportRowMap();
    c(), d(), h(), f();
    function c() {
      s.runFuncEachRow((w) => !a.has(w.rowId) && w.unmount());
    }
    function d() {
      const { headerRows: w } = e;
      s.runFuncEachRow((_) => {
        const v = a.get(_.rowId);
        v && (_.updateViewportCells(v, i, l), _.isFreezed || _.freeze(_.rowId < w), _.isMounted && _.element.parentElement === r && _.unmount(), _.isMounted || _.mount(n, "beforeend"));
      }, 0, u);
    }
    function h() {
      let w = null;
      for (const [_, v] of a.entries()) {
        if (_ < u) continue;
        const S = s.getRowUnstable(_);
        if (S.updateViewportCells(v, i, l), S.isMounted)
          if (S.element.parentElement === n)
            S.unmount();
          else {
            w = S.element;
            continue;
          }
        w ? S.mount(w, "afterend") : S.mount(r, "afterbegin"), w = S.element;
      }
    }
    function f() {
      n.style.top = `${i}px`;
    }
  }
  updateRowsStickyLeft() {
    this._args.store.rowManager.runFuncEachRow((e) => e.updateStickyStatus());
  }
  updateSelection() {
    this._args.selector.update();
  }
  updateLeft() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0, r = 0;
    for (; n < t; ) {
      const s = e.getColumn(n);
      s.left = r, s.visible && (r = s.right), ++n;
    }
  }
  updateTop() {
    const { grid: e } = this._args, t = e.getRowCount();
    let n = 0, r = 0;
    for (; n < t; ) {
      const s = e.getRow(n);
      s.top = r, s.visible && (r = s.bottom), ++n;
    }
  }
  updateColumnId() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0;
    for (; n < t; ) {
      const r = e.getColumn(n);
      r.columnId = n, ++n;
    }
  }
  updateRowId() {
    const { grid: e } = this._args, t = e.getRowCount(), n = e.getFreezedRowCount();
    let r = 0;
    for (; r < t; ) {
      const s = e.getRow(r);
      s.rowId = r, s.isFreezed && r >= n ? s.unfreeze() : !s.isFreezed && r < n && s.freeze(), ++r;
    }
  }
  adjustSelection() {
    const { grid: e, store: t } = this._args, { gridStateContext: n } = t, r = n.selectionRangeState.value;
    if (!r) return e.releaseCells();
    const s = this._gridRangeUtil.adjustRange(r.range);
    if (!s) return e.releaseCells();
    e.select(this._gridRangeUtil.extendRange(s));
  }
  updateSelectionByScroll() {
    this._args.selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this._wrapperElement.style.height = `${this._args.grid.height}px`;
  }
  resizeGridWrapperWidth() {
    this._wrapperElement.style.width = `${this._args.grid.width}px`;
  }
  generateScrollBarClass() {
    this._args.grid.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this._afterRenderCallbackList.push(e);
  }
  checkScheduled(e) {
    return this._scheduledTaskSet.has(e);
  }
}
class us extends J {
  _execute() {
    this._instance.setRowHeight(...this._args);
  }
  _getUndoContext() {
    return {
      latestHeight: this._instance.getRowHeight(this._args[0])
    };
  }
  _undo() {
    this._instance.setRowHeight(this._args[0], this._undoContext.latestHeight);
  }
  get canExecute() {
    return this._args[0] < this._instance.getRowCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getRowCount();
  }
}
const rd = {
  "col-resizing": ur,
  "row-resizing": dr
}, yn = {
  "col-resizing": Hi,
  "row-resizing": Oi
}, En = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, Go = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, sd = 500, jo = 4;
class ds extends ce {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: r,
      enabledRowResizer: s,
      disabledColumns: i,
      disabledRows: l,
      enabledColRatioResizer: u
    } = this._options, {
      elements: a,
      gridStateContext: c,
      columnManager: d
    } = t, h = new Set(i), f = new Set(l), w = (C, m, p) => {
      e.commandManager.pushCommandBlock(new Ue(C, new us(e, [m, p])));
    };
    (function() {
      const m = document.createElement("div");
      let p = null, k = !1, x = 0, g = null;
      const b = () => {
        p && (p.element.classList.remove(yn["col-resizing"]), p.element.classList.remove(yn["row-resizing"]), p = null), n.classList.remove(ur), n.classList.remove(dr), n.classList.remove(Ln), g && n.removeEventListener("mousedown", g);
      }, R = (M, L) => {
        p = M, n.classList.add(Ln), n.classList.add(rd[L]), M.element.classList.add(yn[L]);
        let A = 0, O = 0, z = 0, D = 0, F = 0;
        const W = () => M.col < e.getFreezedColumnCount() ? e.scrollLeft + D : D, Tt = () => M.row < e.getFreezedRowCount() ? e.scrollTop + D : D;
        g = (re) => {
          const ue = (/* @__PURE__ */ new Date()).getTime();
          if (c.setMode({
            mode: L,
            contextParam: {}
          }), ue - x <= sd) {
            if (L === "col-resizing") {
              const we = En(M);
              y(we, t.rowManager.getMaxCellWidth(we, we + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(M.row);
              });
            x = 0, c.setIdle();
            return;
          }
          k = !0, x = ue, L === "col-resizing" ? (m.className = Ai, F = e.getColumnWidth(En(M)), A = re.pageX, O = A - F + e.minColWidth, z = A - F + e.maxColWidth, D = e.getColumnLeft(M.col) + e.getCellWidth(M), m.style.top = "0px", m.style.width = "0px", m.style.height = `${e.height}px`, m.style.left = `${W()}px`) : (m.className = zi, F = e.getRowHeight(Go(M)), A = re.pageY, O = A - F + e.minRowHeight, z = A - F + e.maxRowHeight, D = e.getRow(M.row).top + e.getCellHeight(M), m.style.top = `${Tt()}px`, m.style.width = `${e.width}px`, m.style.height = "0px", m.style.left = "0px"), a.wrapper.appendChild(m), e.addGlobalEventListener(document, "keydown", rt), e.addGlobalEventListener(document, "mouseup", _t), e.addGlobalEventListener(document, "mousemove", pt);
        };
        const pt = (re) => {
          if (L === "col-resizing") {
            const ue = Y(re.pageX, O, z) - A;
            m.style.left = `${W() + ue}px`;
          } else {
            const ue = Y(re.pageY, O, z) - A;
            m.style.top = `${Tt() + ue}px`;
          }
        }, _t = (re) => {
          if (L === "col-resizing") {
            const be = Y(re.pageX, O, z) - A;
            if (Math.abs(be) > jo) {
              const Se = En(M), ye = F + be;
              y(Se, ye), x = 0;
            }
          } else {
            const be = Y(re.pageY, O, z) - A;
            if (Math.abs(be) > jo) {
              const Se = Go(M), ye = F + be;
              w("Resize row", Se, ye), e.setRowHeight(Se, ye), x = 0;
            }
          }
          ot(), c.setIdle();
          const ue = _(re);
          if (!ue) return;
          const we = v(re, ue);
          we !== null && R(ue, we);
        };
        function ot() {
          k = !1, m.remove(), b(), document.removeEventListener("mousemove", pt), document.removeEventListener("mouseup", _t), document.removeEventListener("keydown", rt);
        }
        const rt = (re) => {
          re.key === "Escape" && ot();
        };
        e.addGlobalEventListener(n, "mousedown", g);
      }, T = (M) => {
        if (k) return;
        const L = _(M);
        if (b(), L === null) return;
        const A = v(M, L);
        A && R(L, A);
      }, I = (M) => {
        k || b();
      };
      e.addGlobalEventListener(n, "mousemove", T), e.addGlobalEventListener(n, "mouseout", I);
    })();
    const _ = (C) => {
      const m = We("th", "tr", C.target);
      if (!m) return null;
      const [p, k] = [
        parseInt(m.getAttribute("data-row") || "-1"),
        parseInt(m.getAttribute("data-col") || "-1")
      ];
      return e.cell(p, k);
    }, v = (C, m) => {
      if (m.cellType === "body-cell") return null;
      if (u) {
        const { visibleColumnList: p } = d, k = p[p.length - 1];
        if (p.length > 0 && m.col === k.columnId) return null;
      }
      return r && Math.abs(e.getCellWidth(m) - C.offsetX) <= Mi && !h.has(m.col) ? "col-resizing" : s && Math.abs(e.getCellHeight(m) - C.offsetY) <= Li && !f.has(m.row) ? "row-resizing" : null;
    };
    function S(C, m, p) {
      const k = e.getColumnWidth(m) - p;
      e.setColumnWidth(m, k);
      const x = k - e.getColumnWidth(m);
      if (x !== 0) {
        const g = m - C;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          m - g,
          e.getColumnWidth(m - g) + x
        );
      }
    }
    function y(C, m) {
      const p = e.getColumnWidth(C);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(C, m), u && S(C, E(C), e.getColumnWidth(C) - p);
      });
    }
    function E(C) {
      let m = e.getColumn(C + 1);
      for (; !m.visible; )
        m = e.getColumn(m.columnId + 1);
      return m.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function Bh(o) {
  return new ds(o);
}
const id = 15, Wt = 120;
class hs extends ce {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: r } = t;
    let s = null, i = null, l, u = null;
    const a = (_, v) => {
      const S = [
        _.row,
        _.bottom,
        v.row,
        v.bottom
      ], y = [
        _.col,
        _.right,
        v.col,
        v.right
      ], E = {
        top: Math.min(...S),
        left: Math.min(...y),
        bottom: Math.max(...S),
        right: Math.max(...y)
      };
      gr(E, u) || (u = E, e.select(E, s), this.onChangedSelection(E));
    };
    e.addGlobalEventListener(n, "mousedown", (_) => {
      if (!Ze(_.target) || _.button !== 0 || _.target instanceof HTMLTextAreaElement || We(".button", "tr", _.target)) return;
      const v = We("td", "tr", _.target);
      if (!v)
        return;
      const S = Ne(v), y = e.activeCell;
      _.shiftKey && y ? (s = y, a(y, e.cell(S.row, S.col))) : (s = e.cell(S.row, S.col), e.selectRange(s.row, s.col, s.bottom, s.right, s), this.onChangedSelection({ top: s.row, left: s.col, bottom: s.bottom, right: s.right })), i = s, r.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function c(_, v) {
      const S = v.closest("td");
      if (!S) return;
      const y = Ne(S);
      i = e.cell(y.row, y.col), a(_, i);
    }
    function d(_, v) {
      const { offsetX: S, offsetY: y, target: E } = _;
      if (!Ze(E)) return null;
      const C = S + E.scrollLeft, m = y + E.scrollTop, p = C > e.width ? e.width : C, k = m > e.height ? e.height : m, x = e.findCellOrNull(k, p);
      x && (i = x, a(v, x));
    }
    function h(_) {
      const v = _.clientWidth + _.scrollLeft, S = _.clientHeight + _.scrollTop, y = _.scrollTop + e.headerHeight, E = _.scrollLeft + e.headerWidth, C = S > e.height ? e.height : S, m = v > e.width ? e.width : v, p = e.findCellOrNull(y, E), k = e.findCellOrNull(C, m);
      return {
        top: p?.row ?? 0,
        bottom: k?.row ?? 0,
        left: p?.col ?? 0,
        right: k?.col ?? 0
      };
    }
    function f(_, v, S, y) {
      l = window.setTimeout(() => {
        if (!s) return;
        const m = E(), p = C(), { top: k, bottom: x, left: g, right: b } = h(_), R = {
          top: _.scrollTop,
          left: _.scrollLeft,
          targetRow: S,
          targetCol: y
        };
        m && (v.startsWith("t") ? (R.top -= e.getRowHeight(k), R.targetRow = k) : (R.top += e.getRowHeight(x), R.targetRow = x)), p && (v.endsWith("l") ? (R.left -= e.getColumnWidth(g), R.targetCol = g) : (R.left += e.getColumnWidth(b), R.targetCol = b)), (m || p) && (_.scrollTo({ top: R.top, left: R.left }), a(s, e.cell(R.targetRow, R.targetCol)), f(_, v, R.targetRow, R.targetCol));
      }, id);
      function E() {
        return v.startsWith("t") ? _.scrollTop > 0 : v.startsWith("b") ? _.scrollHeight - (_.scrollTop + _.clientHeight) > 0 : !1;
      }
      function C() {
        return v.endsWith("l") ? _.scrollLeft > 0 : v.endsWith("r") ? _.scrollWidth - (_.scrollLeft + _.clientWidth) > 0 : !1;
      }
    }
    function w() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (_) => {
      s && Ze(_.target) && (_.target === n ? d(_, s) : c(s, _.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      s && (w(), s = null, i = null, r.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: _, clientY: v, clientX: S }) => {
      if (!s || !i || !Ze(_)) return;
      const { top: y, bottom: E, left: C, right: m } = _.getBoundingClientRect();
      if (y < v && E > v && C < S && m > S) return;
      f(_, `${p()}${k()}`, i.row, i.col);
      function p() {
        return v - y <= Wt ? "t" : E - v <= Wt ? "b" : "";
      }
      function k() {
        return S - C <= Wt ? "l" : m - S <= Wt ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (_) => {
      s && Ze(_.currentTarget) && w();
    }), e.onDoubleClickCell = (_) => {
      r.isIdle && (e.scrollInView(_.row, _.col), e.forceLayoutTask(), e.doEditMode(_, !1, !0));
    }, e.onColumnClick = (_) => e.selectColumn(_.col), e.onRowClick = (_) => e.selectRow(_.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function Vh() {
  return new hs();
}
class fs extends J {
  _getUndoContext() {
    const [e, t] = this._args, n = [], r = new mt(this._instance, this._instance);
    for (const s of r.getSelectionGenerator(e))
      t && this._instance.isFilteredRow(s.row) || this._instance.onClearCellCheck(s) && n.push({
        row: s.row,
        col: s.col,
        text: s.text
      });
    return { textSnapshot: n };
  }
  _undo() {
    const { textSnapshot: e } = this._undoContext;
    e.forEach(({ row: t, col: n, text: r }) => {
      this._instance.setCell(t, n, { text: r }), this._instance.onEditCellDone(this._instance.cell(t, n), !0, "", "", 0, 0);
    });
  }
  _execute() {
    const e = this._instance;
    for (const t of this._undoContext.textSnapshot)
      e.cell(t.row, t.col).clear();
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function gs(o, e) {
  const t = (g, b, R) => {
    const T = o.headerRows;
    let I = R, M = g;
    for (; I !== 0; ) {
      const L = o.cell(M, b), O = (L.mergeMain ?? L).row - 1;
      if (O < T) break;
      o.getRowVisible(O) && ++I, M = O;
    }
    return o.getRowVisible(M) ? M : g;
  }, n = (g, b, R) => {
    const T = o.getRowCount() - 1;
    let I = R, M = g;
    for (; I > 0; ) {
      const L = o.cell(M, b), O = (L.mergeMain ?? L).bottom + 1;
      if (O > T) break;
      o.getRowVisible(O) && --I, M = O;
    }
    return o.getRowVisible(M) ? M : g;
  }, r = (g, b, R) => {
    const T = o.headerColumns;
    let I = R, M = b;
    for (; I !== 0; ) {
      const L = o.cell(g, M), O = (L.mergeMain ?? L).col - 1;
      if (O < T) break;
      o.getColumnVisible(O) && ++I, M = O;
    }
    return o.getColumnVisible(M) ? M : b;
  }, s = (g, b, R) => {
    const T = o.getColCount() - 1;
    let I = R, M = b;
    for (; I !== 0; ) {
      const L = o.cell(g, M), O = (L.mergeMain ?? L).right + 1;
      if (O > T) break;
      o.getColumnVisible(O) && --I, M = O;
    }
    return o.getColumnVisible(M) ? M : b;
  }, i = () => {
    let g = o.headerColumns;
    for (; !o.getColumnVisible(g); )
      ++g;
    return g;
  }, l = () => {
    let g = o.getColCount() - 1;
    for (; !o.getColumnVisible(g); )
      --g;
    return g;
  }, u = () => {
    let g = o.headerRows;
    for (; !o.getRowVisible(g); )
      ++g;
    return g;
  }, a = () => {
    let g = o.getRowCount() - 1;
    for (; !o.getRowVisible(g); )
      --g;
    return g;
  }, c = (g) => {
    if (o.getRowCount() - 1 === g) return g;
    let R = g + 1;
    for (; !o.getRowVisible(R); )
      ++R;
    return R;
  }, d = (g) => {
    const b = o.headerRows;
    if (g === b) return g;
    let R = g - 1;
    for (; !o.getRowVisible(R); )
      ++R;
    return R;
  }, h = () => {
    const { activeCell: g } = o;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const b = a(), R = l(), T = g.mergeMain ?? g;
    if (T.right === R) {
      if (g.row === b) return;
      const I = i(), M = c(g.row);
      e ? o.selectRow(M, o.cell(M, I)) : o.selectCell(M, I), o.scrollInView(M, I);
    } else {
      const I = s(g.row, T.right, 1);
      e ? o.selectRow(g.row, o.cell(g.row, I)) : o.selectCell(g.row, I), o.scrollOnCol(I);
    }
  }, f = () => {
    const { activeCell: g } = o;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const b = u(), R = i(), T = g.mergeMain ?? g;
    if (T.col === R) {
      if (g.row === b) return;
      const I = l(), M = d(g.row);
      e ? o.selectRow(M, o.cell(M, I)) : o.selectCell(M, I), o.scrollInView(M, I);
    } else {
      const I = r(g.row, T.col, -1);
      e ? o.selectRow(g.row, o.cell(g.row, I)) : o.selectCell(g.row, I), o.scrollOnCol(I);
    }
  }, w = (g, b, R) => {
    let T = -1, I = -1;
    for (let M = b; M <= R; M++) {
      const L = o.cell(g, M), A = L.mergeMain ?? L, { rowSpan: O } = A.mergeInfo;
      O > T && (T = O, I = M);
    }
    return I;
  }, _ = (g, b, R) => {
    let T = -1;
    for (let I = b; I <= R; I++) {
      const M = o.cell(g, I), L = M.mergeMain ?? M, { bottom: A } = L;
      A > T && (T = A);
    }
    return T;
  }, v = (g, b, R) => {
    let T = 999999999;
    for (let I = b; I <= R; I++) {
      const M = o.cell(g, I), L = M.mergeMain ?? M;
      T > L.row && (T = L.row);
    }
    return T;
  }, S = (g, b, R) => {
    let T = -1, I = -1;
    for (let M = b; M <= R; M++) {
      const L = o.cell(M, g), A = L.mergeMain ?? L, { colSpan: O } = A.mergeInfo;
      O > T && (T = O, I = M);
    }
    return I;
  }, y = (g, b, R) => {
    let T = -1;
    for (let I = b; I <= R; I++) {
      const M = o.cell(I, g), L = M.mergeMain ?? M, { right: A } = L;
      A > T && (T = A);
    }
    return T;
  }, E = (g, b, R) => {
    let T = 999999999;
    for (let I = b; I <= R; I++) {
      const M = o.cell(I, g), L = M.mergeMain ?? M;
      T > L.col && (T = L.col);
    }
    return T;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: r,
    getNextXRight: s,
    getFirstActiveRow: u,
    selectNextActiveCell: h,
    selectBeforeActiveCell: f,
    selectNextSelection: (g, b, R) => {
      const T = o.getSelection(), { activeCell: I } = o;
      if (T == null || I == null) {
        console.warn("No selection warning");
        return;
      }
      const M = I.mergeMain ?? I;
      if (R && e) return;
      if (!R) {
        if (g !== 0) {
          const D = g < 0 ? t(M.row, I.col, g) : n(M.bottom, I.col, g);
          e ? o.selectRow(D, o.cell(D, I.col)) : o.selectCell(D, I.col), o.scrollOnRow(D);
        } else {
          const D = b < 0 ? r(I.row, M.col, b) : s(I.row, M.right, b);
          e ? o.selectRow(I.row, o.cell(I.row, D)) : o.selectCell(I.row, D), o.scrollOnCol(D);
        }
        return;
      }
      const { top: L, bottom: A, left: O, right: z } = T;
      if (g !== 0)
        if (g < 0)
          if (_(I.row, O, z) === A) {
            const F = w(L, O, z), W = t(L, F, g);
            o.selectRange(W, O, A, z, I), o.scrollOnRow(W);
          } else {
            const F = w(A, O, z), W = t(A, F, g);
            o.selectRange(L, O, W, z, I), o.scrollOnRow(W);
          }
        else if (v(I.row, O, z) === L) {
          const F = w(A, O, z), W = n(A, F, g);
          o.selectRange(L, O, W, z, I), o.scrollOnRow(W);
        } else {
          const F = w(L, O, z), W = n(L, F, g);
          o.selectRange(W, O, A, z, I), o.scrollOnRow(W);
        }
      else if (b < 0)
        if (y(I.col, L, A) === z) {
          const F = S(O, L, A), W = r(F, O, b);
          o.selectRange(L, W, A, z, I), o.scrollOnCol(W);
        } else {
          const F = S(z, L, A), W = r(F, z, b);
          o.selectRange(L, O, A, W, I), o.scrollOnCol(W);
        }
      else if (E(I.col, L, A) === O) {
        const F = S(z, L, A), W = s(F, z, b);
        o.selectRange(L, O, A, W, I), o.scrollOnCol(W);
      } else {
        const F = S(O, L, A), W = s(F, O, b);
        o.selectRange(L, W, A, z, I), o.scrollOnCol(W);
      }
    },
    selectMoveToLastColumn: (g) => {
      const b = o.getSelection(), { activeCell: R } = o;
      if (b == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = l();
      g && e || (g ? o.selectRange(b.top, R.col, b.bottom, T, R) : e ? o.selectRow(R.row, o.cell(R.row, T)) : o.selectCell(R.row, T), o.scrollOnCol(T));
    },
    selectMoveToFirstColumn: (g) => {
      const b = o.getSelection(), { activeCell: R } = o;
      if (b == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = i();
      g && e || (g ? o.selectRange(b.top, T, b.bottom, R.col, R) : e ? o.selectRow(R.row, o.cell(R.row, T)) : o.selectCell(R.row, T), o.scrollOnCol(T));
    },
    selectMoveToLastRow: (g) => {
      const b = o.getSelection(), { activeCell: R } = o;
      if (b == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = a();
      g && e || (g ? o.selectRange(R.row, b.left, T, b.right, R) : o.selectCell(T, R.col), o.scrollOnRow(T));
    },
    selectMoveToFirstRow: (g) => {
      const b = o.getSelection(), { activeCell: R } = o;
      if (b == null || R == null) {
        console.warn("No selection warning");
        return;
      }
      const T = u();
      g && e || (g ? o.selectRange(T, b.left, R.bottom, b.right, R) : o.selectCell(T, R.col), o.scrollOnRow(T));
    }
  };
}
class ld {
  keyMap;
  constructor() {
    this.keyMap = {};
  }
  addKeyAction(e, t) {
    this.keyMap[e] || (this.keyMap[e] = []), this.keyMap[e].push(t);
  }
  hasKeyAction(e) {
    return this.keyMap[e] && this.keyMap[e].length > 0;
  }
  startKeyAction(e) {
    if (this.hasKeyAction(e.key)) {
      if (this.onStartKeyActionHook(e), this.keyMap[e.key])
        for (const t of this.keyMap[e.key])
          try {
            if (t(e) === !1)
              break;
          } catch (n) {
            console.error(n);
            break;
          }
      this.onEndKeyActionHook(e);
    }
  }
  onStartKeyActionHook(e) {
  }
  onEndKeyActionHook(e) {
  }
}
const ad = 10;
class ms extends ce {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const r = new ld(), { gridStateContext: s } = n;
    r.onEndKeyActionHook = (p) => {
      !p.ctrlKey && !p.shiftKey && p.key === " " && C() === !1 || m(p.key) || p.preventDefault();
    };
    const i = (p = !1) => {
      if (!s.isIdle) return;
      const k = e.activeCell?.mergeMain ?? e.activeCell;
      k && (e.scrollInView(k.row, k.col), e.forceLayoutTask(), e.doEditMode(k, p));
    };
    this._keyMiddleware.forEach(([p, k]) => r.addKeyAction(p, k));
    const l = new mt(n.rowManager, n.columnManager), {
      selectNextActiveCell: u,
      selectNextSelection: a,
      selectBeforeActiveCell: c,
      selectMoveToFirstRow: d,
      selectMoveToFirstColumn: h,
      selectMoveToLastColumn: f,
      selectMoveToLastRow: w,
      getFirstActiveRow: _
    } = gs(e, this._rowSelection), v = (p) => (k) => {
      s.gridModeState.value.mode !== "edit-cell" && p(k);
    };
    e.addGlobalEventListener(t, "copy", v((p) => e.onNativeCopy(p))), e.addGlobalEventListener(t, "cut", v((p) => e.onNativeCut(p))), e.addGlobalEventListener(t, "paste", v((p) => e.onNativePaste(p))), r.addKeyAction("Tab", (p) => (p.shiftKey ? c() : u(), !0)), r.addKeyAction("ArrowRight", (p) => (p.ctrlKey ? f(p.shiftKey) : a(0, 1, p.shiftKey), !0)), r.addKeyAction("ArrowUp", (p) => (p.ctrlKey ? d(p.shiftKey) : a(-1, 0, p.shiftKey), !0)), r.addKeyAction("ArrowLeft", (p) => (p.ctrlKey ? h(p.shiftKey) : a(0, -1, p.shiftKey), !0)), r.addKeyAction("ArrowDown", (p) => (p.ctrlKey ? w(p.shiftKey) : a(1, 0, p.shiftKey), !0)), r.addKeyAction("Home", (p) => (p.ctrlKey ? (h(p.shiftKey), d(p.shiftKey)) : h(p.shiftKey), !0)), r.addKeyAction("End", (p) => (p.ctrlKey ? (f(p.shiftKey), w(p.shiftKey)) : f(p.shiftKey), !0)), r.addKeyAction("PageUp", (p) => (a(-10, 0, p.shiftKey), !0)), r.addKeyAction("PageDown", (p) => (a(ad, 0, p.shiftKey), !0)), r.addKeyAction("Enter", () => {
      const p = e.getSelection();
      return p && (p.top === e.getRowCount() - 1 ? e.selectCell(_(), p.left + 1) : a(1, 0, !1)), !0;
    }), r.addKeyAction("a", S), r.addKeyAction("A", S), r.addKeyAction("z", y), r.addKeyAction("Z", y), r.addKeyAction("y", E), r.addKeyAction("Y", E);
    function S(p) {
      return p.ctrlKey ? (e.selectAll(), p.preventDefault(), !1) : !0;
    }
    function y(p) {
      return p.ctrlKey ? (e.undo(), p.preventDefault(), !1) : !0;
    }
    function E(p) {
      return p.ctrlKey ? (e.redo(), p.preventDefault(), !1) : !0;
    }
    r.addKeyAction("F2", (p) => (i(), !0)), r.addKeyAction("Backspace", (p) => {
      const k = e.getSelection(), x = e.activeCell;
      return !k || !x || e.doEditMode(x, !0), !0;
    }), r.addKeyAction("Delete", (p) => {
      const k = e.getSelection();
      if (!k || l.getCanClearCellCount(k, (g) => e.onClearCellCheck(g)) === 0) return !0;
      const x = new fs(e, [k, !0]);
      return e.commandManager.pushCommandBlock(new Ue("Clear cells", x)), e.clearCells(k, !0), !0;
    }), r.addKeyAction(" ", (p) => {
      const k = e.getSelection();
      if (k === null) return !0;
      if (p.ctrlKey)
        return e.selectColumns(k.left, k.right), !0;
      if (p.shiftKey)
        return e.selectRows(k.top, k.bottom), !0;
      const x = [...l.getSelectionGenerator(k)];
      if (x.length === 0) return !0;
      const g = x[0], R = g.text === "true" ? "false" : "true", T = new Ue("Typing space"), I = (L, A) => {
        T.pushCommand(new ze(e, [L.row, L.col, { text: R }])), e.setText(L.row, L.col, R), A.onCheckboxClick(L.row, L.col, R === "true");
      }, M = (L, A) => {
        if (L.text === "true") return;
        const O = A.lastClickedRadio;
        O && T.pushCommand(new ze(e, [O.row, O.col, { text: "false" }])), T.pushCommand(new ze(e, [L.row, L.col, { text: "true" }])), e.setText(L.row, L.col, "true"), A.onRadioClick(L.row, L.col);
      };
      for (const L of x) {
        if (L.onCheckReadonly() || L.props.disabled) continue;
        const A = L.renderInstance;
        A instanceof _r && I(L, A), L === g && A instanceof Qr && M(L, A);
      }
      return T.commandLength > 0 && e.commandManager.pushCommandBlock(T), !0;
    }), e.addGlobalEventListener(t, "input", (p) => {
      s.gridModeState.isIdle && "data" in p && i(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (p) => {
      if (
        // editMode에서 온 입력은 pass
        !(!s.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!s.isIdle) {
          p.preventDefault();
          return;
        }
        if (!p.ctrlKey && m(p.key)) {
          i(!0);
          return;
        }
        r.startKeyAction(p);
      }
    }, !0);
    function C() {
      const p = e.getSelection();
      if (!p) return !1;
      for (const k of l.getSelectionGenerator(p))
        if (k.renderType === "checkbox" || k.renderType === "radio") return !0;
      return !1;
    }
    function m(p) {
      return p === "Process" || cd.test(p);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const cd = /^[\w]$/;
function Gh(o) {
  return new ms(o ?? {});
}
class ud extends ce {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let r = null;
    n.addEventListener("mousedown", (s) => {
      if (s.button !== 0) return;
      const i = We("td", "tr", s.target);
      if (!i || i?.tagName === "TH") return;
      const l = Ne(i);
      r = e.cell(l.row, l.col), e.selectRow(r.row, r);
    }), e.addGlobalEventListener(document, "mouseup", () => r = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function jh() {
  return new ud();
}
const dd = /^\d+px$/;
function hd(o) {
  for (const e of o)
    if (typeof e == "string") {
      if (dd.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function fd(o) {
  let e = 0;
  for (const t of o)
    typeof t == "string" && (e += ps(t));
  return e;
}
function ps(o) {
  return parseInt(o.substring(0, o.length - 2), 10);
}
class gd extends ce {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), hd(e), this._fixedColumnWidth = fd(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: r } = n, s = () => {
      const { clientWidth: u } = t;
      if (u === 0) return;
      const a = e.getColCount() - 1, c = u - a - this._fixedColumnWidth, d = N(e.getColCount()).reduce((w, _) => {
        if (!e.getColumnVisible(_)) return w;
        const v = this._columnWeightList[_];
        return v === void 0 ? w + 1 : typeof v == "number" ? w + v : w;
      }, 0);
      let h = 0;
      N(a).forEach((w) => {
        if (!e.getColumnVisible(w)) return;
        const _ = this._columnWeightList[w] ?? 1;
        if (typeof _ == "string" && _.endsWith("px")) {
          const v = ps(_);
          e.setColumnWidth(w, v);
        } else if (typeof _ == "number") {
          const v = _ / d;
          e.setColumnWidth(w, Math.floor(v * c));
        }
        h += e.getColumnWidth(w);
      });
      const f = l();
      f && e.setColumnWidth(f, c - h + this._fixedColumnWidth);
    }, i = () => {
      try {
        r.pauseEmit("columnChanged"), s();
      } catch (u) {
        console.error(u);
      } finally {
        r.resumeEmit("columnChanged");
      }
    };
    r.addHook("resize", i), r.addHook("columnChanged", i), this.addRollbackTask(() => {
      r.removeHook("resize", i), r.removeHook("columnChanged", i);
    }), i();
    function l() {
      for (let u = e.getColCount() - 1; u >= 0; u--)
        if (e.getColumnVisible(u))
          return u;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function Uh(o) {
  return new gd(o ?? { columnWeight: [] });
}
class _s extends ce {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: r } = t.elements, s = {
      latestDragOverCell: null
    }, i = () => {
      r.classList.remove("is-dragging"), l();
    }, l = () => {
      s.latestDragOverCell && (s.latestDragOverCell.isDragOver = !1);
    }, u = (c) => {
      l(), s.latestDragOverCell = c, c.isDragOver = !0;
    }, a = () => r.classList.contains("is-dragging");
    r.addEventListener("mouseup", () => a() && i()), r.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging");
    }), r.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !r.classList.contains("is-dragging")) return;
      const d = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!d || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        d.dropDisabled !== !1 && // disabled
        (d.props.disabled === !0 || // readonly
        d.onCheckReadonly() === !0 || d.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(d, c) === !0 && (d !== s.latestDragOverCell && u(d), c.preventDefault());
    }), r.addEventListener("dragleave", (c) => {
      c.target === r ? i() : l();
    }), r.addEventListener("drop", (c) => {
      try {
        s.latestDragOverCell && e.onDropOnCell(s.latestDragOverCell.row, s.latestDragOverCell.col, c);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function Kh() {
  return new _s();
}
const Uo = 10;
class md extends ce {
  _mountTask({ grid: e, gridStore: t }) {
    const { hook: n } = t, { table: r } = t.elements, s = {
      cell: null
    }, i = () => {
      s.cell = null, r.draggable = !1;
    }, l = (h) => {
      r.draggable = !0, s.cell = h;
    };
    n.addHook("contextMouseDown", c), n.addHook("contextMouseUp", u), n.addHook("contextDragStart", d), n.addHook("contextDragEnd", a), this.addRollbackTask(() => {
      n.removeHook("contextMouseDown", c), n.removeHook("contextMouseUp", u), n.removeHook("contextDragStart", d), n.removeHook("contextDragEnd", a);
    });
    function u(h) {
      i();
    }
    function a(h) {
      i();
    }
    function c(h) {
      if (h.button !== 0) return;
      const f = We("td", "tr", h.target);
      if (!f) {
        i();
        return;
      }
      const w = Ne(f), _ = e.cell(w.row, w.col);
      h.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(w.row, w.col), _.props.draggable === !0 && _.props.object ? l(_) : i();
    }
    function d(h) {
      if (!h.dataTransfer || !s.cell || !e.onDragStartCell(s.cell, h)) {
        h.preventDefault();
        return;
      }
      h.dataTransfer.setDragImage(s.cell.element, Uo, Uo);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function $h() {
  return new md();
}
const Ko = 10;
class qh extends ce {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: r = !0,
      enabledColumn: s = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: l, rowManager: u, gridStateContext: a } = n;
    let c = null, d = null;
    i.addEventListener("mousedown", h), i.addEventListener("dragstart", f), i.addEventListener("dragover", w), i.addEventListener("drop", _), i.addEventListener("dragleave", v), i.addEventListener("dragend", S), i.addEventListener("mouseup", S), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", h), i.removeEventListener("dragstart", f), i.removeEventListener("dragover", w), i.removeEventListener("drop", _), i.removeEventListener("dragleave", v), i.removeEventListener("dragend", S), i.removeEventListener("mouseup", S);
    });
    function h(m) {
      if (m.button !== 0 || t.classList.contains("is-resizing")) return;
      const p = We("th", "tr", m.target);
      if (!p) return;
      const k = Ne(p), x = e.cell(k.row, k.col);
      if (x.cellType === "body-cell" || T(x)) return;
      y({
        direction: x.cellType,
        source: g(),
        cell: x
      });
      function g() {
        const { row: I, col: M } = x;
        return x.cellType === "row-header" ? [
          u.getStartOfRowId(I),
          u.getEndOfRowId(I)
        ] : [
          u.getStartOfColumnId(M),
          u.getEndOfColumnId(M)
        ];
      }
      function b(I) {
        return !r || I.row < e.getFreezedRowCount();
      }
      function R(I) {
        return !s || I.col < e.getFreezedColumnCount();
      }
      function T(I) {
        return I.cellType === "row-header" && b(I) || I.cellType === "col-header" && R(I);
      }
    }
    function f(m) {
      if (!m.dataTransfer || !c) {
        m.preventDefault();
        return;
      }
      a.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), m.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), m.dataTransfer.setDragImage(c.cell.element, Ko, Ko);
    }
    function w(m) {
      if (!c || !m.dataTransfer || !m.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const p = e.findCellOrNull(m.offsetY, m.offsetX);
      if (!p || !p.isHeaderCell || c.direction === "row-header" && k(p, c) || c.direction === "col-header" && x(p, c)) {
        E(), d = p;
        return;
      }
      p !== d && C(p, c.direction), m.preventDefault();
      function k(g, b) {
        return g.row === b.cell.row || g.row < e.getFreezedRowCount() || l.checkConflictingInRows(g.row, g.row);
      }
      function x(g, b) {
        return g.col === b.cell.col || g.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(g.col, g.col);
      }
    }
    function _() {
      const m = c, p = d;
      !m || !p || (E(), m.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(m.source, [p.row, p.row]);
      }), e.forceLayoutTask(), e.selectRow(m.cell.row)), m.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(m.source, [p.col, p.col]);
      }), e.forceLayoutTask(), e.selectColumn(m.cell.col)));
    }
    function v() {
      E(), d = null;
    }
    function S() {
      i.classList.remove("is-dragging"), E(), c = null, i.draggable = !1, d = null, a.setIdle();
    }
    function y({ direction: m, source: p, cell: k }) {
      i.draggable = !0, c = {
        direction: m,
        source: p,
        cell: k
      };
    }
    function E() {
      if (!d || !c) return;
      const { direction: m } = c, p = m === "row-header" ? e.headerColumns : e.headerRows;
      for (let k = 0; k < p; k++)
        m === "row-header" ? e.cell(d.row, k).element.classList.remove("is-dragging") : e.cell(k, d.col).element.classList.remove("is-dragging");
    }
    function C(m, p) {
      E(), d = m;
      const k = p === "row-header" ? e.headerColumns : e.headerRows;
      for (let x = 0; x < k; x++)
        p === "row-header" ? e.cell(m.row, x).element.classList.add("is-dragging") : e.cell(x, m.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const ws = 8, pd = {
  normal: Ni,
  error: Wi
}, $o = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || il(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      ll({
        mainAxis: ws,
        crossAxis: n ?? 0
      }),
      al(),
      cl({ padding: 5 })
    ]
  }).then(({ x: r, y: s, placement: i }) => {
    e.style.left = `${r}px`, e.style.top = `${s}px`, e.dataset.placement = i;
  });
}, _d = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", wd = (o) => o.cellInfo.memo ?? "";
class Cd extends ce {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Fi;
  }
  _tooltipElement;
  _memoElement;
  context = null;
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: r
    } = this.options, {
      hasMemo: s,
      memoIntent: i = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? _d(e), a = this.options.getMemoText?.(e) ?? wd(e), c = () => {
      this._tooltipElement.textContent = u, ct("popover").appendChild(this._tooltipElement), $o(e.element, this._tooltipElement, "bottom");
    }, d = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${Di} ${pd[i]}`, ct("popover").appendChild(this._memoElement), $o(e.element, this._memoElement, "right-start", ws);
    }, h = !(s && r) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, f = s && a ? window.setTimeout(() => d(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: h,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(h), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: r } = t, s = () => this.context?.cleanup(), i = (l) => {
      if (!Ze(l.target)) return;
      const u = We("td,th", "tr", l.target);
      if (!u) {
        s();
        return;
      }
      const a = Ne(u), c = e.cell(a.row, a.col);
      this.context?.targetCell !== c && (s(), this.context = this.createContext(c));
    };
    r.gridModeState.addSubscription((l, { mode: u }) => {
      n.removeEventListener("mousemove", i), s(), (u === "idle" || u === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "mouseleave", s), e.addGlobalEventListener(n, "scroll", s), this.addRollbackTask(() => {
      s(), n.removeEventListener("mouseleave", s), n.removeEventListener("scroll", s);
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const qo = 10;
class Yh extends ce {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, gridStateContext: s } = n, { table: i } = n.elements, l = document.createElement("div");
    l.className = Pi;
    let u = null, a = -1;
    i.addEventListener("mousedown", c), i.addEventListener("dragstart", d), i.addEventListener("dragover", h), i.addEventListener("drop", f), i.addEventListener("dragleave", w), i.addEventListener("dragend", _), i.addEventListener("mouseup", _), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", c), i.removeEventListener("dragstart", d), i.removeEventListener("dragover", h), i.removeEventListener("drop", f), i.removeEventListener("dragleave", w), i.removeEventListener("dragend", _), i.removeEventListener("mouseup", _);
    });
    function c(E) {
      if (E.button !== 0 || t.classList.contains("is-resizing")) return;
      const C = We("th", "tr", E.target);
      if (!C) return;
      const m = Ne(C), p = e.cell(m.row, m.col);
      if (k(p)) return;
      v({
        source: [
          r.getStartOfRowId(p.row),
          r.getEndOfRowId(p.row)
        ],
        cell: p
      });
      function k(x) {
        return x.cellType !== "row-header" || x.row < e.getFreezedRowCount() || x.row < e.headerRows;
      }
    }
    function d(E) {
      const { offsetY: C, offsetX: m } = E;
      if (e.findCellOrNull(C, m)?.cellType === "row-header") {
        if (!E.dataTransfer || !u) {
          E.preventDefault();
          return;
        }
        s.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), E.dataTransfer.effectAllowed = "move", E.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), E.dataTransfer.setData("ir-grid/move-rows-dragging", ""), E.dataTransfer.setDragImage(u.cell.element, qo, qo);
      }
    }
    function h(E) {
      const { dataTransfer: C, offsetY: m, offsetX: p } = E;
      if (!u || !C || !C.types.includes("ir-grid/move-rows-dragging")) return;
      const k = e.findCellOrNull(m, p);
      if (!k) return;
      const x = g(k.row);
      if (k.cellType !== "row-header" || b(x, u)) {
        S(), a = -1;
        return;
      }
      x !== a && y(x, k.col), E.preventDefault();
      function g(R) {
        const T = e.getRow(R), I = m - T.top < T.height / 2;
        return T.rowId + (I ? 0 : 1);
      }
      function b(R, T) {
        const [I, M] = T.source;
        return R >= I && R <= M || R < e.headerRows;
      }
    }
    function f() {
      const E = u, C = a;
      !E || C < 0 || (S(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(E.source, C);
      }), e.forceLayoutTask(), e.selectRow(E.cell.row));
    }
    function w() {
      S(), a = -1;
    }
    function _() {
      i.classList.remove("is-dragging"), S(), u = null, i.draggable = !1, a = -1, s.setIdle();
    }
    function v({ source: E, cell: C }) {
      i.draggable = !0, u = {
        source: E,
        cell: C
      };
    }
    function S() {
      a < 0 || !u || l.remove();
    }
    function y(E, C) {
      S(), a = E;
      const m = Math.min(a, r.length - 1), p = e.getRow(m), k = p.getCell(C).element.getBoundingClientRect(), x = {
        top: k.top,
        height: 16
      }, g = x.height / 2;
      E === r.length && (x.top += p.height, x.height = g + 1), l.style.top = `${x.top - g}px`, l.style.left = `${k.left}px`, l.style.width = `${e.headerWidth}px`, l.style.height = `${x.height}px`, ct("popover").appendChild(l);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const Yo = 10;
class Xh extends ce {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s, gridStateContext: i } = n, { table: l } = n.elements, u = document.createElement("div");
    u.className = Bi;
    let a = null, c = -1;
    l.addEventListener("mousedown", d), l.addEventListener("dragstart", h), l.addEventListener("dragover", f), l.addEventListener("drop", w), l.addEventListener("dragleave", _), l.addEventListener("dragend", v), l.addEventListener("mouseup", v), this.addRollbackTask(() => {
      l.removeEventListener("mousedown", d), l.removeEventListener("dragstart", h), l.removeEventListener("dragover", f), l.removeEventListener("drop", w), l.removeEventListener("dragleave", _), l.removeEventListener("dragend", v), l.removeEventListener("mouseup", v);
    });
    function d(C) {
      if (C.button !== 0 || t.classList.contains("is-resizing")) return;
      const m = We("th", "tr", C.target);
      if (!m) return;
      const p = Ne(m), k = e.cell(p.row, p.col);
      if (x(k)) return;
      S({
        source: [
          r.getStartOfColumnId(k.col),
          r.getEndOfColumnId(k.col)
        ],
        cell: k
      });
      function x(g) {
        return g.cellType !== "col-header" || g.col < e.getFreezedColumnCount() || g.col < e.headerColumns;
      }
    }
    function h(C) {
      const { offsetY: m, offsetX: p } = C;
      if (e.findCellOrNull(m, p)?.cellType === "col-header") {
        if (!C.dataTransfer || !a) {
          C.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), C.dataTransfer.setData("ir-grid/move-columns-dragging", ""), C.dataTransfer.setDragImage(a.cell.element, Yo, Yo);
      }
    }
    function f(C) {
      const { dataTransfer: m, offsetY: p, offsetX: k } = C;
      if (!a || !m || !m.types.includes("ir-grid/move-columns-dragging")) return;
      const x = e.findCellOrNull(p, k);
      if (!x) return;
      const g = b(x.col);
      if (x.cellType !== "col-header" || R(g, a)) {
        y(), c = -1;
        return;
      }
      g !== c && E(x.row, g), C.preventDefault();
      function b(T) {
        const I = e.getColumn(T), M = k - I.left < I.width / 2;
        return I.columnId + (M ? 0 : 1);
      }
      function R(T, I) {
        const [M, L] = I.source;
        return T >= M && T <= L || T < e.headerColumns;
      }
    }
    function w() {
      const C = a, m = c;
      !C || m < 0 || (y(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(C.source, m);
      }), e.forceLayoutTask(), e.selectColumn(C.cell.col));
    }
    function _() {
      y(), c = -1;
    }
    function v() {
      l.classList.remove("is-dragging"), y(), a = null, l.draggable = !1, c = -1, i.setIdle();
    }
    function S({ source: C, cell: m }) {
      l.draggable = !0, a = {
        source: C,
        cell: m
      };
    }
    function y() {
      c < 0 || !a || u.remove();
    }
    function E(C, m) {
      y(), c = m;
      const p = Math.min(c, s.length - 1), k = e.getColumn(p), x = e.cell(C, p);
      if (!x.isConnected) return;
      const g = x.element.getBoundingClientRect(), b = {
        left: g.left,
        width: 12
      }, R = b.width / 2;
      m === s.length && (b.left += k.width, b.width = R + 1), u.style.top = `${g.top}px`, u.style.left = `${b.left - R}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${b.width}px`, ct("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const vd = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
], Rd = uo(B.minWidth), xd = uo(B.minHeight);
function bd() {
  const o = Qe("div", ji), e = [];
  for (const n of vd)
    if (n.type === "divider") {
      const r = Qe("div", Ui);
      o.append(r);
    } else {
      const r = Qe("button", Ki), s = Un(`ir-icon--chevron-${n.value}`);
      r.dataset.type = n.type, r.append(s), r.onclick = () => t.onButtonClick(n.value), r.setAttribute("data-ir-tooltip", ""), r.setAttribute("data-ir-tooltip-text", oe.t("gridOverflowPanel." + n.value)), o.append(r), e.push(r);
    }
  const t = {
    buttonGroup: o,
    visibleButtonGroup(n, r) {
      o.style.display = n || r ? "" : "none";
      for (const s of e) {
        const l = s.dataset.type === "row" ? n : r;
        s.style.display = l ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class Zh extends ce {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s } = n, i = Qe("div", Vi), l = Qe("div", Gi), u = bd(), a = fl({
      containerElement: u.buttonGroup,
      placement: "right",
      offset: 8
    });
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const c = {
      up() {
        const v = h(l.scrollTop);
        if (!v) return;
        const S = v.rowId - 1, y = S < 0 ? 0 : e.getRow(S).top;
        l.scrollTop = y;
      },
      down() {
        const v = h(l.scrollTop);
        v && (l.scrollTop = v.bottom);
      },
      left() {
        const v = f(l.scrollLeft);
        if (!v) return;
        const S = v.columnId - 1, y = S < 0 ? 0 : e.getColumn(S).left;
        l.scrollLeft = y;
      },
      right() {
        const v = f(l.scrollLeft);
        v && (l.scrollLeft = v.right);
      },
      "double-top"() {
        l.scrollTo({ top: 0 }), e.scrollOnRow(0);
      },
      "double-bottom"() {
        l.scrollTo({ top: l.scrollHeight }), e.scrollOnRow(e.getRowCount() - 1);
      },
      "double-left"() {
        l.scrollTo({ left: 0 }), e.scrollOnCol(0);
      },
      "double-right"() {
        l.scrollTo({ left: l.scrollWidth }), e.scrollOnCol(e.getColCount() - 1);
      }
    };
    u.onButtonClick = (v) => c[v](), t.insertAdjacentElement("beforebegin", i), l.appendChild(t), i.append(l), i.append(u.buttonGroup), e.afterRender(() => {
      w(r.freezedRowsHeight, r.freezedRows), _(s.fixedColumnsWidth, s.freezedColumns);
    }), n.hook.addHook("resize", d), n.hook.addSyncHook("changedFreezedRowHeight", w), n.hook.addSyncHook("changedFreezedColumnWidth", _), this.addRollbackTask(() => {
      a.destroy(), n.hook.removeHook("resize", d), n.hook.removeSyncHook("changedFreezedRowHeight", w), n.hook.removeSyncHook("changedFreezedColumnWidth", _);
    }), this.addRollbackTask(() => {
      const v = i.nextElementSibling;
      v ? v.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function d() {
      const v = parseInt(t.style.getPropertyValue(Rd)), S = parseInt(t.style.getPropertyValue(xd));
      u.visibleButtonGroup(
        S >= l.clientHeight,
        v >= l.clientWidth
      );
    }
    function h(v) {
      let S = 0, y = r.visibleRowList.length - 1;
      for (; S <= y; ) {
        const E = S + Math.floor((y - S) / 2), C = r.visibleRowList[E];
        if (v >= C.top && v < C.bottom)
          return C;
        v < C.top ? y = E - 1 : S = E + 1;
      }
      return null;
    }
    function f(v) {
      let S = 0, y = s.visibleColumnList.length - 1;
      for (; S <= y; ) {
        const E = S + Math.floor((y - S) / 2), C = s.visibleColumnList[E];
        if (v >= C.left && v < C.right)
          return C;
        v < C.left ? y = E - 1 : S = E + 1;
      }
      return null;
    }
    function w(v, S) {
      const y = S, E = v + (y < e.getRowCount() ? r.getRowHeight(y) : 0) + (C() ? po : 0);
      Ae(t, {
        [B.minHeight]: `${E}px`
      }), d();
      function C() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-horizontal-scroll");
      }
    }
    function _(v, S) {
      const y = S, E = v + (y < e.getColCount() ? e.getColumnWidth(y) : 0) + (C() ? po : 0);
      Ae(t, {
        [B.minWidth]: `${E}px`
      }), d();
      function C() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
class Jh extends ce {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      onRowClick: r,
      freezeLastColumn: s,
      multipleSelect: i = !1,
      selectOnRightClick: l = !1
    } = this._args, { hook: u, columnManager: a } = n, { visibleColumnList: c } = a, d = this.setPluginAPI(new Sd(e, i)), h = /* @__PURE__ */ new Set([0]);
    if (l && h.add(2), t.classList.add(_o), s) {
      t.classList.add(wo);
      const E = n.getThemeValue("grid.forceRenderRightCol");
      n.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), u.addSyncHook("cellLayout", w), u.addSyncHook("postRenderCell", _), this.addRollbackTask(() => {
        n.setGridConfig({ "grid.forceRenderRightCol": E }), u.removeSyncHook("cellLayout", w), u.removeSyncHook("postRenderCell", _);
      });
    }
    const f = (E) => e.onNativeCopy(E);
    u.addBeginHook("contextMouseDown", v), u.addHook("contextMouseDown", S), u.addHook("renderRowElement", y), e.addGlobalEventListener(t, "copy", f), this.addRollbackTask(() => {
      d.clearAllSelections(), t.classList.remove(_o, wo), u.removeHook("contextMouseDown", v), u.removeHook("contextMouseDown", S), u.removeHook("renderRowElement", y), t.removeEventListener("copy", f);
    });
    function w(E, C, m) {
      // 가로 scroll이 안생겼다면 리턴
      e.width <= t.clientWidth || // 마지막 열이 아니면 리턴
      C < c.length - 1 || (m.left = e.scrollRight - m.width);
    }
    function _(E) {
      E.isHeaderCell || E.col < c.length - 1 || (E.element.style.zIndex = B.zLevel3);
    }
    function v(E) {
      E.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function S(E) {
      if (!h.has(E.button) || E.target instanceof HTMLButtonElement) return;
      const C = E.target.closest("td");
      if (!C) return;
      const m = Ne(C), p = e.cell(m.row, m.col);
      p.cellType === "body-cell" && (d.runMouseDownTask(p, E), r?.(e, p.row, E));
    }
    function y(E, C) {
      C.classList.toggle($i, d.isRowSelected(E.rowId, !0));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class Sd {
  constructor(e, t) {
    this._grid = e, this._multipleSelect = t, this.setMultipleSelect(t);
  }
  _selectedRowIdSet = /* @__PURE__ */ new Set();
  _mouseDownTasks = [];
  get multipleSelect() {
    return this._multipleSelect;
  }
  addSelectedRow(e) {
    this.addSelectedRows([e]);
  }
  addSelectedRows(e) {
    e.forEach((t) => {
      this._selectedRowIdSet.add(t);
      const n = this._grid.getRow(t);
      n.isMounted && n.render();
    });
  }
  removeSelectedRow(e) {
    this.removeSelectedRows([e]);
  }
  removeSelectedRows(e) {
    e.forEach((t) => {
      this._selectedRowIdSet.delete(t);
      const n = this._grid.getRow(t);
      n.isMounted && n.render();
    });
  }
  clearSelectedRows() {
    this.removeSelectedRows([...this._selectedRowIdSet]);
  }
  clearAllSelections() {
    this._grid.releaseCells(), this.clearSelectedRows();
  }
  isRowSelected(e, t = !1) {
    if (this._selectedRowIdSet.has(e)) return !0;
    if (t) return !1;
    const n = this._grid.getSelection();
    return n !== null && e >= n.top && e <= n.bottom;
  }
  getSelectedRows() {
    const e = this._grid.getSelection();
    if (!e) return [...this._selectedRowIdSet];
    const t = new Set(this._selectedRowIdSet);
    for (let n = e.top; n <= e.bottom; n++)
      t.add(n);
    return [...t];
  }
  setMultipleSelect(e) {
    this._multipleSelect = e, e || this.selectRowWithActiveCell(), this._mouseDownTasks = [], e && this._mouseDownTasks.push(
      this._mousedownWithCtrlTask,
      this._mousedownWithShiftTask
    ), this._mouseDownTasks.push(this._mousedownSingleCellTask);
  }
  runMouseDownTask(e, t) {
    for (const n of this._mouseDownTasks)
      if (n.call(this, e, t)) break;
  }
  _mousedownWithCtrlTask(e, t) {
    if (!t.ctrlKey) return;
    const n = this._grid.getSelection();
    return n && (this.addSelectedRows(N(n.top, n.bottom + 1).asList()), this._grid.releaseCells()), this.isRowSelected(e.row) ? this.removeSelectedRow(e.row) : this._grid.selectRow(e.row, e), !0;
  }
  _mousedownWithShiftTask(e, t) {
    if (!(!t.shiftKey || !this._grid.activeCell))
      return this.clearSelectedRows(), this._grid.selectRows(
        Math.min(this._grid.activeCell.row, e.row),
        Math.max(this._grid.activeCell.row, e.row),
        this._grid.activeCell
      ), !0;
  }
  _mousedownSingleCellTask(e, t) {
    this.isRowSelected(e.row) && t.button === 2 || (this.clearAllSelections(), this._grid.selectRow(e.row, e));
  }
  /** activeCell이 있는 Row만 선택하는 함수 (active가 없고, selectedCls만 있는 경우 그 중 첫번째 행 선택) */
  selectRowWithActiveCell() {
    if (this.getSelectedRows().length !== 0) {
      if (this._grid.activeCell)
        this._grid.selectRow(this._grid.activeCell.row, this._grid.activeCell);
      else {
        const e = [...this._selectedRowIdSet][0];
        e && this._grid.selectRow(e);
      }
      this.clearSelectedRows();
    }
  }
}
var Gt = { exports: {} }, yd = Gt.exports, Xo;
function Ed() {
  return Xo || (Xo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(yd, function() {
      return function(t, n, r) {
        n.prototype.isBetween = function(s, i, l, u) {
          var a = r(s), c = r(i), d = (u = u || "()")[0] === "(", h = u[1] === ")";
          return (d ? this.isAfter(a, l) : !this.isBefore(a, l)) && (h ? this.isBefore(c, l) : !this.isAfter(c, l)) || (d ? this.isBefore(a, l) : !this.isAfter(a, l)) && (h ? this.isAfter(c, l) : !this.isBefore(c, l));
        };
      };
    });
  }(Gt)), Gt.exports;
}
var kd = Ed();
const Id = /* @__PURE__ */ $n(kd);
var jt = { exports: {} }, Td = jt.exports, Zo;
function Md() {
  return Zo || (Zo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Td, function() {
      return function(t, n) {
        n.prototype.isSameOrAfter = function(r, s) {
          return this.isSame(r, s) || this.isAfter(r, s);
        };
      };
    });
  }(jt)), jt.exports;
}
var Ld = Md();
const Hd = /* @__PURE__ */ $n(Ld);
var Ut = { exports: {} }, Od = Ut.exports, Jo;
function Ad() {
  return Jo || (Jo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Od, function() {
      return function(t, n) {
        n.prototype.isSameOrBefore = function(r, s) {
          return this.isSame(r, s) || this.isBefore(r, s);
        };
      };
    });
  }(Ut)), Ut.exports;
}
var zd = Ad();
const Fd = /* @__PURE__ */ $n(zd);
ke.extend(Id);
ke.extend(Hd);
ke.extend(Fd);
function Dd(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return Wd;
  const { metaInfo: t } = o, { operand: n, operator: r } = e, s = () => {
    const a = n.map((d) => parseFloat(d)), c = new Set(a);
    switch (r) {
      case "equals":
        return Xe((d) => c.has(d));
      case "not-equals":
        return Xe((d) => !c.has(d));
      case "less-than":
        return Xe((d) => a.some((h) => d < h));
      case "less-than-or-equal":
        return Xe((d) => a.some((h) => d <= h));
      case "greater-than":
        return Xe((d) => a.some((h) => d > h));
      case "greater-than-or-equal":
        return Xe((d) => a.some((h) => d >= h));
      case "in-range":
        return Xe((d) => a[0] <= d && d <= a[1]);
      case "blank":
        return kn;
      default:
        return Ct;
    }
  }, i = () => {
    const { format: a } = t;
    if (!a) throw new Error("format is required for date type column");
    const c = n.map((h) => ke(h, a));
    switch (r) {
      case "equals":
        return d((h) => c.some((f) => h.isSame(f)));
      case "not-equals":
        return d((h) => c.every((f) => !h.isSame(f)));
      case "greater-than":
        return d((h) => c.some((f) => h.isAfter(f)));
      case "greater-than-or-equal":
        return d((h) => c.some((f) => h.isSameOrAfter(f)));
      case "less-than":
        return d((h) => c.some((f) => h.isBefore(f)));
      case "less-than-or-equal":
        return d((h) => c.some((f) => h.isSameOrBefore(f)));
      case "in-range":
        return d((h) => h.isBetween(c[0], c[1], null, "[]"));
      case "blank":
        return kn;
      default:
        return Ct;
    }
    function d(h) {
      return (f) => {
        const w = ke(f, a);
        return w.isValid() ? h(w) : !1;
      };
    }
  }, l = () => {
    const a = new Set(n);
    switch (r) {
      case "equals":
        return (c) => a.has(c);
      case "not-equals":
        return (c) => !a.has(c);
      case "contains":
        return (c) => n.some((d) => c.includes(d));
      case "not-contains":
        return (c) => !n.some((d) => c.includes(d));
      case "starts-with":
        return (c) => n.some((d) => c.startsWith(d));
      case "ends-with":
        return (c) => n.some((d) => c.endsWith(d));
      case "blank":
        return kn;
      default:
        return Ct;
    }
  }, u = () => {
    const a = new Set(n.map((c) => c === "true"));
    switch (r) {
      case "equals":
        return Qo((c) => a.has(c));
      case "not-equals":
        return Qo((c) => !a.has(c));
      default:
        return Ct;
    }
  };
  switch (t.textType) {
    case "number":
      return s();
    case "date":
      return i();
    case "string":
      return l();
    case "checked":
      return u();
    default:
      return Ct;
  }
}
function kn(o) {
  return o === "";
}
function Ct() {
  return !1;
}
function Wd() {
  return !0;
}
const Nd = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Xe(o) {
  return (e) => Nd.test(e) ? o(parseFloat(e)) : !1;
}
function Qo(o) {
  return (e) => o(e === "true");
}
const Pd = (o) => {
  let e = null, t = !0, n = Object.freeze(o.getSnapshotRows());
  return {
    saveSnapshot: r,
    get enabledColumnClick() {
      return t;
    },
    set enabledColumnClick(s) {
      t = s;
    },
    clearSortOrder() {
      e && (e.cellInfo = { sortOrder: void 0 }), e = null;
    },
    getSnapshotRows() {
      return n;
    },
    /**
     *
     * @deprecated
     */
    clearNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    removeNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    setNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    compareTo(s, i) {
      return co(s.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${o.uuid}`), o.onColumnClick = (s) => {
        t && this.toggleSortColumn(s);
      };
    },
    sortColumn(s, i) {
      o.sort((l, u) => this.compareTo(l.getCell(s), u.getCell(s)), i);
    },
    toggleSortColumn(s) {
      if (o.className.indexOf(Ln) >= 0)
        return;
      if (s.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      e || r();
      const i = s.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== s && this.clearSortOrder(), e = s, s.cellInfo = { sortOrder: i }, this.sortColumn(s.col, i);
    }
  };
  function r() {
    n = Object.freeze(o.getSnapshotRows());
  }
};
var Bd = Object.defineProperty, Vd = Object.getOwnPropertyDescriptor, ho = (o, e, t, n) => {
  for (var r = Vd(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && Bd(e, t, r), r;
};
const In = Object.freeze({
  textType: "string",
  enabled: !0
});
class pn {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = Pd(e), this._defaultDateFormat = oe.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, r]) => this._filterMap.set(parseInt(n, 10), { metaInfo: r }));
  }
  _columnSortManager;
  _filterMap = /* @__PURE__ */ new Map();
  _defaultDateFormat;
  clearFilters() {
    for (const e of this._filterMap.values())
      delete e.filterOption;
  }
  clearSortOrder() {
    this.columnSortManager.clearSortOrder();
  }
  setCheckAll(e, t) {
    const n = this._grid, r = `${t}`, s = n.getSnapshotRows().slice(n.headerRows).filter((i) => !i.filtered && `${i.getCell(e).text === "true"}` !== r);
    s.length !== 0 && n.commandManager.doRecording(`check all to ${t}`, () => {
      for (const i of s)
        n.setCell(i.rowId, e, { text: r });
    });
  }
  get columnSortManager() {
    return this._columnSortManager;
  }
  get dropdownId() {
    return `rowFilterDropdown__${this._grid.uuid}`;
  }
  getColumnMetaInfo(e) {
    return this._filterMap.get(e)?.metaInfo ?? In;
  }
  setColumnMetaInfo(e, t) {
    this._filterMap.set(e, {
      metaInfo: t,
      filterOption: this._filterMap.get(e)?.filterOption
    });
  }
  getFilterOptionByCol(e) {
    return this._filterMap.get(e)?.filterOption ?? null;
  }
  getTextListForCol(e) {
    const t = this._getMatcher(e);
    return Array.from(
      new Set(
        this._grid.getSnapshotRows().slice(this._grid.headerRows).map((n) => n.getCell(e).text)
      ),
      (n) => ({ text: n, checked: t(n) })
    );
  }
  get isFiltered() {
    return [...this._filterMap.values()].filter((e) => e.filterOption).length > 0;
  }
  removeColFilter(e) {
    const t = this._filterMap.get(e);
    t && delete t.filterOption;
  }
  setColFilter(e) {
    const t = this._filterMap.get(e.column);
    t ? t.filterOption = e : this._filterMap.set(e.column, {
      metaInfo: In,
      filterOption: e
    });
  }
  setSortOrder(e, t, n) {
    const r = this._grid.cell(e, t);
    r.props = { sortOrder: n === "ASC" ? "DESC" : "ASC" }, this.columnSortManager.toggleSortColumn(r);
  }
  toggleSortOrder(e, t) {
    this._columnSortManager.toggleSortColumn(this._grid.cell(e, t));
  }
  _getMatcherList() {
    return Array.from(this._filterMap.keys(), (e) => ({
      col: e,
      matcher: this._getMatcher(e)
    }));
  }
  _getMatcher(e) {
    const t = this._filterMap.get(e) ?? { metaInfo: In };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), Dd(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: r }) => r(t.getCell(n).text))
    );
  }
}
ho([
  fo()
], pn.prototype, "clearFilters");
ho([
  fo()
], pn.prototype, "removeColFilter");
ho([
  fo()
], pn.prototype, "setColFilter");
function fo() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...r) {
      const s = n.apply(this, r);
      return this._applyFilter(), s;
    }, t;
  };
}
class Qh extends ce {
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: t, gridStore: n } = e, r = this.setPluginAPI(new pn(t, this._args?.columnMetaInfo ?? {})), s = (l, u, a) => {
      (a === "insertColumns" || a === "removeColumns") && r.clearFilters();
    }, i = (l) => {
      document.getElementById(r.dropdownId)?.isConnected && (l.__IGNORE_GRID_FOCUS__ = !0);
    };
    n.hook.addHook("columnChanged", s), n.hook.addHook("contextMouseUp", i), this.addRollbackTask(() => {
      r.clearFilters(), r.clearSortOrder(), n.hook.removeHook("columnChanged", s), n.hook.removeHook("contextMouseUp", i);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
function Gd(o, e) {
  const t = new Set(e.allowCellRenderType ?? ["default", "select", "datePicker", "custom"]), n = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let r = !1, s = 0, i = 0;
  const l = {
    setRow(f) {
      s = f;
    },
    setCol(f) {
      i = f;
    }
  }, u = () => n.hasHeaderRows ? 0 : o.headerRows, a = () => n.hasHeaderColumns ? 0 : o.headerColumns;
  function* c() {
    l.setRow(u()), l.setCol(a());
    const f = o.getSelection();
    for (r = !1; ; ) {
      switch (n.area) {
        case "all":
          yield o.cell(s, i);
          break;
        case "selected-col":
          if (!f) throw new Error("No selection in finding");
          pr(i, f) && (yield o.cell(s, i));
          break;
        case "selected-row":
          if (!f) throw new Error("No selection in finding");
          mr(s, f) && (yield o.cell(s, i));
          break;
        case "selection":
          if (!f) throw new Error("No selection in finding");
          Co(s, i, f) && (yield o.cell(s, i));
          break;
        case "custom":
          if (!n.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          Co(s, i, n.customRange) && (yield o.cell(s, i));
          break;
      }
      if (w()) break;
    }
    function w() {
      const _ = n.direction;
      if (_ === "by-columns" || _ === "left-right") {
        if (++s, s >= o.getRowCount() && (++i, s = u()), i >= o.getColCount())
          if (r)
            r = !1, s = u(), i = a();
          else return !0;
      } else if (++i, i >= o.getColCount() && (++s, i = a()), s >= o.getRowCount())
        if (r)
          r = !1, s = u(), i = a();
        else return !0;
    }
  }
  function d(f) {
    if (!t.has(f.renderType)) return !1;
    const w = n.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), _ = n.matchAll ? `^${w}$` : w, v = n.ignoreCase ? "i" : "", S = new RegExp(_, v);
    return e.onCellCheck ? e.onCellCheck(S, f) : S.test(f.text);
  }
  let h = c();
  return {
    resetCursor() {
      h = c();
    },
    findNext(f) {
      for (gr(n, f) || (h = c()), Object.assign(n, f); ; ) {
        const w = h.next();
        if (!w.done && w.value && d(w.value))
          return r = !0, w.value;
        if (w.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(f) {
      const w = [];
      f && Object.assign(n, f);
      for (const _ of c())
        d(_) && w.push(_);
      return w;
    },
    setCursor(f, w) {
      if (f < 0 || w < 0) throw new Error("row or col must be greater than or equal to 0");
      l.setRow(f), l.setCol(w);
    }
  };
}
function Tn(o) {
  if (!(o instanceof Function))
    throw new Error("func is not a function");
  try {
    return o();
  } catch (e) {
    console.error(e);
  }
}
class jd extends J {
  _execute() {
    return this._instance.addColumn(...this._args);
  }
  _getUndoContext() {
    return {
      addedColumn: this._instance.getColCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _undo() {
    this._instance.removeColumn(this._undoContext.addedColumn), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getColCount() > this._undoContext.addedColumn : !1;
  }
}
class Ud extends J {
  _execute() {
    return this._instance.addRow(...this._args);
  }
  _undo() {
    this._instance.removeRow(this._undoContext.addedRow), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      addedRow: this._instance.getRowCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getRowCount() > this._undoContext.addedRow : !1;
  }
}
class Kd extends J {
  _undo() {
    this._instance.setColumnVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getColumnVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setColumnVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Cs(o, e) {
  const [t, n] = o, [r, s] = e, i = n - t, l = s - r;
  return i === l ? [e, o] : t < r ? [[s - i, s], [t, t + l]] : [[r, r + i], [n - l, n]];
}
class $d extends J {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Cs(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class qd extends J {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Cs(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Yd extends J {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeColumns(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertColumns(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Xd extends J {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeRows(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertRows(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Zd extends J {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: r, text: s }) => {
      this._instance.setText(n, r, s);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new mt(this._instance, this._instance), [t, n, r, s] = this._args, i = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: r, right: s }))
      i.push({ row: l.row, col: l.col, text: l.text });
    return {
      textSnapshot: i
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function vs(o, e) {
  const [t, n] = o, r = n - t;
  return t < e ? [[e - r - 1, e - 1], t] : [[e, e + r], n + 1];
}
class Jd extends J {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...vs(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getRowCount() ? this._instance.getStartOfRowId(this._args[1]) : this._instance.getRowCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Qd extends J {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...vs(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getColCount() ? this._instance.getStartOfColumnId(this._args[1]) : this._instance.getColCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class eh extends J {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertColumns(this._args[0], e), this._undoContext.columnList.forEach((t, n) => {
      this._instance.setColumnWidth(n + this._args[0], t.width), this._instance.setColumnVisible(n + this._args[0], t.visible);
    }), this._undoContext.removedCells.forEach((t) => {
      this._instance.cell(t.row, t.col).cellRenderer = t.cellRenderer, this._instance.setCell(t.row, t.col, t.metaInfo), (t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1) && this._instance.mergeCells(
        t.row,
        t.col,
        t.bottom,
        t.right
      );
    }), this._undoContext.selection && this._instance.select(
      this._undoContext.selection,
      this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
    );
  }
  _getUndoContext() {
    const e = new mn(this._instance), [t, n] = this._args;
    return {
      removedCells: e.getCellListByColumn(t, n),
      columnList: e.getColumnListByColumn(t, n),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _execute() {
    return this._instance.removeColumns(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class th extends J {
  _undo() {
    this._instance.forceLayoutTask(), this._instance.insertRowByList(this._undoContext.removedRows), this._undoContext.removedRows.forEach((e) => {
      const t = e.rowId;
      for (let n = 0; n < e.cellCounts; n++) {
        const r = e.getCell(n);
        (r.mergeInfo.rowSpan > 1 || r.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          t,
          r.col,
          r.bottom,
          r.right
        );
      }
      this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
    });
  }
  _execute() {
    this._instance.forceLayoutTask();
    const e = this._undoContext.removedRows.slice().reverse();
    for (const t of e)
      if (this._instance.removeRow(t.rowId) === !1)
        return !1;
  }
  _getUndoContext() {
    this._instance.forceLayoutTask();
    const [e, t, n] = this._args, r = N(e, t + 1).map((s) => this._instance.getRow(s));
    return {
      removedRows: n?.ignoreFiltered === !0 ? r.filter((s) => !s.filtered) : r,
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class nh extends J {
  _execute() {
    this._instance.setColumnWidth(...this._args);
  }
  _getUndoContext() {
    return {
      latestWidth: this._instance.getColumnWidth(this._args[0])
    };
  }
  _undo() {
    this._instance.setColumnWidth(this._args[0], this._undoContext.latestWidth);
  }
  get canExecute() {
    return this._args[0] < this._instance.getColCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getColCount();
  }
}
class oh extends J {
  _undo() {
    this._instance.setRowVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getRowVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setRowVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class rh extends J {
  _execute() {
    this._instance.setCellRenderer(...this._args);
  }
  _getUndoContext() {
    const [e, t] = this._args;
    return {
      row: e,
      col: t,
      cellRenderer: this._instance.cell(e, t).cellRenderer
    };
  }
  _undo() {
    this._instance.setCellRenderer(this._args[0], this._args[1], this._undoContext.cellRenderer);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
class sh extends J {
  _undo() {
    const [e, t] = this._args;
    this._instance.mergeCells(e, t, e + this._undoContext.rowSpan - 1, t + this._undoContext.colSpan - 1);
  }
  _execute() {
    this._instance.splitCells(...this._args);
  }
  _getUndoContext() {
    const e = this._instance.cell(...this._args);
    return {
      rowSpan: e.mergeInfo.rowSpan,
      colSpan: e.mergeInfo.colSpan
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
const er = {
  addRow: Ud,
  addColumn: jd,
  setCell: ze,
  clearCells: fs,
  setRowHeight: us,
  setColumnWidth: nh,
  insertRows: Xd,
  insertColumns: Yd,
  setRowVisible: oh,
  setColumnVisible: Kd,
  mergeCells: Zd,
  splitCells: sh,
  removeRows: th,
  removeColumns: eh,
  exchangeRows: $d,
  exchangeColumns: qd,
  moveRows: Jd,
  moveColumns: Qd,
  setCellRenderer: rh
};
function ih(o) {
  if (!(o in er)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return er[o];
}
function lh(o) {
  if (o === Z.name)
    return ih;
}
function ah(o, e, t, n, r) {
  const s = lh(e);
  if (!s) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = s(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  o.pushCommand(new i(n, r));
}
function Q() {
  return function(e, t, n) {
    const r = n.value;
    return n.value = function(...s) {
      const { commandManager: i } = this;
      return i ? i.isRecording && ah(i, this.constructor.name, t, this, s) : console.warn("No commandManager in this context"), r.apply(this, s);
    }, n;
  };
}
var ch = Object.defineProperty, uh = Object.getOwnPropertyDescriptor, ee = (o, e, t, n) => {
  for (var r = uh(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && ch(e, t, r), r;
};
const Mn = new ao(), dh = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), hh = Object.freeze({
  colSpan: !1,
  rowSpan: !1,
  skipFiltered: !0
}), tr = {}, fh = [
  "text/html",
  "text/plain"
];
function gh() {
  return [
    new ms({}),
    new hs(),
    new _s(),
    new ds({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new Cd({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class Z extends vl {
  _colHeaderInfo;
  _rowHeaderInfo;
  _bodyInfo;
  _plugins = [];
  _defaultColumnCellFormat;
  // IRGrid Util
  _scheduleManager;
  _gridStore;
  _gridRangeUtils = new mn(this);
  _generator;
  _selector;
  _copyOptions;
  _pasteOptions;
  _readonly = !1;
  _rowSeq = 0;
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: r,
      defaultColumnCellFormat: s,
      plugins: i
    } = e;
    if (this._defaultColumnCellFormat = {
      all: {
        editable: !0,
        text: ""
      }
    }, this._copyOptions = {
      ...dh,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...hh,
      ...e.copyOptions,
      ...e.pasteOptions
    }, s)
      for (const [d, h] of Object.entries(s))
        this._defaultColumnCellFormat[d] = Object.assign(this._defaultColumnCellFormat[d] || {}, h);
    this._gridStore = new Fu(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new nl({ context: this }),
        gridStateContext: new Uu(this),
        cursorManager: gs(this, !1)
      }
    ), this._initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: Mn,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      cellRenderer: Mn,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: Mn
    }, r), this.contextElement.classList.add(qi, Yi), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l } = this._gridStore.elements, { gridStateContext: u } = this._gridStore;
    this.contextElement.appendChild(l);
    let a = {
      offsetWidth: 0,
      offsetHeight: 0,
      className: ""
    }, c = !1;
    this.resizeObserve(() => {
      if (c) return;
      const { offsetHeight: d, offsetWidth: h, className: f } = this.contextElement;
      a.offsetWidth === h && a.offsetHeight === d && a.className === f || (a = { offsetWidth: h, offsetHeight: d, className: f }, c = !0, this._gridStore.hook.emit("resize", []).finally(() => {
        c = !1, this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      }));
    }), this.addCoreElement(l), this._generator = new mt(this._rowManager, this._colManager), this._selector = new Qu(this, u, l), this._scheduleManager = new od({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? gh()), u.selectionRangeState.addSubscription((d, h) => {
      d?.activeCell !== h?.activeCell && (d?.activeCell.deactivate(), h?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((d, h) => {
      d.forEach((f) => f.deactivate()), h.forEach((f) => f.activate());
    }), u.selectionRangeState.addSubscription((d, h) => {
      h ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(h.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((d, h) => {
      d?.activeCell !== h?.activeCell && Tn(() => this.onChangeCell(h?.activeCell ?? null)), Tn(h ? () => this.onSelectCell(h.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((d, h) => {
      this.onSelectChanged(h?.range ?? null, d?.range ?? null);
    }), u.selectionRangeState.addSubscription((d, h) => {
      h?.activeCell && this._gridStore.gridTextarea.setPosition(h.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((d, h) => {
      this.contextElement.dataset.mode = h.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (d) => this.hook.emit("contextMenu", [d])), this.addGlobalEventListener(this.contextElement, "focus", (d) => this.hook.emit("contextFocus", [d])), this.addGlobalEventListener(this.contextElement, "blur", (d) => this.hook.emit("contextBlur", [d])), this.addGlobalEventListener(this.contextElement, "mousedown", (d) => this.hook.emit("contextMouseDown", [d])), this.addGlobalEventListener(this.contextElement, "mousemove", (d) => this.hook.emit("contextMouseMove", [d])), this.addGlobalEventListener(this.contextElement, "mouseup", (d) => this.hook.emit("contextMouseUp", [d])), this.addGlobalEventListener(this.contextElement, "dragstart", (d) => this.hook.emit("contextDragStart", [d])), this.addGlobalEventListener(this.contextElement, "dragend", (d) => this.hook.emit("contextDragEnd", [d])), this.addGlobalEventListener(this.contextElement, "scroll", (d) => {
      this.hook.emitSync("contextScroll", [d, this.scrollTop, this.scrollLeft]);
    }), this.hook.addBeginHook("contextMenu", (d) => void d.preventDefault()), this.hook.addEndHook("contextMenu", (d) => {
      const { y: h, x: f } = Sl(d);
      this.onContextMenu(d, this.findCellOrNull(h, f));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this.hook.addSyncHook("cellRightClick", (d, h) => this.onCellRightClick(h, d)), this.hook.addSyncHook("cellClear", (d) => this.onClearCell(d)), this.hook.addSyncHook("cellDblClick", (d) => this.onDoubleClickCell(d)), this.hook.addSyncHook("cellSelect", (d) => this.selectCell(d.row, d.col)), this.hook.addSyncHook("cellClick", (d) => {
      this.contextElement.classList.contains("is-resizing") || (d.cellType === "row-header" && this.onRowClick(d), d.cellType === "col-header" && this.onColumnClick(d));
    }), this._initTableRowCol(), this._gridStore.gridTextarea.mountElement(l);
  }
  _gridEvFocus(e) {
    e.__IGNORE_GRID_FOCUS__ !== !0 && this.focus();
  }
  /**
   * @version ^2.15.1
   */
  clearPlugins() {
    const e = this._plugins.slice();
    for (const t of e)
      this.removePlugin(t);
  }
  getSnapshotRows() {
    return this._gridStore.rowManager.getSnapshotRows();
  }
  onDestroy() {
    this._gridStore.hook.destroy(), this.clearPlugins();
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated getFreezedRowCount 사용 권장
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  /**
   * @version ^2.17.0
   */
  get copyOptions() {
    return Object.freeze(this._copyOptions);
  }
  /**
   * @version ^2.17.0
   */
  get pasteOptions() {
    return Object.freeze(this._pasteOptions);
  }
  /**
   * @version ^2.17.0
   */
  get className() {
    return this.contextElement.className;
  }
  get componentLabel() {
    return "grid";
  }
  get hook() {
    return this._gridStore.hook;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  get firstRow() {
    return this._rowManager.firstRow;
  }
  get lastRow() {
    return this._rowManager.lastRow;
  }
  get _gridContext() {
    return this._gridStore.gridStateContext;
  }
  get _rowManager() {
    return this._gridStore.rowManager;
  }
  get _mergeHandler() {
    return this._gridStore.mergeHandler;
  }
  get _colManager() {
    return this._gridStore.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  get fixedColumnCount() {
    return this._colManager.freezedColumns;
  }
  get width() {
    return this.contextWidth;
  }
  get contextWidth() {
    return this._colManager.columnsWidth;
  }
  get contextHeight() {
    return this._rowManager.rowsHeight;
  }
  get height() {
    return this.contextHeight;
  }
  /**
   * headerRows + freezedRows 높이 총합
   */
  get fixedRowHeight() {
    return this._rowManager.freezedRowsHeight;
  }
  /**
   * rowHeaders + freezedColumns 너비 총합
   */
  get fixedColumnWidth() {
    return this._colManager.fixedColumnsWidth;
  }
  get scrollArea() {
    const { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: r } = this.contextElement;
    return { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: r };
  }
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  get scrollLeft() {
    return this.contextElement.scrollLeft;
  }
  get scrollBottom() {
    return this.contextElement.scrollTop + this.contextElement.clientHeight;
  }
  get scrollRight() {
    return this.contextElement.scrollLeft + this.contextElement.clientWidth;
  }
  get minColWidth() {
    return this._colHeaderInfo.minSize;
  }
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  get commandManager() {
    return this._gridStore.commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수 (초기 colHeader.rowCount)
   */
  get headerRows() {
    return this._rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수 (초기 rowHeader.colCount)
   */
  get headerColumns() {
    return this._colManager.headerColumns;
  }
  get headerWidth() {
    return this._colManager.rowHeaderColumnsWidth;
  }
  get headerHeight() {
    return this._rowManager.headerRowsHeight;
  }
  get activeCell() {
    return this._gridContext.selectionRangeState.value?.activeCell ?? null;
  }
  /*
   * Setters
   */
  /**
   * @version ^2.17.0
   */
  set copyOptions(e) {
    Object.assign(this._copyOptions, e);
  }
  /**
   * @version ^2.17.0
   */
  set pasteOptions(e) {
    Object.assign(this._pasteOptions, e);
  }
  set activeCell(e) {
    if (e === this.activeCell) return;
    if (!e) {
      this._gridContext.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  set readonly(e) {
    this._readonly = e, this._rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this._gridStore
    }), this._plugins.push(e);
  }
  getColumnByLeft(e) {
    const t = this._colManager.visibleColumnList;
    let n = 0, r = t.length - 1;
    for (; n <= r; ) {
      const s = n + Math.floor((r - n) / 2), i = t[s];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? r = s - 1 : n = s + 1;
    }
    return null;
  }
  /**
   * 설정된 기본 열 서식을 변경합니다.
   * all 모든 셀 공통
   * {number} 해당 열 셀 공통
   * col_header_{number} 해당 열 헤더 셀
   * row_header_{number} 해당 행 헤더 셀
   * body_{number} 해당 body 열 셀
   */
  setDefaultColumnCellFormat(e, t) {
    this._defaultColumnCellFormat[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this._rowManager.getRowByTop(e);
  }
  removePlugin(e) {
    if (!this._plugins.includes(e))
      throw new Error("plugin not found");
    try {
      e.unmount(), this._plugins.splice(this._plugins.indexOf(e), 1);
    } catch (t) {
      console.error("removing plugin error!", t);
    }
  }
  getMergeArea(e, t) {
    const n = this.cell(e, t);
    if (n.mergeInfo)
      return {
        rowSpan: n.mergeInfo.rowSpan,
        colSpan: n.mergeInfo.colSpan
      };
    throw new Error("It's not a based cell!");
  }
  isMerged(e, t) {
    return this._mergeHandler.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this._mergeHandler.splitCells(e, t), this._scheduleManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, r) {
    this.forceLayoutTask(), this._mergeHandler.mergeCells({ top: e, left: t, bottom: n, right: r }), this._scheduleManager.addTask("virtualRender");
    const s = this.getSelection();
    s && this.selectRange(s.top, s.left, s.bottom, s.right);
  }
  undo() {
    return this.commandManager.undo();
  }
  redo() {
    return this.commandManager.redo();
  }
  findRowOrNull(e) {
    return this._rowManager.findRowOrNull(this.scrollTop, e, this.fixedRowCount);
  }
  findCellOrNull(e, t) {
    const { scrollTop: n, scrollLeft: r } = this, s = e < n + this.fixedRowHeight ? e - n : e, i = t < r + this.fixedColumnWidth ? t - r : t, l = this.getRowByTop(s);
    if (!l) return null;
    const u = this.getColumnByLeft(i);
    if (!u) return null;
    const a = this.cell(l.rowId, u.columnId);
    return a.mergeMain ?? a;
  }
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return { row: n.row, col: n.col };
    if (n.mergeMain)
      return { row: n.mergeMain.row, col: n.mergeMain.col };
    throw new Error("It's not a merged cell!");
  }
  releaseCells() {
    this._gridContext.selectionRangeState.next(null), this._selector.releaseRange();
  }
  _clearAllRows() {
    this.contextElement.scrollTop = 0, this._rowManager.clearRows(), this._mergeHandler.clearMergeCells(this.headerRows), this.commandManager.clearCommands();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this._clearAllRows(), this._scheduleManager.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this._colManager.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    t?.isRemoved && (t = null), this._gridContext.selectionRangeState.next({
      range: e,
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._scheduleManager.addTask("updateSelection");
  }
  selectRange(e, t, n, r, s = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: r }, s);
  }
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return N(e.mergeInfo.colSpan).reduce((n, r) => this.getColumnVisible(t + r) ? n + this.getColumnWidth(t + r) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return N(e.mergeInfo.rowSpan).reduce((n, r) => this.getRowVisible(t + r) ? n + this.getRowHeight(e.row + r) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  getSelection() {
    return this._gridContext.selectionRangeState.value?.range ?? null;
  }
  scrollOnRow(e) {
    this._scheduleManager.updateScrollInfo({ row: e });
  }
  scrollOnCol(e) {
    this._scheduleManager.updateScrollInfo({ col: e });
  }
  forceLayoutTask() {
    this._scheduleManager.forceRunTasks();
  }
  getPlugin(e) {
    for (const t of this._plugins)
      if (t instanceof e)
        return t;
    throw new Error(`not found plugin ${e}`);
  }
  resetScroll() {
    this.contextElement.scrollTop = 0, this.contextElement.scrollLeft = 0;
  }
  scrollInView(e, t) {
    this._scheduleManager.updateScrollInfo({ row: e, col: t });
  }
  focus() {
    this._gridStore.tableElement.draggable || this._gridStore.gridTextarea.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업 예약
   */
  afterRender(e) {
    this._scheduleManager.addAfterRenderTask(e), this._scheduleManager.addTask("nothing");
  }
  /**
   * @command 내부적으로 setCell을 호출하여 command에 기록
   */
  setText(e, t, n) {
    this.setCell(e, t, { text: n });
  }
  setCellRenderer(e, t, n) {
    this.cell(e, t).cellRenderer = n;
  }
  getText(e, t) {
    return this.cell(e, t).text;
  }
  getValue(e, t) {
    return this.cell(e, t).value;
  }
  getColumnWidth(e) {
    return this._colManager.getColumnWidth(e);
  }
  /**
   *
   * @version ^2.18.0
   */
  getColWidthWithSpan(e, t) {
    let n = 0;
    for (let r = 0; r < t; r++)
      n += this._colManager.getColumnUnstable(e + r).widthWithBorder;
    return n;
  }
  /**
   *
   * @version ^2.17.0
   * @command
   */
  setData(e) {
    const { row: t, col: n, data: r } = e;
    r.forEach((s, i) => {
      s.forEach((l, u) => this.setText(t + i, n + u, l));
    });
  }
  setColumnWidth(e, t) {
    const n = Y(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this._colManager.setColumnWidth(e, n), this._rowManager.setColumnWidth(e, n), this._gridStore.hook.emit("columnChanged", [e, e, "setWidth"]), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("updateSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft");
  }
  getRowHeight(e) {
    return this._rowManager.getRowHeight(e);
  }
  /**
   * @version ^2.18.0
   */
  getRowHeightWithSpan(e, t) {
    let n = 0;
    for (let r = 0; r < t; r++)
      n += this._rowManager.getRowUnstable(e + r).heightWithBorder;
    return n;
  }
  setRowHeight(e, t) {
    const n = Y(t, this.minRowHeight, this.maxRowHeight);
    this._rowManager.setRowHeight(e, n), this._scheduleManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  setRowTextColor(e, t) {
    this._rowManager.getRow(e).textColor = t;
  }
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  setObject(e, t, n) {
    this.cell(e, t).props = { object: n };
  }
  cell(e, t) {
    return this._rowManager.getCell(e, t);
  }
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환합니다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).props;
  }
  getCellMetaInfo(e, t) {
    return this.cell(e, t).props;
  }
  _toCellProps(e) {
    if (typeof e.text == "number" || typeof e.text == "boolean" || typeof e.text == "bigint")
      e.text = `${e.text}`;
    else if (e.text === null)
      e.text = "";
    else if (typeof e.text == "object" || Array.isArray(e.text))
      throw new Error("Could not set object or array in text property!");
    return e;
  }
  setCell(e, t, n) {
    this.cell(e, t).props = this._toCellProps(n);
  }
  /**
   * 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용
   */
  setRowInfo(e, t) {
    this.getRow(e).setRowInfo(t);
  }
  selectCell(e, t) {
    this.selectRange(e, t, e, t, this.cell(e, t));
  }
  getRowCount() {
    return this._rowManager.length;
  }
  /**
   *
   * @version ^2.17.0
   */
  getVisibleRowCount() {
    return this._rowManager.getVisibleRowCount();
  }
  getColCount() {
    return this._colManager.length;
  }
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)
   */
  getFreezedRowCount() {
    return this._rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)
   */
  getFreezedColumnCount() {
    return this._colManager.freezedColumns;
  }
  getColumn(e) {
    return this._colManager.getColumn(e);
  }
  getRow(e) {
    return this._rowManager.getRow(e);
  }
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  renderColumns(e, t) {
    this._rowManager.runFuncEachRow((n) => n.renderColumns(e, t));
  }
  /**
   * @version ^2.18.0
   */
  fillColumn(e) {
    this.forceLayoutTask();
    const t = this.contextElement.clientWidth - this.width + this.getColumnWidth(e);
    t < 0 || this.setColumnWidth(e, t);
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this._rowHeaderInfo.defaultSize) {
    const t = Y(e, this.minRowHeight, this.maxRowHeight), n = this._createIRGridRow(this._rowManager.getNextRowId(), this.height, t);
    return this._rowManager.addRow(n), n.rowId;
  }
  _createBulkRows(e, t) {
    for (let n = 0; n < e; n++)
      this._addRow(t);
    this._scheduleManager.scheduleAddRowTasks();
  }
  addRow(e) {
    return this._scheduleManager.scheduleAddRowTasks(), this._addRow(e);
  }
  /**
   *
   * @command removeRows 호출로 command화
   */
  removeRow(e) {
    return this.removeRows(e, e);
  }
  /**
   *
   * @command removeColumns 호출로 command화
   */
  removeColumn(e) {
    return this.removeColumns(e, e);
  }
  removeRows(e, t, n) {
    if (e < this.headerRows)
      throw new Error("Could not remove rows in header rows!");
    if (t >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount() - 1}. If you wanna clear all rows, please call clearRows()`);
    if (this._mergeHandler.checkConflictingInRows(e, t)) return !1;
    this._rowManager.runFuncEachRow((r) => {
      for (const s of r.getCellGenerator())
        s.isMerged && this._mergeHandler.removeMergeCell(s.row, s.col);
    }, e, t + 1), this._rowManager.removeRows(e, t, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this._mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this._rowManager.runFuncEachRow((n) => {
      for (const r of n.getCellGenerator(e, t))
        r.isMerged && this._mergeHandler.removeMergeCell(r.row, r.col);
    }), this._rowManager.removeColumns(e, t), this._colManager.removeColumns(e, t), this._gridStore.hook.emit("columnChanged", [e, t, "removeColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("adjustSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = Y(e, this.minColWidth, this.maxColWidth), n = this._colManager.addColumn(t);
    return this._rowManager.addColumn((r) => this._createIRGridCell(r.rowId, n.columnId)), this._gridStore.hook.emit("columnChanged", [n.columnId, n.columnId, "addColumn"]), this._scheduleManager.addTask("resizeGridWrapperWidth").addTask("virtualRender"), n.columnId;
  }
  addColumn(e) {
    return this._scheduleManager.addTask("generateScrollBarClass"), this._addColumn(e);
  }
  /**
   *
   * @command
   */
  insertRow(e, t) {
    return this.insertRows(e, 1, t);
  }
  insertRows(e, t = 1, n = this._rowHeaderInfo.defaultSize) {
    const r = this.getRowCount(), s = Y(e, this.headerRows, r);
    if (!this._mergeHandler.checkCanInsertRow(s)) return !1;
    const i = Y(n, this.minRowHeight, this.maxRowHeight);
    if (s === r)
      return N(t).forEach(() => this.addRow(i)), !0;
    const l = N(t).map((u) => this._createIRGridRow(s + u, 0, i));
    return this._rowManager.insertRows(s, l), this._scheduleInsertRowTasks(), !0;
  }
  _scheduleInsertRowTasks() {
    this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection");
  }
  /**
   *
   * @version ^2.17.0
   */
  insertRowByList(e) {
    this._rowManager.insertRowByList(e), this._scheduleInsertRowTasks();
  }
  /**
   *
   * @command
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this._colHeaderInfo.defaultSize) {
    const r = this.getColCount(), s = Y(e, this.headerColumns, r);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = Y(n, this.minColWidth, this.maxColWidth);
    if (s === r) {
      for (let l = 0; l < t; l++)
        this.addColumn(i);
      return !0;
    }
    return this._colManager.insertColumns(e, t, i), this._rowManager.insertColumns(e, t, (l, u) => this._createIRGridCell(l, u)), this._gridStore.hook.emit("columnChanged", [e, e + t - 1, "insertColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("resizeGridWrapperWidth").addTask("virtualRender").addTask("adjustSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0;
  }
  /**
   *
   * @command autoSizeColumns
   */
  autoSizeColumn(e) {
    this.autoSizeColumns(e, e);
  }
  /**
   *
   * @command
   */
  autoSizeColumns(e, t) {
    N(e, t + 1).forEach((n) => {
      const r = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      r !== this.getColumnWidth(n) && this.setColumnWidth(n, r);
    });
  }
  /**
   *
   * @command autoSizeRows
   */
  autoSizeRow(e) {
    this.autoSizeRows(e, e);
  }
  /**
   * @command
   */
  autoSizeRows(e, t) {
    this._rowManager.runFuncEachRow((n) => {
      const r = n.rowInnerHeight;
      r !== n.height && this.setRowHeight(n.rowId, r);
    }, e, t + 1);
  }
  copyToClipboard() {
    if (!this.getSelection()) {
      console.warn("No selection detected.");
      return;
    }
    this.focus(), document.execCommand("copy");
  }
  async _createClipboardGetter() {
    const e = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const t = (await gl.read()).flat();
      for await (const n of t)
        for (const r of fh)
          e[r] === "" && n.types.includes(r) && (e[r] = await ml(await n.getType(r)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = wl(tr) ?? "";
    }
    return {
      getData(t) {
        return e[t] ?? "";
      }
    };
  }
  /**
   * Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * ! firefox의 경우 Clipboard API를 지원하지 않는다.
   */
  async pasteFromClipboard() {
    const e = this.getSelection();
    if (!e) {
      console.warn("no selection, it needs selection to paste");
      return;
    }
    this.paste(
      e,
      Wo(
        await this._createClipboardGetter()
      )
    );
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = gu(this, this._pasteOptions), r = n.getPastingRange(e, t), { rowSpan: s, colSpan: i } = this._pasteOptions;
    if (s || i)
      for (const u of this._generator.getSelectionGenerator(r))
        s && u.mergeInfo.rowSpan > 1 && this.splitCells(u.row, u.col), i && u.mergeInfo.colSpan > 1 && this.splitCells(u.row, u.col);
    const l = n.beforePastingList(r, t);
    l.length !== 0 && (this.onClipboardBeforePaste(r), n.pasteTask(l), this.onClipboardAfterPaste(r), this.select(r));
  }
  hasRow(e) {
    return e < this.getRowCount();
  }
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e, t = !1) {
    for (const n of this._generator.getSelectionGenerator(e))
      t && this.isFilteredRow(n.row) || this.onClearCellCheck(n) && n.clear();
  }
  setRowVisible(e, t) {
    return this._mergeHandler.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this._rowManager.setRowVisible(e, t), this._scheduleRowTasks()), !0);
  }
  _scheduleRowTasks() {
    return this._scheduleManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection").addTask("updateSelectionByScroll");
  }
  setRowVisibleBulk(e, t) {
    this._rowManager.setRowVisibleBulk(e, t), this._scheduleRowTasks();
  }
  /**
   *
   * @version ^2.17.0
   */
  setRowFilter(e) {
    this._rowManager.setRowFilter(e), this.scrollOnRow(0), this._scheduleRowTasks();
  }
  getRowVisible(e) {
    return this._rowManager.getRowVisible(e);
  }
  /**
   *
   * @version ^2.17.0
   */
  isFilteredRow(e) {
    return this.getRow(e).filtered;
  }
  setColumnVisible(e, t) {
    return this._mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this._colManager.setColumnVisible(e, t), this._rowManager.setColumnVisible(e, t), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection").addTask("resizeGridWrapperWidth").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), this._gridStore.hook.emit("columnChanged", [e, e, "setVisible"])), !0);
  }
  getColumnVisible(e) {
    return this._colManager.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return Gd(this, e);
  }
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  selectColumns(e, t, n = this.activeCell) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, n ?? this.cell(this.headerRows, e));
  }
  selectRow(e, t = this.activeCell) {
    this.selectRows(e, e, t);
  }
  selectRows(e, t, n = this.activeCell) {
    e < this.headerRows || this.selectRange(e, this.headerColumns, t, this.getColCount() - 1, n ?? this.cell(e, this.headerColumns));
  }
  freezeRows(e) {
    this._rowManager.freezeRows(e), this._scheduleManager.addTask("virtualRender").addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns);
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정함.
   * @param freezingColumnCount
   */
  freezeColumn(e) {
    if (e < 0)
      throw new Error("Could not be freezing minus columns!");
    if (e > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this._colManager.freezeColumns(e), this._scheduleManager.addTask("updateSelection").addTask("updateSelectionByScroll").addTask("updateRowsStickyLeft").addTask("virtualRender");
  }
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  /**
   *
   * @deprecated IRGrid.copyOptions = {...} 또는 IRGrid.pasteOptions = {...}를 사용해주세요.
   */
  setClipboardOptions(e) {
    this.copyOptions = e;
  }
  sort(e, t, n, r) {
    const s = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(r ?? this.getRowCount(), this.getRowCount());
    this._rowManager.sort(e, t, s, i), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  splitCellsByRange(e) {
    for (const t of this._generator.getSelectionGenerator(e)) {
      const n = t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1 ? t : t.mergeMain;
      n && this.splitCells(n.row, n.col);
    }
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCellAddress(e) {
    e.length > 0 && this.selectCell(e[0][0], e[0][1]);
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCells(e) {
    e.length > 0 && this.selectCell(e[0].row, e[0].col);
  }
  /**
   *
   * @deprecated
   */
  getSelectionMode() {
    return "range";
  }
  getSelectedCells() {
    const e = this.getSelection();
    return e ? [this.cell(e.top, e.left)] : [];
  }
  /**
   * @command
   */
  exchangeRow(e, t) {
    this.exchangeRows([e, e], [t, t]);
  }
  exchangeRows(e, t) {
    if (e.some((n) => this._rowManager.isInvalidRowId(n)) || t.some((n) => this._rowManager.isInvalidRowId(n)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((n) => n < this.getFreezedRowCount()) || t.some((n) => n < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInRows(...e) || this._mergeHandler.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.exchangeRows(e, t), this.onExchangedRows(e, t), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this._colManager.isInvalidColumnId(n)) || t.some((n) => this._colManager.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInColumns(...e) || this._mergeHandler.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._scheduleManager.addTask("adjustSelection").addTask("virtualRender");
  }
  /**
   * @command
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((r) => this._rowManager.isInvalidRowId(r)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((r) => r < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this._mergeHandler.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._rowManager.getAdjustTargetRow(t);
    this._rowManager.moveRows(e, n), this.onMovedRows(e, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * @command
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((r) => this._rowManager.isInvalidRowId(r)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((r) => r < this.getFreezedRowCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this._mergeHandler.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._getAdjustTargetColumn(t);
    this._rowManager.runFuncEachRow((r) => r.moveCells(e, n)), this.onMovedColumns(e, n), this._scheduleManager.addTask("virtualRender").addTask("adjustSelection");
  }
  getStartOfRowId(e) {
    return this._rowManager.getStartOfRowId(e);
  }
  getStartOfColumnId(e) {
    return this._rowManager.getStartOfColumnId(e);
  }
  /**
   *
   * @deprecated
   */
  getSelectedMultipleCellAddress() {
    const e = this.getSelection();
    return e ? [[e.top, e.left]] : [];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   * @deprecated
   */
  isSelectedSingleCell() {
    const e = this.getSelection();
    if (!e) return !1;
    const { top: t, left: n, bottom: r, right: s } = e;
    if (t === r && n === s) return !0;
    const i = this.getRow(t).getCell(n);
    return r === i.bottom && s === i.right;
  }
  /**
   * @deprecated
   */
  render() {
    this._rowManager.renderRows();
  }
  /*
   * Object Events
   */
  /**
   * 셀을 클릭하거나 선택된 범위가 변경되었을 때, activeCell이 호출됨.
   * @deprecated 같은 셀을 클릭하여도 발동하여 성능 이슈가 있으므로, 더블 클릭 등의 기능과 연계할 떄는 `onChangeCell`을 사용할 것.
   */
  onSelectCell(e) {
  }
  onChangeCell(e) {
  }
  onActiveCellNull() {
  }
  onEditCellDone(e, t, n, r, s, i) {
  }
  onSelectChanged(e, t) {
  }
  onClearCell(e) {
  }
  onClearCellCheck(e) {
    return e.canClear;
  }
  onColumnClick(e) {
  }
  onRowClick(e) {
  }
  onCreatingCell(e) {
  }
  onCellRightClick(e, t) {
  }
  onEditKeyDown(e, t, n, r) {
  }
  onEditInput(e, t, n) {
  }
  onMountedRow(e) {
  }
  onClipboardBeforePasteCell(e, t) {
    return !0;
  }
  onClipboardBeforePaste(e) {
  }
  onClipboardAfterPasteCell(e) {
  }
  onClipboardAfterPaste(e) {
  }
  /**
   * false를 리턴하면 자동 생성되지 않음. 기본 값 true 리턴
   * @param _row 생성될 row 값
   * @returns
   */
  onAutoInsertRow(e) {
    return !0;
  }
  onAutoInsertedRow(e) {
  }
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @returns
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  onAutoInsertedColumn(e) {
  }
  onDoubleClickCell(e) {
  }
  onDropOnCell(e, t, n) {
  }
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.props.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.props.object)), !0);
  }
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.props.disabled !== !0 && e.props.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
  }
  onUndo(e) {
  }
  onRedo(e) {
  }
  onNativeCopy(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    const n = this._gridRangeUtils.getCellMatrixByRange(t), { rowSpan: r, colSpan: s } = this._copyOptions, l = (this._copyOptions.skipFiltered ? n.filter(([u]) => !this.isFilteredRow(u.row)) : n).map((u) => u.map((a) => ({
      text: this.onCopyCellText(a),
      cellVisible: a.mergeMain === void 0,
      rowSpan: r ? a.mergeInfo.rowSpan : 1,
      colSpan: s ? a.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    yu(e.clipboardData, l), Cl(tr, JSON.stringify(l)), this.focus(), this.onCopy(), e.preventDefault();
  }
  onCopyCellText(e) {
    return e.text;
  }
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  onNativePaste(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("it needs selection to paste");
    const n = Wo(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  onExchangedRows(e, t) {
  }
  onExchangedColumns(e, t) {
  }
  onMovedRows(e, t) {
  }
  onMovedColumns(e, t) {
  }
  __setEditMode(e) {
    this._gridContext.gridModeState.next({
      mode: "edit-cell",
      contextParam: { cell: e }
    });
  }
  doEditMode(e, t = !1, n = !1) {
    if (!e.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return !1;
    const r = this._gridStore.gridTextarea;
    r.onEditDone = (s, i, l, u, a, c) => {
      this.onEditCellDone(s, i, l, u, a, c), this._gridContext.gridModeState.value.mode !== "idle" && this._gridContext.setIdle();
    }, r.onEditKeyDown = (s, i, l, u) => this.onEditKeyDown(s, i, l, u), r.onEditInput = (s, i) => this.onEditInput(s, i, e), r.onDragEnd = () => this.__setEditMode(e), r.onEnterOnEdit = () => {
      let s = this._gridStore.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === s) {
        if (i = this._gridStore.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        s = this._gridStore.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(s, i), this.selectCell(s, i), this.afterRender(() => this.doEditMode(this.cell(s, i), !1, !0));
    };
    try {
      return this.__setEditMode(e), this.activeCell !== e && this.selectCell(e.row, e.col), r.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
    } catch (s) {
      return console.error("IRGrid.doEditMode Error!", s), !1;
    }
  }
  onCopy() {
  }
  onContextMenu(e, t) {
  }
  onDragOverCell(e, t) {
    return !0;
  }
  /*
   * Private Methods
   * protected _으로 시작하도록 함. 동적인 호출을 위해 외부 호출 가능성 염두
   */
  _getAdjustTargetColumn(e) {
    return e >= this._colManager.length ? this._colManager.length : e < this._colManager.freezedColumns ? this._colManager.freezedColumns : this._rowManager.getStartOfColumnId(e);
  }
  onCheckCellReadonly(e) {
    return this._readonly ? !0 : e.props.readonly === !0;
  }
  _initPlugins(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  _initTableRowCol() {
    N(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  _initGridCellPadding() {
    Ae(this.contextElement, {
      [B.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [B.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [B.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [B.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
    });
  }
  _getCellRenderer(e, t, n, r) {
    if (e === "col-header")
      return this._colHeaderInfo.cellRenderer;
    if (e === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    if (e === "body-cell")
      return this._bodyInfo.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  _getCellType(e, t) {
    const n = e < this.headerRows, r = !n && t < this.headerColumns;
    return n ? "col-header" : r ? "row-header" : "body-cell";
  }
  _getDefaultCellFormat(e, t) {
    const n = {
      gridStore: this._gridStore
    };
    return Object.assign(n, {
      ...this._defaultColumnCellFormat.all,
      ...this._defaultColumnCellFormat[t]
    }), e === "col-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`row_header_${t}`]) : Object.assign(n, this._defaultColumnCellFormat[`body_${t}`]), n;
  }
  _createIRGridCell(e, t) {
    const n = this._getCellType(e, t), r = n.endsWith("header") ? "th" : "td", s = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, s), l = new Bu({
      row: e,
      col: t,
      tag: r,
      cellType: n,
      cellRenderer: i,
      props: s
    });
    return l.onCheckReadonly = () => this.onCheckCellReadonly(l), this.onCreatingCell(l), l;
  }
  _createIRGridRow(e, t, n) {
    const r = new Ku({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return ++this._rowSeq, N(this.getColCount()).forEach((s) => {
      r.addCell(this._createIRGridCell(e, s)), !this.getColumnVisible(s) && r.setColumnVisible(s, !1);
    }), r.onMounted = () => {
      r.freezeColumns(this._rowHeaderInfo.colCount), this.onMountedRow(r.rowId);
    }, r.onRenderRow = (s) => this.hook.emit("renderRowElement", [r, s]), r;
  }
}
ee([
  Q()
], Z.prototype, "splitCells");
ee([
  Q()
], Z.prototype, "mergeCells");
ee([
  Q()
], Z.prototype, "setCellRenderer");
ee([
  Q()
], Z.prototype, "setColumnWidth");
ee([
  Q()
], Z.prototype, "setRowHeight");
ee([
  Q()
], Z.prototype, "setCell");
ee([
  Q()
], Z.prototype, "addRow");
ee([
  Q()
], Z.prototype, "removeRows");
ee([
  Q()
], Z.prototype, "removeColumns");
ee([
  Q()
], Z.prototype, "addColumn");
ee([
  Q()
], Z.prototype, "insertRows");
ee([
  Q()
], Z.prototype, "insertColumns");
ee([
  Q()
], Z.prototype, "clearCells");
ee([
  Q()
], Z.prototype, "setRowVisible");
ee([
  Q()
], Z.prototype, "setColumnVisible");
ee([
  Q()
], Z.prototype, "exchangeRows");
ee([
  Q()
], Z.prototype, "exchangeColumns");
ee([
  Q()
], Z.prototype, "moveRows");
ee([
  Q()
], Z.prototype, "moveColumns");
const ef = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, tf = /^-?\d+(\.\d+)?$/;
export {
  ef as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  tf as ALLOW_ONLY_NUMBER_PATTERN,
  Kh as CellDropPlugin,
  Uh as ColumnFillPlugin,
  ts as CustomCellRenderer,
  Gh as DefaultKeyPlugin,
  Z as IRGrid,
  Tc as IRGridButtonRenderer,
  _s as IRGridCellDropPlugin,
  fe as IRGridCellRenderer,
  _r as IRGridCheckboxRenderer,
  gd as IRGridColumnFillPlugin,
  Cc as IRGridDatePickerRenderer,
  Oc as IRGridDefaultCellIconButtonRenderer,
  ao as IRGridDefaultCellRenderer,
  ms as IRGridDefaultKeyPlugin,
  qh as IRGridExchangeByHeaderCellPlugin,
  hs as IRGridMouseCellSelectorPlugin,
  Xh as IRGridMoveColumnsPlugin,
  Yh as IRGridMoveRowsPlugin,
  Zh as IRGridOverflowPanelPlugin,
  Cd as IRGridPopoverPlugin,
  bc as IRGridProgressRenderer,
  Qr as IRGridRadioCellRenderer,
  ds as IRGridResizerPlugin,
  Ph as IRGridRowFilterCellRenderer,
  Qh as IRGridRowFilterPlugin,
  Ac as IRGridRowNoHeaderCellRenderer,
  ud as IRGridRowSelectionPlugin,
  _c as IRGridSelectCellRenderer,
  md as IRGridSingleCellDragPlugin,
  Jh as IRGridTablePlugin,
  Vh as MouseCellSelectorPlugin,
  Bh as ResizerPlugin,
  jh as RowSelectionPlugin,
  $h as SingleCellDragPlugin,
  co as cellCompare,
  Do as cellTextToNum,
  es as createCellContent,
  Hc as createCellContentWithIconButton,
  Wh as createCustomRenderer,
  Pd as createIRGridColumnSortManager,
  Nh as createInferenceSortHandler,
  Fo as numberCheckDefault,
  Oh as renderGridButton,
  zh as renderGridCellDefault,
  Fh as renderGridCellIconButton,
  Th as renderGridCheckbox,
  Lh as renderGridDatePicker,
  Hh as renderGridProgress,
  Ah as renderGridRadio,
  Mh as renderGridSelect,
  Dh as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
