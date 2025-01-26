import "./chunks/_init-DtYkg9NZ.js";
import { a1 as Ts, a2 as Ms, a3 as Ls, J as Hs, L as Os, a4 as sr, M as ir, o as As, q as zs, p as Ds, v as Fs, n as Ps, m as Ws, a5 as Ns, s as Bs, r as Gs, t as Vs, u as js, a6 as Ks, G as $s, H as jn, I as lr, a7 as Us, P as se, a8 as qs, a9 as Ys, aa as Xs, ab as Zs, ac as Js, ad as Qs, ae as ei, Y as ti, af as ni, ag as oi, ah as ri, ai as si, aj as ii, ak as li, al as ai, am as ci, an as Kn, ao as ui, ap as ar, aq as di, k as xe, ar as cr, as as hi, at as fi, au as gi, av as ur, aw as dr, ax as hr, ay as mi, az as pi, aA as _i, aB as wi, aC as Ci, aD as vi, aE as po, aF as Ri, aG as xi, aH as bi, aI as F, aJ as _n, aK as yi, aL as Si, aM as Ei, aN as Ii, aO as ki, l as _o, aP as Ti, aQ as wo, aR as Mi, aS as Li, aT as Hi, aU as Oi, aV as Ai, aW as zi, aX as Di, aY as Fi, aZ as Pi, a_ as Wi, a$ as fr, b0 as gr, b1 as Ln, b2 as Ni, b3 as Bi, b4 as Gi, b5 as Vi, N as ji, b6 as Ki, b7 as $i, b8 as Ui, b9 as qi, ba as Yi, bb as Xi, bc as Zi, bd as Ji, be as Qi, bf as el, bg as Co, bh as vo, bi as tl, bj as nl, U as ol, bk as Ro } from "./chunks/css-rF0v2sLP.js";
import { r as P, g as Ge, h as rl, I as sl, d as il, e as ll, i as al, c as cl, f as ul } from "./chunks/command-manager-13fgVXM7.js";
import { h as mr, a as wn, g as ut, b as $n, j as Yt, r as dl, u as hl, v as fl, c as gl, o as ml, f as pl, s as _l } from "./chunks/floating-CqSaT-kJ.js";
import { c as Hn } from "./chunks/clsx-OuTLNxxd.js";
import { i as ie, d as be } from "./chunks/index-Dg1kU5Nj.js";
import { o as wl, q as Cl, g as Ve, a as Un, j as Et, c as vl, n as U, f as Xe, R as qn, e as De, C as Rl, m as xl } from "./chunks/rx-state-qVN2AgXP.js";
import { a as bl, c as Ue } from "./chunks/asserts-CpwDJsre.js";
import { c as pr } from "./chunks/outside-DA89_Rlc.js";
import { p as yl } from "./chunks/pick-BLZiDVxr.js";
import { i as _r, r as Sl, w as El } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { g as Yn } from "./chunks/_commonjsHelpers-DaMA6jEr.js";
import { I as Il } from "./chunks/index-D3h_uvNf.js";
import { v as kl } from "./chunks/v4-CDGHvpHw.js";
class Tl {
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
  return wl(function(t, n) {
    var r = 0;
    t.subscribe(Cl(n, function(s) {
      n.next(o.call(e, s, r++));
    }));
  });
}
function xo(o, e, t) {
  return wr(o, t) && Cr(e, t);
}
function Fe(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1"), t = parseInt(o.getAttribute("data-col") || "-1");
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function wr(o, e) {
  return o >= e.top && o <= e.bottom;
}
function Cr(o, e) {
  return o >= e.left && o <= e.right;
}
function zt(o, e, t) {
  t ? o.classList.add(e) : o.classList.remove(e);
}
function Ml(o) {
  let e = o.firstChild, t = 0;
  for (; e; ) {
    let n = e.firstChild;
    for (; n; )
      n instanceof HTMLElement && n.isConnected && (t = Math.max(n.offsetHeight, t)), n = n.nextSibling;
    e = e.nextSibling;
  }
  return t;
}
function Ll(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const Hl = 20, Ol = 5;
class we {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getCellInnerWidth(e, t, n) {
    const r = Ve(e, t), s = [n.icon, n.sortOrder].reduce((u, l) => l ? u + 1 : u, 0) * (Hl + Ol), i = `${n.text ?? ""}`.split(`
`), c = s + r.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + P(1, i.length).reduce(
      (u, l) => Math.max(u, r.calculateWidth(i[l])),
      c
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    const n = t.gridStore, r = t.paddingTop ?? n.getThemeValue("grid.paddingTop"), s = t.paddingBottom ?? n.getThemeValue("grid.paddingBottom");
    return r + s + Ml(e);
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
class J extends Tl {
}
class ft extends J {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: yl(
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
const xt = {
  checkbox: Hs,
  checkboxWrapper: Os,
  checkboxText: sr,
  checkboxInput: ir,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, Al = 16, On = 6, zl = On * 2, Dl = 20;
class vr extends we {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.classList.add(Ts, xt.checkbox), s.classList.add(Ms, xt.checkboxWrapper), i.type = "checkbox", i.className = xt.checkboxInput, s.appendChild(i), n.icon && s.appendChild(Un(Et(n.icon))), n.label) {
      const c = document.createElement("span");
      c.className = `${Ls} ${xt.checkboxText}`, c.innerText = n.label, s.appendChild(c);
    }
    return n.horizontalAlign && r.classList.add(xt[`horizontal_${n.horizontalAlign}`]), r.appendChild(s), i.checked = n.text === "true", s.onkeydown = (c) => c.preventDefault(), i.onchange = () => {
      const c = i.checked, u = c ? "true" : "false", { commandManager: l } = n.gridStore, a = new ft(n.gridStore.commandContext, [e, t, { text: u }]);
      a.onUndo = () => {
        this.onCheckboxClick(e, t, !c);
      }, a.onExecute = () => {
        this.onCheckboxClick(e, t, c);
      }, l.pushCommandBlock(new Ge(
        "Change checkbox",
        a
      )), n.text = u, this.onCheckboxClick(e, t, c);
    }, r;
  }
  getCellInnerWidth(e, t, n) {
    const r = Ve(e, t), s = n.label ? On + r.calculateWidth(n.label) : 0, i = n.icon ? On + Dl : 0;
    return Al + zl + s + i + this.getHorizontalCellPadding(n);
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
function Lh(o) {
  const e = new vr(o ?? {});
  return () => e;
}
const bo = !1;
var Xn = Array.isArray, Fl = Array.prototype.indexOf, Zn = Array.from, Rr = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, xr = Object.getOwnPropertyDescriptors, Pl = Object.prototype, Wl = Array.prototype, Jn = Object.getPrototypeOf;
const Be = () => {
};
function Nl(o) {
  return o();
}
function Xt(o) {
  for (var e = 0; e < o.length; e++)
    o[e]();
}
const me = 2, br = 4, Mt = 8, Qn = 16, Me = 32, gt = 64, Zt = 128, Qe = 256, Jt = 512, oe = 1024, Le = 2048, et = 4096, ye = 8192, mt = 16384, Bl = 32768, rn = 65536, Gl = 1 << 17, Vl = 1 << 19, yr = 1 << 20, Je = Symbol("$state"), jl = Symbol("legacy props"), Kl = Symbol("");
function Sr(o) {
  return o === this.v;
}
function Er(o, e) {
  return o != o ? e == e : o !== e || o !== null && typeof o == "object" || typeof o == "function";
}
function Ir(o) {
  return !Er(o, this.v);
}
function $l(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ul() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ql(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xl(o) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ql() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ea() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let pt = !1, ta = !1;
function na() {
  pt = !0;
}
const eo = 1, to = 2, kr = 4, oa = 8, ra = 16, sa = 1, ia = 2, la = 8, aa = 1, ca = 2, le = Symbol();
function fe(o, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: o,
    reactions: null,
    equals: Sr,
    rv: 0,
    wv: 0
  };
  return t;
}
function Se(o) {
  return /* @__PURE__ */ Tr(fe(o));
}
// @__NO_SIDE_EFFECTS__
function sn(o, e = !1) {
  const t = fe(o);
  return e || (t.equals = Ir), pt && V !== null && V.l !== null && (V.l.s ??= []).push(t), t;
}
function ua(o, e = !1) {
  return /* @__PURE__ */ Tr(/* @__PURE__ */ sn(o, e));
}
// @__NO_SIDE_EFFECTS__
function Tr(o) {
  return j !== null && !Ae && j.f & me && (Ie === null ? Ca([o]) : Ie.push(o)), o;
}
function K(o, e) {
  return j !== null && !Ae && un() && j.f & (me | Qn) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ie === null || !Ie.includes(o)) && ea(), An(o, e);
}
function An(o, e) {
  return o.equals(e) || (o.v, o.v = e, o.wv = qr(), Mr(o, Le), un() && N !== null && N.f & oe && !(N.f & (Me | gt)) && (Oe === null ? va([o]) : Oe.push(o))), e;
}
function Mr(o, e) {
  var t = o.reactions;
  if (t !== null)
    for (var n = un(), r = t.length, s = 0; s < r; s++) {
      var i = t[s], c = i.f;
      c & Le || !n && i === N || (Re(i, e), c & (oe | Qe) && (c & me ? Mr(
        /** @type {Derived} */
        i,
        et
      ) : hn(
        /** @type {Effect} */
        i
      )));
    }
}
let Lr = !1;
function $(o, e = null, t) {
  if (typeof o != "object" || o === null || Je in o)
    return o;
  const n = Jn(o);
  if (n !== Pl && n !== Wl)
    return o;
  var r = /* @__PURE__ */ new Map(), s = Xn(o), i = fe(0);
  s && r.set("length", fe(
    /** @type {any[]} */
    o.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    o,
    {
      defineProperty(u, l, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Zl();
        var d = r.get(l);
        return d === void 0 ? (d = fe(a.value), r.set(l, d)) : K(d, $(a.value, c)), !0;
      },
      deleteProperty(u, l) {
        var a = r.get(l);
        if (a === void 0)
          l in u && r.set(l, fe(le));
        else {
          if (s && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h < d.v && K(d, h);
          }
          K(a, le), yo(i);
        }
        return !0;
      },
      get(u, l, a) {
        if (l === Je)
          return o;
        var d = r.get(l), h = l in u;
        if (d === void 0 && (!h || Ze(u, l)?.writable) && (d = fe($(h ? u[l] : le, c)), r.set(l, d)), d !== void 0) {
          var f = M(d);
          return f === le ? void 0 : f;
        }
        return Reflect.get(u, l, a);
      },
      getOwnPropertyDescriptor(u, l) {
        var a = Reflect.getOwnPropertyDescriptor(u, l);
        if (a && "value" in a) {
          var d = r.get(l);
          d && (a.value = M(d));
        } else if (a === void 0) {
          var h = r.get(l), f = h?.v;
          if (h !== void 0 && f !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return a;
      },
      has(u, l) {
        if (l === Je)
          return !0;
        var a = r.get(l), d = a !== void 0 && a.v !== le || Reflect.has(u, l);
        if (a !== void 0 || N !== null && (!d || Ze(u, l)?.writable)) {
          a === void 0 && (a = fe(d ? $(u[l], c) : le), r.set(l, a));
          var h = M(a);
          if (h === le)
            return !1;
        }
        return d;
      },
      set(u, l, a, d) {
        var h = r.get(l), f = l in u;
        if (s && l === "length")
          for (var v = a; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = r.get(v + "");
            p !== void 0 ? K(p, le) : v in u && (p = fe(le), r.set(v + "", p));
          }
        h === void 0 ? (!f || Ze(u, l)?.writable) && (h = fe(void 0), K(h, $(a, c)), r.set(l, h)) : (f = h.v !== le, K(h, $(a, c)));
        var E = Reflect.getOwnPropertyDescriptor(u, l);
        if (E?.set && E.set.call(d, a), !f) {
          if (s && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(l);
            Number.isInteger(y) && y >= b.v && K(b, y + 1);
          }
          yo(i);
        }
        return !0;
      },
      ownKeys(u) {
        M(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = r.get(h);
          return f === void 0 || f.v !== le;
        });
        for (var [a, d] of r)
          d.v !== le && !(a in u) && l.push(a);
        return l;
      },
      setPrototypeOf() {
        Jl();
      }
    }
  );
}
function yo(o, e = 1) {
  K(o, o.v + e);
}
var So, Hr, Or;
function da() {
  if (So === void 0) {
    So = window;
    var o = Element.prototype, e = Node.prototype;
    Hr = Ze(e, "firstChild").get, Or = Ze(e, "nextSibling").get, o.__click = void 0, o.__className = "", o.__attributes = null, o.__styles = null, o.__e = void 0, Text.prototype.__t = void 0;
  }
}
function no(o = "") {
  return document.createTextNode(o);
}
// @__NO_SIDE_EFFECTS__
function Qt(o) {
  return Hr.call(o);
}
// @__NO_SIDE_EFFECTS__
function ln(o) {
  return Or.call(o);
}
function ne(o, e) {
  return /* @__PURE__ */ Qt(o);
}
function qe(o, e) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qt(
        /** @type {Node} */
        o
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ ln(t) : t;
  }
}
function Ee(o, e = 1, t = !1) {
  let n = o;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ln(n);
  return n;
}
function ha(o) {
  o.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function G(o) {
  var e = me | Le;
  N === null ? e |= Qe : N.f |= yr;
  var t = j !== null && j.f & me ? (
    /** @type {Derived} */
    j
  ) : null;
  const n = {
    children: null,
    ctx: V,
    deps: null,
    equals: Sr,
    f: e,
    fn: o,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? N
  };
  return t !== null && (t.children ??= []).push(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ar(o) {
  const e = /* @__PURE__ */ G(o);
  return e.equals = Ir, e;
}
function zr(o) {
  var e = o.children;
  if (e !== null) {
    o.children = null;
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      n.f & me ? oo(
        /** @type {Derived} */
        n
      ) : je(
        /** @type {Effect} */
        n
      );
    }
  }
}
function fa(o) {
  for (var e = o.parent; e !== null; ) {
    if (!(e.f & me))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Dr(o) {
  var e, t = N;
  ke(fa(o));
  try {
    zr(o), e = Xr(o);
  } finally {
    ke(t);
  }
  return e;
}
function Fr(o) {
  var e = Dr(o), t = (Ye || o.f & Qe) && o.deps !== null ? et : oe;
  Re(o, t), o.equals(e) || (o.v = e, o.wv = qr());
}
function oo(o) {
  zr(o), Tt(o, 0), Re(o, mt), o.v = o.children = o.deps = o.ctx = o.reactions = null;
}
function Pr(o) {
  N === null && j === null && ql(), j !== null && j.f & Qe && Ul(), lo && $l();
}
function ga(o, e) {
  var t = e.last;
  t === null ? e.last = e.first = o : (t.next = o, o.prev = t, e.last = o);
}
function _t(o, e, t, n = !0) {
  var r = (o & gt) !== 0, s = N, i = {
    ctx: V,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: o | Le,
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
  if (t) {
    var c = lt;
    try {
      Eo(!0), ao(i), i.f |= Bl;
    } catch (a) {
      throw je(i), a;
    } finally {
      Eo(c);
    }
  } else e !== null && hn(i);
  var u = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (yr | Zt)) === 0;
  if (!u && !r && n && (s !== null && ga(i, s), j !== null && j.f & me)) {
    var l = (
      /** @type {Derived} */
      j
    );
    (l.children ??= []).push(i);
  }
  return i;
}
function ro(o) {
  const e = _t(Mt, null, !1);
  return Re(e, oe), e.teardown = o, e;
}
function It(o) {
  Pr();
  var e = N !== null && (N.f & Me) !== 0 && V !== null && !V.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      V
    );
    (t.e ??= []).push({
      fn: o,
      effect: N,
      reaction: j
    });
  } else {
    var n = an(o);
    return n;
  }
}
function ma(o) {
  return Pr(), Wr(o);
}
function pa(o) {
  const e = _t(gt, o, !0);
  return (t = {}) => new Promise((n) => {
    t.outro ? kt(e, () => {
      je(e), n(void 0);
    }) : (je(e), n(void 0));
  });
}
function an(o) {
  return _t(br, o, !1);
}
function Wr(o) {
  return _t(Mt, o, !0);
}
function ve(o, e = [], t = G) {
  const n = e.map(t);
  return cn(() => o(...n.map(M)));
}
function cn(o, e = 0) {
  return _t(Mt | Qn | e, o, !0);
}
function dt(o, e = !0) {
  return _t(Mt | Me, o, !0, e);
}
function Nr(o) {
  var e = o.teardown;
  if (e !== null) {
    const t = lo, n = j;
    Io(!0), Ke(null);
    try {
      e.call(null);
    } finally {
      Io(t), Ke(n);
    }
  }
}
function Br(o) {
  var e = o.deriveds;
  if (e !== null) {
    o.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      oo(e[t]);
  }
}
function Gr(o, e = !1) {
  var t = o.first;
  for (o.first = o.last = null; t !== null; ) {
    var n = t.next;
    je(t, e), t = n;
  }
}
function _a(o) {
  for (var e = o.first; e !== null; ) {
    var t = e.next;
    e.f & Me || je(e), e = t;
  }
}
function je(o, e = !0) {
  var t = !1;
  if ((e || o.f & Vl) && o.nodes_start !== null) {
    for (var n = o.nodes_start, r = o.nodes_end; n !== null; ) {
      var s = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ln(n)
      );
      n.remove(), n = s;
    }
    t = !0;
  }
  Gr(o, e && !t), Br(o), Tt(o, 0), Re(o, mt);
  var i = o.transitions;
  if (i !== null)
    for (const u of i)
      u.stop();
  Nr(o);
  var c = o.parent;
  c !== null && c.first !== null && Vr(o), o.next = o.prev = o.teardown = o.ctx = o.deps = o.fn = o.nodes_start = o.nodes_end = null;
}
function Vr(o) {
  var e = o.parent, t = o.prev, n = o.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), e !== null && (e.first === o && (e.first = n), e.last === o && (e.last = t));
}
function kt(o, e) {
  var t = [];
  so(o, t, !0), jr(t, () => {
    je(o), e && e();
  });
}
function jr(o, e) {
  var t = o.length;
  if (t > 0) {
    var n = () => --t || e();
    for (var r of o)
      r.out(n);
  } else
    e();
}
function so(o, e, t) {
  if (!(o.f & ye)) {
    if (o.f ^= ye, o.transitions !== null)
      for (const i of o.transitions)
        (i.is_global || t) && e.push(i);
    for (var n = o.first; n !== null; ) {
      var r = n.next, s = (n.f & rn) !== 0 || (n.f & Me) !== 0;
      so(n, e, s ? t : !1), n = r;
    }
  }
}
function en(o) {
  Kr(o, !0);
}
function Kr(o, e) {
  if (o.f & ye) {
    o.f ^= ye, o.f & oe || (o.f ^= oe), Lt(o) && (Re(o, Le), hn(o));
    for (var t = o.first; t !== null; ) {
      var n = t.next, r = (t.f & rn) !== 0 || (t.f & Me) !== 0;
      Kr(t, r ? e : !1), t = n;
    }
    if (o.transitions !== null)
      for (const s of o.transitions)
        (s.is_global || e) && s.in();
  }
}
let zn = !1, Dn = [];
function wa() {
  zn = !1;
  const o = Dn.slice();
  Dn = [], Xt(o);
}
function io(o) {
  zn || (zn = !0, queueMicrotask(wa)), Dn.push(o);
}
function $r(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let jt = !1, tn = !1, nn = null, lt = !1, lo = !1;
function Eo(o) {
  lt = o;
}
function Io(o) {
  lo = o;
}
let Fn = [], St = 0;
let j = null, Ae = !1;
function Ke(o) {
  j = o;
}
let N = null;
function ke(o) {
  N = o;
}
let Ie = null;
function Ca(o) {
  Ie = o;
}
let ae = null, he = 0, Oe = null;
function va(o) {
  Oe = o;
}
let Ur = 1, on = 0, Ye = !1, V = null;
function qr() {
  return ++Ur;
}
function un() {
  return !pt || V !== null && V.l === null;
}
function Lt(o) {
  var e = o.f;
  if (e & Le)
    return !0;
  if (e & et) {
    var t = o.deps, n = (e & Qe) !== 0;
    if (t !== null) {
      var r, s, i = (e & Jt) !== 0, c = n && N !== null && !Ye, u = t.length;
      if (i || c) {
        for (r = 0; r < u; r++)
          s = t[r], (i || !s?.reactions?.includes(o)) && (s.reactions ??= []).push(o);
        i && (o.f ^= Jt);
      }
      for (r = 0; r < u; r++)
        if (s = t[r], Lt(
          /** @type {Derived} */
          s
        ) && Fr(
          /** @type {Derived} */
          s
        ), s.wv > o.wv)
          return !0;
    }
    (!n || N !== null && !Ye) && Re(o, oe);
  }
  return !1;
}
function Ra(o, e) {
  for (var t = e; t !== null; ) {
    if (t.f & Zt)
      try {
        t.fn(o);
        return;
      } catch {
        t.f ^= Zt;
      }
    t = t.parent;
  }
  throw jt = !1, o;
}
function xa(o) {
  return (o.f & mt) === 0 && (o.parent === null || (o.parent.f & Zt) === 0);
}
function dn(o, e, t, n) {
  if (jt) {
    if (t === null && (jt = !1), xa(e))
      throw o;
    return;
  }
  t !== null && (jt = !0);
  {
    Ra(o, e);
    return;
  }
}
function Yr(o, e, t = 0) {
  var n = o.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      s.f & me ? Yr(
        /** @type {Derived} */
        s,
        e,
        t + 1
      ) : e === s && (t === 0 ? Re(s, Le) : s.f & oe && Re(s, et), hn(
        /** @type {Effect} */
        s
      ));
    }
}
function Xr(o) {
  var e = ae, t = he, n = Oe, r = j, s = Ye, i = Ie, c = V, u = Ae, l = o.f;
  ae = /** @type {null | Value[]} */
  null, he = 0, Oe = null, j = l & (Me | gt) ? null : o, Ye = !lt && (l & Qe) !== 0, Ie = null, V = o.ctx, Ae = !1, on++;
  try {
    var a = (
      /** @type {Function} */
      (0, o.fn)()
    ), d = o.deps;
    if (ae !== null) {
      var h;
      if (Tt(o, he), d !== null && he > 0)
        for (d.length = he + ae.length, h = 0; h < ae.length; h++)
          d[he + h] = ae[h];
      else
        o.deps = d = ae;
      if (!Ye)
        for (h = he; h < d.length; h++)
          (d[h].reactions ??= []).push(o);
    } else d !== null && he < d.length && (Tt(o, he), d.length = he);
    if (un() && Oe !== null && !(o.f & (me | et | Le)))
      for (h = 0; h < /** @type {Source[]} */
      Oe.length; h++)
        Yr(
          Oe[h],
          /** @type {Effect} */
          o
        );
    return r !== null && on++, a;
  } finally {
    ae = e, he = t, Oe = n, j = r, Ye = s, Ie = i, V = c, Ae = u;
  }
}
function ba(o, e) {
  let t = e.reactions;
  if (t !== null) {
    var n = Fl.call(t, o);
    if (n !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[n] = t[r], t.pop());
    }
  }
  t === null && e.f & me && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(e)) && (Re(e, et), e.f & (Qe | Jt) || (e.f ^= Jt), Tt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Tt(o, e) {
  var t = o.deps;
  if (t !== null)
    for (var n = e; n < t.length; n++)
      ba(o, t[n]);
}
function ao(o) {
  var e = o.f;
  if (!(e & mt)) {
    Re(o, oe);
    var t = N, n = V;
    N = o;
    try {
      e & Qn ? _a(o) : Gr(o), Br(o), Nr(o);
      var r = Xr(o);
      o.teardown = typeof r == "function" ? r : null, o.wv = Ur;
      var s = o.deps, i;
      bo && ta && o.f & Le;
    } catch (c) {
      dn(c, o, t, n || o.ctx);
    } finally {
      N = t;
    }
  }
}
function ya() {
  if (St > 1e3) {
    St = 0;
    try {
      Yl();
    } catch (o) {
      if (nn !== null)
        dn(o, nn, null);
      else
        throw o;
    }
  }
  St++;
}
function Sa(o) {
  var e = o.length;
  if (e !== 0) {
    ya();
    var t = lt;
    lt = !0;
    try {
      for (var n = 0; n < e; n++) {
        var r = o[n];
        r.f & oe || (r.f ^= oe);
        var s = [];
        Zr(r, s), Ea(s);
      }
    } finally {
      lt = t;
    }
  }
}
function Ea(o) {
  var e = o.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var n = o[t];
      if (!(n.f & (mt | ye)))
        try {
          Lt(n) && (ao(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Vr(n) : n.fn = null));
        } catch (r) {
          dn(r, n, null, n.ctx);
        }
    }
}
function Ia() {
  if (tn = !1, St > 1001)
    return;
  const o = Fn;
  Fn = [], Sa(o), tn || (St = 0, nn = null);
}
function hn(o) {
  tn || (tn = !0, queueMicrotask(Ia)), nn = o;
  for (var e = o; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (gt | Me)) {
      if (!(t & oe)) return;
      e.f ^= oe;
    }
  }
  Fn.push(e);
}
function Zr(o, e) {
  var t = o.first, n = [];
  e: for (; t !== null; ) {
    var r = t.f, s = (r & Me) !== 0, i = s && (r & oe) !== 0, c = t.next;
    if (!i && !(r & ye))
      if (r & Mt) {
        if (s)
          t.f ^= oe;
        else
          try {
            Lt(t) && ao(t);
          } catch (d) {
            dn(d, t, null, t.ctx);
          }
        var u = t.first;
        if (u !== null) {
          t = u;
          continue;
        }
      } else r & br && n.push(t);
    if (c === null) {
      let d = t.parent;
      for (; d !== null; ) {
        if (o === d)
          break e;
        var l = d.next;
        if (l !== null) {
          t = l;
          continue e;
        }
        d = d.parent;
      }
    }
    t = c;
  }
  for (var a = 0; a < n.length; a++)
    u = n[a], e.push(u), Zr(u, e);
}
function M(o) {
  var e = o.f, t = (e & me) !== 0;
  if (t && e & mt) {
    var n = Dr(
      /** @type {Derived} */
      o
    );
    return oo(
      /** @type {Derived} */
      o
    ), n;
  }
  if (j !== null && !Ae) {
    Ie !== null && Ie.includes(o) && Ql();
    var r = j.deps;
    o.rv < on && (o.rv = on, ae === null && r !== null && r[he] === o ? he++ : ae === null ? ae = [o] : ae.push(o));
  } else if (t && /** @type {Derived} */
  o.deps === null)
    for (var s = (
      /** @type {Derived} */
      o
    ), i = s.parent, c = s; i !== null; )
      if (i.f & me) {
        var u = (
          /** @type {Derived} */
          i
        );
        c = u, i = u.parent;
      } else {
        var l = (
          /** @type {Effect} */
          i
        );
        l.deriveds?.includes(c) || (l.deriveds ??= []).push(c);
        break;
      }
  return t && (s = /** @type {Derived} */
  o, Lt(s) && Fr(s)), o.v;
}
function wt(o) {
  var e = Ae;
  try {
    return Ae = !0, o();
  } finally {
    Ae = e;
  }
}
const ka = ~(Le | et | oe);
function Re(o, e) {
  o.f = o.f & ka | e;
}
function ce(o) {
  return (
    /** @type {T} */
    Jr().get(o)
  );
}
function Dt(o, e) {
  return Jr().set(o, e), e;
}
function Jr(o) {
  return V === null && $r(), V.c ??= new Map(Ta(V) || void 0);
}
function Ta(o) {
  let e = o.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
function pe(o, e = !1, t) {
  V = {
    p: V,
    c: null,
    e: null,
    m: !1,
    s: o,
    x: null,
    l: null
  }, pt && !e && (V.l = {
    s: null,
    u: null,
    r1: [],
    r2: fe(!1)
  });
}
function _e(o) {
  const e = V;
  if (e !== null) {
    o !== void 0 && (e.x = o);
    const i = e.e;
    if (i !== null) {
      var t = N, n = j;
      e.e = null;
      try {
        for (var r = 0; r < i.length; r++) {
          var s = i[r];
          ke(s.effect), Ke(s.reaction), an(s.fn);
        }
      } finally {
        ke(t), Ke(n);
      }
    }
    V = e.p, e.m = !0;
  }
  return o || /** @type {T} */
  {};
}
function Ma(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (Je in o)
      Pn(o);
    else if (!Array.isArray(o))
      for (let e in o) {
        const t = o[e];
        typeof t == "object" && t && Je in t && Pn(t);
      }
  }
}
function Pn(o, e = /* @__PURE__ */ new Set()) {
  if (typeof o == "object" && o !== null && // We don't want to traverse DOM elements
  !(o instanceof EventTarget) && !e.has(o)) {
    e.add(o), o instanceof Date && o.getTime();
    for (let n in o)
      try {
        Pn(o[n], e);
      } catch {
      }
    const t = Jn(o);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const n = xr(t);
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
const La = ["touchstart", "touchmove"];
function Ha(o) {
  return La.includes(o);
}
function Oa(o) {
  var e = j, t = N;
  Ke(null), ke(null);
  try {
    return o();
  } finally {
    Ke(e), ke(t);
  }
}
const Qr = /* @__PURE__ */ new Set(), Wn = /* @__PURE__ */ new Set();
function Aa(o, e, t, n) {
  function r(s) {
    if (n.capture || yt.call(e, s), !s.cancelBubble)
      return Oa(() => t.call(this, s));
  }
  return o.startsWith("pointer") || o.startsWith("touch") || o === "wheel" ? io(() => {
    e.addEventListener(o, r, n);
  }) : e.addEventListener(o, r, n), r;
}
function za(o, e, t, n, r) {
  var s = { capture: n, passive: r }, i = Aa(o, e, t, s);
  (e === document.body || e === window || e === document) && ro(() => {
    e.removeEventListener(o, i, s);
  });
}
function fn(o) {
  for (var e = 0; e < o.length; e++)
    Qr.add(o[e]);
  for (var t of Wn)
    t(o);
}
function yt(o) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), n = o.type, r = o.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || o.target
  ), i = 0, c = o.__root;
  if (c) {
    var u = r.indexOf(c);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      o.__root = e;
      return;
    }
    var l = r.indexOf(e);
    if (l === -1)
      return;
    u <= l && (i = u);
  }
  if (s = /** @type {Element} */
  r[i] || o.target, s !== e) {
    Rr(o, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var a = j, d = N;
    Ke(null), ke(null);
    try {
      for (var h, f = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + n];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (Xn(p)) {
              var [E, ...b] = p;
              E.apply(s, [o, ...b]);
            } else
              p.call(s, o);
        } catch (y) {
          h ? f.push(y) : h = y;
        }
        if (o.cancelBubble || v === e || v === null)
          break;
        s = v;
      }
      if (h) {
        for (let y of f)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      o.__root = e, delete o.currentTarget, Ke(a), ke(d);
    }
  }
}
function Da(o) {
  var e = document.createElement("template");
  return e.innerHTML = o, e.content;
}
function Nn(o, e) {
  var t = (
    /** @type {Effect} */
    N
  );
  t.nodes_start === null && (t.nodes_start = o, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function te(o, e) {
  var t = (e & aa) !== 0, n = (e & ca) !== 0, r, s = !o.startsWith("<!>");
  return () => {
    r === void 0 && (r = Da(s ? o : "<!>" + o), t || (r = /** @type {Node} */
    /* @__PURE__ */ Qt(r)));
    var i = (
      /** @type {TemplateNode} */
      n ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(i)
      ), u = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Nn(c, u);
    } else
      Nn(i, i);
    return i;
  };
}
function vn() {
  var o = document.createDocumentFragment(), e = document.createComment(""), t = no();
  return o.append(e, t), Nn(e, t), o;
}
function Y(o, e) {
  o !== null && o.before(
    /** @type {Node} */
    e
  );
}
function ht(o, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (o.__t ??= o.nodeValue) && (o.__t = t, o.nodeValue = t == null ? "" : t + "");
}
function es(o, e) {
  return Fa(o, e);
}
const ot = /* @__PURE__ */ new Map();
function Fa(o, { target: e, anchor: t, props: n = {}, events: r, context: s, intro: i = !0 }) {
  da();
  var c = /* @__PURE__ */ new Set(), u = (d) => {
    for (var h = 0; h < d.length; h++) {
      var f = d[h];
      if (!c.has(f)) {
        c.add(f);
        var v = Ha(f);
        e.addEventListener(f, yt, { passive: v });
        var p = ot.get(f);
        p === void 0 ? (document.addEventListener(f, yt, { passive: v }), ot.set(f, 1)) : ot.set(f, p + 1);
      }
    }
  };
  u(Zn(Qr)), Wn.add(u);
  var l = void 0, a = pa(() => {
    var d = t ?? e.appendChild(no());
    return dt(() => {
      if (s) {
        pe({});
        var h = (
          /** @type {ComponentContext} */
          V
        );
        h.c = s;
      }
      r && (n.$$events = r), l = o(d, n) || {}, s && _e();
    }), () => {
      for (var h of c) {
        e.removeEventListener(h, yt);
        var f = (
          /** @type {number} */
          ot.get(h)
        );
        --f === 0 ? (document.removeEventListener(h, yt), ot.delete(h)) : ot.set(h, f);
      }
      Wn.delete(u), d !== t && d.parentNode?.removeChild(d);
    };
  });
  return Bn.set(l, a), l;
}
let Bn = /* @__PURE__ */ new WeakMap();
function ts(o, e) {
  const t = Bn.get(o);
  return t ? (Bn.delete(o), t(e)) : Promise.resolve();
}
function ze(o, e, t = !1) {
  var n = o, r = null, s = null, i = le, c = t ? rn : 0, u = !1;
  const l = (d, h = !0) => {
    u = !0, a(h, d);
  }, a = (d, h) => {
    i !== (i = d) && (i ? (r ? en(r) : h && (r = dt(() => h(n))), s && kt(s, () => {
      s = null;
    })) : (s ? en(s) : h && (s = dt(() => h(n))), r && kt(r, () => {
      r = null;
    })));
  };
  cn(() => {
    u = !1, e(l), u || a(null, null);
  }, c);
}
function co(o, e) {
  return e;
}
function Pa(o, e, t, n) {
  for (var r = [], s = e.length, i = 0; i < s; i++)
    so(e[i].e, r, !0);
  var c = s > 0 && r.length === 0 && t !== null;
  if (c) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    ha(u), u.append(
      /** @type {Element} */
      t
    ), n.clear(), Ne(o, e[0].prev, e[s - 1].next);
  }
  jr(r, () => {
    for (var l = 0; l < s; l++) {
      var a = e[l];
      c || (n.delete(a.k), Ne(o, a.prev, a.next)), je(a.e, !c);
    }
  });
}
function gn(o, e, t, n, r, s = null) {
  var i = o, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & kr) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      o
    );
    i = l.appendChild(no());
  }
  var a = null, d = !1, h = /* @__PURE__ */ Ar(() => {
    var f = t();
    return Xn(f) ? f : f == null ? [] : Zn(f);
  });
  cn(() => {
    var f = M(h), v = f.length;
    if (!(d && v === 0)) {
      d = v === 0;
      {
        var p = (
          /** @type {Effect} */
          j
        );
        Wa(
          f,
          c,
          i,
          r,
          e,
          (p.f & ye) !== 0,
          n
        );
      }
      s !== null && (v === 0 ? a ? en(a) : a = dt(() => s(i)) : a !== null && kt(a, () => {
        a = null;
      })), M(h);
    }
  });
}
function Wa(o, e, t, n, r, s, i, c) {
  var u = (r & oa) !== 0, l = (r & (eo | to)) !== 0, a = o.length, d = e.items, h = e.first, f = h, v, p = null, E, b = [], y = [], S, R, C, g;
  if (u)
    for (g = 0; g < a; g += 1)
      S = o[g], R = i(S, g), C = d.get(R), C !== void 0 && (C.a?.measure(), (E ??= /* @__PURE__ */ new Set()).add(C));
  for (g = 0; g < a; g += 1) {
    if (S = o[g], R = i(S, g), C = d.get(R), C === void 0) {
      var w = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : t;
      p = Ba(
        w,
        e,
        p,
        p === null ? e.first : p.next,
        S,
        R,
        g,
        n,
        r
      ), d.set(R, p), b = [], y = [], f = p.next;
      continue;
    }
    if (l && Na(C, S, g, r), C.e.f & ye && (en(C.e), u && (C.a?.unfix(), (E ??= /* @__PURE__ */ new Set()).delete(C))), C !== f) {
      if (v !== void 0 && v.has(C)) {
        if (b.length < y.length) {
          var T = y[0], m;
          p = T.prev;
          var _ = b[0], x = b[b.length - 1];
          for (m = 0; m < b.length; m += 1)
            ko(b[m], T, t);
          for (m = 0; m < y.length; m += 1)
            v.delete(y[m]);
          Ne(e, _.prev, x.next), Ne(e, p, _), Ne(e, x, T), f = T, p = x, g -= 1, b = [], y = [];
        } else
          v.delete(C), ko(C, f, t), Ne(e, C.prev, C.next), Ne(e, C, p === null ? e.first : p.next), Ne(e, p, C), p = C;
        continue;
      }
      for (b = [], y = []; f !== null && f.k !== R; )
        (s || !(f.e.f & ye)) && (v ??= /* @__PURE__ */ new Set()).add(f), y.push(f), f = f.next;
      if (f === null)
        continue;
      C = f;
    }
    b.push(C), p = C, f = C.next;
  }
  if (f !== null || v !== void 0) {
    for (var k = v === void 0 ? [] : Zn(v); f !== null; )
      (s || !(f.e.f & ye)) && k.push(f), f = f.next;
    var I = k.length;
    if (I > 0) {
      var L = r & kr && a === 0 ? t : null;
      if (u) {
        for (g = 0; g < I; g += 1)
          k[g].a?.measure();
        for (g = 0; g < I; g += 1)
          k[g].a?.fix();
      }
      Pa(e, k, L, d);
    }
  }
  u && io(() => {
    if (E !== void 0)
      for (C of E)
        C.a?.apply();
  }), N.first = e.first && e.first.e, N.last = p && p.e;
}
function Na(o, e, t, n) {
  n & eo && An(o.v, e), n & to ? An(
    /** @type {Value<number>} */
    o.i,
    t
  ) : o.i = t;
}
function Ba(o, e, t, n, r, s, i, c, u, l) {
  var a = (u & eo) !== 0, d = (u & ra) === 0, h = a ? d ? /* @__PURE__ */ sn(r) : fe(r) : r, f = u & to ? fe(i) : i, v = {
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
    return v.e = dt(() => c(o, h, f), Lr), v.e.prev = t && t.e, v.e.next = n && n.e, t === null ? e.first = v : (t.next = v, t.e.next = v.e), n !== null && (n.prev = v, n.e.prev = v.e), v;
  } finally {
  }
}
function ko(o, e, t) {
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
      /* @__PURE__ */ ln(s)
    );
    r.before(s), s = i;
  }
}
function Ne(o, e, t) {
  e === null ? o.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Ga(o, e, t) {
  var n = o, r, s;
  cn(() => {
    r !== (r = e()) && (s && (kt(s), s = null), r && (s = dt(() => t(n, r))));
  }, rn);
}
function ns(o, e, t) {
  an(() => {
    var n = wt(() => e(o, t?.()) || {});
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
function Va(o, e) {
  var t = o.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  o.value === e && (e !== 0 || o.nodeName !== "PROGRESS") || (o.value = e);
}
function Ce(o, e, t, n) {
  var r = o.__attributes ??= {};
  r[e] !== (r[e] = t) && (e === "style" && "__styles" in o && (o.__styles = {}), e === "loading" && (o[Kl] = t), t == null ? o.removeAttribute(e) : typeof t != "string" && ja(o).includes(e) ? o[e] = t : o.setAttribute(e, t));
}
var To = /* @__PURE__ */ new Map();
function ja(o) {
  var e = To.get(o.nodeName);
  if (e) return e;
  To.set(o.nodeName, e = []);
  for (var t, n = o, r = Element.prototype; r !== n; ) {
    t = xr(n);
    for (var s in t)
      t[s].set && e.push(s);
    n = Jn(n);
  }
  return e;
}
function q(o, e, t) {
  var n = o.__className, r = Ka(e);
  (n !== r || Lr) && (e == null && !t ? o.removeAttribute("class") : o.className = r, o.__className = r);
}
function Ka(o, e) {
  return (o ?? "") + "";
}
function $a(o, e, t, n) {
  var r = o.__styles ??= {};
  r[e] !== t && (r[e] = t, t == null ? o.style.removeProperty(e) : o.style.setProperty(e, t, ""));
}
function Ua(o, e, t) {
  var n = Ze(o, e);
  n && n.set && (o[e] = t, ro(() => {
    o[e] = null;
  }));
}
function Mo(o, e) {
  return o === e || o?.[Je] === e;
}
function Te(o = {}, e, t, n) {
  return an(() => {
    var r, s;
    return Wr(() => {
      r = s, s = [], wt(() => {
        o !== t(...s) && (e(o, ...s), r && Mo(t(...r), o) && e(null, ...r));
      });
    }), () => {
      io(() => {
        s && Mo(t(...s), o) && e(null, ...s);
      });
    };
  }), o;
}
function qa(o = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    V
  ), t = e.l.u;
  if (!t) return;
  let n = () => Ma(e.s);
  if (o) {
    let r = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ G(() => {
      let c = !1;
      const u = e.s;
      for (const l in u)
        u[l] !== s[l] && (s[l] = u[l], c = !0);
      return c && r++, r;
    });
    n = () => M(i);
  }
  t.b.length && ma(() => {
    Lo(e, n), Xt(t.b);
  }), It(() => {
    const r = wt(() => t.m.map(Nl));
    return () => {
      for (const s of r)
        typeof s == "function" && s();
    };
  }), t.a.length && It(() => {
    Lo(e, n), Xt(t.a);
  });
}
function Lo(o, e) {
  if (o.l.s)
    for (const t of o.l.s) M(t);
  e();
}
function uo(o, e, t) {
  if (o == null)
    return e(void 0), t && t(void 0), Be;
  const n = wt(
    () => o.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const rt = [];
function Ya(o, e) {
  return {
    subscribe: os(o, e).subscribe
  };
}
function os(o, e = Be) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function r(c) {
    if (Er(o, c) && (o = c, t)) {
      const u = !rt.length;
      for (const l of n)
        l[1](), rt.push(l, o);
      if (u) {
        for (let l = 0; l < rt.length; l += 2)
          rt[l][0](rt[l + 1]);
        rt.length = 0;
      }
    }
  }
  function s(c) {
    r(c(
      /** @type {T} */
      o
    ));
  }
  function i(c, u = Be) {
    const l = [c, u];
    return n.add(l), n.size === 1 && (t = e(r, s) || Be), c(
      /** @type {T} */
      o
    ), () => {
      n.delete(l), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: s, subscribe: i };
}
function Xa(o, e, t) {
  const n = !Array.isArray(o), r = n ? [o] : o;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Ya(t, (i, c) => {
    let u = !1;
    const l = [];
    let a = 0, d = Be;
    const h = () => {
      if (a)
        return;
      d();
      const v = e(n ? l[0] : l, i, c);
      s ? i(v) : d = typeof v == "function" ? v : Be;
    }, f = r.map(
      (v, p) => uo(
        v,
        (E) => {
          l[p] = E, a &= ~(1 << p), u && h();
        },
        () => {
          a |= 1 << p;
        }
      )
    );
    return u = !0, h(), function() {
      Xt(f), d(), u = !1;
    };
  });
}
function Za(o) {
  let e;
  return uo(o, (t) => e = t)(), e;
}
let Ft = !1, Gn = Symbol();
function Ja(o, e, t) {
  const n = t[e] ??= {
    store: null,
    source: /* @__PURE__ */ sn(void 0),
    unsubscribe: Be
  };
  if (n.store !== o && !(Gn in t))
    if (n.unsubscribe(), n.store = o ?? null, o == null)
      n.source.v = void 0, n.unsubscribe = Be;
    else {
      var r = !0;
      n.unsubscribe = uo(o, (s) => {
        r ? n.source.v = s : K(n.source, s);
      }), r = !1;
    }
  return o && Gn in t ? Za(o) : M(n.source);
}
function Qa() {
  const o = {};
  function e() {
    ro(() => {
      for (var t in o)
        o[t].unsubscribe();
      Rr(o, Gn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [o, e];
}
function ec(o) {
  var e = Ft;
  try {
    return Ft = !1, [o(), Ft];
  } finally {
    Ft = e;
  }
}
const tc = {
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
function nc(o, e, t) {
  return new Proxy(
    { props: o, exclude: e },
    tc
  );
}
function Ho(o) {
  for (var e = N, t = N; e !== null && !(e.f & (Me | gt)); )
    e = e.parent;
  try {
    return ke(e), o();
  } finally {
    ke(t);
  }
}
function oc(o, e, t, n) {
  var r = (t & sa) !== 0, s = !pt || (t & ia) !== 0, i = (t & la) !== 0, c = !1, u;
  [u, c] = ec(() => (
    /** @type {V} */
    o[e]
  ));
  var l = Je in o || jl in o, a = (Ze(o, e)?.set ?? (l && e in o && ((g) => o[e] = g))) || void 0, d = (
    /** @type {V} */
    n
  ), h = !0, f = !1, v = () => (f = !0, h && (h = !1, d = /** @type {V} */
  n), d);
  u === void 0 && n !== void 0 && (a && s && Xl(), u = v(), a && a(u));
  var p;
  if (s)
    p = () => {
      var g = (
        /** @type {V} */
        o[e]
      );
      return g === void 0 ? v() : (h = !0, f = !1, g);
    };
  else {
    var E = Ho(
      () => (r ? G : Ar)(() => (
        /** @type {V} */
        o[e]
      ))
    );
    E.f |= Gl, p = () => {
      var g = M(E);
      return g !== void 0 && (d = /** @type {V} */
      void 0), g === void 0 ? d : g;
    };
  }
  if (a) {
    var b = o.$$legacy;
    return function(g, w) {
      return arguments.length > 0 ? ((!s || !w || b || c) && a(w ? p() : g), g) : p();
    };
  }
  var y = !1, S = !1, R = /* @__PURE__ */ sn(u), C = Ho(
    () => /* @__PURE__ */ G(() => {
      var g = p(), w = M(R);
      return y ? (y = !1, S = !0, w) : (S = !1, R.v = g);
    })
  );
  return function(g, w) {
    if (arguments.length > 0) {
      const T = w ? M(C) : s && i ? $(g) : g;
      return C.equals(T) || (y = !0, K(R, T), f && d !== void 0 && (d = T), wt(() => M(C))), g;
    }
    return M(C);
  };
}
function Ht(o) {
  V === null && $r(), pt && V.l !== null ? rc(V).m.push(o) : It(() => {
    const e = wt(o);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function rc(o) {
  var e = (
    /** @type {ComponentContextLegacy} */
    o.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
const sc = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(sc);
function st(o, e, t) {
  let n = t.initialDeps ?? [], r;
  return () => {
    var s, i, c, u;
    let l;
    t.key && ((s = t.debug) != null && s.call(t)) && (l = Date.now());
    const a = o();
    if (!(a.length !== n.length || a.some((f, v) => n[v] !== f)))
      return r;
    n = a;
    let h;
    if (t.key && ((i = t.debug) != null && i.call(t)) && (h = Date.now()), r = e(...a), t.key && ((c = t.debug) != null && c.call(t))) {
      const f = Math.round((Date.now() - l) * 100) / 100, v = Math.round((Date.now() - h) * 100) / 100, p = v / 16, E = (b, y) => {
        for (b = String(b); b.length < y; )
          b = " " + b;
        return b;
      };
      console.info(
        `%c⏱ ${E(v, 5)} /${E(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * p, 120)
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
const ic = (o, e) => Math.abs(o - e) < 1, lc = (o, e, t) => {
  let n;
  return function(...r) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, r), t);
  };
}, ac = (o) => o, cc = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}, uc = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  const r = (i) => {
    const { width: c, height: u } = i;
    e({ width: Math.round(c), height: Math.round(u) });
  };
  if (r(t.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const s = new n.ResizeObserver((i) => {
    const c = i[0];
    if (c?.borderBoxSize) {
      const u = c.borderBoxSize[0];
      if (u) {
        r({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    r(t.getBoundingClientRect());
  });
  return s.observe(t, { box: "border-box" }), () => {
    s.unobserve(t);
  };
}, Oo = {
  passive: !0
}, dc = typeof window > "u" ? !0 : "onscrollend" in window, hc = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let r = 0;
  const s = o.options.useScrollendEvent && dc ? () => {
  } : lc(
    n,
    () => {
      e(r, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (l) => () => {
    const { horizontal: a, isRtl: d } = o.options;
    r = a ? t.scrollLeft * (d && -1 || 1) : t.scrollTop, s(), e(r, l);
  }, c = i(!0), u = i(!1);
  return u(), t.addEventListener("scroll", c, Oo), t.addEventListener("scrollend", u, Oo), () => {
    t.removeEventListener("scroll", c), t.removeEventListener("scrollend", u);
  };
}, fc = (o, e, t) => {
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
}, gc = (o, {
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
class mc {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((r) => {
        r.forEach((s) => {
          this._measureElement(s.target, s);
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
        getItemKey: ac,
        rangeExtractor: cc,
        onChange: () => {
        },
        measureElement: fc,
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
        ...t
      };
    }, this.notify = (t) => {
      var n, r;
      (r = (n = this.options).onChange) == null || r.call(n, this, t);
    }, this.maybeNotify = st(
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
        const c = t[i];
        if (r.has(c.lane))
          continue;
        const u = s.get(
          c.lane
        );
        if (u == null || c.end > u.end ? s.set(c.lane, c) : c.end < u.end && r.set(c.lane, !0), r.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((i, c) => i.end === c.end ? i.index - c.index : i.end - c.end)[0] : void 0;
    }, this.getMeasurementOptions = st(
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
    ), this.getMeasurements = st(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: r, getItemKey: s, enabled: i }, c) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((a) => {
          this.itemSizeCache.set(a.key, a.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const l = this.measurementsCache.slice(0, u);
        for (let a = u; a < t; a++) {
          const d = s(a), h = this.options.lanes === 1 ? l[a - 1] : this.getFurthestMeasurement(l, a), f = h ? h.end + this.options.gap : n + r, v = c.get(d), p = typeof v == "number" ? v : this.options.estimateSize(a), E = f + p, b = h ? h.lane : a % this.options.lanes;
          l[a] = {
            index: a,
            start: f,
            size: p,
            end: E,
            key: d,
            lane: b
          };
        }
        return this.measurementsCache = l, l;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = st(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (t, n, r) => this.range = t.length > 0 && n > 0 ? pc({
        measurements: t,
        outerSize: n,
        scrollOffset: r
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getIndexes = st(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (t, n, r, s) => n === null ? [] : t({
        startIndex: n.startIndex,
        endIndex: n.endIndex,
        overscan: r,
        count: s
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
      const i = s.key, c = this.elementsCache.get(i);
      c !== t && (c && this.observer.unobserve(c), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(r, this.options.measureElement(t, n, this));
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
    }, this.getVirtualItems = st(
      () => [this.getIndexes(), this.getMeasurements()],
      (t, n) => {
        const r = [];
        for (let s = 0, i = t.length; s < i; s++) {
          const c = t[s], u = n[c];
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
          n[rs(
            0,
            n.length - 1,
            (r) => Rn(n[r]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n) => {
      const r = this.getSize(), s = this.getScrollOffset();
      n === "auto" && t >= s + r && (n = "end"), n === "end" && (t -= r);
      const i = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i] : this.scrollElement[i] : 0) - r;
      return Math.max(Math.min(u, t), 0);
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
      const c = r.start - this.options.scrollPaddingStart + (r.size - s) / 2;
      switch (n) {
        case "center":
          return [this.getOffsetForAlignment(c, n), n];
        case "end":
          return [
            this.getOffsetForAlignment(
              r.end + this.options.scrollPaddingEnd,
              n
            ),
            n
          ];
        default:
          return [
            this.getOffsetForAlignment(
              r.start - this.options.scrollPaddingStart,
              n
            ),
            n
          ];
      }
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
      const [i, c] = s;
      this._scrollToOffset(i, { adjustments: void 0, behavior: r }), r !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [l] = Rn(
            this.getOffsetForIndex(t, c)
          );
          ic(l, this.getScrollOffset()) || this.scrollToIndex(t, { align: c, behavior: r });
        } else
          this.scrollToIndex(t, { align: c, behavior: r });
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
const rs = (o, e, t, n) => {
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
function pc({
  measurements: o,
  outerSize: e,
  scrollOffset: t
}) {
  const n = o.length - 1, s = rs(0, n, (c) => o[c].start, t);
  let i = s;
  for (; i < n && o[i].end < t + e; )
    i++;
  return { startIndex: s, endIndex: i };
}
function _c(o) {
  const e = new mc(o), t = e.setOptions;
  let n;
  const r = (s) => {
    const i = {
      ...e.options,
      ...s,
      onChange: s.onChange
    };
    t({
      ...i,
      onChange: (c, u) => {
        n.set(c), i.onChange?.(c, u);
      }
    }), e._willUpdate();
  };
  return n = os(e, () => (r(o), e._didMount())), Xa(n, (s) => Object.assign(s, { setOptions: r }));
}
function wc(o) {
  return _c({
    observeElementRect: uc,
    observeElementOffset: hc,
    scrollToFn: gc,
    ...o
  });
}
var Cc = /* @__PURE__ */ te('<div><button type="button"><i></i> <span> </span></button></div>');
function vc(o, e) {
  pe(e, !0);
  var t = Cc(), n = ne(t);
  q(n, X(As)), n.__click = function(...c) {
    e.onClick?.apply(this, c);
  };
  var r = ne(n);
  q(r, `${zs} ir-icon ir-icon--check`);
  var s = Ee(r, 2), i = ne(s);
  ve(() => {
    q(t, X([
      Ds,
      e.isSelected && Fs
    ])), Ce(t, "data-value", e.value), Ce(t, "style", `position: absolute; top: ${e.top ?? ""}px; width: 100%;`), Ce(n, "title", e.text), ht(i, e.text);
  }), Y(o, t), _e();
}
fn(["click"]);
const Ao = 26;
var Rc = /* @__PURE__ */ te("<div></div>"), xc = /* @__PURE__ */ te("<div><!></div>");
function bc(o, e) {
  pe(e, !0);
  const [t, n] = Qa(), r = () => Ja(M(c), "$virtualizer", t);
  let s = Se(!1), i, c = /* @__PURE__ */ G(() => M(s) === !1 ? null : wc({
    count: e.items.length,
    getScrollElement: () => i,
    estimateSize: () => Ao,
    overscan: 4
  }));
  Ht(() => {
    const b = mr(e.refElement, i, "bottom-start");
    return K(s, !0), () => b();
  });
  const u = e.refElement.offsetWidth, l = Math.max(u, e.breakWidth), a = Math.max(e.contentWidth, u), d = () => {
    e.selectedItem && (i.scrollTop = e.items.indexOf(e.selectedItem) * Ao);
  };
  function h() {
    return i;
  }
  var f = xc();
  Ce(f, "style", `width: ${a ?? ""}px; max-width: ${l ?? ""}px;`);
  var v = ne(f);
  {
    var p = (b) => {
      var y = Rc();
      q(y, X(Ps)), gn(y, 5, () => r().getVirtualItems(), (S) => S.index, (S, R) => {
        var C = /* @__PURE__ */ G(() => e.selectedItem === e.items[M(R).index]);
        vc(S, {
          get top() {
            return M(R).start;
          },
          get isSelected() {
            return M(C);
          },
          get text() {
            return e.items[M(R).index].text;
          },
          get value() {
            return e.items[M(R).index].value;
          },
          onClick: () => e.onItemClick(e.items[M(R).index])
        });
      }), ns(y, (S) => d?.()), ve((S) => Ce(y, "style", `position: relative; height: ${S ?? ""}px;`), [() => r().getTotalSize()]), Y(b, y);
    };
    ze(v, (b) => {
      r() && b(p);
    });
  }
  Te(f, (b) => i = b, () => i), ve(() => {
    q(f, X([
      Ws,
      vl.zIndex.popover,
      "is-expanded"
    ])), Ce(f, "data-row", e.row), Ce(f, "data-col", e.col);
  }), Y(o, f);
  var E = _e({ getDropdownElement: h });
  return n(), E;
}
const Pt = { select: Bs, selectInput: Gs, selectInputNative: Vs, selectInputIcon: js }, zo = /* @__PURE__ */ new WeakMap(), yc = 20, Sc = 4, Do = yc + Sc, Ec = 18;
class Ic extends we {
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
    showErrorIfCustomText: c = !1,
    allowEdit: u = !1,
    mappingType: l = "text"
  }) {
    super(), this._allowClear = n ?? !1, this._mappingType = l, this._items = e ?? [], this._lazyItems = s ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = i, this._allowEdit = u, u && (this._allowCustomText = !0), r ? this._customDisplayTextFunc = r : this._customDisplayTextFunc = l === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = c, t && (this.onChange = t.bind(this));
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
      _customDisplayTextFunc: c
    } = this, { element: u } = wn({ tag: "div", className: Hn(Ns, Pt.select, Pt.selectInput) }), { element: l } = wn({ tag: "span", className: Pt.selectInputNative }), { element: a } = wn({ tag: "i", className: Hn(Pt.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), u.setAttribute("data-has-px", "");
    const d = n.text === "" || n.text === null || n.text === void 0;
    s && u.classList.add("is-editable");
    let h = this._getSelectedItemOrNull(n.text);
    const f = h !== null;
    h ? (l.textContent = c(h.value, h.text, !1), n.value = h.value) : r ? (l.textContent = c(n.value, n.text, !0), n.value = n.text) : (l.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    r && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !d && !f && (u.dataset.error = "true");
    let v = null;
    const p = pr({
      eventElements: [u],
      clickOutsideFunc: () => E.hide(),
      getEventElements() {
        return v ? [v.getDropdownElement()] : [];
      }
    }), E = {
      show: () => {
        this._isExpanded = !0, b.create(), p.create(), this._beforeValue = n.value, this._beforeText = n.text, u.classList.add("is-expanded");
        const { breakWidth: S, contentWidth: R } = this._getCellWidthInfo(n);
        v = es(bc, {
          target: ut("popover"),
          props: {
            row: e,
            col: t,
            contentWidth: R,
            breakWidth: S,
            selectedItem: h,
            items: this._items,
            refElement: u,
            onItemClick: (C) => {
              const { value: g, text: w } = C, T = new ft(n.gridStore.commandContext, [e, t, { text: w, value: g }]);
              h = C, T.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, g, w), T.onExecute = () => this.onChange(e, t, g, w, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new Ge(
                "Change select menu",
                T
              )), n.text = C[this._mappingType], n.value = g, l.textContent = c(g, w, !1), u.dataset.error && delete u.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, g, w, this._beforeValue, this._beforeText), E.hide();
            }
          }
        });
      },
      hide: () => {
        this._isExpanded = !1, u.classList.remove("is-expanded"), b.destroy(), p.destroy(), v && ts(v);
      }
    }, b = $n(E), y = () => {
      u.classList.contains("is-expanded") ? E.hide() : E.show();
    };
    return u.onclick = (S) => {
      s && S.target !== a || y();
    }, u.appendChild(l), u.appendChild(a), u;
  }
  onChange(e, t, n, r, s, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const r = Ve(e, t), s = this._itemTextMap.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !s), c = r.calculateWidth(i);
    return Do + c + this.getHorizontalCellPadding(n);
  }
  _getDropdownWidth(e, t, n) {
    const r = Ve(e, t), s = this._items.reduce((i, c) => Math.max(i, r.calculateWidth(c.text)), 0);
    return Do + s + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const r = zo.get(this);
    if (r) return r;
    const s = this._getDropdownWidth(e, t, n);
    return zo.set(this, s), s;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + Ec;
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
const Hh = (o) => {
  const e = new Ic(o);
  return () => e;
}, xn = { input: $s, inputNative: jn, inputSuffix: lr }, kc = 28, it = /* @__PURE__ */ new WeakMap();
class Tc extends we {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = ie.t("datePicker.dateFormat"),
    minDate: n = Yt().getStoreValue("datePicker.minDate"),
    maxDate: r = Yt().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: s = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = r, this._allowedEmptyString = s, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return Ve(e, t).calculateWidth(n.text || this._format) + kc + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("input"), i = document.createElement("button"), c = document.createElement("i"), {
      _minDate: u,
      _maxDate: l,
      _format: a,
      _allowedEmptyString: d
    } = this;
    if (s.readOnly = !0, s.maxLength = a.length, r.setAttribute("data-has-px", ""), r.classList.add(xn.input, Ks), s.classList.add(xn.inputNative), i.classList.add(xn.inputSuffix), c.classList.add("ir-icon", "ir-icon--calendar"), s.type = "text", s.placeholder = a, n.text !== "") {
      const f = be(n.text, a, !0);
      f.isValid() || (n.text = it.get(n)), (f.isBefore(u) || f.isAfter(l)) && (n.text = it.get(n));
    }
    !d && (n.text === "" || n.text === void 0) && (n.text = it.has(n) ? it.get(n) : be().format(a)), s.value = n.text || "", it.set(n, n.text ?? ""), i.appendChild(c), r.appendChild(s), r.appendChild(i);
    const h = rl({
      uuid: kl(),
      refElement: r,
      minDate: u,
      maxDate: l,
      onClick: (f) => {
        const v = n.text, p = be(f).format(a), E = new ft(n.gridStore.commandContext, [e, t, { text: p }]);
        E.onUndo = () => {
          this.onDateClick(e, t, v ?? "");
        }, E.onExecute = () => {
          this.onDateClick(e, t, p);
        }, n.gridStore.commandManager.pushCommandBlock(new Ge("Change datePicker", E)), s.value = p, n.text = p, it.set(n, p), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, p), h.hide();
      }
    });
    return i.onclick = () => {
      if (!h.visible) {
        const f = be(n.text, a, !0);
        f.isValid() ? h.update(f.toDate(), f.toDate()) : h.update(/* @__PURE__ */ new Date(), null), h.show();
      }
    }, r;
  }
  get renderType() {
    return "datePicker";
  }
}
const Oh = (o) => {
  const e = new Tc(o);
  return () => e;
}, Wt = {
  progress: qs,
  progressVariants: Ys
}, Mc = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, Lc = 100, Hc = 100;
class Oc extends we {
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
      _defaultIntent: c
    } = this, u = document.createElement("div"), l = document.createElement("div");
    u.setAttribute("data-has-px", ""), u.className = Us, l.className = Wt.progress;
    const a = n.intent ?? c;
    a && l.classList.add(`${Wt.progress}--${a}`);
    const h = (U(parseFloat(n.text || "0"), r, s) - r) / (s - r) * Lc;
    return se(l, {
      [Wt.progressVariants.progressPercent]: `${h}%`,
      [Wt.progressVariants.progressText]: `'${h.toFixed(i)}%'`
    }), u.appendChild(l), u;
  }
  getCellInnerWidth(e, t, n) {
    return Hc + this.getHorizontalCellPadding(n);
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
const Ah = (o = Mc) => {
  const e = new Oc(o);
  return () => e;
}, Ac = 20, zc = 4, Dc = 24, Fc = 24, Pc = 29, Fo = {
  primary: ti,
  secondary: ni,
  tertiary: oi,
  transparent: ri,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Wc extends we {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = Pc : e.outlineStyle ? this._extraWidth = Fc : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: r,
      outlineStyle: s,
      defaultColor: i,
      defaultIcon: c,
      defaultLabel: u
    } = this.args, l = document.createElement("div"), a = document.createElement("button");
    l.className = Xs, a.classList.add(Zs, "button");
    const d = n.intent ?? i;
    d && a.classList.add(Fo[d]), s ? (l.setAttribute("data-has-px", ""), l.classList.add(Js)) : r && l.classList.add(Qs), !this.args.iconDividerStyle && n.horizontalAlign && a.classList.add(Fo[n.horizontalAlign]), a.onclick = (v) => this.onClick(v, e, t);
    const h = n.icon ?? c, f = r ? n.text ?? "" : n.label ?? u ?? "";
    if (h) {
      const v = document.createElement("i");
      v.className = `${ei} ir-icon ${Et(h)}`, a.appendChild(v);
    }
    if (f) {
      const v = Xe("span");
      if (v.innerText = f, r) {
        const p = document.createElement("div");
        v.classList.add("text--multi-ellipsis"), p.setAttribute("data-has-px", ""), p.appendChild(v), l.insertAdjacentElement("afterbegin", p);
      } else
        v.classList.add("text--ellipsis"), a.appendChild(v);
    }
    return l.appendChild(a), l;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? Ac + zc : 0;
  }
  getCellInnerWidth(e, t, n) {
    const r = Ve(e, t);
    return this.getHorizontalCellPadding(n) + r.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    return Dc;
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
const zh = (o) => {
  const e = new Wc(o ?? {});
  return () => e;
}, Nt = { radio: ii, radioWrapper: li, radioInput: ai, radioText: ci }, Nc = 16, ss = 6, Bc = ss * 2;
class is extends we {
  _radioItemStack = [];
  constructor({ onRadioClick: e }) {
    super(), e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  render(e, t, n) {
    const r = document.createElement("div"), s = document.createElement("label"), i = document.createElement("input");
    if (r.setAttribute("data-has-px", ""), r.className = `${si} ${Nt.radio}`, s.className = Nt.radioWrapper, i.type = "radio", i.className = Nt.radioInput, s.appendChild(i), n.label) {
      const c = document.createElement("span");
      c.className = Nt.radioText, c.innerText = n.label, s.appendChild(c);
    }
    return r.appendChild(s), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), s.onkeydown = (c) => c.preventDefault(), i.onclick = () => {
      const c = n.gridStore.commandContext, u = new ft(c, [e, t, { text: "true" }]), l = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        l && (c.setCell(l.row, l.col, { text: "true" }), this.onRadioClick(l.row, l.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, c.commandManager.pushCommandBlock(new Ge("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, r;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const r = Ve(e, t), s = n.label ? ss + r.calculateWidth(n.label) : 0;
    return Nc + Bc + s + this.getHorizontalCellPadding(n);
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
const Dh = ({ onRadioClick: o }) => {
  const e = new is({ onRadioClick: o });
  return () => e;
};
function ls(o) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = Kn, o.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${Et(o.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (o.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${Et(o.icon)}`, o.iconColor && t.style.setProperty("--ir-icon-foreground-color", o.iconColor), e.appendChild(t);
  }
  if (o.text) {
    const t = document.createElement("span");
    t.innerText = o.text, e.appendChild(t);
  }
  return e;
}
function Gc(o, e, t, n) {
  const r = document.createElement("div");
  if (r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.className = Kn, t.icon) {
    const s = document.createElement("button"), i = document.createElement("i");
    s.setAttribute("type", "button"), s.classList.add("icon-button", ui), s.onclick = (c) => {
      n && n(c, o, e);
    }, i.className = `ir-icon ${Et(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), s.appendChild(i), r.appendChild(s);
  }
  if (t.text) {
    const s = document.createElement("span");
    s.innerText = t.text, r.appendChild(s);
  }
  return r;
}
class ho extends we {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const r = ls(n), {
      ellipsis: s = !0,
      whiteSpace: i
    } = this._args;
    return s && r.classList.add(ar), i && (r.style.whiteSpace = i), r;
  }
  get renderType() {
    return "default";
  }
}
class Vc extends we {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return Gc(e, t, n, (r, s, i) => this.onClick(r, s, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class jc extends we {
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
    r.setAttribute("data-has-px", ""), r.setAttribute("data-has-py", ""), r.className = Kn;
    const c = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return s.innerText = c, n.text = c, r.appendChild(s), r;
  }
}
const Fh = () => {
  const o = new ho();
  return () => o;
};
function Ph({ onClick: o }) {
  const e = new Vc({ onClick: o });
  return () => e;
}
function Wh(o, ...e) {
  const t = new jc(o, ...e);
  return () => t;
}
const Po = /* @__PURE__ */ new WeakMap();
class as extends ho {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function Nh(o) {
  const e = Po.get(o);
  if (e)
    return e;
  const t = new as(o);
  return Po.set(o, t), t;
}
const Vn = "$$all", cs = {
  visible: !0,
  subChecked: !1
};
function Kc(o) {
  return (e, t) => {
    t.style.width = "100%";
    const n = {
      ...cs,
      ...e.object
    }, r = document.createElement("label"), s = document.createElement("span");
    if (r.className = di, s.classList.add(
      sr,
      xe.truncate,
      xe.flex110
    ), n.text && (s.textContent = n.text, s.title = s.textContent), n.icon) {
      const c = document.createElement("i");
      c.style.setProperty(
        "--ir-icon-foreground-color",
        cr.textColor.inverse
      ), c.className = `ir-icon ${n.icon}`, s.append(c);
    }
    r.appendChild(s);
    const i = document.createElement("input");
    i.type = "checkbox", i.className = ir, i.checked = n.checked, n.subChecked && (i.dataset.state = "sub-checked"), i.onchange = () => {
      n.key === Vn ? o.onSelectAll(i.checked) : o.onItemChecked(n.key, i.checked);
    }, r.insertAdjacentElement("afterbegin", i), e.setVisible(n.visible), t.append(r);
  };
}
function $c(o, e, t) {
  const n = o.getRowElement(), r = {
    ...cs,
    ...t
  }, s = n.querySelector("input[type='checkbox']");
  bl(
    s && s instanceof HTMLInputElement,
    "Checkbox element not found in the row element."
  ), s.checked = r.checked, r.checked === !1 && r.subChecked ? s.dataset.state = "sub-checked" : delete s.dataset.state;
}
const Uc = (o) => {
  var e = qc(), t = ne(e), n = ne(t);
  ve(
    (r) => {
      q(e, X([
        xe.mx.sm,
        xe.display.flex,
        xe.alignCenter
      ])), $a(e, "height", `${ur}px`), q(t, X(xe.truncate)), ht(n, r);
    },
    [() => ie.t("rowFilter.list.no-result")]
  ), Y(o, e);
};
var qc = /* @__PURE__ */ te("<div><span> </span></div>"), Yc = /* @__PURE__ */ te('<form><input> <button aria-label="검색" type="submit"><i class="ir-icon ir-icon--search"></i></button></form>'), Xc = /* @__PURE__ */ te("<!> <div></div>", 1), Zc = /* @__PURE__ */ te("<div></div>"), Jc = /* @__PURE__ */ te("<!> <!>", 1);
function us(o, e) {
  pe(e, !0);
  const t = (m) => {
    var _ = Yc();
    q(_, X(gi));
    var x = ne(_);
    q(x, X(jn)), Te(x, (I) => K(u, I), () => M(u));
    var k = Ee(x, 2);
    q(k, X(lr)), ve((I) => Ce(x, "placeholder", I), [
      () => ie.t("rowFilter.search.placeholder")
    ]), za("submit", _, f), Y(m, _);
  }, n = ce("row-filter-ok-disabled");
  let r = $(e.defaultRowItems);
  const s = /* @__PURE__ */ G(() => r.filter(({ visible: m }) => m !== !1)), i = /* @__PURE__ */ G(() => M(s).some(({ checked: m }) => m)), c = /* @__PURE__ */ G(() => M(s).length > 0);
  let u = Se(null), l = Se(null);
  const a = /* @__PURE__ */ G(() => M(l) ? new Map([...M(l).getRowIter()].map((m) => [m.object.key, m])) : /* @__PURE__ */ new Map()), d = (m) => {
    v({ checked: m, subChecked: !1 }), M(s).forEach((_) => {
      p(_, m);
    }), n(!M(i));
  }, h = (m, _) => {
    const x = r.find((k) => m === k.key);
    x && (p(x, _), v(), n(!M(i)));
  }, f = (m) => {
    m.preventDefault();
    const _ = M(u)?.value.toLocaleLowerCase() ?? "", x = (k) => k === "" || k.toLocaleLowerCase().includes(_);
    for (const k of r)
      k.visible = x(k.text ?? k.key), E(k.key, k.visible);
    v(), n(!M(i));
  };
  function v(m = {}) {
    const _ = M(a).get(Vn);
    if (!_) return;
    const {
      checked: x = !M(s).some((I) => !I.checked),
      subChecked: k = M(s).some((I) => I.checked)
    } = m;
    _.updateObject({ ..._.object, checked: x, subChecked: k });
  }
  function p(m, _) {
    m.checked = _;
    const x = M(a).get(m.key);
    x && x.updateObject({ ...x.object, checked: _ });
  }
  function E(m, _) {
    const x = M(a).get(m);
    x && (M(l)?.setRowVisible(x.rowId, _), x.updateObject({ ...x.object, visible: _ }));
  }
  const b = (m) => {
    K(l, $(new sl({
      contextElement: m,
      rowCount: 0,
      defaultRowHeight: ur,
      onCreatedRowElement: Kc({
        onSelectAll: d,
        onItemChecked: h
      }),
      onUpdatedRowObject: $c
    })));
    const _ = { isAllChecked: !0, isSomeChecked: !1 };
    for (const x of r) {
      const { visible: k = !0 } = x;
      x.checked ? _.isSomeChecked = !0 : k && (_.isAllChecked = !1), M(l).addRow(void 0, x, k);
    }
    return M(l).getRowCount() > 0 && M(l).insertRow(0, void 0, {
      key: Vn,
      text: `(${ie.t("rowFilter.list.select-all")})`,
      checked: _.isAllChecked,
      subChecked: _.isSomeChecked
    }), n(!M(i)), {
      destroy: () => {
        M(l)?.destroy();
      }
    };
  };
  function y() {
    return M(s).filter(({ checked: m }) => m).map(({ key: m }) => m);
  }
  var S = Jc(), R = qe(S);
  {
    var C = (m) => {
      var _ = Xc(), x = qe(_);
      t(x);
      var k = Ee(x, 2);
      q(k, X(hi)), Y(m, _);
    };
    ze(R, (m) => {
      e.visibleSearchInput && m(C);
    });
  }
  var g = Ee(R, 2);
  {
    var w = (m) => {
      var _ = Zc();
      q(_, X(fi)), ns(_, (x) => b?.(x)), Y(m, _);
    }, T = (m) => {
      Uc(m);
    };
    ze(g, (m) => {
      M(c) ? m(w) : m(T, !1);
    });
  }
  return Y(o, S), _e({ getCheckedItemKeys: y });
}
const Qc = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Wo(o) {
  return o === "" ? !0 : Qc.test(o);
}
function No(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function fo(o, e) {
  if (o === e) return 0;
  const t = Wo(o), n = Wo(e);
  return t && n ? No(o) < No(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const eu = (o) => (e, t) => fo(e.getCell(o).text, t.getCell(o).text), Bh = ({
  grid: o
}) => ({
  sortColumn(e, t, n, r) {
    o.sort(eu(e), t, n, r);
  }
});
var tu = /* @__PURE__ */ te("<option> </option>"), nu = /* @__PURE__ */ te("<select></select>");
function ds(o, e) {
  pe(e, !0);
  let t, n;
  const r = ce("row-filter-add-click-outside-element");
  Ht(() => (n = new il({ contextElement: t }), n.divSelect.classList.add(xe.mx.sm), n.onChange = (u, l) => e.onChange(l.value), n.value = e.value, r && r(n.divDropDown), () => {
    n.destroy();
  }));
  function s() {
    return n.divDropDown;
  }
  var i = nu();
  return gn(i, 21, () => e.options, co, (u, l) => {
    let a = () => M(l).key, d = () => M(l).value;
    var h = tu(), f = {}, v = ne(h);
    ve(
      (p) => {
        f !== (f = a()) && (h.value = (h.__value = a()) == null ? "" : a()), ht(v, p);
      },
      [() => ie.t(d())]
    ), Y(u, h);
  }), Te(i, (u) => t = u, () => t), Y(o, i), _e({ getDropdownEl: s });
}
var ou = (o, e) => e.onInput(o.currentTarget.value), ru = /* @__PURE__ */ te("<div><input></div>");
function hs(o, e) {
  pe(e, !0);
  var t = ru(), n = ne(t);
  q(n, X(jn)), n.__input = [ou, e], ve(() => {
    q(t, X(xe.mx.sm)), Ce(n, "type", e.type), Va(n, e.value), Ce(n, "placeholder", e.placeholder);
  }), Y(o, t), _e();
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
var su = /* @__PURE__ */ te("<!> <!>", 1);
function iu(o, e) {
  pe(e, !0);
  const t = ce("row-filter-plugin"), n = ce("row-filter-colId"), r = ce("row-filter-ok-disabled"), s = t.getTextListForCol(n).sort((R, C) => fo(R.text, C.text)).map(({ text: R, checked: C }) => ({
    key: R,
    checked: C,
    text: R === "" ? `(${ie.t("rowFilter.list.blanks")})` : R
  }));
  let i = Se($(bn[0].key)), c = Se(null), u = Se("");
  l();
  function l() {
    const R = t.getFilterOptionByCol(n);
    if (!R) return;
    const { operand: C, operator: g } = R;
    g !== "equals" && bn.some(({ key: w }) => w === g) && (K(i, $(g)), K(u, $(C[0])));
  }
  function a() {
    if (!M(c)) return;
    const R = M(c).getCheckedItemKeys();
    R.length !== s.length && t.setColFilter({
      column: n,
      operator: "equals",
      operand: R
    });
  }
  function d() {
    M(u) !== "" && t.setColFilter({
      column: n,
      operator: M(i),
      operand: [M(u)]
    });
  }
  const h = (R) => {
    if (K(i, $(R)), M(i) === "equals") return;
    r(!1);
    const C = t.getFilterOptionByCol(n);
    C && C.operand.length === 1 && K(u, $(C.operand[0]));
  };
  function f() {
    t.removeColFilter(n), M(i) === "equals" ? a() : d();
  }
  function v() {
    return M(i) !== "equals";
  }
  var p = su(), E = qe(p);
  ds(E, {
    get value() {
      return M(i);
    },
    options: bn,
    onChange: h
  });
  var b = Ee(E, 2);
  {
    var y = (R) => {
      Te(
        us(R, {
          visibleSearchInput: !0,
          defaultRowItems: s
        }),
        (C) => K(c, $(C)),
        () => M(c)
      );
    }, S = (R) => {
      const C = /* @__PURE__ */ G(() => ie.t("rowFilter.string.input.placeholder"));
      var g = /* @__PURE__ */ G(() => M(C));
      hs(R, {
        get value() {
          return M(u);
        },
        get placeholder() {
          return M(g);
        },
        onInput: (w) => K(u, $(w))
      });
    };
    ze(b, (R) => {
      M(i) === "equals" ? R(y) : R(S, !1);
    });
  }
  return Y(o, p), _e({ onSubmit: f, canApplyEnterFilter: v });
}
na();
function lu(o, e) {
  pe(e, !1);
  let t = ua();
  const n = ce("row-filter-plugin"), r = ce("row-filter-colId"), s = n.getTextListForCol(r), i = [], c = s.find((a) => a.text === "true"), u = s.find((a) => a.text !== "true");
  c && i.push({
    key: "true",
    checked: c.checked,
    icon: "ir-icon--check-all-rectangle",
    text: ""
  }), u && i.push({
    key: "false",
    checked: u.checked,
    icon: "ir-icon--uncheck-all-rectangle",
    text: ""
  });
  function l() {
    n.removeColFilter(r);
    const a = M(t).getCheckedItemKeys();
    a.length !== i.length && n.setColFilter({
      column: r,
      operator: "equals",
      operand: a
    });
  }
  return qa(), Te(us(o, { defaultRowItems: i, $$legacy: !0 }), (a) => K(t, a), () => M(t)), Ua(e, "onSubmit", l), _e({ onSubmit: l });
}
var au = /* @__PURE__ */ te("<div></div>");
function cu(o, e) {
  pe(e, !0);
  let t, n;
  const r = ce("row-filter-add-click-outside-element");
  Ht(() => {
    n = new ll({
      div: t,
      format: e.format,
      onChange: e.onChange
    });
    const i = n.input, c = n.button;
    r && r(al().datePicker), i.oninput = () => e.onChange(n.textValue), c.onkeydown = (l) => {
      l.key === "Enter" && n.hide();
    }, i.addEventListener("blur", u, { capture: !0 });
    function u(l) {
      l.relatedTarget instanceof HTMLElement && l.relatedTarget.closest(`.${dr}`) && l.relatedTarget.textContent === ie.t("rowFilter.ok") && l.stopPropagation();
    }
    return () => {
      n.destroy(), i.removeEventListener("blur", u);
    };
  }), It(() => {
    n.input.value = e.value;
  }), It(() => {
    n.input.placeholder = `${e.placeholder}(${e.format})`;
  });
  var s = au();
  Te(s, (i) => t = i, () => t), ve(() => q(s, X([xe.widthAuto, xe.mx.sm]))), Y(o, s), _e();
}
const uu = [
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
function du(o) {
  return o === "in-range" ? [!0, !0] : o === "blank" ? [!1, !1] : [!0, !1];
}
function hu(o, e) {
  return o === "in-range" ? [
    `rowFilter.${e}.between.from`,
    `rowFilter.${e}.between.to`
  ] : [
    `rowFilter.${e}.input.placeholder`,
    `rowFilter.${e}.input.placeholder`
  ];
}
var fu = /* @__PURE__ */ te("<!> <!>", 1);
function fs(o, e) {
  pe(e, !0);
  let t = ce("row-filter-plugin"), n = ce("row-filter-colId"), r = t.getColumnMetaInfo(n), s = oc(e, "operator", 15), i = $([
    { value: "", placeholder: "", visible: !0 },
    { value: "", placeholder: "", visible: !1 }
  ]);
  const c = (p) => {
    const E = hu(p, r.textType), b = du(p);
    i.forEach((y, S) => {
      y.visible = b[S], y.placeholder = E[S];
    });
  }, u = (p, E) => {
    E.value = p;
  }, l = (p) => {
    const E = p;
    s(E), c(E);
  };
  Ht(() => {
    i.forEach((p, E) => {
      p.value = e.defaultValue[E] ?? "";
    }), c(s());
  });
  function a() {
    return i.filter(({ visible: p }) => p).map(({ value: p }) => p);
  }
  function d() {
    i.forEach((p) => {
      p.value = "";
    });
  }
  var h = fu(), f = qe(h);
  ds(f, {
    get value() {
      return s();
    },
    options: uu,
    onChange: l
  });
  var v = Ee(f, 2);
  return gn(v, 17, () => i, co, (p, E) => {
    var b = vn(), y = qe(b);
    {
      var S = (R) => {
        var C = vn(), g = qe(C);
        {
          var w = (m) => {
            const _ = /* @__PURE__ */ G(() => r.format ?? ie.t("datePicker.dateFormat"));
            var x = /* @__PURE__ */ G(() => M(_));
            const k = /* @__PURE__ */ G(() => ie.t(M(E).placeholder));
            var I = /* @__PURE__ */ G(() => M(k));
            cu(m, {
              get format() {
                return M(x);
              },
              get value() {
                return M(E).value;
              },
              onChange: (L) => u(L, M(E)),
              get placeholder() {
                return M(I);
              }
            });
          }, T = (m) => {
            var _ = vn(), x = qe(_);
            {
              var k = (I) => {
                const L = /* @__PURE__ */ G(() => ie.t(M(E).placeholder));
                var O = /* @__PURE__ */ G(() => M(L));
                hs(I, {
                  type: "number",
                  get value() {
                    return M(E).value;
                  },
                  get placeholder() {
                    return M(O);
                  },
                  onInput: (A) => u(A, M(E))
                });
              };
              ze(
                x,
                (I) => {
                  r.textType === "number" && I(k);
                },
                !0
              );
            }
            Y(m, _);
          };
          ze(g, (m) => {
            r.textType === "date" ? m(w) : m(T, !1);
          });
        }
        Y(R, C);
      };
      ze(y, (R) => {
        M(E).visible && R(S);
      });
    }
    Y(p, b);
  }), Y(o, h), _e({ getValues: a, clearValues: d });
}
function gu(o, e) {
  pe(e, !0);
  const t = ce("row-filter-plugin"), n = ce("row-filter-colId"), r = t.getFilterOptionByCol(n);
  let s, i = Se($(r ? r.operator : "equals"));
  function c() {
    const a = s.getValues();
    t.removeColFilter(n), (M(i) === "blank" || !a.includes("")) && t.setColFilter({
      column: n,
      operator: M(i),
      operand: a
    });
  }
  function u() {
    return !0;
  }
  var l = /* @__PURE__ */ G(() => r?.operand ?? []);
  return Te(
    fs(o, {
      get defaultValue() {
        return M(l);
      },
      get operator() {
        return M(i);
      },
      set operator(a) {
        K(i, $(a));
      }
    }),
    (a) => s = a,
    () => s
  ), _e({ onSubmit: c, canApplyEnterFilter: u });
}
function mu(o, e) {
  pe(e, !0);
  const t = ce("row-filter-plugin"), n = ce("row-filter-colId"), r = /* @__PURE__ */ G(() => t.getColumnMetaInfo(n).format), s = t.getFilterOptionByCol(n);
  let i, c = Se($(s ? s.operator : "equals"));
  function u(f) {
    return f === "" ? !0 : be(f, M(r), !0).isValid();
  }
  function l() {
    const f = i.getValues();
    if (!f.every(u))
      return i.clearValues(), !0;
    t.removeColFilter(n), (M(c) === "blank" || !f.includes("")) && t.setColFilter({
      column: n,
      operator: M(c),
      operand: f
    });
  }
  function a(f) {
    se(f, { [hr.minWidth]: "200px" });
  }
  function d() {
    return !0;
  }
  var h = /* @__PURE__ */ G(() => s?.operand ?? []);
  return Te(
    fs(o, {
      get defaultValue() {
        return M(h);
      },
      get operator() {
        return M(c);
      },
      set operator(f) {
        K(c, $(f));
      }
    }),
    (f) => i = f,
    () => i
  ), _e({
    onSubmit: l,
    updateDropdownStyle: a,
    canApplyEnterFilter: d
  });
}
var pu = /* @__PURE__ */ te("<i></i>"), _u = /* @__PURE__ */ te("<button><!> <span> </span></button>");
function wu(o, e) {
  var t = _u();
  q(t, X(mi)), t.__click = function(...c) {
    e.onClick?.apply(this, c);
  };
  var n = ne(t);
  {
    var r = (c) => {
      var u = pu();
      ve(() => q(u, X(["ir-icon ir-icon-text", e.icon]))), Y(c, u);
    };
    ze(n, (c) => {
      e.icon && c(r);
    });
  }
  var s = Ee(n, 2), i = ne(s);
  ve(() => ht(i, e.label)), Y(o, t);
}
fn(["click"]);
const Cu = {
  string: iu,
  checked: lu,
  number: gu,
  date: mu
}, vu = (o, e, t, n, r) => {
  e.getFilterOptionByCol(t) && e.removeColFilter(t), n?.(), r();
};
var Ru = /* @__PURE__ */ te("<div></div>"), xu = /* @__PURE__ */ te('<div><!> <div><!></div> <div><button class="button"> </button> <button class="button button--primary"> </button></div></div>');
function bu(o, e) {
  pe(e, !0);
  let t = /* @__PURE__ */ nc(e, ["$$slots", "$$events", "$$legacy"]), {
    pluginAPI: n,
    refElement: r,
    rowId: s,
    columnId: i,
    visibleSortButton: c,
    visibleCheckAllButton: u,
    sortOrder: l,
    onClose: a,
    onSubmit: d,
    onClear: h,
    onDropdownButtonClick: f
  } = t, v = /* @__PURE__ */ G(() => {
    return [...H(), ...z()];
    function* H() {
      if (!c) return;
      l ? yield {
        key: "DELETE",
        i18nKey: "rowFilter.sort.clear",
        icon: "ir-icon--delete"
      } : yield {
        key: "ASC",
        i18nKey: "rowFilter.sort.ascending",
        icon: "ir-icon--sort-ascending"
      };
      const W = l && l === "DESC" ? "ascending" : "descending";
      yield {
        key: W[0] === "a" ? "ASC" : "DESC",
        i18nKey: `rowFilter.sort.${W}`,
        icon: `ir-icon--sort-${W}`
      };
    }
    function* z() {
      !u || M(p).textType !== "checked" || (yield {
        key: "CHECK-ALL",
        i18nKey: "rowFilter.check.check-all",
        icon: "ir-icon--check-all-rectangle"
      }, yield {
        key: "UNCHECK-ALL",
        i18nKey: "rowFilter.check.uncheck-all",
        icon: "ir-icon--uncheck-all-rectangle"
      });
    }
  }), p = /* @__PURE__ */ G(() => n.getColumnMetaInfo(i)), E = Se(!1), b = $([]);
  Dt("row-filter-plugin", n), Dt("row-filter-colId", i), Dt("row-filter-ok-disabled", (H) => {
    K(E, $(H));
  }), Dt("row-filter-add-click-outside-element", (H) => {
    b.push(H);
  });
  let y, S = Se($({ onSubmit: () => {
  } }));
  const R = /* @__PURE__ */ G(() => Cu[M(p).textType]), C = (H) => {
    const { key: z } = H;
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
    f?.(z), a();
  }, g = () => {
    M(E) || M(S).onSubmit() !== !0 && (d(), a());
  };
  Ht(() => {
    const H = mr(r, y, "bottom-start"), z = $n({ hide: a }), W = pr({
      eventElements: [
        y,
        r,
        ...b
      ],
      clickOutsideFunc: a
    });
    W.create(), z.create(), c && se(y, { [hr.maxHeight]: "360px" }), M(S).updateDropdownStyle?.(y), dl("Enter", B);
    function B() {
      M(S).canApplyEnterFilter?.() && g();
    }
    return () => {
      H(), z.destroy(), W.destroy(), hl("Enter", B);
    };
  });
  var w = xu();
  q(w, X(pi));
  var T = ne(w);
  {
    var m = (H) => {
      var z = Ru();
      q(z, X(wi)), gn(z, 21, () => M(v), co, (W, B) => {
        const D = /* @__PURE__ */ G(() => ie.t(M(B).i18nKey));
        var tt = /* @__PURE__ */ G(() => M(D));
        wu(W, {
          get label() {
            return M(tt);
          },
          get icon() {
            return M(B).icon;
          },
          onClick: () => C(M(B))
        });
      }), Y(H, z);
    };
    ze(T, (H) => {
      M(v).length > 0 && H(m);
    });
  }
  var _ = Ee(T, 2);
  q(_, X(_i));
  var x = ne(_);
  Ga(x, () => M(R), (H, z) => {
    Te(z(H, {}), (W) => K(S, $(W)), () => M(S));
  });
  var k = Ee(_, 2);
  q(k, X(dr));
  var I = ne(k);
  I.__click = [
    vu,
    n,
    i,
    h,
    a
  ];
  var L = ne(I), O = Ee(I, 2);
  O.__click = g;
  var A = ne(O);
  Te(w, (H) => y = H, () => y), ve(
    (H, z) => {
      Ce(w, "id", n.dropdownId), ht(L, H), O.disabled = M(E), ht(A, z);
    },
    [
      () => ie.t("rowFilter.clear"),
      () => ie.t("rowFilter.ok")
    ]
  ), Y(o, w), _e();
}
fn(["click"]);
const yn = 20;
class Gh extends we {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const {
      plugin: r,
      onDropdownButtonClick: s,
      visibleSortButton: i = !0,
      visibleCheckAllButton: c = !0
    } = this._args, u = document.createElement("div"), l = r.pluginAPI;
    u.className = Ci, u.setAttribute("data-has-px", "");
    const a = ls(n);
    return a.removeAttribute("data-has-px"), a.removeAttribute("data-has-py"), a.classList.add(ar, vi), u.append(a), u.onclick = (f) => {
      !l.columnSortManager.enabledColumnClick && !n.sortOrder || f.target instanceof HTMLElement && (f.target.closest(`.${po}`) || l.toggleSortOrder(e, t));
    }, l.getColumnMetaInfo(t).enabled !== !1 && u.appendChild(h()), u;
    function h() {
      const f = Un("ir-icon--filter", po);
      f.style.setProperty("--ir-icon-badge-color", cr.info.active), E();
      let v = null;
      return f.onclick = () => {
        if (v) return p();
        v = es(bu, {
          target: ut("popover"),
          props: {
            pluginAPI: l,
            visibleSortButton: i,
            visibleCheckAllButton: c,
            onDropdownButtonClick: s,
            refElement: f,
            rowId: e,
            columnId: t,
            sortOrder: n.sortOrder,
            onClose: p,
            onSubmit: E,
            onClear: E
          }
        });
      }, f;
      function p() {
        v && (ts(v), v = null);
      }
      function E() {
        const b = !!l.getFilterOptionByCol(t);
        f.classList.toggle("ir-icon-badge--right", b);
      }
    }
  }
  getCellInnerWidth(e, t, n) {
    const r = Ve(e, t);
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
function yu(o, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: r } = e;
  return {
    getPastingRange: c,
    beforePastingList: u,
    pasteTask: l
  };
  function s(a, d) {
    const h = o.getRowCount();
    let f = 0, v = a;
    for (; v < h; ) {
      if (o.isFilteredRow(v) || f++, f === d) return v;
      ++v;
    }
    return v - 1 + (d - f);
  }
  function i(a) {
    return a.top === a.bottom && a.left === a.right;
  }
  function c(a, d) {
    if (d.length === 0) throw new Error("No pasting data.");
    const h = { ...a }, f = d.length, v = d[0].length, p = i(a) ? s(a.top, f) + 1 : h.top + f, E = h.left + v;
    for (let b = a.bottom + 1; b < p; ++b)
      (o.hasRow(b) || o.onAutoInsertRow(b)) && (h.bottom = b);
    for (let b = a.right + 1; b < E; ++b)
      (o.hasColumn(b) || o.onAutoInsertColumn(b)) && (h.right = b);
    return h;
  }
  function u(a, d) {
    if (d.length === 0) throw new Error("No pasting data.");
    const h = [], f = d.length, v = d[0].length, p = a.bottom - a.top, E = a.right - a.left;
    let b = 0;
    for (let C = 0; C <= p; ++C) {
      const g = C + a.top;
      if (y(g), !!o.hasRow(g)) {
        if (r && o.isFilteredRow(g)) {
          ++b;
          continue;
        }
        for (let w = 0; w <= E; ++w) {
          const T = w + a.left;
          if (S(T), !o.hasColumn(T)) break;
          const m = o.cell(g, T), _ = R(C - b, w), x = o.onCheckPasteCell(m, _.text);
          _.cellVisible && x && h.push({
            cell: m,
            cellMetaInfo: {
              text: _.text,
              cellVisible: _.cellVisible,
              rowSpan: t ? _.rowSpan : 1,
              colSpan: n ? _.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof x == "object" ? x : void 0
          });
        }
      }
    }
    return h;
    function y(C) {
      !o.hasRow(C) && o.onAutoInsertRow(C) && (o.addRow(), o.onAutoInsertedRow(C));
    }
    function S(C) {
      !o.hasColumn(C) && o.onAutoInsertColumn(C) && (o.addColumn(), o.onAutoInsertedColumn(C));
    }
    function R(C, g) {
      const [w, T] = [C % f, g % v];
      return d[w][T];
    }
  }
  function l(a) {
    for (const { cell: d, cellMetaInfo: h, pasteOption: f } of a) {
      const { rowSpan: v, colSpan: p, cellVisible: E } = h;
      if (!E) continue;
      const { row: b, col: y } = d;
      if (v > 1 || p > 1) {
        const R = { top: b, left: y, bottom: b + v - 1, right: y + p - 1 };
        o.mergeCells(R.top, R.left, R.bottom, R.right);
      }
      f?.ignoreText || o.setCell(b, y, { text: h.text }), o.onClipboardAfterPasteCell(d);
    }
  }
}
function Su(o) {
  return JSON.stringify(o);
}
function Eu(o) {
  return JSON.parse(o);
}
function Iu(o) {
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
function ku(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((r) => r.cellVisible).forEach((r) => {
      const s = document.createElement("td");
      s.setAttribute("rowSpan", `${r.rowSpan}`), s.setAttribute("colSpan", `${r.colSpan}`), s.append(...Iu(r.text)), n.append(s);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function Tu(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const r = Array(n.length).fill(null).map(() => []);
  let s = 0;
  for (const u of n) {
    const l = u.querySelectorAll("td");
    let a = i(0);
    for (const d of l)
      (d.rowSpan > 1 || d.colSpan > 1) && c(s, a, d.rowSpan, d.colSpan), r[s][a] = {
        text: Mu(d),
        rowSpan: d.rowSpan,
        colSpan: d.colSpan,
        cellVisible: !0,
        isFormatted: d.hasAttribute("class")
      }, a = i(a);
    ++s;
  }
  return r;
  function i(u) {
    let l = u;
    for (; r[s][l]; )
      ++l;
    return l;
  }
  function c(u, l, a, d) {
    for (let h = u; h < u + a; ++h)
      for (let f = l; f < l + d; ++f)
        r[h][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function Mu(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return Lu(t);
}
function Lu(o) {
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
function Hu(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const gs = "	", ms = `
`;
function Ou(o) {
  if (!Hu(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(gs)
  ).join(ms);
}
function Au(o) {
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
    i !== "\r" && (i === gs ? r() : i === ms ? s() : t.push(i));
  return (t.length > 0 || n.length > 0) && s(), e;
}
const Kt = [
  {
    format: "ir-grid/cell",
    parseFunc: Eu,
    payloadFunc: Su
  },
  {
    format: "text/html",
    parseFunc: Tu,
    payloadFunc: ku
  },
  {
    format: "text/plain",
    parseFunc: Au,
    payloadFunc: Ou
  }
];
function zu(o, e) {
  Kt.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function ps(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function Du(o) {
  return o.some((e) => e.some((t) => ps(t)));
}
function Fu(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let r = 0; r < n; ++r)
      e[t]?.[r]?.text && ps(o[t][r]) && (o[t][r].text = e[t][r].text);
  }
  return o;
}
function Bo(o) {
  for (const { format: e, parseFunc: t } of Kt) {
    const n = o.getData(e);
    if (n !== "") {
      const r = t(n);
      if (!Du(r))
        return r;
      const s = o.getData(Kt[2].format);
      return Fu(
        r,
        Kt[2].parseFunc(s)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const at = 1, ct = 1;
class Go {
  _colElement;
  _left = 0;
  _columnId = 0;
  _width = 0;
  _visible = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this._colElement = document.createElement("col"), this.columnId = e, this.width = t, this.left = n;
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
    return this._width + ct;
  }
  get colElement() {
    return this._colElement;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this._visible = e, e ? this._colElement.style.removeProperty("display") : this._colElement.style.display = "none";
  }
  set columnId(e) {
    this._columnId = e, this._colElement.dataset.column = e.toString();
  }
  set left(e) {
    this._left = e, this._colElement.dataset.left = e.toString();
  }
  set width(e) {
    this._width = e, this._colElement.style.width = `${this.widthWithBorder}px`, this._colElement.dataset.width = e.toString();
  }
  remove() {
    this._colElement.remove();
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class Pu {
  _colGroup;
  _rowHeaderColumns;
  #e;
  _freezedColumns;
  _columnsList = [];
  _visibleColumnsList = [];
  _columnsWidth = 0;
  _rowHeaderColumnsWidth = 0;
  _freezedColumnsWidth = 0;
  constructor(e, t, n) {
    this._colGroup = document.createElement("colgroup"), this._rowHeaderColumns = e, this._freezedColumns = t, this.#e = n;
  }
  addColumn(e) {
    const t = new Go({
      columnId: this._columnsList.length,
      width: e,
      left: this._columnsWidth
    });
    return this._colGroup.appendChild(t.colElement), this._columnsList.push(t), this._visibleColumnsList.push(t), this.updateColumnWidth(t, "add"), this.addFixedWidth(t), t;
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
    this._columnsList.splice(e, t - e + 1).forEach((r) => {
      this.updateColumnWidth(r, "remove"), r.remove();
    }), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this.#e.emit("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t, n) {
    const r = this.getColumn(e), s = r.left, i = P(t).map((c) => new Go({
      columnId: e + c,
      width: n,
      left: s + (n + ct) * c
    }));
    this._columnsList.splice(e, 0, ...i), i.forEach((c) => {
      r.colElement.insertAdjacentElement("beforebegin", c.colElement), this.updateColumnWidth(c, "add");
    }), this.updateVisibleColumnList(), this.updateFixedWidth();
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
    this.#e.emit("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]);
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), r = n.width - t;
    r !== 0 && (n.width = t, this.changeColumnWidth(n, r));
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
    return this.getColumn(e).width;
  }
  getColumnVisible(e) {
    return this.getColumn(e).visible;
  }
  getColCount() {
    return this._columnsList.length;
  }
  getColumn(e) {
    const t = this._columnsList[e];
    if (!t) throw new Error("No column");
    return t;
  }
  updateColumnsLeftFrom(e) {
    P(e, this._columnsList.length).reduce((t, n) => {
      const r = this._columnsList[n];
      return r.left = t, r.visible ? t + r.width + ct : t;
    }, this.getColumn(e).left);
  }
  get colgroup() {
    return this._colGroup;
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
class Wu {
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
  addRow(e) {
    this._rowList.push(e), this._visibleRowList.push(e), this._updateRowHeight(e, "add"), e.rowId < this.freezedRows && this._updateFixedHeight();
  }
  getMaxCellWidth(e, t) {
    return this._rowList.reduce((n, r) => Math.max(n, r.getMaxCellWidth(e, t)), 0);
  }
  clearRows() {
    P(this.headerRows, this._rowList.length).forEach((e) => this._rowList[e].unmount()), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this._updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((r) => {
      const s = P(t).map((i) => n(r.rowId, e + i));
      r.insertCells(s, e);
    });
  }
  removeRows(e, t, n) {
    const r = this._rowList.slice(e, t + 1), s = n?.ignoreFiltered === !0 ? r.filter((i) => !i.filtered) : r;
    this._rowList = [
      ...this._rowList.slice(0, e),
      // filter 되지 않은 row
      ...r.filter((i) => !s.includes(i)),
      ...this._rowList.slice(t + 1)
    ], s.length !== 0 && (s.forEach((i) => {
      this._updateRowHeight(i, "remove"), i.unmount();
    }), this._updateVisibleRowList(), this._updateFixedHeight());
  }
  removeColumns(e, t) {
    this._rowList.forEach((n) => n.removeCells(e, t));
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
    let s = r.next().value, i = n.next().value, c = 0;
    for (; i; )
      s && s.rowId === c ? (this._rowList.push(s), this._updateRowHeight(s, "add"), s = r.next().value) : (this._rowList.push(i), i = n.next().value), ++c;
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
    const [s, i, c, u] = e < n ? [e, t, n, r] : [n, r, e, t], l = this._rowList.slice(s, i + 1), a = this._rowList.slice(c, u + 1);
    l.forEach((d) => d.unmount()), a.forEach((d) => d.unmount()), this._rowList = [
      ...this._rowList.slice(0, s),
      ...a,
      ...this._rowList.slice(i + 1, c),
      ...l,
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
    this._gridHookFlow.emit("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]);
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
    r !== 0 && (n.height = t, this._changeRowHeight(n, r));
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
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t, this._gridHookFlow.emit("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]));
  }
  _updateRowHeight(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = e.height + at, r = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += r;
  }
  sort(e, t, n, r) {
    const s = this._rowList.slice(0, n), i = this._rowList.slice(n, r), c = this._rowList.slice(r);
    i.forEach((u) => u.unmount()), i.sort((u, l) => {
      let a = e(u, l);
      return a === 0 && (a = u.seq - l.seq), a * (t === "ASC" ? 1 : -1);
    }), this._rowList = [
      ...s,
      ...i,
      ...c
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
    return this.getRow(e).height;
  }
  getRowVisible(e) {
    return this.getRow(e).visible;
  }
  getRowCount() {
    return this._rowList.length;
  }
  getVisibleRowCount() {
    return this._visibleRowList.length;
  }
  runFuncEachRow(e, t, n) {
    const r = t ?? 0, s = n ?? this.length;
    for (let i = r; i < s; i++)
      e(this._rowList[i]);
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
function Nu({ colgroup: o }) {
  const e = document.createElement("table"), t = document.createElement("div"), n = document.createElement("thead"), r = document.createElement("tbody");
  return t.className = Ri, e.classList.add(xi), e.appendChild(o), e.appendChild(n), e.appendChild(r), t.appendChild(e), { table: e, wrapper: t, thead: n, tbody: r };
}
const Bu = 1e4;
function Gu({ rowManager: o, colManager: e, commandManager: t, cursorManager: n }) {
  const r = Xe("textarea", bi);
  r.style.padding = "0";
  let s = null;
  const i = {
    focus: u,
    runEditMode: f,
    setPosition: a,
    mountElement(w) {
      p(), w.appendChild(r);
    },
    hide() {
    },
    onEditDone(w, T, m, _, x, k) {
    },
    onEditKeyDown(w, T, m, _) {
    },
    onEnterOnEdit(w, T) {
    },
    onEditInput(w, T) {
    }
  }, c = $n(i);
  return i;
  function u() {
    r.focus({ preventScroll: !0 });
  }
  function l(w) {
    r.value = w;
  }
  function a(w, T, m) {
    const _ = o.getRow(w.row), x = e.getColumn(w.col), k = w.row < o.freezedRows ? T : 0, I = w.col < e.freezedColumns ? m : 0;
    r.style.top = `${_.top + k}px`, r.style.left = `${x.left + I}px`;
  }
  function d(w) {
    r.style.width = `${w.element.offsetWidth - 1}px`, r.style.height = `${w.element.offsetHeight - 1}px`;
  }
  function h(w) {
    const T = w === "" ? F.zLevel1 : `calc(${w} + 1000)`;
    r.style.zIndex = T;
  }
  function f(w, T, m, _ = !1, x = !1) {
    s = {
      cell: w,
      beforeText: w.props.text ?? "",
      cancelEndEdit: !1
    }, r.style.removeProperty("padding"), _ || l(s.beforeText), r.maxLength = w.props.maxLength ?? Bu, h(w.zIndexVariant), a(w, T, m), d(w), u(), r.scrollTo(0, r.scrollHeight), x && r.setSelectionRange(0, r.value.length), c.create();
  }
  function v() {
    l(""), s = null, r.style.removeProperty("height"), r.style.removeProperty("width"), r.style.removeProperty("z-index");
  }
  function p() {
    r.addEventListener("keydown", y), r.addEventListener("blur", S), r.addEventListener("keyup", b), r.addEventListener("input", E);
  }
  function E(w) {
    s && i.onEditInput(w, r.value);
  }
  function b() {
    s || l("");
  }
  function y(w) {
    if (!s) return;
    const { beforeText: T, cell: m } = s;
    if (w.key === "Escape") {
      R(r.value, !1, w.key);
      return;
    }
    if (w.key === " " && !w.ctrlKey) {
      w.preventDefault();
      const _ = r.value, { selectionStart: x, selectionEnd: k } = r;
      r.value = _.slice(0, x) + " " + _.slice(k), r.selectionStart = x + 1, r.selectionEnd = x + 1, i.onEditInput(w, r.value);
      return;
    }
    if (w.key === "Enter" && w.altKey && m.metaInfo.editSingleLine !== !0) {
      w.preventDefault();
      const _ = r.selectionStart;
      try {
        s.cancelEndEdit = !0, r.blur(), r.value = [
          r.value.substring(0, _),
          r.value.substring(r.selectionEnd)
        ].join(`
`), u(), r.setSelectionRange(_ + 1, _ + 1, "backward"), i.onEditKeyDown(w, m.row, m.col, m.props);
      } finally {
        s.cancelEndEdit = !1;
      }
      return;
    }
    if (C(w)) {
      w.preventDefault(), R(r.value, T !== r.value, w.key), w.key === "Enter" ? i.onEnterOnEdit(w.ctrlKey, w.shiftKey) : g(w.key, w.shiftKey);
      return;
    }
    i.onEditKeyDown(w, m.row, m.col, m.metaInfo);
  }
  function S() {
    !s || s.cancelEndEdit || (R(r.value, s.beforeText !== r.value, ""), c.destroy());
  }
  function R(w, T, m) {
    if (s)
      try {
        const { cell: _, beforeText: x } = s;
        if (T && _.checkInputValidation(w)) {
          const k = { text: w, beforeText: x };
          _.props.gridStore.hook.emit("cellEditDoneBeforeRender", [_.row, _.col, k]);
          const I = new ft(t.commandContext, [
            _.row,
            _.col,
            { text: k.text }
          ]);
          I.onUndo = () => {
            i.onEditDone(_, T, x, m, r.selectionStart, r.selectionEnd);
          }, I.onExecute = () => {
            i.onEditDone(_, T, x, m, r.selectionStart, r.selectionEnd);
          }, t.pushCommandBlock(new Ge(
            `Edit cell (${_.row}, ${_.col}) `,
            I
          )), _.props = { text: k.text };
        }
        i.onEditDone(_, T, x, m, r.selectionStart, r.selectionEnd);
      } finally {
        r.style.padding = "0", v();
      }
  }
  function C(w) {
    return w.key === "ArrowLeft" && r.selectionStart === 0 && r.selectionEnd === 0 || w.key === "ArrowUp" && r.selectionStart === 0 && r.selectionEnd === 0 || w.key === "ArrowRight" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || w.key === "ArrowDown" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || w.key === "Tab" ? !0 : w.key === "Enter" && !w.altKey && !w.ctrlKey && !w.shiftKey;
  }
  function g(w, T) {
    switch (w) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return T ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
class Ct {
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
function Vu(o) {
  return o.top === o.bottom && o.left === o.right;
}
function ju(o) {
  return o.top > o.bottom || o.left > o.right;
}
function Ku(o, e) {
  let t = [];
  const n = new Ct(o, e), r = ({ top: l, left: a, bottom: d, right: h }) => t.some(({ mergeArea: f }) => a <= f.right && h >= f.left && l <= f.bottom && d >= f.top) === !1, s = (l, a) => {
    let d = 0;
    for (let h = l; h <= a; ++h)
      o.getRowVisible(h) && ++d;
    return d;
  }, i = (l, a) => {
    let d = 0;
    for (let h = l; h <= a; ++h)
      e.getColumnVisible(h) && ++d;
    return d;
  }, c = ({ top: l, left: a, bottom: d, right: h }) => {
    for (let f = l; f <= d; ++f)
      if (o.getRowVisible(f) === !1) return !0;
    for (let f = a; f <= h; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, u = (l, a) => {
    const d = o.getCell(l, a), h = t.indexOf(d);
    return h < 0 ? null : t[h];
  };
  return {
    isValidatedMerging: r,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(l) {
      t = t.filter(({ row: a }) => a < l);
    },
    getMergedRowHeight(l, a) {
      const d = (a - l) * at;
      let h = 0;
      for (let f = l; f <= a; ++f)
        o.getRowVisible(f) && (h += o.getRowHeight(f));
      return h + d;
    },
    mergeCells(l) {
      if (ju(l))
        throw new Error("Invalid range");
      if (r(l) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (c(l))
        throw new Error("Could not merging with hidden cells!");
      if (Vu(l))
        throw new Error("Could not merging with single cell!");
      const a = o.getCell(l.top, l.left);
      a.height = this.getMergedRowHeight(l.top, l.bottom), a.mergeInfo = { rowSpan: s(l.top, l.bottom), colSpan: i(l.left, l.right) }, t.push(a), o.getRow(l.top).updateMaxCellHeight();
      for (const h of n.getSelectionGenerator(l))
        (h.row !== l.top || h.col !== l.left) && (h.mergeMain = a);
    },
    splitCells(l, a) {
      const d = u(l, a);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      for (const h of n.getSelectionGenerator(d.mergeArea))
        h.mergeMain = void 0, h.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(l, a), o.getRow(l).updateMaxCellHeight();
    },
    isMerged(l, a) {
      return !r({ top: l, left: a, bottom: l, right: a });
    },
    *getMergedCellGenerator(l) {
      for (const a of n.getSelectionGenerator(l))
        (a.mergeInfo.rowSpan > 1 || a.mergeInfo.colSpan > 1) && (yield a);
    },
    removeMergeCell(l, a) {
      const d = u(l, a);
      if (!d)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((h) => h !== d);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(l, a) {
      for (const { mergeArea: d } of t)
        if (d.top < l && d.bottom >= l && d.bottom <= a || d.bottom > a && d.top >= l && d.top <= a || d.top < l && d.bottom > a)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(l, a) {
      for (const { mergeArea: d } of t)
        if (d.left < l && d.right >= l && d.right <= a || d.right > a && d.left >= l && d.left <= a || d.left < l && d.right > a)
          return !0;
      return !1;
    },
    checkCanInsertRow(l) {
      for (const { mergeArea: a } of t)
        if (a.top < l && a.bottom >= l)
          return !1;
      return !0;
    },
    checkCanInsertColumn(l) {
      for (const { mergeArea: a } of t)
        if (a.left < l && a.right >= l)
          return !1;
      return !0;
    }
  };
}
class $u {
  _gridHookFlow = cl();
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
    const t = Yt();
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
      "grid.defaultFontSize": t.getStoreValue("grid.defaultFontSize")
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Wu(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new Pu(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = Ku(this._rowManager, this._columnManager), this._gridTextarea = Gu({
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = Nu({
      colgroup: this._columnManager.colgroup
    });
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
const Uu = /^var\((.+)\)$/;
function qu(o) {
  const e = Uu.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Yu = [
  F.zLevel0,
  F.zLevel1,
  F.zLevel2,
  F.zLevel3,
  F.zLevel4,
  F.zLevel5,
  F.zLevel6,
  F.zLevel7,
  F.zLevel8,
  F.zLevel9
], ge = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
};
class Xu {
  _tag;
  _cellProps;
  _row = -1;
  _col = -1;
  _rowSpan = 1;
  _colSpan = 1;
  _visible = !0;
  _mergeMain;
  _cellRenderer;
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
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : Vo("grid.defaultFontSize", _o.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : Vo("grid.defaultFontFamily", _o.fontFamilyBase, "fontFamily");
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
    return this._element === null && (this._element = this._initElement()), this._element;
  }
  get editable() {
    return !(this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(qu(F.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.element.style.removeProperty("display"), this.render()) : (this._visible = !1, this.element.style.display = "none");
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
    Object.assign(this._cellProps, e), this.render();
  }
  set cellType(e) {
    this._cellType = e;
  }
  set height(e) {
    e ? se(this.element, { [F.cellHeight]: `${e}px` }) : se(this.element, { [F.cellHeight]: "" });
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    e === 1 && (this.height = null), this.element.rowSpan = e, this.element.colSpan = t, this._rowSpan = e, this._colSpan = t, this.render();
  }
  set mergeMain(e) {
    this._mergeMain = e, this.visible = e === void 0;
  }
  set row(e) {
    this._row = e, this._element && this.element.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this._col = e, this._element && this.element.setAttribute("data-col", e.toString());
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
  _syncClassRemoveWithMergeMain(...e) {
    this.mergeMain ? this.mergeMain.element.classList.remove(...e) : this.element.classList.remove(...e);
  }
  _addMark(e) {
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this.element.appendChild(this._mark);
  }
  _removeMark() {
    this._mark && (this._mark.remove(), this._mark = void 0);
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof we)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof we)
        return e;
      if (e instanceof HTMLElement)
        return new as(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this.row, this.col, this._cellProps);
  }
  _addStickyCls() {
    this.element.classList.add(_n);
  }
  _removeStickyCls() {
    this.element.classList.remove(_n);
  }
  _setStickyLeft(e) {
    this.element.style.left = `${e}px`;
  }
  _removeStickyLeft() {
    this.element.style.removeProperty("left");
  }
  _setStickyTop(e) {
    this.element.style.top = `${e}px`;
  }
  _removeStickyTop() {
    this.element.style.removeProperty("top");
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? se(this.element, { [e]: `${t}px` }) : se(this.element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: r
    } = this._cellProps;
    this._applyCustomProp(F.cellTopPadding, e), this._applyCustomProp(F.cellLeftPadding, t), this._applyCustomProp(F.cellRightPadding, n), this._applyCustomProp(F.cellBottomPadding, r);
  }
  _updateCellStatus() {
    zt(this.element, "is-disabled", this._cellProps.disabled === !0), zt(this.element, "is-asc", this._cellProps.sortOrder === "ASC"), zt(this.element, "is-desc", this._cellProps.sortOrder === "DESC"), this.updateReadonlyStatus(), this._cellProps.isError ? this._addMark(yi) : this._cellProps.hasMemo ? this._addMark(Si) : this._mark && this._removeMark(), this._setPropIfExist("horizontalAlign", "textAlign"), this._setPropIfExist("verticalAlign", "verticalAlign"), this._setPropIfExist("fontSize", "fontSize"), this._setPropIfExist("fontFamily", "fontFamily"), this._setPropIfExist("textColor", "color"), this._setPropIfExist("backColor", "backgroundColor"), this._setPropIfExist("textDecoration", "textDecoration"), this._setPropIfExist("fontWeight", "fontWeight");
  }
  _setPropIfExist(e, t) {
    this._cellProps[e] && Object.assign(this.element.style, { [t]: this._cellProps[e] });
  }
  _initElement() {
    const e = document.createElement(this._tag);
    return e.rowSpan = this._rowSpan, e.colSpan = this._colSpan, e.classList.add(Ei, this._tag === "th" ? Ii : ki), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), e.onclick = () => this.onClick(this), e.onmouseup = (t) => {
      t.button === 2 && this.onRightClick(this, t);
    }, e.ondblclick = (t) => {
      Ue(t.target) && t.target.tagName !== "I" && t.target.tagName !== "TEXTAREA" && this.onDblClick(this);
    }, e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this.element.classList.add("is-selected"), this.onSelect(this));
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this._cellProps, e), t && Object.assign(this._cellProps, { text: t }), this.render();
  }
  release() {
    this.element.classList.remove("is-selected"), this.deactivate();
  }
  activate() {
    this._mergeMain ? this._mergeMain.element.classList.add("is-active") : this.element.classList.add("is-active");
  }
  deactivate() {
    this._syncClassRemoveWithMergeMain("is-active");
  }
  updateReadonlyStatus() {
    zt(this.element, "is-readonly", this.onCheckReadonly());
  }
  setStickyZIndex(e, t, n) {
    this.element.style.removeProperty(F.stickyCellZId), this._removeStickyCls(), this._removeStickyTop(), this._removeStickyLeft(), e !== null && (se(this.element, { [F.stickyCellZId]: Yu[e] }), this._addStickyCls(), e >= ge.lv5 && this._setStickyTop(t), (e === ge.lv9 || e === ge.lv7 || e === ge.lv6 || e === ge.lv4 || e === ge.lv3) && this._setStickyLeft(n));
  }
  replaceElement(e) {
    this._removeChildren(), this.element.appendChild(e);
  }
  checkInputValidation(e) {
    return this.metaInfo.enabledPatternCheck && this.metaInfo.allowedRegExpPattern ? this.metaInfo.allowedRegExpPattern.test(e) : !0;
  }
  render() {
    this._element !== null && this.visible && (this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this.element.appendChild(this._getRenderElement()));
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
  onSelect(e) {
  }
  onClear(e) {
  }
  onCheckReadonly() {
    return this._cellProps.readonly === !0;
  }
}
function Vo(o, e, t) {
  const n = Yt().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Zu extends qn {
  constructor() {
    super([]);
  }
}
class Ju extends qn {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class mn {
  #e;
  #t;
  constructor(e) {
    this.#e = e, this.#t = new Ct(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this.#e.headerRows, this.#e.getRowCount() - 1], [r, s] = [this.#e.headerColumns, this.#e.getColCount() - 1], i = {
      top: U(e.top, t, n),
      left: U(e.left, r, s),
      bottom: U(e.bottom, t, n),
      right: U(e.right, r, s)
    };
    return i.top > n || i.bottom < t || i.left > s || i.right < r ? null : i;
  }
  extendRange(e) {
    const t = this.#t, n = { ...e }, r = [...t.getSelectionGenerator(e)];
    for (; r.length; ) {
      const s = r.pop();
      if (!s.isMerged && !s.mergeMain) continue;
      const i = s.mergeMain ? s.mergeMain.mergeArea : s.mergeArea;
      if (i.top < n.top) {
        const c = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const u of c)
          r.push(u);
        n.top = i.top;
      }
      if (i.left < n.left) {
        const c = t.getSelectionGenerator(
          {
            top: n.top,
            left: i.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const u of c)
          r.push(u);
        n.left = i.left;
      }
      if (n.bottom < i.bottom) {
        const c = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: i.bottom,
            right: n.right
          }
        );
        for (const u of c)
          r.push(u);
        n.bottom = i.bottom;
      }
      if (n.right < i.right) {
        const c = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: i.right
          }
        );
        for (const u of c)
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
        P(e.left, e.right + 1).map((r) => this.#e.cell(n, r).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        P(e.left, e.right + 1).map((r) => this.#e.cell(n, r))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const r = this.#e.getRowCount() - 1;
    return [...this.#t.getSelectionGenerator({ top: 0, left: e, bottom: r, right: t })];
  }
  getColumnListByColumn(e, t) {
    return P(e, t + 1).map((n) => this.#e.getColumn(n));
  }
}
class Qu extends qn {
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
class ed {
  #e;
  #t;
  #n;
  constructor(e) {
    this.#e = new Qu(e), this.#t = new Ju(), this.#n = new Zu();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this.#t.isIdle;
  }
  get selectionRangeState() {
    return this.#e;
  }
  get gridModeState() {
    return this.#t;
  }
  get activateHeaderCellState() {
    return this.#n;
  }
}
class ue {
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
class td {
  _grid;
  _rowType;
  _cells;
  _rowId;
  _rowElement = null;
  _isMounted;
  _filtered;
  _isHeaderRow;
  _isFreezed;
  _top = -1;
  _maxCellHeight = 0;
  _stickyColumns = 0;
  _height = 0;
  _seq;
  _visible = !0;
  _isCalledOnMounted = !1;
  constructor({ grid: e, rowId: t, height: n, top: r, rowType: s, seq: i }) {
    this._grid = e, this._cells = [], this._rowType = s, this._rowId = t, this._seq = i, this._maxCellHeight = n, this._isMounted = !1, this._isFreezed = !1, this._isHeaderRow = !1, this._filtered = !1, this._height = n, this._top = r;
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
  initRowElement() {
    const e = document.createElement("tr");
    se(e, {
      [F.cellHeight]: `${this._height}px`
    }), e.setAttribute("data-top", this._top.toString()), e.dataset.row = this._rowId.toString(), this._visible || (e.style.display = "none"), this._rowElement = e, this.updateStickyStatus();
    for (const t of this._cells)
      e.appendChild(t.element), this.isMounted && t.render();
    return this._grid.hook.emit("renderRowElement", [this, this._rowElement]), e;
  }
  get element() {
    return this._rowElement === null && (this._rowElement = this.initRowElement()), this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + at;
  }
  get bottom() {
    return this.visible ? this._top + this.heightWithBorder : this._top;
  }
  get bottomByCellHeight() {
    return this._top + this._maxCellHeight;
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
    this._rowElement && (this._rowElement.dataset.row = e.toString()), this._rowId = e, this._cells.forEach((t) => t.row = e), this.render();
  }
  set textColor(e) {
    this.element.style.color = e;
  }
  set height(e) {
    this._height = e, se(this.element, {
      [F.cellHeight]: `${e}px`
    }), this.onChangedHeight(this, e);
  }
  set top(e) {
    this._top = e;
  }
  /*
   * Public Methods
   */
  setVisible(e) {
    if (e && this.filtered) throw new Error("It can not set visible to be true when filtered is true.");
    this._visible = e, this._rowElement !== null && (e ? this._rowElement.style.removeProperty("display") : this._rowElement.style.display = "none");
  }
  setFiltered(e) {
    this._filtered = e;
  }
  unmount() {
    this._isMounted = !1, this._rowElement && this.element.remove();
  }
  updateMaxCellHeight() {
    const e = this.height;
    this._maxCellHeight = this._cells.reduce((t, n) => Math.max(t, n.height ?? e), e);
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
    return P(e, t).reduce((n, r) => {
      const s = this._cells[r];
      return s.visible && s.mergeInfo.colSpan === 1 ? Math.max(n, s.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  removeCells(e, t) {
    P(e, t + 1).forEach((r) => this._cells[r].element.remove());
    const n = 1 + t - e;
    this._cells.splice(e, n), P(e, this._cells.length).forEach((r) => {
      this._cells[r].col -= n, this._cells[r].render();
    });
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
    return this.isHeaderRow ? t ? ge.lv9 : ge.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? ge.lv7 : ge.lv6 : ge.lv5 : t ? e < this._grid.headerColumns ? ge.lv4 : ge.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), this._rowElement && (this._rowElement.appendChild(e.element), e.setStickyZIndex(this.getFreezedCellType(e.col), this._top, this._grid.getColumnLeft(e.col)), e.render());
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    const n = this._cells[t].element;
    P(t, this._cells.length).forEach((r) => {
      this._cells[r].col += e.length, this._cells[r].render();
    }), this._cells.splice(t, 0, ...e), e.forEach((r) => {
      r.setStickyZIndex(this.getFreezedCellType(r.col), this._top, this._grid.getColumnLeft(r.col)), n.insertAdjacentElement("beforebegin", r.element), this.isMounted && r.render();
    });
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (fl(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, r]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (r < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= r && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${r}`);
    const [s, i, c, u] = e < n ? [e, t, n, r] : [n, r, e, t];
    this._cells = [
      ...this._cells.slice(0, s),
      ...this._cells.slice(c, u + 1),
      ...this._cells.slice(i + 1, c),
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
    this._rowElement && this.visible && (this._cells.forEach((e) => e.render()), this._grid.hook.emit("renderRowElement", [this, this._rowElement]));
  }
  getCell(e) {
    const t = this._cells[e];
    if (!t) throw new Error(`Not found cell ${this._rowId}, ${e}`);
    return t;
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
    const n = Math.ceil(this.rowInnerHeight), r = U(isNaN(n) ? 0 : n, e, t);
    return this.height !== r ? (this.height = r, !0) : !1;
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
    this._rowElement && (this._isHeaderRow && this._rowElement.classList.add(Ti), this._isFreezed ? this._rowElement.classList.add(wo) : this._rowElement.classList.remove(wo), this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n), this._top, e), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + 1 : 0)), 0));
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
  onChangedHeight(e, t) {
  }
}
const nd = 4, Bt = "is-hidden";
function od(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const rd = Hi, sd = [Oi, Ai, zi, Di], id = ["top", "left", "bottom", "right"];
function ld(o) {
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
  ], [r, s, i, c] = n, u = [r, i], l = [s, c];
  e.classList.add(Mi, Bt), n.forEach((y, S) => y.className = `${Li} border-line__${id[S]}`), t.forEach((y) => e.appendChild(y)), n.forEach((y) => e.appendChild(y));
  function a(y) {
    const { top: S, left: R, bottom: C, right: g } = f(y), w = y.top < o.getFreezedRowCount() ? o.scrollTop : 0, T = y.left < o.getFreezedColumnCount() ? o.scrollLeft : 0;
    return {
      top: S + w,
      left: R + T,
      width: g - R,
      height: C - S
    };
  }
  function d(y) {
    y.classList.add(Bt), delete y.dataset.y, delete y.dataset.x, delete y.dataset.width, delete y.dataset.height, delete y.dataset.visible;
  }
  function h(y, S) {
    const R = t[y], C = a(S);
    R.className = `${rd} ${sd[y]}`, R.dataset.top = S.top.toString(), R.dataset.left = S.left.toString(), R.dataset.bottom = S.bottom.toString(), R.dataset.right = S.right.toString(), R.dataset.y = C.top.toString(), R.dataset.x = C.left.toString(), R.dataset.width = C.width.toString(), R.dataset.height = C.height.toString(), R.dataset.visible = "true", R.style.top = `${C.top}px`, R.style.left = `${C.left}px`, R.style.width = `${C.width}px`, R.style.height = `${C.height}px`;
  }
  function f(y) {
    return {
      top: o.getRow(y.top).top - at,
      left: o.getColumn(y.left).left - ct,
      bottom: o.getRow(y.bottom).bottom,
      right: o.getColumn(y.right).right
    };
  }
  function v(y) {
    const { left: S, right: R } = y, C = o.getFreezedColumnCount();
    return P(S, R + 1).reduce((g, w) => {
      const T = o.getColumn(w);
      return T.visible ? g + (w >= C ? T.widthWithBorder : 0) : g;
    }, 0);
  }
  function p(y) {
    const { top: S, bottom: R } = y, C = o.getFreezedRowCount();
    return P(S, R + 1).reduce((g, w) => {
      const T = o.getRow(w);
      return T.visible ? g + (w >= C ? T.heightWithBorder : 0) : g;
    }, 0);
  }
  function E(y, S, R, C) {
    if (y <= C)
      return Math.min(S, R);
    const g = y - C;
    return R > g ? Math.max(0, R - g) : 0;
  }
  function b(y) {
    const { top: S, left: R, bottom: C, right: g } = f(y), {
      fixedRowHeight: w,
      fixedColumnWidth: T,
      scrollTop: m,
      scrollLeft: _
    } = o, x = w + m, k = T + _, I = S < w, L = C <= w, O = R < T, A = g <= T, H = S >= x, z = C >= x, W = R >= k, B = g >= k, D = v(y), tt = p(y), re = E(R, D, _, T), de = E(S, tt, m, w), nt = g - R - re, He = C - S - de, Pe = S + (I ? m : de), We = R + (O ? _ : re), Ot = We < 0 ? 1 : 0, At = Pe < 0 ? 1 : 0;
    (function() {
      u.forEach((Rt) => {
        Rt.style.left = `${We + Ot}px`, Rt.style.width = `${nt - Ot}px`;
      });
    })(), function() {
      l.forEach((Rt) => {
        Rt.style.top = `${Pe + At}px`, Rt.style.height = `${He - At}px`;
      });
    }(), function() {
      if (nt <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), I ? r.style.top = `${S + m + At}px` : H ? r.style.top = `${S + At}px` : r.style.display = "none";
    }(), function() {
      if (nt <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), L ? i.style.top = `${C + m - at}px` : z ? i.style.top = `${C - at}px` : i.style.display = "none";
    }(), function() {
      if (He <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), O ? s.style.left = `${R + _ + Ot}px` : W ? s.style.left = `${R + Ot}px` : s.style.display = "none";
    }(), function() {
      if (He <= 1) {
        c.style.display = "none";
        return;
      }
      c.style.removeProperty("display"), A ? c.style.left = `${g + _ - ct}px` : B ? c.style.left = `${g - ct}px` : c.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(y) {
      const S = o.headerRows, R = o.getFreezedRowCount(), C = o.headerColumns, g = o.getFreezedColumnCount(), w = o.getRowCount() - 1, T = o.getColCount() - 1, _ = [
        { top: S, left: C, bottom: R - 1, right: g - 1 },
        { top: S, left: g, bottom: R - 1, right: T },
        { top: R, left: C, bottom: w, right: g - 1 },
        { top: R, left: g, bottom: w, right: T }
      ].map((x) => od(y, x));
      for (let x = 0; x < nd; x++) {
        const k = _[x];
        k ? h(x, k) : d(t[x]);
      }
      b(y);
    },
    applyGridScroll() {
      const y = o.getSelection();
      y && this.updateArea(y);
    },
    show() {
      e.classList.remove(Bt);
    },
    hide() {
      e.classList.add(Bt);
    }
  };
}
class ad {
  #e;
  #t;
  constructor(e, t, n) {
    this.#e = t, this.#t = ld(e), n.appendChild(this.#t.selectionRoot);
  }
  updateScroll() {
    this.#t.applyGridScroll();
  }
  releaseRange() {
    this.#t.hide();
  }
  update() {
    const e = this.#e.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this.#t.show(), this.#t.updateArea(t);
  }
}
const Gt = -1, cd = [
  "nothing",
  // row id, column id, left top, height 영향
  "updateColumnId",
  "updateRowId",
  // 상위에서 height가 영향 받으므로, top을 그 다음으로 처리함
  "updateTop",
  "updateLeft",
  "updateRowsStickyLeft",
  //
  "virtualRender",
  "resizeGridWrapperHeight",
  "generateScrollBarClass",
  "adjustSelection",
  "updateSelection",
  "updateSelectionByScroll"
];
class ud {
  _args;
  _gridRangeUtil;
  _emptyRow;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _rafHandler = Gt;
  constructor(e) {
    const { grid: t, contextElement: n } = e;
    this._args = e, this._gridRangeUtil = new mn(t), this._emptyRow = document.createElement("tr"), this._emptyRow.className = Fi, this._emptyRow.dataset.hidden = "true", se(this._emptyRow, {
      [F.emptyRowHeight]: "0"
    }), t.addGlobalEventListener(n, "scroll", () => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll"), this.forceRunTasks();
    });
  }
  _renderTask() {
    const e = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = Gt;
    for (const t of cd)
      if (!(!e.has(t) || t === "nothing"))
        try {
          this[t].call(this);
        } catch (n) {
          console.error(t, n);
        }
    this._afterRenderCallbackList.forEach((t) => t()), this._afterRenderCallbackList.length = 0;
  }
  forceRunTasks() {
    this._rafHandler !== Gt && cancelAnimationFrame(this._rafHandler), this._renderTask();
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === Gt && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getActualBodyRowsInfo() {
    const { grid: e, contextElement: t } = this._args, n = e.getRowCount() - 1, r = Math.min(
      e.getFreezedRowCount(),
      n
    ), { fixedRowHeight: s } = e, { scrollTop: i, clientHeight: c } = t, u = e.getRowByTop(s + i + 1) ?? e.firstRow, l = e.getRowByTop(i + c) ?? e.lastRow, a = P(0, r).asList();
    if (!u || !l) return { emptyRowHeight: 0, viewRowList: a };
    const d = u.getTopRowId(), h = l.getBottomRowId(), f = e.getRow(Math.max(d - 2, r)), v = e.getRow(Math.min(h + 2, n));
    return {
      emptyRowHeight: f.top - s,
      // viewport row 영역 list에 추가
      viewRowList: a.concat(P(f.rowId, v.rowId + 1).asList())
    };
  }
  _getGridRow(e) {
    const t = parseInt(e.dataset.row ?? "", 10);
    return t !== t ? null : this._args.grid.getRow(t);
  }
  virtualRender() {
    const { grid: e, store: t } = this._args, n = t.elements.tbody, { emptyRowHeight: r, viewRowList: s } = this._getActualBodyRowsInfo(), i = new Set(s), c = e.getFreezedRowCount(), { headerRows: u } = e;
    let l = n.lastElementChild;
    for (; l; ) {
      const h = this._getGridRow(l);
      l = l.previousElementSibling, h && !i.has(h.rowId) && h.unmount();
    }
    r === 0 ? this._emptyRow.dataset.hidden = "true" : (this._emptyRow.dataset.hidden = "false", se(this._emptyRow, {
      [F.emptyRowHeight]: `${r}px`
    }));
    let a = null, d = !1;
    for (const h of s) {
      const f = e.getRow(h);
      if (h < c ? !f.isFreezed && f.freeze(h < u) : d === !1 && (a === null ? n.insertAdjacentElement("afterbegin", this._emptyRow) : a.insertAdjacentElement("afterend", this._emptyRow), d = !0, a = this._emptyRow), f.isMounted) {
        a = f.element;
        continue;
      }
      f.visible && (a === null ? f.mount(n, "afterbegin") : f.mount(a, "afterend"), a = f.element);
    }
  }
  updateRowsStickyLeft() {
    const { grid: e } = this._args;
    for (let t = 0; t < e.getRowCount(); t++)
      e.getRow(t).updateStickyStatus();
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
    e.render();
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
    this._args.store.elements.wrapper.style.height = `${this._args.grid.height}px`;
  }
  generateScrollBarClass() {
    this._args.grid.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this._afterRenderCallbackList.push(e);
  }
  get isScheduled() {
    return this._scheduledTaskSet.size > 0;
  }
}
class _s extends J {
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
class ws extends J {
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
const dd = {
  "col-resizing": fr,
  "row-resizing": gr
}, Sn = {
  "col-resizing": Ni,
  "row-resizing": Bi
}, jo = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, Ko = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, hd = 500, $o = 4;
class Cs extends ue {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: r,
      enabledRowResizer: s,
      disabledColumns: i,
      disabledRows: c
    } = this._options, { elements: u, gridStateContext: l } = t, a = new Set(i), d = new Set(c), h = (E, b, y) => {
      e.commandManager.pushCommandBlock(new Ge(E, new _s(e, [b, y])));
    }, f = (E, b, y) => {
      e.commandManager.pushCommandBlock(new Ge(E, new ws(e, [b, y])));
    };
    (function() {
      const b = document.createElement("div");
      let y = null, S = !1, R = 0, C = null;
      const g = () => {
        y && (y.element.classList.remove(Sn["col-resizing"]), y.element.classList.remove(Sn["row-resizing"]), y = null), n.classList.remove(fr), n.classList.remove(gr), n.classList.remove(Ln), C && n.removeEventListener("mousedown", C);
      }, w = (_, x) => {
        y = _, n.classList.add(Ln), n.classList.add(dd[x]), _.element.classList.add(Sn[x]);
        let k = 0, I = 0, L = 0, O = 0, A = 0;
        const H = () => _.col < e.getFreezedColumnCount() ? e.scrollLeft + O : O, z = () => _.row < e.getFreezedRowCount() ? e.scrollTop + O : O;
        C = (re) => {
          const de = (/* @__PURE__ */ new Date()).getTime();
          if (l.setMode({
            mode: x,
            contextParam: {}
          }), de - R <= hd) {
            x === "col-resizing" ? e.commandManager.doRecording("Autosize column", () => {
              e.autoSizeColumn(_.col);
            }) : e.commandManager.doRecording("Autosize row", () => {
              e.autoSizeRow(_.row);
            }), R = 0, l.setIdle();
            return;
          }
          S = !0, R = de, x === "col-resizing" ? (b.className = Gi, A = e.getColumnWidth(jo(_)), k = re.pageX, I = k - A + e.minColWidth, L = k - A + e.maxColWidth, O = e.getColumnLeft(_.col) + e.getCellWidth(_), b.style.top = "0px", b.style.width = "0px", b.style.height = `${e.height}px`, b.style.left = `${H()}px`) : (b.className = Vi, A = e.getRowHeight(Ko(_)), k = re.pageY, I = k - A + e.minRowHeight, L = k - A + e.maxRowHeight, O = e.getRow(_.row).top + e.getCellHeight(_), b.style.top = `${z()}px`, b.style.width = `${e.width}px`, b.style.height = "0px", b.style.left = "0px"), u.wrapper.appendChild(b), e.addGlobalEventListener(document, "keydown", tt), e.addGlobalEventListener(document, "mouseup", B), e.addGlobalEventListener(document, "mousemove", W);
        };
        const W = (re) => {
          if (x === "col-resizing") {
            const de = U(re.pageX, I, L) - k;
            b.style.left = `${H() + de}px`;
          } else {
            const de = U(re.pageY, I, L) - k;
            b.style.top = `${z() + de}px`;
          }
        }, B = (re) => {
          if (x === "col-resizing") {
            const He = U(re.pageX, I, L) - k;
            if (Math.abs(He) > $o) {
              const Pe = jo(_), We = A + He;
              h("Resize column", Pe, We), e.setColumnWidth(Pe, We), R = 0;
            }
          } else {
            const He = U(re.pageY, I, L) - k;
            if (Math.abs(He) > $o) {
              const Pe = Ko(_), We = A + He;
              f("Resize row", Pe, We), e.setRowHeight(Pe, We), R = 0;
            }
          }
          D(), l.setIdle();
          const de = v(re);
          if (!de) return;
          const nt = p(re, de);
          nt !== null && w(de, nt);
        };
        function D() {
          S = !1, b.remove(), g(), document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", B), document.removeEventListener("keydown", tt);
        }
        const tt = (re) => {
          re.key === "Escape" && D();
        };
        e.addGlobalEventListener(n, "mousedown", C);
      }, T = (_) => {
        if (S) return;
        const x = v(_);
        if (g(), x === null) return;
        const k = p(_, x);
        k && w(x, k);
      }, m = (_) => {
        S || g();
      };
      e.addGlobalEventListener(n, "mousemove", T), e.addGlobalEventListener(n, "mouseout", m);
    })();
    const v = (E) => {
      const b = De("th", "tr", E.target);
      if (!b) return null;
      const [y, S] = [
        parseInt(b.getAttribute("data-row") || "-1"),
        parseInt(b.getAttribute("data-col") || "-1")
      ];
      return e.cell(y, S);
    }, p = (E, b) => b.cellType === "body-cell" ? null : r && Math.abs(e.getCellWidth(b) - E.offsetX) <= Pi && !a.has(b.col) ? "col-resizing" : s && Math.abs(e.getCellHeight(b) - E.offsetY) <= Wi && !d.has(b.row) ? "row-resizing" : null;
  }
  get pluginKey() {
    return "resizer";
  }
}
function Vh(o) {
  return new Cs(o);
}
const fd = 15, Vt = 120;
class vs extends ue {
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: r } = t;
    let s = null, i = null, c, u = null;
    const l = (p, E) => {
      const b = [
        p.row,
        p.bottom,
        E.row,
        E.bottom
      ], y = [
        p.col,
        p.right,
        E.col,
        E.right
      ], S = {
        top: Math.min(...b),
        left: Math.min(...y),
        bottom: Math.max(...b),
        right: Math.max(...y)
      };
      _r(S, u) || (u = S, e.select(S, s), this.onChangedSelection(S));
    };
    e.addGlobalEventListener(n, "mousedown", (p) => {
      if (!Ue(p.target) || p.button !== 0 || p.target instanceof HTMLTextAreaElement || De(".button", "tr", p.target)) return;
      const E = De("td", "tr", p.target);
      if (!E)
        return;
      const b = Fe(E), y = e.activeCell;
      p.shiftKey && y ? (s = y, l(y, e.cell(b.row, b.col))) : (s = e.cell(b.row, b.col), e.selectRange(s.row, s.col, s.bottom, s.right, s), this.onChangedSelection({ top: s.row, left: s.col, bottom: s.bottom, right: s.right })), i = s, r.setMode({ mode: "selecting-mouse", contextParam: {} });
    });
    function a(p, E) {
      const b = E.closest("td");
      if (!b) return;
      const y = Fe(b);
      i = e.cell(y.row, y.col), l(p, i);
    }
    function d(p, E) {
      const { offsetX: b, offsetY: y, target: S } = p;
      if (!Ue(S)) return null;
      const R = b + S.scrollLeft, C = y + S.scrollTop, g = R > e.width ? e.width : R, w = C > e.height ? e.height : C, T = e.findCellOrNull(w, g);
      T && (i = T, l(E, T));
    }
    function h(p) {
      const E = p.clientWidth + p.scrollLeft, b = p.clientHeight + p.scrollTop, y = p.scrollTop + e.headerHeight, S = p.scrollLeft + e.headerWidth, R = b > e.height ? e.height : b, C = E > e.width ? e.width : E, g = e.findCellOrNull(y, S), w = e.findCellOrNull(R, C);
      return {
        top: g?.row ?? 0,
        bottom: w?.row ?? 0,
        left: g?.col ?? 0,
        right: w?.col ?? 0
      };
    }
    function f(p, E, b, y) {
      c = window.setTimeout(() => {
        if (!s) return;
        const C = S(), g = R(), { top: w, bottom: T, left: m, right: _ } = h(p), x = {
          top: p.scrollTop,
          left: p.scrollLeft,
          targetRow: b,
          targetCol: y
        };
        C && (E.startsWith("t") ? (x.top -= e.getRowHeight(w), x.targetRow = w) : (x.top += e.getRowHeight(T), x.targetRow = T)), g && (E.endsWith("l") ? (x.left -= e.getColumnWidth(m), x.targetCol = m) : (x.left += e.getColumnWidth(_), x.targetCol = _)), (C || g) && (p.scrollTo({ top: x.top, left: x.left }), l(s, e.cell(x.targetRow, x.targetCol)), f(p, E, x.targetRow, x.targetCol));
      }, fd);
      function S() {
        return E.startsWith("t") ? p.scrollTop > 0 : E.startsWith("b") ? p.scrollHeight - (p.scrollTop + p.clientHeight) > 0 : !1;
      }
      function R() {
        return E.endsWith("l") ? p.scrollLeft > 0 : E.endsWith("r") ? p.scrollWidth - (p.scrollLeft + p.clientWidth) > 0 : !1;
      }
    }
    function v() {
      c && (clearTimeout(c), c = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (p) => {
      s && Ue(p.target) && (p.target === n ? d(p, s) : a(s, p.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      s && (v(), s = null, i = null, r.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: p, clientY: E, clientX: b }) => {
      if (!s || !i || !Ue(p)) return;
      const { top: y, bottom: S, left: R, right: C } = p.getBoundingClientRect();
      if (y < E && S > E && R < b && C > b) return;
      f(p, `${g()}${w()}`, i.row, i.col);
      function g() {
        return E - y <= Vt ? "t" : S - E <= Vt ? "b" : "";
      }
      function w() {
        return b - R <= Vt ? "l" : C - b <= Vt ? "r" : "";
      }
    }), e.addGlobalEventListener(n, "mouseenter", (p) => {
      s && Ue(p.currentTarget) && v();
    }), e.onDoubleClickCell = (p) => r.isIdle && e.doEditMode(p, !1, !0), e.onColumnClick = (p) => e.selectColumn(p.col), e.onRowClick = (p) => e.selectRow(p.row);
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
}
function jh() {
  return new vs();
}
class Rs extends J {
  _getUndoContext() {
    const [e, t] = this._args, n = [], r = new Ct(this._instance, this._instance);
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
function xs(o, e) {
  const t = (m, _, x) => {
    const k = o.headerRows;
    let I = x, L = m;
    for (; I !== 0; ) {
      const O = o.cell(L, _), H = (O.mergeMain ?? O).row - 1;
      if (H < k) break;
      o.getRowVisible(H) && ++I, L = H;
    }
    return L;
  }, n = (m, _, x) => {
    const k = o.getRowCount() - 1;
    let I = x, L = m;
    for (; I !== 0; ) {
      const O = o.cell(L, _), H = (O.mergeMain ?? O).bottom + 1;
      if (H > k) break;
      o.getRowVisible(H) && --I, L = H;
    }
    return L;
  }, r = (m, _, x) => {
    const k = o.headerColumns;
    let I = x, L = _;
    for (; I !== 0; ) {
      const O = o.cell(m, L), H = (O.mergeMain ?? O).col - 1;
      if (H < k) break;
      o.getColumnVisible(H) && ++I, L = H;
    }
    return L;
  }, s = (m, _, x) => {
    const k = o.getColCount() - 1;
    let I = x, L = _;
    for (; I !== 0; ) {
      const O = o.cell(m, L), H = (O.mergeMain ?? O).right + 1;
      if (H > k) break;
      o.getColumnVisible(H) && --I, L = H;
    }
    return L;
  }, i = () => {
    let m = o.headerColumns;
    for (; !o.getColumnVisible(m); )
      ++m;
    return m;
  }, c = () => {
    let m = o.getColCount() - 1;
    for (; !o.getColumnVisible(m); )
      --m;
    return m;
  }, u = () => {
    let m = o.headerRows;
    for (; !o.getRowVisible(m); )
      ++m;
    return m;
  }, l = () => {
    let m = o.getRowCount() - 1;
    for (; !o.getRowVisible(m); )
      --m;
    return m;
  }, a = (m) => {
    if (o.getRowCount() - 1 === m) return m;
    let x = m + 1;
    for (; !o.getRowVisible(x); )
      ++x;
    return x;
  }, d = (m) => {
    const _ = o.headerRows;
    if (m === _) return m;
    let x = m - 1;
    for (; !o.getRowVisible(x); )
      ++x;
    return x;
  }, h = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = l(), x = c(), k = m.mergeMain ?? m;
    if (k.right === x) {
      if (m.row === _) return;
      const I = i(), L = a(m.row);
      e ? o.selectRow(L, o.cell(L, I)) : o.selectCell(L, I), o.scrollInView(L, I);
    } else {
      const I = s(m.row, k.right, 1);
      e ? o.selectRow(m.row, o.cell(m.row, I)) : o.selectCell(m.row, I), o.scrollOnCol(I);
    }
  }, f = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = u(), x = i(), k = m.mergeMain ?? m;
    if (k.col === x) {
      if (m.row === _) return;
      const I = c(), L = d(m.row);
      e ? o.selectRow(L, o.cell(L, I)) : o.selectCell(L, I), o.scrollInView(L, I);
    } else {
      const I = r(m.row, k.col, -1);
      e ? o.selectRow(m.row, o.cell(m.row, I)) : o.selectCell(m.row, I), o.scrollOnCol(I);
    }
  }, v = (m, _, x) => {
    let k = -1, I = -1;
    for (let L = _; L <= x; L++) {
      const O = o.cell(m, L), A = O.mergeMain ?? O, { rowSpan: H } = A.mergeInfo;
      H > k && (k = H, I = L);
    }
    return I;
  }, p = (m, _, x) => {
    let k = -1;
    for (let I = _; I <= x; I++) {
      const L = o.cell(m, I), O = L.mergeMain ?? L, { bottom: A } = O;
      A > k && (k = A);
    }
    return k;
  }, E = (m, _, x) => {
    let k = 999999999;
    for (let I = _; I <= x; I++) {
      const L = o.cell(m, I), O = L.mergeMain ?? L;
      k > O.row && (k = O.row);
    }
    return k;
  }, b = (m, _, x) => {
    let k = -1, I = -1;
    for (let L = _; L <= x; L++) {
      const O = o.cell(L, m), A = O.mergeMain ?? O, { colSpan: H } = A.mergeInfo;
      H > k && (k = H, I = L);
    }
    return I;
  }, y = (m, _, x) => {
    let k = -1;
    for (let I = _; I <= x; I++) {
      const L = o.cell(I, m), O = L.mergeMain ?? L, { right: A } = O;
      A > k && (k = A);
    }
    return k;
  }, S = (m, _, x) => {
    let k = 999999999;
    for (let I = _; I <= x; I++) {
      const L = o.cell(I, m), O = L.mergeMain ?? L;
      k > O.col && (k = O.col);
    }
    return k;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: r,
    getNextXRight: s,
    getFirstActiveRow: u,
    selectNextActiveCell: h,
    selectBeforeActiveCell: f,
    selectNextSelection: (m, _, x) => {
      const k = o.getSelection(), { activeCell: I } = o;
      if (k == null || I == null) {
        console.warn("No selection warning");
        return;
      }
      const L = I.mergeMain ?? I;
      if (x && e) return;
      if (!x) {
        if (m !== 0) {
          const W = m < 0 ? t(L.row, I.col, m) : n(L.bottom, I.col, m);
          e ? o.selectRow(W, o.cell(W, I.col)) : o.selectCell(W, I.col), o.scrollOnRow(W);
        } else {
          const W = _ < 0 ? r(I.row, L.col, _) : s(I.row, L.right, _);
          e ? o.selectRow(I.row, o.cell(I.row, W)) : o.selectCell(I.row, W), o.scrollOnCol(W);
        }
        return;
      }
      const { top: O, bottom: A, left: H, right: z } = k;
      if (m !== 0)
        if (m < 0)
          if (p(I.row, H, z) === A) {
            const B = v(O, H, z), D = t(O, B, m);
            o.selectRange(D, H, A, z, I), o.scrollOnRow(D);
          } else {
            const B = v(A, H, z), D = t(A, B, m);
            o.selectRange(O, H, D, z, I), o.scrollOnRow(D);
          }
        else if (E(I.row, H, z) === O) {
          const B = v(A, H, z), D = n(A, B, m);
          o.selectRange(O, H, D, z, I), o.scrollOnRow(D);
        } else {
          const B = v(O, H, z), D = n(O, B, m);
          o.selectRange(D, H, A, z, I), o.scrollOnRow(D);
        }
      else if (_ < 0)
        if (y(I.col, O, A) === z) {
          const B = b(H, O, A), D = r(B, H, _);
          o.selectRange(O, D, A, z, I), o.scrollOnCol(D);
        } else {
          const B = b(z, O, A), D = r(B, z, _);
          o.selectRange(O, H, A, D, I), o.scrollOnCol(D);
        }
      else if (S(I.col, O, A) === H) {
        const B = b(z, O, A), D = s(B, z, _);
        o.selectRange(O, H, A, D, I), o.scrollOnCol(D);
      } else {
        const B = b(H, O, A), D = s(B, H, _);
        o.selectRange(O, D, A, z, I), o.scrollOnCol(D);
      }
    },
    selectMoveToLastColumn: (m) => {
      const _ = o.getSelection(), { activeCell: x } = o;
      if (_ == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const k = c();
      m && e || (m ? o.selectRange(_.top, x.col, _.bottom, k, x) : e ? o.selectRow(x.row, o.cell(x.row, k)) : o.selectCell(x.row, k), o.scrollOnCol(k));
    },
    selectMoveToFirstColumn: (m) => {
      const _ = o.getSelection(), { activeCell: x } = o;
      if (_ == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const k = i();
      m && e || (m ? o.selectRange(_.top, k, _.bottom, x.col, x) : e ? o.selectRow(x.row, o.cell(x.row, k)) : o.selectCell(x.row, k), o.scrollOnCol(k));
    },
    selectMoveToLastRow: (m) => {
      const _ = o.getSelection(), { activeCell: x } = o;
      if (_ == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const k = l();
      m && e || (m ? o.selectRange(x.row, _.left, k, _.right, x) : o.selectCell(k, x.col), o.scrollOnRow(k));
    },
    selectMoveToFirstRow: (m) => {
      const _ = o.getSelection(), { activeCell: x } = o;
      if (_ == null || x == null) {
        console.warn("No selection warning");
        return;
      }
      const k = u();
      m && e || (m ? o.selectRange(k, _.left, x.bottom, _.right, x) : o.selectCell(k, x.col), o.scrollOnRow(k));
    }
  };
}
class gd {
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
const Uo = 10;
class bs extends ue {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const r = new gd(), { gridStateContext: s } = n;
    r.onEndKeyActionHook = (g) => {
      !g.ctrlKey && !g.shiftKey && g.key === " " && R() === !1 || C(g.key) || g.preventDefault();
    };
    const i = (g = !1) => {
      if (!s.isIdle) return;
      const w = e.activeCell?.mergeMain ?? e.activeCell;
      w && e.doEditMode(w, g);
    };
    this._keyMiddleware.forEach(([g, w]) => r.addKeyAction(g, w));
    const c = new Ct(n.rowManager, n.columnManager), {
      selectNextActiveCell: u,
      selectNextSelection: l,
      selectBeforeActiveCell: a,
      selectMoveToFirstRow: d,
      selectMoveToFirstColumn: h,
      selectMoveToLastColumn: f,
      selectMoveToLastRow: v,
      getFirstActiveRow: p
    } = xs(e, this._rowSelection), E = (g) => (w) => {
      s.gridModeState.value.mode !== "edit-cell" && g(w);
    };
    e.addGlobalEventListener(t, "copy", E((g) => e.onNativeCopy(g))), e.addGlobalEventListener(t, "cut", E((g) => e.onNativeCut(g))), e.addGlobalEventListener(t, "paste", E((g) => e.onNativePaste(g))), r.addKeyAction("Tab", (g) => (g.shiftKey ? a() : u(), !0)), r.addKeyAction("ArrowRight", (g) => (g.ctrlKey ? f(g.shiftKey) : l(0, 1, g.shiftKey), !0)), r.addKeyAction("ArrowUp", (g) => (g.ctrlKey ? d(g.shiftKey) : l(-1, 0, g.shiftKey), !0)), r.addKeyAction("ArrowLeft", (g) => (g.ctrlKey ? h(g.shiftKey) : l(0, -1, g.shiftKey), !0)), r.addKeyAction("ArrowDown", (g) => (g.ctrlKey ? v(g.shiftKey) : l(1, 0, g.shiftKey), !0)), r.addKeyAction("Home", (g) => (g.ctrlKey ? (h(g.shiftKey), d(g.shiftKey)) : h(g.shiftKey), !0)), r.addKeyAction("End", (g) => (g.ctrlKey ? (f(g.shiftKey), v(g.shiftKey)) : f(g.shiftKey), !0)), r.addKeyAction("PageUp", (g) => (l(-Uo, 0, g.shiftKey), !0)), r.addKeyAction("PageDown", (g) => (l(Uo, 0, g.shiftKey), !0)), r.addKeyAction("Enter", () => {
      const g = e.getSelection();
      return g && (g.top === e.getRowCount() - 1 ? e.selectCell(p(), g.left + 1) : l(1, 0, !1)), !0;
    }), r.addKeyAction("a", b), r.addKeyAction("A", b), r.addKeyAction("z", y), r.addKeyAction("Z", y), r.addKeyAction("y", S), r.addKeyAction("Y", S);
    function b(g) {
      return g.ctrlKey ? (e.selectAll(), g.preventDefault(), !1) : !0;
    }
    function y(g) {
      return g.ctrlKey ? (e.undo(), g.preventDefault(), !1) : !0;
    }
    function S(g) {
      return g.ctrlKey ? (e.redo(), g.preventDefault(), !1) : !0;
    }
    r.addKeyAction("F2", (g) => (i(), !0)), r.addKeyAction("Backspace", (g) => {
      const w = e.getSelection(), T = e.activeCell;
      return !w || !T || e.doEditMode(T, !0), !0;
    }), r.addKeyAction("Delete", (g) => {
      const w = e.getSelection();
      if (!w || c.getCanClearCellCount(w, (m) => e.onClearCellCheck(m)) === 0) return !0;
      const T = new Rs(e, [w, !0]);
      return e.commandManager.pushCommandBlock(new Ge("Clear cells", T)), e.clearCells(w, !0), !0;
    }), r.addKeyAction(" ", (g) => {
      const w = e.getSelection();
      if (w === null) return !0;
      if (g.ctrlKey)
        return e.selectColumns(w.left, w.right), !0;
      if (g.shiftKey)
        return e.selectRows(w.top, w.bottom), !0;
      let T = !1;
      const m = (_) => {
        if (e.getRow(_.row).isMounted)
          _.element.querySelector("input")?.click();
        else {
          _.text = _.text === "true" ? "false" : "true";
          const x = typeof _.cellRenderer == "function" ? _.cellRenderer(_.row, _.col, _.props) : _.cellRenderer;
          x instanceof vr ? x.onCheckboxClick(_.row, _.col, _.text === "true") : x instanceof is && x.onRadioClick(_.row, _.col);
        }
      };
      for (const _ of c.getSelectionGenerator(w))
        _.onCheckReadonly() || _.props.disabled || (_.renderType === "checkbox" && m(_), _.renderType === "radio" && !T && (m(_), T = !0));
      return !0;
    }), e.addGlobalEventListener(t, "input", (g) => {
      s.gridModeState.isIdle && "data" in g && i(!0);
    }, !0), e.addGlobalEventListener(t, "keydown", (g) => {
      if (
        // editMode에서 온 입력은 pass
        !(!s.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!s.isIdle) {
          g.preventDefault();
          return;
        }
        if (!g.ctrlKey && C(g.key)) {
          i(!0);
          return;
        }
        r.startKeyAction(g);
      }
    }, !0);
    function R() {
      const g = e.getSelection();
      if (!g) return !1;
      for (const w of c.getSelectionGenerator(g))
        if (w.renderType === "checkbox" || w.renderType === "radio") return !0;
      return !1;
    }
    function C(g) {
      return g === "Process" || md.test(g);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const md = /^[\w]$/;
function Kh(o) {
  return new bs(o ?? {});
}
class pd extends ue {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let r = null;
    n.addEventListener("mousedown", (s) => {
      if (s.button !== 0) return;
      const i = De("td", "tr", s.target);
      if (!i || i?.tagName === "TH") return;
      const c = Fe(i);
      r = e.cell(c.row, c.col), e.selectRow(r.row, r);
    }), e.addGlobalEventListener(document, "mouseup", () => r = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function $h() {
  return new pd();
}
const En = -1, _d = /^\d+px$/;
function wd(o) {
  for (const e of o)
    if (typeof e == "string") {
      if (_d.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function Cd(o) {
  let e = 0;
  for (const t of o)
    typeof t == "string" && (e += ys(t));
  return e;
}
function ys(o) {
  return parseInt(o.substring(0, o.length - 2), 10);
}
class vd extends ue {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), wd(e), this._fixedColumnWidth = Cd(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: r } = n;
    let s = En;
    const i = () => {
      const { clientWidth: a } = t;
      if (a === 0) {
        e.logger.warn("IRGrid.ColumnFillPlugin", "clientWidth is 0, it's probably set to 'display: none'");
        return;
      }
      const d = e.getColCount() - 1, h = a - d - this._fixedColumnWidth, f = P(e.getColCount()).reduce((E, b) => {
        if (!e.getColumnVisible(b)) return E;
        const y = this._columnWeightList[b];
        return y === void 0 ? E + 1 : typeof y == "number" ? E + y : E;
      }, 0);
      let v = 0;
      P(d).forEach((E) => {
        if (!e.getColumnVisible(E)) return;
        const b = this._columnWeightList[E] ?? 1;
        if (typeof b == "string" && b.endsWith("px")) {
          const y = ys(b);
          e.setColumnWidth(E, y);
        } else if (typeof b == "number") {
          const y = b / f;
          e.setColumnWidth(E, Math.floor(y * h));
        }
        v += e.getColumnWidth(E);
      });
      const p = l();
      p && e.setColumnWidth(p, h - v + this._fixedColumnWidth);
    }, c = () => {
      s !== En && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
        try {
          r.pauseEmit("onColumnChanged"), i();
        } catch (a) {
          console.error(a);
        } finally {
          r.resumeEmit("onColumnChanged"), s = En;
        }
      });
    };
    r.addHook("resize", c), r.addHook("onColumnChanged", c), this.addRollbackTask(() => {
      r.removeHook("resize", c), r.removeHook("onColumnChanged", c);
    }), u();
    function u() {
      c();
    }
    function l() {
      for (let a = e.getColCount() - 1; a >= 0; a--)
        if (e.getColumnVisible(a))
          return a;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function Uh(o) {
  return new vd(o ?? { columnWeight: [] });
}
class Ss extends ue {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: r } = t.elements, s = {
      latestDragOverCell: null
    }, i = () => {
      n.setIdle(), r.classList.remove("is-dragging"), c();
    }, c = () => {
      s.latestDragOverCell && (s.latestDragOverCell.isDragOver = !1);
    }, u = (a) => {
      c(), s.latestDragOverCell = a, a.isDragOver = !0;
    }, l = () => r.classList.contains("is-dragging");
    r.addEventListener("mouseup", () => l() && i()), r.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging");
    }), r.addEventListener("dragover", (a) => {
      if (!a.dataTransfer || !r.classList.contains("is-dragging")) return;
      const d = e.findCellOrNull(a.offsetY, a.offsetX);
      if (!d || a.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        d.dropDisabled !== !1 && // disabled
        (d.metaInfo.disabled === !0 || // readonly
        d.onCheckReadonly() === !0 || d.dropDisabled === !0)
      )
        return c(), null;
      e.onDragOverCell(d, a) === !0 && (d !== s.latestDragOverCell && u(d), a.preventDefault());
    }), r.addEventListener("dragleave", (a) => {
      a.target === r ? i() : c();
    }), r.addEventListener("drop", (a) => {
      try {
        s.latestDragOverCell && e.onDropOnCell(s.latestDragOverCell.row, s.latestDragOverCell.col, a);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function qh() {
  return new Ss();
}
const qo = 10;
class Rd extends ue {
  _mountTask({ grid: e, gridStore: t }) {
    const { hook: n } = t, { table: r } = t.elements, s = {
      cell: null
    }, i = () => {
      s.cell = null, r.draggable = !1;
    }, c = (h) => {
      r.draggable = !0, s.cell = h;
    };
    n.addHook("contextMouseDown", a), n.addHook("contextMouseUp", u), n.addHook("contextDragStart", d), n.addHook("contextDragEnd", l), this.addRollbackTask(() => {
      n.removeHook("contextMouseDown", a), n.removeHook("contextMouseUp", u), n.removeHook("contextDragStart", d), n.removeHook("contextDragEnd", l);
    });
    function u(h) {
      i();
    }
    function l(h) {
      i();
    }
    function a(h) {
      if (h.button !== 0) return;
      const f = De("td", "tr", h.target);
      if (!f) {
        i();
        return;
      }
      const v = Fe(f), p = e.cell(v.row, v.col);
      h.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(v.row, v.col), p.props.draggable === !0 && p.props.object ? c(p) : i();
    }
    function d(h) {
      if (!h.dataTransfer || !s.cell || !e.onDragStartCell(s.cell, h)) {
        h.preventDefault();
        return;
      }
      h.dataTransfer.setDragImage(s.cell.element, qo, qo);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Yh() {
  return new Rd();
}
const Yo = 10;
class Xh extends ue {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: r = !0,
      enabledColumn: s = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: c, rowManager: u, gridStateContext: l } = n;
    let a = null, d = null;
    i.addEventListener("mousedown", h), i.addEventListener("dragstart", f), i.addEventListener("dragover", v), i.addEventListener("drop", p), i.addEventListener("dragleave", E), i.addEventListener("dragend", b), i.addEventListener("mouseup", b), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", h), i.removeEventListener("dragstart", f), i.removeEventListener("dragover", v), i.removeEventListener("drop", p), i.removeEventListener("dragleave", E), i.removeEventListener("dragend", b), i.removeEventListener("mouseup", b);
    });
    function h(C) {
      if (C.button !== 0 || t.classList.contains("is-resizing")) return;
      const g = De("th", "tr", C.target);
      if (!g) return;
      const w = Fe(g), T = e.cell(w.row, w.col);
      if (T.cellType === "body-cell" || k(T)) return;
      y({
        direction: T.cellType,
        source: m(),
        cell: T
      });
      function m() {
        const { row: I, col: L } = T;
        return T.cellType === "row-header" ? [
          u.getStartOfRowId(I),
          u.getEndOfRowId(I)
        ] : [
          u.getStartOfColumnId(L),
          u.getEndOfColumnId(L)
        ];
      }
      function _(I) {
        return !r || I.row < e.getFreezedRowCount();
      }
      function x(I) {
        return !s || I.col < e.getFreezedColumnCount();
      }
      function k(I) {
        return I.cellType === "row-header" && _(I) || I.cellType === "col-header" && x(I);
      }
    }
    function f(C) {
      if (!C.dataTransfer || !a) {
        C.preventDefault();
        return;
      }
      l.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), C.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), C.dataTransfer.setDragImage(a.cell.element, Yo, Yo);
    }
    function v(C) {
      if (!a || !C.dataTransfer || !C.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const g = e.findCellOrNull(C.offsetY, C.offsetX);
      if (!g || !g.isHeaderCell || a.direction === "row-header" && w(g, a) || a.direction === "col-header" && T(g, a)) {
        S(), d = g;
        return;
      }
      g !== d && R(g, a.direction), C.preventDefault();
      function w(m, _) {
        return m.row === _.cell.row || m.row < e.getFreezedRowCount() || c.checkConflictingInRows(m.row, m.row);
      }
      function T(m, _) {
        return m.col === _.cell.col || m.col < e.getFreezedColumnCount() || c.checkConflictingInColumns(m.col, m.col);
      }
    }
    function p() {
      const C = a, g = d;
      !C || !g || (S(), C.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(C.source, [g.row, g.row]);
      }), e.forceLayoutTask(), e.selectRow(C.cell.row)), C.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(C.source, [g.col, g.col]);
      }), e.forceLayoutTask(), e.selectColumn(C.cell.col)));
    }
    function E() {
      S(), d = null;
    }
    function b() {
      i.classList.remove("is-dragging"), S(), a = null, i.draggable = !1, d = null, l.setIdle();
    }
    function y({ direction: C, source: g, cell: w }) {
      i.draggable = !0, a = {
        direction: C,
        source: g,
        cell: w
      };
    }
    function S() {
      if (!d || !a) return;
      const { direction: C } = a, g = C === "row-header" ? e.headerColumns : e.headerRows;
      for (let w = 0; w < g; w++)
        C === "row-header" ? e.cell(d.row, w).element.classList.remove("is-dragging") : e.cell(w, d.col).element.classList.remove("is-dragging");
    }
    function R(C, g) {
      S(), d = C;
      const w = g === "row-header" ? e.headerColumns : e.headerRows;
      for (let T = 0; T < w; T++)
        g === "row-header" ? e.cell(C.row, T).element.classList.add("is-dragging") : e.cell(T, C.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Es = 8, xd = {
  normal: $i,
  error: Ui
}, Xo = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || gl(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      ml({
        mainAxis: Es,
        crossAxis: n ?? 0
      }),
      pl(),
      _l({ padding: 5 })
    ]
  }).then(({ x: r, y: s, placement: i }) => {
    e.style.left = `${r}px`, e.style.top = `${s}px`, e.dataset.placement = i;
  });
}, bd = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", yd = (o) => o.cellInfo.memo ?? "";
class Sd extends ue {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = ji;
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
      tooltipDisabled: c = !1
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? bd(e), l = this.options.getMemoText?.(e) ?? yd(e), a = () => {
      this._tooltipElement.textContent = u, ut("popover").appendChild(this._tooltipElement), Xo(e.element, this._tooltipElement, "bottom");
    }, d = () => {
      this._memoElement.textContent = l ?? "", this._memoElement.className = `${Ki} ${xd[i]}`, ut("popover").appendChild(this._memoElement), Xo(e.element, this._memoElement, "right-start", Es);
    }, h = !(s && r) && c === !1 && u ? window.setTimeout(() => a(), n) : -1, f = s && l ? window.setTimeout(() => d(), t) : -1;
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
    const { gridStateContext: r } = t, s = () => this.context?.cleanup(), i = (c) => {
      if (!Ue(c.target)) return;
      const u = De("td,th", "tr", c.target);
      if (!u) {
        s();
        return;
      }
      const l = Fe(u), a = e.cell(l.row, l.col);
      this.context?.targetCell !== a && (s(), this.context = this.createContext(a));
    };
    r.gridModeState.addSubscription((c, { mode: u }) => {
      n.removeEventListener("mousemove", i), s(), (u === "idle" || u === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "mouseleave", s), e.addGlobalEventListener(n, "scroll", s), this.addRollbackTask(() => {
      s(), n.removeEventListener("mouseleave", s), n.removeEventListener("scroll", s);
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const Zo = 10;
class Zh extends ue {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, gridStateContext: s } = n, { table: i } = n.elements, c = document.createElement("div");
    c.className = qi;
    let u = null, l = -1;
    i.addEventListener("mousedown", a), i.addEventListener("dragstart", d), i.addEventListener("dragover", h), i.addEventListener("drop", f), i.addEventListener("dragleave", v), i.addEventListener("dragend", p), i.addEventListener("mouseup", p), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", a), i.removeEventListener("dragstart", d), i.removeEventListener("dragover", h), i.removeEventListener("drop", f), i.removeEventListener("dragleave", v), i.removeEventListener("dragend", p), i.removeEventListener("mouseup", p);
    });
    function a(S) {
      if (S.button !== 0 || t.classList.contains("is-resizing")) return;
      const R = De("th", "tr", S.target);
      if (!R) return;
      const C = Fe(R), g = e.cell(C.row, C.col);
      if (w(g)) return;
      E({
        source: [
          r.getStartOfRowId(g.row),
          r.getEndOfRowId(g.row)
        ],
        cell: g
      });
      function w(T) {
        return T.cellType !== "row-header" || T.row < e.getFreezedRowCount() || T.row < e.headerRows;
      }
    }
    function d(S) {
      const { offsetY: R, offsetX: C } = S;
      if (e.findCellOrNull(R, C)?.cellType === "row-header") {
        if (!S.dataTransfer || !u) {
          S.preventDefault();
          return;
        }
        s.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), S.dataTransfer.setData("ir-grid/move-rows-dragging", ""), S.dataTransfer.setDragImage(u.cell.element, Zo, Zo);
      }
    }
    function h(S) {
      const { dataTransfer: R, offsetY: C, offsetX: g } = S;
      if (!u || !R || !R.types.includes("ir-grid/move-rows-dragging")) return;
      const w = e.findCellOrNull(C, g);
      if (!w) return;
      const T = m(w.row);
      if (w.cellType !== "row-header" || _(T, u)) {
        b(), l = -1;
        return;
      }
      T !== l && y(T), S.preventDefault();
      function m(x) {
        const k = e.getRow(x), I = C - k.top < k.height / 2;
        return k.rowId + (I ? 0 : 1);
      }
      function _(x, k) {
        const [I, L] = k.source;
        return x >= I && x <= L || x < e.headerRows;
      }
    }
    function f() {
      const S = u, R = l;
      !S || R < 0 || (b(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(S.source, R);
      }), e.forceLayoutTask(), e.selectRow(S.cell.row));
    }
    function v() {
      b(), l = -1;
    }
    function p() {
      i.classList.remove("is-dragging"), b(), u = null, i.draggable = !1, l = -1, s.setIdle();
    }
    function E({ source: S, cell: R }) {
      i.draggable = !0, u = {
        source: S,
        cell: R
      };
    }
    function b() {
      l < 0 || !u || c.remove();
    }
    function y(S) {
      b(), l = S;
      const R = Math.min(l, r.length - 1), C = e.getRow(R), g = C.element.getBoundingClientRect(), w = {
        top: g.top,
        height: 16
      }, T = w.height / 2;
      S === r.length && (w.top += C.height, w.height = T + 1), c.style.top = `${w.top - T}px`, c.style.left = `${g.left + e.scrollLeft}px`, c.style.width = `${e.headerWidth}px`, c.style.height = `${w.height}px`, ut("popover").appendChild(c);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const Jo = 10;
class Jh extends ue {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s, gridStateContext: i } = n, { table: c } = n.elements, u = document.createElement("div");
    u.className = Yi;
    let l = null, a = -1;
    c.addEventListener("mousedown", d), c.addEventListener("dragstart", h), c.addEventListener("dragover", f), c.addEventListener("drop", v), c.addEventListener("dragleave", p), c.addEventListener("dragend", E), c.addEventListener("mouseup", E), this.addRollbackTask(() => {
      c.removeEventListener("mousedown", d), c.removeEventListener("dragstart", h), c.removeEventListener("dragover", f), c.removeEventListener("drop", v), c.removeEventListener("dragleave", p), c.removeEventListener("dragend", E), c.removeEventListener("mouseup", E);
    });
    function d(R) {
      if (R.button !== 0 || t.classList.contains("is-resizing")) return;
      const C = De("th", "tr", R.target);
      if (!C) return;
      const g = Fe(C), w = e.cell(g.row, g.col);
      if (T(w)) return;
      b({
        source: [
          r.getStartOfColumnId(w.col),
          r.getEndOfColumnId(w.col)
        ],
        cell: w
      });
      function T(m) {
        return m.cellType !== "col-header" || m.col < e.getFreezedColumnCount() || m.col < e.headerColumns;
      }
    }
    function h(R) {
      const { offsetY: C, offsetX: g } = R;
      if (e.findCellOrNull(C, g)?.cellType === "col-header") {
        if (!R.dataTransfer || !l) {
          R.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), c.classList.add("is-dragging"), R.dataTransfer.effectAllowed = "move", R.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), R.dataTransfer.setData("ir-grid/move-columns-dragging", ""), R.dataTransfer.setDragImage(l.cell.element, Jo, Jo);
      }
    }
    function f(R) {
      const { dataTransfer: C, offsetY: g, offsetX: w } = R;
      if (!l || !C || !C.types.includes("ir-grid/move-columns-dragging")) return;
      const T = e.findCellOrNull(g, w);
      if (!T) return;
      const m = _(T.col);
      if (T.cellType !== "col-header" || x(m, l)) {
        y(), a = -1;
        return;
      }
      m !== a && S(m), R.preventDefault();
      function _(k) {
        const I = e.getColumn(k), L = w - I.left < I.width / 2;
        return I.columnId + (L ? 0 : 1);
      }
      function x(k, I) {
        const [L, O] = I.source;
        return k >= L && k <= O || k < e.headerColumns;
      }
    }
    function v() {
      const R = l, C = a;
      !R || C < 0 || (y(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(R.source, C);
      }), e.forceLayoutTask(), e.selectColumn(R.cell.col));
    }
    function p() {
      y(), a = -1;
    }
    function E() {
      c.classList.remove("is-dragging"), y(), l = null, c.draggable = !1, a = -1, i.setIdle();
    }
    function b({ source: R, cell: C }) {
      c.draggable = !0, l = {
        source: R,
        cell: C
      };
    }
    function y() {
      a < 0 || !l || u.remove();
    }
    function S(R) {
      y(), a = R;
      const C = Math.min(a, s.length - 1), g = e.getColumn(C), w = g.colElement.getBoundingClientRect(), T = {
        left: w.left,
        width: 12
      }, m = T.width / 2;
      R === s.length && (T.left += g.width, T.width = m + 1), u.style.top = `${w.top + e.scrollTop}px`, u.style.left = `${T.left - m}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${T.width}px`, ut("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const Ed = [
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
function Id() {
  const o = Xe("div", Ji), e = [];
  for (const n of Ed)
    if (n.type === "divider") {
      const r = Xe("div", Qi);
      o.append(r);
    } else {
      const r = Xe("button", el), s = Un(`ir-icon--chevron-${n.value}`);
      r.dataset.type = n.type, r.append(s), r.onclick = () => t.onButtonClick(n.value), o.append(r), e.push(r);
    }
  const t = {
    buttonGroup: o,
    visibleButtonGroup(n, r) {
      o.style.display = n || r ? "" : "none";
      for (const s of e) {
        const c = s.dataset.type === "row" ? n : r;
        s.style.display = c ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class Qh extends ue {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: r, columnManager: s } = n, i = Xe("div", Xi), c = Xe("div", Zi), u = Id();
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const l = {
      up() {
        const f = d(c.scrollTop);
        if (!f) return;
        const v = f.rowId - 1, p = v < 0 ? 0 : e.getRow(v).top;
        c.scrollTop = p;
      },
      down() {
        const f = d(c.scrollTop);
        f && (c.scrollTop = f.bottom);
      },
      left() {
        const f = h(c.scrollLeft);
        if (!f) return;
        const v = f.columnId - 1, p = v < 0 ? 0 : e.getColumn(v).left;
        c.scrollLeft = p;
      },
      right() {
        const f = h(c.scrollLeft);
        f && (c.scrollLeft = f.right);
      },
      "double-top"() {
        c.scrollTo({ top: 0 }), e.scrollOnRow(0);
      },
      "double-bottom"() {
        c.scrollTo({ top: c.scrollHeight }), e.scrollOnRow(e.getRowCount() - 1);
      },
      "double-left"() {
        c.scrollTo({ left: 0 }), e.scrollOnCol(0);
      },
      "double-right"() {
        c.scrollTo({ left: c.scrollWidth }), e.scrollOnCol(e.getColCount() - 1);
      }
    };
    u.onButtonClick = (f) => l[f](), t.insertAdjacentElement("beforebegin", i), c.appendChild(t), i.append(c), i.append(u.buttonGroup), n.hook.addHook("resize", a), n.hook.addHook("changedFreezedRowHeight", a), n.hook.addHook("changedFreezedColumnWidth", a), this.addRollbackTask(() => {
      n.hook.removeHook("resize", a), n.hook.removeHook("changedFreezedRowHeight", a), n.hook.removeHook("changedFreezedColumnWidth", a);
    }), this.addRollbackTask(() => {
      const f = i.nextElementSibling;
      f ? f.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function a() {
      u.visibleButtonGroup(
        t.offsetHeight > c.clientHeight,
        t.offsetWidth > c.clientWidth
      );
    }
    function d(f) {
      let v = 0, p = r.visibleRowList.length - 1;
      for (; v <= p; ) {
        const E = v + Math.floor((p - v) / 2), b = r.visibleRowList[E];
        if (f >= b.top && f < b.bottom)
          return b;
        f < b.top ? p = E - 1 : v = E + 1;
      }
      return null;
    }
    function h(f) {
      let v = 0, p = s.visibleColumnList.length - 1;
      for (; v <= p; ) {
        const E = v + Math.floor((p - v) / 2), b = s.visibleColumnList[E];
        if (f >= b.left && f < b.right)
          return b;
        f < b.left ? p = E - 1 : v = E + 1;
      }
      return null;
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
class ef extends ue {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      onRowClick: r,
      freezeLastColumn: s,
      multipleSelect: i,
      selectOnRightClick: c = !1
    } = this._args, { hook: u } = n, l = this.setPluginAPI(new kd(e)), a = /* @__PURE__ */ new Set([0]), d = [];
    i && d.push(
      E,
      b
    ), d.push(y), c && a.add(2), t.classList.add(Co), s && t.classList.add(vo);
    const h = (S) => e.onNativeCopy(S);
    u.addBeginHook("contextMouseDown", f), u.addHook("contextMouseDown", v), u.addHook("renderRowElement", p), e.addGlobalEventListener(t, "copy", h), this.addRollbackTask(() => {
      l.clearAllSelections(), t.classList.remove(Co, vo), u.removeHook("contextMouseDown", f), u.removeHook("contextMouseDown", v), u.removeHook("renderRowElement", p), t.removeEventListener("copy", h);
    });
    function f(S) {
      S.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function v(S) {
      if (!a.has(S.button)) return;
      const R = S.target.closest("td");
      if (!R) return;
      const C = Fe(R), g = e.cell(C.row, C.col);
      if (g.cellType === "body-cell") {
        for (const w of d)
          if (w(g, S)) break;
        r?.(e, g.row, S);
      }
    }
    function p(S, R) {
      R.classList.toggle(tl, l.isRowSelected(S.rowId, !0));
    }
    function E(S, R) {
      if (!R.ctrlKey) return;
      const C = e.getSelection();
      return C && (l.addSelectedRows(P(C.top, C.bottom + 1).asList()), e.releaseCells()), l.isRowSelected(S.row) ? l.removeSelectedRow(S.row) : e.selectRow(S.row, S), !0;
    }
    function b(S, R) {
      if (!(!R.shiftKey || !e.activeCell))
        return l.clearSelectedRows(), e.selectRows(
          Math.min(e.activeCell.row, S.row),
          Math.max(e.activeCell.row, S.row),
          e.activeCell
        ), !0;
    }
    function y(S, R) {
      l.isRowSelected(S.row) && R.button === 2 || (l.clearAllSelections(), e.selectRow(S.row, S));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class kd {
  constructor(e) {
    this._grid = e;
  }
  _selectedRowIdSet = /* @__PURE__ */ new Set();
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
}
var $t = { exports: {} }, Td = $t.exports, Qo;
function Md() {
  return Qo || (Qo = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Td, function() {
      return function(t, n, r) {
        n.prototype.isBetween = function(s, i, c, u) {
          var l = r(s), a = r(i), d = (u = u || "()")[0] === "(", h = u[1] === ")";
          return (d ? this.isAfter(l, c) : !this.isBefore(l, c)) && (h ? this.isBefore(a, c) : !this.isAfter(a, c)) || (d ? this.isBefore(l, c) : !this.isAfter(l, c)) && (h ? this.isAfter(a, c) : !this.isBefore(a, c));
        };
      };
    });
  }($t)), $t.exports;
}
var Ld = Md();
const Hd = /* @__PURE__ */ Yn(Ld);
var Ut = { exports: {} }, Od = Ut.exports, er;
function Ad() {
  return er || (er = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Od, function() {
      return function(t, n) {
        n.prototype.isSameOrAfter = function(r, s) {
          return this.isSame(r, s) || this.isAfter(r, s);
        };
      };
    });
  }(Ut)), Ut.exports;
}
var zd = Ad();
const Dd = /* @__PURE__ */ Yn(zd);
var qt = { exports: {} }, Fd = qt.exports, tr;
function Pd() {
  return tr || (tr = 1, function(o, e) {
    (function(t, n) {
      o.exports = n();
    })(Fd, function() {
      return function(t, n) {
        n.prototype.isSameOrBefore = function(r, s) {
          return this.isSame(r, s) || this.isBefore(r, s);
        };
      };
    });
  }(qt)), qt.exports;
}
var Wd = Pd();
const Nd = /* @__PURE__ */ Yn(Wd);
be.extend(Hd);
be.extend(Dd);
be.extend(Nd);
function Bd(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return Gd;
  const { metaInfo: t } = o, { operand: n, operator: r } = e, s = () => {
    const l = n.map((d) => parseFloat(d)), a = new Set(l);
    switch (r) {
      case "equals":
        return $e((d) => a.has(d));
      case "not-equals":
        return $e((d) => !a.has(d));
      case "less-than":
        return $e((d) => l.some((h) => d < h));
      case "less-than-or-equal":
        return $e((d) => l.some((h) => d <= h));
      case "greater-than":
        return $e((d) => l.some((h) => d > h));
      case "greater-than-or-equal":
        return $e((d) => l.some((h) => d >= h));
      case "in-range":
        return $e((d) => l[0] <= d && d <= l[1]);
      case "blank":
        return In;
      default:
        return bt;
    }
  }, i = () => {
    const { format: l } = t;
    if (!l) throw new Error("format is required for date type column");
    const a = n.map((h) => be(h, l));
    switch (r) {
      case "equals":
        return d((h) => a.some((f) => h.isSame(f)));
      case "not-equals":
        return d((h) => a.every((f) => !h.isSame(f)));
      case "greater-than":
        return d((h) => a.some((f) => h.isAfter(f)));
      case "greater-than-or-equal":
        return d((h) => a.some((f) => h.isSameOrAfter(f)));
      case "less-than":
        return d((h) => a.some((f) => h.isBefore(f)));
      case "less-than-or-equal":
        return d((h) => a.some((f) => h.isSameOrBefore(f)));
      case "in-range":
        return d((h) => h.isBetween(a[0], a[1], null, "[]"));
      case "blank":
        return In;
      default:
        return bt;
    }
    function d(h) {
      return (f) => {
        const v = be(f, l);
        return v.isValid() ? h(v) : !1;
      };
    }
  }, c = () => {
    const l = new Set(n);
    switch (r) {
      case "equals":
        return (a) => l.has(a);
      case "not-equals":
        return (a) => !l.has(a);
      case "contains":
        return (a) => n.some((d) => a.includes(d));
      case "not-contains":
        return (a) => !n.some((d) => a.includes(d));
      case "starts-with":
        return (a) => n.some((d) => a.startsWith(d));
      case "ends-with":
        return (a) => n.some((d) => a.endsWith(d));
      case "blank":
        return In;
      default:
        return bt;
    }
  }, u = () => {
    const l = new Set(n.map((a) => a === "true"));
    switch (r) {
      case "equals":
        return nr((a) => l.has(a));
      case "not-equals":
        return nr((a) => !l.has(a));
      default:
        return bt;
    }
  };
  switch (t.textType) {
    case "number":
      return s();
    case "date":
      return i();
    case "string":
      return c();
    case "checked":
      return u();
    default:
      return bt;
  }
}
function In(o) {
  return o === "";
}
function bt() {
  return !1;
}
function Gd() {
  return !0;
}
const Vd = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function $e(o) {
  return (e) => Vd.test(e) ? o(parseFloat(e)) : !1;
}
function nr(o) {
  return (e) => o(e === "true");
}
const jd = (o) => {
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
      return fo(s.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${o.uuid}`), o.onColumnClick = (s) => {
        t && this.toggleSortColumn(s);
      };
    },
    sortColumn(s, i) {
      o.sort((c, u) => this.compareTo(c.getCell(s), u.getCell(s)), i);
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
var Kd = Object.defineProperty, $d = Object.getOwnPropertyDescriptor, go = (o, e, t, n) => {
  for (var r = $d(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && Kd(e, t, r), r;
};
const kn = Object.freeze({
  textType: "string",
  enabled: !0
});
class pn {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = jd(e), this._defaultDateFormat = ie.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, r]) => this._filterMap.set(parseInt(n, 10), { metaInfo: r }));
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
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), Bd(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: r }) => r(t.getCell(n).text))
    );
  }
}
go([
  mo()
], pn.prototype, "clearFilters");
go([
  mo()
], pn.prototype, "removeColFilter");
go([
  mo()
], pn.prototype, "setColFilter");
function mo() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...r) {
      const s = n.apply(this, r);
      return this._applyFilter(), s;
    }, t;
  };
}
class tf extends ue {
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: t, gridStore: n } = e, r = this.setPluginAPI(new pn(t, this._args?.columnMetaInfo ?? {})), s = (c, u, l) => {
      (l === "insertColumns" || l === "removeColumns") && r.clearFilters();
    }, i = (c) => {
      document.getElementById(r.dropdownId)?.isConnected && (c.__IGNORE_GRID_FOCUS__ = !0);
    };
    n.hook.addHook("onColumnChanged", s), n.hook.addHook("contextMouseUp", i), this.addRollbackTask(() => {
      r.clearFilters(), r.clearSortOrder(), n.hook.removeHook("onColumnChanged", s), n.hook.removeHook("contextMouseUp", i);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
function Ud(o, e) {
  const t = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let n = !1, r = 0, s = 0;
  const i = {
    setRow(h) {
      r = h;
    },
    setCol(h) {
      s = h;
    }
  }, c = () => t.hasHeaderRows ? 0 : o.headerRows, u = () => t.hasHeaderColumns ? 0 : o.headerColumns;
  function* l() {
    i.setRow(c()), i.setCol(u());
    const h = o.getSelection();
    for (n = !1; ; ) {
      switch (t.area) {
        case "all":
          yield o.cell(r, s);
          break;
        case "selected-col":
          if (!h) throw new Error("No selection in finding");
          Cr(s, h) && (yield o.cell(r, s));
          break;
        case "selected-row":
          if (!h) throw new Error("No selection in finding");
          wr(r, h) && (yield o.cell(r, s));
          break;
        case "selection":
          if (!h) throw new Error("No selection in finding");
          xo(r, s, h) && (yield o.cell(r, s));
          break;
        case "custom":
          if (!t.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          xo(r, s, t.customRange) && (yield o.cell(r, s));
          break;
      }
      if (f()) break;
    }
    function f() {
      const v = t.direction;
      if (v === "by-columns" || v === "left-right") {
        if (++r, r >= o.getRowCount() && (++s, r = c()), s >= o.getColCount())
          if (n)
            n = !1, r = c(), s = u();
          else return !0;
      } else if (++s, s >= o.getColCount() && (++r, s = u()), r >= o.getRowCount())
        if (n)
          n = !1, r = c(), s = u();
        else return !0;
    }
  }
  function a(h) {
    const f = t.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), v = t.matchAll ? `^${f}$` : f, p = t.ignoreCase ? "i" : "", E = new RegExp(v, p);
    return e.onCellCheck ? e.onCellCheck(E, h) : E.test(h.text);
  }
  let d = l();
  return {
    resetCursor() {
      d = l();
    },
    findNext(h) {
      for (_r(t, h) || (d = l()), Object.assign(t, h); ; ) {
        const f = d.next();
        if (!f.done && f.value && a(f.value))
          return n = !0, f.value;
        if (f.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(h) {
      const f = [];
      h && Object.assign(t, h);
      for (const v of l())
        a(v) && f.push(v);
      return f;
    },
    setCursor(h, f) {
      if (h < 0 || f < 0) throw new Error("row or col must be greater than or equal to 0");
      i.setRow(h), i.setCol(f);
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
class qd extends J {
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
class Yd extends J {
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
class Xd extends J {
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
function Is(o, e) {
  const [t, n] = o, [r, s] = e, i = n - t, c = s - r;
  return i === c ? [e, o] : t < r ? [[s - i, s], [t, t + c]] : [[r, r + i], [n - c, n]];
}
class Zd extends J {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Is(...this._args));
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
class Jd extends J {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Is(...this._args));
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
class Qd extends J {
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
class eh extends J {
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
class th extends J {
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
    const e = new Ct(this._instance, this._instance), [t, n, r, s] = this._args, i = [];
    for (const c of e.getSelectionGenerator({ top: t, left: n, bottom: r, right: s }))
      i.push({ row: c.row, col: c.col, text: c.text });
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
function ks(o, e) {
  const [t, n] = o, r = n - t;
  return t < e ? [[e - r - 1, e - 1], t] : [[e, e + r], n + 1];
}
class nh extends J {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...ks(this._args[0], this._undoContext.targetId));
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
class oh extends J {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...ks(this._args[0], this._undoContext.targetId));
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
class rh extends J {
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
class sh extends J {
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
    const [e, t, n] = this._args, r = P(e, t + 1).map((s) => this._instance.getRow(s));
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
class ih extends J {
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
class lh extends J {
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
class ah extends J {
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
const or = {
  addRow: Yd,
  addColumn: qd,
  setCell: ft,
  clearCells: Rs,
  setRowHeight: ws,
  setColumnWidth: _s,
  insertRows: eh,
  insertColumns: Qd,
  setRowVisible: ih,
  setColumnVisible: Xd,
  mergeCells: th,
  splitCells: ah,
  removeRows: sh,
  removeColumns: rh,
  exchangeRows: Zd,
  exchangeColumns: Jd,
  moveRows: nh,
  moveColumns: oh,
  setCellRenderer: lh
};
function ch(o) {
  if (!(o in or)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return or[o];
}
function uh(o) {
  if (o === Z.name)
    return ch;
}
function dh(o, e, t, n, r) {
  const s = uh(e);
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
      return i ? i.isRecording && dh(i, this.constructor.name, t, this, s) : console.warn("No commandManager in this context"), r.apply(this, s);
    }, n;
  };
}
var hh = Object.defineProperty, fh = Object.getOwnPropertyDescriptor, ee = (o, e, t, n) => {
  for (var r = fh(e, t), s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = i(e, t, r) || r);
  return r && hh(e, t, r), r;
};
const Mn = new ho(), gh = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), rr = {}, mh = [
  "text/html",
  "text/plain"
];
function ph() {
  return [
    new bs({}),
    new vs(),
    new Ss(),
    new Cs({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new Sd({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class Z extends Il {
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
      ...gh,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...this._copyOptions,
      ...e.pasteOptions
    }, s)
      for (const [l, a] of Object.entries(s))
        this._defaultColumnCellFormat[l] = Object.assign(this._defaultColumnCellFormat[l] || {}, a);
    this._gridStore = new $u(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new ul({ context: this }),
        gridStateContext: new ed(this),
        cursorManager: xs(this, !1)
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
    }, r), this.contextElement.classList.add(nl, ol), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: c } = this._gridStore.elements, { gridStateContext: u } = this._gridStore;
    this.contextElement.appendChild(c), this.resizeObserve(() => {
      this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection"), this._scheduleManager.forceRunTasks(), this._gridStore.hook.emit("resize", []), this.onResizeContext();
    }), this.addCoreElement(c), this._generator = new Ct(this._rowManager, this._colManager), this._selector = new ad(this, u, c), this._scheduleManager = new ud({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? ph()), u.selectionRangeState.addSubscription((l, a) => {
      l?.activeCell !== a?.activeCell && (l?.activeCell.deactivate(), a?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((l, a) => {
      l.forEach((d) => d.deactivate()), a.forEach((d) => d.activate());
    }), u.selectionRangeState.addSubscription((l, a) => {
      a ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(a.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((l, a) => {
      l?.activeCell !== a?.activeCell && Tn(() => this.onChangeCell(a?.activeCell ?? null)), Tn(a ? () => this.onSelectCell(a.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((l, a) => {
      this.onSelectChanged(a?.range ?? null, l?.range ?? null);
    }), u.selectionRangeState.addSubscription((l, a) => {
      a?.activeCell && this._gridStore.gridTextarea.setPosition(a.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((l, a) => {
      this.contextElement.dataset.mode = a.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (l) => this.hook.emit("contextMenu", [l])), this.addGlobalEventListener(this.contextElement, "focus", (l) => this.hook.emit("contextFocus", [l])), this.addGlobalEventListener(this.contextElement, "blur", (l) => this.hook.emit("contextBlur", [l])), this.addGlobalEventListener(this.contextElement, "mousedown", (l) => this.hook.emit("contextMouseDown", [l])), this.addGlobalEventListener(this.contextElement, "mousemove", (l) => this.hook.emit("contextMouseMove", [l])), this.addGlobalEventListener(this.contextElement, "mouseup", (l) => this.hook.emit("contextMouseUp", [l])), this.addGlobalEventListener(this.contextElement, "dragstart", (l) => this.hook.emit("contextDragStart", [l])), this.addGlobalEventListener(this.contextElement, "dragend", (l) => this.hook.emit("contextDragEnd", [l])), this.hook.addBeginHook("contextMenu", (l) => void l.preventDefault()), this.hook.addEndHook("contextMenu", (l) => {
      const { y: a, x: d } = Ll(l);
      this.onContextMenu(l, this.findCellOrNull(a, d));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this._gridStore.hook.addHook("changedFreezedRowHeight", (l, a) => this._updateMinHeightForFreezedRows(l, a)), this._gridStore.hook.addHook("changedFreezedColumnWidth", (l, a) => this._updateMinWidthForFreezedColumns(l, a)), this._initTableRowCol(), this._gridStore.gridTextarea.mountElement(c);
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
    return this._colManager.columnsWidth;
  }
  get height() {
    return this._rowManager.rowsHeight;
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
    const { scrollTop: n, scrollLeft: r } = this, s = e < n + this.fixedRowHeight ? e - n : e, i = t < r + this.fixedColumnWidth ? t - r : t, c = this.getRowByTop(s);
    if (!c) return null;
    const u = this.getColumnByLeft(i);
    if (!u) return null;
    const l = this.cell(c.rowId, u.columnId);
    return l.mergeMain ?? l;
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
    this._rowManager.clearRows(), this._mergeHandler.clearMergeCells(this.headerRows), this.commandManager.clearCommands();
  }
  /**
   * headerRows를 제외한 모든 body row 제거
   * undo용 command가 모두 초기화 됨
   */
  clearRows() {
    this._clearAllRows(), this._scheduleManager.addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  getColumnLeft(e) {
    return this._colManager.getColumnLeft(e);
  }
  select(e, t = this.activeCell) {
    this._gridContext.selectionRangeState.next({
      range: e,
      // TODO range의 범위가 min ~ max 초과하면 에러 (this.cell)
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
      return P(e.mergeInfo.colSpan).reduce((n, r) => this.getColumnVisible(t + r) ? n + this.getColumnWidth(t + r) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return P(e.mergeInfo.rowSpan).reduce((n, r) => this.getRowVisible(t + r) ? n + this.getRowHeight(e.row + r) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  getSelection() {
    return this._gridContext.selectionRangeState.value?.range ?? null;
  }
  scrollOnRow(e) {
    this._scheduleManager.isScheduled ? this.afterRender(() => this._scrollOnRowTask(e)) : this._scrollOnRowTask(e);
  }
  scrollOnCol(e) {
    this._scheduleManager.isScheduled ? this.afterRender(() => this._scrollOnColTask(e)) : this._scrollOnColTask(e);
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
    this.scrollOnRow(e), this.scrollOnCol(t);
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
   * @version ^2.17.0
   * @command
   */
  setData(e) {
    const { row: t, col: n, data: r } = e;
    r.forEach((s, i) => {
      s.forEach((c, u) => this.setText(t + i, n + u, c));
    });
  }
  setColumnWidth(e, t) {
    const n = U(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this._colManager.setColumnWidth(e, n), this.onResizeColumn(e), this._gridStore.hook.emit("onColumnChanged", [e, e, "setWidth"]), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft");
  }
  getRowHeight(e) {
    return this._rowManager.getRowHeight(e);
  }
  setRowHeight(e, t) {
    const n = U(t, this.minRowHeight, this.maxRowHeight);
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
  setCell(e, t, n) {
    if (typeof n.text == "number" || typeof n.text == "boolean" || typeof n.text == "bigint")
      n.text = `${n.text}`;
    else if (n.text === null)
      n.text = "";
    else if (typeof n.text == "object" || Array.isArray(n.text))
      throw new Error("Could not set object or array in text property!");
    this.cell(e, t).cellInfo = n;
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
   * @version ^2.17.1
   */
  fillColumn(e) {
    const t = this.contextElement.clientWidth, n = this.width - this.getColumn(e).width;
    if (console.log(t, n), n > t) {
      console.warn("Already filled column. no effect column width.");
      return;
    }
    this.setColumnWidth(e, t - n);
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this._rowHeaderInfo.defaultSize) {
    const t = U(e, this.minRowHeight, this.maxRowHeight), n = this._createIRGridRow(this._rowManager.getNextRowId(), this.height, t);
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
    for (let r = e; r <= t; r++) {
      const s = this.getRow(r);
      for (const i of s.getCellGenerator())
        i.isMerged && this._mergeHandler.removeMergeCell(i.row, i.col);
    }
    this._rowManager.removeRows(e, t, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this._mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this._rowManager.runFuncEachRow((n) => {
      for (const r of n.getCellGenerator(e, t))
        r.isMerged && this._mergeHandler.removeMergeCell(r.row, r.col);
    }), this._rowManager.removeColumns(e, t), this._colManager.removeColumns(e, t), this._gridStore.hook.emit("onColumnChanged", [e, t, "removeColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("adjustSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = U(e, this.minColWidth, this.maxColWidth), n = this._colManager.addColumn(t);
    return this._rowManager.addColumn((r) => this._createIRGridCell(r.rowId, n.columnId)), this._gridStore.hook.emit("onColumnChanged", [n.columnId, n.columnId, "addColumn"]), n.columnId;
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
    const r = this.getRowCount(), s = U(e, this.headerRows, r);
    if (!this._mergeHandler.checkCanInsertRow(s)) return !1;
    const i = U(n, this.minRowHeight, this.maxRowHeight);
    if (s === r)
      return P(t).forEach(() => this.addRow(i)), !0;
    const c = P(t).map((u) => this._createIRGridRow(s + u, 0, i));
    return this._rowManager.insertRows(s, c), this._scheduleInsertRowTasks(), !0;
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
    const r = this.getColCount(), s = U(e, this.headerColumns, r);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = U(n, this.minColWidth, this.maxColWidth);
    if (s === r) {
      for (let u = 0; u < t; u++)
        this.addColumn(i);
      return !0;
    }
    this._colManager.insertColumns(e, t, i), this._rowManager.insertColumns(e, t, (u, l) => this._createIRGridCell(u, l)), this._gridStore.hook.emit("onColumnChanged", [e, e + t - 1, "insertColumns"]);
    const c = this._scheduleManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("adjustSelection");
    return e < this._colManager.freezedColumns && c.addTask("updateRowsStickyLeft"), !0;
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
    P(e, t + 1).forEach((n) => {
      const r = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      r !== this.getColumnWidth(n) && this.setColumnWidth(
        n,
        U(
          r,
          this._colHeaderInfo.minSize,
          this._colHeaderInfo.maxSize
        )
      );
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
    P(e, t + 1).forEach((n) => {
      const r = this._rowManager.getRow(n).rowInnerHeight;
      r !== this.getRowHeight(n) && this.setRowHeight(n, r);
    });
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
      const t = (await Rl.read()).flat();
      for await (const n of t)
        for (const r of mh)
          e[r] === "" && n.types.includes(r) && (e[r] = await xl(await n.getType(r)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = Sl(rr) ?? "";
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
      Bo(
        await this._createClipboardGetter()
      )
    );
  }
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = yu(this, this._pasteOptions), r = n.getPastingRange(e, t), { rowSpan: s, colSpan: i } = this._pasteOptions;
    if (s || i)
      for (const u of this._generator.getSelectionGenerator(r))
        s && u.mergeInfo.rowSpan > 1 && this.splitCells(u.row, u.col), i && u.mergeInfo.colSpan > 1 && this.splitCells(u.row, u.col);
    const c = n.beforePastingList(r, t);
    c.length !== 0 && (this.onClipboardBeforePaste(r), n.pasteTask(c), this.onClipboardAfterPaste(r), this.select(r));
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
    return this._scheduleManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
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
    return this._mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this._colManager.setColumnVisible(e, t), this._rowManager.setColumnVisible(e, t), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), this._gridStore.hook.emit("onColumnChanged", [e, e, "setVisible"])), !0);
  }
  getColumnVisible(e) {
    return this._colManager.getColumnVisible(e);
  }
  createFinder(e = {}) {
    return Ud(this, e);
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
    this._colManager.freezeColumns(e), this._scheduleManager.addTask("updateSelection").addTask("updateRowsStickyLeft");
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
    this._rowManager.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._scheduleManager.addTask("adjustSelection");
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
    this._rowManager.runFuncEachRow((r) => r.moveCells(e, n)), this.onMovedColumns(e, n), this._scheduleManager.addTask("adjustSelection");
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
  onResizeContext() {
  }
  onResizeColumn(e) {
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
    const n = this._gridRangeUtils.getCellMatrixByRange(t), { rowSpan: r, colSpan: s } = this._copyOptions, c = (this._copyOptions.skipFiltered ? n.filter(([u]) => !this.isFilteredRow(u.row)) : n).map((u) => u.map((l) => ({
      text: this.onCopyCellText(l),
      cellVisible: l.mergeMain === void 0,
      rowSpan: r ? l.mergeInfo.rowSpan : 1,
      colSpan: s ? l.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    zu(e.clipboardData, c), El(rr, JSON.stringify(c)), this.focus(), this.onCopy(), e.preventDefault();
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
    const n = Bo(e.clipboardData);
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
  doEditMode(e, t = !1, n = !1) {
    if (!e.element.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return console.warn(`not connected cell element row: ${e.row}, col: ${e.col}`), !1;
    const r = this._gridStore.gridTextarea;
    r.onEditDone = (s, i, c, u, l, a) => {
      this.onEditCellDone(s, i, c, u, l, a), this._gridContext.gridModeState.value.mode === "edit-cell" && this._gridContext.setIdle();
    }, r.onEditKeyDown = (s, i, c, u) => this.onEditKeyDown(s, i, c, u), r.onEditInput = (s, i) => this.onEditInput(s, i, e), r.onEnterOnEdit = () => {
      let s = this._gridStore.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === s) {
        if (i = this._gridStore.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        s = this._gridStore.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(s, i), this.selectCell(s, i), this.afterRender(() => this.doEditMode(this.cell(s, i), !1, !0));
    };
    try {
      return this._gridContext.gridModeState.next({
        mode: "edit-cell",
        contextParam: { cell: e }
      }), r.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
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
  _updateMinHeightForFreezedRows(e, t) {
    const n = t, r = e + (n < this.getRowCount() ? this._rowManager.getRowHeight(n) : 0) + (this.hasHorizontalScroll() ? Ro : 0);
    se(this.contextElement, {
      [F.minHeight]: `${r}px`
    });
  }
  _updateMinWidthForFreezedColumns(e, t) {
    const n = t, r = e + (n < this.getColCount() ? this.getColumnWidth(n) : 0) + (this.hasVerticalScroll() ? Ro : 0);
    se(this.contextElement, {
      [F.minWidth]: `${r}px`
    });
  }
  _getAdjustTargetColumn(e) {
    return e >= this._colManager.length ? this._colManager.length : e < this._colManager.freezedColumns ? this._colManager.freezedColumns : this._rowManager.getStartOfColumnId(e);
  }
  _scrollOnColTask(e) {
    const t = U(e, 0, this.getColCount() - 1), n = this.getColumnLeft(t), r = n + this.getColumnWidth(t), { fixedColumnWidth: s, scrollRight: i, scrollLeft: c } = this, u = c + s;
    i < r ? this.contextElement.scrollLeft = c + (r - i) : u > n && (this.contextElement.scrollLeft = n - s);
  }
  _scrollOnRowTask(e) {
    const t = U(e, 0, this.getRowCount() - 1), n = this.getRow(t), r = n.top, s = n.top + n.height, { scrollBottom: i, fixedRowHeight: c, scrollTop: u } = this, l = u + c;
    i < s ? this.contextElement.scrollTop = u + (s - i) : l > r && (this.contextElement.scrollTop = r - c);
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
    P(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount), this._updateMinWidthForFreezedColumns(this._colManager.fixedColumnsWidth, this._colManager.freezedColumns);
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
    se(this.contextElement, {
      [F.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [F.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [F.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [F.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
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
    const n = this._getCellType(e, t), r = n.endsWith("header") ? "th" : "td", s = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, s), c = new Xu({
      row: e,
      col: t,
      tag: r,
      cellRenderer: i,
      props: s
    });
    return c.onRightClick = (u, l) => this.onCellRightClick(u, l), c.onCheckReadonly = () => this.onCheckCellReadonly(c), n === "col-header" ? this._initColumnHeaderCell(c) : n === "row-header" ? this._initRowHeaderCell(c) : this._initBodyCell(c), this.onCreatingCell(c), c;
  }
  _createIRGridRow(e, t, n) {
    const r = new td({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return ++this._rowSeq, P(this.getColCount()).forEach((s) => {
      r.addCell(this._createIRGridCell(e, s)), !this.getColumnVisible(s) && r.setColumnVisible(s, !1);
    }), r.onMounted = () => {
      r.freezeColumns(this._rowHeaderInfo.colCount), this.onMountedRow(r.rowId);
    }, r.onChangedHeight = () => {
      P(this.getColCount()).forEach((s) => {
        const i = r.getCell(s), c = i.mergeMain ? i.mergeMain : i.mergeInfo.rowSpan > 1 ? i : null;
        c && (c.height = this._mergeHandler.getMergedRowHeight(c.row, c.row + c.mergeInfo.rowSpan - 1));
      });
    }, r;
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
const nf = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, of = /^-?\d+(\.\d+)?$/;
export {
  nf as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  of as ALLOW_ONLY_NUMBER_PATTERN,
  qh as CellDropPlugin,
  Uh as ColumnFillPlugin,
  as as CustomCellRenderer,
  Kh as DefaultKeyPlugin,
  Z as IRGrid,
  Wc as IRGridButtonRenderer,
  Ss as IRGridCellDropPlugin,
  we as IRGridCellRenderer,
  vr as IRGridCheckboxRenderer,
  vd as IRGridColumnFillPlugin,
  Tc as IRGridDatePickerRenderer,
  Vc as IRGridDefaultCellIconButtonRenderer,
  ho as IRGridDefaultCellRenderer,
  bs as IRGridDefaultKeyPlugin,
  Xh as IRGridExchangeByHeaderCellPlugin,
  vs as IRGridMouseCellSelectorPlugin,
  Jh as IRGridMoveColumnsPlugin,
  Zh as IRGridMoveRowsPlugin,
  Qh as IRGridOverflowPanelPlugin,
  Sd as IRGridPopoverPlugin,
  Oc as IRGridProgressRenderer,
  is as IRGridRadioCellRenderer,
  Cs as IRGridResizerPlugin,
  Gh as IRGridRowFilterCellRenderer,
  tf as IRGridRowFilterPlugin,
  jc as IRGridRowNoHeaderCellRenderer,
  pd as IRGridRowSelectionPlugin,
  Ic as IRGridSelectCellRenderer,
  Rd as IRGridSingleCellDragPlugin,
  ef as IRGridTablePlugin,
  jh as MouseCellSelectorPlugin,
  Vh as ResizerPlugin,
  $h as RowSelectionPlugin,
  Yh as SingleCellDragPlugin,
  fo as cellCompare,
  No as cellTextToNum,
  ls as createCellContent,
  Gc as createCellContentWithIconButton,
  Nh as createCustomRenderer,
  jd as createIRGridColumnSortManager,
  Bh as createInferenceSortHandler,
  Wo as numberCheckDefault,
  zh as renderGridButton,
  Fh as renderGridCellDefault,
  Ph as renderGridCellIconButton,
  Lh as renderGridCheckbox,
  Oh as renderGridDatePicker,
  Ah as renderGridProgress,
  Dh as renderGridRadio,
  Hh as renderGridSelect,
  Wh as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
