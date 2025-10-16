function u(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || typeof e != "object" || typeof t != "object")
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (const n of r)
    if (!o.includes(n) || !u(e[n], t[n]))
      return !1;
  return !0;
}
function f(e) {
  let t = -1;
  return () => {
    t === -1 && (t = requestAnimationFrame(() => {
      try {
        e();
      } finally {
        t = -1;
      }
    }));
  };
}
const s = /* @__PURE__ */ new WeakMap();
function i(e, t) {
  s.set(e, t);
}
function c(e) {
  return s.get(e);
}
export {
  f as c,
  u as i,
  c as r,
  i as w
};
