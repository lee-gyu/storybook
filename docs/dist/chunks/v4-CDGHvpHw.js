const e = [];
for (let n = 0; n < 256; ++n)
  e.push((n + 256).toString(16).slice(1));
function c(n, t = 0) {
  return (e[n[t + 0]] + e[n[t + 1]] + e[n[t + 2]] + e[n[t + 3]] + "-" + e[n[t + 4]] + e[n[t + 5]] + "-" + e[n[t + 6]] + e[n[t + 7]] + "-" + e[n[t + 8]] + e[n[t + 9]] + "-" + e[n[t + 10]] + e[n[t + 11]] + e[n[t + 12]] + e[n[t + 13]] + e[n[t + 14]] + e[n[t + 15]]).toLowerCase();
}
let o;
const i = new Uint8Array(16);
function r() {
  if (!o) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    o = crypto.getRandomValues.bind(crypto);
  }
  return o(i);
}
const y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), u = { randomUUID: y };
function p(n, t, m) {
  if (u.randomUUID && !t && !n)
    return u.randomUUID();
  n = n || {};
  const d = n.random ?? n.rng?.() ?? r();
  if (d.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return d[6] = d[6] & 15 | 64, d[8] = d[8] & 63 | 128, c(d);
}
export {
  p as v
};
//# sourceMappingURL=v4-CDGHvpHw.js.map
