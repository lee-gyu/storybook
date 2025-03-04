import "./chunks/_init-D7pcIR7n.js";
import { a2 as vs, J as Rs, a3 as xs, L as bs, M as tr, a4 as ys, a5 as nr, n as Ss, p as Es, o as Is, v as ks, m as Ts, s as Ms, a6 as Ls, q as Hs, r as Os, t as zs, u as As, G as Ds, a7 as Fs, H as Vn, I as or, a8 as Ws, a9 as Ns, P as ze, aa as Bs, ab as Ps, ac as Vs, ad as Gs, ae as js, af as Us, Y as Ks, ag as $s, ah as qs, ai as Ys, aj as Xs, ak as Zs, al as Js, am as Qs, an as ei, ao as rr, ap as Gn, aq as ti, ar as ni, j as Ee, as as sr, at as oi, au as ri, av as si, aw as ir, ax as lr, ay as ar, az as ii, aA as li, aB as ai, aC as ci, aD as ui, aE as di, aF as fo, aG as hi, aH as fi, aI as gi, aJ as mi, aK as pi, aL as G, aM as _n, aN as _i, aO as wi, aP as Ci, aQ as vi, aR as Ri, l as go, aS as xi, aT as bi, aU as yi, aV as Si, aW as Ei, aX as Ii, aY as ki, aZ as Ti, a_ as Mi, a$ as Li, b0 as Hi, b1 as cr, b2 as ur, b3 as Ln, b4 as Oi, b5 as zi, N as Ai, b6 as Di, b7 as Fi, b8 as Wi, b9 as Ni, ba as Bi, bb as Pi, bc as Vi, bd as mo, be as Gi, bf as ji, bg as Ui, bh as po, bi as _o, bj as Ki, bk as $i, U as qi } from "./chunks/css-a1kmeZqX.js";
import { r as N, g as Ue, h as Yi, I as Xi, d as Zi, e as Ji, i as Qi, c as el, f as tl } from "./chunks/command-manager-CmWZTW7C.js";
import { h as dr, a as wn, b as jn, g as ct, j as Kt, r as nl, u as ol, v as rl, c as sl, o as il, f as ll, s as al } from "./chunks/floating-Cojv6uOA.js";
import { c as Hn } from "./chunks/clsx-OuTLNxxd.js";
import { i as se, d as Ie } from "./chunks/index-BI35NT3p.js";
import { o as cl, l as ul, g as Ke, a as Un, f as xt, c as dl, k as Y, R as Kn, C as hl, j as fl } from "./chunks/rx-state-BNRgEDqt.js";
import { a as gl, c as Ze } from "./chunks/asserts-CpwDJsre.js";
import { c as hr, d as Qe, b as We } from "./chunks/outside-DpurI6XH.js";
import { p as ml } from "./chunks/pick-BLZiDVxr.js";
import { i as fr, r as pl, w as _l } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { g as $n } from "./chunks/_commonjsHelpers-DaMA6jEr.js";
import { I as wl } from "./chunks/index-CeFD99q1.js";
import { v as Cl } from "./chunks/v4-CKZ6klMF.js";
class vl {
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
  return cl(function(t, n) {
    var r = 0;
    t.subscribe(ul(n, function(s) {
      n.next(o.call(e, s, r++));
    }));
  });
}
function wo(o, e, t) {
  return gr(o, t) && mr(e, t);
}
function Ne(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1"), t = parseInt(o.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function gr(o, e) {
  return o >= e.top && o <= e.bottom;
}
function mr(o, e) {
  return o >= e.left && o <= e.right;
}
function Mt(o, e, t) {
  t ? o.classList.add(e) : o.classList.remove(e);
}
function Rl(o) {
  let e = o.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && n.dataset.ignoreAutoSize === void 0 && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function xl(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const bl = 20, yl = 5;
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
    const r = Ke(e, t), s = [n.icon, n.sortOrder].reduce((u, a) => a ? u + 1 : u, 0) * (bl + yl), i = `${n.text ?? ""}`.split(`
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
    return this.getVerticalCellPadding(t) + Rl(e);
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
class J extends vl {
}
class Ae extends J {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: ml(
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
  checkbox: Rs,
  checkboxWrapper: bs,
  checkboxText: nr,
  checkboxInput: tr,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, Sl = 16, On = 6, El = On * 2, Il = 20;
class pr extends fe {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.classList.add(vs, wt.checkbox), s.classList.add(xs, wt.checkboxWrapper), i.type = "checkbox", i.className = wt.checkboxInput, s.appendChild(i), n.icon && s.appendChild(Un(xt(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${ys} ${wt.checkboxText}`, l.innerText = n.label, s.appendChild(l);
    }
    return n.horizontalAlign && r.classList.add(wt[`horizontal_${n.horizontalAlign}`]), r.appendChild(s), i.checked = n.text === "true", s.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: a } = n.gridStore, c = new Ae(n.gridStore.commandContext, [e, t, { text: u }]);
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
    const r = Ke(e, t), s = n.label ? On + r.calculateWidth(n.label) : 0, i = n.icon ? On + Il : 0;
    return Sl + El + s + i + this.getHorizontalCellPadding(n);
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
function Sh(o) {
  const e = new pr(o ?? {});
  return () => e;
}
const Co = !1;
var qn = Array.isArray, kl = Array.prototype.indexOf, Yn = Array.from, _r = Object.defineProperty, et = Object.getOwnPropertyDescriptor, wr = Object.getOwnPropertyDescriptors, Tl = Object.prototype, Ml = Array.prototype, Xn = Object.getPrototypeOf;
const je = () => {
};
function Ll(o) {
  return o();
}
function $t(o) {
  for (var e = 0; e < o.length; e++)
    o[e]();
}
const Re = 2, Cr = 4, nn = 8, Zn = 16, Be = 32, St = 64, qt = 128, _e = 256, Yt = 512, ie = 1024, Pe = 2048, ht = 4096, De = 8192, on = 16384, Hl = 32768, rn = 65536, Ol = 1 << 19, vr = 1 << 20, tt = Symbol("$state"), zl = Symbol("legacy props"), Al = Symbol("");
function Rr(o) {
  return o === this.v;
}
function xr(o, e) {
  return o != o ? e == e : o !== e || o !== null && typeof o == "object" || typeof o == "function";
}
function br(o) {
  return !xr(o, this.v);
}
function Dl(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wl(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Nl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Et = !1, jl = !1;
function Ul() {
  Et = !0;
}
const Jn = 1, Qn = 2, yr = 4, Kl = 8, $l = 16, ql = 1, Yl = 2, le = Symbol();
function Sr(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let V = null;
function vo(o) {
  V = o;
}
function ae(o) {
  return (
    /** @type {T} */
    Er().get(o)
  );
}
function Lt(o, e) {
  return Er().set(o, e), e;
}
function ge(o, e = !1, t) {
  V = {
    p: V,
    c: null,
    e: null,
    m: !1,
    s: o,
    x: null,
    l: null
  }, Et && !e && (V.l = {
    s: null,
    u: null,
    r1: [],
    r2: he(!1)
  });
}
function me(o) {
  const e = V;
  if (e !== null) {
    o !== void 0 && (e.x = o);
    const i = e.e;
    if (i !== null) {
      var t = P, n = B;
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
    V = e.p, e.m = !0;
  }
  return o || /** @type {T} */
  {};
}
function sn() {
  return !Et || V !== null && V.l === null;
}
function Er(o) {
  return V === null && Sr(), V.c ??= new Map(Xl(V) || void 0);
}
function Xl(o) {
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
    equals: Rr,
    rv: 0,
    wv: 0
  };
  return t;
}
function ke(o) {
  return /* @__PURE__ */ Ir(he(o));
}
// @__NO_SIDE_EFFECTS__
function ln(o, e = !1) {
  const t = he(o);
  return e || (t.equals = br), Et && V !== null && V.l !== null && (V.l.s ??= []).push(t), t;
}
function Zl(o, e = !1) {
  return /* @__PURE__ */ Ir(/* @__PURE__ */ ln(o, e));
}
// @__NO_SIDE_EFFECTS__
function Ir(o) {
  return B !== null && !Ce && (B.f & Re) !== 0 && (Me === null ? ca([o]) : Me.push(o)), o;
}
function j(o, e) {
  return B !== null && !Ce && sn() && (B.f & (Re | Zn)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Me === null || !Me.includes(o)) && Gl(), zn(o, e);
}
function zn(o, e) {
  return o.equals(e) || (o.v, o.v = e, o.wv = Vr(), kr(o, Pe), sn() && P !== null && (P.f & ie) !== 0 && (P.f & (Be | St)) === 0 && (Oe === null ? ua([o]) : Oe.push(o))), e;
}
function kr(o, e) {
  var t = o.reactions;
  if (t !== null)
    for (var n = sn(), r = t.length, s = 0; s < r; s++) {
      var i = t[s], l = i.f;
      (l & Pe) === 0 && (!n && i === P || (Le(i, e), (l & (ie | _e)) !== 0 && ((l & Re) !== 0 ? kr(
        /** @type {Derived} */
        i,
        ht
      ) : hn(
        /** @type {Effect} */
        i
      ))));
    }
}
let Jl = !1;
function U(o, e = null, t) {
  if (typeof o != "object" || o === null || tt in o)
    return o;
  const n = Xn(o);
  if (n !== Tl && n !== Ml)
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
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Bl();
        var h = r.get(a);
        return h === void 0 ? (h = he(c.value), r.set(a, h)) : j(h, U(c.value, l)), !0;
      },
      deleteProperty(u, a) {
        var c = r.get(a);
        if (c === void 0)
          a in u && r.set(a, he(le));
        else {
          if (s && typeof a == "string") {
            var h = (
              /** @type {Source<number>} */
              r.get("length")
            ), d = Number(a);
            Number.isInteger(d) && d < h.v && j(h, d);
          }
          j(c, le), Ro(i);
        }
        return !0;
      },
      get(u, a, c) {
        if (a === tt)
          return o;
        var h = r.get(a), d = a in u;
        if (h === void 0 && (!d || et(u, a)?.writable) && (h = he(U(d ? u[a] : le, l)), r.set(a, h)), h !== void 0) {
          var f = H(h);
          return f === le ? void 0 : f;
        }
        return Reflect.get(u, a, c);
      },
      getOwnPropertyDescriptor(u, a) {
        var c = Reflect.getOwnPropertyDescriptor(u, a);
        if (c && "value" in c) {
          var h = r.get(a);
          h && (c.value = H(h));
        } else if (c === void 0) {
          var d = r.get(a), f = d?.v;
          if (d !== void 0 && f !== le)
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
        var c = r.get(a), h = c !== void 0 && c.v !== le || Reflect.has(u, a);
        if (c !== void 0 || P !== null && (!h || et(u, a)?.writable)) {
          c === void 0 && (c = he(h ? U(u[a], l) : le), r.set(a, c));
          var d = H(c);
          if (d === le)
            return !1;
        }
        return h;
      },
      set(u, a, c, h) {
        var d = r.get(a), f = a in u;
        if (s && a === "length")
          for (var w = c; w < /** @type {Source<number>} */
          d.v; w += 1) {
            var g = r.get(w + "");
            g !== void 0 ? j(g, le) : w in u && (g = he(le), r.set(w + "", g));
          }
        d === void 0 ? (!f || et(u, a)?.writable) && (d = he(void 0), j(d, U(c, l)), r.set(a, d)) : (f = d.v !== le, j(d, U(c, l)));
        var b = Reflect.getOwnPropertyDescriptor(u, a);
        if (b?.set && b.set.call(h, c), !f) {
          if (s && typeof a == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), E = Number(a);
            Number.isInteger(E) && E >= y.v && j(y, E + 1);
          }
          Ro(i);
        }
        return !0;
      },
      ownKeys(u) {
        H(i);
        var a = Reflect.ownKeys(u).filter((d) => {
          var f = r.get(d);
          return f === void 0 || f.v !== le;
        });
        for (var [c, h] of r)
          h.v !== le && !(c in u) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Pl();
      }
    }
  );
}
function Ro(o, e = 1) {
  j(o, o.v + e);
}
var xo, Tr, Mr, Lr;
function Ql() {
  if (xo === void 0) {
    xo = window, Tr = /Firefox/.test(navigator.userAgent);
    var o = Element.prototype, e = Node.prototype;
    Mr = et(e, "firstChild").get, Lr = et(e, "nextSibling").get, o.__click = void 0, o.__className = void 0, o.__attributes = null, o.__styles = null, o.__e = void 0, Text.prototype.__t = void 0;
  }
}
function eo(o = "") {
  return document.createTextNode(o);
}
// @__NO_SIDE_EFFECTS__
function Xt(o) {
  return Mr.call(o);
}
// @__NO_SIDE_EFFECTS__
function an(o) {
  return Lr.call(o);
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
function ea(o) {
  o.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function $(o) {
  var e = Re | Pe, t = B !== null && (B.f & Re) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return P === null || t !== null && (t.f & _e) !== 0 ? e |= _e : P.f |= vr, {
    ctx: V,
    deps: null,
    effects: null,
    equals: Rr,
    f: e,
    fn: o,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? P
  };
}
// @__NO_SIDE_EFFECTS__
function ta(o) {
  const e = /* @__PURE__ */ $(o);
  return e.equals = br, e;
}
function Hr(o) {
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
function na(o) {
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
function oa(o) {
  var e, t = P;
  Ye(na(o));
  try {
    Hr(o), e = jr(o);
  } finally {
    Ye(t);
  }
  return e;
}
function Or(o) {
  var e = oa(o), t = (Ge || (o.f & _e) !== 0) && o.deps !== null ? ht : ie;
  Le(o, t), o.equals(e) || (o.v = e, o.wv = Vr());
}
function zr(o) {
  P === null && B === null && Wl(), B !== null && (B.f & _e) !== 0 && P === null && Fl(), ro && Dl();
}
function ra(o, e) {
  var t = e.last;
  t === null ? e.last = e.first = o : (t.next = o, o.prev = t, e.last = o);
}
function ft(o, e, t, n = !0) {
  var r = (o & St) !== 0, s = P, i = {
    ctx: V,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: o | Pe,
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
      so(i), i.f |= Hl;
    } catch (a) {
      throw $e(i), a;
    }
  else e !== null && hn(i);
  var l = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (vr | qt)) === 0;
  if (!l && !r && n && (s !== null && ra(i, s), B !== null && (B.f & Re) !== 0)) {
    var u = (
      /** @type {Derived} */
      B
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
  var e = P !== null && (P.f & Be) !== 0 && V !== null && !V.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      V
    );
    (t.e ??= []).push({
      fn: o,
      effect: P,
      reaction: B
    });
  } else {
    var n = cn(o);
    return n;
  }
}
function sa(o) {
  return zr(), Ar(o);
}
function ia(o) {
  const e = ft(St, o, !0);
  return (t = {}) => new Promise((n) => {
    t.outro ? yt(e, () => {
      $e(e), n(void 0);
    }) : ($e(e), n(void 0));
  });
}
function cn(o) {
  return ft(Cr, o, !1);
}
function Ar(o) {
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
  return ft(nn | Be, o, !0, e);
}
function Dr(o) {
  var e = o.teardown;
  if (e !== null) {
    const t = ro, n = B;
    bo(!0), qe(null);
    try {
      e.call(null);
    } finally {
      bo(t), qe(n);
    }
  }
}
function Fr(o, e = !1) {
  var t = o.first;
  for (o.first = o.last = null; t !== null; ) {
    var n = t.next;
    $e(t, e), t = n;
  }
}
function la(o) {
  for (var e = o.first; e !== null; ) {
    var t = e.next;
    (e.f & Be) === 0 && $e(e), e = t;
  }
}
function $e(o, e = !0) {
  var t = !1;
  if ((e || (o.f & Ol) !== 0) && o.nodes_start !== null) {
    for (var n = o.nodes_start, r = o.nodes_end; n !== null; ) {
      var s = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ an(n)
      );
      n.remove(), n = s;
    }
    t = !0;
  }
  Fr(o, e && !t), tn(o, 0), Le(o, on);
  var i = o.transitions;
  if (i !== null)
    for (const u of i)
      u.stop();
  Dr(o);
  var l = o.parent;
  l !== null && l.first !== null && Wr(o), o.next = o.prev = o.teardown = o.ctx = o.deps = o.fn = o.nodes_start = o.nodes_end = null;
}
function Wr(o) {
  var e = o.parent, t = o.prev, n = o.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), e !== null && (e.first === o && (e.first = n), e.last === o && (e.last = t));
}
function yt(o, e) {
  var t = [];
  no(o, t, !0), Nr(t, () => {
    $e(o), e && e();
  });
}
function Nr(o, e) {
  var t = o.length;
  if (t > 0) {
    var n = () => --t || e();
    for (var r of o)
      r.out(n);
  } else
    e();
}
function no(o, e, t) {
  if ((o.f & De) === 0) {
    if (o.f ^= De, o.transitions !== null)
      for (const i of o.transitions)
        (i.is_global || t) && e.push(i);
    for (var n = o.first; n !== null; ) {
      var r = n.next, s = (n.f & rn) !== 0 || (n.f & Be) !== 0;
      no(n, e, s ? t : !1), n = r;
    }
  }
}
function Zt(o) {
  Br(o, !0);
}
function Br(o, e) {
  if ((o.f & De) !== 0) {
    o.f ^= De, (o.f & ie) === 0 && (o.f ^= ie), It(o) && (Le(o, Pe), hn(o));
    for (var t = o.first; t !== null; ) {
      var n = t.next, r = (t.f & rn) !== 0 || (t.f & Be) !== 0;
      Br(t, r ? e : !1), t = n;
    }
    if (o.transitions !== null)
      for (const s of o.transitions)
        (s.is_global || e) && s.in();
  }
}
let Jt = [];
function aa() {
  var o = Jt;
  Jt = [], $t(o);
}
function oo(o) {
  Jt.length === 0 && queueMicrotask(aa), Jt.push(o);
}
let Nt = !1, An = !1, Qt = null, Bt = !1, ro = !1;
function bo(o) {
  ro = o;
}
let Pt = [];
let B = null, Ce = !1;
function qe(o) {
  B = o;
}
let P = null;
function Ye(o) {
  P = o;
}
let Me = null;
function ca(o) {
  Me = o;
}
let re = null, de = 0, Oe = null;
function ua(o) {
  Oe = o;
}
let Pr = 1, en = 0, Ge = !1;
function Vr() {
  return ++Pr;
}
function It(o) {
  var e = o.f;
  if ((e & Pe) !== 0)
    return !0;
  if ((e & ht) !== 0) {
    var t = o.deps, n = (e & _e) !== 0;
    if (t !== null) {
      var r, s, i = (e & Yt) !== 0, l = n && P !== null && !Ge, u = t.length;
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
        if (s = t[r], It(
          /** @type {Derived} */
          s
        ) && Or(
          /** @type {Derived} */
          s
        ), s.wv > o.wv)
          return !0;
    }
    (!n || P !== null && !Ge) && Le(o, ie);
  }
  return !1;
}
function da(o, e) {
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
function ha(o) {
  return (o.f & on) === 0 && (o.parent === null || (o.parent.f & qt) === 0);
}
function dn(o, e, t, n) {
  if (Nt) {
    if (t === null && (Nt = !1), ha(e))
      throw o;
    return;
  }
  t !== null && (Nt = !0);
  {
    da(o, e);
    return;
  }
}
function Gr(o, e, t = !0) {
  var n = o.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      (s.f & Re) !== 0 ? Gr(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? Le(s, Pe) : (s.f & ie) !== 0 && Le(s, ht), hn(
        /** @type {Effect} */
        s
      ));
    }
}
function jr(o) {
  var e = re, t = de, n = Oe, r = B, s = Ge, i = Me, l = V, u = Ce, a = o.f;
  re = /** @type {null | Value[]} */
  null, de = 0, Oe = null, Ge = (a & _e) !== 0 && (Ce || !Bt || B === null), B = (a & (Be | St)) === 0 ? o : null, Me = null, vo(o.ctx), Ce = !1, en++;
  try {
    var c = (
      /** @type {Function} */
      (0, o.fn)()
    ), h = o.deps;
    if (re !== null) {
      var d;
      if (tn(o, de), h !== null && de > 0)
        for (h.length = de + re.length, d = 0; d < re.length; d++)
          h[de + d] = re[d];
      else
        o.deps = h = re;
      if (!Ge)
        for (d = de; d < h.length; d++)
          (h[d].reactions ??= []).push(o);
    } else h !== null && de < h.length && (tn(o, de), h.length = de);
    if (sn() && Oe !== null && !Ce && h !== null && (o.f & (Re | ht | Pe)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Oe.length; d++)
        Gr(
          Oe[d],
          /** @type {Effect} */
          o
        );
    return r !== null && en++, c;
  } finally {
    re = e, de = t, Oe = n, B = r, Ge = s, Me = i, vo(l), Ce = u;
  }
}
function fa(o, e) {
  let t = e.reactions;
  if (t !== null) {
    var n = kl.call(t, o);
    if (n !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[n] = t[r], t.pop());
    }
  }
  t === null && (e.f & Re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(e)) && (Le(e, ht), (e.f & (_e | Yt)) === 0 && (e.f ^= Yt), Hr(
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
      fa(o, t[n]);
}
function so(o) {
  var e = o.f;
  if ((e & on) === 0) {
    Le(o, ie);
    var t = P, n = V, r = Bt;
    P = o, Bt = !0;
    try {
      (e & Zn) !== 0 ? la(o) : Fr(o), Dr(o);
      var s = jr(o);
      o.teardown = typeof s == "function" ? s : null, o.wv = Pr;
      var i = o.deps, l;
      Co && jl && o.f & Pe;
    } catch (u) {
      dn(u, o, t, n || o.ctx);
    } finally {
      Bt = r, P = t;
    }
  }
}
function ga() {
  try {
    Nl();
  } catch (o) {
    if (Qt !== null)
      dn(o, Qt, null);
    else
      throw o;
  }
}
function ma() {
  try {
    for (var o = 0; Pt.length > 0; ) {
      o++ > 1e3 && ga();
      var e = Pt, t = e.length;
      Pt = [];
      for (var n = 0; n < t; n++) {
        var r = e[n];
        (r.f & ie) === 0 && (r.f ^= ie);
        var s = _a(r);
        pa(s);
      }
    }
  } finally {
    An = !1, Qt = null;
  }
}
function pa(o) {
  var e = o.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var n = o[t];
      if ((n.f & (on | De)) === 0)
        try {
          It(n) && (so(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Wr(n) : n.fn = null));
        } catch (r) {
          dn(r, n, null, n.ctx);
        }
    }
}
function hn(o) {
  An || (An = !0, queueMicrotask(ma));
  for (var e = Qt = o; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if ((t & (St | Be)) !== 0) {
      if ((t & ie) === 0) return;
      e.f ^= ie;
    }
  }
  Pt.push(e);
}
function _a(o) {
  var e = [], t = o.first;
  e: for (; t !== null; ) {
    var n = t.f, r = (n & Be) !== 0, s = r && (n & ie) !== 0, i = t.next;
    if (!s && (n & De) === 0) {
      if ((n & Cr) !== 0)
        e.push(t);
      else if (r)
        t.f ^= ie;
      else {
        var l = B;
        try {
          B = t, It(t) && so(t);
        } catch (c) {
          dn(c, t, null, t.ctx);
        } finally {
          B = l;
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
  if (B !== null && !Ce) {
    Me !== null && Me.includes(o) && Vl();
    var n = B.deps;
    o.rv < en && (o.rv = en, re === null && n !== null && n[de] === o ? de++ : re === null ? re = [o] : (!Ge || !re.includes(o)) && re.push(o));
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
  o, It(r) && Or(r)), o.v;
}
function gt(o) {
  var e = Ce;
  try {
    return Ce = !0, o();
  } finally {
    Ce = e;
  }
}
const wa = -7169;
function Le(o, e) {
  o.f = o.f & wa | e;
}
function Ca(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (tt in o)
      Dn(o);
    else if (!Array.isArray(o))
      for (let e in o) {
        const t = o[e];
        typeof t == "object" && t && tt in t && Dn(t);
      }
  }
}
function Dn(o, e = /* @__PURE__ */ new Set()) {
  if (typeof o == "object" && o !== null && // We don't want to traverse DOM elements
  !(o instanceof EventTarget) && !e.has(o)) {
    e.add(o), o instanceof Date && o.getTime();
    for (let n in o)
      try {
        Dn(o[n], e);
      } catch {
      }
    const t = Xn(o);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const n = wr(t);
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
const va = ["touchstart", "touchmove"];
function Ra(o) {
  return va.includes(o);
}
function xa(o) {
  var e = B, t = P;
  qe(null), Ye(null);
  try {
    return o();
  } finally {
    qe(e), Ye(t);
  }
}
const Ur = /* @__PURE__ */ new Set(), Fn = /* @__PURE__ */ new Set();
function ba(o, e, t, n = {}) {
  function r(s) {
    if (n.capture || vt.call(e, s), !s.cancelBubble)
      return xa(() => t?.call(this, s));
  }
  return o.startsWith("pointer") || o.startsWith("touch") || o === "wheel" ? oo(() => {
    e.addEventListener(o, r, n);
  }) : e.addEventListener(o, r, n), r;
}
function ya(o, e, t, n, r) {
  var s = { capture: n, passive: r }, i = ba(o, e, t, s);
  (e === document.body || e === window || e === document) && to(() => {
    e.removeEventListener(o, i, s);
  });
}
function fn(o) {
  for (var e = 0; e < o.length; e++)
    Ur.add(o[e]);
  for (var t of Fn)
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
    _r(o, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var c = B, h = P;
    qe(null), Ye(null);
    try {
      for (var d, f = []; s !== null; ) {
        var w = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s["__" + n];
          if (g !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          o.target === s))
            if (qn(g)) {
              var [b, ...y] = g;
              b.apply(s, [o, ...y]);
            } else
              g.call(s, o);
        } catch (E) {
          d ? f.push(E) : d = E;
        }
        if (o.cancelBubble || w === e || w === null)
          break;
        s = w;
      }
      if (d) {
        for (let E of f)
          queueMicrotask(() => {
            throw E;
          });
        throw d;
      }
    } finally {
      o.__root = e, delete o.currentTarget, qe(c), Ye(h);
    }
  }
}
function Sa(o) {
  var e = document.createElement("template");
  return e.innerHTML = o, e.content;
}
function Wn(o, e) {
  var t = (
    /** @type {Effect} */
    P
  );
  t.nodes_start === null && (t.nodes_start = o, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function te(o, e) {
  var t = (e & ql) !== 0, n = (e & Yl) !== 0, r, s = !o.startsWith("<!>");
  return () => {
    r === void 0 && (r = Sa(s ? o : "<!>" + o), t || (r = /** @type {Node} */
    /* @__PURE__ */ Xt(r)));
    var i = (
      /** @type {TemplateNode} */
      n || Tr ? document.importNode(r, !0) : r.cloneNode(!0)
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
function Kr(o, e) {
  return Ea(o, e);
}
const st = /* @__PURE__ */ new Map();
function Ea(o, { target: e, anchor: t, props: n = {}, events: r, context: s, intro: i = !0 }) {
  Ql();
  var l = /* @__PURE__ */ new Set(), u = (h) => {
    for (var d = 0; d < h.length; d++) {
      var f = h[d];
      if (!l.has(f)) {
        l.add(f);
        var w = Ra(f);
        e.addEventListener(f, vt, { passive: w });
        var g = st.get(f);
        g === void 0 ? (document.addEventListener(f, vt, { passive: w }), st.set(f, 1)) : st.set(f, g + 1);
      }
    }
  };
  u(Yn(Ur)), Fn.add(u);
  var a = void 0, c = ia(() => {
    var h = t ?? e.appendChild(eo());
    return ut(() => {
      if (s) {
        ge({});
        var d = (
          /** @type {ComponentContext} */
          V
        );
        d.c = s;
      }
      r && (n.$$events = r), a = o(h, n) || {}, s && me();
    }), () => {
      for (var d of l) {
        e.removeEventListener(d, vt);
        var f = (
          /** @type {number} */
          st.get(d)
        );
        --f === 0 ? (document.removeEventListener(d, vt), st.delete(d)) : st.set(d, f);
      }
      Fn.delete(u), h !== t && h.parentNode?.removeChild(h);
    };
  });
  return Nn.set(a, c), a;
}
let Nn = /* @__PURE__ */ new WeakMap();
function $r(o, e) {
  const t = Nn.get(o);
  return t ? (Nn.delete(o), t(e)) : Promise.resolve();
}
function Fe(o, e, t = !1) {
  var n = o, r = null, s = null, i = le, l = t ? rn : 0, u = !1;
  const a = (h, d = !0) => {
    u = !0, c(d, h);
  }, c = (h, d) => {
    i !== (i = h) && (i ? (r ? Zt(r) : d && (r = ut(() => d(n))), s && yt(s, () => {
      s = null;
    })) : (s ? Zt(s) : d && (s = ut(() => d(n))), r && yt(r, () => {
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
function Ia(o, e, t, n) {
  for (var r = [], s = e.length, i = 0; i < s; i++)
    no(e[i].e, r, !0);
  var l = s > 0 && r.length === 0 && t !== null;
  if (l) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    ea(u), u.append(
      /** @type {Element} */
      t
    ), n.clear(), Ve(o, e[0].prev, e[s - 1].next);
  }
  Nr(r, () => {
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
  var c = null, h = !1, d = /* @__PURE__ */ ta(() => {
    var f = t();
    return qn(f) ? f : f == null ? [] : Yn(f);
  });
  un(() => {
    var f = H(d), w = f.length;
    h && w === 0 || (h = w === 0, ka(f, l, i, r, e, n, t), s !== null && (w === 0 ? c ? Zt(c) : c = ut(() => s(i)) : c !== null && yt(c, () => {
      c = null;
    })), H(d));
  });
}
function ka(o, e, t, n, r, s, i) {
  var l = (r & Kl) !== 0, u = (r & (Jn | Qn)) !== 0, a = o.length, c = e.items, h = e.first, d = h, f, w = null, g, b = [], y = [], E, S, C, p;
  if (l)
    for (p = 0; p < a; p += 1)
      E = o[p], S = s(E, p), C = c.get(S), C !== void 0 && (C.a?.measure(), (g ??= /* @__PURE__ */ new Set()).add(C));
  for (p = 0; p < a; p += 1) {
    if (E = o[p], S = s(E, p), C = c.get(S), C === void 0) {
      var _ = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : t;
      w = Ma(
        _,
        e,
        w,
        w === null ? e.first : w.next,
        E,
        S,
        p,
        n,
        r,
        i
      ), c.set(S, w), b = [], y = [], d = w.next;
      continue;
    }
    if (u && Ta(C, E, p, r), (C.e.f & De) !== 0 && (Zt(C.e), l && (C.a?.unfix(), (g ??= /* @__PURE__ */ new Set()).delete(C))), C !== d) {
      if (f !== void 0 && f.has(C)) {
        if (b.length < y.length) {
          var I = y[0], R;
          w = I.prev;
          var m = b[0], x = b[b.length - 1];
          for (R = 0; R < b.length; R += 1)
            yo(b[R], I, t);
          for (R = 0; R < y.length; R += 1)
            f.delete(y[R]);
          Ve(e, m.prev, x.next), Ve(e, w, m), Ve(e, x, I), d = I, w = x, p -= 1, b = [], y = [];
        } else
          f.delete(C), yo(C, d, t), Ve(e, C.prev, C.next), Ve(e, C, w === null ? e.first : w.next), Ve(e, w, C), w = C;
        continue;
      }
      for (b = [], y = []; d !== null && d.k !== S; )
        (d.e.f & De) === 0 && (f ??= /* @__PURE__ */ new Set()).add(d), y.push(d), d = d.next;
      if (d === null)
        continue;
      C = d;
    }
    b.push(C), w = C, d = C.next;
  }
  if (d !== null || f !== void 0) {
    for (var v = f === void 0 ? [] : Yn(f); d !== null; )
      (d.e.f & De) === 0 && v.push(d), d = d.next;
    var T = v.length;
    if (T > 0) {
      var k = (r & yr) !== 0 && a === 0 ? t : null;
      if (l) {
        for (p = 0; p < T; p += 1)
          v[p].a?.measure();
        for (p = 0; p < T; p += 1)
          v[p].a?.fix();
      }
      Ia(e, v, k, c);
    }
  }
  l && oo(() => {
    if (g !== void 0)
      for (C of g)
        C.a?.apply();
  }), P.first = e.first && e.first.e, P.last = w && w.e;
}
function Ta(o, e, t, n) {
  (n & Jn) !== 0 && zn(o.v, e), (n & Qn) !== 0 ? zn(
    /** @type {Value<number>} */
    o.i,
    t
  ) : o.i = t;
}
function Ma(o, e, t, n, r, s, i, l, u, a) {
  var c = (u & Jn) !== 0, h = (u & $l) === 0, d = c ? h ? /* @__PURE__ */ ln(r) : he(r) : r, f = (u & Qn) === 0 ? i : he(i), w = {
    i: f,
    v: d,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: n
  };
  try {
    return w.e = ut(() => l(o, d, f, a), Jl), w.e.prev = t && t.e, w.e.next = n && n.e, t === null ? e.first = w : (t.next = w, t.e.next = w.e), n !== null && (n.prev = w, n.e.prev = w.e), w;
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
function La(o, e, t) {
  var n = o, r, s;
  un(() => {
    r !== (r = e()) && (s && (yt(s), s = null), r && (s = ut(() => t(n, r))));
  }, rn);
}
function qr(o, e, t) {
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
function Ha(o, e, t) {
  var n = o == null ? "" : "" + o;
  return n === "" ? null : n;
}
function K(o, e, t, n, r, s) {
  var i = o.__className;
  if (i !== t) {
    var l = Ha(t);
    l == null ? o.removeAttribute("class") : o.className = l, o.__className = t;
  }
  return s;
}
function Oa(o, e) {
  var t = o.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  o.value === e && (e !== 0 || o.nodeName !== "PROGRESS") || (o.value = e ?? "");
}
function ve(o, e, t, n) {
  var r = o.__attributes ??= {};
  r[e] !== (r[e] = t) && (e === "style" && "__styles" in o && (o.__styles = {}), e === "loading" && (o[Al] = t), t == null ? o.removeAttribute(e) : typeof t != "string" && za(o).includes(e) ? o[e] = t : o.setAttribute(e, t));
}
var So = /* @__PURE__ */ new Map();
function za(o) {
  var e = So.get(o.nodeName);
  if (e) return e;
  So.set(o.nodeName, e = []);
  for (var t, n = o, r = Element.prototype; r !== n; ) {
    t = wr(n);
    for (var s in t)
      t[s].set && e.push(s);
    n = Xn(n);
  }
  return e;
}
function Aa(o, e, t, n) {
  var r = o.__styles ??= {};
  r[e] !== t && (r[e] = t, t == null ? o.style.removeProperty(e) : o.style.setProperty(e, t, ""));
}
function Da(o, e, t) {
  var n = et(o, e);
  n && n.set && (o[e] = t, to(() => {
    o[e] = null;
  }));
}
function Eo(o, e) {
  return o === e || o?.[tt] === e;
}
function He(o = {}, e, t, n) {
  return cn(() => {
    var r, s;
    return Ar(() => {
      r = s, s = [], gt(() => {
        o !== t(...s) && (e(o, ...s), r && Eo(t(...r), o) && e(null, ...r));
      });
    }), () => {
      oo(() => {
        s && Eo(t(...s), o) && e(null, ...s);
      });
    };
  }), o;
}
function Fa(o = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    V
  ), t = e.l.u;
  if (!t) return;
  let n = () => Ca(e.s);
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
  t.b.length && sa(() => {
    Io(e, n), $t(t.b);
  }), bt(() => {
    const r = gt(() => t.m.map(Ll));
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
function Wa(o, e) {
  return {
    subscribe: Yr(o, e).subscribe
  };
}
function Yr(o, e = je) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function r(l) {
    if (xr(o, l) && (o = l, t)) {
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
function Na(o, e, t) {
  const n = !Array.isArray(o), r = n ? [o] : o;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Wa(t, (i, l) => {
    let u = !1;
    const a = [];
    let c = 0, h = je;
    const d = () => {
      if (c)
        return;
      h();
      const w = e(n ? a[0] : a, i, l);
      s ? i(w) : h = typeof w == "function" ? w : je;
    }, f = r.map(
      (w, g) => lo(
        w,
        (b) => {
          a[g] = b, c &= ~(1 << g), u && d();
        },
        () => {
          c |= 1 << g;
        }
      )
    );
    return u = !0, d(), function() {
      $t(f), h(), u = !1;
    };
  });
}
function Ba(o) {
  let e;
  return lo(o, (t) => e = t)(), e;
}
let Ht = !1, Bn = Symbol();
function Pa(o, e, t) {
  const n = t[e] ??= {
    store: null,
    source: /* @__PURE__ */ ln(void 0),
    unsubscribe: je
  };
  if (n.store !== o && !(Bn in t))
    if (n.unsubscribe(), n.store = o ?? null, o == null)
      n.source.v = void 0, n.unsubscribe = je;
    else {
      var r = !0;
      n.unsubscribe = lo(o, (s) => {
        r ? n.source.v = s : j(n.source, s);
      }), r = !1;
    }
  return o && Bn in t ? Ba(o) : H(n.source);
}
function Va() {
  const o = {};
  function e() {
    to(() => {
      for (var t in o)
        o[t].unsubscribe();
      _r(o, Bn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [o, e];
}
function Ga(o) {
  var e = Ht;
  try {
    return Ht = !1, [o(), Ht];
  } finally {
    Ht = e;
  }
}
const ja = {
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
function Ua(o, e, t) {
  return new Proxy(
    { props: o, exclude: e },
    ja
  );
}
function Ka(o, e, t, n) {
  var r = !1, s;
  [s, r] = Ga(() => (
    /** @type {V} */
    o[e]
  ));
  var i = tt in o || zl in o, l = (et(o, e)?.set ?? (i && e in o && ((y) => o[e] = y))) || void 0, u = (
    /** @type {V} */
    n
  ), a = !0, c = !1, h = () => (c = !0, a && (a = !1, u = /** @type {V} */
  n), u), d;
  if (d = () => {
    var y = (
      /** @type {V} */
      o[e]
    );
    return y === void 0 ? h() : (a = !0, c = !1, y);
  }, l) {
    var f = o.$$legacy;
    return function(y, E) {
      return arguments.length > 0 ? ((!E || f || r) && l(E ? d() : y), y) : d();
    };
  }
  var w = !1, g = /* @__PURE__ */ ln(s), b = /* @__PURE__ */ $(() => {
    var y = d(), E = H(g);
    return w ? (w = !1, E) : g.v = y;
  });
  return function(y, E) {
    if (arguments.length > 0) {
      const S = E ? H(b) : U(y);
      return b.equals(S) || (w = !0, j(g, S), c && u !== void 0 && (u = S), gt(() => H(b))), y;
    }
    return H(b);
  };
}
function kt(o) {
  V === null && Sr(), Et && V.l !== null ? $a(V).m.push(o) : bt(() => {
    const e = gt(o);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function $a(o) {
  var e = (
    /** @type {ComponentContextLegacy} */
    o.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
const qa = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(qa);
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
    let d;
    if (t.key && ((i = t.debug) != null && i.call(t)) && (d = Date.now()), r = e(...c), t.key && ((l = t.debug) != null && l.call(t))) {
      const f = Math.round((Date.now() - a) * 100) / 100, w = Math.round((Date.now() - d) * 100) / 100, g = w / 16, b = (y, E) => {
        for (y = String(y); y.length < E; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${b(w, 5)} /${b(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
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
const Ya = (o, e) => Math.abs(o - e) < 1, Xa = (o, e, t) => {
  let n;
  return function(...r) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, r), t);
  };
}, Za = (o) => o, Ja = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, Qa = (o, e) => {
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
}, ko = {
  passive: !0
}, To = typeof window > "u" ? !0 : "onscrollend" in window, ec = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let r = 0;
  const s = o.options.useScrollendEvent && To ? () => {
  } : Xa(
    n,
    () => {
      e(r, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (c) => () => {
    const { horizontal: h, isRtl: d } = o.options;
    r = h ? t.scrollLeft * (d && -1 || 1) : t.scrollTop, s(), e(r, c);
  }, l = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", l, ko);
  const a = o.options.useScrollendEvent && To;
  return a && t.addEventListener("scrollend", u, ko), () => {
    t.removeEventListener("scroll", l), a && t.removeEventListener("scrollend", u);
  };
}, tc = (o, e, t) => {
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
}, nc = (o, {
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
class oc {
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
        getItemKey: Za,
        rangeExtractor: Ja,
        onChange: () => {
        },
        measureElement: tc,
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
          const h = s(c), d = this.options.lanes === 1 ? a[c - 1] : this.getFurthestMeasurement(a, c), f = d ? d.end + this.options.gap : n + r, w = l.get(h), g = typeof w == "number" ? w : this.options.estimateSize(c), b = f + g, y = d ? d.lane : c % this.options.lanes;
          a[c] = {
            index: c,
            start: f,
            size: g,
            end: b,
            key: h,
            lane: y
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
      (t, n, r, s) => this.range = t.length > 0 && n > 0 ? rc({
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
          n[Xr(
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
          Ya(a, this.getScrollOffset()) || this.scrollToIndex(t, { align: l, behavior: r });
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
const Xr = (o, e, t, n) => {
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
function rc({
  measurements: o,
  outerSize: e,
  scrollOffset: t,
  lanes: n
}) {
  const r = o.length - 1;
  let i = Xr(
    0,
    r,
    (u) => o[u].start,
    t
  ), l = i;
  for (; l < r && o[l].end < t + e; )
    l++;
  return n > 1 && (i = Math.max(0, i - i % n), l = Math.min(r, l + (n - 1 - l % n))), { startIndex: i, endIndex: l };
}
function sc(o) {
  const e = new oc(o), t = e.setOptions;
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
  return n = Yr(e, () => (r(o), e._didMount())), Na(n, (s) => Object.assign(s, { setOptions: r }));
}
function ic(o) {
  return sc({
    observeElementRect: Qa,
    observeElementOffset: ec,
    scrollToFn: nc,
    ...o
  });
}
var lc = /* @__PURE__ */ te('<div><button type="button"><i></i> <span> </span></button></div>');
function ac(o, e) {
  ge(e, !0);
  var t = lc(), n = ne(t);
  K(n, 1, X(Ss)), n.__click = function(...l) {
    e.onClick?.apply(this, l);
  };
  var r = ne(n);
  K(r, 1, `${Es} ir-icon ir-icon--check`);
  var s = Te(r, 2), i = ne(s);
  xe(() => {
    K(t, 1, X([
      Is,
      e.isSelected && ks
    ])), ve(t, "data-value", e.value), ve(t, "style", `position: absolute; top: ${e.top ?? ""}px; width: 100%;`), ve(n, "title", e.text), dt(i, e.text);
  }), q(o, t), me();
}
fn(["click"]);
const Mo = 26;
var cc = /* @__PURE__ */ te("<div></div>"), uc = /* @__PURE__ */ te("<div><!></div>");
function dc(o, e) {
  ge(e, !0);
  const [t, n] = Va(), r = () => Pa(H(l), "$virtualizer", t);
  let s = ke(!1), i, l = /* @__PURE__ */ $(() => H(s) === !1 ? null : ic({
    count: e.items.length,
    getScrollElement: () => i,
    estimateSize: () => Mo,
    overscan: 4
  }));
  kt(() => {
    const y = dr(e.refElement, i, "bottom-start");
    return j(s, !0), () => y();
  });
  const u = e.refElement.offsetWidth, a = Math.max(u, e.breakWidth), c = Math.max(e.contentWidth, u), h = () => {
    e.selectedItem && (i.scrollTop = e.items.indexOf(e.selectedItem) * Mo);
  };
  function d() {
    return i;
  }
  var f = uc();
  ve(f, "style", `width: ${c ?? ""}px; max-width: ${a ?? ""}px;`);
  var w = ne(f);
  {
    var g = (y) => {
      var E = cc();
      K(E, 1, X(Ts)), gn(E, 5, () => r().getVirtualItems(), (S) => S.index, (S, C) => {
        const p = /* @__PURE__ */ $(() => e.selectedItem === e.items[H(C).index]);
        ac(S, {
          get top() {
            return H(C).start;
          },
          get isSelected() {
            return H(p);
          },
          get text() {
            return e.items[H(C).index].text;
          },
          get value() {
            return e.items[H(C).index].value;
          },
          onClick: () => e.onItemClick(e.items[H(C).index])
        });
      }), qr(E, (S) => h?.()), xe((S) => ve(E, "style", `position: relative; height: ${S ?? ""}px;`), [() => r().getTotalSize()]), q(y, E);
    };
    Fe(w, (y) => {
      r() && y(g);
    });
  }
  He(f, (y) => i = y, () => i), xe(() => {
    K(f, 1, X([
      Ms,
      dl.zIndex.popover,
      "is-expanded"
    ])), ve(f, "data-row", e.row), ve(f, "data-col", e.col);
  }), q(o, f);
  var b = me({ getDropdownElement: d });
  return n(), b;
}
const Ot = { select: Hs, selectInput: Os, selectInputNative: zs, selectInputIcon: As }, Lo = /* @__PURE__ */ new WeakMap(), hc = 20, fc = 4, Ho = hc + fc, gc = 18;
class mc extends fe {
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
    } = this, { element: u } = wn({ tag: "div", className: Hn(Ls, Ot.select, Ot.selectInput) }), { element: a } = wn({ tag: "span", className: Ot.selectInputNative }), { element: c } = wn({ tag: "i", className: Hn(Ot.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), u.setAttribute("data-has-px", "");
    const h = n.text === "" || n.text === null || n.text === void 0;
    s && u.classList.add("is-editable");
    let d = this._getSelectedItemOrNull(n.text);
    const f = d !== null;
    d ? (a.textContent = l(d.value, d.text, !1), n.value = d.value) : r ? (a.textContent = l(n.value, n.text, !0), n.value = n.text) : (a.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    r && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !h && !f && (u.dataset.error = "true");
    let w = null;
    const g = hr({
      eventElements: [u],
      clickOutsideFunc: () => b.hide(),
      getEventElements() {
        return w ? [w.getDropdownElement()] : [];
      }
    }), b = {
      show: () => {
        this._isExpanded = !0, y.create(), g.create(), this._beforeValue = n.value, this._beforeText = n.text, u.classList.add("is-expanded");
        const { breakWidth: S, contentWidth: C } = this._getCellWidthInfo(n);
        w = Kr(dc, {
          target: ct("popover"),
          props: {
            row: e,
            col: t,
            contentWidth: C,
            breakWidth: S,
            selectedItem: d,
            items: this._items,
            refElement: u,
            onItemClick: (p) => {
              const { value: _, text: I } = p, R = new Ae(n.gridStore.commandContext, [e, t, { text: I, value: _ }]);
              d = p, R.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, _, I), R.onExecute = () => this.onChange(e, t, _, I, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new Ue(
                "Change select menu",
                R
              )), n.text = p[this._mappingType], n.value = _, a.textContent = l(_, I, !1), u.dataset.error && delete u.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, _, I, this._beforeValue, this._beforeText), b.hide();
            }
          }
        });
      },
      hide: () => {
        this._isExpanded = !1, u.classList.remove("is-expanded"), y.destroy(), g.destroy(), w && $r(w);
      }
    }, y = jn(b), E = () => {
      u.classList.contains("is-expanded") ? b.hide() : b.show();
    };
    return u.onclick = (S) => {
      s && S.target !== c || E();
    }, u.appendChild(a), u.appendChild(c), u;
  }
  onChange(e, t, n, r, s, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const r = Ke(e, t), s = this._itemTextMap.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !s), l = r.calculateWidth(i);
    return Ho + l + this.getHorizontalCellPadding(n);
  }
  _getDropdownWidth(e, t, n) {
    const r = Ke(e, t), s = this._items.reduce((i, l) => Math.max(i, r.calculateWidth(l.text)), 0);
    return Ho + s + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const r = Lo.get(this);
    if (r) return r;
    const s = this._getDropdownWidth(e, t, n);
    return Lo.set(this, s), s;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + gc;
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
const Eh = (o) => {
  const e = new mc(o);
  return () => e;
}, xn = { input: Ds, inputNative: Vn, inputSuffix: or }, pc = 28, at = /* @__PURE__ */ new WeakMap();
class _c extends fe {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = se.t("datePicker.dateFormat"),
    minDate: n = Kt().getStoreValue("datePicker.minDate"),
    maxDate: r = Kt().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: s = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = r, this._allowedEmptyString = s, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return Ke(e, t).calculateWidth(n.text || this._format) + pc + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("input"), i = document.createElement("button"), l = document.createElement("i"), {
      _minDate: u,
      _maxDate: a,
      _format: c,
      _allowedEmptyString: h
    } = this;
    if (s.readOnly = !0, s.maxLength = c.length, r.setAttribute("data-has-px", ""), r.classList.add(xn.input, Fs), s.classList.add(xn.inputNative), i.classList.add(xn.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), s.type = "text", s.placeholder = c, n.text !== "") {
      const f = Ie(n.text, c, !0);
      f.isValid() || (n.text = at.get(n)), (f.isBefore(u) || f.isAfter(a)) && (n.text = at.get(n));
    }
    !h && (n.text === "" || n.text === void 0) && (n.text = at.has(n) ? at.get(n) : Ie().format(c)), s.value = n.text || "", at.set(n, n.text ?? ""), i.appendChild(l), r.appendChild(s), r.appendChild(i);
    const d = Yi({
      uuid: Cl(),
      refElement: r,
      minDate: u,
      maxDate: a,
      onClick: (f) => {
        const w = n.text, g = Ie(f).format(c), b = new Ae(n.gridStore.commandContext, [e, t, { text: g }]);
        b.onUndo = () => {
          this.onDateClick(e, t, w ?? "");
        }, b.onExecute = () => {
          this.onDateClick(e, t, g);
        }, n.gridStore.commandManager.pushCommandBlock(new Ue("Change datePicker", b)), s.value = g, n.text = g, at.set(n, g), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, g), d.hide();
      }
    });
    return i.onclick = () => {
      if (!d.visible) {
        const f = Ie(n.text, c, !0);
        f.isValid() ? d.update(f.toDate(), f.toDate()) : d.update(/* @__PURE__ */ new Date(), null), d.show();
      }
    }, r;
  }
  get renderType() {
    return "datePicker";
  }
}
const Ih = (o) => {
  const e = new _c(o);
  return () => e;
}, zt = {
  progress: Ns,
  progressVariants: Bs
}, wc = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, Cc = 100, vc = 100;
class Rc extends fe {
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
    u.setAttribute("data-has-px", ""), u.className = Ws, a.className = zt.progress;
    const c = n.intent ?? l;
    c && a.classList.add(`${zt.progress}--${c}`);
    const d = (Y(parseFloat(n.text || "0"), r, s) - r) / (s - r) * Cc;
    return ze(a, {
      [zt.progressVariants.progressPercent]: `${d}%`,
      [zt.progressVariants.progressText]: `'${d.toFixed(i)}%'`
    }), u.appendChild(a), u;
  }
  getCellInnerWidth(e, t, n) {
    return vc + this.getHorizontalCellPadding(n);
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
const kh = (o = wc) => {
  const e = new Rc(o);
  return () => e;
}, xc = 20, bc = 4, yc = 24, Sc = 24, Ec = 29, Oo = {
  primary: Ks,
  secondary: Us,
  tertiary: js,
  transparent: Gs,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Ic extends fe {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = Ec : e.outlineStyle ? this._extraWidth = Sc : this._extraWidth = 0;
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
    a.className = Ps, c.classList.add(Vs, "button"), c.dataset.ignoreAutoSize = "";
    const h = n.intent ?? i;
    h && c.classList.add(Oo[h]), s ? (a.setAttribute("data-has-px", ""), a.classList.add($s)) : r && a.classList.add(qs), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(Oo[n.horizontalAlign]), c.onclick = (w) => this.onClick(w, e, t);
    const d = n.icon ?? l, f = r ? n.text ?? "" : n.label ?? u ?? "";
    if (d) {
      const w = document.createElement("i");
      w.className = `${Ys} ir-icon ${xt(d)}`, c.appendChild(w);
    }
    if (f) {
      const w = Qe("span");
      if (w.innerText = f, r) {
        const g = document.createElement("div");
        w.classList.add("text--multi-ellipsis"), g.setAttribute("data-has-px", ""), n.lineClamp === void 0 ? w.style.removeProperty("-webkit-line-clamp") : w.style.setProperty("-webkit-line-clamp", n.lineClamp), g.appendChild(w), a.insertAdjacentElement("afterbegin", g);
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
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? xc + bc : 0;
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
    return yc;
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
const Th = (o) => {
  const e = new Ic(o ?? {});
  return () => e;
}, At = { radio: Zs, radioWrapper: Js, radioInput: Qs, radioText: ei }, kc = 16, Zr = 6, Tc = Zr * 2;
class Jr extends fe {
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
    if (r.setAttribute("data-has-px", ""), r.className = `${Xs} ${At.radio}`, s.className = At.radioWrapper, i.type = "radio", i.className = At.radioInput, s.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = At.radioText, l.innerText = n.label, s.appendChild(l);
    }
    return r.appendChild(s), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), s.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new Ae(l, [e, t, { text: "true" }]), a = this._radioItemStack[this._radioItemStack.length - 1];
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
    const r = Ke(e, t), s = n.label ? Zr + r.calculateWidth(n.label) : 0;
    return kc + Tc + s + this.getHorizontalCellPadding(n);
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
const Mh = ({ onRadioClick: o }) => {
  const e = new Jr({ onRadioClick: o });
  return () => e;
};
function Qr(o) {
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
function Mc(o, e, t, n) {
  const r = document.createElement("div");
  if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.className = Gn, t.icon) {
    const s = document.createElement("button"), i = document.createElement("i");
    s.setAttribute("type", "button"), s.classList.add("icon-button", ti), s.onclick = (l) => {
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
    const r = Qr(n), {
      ellipsis: s = !0,
      whiteSpace: i
    } = this._args;
    return s && r.classList.add(rr), i && (r.style.whiteSpace = i), r;
  }
  get renderType() {
    return "default";
  }
}
class Lc extends fe {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return Mc(e, t, n, (r, s, i) => this.onClick(r, s, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Hc extends fe {
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
const Lh = () => {
  const o = new ao();
  return () => o;
};
function Hh({ onClick: o }) {
  const e = new Lc({ onClick: o });
  return () => e;
}
function Oh(o, ...e) {
  const t = new Hc(o, ...e);
  return () => t;
}
const zo = /* @__PURE__ */ new WeakMap();
class es extends ao {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function zh(o) {
  const e = zo.get(o);
  if (e)
    return e;
  const t = new es(o);
  return zo.set(o, t), t;
}
const Pn = "$$all", ts = {
  visible: !0,
  subChecked: !1
};
function Oc(o) {
  return (e, t) => {
    t.style.width = "100%";
    const n = {
      ...ts,
      ...e.object
    }, r = document.createElement("label"), s = document.createElement("span");
    if (r.className = ni, s.classList.add(
      nr,
      Ee.truncate,
      Ee.flex110
    ), n.text && (s.textContent = n.text, s.title = s.textContent), n.icon) {
      const l = document.createElement("i");
      l.style.setProperty(
        "--ir-icon-foreground-color",
        sr.textColor.inverse
      ), l.className = `ir-icon ${n.icon}`, s.append(l);
    }
    r.appendChild(s);
    const i = document.createElement("input");
    i.type = "checkbox", i.className = tr, i.checked = n.checked, n.subChecked && (i.dataset.state = "sub-checked"), i.onchange = () => {
      n.key === Pn ? o.onSelectAll(i.checked) : o.onItemChecked(n.key, i.checked);
    }, r.insertAdjacentElement("afterbegin", i), e.setVisible(n.visible), t.append(r);
  };
}
function zc(o, e, t) {
  const n = o.getRowElement(), r = {
    ...ts,
    ...t
  }, s = n.querySelector("input[type='checkbox']");
  gl(
    s && s instanceof HTMLInputElement,
    "Checkbox element not found in the row element."
  ), s.checked = r.checked, r.checked === !1 && r.subChecked ? s.dataset.state = "sub-checked" : delete s.dataset.state;
}
const Ac = (o) => {
  var e = Dc(), t = ne(e), n = ne(t);
  xe(
    (r) => {
      K(e, 1, X([
        Ee.mx.sm,
        Ee.display.flex,
        Ee.alignCenter
      ])), Aa(e, "height", `${ir}px`), K(t, 1, X(Ee.truncate)), dt(n, r);
    },
    [() => se.t("rowFilter.list.no-result")]
  ), q(o, e);
};
var Dc = /* @__PURE__ */ te("<div><span> </span></div>"), Fc = /* @__PURE__ */ te('<form><input> <button aria-label="검색" type="submit"><i class="ir-icon ir-icon--search"></i></button></form>'), Wc = /* @__PURE__ */ te("<!> <div></div>", 1), Nc = /* @__PURE__ */ te("<div></div>"), Bc = /* @__PURE__ */ te("<!> <!>", 1);
function ns(o, e) {
  ge(e, !0);
  const t = (m) => {
    var x = Fc();
    K(x, 1, X(si));
    var v = ne(x);
    K(v, 1, X(Vn)), He(v, (k) => j(u, k), () => H(u));
    var T = Te(v, 2);
    K(T, 1, X(or)), xe((k) => ve(v, "placeholder", k), [
      () => se.t("rowFilter.search.placeholder")
    ]), ya("submit", x, f), q(m, x);
  }, n = ae("row-filter-ok-disabled");
  let r = U(e.defaultRowItems);
  const s = /* @__PURE__ */ $(() => r.filter(({ visible: m }) => m !== !1)), i = /* @__PURE__ */ $(() => H(s).some(({ checked: m }) => m)), l = /* @__PURE__ */ $(() => H(s).length > 0);
  let u = ke(null), a = ke(null);
  const c = /* @__PURE__ */ $(() => H(a) ? new Map([...H(a).getRowIter()].map((m) => [m.object.key, m])) : /* @__PURE__ */ new Map()), h = (m) => {
    w({ checked: m, subChecked: !1 }), H(s).forEach((x) => {
      g(x, m);
    }), n(!H(i));
  }, d = (m, x) => {
    const v = r.find((T) => m === T.key);
    v && (g(v, x), w(), n(!H(i)));
  }, f = (m) => {
    m.preventDefault();
    const x = H(u)?.value.toLocaleLowerCase() ?? "", v = (T) => T === "" || T.toLocaleLowerCase().includes(x);
    for (const T of r)
      T.visible = v(T.text ?? T.key), b(T.key, T.visible);
    w(), n(!H(i));
  };
  function w(m = {}) {
    const x = H(c).get(Pn);
    if (!x) return;
    const {
      checked: v = !H(s).some((k) => !k.checked),
      subChecked: T = H(s).some((k) => k.checked)
    } = m;
    x.updateObject({ ...x.object, checked: v, subChecked: T });
  }
  function g(m, x) {
    m.checked = x;
    const v = H(c).get(m.key);
    v && v.updateObject({ ...v.object, checked: x });
  }
  function b(m, x) {
    const v = H(c).get(m);
    v && (H(a)?.setRowVisible(v.rowId, x), v.updateObject({ ...v.object, visible: x }));
  }
  const y = (m) => {
    j(a, U(new Xi({
      contextElement: m,
      rowCount: 0,
      defaultRowHeight: ir,
      onCreatedRowElement: Oc({
        onSelectAll: h,
        onItemChecked: d
      }),
      onUpdatedRowObject: zc
    })));
    const x = { isAllChecked: !0, isSomeChecked: !1 };
    for (const v of r) {
      const { visible: T = !0 } = v;
      v.checked ? x.isSomeChecked = !0 : T && (x.isAllChecked = !1), H(a).addRow(void 0, v, T);
    }
    return H(a).getRowCount() > 0 && H(a).insertRow(0, void 0, {
      key: Pn,
      text: `(${se.t("rowFilter.list.select-all")})`,
      checked: x.isAllChecked,
      subChecked: x.isSomeChecked
    }), n(!H(i)), {
      destroy: () => {
        H(a)?.destroy();
      }
    };
  };
  function E() {
    return H(s).filter(({ checked: m }) => m).map(({ key: m }) => m);
  }
  var S = Bc(), C = Je(S);
  {
    var p = (m) => {
      var x = Wc(), v = Je(x);
      t(v);
      var T = Te(v, 2);
      K(T, 1, X(oi)), q(m, x);
    };
    Fe(C, (m) => {
      e.visibleSearchInput && m(p);
    });
  }
  var _ = Te(C, 2);
  {
    var I = (m) => {
      var x = Nc();
      K(x, 1, X(ri)), qr(x, (v) => y?.(v)), q(m, x);
    }, R = (m) => {
      Ac(m);
    };
    Fe(_, (m) => {
      H(l) ? m(I) : m(R, !1);
    });
  }
  return q(o, S), me({ getCheckedItemKeys: E });
}
const Pc = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Ao(o) {
  return o === "" ? !0 : Pc.test(o);
}
function Do(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function co(o, e) {
  if (o === e) return 0;
  const t = Ao(o), n = Ao(e);
  return t && n ? Do(o) < Do(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const Vc = (o) => (e, t) => co(e.getCell(o).text, t.getCell(o).text), Ah = ({
  grid: o
}) => ({
  sortColumn(e, t, n, r) {
    o.sort(Vc(e), t, n, r);
  }
});
var Gc = /* @__PURE__ */ te("<option> </option>"), jc = /* @__PURE__ */ te("<select></select>");
function os(o, e) {
  ge(e, !0);
  let t, n;
  const r = ae("row-filter-add-click-outside-element");
  kt(() => (n = new Zi({ contextElement: t }), n.divSelect.classList.add(Ee.mx.sm), n.onChange = (l, u) => e.onChange(u.value), n.value = e.value, r && r(n.divDropDown), () => {
    n.destroy();
  }));
  function s() {
    return n.divDropDown;
  }
  var i = jc();
  return gn(i, 21, () => e.options, io, (l, u, a, c) => {
    let h = () => H(u).key, d = () => H(u).value;
    var f = Gc(), w = {}, g = ne(f);
    xe(
      (b) => {
        w !== (w = h()) && (f.value = (f.__value = h()) == null ? "" : h()), dt(g, b);
      },
      [() => se.t(d())]
    ), q(l, f);
  }), He(i, (l) => t = l, () => t), q(o, i), me({ getDropdownEl: s });
}
var Uc = (o, e) => e.onInput(o.currentTarget.value), Kc = /* @__PURE__ */ te("<div><input></div>");
function rs(o, e) {
  ge(e, !0);
  var t = Kc(), n = ne(t);
  K(n, 1, X(Vn)), n.__input = [Uc, e], xe(() => {
    K(t, 1, X(Ee.mx.sm)), ve(n, "type", e.type), Oa(n, e.value), ve(n, "placeholder", e.placeholder);
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
var $c = /* @__PURE__ */ te("<!> <!>", 1);
function qc(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = ae("row-filter-ok-disabled"), s = t.getTextListForCol(n).sort((C, p) => co(C.text, p.text)).map(({ text: C, checked: p }) => ({
    key: C,
    checked: p,
    text: C === "" ? `(${se.t("rowFilter.list.blanks")})` : C
  }));
  let i = ke(U(bn[0].key)), l = ke(null), u = ke("");
  a();
  function a() {
    const C = t.getFilterOptionByCol(n);
    if (!C) return;
    const { operand: p, operator: _ } = C;
    _ !== "equals" && bn.some(({ key: I }) => I === _) && (j(i, U(_)), j(u, U(p[0])));
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
  function h() {
    H(u) !== "" && t.setColFilter({
      column: n,
      operator: H(i),
      operand: [H(u)]
    });
  }
  const d = (C) => {
    if (j(i, U(C)), H(i) === "equals") return;
    r(!1);
    const p = t.getFilterOptionByCol(n);
    p && p.operand.length === 1 && j(u, U(p.operand[0]));
  };
  function f() {
    t.removeColFilter(n), H(i) === "equals" ? c() : h();
  }
  function w() {
    return H(i) !== "equals";
  }
  var g = $c(), b = Je(g);
  os(b, {
    get value() {
      return H(i);
    },
    options: bn,
    onChange: d
  });
  var y = Te(b, 2);
  {
    var E = (C) => {
      He(
        ns(C, {
          visibleSearchInput: !0,
          defaultRowItems: s
        }),
        (p) => j(l, U(p)),
        () => H(l)
      );
    }, S = (C) => {
      const p = /* @__PURE__ */ $(() => se.t("rowFilter.string.input.placeholder"));
      rs(C, {
        get value() {
          return H(u);
        },
        get placeholder() {
          return H(p);
        },
        onInput: (_) => j(u, U(_))
      });
    };
    Fe(y, (C) => {
      H(i) === "equals" ? C(E) : C(S, !1);
    });
  }
  return q(o, g), me({ onSubmit: f, canApplyEnterFilter: w });
}
Ul();
function Yc(o, e) {
  ge(e, !1);
  let t = Zl();
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
  return Fa(), He(ns(o, { defaultRowItems: i, $$legacy: !0 }), (c) => j(t, c), () => H(t)), Da(e, "onSubmit", a), me({ onSubmit: a });
}
var Xc = /* @__PURE__ */ te("<div></div>");
function Zc(o, e) {
  ge(e, !0);
  let t, n;
  const r = ae("row-filter-add-click-outside-element");
  kt(() => {
    n = new Ji({
      div: t,
      format: e.format,
      onChange: e.onChange
    });
    const i = n.input, l = n.button;
    r && r(Qi().datePicker), i.oninput = () => e.onChange(n.textValue), l.onkeydown = (a) => {
      a.key === "Enter" && n.hide();
    }, i.addEventListener("blur", u, { capture: !0 });
    function u(a) {
      a.relatedTarget instanceof HTMLElement && a.relatedTarget.closest(`.${lr}`) && a.relatedTarget.textContent === se.t("rowFilter.ok") && a.stopPropagation();
    }
    return () => {
      n.destroy(), i.removeEventListener("blur", u);
    };
  }), bt(() => {
    n.input.value = e.value;
  }), bt(() => {
    n.input.placeholder = `${e.placeholder}(${e.format})`;
  });
  var s = Xc();
  He(s, (i) => t = i, () => t), xe(() => K(s, 1, X([Ee.widthAuto, Ee.mx.sm]))), q(o, s), me();
}
const Jc = [
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
function Qc(o) {
  return o === "in-range" ? [!0, !0] : o === "blank" ? [!1, !1] : [!0, !1];
}
function eu(o, e) {
  return o === "in-range" ? [
    `rowFilter.${e}.between.from`,
    `rowFilter.${e}.between.to`
  ] : [
    `rowFilter.${e}.input.placeholder`,
    `rowFilter.${e}.input.placeholder`
  ];
}
var tu = /* @__PURE__ */ te("<!> <!>", 1);
function ss(o, e) {
  ge(e, !0);
  let t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = t.getColumnMetaInfo(n), s = Ka(e, "operator"), i = U([
    { value: "", placeholder: "", visible: !0 },
    { value: "", placeholder: "", visible: !1 }
  ]);
  const l = (g) => {
    const b = eu(g, r.textType), y = Qc(g);
    i.forEach((E, S) => {
      E.visible = y[S], E.placeholder = b[S];
    });
  }, u = (g, b) => {
    b.value = g;
  }, a = (g) => {
    const b = g;
    s(b), l(b);
  };
  kt(() => {
    i.forEach((g, b) => {
      g.value = e.defaultValue[b] ?? "";
    }), l(s());
  });
  function c() {
    return i.filter(({ visible: g }) => g).map(({ value: g }) => g);
  }
  function h() {
    i.forEach((g) => {
      g.value = "";
    });
  }
  var d = tu(), f = Je(d);
  os(f, {
    get value() {
      return s();
    },
    options: Jc,
    onChange: a
  });
  var w = Te(f, 2);
  return gn(w, 17, () => i, io, (g, b) => {
    var y = vn(), E = Je(y);
    {
      var S = (C) => {
        var p = vn(), _ = Je(p);
        {
          var I = (m) => {
            const x = /* @__PURE__ */ $(() => r.format ?? se.t("datePicker.dateFormat")), v = /* @__PURE__ */ $(() => se.t(H(b).placeholder));
            Zc(m, {
              get format() {
                return H(x);
              },
              get value() {
                return H(b).value;
              },
              onChange: (T) => u(T, H(b)),
              get placeholder() {
                return H(v);
              }
            });
          }, R = (m) => {
            var x = vn(), v = Je(x);
            {
              var T = (k) => {
                const M = /* @__PURE__ */ $(() => se.t(H(b).placeholder));
                rs(k, {
                  type: "number",
                  get value() {
                    return H(b).value;
                  },
                  get placeholder() {
                    return H(M);
                  },
                  onInput: (L) => u(L, H(b))
                });
              };
              Fe(
                v,
                (k) => {
                  r.textType === "number" && k(T);
                },
                !0
              );
            }
            q(m, x);
          };
          Fe(_, (m) => {
            r.textType === "date" ? m(I) : m(R, !1);
          });
        }
        q(C, p);
      };
      Fe(E, (C) => {
        H(b).visible && C(S);
      });
    }
    q(g, y);
  }), q(o, d), me({ getValues: c, clearValues: h });
}
function nu(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = t.getFilterOptionByCol(n);
  let s, i = ke(U(r ? r.operator : "equals"));
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
    ss(o, {
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
function ou(o, e) {
  ge(e, !0);
  const t = ae("row-filter-plugin"), n = ae("row-filter-colId"), r = /* @__PURE__ */ $(() => t.getColumnMetaInfo(n).format), s = t.getFilterOptionByCol(n);
  let i, l = ke(U(s ? s.operator : "equals"));
  function u(f) {
    return f === "" ? !0 : Ie(f, H(r), !0).isValid();
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
    ze(f, { [ar.minWidth]: "200px" });
  }
  function h() {
    return !0;
  }
  const d = /* @__PURE__ */ $(() => s?.operand ?? []);
  return He(
    ss(o, {
      get defaultValue() {
        return H(d);
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
    canApplyEnterFilter: h
  });
}
var ru = /* @__PURE__ */ te("<i></i>"), su = /* @__PURE__ */ te("<button><!> <span> </span></button>");
function iu(o, e) {
  var t = su();
  K(t, 1, X(ii)), t.__click = function(...l) {
    e.onClick?.apply(this, l);
  };
  var n = ne(t);
  {
    var r = (l) => {
      var u = ru();
      xe(() => K(u, 1, X(["ir-icon ir-icon-text", e.icon]))), q(l, u);
    };
    Fe(n, (l) => {
      e.icon && l(r);
    });
  }
  var s = Te(n, 2), i = ne(s);
  xe(() => dt(i, e.label)), q(o, t);
}
fn(["click"]);
const lu = {
  string: qc,
  checked: Yc,
  number: nu,
  date: ou
}, au = (o, e, t, n, r) => {
  e.getFilterOptionByCol(t) && e.removeColFilter(t), n?.(), r();
};
var cu = /* @__PURE__ */ te("<div></div>"), uu = /* @__PURE__ */ te('<div><!> <div><!></div> <div><button class="button"> </button> <button class="button button--primary"> </button></div></div>');
function du(o, e) {
  ge(e, !0);
  let t = /* @__PURE__ */ Ua(e, ["$$slots", "$$events", "$$legacy"]), {
    pluginAPI: n,
    refElement: r,
    rowId: s,
    columnId: i,
    visibleSortButton: l,
    visibleCheckAllButton: u,
    sortOrder: a,
    onClose: c,
    onSubmit: h,
    onClear: d,
    onDropdownButtonClick: f
  } = t, w = /* @__PURE__ */ $(() => {
    return [...O(), ...A()];
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
      const F = a && a === "DESC" ? "ascending" : "descending";
      yield {
        key: F[0] === "a" ? "ASC" : "DESC",
        i18nKey: `rowFilter.sort.${F}`,
        icon: `ir-icon--sort-${F}`
      };
    }
    function* A() {
      !u || H(g).textType !== "checked" || (yield {
        key: "CHECK-ALL",
        i18nKey: "rowFilter.check.check-all",
        icon: "ir-icon--check-all-rectangle"
      }, yield {
        key: "UNCHECK-ALL",
        i18nKey: "rowFilter.check.uncheck-all",
        icon: "ir-icon--uncheck-all-rectangle"
      });
    }
  }), g = /* @__PURE__ */ $(() => n.getColumnMetaInfo(i)), b = ke(!1), y = U([]);
  Lt("row-filter-plugin", n), Lt("row-filter-colId", i), Lt("row-filter-ok-disabled", (O) => {
    j(b, U(O));
  }), Lt("row-filter-add-click-outside-element", (O) => {
    y.push(O);
  });
  let E, S = ke(U({ onSubmit: () => {
  } }));
  const C = /* @__PURE__ */ $(() => lu[H(g).textType]), p = (O) => {
    const { key: A } = O;
    switch (A) {
      case "DELETE":
        n.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        n.setSortOrder(s, i, A);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        n.setCheckAll(i, A === "CHECK-ALL");
        break;
    }
    f?.(A), c();
  }, _ = () => {
    H(b) || H(S).onSubmit() !== !0 && (h(), c());
  };
  kt(() => {
    const O = dr(r, E, "bottom-start"), A = jn({ hide: c }), F = hr({
      eventElements: [
        E,
        r,
        ...y
      ],
      clickOutsideFunc: c
    });
    F.create(), A.create(), l && ze(E, { [ar.maxHeight]: "360px" }), H(S).updateDropdownStyle?.(E), nl("Enter", D);
    function D() {
      H(S).canApplyEnterFilter?.() && _();
    }
    return () => {
      O(), A.destroy(), F.destroy(), ol("Enter", D);
    };
  });
  var I = uu();
  K(I, 1, X(li));
  var R = ne(I);
  {
    var m = (O) => {
      var A = cu();
      K(A, 1, X(ci)), gn(A, 21, () => H(w), io, (F, D) => {
        const W = /* @__PURE__ */ $(() => se.t(H(D).i18nKey));
        iu(F, {
          get label() {
            return H(W);
          },
          get icon() {
            return H(D).icon;
          },
          onClick: () => p(H(D))
        });
      }), q(O, A);
    };
    Fe(R, (O) => {
      H(w).length > 0 && O(m);
    });
  }
  var x = Te(R, 2);
  K(x, 1, X(ai));
  var v = ne(x);
  La(v, () => H(C), (O, A) => {
    He(A(O, {}), (F) => j(S, U(F)), () => H(S));
  });
  var T = Te(x, 2);
  K(T, 1, X(lr));
  var k = ne(T);
  k.__click = [
    au,
    n,
    i,
    d,
    c
  ];
  var M = ne(k), L = Te(k, 2);
  L.__click = _;
  var z = ne(L);
  He(I, (O) => E = O, () => E), xe(
    (O, A) => {
      ve(I, "id", n.dropdownId), dt(M, O), L.disabled = H(b), dt(z, A);
    },
    [
      () => se.t("rowFilter.clear"),
      () => se.t("rowFilter.ok")
    ]
  ), q(o, I), me();
}
fn(["click"]);
const yn = 20;
class Dh extends fe {
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
    u.className = ui, u.setAttribute("data-has-px", "");
    const c = Qr(n);
    return c.removeAttribute("data-has-px"), c.removeAttribute("data-has-py"), c.classList.add(rr, di), u.append(c), u.onclick = (f) => {
      !a.columnSortManager.enabledColumnClick && !n.sortOrder || f.target instanceof HTMLElement && (f.target.closest(`.${fo}`) || a.toggleSortOrder(e, t));
    }, a.getColumnMetaInfo(t).enabled !== !1 && u.appendChild(d()), u;
    function d() {
      const f = Un("ir-icon--filter", fo);
      f.style.setProperty("--ir-icon-badge-color", sr.info.active), b();
      let w = null;
      return f.onclick = () => {
        if (w) return g();
        w = Kr(du, {
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
            onClose: g,
            onSubmit: b,
            onClear: b
          }
        });
      }, f;
      function g() {
        w && ($r(w), w = null);
      }
      function b() {
        const y = !!a.getFilterOptionByCol(t);
        f.classList.toggle("ir-icon-badge--right", y);
      }
    }
  }
  getCellInnerWidth(e, t, n) {
    const r = Ke(e, t);
    return this.getHorizontalCellPadding(n) + r.calculateWidth(n.text ?? "") + (n.sortOrder ? yn : 0) + (n.icon ? yn : 0) + yn;
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
function hu(o, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: r } = e;
  return {
    getPastingRange: l,
    beforePastingList: u,
    pasteTask: a
  };
  function s(c, h) {
    const d = o.getRowCount();
    let f = 0, w = c;
    for (; w < d; ) {
      if (o.isFilteredRow(w) || f++, f === h) return w;
      ++w;
    }
    return w - 1 + (h - f);
  }
  function i(c) {
    return c.top === c.bottom && c.left === c.right;
  }
  function l(c, h) {
    if (h.length === 0) throw new Error("No pasting data.");
    const d = { ...c }, f = h.length, w = h[0].length, g = i(c) ? s(c.top, f) + 1 : d.top + f, b = d.left + w;
    for (let y = c.bottom + 1; y < g; ++y)
      (o.hasRow(y) || o.onAutoInsertRow(y)) && (d.bottom = y);
    for (let y = c.right + 1; y < b; ++y)
      (o.hasColumn(y) || o.onAutoInsertColumn(y)) && (d.right = y);
    return d;
  }
  function u(c, h) {
    if (h.length === 0) throw new Error("No pasting data.");
    const d = [], f = h.length, w = h[0].length, g = c.bottom - c.top, b = c.right - c.left;
    let y = 0;
    for (let p = 0; p <= g; ++p) {
      const _ = p + c.top;
      if (E(_), !!o.hasRow(_)) {
        if (r && o.isFilteredRow(_)) {
          ++y;
          continue;
        }
        for (let I = 0; I <= b; ++I) {
          const R = I + c.left;
          if (S(R), !o.hasColumn(R)) break;
          const m = o.cell(_, R), x = C(p - y, I), v = o.onCheckPasteCell(m, x.text);
          x.cellVisible && v && d.push({
            cell: m,
            cellMetaInfo: {
              text: x.text,
              cellVisible: x.cellVisible,
              rowSpan: t ? x.rowSpan : 1,
              colSpan: n ? x.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof v == "object" ? v : void 0
          });
        }
      }
    }
    return d;
    function E(p) {
      !o.hasRow(p) && o.onAutoInsertRow(p) && (o.addRow(), o.onAutoInsertedRow(p));
    }
    function S(p) {
      !o.hasColumn(p) && o.onAutoInsertColumn(p) && (o.addColumn(), o.onAutoInsertedColumn(p));
    }
    function C(p, _) {
      const [I, R] = [p % f, _ % w];
      return h[I][R];
    }
  }
  function a(c) {
    for (const { cell: h, cellMetaInfo: d, pasteOption: f } of c) {
      const { rowSpan: w, colSpan: g, cellVisible: b } = d;
      if (!b) continue;
      const { row: y, col: E } = h;
      if (w > 1 || g > 1) {
        const C = { top: y, left: E, bottom: y + w - 1, right: E + g - 1 };
        o.mergeCells(C.top, C.left, C.bottom, C.right);
      }
      f?.ignoreText || o.setCell(y, E, { text: d.text }), o.onClipboardAfterPasteCell(h);
    }
  }
}
function fu(o) {
  return JSON.stringify(o);
}
function gu(o) {
  return JSON.parse(o);
}
function mu(o) {
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
function pu(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((r) => r.cellVisible).forEach((r) => {
      const s = document.createElement("td");
      s.setAttribute("rowSpan", `${r.rowSpan}`), s.setAttribute("colSpan", `${r.colSpan}`), s.append(...mu(r.text)), n.append(s);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function _u(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const r = Array(n.length).fill(null).map(() => []);
  let s = 0;
  for (const u of n) {
    const a = u.querySelectorAll("td");
    let c = i(0);
    for (const h of a)
      (h.rowSpan > 1 || h.colSpan > 1) && l(s, c, h.rowSpan, h.colSpan), r[s][c] = {
        text: wu(h),
        rowSpan: h.rowSpan,
        colSpan: h.colSpan,
        cellVisible: !0,
        isFormatted: h.hasAttribute("class")
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
  function l(u, a, c, h) {
    for (let d = u; d < u + c; ++d)
      for (let f = a; f < a + h; ++f)
        r[d][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function wu(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return Cu(t);
}
function Cu(o) {
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
function vu(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const is = "	", ls = `
`;
function Ru(o) {
  if (!vu(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(is)
  ).join(ls);
}
function xu(o) {
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
    i !== "\r" && (i === is ? r() : i === ls ? s() : t.push(i));
  return (t.length > 0 || n.length > 0) && s(), e;
}
const Vt = [
  {
    format: "ir-grid/cell",
    parseFunc: gu,
    payloadFunc: fu
  },
  {
    format: "text/html",
    parseFunc: _u,
    payloadFunc: pu
  },
  {
    format: "text/plain",
    parseFunc: xu,
    payloadFunc: Ru
  }
];
function bu(o, e) {
  Vt.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function as(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function yu(o) {
  return o.some((e) => e.some((t) => as(t)));
}
function Su(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let r = 0; r < n; ++r)
      e[t]?.[r]?.text && as(o[t][r]) && (o[t][r].text = e[t][r].text);
  }
  return o;
}
function Fo(o) {
  for (const { format: e, parseFunc: t } of Vt) {
    const n = o.getData(e);
    if (n !== "") {
      const r = t(n);
      if (!yu(r))
        return r;
      const s = o.getData(Vt[2].format);
      return Su(
        r,
        Vt[2].parseFunc(s)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const Rt = 1, nt = 1;
class Wo {
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
class Eu {
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
    const t = new Wo({
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
    const s = this.getColumn(e).left, i = N(t).map((l) => new Wo({
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
class Iu {
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
    a.forEach((h) => h.unmount()), c.forEach((h) => h.unmount()), this._rowList = [
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
    const t = this.headerRows, n = this._rowList.length;
    for (let r = t; r < n; ++r) {
      const s = this._rowList[r], i = e(s);
      s.visible !== i && (s.setFiltered(!i), s.setVisible(i), this._updateRowHeight(s, i ? "show" : "hide"));
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
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
function ku() {
  const o = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
  return e.className = hi, o.className = fi, t.className = gi, n.className = mi, o.appendChild(t), o.appendChild(n), e.appendChild(o), { table: o, wrapper: e, freezedRows: t, bodyRows: n };
}
const Tu = 1e4;
function Mu({ rowManager: o, colManager: e, commandManager: t, cursorManager: n, hook: r }) {
  const s = Qe("textarea", pi);
  s.style.padding = "0";
  let i = null;
  const l = {
    focus: a,
    runEditMode: w,
    setPosition: h,
    mountElement(R) {
      b(), R.appendChild(s);
    },
    hide() {
    },
    onEditDone(R, m, x, v, T, k) {
    },
    onEditKeyDown(R, m, x, v) {
    },
    onEnterOnEdit(R, m) {
    },
    onEditInput(R, m) {
    },
    onDragEnd(R) {
    }
  }, u = jn(l);
  return r.addSyncHook("contextScroll", (R, m, x) => {
    i && h(i.cell, m, x);
  }), s.ondragend = (R) => l.onDragEnd(R), l;
  function a() {
    s.focus({ preventScroll: !0 });
  }
  function c(R) {
    s.value = R;
  }
  function h(R, m, x) {
    const v = o.getRow(R.row), T = e.getColumn(R.col), k = R.row < o.freezedRows ? m : 0, M = R.col < e.freezedColumns ? x : 0;
    s.style.top = `${v.top + k}px`, s.style.left = `${T.left + M}px`;
  }
  function d(R) {
    s.style.width = `${R.width}px`, s.style.height = `${R.height}px`;
  }
  function f(R) {
    const m = R === "" ? G.zLevel1 : `calc(${R} + 1000)`;
    s.style.zIndex = m;
  }
  function w(R, m, x, v = !1, T = !1) {
    i = {
      cell: R,
      beforeText: R.props.text ?? "",
      cancelEndEdit: !1
    }, s.style.removeProperty("padding"), v || c(i.beforeText), s.maxLength = R.props.maxLength ?? Tu, f(R.zIndexVariant), h(R, m, x), d(R), a(), s.scrollTo(0, s.scrollHeight), T && s.setSelectionRange(0, s.value.length), u.destroy(), u.create();
  }
  function g() {
    c(""), i = null, s.style.removeProperty("height"), s.style.removeProperty("width"), s.style.removeProperty("z-index");
  }
  function b() {
    s.addEventListener("keydown", S), s.addEventListener("blur", C), s.addEventListener("keyup", E), s.addEventListener("input", y);
  }
  function y(R) {
    i && l.onEditInput(R, s.value);
  }
  function E() {
    i || c("");
  }
  function S(R) {
    if (!i) return;
    const { beforeText: m, cell: x } = i;
    if (R.key === "Escape") {
      p(s.value, !1, R.key);
      return;
    }
    if (R.key === " " && !R.ctrlKey) {
      R.preventDefault();
      const v = s.value, { selectionStart: T, selectionEnd: k } = s;
      s.value = v.slice(0, T) + " " + v.slice(k), s.selectionStart = T + 1, s.selectionEnd = T + 1, l.onEditInput(R, s.value);
      return;
    }
    if (R.key === "Enter" && R.altKey && x.metaInfo.editSingleLine !== !0) {
      R.preventDefault();
      const v = s.selectionStart;
      try {
        i.cancelEndEdit = !0, s.blur(), s.value = [
          s.value.substring(0, v),
          s.value.substring(s.selectionEnd)
        ].join(`
`), a(), s.setSelectionRange(v + 1, v + 1, "backward"), l.onEditKeyDown(R, x.row, x.col, x.props);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (_(R)) {
      R.preventDefault(), p(s.value, m !== s.value, R.key), R.key === "Enter" ? l.onEnterOnEdit(R.ctrlKey, R.shiftKey) : I(R.key, R.shiftKey);
      return;
    }
    l.onEditKeyDown(R, x.row, x.col, x.metaInfo);
  }
  function C() {
    !i || i.cancelEndEdit || (p(s.value, i.beforeText !== s.value, ""), u.destroy());
  }
  function p(R, m, x) {
    if (i)
      try {
        const { cell: v, beforeText: T } = i;
        if (m && v.checkInputValidation(R)) {
          const k = { text: R, beforeText: T };
          v.props.gridStore.hook.emit("cellEditDoneBeforeRender", [v.row, v.col, k]);
          const M = new Ae(t.commandContext, [
            v.row,
            v.col,
            { text: k.text }
          ]);
          M.onUndo = () => {
            l.onEditDone(v, m, T, x, s.selectionStart, s.selectionEnd);
          }, M.onExecute = () => {
            l.onEditDone(v, m, T, x, s.selectionStart, s.selectionEnd);
          }, t.pushCommandBlock(new Ue(
            `Edit cell (${v.row}, ${v.col}) `,
            M
          )), v.props = { text: k.text };
        }
        l.onEditDone(v, m, T, x, s.selectionStart, s.selectionEnd);
      } finally {
        s.style.padding = "0", g();
      }
  }
  function _(R) {
    return R.key === "ArrowLeft" && s.selectionStart === 0 && s.selectionEnd === 0 || R.key === "ArrowUp" && s.selectionStart === 0 && s.selectionEnd === 0 || R.key === "ArrowRight" && s.selectionStart === s.textLength && s.selectionEnd === s.textLength || R.key === "ArrowDown" && s.selectionStart === s.textLength && s.selectionEnd === s.textLength || R.key === "Tab" ? !0 : R.key === "Enter" && !R.altKey && !R.ctrlKey && !R.shiftKey;
  }
  function I(R, m) {
    switch (R) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return m ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
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
function Lu(o) {
  return o.top === o.bottom && o.left === o.right;
}
function Hu(o) {
  return o.top > o.bottom || o.left > o.right;
}
function Ou(o, e) {
  let t = [];
  const n = new mt(o, e), r = ({ top: a, left: c, bottom: h, right: d }) => t.some(({ mergeArea: f }) => c <= f.right && d >= f.left && a <= f.bottom && h >= f.top) === !1, s = (a, c) => {
    let h = 0;
    for (let d = a; d <= c; ++d)
      o.getRowVisible(d) && ++h;
    return h;
  }, i = (a, c) => {
    let h = 0;
    for (let d = a; d <= c; ++d)
      e.getColumnVisible(d) && ++h;
    return h;
  }, l = ({ top: a, left: c, bottom: h, right: d }) => {
    for (let f = a; f <= h; ++f)
      if (o.getRowVisible(f) === !1) return !0;
    for (let f = c; f <= d; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, u = (a, c) => {
    const h = o.getCell(a, c), d = t.indexOf(h);
    return d < 0 ? null : t[d];
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
      if (Hu(a))
        throw new Error("Invalid range");
      if (r(a) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(a))
        throw new Error("Could not merging with hidden cells!");
      if (Lu(a))
        throw new Error("Could not merging with single cell!");
      const c = o.getCell(a.top, a.left);
      c.mergeInfo = { rowSpan: s(a.top, a.bottom), colSpan: i(a.left, a.right) }, t.push(c);
      for (const h of n.getSelectionGenerator(a))
        (h.row !== a.top || h.col !== a.left) && (h.mergeMain = c);
    },
    splitCells(a, c) {
      const h = u(a, c);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      for (const d of n.getSelectionGenerator(h.mergeArea))
        d.mergeMain = void 0, d.mergeInfo = { rowSpan: 1, colSpan: 1 };
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
      const h = u(a, c);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((d) => d !== h);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(a, c) {
      for (const { mergeArea: h } of t)
        if (h.top < a && h.bottom >= a && h.bottom <= c || h.bottom > c && h.top >= a && h.top <= c || h.top < a && h.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(a, c) {
      for (const { mergeArea: h } of t)
        if (h.left < a && h.right >= a && h.right <= c || h.right > c && h.left >= a && h.left <= c || h.left < a && h.right > c)
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
class zu {
  _gridHookFlow = el();
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
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Iu(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new Eu(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = Ou(this._rowManager, this._columnManager), this._gridTextarea = Mu({
      hook: this._gridHookFlow,
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = ku();
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
const Au = /^var\((.+)\)$/;
function Du(o) {
  const e = Au.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Fu = [
  G.zLevel0,
  G.zLevel1,
  G.zLevel2,
  G.zLevel3,
  G.zLevel4,
  G.zLevel5,
  G.zLevel6,
  G.zLevel7,
  G.zLevel8,
  G.zLevel9
], Wu = [
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
}, Nu = /* @__PURE__ */ new Set([
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
  _cellType = "body-cell";
  constructor({ row: e, col: t, tag: n, props: r, cellRenderer: s }) {
    this._cellProps = { ...r }, this._tag = n, this._cellRenderer = s, this._row = e, this._col = t;
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
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : No("grid.defaultFontSize", go.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : No("grid.defaultFontFamily", go.fontFamilyBase, "fontFamily");
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
    return this.element.style.getPropertyValue(Du(G.stickyCellZId));
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
  set cellType(e) {
    this._cellType = e;
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
    for (; this.element.lastChild; )
      this.element.lastChild.remove();
  }
  _addMark(e) {
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this.element.appendChild(this._mark);
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
        return new es(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _addStickyCls() {
    this.element.classList.add(_n);
  }
  _removeStickyCls() {
    this.element.classList.remove(_n);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? ze(this.element, { [e]: `${t}px` }) : ze(this.element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: r
    } = this._cellProps;
    this._applyCustomProp(G.cellTopPadding, e), this._applyCustomProp(G.cellLeftPadding, t), this._applyCustomProp(G.cellRightPadding, n), this._applyCustomProp(G.cellBottomPadding, r);
  }
  _updateActivate() {
    this._element && (this._isActivate ? this._element.classList.add("is-active") : this._element.classList.remove("is-active"));
  }
  _updateCellLayout() {
    this._element && (this._element.style.top = `${this._top}px`, this._element.style.left = `${this._left}px`, this._element.style.width = `${this._width}px`, this._element.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._updateActivate(), Mt(this._element, "is-disabled", this._cellProps.disabled === !0), Mt(this._element, "is-asc", this._cellProps.sortOrder === "ASC"), Mt(this._element, "is-desc", this._cellProps.sortOrder === "DESC"), this.updateReadonlyStatus(), this._cellProps.isError ? this._addMark(_i) : this._cellProps.hasMemo ? this._addMark(wi) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of Wu) {
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
    return this._element = e, this._rowSpan > 1 && (e.rowSpan = this._rowSpan), this._colSpan > 1 && (e.colSpan = this._colSpan), e.classList.add(Ci, this._tag === "th" ? vi : Ri), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), this._updateStickyZId(), this._updateCellLayout(), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
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
    this._zIndex && Nu.has(this._zIndex) && (t += s), !(this._top === e && this._left === t && this._height === n && this._width === r) && (this._top = e, this._height = n, this._left = t, this._width = r, this._updateCellLayout());
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
    this._element && (this._element.style.removeProperty(G.stickyCellZId), this._removeStickyCls(), this._zIndex !== null && (ze(this._element, { [G.stickyCellZId]: Fu[this._zIndex] }), this._addStickyCls()));
  }
  setStickyZIndex(e) {
    this._zIndex = e, this._updateStickyZId();
  }
  replaceElement(e) {
    this._removeChildren(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  _renderInnerCell() {
    this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this.element.appendChild(this._getRenderElement()), this._needRender = !1, this.onPostRender();
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
  }
  onDblClick(e) {
  }
  onRightClick(e, t) {
  }
  onPostRender() {
  }
  onSelect(e) {
  }
  onClear(e) {
  }
  onCheckReadonly() {
    return this._cellProps.readonly === !0;
  }
}
function No(o, e, t) {
  const n = Kt().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Pu extends Kn {
  constructor() {
    super([]);
  }
}
class Vu extends Kn {
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
class Gu extends Kn {
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
class ju {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new Gu(e), this._gridModeState = new Vu(), this._headerCellListState = new Pu();
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
class Uu {
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
    e && (rl(e), this._cells.forEach((t) => void e.appendChild(t.element)));
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
      const { rowSpan: h, colSpan: d, col: f } = u, w = {
        top: s,
        left: this._grid.getColumnLeft(f),
        width: d === 1 ? this._grid.getColumnWidth(f) + 1 : this._grid.getColWidthWithSpan(f, d),
        height: h === 1 ? i : this._grid.getRowHeightWithSpan(r, h),
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
    this.isMounted || (e.insertAdjacentElement(t, this.element), this.render(), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
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
const Ku = 4, Dt = "is-hidden";
function $u(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const qu = yi, Yu = [
  Si,
  Ei,
  Ii,
  ki
], Xu = ["top", "left", "bottom", "right"];
function Zu(o) {
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
  e.classList.add(xi, Dt), n.forEach((E, S) => E.className = `${bi} border-line__${Xu[S]}`), t.forEach((E) => e.appendChild(E)), n.forEach((E) => e.appendChild(E));
  function c(E) {
    const { top: S, left: C, bottom: p, right: _ } = f(E), { scrollTop: I, scrollLeft: R } = o;
    let m = 0, x = 0;
    return E.top < o.getFreezedRowCount() && (x = I), E.left < o.getFreezedColumnCount() && (m = R), {
      top: S + x,
      left: C + m,
      width: Math.max(0, _ - C),
      height: p - S
    };
  }
  function h(E) {
    E.classList.add(Dt), delete E.dataset.top, delete E.dataset.left, delete E.dataset.bottom, delete E.dataset.right, delete E.dataset.visible;
  }
  function d(E, S) {
    const C = t[E], p = c(S);
    C.className = `${qu} ${Yu[E]}`, Object.assign(C.dataset, {
      top: String(S.top),
      left: String(S.left),
      bottom: String(S.bottom),
      right: String(S.right),
      visible: "true"
    }), C.style.top = `${p.top}px`, C.style.left = `${p.left}px`, C.style.width = `${p.width}px`, C.style.height = `${p.height}px`;
  }
  function f(E) {
    return {
      top: o.getRow(E.top).top - Rt,
      left: o.getColumn(E.left).left - nt,
      bottom: o.getRow(E.bottom).bottom,
      right: o.getColumn(E.right).right
    };
  }
  function w(E) {
    const { left: S, right: C } = E, p = o.getFreezedColumnCount();
    return N(S, C + 1).reduce((_, I) => {
      const R = o.getColumn(I);
      return R.visible ? _ + (I >= p ? R.widthWithBorder : 0) : _;
    }, 0);
  }
  function g(E) {
    const { top: S, bottom: C } = E, p = o.getFreezedRowCount();
    return N(S, C + 1).reduce((_, I) => {
      const R = o.getRow(I);
      return R.visible ? _ + (I >= p ? R.heightWithBorder : 0) : _;
    }, 0);
  }
  function b(E, S, C, p) {
    if (E <= p)
      return Math.min(S, C);
    const _ = E - p;
    return C > _ ? Math.max(0, C - _) : 0;
  }
  function y(E) {
    const { top: S, left: C, bottom: p, right: _ } = f(E), {
      fixedRowHeight: I,
      fixedColumnWidth: R,
      scrollTop: m,
      scrollLeft: x
    } = o, v = I + m, T = R + x, k = S < I, M = p <= I, L = C < R, z = _ <= R, O = S >= v, A = p >= v, F = C >= T, D = _ >= T, W = w(E), Tt = g(E), pt = b(C, W, x, R), _t = b(S, Tt, m, I), ot = _ - C - pt, rt = p - S - _t, oe = S + (k ? m : _t), ue = C + (L ? x : pt), we = ue < 0 ? 1 : 0, be = oe < 0 ? 1 : 0;
    (function() {
      u.forEach((Se) => {
        Se.style.left = `${ue + we}px`, Se.style.width = `${ot - we}px`;
      });
    })(), function() {
      a.forEach((Se) => {
        Se.style.top = `${oe + be}px`, Se.style.height = `${rt - be}px`;
      });
    }(), function() {
      if (ot <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), k ? r.style.top = `${S + m + be}px` : O ? r.style.top = `${S + be}px` : r.style.display = "none";
    }(), function() {
      if (ot <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.top = `${p + m - Rt}px` : A ? i.style.top = `${p - Rt}px` : i.style.display = "none";
    }(), function() {
      if (rt <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), L ? s.style.left = `${C + x + we}px` : F ? s.style.left = `${C + we}px` : s.style.display = "none";
    }(), function() {
      if (rt <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), z ? l.style.left = `${_ + x - nt}px` : D ? l.style.left = `${_ - nt}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(E) {
      const { headerRows: S, headerColumns: C } = o, p = o.getFreezedRowCount(), _ = o.getFreezedColumnCount(), I = o.getRowCount() - 1, R = o.getColCount() - 1, m = [
        { top: S, left: C, bottom: p - 1, right: _ - 1 },
        { top: S, left: _, bottom: p - 1, right: R },
        { top: p, left: C, bottom: I, right: _ - 1 },
        { top: p, left: _, bottom: I, right: R }
      ].map((x) => $u(E, x));
      for (let x = 0; x < Ku; x++) {
        const v = m[x];
        v ? d(x, v) : h(t[x]);
      }
      y(E);
    },
    applyGridScroll() {
      const E = o.getSelection();
      E && this.updateArea(E);
    },
    show() {
      e.classList.remove(Dt);
    },
    hide() {
      e.classList.add(Dt);
    }
  };
}
class Ju {
  #t;
  #e;
  constructor(e, t, n) {
    this.#t = t, this.#e = Zu(e), n.appendChild(this.#e.selectionRoot);
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
const Ft = -1, Bo = 2, Po = 2, Qu = 2, ed = [
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
function td(o) {
  return o.mergeMain ?? o;
}
class nd {
  _args;
  _wrapperElement;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = Ft;
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
    if (e > Qu) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = Ft;
    for (const n of ed)
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
    const e = this._updateScrollInfo.row, { grid: t, contextElement: n } = this._args, r = Y(e, 0, t.getRowCount() - 1), s = t.getRow(r), i = s.top, l = s.bottom, { fixedRowHeight: u, scrollBottom: a, scrollTop: c } = t, h = c + u;
    a < l ? n.scrollTop = c + (l - a) : h > i && (n.scrollTop = i - u), this._updateScrollInfo.row = -1;
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
    this._rafHandler !== Ft && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === Ft && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getViewportRowMap() {
    const e = /* @__PURE__ */ new Map(), { grid: t, contextElement: n, store: r } = this._args, { rowManager: s, columnManager: i } = r, { fixedRowHeight: l, fixedColumnWidth: u, activeCell: a } = t, {
      scrollTop: c,
      scrollLeft: h,
      clientHeight: d,
      clientWidth: f
    } = n, w = t.getRowCount() - 1, g = t.getColCount() - 1, b = Math.min(t.getFreezedRowCount(), w), y = Math.min(t.getFreezedColumnCount(), g), E = t.getRowByTop(l + c + 1) ?? t.firstRow, S = t.getRowByTop(c + d) ?? t.lastRow, C = t.getColumnByLeft(u + h + 1) ?? i.firstColumn, p = t.getColumnByLeft(h + f) ?? i.lastColumn;
    if (!E || !S || !C || !p) return e;
    const _ = s.getRowUnstable(Math.max(E.rowId - Bo, b)), I = s.getRowUnstable(Math.min(S.rowId + Bo, w)), R = i.getColumnUnstable(Math.max(C.columnId - Po, y)), m = i.getColumnUnstable(Math.min(p.columnId + Po, g));
    let x = N(0, b).asList(), v = N(0, Math.max(y, r.getThemeValue("grid.forceRenderLeftCol"))).asList();
    x = x.concat(N(_.rowId, I.rowId + 1).asList()), v = v.concat(N(R.columnId, m.columnId + 1).asList());
    const T = g - r.getThemeValue("grid.forceRenderRightCol") + 1;
    T > m.columnId && (v = v.concat(N(T, g + 1).asList()));
    for (const M of x) {
      const L = s.getRowUnstable(M);
      if (L.visible)
        for (const z of v)
          i.getColumnUnstable(z).visible && k(td(L.getCellUnstable(z)));
    }
    return a && !a.isRemoved && s.getRowVisible(a.row) && i.getColumnVisible(a.col) && k(a), e;
    function k(M) {
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
    c(), h(), d(), f();
    function c() {
      s.runFuncEachRow((w) => !a.has(w.rowId) && w.unmount());
    }
    function h() {
      const { headerRows: w } = e;
      s.runFuncEachRow((g) => {
        const b = a.get(g.rowId);
        b && (g.updateViewportCells(b, i, l), g.isFreezed || g.freeze(g.rowId < w), g.isMounted && g.element.parentElement === r && g.unmount(), g.isMounted || g.mount(n, "beforeend"));
      }, 0, u);
    }
    function d() {
      let w = null;
      for (const [g, b] of a.entries()) {
        if (g < u) continue;
        const y = s.getRowUnstable(g);
        if (y.updateViewportCells(b, i, l), y.isMounted)
          if (y.element.parentElement === n)
            y.unmount();
          else {
            w = y.element;
            continue;
          }
        w ? y.mount(w, "afterend") : y.mount(r, "afterbegin"), w = y.element;
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
class cs extends J {
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
const od = {
  "col-resizing": cr,
  "row-resizing": ur
}, Sn = {
  "col-resizing": Li,
  "row-resizing": Hi
}, En = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, Vo = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, rd = 500, Go = 4;
class us extends ce {
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
      columnManager: h
    } = t, d = new Set(i), f = new Set(l), w = (C, p, _) => {
      e.commandManager.pushCommandBlock(new Ue(C, new cs(e, [p, _])));
    };
    (function() {
      const p = document.createElement("div");
      let _ = null, I = !1, R = 0, m = null;
      const x = () => {
        _ && (_.element.classList.remove(Sn["col-resizing"]), _.element.classList.remove(Sn["row-resizing"]), _ = null), n.classList.remove(cr), n.classList.remove(ur), n.classList.remove(Ln), m && n.removeEventListener("mousedown", m);
      }, v = (M, L) => {
        _ = M, n.classList.add(Ln), n.classList.add(od[L]), M.element.classList.add(Sn[L]);
        let z = 0, O = 0, A = 0, F = 0, D = 0;
        const W = () => M.col < e.getFreezedColumnCount() ? e.scrollLeft + F : F, Tt = () => M.row < e.getFreezedRowCount() ? e.scrollTop + F : F;
        m = (oe) => {
          const ue = (/* @__PURE__ */ new Date()).getTime();
          if (c.setMode({
            mode: L,
            contextParam: {}
          }), ue - R <= rd) {
            if (L === "col-resizing") {
              const we = En(M);
              E(we, t.rowManager.getMaxCellWidth(we, we + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(M.row);
              });
            R = 0, c.setIdle();
            return;
          }
          I = !0, R = ue, L === "col-resizing" ? (p.className = Oi, D = e.getColumnWidth(En(M)), z = oe.pageX, O = z - D + e.minColWidth, A = z - D + e.maxColWidth, F = e.getColumnLeft(M.col) + e.getCellWidth(M), p.style.top = "0px", p.style.width = "0px", p.style.height = `${e.height}px`, p.style.left = `${W()}px`) : (p.className = zi, D = e.getRowHeight(Vo(M)), z = oe.pageY, O = z - D + e.minRowHeight, A = z - D + e.maxRowHeight, F = e.getRow(M.row).top + e.getCellHeight(M), p.style.top = `${Tt()}px`, p.style.width = `${e.width}px`, p.style.height = "0px", p.style.left = "0px"), a.wrapper.appendChild(p), e.addGlobalEventListener(document, "keydown", rt), e.addGlobalEventListener(document, "mouseup", _t), e.addGlobalEventListener(document, "mousemove", pt);
        };
        const pt = (oe) => {
          if (L === "col-resizing") {
            const ue = Y(oe.pageX, O, A) - z;
            p.style.left = `${W() + ue}px`;
          } else {
            const ue = Y(oe.pageY, O, A) - z;
            p.style.top = `${Tt() + ue}px`;
          }
        }, _t = (oe) => {
          if (L === "col-resizing") {
            const be = Y(oe.pageX, O, A) - z;
            if (Math.abs(be) > Go) {
              const ye = En(M), Se = D + be;
              E(ye, Se), R = 0;
            }
          } else {
            const be = Y(oe.pageY, O, A) - z;
            if (Math.abs(be) > Go) {
              const ye = Vo(M), Se = D + be;
              w("Resize row", ye, Se), e.setRowHeight(ye, Se), R = 0;
            }
          }
          ot(), c.setIdle();
          const ue = g(oe);
          if (!ue) return;
          const we = b(oe, ue);
          we !== null && v(ue, we);
        };
        function ot() {
          I = !1, p.remove(), x(), document.removeEventListener("mousemove", pt), document.removeEventListener("mouseup", _t), document.removeEventListener("keydown", rt);
        }
        const rt = (oe) => {
          oe.key === "Escape" && ot();
        };
        e.addGlobalEventListener(n, "mousedown", m);
      }, T = (M) => {
        if (I) return;
        const L = g(M);
        if (x(), L === null) return;
        const z = b(M, L);
        z && v(L, z);
      }, k = (M) => {
        I || x();
      };
      e.addGlobalEventListener(n, "mousemove", T), e.addGlobalEventListener(n, "mouseout", k);
    })();
    const g = (C) => {
      const p = We("th", "tr", C.target);
      if (!p) return null;
      const [_, I] = [
        parseInt(p.getAttribute("data-row") || "-1"),
        parseInt(p.getAttribute("data-col") || "-1")
      ];
      return e.cell(_, I);
    }, b = (C, p) => {
      if (p.cellType === "body-cell") return null;
      if (u) {
        const { visibleColumnList: _ } = h, I = _[_.length - 1];
        if (_.length > 0 && p.col === I.columnId) return null;
      }
      return r && Math.abs(e.getCellWidth(p) - C.offsetX) <= Ti && !d.has(p.col) ? "col-resizing" : s && Math.abs(e.getCellHeight(p) - C.offsetY) <= Mi && !f.has(p.row) ? "row-resizing" : null;
    };
    function y(C, p, _) {
      const I = e.getColumnWidth(p) - _;
      e.setColumnWidth(p, I);
      const R = I - e.getColumnWidth(p);
      if (R !== 0) {
        const m = p - C;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          p - m,
          e.getColumnWidth(p - m) + R
        );
      }
    }
    function E(C, p) {
      const _ = e.getColumnWidth(C);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(C, p), u && y(C, S(C), e.getColumnWidth(C) - _);
      });
    }
    function S(C) {
      let p = e.getColumn(C + 1);
      for (; !p.visible; )
        p = e.getColumn(p.columnId + 1);
      return p.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function Fh(o) {
  return new us(o);
}
const sd = 15, Wt = 120;
class ds extends ce {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: r } = t;
    let s = null, i = null, l, u = null;
    const a = (g, b) => {
      const y = [
        g.row,
        g.bottom,
        b.row,
        b.bottom
      ], E = [
        g.col,
        g.right,
        b.col,
        b.right
      ], S = {
        top: Math.min(...y),
        left: Math.min(...E),
        bottom: Math.max(...y),
        right: Math.max(...E)
      };
      fr(S, u) || (u = S, e.select(S, s), this.onChangedSelection(S));
    };
    e.addGlobalEventListener(n, "mousedown", (g) => {
      if (!Ze(g.target) || g.button !== 0 || g.target instanceof HTMLTextAreaElement || We(".button", "tr", g.target)) return;
      const b = We("td", "tr", g.target);
      if (!b)
        return;
      const y = Ne(b), E = e.activeCell;
      g.shiftKey && E ? (s = E, a(E, e.cell(y.row, y.col))) : (s = e.cell(y.row, y.col), e.selectRange(s.row, s.col, s.bottom, s.right, s), this.onChangedSelection({ top: s.row, left: s.col, bottom: s.bottom, right: s.right })), i = s, r.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function c(g, b) {
      const y = b.closest("td");
      if (!y) return;
      const E = Ne(y);
      i = e.cell(E.row, E.col), a(g, i);
    }
    function h(g, b) {
      const { offsetX: y, offsetY: E, target: S } = g;
      if (!Ze(S)) return null;
      const C = y + S.scrollLeft, p = E + S.scrollTop, _ = C > e.width ? e.width : C, I = p > e.height ? e.height : p, R = e.findCellOrNull(I, _);
      R && (i = R, a(b, R));
    }
    function d(g) {
      const b = g.clientWidth + g.scrollLeft, y = g.clientHeight + g.scrollTop, E = g.scrollTop + e.headerHeight, S = g.scrollLeft + e.headerWidth, C = y > e.height ? e.height : y, p = b > e.width ? e.width : b, _ = e.findCellOrNull(E, S), I = e.findCellOrNull(C, p);
      return {
        top: _?.row ?? 0,
        bottom: I?.row ?? 0,
        left: _?.col ?? 0,
        right: I?.col ?? 0
      };
    }
    function f(g, b, y, E) {
      l = window.setTimeout(() => {
        if (!s) return;
        const p = S(), _ = C(), { top: I, bottom: R, left: m, right: x } = d(g), v = {
          top: g.scrollTop,
          left: g.scrollLeft,
          targetRow: y,
          targetCol: E
        };
        p && (b.startsWith("t") ? (v.top -= e.getRowHeight(I), v.targetRow = I) : (v.top += e.getRowHeight(R), v.targetRow = R)), _ && (b.endsWith("l") ? (v.left -= e.getColumnWidth(m), v.targetCol = m) : (v.left += e.getColumnWidth(x), v.targetCol = x)), (p || _) && (g.scrollTo({ top: v.top, left: v.left }), a(s, e.cell(v.targetRow, v.targetCol)), f(g, b, v.targetRow, v.targetCol));
      }, sd);
      function S() {
        return b.startsWith("t") ? g.scrollTop > 0 : b.startsWith("b") ? g.scrollHeight - (g.scrollTop + g.clientHeight) > 0 : !1;
      }
      function C() {
        return b.endsWith("l") ? g.scrollLeft > 0 : b.endsWith("r") ? g.scrollWidth - (g.scrollLeft + g.clientWidth) > 0 : !1;
      }
    }
    function w() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (g) => {
      s && Ze(g.target) && (g.target === n ? h(g, s) : c(s, g.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      s && (w(), s = null, i = null, r.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: g, clientY: b, clientX: y }) => {
      if (!s || !i || !Ze(g)) return;
      const { top: E, bottom: S, left: C, right: p } = g.getBoundingClientRect();
      if (E < b && S > b && C < y && p > y) return;
      f(g, `${_()}${I()}`, i.row, i.col);
      function _() {
        return b - E <= Wt ? "t" : S - b <= Wt ? "b" : "";
      }
      function I() {
        return y - C <= Wt ? "l" : p - y <= Wt ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (g) => {
      s && Ze(g.currentTarget) && w();
    }), e.onDoubleClickCell = (g) => {
      r.isIdle && (e.scrollInView(g.row, g.col), e.forceLayoutTask(), e.doEditMode(g, !1, !0));
    }, e.onColumnClick = (g) => e.selectColumn(g.col), e.onRowClick = (g) => e.selectRow(g.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function Wh() {
  return new ds();
}
class hs extends J {
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
function fs(o, e) {
  const t = (m, x, v) => {
    const T = o.headerRows;
    let k = v, M = m;
    for (; k !== 0; ) {
      const L = o.cell(M, x), O = (L.mergeMain ?? L).row - 1;
      if (O < T) break;
      o.getRowVisible(O) && ++k, M = O;
    }
    return o.getRowVisible(M) ? M : m;
  }, n = (m, x, v) => {
    const T = o.getRowCount() - 1;
    let k = v, M = m;
    for (; k > 0; ) {
      const L = o.cell(M, x), O = (L.mergeMain ?? L).bottom + 1;
      if (O > T) break;
      o.getRowVisible(O) && --k, M = O;
    }
    return o.getRowVisible(M) ? M : m;
  }, r = (m, x, v) => {
    const T = o.headerColumns;
    let k = v, M = x;
    for (; k !== 0; ) {
      const L = o.cell(m, M), O = (L.mergeMain ?? L).col - 1;
      if (O < T) break;
      o.getColumnVisible(O) && ++k, M = O;
    }
    return o.getColumnVisible(M) ? M : x;
  }, s = (m, x, v) => {
    const T = o.getColCount() - 1;
    let k = v, M = x;
    for (; k !== 0; ) {
      const L = o.cell(m, M), O = (L.mergeMain ?? L).right + 1;
      if (O > T) break;
      o.getColumnVisible(O) && --k, M = O;
    }
    return o.getColumnVisible(M) ? M : x;
  }, i = () => {
    let m = o.headerColumns;
    for (; !o.getColumnVisible(m); )
      ++m;
    return m;
  }, l = () => {
    let m = o.getColCount() - 1;
    for (; !o.getColumnVisible(m); )
      --m;
    return m;
  }, u = () => {
    let m = o.headerRows;
    for (; !o.getRowVisible(m); )
      ++m;
    return m;
  }, a = () => {
    let m = o.getRowCount() - 1;
    for (; !o.getRowVisible(m); )
      --m;
    return m;
  }, c = (m) => {
    if (o.getRowCount() - 1 === m) return m;
    let v = m + 1;
    for (; !o.getRowVisible(v); )
      ++v;
    return v;
  }, h = (m) => {
    const x = o.headerRows;
    if (m === x) return m;
    let v = m - 1;
    for (; !o.getRowVisible(v); )
      ++v;
    return v;
  }, d = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const x = a(), v = l(), T = m.mergeMain ?? m;
    if (T.right === v) {
      if (m.row === x) return;
      const k = i(), M = c(m.row);
      e ? o.selectRow(M, o.cell(M, k)) : o.selectCell(M, k), o.scrollInView(M, k);
    } else {
      const k = s(m.row, T.right, 1);
      e ? o.selectRow(m.row, o.cell(m.row, k)) : o.selectCell(m.row, k), o.scrollOnCol(k);
    }
  }, f = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const x = u(), v = i(), T = m.mergeMain ?? m;
    if (T.col === v) {
      if (m.row === x) return;
      const k = l(), M = h(m.row);
      e ? o.selectRow(M, o.cell(M, k)) : o.selectCell(M, k), o.scrollInView(M, k);
    } else {
      const k = r(m.row, T.col, -1);
      e ? o.selectRow(m.row, o.cell(m.row, k)) : o.selectCell(m.row, k), o.scrollOnCol(k);
    }
  }, w = (m, x, v) => {
    let T = -1, k = -1;
    for (let M = x; M <= v; M++) {
      const L = o.cell(m, M), z = L.mergeMain ?? L, { rowSpan: O } = z.mergeInfo;
      O > T && (T = O, k = M);
    }
    return k;
  }, g = (m, x, v) => {
    let T = -1;
    for (let k = x; k <= v; k++) {
      const M = o.cell(m, k), L = M.mergeMain ?? M, { bottom: z } = L;
      z > T && (T = z);
    }
    return T;
  }, b = (m, x, v) => {
    let T = 999999999;
    for (let k = x; k <= v; k++) {
      const M = o.cell(m, k), L = M.mergeMain ?? M;
      T > L.row && (T = L.row);
    }
    return T;
  }, y = (m, x, v) => {
    let T = -1, k = -1;
    for (let M = x; M <= v; M++) {
      const L = o.cell(M, m), z = L.mergeMain ?? L, { colSpan: O } = z.mergeInfo;
      O > T && (T = O, k = M);
    }
    return k;
  }, E = (m, x, v) => {
    let T = -1;
    for (let k = x; k <= v; k++) {
      const M = o.cell(k, m), L = M.mergeMain ?? M, { right: z } = L;
      z > T && (T = z);
    }
    return T;
  }, S = (m, x, v) => {
    let T = 999999999;
    for (let k = x; k <= v; k++) {
      const M = o.cell(k, m), L = M.mergeMain ?? M;
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
    selectNextActiveCell: d,
    selectBeforeActiveCell: f,
    selectNextSelection: (m, x, v) => {
      const T = o.getSelection(), { activeCell: k } = o;
      if (T == null || k == null) {
        console.warn("No selection warning");
        return;
      }
      const M = k.mergeMain ?? k;
      if (v && e) return;
      if (!v) {
        if (m !== 0) {
          const F = m < 0 ? t(M.row, k.col, m) : n(M.bottom, k.col, m);
          e ? o.selectRow(F, o.cell(F, k.col)) : o.selectCell(F, k.col), o.scrollOnRow(F);
        } else {
          const F = x < 0 ? r(k.row, M.col, x) : s(k.row, M.right, x);
          e ? o.selectRow(k.row, o.cell(k.row, F)) : o.selectCell(k.row, F), o.scrollOnCol(F);
        }
        return;
      }
      const { top: L, bottom: z, left: O, right: A } = T;
      if (m !== 0)
        if (m < 0)
          if (g(k.row, O, A) === z) {
            const D = w(L, O, A), W = t(L, D, m);
            o.selectRange(W, O, z, A, k), o.scrollOnRow(W);
          } else {
            const D = w(z, O, A), W = t(z, D, m);
            o.selectRange(L, O, W, A, k), o.scrollOnRow(W);
          }
        else if (b(k.row, O, A) === L) {
          const D = w(z, O, A), W = n(z, D, m);
          o.selectRange(L, O, W, A, k), o.scrollOnRow(W);
        } else {
          const D = w(L, O, A), W = n(L, D, m);
          o.selectRange(W, O, z, A, k), o.scrollOnRow(W);
        }
      else if (x < 0)
        if (E(k.col, L, z) === A) {
          const D = y(O, L, z), W = r(D, O, x);
          o.selectRange(L, W, z, A, k), o.scrollOnCol(W);
        } else {
          const D = y(A, L, z), W = r(D, A, x);
          o.selectRange(L, O, z, W, k), o.scrollOnCol(W);
        }
      else if (S(k.col, L, z) === O) {
        const D = y(A, L, z), W = s(D, A, x);
        o.selectRange(L, O, z, W, k), o.scrollOnCol(W);
      } else {
        const D = y(O, L, z), W = s(D, O, x);
        o.selectRange(L, W, z, A, k), o.scrollOnCol(W);
      }
    },
    selectMoveToLastColumn: (m) => {
      const x = o.getSelection(), { activeCell: v } = o;
      if (x == null || v == null) {
        console.warn("No selection warning");
        return;
      }
      const T = l();
      m && e || (m ? o.selectRange(x.top, v.col, x.bottom, T, v) : e ? o.selectRow(v.row, o.cell(v.row, T)) : o.selectCell(v.row, T), o.scrollOnCol(T));
    },
    selectMoveToFirstColumn: (m) => {
      const x = o.getSelection(), { activeCell: v } = o;
      if (x == null || v == null) {
        console.warn("No selection warning");
        return;
      }
      const T = i();
      m && e || (m ? o.selectRange(x.top, T, x.bottom, v.col, v) : e ? o.selectRow(v.row, o.cell(v.row, T)) : o.selectCell(v.row, T), o.scrollOnCol(T));
    },
    selectMoveToLastRow: (m) => {
      const x = o.getSelection(), { activeCell: v } = o;
      if (x == null || v == null) {
        console.warn("No selection warning");
        return;
      }
      const T = a();
      m && e || (m ? o.selectRange(v.row, x.left, T, x.right, v) : o.selectCell(T, v.col), o.scrollOnRow(T));
    },
    selectMoveToFirstRow: (m) => {
      const x = o.getSelection(), { activeCell: v } = o;
      if (x == null || v == null) {
        console.warn("No selection warning");
        return;
      }
      const T = u();
      m && e || (m ? o.selectRange(T, x.left, v.bottom, x.right, v) : o.selectCell(T, v.col), o.scrollOnRow(T));
    }
  };
}
class id {
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
const ld = 10;
class gs extends ce {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const r = new id(), { gridStateContext: s } = n;
    r.onEndKeyActionHook = (_) => {
      !_.ctrlKey && !_.shiftKey && _.key === " " && C() === !1 || p(_.key) || _.preventDefault();
    };
    const i = (_ = !1) => {
      if (!s.isIdle) return;
      const I = e.activeCell?.mergeMain ?? e.activeCell;
      I && (e.scrollInView(I.row, I.col), e.forceLayoutTask(), e.doEditMode(I, _));
    };
    this._keyMiddleware.forEach(([_, I]) => r.addKeyAction(_, I));
    const l = new mt(n.rowManager, n.columnManager), {
      selectNextActiveCell: u,
      selectNextSelection: a,
      selectBeforeActiveCell: c,
      selectMoveToFirstRow: h,
      selectMoveToFirstColumn: d,
      selectMoveToLastColumn: f,
      selectMoveToLastRow: w,
      getFirstActiveRow: g
    } = fs(e, this._rowSelection), b = (_) => (I) => {
      s.gridModeState.value.mode !== "edit-cell" && _(I);
    };
    e.addGlobalEventListener(t, "copy", b((_) => e.onNativeCopy(_))), e.addGlobalEventListener(t, "cut", b((_) => e.onNativeCut(_))), e.addGlobalEventListener(t, "paste", b((_) => e.onNativePaste(_))), r.addKeyAction("Tab", (_) => (_.shiftKey ? c() : u(), !0)), r.addKeyAction("ArrowRight", (_) => (_.ctrlKey ? f(_.shiftKey) : a(0, 1, _.shiftKey), !0)), r.addKeyAction("ArrowUp", (_) => (_.ctrlKey ? h(_.shiftKey) : a(-1, 0, _.shiftKey), !0)), r.addKeyAction("ArrowLeft", (_) => (_.ctrlKey ? d(_.shiftKey) : a(0, -1, _.shiftKey), !0)), r.addKeyAction("ArrowDown", (_) => (_.ctrlKey ? w(_.shiftKey) : a(1, 0, _.shiftKey), !0)), r.addKeyAction("Home", (_) => (_.ctrlKey ? (d(_.shiftKey), h(_.shiftKey)) : d(_.shiftKey), !0)), r.addKeyAction("End", (_) => (_.ctrlKey ? (f(_.shiftKey), w(_.shiftKey)) : f(_.shiftKey), !0)), r.addKeyAction("PageUp", (_) => (a(-10, 0, _.shiftKey), !0)), r.addKeyAction("PageDown", (_) => (a(ld, 0, _.shiftKey), !0)), r.addKeyAction("Enter", () => {
      const _ = e.getSelection();
      return _ && (_.top === e.getRowCount() - 1 ? e.selectCell(g(), _.left + 1) : a(1, 0, !1)), !0;
    }), r.addKeyAction("a", y), r.addKeyAction("A", y), r.addKeyAction("z", E), r.addKeyAction("Z", E), r.addKeyAction("y", S), r.addKeyAction("Y", S);
    function y(_) {
      return _.ctrlKey ? (e.selectAll(), _.preventDefault(), !1) : !0;
    }
    function E(_) {
      return _.ctrlKey ? (e.undo(), _.preventDefault(), !1) : !0;
    }
    function S(_) {
      return _.ctrlKey ? (e.redo(), _.preventDefault(), !1) : !0;
    }
    r.addKeyAction("F2", (_) => (i(), !0)), r.addKeyAction("Backspace", (_) => {
      const I = e.getSelection(), R = e.activeCell;
      return !I || !R || e.doEditMode(R, !0), !0;
    }), r.addKeyAction("Delete", (_) => {
      const I = e.getSelection();
      if (!I || l.getCanClearCellCount(I, (m) => e.onClearCellCheck(m)) === 0) return !0;
      const R = new hs(e, [I, !0]);
      return e.commandManager.pushCommandBlock(new Ue("Clear cells", R)), e.clearCells(I, !0), !0;
    }), r.addKeyAction(" ", (_) => {
      const I = e.getSelection();
      if (I === null) return !0;
      if (_.ctrlKey)
        return e.selectColumns(I.left, I.right), !0;
      if (_.shiftKey)
        return e.selectRows(I.top, I.bottom), !0;
      const R = [...l.getSelectionGenerator(I)];
      if (R.length === 0) return !0;
      const m = R[0], v = m.text === "true" ? "false" : "true", T = new Ue("Typing space"), k = (L, z) => {
        T.pushCommand(new Ae(e, [L.row, L.col, { text: v }])), e.setText(L.row, L.col, v), z.onCheckboxClick(L.row, L.col, v === "true");
      }, M = (L, z) => {
        if (L.text === "true") return;
        const O = z.lastClickedRadio;
        O && T.pushCommand(new Ae(e, [O.row, O.col, { text: "false" }])), T.pushCommand(new Ae(e, [L.row, L.col, { text: "true" }])), e.setText(L.row, L.col, "true"), z.onRadioClick(L.row, L.col);
      };
      for (const L of R) {
        if (L.onCheckReadonly() || L.props.disabled) continue;
        const z = L.renderInstance;
        z instanceof pr && k(L, z), L === m && z instanceof Jr && M(L, z);
      }
      return T.commandLength > 0 && e.commandManager.pushCommandBlock(T), !0;
    }), e.addGlobalEventListener(t, "input", (_) => {
      s.gridModeState.isIdle && "data" in _ && i(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (_) => {
      if (
        // editMode에서 온 입력은 pass
        !(!s.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!s.isIdle) {
          _.preventDefault();
          return;
        }
        if (!_.ctrlKey && p(_.key)) {
          i(!0);
          return;
        }
        r.startKeyAction(_);
      }
    }, !0);
    function C() {
      const _ = e.getSelection();
      if (!_) return !1;
      for (const I of l.getSelectionGenerator(_))
        if (I.renderType === "checkbox" || I.renderType === "radio") return !0;
      return !1;
    }
    function p(_) {
      return _ === "Process" || ad.test(_);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const ad = /^[\w]$/;
function Nh(o) {
  return new gs(o ?? {});
}
class cd extends ce {
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
function Bh() {
  return new cd();
}
const ud = /^\d+px$/;
function dd(o) {
  for (const e of o)
    if (typeof e == "string") {
      if (ud.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function hd(o) {
  let e = 0;
  for (const t of o)
    typeof t == "string" && (e += ms(t));
  return e;
}
function ms(o) {
  return parseInt(o.substring(0, o.length - 2), 10);
}
class fd extends ce {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), dd(e), this._fixedColumnWidth = hd(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: r } = n, s = () => {
      const { clientWidth: u } = t;
      if (u === 0) return;
      const a = e.getColCount() - 1, c = u - a - this._fixedColumnWidth, h = N(e.getColCount()).reduce((w, g) => {
        if (!e.getColumnVisible(g)) return w;
        const b = this._columnWeightList[g];
        return b === void 0 ? w + 1 : typeof b == "number" ? w + b : w;
      }, 0);
      let d = 0;
      N(a).forEach((w) => {
        if (!e.getColumnVisible(w)) return;
        const g = this._columnWeightList[w] ?? 1;
        if (typeof g == "string" && g.endsWith("px")) {
          const b = ms(g);
          e.setColumnWidth(w, b);
        } else if (typeof g == "number") {
          const b = g / h;
          e.setColumnWidth(w, Math.floor(b * c));
        }
        d += e.getColumnWidth(w);
      });
      const f = l();
      f && e.setColumnWidth(f, c - d + this._fixedColumnWidth);
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
function Ph(o) {
  return new fd(o ?? { columnWeight: [] });
}
class ps extends ce {
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
      const h = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!h || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        h.dropDisabled !== !1 && // disabled
        (h.props.disabled === !0 || // readonly
        h.onCheckReadonly() === !0 || h.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(h, c) === !0 && (h !== s.latestDragOverCell && u(h), c.preventDefault());
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
function Vh() {
  return new ps();
}
const jo = 10;
class gd extends ce {
  _mountTask({ grid: e, gridStore: t }) {
    const { hook: n } = t, { table: r } = t.elements, s = {
      cell: null
    }, i = () => {
      s.cell = null, r.draggable = !1;
    }, l = (d) => {
      r.draggable = !0, s.cell = d;
    };
    n.addHook("contextMouseDown", c), n.addHook("contextMouseUp", u), n.addHook("contextDragStart", h), n.addHook("contextDragEnd", a), this.addRollbackTask(() => {
      n.removeHook("contextMouseDown", c), n.removeHook("contextMouseUp", u), n.removeHook("contextDragStart", h), n.removeHook("contextDragEnd", a);
    });
    function u(d) {
      i();
    }
    function a(d) {
      i();
    }
    function c(d) {
      if (d.button !== 0) return;
      const f = We("td", "tr", d.target);
      if (!f) {
        i();
        return;
      }
      const w = Ne(f), g = e.cell(w.row, w.col);
      d.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(w.row, w.col), g.props.draggable === !0 && g.props.object ? l(g) : i();
    }
    function h(d) {
      if (!d.dataTransfer || !s.cell || !e.onDragStartCell(s.cell, d)) {
        d.preventDefault();
        return;
      }
      d.dataTransfer.setDragImage(s.cell.element, jo, jo);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Gh() {
  return new gd();
}
const Uo = 10;
class jh extends ce {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: r = !0,
      enabledColumn: s = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: l, rowManager: u, gridStateContext: a } = n;
    let c = null, h = null;
    i.addEventListener("mousedown", d), i.addEventListener("dragstart", f), i.addEventListener("dragover", w), i.addEventListener("drop", g), i.addEventListener("dragleave", b), i.addEventListener("dragend", y), i.addEventListener("mouseup", y), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", d), i.removeEventListener("dragstart", f), i.removeEventListener("dragover", w), i.removeEventListener("drop", g), i.removeEventListener("dragleave", b), i.removeEventListener("dragend", y), i.removeEventListener("mouseup", y);
    });
    function d(p) {
      if (p.button !== 0 || t.classList.contains("is-resizing")) return;
      const _ = We("th", "tr", p.target);
      if (!_) return;
      const I = Ne(_), R = e.cell(I.row, I.col);
      if (R.cellType === "body-cell" || T(R)) return;
      E({
        direction: R.cellType,
        source: m(),
        cell: R
      });
      function m() {
        const { row: k, col: M } = R;
        return R.cellType === "row-header" ? [
          u.getStartOfRowId(k),
          u.getEndOfRowId(k)
        ] : [
          u.getStartOfColumnId(M),
          u.getEndOfColumnId(M)
        ];
      }
      function x(k) {
        return !r || k.row < e.getFreezedRowCount();
      }
      function v(k) {
        return !s || k.col < e.getFreezedColumnCount();
      }
      function T(k) {
        return k.cellType === "row-header" && x(k) || k.cellType === "col-header" && v(k);
      }
    }
    function f(p) {
      if (!p.dataTransfer || !c) {
        p.preventDefault();
        return;
      }
      a.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), p.dataTransfer.effectAllowed = "move", p.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), p.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), p.dataTransfer.setDragImage(c.cell.element, Uo, Uo);
    }
    function w(p) {
      if (!c || !p.dataTransfer || !p.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const _ = e.findCellOrNull(p.offsetY, p.offsetX);
      if (!_ || !_.isHeaderCell || c.direction === "row-header" && I(_, c) || c.direction === "col-header" && R(_, c)) {
        S(), h = _;
        return;
      }
      _ !== h && C(_, c.direction), p.preventDefault();
      function I(m, x) {
        return m.row === x.cell.row || m.row < e.getFreezedRowCount() || l.checkConflictingInRows(m.row, m.row);
      }
      function R(m, x) {
        return m.col === x.cell.col || m.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(m.col, m.col);
      }
    }
    function g() {
      const p = c, _ = h;
      !p || !_ || (S(), p.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(p.source, [_.row, _.row]);
      }), e.forceLayoutTask(), e.selectRow(p.cell.row)), p.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(p.source, [_.col, _.col]);
      }), e.forceLayoutTask(), e.selectColumn(p.cell.col)));
    }
    function b() {
      S(), h = null;
    }
    function y() {
      i.classList.remove("is-dragging"), S(), c = null, i.draggable = !1, h = null, a.setIdle();
    }
    function E({ direction: p, source: _, cell: I }) {
      i.draggable = !0, c = {
        direction: p,
        source: _,
        cell: I
      };
    }
    function S() {
      if (!h || !c) return;
      const { direction: p } = c, _ = p === "row-header" ? e.headerColumns : e.headerRows;
      for (let I = 0; I < _; I++)
        p === "row-header" ? e.cell(h.row, I).element.classList.remove("is-dragging") : e.cell(I, h.col).element.classList.remove("is-dragging");
    }
    function C(p, _) {
      S(), h = p;
      const I = _ === "row-header" ? e.headerColumns : e.headerRows;
      for (let R = 0; R < I; R++)
        _ === "row-header" ? e.cell(p.row, R).element.classList.add("is-dragging") : e.cell(R, p.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const _s = 8, md = {
  normal: Wi,
  error: Fi
}, Ko = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || sl(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      il({
        mainAxis: _s,
        crossAxis: n ?? 0
      }),
      ll(),
      al({ padding: 5 })
    ]
  }).then(({ x: r, y: s, placement: i }) => {
    e.style.left = `${r}px`, e.style.top = `${s}px`, e.dataset.placement = i;
  });
}, pd = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", _d = (o) => o.cellInfo.memo ?? "";
class wd extends ce {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Ai;
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
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? pd(e), a = this.options.getMemoText?.(e) ?? _d(e), c = () => {
      this._tooltipElement.textContent = u, ct("popover").appendChild(this._tooltipElement), Ko(e.element, this._tooltipElement, "bottom");
    }, h = () => {
      this._memoElement.textContent = a ?? "", this._memoElement.className = `${Di} ${md[i]}`, ct("popover").appendChild(this._memoElement), Ko(e.element, this._memoElement, "right-start", _s);
    }, d = !(s && r) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, f = s && a ? window.setTimeout(() => h(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: d,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(d), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
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
const $o = 10;
class Uh extends ce {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, gridStateContext: s } = n, { table: i } = n.elements, l = document.createElement("div");
    l.className = Ni;
    let u = null, a = -1;
    i.addEventListener("mousedown", c), i.addEventListener("dragstart", h), i.addEventListener("dragover", d), i.addEventListener("drop", f), i.addEventListener("dragleave", w), i.addEventListener("dragend", g), i.addEventListener("mouseup", g), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", c), i.removeEventListener("dragstart", h), i.removeEventListener("dragover", d), i.removeEventListener("drop", f), i.removeEventListener("dragleave", w), i.removeEventListener("dragend", g), i.removeEventListener("mouseup", g);
    });
    function c(S) {
      if (S.button !== 0 || t.classList.contains("is-resizing")) return;
      const C = We("th", "tr", S.target);
      if (!C) return;
      const p = Ne(C), _ = e.cell(p.row, p.col);
      if (I(_)) return;
      b({
        source: [
          r.getStartOfRowId(_.row),
          r.getEndOfRowId(_.row)
        ],
        cell: _
      });
      function I(R) {
        return R.cellType !== "row-header" || R.row < e.getFreezedRowCount() || R.row < e.headerRows;
      }
    }
    function h(S) {
      const { offsetY: C, offsetX: p } = S;
      if (e.findCellOrNull(C, p)?.cellType === "row-header") {
        if (!S.dataTransfer || !u) {
          S.preventDefault();
          return;
        }
        s.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), S.dataTransfer.setData("ir-grid/move-rows-dragging", ""), S.dataTransfer.setDragImage(u.cell.element, $o, $o);
      }
    }
    function d(S) {
      const { dataTransfer: C, offsetY: p, offsetX: _ } = S;
      if (!u || !C || !C.types.includes("ir-grid/move-rows-dragging")) return;
      const I = e.findCellOrNull(p, _);
      if (!I) return;
      const R = m(I.row);
      if (I.cellType !== "row-header" || x(R, u)) {
        y(), a = -1;
        return;
      }
      R !== a && E(R, I.col), S.preventDefault();
      function m(v) {
        const T = e.getRow(v), k = p - T.top < T.height / 2;
        return T.rowId + (k ? 0 : 1);
      }
      function x(v, T) {
        const [k, M] = T.source;
        return v >= k && v <= M || v < e.headerRows;
      }
    }
    function f() {
      const S = u, C = a;
      !S || C < 0 || (y(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(S.source, C);
      }), e.forceLayoutTask(), e.selectRow(S.cell.row));
    }
    function w() {
      y(), a = -1;
    }
    function g() {
      i.classList.remove("is-dragging"), y(), u = null, i.draggable = !1, a = -1, s.setIdle();
    }
    function b({ source: S, cell: C }) {
      i.draggable = !0, u = {
        source: S,
        cell: C
      };
    }
    function y() {
      a < 0 || !u || l.remove();
    }
    function E(S, C) {
      y(), a = S;
      const p = Math.min(a, r.length - 1), _ = e.getRow(p), I = _.getCell(C).element.getBoundingClientRect(), R = {
        top: I.top,
        height: 16
      }, m = R.height / 2;
      S === r.length && (R.top += _.height, R.height = m + 1), l.style.top = `${R.top - m}px`, l.style.left = `${I.left}px`, l.style.width = `${e.headerWidth}px`, l.style.height = `${R.height}px`, ct("popover").appendChild(l);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const qo = 10;
class Kh extends ce {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s, gridStateContext: i } = n, { table: l } = n.elements, u = document.createElement("div");
    u.className = Bi;
    let a = null, c = -1;
    l.addEventListener("mousedown", h), l.addEventListener("dragstart", d), l.addEventListener("dragover", f), l.addEventListener("drop", w), l.addEventListener("dragleave", g), l.addEventListener("dragend", b), l.addEventListener("mouseup", b), this.addRollbackTask(() => {
      l.removeEventListener("mousedown", h), l.removeEventListener("dragstart", d), l.removeEventListener("dragover", f), l.removeEventListener("drop", w), l.removeEventListener("dragleave", g), l.removeEventListener("dragend", b), l.removeEventListener("mouseup", b);
    });
    function h(C) {
      if (C.button !== 0 || t.classList.contains("is-resizing")) return;
      const p = We("th", "tr", C.target);
      if (!p) return;
      const _ = Ne(p), I = e.cell(_.row, _.col);
      if (R(I)) return;
      y({
        source: [
          r.getStartOfColumnId(I.col),
          r.getEndOfColumnId(I.col)
        ],
        cell: I
      });
      function R(m) {
        return m.cellType !== "col-header" || m.col < e.getFreezedColumnCount() || m.col < e.headerColumns;
      }
    }
    function d(C) {
      const { offsetY: p, offsetX: _ } = C;
      if (e.findCellOrNull(p, _)?.cellType === "col-header") {
        if (!C.dataTransfer || !a) {
          C.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), C.dataTransfer.setData("ir-grid/move-columns-dragging", ""), C.dataTransfer.setDragImage(a.cell.element, qo, qo);
      }
    }
    function f(C) {
      const { dataTransfer: p, offsetY: _, offsetX: I } = C;
      if (!a || !p || !p.types.includes("ir-grid/move-columns-dragging")) return;
      const R = e.findCellOrNull(_, I);
      if (!R) return;
      const m = x(R.col);
      if (R.cellType !== "col-header" || v(m, a)) {
        E(), c = -1;
        return;
      }
      m !== c && S(R.row, m), C.preventDefault();
      function x(T) {
        const k = e.getColumn(T), M = I - k.left < k.width / 2;
        return k.columnId + (M ? 0 : 1);
      }
      function v(T, k) {
        const [M, L] = k.source;
        return T >= M && T <= L || T < e.headerColumns;
      }
    }
    function w() {
      const C = a, p = c;
      !C || p < 0 || (E(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(C.source, p);
      }), e.forceLayoutTask(), e.selectColumn(C.cell.col));
    }
    function g() {
      E(), c = -1;
    }
    function b() {
      l.classList.remove("is-dragging"), E(), a = null, l.draggable = !1, c = -1, i.setIdle();
    }
    function y({ source: C, cell: p }) {
      l.draggable = !0, a = {
        source: C,
        cell: p
      };
    }
    function E() {
      c < 0 || !a || u.remove();
    }
    function S(C, p) {
      E(), c = p;
      const _ = Math.min(c, s.length - 1), I = e.getColumn(_), R = e.cell(C, _);
      if (!R.isConnected) return;
      const m = R.element.getBoundingClientRect(), x = {
        left: m.left,
        width: 12
      }, v = x.width / 2;
      p === s.length && (x.left += I.width, x.width = v + 1), u.style.top = `${m.top}px`, u.style.left = `${x.left - v}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${x.width}px`, ct("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const Cd = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
];
function vd() {
  const o = Qe("div", Gi), e = [];
  for (const n of Cd)
    if (n.type === "divider") {
      const r = Qe("div", ji);
      o.append(r);
    } else {
      const r = Qe("button", Ui), s = Un(`ir-icon--chevron-${n.value}`);
      r.dataset.type = n.type, r.append(s), r.onclick = () => t.onButtonClick(n.value), o.append(r), e.push(r);
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
class $h extends ce {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s } = n, i = Qe("div", Pi), l = Qe("div", Vi), u = vd();
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const a = {
      up() {
        const g = h(l.scrollTop);
        if (!g) return;
        const b = g.rowId - 1, y = b < 0 ? 0 : e.getRow(b).top;
        l.scrollTop = y;
      },
      down() {
        const g = h(l.scrollTop);
        g && (l.scrollTop = g.bottom);
      },
      left() {
        const g = d(l.scrollLeft);
        if (!g) return;
        const b = g.columnId - 1, y = b < 0 ? 0 : e.getColumn(b).left;
        l.scrollLeft = y;
      },
      right() {
        const g = d(l.scrollLeft);
        g && (l.scrollLeft = g.right);
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
    u.onButtonClick = (g) => a[g](), t.insertAdjacentElement("beforebegin", i), l.appendChild(t), i.append(l), i.append(u.buttonGroup), e.afterRender(() => {
      f(r.freezedRowsHeight, r.freezedRows), w(s.fixedColumnsWidth, s.freezedColumns);
    }), n.hook.addHook("resize", c), n.hook.addSyncHook("changedFreezedRowHeight", f), n.hook.addSyncHook("changedFreezedColumnWidth", w), this.addRollbackTask(() => {
      n.hook.removeHook("resize", c), n.hook.removeSyncHook("changedFreezedRowHeight", f), n.hook.removeSyncHook("changedFreezedColumnWidth", w);
    }), this.addRollbackTask(() => {
      const g = i.nextElementSibling;
      g ? g.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function c() {
      u.visibleButtonGroup(
        t.offsetHeight > l.clientHeight,
        t.offsetWidth > l.clientWidth
      );
    }
    function h(g) {
      let b = 0, y = r.visibleRowList.length - 1;
      for (; b <= y; ) {
        const E = b + Math.floor((y - b) / 2), S = r.visibleRowList[E];
        if (g >= S.top && g < S.bottom)
          return S;
        g < S.top ? y = E - 1 : b = E + 1;
      }
      return null;
    }
    function d(g) {
      let b = 0, y = s.visibleColumnList.length - 1;
      for (; b <= y; ) {
        const E = b + Math.floor((y - b) / 2), S = s.visibleColumnList[E];
        if (g >= S.left && g < S.right)
          return S;
        g < S.left ? y = E - 1 : b = E + 1;
      }
      return null;
    }
    function f(g, b) {
      const y = b, E = g + (y < e.getRowCount() ? r.getRowHeight(y) : 0) + (S() ? mo : 0);
      ze(t, {
        [G.minHeight]: `${E}px`
      }), c();
      function S() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-horizontal-scroll");
      }
    }
    function w(g, b) {
      const y = b, E = g + (y < e.getColCount() ? e.getColumnWidth(y) : 0) + (S() ? mo : 0);
      ze(t, {
        [G.minWidth]: `${E}px`
      }), c();
      function S() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
class qh extends ce {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      onRowClick: r,
      freezeLastColumn: s,
      multipleSelect: i = !1,
      selectOnRightClick: l = !1
    } = this._args, { hook: u, columnManager: a } = n, { visibleColumnList: c } = a, h = this.setPluginAPI(new Rd(e, i)), d = /* @__PURE__ */ new Set([0]);
    if (l && d.add(2), t.classList.add(po), s) {
      t.classList.add(_o);
      const S = n.getThemeValue("grid.forceRenderRightCol");
      n.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), u.addSyncHook("cellLayout", w), u.addSyncHook("postRenderCell", g), this.addRollbackTask(() => {
        n.setGridConfig({ "grid.forceRenderRightCol": S }), u.removeSyncHook("cellLayout", w), u.removeSyncHook("postRenderCell", g);
      });
    }
    const f = (S) => e.onNativeCopy(S);
    u.addBeginHook("contextMouseDown", b), u.addHook("contextMouseDown", y), u.addHook("renderRowElement", E), e.addGlobalEventListener(t, "copy", f), this.addRollbackTask(() => {
      h.clearAllSelections(), t.classList.remove(po, _o), u.removeHook("contextMouseDown", b), u.removeHook("contextMouseDown", y), u.removeHook("renderRowElement", E), t.removeEventListener("copy", f);
    });
    function w(S, C, p) {
      // 가로 scroll이 안생겼다면 리턴
      e.width <= t.clientWidth || // 마지막 열이 아니면 리턴
      C < c.length - 1 || (p.left = e.scrollRight - p.width);
    }
    function g(S) {
      S.isHeaderCell || S.col < c.length - 1 || (S.element.style.zIndex = G.zLevel3);
    }
    function b(S) {
      S.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function y(S) {
      if (!d.has(S.button) || S.target instanceof HTMLButtonElement) return;
      const C = S.target.closest("td");
      if (!C) return;
      const p = Ne(C), _ = e.cell(p.row, p.col);
      _.cellType === "body-cell" && (h.runMouseDownTask(_, S), r?.(e, _.row, S));
    }
    function E(S, C) {
      C.classList.toggle(Ki, h.isRowSelected(S.rowId, !0));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class Rd {
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
var Gt = { exports: {} }, xd = Gt.exports, Yo;
function bd() {
  return Yo || (Yo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(xd, function() {
      return function(t, n, r) {
        n.prototype.isBetween = function(s, i, l, u) {
          var a = r(s), c = r(i), h = (u = u || "()")[0] === "(", d = u[1] === ")";
          return (h ? this.isAfter(a, l) : !this.isBefore(a, l)) && (d ? this.isBefore(c, l) : !this.isAfter(c, l)) || (h ? this.isBefore(a, l) : !this.isAfter(a, l)) && (d ? this.isAfter(c, l) : !this.isBefore(c, l));
        };
      };
    });
  }(Gt)), Gt.exports;
}
var yd = bd();
const Sd = /* @__PURE__ */ $n(yd);
var jt = { exports: {} }, Ed = jt.exports, Xo;
function Id() {
  return Xo || (Xo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Ed, function() {
      return function(t, n) {
        n.prototype.isSameOrAfter = function(r, s) {
          return this.isSame(r, s) || this.isAfter(r, s);
        };
      };
    });
  }(jt)), jt.exports;
}
var kd = Id();
const Td = /* @__PURE__ */ $n(kd);
var Ut = { exports: {} }, Md = Ut.exports, Zo;
function Ld() {
  return Zo || (Zo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Md, function() {
      return function(t, n) {
        n.prototype.isSameOrBefore = function(r, s) {
          return this.isSame(r, s) || this.isBefore(r, s);
        };
      };
    });
  }(Ut)), Ut.exports;
}
var Hd = Ld();
const Od = /* @__PURE__ */ $n(Hd);
Ie.extend(Sd);
Ie.extend(Td);
Ie.extend(Od);
function zd(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return Ad;
  const { metaInfo: t } = o, { operand: n, operator: r } = e, s = () => {
    const a = n.map((h) => parseFloat(h)), c = new Set(a);
    switch (r) {
      case "equals":
        return Xe((h) => c.has(h));
      case "not-equals":
        return Xe((h) => !c.has(h));
      case "less-than":
        return Xe((h) => a.some((d) => h < d));
      case "less-than-or-equal":
        return Xe((h) => a.some((d) => h <= d));
      case "greater-than":
        return Xe((h) => a.some((d) => h > d));
      case "greater-than-or-equal":
        return Xe((h) => a.some((d) => h >= d));
      case "in-range":
        return Xe((h) => a[0] <= h && h <= a[1]);
      case "blank":
        return In;
      default:
        return Ct;
    }
  }, i = () => {
    const { format: a } = t;
    if (!a) throw new Error("format is required for date type column");
    const c = n.map((d) => Ie(d, a));
    switch (r) {
      case "equals":
        return h((d) => c.some((f) => d.isSame(f)));
      case "not-equals":
        return h((d) => c.every((f) => !d.isSame(f)));
      case "greater-than":
        return h((d) => c.some((f) => d.isAfter(f)));
      case "greater-than-or-equal":
        return h((d) => c.some((f) => d.isSameOrAfter(f)));
      case "less-than":
        return h((d) => c.some((f) => d.isBefore(f)));
      case "less-than-or-equal":
        return h((d) => c.some((f) => d.isSameOrBefore(f)));
      case "in-range":
        return h((d) => d.isBetween(c[0], c[1], null, "[]"));
      case "blank":
        return In;
      default:
        return Ct;
    }
    function h(d) {
      return (f) => {
        const w = Ie(f, a);
        return w.isValid() ? d(w) : !1;
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
        return (c) => n.some((h) => c.includes(h));
      case "not-contains":
        return (c) => !n.some((h) => c.includes(h));
      case "starts-with":
        return (c) => n.some((h) => c.startsWith(h));
      case "ends-with":
        return (c) => n.some((h) => c.endsWith(h));
      case "blank":
        return In;
      default:
        return Ct;
    }
  }, u = () => {
    const a = new Set(n.map((c) => c === "true"));
    switch (r) {
      case "equals":
        return Jo((c) => a.has(c));
      case "not-equals":
        return Jo((c) => !a.has(c));
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
function In(o) {
  return o === "";
}
function Ct() {
  return !1;
}
function Ad() {
  return !0;
}
const Dd = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Xe(o) {
  return (e) => Dd.test(e) ? o(parseFloat(e)) : !1;
}
function Jo(o) {
  return (e) => o(e === "true");
}
const Fd = (o) => {
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
var Wd = Object.defineProperty, Nd = Object.getOwnPropertyDescriptor, uo = (o, e, t, n) => {
  for (var r = Nd(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && Wd(e, t, r), r;
};
const kn = Object.freeze({
  textType: "string",
  enabled: !0
});
class pn {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = Fd(e), this._defaultDateFormat = se.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, r]) => this._filterMap.set(parseInt(n, 10), { metaInfo: r }));
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
    return this._filterMap.get(e)?.metaInfo ?? kn;
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
      metaInfo: kn,
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
    const t = this._filterMap.get(e) ?? { metaInfo: kn };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), zd(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: r }) => r(t.getCell(n).text))
    );
  }
}
uo([
  ho()
], pn.prototype, "clearFilters");
uo([
  ho()
], pn.prototype, "removeColFilter");
uo([
  ho()
], pn.prototype, "setColFilter");
function ho() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...r) {
      const s = n.apply(this, r);
      return this._applyFilter(), s;
    }, t;
  };
}
class Yh extends ce {
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
function Bd(o, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, r = 0, s = 0;
  const i = {
    setRow(d) {
      r = d;
    },
    setCol(d) {
      s = d;
    }
  }, l = () => t.hasHeaderRows ? 0 : o.headerRows, u = () => t.hasHeaderColumns ? 0 : o.headerColumns;
  function* a() {
    i.setRow(l()), i.setCol(u());
    const d = o.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield o.cell(r, s);
          break;
        case "selected-col":
          if (!d) throw new Error("No selection in finding");
          mr(s, d) && (yield o.cell(r, s));
          break;
        case "selected-row":
          if (!d) throw new Error("No selection in finding");
          gr(r, d) && (yield o.cell(r, s));
          break;
        case "selection":
          if (!d) throw new Error("No selection in finding");
          wo(r, s, d) && (yield o.cell(r, s));
          break;
        case "custom":
          if (!t.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          wo(r, s, t.customRange) && (yield o.cell(r, s));
          break;
      }
      if (f()) break;
    }
    function f() {
      const w = t.direction;
      if (w === "by-columns" || w === "left-right") {
        if (++r, r >= o.getRowCount() && (++s, r = l()), s >= o.getColCount())
          if (n)
            n = !1, r = l(), s = u();
          else return !0;
      } else if (++s, s >= o.getColCount() && (++r, s = u()), r >= o.getRowCount())
        if (n)
          n = !1, r = l(), s = u();
        else return !0;
    }
  }
  function c(d) {
    const f = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), w = t.matchAll ? `^${f}$` : f, g = t.ignoreCase ? "i" : "", b = new RegExp(w, g);
    return e.onCellCheck ? e.onCellCheck(b, d) : b.test(d.text);
  }
  let h = a();
  return {
    resetCursor() {
      h = a();
    },
    findNext(d) {
      for (fr(t, d) || (h = a()), Object.assign(t, d); ; ) {
        const f = h.next();
        if (!f.done && f.value && c(f.value))
          return n = !0, f.value;
        if (f.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(d) {
      const f = [];
      d && Object.assign(t, d);
      for (const w of a())
        c(w) && f.push(w);
      return f;
    },
    setCursor(d, f) {
      if (d < 0 || f < 0) throw new Error("row or col must be greater than or equal to 0");
      i.setRow(d), i.setCol(f);
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
class Pd extends J {
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
class Vd extends J {
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
class Gd extends J {
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
function ws(o, e) {
  const [t, n] = o, [r, s] = e, i = n - t, l = s - r;
  return i === l ? [e, o] : t < r ? [[s - i, s], [t, t + l]] : [[r, r + i], [n - l, n]];
}
class jd extends J {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...ws(...this._args));
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
class Ud extends J {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...ws(...this._args));
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
class Kd extends J {
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
class $d extends J {
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
class qd extends J {
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
function Cs(o, e) {
  const [t, n] = o, r = n - t;
  return t < e ? [[e - r - 1, e - 1], t] : [[e, e + r], n + 1];
}
class Yd extends J {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...Cs(this._args[0], this._undoContext.targetId));
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
class Xd extends J {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...Cs(this._args[0], this._undoContext.targetId));
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
class Zd extends J {
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
class Jd extends J {
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
class Qd extends J {
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
class eh extends J {
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
class th extends J {
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
class nh extends J {
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
const Qo = {
  addRow: Vd,
  addColumn: Pd,
  setCell: Ae,
  clearCells: hs,
  setRowHeight: cs,
  setColumnWidth: Qd,
  insertRows: $d,
  insertColumns: Kd,
  setRowVisible: eh,
  setColumnVisible: Gd,
  mergeCells: qd,
  splitCells: nh,
  removeRows: Jd,
  removeColumns: Zd,
  exchangeRows: jd,
  exchangeColumns: Ud,
  moveRows: Yd,
  moveColumns: Xd,
  setCellRenderer: th
};
function oh(o) {
  if (!(o in Qo)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return Qo[o];
}
function rh(o) {
  if (o === Z.name)
    return oh;
}
function sh(o, e, t, n, r) {
  const s = rh(e);
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
      return i ? i.isRecording && sh(i, this.constructor.name, t, this, s) : console.warn("No commandManager in this context"), r.apply(this, s);
    }, n;
  };
}
var ih = Object.defineProperty, lh = Object.getOwnPropertyDescriptor, ee = (o, e, t, n) => {
  for (var r = lh(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && ih(e, t, r), r;
};
const Mn = new ao(), ah = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), er = {}, ch = [
  "text/html",
  "text/plain"
];
function uh() {
  return [
    new gs({}),
    new ds(),
    new ps(),
    new us({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new wd({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class Z extends wl {
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
      ...ah,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...this._copyOptions,
      ...e.pasteOptions
    }, s)
      for (const [h, d] of Object.entries(s))
        this._defaultColumnCellFormat[h] = Object.assign(this._defaultColumnCellFormat[h] || {}, d);
    this._gridStore = new zu(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new tl({ context: this }),
        gridStateContext: new ju(this),
        cursorManager: fs(this, !1)
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
    }, r), this.contextElement.classList.add($i, qi), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l } = this._gridStore.elements, { gridStateContext: u } = this._gridStore;
    this.contextElement.appendChild(l);
    let a = {
      offsetWidth: 0,
      offsetHeight: 0,
      className: ""
    }, c = !1;
    this.resizeObserve(() => {
      if (c) return;
      const { offsetHeight: h, offsetWidth: d, className: f } = this.contextElement;
      a.offsetWidth === d && a.offsetHeight === h && a.className === f || (a = { offsetWidth: d, offsetHeight: h, className: f }, c = !0, this._gridStore.hook.emit("resize", []).finally(() => {
        c = !1, this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      }));
    }), this.addCoreElement(l), this._generator = new mt(this._rowManager, this._colManager), this._selector = new Ju(this, u, l), this._scheduleManager = new nd({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? uh()), u.selectionRangeState.addSubscription((h, d) => {
      h?.activeCell !== d?.activeCell && (h?.activeCell.deactivate(), d?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((h, d) => {
      h.forEach((f) => f.deactivate()), d.forEach((f) => f.activate());
    }), u.selectionRangeState.addSubscription((h, d) => {
      d ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(d.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((h, d) => {
      h?.activeCell !== d?.activeCell && Tn(() => this.onChangeCell(d?.activeCell ?? null)), Tn(d ? () => this.onSelectCell(d.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((h, d) => {
      this.onSelectChanged(d?.range ?? null, h?.range ?? null);
    }), u.selectionRangeState.addSubscription((h, d) => {
      d?.activeCell && this._gridStore.gridTextarea.setPosition(d.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((h, d) => {
      this.contextElement.dataset.mode = d.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (h) => this.hook.emit("contextMenu", [h])), this.addGlobalEventListener(this.contextElement, "focus", (h) => this.hook.emit("contextFocus", [h])), this.addGlobalEventListener(this.contextElement, "blur", (h) => this.hook.emit("contextBlur", [h])), this.addGlobalEventListener(this.contextElement, "mousedown", (h) => this.hook.emit("contextMouseDown", [h])), this.addGlobalEventListener(this.contextElement, "mousemove", (h) => this.hook.emit("contextMouseMove", [h])), this.addGlobalEventListener(this.contextElement, "mouseup", (h) => this.hook.emit("contextMouseUp", [h])), this.addGlobalEventListener(this.contextElement, "dragstart", (h) => this.hook.emit("contextDragStart", [h])), this.addGlobalEventListener(this.contextElement, "dragend", (h) => this.hook.emit("contextDragEnd", [h])), this.addGlobalEventListener(this.contextElement, "scroll", (h) => {
      this.hook.emitSync("contextScroll", [h, this.scrollTop, this.scrollLeft]);
    }), this.hook.addBeginHook("contextMenu", (h) => void h.preventDefault()), this.hook.addEndHook("contextMenu", (h) => {
      const { y: d, x: f } = xl(h);
      this.onContextMenu(h, this.findCellOrNull(d, f));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this._initTableRowCol(), this._gridStore.gridTextarea.mountElement(l);
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
      const t = (await hl.read()).flat();
      for await (const n of t)
        for (const r of ch)
          e[r] === "" && n.types.includes(r) && (e[r] = await fl(await n.getType(r)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = pl(er) ?? "";
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
      Fo(
        await this._createClipboardGetter()
      )
    );
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = hu(this, this._pasteOptions), r = n.getPastingRange(e, t), { rowSpan: s, colSpan: i } = this._pasteOptions;
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
    return Bd(this, e);
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
    bu(e.clipboardData, l), _l(er, JSON.stringify(l)), this.focus(), this.onCopy(), e.preventDefault();
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
    const n = Fo(e.clipboardData);
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
  _initColumnHeaderCell(e) {
    e.cellType = "col-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onColumnClick(e);
    };
  }
  _initRowHeaderCell(e) {
    e.cellType = "row-header", e.onClick = () => {
      this.contextElement.classList.contains("is-resizing") || this.onRowClick(e);
    };
  }
  _initBodyCell(e) {
    e.cellType = "body-cell", e.onClear = () => this.onClearCell(e), e.onDblClick = () => this.onDoubleClickCell(e);
  }
  _initGridCellPadding() {
    ze(this.contextElement, {
      [G.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [G.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [G.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [G.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
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
      cellRenderer: i,
      props: s
    });
    return l.onRightClick = (u, a) => this.onCellRightClick(u, a), l.onCheckReadonly = () => this.onCheckCellReadonly(l), l.onPostRender = () => this.hook.emitSync("postRenderCell", [l]), n === "col-header" ? this._initColumnHeaderCell(l) : n === "row-header" ? this._initRowHeaderCell(l) : this._initBodyCell(l), this.onCreatingCell(l), l;
  }
  _createIRGridRow(e, t, n) {
    const r = new Uu({
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
const Xh = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, Zh = /^-?\d+(\.\d+)?$/;
export {
  Xh as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  Zh as ALLOW_ONLY_NUMBER_PATTERN,
  Vh as CellDropPlugin,
  Ph as ColumnFillPlugin,
  es as CustomCellRenderer,
  Nh as DefaultKeyPlugin,
  Z as IRGrid,
  Ic as IRGridButtonRenderer,
  ps as IRGridCellDropPlugin,
  fe as IRGridCellRenderer,
  pr as IRGridCheckboxRenderer,
  fd as IRGridColumnFillPlugin,
  _c as IRGridDatePickerRenderer,
  Lc as IRGridDefaultCellIconButtonRenderer,
  ao as IRGridDefaultCellRenderer,
  gs as IRGridDefaultKeyPlugin,
  jh as IRGridExchangeByHeaderCellPlugin,
  ds as IRGridMouseCellSelectorPlugin,
  Kh as IRGridMoveColumnsPlugin,
  Uh as IRGridMoveRowsPlugin,
  $h as IRGridOverflowPanelPlugin,
  wd as IRGridPopoverPlugin,
  Rc as IRGridProgressRenderer,
  Jr as IRGridRadioCellRenderer,
  us as IRGridResizerPlugin,
  Dh as IRGridRowFilterCellRenderer,
  Yh as IRGridRowFilterPlugin,
  Hc as IRGridRowNoHeaderCellRenderer,
  cd as IRGridRowSelectionPlugin,
  mc as IRGridSelectCellRenderer,
  gd as IRGridSingleCellDragPlugin,
  qh as IRGridTablePlugin,
  Wh as MouseCellSelectorPlugin,
  Fh as ResizerPlugin,
  Bh as RowSelectionPlugin,
  Gh as SingleCellDragPlugin,
  co as cellCompare,
  Do as cellTextToNum,
  Qr as createCellContent,
  Mc as createCellContentWithIconButton,
  zh as createCustomRenderer,
  Fd as createIRGridColumnSortManager,
  Ah as createInferenceSortHandler,
  Ao as numberCheckDefault,
  Th as renderGridButton,
  Lh as renderGridCellDefault,
  Hh as renderGridCellIconButton,
  Sh as renderGridCheckbox,
  Ih as renderGridDatePicker,
  kh as renderGridProgress,
  Mh as renderGridRadio,
  Eh as renderGridSelect,
  Oh as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
