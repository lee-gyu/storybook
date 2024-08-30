import "./chunks/_init-B0xIPnhF.js";
import { i as vn, w as hr, r as lr, a as ce } from "./chunks/in-memory-clipboard-DO8U3HeN.js";
import { c as On } from "./chunks/clone-CMP76bLO.js";
import { L as Sn } from "./chunks/logger-BzjoGhbK.js";
import { a as Re, g as Le, b as Fe, e as dr, d as ur } from "./chunks/image-Y3tFDdOU.js";
import { I as fr } from "./chunks/index-DDbI2a2F.js";
function gr(n, t) {
  return {
    forEach(e) {
      const r = Math.min(n.length, t.length);
      for (let i = 0; i < r; i++)
        e(n[i], t[i]);
    }
  };
}
var pr = { value: () => {
} };
function ee() {
  for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
    if (!(r = arguments[n] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Bt(e);
}
function Bt(n) {
  this._ = n;
}
function yr(n, t) {
  return n.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !t.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Bt.prototype = ee.prototype = {
  constructor: Bt,
  on: function(n, t) {
    var e = this._, r = yr(n + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (n = r[o]).type) && (i = mr(e[i], n.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (i = (n = r[o]).type) e[i] = He(e[i], n.name, t);
      else if (t == null) for (i in e) e[i] = He(e[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var e in t) n[e] = t[e].slice();
    return new Bt(n);
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
function mr(n, t) {
  for (var e = 0, r = n.length, i; e < r; ++e)
    if ((i = n[e]).name === t)
      return i.value;
}
function He(n, t, e) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === t) {
      n[r] = pr, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return e != null && n.push({ name: t, value: e }), n;
}
var pe = "http://www.w3.org/1999/xhtml";
const Xe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: pe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ne(n) {
  var t = n += "", e = t.indexOf(":");
  return e >= 0 && (t = n.slice(0, e)) !== "xmlns" && (n = n.slice(e + 1)), Xe.hasOwnProperty(t) ? { space: Xe[t], local: n } : n;
}
function br(n) {
  return function() {
    var t = this.ownerDocument, e = this.namespaceURI;
    return e === pe && t.documentElement.namespaceURI === pe ? t.createElement(n) : t.createElementNS(e, n);
  };
}
function wr(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function Cn(n) {
  var t = ne(n);
  return (t.local ? wr : br)(t);
}
function xr() {
}
function je(n) {
  return n == null ? xr : function() {
    return this.querySelector(n);
  };
}
function _r(n) {
  typeof n != "function" && (n = je(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = new Array(s), c, h, l = 0; l < s; ++l)
      (c = o[l]) && (h = n.call(c, c.__data__, l, o)) && ("__data__" in c && (h.__data__ = c.__data__), a[l] = h);
  return new L(r, this._parents);
}
function vr(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function Or() {
  return [];
}
function En(n) {
  return n == null ? Or : function() {
    return this.querySelectorAll(n);
  };
}
function Sr(n) {
  return function() {
    return vr(n.apply(this, arguments));
  };
}
function Cr(n) {
  typeof n == "function" ? n = Sr(n) : n = En(n);
  for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = t[o], a = s.length, c, h = 0; h < a; ++h)
      (c = s[h]) && (r.push(n.call(c, c.__data__, h, s)), i.push(c));
  return new L(r, i);
}
function jn(n) {
  return function() {
    return this.matches(n);
  };
}
function kn(n) {
  return function(t) {
    return t.matches(n);
  };
}
var Er = Array.prototype.find;
function jr(n) {
  return function() {
    return Er.call(this.children, n);
  };
}
function kr() {
  return this.firstElementChild;
}
function Ir(n) {
  return this.select(n == null ? kr : jr(typeof n == "function" ? n : kn(n)));
}
var Mr = Array.prototype.filter;
function Tr() {
  return Array.from(this.children);
}
function Ar(n) {
  return function() {
    return Mr.call(this.children, n);
  };
}
function zr(n) {
  return this.selectAll(n == null ? Tr : Ar(typeof n == "function" ? n : kn(n)));
}
function Dr(n) {
  typeof n != "function" && (n = jn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, h = 0; h < s; ++h)
      (c = o[h]) && n.call(c, c.__data__, h, o) && a.push(c);
  return new L(r, this._parents);
}
function In(n) {
  return new Array(n.length);
}
function Nr() {
  return new L(this._enter || this._groups.map(In), this._parents);
}
function qt(n, t) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
}
qt.prototype = {
  constructor: qt,
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
function Pr(n) {
  return function() {
    return n;
  };
}
function $r(n, t, e, r, i, o) {
  for (var s = 0, a, c = t.length, h = o.length; s < h; ++s)
    (a = t[s]) ? (a.__data__ = o[s], r[s] = a) : e[s] = new qt(n, o[s]);
  for (; s < c; ++s)
    (a = t[s]) && (i[s] = a);
}
function Rr(n, t, e, r, i, o, s) {
  var a, c, h = /* @__PURE__ */ new Map(), l = t.length, f = o.length, u = new Array(l), y;
  for (a = 0; a < l; ++a)
    (c = t[a]) && (u[a] = y = s.call(c, c.__data__, a, t) + "", h.has(y) ? i[a] = c : h.set(y, c));
  for (a = 0; a < f; ++a)
    y = s.call(n, o[a], a, o) + "", (c = h.get(y)) ? (r[a] = c, c.__data__ = o[a], h.delete(y)) : e[a] = new qt(n, o[a]);
  for (a = 0; a < l; ++a)
    (c = t[a]) && h.get(u[a]) === c && (i[a] = c);
}
function Lr(n) {
  return n.__data__;
}
function Fr(n, t) {
  if (!arguments.length) return Array.from(this, Lr);
  var e = t ? Rr : $r, r = this._parents, i = this._groups;
  typeof n != "function" && (n = Pr(n));
  for (var o = i.length, s = new Array(o), a = new Array(o), c = new Array(o), h = 0; h < o; ++h) {
    var l = r[h], f = i[h], u = f.length, y = Hr(n.call(l, l && l.__data__, h, r)), O = y.length, E = a[h] = new Array(O), M = s[h] = new Array(O), w = c[h] = new Array(u);
    e(l, f, E, M, w, y, t);
    for (var P = 0, A = 0, p, S; P < O; ++P)
      if (p = E[P]) {
        for (P >= A && (A = P + 1); !(S = M[A]) && ++A < O; ) ;
        p._next = S || null;
      }
  }
  return s = new L(s, r), s._enter = a, s._exit = c, s;
}
function Hr(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function Xr() {
  return new L(this._exit || this._groups.map(In), this._parents);
}
function Yr(n, t, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), t != null && (i = t(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Br(n) {
  for (var t = n.selection ? n.selection() : n, e = this._groups, r = t._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), c = 0; c < s; ++c)
    for (var h = e[c], l = r[c], f = h.length, u = a[c] = new Array(f), y, O = 0; O < f; ++O)
      (y = h[O] || l[O]) && (u[O] = y);
  for (; c < i; ++c)
    a[c] = e[c];
  return new L(a, this._parents);
}
function Vr() {
  for (var n = this._groups, t = -1, e = n.length; ++t < e; )
    for (var r = n[t], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Ur(n) {
  n || (n = Wr);
  function t(f, u) {
    return f && u ? n(f.__data__, u.__data__) : !f - !u;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], a = s.length, c = i[o] = new Array(a), h, l = 0; l < a; ++l)
      (h = s[l]) && (c[l] = h);
    c.sort(t);
  }
  return new L(i, this._parents).order();
}
function Wr(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function qr() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function Gr() {
  return Array.from(this);
}
function Kr() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function Zr() {
  let n = 0;
  for (const t of this) ++n;
  return n;
}
function Jr() {
  return !this.node();
}
function Qr(n) {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && n.call(a, a.__data__, o, i);
  return this;
}
function ti(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function ei(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function ni(n, t) {
  return function() {
    this.setAttribute(n, t);
  };
}
function ri(n, t) {
  return function() {
    this.setAttributeNS(n.space, n.local, t);
  };
}
function ii(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
  };
}
function oi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
  };
}
function si(n, t) {
  var e = ne(n);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((t == null ? e.local ? ei : ti : typeof t == "function" ? e.local ? oi : ii : e.local ? ri : ni)(e, t));
}
function Mn(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function ai(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function ci(n, t, e) {
  return function() {
    this.style.setProperty(n, t, e);
  };
}
function hi(n, t, e) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
  };
}
function li(n, t, e) {
  return arguments.length > 1 ? this.each((t == null ? ai : typeof t == "function" ? hi : ci)(n, t, e ?? "")) : mt(this.node(), n);
}
function mt(n, t) {
  return n.style.getPropertyValue(t) || Mn(n).getComputedStyle(n, null).getPropertyValue(t);
}
function di(n) {
  return function() {
    delete this[n];
  };
}
function ui(n, t) {
  return function() {
    this[n] = t;
  };
}
function fi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? delete this[n] : this[n] = e;
  };
}
function gi(n, t) {
  return arguments.length > 1 ? this.each((t == null ? di : typeof t == "function" ? fi : ui)(n, t)) : this.node()[n];
}
function Tn(n) {
  return n.trim().split(/^|\s+/);
}
function ke(n) {
  return n.classList || new An(n);
}
function An(n) {
  this._node = n, this._names = Tn(n.getAttribute("class") || "");
}
An.prototype = {
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
function zn(n, t) {
  for (var e = ke(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
}
function Dn(n, t) {
  for (var e = ke(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
}
function pi(n) {
  return function() {
    zn(this, n);
  };
}
function yi(n) {
  return function() {
    Dn(this, n);
  };
}
function mi(n, t) {
  return function() {
    (t.apply(this, arguments) ? zn : Dn)(this, n);
  };
}
function bi(n, t) {
  var e = Tn(n + "");
  if (arguments.length < 2) {
    for (var r = ke(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? mi : t ? pi : yi)(e, t));
}
function wi() {
  this.textContent = "";
}
function xi(n) {
  return function() {
    this.textContent = n;
  };
}
function _i(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function vi(n) {
  return arguments.length ? this.each(n == null ? wi : (typeof n == "function" ? _i : xi)(n)) : this.node().textContent;
}
function Oi() {
  this.innerHTML = "";
}
function Si(n) {
  return function() {
    this.innerHTML = n;
  };
}
function Ci(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ei(n) {
  return arguments.length ? this.each(n == null ? Oi : (typeof n == "function" ? Ci : Si)(n)) : this.node().innerHTML;
}
function ji() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ki() {
  return this.each(ji);
}
function Ii() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mi() {
  return this.each(Ii);
}
function Ti(n) {
  var t = typeof n == "function" ? n : Cn(n);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ai() {
  return null;
}
function zi(n, t) {
  var e = typeof n == "function" ? n : Cn(n), r = t == null ? Ai : typeof t == "function" ? t : je(t);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Di() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function Ni() {
  return this.each(Di);
}
function Pi() {
  var n = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function $i() {
  var n = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Ri(n) {
  return this.select(n ? $i : Pi);
}
function Li(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function Fi(n) {
  return function(t) {
    n.call(this, t, this.__data__);
  };
}
function Hi(n) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var e = "", r = t.indexOf(".");
    return r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: e };
  });
}
function Xi(n) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
        o = t[e], (!n.type || o.type === n.type) && o.name === n.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Yi(n, t, e) {
  return function() {
    var r = this.__on, i, o = Fi(t);
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
function Bi(n, t, e) {
  var r = Hi(n + ""), i, o = r.length, s;
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
  for (a = t ? Yi : Xi, i = 0; i < o; ++i) this.each(a(r[i], t, e));
  return this;
}
function Nn(n, t, e) {
  var r = Mn(n), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
}
function Vi(n, t) {
  return function() {
    return Nn(this, n, t);
  };
}
function Ui(n, t) {
  return function() {
    return Nn(this, n, t.apply(this, arguments));
  };
}
function Wi(n, t) {
  return this.each((typeof t == "function" ? Ui : Vi)(n, t));
}
function* qi() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var Pn = [null];
function L(n, t) {
  this._groups = n, this._parents = t;
}
function It() {
  return new L([[document.documentElement]], Pn);
}
function Gi() {
  return this;
}
L.prototype = It.prototype = {
  constructor: L,
  select: _r,
  selectAll: Cr,
  selectChild: Ir,
  selectChildren: zr,
  filter: Dr,
  data: Fr,
  enter: Nr,
  exit: Xr,
  join: Yr,
  merge: Br,
  selection: Gi,
  order: Vr,
  sort: Ur,
  call: qr,
  nodes: Gr,
  node: Kr,
  size: Zr,
  empty: Jr,
  each: Qr,
  attr: si,
  style: li,
  property: gi,
  classed: bi,
  text: vi,
  html: Ei,
  raise: ki,
  lower: Mi,
  append: Ti,
  insert: zi,
  remove: Ni,
  clone: Ri,
  datum: Li,
  on: Bi,
  dispatch: Wi,
  [Symbol.iterator]: qi
};
function V(n) {
  return typeof n == "string" ? new L([[document.querySelector(n)]], [document.documentElement]) : new L([[n]], Pn);
}
function Ki(n) {
  let t;
  for (; t = n.sourceEvent; ) n = t;
  return n;
}
function tt(n, t) {
  if (n = Ki(n), t === void 0 && (t = n.currentTarget), t) {
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
const Zi = { passive: !1 }, St = { capture: !0, passive: !1 };
function he(n) {
  n.stopImmediatePropagation();
}
function pt(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function $n(n) {
  var t = n.document.documentElement, e = V(n).on("dragstart.drag", pt, St);
  "onselectstart" in t ? e.on("selectstart.drag", pt, St) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Rn(n, t) {
  var e = n.document.documentElement, r = V(n).on("dragstart.drag", null);
  t && (r.on("click.drag", pt, St), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const zt = (n) => () => n;
function ye(n, {
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
ye.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function Ji(n) {
  return !n.ctrlKey && !n.button;
}
function Qi() {
  return this.parentNode;
}
function to(n, t) {
  return t ?? { x: n.x, y: n.y };
}
function eo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function it() {
  var n = Ji, t = Qi, e = to, r = eo, i = {}, o = ee("start", "drag", "end"), s = 0, a, c, h, l, f = 0;
  function u(p) {
    p.on("mousedown.drag", y).filter(r).on("touchstart.drag", M).on("touchmove.drag", w, Zi).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(p, S) {
    if (!(l || !n.call(this, p, S))) {
      var C = A(this, t.call(this, p, S), p, S, "mouse");
      C && (V(p.view).on("mousemove.drag", O, St).on("mouseup.drag", E, St), $n(p.view), he(p), h = !1, a = p.clientX, c = p.clientY, C("start", p));
    }
  }
  function O(p) {
    if (pt(p), !h) {
      var S = p.clientX - a, C = p.clientY - c;
      h = S * S + C * C > f;
    }
    i.mouse("drag", p);
  }
  function E(p) {
    V(p.view).on("mousemove.drag mouseup.drag", null), Rn(p.view, h), pt(p), i.mouse("end", p);
  }
  function M(p, S) {
    if (n.call(this, p, S)) {
      var C = p.changedTouches, k = t.call(this, p, S), z = C.length, R, H;
      for (R = 0; R < z; ++R)
        (H = A(this, k, p, S, C[R].identifier, C[R])) && (he(p), H("start", p, C[R]));
    }
  }
  function w(p) {
    var S = p.changedTouches, C = S.length, k, z;
    for (k = 0; k < C; ++k)
      (z = i[S[k].identifier]) && (pt(p), z("drag", p, S[k]));
  }
  function P(p) {
    var S = p.changedTouches, C = S.length, k, z;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), k = 0; k < C; ++k)
      (z = i[S[k].identifier]) && (he(p), z("end", p, S[k]));
  }
  function A(p, S, C, k, z, R) {
    var H = o.copy(), F = tt(R || C, S), Tt, At, d;
    if ((d = e.call(p, new ye("beforestart", {
      sourceEvent: C,
      target: u,
      identifier: z,
      active: s,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), k)) != null)
      return Tt = d.x - F[0] || 0, At = d.y - F[1] || 0, function m(g, b, x) {
        var _ = F, v;
        switch (g) {
          case "start":
            i[z] = m, v = s++;
            break;
          case "end":
            delete i[z], --s;
          case "drag":
            F = tt(x || b, S), v = s;
            break;
        }
        H.call(
          g,
          p,
          new ye(g, {
            sourceEvent: b,
            subject: d,
            target: u,
            identifier: z,
            active: v,
            x: F[0] + Tt,
            y: F[1] + At,
            dx: F[0] - _[0],
            dy: F[1] - _[1],
            dispatch: H
          }),
          k
        );
      };
  }
  return u.filter = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : zt(!!p), u) : n;
  }, u.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : zt(p), u) : t;
  }, u.subject = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : zt(p), u) : e;
  }, u.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : zt(!!p), u) : r;
  }, u.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? u : p;
  }, u.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, u) : Math.sqrt(f);
  }, u;
}
function Ie(n, t, e) {
  n.prototype = t.prototype = e, e.constructor = n;
}
function Ln(n, t) {
  var e = Object.create(n.prototype);
  for (var r in t) e[r] = t[r];
  return e;
}
function Mt() {
}
var Ct = 0.7, Gt = 1 / Ct, yt = "\\s*([+-]?\\d+)\\s*", Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", no = /^#([0-9a-f]{3,8})$/, ro = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), io = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), oo = new RegExp(`^rgba\\(${yt},${yt},${yt},${Et}\\)$`), so = new RegExp(`^rgba\\(${G},${G},${G},${Et}\\)$`), ao = new RegExp(`^hsl\\(${Et},${G},${G}\\)$`), co = new RegExp(`^hsla\\(${Et},${G},${G},${Et}\\)$`), Ye = {
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
Ie(Mt, jt, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Be,
  // Deprecated! Use color.formatHex.
  formatHex: Be,
  formatHex8: ho,
  formatHsl: lo,
  formatRgb: Ve,
  toString: Ve
});
function Be() {
  return this.rgb().formatHex();
}
function ho() {
  return this.rgb().formatHex8();
}
function lo() {
  return Fn(this).formatHsl();
}
function Ve() {
  return this.rgb().formatRgb();
}
function jt(n) {
  var t, e;
  return n = (n + "").trim().toLowerCase(), (t = no.exec(n)) ? (e = t[1].length, t = parseInt(t[1], 16), e === 6 ? Ue(t) : e === 3 ? new $(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : e === 8 ? Dt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : e === 4 ? Dt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ro.exec(n)) ? new $(t[1], t[2], t[3], 1) : (t = io.exec(n)) ? new $(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = oo.exec(n)) ? Dt(t[1], t[2], t[3], t[4]) : (t = so.exec(n)) ? Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ao.exec(n)) ? Ge(t[1], t[2] / 100, t[3] / 100, 1) : (t = co.exec(n)) ? Ge(t[1], t[2] / 100, t[3] / 100, t[4]) : Ye.hasOwnProperty(n) ? Ue(Ye[n]) : n === "transparent" ? new $(NaN, NaN, NaN, 0) : null;
}
function Ue(n) {
  return new $(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Dt(n, t, e, r) {
  return r <= 0 && (n = t = e = NaN), new $(n, t, e, r);
}
function uo(n) {
  return n instanceof Mt || (n = jt(n)), n ? (n = n.rgb(), new $(n.r, n.g, n.b, n.opacity)) : new $();
}
function me(n, t, e, r) {
  return arguments.length === 1 ? uo(n) : new $(n, t, e, r ?? 1);
}
function $(n, t, e, r) {
  this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
}
Ie($, me, Ln(Mt, {
  brighter(n) {
    return n = n == null ? Gt : Math.pow(Gt, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Ct : Math.pow(Ct, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $(dt(this.r), dt(this.g), dt(this.b), Kt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: We,
  // Deprecated! Use color.formatHex.
  formatHex: We,
  formatHex8: fo,
  formatRgb: qe,
  toString: qe
}));
function We() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}`;
}
function fo() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qe() {
  const n = Kt(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function Kt(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function dt(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function lt(n) {
  return n = dt(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Ge(n, t, e, r) {
  return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new U(n, t, e, r);
}
function Fn(n) {
  if (n instanceof U) return new U(n.h, n.s, n.l, n.opacity);
  if (n instanceof Mt || (n = jt(n)), !n) return new U();
  if (n instanceof U) return n;
  n = n.rgb();
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = Math.min(t, e, r), o = Math.max(t, e, r), s = NaN, a = o - i, c = (o + i) / 2;
  return a ? (t === o ? s = (e - r) / a + (e < r) * 6 : e === o ? s = (r - t) / a + 2 : s = (t - e) / a + 4, a /= c < 0.5 ? o + i : 2 - o - i, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new U(s, a, c, n.opacity);
}
function go(n, t, e, r) {
  return arguments.length === 1 ? Fn(n) : new U(n, t, e, r ?? 1);
}
function U(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
Ie(U, go, Ln(Mt, {
  brighter(n) {
    return n = n == null ? Gt : Math.pow(Gt, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Ct : Math.pow(Ct, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, t = isNaN(n) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * t, i = 2 * e - r;
    return new $(
      le(n >= 240 ? n - 240 : n + 120, i, r),
      le(n, i, r),
      le(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new U(Ke(this.h), Nt(this.s), Nt(this.l), Kt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = Kt(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Ke(this.h)}, ${Nt(this.s) * 100}%, ${Nt(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Ke(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function Nt(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function le(n, t, e) {
  return (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t) * 255;
}
const Hn = (n) => () => n;
function po(n, t) {
  return function(e) {
    return n + e * t;
  };
}
function yo(n, t, e) {
  return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function(r) {
    return Math.pow(n + r * t, e);
  };
}
function mo(n) {
  return (n = +n) == 1 ? Xn : function(t, e) {
    return e - t ? yo(t, e, n) : Hn(isNaN(t) ? e : t);
  };
}
function Xn(n, t) {
  var e = t - n;
  return e ? po(n, e) : Hn(isNaN(n) ? t : n);
}
const Ze = function n(t) {
  var e = mo(t);
  function r(i, o) {
    var s = e((i = me(i)).r, (o = me(o)).r), a = e(i.g, o.g), c = e(i.b, o.b), h = Xn(i.opacity, o.opacity);
    return function(l) {
      return i.r = s(l), i.g = a(l), i.b = c(l), i.opacity = h(l), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function ot(n, t) {
  return n = +n, t = +t, function(e) {
    return n * (1 - e) + t * e;
  };
}
var be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, de = new RegExp(be.source, "g");
function bo(n) {
  return function() {
    return n;
  };
}
function wo(n) {
  return function(t) {
    return n(t) + "";
  };
}
function xo(n, t) {
  var e = be.lastIndex = de.lastIndex = 0, r, i, o, s = -1, a = [], c = [];
  for (n = n + "", t = t + ""; (r = be.exec(n)) && (i = de.exec(t)); )
    (o = i.index) > e && (o = t.slice(e, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, c.push({ i: s, x: ot(r, i) })), e = de.lastIndex;
  return e < t.length && (o = t.slice(e), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? c[0] ? wo(c[0].x) : bo(t) : (t = c.length, function(h) {
    for (var l = 0, f; l < t; ++l) a[(f = c[l]).i] = f.x(h);
    return a.join("");
  });
}
var Je = 180 / Math.PI, we = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yn(n, t, e, r, i, o) {
  var s, a, c;
  return (s = Math.sqrt(n * n + t * t)) && (n /= s, t /= s), (c = n * e + t * r) && (e -= n * c, r -= t * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), n * r < t * e && (n = -n, t = -t, c = -c, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, n) * Je,
    skewX: Math.atan(c) * Je,
    scaleX: s,
    scaleY: a
  };
}
var Pt;
function _o(n) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return t.isIdentity ? we : Yn(t.a, t.b, t.c, t.d, t.e, t.f);
}
function vo(n) {
  return n == null || (Pt || (Pt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Pt.setAttribute("transform", n), !(n = Pt.transform.baseVal.consolidate())) ? we : (n = n.matrix, Yn(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Bn(n, t, e, r) {
  function i(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, l, f, u, y, O) {
    if (h !== f || l !== u) {
      var E = y.push("translate(", null, t, null, e);
      O.push({ i: E - 4, x: ot(h, f) }, { i: E - 2, x: ot(l, u) });
    } else (f || u) && y.push("translate(" + f + t + u + e);
  }
  function s(h, l, f, u) {
    h !== l ? (h - l > 180 ? l += 360 : l - h > 180 && (h += 360), u.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: ot(h, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function a(h, l, f, u) {
    h !== l ? u.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: ot(h, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(h, l, f, u, y, O) {
    if (h !== f || l !== u) {
      var E = y.push(i(y) + "scale(", null, ",", null, ")");
      O.push({ i: E - 4, x: ot(h, f) }, { i: E - 2, x: ot(l, u) });
    } else (f !== 1 || u !== 1) && y.push(i(y) + "scale(" + f + "," + u + ")");
  }
  return function(h, l) {
    var f = [], u = [];
    return h = n(h), l = n(l), o(h.translateX, h.translateY, l.translateX, l.translateY, f, u), s(h.rotate, l.rotate, f, u), a(h.skewX, l.skewX, f, u), c(h.scaleX, h.scaleY, l.scaleX, l.scaleY, f, u), h = l = null, function(y) {
      for (var O = -1, E = u.length, M; ++O < E; ) f[(M = u[O]).i] = M.x(y);
      return f.join("");
    };
  };
}
var Oo = Bn(_o, "px, ", "px)", "deg)"), So = Bn(vo, ", ", ")", ")"), Co = 1e-12;
function Qe(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function Eo(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function jo(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const ko = function n(t, e, r) {
  function i(o, s) {
    var a = o[0], c = o[1], h = o[2], l = s[0], f = s[1], u = s[2], y = l - a, O = f - c, E = y * y + O * O, M, w;
    if (E < Co)
      w = Math.log(u / h) / t, M = function(k) {
        return [
          a + k * y,
          c + k * O,
          h * Math.exp(t * k * w)
        ];
      };
    else {
      var P = Math.sqrt(E), A = (u * u - h * h + r * E) / (2 * h * e * P), p = (u * u - h * h - r * E) / (2 * u * e * P), S = Math.log(Math.sqrt(A * A + 1) - A), C = Math.log(Math.sqrt(p * p + 1) - p);
      w = (C - S) / t, M = function(k) {
        var z = k * w, R = Qe(S), H = h / (e * P) * (R * jo(t * z + S) - Eo(S));
        return [
          a + H * y,
          c + H * O,
          h * R / Qe(t * z + S)
        ];
      };
    }
    return M.duration = w * 1e3 * t / Math.SQRT2, M;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, c = a * a;
    return n(s, a, c);
  }, i;
}(Math.SQRT2, 2, 4);
var bt = 0, vt = 0, xt = 0, Vn = 1e3, Zt, Ot, Jt = 0, ut = 0, re = 0, kt = typeof performance == "object" && performance.now ? performance : Date, Un = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Me() {
  return ut || (Un(Io), ut = kt.now() + re);
}
function Io() {
  ut = 0;
}
function Qt() {
  this._call = this._time = this._next = null;
}
Qt.prototype = Wn.prototype = {
  constructor: Qt,
  restart: function(n, t, e) {
    if (typeof n != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Me() : +e) + (t == null ? 0 : +t), !this._next && Ot !== this && (Ot ? Ot._next = this : Zt = this, Ot = this), this._call = n, this._time = e, xe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xe());
  }
};
function Wn(n, t, e) {
  var r = new Qt();
  return r.restart(n, t, e), r;
}
function Mo() {
  Me(), ++bt;
  for (var n = Zt, t; n; )
    (t = ut - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
  --bt;
}
function tn() {
  ut = (Jt = kt.now()) + re, bt = vt = 0;
  try {
    Mo();
  } finally {
    bt = 0, Ao(), ut = 0;
  }
}
function To() {
  var n = kt.now(), t = n - Jt;
  t > Vn && (re -= t, Jt = n);
}
function Ao() {
  for (var n, t = Zt, e, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), n = t, t = t._next) : (e = t._next, t._next = null, t = n ? n._next = e : Zt = e);
  Ot = n, xe(r);
}
function xe(n) {
  if (!bt) {
    vt && (vt = clearTimeout(vt));
    var t = n - ut;
    t > 24 ? (n < 1 / 0 && (vt = setTimeout(tn, n - kt.now() - re)), xt && (xt = clearInterval(xt))) : (xt || (Jt = kt.now(), xt = setInterval(To, Vn)), bt = 1, Un(tn));
  }
}
function te(n, t, e) {
  var r = new Qt();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), n(i + t);
  }, t, e), r;
}
var zo = ee("start", "end", "cancel", "interrupt"), Do = [], qn = 0, en = 1, _e = 2, Vt = 3, nn = 4, ve = 5, Ut = 6;
function ie(n, t, e, r, i, o) {
  var s = n.__transition;
  if (!s) n.__transition = {};
  else if (e in s) return;
  No(n, e, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: zo,
    tween: Do,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: qn
  });
}
function Te(n, t) {
  var e = W(n, t);
  if (e.state > qn) throw new Error("too late; already scheduled");
  return e;
}
function K(n, t) {
  var e = W(n, t);
  if (e.state > Vt) throw new Error("too late; already running");
  return e;
}
function W(n, t) {
  var e = n.__transition;
  if (!e || !(e = e[t])) throw new Error("transition not found");
  return e;
}
function No(n, t, e) {
  var r = n.__transition, i;
  r[t] = e, e.timer = Wn(o, 0, e.time);
  function o(h) {
    e.state = en, e.timer.restart(s, e.delay, e.time), e.delay <= h && s(h - e.delay);
  }
  function s(h) {
    var l, f, u, y;
    if (e.state !== en) return c();
    for (l in r)
      if (y = r[l], y.name === e.name) {
        if (y.state === Vt) return te(s);
        y.state === nn ? (y.state = Ut, y.timer.stop(), y.on.call("interrupt", n, n.__data__, y.index, y.group), delete r[l]) : +l < t && (y.state = Ut, y.timer.stop(), y.on.call("cancel", n, n.__data__, y.index, y.group), delete r[l]);
      }
    if (te(function() {
      e.state === Vt && (e.state = nn, e.timer.restart(a, e.delay, e.time), a(h));
    }), e.state = _e, e.on.call("start", n, n.__data__, e.index, e.group), e.state === _e) {
      for (e.state = Vt, i = new Array(u = e.tween.length), l = 0, f = -1; l < u; ++l)
        (y = e.tween[l].value.call(n, n.__data__, e.index, e.group)) && (i[++f] = y);
      i.length = f + 1;
    }
  }
  function a(h) {
    for (var l = h < e.duration ? e.ease.call(null, h / e.duration) : (e.timer.restart(c), e.state = ve, 1), f = -1, u = i.length; ++f < u; )
      i[f].call(n, l);
    e.state === ve && (e.on.call("end", n, n.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Ut, e.timer.stop(), delete r[t];
    for (var h in r) return;
    delete n.__transition;
  }
}
function Wt(n, t) {
  var e = n.__transition, r, i, o = !0, s;
  if (e) {
    t = t == null ? null : t + "";
    for (s in e) {
      if ((r = e[s]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > _e && r.state < ve, r.state = Ut, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete e[s];
    }
    o && delete n.__transition;
  }
}
function Po(n) {
  return this.each(function() {
    Wt(this, n);
  });
}
function $o(n, t) {
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
function Ro(n, t, e) {
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
function Lo(n, t) {
  var e = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = W(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === n)
        return s.value;
    return null;
  }
  return this.each((t == null ? $o : Ro)(e, n, t));
}
function Ae(n, t, e) {
  var r = n._id;
  return n.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[t] = e.apply(this, arguments);
  }), function(i) {
    return W(i, r).value[t];
  };
}
function Gn(n, t) {
  var e;
  return (typeof t == "number" ? ot : t instanceof jt ? Ze : (e = jt(t)) ? (t = e, Ze) : xo)(n, t);
}
function Fo(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function Ho(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function Xo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Yo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(n.space, n.local);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Bo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttribute(n) : (s = this.getAttribute(n), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Vo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttributeNS(n.space, n.local) : (s = this.getAttributeNS(n.space, n.local), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Uo(n, t) {
  var e = ne(n), r = e === "transform" ? So : Gn;
  return this.attrTween(n, typeof t == "function" ? (e.local ? Vo : Bo)(e, r, Ae(this, "attr." + n, t)) : t == null ? (e.local ? Ho : Fo)(e) : (e.local ? Yo : Xo)(e, r, t));
}
function Wo(n, t) {
  return function(e) {
    this.setAttribute(n, t.call(this, e));
  };
}
function qo(n, t) {
  return function(e) {
    this.setAttributeNS(n.space, n.local, t.call(this, e));
  };
}
function Go(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && qo(n, o)), e;
  }
  return i._value = t, i;
}
function Ko(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Wo(n, o)), e;
  }
  return i._value = t, i;
}
function Zo(n, t) {
  var e = "attr." + n;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  var r = ne(n);
  return this.tween(e, (r.local ? Go : Ko)(r, t));
}
function Jo(n, t) {
  return function() {
    Te(this, n).delay = +t.apply(this, arguments);
  };
}
function Qo(n, t) {
  return t = +t, function() {
    Te(this, n).delay = t;
  };
}
function ts(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? Jo : Qo)(t, n)) : W(this.node(), t).delay;
}
function es(n, t) {
  return function() {
    K(this, n).duration = +t.apply(this, arguments);
  };
}
function ns(n, t) {
  return t = +t, function() {
    K(this, n).duration = t;
  };
}
function rs(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? es : ns)(t, n)) : W(this.node(), t).duration;
}
function is(n, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    K(this, n).ease = t;
  };
}
function os(n) {
  var t = this._id;
  return arguments.length ? this.each(is(t, n)) : W(this.node(), t).ease;
}
function ss(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, n).ease = e;
  };
}
function as(n) {
  if (typeof n != "function") throw new Error();
  return this.each(ss(this._id, n));
}
function cs(n) {
  typeof n != "function" && (n = jn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, h = 0; h < s; ++h)
      (c = o[h]) && n.call(c, c.__data__, h, o) && a.push(c);
  return new rt(r, this._parents, this._name, this._id);
}
function hs(n) {
  if (n._id !== this._id) throw new Error();
  for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var c = t[a], h = e[a], l = c.length, f = s[a] = new Array(l), u, y = 0; y < l; ++y)
      (u = c[y] || h[y]) && (f[y] = u);
  for (; a < r; ++a)
    s[a] = t[a];
  return new rt(s, this._parents, this._name, this._id);
}
function ls(n) {
  return (n + "").trim().split(/^|\s+/).every(function(t) {
    var e = t.indexOf(".");
    return e >= 0 && (t = t.slice(0, e)), !t || t === "start";
  });
}
function ds(n, t, e) {
  var r, i, o = ls(t) ? Te : K;
  return function() {
    var s = o(this, n), a = s.on;
    a !== r && (i = (r = a).copy()).on(t, e), s.on = i;
  };
}
function us(n, t) {
  var e = this._id;
  return arguments.length < 2 ? W(this.node(), e).on.on(n) : this.each(ds(e, n, t));
}
function fs(n) {
  return function() {
    var t = this.parentNode;
    for (var e in this.__transition) if (+e !== n) return;
    t && t.removeChild(this);
  };
}
function gs() {
  return this.on("end.remove", fs(this._id));
}
function ps(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = je(n));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], c = a.length, h = o[s] = new Array(c), l, f, u = 0; u < c; ++u)
      (l = a[u]) && (f = n.call(l, l.__data__, u, a)) && ("__data__" in l && (f.__data__ = l.__data__), h[u] = f, ie(h[u], t, e, u, h, W(l, e)));
  return new rt(o, this._parents, t, e);
}
function ys(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = En(n));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var c = r[a], h = c.length, l, f = 0; f < h; ++f)
      if (l = c[f]) {
        for (var u = n.call(l, l.__data__, f, c), y, O = W(l, e), E = 0, M = u.length; E < M; ++E)
          (y = u[E]) && ie(y, t, e, E, u, O);
        o.push(u), s.push(l);
      }
  return new rt(o, s, t, e);
}
var ms = It.prototype.constructor;
function bs() {
  return new ms(this._groups, this._parents);
}
function ws(n, t) {
  var e, r, i;
  return function() {
    var o = mt(this, n), s = (this.style.removeProperty(n), mt(this, n));
    return o === s ? null : o === e && s === r ? i : i = t(e = o, r = s);
  };
}
function Kn(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function xs(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = mt(this, n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function _s(n, t, e) {
  var r, i, o;
  return function() {
    var s = mt(this, n), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(n), mt(this, n))), s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a));
  };
}
function vs(n, t) {
  var e, r, i, o = "style." + t, s = "end." + o, a;
  return function() {
    var c = K(this, n), h = c.on, l = c.value[o] == null ? a || (a = Kn(t)) : void 0;
    (h !== e || i !== l) && (r = (e = h).copy()).on(s, i = l), c.on = r;
  };
}
function Os(n, t, e) {
  var r = (n += "") == "transform" ? Oo : Gn;
  return t == null ? this.styleTween(n, ws(n, r)).on("end.style." + n, Kn(n)) : typeof t == "function" ? this.styleTween(n, _s(n, r, Ae(this, "style." + n, t))).each(vs(this._id, n)) : this.styleTween(n, xs(n, r, t), e).on("end.style." + n, null);
}
function Ss(n, t, e) {
  return function(r) {
    this.style.setProperty(n, t.call(this, r), e);
  };
}
function Cs(n, t, e) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && Ss(n, s, e)), r;
  }
  return o._value = t, o;
}
function Es(n, t, e) {
  var r = "style." + (n += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Cs(n, t, e ?? ""));
}
function js(n) {
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
function Is(n) {
  return this.tween("text", typeof n == "function" ? ks(Ae(this, "text", n)) : js(n == null ? "" : n + ""));
}
function Ms(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function Ts(n) {
  var t, e;
  function r() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && Ms(i)), t;
  }
  return r._value = n, r;
}
function As(n) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  return this.tween(t, Ts(n));
}
function zs() {
  for (var n = this._name, t = this._id, e = Zn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, h = 0; h < a; ++h)
      if (c = s[h]) {
        var l = W(c, t);
        ie(c, n, e, h, s, {
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
var Ns = 0;
function rt(n, t, e, r) {
  this._groups = n, this._parents = t, this._name = e, this._id = r;
}
function Zn() {
  return ++Ns;
}
var Q = It.prototype;
rt.prototype = {
  constructor: rt,
  select: ps,
  selectAll: ys,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: cs,
  merge: hs,
  selection: bs,
  transition: zs,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: us,
  attr: Uo,
  attrTween: Zo,
  style: Os,
  styleTween: Es,
  text: Is,
  textTween: As,
  remove: gs,
  tween: Lo,
  delay: ts,
  duration: rs,
  ease: os,
  easeVarying: as,
  end: Ds,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function Ps(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var $s = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ps
};
function Rs(n, t) {
  for (var e; !(e = n.__transition) || !(e = e[t]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${t} not found`);
  return e;
}
function Ls(n) {
  var t, e;
  n instanceof rt ? (t = n._id, n = n._name) : (t = Zn(), (e = $s).time = Me(), n = n == null ? null : n + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, h = 0; h < a; ++h)
      (c = s[h]) && ie(c, n, t, h, s, e || Rs(c, t));
  return new rt(r, this._parents, n, t);
}
It.prototype.interrupt = Po;
It.prototype.transition = Ls;
const $t = (n) => () => n;
function Fs(n, {
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
var ze = new nt(1, 0, 0);
Jn.prototype = nt.prototype;
function Jn(n) {
  for (; !n.__zoom; ) if (!(n = n.parentNode)) return ze;
  return n.__zoom;
}
function ue(n) {
  n.stopImmediatePropagation();
}
function _t(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Hs(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function Xs() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function rn() {
  return this.__zoom || ze;
}
function Ys(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function Bs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vs(n, t, e) {
  var r = n.invertX(t[0][0]) - e[0][0], i = n.invertX(t[1][0]) - e[1][0], o = n.invertY(t[0][1]) - e[0][1], s = n.invertY(t[1][1]) - e[1][1];
  return n.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Us() {
  var n = Hs, t = Xs, e = Vs, r = Ys, i = Bs, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = ko, h = ee("start", "zoom", "end"), l, f, u, y = 500, O = 150, E = 0, M = 10;
  function w(d) {
    d.property("__zoom", rn).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", H).filter(i).on("touchstart.zoom", F).on("touchmove.zoom", Tt).on("touchend.zoom touchcancel.zoom", At).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(d, m, g, b) {
    var x = d.selection ? d.selection() : d;
    x.property("__zoom", rn), d !== x ? S(d, m, g, b) : x.interrupt().each(function() {
      C(this, arguments).event(b).start().zoom(null, typeof m == "function" ? m.apply(this, arguments) : m).end();
    });
  }, w.scaleBy = function(d, m, g, b) {
    w.scaleTo(d, function() {
      var x = this.__zoom.k, _ = typeof m == "function" ? m.apply(this, arguments) : m;
      return x * _;
    }, g, b);
  }, w.scaleTo = function(d, m, g, b) {
    w.transform(d, function() {
      var x = t.apply(this, arguments), _ = this.__zoom, v = g == null ? p(x) : typeof g == "function" ? g.apply(this, arguments) : g, j = _.invert(v), I = typeof m == "function" ? m.apply(this, arguments) : m;
      return e(A(P(_, I), v, j), x, s);
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
      var _ = t.apply(this, arguments), v = this.__zoom, j = b == null ? p(_) : typeof b == "function" ? b.apply(this, arguments) : b;
      return e(ze.translate(j[0], j[1]).scale(v.k).translate(
        typeof m == "function" ? -m.apply(this, arguments) : -m,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), _, s);
    }, b, x);
  };
  function P(d, m) {
    return m = Math.max(o[0], Math.min(o[1], m)), m === d.k ? d : new nt(m, d.x, d.y);
  }
  function A(d, m, g) {
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
      var x = this, _ = arguments, v = C(x, _).event(b), j = t.apply(x, _), I = g == null ? p(j) : typeof g == "function" ? g.apply(x, _) : g, q = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), D = x.__zoom, X = typeof m == "function" ? m.apply(x, _) : m, Z = c(D.invert(I).concat(q / D.k), X.invert(I).concat(q / X.k));
      return function(Y) {
        if (Y === 1) Y = X;
        else {
          var J = Z(Y), ae = q / J[2];
          Y = new nt(ae, I[0] - J[0] * ae, I[1] - J[1] * ae);
        }
        v.zoom(null, Y);
      };
    });
  }
  function C(d, m, g) {
    return !g && d.__zooming || new k(d, m);
  }
  function k(d, m) {
    this.that = d, this.args = m, this.active = 0, this.sourceEvent = null, this.extent = t.apply(d, m), this.taps = 0;
  }
  k.prototype = {
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
        new Fs(d, {
          sourceEvent: this.sourceEvent,
          target: w,
          type: d,
          transform: this.that.__zoom,
          dispatch: h
        }),
        m
      );
    }
  };
  function z(d, ...m) {
    if (!n.apply(this, arguments)) return;
    var g = C(this, m).event(d), b = this.__zoom, x = Math.max(o[0], Math.min(o[1], b.k * Math.pow(2, r.apply(this, arguments)))), _ = tt(d);
    if (g.wheel)
      (g.mouse[0][0] !== _[0] || g.mouse[0][1] !== _[1]) && (g.mouse[1] = b.invert(g.mouse[0] = _)), clearTimeout(g.wheel);
    else {
      if (b.k === x) return;
      g.mouse = [_, b.invert(_)], Wt(this), g.start();
    }
    _t(d), g.wheel = setTimeout(v, O), g.zoom("mouse", e(A(P(b, x), g.mouse[0], g.mouse[1]), g.extent, s));
    function v() {
      g.wheel = null, g.end();
    }
  }
  function R(d, ...m) {
    if (u || !n.apply(this, arguments)) return;
    var g = d.currentTarget, b = C(this, m, !0).event(d), x = V(d.view).on("mousemove.zoom", I, !0).on("mouseup.zoom", q, !0), _ = tt(d, g), v = d.clientX, j = d.clientY;
    $n(d.view), ue(d), b.mouse = [_, this.__zoom.invert(_)], Wt(this), b.start();
    function I(D) {
      if (_t(D), !b.moved) {
        var X = D.clientX - v, Z = D.clientY - j;
        b.moved = X * X + Z * Z > E;
      }
      b.event(D).zoom("mouse", e(A(b.that.__zoom, b.mouse[0] = tt(D, g), b.mouse[1]), b.extent, s));
    }
    function q(D) {
      x.on("mousemove.zoom mouseup.zoom", null), Rn(D.view, b.moved), _t(D), b.event(D).end();
    }
  }
  function H(d, ...m) {
    if (n.apply(this, arguments)) {
      var g = this.__zoom, b = tt(d.changedTouches ? d.changedTouches[0] : d, this), x = g.invert(b), _ = g.k * (d.shiftKey ? 0.5 : 2), v = e(A(P(g, _), b, x), t.apply(this, m), s);
      _t(d), a > 0 ? V(this).transition().duration(a).call(S, v, b, d) : V(this).call(w.transform, v, b, d);
    }
  }
  function F(d, ...m) {
    if (n.apply(this, arguments)) {
      var g = d.touches, b = g.length, x = C(this, m, d.changedTouches.length === b).event(d), _, v, j, I;
      for (ue(d), v = 0; v < b; ++v)
        j = g[v], I = tt(j, this), I = [I, this.__zoom.invert(I), j.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== I[2] && (x.touch1 = I, x.taps = 0) : (x.touch0 = I, _ = !0, x.taps = 1 + !!l);
      l && (l = clearTimeout(l)), _ && (x.taps < 2 && (f = I[0], l = setTimeout(function() {
        l = null;
      }, y)), Wt(this), x.start());
    }
  }
  function Tt(d, ...m) {
    if (this.__zooming) {
      var g = C(this, m).event(d), b = d.changedTouches, x = b.length, _, v, j, I;
      for (_t(d), _ = 0; _ < x; ++_)
        v = b[_], j = tt(v, this), g.touch0 && g.touch0[2] === v.identifier ? g.touch0[0] = j : g.touch1 && g.touch1[2] === v.identifier && (g.touch1[0] = j);
      if (v = g.that.__zoom, g.touch1) {
        var q = g.touch0[0], D = g.touch0[1], X = g.touch1[0], Z = g.touch1[1], Y = (Y = X[0] - q[0]) * Y + (Y = X[1] - q[1]) * Y, J = (J = Z[0] - D[0]) * J + (J = Z[1] - D[1]) * J;
        v = P(v, Math.sqrt(Y / J)), j = [(q[0] + X[0]) / 2, (q[1] + X[1]) / 2], I = [(D[0] + Z[0]) / 2, (D[1] + Z[1]) / 2];
      } else if (g.touch0) j = g.touch0[0], I = g.touch0[1];
      else return;
      g.zoom("touch", e(A(v, j, I), g.extent, s));
    }
  }
  function At(d, ...m) {
    if (this.__zooming) {
      var g = C(this, m).event(d), b = d.changedTouches, x = b.length, _, v;
      for (ue(d), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, y), _ = 0; _ < x; ++_)
        v = b[_], g.touch0 && g.touch0[2] === v.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === v.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (v = tt(v, this), Math.hypot(f[0] - v[0], f[1] - v[1]) < M)) {
        var j = V(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : $t(+d), w) : r;
  }, w.filter = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : $t(!!d), w) : n;
  }, w.touchable = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : $t(!!d), w) : i;
  }, w.extent = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : $t([[+d[0][0], +d[0][1]], [+d[1][0], +d[1][1]]]), w) : t;
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
    return arguments.length ? (E = (d = +d) * d, w) : Math.sqrt(E);
  }, w.tapDistance = function(d) {
    return arguments.length ? (M = +d, w) : M;
  }, w;
}
class Ws {
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
class oe {
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
class ht extends oe {
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
class Oe extends ht {
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
const qs = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    if (n || (n = new OffscreenCanvas(0, 0).getContext("2d")), !n)
      throw new Error("Can't create canvas context");
    return n;
  };
})(), De = 2, Se = 10, Ce = (n, t) => {
  const e = qs();
  e.font = `${t.fontSize}px ${t.fontFamily}`;
  const r = e.measureText(n);
  return {
    width: r.width,
    height: r.fontBoundingBoxAscent + r.fontBoundingBoxDescent
  };
}, Ne = (n) => {
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
    Ce(o, n).width >= n.width && (e.push(o), r.length = 0);
  }
  return r.length > 0 && e.push(r.join("")), {
    length: e.length,
    lineHeight: Ce("|", n).height,
    lines: e
  };
}, Qn = (n) => {
  const t = n.text.replace("\r", "").split(`
`);
  let e = 0, r = 0;
  return t.forEach((i) => {
    const o = Ce(i, n);
    r += n.fontSize + De, e = Math.max(e, o.width);
  }), {
    width: e,
    height: r
  };
}, Gs = (n, t) => {
  const e = Ne(n), r = e.lineHeight * e.length;
  if (t < r) {
    const i = Math.ceil((r - t) / e.lineHeight);
    e.lines = e.lines.splice(0, e.length - i), e.length = e.lines.length, e.lines[e.length - 1] += "...";
  }
  return e;
}, on = "Pretendard", se = {
  id: "",
  temp: !1,
  type: "",
  render: "",
  text: "",
  editable: !0,
  foreColor: "black",
  fontSize: 16,
  fontFamily: on,
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
  tooltipFontFamily: on,
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
}, tr = {
  ...se,
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
  "connection.connectorSize": 3,
  "connection.adjusterSize": 7,
  "connection.adjusterFill": "black",
  "connection.arrowFill": "black",
  "connection.arrowSize": 10,
  "connection.arrowBorderColor": "black",
  "connection.arrowBorderWidth": 1,
  "connection.arrowType": "triangle"
}, er = {
  ...se,
  "group.margin": 20,
  "group.borderAlwaysAppearance": !1
}, nr = {
  ...se,
  "node.width": 120,
  "node.height": 60,
  "node.fill": "white",
  "node.x": 0,
  "node.y": 0,
  "node.connectorGap": 0,
  "node.connectorSize": 5,
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
  "node.commentFontFamily": "Pretendard",
  "node.borderRadius": 0
}, Ks = /translate\((-?[\d.]+),\s*?(-?[\d.]+)\)/, Zs = /scale\(([\d.]+),\s*?([\d.]+)\)/, sn = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
}, T = 45, Js = {
  node: { ...nr },
  group: { ...er },
  connection: { ...tr }
}, an = (n, t) => {
  switch (n.id) {
    case t.sourceObjId:
      return sn[t.sourcePos];
    case t.destinationObjId:
      return sn[t.destinationPos];
    default:
      throw new Error("It's not connected.");
  }
}, Qs = (n) => {
  if (n.indexOf("left") !== -1)
    return "left";
  if (n.indexOf("right") !== -1)
    return "right";
  if (n.indexOf("top") !== -1)
    return "top";
  if (n.indexOf("bottom") !== -1)
    return "bottom";
  throw new Error(`Invalid argument '${n}'`);
}, ta = (n) => {
  const t = Ks.exec(n), e = Zs.exec(n);
  let r = 0, i = 0, o = 1;
  return t && (r = parseFloat(t[1]), i = parseFloat(t[2])), e && (o = parseFloat(e[1])), {
    translateX: r,
    translateY: i,
    scale: o
  };
}, B = (n, t, e) => {
  n[t] === void 0 && (n[t] = e);
}, ea = (n) => {
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
}, na = (n) => {
  B(n, "cursor", "pointer"), (n["connection.points"] === null || n["connection.points"] === void 0) && (n["connection.points"] = []);
  const t = n["connection.points"];
  for (let e = t.length; e < 2; e++)
    t.push({ x: 0, y: 0 });
}, cn = (n, t) => Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)), hn = (n, t) => {
  const e = Js[n.type];
  if (e === void 0)
    throw new Error(`Unknown type '${n.type}'`);
  for (const r of Object.keys(e))
    n[r] === void 0 && (n[r] = t[r]);
  return n;
}, ra = (n) => {
  switch (n.type) {
    case "node": {
      ea(n);
      break;
    }
    case "connection": {
      na(n);
      break;
    }
    case "group": {
      B(n, "borderDash.selected", 1);
      break;
    }
  }
}, ia = (n) => {
  const t = {
    ...n.data
  }, e = n.firstPoint;
  switch (n.sourcePos) {
    case "top": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y - T
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + T,
          y: e.y - T
        }
      ];
      break;
    }
    case "bottom": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y + T
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + T,
          y: e.y + T
        }
      ];
      break;
    }
    case "left": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x - T,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x - T,
          y: e.y + T
        }
      ];
      break;
    }
    case "right": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + T,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + T,
          y: e.y + T
        }
      ];
      break;
    }
    default:
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + T,
          y: e.y + T
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + T / 2,
          y: e.y + T / 2
        },
        {
          x: e.x + T,
          y: e.y + T
        }
      ];
      break;
  }
  return t;
}, at = (n) => {
  const t = [];
  return n.forEach((e) => {
    t.push(On(e.data));
  }), t;
}, Ee = (n) => On(n), ln = function* (n) {
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
function rr(n, t, e, r) {
  n.attr("x", t).attr("y", e).attr("fill", r.foreColor).attr("font-family", r.fontFamily).attr("font-size", r.fontSize).attr("text-decoration", r.textDecoration);
}
function ir(n, t, e, r, i) {
  rr(n, e, r, i), t.lines.forEach((o, s) => {
    const a = n.append("tspan").attr("x", e).attr("dx", 0).attr("dy", s === 0 ? 0 : i.fontSize + De).text(o);
    o.trim() === "" && a.attr("opacity", "0").attr("fill-opacity", "0").text(".");
  });
}
const oa = (n, t) => {
  n.selectAll("tspan").remove(), t.clear();
}, sa = (n) => new Sn(n), dn = ["node.width", "node.height"];
class et {
  constructor(t, e) {
    this._objData = t, this._propList = e || [];
  }
  addMoveOldValues() {
    for (const t of ln(this._objData))
      this._propList.push({
        key: t.key,
        oldValue: t.value
      });
  }
  addSizeOldValues() {
    for (const t of dn)
      this._propList.push({
        key: t,
        oldValue: this._objData[t],
        newValue: this._objData[t]
      });
  }
  updateSizeNewValues() {
    for (const t of dn) {
      const e = this._propList.filter((r) => r.key === t)[0];
      e.newValue = this._objData[t];
    }
  }
  updateMoveNewValues() {
    for (const t of ln(this._objData)) {
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
class st extends oe {
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
class or extends oe {
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
class sr extends oe {
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
class aa {
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
    this.iContainer.getLogger().debug("MoveHandler.moveEndHandler()", "end"), this.movedInfo.forEach((t) => t.updateMoveNewValues()), this.movedInfo.some((t) => t.propList.some((e) => vn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new st(this.movedInfo));
  }
}
class ca {
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
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragEnd()", "end"), this.resizeInfo.forEach((t) => t.updateSizeNewValues()), this.resizeInfo.some((t) => t.propList.some((e) => vn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new st(this.resizeInfo));
  }
  addDragActionOnResizer(t) {
    t.renderer.resizers.forEach((e) => {
      const r = e.attr("cursor");
      e.call(it().filter(() => this.iContainer.getReadOnly() === !1).on("start", () => {
        this.resizeDragStart(), this.iContainer.initDrag("drag-node-resize");
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
const N = {
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
  COMMAND: "command",
  CHANGE_CLASS: "changeClass",
  DISCONNECT_NODE: "disconnectNode",
  CONNECT_NODE: "connectNode",
  MOUSEUP_SHEET: "mouseUpSheet",
  CONTEXT_MENU: "contextmenu"
};
class ha {
  constructor(t, e, r, i) {
    this.renderObj = t, this.key = e, this.newValue = r, this.oldValue = i;
  }
}
class Pe {
  constructor(t, e, r) {
    this._clickedSeq = 0, this.data = t, this.renderer = e, this.containerInterface = r;
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
          e = r, this.data.isMonitoring && (this.containerInterface.observerCallback(new ha(this, t, r, i)), this.render());
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
class la extends Pe {
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
class da extends Pe {
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
      r != null && r.release(t);
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
const un = 5, Rt = 30, Lt = 30, ua = /* @__PURE__ */ new Set([
  "TopLeft",
  "TopCenter",
  "TopRight",
  "BottomLeft",
  "BottomCenter",
  "BottomRight"
]);
class fa extends Pe {
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
    const t = Qn(this.data), e = Se * 2;
    this.width = t.width + e, this.height = t.height + e;
  }
  resizeToNorth(t) {
    const e = -(this.height / 2), r = parseInt(e - t);
    this.height + r >= Lt ? (this.y -= r, this.height = this.height + r) : (this.y += this.height - Lt, this.height = Lt);
  }
  resizeToWest(t) {
    const e = -(this.width / 2), r = parseInt(e - t);
    this.width + r >= Rt ? (this.x -= r, this.width = this.width + r) : (this.x += this.width - Rt, this.width = Rt);
  }
  addComment(t, e, r) {
    if (!ua.has(e))
      throw new Error(`Unknown position value '${e}' Please call with 'TopLeft' or 'TopCenter' or 'TopRight' or 'BottomLeft' or 'BottomCenter' or 'BottomRight'`);
    let i = `node.comment${e}`;
    r && (i += `.${r}`), this.data[i] = t;
  }
  resizeToEast(t) {
    this.width = Math.max(Rt, parseInt(t + this.width / 2));
  }
  resizeToSouth(t) {
    this.height = Math.max(Lt, parseInt(t + this.height / 2));
  }
}
const ga = '{"objects": []}', fn = {}, fe = {
  saveData(n) {
    hr(fn, n);
  },
  loadData() {
    return lr(fn) ?? ga;
  }
};
const pa = new Sn("Flowchart::ObjectManager");
class ya {
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
      throw pa.error("ObjectManager.getMap()", `Unknown '${t}' type`), new Error(`Unknown '${t}' type`);
    return e;
  }
  getObjCount() {
    return this.objMap.node.size + this.objMap.connection.size + this.objMap.group.size;
  }
  add(t) {
    const e = this.getMap(t.type);
    if (e.has(t.id))
      throw new Error(`Already has objId '${t.id}'`);
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
class ma {
  constructor() {
    this.text = "", this.length = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0;
  }
}
class ar extends ma {
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
const ba = 10, wa = 10, xa = 500, _a = 200;
class va {
  constructor(t) {
    this.tmpOut = !1, this.containerInterface = t, this.tooltip = {
      objId: null,
      mouseOverTimer: null,
      mouseOutTimer: null,
      g: null,
      textCache: new ar()
    }, this.isFirefox = window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  }
  initCommonMouseOverOutAction(t) {
    let e = 0, r = 0;
    t.g.on("mousemove", (i) => {
      e = i.offsetX + ba, r = i.offsetY + wa;
    }).on("mouseover", () => {
      t.isHovered = !0, this.containerInterface.getSelectNodeOnHover() && t.type === "node" && !this.containerInterface.isDragging() && (this.containerInterface.releaseAllObjects(), t.select(!0)), !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOutTimer != null && this.tooltip.mouseOutTimer.stop(), this.tooltip.mouseOverTimer = te(() => {
        t.isHovered && t.onEditing === !1 && t.id !== this.tooltip.objId && !this.containerInterface.getTooltipHidden() && this.createTooltipObj(t.data, e, r);
      }, xa));
    }).on("mouseout", () => {
      t.isHovered = !1, !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOverTimer != null && this.tooltip.mouseOverTimer.stop(), this.tooltip.mouseOutTimer = te(
        () => void (!t.isHovered && this.removeTooltipObj()),
        _a
      ));
    });
  }
  createTooltipObj(t, e, r) {
    this.removeTooltipObj(), this.tooltip.objId = t.id, this.tooltip.g = this.containerInterface.getSvg().append("g").attr("class", "tooltip");
    const i = this.containerInterface.getObjectOrNull(this.tooltip.objId);
    if (i === null)
      return;
    const o = {
      text: i.getDataOrNull("tooltipText"),
      foreColor: i.getDataOrNull("tooltipForeColor"),
      fontFamily: i.getDataOrNull("tooltipFontFamily"),
      fontSize: i.getDataOrNull("tooltipFontSize"),
      textDecoration: i.getDataOrNull("tooltipTextDecoration"),
      padding: i.getDataOrNull("tooltipPadding"),
      fill: i.getDataOrNull("tooltipFill"),
      borderColor: i.getDataOrNull("tooltipBorderColor"),
      borderWidth: i.getDataOrNull("tooltipBorderWidth"),
      borderDash: i.getDataOrNull("tooltipBorderDash"),
      width: 0
    }, s = Qn(o);
    o.width = Math.min(s.width, i.data.tooltipMaxWidth);
    const a = Ne(o);
    this.tooltip.g.append("rect").attr("x", e).attr("y", r).attr("rx", "4").attr("width", o.width + o.padding * 2).attr("height", a.lineHeight * a.length + o.padding * 2).attr("fill", o.fill).attr("stroke", o.borderColor).attr("stroke-width", o.borderWidth).attr("stroke-dasharray", o.borderDash);
    const c = this.tooltip.g.append("text").attr("fill", o.foreColor).attr("fontSize", o.fontSize).attr("text-decoration", o.textDecoration);
    ir(
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
class gn {
  constructor(t, e, r, i) {
    this.startX = t, this.startY = e, this.endX = r, this.endY = i;
  }
  isContained(t, e) {
    return t >= this.startX && t <= this.endX && e >= this.startY && e <= this.endY;
  }
}
const Oa = /* @__PURE__ */ new Set([
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
class Sa {
  constructor(t) {
    this.data = t;
  }
  get(t) {
    return Oa.has(t) ? this.data[t] : this.data[`${t}${this._getPostFix()}`] ?? this.data[t];
  }
  _getPostFix() {
    return this.data.isSelected ? ".selected" : this.data.isHovered ? ".hovered" : "";
  }
}
class $e {
  constructor(t, e, r) {
    this.data = t, this.className = e, this.containerInterface = r, this.textCache = new ar(), this.dataWrapper = new Sa(t), this.container = r.getSvg().select(".container"), this.group = this.container.append("g").attr("class", `${t.type} ${e}`), this.objects = {
      foreignObj: null,
      textarea: null,
      text: this.group.append("text").attr("class", "unselectable text--whitespace-pre").attr("text-anchor", "middle")
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
    this.group.classed("edit", !0), this.containerInterface.setEditMode(!0), this.objects.text.attr("visibility", "hidden"), this.objects.foreignObj = this.group.append("foreignObject"), this.objects.textarea = this.objects.foreignObj.append("xhtml:div").style("overflow", "hidden").append("textarea").style("outline", "0").style("resize", "none").style("text-align", "center").style("font-family", this.data.fontFamily).style("font-size", `${this.data.fontSize}px`).style("color", this.data.foreColor).on("keyup", (e) => {
      e.key === "Escape" ? (this.cancelLabelEdit(t), this.containerInterface.getSvg().node().parentElement.focus()) : (this.data.text = this.objects.textarea.node().value, this._repositionTextarea());
    }).on("focusout", () => {
      this.objects.textarea && (this.data.text = this.objects.textarea.node().value, this.containerInterface.editTextCallback(this.data, t, this.data.text), this.removeLabelEdit()), this.group.classed("edit", !1), this.render();
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
  _createText(t = 0, e = 0) {
    const r = {
      width: this.width - Se,
      text: this.dataWrapper.get("text"),
      fontFamily: this.dataWrapper.get("fontFamily"),
      fontSize: this.dataWrapper.get("fontSize"),
      foreColor: this.dataWrapper.get("foreColor"),
      textDecoration: this.dataWrapper.get("textDecoration")
    }, o = this.dataWrapper.get("visibleOverText") ? Ne(r) : Gs(r, this.height - Se), s = this._getLabelXY(o), a = {
      text: r.text,
      width: this.width,
      height: this.height,
      length: o.lines.length,
      x: s.x,
      y: s.y,
      fontFamily: r.fontFamily,
      fontSize: r.fontSize,
      foreColor: r.foreColor,
      textDecoration: r.textDecoration
    };
    if (this.textCache.compareTo(a)) {
      rr(
        this.objects.text,
        s.x + t,
        s.y + e,
        r
      );
      return;
    }
    oa(this.objects.text, this.textCache), ir(
      this.objects.text,
      o,
      s.x + t,
      s.y + e,
      r
    ), this.textCache.update(a);
  }
  /**
   * svg 컨테이너에서 삭제
   */
  destroy() {
    this.group.remove();
  }
}
const ft = 6, Ca = 2, pn = 5, yn = [
  ["TopLeft", "start"],
  ["TopCenter", "middle"],
  ["TopRight", "end"],
  ["BottomLeft", "start"],
  ["BottomCenter", "middle"],
  ["BottomRight", "end"]
];
class wt extends $e {
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
    return this.data["node.connectorEnabled"] && this.containerInterface.isAppending();
  }
  get resizerVisibility() {
    return this.data["node.resizerEnabled"] === !0 && this.data.isSelected;
  }
  _createComments() {
    yn.forEach((t) => {
      const [e, r] = t;
      this.comments.push(this.group.append("text").attr("class", `${e} unselectable`).attr("text-anchor", r));
    });
  }
  _createResizer() {
    const t = this.group;
    for (const e of this.getResizerPosition()) {
      const r = t.append("rect").attr("x", e[0] - ft / 2).attr("y", e[1] - ft / 2).attr("width", ft).attr("height", ft).attr("fill", "rgb(173, 216, 230)").attr("stroke", "rgb(30, 144, 255)").attr("cursor", e[2]).attr("class", "resizer").attr("visibility", "hidden");
      this.resizers.push(r);
    }
  }
  _createConnector() {
    const t = this.group;
    for (const e of this.getConnectorPosition()) {
      const r = t.append("circle").attr("cx", e.x).attr("cy", e.y).attr("r", this.dataWrapper.get("node.connectorSize")).attr("class", `connector ${e.dir}`);
      this.connectors.push(r);
    }
  }
  _renderComments() {
    const t = this.dataWrapper, e = t.get("node.commentFontFamily"), r = t.get("node.commentFontSize"), i = this.width / 2, o = this.height / 2, s = -(o + pn), a = o + pn + r, c = {
      TopLeft: {
        x: -i,
        y: s
      },
      TopCenter: {
        x: 0,
        y: s
      },
      TopRight: {
        x: i,
        y: s
      },
      BottomLeft: {
        x: -i,
        y: a
      },
      BottomCenter: {
        x: 0,
        y: a
      },
      BottomRight: {
        x: i,
        y: a
      }
    };
    yn.forEach((h, l) => {
      const f = c[h[0]];
      this.comments[l].attr("x", f.x).attr("y", f.y).attr("font-family", e).attr("font-size", r).text(() => this.dataWrapper.get(`node.comment${h[0]}`));
    });
  }
  _renderConnector() {
    let t = 0;
    for (const e of this.getConnectorPosition())
      this.isHovered && this.connectorVisibility && this.containerInterface.getReadOnly() === !1 ? (this.bringToFrontElement(this.connectors[t].node()), this.connectors[t++].attr("cx", e.x).attr("cy", e.y).attr("visibility", "visible").attr("r", this.dataWrapper.get("node.connectorSize")).classed("active", !0)) : this.connectors[t++].classed("active", !1).attr(
        "visibility",
        this.connectorVisibility && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden"
      );
  }
  _renderResizer() {
    if (this.resizers.length === 0)
      return;
    let t = 0;
    for (const e of this.getResizerPosition())
      this.isHovered && this.resizerVisibility && this.containerInterface.getReadOnly() === !1 ? (this.bringToFrontElement(this.resizers[t].node()), this.resizers[t++].attr("x", e[0] - ft / 2).attr("y", e[1] - ft / 2).attr("class", "resizer").attr("visibility", "visible").classed("active", !0)) : this.resizers[t++].classed("active", !1).attr(
        "visibility",
        this.resizerVisibility && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden"
      );
  }
  *getConnectorPosition() {
    const t = this.dataWrapper.get("node.connectorGap"), e = this.width / 2, r = this.height / 2;
    yield { x: -(t + e), y: 0, dir: "left" }, yield { x: e + t, y: 0, dir: "right" }, yield { x: 0, y: -(t + r), dir: "top" }, yield { x: 0, y: t + r, dir: "bottom" };
  }
  *getResizerPosition() {
    const t = this.width / 2, e = this.height / 2;
    yield [-t, -e, "nw-resize"], yield [0, -e, "n-resize"], yield [t, -e, "ne-resize"], yield [-t, 0, "w-resize"], yield [t, 0, "e-resize"], yield [-t, e, "sw-resize"], yield [0, e, "s-resize"], yield [t, e, "se-resize"];
  }
  _create() {
    this._createComments(), this._createResizer(), this._createConnector();
  }
  _getLabelXY(t) {
    const e = this.dataWrapper.get("fontSize");
    return {
      x: 0,
      y: e - (e + De) * t.length / 2 - Ca
    };
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
class Ea extends wt {
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
const gt = 15, ja = -4, ka = 2;
class Ia extends wt {
  constructor(t, e) {
    super(t, "comment", e);
  }
  _create() {
    this.objects.body = this.group.append("path").attr("class", "body").classed(this.data.type, !0), super._create();
  }
  _getPath() {
    const t = [], e = this.width / 2, r = this.height / 2, i = -e, o = -r;
    return t.push(`M${i} ${o}`), t.push(`L${e - gt} ${o}`), t.push(`L${e},${o + gt}`), t.push(`L${e},${r}`), t.push(`L${i},${r}`), t.push("Z"), t.push(`M${e - gt} ${o}`), t.push(`L${e - (gt + ja)} ${o + (gt + ka)}`), t.push(`L${e} ${o + gt}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this.objects.body.attr("d", this._getPath()).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
const mn = 0.28;
class Ma extends wt {
  constructor(t, e) {
    super(t, "db", e);
  }
  _create() {
    this.objects.circle = this.group.append("ellipse"), this.objects.body = this.group.append("path"), super._create();
  }
  get circleHeight() {
    return this.height * mn;
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
    this.objects.circle.attr("cx", 0).attr("cy", o).attr("rx", r).attr("ry", e).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this.objects.body.attr("d", this._getPath()).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash);
    const a = this.height * mn;
    this._createText(0, a / 2);
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
        const o = this._getPosLocation(i, e), s = ta(i.renderer.group.attr("transform"));
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
class Ta extends cr {
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
const Ft = 20, ct = 10, bn = ct / 2;
class Aa extends cr {
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
        return { x: e.x - Ft, y: e.y };
      case "right":
        return { x: e.x + Ft, y: e.y };
      case "top":
        return { x: e.x, y: e.y - Ft };
      case "bottom":
        return { x: e.x, y: e.y + Ft };
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
      const l = this.group.append("rect").attr("x", i.x - ct / 2).attr("y", i.y - ct / 2).attr("width", ct).attr("height", ct).attr("class", "adjuster").attr("cursor", "move").call(it().filter(() => this.containerInterface.getReadOnly() === !1).on("start", (f) => {
        a = f.x, c = f.y, h = Ee(this.data["connection.points"]), this.containerInterface.adjDragStartCallback();
      }).on("drag", (f) => {
        const u = e["connection.points"], y = u[o + 1];
        if (s) {
          const O = a - f.x;
          y.x -= O, a = f.x, l.attr("x", y.x - ct / 2), o > 0 && (u[o].x -= O / 2), o + 3 < u.length && (u[o + 2].x -= O / 2);
        } else {
          const O = c - f.y;
          y.y -= O, c = f.y, l.attr("y", y.y - ct / 2), o > 0 && (u[o].y -= O / 2), o + 3 < u.length && (u[o + 2].y -= O / 2);
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
      t.attr("x", r.x - bn).attr("y", r.y - bn), t.attr("visibility", this.group.classed("edit") === !1 ? this.subUiVisibility : "hidden"), this.bringToFrontElement(t.node());
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
class za extends $e {
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
class Da extends wt {
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
class Na extends wt {
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
class Pa extends wt {
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
class $a {
  constructor() {
    this.nodeRenderMap = /* @__PURE__ */ new Map(), this.connectionRenderMap = /* @__PURE__ */ new Map(), this.etcRenderMap = /* @__PURE__ */ new Map(), this.nodeRenderMap.set("start", Pa), this.nodeRenderMap.set("if", Da), this.nodeRenderMap.set("return", Na), this.nodeRenderMap.set("comment", Ia), this.nodeRenderMap.set("bridge", Ea), this.nodeRenderMap.set("db", Ma), this.connectionRenderMap.set("direct", Ta), this.connectionRenderMap.set("elbow", Aa), this.etcRenderMap.set("group", za);
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
class Ra {
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
const La = {
  ...tr,
  ...er,
  ...nr,
  ...se
};
function Fa(n) {
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
const Ht = 10, Ha = 255, Xt = ["left", "right", "top", "bottom"], wn = 8, Xa = 8, ge = "ir-style/flowchart", xn = 0.4, _n = 3, Ya = /* @__PURE__ */ new Set(["isHovered", "isSelected"]), Ba = (n) => {
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
}, Va = (n) => {
  const t = document.createElement("div"), e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = document.createElement("span");
  return e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.style.background = "#fff", t.classList.add("flowchart"), t.tabIndex = 0, r.className = "flowchart-hidden", r.textContent = "copy-range", e.innerHTML = `
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
}, Yt = 10;
class Ja extends fr {
  #p = !0;
  #y = !1;
  #r = !1;
  #n = !1;
  #o = !1;
  #f = !1;
  #m = !1;
  #b = !1;
  #v = !1;
  #l = !1;
  #g = !1;
  #O = !1;
  #S = !1;
  #C = !1;
  // DOM 감싸는 영역(wrapper) 레이아웃 사이즈
  #s = { width: 0, height: 0 };
  // 내부 svg 컨텐츠 사이즈
  #w = { width: 0, height: 0 };
  // appendMode context 저장
  #e = { mode: null, data: null, dragged: !1 };
  /** @type {RenderObject | null} */
  #t = null;
  #i = {
    /** @type {d3.Selection | null} */
    rect: null,
    startX: 0,
    startY: 0
  };
  #E = { curPosX: 0, curPosY: 0, isDragging: !1 };
  #A;
  /**
   * @param {Object} param
   * @param {HTMLDivElement} param.contextElement
   * @param {String} param.width
   * @param {String} param.height
   */
  constructor({ contextElement: t, width: e, height: r, fitSizeMode: i }) {
    super({ contextElement: t }), this.#C = i ?? !1, this.keyMap = {
      ArrowLeft: [() => this.handleKeydownArrows(-Yt, 0)],
      ArrowRight: [() => this.handleKeydownArrows(Yt, 0)],
      ArrowDown: [() => this.handleKeydownArrows(0, Yt)],
      ArrowUp: [() => this.handleKeydownArrows(0, -Yt)],
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
      "^x": [() => this.#d(), !0],
      "^X": [() => this.#d(), !0],
      "^c": [() => this.#d(), !0],
      "^C": [() => this.#d(), !0],
      "^v": [() => this.#d(), !0],
      "^V": [() => this.#d(), !0]
    }, this.emitter = Ba(this);
    const { div: o, svg: s, span: a } = Va(this.uuid);
    this.div = o, this.#A = a, o.addEventListener("keydown", (c) => {
      if (this.#r || this.#n) {
        this._logger.debug("InnoFlowchart.handleKeydown()", "Cancel because of editMode or readonly mode");
        return;
      }
      const h = `${c.ctrlKey ? "^" : ""}${c.key}`, l = this.keyMap[h];
      l && (l[1] !== !0 && c.preventDefault(), l[0](c));
    }), o.addEventListener("copy", this.#W.bind(this)), o.addEventListener("cut", this.#q.bind(this)), o.addEventListener("paste", this.#G.bind(this)), this.addCoreElement(o), t.appendChild(o), this.#K(o, s, e, r), this._containerInterface = {
      // Manipulation API
      releaseAllObjects: () => this.releaseAllObjects(),
      addRenderObj: (c) => this.add(c),
      removeObject: (c) => this.remove(c),
      initDrag: (c) => this.#c(c),
      terminateDrag: (c) => this.#h(c),
      isDragging: () => this.#O,
      changeObjRender: (c, h) => this.#Y(c, h),
      // Callback
      adjDragStartCallback: () => this.#At(),
      adjDragEndCallback: (c, h, l) => this.#zt(c, h, l),
      editTextCallback: (c, h, l) => this.#Tt(c, h, l),
      editTextModeCallback: (c) => this.#nt(c),
      renderCallback: (c) => this.#Dt(c),
      observerCallback: (c) => this.#Q(c),
      selectCallback: (c, h, l) => this.#tt(c, h, l),
      releaseCallback: (c, h) => this.#et(c, h),
      // getter / setter
      setEditMode: (c) => this.#r = c,
      getLogger: () => this._logger,
      getSvg: () => this.d3Svg,
      getObjectOrNull: (c) => this.getObjectOrNull(c),
      getSelectNodeOnHover: () => this.#m,
      getTooltipHidden: () => this.#b,
      getReadOnly: () => this.#n,
      isAppending: () => this.#e.mode === "append",
      getUUID: () => this.uuid
    }, this._objectManager = new ya(), this._renderManager = new $a(), this._seqMng = new Ra(this._containerInterface), this._objMouseHandler = new va(this._containerInterface), this._actionController = new Ws(this._containerInterface, Ha), this._moveHandler = new aa(this._actionController, this._objectManager, this._containerInterface), this._resizeHandler = new ca(this._actionController, this._objectManager, this._containerInterface), this.theme = { ...La }, this.defaultRule = ra, this.zoomTo(1), this.render();
  }
  get svgElement() {
    return this.d3Svg.node();
  }
  get actionController() {
    return this._actionController;
  }
  get readonly() {
    return this.#n;
  }
  get simpleConnectingMode() {
    return this.#o;
  }
  get editMode() {
    return this.#r;
  }
  get gridMode() {
    return this.#y;
  }
  get tooltipHidden() {
    return this.#b;
  }
  get fitSizeMode() {
    return this.#C;
  }
  get moveScreenOnSelect() {
    return this.#f;
  }
  get selectNodeOnHover() {
    return this.#m;
  }
  get wheelZoom() {
    return this.#p;
  }
  get traceMode() {
    return this.#v;
  }
  get singleSelection() {
    return this.#l;
  }
  set readonly(t) {
    this.#n !== t && (this.#n = t, this.classedOnSvg(t, "readonly"), this._logger.info(`readonly property is changed to '${t}'`));
  }
  set simpleConnectingMode(t) {
    this.#o !== t && (this.#o = t, this.classedOnSvg(t, "simple"), this._logger.info(`simpleConnectingMode property is changed to '${t}'`));
  }
  set editMode(t) {
    this.#r !== t && (this.#r = t, this.classedOnSvg(t, "edit-mode"), this._logger.info(`editMode property is changed to '${t}'`));
  }
  set gridMode(t) {
    this.#y !== t && (this.#y = t, this.d3Grid.attr("visibility", this.#y ? "visible" : "hidden"), this.classedOnSvg(t, "flowchart-grid"), this._logger.info(`gridMode property is changed to '${t}'`), this.render());
  }
  set tooltipHidden(t) {
    this.#b !== t && (this.#b = t, this.classedOnSvg(t, "tooltip-hidden"), this._logger.info(`tooltipHidden property is changed to '${t}'`));
  }
  set moveScreenOnSelect(t) {
    this.#f !== t && (this.#f = t, this.classedOnSvg(t, "move-screen-on-select"), this._logger.info(`moveScreenOnSelect property is changed to '${t}'`));
  }
  set selectNodeOnHover(t) {
    this.#m !== t && (this.#m = t, this.classedOnSvg(t, "select-node-on-hover"), this._logger.info(`selectNodeOnHover property is changed to '${t}'`));
  }
  set wheelZoom(t) {
    this.#p !== t && (this.#p = t, this.classedOnSvg(t, "wheel-zoom"), this._logger.info(`wheelZoom property is changed to '${t}'`));
  }
  set traceMode(t) {
    this.#v !== t && (this._logger.logLevel = t ? "INFO" : "ERROR", this.#v = t, this.classedOnSvg(t, "trace"), this._logger.info(`traceMode property is changed to '${t}'`));
  }
  set singleSelection(t) {
    this.#l !== t && (this.#l = t, this.classedOnSvg(t, "single-select"), this._logger.info(`singleSelection property is changed to '${t}'`));
  }
  set canvasMoveMode(t) {
    this.#S !== t && (this.#S = t, this.classedOnSvg(t, "canvas-move"), this._logger.info(`canvasMoveMode property is changed to '${t}'`));
  }
  #W(t) {
    this._logger.info("InnoFlowchart.#onNativeCopy()"), ce(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(ge, JSON.stringify(this.#x())), t.preventDefault();
  }
  #q(t) {
    this._logger.info("InnoFlowchart.#onNativeCut()"), this.getSelectedObjects().length !== 0 && (ce(t.clipboardData, new Error("no clipboardData")), t.preventDefault(), t.clipboardData.setData(ge, JSON.stringify(this.#x())), this.removeSelected());
  }
  #G(t) {
    if (this._logger.info("InnoFlowchart.#onNativePaste()"), ce(t.clipboardData, new Error("no clipboardData")), this.#r || this.#e.mode != null) {
      this._logger.debug(
        "InnoFlowchart.paste()",
        "Could not paste because of edit or append mode"
      );
      return;
    }
    const e = t.clipboardData.getData(ge);
    if (!e) return this._logger.warn("InnoFlowchart.#onNativePaste()", "no data");
    this.#F(JSON.parse(e)), t.preventDefault();
  }
  #K(t, e, r, i) {
    this._logger = sa(this.uuid), t.addEventListener("contextmenu", (c) => {
      c.preventDefault(), this.$emit(N.CONTEXT_MENU, c);
    });
    const o = isNaN(r) ? r : `${r}px`, s = isNaN(i) ? i : `${i}px`;
    this.d3Div = V(t).style("width", o).style("height", s), this.d3Svg = V(e).on("mousemove", (c) => this.#st(c)).on("click", (c) => this.#Nt(c)).call(it().filter((c) => c.button === 0 && this.#r === !1).on("start", (c) => this.#T(c)).on("drag", (c) => this.#T(c)).on("end", (c) => this.#T(c))), this.d3Grid = this.d3Svg.append("g").attr("transform", "translate(-1, -1)").attr("class", "flowchart-grid").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", `url(#${this.uuid}_grid)`).attr("visibility", "hidden"), this.d3Container = this.d3Svg.append("g").attr("class", "container");
    const a = Us().filter((c) => this.#p && c.type === "wheel" && c.ctrlKey).wheelDelta((c) => -c.deltaY * (c.deltaMode === 1 ? 0.05 : c.deltaMode ? 1 : 2e-3)).scaleExtent([xn, _n]).on("zoom", (c) => this.zoomTo(c.transform.k));
    this.d3Div.call(a).on("dblclick.zoom", null);
  }
  #d() {
    const t = window.getSelection();
    if (!t) return;
    const e = document.createRange();
    e.selectNodeContents(this.#A), t.removeAllRanges(), t.addRange(e);
  }
  /**
  *
  * @param {import("./flowchart.types").EventType} event
  * @param  {...any} args
  */
  $emit(t, ...e) {
    this.emitter.emit(t, e);
  }
  /**
  * 신규 이벤트를 등록합니다.
  * @param {import("./flowchart.types").EventType} event
  * @param {Function} callback
  */
  $on(t, e) {
    return this.emitter.on(t, e);
  }
  /**
  * 이벤트를 제거합니다.
  * @param {import("./flowchart.types").EventType} event
  * @param {Function?} callback
  */
  $off(t, e) {
    return this.emitter.off(t, e);
  }
  /**
  * @param {() => void} func
  */
  moveWrapper(t) {
    try {
      this._moveHandler.moveStartHandler(), t(), this.#I();
    } finally {
      this._moveHandler.moveEndHandler(), this.refreshSvgSize();
    }
  }
  /**
   *
   * @param {SVGElement} defsElement
   */
  addSvgDefs(t) {
    this.d3Svg.node().appendChild(t);
  }
  /**
   *
   * @param {string} id
   * @param {number} rotate
   * @param {string[]} offsets
   * @param {string[]} colors
   */
  addLinearGradientDefs(t, e, r, i) {
    if (typeof r.length != "number" || typeof i.length != "number")
      throw new Error("it must be an array type both offsets and colors!");
    const o = document.createElementNS("http://www.w3.org/2000/svg", "defs"), s = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    s.id = t, s.setAttribute("gradientTransform", `rotate(${e})`), gr(r, i).forEach(([a, c]) => {
      const h = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      h.setAttribute("offset", a), h.setAttribute("stop-color", c), s.appendChild(h);
    }), o.appendChild(s), this.addSvgDefs(o);
  }
  /**
  * @param {DefaultTheme} data
  * @param {Number} zIndex
  * @returns
  */
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
    this.defaultRule(t), hn(t, this.theme);
    let r = null;
    const i = this._renderManager.getRenderConstructor(
      t.type,
      t.render
    ), o = new i(t, this._containerInterface);
    switch (t.type) {
      case "connection":
        r = new la(t, o, this._containerInterface);
        break;
      case "node":
        r = new fa(t, o, this._containerInterface);
        break;
      case "group":
        r = new da(t, o, this._containerInterface);
        break;
      default:
        throw Error(`unkown data type '${t.type}'`);
    }
    return this._objectManager.add(r), r.create(), this.refreshSvgSize(), e !== void 0 && this.d3Container.node().insertBefore(r.g.node(), this.#mt(e)), t.temp ? this._logger.debug(
      "InnoFlowchart.add()",
      `created temp obj id is '${r.id}'`
    ) : (this.#R(r), this.emitChangedStatus(), this.$emit(N.NEW_OBJECT, r), this._logger.debug("InnoFlowchart.add()", `created obj id is '${r.id}'`)), r;
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
      ) : (this.$emit(N.REMOVE_OBJECT, e), this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed obj id is '${e.id}'`
      ));
    else
      throw new Error("There is no such as object you received in this flowchart!");
  }
  /**
  * zoom in/out by scale
  * @param {Number} scale
  */
  zoomTo(t) {
    if (t < xn || t > _n)
      return;
    this._logger.info("InnoFlowchart.zoomTo", `scale is changed to ${t}`), this.d3Div.node().__zoom.k = t, this.d3Container.attr("transform", `scale(${t})`);
    const e = `${1 / t * 100}%`;
    this.d3Grid.attr("transform", `scale(${t})`).attr("width", e).attr("height", e), this.refreshSvgSize();
  }
  /**
   * 신규로 추가한 개체 집합을 undo에 기록하고,
   * 음수 좌표가 있는 경우에는 해당 좌표를 조정합니다.
   * @param  {...RenderObject} objects
   */
  recordNewObjectsAction(...t) {
    this._actionController.addAction(new ht(at(t))), this.#I();
  }
  emitChangedStatus() {
    this.#g || (this.#g = !0, this.classedOnSvg(!0, "changed"));
  }
  getScale() {
    return this.getTransform().k;
  }
  /**
   * @param {Boolean} [sorted=true]
   * @returns {Connection[]}
   */
  getSelectedConnections(t = !0) {
    const e = [];
    for (const r of this._objectManager.getConnectionIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
   * @param {ChangedInfo[]} changedInfoList
   */
  #z(t) {
    t.forEach((e) => {
      for (const r of e.propList)
        r.oldValue === void 0 && (r.oldValue = e.objData[r.key]), e.objData[r.key] = r.newValue;
    }), this._actionController.addAction(new st(t));
  }
  /**
   * builder에서 사용함, 다만 내부 함수로 사용하므로 외부에서 사용하지 않도록 주의
   * @param {ChangedInfo[]} changedInfoList
   * @deprecated
   */
  _editObjProp(t) {
    return this.#z(t);
  }
  /**
   * @param {String} key
   * @param {any} newValue
   */
  editSelectedObjProp(t, e) {
    const r = [];
    for (const i of this._objectManager.getSelectedObjIterator())
      i.isSelected && r.push(new et(i.data, [
        {
          key: t,
          newValue: e
        }
      ]));
    this.#z(r);
  }
  /**
   * append 모드로 전환
   * @param {String} mode
   * @param {{}} data
   * @returns
   */
  append(t, e) {
    if (this.#n) {
      this._logger.info(
        "InnoFlowchart.append()",
        "Preventing append (readonly: true)"
      );
      return;
    }
    if (this.#P({ mode: t, data: e }))
      this.clearAppendMode(), this.#e.mode = t, this.#e.data = e, this.classedOnSvg(!0, `is-appending-${e.type}`), this._logger.info(
        "InnoFlowchart.append()",
        "Append Mode",
        this.#e.mode
      );
    else
      throw this._logger.error("InnoFlowchart.append()", "Invalid append info!"), new Error("Invalid append info!");
  }
  /**
   * 카메라 0,0 이동
   */
  resetScreen() {
    const t = this.d3Div.node();
    t.scrollLeft = 0, t.scrollTop = 0;
  }
  getWrapperSize() {
    const t = this.d3Div.node();
    if (!t) throw new Error("there is no wrapper div");
    const { width: e, height: r } = t.getBoundingClientRect();
    return { width: e, height: r };
  }
  getTransform() {
    return Jn(this.d3Div.node());
  }
  updateMinimumSvgSize() {
    const t = this.getWrapperSize();
    this.#s.width = parseInt(t.width), this.#s.height = parseInt(t.height), this.refreshSvgSize();
  }
  #D() {
    const t = this.getTransform().k, e = {
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
    let t = this.#w.width, e = this.#w.height;
    this.#C || (t += this.#s.width / 2, e += this.#s.height / 2), this.d3Svg.attr("width", Math.max(this.#s.width, t)).attr("height", Math.max(this.#s.height, e));
  }
  refreshSvgSize() {
    const t = this.#D();
    this.#w.width = t.right, this.#w.height = t.bottom, this._logger.info("InnoFlowchart.refreshSvgSize()", t), this.updateSvgSize();
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
    if (this.#n) {
      this._logger.info("InnoFlowchart.undoAction()", "Preventing undo (readonly: true)");
      return;
    }
    const t = this._actionController.undo();
    this._logger.debug("InnoFlowchart.undoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(N.UNDO, t));
  }
  /**
  * Redo recently undone action through actionController
  */
  redoAction() {
    if (this.#n) {
      this._logger.info("InnoFlowchart.redoAction()", "Preventing redo (readonly: true)");
      return;
    }
    const t = this._actionController.redo();
    this._logger.debug("InnoFlowchart.redoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(N.REDO, t));
  }
  /**
  * @param {RenderObject} obj
  * @param {String} event
  */
  #j(t, e) {
    this._logger.info(`InnoFlowchart.event.emit.${e}`, t), t.select(!0), this.$emit(e, t);
  }
  /**
  * @param {ObserverArg} arg
  */
  #Z(t) {
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
  /**
  * @param {ObserverArg} arg
  */
  #J(t) {
    const e = t.renderObj;
    switch (t.key) {
      case "connection.sourceObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(N.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.sourcePos":
        e.sourceObjId !== null && this.$emit(N.CONNECT_NODE, e, t.key);
        break;
      case "connection.destinationObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(N.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.destinationPos":
        e.destinationObjId !== null && this.$emit(N.CONNECT_NODE, e, t.key);
        break;
    }
  }
  /**
  * @param {ObserverArg} arg
  */
  #Q(t) {
    t.newValue !== t.oldValue && (!this.#g && !Ya.has(t.key) && this.emitChangedStatus(), this.#Z(t), t.renderObj.type === "connection" && this.#J(t));
  }
  /**
  *
  * @param {RenderObject} obj
  * @param {Boolean} userInteraction
  */
  #tt(t, e, r) {
    const i = this._objectManager.getParentGroupOrNull(t);
    if (e && (this.#f && t.type === "node" && this.moveScreenByObject(t), this.#l))
      for (const o of this._objectManager.getSelectedObjIterator())
        o !== t && o.release();
    i !== null && i.select(!1, r), this._logger.info("InnoFlowchart._selectCallbackHandler()", t), this.$emit(N.SELECT_OBJECT, t);
  }
  /**
  *
  * @param {RenderObject} obj
  * @param {Boolean} userInteraction
  */
  // eslint-disable-next-line no-unused-vars
  #et(t, e) {
    this.$emit(N.RELEASE_OBJECT, t);
  }
  #nt() {
    this._objMouseHandler.removeTooltipObj();
  }
  /**
  * @param {Number} x
  * @param {Number} y
  */
  #N(t, e) {
    const r = 1 / this.getTransform().k;
    return {
      x: t * r,
      y: e * r
    };
  }
  /**
  *
  * @param {Object} param
  * @param {String} param.mode
  * @param {{}} param.data
  * @returns
  */
  #P({ mode: t, data: e }) {
    switch (t) {
      case "append":
        return e.type === "node" || e.type === "connection";
      case "paste":
        return e.objects.length > 0;
      default:
        return !1;
    }
  }
  #rt(t) {
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
  #it(t) {
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
  #ot() {
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
  #st(t) {
    const e = t.offsetX, r = t.offsetY;
    if (this.#P(this.#e)) {
      switch (this.#e.mode) {
        case "append":
          this.#t === null ? this.#ot() : this.#t.type === "node" && this.#X(e, r);
          break;
      }
      this.d3Div.node().focus();
    }
  }
  #$(t) {
    const e = [], r = t === "front" ? this._objectManager.getObjCount() : 0;
    this._logger.info("InnoFlowchart.setZIndex()", `new z-index = ${r}`);
    for (const i of this.getSelectedObjects())
      e.push({
        objId: i.id,
        oldValue: i.zIndex + (t === "back" ? 1 : 0),
        newValue: r
      }), i.zIndex = r;
    this.emitChangedStatus(), this._actionController.addAction(new sr(e));
  }
  /**
  * bring selected objects to front
  */
  bringToFront() {
    this._logger.info("InnoFlowchart.bringToFront()"), this.#$("front");
  }
  /**
  * bring selected objects to back
  */
  bringToBack() {
    this._logger.info("InnoFlowchart.bringToBack()"), this.#$("back");
  }
  /**
   * move selected objects by x, y
   * @param {Number} x
   * @param {Number} y
   */
  #k(t, e) {
    for (const r of this._objectManager.getSelectedObjIterator())
      r.moveTo(t, e);
  }
  /**
   * @param {String | Number} id the object's id
   * @returns {RenderObject | null}
   */
  getObjectOrNull(t) {
    return this._objectManager.findOrNull(t);
  }
  /**
   * select an object by id
   * @param {String | Number} id the object's id
   */
  selectObjectById(t) {
    const e = this.getObjectOrNull(t);
    if (e === null)
      throw new Error(`Not found obj id '${t}'`);
    e.select();
  }
  /**
   * @param {RenderObject} obj
   */
  #at(t) {
    this._objMouseHandler.addMouseAction(t);
  }
  /**
   *
   * @param {Boolean} Key
   * @returns
   */
  #a(t) {
    return this.#l || !t;
  }
  /**
   * @param {Node} node
   */
  #ct(t) {
    t.g.on("dblclick", () => {
      t.data.editable && this.#n === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickNode", t), this.$emit(N.DOUBLE_CLICK_NODE, t);
    });
  }
  /**
   *
   * @param {Boolean} flag
   * @param  {...String} classes
   */
  classedOnSvg(t, ...e) {
    e.forEach((r) => this.d3Svg.classed(r, t)), this.$emit(N.CHANGE_CLASS, this.d3Svg.attr("class"));
  }
  /**
   * @param {Node} node
   */
  #ht(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(it().filter((a) => a.button === 0 && this.#r === !1).on("start", (a) => {
      this.#a(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = t.width - (t.endX - a.x), s = t.height - (t.endY - a.y), t.select(!1);
    }).on("drag", (a) => {
      if (this.#n) return;
      const c = a.x - o, h = a.y - s, l = c - t.x, f = h - t.y;
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > 8 && (e = !0, this._moveHandler.moveStartHandler(), this.#c("drag-node-move")), e && this.#k(l, f);
    }).on("end", (a) => {
      const c = a.sourceEvent;
      if (e)
        this.#f && t.type === "node" && this.moveScreenByObject(t), this._moveHandler.moveEndHandler(), this.#h("drag-node-move");
      else {
        if (this.#r) return;
        this.#a(c.ctrlKey) && this.releaseAllObjects(t), this.#j(t, N.CLICK_NODE);
      }
    }));
  }
  /**
  * @param {Node} node
  */
  #lt(t) {
    for (const e of t.renderer.connectors) {
      const r = Qs(e.attr("class"));
      e.call(it().filter((i) => i.button === 0 && this.#n === !1).on("start", (i) => {
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y, a = this.#e.data.render, c = t.getPositionXY(r);
        this.#c("drag-node-connector"), this.#V(c.x, c.y, o, s, {
          type: "connection",
          render: a,
          "connection.sourceObjId": t.id,
          "connection.sourcePos": r
        });
      }).on("drag", (i) => {
        if (this.#t === null)
          return;
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y;
        this.#e.dragged = !0, this.#B(o, s);
      }).on("end", () => {
        this.#t !== null && (this.#U(), this.#h("drag-node-connector"));
      }));
    }
  }
  /**
  * @param {Node} node
  */
  #dt(t) {
    this.#ct(t), this.#ht(t), this.#lt(t), this._resizeHandler.addDragActionOnResizer(t);
  }
  /**
   * 우측 클릭에 대하여 처리
   * @param {RenderObject} object
   */
  #Pt(t) {
    this.logger.info("rightClick");
  }
  /**
   * @param {Connection} con
   * @param {boolean} releaseBefore
   */
  #$t(t, e) {
    this.#a(e) && this.releaseAllObjects(t), this.#j(t, "clickConnection");
  }
  /**
   * @param {Connection} con
   */
  #ut(t) {
    t.g.on("click", (e) => {
      this.#a(e.ctrlKey) && this.releaseAllObjects(t), this.#j(t, "clickConnection");
    }), t.g.on("dblclick", () => {
      t.data.editable && this.#n === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickConnection", t), this.$emit(N.DOUBLE_CLICK_CONNECTION, t);
    });
  }
  /**
  * @param {Connection} con
  */
  #ft(t) {
    let e = 0, r = 0, i = !1;
    t.g.call(it().filter((o) => o.button === 0 && this.#r === !1).on("start", (o) => {
      this.#a(o.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = o.x, r = o.y, i = !1, t.select();
    }).on("drag", (o) => {
      if (this.#n) return;
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
  #gt(t) {
    const e = (r, i, o) => it().filter((s) => s.button === 0 && this.#r === !1 && this.#n === !1).on("start", () => {
      this._moveHandler.moveStartHandler(), this.#c("drag-con-connector");
    }).on("drag", (s) => {
      const a = this.#M(s.x, s.y, this.#o), c = o === "start" ? t.firstPoint : t.endPoint;
      a.node === null ? (t[r] = null, t[i] = null, c.x = s.x, c.y = s.y) : (t[r] = a.node.id, this.#o ? this.#_(t) : t[i] = a.pos), t.renderType === "elbow" && t.renderer.refreshAdjustList(), t.render();
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this.#h("drag-con-connector");
    });
    t.renderer.objects.sourceConnector.call(e("sourceObjId", "sourcePos", "start")), t.renderer.objects.destinationConnector.call(e("destinationObjId", "destinationPos", "end"));
  }
  /**
  * @param {Connection} con
  */
  #pt(t) {
    this.#ut(t), this.#ft(t), this.#gt(t);
  }
  /**
  *
  * @param {Group} group
  */
  #yt(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(it().filter((a) => a.button === 0 && this.#r === !1 && this.#n === !1).on("start", (a) => {
      this.#a(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = a.x, s = a.y, t.select();
    }).on("drag", (a) => {
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > Xa && (e = !0, this._moveHandler.moveStartHandler(), this.#c("drag-group-move")), e && (this.#k(a.x - o, a.y - s), o = a.x, s = a.y);
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this.#h("drag-group-move");
    }));
  }
  /**
  * @param {RenderObject} obj
  */
  #R(t) {
    switch (this.#at(t), t.type) {
      case "node":
        this.#dt(t), t.render();
        break;
      case "connection":
        this.#pt(t);
        break;
      case "group":
        this.#yt(t);
        break;
      default:
        throw new Error(`Unknown data type '${t.type}'`);
    }
  }
  /**
  * @param {String} dragEvent
  */
  #c(t) {
    this.#O = !0, this.#e.dragged = !1, this._objMouseHandler.removeTooltipObj(), this.classedOnSvg(!0, t);
  }
  /**
  * @param {String} dragEvent
  */
  #h(t) {
    this.#O = !1, this.#e.dragged = !1, this.classedOnSvg(!1, t), this.clearAppendMode(), this.#I(), this.refreshSvgSize(), this.#o && this.updateShortestNodes();
  }
  #I() {
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
      e && (e.unshift(new st(r)), this._actionController.addAction(...e)), this.refreshSvgSize();
    }
  }
  getCountOfSelectedObject() {
    let t = 0;
    for (const e of this._objectManager.getSelectedObjIterator())
      this._objectManager.getParentGroupOrNull(e) == null && e.isSelected && ++t;
    return t;
  }
  selectAllObjects() {
    if (!this.#l)
      for (const t of this._objectManager.getAllObjIterator())
        t.type !== "group" && t.select(!0);
  }
  /**
  * @param {RenderObject | null} clickObj
  */
  releaseAllObjects(t) {
    for (const e of this._objectManager.getAllObjIterator())
      t !== e && e.release(!0);
  }
  /**
  *
  * @param {'top' | 'left' | 'bottom' | 'right' | 'center' | 'middle'} direction
  * @param {Node[] | null} nodeList
  */
  align(t, e) {
    const r = e || this.getSelectedNodes();
    if (!(r.length <= 1)) {
      switch (this._moveHandler.moveStartHandler(), t) {
        case "left": {
          const i = r[0].x;
          r.forEach((o) => o.x = i);
          break;
        }
        case "right": {
          const i = r[0].endX;
          r.forEach((o) => o.x = i - o.width);
          break;
        }
        case "center": {
          const i = r[0].centerX;
          r.forEach((o) => o.x = i - o.width / 2);
          break;
        }
        case "top": {
          const i = r[0].y;
          r.forEach((o) => o.y = i);
          break;
        }
        case "bottom": {
          const i = r[0].endY;
          r.forEach((o) => o.y = i - o.height);
          break;
        }
        case "middle": {
          const i = r[0].centerY;
          r.forEach((o) => o.y = i - o.height / 2);
          break;
        }
        default:
          throw new Error(`Unknown direct '${t}'`);
      }
      this._moveHandler.moveEndHandler();
    }
  }
  /**
  * @param {'v' | 'h'} direction
  * @param {Node[] | null} nodeList
  */
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
  /**
  * @param {Boolean} [sorted=true]
  * @returns {RenderObject[]}
  */
  getSelectedObjects(t = !0) {
    const e = Array.from(this._objectManager.getSelectedObjIterator());
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  removeSelected() {
    const t = this.getSelectedObjects(!1);
    t.forEach((e) => this.remove(e)), this._actionController.addAction(
      new Oe(at(t))
    );
  }
  /**
  * get child element on container in order
  * @param {Number} index
  */
  #mt(t) {
    const e = this.d3Container.node();
    return t >= e.children.length ? null : e.children[t];
  }
  /**
  *
  * @param {Number} curPosX
  * @param {Number} curPosY
  * @param {Boolean} simpleMode
  * @returns
  */
  #M(t, e, r = !1) {
    for (const i of this._objectManager.getNodeIterator())
      if (i.isConnectorEnabled)
        if (r) {
          if (new gn(i.x, i.y, i.endX, i.endY).isContained(t, e))
            return {
              node: i,
              pos: "left"
            };
        } else
          for (const o of Xt) {
            const s = i.getPositionXY(o);
            if (new gn(
              s.x - Ht,
              s.y - Ht,
              s.x + Ht,
              s.y + Ht
            ).isContained(t, e))
              return {
                node: i,
                pos: o
              };
          }
    return {
      node: null,
      pos: null
    };
  }
  moveSelectedNode(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && (r.x = parseInt((r.x + t) / 5) * 5, r.y = parseInt((r.y + e) / 5) * 5);
  }
  /**
  * get selected nodes
  * @param {Boolean} [sorted=true]
  * @returns {Node[]}
  */
  getSelectedNodes(t = !0) {
    const e = [];
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
  * get connected connections on the node
  * @param {Node} node
  * @returns {Connection[]}
  */
  getNodeConnections(t) {
    const e = t.observeProperties ? t.id : t, r = this.getObjectOrNull(e), i = Array.from(this._objectManager.getConnectedConnections(e));
    return i.sort((o, s) => an(r, o) - an(r, s)), i;
  }
  /**
  * move screen by obj's location
  * @param {RenderObject} obj
  */
  moveScreenByObject(t) {
    const e = this.getTransform().k;
    this.d3Div.node().scrollLeft = t.centerX * e - this.#s.width / 2, this.d3Div.node().scrollTop = t.centerY * e - this.#s.height / 2;
  }
  /**
   * @param {import("../../utils").ImageType} imgType
   */
  async copyToClipboard(t = "image/png") {
    this.releaseAllObjects();
    const e = await Re(Le(this.svgElement)), r = await Fe(e, t, this.#L(), wn), i = await dr(r);
    await Fa(i);
  }
  #L() {
    const { top: t, left: e, bottom: r, right: i } = this.#D();
    return {
      x: e - 1,
      y: t - 1,
      width: i - e + 2,
      height: r - t + 2
    };
  }
  /**
   * @param {string} fileName
   * @param {import("../../utils").ImageType} imgType
   */
  async saveAsImageFile(t, e = "image/png") {
    this.releaseAllObjects();
    const r = await this.getBlob(e), i = URL.createObjectURL(r);
    try {
      ur(i, t);
    } finally {
      URL.revokeObjectURL(i);
    }
  }
  /**
   * @param {import("../../utils").ImageType} imgType
   */
  async getBlob(t = "image/png") {
    const e = await Re(Le(this.svgElement));
    return await Fe(e, t, this.#L(), wn);
  }
  /**
  * clear info for appending or pasting objects
  */
  clearAppendMode() {
    this.#e.data && this.classedOnSvg(!1, `is-appending-${this.#e.data.type}`), this.#t !== null && this.remove(this.#t), this.#e.mode = null, this.#e.data = null, this.#e.dragged = !1, this.#t = null;
  }
  #x() {
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
    this._logger.info("InnoFlowchart.cut()"), this.getSelectedObjects().length !== 0 && (fe.saveData(JSON.stringify(this.#x())), this.removeSelected());
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  copy() {
    this._logger.info("InnoFlowchart.copy()"), fe.saveData(JSON.stringify(this.#x()));
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
          const c = this.#it(s);
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
          const c = this.#rt(s);
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
    }), this._actionController.addAction(new ht(at(o)));
  }
  /**
   * in-memory clipboard에 저장된 것을 붙여넣기 처리
   * @deprecated
   */
  paste() {
    if (this.#r || this.#e.mode != null) {
      this._logger.debug(
        "InnoFlowchart.paste()",
        "Could not paste because of edit or append mode"
      );
      return;
    }
    this._logger.info("InnoFlowchart.paste()"), this.#F(JSON.parse(fe.loadData()));
  }
  /**
   * 텍스트에 맞추어 노드 크기 조정
   */
  fitSizeOnText() {
    this._logger.info("InnoFlowchart.fitSizeOnText()"), this._resizeHandler.resizeDragStart(), this.getSelectedNodes(!1).forEach(
      (t) => void (t.resizerEnabled && t.fitSizeOnText())
    ), this._resizeHandler.resizeDragEnd();
  }
  /**
  *
  * @param {Node} source
  * @param {Node} target
  */
  #bt(t, e) {
    const r = {
      dist: Number.MAX_VALUE,
      sourcePos: "",
      destinationPos: ""
    };
    for (const i of Xt)
      for (const o of Xt) {
        const s = t.getPositionXY(i), a = e.getPositionXY(o), c = cn(s, a);
        c < r.dist && (r.dist = c, r.sourcePos = i, r.destinationPos = o);
      }
    return r;
  }
  /**
  * @param {Connection} con
  */
  #_(t) {
    const e = this.getObjectOrNull(t.sourceObjId), r = this.getObjectOrNull(t.destinationObjId), i = t.sourcePos, o = t.destinationPos;
    if (e !== null && r !== null) {
      const s = this.#bt(e, r);
      t.sourcePos = s.sourcePos, t.destinationPos = s.destinationPos;
    } else e === null ? t.destinationPos = this.#H(t.firstPoint, r) : t.sourcePos = this.#H(t.endPoint, e);
    if (i !== t.sourcePos || o !== t.destinationPos) {
      const s = new et(t.data, [
        {
          key: "connection.sourcePos",
          oldValue: i,
          newValue: t.sourcePos
        },
        {
          key: "connection.destinationPos",
          oldValue: o,
          newValue: t.destinationPos
        }
      ]);
      this._actionController.addAction(new st([s]));
    }
  }
  /**
  * 현재 선택된 연결선들을 최단 경로로 맞춥니다.
  */
  updateShortestConnections() {
    this._logger.info("InnoFlowchart.updateShortestConnections()");
    for (const t of this._objectManager.getConnectionIterator())
      t.isSelected && this.#_(t);
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
    t.forEach((e) => this.#_(e));
  }
  /**
  * @param {{x: Number, y: Number}} startPoint
  * @param {Node} targetNode
  * @returns
  */
  #H(t, e) {
    const r = {
      dist: Number.MAX_VALUE,
      pos: null
    };
    for (const i of Xt) {
      const o = e.getPositionXY(i), s = cn(o, t);
      s < r.dist && (r.dist = s, r.pos = i);
    }
    return r.pos;
  }
  /**
  * 특정 render의 개체를 모두 선택합니다.
  * @param {String} render
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
  * Creating a group object with selected objects
  * @param {{}} data
  */
  group(t = void 0) {
    const e = t || {};
    e.type = "group", e.render = "group", e.objectList = [], hn(e, this.theme);
    for (const i of this._objectManager.getSelectedObjIterator())
      e.objectList.push(i.id);
    const r = this.add(e);
    r.resize(), r.select(), this._actionController.addAction(new ht(at([r])));
  }
  /**
   * 현재 선택된 그룹화된 오브젝트의 자식의 그룹 상태를 해제
   */
  ungroup() {
    const t = [];
    for (const e of this._objectManager.getGroupIterator())
      e.isSelected && (e.clear(), t.push(e), this.remove(e));
    this._actionController.addAction(new Oe(at(t)));
  }
  /**
  *
  * @param {Number} x
  * @param {Number} y
  */
  #X(t, e) {
    const r = this.#N(t, e);
    this.#t.data.opacity === 0 && (this.#t.data.opacity = 0.5), this.#t.x = r.x - this.#t.width / 2, this.#t.y = r.y - this.#t.height / 2;
  }
  #u(t, e, r = !1) {
    const i = {
      x: t + this.d3Div.node().scrollLeft,
      y: e + this.d3Div.node().scrollTop
    };
    if (r) {
      const s = 1 / this.getTransform().k;
      i.x *= s, i.y *= s;
    }
    return i;
  }
  #wt(t) {
    const e = this.#u(t.x, t.y);
    this.#i.rect = this.d3Svg.append("rect").attr("class", "selection"), this.#i.startX = e.x, this.#i.startY = e.y;
  }
  #xt(t) {
    const e = this.#u(t.x, t.y), r = Math.min(e.x, this.#i.startX), i = Math.min(e.y, this.#i.startY), o = Math.max(e.x, this.#i.startX), s = Math.max(e.y, this.#i.startY);
    this.#i.rect.attr("x", r).attr("y", i).attr("width", o - r).attr("height", s - i);
  }
  #_t(t) {
    try {
      const e = this.getTransform(), r = this.#u(t.x, t.y), i = Math.min(r.x, this.#i.startX), o = Math.min(r.y, this.#i.startY), s = Math.max(r.x, this.#i.startX), a = Math.max(r.y, this.#i.startY), c = (h, l, f, u) => h >= i && l >= i && h <= s && l <= s && f >= o && u >= o && f <= a && u <= a;
      this.#a(t.sourceEvent.ctrlKey) && this.releaseAllObjects();
      for (const h of this._objectManager.getNodeIterator()) {
        const l = h.x * e.k, f = (h.x + h.width) * e.k, u = h.y * e.k, y = (h.y + h.height) * e.k;
        c(l, f, u, y) && h.select(!0);
      }
      for (const h of this._objectManager.getConnectionIterator()) {
        const l = h.firstPoint, f = h.endPoint, u = Math.min(l.x, f.x) * e.k, y = Math.max(l.x, f.x) * e.k, O = Math.min(l.y, f.y) * e.k, E = Math.max(l.y, f.y) * e.k;
        c(u, y, O, E) && h.select(!0);
      }
    } finally {
      this.#i.rect.remove(), this.#i.rect = null, this.$emit(N.MOUSEUP_SHEET, this.#u(t.x, t.y));
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
    o === this.d3Svg.node() && this.div.scrollBy(e - s, r - a);
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
        this._actionController.addAction(new ht(at([t])));
        break;
      }
    }
    this.clearAppendMode();
  }
  #Et(t) {
    return {
      start: () => {
      },
      drag: () => this.#X(t.x + this.div.scrollLeft, t.y + this.div.scrollTop),
      end: () => this.#Ct()
    };
  }
  #jt(t) {
    return {
      start: () => {
        const e = this.#u(t.x, t.y, !0);
        this.#V(e.x, e.y, e.x, e.y, this.#e.data), this.#e.dragged = !1;
      },
      drag: () => {
        const e = this.#u(t.x, t.y, !0);
        this.#B(e.x, e.y, this.#t.renderType), this.#e.dragged = !0;
      },
      end: () => {
        this.#U(), this.clearAppendMode();
      }
    };
  }
  #kt(t) {
    return {
      start: () => this.#wt(t),
      drag: () => this.#xt(t),
      end: () => this.#_t(t)
    };
  }
  #It(t) {
    return {
      start: () => this.#vt(t),
      drag: () => this.#Ot(t),
      end: () => this.#St(t)
    };
  }
  #Mt(t) {
    return this.#e.data.type === "node" ? this.#Et(t) : this.#jt(t);
  }
  #T(t) {
    (() => {
      if (this.#e.mode === "append")
        return this.#Mt(t);
      if (this.#S)
        return this.#It(t);
      if (this.#e.mode === null)
        return this.#kt(t);
      throw new Error("unknown drag handler");
    })()[t.type]();
  }
  cancelCreatingConnection() {
    if (this.#t === null)
      throw new Error("There is no creatingConnection obj");
    this.clearAppendMode();
  }
  #Y(t, e) {
    this._renderManager.changeRender(t, e, this._containerInterface), this.#R(t);
  }
  /**
  * 개체의 렌더링 타입을 변경합니다.
  * @param {RenderObject} obj
  * @param {String} render
  */
  changeRender(t, e) {
    const r = t.renderType;
    this.#Y(t, e), this._actionController.addAction(new or(t, r, e));
  }
  /**
  * @param {{}} objData
  * @param {String} oldText
  * @param {String} newText
  */
  #Tt(t, e, r) {
    this._logger.debug(
      "InnoFlowchart._editTextCallbackHandler()",
      `oldText = '${e}'`,
      `newText = '${r}'`
    ), this._actionController.addAction(new st([
      new et(t, [
        {
          key: "text",
          oldValue: e,
          newValue: r
        }
      ])
    ]));
  }
  /**
  * @param {Number} x
  * @param {Number} y
  */
  #B(t, e) {
    const r = this.#M(
      t,
      e,
      this.#o
    );
    r.node === null || r.node.id === this.#t.sourceObjId ? (this.#t.setLastPointXY(t, e), this.#t.destinationObjId = null, this.#t.destinationPos = null) : (this.#t.destinationObjId = r.node.id, this.#o ? this.#_(this.#t) : this.#t.destinationPos = r.pos);
  }
  #At() {
    this._logger.debug("InnoFlowchart.adjDragStartCallbackHandler()"), this.#c("drag-adj-move");
  }
  /**
  * @param {{}} objData
  * @param {[]} oldPoints
  * @param {[]} newPoints
  */
  #zt(t, e, r) {
    this._logger.debug(
      "InnoFlowchart.adjDragEndCallbackHandler()",
      "record undo action"
    ), this._actionController.addAction(
      new st([new et(t, [{ key: "connection.points", oldValue: e, newValue: r }])])
    ), this.#h("drag-adj-move");
  }
  /**
  * @param {RenderObject} obj
  */
  #Dt(t) {
    if (t.type === "node") {
      const r = /* @__PURE__ */ new Set();
      for (const i of this._objectManager.getConnectionIterator())
        !r.has(i.id) && (i.sourceObjId === t.id || i.destinationObjId === t.id) && (r.add(i.id), i.render());
    }
    const e = this._objectManager.getParentGroupOrNull(t);
    e !== null && e.resize();
  }
  /**
   *
   * @param {PointerEvent} ev
   */
  #Nt(t) {
    this.$emit(N.CLICK, this.#N(t.offsetX, t.offsetY));
  }
  /**
  * @param {Number} x
  * @param {Number} y
  * @param {Number} toX
  * @param {Number} toY
  * @param {{}} data
  */
  #V(t, e, r, i, o) {
    if (this.#t !== null)
      throw new Error("Already created an appending obj!!");
    if (!o["connection.sourceObjId"]) {
      const a = this.#M(t, e);
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
  #U() {
    let t = this.#t.data;
    this.#e.dragged === !1 && (t = ia(this.#t));
    const e = this.add({
      ...t,
      id: void 0,
      temp: !1,
      opacity: 1
    });
    this._actionController.addAction(new ht(at([e])));
  }
  handleKeydownF2() {
    if (!this.#r && this.getCountOfSelectedObject() === 1)
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
    }) : (this.div.scrollLeft += t * 2, this.div.scrollTop += e * 2);
  }
  handleKeydownEscape() {
    const t = this.#e, e = this.#t;
    t.mode === null && e !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Cancel Creating Connection"), this.cancelCreatingConnection()) : t.mode !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Clear Appending Data"), this.clearAppendMode()) : (this._logger.info("InnoFlowchart.handleKeydownEscape()", "releaseAllObj"), this.releaseAllObjects());
  }
}
const Qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddCommand: ht,
  ChangedInfo: et,
  DeleteCommand: Oe,
  EditCommand: st,
  RenderCommand: or,
  ZIndexCommand: sr
}, Symbol.toStringTag, { value: "Module" }));
export {
  N as EVENT_TYPE,
  Ja as IRFlowchart,
  Qa as IRFlowchartCommands
};
//# sourceMappingURL=flowchart.js.map
