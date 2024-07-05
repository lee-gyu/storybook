let e;
const o = new Uint8Array(16);
function i() {
  if (!e && (e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return e(o);
}
const d = [];
for (let n = 0; n < 256; ++n)
  d.push((n + 256).toString(16).slice(1));
function p(n, t = 0) {
  return d[n[t + 0]] + d[n[t + 1]] + d[n[t + 2]] + d[n[t + 3]] + "-" + d[n[t + 4]] + d[n[t + 5]] + "-" + d[n[t + 6]] + d[n[t + 7]] + "-" + d[n[t + 8]] + d[n[t + 9]] + "-" + d[n[t + 10]] + d[n[t + 11]] + d[n[t + 12]] + d[n[t + 13]] + d[n[t + 14]] + d[n[t + 15]];
}
const y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), c = {
  randomUUID: y
};
function U(n, t, m) {
  if (c.randomUUID && !t && !n)
    return c.randomUUID();
  n = n || {};
  const u = n.random || (n.rng || i)();
  return u[6] = u[6] & 15 | 64, u[8] = u[8] & 63 | 128, p(u);
}
export {
  U as v
};
//# sourceMappingURL=v4-ANoOI1Qw.js.map
