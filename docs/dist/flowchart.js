import "./chunks/_init-D7pcIR7n.js";
import { a as le } from "./chunks/asserts-CpwDJsre.js";
import { c as xn } from "./chunks/clone-CMP76bLO.js";
import { L as _n } from "./chunks/logger-C1WxLZjH.js";
import { i as vn, r as hr, w as lr } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { e as ot, b as dr } from "./chunks/outside-DpurI6XH.js";
import { a as Le, g as He, b as Xe, e as ur, d as fr } from "./chunks/image-Y3tFDdOU.js";
import { I as gr } from "./chunks/index-CeFD99q1.js";
function pr(n, t) {
  return {
    forEach(e) {
      const r = Math.min(n.length, t.length);
      for (let i = 0; i < r; i++)
        e(n[i], t[i]);
    }
  };
}
var yr = { value: () => {
} };
function re() {
  for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
    if (!(r = arguments[n] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Vt(e);
}
function Vt(n) {
  this._ = n;
}
function mr(n, t) {
  return n.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !t.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Vt.prototype = re.prototype = {
  constructor: Vt,
  on: function(n, t) {
    var e = this._, r = mr(n + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (n = r[o]).type) && (i = br(e[i], n.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (i = (n = r[o]).type) e[i] = Fe(e[i], n.name, t);
      else if (t == null) for (i in e) e[i] = Fe(e[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var e in t) n[e] = t[e].slice();
    return new Vt(n);
  },
  call: function(n, t) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (o = this._[n], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, e);
  },
  apply: function(n, t, e) {
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (var r = this._[n], i = 0, o = r.length; i < o; ++i) r[i].value.apply(t, e);
  }
};
function br(n, t) {
  for (var e = 0, r = n.length, i; e < r; ++e)
    if ((i = n[e]).name === t)
      return i.value;
}
function Fe(n, t, e) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === t) {
      n[r] = yr, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return e != null && n.push({ name: t, value: e }), n;
}
var me = "http://www.w3.org/1999/xhtml";
const Ye = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: me,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ie(n) {
  var t = n += "", e = t.indexOf(":");
  return e >= 0 && (t = n.slice(0, e)) !== "xmlns" && (n = n.slice(e + 1)), Ye.hasOwnProperty(t) ? { space: Ye[t], local: n } : n;
}
function wr(n) {
  return function() {
    var t = this.ownerDocument, e = this.namespaceURI;
    return e === me && t.documentElement.namespaceURI === me ? t.createElement(n) : t.createElementNS(e, n);
  };
}
function xr(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function On(n) {
  var t = ie(n);
  return (t.local ? xr : wr)(t);
}
function _r() {
}
function Ie(n) {
  return n == null ? _r : function() {
    return this.querySelector(n);
  };
}
function vr(n) {
  typeof n != "function" && (n = Ie(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = new Array(s), c, h, l = 0; l < s; ++l)
      (c = o[l]) && (h = n.call(c, c.__data__, l, o)) && ("__data__" in c && (h.__data__ = c.__data__), a[l] = h);
  return new L(r, this._parents);
}
function Or(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function Sr() {
  return [];
}
function Sn(n) {
  return n == null ? Sr : function() {
    return this.querySelectorAll(n);
  };
}
function Cr(n) {
  return function() {
    return Or(n.apply(this, arguments));
  };
}
function jr(n) {
  typeof n == "function" ? n = Cr(n) : n = Sn(n);
  for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = t[o], a = s.length, c, h = 0; h < a; ++h)
      (c = s[h]) && (r.push(n.call(c, c.__data__, h, s)), i.push(c));
  return new L(r, i);
}
function Cn(n) {
  return function() {
    return this.matches(n);
  };
}
function jn(n) {
  return function(t) {
    return t.matches(n);
  };
}
var Er = Array.prototype.find;
function Ir(n) {
  return function() {
    return Er.call(this.children, n);
  };
}
function kr() {
  return this.firstElementChild;
}
function Mr(n) {
  return this.select(n == null ? kr : Ir(typeof n == "function" ? n : jn(n)));
}
var Tr = Array.prototype.filter;
function Ar() {
  return Array.from(this.children);
}
function zr(n) {
  return function() {
    return Tr.call(this.children, n);
  };
}
function Nr(n) {
  return this.selectAll(n == null ? Ar : zr(typeof n == "function" ? n : jn(n)));
}
function Dr(n) {
  typeof n != "function" && (n = Cn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, h = 0; h < s; ++h)
      (c = o[h]) && n.call(c, c.__data__, h, o) && a.push(c);
  return new L(r, this._parents);
}
function En(n) {
  return new Array(n.length);
}
function Pr() {
  return new L(this._enter || this._groups.map(En), this._parents);
}
function Gt(n, t) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
}
Gt.prototype = {
  constructor: Gt,
  appendChild: function(n) {
    return this._parent.insertBefore(n, this._next);
  },
  insertBefore: function(n, t) {
    return this._parent.insertBefore(n, t);
  },
  querySelector: function(n) {
    return this._parent.querySelector(n);
  },
  querySelectorAll: function(n) {
    return this._parent.querySelectorAll(n);
  }
};
function $r(n) {
  return function() {
    return n;
  };
}
function Rr(n, t, e, r, i, o) {
  for (var s = 0, a, c = t.length, h = o.length; s < h; ++s)
    (a = t[s]) ? (a.__data__ = o[s], r[s] = a) : e[s] = new Gt(n, o[s]);
  for (; s < c; ++s)
    (a = t[s]) && (i[s] = a);
}
function Lr(n, t, e, r, i, o, s) {
  var a, c, h = /* @__PURE__ */ new Map(), l = t.length, u = o.length, f = new Array(l), y;
  for (a = 0; a < l; ++a)
    (c = t[a]) && (f[a] = y = s.call(c, c.__data__, a, t) + "", h.has(y) ? i[a] = c : h.set(y, c));
  for (a = 0; a < u; ++a)
    y = s.call(n, o[a], a, o) + "", (c = h.get(y)) ? (r[a] = c, c.__data__ = o[a], h.delete(y)) : e[a] = new Gt(n, o[a]);
  for (a = 0; a < l; ++a)
    (c = t[a]) && h.get(f[a]) === c && (i[a] = c);
}
function Hr(n) {
  return n.__data__;
}
function Xr(n, t) {
  if (!arguments.length) return Array.from(this, Hr);
  var e = t ? Lr : Rr, r = this._parents, i = this._groups;
  typeof n != "function" && (n = $r(n));
  for (var o = i.length, s = new Array(o), a = new Array(o), c = new Array(o), h = 0; h < o; ++h) {
    var l = r[h], u = i[h], f = u.length, y = Fr(n.call(l, l && l.__data__, h, r)), O = y.length, j = a[h] = new Array(O), T = s[h] = new Array(O), w = c[h] = new Array(f);
    e(l, u, j, T, w, y, t);
    for (var P = 0, z = 0, p, S; P < O; ++P)
      if (p = j[P]) {
        for (P >= z && (z = P + 1); !(S = T[z]) && ++z < O; ) ;
        p._next = S || null;
      }
  }
  return s = new L(s, r), s._enter = a, s._exit = c, s;
}
function Fr(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function Yr() {
  return new L(this._exit || this._groups.map(En), this._parents);
}
function Br(n, t, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), t != null && (i = t(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Vr(n) {
  for (var t = n.selection ? n.selection() : n, e = this._groups, r = t._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), c = 0; c < s; ++c)
    for (var h = e[c], l = r[c], u = h.length, f = a[c] = new Array(u), y, O = 0; O < u; ++O)
      (y = h[O] || l[O]) && (f[O] = y);
  for (; c < i; ++c)
    a[c] = e[c];
  return new L(a, this._parents);
}
function Ur() {
  for (var n = this._groups, t = -1, e = n.length; ++t < e; )
    for (var r = n[t], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Wr(n) {
  n || (n = qr);
  function t(u, f) {
    return u && f ? n(u.__data__, f.__data__) : !u - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], a = s.length, c = i[o] = new Array(a), h, l = 0; l < a; ++l)
      (h = s[l]) && (c[l] = h);
    c.sort(t);
  }
  return new L(i, this._parents).order();
}
function qr(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Gr() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function Kr() {
  return Array.from(this);
}
function Zr() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function Jr() {
  let n = 0;
  for (const t of this) ++n;
  return n;
}
function Qr() {
  return !this.node();
}
function ti(n) {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && n.call(a, a.__data__, o, i);
  return this;
}
function ei(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function ni(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function ri(n, t) {
  return function() {
    this.setAttribute(n, t);
  };
}
function ii(n, t) {
  return function() {
    this.setAttributeNS(n.space, n.local, t);
  };
}
function oi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
  };
}
function si(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
  };
}
function ai(n, t) {
  var e = ie(n);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((t == null ? e.local ? ni : ei : typeof t == "function" ? e.local ? si : oi : e.local ? ii : ri)(e, t));
}
function In(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function ci(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function hi(n, t, e) {
  return function() {
    this.style.setProperty(n, t, e);
  };
}
function li(n, t, e) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
  };
}
function di(n, t, e) {
  return arguments.length > 1 ? this.each((t == null ? ci : typeof t == "function" ? li : hi)(n, t, e ?? "")) : wt(this.node(), n);
}
function wt(n, t) {
  return n.style.getPropertyValue(t) || In(n).getComputedStyle(n, null).getPropertyValue(t);
}
function ui(n) {
  return function() {
    delete this[n];
  };
}
function fi(n, t) {
  return function() {
    this[n] = t;
  };
}
function gi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? delete this[n] : this[n] = e;
  };
}
function pi(n, t) {
  return arguments.length > 1 ? this.each((t == null ? ui : typeof t == "function" ? gi : fi)(n, t)) : this.node()[n];
}
function kn(n) {
  return n.trim().split(/^|\s+/);
}
function ke(n) {
  return n.classList || new Mn(n);
}
function Mn(n) {
  this._node = n, this._names = kn(n.getAttribute("class") || "");
}
Mn.prototype = {
  add: function(n) {
    var t = this._names.indexOf(n);
    t < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(n) {
    var t = this._names.indexOf(n);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(n) {
    return this._names.indexOf(n) >= 0;
  }
};
function Tn(n, t) {
  for (var e = ke(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
}
function An(n, t) {
  for (var e = ke(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
}
function yi(n) {
  return function() {
    Tn(this, n);
  };
}
function mi(n) {
  return function() {
    An(this, n);
  };
}
function bi(n, t) {
  return function() {
    (t.apply(this, arguments) ? Tn : An)(this, n);
  };
}
function wi(n, t) {
  var e = kn(n + "");
  if (arguments.length < 2) {
    for (var r = ke(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? bi : t ? yi : mi)(e, t));
}
function xi() {
  this.textContent = "";
}
function _i(n) {
  return function() {
    this.textContent = n;
  };
}
function vi(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Oi(n) {
  return arguments.length ? this.each(n == null ? xi : (typeof n == "function" ? vi : _i)(n)) : this.node().textContent;
}
function Si() {
  this.innerHTML = "";
}
function Ci(n) {
  return function() {
    this.innerHTML = n;
  };
}
function ji(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ei(n) {
  return arguments.length ? this.each(n == null ? Si : (typeof n == "function" ? ji : Ci)(n)) : this.node().innerHTML;
}
function Ii() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ki() {
  return this.each(Ii);
}
function Mi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ti() {
  return this.each(Mi);
}
function Ai(n) {
  var t = typeof n == "function" ? n : On(n);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function zi() {
  return null;
}
function Ni(n, t) {
  var e = typeof n == "function" ? n : On(n), r = t == null ? zi : typeof t == "function" ? t : Ie(t);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Di() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function Pi() {
  return this.each(Di);
}
function $i() {
  var n = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Ri() {
  var n = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Li(n) {
  return this.select(n ? Ri : $i);
}
function Hi(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function Xi(n) {
  return function(t) {
    n.call(this, t, this.__data__);
  };
}
function Fi(n) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var e = "", r = t.indexOf(".");
    return r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: e };
  });
}
function Yi(n) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
        o = t[e], (!n.type || o.type === n.type) && o.name === n.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Bi(n, t, e) {
  return function() {
    var r = this.__on, i, o = Xi(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === n.type && i.name === n.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = t;
          return;
        }
    }
    this.addEventListener(n.type, o, e), i = { type: n.type, name: n.name, value: t, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Vi(n, t, e) {
  var r = Fi(n + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, h = a.length, l; c < h; ++c)
        for (i = 0, l = a[c]; i < o; ++i)
          if ((s = r[i]).type === l.type && s.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = t ? Bi : Yi, i = 0; i < o; ++i) this.each(a(r[i], t, e));
  return this;
}
function zn(n, t, e) {
  var r = In(n), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
}
function Ui(n, t) {
  return function() {
    return zn(this, n, t);
  };
}
function Wi(n, t) {
  return function() {
    return zn(this, n, t.apply(this, arguments));
  };
}
function qi(n, t) {
  return this.each((typeof t == "function" ? Wi : Ui)(n, t));
}
function* Gi() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var Nn = [null];
function L(n, t) {
  this._groups = n, this._parents = t;
}
function Tt() {
  return new L([[document.documentElement]], Nn);
}
function Ki() {
  return this;
}
L.prototype = Tt.prototype = {
  constructor: L,
  select: vr,
  selectAll: jr,
  selectChild: Mr,
  selectChildren: Nr,
  filter: Dr,
  data: Xr,
  enter: Pr,
  exit: Yr,
  join: Br,
  merge: Vr,
  selection: Ki,
  order: Ur,
  sort: Wr,
  call: Gr,
  nodes: Kr,
  node: Zr,
  size: Jr,
  empty: Qr,
  each: ti,
  attr: ai,
  style: di,
  property: pi,
  classed: wi,
  text: Oi,
  html: Ei,
  raise: ki,
  lower: Ti,
  append: Ai,
  insert: Ni,
  remove: Pi,
  clone: Li,
  datum: Hi,
  on: Vi,
  dispatch: qi,
  [Symbol.iterator]: Gi
};
function V(n) {
  return typeof n == "string" ? new L([[document.querySelector(n)]], [document.documentElement]) : new L([[n]], Nn);
}
function Zi(n) {
  let t;
  for (; t = n.sourceEvent; ) n = t;
  return n;
}
function tt(n, t) {
  if (n = Zi(n), t === void 0 && (t = n.currentTarget), t) {
    var e = t.ownerSVGElement || t;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
    }
  }
  return [n.pageX, n.pageY];
}
const Ji = { passive: !1 }, jt = { capture: !0, passive: !1 };
function de(n) {
  n.stopImmediatePropagation();
}
function mt(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Dn(n) {
  var t = n.document.documentElement, e = V(n).on("dragstart.drag", mt, jt);
  "onselectstart" in t ? e.on("selectstart.drag", mt, jt) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Pn(n, t) {
  var e = n.document.documentElement, r = V(n).on("dragstart.drag", null);
  t && (r.on("click.drag", mt, jt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Dt = (n) => () => n;
function be(n, {
  sourceEvent: t,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: s,
  y: a,
  dx: c,
  dy: h,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: h, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
be.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function Qi(n) {
  return !n.ctrlKey && !n.button;
}
function to() {
  return this.parentNode;
}
function eo(n, t) {
  return t ?? { x: n.x, y: n.y };
}
function no() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function st() {
  var n = Qi, t = to, e = eo, r = no, i = {}, o = re("start", "drag", "end"), s = 0, a, c, h, l, u = 0;
  function f(p) {
    p.on("mousedown.drag", y).filter(r).on("touchstart.drag", T).on("touchmove.drag", w, Ji).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(p, S) {
    if (!(l || !n.call(this, p, S))) {
      var C = z(this, t.call(this, p, S), p, S, "mouse");
      C && (V(p.view).on("mousemove.drag", O, jt).on("mouseup.drag", j, jt), Dn(p.view), de(p), h = !1, a = p.clientX, c = p.clientY, C("start", p));
    }
  }
  function O(p) {
    if (mt(p), !h) {
      var S = p.clientX - a, C = p.clientY - c;
      h = S * S + C * C > u;
    }
    i.mouse("drag", p);
  }
  function j(p) {
    V(p.view).on("mousemove.drag mouseup.drag", null), Pn(p.view, h), mt(p), i.mouse("end", p);
  }
  function T(p, S) {
    if (n.call(this, p, S)) {
      var C = p.changedTouches, I = t.call(this, p, S), N = C.length, R, X;
      for (R = 0; R < N; ++R)
        (X = z(this, I, p, S, C[R].identifier, C[R])) && (de(p), X("start", p, C[R]));
    }
  }
  function w(p) {
    var S = p.changedTouches, C = S.length, I, N;
    for (I = 0; I < C; ++I)
      (N = i[S[I].identifier]) && (mt(p), N("drag", p, S[I]));
  }
  function P(p) {
    var S = p.changedTouches, C = S.length, I, N;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), I = 0; I < C; ++I)
      (N = i[S[I].identifier]) && (de(p), N("end", p, S[I]));
  }
  function z(p, S, C, I, N, R) {
    var X = o.copy(), H = tt(R || C, S), zt, Nt, d;
    if ((d = e.call(p, new be("beforestart", {
      sourceEvent: C,
      target: f,
      identifier: N,
      active: s,
      x: H[0],
      y: H[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), I)) != null)
      return zt = d.x - H[0] || 0, Nt = d.y - H[1] || 0, function m(g, b, x) {
        var _ = H, v;
        switch (g) {
          case "start":
            i[N] = m, v = s++;
            break;
          case "end":
            delete i[N], --s;
          // falls through
          case "drag":
            H = tt(x || b, S), v = s;
            break;
        }
        X.call(
          g,
          p,
          new be(g, {
            sourceEvent: b,
            subject: d,
            target: f,
            identifier: N,
            active: v,
            x: H[0] + zt,
            y: H[1] + Nt,
            dx: H[0] - _[0],
            dy: H[1] - _[1],
            dispatch: X
          }),
          I
        );
      };
  }
  return f.filter = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Dt(!!p), f) : n;
  }, f.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Dt(p), f) : t;
  }, f.subject = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Dt(p), f) : e;
  }, f.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Dt(!!p), f) : r;
  }, f.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? f : p;
  }, f.clickDistance = function(p) {
    return arguments.length ? (u = (p = +p) * p, f) : Math.sqrt(u);
  }, f;
}
function Me(n, t, e) {
  n.prototype = t.prototype = e, e.constructor = n;
}
function $n(n, t) {
  var e = Object.create(n.prototype);
  for (var r in t) e[r] = t[r];
  return e;
}
function At() {
}
var Et = 0.7, Kt = 1 / Et, bt = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ro = /^#([0-9a-f]{3,8})$/, io = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), oo = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), so = new RegExp(`^rgba\\(${bt},${bt},${bt},${It}\\)$`), ao = new RegExp(`^rgba\\(${G},${G},${G},${It}\\)$`), co = new RegExp(`^hsl\\(${It},${G},${G}\\)$`), ho = new RegExp(`^hsla\\(${It},${G},${G},${It}\\)$`), Be = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Me(At, kt, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ve,
  // Deprecated! Use color.formatHex.
  formatHex: Ve,
  formatHex8: lo,
  formatHsl: uo,
  formatRgb: Ue,
  toString: Ue
});
function Ve() {
  return this.rgb().formatHex();
}
function lo() {
  return this.rgb().formatHex8();
}
function uo() {
  return Rn(this).formatHsl();
}
function Ue() {
  return this.rgb().formatRgb();
}
function kt(n) {
  var t, e;
  return n = (n + "").trim().toLowerCase(), (t = ro.exec(n)) ? (e = t[1].length, t = parseInt(t[1], 16), e === 6 ? We(t) : e === 3 ? new $(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : e === 8 ? Pt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : e === 4 ? Pt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = io.exec(n)) ? new $(t[1], t[2], t[3], 1) : (t = oo.exec(n)) ? new $(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = so.exec(n)) ? Pt(t[1], t[2], t[3], t[4]) : (t = ao.exec(n)) ? Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = co.exec(n)) ? Ke(t[1], t[2] / 100, t[3] / 100, 1) : (t = ho.exec(n)) ? Ke(t[1], t[2] / 100, t[3] / 100, t[4]) : Be.hasOwnProperty(n) ? We(Be[n]) : n === "transparent" ? new $(NaN, NaN, NaN, 0) : null;
}
function We(n) {
  return new $(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Pt(n, t, e, r) {
  return r <= 0 && (n = t = e = NaN), new $(n, t, e, r);
}
function fo(n) {
  return n instanceof At || (n = kt(n)), n ? (n = n.rgb(), new $(n.r, n.g, n.b, n.opacity)) : new $();
}
function we(n, t, e, r) {
  return arguments.length === 1 ? fo(n) : new $(n, t, e, r ?? 1);
}
function $(n, t, e, r) {
  this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
}
Me($, we, $n(At, {
  brighter(n) {
    return n = n == null ? Kt : Math.pow(Kt, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Et : Math.pow(Et, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $(ft(this.r), ft(this.g), ft(this.b), Zt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qe,
  // Deprecated! Use color.formatHex.
  formatHex: qe,
  formatHex8: go,
  formatRgb: Ge,
  toString: Ge
}));
function qe() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function go() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ge() {
  const n = Zt(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${ft(this.r)}, ${ft(this.g)}, ${ft(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function Zt(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function ft(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function ut(n) {
  return n = ft(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Ke(n, t, e, r) {
  return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new U(n, t, e, r);
}
function Rn(n) {
  if (n instanceof U) return new U(n.h, n.s, n.l, n.opacity);
  if (n instanceof At || (n = kt(n)), !n) return new U();
  if (n instanceof U) return n;
  n = n.rgb();
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = Math.min(t, e, r), o = Math.max(t, e, r), s = NaN, a = o - i, c = (o + i) / 2;
  return a ? (t === o ? s = (e - r) / a + (e < r) * 6 : e === o ? s = (r - t) / a + 2 : s = (t - e) / a + 4, a /= c < 0.5 ? o + i : 2 - o - i, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new U(s, a, c, n.opacity);
}
function po(n, t, e, r) {
  return arguments.length === 1 ? Rn(n) : new U(n, t, e, r ?? 1);
}
function U(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
Me(U, po, $n(At, {
  brighter(n) {
    return n = n == null ? Kt : Math.pow(Kt, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Et : Math.pow(Et, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, t = isNaN(n) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * t, i = 2 * e - r;
    return new $(
      ue(n >= 240 ? n - 240 : n + 120, i, r),
      ue(n, i, r),
      ue(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new U(Ze(this.h), $t(this.s), $t(this.l), Zt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = Zt(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${$t(this.s) * 100}%, ${$t(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Ze(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function $t(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function ue(n, t, e) {
  return (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t) * 255;
}
const Ln = (n) => () => n;
function yo(n, t) {
  return function(e) {
    return n + e * t;
  };
}
function mo(n, t, e) {
  return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function(r) {
    return Math.pow(n + r * t, e);
  };
}
function bo(n) {
  return (n = +n) == 1 ? Hn : function(t, e) {
    return e - t ? mo(t, e, n) : Ln(isNaN(t) ? e : t);
  };
}
function Hn(n, t) {
  var e = t - n;
  return e ? yo(n, e) : Ln(isNaN(n) ? t : n);
}
const Je = function n(t) {
  var e = bo(t);
  function r(i, o) {
    var s = e((i = we(i)).r, (o = we(o)).r), a = e(i.g, o.g), c = e(i.b, o.b), h = Hn(i.opacity, o.opacity);
    return function(l) {
      return i.r = s(l), i.g = a(l), i.b = c(l), i.opacity = h(l), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function at(n, t) {
  return n = +n, t = +t, function(e) {
    return n * (1 - e) + t * e;
  };
}
var xe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fe = new RegExp(xe.source, "g");
function wo(n) {
  return function() {
    return n;
  };
}
function xo(n) {
  return function(t) {
    return n(t) + "";
  };
}
function _o(n, t) {
  var e = xe.lastIndex = fe.lastIndex = 0, r, i, o, s = -1, a = [], c = [];
  for (n = n + "", t = t + ""; (r = xe.exec(n)) && (i = fe.exec(t)); )
    (o = i.index) > e && (o = t.slice(e, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, c.push({ i: s, x: at(r, i) })), e = fe.lastIndex;
  return e < t.length && (o = t.slice(e), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? c[0] ? xo(c[0].x) : wo(t) : (t = c.length, function(h) {
    for (var l = 0, u; l < t; ++l) a[(u = c[l]).i] = u.x(h);
    return a.join("");
  });
}
var Qe = 180 / Math.PI, _e = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xn(n, t, e, r, i, o) {
  var s, a, c;
  return (s = Math.sqrt(n * n + t * t)) && (n /= s, t /= s), (c = n * e + t * r) && (e -= n * c, r -= t * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), n * r < t * e && (n = -n, t = -t, c = -c, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, n) * Qe,
    skewX: Math.atan(c) * Qe,
    scaleX: s,
    scaleY: a
  };
}
var Rt;
function vo(n) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return t.isIdentity ? _e : Xn(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Oo(n) {
  return n == null || (Rt || (Rt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rt.setAttribute("transform", n), !(n = Rt.transform.baseVal.consolidate())) ? _e : (n = n.matrix, Xn(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Fn(n, t, e, r) {
  function i(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, l, u, f, y, O) {
    if (h !== u || l !== f) {
      var j = y.push("translate(", null, t, null, e);
      O.push({ i: j - 4, x: at(h, u) }, { i: j - 2, x: at(l, f) });
    } else (u || f) && y.push("translate(" + u + t + f + e);
  }
  function s(h, l, u, f) {
    h !== l ? (h - l > 180 ? l += 360 : l - h > 180 && (h += 360), f.push({ i: u.push(i(u) + "rotate(", null, r) - 2, x: at(h, l) })) : l && u.push(i(u) + "rotate(" + l + r);
  }
  function a(h, l, u, f) {
    h !== l ? f.push({ i: u.push(i(u) + "skewX(", null, r) - 2, x: at(h, l) }) : l && u.push(i(u) + "skewX(" + l + r);
  }
  function c(h, l, u, f, y, O) {
    if (h !== u || l !== f) {
      var j = y.push(i(y) + "scale(", null, ",", null, ")");
      O.push({ i: j - 4, x: at(h, u) }, { i: j - 2, x: at(l, f) });
    } else (u !== 1 || f !== 1) && y.push(i(y) + "scale(" + u + "," + f + ")");
  }
  return function(h, l) {
    var u = [], f = [];
    return h = n(h), l = n(l), o(h.translateX, h.translateY, l.translateX, l.translateY, u, f), s(h.rotate, l.rotate, u, f), a(h.skewX, l.skewX, u, f), c(h.scaleX, h.scaleY, l.scaleX, l.scaleY, u, f), h = l = null, function(y) {
      for (var O = -1, j = f.length, T; ++O < j; ) u[(T = f[O]).i] = T.x(y);
      return u.join("");
    };
  };
}
var So = Fn(vo, "px, ", "px)", "deg)"), Co = Fn(Oo, ", ", ")", ")"), jo = 1e-12;
function tn(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function Eo(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function Io(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const ko = function n(t, e, r) {
  function i(o, s) {
    var a = o[0], c = o[1], h = o[2], l = s[0], u = s[1], f = s[2], y = l - a, O = u - c, j = y * y + O * O, T, w;
    if (j < jo)
      w = Math.log(f / h) / t, T = function(I) {
        return [
          a + I * y,
          c + I * O,
          h * Math.exp(t * I * w)
        ];
      };
    else {
      var P = Math.sqrt(j), z = (f * f - h * h + r * j) / (2 * h * e * P), p = (f * f - h * h - r * j) / (2 * f * e * P), S = Math.log(Math.sqrt(z * z + 1) - z), C = Math.log(Math.sqrt(p * p + 1) - p);
      w = (C - S) / t, T = function(I) {
        var N = I * w, R = tn(S), X = h / (e * P) * (R * Io(t * N + S) - Eo(S));
        return [
          a + X * y,
          c + X * O,
          h * R / tn(t * N + S)
        ];
      };
    }
    return T.duration = w * 1e3 * t / Math.SQRT2, T;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, c = a * a;
    return n(s, a, c);
  }, i;
}(Math.SQRT2, 2, 4);
var xt = 0, St = 0, vt = 0, Yn = 1e3, Jt, Ct, Qt = 0, gt = 0, oe = 0, Mt = typeof performance == "object" && performance.now ? performance : Date, Bn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Te() {
  return gt || (Bn(Mo), gt = Mt.now() + oe);
}
function Mo() {
  gt = 0;
}
function te() {
  this._call = this._time = this._next = null;
}
te.prototype = Vn.prototype = {
  constructor: te,
  restart: function(n, t, e) {
    if (typeof n != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Te() : +e) + (t == null ? 0 : +t), !this._next && Ct !== this && (Ct ? Ct._next = this : Jt = this, Ct = this), this._call = n, this._time = e, ve();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ve());
  }
};
function Vn(n, t, e) {
  var r = new te();
  return r.restart(n, t, e), r;
}
function To() {
  Te(), ++xt;
  for (var n = Jt, t; n; )
    (t = gt - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
  --xt;
}
function en() {
  gt = (Qt = Mt.now()) + oe, xt = St = 0;
  try {
    To();
  } finally {
    xt = 0, zo(), gt = 0;
  }
}
function Ao() {
  var n = Mt.now(), t = n - Qt;
  t > Yn && (oe -= t, Qt = n);
}
function zo() {
  for (var n, t = Jt, e, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), n = t, t = t._next) : (e = t._next, t._next = null, t = n ? n._next = e : Jt = e);
  Ct = n, ve(r);
}
function ve(n) {
  if (!xt) {
    St && (St = clearTimeout(St));
    var t = n - gt;
    t > 24 ? (n < 1 / 0 && (St = setTimeout(en, n - Mt.now() - oe)), vt && (vt = clearInterval(vt))) : (vt || (Qt = Mt.now(), vt = setInterval(Ao, Yn)), xt = 1, Bn(en));
  }
}
function ee(n, t, e) {
  var r = new te();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), n(i + t);
  }, t, e), r;
}
var No = re("start", "end", "cancel", "interrupt"), Do = [], Un = 0, nn = 1, Oe = 2, Ut = 3, rn = 4, Se = 5, Wt = 6;
function se(n, t, e, r, i, o) {
  var s = n.__transition;
  if (!s) n.__transition = {};
  else if (e in s) return;
  Po(n, e, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: No,
    tween: Do,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Un
  });
}
function Ae(n, t) {
  var e = W(n, t);
  if (e.state > Un) throw new Error("too late; already scheduled");
  return e;
}
function K(n, t) {
  var e = W(n, t);
  if (e.state > Ut) throw new Error("too late; already running");
  return e;
}
function W(n, t) {
  var e = n.__transition;
  if (!e || !(e = e[t])) throw new Error("transition not found");
  return e;
}
function Po(n, t, e) {
  var r = n.__transition, i;
  r[t] = e, e.timer = Vn(o, 0, e.time);
  function o(h) {
    e.state = nn, e.timer.restart(s, e.delay, e.time), e.delay <= h && s(h - e.delay);
  }
  function s(h) {
    var l, u, f, y;
    if (e.state !== nn) return c();
    for (l in r)
      if (y = r[l], y.name === e.name) {
        if (y.state === Ut) return ee(s);
        y.state === rn ? (y.state = Wt, y.timer.stop(), y.on.call("interrupt", n, n.__data__, y.index, y.group), delete r[l]) : +l < t && (y.state = Wt, y.timer.stop(), y.on.call("cancel", n, n.__data__, y.index, y.group), delete r[l]);
      }
    if (ee(function() {
      e.state === Ut && (e.state = rn, e.timer.restart(a, e.delay, e.time), a(h));
    }), e.state = Oe, e.on.call("start", n, n.__data__, e.index, e.group), e.state === Oe) {
      for (e.state = Ut, i = new Array(f = e.tween.length), l = 0, u = -1; l < f; ++l)
        (y = e.tween[l].value.call(n, n.__data__, e.index, e.group)) && (i[++u] = y);
      i.length = u + 1;
    }
  }
  function a(h) {
    for (var l = h < e.duration ? e.ease.call(null, h / e.duration) : (e.timer.restart(c), e.state = Se, 1), u = -1, f = i.length; ++u < f; )
      i[u].call(n, l);
    e.state === Se && (e.on.call("end", n, n.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Wt, e.timer.stop(), delete r[t];
    for (var h in r) return;
    delete n.__transition;
  }
}
function qt(n, t) {
  var e = n.__transition, r, i, o = !0, s;
  if (e) {
    t = t == null ? null : t + "";
    for (s in e) {
      if ((r = e[s]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > Oe && r.state < Se, r.state = Wt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete e[s];
    }
    o && delete n.__transition;
  }
}
function $o(n) {
  return this.each(function() {
    qt(this, n);
  });
}
function Ro(n, t) {
  var e, r;
  return function() {
    var i = K(this, n), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Lo(n, t, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, n), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: t, value: e }, c = 0, h = i.length; c < h; ++c)
        if (i[c].name === t) {
          i[c] = a;
          break;
        }
      c === h && i.push(a);
    }
    o.tween = i;
  };
}
function Ho(n, t) {
  var e = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = W(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === n)
        return s.value;
    return null;
  }
  return this.each((t == null ? Ro : Lo)(e, n, t));
}
function ze(n, t, e) {
  var r = n._id;
  return n.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[t] = e.apply(this, arguments);
  }), function(i) {
    return W(i, r).value[t];
  };
}
function Wn(n, t) {
  var e;
  return (typeof t == "number" ? at : t instanceof kt ? Je : (e = kt(t)) ? (t = e, Je) : _o)(n, t);
}
function Xo(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function Fo(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function Yo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Bo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(n.space, n.local);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Vo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttribute(n) : (s = this.getAttribute(n), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Uo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttributeNS(n.space, n.local) : (s = this.getAttributeNS(n.space, n.local), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Wo(n, t) {
  var e = ie(n), r = e === "transform" ? Co : Wn;
  return this.attrTween(n, typeof t == "function" ? (e.local ? Uo : Vo)(e, r, ze(this, "attr." + n, t)) : t == null ? (e.local ? Fo : Xo)(e) : (e.local ? Bo : Yo)(e, r, t));
}
function qo(n, t) {
  return function(e) {
    this.setAttribute(n, t.call(this, e));
  };
}
function Go(n, t) {
  return function(e) {
    this.setAttributeNS(n.space, n.local, t.call(this, e));
  };
}
function Ko(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Go(n, o)), e;
  }
  return i._value = t, i;
}
function Zo(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && qo(n, o)), e;
  }
  return i._value = t, i;
}
function Jo(n, t) {
  var e = "attr." + n;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  var r = ie(n);
  return this.tween(e, (r.local ? Ko : Zo)(r, t));
}
function Qo(n, t) {
  return function() {
    Ae(this, n).delay = +t.apply(this, arguments);
  };
}
function ts(n, t) {
  return t = +t, function() {
    Ae(this, n).delay = t;
  };
}
function es(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? Qo : ts)(t, n)) : W(this.node(), t).delay;
}
function ns(n, t) {
  return function() {
    K(this, n).duration = +t.apply(this, arguments);
  };
}
function rs(n, t) {
  return t = +t, function() {
    K(this, n).duration = t;
  };
}
function is(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? ns : rs)(t, n)) : W(this.node(), t).duration;
}
function os(n, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    K(this, n).ease = t;
  };
}
function ss(n) {
  var t = this._id;
  return arguments.length ? this.each(os(t, n)) : W(this.node(), t).ease;
}
function as(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, n).ease = e;
  };
}
function cs(n) {
  if (typeof n != "function") throw new Error();
  return this.each(as(this._id, n));
}
function hs(n) {
  typeof n != "function" && (n = Cn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, h = 0; h < s; ++h)
      (c = o[h]) && n.call(c, c.__data__, h, o) && a.push(c);
  return new rt(r, this._parents, this._name, this._id);
}
function ls(n) {
  if (n._id !== this._id) throw new Error();
  for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var c = t[a], h = e[a], l = c.length, u = s[a] = new Array(l), f, y = 0; y < l; ++y)
      (f = c[y] || h[y]) && (u[y] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new rt(s, this._parents, this._name, this._id);
}
function ds(n) {
  return (n + "").trim().split(/^|\s+/).every(function(t) {
    var e = t.indexOf(".");
    return e >= 0 && (t = t.slice(0, e)), !t || t === "start";
  });
}
function us(n, t, e) {
  var r, i, o = ds(t) ? Ae : K;
  return function() {
    var s = o(this, n), a = s.on;
    a !== r && (i = (r = a).copy()).on(t, e), s.on = i;
  };
}
function fs(n, t) {
  var e = this._id;
  return arguments.length < 2 ? W(this.node(), e).on.on(n) : this.each(us(e, n, t));
}
function gs(n) {
  return function() {
    var t = this.parentNode;
    for (var e in this.__transition) if (+e !== n) return;
    t && t.removeChild(this);
  };
}
function ps() {
  return this.on("end.remove", gs(this._id));
}
function ys(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = Ie(n));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], c = a.length, h = o[s] = new Array(c), l, u, f = 0; f < c; ++f)
      (l = a[f]) && (u = n.call(l, l.__data__, f, a)) && ("__data__" in l && (u.__data__ = l.__data__), h[f] = u, se(h[f], t, e, f, h, W(l, e)));
  return new rt(o, this._parents, t, e);
}
function ms(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = Sn(n));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var c = r[a], h = c.length, l, u = 0; u < h; ++u)
      if (l = c[u]) {
        for (var f = n.call(l, l.__data__, u, c), y, O = W(l, e), j = 0, T = f.length; j < T; ++j)
          (y = f[j]) && se(y, t, e, j, f, O);
        o.push(f), s.push(l);
      }
  return new rt(o, s, t, e);
}
var bs = Tt.prototype.constructor;
function ws() {
  return new bs(this._groups, this._parents);
}
function xs(n, t) {
  var e, r, i;
  return function() {
    var o = wt(this, n), s = (this.style.removeProperty(n), wt(this, n));
    return o === s ? null : o === e && s === r ? i : i = t(e = o, r = s);
  };
}
function qn(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function _s(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = wt(this, n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function vs(n, t, e) {
  var r, i, o;
  return function() {
    var s = wt(this, n), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(n), wt(this, n))), s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a));
  };
}
function Os(n, t) {
  var e, r, i, o = "style." + t, s = "end." + o, a;
  return function() {
    var c = K(this, n), h = c.on, l = c.value[o] == null ? a || (a = qn(t)) : void 0;
    (h !== e || i !== l) && (r = (e = h).copy()).on(s, i = l), c.on = r;
  };
}
function Ss(n, t, e) {
  var r = (n += "") == "transform" ? So : Wn;
  return t == null ? this.styleTween(n, xs(n, r)).on("end.style." + n, qn(n)) : typeof t == "function" ? this.styleTween(n, vs(n, r, ze(this, "style." + n, t))).each(Os(this._id, n)) : this.styleTween(n, _s(n, r, t), e).on("end.style." + n, null);
}
function Cs(n, t, e) {
  return function(r) {
    this.style.setProperty(n, t.call(this, r), e);
  };
}
function js(n, t, e) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && Cs(n, s, e)), r;
  }
  return o._value = t, o;
}
function Es(n, t, e) {
  var r = "style." + (n += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, js(n, t, e ?? ""));
}
function Is(n) {
  return function() {
    this.textContent = n;
  };
}
function ks(n) {
  return function() {
    var t = n(this);
    this.textContent = t ?? "";
  };
}
function Ms(n) {
  return this.tween("text", typeof n == "function" ? ks(ze(this, "text", n)) : Is(n == null ? "" : n + ""));
}
function Ts(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function As(n) {
  var t, e;
  function r() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && Ts(i)), t;
  }
  return r._value = n, r;
}
function zs(n) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  return this.tween(t, As(n));
}
function Ns() {
  for (var n = this._name, t = this._id, e = Gn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, h = 0; h < a; ++h)
      if (c = s[h]) {
        var l = W(c, t);
        se(c, n, e, h, s, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new rt(r, this._parents, n, e);
}
function Ds() {
  var n, t, e = this, r = e._id, i = e.size();
  return new Promise(function(o, s) {
    var a = { value: s }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var h = K(this, r), l = h.on;
      l !== n && (t = (n = l).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), h.on = t;
    }), i === 0 && o();
  });
}
var Ps = 0;
function rt(n, t, e, r) {
  this._groups = n, this._parents = t, this._name = e, this._id = r;
}
function Gn() {
  return ++Ps;
}
var Q = Tt.prototype;
rt.prototype = {
  constructor: rt,
  select: ys,
  selectAll: ms,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: hs,
  merge: ls,
  selection: ws,
  transition: Ns,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: fs,
  attr: Wo,
  attrTween: Jo,
  style: Ss,
  styleTween: Es,
  text: Ms,
  textTween: zs,
  remove: ps,
  tween: Ho,
  delay: es,
  duration: is,
  ease: ss,
  easeVarying: cs,
  end: Ds,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function $s(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var Rs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $s
};
function Ls(n, t) {
  for (var e; !(e = n.__transition) || !(e = e[t]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${t} not found`);
  return e;
}
function Hs(n) {
  var t, e;
  n instanceof rt ? (t = n._id, n = n._name) : (t = Gn(), (e = Rs).time = Te(), n = n == null ? null : n + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, h = 0; h < a; ++h)
      (c = s[h]) && se(c, n, t, h, s, e || Ls(c, t));
  return new rt(r, this._parents, n, t);
}
Tt.prototype.interrupt = $o;
Tt.prototype.transition = Hs;
const Lt = (n) => () => n;
function Xs(n, {
  sourceEvent: t,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function nt(n, t, e) {
  this.k = n, this.x = t, this.y = e;
}
nt.prototype = {
  constructor: nt,
  scale: function(n) {
    return n === 1 ? this : new nt(this.k * n, this.x, this.y);
  },
  translate: function(n, t) {
    return n === 0 & t === 0 ? this : new nt(this.k, this.x + this.k * n, this.y + this.k * t);
  },
  apply: function(n) {
    return [n[0] * this.k + this.x, n[1] * this.k + this.y];
  },
  applyX: function(n) {
    return n * this.k + this.x;
  },
  applyY: function(n) {
    return n * this.k + this.y;
  },
  invert: function(n) {
    return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k];
  },
  invertX: function(n) {
    return (n - this.x) / this.k;
  },
  invertY: function(n) {
    return (n - this.y) / this.k;
  },
  rescaleX: function(n) {
    return n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n));
  },
  rescaleY: function(n) {
    return n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Ne = new nt(1, 0, 0);
Kn.prototype = nt.prototype;
function Kn(n) {
  for (; !n.__zoom; ) if (!(n = n.parentNode)) return Ne;
  return n.__zoom;
}
function ge(n) {
  n.stopImmediatePropagation();
}
function Ot(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Fs(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function Ys() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function on() {
  return this.__zoom || Ne;
}
function Bs(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function Vs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Us(n, t, e) {
  var r = n.invertX(t[0][0]) - e[0][0], i = n.invertX(t[1][0]) - e[1][0], o = n.invertY(t[0][1]) - e[0][1], s = n.invertY(t[1][1]) - e[1][1];
  return n.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Ws() {
  var n = Fs, t = Ys, e = Us, r = Bs, i = Vs, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = ko, h = re("start", "zoom", "end"), l, u, f, y = 500, O = 150, j = 0, T = 10;
  function w(d) {
    d.property("__zoom", on).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", X).filter(i).on("touchstart.zoom", H).on("touchmove.zoom", zt).on("touchend.zoom touchcancel.zoom", Nt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(d, m, g, b) {
    var x = d.selection ? d.selection() : d;
    x.property("__zoom", on), d !== x ? S(d, m, g, b) : x.interrupt().each(function() {
      C(this, arguments).event(b).start().zoom(null, typeof m == "function" ? m.apply(this, arguments) : m).end();
    });
  }, w.scaleBy = function(d, m, g, b) {
    w.scaleTo(d, function() {
      var x = this.__zoom.k, _ = typeof m == "function" ? m.apply(this, arguments) : m;
      return x * _;
    }, g, b);
  }, w.scaleTo = function(d, m, g, b) {
    w.transform(d, function() {
      var x = t.apply(this, arguments), _ = this.__zoom, v = g == null ? p(x) : typeof g == "function" ? g.apply(this, arguments) : g, E = _.invert(v), k = typeof m == "function" ? m.apply(this, arguments) : m;
      return e(z(P(_, k), v, E), x, s);
    }, g, b);
  }, w.translateBy = function(d, m, g, b) {
    w.transform(d, function() {
      return e(this.__zoom.translate(
        typeof m == "function" ? m.apply(this, arguments) : m,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), t.apply(this, arguments), s);
    }, null, b);
  }, w.translateTo = function(d, m, g, b, x) {
    w.transform(d, function() {
      var _ = t.apply(this, arguments), v = this.__zoom, E = b == null ? p(_) : typeof b == "function" ? b.apply(this, arguments) : b;
      return e(Ne.translate(E[0], E[1]).scale(v.k).translate(
        typeof m == "function" ? -m.apply(this, arguments) : -m,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), _, s);
    }, b, x);
  };
  function P(d, m) {
    return m = Math.max(o[0], Math.min(o[1], m)), m === d.k ? d : new nt(m, d.x, d.y);
  }
  function z(d, m, g) {
    var b = m[0] - g[0] * d.k, x = m[1] - g[1] * d.k;
    return b === d.x && x === d.y ? d : new nt(d.k, b, x);
  }
  function p(d) {
    return [(+d[0][0] + +d[1][0]) / 2, (+d[0][1] + +d[1][1]) / 2];
  }
  function S(d, m, g, b) {
    d.on("start.zoom", function() {
      C(this, arguments).event(b).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(b).end();
    }).tween("zoom", function() {
      var x = this, _ = arguments, v = C(x, _).event(b), E = t.apply(x, _), k = g == null ? p(E) : typeof g == "function" ? g.apply(x, _) : g, q = Math.max(E[1][0] - E[0][0], E[1][1] - E[0][1]), D = x.__zoom, F = typeof m == "function" ? m.apply(x, _) : m, Z = c(D.invert(k).concat(q / D.k), F.invert(k).concat(q / F.k));
      return function(Y) {
        if (Y === 1) Y = F;
        else {
          var J = Z(Y), he = q / J[2];
          Y = new nt(he, k[0] - J[0] * he, k[1] - J[1] * he);
        }
        v.zoom(null, Y);
      };
    });
  }
  function C(d, m, g) {
    return !g && d.__zooming || new I(d, m);
  }
  function I(d, m) {
    this.that = d, this.args = m, this.active = 0, this.sourceEvent = null, this.extent = t.apply(d, m), this.taps = 0;
  }
  I.prototype = {
    event: function(d) {
      return d && (this.sourceEvent = d), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(d, m) {
      return this.mouse && d !== "mouse" && (this.mouse[1] = m.invert(this.mouse[0])), this.touch0 && d !== "touch" && (this.touch0[1] = m.invert(this.touch0[0])), this.touch1 && d !== "touch" && (this.touch1[1] = m.invert(this.touch1[0])), this.that.__zoom = m, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(d) {
      var m = V(this.that).datum();
      h.call(
        d,
        this.that,
        new Xs(d, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: h
        }),
        m
      );
    }
  };
  function N(d, ...m) {
    if (!n.apply(this, arguments)) return;
    var g = C(this, m).event(d), b = this.__zoom, x = Math.max(o[0], Math.min(o[1], b.k * Math.pow(2, r.apply(this, arguments)))), _ = tt(d);
    if (g.wheel)
      (g.mouse[0][0] !== _[0] || g.mouse[0][1] !== _[1]) && (g.mouse[1] = b.invert(g.mouse[0] = _)), clearTimeout(g.wheel);
    else {
      if (b.k === x) return;
      g.mouse = [_, b.invert(_)], qt(this), g.start();
    }
    Ot(d), g.wheel = setTimeout(v, O), g.zoom("mouse", e(z(P(b, x), g.mouse[0], g.mouse[1]), g.extent, s));
    function v() {
      g.wheel = null, g.end();
    }
  }
  function R(d, ...m) {
    if (f || !n.apply(this, arguments)) return;
    var g = d.currentTarget, b = C(this, m, !0).event(d), x = V(d.view).on("mousemove.zoom", k, !0).on("mouseup.zoom", q, !0), _ = tt(d, g), v = d.clientX, E = d.clientY;
    Dn(d.view), ge(d), b.mouse = [_, this.__zoom.invert(_)], qt(this), b.start();
    function k(D) {
      if (Ot(D), !b.moved) {
        var F = D.clientX - v, Z = D.clientY - E;
        b.moved = F * F + Z * Z > j;
      }
      b.event(D).zoom("mouse", e(z(b.that.__zoom, b.mouse[0] = tt(D, g), b.mouse[1]), b.extent, s));
    }
    function q(D) {
      x.on("mousemove.zoom mouseup.zoom", null), Pn(D.view, b.moved), Ot(D), b.event(D).end();
    }
  }
  function X(d, ...m) {
    if (n.apply(this, arguments)) {
      var g = this.__zoom, b = tt(d.changedTouches ? d.changedTouches[0] : d, this), x = g.invert(b), _ = g.k * (d.shiftKey ? 0.5 : 2), v = e(z(P(g, _), b, x), t.apply(this, m), s);
      Ot(d), a > 0 ? V(this).transition().duration(a).call(S, v, b, d) : V(this).call(w.transform, v, b, d);
    }
  }
  function H(d, ...m) {
    if (n.apply(this, arguments)) {
      var g = d.touches, b = g.length, x = C(this, m, d.changedTouches.length === b).event(d), _, v, E, k;
      for (ge(d), v = 0; v < b; ++v)
        E = g[v], k = tt(E, this), k = [k, this.__zoom.invert(k), E.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== k[2] && (x.touch1 = k, x.taps = 0) : (x.touch0 = k, _ = !0, x.taps = 1 + !!l);
      l && (l = clearTimeout(l)), _ && (x.taps < 2 && (u = k[0], l = setTimeout(function() {
        l = null;
      }, y)), qt(this), x.start());
    }
  }
  function zt(d, ...m) {
    if (this.__zooming) {
      var g = C(this, m).event(d), b = d.changedTouches, x = b.length, _, v, E, k;
      for (Ot(d), _ = 0; _ < x; ++_)
        v = b[_], E = tt(v, this), g.touch0 && g.touch0[2] === v.identifier ? g.touch0[0] = E : g.touch1 && g.touch1[2] === v.identifier && (g.touch1[0] = E);
      if (v = g.that.__zoom, g.touch1) {
        var q = g.touch0[0], D = g.touch0[1], F = g.touch1[0], Z = g.touch1[1], Y = (Y = F[0] - q[0]) * Y + (Y = F[1] - q[1]) * Y, J = (J = Z[0] - D[0]) * J + (J = Z[1] - D[1]) * J;
        v = P(v, Math.sqrt(Y / J)), E = [(q[0] + F[0]) / 2, (q[1] + F[1]) / 2], k = [(D[0] + Z[0]) / 2, (D[1] + Z[1]) / 2];
      } else if (g.touch0) E = g.touch0[0], k = g.touch0[1];
      else return;
      g.zoom("touch", e(z(v, E, k), g.extent, s));
    }
  }
  function Nt(d, ...m) {
    if (this.__zooming) {
      var g = C(this, m).event(d), b = d.changedTouches, x = b.length, _, v;
      for (ge(d), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, y), _ = 0; _ < x; ++_)
        v = b[_], g.touch0 && g.touch0[2] === v.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === v.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (v = tt(v, this), Math.hypot(u[0] - v[0], u[1] - v[1]) < T)) {
        var E = V(this).on("dblclick.zoom");
        E && E.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Lt(+d), w) : r;
  }, w.filter = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Lt(!!d), w) : n;
  }, w.touchable = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Lt(!!d), w) : i;
  }, w.extent = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Lt([[+d[0][0], +d[0][1]], [+d[1][0], +d[1][1]]]), w) : t;
  }, w.scaleExtent = function(d) {
    return arguments.length ? (o[0] = +d[0], o[1] = +d[1], w) : [o[0], o[1]];
  }, w.translateExtent = function(d) {
    return arguments.length ? (s[0][0] = +d[0][0], s[1][0] = +d[1][0], s[0][1] = +d[0][1], s[1][1] = +d[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(d) {
    return arguments.length ? (e = d, w) : e;
  }, w.duration = function(d) {
    return arguments.length ? (a = +d, w) : a;
  }, w.interpolate = function(d) {
    return arguments.length ? (c = d, w) : c;
  }, w.on = function() {
    var d = h.on.apply(h, arguments);
    return d === h ? w : d;
  }, w.clickDistance = function(d) {
    return arguments.length ? (j = (d = +d) * d, w) : Math.sqrt(j);
  }, w.tapDistance = function(d) {
    return arguments.length ? (T = +d, w) : T;
  }, w;
}
class qs {
  actionLimit;
  undoStackList;
  redoStackList;
  containerInterface;
  constructor(t, e) {
    this.actionLimit = e, this.undoStackList = [], this.redoStackList = [], this.containerInterface = t;
  }
  addAction(...t) {
    this.undoStackList.length === this.actionLimit && this.undoStackList.shift(), this.undoStackList.push(t), this.redoStackList.length = 0;
  }
  clear() {
    this.undoStackList.length = 0, this.redoStackList.length = 0;
  }
  popLastUndoAction() {
    return this.undoStackList.pop();
  }
  undo() {
    const t = this.undoStackList.pop();
    return t ? (t.forEach((e) => e.undo(this.containerInterface)), this.redoStackList.push(t.reverse()), t) : null;
  }
  redo() {
    const t = this.redoStackList.pop();
    return t ? (t.forEach((e) => e.redo(this.containerInterface)), this.undoStackList.push(t.reverse()), t) : null;
  }
}
class ae {
  command;
  constructor(t) {
    this.command = t;
  }
  checkHasId(t) {
    return "id" in t && (typeof t.id == "number" || typeof t.id == "string");
  }
  undo(t) {
    return this;
  }
  redo(t) {
    return this;
  }
}
class dt extends ae {
  objDataList;
  constructor(t) {
    super("add"), this.objDataList = t;
  }
  undo(t) {
    return this.objDataList.forEach((e) => {
      this.checkHasId(e) ? t.removeObject(e.id) : console.error("data has no id", e);
    }), this;
  }
  redo(t) {
    return this.objDataList.forEach((e) => t.addRenderObj(e)), this;
  }
}
class Ce extends dt {
  constructor(t) {
    super(t), this.command = "delete";
  }
  undo(t) {
    return super.redo(t);
  }
  redo(t) {
    return super.undo(t);
  }
}
const ce = {
  id: "",
  temp: !1,
  type: "",
  render: "",
  text: "",
  editable: !0,
  foreColor: "black",
  fontSize: 16,
  textDecoration: "none",
  visibleOverText: !0,
  opacity: 1,
  cursor: "move",
  borderColor: "black",
  borderWidth: 1,
  borderDash: 0,
  isSelected: !1,
  isMonitoring: !0,
  isHovered: !1,
  tooltipText: "",
  tooltipFontSize: 13,
  tooltipForeColor: "black",
  tooltipFill: "white",
  tooltipMaxWidth: 380,
  tooltipBorderColor: "var(--navy-700)",
  tooltipBorderWidth: 1,
  tooltipBorderDash: 0,
  tooltipPadding: 8,
  tooltipTextDecoration: "none",
  tooltipVisible: !0,
  "borderWidth.selected": 2,
  "borderColor.selected": "blue"
}, Zn = {
  ...ce,
  "connection.points": [],
  "connection.sourceObjId": null,
  "connection.sourcePos": null,
  "connection.destinationObjId": null,
  "connection.destinationPos": null,
  "connection.width": 200,
  "connection.textBorderColor": "black",
  "connection.textBorderWidth": 1,
  "connection.textBorderDash": 0,
  "connection.textBorderFill": "white",
  "connection.connectorFill": "#303030",
  "connection.connectorSize": 4,
  "connection.adjusterSize": 7,
  "connection.adjusterFill": "black",
  "connection.arrowFill": "black",
  "connection.arrowSize": 10,
  "connection.arrowBorderColor": "black",
  "connection.arrowBorderWidth": 1,
  "connection.arrowType": "triangle"
}, Jn = {
  ...ce,
  "group.margin": 20,
  "group.borderAlwaysAppearance": !1
}, Qn = {
  ...ce,
  "node.width": 120,
  "node.height": 60,
  "node.fill": "white",
  "node.x": 0,
  "node.y": 0,
  "node.connectorGap": 0,
  "node.connectorSize": 4,
  "node.resizerEnabled": !0,
  "node.connectorEnabled": !0,
  "node.commentTopLeft": "",
  "node.commentTopCenter": "",
  "node.commentTopRight": "",
  "node.commentBottomLeft": "",
  "node.commentBottomCenter": "",
  "node.commentBottomRight": "",
  "node.commentFontSize": 10,
  "node.commentForeColor": "black",
  "node.borderRadius": 0,
  "node.autoGeneratedConnectorRender": "elbow"
}, Gs = /* @__PURE__ */ new Set([
  // 공용
  "id",
  "type",
  "render",
  "text",
  "editable",
  "isSelected",
  "isMonitoring",
  "isHovered",
  // 노드
  "node.width",
  "node.height",
  "node.x",
  "node.y",
  "node.connectorEnabled",
  "node.resizerEnabled",
  // 연결선
  "connection.points",
  "connection.sourceObjId",
  "connection.sourcePos",
  "connection.destinationObjId",
  "connection.destinationPos",
  // 그룹
  "group.borderAlwaysAppearance",
  "group.margin"
]);
class Ks {
  data;
  constructor(t) {
    this.data = t;
  }
  get(t) {
    return Gs.has(t) ? this.data[t] : this.data[`${t}${this._getPostFix()}`] ?? this.data[t];
  }
  _getPostFix() {
    return this.data.isSelected ? ".selected" : this.data.isHovered ? ".hovered" : "";
  }
}
class Zs {
  text = "";
  length = 0;
  width = 0;
  height = 0;
  x = 0;
  y = 0;
}
class tr extends Zs {
  compareTo(t) {
    return this.text === t.text && this.length === t.length && this.width === t.width && this.height === t.height && this.x === t.x && this.y === t.y;
  }
  update(t) {
    this.text = t.text, this.length = t.length, this.width = t.width, this.height = t.height, this.x = t.x, this.y = t.y;
  }
  clear() {
    this.text = "", this.length = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0;
  }
}
const Js = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    if (n || (n = new OffscreenCanvas(0, 0).getContext("2d")), !n)
      throw new Error("Can't create canvas context");
    return n;
  };
})(), je = 10, De = (n, t) => {
  const e = Js();
  e.font = `${t.fontSize}px ${t.fontFamily}`;
  const r = e.measureText(n);
  return {
    width: r.width,
    height: r.fontBoundingBoxAscent + r.fontBoundingBoxDescent
  };
}, Pe = (n) => {
  const { text: t } = n, e = [], r = [];
  for (const i of t) {
    if (i === "\r") continue;
    if (i === `
`) {
      e.push(r.join("")), r.length = 0;
      continue;
    }
    r.push(i);
    const o = r.join("");
    De(o, n).width >= n.width && (e.push(o), r.length = 0);
  }
  return r.length > 0 && e.push(r.join("")), {
    length: e.length,
    lineHeight: er(n),
    lines: e
  };
};
function er(n) {
  return De("|", n).height;
}
const nr = (n) => {
  const t = n.text.replace("\r", "").split(`
`);
  return {
    height: er(n) * t.length,
    width: t.reduce((e, r) => Math.max(e, De(r, n).width), 0)
  };
}, Qs = (n, t) => {
  const e = Pe(n), r = e.lineHeight * e.length;
  if (t < r) {
    const i = Math.ceil((r - t) / e.lineHeight);
    e.lines = e.lines.splice(0, e.length - i), e.length = e.lines.length, e.lines[e.length - 1] += "...";
  }
  return e;
};
class $e {
  className;
  containerInterface;
  textCache;
  data;
  dataWrapper;
  container;
  group;
  objects;
  constructor(t, e, r) {
    this.data = t, this.className = e, this.containerInterface = r, this.textCache = new tr(), this.dataWrapper = new Ks(t), this.container = r.getSvg().select(".container"), this.group = this.container.append("g").style("font-family", this.data.fontFamily).attr("class", `ir-fw-${t.type}`).attr("data-type", e).attr("data-obj-id", this.data.id), this.objects = {
      foreignObj: null,
      textarea: null,
      text: this.group.append("text").attr("class", "ir-fw-unselectable text--whitespace-pre").attr("text-anchor", "middle")
    };
  }
  get width() {
    throw new Error("Not implemented!");
  }
  get height() {
    throw new Error("Not implemented!");
  }
  get subUiVisibility() {
    return this.data.isSelected && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden";
  }
  get isHovered() {
    return this.data.isHovered;
  }
  get isSelected() {
    return this.data.isSelected;
  }
  _getLabelRect() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  _repositionTextarea() {
    if (!this.objects.foreignObj || !this.objects.textarea) throw new Error("foreignObj, textarea is null!");
    const t = this._getLabelRect();
    this.objects.foreignObj.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height), this.objects.textarea.style("width", `${t.width}px`).style("height", `${t.height}px`).style("outline", "1px solid #717171").style("background-color", "transparent");
  }
  removeLabelEdit() {
    this.objects.foreignObj && (this.objects.text.attr("visibility", "visible"), this.objects.textarea = null, this.objects.foreignObj.remove(), this.objects.foreignObj = null, this.containerInterface.setEditMode(!1));
  }
  cancelLabelEdit(t) {
    this.removeLabelEdit(), this.data.text = t;
  }
  editLabelMode() {
    if (!this.data.editable || this.objects.foreignObj || this.data.render === "bridge")
      return;
    const t = this.data.text;
    this.group.attr("data-status", "edit"), this.containerInterface.setEditMode(!0), this.objects.text.attr("visibility", "hidden"), this.objects.foreignObj = this.group.append("foreignObject"), this.objects.textarea = this.objects.foreignObj.append("xhtml:div").style("overflow", "hidden").append("textarea").style("outline", "0").style("resize", "none").style("text-align", "center").style("font-family", this.data.fontFamily).style("font-size", `${this.data.fontSize}px`).style("color", this.data.foreColor).on("paste", (e) => e.__IGNORE__ = !0).on("copy", (e) => e.__IGNORE__ = !0).on("cut", (e) => e.__IGNORE__ = !0).on("keyup", (e) => {
      e.key === "Escape" ? (this.cancelLabelEdit(t), this.containerInterface.getSvg().node().parentElement.focus()) : (this.data.text = this.objects.textarea.node().value, this._repositionTextarea());
    }).on("focusout", () => {
      this.objects.textarea && (this.data.text = this.objects.textarea.node().value, this.containerInterface.editTextCallback(this.data, t, this.data.text), this.removeLabelEdit()), this.group.attr("data-status", ""), this.render();
    }), this._repositionTextarea(), this.objects.textarea.node().value = this.data.text || "", this.objects.textarea.node().focus(), this.containerInterface.editTextModeCallback(this.data);
  }
  bringToFrontElement(t) {
    this.group.node().appendChild(t);
  }
  create() {
    this._create(), this.bringToFrontElement(this.objects.text.node()), this.render();
  }
  _create() {
    throw new Error("Not implemented method!");
  }
  render() {
    this._render(), this.group.attr("cursor", this.dataWrapper.get("cursor")), this.group.attr("opacity", this.dataWrapper.get("opacity"));
  }
  _render() {
    throw new Error("Not implemented method!");
  }
  _getLabelXY(t) {
    throw new Error("Not implemented!");
  }
  _createText() {
    const t = {
      width: this.width - je,
      text: this.dataWrapper.get("text"),
      fontFamily: this.dataWrapper.get("fontFamily"),
      fontSize: this.dataWrapper.get("fontSize"),
      foreColor: this.dataWrapper.get("foreColor"),
      textDecoration: this.dataWrapper.get("textDecoration")
    }, r = this.dataWrapper.get("visibleOverText") ? Pe(t) : Qs(t, this.height - je), i = this._getLabelXY(r), o = {
      text: t.text,
      width: this.width,
      height: this.height,
      length: r.lines.length,
      x: i.x,
      y: i.y,
      fontFamily: t.fontFamily,
      fontSize: t.fontSize,
      foreColor: t.foreColor,
      textDecoration: t.textDecoration
    };
    if (this.textCache.compareTo(o)) {
      ir(
        this.objects.text,
        i.x,
        i.y,
        t
      );
      return;
    }
    da(this.objects.text, this.textCache), or(
      this.objects.text,
      r,
      i.x,
      i.y,
      t
    ), this.textCache.update(o);
  }
  /**
   * svg 컨테이너에서 삭제
   */
  destroy() {
    this.group.remove();
  }
}
class ta {
  renderObj;
  key;
  newValue;
  oldValue;
  constructor(t, e, r, i) {
    this.renderObj = t, this.key = e, this.newValue = r, this.oldValue = i;
  }
}
class Re {
  data;
  containerInterface;
  renderer;
  _clickedSeq = 0;
  constructor(t, e, r) {
    this.data = t, this.renderer = e, this.containerInterface = r;
  }
  get onEditing() {
    return this.renderer.objects.foreignObj !== null;
  }
  get clickedSeq() {
    return this._clickedSeq;
  }
  get tooltipText() {
    return this.getDataOrNull("tooltipText");
  }
  get g() {
    return this.renderer.group;
  }
  get isSelected() {
    return this.data.isSelected;
  }
  /**
  * @returns {'node' | 'connection' | 'group'}
  */
  get type() {
    return this.data.type;
  }
  get renderType() {
    return this.data.render;
  }
  get tooltipVisible() {
    return this.getDataOrNull("tooltip.visible");
  }
  get canShowTooltip() {
    return this.getDataOrNull("tooltipText") && this.getDataOrNull("tooltipVisible");
  }
  get id() {
    return this.data.id;
  }
  /**
  * the start X of this object
  */
  get startX() {
    throw new Error("Not Implemented!");
  }
  /**
  * the start Y of this object
  */
  get startY() {
    throw new Error("Not Implemented!");
  }
  get isTempObj() {
    return this.data.temp || !1;
  }
  get zIndex() {
    const t = this.renderer.group.node();
    if (!t) throw new Error("renderer.group.node is null!");
    let e = 0, r = t.previousSibling;
    for (; r !== null; )
      r = r.previousSibling, ++e;
    return e;
  }
  get centerX() {
    return (this.x + this.endX) / 2;
  }
  get centerY() {
    return (this.y + this.endY) / 2;
  }
  get x() {
    throw new Error("Not Implemented!");
  }
  get y() {
    throw new Error("Not Implemented!");
  }
  get endX() {
    throw new Error("Not Implemented!");
  }
  get endY() {
    throw new Error("Not Implemented!");
  }
  get width() {
    throw new Error("Not Implemented!");
  }
  get height() {
    throw new Error("Not Implemented!");
  }
  get textDecoration() {
    return this.getDataOrNull("textDecoration");
  }
  get isHovered() {
    return this.data.isHovered;
  }
  set id(t) {
    this.data.id = t;
  }
  set x(t) {
    throw new Error("Not Implemented!");
  }
  set y(t) {
    throw new Error("Not Implemented!");
  }
  set width(t) {
    throw new Error("Not Implemented!");
  }
  set height(t) {
    throw new Error("Not Implemented!");
  }
  set textDecoration(t) {
    this.data.textDecoration = t;
  }
  set isHovered(t) {
    this.data.isHovered = t;
  }
  set clickedSeq(t) {
    this._clickedSeq = t;
  }
  /**
  *
  * @param {Number | Null} id it will be on front if id is null
  */
  set zIndex(t) {
    const e = this.renderer.container.node(), r = this.renderer.group.node();
    if (!e || !r) throw new Error("container or graphic element is null");
    t == null || t >= e.children.length ? e.appendChild(r) : e.insertBefore(r, e.children[t]);
  }
  observeProperties() {
    Object.keys(this.data).forEach((t) => {
      let e = this.data[t];
      Object.defineProperty(this.data, t, {
        enumerable: !0,
        get: () => e,
        set: (r) => {
          const i = e;
          e = r, this.data.isMonitoring && (this.containerInterface.observerCallback(new ta(this, t, r, i)), this.render());
        }
      });
    });
  }
  changeRender(t, e) {
    this.data.render = t, this.destroy(), this.renderer = e, this.create();
  }
  create() {
    this.renderer.create(), this.observeProperties();
  }
  destroy() {
    this.renderer.destroy();
  }
  render() {
    this.renderer.render(), this.containerInterface.renderCallback(this);
  }
  moveTo(t, e) {
    this.editProp(() => {
      this.x += t, this.y += e;
    });
  }
  /**
   *
   * @param userInteraction 사용자 인터랙션으로 호출된 여부 확인 true인 경우, user가 의도한 select
   * @param typeClick
   */
  select(t = !1, e = "") {
    this.data.isSelected === !1 && (this.data.isSelected = !0, this.containerInterface.selectCallback(this, t, e));
  }
  release(t = !1) {
    this.data.isSelected && (this.data.isSelected = !1, this.containerInterface.releaseCallback(this, t));
  }
  editLabel() {
    this.renderer.editLabelMode();
  }
  getDataOrNull(t) {
    return this.renderer.dataWrapper.get(t) || null;
  }
  editProp(t) {
    try {
      this.data.isMonitoring = !1, t();
    } finally {
      this.data.isMonitoring = !0;
    }
  }
}
const ea = /translate\((-?[\d.]+),\s*?(-?[\d.]+)\)/, na = /scale\(([\d.]+),\s*?([\d.]+)\)/, sn = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
}, A = 45, ra = {
  node: { ...Qn },
  group: { ...Jn },
  connection: { ...Zn }
}, an = (n, t) => {
  switch (n.id) {
    case t.sourceObjId:
      return sn[t.sourcePos];
    case t.destinationObjId:
      return sn[t.destinationPos];
    default:
      throw new Error("It's not connected.");
  }
}, ia = (n) => {
  if (n.indexOf("left") !== -1)
    return "left";
  if (n.indexOf("right") !== -1)
    return "right";
  if (n.indexOf("top") !== -1)
    return "top";
  if (n.indexOf("bottom") !== -1)
    return "bottom";
  throw new Error(`Invalid argument '${n}'`);
}, oa = (n) => {
  const t = ea.exec(n), e = na.exec(n);
  let r = 0, i = 0, o = 1;
  return t && (r = parseFloat(t[1]), i = parseFloat(t[2])), e && (o = parseFloat(e[1])), {
    translateX: r,
    translateY: i,
    scale: o
  };
}, B = (n, t, e) => {
  n[t] === void 0 && (n[t] = e);
}, sa = (n) => {
  switch (B(n, "cursor", "move"), n.temp && (B(n, "node.resizerEnabled", !1), B(n, "node.connectorEnabled", !1)), n.render) {
    case "start": {
      B(n, "node.resizerEnabled", !1);
      break;
    }
    case "comment": {
      B(n, "node.connectorEnabled", !1);
      break;
    }
    case "bridge": {
      B(n, "editable", 20), B(n, "node.width", 20), B(n, "node.height", 20), B(n, "node.resizerEnabled", !1);
      break;
    }
  }
}, aa = (n) => {
  B(n, "cursor", "pointer"), (n["connection.points"] === null || n["connection.points"] === void 0) && (n["connection.points"] = []);
  const t = n["connection.points"];
  for (let e = t.length; e < 2; e++)
    t.push({ x: 0, y: 0 });
}, rr = (n, t) => Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)), cn = (n, t) => {
  const e = ra[n.type];
  if (e === void 0)
    throw new Error(`Unknown type '${n.type}'`);
  for (const r of Object.keys(e))
    n[r] === void 0 && (n[r] = t[r]);
  return n;
};
function ca(n, t, e) {
  n[t] || Object.assign(n, { [t]: e });
}
function ha(n, t) {
  switch (ca(n, "fontFamily", t), n.type) {
    case "node": {
      sa(n);
      break;
    }
    case "connection": {
      aa(n);
      break;
    }
    case "group": {
      B(n, "borderDash.selected", 1);
      break;
    }
  }
}
const la = (n) => {
  const t = {
    ...n.data
  }, e = n.firstPoint;
  switch (n.sourcePos) {
    case "top": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y - A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y - A
        }
      ];
      break;
    }
    case "bottom": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y + A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
    }
    case "left": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x - A,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x - A,
          y: e.y + A
        }
      ];
      break;
    }
    case "right": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
    }
    default:
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A / 2,
          y: e.y + A / 2
        },
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
  }
  return t;
}, ht = (n) => {
  const t = [];
  return n.forEach((e) => {
    t.push(xn(e.data));
  }), t;
}, Ee = (n) => xn(n), hn = function* (n) {
  switch (n.type) {
    case "node":
      yield {
        key: "node.x",
        value: n["node.x"]
      }, yield {
        key: "node.y",
        value: n["node.y"]
      };
      break;
    case "connection":
      yield {
        key: "connection.sourceObjId",
        value: n["connection.sourceObjId"]
      }, yield {
        key: "connection.sourcePos",
        value: n["connection.sourcePos"]
      }, yield {
        key: "connection.destinationObjId",
        value: n["connection.destinationObjId"]
      }, yield {
        key: "connection.destinationPos",
        value: n["connection.destinationPos"]
      }, yield {
        key: "connection.points",
        value: Ee(n["connection.points"])
      };
      break;
    case "group":
      break;
    default:
      throw new Error(`Unknow type '${n.type}'`);
  }
};
function ir(n, t, e, r) {
  n.attr("x", t).attr("y", e).attr("fill", r.foreColor).attr("font-size", r.fontSize).attr("text-decoration", r.textDecoration);
}
function or(n, t, e, r, i) {
  ir(n, e, r, i), t.lines.forEach((o, s) => {
    const a = n.append("tspan").attr("x", e).attr("dx", 0).attr("dy", s === 0 ? 0 : t.lineHeight).text(o);
    o.trim() === "" && a.attr("opacity", "0").attr("fill-opacity", "0").text(".");
  });
}
const da = (n, t) => {
  n.selectAll("tspan").remove(), t.clear();
}, ua = (n) => new _n(n), ln = ["node.width", "node.height"];
class et {
  // TODO js -> ts화 중으로, 현재는 임시 방편.
  // 추후 Flowchart object data에 맞는 타입으로 변환 필요
  _objData;
  _propList;
  constructor(t, e) {
    this._objData = t, this._propList = e || [];
  }
  addMoveOldValues() {
    for (const t of hn(this._objData))
      this._propList.push({
        key: t.key,
        oldValue: t.value
      });
  }
  addSizeOldValues() {
    for (const t of ln)
      this._propList.push({
        key: t,
        oldValue: this._objData[t],
        newValue: this._objData[t]
      });
  }
  updateSizeNewValues() {
    for (const t of ln) {
      const e = this._propList.filter((r) => r.key === t)[0];
      e.newValue = this._objData[t];
    }
  }
  updateMoveNewValues() {
    for (const t of hn(this._objData)) {
      const e = this._propList.filter((r) => r.key === t.key)[0];
      e.newValue = t.value;
    }
  }
  get objData() {
    return this._objData;
  }
  get propList() {
    return this._propList;
  }
}
class ct extends ae {
  changeInfoList;
  constructor(t) {
    super("edit"), this.changeInfoList = t;
  }
  _setValue(t, e) {
    this.changeInfoList.forEach((r) => {
      const i = e.getObjectOrNull(r.objData.id);
      i !== null && i.editProp(() => {
        for (const o of r.propList)
          i.data[o.key] = o[t];
      });
    });
  }
  undo(t) {
    return this._setValue("oldValue", t), super.undo(t);
  }
  redo(t) {
    return this._setValue("newValue", t), super.redo(t);
  }
}
class sr extends ae {
  renderObj;
  oldRender;
  newRender;
  constructor(t, e, r) {
    super("render"), this.renderObj = t, this.oldRender = e, this.newRender = r;
  }
  undo(t) {
    return t.changeObjRender(this.renderObj, this.oldRender), super.undo(t);
  }
  redo(t) {
    return t.changeObjRender(this.renderObj, this.newRender), super.redo(t);
  }
}
class ar extends ae {
  dataList;
  constructor(t) {
    super("front"), this.dataList = t;
  }
  _setZId(t, e, r) {
    const i = (h) => {
      const l = r.getObjectOrNull(h.objId);
      if (l === null) {
        r.getLogger().error(
          "ZIndexCommand._setZId()",
          `Could not find obj id '${h.objId}'`
        );
        return;
      }
      l.zIndex = h[t];
    }, [o, s, a] = e ? [0, this.dataList.length, 1] : [this.dataList.length - 1, -1, -1];
    let c = o;
    for (; o !== s; )
      i(this.dataList[c]), c += a;
  }
  undo(t) {
    return this._setZId("oldValue", !1, t), super.undo(t);
  }
  redo(t) {
    return this._setZId("newValue", !0, t), super.redo(t);
  }
}
const fa = new _n("Flowchart::ObjectManager");
class ga {
  objMap;
  constructor() {
    this.objMap = {
      node: /* @__PURE__ */ new Map(),
      connection: /* @__PURE__ */ new Map(),
      group: /* @__PURE__ */ new Map()
    };
  }
  getMap(t) {
    const e = this.objMap[t];
    if (e === void 0)
      throw fa.error("ObjectManager.getMap()", `Unknown '${t}' type`), new Error(`Unknown '${t}' type`);
    return e;
  }
  getObjCount() {
    return this.objMap.node.size + this.objMap.connection.size + this.objMap.group.size;
  }
  add(t) {
    const e = this.getMap(t.type);
    if (e.has(t.id)) throw new Error(`Already has objId '${t.id}'`);
    e.set(t.id, t);
  }
  remove(t) {
    const e = this.getMap(t.type);
    e.has(t.id) && e.delete(t.id);
  }
  *getMapIterator() {
    yield* Object.values(this.objMap);
  }
  getNodeIterator() {
    return this.objMap.node.values();
  }
  getConnectionIterator() {
    return this.objMap.connection.values();
  }
  getGroupIterator() {
    return this.objMap.group.values();
  }
  findOrNull(t) {
    for (const e of this.getMapIterator())
      if (e.has(t))
        return e.get(t);
    return null;
  }
  clear() {
    Object.values(this.objMap).forEach((t) => t.clear());
  }
  *getAllObjIterator() {
    for (const t of Object.values(this.objMap))
      yield* t.values();
  }
  *getSelectedObjIterator() {
    for (const t of this.getAllObjIterator())
      t.isSelected && (yield t);
  }
  getParentGroupOrNull(t) {
    for (const e of this.getGroupIterator())
      if (e.hasObjId(t.id))
        return e;
    return null;
  }
  *getConnectedConnections(t) {
    for (const e of this.getConnectionIterator())
      !e.isTempObj && (e.sourceObjId === t || e.destinationObjId === t) && (yield e);
  }
  reassignId(t, e, r) {
    const i = this.getMap(t.type);
    i.delete(e), i.set(r, t);
  }
}
class pa {
  actionController;
  objectManager;
  iContainer;
  movedInfo;
  constructor(t, e, r) {
    this.actionController = t, this.objectManager = e, this.iContainer = r, this.movedInfo = [];
  }
  moveStartHandler() {
    this.iContainer.getLogger().debug("MoveHandler.moveStartHandler()", "start"), this.movedInfo = [];
    for (const t of this.objectManager.getSelectedObjIterator()) {
      const e = new et(t.data);
      e.addMoveOldValues(), this.movedInfo.push(e);
    }
  }
  moveEndHandler() {
    this.iContainer.getLogger().debug("MoveHandler.moveEndHandler()", "end"), this.movedInfo.forEach((t) => t.updateMoveNewValues()), this.movedInfo.some((t) => t.propList.some((e) => vn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ct(this.movedInfo));
  }
}
const M = {
  CONTEXT_MENU: "contextmenu",
  CLICK: "click",
  CLICK_NODE: "clickNode",
  DOUBLE_CLICK_NODE: "dblClickNode",
  CLICK_CONNECTION: "clickConnection",
  DOUBLE_CLICK_CONNECTION: "dblClickConnection",
  NEW_OBJECT: "newObject",
  REMOVE_OBJECT: "removeObject",
  SELECT_OBJECT: "selectObject",
  RELEASE_OBJECT: "releaseObject",
  UNDO: "undo",
  REDO: "redo",
  CHANGE_CLASS: "changeClass",
  DISCONNECT_NODE: "disconnectNode",
  CONNECT_NODE: "connectNode",
  MOUSEUP_SHEET: "mouseUpSheet"
}, ne = ["left", "right", "top", "bottom"];
class ya {
  actionController;
  objectManager;
  iContainer;
  resizeInfo;
  constructor(t, e, r) {
    this.actionController = t, this.objectManager = e, this.iContainer = r, this.resizeInfo = [];
  }
  resizeCallback(t, e, r, i) {
    for (const o of this.objectManager.getNodeIterator())
      if (o.isSelected && o.id !== t && o.resizerEnabled) {
        const s = o.height / 2, a = o.width / 2;
        switch (e) {
          case "n-resize":
            o.resizeToNorth(-(s + i));
            break;
          case "nw-resize":
            o.resizeToNorth(-(s + i)), o.resizeToWest(-(a + r));
            break;
          case "ne-resize":
            o.resizeToNorth(-(s + i)), o.resizeToEast(a + r);
            break;
          case "w-resize":
            o.resizeToWest(-(a + r));
            break;
          case "e-resize":
            o.resizeToEast(a + r);
            break;
          case "s-resize":
            o.resizeToSouth(s + i);
            break;
          case "sw-resize":
            o.resizeToSouth(s + i), o.resizeToWest(-(a + r));
            break;
          case "se-resize":
            o.resizeToSouth(s + i), o.resizeToEast(a + r);
            break;
          default:
            throw new Error(`Unknown cursor type '${e}'`);
        }
      }
    for (const o of this.objectManager.getGroupIterator())
      o.isSelected && o.render();
  }
  resizeDragStart() {
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragStart()", "start"), this.resizeInfo = [];
    for (const t of this.objectManager.getNodeIterator())
      if (t.isSelected) {
        const e = new et(t.data);
        e.addSizeOldValues(), this.resizeInfo.push(e);
      }
  }
  resizeDragEnd() {
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragEnd()", "end"), this.resizeInfo.forEach((t) => t.updateSizeNewValues()), this.resizeInfo.some((t) => t.propList.some((e) => vn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ct(this.resizeInfo));
  }
  addDragActionOnResizer(t) {
    t.renderer.resizers.forEach((e) => {
      const r = e.attr("cursor");
      e.call(st().filter(() => this.iContainer.getReadOnly() === !1).on("start", (i) => {
        ot(i.sourceEvent.target), this.resizeDragStart(), this.iContainer.initDrag("drag-node-resize");
      }).on("drag", (i) => {
        const o = i.x, s = i.y, a = t.width, c = t.height;
        switch (r) {
          case "nw-resize":
            t.resizeToNorth(s), t.resizeToWest(o);
            break;
          case "n-resize":
            t.resizeToNorth(s);
            break;
          case "ne-resize":
            t.resizeToNorth(s), t.resizeToEast(o);
            break;
          case "w-resize":
            t.resizeToWest(o);
            break;
          case "e-resize":
            t.resizeToEast(o);
            break;
          case "sw-resize":
            t.resizeToSouth(s), t.resizeToWest(o);
            break;
          case "s-resize":
            t.resizeToSouth(s);
            break;
          case "se-resize":
            t.resizeToSouth(s), t.resizeToEast(o);
            break;
          default:
            throw new Error(`Unknown cursor type '${r}'`);
        }
        const h = t.width - a, l = t.height - c;
        this.resizeCallback(t.id, r, h, l);
      }).on("end", () => {
        this.resizeDragEnd(), this.iContainer.terminateDrag("drag-node-resize");
      }));
    });
  }
}
function ma(n) {
  const t = document.createElement("div"), e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = document.createElement("span");
  return e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.style.background = "#fff", e.classList.add("ir-fw-svg"), t.classList.add("flowchart", "ir-flowchart"), t.tabIndex = 0, r.className = "ir-flowchart-hidden", r.textContent = "copy-range", e.innerHTML = `
<defs>
    <pattern
        id="${n}_small_grid"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse">
        <path
        d="M 10 0 L 0 0 0 10"
        fill="none"
        stroke="gray"
        stroke-width="0.5"/>
    </pattern>
    <pattern
        id="${n}_grid"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse">
        <rect
        width="100"
        height="100"
        fill="url(#${n}_small_grid)"/>
        <path
        d="M 100 0 L 0 0 0 100"
        fill="none"
        stroke="gray"
        stroke-width="1"/>
    </pattern>
</defs>`, t.appendChild(e), t.appendChild(r), { div: t, svg: e, span: r };
}
class ba extends Re {
  get points() {
    return this.data["connection.points"];
  }
  get endX() {
    return this.points.reduce((t, e) => Math.max(t, e.x), 0);
  }
  get endY() {
    return this.points.reduce((t, e) => Math.max(t, e.y), 0);
  }
  get sourceObjId() {
    return this.data["connection.sourceObjId"] || null;
  }
  get sourceObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.sourceObjId"]);
  }
  get destinationObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.destinationObjId"]);
  }
  get destinationObjId() {
    return this.data["connection.destinationObjId"] || null;
  }
  get sourcePos() {
    return this.data["connection.sourcePos"] || null;
  }
  get destinationPos() {
    return this.data["connection.destinationPos"] || null;
  }
  get firstPoint() {
    return this.points[0];
  }
  get endPoint() {
    return this.points[this.points.length - 1];
  }
  get startX() {
    return this.points.reduce((t, e) => Math.min(t, e.x), Number.MAX_VALUE);
  }
  get startY() {
    return this.points.reduce((t, e) => Math.min(t, e.y), Number.MAX_VALUE);
  }
  get width() {
    if (!this.points)
      return NaN;
    const t = this.points.reduce((e, r) => ({
      min: Math.min(e.min, r.x),
      max: Math.max(e.max, r.x)
    }), { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return t.max - t.min;
  }
  get height() {
    if (!this.points)
      return NaN;
    const t = this.points.reduce((e, r) => ({
      min: Math.min(e.min, r.y),
      max: Math.max(e.max, r.y)
    }), { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return t.max - t.min;
  }
  get x() {
    const t = this.firstPoint;
    return t !== null ? t.x : null;
  }
  get y() {
    const t = this.firstPoint;
    return t !== null ? t.y : null;
  }
  set sourceObjId(t) {
    this.data["connection.sourceObjId"] = t || null;
  }
  set destinationObjId(t) {
    this.data["connection.destinationObjId"] = t || null;
  }
  set sourcePos(t) {
    this.data["connection.sourcePos"] = t || null;
  }
  set destinationPos(t) {
    this.data["connection.destinationPos"] = t || null;
  }
  set x(t) {
    if (this.sourceObjId !== null)
      return;
    const e = this.firstPoint;
    e !== null && (e.x = t, this.render());
  }
  set y(t) {
    if (this.sourceObjId !== null)
      return;
    const e = this.firstPoint;
    e !== null && (e.y = t, this.render());
  }
  setLastPointXY(t, e) {
    this.data["connection.points"][this.renderer.lastPointId].x = t, this.data["connection.points"][this.renderer.lastPointId].y = e, this.render();
  }
  moveTo(t, e) {
    if (this.sourceObj && this.destinationObj)
      return;
    const r = this.sourceObj === null ? 0 : 1, i = this.points.length - (this.destinationObj === null ? 0 : 1);
    this.editProp(() => {
      this.points.slice(r, i).forEach((o) => {
        o.x += t, o.y += e;
      });
    });
  }
  comparePoints(t) {
    if (!this.points || !t || this.points.length !== t.length)
      return !1;
    for (let e = 0; e < t.length; e++)
      if (this.points[e].x !== t[e].x && this.points[e].y !== t[e].y)
        return !1;
    return !0;
  }
}
class wa extends Re {
  constructor(t, e, r) {
    super(t, e, r), this.objectSet = new Set(this.data.objectList || []), this.rect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  get startX() {
    return this.x;
  }
  get startY() {
    return this.y;
  }
  get x() {
    return this.rect.x;
  }
  get y() {
    return this.rect.y;
  }
  get width() {
    return this.rect.width;
  }
  get height() {
    return this.rect.height;
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    return this.y + this.height;
  }
  select(t, e = "") {
    this.objectSet.forEach((r) => {
      const i = this.containerInterface.getObjectOrNull(r);
      i != null && (e == "" || e != "" && e == i.renderType) && (i.data.isSelected = !0);
    }), super.select(t);
  }
  release(t = !1) {
    this.objectSet.forEach((e) => {
      const r = this.containerInterface.getObjectOrNull(e);
      r?.release(t);
    }), super.release(t);
  }
  resize() {
    const t = this.data["group.margin"];
    let e = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, o = Number.MIN_VALUE;
    this.objectSet.forEach((s) => {
      const a = this.containerInterface.getObjectOrNull(s);
      a !== null && (e = Math.min(a.startX - t, e), i = Math.max(a.endX + t, i), r = Math.min(a.startY - t, r), o = Math.max(a.endY + t, o));
    }), this.data["group.rect"] = this.rect, this.rect.x = e, this.rect.y = r, this.rect.width = i - e, this.rect.height = o - r;
  }
  moveTo() {
    this.render();
  }
  hasObjId(t) {
    return this.objectSet.has(t);
  }
  destroy() {
    this.objectSet.clear(), super.destroy();
  }
  destroyAll() {
    this.objectSet.forEach((t) => {
      const e = this.containerInterface.getObjectOrNull(t);
      e != null && this.containerInterface.removeObject(e);
    }), this.destroy();
  }
  // clear all items in this
  clear() {
    this.objectSet.clear();
  }
  addObject(t) {
    if (this.objectSet.has(t) === !1)
      this.objectSet.add(t), this.resize();
    else
      throw new Error(`Already has added id! '${t}'`);
  }
  removeObject(t) {
    if (this.objectSet.has(t))
      this.objectSet.delete(t), this.resize();
    else
      throw new Error(`There is no id you received in this group!'${t}'`);
  }
}
const pt = 6, xa = 2, dn = 5, it = [
  ["ir-fw-top-l", "start", "TopLeft"],
  ["ir-fw-top-c", "middle", "TopCenter"],
  ["ir-fw-top-r", "end", "TopRight"],
  ["ir-fw-bottom-l", "start", "BottomLeft"],
  ["ir-fw-bottom-c", "middle", "BottomCenter"],
  ["ir-fw-bottom-r", "end", "BottomRight"]
];
class _t extends $e {
  svg;
  connectors;
  resizers;
  comments;
  backgroundRect;
  constructor(t, e, r) {
    super(t, e, r), this.svg = this.containerInterface.getSvg(), this.connectors = [], this.resizers = [], this.comments = [], this.backgroundRect = this.group.append("rect").attr("opacity", "0");
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get connectorVisibility() {
    return this.data["node.connectorEnabled"];
  }
  get resizerVisibility() {
    return this.data["node.resizerEnabled"] === !0 && this.data.isSelected;
  }
  _createComments() {
    it.forEach(([t, e]) => {
      this.comments.push(this.group.append("text").attr("class", `${t} ir-fw-unselectable`).attr("text-anchor", e));
    });
  }
  _createResizer() {
    const t = this.group;
    for (const e of this.getResizerPosition()) {
      const r = t.append("rect").attr("x", e[0] - pt / 2).attr("y", e[1] - pt / 2).attr("width", pt).attr("height", pt).attr("fill", "rgb(173, 216, 230)").attr("stroke", "rgb(30, 144, 255)").attr("cursor", e[2]).attr("class", "ir-fw-resizer").attr("visibility", "hidden");
      this.resizers.push(r);
    }
  }
  _createConnector() {
    const t = this.group;
    for (const e of this.getConnectorPosition()) {
      const r = t.append("circle").attr("cx", e.x).attr("cy", e.y).attr("visibility", "hidden").attr("r", this.dataWrapper.get("node.connectorSize")).attr("class", `ir-fw-connector ir-fw-${e.dir}`);
      this.connectors.push(r);
    }
  }
  _renderComments() {
    const e = this.dataWrapper.get("node.commentFontSize"), r = this.width / 2, i = this.height / 2, o = -(i + dn), s = i + dn + e, a = {
      [it[0][0]]: {
        x: -r,
        y: o
      },
      [it[1][0]]: {
        x: 0,
        y: o
      },
      [it[2][0]]: {
        x: r,
        y: o
      },
      [it[3][0]]: {
        x: -r,
        y: s
      },
      [it[4][0]]: {
        x: 0,
        y: s
      },
      [it[5][0]]: {
        x: r,
        y: s
      }
    };
    it.forEach((c, h) => {
      const l = a[c[0]];
      this.comments[h].attr("x", l.x).attr("y", l.y).attr("font-size", e).text(() => this.dataWrapper.get(`node.comment${c[2]}`));
    });
  }
  _renderConnector() {
    if (this.connectorVisibility) {
      this.group.attr("data-connector-visible", "true");
      for (const { x: t, y: e, id: r } of this.getConnectorPosition())
        this.connectors[r].attr("cx", t).attr("cy", e).attr("r", this.dataWrapper.get("node.connectorSize"));
    } else
      this.group.attr("data-connector-visible", "false"), this.connectors.forEach((t) => t.remove());
  }
  _renderResizer() {
    if (this.resizers.length === 0)
      return;
    let t = 0;
    for (const e of this.getResizerPosition()) {
      const r = this.resizers[t], i = r.node();
      this.isHovered && this.resizerVisibility && this.containerInterface.getReadOnly() === !1 && i !== null ? (this.bringToFrontElement(i), r.attr("x", e[0] - pt / 2).attr("y", e[1] - pt / 2).attr("class", "ir-fw-resizer").attr("visibility", "visible").classed("ir-fw-active", !0)) : r.classed("ir-fw-active", !1).attr(
        "visibility",
        this.resizerVisibility && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden"
      ), ++t;
    }
  }
  *getConnectorPosition() {
    const t = this.dataWrapper.get("node.connectorGap"), e = this.width / 2, r = this.height / 2;
    yield { x: -(t + e), y: 0, dir: "left", id: 0 }, yield { x: e + t, y: 0, dir: "right", id: 1 }, yield { x: 0, y: -(t + r), dir: "top", id: 2 }, yield { x: 0, y: t + r, dir: "bottom", id: 3 };
  }
  *getResizerPosition() {
    const t = this.width / 2, e = this.height / 2;
    yield [-t, -e, "nw-resize"], yield [0, -e, "n-resize"], yield [t, -e, "ne-resize"], yield [-t, 0, "w-resize"], yield [t, 0, "e-resize"], yield [-t, e, "sw-resize"], yield [0, e, "s-resize"], yield [t, e, "se-resize"];
  }
  _create() {
    this._createComments(), this._createConnector(), this._createResizer();
  }
  _getLabelXY({ lineHeight: t, length: e }) {
    return { x: 0, y: t - t * e / 2 - xa };
  }
  _getLabelRect() {
    const t = this.width, e = this.height;
    return {
      x: -(t / 2),
      y: -(e / 2),
      width: t,
      height: e
    };
  }
  _resizerVisibleBackgroundRect() {
    this.backgroundRect.attr("x", -(this.width / 2)).attr("y", -(this.height / 2)).attr("width", this.width).attr("height", this.height).style("fill", "white");
  }
  render() {
    const t = this.data["node.x"] + this.data["node.width"] / 2, e = this.data["node.y"] + this.data["node.height"] / 2;
    this.group.attr("transform", `translate(${t}, ${e})`), this.resizerVisibility ? this._resizerVisibleBackgroundRect() : this.backgroundRect.style("fill", "none"), super.render(), this._renderComments(), this._renderResizer(), this._renderConnector();
  }
}
const un = 5, Ht = 10, Xt = 30, Ft = 30, _a = /* @__PURE__ */ new Set([
  "TopLeft",
  "TopCenter",
  "TopRight",
  "BottomLeft",
  "BottomCenter",
  "BottomRight"
]);
class va extends Re {
  /**
  * @param {NodeRenderer} renderer
  */
  constructor(t, e, r) {
    super(t, e, r), this.renderer = e;
  }
  get startX() {
    return this.x;
  }
  get startY() {
    const e = this.data["node.commentTopLeft"] || this.data["node.commentTopCenter"] || this.data["node.commentTopRight"] ? un + this.data["node.commentFontSize"] : 0;
    return this.y - e;
  }
  get resizerEnabled() {
    return this.data["node.resizerEnabled"] === !0;
  }
  get isConnectorEnabled() {
    return this.data["node.connectorEnabled"] === !0;
  }
  get centerX() {
    return this.x + this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  get x() {
    return this.data["node.x"];
  }
  get y() {
    return this.data["node.y"];
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    const e = this.data["node.commentBottomLeft"] || this.data["node.commentBottomCenter"] || this.data["node.commentBottomRight"] ? un + this.data["node.commentFontSize"] : 0;
    return this.y + this.height + e;
  }
  set x(t) {
    this.data["node.x"] = t;
  }
  set y(t) {
    this.data["node.y"] = t;
  }
  set width(t) {
    this.data["node.width"] = t;
  }
  set height(t) {
    this.data["node.height"] = t;
  }
  create() {
    super.create();
  }
  getPositionXY(t) {
    switch (t) {
      case "left":
        return {
          x: this.x,
          y: this.y + this.height / 2
        };
      case "right":
        return {
          x: this.x + this.width,
          y: this.y + this.height / 2
        };
      case "top":
        return {
          x: this.x + this.width / 2,
          y: this.y
        };
      case "bottom":
        return {
          x: this.x + this.width / 2,
          y: this.y + this.height
        };
      default:
        throw new Error(`Invalid argument '${t}'`);
    }
  }
  fitSizeOnText() {
    const t = nr(this.data), e = je * 2;
    this.width = t.width + e, this.height = t.height + e;
  }
  resizeToNorth(t) {
    const e = -(this.height / 2), r = parseInt(e - t);
    this.height + r >= Ft ? (this.y -= r, this.height = this.height + r) : (this.y += this.height - Ft, this.height = Ft);
  }
  resizeToWest(t) {
    const e = -(this.width / 2), r = parseInt(e - t);
    this.width + r >= Xt ? (this.x -= r, this.width = this.width + r) : (this.x += this.width - Xt, this.width = Xt);
  }
  addComment(t, e, r) {
    if (!_a.has(e))
      throw new Error(`Unknown position value '${e}' Please call with 'TopLeft' or 'TopCenter' or 'TopRight' or 'BottomLeft' or 'BottomCenter' or 'BottomRight'`);
    let i = `node.comment${e}`;
    r && (i += `.${r}`), this.data[i] = t;
  }
  resizeToEast(t) {
    this.width = Math.max(Xt, parseInt(t + this.width / 2));
  }
  resizeToSouth(t) {
    this.height = Math.max(Ft, parseInt(t + this.height / 2));
  }
  isContained(t, e) {
    return t >= this.startX && t <= this.endX && e >= this.startY && e <= this.endY;
  }
  isContainedOnPos(t, e, r) {
    const { x: i, y: o } = this.getPositionXY(t), [s, a, c, h] = [
      i - Ht,
      i + Ht,
      o - Ht,
      o + Ht
    ];
    return e >= s && e <= a && r >= c && r <= h;
  }
}
const Oa = '{"objects": []}', fn = {}, pe = {
  saveData(n) {
    lr(fn, n);
  },
  loadData() {
    return hr(fn) ?? Oa;
  }
}, Sa = 10, Ca = 10, ja = 500, Ea = 200;
class Ia {
  containerInterface;
  tmpOut = !1;
  isFirefox;
  tooltip;
  constructor(t) {
    this.containerInterface = t, this.tooltip = {
      objId: null,
      mouseOverTimer: null,
      mouseOutTimer: null,
      g: null,
      textCache: new tr()
    }, this.isFirefox = window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  }
  initCommonMouseOverOutAction(t) {
    let e = 0, r = 0;
    t.g.on("mousemove", (i) => {
      e = i.offsetX + Sa, r = i.offsetY + Ca;
    }).on("mouseover", () => {
      t.isHovered = !0, this.containerInterface.getSelectNodeOnHover() && t.type === "node" && !this.containerInterface.isDragging() && (this.containerInterface.releaseAllObjects(), t.select(!0)), !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOutTimer != null && this.tooltip.mouseOutTimer.stop(), this.tooltip.mouseOverTimer = ee(() => {
        t.isHovered && t.onEditing === !1 && t.id !== this.tooltip.objId && !this.containerInterface.getTooltipHidden() && this.createTooltipObj(t.data, e, r);
      }, ja));
    }).on("mouseout", () => {
      t.isHovered = !1, !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOverTimer != null && this.tooltip.mouseOverTimer.stop(), this.tooltip.mouseOutTimer = ee(
        () => void (!t.isHovered && this.removeTooltipObj()),
        Ea
      ));
    });
  }
  createTooltipObj(t, e, r) {
    this.removeTooltipObj(), this.tooltip.objId = t.id, this.tooltip.g = this.containerInterface.getSvg().append("g").attr("class", "ir-fw-tooltip");
    const i = this.containerInterface.getObjectOrNull(this.tooltip.objId);
    if (i === null)
      return;
    const o = {
      text: i.getDataOrNull("tooltipText"),
      foreColor: i.getDataOrNull("tooltipForeColor"),
      fontFamily: i.getDataOrNull("fontFamily"),
      fontSize: i.getDataOrNull("tooltipFontSize"),
      textDecoration: i.getDataOrNull("tooltipTextDecoration"),
      padding: i.getDataOrNull("tooltipPadding"),
      fill: i.getDataOrNull("tooltipFill"),
      borderColor: i.getDataOrNull("tooltipBorderColor"),
      borderWidth: i.getDataOrNull("tooltipBorderWidth"),
      borderDash: i.getDataOrNull("tooltipBorderDash"),
      width: 0
    }, s = nr(o);
    o.width = Math.min(s.width, i.data.tooltipMaxWidth);
    const a = Pe(o);
    this.tooltip.g.append("rect").attr("x", e).attr("y", r).attr("rx", "4").attr("width", o.width + o.padding * 2).attr("height", a.lineHeight * a.length + o.padding * 2).attr("fill", o.fill).attr("stroke", o.borderColor).attr("stroke-width", o.borderWidth).attr("stroke-dasharray", o.borderDash);
    const c = this.tooltip.g.append("text").attr("fill", o.foreColor).attr("font-size", o.fontSize).attr("text-decoration", o.textDecoration);
    or(
      c,
      a,
      e + o.padding,
      r + o.padding + o.fontSize,
      o
    );
  }
  removeTooltipObj() {
    this.tooltip.g !== null && (this.tooltip.g.remove(), this.tooltip.objId = null, this.tooltip.g = null, this.tooltip.textCache.clear());
  }
  addMouseAction(t) {
    this.initCommonMouseOverOutAction(t);
  }
}
class ka extends _t {
  constructor(t, e) {
    super(t, "bridge", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this.objects.body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", (e + r) / 6).style("width", `${e}px`).style("height", `${r}px`).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash"));
  }
}
const yt = 15, Ma = -4, Ta = 2;
class Aa extends _t {
  constructor(t, e) {
    super(t, "comment", e);
  }
  _create() {
    this.objects.body = this.group.append("path").attr("class", "body").classed(this.data.type, !0), super._create();
  }
  _getPath() {
    const t = [], e = this.width / 2, r = this.height / 2, i = -e, o = -r;
    return t.push(`M${i} ${o}`), t.push(`L${e - yt} ${o}`), t.push(`L${e},${o + yt}`), t.push(`L${e},${r}`), t.push(`L${i},${r}`), t.push("Z"), t.push(`M${e - yt} ${o}`), t.push(`L${e - (yt + Ma)} ${o + (yt + Ta)}`), t.push(`L${e} ${o + yt}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this.objects.body.attr("d", this._getPath()).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
const za = 0.28;
class Na extends _t {
  constructor(t, e) {
    super(t, "db", e);
  }
  _create() {
    this.objects.circle = this.group.append("ellipse"), this.objects.body = this.group.append("path"), super._create();
  }
  get circleHeight() {
    return this.height * za;
  }
  _getPath() {
    const t = [], e = this.height / 2, r = this.circleHeight / 2, i = this.width / 2, o = -i, s = i, a = -e + r, c = e - r;
    return t.push(`M${o} ${a}`), t.push(`A${i} ${r} 0 0 0 ${s} ${a}`), t.push(`V${c}`), t.push(`A${i} ${r} 0 0 1 ${o} ${c}`), t.push(`V${a}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper, e = this.circleHeight / 2, r = this.width / 2, o = -(this.height / 2) + e, s = {
      fill: t.get("node.fill"),
      borderWidth: t.get("borderWidth"),
      borderColor: t.get("borderColor"),
      borderDash: t.get("borderDash")
    };
    this.objects.circle.attr("cx", 0).attr("cy", o).attr("rx", r).attr("ry", e).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this.objects.body.attr("d", this._getPath()).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this._createText();
  }
}
class cr extends $e {
  /**
  *
  * @param {*} container
  * @param {*} data
  * @param {*} className
  * @param {IContainer} iContainer
  */
  constructor(t, e, r) {
    super(t, e, r), this.markerId = `${this.containerInterface.getUUID()}_marker_${this.data.id}`, this.objects.marker = this.group.append("svg:defs").append("svg:marker").attr("id", this.markerId), this.objects.markerPath = this.objects.marker.append("path"), this.checkChanged = {
      points: null,
      srcX: 0,
      srcY: 0,
      desX: 0,
      desY: 0
    };
  }
  get width() {
    return this.data["connection.width"];
  }
  get height() {
    return 0;
  }
  get lastPointId() {
    return this.data["connection.points"].length - 1;
  }
  create() {
    super.create(), this.bringToFrontElement(this.objects.sourceConnector.node()), this.bringToFrontElement(this.objects.destinationConnector.node());
  }
  _createConnector() {
    this.objects.sourceConnector = this.group.append("circle").attr("cursor", "crosshair"), this.objects.destinationConnector = this.group.append("circle").attr("cursor", "crosshair");
  }
  _getPosLocation(t, e) {
    let r = 0, i = 0;
    switch (e) {
      case "left":
        r = -(t.width / 2);
        break;
      case "right":
        r = t.width / 2;
        break;
      case "top":
        i = -(t.height / 2);
        break;
      case "bottom":
        i = t.height / 2;
        break;
      default:
        throw new Error(`Invalid argument '${e}'`);
    }
    return {
      x: r,
      y: i
    };
  }
  _getBBox() {
    return this.objects.text.node().getBBox();
  }
  _getLabelRect() {
    const t = this._getBBox(), e = t.width + 10, r = t.height + 10;
    return {
      x: parseFloat(this.objects.text.attr("x")) - e / 2,
      y: parseFloat(this.objects.text.attr("y")) - 5 - this.data.fontSize,
      width: e,
      height: Math.max(r, this.data.fontSize + 10)
    };
  }
  _renderMarker() {
    const t = this.dataWrapper, e = t.get("borderWidth"), r = t.get("connection.arrowSize"), i = t.get("connection.arrowFill"), o = t.get("connection.arrowBorderColor"), s = t.get("connection.arrowBorderWidth"), a = (r + s) / e, c = s / e;
    this.objects.markerPath.attr("fill", i).attr("stroke", o).attr("stroke-width", c);
    const h = t.get("connection.arrowType");
    switch (this.objects.marker.attr("refY", a / 2).attr("markerWidth", a).attr("markerHeight", a).attr("orient", "auto"), h) {
      case "triangle":
        this._renderTriangleMarker(a, c);
        break;
      case "circle":
        this._renderCircleMarker(a, c);
        break;
      default:
        throw new Error(`unknown render type '${h}'`);
    }
  }
  _renderTriangleMarker(t, e) {
    const r = t - e;
    this.objects.marker.attr("refX", t), this.objects.markerPath.attr("d", `M ${e} ${e} L ${r} ${t / 2} L ${e} ${r} z`);
  }
  _renderCircleMarker(t, e) {
    const r = t / 2, i = (t - e) / 2;
    this.objects.marker.attr("refX", r), this.objects.markerPath.attr("d", `M ${r} ${r} m ${i} 0 a ${i} ${i} 0 1 0 -${i * 2} 0 a ${i} ${i} 0 1 0 ${i * 2} 0`);
  }
  _renderConnector() {
    const t = this.dataWrapper, e = this._getSourceLoc(), r = this._getDestinationLoc(), i = {
      size: t.get("connection.connectorSize"),
      fill: t.get("connection.connectorFill")
    };
    this.objects.sourceConnector.attr("cx", e.x).attr("cy", e.y).attr("r", i.size).attr("fill", i.fill).attr("visibility", this.subUiVisibility), this.objects.destinationConnector.attr("cx", r.x).attr("cy", r.y).attr("r", i.size).attr("fill", i.fill).attr("visibility", this.subUiVisibility);
  }
  _getSourceLoc() {
    return this._getNodePositionLoc(
      this.data["connection.sourceObjId"],
      this.data["connection.sourcePos"],
      0
    );
  }
  _getDestinationLoc() {
    return this._getNodePositionLoc(
      this.data["connection.destinationObjId"],
      this.data["connection.destinationPos"],
      this.lastPointId
    );
  }
  _recordLastInfo(t, e) {
    this.checkChanged.points = this.data["connection.points"], this.checkChanged.srcX = t.x, this.checkChanged.srcY = t.y, this.checkChanged.desX = e.x, this.checkChanged.desY = e.y;
  }
  _updatePoints(...t) {
    this.data["connection.points"] === void 0 || this.data["connection.points"] === null ? this.data["connection.points"] = [] : this.data["connection.points"].splice(
      0,
      this.data["connection.points"].length
    ), t.forEach((e) => this.data["connection.points"].push(e));
  }
  _isChanged(t, e) {
    try {
      const r = this.checkChanged.srcX - this.checkChanged.desX, i = t.x - e.x, o = this.checkChanged.srcY - this.checkChanged.desY, s = t.y - e.y;
      return r !== i || o !== s;
    } finally {
      this._recordLastInfo(t, e);
    }
  }
  _getNodePositionLoc(t, e, r) {
    if (t && e) {
      const i = this.containerInterface.getObjectOrNull(t);
      if (i === null)
        return this.data["connection.points"] && this.data["connection.points"].length > r ? {
          x: this.data["connection.points"][r].x,
          y: this.data["connection.points"][r].y
        } : {
          x: 0,
          y: 0
        };
      {
        const o = this._getPosLocation(i, e), s = oa(i.renderer.group.attr("transform"));
        return {
          x: o.x + s.translateX,
          y: o.y + s.translateY
        };
      }
    } else {
      if (this.data["connection.points"] && this.data["connection.points"].length > r)
        return {
          x: this.data["connection.points"][r].x,
          y: this.data["connection.points"][r].y
        };
      throw new Error("Invalid points value.");
    }
  }
}
class Da extends cr {
  constructor(t, e) {
    super(t, "direct", e);
  }
  _create() {
    this.objects.line = this.group.append("line").attr("marker-end", `url(#${this.markerId})`), this.objects.wideLine = this.group.append("line").attr("class", "wide-line").style("stroke", "rgba(0, 0, 0, 0)"), this.objects.rect = this.group.append("rect"), this._createConnector();
  }
  _getLabelXY(t) {
    const e = this._getSourceLoc(), r = this._getDestinationLoc();
    return {
      x: e.x + (r.x - e.x) / 2,
      y: e.y + (r.y - e.y) / 2 + (this.data.fontSize - this.data.fontSize * t.length / 2)
    };
  }
  _render() {
    const t = this.dataWrapper, e = this.data["connection.points"], r = this._getSourceLoc(), i = this._getDestinationLoc(), o = {
      borderColor: t.get("borderColor"),
      borderWidth: t.get("borderWidth"),
      borderDash: t.get("borderDash"),
      text: t.get("text"),
      fill: t.get("connection.textBorderFill"),
      textBorderColor: t.get("connection.textBorderColor"),
      textBorderWidth: t.get("connection.textBorderWidth"),
      textBorderDash: t.get("connection.textBorderDash")
    };
    if (this._renderConnector(), this._renderMarker(), this._isChanged(r, i) && this._updatePoints(r, i), this.objects.line.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke", o.borderColor).style("stroke-width", o.borderWidth).style("stroke-dasharray", o.borderDash), this.objects.wideLine.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke-width", Math.max(o.borderWidth, 5)), this._createText(), o.text) {
      const s = this._getBBox(), a = s.width + 10, c = s.height + 10;
      this.objects.rect.attr("x", s.x - 5).attr("y", s.y - 5).attr("width", a).attr("height", c).style("fill", o.fill).style("stroke", o.textBorderColor).style("stroke-width", o.textBorderWidth).style("stroke-dasharray", o.textBorderDash);
    } else
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
  }
}
const Yt = 20, lt = 10, gn = lt / 2;
class Pa extends cr {
  constructor(t, e) {
    super(t, "elbow", e), this.adjusterList = [], this.elbowMap = {
      top: this._topTo,
      bottom: this._bottomTo,
      left: this._leftTo,
      right: this._rightTo
    };
  }
  _create() {
    this.objects.polyline = this.group.append("polyline").attr("fill", "none").attr("marker-end", `url(#${this.markerId})`), this.objects.wideLine = this.group.append("polyline").attr("fill", "none").style("stroke", "rgba(0, 0, 0, 0)"), this.objects.rect = this.group.append("rect"), this._createConnector();
    const t = this.data["connection.points"];
    t.length === 2 ? this.refreshAdjustList() : (this._recordLastInfo(this._getSourceLoc(), this._getDestinationLoc()), this._createAdjustList(t.slice(1, t.length - 1)));
  }
  _getNextXY(t, e) {
    switch (t) {
      case "left":
        return { x: e.x - Yt, y: e.y };
      case "right":
        return { x: e.x + Yt, y: e.y };
      case "top":
        return { x: e.x, y: e.y - Yt };
      case "bottom":
        return { x: e.x, y: e.y + Yt };
      default:
        throw new Error(`Unknown pos '${t}'`);
    }
  }
  *_topTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, h = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        yield { x: s, y: Math.min(r.y, i.y) };
        break;
      }
      case "bottom": {
        t.y > e.y ? yield { x: s, y: a } : (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: a }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "left": {
        t.x < e.x ? t.y < e.y && (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: h }) : t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: h }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 });
        break;
      }
      case "right": {
        t.x < e.x ? t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: h }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : t.y < e.y && (yield { x: (r.x + s) / 2, y: r.y }, yield { x: s, y: h });
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_bottomTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, h = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? yield { x: s, y: a } : (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: a }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "bottom": {
        yield { x: s, y: Math.max(r.y, i.y) };
        break;
      }
      case "left": {
        t.y < e.y ? t.x > e.x && (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : (yield { x: c, y: r.y }, yield { x: i.x, y: h });
        break;
      }
      case "right": {
        if (t.y < e.y) {
          if (t.x < e.x) {
            const l = (r.y + h) / 2;
            yield { x: c, y: l }, yield { x: i.x, y: (l + i.y) / 2 };
          }
        } else
          yield { x: c, y: r.y }, yield { x: i.x, y: h };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_leftTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, h = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }) : t.x < e.x ? (yield { x: r.x, y: h }, yield { x: c, y: i.y }) : (yield { x: s, y: h }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: r.x, y: h }, yield { x: c, y: i.y }) : (yield { x: s, y: h }, yield { x: (s + i.x) / 2, y: i.y }) : t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
        break;
      }
      case "left": {
        t.x < e.x ? yield { x: r.x, y: a } : yield { x: i.x, y: a };
        break;
      }
      case "right": {
        t.x < e.x ? (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : yield { x: s, y: a };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_rightTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, h = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: (a + i.y) / 2 }) : t.x < e.x ? (yield { x: s, y: h }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: h }, yield { x: c, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: s, y: h }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: h }, yield { x: c, y: i.y }) : t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
        break;
      }
      case "left": {
        t.x < e.x ? yield { x: s, y: a } : (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 });
        break;
      }
      case "right": {
        yield { x: Math.max(r.x, i.x), y: a };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  _getElbowPoints(t, e, r, i) {
    const o = this._getNextXY(r, t), s = this._getNextXY(i, e), a = [], c = this.elbowMap[r];
    if (a.push({ x: t.x, y: t.y }), c === void 0)
      console.error(`unknown position value '${r}'`);
    else
      for (const h of c(t, e, o, s, i))
        a.push(h);
    return a.push({ x: e.x, y: e.y }), a;
  }
  /**
  *
  * @param {[]} points
  * @returns {String}
  */
  _getPolylinePath(t) {
    const e = [];
    let r = t[0].x, i = t[0].y, o = this._getFirstPointDir() === "v";
    e.push([r, i]);
    for (let s = 0; s < t.length - 1; ++s)
      o ? i = t[s + 1].y : r = t[s + 1].x, e.push([r, i]), o = !o;
    return e.push([t[t.length - 1].x, t[t.length - 1].y]), e;
  }
  _getLabelPos(t) {
    const e = t[1], r = t[2];
    return {
      x: (e[0] + r[0]) / 2,
      y: (e[1] + r[1]) / 2
    };
  }
  _getPosToDir(t) {
    switch (t) {
      case "top":
      case "bottom":
        return "v";
      case "left":
      case "right":
        return "h";
      default:
        throw new Error(`Unknown sourcePos '${t}'`);
    }
  }
  _getFirstPointDir() {
    if (this.data["connection.sourcePos"] !== null)
      return this._getPosToDir(this.data["connection.sourcePos"]);
    {
      const t = this._getPos(this._getSourceLoc(), this._getDestinationLoc());
      return this._getPosToDir(t.srcPos);
    }
  }
  _createAdjustList(t) {
    const e = this.data;
    let r = this._getFirstPointDir() === "v";
    this.adjusterList.forEach((i) => i.remove()), this.adjusterList.splice(0, this.adjusterList.length), t.forEach((i, o) => {
      const s = !r;
      let a = 0, c = 0, h = null;
      r = !r;
      const l = this.group.append("rect").attr("x", i.x - lt / 2).attr("y", i.y - lt / 2).attr("width", lt).attr("height", lt).attr("class", "adjuster").attr("cursor", "move").call(st().filter(() => this.containerInterface.getReadOnly() === !1).on("start", (u) => {
        ot(u.sourceEvent.target), a = u.x, c = u.y, h = Ee(this.data["connection.points"]), this.containerInterface.adjDragStartCallback();
      }).on("drag", (u) => {
        const f = e["connection.points"], y = f[o + 1];
        if (s) {
          const O = a - u.x;
          y.x -= O, a = u.x, l.attr("x", y.x - lt / 2), o > 0 && (f[o].x -= O / 2), o + 3 < f.length && (f[o + 2].x -= O / 2);
        } else {
          const O = c - u.y;
          y.y -= O, c = u.y, l.attr("y", y.y - lt / 2), o > 0 && (f[o].y -= O / 2), o + 3 < f.length && (f[o + 2].y -= O / 2);
        }
        this._render();
      }).on("end", () => {
        this.containerInterface.adjDragEndCallback(
          this.data,
          h,
          Ee(this.data["connection.points"])
        );
      }));
      this.adjusterList.push(l);
    });
  }
  _getPos(t, e) {
    const r = {
      srcPos: this.data["connection.sourcePos"],
      desPos: this.data["connection.destinationPos"]
    }, i = Math.abs(t.y - e.y), o = Math.abs(t.x - e.x);
    return r.srcPos || (i > o ? r.srcPos = t.y > e.y ? "top" : "bottom" : r.srcPos = t.x > e.x ? "left" : "right"), r.desPos || (i > o ? r.desPos = t.y > e.y ? "bottom" : "top" : r.desPos = t.x > e.x ? "right" : "left"), r;
  }
  refreshAdjustList() {
    const t = this._getSourceLoc(), e = this._getDestinationLoc(), r = this._getPos(t, e), i = this._getElbowPoints(
      t,
      e,
      r.srcPos,
      r.desPos
    );
    this._createAdjustList(i.slice(1, i.length - 1)), this._updatePoints(...i);
  }
  _getLabelXY(t) {
    const e = this._getLabelPos(this._getPolylinePath(this.data["connection.points"]));
    return {
      x: e.x,
      y: e.y + (this.data.fontSize - this.data.fontSize * t.length / 2)
    };
  }
  _renderAdjustList() {
    this.adjusterList.forEach((t, e) => {
      const r = this.data["connection.points"][e + 1];
      t.attr("x", r.x - gn).attr("y", r.y - gn), t.attr("visibility", this.group.attr("data-status") !== "edit" ? this.subUiVisibility : "hidden"), this.bringToFrontElement(t.node());
    });
  }
  _render() {
    const t = this.data, e = this.dataWrapper, r = this._getSourceLoc(), i = this._getDestinationLoc();
    this._isChanged(r, i) && this.refreshAdjustList(), this._renderConnector(), this._renderMarker(), this._renderAdjustList();
    const s = this._getPolylinePath(t["connection.points"]).map((a) => `${a[0]},${a[1]}`).join(", ");
    if (this.objects.polyline.attr("points", s).style("stroke", e.get("borderColor")).style("stroke-width", e.get("borderWidth")).style("stroke-dasharray", e.get("borderDash")), this.objects.wideLine.attr("points", s).style("stroke-width", Math.max(e.get("borderWidth"), 5)), this._createText(), t.text) {
      const a = this._getBBox(), c = a.width + 10, h = a.height + 10;
      this.objects.rect.attr("x", a.x - 5).attr("y", a.y - 5).attr("width", c).attr("height", h).style("fill", e.get("connection.textBorderFill")).style("stroke", e.get("connection.textBorderColor")).style("stroke-width", e.get("connection.textBorderWidth")).style("stroke-dasharray", e.get("connection.textBorderDash"));
    } else
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
  }
}
class $a extends $e {
  constructor(t, e) {
    super(t, "group", e);
  }
  _create() {
    this.objects.rect = this.group.append("rect").attr("fill", "none").attr("visibility", "hidden"), this.objects.thickRect = this.group.append("rect").attr("fill", "none").attr("opacity", "0").attr("visibility", "hidden");
  }
  _render() {
    const t = this.data["group.rect"], e = this.dataWrapper;
    if (this.data.isSelected || this.data["group.borderAlwaysAppearance"]) {
      const r = e.get("borderWidth");
      this.objects.rect.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", e.get("borderColor")).attr("stroke-width", r).attr("stroke-dasharray", e.get("borderDash")).attr("visibility", "visible"), this.objects.thickRect.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", "white").attr("stroke-width", Math.max(r, 8)).attr("visibility", "visible");
    } else
      this.objects.rect.attr("visibility", "hidden"), this.objects.thickRect.attr("visibility", "hidden");
  }
}
class Ra extends _t {
  constructor(t, e) {
    super(t, "if", e);
  }
  _create() {
    this.objects.body = this.group.append("polygon"), super._create();
  }
  getPolygon() {
    const t = [], e = this.width / 2, r = this.height / 2;
    return t.push(`${-e},0`), t.push(`0,${-r}`), t.push(`${e},0`), t.push(`0,${r}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this.objects.body.attr("points", this.getPolygon()).attr("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).attr("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
class La extends _t {
  constructor(t, e) {
    super(t, "return", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this.objects.body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", t.get("node.borderRadius")).attr("width", e).attr("height", r).style("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
class Ha extends _t {
  constructor(t, e) {
    super(t, "start", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.objects, r = this.width, i = this.height;
    e.body.attr("x", -(r / 2)).attr("y", -(i / 2)).attr("rx", i / 2).attr("width", r).attr("height", i).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")).attr("stroke", t.get("borderColor")), this._createText();
  }
}
class Xa {
  nodeRenderMap = /* @__PURE__ */ new Map();
  connectionRenderMap = /* @__PURE__ */ new Map();
  etcRenderMap = /* @__PURE__ */ new Map();
  constructor() {
    this.nodeRenderMap.set("start", Ha), this.nodeRenderMap.set("if", Ra), this.nodeRenderMap.set("return", La), this.nodeRenderMap.set("comment", Aa), this.nodeRenderMap.set("bridge", ka), this.nodeRenderMap.set("db", Na), this.connectionRenderMap.set("direct", Da), this.connectionRenderMap.set("elbow", Pa), this.etcRenderMap.set("group", $a);
  }
  /**
  *
  * @param {Map<String, BaseRenderer>} map
  * @param {string} render
  * @param {() => BaseRenderer} constructor
  */
  _add(t, e, r) {
    t.set(e, r);
  }
  /**
  *
  * @param {Map<String, BaseRenderer>} map
  * @param {String} key
  */
  _get(t, e) {
    if (t.has(e))
      return t.get(e);
    throw new Error(`There is no renderer (key: '${e}')`);
  }
  addRenderMap(t, e, r) {
    switch (t) {
      case "node":
        this._add(this.nodeRenderMap, e, r);
        break;
      case "connection":
        this._add(this.connectionRenderMap, e, r);
        break;
      default:
        throw new Error(`Unknown type '${t}'`);
    }
  }
  /**
  * @param {String} type
  * @param {String} render
  * @returns
  */
  getRenderConstructor(t, e) {
    switch (t) {
      case "node":
        return this._get(this.nodeRenderMap, e);
      case "connection":
        return this._get(this.connectionRenderMap, e);
      default:
        return this._get(this.etcRenderMap, e);
    }
  }
  changeRender(t, e, r) {
    const i = this.getRenderConstructor(t.type, e), o = new i(t.data, r);
    t.changeRender(e, o);
  }
}
class Fa {
  objSeq;
  clickSeq;
  iContainer;
  constructor(t) {
    this.objSeq = 0, this.clickSeq = 0, this.iContainer = t, this.clear();
  }
  clear() {
    this.clearObjSeq(), this.clearClickSeq();
  }
  clearObjSeq() {
    this.objSeq = 1;
  }
  clearClickSeq() {
    this.clickSeq = 0;
  }
  getObjSeqId() {
    for (; this.iContainer.getObjectOrNull(this.objSeq) !== null; )
      ++this.objSeq;
    return this.objSeq;
  }
  increaseClickSeq() {
    return ++this.clickSeq;
  }
}
const Ya = {
  ...Zn,
  ...Jn,
  ...Qn,
  ...ce
};
function Ba(n) {
  return new Promise((t, e) => {
    const r = new Image();
    r.onerror = (i) => e(i), r.src = n, r.onload = () => {
      const i = document.getSelection();
      if (!i) {
        e("selection is null when copying image");
        return;
      }
      const o = document.createRange();
      document.body.appendChild(r), o.selectNode(r), i.removeAllRanges(), i.addRange(o), document.execCommand("copy"), r.remove(), t();
    };
  });
}
function pn(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    pos: null
  };
  for (const r of ne) {
    const i = t.getPositionXY(r), o = rr(i, n);
    o < e.dist && (e.dist = o, e.pos = r);
  }
  return e.pos;
}
function Va(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    sourcePos: "",
    destinationPos: ""
  };
  for (const r of ne)
    for (const i of ne) {
      const o = n.getPositionXY(r), s = t.getPositionXY(i), a = rr(o, s);
      a < e.dist && (e.dist = a, e.sourcePos = r, e.destinationPos = i);
    }
  return e;
}
function Ua(n) {
  const t = {};
  return {
    emit: (e, r) => {
      t[e] && t[e].forEach((i) => i.apply(n, r));
    },
    on: (e, r) => (t[e] || (t[e] = []), t[e].push(r), r),
    off: (e, r) => {
      if (!t[e]) return !1;
      const i = t[e].indexOf(r);
      return i < 0 ? !1 : (t[e].splice(i, 1), !0);
    }
  };
}
const Wa = 255, yn = 8, qa = 8, ye = "ir-style/flowchart", mn = 0.4, bn = 3, Bt = 5, Ga = /* @__PURE__ */ new Set(["isHovered", "isSelected"]), wn = 10;
class ic extends gr {
  #z;
  #p = !0;
  #y = !1;
  #i = !1;
  #r = !1;
  #m = !1;
  #l = !1;
  #b = !1;
  #w = !1;
  #O = !1;
  #d = !1;
  #g = !1;
  #S = !1;
  #C = !1;
  #j = !1;
  // DOM 감싸는 영역(wrapper) 레이아웃 사이즈
  #s = { width: 0, height: 0 };
  // 내부 svg 컨텐츠 사이즈
  #x = { width: 0, height: 0 };
  // appendMode context 저장
  #e = { mode: null, data: null, dragged: !1 };
  #t = null;
  #o = {
    rect: null,
    startX: 0,
    startY: 0
  };
  #E = { curPosX: 0, curPosY: 0, isDragging: !1 };
  #n;
  #N;
  _objectManager;
  theme;
  _containerInterface;
  _renderManager;
  _seqMng;
  _objMouseHandler;
  _actionController;
  _moveHandler;
  _resizeHandler;
  constructor({
    contextElement: t,
    width: e,
    height: r,
    theme: i,
    fitSizeMode: o = !1
  }) {
    super({ contextElement: t }), this.#j = o, this._logger = ua(this.uuid.substring(0, 4)), this.keyMap = {
      ArrowLeft: [() => this.handleKeydownArrows(-10, 0)],
      ArrowRight: [() => this.handleKeydownArrows(wn, 0)],
      ArrowDown: [() => this.handleKeydownArrows(0, wn)],
      ArrowUp: [() => this.handleKeydownArrows(0, -10)],
      Delete: [() => this.handleKeydownDelete()],
      Escape: [() => this.handleKeydownEscape()],
      F2: [() => this.handleKeydownF2()],
      // undo
      "^z": [() => this.undoAction()],
      "^Z": [() => this.undoAction()],
      // redo
      "^y": [() => this.redoAction()],
      "^Y": [() => this.redoAction()],
      // select all
      "^a": [() => this.selectAllObjects()],
      "^A": [() => this.selectAllObjects()],
      // cut copy paste
      "^x": [() => this.#u(), !0],
      "^X": [() => this.#u(), !0],
      "^c": [() => this.#u(), !0],
      "^C": [() => this.#u(), !0],
      "^v": [() => this.#u(), !0],
      "^V": [() => this.#u(), !0]
    }, this.emitter = Ua(this);
    const { div: s, svg: a, span: c } = ma(this.uuid);
    this.#n = s, this.#N = c, s.addEventListener("keydown", (h) => {
      if (this.#i || this.#r) {
        this._logger.debug("InnoFlowchart.handleKeydown()", "Cancel because of editMode or readonly mode");
        return;
      }
      const l = `${h.ctrlKey ? "^" : ""}${h.key}`, u = this.keyMap[l];
      u && (u[1] !== !0 && h.preventDefault(), u[0](h));
    }), s.addEventListener("copy", this.#q.bind(this)), s.addEventListener("cut", this.#G.bind(this)), s.addEventListener("paste", this.#K.bind(this)), this.addCoreElement(s), t.appendChild(s), this.#Z(s, a, e, r), this._containerInterface = {
      // Manipulation API
      releaseAllObjects: () => this.releaseAllObjects(),
      addRenderObj: (h) => this.add(h),
      removeObject: (h) => this.remove(h),
      initDrag: (h) => this.#c(h),
      terminateDrag: (h) => this.#h(h),
      isDragging: () => this.#S,
      changeObjRender: (h, l) => this.#B(h, l),
      // Callback
      adjDragStartCallback: () => this.#At(),
      adjDragEndCallback: (h, l, u) => this.#zt(h, l, u),
      editTextCallback: (h, l, u) => this.#Tt(h, l, u),
      editTextModeCallback: (h) => this.#rt(h),
      renderCallback: (h) => this.#Nt(h),
      observerCallback: (h) => this.#tt(h),
      selectCallback: (h, l, u) => this.#et(h, l, u),
      releaseCallback: (h, l) => this.#nt(h, l),
      // getter / setter
      setEditMode: (h) => this.#i = h,
      getLogger: () => this._logger,
      getSvg: () => this.d3Svg,
      getObjectOrNull: (h) => this.getObjectOrNull(h),
      getSelectNodeOnHover: () => this.#b,
      getTooltipHidden: () => this.#w,
      getReadOnly: () => this.#r,
      isAppending: () => this.#e.mode === "append",
      getUUID: () => this.uuid
    }, this._objectManager = new ga(), this._renderManager = new Xa(), this._seqMng = new Fa(this._containerInterface), this._objMouseHandler = new Ia(this._containerInterface), this._actionController = new qs(this._containerInterface, Wa), this._moveHandler = new pa(this._actionController, this._objectManager, this._containerInterface), this._resizeHandler = new ya(this._actionController, this._objectManager, this._containerInterface), this.#z = getComputedStyle(this.contextElement).fontFamily, this.theme = {
      ...Ya,
      ...i
    }, this.defaultRule = ha, this.zoomTo(1), this.render();
  }
  get componentLabel() {
    return "flowchart";
  }
  get div() {
    return this.#n;
  }
  get svgElement() {
    return this.d3Svg.node();
  }
  get actionController() {
    return this._actionController;
  }
  get readonly() {
    return this.#r;
  }
  get simpleConnectingMode() {
    return this.#m;
  }
  get editMode() {
    return this.#i;
  }
  get gridMode() {
    return this.#y;
  }
  get tooltipHidden() {
    return this.#w;
  }
  get fitSizeMode() {
    return this.#j;
  }
  get moveScreenOnSelect() {
    return this.#l;
  }
  get selectNodeOnHover() {
    return this.#b;
  }
  get wheelZoom() {
    return this.#p;
  }
  get traceMode() {
    return this.#O;
  }
  get singleSelection() {
    return this.#d;
  }
  set readonly(t) {
    this.#r !== t && (this.#r = t, this.classedOnSvg(t, "readonly"), this._logger.info(`readonly property is changed to '${t}'`));
  }
  set simpleConnectingMode(t) {
    this.#m !== t && (this.#m = t, this.classedOnSvg(t, "simple"), this._logger.info(`simpleConnectingMode property is changed to '${t}'`));
  }
  set editMode(t) {
    this.#i !== t && (this.#i = t, this.classedOnSvg(t, "edit-mode"), this._logger.info(`editMode property is changed to '${t}'`));
  }
  set gridMode(t) {
    this.#y !== t && (this.#y = t, this.d3Grid.attr("visibility", this.#y ? "visible" : "hidden"), this.classedOnSvg(t, "flowchart-grid"), this._logger.info(`gridMode property is changed to '${t}'`), this.render());
  }
  set tooltipHidden(t) {
    this.#w !== t && (this.#w = t, this.classedOnSvg(t, "ir-fw-tooltip-hidden"), this._logger.info(`tooltipHidden property is changed to '${t}'`));
  }
  set moveScreenOnSelect(t) {
    this.#l !== t && (this.#l = t, this.classedOnSvg(t, "move-screen-on-select"), this._logger.info(`moveScreenOnSelect property is changed to '${t}'`));
  }
  set selectNodeOnHover(t) {
    this.#b !== t && (this.#b = t, this.classedOnSvg(t, "select-node-on-hover"), this._logger.info(`selectNodeOnHover property is changed to '${t}'`));
  }
  set wheelZoom(t) {
    this.#p !== t && (this.#p = t, this.classedOnSvg(t, "wheel-zoom"), this._logger.info(`wheelZoom property is changed to '${t}'`));
  }
  set traceMode(t) {
    this.#O !== t && (this._logger.logLevel = t ? "INFO" : "ERROR", this.#O = t, this.classedOnSvg(t, "trace"), this._logger.info(`traceMode property is changed to '${t}'`));
  }
  set singleSelection(t) {
    this.#d !== t && (this.#d = t, this.classedOnSvg(t, "single-select"), this._logger.info(`singleSelection property is changed to '${t}'`));
  }
  set canvasMoveMode(t) {
    this.#C !== t && (this.#C = t, this.classedOnSvg(t, "canvas-move"), this._logger.info(`canvasMoveMode property is changed to '${t}'`));
  }
  #q(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCopy()"), le(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(ye, JSON.stringify(this.#_())), t.preventDefault());
  }
  #G(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCut()"), this.getSelectedObjects().length !== 0 && (le(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(ye, JSON.stringify(this.#_())), this.removeSelected(), t.preventDefault()));
  }
  #K(t) {
    if (t.__IGNORE__) return;
    if (this._logger.info("InnoFlowchart.#onNativePaste()"), le(t.clipboardData, new Error("no clipboardData")), this.#i || this.#e.mode != null) {
      this._logger.debug("InnoFlowchart.paste()", "Could not paste because of edit or append mode");
      return;
    }
    const e = t.clipboardData.getData(ye);
    if (!e) return this._logger.warn("InnoFlowchart.#onNativePaste()", "no data");
    this.#F(JSON.parse(e)), t.preventDefault();
  }
  _onContextMenu(t) {
    const e = () => {
      if (!(t.target instanceof Element)) return;
      const r = dr("[data-obj-id]", "svg", t.target);
      if (!r) return;
      const i = r.getAttribute("data-obj-id"), o = this.getObjectOrNull(i) ?? this.getObjectOrNull(parseInt(i, 10));
      o?.isSelected || (this.releaseAllObjects(), o.select());
    };
    t.preventDefault(), e(), this.$emit(M.CONTEXT_MENU, t);
  }
  #Z(t, e, r, i) {
    t.addEventListener("contextmenu", (c) => this._onContextMenu(c));
    const o = isNaN(r) ? r : `${r}px`, s = isNaN(i) ? i : `${i}px`;
    this.d3Div = V(t).style("width", o).style("height", s), this.d3Svg = V(e).on("mousemove", (c) => this.#at(c)).on("click", (c) => this.#Dt(c)).call(st().filter((c) => c.button === 0 && this.#i === !1).on("start", (c) => {
      ot(this.contextElement), this.#A(c);
    }).on("drag", (c) => this.#A(c)).on("end", (c) => this.#A(c))), this.d3Grid = this.d3Svg.append("g").attr("transform", "translate(-1, -1)").attr("class", "flowchart-grid").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", `url(#${this.uuid}_grid)`).attr("visibility", "hidden"), this.d3Container = this.d3Svg.append("g").attr("class", "container");
    const a = Ws().filter((c) => this.#p && c.type === "wheel" && c.ctrlKey).wheelDelta((c) => -c.deltaY * (c.deltaMode === 1 ? 0.05 : c.deltaMode ? 1 : 2e-3)).scaleExtent([mn, bn]).on("zoom", (c) => this.zoomTo(c.transform.k));
    this.d3Div.call(a).on("dblclick.zoom", null), this.#n.__zoom = { ...this.#n.__zoom };
  }
  #u() {
    const t = window.getSelection();
    if (!t) return;
    const e = document.createRange();
    e.selectNodeContents(this.#N), t.removeAllRanges(), t.addRange(e);
  }
  $emit(t, ...e) {
    this.emitter.emit(t, e);
  }
  $on(t, e) {
    return this.emitter.on(t, e);
  }
  $off(t, e) {
    return this.emitter.off(t, e);
  }
  moveWrapper(t) {
    try {
      this._moveHandler.moveStartHandler(), t(), this.#M();
    } finally {
      this._moveHandler.moveEndHandler(), this.refreshSvgSize();
    }
  }
  addSvgDefs(t) {
    this.d3Svg.node().appendChild(t);
  }
  addLinearGradientDefs(t, e, r, i) {
    if (typeof r.length != "number" || typeof i.length != "number")
      throw new Error("it must be an array type both offsets and colors!");
    const o = document.createElementNS("http://www.w3.org/2000/svg", "defs"), s = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    s.id = t, s.setAttribute("gradientTransform", `rotate(${e})`), pr(r, i).forEach(([a, c]) => {
      const h = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      h.setAttribute("offset", a), h.setAttribute("stop-color", c), s.appendChild(h);
    }), o.appendChild(s), this.addSvgDefs(o);
  }
  add(t, e = void 0) {
    switch (t.type) {
      case void 0:
        throw this._logger.error("InnoFlowchart.add()", "undefined type prop"), new Error("Object that you added needs 'type' property! (node or connection)");
      case "group":
        t.render = "group";
        break;
    }
    if (t.render === void 0)
      throw this._logger.error("InnoFlowchart.add()", "undefined render prop"), new Error("Object that you added needs 'render' property!");
    if (!t.id)
      t.id = this._seqMng.getObjSeqId();
    else
      switch (typeof t.id) {
        case "number":
        case "string":
          break;
        default:
          throw this._logger.error(
            "InnoFlowchart.add()",
            "Not allowed id type (USE STRING OR NUMBER)"
          ), new Error("Data's id is only allowed string or nubmer type!");
      }
    if (this._objectManager.findOrNull(t.id) !== null)
      throw this._logger.error("InnoFlowchart.add()", "duplicated object id"), new Error(`Object's id is already created! (${t.id})`);
    this.defaultRule(t, this.#z), cn(t, this.theme);
    let r = null;
    const i = this._renderManager.getRenderConstructor(
      t.type,
      t.render
    ), o = new i(t, this._containerInterface);
    switch (t.type) {
      case "connection":
        r = new ba(t, o, this._containerInterface);
        break;
      case "node":
        r = new va(t, o, this._containerInterface);
        break;
      case "group":
        r = new wa(t, o, this._containerInterface);
        break;
      default:
        throw Error(`unkown data type '${t.type}'`);
    }
    return this._objectManager.add(r), r.create(), this.refreshSvgSize(), e !== void 0 && this.d3Container.node().insertBefore(r.g.node(), this.#bt(e)), t.temp ? this._logger.debug(
      "InnoFlowchart.add()",
      `created temp obj id is '${r.id}'`
    ) : (this.#H(r), this.emitChangedStatus(), this.$emit(M.NEW_OBJECT, r), this._logger.debug("InnoFlowchart.add()", `created obj id is '${r.id}'`)), r;
  }
  remove(t) {
    if (t == null)
      throw this._logger.error(
        "InnoFlowchart.remove()",
        "Object could not be null or undefined to remove!"
      ), new Error("Object could not be null or undefined to remove!");
    let e = null;
    switch (typeof t) {
      case "string":
      case "number":
        e = this.getObjectOrNull(t);
        break;
      case "object":
        e = this.getObjectOrNull(t.id);
        break;
      default:
        throw Error(`unkown data type '${typeof t}'`);
    }
    if (e != null)
      e.destroy(), this.emitChangedStatus(), this._objectManager.remove(e), this.refreshSvgSize(), this._objMouseHandler.removeTooltipObj(), e.isTempObj ? this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed temp obj id is '${e.id}'`
      ) : (this.$emit(M.REMOVE_OBJECT, e), this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed obj id is '${e.id}'`
      ));
    else
      throw new Error("There is no such as object you received in this flowchart!");
  }
  zoomTo(t) {
    if (t < mn || t > bn)
      return;
    this._logger.info("InnoFlowchart.zoomTo", `scale is changed to ${t}`), this.#n.__zoom.k = t, this.d3Container.attr("transform", `scale(${t})`);
    const e = `${1 / t * 100}%`;
    this.d3Grid.attr("transform", `scale(${t})`).attr("width", e).attr("height", e), this.refreshSvgSize();
  }
  /**
   * 신규로 추가한 개체 집합을 undo에 기록하고,
   * 음수 좌표가 있는 경우에는 해당 좌표를 조정합니다.
   */
  recordNewObjectsAction(...t) {
    this._actionController.addAction(new dt(ht(t))), this.#M();
  }
  emitChangedStatus() {
    this.#g || (this.#g = !0, this.classedOnSvg(!0, "changed"));
  }
  getScale() {
    return this.getTransform().k;
  }
  getSelectedConnections(t = !0) {
    const e = [];
    for (const r of this._objectManager.getConnectionIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  #D(t) {
    t.forEach((e) => {
      for (const r of e.propList)
        r.oldValue === void 0 && (r.oldValue = e.objData[r.key]), e.objData[r.key] = r.newValue;
    }), this._actionController.addAction(new ct(t));
  }
  /**
   * builder에서 사용함, 다만 내부 함수로 사용하므로 외부에서 사용하지 않도록 주의
   * @deprecated
   */
  _editObjProp(t) {
    return this.#D(t);
  }
  editSelectedObjProp(t, e) {
    const r = [];
    for (const i of this._objectManager.getSelectedObjIterator())
      i.isSelected && r.push(new et(i.data, [
        {
          key: t,
          newValue: e
        }
      ]));
    this.#D(r);
  }
  /**
   * append 모드로 전환
   */
  append(t, e) {
    if (this.#r) {
      this._logger.info(
        "InnoFlowchart.append()",
        "Preventing append (readonly: true)"
      );
      return;
    }
    if (!this.#R({ mode: t, data: e }))
      throw this._logger.error("InnoFlowchart.append()", "Invalid append info!"), new Error("Invalid append info!");
    this.clearAppendMode(), this.#e = { mode: t, data: e, dragged: !1 }, this.classedOnSvg(!0, `is-appending-${e.type}`), this._logger.info(
      "InnoFlowchart.append()",
      "Append Mode",
      this.#e.mode
    );
  }
  /**
   * 카메라 0,0 이동
   */
  resetScreen() {
    this.#n.scrollLeft = 0, this.#n.scrollTop = 0;
  }
  getWrapperSize() {
    return this.#n.getBoundingClientRect();
  }
  getTransform() {
    return Kn(this.#n);
  }
  updateMinimumSvgSize() {
    const { width: t, height: e } = this.getWrapperSize();
    this.#s.width = t, this.#s.height = e, this.refreshSvgSize();
  }
  #P() {
    const t = this.getScale(), e = {
      top: 999999999,
      left: 999999999,
      right: 0,
      bottom: 0
    };
    for (const r of this._objectManager.getAllObjIterator())
      e.top = Math.min(e.top, r.startY), e.left = Math.min(e.left, r.startX), e.right = Math.max(e.right, r.endX), e.bottom = Math.max(e.bottom, r.endY);
    return e.top *= t, e.left *= t, e.right *= t, e.bottom *= t, e;
  }
  updateSvgSize() {
    let t = this.#x.width, e = this.#x.height;
    this.#j || (t += this.#s.width / 2, e += this.#s.height / 2), this.d3Svg.attr("width", Math.max(this.#s.width, t)).attr("height", Math.max(this.#s.height, e));
  }
  refreshSvgSize() {
    const t = this.#P();
    this.#x.width = t.right, this.#x.height = t.bottom, this._logger.info("InnoFlowchart.refreshSvgSize()", t), this.updateSvgSize();
  }
  /**
  * Re-render this flowchart
  */
  render() {
    this.updateMinimumSvgSize();
  }
  /**
  * @returns {RenderObject[]}
  */
  getObjectList() {
    const t = [];
    for (const e of this._objectManager.getAllObjIterator())
      !e.isTempObj && t.push(e);
    return t;
  }
  /**
  * clear all actions of actionController
  */
  clearActionList() {
    this._logger.info("InnoFlowchart.clearActionList()"), this._actionController.clear();
  }
  /**
  * Undo last action through actionController
  */
  undoAction() {
    if (this.#r) {
      this._logger.info("InnoFlowchart.undoAction()", "Preventing undo (readonly: true)");
      return;
    }
    const t = this._actionController.undo();
    this._logger.debug("InnoFlowchart.undoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(M.UNDO, t));
  }
  /**
  * Redo recently undone action through actionController
  */
  redoAction() {
    if (this.#r) {
      this._logger.info("InnoFlowchart.redoAction()", "Preventing redo (readonly: true)");
      return;
    }
    const t = this._actionController.redo();
    this._logger.debug("InnoFlowchart.redoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(M.REDO, t));
  }
  #I(t, e) {
    this._logger.info(`InnoFlowchart.event.emit.${e}`, t), t.select(!0), this.$emit(e, t);
  }
  #J(t) {
    switch (t.key) {
      case "id": {
        const e = this.getObjectOrNull(t.oldValue);
        e !== null && this._objectManager.reassignId(e, t.oldValue, t.newValue);
        break;
      }
      case "isSelected": {
        t.newValue && (t.renderObj.clickedSeq = this._seqMng.increaseClickSeq());
        break;
      }
    }
  }
  #Q(t) {
    const e = t.renderObj;
    switch (t.key) {
      case "connection.sourceObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(M.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.sourcePos":
        e.sourceObjId !== null && this.$emit(M.CONNECT_NODE, e, t.key);
        break;
      case "connection.destinationObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(M.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.destinationPos":
        e.destinationObjId !== null && this.$emit(M.CONNECT_NODE, e, t.key);
        break;
    }
  }
  #tt(t) {
    t.newValue !== t.oldValue && (!this.#g && !Ga.has(t.key) && this.emitChangedStatus(), this.#J(t), t.renderObj.type === "connection" && this.#Q(t));
  }
  #et(t, e, r) {
    const i = this._objectManager.getParentGroupOrNull(t);
    if (e && (this.#l && t.type === "node" && this.moveScreenByObject(t), this.#d))
      for (const o of this._objectManager.getSelectedObjIterator())
        o !== t && o.release();
    i !== null && i.select(!1, r), this._logger.info("InnoFlowchart._selectCallbackHandler()", t), this.$emit(M.SELECT_OBJECT, t);
  }
  #nt(t, e) {
    this.$emit(M.RELEASE_OBJECT, t);
  }
  #rt() {
    this._objMouseHandler.removeTooltipObj();
  }
  #$(t, e) {
    const r = 1 / this.getScale();
    return { x: t * r, y: e * r };
  }
  #R({ mode: t, data: e }) {
    switch (t) {
      case "append":
        return e.type === "node" || e.type === "connection";
      case "paste":
        return e.objects.length > 0;
      default:
        return !1;
    }
  }
  #it(t) {
    const e = t["connection.points"];
    t: for (; ; ) {
      for (const r of this._objectManager.getConnectionIterator())
        if (r.comparePoints(e)) {
          e.forEach((i) => {
            i.x += 10, i.y += 10;
          });
          continue t;
        }
      return e;
    }
  }
  #ot(t) {
    let e = t["node.x"], r = t["node.y"];
    t: for (; ; ) {
      for (const i of this._objectManager.getNodeIterator())
        if (i.x === e && i.y === r) {
          e += 10, r += 10;
          continue t;
        }
      return { "node.x": e, "node.y": r };
    }
  }
  #st() {
    switch (this.#e.data.type) {
      case "node": {
        this.#t = this.add({
          ...this.#e.data,
          temp: !0,
          id: "appending_temp_obj",
          opacity: 0
        });
        break;
      }
    }
  }
  #at(t) {
    const e = t.offsetX, r = t.offsetY;
    if (this.#R(this.#e)) {
      switch (this.#e.mode) {
        case "append":
          this.#t === null ? this.#st() : this.#t.type === "node" && this.#Y(e, r);
          break;
      }
      this.#n.focus();
    }
  }
  #L(t) {
    const e = [], r = t === "front" ? this._objectManager.getObjCount() : 0;
    this._logger.info("InnoFlowchart.setZIndex()", `new z-index = ${r}`);
    for (const i of this.getSelectedObjects())
      e.push({
        objId: i.id,
        oldValue: i.zIndex + (t === "back" ? 1 : 0),
        newValue: r
      }), i.zIndex = r;
    this.emitChangedStatus(), this._actionController.addAction(new ar(e));
  }
  /**
  * bring selected objects to front
  */
  bringToFront() {
    this._logger.info("InnoFlowchart.bringToFront()"), this.#L("front");
  }
  /**
  * bring selected objects to back
  */
  bringToBack() {
    this._logger.info("InnoFlowchart.bringToBack()"), this.#L("back");
  }
  #k(t, e) {
    for (const r of this._objectManager.getSelectedObjIterator())
      r.moveTo(t, e);
  }
  getObjectOrNull(t) {
    return this._objectManager.findOrNull(t);
  }
  selectObjectById(t) {
    const e = this.getObjectOrNull(t);
    if (e === null)
      throw new Error(`Not found obj id '${t}'`);
    e.select();
  }
  #ct(t) {
    this._objMouseHandler.addMouseAction(t);
  }
  #a(t) {
    return this.#d || !t;
  }
  #ht(t) {
    t.g.on("dblclick", () => {
      t.data.editable && this.#r === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickNode", t), this.$emit(M.DOUBLE_CLICK_NODE, t);
    });
  }
  classedOnSvg(t, ...e) {
    e.forEach((r) => this.d3Svg.classed(r, t)), this.$emit(M.CHANGE_CLASS, this.d3Svg.attr("class"));
  }
  #lt(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(st().filter((a) => a.button === 0 && this.#i === !1).on("start", (a) => {
      ot(a.sourceEvent.target), this.#a(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = t.width - (t.endX - a.x), s = t.height - (t.endY - a.y), t.select(!1);
    }).on("drag", (a) => {
      if (this.#r) return;
      const c = a.x - o, h = a.y - s, l = c - t.x, u = h - t.y;
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > 8 && (e = !0, this._moveHandler.moveStartHandler(), this.#c("drag-node-move")), e && this.#k(l, u);
    }).on("end", (a) => {
      const c = a.sourceEvent;
      if (e)
        this._moveHandler.moveEndHandler(), this.#h("drag-node-move"), this.#l && t.type === "node" && this.moveScreenByObject(t);
      else {
        if (this.#i) return;
        this.#a(c.ctrlKey) && this.releaseAllObjects(t), this.#l && this.moveScreenByObject(t), this.#I(t, M.CLICK_NODE);
      }
    }));
  }
  #dt(t) {
    for (const e of t.renderer.connectors) {
      const r = ia(e.attr("class"));
      e.call(st().filter((i) => i.button === 0 && this.#r === !1).on("start", (i) => {
        ot(i.sourceEvent.target);
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y, a = this.#e.data?.render ?? this.theme["node.autoGeneratedConnectorRender"], c = t.getPositionXY(r);
        this.#c("drag-node-connector"), this.#U(c.x, c.y, o, s, {
          type: "connection",
          render: a,
          "connection.sourceObjId": t.id,
          "connection.sourcePos": r
        });
      }).on("drag", (i) => {
        if (this.#t === null)
          return;
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y;
        this.#e.dragged = !0, this.#V(o, s);
      }).on("end", () => {
        this.#t !== null && (this.#W(), this.#h("drag-node-connector"));
      }));
    }
  }
  #ut(t) {
    this.#ht(t), this.#lt(t), this.#dt(t), this._resizeHandler.addDragActionOnResizer(t);
  }
  #Pt(t) {
    this.logger.info("rightClick");
  }
  #$t(t, e) {
    this.#a(e) && this.releaseAllObjects(t), this.#I(t, M.CLICK_CONNECTION);
  }
  #ft(t) {
    t.g.on("click", (e) => {
      this.#a(e.ctrlKey) && this.releaseAllObjects(t), this.#I(t, M.CLICK_CONNECTION);
    }), t.g.on("dblclick", () => {
      t.data.editable && this.#r === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickConnection", t), this.$emit(M.DOUBLE_CLICK_CONNECTION, t);
    });
  }
  #gt(t) {
    let e = 0, r = 0, i = !1;
    t.g.call(st().filter((o) => o.button === 0 && this.#i === !1).on("start", (o) => {
      ot(o.sourceEvent.target), this.#a(o.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = o.x, r = o.y, i = !1, t.select();
    }).on("drag", (o) => {
      if (this.#r) return;
      const s = o.x - e, a = o.y - r;
      if (!i && Math.abs(s) + Math.abs(a) > 5 && (i = !0, this._moveHandler.moveStartHandler(), this.#c("drag-con-move")), !!i) {
        if (t.sourceObjId !== null) {
          const c = this.getObjectOrNull(t.sourceObjId);
          (c === null || c.isSelected === !1) && (t.sourceObjId = null);
        }
        if (t.destinationObjId !== null) {
          const c = this.getObjectOrNull(t.destinationObjId);
          (c === null || c.isSelected === !1) && (t.destinationObjId = null);
        }
        this.#k(s, a), e = o.x, r = o.y;
      }
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this.#h("drag-con-move");
    }));
  }
  #pt(t) {
    const e = (r, i, o) => st().filter((s) => s.button === 0 && this.#i === !1 && this.#r === !1).on("start", (s) => {
      ot(s.sourceEvent.target), this._moveHandler.moveStartHandler(), this.#c("drag-con-connector");
    }).on("drag", (s) => {
      const a = this.#T(s.x, s.y), c = o === "start" ? t.firstPoint : t.endPoint;
      a.node === null ? (t[r] = null, t[i] = null, c.x = s.x, c.y = s.y) : (t[r] = a.node.id, a.hover ? this.#v(t, o === "end", o === "start") : t[i] = a.pos), t.renderType === "elbow" && t.renderer.refreshAdjustList(), t.render();
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this.#h("drag-con-connector");
    });
    t.renderer.objects.sourceConnector.call(e("sourceObjId", "sourcePos", "start")), t.renderer.objects.destinationConnector.call(e("destinationObjId", "destinationPos", "end"));
  }
  #yt(t) {
    this.#ft(t), this.#gt(t), this.#pt(t);
  }
  #mt(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(st().filter((a) => a.button === 0 && this.#i === !1 && this.#r === !1).on("start", (a) => {
      ot(a.sourceEvent.target), this.#a(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = a.x, s = a.y, t.select();
    }).on("drag", (a) => {
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > qa && (e = !0, this._moveHandler.moveStartHandler(), this.#c("drag-group-move")), e && (this.#k(a.x - o, a.y - s), o = a.x, s = a.y);
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this.#h("drag-group-move");
    }));
  }
  #H(t) {
    switch (this.#ct(t), t.type) {
      case "node":
        this.#ut(t), t.render();
        break;
      case "connection":
        this.#yt(t);
        break;
      case "group":
        this.#mt(t);
        break;
      default:
        throw new Error(`Unknown data type '${t.type}'`);
    }
  }
  #c(t) {
    this.#S = !0, this.#e.dragged = !1, this._objMouseHandler.removeTooltipObj(), this.classedOnSvg(!0, t);
  }
  #h(t) {
    this.#S = !1, this.#e.dragged = !1, this.classedOnSvg(!1, t), this.clearAppendMode(), this.#M(), this.refreshSvgSize(), this.#m && this.updateShortestNodes();
  }
  #M() {
    const t = {
      x: 0,
      y: 0,
      objX: null,
      objY: null
    };
    for (const e of this._objectManager.getAllObjIterator())
      e.startX < t.x && (t.x = e.startX, t.objX = e), e.startY < t.y && (t.y = e.startY, t.objY = e);
    if (t.x < 0 || t.y < 0) {
      const e = this._actionController.popLastUndoAction(), r = [], i = t.x < 0 ? -t.x : 0, o = t.y < 0 ? -t.y : 0;
      for (const s of this._objectManager.getNodeIterator()) {
        const a = new et(s.data, []);
        a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
      }
      for (const s of this._objectManager.getConnectionIterator())
        if (s.sourceObj === null || s.destinationObj === null) {
          const a = new et(s.data, []);
          a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
        }
      for (const s of this._objectManager.getGroupIterator())
        s.render();
      e && (e.unshift(new ct(r)), this._actionController.addAction(...e)), this.refreshSvgSize();
    }
  }
  getCountOfSelectedObject() {
    let t = 0;
    for (const e of this._objectManager.getSelectedObjIterator())
      this._objectManager.getParentGroupOrNull(e) == null && e.isSelected && ++t;
    return t;
  }
  selectAllObjects() {
    if (!this.#d)
      for (const t of this._objectManager.getAllObjIterator())
        t.type !== "group" && t.select(!0);
  }
  releaseAllObjects(t) {
    for (const e of this._objectManager.getAllObjIterator())
      t !== e && e.release(!0);
  }
  align(t, e) {
    const r = e || this.getSelectedNodes();
    if (r.length <= 1)
      return;
    let i = !1;
    try {
      switch (this._moveHandler.moveStartHandler(), i = !0, t) {
        // center / middle은 가장 첫 요소로 정렬
        case "center": {
          const o = r[0].centerX;
          r.forEach((s) => s.x = o - s.width / 2);
          break;
        }
        case "middle": {
          const o = r[0].centerY;
          r.forEach((s) => s.y = o - s.height / 2);
          break;
        }
        // top / left는 최소 값
        case "top": {
          const o = r.reduce((s, a) => Math.min(s, a.y), r[0].y);
          r.forEach((s) => s.y = o);
          break;
        }
        case "left": {
          const o = r.reduce((s, a) => Math.min(s, a.x), r[0].x);
          r.forEach((s) => s.x = o);
          break;
        }
        // bottom / right는 최대 값
        case "right": {
          const o = r.reduce((s, a) => Math.max(s, a.endX), r[0].endX);
          r.forEach((s) => s.x = o - s.width);
          break;
        }
        case "bottom": {
          const o = r.reduce((s, a) => Math.max(s, a.endY), r[0].endY);
          r.forEach((s) => s.y = o - s.height);
          break;
        }
        default:
          throw new Error(`Unknown direct '${t}'`);
      }
    } finally {
      i && this._moveHandler.moveEndHandler();
    }
  }
  distribute(t, e) {
    const r = e || this.getSelectedNodes(!1);
    if (r.length <= 1)
      return;
    const i = t === "h" ? {
      start: "x",
      center: "centerX",
      end: "endX",
      size: "width"
    } : {
      start: "y",
      center: "centerY",
      end: "endY",
      size: "height"
    };
    r.sort((h, l) => h[i.center] - l[i.center]), this._moveHandler.moveStartHandler();
    const o = r.length - 1, s = r[0][i.end], a = r[o][i.start], c = r.slice(1, o).reduce((h, l) => h - l[i.size], a - s) / o;
    r.slice(1, o).reduce((h, l) => (l[i.start] = h, h + l[i.size] + c), s + c), this._moveHandler.moveEndHandler();
  }
  getSelectedObjects(t = !0) {
    const e = Array.from(this._objectManager.getSelectedObjIterator());
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  removeSelected() {
    const t = this.getSelectedObjects(!1);
    t.forEach((e) => this.remove(e)), this._actionController.addAction(
      new Ce(ht(t))
    );
  }
  #bt(t) {
    const e = this.d3Container.node();
    return t >= e.children.length ? null : e.children[t];
  }
  #T(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      if (r.isConnectorEnabled) {
        for (const i of ne)
          if (r.isContainedOnPos(i, t, e))
            return { node: r, pos: i };
        if (r.isContained(t, e))
          return { node: r, pos: "bottom", hover: !0 };
      }
    return { node: null, pos: null };
  }
  moveSelectedNode(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && (r.x = parseInt((r.x + t) / Bt) * Bt, r.y = parseInt((r.y + e) / Bt) * Bt);
  }
  getSelectedNodes(t = !0) {
    const e = [];
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  getNodeConnections(t) {
    const e = t.observeProperties ? t.id : t, r = this.getObjectOrNull(e), i = Array.from(this._objectManager.getConnectedConnections(e));
    return i.sort((o, s) => an(r, o) - an(r, s)), i;
  }
  /**
   * 개체에 맞게 스크롤 조정
   */
  moveScreenByObject(t) {
    const e = this.getTransform().k;
    this.#n.scrollLeft = t.centerX * e - this.#s.width / 2, this.#n.scrollTop = t.centerY * e - this.#s.height / 2;
  }
  async copyToClipboard(t = "image/png") {
    this.releaseAllObjects();
    const e = await Le(He(this.svgElement)), r = await Xe(e, t, this.#X(), yn), i = await ur(r);
    await Ba(i);
  }
  #X() {
    const { top: t, left: e, bottom: r, right: i } = this.#P();
    return {
      x: e - 1,
      y: t - 1,
      width: i - e + 2,
      height: r - t + 2
    };
  }
  async saveAsImageFile(t, e = "image/png") {
    this.releaseAllObjects();
    const r = await this.getBlob(e), i = URL.createObjectURL(r);
    try {
      fr(i, t);
    } finally {
      URL.revokeObjectURL(i);
    }
  }
  async getBlob(t = "image/png") {
    const e = await Le(He(this.svgElement));
    return await Xe(e, t, this.#X(), yn);
  }
  focus() {
    this.#n.focus();
  }
  /**
  * clear info for appending or pasting objects
  */
  clearAppendMode() {
    this.#e.data && this.classedOnSvg(!1, `is-appending-${this.#e.data.type}`), this.#t !== null && this.remove(this.#t), this.#e.mode = null, this.#e.data = null, this.#e.dragged = !1, this.#t = null;
  }
  #_() {
    const t = [];
    for (const e of this._objectManager.getSelectedObjIterator())
      e.type === "group" && (e.data.objectList = Array.from(e.objectSet)), t.push(e.data);
    return {
      copyDateTime: /* @__PURE__ */ new Date(),
      objects: t
    };
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  cut() {
    this._logger.info("InnoFlowchart.cut()"), this.getSelectedObjects().length !== 0 && (pe.saveData(JSON.stringify(this.#_())), this.removeSelected());
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  copy() {
    this._logger.info("InnoFlowchart.copy()"), pe.saveData(JSON.stringify(this.#_()));
  }
  #F(t) {
    if (t.objects.length === 0) return;
    const e = /* @__PURE__ */ new Map();
    let r = 0;
    const i = this._seqMng.getObjSeqId(), o = [];
    t.objects.forEach((s) => {
      if (this.getObjectOrNull(s.id) !== null) {
        let a = i + r;
        for (; this.getObjectOrNull(a) !== null || this.getObjectOrNull(a) !== null && this.getObjectOrNull(a).type === "connection" && (this.getObjectOrNull(a).sourceObjId === a || this.getObjectOrNull(a).destinationObjId === a); )
          a = i + ++r, this._logger.info("id", a);
        ++r, e.set(s.id, a);
      } else
        e.set(s.id, s.id);
    }), t.objects.forEach((s) => {
      const a = e.get(s.id);
      switch (s.type) {
        case "node": {
          const c = this.#ot(s);
          o.push(this.add({
            ...s,
            ...c,
            id: a,
            isSelected: !1,
            isHovered: !1
          }));
          break;
        }
        case "connection": {
          const c = this.#it(s);
          s["connection.sourceObjId"] !== void 0 && s["connection.sourceObjId"] != null && e.has(s["connection.sourceObjId"]) && (s["connection.sourceObjId"] = e.get(s["connection.sourceObjId"])), s["connection.destinationObjId"] !== void 0 && s["connection.destinationObjId"] != null && e.has(s["connection.destinationObjId"]) && (s["connection.destinationObjId"] = e.get(s["connection.destinationObjId"])), o.push(this.add({
            ...s,
            id: a,
            isSelected: !1,
            points: c
          }));
          break;
        }
        case "group": {
          o.push(this.add({
            ...s,
            id: a,
            isSelected: !1,
            objectList: s.objectList.map((c) => e.get(c))
          }));
          break;
        }
        default:
          throw new Error(`Not supported type '${s.type}'`);
      }
    }), this.moveScreenByObject(o[0]), this.releaseAllObjects(), o.forEach((s) => {
      s.select();
    }), this._actionController.addAction(new dt(ht(o)));
  }
  /**
   * in-memory clipboard에 저장된 것을 붙여넣기 처리
   * @deprecated
   */
  paste() {
    if (this.#i || this.#e.mode != null) {
      this._logger.debug(
        "InnoFlowchart.paste()",
        "Could not paste because of edit or append mode"
      );
      return;
    }
    this._logger.info("InnoFlowchart.paste()"), this.#F(JSON.parse(pe.loadData()));
  }
  /**
   * 텍스트에 맞추어 노드 크기 조정
   */
  fitSizeOnText() {
    this._logger.info("InnoFlowchart.fitSizeOnText()"), this._resizeHandler.resizeDragStart(), this.getSelectedNodes(!1).forEach(
      (t) => void (t.resizerEnabled && t.fitSizeOnText())
    ), this._resizeHandler.resizeDragEnd();
  }
  #v(t, e = !1, r = !1) {
    const i = this.getObjectOrNull(t.sourceObjId), o = this.getObjectOrNull(t.destinationObjId), s = t.sourcePos, a = t.destinationPos;
    if (i !== null && o !== null) {
      const c = Va(i, o);
      e || (t.sourcePos = c.sourcePos), r || (t.destinationPos = c.destinationPos);
    } else i === null ? t.destinationPos = pn(t.firstPoint, o) : t.sourcePos = pn(t.endPoint, i);
    if (s !== t.sourcePos || a !== t.destinationPos) {
      const c = new et(t.data, [
        {
          key: "connection.sourcePos",
          oldValue: s,
          newValue: t.sourcePos
        },
        {
          key: "connection.destinationPos",
          oldValue: a,
          newValue: t.destinationPos
        }
      ]);
      this._actionController.addAction(new ct([c]));
    }
  }
  /**
   * 현재 선택된 연결선들을 최단 경로로 맞춥니다.
   */
  updateShortestConnections() {
    this._logger.info("InnoFlowchart.updateShortestConnections()");
    for (const t of this._objectManager.getConnectionIterator())
      t.isSelected && this.#v(t);
  }
  /**
   * 현재 선택된 노드들의 연결선들을 최단 경로로 맞춥니다.
   */
  updateShortestNodes() {
    const t = [];
    for (const e of this._objectManager.getNodeIterator())
      if (e.isSelected !== !1)
        for (const r of this._objectManager.getConnectedConnections(e.id))
          t.indexOf(r) === -1 && t.push(r);
    t.forEach((e) => this.#v(e));
  }
  /**
   * 특정 render의 개체를 모두 선택합니다.
   */
  selectType(t) {
    this._logger.info("InnoFlowchart.selectType()", t);
    const e = t.toLowerCase();
    this.releaseAllObjects();
    for (const r of this._objectManager.getAllObjIterator())
      r.renderType === e && r.select(!1, e);
  }
  /**
   * 플로우차트 변경 상태 초기화
   */
  clearChangedStatus() {
    this.#g && (this.#g = !1, this.classedOnSvg(!1, "changed"));
  }
  /**
   * 플로우차트 내 모든 개체 제거
   */
  clear() {
    this.clearAppendMode();
    for (const t of this._objectManager.getAllObjIterator())
      t.destroy();
    this._objectManager.clear(), this._seqMng.clear(), this._actionController.clear();
  }
  /**
   * 현재 선택된 오브젝트 그룹화 및 그룹 객체 생성
   */
  group(t = void 0) {
    const e = t || {};
    e.type = "group", e.render = "group", e.objectList = [], cn(e, this.theme);
    for (const i of this._objectManager.getSelectedObjIterator())
      e.objectList.push(i.id);
    const r = this.add(e);
    r.resize(), r.select(), this._actionController.addAction(new dt(ht([r])));
  }
  /**
   * 현재 선택된 그룹화된 오브젝트의 자식의 그룹 상태를 해제
   */
  ungroup() {
    const t = [];
    for (const e of this._objectManager.getGroupIterator())
      e.isSelected && (e.clear(), t.push(e), this.remove(e));
    this._actionController.addAction(new Ce(ht(t)));
  }
  #Y(t, e) {
    const r = this.#$(t, e);
    this.#t.data.opacity === 0 && (this.#t.data.opacity = 0.5), this.#t.x = r.x - this.#t.width / 2, this.#t.y = r.y - this.#t.height / 2;
  }
  #f(t, e, r = !1) {
    const i = {
      x: t + this.#n.scrollLeft,
      y: e + this.#n.scrollTop
    };
    if (r) {
      const s = 1 / this.getTransform().k;
      i.x *= s, i.y *= s;
    }
    return i;
  }
  #wt(t) {
    const e = this.#f(t.x, t.y);
    this.#o.rect = this.d3Svg.append("rect").attr("class", "ir-fw-selection"), this.#o.startX = e.x, this.#o.startY = e.y;
  }
  #xt(t) {
    const e = this.#f(t.x, t.y), r = Math.min(e.x, this.#o.startX), i = Math.min(e.y, this.#o.startY), o = Math.max(e.x, this.#o.startX), s = Math.max(e.y, this.#o.startY);
    this.#o.rect.attr("x", r).attr("y", i).attr("width", o - r).attr("height", s - i);
  }
  #_t(t) {
    try {
      const e = this.getTransform(), r = this.#f(t.x, t.y), i = Math.min(r.x, this.#o.startX), o = Math.min(r.y, this.#o.startY), s = Math.max(r.x, this.#o.startX), a = Math.max(r.y, this.#o.startY), c = (h, l, u, f) => h >= i && l >= i && h <= s && l <= s && u >= o && f >= o && u <= a && f <= a;
      this.#a(t.sourceEvent.ctrlKey) && this.releaseAllObjects();
      for (const h of this._objectManager.getNodeIterator()) {
        const l = h.x * e.k, u = (h.x + h.width) * e.k, f = h.y * e.k, y = (h.y + h.height) * e.k;
        c(l, u, f, y) && h.select(!0);
      }
      for (const h of this._objectManager.getConnectionIterator()) {
        const l = h.firstPoint, u = h.endPoint, f = Math.min(l.x, u.x) * e.k, y = Math.max(l.x, u.x) * e.k, O = Math.min(l.y, u.y) * e.k, j = Math.max(l.y, u.y) * e.k;
        c(f, y, O, j) && h.select(!0);
      }
    } finally {
      this.#o.rect.remove(), this.#o.rect = null, this.$emit(M.MOUSEUP_SHEET, this.#f(t.x, t.y));
    }
  }
  #vt(t) {
    const { offsetX: e, offsetY: r } = t.sourceEvent;
    this.classedOnSvg(!0, "is-grabbing"), this.#E = {
      curPosX: e,
      curPosY: r,
      isDragging: !0
    };
  }
  #Ot(t) {
    const { curPosX: e, curPosY: r, isDragging: i } = this.#E;
    if (!i) return;
    const { target: o, offsetX: s, offsetY: a } = t.sourceEvent;
    o === this.d3Svg.node() && this.#n.scrollBy(e - s, r - a);
  }
  #St(t) {
    this.#E.isDragging = !1, this.classedOnSvg(!1, "is-grabbing"), t.sourceEvent.target === this.d3Svg.node() && this.releaseAllObjects();
  }
  #Ct() {
    switch (this.#e.mode) {
      case "append": {
        const t = this.add({
          "node.x": this.#t.x,
          "node.y": this.#t.y,
          ...this.#e.data
        });
        this._actionController.addAction(new dt(ht([t])));
        break;
      }
    }
    this.clearAppendMode();
  }
  #jt(t) {
    return {
      start: () => {
      },
      drag: () => this.#Y(t.x + this.#n.scrollLeft, t.y + this.#n.scrollTop),
      end: () => this.#Ct()
    };
  }
  #Et(t) {
    return {
      start: () => {
        const e = this.#f(t.x, t.y, !0);
        this.#U(e.x, e.y, e.x, e.y, this.#e.data), this.#e.dragged = !1;
      },
      drag: () => {
        const e = this.#f(t.x, t.y, !0);
        this.#V(e.x, e.y, this.#t.renderType), this.#e.dragged = !0;
      },
      end: () => {
        this.#W(), this.clearAppendMode();
      }
    };
  }
  #It(t) {
    return {
      start: () => this.#wt(t),
      drag: () => this.#xt(t),
      end: () => this.#_t(t)
    };
  }
  #kt(t) {
    return {
      start: () => this.#vt(t),
      drag: () => this.#Ot(t),
      end: () => this.#St(t)
    };
  }
  #Mt(t) {
    return this.#e.data.type === "node" ? this.#jt(t) : this.#Et(t);
  }
  #A(t) {
    (() => {
      if (this.#e.mode === "append")
        return this.#Mt(t);
      if (this.#C)
        return this.#kt(t);
      if (this.#e.mode === null)
        return this.#It(t);
      throw new Error("unknown drag handler");
    })()[t.type]();
  }
  cancelCreatingConnection() {
    if (this.#t === null)
      throw new Error("There is no creatingConnection obj");
    this.clearAppendMode();
  }
  #B(t, e) {
    this._renderManager.changeRender(t, e, this._containerInterface), this.#H(t);
  }
  /**
   * 개체의 렌더링 타입을 변경합니다.
   */
  changeRender(t, e) {
    const r = t.renderType;
    this.#B(t, e), this._actionController.addAction(new sr(t, r, e));
  }
  #Tt(t, e, r) {
    this._logger.debug(
      "InnoFlowchart._editTextCallbackHandler()",
      `oldText = '${e}'`,
      `newText = '${r}'`
    ), this._actionController.addAction(new ct([
      new et(t, [
        {
          key: "text",
          oldValue: e,
          newValue: r
        }
      ])
    ]));
  }
  #V(t, e) {
    const r = this.#T(t, e);
    r.node === null || r.node.id === this.#t.sourceObjId ? (this.#t.setLastPointXY(t, e), this.#t.destinationObjId = null, this.#t.destinationPos = null) : (this.#t.destinationObjId = r.node.id, r.hover ? this.#v(this.#t) : this.#t.destinationPos = r.pos);
  }
  #At() {
    this._logger.debug("InnoFlowchart.adjDragStartCallbackHandler()"), this.#c("drag-adj-move");
  }
  #zt(t, e, r) {
    this._logger.debug(
      "InnoFlowchart.adjDragEndCallbackHandler()",
      "record undo action"
    ), this._actionController.addAction(
      new ct([new et(t, [{ key: "connection.points", oldValue: e, newValue: r }])])
    ), this.#h("drag-adj-move");
  }
  #Nt(t) {
    if (t.type === "node") {
      const r = /* @__PURE__ */ new Set();
      for (const i of this._objectManager.getConnectionIterator())
        !r.has(i.id) && (i.sourceObjId === t.id || i.destinationObjId === t.id) && (r.add(i.id), i.render());
    }
    const e = this._objectManager.getParentGroupOrNull(t);
    e !== null && e.resize();
  }
  #Dt(t) {
    this.$emit(M.CLICK, this.#$(t.offsetX, t.offsetY));
  }
  #U(t, e, r, i, o) {
    if (this.#t !== null)
      throw new Error("Already created an appending obj!!");
    if (!o["connection.sourceObjId"]) {
      const a = this.#T(t, e);
      a.node !== null && (o["connection.sourceObjId"] = a.node.id, o["connection.sourcePos"] = a.pos);
    }
    const s = {
      ...o,
      id: "#temp_appending_connection",
      type: "connection",
      opacity: 0.5,
      temp: !0,
      "connection.points": [
        { x: t, y: e },
        { x: r, y: i }
      ]
    };
    this.#t = this.add(s);
  }
  #W() {
    let t = this.#t.data;
    this.#e.dragged === !1 && (t = la(this.#t));
    const e = this.add({
      ...t,
      id: void 0,
      temp: !1,
      opacity: 1
    });
    this._actionController.addAction(new dt(ht([e])));
  }
  handleKeydownF2() {
    if (!this.#i && this.getCountOfSelectedObject() === 1)
      for (const t of this._objectManager.getSelectedObjIterator()) {
        t.editLabel();
        return;
      }
  }
  handleKeydownDelete() {
    this.removeSelected();
  }
  handleKeydownArrows(t, e) {
    const r = this.getSelectedObjects(!1);
    r.length > 0 ? this.moveWrapper(() => {
      r.filter((i) => i.isSelected).forEach((i) => i.moveTo(t, e));
    }) : (this.#n.scrollLeft += t * 2, this.#n.scrollTop += e * 2);
  }
  handleKeydownEscape() {
    const t = this.#e, e = this.#t;
    t.mode === null && e !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Cancel Creating Connection"), this.cancelCreatingConnection()) : t.mode !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Clear Appending Data"), this.clearAppendMode()) : (this._logger.info("InnoFlowchart.handleKeydownEscape()", "releaseAllObj"), this.releaseAllObjects());
  }
}
const oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddCommand: dt,
  ChangedInfo: et,
  DeleteCommand: Ce,
  EditCommand: ct,
  RenderCommand: sr,
  ZIndexCommand: ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  M as EVENT_TYPE,
  ic as IRFlowchart,
  oc as IRFlowchartCommands,
  ne as POSITION_LIST
};
//# sourceMappingURL=flowchart.js.map
