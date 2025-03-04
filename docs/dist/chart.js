import "./chunks/_init-D7pcIR7n.js";
import { I as cn } from "./chunks/index-CeFD99q1.js";
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function oe(i) {
  return i + 0.5 | 0;
}
const ht = (i, t, e) => Math.max(Math.min(i, e), t);
function Vt(i) {
  return ht(oe(i * 2.55), 0, 255);
}
function dt(i) {
  return ht(oe(i * 255), 0, 255);
}
function at(i) {
  return ht(oe(i / 2.55) / 100, 0, 1);
}
function gi(i) {
  return ht(oe(i * 100), 0, 100);
}
const G = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, je = [..."0123456789ABCDEF"], hn = (i) => je[i & 15], dn = (i) => je[(i & 240) >> 4] + je[i & 15], ae = (i) => (i & 240) >> 4 === (i & 15), fn = (i) => ae(i.r) && ae(i.g) && ae(i.b) && ae(i.a);
function un(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & G[i[1]] * 17,
    g: 255 & G[i[2]] * 17,
    b: 255 & G[i[3]] * 17,
    a: t === 5 ? G[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: G[i[1]] << 4 | G[i[2]],
    g: G[i[3]] << 4 | G[i[4]],
    b: G[i[5]] << 4 | G[i[6]],
    a: t === 9 ? G[i[7]] << 4 | G[i[8]] : 255
  })), e;
}
const gn = (i, t) => i < 255 ? t(i) : "";
function pn(i) {
  var t = fn(i) ? hn : dn;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + gn(i.a, t) : void 0;
}
const mn = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ks(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function bn(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function _n(i, t, e) {
  const s = ks(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function xn(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Ge(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = xn(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Ze(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(dt);
}
function Je(i, t, e) {
  return Ze(ks, i, t, e);
}
function yn(i, t, e) {
  return Ze(_n, i, t, e);
}
function vn(i, t, e) {
  return Ze(bn, i, t, e);
}
function Cs(i) {
  return (i % 360 + 360) % 360;
}
function Mn(i) {
  const t = mn.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Vt(+t[5]) : dt(+t[5]));
  const n = Cs(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = yn(n, o, r) : t[1] === "hsv" ? s = vn(n, o, r) : s = Je(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Sn(i, t) {
  var e = Ge(i);
  e[0] = Cs(e[0] + t), e = Je(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function wn(i) {
  if (!i)
    return;
  const t = Ge(i), e = t[0], s = gi(t[1]), n = gi(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${at(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const pi = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, mi = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function kn() {
  const i = {}, t = Object.keys(mi), e = Object.keys(pi);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, pi[o]);
    o = parseInt(mi[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let le;
function Cn(i) {
  le || (le = kn(), le.transparent = [0, 0, 0, 0]);
  const t = le[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const On = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Dn(i) {
  const t = On.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Vt(r) : ht(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Vt(s) : ht(s, 0, 255)), n = 255 & (t[4] ? Vt(n) : ht(n, 0, 255)), o = 255 & (t[6] ? Vt(o) : ht(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Pn(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${at(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const Le = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Ot = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function An(i, t, e) {
  const s = Ot(at(i.r)), n = Ot(at(i.g)), o = Ot(at(i.b));
  return {
    r: dt(Le(s + e * (Ot(at(t.r)) - s))),
    g: dt(Le(n + e * (Ot(at(t.g)) - n))),
    b: dt(Le(o + e * (Ot(at(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ce(i, t, e) {
  if (i) {
    let s = Ge(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Je(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function Os(i, t) {
  return i && Object.assign(t || {}, i);
}
function bi(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = dt(i[3]))) : (t = Os(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = dt(t.a)), t;
}
function Tn(i) {
  return i.charAt(0) === "r" ? Dn(i) : Mn(i);
}
class Zt {
  constructor(t) {
    if (t instanceof Zt)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = bi(t) : e === "string" && (s = un(t) || Cn(t) || Tn(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Os(this._rgb);
    return t && (t.a = at(t.a)), t;
  }
  set rgb(t) {
    this._rgb = bi(t);
  }
  rgbString() {
    return this._valid ? Pn(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? pn(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? wn(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = An(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Zt(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = dt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = oe(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return ce(this._rgb, 2, t), this;
  }
  darken(t) {
    return ce(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ce(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ce(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Sn(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function nt() {
}
const Rn = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function L(i) {
  return i == null;
}
function N(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function A(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function J(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function et(i, t) {
  return J(i) ? i : t;
}
function D(i, t) {
  return typeof i > "u" ? t : i;
}
const Ln = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, Ds = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function E(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function T(i, t, e, s) {
  let n, o, r;
  if (N(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (A(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Se(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function we(i) {
  if (N(i))
    return i.map(we);
  if (A(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = we(i[e[n]]);
    return t;
  }
  return i;
}
function Ps(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function En(i, t, e, s) {
  if (!Ps(i))
    return;
  const n = t[i], o = e[i];
  A(n) && A(o) ? Jt(n, o, s) : t[i] = we(o);
}
function Jt(i, t, e) {
  const s = N(t) ? t : [
    t
  ], n = s.length;
  if (!A(i))
    return i;
  e = e || {};
  const o = e.merger || En;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !A(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Xt(i, t) {
  return Jt(i, t, {
    merger: In
  });
}
function In(i, t, e) {
  if (!Ps(i))
    return;
  const s = t[i], n = e[i];
  A(s) && A(n) ? Xt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = we(n));
}
const _i = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Fn(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function zn(i) {
  const t = Fn(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function Qt(i, t) {
  return (_i[t] || (_i[t] = zn(t)))(i);
}
function Qe(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const ke = (i) => typeof i < "u", ft = (i) => typeof i == "function", xi = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Bn(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const z = Math.PI, F = 2 * z, Wn = F + z, Ce = Number.POSITIVE_INFINITY, Hn = z / 180, H = z / 2, mt = z / 4, yi = z * 2 / 3, As = Math.log10, Tt = Math.sign;
function Ut(i, t, e) {
  return Math.abs(i - t) < e;
}
function vi(i) {
  const t = Math.round(i);
  i = Ut(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(As(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Nn(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function jn(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function te(i) {
  return !jn(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Vn(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function $n(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function lt(i) {
  return i * (z / 180);
}
function Yn(i) {
  return i * (180 / z);
}
function Mi(i) {
  if (!J(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Ts(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * z && (o += F), {
    angle: o,
    distance: n
  };
}
function Ve(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Xn(i, t) {
  return (i - t + Wn) % F - z;
}
function ct(i) {
  return (i % F + F) % F;
}
function ee(i, t, e, s) {
  const n = ct(i), o = ct(t), r = ct(e), a = ct(o - n), l = ct(r - n), c = ct(n - o), h = ct(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function X(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Un(i) {
  return X(i, -32768, 32767);
}
function Pt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function ti(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const vt = (i, t, e, s) => ti(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Kn = (i, t, e) => ti(i, e, (s) => i[s][t] >= e);
function qn(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const Rs = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Gn(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Rs.forEach((e) => {
    const s = "_onData" + Qe(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function Si(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (Rs.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function Zn(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Ls = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function Es(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Ls.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Jn(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const ei = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", $ = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Qn = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function to(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: f, minDefined: u, maxDefined: p } = r.getUserBounds();
    if (u) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        vt(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : vt(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((m) => !L(m[a.axis]));
        n -= Math.max(0, g);
      }
      n = X(n, 0, s - 1);
    }
    if (p) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        vt(l, r.axis, f, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : vt(t, h, r.getPixelForValue(f), !0).hi + 1
      );
      if (c) {
        const m = l.slice(g - 1).findIndex((b) => !L(b[a.axis]));
        g += Math.max(0, m);
      }
      o = X(g, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function eo(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const he = (i) => i === 0 || i === 1, wi = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * F / e)), ki = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * F / e) + 1, Kt = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * H) + 1,
  easeOutSine: (i) => Math.sin(i * H),
  easeInOutSine: (i) => -0.5 * (Math.cos(z * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => he(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => he(i) ? i : wi(i, 0.075, 0.3),
  easeOutElastic: (i) => he(i) ? i : ki(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return he(i) ? i : i < 0.5 ? 0.5 * wi(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * ki(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - Kt.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Kt.easeInBounce(i * 2) * 0.5 : Kt.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function ii(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Ci(i) {
  return ii(i) ? i : new Zt(i);
}
function Ee(i) {
  return ii(i) ? i : new Zt(i).saturate(0.5).darken(0.1).hexString();
}
const io = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], so = [
  "color",
  "borderColor",
  "backgroundColor"
];
function no(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: so
    },
    numbers: {
      type: "number",
      properties: io
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function oo(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Oi = /* @__PURE__ */ new Map();
function ro(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Oi.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Oi.set(e, s)), s;
}
function si(i, t, e) {
  return ro(t, e).format(i);
}
const ao = {
  values(i) {
    return N(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = lo(i, e);
    }
    const r = As(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), si(i, s, l);
  }
};
function lo(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Is = {
  formatters: ao
};
function co(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Is.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const St = /* @__PURE__ */ Object.create(null), $e = /* @__PURE__ */ Object.create(null);
function qt(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function Ie(i, t, e) {
  return typeof t == "string" ? Jt(qt(i, t), e) : Jt(qt(i, ""), t);
}
class ho {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => Ee(n.backgroundColor), this.hoverBorderColor = (s, n) => Ee(n.borderColor), this.hoverColor = (s, n) => Ee(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return Ie(this, t, e);
  }
  get(t) {
    return qt(this, t);
  }
  describe(t, e) {
    return Ie($e, t, e);
  }
  override(t, e) {
    return Ie(St, t, e);
  }
  route(t, e, s, n) {
    const o = qt(this, t), r = qt(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return A(l) ? Object.assign({}, c, l) : D(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var W = /* @__PURE__ */ new ho({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  no,
  oo,
  co
]);
function fo(i) {
  return !i || L(i.size) || L(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Di(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function bt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Pi(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Ye(i, t, e, s) {
  Fs(i, t, e, s, null);
}
function Fs(i, t, e, s, n) {
  let o, r, a, l, c, h, d, f;
  const u = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * Hn;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (i.beginPath(), u) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, g, 0, 0, F) : i.arc(e, s, g, 0, F), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : g, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * g), m += yi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g), m += yi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g), i.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + mt) * l, d = Math.cos(m + mt) * (n ? n / 2 - c : l), a = Math.sin(m + mt) * l, f = Math.sin(m + mt) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, m - z, m - H), i.arc(e + f, s - r, c, m - H, m), i.arc(e + d, s + a, c, m, m + H), i.arc(e - f, s + r, c, m + H, m + z), i.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        m += mt;
      /* falls through */
      case "rectRot":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, f = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + f, s - r), i.lineTo(e + d, s + a), i.lineTo(e - f, s + r), i.closePath();
        break;
      case "crossRot":
        m += mt;
      /* falls through */
      case "cross":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, f = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "star":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, f = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r), m += mt, d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, f = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(m) * g, a = Math.sin(m) * g, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : g), s + Math.sin(m) * g);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function ie(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ni(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function oi(i) {
  i.restore();
}
function uo(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function go(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function po(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), L(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function mo(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function bo(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function se(i, t, e, s, n, o = {}) {
  const r = N(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, po(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && bo(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), L(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), mo(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Xe(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * z, z, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, z, H, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, H, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -H, !0), i.lineTo(e + r.topLeft, s);
}
const _o = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, xo = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function yo(i, t) {
  const e = ("" + i).match(_o);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const vo = (i) => +i || 0;
function ri(i, t) {
  const e = {}, s = A(t), n = s ? Object.keys(t) : t, o = A(i) ? s ? (r) => D(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = vo(o(r));
  return e;
}
function Mo(i) {
  return ri(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Gt(i) {
  return ri(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Q(i) {
  const t = Mo(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Y(i, t) {
  i = i || {}, t = t || W.font;
  let e = D(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D(i.style, t.style);
  s && !("" + s).match(xo) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: D(i.family, t.family),
    lineHeight: yo(D(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D(i.weight, t.weight),
    string: ""
  };
  return n.string = fo(n), n;
}
function de(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function So(i, t, e) {
  const { min: s, max: n } = i, o = Ds(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function wt(i, t) {
  return Object.assign(Object.create(i), t);
}
function ai(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Hs("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => ai([
      a,
      ...i
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return Bs(a, l, () => To(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return Ti(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Ti(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function Rt(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: zs(i, s),
    setContext: (o) => Rt(i, o, e, s),
    override: (o) => Rt(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return Bs(o, r, () => ko(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function zs(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: ft(e) ? e : () => e,
    isIndexable: ft(s) ? s : () => s
  };
}
const wo = (i, t) => i ? i + Qe(t) : t, li = (i, t) => A(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Bs(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function ko(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return ft(a) && r.isScriptable(t) && (a = Co(t, a, i, e)), N(a) && a.length && (a = Oo(t, a, i, r.isIndexable)), li(t, a) && (a = Rt(a, n, o && o[t], r)), a;
}
function Co(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), li(i, l) && (l = ci(n._scopes, n, i, l)), l;
}
function Oo(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (A(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = ci(c, n, i, h);
      t.push(Rt(d, o, r && r[i], a));
    }
  }
  return t;
}
function Ws(i, t, e) {
  return ft(i) ? i(t, e) : i;
}
const Do = (i, t) => i === !0 ? t : typeof i == "string" ? Qt(t, i) : void 0;
function Po(i, t, e, s, n) {
  for (const o of t) {
    const r = Do(e, o);
    if (r) {
      i.add(r);
      const a = Ws(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function ci(i, t, e, s) {
  const n = t._rootScopes, o = Ws(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Ai(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Ai(a, r, o, l, s), l === null) ? !1 : ai(Array.from(a), [
    ""
  ], n, o, () => Ao(t, e, s));
}
function Ai(i, t, e, s, n) {
  for (; e; )
    e = Po(i, t, e, s, n);
  return e;
}
function Ao(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return N(n) && A(e) ? e : n || {};
}
function To(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Hs(wo(o, i), e), typeof n < "u")
      return li(i, n) ? ci(e, s, i, n) : n;
}
function Hs(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Ti(i) {
  let t = i._keys;
  return t || (t = i._keys = Ro(i._scopes)), t;
}
function Ro(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
const Lo = Number.EPSILON || 1e-14, Lt = (i, t) => t < i.length && !i[t].skip && i[t], Ns = (i) => i === "x" ? "y" : "x";
function Eo(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Ve(o, n), l = Ve(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, f = s * h;
  return {
    previous: {
      x: o.x - d * (r.x - n.x),
      y: o.y - d * (r.y - n.y)
    },
    next: {
      x: o.x + f * (r.x - n.x),
      y: o.y + f * (r.y - n.y)
    }
  };
}
function Io(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Lt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Lt(i, h + 1), !(!l || !c)) {
      if (Ut(t[h], 0, Lo)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function Fo(i, t, e = "x") {
  const s = Ns(e), n = i.length;
  let o, r, a, l = Lt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Lt(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function zo(i, t = "x") {
  const e = Ns(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Lt(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Lt(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? Tt(n[r - 1]) !== Tt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  Io(i, n, o), Fo(i, o, t);
}
function fe(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Bo(i, t) {
  let e, s, n, o, r, a = ie(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && ie(i[e + 1], t), o && (n = i[e], r && (n.cp1x = fe(n.cp1x, t.left, t.right), n.cp1y = fe(n.cp1y, t.top, t.bottom)), a && (n.cp2x = fe(n.cp2x, t.left, t.right), n.cp2y = fe(n.cp2y, t.top, t.bottom)));
}
function Wo(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    zo(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = Eo(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Bo(i, e);
}
function hi() {
  return typeof window < "u" && typeof document < "u";
}
function di(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Oe(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ae = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Ho(i, t) {
  return Ae(i).getPropertyValue(t);
}
const No = [
  "top",
  "right",
  "bottom",
  "left"
];
function Mt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = No[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const jo = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Vo(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (jo(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function xt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Ae(e), o = n.boxSizing === "border-box", r = Mt(n, "padding"), a = Mt(n, "border", "width"), { x: l, y: c, box: h } = Vo(i, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
  let { width: u, height: p } = t;
  return o && (u -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - d) / u * e.width / s),
    y: Math.round((c - f) / p * e.height / s)
  };
}
function $o(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && di(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Ae(o), l = Mt(a, "border", "width"), c = Mt(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Oe(a.maxWidth, o, "clientWidth"), n = Oe(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ce,
    maxHeight: n || Ce
  };
}
const ue = (i) => Math.round(i * 10) / 10;
function Yo(i, t, e, s) {
  const n = Ae(i), o = Mt(n, "margin"), r = Oe(n.maxWidth, i, "clientWidth") || Ce, a = Oe(n.maxHeight, i, "clientHeight") || Ce, l = $o(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const f = Mt(n, "border", "width"), u = Mt(n, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = ue(Math.min(c, r, l.maxWidth)), h = ue(Math.min(h, a, l.maxHeight)), c && !h && (h = ue(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = ue(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function Ri(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Xo = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    hi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function Li(i, t) {
  const e = Ho(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function yt(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Uo(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Ko(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = yt(i, n, e), a = yt(n, o, e), l = yt(o, t, e), c = yt(r, a, e), h = yt(a, l, e);
  return yt(c, h, e);
}
const qo = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, Go = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function At(i, t, e) {
  return i ? qo(t, e) : Go();
}
function js(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Vs(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function $s(i) {
  return i === "angle" ? {
    between: ee,
    compare: Xn,
    normalize: ct
  } : {
    between: Pt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Ei({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Zo(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = $s(s), l = t.length;
  let { start: c, end: h, loop: d } = i, f, u;
  if (d) {
    for (c += l, h += l, f = 0, u = l; f < u && r(a(t[c % l][s]), n, o); ++f)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: i.style
  };
}
function Jo(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = $s(s), { start: h, end: d, loop: f, style: u } = Zo(i, t, e), p = [];
  let g = !1, m = null, b, x, y;
  const v = () => l(n, y, b) && a(n, y) !== 0, _ = () => a(o, b) === 0 || l(o, y, b), S = () => g || v(), w = () => !g || _();
  for (let M = h, k = h; M <= d; ++M)
    x = t[M % r], !x.skip && (b = c(x[s]), b !== y && (g = l(b, n, o), m === null && S() && (m = a(b, n) === 0 ? M : k), m !== null && w() && (p.push(Ei({
      start: m,
      end: M,
      loop: f,
      count: r,
      style: u
    })), m = null), k = M, y = b));
  return m !== null && p.push(Ei({
    start: m,
    end: d,
    loop: f,
    count: r,
    style: u
  })), p;
}
function Qo(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Jo(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function tr(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function er(i, t, e, s) {
  const n = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, o.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % n,
    end: r % n,
    loop: s
  }), o;
}
function ir(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = tr(e, n, o, s);
  if (s === !0)
    return Ii(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Ii(i, er(e, r, l, c), e, t);
}
function Ii(i, t, e, s) {
  return !s || !s.setContext || !e ? t : sr(i, t, e, s);
}
function sr(i, t, e, s) {
  const n = i._chart.getContext(), o = Fi(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, f = d;
  function u(p, g, m, b) {
    const x = a ? -1 : 1;
    if (p !== g) {
      for (p += l; e[p % l].skip; )
        p -= x;
      for (; e[g % l].skip; )
        g += x;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: b
      }), h = b, d = g % l);
    }
  }
  for (const p of t) {
    d = a ? d : p.start;
    let g = e[d % l], m;
    for (f = d + 1; f <= p.end; f++) {
      const b = e[f % l];
      m = Fi(s.setContext(wt(n, {
        type: "segment",
        p0: g,
        p1: b,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: r
      }))), nr(m, h) && u(d, f - 1, p.loop, h), g = b, h = m;
    }
    d < f - 1 && u(d, f - 1, p.loop, h);
  }
  return c;
}
function Fi(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function nr(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return ii(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class or {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Ls.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ot = /* @__PURE__ */ new or();
const zi = "transparent", rr = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Ci(i || zi), n = s.valid && Ci(t || zi);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class ar {
  constructor(t, e, s, n) {
    const o = e[s];
    n = de([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = de([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || rr[t.type || typeof r], this._easing = Kt[t.easing] || Kt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = de([
        t.to,
        e,
        n,
        t.from
      ]), this._from = de([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class Ys {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!A(t))
      return;
    const e = Object.keys(W.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!A(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (N(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = cr(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && lr(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const f = s.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, h, a);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new ar(f, t, c, h), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return ot.add(this._chart, s), !0;
  }
}
function lr(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function cr(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Bi(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function hr(i, t, e) {
  if (e === !1)
    return !1;
  const s = Bi(i, e), n = Bi(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function dr(i) {
  let t, e, s, n;
  return A(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Xs(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Wi(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], J(c) && (o || t === 0 || Tt(t) === Tt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function fr(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function Fe(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function ur(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function gr(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function pr(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Hi(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Ni(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = ur(o, r, s), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const p = t[u], { [l]: g, [c]: m } = p, b = p._stacks || (p._stacks = {});
    f = b[c] = pr(n, h, g), f[a] = m, f._top = Hi(f, r, !0, s.type), f._bottom = Hi(f, r, !1, s.type);
    const x = f._visualValues || (f._visualValues = {});
    x[a] = m;
  }
}
function ze(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function mr(i, t) {
  return wt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function br(i, t, e) {
  return wt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Bt(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e];
    }
  }
}
const Be = (i) => i === "reset" || i === "none", ji = (i, t) => t ? i : Object.assign({}, i), _r = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Xs(e, !0),
  values: null
};
class fi {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Fe(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Bt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, f, u, p) => d === "x" ? f : d === "r" ? p : u, o = e.xAxisID = D(s.xAxisID, ze(t, "x")), r = e.yAxisID = D(s.yAxisID, ze(t, "y")), a = e.rAxisID = D(s.rAxisID, ze(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Si(this._data, this), t._stacked && Bt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (A(e)) {
      const n = this._cachedMeta;
      this._data = fr(e, n);
    } else if (s !== e) {
      if (s) {
        Si(s, this);
        const n = this._cachedMeta;
        Bt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Gn(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = Fe(e.vScale, e), e.stack !== s.stack && (n = !0, Bt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Ni(this, e._parsed), e._stacked = Fe(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, f;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, f = n;
    else {
      N(n[t]) ? f = this.parseArrayData(s, n, t, e) : A(n[t]) ? f = this.parseObjectData(s, n, t, e) : f = this.parsePrimitiveData(s, n, t, e);
      const u = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      s._sorted = l;
    }
    r && Ni(this, f);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let f, u, p;
    for (f = 0, u = n; f < u; ++f)
      p = f + s, d[f] = {
        [a]: h || o.parse(c[p], p),
        [l]: r.parse(e[p], p)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, f, u;
    for (h = 0, d = n; h < d; ++h)
      f = h + s, u = e[f], c[h] = {
        x: o.parse(Qt(u, a), f),
        y: r.parse(Qt(u, l), f)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Xs(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Wi(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Wi(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = _r(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = gr(a);
    let f, u;
    function p() {
      u = n[f];
      const g = u[a.axis];
      return !J(u[t.axis]) || h > g || d < g;
    }
    for (f = 0; f < r && !(!p() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = r - 1; f >= 0; --f)
        if (!p()) {
          this.updateRangeFromParsed(c, t, u, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], J(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = dr(D(this.options.clip, hr(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = br(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = mr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && ke(s);
    if (a)
      return ji(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(W.elements[t]), p = () => this.getContext(s, n, e), g = c.resolveNamedOptions(f, u, p, d);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(ji(g, l))), g;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), f = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(f, this.getContext(t, s, e));
    }
    const c = new Ys(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Be(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    Be(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !Be(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Bt(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
function xr(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < F) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), f = Math.sin(l), u = (y, v, _) => ee(y, a, l, !0) ? 1 : Math.max(v, v * e, _, _ * e), p = (y, v, _) => ee(y, a, l, !0) ? -1 : Math.min(v, v * e, _, _ * e), g = u(0, c, d), m = u(H, h, f), b = p(z, c, d), x = p(z + H, h, f);
    s = (g - b) / 2, n = (m - x) / 2, o = -(g + b) / 2, r = -(m + x) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class yr extends fi {
  static id = "doughnut";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing"
        ]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  static descriptors = {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const { labels: { pointStyle: s, color: n } } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: n,
                  lineWidth: l.borderWidth,
                  pointStyle: s,
                  hidden: !t.getDataVisibility(r),
                  index: r
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, s) {
          s.chart.toggleDataVisibility(e.index), s.chart.update();
        }
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let o = (l) => +s[l];
      if (A(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Qt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return lt(this.options.rotation - 90);
  }
  _getCircumference() {
    return lt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = F, e = -F;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(Ln(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: u, offsetX: p, offsetY: g } = xr(d, h, l), m = (s.width - r) / f, b = (s.height - r) / u, x = Math.max(Math.min(m, b) / 2, 0), y = Ds(this.options.radius, x), v = Math.max(y * l, 0), _ = (y - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * y, this.offsetY = g * y, n.total = this.calculateTotal(), this.outerRadius = y - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, f = o && c.animateScale, u = f ? 0 : this.innerRadius, p = f ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(e, n);
    let b = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      b += this._circumference(x, o);
    for (x = e; x < e + s; ++x) {
      const y = this._circumference(x, o), v = t[x], _ = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: b,
        endAngle: b + y,
        circumference: y,
        outerRadius: p,
        innerRadius: u
      };
      m && (_.options = g || this.resolveDataElementOptions(x, v.active ? "active" : n)), b += y, this.updateElement(v, x, _, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? F * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = si(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, r, a, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          r = s.getDatasetMeta(n), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, o = t.length; n < o; ++n)
      l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(D(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class vr extends fi {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = to(e, n, r);
    this._drawStart = a, this._drawCount = l, eo(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), f = r.axis, u = a.axis, { spanGaps: p, segment: g } = this.options, m = te(p) ? p : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", x = e + s, y = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < y; ++_) {
      const S = t[_], w = b ? S : {};
      if (_ < e || _ >= x) {
        w.skip = !0;
        continue;
      }
      const M = this.getParsed(_), k = L(M[u]), O = w[f] = r.getPixelForValue(M[f], _), C = w[u] = o || k ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[u], _);
      w.skip = isNaN(O) || isNaN(C) || k, w.stop = _ > 0 && Math.abs(M[f] - v[f]) > m, g && (w.parsed = M, w.raw = c.data[_]), d && (w.options = h || this.resolveDataElementOptions(_, S.active ? "active" : n)), b || this.updateElement(S, _, w, n), v = M;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
class Mr extends yr {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
function _t() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class ui {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(ui.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return _t();
  }
  parse() {
    return _t();
  }
  format() {
    return _t();
  }
  add() {
    return _t();
  }
  diff() {
    return _t();
  }
  startOf() {
    return _t();
  }
  endOf() {
    return _t();
  }
}
var Sr = {
  _date: ui
};
function wr(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Kn : vt;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const f = c(o, t, e - d), u = c(o, t, e + d);
          return {
            lo: f.lo,
            hi: u.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: f } = i, u = f.slice(0, h.lo + 1).reverse().findIndex((g) => !L(g[d.axis]));
        h.lo -= Math.max(0, u);
        const p = f.slice(h.hi).findIndex((g) => !L(g[d.axis]));
        h.hi += Math.max(0, p);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Te(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: f } = wr(o[a], t, r, n);
    for (let u = d; u <= f; ++u) {
      const p = h[u];
      p.skip || s(p, c, u);
    }
  }
}
function kr(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function We(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Te(i, e, t, function(a, l, c) {
    !n && !ie(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Cr(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Ts(r, {
      x: t.x,
      y: t.y
    });
    ee(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Te(i, e, t, o), n;
}
function Or(i, t, e, s, n, o) {
  let r = [];
  const a = kr(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, n);
    if (s && !u)
      return;
    const p = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(p)) && !u)
      return;
    const m = a(t, p);
    m < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: f
      }
    ], l = m) : m === l && r.push({
      element: h,
      datasetIndex: d,
      index: f
    });
  }
  return Te(i, e, t, c), r;
}
function He(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Cr(i, t, e, n) : Or(i, t, e, s, n, o);
}
function Vi(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Te(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Dr = {
  modes: {
    index(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? We(i, n, o, s, r) : He(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? We(i, n, o, s, r) : He(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return We(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return He(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = xt(t, i);
      return Vi(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = xt(t, i);
      return Vi(i, n, "y", e.intersect, s);
    }
  }
};
const Us = [
  "left",
  "top",
  "right",
  "bottom"
];
function Wt(i, t) {
  return i.filter((e) => e.pos === t);
}
function $i(i, t) {
  return i.filter((e) => Us.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Ht(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Pr(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Ar(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Us.includes(n))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Tr(i, t) {
  const e = Ar(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Rr(i) {
  const t = Pr(i), e = Ht(t.filter((c) => c.box.fullSize), !0), s = Ht(Wt(t, "left"), !0), n = Ht(Wt(t, "right")), o = Ht(Wt(t, "top"), !0), r = Ht(Wt(t, "bottom")), a = $i(t, "x"), l = $i(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Wt(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Yi(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Ks(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Lr(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!A(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Ks(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Yi(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Yi(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Er(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Ir(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function $t(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Ir(a.horizontal, t));
    const { same: d, other: f } = Lr(t, e, a, s);
    c |= d && n.length, h = h || f, l.fullSize || n.push(a);
  }
  return c && $t(n, t, e, s) || h;
}
function ge(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Xi(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      ke(c.start) && (r = c.start), l.fullSize ? ge(l, n.left, r, e.outerWidth - n.right - n.left, f) : ge(l, t.left + c.placed, r, d, f), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      ke(c.start) && (o = c.start), l.fullSize ? ge(l, o, n.top, f, e.outerHeight - n.bottom - n.top) : ge(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Z = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = Q(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Rr(i.boxes), l = a.vertical, c = a.horizontal;
    T(i.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const h = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), f = Object.assign({}, n);
    Ks(f, Q(s));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), p = Tr(l.concat(c), d);
    $t(a.fullSize, u, d, p), $t(l, u, d, p), $t(c, u, d, p) && $t(l, u, d, p), Er(u), Xi(a.leftAndTop, u, d, p), u.x += u.w, u.y += u.h, Xi(a.rightAndBottom, u, d, p), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, T(a.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, i.chartArea), m.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class qs {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Fr extends qs {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ve = "$chartjs", zr = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Ui = (i) => i === null || i === "";
function Br(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[ve] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Ui(n)) {
    const o = Li(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Ui(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Li(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Gs = Xo ? {
  passive: !0
} : !1;
function Wr(i, t, e) {
  i && i.addEventListener(t, e, Gs);
}
function Hr(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Gs);
}
function Nr(i, t) {
  const e = zr[i.type] || i.type, { x: s, y: n } = xt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function De(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function jr(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || De(a.addedNodes, s), r = r && !De(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Vr(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || De(a.removedNodes, s), r = r && !De(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const ne = /* @__PURE__ */ new Map();
let Ki = 0;
function Zs() {
  const i = window.devicePixelRatio;
  i !== Ki && (Ki = i, ne.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function $r(i, t) {
  ne.size || window.addEventListener("resize", Zs), ne.set(i, t);
}
function Yr(i) {
  ne.delete(i), ne.size || window.removeEventListener("resize", Zs);
}
function Xr(i, t, e) {
  const s = i.canvas, n = s && di(s);
  if (!n)
    return;
  const o = Es((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), $r(i, o), r;
}
function Ne(i, t, e) {
  e && e.disconnect(), t === "resize" && Yr(i);
}
function Ur(i, t, e) {
  const s = i.canvas, n = Es((o) => {
    i.ctx !== null && e(Nr(o, i));
  }, i);
  return Wr(s, t, n), n;
}
class Kr extends qs {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Br(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[ve])
      return !1;
    const s = e[ve].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      L(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[ve], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: jr,
      detach: Vr,
      resize: Xr
    }[e] || Ur;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: Ne,
      detach: Ne,
      resize: Ne
    }[e] || Hr)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Yo(t, e, s, n);
  }
  isAttached(t) {
    const e = t && di(t);
    return !!(e && e.isConnected);
  }
}
function qr(i) {
  return !hi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Fr : Kr;
}
class ut {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return te(this.x) && te(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
function Gr(i, t) {
  const e = i.options.ticks, s = Zr(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Qr(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return ta(t, c, o, r / n), c;
  const h = Jr(o, t, n);
  if (r > 0) {
    let d, f;
    const u = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (pe(t, c, h, L(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++)
      pe(t, c, h, o[d], o[d + 1]);
    return pe(t, c, h, l, L(u) ? t.length : l + u), c;
  }
  return pe(t, c, h), c;
}
function Zr(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function Jr(i, t, e) {
  const s = ea(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Nn(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Qr(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function ta(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function pe(i, t, e, s, n) {
  const o = D(s, 0), r = Math.min(D(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function ea(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const ia = (i) => i === "left" ? "right" : i === "right" ? "left" : i, qi = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Gi = (i, t) => Math.min(t || i, i);
function Zi(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function sa(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function na(i, t) {
  T(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Nt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Ji(i, t) {
  if (!i.display)
    return 0;
  const e = Y(i.font, t), s = Q(i.padding);
  return (N(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function oa(i, t) {
  return wt(i, {
    scale: t,
    type: "scale"
  });
}
function ra(i, t, e) {
  return wt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function aa(i, t, e) {
  let s = ei(i);
  return (e && t !== "right" || !e && t === "right") && (s = ia(s)), s;
}
function la(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, p;
  const g = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (u = $(s, o, a), A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      p = h[b].getPixelForValue(x) + g - t;
    } else e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = qi(i, e, t);
    f = a - o;
  } else {
    if (A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      u = h[b].getPixelForValue(x) - m + t;
    } else e === "center" ? u = (c.left + c.right) / 2 - m + t : u = qi(i, e, t);
    p = $(s, r, n), d = e === "left" ? -H : H;
  }
  return {
    titleX: u,
    titleY: p,
    maxWidth: f,
    rotation: d
  };
}
class Et extends ut {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = et(t, Number.POSITIVE_INFINITY), e = et(e, Number.NEGATIVE_INFINITY), s = et(s, Number.POSITIVE_INFINITY), n = et(n, Number.NEGATIVE_INFINITY), {
      min: et(t, s),
      max: et(e, n),
      minDefined: J(t),
      maxDefined: J(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: et(e, et(s, e)),
      max: et(s, et(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    E(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = So(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Zi(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Gr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    E(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    E(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    E(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), E(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    E(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = E(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    E(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    E(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Gi(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = X(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : u / (s - 1), d + 6 > a && (a = u / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Nt(t.grid) - e.padding - Ji(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), r = Yn(Math.min(Math.asin(X((h.highest.height + 6) / a, -1, 1)), Math.asin(X(l / c, -1, 1)) - Math.asin(X(f / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    E(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    E(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ji(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Nt(o) + l) : (t.height = this.maxHeight, t.width = Nt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = s.padding * 2, p = lt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const b = s.mirror ? 0 : m * d.width + g * f.height;
          t.height = Math.min(this.maxHeight, t.height + b + u);
        } else {
          const b = s.mirror ? 0 : g * d.width + m * f.height;
          t.width = Math.min(this.maxWidth, t.width + b + u);
        }
        this._calculatePadding(c, h, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, u = 0;
      l ? c ? (f = n * t.width, u = s * e.height) : (f = s * t.height, u = n * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    E(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      L(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Zi(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Gi(e, s));
    let c = 0, h = 0, d, f, u, p, g, m, b, x, y, v, _;
    for (d = 0; d < e; d += l) {
      if (p = t[d].label, g = this._resolveTickFontOptions(d), n.font = m = g.string, b = o[m] = o[m] || {
        data: {},
        gc: []
      }, x = g.lineHeight, y = v = 0, !L(p) && !N(p))
        y = Di(n, b.data, b.gc, y, p), v = x;
      else if (N(p))
        for (f = 0, u = p.length; f < u; ++f)
          _ = p[f], !L(_) && !N(_) && (y = Di(n, b.data, b.gc, y, _), v += x);
      r.push(y), a.push(v), c = Math.max(y, c), h = Math.max(v, h);
    }
    na(o, e);
    const S = r.indexOf(c), w = a.indexOf(h), M = (k) => ({
      width: r[k] || 0,
      height: a[k] || 0
    });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(S),
      highest: M(w),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Un(this._alignToPixels ? bt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = ra(this.getContext(), t, s));
    }
    return this.$context || (this.$context = oa(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = lt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = Nt(o), u = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, b = function(I) {
      return bt(s, I, g);
    };
    let x, y, v, _, S, w, M, k, O, C, P, j;
    if (r === "top")
      x = b(this.bottom), w = this.bottom - f, k = x - m, C = b(t.top) + m, j = t.bottom;
    else if (r === "bottom")
      x = b(this.top), C = t.top, j = b(t.bottom) - m, w = x + m, k = this.top + f;
    else if (r === "left")
      x = b(this.right), S = this.right - f, M = x - m, O = b(t.left) + m, P = t.right;
    else if (r === "right")
      x = b(this.left), O = t.left, P = b(t.right) - m, S = x + m, M = this.left + f;
    else if (e === "x") {
      if (r === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (A(r)) {
        const I = Object.keys(r)[0], B = r[I];
        x = b(this.chart.scales[I].getPixelForValue(B));
      }
      C = t.top, j = t.bottom, w = x + m, k = w + f;
    } else if (e === "y") {
      if (r === "center")
        x = b((t.left + t.right) / 2);
      else if (A(r)) {
        const I = Object.keys(r)[0], B = r[I];
        x = b(this.chart.scales[I].getPixelForValue(B));
      }
      S = x - m, M = S - f, O = t.left, P = t.right;
    }
    const q = D(n.ticks.maxTicksLimit, d), R = Math.max(1, Math.ceil(d / q));
    for (y = 0; y < d; y += R) {
      const I = this.getContext(y), B = o.setContext(I), tt = a.setContext(I), V = B.lineWidth, kt = B.color, re = tt.dash || [], Ct = tt.dashOffset, Ft = B.tickWidth, gt = B.tickColor, zt = B.tickBorderDash || [], pt = B.tickBorderDashOffset;
      v = sa(this, y, l), v !== void 0 && (_ = bt(s, v, V), c ? S = M = O = P = _ : w = k = C = j = _, u.push({
        tx1: S,
        ty1: w,
        tx2: M,
        ty2: k,
        x1: O,
        y1: C,
        x2: P,
        y2: j,
        width: V,
        color: kt,
        borderDash: re,
        borderDashOffset: Ct,
        tickWidth: Ft,
        tickColor: gt,
        tickBorderDash: zt,
        tickBorderDashOffset: pt
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = Nt(s.grid), u = f + h, p = d ? -h : u, g = -lt(this.labelRotation), m = [];
    let b, x, y, v, _, S, w, M, k, O, C, P, j = "middle";
    if (n === "top")
      S = this.bottom - p, w = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      S = this.top + p, w = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const R = this._getYAxisLabelAlignment(f);
      w = R.textAlign, _ = R.x;
    } else if (n === "right") {
      const R = this._getYAxisLabelAlignment(f);
      w = R.textAlign, _ = R.x;
    } else if (e === "x") {
      if (n === "center")
        S = (t.top + t.bottom) / 2 + u;
      else if (A(n)) {
        const R = Object.keys(n)[0], I = n[R];
        S = this.chart.scales[R].getPixelForValue(I) + u;
      }
      w = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        _ = (t.left + t.right) / 2 - u;
      else if (A(n)) {
        const R = Object.keys(n)[0], I = n[R];
        _ = this.chart.scales[R].getPixelForValue(I);
      }
      w = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? j = "top" : l === "end" && (j = "bottom"));
    const q = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      y = a[b], v = y.label;
      const R = o.setContext(this.getContext(b));
      M = this.getPixelForTick(b) + o.labelOffset, k = this._resolveTickFontOptions(b), O = k.lineHeight, C = N(v) ? v.length : 1;
      const I = C / 2, B = R.color, tt = R.textStrokeColor, V = R.textStrokeWidth;
      let kt = w;
      r ? (_ = M, w === "inner" && (b === x - 1 ? kt = this.options.reverse ? "left" : "right" : b === 0 ? kt = this.options.reverse ? "right" : "left" : kt = "center"), n === "top" ? c === "near" || g !== 0 ? P = -C * O + O / 2 : c === "center" ? P = -q.highest.height / 2 - I * O + O : P = -q.highest.height + O / 2 : c === "near" || g !== 0 ? P = O / 2 : c === "center" ? P = q.highest.height / 2 - I * O : P = q.highest.height - C * O, d && (P *= -1), g !== 0 && !R.showLabelBackdrop && (_ += O / 2 * Math.sin(g))) : (S = M, P = (1 - C) * O / 2);
      let re;
      if (R.showLabelBackdrop) {
        const Ct = Q(R.backdropPadding), Ft = q.heights[b], gt = q.widths[b];
        let zt = P - Ct.top, pt = 0 - Ct.left;
        switch (j) {
          case "middle":
            zt -= Ft / 2;
            break;
          case "bottom":
            zt -= Ft;
            break;
        }
        switch (w) {
          case "center":
            pt -= gt / 2;
            break;
          case "right":
            pt -= gt;
            break;
          case "inner":
            b === x - 1 ? pt -= gt : b > 0 && (pt -= gt / 2);
            break;
        }
        re = {
          left: pt,
          top: zt,
          width: gt + Ct.width,
          height: Ft + Ct.height,
          color: R.backdropColor
        };
      }
      m.push({
        label: v,
        font: k,
        textOffset: P,
        options: {
          rotation: g,
          color: B,
          strokeColor: tt,
          strokeWidth: V,
          textAlign: kt,
          textBaseline: j,
          translation: [
            _,
            S
          ],
          backdrop: re
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-lt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, f;
    this.isHorizontal() ? (c = bt(t, this.left, r) - r / 2, h = bt(t, this.right, a) + a / 2, d = f = l) : (d = bt(t, this.top, r) - r / 2, f = bt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ni(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      se(s, c, 0, h, l, a);
    }
    n && oi(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = Y(s.font), r = Q(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || A(e) ? (l += r.bottom, N(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = la(this, l, e, a);
    se(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: f,
      textAlign: aa(a, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = D(t.grid && t.grid.z, -1), n = D(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Et.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Y(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class me {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    da(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, ca(t, r, s), this.override && W.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in W[n] && (delete W[n][s], this.override && delete St[s]);
  }
}
function ca(i, t, e) {
  const s = Jt(/* @__PURE__ */ Object.create(null), [
    e ? W.get(e) : {},
    W.get(t),
    i.defaults
  ]);
  W.set(t, s), i.defaultRoutes && ha(t, i.defaultRoutes), i.descriptors && W.describe(t, i.descriptors);
}
function ha(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    W.route(o, n, l, a);
  });
}
function da(i) {
  return "id" in i && "defaults" in i;
}
class fa {
  constructor() {
    this.controllers = new me(fi, "datasets", !0), this.elements = new me(ut, "elements"), this.plugins = new me(Object, "plugins"), this.scales = new me(Et, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : T(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Qe(t);
    E(s["before" + n], [], s), e[t](s), E(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var st = /* @__PURE__ */ new fa();
class ua {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        e,
        n,
        o.options
      ];
      if (E(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    L(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = D(s.options && s.options.plugins, {}), o = ga(s);
    return n === !1 && !e ? [] : ma(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function ga(i) {
  const t = {}, e = [], s = Object.keys(st.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(st.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function pa(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function ma(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = pa(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: ba(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function ba(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ue(i, t) {
  const e = W.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function _a(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function xa(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Qi(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function ya(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Ke(i, ...t) {
  if (Qi(i))
    return i;
  for (const e of t) {
    const s = e.axis || ya(e.position) || i.length > 1 && Qi(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function ts(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function va(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return ts(i, "x", e[0]) || ts(i, "y", e[0]);
  }
  return {};
}
function Ma(i, t) {
  const e = St[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Ue(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!A(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Ke(r, a, va(r, i), W.scales[a.type]), c = xa(l, n), h = e.scales || {};
    o[r] = Xt(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Ue(a, t), h = (St[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = _a(d, l), u = r[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), Xt(o[u], [
        {
          axis: f
        },
        s[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Xt(a, [
      W.scales[a.type],
      W.scale
    ]);
  }), o;
}
function Js(i) {
  const t = i.options || (i.options = {});
  t.plugins = D(t.plugins, {}), t.scales = Ma(i, t);
}
function Qs(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Sa(i) {
  return i = i || {}, i.data = Qs(i.data), Js(i), i;
}
const es = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Set();
function be(i, t) {
  let e = es.get(i);
  return e || (e = t(), es.set(i, e), tn.add(e)), e;
}
const jt = (i, t, e) => {
  const s = Qt(t, e);
  s !== void 0 && i.add(s);
};
class wa {
  constructor(t) {
    this._config = Sa(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Qs(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Js(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return be(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return be(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return be(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return be(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => jt(l, t, d))), h.forEach((d) => jt(l, n, d)), h.forEach((d) => jt(l, St[o] || {}, d)), h.forEach((d) => jt(l, W, d)), h.forEach((d) => jt(l, $e, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), tn.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      St[e] || {},
      W.datasets[e] || {},
      {
        type: e
      },
      W,
      $e
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = is(this._resolverCache, t, n);
    let l = r;
    if (Ca(r, e)) {
      o.$shared = !1, s = ft(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Rt(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = is(this._resolverCache, t, s);
    return A(e) ? Rt(o, e, void 0, n) : o;
  }
}
function is(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: ai(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const ka = (i) => A(i) && Object.getOwnPropertyNames(i).some((t) => ft(i[t]));
function Ca(i, t) {
  const { isScriptable: e, isIndexable: s } = zs(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (ft(a) || ka(a)) || r && N(a))
      return !0;
  }
  return !1;
}
var Oa = "4.4.8";
const Da = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function ss(i, t) {
  return i === "top" || i === "bottom" || Da.indexOf(i) === -1 && t === "x";
}
function ns(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function os(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), E(e && e.onComplete, [
    i
  ], t);
}
function Pa(i) {
  const t = i.chart, e = t.options.animation;
  E(e && e.onProgress, [
    i
  ], t);
}
function en(i) {
  return hi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Me = {}, rs = (i) => {
  const t = en(i);
  return Object.values(Me).filter((e) => e.canvas === t).pop();
};
function Aa(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Ta(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
function _e(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Ra(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: _e(e, t, "left"),
    right: _e(e, t, "right"),
    top: _e(s, t, "top"),
    bottom: _e(s, t, "bottom")
  } : t;
}
class It {
  static defaults = W;
  static instances = Me;
  static overrides = St;
  static registry = st;
  static version = Oa;
  static getChart = rs;
  static register(...t) {
    st.add(...t), as();
  }
  static unregister(...t) {
    st.remove(...t), as();
  }
  constructor(t, e) {
    const s = this.config = new wa(e), n = en(t), o = rs(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || qr(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Rn(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ua(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Jn((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Me[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ot.listen(this, "complete", os), ot.listen(this, "progress", Pa), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return L(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return st;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ri(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Pi(this.canvas, this.ctx), this;
  }
  stop() {
    return ot.stop(this), this;
  }
  resize(t, e) {
    ot.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Ri(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), E(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    T(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Ke(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), T(o, (r) => {
      const a = r.options, l = a.id, c = Ke(l, a), h = D(a.type, r.dtype);
      (a.position === void 0 || ss(a.position, c) !== ss(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const f = st.getScale(h);
        d = new f({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), T(n, (r, a) => {
      r || delete s[a];
    }), T(s, (r) => {
      Z.configure(this, r, r.options), Z.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(ns("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Ue(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = st.getController(a), { datasetElementType: c, dataElementType: h } = W.datasets[a];
        Object.assign(l, {
          dataElementType: st.getElement(h),
          datasetElementType: c && st.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    T(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(f), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || T(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(ns("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    T(this.scales, (t) => {
      Z.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!xi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Aa(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!xi(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Z.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], T(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, ft(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ot.has(this) ? this.attached && !ot.running(this) && ot.start(this) : (this.draw(), os({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = t._clip, n = !s.disabled, o = Ra(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && ni(e, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && oi(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return ie(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Dr.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = wt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    ke(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), ot.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Pi(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Me[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    T(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    T(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, T(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Se(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = Bn(t), c = Ta(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, E(o.onHover, [
      t,
      a,
      this
    ], this), l && E(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Se(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}
function as() {
  return T(It.instances, (i) => i._plugins.invalidate());
}
function La(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + H, s - H), i.closePath(), i.clip();
}
function Ea(i) {
  return ri(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Ia(i, t, e, s) {
  const n = Ea(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return X(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: X(n.innerStart, 0, r),
    innerEnd: X(n.innerEnd, 0, r)
  };
}
function Dt(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Pe(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), f = h > 0 ? h + s + e + c : 0;
  let u = 0;
  const p = n - l;
  if (s) {
    const R = h > 0 ? h - s : 0, I = d > 0 ? d - s : 0, B = (R + I) / 2, tt = B !== 0 ? p * B / (B + s) : p;
    u = (p - tt) / 2;
  }
  const g = Math.max(1e-3, p * d - e / z) / d, m = (p - g) / 2, b = l + m + u, x = n - m - u, { outerStart: y, outerEnd: v, innerStart: _, innerEnd: S } = Ia(t, f, d, x - b), w = d - y, M = d - v, k = b + y / w, O = x - v / M, C = f + _, P = f + S, j = b + _ / C, q = x - S / P;
  if (i.beginPath(), o) {
    const R = (k + O) / 2;
    if (i.arc(r, a, d, k, R), i.arc(r, a, d, R, O), v > 0) {
      const V = Dt(M, O, r, a);
      i.arc(V.x, V.y, v, O, x + H);
    }
    const I = Dt(P, x, r, a);
    if (i.lineTo(I.x, I.y), S > 0) {
      const V = Dt(P, q, r, a);
      i.arc(V.x, V.y, S, x + H, q + Math.PI);
    }
    const B = (x - S / f + (b + _ / f)) / 2;
    if (i.arc(r, a, f, x - S / f, B, !0), i.arc(r, a, f, B, b + _ / f, !0), _ > 0) {
      const V = Dt(C, j, r, a);
      i.arc(V.x, V.y, _, j + Math.PI, b - H);
    }
    const tt = Dt(w, b, r, a);
    if (i.lineTo(tt.x, tt.y), y > 0) {
      const V = Dt(w, k, r, a);
      i.arc(V.x, V.y, y, b - H, k);
    }
  } else {
    i.moveTo(r, a);
    const R = Math.cos(k) * d + r, I = Math.sin(k) * d + a;
    i.lineTo(R, I);
    const B = Math.cos(O) * d + r, tt = Math.sin(O) * d + a;
    i.lineTo(B, tt);
  }
  i.closePath();
}
function Fa(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Pe(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % F || F));
  }
  return Pe(i, t, e, s, l, n), i.fill(), l;
}
function za(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: f } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = f, u ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    Pe(i, t, e, s, p, n);
    for (let g = 0; g < o; ++g)
      i.stroke();
    isNaN(a) || (p = r + (a % F || F));
  }
  u && La(i, t, p), o || (Pe(i, t, e, s, p, n), i.stroke());
}
class Ba extends ut {
  static id = "arc";
  static defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash"
  };
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.getProps([
      "x",
      "y"
    ], s), { angle: o, distance: r } = Ts(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), f = (this.options.spacing + this.options.borderWidth) / 2, u = D(d, l - a), p = ee(o, a, l) && a !== l, g = u >= F || p, m = Pt(r, c + f, h + f);
    return g && m;
  }
  getCenterPoint(t) {
    const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(h) * d,
      y: s + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F ? Math.floor(s / F) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(z, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Fa(t, this, c, o, r), za(t, this, c, o, r), t.restore();
  }
}
function sn(i, t, e = t) {
  i.lineCap = D(e.borderCapStyle, t.borderCapStyle), i.setLineDash(D(e.borderDash, t.borderDash)), i.lineDashOffset = D(e.borderDashOffset, t.borderDashOffset), i.lineJoin = D(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = D(e.borderWidth, t.borderWidth), i.strokeStyle = D(e.borderColor, t.borderColor);
}
function Wa(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Ha(i) {
  return i.stepped ? uo : i.tension || i.cubicInterpolationMode === "monotone" ? go : Wa;
}
function nn(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Na(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = nn(n, e, s), h = Ha(o);
  let { move: d = !0, reverse: f } = s || {}, u, p, g;
  for (u = 0; u <= c; ++u)
    p = n[(a + (f ? c - u : u)) % r], !p.skip && (d ? (i.moveTo(p.x, p.y), d = !1) : h(i, g, p, f, o.stepped), g = p);
  return l && (p = n[(a + (f ? c : 0)) % r], h(i, g, p, f, o.stepped)), !!l;
}
function ja(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = nn(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, f, u, p, g, m, b;
  const x = (v) => (r + (c ? a - v : v)) % o, y = () => {
    g !== m && (i.lineTo(h, m), i.lineTo(h, g), i.lineTo(h, b));
  };
  for (l && (u = n[x(0)], i.moveTo(u.x, u.y)), f = 0; f <= a; ++f) {
    if (u = n[x(f)], u.skip)
      continue;
    const v = u.x, _ = u.y, S = v | 0;
    S === p ? (_ < g ? g = _ : _ > m && (m = _), h = (d * h + v) / ++d) : (y(), i.lineTo(v, _), p = S, d = 0, g = m = _), b = _;
  }
  y();
}
function qe(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? ja : Na;
}
function Va(i) {
  return i.stepped ? Uo : i.tension || i.cubicInterpolationMode === "monotone" ? Ko : yt;
}
function $a(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), sn(i, t.options), i.stroke(n);
}
function Ya(i, t, e, s) {
  const { segments: n, options: o } = t, r = qe(t);
  for (const a of n)
    sn(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Xa = typeof Path2D == "function";
function Ua(i, t, e, s) {
  Xa && !t.options.segment ? $a(i, t, e, s) : Ya(i, t, e, s);
}
class Ka extends ut {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill"
  };
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      Wo(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ir(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, r = Qo(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Va(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: f } = r[c], u = o[d], p = o[f];
      if (u === p) {
        a.push(u);
        continue;
      }
      const g = Math.abs((n - u[e]) / (p[e] - u[e])), m = l(u, p, g, s.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return qe(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = qe(this);
    let r = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      r &= o(t, this, a, {
        start: e,
        end: e + s - 1
      });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Ua(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function ls(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class qa extends ut {
  static id = "point";
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return ls(this, t, "x", e);
  }
  inYRange(t, e) {
    return ls(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !ie(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Ye(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
const cs = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Ga = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class hs extends ut {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = E(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = Y(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = cs(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let f = -1, u = -h;
    return this.legendItems.forEach((p, g) => {
      const m = s + e / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (g > 0 ? 0 : 1)] = 0, u += h, f++), l[g] = {
        left: 0,
        top: u,
        row: f,
        width: m,
        height: n
      }, c[c.length - 1] += m + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, f = 0, u = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: x, itemHeight: y } = Za(s, e, o, m, n);
      b > 0 && u + y + 2 * a > h && (d += f + a, c.push({
        width: f,
        height: u
      }), p += f + a, g++, f = u = 0), l[b] = {
        left: p,
        top: u,
        col: g,
        width: x,
        height: y
      }, f = Math.max(f, x), u += y + a;
    }), d += f, c.push({
      width: f,
      height: u
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = At(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = $(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = $(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = $(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = $(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ni(t, this), this._draw(), oi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = W.color, l = At(t.rtl, this.left, this.width), c = Y(r.font), { padding: h } = r, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = cs(r, d), b = function(S, w, M) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const k = D(M.lineWidth, 1);
      if (n.fillStyle = D(M.fillStyle, a), n.lineCap = D(M.lineCap, "butt"), n.lineDashOffset = D(M.lineDashOffset, 0), n.lineJoin = D(M.lineJoin, "miter"), n.lineWidth = k, n.strokeStyle = D(M.strokeStyle, a), n.setLineDash(D(M.lineDash, [])), r.usePointStyle) {
        const O = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: M.pointStyle,
          rotation: M.rotation,
          borderWidth: k
        }, C = l.xPlus(S, p / 2), P = w + f;
        Fs(n, O, C, P, r.pointStyleWidth && p);
      } else {
        const O = w + Math.max((d - g) / 2, 0), C = l.leftForLtr(S, p), P = Gt(M.borderRadius);
        n.beginPath(), Object.values(P).some((j) => j !== 0) ? Xe(n, {
          x: C,
          y: O,
          w: p,
          h: g,
          radius: P
        }) : n.rect(C, O, p, g), n.fill(), k !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(S, w, M) {
      se(n, M.text, S, w + m / 2, c, {
        strikethrough: M.hidden,
        textAlign: l.textAlign(M.textAlign)
      });
    }, y = this.isHorizontal(), v = this._computeTitleHeight();
    y ? u = {
      x: $(o, this.left + h, this.right - s[0]),
      y: this.top + h + v,
      line: 0
    } : u = {
      x: this.left + h,
      y: $(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, js(this.ctx, t.textDirection);
    const _ = m + h;
    this.legendItems.forEach((S, w) => {
      n.strokeStyle = S.fontColor, n.fillStyle = S.fontColor;
      const M = n.measureText(S.text).width, k = l.textAlign(S.textAlign || (S.textAlign = r.textAlign)), O = p + f + M;
      let C = u.x, P = u.y;
      l.setWidth(this.width), y ? w > 0 && C + O + h > this.right && (P = u.y += _, u.line++, C = u.x = $(o, this.left + h, this.right - s[u.line])) : w > 0 && P + _ > this.bottom && (C = u.x = C + e[u.line].width + h, u.line++, P = u.y = $(o, this.top + v + h, this.bottom - e[u.line].height));
      const j = l.x(C);
      if (b(j, P, S), C = Qn(k, C + p + f, y ? C + O : this.right, t.rtl), x(l.x(C), P, S), y)
        u.x += O + h;
      else if (typeof S.text != "string") {
        const q = c.lineHeight;
        u.y += on(S, q) + h;
      } else
        u.y += _;
    }), Vs(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = Y(e.font), n = Q(e.padding);
    if (!e.display)
      return;
    const o = At(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = $(t.align, d, this.right - f);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      h = c + $(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const u = $(a, d, d + f);
    r.textAlign = o.textAlign(ei(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, se(r, e.text, u, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = Y(t.font), s = Q(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Pt(t, this.left, this.right) && Pt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Pt(t, n.left, n.left + n.width) && Pt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!tl(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Ga(n, s);
      n && !o && E(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && E(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && E(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Za(i, t, e, s, n) {
  const o = Ja(s, i, t, e), r = Qa(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Ja(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function Qa(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = on(t, e)), s;
}
function on(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function tl(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var el = {
  id: "legend",
  _element: hs,
  start(i, t, e) {
    const s = i.legend = new hs({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Z.configure(i, s, e), Z.addBox(i, s);
  },
  stop(i) {
    Z.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    Z.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = Q(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class rn extends ut {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = N(s.text) ? s.text.length : 1;
    this._padding = Q(s.padding);
    const o = n * Y(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = $(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = $(a, n, e), l = z * -0.5) : (h = o - t, d = $(a, e, n), l = z * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = Y(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    se(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: ei(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function il(i, t) {
  const e = new rn({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Z.configure(i, e, t), Z.addBox(i, e), i.titleBlock = e;
}
var sl = {
  id: "title",
  _element: rn,
  start(i, t, e) {
    il(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Z.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    Z.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Yt = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = Ve(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function it(i, t) {
  return t && (N(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function rt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function nl(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function ds(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = Y(t.bodyFont), c = Y(t.titleFont), h = Y(t.footerFont), d = o.length, f = n.length, u = s.length, p = Q(t.padding);
  let g = p.height, m = 0, b = s.reduce((v, _) => v + _.before.length + _.lines.length + _.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += u * v + (b - u) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  f && (g += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const y = function(v) {
    m = Math.max(m, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, T(i.title, y), e.font = l.string, T(i.beforeBody.concat(i.afterBody), y), x = t.displayColors ? r + 2 + t.boxPadding : 0, T(s, (v) => {
    T(v.before, y), T(v.lines, y), T(v.after, y);
  }), x = 0, e.font = h.string, T(i.footer, y), e.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function ol(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function rl(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function al(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), rl(c, i, t, e) && (c = "center"), c;
}
function fs(i, t, e) {
  const s = e.yAlign || t.yAlign || ol(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || al(i, t, e, s),
    yAlign: s
  };
}
function ll(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function cl(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function us(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = Gt(r);
  let p = ll(t, a);
  const g = cl(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(h, f) + n : a === "right" && (p += Math.max(d, u) + n), {
    x: X(p, 0, s.width - t.width),
    y: X(g, 0, s.height - t.height)
  };
}
function xe(i, t, e) {
  const s = Q(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function gs(i) {
  return it([], rt(i));
}
function hl(i, t, e) {
  return wt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function ps(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const an = {
  beforeTitle: nt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: nt,
  beforeBody: nt,
  beforeLabel: nt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return L(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: nt,
  afterBody: nt,
  beforeFooter: nt,
  footer: nt,
  afterFooter: nt
};
function U(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? an[t].call(e, s) : n;
}
class ms extends ut {
  static positioners = Yt;
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Ys(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = hl(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = U(s, "beforeTitle", this, t), o = U(s, "title", this, t), r = U(s, "afterTitle", this, t);
    let a = [];
    return a = it(a, rt(n)), a = it(a, rt(o)), a = it(a, rt(r)), a;
  }
  getBeforeBody(t, e) {
    return gs(U(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return T(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = ps(s, o);
      it(r.before, rt(U(a, "beforeLabel", this, o))), it(r.lines, U(a, "label", this, o)), it(r.after, rt(U(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return gs(U(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = U(s, "beforeFooter", this, t), o = U(s, "footer", this, t), r = U(s, "afterFooter", this, t);
    let a = [];
    return a = it(a, rt(n)), a = it(a, rt(o)), a = it(a, rt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(nl(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, f) => t.filter(h, d, f, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), T(a, (h) => {
      const d = ps(t.callbacks, h);
      n.push(U(d, "labelColor", this, h)), o.push(U(d, "labelPointStyle", this, h)), r.push(U(d, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Yt[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = ds(this, s), c = Object.assign({}, a, l), h = fs(this.chart, s, c), d = us(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Gt(a), { x: f, y: u } = t, { width: p, height: g } = e;
    let m, b, x, y, v, _;
    return o === "center" ? (v = u + g / 2, n === "left" ? (m = f, b = m - r, y = v + r, _ = v - r) : (m = f + p, b = m + r, y = v - r, _ = v + r), x = m) : (n === "left" ? b = f + Math.max(l, h) + r : n === "right" ? b = f + p - Math.max(c, d) - r : b = this.caretX, o === "top" ? (y = u, v = y - r, m = b - r, x = b + r) : (y = u + g, v = y + r, m = b + r, x = b - r), _ = y), {
      x1: m,
      x2: b,
      x3: x,
      y1: y,
      y2: v,
      y3: _
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = At(s.rtl, this.x, this.width);
      for (t.x = xe(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = Y(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = Y(o.bodyFont), d = xe(this, "left", o), f = n.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, p = e.y + u;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(f, c) + c / 2, b = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ye(t, g, m, b), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ye(t, g, m, b);
    } else {
      t.lineWidth = A(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = n.leftForLtr(f, c), m = n.leftForLtr(n.xPlus(f, 1), c - 2), b = Gt(r.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Xe(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Xe(t, {
        x: m,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = Y(s.bodyFont);
    let f = d.lineHeight, u = 0;
    const p = At(s.rtl, this.x, this.width), g = function(M) {
      e.fillText(M, p.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, m = p.textAlign(r);
    let b, x, y, v, _, S, w;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = xe(this, m, s), e.fillStyle = s.bodyColor, T(this.beforeBody, g), u = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, S = n.length; v < S; ++v) {
      for (b = n[v], x = this.labelTextColors[v], e.fillStyle = x, T(b.before, g), y = b.lines, a && y.length && (this._drawColorBox(e, t, v, p, s), f = Math.max(d.lineHeight, l)), _ = 0, w = y.length; _ < w; ++_)
        g(y[_]), f = d.lineHeight;
      T(b.after, g);
    }
    u = 0, f = d.lineHeight, T(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = At(s.rtl, this.x, this.width);
      for (t.x = xe(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = Y(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: p } = Gt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - f, l), e.quadraticCurveTo(a + c, l, a + c, l + f), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - p), e.quadraticCurveTo(a + c, l + h, a + c - p, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + u, l + h), e.quadraticCurveTo(a, l + h, a, l + h - u), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Yt[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = ds(this, t), l = Object.assign({}, r, this._size), c = fs(e, t, l), h = us(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = Q(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), js(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Vs(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Se(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Se(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = Yt[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var dl = {
  id: "tooltip",
  _element: ms,
  positioners: Yt,
  afterInit(i, t, e) {
    e && (i.tooltip = new ms({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: an
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const fl = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function ul(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return fl(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const gl = (i, t) => i === null ? null : X(Math.round(i), 0, t);
function bs(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class pl extends Et {
  static id = "category";
  static defaults = {
    ticks: {
      callback: bs
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (L(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : ul(s, t, D(e, t), this._addedLabels), gl(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({
        value: r
      });
    return n;
  }
  getLabelForValue(t) {
    return bs.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function ml(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, p = h - 1, { min: g, max: m } = t, b = !L(r), x = !L(a), y = !L(c), v = (m - g) / (d + 1);
  let _ = vi((m - g) / p / u) * u, S, w, M, k;
  if (_ < 1e-14 && !b && !x)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  k = Math.ceil(m / _) - Math.floor(g / _), k > p && (_ = vi(k * _ / p / u) * u), L(l) || (S = Math.pow(10, l), _ = Math.ceil(_ * S) / S), n === "ticks" ? (w = Math.floor(g / _) * _, M = Math.ceil(m / _) * _) : (w = g, M = m), b && x && o && Vn((a - r) / o, _ / 1e3) ? (k = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / k, w = r, M = a) : y ? (w = b ? r : w, M = x ? a : M, k = c - 1, _ = (M - w) / k) : (k = (M - w) / _, Ut(k, Math.round(k), _ / 1e3) ? k = Math.round(k) : k = Math.ceil(k));
  const O = Math.max(Mi(_), Mi(w));
  S = Math.pow(10, L(l) ? O : l), w = Math.round(w * S) / S, M = Math.round(M * S) / S;
  let C = 0;
  for (b && (f && w !== r ? (e.push({
    value: r
  }), w < r && C++, Ut(Math.round((w + C * _) * S) / S, r, _s(r, v, i)) && C++) : w < r && C++); C < k; ++C) {
    const P = Math.round((w + C * _) * S) / S;
    if (x && P > a)
      break;
    e.push({
      value: P
    });
  }
  return x && f && M !== a ? e.length && Ut(e[e.length - 1].value, a, _s(a, v, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || M === a) && e.push({
    value: M
  }), e;
}
function _s(i, t, { horizontal: e, minRotation: s }) {
  const n = lt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class bl extends Et {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return L(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Tt(n), c = Tt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = ml(n, o);
    return t.bounds === "ticks" && $n(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return si(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class _l extends bl {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Is.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = J(t) ? t : 0, this.max = J(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = lt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const Re = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, K = /* @__PURE__ */ Object.keys(Re);
function xs(i, t) {
  return i - t;
}
function ys(i, t) {
  if (L(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), J(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (te(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function vs(i, t, e, s) {
  const n = K.length;
  for (let o = K.indexOf(i); o < n - 1; ++o) {
    const r = Re[K[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return K[o];
  }
  return K[n - 1];
}
function xl(i, t, e, s, n) {
  for (let o = K.length - 1; o >= K.indexOf(e); o--) {
    const r = K[o];
    if (Re[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return K[e ? K.indexOf(e) : 0];
}
function yl(i) {
  for (let t = K.indexOf(i) + 1, e = K.length; t < e; ++t)
    if (Re[K[t]].common)
      return K[t];
}
function Ms(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = ti(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function vl(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Ss(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : vl(i, s, n, e);
}
class ws extends Et {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  };
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new Sr._date(t.adapters.date);
    n.init(e), Xt(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : ys(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = J(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = J(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = qn(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? vs(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : xl(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : yl(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Ss(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = X(e, 0, r), s = X(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || vs(o.minUnit, e, s, this._getLabelCapacity(e)), a = D(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = te(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < s; f = +t.add(f, a, r), u++)
      Ms(h, f, p);
    return (f === s || n.bounds === "ticks" || u === 1) && Ms(h, f, p), Object.keys(h).sort(xs).map((g) => +g);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, r = e || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return E(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], f = s[e], u = c && d && f && f.major;
    return this._adapter.format(t, n || (u ? d : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = lt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Ss(this, [
      t
    ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(ys(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Zn(t.sort(xs));
  }
}
function ye(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = vt(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = vt(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class wl extends ws {
  static id = "timeseries";
  static defaults = ws.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = ye(e, this.min), this._tableRange = ye(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (ye(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return ye(this._table, s * this._tableRange + this._minPos, !0);
  }
}
It.register(sl, el, dl);
class ln extends cn {
  canvas;
  chart;
  constructor({ contextElement: t }) {
    super({ contextElement: t }), this.canvas = document.createElement("canvas"), this.contextElement.appendChild(this.canvas), this.addCoreElement(this.canvas);
  }
  get chartObj() {
    if (!this.chart) throw new Error("No chart instance!");
    return this.chart;
  }
  set yAxisVisible(t) {
    if (!this.chartObj.scales.y)
      throw new Error("No yAxios options");
    this.chartObj.scales.y.options.display = t, this.update();
  }
  update() {
    this.chartObj.update();
  }
}
It.register(Mr, Ba);
class kl extends ln {
  constructor(t) {
    super(t);
    const { dataSource: e, title: s } = t;
    this.chart = new It(this.canvas, {
      type: "pie",
      options: {
        aspectRatio: 1,
        maintainAspectRatio: !1,
        plugins: {
          title: {
            display: s !== void 0,
            text: s
          }
        }
      },
      data: {
        labels: e.map((n) => n.label),
        datasets: [{
          data: e.flatMap((n) => n.data),
          backgroundColor: e.map((n) => n.color)
        }]
      }
    });
  }
  get componentLabel() {
    return "pie-chart";
  }
}
It.register(vr, pl, _l, qa, Ka);
class Cl extends ln {
  constructor(t) {
    super(t);
    const { dataSource: e, title: s, labels: n } = t;
    this.chart = new It(this.canvas, {
      type: "line",
      options: {
        aspectRatio: 1,
        maintainAspectRatio: !1,
        plugins: {
          title: {
            display: s !== void 0,
            text: s
          }
        }
      },
      data: {
        labels: n,
        datasets: e
      }
    });
  }
  get componentLabel() {
    return "line-chart";
  }
}
export {
  Cl as IRLineChart,
  kl as IRPieChart
};
//# sourceMappingURL=chart.js.map
