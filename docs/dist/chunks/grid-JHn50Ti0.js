import { az as Po, I as Do, aA as $o, K as Wo, L as Vn, aB as No, aC as Gn, m as Bo, o as Vo, u as Go, n as jo, s as Ko, l as Uo, aD as qo, aE as Xo, aF as Zo, aG as Yo, aH as Jo, a9 as Qo, aI as jt, aJ as es, aK as ts, a as Xe, aL as xe, aM as ns, Q as os, aN as ss, aO as jn, G as rs, H as rn, aP as is, aQ as ls, aR as as, aS as cs, O as fe, aT as St, aU as us, aV as ds, aW as hs, aX as fs, aY as gs, aZ as P, a_ as ln, U as an, a$ as ms, b0 as ps, b1 as ws, b2 as Cs, b3 as _s, b4 as Rs, b5 as ys, b6 as xs, b7 as bs, b8 as Ss, b9 as vs, ba as ks, bb as Is, bc as Es, bd as Ms, be as Ts, bf as Kn, bg as Un, ac as Ze, bh as Ls, bi as Hs, ak as Os, bj as As, bk as zs, bl as Fs, bm as Ps, bn as Ds, bo as cn, bp as $s, bq as Ws, br as Ns, bs as Bs, ar as Vs } from "./css-COHHTvb1.js";
import { r as D, I as Ae, e as Gs, g as js, d as Ks, f as Us } from "./command-manager-Bk_Y5EIz.js";
import { c as be } from "./asserts-CpwDJsre.js";
import { o as qs, m as Xs, g as Kt, a as qn, f as ct, c as Zs, R as Ut, e as U, d as Ys, C as Js, l as Qs } from "./rx-state-PaqZIPpP.js";
import { e as Xn, b as Zn, h as Yn, v as er, g as un, c as tr, o as nr, f as or, s as sr } from "./floating-C8SHvpqf.js";
import { i as Q, d as Pt } from "./index-Bmt0z1bM.js";
import { c as dn } from "./clsx-OuTLNxxd.js";
import { c as rr, a as He, b as ut } from "./outside-D1z8pt7M.js";
import { c as ir } from "./hook-flow-h5XBPdBp.js";
import { p as lr } from "./pick-BLZiDVxr.js";
import { i as Jn, r as ar, w as hn } from "./in-memory-clipboard-DGTN1iKi.js";
import { I as cr } from "./index-CtZXoe_l.js";
class ur {
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
function vt(o, e) {
  return qs(function(t, n) {
    var s = 0;
    t.subscribe(Xs(n, function(r) {
      n.next(o.call(e, r, s++));
    }));
  });
}
function fn(o, e, t) {
  return Qn(o, t) && eo(e, t);
}
function dt(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1", 10), t = parseInt(o.getAttribute("data-col") || "-1", 10);
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function Qn(o, e) {
  return o >= e.top && o <= e.bottom;
}
function eo(o, e) {
  return o >= e.left && o <= e.right;
}
function dr(o, e) {
  let t = o.firstChild, n = e;
  for (; t; ) {
    let s = t.firstChild;
    for (; s; )
      s instanceof HTMLElement && s.isConnected && s.dataset.ignoreAutoSize === void 0 && (n = Math.max(s.offsetHeight, n)), s = s.nextSibling;
    t = t.nextSibling;
  }
  return n;
}
function hr(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const fr = 20, gr = 5;
class Ce {
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
    const s = Kt(e, t), r = [n.icon, n.sortOrder].reduce((u, d) => d ? u + 1 : u, 0) * (fr + gr), i = `${this.getDisplayText(n)}`.split(`
`), l = r + s.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + D(1, i.length).reduce(
      (u, d) => Math.max(u, s.calculateWidth(i[d])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    return this.getVerticalCellPadding(t) + dr(
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
  getDisplayText(e) {
    return e.text ?? "";
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
class q extends ur {
}
class Se extends q {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args, s = this._instance.getCellMetaInfo(e, t), r = new Set(Object.keys(s));
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: lr(
        s,
        n
      ),
      removeKeys: Object.keys(n).filter((i) => !r.has(i))
    };
  }
  _undo() {
    this._instance.setCell(
      this._args[0],
      this._args[1],
      {
        ...this._undoContext.beforeValue,
        ...Object.fromEntries(this._undoContext.removeKeys.map((e) => [e, void 0]))
      }
    );
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
const je = {
  checkbox: Do,
  checkboxWrapper: Wo,
  checkboxText: Gn,
  checkboxInput: Vn,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, mr = 16, Dt = 6, pr = Dt * 2, wr = 20;
class to extends Ce {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.classList.add(Po, je.checkbox), r.classList.add($o, je.checkboxWrapper), i.type = "checkbox", i.className = je.checkboxInput, r.appendChild(i), n.icon && r.appendChild(qn(ct(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${No} ${je.checkboxText}`, l.innerText = n.label, r.appendChild(l);
    }
    return n.horizontalAlign && s.classList.add(je[`horizontal_${n.horizontalAlign}`]), s.appendChild(r), i.checked = n.text === "true", r.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: d } = n.gridStore, c = new Se(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, d.pushCommandBlock(new Ae(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, s;
  }
  getCellInnerWidth(e, t, n) {
    const s = Kt(e, t), r = n.label ? Dt + s.calculateWidth(n.label) : 0, i = n.icon ? Dt + wr : 0;
    return mr + pr + r + i + this.getHorizontalCellPadding(n);
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
function Ya(o) {
  const e = new to(o ?? {});
  return () => e;
}
const Cr = !1, _r = (o, e) => o === e, ue = Symbol("solid-proxy"), Rr = typeof Proxy == "function", $t = Symbol("solid-track"), ht = {
  equals: _r
};
let no = io;
const pe = 1, ft = 2, oo = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var W = null;
let kt = null, yr = null, V = null, ee = null, ge = null, _t = 0;
function it(o, e) {
  const t = V, n = W, s = o.length === 0, r = e === void 0 ? n : e, i = s ? oo : {
    owned: null,
    cleanups: null,
    context: r ? r.context : null,
    owner: r
  }, l = s ? o : () => o(() => ae(() => Ye(i)));
  W = i, V = null;
  try {
    return De(l, !0);
  } finally {
    V = t, W = n;
  }
}
function de(o, e) {
  e = e ? Object.assign({}, ht, e) : ht;
  const t = {
    value: o,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(t.value)), ro(t, s));
  return [so.bind(t), n];
}
function xr(o, e, t) {
  const n = Rt(o, e, !0, pe);
  Pe(n);
}
function j(o, e, t) {
  const n = Rt(o, e, !1, pe);
  Pe(n);
}
function br(o, e, t) {
  no = Mr;
  const n = Rt(o, e, !1, pe);
  n.user = !0, ge ? ge.push(n) : Pe(n);
}
function se(o, e, t) {
  t = t ? Object.assign({}, ht, t) : ht;
  const n = Rt(o, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = t.equals || void 0, Pe(n), so.bind(n);
}
function Sr(o) {
  return De(o, !1);
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
function Fe(o) {
  br(() => ae(o));
}
function ke(o) {
  return W === null || (W.cleanups === null ? W.cleanups = [o] : W.cleanups.push(o)), o;
}
function Wt() {
  return V;
}
const [Ja, Qa] = /* @__PURE__ */ de(!1);
function vr(o, e) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: Lr(t),
    defaultValue: o
  };
}
function kr(o) {
  let e;
  return W && W.context && (e = W.context[o.id]) !== void 0 ? e : o.defaultValue;
}
function qt(o) {
  const e = se(o), t = se(() => Nt(e()));
  return t.toArray = () => {
    const n = t();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, t;
}
function so() {
  if (this.sources && this.state)
    if (this.state === pe) Pe(this);
    else {
      const o = ee;
      ee = null, De(() => mt(this), !1), ee = o;
    }
  if (V) {
    const o = this.observers ? this.observers.length : 0;
    V.sources ? (V.sources.push(this), V.sourceSlots.push(o)) : (V.sources = [this], V.sourceSlots = [o]), this.observers ? (this.observers.push(V), this.observerSlots.push(V.sources.length - 1)) : (this.observers = [V], this.observerSlots = [V.sources.length - 1]);
  }
  return this.value;
}
function ro(o, e, t) {
  let n = o.value;
  return (!o.comparator || !o.comparator(n, e)) && (o.value = e, o.observers && o.observers.length && De(() => {
    for (let s = 0; s < o.observers.length; s += 1) {
      const r = o.observers[s], i = kt && kt.running;
      i && kt.disposed.has(r), (i ? !r.tState : !r.state) && (r.pure ? ee.push(r) : ge.push(r), r.observers && lo(r)), i || (r.state = pe);
    }
    if (ee.length > 1e6)
      throw ee = [], new Error();
  }, !1)), e;
}
function Pe(o) {
  if (!o.fn) return;
  Ye(o);
  const e = _t;
  Ir(o, o.value, e);
}
function Ir(o, e, t) {
  let n;
  const s = W, r = V;
  V = W = o;
  try {
    n = o.fn(e);
  } catch (i) {
    return o.pure && (o.state = pe, o.owned && o.owned.forEach(Ye), o.owned = null), o.updatedAt = t + 1, ao(i);
  } finally {
    V = r, W = s;
  }
  (!o.updatedAt || o.updatedAt <= t) && (o.updatedAt != null && "observers" in o ? ro(o, n) : o.value = n, o.updatedAt = t);
}
function Rt(o, e, t, n = pe, s) {
  const r = {
    fn: o,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: W,
    context: W ? W.context : null,
    pure: t
  };
  return W === null || W !== oo && (W.owned ? W.owned.push(r) : W.owned = [r]), r;
}
function gt(o) {
  if (o.state === 0) return;
  if (o.state === ft) return mt(o);
  if (o.suspense && ae(o.suspense.inFallback)) return o.suspense.effects.push(o);
  const e = [o];
  for (; (o = o.owner) && (!o.updatedAt || o.updatedAt < _t); )
    o.state && e.push(o);
  for (let t = e.length - 1; t >= 0; t--)
    if (o = e[t], o.state === pe)
      Pe(o);
    else if (o.state === ft) {
      const n = ee;
      ee = null, De(() => mt(o, e[0]), !1), ee = n;
    }
}
function De(o, e) {
  if (ee) return o();
  let t = !1;
  e || (ee = []), ge ? t = !0 : ge = [], _t++;
  try {
    const n = o();
    return Er(t), n;
  } catch (n) {
    t || (ge = null), ee = null, ao(n);
  }
}
function Er(o) {
  if (ee && (io(ee), ee = null), o) return;
  const e = ge;
  ge = null, e.length && De(() => no(e), !1);
}
function io(o) {
  for (let e = 0; e < o.length; e++) gt(o[e]);
}
function Mr(o) {
  let e, t = 0;
  for (e = 0; e < o.length; e++) {
    const n = o[e];
    n.user ? o[t++] = n : gt(n);
  }
  for (e = 0; e < t; e++) gt(o[e]);
}
function mt(o, e) {
  o.state = 0;
  for (let t = 0; t < o.sources.length; t += 1) {
    const n = o.sources[t];
    if (n.sources) {
      const s = n.state;
      s === pe ? n !== e && (!n.updatedAt || n.updatedAt < _t) && gt(n) : s === ft && mt(n, e);
    }
  }
}
function lo(o) {
  for (let e = 0; e < o.observers.length; e += 1) {
    const t = o.observers[e];
    t.state || (t.state = ft, t.pure ? ee.push(t) : ge.push(t), t.observers && lo(t));
  }
}
function Ye(o) {
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
    for (e = o.tOwned.length - 1; e >= 0; e--) Ye(o.tOwned[e]);
    delete o.tOwned;
  }
  if (o.owned) {
    for (e = o.owned.length - 1; e >= 0; e--) Ye(o.owned[e]);
    o.owned = null;
  }
  if (o.cleanups) {
    for (e = o.cleanups.length - 1; e >= 0; e--) o.cleanups[e]();
    o.cleanups = null;
  }
  o.state = 0;
}
function Tr(o) {
  return o instanceof Error ? o : new Error(typeof o == "string" ? o : "Unknown error", {
    cause: o
  });
}
function ao(o, e = W) {
  throw Tr(o);
}
function Nt(o) {
  if (typeof o == "function" && !o.length) return Nt(o());
  if (Array.isArray(o)) {
    const e = [];
    for (let t = 0; t < o.length; t++) {
      const n = Nt(o[t]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return o;
}
function Lr(o, e) {
  return function(n) {
    let s;
    return j(() => s = ae(() => (W.context = {
      ...W.context,
      [o]: n.value
    }, qt(() => n.children))), void 0), s;
  };
}
const Hr = Symbol("fallback");
function gn(o) {
  for (let e = 0; e < o.length; e++) o[e]();
}
function Or(o, e, t = {}) {
  let n = [], s = [], r = [], i = 0, l = e.length > 1 ? [] : null;
  return ke(() => gn(r)), () => {
    let u = o() || [], d = u.length, c, a;
    return u[$t], ae(() => {
      let f, w, M, b, I, x, L, v, p;
      if (d === 0)
        i !== 0 && (gn(r), r = [], n = [], s = [], i = 0, l && (l = [])), t.fallback && (n = [Hr], s[0] = it((m) => (r[0] = m, t.fallback())), i = 1);
      else if (i === 0) {
        for (s = new Array(d), a = 0; a < d; a++)
          n[a] = u[a], s[a] = it(h);
        i = d;
      } else {
        for (M = new Array(d), b = new Array(d), l && (I = new Array(d)), x = 0, L = Math.min(i, d); x < L && n[x] === u[x]; x++) ;
        for (L = i - 1, v = d - 1; L >= x && v >= x && n[L] === u[v]; L--, v--)
          M[v] = s[L], b[v] = r[L], l && (I[v] = l[L]);
        for (f = /* @__PURE__ */ new Map(), w = new Array(v + 1), a = v; a >= x; a--)
          p = u[a], c = f.get(p), w[a] = c === void 0 ? -1 : c, f.set(p, a);
        for (c = x; c <= L; c++)
          p = n[c], a = f.get(p), a !== void 0 && a !== -1 ? (M[a] = s[c], b[a] = r[c], l && (I[a] = l[c]), a = w[a], f.set(p, a)) : r[c]();
        for (a = x; a < d; a++)
          a in M ? (s[a] = M[a], r[a] = b[a], l && (l[a] = I[a], l[a](a))) : s[a] = it(h);
        s = s.slice(0, i = d), n = u.slice(0);
      }
      return s;
    });
    function h(f) {
      if (r[a] = f, l) {
        const [w, M] = de(a);
        return l[a] = M, e(u[a], w);
      }
      return e(u[a]);
    }
  };
}
function A(o, e) {
  return ae(() => o(e || {}));
}
function nt() {
  return !0;
}
const Ar = {
  get(o, e, t) {
    return e === ue ? t : o.get(e);
  },
  has(o, e) {
    return e === ue ? !0 : o.has(e);
  },
  set: nt,
  deleteProperty: nt,
  getOwnPropertyDescriptor(o, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return o.get(e);
      },
      set: nt,
      deleteProperty: nt
    };
  },
  ownKeys(o) {
    return o.keys();
  }
};
function It(o) {
  return (o = typeof o == "function" ? o() : o) ? o : {};
}
function zr() {
  for (let o = 0, e = this.length; o < e; ++o) {
    const t = this[o]();
    if (t !== void 0) return t;
  }
}
function pt(...o) {
  let e = !1;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    e = e || !!l && ue in l, o[i] = typeof l == "function" ? (e = !0, se(l)) : l;
  }
  if (Rr && e)
    return new Proxy({
      get(i) {
        for (let l = o.length - 1; l >= 0; l--) {
          const u = It(o[l])[i];
          if (u !== void 0) return u;
        }
      },
      has(i) {
        for (let l = o.length - 1; l >= 0; l--)
          if (i in It(o[l])) return !0;
        return !1;
      },
      keys() {
        const i = [];
        for (let l = 0; l < o.length; l++) i.push(...Object.keys(It(o[l])));
        return [...new Set(i)];
      }
    }, Ar);
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
          get: zr.bind(t[c] = [a.get.bind(l)])
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
const co = (o) => `Stale read from <${o}>.`;
function Xt(o) {
  const e = "fallback" in o && {
    fallback: () => o.fallback
  };
  return se(Or(() => o.each, o.children, e || void 0));
}
function _e(o) {
  const e = o.keyed, t = se(() => o.when, void 0, void 0), n = e ? t : se(t, void 0, {
    equals: (s, r) => !s == !r
  });
  return se(() => {
    const s = n();
    if (s) {
      const r = o.children;
      return typeof r == "function" && r.length > 0 ? ae(() => r(e ? s : () => {
        if (!ae(n)) throw co("Show");
        return t();
      })) : r;
    }
    return o.fallback;
  }, void 0, void 0);
}
function Zt(o) {
  const e = qt(() => o.children), t = se(() => {
    const n = e(), s = Array.isArray(n) ? n : [n];
    let r = () => {
    };
    for (let i = 0; i < s.length; i++) {
      const l = i, u = s[i], d = r, c = se(() => d() ? void 0 : u.when, void 0, void 0), a = u.keyed ? c : se(c, void 0, {
        equals: (h, f) => !h == !f
      });
      r = () => d() || (a() ? [l, c, u] : void 0);
    }
    return r;
  });
  return se(() => {
    const n = t()();
    if (!n) return o.fallback;
    const [s, r, i] = n, l = i.children;
    return typeof l == "function" && l.length > 0 ? ae(() => l(i.keyed ? r() : () => {
      if (ae(t)()?.[0] !== s) throw co("Match");
      return r();
    })) : l;
  }, void 0, void 0);
}
function we(o) {
  return o;
}
const Fr = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Pr = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...Fr]), Dr = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), $r = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Wr = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function Nr(o, e) {
  const t = Wr[o];
  return typeof t == "object" ? t[e] ? t.$ : void 0 : t;
}
const Br = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
function Vr(o, e, t) {
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
const mn = "_$DX_DELEGATE";
function ec(o, e, t, n = {}) {
  let s;
  return it((r) => {
    s = r, e === document ? o() : G(e, o(), e.firstChild ? null : void 0, t);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function Y(o, e, t, n) {
  let s;
  const r = () => {
    const l = document.createElement("template");
    return l.innerHTML = o, l.content.firstChild;
  }, i = () => (s || (s = r())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function yt(o, e = window.document) {
  const t = e[mn] || (e[mn] = /* @__PURE__ */ new Set());
  for (let n = 0, s = o.length; n < s; n++) {
    const r = o[n];
    t.has(r) || (t.add(r), e.addEventListener(r, Xr));
  }
}
function ce(o, e, t) {
  t == null ? o.removeAttribute(e) : o.setAttribute(e, t);
}
function Gr(o, e, t) {
  t ? o.setAttribute(e, "") : o.removeAttribute(e);
}
function N(o, e) {
  e == null ? o.removeAttribute("class") : o.className = e;
}
function xt(o, e, t, n) {
  if (n)
    Array.isArray(t) ? (o[`$$${e}`] = t[0], o[`$$${e}Data`] = t[1]) : o[`$$${e}`] = t;
  else if (Array.isArray(t)) {
    const s = t[0];
    o.addEventListener(e, t[0] = (r) => s.call(o, t[1], r));
  } else o.addEventListener(e, t, typeof t != "function" && t);
}
function uo(o, e, t = {}) {
  const n = Object.keys(e || {}), s = Object.keys(t);
  let r, i;
  for (r = 0, i = s.length; r < i; r++) {
    const l = s[r];
    !l || l === "undefined" || e[l] || (pn(o, l, !1), delete t[l]);
  }
  for (r = 0, i = n.length; r < i; r++) {
    const l = n[r], u = !!e[l];
    !l || l === "undefined" || t[l] === u || !u || (pn(o, l, !0), t[l] = u);
  }
  return t;
}
function jr(o, e, t) {
  if (!e) return t ? ce(o, "style") : e;
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
function Kr(o, e = {}, t, n) {
  const s = {};
  return n || j(() => s.children = Je(o, e.children, s.children)), j(() => typeof e.ref == "function" && me(e.ref, o)), j(() => Ur(o, e, t, !0, s, !0)), s;
}
function me(o, e, t) {
  return ae(() => o(e, t));
}
function G(o, e, t, n) {
  if (t !== void 0 && !n && (n = []), typeof e != "function") return Je(o, e, n, t);
  j((s) => Je(o, e(), s, t), n);
}
function Ur(o, e, t, n, s = {}, r = !1) {
  e || (e = {});
  for (const i in s)
    if (!(i in e)) {
      if (i === "children") continue;
      s[i] = wn(o, i, null, s[i], t, r, e);
    }
  for (const i in e) {
    if (i === "children")
      continue;
    const l = e[i];
    s[i] = wn(o, i, l, s[i], t, r, e);
  }
}
function qr(o) {
  return o.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function pn(o, e, t) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, r = n.length; s < r; s++) o.classList.toggle(n[s], t);
}
function wn(o, e, t, n, s, r, i) {
  let l, u, d, c, a;
  if (e === "style") return jr(o, t, n);
  if (e === "classList") return uo(o, t, n);
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
    const h = e.slice(2).toLowerCase(), f = Br.has(h);
    if (!f && n) {
      const w = Array.isArray(n) ? n[0] : n;
      o.removeEventListener(h, w);
    }
    (f || t) && (xt(o, h, t, f), f && yt([h]));
  } else e.slice(0, 5) === "attr:" ? ce(o, e.slice(5), t) : e.slice(0, 5) === "bool:" ? Gr(o, e.slice(5), t) : (a = e.slice(0, 5) === "prop:") || (d = Dr.has(e)) || (c = Nr(e, o.tagName)) || (u = Pr.has(e)) || (l = o.nodeName.includes("-") || "is" in i) ? (a && (e = e.slice(5), u = !0), e === "class" || e === "className" ? N(o, t) : l && !u && !d ? o[qr(e)] = t : o[c || e] = t) : ce(o, $r[e] || e, t);
  return t;
}
function Xr(o) {
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
function Je(o, e, t, n, s) {
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const r = typeof e, i = n !== void 0;
  if (o = i && t[0] && t[0].parentNode || o, r === "string" || r === "number") {
    if (r === "number" && (e = e.toString(), e === t))
      return t;
    if (i) {
      let l = t[0];
      l && l.nodeType === 3 ? l.data !== e && (l.data = e) : l = document.createTextNode(e), t = Me(o, t, n, l);
    } else
      t !== "" && typeof t == "string" ? t = o.firstChild.data = e : t = o.textContent = e;
  } else if (e == null || r === "boolean")
    t = Me(o, t, n);
  else {
    if (r === "function")
      return j(() => {
        let l = e();
        for (; typeof l == "function"; ) l = l();
        t = Je(o, l, t, n);
      }), () => t;
    if (Array.isArray(e)) {
      const l = [], u = t && Array.isArray(t);
      if (Bt(l, e, t, s))
        return j(() => t = Je(o, l, t, n, !0)), () => t;
      if (l.length === 0) {
        if (t = Me(o, t, n), i) return t;
      } else u ? t.length === 0 ? Cn(o, l, n) : Vr(o, t, l) : (t && Me(o), Cn(o, l));
      t = l;
    } else if (e.nodeType) {
      if (Array.isArray(t)) {
        if (i) return t = Me(o, t, n, e);
        Me(o, t, null, e);
      } else t == null || t === "" || !o.firstChild ? o.appendChild(e) : o.replaceChild(e, o.firstChild);
      t = e;
    }
  }
  return t;
}
function Bt(o, e, t, n) {
  let s = !1;
  for (let r = 0, i = e.length; r < i; r++) {
    let l = e[r], u = t && t[o.length], d;
    if (!(l == null || l === !0 || l === !1)) if ((d = typeof l) == "object" && l.nodeType)
      o.push(l);
    else if (Array.isArray(l))
      s = Bt(o, l, u) || s;
    else if (d === "function")
      if (n) {
        for (; typeof l == "function"; ) l = l();
        s = Bt(o, Array.isArray(l) ? l : [l], Array.isArray(u) ? u : [u]) || s;
      } else
        o.push(l), s = !0;
    else {
      const c = String(l);
      u && u.nodeType === 3 && u.data === c ? o.push(u) : o.push(document.createTextNode(c));
    }
  }
  return s;
}
function Cn(o, e, t = null) {
  for (let n = 0, s = e.length; n < s; n++) o.insertBefore(e[n], t);
}
function Me(o, e, t, n) {
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
function Te(o, e, t) {
  let n = t.initialDeps ?? [], s;
  function r() {
    var i, l, u, d;
    let c;
    t.key && ((i = t.debug) != null && i.call(t)) && (c = Date.now());
    const a = o();
    if (!(a.length !== n.length || a.some((w, M) => n[M] !== w)))
      return s;
    n = a;
    let f;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (f = Date.now()), s = e(...a), t.key && ((u = t.debug) != null && u.call(t))) {
      const w = Math.round((Date.now() - c) * 100) / 100, M = Math.round((Date.now() - f) * 100) / 100, b = M / 16, I = (x, L) => {
        for (x = String(x); x.length < L; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${I(M, 5)} /${I(w, 5)} ms`,
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
function _n(o, e) {
  if (o === void 0)
    throw new Error("Unexpected undefined");
  return o;
}
const Zr = (o, e) => Math.abs(o - e) < 1.01, Yr = (o, e, t) => {
  let n;
  return function(...s) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, s), t);
  };
}, Rn = (o) => {
  const { offsetWidth: e, offsetHeight: t } = o;
  return { width: e, height: t };
}, Jr = (o) => o, Qr = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let s = e; s <= t; s++)
    n.push(s);
  return n;
}, ei = (o, e) => {
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
  if (s(Rn(t)), !n.ResizeObserver)
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
      s(Rn(t));
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, yn = {
  passive: !0
}, xn = typeof window > "u" ? !0 : "onscrollend" in window, ti = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let s = 0;
  const r = o.options.useScrollendEvent && xn ? () => {
  } : Yr(
    n,
    () => {
      e(s, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (c) => () => {
    const { horizontal: a, isRtl: h } = o.options;
    s = a ? t.scrollLeft * (h && -1 || 1) : t.scrollTop, r(), e(s, c);
  }, l = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", l, yn);
  const d = o.options.useScrollendEvent && xn;
  return d && t.addEventListener("scrollend", u, yn), () => {
    t.removeEventListener("scroll", l), d && t.removeEventListener("scrollend", u);
  };
}, ni = (o, e, t) => {
  if (e?.borderBoxSize) {
    const n = e.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return o[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, oi = (o, {
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
class si {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
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
        getItemKey: Jr,
        rangeExtractor: Qr,
        onChange: () => {
        },
        measureElement: ni,
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
    }, this.maybeNotify = Te(
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
    }, this.getMeasurementOptions = Te(
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
    ), this.getMeasurements = Te(
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
          const a = r(c), h = this.options.lanes === 1 ? d[c - 1] : this.getFurthestMeasurement(d, c), f = h ? h.end + this.options.gap : n + s, w = l.get(a), M = typeof w == "number" ? w : this.options.estimateSize(c), b = f + M, I = h ? h.lane : c % this.options.lanes;
          d[c] = {
            index: c,
            start: f,
            size: M,
            end: b,
            key: a,
            lane: I
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Te(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, r) => this.range = t.length > 0 && n > 0 ? ri({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: r
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Te(
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
    }, this.getVirtualItems = Te(
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
        return _n(
          n[ho(
            0,
            n.length - 1,
            (s) => _n(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const r = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const l = this.getTotalSize() + this.options.scrollMargin - r;
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
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: n = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let r = 0;
      const i = 10, l = (d) => {
        if (!this.targetWindow) return;
        const c = this.getOffsetForIndex(t, d);
        if (!c) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [a, h] = c;
        this._scrollToOffset(a, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const f = this.getScrollOffset(), w = this.getOffsetForIndex(t, h);
          if (!w) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Zr(w[0], f) || u(h);
        });
      }, u = (d) => {
        this.targetWindow && (r++, r < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
        ));
      };
      l(n);
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      n === "smooth" && this.isDynamicMode() && console.warn(
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
const ho = (o, e, t, n) => {
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
function ri({
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
  let i = ho(
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
const Vt = Symbol("store-raw"), Oe = Symbol("store-node"), he = Symbol("store-has"), fo = Symbol("store-self");
function go(o) {
  let e = o[ue];
  if (!e && (Object.defineProperty(o, ue, {
    value: e = new Proxy(o, ai)
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
function Re(o) {
  let e;
  return o != null && typeof o == "object" && (o[ue] || !(e = Object.getPrototypeOf(o)) || e === Object.prototype || Array.isArray(o));
}
function ze(o, e = /* @__PURE__ */ new Set()) {
  let t, n, s, r;
  if (t = o != null && o[Vt]) return t;
  if (!Re(o) || e.has(o)) return o;
  if (Array.isArray(o)) {
    Object.isFrozen(o) ? o = o.slice(0) : e.add(o);
    for (let i = 0, l = o.length; i < l; i++)
      s = o[i], (n = ze(s, e)) !== s && (o[i] = n);
  } else {
    Object.isFrozen(o) ? o = Object.assign({}, o) : e.add(o);
    const i = Object.keys(o), l = Object.getOwnPropertyDescriptors(o);
    for (let u = 0, d = i.length; u < d; u++)
      r = i[u], !l[r].get && (s = o[r], (n = ze(s, e)) !== s && (o[r] = n));
  }
  return o;
}
function wt(o, e) {
  let t = o[e];
  return t || Object.defineProperty(o, e, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function Qe(o, e, t) {
  if (o[e]) return o[e];
  const [n, s] = de(t, {
    equals: !1,
    internal: !0
  });
  return n.$ = s, o[e] = n;
}
function ii(o, e) {
  const t = Reflect.getOwnPropertyDescriptor(o, e);
  return !t || t.get || !t.configurable || e === ue || e === Oe || (delete t.value, delete t.writable, t.get = () => o[ue][e]), t;
}
function mo(o) {
  Wt() && Qe(wt(o, Oe), fo)();
}
function li(o) {
  return mo(o), Reflect.ownKeys(o);
}
const ai = {
  get(o, e, t) {
    if (e === Vt) return o;
    if (e === ue) return t;
    if (e === $t)
      return mo(o), t;
    const n = wt(o, Oe), s = n[e];
    let r = s ? s() : o[e];
    if (e === Oe || e === he || e === "__proto__") return r;
    if (!s) {
      const i = Object.getOwnPropertyDescriptor(o, e);
      Wt() && (typeof r != "function" || o.hasOwnProperty(e)) && !(i && i.get) && (r = Qe(n, e, r)());
    }
    return Re(r) ? go(r) : r;
  },
  has(o, e) {
    return e === Vt || e === ue || e === $t || e === Oe || e === he || e === "__proto__" ? !0 : (Wt() && Qe(wt(o, he), e)(), e in o);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: li,
  getOwnPropertyDescriptor: ii
};
function ne(o, e, t, n = !1) {
  if (!n && o[e] === t) return;
  const s = o[e], r = o.length;
  t === void 0 ? (delete o[e], o[he] && o[he][e] && s !== void 0 && o[he][e].$()) : (o[e] = t, o[he] && o[he][e] && s === void 0 && o[he][e].$());
  let i = wt(o, Oe), l;
  if ((l = Qe(i, e, s)) && l.$(() => t), Array.isArray(o) && o.length !== r) {
    for (let u = o.length; u < r; u++) (l = i[u]) && l.$();
    (l = Qe(i, "length", r)) && l.$(o.length);
  }
  (l = i[fo]) && l.$();
}
function po(o, e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1) {
    const s = t[n];
    ne(o, s, e[s]);
  }
}
function ci(o, e) {
  if (typeof e == "function" && (e = e(o)), e = ze(e), Array.isArray(e)) {
    if (o === e) return;
    let t = 0, n = e.length;
    for (; t < n; t++) {
      const s = e[t];
      o[t] !== s && ne(o, t, s);
    }
    ne(o, "length", n);
  } else po(o, e);
}
function Ue(o, e, t = []) {
  let n, s = o;
  if (e.length > 1) {
    n = e.shift();
    const i = typeof n, l = Array.isArray(o);
    if (Array.isArray(n)) {
      for (let u = 0; u < n.length; u++)
        Ue(o, [n[u]].concat(e), t);
      return;
    } else if (l && i === "function") {
      for (let u = 0; u < o.length; u++)
        n(o[u], u) && Ue(o, [u].concat(e), t);
      return;
    } else if (l && i === "object") {
      const {
        from: u = 0,
        to: d = o.length - 1,
        by: c = 1
      } = n;
      for (let a = u; a <= d; a += c)
        Ue(o, [a].concat(e), t);
      return;
    } else if (e.length > 1) {
      Ue(o[n], e, [n].concat(t));
      return;
    }
    s = o[n], t = [n].concat(t);
  }
  let r = e[0];
  typeof r == "function" && (r = r(s, t), r === s) || n === void 0 && r == null || (r = ze(r), n === void 0 || Re(s) && Re(r) && !Array.isArray(r) ? po(s, r) : ne(o, n, r));
}
function ui(...[o, e]) {
  const t = ze(o || {}), n = Array.isArray(t), s = go(t);
  function r(...i) {
    Sr(() => {
      n && i.length === 1 ? ci(t, i[0]) : Ue(t, i);
    });
  }
  return [s, r];
}
const Gt = Symbol("store-root");
function Le(o, e, t, n, s) {
  const r = e[t];
  if (o === r) return;
  const i = Array.isArray(o);
  if (t !== Gt && (!Re(o) || !Re(r) || i !== Array.isArray(r) || s && o[s] !== r[s])) {
    ne(e, t, o);
    return;
  }
  if (i) {
    if (o.length && r.length && (!n || s && o[0] && o[0][s] != null)) {
      let d, c, a, h, f, w, M, b;
      for (a = 0, h = Math.min(r.length, o.length); a < h && (r[a] === o[a] || s && r[a] && o[a] && r[a][s] === o[a][s]); a++)
        Le(o[a], r, a, n, s);
      const I = new Array(o.length), x = /* @__PURE__ */ new Map();
      for (h = r.length - 1, f = o.length - 1; h >= a && f >= a && (r[h] === o[f] || s && r[h] && o[f] && r[h][s] === o[f][s]); h--, f--)
        I[f] = r[h];
      if (a > f || a > h) {
        for (c = a; c <= f; c++) ne(r, c, o[c]);
        for (; c < o.length; c++)
          ne(r, c, I[c]), Le(o[c], r, c, n, s);
        r.length > o.length && ne(r, "length", o.length);
        return;
      }
      for (M = new Array(f + 1), c = f; c >= a; c--)
        w = o[c], b = s && w ? w[s] : w, d = x.get(b), M[c] = d === void 0 ? -1 : d, x.set(b, c);
      for (d = a; d <= h; d++)
        w = r[d], b = s && w ? w[s] : w, c = x.get(b), c !== void 0 && c !== -1 && (I[c] = r[d], c = M[c], x.set(b, c));
      for (c = a; c < o.length; c++)
        c in I ? (ne(r, c, I[c]), Le(o[c], r, c, n, s)) : ne(r, c, o[c]);
    } else
      for (let d = 0, c = o.length; d < c; d++)
        Le(o[d], r, d, n, s);
    r.length > o.length && ne(r, "length", o.length);
    return;
  }
  const l = Object.keys(o);
  for (let d = 0, c = l.length; d < c; d++)
    Le(o[l[d]], r, l[d], n, s);
  const u = Object.keys(r);
  for (let d = 0, c = u.length; d < c; d++)
    o[u[d]] === void 0 && ne(r, u[d], void 0);
}
function di(o, e = {}) {
  const {
    merge: t,
    key: n = "id"
  } = e, s = ze(o);
  return (r) => {
    if (!Re(r) || !Re(s)) return s;
    const i = Le(s, {
      [Gt]: r
    }, Gt, t, n);
    return i === void 0 ? r : i;
  };
}
function hi(o) {
  const e = pt(o), t = new si(e), [n, s] = ui(t.getVirtualItems()), [r, i] = de(t.getTotalSize()), l = {
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
  return u.setOptions(e), Fe(() => {
    const d = u._didMount();
    u._willUpdate(), ke(d);
  }), xr(() => {
    u.setOptions(pt(e, o, {
      onChange: (d, c) => {
        var a;
        d._willUpdate(), s(di(d.getVirtualItems(), {
          key: "index"
        })), i(d.getTotalSize()), (a = o.onChange) == null || a.call(o, d, c);
      }
    })), u.measure();
  }), u;
}
function wo(o) {
  return hi(pt({
    observeElementRect: ei,
    observeElementOffset: ti,
    scrollToFn: oi
  }, o));
}
var fi = /* @__PURE__ */ Y("<div><button type=button><i></i><span>");
const gi = `${Vo} ir-icon ir-icon--check`;
function mi(o) {
  return (() => {
    var e = fi(), t = e.firstChild, n = t.firstChild, s = n.nextSibling;
    return e.style.setProperty("position", "absolute"), e.style.setProperty("width", "100%"), t.$$click = o.onClick, t.$$clickData = o.row, N(t, Bo), N(n, gi), G(s, () => o.text), j((r) => {
      var i = {
        [jo]: !0,
        [Go]: o.isSelected
      }, l = o.row, u = o.value, d = `${o.top}px`, c = o.text;
      return r.e = uo(e, i, r.e), l !== r.t && ce(e, "data-row", r.t = l), u !== r.a && ce(e, "data-value", r.a = u), d !== r.o && ((r.o = d) != null ? e.style.setProperty("top", d) : e.style.removeProperty("top")), c !== r.i && ce(t, "title", r.i = c), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), e;
  })();
}
yt(["click"]);
var pi = /* @__PURE__ */ Y("<div><div>");
const wi = `${Ko} ${Zs.zIndex.popover} is-expanded`, Ci = 26;
function tc(o) {
  const {
    items: e,
    selectedItem: t
  } = o;
  let n;
  const s = wo({
    count: o.items.length,
    getScrollElement: () => n,
    estimateSize: () => Ci,
    overscan: 4
  }), r = o.refElement.offsetWidth, i = Math.max(r, o.breakWidth), l = Math.max(o.contentWidth, r);
  return Fe(() => {
    const u = Xn(o.refElement, n, "bottom-start");
    o.ref?.({
      divElement: n
    }), t && s.scrollToIndex(e.indexOf(t), {
      align: "center"
    }), ke(() => {
      u(), o.ref?.(null);
    });
  }), (() => {
    var u = pi(), d = u.firstChild, c = n;
    return typeof c == "function" ? me(c, u) : n = u, N(u, wi), `${l}px` != null ? u.style.setProperty("width", `${l}px`) : u.style.removeProperty("width"), `${i}px` != null ? u.style.setProperty("max-width", `${i}px`) : u.style.removeProperty("max-width"), N(d, Uo), d.style.setProperty("position", "relative"), G(d, A(Xt, {
      get each() {
        return s.getVirtualItems();
      },
      children: (a) => A(mi, {
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
    })), j((a) => {
      var h = o.row, f = o.col, w = `${s.getTotalSize()}px`;
      return h !== a.e && ce(u, "data-row", a.e = h), f !== a.t && ce(u, "data-col", a.t = f), w !== a.a && ((a.a = w) != null ? d.style.setProperty("height", w) : d.style.removeProperty("height")), a;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), u;
  })();
}
const ot = { radio: Xo, radioWrapper: Zo, radioInput: Yo, radioText: Jo }, _i = 16, Co = 6, Ri = Co * 2;
class _o extends Ce {
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
    if (s.setAttribute("data-has-px", ""), s.className = `${qo} ${ot.radio}`, r.className = ot.radioWrapper, i.type = "radio", i.className = ot.radioInput, r.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = ot.radioText, l.innerText = n.label, r.appendChild(l);
    }
    return s.appendChild(r), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), r.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new Se(l, [e, t, { text: "true" }]), d = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        d && (l.setCell(d.row, d.col, { text: "true" }), this.onRadioClick(d.row, d.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new Ae("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, s;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const s = Kt(e, t), r = n.label ? Co + s.calculateWidth(n.label) : 0;
    return _i + Ri + r + this.getHorizontalCellPadding(n);
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
const nc = ({ onRadioClick: o }) => {
  const e = new _o({ onRadioClick: o });
  return () => e;
};
function yi(o) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = jt, o.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ct(o.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (o.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ct(o.icon)}`, o.iconColor && t.style.setProperty("--ir-icon-foreground-color", o.iconColor), e.appendChild(t);
  }
  if (o.text) {
    const t = document.createElement("span");
    t.innerText = o.formatter ? o.formatter(o.text) : o.text, e.appendChild(t);
  }
  return e;
}
function xi(o, e, t, n) {
  const s = document.createElement("div");
  if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = jt, t.icon) {
    const r = document.createElement("button"), i = document.createElement("i");
    r.setAttribute("type", "button"), r.classList.add("icon-button", es), n && (r.onclick = (l) => n(l, o, e)), i.className = `ir-icon ${ct(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), r.appendChild(i), s.appendChild(r);
  }
  if (t.text) {
    const r = document.createElement("span");
    r.innerText = t.text, s.appendChild(r);
  }
  return s;
}
class Yt extends Ce {
  constructor(e = {}) {
    super(), this._args = e;
  }
  getDisplayText(e) {
    return e.formatter ? e.formatter(e.text ?? "") : e.text ?? "";
  }
  render(e, t, n) {
    const s = yi(n), {
      ellipsis: r = !0,
      whiteSpace: i
    } = this._args;
    return r && s.classList.add(Qo), i && (s.style.whiteSpace = i), s;
  }
  get renderType() {
    return "default";
  }
}
class bi extends Ce {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return xi(e, t, n, (s, r, i) => this.onClick(s, r, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Si extends Ce {
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
    s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = jt;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return r.innerText = l, n.text = l, s.appendChild(r), s;
  }
}
const oc = () => {
  const o = new Yt();
  return () => o;
};
function sc({ onClick: o }) {
  const e = new bi({ onClick: o });
  return () => e;
}
function rc(o, ...e) {
  const t = new Si(o, ...e);
  return () => t;
}
const bn = /* @__PURE__ */ new WeakMap();
class Ro extends Yt {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function ic(o) {
  const e = bn.get(o);
  if (e)
    return e;
  const t = new Ro(o);
  return bn.set(o, t), t;
}
var vi = /* @__PURE__ */ Y("<button type=button><span>"), ki = /* @__PURE__ */ Y("<i>");
function Ii(o) {
  const {
    label: e,
    icon: t,
    onClick: n
  } = o;
  return (() => {
    var s = vi(), r = s.firstChild;
    return xt(s, "click", n, !0), N(s, ts), G(s, A(_e, {
      when: t,
      children: (i) => (() => {
        var l = ki();
        return j(() => N(l, `ir-icon ir-icon-text ${i()}`)), l;
      })()
    }), r), G(r, e), s;
  })();
}
yt(["click"]);
const yo = vr({}), Ei = yo.Provider;
function $e() {
  return kr(yo);
}
var Mi = /* @__PURE__ */ Y("<div><span>"), Ti = /* @__PURE__ */ Y("<label><input type=checkbox><span>"), Li = /* @__PURE__ */ Y("<i>"), Sn = /* @__PURE__ */ Y("<div>"), Hi = /* @__PURE__ */ Y("<div><div>");
const Oi = `${Xe.display.flex} ${Xe.alignCenter}`, Ai = `${Gn} ${Xe.textEllipsis} ${Xe.flex110}`;
function vn(o) {
  const e = o.filter((n) => n.checked).length, t = o.length === e;
  return {
    subChecked: e > 0 && !t,
    checkedAll: t
  };
}
function zi() {
  return (() => {
    var o = Mi(), e = o.firstChild;
    return N(o, Oi), `${xe}px` != null ? o.style.setProperty("height", `${xe}px`) : o.style.removeProperty("height"), G(e, () => Q.t("rowFilter.list.no-result")), j(() => N(e, Xe.truncate)), o;
  })();
}
function kn(o) {
  return (() => {
    var e = Ti(), t = e.firstChild, n = t.nextSibling;
    return N(e, ss), N(t, Vn), N(n, Ai), G(n, A(_e, {
      get fallback() {
        return o.text;
      },
      get when() {
        return o.icon;
      },
      children: (s) => (() => {
        var r = Li();
        return j(() => N(r, `ir-icon ir-icon-text ${s()}`)), r;
      })()
    })), j(() => ce(t, "data-state", o.subChecked ? "sub-checked" : "")), j(() => t.checked = o.checked), e;
  })();
}
function xo(o) {
  const {
    makeCheckAll: e
  } = o;
  let t, n;
  const s = vn(o.rowItems), [r, i] = de(s.subChecked), [l, u] = de(s.checkedAll), d = se(() => wo({
    getScrollElement: () => t,
    estimateSize: () => xe,
    count: o.rowItems.length,
    overscan: 4
  }));
  return o.ref?.({
    checkAll(f) {
      u(f), i(!1);
    }
  }), [A(_e, {
    get when() {
      return o.rowItems.length === 0;
    },
    get children() {
      return A(zi, {});
    }
  }), (() => {
    var f = Hi(), w = f.firstChild, M = t;
    return typeof M == "function" ? me(M, f) : t = f, f.style.setProperty("overflow", "auto"), f.style.setProperty("flex", "1 1 auto"), G(f, A(_e, {
      when: e,
      get children() {
        var b = Sn();
        return b.addEventListener("change", a), `${xe}px` != null ? b.style.setProperty("height", `${xe}px`) : b.style.removeProperty("height"), G(b, A(kn, {
          get text() {
            return `(${Q.t("rowFilter.list.select-all")})`;
          },
          get checked() {
            return l();
          },
          get subChecked() {
            return r();
          }
        })), b;
      }
    }), w), N(w, ns), w.style.setProperty("position", "relative"), G(w, A(Xt, {
      get each() {
        return d().getVirtualItems();
      },
      children: (b) => (() => {
        var I = Sn();
        I.addEventListener("change", (L) => c(b.index, L));
        var x = n;
        return typeof x == "function" ? me(x, I) : n = I, I.style.setProperty("position", "absolute"), `${xe}px` != null ? I.style.setProperty("height", `${xe}px`) : I.style.removeProperty("height"), I.style.setProperty("width", "100%"), G(I, A(kn, {
          get text() {
            return o.rowItems[b.index].text || `(${Q.t("rowFilter.list.blanks")})`;
          },
          get checked() {
            return o.rowItems[b.index].checked;
          },
          get icon() {
            return o.rowItems[b.index].icon;
          }
        })), j((L) => (L = `${b.start}px`) != null ? I.style.setProperty("top", L) : I.style.removeProperty("top")), I;
      })()
    })), j((b) => {
      var I = o.rowItems.length === 0 ? "none" : "block", x = `calc(-1 * ${os.sm})`, L = `${d().getTotalSize()}px`;
      return I !== b.e && ((b.e = I) != null ? f.style.setProperty("display", I) : f.style.removeProperty("display")), x !== b.t && ((b.t = x) != null ? f.style.setProperty("margin-right", x) : f.style.removeProperty("margin-right")), L !== b.a && ((b.a = L) != null ? w.style.setProperty("height", L) : w.style.removeProperty("height")), b;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), f;
  })()];
  function c(f, w) {
    if (!(w.target instanceof HTMLInputElement)) return;
    const M = o.rowItems[f], b = w.target.checked;
    M.checked = b, h(), o.onChangeCheck?.(M, b);
  }
  function a(f) {
    if (!(f.target instanceof HTMLInputElement)) return;
    const w = f.target.checked;
    o.rowItems.forEach((b) => b.checked = w), h(), o.onChangeCheck?.(null, w);
  }
  function h() {
    const f = o.rowItems, {
      checkedAll: w,
      subChecked: M
    } = vn(f);
    i(M), u(w);
  }
}
function Fi() {
  const {
    pluginAPI: o,
    columnId: e,
    operandsSignal: t,
    updateOperandsHandler: n
  } = $e(), s = l(), [r, i] = de(s);
  return A(xo, {
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
var Pi = /* @__PURE__ */ Y("<div>");
function Et(o) {
  const {
    defaultValue: e = "",
    format: t,
    onChange: n,
    placeholder: s
  } = o, {
    addOutSideElements: r
  } = $e();
  let i;
  return Fe(() => {
    const l = new Gs({
      div: i,
      defaultDate: e,
      format: t,
      onChange: n,
      placeholder: s
    }), u = l.input, d = l.button;
    r(js().datePicker), u.oninput = () => n(l.textValue), d.onkeydown = (a) => {
      a.key === "Enter" && l.hide();
    }, u.addEventListener("blur", c, {
      capture: !0
    }), o.inputRef?.(u);
    function c(a) {
      a.relatedTarget instanceof HTMLElement && a.relatedTarget.closest(`.${jn}`) && a.relatedTarget.textContent === Q.t("rowFilter.ok") && a.stopPropagation();
    }
    ke(() => {
      u.removeEventListener("blur", c), l.destroy();
    });
  }), (() => {
    var l = Pi(), u = i;
    return typeof u == "function" ? me(u, l) : i = l, l;
  })();
}
var Di = /* @__PURE__ */ Y("<select>");
function Jt(o) {
  const {
    defaultKey: e,
    options: t,
    onChange: n
  } = o, {
    addOutSideElements: s
  } = $e();
  let r;
  return Fe(() => {
    const i = new Ks({
      contextElement: r
    });
    t.forEach(({
      key: l,
      text: u
    }) => i.addItem(l, Q.t(u))), i.onChange = (l, u) => n(u.value), i.value = e, s(i.divDropDown), ke(() => i.destroy());
  }), (() => {
    var i = Di(), l = r;
    return typeof l == "function" ? me(l, i) : r = i, i;
  })();
}
const Ct = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "less-than", text: "rowFilter.op.less" },
  { key: "less-than-or-equal", text: "rowFilter.op.less-eq" },
  { key: "greater-than", text: "rowFilter.op.greater" },
  { key: "greater-than-or-equal", text: "rowFilter.op.greater-eq" },
  { key: "in-range", text: "rowFilter.number.select.between" },
  { key: "blank", text: "rowFilter.number.select.blank" }
], $i = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "contains", text: "rowFilter.op.like" },
  { key: "not-contains", text: "rowFilter.op.not-like" },
  { key: "starts-with", text: "rowFilter.op.starts-with" },
  { key: "ends-with", text: "rowFilter.op.ends-with" }
];
function Qt(o = !0) {
  let e = null;
  return {
    focus: () => e?.focus({ preventScroll: !0 }),
    setFocusRef(n) {
      e = n, o && n.focus({ preventScroll: !0 });
    }
  };
}
function Wi() {
  const {
    pluginAPI: o,
    columnId: e,
    operatorSignal: t,
    operandsSignal: n,
    updateOperandHandler: s
  } = $e(), {
    format: r = Q.t("datePicker.dateFormat")
  } = o.getColumnMetaInfo(e), [i, l] = t, [u, d] = n, c = i() ?? Ct[0].key, a = Qt();
  return [A(Jt, {
    defaultKey: c,
    options: Ct,
    onChange: f
  }), A(Zt, {
    get children() {
      return [A(we, {
        get when() {
          return i() === "in-range";
        },
        get children() {
          return [A(Et, {
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
          }), A(Et, {
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
      }), A(we, {
        get when() {
          return i() !== "blank";
        },
        get children() {
          return A(Et, {
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
    return `${Q.t(w)} (${r})`;
  }
  function f(w) {
    w === "equals" && d(u().slice(0, 1)), l(w), a.focus();
  }
}
var Ni = /* @__PURE__ */ Y("<button type=button><i>"), Bi = /* @__PURE__ */ Y("<button aria-label=search type=submit><i>"), Vi = /* @__PURE__ */ Y("<div><input>");
function lt(o) {
  const e = () => o.class, t = () => o.suffixButtonIcon && o.matchCaseToggle ? "padding-right: 44px" : "";
  return (() => {
    var s = Vi(), r = s.firstChild;
    return Kr(r, pt(o, {
      get class() {
        return dn(rs, e());
      },
      get style() {
        return t();
      }
    }), !1, !1), G(s, A(_e, {
      get when() {
        return o.matchCaseToggle;
      },
      get children() {
        var i = Ni(), l = i.firstChild;
        return xt(i, "click", n), N(i, rn), i.style.setProperty("right", "24px"), j(() => N(l, dn("ir-icon ir-icon--lowercase", o.matchCase && "ir-icon--rounded"))), i;
      }
    }), null), G(s, A(_e, {
      get when() {
        return o.suffixButtonIcon;
      },
      get children() {
        var i = Bi(), l = i.firstChild;
        return N(i, rn), j(() => N(l, `ir-icon ${o.suffixButtonIcon}`)), i;
      }
    }), null), j(() => N(s, o.wrapperClass)), s;
  })();
  function n() {
    o.onToggleMatchCase?.(!o.matchCase);
  }
}
function Gi() {
  const {
    operatorSignal: o,
    operandsSignal: e,
    onInputUpdateHandler: t
  } = $e(), n = Qt(), [s, r] = o, [i, l] = e, u = s() ?? Ct[0].key;
  return [A(Jt, {
    defaultKey: u,
    options: Ct,
    onChange: d
  }), A(Zt, {
    get children() {
      return [A(we, {
        get when() {
          return s() === "in-range";
        },
        get children() {
          return [A(lt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.between.from");
            },
            get onInput() {
              return t(0);
            }
          }), A(lt, {
            get value() {
              return i()[1] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.between.to");
            },
            get onInput() {
              return t(1);
            }
          })];
        }
      }), A(we, {
        get when() {
          return s() !== "blank";
        },
        get children() {
          return A(lt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.input.placeholder");
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
const ji = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function In(o) {
  return o === "" ? !0 : ji.test(o);
}
function En(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function en(o, e) {
  if (o === e) return 0;
  const t = In(o), n = In(e);
  return t && n ? En(o) < En(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const Ki = (o) => (e, t) => en(e.getCell(o).text, t.getCell(o).text), lc = ({
  grid: o
}) => ({
  sortColumn(e, t, n, s) {
    o.sort(Ki(e), t, n, s);
  }
});
var Ui = /* @__PURE__ */ Y("<form>");
function qi() {
  const o = Qt(), {
    pluginAPI: e,
    columnId: t,
    operatorSignal: n,
    operandsSignal: s,
    stringFilterOptions: r,
    ignoreCase: i
  } = $e(), [l, u] = n, [d, c] = s, a = l();
  let h, f = [], w, M = "";
  const b = e.getFilterOptionByCol(t), I = new Set(s[0]()), x = e.getTextListForCol(t).sort((C, S) => en(C.text, S.text)).map(({
    text: C
  }) => ({
    text: C,
    key: C,
    // filterOptions이 있는 경우, 체크된 항목을 표시
    checked: b ? I.has(C) : !1
  })), [L, v] = de(x.filter(R())), p = a !== "equals" ? d()[0] : "";
  return [A(Jt, {
    defaultKey: a,
    options: $i,
    onChange: g
  }), (() => {
    var C = Ui();
    C.addEventListener("submit", E);
    var S = h;
    return typeof S == "function" ? me(S, C) : h = C, C.style.setProperty("display", "contents"), G(C, A(lt, {
      ref(y) {
        var T = o.setFocusRef;
        typeof T == "function" ? T(y) : o.setFocusRef = y;
      },
      name: "search-text",
      autocomplete: "off",
      value: p,
      wrapperClass: is,
      get suffixButtonIcon() {
        return l() === "equals" ? "ir-icon--search" : void 0;
      },
      get placeholder() {
        return Q.t("rowFilter.string.input.placeholder");
      },
      "on:input": m
    })), C;
  })(), A(_e, {
    get when() {
      return l() === "equals";
    },
    get children() {
      return A(xo, {
        ref: (C) => w = C,
        makeCheckAll: !0,
        get rowItems() {
          return L();
        },
        onChangeCheck: _
      });
    }
  })];
  function m() {
    l() !== "equals" && c([h["search-text"].value]);
  }
  function E(C) {
    C.preventDefault();
    const S = h["search-text"].value, y = l() !== "equals", k = y || S === M;
    if (y && c([S]), k) {
      if (l() === "equals" && f.length === 0) return;
      h.parentElement?.closest("form")?.requestSubmit();
      return;
    }
    M = S, f = x.filter(R()), M === "" ? (v(f.map((O) => (O.checked = !1, O))), c([]), w.checkAll(!1)) : (v(f.map((O) => (O.checked = !0, O))), c([M, ...f.map((O) => O.text)]), w.checkAll(!0));
  }
  function R() {
    if (M === "") return () => !0;
    const C = r === "equals" ? new RegExp(`^${M}$`, i ? "i" : "") : new RegExp(M, i ? "i" : "");
    return (S) => C.test(S.text);
  }
  function g(C) {
    u(C), o.focus();
  }
  function _(C, S) {
    C === null && v(L().map((y) => y)), c(L().filter((y) => y.checked).map((y) => y.text));
  }
}
var Xi = /* @__PURE__ */ Y("<div>");
function Zi(o) {
  let e;
  const t = qt(() => o.children);
  return Fe(() => {
    const n = Xn(o.refElement, e, o.placement, o.offset);
    ke(() => n());
  }), (() => {
    var n = Xi(), s = e;
    return typeof s == "function" ? me(s, n) : e = n, n.style.setProperty("position", "absolute"), G(n, t), n;
  })();
}
var Yi = /* @__PURE__ */ Y("<div>"), Ji = /* @__PURE__ */ Y('<form><div></div><div><button class=button type=button></button><button type=submit class="button button--primary">');
const Mn = [{
  key: "ASC",
  i18nKey: "rowFilter.sort.ascending",
  icon: "ir-icon--sort-ascending"
}, {
  key: "DESC",
  i18nKey: "rowFilter.sort.descending",
  icon: "ir-icon--sort-descending"
}], Qi = [{
  key: "CHECK-ALL",
  i18nKey: "rowFilter.check.check-all",
  icon: "ir-icon--check-all-rectangle"
}, {
  key: "UNCHECK-ALL",
  i18nKey: "rowFilter.check.uncheck-all",
  icon: "ir-icon--uncheck-all-rectangle"
}], el = {
  key: "DELETE",
  i18nKey: "rowFilter.sort.clear",
  icon: "ir-icon--delete"
};
function* tl(o) {
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
        yield* Mn;
        return;
      }
      yield el, yield Mn[t === "ASC" ? 1 : 0];
    }
  }
  function* u() {
    s && i.textType === "checked" && (yield* Qi);
  }
}
function nl(o, e) {
  const {
    visibleSortButton: t,
    pluginAPI: n,
    columnId: s
  } = e, r = n.getColumnMetaInfo(s);
  t && fe(o, {
    [St.maxHeight]: "240px"
  }), r.textType === "date" && fe(o, {
    [St.minWidth]: "200px"
  }), fe(o, {
    [St.maxWidth]: "200px"
  });
}
function ol(o) {
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
  } = o, a = [...tl(o)], h = e.getColumnMetaInfo(s), f = e.getFilterOptionByCol(s), w = [];
  let M;
  const b = de(f?.operator ?? "equals"), I = de(f?.operand ?? []), [x] = b, [L, v] = I;
  return Fe(() => {
    const g = Zn({
      hide: r
    }), _ = rr({
      eventElements: [M, t],
      getEventElements: () => w,
      clickOutsideFunc: r
    });
    _.create(), g.create(), nl(M, o), ke(() => {
      g.destroy(), _.destroy();
    });
  }), A(Ei, {
    value: {
      columnId: s,
      pluginAPI: e,
      operatorSignal: b,
      operandsSignal: I,
      updateOperandHandler: m,
      updateOperandsHandler: (g) => I[1](g),
      addOutSideElements: (g) => w.push(g),
      onInputUpdateHandler: (g) => (_) => m(g)(_.currentTarget.value),
      get stringFilterOptions() {
        return d;
      },
      get ignoreCase() {
        return c;
      }
    },
    get children() {
      var g = Ji(), _ = g.firstChild, C = _.nextSibling, S = C.firstChild, y = S.nextSibling, T = M;
      return typeof T == "function" ? me(T, g) : M = g, xt(g, "submit", p), N(g, ls), G(g, A(_e, {
        get when() {
          return a.length > 0;
        },
        get children() {
          var k = Yi();
          return N(k, as), G(k, A(Xt, {
            each: a,
            children: (O) => A(Ii, {
              get label() {
                return Q.t(O.i18nKey);
              },
              get icon() {
                return O.icon;
              },
              onClick: () => R(O)
            })
          })), k;
        }
      }), _), N(_, cs), G(_, A(Zt, {
        get fallback() {
          return `unknown textType '${h.textType}'`;
        },
        get children() {
          return [A(we, {
            get when() {
              return h.textType === "date";
            },
            get children() {
              return A(Wi, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "number";
            },
            get children() {
              return A(Gi, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "checked";
            },
            get children() {
              return A(Fi, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "string";
            },
            get children() {
              return A(qi, {});
            }
          })];
        }
      })), N(C, jn), S.$$click = E, G(S, () => Q.t("rowFilter.clear")), G(y, () => Q.t("rowFilter.ok")), j(() => ce(g, "id", e.dropdownId)), g;
    }
  });
  function p(g) {
    g.preventDefault();
    const _ = L(), C = x();
    _.length > 0 && (e.setColFilter({
      operator: C,
      operand: _,
      column: s
    }), i()), r();
  }
  function m(g) {
    return (_) => {
      const C = L();
      C[g] = _, v([...C]);
    };
  }
  function E() {
    e.getFilterOptionByCol(s) && e.removeColFilter(s), l(), r();
  }
  function R(g) {
    const {
      key: _
    } = g;
    switch (_) {
      case "DELETE":
        e.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        e.setSortOrder(n, s, _);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        e.setCheckAll(s, _ === "CHECK-ALL");
        break;
    }
    u?.(_), r();
  }
}
function ac(o) {
  return A(Zi, {
    get refElement() {
      return o.refElement;
    },
    placement: "bottom-start",
    get children() {
      return A(ol, o);
    }
  });
}
yt(["click"]);
function sl(o, e) {
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
    const h = { ...c }, f = a.length, w = a[0].length, M = i(c) ? r(c.top, f) + 1 : h.top + f, b = h.left + w;
    for (let I = c.bottom + 1; I < M; ++I)
      (o.hasRow(I) || o.onAutoInsertRow(I)) && (h.bottom = I);
    for (let I = c.right + 1; I < b; ++I)
      (o.hasColumn(I) || o.onAutoInsertColumn(I)) && (h.right = I);
    return h;
  }
  function u(c, a) {
    if (a.length === 0) throw new Error("No pasting data.");
    const h = [], f = a.length, w = a[0].length, M = c.bottom - c.top, b = c.right - c.left;
    let I = 0;
    for (let p = 0; p <= M; ++p) {
      const m = p + c.top;
      if (x(m), !!o.hasRow(m)) {
        if (s && o.isFilteredRow(m)) {
          ++I;
          continue;
        }
        for (let E = 0; E <= b; ++E) {
          const R = E + c.left;
          if (L(R), !o.hasColumn(R)) break;
          const g = o.cell(m, R), _ = v(p - I, E), C = o.onCheckPasteCell(g, _.text);
          _.cellVisible && C && h.push({
            cell: g,
            cellMetaInfo: {
              text: _.text,
              cellVisible: _.cellVisible,
              rowSpan: t ? _.rowSpan : 1,
              colSpan: n ? _.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof C == "object" ? C : void 0
          });
        }
      }
    }
    return h;
    function x(p) {
      !o.hasRow(p) && o.onAutoInsertRow(p) && (o.addRow(), o.onAutoInsertedRow(p));
    }
    function L(p) {
      !o.hasColumn(p) && o.onAutoInsertColumn(p) && (o.addColumn(), o.onAutoInsertedColumn(p));
    }
    function v(p, m) {
      const [E, R] = [p % f, m % w];
      return a[E][R];
    }
  }
  function d(c) {
    for (const { cell: a, cellMetaInfo: h, pasteOption: f } of c) {
      const { rowSpan: w, colSpan: M, cellVisible: b } = h;
      if (!b) continue;
      const { row: I, col: x } = a;
      if (f?.ignoreRowSpan !== !0 && w > 1 || f?.ignoreColSpan !== !0 && M > 1) {
        const v = { top: I, left: x, bottom: I + w - 1, right: x + M - 1 };
        o.mergeCells(v.top, v.left, v.bottom, v.right);
      }
      f?.ignoreText || o.setCell(I, x, { text: h.text }), o.onClipboardAfterPasteCell(a);
    }
  }
}
function rl(o) {
  return JSON.stringify(o);
}
function il(o) {
  return JSON.parse(o);
}
function ll(o) {
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
function al(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((s) => s.cellVisible).forEach((s) => {
      const r = document.createElement("td");
      r.setAttribute("rowSpan", `${s.rowSpan}`), r.setAttribute("colSpan", `${s.colSpan}`), r.append(...ll(s.text)), n.append(r);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function cl(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const s = Array(n.length).fill(null).map(() => []);
  let r = 0;
  for (const u of n) {
    const d = u.querySelectorAll("td");
    let c = i(0);
    for (const a of d)
      (a.rowSpan > 1 || a.colSpan > 1) && l(r, c, a.rowSpan, a.colSpan), s[r][c] = {
        text: ul(a),
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
function ul(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return dl(t);
}
function dl(o) {
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
function hl(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const bo = "	", So = `
`;
function fl(o) {
  if (!hl(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(bo)
  ).join(So);
}
function gl(o) {
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
    i !== "\r" && (i === bo ? s() : i === So ? r() : t.push(i));
  return (t.length > 0 || n.length > 0) && r(), e;
}
const at = [
  {
    format: "ir-grid/cell",
    parseFunc: il,
    payloadFunc: rl
  },
  {
    format: "text/html",
    parseFunc: cl,
    payloadFunc: al
  },
  {
    format: "text/plain",
    parseFunc: gl,
    payloadFunc: fl
  }
];
function Tn(o, e) {
  at.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function vo(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function ml(o) {
  return o.some((e) => e.some((t) => vo(t)));
}
function pl(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let s = 0; s < n; ++s)
      e[t]?.[s]?.text && vo(o[t][s]) && (o[t][s].text = e[t][s].text);
  }
  return o;
}
function Ln(o) {
  for (const { format: e, parseFunc: t } of at) {
    const n = o.getData(e);
    if (n !== "") {
      const s = t(n);
      if (!ml(s))
        return s;
      const r = o.getData(at[2].format);
      return pl(
        s,
        at[2].parseFunc(r)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const qe = 1, ve = 1;
class Hn {
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
    return this._width + ve;
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
class wl {
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
    const t = new Hn({
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
    const r = this.getColumn(e).left, i = D(t).map((l) => new Hn({
      columnId: e + l,
      width: n,
      left: r + (n + ve) * l
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
    D(e, this._columnsList.length).reduce((t, n) => {
      const s = this._columnsList[n];
      return s.left = t, s.visible ? t + s.width + ve : t;
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
class Cl {
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
      const r = D(t).map((i) => n(s.rowId, e + i));
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
      r && r.rowId === l ? (r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value) : (this._rowList.push(i), i = n.next().value), ++l;
    for (; r; )
      r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value;
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
    const n = e.height + qe, s = t === "add" || t === "show" ? n : -n;
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
function _l() {
  const o = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
  return e.style.transform = "translateZ(0)", e.className = us, o.className = ds, t.className = hs, n.className = fs, o.appendChild(t), o.appendChild(n), e.appendChild(o), { table: o, wrapper: e, freezedRows: t, bodyRows: n };
}
const Rl = 1e4;
function yl({ rowManager: o, colManager: e, commandManager: t, cursorManager: n, hook: s }) {
  const r = He("textarea", gs);
  r.style.padding = "0";
  let i = null;
  const l = {
    focus: d,
    runEditMode: w,
    setPosition: a,
    mountElement(R) {
      b(), R.appendChild(r);
    },
    hide() {
    },
    onEditDone(R, g, _, C, S, y) {
    },
    onEditKeyDown(R, g, _, C) {
    },
    onEnterOnEdit(R, g) {
    },
    onEditInput(R, g) {
    },
    onDragEnd(R) {
    }
  }, u = Zn(l);
  return s.addSyncHook("contextScroll", (R, g, _) => {
    i && a(i.cell, g, _);
  }), r.ondragend = (R) => l.onDragEnd(R), l;
  function d() {
    r.focus({ preventScroll: !0 });
  }
  function c(R) {
    r.value = R;
  }
  function a(R, g, _) {
    const C = o.getRow(R.row), S = e.getColumn(R.col), y = R.row < o.freezedRows ? g : 0, T = R.col < e.freezedColumns ? _ : 0;
    r.style.top = `${C.top + y}px`, r.style.left = `${S.left + T}px`;
  }
  function h(R) {
    r.style.width = `${R.width}px`, r.style.height = `${R.height}px`;
  }
  function f(R) {
    const g = R === "" ? P.zLevel1 : `calc(${R} + 1000)`;
    r.style.zIndex = g;
  }
  function w(R, g, _, C = !1, S = !1) {
    i = {
      cell: R,
      beforeText: R.props.text ?? "",
      cancelEndEdit: !1
    }, r.style.removeProperty("padding"), C || c(i.beforeText), r.maxLength = R.props.maxLength ?? Rl, f(R.zIndexVariant), a(R, g, _), h(R), d(), r.scrollTo(0, r.scrollHeight), S && r.setSelectionRange(0, r.value.length), u.destroy(), u.create();
  }
  function M() {
    c(""), i = null, r.style.removeProperty("height"), r.style.removeProperty("width"), r.style.removeProperty("z-index");
  }
  function b() {
    r.addEventListener("keydown", L), r.addEventListener("blur", v), r.addEventListener("keyup", x), r.addEventListener("input", I);
  }
  function I(R) {
    i && l.onEditInput(R, r.value);
  }
  function x() {
    i || c("");
  }
  function L(R) {
    if (!i) return;
    const { beforeText: g, cell: _ } = i;
    if (R.key === "Escape") {
      p(r.value, !1, R.key);
      return;
    }
    if (R.key === " " && !R.ctrlKey) {
      R.preventDefault();
      const C = r.value, { selectionStart: S, selectionEnd: y } = r;
      r.value = C.slice(0, S) + " " + C.slice(y), r.selectionStart = S + 1, r.selectionEnd = S + 1, l.onEditInput(R, r.value);
      return;
    }
    if (R.key === "Enter" && R.altKey && _.metaInfo.editSingleLine !== !0) {
      R.preventDefault();
      const C = r.selectionStart;
      try {
        i.cancelEndEdit = !0, r.blur(), r.value = [
          r.value.substring(0, C),
          r.value.substring(r.selectionEnd)
        ].join(`
`), d(), r.setSelectionRange(C + 1, C + 1, "backward"), l.onEditKeyDown(R, _.row, _.col, _.props);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (m(R)) {
      R.preventDefault(), p(r.value, g !== r.value, R.key), R.key === "Enter" ? l.onEnterOnEdit(R.ctrlKey, R.shiftKey) : E(R.key, R.shiftKey);
      return;
    }
    l.onEditKeyDown(R, _.row, _.col, _.metaInfo);
  }
  function v() {
    !i || i.cancelEndEdit || (p(r.value, i.beforeText !== r.value, ""), u.destroy());
  }
  function p(R, g, _) {
    if (i)
      try {
        const { cell: C, beforeText: S } = i;
        if (g && C.checkInputValidation(R)) {
          const y = { text: R, beforeText: S };
          C.props.gridStore.hook.emit("cellEditDoneBeforeRender", [C.row, C.col, y]);
          const T = new Se(t.commandContext, [
            C.row,
            C.col,
            { text: y.text }
          ]);
          T.onUndo = () => {
            l.onEditDone(C, g, S, _, r.selectionStart, r.selectionEnd);
          }, T.onExecute = () => {
            l.onEditDone(C, g, S, _, r.selectionStart, r.selectionEnd);
          }, t.pushCommandBlock(new Ae(
            `Edit cell (${C.row}, ${C.col}) `,
            T
          )), C.props = { text: y.text };
        }
        l.onEditDone(C, g, S, _, r.selectionStart, r.selectionEnd);
      } finally {
        r.style.padding = "0", M();
      }
  }
  function m(R) {
    return R.key === "ArrowLeft" && r.selectionStart === 0 && r.selectionEnd === 0 || R.key === "ArrowUp" && r.selectionStart === 0 && r.selectionEnd === 0 || R.key === "ArrowRight" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || R.key === "ArrowDown" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || R.key === "Tab" ? !0 : R.key === "Enter" && !R.altKey && !R.ctrlKey && !R.shiftKey;
  }
  function E(R, g) {
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
        return g ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
class We {
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
function xl(o) {
  return o.top === o.bottom && o.left === o.right;
}
function bl(o) {
  return o.top > o.bottom || o.left > o.right;
}
function Sl(o, e) {
  let t = [];
  const n = new We(o, e), s = ({ top: d, left: c, bottom: a, right: h }) => t.some(({ mergeArea: f }) => c <= f.right && h >= f.left && d <= f.bottom && a >= f.top) === !1, r = (d, c) => {
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
      if (bl(d))
        throw new Error("Invalid range");
      if (s(d) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(d))
        throw new Error("Could not merging with hidden cells!");
      if (xl(d))
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
class vl {
  _gridHookFlow = ir();
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
    const t = Yn();
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
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Cl(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new wl(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = Sl(this._rowManager, this._columnManager), this._gridTextarea = yl({
      hook: this._gridHookFlow,
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = _l();
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
const kl = /^var\((.+)\)$/;
function tn(o) {
  const e = kl.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Il = [
  P.zLevel0,
  P.zLevel1,
  P.zLevel2,
  P.zLevel3,
  P.zLevel4,
  P.zLevel5,
  P.zLevel6,
  P.zLevel7,
  P.zLevel8,
  P.zLevel9
], El = [
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
], oe = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
}, Ml = /* @__PURE__ */ new Set([
  oe.lv9,
  oe.lv7,
  oe.lv6,
  oe.lv4,
  oe.lv3
]);
class Tl {
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
    return this.element.classList.contains(ln) || this.element.tagName === "TH";
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
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : On("grid.defaultFontSize", an.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : On("grid.defaultFontFamily", an.fontFamilyBase, "fontFamily");
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
    return this._element === null ? !1 : this._element.parentElement !== null;
  }
  get editable() {
    return !(this._cellType !== "body-cell" || this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(tn(P.stickyCellZId));
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
    Object.assign(this._cellProps, e), this.render(), this.renderInstance instanceof Ce && this.renderInstance.onUpdateCell(this._row, this._col, e);
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
    if (this._cellRenderer instanceof Ce)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof Ce)
        return e;
      if (e instanceof HTMLElement)
        return new Ro(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? fe(this._element, { [e]: `${t}px` }) : fe(this._element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: s
    } = this._cellProps;
    this._applyCustomProp(P.cellTopPadding, e), this._applyCustomProp(P.cellLeftPadding, t), this._applyCustomProp(P.cellRightPadding, n), this._applyCustomProp(P.cellBottomPadding, s);
  }
  _updateCellCls() {
    if (!this._element) return;
    const e = [ms, this._tag === "th" ? ps : ws];
    this.props.class && e.push(this.props.class), this._zIndex !== null && e.push(ln), this._cellProps.disabled && e.push("is-disabled"), this._cellProps.sortOrder === "ASC" && e.push("is-asc"), this._cellProps.sortOrder === "DESC" && e.push("is-desc"), this.isSelected && e.push("is-selected"), this.onCheckReadonly() && e.push("is-readonly"), this._isDragOver && e.push("is-dragging"), this._isActivate && e.push("is-active"), this._element.className = e.join(" ");
  }
  _updateCellLayout() {
    this._element && (this._element.style.top = `${this._top}px`, this._element.style.left = `${this._left}px`, this._element.style.width = `${this._width}px`, this._element.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._cellProps.isError ? this._addMark(Cs) : this._cellProps.hasMemo ? this._addMark(_s) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of El) {
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
    this._zIndex && Ml.has(this._zIndex) && (t += r), !(this._top === e && this._left === t && this._height === n && this._width === s) && (this._top = e, this._height = n, this._left = t, this._width = s, this._updateCellLayout());
  }
  unmount() {
    this._element?.remove();
  }
  remove() {
    this.unmount(), this._isRemoved = !0;
  }
  recover() {
    this._isRemoved = !1;
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
    this._element && (this._zIndex === null ? this._element.style.removeProperty(P.stickyCellZId) : fe(this._element, { [P.stickyCellZId]: Il[this._zIndex] }));
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
  onClick(e, t) {
    this.props.gridStore.hook.emitSync("cellClick", [e, t]);
  }
  onDblClick(e) {
    this.props.gridStore.hook.emitSync("cellDblClick", [e]);
  }
  onRightClick(e, t) {
    this.props.gridStore.hook.emitSync("cellRightClick", [t, e]);
  }
  onPostRender() {
    this.props.gridStore.hook.emit("postRenderCell", [this]);
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
function On(o, e, t) {
  const n = Yn().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Ll extends Ut {
  constructor() {
    super([]);
  }
}
class Hl extends Ut {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class bt {
  _grid;
  _generator;
  constructor(e) {
    this._grid = e, this._generator = new We(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [s, r] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: U(e.top, t, n),
      left: U(e.left, s, r),
      bottom: U(e.bottom, t, n),
      right: U(e.right, s, r)
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
        D(e.left, e.right + 1).map((s) => this._grid.cell(n, s).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        D(e.left, e.right + 1).map((s) => this._grid.cell(n, s))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const s = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: s, right: t })];
  }
  getColumnListByColumn(e, t) {
    return D(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class Ol extends Ut {
  constructor(e) {
    super(null, (t) => {
      const n = new bt(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        vt((s) => {
          if (!s || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: r, range: i } = s;
          return r.row >= i.top && r.row <= i.bottom && r.col >= i.left && r.col <= i.right ? s : {
            activeCell: e.cell(i.top, i.left),
            range: s.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        vt((s) => {
          if (!s) return null;
          const r = n.adjustRange(s.range);
          return r ? { activeCell: s.activeCell, range: r } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        vt((s) => s ? { activeCell: s.activeCell, range: n.extendRange(s.range) } : null)
      );
    });
  }
}
class Al {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new Ol(e), this._gridModeState = new Hl(), this._headerCellListState = new Ll();
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
class Ne {
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
class zl {
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
    return this._height + qe;
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
  /**
   * @version ^2.20.0
   */
  recover() {
    this._cells.forEach((e) => e.recover());
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
    return D(e, t).reduce((n, s) => {
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
    this._cells.splice(e, n).forEach((r) => r.remove()), D(e, this._cells.length).forEach((r) => this._cells[r].col -= n);
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
    return this.isHeaderRow ? t ? oe.lv9 : oe.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? oe.lv7 : oe.lv6 : oe.lv5 : t ? e < this._grid.headerColumns ? oe.lv4 : oe.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), e.setStickyZIndex(this.getFreezedCellType(e.col));
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    D(t, this._cells.length).forEach((n) => this._cells[n].col += e.length), this._cells.splice(t, 0, ...e), e.forEach((n) => n.setStickyZIndex(this.getFreezedCellType(n.col)));
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (er(e), this._cells.forEach((t) => void e.appendChild(t.element)));
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
    const n = Math.ceil(this.rowInnerHeight), s = U(isNaN(n) ? 0 : n, e, t);
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
    this._rowElement && this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n)), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + ve : 0)), 0);
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
const Fl = 4, st = "is-hidden";
function Pl(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const Dl = xs, $l = [
  bs,
  Ss,
  vs,
  ks
], Wl = ["top", "left", "bottom", "right"];
function Nl(o) {
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
  e.classList.add(Rs, st), n.forEach((x, L) => x.className = `${ys} border-line__${Wl[L]}`), t.forEach((x) => e.appendChild(x)), n.forEach((x) => e.appendChild(x));
  function c(x) {
    const { top: L, left: v, bottom: p, right: m } = f(x), { scrollTop: E, scrollLeft: R } = o;
    let g = 0, _ = 0;
    return x.top < o.getFreezedRowCount() && (_ = E), x.left < o.getFreezedColumnCount() && (g = R), {
      top: L + _,
      left: v + g,
      width: Math.max(0, m - v),
      height: p - L
    };
  }
  function a(x) {
    x.classList.add(st), delete x.dataset.top, delete x.dataset.left, delete x.dataset.bottom, delete x.dataset.right, delete x.dataset.visible;
  }
  function h(x, L) {
    const v = t[x], p = c(L);
    v.className = `${Dl} ${$l[x]}`, Object.assign(v.dataset, {
      top: String(L.top),
      left: String(L.left),
      bottom: String(L.bottom),
      right: String(L.right),
      visible: "true"
    }), v.style.top = `${p.top}px`, v.style.left = `${p.left}px`, v.style.width = `${p.width}px`, v.style.height = `${p.height}px`;
  }
  function f(x) {
    return {
      top: o.getRow(x.top).top - qe,
      left: o.getColumn(x.left).left - ve,
      bottom: o.getRow(x.bottom).bottom,
      right: o.getColumn(x.right).right
    };
  }
  function w(x) {
    const { left: L, right: v } = x, p = o.getFreezedColumnCount();
    return D(L, v + 1).reduce((m, E) => {
      const R = o.getColumn(E);
      return R.visible ? m + (E >= p ? R.widthWithBorder : 0) : m;
    }, 0);
  }
  function M(x) {
    const { top: L, bottom: v } = x, p = o.getFreezedRowCount();
    return D(L, v + 1).reduce((m, E) => {
      const R = o.getRow(E);
      return R.visible ? m + (E >= p ? R.heightWithBorder : 0) : m;
    }, 0);
  }
  function b(x, L, v, p) {
    if (x <= p)
      return Math.min(L, v);
    const m = x - p;
    return v > m ? Math.max(0, v - m) : 0;
  }
  function I(x) {
    const { top: L, left: v, bottom: p, right: m } = f(x), {
      fixedRowHeight: E,
      fixedColumnWidth: R,
      scrollTop: g,
      scrollLeft: _
    } = o, C = E + g, S = R + _, y = L < E, T = p <= E, k = v < R, O = m <= R, H = L >= C, F = p >= C, B = v >= S, $ = m >= S, z = w(x), et = M(x), Be = b(v, z, _, R), Ve = b(L, et, g, E), Ie = m - v - Be, Ee = p - L - Ve, Ge = L + (y ? g : Ve), J = v + (k ? _ : Be), te = J < 0 ? 1 : 0, re = Ge < 0 ? 1 : 0;
    (function() {
      u.forEach((le) => {
        le.style.left = `${J + te}px`, le.style.width = `${Ie - te}px`;
      });
    })(), function() {
      d.forEach((le) => {
        le.style.top = `${Ge + re}px`, le.style.height = `${Ee - re}px`;
      });
    }(), function() {
      if (Ie <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), y ? s.style.top = `${L + g + re}px` : H ? s.style.top = `${L + re}px` : s.style.display = "none";
    }(), function() {
      if (Ie <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), T ? i.style.top = `${p + g - qe}px` : F ? i.style.top = `${p - qe}px` : i.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), k ? r.style.left = `${v + _ + te}px` : B ? r.style.left = `${v + te}px` : r.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), O ? l.style.left = `${m + _ - ve}px` : $ ? l.style.left = `${m - ve}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(x) {
      const { headerRows: L, headerColumns: v } = o, p = o.getFreezedRowCount(), m = o.getFreezedColumnCount(), E = o.getRowCount() - 1, R = o.getColCount() - 1, g = [
        { top: L, left: v, bottom: p - 1, right: m - 1 },
        { top: L, left: m, bottom: p - 1, right: R },
        { top: p, left: v, bottom: E, right: m - 1 },
        { top: p, left: m, bottom: E, right: R }
      ].map((_) => Pl(x, _));
      for (let _ = 0; _ < Fl; _++) {
        const C = g[_];
        C ? h(_, C) : a(t[_]);
      }
      I(x);
    },
    applyGridScroll() {
      const x = o.getSelection();
      x && this.updateArea(x);
    },
    show() {
      e.classList.remove(st);
    },
    hide() {
      e.classList.add(st);
    }
  };
}
class Bl {
  #t;
  #e;
  constructor(e, t, n) {
    this.#t = t, this.#e = Nl(e), n.appendChild(this.#e.selectionRoot);
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
const rt = -1, An = 2, zn = 2, Vl = 2, Gl = [
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
function jl(o) {
  return o.mergeMain ?? o;
}
class Kl {
  _args;
  _wrapperElement;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = rt;
  constructor(e) {
    const { grid: t, store: n } = e;
    this._args = e, this._wrapperElement = e.store.elements.wrapper, this._gridRangeUtil = new bt(t), n.hook.addSyncHook("contextScroll", (s) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll").forceRunTasks();
    });
  }
  _resetContext() {
    this._updateScrollInfo = { row: -1, col: -1 };
  }
  _renderTask(e = 0) {
    if (e > Vl) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = rt;
    for (const s of Gl)
      if (!(!t.has(s) || s === "nothing"))
        try {
          this[s].call(this);
        } catch (r) {
          console.error(s, r);
        }
    const n = [...this._afterRenderCallbackList];
    this._afterRenderCallbackList.length = 0, n.forEach((s) => s()), this.checkScheduled("updateTop") && this.forceRunTasks(e + 1);
  }
  updateScrollInfo(e) {
    return Object.assign(this._updateScrollInfo, e), this.addTask("updateScroll").addTask("virtualRender");
  }
  _scrollOnRowTask() {
    if (this._updateScrollInfo.row === -1) return;
    const e = this._updateScrollInfo.row, { grid: t, contextElement: n } = this._args, s = U(e, 0, t.getRowCount() - 1), r = t.getRow(s), i = r.top, l = r.bottom, { fixedRowHeight: u, scrollBottom: d, scrollTop: c } = t, a = c + u;
    d < l ? n.scrollTop = c + (l - d) : a > i && (n.scrollTop = i - u), this._updateScrollInfo.row = -1;
  }
  _scrollOnColTask() {
    if (this._updateScrollInfo.col === -1) return;
    const e = this._updateScrollInfo.col, { grid: t, contextElement: n } = this._args, s = U(e, 0, t.getColCount() - 1), r = t.getColumnLeft(s), i = r + t.getColumnWidth(s), { fixedColumnWidth: l, scrollRight: u, scrollLeft: d } = t, c = d + l;
    u < i ? n.scrollLeft = d + (i - u) : c > r && (n.scrollLeft = r - l), this._updateScrollInfo.col = -1;
  }
  updateScroll() {
    this._scrollOnRowTask(), this._scrollOnColTask();
  }
  forceRunTasks(e = 0) {
    this._rafHandler !== rt && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === rt && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
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
    } = n, f = t.getRowCount() - 1, w = t.getColCount() - 1, M = Math.min(t.getFreezedRowCount(), f), b = Math.min(t.getFreezedColumnCount(), w), I = t.getRowByTop(l + d + 1) ?? t.firstRow, x = t.getRowByTop(d + a) ?? t.lastRow, L = t.getColumnByLeft(u + c + 1) ?? i.firstColumn, v = t.getColumnByLeft(c + h) ?? i.lastColumn;
    if (!I || !x || !L || !v) return e;
    const p = r.getRowUnstable(Math.max(I.rowId - An, M)), m = r.getRowUnstable(Math.min(x.rowId + An, f)), E = i.getColumnUnstable(Math.max(L.columnId - zn, b)), R = i.getColumnUnstable(Math.min(v.columnId + zn, w));
    let g = D(0, M).asList(), _ = D(0, Math.max(b, s.getThemeValue("grid.forceRenderLeftCol"))).asList();
    g = g.concat(D(p.rowId, m.rowId + 1).asList()), _ = _.concat(D(E.columnId, R.columnId + 1).asList());
    const C = w - s.getThemeValue("grid.forceRenderRightCol") + 1;
    C > R.columnId && (_ = _.concat(D(C, w + 1).asList()));
    for (const y of g) {
      const T = r.getRowUnstable(y);
      if (T.visible)
        for (const k of _)
          i.getColumnUnstable(k).visible && S(jl(T.getCellUnstable(k)));
    }
    return e;
    function S(y) {
      const T = e.get(y.row);
      T ? T.push(y) : e.set(y.row, [y]);
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
        const M = d.get(w.rowId);
        M && (w.updateViewportCells(M, i, l), w.isFreezed || w.freeze(w.rowId < f), w.isMounted && w.element.parentElement === s && w.unmount(), w.isMounted || w.mount(n, "beforeend"));
      }, 0, u);
    }
    function h() {
      let f = null;
      for (const [w, M] of d.entries()) {
        if (w < u) continue;
        const b = r.getRowUnstable(w);
        if (b.updateViewportCells(M, i, l), b.isMounted)
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
class ko extends q {
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
const Ul = {
  "col-resizing": Kn,
  "row-resizing": Un
}, Mt = {
  "col-resizing": Ms,
  "row-resizing": Ts
}, Tt = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, Fn = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, ql = 500, Pn = 4;
class Io extends Ne {
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
    } = t, h = new Set(i), f = new Set(l), w = (v, p, m) => {
      e.commandManager.pushCommandBlock(new Ae(v, new ko(e, [p, m])));
    };
    {
      const v = document.createElement("div");
      let p = null, m = !1, E = 0, R = null, g = !1;
      const _ = (k, O) => {
        g && (g = !1, O.__IGNORE_CELL_CLICK__ = !0);
      };
      t.hook.addSyncBeginHook("cellClick", _), this.addRollbackTask(() => t.hook.removeSyncBeginHook("cellClick", _));
      const C = () => {
        p && (p.element.classList.remove(Mt["col-resizing"]), p.element.classList.remove(Mt["row-resizing"]), p = null), n.classList.remove(Kn), n.classList.remove(Un), n.classList.remove(Ze), R && n.removeEventListener("mousedown", R);
      }, S = (k, O) => {
        p = k, n.classList.add(Ze), n.classList.add(Ul[O]), k.element.classList.add(Mt[O]);
        let H = 0, F = 0, B = 0, $ = 0, z = 0;
        const et = () => k.col < e.getFreezedColumnCount() ? e.scrollLeft + $ : $, Be = () => k.row < e.getFreezedRowCount() ? e.scrollTop + $ : $;
        R = (J) => {
          const te = (/* @__PURE__ */ new Date()).getTime();
          if (c.setMode({
            mode: O,
            contextParam: {}
          }), te - E <= ql) {
            if (O === "col-resizing") {
              const re = Tt(k);
              x(re, t.rowManager.getMaxCellWidth(re, re + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(k.row);
              });
            E = 0, c.setIdle();
            return;
          }
          m = !0, E = te, O === "col-resizing" ? (v.className = Ls, z = e.getColumnWidth(Tt(k)), H = J.pageX, F = H - z + e.minColWidth, B = H - z + e.maxColWidth, $ = e.getColumnLeft(k.col) + e.getCellWidth(k), v.style.top = "0px", v.style.width = "0px", v.style.height = `${e.height}px`, v.style.left = `${et()}px`) : (v.className = Hs, z = e.getRowHeight(Fn(k)), H = J.pageY, F = H - z + e.minRowHeight, B = H - z + e.maxRowHeight, $ = e.getRow(k.row).top + e.getCellHeight(k), v.style.top = `${Be()}px`, v.style.width = `${e.width}px`, v.style.height = "0px", v.style.left = "0px"), d.wrapper.appendChild(v), e.addGlobalEventListener(document, "keydown", Ge), e.addGlobalEventListener(document, "mouseup", Ie), e.addGlobalEventListener(document, "mousemove", Ve);
        };
        const Ve = (J) => {
          if (O === "col-resizing") {
            const te = U(J.pageX, F, B) - H;
            v.style.left = `${et() + te}px`;
          } else {
            const te = U(J.pageY, F, B) - H;
            v.style.top = `${Be() + te}px`;
          }
        }, Ie = (J) => {
          if (O === "col-resizing") {
            const ie = U(J.pageX, F, B) - H;
            if (Math.abs(ie) > Pn) {
              const tt = Tt(k), Fo = z + ie;
              x(tt, Fo), E = 0;
            }
            const le = M(J);
            le && le === k && (g = !0);
          } else {
            const ie = U(J.pageY, F, B) - H;
            if (Math.abs(ie) > Pn) {
              const le = Fn(k), tt = z + ie;
              w("Resize row", le, tt), e.setRowHeight(le, tt), E = 0;
            }
          }
          Ee(), c.setIdle();
          const te = M(J);
          if (!te) return;
          const re = b(J, te);
          re !== null && S(te, re);
        };
        function Ee() {
          m = !1, v.remove(), C(), document.removeEventListener("mousemove", Ve), document.removeEventListener("mouseup", Ie), document.removeEventListener("keydown", Ge);
        }
        const Ge = (J) => {
          J.key === "Escape" && Ee();
        };
        e.addGlobalEventListener(n, "mousedown", R);
      }, y = (k) => {
        if (m) return;
        const O = M(k);
        if (C(), O === null) return;
        const H = b(k, O);
        H && S(O, H);
      }, T = (k) => {
        m || C();
      };
      e.addGlobalEventListener(n, "mousemove", y), e.addGlobalEventListener(n, "mouseleave", T);
    }
    const M = (v) => {
      const p = ut("th", "tr", v.target);
      if (!p) return null;
      const [m, E] = [
        parseInt(p.getAttribute("data-row") || "-1"),
        parseInt(p.getAttribute("data-col") || "-1")
      ];
      return e.cell(m, E);
    }, b = (v, p) => {
      if (p.cellType === "body-cell") return null;
      if (u) {
        const { visibleColumnList: m } = a, E = m[m.length - 1];
        if (m.length > 0 && p.col === E.columnId) return null;
      }
      return s && Math.abs(e.getCellWidth(p) - v.offsetX) <= Is && !h.has(p.col) ? "col-resizing" : r && Math.abs(e.getCellHeight(p) - v.offsetY) <= Es && !f.has(p.row) ? "row-resizing" : null;
    };
    function I(v, p, m) {
      const E = e.getColumnWidth(p) - m;
      e.setColumnWidth(p, E);
      const R = E - e.getColumnWidth(p);
      if (R !== 0) {
        const g = p - v;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          p - g,
          e.getColumnWidth(p - g) + R
        );
      }
    }
    function x(v, p) {
      const m = e.getColumnWidth(v);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(v, p), u && I(v, L(v), e.getColumnWidth(v) - m);
      });
    }
    function L(v) {
      let p = e.getColumn(v + 1);
      for (; !p.visible; )
        p = e.getColumn(p.columnId + 1);
      return p.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function cc(o) {
  return new Io(o);
}
const Xl = 16;
class Eo extends Ne {
  _enableHeaderClick = !0;
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: s, hook: r } = t;
    let i = null, l = null, u, d = null;
    const c = (p, m) => {
      const E = [
        p.row,
        p.bottom,
        m.row,
        m.bottom
      ], R = [
        p.col,
        p.right,
        m.col,
        m.right
      ], g = {
        top: Math.min(...E),
        left: Math.min(...R),
        bottom: Math.max(...E),
        right: Math.max(...R)
      };
      Jn(g, d) || (d = g, e.select(g, e.activeCell ?? i), this.onChangedSelection(g));
    }, a = (p, m) => {
      const E = e.activeCell;
      m.shiftKey && E ? (i = E, c(E, e.cell(p.row, p.col))) : (i = p, e.selectRange(i.row, i.col, i.bottom, i.right, i), this.onChangedSelection({ top: i.row, left: i.col, bottom: i.bottom, right: i.right })), l = i, s.setMode({ mode: "selecting-mouse", contextParam: {} });
    }, h = (p, m) => {
      this._enableHeaderClick && (m.__IGNORE_HEADER_SELECT__ || (i = p, w(i, i), s.setMode({ mode: "selecting-mouse", contextParam: {} })));
    };
    function f(p, m) {
      const E = m.closest("td,th");
      if (!E) return;
      const R = dt(E);
      l = e.cell(R.row, R.col), w(p, l);
    }
    function w(p, m) {
      p.cellType === "body-cell" ? c(p, m) : p.cellType === "col-header" ? e.selectColumns(...Dn(p.col, m.right)) : p.cellType === "row-header" && e.selectRows(...Dn(p.row, m.bottom));
    }
    function M(p, m) {
      const { offsetX: E, offsetY: R, target: g } = p;
      if (!be(g)) return null;
      const _ = E + g.scrollLeft, C = R + g.scrollTop, S = _ > e.width ? e.width : _, y = C > e.height ? e.height : C, T = e.findCellOrNull(y, S);
      T && (l = T, w(m, T));
    }
    function b(p) {
      const m = p.clientWidth + p.scrollLeft, E = p.clientHeight + p.scrollTop, R = p.scrollTop + e.headerHeight, g = p.scrollLeft + e.headerWidth, _ = E > e.height ? e.height : E, C = m > e.width ? e.width : m, S = e.findCellOrNull(R, g), y = e.findCellOrNull(_, C - 1);
      return {
        top: S?.row ?? 0,
        bottom: y?.row ?? 0,
        left: S?.col ?? 0,
        right: y?.col ?? 0
      };
    }
    function I(p, m, E, R) {
      u = window.setTimeout(() => {
        if (!i) return;
        const C = g(), S = _(), { top: y, bottom: T, left: k, right: O } = b(p), H = {
          top: p.scrollTop,
          left: p.scrollLeft,
          targetRow: E,
          targetCol: R
        };
        C && (m === "t" ? (H.top -= e.getRowHeight(y), H.targetRow = y) : (H.top += e.getRowHeight(T), H.targetRow = T)), S && (m === "l" ? (H.left -= e.getColumnWidth(k), H.targetCol = k) : (H.left += e.getColumnWidth(O), H.targetCol = O)), (C || S) && (p.scrollTo({ top: H.top, left: H.left }), w(i, e.cell(H.targetRow, H.targetCol)), I(p, m, H.targetRow, H.targetCol));
      }, Xl);
      function g() {
        return m === "t" ? p.scrollTop > 0 : m === "b" ? p.scrollHeight - (p.scrollTop + p.clientHeight) > 0 : !1;
      }
      function _() {
        return m === "l" ? p.scrollLeft > 0 : m === "r" ? p.scrollWidth - (p.scrollLeft + p.clientWidth) > 0 : !1;
      }
    }
    function x() {
      u && (clearTimeout(u), u = void 0);
    }
    function L(p) {
      if (n.classList.contains(Ze) || p.button !== 0 || !be(p.target) || // textArea, button 에서는 pass
      p.target instanceof HTMLTextAreaElement || ut(".button", "tr", p.target)) return;
      const m = ut("td,th", "tr", p.target);
      if (!m) return;
      const E = dt(m), R = e.cell(E.row, E.col);
      m.tagName === "TD" ? a(R, p) : m.tagName === "TH" && h(R, p);
    }
    function v(p) {
      i && be(p.target) && (p.target === n ? M(p, i) : f(i, p.target));
    }
    r.addHook("contextMouseMove", v), r.addHook("contextMouseDown", L), this.addRollbackTask(() => {
      r.removeHook("contextMouseMove", v), r.removeHook("contextMouseDown", L);
    }), e.addGlobalEventListener(document, "mouseup", () => {
      i && (x(), i = null, l = null, s.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: p, clientY: m, clientX: E }) => {
      if (!i || !l || !be(p)) return;
      const { top: R, bottom: g, left: _, right: C } = p.getBoundingClientRect();
      if (R < m && g > m && _ < E && C > E) return;
      const S = y();
      S && I(p, S, l.row, l.col);
      function y() {
        return m < R ? "t" : m > g ? "b" : E < _ ? "l" : E > C ? "r" : null;
      }
    }), e.addGlobalEventListener(n, "mouseenter", (p) => {
      i && be(p.currentTarget) && x();
    }), e.onDoubleClickCell = (p) => {
      p.cellType === "body-cell" && s.isIdle && (e.scrollInView(p.row, p.col), e.forceLayoutTask(), e.doEditMode(p, !1, !0));
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
function Dn(o, e) {
  return o < e ? [o, e] : [e, o];
}
function uc() {
  return new Eo();
}
class Mo extends q {
  _getUndoContext() {
    const [e, t] = this._args, n = [], s = new We(this._instance, this._instance);
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
function To(o, e) {
  const t = (g, _, C) => {
    const S = o.headerRows;
    let y = C, T = g;
    for (; y !== 0; ) {
      const k = o.cell(T, _), H = (k.mergeMain ?? k).row - 1;
      if (H < S) break;
      o.getRowVisible(H) && ++y, T = H;
    }
    return o.getRowVisible(T) ? T : g;
  }, n = (g, _, C) => {
    const S = o.getRowCount() - 1;
    let y = C, T = g;
    for (; y > 0; ) {
      const k = o.cell(T, _), H = (k.mergeMain ?? k).bottom + 1;
      if (H > S) break;
      o.getRowVisible(H) && --y, T = H;
    }
    return o.getRowVisible(T) ? T : g;
  }, s = (g, _, C) => {
    const S = o.headerColumns;
    let y = C, T = _;
    for (; y !== 0; ) {
      const k = o.cell(g, T), H = (k.mergeMain ?? k).col - 1;
      if (H < S) break;
      o.getColumnVisible(H) && ++y, T = H;
    }
    return o.getColumnVisible(T) ? T : _;
  }, r = (g, _, C) => {
    const S = o.getColCount() - 1;
    let y = C, T = _;
    for (; y !== 0; ) {
      const k = o.cell(g, T), H = (k.mergeMain ?? k).right + 1;
      if (H > S) break;
      o.getColumnVisible(H) && --y, T = H;
    }
    return o.getColumnVisible(T) ? T : _;
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
  }, d = () => {
    let g = o.getRowCount() - 1;
    for (; !o.getRowVisible(g); )
      --g;
    return g;
  }, c = (g) => {
    if (o.getRowCount() - 1 === g) return g;
    let C = g + 1;
    for (; !o.getRowVisible(C); )
      ++C;
    return C;
  }, a = (g) => {
    const _ = o.headerRows;
    if (g === _) return g;
    let C = g - 1;
    for (; !o.getRowVisible(C); )
      ++C;
    return C;
  }, h = () => {
    const { activeCell: g } = o;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = d(), C = l(), S = g.mergeMain ?? g;
    if (S.right === C) {
      if (g.row === _) return;
      const y = i(), T = c(g.row);
      e ? o.selectRow(T, o.cell(T, y)) : o.selectCell(T, y), o.scrollInView(T, y);
    } else {
      const y = r(g.row, S.right, 1);
      e ? o.selectRow(g.row, o.cell(g.row, y)) : o.selectCell(g.row, y), o.scrollOnCol(y);
    }
  }, f = () => {
    const { activeCell: g } = o;
    if (!g) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = u(), C = i(), S = g.mergeMain ?? g;
    if (S.col === C) {
      if (g.row === _) return;
      const y = l(), T = a(g.row);
      e ? o.selectRow(T, o.cell(T, y)) : o.selectCell(T, y), o.scrollInView(T, y);
    } else {
      const y = s(g.row, S.col, -1);
      e ? o.selectRow(g.row, o.cell(g.row, y)) : o.selectCell(g.row, y), o.scrollOnCol(y);
    }
  }, w = (g, _, C) => {
    let S = -1, y = -1;
    for (let T = _; T <= C; T++) {
      const k = o.cell(g, T), O = k.mergeMain ?? k, { rowSpan: H } = O.mergeInfo;
      H > S && (S = H, y = T);
    }
    return y;
  }, M = (g, _, C) => {
    let S = -1;
    for (let y = _; y <= C; y++) {
      const T = o.cell(g, y), k = T.mergeMain ?? T, { bottom: O } = k;
      O > S && (S = O);
    }
    return S;
  }, b = (g, _, C) => {
    let S = 999999999;
    for (let y = _; y <= C; y++) {
      const T = o.cell(g, y), k = T.mergeMain ?? T;
      S > k.row && (S = k.row);
    }
    return S;
  }, I = (g, _, C) => {
    let S = -1, y = -1;
    for (let T = _; T <= C; T++) {
      const k = o.cell(T, g), O = k.mergeMain ?? k, { colSpan: H } = O.mergeInfo;
      H > S && (S = H, y = T);
    }
    return y;
  }, x = (g, _, C) => {
    let S = -1;
    for (let y = _; y <= C; y++) {
      const T = o.cell(y, g), k = T.mergeMain ?? T, { right: O } = k;
      O > S && (S = O);
    }
    return S;
  }, L = (g, _, C) => {
    let S = 999999999;
    for (let y = _; y <= C; y++) {
      const T = o.cell(y, g), k = T.mergeMain ?? T;
      S > k.col && (S = k.col);
    }
    return S;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: s,
    getNextXRight: r,
    getFirstActiveRow: u,
    selectNextActiveCell: h,
    selectBeforeActiveCell: f,
    selectNextSelection: (g, _, C) => {
      const S = o.getSelection(), { activeCell: y } = o;
      if (S == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const T = y.mergeMain ?? y;
      if (C && e) return;
      if (!C) {
        if (g !== 0) {
          const B = g < 0 ? t(T.row, y.col, g) : n(T.bottom, y.col, g);
          e ? o.selectRow(B, o.cell(B, y.col)) : o.selectCell(B, y.col), o.scrollOnRow(B);
        } else {
          const B = _ < 0 ? s(y.row, T.col, _) : r(y.row, T.right, _);
          e ? o.selectRow(y.row, o.cell(y.row, B)) : o.selectCell(y.row, B), o.scrollOnCol(B);
        }
        return;
      }
      const { top: k, bottom: O, left: H, right: F } = S;
      if (g !== 0)
        if (g < 0)
          if (M(y.row, H, F) === O) {
            const $ = w(k, H, F), z = t(k, $, g);
            o.selectRange(z, H, O, F, y), o.scrollOnRow(z);
          } else {
            const $ = w(O, H, F), z = t(O, $, g);
            o.selectRange(k, H, z, F, y), o.scrollOnRow(z);
          }
        else if (b(y.row, H, F) === k) {
          const $ = w(O, H, F), z = n(O, $, g);
          o.selectRange(k, H, z, F, y), o.scrollOnRow(z);
        } else {
          const $ = w(k, H, F), z = n(k, $, g);
          o.selectRange(z, H, O, F, y), o.scrollOnRow(z);
        }
      else if (_ < 0)
        if (x(y.col, k, O) === F) {
          const $ = I(H, k, O), z = s($, H, _);
          o.selectRange(k, z, O, F, y), o.scrollOnCol(z);
        } else {
          const $ = I(F, k, O), z = s($, F, _);
          o.selectRange(k, H, O, z, y), o.scrollOnCol(z);
        }
      else if (L(y.col, k, O) === H) {
        const $ = I(F, k, O), z = r($, F, _);
        o.selectRange(k, H, O, z, y), o.scrollOnCol(z);
      } else {
        const $ = I(H, k, O), z = r($, H, _);
        o.selectRange(k, z, O, F, y), o.scrollOnCol(z);
      }
    },
    selectMoveToLastColumn: (g) => {
      const _ = o.getSelection(), { activeCell: C } = o;
      if (_ == null || C == null) {
        console.warn("No selection warning");
        return;
      }
      const S = l();
      g && e || (g ? o.selectRange(_.top, C.col, _.bottom, S, C) : e ? o.selectRow(C.row, o.cell(C.row, S)) : o.selectCell(C.row, S), o.scrollOnCol(S));
    },
    selectMoveToFirstColumn: (g) => {
      const _ = o.getSelection(), { activeCell: C } = o;
      if (_ == null || C == null) {
        console.warn("No selection warning");
        return;
      }
      const S = i();
      g && e || (g ? o.selectRange(_.top, S, _.bottom, C.col, C) : e ? o.selectRow(C.row, o.cell(C.row, S)) : o.selectCell(C.row, S), o.scrollOnCol(S));
    },
    selectMoveToLastRow: (g) => {
      const _ = o.getSelection(), { activeCell: C } = o;
      if (_ == null || C == null) {
        console.warn("No selection warning");
        return;
      }
      const S = d();
      g && e || (g ? o.selectRange(C.row, _.left, S, _.right, C) : o.selectCell(S, C.col), o.scrollOnRow(S));
    },
    selectMoveToFirstRow: (g) => {
      const _ = o.getSelection(), { activeCell: C } = o;
      if (_ == null || C == null) {
        console.warn("No selection warning");
        return;
      }
      const S = u();
      g && e || (g ? o.selectRange(S, _.left, C.bottom, _.right, C) : o.selectCell(S, C.col), o.scrollOnRow(S));
    }
  };
}
class Zl {
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
const $n = 10;
class Lo extends Ne {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const s = new Zl(), { gridStateContext: r, hook: i } = n;
    s.onStartKeyActionHook = (m) => i.emitSync("keyAction", [m, m.key]), s.onEndKeyActionHook = (m) => {
      !m.ctrlKey && !m.shiftKey && m.key === " " && v() === !1 || p(m.key) || m.preventDefault();
    };
    const l = (m = !1) => {
      if (!r.isIdle) return;
      const E = e.activeCell?.mergeMain ?? e.activeCell;
      E && (e.scrollInView(E.row, E.col), e.forceLayoutTask(), e.doEditMode(E, m));
    };
    this._keyMiddleware.forEach(([m, E]) => s.addKeyAction(m, E));
    const u = new We(n.rowManager, n.columnManager), {
      selectNextActiveCell: d,
      selectNextSelection: c,
      selectBeforeActiveCell: a,
      selectMoveToFirstRow: h,
      selectMoveToFirstColumn: f,
      selectMoveToLastColumn: w,
      selectMoveToLastRow: M
    } = To(e, this._rowSelection), b = (m) => (E) => {
      r.gridModeState.value.mode !== "edit-cell" && m(E);
    };
    this.addPluginSyncHook("cut", b((m) => e.onNativeCut(m))), this.addPluginSyncHook("copy", b((m) => e.onNativeCopy(m))), this.addPluginSyncHook("paste", b((m) => e.onNativePaste(m))), s.addKeyAction("Tab", (m) => (m.shiftKey ? a() : d(), !0)), s.addKeyAction("ArrowRight", (m) => (m.ctrlKey ? w(m.shiftKey) : c(0, 1, m.shiftKey), !0)), s.addKeyAction("ArrowUp", (m) => (m.ctrlKey ? h(m.shiftKey) : c(-1, 0, m.shiftKey), !0)), s.addKeyAction("ArrowLeft", (m) => (m.ctrlKey ? f(m.shiftKey) : c(0, -1, m.shiftKey), !0)), s.addKeyAction("ArrowDown", (m) => (m.ctrlKey ? M(m.shiftKey) : c(1, 0, m.shiftKey), !0)), s.addKeyAction("Home", (m) => (m.ctrlKey ? (f(m.shiftKey), h(m.shiftKey)) : f(m.shiftKey), !0)), s.addKeyAction("End", (m) => (m.ctrlKey ? (w(m.shiftKey), M(m.shiftKey)) : w(m.shiftKey), !0)), s.addKeyAction("PageUp", (m) => (c(-$n, 0, m.shiftKey), !0)), s.addKeyAction("PageDown", (m) => (c($n, 0, m.shiftKey), !0)), s.addKeyAction("Enter", () => {
      const m = e.getSelection();
      return m && (m.top === e.getRowCount() - 1 ? (c(0, 1, !1), m.left !== e.getSelection()?.left && h(!1)) : c(1, 0, !1)), !0;
    }), s.addKeyAction("a", I), s.addKeyAction("A", I), s.addKeyAction("z", x), s.addKeyAction("Z", x), s.addKeyAction("y", L), s.addKeyAction("Y", L);
    function I(m) {
      return m.ctrlKey ? (e.selectAll(), m.preventDefault(), !1) : !0;
    }
    function x(m) {
      return m.ctrlKey ? (e.undo(), m.preventDefault(), !1) : !0;
    }
    function L(m) {
      return m.ctrlKey ? (e.redo(), m.preventDefault(), !1) : !0;
    }
    s.addKeyAction("F2", (m) => (l(), !0)), s.addKeyAction("Backspace", (m) => {
      const E = e.getSelection(), R = e.activeCell;
      return !E || !R || e.doEditMode(R, !0), !0;
    }), s.addKeyAction("Delete", (m) => {
      const E = e.getSelection();
      if (!E || u.getCanClearCellCount(E, (g) => e.onClearCellCheck(g)) === 0) return !0;
      const R = new Mo(e, [E, !0]);
      return e.commandManager.pushCommandBlock(new Ae("Clear cells", R)), e.clearCells(E, !0), !0;
    }), s.addKeyAction(" ", (m) => {
      const E = e.getSelection();
      if (E === null) return !0;
      if (m.ctrlKey)
        return e.selectColumns(E.left, E.right), !0;
      if (m.shiftKey)
        return e.selectRows(E.top, E.bottom), !0;
      const R = [...u.getSelectionGenerator(E)];
      if (R.length === 0) return !0;
      const g = R[0], C = g.text === "true" ? "false" : "true", S = new Ae("Typing space"), y = (k, O) => {
        S.pushCommand(new Se(e, [k.row, k.col, { text: C }])), e.setText(k.row, k.col, C), O.onCheckboxClick(k.row, k.col, C === "true");
      }, T = (k, O) => {
        if (k.text === "true") return;
        const H = O.lastClickedRadio;
        H && S.pushCommand(new Se(e, [H.row, H.col, { text: "false" }])), S.pushCommand(new Se(e, [k.row, k.col, { text: "true" }])), e.setText(k.row, k.col, "true"), O.onRadioClick(k.row, k.col);
      };
      for (const k of R) {
        if (k.onCheckReadonly() || k.props.disabled) continue;
        const O = k.renderInstance;
        O instanceof to && y(k, O), k === g && O instanceof _o && T(k, O);
      }
      return S.commandLength > 0 && e.commandManager.pushCommandBlock(S), !0;
    }), this.addPluginSyncHook("input", (m) => {
      r.gridModeState.isIdle && m.data && l(!0);
    }), this.addPluginSyncHook("keydown", (m) => {
      if (
        // editMode에서 온 입력은 pass
        !(!r.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!r.isIdle) {
          m.preventDefault();
          return;
        }
        if (!m.ctrlKey && p(m.key)) {
          l(!0);
          return;
        }
        s.startKeyAction(m);
      }
    });
    function v() {
      const m = e.getSelection();
      if (!m) return !1;
      for (const E of u.getSelectionGenerator(m))
        if (E.renderType === "checkbox" || E.renderType === "radio") return !0;
      return !1;
    }
    function p(m) {
      return m === "Process" || Yl.test(m);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const Yl = /^[\w]$/;
function dc(o) {
  return new Lo(o ?? {});
}
class Ho extends Ne {
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
function hc() {
  return new Ho();
}
const Oo = 8, Jl = {
  normal: Fs,
  error: zs
}, Wn = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || tr(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      nr({
        mainAxis: Oo,
        crossAxis: n ?? 0
      }),
      or(),
      sr({ padding: 5 })
    ]
  }).then(({ x: s, y: r, placement: i }) => {
    e.style.left = `${s}px`, e.style.top = `${r}px`, e.dataset.placement = i;
  });
}, Ql = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", ea = (o) => o.cellInfo.memo ?? "";
class ta extends Ne {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Os;
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
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? Ql(e), d = this.options.getMemoText?.(e) ?? ea(e), c = () => {
      this._tooltipElement.textContent = u, un("popover").appendChild(this._tooltipElement), Wn(e.element, this._tooltipElement, "bottom");
    }, a = () => {
      this._memoElement.textContent = d ?? "", this._memoElement.className = `${As} ${Jl[i]}`, un("popover").appendChild(this._memoElement), Wn(e.element, this._memoElement, "right-start", Oo);
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
      if (!be(l.target)) return;
      const u = ut("td,th", "tr", l.target);
      if (!u) {
        r();
        return;
      }
      const d = dt(u), c = e.cell(d.row, d.col);
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
const na = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
], oa = tn(P.minWidth), sa = tn(P.minHeight);
function ra() {
  const o = He("div", $s), e = [];
  for (const n of na)
    if (n.type === "divider") {
      const s = He("div", Ws);
      o.append(s);
    } else {
      const s = He("button", Ns), r = qn(`ir-icon--chevron-${n.value}`);
      s.dataset.type = n.type, s.append(r), s.onclick = () => t.onButtonClick(n.value), s.setAttribute("data-ir-tooltip", ""), s.setAttribute("data-ir-tooltip-text", Q.t("gridOverflowPanel." + n.value)), o.append(s), e.push(s);
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
class fc extends Ne {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: s, columnManager: r } = n, i = He("div", Ps), l = He("div", Ds), u = ra(), d = Ys({
      containerElement: u.buttonGroup,
      placement: "right",
      offset: 8
    });
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const c = {
      up() {
        const b = h(l.scrollTop);
        if (!b) return;
        const I = b.rowId - 1, x = I < 0 ? 0 : e.getRow(I).top;
        l.scrollTop = x;
      },
      down() {
        const b = h(l.scrollTop);
        b && (l.scrollTop = b.bottom);
      },
      left() {
        const b = f(l.scrollLeft);
        if (!b) return;
        const I = b.columnId - 1, x = I < 0 ? 0 : e.getColumn(I).left;
        l.scrollLeft = x;
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
      w(s.freezedRowsHeight, s.freezedRows), M(r.fixedColumnsWidth, r.freezedColumns);
    }), n.hook.addHook("resize", a), n.hook.addSyncHook("changedFreezedRowHeight", w), n.hook.addSyncHook("changedFreezedColumnWidth", M), this.addRollbackTask(() => {
      d.destroy(), n.hook.removeHook("resize", a), n.hook.removeSyncHook("changedFreezedRowHeight", w), n.hook.removeSyncHook("changedFreezedColumnWidth", M);
    }), this.addRollbackTask(() => {
      const b = i.nextElementSibling;
      b ? b.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function a() {
      const b = parseInt(t.style.getPropertyValue(oa)), I = parseInt(t.style.getPropertyValue(sa));
      u.visibleButtonGroup(
        I >= l.clientHeight,
        b >= l.clientWidth
      );
    }
    function h(b) {
      let I = 0, x = s.visibleRowList.length - 1;
      for (; I <= x; ) {
        const L = I + Math.floor((x - I) / 2), v = s.visibleRowList[L];
        if (b >= v.top && b < v.bottom)
          return v;
        b < v.top ? x = L - 1 : I = L + 1;
      }
      return null;
    }
    function f(b) {
      let I = 0, x = r.visibleColumnList.length - 1;
      for (; I <= x; ) {
        const L = I + Math.floor((x - I) / 2), v = r.visibleColumnList[L];
        if (b >= v.left && b < v.right)
          return v;
        b < v.left ? x = L - 1 : I = L + 1;
      }
      return null;
    }
    function w(b, I) {
      const x = I, L = b + (x < e.getRowCount() ? s.getRowHeight(x) : 0) + (v() ? cn : 0);
      fe(t, {
        [P.minHeight]: `${L}px`
      }), a();
      function v() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-horizontal-scroll");
      }
    }
    function M(b, I) {
      const x = I, L = b + (x < e.getColCount() ? e.getColumnWidth(x) : 0) + (v() ? cn : 0);
      fe(t, {
        [P.minWidth]: `${L}px`
      }), a();
      function v() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
function ia(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return la;
  const { metaInfo: t } = o, { operand: n, operator: s } = e, r = () => {
    const d = n.map((a) => parseFloat(a)), c = new Set(d);
    switch (s) {
      case "equals":
        return ye((a) => c.has(a));
      case "not-equals":
        return ye((a) => !c.has(a));
      case "less-than":
        return ye((a) => d.some((h) => a < h));
      case "less-than-or-equal":
        return ye((a) => d.some((h) => a <= h));
      case "greater-than":
        return ye((a) => d.some((h) => a > h));
      case "greater-than-or-equal":
        return ye((a) => d.some((h) => a >= h));
      case "in-range":
        return ye((a) => d[0] <= a && a <= d[1]);
      case "blank":
        return Lt;
      default:
        return Ke;
    }
  }, i = () => {
    const { format: d } = t;
    if (!d) throw new Error("format is required for date type column");
    const c = n.map((h) => ca(h, d));
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
        return Lt;
      default:
        return Ke;
    }
    function a(h) {
      return (f) => {
        const w = Pt(f, d);
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
        return Lt;
      default:
        return Ke;
    }
  }, u = () => {
    const d = new Set(n.map((c) => c === "true"));
    switch (s) {
      case "equals":
        return Nn((c) => d.has(c));
      case "not-equals":
        return Nn((c) => !d.has(c));
      default:
        return Ke;
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
      return Ke;
  }
}
function Lt(o) {
  return o === "";
}
function Ke() {
  return !1;
}
function la() {
  return !0;
}
const aa = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function ye(o) {
  return (e) => aa.test(e) ? o(parseFloat(e)) : !1;
}
function Nn(o) {
  return (e) => o(e === "true");
}
function ca(o, e) {
  const t = Pt(o, e);
  return t.isValid() ? t : Pt(o.replace(/[-/]/g, ""), e.replace(/[-/]/g, ""));
}
const ua = (o) => {
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
      return en(r.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${o.uuid}`), o.onColumnClick = (r, i) => {
        !t || i.target instanceof HTMLElement && i.target.classList.contains("ir-grid-filter-icon") || this.toggleSortColumn(r);
      };
    },
    sortColumn(r, i) {
      o.sort((l, u) => this.compareTo(l.getCell(r), u.getCell(r)), i);
    },
    /**
     *
     * @version 2.20.0
     */
    sortColumns(...r) {
      o.sort((i, l) => {
        for (const [u, d] of r) {
          const c = this.compareTo(i.getCell(u), l.getCell(u));
          if (c !== 0)
            return d === "ASC" ? c : -c;
        }
        return 0;
      }, "ASC");
    },
    toggleSortColumn(r) {
      if (o.className.indexOf(Ze) >= 0)
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
var da = Object.defineProperty, ha = Object.getOwnPropertyDescriptor, nn = (o, e, t, n) => {
  for (var s = ha(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && da(e, t, s), s;
};
const Ht = Object.freeze({
  textType: "string",
  enabled: !0
});
class on {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = ua(e), this._columnSortManager.overrideColumnClickEvent(), this._defaultDateFormat = Q.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, s]) => this._filterMap.set(parseInt(n, 10), { metaInfo: s }));
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
    return this._filterMap.get(e)?.metaInfo ?? Ht;
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
      metaInfo: Ht,
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
    const t = this._filterMap.get(e) ?? { metaInfo: Ht };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), ia(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: s }) => s(t.getCell(n).text))
    );
  }
}
nn([
  sn()
], on.prototype, "clearFilters");
nn([
  sn()
], on.prototype, "removeColFilter");
nn([
  sn()
], on.prototype, "setColFilter");
function sn() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...s) {
      const r = n.apply(this, s);
      return this._applyFilter(), r;
    }, t;
  };
}
function fa(o, e) {
  const t = new Set(e.allowCellRenderType ?? ["default", "select", "datePicker", "custom"]), n = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let s = !1, r = !1, i = 0, l = 0;
  const u = {
    setRow(w) {
      i = w;
    },
    setCol(w) {
      l = w;
    }
  }, d = () => n.hasHeaderRows ? 0 : o.headerRows, c = () => n.hasHeaderColumns ? 0 : o.headerColumns;
  function* a() {
    u.setRow(d()), u.setCol(c());
    const w = o.getSelection();
    for (s = !1; ; ) {
      switch (n.area) {
        case "all":
          yield o.cell(i, l);
          break;
        case "selected-col":
          if (!w) throw new Error("No selection in finding");
          eo(l, w) && (yield o.cell(i, l));
          break;
        case "selected-row":
          if (!w) throw new Error("No selection in finding");
          Qn(i, w) && (yield o.cell(i, l));
          break;
        case "selection":
          if (!w) throw new Error("No selection in finding");
          fn(i, l, w) && (yield o.cell(i, l));
          break;
        case "custom":
          if (!n.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          fn(i, l, n.customRange) && (yield o.cell(i, l));
          break;
      }
      if (M()) break;
    }
    function M() {
      const b = n.direction;
      if (b === "by-columns" || b === "left-right") {
        if (++i, i >= o.getRowCount() && (++l, i = d()), l >= o.getColCount())
          if (s)
            s = !1, i = d(), l = c();
          else return !0;
      } else if (++l, l >= o.getColCount() && (++i, l = c()), i >= o.getRowCount())
        if (s)
          s = !1, i = d(), l = c();
        else return !0;
    }
  }
  function h(w) {
    if (!t.has(w.renderType)) return !1;
    const M = n.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), b = n.matchAll ? `^${M}$` : M, I = n.ignoreCase ? "i" : "", x = new RegExp(b, I);
    return e.onCellCheck ? e.onCellCheck(x, w) : x.test(w.text);
  }
  let f = a();
  return {
    resetCursor() {
      r = !0;
    },
    findNext(w) {
      for (Jn(n, w) || (Object.assign(n, w), r = !0), r && (f = a(), r = !1); ; ) {
        const M = f.next();
        if (!M.done && M.value && h(M.value))
          return s = !0, M.value;
        if (M.done)
          break;
      }
      return r = !0, null;
    },
    getAllMatchedCell(w) {
      const M = [];
      w && Object.assign(n, w);
      for (const b of a())
        h(b) && M.push(b);
      return M;
    },
    setCursor(w, M) {
      if (w < 0 || M < 0) throw new Error("row or col must be greater than or equal to 0");
      u.setRow(w), u.setCol(M);
    }
  };
}
function Ot(o) {
  if (!(o instanceof Function))
    throw new Error("func is not a function");
  try {
    return o();
  } catch (e) {
    console.error(e);
  }
}
class ga extends q {
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
class ma extends q {
  _execute() {
    if (!this._undoContext.row) throw new Error("not recorded the added row in undoContext!");
    return this._instance.insertRowByList([this._undoContext.row]), this._undoContext.row.rowId;
  }
  _undo() {
    this._undoContext.row = this._instance.getRow(this._undoContext.addedRow), this._instance.removeRow(this._undoContext.addedRow), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      row: null,
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
class pa extends q {
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
function Ao(o, e) {
  const [t, n] = o, [s, r] = e, i = n - t, l = r - s;
  return i === l ? [e, o] : t < s ? [[r - i, r], [t, t + l]] : [[s, s + i], [n - l, n]];
}
class wa extends q {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Ao(...this._args));
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
class Ca extends q {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Ao(...this._args));
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
class _a extends q {
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
class Ra extends q {
  _undo() {
    const [e, t = 1] = this._args, n = e + t - 1;
    this._undoContext.rows = D(e, n + 1).map((s) => this._instance.getRow(s)), this._instance.removeRows(e, n), this._instance.forceLayoutTask(), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertRowByList(this._undoContext.rows), !0;
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell,
      rows: []
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class ya extends q {
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
    const e = new We(this._instance, this._instance), [t, n, s, r] = this._args, i = [];
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
function zo(o, e) {
  const [t, n] = o, s = n - t;
  return t < e ? [[e - s - 1, e - 1], t] : [[e, e + s], n + 1];
}
class xa extends q {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...zo(this._args[0], this._undoContext.targetId));
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
class ba extends q {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...zo(this._args[0], this._undoContext.targetId));
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
class Sa extends q {
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
    const e = new bt(this._instance), [t, n] = this._args;
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
class va extends q {
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
    const [e, t, n] = this._args, s = D(e, t + 1).map((r) => this._instance.getRow(r));
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
class ka extends q {
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
class Ia extends q {
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
class Ea extends q {
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
class Ma extends q {
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
const Bn = {
  addRow: ma,
  addColumn: ga,
  setCell: Se,
  clearCells: Mo,
  setRowHeight: ko,
  setColumnWidth: ka,
  insertRows: Ra,
  insertColumns: _a,
  setRowVisible: Ia,
  setColumnVisible: pa,
  mergeCells: ya,
  splitCells: Ma,
  removeRows: va,
  removeColumns: Sa,
  exchangeRows: wa,
  exchangeColumns: Ca,
  moveRows: xa,
  moveColumns: ba,
  setCellRenderer: Ea
};
function Ta(o) {
  if (!(o in Bn)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return Bn[o];
}
function La(o) {
  if (o === K.name)
    return Ta;
}
function Ha(o, e, t, n, s) {
  const r = La(e);
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
      return i ? i.isRecording && Ha(i, this.constructor.name, t, this, r) : console.warn("No commandManager in this context"), s.apply(this, r);
    }, n;
  };
}
function At(o) {
  if (!(o.target instanceof HTMLElement)) return null;
  const e = o.target.closest("td,th");
  return e ? dt(e) : null;
}
var Oa = Object.defineProperty, Aa = Object.getOwnPropertyDescriptor, Z = (o, e, t, n) => {
  for (var s = Aa(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && Oa(e, t, s), s;
};
const zt = new Yt(), za = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), Fa = Object.freeze({
  colSpan: !1,
  rowSpan: !1,
  skipFiltered: !0
}), Ft = {}, Pa = [
  "text/html",
  "text/plain"
];
function Da() {
  return [
    new Lo({}),
    new Eo(),
    new Ho(),
    new Io({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new ta({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class K extends cr {
  _colHeaderInfo;
  _rowHeaderInfo;
  _bodyInfo;
  _plugins = [];
  _defaultColumnCellFormat;
  // IRGrid Util
  _scheduleManager;
  _gridStore;
  _gridRangeUtils = new bt(this);
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
      ...za,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...Fa,
      ...e.copyOptions,
      ...e.pasteOptions
    }, r)
      for (const [a, h] of Object.entries(r))
        this._defaultColumnCellFormat[a] = Object.assign(this._defaultColumnCellFormat[a] || {}, h);
    this._gridStore = new vl(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new Us({ context: this }),
        gridStateContext: new Al(this),
        cursorManager: To(this, !1)
      }
    ), this._initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: zt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      /**
       * cellRenderer 설명
       */
      cellRenderer: zt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: zt
    }, s), this.contextElement.classList.add(Bs, Vs), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
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
    }), this.addCoreElement(l), this._generator = new We(this._rowManager, this._colManager), this._selector = new Bl(this, u, l), this._scheduleManager = new Kl({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? Da()), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && (a?.activeCell.deactivate(), h?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((a, h) => {
      a.forEach((f) => f.deactivate()), h.forEach((f) => f.activate());
    }), u.selectionRangeState.addSubscription((a, h) => {
      h ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(h.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && Ot(() => this.onChangeCell(h?.activeCell ?? null)), Ot(h ? () => this.onSelectCell(h.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((a, h) => {
      const f = h?.range ?? null, w = a?.range ?? null;
      this.hook.emitSync("selectChanged", [f, w]), this.onSelectChanged(f, w);
    }), u.selectionRangeState.addSubscription((a, h) => {
      h?.activeCell && this._gridStore.gridTextarea.setPosition(h.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((a, h) => {
      this.contextElement.dataset.mode = h.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (a) => this.hook.emit("contextMenu", [a])), this.addGlobalEventListener(this.contextElement, "focus", (a) => this.hook.emit("contextFocus", [a])), this.addGlobalEventListener(this.contextElement, "blur", (a) => this.hook.emit("contextBlur", [a])), this.addGlobalEventListener(this.contextElement, "dragstart", (a) => this.hook.emit("contextDragStart", [a])), this.addGlobalEventListener(this.contextElement, "dragend", (a) => this.hook.emit("contextDragEnd", [a])), this.addGlobalEventListener(this.contextElement, "scroll", (a) => {
      this.hook.emitSync("contextScroll", [a, this.scrollTop, this.scrollLeft]);
    }, { passive: !1 }), this.addGlobalEventListener(this.contextElement, "cut", (a) => this.hook.emitSync("cut", [a])), this.addGlobalEventListener(this.contextElement, "copy", (a) => this.hook.emitSync("copy", [a])), this.addGlobalEventListener(this.contextElement, "paste", (a) => this.hook.emitSync("paste", [a])), this.addGlobalEventListener(this.contextElement, "input", (a) => this.hook.emitSync("input", [a]), !0), this.addGlobalEventListener(this.contextElement, "keydown", (a) => this.hook.emitSync("keydown", [a]), !0), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emit("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mousemove", (a) => this.hook.emit("contextMouseMove", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emit("contextMouseUp", [a])), this.addGlobalEventListener(this.contextElement, "click", (a) => this.hook.emitSync("contextClick", [a])), this.addGlobalEventListener(this.contextElement, "dblclick", (a) => this.hook.emitSync("contextDoubleClick", [a])), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emitSync("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emitSync("contextMouseUp", [a])), this.hook.addBeginHook("contextMenu", (a) => void a.preventDefault()), this.hook.addEndHook("contextMenu", (a) => {
      const { y: h, x: f } = hr(a);
      this.onContextMenu(a, this.findCellOrNull(h, f));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this.hook.addSyncHook("cellRightClick", (a, h) => this.onCellRightClick(h, a)), this.hook.addSyncHook("cellClear", (a) => this.onClearCell(a)), this.hook.addSyncHook("cellDblClick", (a) => this.onDoubleClickCell(a)), this.hook.addSyncHook("cellSelect", (a) => this.selectCell(a.row, a.col)), this.hook.addSyncHook("cellClick", (a, h) => {
      h.__IGNORE_CELL_CLICK__ || this.contextElement.classList.contains(Ze) || (a.cellType === "row-header" && this.onRowClick(a, h), a.cellType === "col-header" && this.onColumnClick(a, h));
    }), this.hook.addSyncHook("contextMouseUp", (a) => {
      if (a.button !== 2) return;
      const h = At(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onRightClick(f, a);
      }
    }), this.hook.addSyncHook("contextClick", (a) => {
      if (!a.target.isConnected) return;
      const h = At(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onClick(f, a);
      }
    }), this.hook.addSyncHook("contextDoubleClick", (a) => {
      if (!be(a.target) || a.target.tagName === "I" || a.target.tagName === "TEXTAREA") return;
      const h = At(a);
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
      return D(e.mergeInfo.colSpan).reduce((n, s) => this.getColumnVisible(t + s) ? n + this.getColumnWidth(t + s) : n, 0);
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
      return D(e.mergeInfo.rowSpan).reduce((n, s) => this.getRowVisible(t + s) ? n + this.getRowHeight(e.row + s) : n, 0);
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
    const n = U(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
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
    const n = U(t, this.minRowHeight, this.maxRowHeight);
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
    const t = U(e, this.minColWidth, this.maxColWidth), n = this._colManager.addColumn(t);
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
    const s = this.getRowCount(), r = U(e, this.headerRows, s);
    if (!this._mergeHandler.checkCanInsertRow(r)) return !1;
    const i = U(n, this.minRowHeight, this.maxRowHeight);
    if (r === s)
      return D(t).forEach(() => this.addRow(i)), !0;
    const l = D(t).map((u) => this._createIRGridRow(r + u, 0, i));
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
    const s = this.getColCount(), r = U(e, this.headerColumns, s);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = U(n, this.minColWidth, this.maxColWidth);
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
    D(e, t + 1).forEach((n) => {
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
      const t = (await Js.read()).flat();
      for await (const n of t)
        for (const s of Pa)
          e[s] === "" && n.types.includes(s) && (e[s] = await Qs(await n.getType(s)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = ar(Ft) ?? "";
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
      Ln(
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
    const n = sl(this, this._pasteOptions), s = n.getPastingRange(e, t), { rowSpan: r, colSpan: i } = this._pasteOptions;
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
    return fa(this, e);
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
    if (e.some((s) => this._colManager.isInvalidColumnId(s)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((s) => s < this.getFreezedColumnCount()))
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
  onColumnClick(e, t) {
  }
  /**
   * @event
   */
  onRowClick(e, t) {
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
    Tn(e.clipboardData, l), hn(Ft, JSON.stringify(l)), this.focus(), this.onCopy(), e.preventDefault();
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
    const n = Ln(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  /**
   * @event
   */
  onMultipleCellsNativeCopy(e, t) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    if (t.length === 0) throw new Error("Detected copy without multi selection");
    const { rowSpan: n, colSpan: s, skipFiltered: r } = this._copyOptions, i = [...t].sort((h, f) => h.row - f.row || h.col - f.col), l = /* @__PURE__ */ new Map();
    for (const h of i) {
      if (r && this.isFilteredRow(h.row)) continue;
      const f = l.get(h.row) ?? /* @__PURE__ */ new Map();
      l.set(h.row, f.set(h.col, h));
    }
    const u = [...l.keys()], d = Array.from(l.get(u[0]).keys()).join(",");
    if (!u.every((h) => {
      const f = l.get(h);
      return f ? Array.from(f.keys()).join(",") === d : !1;
    }))
      return console.warn("Copy failed: selected cells must form a perfect rectangle."), !1;
    const a = u.map((h) => Array.from(l.get(h).values()).map((w) => ({
      text: this.onCopyCellText(w),
      cellVisible: w.mergeMain === void 0,
      rowSpan: n ? w.mergeInfo.rowSpan : 1,
      colSpan: s ? w.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    return Tn(e.clipboardData, a), hn(Ft, JSON.stringify(a)), this.focus(), this.onCopy(), e.preventDefault(), !0;
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
    D(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  _initGridCellPadding() {
    fe(this.contextElement, {
      [P.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [P.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [P.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [P.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
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
    const n = this._getCellType(e, t), s = n.endsWith("header") ? "th" : "td", r = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, r), l = new Tl({
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
    const s = new zl({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return ++this._rowSeq, D(this.getColCount()).forEach((r) => {
      s.addCell(this._createIRGridCell(e, r)), this.getColumnVisible(r) || s.setColumnVisible(r, !1);
    }), s;
  }
}
Z([
  X()
], K.prototype, "splitCells");
Z([
  X()
], K.prototype, "mergeCells");
Z([
  X()
], K.prototype, "setCellRenderer");
Z([
  X()
], K.prototype, "setColumnWidth");
Z([
  X()
], K.prototype, "setRowHeight");
Z([
  X()
], K.prototype, "setCell");
Z([
  X()
], K.prototype, "addRow");
Z([
  X()
], K.prototype, "removeRows");
Z([
  X()
], K.prototype, "removeColumns");
Z([
  X()
], K.prototype, "addColumn");
Z([
  X()
], K.prototype, "insertRows");
Z([
  X()
], K.prototype, "insertColumns");
Z([
  X()
], K.prototype, "clearCells");
Z([
  X()
], K.prototype, "setRowVisible");
Z([
  X()
], K.prototype, "setColumnVisible");
Z([
  X()
], K.prototype, "exchangeRows");
Z([
  X()
], K.prototype, "exchangeColumns");
Z([
  X()
], K.prototype, "moveRows");
Z([
  X()
], K.prototype, "moveColumns");
export {
  ta as $,
  Tl as A,
  to as B,
  Ya as C,
  tc as D,
  _o as E,
  Xt as F,
  nc as G,
  xi as H,
  K as I,
  Yt as J,
  bi as K,
  Si as L,
  we as M,
  oc as N,
  sc as O,
  rc as P,
  Ro as Q,
  ic as R,
  Zt as S,
  Io as T,
  cc as U,
  Eo as V,
  uc as W,
  Lo as X,
  dc as Y,
  Ho as Z,
  hc as _,
  ke as a,
  fc as a0,
  ua as a1,
  In as a2,
  En as a3,
  en as a4,
  lc as a5,
  N as b,
  j as c,
  A as d,
  ce as e,
  yt as f,
  _e as g,
  de as h,
  G as i,
  se as j,
  Kr as k,
  Ce as l,
  pt as m,
  Se as n,
  Fe as o,
  yi as p,
  ac as q,
  ec as r,
  jr as s,
  Y as t,
  me as u,
  Ne as v,
  dt as w,
  on as x,
  zl as y,
  oe as z
};
//# sourceMappingURL=grid-JHn50Ti0.js.map
