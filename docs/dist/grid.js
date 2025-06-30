import "./chunks/_init-nhPfGQQu.js";
import { a2 as ts, I as ns, a3 as os, K as ss, L as ro, a4 as rs, a5 as io, m as is, o as ls, u as as, n as cs, s as us, l as ds, a6 as hs, p as fs, q as gs, t as ms, r as ps, F as ws, a7 as Cs, G as lo, H as Kt, a8 as _s, a9 as Rs, P as he, aa as xs, ab as ys, ac as bs, ad as Ss, ae as vs, af as ks, Y as Is, ag as Es, ah as Ts, ai as Ms, aj as Ls, ak as Hs, al as Os, am as As, an as Fs, ao, ap as tn, aq as zs, ar as Ds, j as nt, as as Le, at as Ps, au as Ws, av as $s, aw as co, ax as Ns, ay as Bs, az as Vs, aA as Gs, aB as Ht, aC as js, aD as Us, aE as pn, aF as Ks, aG as qs, aH as Xs, aI as Ys, aJ as Zs, aK as Js, aL as D, aM as wn, aN as Qs, aO as er, aP as tr, aQ as nr, aR as or, M as Cn, aS as sr, aT as rr, aU as ir, aV as lr, aW as ar, aX as cr, aY as ur, aZ as dr, a_ as hr, a$ as fr, b0 as gr, b1 as uo, b2 as ho, b3 as ve, b4 as mr, b5 as pr, N as wr, b6 as Cr, b7 as _r, b8 as Rr, b9 as xr, ba as yr, bb as br, bc as Sr, bd as _n, be as vr, bf as kr, bg as Ir, bh as Rn, bi as xn, bj as Er, bk as Tr, U as Mr } from "./chunks/css-DfN_pP8W.js";
import { r as z, f as ke, g as Lr, d as Hr, h as Or, I as Ar, c as Fr, e as zr } from "./chunks/command-manager-CjzZ9_J2.js";
import { c as He } from "./chunks/asserts-CpwDJsre.js";
import { o as Dr, m as Pr, g as Ie, a as nn, h as ot, c as Wr, l as G, R as on, d as $r, C as Nr, k as Br } from "./chunks/rx-state-6cX-rPVL.js";
import { e as fo, a as Ot, b as sn, g as Ve, h as wt, v as Vr, c as Gr, o as jr, f as Ur, s as Kr } from "./chunks/floating-Bpd99Qyw.js";
import { i as J, d as be } from "./chunks/index-Bmt0z1bM.js";
import { c as Ct } from "./chunks/clsx-OuTLNxxd.js";
import { c as go, d as Oe, a as Re } from "./chunks/outside-CbbQ5fFh.js";
import { p as qr } from "./chunks/pick-BLZiDVxr.js";
import { i as mo, r as Xr, w as Yr } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { I as Zr } from "./chunks/index-BWYFssyG.js";
import { v as Jr } from "./chunks/v4-CKZ6klMF.js";
class Qr {
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
function At(o, e) {
  return Dr(function(t, n) {
    var s = 0;
    t.subscribe(Pr(n, function(r) {
      n.next(o.call(e, r, s++));
    }));
  });
}
function yn(o, e, t) {
  return po(o, t) && wo(e, t);
}
function ge(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1", 10), t = parseInt(o.getAttribute("data-col") || "-1", 10);
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function po(o, e) {
  return o >= e.top && o <= e.bottom;
}
function wo(o, e) {
  return o >= e.left && o <= e.right;
}
function ei(o, e) {
  let t = o.firstChild, n = e;
  for (; t; ) {
    let s = t.firstChild;
    for (; s; )
      s instanceof HTMLElement && s.isConnected && s.dataset.ignoreAutoSize === void 0 && (n = Math.max(s.offsetHeight, n)), s = s.nextSibling;
    t = t.nextSibling;
  }
  return n;
}
function ti(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const ni = 20, oi = 5;
class oe {
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
    const s = Ie(e, t), r = [n.icon, n.sortOrder].reduce((u, d) => d ? u + 1 : u, 0) * (ni + oi), i = `${n.text ?? ""}`.split(`
`), l = r + s.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + z(1, i.length).reduce(
      (u, d) => Math.max(u, s.calculateWidth(i[d])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    return this.getVerticalCellPadding(t) + ei(
      e,
      t.gridStore.getThemeValue("grid.emptyDefaultHeight")
    );
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
class q extends Qr {
}
class Ce extends q {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args;
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: qr(
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
const Je = {
  checkbox: ns,
  checkboxWrapper: ss,
  checkboxText: io,
  checkboxInput: ro,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, si = 16, qt = 6, ri = qt * 2, ii = 20;
class Co extends oe {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.classList.add(ts, Je.checkbox), r.classList.add(os, Je.checkboxWrapper), i.type = "checkbox", i.className = Je.checkboxInput, r.appendChild(i), n.icon && r.appendChild(nn(ot(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${rs} ${Je.checkboxText}`, l.innerText = n.label, r.appendChild(l);
    }
    return n.horizontalAlign && s.classList.add(Je[`horizontal_${n.horizontalAlign}`]), s.appendChild(r), i.checked = n.text === "true", r.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: d } = n.gridStore, c = new Ce(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, d.pushCommandBlock(new ke(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, s;
  }
  getCellInnerWidth(e, t, n) {
    const s = Ie(e, t), r = n.label ? qt + s.calculateWidth(n.label) : 0, i = n.icon ? qt + ii : 0;
    return si + ri + r + i + this.getHorizontalCellPadding(n);
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
function hu(o) {
  const e = new Co(o ?? {});
  return () => e;
}
const li = !1, ai = (o, e) => o === e, me = Symbol("solid-proxy"), ci = typeof Proxy == "function", Xt = Symbol("solid-track"), _t = {
  equals: ai
};
let _o = bo;
const ye = 1, Rt = 2, Ro = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var $ = null;
let Ft = null, ui = null, V = null, Q = null, _e = null, kt = 0;
function gt(o, e) {
  const t = V, n = $, s = o.length === 0, r = e === void 0 ? n : e, i = s ? Ro : {
    owned: null,
    cleanups: null,
    context: r ? r.context : null,
    owner: r
  }, l = s ? o : () => o(() => ae(() => st(i)));
  $ = i, V = null;
  try {
    return Ke(l, !0);
  } finally {
    V = t, $ = n;
  }
}
function pe(o, e) {
  e = e ? Object.assign({}, _t, e) : _t;
  const t = {
    value: o,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(t.value)), yo(t, s));
  return [xo.bind(t), n];
}
function di(o, e, t) {
  const n = It(o, e, !0, ye);
  Ue(n);
}
function U(o, e, t) {
  const n = It(o, e, !1, ye);
  Ue(n);
}
function hi(o, e, t) {
  _o = Ci;
  const n = It(o, e, !1, ye);
  n.user = !0, _e ? _e.push(n) : Ue(n);
}
function ie(o, e, t) {
  t = t ? Object.assign({}, _t, t) : _t;
  const n = It(o, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = t.equals || void 0, Ue(n), xo.bind(n);
}
function fi(o) {
  return Ke(o, !1);
}
function ae(o) {
  if (V === null) return o();
  const e = V;
  V = null;
  try {
    return o();
  } finally {
    V = e;
  }
}
function je(o) {
  hi(() => ae(o));
}
function Fe(o) {
  return $ === null || ($.cleanups === null ? $.cleanups = [o] : $.cleanups.push(o)), o;
}
function Yt() {
  return V;
}
const [fu, gu] = /* @__PURE__ */ pe(!1);
function gi(o, e) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: Ri(t),
    defaultValue: o
  };
}
function mi(o) {
  let e;
  return $ && $.context && (e = $.context[o.id]) !== void 0 ? e : o.defaultValue;
}
function rn(o) {
  const e = ie(o), t = ie(() => Zt(e()));
  return t.toArray = () => {
    const n = t();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, t;
}
function xo() {
  if (this.sources && this.state)
    if (this.state === ye) Ue(this);
    else {
      const o = Q;
      Q = null, Ke(() => yt(this), !1), Q = o;
    }
  if (V) {
    const o = this.observers ? this.observers.length : 0;
    V.sources ? (V.sources.push(this), V.sourceSlots.push(o)) : (V.sources = [this], V.sourceSlots = [o]), this.observers ? (this.observers.push(V), this.observerSlots.push(V.sources.length - 1)) : (this.observers = [V], this.observerSlots = [V.sources.length - 1]);
  }
  return this.value;
}
function yo(o, e, t) {
  let n = o.value;
  return (!o.comparator || !o.comparator(n, e)) && (o.value = e, o.observers && o.observers.length && Ke(() => {
    for (let s = 0; s < o.observers.length; s += 1) {
      const r = o.observers[s], i = Ft && Ft.running;
      i && Ft.disposed.has(r), (i ? !r.tState : !r.state) && (r.pure ? Q.push(r) : _e.push(r), r.observers && So(r)), i || (r.state = ye);
    }
    if (Q.length > 1e6)
      throw Q = [], new Error();
  }, !1)), e;
}
function Ue(o) {
  if (!o.fn) return;
  st(o);
  const e = kt;
  pi(o, o.value, e);
}
function pi(o, e, t) {
  let n;
  const s = $, r = V;
  V = $ = o;
  try {
    n = o.fn(e);
  } catch (i) {
    return o.pure && (o.state = ye, o.owned && o.owned.forEach(st), o.owned = null), o.updatedAt = t + 1, vo(i);
  } finally {
    V = r, $ = s;
  }
  (!o.updatedAt || o.updatedAt <= t) && (o.updatedAt != null && "observers" in o ? yo(o, n) : o.value = n, o.updatedAt = t);
}
function It(o, e, t, n = ye, s) {
  const r = {
    fn: o,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: $,
    context: $ ? $.context : null,
    pure: t
  };
  return $ === null || $ !== Ro && ($.owned ? $.owned.push(r) : $.owned = [r]), r;
}
function xt(o) {
  if (o.state === 0) return;
  if (o.state === Rt) return yt(o);
  if (o.suspense && ae(o.suspense.inFallback)) return o.suspense.effects.push(o);
  const e = [o];
  for (; (o = o.owner) && (!o.updatedAt || o.updatedAt < kt); )
    o.state && e.push(o);
  for (let t = e.length - 1; t >= 0; t--)
    if (o = e[t], o.state === ye)
      Ue(o);
    else if (o.state === Rt) {
      const n = Q;
      Q = null, Ke(() => yt(o, e[0]), !1), Q = n;
    }
}
function Ke(o, e) {
  if (Q) return o();
  let t = !1;
  e || (Q = []), _e ? t = !0 : _e = [], kt++;
  try {
    const n = o();
    return wi(t), n;
  } catch (n) {
    t || (_e = null), Q = null, vo(n);
  }
}
function wi(o) {
  if (Q && (bo(Q), Q = null), o) return;
  const e = _e;
  _e = null, e.length && Ke(() => _o(e), !1);
}
function bo(o) {
  for (let e = 0; e < o.length; e++) xt(o[e]);
}
function Ci(o) {
  let e, t = 0;
  for (e = 0; e < o.length; e++) {
    const n = o[e];
    n.user ? o[t++] = n : xt(n);
  }
  for (e = 0; e < t; e++) xt(o[e]);
}
function yt(o, e) {
  o.state = 0;
  for (let t = 0; t < o.sources.length; t += 1) {
    const n = o.sources[t];
    if (n.sources) {
      const s = n.state;
      s === ye ? n !== e && (!n.updatedAt || n.updatedAt < kt) && xt(n) : s === Rt && yt(n, e);
    }
  }
}
function So(o) {
  for (let e = 0; e < o.observers.length; e += 1) {
    const t = o.observers[e];
    t.state || (t.state = Rt, t.pure ? Q.push(t) : _e.push(t), t.observers && So(t));
  }
}
function st(o) {
  let e;
  if (o.sources)
    for (; o.sources.length; ) {
      const t = o.sources.pop(), n = o.sourceSlots.pop(), s = t.observers;
      if (s && s.length) {
        const r = s.pop(), i = t.observerSlots.pop();
        n < s.length && (r.sourceSlots[i] = n, s[n] = r, t.observerSlots[n] = i);
      }
    }
  if (o.tOwned) {
    for (e = o.tOwned.length - 1; e >= 0; e--) st(o.tOwned[e]);
    delete o.tOwned;
  }
  if (o.owned) {
    for (e = o.owned.length - 1; e >= 0; e--) st(o.owned[e]);
    o.owned = null;
  }
  if (o.cleanups) {
    for (e = o.cleanups.length - 1; e >= 0; e--) o.cleanups[e]();
    o.cleanups = null;
  }
  o.state = 0;
}
function _i(o) {
  return o instanceof Error ? o : new Error(typeof o == "string" ? o : "Unknown error", {
    cause: o
  });
}
function vo(o, e = $) {
  throw _i(o);
}
function Zt(o) {
  if (typeof o == "function" && !o.length) return Zt(o());
  if (Array.isArray(o)) {
    const e = [];
    for (let t = 0; t < o.length; t++) {
      const n = Zt(o[t]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return o;
}
function Ri(o, e) {
  return function(n) {
    let s;
    return U(() => s = ae(() => ($.context = {
      ...$.context,
      [o]: n.value
    }, rn(() => n.children))), void 0), s;
  };
}
const xi = Symbol("fallback");
function bn(o) {
  for (let e = 0; e < o.length; e++) o[e]();
}
function yi(o, e, t = {}) {
  let n = [], s = [], r = [], i = 0, l = e.length > 1 ? [] : null;
  return Fe(() => bn(r)), () => {
    let u = o() || [], d = u.length, c, a;
    return u[Xt], ae(() => {
      let f, w, I, b, v, p, _, x, C;
      if (d === 0)
        i !== 0 && (bn(r), r = [], n = [], s = [], i = 0, l && (l = [])), t.fallback && (n = [xi], s[0] = gt((g) => (r[0] = g, t.fallback())), i = 1);
      else if (i === 0) {
        for (s = new Array(d), a = 0; a < d; a++)
          n[a] = u[a], s[a] = gt(h);
        i = d;
      } else {
        for (I = new Array(d), b = new Array(d), l && (v = new Array(d)), p = 0, _ = Math.min(i, d); p < _ && n[p] === u[p]; p++) ;
        for (_ = i - 1, x = d - 1; _ >= p && x >= p && n[_] === u[x]; _--, x--)
          I[x] = s[_], b[x] = r[_], l && (v[x] = l[_]);
        for (f = /* @__PURE__ */ new Map(), w = new Array(x + 1), a = x; a >= p; a--)
          C = u[a], c = f.get(C), w[a] = c === void 0 ? -1 : c, f.set(C, a);
        for (c = p; c <= _; c++)
          C = n[c], a = f.get(C), a !== void 0 && a !== -1 ? (I[a] = s[c], b[a] = r[c], l && (v[a] = l[c]), a = w[a], f.set(C, a)) : r[c]();
        for (a = p; a < d; a++)
          a in I ? (s[a] = I[a], r[a] = b[a], l && (l[a] = v[a], l[a](a))) : s[a] = gt(h);
        s = s.slice(0, i = d), n = u.slice(0);
      }
      return s;
    });
    function h(f) {
      if (r[a] = f, l) {
        const [w, I] = pe(a);
        return l[a] = I, e(u[a], w);
      }
      return e(u[a]);
    }
  };
}
function A(o, e) {
  return ae(() => o(e || {}));
}
function at() {
  return !0;
}
const bi = {
  get(o, e, t) {
    return e === me ? t : o.get(e);
  },
  has(o, e) {
    return e === me ? !0 : o.has(e);
  },
  set: at,
  deleteProperty: at,
  getOwnPropertyDescriptor(o, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return o.get(e);
      },
      set: at,
      deleteProperty: at
    };
  },
  ownKeys(o) {
    return o.keys();
  }
};
function zt(o) {
  return (o = typeof o == "function" ? o() : o) ? o : {};
}
function Si() {
  for (let o = 0, e = this.length; o < e; ++o) {
    const t = this[o]();
    if (t !== void 0) return t;
  }
}
function bt(...o) {
  let e = !1;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    e = e || !!l && me in l, o[i] = typeof l == "function" ? (e = !0, ie(l)) : l;
  }
  if (ci && e)
    return new Proxy({
      get(i) {
        for (let l = o.length - 1; l >= 0; l--) {
          const u = zt(o[l])[i];
          if (u !== void 0) return u;
        }
      },
      has(i) {
        for (let l = o.length - 1; l >= 0; l--)
          if (i in zt(o[l])) return !0;
        return !1;
      },
      keys() {
        const i = [];
        for (let l = 0; l < o.length; l++) i.push(...Object.keys(zt(o[l])));
        return [...new Set(i)];
      }
    }, bi);
  const t = {}, n = /* @__PURE__ */ Object.create(null);
  for (let i = o.length - 1; i >= 0; i--) {
    const l = o[i];
    if (!l) continue;
    const u = Object.getOwnPropertyNames(l);
    for (let d = u.length - 1; d >= 0; d--) {
      const c = u[d];
      if (c === "__proto__" || c === "constructor") continue;
      const a = Object.getOwnPropertyDescriptor(l, c);
      if (!n[c])
        n[c] = a.get ? {
          enumerable: !0,
          configurable: !0,
          get: Si.bind(t[c] = [a.get.bind(l)])
        } : a.value !== void 0 ? a : void 0;
      else {
        const h = t[c];
        h && (a.get ? h.push(a.get.bind(l)) : a.value !== void 0 && h.push(() => a.value));
      }
    }
  }
  const s = {}, r = Object.keys(n);
  for (let i = r.length - 1; i >= 0; i--) {
    const l = r[i], u = n[l];
    u && u.get ? Object.defineProperty(s, l, u) : s[l] = u ? u.value : void 0;
  }
  return s;
}
const ko = (o) => `Stale read from <${o}>.`;
function ln(o) {
  const e = "fallback" in o && {
    fallback: () => o.fallback
  };
  return ie(yi(() => o.each, o.children, e || void 0));
}
function Ee(o) {
  const e = o.keyed, t = ie(() => o.when, void 0, void 0), n = e ? t : ie(t, void 0, {
    equals: (s, r) => !s == !r
  });
  return ie(() => {
    const s = n();
    if (s) {
      const r = o.children;
      return typeof r == "function" && r.length > 0 ? ae(() => r(e ? s : () => {
        if (!ae(n)) throw ko("Show");
        return t();
      })) : r;
    }
    return o.fallback;
  }, void 0, void 0);
}
function an(o) {
  const e = rn(() => o.children), t = ie(() => {
    const n = e(), s = Array.isArray(n) ? n : [n];
    let r = () => {
    };
    for (let i = 0; i < s.length; i++) {
      const l = i, u = s[i], d = r, c = ie(() => d() ? void 0 : u.when, void 0, void 0), a = u.keyed ? c : ie(c, void 0, {
        equals: (h, f) => !h == !f
      });
      r = () => d() || (a() ? [l, c, u] : void 0);
    }
    return r;
  });
  return ie(() => {
    const n = t()();
    if (!n) return o.fallback;
    const [s, r, i] = n, l = i.children;
    return typeof l == "function" && l.length > 0 ? ae(() => l(i.keyed ? r() : () => {
      if (ae(t)()?.[0] !== s) throw ko("Match");
      return r();
    })) : l;
  }, void 0, void 0);
}
function Se(o) {
  return o;
}
const vi = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], ki = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...vi]), Ii = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Ei = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Ti = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  novalidate: {
    $: "noValidate",
    FORM: 1
  },
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function Mi(o, e) {
  const t = Ti[o];
  return typeof t == "object" ? t[e] ? t.$ : void 0 : t;
}
const Li = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
function Hi(o, e, t) {
  let n = t.length, s = e.length, r = n, i = 0, l = 0, u = e[s - 1].nextSibling, d = null;
  for (; i < s || l < r; ) {
    if (e[i] === t[l]) {
      i++, l++;
      continue;
    }
    for (; e[s - 1] === t[r - 1]; )
      s--, r--;
    if (s === i) {
      const c = r < n ? l ? t[l - 1].nextSibling : t[r - l] : u;
      for (; l < r; ) o.insertBefore(t[l++], c);
    } else if (r === l)
      for (; i < s; )
        (!d || !d.has(e[i])) && e[i].remove(), i++;
    else if (e[i] === t[r - 1] && t[l] === e[s - 1]) {
      const c = e[--s].nextSibling;
      o.insertBefore(t[l++], e[i++].nextSibling), o.insertBefore(t[--r], c), e[s] = t[r];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let a = l;
        for (; a < r; ) d.set(t[a], a++);
      }
      const c = d.get(e[i]);
      if (c != null)
        if (l < c && c < r) {
          let a = i, h = 1, f;
          for (; ++a < s && a < r && !((f = d.get(e[a])) == null || f !== c + h); )
            h++;
          if (h > c - l) {
            const w = e[i];
            for (; l < c; ) o.insertBefore(t[l++], w);
          } else o.replaceChild(t[l++], e[i++]);
        } else i++;
      else e[i++].remove();
    }
  }
}
const Sn = "_$DX_DELEGATE";
function Io(o, e, t, n = {}) {
  let s;
  return gt((r) => {
    s = r, e === document ? o() : j(e, o(), e.firstChild ? null : void 0, t);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function Z(o, e, t, n) {
  let s;
  const r = () => {
    const l = document.createElement("template");
    return l.innerHTML = o, l.content.firstChild;
  }, i = () => (s || (s = r())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function Et(o, e = window.document) {
  const t = e[Sn] || (e[Sn] = /* @__PURE__ */ new Set());
  for (let n = 0, s = o.length; n < s; n++) {
    const r = o[n];
    t.has(r) || (t.add(r), e.addEventListener(r, Pi));
  }
}
function fe(o, e, t) {
  t == null ? o.removeAttribute(e) : o.setAttribute(e, t);
}
function Oi(o, e, t) {
  t ? o.setAttribute(e, "") : o.removeAttribute(e);
}
function N(o, e) {
  e == null ? o.removeAttribute("class") : o.className = e;
}
function Tt(o, e, t, n) {
  if (n)
    Array.isArray(t) ? (o[`$$${e}`] = t[0], o[`$$${e}Data`] = t[1]) : o[`$$${e}`] = t;
  else if (Array.isArray(t)) {
    const s = t[0];
    o.addEventListener(e, t[0] = (r) => s.call(o, t[1], r));
  } else o.addEventListener(e, t, typeof t != "function" && t);
}
function Eo(o, e, t = {}) {
  const n = Object.keys(e || {}), s = Object.keys(t);
  let r, i;
  for (r = 0, i = s.length; r < i; r++) {
    const l = s[r];
    !l || l === "undefined" || e[l] || (vn(o, l, !1), delete t[l]);
  }
  for (r = 0, i = n.length; r < i; r++) {
    const l = n[r], u = !!e[l];
    !l || l === "undefined" || t[l] === u || !u || (vn(o, l, !0), t[l] = u);
  }
  return t;
}
function Ai(o, e, t) {
  if (!e) return t ? fe(o, "style") : e;
  const n = o.style;
  if (typeof e == "string") return n.cssText = e;
  typeof t == "string" && (n.cssText = t = void 0), t || (t = {}), e || (e = {});
  let s, r;
  for (r in t)
    e[r] == null && n.removeProperty(r), delete t[r];
  for (r in e)
    s = e[r], s !== t[r] && (n.setProperty(r, s), t[r] = s);
  return t;
}
function Fi(o, e = {}, t, n) {
  const s = {};
  return U(() => s.children = rt(o, e.children, s.children)), U(() => typeof e.ref == "function" && xe(e.ref, o)), U(() => zi(o, e, t, !0, s, !0)), s;
}
function xe(o, e, t) {
  return ae(() => o(e, t));
}
function j(o, e, t, n) {
  if (t !== void 0 && !n && (n = []), typeof e != "function") return rt(o, e, n, t);
  U((s) => rt(o, e(), s, t), n);
}
function zi(o, e, t, n, s = {}, r = !1) {
  e || (e = {});
  for (const i in s)
    if (!(i in e)) {
      if (i === "children") continue;
      s[i] = kn(o, i, null, s[i], t, r, e);
    }
  for (const i in e) {
    if (i === "children")
      continue;
    const l = e[i];
    s[i] = kn(o, i, l, s[i], t, r, e);
  }
}
function Di(o) {
  return o.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function vn(o, e, t) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, r = n.length; s < r; s++) o.classList.toggle(n[s], t);
}
function kn(o, e, t, n, s, r, i) {
  let l, u, d, c, a;
  if (e === "style") return Ai(o, t, n);
  if (e === "classList") return Eo(o, t, n);
  if (t === n) return n;
  if (e === "ref")
    r || t(o);
  else if (e.slice(0, 3) === "on:") {
    const h = e.slice(3);
    n && o.removeEventListener(h, n, typeof n != "function" && n), t && o.addEventListener(h, t, typeof t != "function" && t);
  } else if (e.slice(0, 10) === "oncapture:") {
    const h = e.slice(10);
    n && o.removeEventListener(h, n, !0), t && o.addEventListener(h, t, !0);
  } else if (e.slice(0, 2) === "on") {
    const h = e.slice(2).toLowerCase(), f = Li.has(h);
    if (!f && n) {
      const w = Array.isArray(n) ? n[0] : n;
      o.removeEventListener(h, w);
    }
    (f || t) && (Tt(o, h, t, f), f && Et([h]));
  } else e.slice(0, 5) === "attr:" ? fe(o, e.slice(5), t) : e.slice(0, 5) === "bool:" ? Oi(o, e.slice(5), t) : (a = e.slice(0, 5) === "prop:") || (d = Ii.has(e)) || (c = Mi(e, o.tagName)) || (u = ki.has(e)) || (l = o.nodeName.includes("-") || "is" in i) ? (a && (e = e.slice(5), u = !0), e === "class" || e === "className" ? N(o, t) : l && !u && !d ? o[Di(e)] = t : o[c || e] = t) : fe(o, Ei[e] || e, t);
  return t;
}
function Pi(o) {
  let e = o.target;
  const t = `$$${o.type}`, n = o.target, s = o.currentTarget, r = (u) => Object.defineProperty(o, "target", {
    configurable: !0,
    value: u
  }), i = () => {
    const u = e[t];
    if (u && !e.disabled) {
      const d = e[`${t}Data`];
      if (d !== void 0 ? u.call(e, d, o) : u.call(e, o), o.cancelBubble) return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(o.target) && r(e.host), !0;
  }, l = () => {
    for (; i() && (e = e._$host || e.parentNode || e.host); ) ;
  };
  if (Object.defineProperty(o, "currentTarget", {
    configurable: !0,
    get() {
      return e || document;
    }
  }), o.composedPath) {
    const u = o.composedPath();
    r(u[0]);
    for (let d = 0; d < u.length - 2 && (e = u[d], !!i()); d++) {
      if (e._$host) {
        e = e._$host, l();
        break;
      }
      if (e.parentNode === s)
        break;
    }
  } else l();
  r(n);
}
function rt(o, e, t, n, s) {
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const r = typeof e, i = n !== void 0;
  if (o = i && t[0] && t[0].parentNode || o, r === "string" || r === "number") {
    if (r === "number" && (e = e.toString(), e === t))
      return t;
    if (i) {
      let l = t[0];
      l && l.nodeType === 3 ? l.data !== e && (l.data = e) : l = document.createTextNode(e), t = Pe(o, t, n, l);
    } else
      t !== "" && typeof t == "string" ? t = o.firstChild.data = e : t = o.textContent = e;
  } else if (e == null || r === "boolean")
    t = Pe(o, t, n);
  else {
    if (r === "function")
      return U(() => {
        let l = e();
        for (; typeof l == "function"; ) l = l();
        t = rt(o, l, t, n);
      }), () => t;
    if (Array.isArray(e)) {
      const l = [], u = t && Array.isArray(t);
      if (Jt(l, e, t, s))
        return U(() => t = rt(o, l, t, n, !0)), () => t;
      if (l.length === 0) {
        if (t = Pe(o, t, n), i) return t;
      } else u ? t.length === 0 ? In(o, l, n) : Hi(o, t, l) : (t && Pe(o), In(o, l));
      t = l;
    } else if (e.nodeType) {
      if (Array.isArray(t)) {
        if (i) return t = Pe(o, t, n, e);
        Pe(o, t, null, e);
      } else t == null || t === "" || !o.firstChild ? o.appendChild(e) : o.replaceChild(e, o.firstChild);
      t = e;
    }
  }
  return t;
}
function Jt(o, e, t, n) {
  let s = !1;
  for (let r = 0, i = e.length; r < i; r++) {
    let l = e[r], u = t && t[o.length], d;
    if (!(l == null || l === !0 || l === !1)) if ((d = typeof l) == "object" && l.nodeType)
      o.push(l);
    else if (Array.isArray(l))
      s = Jt(o, l, u) || s;
    else if (d === "function")
      if (n) {
        for (; typeof l == "function"; ) l = l();
        s = Jt(o, Array.isArray(l) ? l : [l], Array.isArray(u) ? u : [u]) || s;
      } else
        o.push(l), s = !0;
    else {
      const c = String(l);
      u && u.nodeType === 3 && u.data === c ? o.push(u) : o.push(document.createTextNode(c));
    }
  }
  return s;
}
function In(o, e, t = null) {
  for (let n = 0, s = e.length; n < s; n++) o.insertBefore(e[n], t);
}
function Pe(o, e, t, n) {
  if (t === void 0) return o.textContent = "";
  const s = n || document.createTextNode("");
  if (e.length) {
    let r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
      const l = e[i];
      if (s !== l) {
        const u = l.parentNode === o;
        !r && !i ? u ? o.replaceChild(s, l) : o.insertBefore(s, t) : u && l.remove();
      } else r = !0;
    }
  } else o.insertBefore(s, t);
  return [s];
}
function We(o, e, t) {
  let n = t.initialDeps ?? [], s;
  function r() {
    var i, l, u, d;
    let c;
    t.key && ((i = t.debug) != null && i.call(t)) && (c = Date.now());
    const a = o();
    if (!(a.length !== n.length || a.some((w, I) => n[I] !== w)))
      return s;
    n = a;
    let f;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (f = Date.now()), s = e(...a), t.key && ((u = t.debug) != null && u.call(t))) {
      const w = Math.round((Date.now() - c) * 100) / 100, I = Math.round((Date.now() - f) * 100) / 100, b = I / 16, v = (p, _) => {
        for (p = String(p); p.length < _; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${v(I, 5)} /${v(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        t?.key
      );
    }
    return (d = t?.onChange) == null || d.call(t, s), s;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function En(o, e) {
  if (o === void 0)
    throw new Error("Unexpected undefined");
  return o;
}
const Wi = (o, e) => Math.abs(o - e) <= 1, $i = (o, e, t) => {
  let n;
  return function(...s) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, s), t);
  };
}, Tn = (o) => {
  const { offsetWidth: e, offsetHeight: t } = o;
  return { width: e, height: t };
}, Ni = (o) => o, Bi = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let s = e; s <= t; s++)
    n.push(s);
  return n;
}, Vi = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: l, height: u } = i;
    e({ width: Math.round(l), height: Math.round(u) });
  };
  if (s(Tn(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((i) => {
    const l = () => {
      const u = i[0];
      if (u?.borderBoxSize) {
        const d = u.borderBoxSize[0];
        if (d) {
          s({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      s(Tn(t));
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Mn = {
  passive: !0
}, Ln = typeof window > "u" ? !0 : "onscrollend" in window, Gi = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let s = 0;
  const r = o.options.useScrollendEvent && Ln ? () => {
  } : $i(
    n,
    () => {
      e(s, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (c) => () => {
    const { horizontal: a, isRtl: h } = o.options;
    s = a ? t.scrollLeft * (h && -1 || 1) : t.scrollTop, r(), e(s, c);
  }, l = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", l, Mn);
  const d = o.options.useScrollendEvent && Ln;
  return d && t.addEventListener("scrollend", u, Mn), () => {
    t.removeEventListener("scroll", l), d && t.removeEventListener("scrollend", u);
  };
}, ji = (o, e, t) => {
  if (e?.borderBoxSize) {
    const n = e.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return o[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ui = (o, {
  adjustments: e = 0,
  behavior: t
}, n) => {
  var s, r;
  const i = o + e;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class Ki {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const i = () => {
            this._measureElement(r.target, r);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, s]) => {
        typeof s > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ni,
        rangeExtractor: Bi,
        onChange: () => {
        },
        measureElement: ji,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
    }, this.maybeNotify = We(
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
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, r) => {
            this.scrollAdjustments = 0, this.scrollDirection = r ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = r, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let i = n - 1; i >= 0; i--) {
        const l = t[i];
        if (s.has(l.lane))
          continue;
        const u = r.get(
          l.lane
        );
        if (u == null || l.end > u.end ? r.set(l.lane, l) : l.end < u.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = We(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, s, r, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = We(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: r, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const d = this.measurementsCache.slice(0, u);
        for (let c = u; c < t; c++) {
          const a = r(c), h = this.options.lanes === 1 ? d[c - 1] : this.getFurthestMeasurement(d, c), f = h ? h.end + this.options.gap : n + s, w = l.get(a), I = typeof w == "number" ? w : this.options.estimateSize(c), b = f + I, v = h ? h.lane : c % this.options.lanes;
          d[c] = {
            index: c,
            start: f,
            size: I,
            end: b,
            key: a,
            lane: v
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = We(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, r) => this.range = t.length > 0 && n > 0 ? qi({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: r
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = We(
      () => {
        let t = null, n = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, s, r, i) => r === null || i === null ? [] : t({
        startIndex: r,
        endIndex: i,
        overscan: n,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, s = t.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const s = this.indexFromElement(t), r = this.measurementsCache[s];
      if (!r)
        return;
      const i = r.key, l = this.elementsCache.get(i);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const r = this.itemSizeCache.get(s.key) ?? s.size, i = n - r;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, s) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = We(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, i = t.length; r < i; r++) {
          const l = t[r], u = n[l];
          s.push(u);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return En(
          n[To(
            0,
            n.length - 1,
            (s) => En(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const r = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const l = this.getTotalSize() - r;
      return Math.max(Math.min(l, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const r = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (s.end >= i + r - this.options.scrollPaddingEnd)
          n = "end";
        else if (s.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
      const l = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, s.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: n = "start", behavior: s } = {}) => {
      this.cancelScrollToIndex(), s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: s } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const r = this.getOffsetForIndex(t, n);
      if (!r) return;
      const [i, l] = r;
      this._scrollToOffset(i, { adjustments: void 0, behavior: s }), s !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const d = this.getOffsetForIndex(t, l);
          if (!d) return;
          const [c] = d, a = this.getScrollOffset();
          Wi(c, a) || this.scrollToIndex(t, { align: l, behavior: s });
        } else
          this.scrollToIndex(t, { align: l, behavior: s });
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
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const r = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && r.some((l) => l === null); ) {
          const l = n[i];
          r[l.lane] === null && (r[l.lane] = l.end), i--;
        }
        s = Math.max(...r.filter((l) => l !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: s
    }) => {
      this.options.scrollToFn(t, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
}
const To = (o, e, t, n) => {
  for (; o <= e; ) {
    const s = (o + e) / 2 | 0, r = t(s);
    if (r < n)
      o = s + 1;
    else if (r > n)
      e = s - 1;
    else
      return s;
  }
  return o > 0 ? o - 1 : 0;
};
function qi({
  measurements: o,
  outerSize: e,
  scrollOffset: t,
  lanes: n
}) {
  const s = o.length - 1, r = (u) => o[u].start;
  if (o.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = To(
    0,
    s,
    r,
    t
  ), l = i;
  if (n === 1)
    for (; l < s && o[l].end < t + e; )
      l++;
  else if (n > 1) {
    const u = Array(n).fill(0);
    for (; l < s && u.some((c) => c < t + e); ) {
      const c = o[l];
      u[c.lane] = c.end, l++;
    }
    const d = Array(n).fill(t + e);
    for (; i >= 0 && d.some((c) => c >= t); ) {
      const c = o[i];
      d[c.lane] = c.start, i--;
    }
    i = Math.max(0, i - i % n), l = Math.min(s, l + (n - 1 - l % n));
  }
  return { startIndex: i, endIndex: l };
}
const Qt = Symbol("store-raw"), Be = Symbol("store-node"), we = Symbol("store-has"), Mo = Symbol("store-self");
function Lo(o) {
  let e = o[me];
  if (!e && (Object.defineProperty(o, me, {
    value: e = new Proxy(o, Zi)
  }), !Array.isArray(o))) {
    const t = Object.keys(o), n = Object.getOwnPropertyDescriptors(o);
    for (let s = 0, r = t.length; s < r; s++) {
      const i = t[s];
      n[i].get && Object.defineProperty(o, i, {
        enumerable: n[i].enumerable,
        get: n[i].get.bind(e)
      });
    }
  }
  return e;
}
function Te(o) {
  let e;
  return o != null && typeof o == "object" && (o[me] || !(e = Object.getPrototypeOf(o)) || e === Object.prototype || Array.isArray(o));
}
function Ge(o, e = /* @__PURE__ */ new Set()) {
  let t, n, s, r;
  if (t = o != null && o[Qt]) return t;
  if (!Te(o) || e.has(o)) return o;
  if (Array.isArray(o)) {
    Object.isFrozen(o) ? o = o.slice(0) : e.add(o);
    for (let i = 0, l = o.length; i < l; i++)
      s = o[i], (n = Ge(s, e)) !== s && (o[i] = n);
  } else {
    Object.isFrozen(o) ? o = Object.assign({}, o) : e.add(o);
    const i = Object.keys(o), l = Object.getOwnPropertyDescriptors(o);
    for (let u = 0, d = i.length; u < d; u++)
      r = i[u], !l[r].get && (s = o[r], (n = Ge(s, e)) !== s && (o[r] = n));
  }
  return o;
}
function St(o, e) {
  let t = o[e];
  return t || Object.defineProperty(o, e, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function it(o, e, t) {
  if (o[e]) return o[e];
  const [n, s] = pe(t, {
    equals: !1,
    internal: !0
  });
  return n.$ = s, o[e] = n;
}
function Xi(o, e) {
  const t = Reflect.getOwnPropertyDescriptor(o, e);
  return !t || t.get || !t.configurable || e === me || e === Be || (delete t.value, delete t.writable, t.get = () => o[me][e]), t;
}
function Ho(o) {
  Yt() && it(St(o, Be), Mo)();
}
function Yi(o) {
  return Ho(o), Reflect.ownKeys(o);
}
const Zi = {
  get(o, e, t) {
    if (e === Qt) return o;
    if (e === me) return t;
    if (e === Xt)
      return Ho(o), t;
    const n = St(o, Be), s = n[e];
    let r = s ? s() : o[e];
    if (e === Be || e === we || e === "__proto__") return r;
    if (!s) {
      const i = Object.getOwnPropertyDescriptor(o, e);
      Yt() && (typeof r != "function" || o.hasOwnProperty(e)) && !(i && i.get) && (r = it(n, e, r)());
    }
    return Te(r) ? Lo(r) : r;
  },
  has(o, e) {
    return e === Qt || e === me || e === Xt || e === Be || e === we || e === "__proto__" ? !0 : (Yt() && it(St(o, we), e)(), e in o);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Yi,
  getOwnPropertyDescriptor: Xi
};
function se(o, e, t, n = !1) {
  if (!n && o[e] === t) return;
  const s = o[e], r = o.length;
  t === void 0 ? (delete o[e], o[we] && o[we][e] && s !== void 0 && o[we][e].$()) : (o[e] = t, o[we] && o[we][e] && s === void 0 && o[we][e].$());
  let i = St(o, Be), l;
  if ((l = it(i, e, s)) && l.$(() => t), Array.isArray(o) && o.length !== r) {
    for (let u = o.length; u < r; u++) (l = i[u]) && l.$();
    (l = it(i, "length", r)) && l.$(o.length);
  }
  (l = i[Mo]) && l.$();
}
function Oo(o, e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1) {
    const s = t[n];
    se(o, s, e[s]);
  }
}
function Ji(o, e) {
  if (typeof e == "function" && (e = e(o)), e = Ge(e), Array.isArray(e)) {
    if (o === e) return;
    let t = 0, n = e.length;
    for (; t < n; t++) {
      const s = e[t];
      o[t] !== s && se(o, t, s);
    }
    se(o, "length", n);
  } else Oo(o, e);
}
function et(o, e, t = []) {
  let n, s = o;
  if (e.length > 1) {
    n = e.shift();
    const i = typeof n, l = Array.isArray(o);
    if (Array.isArray(n)) {
      for (let u = 0; u < n.length; u++)
        et(o, [n[u]].concat(e), t);
      return;
    } else if (l && i === "function") {
      for (let u = 0; u < o.length; u++)
        n(o[u], u) && et(o, [u].concat(e), t);
      return;
    } else if (l && i === "object") {
      const {
        from: u = 0,
        to: d = o.length - 1,
        by: c = 1
      } = n;
      for (let a = u; a <= d; a += c)
        et(o, [a].concat(e), t);
      return;
    } else if (e.length > 1) {
      et(o[n], e, [n].concat(t));
      return;
    }
    s = o[n], t = [n].concat(t);
  }
  let r = e[0];
  typeof r == "function" && (r = r(s, t), r === s) || n === void 0 && r == null || (r = Ge(r), n === void 0 || Te(s) && Te(r) && !Array.isArray(r) ? Oo(s, r) : se(o, n, r));
}
function Qi(...[o, e]) {
  const t = Ge(o || {}), n = Array.isArray(t), s = Lo(t);
  function r(...i) {
    fi(() => {
      n && i.length === 1 ? Ji(t, i[0]) : et(t, i);
    });
  }
  return [s, r];
}
const en = Symbol("store-root");
function Ne(o, e, t, n, s) {
  const r = e[t];
  if (o === r) return;
  const i = Array.isArray(o);
  if (t !== en && (!Te(o) || !Te(r) || i !== Array.isArray(r) || s && o[s] !== r[s])) {
    se(e, t, o);
    return;
  }
  if (i) {
    if (o.length && r.length && (!n || s && o[0] && o[0][s] != null)) {
      let d, c, a, h, f, w, I, b;
      for (a = 0, h = Math.min(r.length, o.length); a < h && (r[a] === o[a] || s && r[a] && o[a] && r[a][s] === o[a][s]); a++)
        Ne(o[a], r, a, n, s);
      const v = new Array(o.length), p = /* @__PURE__ */ new Map();
      for (h = r.length - 1, f = o.length - 1; h >= a && f >= a && (r[h] === o[f] || s && r[h] && o[f] && r[h][s] === o[f][s]); h--, f--)
        v[f] = r[h];
      if (a > f || a > h) {
        for (c = a; c <= f; c++) se(r, c, o[c]);
        for (; c < o.length; c++)
          se(r, c, v[c]), Ne(o[c], r, c, n, s);
        r.length > o.length && se(r, "length", o.length);
        return;
      }
      for (I = new Array(f + 1), c = f; c >= a; c--)
        w = o[c], b = s && w ? w[s] : w, d = p.get(b), I[c] = d === void 0 ? -1 : d, p.set(b, c);
      for (d = a; d <= h; d++)
        w = r[d], b = s && w ? w[s] : w, c = p.get(b), c !== void 0 && c !== -1 && (v[c] = r[d], c = I[c], p.set(b, c));
      for (c = a; c < o.length; c++)
        c in v ? (se(r, c, v[c]), Ne(o[c], r, c, n, s)) : se(r, c, o[c]);
    } else
      for (let d = 0, c = o.length; d < c; d++)
        Ne(o[d], r, d, n, s);
    r.length > o.length && se(r, "length", o.length);
    return;
  }
  const l = Object.keys(o);
  for (let d = 0, c = l.length; d < c; d++)
    Ne(o[l[d]], r, l[d], n, s);
  const u = Object.keys(r);
  for (let d = 0, c = u.length; d < c; d++)
    o[u[d]] === void 0 && se(r, u[d], void 0);
}
function el(o, e = {}) {
  const {
    merge: t,
    key: n = "id"
  } = e, s = Ge(o);
  return (r) => {
    if (!Te(r) || !Te(s)) return s;
    const i = Ne(s, {
      [en]: r
    }, en, t, n);
    return i === void 0 ? r : i;
  };
}
function tl(o) {
  const e = bt(o), t = new Ki(e), [n, s] = Qi(t.getVirtualItems()), [r, i] = pe(t.getTotalSize()), l = {
    get(d, c) {
      switch (c) {
        case "getVirtualItems":
          return () => n;
        case "getTotalSize":
          return () => r();
        default:
          return Reflect.get(d, c);
      }
    }
  }, u = new Proxy(t, l);
  return u.setOptions(e), je(() => {
    const d = u._didMount();
    u._willUpdate(), Fe(d);
  }), di(() => {
    u.setOptions(bt(e, o, {
      onChange: (d, c) => {
        var a;
        d._willUpdate(), s(el(d.getVirtualItems(), {
          key: "index"
        })), i(d.getTotalSize()), (a = o.onChange) == null || a.call(o, d, c);
      }
    })), u.measure();
  }), u;
}
function Ao(o) {
  return tl(bt({
    observeElementRect: Vi,
    observeElementOffset: Gi,
    scrollToFn: Ui
  }, o));
}
var nl = /* @__PURE__ */ Z("<div><button type=button><i></i><span>");
const ol = `${ls} ir-icon ir-icon--check`;
function sl(o) {
  return (() => {
    var e = nl(), t = e.firstChild, n = t.firstChild, s = n.nextSibling;
    return e.style.setProperty("position", "absolute"), e.style.setProperty("width", "100%"), t.$$click = o.onClick, t.$$clickData = o.row, N(t, is), N(n, ol), j(s, () => o.text), U((r) => {
      var i = {
        [cs]: !0,
        [as]: o.isSelected
      }, l = o.row, u = o.value, d = `${o.top}px`, c = o.text;
      return r.e = Eo(e, i, r.e), l !== r.t && fe(e, "data-row", r.t = l), u !== r.a && fe(e, "data-value", r.a = u), d !== r.o && ((r.o = d) != null ? e.style.setProperty("top", d) : e.style.removeProperty("top")), c !== r.i && fe(t, "title", r.i = c), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), e;
  })();
}
Et(["click"]);
var rl = /* @__PURE__ */ Z("<div><div>");
const il = `${us} ${Wr.zIndex.popover} is-expanded`, ll = 26;
function al(o) {
  const {
    items: e,
    selectedItem: t
  } = o;
  let n;
  const s = Ao({
    count: o.items.length,
    getScrollElement: () => n,
    estimateSize: () => ll,
    overscan: 4
  }), r = o.refElement.offsetWidth, i = Math.max(r, o.breakWidth), l = Math.max(o.contentWidth, r);
  return je(() => {
    const u = fo(o.refElement, n, "bottom-start");
    o.ref?.({
      divElement: n
    }), t && s.scrollToIndex(e.indexOf(t), {
      align: "center"
    }), Fe(() => {
      u(), o.ref?.(null);
    });
  }), (() => {
    var u = rl(), d = u.firstChild, c = n;
    return typeof c == "function" ? xe(c, u) : n = u, N(u, il), `${l}px` != null ? u.style.setProperty("width", `${l}px`) : u.style.removeProperty("width"), `${i}px` != null ? u.style.setProperty("max-width", `${i}px`) : u.style.removeProperty("max-width"), N(d, ds), d.style.setProperty("position", "relative"), j(d, A(ln, {
      get each() {
        return s.getVirtualItems();
      },
      children: (a) => A(sl, {
        onClick: (h) => o.onItemClick?.(o.items[h]),
        get row() {
          return a.index;
        },
        get top() {
          return a.start;
        },
        get isSelected() {
          return o.selectedItem === o.items[a.index];
        },
        get text() {
          return o.items[a.index].text;
        },
        get value() {
          return o.items[a.index].value;
        }
      })
    })), U((a) => {
      var h = o.row, f = o.col, w = `${s.getTotalSize()}px`;
      return h !== a.e && fe(u, "data-row", a.e = h), f !== a.t && fe(u, "data-col", a.t = f), w !== a.a && ((a.a = w) != null ? d.style.setProperty("height", w) : d.style.removeProperty("height")), a;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), u;
  })();
}
const ct = { select: fs, selectInput: gs, selectInputNative: ps, selectInputIcon: ms }, Hn = /* @__PURE__ */ new WeakMap(), cl = 20, ul = 4, On = cl + ul, dl = 18;
class hl extends oe {
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
    customDisplayTextFunc: s,
    lazyItems: r,
    allowCustomText: i = !1,
    showErrorIfCustomText: l = !1,
    allowEdit: u = !1,
    mappingType: d = "text"
  }) {
    super(), this._allowClear = n ?? !1, this._mappingType = d, this._items = e ?? [], this._lazyItems = r ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = i, this._allowEdit = u, u && (this._allowCustomText = !0), s ? this._customDisplayTextFunc = s : this._customDisplayTextFunc = d === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = l, t && (this.onChange = t.bind(this));
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
    const s = t ?? "";
    return this._itemTextMap.get(s)?.text ?? s;
  }
  _getSelectedItemOrNull(e) {
    for (const t of this._items)
      if (t[this._mappingType] === e) return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: s,
      _allowEdit: r,
      _showErrorIfCustomText: i,
      _customDisplayTextFunc: l
    } = this, { element: u } = Ot({ tag: "div", className: Ct(hs, ct.select, ct.selectInput) }), { element: d } = Ot({ tag: "span", className: ct.selectInputNative }), { element: c } = Ot({ tag: "i", className: Ct(ct.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), u.setAttribute("data-has-px", ""), c.setAttribute("data-ignore-auto-size", "");
    const a = n.text === "" || n.text === null || n.text === void 0;
    r && u.classList.add("is-editable");
    let h = this._getSelectedItemOrNull(n.text);
    const f = h !== null;
    h ? (d.textContent = l(h.value, h.text, !1), n.value = h.value) : s ? (d.textContent = l(n.value, n.text, !0), n.value = n.text) : (d.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    s && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !a && !f && (u.dataset.error = "true");
    let w = () => {
    }, I = [];
    const b = go({
      eventElements: [u],
      clickOutsideFunc: () => v.hide(),
      getEventElements: () => I
    }), v = {
      show: () => {
        this._isExpanded = !0, p.create(), b.create(), this._beforeValue = n.value, this._beforeText = n.text, u.classList.add("is-expanded");
        const { breakWidth: x, contentWidth: C } = this._getCellWidthInfo(n);
        w = Io(
          () => al({
            ref: (g) => I = g ? [g.divElement] : [],
            row: e,
            col: t,
            contentWidth: C,
            breakWidth: x,
            selectedItem: h,
            items: this._items,
            refElement: u,
            onItemClick: (g) => {
              const { value: E, text: y } = g, m = new Ce(n.gridStore.commandContext, [e, t, { text: y, value: E }]);
              m.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, E, y), m.onExecute = () => this.onChange(e, t, E, y, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new ke(
                "Change select menu",
                m
              )), h = g, n.text = g[this._mappingType], n.value = E, d.textContent = l(E, y, !1), u.dataset.error && delete u.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, E, y, this._beforeValue, this._beforeText), v.hide();
            }
          }),
          Ve("popover")
        );
      },
      hide: () => {
        this._isExpanded = !1, u.classList.remove("is-expanded"), p.destroy(), b.destroy(), w();
      }
    }, p = sn(v), _ = () => {
      u.classList.contains("is-expanded") ? v.hide() : v.show();
    };
    return u.onclick = (x) => {
      r && x.target !== c || _();
    }, u.appendChild(d), u.appendChild(c), u;
  }
  onChange(e, t, n, s, r, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const s = Ie(e, t), r = this._itemTextMap.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !r), l = s.calculateWidth(i);
    return On + l + this.getHorizontalCellPadding(n);
  }
  _getDropdownWidth(e, t, n) {
    const s = Ie(e, t), r = this._items.reduce((i, l) => Math.max(i, s.calculateWidth(l.text)), 0);
    return On + r + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const s = Hn.get(this);
    if (s) return s;
    const r = this._getDropdownWidth(e, t, n);
    return Hn.set(this, r), r;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + dl;
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
const mu = (o) => {
  const e = new hl(o);
  return () => e;
}, Dt = { input: ws, inputNative: lo, inputSuffix: Kt }, fl = 28, $e = /* @__PURE__ */ new WeakMap();
class gl extends oe {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = J.t("datePicker.dateFormat"),
    minDate: n = wt().getStoreValue("datePicker.minDate"),
    maxDate: s = wt().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: r = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = s, this._allowedEmptyString = r, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n) {
  }
  getCellInnerWidth(e, t, n) {
    return Ie(e, t).calculateWidth(n.text || this._format) + fl + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("input"), i = document.createElement("button"), l = document.createElement("i"), {
      _minDate: u,
      _maxDate: d,
      _format: c,
      _allowedEmptyString: a
    } = this;
    if (r.readOnly = !0, r.maxLength = c.length, s.setAttribute("data-has-px", ""), s.classList.add(Dt.input, Cs), r.classList.add(Dt.inputNative, "tnum-adj"), i.classList.add(Dt.inputSuffix), l.classList.add("ir-icon", "ir-icon--calendar"), r.type = "text", r.placeholder = c, n.text !== "") {
      const f = c.replace(/-/g, "");
      let w = be(n.text, c, !0);
      w.isValid() || (w = be(n.text, f, !0), n.text = w.format(c)), w.isValid() || (n.text = $e.get(n)), (w.isBefore(u) || w.isAfter(d)) && (n.text = $e.get(n));
    }
    !a && (n.text === "" || n.text === void 0) && (n.text = $e.has(n) ? $e.get(n) : be().format(c)), r.value = n.text || "", $e.set(n, n.text ?? ""), i.appendChild(l), s.appendChild(r), s.appendChild(i);
    const h = Lr({
      uuid: Jr(),
      refElement: s,
      minDate: u,
      maxDate: d,
      onClick: (f) => {
        const w = n.text, I = be(f).format(c), b = new Ce(n.gridStore.commandContext, [e, t, { text: I }]);
        b.onUndo = () => {
          this.onDateClick(e, t, w ?? "");
        }, b.onExecute = () => {
          this.onDateClick(e, t, I);
        }, n.gridStore.commandManager.pushCommandBlock(new ke("Change datePicker", b)), r.value = I, n.text = I, $e.set(n, I), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, I), h.hide();
      }
    });
    return i.onclick = () => {
      if (!h.visible) {
        const f = be(n.text, c, !0);
        f.isValid() ? h.update(f.toDate(), f.toDate()) : h.update(/* @__PURE__ */ new Date(), null), h.show();
      }
    }, s;
  }
  get renderType() {
    return "datePicker";
  }
}
const pu = (o) => {
  const e = new gl(o);
  return () => e;
}, ut = {
  progress: Rs,
  progressVariants: xs
}, ml = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, pl = 100, wl = 100;
class Cl extends oe {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: s = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = s;
  }
  render(e, t, n) {
    const {
      _min: s,
      _max: r,
      _afterDecimalLen: i,
      _defaultIntent: l
    } = this, u = document.createElement("div"), d = document.createElement("div");
    u.setAttribute("data-has-px", ""), u.className = _s, d.className = ut.progress;
    const c = n.intent ?? l;
    c && d.classList.add(`${ut.progress}--${c}`);
    const h = (G(parseFloat(n.text || "0"), s, r) - s) / (r - s) * pl;
    return he(d, {
      [ut.progressVariants.progressPercent]: `${h}%`,
      [ut.progressVariants.progressText]: `'${h.toFixed(i)}%'`
    }), u.appendChild(d), u;
  }
  getCellInnerWidth(e, t, n) {
    return wl + this.getHorizontalCellPadding(n);
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
const wu = (o = ml) => {
  const e = new Cl(o);
  return () => e;
}, _l = 20, Rl = 4, xl = 24, yl = 24, bl = 29, An = {
  primary: Is,
  secondary: ks,
  tertiary: vs,
  transparent: Ss,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Sl extends oe {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = bl : e.outlineStyle ? this._extraWidth = yl : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: s,
      outlineStyle: r,
      defaultColor: i,
      defaultIcon: l,
      defaultLabel: u
    } = this.args, d = document.createElement("div"), c = document.createElement("button");
    d.className = ys, c.classList.add(bs, "button"), c.dataset.ignoreAutoSize = "";
    const a = n.intent ?? i;
    a && c.classList.add(An[a]), r ? (d.setAttribute("data-has-px", ""), d.classList.add(Es)) : s && d.classList.add(Ts), !this.args.iconDividerStyle && n.horizontalAlign && c.classList.add(An[n.horizontalAlign]), c.onclick = (w) => this.onClick(w, e, t);
    const h = n.icon ?? l, f = s ? n.text ?? "" : n.label ?? u ?? "";
    if (h) {
      const w = document.createElement("i");
      w.className = `${Ms} ir-icon ${ot(h)}`, c.appendChild(w);
    }
    if (f) {
      const w = Oe("span");
      if (w.innerText = f, s) {
        const I = document.createElement("div");
        w.classList.add("text--multi-ellipsis"), I.setAttribute("data-has-px", ""), n.lineClamp === void 0 ? w.style.removeProperty("-webkit-line-clamp") : w.style.setProperty("-webkit-line-clamp", n.lineClamp), I.appendChild(w), d.insertAdjacentElement("afterbegin", I);
      } else
        w.classList.add("text--ellipsis"), c.appendChild(w);
    }
    return d.appendChild(c), d;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? _l + Rl : 0;
  }
  getCellInnerWidth(e, t, n) {
    const s = Ie(e, t);
    return this.getHorizontalCellPadding(n) + s.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    if (this.args.iconDividerStyle) {
      const n = e.querySelector(".text--multi-ellipsis");
      if (n)
        return this.getVerticalCellPadding(t) + n.offsetHeight;
    }
    return xl;
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
const Cu = (o) => {
  const e = new Sl(o ?? {});
  return () => e;
}, dt = { radio: Hs, radioWrapper: Os, radioInput: As, radioText: Fs }, vl = 16, Fo = 6, kl = Fo * 2;
class zo extends oe {
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
    const s = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (s.setAttribute("data-has-px", ""), s.className = `${Ls} ${dt.radio}`, r.className = dt.radioWrapper, i.type = "radio", i.className = dt.radioInput, r.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = dt.radioText, l.innerText = n.label, r.appendChild(l);
    }
    return s.appendChild(r), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), r.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new Ce(l, [e, t, { text: "true" }]), d = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        d && (l.setCell(d.row, d.col, { text: "true" }), this.onRadioClick(d.row, d.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new ke("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, s;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const s = Ie(e, t), r = n.label ? Fo + s.calculateWidth(n.label) : 0;
    return vl + kl + r + this.getHorizontalCellPadding(n);
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
const _u = ({ onRadioClick: o }) => {
  const e = new zo({ onRadioClick: o });
  return () => e;
};
function Do(o) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = tn, o.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ot(o.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (o.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ot(o.icon)}`, o.iconColor && t.style.setProperty("--ir-icon-foreground-color", o.iconColor), e.appendChild(t);
  }
  if (o.text) {
    const t = document.createElement("span");
    t.innerText = o.text, e.appendChild(t);
  }
  return e;
}
function Il(o, e, t, n) {
  const s = document.createElement("div");
  if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = tn, t.icon) {
    const r = document.createElement("button"), i = document.createElement("i");
    r.setAttribute("type", "button"), r.classList.add("icon-button", zs), r.onclick = (l) => {
      n && n(l, o, e);
    }, i.className = `ir-icon ${ot(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), r.appendChild(i), s.appendChild(r);
  }
  if (t.text) {
    const r = document.createElement("span");
    r.innerText = t.text, s.appendChild(r);
  }
  return s;
}
class cn extends oe {
  constructor(e = {}) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const s = Do(n), {
      ellipsis: r = !0,
      whiteSpace: i
    } = this._args;
    return r && s.classList.add(ao), i && (s.style.whiteSpace = i), s;
  }
  get renderType() {
    return "default";
  }
}
class El extends oe {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return Il(e, t, n, (s, r, i) => this.onClick(s, r, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Tl extends oe {
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
    const s = document.createElement("div"), r = document.createElement("span"), i = e - this._fixedRowCount;
    s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = tn;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return r.innerText = l, n.text = l, s.appendChild(r), s;
  }
}
const Ru = () => {
  const o = new cn();
  return () => o;
};
function xu({ onClick: o }) {
  const e = new El({ onClick: o });
  return () => e;
}
function yu(o, ...e) {
  const t = new Tl(o, ...e);
  return () => t;
}
const Fn = /* @__PURE__ */ new WeakMap();
class Po extends cn {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function bu(o) {
  const e = Fn.get(o);
  if (e)
    return e;
  const t = new Po(o);
  return Fn.set(o, t), t;
}
var Ml = /* @__PURE__ */ Z("<button type=button><span>"), Ll = /* @__PURE__ */ Z("<i>");
function Hl(o) {
  const {
    label: e,
    icon: t,
    onClick: n
  } = o;
  return (() => {
    var s = Ml(), r = s.firstChild;
    return Tt(s, "click", n, !0), N(s, Ds), j(s, A(Ee, {
      when: t,
      children: (i) => (() => {
        var l = Ll();
        return U(() => N(l, `ir-icon ir-icon-text ${i()}`)), l;
      })()
    }), r), j(r, e), s;
  })();
}
Et(["click"]);
const Wo = gi({}), Ol = Wo.Provider;
function qe() {
  return mi(Wo);
}
var Al = /* @__PURE__ */ Z("<div><span>"), Fl = /* @__PURE__ */ Z("<label><input type=checkbox><span>"), zl = /* @__PURE__ */ Z("<i>"), zn = /* @__PURE__ */ Z("<div>"), Dl = /* @__PURE__ */ Z("<div><div>");
const Pl = `${nt.display.flex} ${nt.alignCenter}`, Wl = `${io} ${nt.truncate} ${nt.flex110}`;
function Dn(o) {
  const e = o.filter((n) => n.checked).length, t = o.length === e;
  return {
    subChecked: e > 0 && !t,
    checkedAll: t
  };
}
function $l() {
  return (() => {
    var o = Al(), e = o.firstChild;
    return N(o, Pl), `${Le}px` != null ? o.style.setProperty("height", `${Le}px`) : o.style.removeProperty("height"), j(e, () => J.t("rowFilter.list.no-result")), U(() => N(e, nt.truncate)), o;
  })();
}
function Pn(o) {
  return (() => {
    var e = Fl(), t = e.firstChild, n = t.nextSibling;
    return N(e, $s), N(t, ro), N(n, Wl), j(n, A(Ee, {
      get fallback() {
        return o.text;
      },
      get when() {
        return o.icon;
      },
      children: (s) => (() => {
        var r = zl();
        return U(() => N(r, `ir-icon ir-icon-text ${s()}`)), r;
      })()
    })), U(() => fe(t, "data-state", o.subChecked ? "sub-checked" : "")), U(() => t.checked = o.checked), e;
  })();
}
function $o(o) {
  const {
    makeCheckAll: e
  } = o;
  let t, n;
  const s = Dn(o.rowItems), [r, i] = pe(s.subChecked), [l, u] = pe(s.checkedAll), d = ie(() => Ao({
    getScrollElement: () => t,
    estimateSize: () => Le,
    count: o.rowItems.length,
    overscan: 4
  }));
  return o.ref?.({
    checkAll(f) {
      u(f), i(!1);
    }
  }), [A(Ee, {
    get when() {
      return o.rowItems.length === 0;
    },
    get children() {
      return A($l, {});
    }
  }), (() => {
    var f = Dl(), w = f.firstChild, I = t;
    return typeof I == "function" ? xe(I, f) : t = f, f.style.setProperty("overflow", "auto"), f.style.setProperty("flex", "1 1 auto"), j(f, A(Ee, {
      when: e,
      get children() {
        var b = zn();
        return b.addEventListener("change", a), `${Le}px` != null ? b.style.setProperty("height", `${Le}px`) : b.style.removeProperty("height"), j(b, A(Pn, {
          get text() {
            return `(${J.t("rowFilter.list.select-all")})`;
          },
          get checked() {
            return l();
          },
          get subChecked() {
            return r();
          }
        })), b;
      }
    }), w), N(w, Ps), w.style.setProperty("position", "relative"), j(w, A(ln, {
      get each() {
        return d().getVirtualItems();
      },
      children: (b) => (() => {
        var v = zn();
        v.addEventListener("change", (_) => c(b.index, _));
        var p = n;
        return typeof p == "function" ? xe(p, v) : n = v, v.style.setProperty("position", "absolute"), `${Le}px` != null ? v.style.setProperty("height", `${Le}px`) : v.style.removeProperty("height"), v.style.setProperty("width", "100%"), j(v, A(Pn, {
          get text() {
            return o.rowItems[b.index].text || `(${J.t("rowFilter.list.blanks")})`;
          },
          get checked() {
            return o.rowItems[b.index].checked;
          },
          get icon() {
            return o.rowItems[b.index].icon;
          }
        })), U((_) => (_ = `${b.start}px`) != null ? v.style.setProperty("top", _) : v.style.removeProperty("top")), v;
      })()
    })), U((b) => {
      var v = o.rowItems.length === 0 ? "none" : "block", p = `calc(-1 * ${Ws.sm})`, _ = `${d().getTotalSize()}px`;
      return v !== b.e && ((b.e = v) != null ? f.style.setProperty("display", v) : f.style.removeProperty("display")), p !== b.t && ((b.t = p) != null ? f.style.setProperty("margin-right", p) : f.style.removeProperty("margin-right")), _ !== b.a && ((b.a = _) != null ? w.style.setProperty("height", _) : w.style.removeProperty("height")), b;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), f;
  })()];
  function c(f, w) {
    if (!(w.target instanceof HTMLInputElement)) return;
    const I = o.rowItems[f], b = w.target.checked;
    I.checked = b, h(), o.onChangeCheck?.(I, b);
  }
  function a(f) {
    if (!(f.target instanceof HTMLInputElement)) return;
    const w = f.target.checked;
    o.rowItems.forEach((b) => b.checked = w), h(), o.onChangeCheck?.(null, w);
  }
  function h() {
    const f = o.rowItems, {
      checkedAll: w,
      subChecked: I
    } = Dn(f);
    i(I), u(w);
  }
}
function Nl() {
  const {
    pluginAPI: o,
    columnId: e,
    operandsSignal: t,
    updateOperandsHandler: n
  } = qe(), s = l(), [r, i] = pe(s);
  return A($o, {
    makeCheckAll: !0,
    get rowItems() {
      return r();
    },
    onChangeCheck: u
  });
  function l() {
    const d = o.getFilterOptionByCol(e) !== null, [c] = t, a = new Set(c().map((h) => h === "true"));
    return [{
      key: "true",
      text: "",
      checked: d && a.has(!0),
      icon: "ir-icon--check-all-rectangle"
    }, {
      key: "false",
      text: "",
      checked: d && a.has(!1),
      icon: "ir-icon--uncheck-all-rectangle"
    }];
  }
  function u(d, c) {
    d === null && i(s.map((a) => (a.checked = c, a))), n(s.filter((a) => a.checked).map((a) => a.key));
  }
}
var Bl = /* @__PURE__ */ Z("<div>");
function Pt(o) {
  const {
    defaultValue: e = "",
    format: t,
    onChange: n,
    placeholder: s
  } = o, {
    addOutSideElements: r
  } = qe();
  let i;
  return je(() => {
    const l = new Hr({
      div: i,
      defaultDate: e,
      format: t,
      onChange: n,
      placeholder: s
    }), u = l.input, d = l.button;
    r(Or().datePicker), u.oninput = () => n(l.textValue), d.onkeydown = (a) => {
      a.key === "Enter" && l.hide();
    }, u.addEventListener("blur", c, {
      capture: !0
    }), o.inputRef?.(u);
    function c(a) {
      a.relatedTarget instanceof HTMLElement && a.relatedTarget.closest(`.${co}`) && a.relatedTarget.textContent === J.t("rowFilter.ok") && a.stopPropagation();
    }
    Fe(() => {
      u.removeEventListener("blur", c), l.destroy();
    });
  }), (() => {
    var l = Bl(), u = i;
    return typeof u == "function" ? xe(u, l) : i = l, l;
  })();
}
var Vl = /* @__PURE__ */ Z("<select>");
function un(o) {
  const {
    defaultKey: e,
    options: t,
    onChange: n
  } = o, {
    addOutSideElements: s
  } = qe();
  let r;
  return je(() => {
    const i = new Ar({
      contextElement: r
    });
    t.forEach(({
      key: l,
      text: u
    }) => i.addItem(l, J.t(u))), i.onChange = (l, u) => n(u.value), i.value = e, s(i.divDropDown), Fe(() => i.destroy());
  }), (() => {
    var i = Vl(), l = r;
    return typeof l == "function" ? xe(l, i) : r = i, i;
  })();
}
const vt = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "less-than", text: "rowFilter.op.less" },
  { key: "less-than-or-equal", text: "rowFilter.op.less-eq" },
  { key: "greater-than", text: "rowFilter.op.greater" },
  { key: "greater-than-or-equal", text: "rowFilter.op.greater-eq" },
  { key: "in-range", text: "rowFilter.number.select.between" },
  { key: "blank", text: "rowFilter.number.select.blank" }
], Gl = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "contains", text: "rowFilter.op.like" },
  { key: "not-contains", text: "rowFilter.op.not-like" },
  { key: "starts-with", text: "rowFilter.op.starts-with" },
  { key: "ends-with", text: "rowFilter.op.ends-with" }
];
function dn(o = !0) {
  let e = null;
  return {
    focus: () => e?.focus({ preventScroll: !0 }),
    setFocusRef(n) {
      e = n, o && n.focus({ preventScroll: !0 });
    }
  };
}
function jl() {
  const {
    pluginAPI: o,
    columnId: e,
    operatorSignal: t,
    operandsSignal: n,
    updateOperandHandler: s
  } = qe(), {
    format: r = J.t("datePicker.dateFormat")
  } = o.getColumnMetaInfo(e), [i, l] = t, [u, d] = n, c = i() ?? vt[0].key, a = dn();
  return [A(un, {
    defaultKey: c,
    options: vt,
    onChange: f
  }), A(an, {
    get children() {
      return [A(Se, {
        get when() {
          return i() === "in-range";
        },
        get children() {
          return [A(Pt, {
            get inputRef() {
              return a.setFocusRef;
            },
            get defaultValue() {
              return u()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.between.from");
            },
            get onChange() {
              return s(0);
            }
          }), A(Pt, {
            get defaultValue() {
              return u()[1] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.between.to");
            },
            get onChange() {
              return s(1);
            }
          })];
        }
      }), A(Se, {
        get when() {
          return i() !== "blank";
        },
        get children() {
          return A(Pt, {
            get inputRef() {
              return a.setFocusRef;
            },
            get defaultValue() {
              return u()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.input.placeholder");
            },
            get onChange() {
              return s(0);
            }
          });
        }
      })];
    }
  })];
  function h(w) {
    return `${J.t(w)} (${r})`;
  }
  function f(w) {
    w === "equals" && d(u().slice(0, 1)), l(w), a.focus();
  }
}
var Ul = /* @__PURE__ */ Z("<button type=button><i>"), Kl = /* @__PURE__ */ Z("<button aria-label=search type=submit><i>"), ql = /* @__PURE__ */ Z("<div><input>");
function mt(o) {
  const e = () => o.class, t = () => o.suffixButtonIcon && o.matchCaseToggle ? "padding-right: 44px" : "";
  return (() => {
    var s = ql(), r = s.firstChild;
    return Fi(r, bt(o, {
      get class() {
        return Ct(lo, e());
      },
      get style() {
        return t();
      }
    }), !1), j(s, A(Ee, {
      get when() {
        return o.matchCaseToggle;
      },
      get children() {
        var i = Ul(), l = i.firstChild;
        return Tt(i, "click", n), N(i, Kt), i.style.setProperty("right", "24px"), U(() => N(l, Ct("ir-icon ir-icon--lowercase", o.matchCase && "ir-icon--rounded"))), i;
      }
    }), null), j(s, A(Ee, {
      get when() {
        return o.suffixButtonIcon;
      },
      get children() {
        var i = Kl(), l = i.firstChild;
        return N(i, Kt), U(() => N(l, `ir-icon ${o.suffixButtonIcon}`)), i;
      }
    }), null), U(() => N(s, o.wrapperClass)), s;
  })();
  function n() {
    o.onToggleMatchCase?.(!o.matchCase);
  }
}
function Xl() {
  const {
    operatorSignal: o,
    operandsSignal: e,
    onInputUpdateHandler: t
  } = qe(), n = dn(), [s, r] = o, [i, l] = e, u = s() ?? vt[0].key;
  return [A(un, {
    defaultKey: u,
    options: vt,
    onChange: d
  }), A(an, {
    get children() {
      return [A(Se, {
        get when() {
          return s() === "in-range";
        },
        get children() {
          return [A(mt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return J.t("rowFilter.number.between.from");
            },
            get onInput() {
              return t(0);
            }
          }), A(mt, {
            get value() {
              return i()[1] ?? "";
            },
            get placeholder() {
              return J.t("rowFilter.number.between.to");
            },
            get onInput() {
              return t(1);
            }
          })];
        }
      }), A(Se, {
        get when() {
          return s() !== "blank";
        },
        get children() {
          return A(mt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return J.t("rowFilter.number.input.placeholder");
            },
            get onInput() {
              return t(0);
            }
          });
        }
      })];
    }
  })];
  function d(c) {
    c === "equals" && l(i().slice(0, 1)), r(c), n.focus();
  }
}
const Yl = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Wn(o) {
  return o === "" ? !0 : Yl.test(o);
}
function $n(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function hn(o, e) {
  if (o === e) return 0;
  const t = Wn(o), n = Wn(e);
  return t && n ? $n(o) < $n(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const Zl = (o) => (e, t) => hn(e.getCell(o).text, t.getCell(o).text), Su = ({
  grid: o
}) => ({
  sortColumn(e, t, n, s) {
    o.sort(Zl(e), t, n, s);
  }
});
var Jl = /* @__PURE__ */ Z("<form>");
function Ql() {
  const o = dn(), {
    pluginAPI: e,
    columnId: t,
    operatorSignal: n,
    operandsSignal: s,
    stringFilterOptions: r,
    ignoreCase: i
  } = qe(), [l, u] = n, [d, c] = s, a = l();
  let h, f = [], w, I = "";
  const b = e.getFilterOptionByCol(t), v = new Set(s[0]()), p = e.getTextListForCol(t).sort((R, S) => hn(R.text, S.text)).map(({
    text: R
  }) => ({
    text: R,
    key: R,
    // filterOptions이 있는 경우, 체크된 항목을 표시
    checked: b ? v.has(R) : !1
  })), [_, x] = pe(p.filter(E()));
  return [A(un, {
    defaultKey: a,
    options: Gl,
    onChange: y
  }), (() => {
    var R = Jl();
    R.addEventListener("submit", g);
    var S = h;
    return typeof S == "function" ? xe(S, R) : h = R, R.style.setProperty("display", "contents"), j(R, A(mt, {
      ref(M) {
        var k = o.setFocusRef;
        typeof k == "function" ? k(M) : o.setFocusRef = M;
      },
      name: "search-text",
      autocomplete: "off",
      wrapperClass: Ns,
      get suffixButtonIcon() {
        return l() === "equals" ? "ir-icon--search" : void 0;
      },
      get placeholder() {
        return J.t("rowFilter.string.input.placeholder");
      },
      "on:input": C
    })), R;
  })(), A(Ee, {
    get when() {
      return l() === "equals";
    },
    get children() {
      return A($o, {
        ref: (R) => w = R,
        makeCheckAll: !0,
        get rowItems() {
          return _();
        },
        onChangeCheck: m
      });
    }
  })];
  function C() {
    l() !== "equals" && c([h["search-text"].value]);
  }
  function g(R) {
    R.preventDefault();
    const S = h["search-text"].value, M = l() !== "equals", T = M || S === I;
    if (M && c([S]), T) {
      if (l() === "equals" && f.length === 0) return;
      h.parentElement?.closest("form")?.requestSubmit();
      return;
    }
    I = S, f = p.filter(E()), I === "" ? (x(f.map((L) => (L.checked = !1, L))), c([]), w.checkAll(!1)) : (x(f.map((L) => (L.checked = !0, L))), c([I, ...f.map((L) => L.text)]), w.checkAll(!0));
  }
  function E() {
    if (I === "") return () => !0;
    const R = r === "equals" ? new RegExp(`^${I}$`, i ? "i" : "") : new RegExp(I, i ? "i" : "");
    return (S) => R.test(S.text);
  }
  function y(R) {
    u(R), o.focus();
  }
  function m(R, S) {
    R === null && x(_().map((M) => M)), c(_().filter((M) => M.checked).map((M) => M.text));
  }
}
var ea = /* @__PURE__ */ Z("<div>");
function ta(o) {
  let e;
  const t = rn(() => o.children);
  return je(() => {
    const n = fo(o.refElement, e, o.placement, o.offset);
    Fe(() => n());
  }), (() => {
    var n = ea(), s = e;
    return typeof s == "function" ? xe(s, n) : e = n, n.style.setProperty("position", "absolute"), j(n, t), n;
  })();
}
var na = /* @__PURE__ */ Z("<div>"), oa = /* @__PURE__ */ Z('<form><div></div><div><button class=button type=button></button><button type=submit class="button button--primary">');
const Nn = [{
  key: "ASC",
  i18nKey: "rowFilter.sort.ascending",
  icon: "ir-icon--sort-ascending"
}, {
  key: "DESC",
  i18nKey: "rowFilter.sort.descending",
  icon: "ir-icon--sort-descending"
}], sa = [{
  key: "CHECK-ALL",
  i18nKey: "rowFilter.check.check-all",
  icon: "ir-icon--check-all-rectangle"
}, {
  key: "UNCHECK-ALL",
  i18nKey: "rowFilter.check.uncheck-all",
  icon: "ir-icon--uncheck-all-rectangle"
}], ra = {
  key: "DELETE",
  i18nKey: "rowFilter.sort.clear",
  icon: "ir-icon--delete"
};
function* ia(o) {
  const {
    visibleSortButton: e,
    sortOrder: t,
    pluginAPI: n,
    visibleCheckAllButton: s,
    columnId: r
  } = o, i = n.getColumnMetaInfo(r);
  yield* l(), yield* u();
  function* l() {
    if (e) {
      if (!t) {
        yield* Nn;
        return;
      }
      yield ra, yield Nn[t === "ASC" ? 1 : 0];
    }
  }
  function* u() {
    s && i.textType === "checked" && (yield* sa);
  }
}
function la(o, e) {
  const {
    visibleSortButton: t,
    pluginAPI: n,
    columnId: s
  } = e, r = n.getColumnMetaInfo(s);
  t && he(o, {
    [Ht.maxHeight]: "240px"
  }), r.textType === "date" && he(o, {
    [Ht.minWidth]: "200px"
  }), he(o, {
    [Ht.maxWidth]: "200px"
  });
}
function aa(o) {
  const {
    pluginAPI: e,
    refElement: t,
    rowId: n,
    columnId: s,
    onClose: r,
    onSubmit: i,
    onClear: l,
    onDropdownButtonClick: u,
    stringEqualsFilterOption: d = "contains",
    ignoreCase: c = !1
  } = o, a = [...ia(o)], h = e.getColumnMetaInfo(s), f = e.getFilterOptionByCol(s), w = [];
  let I;
  const b = pe(f?.operator ?? "equals"), v = pe(f?.operand ?? []), [p] = b, [_, x] = v;
  return je(() => {
    const m = sn({
      hide: r
    }), R = go({
      eventElements: [I, t],
      getEventElements: () => w,
      clickOutsideFunc: r
    });
    R.create(), m.create(), la(I, o), Fe(() => {
      m.destroy(), R.destroy();
    });
  }), A(Ol, {
    value: {
      columnId: s,
      pluginAPI: e,
      operatorSignal: b,
      operandsSignal: v,
      updateOperandHandler: g,
      updateOperandsHandler: (m) => v[1](m),
      addOutSideElements: (m) => w.push(m),
      onInputUpdateHandler: (m) => (R) => g(m)(R.currentTarget.value),
      get stringFilterOptions() {
        return d;
      },
      get ignoreCase() {
        return c;
      }
    },
    get children() {
      var m = oa(), R = m.firstChild, S = R.nextSibling, M = S.firstChild, k = M.nextSibling, T = I;
      return typeof T == "function" ? xe(T, m) : I = m, Tt(m, "submit", C), N(m, Bs), j(m, A(Ee, {
        get when() {
          return a.length > 0;
        },
        get children() {
          var L = na();
          return N(L, Vs), j(L, A(ln, {
            each: a,
            children: (H) => A(Hl, {
              get label() {
                return J.t(H.i18nKey);
              },
              get icon() {
                return H.icon;
              },
              onClick: () => y(H)
            })
          })), L;
        }
      }), R), N(R, Gs), j(R, A(an, {
        get fallback() {
          return `unknown textType '${h.textType}'`;
        },
        get children() {
          return [A(Se, {
            get when() {
              return h.textType === "date";
            },
            get children() {
              return A(jl, {});
            }
          }), A(Se, {
            get when() {
              return h.textType === "number";
            },
            get children() {
              return A(Xl, {});
            }
          }), A(Se, {
            get when() {
              return h.textType === "checked";
            },
            get children() {
              return A(Nl, {});
            }
          }), A(Se, {
            get when() {
              return h.textType === "string";
            },
            get children() {
              return A(Ql, {});
            }
          })];
        }
      })), N(S, co), M.$$click = E, j(M, () => J.t("rowFilter.clear")), j(k, () => J.t("rowFilter.ok")), U(() => fe(m, "id", e.dropdownId)), m;
    }
  });
  function C(m) {
    m.preventDefault();
    const R = _(), S = p();
    R.length > 0 && (e.setColFilter({
      operator: S,
      operand: R,
      column: s
    }), i()), r();
  }
  function g(m) {
    return (R) => {
      const S = _();
      S[m] = R, x([...S]);
    };
  }
  function E() {
    e.getFilterOptionByCol(s) && e.removeColFilter(s), l(), r();
  }
  function y(m) {
    const {
      key: R
    } = m;
    switch (R) {
      case "DELETE":
        e.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        e.setSortOrder(n, s, R);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        e.setCheckAll(s, R === "CHECK-ALL");
        break;
    }
    u?.(R), r();
  }
}
function ca(o) {
  return A(ta, {
    get refElement() {
      return o.refElement;
    },
    placement: "bottom-start",
    get children() {
      return A(aa, o);
    }
  });
}
Et(["click"]);
const Wt = 20;
class vu extends oe {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const {
      plugin: s,
      onDropdownButtonClick: r,
      visibleSortButton: i = !0,
      visibleCheckAllButton: l = !0,
      stringEqualsFilterOption: u = "contains",
      ignoreCase: d = !1,
      enableClickSorting: c = !0
    } = this._args, a = document.createElement("div"), h = s.pluginAPI;
    a.className = js, a.setAttribute("data-has-px", "");
    const f = Do(n);
    return f.removeAttribute("data-has-px"), f.removeAttribute("data-has-py"), f.classList.add(ao, Us), a.append(f), a.onclick = (b) => {
      c && (!h.columnSortManager.enabledColumnClick && !n.sortOrder || b.target instanceof HTMLElement && (b.target.closest(`.${pn}`) || h.toggleSortOrder(e, t)));
    }, h.getColumnMetaInfo(t).enabled !== !1 && a.appendChild(I()), a;
    function I() {
      const b = nn("ir-icon--filter", pn);
      b.style.setProperty("--ir-icon-badge-color", Ks.info.active), _();
      let v = null;
      return b.onclick = () => {
        if (v) return p();
        v = Io(
          () => ca({
            pluginAPI: h,
            visibleSortButton: i,
            visibleCheckAllButton: l,
            onDropdownButtonClick: r,
            refElement: b,
            rowId: e,
            columnId: t,
            sortOrder: n.sortOrder,
            onClose: p,
            onSubmit: _,
            onClear: _,
            stringEqualsFilterOption: u,
            ignoreCase: d
          }),
          Ve("popover")
        );
      }, b;
      function p() {
        v?.(), v = null;
      }
      function _() {
        const x = !!h.getFilterOptionByCol(t);
        b.classList.toggle("ir-icon-badge--right", x);
      }
    }
  }
  getCellInnerWidth(e, t, n) {
    const s = Ie(e, t);
    return this.getHorizontalCellPadding(n) + s.calculateWidth(n.text ?? "") + (n.sortOrder ? Wt : 0) + (n.icon ? Wt : 0) + Wt;
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
function ua(o, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: s } = e;
  return {
    getPastingRange: l,
    beforePastingList: u,
    pasteTask: d
  };
  function r(c, a) {
    const h = o.getRowCount();
    let f = 0, w = c;
    for (; w < h; ) {
      if (o.isFilteredRow(w) || f++, f === a) return w;
      ++w;
    }
    return w - 1 + (a - f);
  }
  function i(c) {
    return c.top === c.bottom && c.left === c.right;
  }
  function l(c, a) {
    if (a.length === 0) throw new Error("No pasting data.");
    const h = { ...c }, f = a.length, w = a[0].length, I = i(c) ? r(c.top, f) + 1 : h.top + f, b = h.left + w;
    for (let v = c.bottom + 1; v < I; ++v)
      (o.hasRow(v) || o.onAutoInsertRow(v)) && (h.bottom = v);
    for (let v = c.right + 1; v < b; ++v)
      (o.hasColumn(v) || o.onAutoInsertColumn(v)) && (h.right = v);
    return h;
  }
  function u(c, a) {
    if (a.length === 0) throw new Error("No pasting data.");
    const h = [], f = a.length, w = a[0].length, I = c.bottom - c.top, b = c.right - c.left;
    let v = 0;
    for (let C = 0; C <= I; ++C) {
      const g = C + c.top;
      if (p(g), !!o.hasRow(g)) {
        if (s && o.isFilteredRow(g)) {
          ++v;
          continue;
        }
        for (let E = 0; E <= b; ++E) {
          const y = E + c.left;
          if (_(y), !o.hasColumn(y)) break;
          const m = o.cell(g, y), R = x(C - v, E), S = o.onCheckPasteCell(m, R.text);
          R.cellVisible && S && h.push({
            cell: m,
            cellMetaInfo: {
              text: R.text,
              cellVisible: R.cellVisible,
              rowSpan: t ? R.rowSpan : 1,
              colSpan: n ? R.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof S == "object" ? S : void 0
          });
        }
      }
    }
    return h;
    function p(C) {
      !o.hasRow(C) && o.onAutoInsertRow(C) && (o.addRow(), o.onAutoInsertedRow(C));
    }
    function _(C) {
      !o.hasColumn(C) && o.onAutoInsertColumn(C) && (o.addColumn(), o.onAutoInsertedColumn(C));
    }
    function x(C, g) {
      const [E, y] = [C % f, g % w];
      return a[E][y];
    }
  }
  function d(c) {
    for (const { cell: a, cellMetaInfo: h, pasteOption: f } of c) {
      const { rowSpan: w, colSpan: I, cellVisible: b } = h;
      if (!b) continue;
      const { row: v, col: p } = a;
      if (f?.ignoreRowSpan !== !0 && w > 1 || f?.ignoreColSpan !== !0 && I > 1) {
        const x = { top: v, left: p, bottom: v + w - 1, right: p + I - 1 };
        o.mergeCells(x.top, x.left, x.bottom, x.right);
      }
      f?.ignoreText || o.setCell(v, p, { text: h.text }), o.onClipboardAfterPasteCell(a);
    }
  }
}
function da(o) {
  return JSON.stringify(o);
}
function ha(o) {
  return JSON.parse(o);
}
function fa(o) {
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
function ga(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((s) => s.cellVisible).forEach((s) => {
      const r = document.createElement("td");
      r.setAttribute("rowSpan", `${s.rowSpan}`), r.setAttribute("colSpan", `${s.colSpan}`), r.append(...fa(s.text)), n.append(r);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function ma(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const s = Array(n.length).fill(null).map(() => []);
  let r = 0;
  for (const u of n) {
    const d = u.querySelectorAll("td");
    let c = i(0);
    for (const a of d)
      (a.rowSpan > 1 || a.colSpan > 1) && l(r, c, a.rowSpan, a.colSpan), s[r][c] = {
        text: pa(a),
        rowSpan: a.rowSpan,
        colSpan: a.colSpan,
        cellVisible: !0,
        isFormatted: a.hasAttribute("class")
      }, c = i(c);
    ++r;
  }
  return s;
  function i(u) {
    let d = u;
    for (; s[r][d]; )
      ++d;
    return d;
  }
  function l(u, d, c, a) {
    for (let h = u; h < u + c; ++h)
      for (let f = d; f < d + a; ++f)
        s[h][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function pa(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return wa(t);
}
function wa(o) {
  const e = [];
  let t = !1;
  for (const n of o) {
    if (n === `

`) {
      e.push(`
`);
      continue;
    }
    let s = !1;
    for (const r of n)
      switch (r) {
        // Ideographic Space
        case "　":
        case " ":
        case `
`:
          s && (t = !0);
          break;
        default:
          t && (e.push(" "), t = !1), s = !0, e.push(r === " " ? " " : r);
          break;
      }
  }
  return e.join("");
}
function Ca(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const No = "	", Bo = `
`;
function _a(o) {
  if (!Ca(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(No)
  ).join(Bo);
}
function Ra(o) {
  if (o.length === 0) return [];
  const e = [], t = [], n = [];
  function s() {
    n.push({
      text: t.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: !0,
      isFormatted: !1
    }), t.length = 0;
  }
  function r() {
    s(), (e.length === 0 || n.length === e[0]?.length) && e.push([...n]), n.length = 0;
  }
  for (const i of o)
    i !== "\r" && (i === No ? s() : i === Bo ? r() : t.push(i));
  return (t.length > 0 || n.length > 0) && r(), e;
}
const pt = [
  {
    format: "ir-grid/cell",
    parseFunc: ha,
    payloadFunc: da
  },
  {
    format: "text/html",
    parseFunc: ma,
    payloadFunc: ga
  },
  {
    format: "text/plain",
    parseFunc: Ra,
    payloadFunc: _a
  }
];
function xa(o, e) {
  pt.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function Vo(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function ya(o) {
  return o.some((e) => e.some((t) => Vo(t)));
}
function ba(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let s = 0; s < n; ++s)
      e[t]?.[s]?.text && Vo(o[t][s]) && (o[t][s].text = e[t][s].text);
  }
  return o;
}
function Bn(o) {
  for (const { format: e, parseFunc: t } of pt) {
    const n = o.getData(e);
    if (n !== "") {
      const s = t(n);
      if (!ya(s))
        return s;
      const r = o.getData(pt[2].format);
      return ba(
        s,
        pt[2].parseFunc(r)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const tt = 1, Ae = 1;
class Vn {
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
    return this._width + Ae;
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
class Sa {
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
    const t = new Vn({
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
    this._columnsList.splice(e, t - e + 1).forEach((s) => this.updateColumnWidth(s, "remove")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  _changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t, n) {
    const r = this.getColumn(e).left, i = z(t).map((l) => new Vn({
      columnId: e + l,
      width: n,
      left: r + (n + Ae) * l
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
    const n = this.getColumn(e), s = n.width - t;
    s !== 0 && (n.width = t, n.visible && this._changeColumnWidth(n, s));
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
    z(e, this._columnsList.length).reduce((t, n) => {
      const s = this._columnsList[n];
      return s.left = t, s.visible ? t + s.width + Ae : t;
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
class va {
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
    return this._rowList.reduce((n, s) => Math.max(n, s.getMaxCellWidth(e, t)), 0);
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
    this._rowList.forEach((s) => {
      const r = z(t).map((i) => n(s.rowId, e + i));
      s.insertCells(r, e);
    });
  }
  removeRows(e, t, n) {
    const s = this._rowList.slice(e, t + 1), r = n?.ignoreFiltered === !0 ? s.filter((i) => !i.filtered) : s;
    if (this._rowList = [
      ...this._rowList.slice(0, e),
      // filter 되지 않은 row
      ...s.filter((i) => !r.includes(i)),
      ...this._rowList.slice(t + 1)
    ], r.length !== 0) {
      for (const i of r)
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
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      r.top = n, this._updateRowHeight(r, "add"), n = r.bottom;
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  insertRowByList(e) {
    const t = [...this._rowList];
    this._rowList.length = 0;
    const n = t[Symbol.iterator](), s = e[Symbol.iterator]();
    let r = s.next().value, i = n.next().value, l = 0;
    for (; i; )
      r && r.rowId === l ? (this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value) : (this._rowList.push(i), i = n.next().value), ++l;
    for (; r; )
      this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value;
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const s = this._rowList.splice(e, t - e + 1);
    s.forEach((i) => i.unmount());
    const r = e < n ? n - s.length : n;
    this._rowList.splice(r, 0, ...s), this._updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, s]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (s < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= s && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${s}`);
    const [r, i, l, u] = e < n ? [e, t, n, s] : [n, s, e, t], d = this._rowList.slice(r, i + 1), c = this._rowList.slice(l, u + 1);
    d.forEach((a) => a.unmount()), c.forEach((a) => a.unmount()), this._rowList = [
      ...this._rowList.slice(0, r),
      ...c,
      ...this._rowList.slice(i + 1, l),
      ...d,
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
    const n = this.getRow(e), s = n.height - t;
    s !== 0 && (n.height = t, n.visible && this._changeRowHeight(n, s));
  }
  setRowVisible(e, t) {
    const n = this.getRow(e);
    t !== n.visible && (n.setVisible(t), this._updateRowHeight(n, t ? "show" : "hide"), this._updateVisibleRowList(), this._updateFixedHeight());
  }
  setRowVisibleBulk(e, t) {
    const { length: n } = t;
    for (let s = 0; s < n; ++s) {
      const r = this._rowList[e + s], i = t[s];
      r.visible !== i && (r.setVisible(i), this._updateRowHeight(r, i ? "show" : "hide"));
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
        const s = e(n);
        n.visible !== s && (n.setFiltered(!s), n.setVisible(s), this._updateRowHeight(n, s ? "show" : "hide"));
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
    const n = e.height + tt, s = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += s;
  }
  sort(e, t, n, s) {
    const r = this._rowList.slice(0, n), i = this._rowList.slice(n, s), l = this._rowList.slice(s);
    i.forEach((u) => u.unmount()), i.sort((u, d) => {
      let c = e(u, d);
      return c === 0 && (c = u.seq - d.seq), c * (t === "ASC" ? 1 : -1);
    }), this._rowList = [
      ...r,
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
      const s = this._rowList[t];
      if (!s) break;
      s.freeze(), t++;
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
    const s = t ?? 0, r = n ?? this.length;
    for (let i = s; i < r; i++) {
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
      func: (n, s) => Math.max(n, s.getEndOfColumnId(e))
    });
    return t === e ? t : this.getEndOfColumnId(t);
  }
  getStartOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, s) => Math.min(n, s.getStartOfColumnId(e))
    });
    return t === e ? t : this.getStartOfColumnId(t);
  }
  findRowOrNull(e, t, n) {
    const s = t < e + this.freezedRowsHeight ? {
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
    let r = this.getRow(s.curIndex);
    for (; !(t >= s.scrollTop + r.top && t <= s.scrollTop + r.bottom); ) {
      if (t < s.scrollTop + r.top) {
        if (s.endIndex === s.curIndex)
          return null;
        s.endIndex = s.curIndex;
      } else {
        if (s.startIndex === s.curIndex)
          return null;
        s.startIndex = s.curIndex;
      }
      s.curIndex = Math.floor((s.startIndex + s.endIndex) / 2), r = this.getRow(s.curIndex);
    }
    return r;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let s = e.initValue;
    for (let r = t; r < n; r++)
      s = e.func(s, this._rowList[r]);
    return s;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, s = t.length - 1;
    for (; n <= s; ) {
      const r = n + Math.floor((s - n) / 2), i = t[r];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? s = r - 1 : n = r + 1;
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
function ka() {
  const o = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
  return e.className = qs, o.className = Xs, t.className = Ys, n.className = Zs, o.appendChild(t), o.appendChild(n), e.appendChild(o), { table: o, wrapper: e, freezedRows: t, bodyRows: n };
}
const Ia = 1e4;
function Ea({ rowManager: o, colManager: e, commandManager: t, cursorManager: n, hook: s }) {
  const r = Oe("textarea", Js);
  r.style.padding = "0";
  let i = null;
  const l = {
    focus: d,
    runEditMode: w,
    setPosition: a,
    mountElement(y) {
      b(), y.appendChild(r);
    },
    hide() {
    },
    onEditDone(y, m, R, S, M, k) {
    },
    onEditKeyDown(y, m, R, S) {
    },
    onEnterOnEdit(y, m) {
    },
    onEditInput(y, m) {
    },
    onDragEnd(y) {
    }
  }, u = sn(l);
  return s.addSyncHook("contextScroll", (y, m, R) => {
    i && a(i.cell, m, R);
  }), r.ondragend = (y) => l.onDragEnd(y), l;
  function d() {
    r.focus({ preventScroll: !0 });
  }
  function c(y) {
    r.value = y;
  }
  function a(y, m, R) {
    const S = o.getRow(y.row), M = e.getColumn(y.col), k = y.row < o.freezedRows ? m : 0, T = y.col < e.freezedColumns ? R : 0;
    r.style.top = `${S.top + k}px`, r.style.left = `${M.left + T}px`;
  }
  function h(y) {
    r.style.width = `${y.width}px`, r.style.height = `${y.height}px`;
  }
  function f(y) {
    const m = y === "" ? D.zLevel1 : `calc(${y} + 1000)`;
    r.style.zIndex = m;
  }
  function w(y, m, R, S = !1, M = !1) {
    i = {
      cell: y,
      beforeText: y.props.text ?? "",
      cancelEndEdit: !1
    }, r.style.removeProperty("padding"), S || c(i.beforeText), r.maxLength = y.props.maxLength ?? Ia, f(y.zIndexVariant), a(y, m, R), h(y), d(), r.scrollTo(0, r.scrollHeight), M && r.setSelectionRange(0, r.value.length), u.destroy(), u.create();
  }
  function I() {
    c(""), i = null, r.style.removeProperty("height"), r.style.removeProperty("width"), r.style.removeProperty("z-index");
  }
  function b() {
    r.addEventListener("keydown", _), r.addEventListener("blur", x), r.addEventListener("keyup", p), r.addEventListener("input", v);
  }
  function v(y) {
    i && l.onEditInput(y, r.value);
  }
  function p() {
    i || c("");
  }
  function _(y) {
    if (!i) return;
    const { beforeText: m, cell: R } = i;
    if (y.key === "Escape") {
      C(r.value, !1, y.key);
      return;
    }
    if (y.key === " " && !y.ctrlKey) {
      y.preventDefault();
      const S = r.value, { selectionStart: M, selectionEnd: k } = r;
      r.value = S.slice(0, M) + " " + S.slice(k), r.selectionStart = M + 1, r.selectionEnd = M + 1, l.onEditInput(y, r.value);
      return;
    }
    if (y.key === "Enter" && y.altKey && R.metaInfo.editSingleLine !== !0) {
      y.preventDefault();
      const S = r.selectionStart;
      try {
        i.cancelEndEdit = !0, r.blur(), r.value = [
          r.value.substring(0, S),
          r.value.substring(r.selectionEnd)
        ].join(`
`), d(), r.setSelectionRange(S + 1, S + 1, "backward"), l.onEditKeyDown(y, R.row, R.col, R.props);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (g(y)) {
      y.preventDefault(), C(r.value, m !== r.value, y.key), y.key === "Enter" ? l.onEnterOnEdit(y.ctrlKey, y.shiftKey) : E(y.key, y.shiftKey);
      return;
    }
    l.onEditKeyDown(y, R.row, R.col, R.metaInfo);
  }
  function x() {
    !i || i.cancelEndEdit || (C(r.value, i.beforeText !== r.value, ""), u.destroy());
  }
  function C(y, m, R) {
    if (i)
      try {
        const { cell: S, beforeText: M } = i;
        if (m && S.checkInputValidation(y)) {
          const k = { text: y, beforeText: M };
          S.props.gridStore.hook.emit("cellEditDoneBeforeRender", [S.row, S.col, k]);
          const T = new Ce(t.commandContext, [
            S.row,
            S.col,
            { text: k.text }
          ]);
          T.onUndo = () => {
            l.onEditDone(S, m, M, R, r.selectionStart, r.selectionEnd);
          }, T.onExecute = () => {
            l.onEditDone(S, m, M, R, r.selectionStart, r.selectionEnd);
          }, t.pushCommandBlock(new ke(
            `Edit cell (${S.row}, ${S.col}) `,
            T
          )), S.props = { text: k.text };
        }
        l.onEditDone(S, m, M, R, r.selectionStart, r.selectionEnd);
      } finally {
        r.style.padding = "0", I();
      }
  }
  function g(y) {
    return y.key === "ArrowLeft" && r.selectionStart === 0 && r.selectionEnd === 0 || y.key === "ArrowUp" && r.selectionStart === 0 && r.selectionEnd === 0 || y.key === "ArrowRight" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || y.key === "ArrowDown" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || y.key === "Tab" ? !0 : y.key === "Enter" && !y.altKey && !y.ctrlKey && !y.shiftKey;
  }
  function E(y, m) {
    switch (y) {
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
class Xe {
  _rowManager;
  _colManager;
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: s }) {
    s = Math.min(s, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = e; r <= n; r++)
      for (let i = t; i <= s; i++)
        yield this._rowManager.cell(r, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: s }) {
    s = Math.min(s, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = 0; r < this._rowManager.headerRows; ++r)
      for (let i = t; i <= s; ++i)
        yield this._rowManager.cell(r, i);
    for (let r = e; r <= n; ++r)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(r, i);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const s of this.getSelectionGenerator(e))
      t(s) && n++;
    return n;
  }
}
function Ta(o) {
  return o.top === o.bottom && o.left === o.right;
}
function Ma(o) {
  return o.top > o.bottom || o.left > o.right;
}
function La(o, e) {
  let t = [];
  const n = new Xe(o, e), s = ({ top: d, left: c, bottom: a, right: h }) => t.some(({ mergeArea: f }) => c <= f.right && h >= f.left && d <= f.bottom && a >= f.top) === !1, r = (d, c) => {
    let a = 0;
    for (let h = d; h <= c; ++h)
      o.getRowVisible(h) && ++a;
    return a;
  }, i = (d, c) => {
    let a = 0;
    for (let h = d; h <= c; ++h)
      e.getColumnVisible(h) && ++a;
    return a;
  }, l = ({ top: d, left: c, bottom: a, right: h }) => {
    for (let f = d; f <= a; ++f)
      if (o.getRowVisible(f) === !1) return !0;
    for (let f = c; f <= h; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, u = (d, c) => {
    const a = o.getCell(d, c), h = t.indexOf(a);
    return h < 0 ? null : t[h];
  };
  return {
    isValidatedMerging: s,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(d) {
      t = t.filter(({ row: c }) => c < d);
    },
    mergeCells(d) {
      if (Ma(d))
        throw new Error("Invalid range");
      if (s(d) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(d))
        throw new Error("Could not merging with hidden cells!");
      if (Ta(d))
        throw new Error("Could not merging with single cell!");
      const c = o.getCell(d.top, d.left);
      c.mergeInfo = { rowSpan: r(d.top, d.bottom), colSpan: i(d.left, d.right) }, t.push(c);
      for (const a of n.getSelectionGenerator(d))
        (a.row !== d.top || a.col !== d.left) && (a.mergeMain = c);
    },
    splitCells(d, c) {
      const a = u(d, c);
      if (!a)
        throw new Error("Could not split on a not merged cell!");
      for (const h of n.getSelectionGenerator(a.mergeArea))
        h.mergeMain = void 0, h.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(d, c);
    },
    isMerged(d, c) {
      return !s({ top: d, left: c, bottom: d, right: c });
    },
    *getMergedCellGenerator(d) {
      for (const c of n.getSelectionGenerator(d))
        (c.mergeInfo.rowSpan > 1 || c.mergeInfo.colSpan > 1) && (yield c);
    },
    removeMergeCell(d, c) {
      const a = u(d, c);
      if (!a)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((h) => h !== a);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(d, c) {
      for (const { mergeArea: a } of t)
        if (a.top < d && a.bottom >= d && a.bottom <= c || a.bottom > c && a.top >= d && a.top <= c || a.top < d && a.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(d, c) {
      for (const { mergeArea: a } of t)
        if (a.left < d && a.right >= d && a.right <= c || a.right > c && a.left >= d && a.left <= c || a.left < d && a.right > c)
          return !0;
      return !1;
    },
    checkCanInsertRow(d) {
      for (const { mergeArea: c } of t)
        if (c.top < d && c.bottom >= d)
          return !1;
      return !0;
    },
    checkCanInsertColumn(d) {
      for (const { mergeArea: c } of t)
        if (c.left < d && c.right >= d)
          return !1;
      return !0;
    }
  };
}
class Ha {
  _gridHookFlow = Fr();
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
    const t = wt();
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
      "grid.forceRenderRightCol": t.getStoreValue("grid.forceRenderRightCol"),
      "grid.emptyDefaultHeight": t.getStoreValue("grid.emptyDefaultHeight")
    }, this._commandManager = e.gridCommandManager, this._rowManager = new va(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new Sa(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = La(this._rowManager, this._columnManager), this._gridTextarea = Ea({
      hook: this._gridHookFlow,
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = ka();
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
const Oa = /^var\((.+)\)$/;
function fn(o) {
  const e = Oa.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Aa = [
  D.zLevel0,
  D.zLevel1,
  D.zLevel2,
  D.zLevel3,
  D.zLevel4,
  D.zLevel5,
  D.zLevel6,
  D.zLevel7,
  D.zLevel8,
  D.zLevel9
], Fa = [
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
], re = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
}, za = /* @__PURE__ */ new Set([
  re.lv9,
  re.lv7,
  re.lv6,
  re.lv4,
  re.lv3
]);
class Da {
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
  _isDragOver = !1;
  _mergeMain;
  _isActivate = !1;
  _cellRenderer;
  _isRemoved = !1;
  _element = null;
  _mark;
  _cellType;
  constructor({ row: e, col: t, tag: n, props: s, cellRenderer: r, cellType: i }) {
    this._cellProps = { ...s }, this._tag = n, this._cellRenderer = r, this._row = e, this._col = t, this._cellType = i;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(wn) || this.element.tagName === "TH";
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
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : Gn("grid.defaultFontSize", Cn.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : Gn("grid.defaultFontFamily", Cn.fontFamilyBase, "fontFamily");
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
    const { disabled: e, readonly: t, text: n } = this.props, s = this._getRenderInstance();
    return e !== !0 && t !== !0 && n !== "" && (s.editable || s.canBeClear);
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
    return !(this._cellType !== "body-cell" || this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(fn(D.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.render()) : (this._visible = !1, this.unmount());
  }
  set isDragOver(e) {
    this._isDragOver = e, this._updateCellCls();
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
    Object.assign(this._cellProps, e), this.render(), this.renderInstance instanceof oe && this.renderInstance.onUpdateCell(this._row, this._col, e);
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
    if (this._cellRenderer instanceof oe)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof oe)
        return e;
      if (e instanceof HTMLElement)
        return new Po(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? he(this._element, { [e]: `${t}px` }) : he(this._element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: s
    } = this._cellProps;
    this._applyCustomProp(D.cellTopPadding, e), this._applyCustomProp(D.cellLeftPadding, t), this._applyCustomProp(D.cellRightPadding, n), this._applyCustomProp(D.cellBottomPadding, s);
  }
  _updateCellCls() {
    if (!this._element) return;
    const e = [Qs, this._tag === "th" ? er : tr];
    this.props.class && e.push(this.props.class), this._zIndex !== null && e.push(wn), this._cellProps.disabled && e.push("is-disabled"), this._cellProps.sortOrder === "ASC" && e.push("is-asc"), this._cellProps.sortOrder === "DESC" && e.push("is-desc"), this.isSelected && e.push("is-selected"), this.onCheckReadonly() && e.push("is-readonly"), this._isDragOver && e.push("is-dragging"), this._isActivate && e.push("is-active"), this._element.className = e.join(" ");
  }
  _updateCellLayout() {
    this._element && (this._element.style.top = `${this._top}px`, this._element.style.left = `${this._left}px`, this._element.style.width = `${this._width}px`, this._element.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._cellProps.isError ? this._addMark(nr) : this._cellProps.hasMemo ? this._addMark(or) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of Fa) {
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
    return this._element = e, this._rowSpan > 1 && (e.rowSpan = this._rowSpan), this._colSpan > 1 && (e.colSpan = this._colSpan), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), this._updateStickyZId(), this._updateCellLayout(), e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this._updateCellCls(), this.onSelect(this));
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
  updateCellLayout(e, t, n, s, r) {
    this._zIndex && za.has(this._zIndex) && (t += r), !(this._top === e && this._left === t && this._height === n && this._width === s) && (this._top = e, this._height = n, this._left = t, this._width = s, this._updateCellLayout());
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
    this.deactivate();
  }
  activate() {
    this._isActivate = !0, this._updateCellCls(), this._mergeMain?.activate();
  }
  deactivate() {
    this._isActivate = !1, this._updateCellCls(), this._mergeMain?.deactivate();
  }
  updateReadonlyStatus() {
    this._updateCellCls();
  }
  _updateStickyZId() {
    this._element && (this._zIndex === null ? this._element.style.removeProperty(D.stickyCellZId) : he(this._element, { [D.stickyCellZId]: Aa[this._zIndex] }));
  }
  setStickyZIndex(e) {
    this._zIndex = e, this._updateStickyZId(), this._updateCellCls();
  }
  checkInputValidation(e) {
    return this.props.enabledPatternCheck && this.props.allowedRegExpPattern ? this.props.allowedRegExpPattern.test(e) : !0;
  }
  _renderInnerCell() {
    this._element || this._initElement(), this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this._updateCellCls(), this._element.appendChild(this._getRenderElement()), this._needRender = !1, this.onPostRender();
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
function Gn(o, e, t) {
  const n = wt().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Pa extends on {
  constructor() {
    super([]);
  }
}
class Wa extends on {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class Mt {
  _grid;
  _generator;
  constructor(e) {
    this._grid = e, this._generator = new Xe(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [s, r] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: G(e.top, t, n),
      left: G(e.left, s, r),
      bottom: G(e.bottom, t, n),
      right: G(e.right, s, r)
    };
    return i.top > n || i.bottom < t || i.left > r || i.right < s ? null : i;
  }
  extendRange(e) {
    const t = this._generator, n = { ...e }, s = [...t.getSelectionGenerator(e)];
    for (; s.length; ) {
      const r = s.pop();
      if (!r.isMerged && !r.mergeMain) continue;
      const i = r.mergeMain ? r.mergeMain.mergeArea : r.mergeArea;
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
          s.push(u);
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
          s.push(u);
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
          s.push(u);
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
          s.push(u);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        z(e.left, e.right + 1).map((s) => this._grid.cell(n, s).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        z(e.left, e.right + 1).map((s) => this._grid.cell(n, s))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const s = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: s, right: t })];
  }
  getColumnListByColumn(e, t) {
    return z(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class $a extends on {
  constructor(e) {
    super(null, (t) => {
      const n = new Mt(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        At((s) => {
          if (!s || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: r, range: i } = s;
          return r.row >= i.top && r.row <= i.bottom && r.col >= i.left && r.col <= i.right ? s : {
            activeCell: e.cell(i.top, i.left),
            range: s.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        At((s) => {
          if (!s) return null;
          const r = n.adjustRange(s.range);
          return r ? { activeCell: s.activeCell, range: r } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        At((s) => s ? { activeCell: s.activeCell, range: n.extendRange(s.range) } : null)
      );
    });
  }
}
class Na {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new $a(e), this._gridModeState = new Wa(), this._headerCellListState = new Pa();
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
class te {
  _mountRollbackStack = [];
  _isMounted = !1;
  _pluginAPI = null;
  _gridHook = null;
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  addRollbackTask(e) {
    this._mountRollbackStack.push(e);
  }
  addPluginSyncHook(e, t) {
    const n = this._gridHook;
    if (!n) throw new Error("Grid hook is not initialized. You must mount the plugin first.");
    n.addSyncHook(e, t), this.addRollbackTask(() => n.removeSyncHook(e, t));
  }
  mount(e) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._gridHook = e.grid.hook, this._mountTask(e), this._isMounted = !0;
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
class Ba {
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
  constructor({ grid: e, rowId: t, height: n, top: s, rowType: r, seq: i }) {
    this._grid = e, this._cells = [], this._rowType = r, this._rowId = t, this._seq = i, this._isMounted = !1, this._isFreezed = !1, this._isHeaderRow = !1, this._filtered = !1, this._height = n, this._top = s;
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
    return this._height + tt;
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
    const { col: t, mergeInfo: n, mergeMain: s } = this._cells[e];
    return s ? s.right : t + n.colSpan - 1;
  }
  getStartOfColumnId(e) {
    const { mergeMain: t } = this._cells[e];
    return t ? t.col : e;
  }
  getMaxCellWidth(e, t) {
    return z(e, t).reduce((n, s) => {
      const r = this._cells[s];
      return r.visible && r.mergeInfo.colSpan === 1 ? Math.max(n, r.innerWidth) : n;
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
    this._cells.splice(e, n).forEach((r) => r.remove()), z(e, this._cells.length).forEach((r) => this._cells[r].col -= n);
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
    return this.isHeaderRow ? t ? re.lv9 : re.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? re.lv7 : re.lv6 : re.lv5 : t ? e < this._grid.headerColumns ? re.lv4 : re.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), e.setStickyZIndex(this.getFreezedCellType(e.col));
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    z(t, this._cells.length).forEach((n) => this._cells[n].col += e.length), this._cells.splice(t, 0, ...e), e.forEach((n) => n.setStickyZIndex(this.getFreezedCellType(n.col)));
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (Vr(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, s]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (s < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= s && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${s}`);
    const [r, i, l, u] = e < n ? [e, t, n, s] : [n, s, e, t];
    this._cells = [
      ...this._cells.slice(0, r),
      ...this._cells.slice(l, u + 1),
      ...this._cells.slice(i + 1, l),
      ...this._cells.slice(r, i + 1),
      ...this._cells.slice(u + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const s = this._cells.splice(e, t - e + 1), r = e < n ? n - s.length : n;
    this._cells.splice(r, 0, ...s), this.reorderCells();
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
    this._cells.forEach((s, r) => s.updateCellMetaInfo(n, t?.[r]));
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
    const n = Math.ceil(this.rowInnerHeight), s = G(isNaN(n) ? 0 : n, e, t);
    return this.height !== s ? (this.height = s, !0) : !1;
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
    const { rowId: s, top: r, heightWithBorder: i } = this;
    let l = null;
    for (const u of e) {
      if (u.mergeMain) continue;
      const { needRender: d } = u, c = u.element;
      u.isConnected || (l === null ? this.element.prepend(c) : l.after(c));
      const { rowSpan: a, colSpan: h, col: f } = u, w = {
        top: r,
        left: this._grid.getColumnLeft(f),
        width: h === 1 ? this._grid.getColumnWidth(f) + 1 : this._grid.getColWidthWithSpan(f, h),
        height: a === 1 ? i : this._grid.getRowHeightWithSpan(s, a),
        scrollLeft: n,
        scrollTop: t
      };
      this._grid.hook.emitSync("cellLayout", [s, f, w]), u.updateCellLayout(
        w.top,
        w.left,
        w.height,
        w.width,
        w.scrollLeft
      ), d && u.render(), l = c;
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
    this._rowElement && this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n)), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + Ae : 0)), 0);
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
    this.freezeColumns(this._grid.getFreezedColumnCount()), this._grid.onMountedRow(this.rowId);
  }
  onRenderRow(e) {
    this._grid.hook.emit("renderRowElement", [this, e]);
  }
}
const Va = 4, ht = "is-hidden";
function Ga(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const ja = ir, Ua = [
  lr,
  ar,
  cr,
  ur
], Ka = ["top", "left", "bottom", "right"];
function qa(o) {
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
  ], [s, r, i, l] = n, u = [s, i], d = [r, l];
  e.classList.add(sr, ht), n.forEach((p, _) => p.className = `${rr} border-line__${Ka[_]}`), t.forEach((p) => e.appendChild(p)), n.forEach((p) => e.appendChild(p));
  function c(p) {
    const { top: _, left: x, bottom: C, right: g } = f(p), { scrollTop: E, scrollLeft: y } = o;
    let m = 0, R = 0;
    return p.top < o.getFreezedRowCount() && (R = E), p.left < o.getFreezedColumnCount() && (m = y), {
      top: _ + R,
      left: x + m,
      width: Math.max(0, g - x),
      height: C - _
    };
  }
  function a(p) {
    p.classList.add(ht), delete p.dataset.top, delete p.dataset.left, delete p.dataset.bottom, delete p.dataset.right, delete p.dataset.visible;
  }
  function h(p, _) {
    const x = t[p], C = c(_);
    x.className = `${ja} ${Ua[p]}`, Object.assign(x.dataset, {
      top: String(_.top),
      left: String(_.left),
      bottom: String(_.bottom),
      right: String(_.right),
      visible: "true"
    }), x.style.top = `${C.top}px`, x.style.left = `${C.left}px`, x.style.width = `${C.width}px`, x.style.height = `${C.height}px`;
  }
  function f(p) {
    return {
      top: o.getRow(p.top).top - tt,
      left: o.getColumn(p.left).left - Ae,
      bottom: o.getRow(p.bottom).bottom,
      right: o.getColumn(p.right).right
    };
  }
  function w(p) {
    const { left: _, right: x } = p, C = o.getFreezedColumnCount();
    return z(_, x + 1).reduce((g, E) => {
      const y = o.getColumn(E);
      return y.visible ? g + (E >= C ? y.widthWithBorder : 0) : g;
    }, 0);
  }
  function I(p) {
    const { top: _, bottom: x } = p, C = o.getFreezedRowCount();
    return z(_, x + 1).reduce((g, E) => {
      const y = o.getRow(E);
      return y.visible ? g + (E >= C ? y.heightWithBorder : 0) : g;
    }, 0);
  }
  function b(p, _, x, C) {
    if (p <= C)
      return Math.min(_, x);
    const g = p - C;
    return x > g ? Math.max(0, x - g) : 0;
  }
  function v(p) {
    const { top: _, left: x, bottom: C, right: g } = f(p), {
      fixedRowHeight: E,
      fixedColumnWidth: y,
      scrollTop: m,
      scrollLeft: R
    } = o, S = E + m, M = y + R, k = _ < E, T = C <= E, L = x < y, H = g <= y, O = _ >= S, P = C >= S, B = x >= M, W = g >= M, F = w(p), lt = I(p), Ye = b(x, F, R, y), Ze = b(_, lt, m, E), ze = g - x - Ye, De = C - _ - Ze, ee = _ + (k ? m : Ze), ne = x + (L ? R : Ye), le = ne < 0 ? 1 : 0, ce = ee < 0 ? 1 : 0;
    (function() {
      u.forEach((de) => {
        de.style.left = `${ne + le}px`, de.style.width = `${ze - le}px`;
      });
    })(), function() {
      d.forEach((de) => {
        de.style.top = `${ee + ce}px`, de.style.height = `${De - ce}px`;
      });
    }(), function() {
      if (ze <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), k ? s.style.top = `${_ + m + ce}px` : O ? s.style.top = `${_ + ce}px` : s.style.display = "none";
    }(), function() {
      if (ze <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), T ? i.style.top = `${C + m - tt}px` : P ? i.style.top = `${C - tt}px` : i.style.display = "none";
    }(), function() {
      if (De <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), L ? r.style.left = `${x + R + le}px` : B ? r.style.left = `${x + le}px` : r.style.display = "none";
    }(), function() {
      if (De <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), H ? l.style.left = `${g + R - Ae}px` : W ? l.style.left = `${g - Ae}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(p) {
      const { headerRows: _, headerColumns: x } = o, C = o.getFreezedRowCount(), g = o.getFreezedColumnCount(), E = o.getRowCount() - 1, y = o.getColCount() - 1, m = [
        { top: _, left: x, bottom: C - 1, right: g - 1 },
        { top: _, left: g, bottom: C - 1, right: y },
        { top: C, left: x, bottom: E, right: g - 1 },
        { top: C, left: g, bottom: E, right: y }
      ].map((R) => Ga(p, R));
      for (let R = 0; R < Va; R++) {
        const S = m[R];
        S ? h(R, S) : a(t[R]);
      }
      v(p);
    },
    applyGridScroll() {
      const p = o.getSelection();
      p && this.updateArea(p);
    },
    show() {
      e.classList.remove(ht);
    },
    hide() {
      e.classList.add(ht);
    }
  };
}
class Xa {
  #t;
  #e;
  constructor(e, t, n) {
    this.#t = t, this.#e = qa(e), n.appendChild(this.#e.selectionRoot);
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
const ft = -1, jn = 2, Un = 2, Ya = 2, Za = [
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
function Ja(o) {
  return o.mergeMain ?? o;
}
class Qa {
  _args;
  _wrapperElement;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = ft;
  constructor(e) {
    const { grid: t, store: n } = e;
    this._args = e, this._wrapperElement = e.store.elements.wrapper, this._gridRangeUtil = new Mt(t), n.hook.addSyncHook("contextScroll", (s) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll").forceRunTasks();
    });
  }
  _resetContext() {
    this._updateScrollInfo = { row: -1, col: -1 };
  }
  _renderTask(e = 0) {
    if (e > Ya) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = ft;
    for (const n of Za)
      if (!(!t.has(n) || n === "nothing"))
        try {
          this[n].call(this);
        } catch (s) {
          console.error(n, s);
        }
    this._afterRenderCallbackList.forEach((n) => n()), this._afterRenderCallbackList.length = 0, this.checkScheduled("updateTop") && this.forceRunTasks(e + 1);
  }
  updateScrollInfo(e) {
    return Object.assign(this._updateScrollInfo, e), this.addTask("updateScroll").addTask("virtualRender");
  }
  _scrollOnRowTask() {
    if (this._updateScrollInfo.row === -1) return;
    const e = this._updateScrollInfo.row, { grid: t, contextElement: n } = this._args, s = G(e, 0, t.getRowCount() - 1), r = t.getRow(s), i = r.top, l = r.bottom, { fixedRowHeight: u, scrollBottom: d, scrollTop: c } = t, a = c + u;
    d < l ? n.scrollTop = c + (l - d) : a > i && (n.scrollTop = i - u), this._updateScrollInfo.row = -1;
  }
  _scrollOnColTask() {
    if (this._updateScrollInfo.col === -1) return;
    const e = this._updateScrollInfo.col, { grid: t, contextElement: n } = this._args, s = G(e, 0, t.getColCount() - 1), r = t.getColumnLeft(s), i = r + t.getColumnWidth(s), { fixedColumnWidth: l, scrollRight: u, scrollLeft: d } = t, c = d + l;
    u < i ? n.scrollLeft = d + (i - u) : c > r && (n.scrollLeft = r - l), this._updateScrollInfo.col = -1;
  }
  updateScroll() {
    this._scrollOnRowTask(), this._scrollOnColTask();
  }
  forceRunTasks(e = 0) {
    this._rafHandler !== ft && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === ft && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getViewportRowMap() {
    const e = /* @__PURE__ */ new Map(), { grid: t, contextElement: n, store: s } = this._args, { rowManager: r, columnManager: i } = s, { fixedRowHeight: l, fixedColumnWidth: u } = t, {
      scrollTop: d,
      scrollLeft: c,
      clientHeight: a,
      clientWidth: h
    } = n, f = t.getRowCount() - 1, w = t.getColCount() - 1, I = Math.min(t.getFreezedRowCount(), f), b = Math.min(t.getFreezedColumnCount(), w), v = t.getRowByTop(l + d + 1) ?? t.firstRow, p = t.getRowByTop(d + a) ?? t.lastRow, _ = t.getColumnByLeft(u + c + 1) ?? i.firstColumn, x = t.getColumnByLeft(c + h) ?? i.lastColumn;
    if (!v || !p || !_ || !x) return e;
    const C = r.getRowUnstable(Math.max(v.rowId - jn, I)), g = r.getRowUnstable(Math.min(p.rowId + jn, f)), E = i.getColumnUnstable(Math.max(_.columnId - Un, b)), y = i.getColumnUnstable(Math.min(x.columnId + Un, w));
    let m = z(0, I).asList(), R = z(0, Math.max(b, s.getThemeValue("grid.forceRenderLeftCol"))).asList();
    m = m.concat(z(C.rowId, g.rowId + 1).asList()), R = R.concat(z(E.columnId, y.columnId + 1).asList());
    const S = w - s.getThemeValue("grid.forceRenderRightCol") + 1;
    S > y.columnId && (R = R.concat(z(S, w + 1).asList()));
    for (const k of m) {
      const T = r.getRowUnstable(k);
      if (T.visible)
        for (const L of R)
          i.getColumnUnstable(L).visible && M(Ja(T.getCellUnstable(L)));
    }
    return e;
    function M(k) {
      const T = e.get(k.row);
      T ? T.push(k) : e.set(k.row, [k]);
    }
  }
  virtualRender() {
    const {
      grid: e,
      contextElement: t,
      store: {
        elements: {
          freezedRows: n,
          bodyRows: s
        },
        rowManager: r
      }
    } = this._args;
    if (t.offsetWidth === 0) return;
    const { scrollTop: i, scrollLeft: l } = e, u = e.getFreezedRowCount(), d = this._getViewportRowMap();
    n.style.top = `${i}px`, c(), a(), h();
    function c() {
      r.runFuncEachRow((f) => !d.has(f.rowId) && f.unmount());
    }
    function a() {
      const { headerRows: f } = e;
      r.runFuncEachRow((w) => {
        const I = d.get(w.rowId);
        I && (w.updateViewportCells(I, i, l), w.isFreezed || w.freeze(w.rowId < f), w.isMounted && w.element.parentElement === s && w.unmount(), w.isMounted || w.mount(n, "beforeend"));
      }, 0, u);
    }
    function h() {
      let f = null;
      for (const [w, I] of d.entries()) {
        if (w < u) continue;
        const b = r.getRowUnstable(w);
        if (b.updateViewportCells(I, i, l), b.isMounted)
          if (b.element.parentElement === n)
            b.unmount();
          else {
            f = b.element;
            continue;
          }
        f ? b.mount(f, "afterend") : b.mount(s, "afterbegin"), f = b.element;
      }
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
    let n = 0, s = 0;
    for (; n < t; ) {
      const r = e.getColumn(n);
      r.left = s, r.visible && (s = r.right), ++n;
    }
  }
  updateTop() {
    const { grid: e } = this._args, t = e.getRowCount();
    let n = 0, s = 0;
    for (; n < t; ) {
      const r = e.getRow(n);
      r.top = s, r.visible && (s = r.bottom), ++n;
    }
  }
  updateColumnId() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0;
    for (; n < t; ) {
      const s = e.getColumn(n);
      s.columnId = n, ++n;
    }
  }
  updateRowId() {
    const { grid: e } = this._args, t = e.getRowCount(), n = e.getFreezedRowCount();
    let s = 0;
    for (; s < t; ) {
      const r = e.getRow(s);
      r.rowId = s, r.isFreezed && s >= n ? r.unfreeze() : !r.isFreezed && s < n && r.freeze(), ++s;
    }
  }
  adjustSelection() {
    const { grid: e, store: t } = this._args, { gridStateContext: n } = t, s = n.selectionRangeState.value;
    if (!s) return e.releaseCells();
    const r = this._gridRangeUtil.adjustRange(s.range);
    if (!r) return e.releaseCells();
    e.select(this._gridRangeUtil.extendRange(r));
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
class Go extends q {
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
const ec = {
  "col-resizing": uo,
  "row-resizing": ho
}, $t = {
  "col-resizing": fr,
  "row-resizing": gr
}, Nt = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, Kn = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, tc = 500, qn = 4;
class jo extends te {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: s,
      enabledRowResizer: r,
      disabledColumns: i,
      disabledRows: l,
      enabledColRatioResizer: u
    } = this._options, {
      elements: d,
      gridStateContext: c,
      columnManager: a
    } = t, h = new Set(i), f = new Set(l), w = (x, C, g) => {
      e.commandManager.pushCommandBlock(new ke(x, new Go(e, [C, g])));
    };
    (function() {
      const C = document.createElement("div");
      let g = null, E = !1, y = 0, m = null;
      const R = () => {
        g && (g.element.classList.remove($t["col-resizing"]), g.element.classList.remove($t["row-resizing"]), g = null), n.classList.remove(uo), n.classList.remove(ho), n.classList.remove(ve), m && n.removeEventListener("mousedown", m);
      }, S = (T, L) => {
        g = T, n.classList.add(ve), n.classList.add(ec[L]), T.element.classList.add($t[L]);
        let H = 0, O = 0, P = 0, B = 0, W = 0;
        const F = () => T.col < e.getFreezedColumnCount() ? e.scrollLeft + B : B, lt = () => T.row < e.getFreezedRowCount() ? e.scrollTop + B : B;
        m = (ee) => {
          const ne = (/* @__PURE__ */ new Date()).getTime();
          if (c.setMode({
            mode: L,
            contextParam: {}
          }), ne - y <= tc) {
            if (L === "col-resizing") {
              const le = Nt(T);
              p(le, t.rowManager.getMaxCellWidth(le, le + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(T.row);
              });
            y = 0, c.setIdle();
            return;
          }
          E = !0, y = ne, L === "col-resizing" ? (C.className = mr, W = e.getColumnWidth(Nt(T)), H = ee.pageX, O = H - W + e.minColWidth, P = H - W + e.maxColWidth, B = e.getColumnLeft(T.col) + e.getCellWidth(T), C.style.top = "0px", C.style.width = "0px", C.style.height = `${e.height}px`, C.style.left = `${F()}px`) : (C.className = pr, W = e.getRowHeight(Kn(T)), H = ee.pageY, O = H - W + e.minRowHeight, P = H - W + e.maxRowHeight, B = e.getRow(T.row).top + e.getCellHeight(T), C.style.top = `${lt()}px`, C.style.width = `${e.width}px`, C.style.height = "0px", C.style.left = "0px"), d.wrapper.appendChild(C), e.addGlobalEventListener(document, "keydown", De), e.addGlobalEventListener(document, "mouseup", Ze), e.addGlobalEventListener(document, "mousemove", Ye);
        };
        const Ye = (ee) => {
          if (L === "col-resizing") {
            const ne = G(ee.pageX, O, P) - H;
            C.style.left = `${F() + ne}px`;
          } else {
            const ne = G(ee.pageY, O, P) - H;
            C.style.top = `${lt() + ne}px`;
          }
        }, Ze = (ee) => {
          if (L === "col-resizing") {
            const ce = G(ee.pageX, O, P) - H;
            if (Math.abs(ce) > qn) {
              const ue = Nt(T), de = W + ce;
              p(ue, de), y = 0;
            }
          } else {
            const ce = G(ee.pageY, O, P) - H;
            if (Math.abs(ce) > qn) {
              const ue = Kn(T), de = W + ce;
              w("Resize row", ue, de), e.setRowHeight(ue, de), y = 0;
            }
          }
          ze(), c.setIdle();
          const ne = I(ee);
          if (!ne) return;
          const le = b(ee, ne);
          le !== null && S(ne, le);
        };
        function ze() {
          E = !1, C.remove(), R(), document.removeEventListener("mousemove", Ye), document.removeEventListener("mouseup", Ze), document.removeEventListener("keydown", De);
        }
        const De = (ee) => {
          ee.key === "Escape" && ze();
        };
        e.addGlobalEventListener(n, "mousedown", m);
      }, M = (T) => {
        if (E) return;
        const L = I(T);
        if (R(), L === null) return;
        const H = b(T, L);
        H && S(L, H);
      }, k = (T) => {
        E || R();
      };
      e.addGlobalEventListener(n, "mousemove", M), e.addGlobalEventListener(n, "mouseout", k);
    })();
    const I = (x) => {
      const C = Re("th", "tr", x.target);
      if (!C) return null;
      const [g, E] = [
        parseInt(C.getAttribute("data-row") || "-1"),
        parseInt(C.getAttribute("data-col") || "-1")
      ];
      return e.cell(g, E);
    }, b = (x, C) => {
      if (C.cellType === "body-cell") return null;
      if (u) {
        const { visibleColumnList: g } = a, E = g[g.length - 1];
        if (g.length > 0 && C.col === E.columnId) return null;
      }
      return s && Math.abs(e.getCellWidth(C) - x.offsetX) <= dr && !h.has(C.col) ? "col-resizing" : r && Math.abs(e.getCellHeight(C) - x.offsetY) <= hr && !f.has(C.row) ? "row-resizing" : null;
    };
    function v(x, C, g) {
      const E = e.getColumnWidth(C) - g;
      e.setColumnWidth(C, E);
      const y = E - e.getColumnWidth(C);
      if (y !== 0) {
        const m = C - x;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          C - m,
          e.getColumnWidth(C - m) + y
        );
      }
    }
    function p(x, C) {
      const g = e.getColumnWidth(x);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(x, C), u && v(x, _(x), e.getColumnWidth(x) - g);
      });
    }
    function _(x) {
      let C = e.getColumn(x + 1);
      for (; !C.visible; )
        C = e.getColumn(C.columnId + 1);
      return C.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function ku(o) {
  return new jo(o);
}
const nc = 16;
class Uo extends te {
  _enableHeaderClick = !0;
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: s } = t;
    let r = null, i = null, l, u = null;
    const d = (p, _) => {
      const x = [
        p.row,
        p.bottom,
        _.row,
        _.bottom
      ], C = [
        p.col,
        p.right,
        _.col,
        _.right
      ], g = {
        top: Math.min(...x),
        left: Math.min(...C),
        bottom: Math.max(...x),
        right: Math.max(...C)
      };
      mo(g, u) || (u = g, e.select(g, e.activeCell ?? r), this.onChangedSelection(g));
    }, c = (p, _) => {
      const x = e.activeCell;
      _.shiftKey && x ? (r = x, d(x, e.cell(p.row, p.col))) : (r = p, e.selectRange(r.row, r.col, r.bottom, r.right, r), this.onChangedSelection({ top: r.row, left: r.col, bottom: r.bottom, right: r.right })), i = r, s.setMode({ mode: "selecting-mouse", contextParam: {} });
    }, a = (p, _) => {
      this._enableHeaderClick && (_.__IGNORE_HEADER_SELECT__ || (r = p, f(r, r), s.setMode({ mode: "selecting-mouse", contextParam: {} })));
    };
    e.addGlobalEventListener(n, "mousedown", (p) => {
      if (n.classList.contains(ve) || p.button !== 0 || !He(p.target) || // textArea, button 에서는 pass
      p.target instanceof HTMLTextAreaElement || Re(".button", "tr", p.target)) return;
      const _ = Re("td,th", "tr", p.target);
      if (!_) return;
      const x = ge(_), C = e.cell(x.row, x.col);
      _.tagName === "TD" ? c(C, p) : _.tagName === "TH" && a(C, p);
    });
    function h(p, _) {
      const x = _.closest("td,th");
      if (!x) return;
      const C = ge(x);
      i = e.cell(C.row, C.col), f(p, i);
    }
    function f(p, _) {
      p.cellType === "body-cell" ? d(p, _) : p.cellType === "col-header" ? e.selectColumns(...Xn(p.col, _.right)) : p.cellType === "row-header" && e.selectRows(...Xn(p.row, _.bottom));
    }
    function w(p, _) {
      const { offsetX: x, offsetY: C, target: g } = p;
      if (!He(g)) return null;
      const E = x + g.scrollLeft, y = C + g.scrollTop, m = E > e.width ? e.width : E, R = y > e.height ? e.height : y, S = e.findCellOrNull(R, m);
      S && (i = S, f(_, S));
    }
    function I(p) {
      const _ = p.clientWidth + p.scrollLeft, x = p.clientHeight + p.scrollTop, C = p.scrollTop + e.headerHeight, g = p.scrollLeft + e.headerWidth, E = x > e.height ? e.height : x, y = _ > e.width ? e.width : _, m = e.findCellOrNull(C, g), R = e.findCellOrNull(E, y - 1);
      return {
        top: m?.row ?? 0,
        bottom: R?.row ?? 0,
        left: m?.col ?? 0,
        right: R?.col ?? 0
      };
    }
    function b(p, _, x, C) {
      l = window.setTimeout(() => {
        if (!r) return;
        const y = g(), m = E(), { top: R, bottom: S, left: M, right: k } = I(p), T = {
          top: p.scrollTop,
          left: p.scrollLeft,
          targetRow: x,
          targetCol: C
        };
        y && (_ === "t" ? (T.top -= e.getRowHeight(R), T.targetRow = R) : (T.top += e.getRowHeight(S), T.targetRow = S)), m && (_ === "l" ? (T.left -= e.getColumnWidth(M), T.targetCol = M) : (T.left += e.getColumnWidth(k), T.targetCol = k)), (y || m) && (p.scrollTo({ top: T.top, left: T.left }), f(r, e.cell(T.targetRow, T.targetCol)), b(p, _, T.targetRow, T.targetCol));
      }, nc);
      function g() {
        return _ === "t" ? p.scrollTop > 0 : _ === "b" ? p.scrollHeight - (p.scrollTop + p.clientHeight) > 0 : !1;
      }
      function E() {
        return _ === "l" ? p.scrollLeft > 0 : _ === "r" ? p.scrollWidth - (p.scrollLeft + p.clientWidth) > 0 : !1;
      }
    }
    function v() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (p) => {
      r && He(p.target) && (p.target === n ? w(p, r) : h(r, p.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      r && (v(), r = null, i = null, s.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: p, clientY: _, clientX: x }) => {
      if (!r || !i || !He(p)) return;
      const { top: C, bottom: g, left: E, right: y } = p.getBoundingClientRect();
      if (C < _ && g > _ && E < x && y > x) return;
      const m = R();
      m && b(p, m, i.row, i.col);
      function R() {
        return _ < C ? "t" : _ > g ? "b" : x < E ? "l" : x > y ? "r" : null;
      }
    }), e.addGlobalEventListener(n, "mouseenter", (p) => {
      r && He(p.currentTarget) && v();
    }), e.onDoubleClickCell = (p) => {
      s.isIdle && (e.scrollInView(p.row, p.col), e.forceLayoutTask(), e.doEditMode(p, !1, !0));
    };
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
  set enableHeaderClick(e) {
    this._enableHeaderClick = e;
  }
}
function Xn(o, e) {
  return o < e ? [o, e] : [e, o];
}
function Iu() {
  return new Uo();
}
class Ko extends q {
  _getUndoContext() {
    const [e, t] = this._args, n = [], s = new Xe(this._instance, this._instance);
    for (const r of s.getSelectionGenerator(e))
      t && this._instance.isFilteredRow(r.row) || this._instance.onClearCellCheck(r) && n.push({
        row: r.row,
        col: r.col,
        text: r.text
      });
    return { textSnapshot: n };
  }
  _undo() {
    const { textSnapshot: e } = this._undoContext;
    e.forEach(({ row: t, col: n, text: s }) => {
      this._instance.setCell(t, n, { text: s }), this._instance.onEditCellDone(this._instance.cell(t, n), !0, "", "", 0, 0);
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
function qo(o, e) {
  const t = (m, R, S) => {
    const M = o.headerRows;
    let k = S, T = m;
    for (; k !== 0; ) {
      const L = o.cell(T, R), O = (L.mergeMain ?? L).row - 1;
      if (O < M) break;
      o.getRowVisible(O) && ++k, T = O;
    }
    return o.getRowVisible(T) ? T : m;
  }, n = (m, R, S) => {
    const M = o.getRowCount() - 1;
    let k = S, T = m;
    for (; k > 0; ) {
      const L = o.cell(T, R), O = (L.mergeMain ?? L).bottom + 1;
      if (O > M) break;
      o.getRowVisible(O) && --k, T = O;
    }
    return o.getRowVisible(T) ? T : m;
  }, s = (m, R, S) => {
    const M = o.headerColumns;
    let k = S, T = R;
    for (; k !== 0; ) {
      const L = o.cell(m, T), O = (L.mergeMain ?? L).col - 1;
      if (O < M) break;
      o.getColumnVisible(O) && ++k, T = O;
    }
    return o.getColumnVisible(T) ? T : R;
  }, r = (m, R, S) => {
    const M = o.getColCount() - 1;
    let k = S, T = R;
    for (; k !== 0; ) {
      const L = o.cell(m, T), O = (L.mergeMain ?? L).right + 1;
      if (O > M) break;
      o.getColumnVisible(O) && --k, T = O;
    }
    return o.getColumnVisible(T) ? T : R;
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
  }, d = () => {
    let m = o.getRowCount() - 1;
    for (; !o.getRowVisible(m); )
      --m;
    return m;
  }, c = (m) => {
    if (o.getRowCount() - 1 === m) return m;
    let S = m + 1;
    for (; !o.getRowVisible(S); )
      ++S;
    return S;
  }, a = (m) => {
    const R = o.headerRows;
    if (m === R) return m;
    let S = m - 1;
    for (; !o.getRowVisible(S); )
      ++S;
    return S;
  }, h = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const R = d(), S = l(), M = m.mergeMain ?? m;
    if (M.right === S) {
      if (m.row === R) return;
      const k = i(), T = c(m.row);
      e ? o.selectRow(T, o.cell(T, k)) : o.selectCell(T, k), o.scrollInView(T, k);
    } else {
      const k = r(m.row, M.right, 1);
      e ? o.selectRow(m.row, o.cell(m.row, k)) : o.selectCell(m.row, k), o.scrollOnCol(k);
    }
  }, f = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const R = u(), S = i(), M = m.mergeMain ?? m;
    if (M.col === S) {
      if (m.row === R) return;
      const k = l(), T = a(m.row);
      e ? o.selectRow(T, o.cell(T, k)) : o.selectCell(T, k), o.scrollInView(T, k);
    } else {
      const k = s(m.row, M.col, -1);
      e ? o.selectRow(m.row, o.cell(m.row, k)) : o.selectCell(m.row, k), o.scrollOnCol(k);
    }
  }, w = (m, R, S) => {
    let M = -1, k = -1;
    for (let T = R; T <= S; T++) {
      const L = o.cell(m, T), H = L.mergeMain ?? L, { rowSpan: O } = H.mergeInfo;
      O > M && (M = O, k = T);
    }
    return k;
  }, I = (m, R, S) => {
    let M = -1;
    for (let k = R; k <= S; k++) {
      const T = o.cell(m, k), L = T.mergeMain ?? T, { bottom: H } = L;
      H > M && (M = H);
    }
    return M;
  }, b = (m, R, S) => {
    let M = 999999999;
    for (let k = R; k <= S; k++) {
      const T = o.cell(m, k), L = T.mergeMain ?? T;
      M > L.row && (M = L.row);
    }
    return M;
  }, v = (m, R, S) => {
    let M = -1, k = -1;
    for (let T = R; T <= S; T++) {
      const L = o.cell(T, m), H = L.mergeMain ?? L, { colSpan: O } = H.mergeInfo;
      O > M && (M = O, k = T);
    }
    return k;
  }, p = (m, R, S) => {
    let M = -1;
    for (let k = R; k <= S; k++) {
      const T = o.cell(k, m), L = T.mergeMain ?? T, { right: H } = L;
      H > M && (M = H);
    }
    return M;
  }, _ = (m, R, S) => {
    let M = 999999999;
    for (let k = R; k <= S; k++) {
      const T = o.cell(k, m), L = T.mergeMain ?? T;
      M > L.col && (M = L.col);
    }
    return M;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: s,
    getNextXRight: r,
    getFirstActiveRow: u,
    selectNextActiveCell: h,
    selectBeforeActiveCell: f,
    selectNextSelection: (m, R, S) => {
      const M = o.getSelection(), { activeCell: k } = o;
      if (M == null || k == null) {
        console.warn("No selection warning");
        return;
      }
      const T = k.mergeMain ?? k;
      if (S && e) return;
      if (!S) {
        if (m !== 0) {
          const B = m < 0 ? t(T.row, k.col, m) : n(T.bottom, k.col, m);
          e ? o.selectRow(B, o.cell(B, k.col)) : o.selectCell(B, k.col), o.scrollOnRow(B);
        } else {
          const B = R < 0 ? s(k.row, T.col, R) : r(k.row, T.right, R);
          e ? o.selectRow(k.row, o.cell(k.row, B)) : o.selectCell(k.row, B), o.scrollOnCol(B);
        }
        return;
      }
      const { top: L, bottom: H, left: O, right: P } = M;
      if (m !== 0)
        if (m < 0)
          if (I(k.row, O, P) === H) {
            const W = w(L, O, P), F = t(L, W, m);
            o.selectRange(F, O, H, P, k), o.scrollOnRow(F);
          } else {
            const W = w(H, O, P), F = t(H, W, m);
            o.selectRange(L, O, F, P, k), o.scrollOnRow(F);
          }
        else if (b(k.row, O, P) === L) {
          const W = w(H, O, P), F = n(H, W, m);
          o.selectRange(L, O, F, P, k), o.scrollOnRow(F);
        } else {
          const W = w(L, O, P), F = n(L, W, m);
          o.selectRange(F, O, H, P, k), o.scrollOnRow(F);
        }
      else if (R < 0)
        if (p(k.col, L, H) === P) {
          const W = v(O, L, H), F = s(W, O, R);
          o.selectRange(L, F, H, P, k), o.scrollOnCol(F);
        } else {
          const W = v(P, L, H), F = s(W, P, R);
          o.selectRange(L, O, H, F, k), o.scrollOnCol(F);
        }
      else if (_(k.col, L, H) === O) {
        const W = v(P, L, H), F = r(W, P, R);
        o.selectRange(L, O, H, F, k), o.scrollOnCol(F);
      } else {
        const W = v(O, L, H), F = r(W, O, R);
        o.selectRange(L, F, H, P, k), o.scrollOnCol(F);
      }
    },
    selectMoveToLastColumn: (m) => {
      const R = o.getSelection(), { activeCell: S } = o;
      if (R == null || S == null) {
        console.warn("No selection warning");
        return;
      }
      const M = l();
      m && e || (m ? o.selectRange(R.top, S.col, R.bottom, M, S) : e ? o.selectRow(S.row, o.cell(S.row, M)) : o.selectCell(S.row, M), o.scrollOnCol(M));
    },
    selectMoveToFirstColumn: (m) => {
      const R = o.getSelection(), { activeCell: S } = o;
      if (R == null || S == null) {
        console.warn("No selection warning");
        return;
      }
      const M = i();
      m && e || (m ? o.selectRange(R.top, M, R.bottom, S.col, S) : e ? o.selectRow(S.row, o.cell(S.row, M)) : o.selectCell(S.row, M), o.scrollOnCol(M));
    },
    selectMoveToLastRow: (m) => {
      const R = o.getSelection(), { activeCell: S } = o;
      if (R == null || S == null) {
        console.warn("No selection warning");
        return;
      }
      const M = d();
      m && e || (m ? o.selectRange(S.row, R.left, M, R.right, S) : o.selectCell(M, S.col), o.scrollOnRow(M));
    },
    selectMoveToFirstRow: (m) => {
      const R = o.getSelection(), { activeCell: S } = o;
      if (R == null || S == null) {
        console.warn("No selection warning");
        return;
      }
      const M = u();
      m && e || (m ? o.selectRange(M, R.left, S.bottom, R.right, S) : o.selectCell(M, S.col), o.scrollOnRow(M));
    }
  };
}
class oc {
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
    if (this.hasKeyAction(e.key) && this.onStartKeyActionHook(e) !== !1) {
      if (this.keyMap[e.key])
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
    return !0;
  }
  onEndKeyActionHook(e) {
  }
}
const Yn = 10;
class Xo extends te {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const s = new oc(), { gridStateContext: r, hook: i } = n;
    s.onStartKeyActionHook = (g) => i.emitSync("keyAction", [g, g.key]), s.onEndKeyActionHook = (g) => {
      !g.ctrlKey && !g.shiftKey && g.key === " " && x() === !1 || C(g.key) || g.preventDefault();
    };
    const l = (g = !1) => {
      if (!r.isIdle) return;
      const E = e.activeCell?.mergeMain ?? e.activeCell;
      E && (e.scrollInView(E.row, E.col), e.forceLayoutTask(), e.doEditMode(E, g));
    };
    this._keyMiddleware.forEach(([g, E]) => s.addKeyAction(g, E));
    const u = new Xe(n.rowManager, n.columnManager), {
      selectNextActiveCell: d,
      selectNextSelection: c,
      selectBeforeActiveCell: a,
      selectMoveToFirstRow: h,
      selectMoveToFirstColumn: f,
      selectMoveToLastColumn: w,
      selectMoveToLastRow: I
    } = qo(e, this._rowSelection), b = (g) => (E) => {
      r.gridModeState.value.mode !== "edit-cell" && g(E);
    };
    this.addPluginSyncHook("cut", b((g) => e.onNativeCut(g))), this.addPluginSyncHook("copy", b((g) => e.onNativeCopy(g))), this.addPluginSyncHook("paste", b((g) => e.onNativePaste(g))), s.addKeyAction("Tab", (g) => (g.shiftKey ? a() : d(), !0)), s.addKeyAction("ArrowRight", (g) => (g.ctrlKey ? w(g.shiftKey) : c(0, 1, g.shiftKey), !0)), s.addKeyAction("ArrowUp", (g) => (g.ctrlKey ? h(g.shiftKey) : c(-1, 0, g.shiftKey), !0)), s.addKeyAction("ArrowLeft", (g) => (g.ctrlKey ? f(g.shiftKey) : c(0, -1, g.shiftKey), !0)), s.addKeyAction("ArrowDown", (g) => (g.ctrlKey ? I(g.shiftKey) : c(1, 0, g.shiftKey), !0)), s.addKeyAction("Home", (g) => (g.ctrlKey ? (f(g.shiftKey), h(g.shiftKey)) : f(g.shiftKey), !0)), s.addKeyAction("End", (g) => (g.ctrlKey ? (w(g.shiftKey), I(g.shiftKey)) : w(g.shiftKey), !0)), s.addKeyAction("PageUp", (g) => (c(-Yn, 0, g.shiftKey), !0)), s.addKeyAction("PageDown", (g) => (c(Yn, 0, g.shiftKey), !0)), s.addKeyAction("Enter", () => {
      const g = e.getSelection();
      return g && (g.top === e.getRowCount() - 1 ? (c(0, 1, !1), g.left !== e.getSelection()?.left && h(!1)) : c(1, 0, !1)), !0;
    }), s.addKeyAction("a", v), s.addKeyAction("A", v), s.addKeyAction("z", p), s.addKeyAction("Z", p), s.addKeyAction("y", _), s.addKeyAction("Y", _);
    function v(g) {
      return g.ctrlKey ? (e.selectAll(), g.preventDefault(), !1) : !0;
    }
    function p(g) {
      return g.ctrlKey ? (e.undo(), g.preventDefault(), !1) : !0;
    }
    function _(g) {
      return g.ctrlKey ? (e.redo(), g.preventDefault(), !1) : !0;
    }
    s.addKeyAction("F2", (g) => (l(), !0)), s.addKeyAction("Backspace", (g) => {
      const E = e.getSelection(), y = e.activeCell;
      return !E || !y || e.doEditMode(y, !0), !0;
    }), s.addKeyAction("Delete", (g) => {
      const E = e.getSelection();
      if (!E || u.getCanClearCellCount(E, (m) => e.onClearCellCheck(m)) === 0) return !0;
      const y = new Ko(e, [E, !0]);
      return e.commandManager.pushCommandBlock(new ke("Clear cells", y)), e.clearCells(E, !0), !0;
    }), s.addKeyAction(" ", (g) => {
      const E = e.getSelection();
      if (E === null) return !0;
      if (g.ctrlKey)
        return e.selectColumns(E.left, E.right), !0;
      if (g.shiftKey)
        return e.selectRows(E.top, E.bottom), !0;
      const y = [...u.getSelectionGenerator(E)];
      if (y.length === 0) return !0;
      const m = y[0], S = m.text === "true" ? "false" : "true", M = new ke("Typing space"), k = (L, H) => {
        M.pushCommand(new Ce(e, [L.row, L.col, { text: S }])), e.setText(L.row, L.col, S), H.onCheckboxClick(L.row, L.col, S === "true");
      }, T = (L, H) => {
        if (L.text === "true") return;
        const O = H.lastClickedRadio;
        O && M.pushCommand(new Ce(e, [O.row, O.col, { text: "false" }])), M.pushCommand(new Ce(e, [L.row, L.col, { text: "true" }])), e.setText(L.row, L.col, "true"), H.onRadioClick(L.row, L.col);
      };
      for (const L of y) {
        if (L.onCheckReadonly() || L.props.disabled) continue;
        const H = L.renderInstance;
        H instanceof Co && k(L, H), L === m && H instanceof zo && T(L, H);
      }
      return M.commandLength > 0 && e.commandManager.pushCommandBlock(M), !0;
    }), this.addPluginSyncHook("input", (g) => {
      r.gridModeState.isIdle && g.data && l(!0);
    }), this.addPluginSyncHook("keydown", (g) => {
      if (
        // editMode에서 온 입력은 pass
        !(!r.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!r.isIdle) {
          g.preventDefault();
          return;
        }
        if (!g.ctrlKey && C(g.key)) {
          l(!0);
          return;
        }
        s.startKeyAction(g);
      }
    });
    function x() {
      const g = e.getSelection();
      if (!g) return !1;
      for (const E of u.getSelectionGenerator(g))
        if (E.renderType === "checkbox" || E.renderType === "radio") return !0;
      return !1;
    }
    function C(g) {
      return g === "Process" || sc.test(g);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const sc = /^[\w]$/;
function Eu(o) {
  return new Xo(o ?? {});
}
class rc extends te {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let s = null;
    n.addEventListener("mousedown", (r) => {
      if (r.button !== 0) return;
      const i = Re("td", "tr", r.target);
      if (!i || i?.tagName === "TH") return;
      const l = ge(i);
      s = e.cell(l.row, l.col), e.selectRow(s.row, s);
    }), e.addGlobalEventListener(document, "mouseup", () => s = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function Tu() {
  return new rc();
}
const ic = /^\d+px$/;
function lc(o) {
  for (const e of o)
    if (typeof e == "string") {
      if (ic.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function ac(o) {
  let e = 0;
  for (const t of o)
    typeof t == "string" && (e += Yo(t));
  return e;
}
function Yo(o) {
  return parseInt(o.substring(0, o.length - 2), 10);
}
class cc extends te {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), lc(e), this._fixedColumnWidth = ac(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: s } = n, r = () => {
      const { clientWidth: u } = t;
      if (u === 0) return;
      const d = e.getColCount() - 1, c = u - d - this._fixedColumnWidth, a = z(e.getColCount()).reduce((w, I) => {
        if (!e.getColumnVisible(I)) return w;
        const b = this._columnWeightList[I];
        return b === void 0 ? w + 1 : typeof b == "number" ? w + b : w;
      }, 0);
      let h = 0;
      z(d).forEach((w) => {
        if (!e.getColumnVisible(w)) return;
        const I = this._columnWeightList[w] ?? 1;
        if (typeof I == "string" && I.endsWith("px")) {
          const b = Yo(I);
          e.setColumnWidth(w, b);
        } else if (typeof I == "number") {
          const b = I / a;
          e.setColumnWidth(w, Math.floor(b * c));
        }
        h += e.getColumnWidth(w);
      });
      const f = l();
      f && e.setColumnWidth(f, c - h + this._fixedColumnWidth);
    }, i = () => {
      try {
        s.pauseEmit("columnChanged"), r();
      } catch (u) {
        console.error(u);
      } finally {
        s.resumeEmit("columnChanged");
      }
    };
    s.addHook("resize", i), s.addHook("columnChanged", i), this.addRollbackTask(() => {
      s.removeHook("resize", i), s.removeHook("columnChanged", i);
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
function Mu(o) {
  return new cc(o ?? { columnWeight: [] });
}
class Zo extends te {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: s } = t.elements, r = {
      latestDragOverCell: null
    }, i = () => {
      s.classList.remove("is-dragging"), l();
    }, l = () => {
      r.latestDragOverCell && (r.latestDragOverCell.isDragOver = !1);
    }, u = (c) => {
      l(), r.latestDragOverCell = c, c.isDragOver = !0;
    }, d = () => s.classList.contains("is-dragging");
    s.addEventListener("mouseup", () => d() && i()), s.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), s.classList.add("is-dragging");
    }), s.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !s.classList.contains("is-dragging")) return;
      const a = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!a || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        a.dropDisabled !== !1 && // disabled
        (a.props.disabled === !0 || // readonly
        a.onCheckReadonly() === !0 || a.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(a, c) === !0 && (a !== r.latestDragOverCell && u(a), c.preventDefault());
    }), s.addEventListener("dragleave", (c) => {
      c.target === s ? i() : l();
    }), s.addEventListener("drop", (c) => {
      try {
        r.latestDragOverCell && e.onDropOnCell(r.latestDragOverCell.row, r.latestDragOverCell.col, c);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function Lu() {
  return new Zo();
}
const Zn = 10;
class uc extends te {
  _mountTask({ grid: e, gridStore: t }) {
    const { hook: n } = t, { table: s } = t.elements, r = {
      cell: null
    }, i = () => {
      r.cell = null, s.draggable = !1;
    }, l = (h) => {
      s.draggable = !0, r.cell = h;
    };
    n.addHook("contextMouseDown", c), n.addHook("contextMouseUp", u), n.addHook("contextDragStart", a), n.addHook("contextDragEnd", d), this.addRollbackTask(() => {
      n.removeHook("contextMouseDown", c), n.removeHook("contextMouseUp", u), n.removeHook("contextDragStart", a), n.removeHook("contextDragEnd", d);
    });
    function u(h) {
      i();
    }
    function d(h) {
      i();
    }
    function c(h) {
      if (h.button !== 0) return;
      const f = Re("td", "tr", h.target);
      if (!f) {
        i();
        return;
      }
      const w = ge(f), I = e.cell(w.row, w.col);
      h.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(w.row, w.col), I.props.draggable === !0 && I.props.object ? l(I) : i();
    }
    function a(h) {
      if (!h.dataTransfer || !r.cell || !e.onDragStartCell(r.cell, h)) {
        h.preventDefault();
        return;
      }
      h.dataTransfer.setDragImage(r.cell.element, Zn, Zn);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Hu() {
  return new uc();
}
const Jn = 10;
class Ou extends te {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: s = !0,
      enabledColumn: r = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: l, rowManager: u, gridStateContext: d } = n;
    let c = null, a = null;
    i.addEventListener("mousedown", h), i.addEventListener("dragstart", f), i.addEventListener("dragover", w), i.addEventListener("drop", I), i.addEventListener("dragleave", b), i.addEventListener("dragend", v), i.addEventListener("mouseup", v), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", h), i.removeEventListener("dragstart", f), i.removeEventListener("dragover", w), i.removeEventListener("drop", I), i.removeEventListener("dragleave", b), i.removeEventListener("dragend", v), i.removeEventListener("mouseup", v);
    });
    function h(C) {
      if (C.button !== 0 || t.classList.contains(ve)) return;
      const g = Re("th", "tr", C.target);
      if (!g) return;
      const E = ge(g), y = e.cell(E.row, E.col);
      if (y.cellType === "body-cell" || M(y)) return;
      p({
        direction: y.cellType,
        source: m(),
        cell: y
      });
      function m() {
        const { row: k, col: T } = y;
        return y.cellType === "row-header" ? [
          u.getStartOfRowId(k),
          u.getEndOfRowId(k)
        ] : [
          u.getStartOfColumnId(T),
          u.getEndOfColumnId(T)
        ];
      }
      function R(k) {
        return !s || k.row < e.getFreezedRowCount();
      }
      function S(k) {
        return !r || k.col < e.getFreezedColumnCount();
      }
      function M(k) {
        return k.cellType === "row-header" && R(k) || k.cellType === "col-header" && S(k);
      }
    }
    function f(C) {
      if (!C.dataTransfer || !c) {
        C.preventDefault();
        return;
      }
      d.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), C.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), C.dataTransfer.setDragImage(c.cell.element, Jn, Jn);
    }
    function w(C) {
      if (!c || !C.dataTransfer || !C.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const g = e.findCellOrNull(C.offsetY, C.offsetX);
      if (!g || !g.isHeaderCell || c.direction === "row-header" && E(g, c) || c.direction === "col-header" && y(g, c)) {
        _(), a = g;
        return;
      }
      g !== a && x(g, c.direction), C.preventDefault();
      function E(m, R) {
        return m.row === R.cell.row || m.row < e.getFreezedRowCount() || l.checkConflictingInRows(m.row, m.row);
      }
      function y(m, R) {
        return m.col === R.cell.col || m.col < e.getFreezedColumnCount() || l.checkConflictingInColumns(m.col, m.col);
      }
    }
    function I() {
      const C = c, g = a;
      !C || !g || (_(), C.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(C.source, [g.row, g.row]);
      }), e.forceLayoutTask(), e.selectRow(C.cell.row)), C.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(C.source, [g.col, g.col]);
      }), e.forceLayoutTask(), e.selectColumn(C.cell.col)));
    }
    function b() {
      _(), a = null;
    }
    function v() {
      i.classList.remove("is-dragging"), _(), c = null, i.draggable = !1, a = null, d.setIdle();
    }
    function p({ direction: C, source: g, cell: E }) {
      i.draggable = !0, c = {
        direction: C,
        source: g,
        cell: E
      };
    }
    function _() {
      if (!a || !c) return;
      const { direction: C } = c, g = C === "row-header" ? e.headerColumns : e.headerRows;
      for (let E = 0; E < g; E++)
        C === "row-header" ? e.cell(a.row, E).element.classList.remove("is-dragging") : e.cell(E, a.col).element.classList.remove("is-dragging");
    }
    function x(C, g) {
      _(), a = C;
      const E = g === "row-header" ? e.headerColumns : e.headerRows;
      for (let y = 0; y < E; y++)
        g === "row-header" ? e.cell(C.row, y).element.classList.add("is-dragging") : e.cell(y, C.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const Jo = 8, dc = {
  normal: Rr,
  error: _r
}, Qn = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || Gr(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      jr({
        mainAxis: Jo,
        crossAxis: n ?? 0
      }),
      Ur(),
      Kr({ padding: 5 })
    ]
  }).then(({ x: s, y: r, placement: i }) => {
    e.style.left = `${s}px`, e.style.top = `${r}px`, e.dataset.placement = i;
  });
}, hc = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", fc = (o) => o.cellInfo.memo ?? "";
class gc extends te {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = wr;
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
      hideTooltipWhenHasMemo: s
    } = this.options, {
      hasMemo: r,
      memoIntent: i = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? hc(e), d = this.options.getMemoText?.(e) ?? fc(e), c = () => {
      this._tooltipElement.textContent = u, Ve("popover").appendChild(this._tooltipElement), Qn(e.element, this._tooltipElement, "bottom");
    }, a = () => {
      this._memoElement.textContent = d ?? "", this._memoElement.className = `${Cr} ${dc[i]}`, Ve("popover").appendChild(this._memoElement), Qn(e.element, this._memoElement, "right-start", Jo);
    }, h = !(r && s) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, f = r && d ? window.setTimeout(() => a(), t) : -1;
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
    const { gridStateContext: s } = t, r = () => this.context?.cleanup(), i = (l) => {
      if (!He(l.target)) return;
      const u = Re("td,th", "tr", l.target);
      if (!u) {
        r();
        return;
      }
      const d = ge(u), c = e.cell(d.row, d.col);
      this.context?.targetCell !== c && (r(), this.context = this.createContext(c));
    };
    s.gridModeState.addSubscription((l, { mode: u }) => {
      n.removeEventListener("mousemove", i), r(), (u === "idle" || u === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "mouseleave", r), e.addGlobalEventListener(n, "scroll", r), this.addRollbackTask(() => {
      r(), n.removeEventListener("mouseleave", r), n.removeEventListener("scroll", r);
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const eo = 10;
class Au extends te {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: s, gridStateContext: r } = n, { table: i } = n.elements, l = document.createElement("div");
    l.className = xr;
    let u = null, d = -1;
    i.addEventListener("mousedown", c), i.addEventListener("dragstart", a), i.addEventListener("dragover", h), i.addEventListener("drop", f), i.addEventListener("dragleave", w), i.addEventListener("dragend", I), i.addEventListener("mouseup", I), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", c), i.removeEventListener("dragstart", a), i.removeEventListener("dragover", h), i.removeEventListener("drop", f), i.removeEventListener("dragleave", w), i.removeEventListener("dragend", I), i.removeEventListener("mouseup", I);
    });
    function c(_) {
      if (_.button !== 0 || t.classList.contains(ve)) return;
      const x = Re("th", "tr", _.target);
      if (!x) return;
      const C = ge(x), g = e.cell(C.row, C.col);
      if (E(g)) return;
      Object.assign(_, { __IGNORE_HEADER_SELECT__: !0 }), b({
        source: [
          s.getStartOfRowId(g.row),
          s.getEndOfRowId(g.row)
        ],
        cell: g
      });
      function E(y) {
        return y.cellType !== "row-header" || y.row < e.getFreezedRowCount() || y.row < e.headerRows;
      }
    }
    function a(_) {
      const { offsetY: x, offsetX: C } = _;
      if (e.findCellOrNull(x, C)?.cellType === "row-header") {
        if (!_.dataTransfer || !u) {
          _.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), _.dataTransfer.effectAllowed = "move", _.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), _.dataTransfer.setData("ir-grid/move-rows-dragging", ""), _.dataTransfer.setDragImage(u.cell.element, eo, eo);
      }
    }
    function h(_) {
      const { dataTransfer: x, offsetY: C, offsetX: g } = _;
      if (!u || !x || !x.types.includes("ir-grid/move-rows-dragging")) return;
      const E = e.findCellOrNull(C, g);
      if (!E) return;
      const y = m(E.row);
      if (E.cellType !== "row-header" || R(y, u)) {
        v(), d = -1;
        return;
      }
      y !== d && p(y, E.col), _.preventDefault();
      function m(S) {
        const M = e.getRow(S), k = C - M.top < M.height / 2;
        return M.rowId + (k ? 0 : 1);
      }
      function R(S, M) {
        const [k, T] = M.source;
        return S >= k && S <= T || S < e.headerRows;
      }
    }
    function f() {
      const _ = u, x = d;
      !_ || x < 0 || (v(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(_.source, x);
      }), e.forceLayoutTask(), e.selectRow(_.cell.row));
    }
    function w() {
      v(), d = -1;
    }
    function I() {
      i.classList.remove("is-dragging"), v(), u = null, i.draggable = !1, d = -1, r.setIdle();
    }
    function b({ source: _, cell: x }) {
      i.draggable = !0, u = {
        source: _,
        cell: x
      };
    }
    function v() {
      d < 0 || !u || l.remove();
    }
    function p(_, x) {
      v(), d = _;
      const C = Math.min(d, s.length - 1), g = e.getRow(C), E = g.getCell(x).element.getBoundingClientRect(), y = {
        top: E.top,
        height: 16
      }, m = y.height / 2;
      _ === s.length && (y.top += g.height, y.height = m + 1), l.style.top = `${y.top - m}px`, l.style.left = `${E.left}px`, l.style.width = `${e.headerWidth}px`, l.style.height = `${y.height}px`, Ve("popover").appendChild(l);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const to = 10;
class Fu extends te {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: s, columnManager: r, gridStateContext: i } = n, { table: l } = n.elements, u = document.createElement("div");
    u.className = yr;
    let d = null, c = -1;
    l.addEventListener("mousedown", a), l.addEventListener("dragstart", h), l.addEventListener("dragover", f), l.addEventListener("drop", w), l.addEventListener("dragleave", I), l.addEventListener("dragend", b), l.addEventListener("mouseup", b), this.addRollbackTask(() => {
      l.removeEventListener("mousedown", a), l.removeEventListener("dragstart", h), l.removeEventListener("dragover", f), l.removeEventListener("drop", w), l.removeEventListener("dragleave", I), l.removeEventListener("dragend", b), l.removeEventListener("mouseup", b);
    });
    function a(x) {
      if (x.button !== 0 || t.classList.contains(ve)) return;
      const C = Re("th", "tr", x.target);
      if (!C) return;
      const g = ge(C), E = e.cell(g.row, g.col);
      if (y(E)) return;
      Object.assign(x, { __IGNORE_HEADER_SELECT__: !0 }), v({
        source: [
          s.getStartOfColumnId(E.col),
          s.getEndOfColumnId(E.col)
        ],
        cell: E
      });
      function y(m) {
        return m.cellType !== "col-header" || m.col < e.getFreezedColumnCount() || m.col < e.headerColumns;
      }
    }
    function h(x) {
      const { offsetY: C, offsetX: g } = x;
      if (e.findCellOrNull(C, g)?.cellType === "col-header") {
        if (!x.dataTransfer || !d) {
          x.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), l.classList.add("is-dragging"), x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), x.dataTransfer.setData("ir-grid/move-columns-dragging", ""), x.dataTransfer.setDragImage(d.cell.element, to, to);
      }
    }
    function f(x) {
      const { dataTransfer: C, offsetY: g, offsetX: E } = x;
      if (!d || !C || !C.types.includes("ir-grid/move-columns-dragging")) return;
      const y = e.findCellOrNull(g, E);
      if (!y) return;
      const m = R(y.col);
      if (y.cellType !== "col-header" || S(m, d)) {
        p(), c = -1;
        return;
      }
      m !== c && _(y.row, m), x.preventDefault();
      function R(M) {
        const k = e.getColumn(M), T = E - k.left < k.width / 2;
        return k.columnId + (T ? 0 : 1);
      }
      function S(M, k) {
        const [T, L] = k.source;
        return M >= T && M <= L || M < e.headerColumns;
      }
    }
    function w() {
      const x = d, C = c;
      !x || C < 0 || (p(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(x.source, C);
      }), e.forceLayoutTask(), e.selectColumn(x.cell.col));
    }
    function I() {
      p(), c = -1;
    }
    function b() {
      l.classList.remove("is-dragging"), p(), d = null, l.draggable = !1, c = -1, i.setIdle();
    }
    function v({ source: x, cell: C }) {
      l.draggable = !0, d = {
        source: x,
        cell: C
      };
    }
    function p() {
      c < 0 || !d || u.remove();
    }
    function _(x, C) {
      p(), c = C;
      const g = Math.min(c, r.length - 1), E = e.getColumn(g), y = e.cell(x, g);
      if (!y.isConnected) return;
      const m = y.element.getBoundingClientRect(), R = {
        left: m.left,
        width: 12
      }, S = R.width / 2;
      C === r.length && (R.left += E.width, R.width = S + 1), u.style.top = `${m.top}px`, u.style.left = `${R.left - S}px`, u.style.height = `${e.headerHeight}px`, u.style.width = `${R.width}px`, Ve("popover").appendChild(u);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const mc = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
], pc = fn(D.minWidth), wc = fn(D.minHeight);
function Cc() {
  const o = Oe("div", vr), e = [];
  for (const n of mc)
    if (n.type === "divider") {
      const s = Oe("div", kr);
      o.append(s);
    } else {
      const s = Oe("button", Ir), r = nn(`ir-icon--chevron-${n.value}`);
      s.dataset.type = n.type, s.append(r), s.onclick = () => t.onButtonClick(n.value), s.setAttribute("data-ir-tooltip", ""), s.setAttribute("data-ir-tooltip-text", J.t("gridOverflowPanel." + n.value)), o.append(s), e.push(s);
    }
  const t = {
    buttonGroup: o,
    visibleButtonGroup(n, s) {
      o.style.display = n || s ? "" : "none";
      for (const r of e) {
        const l = r.dataset.type === "row" ? n : s;
        r.style.display = l ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class zu extends te {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: s, columnManager: r } = n, i = Oe("div", br), l = Oe("div", Sr), u = Cc(), d = $r({
      containerElement: u.buttonGroup,
      placement: "right",
      offset: 8
    });
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const c = {
      up() {
        const b = h(l.scrollTop);
        if (!b) return;
        const v = b.rowId - 1, p = v < 0 ? 0 : e.getRow(v).top;
        l.scrollTop = p;
      },
      down() {
        const b = h(l.scrollTop);
        b && (l.scrollTop = b.bottom);
      },
      left() {
        const b = f(l.scrollLeft);
        if (!b) return;
        const v = b.columnId - 1, p = v < 0 ? 0 : e.getColumn(v).left;
        l.scrollLeft = p;
      },
      right() {
        const b = f(l.scrollLeft);
        b && (l.scrollLeft = b.right);
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
    u.onButtonClick = (b) => c[b](), t.insertAdjacentElement("beforebegin", i), l.appendChild(t), i.append(l), i.append(u.buttonGroup), e.afterRender(() => {
      w(s.freezedRowsHeight, s.freezedRows), I(r.fixedColumnsWidth, r.freezedColumns);
    }), n.hook.addHook("resize", a), n.hook.addSyncHook("changedFreezedRowHeight", w), n.hook.addSyncHook("changedFreezedColumnWidth", I), this.addRollbackTask(() => {
      d.destroy(), n.hook.removeHook("resize", a), n.hook.removeSyncHook("changedFreezedRowHeight", w), n.hook.removeSyncHook("changedFreezedColumnWidth", I);
    }), this.addRollbackTask(() => {
      const b = i.nextElementSibling;
      b ? b.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function a() {
      const b = parseInt(t.style.getPropertyValue(pc)), v = parseInt(t.style.getPropertyValue(wc));
      u.visibleButtonGroup(
        v >= l.clientHeight,
        b >= l.clientWidth
      );
    }
    function h(b) {
      let v = 0, p = s.visibleRowList.length - 1;
      for (; v <= p; ) {
        const _ = v + Math.floor((p - v) / 2), x = s.visibleRowList[_];
        if (b >= x.top && b < x.bottom)
          return x;
        b < x.top ? p = _ - 1 : v = _ + 1;
      }
      return null;
    }
    function f(b) {
      let v = 0, p = r.visibleColumnList.length - 1;
      for (; v <= p; ) {
        const _ = v + Math.floor((p - v) / 2), x = r.visibleColumnList[_];
        if (b >= x.left && b < x.right)
          return x;
        b < x.left ? p = _ - 1 : v = _ + 1;
      }
      return null;
    }
    function w(b, v) {
      const p = v, _ = b + (p < e.getRowCount() ? s.getRowHeight(p) : 0) + (x() ? _n : 0);
      he(t, {
        [D.minHeight]: `${_}px`
      }), a();
      function x() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-horizontal-scroll");
      }
    }
    function I(b, v) {
      const p = v, _ = b + (p < e.getColCount() ? e.getColumnWidth(p) : 0) + (x() ? _n : 0);
      he(t, {
        [D.minWidth]: `${_}px`
      }), a();
      function x() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
class Du extends te {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      onRowClick: s,
      freezeLastColumn: r,
      multipleSelect: i = !1,
      selectOnRightClick: l = !1
    } = this._args, { hook: u, columnManager: d } = n, { visibleColumnList: c } = d, a = this.setPluginAPI(new _c(e, i)), h = /* @__PURE__ */ new Set([0]);
    if (l && h.add(2), t.classList.add(Rn), r) {
      t.classList.add(xn);
      const _ = n.getThemeValue("grid.forceRenderRightCol");
      n.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), u.addSyncHook("cellLayout", w), u.addSyncHook("postRenderCell", I), this.addRollbackTask(() => {
        n.setGridConfig({ "grid.forceRenderRightCol": _ }), u.removeSyncHook("cellLayout", w), u.removeSyncHook("postRenderCell", I);
      });
    }
    const f = (_) => e.onNativeCopy(_);
    u.addBeginHook("contextMouseDown", b), u.addHook("contextMouseDown", v), u.addHook("renderRowElement", p), e.addGlobalEventListener(t, "copy", f), this.addRollbackTask(() => {
      a.clearAllSelections(), t.classList.remove(Rn, xn), u.removeHook("contextMouseDown", b), u.removeHook("contextMouseDown", v), u.removeHook("renderRowElement", p), t.removeEventListener("copy", f);
    });
    function w(_, x, C) {
      // 가로 scroll이 안생겼다면 리턴
      e.width <= t.clientWidth || // 마지막 열이 아니면 리턴
      x < c.length - 1 || (C.left = e.scrollRight - C.width);
    }
    function I(_) {
      _.isHeaderCell || _.col < c.length - 1 || (_.element.style.zIndex = D.zLevel3);
    }
    function b(_) {
      _.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function v(_) {
      if (!h.has(_.button) || _.target instanceof HTMLButtonElement) return;
      const x = _.target.closest("td");
      if (!x) return;
      const C = ge(x), g = e.cell(C.row, C.col);
      g.cellType === "body-cell" && (a.runMouseDownTask(g, _), s?.(e, g.row, _));
    }
    function p(_, x) {
      x.classList.toggle(Er, a.isRowSelected(_.rowId, !0));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class _c {
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
    return n && (this.addSelectedRows(z(n.top, n.bottom + 1).asList()), this._grid.releaseCells()), this.isRowSelected(e.row) ? this.removeSelectedRow(e.row) : this._grid.selectRow(e.row, e), !0;
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
function Rc(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return xc;
  const { metaInfo: t } = o, { operand: n, operator: s } = e, r = () => {
    const d = n.map((a) => parseFloat(a)), c = new Set(d);
    switch (s) {
      case "equals":
        return Me((a) => c.has(a));
      case "not-equals":
        return Me((a) => !c.has(a));
      case "less-than":
        return Me((a) => d.some((h) => a < h));
      case "less-than-or-equal":
        return Me((a) => d.some((h) => a <= h));
      case "greater-than":
        return Me((a) => d.some((h) => a > h));
      case "greater-than-or-equal":
        return Me((a) => d.some((h) => a >= h));
      case "in-range":
        return Me((a) => d[0] <= a && a <= d[1]);
      case "blank":
        return Bt;
      default:
        return Qe;
    }
  }, i = () => {
    const { format: d } = t;
    if (!d) throw new Error("format is required for date type column");
    const c = n.map((h) => bc(h, d));
    switch (s) {
      case "equals":
        return a((h) => c.some((f) => h.isSame(f)));
      case "not-equals":
        return a((h) => c.every((f) => !h.isSame(f)));
      case "greater-than":
        return a((h) => c.some((f) => h.isAfter(f)));
      case "greater-than-or-equal":
        return a((h) => c.some((f) => h.isSameOrAfter(f)));
      case "less-than":
        return a((h) => c.some((f) => h.isBefore(f)));
      case "less-than-or-equal":
        return a((h) => c.some((f) => h.isSameOrBefore(f)));
      case "in-range":
        return a((h) => h.isBetween(c[0], c[1], null, "[]"));
      case "blank":
        return Bt;
      default:
        return Qe;
    }
    function a(h) {
      return (f) => {
        const w = be(f, d);
        return w.isValid() ? h(w) : !1;
      };
    }
  }, l = () => {
    const d = new Set(n);
    switch (s) {
      case "equals":
        return (c) => d.has(c);
      case "not-equals":
        return (c) => !d.has(c);
      case "contains":
        return (c) => n.some((a) => c.includes(a));
      case "not-contains":
        return (c) => !n.some((a) => c.includes(a));
      case "starts-with":
        return (c) => n.some((a) => c.startsWith(a));
      case "ends-with":
        return (c) => n.some((a) => c.endsWith(a));
      case "blank":
        return Bt;
      default:
        return Qe;
    }
  }, u = () => {
    const d = new Set(n.map((c) => c === "true"));
    switch (s) {
      case "equals":
        return no((c) => d.has(c));
      case "not-equals":
        return no((c) => !d.has(c));
      default:
        return Qe;
    }
  };
  switch (t.textType) {
    case "number":
      return r();
    case "date":
      return i();
    case "string":
      return l();
    case "checked":
      return u();
    default:
      return Qe;
  }
}
function Bt(o) {
  return o === "";
}
function Qe() {
  return !1;
}
function xc() {
  return !0;
}
const yc = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function Me(o) {
  return (e) => yc.test(e) ? o(parseFloat(e)) : !1;
}
function no(o) {
  return (e) => o(e === "true");
}
function bc(o, e) {
  const t = be(o, e);
  return t.isValid() ? t : be(o.replace(/[-/]/g, ""), e.replace(/[-/]/g, ""));
}
const Sc = (o) => {
  let e = null, t = !0, n = Object.freeze(o.getSnapshotRows());
  return {
    saveSnapshot: s,
    get enabledColumnClick() {
      return t;
    },
    set enabledColumnClick(r) {
      t = r;
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
    compareTo(r, i) {
      return hn(r.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${o.uuid}`), o.onColumnClick = (r) => {
        t && this.toggleSortColumn(r);
      };
    },
    sortColumn(r, i) {
      o.sort((l, u) => this.compareTo(l.getCell(r), u.getCell(r)), i);
    },
    toggleSortColumn(r) {
      if (o.className.indexOf(ve) >= 0)
        return;
      if (r.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      e || s();
      const i = r.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== r && this.clearSortOrder(), e = r, r.cellInfo = { sortOrder: i }, this.sortColumn(r.col, i);
    }
  };
  function s() {
    n = Object.freeze(o.getSnapshotRows());
  }
};
var vc = Object.defineProperty, kc = Object.getOwnPropertyDescriptor, gn = (o, e, t, n) => {
  for (var s = kc(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && vc(e, t, s), s;
};
const Vt = Object.freeze({
  textType: "string",
  enabled: !0
});
class Lt {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = Sc(e), this._defaultDateFormat = J.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, s]) => this._filterMap.set(parseInt(n, 10), { metaInfo: s }));
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
    const n = this._grid, s = `${t}`, r = n.getSnapshotRows().slice(n.headerRows).filter((i) => !i.filtered && `${i.getCell(e).text === "true"}` !== s);
    r.length !== 0 && n.commandManager.doRecording(`check all to ${t}`, () => {
      for (const i of r)
        n.setCell(i.rowId, e, { text: s });
    });
  }
  get columnSortManager() {
    return this._columnSortManager;
  }
  get dropdownId() {
    return `rowFilterDropdown__${this._grid.uuid}`;
  }
  getColumnMetaInfo(e) {
    return this._filterMap.get(e)?.metaInfo ?? Vt;
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
      metaInfo: Vt,
      filterOption: e
    });
  }
  setSortOrder(e, t, n) {
    const s = this._grid.cell(e, t);
    s.props = { sortOrder: n === "ASC" ? "DESC" : "ASC" }, this.columnSortManager.toggleSortColumn(s);
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
    const t = this._filterMap.get(e) ?? { metaInfo: Vt };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), Rc(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: s }) => s(t.getCell(n).text))
    );
  }
}
gn([
  mn()
], Lt.prototype, "clearFilters");
gn([
  mn()
], Lt.prototype, "removeColFilter");
gn([
  mn()
], Lt.prototype, "setColFilter");
function mn() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...s) {
      const r = n.apply(this, s);
      return this._applyFilter(), r;
    }, t;
  };
}
class Pu extends te {
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: t, gridStore: n } = e, s = this.setPluginAPI(new Lt(t, this._args?.columnMetaInfo ?? {})), r = (l, u, d) => {
      (d === "insertColumns" || d === "removeColumns") && s.clearFilters();
    }, i = (l) => {
      document.getElementById(s.dropdownId)?.isConnected && (l.__IGNORE_GRID_FOCUS__ = !0);
    };
    n.hook.addHook("columnChanged", r), n.hook.addHook("contextMouseUp", i), this.addRollbackTask(() => {
      s.clearFilters(), s.clearSortOrder(), n.hook.removeHook("columnChanged", r), n.hook.removeHook("contextMouseUp", i);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
function Ic(o, e) {
  const t = new Set(e.allowCellRenderType ?? ["default", "select", "datePicker", "custom"]), n = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let s = !1, r = 0, i = 0;
  const l = {
    setRow(f) {
      r = f;
    },
    setCol(f) {
      i = f;
    }
  }, u = () => n.hasHeaderRows ? 0 : o.headerRows, d = () => n.hasHeaderColumns ? 0 : o.headerColumns;
  function* c() {
    l.setRow(u()), l.setCol(d());
    const f = o.getSelection();
    for (s = !1; ; ) {
      switch (n.area) {
        case "all":
          yield o.cell(r, i);
          break;
        case "selected-col":
          if (!f) throw new Error("No selection in finding");
          wo(i, f) && (yield o.cell(r, i));
          break;
        case "selected-row":
          if (!f) throw new Error("No selection in finding");
          po(r, f) && (yield o.cell(r, i));
          break;
        case "selection":
          if (!f) throw new Error("No selection in finding");
          yn(r, i, f) && (yield o.cell(r, i));
          break;
        case "custom":
          if (!n.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          yn(r, i, n.customRange) && (yield o.cell(r, i));
          break;
      }
      if (w()) break;
    }
    function w() {
      const I = n.direction;
      if (I === "by-columns" || I === "left-right") {
        if (++r, r >= o.getRowCount() && (++i, r = u()), i >= o.getColCount())
          if (s)
            s = !1, r = u(), i = d();
          else return !0;
      } else if (++i, i >= o.getColCount() && (++r, i = d()), r >= o.getRowCount())
        if (s)
          s = !1, r = u(), i = d();
        else return !0;
    }
  }
  function a(f) {
    if (!t.has(f.renderType)) return !1;
    const w = n.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), I = n.matchAll ? `^${w}$` : w, b = n.ignoreCase ? "i" : "", v = new RegExp(I, b);
    return e.onCellCheck ? e.onCellCheck(v, f) : v.test(f.text);
  }
  let h = c();
  return {
    resetCursor() {
      h = c();
    },
    findNext(f) {
      for (mo(n, f) || (h = c()), Object.assign(n, f); ; ) {
        const w = h.next();
        if (!w.done && w.value && a(w.value))
          return s = !0, w.value;
        if (w.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(f) {
      const w = [];
      f && Object.assign(n, f);
      for (const I of c())
        a(I) && w.push(I);
      return w;
    },
    setCursor(f, w) {
      if (f < 0 || w < 0) throw new Error("row or col must be greater than or equal to 0");
      l.setRow(f), l.setCol(w);
    }
  };
}
function Gt(o) {
  if (!(o instanceof Function))
    throw new Error("func is not a function");
  try {
    return o();
  } catch (e) {
    console.error(e);
  }
}
class Ec extends q {
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
class Tc extends q {
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
class Mc extends q {
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
function Qo(o, e) {
  const [t, n] = o, [s, r] = e, i = n - t, l = r - s;
  return i === l ? [e, o] : t < s ? [[r - i, r], [t, t + l]] : [[s, s + i], [n - l, n]];
}
class Lc extends q {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Qo(...this._args));
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
class Hc extends q {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Qo(...this._args));
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
class Oc extends q {
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
class Ac extends q {
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
class Fc extends q {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: s, text: r }) => {
      this._instance.setText(n, s, r);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new Xe(this._instance, this._instance), [t, n, s, r] = this._args, i = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: s, right: r }))
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
function es(o, e) {
  const [t, n] = o, s = n - t;
  return t < e ? [[e - s - 1, e - 1], t] : [[e, e + s], n + 1];
}
class zc extends q {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...es(this._args[0], this._undoContext.targetId));
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
class Dc extends q {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...es(this._args[0], this._undoContext.targetId));
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
class Pc extends q {
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
    const e = new Mt(this._instance), [t, n] = this._args;
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
class Wc extends q {
  _undo() {
    this._instance.forceLayoutTask(), this._instance.insertRowByList(this._undoContext.removedRows), this._undoContext.removedRows.forEach((e) => {
      const t = e.rowId;
      for (let n = 0; n < e.cellCounts; n++) {
        const s = e.getCell(n);
        (s.mergeInfo.rowSpan > 1 || s.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          t,
          s.col,
          s.bottom,
          s.right
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
    const [e, t, n] = this._args, s = z(e, t + 1).map((r) => this._instance.getRow(r));
    return {
      removedRows: n?.ignoreFiltered === !0 ? s.filter((r) => !r.filtered) : s,
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
class $c extends q {
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
class Nc extends q {
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
class Bc extends q {
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
class Vc extends q {
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
const oo = {
  addRow: Tc,
  addColumn: Ec,
  setCell: Ce,
  clearCells: Ko,
  setRowHeight: Go,
  setColumnWidth: $c,
  insertRows: Ac,
  insertColumns: Oc,
  setRowVisible: Nc,
  setColumnVisible: Mc,
  mergeCells: Fc,
  splitCells: Vc,
  removeRows: Wc,
  removeColumns: Pc,
  exchangeRows: Lc,
  exchangeColumns: Hc,
  moveRows: zc,
  moveColumns: Dc,
  setCellRenderer: Bc
};
function Gc(o) {
  if (!(o in oo)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return oo[o];
}
function jc(o) {
  if (o === K.name)
    return Gc;
}
function Uc(o, e, t, n, s) {
  const r = jc(e);
  if (!r) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = r(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  o.pushCommand(new i(n, s));
}
function X() {
  return function(e, t, n) {
    const s = n.value;
    return n.value = function(...r) {
      const { commandManager: i } = this;
      return i ? i.isRecording && Uc(i, this.constructor.name, t, this, r) : console.warn("No commandManager in this context"), s.apply(this, r);
    }, n;
  };
}
function jt(o) {
  if (!(o.target instanceof HTMLElement)) return null;
  const e = o.target.closest("td,th");
  return e ? ge(e) : null;
}
var Kc = Object.defineProperty, qc = Object.getOwnPropertyDescriptor, Y = (o, e, t, n) => {
  for (var s = qc(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && Kc(e, t, s), s;
};
const Ut = new cn(), Xc = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), Yc = Object.freeze({
  colSpan: !1,
  rowSpan: !1,
  skipFiltered: !0
}), so = {}, Zc = [
  "text/html",
  "text/plain"
];
function Jc() {
  return [
    new Xo({}),
    new Uo(),
    new Zo(),
    new jo({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new gc({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class K extends Zr {
  _colHeaderInfo;
  _rowHeaderInfo;
  _bodyInfo;
  _plugins = [];
  _defaultColumnCellFormat;
  // IRGrid Util
  _scheduleManager;
  _gridStore;
  _gridRangeUtils = new Mt(this);
  _generator;
  _selector;
  _copyOptions;
  _pasteOptions;
  _readonly = !1;
  _rowSeq = 0;
  /**
   * `IRGrid`는 `class`형태로 제공된다. 그러므로, `new` 키워드를 이용하여 생성자 인자에 맞는 객체 인스턴스를 생성하여 사용한다. 생성자 인자는 `IRGridArgs`라는 단일 타입으로 정의되어 있다.
   * @param args
   */
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: s,
      defaultColumnCellFormat: r,
      plugins: i
    } = e;
    if (this._defaultColumnCellFormat = {
      all: {
        editable: !0,
        text: ""
      }
    }, this._copyOptions = {
      ...Xc,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...Yc,
      ...e.copyOptions,
      ...e.pasteOptions
    }, r)
      for (const [a, h] of Object.entries(r))
        this._defaultColumnCellFormat[a] = Object.assign(this._defaultColumnCellFormat[a] || {}, h);
    this._gridStore = new Ha(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new zr({ context: this }),
        gridStateContext: new Na(this),
        cursorManager: qo(this, !1)
      }
    ), this._initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: Ut,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      /**
       * cellRenderer 설명
       */
      cellRenderer: Ut,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: Ut
    }, s), this.contextElement.classList.add(Tr, Mr), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l } = this._gridStore.elements, { gridStateContext: u } = this._gridStore;
    this.contextElement.appendChild(l);
    let d = {
      offsetWidth: 0,
      offsetHeight: 0,
      className: ""
    }, c = !1;
    this.resizeObserve(() => {
      if (c) return;
      const { offsetHeight: a, offsetWidth: h, className: f } = this.contextElement;
      d.offsetWidth === h && d.offsetHeight === a && d.className === f || (d = { offsetWidth: h, offsetHeight: a, className: f }, c = !0, this._gridStore.hook.emit("resize", []).finally(() => {
        c = !1, this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      }));
    }), this.addCoreElement(l), this._generator = new Xe(this._rowManager, this._colManager), this._selector = new Xa(this, u, l), this._scheduleManager = new Qa({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? Jc()), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && (a?.activeCell.deactivate(), h?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((a, h) => {
      a.forEach((f) => f.deactivate()), h.forEach((f) => f.activate());
    }), u.selectionRangeState.addSubscription((a, h) => {
      h ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(h.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && Gt(() => this.onChangeCell(h?.activeCell ?? null)), Gt(h ? () => this.onSelectCell(h.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((a, h) => {
      this.onSelectChanged(h?.range ?? null, a?.range ?? null);
    }), u.selectionRangeState.addSubscription((a, h) => {
      h?.activeCell && this._gridStore.gridTextarea.setPosition(h.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((a, h) => {
      this.contextElement.dataset.mode = h.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (a) => this.hook.emit("contextMenu", [a])), this.addGlobalEventListener(this.contextElement, "focus", (a) => this.hook.emit("contextFocus", [a])), this.addGlobalEventListener(this.contextElement, "blur", (a) => this.hook.emit("contextBlur", [a])), this.addGlobalEventListener(this.contextElement, "dragstart", (a) => this.hook.emit("contextDragStart", [a])), this.addGlobalEventListener(this.contextElement, "dragend", (a) => this.hook.emit("contextDragEnd", [a])), this.addGlobalEventListener(this.contextElement, "scroll", (a) => {
      this.hook.emitSync("contextScroll", [a, this.scrollTop, this.scrollLeft]);
    }, { passive: !1 }), this.addGlobalEventListener(this.contextElement, "cut", (a) => this.hook.emitSync("cut", [a])), this.addGlobalEventListener(this.contextElement, "copy", (a) => this.hook.emitSync("copy", [a])), this.addGlobalEventListener(this.contextElement, "paste", (a) => this.hook.emitSync("paste", [a])), this.addGlobalEventListener(this.contextElement, "input", (a) => this.hook.emitSync("input", [a]), !0), this.addGlobalEventListener(this.contextElement, "keydown", (a) => this.hook.emitSync("keydown", [a]), !0), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emit("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mousemove", (a) => this.hook.emit("contextMouseMove", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emit("contextMouseUp", [a])), this.addGlobalEventListener(this.contextElement, "click", (a) => this.hook.emitSync("contextClick", [a])), this.addGlobalEventListener(this.contextElement, "dblclick", (a) => this.hook.emitSync("contextDoubleClick", [a])), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emitSync("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emitSync("contextMouseUp", [a])), this.hook.addBeginHook("contextMenu", (a) => void a.preventDefault()), this.hook.addEndHook("contextMenu", (a) => {
      const { y: h, x: f } = ti(a);
      this.onContextMenu(a, this.findCellOrNull(h, f));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this.hook.addSyncHook("cellRightClick", (a, h) => this.onCellRightClick(h, a)), this.hook.addSyncHook("cellClear", (a) => this.onClearCell(a)), this.hook.addSyncHook("cellDblClick", (a) => this.onDoubleClickCell(a)), this.hook.addSyncHook("cellSelect", (a) => this.selectCell(a.row, a.col)), this.hook.addSyncHook("cellClick", (a) => {
      this.contextElement.classList.contains(ve) || (a.cellType === "row-header" && this.onRowClick(a), a.cellType === "col-header" && this.onColumnClick(a));
    }), this.hook.addSyncHook("contextMouseUp", (a) => {
      if (a.button !== 2) return;
      const h = jt(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onRightClick(f, a);
      }
    }), this.hook.addSyncHook("contextClick", (a) => {
      const h = jt(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onClick(f);
      }
    }), this.hook.addSyncHook("contextDoubleClick", (a) => {
      if (!He(a.target) || a.target.tagName === "I" || a.target.tagName === "TEXTAREA") return;
      const h = jt(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onDblClick(f);
      }
    }), this._initTableRowCol(), this._gridStore.gridTextarea.mountElement(l);
  }
  _gridEvFocus(e) {
    e.__IGNORE_GRID_FOCUS__ !== !0 && this.focus();
  }
  /**
   * grid에 추가되어 있는 플러그인을 제거할 수 있다.
   * @version ^2.15.1
   * @example
   * ```ts
   * grid.clearPlugins();
   * ```
   */
  clearPlugins() {
    const e = this._plugins.slice();
    for (const t of e)
      this.removePlugin(t);
  }
  /**
   * 현재 그리드에 존재하는 모든 행(row)의 데이터를 스냅샷 형태로 반환한다.
   * @returns 현재 그리드의 행 데이터를 표현한 스냅샷 배열
   */
  getSnapshotRows() {
    return this._gridStore.rowManager.getSnapshotRows();
  }
  onDestroy() {
    this._gridStore.hook.destroy(), this.clearPlugins();
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated {@link getFreezedRowCount} 사용 권장
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  /**
   * 현재 복사 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get copyOptions() {
    return Object.freeze(this._copyOptions);
  }
  /**
   * 현재 붙여넣기 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get pasteOptions() {
    return Object.freeze(this._pasteOptions);
  }
  /**
   * contextElement 요소의 클래스 이름(className)을 반환한다.
   * @version ^2.17.0
   */
  get className() {
    return this.contextElement.className;
  }
  /**
   * 컴포넌트 라벨을 반환한다.
   */
  get componentLabel() {
    return "grid";
  }
  /**
   * grid가 가지고 있는 hook 정보를 반환한다.
   */
  get hook() {
    return this._gridStore.hook;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  /**
   * 현재 Grid의 가장 첫 Row를 반환한다.
   */
  get firstRow() {
    return this._rowManager.firstRow;
  }
  /**
   * 현재 Grid의 가장 마지막 Row를 반환한다.
   */
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
   * 현재 고정된 열 개수 (header + body)의 개수를 반환한다.
   */
  get fixedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 현재 Grid의 총 column 너비 값을 반환한다.
   */
  get width() {
    return this.contextWidth;
  }
  get contextWidth() {
    return this._colManager.columnsWidth;
  }
  get contextHeight() {
    return this._rowManager.rowsHeight;
  }
  /**
   * 현재 Grid의 총 row 높이 값을 반환한다.
   */
  get height() {
    return this.contextHeight;
  }
  /**
   * 고정된 행인 headerRows + freezedRows 높이 총합을 반환한다.
   */
  get fixedRowHeight() {
    return this._rowManager.freezedRowsHeight;
  }
  /**
   * 고정된 열인 rowHeaders + freezedColumns 너비 총합을 반환한다.
   */
  get fixedColumnWidth() {
    return this._colManager.fixedColumnsWidth;
  }
  /**
   * 현재 Grid의 scroll 영역 정보를 반환한다.
   */
  get scrollArea() {
    const { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: s } = this.contextElement;
    return { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: s };
  }
  /**
   * 현재 Grid의 ScrollTop 레이아웃 값을 반환한다.
   */
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  /**
   * 현재 Grid의 scrollLeft 레이아웃 값을 반환한다.
   */
  get scrollLeft() {
    return this.contextElement.scrollLeft;
  }
  /**
   * 현재 Grid의 scrollBottom 레이아웃 값을 반환한다.
   */
  get scrollBottom() {
    return this.contextElement.scrollTop + this.contextElement.clientHeight;
  }
  /**
   * 현재 Grid의 scrollRight 레이아웃 값을 반환한다.
   */
  get scrollRight() {
    return this.contextElement.scrollLeft + this.contextElement.clientWidth;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMinSize` 사용)
   */
  get minColWidth() {
    return this._colHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMaxSize` 사용)
   */
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMinSize` 사용)
   */
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMaxSize` 사용)
   */
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  /**
   * `IRGrid`의 여러 명령들을 녹화하여 `undo`/`redo`를 지원하는 {@link IRCommandManager} 객체를 반환한다.
   */
  get commandManager() {
    return this._gridStore.commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수(초기 colHeader.rowCount)를 반환한다.
   */
  get headerRows() {
    return this._rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수(초기 rowHeader.colCount)를 반환한다.
   */
  get headerColumns() {
    return this._colManager.headerColumns;
  }
  /**
   * 현재 Grid의 헤더 열들의 너비 합을 반환한다.
   */
  get headerWidth() {
    return this._colManager.rowHeaderColumnsWidth;
  }
  /**
   * 현재 Grid의 헤더 행들의 높이 합을 반환한다.
   */
  get headerHeight() {
    return this._rowManager.headerRowsHeight;
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 반환한다.
   */
  get activeCell() {
    return this._gridContext.selectionRangeState.value?.activeCell ?? null;
  }
  /*
   * Setters
   */
  /**
   * 복사 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set copyOptions(e) {
    Object.assign(this._copyOptions, e);
  }
  /**
   * 붙여넣기 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set pasteOptions(e) {
    Object.assign(this._pasteOptions, e);
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 설정한다. null을 설정하면 활성화된 Cell이 없어진다.
   */
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
  /**
   * 현재 Grid를 읽기 전용 모드로 설정한다. true 할당 시, 모든 셀의 편집기 전환, 붙여넣기 등의 수정 작업이 불가능해진다.
   */
  set readonly(e) {
    this._readonly = e, this._rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  /**
   * IRGrid에 적용할 Plugin을 추가한다.
   * @param plugin - 추가하려는 {@link IRGridPlugin} 인스턴스
   * @example
   * ```ts
   * import { IRGridMoveRowsPlugin } from "@innorules/ir-style/grid";
   *
   * // 기본 제공되지 않는 행 이동 플러그인을 추가
   * grid.addPlugin( new IRGridMoveRowsPlugin() );
   * ````
   * @type
   * @remarks
   *
   * Tip
   *
   * IRGrid 생성 시, plugins 인자를 정의하지 않았다면, 아래의 플러그인들이 기본적으로 초기화 된다.
   * - `IRGridDefaultKeyPlugin`: IRGrid에 포커스가 있을 때 기본 키 입력 처리 플러그인
   * - `IRGridMouseCellSelectorPlugin`: IRGrid의 셀을 클릭할 때 동작을 처리하는 플러그인
   * - `IRGridCellDropPlugin`: 외부에서 온 drag 데이터를 받아 처리하는 플러그인
   * - `IRGridResizerPlugin`: 헤더 셀의 우측 경계를 드래그하여 크기를 조정하는 플러그인
   * - `IRGridPopoverPlugin`: 셀에 대한 메모 표시를 위한 플러그인
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this._gridStore
    }), this._plugins.push(e);
  }
  /**
   * Grid에서 left 좌표에 해당하는 {@link IRGridColumn} 객체를 찾아 반환한다.
   * @version ^2.12.2
   * @param left - `IRGridColumn`을 찾기 위한 left 좌표 값
   * @example
   * ```ts
   * const grid = new IRGrid({
   *     contextElement: document.querySelector('#grid'),
   *    colHeader: {
   *        colCount: 5,
   *        defaultSize: 100
   *    },
   *});
   *
   * // 100은 0번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(100).columnId );
   * // 101은 1번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(101).columnId );
   * // 504은 4번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(504).columnId );
   * // 505은 null
   * console.log( grid.getColumnByLeft(505) );
   * ```
   */
  getColumnByLeft(e) {
    const t = this._colManager.visibleColumnList;
    let n = 0, s = t.length - 1;
    for (; n <= s; ) {
      const r = n + Math.floor((s - n) / 2), i = t[r];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? s = r - 1 : n = r + 1;
    }
    return null;
  }
  /**
   * 설정된 기본 열 서식을 변경한다.
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
  /**
   * 해당 플러그인을 제거한다.
   * @param plugin
   */
  removePlugin(e) {
    if (!this._plugins.includes(e))
      throw new Error("plugin not found");
    try {
      e.unmount(), this._plugins.splice(this._plugins.indexOf(e), 1);
    } catch (t) {
      console.error("removing plugin error!", t);
    }
  }
  /**
   * 지정된 셀이 병합된 셀 그룹의 기준 셀인 경우, 해당 병합 셀의 행 및 열 범위를 반환한다.
   * @param row - 병합된 셀의 기준 셀 row 값
   * @param col - 병합된 셀의 기준 셀 col 값
   * @returns
   * @example
   * ```ts
   * console.log( grid.getMergeArea( 3, 10 ) );
   * ```
   */
  getMergeArea(e, t) {
    const n = this.cell(e, t);
    if (n.mergeInfo)
      return {
        rowSpan: n.mergeInfo.rowSpan,
        colSpan: n.mergeInfo.colSpan
      };
    throw new Error("It's not a based cell!");
  }
  /**
   * 특정 셀의 병합 여부를 반환한다.
   * @param row
   * @param col
   * @returns
   * @example
   * ```ts
   * grid.isMerged( 1, 5 )
   * ```
   */
  isMerged(e, t) {
    return this._mergeHandler.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this._mergeHandler.splitCells(e, t), this._scheduleManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, s) {
    this.forceLayoutTask(), this._mergeHandler.mergeCells({ top: e, left: t, bottom: n, right: s }), this._scheduleManager.addTask("virtualRender");
    const r = this.getSelection();
    r && this.selectRange(r.top, r.left, r.bottom, r.right);
  }
  /**
   * 마지막 명령을 실행 취소한다.
   * @returns
   */
  undo() {
    return this.commandManager.undo();
  }
  /**
   * 마지막으로 취소한 명령을 다시 실행한다.
   * @returns
   */
  redo() {
    return this.commandManager.redo();
  }
  /**
   * 주어진 Y 오프셋 위치에 해당하는 행(Row)을 반환한다.
   * @param offsetY - 기준이 되는 Y 좌표
   * @returns
   */
  findRowOrNull(e) {
    return this._rowManager.findRowOrNull(this.scrollTop, e, this.fixedRowCount);
  }
  /**
   * - 주어진 좌표에 해당하는 셀을 반환한다.
   * - 병합 셀에 포함된 경우, 병합 그룹의 대표 셀을 반환한다.
   *
   * @param offsetY - Y 좌표
   * @param offsetX - X 좌표
   * @returns
   */
  findCellOrNull(e, t) {
    const { scrollTop: n, scrollLeft: s } = this, r = e < n + this.fixedRowHeight ? e - n : e, i = t < s + this.fixedColumnWidth ? t - s : t, l = this.getRowByTop(r);
    if (!l) return null;
    const u = this.getColumnByLeft(i);
    if (!u) return null;
    const d = this.cell(l.rowId, u.columnId);
    return d.mergeMain ?? d;
  }
  /**
   * 해당 셀의 기준이되는 셀을 반환한다.
   * @param row - 기준이 되는 셀을 가지고 오고 싶은 셀의 row index
   * @param col - 기준이 되는 셀을 가지고 오고 싶은 셀의 column index
   * @returns
   */
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return { row: n.row, col: n.col };
    if (n.mergeMain)
      return { row: n.mergeMain.row, col: n.mergeMain.col };
    throw new Error("It's not a merged cell!");
  }
  /**
   * 현재 선택된 셀 범위를 해제한다.
   */
  releaseCells() {
    this._gridContext.selectionRangeState.next(null), this._selector.releaseRange();
  }
  _clearAllRows() {
    this.contextElement.scrollTop = 0, this._rowManager.clearRows(), this._mergeHandler.clearMergeCells(this.headerRows), this.commandManager.clearCommands();
  }
  /**
   * - headerRows를 제외한 모든 body row를 제거한다.
   * - undo용 command가 모두 초기화 된다.
   * @example
   * ```ts
   * grid.clearRows();
   * ```
   */
  clearRows() {
    this._clearAllRows(), this._scheduleManager.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  /**
   * 해당 컬럼의 left 값을 반환한다.
   * @param col - left 위치 값을 가져오고자 하는 column
   * @returns
   */
  getColumnLeft(e) {
    return this._colManager.getColumnLeft(e);
  }
  /**
   * 원하는 범위와 셀을 선택한다.
   * @param range - 선택하려는 범위를 나타내는 {@link IRGridRange} 객체
   * @param cell
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 } );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 }, grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 영역 계산은 top ~ bottom까지 영역이 포함되므로 0 ~ 2까지 선택하면 3개 크기의 영역을 선택하는 것이다.
   * - header 영역은 선택할 수 없다.
   */
  select(e, t = this.activeCell) {
    t?.isRemoved && (t = null), this._gridContext.selectionRangeState.next({
      range: e,
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._scheduleManager.addTask("updateSelection");
  }
  /**
   * 원하는 범위를 선택한다. ({@link select}를 기반으로 호출하며, 인자 타입만 다르다.)
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.selectRange( 0, 0, 2, 2 );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.selectRange( 0, 0, 2, 2, grid.getCell(1, 1) );
   * ```
   */
  selectRange(e, t, n, s, r = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: s }, r);
  }
  /**
   * 그리드 내의 모든 셀을 선택한다.
   * @example
   * ```ts
   * grid.selectAll();
   * ```
   */
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  /**
   * 특정 셀의 너비를 반환한다.
   * @param cell - 너비를 구하고자 하는 셀 객체
   * @example
   * ```ts
   * const cellWidth = grid.getCellWidth( grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 셀이 병합된 경우, 병합된 여러 열의 너비 합이 반환된다.
   */
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return z(e.mergeInfo.colSpan).reduce((n, s) => this.getColumnVisible(t + s) ? n + this.getColumnWidth(t + s) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  /**
   * 해당 셀이 보여짐 상태를 반환한다.
   * @param row - 셀의 row
   * @param col - 셀의 column
   * @returns
   */
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  /**
   * 해당 셀의 높이를 가져온다.
   * @param cell - 높이 값을 가져오고 싶은 셀 정보
   * @returns
   */
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return z(e.mergeInfo.rowSpan).reduce((n, s) => this.getRowVisible(t + s) ? n + this.getRowHeight(e.row + s) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  /**
   * grid내에서 선택된 cell들의 정보(top, left, bottom, right)를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.getSelection();
   * ```
   */
  getSelection() {
    return this._gridContext.selectionRangeState.value?.range ?? null;
  }
  /**
   * 지정한 행이 보이도록 스크롤 위치를 조정한다.
   * @param row - 스크롤 위치를 변경할 행
   */
  scrollOnRow(e) {
    this._scheduleManager.updateScrollInfo({ row: e });
  }
  /**
   * 지정한 열이 보이도록 스크롤 위치를 조정한다.
   * @param col - 스크롤 위치를 변경할 열
   */
  scrollOnCol(e) {
    this._scheduleManager.updateScrollInfo({ col: e });
  }
  /**
   * 레이아웃 태스크를 강제로 실행한다.
   */
  forceLayoutTask() {
    this._scheduleManager.forceRunTasks();
  }
  /**
   * 지정한 타입의 플러그인 인스턴스를 반환한다.
   * @param type - 플러그인 클래스 생성자 함수
   * @returns
   */
  getPlugin(e) {
    for (const t of this._plugins)
      if (t instanceof e)
        return t;
    throw new Error(`not found plugin ${e}`);
  }
  /**
   * 스크롤 위치 값을 리셋한다.
   */
  resetScroll() {
    this.contextElement.scrollTop = 0, this.contextElement.scrollLeft = 0;
  }
  /**
   * 지정한 영역이 화면(Viewport)에 보이도록 스크롤 위치를 조정한다.
   * @param row - 화면에 보이도록 할 row index
   * @param col - 화면에 보이도록 할 column index
   * @example
   * ```ts
   * grid.scrollInView( 4, 10 );
   * ```
   */
  scrollInView(e, t) {
    this._scheduleManager.updateScrollInfo({ row: e, col: t });
  }
  /**
   * grid에 focus를 설정한다.
   */
  focus() {
    this._gridStore.tableElement.draggable || this._gridStore.gridTextarea.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업이 예약되도록 설정한다.
   */
  afterRender(e) {
    this._scheduleManager.addAfterRenderTask(e), this._scheduleManager.addTask("nothing");
  }
  /**
   * 특정 row, col의 셀 `text`속성을 설정한다.
   * @command 내부적으로 setCell을 호출하여 command에 기록
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param text - 대상 셀에 설정할 값.
   * - `number` 또는 `bigint` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`5` -> `"5"`, `123123123n` -> `"123123123"`)
   * - `boolean` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`true` -> `"true"`)
   * - `undefined` 또는 `null` 타입을 지정한 경우 빈 문자열로 설정된다.
   * - `object` 타입을 전달한 경우 예외가 발생한다.
   * @example
   * ```ts
   * grid.setText( 0, 0, "" );           // ""
   * grid.setText( 1, 0, "문자열" );     // "문자열"
   * grid.setText( 2, 0, undefined );    // ""
   * grid.setText( 3, 0, null );         // ""
   * grid.setText( 4, 0, 5 );            // "5"
   * grid.setText( 5, 0, 123123n );      // "123123"
   * grid.setText( 6, 0, true );         // "true"
   * ```
   * @remarks
   * Tip
   * - 그리드 내부에서 모든 text는 string로 취급되어 저장된다.
   * - 셀마다 별도의 커스텀 데이터 저장이 필요한 경우, {@link setObject} 메서드를 이용
   */
  setText(e, t, n) {
    this.setCell(e, t, { text: n });
  }
  setCellRenderer(e, t, n) {
    this.cell(e, t).cellRenderer = n;
  }
  /**
   * 특정 row, col의 셀의 `text`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * grid.getText( 0, 0 );
   * ```
   */
  getText(e, t) {
    return this.cell(e, t).text;
  }
  /**
   * 특정 row, col의 셀의 `value`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns
   * ```ts
   * grid.getValue( 4, 5 );
   * ```
   */
  getValue(e, t) {
    return this.cell(e, t).value;
  }
  /**
   * 특정 열의 넓이 값을 반환한다.
   * @param col - 넓이 값을 반환하고 싶은 column
   * @returns
   * @example
   * ```ts
   * console.log( grid.columnWidth( 4 ) );
   * ```
   */
  getColumnWidth(e) {
    return this._colManager.getColumnWidth(e);
  }
  /**
   *
   * @version ^2.18.0
   */
  getColWidthWithSpan(e, t) {
    let n = 0;
    for (let s = 0; s < t; s++)
      n += this._colManager.getColumnUnstable(e + s).widthWithBorder;
    return n;
  }
  /**
   *
   * @version ^2.17.0
   * @command
   */
  setData(e) {
    const { row: t, col: n, data: s } = e;
    s.forEach((r, i) => {
      r.forEach((l, u) => this.setText(t + i, n + u, l));
    });
  }
  setColumnWidth(e, t) {
    const n = G(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this._colManager.setColumnWidth(e, n), this._rowManager.setColumnWidth(e, n), this._gridStore.hook.emit("columnChanged", [e, e, "setWidth"]), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("updateSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft");
  }
  /**
   * grid 내부에 있는 특정 row의 높이를 반환한다.
   * @param row - 높이 값을 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * grid.getRowHeight( 0 );
   * ```
   */
  getRowHeight(e) {
    return this._rowManager.getRowHeight(e);
  }
  /**
   * @version ^2.18.0
   */
  getRowHeightWithSpan(e, t) {
    let n = 0;
    for (let s = 0; s < t; s++)
      n += this._rowManager.getRowUnstable(e + s).heightWithBorder;
    return n;
  }
  setRowHeight(e, t) {
    const n = G(t, this.minRowHeight, this.maxRowHeight);
    this._rowManager.setRowHeight(e, n), this._scheduleManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  /**
   * 특정 row의 텍스트 색상을 설정한다.
   * @param row - 텍스트 색상을 설정할 row index
   * @param color - 텍스트 색상
   * @example
   * ```ts
   * grid.setRowTextColor( 0, "#ff0000" );
   * ```
   */
  setRowTextColor(e, t) {
    this._rowManager.getRow(e).textColor = t;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns - Generics로 지정한 타입 `T`에 따라 반환 타입이 결정된다.
   * @example
   * ```ts
   * type CatData = {
   *     name: string;
   * }
   *
   * const myCat = getObject<CatData>( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - Generics는 타입스크립트 환경에서 사용 가능 {@link https://www.typescriptlang.org/docs/handbook/2/generics.html | TypeScript Generics 문서}
   */
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 설정한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param object - 대상 셀에 설정할 객체
   * @example
   * ```ts
   * grid.setObject( 0, 0, { id: 1001, name: "lee" } );
   * grid.setObject( 1, 0, { id: 1002, name: "kim" } );
   * ```
   * @remarks
   * Tip
   * - object는 해당 셀과 매핑하여 부가적으로 저장할 데이터로 많이 사용된다.
   */
  setObject(e, t, n) {
    this.cell(e, t).props = { object: n };
  }
  /**
   * 특정 좌표의 {@link IRGridCell} 객체를 얻는다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const topLeftCell = grid.cell(0, 0);
   * ```
   * @remarks
   * Tip
   * - 해당되는 row, col에 셀이 없는 경우 예외가 발생한다.
   */
  cell(e, t) {
    return this._rowManager.getCell(e, t);
  }
  /**
   * 지정한 row, col의 셀이 기준 셀인지의 여부를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.isBased( 1, 4 );
   * ```
   */
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환한다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).props;
  }
  /**
   * 해당 셀의 내부 속성 정보 객체({@link IRGridCellMetaData})를 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const cellProps = grid.getCellMetaInfo(0, 0);
   *
   * console.log( cellProps.text );
   * console.log( cellProps.icon );
   * ```
   */
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
   * 특정 row에 대한 정보를 설정한다.
   * @param rowNo - 행 번호
   * @param rowInfo - 행에 설정할 정보
   * @remarks
   * Tip
   * - 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용한다.
   */
  setRowInfo(e, t) {
    this.getRow(e).setRowInfo(t);
  }
  /**
   * 특정 row, col의 셀을 선택한다. ({@link select}를 기반으로 호출)
   * @param row - 선택하고자 하는 row index
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectCell( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - 내부적으로 {@link cell}메소드를 호출한다.
   */
  selectCell(e, t) {
    this.selectRange(e, t, e, t, this.cell(e, t));
  }
  /**
   * 현재 Grid 행의 개수를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getRowCount() );
   * ```
   */
  getRowCount() {
    return this._rowManager.length;
  }
  /**
   * 현재 visible 상태가 true 행 개수를 반환한다.
   * @version ^2.17.0
   */
  getVisibleRowCount() {
    return this._rowManager.getVisibleRowCount();
  }
  /**
   * 현재 Grid 열의 개수를 반환한다.
   * @returns
   */
  getColCount() {
    return this._colManager.length;
  }
  /**
   * 마지막 행의 객체를 반환한다.
   * @returns
   */
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)를 반환한다.
   */
  getFreezedRowCount() {
    return this._rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getFreezedColumnCount() );
   * ```
   */
  getFreezedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 특정 열의 객체({@link IRGridColumn}) 정보를 가져온다.
   * @param columnId - 정보를 가져오려는 column index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumn( 10 ) );
   * console.log( grid.getColumn( 21 ) );
   * ```
   */
  getColumn(e) {
    return this._colManager.getColumn(e);
  }
  /**
   * 특정 row의 {@link IRGridRow} 객체를 반환한다.
   * @param rowId - grid에서 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * // 1번째 row 객체를 반환한다.
   * grid.getRow( 1 );
   * ```
   */
  getRow(e) {
    return this._rowManager.getRow(e);
  }
  /**
   * {@link renderColumns}의 단일 열 렌더 버전이다.
   * @param left - 렌더링시킬 column index
   * @example
   * ```ts
   * grid.renderColumn( 10 );
   * ```
   */
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  /**
   * 지정한 범위의 열을 렌더링한다.
   * @param left - 렌더링할 시작 column index
   * @param right - 렌더링할 마지막 column index
   * @example
   * ```ts
   * grid.renderColumns( 1, 20 );
   * ```
   */
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
    const t = G(e, this.minRowHeight, this.maxRowHeight), n = this._createIRGridRow(this._rowManager.getNextRowId(), this.height, t);
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
   * {@link removeRows}의 단일 행 제거 버전이다.
   * @command removeRows 호출로 command화
   * @param row - 삭제하려는 행의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 행을 삭제한다.
   * grid.removeRow( 2 );
   * ```
   */
  removeRow(e) {
    return this.removeRows(e, e);
  }
  /**
   * {@link removeColumns}의 단일 열 제거 버전이다.
   * @command removeColumns 호출로 command화
   * @param col - 삭제하려는 열의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 열을 삭제한다.
   * grid.removeColumn( 2 );
   * ```
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
    this._rowManager.runFuncEachRow((s) => {
      for (const r of s.getCellGenerator())
        r.isMerged && this._mergeHandler.removeMergeCell(r.row, r.col);
    }, e, t + 1), this._rowManager.removeRows(e, t, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this._mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this._rowManager.runFuncEachRow((n) => {
      for (const s of n.getCellGenerator(e, t))
        s.isMerged && this._mergeHandler.removeMergeCell(s.row, s.col);
    }), this._rowManager.removeColumns(e, t), this._colManager.removeColumns(e, t), this._gridStore.hook.emit("columnChanged", [e, t, "removeColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("adjustSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = G(e, this.minColWidth, this.maxColWidth), n = this._colManager.addColumn(t);
    return this._rowManager.addColumn((s) => this._createIRGridCell(s.rowId, n.columnId)), this._gridStore.hook.emit("columnChanged", [n.columnId, n.columnId, "addColumn"]), this._scheduleManager.addTask("resizeGridWrapperWidth").addTask("virtualRender"), n.columnId;
  }
  addColumn(e) {
    return this._scheduleManager.addTask("generateScrollBarClass"), this._addColumn(e);
  }
  /**
   * {@link insertRow}의 단일 행 삽입 버전이다.
   * @command
   * @param row
   * @param height
   * @returns
   */
  insertRow(e, t) {
    return this.insertRows(e, 1, t);
  }
  insertRows(e, t = 1, n = this._rowHeaderInfo.defaultSize) {
    const s = this.getRowCount(), r = G(e, this.headerRows, s);
    if (!this._mergeHandler.checkCanInsertRow(r)) return !1;
    const i = G(n, this.minRowHeight, this.maxRowHeight);
    if (r === s)
      return z(t).forEach(() => this.addRow(i)), !0;
    const l = z(t).map((u) => this._createIRGridRow(r + u, 0, i));
    return this._rowManager.insertRows(r, l), this._scheduleInsertRowTasks(), !0;
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
   * {@link insertColumn}의 단일 열 삽입 버전이다.
   * @command
   * @param col - 삽입하려는 열의 index
   * @param width - 삽입하려는 열의 넓이
   * - 미 지정 시, IRGrid 생성 시 선언한 `colHeader.defaultSize` 값이 적용된다.
   * @returns
   * @example
   * ```ts
   * grid.insertColumn( 2, 100 );
   *
   * grid.insertColumn( 2 );
   * ```
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this._colHeaderInfo.defaultSize) {
    const s = this.getColCount(), r = G(e, this.headerColumns, s);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = G(n, this.minColWidth, this.maxColWidth);
    if (r === s) {
      for (let l = 0; l < t; l++)
        this.addColumn(i);
      return !0;
    }
    return this._colManager.insertColumns(e, t, i), this._rowManager.insertColumns(e, t, (l, u) => this._createIRGridCell(l, u)), this._gridStore.hook.emit("columnChanged", [e, e + t - 1, "insertColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("resizeGridWrapperWidth").addTask("virtualRender").addTask("adjustSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0;
  }
  /**
   * {@link autoSizeColumn}의 단일 열 버전이다.
   * @command autoSizeColumns
   * @param col - 자동 조정하려는 열의 index
   * @example
   * ```ts
   * // 2번째 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumn( 2 );
   * ```
   */
  autoSizeColumn(e) {
    this.autoSizeColumns(e, e);
  }
  /**
   *
   * @command
   */
  /**
   * 지정한 범위의 열들의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @param left - 자동 조정하려는 열의 시작 index
   * @param right - 자동 조정하려는 열의 끝 index (right index까지 포함된다.)
   * @example
   * ```ts
   * // 0 ~ 2까지의 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumns( 0, 2 );
   * ```
   */
  autoSizeColumns(e, t) {
    z(e, t + 1).forEach((n) => {
      const s = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      s !== this.getColumnWidth(n) && this.setColumnWidth(n, s);
    });
  }
  /**
   * {@link autoSizeRows}의 단일 행 버전이다.
   * @command autoSizeRows
   * @param row
   */
  autoSizeRow(e) {
    this.autoSizeRows(e, e);
  }
  /**
   * 지정한 행들의 높이를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @command
   * @param top - 자동 조정하려는 행의 시작 index
   * @param bottom - 자동 조정하려는 행의 끝 index (bottom index까지 포함된다.)
   * @example
   * ```ts
   * grid.autoSizeRows(0, 10);
   * ```
   * @remarks
   * Tip
   * - autoSizeRows 기능은 많은 계산이 필요한 작업이므로, 대량의 행을 한 번에 처리할 때 성능에 영향을 줄 수 있다.
   * - 대량의 행을 처리할 때는, 모든 셀 작업을 끝낸 후, 마지막에 한 번에 처리하는 것이 좋다.
   */
  autoSizeRows(e, t) {
    this._rowManager.runFuncEachRow((n) => {
      const s = n.rowInnerHeight;
      s !== n.height && this.setRowHeight(n.rowId, s);
    }, e, t + 1);
  }
  /**
   * 선택되어 있는 영역의 클립보드를 복사한다.
   * @returns
   * @example
   * ```ts
   * grid.copyToClipboard();
   * ```
   */
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
      const t = (await Nr.read()).flat();
      for await (const n of t)
        for (const s of Zc)
          e[s] === "" && n.types.includes(s) && (e[s] = await Br(await n.getType(s)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = Xr(so) ?? "";
    }
    return {
      getData(t) {
        return e[t] ?? "";
      }
    };
  }
  /**
   * - Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * - https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * @remarks
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
      Bn(
        await this._createClipboardGetter()
      )
    );
  }
  /**
   * 지정된 범위에 셀 데이터를 붙여넣는다.
   * @param range - 붙여넣기를 적용할 기준 셀 범위
   * @param cellMetaInfoList - 붙여넣을 셀 메타 정보 이중 배열
   * @returns
   */
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = ua(this, this._pasteOptions), s = n.getPastingRange(e, t), { rowSpan: r, colSpan: i } = this._pasteOptions;
    if (r || i)
      for (const u of this._generator.getSelectionGenerator(s))
        r && u.mergeInfo.rowSpan > 1 && this.splitCells(u.row, u.col), i && u.mergeInfo.colSpan > 1 && this.splitCells(u.row, u.col);
    const l = n.beforePastingList(s, t);
    l.length !== 0 && (this.onClipboardBeforePaste(s), n.pasteTask(l), this.onClipboardAfterPaste(s), this.select(s));
  }
  /**
   * 특정 row index의 행이 존재하는지 여부를 반환한다.
   * @param row - 존재 여부를 확인하고자 하는 row index
   * @returns - `boolean`: 존재하면 `true`, 존재하지 않으면 `false`를 반환한다.
   * @example
   * ```ts
   * console.log( grid.hasRow(0) );
   * console.log( grid.hasRow(5) );
   * ```
   */
  hasRow(e) {
    return e < this.getRowCount();
  }
  /**
   * 특정 column index의 열이 존재하는지 여부를 반환한다.
   * @param col - 존재 여부를 확인하고자 하는 column index
   * @returns
   * @example
   * ```
   * console.log( grid.hasColumn( 10 ))
   * ```
   */
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
  /**
   * 대량의 행들을 보이거나 숨긴다.
   * @version ^2.10.0
   * @param startRowId - visible을 반영하기 위한 시작 row index
   * @param visibleArray - `startRowId`부터 순차적으로 보이기 여부를 지정한 배열
   * @example
   * ```ts
   * // 1번 부터 3개의 행 숨김
   * grid.setRowVisibleBulk( 1, [false, false, false] );
   *
   * // 10번 부터 10개의 행 숨김
   * grid.setRowVisibleBulk( 1, Array(10).fill(false) );
   * ```
   * @remarks
   * Tip
   * - 이 메서드는 행 충돌을 검사하지 않으므로, 숨기려는 행에 병합된 셀의 충돌이 발생할 수 있다.
   * - 이 메서드는 @command를 제공하지 않아 undo/redo가 지원되지 않는다.
   */
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
  /**
   * 특정 row index의 행이 보이는지 여부를 반환한다.
   * @param row - 보이기 여부를 확인하고자 하는 행의 index
   * @returns - `boolean`: 보이면 `true`, 보이지 않으면 `false`를 반환한다.
   */
  getRowVisible(e) {
    return this._rowManager.getRowVisible(e);
  }
  /**
   * 해당 행이 필터된 행인지 여부를 반환한다.
   * @version ^2.17.0
   */
  isFilteredRow(e) {
    return this.getRow(e).filtered;
  }
  setColumnVisible(e, t) {
    return this._mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this._colManager.setColumnVisible(e, t), this._rowManager.setColumnVisible(e, t), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection").addTask("resizeGridWrapperWidth").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), this._gridStore.hook.emit("columnChanged", [e, e, "setVisible"])), !0);
  }
  /**
   * 특정 열이 보이는지 여부를 반환한다.
   * @param col - 보이기 여부를 확인하고자 하는 열의 index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumnVisible( 20 ) );
   * ```
   */
  getColumnVisible(e) {
    return this._colManager.getColumnVisible(e);
  }
  /**
   * 현재 그리드 인스턴스와 연결된 셀 탐색기(Finder)를 생성한다.
   * @param args - 셀 탐색 설정 옵션. 생략 시 기본값이 사용된다.
   * @returns
   */
  createFinder(e = {}) {
    return Ic(this, e);
  }
  /**
   * 지정한 열을 선택한다. {@link selectColumns}를 기반으로 호출한다.
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectColumn( 4 );
   * ```
   */
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  /**
   * - 지정한 범위의 열을 선택한다.
   * - `left`와 `right`는 headerColumns, headerRows를 포함하지 않는다.
   * @param left - 선택하고자 하는 열의 시작 index
   * @param right - 선택하고자 하는 열의 끝 index (right index까지 포함된다.)
   * @param activeCell - 선택 후 활성화될 객체 (기본값은 현재 활성화 된 셀)
   * @returns
   * @example
   * ```ts
   * grid.selectColumns( 1, 9 );
   *
   * grid.selectColumns( 1, 9, grid.getCell( 1, 1 ) );
   * ```
   */
  selectColumns(e, t, n = this.activeCell) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, n ?? this.cell(this.headerRows, e));
  }
  /**
   * 지정한 row index의 행을 선택한다. {@link selectRows}를 기반으로 호출
   * @param row - 선택하고자 하는 row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화 된 셀)
   * @example
   * ```ts
   * grid.selectRow( 4 );
   * grid.selectRow( 4, grid.getCell(4, 4) );
   * ```
   */
  selectRow(e, t = this.activeCell) {
    this.selectRows(e, e, t);
  }
  /**
   * 지정한 row 범위 행을 선택한다. {@link selectRange}를 기반으로 호출
   * @param top - 선택하고자 하는 top row index
   * @param bottom - 선택하고자 하는 bottom row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화된 셀)
   * @example
   * ```ts
   * grid.selectRows( 1, 3 );
   * ```
   */
  selectRows(e, t, n = this.activeCell) {
    e < this.headerRows || this.selectRange(e, this.headerColumns, t, this.getColCount() - 1, n ?? this.cell(e, this.headerColumns));
  }
  /**
   * 현재 IRGrid viewport에 항상 보이는 행 개수를 지정한다.
   * @param freezingRowCount - header를 제외한 viewport에 항상 보이는 고정 행 개수
   * @example
   * ```ts
   * grid.freezeRows( 2 );
   * ```
   */
  freezeRows(e) {
    this._rowManager.freezeRows(e), this._scheduleManager.addTask("virtualRender").addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId - 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns);
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정한다.
   * @param freezingColumnCount - 열을 고정하고 싶은 개수
   */
  freezeColumn(e) {
    if (e < 0)
      throw new Error("Could not be freezing minus columns!");
    if (e > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this._colManager.freezeColumns(e), this._scheduleManager.addTask("updateSelection").addTask("updateSelectionByScroll").addTask("updateRowsStickyLeft").addTask("virtualRender");
  }
  /**
   * 실행 취소(Undo) 기록을 모두 초기화한다.
   */
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
  /**
   * 행들을 비교해서 순서에 맞게 정렬한다.
   * @param compareFunc - 비교하는 함수
   * @param order - 순서의 규칙을 지정
   * @param startRowId - 순서 정렬 범위에 해당하는 시작 row index
   * @param endRowId - 순서 정렬 범위에 해당하는 마지막 row index
   */
  sort(e, t, n, s) {
    const r = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(s ?? this.getRowCount(), this.getRowCount());
    this._rowManager.sort(e, t, r, i), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * 지정한 범위에 있는 병합(merge) 셀들을 분할한다.
   * @param range - 지정할 범위 정보를 담은 객체
   */
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
  /**
   * 현재 선택된 셀 객체를 배열로 반환한다. 단, 선택된 셀이 없을 경우 빈 배열을 반환한다.
   * @returns
   */
  getSelectedCells() {
    const e = this.getSelection();
    return e ? [this.cell(e.top, e.left)] : [];
  }
  /**
   * {@link exchangeRows}의 단일 행 버전이다.
   * @command
   * @param source - 교환할 첫 번째 행의 인덱스
   * @param target - 교환할 두 번째 행의 인덱스
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
   * {@link exchangeColumns}의 단일 행 버전이다.
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
   * {@link moveRows}의 단일 행 버전이다.
   * @command
   * @param source - 이동시킬 행
   * @param targetRow - 이동하고 싶은 행의 위치
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((s) => this._rowManager.isInvalidRowId(s)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((s) => s < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this._mergeHandler.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._rowManager.getAdjustTargetRow(t);
    this._rowManager.moveRows(e, n), this.onMovedRows(e, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * {@link moveColumns}의 단일 열 버전이다.
   * @command
   * @param source
   * @param targetCol
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((s) => this._rowManager.isInvalidRowId(s)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((s) => s < this.getFreezedRowCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this._mergeHandler.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._getAdjustTargetColumn(t);
    this._rowManager.runFuncEachRow((s) => s.moveCells(e, n)), this.onMovedColumns(e, n), this._scheduleManager.addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * - 해당 행의 시작 행 인덱스를 반환한다. (일반적으로 row 값 그대로 반환)
   * - 지정한 행이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 행 인덱스를 반환한다.
   * @param row - 기준이 되는 row index
   * @returns
   * @example
   * ```ts
   * // row 5가 3~5 병합 셀의 일부라면, 결과는 3
   * const startRow = grid.getStartOfRowId( 5 );
   * ```
   */
  getStartOfRowId(e) {
    return this._rowManager.getStartOfRowId(e);
  }
  /**
   * - 해당 열의 시작 열 인덱스를 반환한다. (일반적으로 column 값 그대로 반환)
   * - 지정한 열이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 열 인덱스를 반환한다.
   * @param col - 기준이 되는 column index
   * @returns
   * @example
   * ```ts
   * // column 6가 1~6 병합 셀의 일부라면, 결과는 1
   * const startColumn = grid.getStartOfColumnId( 6 );
   * ```
   */
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
    const { top: t, left: n, bottom: s, right: r } = e;
    if (t === s && n === r) return !0;
    const i = this.getRow(t).getCell(n);
    return s === i.bottom && r === i.right;
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
   * @event
   */
  onSelectCell(e) {
  }
  /**
   *
   * @event
   */
  onChangeCell(e) {
  }
  /**
   * @event
   */
  onActiveCellNull() {
  }
  /**
   * @event
   */
  onEditCellDone(e, t, n, s, r, i) {
  }
  /**
   * @event
   */
  onSelectChanged(e, t) {
  }
  /**
   * @event
   */
  onClearCell(e) {
  }
  /**
   * @event
   */
  onClearCellCheck(e) {
    return e.canClear;
  }
  /**
   * @event
   */
  onColumnClick(e) {
  }
  /**
   * @event
   */
  onRowClick(e) {
  }
  /**
   * @event
   */
  onCreatingCell(e) {
  }
  /**
   * @event
   */
  onCellRightClick(e, t) {
  }
  /**
   * @event
   */
  onEditKeyDown(e, t, n, s) {
  }
  /**
   * @event
   */
  onEditInput(e, t, n) {
  }
  /**
   * @event
   */
  onMountedRow(e) {
  }
  /**
   * @event
   */
  onClipboardBeforePasteCell(e, t) {
    return !0;
  }
  /**
   * @event
   */
  onClipboardBeforePaste(e) {
  }
  /**
   * @event
   */
  onClipboardAfterPasteCell(e) {
  }
  /**
   * @event
   */
  onClipboardAfterPaste(e) {
  }
  /**
   * false를 리턴하면 자동 생성되지 않음. 기본 값 true 리턴
   * @param _row 생성될 row 값
   * @event
   */
  onAutoInsertRow(e) {
    return !0;
  }
  /**
   * @event
   */
  onAutoInsertedRow(e) {
  }
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @event
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  /**
   * @event
   */
  onAutoInsertedColumn(e) {
  }
  /**
   * @event
   */
  onDoubleClickCell(e) {
  }
  /**
   * @event
   */
  onDropOnCell(e, t, n) {
  }
  /**
   * @event
   */
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.props.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.props.object)), !0);
  }
  /**
   * @event
   */
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.props.disabled !== !0 && e.props.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
  }
  /**
   * @event
   */
  onUndo(e) {
  }
  /**
   * @event
   */
  onRedo(e) {
  }
  /**
   * @event
   */
  onNativeCopy(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    const n = this._gridRangeUtils.getCellMatrixByRange(t), { rowSpan: s, colSpan: r } = this._copyOptions, l = (this._copyOptions.skipFiltered ? n.filter(([u]) => !this.isFilteredRow(u.row)) : n).map((u) => u.map((d) => ({
      text: this.onCopyCellText(d),
      cellVisible: d.mergeMain === void 0,
      rowSpan: s ? d.mergeInfo.rowSpan : 1,
      colSpan: r ? d.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    xa(e.clipboardData, l), Yr(so, JSON.stringify(l)), this.focus(), this.onCopy(), e.preventDefault();
  }
  /**
   * @event
   */
  onCopyCellText(e) {
    return e.text;
  }
  /**
   * @event
   */
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  /**
   * @event
   */
  onNativePaste(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("it needs selection to paste");
    const n = Bn(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  /**
   * @event
   */
  onExchangedRows(e, t) {
  }
  /**
   * @event
   */
  onExchangedColumns(e, t) {
  }
  /**
   * @event
   */
  onMovedRows(e, t) {
  }
  /**
   * @event
   */
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
    const s = this._gridStore.gridTextarea;
    s.onEditDone = (r, i, l, u, d, c) => {
      this.onEditCellDone(r, i, l, u, d, c), this._gridContext.gridModeState.value.mode !== "idle" && this._gridContext.setIdle();
    }, s.onEditKeyDown = (r, i, l, u) => this.onEditKeyDown(r, i, l, u), s.onEditInput = (r, i) => this.onEditInput(r, i, e), s.onDragEnd = () => this.__setEditMode(e), s.onEnterOnEdit = () => {
      if (this.hook.emitSync("keyAction", [{}, "Enter"]) === !1) return;
      let r = this._gridStore.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === r) {
        if (i = this._gridStore.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        r = this._gridStore.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(r, i), this.selectCell(r, i), this.afterRender(() => this.doEditMode(this.cell(r, i), !1, !0));
    };
    try {
      return this.__setEditMode(e), this.activeCell !== e && this.selectCell(e.row, e.col), s.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
    } catch (r) {
      return console.error("IRGrid.doEditMode Error!", r), !1;
    }
  }
  /**
   * @event
   */
  onCopy() {
  }
  /**
   * @event
   */
  onContextMenu(e, t) {
  }
  /**
   * @event
   */
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
    z(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  _initGridCellPadding() {
    he(this.contextElement, {
      [D.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [D.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [D.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [D.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
    });
  }
  _getCellRenderer(e, t, n, s) {
    if (e === "col-header")
      return this._colHeaderInfo.cellRenderer;
    if (e === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    if (e === "body-cell")
      return this._bodyInfo.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  _getCellType(e, t) {
    const n = e < this.headerRows, s = !n && t < this.headerColumns;
    return n ? "col-header" : s ? "row-header" : "body-cell";
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
    const n = this._getCellType(e, t), s = n.endsWith("header") ? "th" : "td", r = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, r), l = new Da({
      row: e,
      col: t,
      tag: s,
      cellType: n,
      cellRenderer: i,
      props: r
    });
    return l.onCheckReadonly = () => this.onCheckCellReadonly(l), this.onCreatingCell(l), l;
  }
  _createIRGridRow(e, t, n) {
    const s = new Ba({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return ++this._rowSeq, z(this.getColCount()).forEach((r) => {
      s.addCell(this._createIRGridCell(e, r)), this.getColumnVisible(r) || s.setColumnVisible(r, !1);
    }), s;
  }
}
Y([
  X()
], K.prototype, "splitCells");
Y([
  X()
], K.prototype, "mergeCells");
Y([
  X()
], K.prototype, "setCellRenderer");
Y([
  X()
], K.prototype, "setColumnWidth");
Y([
  X()
], K.prototype, "setRowHeight");
Y([
  X()
], K.prototype, "setCell");
Y([
  X()
], K.prototype, "addRow");
Y([
  X()
], K.prototype, "removeRows");
Y([
  X()
], K.prototype, "removeColumns");
Y([
  X()
], K.prototype, "addColumn");
Y([
  X()
], K.prototype, "insertRows");
Y([
  X()
], K.prototype, "insertColumns");
Y([
  X()
], K.prototype, "clearCells");
Y([
  X()
], K.prototype, "setRowVisible");
Y([
  X()
], K.prototype, "setColumnVisible");
Y([
  X()
], K.prototype, "exchangeRows");
Y([
  X()
], K.prototype, "exchangeColumns");
Y([
  X()
], K.prototype, "moveRows");
Y([
  X()
], K.prototype, "moveColumns");
const Wu = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, $u = /^-?\d+(\.\d+)?$/;
export {
  Wu as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  $u as ALLOW_ONLY_NUMBER_PATTERN,
  Lu as CellDropPlugin,
  Mu as ColumnFillPlugin,
  Po as CustomCellRenderer,
  Eu as DefaultKeyPlugin,
  K as IRGrid,
  Sl as IRGridButtonRenderer,
  Da as IRGridCell,
  Zo as IRGridCellDropPlugin,
  oe as IRGridCellRenderer,
  Co as IRGridCheckboxRenderer,
  cc as IRGridColumnFillPlugin,
  gl as IRGridDatePickerRenderer,
  El as IRGridDefaultCellIconButtonRenderer,
  cn as IRGridDefaultCellRenderer,
  Xo as IRGridDefaultKeyPlugin,
  Ou as IRGridExchangeByHeaderCellPlugin,
  Uo as IRGridMouseCellSelectorPlugin,
  Fu as IRGridMoveColumnsPlugin,
  Au as IRGridMoveRowsPlugin,
  zu as IRGridOverflowPanelPlugin,
  gc as IRGridPopoverPlugin,
  Cl as IRGridProgressRenderer,
  zo as IRGridRadioCellRenderer,
  jo as IRGridResizerPlugin,
  Ba as IRGridRow,
  vu as IRGridRowFilterCellRenderer,
  Pu as IRGridRowFilterPlugin,
  Tl as IRGridRowNoHeaderCellRenderer,
  rc as IRGridRowSelectionPlugin,
  hl as IRGridSelectCellRenderer,
  uc as IRGridSingleCellDragPlugin,
  Du as IRGridTablePlugin,
  Iu as MouseCellSelectorPlugin,
  ku as ResizerPlugin,
  Tu as RowSelectionPlugin,
  re as STICKY_Z_INDEX,
  Hu as SingleCellDragPlugin,
  hn as cellCompare,
  $n as cellTextToNum,
  Do as createCellContent,
  Il as createCellContentWithIconButton,
  bu as createCustomRenderer,
  Sc as createIRGridColumnSortManager,
  Su as createInferenceSortHandler,
  Wn as numberCheckDefault,
  Cu as renderGridButton,
  Ru as renderGridCellDefault,
  xu as renderGridCellIconButton,
  hu as renderGridCheckbox,
  pu as renderGridDatePicker,
  wu as renderGridProgress,
  _u as renderGridRadio,
  mu as renderGridSelect,
  yu as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
