import { a as ge } from "./asserts-CpwDJsre.js";
import { c as ur } from "./hook-flow-h5XBPdBp.js";
import { c as Cn } from "./clone-CMP76bLO.js";
import { L as En } from "./logger-C0JUwQkg.js";
import { i as In, r as fr, w as gr, c as pr } from "./in-memory-clipboard-DGTN1iKi.js";
import { e as ot, b as _r } from "./outside-D1z8pt7M.js";
import { a as Fe, g as Be, b as Ve, e as yr, d as mr } from "./image-Y3tFDdOU.js";
import { I as br } from "./index-CtZXoe_l.js";
function wr(n, t) {
  return {
    forEach(e) {
      const r = Math.min(n.length, t.length);
      for (let i = 0; i < r; i++)
        e(n[i], t[i]);
    }
  };
}
var xr = { value: () => {
} };
function ae() {
  for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
    if (!(r = arguments[n] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Gt(e);
}
function Gt(n) {
  this._ = n;
}
function vr(n, t) {
  return n.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !t.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Gt.prototype = ae.prototype = {
  constructor: Gt,
  on: function(n, t) {
    var e = this._, r = vr(n + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (n = r[o]).type) && (i = Or(e[i], n.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (i = (n = r[o]).type) e[i] = Ue(e[i], n.name, t);
      else if (t == null) for (i in e) e[i] = Ue(e[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var e in t) n[e] = t[e].slice();
    return new Gt(n);
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
function Or(n, t) {
  for (var e = 0, r = n.length, i; e < r; ++e)
    if ((i = n[e]).name === t)
      return i.value;
}
function Ue(n, t, e) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === t) {
      n[r] = xr, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return e != null && n.push({ name: t, value: e }), n;
}
var xe = "http://www.w3.org/1999/xhtml";
const We = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ce(n) {
  var t = n += "", e = t.indexOf(":");
  return e >= 0 && (t = n.slice(0, e)) !== "xmlns" && (n = n.slice(e + 1)), We.hasOwnProperty(t) ? { space: We[t], local: n } : n;
}
function Sr(n) {
  return function() {
    var t = this.ownerDocument, e = this.namespaceURI;
    return e === xe && t.documentElement.namespaceURI === xe ? t.createElement(n) : t.createElementNS(e, n);
  };
}
function Mr(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function Te(n) {
  var t = ce(n);
  return (t.local ? Mr : Sr)(t);
}
function Cr() {
}
function Ae(n) {
  return n == null ? Cr : function() {
    return this.querySelector(n);
  };
}
function Er(n) {
  typeof n != "function" && (n = Ae(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = new Array(s), c, l, h = 0; h < s; ++h)
      (c = o[h]) && (l = n.call(c, c.__data__, h, o)) && ("__data__" in c && (l.__data__ = c.__data__), a[h] = l);
  return new L(r, this._parents);
}
function Ir(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function kr() {
  return [];
}
function kn(n) {
  return n == null ? kr : function() {
    return this.querySelectorAll(n);
  };
}
function jr(n) {
  return function() {
    return Ir(n.apply(this, arguments));
  };
}
function Tr(n) {
  typeof n == "function" ? n = jr(n) : n = kn(n);
  for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = t[o], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (r.push(n.call(c, c.__data__, l, s)), i.push(c));
  return new L(r, i);
}
function jn(n) {
  return function() {
    return this.matches(n);
  };
}
function Tn(n) {
  return function(t) {
    return t.matches(n);
  };
}
var Ar = Array.prototype.find;
function Nr(n) {
  return function() {
    return Ar.call(this.children, n);
  };
}
function Dr() {
  return this.firstElementChild;
}
function zr(n) {
  return this.select(n == null ? Dr : Nr(typeof n == "function" ? n : Tn(n)));
}
var Pr = Array.prototype.filter;
function Rr() {
  return Array.from(this.children);
}
function $r(n) {
  return function() {
    return Pr.call(this.children, n);
  };
}
function Hr(n) {
  return this.selectAll(n == null ? Rr : $r(typeof n == "function" ? n : Tn(n)));
}
function Xr(n) {
  typeof n != "function" && (n = jn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, l = 0; l < s; ++l)
      (c = o[l]) && n.call(c, c.__data__, l, o) && a.push(c);
  return new L(r, this._parents);
}
function An(n) {
  return new Array(n.length);
}
function Lr() {
  return new L(this._enter || this._groups.map(An), this._parents);
}
function Qt(n, t) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
}
Qt.prototype = {
  constructor: Qt,
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
function Yr(n) {
  return function() {
    return n;
  };
}
function Fr(n, t, e, r, i, o) {
  for (var s = 0, a, c = t.length, l = o.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = o[s], r[s] = a) : e[s] = new Qt(n, o[s]);
  for (; s < c; ++s)
    (a = t[s]) && (i[s] = a);
}
function Br(n, t, e, r, i, o, s) {
  var a, c, l = /* @__PURE__ */ new Map(), h = t.length, f = o.length, d = new Array(h), _;
  for (a = 0; a < h; ++a)
    (c = t[a]) && (d[a] = _ = s.call(c, c.__data__, a, t) + "", l.has(_) ? i[a] = c : l.set(_, c));
  for (a = 0; a < f; ++a)
    _ = s.call(n, o[a], a, o) + "", (c = l.get(_)) ? (r[a] = c, c.__data__ = o[a], l.delete(_)) : e[a] = new Qt(n, o[a]);
  for (a = 0; a < h; ++a)
    (c = t[a]) && l.get(d[a]) === c && (i[a] = c);
}
function Vr(n) {
  return n.__data__;
}
function Ur(n, t) {
  if (!arguments.length) return Array.from(this, Vr);
  var e = t ? Br : Fr, r = this._parents, i = this._groups;
  typeof n != "function" && (n = Yr(n));
  for (var o = i.length, s = new Array(o), a = new Array(o), c = new Array(o), l = 0; l < o; ++l) {
    var h = r[l], f = i[l], d = f.length, _ = Wr(n.call(h, h && h.__data__, l, r)), w = _.length, M = a[l] = new Array(w), k = s[l] = new Array(w), b = c[l] = new Array(d);
    e(h, f, M, k, b, _, t);
    for (var j = 0, T = 0, p, S; j < w; ++j)
      if (p = M[j]) {
        for (j >= T && (T = j + 1); !(S = k[T]) && ++T < w; ) ;
        p._next = S || null;
      }
  }
  return s = new L(s, r), s._enter = a, s._exit = c, s;
}
function Wr(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function qr() {
  return new L(this._exit || this._groups.map(An), this._parents);
}
function Gr(n, t, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), t != null && (i = t(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Kr(n) {
  for (var t = n.selection ? n.selection() : n, e = this._groups, r = t._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), c = 0; c < s; ++c)
    for (var l = e[c], h = r[c], f = l.length, d = a[c] = new Array(f), _, w = 0; w < f; ++w)
      (_ = l[w] || h[w]) && (d[w] = _);
  for (; c < i; ++c)
    a[c] = e[c];
  return new L(a, this._parents);
}
function Zr() {
  for (var n = this._groups, t = -1, e = n.length; ++t < e; )
    for (var r = n[t], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Jr(n) {
  n || (n = Qr);
  function t(f, d) {
    return f && d ? n(f.__data__, d.__data__) : !f - !d;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], a = s.length, c = i[o] = new Array(a), l, h = 0; h < a; ++h)
      (l = s[h]) && (c[h] = l);
    c.sort(t);
  }
  return new L(i, this._parents).order();
}
function Qr(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ti() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function ei() {
  return Array.from(this);
}
function ni() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function ri() {
  let n = 0;
  for (const t of this) ++n;
  return n;
}
function ii() {
  return !this.node();
}
function oi(n) {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && n.call(a, a.__data__, o, i);
  return this;
}
function si(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function ai(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function ci(n, t) {
  return function() {
    this.setAttribute(n, t);
  };
}
function li(n, t) {
  return function() {
    this.setAttributeNS(n.space, n.local, t);
  };
}
function hi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
  };
}
function di(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
  };
}
function ui(n, t) {
  var e = ce(n);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((t == null ? e.local ? ai : si : typeof t == "function" ? e.local ? di : hi : e.local ? li : ci)(e, t));
}
function Nn(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function fi(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function gi(n, t, e) {
  return function() {
    this.style.setProperty(n, t, e);
  };
}
function pi(n, t, e) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
  };
}
function _i(n, t, e) {
  return arguments.length > 1 ? this.each((t == null ? fi : typeof t == "function" ? pi : gi)(n, t, e ?? "")) : St(this.node(), n);
}
function St(n, t) {
  return n.style.getPropertyValue(t) || Nn(n).getComputedStyle(n, null).getPropertyValue(t);
}
function yi(n) {
  return function() {
    delete this[n];
  };
}
function mi(n, t) {
  return function() {
    this[n] = t;
  };
}
function bi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? delete this[n] : this[n] = e;
  };
}
function wi(n, t) {
  return arguments.length > 1 ? this.each((t == null ? yi : typeof t == "function" ? bi : mi)(n, t)) : this.node()[n];
}
function Dn(n) {
  return n.trim().split(/^|\s+/);
}
function Ne(n) {
  return n.classList || new zn(n);
}
function zn(n) {
  this._node = n, this._names = Dn(n.getAttribute("class") || "");
}
zn.prototype = {
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
function Pn(n, t) {
  for (var e = Ne(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
}
function Rn(n, t) {
  for (var e = Ne(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
}
function xi(n) {
  return function() {
    Pn(this, n);
  };
}
function vi(n) {
  return function() {
    Rn(this, n);
  };
}
function Oi(n, t) {
  return function() {
    (t.apply(this, arguments) ? Pn : Rn)(this, n);
  };
}
function Si(n, t) {
  var e = Dn(n + "");
  if (arguments.length < 2) {
    for (var r = Ne(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Oi : t ? xi : vi)(e, t));
}
function Mi() {
  this.textContent = "";
}
function Ci(n) {
  return function() {
    this.textContent = n;
  };
}
function Ei(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ii(n) {
  return arguments.length ? this.each(n == null ? Mi : (typeof n == "function" ? Ei : Ci)(n)) : this.node().textContent;
}
function ki() {
  this.innerHTML = "";
}
function ji(n) {
  return function() {
    this.innerHTML = n;
  };
}
function Ti(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ai(n) {
  return arguments.length ? this.each(n == null ? ki : (typeof n == "function" ? Ti : ji)(n)) : this.node().innerHTML;
}
function Ni() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Di() {
  return this.each(Ni);
}
function zi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pi() {
  return this.each(zi);
}
function Ri(n) {
  var t = typeof n == "function" ? n : Te(n);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $i() {
  return null;
}
function Hi(n, t) {
  var e = typeof n == "function" ? n : Te(n), r = t == null ? $i : typeof t == "function" ? t : Ae(t);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Xi() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function Li() {
  return this.each(Xi);
}
function Yi() {
  var n = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Fi() {
  var n = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Bi(n) {
  return this.select(n ? Fi : Yi);
}
function Vi(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function Ui(n) {
  return function(t) {
    n.call(this, t, this.__data__);
  };
}
function Wi(n) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var e = "", r = t.indexOf(".");
    return r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: e };
  });
}
function qi(n) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
        o = t[e], (!n.type || o.type === n.type) && o.name === n.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gi(n, t, e) {
  return function() {
    var r = this.__on, i, o = Ui(t);
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
function Ki(n, t, e) {
  var r = Wi(n + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, h; c < l; ++c)
        for (i = 0, h = a[c]; i < o; ++i)
          if ((s = r[i]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = t ? Gi : qi, i = 0; i < o; ++i) this.each(a(r[i], t, e));
  return this;
}
function $n(n, t, e) {
  var r = Nn(n), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
}
function Zi(n, t) {
  return function() {
    return $n(this, n, t);
  };
}
function Ji(n, t) {
  return function() {
    return $n(this, n, t.apply(this, arguments));
  };
}
function Qi(n, t) {
  return this.each((typeof t == "function" ? Ji : Zi)(n, t));
}
function* to() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var Hn = [null];
function L(n, t) {
  this._groups = n, this._parents = t;
}
function Rt() {
  return new L([[document.documentElement]], Hn);
}
function eo() {
  return this;
}
L.prototype = Rt.prototype = {
  constructor: L,
  select: Er,
  selectAll: Tr,
  selectChild: zr,
  selectChildren: Hr,
  filter: Xr,
  data: Ur,
  enter: Lr,
  exit: qr,
  join: Gr,
  merge: Kr,
  selection: eo,
  order: Zr,
  sort: Jr,
  call: ti,
  nodes: ei,
  node: ni,
  size: ri,
  empty: ii,
  each: oi,
  attr: ui,
  style: _i,
  property: wi,
  classed: Si,
  text: Ii,
  html: Ai,
  raise: Di,
  lower: Pi,
  append: Ri,
  insert: Hi,
  remove: Li,
  clone: Bi,
  datum: Vi,
  on: Ki,
  dispatch: Qi,
  [Symbol.iterator]: to
};
function Y(n) {
  return typeof n == "string" ? new L([[document.querySelector(n)]], [document.documentElement]) : new L([[n]], Hn);
}
function F(n) {
  return Y(Te(n).call(document.documentElement));
}
function no(n) {
  let t;
  for (; t = n.sourceEvent; ) n = t;
  return n;
}
function et(n, t) {
  if (n = no(n), t === void 0 && (t = n.currentTarget), t) {
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
const ro = { passive: !1 }, At = { capture: !0, passive: !1 };
function pe(n) {
  n.stopImmediatePropagation();
}
function vt(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Xn(n) {
  var t = n.document.documentElement, e = Y(n).on("dragstart.drag", vt, At);
  "onselectstart" in t ? e.on("selectstart.drag", vt, At) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ln(n, t) {
  var e = n.document.documentElement, r = Y(n).on("dragstart.drag", null);
  t && (r.on("click.drag", vt, At), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Ht = (n) => () => n;
function ve(n, {
  sourceEvent: t,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: s,
  y: a,
  dx: c,
  dy: l,
  dispatch: h
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
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
ve.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function io(n) {
  return !n.ctrlKey && !n.button;
}
function oo() {
  return this.parentNode;
}
function so(n, t) {
  return t ?? { x: n.x, y: n.y };
}
function ao() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function st() {
  var n = io, t = oo, e = so, r = ao, i = {}, o = ae("start", "drag", "end"), s = 0, a, c, l, h, f = 0;
  function d(p) {
    p.on("mousedown.drag", _).filter(r).on("touchstart.drag", k).on("touchmove.drag", b, ro).on("touchend.drag touchcancel.drag", j).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function _(p, S) {
    if (!(h || !n.call(this, p, S))) {
      var C = T(this, t.call(this, p, S), p, S, "mouse");
      C && (Y(p.view).on("mousemove.drag", w, At).on("mouseup.drag", M, At), Xn(p.view), pe(p), l = !1, a = p.clientX, c = p.clientY, C("start", p));
    }
  }
  function w(p) {
    if (vt(p), !l) {
      var S = p.clientX - a, C = p.clientY - c;
      l = S * S + C * C > f;
    }
    i.mouse("drag", p);
  }
  function M(p) {
    Y(p.view).on("mousemove.drag mouseup.drag", null), Ln(p.view, l), vt(p), i.mouse("end", p);
  }
  function k(p, S) {
    if (n.call(this, p, S)) {
      var C = p.changedTouches, E = t.call(this, p, S), N = C.length, R, X;
      for (R = 0; R < N; ++R)
        (X = T(this, E, p, S, C[R].identifier, C[R])) && (pe(p), X("start", p, C[R]));
    }
  }
  function b(p) {
    var S = p.changedTouches, C = S.length, E, N;
    for (E = 0; E < C; ++E)
      (N = i[S[E].identifier]) && (vt(p), N("drag", p, S[E]));
  }
  function j(p) {
    var S = p.changedTouches, C = S.length, E, N;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), E = 0; E < C; ++E)
      (N = i[S[E].identifier]) && (pe(p), N("end", p, S[E]));
  }
  function T(p, S, C, E, N, R) {
    var X = o.copy(), $ = et(R || C, S), _t, yt, u;
    if ((u = e.call(p, new ve("beforestart", {
      sourceEvent: C,
      target: d,
      identifier: N,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), E)) != null)
      return _t = u.x - $[0] || 0, yt = u.y - $[1] || 0, function y(g, m, x) {
        var v = $, O;
        switch (g) {
          case "start":
            i[N] = y, O = s++;
            break;
          case "end":
            delete i[N], --s;
          // falls through
          case "drag":
            $ = et(x || m, S), O = s;
            break;
        }
        X.call(
          g,
          p,
          new ve(g, {
            sourceEvent: m,
            subject: u,
            target: d,
            identifier: N,
            active: O,
            x: $[0] + _t,
            y: $[1] + yt,
            dx: $[0] - v[0],
            dy: $[1] - v[1],
            dispatch: X
          }),
          E
        );
      };
  }
  return d.filter = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Ht(!!p), d) : n;
  }, d.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Ht(p), d) : t;
  }, d.subject = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Ht(p), d) : e;
  }, d.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Ht(!!p), d) : r;
  }, d.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? d : p;
  }, d.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, d) : Math.sqrt(f);
  }, d;
}
function De(n, t, e) {
  n.prototype = t.prototype = e, e.constructor = n;
}
function Yn(n, t) {
  var e = Object.create(n.prototype);
  for (var r in t) e[r] = t[r];
  return e;
}
function $t() {
}
var Nt = 0.7, te = 1 / Nt, Ot = "\\s*([+-]?\\d+)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", co = /^#([0-9a-f]{3,8})$/, lo = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`), ho = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), uo = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Dt}\\)$`), fo = new RegExp(`^rgba\\(${K},${K},${K},${Dt}\\)$`), go = new RegExp(`^hsl\\(${Dt},${K},${K}\\)$`), po = new RegExp(`^hsla\\(${Dt},${K},${K},${Dt}\\)$`), qe = {
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
De($t, zt, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ge,
  // Deprecated! Use color.formatHex.
  formatHex: Ge,
  formatHex8: _o,
  formatHsl: yo,
  formatRgb: Ke,
  toString: Ke
});
function Ge() {
  return this.rgb().formatHex();
}
function _o() {
  return this.rgb().formatHex8();
}
function yo() {
  return Fn(this).formatHsl();
}
function Ke() {
  return this.rgb().formatRgb();
}
function zt(n) {
  var t, e;
  return n = (n + "").trim().toLowerCase(), (t = co.exec(n)) ? (e = t[1].length, t = parseInt(t[1], 16), e === 6 ? Ze(t) : e === 3 ? new H(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : e === 8 ? Xt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : e === 4 ? Xt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lo.exec(n)) ? new H(t[1], t[2], t[3], 1) : (t = ho.exec(n)) ? new H(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = uo.exec(n)) ? Xt(t[1], t[2], t[3], t[4]) : (t = fo.exec(n)) ? Xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = go.exec(n)) ? tn(t[1], t[2] / 100, t[3] / 100, 1) : (t = po.exec(n)) ? tn(t[1], t[2] / 100, t[3] / 100, t[4]) : qe.hasOwnProperty(n) ? Ze(qe[n]) : n === "transparent" ? new H(NaN, NaN, NaN, 0) : null;
}
function Ze(n) {
  return new H(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Xt(n, t, e, r) {
  return r <= 0 && (n = t = e = NaN), new H(n, t, e, r);
}
function mo(n) {
  return n instanceof $t || (n = zt(n)), n ? (n = n.rgb(), new H(n.r, n.g, n.b, n.opacity)) : new H();
}
function Oe(n, t, e, r) {
  return arguments.length === 1 ? mo(n) : new H(n, t, e, r ?? 1);
}
function H(n, t, e, r) {
  this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
}
De(H, Oe, Yn($t, {
  brighter(n) {
    return n = n == null ? te : Math.pow(te, n), new H(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Nt : Math.pow(Nt, n), new H(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new H(gt(this.r), gt(this.g), gt(this.b), ee(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Je,
  // Deprecated! Use color.formatHex.
  formatHex: Je,
  formatHex8: bo,
  formatRgb: Qe,
  toString: Qe
}));
function Je() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function bo() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qe() {
  const n = ee(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function ee(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function gt(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function ft(n) {
  return n = gt(n), (n < 16 ? "0" : "") + n.toString(16);
}
function tn(n, t, e, r) {
  return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new W(n, t, e, r);
}
function Fn(n) {
  if (n instanceof W) return new W(n.h, n.s, n.l, n.opacity);
  if (n instanceof $t || (n = zt(n)), !n) return new W();
  if (n instanceof W) return n;
  n = n.rgb();
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = Math.min(t, e, r), o = Math.max(t, e, r), s = NaN, a = o - i, c = (o + i) / 2;
  return a ? (t === o ? s = (e - r) / a + (e < r) * 6 : e === o ? s = (r - t) / a + 2 : s = (t - e) / a + 4, a /= c < 0.5 ? o + i : 2 - o - i, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new W(s, a, c, n.opacity);
}
function wo(n, t, e, r) {
  return arguments.length === 1 ? Fn(n) : new W(n, t, e, r ?? 1);
}
function W(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
De(W, wo, Yn($t, {
  brighter(n) {
    return n = n == null ? te : Math.pow(te, n), new W(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Nt : Math.pow(Nt, n), new W(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, t = isNaN(n) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * t, i = 2 * e - r;
    return new H(
      _e(n >= 240 ? n - 240 : n + 120, i, r),
      _e(n, i, r),
      _e(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(en(this.h), Lt(this.s), Lt(this.l), ee(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = ee(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${en(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function en(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function Lt(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function _e(n, t, e) {
  return (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t) * 255;
}
const Bn = (n) => () => n;
function xo(n, t) {
  return function(e) {
    return n + e * t;
  };
}
function vo(n, t, e) {
  return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function(r) {
    return Math.pow(n + r * t, e);
  };
}
function Oo(n) {
  return (n = +n) == 1 ? Vn : function(t, e) {
    return e - t ? vo(t, e, n) : Bn(isNaN(t) ? e : t);
  };
}
function Vn(n, t) {
  var e = t - n;
  return e ? xo(n, e) : Bn(isNaN(n) ? t : n);
}
const nn = function n(t) {
  var e = Oo(t);
  function r(i, o) {
    var s = e((i = Oe(i)).r, (o = Oe(o)).r), a = e(i.g, o.g), c = e(i.b, o.b), l = Vn(i.opacity, o.opacity);
    return function(h) {
      return i.r = s(h), i.g = a(h), i.b = c(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function at(n, t) {
  return n = +n, t = +t, function(e) {
    return n * (1 - e) + t * e;
  };
}
var Se = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ye = new RegExp(Se.source, "g");
function So(n) {
  return function() {
    return n;
  };
}
function Mo(n) {
  return function(t) {
    return n(t) + "";
  };
}
function Co(n, t) {
  var e = Se.lastIndex = ye.lastIndex = 0, r, i, o, s = -1, a = [], c = [];
  for (n = n + "", t = t + ""; (r = Se.exec(n)) && (i = ye.exec(t)); )
    (o = i.index) > e && (o = t.slice(e, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, c.push({ i: s, x: at(r, i) })), e = ye.lastIndex;
  return e < t.length && (o = t.slice(e), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? c[0] ? Mo(c[0].x) : So(t) : (t = c.length, function(l) {
    for (var h = 0, f; h < t; ++h) a[(f = c[h]).i] = f.x(l);
    return a.join("");
  });
}
var rn = 180 / Math.PI, Me = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Un(n, t, e, r, i, o) {
  var s, a, c;
  return (s = Math.sqrt(n * n + t * t)) && (n /= s, t /= s), (c = n * e + t * r) && (e -= n * c, r -= t * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), n * r < t * e && (n = -n, t = -t, c = -c, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, n) * rn,
    skewX: Math.atan(c) * rn,
    scaleX: s,
    scaleY: a
  };
}
var Yt;
function Eo(n) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return t.isIdentity ? Me : Un(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Io(n) {
  return n == null || (Yt || (Yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yt.setAttribute("transform", n), !(n = Yt.transform.baseVal.consolidate())) ? Me : (n = n.matrix, Un(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Wn(n, t, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, h, f, d, _, w) {
    if (l !== f || h !== d) {
      var M = _.push("translate(", null, t, null, e);
      w.push({ i: M - 4, x: at(l, f) }, { i: M - 2, x: at(h, d) });
    } else (f || d) && _.push("translate(" + f + t + d + e);
  }
  function s(l, h, f, d) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), d.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: at(l, h) })) : h && f.push(i(f) + "rotate(" + h + r);
  }
  function a(l, h, f, d) {
    l !== h ? d.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: at(l, h) }) : h && f.push(i(f) + "skewX(" + h + r);
  }
  function c(l, h, f, d, _, w) {
    if (l !== f || h !== d) {
      var M = _.push(i(_) + "scale(", null, ",", null, ")");
      w.push({ i: M - 4, x: at(l, f) }, { i: M - 2, x: at(h, d) });
    } else (f !== 1 || d !== 1) && _.push(i(_) + "scale(" + f + "," + d + ")");
  }
  return function(l, h) {
    var f = [], d = [];
    return l = n(l), h = n(h), o(l.translateX, l.translateY, h.translateX, h.translateY, f, d), s(l.rotate, h.rotate, f, d), a(l.skewX, h.skewX, f, d), c(l.scaleX, l.scaleY, h.scaleX, h.scaleY, f, d), l = h = null, function(_) {
      for (var w = -1, M = d.length, k; ++w < M; ) f[(k = d[w]).i] = k.x(_);
      return f.join("");
    };
  };
}
var ko = Wn(Eo, "px, ", "px)", "deg)"), jo = Wn(Io, ", ", ")", ")"), To = 1e-12;
function on(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function Ao(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function No(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const Do = function n(t, e, r) {
  function i(o, s) {
    var a = o[0], c = o[1], l = o[2], h = s[0], f = s[1], d = s[2], _ = h - a, w = f - c, M = _ * _ + w * w, k, b;
    if (M < To)
      b = Math.log(d / l) / t, k = function(E) {
        return [
          a + E * _,
          c + E * w,
          l * Math.exp(t * E * b)
        ];
      };
    else {
      var j = Math.sqrt(M), T = (d * d - l * l + r * M) / (2 * l * e * j), p = (d * d - l * l - r * M) / (2 * d * e * j), S = Math.log(Math.sqrt(T * T + 1) - T), C = Math.log(Math.sqrt(p * p + 1) - p);
      b = (C - S) / t, k = function(E) {
        var N = E * b, R = on(S), X = l / (e * j) * (R * No(t * N + S) - Ao(S));
        return [
          a + X * _,
          c + X * w,
          l * R / on(t * N + S)
        ];
      };
    }
    return k.duration = b * 1e3 * t / Math.SQRT2, k;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, c = a * a;
    return n(s, a, c);
  }, i;
}(Math.SQRT2, 2, 4);
var Mt = 0, kt = 0, Et = 0, qn = 1e3, ne, jt, re = 0, pt = 0, le = 0, Pt = typeof performance == "object" && performance.now ? performance : Date, Gn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function ze() {
  return pt || (Gn(zo), pt = Pt.now() + le);
}
function zo() {
  pt = 0;
}
function ie() {
  this._call = this._time = this._next = null;
}
ie.prototype = Kn.prototype = {
  constructor: ie,
  restart: function(n, t, e) {
    if (typeof n != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ze() : +e) + (t == null ? 0 : +t), !this._next && jt !== this && (jt ? jt._next = this : ne = this, jt = this), this._call = n, this._time = e, Ce();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ce());
  }
};
function Kn(n, t, e) {
  var r = new ie();
  return r.restart(n, t, e), r;
}
function Po() {
  ze(), ++Mt;
  for (var n = ne, t; n; )
    (t = pt - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
  --Mt;
}
function sn() {
  pt = (re = Pt.now()) + le, Mt = kt = 0;
  try {
    Po();
  } finally {
    Mt = 0, $o(), pt = 0;
  }
}
function Ro() {
  var n = Pt.now(), t = n - re;
  t > qn && (le -= t, re = n);
}
function $o() {
  for (var n, t = ne, e, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), n = t, t = t._next) : (e = t._next, t._next = null, t = n ? n._next = e : ne = e);
  jt = n, Ce(r);
}
function Ce(n) {
  if (!Mt) {
    kt && (kt = clearTimeout(kt));
    var t = n - pt;
    t > 24 ? (n < 1 / 0 && (kt = setTimeout(sn, n - Pt.now() - le)), Et && (Et = clearInterval(Et))) : (Et || (re = Pt.now(), Et = setInterval(Ro, qn)), Mt = 1, Gn(sn));
  }
}
function oe(n, t, e) {
  var r = new ie();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), n(i + t);
  }, t, e), r;
}
var Ho = ae("start", "end", "cancel", "interrupt"), Xo = [], Zn = 0, an = 1, Ee = 2, Kt = 3, cn = 4, Ie = 5, Zt = 6;
function he(n, t, e, r, i, o) {
  var s = n.__transition;
  if (!s) n.__transition = {};
  else if (e in s) return;
  Lo(n, e, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ho,
    tween: Xo,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Zn
  });
}
function Pe(n, t) {
  var e = q(n, t);
  if (e.state > Zn) throw new Error("too late; already scheduled");
  return e;
}
function Z(n, t) {
  var e = q(n, t);
  if (e.state > Kt) throw new Error("too late; already running");
  return e;
}
function q(n, t) {
  var e = n.__transition;
  if (!e || !(e = e[t])) throw new Error("transition not found");
  return e;
}
function Lo(n, t, e) {
  var r = n.__transition, i;
  r[t] = e, e.timer = Kn(o, 0, e.time);
  function o(l) {
    e.state = an, e.timer.restart(s, e.delay, e.time), e.delay <= l && s(l - e.delay);
  }
  function s(l) {
    var h, f, d, _;
    if (e.state !== an) return c();
    for (h in r)
      if (_ = r[h], _.name === e.name) {
        if (_.state === Kt) return oe(s);
        _.state === cn ? (_.state = Zt, _.timer.stop(), _.on.call("interrupt", n, n.__data__, _.index, _.group), delete r[h]) : +h < t && (_.state = Zt, _.timer.stop(), _.on.call("cancel", n, n.__data__, _.index, _.group), delete r[h]);
      }
    if (oe(function() {
      e.state === Kt && (e.state = cn, e.timer.restart(a, e.delay, e.time), a(l));
    }), e.state = Ee, e.on.call("start", n, n.__data__, e.index, e.group), e.state === Ee) {
      for (e.state = Kt, i = new Array(d = e.tween.length), h = 0, f = -1; h < d; ++h)
        (_ = e.tween[h].value.call(n, n.__data__, e.index, e.group)) && (i[++f] = _);
      i.length = f + 1;
    }
  }
  function a(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(c), e.state = Ie, 1), f = -1, d = i.length; ++f < d; )
      i[f].call(n, h);
    e.state === Ie && (e.on.call("end", n, n.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Zt, e.timer.stop(), delete r[t];
    for (var l in r) return;
    delete n.__transition;
  }
}
function Jt(n, t) {
  var e = n.__transition, r, i, o = !0, s;
  if (e) {
    t = t == null ? null : t + "";
    for (s in e) {
      if ((r = e[s]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > Ee && r.state < Ie, r.state = Zt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete e[s];
    }
    o && delete n.__transition;
  }
}
function Yo(n) {
  return this.each(function() {
    Jt(this, n);
  });
}
function Fo(n, t) {
  var e, r;
  return function() {
    var i = Z(this, n), o = i.tween;
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
function Bo(n, t, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Z(this, n), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: t, value: e }, c = 0, l = i.length; c < l; ++c)
        if (i[c].name === t) {
          i[c] = a;
          break;
        }
      c === l && i.push(a);
    }
    o.tween = i;
  };
}
function Vo(n, t) {
  var e = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === n)
        return s.value;
    return null;
  }
  return this.each((t == null ? Fo : Bo)(e, n, t));
}
function Re(n, t, e) {
  var r = n._id;
  return n.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[t] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[t];
  };
}
function Jn(n, t) {
  var e;
  return (typeof t == "number" ? at : t instanceof zt ? nn : (e = zt(t)) ? (t = e, nn) : Co)(n, t);
}
function Uo(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function Wo(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function qo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Go(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(n.space, n.local);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Ko(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttribute(n) : (s = this.getAttribute(n), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Zo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttributeNS(n.space, n.local) : (s = this.getAttributeNS(n.space, n.local), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Jo(n, t) {
  var e = ce(n), r = e === "transform" ? jo : Jn;
  return this.attrTween(n, typeof t == "function" ? (e.local ? Zo : Ko)(e, r, Re(this, "attr." + n, t)) : t == null ? (e.local ? Wo : Uo)(e) : (e.local ? Go : qo)(e, r, t));
}
function Qo(n, t) {
  return function(e) {
    this.setAttribute(n, t.call(this, e));
  };
}
function ts(n, t) {
  return function(e) {
    this.setAttributeNS(n.space, n.local, t.call(this, e));
  };
}
function es(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && ts(n, o)), e;
  }
  return i._value = t, i;
}
function ns(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Qo(n, o)), e;
  }
  return i._value = t, i;
}
function rs(n, t) {
  var e = "attr." + n;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  var r = ce(n);
  return this.tween(e, (r.local ? es : ns)(r, t));
}
function is(n, t) {
  return function() {
    Pe(this, n).delay = +t.apply(this, arguments);
  };
}
function os(n, t) {
  return t = +t, function() {
    Pe(this, n).delay = t;
  };
}
function ss(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? is : os)(t, n)) : q(this.node(), t).delay;
}
function as(n, t) {
  return function() {
    Z(this, n).duration = +t.apply(this, arguments);
  };
}
function cs(n, t) {
  return t = +t, function() {
    Z(this, n).duration = t;
  };
}
function ls(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? as : cs)(t, n)) : q(this.node(), t).duration;
}
function hs(n, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Z(this, n).ease = t;
  };
}
function ds(n) {
  var t = this._id;
  return arguments.length ? this.each(hs(t, n)) : q(this.node(), t).ease;
}
function us(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Z(this, n).ease = e;
  };
}
function fs(n) {
  if (typeof n != "function") throw new Error();
  return this.each(us(this._id, n));
}
function gs(n) {
  typeof n != "function" && (n = jn(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, l = 0; l < s; ++l)
      (c = o[l]) && n.call(c, c.__data__, l, o) && a.push(c);
  return new rt(r, this._parents, this._name, this._id);
}
function ps(n) {
  if (n._id !== this._id) throw new Error();
  for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var c = t[a], l = e[a], h = c.length, f = s[a] = new Array(h), d, _ = 0; _ < h; ++_)
      (d = c[_] || l[_]) && (f[_] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new rt(s, this._parents, this._name, this._id);
}
function _s(n) {
  return (n + "").trim().split(/^|\s+/).every(function(t) {
    var e = t.indexOf(".");
    return e >= 0 && (t = t.slice(0, e)), !t || t === "start";
  });
}
function ys(n, t, e) {
  var r, i, o = _s(t) ? Pe : Z;
  return function() {
    var s = o(this, n), a = s.on;
    a !== r && (i = (r = a).copy()).on(t, e), s.on = i;
  };
}
function ms(n, t) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(n) : this.each(ys(e, n, t));
}
function bs(n) {
  return function() {
    var t = this.parentNode;
    for (var e in this.__transition) if (+e !== n) return;
    t && t.removeChild(this);
  };
}
function ws() {
  return this.on("end.remove", bs(this._id));
}
function xs(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = Ae(n));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], c = a.length, l = o[s] = new Array(c), h, f, d = 0; d < c; ++d)
      (h = a[d]) && (f = n.call(h, h.__data__, d, a)) && ("__data__" in h && (f.__data__ = h.__data__), l[d] = f, he(l[d], t, e, d, l, q(h, e)));
  return new rt(o, this._parents, t, e);
}
function vs(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = kn(n));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var c = r[a], l = c.length, h, f = 0; f < l; ++f)
      if (h = c[f]) {
        for (var d = n.call(h, h.__data__, f, c), _, w = q(h, e), M = 0, k = d.length; M < k; ++M)
          (_ = d[M]) && he(_, t, e, M, d, w);
        o.push(d), s.push(h);
      }
  return new rt(o, s, t, e);
}
var Os = Rt.prototype.constructor;
function Ss() {
  return new Os(this._groups, this._parents);
}
function Ms(n, t) {
  var e, r, i;
  return function() {
    var o = St(this, n), s = (this.style.removeProperty(n), St(this, n));
    return o === s ? null : o === e && s === r ? i : i = t(e = o, r = s);
  };
}
function Qn(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function Cs(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = St(this, n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Es(n, t, e) {
  var r, i, o;
  return function() {
    var s = St(this, n), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(n), St(this, n))), s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a));
  };
}
function Is(n, t) {
  var e, r, i, o = "style." + t, s = "end." + o, a;
  return function() {
    var c = Z(this, n), l = c.on, h = c.value[o] == null ? a || (a = Qn(t)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(s, i = h), c.on = r;
  };
}
function ks(n, t, e) {
  var r = (n += "") == "transform" ? ko : Jn;
  return t == null ? this.styleTween(n, Ms(n, r)).on("end.style." + n, Qn(n)) : typeof t == "function" ? this.styleTween(n, Es(n, r, Re(this, "style." + n, t))).each(Is(this._id, n)) : this.styleTween(n, Cs(n, r, t), e).on("end.style." + n, null);
}
function js(n, t, e) {
  return function(r) {
    this.style.setProperty(n, t.call(this, r), e);
  };
}
function Ts(n, t, e) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && js(n, s, e)), r;
  }
  return o._value = t, o;
}
function As(n, t, e) {
  var r = "style." + (n += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Ts(n, t, e ?? ""));
}
function Ns(n) {
  return function() {
    this.textContent = n;
  };
}
function Ds(n) {
  return function() {
    var t = n(this);
    this.textContent = t ?? "";
  };
}
function zs(n) {
  return this.tween("text", typeof n == "function" ? Ds(Re(this, "text", n)) : Ns(n == null ? "" : n + ""));
}
function Ps(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function Rs(n) {
  var t, e;
  function r() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && Ps(i)), t;
  }
  return r._value = n, r;
}
function $s(n) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  return this.tween(t, Rs(n));
}
function Hs() {
  for (var n = this._name, t = this._id, e = tr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var h = q(c, t);
        he(c, n, e, l, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new rt(r, this._parents, n, e);
}
function Xs() {
  var n, t, e = this, r = e._id, i = e.size();
  return new Promise(function(o, s) {
    var a = { value: s }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Z(this, r), h = l.on;
      h !== n && (t = (n = h).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), i === 0 && o();
  });
}
var Ls = 0;
function rt(n, t, e, r) {
  this._groups = n, this._parents = t, this._name = e, this._id = r;
}
function tr() {
  return ++Ls;
}
var tt = Rt.prototype;
rt.prototype = {
  constructor: rt,
  select: xs,
  selectAll: vs,
  selectChild: tt.selectChild,
  selectChildren: tt.selectChildren,
  filter: gs,
  merge: ps,
  selection: Ss,
  transition: Hs,
  call: tt.call,
  nodes: tt.nodes,
  node: tt.node,
  size: tt.size,
  empty: tt.empty,
  each: tt.each,
  on: ms,
  attr: Jo,
  attrTween: rs,
  style: ks,
  styleTween: As,
  text: zs,
  textTween: $s,
  remove: ws,
  tween: Vo,
  delay: ss,
  duration: ls,
  ease: ds,
  easeVarying: fs,
  end: Xs,
  [Symbol.iterator]: tt[Symbol.iterator]
};
function Ys(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var Fs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ys
};
function Bs(n, t) {
  for (var e; !(e = n.__transition) || !(e = e[t]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${t} not found`);
  return e;
}
function Vs(n) {
  var t, e;
  n instanceof rt ? (t = n._id, n = n._name) : (t = tr(), (e = Fs).time = ze(), n = n == null ? null : n + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && he(c, n, t, l, s, e || Bs(c, t));
  return new rt(r, this._parents, n, t);
}
Rt.prototype.interrupt = Yo;
Rt.prototype.transition = Vs;
const Ft = (n) => () => n;
function Us(n, {
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
var $e = new nt(1, 0, 0);
er.prototype = nt.prototype;
function er(n) {
  for (; !n.__zoom; ) if (!(n = n.parentNode)) return $e;
  return n.__zoom;
}
function me(n) {
  n.stopImmediatePropagation();
}
function It(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Ws(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function qs() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function ln() {
  return this.__zoom || $e;
}
function Gs(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function Ks() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zs(n, t, e) {
  var r = n.invertX(t[0][0]) - e[0][0], i = n.invertX(t[1][0]) - e[1][0], o = n.invertY(t[0][1]) - e[0][1], s = n.invertY(t[1][1]) - e[1][1];
  return n.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Js() {
  var n = Ws, t = qs, e = Zs, r = Gs, i = Ks, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Do, l = ae("start", "zoom", "end"), h, f, d, _ = 500, w = 150, M = 0, k = 10;
  function b(u) {
    u.property("__zoom", ln).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", X).filter(i).on("touchstart.zoom", $).on("touchmove.zoom", _t).on("touchend.zoom touchcancel.zoom", yt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(u, y, g, m) {
    var x = u.selection ? u.selection() : u;
    x.property("__zoom", ln), u !== x ? S(u, y, g, m) : x.interrupt().each(function() {
      C(this, arguments).event(m).start().zoom(null, typeof y == "function" ? y.apply(this, arguments) : y).end();
    });
  }, b.scaleBy = function(u, y, g, m) {
    b.scaleTo(u, function() {
      var x = this.__zoom.k, v = typeof y == "function" ? y.apply(this, arguments) : y;
      return x * v;
    }, g, m);
  }, b.scaleTo = function(u, y, g, m) {
    b.transform(u, function() {
      var x = t.apply(this, arguments), v = this.__zoom, O = g == null ? p(x) : typeof g == "function" ? g.apply(this, arguments) : g, I = v.invert(O), A = typeof y == "function" ? y.apply(this, arguments) : y;
      return e(T(j(v, A), O, I), x, s);
    }, g, m);
  }, b.translateBy = function(u, y, g, m) {
    b.transform(u, function() {
      return e(this.__zoom.translate(
        typeof y == "function" ? y.apply(this, arguments) : y,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), t.apply(this, arguments), s);
    }, null, m);
  }, b.translateTo = function(u, y, g, m, x) {
    b.transform(u, function() {
      var v = t.apply(this, arguments), O = this.__zoom, I = m == null ? p(v) : typeof m == "function" ? m.apply(this, arguments) : m;
      return e($e.translate(I[0], I[1]).scale(O.k).translate(
        typeof y == "function" ? -y.apply(this, arguments) : -y,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), v, s);
    }, m, x);
  };
  function j(u, y) {
    return y = Math.max(o[0], Math.min(o[1], y)), y === u.k ? u : new nt(y, u.x, u.y);
  }
  function T(u, y, g) {
    var m = y[0] - g[0] * u.k, x = y[1] - g[1] * u.k;
    return m === u.x && x === u.y ? u : new nt(u.k, m, x);
  }
  function p(u) {
    return [(+u[0][0] + +u[1][0]) / 2, (+u[0][1] + +u[1][1]) / 2];
  }
  function S(u, y, g, m) {
    u.on("start.zoom", function() {
      C(this, arguments).event(m).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(m).end();
    }).tween("zoom", function() {
      var x = this, v = arguments, O = C(x, v).event(m), I = t.apply(x, v), A = g == null ? p(I) : typeof g == "function" ? g.apply(x, v) : g, G = Math.max(I[1][0] - I[0][0], I[1][1] - I[0][1]), P = x.__zoom, B = typeof y == "function" ? y.apply(x, v) : y, J = c(P.invert(A).concat(G / P.k), B.invert(A).concat(G / B.k));
      return function(V) {
        if (V === 1) V = B;
        else {
          var Q = J(V), fe = G / Q[2];
          V = new nt(fe, A[0] - Q[0] * fe, A[1] - Q[1] * fe);
        }
        O.zoom(null, V);
      };
    });
  }
  function C(u, y, g) {
    return !g && u.__zooming || new E(u, y);
  }
  function E(u, y) {
    this.that = u, this.args = y, this.active = 0, this.sourceEvent = null, this.extent = t.apply(u, y), this.taps = 0;
  }
  E.prototype = {
    event: function(u) {
      return u && (this.sourceEvent = u), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(u, y) {
      return this.mouse && u !== "mouse" && (this.mouse[1] = y.invert(this.mouse[0])), this.touch0 && u !== "touch" && (this.touch0[1] = y.invert(this.touch0[0])), this.touch1 && u !== "touch" && (this.touch1[1] = y.invert(this.touch1[0])), this.that.__zoom = y, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(u) {
      var y = Y(this.that).datum();
      l.call(
        u,
        this.that,
        new Us(u, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: l
        }),
        y
      );
    }
  };
  function N(u, ...y) {
    if (!n.apply(this, arguments)) return;
    var g = C(this, y).event(u), m = this.__zoom, x = Math.max(o[0], Math.min(o[1], m.k * Math.pow(2, r.apply(this, arguments)))), v = et(u);
    if (g.wheel)
      (g.mouse[0][0] !== v[0] || g.mouse[0][1] !== v[1]) && (g.mouse[1] = m.invert(g.mouse[0] = v)), clearTimeout(g.wheel);
    else {
      if (m.k === x) return;
      g.mouse = [v, m.invert(v)], Jt(this), g.start();
    }
    It(u), g.wheel = setTimeout(O, w), g.zoom("mouse", e(T(j(m, x), g.mouse[0], g.mouse[1]), g.extent, s));
    function O() {
      g.wheel = null, g.end();
    }
  }
  function R(u, ...y) {
    if (d || !n.apply(this, arguments)) return;
    var g = u.currentTarget, m = C(this, y, !0).event(u), x = Y(u.view).on("mousemove.zoom", A, !0).on("mouseup.zoom", G, !0), v = et(u, g), O = u.clientX, I = u.clientY;
    Xn(u.view), me(u), m.mouse = [v, this.__zoom.invert(v)], Jt(this), m.start();
    function A(P) {
      if (It(P), !m.moved) {
        var B = P.clientX - O, J = P.clientY - I;
        m.moved = B * B + J * J > M;
      }
      m.event(P).zoom("mouse", e(T(m.that.__zoom, m.mouse[0] = et(P, g), m.mouse[1]), m.extent, s));
    }
    function G(P) {
      x.on("mousemove.zoom mouseup.zoom", null), Ln(P.view, m.moved), It(P), m.event(P).end();
    }
  }
  function X(u, ...y) {
    if (n.apply(this, arguments)) {
      var g = this.__zoom, m = et(u.changedTouches ? u.changedTouches[0] : u, this), x = g.invert(m), v = g.k * (u.shiftKey ? 0.5 : 2), O = e(T(j(g, v), m, x), t.apply(this, y), s);
      It(u), a > 0 ? Y(this).transition().duration(a).call(S, O, m, u) : Y(this).call(b.transform, O, m, u);
    }
  }
  function $(u, ...y) {
    if (n.apply(this, arguments)) {
      var g = u.touches, m = g.length, x = C(this, y, u.changedTouches.length === m).event(u), v, O, I, A;
      for (me(u), O = 0; O < m; ++O)
        I = g[O], A = et(I, this), A = [A, this.__zoom.invert(A), I.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== A[2] && (x.touch1 = A, x.taps = 0) : (x.touch0 = A, v = !0, x.taps = 1 + !!h);
      h && (h = clearTimeout(h)), v && (x.taps < 2 && (f = A[0], h = setTimeout(function() {
        h = null;
      }, _)), Jt(this), x.start());
    }
  }
  function _t(u, ...y) {
    if (this.__zooming) {
      var g = C(this, y).event(u), m = u.changedTouches, x = m.length, v, O, I, A;
      for (It(u), v = 0; v < x; ++v)
        O = m[v], I = et(O, this), g.touch0 && g.touch0[2] === O.identifier ? g.touch0[0] = I : g.touch1 && g.touch1[2] === O.identifier && (g.touch1[0] = I);
      if (O = g.that.__zoom, g.touch1) {
        var G = g.touch0[0], P = g.touch0[1], B = g.touch1[0], J = g.touch1[1], V = (V = B[0] - G[0]) * V + (V = B[1] - G[1]) * V, Q = (Q = J[0] - P[0]) * Q + (Q = J[1] - P[1]) * Q;
        O = j(O, Math.sqrt(V / Q)), I = [(G[0] + B[0]) / 2, (G[1] + B[1]) / 2], A = [(P[0] + J[0]) / 2, (P[1] + J[1]) / 2];
      } else if (g.touch0) I = g.touch0[0], A = g.touch0[1];
      else return;
      g.zoom("touch", e(T(O, I, A), g.extent, s));
    }
  }
  function yt(u, ...y) {
    if (this.__zooming) {
      var g = C(this, y).event(u), m = u.changedTouches, x = m.length, v, O;
      for (me(u), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, _), v = 0; v < x; ++v)
        O = m[v], g.touch0 && g.touch0[2] === O.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === O.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (O = et(O, this), Math.hypot(f[0] - O[0], f[1] - O[1]) < k)) {
        var I = Y(this).on("dblclick.zoom");
        I && I.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Ft(+u), b) : r;
  }, b.filter = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Ft(!!u), b) : n;
  }, b.touchable = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : Ft(!!u), b) : i;
  }, b.extent = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Ft([[+u[0][0], +u[0][1]], [+u[1][0], +u[1][1]]]), b) : t;
  }, b.scaleExtent = function(u) {
    return arguments.length ? (o[0] = +u[0], o[1] = +u[1], b) : [o[0], o[1]];
  }, b.translateExtent = function(u) {
    return arguments.length ? (s[0][0] = +u[0][0], s[1][0] = +u[1][0], s[0][1] = +u[0][1], s[1][1] = +u[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(u) {
    return arguments.length ? (e = u, b) : e;
  }, b.duration = function(u) {
    return arguments.length ? (a = +u, b) : a;
  }, b.interpolate = function(u) {
    return arguments.length ? (c = u, b) : c;
  }, b.on = function() {
    var u = l.on.apply(l, arguments);
    return u === l ? b : u;
  }, b.clickDistance = function(u) {
    return arguments.length ? (M = (u = +u) * u, b) : Math.sqrt(M);
  }, b.tapDistance = function(u) {
    return arguments.length ? (k = +u, b) : k;
  }, b;
}
class Qs {
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
class de {
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
class xt extends de {
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
class hn extends xt {
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
const ue = {
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
}, nr = {
  ...ue,
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
}, rr = {
  ...ue,
  "group.rect": { x: 0, y: 0, width: 0, height: 0 },
  "group.margin": 20,
  "group.borderAlwaysAppearance": !1
}, ir = {
  ...ue,
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
}, lt = 10, ta = 10, ea = /* @__PURE__ */ new Set([
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
class na {
  data;
  constructor(t) {
    this.data = t;
  }
  get(t) {
    return ea.has(t) ? this.data[t] : this.data[`${t}${this._getPostFix()}`] ?? this.data[t];
  }
  _getPostFix() {
    return this.data.isSelected ? ".selected" : this.data.isHovered ? ".hovered" : "";
  }
}
class ht {
  constructor(t) {
    this.creator = t;
  }
  _element = null;
  get element() {
    return this._element;
  }
  getOrCreate() {
    return this._element || (this._element = this.creator()), this._element;
  }
  remove() {
    this._element && this._element.node()?.isConnected && this._element.remove();
  }
}
class Tt {
  constructor(t) {
    this.creator = t;
  }
  _map = /* @__PURE__ */ new Map();
  has(t) {
    return this._map.has(t);
  }
  getOrCreate(t) {
    let e = this._map.get(t);
    return e || (e = new ht(() => this.creator(t)), this._map.set(t, e)), e.getOrCreate();
  }
  remove(t) {
    this._map.get(t)?.remove();
  }
  forEach(t) {
    this._map.forEach((e, r) => {
      t(e, r);
    });
  }
  clear() {
    this._map.forEach((t) => t.remove());
  }
}
class ra {
  text = "";
  length = 0;
  width = 0;
  height = 0;
  x = 0;
  y = 0;
}
class or extends ra {
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
const ia = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    if (n || (n = new OffscreenCanvas(0, 0).getContext("2d")), !n)
      throw new Error("Can't create canvas context");
    return n;
  };
})(), ke = 10, He = (n, t) => {
  const e = ia();
  e.font = `${t.fontSize}px ${t.fontFamily}`;
  const r = e.measureText(n);
  return {
    width: r.width,
    height: r.fontBoundingBoxAscent + r.fontBoundingBoxDescent
  };
}, Xe = (n) => {
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
    He(o, n).width >= n.width && (e.push(o), r.length = 0);
  }
  return r.length > 0 && e.push(r.join("")), {
    length: e.length,
    lineHeight: sr(n),
    lines: e
  };
};
function sr(n) {
  return He("|", n).height;
}
const ar = (n) => {
  const t = n.text.replace("\r", "").split(`
`);
  return {
    height: sr(n) * t.length,
    width: t.reduce((e, r) => Math.max(e, He(r, n).width), 0)
  };
}, oa = (n, t) => {
  const e = Xe(n), r = e.lineHeight * e.length;
  if (t < r) {
    const i = Math.ceil((r - t) / e.lineHeight);
    e.lines = e.lines.splice(0, e.length - i), e.length = e.lines.length, e.lines[e.length - 1] += "...";
  }
  return e;
};
class Le {
  className;
  containerInterface;
  textCache;
  data;
  dataWrapper;
  container;
  group;
  _foreignObjMgr = new ht(this._createForeignObj.bind(this));
  _textareaWrapperMgr = new ht(this._createTextareaWrapper.bind(this));
  _textMgr = new ht(this._createText.bind(this));
  constructor(t, e, r) {
    this.data = t, this.className = e, this.containerInterface = r, this.textCache = new or(), this.dataWrapper = new na(t), this.container = r.getSvg().select(".container"), this.group = this.container.append("g").attr("class", `ir-fw-${t.type}`).attr("data-type", e).attr("data-obj-id", this.data.id), this.data.fontFamily && this.group.style("font-family", this.data.fontFamily);
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
  get isEditMode() {
    return this._foreignObjMgr.element?.node()?.isConnected ?? !1;
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
    if (!this._foreignObjMgr.element || !this._textareaWrapperMgr.element) throw new Error("foreignObj, textarea is null!");
    const t = this._getLabelRect();
    this._foreignObjMgr.element.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height), this._textareaWrapperMgr.element.select("textarea").style("width", `${t.width}px`).style("height", `${t.height}px`).style("outline", "1px solid #717171").style("background-color", "transparent");
  }
  removeLabelEdit() {
    this._textareaWrapperMgr.remove(), this._foreignObjMgr.remove(), this.containerInterface.setEditMode(!1);
  }
  editLabelMode() {
    if (!this.data.editable || this.data.render === "bridge" || this.isEditMode) return;
    this.group.attr("data-status", "edit"), this.containerInterface.setEditMode(!0), this._textMgr.element?.attr("visibility", "hidden");
    const t = this._foreignObjMgr.getOrCreate();
    this.appendIfDetached(t);
    const e = this._textareaWrapperMgr.getOrCreate();
    t.append(() => e.node());
    let r = !1;
    const i = this.data.text, o = e.select("textarea");
    o.style("font-family", this.data.fontFamily ?? "").style("font-size", `${this.data.fontSize}px`).style("color", this.data.foreColor).on("keyup", (a) => {
      a.key === "Escape" ? (r = !0, this.data.text = i, this.containerInterface.getSvg().node().parentElement.focus()) : (this.data.text = o.node().value ?? "", this._repositionTextarea());
    }).on("focusout", () => {
      if (!r) {
        const a = this.data.text;
        this.data.text = o.node()?.value ?? "", this.containerInterface.editTextCallback(this.data, a, this.data.text);
      }
      this.group.attr("data-status", ""), this.removeLabelEdit(), this.render(), r = !1;
    }), this._repositionTextarea();
    const s = o.node();
    s && (s.value = this.data.text || "", s.focus()), this.containerInterface.editTextModeCallback(this.data);
  }
  bringToFrontElement(t) {
    this.group.node().appendChild(t);
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
  _renderText() {
    const t = {
      width: this.width - ke,
      text: this.dataWrapper.get("text"),
      fontFamily: this.dataWrapper.get("fontFamily"),
      fontSize: this.dataWrapper.get("fontSize"),
      foreColor: this.dataWrapper.get("foreColor"),
      textDecoration: this.dataWrapper.get("textDecoration")
    }, r = this.dataWrapper.get("visibleOverText") ? Xe(t) : oa(t, this.height - ke), i = this._getLabelXY(r), o = {
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
    if (t.text === "")
      this._textMgr.remove();
    else {
      const s = this._textMgr.getOrCreate();
      this.appendIfDetached(s), s.raise();
      const a = s.attr("visibility") === "visible";
      if (this.isEditMode ? s.attr("visibility", "hidden") : !this.isEditMode && !a && s.attr("visibility", "visible"), this.textCache.compareTo(o)) {
        lr(
          s,
          i.x,
          i.y,
          t
        );
        return;
      }
      ya(s, this.textCache), hr(
        s,
        r,
        i.x,
        i.y,
        t
      );
    }
    this.textCache.update(o);
  }
  /**
   * svg 컨테이너에서 삭제
   */
  destroy() {
    this.group.remove();
  }
  appendIfDetached(t) {
    const e = t.node();
    e?.isConnected || this.group.append(() => e);
  }
  insertBeforeIfDetached(t, e) {
    const r = t.node();
    r?.isConnected || (this.group.select(e).empty() ? this.group.append(() => r) : this.group.insert(() => r, e));
  }
  _createForeignObj() {
    return F("svg:foreignObject");
  }
  _createTextareaWrapper() {
    const t = F("xhtml:div").attr("class", "ir-fw-unselectable text--whitespace-pre").attr("text-anchor", "middle").style("overflow", "hidden");
    return t.append("textarea").style("outline", "0").style("resize", "none").style("text-align", "center").on("paste", (e) => e.__IGNORE__ = !0).on("copy", (e) => e.__IGNORE__ = !0).on("cut", (e) => e.__IGNORE__ = !0), t;
  }
  _createText() {
    return F("svg:text").attr("class", "ir-fw-unselectable text--whitespace-pre").attr("text-anchor", "middle");
  }
}
class sa {
  renderObj;
  key;
  newValue;
  oldValue;
  constructor(t, e, r, i) {
    this.renderObj = t, this.key = e, this.newValue = r, this.oldValue = i;
  }
}
class Ye {
  data;
  containerInterface;
  renderer;
  _clickedSeq = 0;
  constructor(t, e, r) {
    this.data = t, this.renderer = e, this.containerInterface = r;
  }
  get onEditing() {
    return this.renderer.isEditMode;
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
          e = r, this.data.isMonitoring && (this.containerInterface.observerCallback(new sa(this, t, r, i)), this.render());
        }
      });
    });
  }
  changeRender(t, e) {
    this.data.render = t, this.destroy(), this.renderer = e, this.create();
  }
  create() {
    this.render(), this.observeProperties();
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
const aa = /translate\((-?[\d.]+),\s*?(-?[\d.]+)\)/, ca = /scale\(([\d.]+),\s*?([\d.]+)\)/, dn = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
}, z = 45, la = {
  node: { ...ir },
  group: { ...rr },
  connection: { ...nr }
}, un = (n, t) => {
  switch (n.id) {
    case t.sourceObjId:
      return dn[t.sourcePos];
    case t.destinationObjId:
      return dn[t.destinationPos];
    default:
      throw new Error("It's not connected.");
  }
}, ha = (n) => {
  if (n.indexOf("left") !== -1)
    return "left";
  if (n.indexOf("right") !== -1)
    return "right";
  if (n.indexOf("top") !== -1)
    return "top";
  if (n.indexOf("bottom") !== -1)
    return "bottom";
  throw new Error(`Invalid argument '${n}'`);
}, da = (n) => {
  const t = aa.exec(n), e = ca.exec(n);
  let r = 0, i = 0, o = 1;
  return t && (r = parseFloat(t[1]), i = parseFloat(t[2])), e && (o = parseFloat(e[1])), {
    translateX: r,
    translateY: i,
    scale: o
  };
}, U = (n, t, e) => {
  n[t] === void 0 && (n[t] = e);
}, ua = (n) => {
  switch (U(n, "cursor", "move"), n.temp && (U(n, "node.resizerEnabled", !1), U(n, "node.connectorEnabled", !1)), n.render) {
    case "start": {
      U(n, "node.resizerEnabled", !1);
      break;
    }
    case "comment": {
      U(n, "node.connectorEnabled", !1);
      break;
    }
    case "bridge": {
      U(n, "editable", 20), U(n, "node.width", 20), U(n, "node.height", 20), U(n, "node.resizerEnabled", !1);
      break;
    }
  }
}, fa = (n) => {
  U(n, "cursor", "pointer"), (n["connection.points"] === null || n["connection.points"] === void 0) && (n["connection.points"] = []);
  const t = n["connection.points"];
  for (let e = t.length; e < 2; e++)
    t.push({ x: 0, y: 0 });
}, cr = (n, t) => Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)), fn = (n, t) => {
  const e = la[n.type];
  if (e === void 0)
    throw new Error(`Unknown type '${n.type}'`);
  for (const r of Object.keys(e))
    n[r] === void 0 && (n[r] = t[r]);
  return n;
};
function ga(n, t, e) {
  n[t] || Object.assign(n, { [t]: e });
}
function pa(n, t) {
  switch (ga(n, "fontFamily", t), n.type) {
    case "node": {
      ua(n);
      break;
    }
    case "connection": {
      fa(n);
      break;
    }
    case "group": {
      U(n, "borderDash.selected", 1);
      break;
    }
  }
}
const _a = (n) => {
  const t = {
    ...n.data
  }, e = n.firstPoint;
  switch (n.sourcePos) {
    case "top": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y - z
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + z,
          y: e.y - z
        }
      ];
      break;
    }
    case "bottom": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y + z
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + z,
          y: e.y + z
        }
      ];
      break;
    }
    case "left": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x - z,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x - z,
          y: e.y + z
        }
      ];
      break;
    }
    case "right": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + z,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + z,
          y: e.y + z
        }
      ];
      break;
    }
    default:
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + z,
          y: e.y + z
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + z / 2,
          y: e.y + z / 2
        },
        {
          x: e.x + z,
          y: e.y + z
        }
      ];
      break;
  }
  return t;
}, dt = (n) => {
  const t = [];
  return n.forEach((e) => {
    t.push(Cn(e.data));
  }), t;
}, je = (n) => Cn(n), gn = function* (n) {
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
        value: je(n["connection.points"])
      };
      break;
    case "group":
      break;
    default:
      throw new Error(`Unknow type '${n.type}'`);
  }
};
function lr(n, t, e, r) {
  n.attr("x", t).attr("y", e).attr("fill", r.foreColor).attr("font-size", r.fontSize).attr("text-decoration", r.textDecoration);
}
function hr(n, t, e, r, i) {
  lr(n, e, r, i), t.lines.forEach((o, s) => {
    const a = n.append("tspan").attr("x", e).attr("dx", 0).attr("dy", s === 0 ? 0 : t.lineHeight).text(o);
    o.trim() === "" && a.attr("opacity", "0").attr("fill-opacity", "0").text(".");
  });
}
const ya = (n, t) => {
  n.selectAll("tspan").remove(), t.clear();
}, ma = (n) => new En(n), pn = (n) => Math.round(n / lt) * lt, _n = ["node.width", "node.height"];
class ct {
  // TODO js -> ts화 중으로, 현재는 임시 방편.
  // 추후 Flowchart object data에 맞는 타입으로 변환 필요
  _objData;
  _propList;
  constructor(t, e) {
    this._objData = t, this._propList = e || [];
  }
  addMoveOldValues() {
    for (const t of gn(this._objData))
      this._propList.push({
        key: t.key,
        oldValue: t.value
      });
  }
  addSizeOldValues() {
    for (const t of _n)
      this._propList.push({
        key: t,
        oldValue: this._objData[t],
        newValue: this._objData[t]
      });
  }
  updateSizeNewValues() {
    for (const t of _n) {
      const e = this._propList.filter((r) => r.key === t)[0];
      e.newValue = this._objData[t];
    }
  }
  updateMoveNewValues() {
    for (const t of gn(this._objData)) {
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
class ut extends de {
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
class ba extends de {
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
class wa extends de {
  dataList;
  constructor(t) {
    super("front"), this.dataList = t;
  }
  _setZId(t, e, r) {
    const i = (l) => {
      const h = r.getObjectOrNull(l.objId);
      if (h === null) {
        r.getLogger().error(
          "ZIndexCommand._setZId()",
          `Could not find obj id '${l.objId}'`
        );
        return;
      }
      h.zIndex = l[t];
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
const xa = new En("Flowchart::ObjectManager");
class va {
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
      throw xa.error("ObjectManager.getMap()", `Unknown '${t}' type`), new Error(`Unknown '${t}' type`);
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
class Oa {
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
      const e = new ct(t.data);
      e.addMoveOldValues(), this.movedInfo.push(e);
    }
  }
  moveEndHandler() {
    this.iContainer.getLogger().debug("MoveHandler.moveEndHandler()", "end"), this.movedInfo.forEach((t) => t.updateMoveNewValues()), this.movedInfo.some((t) => t.propList.some((e) => In(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ut(this.movedInfo));
  }
}
const D = {
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
}, se = ["left", "right", "top", "bottom"];
class Sa {
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
        const e = new ct(t.data);
        e.addSizeOldValues(), this.resizeInfo.push(e);
      }
  }
  resizeDragEnd() {
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragEnd()", "end"), this.resizeInfo.forEach((t) => t.updateSizeNewValues()), this.resizeInfo.some((t) => t.propList.some((e) => In(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ut(this.resizeInfo));
  }
  addDragActionOnResizer(t, e) {
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
      const l = t.width - a, h = t.height - c;
      this.resizeCallback(t.id, r, l, h);
    }).on("end", () => {
      this.resizeDragEnd(), this.iContainer.terminateDrag("drag-node-resize");
    }));
  }
}
function Ma(n) {
  const t = document.createElement("div"), e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = document.createElement("span");
  e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.style.background = "#fff", e.classList.add("ir-fw-svg"), t.classList.add("flowchart", "ir-flowchart"), t.tabIndex = 0, r.className = "ir-flowchart-hidden", r.textContent = "copy-range";
  const i = lt * ta;
  return e.innerHTML = `
<defs>
    <pattern
        id="${n}_small_grid"
        width="${lt}"
        height="${lt}"
        patternUnits="userSpaceOnUse">
        <path
        d="M ${lt} 0 L 0 0 0 ${lt}"
        fill="none"
        stroke="gray"
        stroke-width="0.5"/>
    </pattern>
    <pattern
        id="${n}_grid"
        width="${i}"
        height="${i}"
        patternUnits="userSpaceOnUse">
        <rect
        width="${i}"
        height="${i}"
        fill="url(#${n}_small_grid)"/>
        <path
        d="M ${i} 0 L 0 0 0 ${i}"
        fill="none"
        stroke="gray"
        stroke-width="1"/>
    </pattern>
</defs>`, t.appendChild(e), t.appendChild(r), { div: t, svg: e, span: r };
}
class Ca extends Ye {
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
class Ea extends Ye {
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
const mt = 6, Ia = 2, yn = 5, mn = {
  "ir-fw-top-l": ["start", "TopLeft"],
  "ir-fw-top-c": ["middle", "TopCenter"],
  "ir-fw-top-r": ["end", "TopRight"],
  "ir-fw-bottom-l": ["start", "BottomLeft"],
  "ir-fw-bottom-c": ["middle", "BottomCenter"],
  "ir-fw-bottom-r": ["end", "BottomRight"]
}, ka = ["left", "right", "top", "bottom"], ja = ["nw-resize", "n-resize", "ne-resize", "w-resize", "e-resize", "sw-resize", "s-resize", "se-resize"], Ta = ["is-appending-connection", "drag-con-connector"];
class Ct extends Le {
  svg;
  backgroundRect;
  _connectorManager = new Tt(this._createConnectorElement.bind(this));
  _resizerManager = new Tt(this._createResizerElement.bind(this));
  _commentManager = new Tt(this._createCommentElement.bind(this));
  constructor(t, e, r) {
    super(t, e, r), this.svg = this.containerInterface.getSvg(), this.backgroundRect = this.group.append("rect").attr("opacity", "0");
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
  render() {
    const t = this.data["node.x"] + this.data["node.width"] / 2, e = this.data["node.y"] + this.data["node.height"] / 2;
    this.group.attr("transform", `translate(${t}, ${e})`), this.resizerVisibility ? this._resizerVisibleBackgroundRect() : this.backgroundRect.style("fill", "none"), super.render(), this._renderComments(), this._renderResizer(), this._renderConnector();
  }
  _renderComments() {
    const t = this.dataWrapper, e = t.get("node.commentFontSize"), r = this.width / 2, i = this.height / 2, o = -(i + yn), s = i + yn + e, a = [
      ["ir-fw-top-l", { x: -r, y: o }],
      ["ir-fw-top-c", { x: 0, y: o }],
      ["ir-fw-top-r", { x: r, y: o }],
      ["ir-fw-bottom-l", { x: -r, y: s }],
      ["ir-fw-bottom-c", { x: 0, y: s }],
      ["ir-fw-bottom-r", { x: r, y: s }]
    ];
    for (const [c, { x: l, y: h }] of a) {
      const [f, d] = mn[c], _ = t.get(`node.comment${d}`);
      if (_ === "")
        return this._commentManager.remove(c);
      const w = this._commentManager.getOrCreate(c);
      this.appendIfDetached(w), w.attr("x", l).attr("y", h).attr("font-size", e).text(() => _);
    }
  }
  _renderConnector() {
    this.group.attr("data-connector-visible", this.connectorVisibility.toString());
    const t = this.containerInterface.getSvg().node();
    if (!this.connectorVisibility || !this.isHovered || // 해당 클래스가 있을 때만 connector 표시
    t && !Ta.some((e) => t.classList.contains(e)))
      return this._connectorManager.clear();
    for (const e of ka) {
      const r = this._connectorManager.getOrCreate(e);
      this.appendIfDetached(r);
      const { x: i, y: o } = this._getConnectorPosition(e);
      r.attr("cx", i).attr("cy", o).attr("r", this.dataWrapper.get("node.connectorSize"));
    }
  }
  _renderResizer() {
    for (const t of ja)
      if (this.resizerVisibility && this.containerInterface.getReadOnly() === !1) {
        const e = this._resizerManager.getOrCreate(t);
        this.appendIfDetached(e);
        const { x: r, y: i } = this._getResizerPosition(t);
        e.attr("x", r - mt / 2).attr("y", i - mt / 2);
      } else
        this._resizerManager.remove(t);
  }
  _getLabelXY({ lineHeight: t, length: e }) {
    return { x: 0, y: t - t * e / 2 - Ia };
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
  _createConnectorElement(t) {
    const e = this._getConnectorPosition(t), r = F("svg:circle").attr("cx", e.x).attr("cy", e.y).attr("visibility", "hidden").attr("r", this.dataWrapper.get("node.connectorSize")).attr("class", `ir-fw-connector ir-fw-${t}`);
    return this.containerInterface.hook.emit("connectorCreated", [this.data.id, r]), r;
  }
  _createResizerElement(t) {
    const e = this._getResizerPosition(t), r = F("svg:rect").attr("x", e.x - mt / 2).attr("y", e.y - mt / 2).attr("width", mt).attr("height", mt).attr("fill", "rgb(173, 216, 230)").attr("stroke", "rgb(30, 144, 255)").attr("cursor", t).attr("class", "ir-fw-resizer").classed("ir-fw-active", !0);
    return this.containerInterface.hook.emit("resizerCreated", [this.data.id, r]), r;
  }
  _createCommentElement(t) {
    return F("svg:text").attr("class", `${t} ir-fw-unselectable`).attr("text-anchor", mn[t][0]);
  }
  _getConnectorPosition(t) {
    const e = this.dataWrapper.get("node.connectorGap"), r = this.width / 2, i = this.height / 2;
    return {
      left: { x: -(e + r), y: 0 },
      right: { x: r + e, y: 0 },
      top: { x: 0, y: -(e + i) },
      bottom: { x: 0, y: e + i }
    }[t];
  }
  _getResizerPosition(t) {
    const e = this.width / 2, r = this.height / 2;
    return {
      "nw-resize": { x: -e, y: -r },
      "n-resize": { x: 0, y: -r },
      "ne-resize": { x: e, y: -r },
      "w-resize": { x: -e, y: 0 },
      "e-resize": { x: e, y: 0 },
      "sw-resize": { x: -e, y: r },
      "s-resize": { x: 0, y: r },
      "se-resize": { x: e, y: r }
    }[t];
  }
}
const bn = 5, Bt = 10, Vt = 30, Ut = 30, Aa = /* @__PURE__ */ new Set([
  "TopLeft",
  "TopCenter",
  "TopRight",
  "BottomLeft",
  "BottomCenter",
  "BottomRight"
]);
class Na extends Ye {
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
    const e = this.data["node.commentTopLeft"] || this.data["node.commentTopCenter"] || this.data["node.commentTopRight"] ? bn + this.data["node.commentFontSize"] : 0;
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
    const e = this.data["node.commentBottomLeft"] || this.data["node.commentBottomCenter"] || this.data["node.commentBottomRight"] ? bn + this.data["node.commentFontSize"] : 0;
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
    const t = ar(this.data), e = ke * 2;
    this.width = t.width + e, this.height = t.height + e;
  }
  resizeToNorth(t) {
    const e = -(this.height / 2), r = parseInt(e - t);
    this.height + r >= Ut ? (this.y -= r, this.height = this.height + r) : (this.y += this.height - Ut, this.height = Ut);
  }
  resizeToWest(t) {
    const e = -(this.width / 2), r = parseInt(e - t);
    this.width + r >= Vt ? (this.x -= r, this.width = this.width + r) : (this.x += this.width - Vt, this.width = Vt);
  }
  addComment(t, e, r) {
    if (!Aa.has(e))
      throw new Error(`Unknown position value '${e}' Please call with 'TopLeft' or 'TopCenter' or 'TopRight' or 'BottomLeft' or 'BottomCenter' or 'BottomRight'`);
    let i = `node.comment${e}`;
    r && (i += `.${r}`), this.data[i] = t;
  }
  resizeToEast(t) {
    this.width = Math.max(Vt, parseInt(t + this.width / 2));
  }
  resizeToSouth(t) {
    this.height = Math.max(Ut, parseInt(t + this.height / 2));
  }
  isContained(t, e) {
    return t >= this.startX && t <= this.endX && e >= this.startY && e <= this.endY;
  }
  isContainedOnPos(t, e, r) {
    const { x: i, y: o } = this.getPositionXY(t), [s, a, c, l] = [
      i - Bt,
      i + Bt,
      o - Bt,
      o + Bt
    ];
    return e >= s && e <= a && r >= c && r <= l;
  }
}
const Da = '{"objects": []}', wn = {}, be = {
  saveData(n) {
    gr(wn, n);
  },
  loadData() {
    return fr(wn) ?? Da;
  }
}, za = 10, Pa = 10, Ra = 500, $a = 200;
class Ha {
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
      textCache: new or()
    }, this.isFirefox = window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  }
  initCommonMouseOverOutAction(t) {
    let e = 0, r = 0;
    t.g.on("mousemove", (i) => {
      e = i.offsetX + za, r = i.offsetY + Pa;
    }).on("mouseover", () => {
      t.isHovered = !0, this.containerInterface.getSelectNodeOnHover() && t.type === "node" && !this.containerInterface.isDragging() && (this.containerInterface.releaseAllObjects(), t.select(!0)), !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOutTimer != null && this.tooltip.mouseOutTimer.stop(), this.tooltip.mouseOverTimer = oe(() => {
        t.isHovered && t.onEditing === !1 && t.id !== this.tooltip.objId && !this.containerInterface.getTooltipHidden() && this.createTooltipObj(t.data, e, r);
      }, Ra));
    }).on("mouseout", () => {
      t.isHovered = !1, !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOverTimer != null && this.tooltip.mouseOverTimer.stop(), this.tooltip.mouseOutTimer = oe(
        () => void (!t.isHovered && this.removeTooltipObj()),
        $a
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
    }, s = ar(o);
    o.width = Math.min(s.width, i.data.tooltipMaxWidth);
    const a = Xe(o);
    this.tooltip.g.append("rect").attr("x", e).attr("y", r).attr("rx", "4").attr("width", o.width + o.padding * 2).attr("height", a.lineHeight * a.length + o.padding * 2).attr("fill", o.fill).attr("stroke", o.borderColor).attr("stroke-width", o.borderWidth).attr("stroke-dasharray", o.borderDash);
    const c = this.tooltip.g.append("text").attr("fill", o.foreColor).attr("font-size", o.fontSize).attr("text-decoration", o.textDecoration);
    hr(
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
class Xa extends Ct {
  _body = this.group.append("rect");
  constructor(t, e) {
    super(t, "bridge", e);
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this._body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", (e + r) / 6).style("width", `${e}px`).style("height", `${r}px`).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash"));
  }
}
const bt = 15, La = -4, Ya = 2;
class Fa extends Ct {
  _body = this.group.append("path").attr("class", "body").classed(this.data.type, !0);
  constructor(t, e) {
    super(t, "comment", e);
  }
  _getPath() {
    const t = [], e = this.width / 2, r = this.height / 2, i = -e, o = -r;
    return t.push(`M${i} ${o}`), t.push(`L${e - bt} ${o}`), t.push(`L${e},${o + bt}`), t.push(`L${e},${r}`), t.push(`L${i},${r}`), t.push("Z"), t.push(`M${e - bt} ${o}`), t.push(`L${e - (bt + La)} ${o + (bt + Ya)}`), t.push(`L${e} ${o + bt}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this._body.attr("d", this._getPath()).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash")), this._renderText();
  }
}
const Ba = 0.28;
class Va extends Ct {
  _circle = this.group.append("ellipse");
  _body = this.group.append("path");
  constructor(t, e) {
    super(t, "db", e);
  }
  get circleHeight() {
    return this.height * Ba;
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
    this._circle.attr("cx", 0).attr("cy", o).attr("rx", r).attr("ry", e).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this._body.attr("d", this._getPath()).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this._renderText();
  }
}
const Ua = ["source", "destination"];
class dr extends Le {
  _checkChanged = {
    srcX: 0,
    srcY: 0,
    desX: 0,
    desY: 0
  };
  _path = null;
  _connectorManager = new Tt(this._createConnector.bind(this));
  constructor(t, e, r) {
    super(t, e, r);
  }
  /** 자식 클래스에서 호출 (가장 상위에 그리기 위함) */
  _createPath() {
    this._path = this.group.append("path");
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
  _createConnector(t) {
    const e = F("svg:circle").attr("cursor", "crosshair");
    return this.containerInterface.hook.emit("connectionConnectorCreated", [this.data.id, e, t]), e;
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
    const t = this._textMgr.element?.node();
    return t && t instanceof SVGTextElement ? t.getBBox() : { x: 0, y: 0, width: 0, height: 0 };
  }
  _getLabelRect() {
    const t = this._getBBox(), e = t.width + 10, r = t.height + 10;
    return {
      x: this.textCache.x - e / 2,
      y: this.textCache.y - 5 - this.data.fontSize,
      width: e,
      height: Math.max(r, this.data.fontSize + 10)
    };
  }
  render() {
    super.render(), this._renderConnector();
  }
  _renderArrow(t, e) {
    const r = this.dataWrapper, i = r.get("connection.arrowSize"), o = r.get("connection.arrowFill"), s = r.get("connection.arrowBorderColor"), a = r.get("connection.arrowBorderWidth"), c = r.get("connection.arrowType"), l = this.data["connection.points"];
    if (!l || l.length < 2) return;
    const { x: h, y: f } = l[this.lastPointId];
    let d = h - t, _ = f - e, w = Math.hypot(d, _);
    w === 0 && (d = 1, _ = 0, w = 1);
    const M = d / w, k = _ / w, b = i + a, j = b / 2;
    let T = "";
    if (c === "triangle") {
      const p = h - M * a, S = f - k * a, C = p - M * b, E = S - k * b, N = -k, R = M, X = C + N * j, $ = E + R * j, _t = C - N * j, yt = E - R * j;
      T = `M${p},${S} L${X},${$} L${_t},${yt} Z`;
    } else if (c === "circle") {
      const p = (b - a) / 2, S = h, C = f;
      T = `M${S + p},${C} a${p},${p} 0 1,0 ${-2 * p},0 a${p},${p} 0 1,0 ${2 * p},0`;
    } else
      throw new Error(`unknown arrowType '${c}'`);
    this._path && this._path.attr("d", T).attr("fill", o).attr("stroke", s).attr("stroke-width", a);
  }
  _renderConnector() {
    const t = this.dataWrapper;
    this.subUiVisibility === "visible" ? Ua.forEach((e) => {
      const r = this._connectorManager.getOrCreate(e);
      this.appendIfDetached(r);
      const { x: i, y: o } = e === "source" ? this._getSourceLoc() : this._getDestinationLoc();
      r.attr("cx", i).attr("cy", o).attr("r", t.get("connection.connectorSize")).attr("fill", t.get("connection.connectorFill"));
    }) : this._connectorManager.clear();
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
    this._checkChanged.srcX = t.x, this._checkChanged.srcY = t.y, this._checkChanged.desX = e.x, this._checkChanged.desY = e.y;
  }
  _updatePoints(...t) {
    this.data["connection.points"] === void 0 || this.data["connection.points"] === null ? this.data["connection.points"] = [] : this.data["connection.points"].splice(
      0,
      this.data["connection.points"].length
    ), t.forEach((e) => this.data["connection.points"].push(e));
  }
  _isChanged(t, e) {
    try {
      const r = this.data["connection.sourceObjId"], i = this.data["connection.destinationObjId"];
      if (r != null && i != null && r === i)
        return this._checkChanged.srcX !== t.x || this._checkChanged.srcY !== t.y || this._checkChanged.desX !== e.x || this._checkChanged.desY !== e.y;
      {
        const s = this._checkChanged.srcX - this._checkChanged.desX, a = t.x - e.x, c = this._checkChanged.srcY - this._checkChanged.desY, l = t.y - e.y;
        return s !== a || c !== l;
      }
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
        const o = this._getPosLocation(i, e), s = da(i.renderer.group.attr("transform"));
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
class Wa extends dr {
  _line = this.group.append("line");
  _wideLine = this.group.append("line").attr("class", "wide-line").style("stroke", "rgba(0, 0, 0, 0)");
  _textRectMgr = new ht(() => F("svg:rect"));
  constructor(t, e) {
    super(t, "direct", e), this._createPath();
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
    this._isChanged(r, i) && this._updatePoints(r, i), this._line.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke", o.borderColor).style("stroke-width", o.borderWidth).style("stroke-dasharray", o.borderDash), this._wideLine.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke-width", Math.max(o.borderWidth, 5));
    const s = e[this.lastPointId - 1];
    if (this._renderArrow(s.x, s.y), this._renderText(), o.text) {
      const a = this._getBBox(), c = a.width + 10, l = a.height + 10, h = this._textRectMgr.getOrCreate();
      this.insertBeforeIfDetached(h, "foreignObject"), this._textMgr.element?.raise(), h.attr("x", a.x - 5).attr("y", a.y - 5).attr("width", c).attr("height", l).style("fill", o.fill).style("stroke", o.textBorderColor).style("stroke-width", o.textBorderWidth).style("stroke-dasharray", o.textBorderDash);
    } else
      this._textRectMgr.remove();
  }
}
const Wt = 20, wt = 10;
class qa extends dr {
  elbowMap = {
    top: this._topTo,
    bottom: this._bottomTo,
    left: this._leftTo,
    right: this._rightTo
  };
  _polyline = this.group.append("polyline").attr("fill", "none");
  _wideLine = this.group.append("polyline").attr("fill", "none").style("stroke", "rgba(0, 0, 0, 0)");
  _textRectMgr = new ht(() => F("svg:rect"));
  _adjustMgr = new Tt(this._createAdjustElement.bind(this));
  constructor(t, e) {
    super(t, "elbow", e), this._createPath();
  }
  _getNextXY(t, e) {
    switch (t) {
      case "left":
        return { x: e.x - Wt, y: e.y };
      case "right":
        return { x: e.x + Wt, y: e.y };
      case "top":
        return { x: e.x, y: e.y - Wt };
      case "bottom":
        return { x: e.x, y: e.y + Wt };
      default:
        throw new Error(`Unknown pos '${t}'`);
    }
  }
  *_topTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
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
        t.x < e.x ? t.y < e.y && (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: l }) : t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: l }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 });
        break;
      }
      case "right": {
        t.x < e.x ? t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: l }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : t.y < e.y && (yield { x: (r.x + s) / 2, y: r.y }, yield { x: s, y: l });
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_bottomTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
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
        t.y < e.y ? t.x > e.x && (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : (yield { x: c, y: r.y }, yield { x: i.x, y: l });
        break;
      }
      case "right": {
        if (t.y < e.y) {
          if (t.x < e.x) {
            const h = (r.y + l) / 2;
            yield { x: c, y: h }, yield { x: i.x, y: (h + i.y) / 2 };
          }
        } else
          yield { x: c, y: r.y }, yield { x: i.x, y: l };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_leftTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }) : t.x < e.x ? (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
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
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: (a + i.y) / 2 }) : t.x < e.x ? (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: l }, yield { x: c, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
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
    const o = this._getNextXY(r, t), s = this._getNextXY(i, e), a = [];
    if (!r) throw new Error("srcPosition nothing");
    const c = this.elbowMap[r];
    if (a.push({ x: t.x, y: t.y }), c === void 0)
      console.error(`unknown position value '${r}'`);
    else
      for (const l of c(t, e, o, s, i))
        a.push(l);
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
  _createAdjustElement(t) {
    return F("svg:rect").attr("width", wt).attr("height", wt).attr("class", "adjuster").attr("cursor", "move");
  }
  _getPos(t, e) {
    const r = {
      srcPos: this.data["connection.sourcePos"],
      desPos: this.data["connection.destinationPos"]
    }, i = Math.abs(t.y - e.y), o = Math.abs(t.x - e.x);
    return r.srcPos || (i > o ? r.srcPos = t.y > e.y ? "top" : "bottom" : r.srcPos = t.x > e.x ? "left" : "right"), r.desPos || (i > o ? r.desPos = t.y > e.y ? "bottom" : "top" : r.desPos = t.x > e.x ? "right" : "left"), r;
  }
  _getLabelXY(t) {
    const e = this._getLabelPos(this._getPolylinePath(this.data["connection.points"]));
    return {
      x: e.x,
      y: e.y + (this.data.fontSize - this.data.fontSize * t.length / 2)
    };
  }
  _renderAdjustList(t) {
    const e = this.data;
    let r = this._getFirstPointDir() === "v";
    this._adjustMgr.clear(), t.forEach((i, o) => {
      const s = this._adjustMgr.getOrCreate(String(o));
      this.appendIfDetached(s), s.raise();
      const a = !r;
      let c = 0, l = 0, h = null;
      r = !r, s.attr("x", i.x - wt / 2).attr("y", i.y - wt / 2).call(st().filter(() => this.containerInterface.getReadOnly() === !1).on("start", (f) => {
        ot(f.sourceEvent.target), c = f.x, l = f.y, h = je(this.data["connection.points"]), this.containerInterface.adjDragStartCallback();
      }).on("drag", (f) => {
        const d = e["connection.points"], _ = d[o + 1];
        if (a) {
          const w = c - f.x;
          _.x -= w, c = f.x, s.attr("x", _.x - wt / 2), o > 0 && (d[o].x -= w / 2), o + 3 < d.length && (d[o + 2].x -= w / 2);
        } else {
          const w = l - f.y;
          _.y -= w, l = f.y, s.attr("y", _.y - wt / 2), o > 0 && (d[o].y -= w / 2), o + 3 < d.length && (d[o + 2].y -= w / 2);
        }
        this._render();
      }).on("end", () => {
        this.containerInterface.adjDragEndCallback(
          this.data,
          h,
          je(this.data["connection.points"])
        );
      }));
    });
  }
  _render() {
    const t = this.data, e = this.dataWrapper, r = this._getSourceLoc(), i = this._getDestinationLoc();
    if (this._isChanged(r, i)) {
      const c = this._getPos(r, i), l = this._getElbowPoints(r, i, c.srcPos, c.desPos);
      this._updatePoints(...l);
    }
    const o = this._getPolylinePath(t["connection.points"]), s = o.map((c) => `${c[0]},${c[1]}`).join(", "), a = o[o.length - 2];
    if (this._renderArrow(a[0], a[1]), this._polyline.attr("points", s).style("stroke", e.get("borderColor")).style("stroke-width", e.get("borderWidth")).style("stroke-dasharray", e.get("borderDash")), this._wideLine.attr("points", s).style("stroke-width", Math.max(e.get("borderWidth"), 5)), this._renderText(), t.text) {
      const c = this._getBBox(), l = c.width + 10, h = c.height + 10, f = this._textRectMgr.getOrCreate();
      this.insertBeforeIfDetached(f, "foreignObject"), this._textMgr.element?.raise(), f.attr("x", c.x - 5).attr("y", c.y - 5).attr("width", l).attr("height", h).style("fill", e.get("connection.textBorderFill")).style("stroke", e.get("connection.textBorderColor")).style("stroke-width", e.get("connection.textBorderWidth")).style("stroke-dasharray", e.get("connection.textBorderDash"));
    } else
      this._textRectMgr.remove();
    !this.isEditMode && this.subUiVisibility === "visible" ? this._renderAdjustList(this.data["connection.points"].slice(1, -1)) : this._adjustMgr.clear();
  }
}
class Ga extends Le {
  _rectMgr = new ht(this._createRectElement);
  _thickRectMgr = new ht(this._createThickRectElement);
  constructor(t, e) {
    super(t, "group", e);
  }
  _render() {
    const t = this.data["group.rect"], e = this.dataWrapper;
    if (this.data.isSelected || this.data["group.borderAlwaysAppearance"]) {
      const r = e.get("borderWidth"), i = this._rectMgr.getOrCreate(), o = this._thickRectMgr.getOrCreate();
      this.appendIfDetached(i), this.appendIfDetached(o), i.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", e.get("borderColor")).attr("stroke-width", r).attr("stroke-dasharray", e.get("borderDash")), o.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", "white").attr("stroke-width", Math.max(r, 8));
    } else
      this._rectMgr.remove(), this._thickRectMgr.remove();
  }
  _createRectElement() {
    return F("svg:rect").attr("fill", "none");
  }
  _createThickRectElement() {
    return F("svg:rect").attr("fill", "none").attr("opacity", "0");
  }
}
class Ka extends Ct {
  _body = this.group.append("polygon");
  constructor(t, e) {
    super(t, "if", e);
  }
  getPolygon() {
    const t = [], e = this.width / 2, r = this.height / 2;
    return t.push(`${-e},0`), t.push(`0,${-r}`), t.push(`${e},0`), t.push(`0,${r}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this._body.attr("points", this.getPolygon()).attr("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).attr("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._renderText();
  }
}
class Za extends Ct {
  _body = this.group.append("rect");
  constructor(t, e) {
    super(t, "return", e);
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this._body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", t.get("node.borderRadius")).attr("width", e).attr("height", r).style("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._renderText();
  }
}
class Ja extends Ct {
  _body = this.group.append("rect");
  constructor(t, e) {
    super(t, "start", e);
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this._body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", r / 2).attr("width", e).attr("height", r).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")).attr("stroke", t.get("borderColor")), this._renderText();
  }
}
class Qa {
  nodeRenderMap = /* @__PURE__ */ new Map();
  connectionRenderMap = /* @__PURE__ */ new Map();
  etcRenderMap = /* @__PURE__ */ new Map();
  constructor() {
    this.nodeRenderMap.set("start", Ja), this.nodeRenderMap.set("if", Ka), this.nodeRenderMap.set("return", Za), this.nodeRenderMap.set("comment", Fa), this.nodeRenderMap.set("bridge", Xa), this.nodeRenderMap.set("db", Va), this.connectionRenderMap.set("direct", Wa), this.connectionRenderMap.set("elbow", qa), this.etcRenderMap.set("group", Ga);
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
class tc {
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
const ec = {
  ...nr,
  ...rr,
  ...ir,
  ...ue
};
function nc(n) {
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
function xn(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    pos: null
  };
  for (const r of se) {
    const i = t.getPositionXY(r), o = cr(i, n);
    o < e.dist && (e.dist = o, e.pos = r);
  }
  return e.pos;
}
function rc(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    sourcePos: "",
    destinationPos: ""
  };
  for (const r of se)
    for (const i of se) {
      const o = n.getPositionXY(r), s = t.getPositionXY(i), a = cr(o, s);
      a < e.dist && (e.dist = a, e.sourcePos = r, e.destinationPos = i);
    }
  return e;
}
function ic(n) {
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
const oc = 255, vn = 8, On = 8, we = "ir-style/flowchart", Sn = 0.4, Mn = 3, qt = 5, sc = /* @__PURE__ */ new Set(["isHovered", "isSelected"]), it = lt;
class pc extends br {
  _defaultFontFamily;
  _wheelZoom = !0;
  _gridMode = !1;
  _editMode = !1;
  _readonly = !1;
  _simpleConnectingMode = !1;
  _moveScreenOnSelect = !1;
  _selectNodeOnHover = !1;
  _tooltipHidden = !1;
  _traceMode = !1;
  _singleSelection = !1;
  _isChanged = !1;
  _isDragging = !1;
  _canvasMoveMode = !1;
  _fitSizeMode = !1;
  // DOM 감싸는 영역(wrapper) 레이아웃 사이즈
  _wrapperSize = { width: 0, height: 0 };
  // 내부 svg 컨텐츠 사이즈
  _svgSize = { width: 0, height: 0 };
  // appendMode context 저장
  _appendMode = { mode: null, data: null, dragged: !1 };
  _appendingObject = null;
  _selection = {
    rect: null,
    startX: 0,
    startY: 0
  };
  _cursorStatus = { curPosX: 0, curPosY: 0, isDragging: !1 };
  // 이전에 hover한 node 정보
  _prevHoveredNode = null;
  _div;
  _copySpan;
  _objectManager;
  _containerInterface;
  _renderManager;
  _seqMng;
  _objMouseHandler;
  _actionController;
  _moveHandler;
  _resizeHandler;
  _hook = ur();
  _refreshSvgDebounce;
  theme;
  /**
   * `IRFlowchart`는 `class` 형태로 제공된다. 그러므로, new 키워드를 이용하여 생성자 인자에 맞는 객체 인스턴스를 생성하여 사용한다.\
   * 생성자 인자는 `IRFlowchartArgs`라는 단일 타입으로 정의된다.
   */
  constructor(t) {
    super({ contextElement: t.contextElement });
    const {
      contextElement: e,
      width: r,
      height: i,
      theme: o,
      fitSizeMode: s = !1
    } = t;
    this._fitSizeMode = s, this._logger = ma(this.uuid.substring(0, 4)), this.keyMap = {
      ArrowLeft: [() => this.handleKeydownArrows(-it, 0)],
      ArrowRight: [() => this.handleKeydownArrows(it, 0)],
      ArrowDown: [() => this.handleKeydownArrows(0, it)],
      ArrowUp: [() => this.handleKeydownArrows(0, -it)],
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
      "^x": [() => this._beforeCopyPaste(), !0],
      "^X": [() => this._beforeCopyPaste(), !0],
      "^c": [() => this._beforeCopyPaste(), !0],
      "^C": [() => this._beforeCopyPaste(), !0],
      "^v": [() => this._beforeCopyPaste(), !0],
      "^V": [() => this._beforeCopyPaste(), !0]
    }, this.emitter = ic(this);
    const { div: a, svg: c, span: l } = Ma(this.uuid);
    this._div = a, this._copySpan = l, a.addEventListener("keydown", (h) => {
      if (this._editMode || this._readonly) {
        this._logger.debug("InnoFlowchart.handleKeydown()", "Cancel because of editMode or readonly mode");
        return;
      }
      const f = `${h.ctrlKey ? "^" : ""}${h.key}`, d = this.keyMap[f];
      d && (d[1] !== !0 && h.preventDefault(), d[0](h));
    }), a.addEventListener("copy", this._onNativeCopy.bind(this)), a.addEventListener("cut", this._onNativeCut.bind(this)), a.addEventListener("paste", this._onNativePaste.bind(this)), this.addCoreElement(a), e.appendChild(a), this._initD3Elements(a, c, r, i), this._containerInterface = {
      // Manipulation API
      releaseAllObjects: () => this.releaseAllObjects(),
      addRenderObj: (h) => this.add(h),
      removeObject: (h) => this.remove(h),
      initDrag: (h) => this._initDrag(h),
      terminateDrag: (h) => this._terminateDrag(h),
      isDragging: () => this._isDragging,
      changeObjRender: (h, f) => this._changeObjRender(h, f),
      // Callback
      adjDragStartCallback: () => this._adjDragStartCallbackHandler(),
      adjDragEndCallback: (h, f, d) => this._adjDragEndCallbackHandler(h, f, d),
      editTextCallback: (h, f, d) => this._editTextCallbackHandler(h, f, d),
      editTextModeCallback: (h) => this._editTextModeCallback(h),
      renderCallback: (h) => this._renderCallBack(h),
      observerCallback: (h) => this._observerCallback(h),
      selectCallback: (h, f, d) => this._selectCallbackHandler(h, f, d),
      releaseCallback: (h, f) => this._releaseCallbackHandler(h, f),
      // getter / setter
      setEditMode: (h) => this._editMode = h,
      getSvg: () => this.d3Svg,
      getLogger: () => this._logger,
      getObjectOrNull: (h) => this.getObjectOrNull(h),
      getSelectNodeOnHover: () => this._selectNodeOnHover,
      getTooltipHidden: () => this._tooltipHidden,
      getReadOnly: () => this._readonly,
      isAppending: () => this._appendMode.mode === "append",
      getUUID: () => this.uuid,
      hook: this._hook
    }, this._objectManager = new va(), this._renderManager = new Qa(), this._seqMng = new tc(this._containerInterface), this._objMouseHandler = new Ha(this._containerInterface), this._actionController = new Qs(this._containerInterface, oc), this._moveHandler = new Oa(this._actionController, this._objectManager, this._containerInterface), this._resizeHandler = new Sa(this._actionController, this._objectManager, this._containerInterface), this._defaultFontFamily = getComputedStyle(this.contextElement).fontFamily, this._refreshSvgDebounce = pr(() => this.refreshSvgSize()), this.theme = {
      ...ec,
      ...o
    }, this.defaultRule = pa, this.zoomTo(1), this.render(), this._initHook();
  }
  /**
   * @returns 문자열 "flowchart"를 반환한다.
   */
  get componentLabel() {
    return "flowchart";
  }
  /**
   * @returns 현재 flowchart가 렌더링된 HTMLElement를 반환한다.
   */
  get div() {
    return this._div;
  }
  /**
   * @returns 현재 flowchart가 렌더링된 svg요소를 반환한다.
   */
  get svgElement() {
    return this.d3Svg.node();
  }
  /**
   * @returns 현재 flowchart의 undo와 redo 스택을 가지고 있는 ActionController를 반환한다.
   */
  get actionController() {
    return this._actionController;
  }
  /**
   * 현재 flowchart가 읽기 전용 모드인지 확인한다.
   */
  get readonly() {
    return this._readonly;
  }
  /**
   * 현재 flowchart가 연결선 최단 거리 자동 설정 모드인지 확인한다.
   */
  get simpleConnectingMode() {
    return this._simpleConnectingMode;
  }
  /**
   * 현재 flowchart가 마우스 상호작용 비활성화 모드인지 확인한다.
   */
  get editMode() {
    return this._editMode;
  }
  /**
   * 현재 flowchart가 눈금선 모드인지 확인한다.
   */
  get gridMode() {
    return this._gridMode;
  }
  /**
   * 현재 flowchart가 툴팁 숨김 모드인지 확인한다.
   */
  get tooltipHidden() {
    return this._tooltipHidden;
  }
  /**
   * 현재 flowchart에 설정된 fitSizeMode를 확인한다.\
   * flowchart를 생성할 때만 설정 가능하며, setter로 설정할 수 없다.
   */
  get fitSizeMode() {
    return this._fitSizeMode;
  }
  /**
   * 현재 flowchart가 노드 선택 시 스크롤 중앙 이동 모드인지 확인한다.
   */
  get moveScreenOnSelect() {
    return this._moveScreenOnSelect;
  }
  /**
   * 현재 flowchart가 마우스 hover시 노드 선택 모드인지 확인한다.
   */
  get selectNodeOnHover() {
    return this._selectNodeOnHover;
  }
  /**
   * 현재 flowchart가 ctrl + 마우스 wheel로 줌을 할 수 있는 모드인지 확인한다.
   */
  get wheelZoom() {
    return this._wheelZoom;
  }
  /**
   * 현재 flowchart가 디버그 모드인지 확인한다.
   */
  get traceMode() {
    return this._traceMode;
  }
  /**
   * 현재 flowchart가 단일 선택 모드인지 확인한다.
   */
  get singleSelection() {
    return this._singleSelection;
  }
  /**
   * 현재 flowchart의 읽기 전용 모드를 설정한다.\
   * `true` 할당 시, flowchart 모든 요소의 편집이 제한된다.
   */
  set readonly(t) {
    this._readonly !== t && (this._readonly = t, this.classedOnSvg(t, "readonly"), this._logger.info(`readonly property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 연결선 최단 거리 자동 설정 모드를 설정한다.\
   * `true` 할당 시, 노드를 조작할 때 노드간 연결선을 최단 거리로 자동으로 설정한다.
   */
  set simpleConnectingMode(t) {
    this._simpleConnectingMode !== t && (this._simpleConnectingMode = t, this.classedOnSvg(t, "simple"), this._logger.info(`simpleConnectingMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 마우스 상호작용 비활성화 모드를 설정한다.\
   * `true` 할당 시, flowchart 내부 요소의 마우스 상호작용이 비활성화 된다.
   */
  set editMode(t) {
    this._editMode !== t && (this._editMode = t, this.classedOnSvg(t, "edit-mode"), this._logger.info(`editMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 눈금선 모드를 설정한다.\
   * `true` 할당 시, flowchart 내부 패널에 눈금선을 보여준다.
   */
  set gridMode(t) {
    this._gridMode !== t && (this._gridMode = t, this.d3Grid.attr("visibility", this._gridMode ? "visible" : "hidden"), this.classedOnSvg(t, "flowchart-grid"), this._logger.info(`gridMode property is changed to '${t}'`), this.render());
  }
  /**
   * 현재 flowchart의 툴팁 숨김 모드를 설정한다.\
   * `true` 할당 시, flowchart의 툴팁이 숨김 처리된다.
   */
  set tooltipHidden(t) {
    this._tooltipHidden !== t && (this._tooltipHidden = t, this.classedOnSvg(t, "ir-fw-tooltip-hidden"), this._logger.info(`tooltipHidden property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 노드 선택 시 스크롤 중앙 이동 모드를 설정한다.\
   * `true` 할당 시, flowchart의 노드 선택 시 스크롤을 이동하여 노드를 중앙에 위치시킨다.
   */
  set moveScreenOnSelect(t) {
    this._moveScreenOnSelect !== t && (this._moveScreenOnSelect = t, this.classedOnSvg(t, "move-screen-on-select"), this._logger.info(`moveScreenOnSelect property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 마우스 hover시 노드 선택 모드를 설정한다.\
   * `true` 할당 시, flowchart의 노드가 마우스 hover시에도 선택된다.
   */
  set selectNodeOnHover(t) {
    this._selectNodeOnHover !== t && (this._selectNodeOnHover = t, this.classedOnSvg(t, "select-node-on-hover"), this._logger.info(`selectNodeOnHover property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 ctrl + 마우스 wheel로 줌을 할 수 있는 모드인지를 설정한다.\
   * 기본적으로 `true`가 할당되어 있으며, `false` 할당 시 flowchart 패널 내에서 ctrl + 마우스 wheel 줌은 동작하지 않는다.
   */
  set wheelZoom(t) {
    this._wheelZoom !== t && (this._wheelZoom = t, this.classedOnSvg(t, "wheel-zoom"), this._logger.info(`wheelZoom property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 디버그 모드를 설정한다.\
   * `true` 할당 시, 노드에 대한 자세한 로그를 확인할 수 있다.
   */
  set traceMode(t) {
    this._traceMode !== t && (this._logger.logLevel = t ? "INFO" : "ERROR", this._traceMode = t, this.classedOnSvg(t, "trace"), this._logger.info(`traceMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 단일 선택 모드를 설정한다.\
   * `true` 할당 시, 요소의 단일 선택만을 허용한다.
   */
  set singleSelection(t) {
    this._singleSelection !== t && (this._singleSelection = t, this.classedOnSvg(t, "single-select"), this._logger.info(`singleSelection property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 캔버스 이동 모드를 설정한다.\
   * `true` 할당 시, flowchart의 내부 패널을 드래그 시 캔버스를 이동시킬 수 있다.
   */
  set canvasMoveMode(t) {
    this._canvasMoveMode !== t && (this._canvasMoveMode = t, this.classedOnSvg(t, "canvas-move"), this._logger.info(`canvasMoveMode property is changed to '${t}'`));
  }
  _onNativeCopy(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCopy()"), ge(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(we, JSON.stringify(this._getClipInfo())), t.preventDefault());
  }
  _onNativeCut(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCut()"), this.getSelectedObjects().length !== 0 && (ge(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(we, JSON.stringify(this._getClipInfo())), this.removeSelected(), t.preventDefault()));
  }
  _onNativePaste(t) {
    if (t.__IGNORE__) return;
    if (this._logger.info("InnoFlowchart.#onNativePaste()"), ge(t.clipboardData, new Error("no clipboardData")), this._editMode || this._appendMode.mode != null) {
      this._logger.debug("InnoFlowchart.paste()", "Could not paste because of edit or append mode");
      return;
    }
    const e = t.clipboardData.getData(we);
    if (!e) return this._logger.warn("InnoFlowchart.#onNativePaste()", "no data");
    this._createPastingObjs(JSON.parse(e)), t.preventDefault();
  }
  _onContextMenu(t) {
    const e = () => {
      if (!(t.target instanceof Element)) return;
      const r = _r("[data-obj-id]", "svg", t.target);
      if (!r) return;
      const i = r.getAttribute("data-obj-id"), o = this.getObjectOrNull(i) ?? this.getObjectOrNull(parseInt(i, 10));
      o?.isSelected || (this.releaseAllObjects(), o.select());
    };
    t.preventDefault(), e(), this.$emit(D.CONTEXT_MENU, t);
  }
  _initD3Elements(t, e, r, i) {
    t.addEventListener("contextmenu", (c) => this._onContextMenu(c));
    const o = isNaN(r) ? r : `${r}px`, s = isNaN(i) ? i : `${i}px`;
    this.d3Div = Y(t).style("width", o).style("height", s), this.d3Svg = Y(e).on("mousemove", (c) => this._mouseMoveOnSheetHandler(c)).on("click", (c) => this._clickOnSheetHandler(c)).call(st().filter((c) => c.button === 0 && this._editMode === !1).on("start", (c) => {
      ot(this.contextElement), this._dragController(c);
    }).on("drag", (c) => this._dragController(c)).on("end", (c) => this._dragController(c))), this.d3Grid = this.d3Svg.append("g").attr("transform", "translate(-1, -1)").attr("class", "flowchart-grid").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", `url(#${this.uuid}_grid)`).attr("visibility", "hidden"), this.d3Container = this.d3Svg.append("g").attr("class", "container");
    const a = Js().filter((c) => this._wheelZoom && c.type === "wheel" && c.ctrlKey).wheelDelta((c) => -c.deltaY * (c.deltaMode === 1 ? 0.05 : c.deltaMode ? 1 : 2e-3)).scaleExtent([Sn, Mn]).on("zoom", (c) => this.zoomTo(c.transform.k));
    this.d3Div.call(a).on("dblclick.zoom", null), this._div.__zoom = { ...this._div.__zoom };
  }
  _initHook() {
    this._hook.addHook("resizerCreated", (t, e) => {
      const r = this.getObjectOrNull(t);
      r && this._resizeHandler.addDragActionOnResizer(r, e);
    }), this._hook.addHook("connectorCreated", (t, e) => {
      const r = this.getObjectOrNull(t);
      r && this._addDragActionOnConnector(r, e);
    }), this._hook.addHook("connectionConnectorCreated", (t, e, r) => {
      const i = this.getObjectOrNull(t);
      i && this._addDragActionOnConnectionConnector(i, e, r);
    });
  }
  _beforeCopyPaste() {
    const t = window.getSelection();
    if (!t) return;
    const e = document.createRange();
    e.selectNodeContents(this._copySpan), t.removeAllRanges(), t.addRange(e);
  }
  /**
   * 이벤트를 발생시키고, 등록된 핸들러를 실행한다.
   *
   * @example
   * ```ts
   * flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
   *   console.log(EVENT_TYPE.CLICK, x, y);
   * } );
   *
   * // click 이벤트를 발생시키고, $on에 등록된 핸들러를 실행한다.
   * flowchart.$emit( EVENT_TYPE.CLICK, { x: 100, y: 200 } );
   * ```
   */
  $emit(t, ...e) {
    this.emitter.emit(t, e);
  }
  /**
   * 이벤트 리스너를 등록하여 특정 이벤트 발생 시 실행할 콜백을 지정한다.
   *
   * @example
   * ```ts
   * flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
   *    console.log(EVENT_TYPE.CLICK, x, y);
   * } );
   * ```
   */
  $on(t, e) {
    return this.emitter.on(t, e);
  }
  /**
   * 등록된 이벤트 리스너를 제거한다.
   *
   * @example
   * ```ts
   * flowchart.$off( EVENT_TYPE.CLICK, () => {
   *    console.log(EVENT_TYPE.CLICK);
   * } );
   * ```
   */
  $off(t, e) {
    return this.emitter.off(t, e);
  }
  moveWrapper(t) {
    try {
      this._moveHandler.moveStartHandler(), t(), this._updateNegativePos();
    } finally {
      this._moveHandler.moveEndHandler(), this.refreshSvgSize();
    }
  }
  /**
   * flowchart의 svg 요소에 defs 요소를 추가한다.
   *
   * @param defsElement 추가할 defs 요소
   */
  addSvgDefs(t) {
    this.d3Svg.node().appendChild(t);
  }
  /**
   * flowchart의 svg 요소에 linearGradient 요소를 추가한다.
   *
   * @param id linearGradient의 id
   * @param rotate gradient의 회전 각도
   * @param offsets gradient의 offset 값
   * @param colors gradient의 색상 값
   */
  addLinearGradientDefs(t, e, r, i) {
    if (typeof r.length != "number" || typeof i.length != "number")
      throw new Error("it must be an array type both offsets and colors!");
    const o = document.createElementNS("http://www.w3.org/2000/svg", "defs"), s = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    s.id = t, s.setAttribute("gradientTransform", `rotate(${e})`), wr(r, i).forEach(([a, c]) => {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      l.setAttribute("offset", a), l.setAttribute("stop-color", c), s.appendChild(l);
    }), o.appendChild(s), this.addSvgDefs(o);
  }
  /**
   * flowchart에 새로운 오브젝트를 추가한다.
   *
   * @param data 추가할 오브젝트의 정보
   * @param zIndex 오브젝트의 정렬 순서 (오브젝트는 작성 순서대로 이전의 오브젝트보다 앞쪽에 위치)
   *
   * @example
   * ```ts
   * const startNode = flowchart.add( {
   *      type: "node",
   *      render: "start",
   * } );
   * ```
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
    this.defaultRule(t, this._defaultFontFamily), fn(t, this.theme);
    let r = null;
    const i = this._renderManager.getRenderConstructor(
      t.type,
      t.render
    ), o = new i(t, this._containerInterface);
    switch (t.type) {
      case "connection":
        r = new Ca(t, o, this._containerInterface);
        break;
      case "node":
        r = new Na(t, o, this._containerInterface);
        break;
      case "group":
        r = new Ea(t, o, this._containerInterface);
        break;
      default:
        throw Error(`unkown data type '${t.type}'`);
    }
    return this._objectManager.add(r), r.create(), this._refreshSvgDebounce(), e !== void 0 && this.d3Container.node().insertBefore(r.g.node(), this._getChildElementOrNull(e)), t.temp ? this._logger.debug(
      "InnoFlowchart.add()",
      `created temp obj id is '${r.id}'`
    ) : (this._addObjectEvent(r), this.emitChangedStatus(), this.$emit(D.NEW_OBJECT, r), this._logger.debug("InnoFlowchart.add()", `created obj id is '${r.id}'`)), r;
  }
  /**
   * 선택된 개체를 제거한다.
   *
   * @example
   * ```ts
   * const object = flowchart.getObjectOrNull(2);
   * flowchart.remove(object);
   * ```
   */
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
      ) : (this.$emit(D.REMOVE_OBJECT, e), this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed obj id is '${e.id}'`
      ));
    else
      throw new Error("There is no such as object you received in this flowchart!");
  }
  /**
   * IRFlowchart의 줌 비율을 설정한다.
   *
   * @param scale 설정하고자 하는 크기 (0.4 이상 3 이하 설정 가능)
   */
  zoomTo(t) {
    if (t < Sn || t > Mn)
      return;
    this._logger.info("InnoFlowchart.zoomTo", `scale is changed to ${t}`), this._div.__zoom.k = t, this.d3Container.attr("transform", `scale(${t})`);
    const e = `${1 / t * 100}%`;
    this.d3Grid.attr("transform", `scale(${t})`).attr("width", e).attr("height", e), this.refreshSvgSize();
  }
  /**
   * 신규로 추가한 개체 집합을 undo에 기록하고,
   * 음수 좌표가 있는 경우에는 해당 좌표를 조정합니다.
   */
  recordNewObjectsAction(...t) {
    this._actionController.addAction(new xt(dt(t))), this._updateNegativePos();
  }
  /**
   * IRFlowchart의 changed 상태를 true로 변경한다.
   */
  emitChangedStatus() {
    this._isChanged || (this._isChanged = !0, this.classedOnSvg(!0, "changed"));
  }
  /**
   * IRFlowchart의 현재 scale을 반환한다.
   *
   * @returns `getTransform()` 메서드의 k 값을 반환
   */
  getScale() {
    return this.getTransform().k;
  }
  /**
   * IRFlowchart 내의 선택된 모든 연결선을 반환한다.
   */
  getSelectedConnections(t = !0) {
    const e = [];
    for (const r of this._objectManager.getConnectionIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  __editObjProp(t) {
    t.forEach((e) => {
      for (const r of e.propList)
        r.oldValue === void 0 && (r.oldValue = e.objData[r.key]), e.objData[r.key] = r.newValue;
    }), this._actionController.addAction(new ut(t));
  }
  /**
   * builder에서 사용함, 다만 내부 함수로 사용하므로 외부에서 사용하지 않도록 주의
   * @deprecated
   */
  _editObjProp(t) {
    return this.__editObjProp(t);
  }
  editSelectedObjProp(t, e) {
    const r = [];
    for (const i of this._objectManager.getSelectedObjIterator())
      i.isSelected && r.push(new ct(i.data, [
        {
          key: t,
          newValue: e
        }
      ]));
    this.__editObjProp(r);
  }
  /**
   * 현재 flowchart를 append 모드로 전환한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   *
   * @param mode "append"로 지정
   * @param data
   *  `type`: node | connection\
   *  `render`: start | if | db | bridge | comment | return
   *
   * @example
   * ```ts
   * flowchart.append( "append", { type: "node", render: "start" } );
   * ```
   */
  append(t, e) {
    if (this._readonly) {
      this._logger.info(
        "InnoFlowchart.append()",
        "Preventing append (readonly: true)"
      );
      return;
    }
    if (!this._validateAppendMode({ mode: t, data: e }))
      throw this._logger.error("InnoFlowchart.append()", "Invalid append info!"), new Error("Invalid append info!");
    this.clearAppendMode(), this._appendMode = { mode: t, data: e, dragged: !1 }, this.classedOnSvg(!0, `is-appending-${e.type}`), this._logger.info(
      "InnoFlowchart.append()",
      "Append Mode",
      this._appendMode.mode
    );
  }
  /**
   * IRFlowchart의 스크롤을 (0, 0) 으로 이동한다.
   */
  resetScreen() {
    this._div.scrollLeft = 0, this._div.scrollTop = 0;
  }
  /**
   * 현재 flowchart가 렌더링된 HTMLElement의 DOMRect 객체를 반환한다.
   *
   * @returns
   * ```ts
   * {
   *      "x": 31,
   *      "y": 333,
   *      "width": 870,
   *      "height": 550,
   *      "top": 333,
   *      "right": 901,
   *      "bottom": 883,
   *      "left": 31
   * }
   * ```
   */
  getWrapperSize() {
    return this._div.getBoundingClientRect();
  }
  /**
   * IRFlowchart의 현재 scale k와 translation(x, y)을 반환한다.
   *
   * @returns
   * ```ts
   * { k: number, x: number, y: number }
   * ```
   */
  getTransform() {
    return er(this._div);
  }
  /**
   *
   */
  updateMinimumSvgSize() {
    const { width: t, height: e } = this.getWrapperSize();
    this._wrapperSize.width = t, this._wrapperSize.height = e, this.refreshSvgSize();
  }
  _getFlowchartAvailableRect() {
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
    let t = this._svgSize.width, e = this._svgSize.height;
    this._fitSizeMode || (t += this._wrapperSize.width / 2, e += this._wrapperSize.height / 2), this.d3Svg.attr("width", Math.max(this._wrapperSize.width, t)).attr("height", Math.max(this._wrapperSize.height, e));
  }
  refreshSvgSize() {
    const t = this._getFlowchartAvailableRect();
    this._svgSize.width = t.right, this._svgSize.height = t.bottom, this._logger.info("InnoFlowchart.refreshSvgSize()", t), this.updateSvgSize();
  }
  /**
   * 현재 flowchart를 Re-render 한다.
   */
  render() {
    this.updateMinimumSvgSize();
  }
  /**
   * IRFlowchart의 모든 오브젝트 리스트를 반환한다.
   */
  getObjectList() {
    const t = [];
    for (const e of this._objectManager.getAllObjIterator())
      !e.isTempObj && t.push(e);
    return t;
  }
  /**
   * actionController의 모든 actions를 제거한다.
   */
  clearActionList() {
    this._logger.info("InnoFlowchart.clearActionList()"), this._actionController.clear();
  }
  /**
   * 이전에 수행된 작업을 실행 취소한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   */
  undoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.undoAction()", "Preventing undo (readonly: true)");
      return;
    }
    const t = this._actionController.undo();
    this._logger.debug("InnoFlowchart.undoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(D.UNDO, t));
  }
  /**
   * undoAction에 의해 실행 취소된 작업을 다시 수행한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   */
  redoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.redoAction()", "Preventing redo (readonly: true)");
      return;
    }
    const t = this._actionController.redo();
    this._logger.debug("InnoFlowchart.redoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(D.REDO, t));
  }
  _objectClickHandler(t, e) {
    this._logger.info(`InnoFlowchart.event.emit.${e}`, t), t.select(!0), this.$emit(e, t);
  }
  _commonObserveCallback(t) {
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
  _connectionObserveCallback(t) {
    const e = t.renderObj;
    switch (t.key) {
      case "connection.sourceObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(D.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.sourcePos":
        e.sourceObjId !== null && this.$emit(D.CONNECT_NODE, e, t.key);
        break;
      case "connection.destinationObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(D.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.destinationPos":
        e.destinationObjId !== null && this.$emit(D.CONNECT_NODE, e, t.key);
        break;
    }
  }
  _observerCallback(t) {
    t.newValue !== t.oldValue && (!this._isChanged && !sc.has(t.key) && this.emitChangedStatus(), this._commonObserveCallback(t), t.renderObj.type === "connection" && this._connectionObserveCallback(t));
  }
  _selectCallbackHandler(t, e, r) {
    const i = this._objectManager.getParentGroupOrNull(t);
    if (e && (this._moveScreenOnSelect && t.type === "node" && this.moveScreenByObject(t), this._singleSelection))
      for (const o of this._objectManager.getSelectedObjIterator())
        o !== t && o.release();
    i !== null && i.select(!1, r), this._logger.info("InnoFlowchart._selectCallbackHandler()", t), this.$emit(D.SELECT_OBJECT, t);
  }
  _releaseCallbackHandler(t, e) {
    this.$emit(D.RELEASE_OBJECT, t);
  }
  _editTextModeCallback() {
    this._objMouseHandler.removeTooltipObj();
  }
  _getXYOnSheet(t, e) {
    const r = 1 / this.getScale();
    return { x: t * r, y: e * r };
  }
  _validateAppendMode({ mode: t, data: e }) {
    switch (t) {
      case "append":
        return e.type === "node" || e.type === "connection";
      case "paste":
        return e.objects.length > 0;
      default:
        return !1;
    }
  }
  _getProperlyPointsToCreate(t) {
    const e = t["connection.points"];
    t: for (; ; ) {
      for (const r of this._objectManager.getConnectionIterator())
        if (r.comparePoints(e)) {
          e.forEach((i) => {
            i.x += it, i.y += it;
          });
          continue t;
        }
      return e;
    }
  }
  _getProperlyNodePosToCreate(t) {
    let e = t["node.x"], r = t["node.y"];
    t: for (; ; ) {
      for (const i of this._objectManager.getNodeIterator())
        if (i.x === e && i.y === r) {
          e += it, r += it;
          continue t;
        }
      return { "node.x": e, "node.y": r };
    }
  }
  _initAppendObj(t, e) {
    switch (this._appendMode.data.type) {
      case "node": {
        this._appendingObject = this.add({
          ...this._appendMode.data,
          temp: !0,
          id: "appending_temp_obj",
          opacity: 0
        });
        break;
      }
      case "connection": {
        const r = this._getNodeAndPosUnderXY(t, e);
        this._updateHoveredNode(r.node);
      }
    }
  }
  _mouseMoveOnSheetHandler(t) {
    const e = t.offsetX, r = t.offsetY;
    if (this._validateAppendMode(this._appendMode)) {
      switch (this._appendMode.mode) {
        case "append":
          this._appendingObject === null ? this._initAppendObj(e, r) : this._appendingObject.type === "node" && this._moveAppendingNode(e, r);
          break;
      }
      this._div.focus();
    }
  }
  _setZIndexOnSelected(t) {
    const e = [], r = t === "front" ? this._objectManager.getObjCount() : 0;
    this._logger.info("InnoFlowchart.setZIndex()", `new z-index = ${r}`);
    for (const i of this.getSelectedObjects())
      e.push({
        objId: i.id,
        oldValue: i.zIndex + (t === "back" ? 1 : 0),
        newValue: r
      }), i.zIndex = r;
    this.emitChangedStatus(), this._actionController.addAction(new wa(e));
  }
  /**
   * 선택한 오브젝트를 가장 앞으로 가져온다.
   */
  bringToFront() {
    this._logger.info("InnoFlowchart.bringToFront()"), this._setZIndexOnSelected("front");
  }
  /**
   * 선택한 오브젝트를 가장 뒤로 보낸다.
   */
  bringToBack() {
    this._logger.info("InnoFlowchart.bringToBack()"), this._setZIndexOnSelected("back");
  }
  _moveXY(t, e, r) {
    return this._gridMode && t.type === "node" ? [
      pn(t.x + e) - t.x,
      pn(t.y + r) - t.y
    ] : [e, r];
  }
  _moveSelectedObjects(t, e) {
    for (const r of this._objectManager.getSelectedObjIterator())
      r.moveTo(...this._moveXY(r, t, e));
  }
  /**
   * 현재 flowchart의 오브젝트 또는 null을 반환한다.
   */
  getObjectOrNull(t) {
    return this._objectManager.findOrNull(t);
  }
  /**
   * 현재 flowchart의 오브젝트를 선택한다.
   */
  selectObjectById(t) {
    const e = this.getObjectOrNull(t);
    if (e === null)
      throw new Error(`Not found obj id '${t}'`);
    e.select();
  }
  _addCommonMouseAction(t) {
    this._objMouseHandler.addMouseAction(t);
  }
  _isSingleSelection(t) {
    return this._singleSelection || !t;
  }
  _addClickActionOnNode(t) {
    t.g.on("dblclick", () => {
      t.data.editable && this._readonly === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickNode", t), this.$emit(D.DOUBLE_CLICK_NODE, t);
    });
  }
  /**
   * IRFlowchart의 svg 요소에 class 속성을 할당하거나 제거한다.
   *
   * @param flag `true` 설정 시 class 속성을 할당, `false` 설정 시 class 속성을 제거
   * @param classes 할당 또는 제거하고자 하는 class 속성의 값
   *
   * @example
   * ```ts
   * flowchart.classedOnSvg(true, ["add-class-name second"]);
   * flowchart.classedOnSvg(false, ["add-class-name"]);
   * ```
   */
  classedOnSvg(t, ...e) {
    e.forEach((r) => this.d3Svg.classed(r, t)), this.$emit(D.CHANGE_CLASS, this.d3Svg.attr("class"));
  }
  _addDragActionOnNode(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0, a = 0, c = 0;
    t.g.call(st().filter((d) => d.button === 0 && this._editMode === !1).on("start", (d) => {
      ot(d.sourceEvent.target), this._isSingleSelection(d.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = d.x, i = d.y, o = t.width - (t.endX - d.x), s = t.height - (t.endY - d.y), t.select(!1), a = t.x, c = t.y;
    }).on("drag", (d) => {
      this._readonly || (!e && l(d) && h.call(this), e && this._moveSelectedObjects.call(this, ...f(d)));
    }).on("end", (d) => {
      const _ = d.sourceEvent;
      if (e)
        this._moveHandler.moveEndHandler(), this._terminateDrag("drag-node-move"), this._moveScreenOnSelect && t.type === "node" && this.moveScreenByObject(t);
      else {
        if (this._editMode) return;
        this._isSingleSelection(_.ctrlKey) && this.releaseAllObjects(t), this._moveScreenOnSelect && this.moveScreenByObject(t), this._objectClickHandler(t, D.CLICK_NODE);
      }
    }));
    function l(d) {
      return Math.abs(r - d.x) + Math.abs(i - d.y) > On;
    }
    function h() {
      e = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-node-move");
    }
    function f(d) {
      const _ = d.x - o, w = d.y - s;
      if (d.sourceEvent.shiftKey) {
        const M = Math.abs(r - d.x), k = Math.abs(i - d.y);
        return M >= k ? [_ - t.x, c - t.y] : [a - t.x, w - t.y];
      }
      return [
        _ - t.x,
        w - t.y
      ];
    }
  }
  _addDragActionOnConnector(t, e) {
    const r = ha(e.attr("class"));
    e.call(st().filter((i) => i.button === 0 && this._readonly === !1).on("start", (i) => {
      ot(i.sourceEvent.target);
      const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y, a = this._appendMode.data?.render ?? this.theme["node.autoGeneratedConnectorRender"], c = t.getPositionXY(r);
      this._initDrag("drag-node-connector"), this._createAppendingConnection(c.x, c.y, o, s, {
        type: "connection",
        render: a,
        "connection.sourceObjId": t.id,
        "connection.sourcePos": r
      });
    }).on("drag", (i) => {
      if (this._appendingObject === null)
        return;
      const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y;
      this._appendMode.dragged = !0, this._moveAppendingConnection(o, s);
    }).on("end", () => {
      this._appendingObject !== null && (this._endAppendingConnection(), this._terminateDrag("drag-node-connector"));
    }));
  }
  _addNodeEvent(t) {
    this._addClickActionOnNode(t), this._addDragActionOnNode(t);
  }
  _objectRightClickTask(t) {
    this.logger.info("rightClick");
  }
  _connectionLeftClickTask(t, e) {
    this._isSingleSelection(e) && this.releaseAllObjects(t), this._objectClickHandler(t, D.CLICK_CONNECTION);
  }
  _addClickActionOnConnection(t) {
    t.g.on("click", (e) => {
      this._isSingleSelection(e.ctrlKey) && this.releaseAllObjects(t), this._objectClickHandler(t, D.CLICK_CONNECTION);
    }), t.g.on("dblclick", () => {
      t.data.editable && this._readonly === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickConnection", t), this.$emit(D.DOUBLE_CLICK_CONNECTION, t);
    });
  }
  _addDragActionOnConnection(t) {
    let e = 0, r = 0, i = !1;
    t.g.call(st().filter((o) => o.button === 0 && this._editMode === !1).on("start", (o) => {
      ot(o.sourceEvent.target), this._isSingleSelection(o.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = o.x, r = o.y, i = !1, t.select();
    }).on("drag", (o) => {
      if (this._readonly) return;
      const s = o.x - e, a = o.y - r;
      if (!i && Math.abs(s) + Math.abs(a) > 5 && (i = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-con-move")), !!i) {
        if (t.sourceObjId !== null) {
          const c = this.getObjectOrNull(t.sourceObjId);
          (c === null || c.isSelected === !1) && (t.sourceObjId = null);
        }
        if (t.destinationObjId !== null) {
          const c = this.getObjectOrNull(t.destinationObjId);
          (c === null || c.isSelected === !1) && (t.destinationObjId = null);
        }
        this._moveSelectedObjects(s, a), e = o.x, r = o.y;
      }
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-con-move");
    }));
  }
  _addDragActionOnConnectionConnector(t, e, r) {
    const i = (o, s, a) => st().filter((c) => c.button === 0 && this._editMode === !1 && this._readonly === !1).on("start", (c) => {
      ot(c.sourceEvent.target), this._moveHandler.moveStartHandler(), this._initDrag("drag-con-connector");
    }).on("drag", (c) => {
      const l = this._getNodeAndPosUnderXY(c.x, c.y), h = a === "start" ? t.firstPoint : t.endPoint;
      l.node === null ? (t[o] = null, t[s] = null, h.x = c.x, h.y = c.y) : (t[o] = l.node.id, l.hover ? this._setShortestPosition(t, a === "end", a === "start") : t[s] = l.pos), t.render(), this._updateHoveredNode(l.node);
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-con-connector");
    });
    e.call(i(`${r}ObjId`, `${r}Pos`, r === "source" ? "start" : "end"));
  }
  _addConnectionEvent(t) {
    this._addClickActionOnConnection(t), this._addDragActionOnConnection(t);
  }
  _addGroupEvent(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(st().filter((a) => a.button === 0 && this._editMode === !1 && this._readonly === !1).on("start", (a) => {
      ot(a.sourceEvent.target), this._isSingleSelection(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = a.x, s = a.y, t.select();
    }).on("drag", (a) => {
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > On && (e = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-group-move")), e && (this._moveSelectedObjects(a.x - o, a.y - s), o = a.x, s = a.y);
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-group-move");
    }));
  }
  _addObjectEvent(t) {
    switch (this._addCommonMouseAction(t), t.type) {
      case "node":
        this._addNodeEvent(t), t.render();
        break;
      case "connection":
        this._addConnectionEvent(t);
        break;
      case "group":
        this._addGroupEvent(t);
        break;
      default:
        throw new Error(`Unknown data type '${t.type}'`);
    }
  }
  _initDrag(t) {
    this._isDragging = !0, this._appendMode.dragged = !1, this._objMouseHandler.removeTooltipObj(), this.classedOnSvg(!0, t);
  }
  _terminateDrag(t) {
    this._isDragging = !1, this._appendMode.dragged = !1, this.classedOnSvg(!1, t), this.clearAppendMode(), this._updateNegativePos(), this.refreshSvgSize(), this._simpleConnectingMode && this.updateShortestNodes();
  }
  _updateNegativePos() {
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
        const a = new ct(s.data, []);
        a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
      }
      for (const s of this._objectManager.getConnectionIterator())
        if (s.sourceObj === null || s.destinationObj === null) {
          const a = new ct(s.data, []);
          a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
        }
      for (const s of this._objectManager.getGroupIterator())
        s.render();
      e && (e.unshift(new ut(r)), this._actionController.addAction(...e)), this.refreshSvgSize();
    }
  }
  /**
   * IRFlowchart 내의 선택된 오브젝트의 개수를 반환한다.
   */
  getCountOfSelectedObject() {
    let t = 0;
    for (const e of this._objectManager.getSelectedObjIterator())
      this._objectManager.getParentGroupOrNull(e) == null && e.isSelected && ++t;
    return t;
  }
  /**
   * IRFlowchart 내의 모든 오브젝트를 선택한다.
   */
  selectAllObjects() {
    if (!this._singleSelection)
      for (const t of this._objectManager.getAllObjIterator())
        t.type !== "group" && t.select(!0);
  }
  /**
   * IRFlowchart 내의 오브젝트를 선택 해제한다.\
   * `clickObj`가 있다면 해당 오브젝트는 선택 상태를 유지한다.
   */
  releaseAllObjects(t) {
    for (const e of this._objectManager.getAllObjIterator())
      t !== e && e.release(!0);
  }
  /**
   * 현재 선택된 오브젝트를 정렬한다.
   */
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
  /**
   * 현재 선택된 오브젝트를 수직 또는 수평으로 균등 분배한다.
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
    r.sort((l, h) => l[i.center] - h[i.center]), this._moveHandler.moveStartHandler();
    const o = r.length - 1, s = r[0][i.end], a = r[o][i.start], c = r.slice(1, o).reduce((l, h) => l - h[i.size], a - s) / o;
    r.slice(1, o).reduce((l, h) => (h[i.start] = l, l + h[i.size] + c), s + c), this._moveHandler.moveEndHandler();
  }
  /**
   * IRFlowchart 내의 선택된 모든 오브젝트를 반환한다.
   */
  getSelectedObjects(t = !0) {
    const e = Array.from(this._objectManager.getSelectedObjIterator());
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
   * 선택된 개체를 제거한다.
   */
  removeSelected() {
    const t = this.getSelectedObjects(!1);
    t.forEach((e) => this.remove(e)), this._actionController.addAction(
      new hn(dt(t))
    );
  }
  _getChildElementOrNull(t) {
    const e = this.d3Container.node();
    return t >= e.children.length ? null : e.children[t];
  }
  _getNodeAndPosUnderXY(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      if (r.isConnectorEnabled) {
        for (const i of se)
          if (r.isContainedOnPos(i, t, e))
            return { node: r, pos: i };
        if (r.isContained(t, e))
          return { node: r, pos: "bottom", hover: !0 };
      }
    return { node: null, pos: null };
  }
  /**
   * 선택된 노드를 지정한 좌표로 이동시킨다.
   */
  moveSelectedNode(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && (r.x = parseInt((r.x + t) / qt) * qt, r.y = parseInt((r.y + e) / qt) * qt);
  }
  /**
   * IRFlowchart 내의 선택된 모든 노드를 반환한다.
   */
  getSelectedNodes(t = !0) {
    const e = [];
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
   * 특정 노드와 연결되어 있는 연결선을 반환한다.
   */
  getNodeConnections(t) {
    const e = t.observeProperties ? t.id : t, r = this.getObjectOrNull(e), i = Array.from(this._objectManager.getConnectedConnections(e));
    return i.sort((o, s) => un(r, o) - un(r, s)), i;
  }
  /**
   * 특정 오브젝트에 맞추어 스크롤을 조정한다.
   */
  moveScreenByObject(t) {
    const e = this.getTransform().k;
    this._div.scrollLeft = t.centerX * e - this._wrapperSize.width / 2, this._div.scrollTop = t.centerY * e - this._wrapperSize.height / 2;
  }
  /**
   * 현재 IRFlowchart를 클립보드에 복사한다. ※ 비동기 처리
   *
   * @param imgType 기본값 "image/png"
   */
  async copyToClipboard(t = "image/png") {
    this.releaseAllObjects();
    const e = await Fe(Be(this.svgElement)), r = await Ve(e, t, this._getFlowchartRect(), vn), i = await yr(r);
    await nc(i);
  }
  _getFlowchartRect() {
    const { top: t, left: e, bottom: r, right: i } = this._getFlowchartAvailableRect();
    return {
      x: e - 1,
      y: t - 1,
      width: i - e + 2,
      height: r - t + 2
    };
  }
  /**
   * 현재 IRFlowchart를 이미지 파일로 저장한다. ※ 비동기 처리
   *
   * @param fileName
   * @param imgType 기본값 "image/png"
   */
  async saveAsImageFile(t, e = "image/png") {
    this.releaseAllObjects();
    const r = await this.getBlob(e), i = URL.createObjectURL(r);
    try {
      mr(i, t);
    } finally {
      URL.revokeObjectURL(i);
    }
  }
  /**
   * 현재 IRFlowchart의 이미지 정보(size, type)를 반환한다. ※ 비동기 처리
   *
   * @param imgType 기본값 "image/png"
   * @returns
   * ```ts
   * Blob { size: number, type: ImageType }
   * ```
   */
  async getBlob(t = "image/png") {
    const e = await Fe(Be(this.svgElement));
    return await Ve(e, t, this._getFlowchartRect(), vn);
  }
  /**
   * IRFlowchart의 내부 패널에 focus를 설정한다.
   */
  focus() {
    this._div.focus();
  }
  /**
   * 현재 설정된 appendMode의 context를 초기화한다. (appending 또는 pasting 객체 제거)
   */
  clearAppendMode() {
    this._appendMode.data && this.classedOnSvg(!1, `is-appending-${this._appendMode.data.type}`), this._appendingObject !== null && this.remove(this._appendingObject), this._appendMode.mode = null, this._appendMode.data = null, this._appendMode.dragged = !1, this._appendingObject = null;
  }
  _getClipInfo() {
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
    this._logger.info("InnoFlowchart.cut()"), this.getSelectedObjects().length !== 0 && (be.saveData(JSON.stringify(this._getClipInfo())), this.removeSelected());
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  copy() {
    this._logger.info("InnoFlowchart.copy()"), be.saveData(JSON.stringify(this._getClipInfo()));
  }
  _createPastingObjs(t) {
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
          const c = this._getProperlyNodePosToCreate(s);
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
          const c = this._getProperlyPointsToCreate(s);
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
    }), this._actionController.addAction(new xt(dt(o)));
  }
  /**
   * in-memory clipboard에 저장된 것을 붙여넣기 처리
   * @deprecated
   */
  paste() {
    if (this._editMode || this._appendMode.mode != null) {
      this._logger.debug(
        "InnoFlowchart.paste()",
        "Could not paste because of edit or append mode"
      );
      return;
    }
    this._logger.info("InnoFlowchart.paste()"), this._createPastingObjs(JSON.parse(be.loadData()));
  }
  /**
   * 컨텐츠에 맞게 오브젝트의 크기를 조정한다.
   */
  fitSizeOnText() {
    this._logger.info("InnoFlowchart.fitSizeOnText()"), this._resizeHandler.resizeDragStart(), this.getSelectedNodes(!1).forEach(
      (t) => void (t.resizerEnabled && t.fitSizeOnText())
    ), this._resizeHandler.resizeDragEnd();
  }
  _setShortestPosition(t, e = !1, r = !1) {
    const i = this.getObjectOrNull(t.sourceObjId), o = this.getObjectOrNull(t.destinationObjId), s = t.sourcePos, a = t.destinationPos;
    if (i !== null && o !== null) {
      const c = rc(i, o);
      e || (t.sourcePos = c.sourcePos), r || (t.destinationPos = c.destinationPos);
    } else i === null ? t.destinationPos = xn(t.firstPoint, o) : t.sourcePos = xn(t.endPoint, i);
    if (s !== t.sourcePos || a !== t.destinationPos) {
      const c = new ct(t.data, [
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
      this._actionController.addAction(new ut([c]));
    }
  }
  /**
   * 현재 선택된 연결선들을 최단 경로로 맞춘다.
   */
  updateShortestConnections() {
    this._logger.info("InnoFlowchart.updateShortestConnections()");
    for (const t of this._objectManager.getConnectionIterator())
      t.isSelected && this._setShortestPosition(t);
  }
  /**
   * 현재 선택된 노드들의 연결선들을 최단 경로로 맞춘다.
   */
  updateShortestNodes() {
    const t = [];
    for (const e of this._objectManager.getNodeIterator())
      if (e.isSelected !== !1)
        for (const r of this._objectManager.getConnectedConnections(e.id))
          t.indexOf(r) === -1 && t.push(r);
    t.forEach((e) => this._setShortestPosition(e));
  }
  /**
   * 특정 render의 개체를 모두 선택한다.
   *
   * @param render `start | if | db | bridge | comment | return | direct | elbow | group`
   */
  selectType(t) {
    this._logger.info("InnoFlowchart.selectType()", t);
    const e = t.toLowerCase();
    this.releaseAllObjects();
    for (const r of this._objectManager.getAllObjIterator())
      r.renderType === e && r.select(!1, e);
  }
  /**
   * IRFlowchart의 changed 상태를 초기화한다.
   */
  clearChangedStatus() {
    this._isChanged && (this._isChanged = !1, this.classedOnSvg(!1, "changed"));
  }
  /**
   * IRFlowchart 내의 모든 개체를 제거한다.
   */
  clear() {
    this.clearAppendMode();
    for (const t of this._objectManager.getAllObjIterator())
      t.destroy();
    this._objectManager.clear(), this._seqMng.clear(), this._actionController.clear(), this._hook.destroy();
  }
  /**
   * 현재 선택된 오브젝트 그룹화 및 그룹 객체를 생성한다.
   *
   * @example
   * ```ts
   * const selected = flowchart.selectAllObjects();  // 모든 오브젝트를 선택한다.
   * flowchart.group();
   * ```
   */
  group(t = void 0) {
    const e = t || {};
    e.type = "group", e.render = "group", e.objectList = [], fn(e, this.theme);
    for (const i of this._objectManager.getSelectedObjIterator())
      e.objectList.push(i.id);
    const r = this.add(e);
    r.resize(), r.select(), this._actionController.addAction(new xt(dt([r])));
  }
  /**
   * 현재 선택된 그룹화된 오브젝트의 자식의 그룹 상태를 해제한다.
   */
  ungroup() {
    const t = [];
    for (const e of this._objectManager.getGroupIterator())
      e.isSelected && (e.clear(), t.push(e), this.remove(e));
    this._actionController.addAction(new hn(dt(t)));
  }
  _moveAppendingNode(t, e) {
    const r = this._getXYOnSheet(t, e);
    this._appendingObject.data.opacity === 0 && (this._appendingObject.data.opacity = 0.5), this._appendingObject.x = r.x - this._appendingObject.width / 2, this._appendingObject.y = r.y - this._appendingObject.height / 2;
  }
  _getSvgXYOnDrag(t, e, r = !1) {
    const i = {
      x: t + this._div.scrollLeft,
      y: e + this._div.scrollTop
    };
    if (r) {
      const s = 1 / this.getTransform().k;
      i.x *= s, i.y *= s;
    }
    return i;
  }
  _dragStartHandlerOnSelection(t) {
    const e = this._getSvgXYOnDrag(t.x, t.y);
    this._selection.rect = this.d3Svg.append("rect").attr("class", "ir-fw-selection"), this._selection.startX = e.x, this._selection.startY = e.y;
  }
  _dragHandlerOnSelection(t) {
    const e = this._getSvgXYOnDrag(t.x, t.y), r = Math.min(e.x, this._selection.startX), i = Math.min(e.y, this._selection.startY), o = Math.max(e.x, this._selection.startX), s = Math.max(e.y, this._selection.startY);
    this._selection.rect.attr("x", r).attr("y", i).attr("width", o - r).attr("height", s - i);
  }
  _dragEndHandlerOnSelection(t) {
    try {
      const e = this.getTransform(), r = this._getSvgXYOnDrag(t.x, t.y), i = Math.min(r.x, this._selection.startX), o = Math.min(r.y, this._selection.startY), s = Math.max(r.x, this._selection.startX), a = Math.max(r.y, this._selection.startY), c = (l, h, f, d) => l >= i && h >= i && l <= s && h <= s && f >= o && d >= o && f <= a && d <= a;
      this._isSingleSelection(t.sourceEvent.ctrlKey) && this.releaseAllObjects();
      for (const l of this._objectManager.getNodeIterator()) {
        const h = l.x * e.k, f = (l.x + l.width) * e.k, d = l.y * e.k, _ = (l.y + l.height) * e.k;
        c(h, f, d, _) && l.select(!0);
      }
      for (const l of this._objectManager.getConnectionIterator()) {
        const h = l.firstPoint, f = l.endPoint, d = Math.min(h.x, f.x) * e.k, _ = Math.max(h.x, f.x) * e.k, w = Math.min(h.y, f.y) * e.k, M = Math.max(h.y, f.y) * e.k;
        c(d, _, w, M) && l.select(!0);
      }
    } finally {
      this._selection.rect.remove(), this._selection.rect = null, this.$emit(D.MOUSEUP_SHEET, this._getSvgXYOnDrag(t.x, t.y));
    }
  }
  _canvasMoveStartHandler(t) {
    const { offsetX: e, offsetY: r } = t.sourceEvent;
    this.classedOnSvg(!0, "is-grabbing"), this._cursorStatus = {
      curPosX: e,
      curPosY: r,
      isDragging: !0
    };
  }
  _canvasMoveHandler(t) {
    const { curPosX: e, curPosY: r, isDragging: i } = this._cursorStatus;
    if (!i) return;
    const { target: o, offsetX: s, offsetY: a } = t.sourceEvent;
    o === this.d3Svg.node() && this._div.scrollBy(e - s, r - a);
  }
  _canvasMoveEndHandler(t) {
    this._cursorStatus.isDragging = !1, this.classedOnSvg(!1, "is-grabbing"), t.sourceEvent.target === this.d3Svg.node() && this.releaseAllObjects();
  }
  _createAppendObj() {
    switch (this._appendMode.mode) {
      case "append": {
        const t = this.add({
          "node.x": this._appendingObject.x,
          "node.y": this._appendingObject.y,
          ...this._appendMode.data
        });
        this._actionController.addAction(new xt(dt([t])));
        break;
      }
    }
    this.clearAppendMode();
  }
  _getAppendNodeDragEventHandler(t) {
    return {
      start: () => {
      },
      drag: () => this._moveAppendingNode(t.x + this._div.scrollLeft, t.y + this._div.scrollTop),
      end: () => this._createAppendObj()
    };
  }
  _getAppendConnectionDragEventHandler(t) {
    return {
      start: () => {
        const e = this._getSvgXYOnDrag(t.x, t.y, !0);
        this._createAppendingConnection(e.x, e.y, e.x, e.y, this._appendMode.data), this._appendMode.dragged = !1;
      },
      drag: () => {
        const e = this._getSvgXYOnDrag(t.x, t.y, !0);
        this._moveAppendingConnection(e.x, e.y, this._appendingObject.renderType), this._appendMode.dragged = !0;
      },
      end: () => {
        this._endAppendingConnection(), this.clearAppendMode();
      }
    };
  }
  _getAppendModeHandler(t) {
    return {
      start: () => this._dragStartHandlerOnSelection(t),
      drag: () => this._dragHandlerOnSelection(t),
      end: () => this._dragEndHandlerOnSelection(t)
    };
  }
  _getCanvasMoveModeHandler(t) {
    return {
      start: () => this._canvasMoveStartHandler(t),
      drag: () => this._canvasMoveHandler(t),
      end: () => this._canvasMoveEndHandler(t)
    };
  }
  _getDragAppendModeHandler(t) {
    return this._appendMode.data.type === "node" ? this._getAppendNodeDragEventHandler(t) : this._getAppendConnectionDragEventHandler(t);
  }
  _dragController(t) {
    (() => {
      if (this._appendMode.mode === "append")
        return this._getDragAppendModeHandler(t);
      if (this._canvasMoveMode)
        return this._getCanvasMoveModeHandler(t);
      if (this._appendMode.mode === null)
        return this._getAppendModeHandler(t);
      throw new Error("unknown drag handler");
    })()[t.type]();
  }
  cancelCreatingConnection() {
    if (this._appendingObject === null)
      throw new Error("There is no creatingConnection obj");
    this.clearAppendMode();
  }
  _changeObjRender(t, e) {
    this._renderManager.changeRender(t, e, this._containerInterface), this._addObjectEvent(t);
  }
  /**
   * 개체의 렌더링 타입을 변경한다.
   *
   * @param obj
   * @param render
   *      obj의 type이 node일 경우: "start" | "if" | "db" | "bridge" | "comment" | "return"\
   *      obj의 type이 connection일 경우: "direct" | "elbow"
   */
  changeRender(t, e) {
    const r = t.renderType;
    this._changeObjRender(t, e), this._actionController.addAction(new ba(t, r, e));
  }
  _editTextCallbackHandler(t, e, r) {
    this._logger.debug(
      "InnoFlowchart._editTextCallbackHandler()",
      `oldText = '${e}'`,
      `newText = '${r}'`
    ), this._actionController.addAction(new ut([
      new ct(t, [
        {
          key: "text",
          oldValue: e,
          newValue: r
        }
      ])
    ]));
  }
  _moveAppendingConnection(t, e) {
    const r = this._getNodeAndPosUnderXY(t, e);
    !r.node || r.node.id === this._appendingObject.sourceObjId ? (this._appendingObject.setLastPointXY(t, e), this._appendingObject.destinationObjId = null, this._appendingObject.destinationPos = null) : (this._appendingObject.destinationObjId = r.node.id, r.hover ? this._setShortestPosition(this._appendingObject) : this._appendingObject.destinationPos = r.pos), this._updateHoveredNode(r.node, (i) => i.id !== this._appendingObject.sourceObjId);
  }
  _adjDragStartCallbackHandler() {
    this._logger.debug("InnoFlowchart.adjDragStartCallbackHandler()"), this._initDrag("drag-adj-move");
  }
  _adjDragEndCallbackHandler(t, e, r) {
    this._logger.debug(
      "InnoFlowchart.adjDragEndCallbackHandler()",
      "record undo action"
    ), this._actionController.addAction(
      new ut([new ct(t, [{ key: "connection.points", oldValue: e, newValue: r }])])
    ), this._terminateDrag("drag-adj-move");
  }
  _renderCallBack(t) {
    if (t.type === "node") {
      const r = /* @__PURE__ */ new Set();
      for (const i of this._objectManager.getConnectionIterator())
        !r.has(i.id) && (i.sourceObjId === t.id || i.destinationObjId === t.id) && (r.add(i.id), i.render());
    }
    const e = this._objectManager.getParentGroupOrNull(t);
    e !== null && e.resize();
  }
  _clickOnSheetHandler(t) {
    this.$emit(D.CLICK, this._getXYOnSheet(t.offsetX, t.offsetY));
  }
  _createAppendingConnection(t, e, r, i, o) {
    if (this._appendingObject !== null)
      throw new Error("Already created an appending obj!!");
    if (!o["connection.sourceObjId"]) {
      const a = this._getNodeAndPosUnderXY(t, e);
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
    this._appendingObject = this.add(s);
  }
  _endAppendingConnection() {
    let t = this._appendingObject.data;
    this._appendMode.dragged === !1 && (t = _a(this._appendingObject));
    const e = this.add({
      ...t,
      id: void 0,
      temp: !1,
      opacity: 1
    });
    this._actionController.addAction(new xt(dt([e])));
  }
  /** 이전 hover 노드를 해제하고 새 노드를 hover 상태로 갱신하며 마지막 hover 노드를 기록한다. */
  _updateHoveredNode(t, e = () => !0) {
    this._prevHoveredNode && this._prevHoveredNode !== t && (this._prevHoveredNode.isHovered = !1), t && e(t) && (t.isHovered = !0), this._prevHoveredNode = t;
  }
  /**
   * @hidden
   *
   * 키보드의 F2 키를 눌렀을 경우, 오브젝트의 라벨을 변경한다.\
   * 현재 flowchart가 수정모드가 아니고, 선택된 오브젝트가 1개일 경우에만 동작한다.
   */
  handleKeydownF2() {
    if (!this._editMode && this.getCountOfSelectedObject() === 1)
      for (const t of this._objectManager.getSelectedObjIterator()) {
        t.editLabel();
        return;
      }
  }
  /**
   * @hidden
   *
   * 키보드의 Delete 키를 눌렀을 경우, 해당 오브젝트를 제거한다.
   */
  handleKeydownDelete() {
    this.removeSelected();
  }
  /**
   * @hidden
   *
   * 키보드의 방향키를 눌렀을 경우, 해당 오브젝트를 이동시킨다.
   */
  handleKeydownArrows(t, e) {
    const r = this.getSelectedObjects(!1);
    r.length > 0 ? this.moveWrapper(() => {
      r.filter((i) => i.isSelected).forEach((i) => i.moveTo(t, e));
    }) : (this._div.scrollLeft += t * 2, this._div.scrollTop += e * 2);
  }
  /**
   * @hidden
   *
   * 키보드의 방향키를 눌렀다 뗀 경우, 해당 오브젝트의 이동을 해제한다.
   */
  handleKeydownEscape() {
    const t = this._appendMode, e = this._appendingObject;
    t.mode === null && e !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Cancel Creating Connection"), this.cancelCreatingConnection()) : t.mode !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Clear Appending Data"), this.clearAppendMode()) : (this._logger.info("InnoFlowchart.handleKeydownEscape()", "releaseAllObj"), this.releaseAllObjects());
  }
}
export {
  xt as A,
  ct as C,
  hn as D,
  ut as E,
  Ea as G,
  pc as I,
  Na as N,
  se as P,
  ba as R,
  wa as Z,
  D as a,
  Ye as b,
  Ca as c,
  Qs as d
};
//# sourceMappingURL=flowchart-BrAWtA3S.js.map
