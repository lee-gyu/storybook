function h() {
  const t = /* @__PURE__ */ new Map();
  return {
    has: a,
    getList: s,
    getListOrNull: r,
    add: u,
    remove: f,
    clear: d,
    clearAll: E,
    forEach: g,
    forEachAsync: k
  };
  function a(e) {
    return t.has(e);
  }
  function s(e) {
    return t.get(e);
  }
  function r(e) {
    const c = t.get(e);
    return c || null;
  }
  function f(e, c) {
    const i = r(e);
    if (!i)
      return;
    const l = i.indexOf(c);
    l > -1 && i.splice(l, 1);
  }
  function u(e, c) {
    a(e) ? s(e).push(c) : t.set(e, [c]);
  }
  function d(e) {
    t.set(e, []);
  }
  function E() {
    t.clear();
  }
  function g(e, c) {
    const i = r(e);
    if (!i)
      return !0;
    for (const l of i)
      if (c(l) === !1)
        return !1;
    return !0;
  }
  async function k(e, c) {
    const i = r(e);
    if (!i)
      return !0;
    try {
      for (const l of i) {
        let m = c(l);
        if (m instanceof Promise && (m = await m), m === !1)
          return !1;
      }
    } catch (l) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(l), l;
    }
    return !0;
  }
}
async function q(t) {
  for (const { label: a, task: s } of t)
    try {
      if (await s() === !1)
        return !1;
    } catch (r) {
      throw console.error(`occurred an error when ${a}`), r;
    }
  return !0;
}
function z(t) {
  for (const { label: a, task: s } of t)
    try {
      if (s() === !1)
        return !1;
    } catch (r) {
      throw console.error(`occurred an error when ${a}`), r;
    }
  return !0;
}
function C() {
  const t = /* @__PURE__ */ new Map(), a = h(), s = h(), r = h(), f = h(), u = h(), d = h();
  return {
    emit: e,
    emitSync: E,
    pauseEmit: g,
    resumeEmit: k,
    addBeginHook: b,
    addHook: i,
    addEndHook: w,
    addSyncBeginHook: m,
    addSyncHook: l,
    addSyncEndHook: M,
    removeHook: S,
    removeBeginHook: y,
    removeEndHook: L,
    removeSyncHook: B,
    removeSyncBeginHook: $,
    removeSyncEndHook: _,
    setHook: O,
    setBeginHook: x,
    setEndHook: N,
    clearHooks: c,
    clearBeginHooks: v,
    clearEndHooks: A,
    clearSyncHooks: P,
    clearSyncBeginHooks: I,
    clearSyncEndHooks: F,
    destroy: j
  };
  function E(n, o) {
    if (t.has(n))
      return !0;
    const H = (p) => p(...o);
    return z([
      {
        label: `sync_begin_${n}`,
        task: () => u.forEach(n, H)
      },
      {
        label: `sync_${n}`,
        task: () => f.forEach(n, H)
      },
      {
        label: `sync_end_${n}`,
        task: () => d.forEach(n, H)
      }
    ]);
  }
  function g(n) {
    const o = t.get(n);
    t.set(n, o ? o + 1 : 1);
  }
  function k(n) {
    const o = t.get(n);
    o && o > 1 ? t.set(n, o - 1) : o === 1 && t.delete(n);
  }
  function e(n, o) {
    if (t.has(n))
      return Promise.resolve(!0);
    const H = (p) => p(...o);
    return q([
      {
        label: `begin_${n}`,
        task: () => a.forEachAsync(n, H)
      },
      {
        label: `${n}`,
        task: () => r.forEachAsync(n, H)
      },
      {
        label: `end_${n}`,
        task: () => s.forEachAsync(n, H)
      }
    ]);
  }
  function c(n) {
    r.clear(n);
  }
  function i(n, o) {
    r.add(n, o);
  }
  function l(n, o) {
    f.add(n, o);
  }
  function m(n, o) {
    u.add(n, o);
  }
  function M(n, o) {
    d.add(n, o);
  }
  function S(n, o) {
    r.remove(n, o);
  }
  function y(n, o) {
    a.remove(n, o);
  }
  function L(n, o) {
    s.remove(n, o);
  }
  function B(n, o) {
    f.remove(n, o);
  }
  function $(n, o) {
    u.remove(n, o);
  }
  function _(n, o) {
    d.remove(n, o);
  }
  function O(n, o) {
    c(n), i(n, o);
  }
  function v(n) {
    a.clear(n);
  }
  function b(n, o) {
    a.add(n, o);
  }
  function x(n, o) {
    v(n), b(n, o);
  }
  function A(n) {
    s.clear(n);
  }
  function P(n) {
    f.clear(n);
  }
  function I(n) {
    u.clear(n);
  }
  function F(n) {
    d.clear(n);
  }
  function w(n, o) {
    s.add(n, o);
  }
  function N(n, o) {
    A(n), w(n, o);
  }
  function j() {
    a.clearAll(), s.clearAll(), r.clearAll(), f.clearAll(), u.clearAll(), d.clearAll();
  }
}
export {
  C as c
};
//# sourceMappingURL=hook-flow-h5XBPdBp.js.map
