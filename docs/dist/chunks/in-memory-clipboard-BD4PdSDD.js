function f(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || typeof e != "object" || typeof t != "object")
    return !1;
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length)
    return !1;
  for (const n of r)
    if (!s.includes(n) || !f(e[n], t[n]))
      return !1;
  return !0;
}
function c(e, t = new Error()) {
  if (!e)
    throw typeof t == "string" ? new Error(t) : t;
}
function i(e) {
  return e instanceof HTMLElement;
}
const o = /* @__PURE__ */ new WeakMap();
function u(e, t) {
  o.set(e, t);
}
function l(e) {
  return o.get(e);
}
export {
  c as a,
  i as c,
  f as i,
  l as r,
  u as w
};
//# sourceMappingURL=in-memory-clipboard-BD4PdSDD.js.map
