var u = [];
for (var o = 0; o < 256; ++o)
  u.push((o + 256).toString(16).slice(1));
function c(n, d = 0) {
  return (u[n[d + 0]] + u[n[d + 1]] + u[n[d + 2]] + u[n[d + 3]] + "-" + u[n[d + 4]] + u[n[d + 5]] + "-" + u[n[d + 6]] + u[n[d + 7]] + "-" + u[n[d + 8]] + u[n[d + 9]] + "-" + u[n[d + 10]] + u[n[d + 11]] + u[n[d + 12]] + u[n[d + 13]] + u[n[d + 14]] + u[n[d + 15]]).toLowerCase();
}
var e, p = new Uint8Array(16);
function y() {
  if (!e && (e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return e(p);
}
var i = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const r = {
  randomUUID: i
};
function m(n, d, a) {
  if (r.randomUUID && !d && !n)
    return r.randomUUID();
  n = n || {};
  var t = n.random || (n.rng || y)();
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, c(t);
}
export {
  m as v
};
//# sourceMappingURL=v4-Cgt9uYzN.js.map
