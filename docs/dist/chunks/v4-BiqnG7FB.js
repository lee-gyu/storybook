const u = [];
for (let n = 0; n < 256; ++n)
  u.push((n + 256).toString(16).slice(1));
function c(n, t = 0) {
  return (u[n[t + 0]] + u[n[t + 1]] + u[n[t + 2]] + u[n[t + 3]] + "-" + u[n[t + 4]] + u[n[t + 5]] + "-" + u[n[t + 6]] + u[n[t + 7]] + "-" + u[n[t + 8]] + u[n[t + 9]] + "-" + u[n[t + 10]] + u[n[t + 11]] + u[n[t + 12]] + u[n[t + 13]] + u[n[t + 14]] + u[n[t + 15]]).toLowerCase();
}
let e;
const i = new Uint8Array(16);
function p() {
  if (!e) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    e = crypto.getRandomValues.bind(crypto);
  }
  return e(i);
}
const y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), o = { randomUUID: y };
function r(n, t, m) {
  if (o.randomUUID && !t && !n)
    return o.randomUUID();
  n = n || {};
  const d = n.random || (n.rng || p)();
  return d[6] = d[6] & 15 | 64, d[8] = d[8] & 63 | 128, c(d);
}
export {
  c as u,
  r as v
};
//# sourceMappingURL=v4-BiqnG7FB.js.map
