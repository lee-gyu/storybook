const ae = (e, t) => e === t, q = Symbol("solid-proxy"), de = typeof Proxy == "function", he = Symbol("solid-track"), V = {
  equals: ae
};
let ee = le;
const T = 1, F = 2, te = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var d = null;
let v = null, ge = null, g = null, b = null, P = null, B = 0;
function j(e, t) {
  const n = g, s = d, o = e.length === 0, l = t === void 0 ? s : t, r = o ? te : {
    owned: null,
    cleanups: null,
    context: l ? l.context : null,
    owner: l
  }, i = o ? e : () => e(() => p(() => N(r)));
  d = r, g = null;
  try {
    return I(i, !0);
  } finally {
    g = n, d = s;
  }
}
function ne(e, t) {
  t = t ? Object.assign({}, V, t) : V;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, s = (o) => (typeof o == "function" && (o = o(n.value)), oe(n, o));
  return [ie.bind(n), s];
}
function qe(e, t, n) {
  const s = K(e, t, !0, T);
  k(s);
}
function x(e, t, n) {
  const s = K(e, t, !1, T);
  k(s);
}
function ye(e, t, n) {
  ee = me;
  const s = K(e, t, !1, T);
  s.user = !0, P ? P.push(s) : k(s);
}
function w(e, t, n) {
  n = n ? Object.assign({}, V, n) : V;
  const s = K(e, t, !0, 0);
  return s.observers = null, s.observerSlots = null, s.comparator = n.equals || void 0, k(s), ie.bind(s);
}
function He(e) {
  return I(e, !1);
}
function p(e) {
  if (g === null) return e();
  const t = g;
  g = null;
  try {
    return e();
  } finally {
    g = t;
  }
}
function Xe(e) {
  ye(() => p(e));
}
function be(e) {
  return d === null || (d.cleanups === null ? d.cleanups = [e] : d.cleanups.push(e)), e;
}
function We() {
  return g;
}
const [Ye, ze] = /* @__PURE__ */ ne(!1);
function Qe(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: Ee(n),
    defaultValue: e
  };
}
function Je(e) {
  let t;
  return d && d.context && (t = d.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function se(e) {
  const t = w(e), n = w(() => H(t()));
  return n.toArray = () => {
    const s = n();
    return Array.isArray(s) ? s : s != null ? [s] : [];
  }, n;
}
function ie() {
  if (this.sources && this.state)
    if (this.state === T) k(this);
    else {
      const e = b;
      b = null, I(() => _(this), !1), b = e;
    }
  if (g) {
    const e = this.observers ? this.observers.length : 0;
    g.sources ? (g.sources.push(this), g.sourceSlots.push(e)) : (g.sources = [this], g.sourceSlots = [e]), this.observers ? (this.observers.push(g), this.observerSlots.push(g.sources.length - 1)) : (this.observers = [g], this.observerSlots = [g.sources.length - 1]);
  }
  return this.value;
}
function oe(e, t, n) {
  let s = e.value;
  return (!e.comparator || !e.comparator(s, t)) && (e.value = t, e.observers && e.observers.length && I(() => {
    for (let o = 0; o < e.observers.length; o += 1) {
      const l = e.observers[o], r = v && v.running;
      r && v.disposed.has(l), (r ? !l.tState : !l.state) && (l.pure ? b.push(l) : P.push(l), l.observers && re(l)), r || (l.state = T);
    }
    if (b.length > 1e6)
      throw b = [], new Error();
  }, !1)), t;
}
function k(e) {
  if (!e.fn) return;
  N(e);
  const t = B;
  we(e, e.value, t);
}
function we(e, t, n) {
  let s;
  const o = d, l = g;
  g = d = e;
  try {
    s = e.fn(t);
  } catch (r) {
    return e.pure && (e.state = T, e.owned && e.owned.forEach(N), e.owned = null), e.updatedAt = n + 1, ce(r);
  } finally {
    g = l, d = o;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? oe(e, s) : e.value = s, e.updatedAt = n);
}
function K(e, t, n, s = T, o) {
  const l = {
    fn: e,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: d,
    context: d ? d.context : null,
    pure: n
  };
  return d === null || d !== te && (d.owned ? d.owned.push(l) : d.owned = [l]), l;
}
function U(e) {
  if (e.state === 0) return;
  if (e.state === F) return _(e);
  if (e.suspense && p(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < B); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === T)
      k(e);
    else if (e.state === F) {
      const s = b;
      b = null, I(() => _(e, t[0]), !1), b = s;
    }
}
function I(e, t) {
  if (b) return e();
  let n = !1;
  t || (b = []), P ? n = !0 : P = [], B++;
  try {
    const s = e();
    return pe(n), s;
  } catch (s) {
    n || (P = null), b = null, ce(s);
  }
}
function pe(e) {
  if (b && (le(b), b = null), e) return;
  const t = P;
  P = null, t.length && I(() => ee(t), !1);
}
function le(e) {
  for (let t = 0; t < e.length; t++) U(e[t]);
}
function me(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    s.user ? e[n++] = s : U(s);
  }
  for (t = 0; t < n; t++) U(e[t]);
}
function _(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const s = e.sources[n];
    if (s.sources) {
      const o = s.state;
      o === T ? s !== t && (!s.updatedAt || s.updatedAt < B) && U(s) : o === F && _(s, t);
    }
  }
}
function re(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = F, n.pure ? b.push(n) : P.push(n), n.observers && re(n));
  }
}
function N(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), s = e.sourceSlots.pop(), o = n.observers;
      if (o && o.length) {
        const l = o.pop(), r = n.observerSlots.pop();
        s < o.length && (l.sourceSlots[r] = s, o[s] = l, n.observerSlots[s] = r);
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) N(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) N(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ae(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function ce(e, t = d) {
  throw Ae(e);
}
function H(e) {
  if (typeof e == "function" && !e.length) return H(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = H(e[n]);
      Array.isArray(s) ? t.push.apply(t, s) : t.push(s);
    }
    return t;
  }
  return e;
}
function Ee(e, t) {
  return function(s) {
    let o;
    return x(() => o = p(() => (d.context = {
      ...d.context,
      [e]: s.value
    }, se(() => s.children))), void 0), o;
  };
}
const Se = Symbol("fallback");
function Y(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function Pe(e, t, n = {}) {
  let s = [], o = [], l = [], r = 0, i = t.length > 1 ? [] : null;
  return be(() => Y(l)), () => {
    let f = e() || [], a = f.length, u, c;
    return f[he], p(() => {
      let y, E, $, M, D, m, A, S, C;
      if (a === 0)
        r !== 0 && (Y(l), l = [], s = [], o = [], r = 0, i && (i = [])), n.fallback && (s = [Se], o[0] = j((ue) => (l[0] = ue, n.fallback())), r = 1);
      else if (r === 0) {
        for (o = new Array(a), c = 0; c < a; c++)
          s[c] = f[c], o[c] = j(h);
        r = a;
      } else {
        for ($ = new Array(a), M = new Array(a), i && (D = new Array(a)), m = 0, A = Math.min(r, a); m < A && s[m] === f[m]; m++) ;
        for (A = r - 1, S = a - 1; A >= m && S >= m && s[A] === f[S]; A--, S--)
          $[S] = o[A], M[S] = l[A], i && (D[S] = i[A]);
        for (y = /* @__PURE__ */ new Map(), E = new Array(S + 1), c = S; c >= m; c--)
          C = f[c], u = y.get(C), E[c] = u === void 0 ? -1 : u, y.set(C, c);
        for (u = m; u <= A; u++)
          C = s[u], c = y.get(C), c !== void 0 && c !== -1 ? ($[c] = o[u], M[c] = l[u], i && (D[c] = i[u]), c = E[c], y.set(C, c)) : l[u]();
        for (c = m; c < a; c++)
          c in $ ? (o[c] = $[c], l[c] = M[c], i && (i[c] = D[c], i[c](c))) : o[c] = j(h);
        o = o.slice(0, r = a), s = f.slice(0);
      }
      return o;
    });
    function h(y) {
      if (l[c] = y, i) {
        const [E, $] = ne(c);
        return i[c] = $, t(f[c], E);
      }
      return t(f[c]);
    }
  };
}
function Ze(e, t) {
  return p(() => e(t || {}));
}
function R() {
  return !0;
}
const Te = {
  get(e, t, n) {
    return t === q ? n : e.get(t);
  },
  has(e, t) {
    return t === q ? !0 : e.has(t);
  },
  set: R,
  deleteProperty: R,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: R,
      deleteProperty: R
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function G(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function $e() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0) return n;
  }
}
function et(...e) {
  let t = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    t = t || !!i && q in i, e[r] = typeof i == "function" ? (t = !0, w(i)) : i;
  }
  if (de && t)
    return new Proxy({
      get(r) {
        for (let i = e.length - 1; i >= 0; i--) {
          const f = G(e[i])[r];
          if (f !== void 0) return f;
        }
      },
      has(r) {
        for (let i = e.length - 1; i >= 0; i--)
          if (r in G(e[i])) return !0;
        return !1;
      },
      keys() {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(...Object.keys(G(e[i])));
        return [...new Set(r)];
      }
    }, Te);
  const n = {}, s = /* @__PURE__ */ Object.create(null);
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    if (!i) continue;
    const f = Object.getOwnPropertyNames(i);
    for (let a = f.length - 1; a >= 0; a--) {
      const u = f[a];
      if (u === "__proto__" || u === "constructor") continue;
      const c = Object.getOwnPropertyDescriptor(i, u);
      if (!s[u])
        s[u] = c.get ? {
          enumerable: !0,
          configurable: !0,
          get: $e.bind(n[u] = [c.get.bind(i)])
        } : c.value !== void 0 ? c : void 0;
      else {
        const h = n[u];
        h && (c.get ? h.push(c.get.bind(i)) : c.value !== void 0 && h.push(() => c.value));
      }
    }
  }
  const o = {}, l = Object.keys(s);
  for (let r = l.length - 1; r >= 0; r--) {
    const i = l[r], f = s[i];
    f && f.get ? Object.defineProperty(o, i, f) : o[i] = f ? f.value : void 0;
  }
  return o;
}
const fe = (e) => `Stale read from <${e}>.`;
function tt(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return w(Pe(() => e.each, e.children, t || void 0));
}
function nt(e) {
  const t = e.keyed, n = w(() => e.when, void 0, void 0), s = t ? n : w(n, void 0, {
    equals: (o, l) => !o == !l
  });
  return w(() => {
    const o = s();
    if (o) {
      const l = e.children;
      return typeof l == "function" && l.length > 0 ? p(() => l(t ? o : () => {
        if (!p(s)) throw fe("Show");
        return n();
      })) : l;
    }
    return e.fallback;
  }, void 0, void 0);
}
function st(e) {
  const t = se(() => e.children), n = w(() => {
    const s = t(), o = Array.isArray(s) ? s : [s];
    let l = () => {
    };
    for (let r = 0; r < o.length; r++) {
      const i = r, f = o[r], a = l, u = w(() => a() ? void 0 : f.when, void 0, void 0), c = f.keyed ? u : w(u, void 0, {
        equals: (h, y) => !h == !y
      });
      l = () => a() || (c() ? [i, u, f] : void 0);
    }
    return l;
  });
  return w(() => {
    const s = n()();
    if (!s) return e.fallback;
    const [o, l, r] = s, i = r.children;
    return typeof i == "function" && i.length > 0 ? p(() => i(r.keyed ? l() : () => {
      if (p(n)()?.[0] !== o) throw fe("Match");
      return l();
    })) : i;
  }, void 0, void 0);
}
function it(e) {
  return e;
}
const xe = [
  "allowfullscreen",
  "async",
  "alpha",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "adauctionheaders",
  "browsingtopics",
  "credentialless",
  "defaultchecked",
  "defaultmuted",
  "defaultselected",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback",
  "preservespitch",
  "shadowrootclonable",
  "shadowrootcustomelementregistry",
  "shadowrootdelegatesfocus",
  "shadowrootserializable",
  "sharedstoragewritable"
], Ce = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "noValidate",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "adAuctionHeaders",
  "allowFullscreen",
  "browsingTopics",
  "defaultChecked",
  "defaultMuted",
  "defaultSelected",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "preservesPitch",
  "shadowRootClonable",
  "shadowRootCustomElementRegistry",
  "shadowRootDelegatesFocus",
  "shadowRootSerializable",
  "sharedStorageWritable",
  ...xe
]), Oe = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), ke = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Ie = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
  },
  adauctionheaders: {
    $: "adAuctionHeaders",
    IFRAME: 1
  },
  allowfullscreen: {
    $: "allowFullscreen",
    IFRAME: 1
  },
  browsingtopics: {
    $: "browsingTopics",
    IMG: 1
  },
  defaultchecked: {
    $: "defaultChecked",
    INPUT: 1
  },
  defaultmuted: {
    $: "defaultMuted",
    AUDIO: 1,
    VIDEO: 1
  },
  defaultselected: {
    $: "defaultSelected",
    OPTION: 1
  },
  disablepictureinpicture: {
    $: "disablePictureInPicture",
    VIDEO: 1
  },
  disableremoteplayback: {
    $: "disableRemotePlayback",
    AUDIO: 1,
    VIDEO: 1
  },
  preservespitch: {
    $: "preservesPitch",
    AUDIO: 1,
    VIDEO: 1
  },
  shadowrootclonable: {
    $: "shadowRootClonable",
    TEMPLATE: 1
  },
  shadowrootdelegatesfocus: {
    $: "shadowRootDelegatesFocus",
    TEMPLATE: 1
  },
  shadowrootserializable: {
    $: "shadowRootSerializable",
    TEMPLATE: 1
  },
  sharedstoragewritable: {
    $: "sharedStorageWritable",
    IFRAME: 1,
    IMG: 1
  }
});
function Ne(e, t) {
  const n = Ie[e];
  return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
const Le = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
function Me(e, t, n) {
  let s = n.length, o = t.length, l = s, r = 0, i = 0, f = t[o - 1].nextSibling, a = null;
  for (; r < o || i < l; ) {
    if (t[r] === n[i]) {
      r++, i++;
      continue;
    }
    for (; t[o - 1] === n[l - 1]; )
      o--, l--;
    if (o === r) {
      const u = l < s ? i ? n[i - 1].nextSibling : n[l - i] : f;
      for (; i < l; ) e.insertBefore(n[i++], u);
    } else if (l === i)
      for (; r < o; )
        (!a || !a.has(t[r])) && t[r].remove(), r++;
    else if (t[r] === n[l - 1] && n[i] === t[o - 1]) {
      const u = t[--o].nextSibling;
      e.insertBefore(n[i++], t[r++].nextSibling), e.insertBefore(n[--l], u), t[o] = n[l];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let c = i;
        for (; c < l; ) a.set(n[c], c++);
      }
      const u = a.get(t[r]);
      if (u != null)
        if (i < u && u < l) {
          let c = r, h = 1, y;
          for (; ++c < o && c < l && !((y = a.get(t[c])) == null || y !== u + h); )
            h++;
          if (h > u - i) {
            const E = t[r];
            for (; i < u; ) e.insertBefore(n[i++], E);
          } else e.replaceChild(n[i++], t[r++]);
        } else r++;
      else t[r++].remove();
    }
  }
}
const z = "_$DX_DELEGATE";
function ot(e, t, n, s = {}) {
  let o;
  return j((l) => {
    o = l, t === document ? e() : Be(t, e(), t.firstChild ? null : void 0, n);
  }, s.owner), () => {
    o(), t.textContent = "";
  };
}
function lt(e, t, n, s) {
  let o;
  const l = () => {
    const i = document.createElement("template");
    return i.innerHTML = e, i.content.firstChild;
  }, r = () => (o || (o = l())).cloneNode(!0);
  return r.cloneNode = r, r;
}
function De(e, t = window.document) {
  const n = t[z] || (t[z] = /* @__PURE__ */ new Set());
  for (let s = 0, o = e.length; s < o; s++) {
    const l = e[s];
    n.has(l) || (n.add(l), t.addEventListener(l, Ge));
  }
}
function X(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function Re(e, t, n) {
  n ? e.setAttribute(t, "") : e.removeAttribute(t);
}
function je(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function Ve(e, t, n, s) {
  if (s)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    e.addEventListener(t, n[0] = (l) => o.call(e, n[1], l));
  } else e.addEventListener(t, n, typeof n != "function" && n);
}
function Fe(e, t, n = {}) {
  const s = Object.keys(t || {}), o = Object.keys(n);
  let l, r;
  for (l = 0, r = o.length; l < r; l++) {
    const i = o[l];
    !i || i === "undefined" || t[i] || (Q(e, i, !1), delete n[i]);
  }
  for (l = 0, r = s.length; l < r; l++) {
    const i = s[l], f = !!t[i];
    !i || i === "undefined" || n[i] === f || !f || (Q(e, i, !0), n[i] = f);
  }
  return n;
}
function Ue(e, t, n) {
  if (!t) return n ? X(e, "style") : t;
  const s = e.style;
  if (typeof t == "string") return s.cssText = t;
  typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), t || (t = {});
  let o, l;
  for (l in n)
    t[l] == null && s.removeProperty(l), delete n[l];
  for (l in t)
    o = t[l], o !== n[l] && (s.setProperty(l, o), n[l] = o);
  return n;
}
function rt(e, t = {}, n, s) {
  const o = {};
  return s || x(() => o.children = L(e, t.children, o.children)), x(() => typeof t.ref == "function" && _e(t.ref, e)), x(() => Ke(e, t, n, !0, o, !0)), o;
}
function _e(e, t, n) {
  return p(() => e(t, n));
}
function Be(e, t, n, s) {
  if (n !== void 0 && !s && (s = []), typeof t != "function") return L(e, t, s, n);
  x((o) => L(e, t(), o, n), s);
}
function Ke(e, t, n, s, o = {}, l = !1) {
  t || (t = {});
  for (const r in o)
    if (!(r in t)) {
      if (r === "children") continue;
      o[r] = J(e, r, null, o[r], n, l, t);
    }
  for (const r in t) {
    if (r === "children")
      continue;
    const i = t[r];
    o[r] = J(e, r, i, o[r], n, l, t);
  }
}
function ve(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function Q(e, t, n) {
  const s = t.trim().split(/\s+/);
  for (let o = 0, l = s.length; o < l; o++) e.classList.toggle(s[o], n);
}
function J(e, t, n, s, o, l, r) {
  let i, f, a, u, c;
  if (t === "style") return Ue(e, n, s);
  if (t === "classList") return Fe(e, n, s);
  if (n === s) return s;
  if (t === "ref")
    l || n(e);
  else if (t.slice(0, 3) === "on:") {
    const h = t.slice(3);
    s && e.removeEventListener(h, s, typeof s != "function" && s), n && e.addEventListener(h, n, typeof n != "function" && n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const h = t.slice(10);
    s && e.removeEventListener(h, s, !0), n && e.addEventListener(h, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const h = t.slice(2).toLowerCase(), y = Le.has(h);
    if (!y && s) {
      const E = Array.isArray(s) ? s[0] : s;
      e.removeEventListener(h, E);
    }
    (y || n) && (Ve(e, h, n, y), y && De([h]));
  } else t.slice(0, 5) === "attr:" ? X(e, t.slice(5), n) : t.slice(0, 5) === "bool:" ? Re(e, t.slice(5), n) : (c = t.slice(0, 5) === "prop:") || (a = Oe.has(t)) || (u = Ne(t, e.tagName)) || (f = Ce.has(t)) || (i = e.nodeName.includes("-") || "is" in r) ? (c && (t = t.slice(5), f = !0), t === "class" || t === "className" ? je(e, n) : i && !f && !a ? e[ve(t)] = n : e[u || t] = n) : X(e, ke[t] || t, n);
  return n;
}
function Ge(e) {
  let t = e.target;
  const n = `$$${e.type}`, s = e.target, o = e.currentTarget, l = (f) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: f
  }), r = () => {
    const f = t[n];
    if (f && !t.disabled) {
      const a = t[`${n}Data`];
      if (a !== void 0 ? f.call(t, a, e) : f.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && l(t.host), !0;
  }, i = () => {
    for (; r() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), e.composedPath) {
    const f = e.composedPath();
    l(f[0]);
    for (let a = 0; a < f.length - 2 && (t = f[a], !!r()); a++) {
      if (t._$host) {
        t = t._$host, i();
        break;
      }
      if (t.parentNode === o)
        break;
    }
  } else i();
  l(s);
}
function L(e, t, n, s, o) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const l = typeof t, r = s !== void 0;
  if (e = r && n[0] && n[0].parentNode || e, l === "string" || l === "number") {
    if (l === "number" && (t = t.toString(), t === n))
      return n;
    if (r) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = O(e, n, s, i);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || l === "boolean")
    n = O(e, n, s);
  else {
    if (l === "function")
      return x(() => {
        let i = t();
        for (; typeof i == "function"; ) i = i();
        n = L(e, i, n, s);
      }), () => n;
    if (Array.isArray(t)) {
      const i = [], f = n && Array.isArray(n);
      if (W(i, t, n, o))
        return x(() => n = L(e, i, n, s, !0)), () => n;
      if (i.length === 0) {
        if (n = O(e, n, s), r) return n;
      } else f ? n.length === 0 ? Z(e, i, s) : Me(e, n, i) : (n && O(e), Z(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (r) return n = O(e, n, s, t);
        O(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function W(e, t, n, s) {
  let o = !1;
  for (let l = 0, r = t.length; l < r; l++) {
    let i = t[l], f = n && n[e.length], a;
    if (!(i == null || i === !0 || i === !1)) if ((a = typeof i) == "object" && i.nodeType)
      e.push(i);
    else if (Array.isArray(i))
      o = W(e, i, f) || o;
    else if (a === "function")
      if (s) {
        for (; typeof i == "function"; ) i = i();
        o = W(e, Array.isArray(i) ? i : [i], Array.isArray(f) ? f : [f]) || o;
      } else
        e.push(i), o = !0;
    else {
      const u = String(i);
      f && f.nodeType === 3 && f.data === u ? e.push(f) : e.push(document.createTextNode(u));
    }
  }
  return o;
}
function Z(e, t, n = null) {
  for (let s = 0, o = t.length; s < o; s++) e.insertBefore(t[s], n);
}
function O(e, t, n, s) {
  if (n === void 0) return e.textContent = "";
  const o = s || document.createTextNode("");
  if (t.length) {
    let l = !1;
    for (let r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (o !== i) {
        const f = i.parentNode === e;
        !l && !r ? f ? e.replaceChild(o, i) : e.insertBefore(o, n) : f && i.remove();
      } else l = !0;
    }
  } else e.insertBefore(o, n);
  return [o];
}
export {
  q as $,
  tt as F,
  it as M,
  nt as S,
  je as a,
  x as b,
  Ze as c,
  Ue as d,
  De as e,
  ne as f,
  rt as g,
  Qe as h,
  Be as i,
  w as j,
  st as k,
  He as l,
  et as m,
  he as n,
  We as o,
  Xe as p,
  qe as q,
  ot as r,
  X as s,
  lt as t,
  _e as u,
  be as v,
  Fe as w,
  Ve as x,
  Je as y,
  se as z
};
