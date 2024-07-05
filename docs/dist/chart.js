import "./chunks/_init-CqtFEZw2.js";
import { I as yn } from "./chunks/index-cpGHHlo1.js";
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function le(i) {
  return i + 0.5 | 0;
}
const dt = (i, t, e) => Math.max(Math.min(i, e), t);
function Kt(i) {
  return dt(le(i * 2.55), 0, 255);
}
function ut(i) {
  return dt(le(i * 255), 0, 255);
}
function ct(i) {
  return dt(le(i / 2.55) / 100, 0, 1);
}
function vi(i) {
  return dt(le(i * 100), 0, 100);
}
const Q = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, qe = [..."0123456789ABCDEF"], vn = (i) => qe[i & 15], Mn = (i) => qe[(i & 240) >> 4] + qe[i & 15], de = (i) => (i & 240) >> 4 === (i & 15), kn = (i) => de(i.r) && de(i.g) && de(i.b) && de(i.a);
function wn(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Q[i[1]] * 17,
    g: 255 & Q[i[2]] * 17,
    b: 255 & Q[i[3]] * 17,
    a: t === 5 ? Q[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Q[i[1]] << 4 | Q[i[2]],
    g: Q[i[3]] << 4 | Q[i[4]],
    b: Q[i[5]] << 4 | Q[i[6]],
    a: t === 9 ? Q[i[7]] << 4 | Q[i[8]] : 255
  })), e;
}
const Sn = (i, t) => i < 255 ? t(i) : "";
function Cn(i) {
  var t = kn(i) ? vn : Mn;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Sn(i.a, t) : void 0;
}
const Pn = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Es(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function Dn(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function On(i, t, e) {
  const s = Es(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function An(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function si(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = An(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function ni(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(ut);
}
function oi(i, t, e) {
  return ni(Es, i, t, e);
}
function Tn(i, t, e) {
  return ni(On, i, t, e);
}
function Ln(i, t, e) {
  return ni(Dn, i, t, e);
}
function Fs(i) {
  return (i % 360 + 360) % 360;
}
function Rn(i) {
  const t = Pn.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Kt(+t[5]) : ut(+t[5]));
  const n = Fs(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = Tn(n, o, r) : t[1] === "hsv" ? s = Ln(n, o, r) : s = oi(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function In(i, t) {
  var e = si(i);
  e[0] = Fs(e[0] + t), e = oi(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function En(i) {
  if (!i)
    return;
  const t = si(i), e = t[0], s = vi(t[1]), n = vi(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ct(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const Mi = {
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
}, ki = {
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
function Fn() {
  const i = {}, t = Object.keys(ki), e = Object.keys(Mi);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, Mi[o]);
    o = parseInt(ki[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let fe;
function zn(i) {
  fe || (fe = Fn(), fe.transparent = [0, 0, 0, 0]);
  const t = fe[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Bn = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Wn(i) {
  const t = Bn.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Kt(r) : dt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Kt(s) : dt(s, 0, 255)), n = 255 & (t[4] ? Kt(n) : dt(n, 0, 255)), o = 255 & (t[6] ? Kt(o) : dt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Hn(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ct(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const Ne = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Lt = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Nn(i, t, e) {
  const s = Lt(ct(i.r)), n = Lt(ct(i.g)), o = Lt(ct(i.b));
  return {
    r: ut(Ne(s + e * (Lt(ct(t.r)) - s))),
    g: ut(Ne(n + e * (Lt(ct(t.g)) - n))),
    b: ut(Ne(o + e * (Lt(ct(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ue(i, t, e) {
  if (i) {
    let s = si(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = oi(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function zs(i, t) {
  return i && Object.assign(t || {}, i);
}
function wi(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = ut(i[3]))) : (t = zs(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = ut(t.a)), t;
}
function jn(i) {
  return i.charAt(0) === "r" ? Wn(i) : Rn(i);
}
class ee {
  constructor(t) {
    if (t instanceof ee)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = wi(t) : e === "string" && (s = wn(t) || zn(t) || jn(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = zs(this._rgb);
    return t && (t.a = ct(t.a)), t;
  }
  set rgb(t) {
    this._rgb = wi(t);
  }
  rgbString() {
    return this._valid ? Hn(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Cn(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? En(this._rgb) : void 0;
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
    return t && (this._rgb = Nn(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ee(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ut(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = le(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return ue(this._rgb, 2, t), this;
  }
  darken(t) {
    return ue(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ue(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ue(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return In(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function rt() {
}
const Vn = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function I(i) {
  return i === null || typeof i > "u";
}
function B(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function A(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function V(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function J(i, t) {
  return V(i) ? i : t;
}
function D(i, t) {
  return typeof i > "u" ? t : i;
}
const $n = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, Bs = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function R(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function T(i, t, e, s) {
  let n, o, r;
  if (B(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (A(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Pe(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function De(i) {
  if (B(i))
    return i.map(De);
  if (A(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = De(i[e[n]]);
    return t;
  }
  return i;
}
function Ws(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function Yn(i, t, e, s) {
  if (!Ws(i))
    return;
  const n = t[i], o = e[i];
  A(n) && A(o) ? ie(n, o, s) : t[i] = De(o);
}
function ie(i, t, e) {
  const s = B(t) ? t : [
    t
  ], n = s.length;
  if (!A(i))
    return i;
  e = e || {};
  const o = e.merger || Yn;
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
function Zt(i, t) {
  return ie(i, t, {
    merger: Xn
  });
}
function Xn(i, t, e) {
  if (!Ws(i))
    return;
  const s = t[i], n = e[i];
  A(s) && A(n) ? Zt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = De(n));
}
const Si = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Un(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Kn(i) {
  const t = Un(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function se(i, t) {
  return (Si[t] || (Si[t] = Kn(t)))(i);
}
function ri(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Oe = (i) => typeof i < "u", gt = (i) => typeof i == "function", Ci = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function qn(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const z = Math.PI, F = 2 * z, Gn = F + z, Ae = Number.POSITIVE_INFINITY, Zn = z / 180, N = z / 2, xt = z / 4, Pi = z * 2 / 3, ft = Math.log10, zt = Math.sign;
function Jt(i, t, e) {
  return Math.abs(i - t) < e;
}
function Di(i) {
  const t = Math.round(i);
  i = Jt(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(ft(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Jn(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function ne(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Qn(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Hs(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ot(i) {
  return i * (z / 180);
}
function ai(i) {
  return i * (180 / z);
}
function Oi(i) {
  if (!V(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Ns(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * z && (o += F), {
    angle: o,
    distance: n
  };
}
function Ge(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function to(i, t) {
  return (i - t + Gn) % F - z;
}
function it(i) {
  return (i % F + F) % F;
}
function oe(i, t, e, s) {
  const n = it(i), o = it(t), r = it(e), a = it(o - n), l = it(r - n), c = it(n - o), h = it(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function K(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function eo(i) {
  return K(i, -32768, 32767);
}
function It(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function li(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const St = (i, t, e, s) => li(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), io = (i, t, e) => li(i, e, (s) => i[s][t] >= e);
function so(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const js = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function no(i, t) {
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
  }), js.forEach((e) => {
    const s = "_onData" + ri(e), n = i[e];
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
function Ai(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (js.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function oo(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Vs = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function $s(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Vs.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function ro(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const ci = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", X = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, ao = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function lo(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i, l = r.axis, { min: c, max: h, minDefined: d, maxDefined: f } = r.getUserBounds();
    d && (n = K(Math.min(
      // @ts-expect-error Need to type _parsed
      St(a, l, c).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? s : St(t, l, r.getPixelForValue(c)).lo
    ), 0, s - 1)), f ? o = K(Math.max(
      // @ts-expect-error Need to type _parsed
      St(a, r.axis, h, !0).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      e ? 0 : St(t, l, r.getPixelForValue(h), !0).hi + 1
    ), n, s) - n : o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function co(i) {
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
const ge = (i) => i === 0 || i === 1, Ti = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * F / e)), Li = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * F / e) + 1, Qt = {
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
  easeInSine: (i) => -Math.cos(i * N) + 1,
  easeOutSine: (i) => Math.sin(i * N),
  easeInOutSine: (i) => -0.5 * (Math.cos(z * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => ge(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => ge(i) ? i : Ti(i, 0.075, 0.3),
  easeOutElastic: (i) => ge(i) ? i : Li(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return ge(i) ? i : i < 0.5 ? 0.5 * Ti(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Li(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Qt.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Qt.easeInBounce(i * 2) * 0.5 : Qt.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function hi(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Ri(i) {
  return hi(i) ? i : new ee(i);
}
function je(i) {
  return hi(i) ? i : new ee(i).saturate(0.5).darken(0.1).hexString();
}
const ho = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], fo = [
  "color",
  "borderColor",
  "backgroundColor"
];
function uo(i) {
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
      properties: fo
    },
    numbers: {
      type: "number",
      properties: ho
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
function go(i) {
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
const Ii = /* @__PURE__ */ new Map();
function po(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Ii.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Ii.set(e, s)), s;
}
function ze(i, t, e) {
  return po(t, e).format(i);
}
const Ys = {
  values(i) {
    return B(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = mo(i, e);
    }
    const r = ft(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), ze(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const s = e[t].significand || i / Math.pow(10, Math.floor(ft(i)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * e.length ? Ys.numeric.call(this, i, t, e) : "";
  }
};
function mo(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Be = {
  formatters: Ys
};
function bo(i) {
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
      callback: Be.formatters.values,
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
const Pt = /* @__PURE__ */ Object.create(null), Ze = /* @__PURE__ */ Object.create(null);
function te(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function Ve(i, t, e) {
  return typeof t == "string" ? ie(te(i, t), e) : ie(te(i, ""), t);
}
class _o {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => je(n.backgroundColor), this.hoverBorderColor = (s, n) => je(n.borderColor), this.hoverColor = (s, n) => je(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return Ve(this, t, e);
  }
  get(t) {
    return te(this, t);
  }
  describe(t, e) {
    return Ve(Ze, t, e);
  }
  override(t, e) {
    return Ve(Pt, t, e);
  }
  route(t, e, s, n) {
    const o = te(this, t), r = te(this, s), a = "_" + e;
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
var W = /* @__PURE__ */ new _o({
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
  uo,
  go,
  bo
]);
function xo(i) {
  return !i || I(i.size) || I(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Te(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function yo(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, f;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !B(d))
      r = Te(i, n, o, r, d);
    else if (B(d))
      for (c = 0, h = d.length; c < h; c++)
        f = d[c], f != null && !B(f) && (r = Te(i, n, o, r, f));
  i.restore();
  const u = o.length / 2;
  if (u > e.length) {
    for (l = 0; l < u; l++)
      delete n[o[l]];
    o.splice(0, u);
  }
  return r;
}
function yt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Ei(i, t) {
  t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function Je(i, t, e, s) {
  Xs(i, t, e, s, null);
}
function Xs(i, t, e, s, n) {
  let o, r, a, l, c, h, d, f;
  const u = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * Zn;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), u) {
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, F) : i.arc(e, s, p, 0, F), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += Pi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += Pi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(m + xt) * l, d = Math.cos(m + xt) * (n ? n / 2 - c : l), a = Math.sin(m + xt) * l, f = Math.sin(m + xt) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, m - z, m - N), i.arc(e + f, s - r, c, m - N, m), i.arc(e + d, s + a, c, m, m + N), i.arc(e - f, s + r, c, m + N, m + z), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        m += xt;
      case "rectRot":
        d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + f, s - r), i.lineTo(e + d, s + a), i.lineTo(e - f, s + r), i.closePath();
        break;
      case "crossRot":
        m += xt;
      case "cross":
        d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "star":
        d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r), m += xt, d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(m) * p, a = Math.sin(m) * p, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function ht(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function di(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function fi(i) {
  i.restore();
}
function vo(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else
    n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Mo(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function ko(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), I(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function wo(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function So(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function Dt(i, t, e, s, n, o = {}) {
  const r = B(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, ko(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && So(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), I(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), wo(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Le(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * z, z, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, z, N, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, N, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -N, !0), i.lineTo(e + r.topLeft, s);
}
const Co = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Po = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Do(i, t) {
  const e = ("" + i).match(Co);
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
const Oo = (i) => +i || 0;
function ui(i, t) {
  const e = {}, s = A(t), n = s ? Object.keys(t) : t, o = A(i) ? s ? (r) => D(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = Oo(o(r));
  return e;
}
function Ao(i) {
  return ui(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Et(i) {
  return ui(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function U(i) {
  const t = Ao(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function j(i, t) {
  i = i || {}, t = t || W.font;
  let e = D(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D(i.style, t.style);
  s && !("" + s).match(Po) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: D(i.family, t.family),
    lineHeight: Do(D(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D(i.weight, t.weight),
    string: ""
  };
  return n.string = xo(n), n;
}
function pe(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function To(i, t, e) {
  const { min: s, max: n } = i, o = Bs(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function pt(i, t) {
  return Object.assign(Object.create(i), t);
}
function gi(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Gs("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => gi([
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
      return Ks(a, l, () => Wo(l, t, i, a));
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
      return zi(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return zi(a);
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
function Bt(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Us(i, s),
    setContext: (o) => Bt(i, o, e, s),
    override: (o) => Bt(i.override(o), t, e, s)
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
      return Ks(o, r, () => Ro(o, r, a));
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
function Us(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: gt(e) ? e : () => e,
    isIndexable: gt(s) ? s : () => s
  };
}
const Lo = (i, t) => i ? i + ri(t) : t, pi = (i, t) => A(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Ks(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t))
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function Ro(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return gt(a) && r.isScriptable(t) && (a = Io(t, a, i, e)), B(a) && a.length && (a = Eo(t, a, i, r.isIndexable)), pi(t, a) && (a = Bt(a, n, o && o[t], r)), a;
}
function Io(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), pi(i, l) && (l = mi(n._scopes, n, i, l)), l;
}
function Eo(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (A(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = mi(c, n, i, h);
      t.push(Bt(d, o, r && r[i], a));
    }
  }
  return t;
}
function qs(i, t, e) {
  return gt(i) ? i(t, e) : i;
}
const Fo = (i, t) => i === !0 ? t : typeof i == "string" ? se(t, i) : void 0;
function zo(i, t, e, s, n) {
  for (const o of t) {
    const r = Fo(e, o);
    if (r) {
      i.add(r);
      const a = qs(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function mi(i, t, e, s) {
  const n = t._rootScopes, o = qs(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Fi(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Fi(a, r, o, l, s), l === null) ? !1 : gi(Array.from(a), [
    ""
  ], n, o, () => Bo(t, e, s));
}
function Fi(i, t, e, s, n) {
  for (; e; )
    e = zo(i, t, e, s, n);
  return e;
}
function Bo(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return B(n) && A(e) ? e : n || {};
}
function Wo(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Gs(Lo(o, i), e), typeof n < "u")
      return pi(i, n) ? mi(e, s, i, n) : n;
}
function Gs(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function zi(i) {
  let t = i._keys;
  return t || (t = i._keys = Ho(i._scopes)), t;
}
function Ho(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
const No = Number.EPSILON || 1e-14, Wt = (i, t) => t < i.length && !i[t].skip && i[t], Zs = (i) => i === "x" ? "y" : "x";
function jo(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Ge(o, n), l = Ge(r, o);
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
function Vo(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Wt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Wt(i, h + 1), !(!l || !c)) {
      if (Jt(t[h], 0, No)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function $o(i, t, e = "x") {
  const s = Zs(e), n = i.length;
  let o, r, a, l = Wt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Wt(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function Yo(i, t = "x") {
  const e = Zs(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Wt(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Wt(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? zt(n[r - 1]) !== zt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  Vo(i, n, o), $o(i, o, t);
}
function me(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Xo(i, t) {
  let e, s, n, o, r, a = ht(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && ht(i[e + 1], t), o && (n = i[e], r && (n.cp1x = me(n.cp1x, t.left, t.right), n.cp1y = me(n.cp1y, t.top, t.bottom)), a && (n.cp2x = me(n.cp2x, t.left, t.right), n.cp2y = me(n.cp2y, t.top, t.bottom)));
}
function Uo(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Yo(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = jo(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Xo(i, e);
}
function bi() {
  return typeof window < "u" && typeof document < "u";
}
function _i(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Re(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const We = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Ko(i, t) {
  return We(i).getPropertyValue(t);
}
const qo = [
  "top",
  "right",
  "bottom",
  "left"
];
function Ct(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = qo[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Go = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Zo(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Go(n, o, i.target))
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
function kt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = We(e), o = n.boxSizing === "border-box", r = Ct(n, "padding"), a = Ct(n, "border", "width"), { x: l, y: c, box: h } = Zo(i, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
  let { width: u, height: g } = t;
  return o && (u -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / u * e.width / s),
    y: Math.round((c - f) / g * e.height / s)
  };
}
function Jo(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = _i(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = We(o), l = Ct(a, "border", "width"), c = Ct(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Re(a.maxWidth, o, "clientWidth"), n = Re(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ae,
    maxHeight: n || Ae
  };
}
const be = (i) => Math.round(i * 10) / 10;
function Qo(i, t, e, s) {
  const n = We(i), o = Ct(n, "margin"), r = Re(n.maxWidth, i, "clientWidth") || Ae, a = Re(n.maxHeight, i, "clientHeight") || Ae, l = Jo(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const f = Ct(n, "border", "width"), u = Ct(n, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = be(Math.min(c, r, l.maxWidth)), h = be(Math.min(h, a, l.maxHeight)), c && !h && (h = be(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = be(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function Bi(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const tr = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    bi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function Wi(i, t) {
  const e = Ko(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function wt(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function er(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function ir(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = wt(i, n, e), a = wt(n, o, e), l = wt(o, t, e), c = wt(r, a, e), h = wt(a, l, e);
  return wt(c, h, e);
}
const sr = function(i, t) {
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
}, nr = function() {
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
function Ft(i, t, e) {
  return i ? sr(t, e) : nr();
}
function Js(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Qs(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function tn(i) {
  return i === "angle" ? {
    between: oe,
    compare: to,
    normalize: it
  } : {
    between: It,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Hi({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function or(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = tn(s), l = t.length;
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
function rr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = tn(s), { start: h, end: d, loop: f, style: u } = or(i, t, e), g = [];
  let p = !1, m = null, b, x, y;
  const v = () => l(n, y, b) && a(n, y) !== 0, _ = () => a(o, b) === 0 || l(o, y, b), k = () => p || v(), w = () => !p || _();
  for (let M = h, S = h; M <= d; ++M)
    x = t[M % r], !x.skip && (b = c(x[s]), b !== y && (p = l(b, n, o), m === null && k() && (m = a(b, n) === 0 ? M : S), m !== null && w() && (g.push(Hi({
      start: m,
      end: M,
      loop: f,
      count: r,
      style: u
    })), m = null), S = M, y = b));
  return m !== null && g.push(Hi({
    start: m,
    end: d,
    loop: f,
    count: r,
    style: u
  })), g;
}
function ar(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = rr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function lr(i, t, e, s) {
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
function cr(i, t, e, s) {
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
function hr(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = lr(e, n, o, s);
  if (s === !0)
    return Ni(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Ni(i, cr(e, r, l, c), e, t);
}
function Ni(i, t, e, s) {
  return !s || !s.setContext || !e ? t : dr(i, t, e, s);
}
function dr(i, t, e, s) {
  const n = i._chart.getContext(), o = ji(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, f = d;
  function u(g, p, m, b) {
    const x = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= x;
      for (; e[p % l].skip; )
        p += x;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: b
      }), h = b, d = p % l);
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l], m;
    for (f = d + 1; f <= g.end; f++) {
      const b = e[f % l];
      m = ji(s.setContext(pt(n, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: r
      }))), fr(m, h) && u(d, f - 1, g.loop, h), p = b, h = m;
    }
    d < f - 1 && u(d, f - 1, g.loop, h);
  }
  return c;
}
function ji(i) {
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
function fr(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return hi(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class ur {
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
    this._request || (this._running = !0, this._request = Vs.call(window, () => {
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
var at = /* @__PURE__ */ new ur();
const Vi = "transparent", gr = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Ri(i || Vi), n = s.valid && Ri(t || Vi);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class pr {
  constructor(t, e, s, n) {
    const o = e[s];
    n = pe([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = pe([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || gr[t.type || typeof r], this._easing = Qt[t.easing] || Qt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = pe([
        t.to,
        e,
        n,
        t.from
      ]), this._from = pe([
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
class en {
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
      (B(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = br(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && mr(t.options.$animations, s).then(() => {
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
      o[c] = d = new pr(f, t, c, h), n.push(d);
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
      return at.add(this._chart, s), !0;
  }
}
function mr(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function br(i, t) {
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
function $i(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function _r(i, t, e) {
  if (e === !1)
    return !1;
  const s = $i(i, e), n = $i(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function xr(i) {
  let t, e, s, n;
  return A(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function sn(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Yi(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = n.length; r < a; ++r) {
      if (l = +n[r], l === e) {
        if (s.all)
          continue;
        break;
      }
      c = i.values[l], V(c) && (o || t === 0 || zt(t) === zt(c)) && (t += c);
    }
    return t;
  }
}
function yr(i) {
  const t = Object.keys(i), e = new Array(t.length);
  let s, n, o;
  for (s = 0, n = t.length; s < n; ++s)
    o = t[s], e[s] = {
      x: o,
      y: i[o]
    };
  return e;
}
function Xi(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function vr(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Mr(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function kr(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Ui(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Ki(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = vr(o, r, s), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const g = t[u], { [l]: p, [c]: m } = g, b = g._stacks || (g._stacks = {});
    f = b[c] = kr(n, h, p), f[a] = m, f._top = Ui(f, r, !0, s.type), f._bottom = Ui(f, r, !1, s.type);
    const x = f._visualValues || (f._visualValues = {});
    x[a] = m;
  }
}
function $e(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function wr(i, t) {
  return pt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Sr(i, t, e) {
  return pt(i, {
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
function Vt(i, t) {
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
const Ye = (i) => i === "reset" || i === "none", qi = (i, t) => t ? i : Object.assign({}, i), Cr = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: sn(e, !0),
  values: null
};
class xi {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Xi(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Vt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, f, u, g) => d === "x" ? f : d === "r" ? g : u, o = e.xAxisID = D(s.xAxisID, $e(t, "x")), r = e.yAxisID = D(s.yAxisID, $e(t, "y")), a = e.rAxisID = D(s.rAxisID, $e(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
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
    this._data && Ai(this._data, this), t._stacked && Vt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (A(e))
      this._data = yr(e);
    else if (s !== e) {
      if (s) {
        Ai(s, this);
        const n = this._cachedMeta;
        Vt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && no(e, this), this._syncList = [], this._data = e;
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
    e._stacked = Xi(e.vScale, e), e.stack !== s.stack && (n = !0, Vt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && Ki(this, e._parsed);
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
      B(n[t]) ? f = this.parseArrayData(s, n, t, e) : A(n[t]) ? f = this.parseObjectData(s, n, t, e) : f = this.parsePrimitiveData(s, n, t, e);
      const u = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      s._sorted = l;
    }
    r && Ki(this, f);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let f, u, g;
    for (f = 0, u = n; f < u; ++f)
      g = f + s, d[f] = {
        [a]: h || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
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
        x: o.parse(se(u, a), f),
        y: r.parse(se(u, l), f)
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
      keys: sn(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Yi(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Yi(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Cr(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = Mr(a);
    let f, u;
    function g() {
      u = n[f];
      const p = u[a.axis];
      return !V(u[t.axis]) || h > p || d < p;
    }
    for (f = 0; f < r && !(!g() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = r - 1; f >= 0; --f)
        if (!g()) {
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
      r = e[n][t.axis], V(r) && s.push(r);
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
    this.update(t || "default"), e._clip = xr(D(this.options.clip, _r(e.xScale, e.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = Sr(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = wr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Oe(s);
    if (a)
      return qi(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(W.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(f, u, g, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(qi(p, l))), p;
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
    const c = new en(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Ye(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    Ye(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !Ye(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Vt(s, n);
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
function Pr(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < F) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), f = Math.sin(l), u = (y, v, _) => oe(y, a, l, !0) ? 1 : Math.max(v, v * e, _, _ * e), g = (y, v, _) => oe(y, a, l, !0) ? -1 : Math.min(v, v * e, _, _ * e), p = u(0, c, d), m = u(N, h, f), b = g(z, c, d), x = g(z + N, h, f);
    s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, r = -(m + x) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class Dr extends xi {
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
        o = (c) => +se(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ot(this.options.rotation - 90);
  }
  _getCircumference() {
    return ot(this.options.circumference);
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min($n(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: u, offsetX: g, offsetY: p } = Pr(d, h, l), m = (s.width - r) / f, b = (s.height - r) / u, x = Math.max(Math.min(m, b) / 2, 0), y = Bs(this.options.radius, x), v = Math.max(y * l, 0), _ = (y - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * y, this.offsetY = p * y, n.total = this.calculateTotal(), this.outerRadius = y - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, f = o && c.animateScale, u = f ? 0 : this.innerRadius, g = f ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
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
        outerRadius: g,
        innerRadius: u
      };
      m && (_.options = p || this.resolveDataElementOptions(x, v.active ? "active" : n)), b += y, this.updateElement(v, x, _, n);
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = ze(e._parsed[t], s.options.locale);
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
class Or extends xi {
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
    let { start: a, count: l } = lo(e, n, r);
    this._drawStart = a, this._drawCount = l, co(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), f = r.axis, u = a.axis, { spanGaps: g, segment: p } = this.options, m = ne(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", x = e + s, y = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < y; ++_) {
      const k = t[_], w = b ? k : {};
      if (_ < e || _ >= x) {
        w.skip = !0;
        continue;
      }
      const M = this.getParsed(_), S = I(M[u]), P = w[f] = r.getPixelForValue(M[f], _), C = w[u] = o || S ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[u], _);
      w.skip = isNaN(P) || isNaN(C) || S, w.stop = _ > 0 && Math.abs(M[f] - v[f]) > m, p && (w.parsed = M, w.raw = c.data[_]), d && (w.options = h || this.resolveDataElementOptions(_, k.active ? "active" : n)), b || this.updateElement(k, _, w, n), v = M;
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
class Ar extends Dr {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
function vt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class yi {
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
    Object.assign(yi.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return vt();
  }
  parse() {
    return vt();
  }
  format() {
    return vt();
  }
  add() {
    return vt();
  }
  diff() {
    return vt();
  }
  startOf() {
    return vt();
  }
  endOf() {
    return vt();
  }
}
var Tr = {
  _date: yi
};
function Lr(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? io : St;
    if (s) {
      if (n._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), f = l(o, t, e + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else
      return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function ce(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: f } = Lr(o[a], t, r, n);
    for (let u = d; u <= f; ++u) {
      const g = h[u];
      g.skip || s(g, c, u);
    }
  }
}
function Rr(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Xe(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || ce(i, e, t, function(a, l, c) {
    !n && !ht(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Ir(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Ns(r, {
      x: t.x,
      y: t.y
    });
    oe(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return ce(i, e, t, o), n;
}
function Er(i, t, e, s, n, o) {
  let r = [];
  const a = Rr(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, n);
    if (s && !u)
      return;
    const g = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !u)
      return;
    const m = a(t, g);
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
  return ce(i, e, t, c), r;
}
function Ue(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Ir(i, t, e, n) : Er(i, t, e, s, n, o);
}
function Gi(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return ce(i, e, t, (l, c, h) => {
    l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Fr = {
  evaluateInteractionItems: ce,
  modes: {
    index(i, t, e, s) {
      const n = kt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? Xe(i, n, o, s, r) : Ue(i, n, o, !1, s, r), l = [];
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
      const n = kt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? Xe(i, n, o, s, r) : Ue(i, n, o, !1, s, r);
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
      const n = kt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return Xe(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = kt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return Ue(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = kt(t, i);
      return Gi(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = kt(t, i);
      return Gi(i, n, "y", e.intersect, s);
    }
  }
};
const nn = [
  "left",
  "top",
  "right",
  "bottom"
];
function $t(i, t) {
  return i.filter((e) => e.pos === t);
}
function Zi(i, t) {
  return i.filter((e) => nn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Yt(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function zr(i) {
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
function Br(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !nn.includes(n))
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
function Wr(i, t) {
  const e = Br(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Hr(i) {
  const t = zr(i), e = Yt(t.filter((c) => c.box.fullSize), !0), s = Yt($t(t, "left"), !0), n = Yt($t(t, "right")), o = Yt($t(t, "top"), !0), r = Yt($t(t, "bottom")), a = Zi(t, "x"), l = Zi(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: $t(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Ji(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function on(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Nr(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!A(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && on(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ji(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Ji(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function jr(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Vr(i, t) {
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
function qt(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Vr(a.horizontal, t));
    const { same: d, other: f } = Nr(t, e, a, s);
    c |= d && n.length, h = h || f, l.fullSize || n.push(a);
  }
  return c && qt(n, t, e, s) || h;
}
function _e(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Qi(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      Oe(c.start) && (r = c.start), l.fullSize ? _e(l, n.left, r, e.outerWidth - n.right - n.left, f) : _e(l, t.left + c.placed, r, d, f), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      Oe(c.start) && (o = c.start), l.fullSize ? _e(l, o, n.top, f, e.outerHeight - n.bottom - n.top) : _e(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var tt = {
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
    const n = U(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Hr(i.boxes), l = a.vertical, c = a.horizontal;
    T(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), f = Object.assign({}, n);
    on(f, U(s));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Wr(l.concat(c), d);
    qt(a.fullSize, u, d, g), qt(l, u, d, g), qt(c, u, d, g) && qt(l, u, d, g), jr(u), Qi(a.leftAndTop, u, d, g), u.x += u.w, u.y += u.h, Qi(a.rightAndBottom, u, d, g), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, T(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, i.chartArea), m.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class rn {
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
class $r extends rn {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Se = "$chartjs", Yr = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, ts = (i) => i === null || i === "";
function Xr(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Se] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", ts(n)) {
    const o = Wi(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (ts(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Wi(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const an = tr ? {
  passive: !0
} : !1;
function Ur(i, t, e) {
  i.addEventListener(t, e, an);
}
function Kr(i, t, e) {
  i.canvas.removeEventListener(t, e, an);
}
function qr(i, t) {
  const e = Yr[i.type] || i.type, { x: s, y: n } = kt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Ie(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Gr(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ie(a.addedNodes, s), r = r && !Ie(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Zr(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ie(a.removedNodes, s), r = r && !Ie(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const re = /* @__PURE__ */ new Map();
let es = 0;
function ln() {
  const i = window.devicePixelRatio;
  i !== es && (es = i, re.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Jr(i, t) {
  re.size || window.addEventListener("resize", ln), re.set(i, t);
}
function Qr(i) {
  re.delete(i), re.size || window.removeEventListener("resize", ln);
}
function ta(i, t, e) {
  const s = i.canvas, n = s && _i(s);
  if (!n)
    return;
  const o = $s((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), Jr(i, o), r;
}
function Ke(i, t, e) {
  e && e.disconnect(), t === "resize" && Qr(i);
}
function ea(i, t, e) {
  const s = i.canvas, n = $s((o) => {
    i.ctx !== null && e(qr(o, i));
  }, i);
  return Ur(s, t, n), n;
}
class ia extends rn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Xr(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Se])
      return !1;
    const s = e[Se].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      I(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Se], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Gr,
      detach: Zr,
      resize: ta
    }[e] || ea;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: Ke,
      detach: Ke,
      resize: Ke
    }[e] || Kr)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Qo(t, e, s, n);
  }
  isAttached(t) {
    const e = _i(t);
    return !!(e && e.isConnected);
  }
}
function sa(i) {
  return !bi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? $r : ia;
}
class mt {
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
    return ne(this.x) && ne(this.y);
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
function na(i, t) {
  const e = i.options.ticks, s = oa(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? aa(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return la(t, c, o, r / n), c;
  const h = ra(o, t, n);
  if (r > 0) {
    let d, f;
    const u = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (xe(t, c, h, I(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++)
      xe(t, c, h, o[d], o[d + 1]);
    return xe(t, c, h, l, I(u) ? t.length : l + u), c;
  }
  return xe(t, c, h), c;
}
function oa(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function ra(i, t, e) {
  const s = ca(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Jn(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function aa(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function la(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function xe(i, t, e, s, n) {
  const o = D(s, 0), r = Math.min(D(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function ca(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const ha = (i) => i === "left" ? "right" : i === "right" ? "left" : i, is = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, ss = (i, t) => Math.min(t || i, i);
function ns(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function da(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function fa(i, t) {
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
function Xt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function os(i, t) {
  if (!i.display)
    return 0;
  const e = j(i.font, t), s = U(i.padding);
  return (B(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function ua(i, t) {
  return pt(i, {
    scale: t,
    type: "scale"
  });
}
function ga(i, t, e) {
  return pt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function pa(i, t, e) {
  let s = ci(i);
  return (e && t !== "right" || !e && t === "right") && (s = ha(s)), s;
}
function ma(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, g;
  const p = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (u = X(s, o, a), A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      g = h[b].getPixelForValue(x) + p - t;
    } else
      e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = is(i, e, t);
    f = a - o;
  } else {
    if (A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      u = h[b].getPixelForValue(x) - m + t;
    } else
      e === "center" ? u = (c.left + c.right) / 2 - m + t : u = is(i, e, t);
    g = X(s, r, n), d = e === "left" ? -N : N;
  }
  return {
    titleX: u,
    titleY: g,
    maxWidth: f,
    rotation: d
  };
}
class Ot extends mt {
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
    return t = J(t, Number.POSITIVE_INFINITY), e = J(e, Number.NEGATIVE_INFINITY), s = J(s, Number.POSITIVE_INFINITY), n = J(n, Number.NEGATIVE_INFINITY), {
      min: J(t, s),
      max: J(e, n),
      minDefined: V(t),
      maxDefined: V(e)
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
      min: J(e, J(s, e)),
      max: J(s, J(e, s))
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
    R(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = To(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? ns(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = na(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    R(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    R(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    R(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), R(this.options[t], [
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
    R(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = R(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    R(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    R(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = ss(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = K(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : u / (s - 1), d + 6 > a && (a = u / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Xt(t.grid) - e.padding - os(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), r = ai(Math.min(Math.asin(K((h.highest.height + 6) / a, -1, 1)), Math.asin(K(l / c, -1, 1)) - Math.asin(K(f / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    R(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    R(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = os(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Xt(o) + l) : (t.height = this.maxHeight, t.width = Xt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = s.padding * 2, g = ot(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const b = s.mirror ? 0 : m * d.width + p * f.height;
          t.height = Math.min(this.maxHeight, t.height + b + u);
        } else {
          const b = s.mirror ? 0 : p * d.width + m * f.height;
          t.width = Math.min(this.maxWidth, t.width + b + u);
        }
        this._calculatePadding(c, h, m, p);
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
    R(this.options.afterFit, [
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
      I(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = ns(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / ss(e, s));
    let c = 0, h = 0, d, f, u, g, p, m, b, x, y, v, _;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = m = p.string, b = o[m] = o[m] || {
        data: {},
        gc: []
      }, x = p.lineHeight, y = v = 0, !I(g) && !B(g))
        y = Te(n, b.data, b.gc, y, g), v = x;
      else if (B(g))
        for (f = 0, u = g.length; f < u; ++f)
          _ = g[f], !I(_) && !B(_) && (y = Te(n, b.data, b.gc, y, _), v += x);
      r.push(y), a.push(v), c = Math.max(y, c), h = Math.max(v, h);
    }
    fa(o, e);
    const k = r.indexOf(c), w = a.indexOf(h), M = (S) => ({
      width: r[S] || 0,
      height: a[S] || 0
    });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(k),
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
    return eo(this._alignToPixels ? yt(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = ga(this.getContext(), t, s));
    }
    return this.$context || (this.$context = ua(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ot(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = Xt(o), u = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function(E) {
      return yt(s, E, p);
    };
    let x, y, v, _, k, w, M, S, P, C, O, $;
    if (r === "top")
      x = b(this.bottom), w = this.bottom - f, S = x - m, C = b(t.top) + m, $ = t.bottom;
    else if (r === "bottom")
      x = b(this.top), C = t.top, $ = b(t.bottom) - m, w = x + m, S = this.top + f;
    else if (r === "left")
      x = b(this.right), k = this.right - f, M = x - m, P = b(t.left) + m, O = t.right;
    else if (r === "right")
      x = b(this.left), P = t.left, O = b(t.right) - m, k = x + m, M = this.left + f;
    else if (e === "x") {
      if (r === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (A(r)) {
        const E = Object.keys(r)[0], H = r[E];
        x = b(this.chart.scales[E].getPixelForValue(H));
      }
      C = t.top, $ = t.bottom, w = x + m, S = w + f;
    } else if (e === "y") {
      if (r === "center")
        x = b((t.left + t.right) / 2);
      else if (A(r)) {
        const E = Object.keys(r)[0], H = r[E];
        x = b(this.chart.scales[E].getPixelForValue(H));
      }
      k = x - m, M = k - f, P = t.left, O = t.right;
    }
    const Z = D(n.ticks.maxTicksLimit, d), L = Math.max(1, Math.ceil(d / Z));
    for (y = 0; y < d; y += L) {
      const E = this.getContext(y), H = o.setContext(E), et = a.setContext(E), Y = H.lineWidth, At = H.color, he = et.dash || [], Tt = et.dashOffset, Nt = H.tickWidth, bt = H.tickColor, jt = H.tickBorderDash || [], _t = H.tickBorderDashOffset;
      v = da(this, y, l), v !== void 0 && (_ = yt(s, v, Y), c ? k = M = P = O = _ : w = S = C = $ = _, u.push({
        tx1: k,
        ty1: w,
        tx2: M,
        ty2: S,
        x1: P,
        y1: C,
        x2: O,
        y2: $,
        width: Y,
        color: At,
        borderDash: he,
        borderDashOffset: Tt,
        tickWidth: Nt,
        tickColor: bt,
        tickBorderDash: jt,
        tickBorderDashOffset: _t
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = Xt(s.grid), u = f + h, g = d ? -h : u, p = -ot(this.labelRotation), m = [];
    let b, x, y, v, _, k, w, M, S, P, C, O, $ = "middle";
    if (n === "top")
      k = this.bottom - g, w = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      k = this.top + g, w = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const L = this._getYAxisLabelAlignment(f);
      w = L.textAlign, _ = L.x;
    } else if (n === "right") {
      const L = this._getYAxisLabelAlignment(f);
      w = L.textAlign, _ = L.x;
    } else if (e === "x") {
      if (n === "center")
        k = (t.top + t.bottom) / 2 + u;
      else if (A(n)) {
        const L = Object.keys(n)[0], E = n[L];
        k = this.chart.scales[L].getPixelForValue(E) + u;
      }
      w = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        _ = (t.left + t.right) / 2 - u;
      else if (A(n)) {
        const L = Object.keys(n)[0], E = n[L];
        _ = this.chart.scales[L].getPixelForValue(E);
      }
      w = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? $ = "top" : l === "end" && ($ = "bottom"));
    const Z = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      y = a[b], v = y.label;
      const L = o.setContext(this.getContext(b));
      M = this.getPixelForTick(b) + o.labelOffset, S = this._resolveTickFontOptions(b), P = S.lineHeight, C = B(v) ? v.length : 1;
      const E = C / 2, H = L.color, et = L.textStrokeColor, Y = L.textStrokeWidth;
      let At = w;
      r ? (_ = M, w === "inner" && (b === x - 1 ? At = this.options.reverse ? "left" : "right" : b === 0 ? At = this.options.reverse ? "right" : "left" : At = "center"), n === "top" ? c === "near" || p !== 0 ? O = -C * P + P / 2 : c === "center" ? O = -Z.highest.height / 2 - E * P + P : O = -Z.highest.height + P / 2 : c === "near" || p !== 0 ? O = P / 2 : c === "center" ? O = Z.highest.height / 2 - E * P : O = Z.highest.height - C * P, d && (O *= -1), p !== 0 && !L.showLabelBackdrop && (_ += P / 2 * Math.sin(p))) : (k = M, O = (1 - C) * P / 2);
      let he;
      if (L.showLabelBackdrop) {
        const Tt = U(L.backdropPadding), Nt = Z.heights[b], bt = Z.widths[b];
        let jt = O - Tt.top, _t = 0 - Tt.left;
        switch ($) {
          case "middle":
            jt -= Nt / 2;
            break;
          case "bottom":
            jt -= Nt;
            break;
        }
        switch (w) {
          case "center":
            _t -= bt / 2;
            break;
          case "right":
            _t -= bt;
            break;
          case "inner":
            b === x - 1 ? _t -= bt : b > 0 && (_t -= bt / 2);
            break;
        }
        he = {
          left: _t,
          top: jt,
          width: bt + Tt.width,
          height: Nt + Tt.height,
          color: L.backdropColor
        };
      }
      m.push({
        label: v,
        font: S,
        textOffset: O,
        options: {
          rotation: p,
          color: H,
          strokeColor: et,
          strokeWidth: Y,
          textAlign: At,
          textBaseline: $,
          translation: [
            _,
            k
          ],
          backdrop: he
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ot(this.labelRotation))
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
    this.isHorizontal() ? (c = yt(t, this.left, r) - r / 2, h = yt(t, this.right, a) + a / 2, d = f = l) : (d = yt(t, this.top, r) - r / 2, f = yt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && di(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      Dt(s, c, 0, h, l, a);
    }
    n && fi(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = j(s.font), r = U(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || A(e) ? (l += r.bottom, B(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = ma(this, l, e, a);
    Dt(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: f,
      textAlign: pa(a, e, n),
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
    return !this._isVisible() || this.draw !== Ot.prototype.draw ? [
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
    return j(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ye {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    xa(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, ba(t, r, s), this.override && W.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in W[n] && (delete W[n][s], this.override && delete Pt[s]);
  }
}
function ba(i, t, e) {
  const s = ie(/* @__PURE__ */ Object.create(null), [
    e ? W.get(e) : {},
    W.get(t),
    i.defaults
  ]);
  W.set(t, s), i.defaultRoutes && _a(t, i.defaultRoutes), i.descriptors && W.describe(t, i.descriptors);
}
function _a(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    W.route(o, n, l, a);
  });
}
function xa(i) {
  return "id" in i && "defaults" in i;
}
class ya {
  constructor() {
    this.controllers = new ye(xi, "datasets", !0), this.elements = new ye(mt, "elements"), this.plugins = new ye(Object, "plugins"), this.scales = new ye(Ot, "scales"), this._typedRegistries = [
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
    const n = ri(t);
    R(s["before" + n], [], s), e[t](s), R(s["after" + n], [], s);
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
var nt = /* @__PURE__ */ new ya();
class va {
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
      if (R(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    I(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = D(s.options && s.options.plugins, {}), o = Ma(s);
    return n === !1 && !e ? [] : wa(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function Ma(i) {
  const t = {}, e = [], s = Object.keys(nt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(nt.getPlugin(s[o]));
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
function ka(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function wa(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = ka(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: Sa(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Sa(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Qe(i, t) {
  const e = W.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Ca(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Pa(i, t) {
  return i === t ? "_index_" : "_value_";
}
function rs(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Da(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function ti(i, ...t) {
  if (rs(i))
    return i;
  for (const e of t) {
    const s = e.axis || Da(e.position) || i.length > 1 && rs(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function as(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function Oa(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return as(i, "x", e[0]) || as(i, "y", e[0]);
  }
  return {};
}
function Aa(i, t) {
  const e = Pt[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Qe(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!A(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = ti(r, a, Oa(r, i), W.scales[a.type]), c = Pa(l, n), h = e.scales || {};
    o[r] = Zt(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Qe(a, t), h = (Pt[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = Ca(d, l), u = r[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), Zt(o[u], [
        {
          axis: f
        },
        s[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Zt(a, [
      W.scales[a.type],
      W.scale
    ]);
  }), o;
}
function cn(i) {
  const t = i.options || (i.options = {});
  t.plugins = D(t.plugins, {}), t.scales = Aa(i, t);
}
function hn(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Ta(i) {
  return i = i || {}, i.data = hn(i.data), cn(i), i;
}
const ls = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Set();
function ve(i, t) {
  let e = ls.get(i);
  return e || (e = t(), ls.set(i, e), dn.add(e)), e;
}
const Ut = (i, t, e) => {
  const s = se(t, e);
  s !== void 0 && i.add(s);
};
class La {
  constructor(t) {
    this._config = Ta(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = hn(t);
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
    this.clearCache(), cn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ve(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ve(`${t}.transition.${e}`, () => [
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
    return ve(`${t}-${e}`, () => [
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
    return ve(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), h.forEach((d) => Ut(l, t, d))), h.forEach((d) => Ut(l, n, d)), h.forEach((d) => Ut(l, Pt[o] || {}, d)), h.forEach((d) => Ut(l, W, d)), h.forEach((d) => Ut(l, Ze, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), dn.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Pt[e] || {},
      W.datasets[e] || {},
      {
        type: e
      },
      W,
      Ze
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = cs(this._resolverCache, t, n);
    let l = r;
    if (Ia(r, e)) {
      o.$shared = !1, s = gt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Bt(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = cs(this._resolverCache, t, s);
    return A(e) ? Bt(o, e, void 0, n) : o;
  }
}
function cs(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: gi(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const Ra = (i) => A(i) && Object.getOwnPropertyNames(i).some((t) => gt(i[t]));
function Ia(i, t) {
  const { isScriptable: e, isIndexable: s } = Us(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (gt(a) || Ra(a)) || r && B(a))
      return !0;
  }
  return !1;
}
var Ea = "4.4.1";
const Fa = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function hs(i, t) {
  return i === "top" || i === "bottom" || Fa.indexOf(i) === -1 && t === "x";
}
function ds(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function fs(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), R(e && e.onComplete, [
    i
  ], t);
}
function za(i) {
  const t = i.chart, e = t.options.animation;
  R(e && e.onProgress, [
    i
  ], t);
}
function fn(i) {
  return bi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ce = {}, us = (i) => {
  const t = fn(i);
  return Object.values(Ce).filter((e) => e.canvas === t).pop();
};
function Ba(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Wa(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
function Me(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Ha(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Me(e, t, "left"),
    right: Me(e, t, "right"),
    top: Me(s, t, "top"),
    bottom: Me(s, t, "bottom")
  } : t;
}
class Ht {
  static defaults = W;
  static instances = Ce;
  static overrides = Pt;
  static registry = nt;
  static version = Ea;
  static getChart = us;
  static register(...t) {
    nt.add(...t), gs();
  }
  static unregister(...t) {
    nt.remove(...t), gs();
  }
  constructor(t, e) {
    const s = this.config = new La(e), n = fn(t), o = us(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || sa(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Vn(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new va(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ro((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Ce[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    at.listen(this, "complete", fs), at.listen(this, "progress", za), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return I(t) ? e && o ? o : n ? s / n : null : t;
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
    return nt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Bi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ei(this.canvas, this.ctx), this;
  }
  stop() {
    return at.stop(this), this;
  }
  resize(t, e) {
    at.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Bi(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), R(s.onResize, [
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
      const a = e[r], l = ti(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), T(o, (r) => {
      const a = r.options, l = a.id, c = ti(l, a), h = D(a.type, r.dtype);
      (a.position === void 0 || hs(a.position, c) !== hs(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const f = nt.getScale(h);
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
      tt.configure(this, r, r.options), tt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(ds("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Qe(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = nt.getController(a), { datasetElementType: c, dataElementType: h } = W.datasets[a];
        Object.assign(l, {
          dataElementType: nt.getElement(h),
          datasetElementType: c && nt.getElement(c)
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
    }), this._layers.sort(ds("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    T(this.scales, (t) => {
      tt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Ci(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Ba(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Ci(n, s(o)))
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
    tt.update(this, this.width, this.height, t);
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
        this._updateDataset(e, gt(t) ? t({
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
    }) !== !1 && (at.has(this) ? this.attached && !at.running(this) && at.start(this) : (this.draw(), fs({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resize(s, n), this._resizeBeforeDraw = null;
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
    const e = this.ctx, s = t._clip, n = !s.disabled, o = Ha(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && di(e, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && fi(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return ht(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Fr.modes[e];
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
    return this.$context || (this.$context = pt(null, {
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
    Oe(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), at.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ei(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ce[this.id], this.notifyPlugins("afterDestroy");
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
    !Pe(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = qn(t), c = Wa(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, R(o.onHover, [
      t,
      a,
      this
    ], this), l && R(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Pe(a, n);
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
function gs() {
  return T(Ht.instances, (i) => i._plugins.invalidate());
}
function Na(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + N, s - N), i.closePath(), i.clip();
}
function ja(i) {
  return ui(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Va(i, t, e, s) {
  const n = ja(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return K(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: K(n.innerStart, 0, r),
    innerEnd: K(n.innerEnd, 0, r)
  };
}
function Rt(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Ee(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), f = h > 0 ? h + s + e + c : 0;
  let u = 0;
  const g = n - l;
  if (s) {
    const L = h > 0 ? h - s : 0, E = d > 0 ? d - s : 0, H = (L + E) / 2, et = H !== 0 ? g * H / (H + s) : g;
    u = (g - et) / 2;
  }
  const p = Math.max(1e-3, g * d - e / z) / d, m = (g - p) / 2, b = l + m + u, x = n - m - u, { outerStart: y, outerEnd: v, innerStart: _, innerEnd: k } = Va(t, f, d, x - b), w = d - y, M = d - v, S = b + y / w, P = x - v / M, C = f + _, O = f + k, $ = b + _ / C, Z = x - k / O;
  if (i.beginPath(), o) {
    const L = (S + P) / 2;
    if (i.arc(r, a, d, S, L), i.arc(r, a, d, L, P), v > 0) {
      const Y = Rt(M, P, r, a);
      i.arc(Y.x, Y.y, v, P, x + N);
    }
    const E = Rt(O, x, r, a);
    if (i.lineTo(E.x, E.y), k > 0) {
      const Y = Rt(O, Z, r, a);
      i.arc(Y.x, Y.y, k, x + N, Z + Math.PI);
    }
    const H = (x - k / f + (b + _ / f)) / 2;
    if (i.arc(r, a, f, x - k / f, H, !0), i.arc(r, a, f, H, b + _ / f, !0), _ > 0) {
      const Y = Rt(C, $, r, a);
      i.arc(Y.x, Y.y, _, $ + Math.PI, b - N);
    }
    const et = Rt(w, b, r, a);
    if (i.lineTo(et.x, et.y), y > 0) {
      const Y = Rt(w, S, r, a);
      i.arc(Y.x, Y.y, y, b - N, S);
    }
  } else {
    i.moveTo(r, a);
    const L = Math.cos(S) * d + r, E = Math.sin(S) * d + a;
    i.lineTo(L, E);
    const H = Math.cos(P) * d + r, et = Math.sin(P) * d + a;
    i.lineTo(H, et);
  }
  i.closePath();
}
function $a(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ee(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % F || F));
  }
  return Ee(i, t, e, s, l, n), i.fill(), l;
}
function Ya(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: f } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = f, u ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let g = t.endAngle;
  if (o) {
    Ee(i, t, e, s, g, n);
    for (let p = 0; p < o; ++p)
      i.stroke();
    isNaN(a) || (g = r + (a % F || F));
  }
  u && Na(i, t, g), o || (Ee(i, t, e, s, g, n), i.stroke());
}
class Xa extends mt {
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
    ], s), { angle: o, distance: r } = Ns(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), f = (this.options.spacing + this.options.borderWidth) / 2, g = D(d, l - a) >= F || oe(o, a, l), p = It(r, c + f, h + f);
    return g && p;
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
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, $a(t, this, c, o, r), Ya(t, this, c, o, r), t.restore();
  }
}
function un(i, t, e = t) {
  i.lineCap = D(e.borderCapStyle, t.borderCapStyle), i.setLineDash(D(e.borderDash, t.borderDash)), i.lineDashOffset = D(e.borderDashOffset, t.borderDashOffset), i.lineJoin = D(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = D(e.borderWidth, t.borderWidth), i.strokeStyle = D(e.borderColor, t.borderColor);
}
function Ua(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Ka(i) {
  return i.stepped ? vo : i.tension || i.cubicInterpolationMode === "monotone" ? Mo : Ua;
}
function gn(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function qa(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = gn(n, e, s), h = Ka(o);
  let { move: d = !0, reverse: f } = s || {}, u, g, p;
  for (u = 0; u <= c; ++u)
    g = n[(a + (f ? c - u : u)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, f, o.stepped), p = g);
  return l && (g = n[(a + (f ? c : 0)) % r], h(i, p, g, f, o.stepped)), !!l;
}
function Ga(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = gn(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, f, u, g, p, m, b;
  const x = (v) => (r + (c ? a - v : v)) % o, y = () => {
    p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
  };
  for (l && (u = n[x(0)], i.moveTo(u.x, u.y)), f = 0; f <= a; ++f) {
    if (u = n[x(f)], u.skip)
      continue;
    const v = u.x, _ = u.y, k = v | 0;
    k === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + v) / ++d) : (y(), i.lineTo(v, _), g = k, d = 0, p = m = _), b = _;
  }
  y();
}
function ei(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Ga : qa;
}
function Za(i) {
  return i.stepped ? er : i.tension || i.cubicInterpolationMode === "monotone" ? ir : wt;
}
function Ja(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), un(i, t.options), i.stroke(n);
}
function Qa(i, t, e, s) {
  const { segments: n, options: o } = t, r = ei(t);
  for (const a of n)
    un(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const tl = typeof Path2D == "function";
function el(i, t, e, s) {
  tl && !t.options.segment ? Ja(i, t, e, s) : Qa(i, t, e, s);
}
class il extends mt {
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
      Uo(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = hr(this, this.options.segment));
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
    const s = this.options, n = t[e], o = this.points, r = ar(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Za(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: f } = r[c], u = o[d], g = o[f];
      if (u === g) {
        a.push(u);
        continue;
      }
      const p = Math.abs((n - u[e]) / (g[e] - u[e])), m = l(u, g, p, s.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return ei(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = ei(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), el(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function ps(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class sl extends mt {
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
    return ps(this, t, "x", e);
  }
  inYRange(t, e) {
    return ps(this, t, "y", e);
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
    this.skip || s.radius < 0.1 || !ht(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Je(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
const ms = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, nl = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class bs extends mt {
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
    let e = R(t.generateLabels, [
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
    const s = t.labels, n = j(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = ms(s, o);
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
    return this.legendItems.forEach((g, p) => {
      const m = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, u += h, f++), l[p] = {
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
    let d = a, f = 0, u = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: x, itemHeight: y } = ol(s, e, o, m, n);
      b > 0 && u + y + 2 * a > h && (d += f + a, c.push({
        width: f,
        height: u
      }), g += f + a, p++, f = u = 0), l[b] = {
        left: g,
        top: u,
        col: p,
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
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Ft(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = X(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = X(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = X(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = X(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      di(t, this), this._draw(), fi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = W.color, l = Ft(t.rtl, this.left, this.width), c = j(r.font), { padding: h } = r, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = ms(r, d), b = function(k, w, M) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const S = D(M.lineWidth, 1);
      if (n.fillStyle = D(M.fillStyle, a), n.lineCap = D(M.lineCap, "butt"), n.lineDashOffset = D(M.lineDashOffset, 0), n.lineJoin = D(M.lineJoin, "miter"), n.lineWidth = S, n.strokeStyle = D(M.strokeStyle, a), n.setLineDash(D(M.lineDash, [])), r.usePointStyle) {
        const P = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: M.pointStyle,
          rotation: M.rotation,
          borderWidth: S
        }, C = l.xPlus(k, g / 2), O = w + f;
        Xs(n, P, C, O, r.pointStyleWidth && g);
      } else {
        const P = w + Math.max((d - p) / 2, 0), C = l.leftForLtr(k, g), O = Et(M.borderRadius);
        n.beginPath(), Object.values(O).some(($) => $ !== 0) ? Le(n, {
          x: C,
          y: P,
          w: g,
          h: p,
          radius: O
        }) : n.rect(C, P, g, p), n.fill(), S !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(k, w, M) {
      Dt(n, M.text, k, w + m / 2, c, {
        strikethrough: M.hidden,
        textAlign: l.textAlign(M.textAlign)
      });
    }, y = this.isHorizontal(), v = this._computeTitleHeight();
    y ? u = {
      x: X(o, this.left + h, this.right - s[0]),
      y: this.top + h + v,
      line: 0
    } : u = {
      x: this.left + h,
      y: X(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, Js(this.ctx, t.textDirection);
    const _ = m + h;
    this.legendItems.forEach((k, w) => {
      n.strokeStyle = k.fontColor, n.fillStyle = k.fontColor;
      const M = n.measureText(k.text).width, S = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), P = g + f + M;
      let C = u.x, O = u.y;
      l.setWidth(this.width), y ? w > 0 && C + P + h > this.right && (O = u.y += _, u.line++, C = u.x = X(o, this.left + h, this.right - s[u.line])) : w > 0 && O + _ > this.bottom && (C = u.x = C + e[u.line].width + h, u.line++, O = u.y = X(o, this.top + v + h, this.bottom - e[u.line].height));
      const $ = l.x(C);
      if (b($, O, k), C = ao(S, C + g + f, y ? C + P : this.right, t.rtl), x(l.x(C), O, k), y)
        u.x += P + h;
      else if (typeof k.text != "string") {
        const Z = c.lineHeight;
        u.y += pn(k, Z) + h;
      } else
        u.y += _;
    }), Qs(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = j(e.font), n = U(e.padding);
    if (!e.display)
      return;
    const o = Ft(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = X(t.align, d, this.right - f);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h = c + X(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const u = X(a, d, d + f);
    r.textAlign = o.textAlign(ci(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Dt(r, e.text, u, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = j(t.font), s = U(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (It(t, this.left, this.right) && It(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], It(t, n.left, n.left + n.width) && It(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!ll(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = nl(n, s);
      n && !o && R(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && R(e.onHover, [
        t,
        s,
        this
      ], this);
    } else
      s && R(e.onClick, [
        t,
        s,
        this
      ], this);
  }
}
function ol(i, t, e, s, n) {
  const o = rl(s, i, t, e), r = al(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function rl(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function al(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = pn(t, e)), s;
}
function pn(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function ll(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var cl = {
  id: "legend",
  _element: bs,
  start(i, t, e) {
    const s = i.legend = new bs({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    tt.configure(i, s, e), tt.addBox(i, s);
  },
  stop(i) {
    tt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    tt.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), h = U(c.borderWidth);
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
class mn extends mt {
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
    const n = B(s.text) ? s.text.length : 1;
    this._padding = U(s.padding);
    const o = n * j(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = X(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = X(a, n, e), l = z * -0.5) : (h = o - t, d = X(a, e, n), l = z * 0.5), c = n - e), {
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
    const s = j(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Dt(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: ci(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function hl(i, t) {
  const e = new mn({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  tt.configure(i, e, t), tt.addBox(i, e), i.titleBlock = e;
}
var dl = {
  id: "title",
  _element: mn,
  start(i, t, e) {
    hl(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    tt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    tt.configure(i, s, e), s.options = e;
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
const Gt = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = 0, n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        s += a.x, n += a.y, ++o;
      }
    }
    return {
      x: s / o,
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
        const c = l.getCenterPoint(), h = Ge(t, c);
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
function st(i, t) {
  return t && (B(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function lt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function fl(i, t) {
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
function _s(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = j(t.bodyFont), c = j(t.titleFont), h = j(t.footerFont), d = o.length, f = n.length, u = s.length, g = U(t.padding);
  let p = g.height, m = 0, b = s.reduce((v, _) => v + _.before.length + _.lines.length + _.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += u * v + (b - u) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  f && (p += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const y = function(v) {
    m = Math.max(m, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, T(i.title, y), e.font = l.string, T(i.beforeBody.concat(i.afterBody), y), x = t.displayColors ? r + 2 + t.boxPadding : 0, T(s, (v) => {
    T(v.before, y), T(v.lines, y), T(v.after, y);
  }), x = 0, e.font = h.string, T(i.footer, y), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function ul(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function gl(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function pl(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), gl(c, i, t, e) && (c = "center"), c;
}
function xs(i, t, e) {
  const s = e.yAlign || t.yAlign || ul(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || pl(i, t, e, s),
    yAlign: s
  };
}
function ml(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function bl(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function ys(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = Et(r);
  let g = ml(t, a);
  const p = bl(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, f) + n : a === "right" && (g += Math.max(d, u) + n), {
    x: K(g, 0, s.width - t.width),
    y: K(p, 0, s.height - t.height)
  };
}
function ke(i, t, e) {
  const s = U(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function vs(i) {
  return st([], lt(i));
}
function _l(i, t, e) {
  return pt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ms(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const bn = {
  beforeTitle: rt,
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
  afterTitle: rt,
  beforeBody: rt,
  beforeLabel: rt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return I(e) || (t += e), t;
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
  afterLabel: rt,
  afterBody: rt,
  beforeFooter: rt,
  footer: rt,
  afterFooter: rt
};
function q(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? bn[t].call(e, s) : n;
}
class ks extends mt {
  static positioners = Gt;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new en(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = _l(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = q(s, "beforeTitle", this, t), o = q(s, "title", this, t), r = q(s, "afterTitle", this, t);
    let a = [];
    return a = st(a, lt(n)), a = st(a, lt(o)), a = st(a, lt(r)), a;
  }
  getBeforeBody(t, e) {
    return vs(q(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return T(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ms(s, o);
      st(r.before, lt(q(a, "beforeLabel", this, o))), st(r.lines, q(a, "label", this, o)), st(r.after, lt(q(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return vs(q(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = q(s, "beforeFooter", this, t), o = q(s, "footer", this, t), r = q(s, "afterFooter", this, t);
    let a = [];
    return a = st(a, lt(n)), a = st(a, lt(o)), a = st(a, lt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(fl(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, f) => t.filter(h, d, f, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), T(a, (h) => {
      const d = Ms(t.callbacks, h);
      n.push(q(d, "labelColor", this, h)), o.push(q(d, "labelPointStyle", this, h)), r.push(q(d, "labelTextColor", this, h));
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
      const a = Gt[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = _s(this, s), c = Object.assign({}, a, l), h = xs(this.chart, s, c), d = ys(s, c, h, this.chart);
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Et(a), { x: f, y: u } = t, { width: g, height: p } = e;
    let m, b, x, y, v, _;
    return o === "center" ? (v = u + p / 2, n === "left" ? (m = f, b = m - r, y = v + r, _ = v - r) : (m = f + g, b = m + r, y = v - r, _ = v + r), x = m) : (n === "left" ? b = f + Math.max(l, h) + r : n === "right" ? b = f + g - Math.max(c, d) - r : b = this.caretX, o === "top" ? (y = u, v = y - r, m = b - r, x = b + r) : (y = u + p, v = y + r, m = b + r, x = b - r), _ = y), {
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
      const c = Ft(s.rtl, this.x, this.width);
      for (t.x = ke(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = j(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = j(o.bodyFont), d = ke(this, "left", o), f = n.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + u;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(f, c) + c / 2, b = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Je(t, p, m, b), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Je(t, p, m, b);
    } else {
      t.lineWidth = A(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(f, c), m = n.leftForLtr(n.xPlus(f, 1), c - 2), b = Et(r.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Le(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Le(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = j(s.bodyFont);
    let f = d.lineHeight, u = 0;
    const g = Ft(s.rtl, this.x, this.width), p = function(M) {
      e.fillText(M, g.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, m = g.textAlign(r);
    let b, x, y, v, _, k, w;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = ke(this, m, s), e.fillStyle = s.bodyColor, T(this.beforeBody, p), u = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, k = n.length; v < k; ++v) {
      for (b = n[v], x = this.labelTextColors[v], e.fillStyle = x, T(b.before, p), y = b.lines, a && y.length && (this._drawColorBox(e, t, v, g, s), f = Math.max(d.lineHeight, l)), _ = 0, w = y.length; _ < w; ++_)
        p(y[_]), f = d.lineHeight;
      T(b.after, p);
    }
    u = 0, f = d.lineHeight, T(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ft(s.rtl, this.x, this.width);
      for (t.x = ke(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = j(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: g } = Et(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - f, l), e.quadraticCurveTo(a + c, l, a + c, l + f), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + u, l + h), e.quadraticCurveTo(a, l + h, a, l + h - u), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Gt[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = _s(this, t), l = Object.assign({}, r, this._size), c = xs(e, t, l), h = ys(t, l, c, e);
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
    const r = U(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Js(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Qs(t, e.textDirection), t.restore());
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
    }), o = !Pe(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Pe(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = Gt[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var xl = {
  id: "tooltip",
  _element: ks,
  positioners: Gt,
  afterInit(i, t, e) {
    e && (i.tooltip = new ks({
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
    callbacks: bn
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
const yl = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function vl(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return yl(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Ml = (i, t) => i === null ? null : K(Math.round(i), 0, t);
function ws(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class kl extends Ot {
  static id = "category";
  static defaults = {
    ticks: {
      callback: ws
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
    if (I(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : vl(s, t, D(e, t), this._addedLabels), Ml(e, s.length - 1);
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
    return ws.call(this, t);
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
function wl(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, g = h - 1, { min: p, max: m } = t, b = !I(r), x = !I(a), y = !I(c), v = (m - p) / (d + 1);
  let _ = Di((m - p) / g / u) * u, k, w, M, S;
  if (_ < 1e-14 && !b && !x)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  S = Math.ceil(m / _) - Math.floor(p / _), S > g && (_ = Di(S * _ / g / u) * u), I(l) || (k = Math.pow(10, l), _ = Math.ceil(_ * k) / k), n === "ticks" ? (w = Math.floor(p / _) * _, M = Math.ceil(m / _) * _) : (w = p, M = m), b && x && o && Qn((a - r) / o, _ / 1e3) ? (S = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / S, w = r, M = a) : y ? (w = b ? r : w, M = x ? a : M, S = c - 1, _ = (M - w) / S) : (S = (M - w) / _, Jt(S, Math.round(S), _ / 1e3) ? S = Math.round(S) : S = Math.ceil(S));
  const P = Math.max(Oi(_), Oi(w));
  k = Math.pow(10, I(l) ? P : l), w = Math.round(w * k) / k, M = Math.round(M * k) / k;
  let C = 0;
  for (b && (f && w !== r ? (e.push({
    value: r
  }), w < r && C++, Jt(Math.round((w + C * _) * k) / k, r, Ss(r, v, i)) && C++) : w < r && C++); C < S; ++C) {
    const O = Math.round((w + C * _) * k) / k;
    if (x && O > a)
      break;
    e.push({
      value: O
    });
  }
  return x && f && M !== a ? e.length && Jt(e[e.length - 1].value, a, Ss(a, v, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || M === a) && e.push({
    value: M
  }), e;
}
function Ss(i, t, { horizontal: e, minRotation: s }) {
  const n = ot(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Fe extends Ot {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return I(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = zt(n), c = zt(o);
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
    }, o = this._range || this, r = wl(n, o);
    return t.bounds === "ticks" && Hs(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return ze(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Sl extends Fe {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Be.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = V(t) ? t : 0, this.max = V(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = ot(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const ae = (i) => Math.floor(ft(i)), Mt = (i, t) => Math.pow(10, ae(i) + t);
function Cs(i) {
  return i / Math.pow(10, ae(i)) === 1;
}
function Ps(i, t, e) {
  const s = Math.pow(10, e), n = Math.floor(i / s);
  return Math.ceil(t / s) - n;
}
function Cl(i, t) {
  const e = t - i;
  let s = ae(e);
  for (; Ps(i, t, s) > 10; )
    s++;
  for (; Ps(i, t, s) < 10; )
    s--;
  return Math.min(s, ae(i));
}
function Pl(i, { min: t, max: e }) {
  t = J(i.min, t);
  const s = [], n = ae(t);
  let o = Cl(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = n > o ? Math.pow(10, n) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), f = J(i.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; f < e; )
    s.push({
      value: f,
      major: Cs(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), f = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const u = J(i.max, f);
  return s.push({
    value: u,
    major: Cs(u),
    significand: d
  }), s;
}
class Xl extends Ot {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: Be.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const s = Fe.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return V(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = V(t) ? Math.max(0, t) : null, this.max = V(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !V(this._userMin) && (this.min = t === Mt(this.min, 0) ? Mt(this.min, -1) : Mt(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min, n = this.max;
    const o = (a) => s = t ? s : a, r = (a) => n = e ? n : a;
    s === n && (s <= 0 ? (o(1), r(10)) : (o(Mt(s, -1)), r(Mt(n, 1)))), s <= 0 && o(Mt(n, -1)), n <= 0 && r(Mt(s, 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = Pl(e, this);
    return t.bounds === "ticks" && Hs(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : ze(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = ft(t), this._valueRange = ft(this.max) - ft(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ft(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function ii(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = U(t.backdropPadding);
    return D(t.font && t.font.size, W.font.size) + e.height;
  }
  return 0;
}
function Dl(i, t, e) {
  return e = B(e) ? e : [
    e
  ], {
    w: yo(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Ds(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Ol(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? z / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = j(c.font), f = Dl(i.ctx, d, i._pointLabels[l]);
    s[l] = f;
    const u = it(i.getIndexAngle(l) + a), g = Math.round(ai(u)), p = Ds(g, h.x, f.w, 0, 180), m = Ds(g, h.y, f.h, 90, 270);
    Al(e, t, u, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Rl(i, s, n);
}
function Al(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Tl(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(ai(it(l.angle + N))), h = Fl(l.y, a.h, c), d = Il(c), f = El(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: d,
    left: f,
    top: h,
    right: f + a.w,
    bottom: h + a.h
  };
}
function Ll(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(ht({
    x: e,
    y: s
  }, t) || ht({
    x: e,
    y: o
  }, t) || ht({
    x: n,
    y: s
  }, t) || ht({
    x: n,
    y: o
  }, t));
}
function Rl(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: ii(o) / 2,
    additionalAngle: r ? z / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const d = Tl(i, h, l);
    s.push(d), a === "auto" && (d.visible = Ll(d, c), d.visible && (c = d));
  }
  return s;
}
function Il(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function El(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Fl(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function zl(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!I(a)) {
    const l = Et(t.borderRadius), c = U(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, d = n - c.top, f = o - s + c.width, u = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Le(i, {
      x: h,
      y: d,
      w: f,
      h: u,
      radius: l
    }), i.fill()) : i.fillRect(h, d, f, u);
  }
}
function Bl(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    zl(e, r, o);
    const a = j(r.font), { x: l, y: c, textAlign: h } = o;
    Dt(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function _n(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, F);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function Wl(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), _n(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Hl(i, t, e) {
  return pt(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Ul extends Fe {
  static id = "radialLinear";
  static defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Be.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = U(ii(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = V(t) && !isNaN(t) ? t : 0, this.max = V(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ii(this.options));
  }
  generateTickLabels(t) {
    Fe.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = R(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Ol(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = F / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return it(t * e + ot(s));
  }
  getDistanceFromCenterForValue(t) {
    if (I(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (I(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Hl(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - N + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), _n(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Bl(this, r), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const f = this.getContext(d), u = n.setContext(f), g = o.setContext(f);
        Wl(this, u, l, r, g);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = s.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: f } = h;
        !f || !d || (t.lineWidth = f, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), h = j(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = U(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      Dt(t, a.label, 0, -o, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const He = {
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
}, G = /* @__PURE__ */ Object.keys(He);
function Os(i, t) {
  return i - t;
}
function As(i, t) {
  if (I(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), V(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ne(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Ts(i, t, e, s) {
  const n = G.length;
  for (let o = G.indexOf(i); o < n - 1; ++o) {
    const r = He[G[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return G[o];
  }
  return G[n - 1];
}
function Nl(i, t, e, s, n) {
  for (let o = G.length - 1; o >= G.indexOf(e); o--) {
    const r = G[o];
    if (He[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return G[e ? G.indexOf(e) : 0];
}
function jl(i) {
  for (let t = G.indexOf(i) + 1, e = G.length; t < e; ++t)
    if (He[G[t]].common)
      return G[t];
}
function Ls(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = li(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Vl(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Rs(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : Vl(i, s, n, e);
}
class Is extends Ot {
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
    const s = t.time || (t.time = {}), n = this._adapter = new Tr._date(t.adapters.date);
    n.init(e), Zt(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : As(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = V(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = V(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = so(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Ts(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Nl(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : jl(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Rs(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = K(e, 0, r), s = K(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Ts(o.minUnit, e, s, this._getLabelCapacity(e)), a = D(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ne(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < s; f = +t.add(f, a, r), u++)
      Ls(h, f, g);
    return (f === s || n.bounds === "ticks" || u === 1) && Ls(h, f, g), Object.keys(h).sort(Os).map((p) => +p);
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
      return R(r, [
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = ot(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Rs(this, [
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
      t.push(As(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return oo(t.sort(Os));
  }
}
function we(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = St(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = St(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Kl extends Is {
  static id = "timeseries";
  static defaults = Is.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = we(e, this.min), this._tableRange = we(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (we(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return we(this._table, s * this._tableRange + this._minPos, !0);
  }
}
Ht.register(dl, cl, xl);
class xn extends yn {
  constructor({ contextElement: t }) {
    super({ contextElement: t }), this.canvas = document.createElement("canvas"), this.contextElement.appendChild(this.canvas), this.addCoreElement(this.canvas);
  }
  get chartObj() {
    if (!this.chart)
      throw new Error("No chart instance!");
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
Ht.register(Ar, Xa);
class ql extends xn {
  constructor(t) {
    super(t);
    const { dataSource: e, title: s } = t;
    this.chart = new Ht(this.canvas, {
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
}
Ht.register(Or, kl, Sl, sl, il);
class Gl extends xn {
  constructor(t) {
    super(t);
    const { dataSource: e, title: s, labels: n } = t;
    this.chart = new Ht(this.canvas, {
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
}
export {
  Gl as IRLineChart,
  ql as IRPieChart
};
//# sourceMappingURL=chart.js.map
