import "./chunks/_init-BIZHSL6w.js";
import { g as Gu } from "./chunks/_commonjsHelpers-DaMA6jEr.js";
import { i as Tt } from "./chunks/index-B2FWDcG0.js";
import { I as Ku } from "./chunks/index-0r_H2Gko.js";
var zn = { exports: {} }, Xu = zn.exports, ns;
function ot() {
  return ns || (ns = 1, function(xe, $) {
    (function(g, W) {
      xe.exports = W();
    })(Xu, function() {
      var g = navigator.userAgent, W = navigator.platform, G = /gecko\/\d/i.test(g), J = /MSIE \d/.test(g), _ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(g), O = /Edge\/(\d+)/.exec(g), p = J || _ || O, F = p && (J ? document.documentMode || 6 : +(O || _)[1]), q = !O && /WebKit\//.test(g), K = q && /Qt\/\d+\.\d+/.test(g), N = !O && /Chrome\/(\d+)/.exec(g), X = N && +N[1], D = /Opera\//.test(g), Q = /Apple Computer/.test(navigator.vendor), ie = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(g), w = /PhantomJS/.test(g), m = Q && (/Mobile\/\w+/.test(g) || navigator.maxTouchPoints > 2), x = /Android/.test(g), k = m || x || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(g), S = m || /Mac/.test(W), R = /\bCrOS\b/.test(g), z = /win/i.test(W), h = D && g.match(/Version\/(\d*\.\d*)/);
      h && (h = Number(h[1])), h && h >= 15 && (D = !1, q = !0);
      var A = S && (K || D && (h == null || h < 12.11)), L = G || p && F >= 9;
      function C(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var y = function(e, t) {
        var n = e.className, r = C(t).exec(n);
        if (r) {
          var i = n.slice(r.index + r[0].length);
          e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
        }
      };
      function I(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function E(e, t) {
        return I(e).appendChild(t);
      }
      function d(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n), r && (i.style.cssText = r), typeof t == "string")
          i.appendChild(document.createTextNode(t));
        else if (t)
          for (var o = 0; o < t.length; ++o)
            i.appendChild(t[o]);
        return i;
      }
      function T(e, t, n, r) {
        var i = d(e, t, n, r);
        return i.setAttribute("role", "presentation"), i;
      }
      var H;
      document.createRange ? H = function(e, t, n, r) {
        var i = document.createRange();
        return i.setEnd(r || e, n), i.setStart(e, t), i;
      } : H = function(e, t, n) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
      };
      function Z(e, t) {
        if (t.nodeType == 3 && (t = t.parentNode), e.contains)
          return e.contains(t);
        do
          if (t.nodeType == 11 && (t = t.host), t == e)
            return !0;
        while (t = t.parentNode);
      }
      function te(e) {
        var t = e.ownerDocument || e, n;
        try {
          n = e.activeElement;
        } catch {
          n = t.body || null;
        }
        for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
          n = n.shadowRoot.activeElement;
        return n;
      }
      function ue(e, t) {
        var n = e.className;
        C(t).test(n) || (e.className += (n ? " " : "") + t);
      }
      function _e(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
          n[r] && !C(n[r]).test(t) && (t += " " + n[r]);
        return t;
      }
      var ye = function(e) {
        e.select();
      };
      m ? ye = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : p && (ye = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function ze(e) {
        return e.display.wrapper.ownerDocument;
      }
      function ve(e) {
        return Ge(e.display.wrapper);
      }
      function Ge(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function st(e) {
        return ze(e).defaultView;
      }
      function Fe(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function ht(e, t, n) {
        t || (t = {});
        for (var r in e)
          e.hasOwnProperty(r) && (n !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r]);
        return t;
      }
      function Pe(e, t, n, r, i) {
        t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
        for (var o = r || 0, a = i || 0; ; ) {
          var s = e.indexOf("	", o);
          if (s < 0 || s >= t)
            return a + (t - o);
          a += s - o, a += n - a % n, o = s + 1;
        }
      }
      var dt = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = Fe(this.onTimeout, this);
      };
      dt.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +/* @__PURE__ */ new Date() ? e.f() : setTimeout(e.handler, e.time - +/* @__PURE__ */ new Date());
      }, dt.prototype.set = function(e, t) {
        this.f = t;
        var n = +/* @__PURE__ */ new Date() + e;
        (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
      };
      function Se(e, t) {
        for (var n = 0; n < e.length; ++n)
          if (e[n] == t)
            return n;
        return -1;
      }
      var Jt = 50, bt = { toString: function() {
        return "CodeMirror.Pass";
      } }, Ye = { scroll: !1 }, Vt = { origin: "*mouse" }, Mt = { origin: "+move" };
      function Ke(e, t, n) {
        for (var r = 0, i = 0; ; ) {
          var o = e.indexOf("	", r);
          o == -1 && (o = e.length);
          var a = o - r;
          if (o == e.length || i + a >= t)
            return r + Math.min(a, t - i);
          if (i += o - r, i += n - i % n, r = o + 1, i >= t)
            return r;
        }
      }
      var qe = [""];
      function $t(e) {
        for (; qe.length <= e; )
          qe.push(ce(qe) + " ");
        return qe[e];
      }
      function ce(e) {
        return e[e.length - 1];
      }
      function en(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
          n[r] = t(e[r], r);
        return n;
      }
      function Os(e, t, n) {
        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
          r++;
        e.splice(r, 0, t);
      }
      function Yi() {
      }
      function ji(e, t) {
        var n;
        return Object.create ? n = Object.create(e) : (Yi.prototype = e, n = new Yi()), t && ht(t, n), n;
      }
      var Ds = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Fn(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ds.test(e));
      }
      function tn(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && Fn(e) ? !0 : t.test(e) : Fn(e);
      }
      function Zi(e) {
        for (var t in e)
          if (e.hasOwnProperty(t) && e[t])
            return !1;
        return !0;
      }
      var Hs = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function Pn(e) {
        return e.charCodeAt(0) >= 768 && Hs.test(e);
      }
      function Ji(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && Pn(e.charAt(t)); )
          t += n;
        return t;
      }
      function _r(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n)
            return t;
          var i = (t + n) / 2, o = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == t)
            return e(o) ? t : n;
          e(o) ? n = o : t = o + r;
        }
      }
      function Es(e, t, n, r) {
        if (!e)
          return r(t, n, "ltr", 0);
        for (var i = !1, o = 0; o < e.length; ++o) {
          var a = e[o];
          (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), a.level == 1 ? "rtl" : "ltr", o), i = !0);
        }
        i || r(t, n, "ltr");
      }
      var kr = null;
      function Sr(e, t, n) {
        var r;
        kr = null;
        for (var i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.from < t && o.to > t)
            return i;
          o.to == t && (o.from != o.to && n == "before" ? r = i : kr = i), o.from == t && (o.from != o.to && n != "before" ? r = i : kr = i);
        }
        return r ?? kr;
      }
      var Ws = /* @__PURE__ */ function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function n(u) {
          return u <= 247 ? e.charAt(u) : 1424 <= u && u <= 1524 ? "R" : 1536 <= u && u <= 1785 ? t.charAt(u - 1536) : 1774 <= u && u <= 2220 ? "r" : 8192 <= u && u <= 8203 ? "w" : u == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, o = /[LRr]/, a = /[Lb1n]/, s = /[1n]/;
        function l(u, f, c) {
          this.level = u, this.from = f, this.to = c;
        }
        return function(u, f) {
          var c = f == "ltr" ? "L" : "R";
          if (u.length == 0 || f == "ltr" && !r.test(u))
            return !1;
          for (var b = u.length, v = [], M = 0; M < b; ++M)
            v.push(n(u.charCodeAt(M)));
          for (var P = 0, U = c; P < b; ++P) {
            var Y = v[P];
            Y == "m" ? v[P] = U : U = Y;
          }
          for (var V = 0, j = c; V < b; ++V) {
            var ee = v[V];
            ee == "1" && j == "r" ? v[V] = "n" : o.test(ee) && (j = ee, ee == "r" && (v[V] = "R"));
          }
          for (var oe = 1, ne = v[0]; oe < b - 1; ++oe) {
            var fe = v[oe];
            fe == "+" && ne == "1" && v[oe + 1] == "1" ? v[oe] = "1" : fe == "," && ne == v[oe + 1] && (ne == "1" || ne == "n") && (v[oe] = ne), ne = fe;
          }
          for (var ge = 0; ge < b; ++ge) {
            var Ee = v[ge];
            if (Ee == ",")
              v[ge] = "N";
            else if (Ee == "%") {
              var be = void 0;
              for (be = ge + 1; be < b && v[be] == "%"; ++be)
                ;
              for (var rt = ge && v[ge - 1] == "!" || be < b && v[be] == "1" ? "1" : "N", Ve = ge; Ve < be; ++Ve)
                v[Ve] = rt;
              ge = be - 1;
            }
          }
          for (var Te = 0, $e = c; Te < b; ++Te) {
            var Ie = v[Te];
            $e == "L" && Ie == "1" ? v[Te] = "L" : o.test(Ie) && ($e = Ie);
          }
          for (var Ne = 0; Ne < b; ++Ne)
            if (i.test(v[Ne])) {
              var Me = void 0;
              for (Me = Ne + 1; Me < b && i.test(v[Me]); ++Me)
                ;
              for (var we = (Ne ? v[Ne - 1] : c) == "L", et = (Me < b ? v[Me] : c) == "L", xr = we == et ? we ? "L" : "R" : c, Ft = Ne; Ft < Me; ++Ft)
                v[Ft] = xr;
              Ne = Me - 1;
            }
          for (var Ue = [], yt, We = 0; We < b; )
            if (a.test(v[We])) {
              var Gi = We;
              for (++We; We < b && a.test(v[We]); ++We)
                ;
              Ue.push(new l(0, Gi, We));
            } else {
              var Lt = We, jt = Ue.length, Zt = f == "rtl" ? 1 : 0;
              for (++We; We < b && v[We] != "L"; ++We)
                ;
              for (var Qe = Lt; Qe < We; )
                if (s.test(v[Qe])) {
                  Lt < Qe && (Ue.splice(jt, 0, new l(1, Lt, Qe)), jt += Zt);
                  var wr = Qe;
                  for (++Qe; Qe < We && s.test(v[Qe]); ++Qe)
                    ;
                  Ue.splice(jt, 0, new l(2, wr, Qe)), jt += Zt, Lt = Qe;
                } else
                  ++Qe;
              Lt < We && Ue.splice(jt, 0, new l(1, Lt, We));
            }
          return f == "ltr" && (Ue[0].level == 1 && (yt = u.match(/^\s+/)) && (Ue[0].from = yt[0].length, Ue.unshift(new l(0, 0, yt[0].length))), ce(Ue).level == 1 && (yt = u.match(/\s+$/)) && (ce(Ue).to -= yt[0].length, Ue.push(new l(0, b - yt[0].length, b)))), f == "rtl" ? Ue.reverse() : Ue;
        };
      }();
      function xt(e, t) {
        var n = e.order;
        return n == null && (n = e.order = Ws(e.text, t)), n;
      }
      var Vi = [], ae = function(e, t, n) {
        if (e.addEventListener)
          e.addEventListener(t, n, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || Vi).concat(n);
        }
      };
      function In(e, t) {
        return e._handlers && e._handlers[t] || Vi;
      }
      function nt(e, t, n) {
        if (e.removeEventListener)
          e.removeEventListener(t, n, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + t, n);
        else {
          var r = e._handlers, i = r && r[t];
          if (i) {
            var o = Se(i, n);
            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function Ce(e, t) {
        var n = In(e, t);
        if (n.length)
          for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
            n[i].apply(null, r);
      }
      function Ae(e, t, n) {
        return typeof t == "string" && (t = { type: t, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), Ce(e, n || t.type, e, t), Rn(t) || t.codemirrorIgnore;
      }
      function $i(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
            Se(n, t[r]) == -1 && n.push(t[r]);
      }
      function at(e, t) {
        return In(e, t).length > 0;
      }
      function er(e) {
        e.prototype.on = function(t, n) {
          ae(this, t, n);
        }, e.prototype.off = function(t, n) {
          nt(this, t, n);
        };
      }
      function je(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function eo(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Rn(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function Cr(e) {
        je(e), eo(e);
      }
      function qn(e) {
        return e.target || e.srcElement;
      }
      function to(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), S && e.ctrlKey && t == 1 && (t = 3), t;
      }
      var zs = function() {
        if (p && F < 9)
          return !1;
        var e = d("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Bn;
      function Fs(e) {
        if (Bn == null) {
          var t = d("span", "​");
          E(e, d("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Bn = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(p && F < 8));
        }
        var n = Bn ? d("span", "​") : d("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return n.setAttribute("cm-text", ""), n;
      }
      var Un;
      function Ps(e) {
        if (Un != null)
          return Un;
        var t = E(e, document.createTextNode("AخA")), n = H(t, 0, 1).getBoundingClientRect(), r = H(t, 1, 2).getBoundingClientRect();
        return I(e), !n || n.left == n.right ? !1 : Un = r.right - n.right < 3;
      }
      var Gn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var t = 0, n = [], r = e.length; t <= r; ) {
          var i = e.indexOf(`
`, t);
          i == -1 && (i = e.length);
          var o = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i), a = o.indexOf("\r");
          a != -1 ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1);
        }
        return n;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, Is = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !t || t.parentElement() != e ? !1 : t.compareEndPoints("StartToEnd", t) != 0;
      }, Rs = function() {
        var e = d("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), Kn = null;
      function qs(e) {
        if (Kn != null)
          return Kn;
        var t = E(e, d("span", "x")), n = t.getBoundingClientRect(), r = H(t, 0, 1).getBoundingClientRect();
        return Kn = Math.abs(n.left - r.left) > 1;
      }
      var Xn = {}, tr = {};
      function Bs(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Xn[e] = t;
      }
      function Us(e, t) {
        tr[e] = t;
      }
      function rn(e) {
        if (typeof e == "string" && tr.hasOwnProperty(e))
          e = tr[e];
        else if (e && typeof e.name == "string" && tr.hasOwnProperty(e.name)) {
          var t = tr[e.name];
          typeof t == "string" && (t = { name: t }), e = ji(t, e), e.name = t.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return rn("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return rn("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function Qn(e, t) {
        t = rn(t);
        var n = Xn[t.name];
        if (!n)
          return Qn(e, "text/plain");
        var r = n(e, t);
        if (rr.hasOwnProperty(t.name)) {
          var i = rr[t.name];
          for (var o in i)
            i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]);
        }
        if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
          for (var a in t.modeProps)
            r[a] = t.modeProps[a];
        return r;
      }
      var rr = {};
      function Gs(e, t) {
        var n = rr.hasOwnProperty(e) ? rr[e] : rr[e] = {};
        ht(t, n);
      }
      function Pt(e, t) {
        if (t === !0)
          return t;
        if (e.copyState)
          return e.copyState(t);
        var n = {};
        for (var r in t) {
          var i = t[r];
          i instanceof Array && (i = i.concat([])), n[r] = i;
        }
        return n;
      }
      function Yn(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t), !(!n || n.mode == e)); )
          t = n.state, e = n.mode;
        return n || { mode: e, state: t };
      }
      function ro(e, t, n) {
        return e.startState ? e.startState(t, n) : !0;
      }
      var Le = function(e, t, n) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
      };
      Le.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, Le.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, Le.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, Le.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, Le.prototype.eat = function(e) {
        var t = this.string.charAt(this.pos), n;
        if (typeof e == "string" ? n = t == e : n = t && (e.test ? e.test(t) : e(t)), n)
          return ++this.pos, t;
      }, Le.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
          ;
        return this.pos > t;
      }, Le.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, Le.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, Le.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1)
          return this.pos = t, !0;
      }, Le.prototype.backUp = function(e) {
        this.pos -= e;
      }, Le.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = Pe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Pe(this.string, this.lineStart, this.tabSize) : 0);
      }, Le.prototype.indentation = function() {
        return Pe(this.string, null, this.tabSize) - (this.lineStart ? Pe(this.string, this.lineStart, this.tabSize) : 0);
      }, Le.prototype.match = function(e, t, n) {
        if (typeof e == "string") {
          var r = function(a) {
            return n ? a.toLowerCase() : a;
          }, i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e))
            return t !== !1 && (this.pos += e.length), !0;
        } else {
          var o = this.string.slice(this.pos).match(e);
          return o && o.index > 0 ? null : (o && t !== !1 && (this.pos += o[0].length), o);
        }
      }, Le.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, Le.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }, Le.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }, Le.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function re(e, t) {
        if (t -= e.first, t < 0 || t >= e.size)
          throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r], o = i.chunkSize();
            if (t < o) {
              n = i;
              break;
            }
            t -= o;
          }
        return n.lines[t];
      }
      function It(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function(o) {
          var a = o.text;
          i == n.line && (a = a.slice(0, n.ch)), i == t.line && (a = a.slice(t.ch)), r.push(a), ++i;
        }), r;
      }
      function jn(e, t, n) {
        var r = [];
        return e.iter(t, n, function(i) {
          r.push(i.text);
        }), r;
      }
      function pt(e, t) {
        var n = t - e.height;
        if (n)
          for (var r = e; r; r = r.parent)
            r.height += n;
      }
      function de(e) {
        if (e.parent == null)
          return null;
        for (var t = e.parent, n = Se(t.lines, e), r = t.parent; r; t = r, r = r.parent)
          for (var i = 0; r.children[i] != t; ++i)
            n += r.children[i].chunkSize();
        return n + t.first;
      }
      function Rt(e, t) {
        var n = e.first;
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var i = e.children[r], o = i.height;
            if (t < o) {
              e = i;
              continue e;
            }
            t -= o, n += i.chunkSize();
          }
          return n;
        } while (!e.lines);
        for (var a = 0; a < e.lines.length; ++a) {
          var s = e.lines[a], l = s.height;
          if (t < l)
            break;
          t -= l;
        }
        return n + a;
      }
      function Lr(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function Zn(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function B(e, t, n) {
        if (n === void 0 && (n = null), !(this instanceof B))
          return new B(e, t, n);
        this.line = e, this.ch = t, this.sticky = n;
      }
      function se(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function Jn(e, t) {
        return e.sticky == t.sticky && se(e, t) == 0;
      }
      function Vn(e) {
        return B(e.line, e.ch);
      }
      function nn(e, t) {
        return se(e, t) < 0 ? t : e;
      }
      function on(e, t) {
        return se(e, t) < 0 ? e : t;
      }
      function no(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function le(e, t) {
        if (t.line < e.first)
          return B(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? B(n, re(e, n).text.length) : Ks(t, re(e, t.line).text.length);
      }
      function Ks(e, t) {
        var n = e.ch;
        return n == null || n > t ? B(e.line, t) : n < 0 ? B(e.line, 0) : e;
      }
      function io(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
          n[r] = le(e, t[r]);
        return n;
      }
      var an = function(e, t) {
        this.state = e, this.lookAhead = t;
      }, gt = function(e, t, n, r) {
        this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      gt.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }, gt.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, gt.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, gt.fromSaved = function(e, t, n) {
        return t instanceof an ? new gt(e, Pt(e.mode, t.state), n, t.lookAhead) : new gt(e, Pt(e.mode, t), n);
      }, gt.prototype.save = function(e) {
        var t = e !== !1 ? Pt(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new an(t, this.maxLookAhead) : t;
      };
      function oo(e, t, n, r) {
        var i = [e.state.modeGen], o = {};
        co(
          e,
          t.text,
          e.doc.mode,
          n,
          function(u, f) {
            return i.push(u, f);
          },
          o,
          r
        );
        for (var a = n.state, s = function(u) {
          n.baseTokens = i;
          var f = e.state.overlays[u], c = 1, b = 0;
          n.state = !0, co(e, t.text, f.mode, n, function(v, M) {
            for (var P = c; b < v; ) {
              var U = i[c];
              U > v && i.splice(c, 1, v, i[c + 1], U), c += 2, b = Math.min(v, U);
            }
            if (M)
              if (f.opaque)
                i.splice(P, c - P, v, "overlay " + M), c = P + 2;
              else
                for (; P < c; P += 2) {
                  var Y = i[P + 1];
                  i[P + 1] = (Y ? Y + " " : "") + "overlay " + M;
                }
          }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1;
        }, l = 0; l < e.state.overlays.length; ++l) s(l);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function ao(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = Tr(e, de(t)), i = t.text.length > e.options.maxHighlightLength && Pt(e.doc.mode, r.state), o = oo(e, t, r);
          i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return t.styles;
      }
      function Tr(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)
          return new gt(r, !0, t);
        var o = Xs(e, t, n), a = o > r.first && re(r, o - 1).stateAfter, s = a ? gt.fromSaved(r, a, o) : new gt(r, ro(r.mode), o);
        return r.iter(o, t, function(l) {
          $n(e, l.text, s);
          var u = s.line;
          l.stateAfter = u == t - 1 || u % 5 == 0 || u >= i.viewFrom && u < i.viewTo ? s.save() : null, s.nextLine();
        }), n && (r.modeFrontier = s.line), s;
      }
      function $n(e, t, n, r) {
        var i = e.doc.mode, o = new Le(t, e.options.tabSize, n);
        for (o.start = o.pos = r || 0, t == "" && so(i, n.state); !o.eol(); )
          ei(i, o, n.state), o.start = o.pos;
      }
      function so(e, t) {
        if (e.blankLine)
          return e.blankLine(t);
        if (e.innerMode) {
          var n = Yn(e, t);
          if (n.mode.blankLine)
            return n.mode.blankLine(n.state);
        }
      }
      function ei(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = Yn(e, n).mode);
          var o = e.token(t, n);
          if (t.pos > t.start)
            return o;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var lo = function(e, t, n) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
      };
      function uo(e, t, n, r) {
        var i = e.doc, o = i.mode, a;
        t = le(i, t);
        var s = re(i, t.line), l = Tr(e, t.line, n), u = new Le(s.text, e.options.tabSize, l), f;
        for (r && (f = []); (r || u.pos < t.ch) && !u.eol(); )
          u.start = u.pos, a = ei(o, u, l.state), r && f.push(new lo(u, a, Pt(i.mode, l.state)));
        return r ? f : new lo(u, a, l.state);
      }
      function fo(e, t) {
        if (e)
          for (; ; ) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n)
              break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            t[r] == null ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
          }
        return e;
      }
      function co(e, t, n, r, i, o, a) {
        var s = n.flattenSpans;
        s == null && (s = e.options.flattenSpans);
        var l = 0, u = null, f = new Le(t, e.options.tabSize, r), c, b = e.options.addModeClass && [null];
        for (t == "" && fo(so(n, r.state), o); !f.eol(); ) {
          if (f.pos > e.options.maxHighlightLength ? (s = !1, a && $n(e, t, r, f.pos), f.pos = t.length, c = null) : c = fo(ei(n, f, r.state, b), o), b) {
            var v = b[0].name;
            v && (c = "m-" + (c ? v + " " + c : v));
          }
          if (!s || u != c) {
            for (; l < f.start; )
              l = Math.min(f.start, l + 5e3), i(l, u);
            u = c;
          }
          f.start = f.pos;
        }
        for (; l < f.pos; ) {
          var M = Math.min(f.pos, l + 5e3);
          i(M, u), l = M;
        }
      }
      function Xs(e, t, n) {
        for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
          if (s <= o.first)
            return o.first;
          var l = re(o, s - 1), u = l.stateAfter;
          if (u && (!n || s + (u instanceof an ? u.lookAhead : 0) <= o.modeFrontier))
            return s;
          var f = Pe(l.text, null, e.options.tabSize);
          (i == null || r > f) && (i = s - 1, r = f);
        }
        return i;
      }
      function Qs(e, t) {
        if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
          for (var n = e.first, r = t - 1; r > n; r--) {
            var i = re(e, r).stateAfter;
            if (i && (!(i instanceof an) || r + i.lookAhead < t)) {
              n = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, n);
        }
      }
      var ho = !1, wt = !1;
      function Ys() {
        ho = !0;
      }
      function js() {
        wt = !0;
      }
      function sn(e, t, n) {
        this.marker = e, this.from = t, this.to = n;
      }
      function Mr(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t)
              return r;
          }
      }
      function Zs(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function Js(e, t, n) {
        var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
      }
      function Vs(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker, s = o.from == null || (a.inclusiveLeft ? o.from <= t : o.from < t);
            if (s || o.from == t && a.type == "bookmark" && (!n || !o.marker.insertLeft)) {
              var l = o.to == null || (a.inclusiveRight ? o.to >= t : o.to > t);
              (r || (r = [])).push(new sn(a, o.from, l ? null : o.to));
            }
          }
        return r;
      }
      function $s(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker, s = o.to == null || (a.inclusiveRight ? o.to >= t : o.to > t);
            if (s || o.from == t && a.type == "bookmark" && (!n || o.marker.insertLeft)) {
              var l = o.from == null || (a.inclusiveLeft ? o.from <= t : o.from < t);
              (r || (r = [])).push(new sn(
                a,
                l ? null : o.from - t,
                o.to == null ? null : o.to - t
              ));
            }
          }
        return r;
      }
      function ti(e, t) {
        if (t.full)
          return null;
        var n = Lr(e, t.from.line) && re(e, t.from.line).markedSpans, r = Lr(e, t.to.line) && re(e, t.to.line).markedSpans;
        if (!n && !r)
          return null;
        var i = t.from.ch, o = t.to.ch, a = se(t.from, t.to) == 0, s = Vs(n, i, a), l = $s(r, o, a), u = t.text.length == 1, f = ce(t.text).length + (u ? i : 0);
        if (s)
          for (var c = 0; c < s.length; ++c) {
            var b = s[c];
            if (b.to == null) {
              var v = Mr(l, b.marker);
              v ? u && (b.to = v.to == null ? null : v.to + f) : b.to = i;
            }
          }
        if (l)
          for (var M = 0; M < l.length; ++M) {
            var P = l[M];
            if (P.to != null && (P.to += f), P.from == null) {
              var U = Mr(s, P.marker);
              U || (P.from = f, u && (s || (s = [])).push(P));
            } else
              P.from += f, u && (s || (s = [])).push(P);
          }
        s && (s = po(s)), l && l != s && (l = po(l));
        var Y = [s];
        if (!u) {
          var V = t.text.length - 2, j;
          if (V > 0 && s)
            for (var ee = 0; ee < s.length; ++ee)
              s[ee].to == null && (j || (j = [])).push(new sn(s[ee].marker, null, null));
          for (var oe = 0; oe < V; ++oe)
            Y.push(j);
          Y.push(l);
        }
        return Y;
      }
      function po(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function el(e, t, n) {
        var r = null;
        if (e.iter(t.line, n.line + 1, function(v) {
          if (v.markedSpans)
            for (var M = 0; M < v.markedSpans.length; ++M) {
              var P = v.markedSpans[M].marker;
              P.readOnly && (!r || Se(r, P) == -1) && (r || (r = [])).push(P);
            }
        }), !r)
          return null;
        for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
          for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
            var u = i[l];
            if (!(se(u.to, s.from) < 0 || se(u.from, s.to) > 0)) {
              var f = [l, 1], c = se(u.from, s.from), b = se(u.to, s.to);
              (c < 0 || !a.inclusiveLeft && !c) && f.push({ from: u.from, to: s.from }), (b > 0 || !a.inclusiveRight && !b) && f.push({ from: s.to, to: u.to }), i.splice.apply(i, f), l += f.length - 3;
            }
          }
        return i;
      }
      function go(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function vo(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function ln(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function un(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function ri(e, t) {
        var n = e.lines.length - t.lines.length;
        if (n != 0)
          return n;
        var r = e.find(), i = t.find(), o = se(r.from, i.from) || ln(e) - ln(t);
        if (o)
          return -o;
        var a = se(r.to, i.to) || un(e) - un(t);
        return a || t.id - e.id;
      }
      function mo(e, t) {
        var n = wt && e.markedSpans, r;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            i = n[o], i.marker.collapsed && (t ? i.from : i.to) == null && (!r || ri(r, i.marker) < 0) && (r = i.marker);
        return r;
      }
      function yo(e) {
        return mo(e, !0);
      }
      function fn(e) {
        return mo(e, !1);
      }
      function tl(e, t) {
        var n = wt && e.markedSpans, r;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var o = n[i];
            o.marker.collapsed && (o.from == null || o.from < t) && (o.to == null || o.to > t) && (!r || ri(r, o.marker) < 0) && (r = o.marker);
          }
        return r;
      }
      function bo(e, t, n, r, i) {
        var o = re(e, t), a = wt && o.markedSpans;
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var l = a[s];
            if (l.marker.collapsed) {
              var u = l.marker.find(0), f = se(u.from, n) || ln(l.marker) - ln(i), c = se(u.to, r) || un(l.marker) - un(i);
              if (!(f >= 0 && c <= 0 || f <= 0 && c >= 0) && (f <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? se(u.to, n) >= 0 : se(u.to, n) > 0) || f >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? se(u.from, r) <= 0 : se(u.from, r) < 0)))
                return !0;
            }
          }
      }
      function lt(e) {
        for (var t; t = yo(e); )
          e = t.find(-1, !0).line;
        return e;
      }
      function rl(e) {
        for (var t; t = fn(e); )
          e = t.find(1, !0).line;
        return e;
      }
      function nl(e) {
        for (var t, n; t = fn(e); )
          e = t.find(1, !0).line, (n || (n = [])).push(e);
        return n;
      }
      function ni(e, t) {
        var n = re(e, t), r = lt(n);
        return n == r ? t : de(r);
      }
      function xo(e, t) {
        if (t > e.lastLine())
          return t;
        var n = re(e, t), r;
        if (!Nt(e, n))
          return t;
        for (; r = fn(n); )
          n = r.find(1, !0).line;
        return de(n) + 1;
      }
      function Nt(e, t) {
        var n = wt && t.markedSpans;
        if (n) {
          for (var r = void 0, i = 0; i < n.length; ++i)
            if (r = n[i], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && ii(e, t, r))
                return !0;
            }
        }
      }
      function ii(e, t, n) {
        if (n.to == null) {
          var r = n.marker.find(1, !0);
          return ii(e, r.line, Mr(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
          return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (i.to == null || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ii(e, t, i))
            return !0;
      }
      function _t(e) {
        e = lt(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
          var i = n.lines[r];
          if (i == e)
            break;
          t += i.height;
        }
        for (var o = n.parent; o; n = o, o = n.parent)
          for (var a = 0; a < o.children.length; ++a) {
            var s = o.children[a];
            if (s == n)
              break;
            t += s.height;
          }
        return t;
      }
      function cn(e) {
        if (e.height == 0)
          return 0;
        for (var t = e.text.length, n, r = e; n = yo(r); ) {
          var i = n.find(0, !0);
          r = i.from.line, t += i.from.ch - i.to.ch;
        }
        for (r = e; n = fn(r); ) {
          var o = n.find(0, !0);
          t -= r.text.length - o.from.ch, r = o.to.line, t += r.text.length - o.to.ch;
        }
        return t;
      }
      function oi(e) {
        var t = e.display, n = e.doc;
        t.maxLine = re(n, n.first), t.maxLineLength = cn(t.maxLine), t.maxLineChanged = !0, n.iter(function(r) {
          var i = cn(r);
          i > t.maxLineLength && (t.maxLineLength = i, t.maxLine = r);
        });
      }
      var nr = function(e, t, n) {
        this.text = e, vo(this, t), this.height = n ? n(this) : 1;
      };
      nr.prototype.lineNo = function() {
        return de(this);
      }, er(nr);
      function il(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), go(e), vo(e, n);
        var i = r ? r(e) : 1;
        i != e.height && pt(e, i);
      }
      function ol(e) {
        e.parent = null, go(e);
      }
      var al = {}, sl = {};
      function wo(e, t) {
        if (!e || /^\s*$/.test(e))
          return null;
        var n = t.addModeClass ? sl : al;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function _o(e, t) {
        var n = T("span", null, null, q ? "padding-right: .1px" : null), r = {
          pre: T("pre", [n], "CodeMirror-line"),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var o = i ? t.rest[i - 1] : t.line, a = void 0;
          r.pos = 0, r.addToken = ul, Ps(e.display.measure) && (a = xt(o, e.doc.direction)) && (r.addToken = cl(r.addToken, a)), r.map = [];
          var s = t != e.display.externalMeasured && de(o);
          hl(o, r, ao(e, o, s)), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = _e(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = _e(o.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(Fs(e.display.measure))), i == 0 ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (q) {
          var l = r.content.lastChild;
          (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return Ce(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = _e(r.pre.className, r.textClass || "")), r;
      }
      function ll(e) {
        var t = d("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
      }
      function ul(e, t, n, r, i, o, a) {
        if (t) {
          var s = e.splitSpaces ? fl(t, e.trailingSpace) : t, l = e.cm.state.specialChars, u = !1, f;
          if (!l.test(t))
            e.col += t.length, f = document.createTextNode(s), e.map.push(e.pos, e.pos + t.length, f), p && F < 9 && (u = !0), e.pos += t.length;
          else {
            f = document.createDocumentFragment();
            for (var c = 0; ; ) {
              l.lastIndex = c;
              var b = l.exec(t), v = b ? b.index - c : t.length - c;
              if (v) {
                var M = document.createTextNode(s.slice(c, c + v));
                p && F < 9 ? f.appendChild(d("span", [M])) : f.appendChild(M), e.map.push(e.pos, e.pos + v, M), e.col += v, e.pos += v;
              }
              if (!b)
                break;
              c += v + 1;
              var P = void 0;
              if (b[0] == "	") {
                var U = e.cm.options.tabSize, Y = U - e.col % U;
                P = f.appendChild(d("span", $t(Y), "cm-tab")), P.setAttribute("role", "presentation"), P.setAttribute("cm-text", "	"), e.col += Y;
              } else b[0] == "\r" || b[0] == `
` ? (P = f.appendChild(d("span", b[0] == "\r" ? "␍" : "␤", "cm-invalidchar")), P.setAttribute("cm-text", b[0]), e.col += 1) : (P = e.cm.options.specialCharPlaceholder(b[0]), P.setAttribute("cm-text", b[0]), p && F < 9 ? f.appendChild(d("span", [P])) : f.appendChild(P), e.col += 1);
              e.map.push(e.pos, e.pos + 1, P), e.pos++;
            }
          }
          if (e.trailingSpace = s.charCodeAt(t.length - 1) == 32, n || r || i || u || o || a) {
            var V = n || "";
            r && (V += r), i && (V += i);
            var j = d("span", [f], V, o);
            if (a)
              for (var ee in a)
                a.hasOwnProperty(ee) && ee != "style" && ee != "class" && j.setAttribute(ee, a[ee]);
            return e.content.appendChild(j);
          }
          e.content.appendChild(f);
        }
      }
      function fl(e, t) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var n = t, r = "", i = 0; i < e.length; i++) {
          var o = e.charAt(i);
          o == " " && n && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (o = " "), r += o, n = o == " ";
        }
        return r;
      }
      function cl(e, t) {
        return function(n, r, i, o, a, s, l) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var u = n.pos, f = u + r.length; ; ) {
            for (var c = void 0, b = 0; b < t.length && (c = t[b], !(c.to > u && c.from <= u)); b++)
              ;
            if (c.to >= f)
              return e(n, r, i, o, a, s, l);
            e(n, r.slice(0, c.to - u), i, o, null, s, l), o = null, r = r.slice(c.to - u), u = c.to;
          }
        };
      }
      function ko(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
      }
      function hl(e, t, n) {
        var r = e.markedSpans, i = e.text, o = 0;
        if (!r) {
          for (var a = 1; a < n.length; a += 2)
            t.addToken(t, i.slice(o, o = n[a]), wo(n[a + 1], t.cm.options));
          return;
        }
        for (var s = i.length, l = 0, u = 1, f = "", c, b, v = 0, M, P, U, Y, V; ; ) {
          if (v == l) {
            M = P = U = b = "", V = null, Y = null, v = 1 / 0;
            for (var j = [], ee = void 0, oe = 0; oe < r.length; ++oe) {
              var ne = r[oe], fe = ne.marker;
              if (fe.type == "bookmark" && ne.from == l && fe.widgetNode)
                j.push(fe);
              else if (ne.from <= l && (ne.to == null || ne.to > l || fe.collapsed && ne.to == l && ne.from == l)) {
                if (ne.to != null && ne.to != l && v > ne.to && (v = ne.to, P = ""), fe.className && (M += " " + fe.className), fe.css && (b = (b ? b + ";" : "") + fe.css), fe.startStyle && ne.from == l && (U += " " + fe.startStyle), fe.endStyle && ne.to == v && (ee || (ee = [])).push(fe.endStyle, ne.to), fe.title && ((V || (V = {})).title = fe.title), fe.attributes)
                  for (var ge in fe.attributes)
                    (V || (V = {}))[ge] = fe.attributes[ge];
                fe.collapsed && (!Y || ri(Y.marker, fe) < 0) && (Y = ne);
              } else ne.from > l && v > ne.from && (v = ne.from);
            }
            if (ee)
              for (var Ee = 0; Ee < ee.length; Ee += 2)
                ee[Ee + 1] == v && (P += " " + ee[Ee]);
            if (!Y || Y.from == l)
              for (var be = 0; be < j.length; ++be)
                ko(t, 0, j[be]);
            if (Y && (Y.from || 0) == l) {
              if (ko(
                t,
                (Y.to == null ? s + 1 : Y.to) - l,
                Y.marker,
                Y.from == null
              ), Y.to == null)
                return;
              Y.to == l && (Y = !1);
            }
          }
          if (l >= s)
            break;
          for (var rt = Math.min(s, v); ; ) {
            if (f) {
              var Ve = l + f.length;
              if (!Y) {
                var Te = Ve > rt ? f.slice(0, rt - l) : f;
                t.addToken(
                  t,
                  Te,
                  c ? c + M : M,
                  U,
                  l + Te.length == v ? P : "",
                  b,
                  V
                );
              }
              if (Ve >= rt) {
                f = f.slice(rt - l), l = rt;
                break;
              }
              l = Ve, U = "";
            }
            f = i.slice(o, o = n[u++]), c = wo(n[u++], t.cm.options);
          }
        }
      }
      function So(e, t, n) {
        this.line = t, this.rest = nl(t), this.size = this.rest ? de(ce(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Nt(e, t);
      }
      function hn(e, t, n) {
        for (var r = [], i, o = t; o < n; o = i) {
          var a = new So(e.doc, re(e.doc, o), o);
          i = o + a.size, r.push(a);
        }
        return r;
      }
      var ir = null;
      function dl(e) {
        ir ? ir.ops.push(e) : e.ownsGroup = ir = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function pl(e) {
        var t = e.delayedCallbacks, n = 0;
        do {
          for (; n < t.length; n++)
            t[n].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var i = e.ops[r];
            if (i.cursorActivityHandlers)
              for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
          }
        } while (n < t.length);
      }
      function gl(e, t) {
        var n = e.ownsGroup;
        if (n)
          try {
            pl(n);
          } finally {
            ir = null, t(n);
          }
      }
      var Nr = null;
      function Oe(e, t) {
        var n = In(e, t);
        if (n.length) {
          var r = Array.prototype.slice.call(arguments, 2), i;
          ir ? i = ir.delayedCallbacks : Nr ? i = Nr : (i = Nr = [], setTimeout(vl, 0));
          for (var o = function(s) {
            i.push(function() {
              return n[s].apply(null, r);
            });
          }, a = 0; a < n.length; ++a)
            o(a);
        }
      }
      function vl() {
        var e = Nr;
        Nr = null;
        for (var t = 0; t < e.length; ++t)
          e[t]();
      }
      function Co(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
          var o = t.changes[i];
          o == "text" ? yl(e, t) : o == "gutter" ? To(e, t, n, r) : o == "class" ? ai(e, t) : o == "widget" && bl(e, t, r);
        }
        t.changes = null;
      }
      function Ar(e) {
        return e.node == e.text && (e.node = d("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), p && F < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function ml(e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), t.background)
          n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
        else if (n) {
          var r = Ar(t);
          t.background = r.insertBefore(d("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
        }
      }
      function Lo(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : _o(e, t);
      }
      function yl(e, t) {
        var n = t.text.className, r = Lo(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, ai(e, t)) : n && (t.text.className = n);
      }
      function ai(e, t) {
        ml(e, t), t.line.wrapClass ? Ar(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = n || "";
      }
      function To(e, t, n, r) {
        if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
          var i = Ar(t);
          t.gutterBackground = d(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
          var a = Ar(t), s = t.gutter = d("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (s.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), e.options.lineNumbers && (!o || !o["CodeMirror-linenumbers"]) && (t.lineNumber = s.appendChild(
            d(
              "div",
              Zn(e.options, n),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), o)
            for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var u = e.display.gutterSpecs[l].className, f = o.hasOwnProperty(u) && o[u];
              f && s.appendChild(d(
                "div",
                [f],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"
              ));
            }
        }
      }
      function bl(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r = C("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o)
          o = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
        Mo(e, t, n);
      }
      function xl(e, t, n, r) {
        var i = Lo(e, t);
        return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), ai(e, t), To(e, t, n, r), Mo(e, t, r), t.node;
      }
      function Mo(e, t, n) {
        if (No(e, t.line, t, n, !0), t.rest)
          for (var r = 0; r < t.rest.length; r++)
            No(e, t.rest[r], t, n, !1);
      }
      function No(e, t, n, r, i) {
        if (t.widgets)
          for (var o = Ar(n), a = 0, s = t.widgets; a < s.length; ++a) {
            var l = s[a], u = d("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
            l.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), wl(l, u, n, r), e.display.input.setUneditable(u), i && l.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), Oe(l, "redraw");
          }
      }
      function wl(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var i = r.wrapperWidth;
          t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function Or(e) {
        if (e.height != null)
          return e.height;
        var t = e.doc.cm;
        if (!t)
          return 0;
        if (!Z(document.body, e.node)) {
          var n = "position: relative;";
          e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), E(t.display.measure, d("div", [e.node], null, n));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function kt(e, t) {
        for (var n = qn(t); n != e.wrapper; n = n.parentNode)
          if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == e.sizer && n != e.mover)
            return !0;
      }
      function dn(e) {
        return e.lineSpace.offsetTop;
      }
      function si(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function Ao(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var t = E(e.measure, d("pre", "x", "CodeMirror-line-like")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function vt(e) {
        return Jt - e.display.nativeBarWidth;
      }
      function qt(e) {
        return e.display.scroller.clientWidth - vt(e) - e.display.barWidth;
      }
      function li(e) {
        return e.display.scroller.clientHeight - vt(e) - e.display.barHeight;
      }
      function _l(e, t, n) {
        var r = e.options.lineWrapping, i = r && qt(e);
        if (!t.measure.heights || r && t.measure.width != i) {
          var o = t.measure.heights = [];
          if (r) {
            t.measure.width = i;
            for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
              var l = a[s], u = a[s + 1];
              Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top);
            }
          }
          o.push(n.bottom - n.top);
        }
      }
      function Oo(e, t, n) {
        if (e.line == t)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (de(e.rest[i]) > n)
              return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
      }
      function kl(e, t) {
        t = lt(t);
        var n = de(t), r = e.display.externalMeasured = new So(e.doc, t, n);
        r.lineN = n;
        var i = r.built = _o(e, r);
        return r.text = i.pre, E(e.display.lineMeasure, i.pre), r;
      }
      function Do(e, t, n, r) {
        return mt(e, or(e, t), n, r);
      }
      function ui(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Gt(e, t)];
        var n = e.display.externalMeasured;
        if (n && t >= n.lineN && t < n.lineN + n.size)
          return n;
      }
      function or(e, t) {
        var n = de(t), r = ui(e, n);
        r && !r.text ? r = null : r && r.changes && (Co(e, r, n, pi(e)), e.curOp.forceUpdate = !0), r || (r = kl(e, t));
        var i = Oo(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1
        };
      }
      function mt(e, t, n, r, i) {
        t.before && (n = -1);
        var o = n + (r || ""), a;
        return t.cache.hasOwnProperty(o) ? a = t.cache[o] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (_l(e, t.view, t.rect), t.hasHeights = !0), a = Cl(e, t, n, r), a.bogus || (t.cache[o] = a)), {
          left: a.left,
          right: a.right,
          top: i ? a.rtop : a.top,
          bottom: i ? a.rbottom : a.bottom
        };
      }
      var Ho = { left: 0, right: 0, top: 0, bottom: 0 };
      function Eo(e, t, n) {
        for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3)
          if (s = e[u], l = e[u + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? (i = t - s, o = i + 1) : (u == e.length - 3 || t == l && e[u + 3] > t) && (o = l - s, i = o - 1, t >= l && (a = "right")), i != null) {
            if (r = e[u + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), n == "left" && i == 0)
              for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                r = e[(u -= 3) + 2], a = "left";
            if (n == "right" && i == l - s)
              for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                r = e[(u += 3) + 2], a = "right";
            break;
          }
        return { node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: l };
      }
      function Sl(e, t) {
        var n = Ho;
        if (t == "left")
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
            ;
        else
          for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--)
            ;
        return n;
      }
      function Cl(e, t, n, r) {
        var i = Eo(t.map, n, r), o = i.node, a = i.start, s = i.end, l = i.collapse, u;
        if (o.nodeType == 3) {
          for (var f = 0; f < 4; f++) {
            for (; a && Pn(t.line.text.charAt(i.coverStart + a)); )
              --a;
            for (; i.coverStart + s < i.coverEnd && Pn(t.line.text.charAt(i.coverStart + s)); )
              ++s;
            if (p && F < 9 && a == 0 && s == i.coverEnd - i.coverStart ? u = o.parentNode.getBoundingClientRect() : u = Sl(H(o, a, s).getClientRects(), r), u.left || u.right || a == 0)
              break;
            s = a, a = a - 1, l = "right";
          }
          p && F < 11 && (u = Ll(e.display.measure, u));
        } else {
          a > 0 && (l = r = "right");
          var c;
          e.options.lineWrapping && (c = o.getClientRects()).length > 1 ? u = c[r == "right" ? c.length - 1 : 0] : u = o.getBoundingClientRect();
        }
        if (p && F < 9 && !a && (!u || !u.left && !u.right)) {
          var b = o.parentNode.getClientRects()[0];
          b ? u = { left: b.left, right: b.left + sr(e.display), top: b.top, bottom: b.bottom } : u = Ho;
        }
        for (var v = u.top - t.rect.top, M = u.bottom - t.rect.top, P = (v + M) / 2, U = t.view.measure.heights, Y = 0; Y < U.length - 1 && !(P < U[Y]); Y++)
          ;
        var V = Y ? U[Y - 1] : 0, j = U[Y], ee = {
          left: (l == "right" ? u.right : u.left) - t.rect.left,
          right: (l == "left" ? u.left : u.right) - t.rect.left,
          top: V,
          bottom: j
        };
        return !u.left && !u.right && (ee.bogus = !0), e.options.singleCursorHeightPerLine || (ee.rtop = v, ee.rbottom = M), ee;
      }
      function Ll(e, t) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !qs(e))
          return t;
        var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: t.left * n,
          right: t.right * n,
          top: t.top * r,
          bottom: t.bottom * r
        };
      }
      function Wo(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var t = 0; t < e.rest.length; t++)
            e.measure.caches[t] = {};
      }
      function zo(e) {
        e.display.externalMeasure = null, I(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
          Wo(e.display.view[t]);
      }
      function Dr(e) {
        zo(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function Fo(e) {
        return N && x ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function Po(e) {
        return N && x ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function fi(e) {
        var t = lt(e), n = t.widgets, r = 0;
        if (n)
          for (var i = 0; i < n.length; ++i)
            n[i].above && (r += Or(n[i]));
        return r;
      }
      function pn(e, t, n, r, i) {
        if (!i) {
          var o = fi(t);
          n.top += o, n.bottom += o;
        }
        if (r == "line")
          return n;
        r || (r = "local");
        var a = _t(t);
        if (r == "local" ? a += dn(e.display) : a -= e.display.viewOffset, r == "page" || r == "window") {
          var s = e.display.lineSpace.getBoundingClientRect();
          a += s.top + (r == "window" ? 0 : Po(ze(e)));
          var l = s.left + (r == "window" ? 0 : Fo(ze(e)));
          n.left += l, n.right += l;
        }
        return n.top += a, n.bottom += a, n;
      }
      function Io(e, t, n) {
        if (n == "div")
          return t;
        var r = t.left, i = t.top;
        if (n == "page")
          r -= Fo(ze(e)), i -= Po(ze(e));
        else if (n == "local" || !n) {
          var o = e.display.sizer.getBoundingClientRect();
          r += o.left, i += o.top;
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return { left: r - a.left, top: i - a.top };
      }
      function gn(e, t, n, r, i) {
        return r || (r = re(e.doc, t.line)), pn(e, r, Do(e, r, t.ch, i), n);
      }
      function ut(e, t, n, r, i, o) {
        r = r || re(e.doc, t.line), i || (i = or(e, r));
        function a(M, P) {
          var U = mt(e, i, M, P ? "right" : "left", o);
          return P ? U.left = U.right : U.right = U.left, pn(e, r, U, n);
        }
        var s = xt(r, e.doc.direction), l = t.ch, u = t.sticky;
        if (l >= r.text.length ? (l = r.text.length, u = "before") : l <= 0 && (l = 0, u = "after"), !s)
          return a(u == "before" ? l - 1 : l, u == "before");
        function f(M, P, U) {
          var Y = s[P], V = Y.level == 1;
          return a(U ? M - 1 : M, V != U);
        }
        var c = Sr(s, l, u), b = kr, v = f(l, c, u == "before");
        return b != null && (v.other = f(l, b, u != "before")), v;
      }
      function Ro(e, t) {
        var n = 0;
        t = le(e.doc, t), e.options.lineWrapping || (n = sr(e.display) * t.ch);
        var r = re(e.doc, t.line), i = _t(r) + dn(e.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function ci(e, t, n, r, i) {
        var o = B(e, t, n);
        return o.xRel = i, r && (o.outside = r), o;
      }
      function hi(e, t, n) {
        var r = e.doc;
        if (n += e.display.viewOffset, n < 0)
          return ci(r.first, 0, null, -1, -1);
        var i = Rt(r, n), o = r.first + r.size - 1;
        if (i > o)
          return ci(r.first + r.size - 1, re(r, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var a = re(r, i); ; ) {
          var s = Tl(e, a, i, t, n), l = tl(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
          if (!l)
            return s;
          var u = l.find(1);
          if (u.line == i)
            return u;
          a = re(r, i = u.line);
        }
      }
      function qo(e, t, n, r) {
        r -= fi(t);
        var i = t.text.length, o = _r(function(a) {
          return mt(e, n, a - 1).bottom <= r;
        }, i, 0);
        return i = _r(function(a) {
          return mt(e, n, a).top > r;
        }, o, i), { begin: o, end: i };
      }
      function Bo(e, t, n, r) {
        n || (n = or(e, t));
        var i = pn(e, t, mt(e, n, r), "line").top;
        return qo(e, t, n, i);
      }
      function di(e, t, n, r) {
        return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t;
      }
      function Tl(e, t, n, r, i) {
        i -= _t(t);
        var o = or(e, t), a = fi(t), s = 0, l = t.text.length, u = !0, f = xt(t, e.doc.direction);
        if (f) {
          var c = (e.options.lineWrapping ? Nl : Ml)(e, t, n, o, f, r, i);
          u = c.level != 1, s = u ? c.from : c.to - 1, l = u ? c.to : c.from - 1;
        }
        var b = null, v = null, M = _r(function(oe) {
          var ne = mt(e, o, oe);
          return ne.top += a, ne.bottom += a, di(ne, r, i, !1) ? (ne.top <= i && ne.left <= r && (b = oe, v = ne), !0) : !1;
        }, s, l), P, U, Y = !1;
        if (v) {
          var V = r - v.left < v.right - r, j = V == u;
          M = b + (j ? 0 : 1), U = j ? "after" : "before", P = V ? v.left : v.right;
        } else {
          !u && (M == l || M == s) && M++, U = M == 0 ? "after" : M == t.text.length ? "before" : mt(e, o, M - (u ? 1 : 0)).bottom + a <= i == u ? "after" : "before";
          var ee = ut(e, B(n, M, U), "line", t, o);
          P = ee.left, Y = i < ee.top ? -1 : i >= ee.bottom ? 1 : 0;
        }
        return M = Ji(t.text, M, 1), ci(n, M, U, Y, r - P);
      }
      function Ml(e, t, n, r, i, o, a) {
        var s = _r(function(c) {
          var b = i[c], v = b.level != 1;
          return di(ut(
            e,
            B(n, v ? b.to : b.from, v ? "before" : "after"),
            "line",
            t,
            r
          ), o, a, !0);
        }, 0, i.length - 1), l = i[s];
        if (s > 0) {
          var u = l.level != 1, f = ut(
            e,
            B(n, u ? l.from : l.to, u ? "after" : "before"),
            "line",
            t,
            r
          );
          di(f, o, a, !0) && f.top > a && (l = i[s - 1]);
        }
        return l;
      }
      function Nl(e, t, n, r, i, o, a) {
        var s = qo(e, t, r, a), l = s.begin, u = s.end;
        /\s/.test(t.text.charAt(u - 1)) && u--;
        for (var f = null, c = null, b = 0; b < i.length; b++) {
          var v = i[b];
          if (!(v.from >= u || v.to <= l)) {
            var M = v.level != 1, P = mt(e, r, M ? Math.min(u, v.to) - 1 : Math.max(l, v.from)).right, U = P < o ? o - P + 1e9 : P - o;
            (!f || c > U) && (f = v, c = U);
          }
        }
        return f || (f = i[i.length - 1]), f.from < l && (f = { from: l, to: f.to, level: f.level }), f.to > u && (f = { from: f.from, to: u, level: f.level }), f;
      }
      var Bt;
      function ar(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Bt == null) {
          Bt = d("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            Bt.appendChild(document.createTextNode("x")), Bt.appendChild(d("br"));
          Bt.appendChild(document.createTextNode("x"));
        }
        E(e.measure, Bt);
        var n = Bt.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), I(e.measure), n || 1;
      }
      function sr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var t = d("span", "xxxxxxxxxx"), n = d("pre", [t], "CodeMirror-line-like");
        E(e.measure, n);
        var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function pi(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
          var s = e.display.gutterSpecs[a].className;
          n[s] = o.offsetLeft + o.clientLeft + i, r[s] = o.clientWidth;
        }
        return {
          fixedPos: gi(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth
        };
      }
      function gi(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function Uo(e) {
        var t = ar(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / sr(e.display) - 3);
        return function(i) {
          if (Nt(e.doc, i))
            return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
        };
      }
      function vi(e) {
        var t = e.doc, n = Uo(e);
        t.iter(function(r) {
          var i = n(r);
          i != r.height && pt(r, i);
        });
      }
      function Ut(e, t, n, r) {
        var i = e.display;
        if (!n && qn(t).getAttribute("cm-not-content") == "true")
          return null;
        var o, a, s = i.lineSpace.getBoundingClientRect();
        try {
          o = t.clientX - s.left, a = t.clientY - s.top;
        } catch {
          return null;
        }
        var l = hi(e, o, a), u;
        if (r && l.xRel > 0 && (u = re(e.doc, l.line).text).length == l.ch) {
          var f = Pe(u, u.length, e.options.tabSize) - u.length;
          l = B(l.line, Math.max(0, Math.round((o - Ao(e.display).left) / sr(e.display)) - f));
        }
        return l;
      }
      function Gt(e, t) {
        if (t >= e.display.viewTo || (t -= e.display.viewFrom, t < 0))
          return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if (t -= n[r].size, t < 0)
            return r;
      }
      function Ze(e, t, n, r) {
        t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0);
        var i = e.display;
        if (r && n < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo)
          wt && ni(e.doc, t) < i.viewTo && Ot(e);
        else if (n <= i.viewFrom)
          wt && xo(e.doc, n + r) > i.viewFrom ? Ot(e) : (i.viewFrom += r, i.viewTo += r);
        else if (t <= i.viewFrom && n >= i.viewTo)
          Ot(e);
        else if (t <= i.viewFrom) {
          var o = vn(e, n, n + r, 1);
          o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : Ot(e);
        } else if (n >= i.viewTo) {
          var a = vn(e, t, t, -1);
          a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : Ot(e);
        } else {
          var s = vn(e, t, t, -1), l = vn(e, n, n + r, 1);
          s && l ? (i.view = i.view.slice(0, s.index).concat(hn(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : Ot(e);
        }
        var u = i.externalMeasured;
        u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null));
      }
      function At(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display, i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
          var o = r.view[Gt(e, t)];
          if (o.node != null) {
            var a = o.changes || (o.changes = []);
            Se(a, n) == -1 && a.push(n);
          }
        }
      }
      function Ot(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function vn(e, t, n, r) {
        var i = Gt(e, t), o, a = e.display.view;
        if (!wt || n == e.doc.first + e.doc.size)
          return { index: i, lineN: n };
        for (var s = e.display.viewFrom, l = 0; l < i; l++)
          s += a[l].size;
        if (s != t) {
          if (r > 0) {
            if (i == a.length - 1)
              return null;
            o = s + a[i].size - t, i++;
          } else
            o = s - t;
          t += o, n += o;
        }
        for (; ni(e.doc, n) != n; ) {
          if (i == (r < 0 ? 0 : a.length - 1))
            return null;
          n += r * a[i - (r < 0 ? 1 : 0)].size, i += r;
        }
        return { index: i, lineN: n };
      }
      function Al(e, t, n) {
        var r = e.display, i = r.view;
        i.length == 0 || t >= r.viewTo || n <= r.viewFrom ? (r.view = hn(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = hn(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Gt(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(hn(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Gt(e, n)))), r.viewTo = n;
      }
      function Go(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          !i.hidden && (!i.node || i.changes) && ++n;
        }
        return n;
      }
      function Hr(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function Ko(e, t) {
        t === void 0 && (t = !0);
        var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = e.options.$customCursor;
        a && (t = !0);
        for (var s = 0; s < n.sel.ranges.length; s++)
          if (!(!t && s == n.sel.primIndex)) {
            var l = n.sel.ranges[s];
            if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
              var u = l.empty();
              if (a) {
                var f = a(e, l);
                f && mi(e, f, i);
              } else (u || e.options.showCursorWhenSelecting) && mi(e, l.head, i);
              u || Ol(e, l, o);
            }
          }
        return r;
      }
      function mi(e, t, n) {
        var r = ut(e, t, "div", null, null, !e.options.singleCursorHeightPerLine), i = n.appendChild(d("div", " ", "CodeMirror-cursor"));
        if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var o = gn(e, t, "div", null, null), a = o.right - o.left;
          i.style.width = (a > 0 ? a : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var s = n.appendChild(d("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          s.style.display = "", s.style.left = r.other.left + "px", s.style.top = r.other.top + "px", s.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function mn(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function Ol(e, t, n) {
        var r = e.display, i = e.doc, o = document.createDocumentFragment(), a = Ao(e.display), s = a.left, l = Math.max(r.sizerWidth, qt(e) - r.sizer.offsetLeft) - a.right, u = i.direction == "ltr";
        function f(j, ee, oe, ne) {
          ee < 0 && (ee = 0), ee = Math.round(ee), ne = Math.round(ne), o.appendChild(d("div", null, "CodeMirror-selected", "position: absolute; left: " + j + `px;
                             top: ` + ee + "px; width: " + (oe ?? l - j) + `px;
                             height: ` + (ne - ee) + "px"));
        }
        function c(j, ee, oe) {
          var ne = re(i, j), fe = ne.text.length, ge, Ee;
          function be(Te, $e) {
            return gn(e, B(j, Te), "div", ne, $e);
          }
          function rt(Te, $e, Ie) {
            var Ne = Bo(e, ne, null, Te), Me = $e == "ltr" == (Ie == "after") ? "left" : "right", we = Ie == "after" ? Ne.begin : Ne.end - (/\s/.test(ne.text.charAt(Ne.end - 1)) ? 2 : 1);
            return be(we, Me)[Me];
          }
          var Ve = xt(ne, i.direction);
          return Es(Ve, ee || 0, oe ?? fe, function(Te, $e, Ie, Ne) {
            var Me = Ie == "ltr", we = be(Te, Me ? "left" : "right"), et = be($e - 1, Me ? "right" : "left"), xr = ee == null && Te == 0, Ft = oe == null && $e == fe, Ue = Ne == 0, yt = !Ve || Ne == Ve.length - 1;
            if (et.top - we.top <= 3) {
              var We = (u ? xr : Ft) && Ue, Gi = (u ? Ft : xr) && yt, Lt = We ? s : (Me ? we : et).left, jt = Gi ? l : (Me ? et : we).right;
              f(Lt, we.top, jt - Lt, we.bottom);
            } else {
              var Zt, Qe, wr, Ki;
              Me ? (Zt = u && xr && Ue ? s : we.left, Qe = u ? l : rt(Te, Ie, "before"), wr = u ? s : rt($e, Ie, "after"), Ki = u && Ft && yt ? l : et.right) : (Zt = u ? rt(Te, Ie, "before") : s, Qe = !u && xr && Ue ? l : we.right, wr = !u && Ft && yt ? s : et.left, Ki = u ? rt($e, Ie, "after") : l), f(Zt, we.top, Qe - Zt, we.bottom), we.bottom < et.top && f(s, we.bottom, null, et.top), f(wr, et.top, Ki - wr, et.bottom);
            }
            (!ge || mn(we, ge) < 0) && (ge = we), mn(et, ge) < 0 && (ge = et), (!Ee || mn(we, Ee) < 0) && (Ee = we), mn(et, Ee) < 0 && (Ee = et);
          }), { start: ge, end: Ee };
        }
        var b = t.from(), v = t.to();
        if (b.line == v.line)
          c(b.line, b.ch, v.ch);
        else {
          var M = re(i, b.line), P = re(i, v.line), U = lt(M) == lt(P), Y = c(b.line, b.ch, U ? M.text.length + 1 : null).end, V = c(v.line, U ? 0 : null, v.ch).start;
          U && (Y.top < V.top - 2 ? (f(Y.right, Y.top, null, Y.bottom), f(s, V.top, V.left, V.bottom)) : f(Y.right, Y.top, V.left - Y.right, Y.bottom)), Y.bottom < V.top && f(s, Y.bottom, null, V.top);
        }
        n.appendChild(o);
      }
      function yi(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = !0;
          t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            e.hasFocus() || lr(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function Xo(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || xi(e));
      }
      function bi(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && lr(e));
        }, 100);
      }
      function xi(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (Ce(e, "focus", e, t), e.state.focused = !0, ue(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), q && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), yi(e));
      }
      function lr(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (Ce(e, "blur", e, t), e.state.focused = !1, y(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function yn(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, o = 0, a = 0; a < t.view.length; a++) {
          var s = t.view[a], l = e.options.lineWrapping, u = void 0, f = 0;
          if (!s.hidden) {
            if (i += s.line.height, p && F < 8) {
              var c = s.node.offsetTop + s.node.offsetHeight;
              u = c - n, n = c;
            } else {
              var b = s.node.getBoundingClientRect();
              u = b.bottom - b.top, !l && s.text.firstChild && (f = s.text.firstChild.getBoundingClientRect().right - b.left - 1);
            }
            var v = s.line.height - u;
            if ((v > 5e-3 || v < -5e-3) && (i < r && (o -= v), pt(s.line, u), Qo(s.line), s.rest))
              for (var M = 0; M < s.rest.length; M++)
                Qo(s.rest[M]);
            if (f > e.display.sizerWidth) {
              var P = Math.ceil(f / sr(e.display));
              P > e.display.maxLineLength && (e.display.maxLineLength = P, e.display.maxLine = s.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(o) > 2 && (t.scroller.scrollTop += o);
      }
      function Qo(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t], r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
      }
      function bn(e, t, n) {
        var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - dn(e));
        var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight, o = Rt(t, r), a = Rt(t, i);
        if (n && n.ensure) {
          var s = n.ensure.from.line, l = n.ensure.to.line;
          s < o ? (o = s, a = Rt(t, _t(re(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = Rt(t, _t(re(t, l)) - e.wrapper.clientHeight), a = l);
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function Dl(e, t) {
        if (!Ae(e, "scrollCursorIntoView")) {
          var n = e.display, r = n.sizer.getBoundingClientRect(), i = null, o = n.wrapper.ownerDocument;
          if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (o.defaultView.innerHeight || o.documentElement.clientHeight) && (i = !1), i != null && !w) {
            var a = d("div", "​", null, `position: absolute;
                         top: ` + (t.top - n.viewOffset - dn(e.display)) + `px;
                         height: ` + (t.bottom - t.top + vt(e) + n.barHeight) + `px;
                         left: ` + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(a), a.scrollIntoView(i), e.display.lineSpace.removeChild(a);
          }
        }
      }
      function Hl(e, t, n, r) {
        r == null && (r = 0);
        var i;
        !e.options.lineWrapping && t == n && (n = t.sticky == "before" ? B(t.line, t.ch + 1, "before") : t, t = t.ch ? B(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after") : t);
        for (var o = 0; o < 5; o++) {
          var a = !1, s = ut(e, t), l = !n || n == t ? s : ut(e, n);
          i = {
            left: Math.min(s.left, l.left),
            top: Math.min(s.top, l.top) - r,
            right: Math.max(s.left, l.left),
            bottom: Math.max(s.bottom, l.bottom) + r
          };
          var u = wi(e, i), f = e.doc.scrollTop, c = e.doc.scrollLeft;
          if (u.scrollTop != null && (Wr(e, u.scrollTop), Math.abs(e.doc.scrollTop - f) > 1 && (a = !0)), u.scrollLeft != null && (Kt(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (a = !0)), !a)
            break;
        }
        return i;
      }
      function El(e, t) {
        var n = wi(e, t);
        n.scrollTop != null && Wr(e, n.scrollTop), n.scrollLeft != null && Kt(e, n.scrollLeft);
      }
      function wi(e, t) {
        var n = e.display, r = ar(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : n.scroller.scrollTop, o = li(e), a = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + si(n), l = t.top < r, u = t.bottom > s - r;
        if (t.top < i)
          a.scrollTop = l ? 0 : t.top;
        else if (t.bottom > i + o) {
          var f = Math.min(t.top, (u ? s : t.bottom) - o);
          f != i && (a.scrollTop = f);
        }
        var c = e.options.fixedGutter ? 0 : n.gutters.offsetWidth, b = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : n.scroller.scrollLeft - c, v = qt(e) - n.gutters.offsetWidth, M = t.right - t.left > v;
        return M && (t.right = t.left + v), t.left < 10 ? a.scrollLeft = 0 : t.left < b ? a.scrollLeft = Math.max(0, t.left + c - (M ? 0 : 10)) : t.right > v + b - 3 && (a.scrollLeft = t.right + (M ? 0 : 10) - v), a;
      }
      function _i(e, t) {
        t != null && (xn(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t);
      }
      function ur(e) {
        xn(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
      }
      function Er(e, t, n) {
        (t != null || n != null) && xn(e), t != null && (e.curOp.scrollLeft = t), n != null && (e.curOp.scrollTop = n);
      }
      function Wl(e, t) {
        xn(e), e.curOp.scrollToPos = t;
      }
      function xn(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          var n = Ro(e, t.from), r = Ro(e, t.to);
          Yo(e, n, r, t.margin);
        }
      }
      function Yo(e, t, n, r) {
        var i = wi(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r
        });
        Er(e, i.scrollLeft, i.scrollTop);
      }
      function Wr(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (G || Si(e, { top: t }), jo(e, t, !0), G && Si(e), Pr(e, 100));
      }
      function jo(e, t, n) {
        t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), !(e.display.scroller.scrollTop == t && !n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
      }
      function Kt(e, t, n, r) {
        t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) && (e.doc.scrollLeft = t, ea(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
      }
      function zr(e) {
        var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + si(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + vt(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n
        };
      }
      var Xt = function(e, t, n) {
        this.cm = n;
        var r = this.vert = d("div", [d("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), i = this.horiz = d("div", [d("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = i.tabIndex = -1, e(r), e(i), ae(r, "scroll", function() {
          r.clientHeight && t(r.scrollTop, "vertical");
        }), ae(i, "scroll", function() {
          i.clientWidth && t(i.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, p && F < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      Xt.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (n) {
          this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
          var i = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (t) {
          this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var o = e.viewWidth - e.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? r : 0, bottom: t ? r : 0 };
      }, Xt.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, Xt.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, Xt.prototype.zeroWidthHack = function() {
        var e = S && !ie ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new dt(), this.disableVert = new dt();
      }, Xt.prototype.enableZeroWidthBar = function(e, t, n) {
        e.style.visibility = "";
        function r() {
          var i = e.getBoundingClientRect(), o = n == "vert" ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
          o != e ? e.style.visibility = "hidden" : t.set(1e3, r);
        }
        t.set(1e3, r);
      }, Xt.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Fr = function() {
      };
      Fr.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Fr.prototype.setScrollLeft = function() {
      }, Fr.prototype.setScrollTop = function() {
      }, Fr.prototype.clear = function() {
      };
      function fr(e, t) {
        t || (t = zr(e));
        var n = e.display.barWidth, r = e.display.barHeight;
        Zo(e, t);
        for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
          n != e.display.barWidth && e.options.lineWrapping && yn(e), Zo(e, zr(e)), n = e.display.barWidth, r = e.display.barHeight;
      }
      function Zo(e, t) {
        var n = e.display, r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
      }
      var Jo = { native: Xt, null: Fr };
      function Vo(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && y(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Jo[e.options.scrollbarStyle](function(t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), ae(t, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), t.setAttribute("cm-not-content", "true");
        }, function(t, n) {
          n == "horizontal" ? Kt(e, t) : Wr(e, t);
        }, e), e.display.scrollbars.addClass && ue(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var zl = 0;
      function Qt(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          // Flag that indicates that lines might need to be redrawn
          startHeight: e.doc.height,
          // Used to detect need to update scrollbar
          forceUpdate: !1,
          // Used to force a redraw
          updateInput: 0,
          // Whether to reset the input textarea
          typing: !1,
          // Whether this reset should be careful to leave existing text (for compositing)
          changeObjs: null,
          // Accumulated changes, for firing change events
          cursorActivityHandlers: null,
          // Set of handlers to fire cursorActivity on
          cursorActivityCalled: 0,
          // Tracks which cursorActivity handlers have been called already
          selectionChanged: !1,
          // Whether the selection needs to be redrawn
          updateMaxLine: !1,
          // Set when the widest line needs to be determined anew
          scrollLeft: null,
          scrollTop: null,
          // Intermediate scroll position, not pushed to DOM yet
          scrollToPos: null,
          // Used to scroll to a specific position
          focus: !1,
          id: ++zl,
          // Unique ID
          markArrays: null
          // Used by addMarkedSpan
        }, dl(e.curOp);
      }
      function Yt(e) {
        var t = e.curOp;
        t && gl(t, function(n) {
          for (var r = 0; r < n.ops.length; r++)
            n.ops[r].cm.curOp = null;
          Fl(n);
        });
      }
      function Fl(e) {
        for (var t = e.ops, n = 0; n < t.length; n++)
          Pl(t[n]);
        for (var r = 0; r < t.length; r++)
          Il(t[r]);
        for (var i = 0; i < t.length; i++)
          Rl(t[i]);
        for (var o = 0; o < t.length; o++)
          ql(t[o]);
        for (var a = 0; a < t.length; a++)
          Bl(t[a]);
      }
      function Pl(e) {
        var t = e.cm, n = t.display;
        Gl(t), e.updateMaxLine && oi(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new wn(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function Il(e) {
        e.updatedDisplay = e.mustUpdate && ki(e.cm, e.update);
      }
      function Rl(e) {
        var t = e.cm, n = t.display;
        e.updatedDisplay && yn(t), e.barMeasure = zr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Do(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + vt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - qt(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
      }
      function ql(e) {
        var t = e.cm;
        e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Kt(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
        var n = e.focus && e.focus == te(ve(t));
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && fr(t, e.barMeasure), e.updatedDisplay && Li(t, e.barMeasure), e.selectionChanged && yi(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Xo(e.cm);
      }
      function Bl(e) {
        var t = e.cm, n = t.display, r = t.doc;
        if (e.updatedDisplay && $o(t, e.update), n.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (n.wheelStartX = n.wheelStartY = null), e.scrollTop != null && jo(t, e.scrollTop, e.forceScroll), e.scrollLeft != null && Kt(t, e.scrollLeft, !0, !0), e.scrollToPos) {
          var i = Hl(
            t,
            le(r, e.scrollToPos.from),
            le(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          Dl(t, i);
        }
        var o = e.maybeHiddenMarkers, a = e.maybeUnhiddenMarkers;
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length || Ce(o[s], "hide");
        if (a)
          for (var l = 0; l < a.length; ++l)
            a[l].lines.length && Ce(a[l], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Ce(t, "changes", t, e.changeObjs), e.update && e.update.finish();
      }
      function tt(e, t) {
        if (e.curOp)
          return t();
        Qt(e);
        try {
          return t();
        } finally {
          Yt(e);
        }
      }
      function De(e, t) {
        return function() {
          if (e.curOp)
            return t.apply(e, arguments);
          Qt(e);
          try {
            return t.apply(e, arguments);
          } finally {
            Yt(e);
          }
        };
      }
      function Xe(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Qt(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Yt(this);
          }
        };
      }
      function He(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp)
            return e.apply(this, arguments);
          Qt(t);
          try {
            return e.apply(this, arguments);
          } finally {
            Yt(t);
          }
        };
      }
      function Pr(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, Fe(Ul, e));
      }
      function Ul(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +/* @__PURE__ */ new Date() + e.options.workTime, r = Tr(e, t.highlightFrontier), i = [];
          t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
            if (r.line >= e.display.viewFrom) {
              var a = o.styles, s = o.text.length > e.options.maxHighlightLength ? Pt(t.mode, r.state) : null, l = oo(e, o, r, !0);
              s && (r.state = s), o.styles = l.styles;
              var u = o.styleClasses, f = l.classes;
              f ? o.styleClasses = f : u && (o.styleClasses = null);
              for (var c = !a || a.length != o.styles.length || u != f && (!u || !f || u.bgClass != f.bgClass || u.textClass != f.textClass), b = 0; !c && b < a.length; ++b)
                c = a[b] != o.styles[b];
              c && i.push(r.line), o.stateAfter = r.save(), r.nextLine();
            } else
              o.text.length <= e.options.maxHighlightLength && $n(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+/* @__PURE__ */ new Date() > n)
              return Pr(e, e.options.workDelay), !0;
          }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && tt(e, function() {
            for (var o = 0; o < i.length; o++)
              At(e, i[o], "text");
          });
        }
      }
      var wn = function(e, t, n) {
        var r = e.display;
        this.viewport = t, this.visible = bn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = qt(e), this.force = n, this.dims = pi(e), this.events = [];
      };
      wn.prototype.signal = function(e, t) {
        at(e, t) && this.events.push(arguments);
      }, wn.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          Ce.apply(null, this.events[e]);
      };
      function Gl(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = vt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = vt(e) + "px", t.scrollbarsClipped = !0);
      }
      function Kl(e) {
        if (e.hasFocus())
          return null;
        var t = te(ve(e));
        if (!t || !Z(e.display.lineDiv, t))
          return null;
        var n = { activeElt: t };
        if (window.getSelection) {
          var r = st(e).getSelection();
          r.anchorNode && r.extend && Z(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
        }
        return n;
      }
      function Xl(e) {
        if (!(!e || !e.activeElt || e.activeElt == te(Ge(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && Z(document.body, e.anchorNode) && Z(document.body, e.focusNode))) {
          var t = e.activeElt.ownerDocument, n = t.defaultView.getSelection(), r = t.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), n.removeAllRanges(), n.addRange(r), n.extend(e.focusNode, e.focusOffset);
        }
      }
      function ki(e, t) {
        var n = e.display, r = e.doc;
        if (t.editorIsHidden)
          return Ot(e), !1;
        if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && Go(e) == 0)
          return !1;
        ta(e) && (Ot(e), t.dims = pi(e));
        var i = r.first + r.size, o = Math.max(t.visible.from - e.options.viewportMargin, r.first), a = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), wt && (o = ni(e.doc, o), a = xo(e.doc, a));
        var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
        Al(e, o, a), n.viewOffset = _t(re(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
        var l = Go(e);
        if (!s && l == 0 && !t.force && n.renderedView == n.view && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo))
          return !1;
        var u = Kl(e);
        return l > 4 && (n.lineDiv.style.display = "none"), Ql(e, n.updateLineNumbers, t.dims), l > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, Xl(u), I(n.cursorDiv), I(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, Pr(e, 400)), n.updateLineNumbers = null, !0;
      }
      function $o(e, t) {
        for (var n = t.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || t.oldDisplayWidth == qt(e)) {
            if (n && n.top != null && (n = { top: Math.min(e.doc.height + si(e.display) - li(e), n.top) }), t.visible = bn(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              break;
          } else r && (t.visible = bn(e.display, e.doc, n));
          if (!ki(e, t))
            break;
          yn(e);
          var i = zr(e);
          Hr(e), fr(e, i), Li(e, i), t.force = !1;
        }
        t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Si(e, t) {
        var n = new wn(e, t);
        if (ki(e, n)) {
          yn(e), $o(e, n);
          var r = zr(e);
          Hr(e), fr(e, r), Li(e, r), n.finish();
        }
      }
      function Ql(e, t, n) {
        var r = e.display, i = e.options.lineNumbers, o = r.lineDiv, a = o.firstChild;
        function s(M) {
          var P = M.nextSibling;
          return q && S && e.display.currentWheelTarget == M ? M.style.display = "none" : M.parentNode.removeChild(M), P;
        }
        for (var l = r.view, u = r.viewFrom, f = 0; f < l.length; f++) {
          var c = l[f];
          if (!c.hidden) if (!c.node || c.node.parentNode != o) {
            var b = xl(e, c, u, n);
            o.insertBefore(b, a);
          } else {
            for (; a != c.node; )
              a = s(a);
            var v = i && t != null && t <= u && c.lineNumber;
            c.changes && (Se(c.changes, "gutter") > -1 && (v = !1), Co(e, c, u, n)), v && (I(c.lineNumber), c.lineNumber.appendChild(document.createTextNode(Zn(e.options, u)))), a = c.node.nextSibling;
          }
          u += c.size;
        }
        for (; a; )
          a = s(a);
      }
      function Ci(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px", Oe(e, "gutterChanged", e);
      }
      function Li(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + vt(e) + "px";
      }
      function ea(e) {
        var t = e.display, n = t.view;
        if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = gi(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
            if (!n[a].hidden) {
              e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
              var s = n[a].alignable;
              if (s)
                for (var l = 0; l < s.length; l++)
                  s[l].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
        }
      }
      function ta(e) {
        if (!e.options.lineNumbers)
          return !1;
        var t = e.doc, n = Zn(e.options, t.first + t.size - 1), r = e.display;
        if (n.length != r.lineNumChars) {
          var i = r.measure.appendChild(d(
            "div",
            [d("div", n)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ci(e.display), !0;
        }
        return !1;
      }
      function Ti(e, t) {
        for (var n = [], r = !1, i = 0; i < e.length; i++) {
          var o = e[i], a = null;
          if (typeof o != "string" && (a = o.style, o = o.className), o == "CodeMirror-linenumbers")
            if (t)
              r = !0;
            else
              continue;
          n.push({ className: o, style: a });
        }
        return t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n;
      }
      function ra(e) {
        var t = e.gutters, n = e.gutterSpecs;
        I(t), e.lineGutter = null;
        for (var r = 0; r < n.length; ++r) {
          var i = n[r], o = i.className, a = i.style, s = t.appendChild(d("div", null, "CodeMirror-gutter " + o));
          a && (s.style.cssText = a), o == "CodeMirror-linenumbers" && (e.lineGutter = s, s.style.width = (e.lineNumWidth || 1) + "px");
        }
        t.style.display = n.length ? "" : "none", Ci(e);
      }
      function Ir(e) {
        ra(e.display), Ze(e), ea(e);
      }
      function Yl(e, t, n, r) {
        var i = this;
        this.input = n, i.scrollbarFiller = d("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = d("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = T("div", null, "CodeMirror-code"), i.selectionDiv = d("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = d("div", null, "CodeMirror-cursors"), i.measure = d("div", null, "CodeMirror-measure"), i.lineMeasure = d("div", null, "CodeMirror-measure"), i.lineSpace = T(
          "div",
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var o = T("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = d("div", [o], null, "position: relative"), i.sizer = d("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = d("div", null, null, "position: absolute; height: " + Jt + "px; width: 1px;"), i.gutters = d("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = d("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = d("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), N && X >= 105 && (i.wrapper.style.clipPath = "inset(0px)"), i.wrapper.setAttribute("translate", "no"), p && F < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), !q && !(G && k) && (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, i.gutterSpecs = Ti(r.gutters, r.lineNumbers), ra(i), n.init(i);
      }
      var _n = 0, St = null;
      p ? St = -0.53 : G ? St = 15 : N ? St = -0.7 : Q && (St = -1 / 3);
      function na(e) {
        var t = e.wheelDeltaX, n = e.wheelDeltaY;
        return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), n == null && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : n == null && (n = e.wheelDelta), { x: t, y: n };
      }
      function jl(e) {
        var t = na(e);
        return t.x *= St, t.y *= St, t;
      }
      function ia(e, t) {
        N && X == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var n = na(t), r = n.x, i = n.y, o = St;
        t.deltaMode === 0 && (r = t.deltaX, i = t.deltaY, o = 1);
        var a = e.display, s = a.scroller, l = s.scrollWidth > s.clientWidth, u = s.scrollHeight > s.clientHeight;
        if (r && l || i && u) {
          if (i && S && q) {
            e: for (var f = t.target, c = a.view; f != s; f = f.parentNode)
              for (var b = 0; b < c.length; b++)
                if (c[b].node == f) {
                  e.display.currentWheelTarget = f;
                  break e;
                }
          }
          if (r && !G && !D && o != null) {
            i && u && Wr(e, Math.max(0, s.scrollTop + i * o)), Kt(e, Math.max(0, s.scrollLeft + r * o)), (!i || i && u) && je(t), a.wheelStartX = null;
            return;
          }
          if (i && o != null) {
            var v = i * o, M = e.doc.scrollTop, P = M + a.wrapper.clientHeight;
            v < 0 ? M = Math.max(0, M + v - 50) : P = Math.min(e.doc.height, P + v + 50), Si(e, { top: M, bottom: P });
          }
          _n < 20 && t.deltaMode !== 0 && (a.wheelStartX == null ? (a.wheelStartX = s.scrollLeft, a.wheelStartY = s.scrollTop, a.wheelDX = r, a.wheelDY = i, setTimeout(function() {
            if (a.wheelStartX != null) {
              var U = s.scrollLeft - a.wheelStartX, Y = s.scrollTop - a.wheelStartY, V = Y && a.wheelDY && Y / a.wheelDY || U && a.wheelDX && U / a.wheelDX;
              a.wheelStartX = a.wheelStartY = null, V && (St = (St * _n + V) / (_n + 1), ++_n);
            }
          }, 200)) : (a.wheelDX += r, a.wheelDY += i));
        }
      }
      var it = function(e, t) {
        this.ranges = e, this.primIndex = t;
      };
      it.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, it.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t], r = e.ranges[t];
          if (!Jn(n.anchor, r.anchor) || !Jn(n.head, r.head))
            return !1;
        }
        return !0;
      }, it.prototype.deepCopy = function() {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new he(Vn(this.ranges[t].anchor), Vn(this.ranges[t].head));
        return new it(e, this.primIndex);
      }, it.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, it.prototype.contains = function(e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (se(t, r.from()) >= 0 && se(e, r.to()) <= 0)
            return n;
        }
        return -1;
      };
      var he = function(e, t) {
        this.anchor = e, this.head = t;
      };
      he.prototype.from = function() {
        return on(this.anchor, this.head);
      }, he.prototype.to = function() {
        return nn(this.anchor, this.head);
      }, he.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function ft(e, t, n) {
        var r = e && e.options.selectionsMayTouch, i = t[n];
        t.sort(function(b, v) {
          return se(b.from(), v.from());
        }), n = Se(t, i);
        for (var o = 1; o < t.length; o++) {
          var a = t[o], s = t[o - 1], l = se(s.to(), a.from());
          if (r && !a.empty() ? l > 0 : l >= 0) {
            var u = on(s.from(), a.from()), f = nn(s.to(), a.to()), c = s.empty() ? a.from() == a.head : s.from() == s.head;
            o <= n && --n, t.splice(--o, 2, new he(c ? f : u, c ? u : f));
          }
        }
        return new it(t, n);
      }
      function Dt(e, t) {
        return new it([new he(e, t || e)], 0);
      }
      function Ht(e) {
        return e.text ? B(
          e.from.line + e.text.length - 1,
          ce(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function oa(e, t) {
        if (se(e, t.from) < 0)
          return e;
        if (se(e, t.to) <= 0)
          return Ht(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += Ht(t).ch - t.to.ch), B(n, r);
      }
      function Mi(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var i = e.sel.ranges[r];
          n.push(new he(
            oa(i.anchor, t),
            oa(i.head, t)
          ));
        }
        return ft(e.cm, n, e.sel.primIndex);
      }
      function aa(e, t, n) {
        return e.line == t.line ? B(n.line, e.ch - t.ch + n.ch) : B(n.line + (e.line - t.line), e.ch);
      }
      function Zl(e, t, n) {
        for (var r = [], i = B(e.first, 0), o = i, a = 0; a < t.length; a++) {
          var s = t[a], l = aa(s.from, i, o), u = aa(Ht(s), i, o);
          if (i = s.to, o = u, n == "around") {
            var f = e.sel.ranges[a], c = se(f.head, f.anchor) < 0;
            r[a] = new he(c ? u : l, c ? l : u);
          } else
            r[a] = new he(l, l);
        }
        return new it(r, e.sel.primIndex);
      }
      function Ni(e) {
        e.doc.mode = Qn(e.options, e.doc.modeOption), Rr(e);
      }
      function Rr(e) {
        e.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Pr(e, 100), e.state.modeGen++, e.curOp && Ze(e);
      }
      function sa(e, t) {
        return t.from.ch == 0 && t.to.ch == 0 && ce(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function Ai(e, t, n, r) {
        function i(V) {
          return n ? n[V] : null;
        }
        function o(V, j, ee) {
          il(V, j, ee, r), Oe(V, "change", V, t);
        }
        function a(V, j) {
          for (var ee = [], oe = V; oe < j; ++oe)
            ee.push(new nr(u[oe], i(oe), r));
          return ee;
        }
        var s = t.from, l = t.to, u = t.text, f = re(e, s.line), c = re(e, l.line), b = ce(u), v = i(u.length - 1), M = l.line - s.line;
        if (t.full)
          e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
        else if (sa(e, t)) {
          var P = a(0, u.length - 1);
          o(c, c.text, v), M && e.remove(s.line, M), P.length && e.insert(s.line, P);
        } else if (f == c)
          if (u.length == 1)
            o(f, f.text.slice(0, s.ch) + b + f.text.slice(l.ch), v);
          else {
            var U = a(1, u.length - 1);
            U.push(new nr(b + f.text.slice(l.ch), v, r)), o(f, f.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, U);
          }
        else if (u.length == 1)
          o(f, f.text.slice(0, s.ch) + u[0] + c.text.slice(l.ch), i(0)), e.remove(s.line + 1, M);
        else {
          o(f, f.text.slice(0, s.ch) + u[0], i(0)), o(c, b + c.text.slice(l.ch), v);
          var Y = a(1, u.length - 1);
          M > 1 && e.remove(s.line + 1, M - 1), e.insert(s.line + 1, Y);
        }
        Oe(e, "change", e, t);
      }
      function Et(e, t, n) {
        function r(i, o, a) {
          if (i.linked)
            for (var s = 0; s < i.linked.length; ++s) {
              var l = i.linked[s];
              if (l.doc != o) {
                var u = a && l.sharedHist;
                n && !u || (t(l.doc, u), r(l.doc, i, u));
              }
            }
        }
        r(e, null, !0);
      }
      function la(e, t) {
        if (t.cm)
          throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, vi(e), Ni(e), ua(e), e.options.direction = t.direction, e.options.lineWrapping || oi(e), e.options.mode = t.modeOption, Ze(e);
      }
      function ua(e) {
        (e.doc.direction == "rtl" ? ue : y)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Jl(e) {
        tt(e, function() {
          ua(e), Ze(e);
        });
      }
      function kn(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function Oi(e, t) {
        var n = { from: Vn(t.from), to: Ht(t), text: It(e, t.from, t.to) };
        return ha(e, n, t.from.line, t.to.line + 1), Et(e, function(r) {
          return ha(r, n, t.from.line, t.to.line + 1);
        }, !0), n;
      }
      function fa(e) {
        for (; e.length; ) {
          var t = ce(e);
          if (t.ranges)
            e.pop();
          else
            break;
        }
      }
      function Vl(e, t) {
        if (t)
          return fa(e.done), ce(e.done);
        if (e.done.length && !ce(e.done).ranges)
          return ce(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), ce(e.done);
      }
      function ca(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o = +/* @__PURE__ */ new Date(), a, s;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && i.lastModTime > o - (e.cm ? e.cm.options.historyEventDelay : 500) || t.origin.charAt(0) == "*")) && (a = Vl(i, i.lastOp == r)))
          s = ce(a.changes), se(t.from, t.to) == 0 && se(t.from, s.to) == 0 ? s.to = Ht(t) : a.changes.push(Oi(e, t));
        else {
          var l = ce(i.done);
          for ((!l || !l.ranges) && Sn(e.sel, i.done), a = {
            changes: [Oi(e, t)],
            generation: i.generation
          }, i.done.push(a); i.done.length > i.undoDepth; )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = o, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, s || Ce(e, "historyAdded");
      }
      function $l(e, t, n, r) {
        var i = t.charAt(0);
        return i == "*" || i == "+" && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && /* @__PURE__ */ new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function eu(e, t, n, r) {
        var i = e.history, o = r && r.origin;
        n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || $l(e, o, ce(i.done), t)) ? i.done[i.done.length - 1] = t : Sn(t, i.done), i.lastSelTime = +/* @__PURE__ */ new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && r.clearRedo !== !1 && fa(i.undone);
      }
      function Sn(e, t) {
        var n = ce(t);
        n && n.ranges && n.equals(e) || t.push(e);
      }
      function ha(e, t, n, r) {
        var i = t["spans_" + e.id], o = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(a) {
          a.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = a.markedSpans), ++o;
        });
      }
      function tu(e) {
        if (!e)
          return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
        return t ? t.length ? t : null : e;
      }
      function ru(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
          return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
          r.push(tu(n[i]));
        return r;
      }
      function da(e, t) {
        var n = ru(e, t), r = ti(e, t);
        if (!n)
          return r;
        if (!r)
          return n;
        for (var i = 0; i < n.length; ++i) {
          var o = n[i], a = r[i];
          if (o && a)
            e: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], u = 0; u < o.length; ++u)
                if (o[u].marker == l.marker)
                  continue e;
              o.push(l);
            }
          else a && (n[i] = a);
        }
        return n;
      }
      function cr(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.ranges) {
            r.push(n ? it.prototype.deepCopy.call(o) : o);
            continue;
          }
          var a = o.changes, s = [];
          r.push({ changes: s });
          for (var l = 0; l < a.length; ++l) {
            var u = a[l], f = void 0;
            if (s.push({ from: u.from, to: u.to, text: u.text }), t)
              for (var c in u)
                (f = c.match(/^spans_(\d+)$/)) && Se(t, Number(f[1])) > -1 && (ce(s)[c] = u[c], delete u[c]);
          }
        }
        return r;
      }
      function Di(e, t, n, r) {
        if (r) {
          var i = e.anchor;
          if (n) {
            var o = se(t, i) < 0;
            o != se(n, i) < 0 ? (i = t, t = n) : o != se(t, n) < 0 && (t = n);
          }
          return new he(i, t);
        } else
          return new he(n || t, t);
      }
      function Cn(e, t, n, r, i) {
        i == null && (i = e.cm && (e.cm.display.shift || e.extend)), Be(e, new it([Di(e.sel.primary(), t, n, i)], 0), r);
      }
      function pa(e, t, n) {
        for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
          r[o] = Di(e.sel.ranges[o], t[o], null, i);
        var a = ft(e.cm, r, e.sel.primIndex);
        Be(e, a, n);
      }
      function Hi(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n, Be(e, ft(e.cm, i, e.sel.primIndex), r);
      }
      function ga(e, t, n, r) {
        Be(e, Dt(t, n), r);
      }
      function nu(e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function(i) {
            this.ranges = [];
            for (var o = 0; o < i.length; o++)
              this.ranges[o] = new he(
                le(e, i[o].anchor),
                le(e, i[o].head)
              );
          },
          origin: n && n.origin
        };
        return Ce(e, "beforeSelectionChange", e, r), e.cm && Ce(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? ft(e.cm, r.ranges, r.ranges.length - 1) : t;
      }
      function va(e, t, n) {
        var r = e.history.done, i = ce(r);
        i && i.ranges ? (r[r.length - 1] = t, Ln(e, t, n)) : Be(e, t, n);
      }
      function Be(e, t, n) {
        Ln(e, t, n), eu(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function Ln(e, t, n) {
        (at(e, "beforeSelectionChange") || e.cm && at(e.cm, "beforeSelectionChange")) && (t = nu(e, t, n));
        var r = n && n.bias || (se(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        ma(e, ba(e, t, r, !0)), !(n && n.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && ur(e.cm);
      }
      function ma(e, t) {
        t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, $i(e.cm)), Oe(e, "cursorActivity", e));
      }
      function ya(e) {
        ma(e, ba(e, e.sel, null, !1));
      }
      function ba(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
          var a = t.ranges[o], s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o], l = Tn(e, a.anchor, s && s.anchor, n, r), u = a.head == a.anchor ? l : Tn(e, a.head, s && s.head, n, r);
          (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new he(l, u));
        }
        return i ? ft(e.cm, i, t.primIndex) : t;
      }
      function hr(e, t, n, r, i) {
        var o = re(e, t.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var s = o.markedSpans[a], l = s.marker, u = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft, f = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
            if ((s.from == null || (u ? s.from <= t.ch : s.from < t.ch)) && (s.to == null || (f ? s.to >= t.ch : s.to > t.ch))) {
              if (i && (Ce(l, "beforeCursorEnter"), l.explicitlyCleared))
                if (o.markedSpans) {
                  --a;
                  continue;
                } else
                  break;
              if (!l.atomic)
                continue;
              if (n) {
                var c = l.find(r < 0 ? 1 : -1), b = void 0;
                if ((r < 0 ? f : u) && (c = xa(e, c, -r, c && c.line == t.line ? o : null)), c && c.line == t.line && (b = se(c, n)) && (r < 0 ? b < 0 : b > 0))
                  return hr(e, c, t, r, i);
              }
              var v = l.find(r < 0 ? -1 : 1);
              return (r < 0 ? u : f) && (v = xa(e, v, r, v.line == t.line ? o : null)), v ? hr(e, v, t, r, i) : null;
            }
          }
        return t;
      }
      function Tn(e, t, n, r, i) {
        var o = r || 1, a = hr(e, t, n, o, i) || !i && hr(e, t, n, o, !0) || hr(e, t, n, -o, i) || !i && hr(e, t, n, -o, !0);
        return a || (e.cantEdit = !0, B(e.first, 0));
      }
      function xa(e, t, n, r) {
        return n < 0 && t.ch == 0 ? t.line > e.first ? le(e, B(t.line - 1)) : null : n > 0 && t.ch == (r || re(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? B(t.line + 1, 0) : null : new B(t.line, t.ch + n);
      }
      function wa(e) {
        e.setSelection(B(e.firstLine(), 0), B(e.lastLine()), Ye);
      }
      function _a(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return n && (r.update = function(i, o, a, s) {
          i && (r.from = le(e, i)), o && (r.to = le(e, o)), a && (r.text = a), s !== void 0 && (r.origin = s);
        }), Ce(e, "beforeChange", e, r), e.cm && Ce(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function dr(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp)
            return De(e.cm, dr)(e, t, n);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange")) && (t = _a(e, t, !0), !t))) {
          var r = ho && !n && el(e, t.from, t.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              ka(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin });
          else
            ka(e, t);
        }
      }
      function ka(e, t) {
        if (!(t.text.length == 1 && t.text[0] == "" && se(t.from, t.to) == 0)) {
          var n = Mi(e, t);
          ca(e, t, n, e.cm ? e.cm.curOp.id : NaN), qr(e, t, n, ti(e, t));
          var r = [];
          Et(e, function(i, o) {
            !o && Se(r, i.history) == -1 && (Ta(i.history, t), r.push(i.history)), qr(i, t, null, ti(i, t));
          });
        }
      }
      function Mn(e, t, n) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !n)) {
          for (var i = e.history, o, a = e.sel, s = t == "undo" ? i.done : i.undone, l = t == "undo" ? i.undone : i.done, u = 0; u < s.length && (o = s[u], !(n ? o.ranges && !o.equals(e.sel) : !o.ranges)); u++)
            ;
          if (u != s.length) {
            for (i.lastOrigin = i.lastSelOrigin = null; ; )
              if (o = s.pop(), o.ranges) {
                if (Sn(o, l), n && !o.equals(e.sel)) {
                  Be(e, o, { clearRedo: !1 });
                  return;
                }
                a = o;
              } else if (r) {
                s.push(o);
                return;
              } else
                break;
            var f = [];
            Sn(a, l), l.push({ changes: f, generation: i.generation }), i.generation = o.generation || ++i.maxGeneration;
            for (var c = at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange"), b = function(P) {
              var U = o.changes[P];
              if (U.origin = t, c && !_a(e, U, !1))
                return s.length = 0, {};
              f.push(Oi(e, U));
              var Y = P ? Mi(e, U) : ce(s);
              qr(e, U, Y, da(e, U)), !P && e.cm && e.cm.scrollIntoView({ from: U.from, to: Ht(U) });
              var V = [];
              Et(e, function(j, ee) {
                !ee && Se(V, j.history) == -1 && (Ta(j.history, U), V.push(j.history)), qr(j, U, null, da(j, U));
              });
            }, v = o.changes.length - 1; v >= 0; --v) {
              var M = b(v);
              if (M) return M.v;
            }
          }
        }
      }
      function Sa(e, t) {
        if (t != 0 && (e.first += t, e.sel = new it(en(e.sel.ranges, function(i) {
          return new he(
            B(i.anchor.line + t, i.anchor.ch),
            B(i.head.line + t, i.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          Ze(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            At(e.cm, r, "gutter");
        }
      }
      function qr(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
          return De(e.cm, qr)(e, t, n, r);
        if (t.to.line < e.first) {
          Sa(e, t.text.length - 1 - (t.to.line - t.from.line));
          return;
        }
        if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            Sa(e, i), t = {
              from: B(e.first, 0),
              to: B(t.to.line + i, t.to.ch),
              text: [ce(t.text)],
              origin: t.origin
            };
          }
          var o = e.lastLine();
          t.to.line > o && (t = {
            from: t.from,
            to: B(o, re(e, o).text.length),
            text: [t.text[0]],
            origin: t.origin
          }), t.removed = It(e, t.from, t.to), n || (n = Mi(e, t)), e.cm ? iu(e.cm, t, r) : Ai(e, t, r), Ln(e, n, Ye), e.cantEdit && Tn(e, B(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function iu(e, t, n) {
        var r = e.doc, i = e.display, o = t.from, a = t.to, s = !1, l = o.line;
        e.options.lineWrapping || (l = de(lt(re(r, o.line))), r.iter(l, a.line + 1, function(v) {
          if (v == i.maxLine)
            return s = !0, !0;
        })), r.sel.contains(t.from, t.to) > -1 && $i(e), Ai(r, t, n, Uo(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(v) {
          var M = cn(v);
          M > i.maxLineLength && (i.maxLine = v, i.maxLineLength = M, i.maxLineChanged = !0, s = !1);
        }), s && (e.curOp.updateMaxLine = !0)), Qs(r, o.line), Pr(e, 400);
        var u = t.text.length - (a.line - o.line) - 1;
        t.full ? Ze(e) : o.line == a.line && t.text.length == 1 && !sa(e.doc, t) ? At(e, o.line, "text") : Ze(e, o.line, a.line + 1, u);
        var f = at(e, "changes"), c = at(e, "change");
        if (c || f) {
          var b = {
            from: o,
            to: a,
            text: t.text,
            removed: t.removed,
            origin: t.origin
          };
          c && Oe(e, "change", e, b), f && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(b);
        }
        e.display.selForContextMenu = null;
      }
      function pr(e, t, n, r, i) {
        var o;
        r || (r = n), se(r, n) < 0 && (o = [r, n], n = o[0], r = o[1]), typeof t == "string" && (t = e.splitLines(t)), dr(e, { from: n, to: r, text: t, origin: i });
      }
      function Ca(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
      }
      function La(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i], a = !0;
          if (o.ranges) {
            o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
            for (var s = 0; s < o.ranges.length; s++)
              Ca(o.ranges[s].anchor, t, n, r), Ca(o.ranges[s].head, t, n, r);
            continue;
          }
          for (var l = 0; l < o.changes.length; ++l) {
            var u = o.changes[l];
            if (n < u.from.line)
              u.from = B(u.from.line + r, u.from.ch), u.to = B(u.to.line + r, u.to.ch);
            else if (t <= u.to.line) {
              a = !1;
              break;
            }
          }
          a || (e.splice(0, i + 1), i = 0);
        }
      }
      function Ta(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
        La(e.done, n, r, i), La(e.undone, n, r, i);
      }
      function Br(e, t, n, r) {
        var i = t, o = t;
        return typeof t == "number" ? o = re(e, no(e, t)) : i = de(t), i == null ? null : (r(o, i) && e.cm && At(e.cm, i, n), o);
      }
      function Ur(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = 0; n < e.length; ++n)
          e[n].parent = this, t += e[n].height;
        this.height = t;
      }
      Ur.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        // Remove the n lines at offset 'at'.
        removeInner: function(e, t) {
          for (var n = e, r = e + t; n < r; ++n) {
            var i = this.lines[n];
            this.height -= i.height, ol(i), Oe(i, "delete");
          }
          this.lines.splice(e, t);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function(e, t, n) {
          this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
          for (var r = 0; r < t.length; ++r)
            t[r].parent = this;
        },
        // Used to iterate over a part of the tree.
        iterN: function(e, t, n) {
          for (var r = e + t; e < r; ++e)
            if (n(this.lines[e]))
              return !0;
        }
      };
      function Gr(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var i = e[r];
          t += i.chunkSize(), n += i.height, i.parent = this;
        }
        this.size = t, this.height = n, this.parent = null;
      }
      Gr.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, t) {
          this.size -= t;
          for (var n = 0; n < this.children.length; ++n) {
            var r = this.children[n], i = r.chunkSize();
            if (e < i) {
              var o = Math.min(t, i - e), a = r.height;
              if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), (t -= o) == 0)
                break;
              e = 0;
            } else
              e -= i;
          }
          if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Ur))) {
            var s = [];
            this.collapse(s), this.children = [new Ur(s)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e);
        },
        insertInner: function(e, t, n) {
          this.size += t.length, this.height += n;
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], o = i.chunkSize();
            if (e <= o) {
              if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length; ) {
                  var l = new Ur(i.lines.slice(s, s += 25));
                  i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this;
                }
                i.lines = i.lines.slice(0, a), this.maybeSpill();
              }
              break;
            }
            e -= o;
          }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var t = e.children.splice(e.children.length - 5, 5), n = new Gr(t);
              if (e.parent) {
                e.size -= n.size, e.height -= n.height;
                var i = Se(e.parent.children, e);
                e.parent.children.splice(i + 1, 0, n);
              } else {
                var r = new Gr(e.children);
                r.parent = e, e.children = [r, n], e = r;
              }
              n.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, t, n) {
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], o = i.chunkSize();
            if (e < o) {
              var a = Math.min(t, o - e);
              if (i.iterN(e, a, n))
                return !0;
              if ((t -= a) == 0)
                break;
              e = 0;
            } else
              e -= o;
          }
        }
      };
      var Kr = function(e, t, n) {
        if (n)
          for (var r in n)
            n.hasOwnProperty(r) && (this[r] = n[r]);
        this.doc = e, this.node = t;
      };
      Kr.prototype.clear = function() {
        var e = this.doc.cm, t = this.line.widgets, n = this.line, r = de(n);
        if (!(r == null || !t)) {
          for (var i = 0; i < t.length; ++i)
            t[i] == this && t.splice(i--, 1);
          t.length || (n.widgets = null);
          var o = Or(this);
          pt(n, Math.max(0, n.height - o)), e && (tt(e, function() {
            Ma(e, n, -o), At(e, r, "widget");
          }), Oe(e, "lineWidgetCleared", e, this, r));
        }
      }, Kr.prototype.changed = function() {
        var e = this, t = this.height, n = this.doc.cm, r = this.line;
        this.height = null;
        var i = Or(this) - t;
        i && (Nt(this.doc, r) || pt(r, r.height + i), n && tt(n, function() {
          n.curOp.forceUpdate = !0, Ma(n, r, i), Oe(n, "lineWidgetChanged", n, e, de(r));
        }));
      }, er(Kr);
      function Ma(e, t, n) {
        _t(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && _i(e, n);
      }
      function ou(e, t, n, r) {
        var i = new Kr(e, n, r), o = e.cm;
        return o && i.noHScroll && (o.display.alignWidgets = !0), Br(e, t, "widget", function(a) {
          var s = a.widgets || (a.widgets = []);
          if (i.insertAt == null ? s.push(i) : s.splice(Math.min(s.length, Math.max(0, i.insertAt)), 0, i), i.line = a, o && !Nt(e, a)) {
            var l = _t(a) < e.scrollTop;
            pt(a, a.height + Or(i)), l && _i(o, i.height), o.curOp.forceUpdate = !0;
          }
          return !0;
        }), o && Oe(o, "lineWidgetAdded", o, i, typeof t == "number" ? t : de(t)), i;
      }
      var Na = 0, Wt = function(e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++Na;
      };
      Wt.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, t = e && !e.curOp;
          if (t && Qt(e), at(this, "clear")) {
            var n = this.find();
            n && Oe(this, "clear", n.from, n.to);
          }
          for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o], s = Mr(a.markedSpans, this);
            e && !this.collapsed ? At(e, de(a), "text") : e && (s.to != null && (i = de(a)), s.from != null && (r = de(a))), a.markedSpans = Zs(a.markedSpans, s), s.from == null && this.collapsed && !Nt(this.doc, a) && e && pt(a, ar(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var u = lt(this.lines[l]), f = cn(u);
              f > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = f, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && Ze(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && ya(e.doc)), e && Oe(e, "markerCleared", e, this, r, i), t && Yt(e), this.parent && this.parent.clear();
        }
      }, Wt.prototype.find = function(e, t) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var o = this.lines[i], a = Mr(o.markedSpans, this);
          if (a.from != null && (n = B(t ? o : de(o), a.from), e == -1))
            return n;
          if (a.to != null && (r = B(t ? o : de(o), a.to), e == 1))
            return r;
        }
        return n && { from: n, to: r };
      }, Wt.prototype.changed = function() {
        var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
        !t || !r || tt(r, function() {
          var i = t.line, o = de(t.line), a = ui(r, o);
          if (a && (Wo(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Nt(n.doc, i) && n.height != null) {
            var s = n.height;
            n.height = null;
            var l = Or(n) - s;
            l && pt(i, i.height + l);
          }
          Oe(r, "markerChanged", r, e);
        });
      }, Wt.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || Se(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, Wt.prototype.detachLine = function(e) {
        if (this.lines.splice(Se(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }, er(Wt);
      function gr(e, t, n, r, i) {
        if (r && r.shared)
          return au(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)
          return De(e.cm, gr)(e, t, n, r, i);
        var o = new Wt(e, i), a = se(t, n);
        if (r && ht(r, o, !1), a > 0 || a == 0 && o.clearWhenEmpty !== !1)
          return o;
        if (o.replacedWith && (o.collapsed = !0, o.widgetNode = T("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
          if (bo(e, t.line, t, n, o) || t.line != n.line && bo(e, n.line, t, n, o))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          js();
        }
        o.addToHistory && ca(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
        var s = t.line, l = e.cm, u;
        if (e.iter(s, n.line + 1, function(c) {
          l && o.collapsed && !l.options.lineWrapping && lt(c) == l.display.maxLine && (u = !0), o.collapsed && s != t.line && pt(c, 0), Js(c, new sn(
            o,
            s == t.line ? t.ch : null,
            s == n.line ? n.ch : null
          ), e.cm && e.cm.curOp), ++s;
        }), o.collapsed && e.iter(t.line, n.line + 1, function(c) {
          Nt(e, c) && pt(c, 0);
        }), o.clearOnEnter && ae(o, "beforeCursorEnter", function() {
          return o.clear();
        }), o.readOnly && (Ys(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++Na, o.atomic = !0), l) {
          if (u && (l.curOp.updateMaxLine = !0), o.collapsed)
            Ze(l, t.line, n.line + 1);
          else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
            for (var f = t.line; f <= n.line; f++)
              At(l, f, "text");
          o.atomic && ya(l.doc), Oe(l, "markerAdded", l, o);
        }
        return o;
      }
      var Xr = function(e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0; n < e.length; ++n)
          e[n].parent = this;
      };
      Xr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          Oe(this, "clear");
        }
      }, Xr.prototype.find = function(e, t) {
        return this.primary.find(e, t);
      }, er(Xr);
      function au(e, t, n, r, i) {
        r = ht(r), r.shared = !1;
        var o = [gr(e, t, n, r, i)], a = o[0], s = r.widgetNode;
        return Et(e, function(l) {
          s && (r.widgetNode = s.cloneNode(!0)), o.push(gr(l, le(l, t), le(l, n), r, i));
          for (var u = 0; u < l.linked.length; ++u)
            if (l.linked[u].isParent)
              return;
          a = ce(o);
        }), new Xr(o, a);
      }
      function Aa(e) {
        return e.findMarks(B(e.first, 0), e.clipPos(B(e.lastLine())), function(t) {
          return t.parent;
        });
      }
      function su(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
          if (se(o, a)) {
            var s = gr(e, o, a, r.primary, r.primary.type);
            r.markers.push(s), s.parent = r;
          }
        }
      }
      function lu(e) {
        for (var t = function(r) {
          var i = e[r], o = [i.primary.doc];
          Et(i.primary.doc, function(l) {
            return o.push(l);
          });
          for (var a = 0; a < i.markers.length; a++) {
            var s = i.markers[a];
            Se(o, s.doc) == -1 && (s.parent = null, i.markers.splice(a--, 1));
          }
        }, n = 0; n < e.length; n++) t(n);
      }
      var uu = 0, Je = function(e, t, n, r, i) {
        if (!(this instanceof Je))
          return new Je(e, t, n, r, i);
        n == null && (n = 0), Gr.call(this, [new Ur([new nr("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
        var o = B(n, 0);
        this.sel = Dt(o), this.history = new kn(null), this.id = ++uu, this.modeOption = t, this.lineSep = r, this.direction = i == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), Ai(this, { from: o, to: o, text: e }), Be(this, Dt(o), Ye);
      };
      Je.prototype = ji(Gr.prototype, {
        constructor: Je,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function(e, t, n) {
          n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
        },
        // Non-public interface for adding and removing lines.
        insert: function(e, t) {
          for (var n = 0, r = 0; r < t.length; ++r)
            n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.
        getValue: function(e) {
          var t = jn(this, this.first, this.first + this.size);
          return e === !1 ? t : t.join(e || this.lineSeparator());
        },
        setValue: He(function(e) {
          var t = B(this.first, 0), n = this.first + this.size - 1;
          dr(this, {
            from: t,
            to: B(n, re(this, n).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && Er(this.cm, 0, 0), Be(this, Dt(t), Ye);
        }),
        replaceRange: function(e, t, n, r) {
          t = le(this, t), n = n ? le(this, n) : t, pr(this, e, t, n, r);
        },
        getRange: function(e, t, n) {
          var r = It(this, le(this, e), le(this, t));
          return n === !1 ? r : n === "" ? r.join("") : r.join(n || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (Lr(this, e))
            return re(this, e);
        },
        getLineNumber: function(e) {
          return de(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = re(this, e)), lt(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return le(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary(), n;
          return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e == "to" || e === !1 ? n = t.to() : n = t.from(), n;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: He(function(e, t, n) {
          ga(this, le(this, typeof e == "number" ? B(e, t || 0) : e), null, n);
        }),
        setSelection: He(function(e, t, n) {
          ga(this, le(this, e), le(this, t || e), n);
        }),
        extendSelection: He(function(e, t, n) {
          Cn(this, le(this, e), t && le(this, t), n);
        }),
        extendSelections: He(function(e, t) {
          pa(this, io(this, e), t);
        }),
        extendSelectionsBy: He(function(e, t) {
          var n = en(this.sel.ranges, e);
          pa(this, io(this, n), t);
        }),
        setSelections: He(function(e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new he(
                le(this, e[i].anchor),
                le(this, e[i].head || e[i].anchor)
              );
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), Be(this, ft(this.cm, r, t), n);
          }
        }),
        addSelection: He(function(e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new he(le(this, e), le(this, t || e))), Be(this, ft(this.cm, r, r.length - 1), n);
        }),
        getSelection: function(e) {
          for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
            var i = It(this, t[r].from(), t[r].to());
            n = n ? n.concat(i) : i;
          }
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = It(this, n[r].from(), n[r].to());
            e !== !1 && (i = i.join(e || this.lineSeparator())), t[r] = i;
          }
          return t;
        },
        replaceSelection: function(e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++)
            r[i] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: He(function(e, t, n) {
          for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            r[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n };
          }
          for (var s = t && t != "end" && Zl(this, r, t), l = r.length - 1; l >= 0; l--)
            dr(this, r[l]);
          s ? va(this, s) : this.cm && ur(this.cm);
        }),
        undo: He(function() {
          Mn(this, "undo");
        }),
        redo: He(function() {
          Mn(this, "redo");
        }),
        undoSelection: He(function() {
          Mn(this, "undo", !0);
        }),
        redoSelection: He(function() {
          Mn(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++)
            e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function() {
          var e = this;
          this.history = new kn(this.history), Et(this, function(t) {
            return t.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: cr(this.history.done),
            undone: cr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var t = this.history = new kn(this.history);
          t.done = cr(e.done.slice(0), null, !0), t.undone = cr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: He(function(e, t, n) {
          return Br(this, e, "gutter", function(r) {
            var i = r.gutterMarkers || (r.gutterMarkers = {});
            return i[t] = n, !n && Zi(i) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: He(function(e) {
          var t = this;
          this.iter(function(n) {
            n.gutterMarkers && n.gutterMarkers[e] && Br(t, n, "gutter", function() {
              return n.gutterMarkers[e] = null, Zi(n.gutterMarkers) && (n.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var t;
          if (typeof e == "number") {
            if (!Lr(this, e) || (t = e, e = re(this, e), !e))
              return null;
          } else if (t = de(e), t == null)
            return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: He(function(e, t, n) {
          return Br(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[i])
              r[i] = n;
            else {
              if (C(n).test(r[i]))
                return !1;
              r[i] += " " + n;
            }
            return !0;
          });
        }),
        removeLineClass: He(function(e, t, n) {
          return Br(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass", o = r[i];
            if (o)
              if (n == null)
                r[i] = null;
              else {
                var a = o.match(C(n));
                if (!a)
                  return !1;
                var s = a.index + a[0].length;
                r[i] = o.slice(0, a.index) + (!a.index || s == o.length ? "" : " ") + o.slice(s) || null;
              }
            else return !1;
            return !0;
          });
        }),
        addLineWidget: He(function(e, t, n) {
          return ou(this, e, t, n);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, n) {
          return gr(this, le(this, e), le(this, t), n, n && n.type || "range");
        },
        setBookmark: function(e, t) {
          var n = {
            replacedWith: t && (t.nodeType == null ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
          };
          return e = le(this, e), gr(this, e, e, n, "bookmark");
        },
        findMarksAt: function(e) {
          e = le(this, e);
          var t = [], n = re(this, e.line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function(e, t, n) {
          e = le(this, e), t = le(this, t);
          var r = [], i = e.line;
          return this.iter(e.line, t.line + 1, function(o) {
            var a = o.markedSpans;
            if (a)
              for (var s = 0; s < a.length; s++) {
                var l = a[s];
                !(l.to != null && i == e.line && e.ch >= l.to || l.from == null && i != e.line || l.from != null && i == t.line && l.from >= t.ch) && (!n || n(l.marker)) && r.push(l.marker.parent || l.marker);
              }
            ++i;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var t, n = this.first, r = this.lineSeparator().length;
          return this.iter(function(i) {
            var o = i.text.length + r;
            if (o > e)
              return t = e, !0;
            e -= o, ++n;
          }), le(this, B(n, t));
        },
        indexFromPos: function(e) {
          e = le(this, e);
          var t = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var n = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            t += r.text.length + n;
          }), t;
        },
        copy: function(e) {
          var t = new Je(
            jn(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first, n = this.first + this.size;
          e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
          var r = new Je(jn(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], su(r, Aa(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof me && (e = e.doc), this.linked)
            for (var t = 0; t < this.linked.length; ++t) {
              var n = this.linked[t];
              if (n.doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), lu(Aa(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            Et(e, function(i) {
              return r.push(i.id);
            }, !0), e.history = new kn(null), e.history.done = cr(this.history.done, r), e.history.undone = cr(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          Et(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : Gn(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: He(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(t) {
            return t.order = null;
          }), this.cm && Jl(this.cm));
        })
      }), Je.prototype.eachLine = Je.prototype.iter;
      var Oa = 0;
      function fu(e) {
        var t = this;
        if (Da(t), !(Ae(t, e) || kt(t.display, e))) {
          je(e), p && (Oa = +/* @__PURE__ */ new Date());
          var n = Ut(t, e, !0), r = e.dataTransfer.files;
          if (!(!n || t.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var i = r.length, o = Array(i), a = 0, s = function() {
                ++a == i && De(t, function() {
                  n = le(t.doc, n);
                  var v = {
                    from: n,
                    to: n,
                    text: t.doc.splitLines(
                      o.filter(function(M) {
                        return M != null;
                      }).join(t.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  dr(t.doc, v), va(t.doc, Dt(le(t.doc, n), le(t.doc, Ht(v))));
                })();
              }, l = function(v, M) {
                if (t.options.allowDropFileTypes && Se(t.options.allowDropFileTypes, v.type) == -1) {
                  s();
                  return;
                }
                var P = new FileReader();
                P.onerror = function() {
                  return s();
                }, P.onload = function() {
                  var U = P.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(U)) {
                    s();
                    return;
                  }
                  o[M] = U, s();
                }, P.readAsText(v);
              }, u = 0; u < r.length; u++)
                l(r[u], u);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                t.state.draggingText(e), setTimeout(function() {
                  return t.display.input.focus();
                }, 20);
                return;
              }
              try {
                var f = e.dataTransfer.getData("Text");
                if (f) {
                  var c;
                  if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()), Ln(t.doc, Dt(n, n)), c)
                    for (var b = 0; b < c.length; ++b)
                      pr(t.doc, "", c[b].anchor, c[b].head, "drag");
                  t.replaceSelection(f, "around", "paste"), t.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function cu(e, t) {
        if (p && (!e.state.draggingText || +/* @__PURE__ */ new Date() - Oa < 100)) {
          Cr(t);
          return;
        }
        if (!(Ae(e, t) || kt(e.display, t)) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Q)) {
          var n = d("img", null, null, "position: fixed; left: 0; top: 0;");
          n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", D && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), D && n.parentNode.removeChild(n);
        }
      }
      function hu(e, t) {
        var n = Ut(e, t);
        if (n) {
          var r = document.createDocumentFragment();
          mi(e, n, r), e.display.dragCursor || (e.display.dragCursor = d("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), E(e.display.dragCursor, r);
        }
      }
      function Da(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function Ha(e) {
        if (document.getElementsByClassName) {
          for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
            var i = t[r].CodeMirror;
            i && n.push(i);
          }
          n.length && n[0].operation(function() {
            for (var o = 0; o < n.length; o++)
              e(n[o]);
          });
        }
      }
      var Ea = !1;
      function du() {
        Ea || (pu(), Ea = !0);
      }
      function pu() {
        var e;
        ae(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, Ha(gu);
          }, 100));
        }), ae(window, "blur", function() {
          return Ha(lr);
        });
      }
      function gu(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
      }
      for (var zt = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Qr = 0; Qr < 10; Qr++)
        zt[Qr + 48] = zt[Qr + 96] = String(Qr);
      for (var Nn = 65; Nn <= 90; Nn++)
        zt[Nn] = String.fromCharCode(Nn);
      for (var Yr = 1; Yr <= 12; Yr++)
        zt[Yr + 111] = zt[Yr + 63235] = "F" + Yr;
      var Ct = {};
      Ct.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, Ct.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, Ct.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, Ct.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, Ct.default = S ? Ct.macDefault : Ct.pcDefault;
      function vu(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var n, r, i, o, a = 0; a < t.length - 1; a++) {
          var s = t[a];
          if (/^(cmd|meta|m)$/i.test(s))
            o = !0;
          else if (/^a(lt)?$/i.test(s))
            n = !0;
          else if (/^(c|ctrl|control)$/i.test(s))
            r = !0;
          else if (/^s(hift)?$/i.test(s))
            i = !0;
          else
            throw new Error("Unrecognized modifier name: " + s);
        }
        return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e;
      }
      function mu(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n))
              continue;
            if (r == "...") {
              delete e[n];
              continue;
            }
            for (var i = en(n.split(" "), vu), o = 0; o < i.length; o++) {
              var a = void 0, s = void 0;
              o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
              var l = t[s];
              if (!l)
                t[s] = a;
              else if (l != a)
                throw new Error("Inconsistent bindings for " + s);
            }
            delete e[n];
          }
        for (var u in t)
          e[u] = t[u];
        return e;
      }
      function vr(e, t, n, r) {
        t = An(t);
        var i = t.call ? t.call(e, r) : t[e];
        if (i === !1)
          return "nothing";
        if (i === "...")
          return "multi";
        if (i != null && n(i))
          return "handled";
        if (t.fallthrough) {
          if (Object.prototype.toString.call(t.fallthrough) != "[object Array]")
            return vr(e, t.fallthrough, n, r);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var a = vr(e, t.fallthrough[o], n, r);
            if (a)
              return a;
          }
        }
      }
      function Wa(e) {
        var t = typeof e == "string" ? e : zt[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod";
      }
      function za(e, t, n) {
        var r = e;
        return t.altKey && r != "Alt" && (e = "Alt-" + e), (A ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (A ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e), !n && t.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function Fa(e, t) {
        if (D && e.keyCode == 34 && e.char)
          return !1;
        var n = zt[e.keyCode];
        return n == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (n = e.code), za(n, e, t));
      }
      function An(e) {
        return typeof e == "string" ? Ct[e] : e;
      }
      function mr(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var o = t(n[i]); r.length && se(o.from, ce(r).to) <= 0; ) {
            var a = r.pop();
            if (se(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          r.push(o);
        }
        tt(e, function() {
          for (var s = r.length - 1; s >= 0; s--)
            pr(e.doc, "", r[s].from, r[s].to, "+delete");
          ur(e);
        });
      }
      function Ei(e, t, n) {
        var r = Ji(e.text, t + n, n);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Wi(e, t, n) {
        var r = Ei(e, t.ch, n);
        return r == null ? null : new B(t.line, r, n < 0 ? "after" : "before");
      }
      function zi(e, t, n, r, i) {
        if (e) {
          t.doc.direction == "rtl" && (i = -i);
          var o = xt(n, t.doc.direction);
          if (o) {
            var a = i < 0 ? ce(o) : o[0], s = i < 0 == (a.level == 1), l = s ? "after" : "before", u;
            if (a.level > 0 || t.doc.direction == "rtl") {
              var f = or(t, n);
              u = i < 0 ? n.text.length - 1 : 0;
              var c = mt(t, f, u).top;
              u = _r(function(b) {
                return mt(t, f, b).top == c;
              }, i < 0 == (a.level == 1) ? a.from : a.to - 1, u), l == "before" && (u = Ei(n, u, 1));
            } else
              u = i < 0 ? a.to : a.from;
            return new B(r, u, l);
          }
        }
        return new B(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
      }
      function yu(e, t, n, r) {
        var i = xt(t, e.doc.direction);
        if (!i)
          return Wi(t, n, r);
        n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
        var o = Sr(i, n.ch, n.sticky), a = i[o];
        if (e.doc.direction == "ltr" && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch))
          return Wi(t, n, r);
        var s = function(Y, V) {
          return Ei(t, Y instanceof B ? Y.ch : Y, V);
        }, l, u = function(Y) {
          return e.options.lineWrapping ? (l = l || or(e, t), Bo(e, t, l, Y)) : { begin: 0, end: t.text.length };
        }, f = u(n.sticky == "before" ? s(n, -1) : n.ch);
        if (e.doc.direction == "rtl" || a.level == 1) {
          var c = a.level == 1 == r < 0, b = s(n, c ? 1 : -1);
          if (b != null && (c ? b <= a.to && b <= f.end : b >= a.from && b >= f.begin)) {
            var v = c ? "before" : "after";
            return new B(n.line, b, v);
          }
        }
        var M = function(Y, V, j) {
          for (var ee = function(ge, Ee) {
            return Ee ? new B(n.line, s(ge, 1), "before") : new B(n.line, ge, "after");
          }; Y >= 0 && Y < i.length; Y += V) {
            var oe = i[Y], ne = V > 0 == (oe.level != 1), fe = ne ? j.begin : s(j.end, -1);
            if (oe.from <= fe && fe < oe.to || (fe = ne ? oe.from : s(oe.to, -1), j.begin <= fe && fe < j.end))
              return ee(fe, ne);
          }
        }, P = M(o + r, r, f);
        if (P)
          return P;
        var U = r > 0 ? f.end : s(f.begin, -1);
        return U != null && !(r > 0 && U == t.text.length) && (P = M(r > 0 ? 0 : i.length - 1, r, u(U)), P) ? P : null;
      }
      var jr = {
        selectAll: wa,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Ye);
        },
        killLine: function(e) {
          return mr(e, function(t) {
            if (t.empty()) {
              var n = re(e.doc, t.head.line).text.length;
              return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: B(t.head.line + 1, 0) } : { from: t.head, to: B(t.head.line, n) };
            } else
              return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function(e) {
          return mr(e, function(t) {
            return {
              from: B(t.from().line, 0),
              to: le(e.doc, B(t.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return mr(e, function(t) {
            return {
              from: B(t.from().line, 0),
              to: t.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return mr(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return { from: r, to: t.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return mr(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
            return { from: t.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(B(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(B(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return Pa(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return Ia(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return bu(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
          }, Mt);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: n }, "div");
          }, Mt);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? Ia(e, t.head) : r;
          }, Mt);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
            var o = n[i].from(), a = Pe(e.getLine(o.line), o.ch, r);
            t.push($t(r - a % r));
          }
          e.replaceSelections(t);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        // Swap the two chars left and right of each selection's head.
        // Move cursor behind the two swapped characters afterwards.
        //
        // Doesn't consider line feeds a character.
        // Doesn't scan more than one line above to find a character.
        // Doesn't do anything on an empty line.
        // Doesn't do anything with non-empty selections.
        transposeChars: function(e) {
          return tt(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var i = t[r].head, o = re(e.doc, i.line).text;
                if (o) {
                  if (i.ch == o.length && (i = new B(i.line, i.ch - 1)), i.ch > 0)
                    i = new B(i.line, i.ch + 1), e.replaceRange(
                      o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                      B(i.line, i.ch - 2),
                      i,
                      "+transpose"
                    );
                  else if (i.line > e.doc.first) {
                    var a = re(e.doc, i.line - 1).text;
                    a && (i = new B(i.line, 1), e.replaceRange(
                      o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
                      B(i.line - 1, a.length - 1),
                      i,
                      "+transpose"
                    ));
                  }
                }
                n.push(new he(i, i));
              }
            e.setSelections(n);
          });
        },
        newlineAndIndent: function(e) {
          return tt(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0);
            ur(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function Pa(e, t) {
        var n = re(e.doc, t), r = lt(n);
        return r != n && (t = de(r)), zi(!0, e, r, t, 1);
      }
      function bu(e, t) {
        var n = re(e.doc, t), r = rl(n);
        return r != n && (t = de(r)), zi(!0, e, n, t, -1);
      }
      function Ia(e, t) {
        var n = Pa(e, t.line), r = re(e.doc, n.line), i = xt(r, e.doc.direction);
        if (!i || i[0].level == 0) {
          var o = Math.max(n.ch, r.text.search(/\S/)), a = t.line == n.line && t.ch <= o && t.ch;
          return B(n.line, a ? 0 : o, n.sticky);
        }
        return n;
      }
      function On(e, t, n) {
        if (typeof t == "string" && (t = jr[t], !t))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != bt;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return i;
      }
      function xu(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var i = vr(t, e.state.keyMaps[r], n, e);
          if (i)
            return i;
        }
        return e.options.extraKeys && vr(t, e.options.extraKeys, n, e) || vr(t, e.options.keyMap, n, e);
      }
      var wu = new dt();
      function Zr(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
          if (Wa(t))
            return "handled";
          if (/\'$/.test(t) ? e.state.keySeq = null : wu.set(50, function() {
            e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
          }), Ra(e, i + " " + t, n, r))
            return !0;
        }
        return Ra(e, t, n, r);
      }
      function Ra(e, t, n, r) {
        var i = xu(e, t, r);
        return i == "multi" && (e.state.keySeq = t), i == "handled" && Oe(e, "keyHandled", e, t, n), (i == "handled" || i == "multi") && (je(n), yi(e)), !!i;
      }
      function qa(e, t) {
        var n = Fa(t, !0);
        return n ? t.shiftKey && !e.state.keySeq ? Zr(e, "Shift-" + n, t, function(r) {
          return On(e, r, !0);
        }) || Zr(e, n, t, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return On(e, r);
        }) : Zr(e, n, t, function(r) {
          return On(e, r);
        }) : !1;
      }
      function _u(e, t, n) {
        return Zr(e, "'" + n + "'", t, function(r) {
          return On(e, r, !0);
        });
      }
      var Fi = null;
      function Ba(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && (t.curOp.focus = te(ve(t)), !Ae(t, e))) {
          p && F < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var n = e.keyCode;
          t.display.shift = n == 16 || e.shiftKey;
          var r = qa(t, e);
          D && (Fi = r ? n : null, !r && n == 88 && !Rs && (S ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), G && !S && !r && n == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && ku(t);
        }
      }
      function ku(e) {
        var t = e.display.lineDiv;
        ue(t, "CodeMirror-crosshair");
        function n(r) {
          (r.keyCode == 18 || !r.altKey) && (y(t, "CodeMirror-crosshair"), nt(document, "keyup", n), nt(document, "mouseover", n));
        }
        ae(document, "keyup", n), ae(document, "mouseover", n);
      }
      function Ua(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Ae(this, e);
      }
      function Ga(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && !(kt(t.display, e) || Ae(t, e) || e.ctrlKey && !e.altKey || S && e.metaKey)) {
          var n = e.keyCode, r = e.charCode;
          if (D && n == Fi) {
            Fi = null, je(e);
            return;
          }
          if (!(D && (!e.which || e.which < 10) && qa(t, e))) {
            var i = String.fromCharCode(r ?? n);
            i != "\b" && (_u(t, e, i) || t.display.input.onKeyPress(e));
          }
        }
      }
      var Su = 400, Pi = function(e, t, n) {
        this.time = e, this.pos = t, this.button = n;
      };
      Pi.prototype.compare = function(e, t, n) {
        return this.time + Su > e && se(t, this.pos) == 0 && n == this.button;
      };
      var Jr, Vr;
      function Cu(e, t) {
        var n = +/* @__PURE__ */ new Date();
        return Vr && Vr.compare(n, e, t) ? (Jr = Vr = null, "triple") : Jr && Jr.compare(n, e, t) ? (Vr = new Pi(n, e, t), Jr = null, "double") : (Jr = new Pi(n, e, t), Vr = null, "single");
      }
      function Ka(e) {
        var t = this, n = t.display;
        if (!(Ae(t, e) || n.activeTouch && n.input.supportsTouch())) {
          if (n.input.ensurePolled(), n.shift = e.shiftKey, kt(n, e)) {
            q || (n.scroller.draggable = !1, setTimeout(function() {
              return n.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!Ii(t, e)) {
            var r = Ut(t, e), i = to(e), o = r ? Cu(r, i) : "single";
            st(t).focus(), i == 1 && t.state.selectingText && t.state.selectingText(e), !(r && Lu(t, i, r, o, e)) && (i == 1 ? r ? Mu(t, r, o, e) : qn(e) == n.scroller && je(e) : i == 2 ? (r && Cn(t.doc, r), setTimeout(function() {
              return n.input.focus();
            }, 20)) : i == 3 && (L ? t.display.input.onContextMenu(e) : bi(t)));
          }
        }
      }
      function Lu(e, t, n, r, i) {
        var o = "Click";
        return r == "double" ? o = "Double" + o : r == "triple" && (o = "Triple" + o), o = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + o, Zr(e, za(o, i), i, function(a) {
          if (typeof a == "string" && (a = jr[a]), !a)
            return !1;
          var s = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), s = a(e, n) != bt;
          } finally {
            e.state.suppressEdits = !1;
          }
          return s;
        });
      }
      function Tu(e, t, n) {
        var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
        if (i.unit == null) {
          var o = R ? n.shiftKey && n.metaKey : n.altKey;
          i.unit = o ? "rectangle" : t == "single" ? "char" : t == "double" ? "word" : "line";
        }
        return (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), i.addNew == null && (i.addNew = S ? n.metaKey : n.ctrlKey), i.moveOnDrag == null && (i.moveOnDrag = !(S ? n.altKey : n.ctrlKey)), i;
      }
      function Mu(e, t, n, r) {
        p ? setTimeout(Fe(Xo, e), 0) : e.curOp.focus = te(ve(e));
        var i = Tu(e, n, r), o = e.doc.sel, a;
        e.options.dragDrop && zs && !e.isReadOnly() && n == "single" && (a = o.contains(t)) > -1 && (se((a = o.ranges[a]).from(), t) < 0 || t.xRel > 0) && (se(a.to(), t) > 0 || t.xRel < 0) ? Nu(e, r, t, i) : Au(e, r, t, i);
      }
      function Nu(e, t, n, r) {
        var i = e.display, o = !1, a = De(e, function(u) {
          q && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : bi(e)), nt(i.wrapper.ownerDocument, "mouseup", a), nt(i.wrapper.ownerDocument, "mousemove", s), nt(i.scroller, "dragstart", l), nt(i.scroller, "drop", a), o || (je(u), r.addNew || Cn(e.doc, n, null, null, r.extend), q && !Q || p && F == 9 ? setTimeout(function() {
            i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
          }, 20) : i.input.focus());
        }), s = function(u) {
          o = o || Math.abs(t.clientX - u.clientX) + Math.abs(t.clientY - u.clientY) >= 10;
        }, l = function() {
          return o = !0;
        };
        q && (i.scroller.draggable = !0), e.state.draggingText = a, a.copy = !r.moveOnDrag, ae(i.wrapper.ownerDocument, "mouseup", a), ae(i.wrapper.ownerDocument, "mousemove", s), ae(i.scroller, "dragstart", l), ae(i.scroller, "drop", a), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return i.input.focus();
        }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
      }
      function Xa(e, t, n) {
        if (n == "char")
          return new he(t, t);
        if (n == "word")
          return e.findWordAt(t);
        if (n == "line")
          return new he(B(t.line, 0), le(e.doc, B(t.line + 1, 0)));
        var r = n(e, t);
        return new he(r.from, r.to);
      }
      function Au(e, t, n, r) {
        p && bi(e);
        var i = e.display, o = e.doc;
        je(t);
        var a, s, l = o.sel, u = l.ranges;
        if (r.addNew && !r.extend ? (s = o.sel.contains(n), s > -1 ? a = u[s] : a = new he(n, n)) : (a = o.sel.primary(), s = o.sel.primIndex), r.unit == "rectangle")
          r.addNew || (a = new he(n, n)), n = Ut(e, t, !0, !0), s = -1;
        else {
          var f = Xa(e, n, r.unit);
          r.extend ? a = Di(a, f.anchor, f.head, r.extend) : a = f;
        }
        r.addNew ? s == -1 ? (s = u.length, Be(
          o,
          ft(e, u.concat([a]), s),
          { scroll: !1, origin: "*mouse" }
        )) : u.length > 1 && u[s].empty() && r.unit == "char" && !r.extend ? (Be(
          o,
          ft(e, u.slice(0, s).concat(u.slice(s + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), l = o.sel) : Hi(o, s, a, Vt) : (s = 0, Be(o, new it([a], 0), Vt), l = o.sel);
        var c = n;
        function b(j) {
          if (se(c, j) != 0)
            if (c = j, r.unit == "rectangle") {
              for (var ee = [], oe = e.options.tabSize, ne = Pe(re(o, n.line).text, n.ch, oe), fe = Pe(re(o, j.line).text, j.ch, oe), ge = Math.min(ne, fe), Ee = Math.max(ne, fe), be = Math.min(n.line, j.line), rt = Math.min(e.lastLine(), Math.max(n.line, j.line)); be <= rt; be++) {
                var Ve = re(o, be).text, Te = Ke(Ve, ge, oe);
                ge == Ee ? ee.push(new he(B(be, Te), B(be, Te))) : Ve.length > Te && ee.push(new he(B(be, Te), B(be, Ke(Ve, Ee, oe))));
              }
              ee.length || ee.push(new he(n, n)), Be(
                o,
                ft(e, l.ranges.slice(0, s).concat(ee), s),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(j);
            } else {
              var $e = a, Ie = Xa(e, j, r.unit), Ne = $e.anchor, Me;
              se(Ie.anchor, Ne) > 0 ? (Me = Ie.head, Ne = on($e.from(), Ie.anchor)) : (Me = Ie.anchor, Ne = nn($e.to(), Ie.head));
              var we = l.ranges.slice(0);
              we[s] = Ou(e, new he(le(o, Ne), Me)), Be(o, ft(e, we, s), Vt);
            }
        }
        var v = i.wrapper.getBoundingClientRect(), M = 0;
        function P(j) {
          var ee = ++M, oe = Ut(e, j, !0, r.unit == "rectangle");
          if (oe)
            if (se(oe, c) != 0) {
              e.curOp.focus = te(ve(e)), b(oe);
              var ne = bn(i, o);
              (oe.line >= ne.to || oe.line < ne.from) && setTimeout(De(e, function() {
                M == ee && P(j);
              }), 150);
            } else {
              var fe = j.clientY < v.top ? -20 : j.clientY > v.bottom ? 20 : 0;
              fe && setTimeout(De(e, function() {
                M == ee && (i.scroller.scrollTop += fe, P(j));
              }), 50);
            }
        }
        function U(j) {
          e.state.selectingText = !1, M = 1 / 0, j && (je(j), i.input.focus()), nt(i.wrapper.ownerDocument, "mousemove", Y), nt(i.wrapper.ownerDocument, "mouseup", V), o.history.lastSelOrigin = null;
        }
        var Y = De(e, function(j) {
          j.buttons === 0 || !to(j) ? U(j) : P(j);
        }), V = De(e, U);
        e.state.selectingText = V, ae(i.wrapper.ownerDocument, "mousemove", Y), ae(i.wrapper.ownerDocument, "mouseup", V);
      }
      function Ou(e, t) {
        var n = t.anchor, r = t.head, i = re(e.doc, n.line);
        if (se(n, r) == 0 && n.sticky == r.sticky)
          return t;
        var o = xt(i);
        if (!o)
          return t;
        var a = Sr(o, n.ch, n.sticky), s = o[a];
        if (s.from != n.ch && s.to != n.ch)
          return t;
        var l = a + (s.from == n.ch == (s.level != 1) ? 0 : 1);
        if (l == 0 || l == o.length)
          return t;
        var u;
        if (r.line != n.line)
          u = (r.line - n.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var f = Sr(o, r.ch, r.sticky), c = f - a || (r.ch - n.ch) * (s.level == 1 ? -1 : 1);
          f == l - 1 || f == l ? u = c < 0 : u = c > 0;
        }
        var b = o[l + (u ? -1 : 0)], v = u == (b.level == 1), M = v ? b.from : b.to, P = v ? "after" : "before";
        return n.ch == M && n.sticky == P ? t : new he(new B(n.line, M, P), r);
      }
      function Qa(e, t, n, r) {
        var i, o;
        if (t.touches)
          i = t.touches[0].clientX, o = t.touches[0].clientY;
        else
          try {
            i = t.clientX, o = t.clientY;
          } catch {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && je(t);
        var a = e.display, s = a.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !at(e, n))
          return Rn(t);
        o -= s.top - a.viewOffset;
        for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
          var u = a.gutters.childNodes[l];
          if (u && u.getBoundingClientRect().right >= i) {
            var f = Rt(e.doc, o), c = e.display.gutterSpecs[l];
            return Ce(e, n, e, f, c.className, t), Rn(t);
          }
        }
      }
      function Ii(e, t) {
        return Qa(e, t, "gutterClick", !0);
      }
      function Ya(e, t) {
        kt(e.display, t) || Du(e, t) || Ae(e, t, "contextmenu") || L || e.display.input.onContextMenu(t);
      }
      function Du(e, t) {
        return at(e, "gutterContextMenu") ? Qa(e, t, "gutterContextMenu", !1) : !1;
      }
      function ja(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Dr(e);
      }
      var yr = { toString: function() {
        return "CodeMirror.Init";
      } }, Za = {}, Dn = {};
      function Hu(e) {
        var t = e.optionHandlers;
        function n(r, i, o, a) {
          e.defaults[r] = i, o && (t[r] = a ? function(s, l, u) {
            u != yr && o(s, l, u);
          } : o);
        }
        e.defineOption = n, e.Init = yr, n("value", "", function(r, i) {
          return r.setValue(i);
        }, !0), n("mode", null, function(r, i) {
          r.doc.modeOption = i, Ni(r);
        }, !0), n("indentUnit", 2, Ni, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function(r) {
          Rr(r), Dr(r), Ze(r);
        }, !0), n("lineSeparator", null, function(r, i) {
          if (r.doc.lineSep = i, !!i) {
            var o = [], a = r.doc.first;
            r.doc.iter(function(l) {
              for (var u = 0; ; ) {
                var f = l.text.indexOf(i, u);
                if (f == -1)
                  break;
                u = f + i.length, o.push(B(a, f));
              }
              a++;
            });
            for (var s = o.length - 1; s >= 0; s--)
              pr(r.doc, i, o[s], B(o[s].line, o[s].ch + i.length));
          }
        }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, i, o) {
          r.state.specialChars = new RegExp(i.source + (i.test("	") ? "" : "|	"), "g"), o != yr && r.refresh();
        }), n("specialCharPlaceholder", ll, function(r) {
          return r.refresh();
        }, !0), n("electricChars", !0), n("inputStyle", k ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), n("spellcheck", !1, function(r, i) {
          return r.getInputField().spellcheck = i;
        }, !0), n("autocorrect", !1, function(r, i) {
          return r.getInputField().autocorrect = i;
        }, !0), n("autocapitalize", !1, function(r, i) {
          return r.getInputField().autocapitalize = i;
        }, !0), n("rtlMoveVisually", !z), n("wholeLineUpdateBefore", !0), n("theme", "default", function(r) {
          ja(r), Ir(r);
        }, !0), n("keyMap", "default", function(r, i, o) {
          var a = An(i), s = o != yr && An(o);
          s && s.detach && s.detach(r, a), a.attach && a.attach(r, s || null);
        }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Wu, !0), n("gutters", [], function(r, i) {
          r.display.gutterSpecs = Ti(i, r.options.lineNumbers), Ir(r);
        }, !0), n("fixedGutter", !0, function(r, i) {
          r.display.gutters.style.left = i ? gi(r.display) + "px" : "0", r.refresh();
        }, !0), n("coverGutterNextToScrollbar", !1, function(r) {
          return fr(r);
        }, !0), n("scrollbarStyle", "native", function(r) {
          Vo(r), fr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), n("lineNumbers", !1, function(r, i) {
          r.display.gutterSpecs = Ti(r.options.gutters, i), Ir(r);
        }, !0), n("firstLineNumber", 1, Ir, !0), n("lineNumberFormatter", function(r) {
          return r;
        }, Ir, !0), n("showCursorWhenSelecting", !1, Hr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function(r, i) {
          i == "nocursor" && (lr(r), r.display.input.blur()), r.display.input.readOnlyChanged(i);
        }), n("screenReaderLabel", null, function(r, i) {
          i = i === "" ? null : i, r.display.input.screenReaderLabelChanged(i);
        }), n("disableInput", !1, function(r, i) {
          i || r.display.input.reset();
        }, !0), n("dragDrop", !0, Eu), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, Hr, !0), n("singleCursorHeightPerLine", !0, Hr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Rr, !0), n("addModeClass", !1, Rr, !0), n("pollInterval", 100), n("undoDepth", 200, function(r, i) {
          return r.doc.history.undoDepth = i;
        }), n("historyEventDelay", 1250), n("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), n("maxHighlightLength", 1e4, Rr, !0), n("moveInputWithCursor", !0, function(r, i) {
          i || r.display.input.resetPosition();
        }), n("tabindex", null, function(r, i) {
          return r.display.input.getField().tabIndex = i || "";
        }), n("autofocus", null), n("direction", "ltr", function(r, i) {
          return r.doc.setDirection(i);
        }, !0), n("phrases", null);
      }
      function Eu(e, t, n) {
        var r = n && n != yr;
        if (!t != !r) {
          var i = e.display.dragFunctions, o = t ? ae : nt;
          o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop);
        }
      }
      function Wu(e) {
        e.options.lineWrapping ? (ue(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (y(e.display.wrapper, "CodeMirror-wrap"), oi(e)), vi(e), Ze(e), Dr(e), setTimeout(function() {
          return fr(e);
        }, 100);
      }
      function me(e, t) {
        var n = this;
        if (!(this instanceof me))
          return new me(e, t);
        this.options = t = t ? ht(t) : {}, ht(Za, t, !1);
        var r = t.value;
        typeof r == "string" ? r = new Je(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
        var i = new me.inputStyles[t.inputStyle](this), o = this.display = new Yl(e, r, i, t);
        o.wrapper.CodeMirror = this, ja(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Vo(this), this.state = {
          keyMaps: [],
          // stores maps added by addKeyMap
          overlays: [],
          // highlighting overlays, as added by addOverlay
          modeGen: 0,
          // bumped when mode/overlay changes, used to invalidate highlighting info
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          // used to disable editing during key handlers when in readOnly mode
          pasteIncoming: -1,
          cutIncoming: -1,
          // help recognize paste/cut edits in input.poll
          selectingText: !1,
          draggingText: !1,
          highlight: new dt(),
          // stores highlight worker timeout
          keySeq: null,
          // Unfinished key sequence
          specialChars: null
        }, t.autofocus && !k && o.input.focus(), p && F < 11 && setTimeout(function() {
          return n.display.input.reset(!0);
        }, 20), zu(this), du(), Qt(this), this.curOp.forceUpdate = !0, la(this, r), t.autofocus && !k || this.hasFocus() ? setTimeout(function() {
          n.hasFocus() && !n.state.focused && xi(n);
        }, 20) : lr(this);
        for (var a in Dn)
          Dn.hasOwnProperty(a) && Dn[a](this, t[a], yr);
        ta(this), t.finishInit && t.finishInit(this);
        for (var s = 0; s < Ri.length; ++s)
          Ri[s](this);
        Yt(this), q && t.lineWrapping && getComputedStyle(o.lineDiv).textRendering == "optimizelegibility" && (o.lineDiv.style.textRendering = "auto");
      }
      me.defaults = Za, me.optionHandlers = Dn;
      function zu(e) {
        var t = e.display;
        ae(t.scroller, "mousedown", De(e, Ka)), p && F < 11 ? ae(t.scroller, "dblclick", De(e, function(l) {
          if (!Ae(e, l)) {
            var u = Ut(e, l);
            if (!(!u || Ii(e, l) || kt(e.display, l))) {
              je(l);
              var f = e.findWordAt(u);
              Cn(e.doc, f.anchor, f.head);
            }
          }
        })) : ae(t.scroller, "dblclick", function(l) {
          return Ae(e, l) || je(l);
        }), ae(t.scroller, "contextmenu", function(l) {
          return Ya(e, l);
        }), ae(t.input.getField(), "contextmenu", function(l) {
          t.scroller.contains(l.target) || Ya(e, l);
        });
        var n, r = { end: 0 };
        function i() {
          t.activeTouch && (n = setTimeout(function() {
            return t.activeTouch = null;
          }, 1e3), r = t.activeTouch, r.end = +/* @__PURE__ */ new Date());
        }
        function o(l) {
          if (l.touches.length != 1)
            return !1;
          var u = l.touches[0];
          return u.radiusX <= 1 && u.radiusY <= 1;
        }
        function a(l, u) {
          if (u.left == null)
            return !0;
          var f = u.left - l.left, c = u.top - l.top;
          return f * f + c * c > 20 * 20;
        }
        ae(t.scroller, "touchstart", function(l) {
          if (!Ae(e, l) && !o(l) && !Ii(e, l)) {
            t.input.ensurePolled(), clearTimeout(n);
            var u = +/* @__PURE__ */ new Date();
            t.activeTouch = {
              start: u,
              moved: !1,
              prev: u - r.end <= 300 ? r : null
            }, l.touches.length == 1 && (t.activeTouch.left = l.touches[0].pageX, t.activeTouch.top = l.touches[0].pageY);
          }
        }), ae(t.scroller, "touchmove", function() {
          t.activeTouch && (t.activeTouch.moved = !0);
        }), ae(t.scroller, "touchend", function(l) {
          var u = t.activeTouch;
          if (u && !kt(t, l) && u.left != null && !u.moved && /* @__PURE__ */ new Date() - u.start < 300) {
            var f = e.coordsChar(t.activeTouch, "page"), c;
            !u.prev || a(u, u.prev) ? c = new he(f, f) : !u.prev.prev || a(u, u.prev.prev) ? c = e.findWordAt(f) : c = new he(B(f.line, 0), le(e.doc, B(f.line + 1, 0))), e.setSelection(c.anchor, c.head), e.focus(), je(l);
          }
          i();
        }), ae(t.scroller, "touchcancel", i), ae(t.scroller, "scroll", function() {
          t.scroller.clientHeight && (Wr(e, t.scroller.scrollTop), Kt(e, t.scroller.scrollLeft, !0), Ce(e, "scroll", e));
        }), ae(t.scroller, "mousewheel", function(l) {
          return ia(e, l);
        }), ae(t.scroller, "DOMMouseScroll", function(l) {
          return ia(e, l);
        }), ae(t.wrapper, "scroll", function() {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function(l) {
            Ae(e, l) || Cr(l);
          },
          over: function(l) {
            Ae(e, l) || (hu(e, l), Cr(l));
          },
          start: function(l) {
            return cu(e, l);
          },
          drop: De(e, fu),
          leave: function(l) {
            Ae(e, l) || Da(e);
          }
        };
        var s = t.input.getField();
        ae(s, "keyup", function(l) {
          return Ua.call(e, l);
        }), ae(s, "keydown", De(e, Ba)), ae(s, "keypress", De(e, Ga)), ae(s, "focus", function(l) {
          return xi(e, l);
        }), ae(s, "blur", function(l) {
          return lr(e, l);
        });
      }
      var Ri = [];
      me.defineInitHook = function(e) {
        return Ri.push(e);
      };
      function $r(e, t, n, r) {
        var i = e.doc, o;
        n == null && (n = "add"), n == "smart" && (i.mode.indent ? o = Tr(e, t).state : n = "prev");
        var a = e.options.tabSize, s = re(i, t), l = Pe(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var u = s.text.match(/^\s*/)[0], f;
        if (!r && !/\S/.test(s.text))
          f = 0, n = "not";
        else if (n == "smart" && (f = i.mode.indent(o, s.text.slice(u.length), s.text), f == bt || f > 150)) {
          if (!r)
            return;
          n = "prev";
        }
        n == "prev" ? t > i.first ? f = Pe(re(i, t - 1).text, null, a) : f = 0 : n == "add" ? f = l + e.options.indentUnit : n == "subtract" ? f = l - e.options.indentUnit : typeof n == "number" && (f = l + n), f = Math.max(0, f);
        var c = "", b = 0;
        if (e.options.indentWithTabs)
          for (var v = Math.floor(f / a); v; --v)
            b += a, c += "	";
        if (b < f && (c += $t(f - b)), c != u)
          return pr(i, c, B(t, 0), B(t, u.length), "+input"), s.stateAfter = null, !0;
        for (var M = 0; M < i.sel.ranges.length; M++) {
          var P = i.sel.ranges[M];
          if (P.head.line == t && P.head.ch < u.length) {
            var U = B(t, u.length);
            Hi(i, M, new he(U, U));
            break;
          }
        }
      }
      var ct = null;
      function Hn(e) {
        ct = e;
      }
      function qi(e, t, n, r, i) {
        var o = e.doc;
        e.display.shift = !1, r || (r = o.sel);
        var a = +/* @__PURE__ */ new Date() - 200, s = i == "paste" || e.state.pasteIncoming > a, l = Gn(t), u = null;
        if (s && r.ranges.length > 1)
          if (ct && ct.text.join(`
`) == t) {
            if (r.ranges.length % ct.text.length == 0) {
              u = [];
              for (var f = 0; f < ct.text.length; f++)
                u.push(o.splitLines(ct.text[f]));
            }
          } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = en(l, function(Y) {
            return [Y];
          }));
        for (var c = e.curOp.updateInput, b = r.ranges.length - 1; b >= 0; b--) {
          var v = r.ranges[b], M = v.from(), P = v.to();
          v.empty() && (n && n > 0 ? M = B(M.line, M.ch - n) : e.state.overwrite && !s ? P = B(P.line, Math.min(re(o, P.line).text.length, P.ch + ce(l).length)) : s && ct && ct.lineWise && ct.text.join(`
`) == l.join(`
`) && (M = P = B(M.line, 0)));
          var U = {
            from: M,
            to: P,
            text: u ? u[b % u.length] : l,
            origin: i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
          };
          dr(e.doc, U), Oe(e, "inputRead", e, U);
        }
        t && !s && Va(e, t), ur(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = c), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function Ja(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        if (n)
          return e.preventDefault(), !t.isReadOnly() && !t.options.disableInput && t.hasFocus() && tt(t, function() {
            return qi(t, n, 0, null, "paste");
          }), !0;
      }
      function Va(e, t) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
              var o = e.getModeAt(i.head), a = !1;
              if (o.electricChars) {
                for (var s = 0; s < o.electricChars.length; s++)
                  if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                    a = $r(e, i.head.line, "smart");
                    break;
                  }
              } else o.electricInput && o.electricInput.test(re(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = $r(e, i.head.line, "smart"));
              a && Oe(e, "electricInput", e, i.head.line);
            }
          }
      }
      function $a(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var i = e.doc.sel.ranges[r].head.line, o = { anchor: B(i, 0), head: B(i + 1, 0) };
          n.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: n };
      }
      function Bi(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!t);
      }
      function es() {
        var e = d("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t = d("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return q ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), t;
      }
      function Fu(e) {
        var t = e.optionHandlers, n = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            st(this).focus(), this.display.input.focus();
          },
          setOption: function(r, i) {
            var o = this.options, a = o[r];
            o[r] == i && r != "mode" || (o[r] = i, t.hasOwnProperty(r) && De(this, t[r])(this, i, a), Ce(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, i) {
            this.state.keyMaps[i ? "push" : "unshift"](An(r));
          },
          removeKeyMap: function(r) {
            for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
              if (i[o] == r || i[o].name == r)
                return i.splice(o, 1), !0;
          },
          addOverlay: Xe(function(r, i) {
            var o = r.token ? r : e.getMode(this.options, r);
            if (o.startState)
              throw new Error("Overlays may not be stateful.");
            Os(
              this.state.overlays,
              {
                mode: o,
                modeSpec: r,
                opaque: i && i.opaque,
                priority: i && i.priority || 0
              },
              function(a) {
                return a.priority;
              }
            ), this.state.modeGen++, Ze(this);
          }),
          removeOverlay: Xe(function(r) {
            for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
              var a = i[o].modeSpec;
              if (a == r || typeof r == "string" && a.name == r) {
                i.splice(o, 1), this.state.modeGen++, Ze(this);
                return;
              }
            }
          }),
          indentLine: Xe(function(r, i, o) {
            typeof i != "string" && typeof i != "number" && (i == null ? i = this.options.smartIndent ? "smart" : "prev" : i = i ? "add" : "subtract"), Lr(this.doc, r) && $r(this, r, i, o);
          }),
          indentSelection: Xe(function(r) {
            for (var i = this.doc.sel.ranges, o = -1, a = 0; a < i.length; a++) {
              var s = i[a];
              if (s.empty())
                s.head.line > o && ($r(this, s.head.line, r, !0), o = s.head.line, a == this.doc.sel.primIndex && ur(this));
              else {
                var l = s.from(), u = s.to(), f = Math.max(o, l.line);
                o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
                for (var c = f; c < o; ++c)
                  $r(this, c, r);
                var b = this.doc.sel.ranges;
                l.ch == 0 && i.length == b.length && b[a].from().ch > 0 && Hi(this.doc, a, new he(l, b[a].to()), Ye);
              }
            }
          }),
          // Fetch the parser token for a given character. Useful for hacks
          // that want to inspect the mode state (say, for completion).
          getTokenAt: function(r, i) {
            return uo(this, r, i);
          },
          getLineTokens: function(r, i) {
            return uo(this, B(r), i, !0);
          },
          getTokenTypeAt: function(r) {
            r = le(this.doc, r);
            var i = ao(this, re(this.doc, r.line)), o = 0, a = (i.length - 1) / 2, s = r.ch, l;
            if (s == 0)
              l = i[2];
            else
              for (; ; ) {
                var u = o + a >> 1;
                if ((u ? i[u * 2 - 1] : 0) >= s)
                  a = u;
                else if (i[u * 2 + 1] < s)
                  o = u + 1;
                else {
                  l = i[u * 2 + 2];
                  break;
                }
              }
            var f = l ? l.indexOf("overlay ") : -1;
            return f < 0 ? l : f == 0 ? null : l.slice(0, f - 1);
          },
          getModeAt: function(r) {
            var i = this.doc.mode;
            return i.innerMode ? e.innerMode(i, this.getTokenAt(r).state).mode : i;
          },
          getHelper: function(r, i) {
            return this.getHelpers(r, i)[0];
          },
          getHelpers: function(r, i) {
            var o = [];
            if (!n.hasOwnProperty(i))
              return o;
            var a = n[i], s = this.getModeAt(r);
            if (typeof s[i] == "string")
              a[s[i]] && o.push(a[s[i]]);
            else if (s[i])
              for (var l = 0; l < s[i].length; l++) {
                var u = a[s[i][l]];
                u && o.push(u);
              }
            else s.helperType && a[s.helperType] ? o.push(a[s.helperType]) : a[s.name] && o.push(a[s.name]);
            for (var f = 0; f < a._global.length; f++) {
              var c = a._global[f];
              c.pred(s, this) && Se(o, c.val) == -1 && o.push(c.val);
            }
            return o;
          },
          getStateAfter: function(r, i) {
            var o = this.doc;
            return r = no(o, r ?? o.first + o.size - 1), Tr(this, r + 1, i).state;
          },
          cursorCoords: function(r, i) {
            var o, a = this.doc.sel.primary();
            return r == null ? o = a.head : typeof r == "object" ? o = le(this.doc, r) : o = r ? a.from() : a.to(), ut(this, o, i || "page");
          },
          charCoords: function(r, i) {
            return gn(this, le(this.doc, r), i || "page");
          },
          coordsChar: function(r, i) {
            return r = Io(this, r, i || "page"), hi(this, r.left, r.top);
          },
          lineAtHeight: function(r, i) {
            return r = Io(this, { top: r, left: 0 }, i || "page").top, Rt(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, i, o) {
            var a = !1, s;
            if (typeof r == "number") {
              var l = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > l && (r = l, a = !0), s = re(this.doc, r);
            } else
              s = r;
            return pn(this, s, { top: 0, left: 0 }, i || "page", o || a).top + (a ? this.doc.height - _t(s) : 0);
          },
          defaultTextHeight: function() {
            return ar(this.display);
          },
          defaultCharWidth: function() {
            return sr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, i, o, a, s) {
            var l = this.display;
            r = ut(this, le(this.doc, r));
            var u = r.bottom, f = r.left;
            if (i.style.position = "absolute", i.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(i), l.sizer.appendChild(i), a == "over")
              u = r.top;
            else if (a == "above" || a == "near") {
              var c = Math.max(l.wrapper.clientHeight, this.doc.height), b = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
              (a == "above" || r.bottom + i.offsetHeight > c) && r.top > i.offsetHeight ? u = r.top - i.offsetHeight : r.bottom + i.offsetHeight <= c && (u = r.bottom), f + i.offsetWidth > b && (f = b - i.offsetWidth);
            }
            i.style.top = u + "px", i.style.left = i.style.right = "", s == "right" ? (f = l.sizer.clientWidth - i.offsetWidth, i.style.right = "0px") : (s == "left" ? f = 0 : s == "middle" && (f = (l.sizer.clientWidth - i.offsetWidth) / 2), i.style.left = f + "px"), o && El(this, { left: f, top: u, right: f + i.offsetWidth, bottom: u + i.offsetHeight });
          },
          triggerOnKeyDown: Xe(Ba),
          triggerOnKeyPress: Xe(Ga),
          triggerOnKeyUp: Ua,
          triggerOnMouseDown: Xe(Ka),
          execCommand: function(r) {
            if (jr.hasOwnProperty(r))
              return jr[r].call(null, this);
          },
          triggerElectric: Xe(function(r) {
            Va(this, r);
          }),
          findPosH: function(r, i, o, a) {
            var s = 1;
            i < 0 && (s = -1, i = -i);
            for (var l = le(this.doc, r), u = 0; u < i && (l = Ui(this.doc, l, s, o, a), !l.hitSide); ++u)
              ;
            return l;
          },
          moveH: Xe(function(r, i) {
            var o = this;
            this.extendSelectionsBy(function(a) {
              return o.display.shift || o.doc.extend || a.empty() ? Ui(o.doc, a.head, r, i, o.options.rtlMoveVisually) : r < 0 ? a.from() : a.to();
            }, Mt);
          }),
          deleteH: Xe(function(r, i) {
            var o = this.doc.sel, a = this.doc;
            o.somethingSelected() ? a.replaceSelection("", null, "+delete") : mr(this, function(s) {
              var l = Ui(a, s.head, r, i, !1);
              return r < 0 ? { from: l, to: s.head } : { from: s.head, to: l };
            });
          }),
          findPosV: function(r, i, o, a) {
            var s = 1, l = a;
            i < 0 && (s = -1, i = -i);
            for (var u = le(this.doc, r), f = 0; f < i; ++f) {
              var c = ut(this, u, "div");
              if (l == null ? l = c.left : c.left = l, u = ts(this, c, s, o), u.hitSide)
                break;
            }
            return u;
          },
          moveV: Xe(function(r, i) {
            var o = this, a = this.doc, s = [], l = !this.display.shift && !a.extend && a.sel.somethingSelected();
            if (a.extendSelectionsBy(function(f) {
              if (l)
                return r < 0 ? f.from() : f.to();
              var c = ut(o, f.head, "div");
              f.goalColumn != null && (c.left = f.goalColumn), s.push(c.left);
              var b = ts(o, c, r, i);
              return i == "page" && f == a.sel.primary() && _i(o, gn(o, b, "div").top - c.top), b;
            }, Mt), s.length)
              for (var u = 0; u < a.sel.ranges.length; u++)
                a.sel.ranges[u].goalColumn = s[u];
          }),
          // Find the word at the given position (as returned by coordsChar).
          findWordAt: function(r) {
            var i = this.doc, o = re(i, r.line).text, a = r.ch, s = r.ch;
            if (o) {
              var l = this.getHelper(r, "wordChars");
              (r.sticky == "before" || s == o.length) && a ? --a : ++s;
              for (var u = o.charAt(a), f = tn(u, l) ? function(c) {
                return tn(c, l);
              } : /\s/.test(u) ? function(c) {
                return /\s/.test(c);
              } : function(c) {
                return !/\s/.test(c) && !tn(c);
              }; a > 0 && f(o.charAt(a - 1)); )
                --a;
              for (; s < o.length && f(o.charAt(s)); )
                ++s;
            }
            return new he(B(r.line, a), B(r.line, s));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? ue(this.display.cursorDiv, "CodeMirror-overwrite") : y(this.display.cursorDiv, "CodeMirror-overwrite"), Ce(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == te(ve(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Xe(function(r, i) {
            Er(this, r, i);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - vt(this) - this.display.barHeight,
              width: r.scrollWidth - vt(this) - this.display.barWidth,
              clientHeight: li(this),
              clientWidth: qt(this)
            };
          },
          scrollIntoView: Xe(function(r, i) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, i == null && (i = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: B(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = i || 0, r.from.line != null ? Wl(this, r) : Yo(this, r.from, r.to, r.margin);
          }),
          setSize: Xe(function(r, i) {
            var o = this, a = function(l) {
              return typeof l == "number" || /^\d+$/.test(String(l)) ? l + "px" : l;
            };
            r != null && (this.display.wrapper.style.width = a(r)), i != null && (this.display.wrapper.style.height = a(i)), this.options.lineWrapping && zo(this);
            var s = this.display.viewFrom;
            this.doc.iter(s, this.display.viewTo, function(l) {
              if (l.widgets) {
                for (var u = 0; u < l.widgets.length; u++)
                  if (l.widgets[u].noHScroll) {
                    At(o, s, "widget");
                    break;
                  }
              }
              ++s;
            }), this.curOp.forceUpdate = !0, Ce(this, "refresh", this);
          }),
          operation: function(r) {
            return tt(this, r);
          },
          startOperation: function() {
            return Qt(this);
          },
          endOperation: function() {
            return Yt(this);
          },
          refresh: Xe(function() {
            var r = this.display.cachedTextHeight;
            Ze(this), this.curOp.forceUpdate = !0, Dr(this), Er(this, this.doc.scrollLeft, this.doc.scrollTop), Ci(this.display), (r == null || Math.abs(r - ar(this.display)) > 0.5 || this.options.lineWrapping) && vi(this), Ce(this, "refresh", this);
          }),
          swapDoc: Xe(function(r) {
            var i = this.doc;
            return i.cm = null, this.state.selectingText && this.state.selectingText(), la(this, r), Dr(this), this.display.input.reset(), Er(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, Oe(this, "swapDoc", this, i), i;
          }),
          phrase: function(r) {
            var i = this.options.phrases;
            return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, er(e), e.registerHelper = function(r, i, o) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), n[r][i] = o;
        }, e.registerGlobalHelper = function(r, i, o, a) {
          e.registerHelper(r, i, a), n[r]._global.push({ pred: o, val: a });
        };
      }
      function Ui(e, t, n, r, i) {
        var o = t, a = n, s = re(e, t.line), l = i && e.direction == "rtl" ? -n : n;
        function u() {
          var V = t.line + l;
          return V < e.first || V >= e.first + e.size ? !1 : (t = new B(V, t.ch, t.sticky), s = re(e, V));
        }
        function f(V) {
          var j;
          if (r == "codepoint") {
            var ee = s.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
            if (isNaN(ee))
              j = null;
            else {
              var oe = n > 0 ? ee >= 55296 && ee < 56320 : ee >= 56320 && ee < 57343;
              j = new B(t.line, Math.max(0, Math.min(s.text.length, t.ch + n * (oe ? 2 : 1))), -n);
            }
          } else i ? j = yu(e.cm, s, t, n) : j = Wi(s, t, n);
          if (j == null)
            if (!V && u())
              t = zi(i, e.cm, s, t.line, l);
            else
              return !1;
          else
            t = j;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          f();
        else if (r == "column")
          f(!0);
        else if (r == "word" || r == "group")
          for (var c = null, b = r == "group", v = e.cm && e.cm.getHelper(t, "wordChars"), M = !0; !(n < 0 && !f(!M)); M = !1) {
            var P = s.text.charAt(t.ch) || `
`, U = tn(P, v) ? "w" : b && P == `
` ? "n" : !b || /\s/.test(P) ? null : "p";
            if (b && !M && !U && (U = "s"), c && c != U) {
              n < 0 && (n = 1, f(), t.sticky = "after");
              break;
            }
            if (U && (c = U), n > 0 && !f(!M))
              break;
          }
        var Y = Tn(e, t, o, a, !0);
        return Jn(o, Y) && (Y.hitSide = !0), Y;
      }
      function ts(e, t, n, r) {
        var i = e.doc, o = t.left, a;
        if (r == "page") {
          var s = Math.min(e.display.wrapper.clientHeight, st(e).innerHeight || i(e).documentElement.clientHeight), l = Math.max(s - 0.5 * ar(e.display), 3);
          a = (n > 0 ? t.bottom : t.top) + n * l;
        } else r == "line" && (a = n > 0 ? t.bottom + 3 : t.top - 3);
        for (var u; u = hi(e, o, a), !!u.outside; ) {
          if (n < 0 ? a <= 0 : a >= i.height) {
            u.hitSide = !0;
            break;
          }
          a += n * 5;
        }
        return u;
      }
      var pe = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new dt(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      pe.prototype.init = function(e) {
        var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;
        i.contentEditable = !0, Bi(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function o(s) {
          for (var l = s.target; l; l = l.parentNode) {
            if (l == i)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(l.className))
              break;
          }
          return !1;
        }
        ae(i, "paste", function(s) {
          !o(s) || Ae(r, s) || Ja(s, r) || F <= 11 && setTimeout(De(r, function() {
            return t.updateFromDOM();
          }), 20);
        }), ae(i, "compositionstart", function(s) {
          t.composing = { data: s.data, done: !1 };
        }), ae(i, "compositionupdate", function(s) {
          t.composing || (t.composing = { data: s.data, done: !1 });
        }), ae(i, "compositionend", function(s) {
          t.composing && (s.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
        }), ae(i, "touchstart", function() {
          return n.forceCompositionEnd();
        }), ae(i, "input", function() {
          t.composing || t.readFromDOMSoon();
        });
        function a(s) {
          if (!(!o(s) || Ae(r, s))) {
            if (r.somethingSelected())
              Hn({ lineWise: !1, text: r.getSelections() }), s.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var l = $a(r);
              Hn({ lineWise: !0, text: l.text }), s.type == "cut" && r.operation(function() {
                r.setSelections(l.ranges, 0, Ye), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (s.clipboardData) {
              s.clipboardData.clearData();
              var u = ct.text.join(`
`);
              if (s.clipboardData.setData("Text", u), s.clipboardData.getData("Text") == u) {
                s.preventDefault();
                return;
              }
            }
            var f = es(), c = f.firstChild;
            Bi(c), r.display.lineSpace.insertBefore(f, r.display.lineSpace.firstChild), c.value = ct.text.join(`
`);
            var b = te(Ge(i));
            ye(c), setTimeout(function() {
              r.display.lineSpace.removeChild(f), b.focus(), b == i && n.showPrimarySelection();
            }, 50);
          }
        }
        ae(i, "copy", a), ae(i, "cut", a);
      }, pe.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, pe.prototype.prepareSelection = function() {
        var e = Ko(this.cm, !1);
        return e.focus = te(Ge(this.div)) == this.div, e;
      }, pe.prototype.showSelection = function(e, t) {
        !e || !this.cm.display.view.length || ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, pe.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, pe.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), r = n.from(), i = n.to();
        if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var o = En(t, e.anchorNode, e.anchorOffset), a = En(t, e.focusNode, e.focusOffset);
        if (!(o && !o.bad && a && !a.bad && se(on(o, a), r) == 0 && se(nn(o, a), i) == 0)) {
          var s = t.display.view, l = r.line >= t.display.viewFrom && rs(t, r) || { node: s[0].measure.map[2], offset: 0 }, u = i.line < t.display.viewTo && rs(t, i);
          if (!u) {
            var f = s[s.length - 1].measure, c = f.maps ? f.maps[f.maps.length - 1] : f.map;
            u = { node: c[c.length - 1], offset: c[c.length - 2] - c[c.length - 3] };
          }
          if (!l || !u) {
            e.removeAllRanges();
            return;
          }
          var b = e.rangeCount && e.getRangeAt(0), v;
          try {
            v = H(l.node, l.offset, u.offset, u.node);
          } catch {
          }
          v && (!G && t.state.focused ? (e.collapse(l.node, l.offset), v.collapsed || (e.removeAllRanges(), e.addRange(v))) : (e.removeAllRanges(), e.addRange(v)), b && e.anchorNode == null ? e.addRange(b) : G && this.startGracePeriod()), this.rememberSelection();
        }
      }, pe.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, pe.prototype.showMultipleSelections = function(e) {
        E(this.cm.display.cursorDiv, e.cursors), E(this.cm.display.selectionDiv, e.selection);
      }, pe.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, pe.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return Z(this.div, t);
      }, pe.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || te(Ge(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, pe.prototype.blur = function() {
        this.div.blur();
      }, pe.prototype.getField = function() {
        return this.div;
      }, pe.prototype.supportsTouch = function() {
        return !0;
      }, pe.prototype.receivedFocus = function() {
        var e = this, t = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : tt(this.cm, function() {
          return t.cm.curOp.selectionChanged = !0;
        });
        function n() {
          t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }, pe.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, pe.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), t = this.cm;
          if (x && N && this.cm.display.gutterSpecs.length && Pu(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = En(t, e.anchorNode, e.anchorOffset), r = En(t, e.focusNode, e.focusOffset);
            n && r && tt(t, function() {
              Be(t.doc, Dt(n, r), Ye), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
            });
          }
        }
      }, pe.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, t = e.display, n = e.doc.sel.primary(), r = n.from(), i = n.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = B(r.line - 1, re(e.doc, r.line - 1).length)), i.ch == re(e.doc, i.line).text.length && i.line < e.lastLine() && (i = B(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1)
          return !1;
        var o, a, s;
        r.line == t.viewFrom || (o = Gt(e, r.line)) == 0 ? (a = de(t.view[0].line), s = t.view[0].node) : (a = de(t.view[o].line), s = t.view[o - 1].node.nextSibling);
        var l = Gt(e, i.line), u, f;
        if (l == t.view.length - 1 ? (u = t.viewTo - 1, f = t.lineDiv.lastChild) : (u = de(t.view[l + 1].line) - 1, f = t.view[l + 1].node.previousSibling), !s)
          return !1;
        for (var c = e.doc.splitLines(Iu(e, s, f, a, u)), b = It(e.doc, B(a, 0), B(u, re(e.doc, u).text.length)); c.length > 1 && b.length > 1; )
          if (ce(c) == ce(b))
            c.pop(), b.pop(), u--;
          else if (c[0] == b[0])
            c.shift(), b.shift(), a++;
          else
            break;
        for (var v = 0, M = 0, P = c[0], U = b[0], Y = Math.min(P.length, U.length); v < Y && P.charCodeAt(v) == U.charCodeAt(v); )
          ++v;
        for (var V = ce(c), j = ce(b), ee = Math.min(
          V.length - (c.length == 1 ? v : 0),
          j.length - (b.length == 1 ? v : 0)
        ); M < ee && V.charCodeAt(V.length - M - 1) == j.charCodeAt(j.length - M - 1); )
          ++M;
        if (c.length == 1 && b.length == 1 && a == r.line)
          for (; v && v > r.ch && V.charCodeAt(V.length - M - 1) == j.charCodeAt(j.length - M - 1); )
            v--, M++;
        c[c.length - 1] = V.slice(0, V.length - M).replace(/^\u200b+/, ""), c[0] = c[0].slice(v).replace(/\u200b+$/, "");
        var oe = B(a, v), ne = B(u, b.length ? ce(b).length - M : 0);
        if (c.length > 1 || c[0] || se(oe, ne))
          return pr(e.doc, c, oe, ne, "+input"), !0;
      }, pe.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, pe.prototype.reset = function() {
        this.forceCompositionEnd();
      }, pe.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, pe.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, pe.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && tt(this.cm, function() {
          return Ze(e.cm);
        });
      }, pe.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, pe.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || De(this.cm, qi)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, pe.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, pe.prototype.onContextMenu = function() {
      }, pe.prototype.resetPosition = function() {
      }, pe.prototype.needsContentAttribute = !0;
      function rs(e, t) {
        var n = ui(e, t.line);
        if (!n || n.hidden)
          return null;
        var r = re(e.doc, t.line), i = Oo(n, r, t.line), o = xt(r, e.doc.direction), a = "left";
        if (o) {
          var s = Sr(o, t.ch);
          a = s % 2 ? "right" : "left";
        }
        var l = Eo(i.map, t.ch, a);
        return l.offset = l.collapse == "right" ? l.end : l.start, l;
      }
      function Pu(e) {
        for (var t = e; t; t = t.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(t.className))
            return !0;
        return !1;
      }
      function br(e, t) {
        return t && (e.bad = !0), e;
      }
      function Iu(e, t, n, r, i) {
        var o = "", a = !1, s = e.doc.lineSeparator(), l = !1;
        function u(v) {
          return function(M) {
            return M.id == v;
          };
        }
        function f() {
          a && (o += s, l && (o += s), a = l = !1);
        }
        function c(v) {
          v && (f(), o += v);
        }
        function b(v) {
          if (v.nodeType == 1) {
            var M = v.getAttribute("cm-text");
            if (M) {
              c(M);
              return;
            }
            var P = v.getAttribute("cm-marker"), U;
            if (P) {
              var Y = e.findMarks(B(r, 0), B(i + 1, 0), u(+P));
              Y.length && (U = Y[0].find(0)) && c(It(e.doc, U.from, U.to).join(s));
              return;
            }
            if (v.getAttribute("contenteditable") == "false")
              return;
            var V = /^(pre|div|p|li|table|br)$/i.test(v.nodeName);
            if (!/^br$/i.test(v.nodeName) && v.textContent.length == 0)
              return;
            V && f();
            for (var j = 0; j < v.childNodes.length; j++)
              b(v.childNodes[j]);
            /^(pre|p)$/i.test(v.nodeName) && (l = !0), V && (a = !0);
          } else v.nodeType == 3 && c(v.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; b(t), t != n; )
          t = t.nextSibling, l = !1;
        return o;
      }
      function En(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[n], !r)
            return br(e.clipPos(B(e.display.viewTo - 1)), !0);
          t = null, n = 0;
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var o = e.display.view[i];
          if (o.node == r)
            return Ru(o, t, n);
        }
      }
      function Ru(e, t, n) {
        var r = e.text.firstChild, i = !1;
        if (!t || !Z(r, t))
          return br(B(de(e.line), 0), !0);
        if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
          var o = e.rest ? ce(e.rest) : e.line;
          return br(B(de(o), o.text.length), i);
        }
        var a = t.nodeType == 3 ? t : null, s = t;
        for (!a && t.childNodes.length == 1 && t.firstChild.nodeType == 3 && (a = t.firstChild, n && (n = a.nodeValue.length)); s.parentNode != r; )
          s = s.parentNode;
        var l = e.measure, u = l.maps;
        function f(U, Y, V) {
          for (var j = -1; j < (u ? u.length : 0); j++)
            for (var ee = j < 0 ? l.map : u[j], oe = 0; oe < ee.length; oe += 3) {
              var ne = ee[oe + 2];
              if (ne == U || ne == Y) {
                var fe = de(j < 0 ? e.line : e.rest[j]), ge = ee[oe] + V;
                return (V < 0 || ne != U) && (ge = ee[oe + (V ? 1 : 0)]), B(fe, ge);
              }
            }
        }
        var c = f(a, s, n);
        if (c)
          return br(c, i);
        for (var b = s.nextSibling, v = a ? a.nodeValue.length - n : 0; b; b = b.nextSibling) {
          if (c = f(b, b.firstChild, 0), c)
            return br(B(c.line, c.ch - v), i);
          v += b.textContent.length;
        }
        for (var M = s.previousSibling, P = n; M; M = M.previousSibling) {
          if (c = f(M, M.firstChild, -1), c)
            return br(B(c.line, c.ch + P), i);
          P += M.textContent.length;
        }
      }
      var ke = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new dt(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      ke.prototype.init = function(e) {
        var t = this, n = this, r = this.cm;
        this.createField(e);
        var i = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), ae(i, "input", function() {
          p && F >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }), ae(i, "paste", function(a) {
          Ae(r, a) || Ja(a, r) || (r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.fastPoll());
        });
        function o(a) {
          if (!Ae(r, a)) {
            if (r.somethingSelected())
              Hn({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var s = $a(r);
              Hn({ lineWise: !0, text: s.text }), a.type == "cut" ? r.setSelections(s.ranges, null, Ye) : (n.prevInput = "", i.value = s.text.join(`
`), ye(i));
            } else
              return;
            a.type == "cut" && (r.state.cutIncoming = +/* @__PURE__ */ new Date());
          }
        }
        ae(i, "cut", o), ae(i, "copy", o), ae(e.scroller, "paste", function(a) {
          if (!(kt(e, a) || Ae(r, a))) {
            if (!i.dispatchEvent) {
              r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.focus();
              return;
            }
            var s = new Event("paste");
            s.clipboardData = a.clipboardData, i.dispatchEvent(s);
          }
        }), ae(e.lineSpace, "selectstart", function(a) {
          kt(e, a) || je(a);
        }), ae(i, "compositionstart", function() {
          var a = r.getCursor("from");
          n.composing && n.composing.range.clear(), n.composing = {
            start: a,
            range: r.markText(a, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), ae(i, "compositionend", function() {
          n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
        });
      }, ke.prototype.createField = function(e) {
        this.wrapper = es(), this.textarea = this.wrapper.firstChild;
        var t = this.cm.options;
        Bi(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
      }, ke.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ke.prototype.prepareSelection = function() {
        var e = this.cm, t = e.display, n = e.doc, r = Ko(e);
        if (e.options.moveInputWithCursor) {
          var i = ut(e, n.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(), a = t.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            t.wrapper.clientHeight - 10,
            i.top + a.top - o.top
          )), r.teLeft = Math.max(0, Math.min(
            t.wrapper.clientWidth - 10,
            i.left + a.left - o.left
          ));
        }
        return r;
      }, ke.prototype.showSelection = function(e) {
        var t = this.cm, n = t.display;
        E(n.cursorDiv, e.cursors), E(n.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ke.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var t = this.cm;
          if (this.resetting = !0, t.somethingSelected()) {
            this.prevInput = "";
            var n = t.getSelection();
            this.textarea.value = n, t.state.focused && ye(this.textarea), p && F >= 9 && (this.hasSelection = n);
          } else e || (this.prevInput = this.textarea.value = "", p && F >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, ke.prototype.getField = function() {
        return this.textarea;
      }, ke.prototype.supportsTouch = function() {
        return !1;
      }, ke.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!k || te(Ge(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, ke.prototype.blur = function() {
        this.textarea.blur();
      }, ke.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ke.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ke.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ke.prototype.fastPoll = function() {
        var e = !1, t = this;
        t.pollingFast = !0;
        function n() {
          var r = t.poll();
          !r && !e ? (e = !0, t.polling.set(60, n)) : (t.pollingFast = !1, t.slowPoll());
        }
        t.polling.set(20, n);
      }, ke.prototype.poll = function() {
        var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !t.state.focused || Is(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
          return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected())
          return !1;
        if (p && F >= 9 && this.hasSelection === i || S && /[\uf700-\uf7ff]/.test(i))
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var o = i.charCodeAt(0);
          if (o == 8203 && !r && (r = "​"), o == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var a = 0, s = Math.min(r.length, i.length); a < s && r.charCodeAt(a) == i.charCodeAt(a); )
          ++a;
        return tt(t, function() {
          qi(
            t,
            i.slice(a),
            r.length - a,
            null,
            e.composing ? "*compose" : null
          ), i.length > 1e3 || i.indexOf(`
`) > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(
            e.composing.start,
            t.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ke.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ke.prototype.onKeyPress = function() {
        p && F >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ke.prototype.onContextMenu = function(e) {
        var t = this, n = t.cm, r = n.display, i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var o = Ut(n, e), a = r.scroller.scrollTop;
        if (!o || D)
          return;
        var s = n.options.resetSelectionOnContextMenu;
        s && n.doc.sel.contains(o) == -1 && De(n, Be)(n.doc, Dt(o), Ye);
        var l = i.style.cssText, u = t.wrapper.style.cssText, f = t.wrapper.offsetParent.getBoundingClientRect();
        t.wrapper.style.cssText = "position: static", i.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - f.top - 5) + "px; left: " + (e.clientX - f.left - 5) + `px;
      z-index: 1000; background: ` + (p ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var c;
        q && (c = i.ownerDocument.defaultView.scrollY), r.input.focus(), q && i.ownerDocument.defaultView.scrollTo(null, c), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll);
        function b() {
          if (i.selectionStart != null) {
            var P = n.somethingSelected(), U = "​" + (P ? i.value : "");
            i.value = "⇚", i.value = U, t.prevInput = P ? "" : "​", i.selectionStart = 1, i.selectionEnd = U.length, r.selForContextMenu = n.doc.sel;
          }
        }
        function v() {
          if (t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = u, i.style.cssText = l, p && F < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = a), i.selectionStart != null)) {
            (!p || p && F < 9) && b();
            var P = 0, U = function() {
              r.selForContextMenu == n.doc.sel && i.selectionStart == 0 && i.selectionEnd > 0 && t.prevInput == "​" ? De(n, wa)(n) : P++ < 10 ? r.detectingSelectAll = setTimeout(U, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(U, 200);
          }
        }
        if (p && F >= 9 && b(), L) {
          Cr(e);
          var M = function() {
            nt(window, "mouseup", M), setTimeout(v, 20);
          };
          ae(window, "mouseup", M);
        } else
          setTimeout(v, 50);
      }, ke.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ke.prototype.setUneditable = function() {
      }, ke.prototype.needsContentAttribute = !1;
      function qu(e, t) {
        if (t = t ? ht(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), t.autofocus == null) {
          var n = te(Ge(e));
          t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body;
        }
        function r() {
          e.value = s.getValue();
        }
        var i;
        if (e.form && (ae(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
          var o = e.form;
          i = o.submit;
          try {
            var a = o.submit = function() {
              r(), o.submit = i, o.submit(), o.submit = a;
            };
          } catch {
          }
        }
        t.finishInit = function(l) {
          l.save = r, l.getTextArea = function() {
            return e;
          }, l.toTextArea = function() {
            l.toTextArea = isNaN, r(), e.parentNode.removeChild(l.getWrapperElement()), e.style.display = "", e.form && (nt(e.form, "submit", r), !t.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = i));
          };
        }, e.style.display = "none";
        var s = me(
          function(l) {
            return e.parentNode.insertBefore(l, e.nextSibling);
          },
          t
        );
        return s;
      }
      function Bu(e) {
        e.off = nt, e.on = ae, e.wheelEventPixels = jl, e.Doc = Je, e.splitLines = Gn, e.countColumn = Pe, e.findColumn = Ke, e.isWordChar = Fn, e.Pass = bt, e.signal = Ce, e.Line = nr, e.changeEnd = Ht, e.scrollbarModel = Jo, e.Pos = B, e.cmpPos = se, e.modes = Xn, e.mimeModes = tr, e.resolveMode = rn, e.getMode = Qn, e.modeExtensions = rr, e.extendMode = Gs, e.copyState = Pt, e.startState = ro, e.innerMode = Yn, e.commands = jr, e.keyMap = Ct, e.keyName = Fa, e.isModifierKey = Wa, e.lookupKey = vr, e.normalizeKeyMap = mu, e.StringStream = Le, e.SharedTextMarker = Xr, e.TextMarker = Wt, e.LineWidget = Kr, e.e_preventDefault = je, e.e_stopPropagation = eo, e.e_stop = Cr, e.addClass = ue, e.contains = Z, e.rmClass = y, e.keyNames = zt;
      }
      Hu(me), Fu(me);
      var Uu = "iter insert remove copy getEditor constructor".split(" ");
      for (var Wn in Je.prototype)
        Je.prototype.hasOwnProperty(Wn) && Se(Uu, Wn) < 0 && (me.prototype[Wn] = /* @__PURE__ */ function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(Je.prototype[Wn]));
      return er(Je), me.inputStyles = { textarea: ke, contenteditable: pe }, me.defineMode = function(e) {
        !me.defaults.mode && e != "null" && (me.defaults.mode = e), Bs.apply(this, arguments);
      }, me.defineMIME = Us, me.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), me.defineMIME("text/plain", "null"), me.defineExtension = function(e, t) {
        me.prototype[e] = t;
      }, me.defineDocExtension = function(e, t) {
        Je.prototype[e] = t;
      }, me.fromTextArea = qu, Bu(me), me.version = "5.65.19", me;
    });
  }(zn)), zn.exports;
}
var Qu = ot();
const Re = /* @__PURE__ */ Gu(Qu);
var is = { exports: {} }, os;
function Ns() {
  return os || (os = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      g.defineMode("sql", function(q, K) {
        var N = K.client || {}, X = K.atoms || { false: !0, true: !0, null: !0 }, D = K.builtin || p(F), Q = K.keywords || p(O), ie = K.operatorChars || /^[*+\-%<>!=&|~^\/]/, w = K.support || {}, m = K.hooks || {}, x = K.dateSQL || { date: !0, time: !0, timestamp: !0 }, k = K.backslashStringEscapes !== !1, S = K.brackets || /^[\{}\(\)\[\]]/, R = K.punctuation || /^[;.,:]/;
        function z(y, I) {
          var E = y.next();
          if (m[E]) {
            var d = m[E](y, I);
            if (d !== !1) return d;
          }
          if (w.hexNumber && (E == "0" && y.match(/^[xX][0-9a-fA-F]+/) || (E == "x" || E == "X") && y.match(/^'[0-9a-fA-F]*'/)))
            return "number";
          if (w.binaryNumber && ((E == "b" || E == "B") && y.match(/^'[01]*'/) || E == "0" && y.match(/^b[01]+/)))
            return "number";
          if (E.charCodeAt(0) > 47 && E.charCodeAt(0) < 58)
            return y.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/), w.decimallessFloat && y.match(/^\.(?!\.)/), "number";
          if (E == "?" && (y.eatSpace() || y.eol() || y.eat(";")))
            return "variable-3";
          if (E == "'" || E == '"' && w.doubleQuote)
            return I.tokenize = h(E), I.tokenize(y, I);
          if ((w.nCharCast && (E == "n" || E == "N") || w.charsetCast && E == "_" && y.match(/[a-z][a-z0-9]*/i)) && (y.peek() == "'" || y.peek() == '"'))
            return "keyword";
          if (w.escapeConstant && (E == "e" || E == "E") && (y.peek() == "'" || y.peek() == '"' && w.doubleQuote))
            return I.tokenize = function(H, Z) {
              return (Z.tokenize = h(H.next(), !0))(H, Z);
            }, "keyword";
          if (w.commentSlashSlash && E == "/" && y.eat("/"))
            return y.skipToEnd(), "comment";
          if (w.commentHash && E == "#" || E == "-" && y.eat("-") && (!w.commentSpaceRequired || y.eat(" ")))
            return y.skipToEnd(), "comment";
          if (E == "/" && y.eat("*"))
            return I.tokenize = A(1), I.tokenize(y, I);
          if (E == ".") {
            if (w.zerolessFloat && y.match(/^(?:\d+(?:e[+-]?\d+)?)/i))
              return "number";
            if (y.match(/^\.+/))
              return null;
            if (y.match(/^[\w\d_$#]+/))
              return "variable-2";
          } else {
            if (ie.test(E))
              return y.eatWhile(ie), "operator";
            if (S.test(E))
              return "bracket";
            if (R.test(E))
              return y.eatWhile(R), "punctuation";
            if (E == "{" && (y.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || y.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/)))
              return "number";
            y.eatWhile(/^[_\w\d]/);
            var T = y.current().toLowerCase();
            return x.hasOwnProperty(T) && (y.match(/^( )+'[^']*'/) || y.match(/^( )+"[^"]*"/)) ? "number" : X.hasOwnProperty(T) ? "atom" : D.hasOwnProperty(T) ? "type" : Q.hasOwnProperty(T) ? "keyword" : N.hasOwnProperty(T) ? "builtin" : null;
          }
        }
        function h(y, I) {
          return function(E, d) {
            for (var T = !1, H; (H = E.next()) != null; ) {
              if (H == y && !T) {
                d.tokenize = z;
                break;
              }
              T = (k || I) && !T && H == "\\";
            }
            return "string";
          };
        }
        function A(y) {
          return function(I, E) {
            var d = I.match(/^.*?(\/\*|\*\/)/);
            return d ? d[1] == "/*" ? E.tokenize = A(y + 1) : y > 1 ? E.tokenize = A(y - 1) : E.tokenize = z : I.skipToEnd(), "comment";
          };
        }
        function L(y, I, E) {
          I.context = {
            prev: I.context,
            indent: y.indentation(),
            col: y.column(),
            type: E
          };
        }
        function C(y) {
          y.indent = y.context.indent, y.context = y.context.prev;
        }
        return {
          startState: function() {
            return { tokenize: z, context: null };
          },
          token: function(y, I) {
            if (y.sol() && I.context && I.context.align == null && (I.context.align = !1), I.tokenize == z && y.eatSpace()) return null;
            var E = I.tokenize(y, I);
            if (E == "comment") return E;
            I.context && I.context.align == null && (I.context.align = !0);
            var d = y.current();
            return d == "(" ? L(y, I, ")") : d == "[" ? L(y, I, "]") : I.context && I.context.type == d && C(I), E;
          },
          indent: function(y, I) {
            var E = y.context;
            if (!E) return g.Pass;
            var d = I.charAt(0) == E.type;
            return E.align ? E.col + (d ? 0 : 1) : E.indent + (d ? 0 : q.indentUnit);
          },
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: w.commentSlashSlash ? "//" : w.commentHash ? "#" : "--",
          closeBrackets: "()[]{}''\"\"``",
          config: K
        };
      });
      function W(q) {
        for (var K; (K = q.next()) != null; )
          if (K == "`" && !q.eat("`")) return "variable-2";
        return q.backUp(q.current().length - 1), q.eatWhile(/\w/) ? "variable-2" : null;
      }
      function G(q) {
        for (var K; (K = q.next()) != null; )
          if (K == '"' && !q.eat('"')) return "variable-2";
        return q.backUp(q.current().length - 1), q.eatWhile(/\w/) ? "variable-2" : null;
      }
      function J(q) {
        return q.eat("@") && (q.match("session."), q.match("local."), q.match("global.")), q.eat("'") ? (q.match(/^.*'/), "variable-2") : q.eat('"') ? (q.match(/^.*"/), "variable-2") : q.eat("`") ? (q.match(/^.*`/), "variable-2") : q.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null;
      }
      function _(q) {
        return q.eat("N") ? "atom" : q.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null;
      }
      var O = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
      function p(q) {
        for (var K = {}, N = q.split(" "), X = 0; X < N.length; ++X) K[N[X]] = !0;
        return K;
      }
      var F = "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
      g.defineMIME("text/x-sql", {
        name: "sql",
        keywords: p(O + "begin"),
        builtin: p(F),
        atoms: p("false true null unknown"),
        dateSQL: p("date time timestamp"),
        support: p("doubleQuote binaryNumber hexNumber")
      }), g.defineMIME("text/x-mssql", {
        name: "sql",
        client: p("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),
        keywords: p(O + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),
        builtin: p("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
        atoms: p("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),
        operatorChars: /^[*+\-%<>!=^\&|\/]/,
        brackets: /^[\{}\(\)]/,
        punctuation: /^[;.,:/]/,
        backslashStringEscapes: !1,
        dateSQL: p("date datetimeoffset datetime2 smalldatetime datetime time"),
        hooks: {
          "@": J
        }
      }), g.defineMIME("text/x-mysql", {
        name: "sql",
        client: p("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
        keywords: p(O + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
        builtin: p("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
        atoms: p("false true null unknown"),
        operatorChars: /^[*+\-%<>!=&|^]/,
        dateSQL: p("date time timestamp"),
        support: p("decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
        hooks: {
          "@": J,
          "`": W,
          "\\": _
        }
      }), g.defineMIME("text/x-mariadb", {
        name: "sql",
        client: p("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
        keywords: p(O + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group group_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
        builtin: p("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
        atoms: p("false true null unknown"),
        operatorChars: /^[*+\-%<>!=&|^]/,
        dateSQL: p("date time timestamp"),
        support: p("decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
        hooks: {
          "@": J,
          "`": W,
          "\\": _
        }
      }), g.defineMIME("text/x-sqlite", {
        name: "sql",
        // commands of the official SQLite client, ref: https://www.sqlite.org/cli.html#dotcmd
        client: p("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
        // ref: http://sqlite.org/lang_keywords.html
        keywords: p(O + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
        // SQLite is weakly typed, ref: http://sqlite.org/datatype3.html. This is just a list of some common types.
        builtin: p("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
        // ref: http://sqlite.org/syntax/literal-value.html
        atoms: p("null current_date current_time current_timestamp"),
        // ref: http://sqlite.org/lang_expr.html#binaryops
        operatorChars: /^[*+\-%<>!=&|/~]/,
        // SQLite is weakly typed, ref: http://sqlite.org/datatype3.html. This is just a list of some common types.
        dateSQL: p("date time timestamp datetime"),
        support: p("decimallessFloat zerolessFloat"),
        identifierQuote: '"',
        //ref: http://sqlite.org/lang_keywords.html
        hooks: {
          // bind-parameters ref:http://sqlite.org/lang_expr.html#varparam
          "@": J,
          ":": J,
          "?": J,
          $: J,
          // The preferred way to escape Identifiers is using double quotes, ref: http://sqlite.org/lang_keywords.html
          '"': G,
          // there is also support for backticks, ref: http://sqlite.org/lang_keywords.html
          "`": W
        }
      }), g.defineMIME("text/x-cassandra", {
        name: "sql",
        client: {},
        keywords: p("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
        builtin: p("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
        atoms: p("false true infinity NaN"),
        operatorChars: /^[<>=]/,
        dateSQL: {},
        support: p("commentSlashSlash decimallessFloat"),
        hooks: {}
      }), g.defineMIME("text/x-plsql", {
        name: "sql",
        client: p("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
        keywords: p("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
        builtin: p("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
        operatorChars: /^[*\/+\-%<>!=~]/,
        dateSQL: p("date time timestamp"),
        support: p("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
      }), g.defineMIME("text/x-hive", {
        name: "sql",
        keywords: p("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),
        builtin: p("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),
        atoms: p("false true null unknown"),
        operatorChars: /^[*+\-%<>!=]/,
        dateSQL: p("date timestamp"),
        support: p("doubleQuote binaryNumber hexNumber")
      }), g.defineMIME("text/x-pgsql", {
        name: "sql",
        client: p("source"),
        // For PostgreSQL - https://www.postgresql.org/docs/11/sql-keywords-appendix.html
        // For pl/pgsql lang - https://github.com/postgres/postgres/blob/REL_11_2/src/pl/plpgsql/src/pl_scanner.c
        keywords: p(O + "a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),
        // https://www.postgresql.org/docs/11/datatype.html
        builtin: p("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time zone timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
        atoms: p("false true null unknown"),
        operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
        backslashStringEscapes: !1,
        identifierQuote: '"',
        // https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
        hooks: {
          '"': G
        },
        dateSQL: p("date time timestamp"),
        support: p("decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant")
      }), g.defineMIME("text/x-gql", {
        name: "sql",
        keywords: p("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
        atoms: p("false true"),
        builtin: p("blob datetime first key __key__ string integer double boolean null"),
        operatorChars: /^[*+\-%<>!=]/
      }), g.defineMIME("text/x-gpsql", {
        name: "sql",
        client: p("source"),
        //https://github.com/greenplum-db/gpdb/blob/master/src/include/parser/kwlist.h
        keywords: p("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),
        builtin: p("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
        atoms: p("false true null unknown"),
        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
        dateSQL: p("date time timestamp"),
        support: p("decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
      }), g.defineMIME("text/x-sparksql", {
        name: "sql",
        keywords: p("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),
        builtin: p("abs acos acosh add_months aggregate and any approx_count_distinct approx_percentile array array_contains array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_repeat array_sort array_union arrays_overlap arrays_zip ascii asin asinh assert_true atan atan2 atanh avg base64 between bigint bin binary bit_and bit_count bit_get bit_length bit_or bit_xor bool_and bool_or boolean bround btrim cardinality case cast cbrt ceil ceiling char char_length character_length chr coalesce collect_list collect_set concat concat_ws conv corr cos cosh cot count count_if count_min_sketch covar_pop covar_samp crc32 cume_dist current_catalog current_database current_date current_timestamp current_timezone current_user date date_add date_format date_from_unix_date date_part date_sub date_trunc datediff day dayofmonth dayofweek dayofyear decimal decode degrees delimited dense_rank div double e element_at elt encode every exists exp explode explode_outer expm1 extract factorial filter find_in_set first first_value flatten float floor forall format_number format_string from_csv from_json from_unixtime from_utc_timestamp get_json_object getbit greatest grouping grouping_id hash hex hour hypot if ifnull in initcap inline inline_outer input_file_block_length input_file_block_start input_file_name inputformat instr int isnan isnotnull isnull java_method json_array_length json_object_keys json_tuple kurtosis lag last last_day last_value lcase lead least left length levenshtein like ln locate log log10 log1p log2 lower lpad ltrim make_date make_dt_interval make_interval make_timestamp make_ym_interval map map_concat map_entries map_filter map_from_arrays map_from_entries map_keys map_values map_zip_with max max_by md5 mean min min_by minute mod monotonically_increasing_id month months_between named_struct nanvl negative next_day not now nth_value ntile nullif nvl nvl2 octet_length or outputformat overlay parse_url percent_rank percentile percentile_approx pi pmod posexplode posexplode_outer position positive pow power printf quarter radians raise_error rand randn random rank rcfile reflect regexp regexp_extract regexp_extract_all regexp_like regexp_replace repeat replace reverse right rint rlike round row_number rpad rtrim schema_of_csv schema_of_json second sentences sequence sequencefile serde session_window sha sha1 sha2 shiftleft shiftright shiftrightunsigned shuffle sign signum sin sinh size skewness slice smallint some sort_array soundex space spark_partition_id split sqrt stack std stddev stddev_pop stddev_samp str_to_map string struct substr substring substring_index sum tan tanh textfile timestamp timestamp_micros timestamp_millis timestamp_seconds tinyint to_csv to_date to_json to_timestamp to_unix_timestamp to_utc_timestamp transform transform_keys transform_values translate trim trunc try_add try_divide typeof ucase unbase64 unhex uniontype unix_date unix_micros unix_millis unix_seconds unix_timestamp upper uuid var_pop var_samp variance version weekday weekofyear when width_bucket window xpath xpath_boolean xpath_double xpath_float xpath_int xpath_long xpath_number xpath_short xpath_string xxhash64 year zip_with"),
        atoms: p("false true null"),
        operatorChars: /^[*\/+\-%<>!=~&|^]/,
        dateSQL: p("date time timestamp"),
        support: p("doubleQuote zerolessFloat")
      }), g.defineMIME("text/x-esper", {
        name: "sql",
        client: p("source"),
        // http://www.espertech.com/esper/release-5.5.0/esper-reference/html/appendix_keywords.html
        keywords: p("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
        builtin: {},
        atoms: p("false true null"),
        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
        dateSQL: p("time"),
        support: p("decimallessFloat zerolessFloat binaryNumber hexNumber")
      }), g.defineMIME("text/x-trino", {
        name: "sql",
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L859-L1129
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/docs/src/main/sphinx/functions/list.rst
        keywords: p("abs absent acos add admin after all all_match alter analyze and any any_match approx_distinct approx_most_frequent approx_percentile approx_set arbitrary array_agg array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_sort array_union arrays_overlap as asc asin at at_timezone atan atan2 authorization avg bar bernoulli beta_cdf between bing_tile bing_tile_at bing_tile_coordinates bing_tile_polygon bing_tile_quadkey bing_tile_zoom_level bing_tiles_around bit_count bitwise_and bitwise_and_agg bitwise_left_shift bitwise_not bitwise_or bitwise_or_agg bitwise_right_shift bitwise_right_shift_arithmetic bitwise_xor bool_and bool_or both by call cardinality cascade case cast catalogs cbrt ceil ceiling char2hexint checksum chr classify coalesce codepoint column columns combinations comment commit committed concat concat_ws conditional constraint contains contains_sequence convex_hull_agg copartition corr cos cosh cosine_similarity count count_if covar_pop covar_samp crc32 create cross cube cume_dist current current_catalog current_date current_groups current_path current_role current_schema current_time current_timestamp current_timezone current_user data date_add date_diff date_format date_parse date_trunc day day_of_month day_of_week day_of_year deallocate default define definer degrees delete dense_rank deny desc describe descriptor distinct distributed dow doy drop e element_at else empty empty_approx_set encoding end error escape evaluate_classifier_predictions every except excluding execute exists exp explain extract false features fetch filter final first first_value flatten floor following for format format_datetime format_number from from_base from_base32 from_base64 from_base64url from_big_endian_32 from_big_endian_64 from_encoded_polyline from_geojson_geometry from_hex from_ieee754_32 from_ieee754_64 from_iso8601_date from_iso8601_timestamp from_iso8601_timestamp_nanos from_unixtime from_unixtime_nanos from_utf8 full functions geometric_mean geometry_from_hadoop_shape geometry_invalid_reason geometry_nearest_points geometry_to_bing_tiles geometry_union geometry_union_agg grant granted grants graphviz great_circle_distance greatest group grouping groups hamming_distance hash_counts having histogram hmac_md5 hmac_sha1 hmac_sha256 hmac_sha512 hour human_readable_seconds if ignore in including index infinity initial inner input insert intersect intersection_cardinality into inverse_beta_cdf inverse_normal_cdf invoker io is is_finite is_infinite is_json_scalar is_nan isolation jaccard_index join json_array json_array_contains json_array_get json_array_length json_exists json_extract json_extract_scalar json_format json_object json_parse json_query json_size json_value keep key keys kurtosis lag last last_day_of_month last_value lateral lead leading learn_classifier learn_libsvm_classifier learn_libsvm_regressor learn_regressor least left length level levenshtein_distance like limit line_interpolate_point line_interpolate_points line_locate_point listagg ln local localtime localtimestamp log log10 log2 logical lower lpad ltrim luhn_check make_set_digest map_agg map_concat map_entries map_filter map_from_entries map_keys map_union map_values map_zip_with match match_recognize matched matches materialized max max_by md5 measures merge merge_set_digest millisecond min min_by minute mod month multimap_agg multimap_from_entries murmur3 nan natural next nfc nfd nfkc nfkd ngrams no none none_match normal_cdf normalize not now nth_value ntile null nullif nulls numeric_histogram object objectid_timestamp of offset omit on one only option or order ordinality outer output over overflow parse_data_size parse_datetime parse_duration partition partitions passing past path pattern per percent_rank permute pi position pow power preceding prepare privileges properties prune qdigest_agg quarter quotes radians rand random range rank read recursive reduce reduce_agg refresh regexp_count regexp_extract regexp_extract_all regexp_like regexp_position regexp_replace regexp_split regr_intercept regr_slope regress rename render repeat repeatable replace reset respect restrict returning reverse revoke rgb right role roles rollback rollup round row_number rows rpad rtrim running scalar schema schemas second security seek select sequence serializable session set sets sha1 sha256 sha512 show shuffle sign simplify_geometry sin skewness skip slice some soundex spatial_partitioning spatial_partitions split split_part split_to_map split_to_multimap spooky_hash_v2_32 spooky_hash_v2_64 sqrt st_area st_asbinary st_astext st_boundary st_buffer st_centroid st_contains st_convexhull st_coorddim st_crosses st_difference st_dimension st_disjoint st_distance st_endpoint st_envelope st_envelopeaspts st_equals st_exteriorring st_geometries st_geometryfromtext st_geometryn st_geometrytype st_geomfrombinary st_interiorringn st_interiorrings st_intersection st_intersects st_isclosed st_isempty st_isring st_issimple st_isvalid st_length st_linefromtext st_linestring st_multipoint st_numgeometries st_numinteriorring st_numpoints st_overlaps st_point st_pointn st_points st_polygon st_relate st_startpoint st_symdifference st_touches st_union st_within st_x st_xmax st_xmin st_y st_ymax st_ymin start starts_with stats stddev stddev_pop stddev_samp string strpos subset substr substring sum system table tables tablesample tan tanh tdigest_agg text then ties timestamp_objectid timezone_hour timezone_minute to to_base to_base32 to_base64 to_base64url to_big_endian_32 to_big_endian_64 to_char to_date to_encoded_polyline to_geojson_geometry to_geometry to_hex to_ieee754_32 to_ieee754_64 to_iso8601 to_milliseconds to_spherical_geography to_timestamp to_unixtime to_utf8 trailing transaction transform transform_keys transform_values translate trim trim_array true truncate try try_cast type typeof uescape unbounded uncommitted unconditional union unique unknown unmatched unnest update upper url_decode url_encode url_extract_fragment url_extract_host url_extract_parameter url_extract_path url_extract_port url_extract_protocol url_extract_query use user using utf16 utf32 utf8 validate value value_at_quantile values values_at_quantiles var_pop var_samp variance verbose version view week week_of_year when where width_bucket wilson_interval_lower wilson_interval_upper window with with_timezone within without word_stem work wrapper write xxhash64 year year_of_week yow zip zip_with"),
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/core/trino-main/src/main/java/io/trino/metadata/TypeRegistry.java#L131-L168
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/plugin/trino-ml/src/main/java/io/trino/plugin/ml/MLPlugin.java#L35
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/plugin/trino-mongodb/src/main/java/io/trino/plugin/mongodb/MongoPlugin.java#L32
        // https://github.com/trinodb/trino/blob/bc7a4eeedde28684c7ae6f74cefcaf7c6e782174/plugin/trino-geospatial/src/main/java/io/trino/plugin/geospatial/GeoPlugin.java#L37
        builtin: p("array bigint bingtile boolean char codepoints color date decimal double function geometry hyperloglog int integer interval ipaddress joniregexp json json2016 jsonpath kdbtree likepattern map model objectid p4hyperloglog precision qdigest re2jregexp real regressor row setdigest smallint sphericalgeography tdigest time timestamp tinyint uuid varbinary varchar zone"),
        atoms: p("false true null unknown"),
        // https://trino.io/docs/current/functions/list.html#id1
        operatorChars: /^[[\]|<>=!\-+*/%]/,
        dateSQL: p("date time timestamp zone"),
        // hexNumber is necessary for VARBINARY literals, e.g. X'65683F'
        // but it also enables 0xFF hex numbers, which Trino doesn't support.
        support: p("decimallessFloat zerolessFloat hexNumber")
      });
    });
  }()), is.exports;
}
Ns();
var as = { exports: {} }, ss;
function Yu() {
  return ss || (ss = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      var W = "CodeMirror-hint", G = "CodeMirror-hint-active";
      g.showHint = function(w, m, x) {
        if (!m) return w.showHint(x);
        x && x.async && (m.async = !0);
        var k = { hint: m };
        if (x) for (var S in x) k[S] = x[S];
        return w.showHint(k);
      }, g.defineExtension("showHint", function(w) {
        w = p(this, this.getCursor("start"), w);
        var m = this.listSelections();
        if (!(m.length > 1)) {
          if (this.somethingSelected()) {
            if (!w.hint.supportsSelection) return;
            for (var x = 0; x < m.length; x++)
              if (m[x].head.line != m[x].anchor.line) return;
          }
          this.state.completionActive && this.state.completionActive.close();
          var k = this.state.completionActive = new J(this, w);
          k.options.hint && (g.signal(this, "startCompletion", this), k.update(!0));
        }
      }), g.defineExtension("closeHint", function() {
        this.state.completionActive && this.state.completionActive.close();
      });
      function J(w, m) {
        if (this.cm = w, this.options = m, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
          var x = this;
          w.on("cursorActivity", this.activityFunc = function() {
            x.cursorActivity();
          });
        }
      }
      var _ = window.requestAnimationFrame || function(w) {
        return setTimeout(w, 1e3 / 60);
      }, O = window.cancelAnimationFrame || clearTimeout;
      J.prototype = {
        close: function() {
          this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && g.signal(this.data, "close"), this.widget && this.widget.close(), g.signal(this.cm, "endCompletion", this.cm));
        },
        active: function() {
          return this.cm.state.completionActive == this;
        },
        pick: function(w, m) {
          var x = w.list[m], k = this;
          this.cm.operation(function() {
            x.hint ? x.hint(k.cm, w, x) : k.cm.replaceRange(
              F(x),
              x.from || w.from,
              x.to || w.to,
              "complete"
            ), g.signal(w, "pick", x), k.cm.scrollIntoView();
          }), this.options.closeOnPick && this.close();
        },
        cursorActivity: function() {
          this.debounce && (O(this.debounce), this.debounce = 0);
          var w = this.startPos;
          this.data && (w = this.data.from);
          var m = this.cm.getCursor(), x = this.cm.getLine(m.line);
          if (m.line != this.startPos.line || x.length - m.ch != this.startLen - this.startPos.ch || m.ch < w.ch || this.cm.somethingSelected() || !m.ch || this.options.closeCharacters.test(x.charAt(m.ch - 1)))
            this.close();
          else {
            var k = this;
            this.debounce = _(function() {
              k.update();
            }), this.widget && this.widget.disable();
          }
        },
        update: function(w) {
          if (this.tick != null) {
            var m = this, x = ++this.tick;
            D(this.options.hint, this.cm, this.options, function(k) {
              m.tick == x && m.finishUpdate(k, w);
            });
          }
        },
        finishUpdate: function(w, m) {
          this.data && g.signal(this.data, "update");
          var x = this.widget && this.widget.picked || m && this.options.completeSingle;
          this.widget && this.widget.close(), this.data = w, w && w.list.length && (x && w.list.length == 1 ? this.pick(w, 0) : (this.widget = new N(this, w), g.signal(w, "shown")));
        }
      };
      function p(w, m, x) {
        var k = w.options.hintOptions, S = {};
        for (var R in ie) S[R] = ie[R];
        if (k) for (var R in k)
          k[R] !== void 0 && (S[R] = k[R]);
        if (x) for (var R in x)
          x[R] !== void 0 && (S[R] = x[R]);
        return S.hint.resolve && (S.hint = S.hint.resolve(w, m)), S;
      }
      function F(w) {
        return typeof w == "string" ? w : w.text;
      }
      function q(w, m) {
        var x = {
          Up: function() {
            m.moveFocus(-1);
          },
          Down: function() {
            m.moveFocus(1);
          },
          PageUp: function() {
            m.moveFocus(-m.menuSize() + 1, !0);
          },
          PageDown: function() {
            m.moveFocus(m.menuSize() - 1, !0);
          },
          Home: function() {
            m.setFocus(0);
          },
          End: function() {
            m.setFocus(m.length - 1);
          },
          Enter: m.pick,
          Tab: m.pick,
          Esc: m.close
        }, k = /Mac/.test(navigator.platform);
        k && (x["Ctrl-P"] = function() {
          m.moveFocus(-1);
        }, x["Ctrl-N"] = function() {
          m.moveFocus(1);
        });
        var S = w.options.customKeys, R = S ? {} : x;
        function z(L, C) {
          var y;
          typeof C != "string" ? y = function(I) {
            return C(I, m);
          } : x.hasOwnProperty(C) ? y = x[C] : y = C, R[L] = y;
        }
        if (S)
          for (var h in S) S.hasOwnProperty(h) && z(h, S[h]);
        var A = w.options.extraKeys;
        if (A)
          for (var h in A) A.hasOwnProperty(h) && z(h, A[h]);
        return R;
      }
      function K(w, m) {
        for (; m && m != w; ) {
          if (m.nodeName.toUpperCase() === "LI" && m.parentNode == w) return m;
          m = m.parentNode;
        }
      }
      function N(w, m) {
        this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = w, this.data = m, this.picked = !1;
        var x = this, k = w.cm, S = k.getInputField().ownerDocument, R = S.defaultView || S.parentWindow, z = this.hints = S.createElement("ul");
        z.setAttribute("role", "listbox"), z.setAttribute("aria-expanded", "true"), z.id = this.id;
        var h = w.cm.options.theme;
        z.className = "CodeMirror-hints " + h, this.selectedHint = m.selectedHint || 0;
        for (var A = m.list, L = 0; L < A.length; ++L) {
          var C = z.appendChild(S.createElement("li")), y = A[L], I = W + (L != this.selectedHint ? "" : " " + G);
          y.className != null && (I = y.className + " " + I), C.className = I, L == this.selectedHint && C.setAttribute("aria-selected", "true"), C.id = this.id + "-" + L, C.setAttribute("role", "option"), y.render ? y.render(C, m, y) : C.appendChild(S.createTextNode(y.displayText || F(y))), C.hintId = L;
        }
        var E = w.options.container || S.body, d = k.cursorCoords(w.options.alignWithWord ? m.from : null), T = d.left, H = d.bottom, Z = !0, te = 0, ue = 0;
        if (E !== S.body) {
          var _e = ["absolute", "relative", "fixed"].indexOf(R.getComputedStyle(E).position) !== -1, ye = _e ? E : E.offsetParent, ze = ye.getBoundingClientRect(), ve = S.body.getBoundingClientRect();
          te = ze.left - ve.left - ye.scrollLeft, ue = ze.top - ve.top - ye.scrollTop;
        }
        z.style.left = T - te + "px", z.style.top = H - ue + "px";
        var Ge = R.innerWidth || Math.max(S.body.offsetWidth, S.documentElement.offsetWidth), st = R.innerHeight || Math.max(S.body.offsetHeight, S.documentElement.offsetHeight);
        E.appendChild(z), k.getInputField().setAttribute("aria-autocomplete", "list"), k.getInputField().setAttribute("aria-owns", this.id), k.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
        var Fe = w.options.moveOnOverlap ? z.getBoundingClientRect() : new DOMRect(), ht = w.options.paddingForScrollbar ? z.scrollHeight > z.clientHeight + 1 : !1, Pe;
        setTimeout(function() {
          Pe = k.getScrollInfo();
        });
        var dt = Fe.bottom - st;
        if (dt > 0) {
          var Se = Fe.bottom - Fe.top, Jt = Fe.top - (d.bottom - d.top) - 2;
          st - Fe.top < Jt ? (Se > Jt && (z.style.height = (Se = Jt) + "px"), z.style.top = (H = d.top - Se) + ue + "px", Z = !1) : z.style.height = st - Fe.top - 2 + "px";
        }
        var bt = Fe.right - Ge;
        if (ht && (bt += k.display.nativeBarWidth), bt > 0 && (Fe.right - Fe.left > Ge && (z.style.width = Ge - 5 + "px", bt -= Fe.right - Fe.left - Ge), z.style.left = (T = Math.max(d.left - bt - te, 0)) + "px"), ht) for (var Ye = z.firstChild; Ye; Ye = Ye.nextSibling)
          Ye.style.paddingRight = k.display.nativeBarWidth + "px";
        if (k.addKeyMap(this.keyMap = q(w, {
          moveFocus: function(Ke, qe) {
            x.changeActive(x.selectedHint + Ke, qe);
          },
          setFocus: function(Ke) {
            x.changeActive(Ke);
          },
          menuSize: function() {
            return x.screenAmount();
          },
          length: A.length,
          close: function() {
            w.close();
          },
          pick: function() {
            x.pick();
          },
          data: m
        })), w.options.closeOnUnfocus) {
          var Vt;
          k.on("blur", this.onBlur = function() {
            Vt = setTimeout(function() {
              w.close();
            }, 100);
          }), k.on("focus", this.onFocus = function() {
            clearTimeout(Vt);
          });
        }
        k.on("scroll", this.onScroll = function() {
          var Ke = k.getScrollInfo(), qe = k.getWrapperElement().getBoundingClientRect();
          Pe || (Pe = k.getScrollInfo());
          var $t = H + Pe.top - Ke.top, ce = $t - (R.pageYOffset || (S.documentElement || S.body).scrollTop);
          if (Z || (ce += z.offsetHeight), ce <= qe.top || ce >= qe.bottom) return w.close();
          z.style.top = $t + "px", z.style.left = T + Pe.left - Ke.left + "px";
        }), g.on(z, "dblclick", function(Ke) {
          var qe = K(z, Ke.target || Ke.srcElement);
          qe && qe.hintId != null && (x.changeActive(qe.hintId), x.pick());
        }), g.on(z, "click", function(Ke) {
          var qe = K(z, Ke.target || Ke.srcElement);
          qe && qe.hintId != null && (x.changeActive(qe.hintId), w.options.completeOnSingleClick && x.pick());
        }), g.on(z, "mousedown", function() {
          setTimeout(function() {
            k.focus();
          }, 20);
        });
        var Mt = this.getSelectedHintRange();
        return (Mt.from !== 0 || Mt.to !== 0) && this.scrollToActive(), g.signal(m, "select", A[this.selectedHint], z.childNodes[this.selectedHint]), !0;
      }
      N.prototype = {
        close: function() {
          if (this.completion.widget == this) {
            this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
            var w = this.completion.cm.getInputField();
            w.removeAttribute("aria-activedescendant"), w.removeAttribute("aria-owns");
            var m = this.completion.cm;
            this.completion.options.closeOnUnfocus && (m.off("blur", this.onBlur), m.off("focus", this.onFocus)), m.off("scroll", this.onScroll);
          }
        },
        disable: function() {
          this.completion.cm.removeKeyMap(this.keyMap);
          var w = this;
          this.keyMap = { Enter: function() {
            w.picked = !0;
          } }, this.completion.cm.addKeyMap(this.keyMap);
        },
        pick: function() {
          this.completion.pick(this.data, this.selectedHint);
        },
        changeActive: function(w, m) {
          if (w >= this.data.list.length ? w = m ? this.data.list.length - 1 : 0 : w < 0 && (w = m ? 0 : this.data.list.length - 1), this.selectedHint != w) {
            var x = this.hints.childNodes[this.selectedHint];
            x && (x.className = x.className.replace(" " + G, ""), x.removeAttribute("aria-selected")), x = this.hints.childNodes[this.selectedHint = w], x.className += " " + G, x.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", x.id), this.scrollToActive(), g.signal(this.data, "select", this.data.list[this.selectedHint], x);
          }
        },
        scrollToActive: function() {
          var w = this.getSelectedHintRange(), m = this.hints.childNodes[w.from], x = this.hints.childNodes[w.to], k = this.hints.firstChild;
          m.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = m.offsetTop - k.offsetTop : x.offsetTop + x.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = x.offsetTop + x.offsetHeight - this.hints.clientHeight + k.offsetTop);
        },
        screenAmount: function() {
          return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
        },
        getSelectedHintRange: function() {
          var w = this.completion.options.scrollMargin || 0;
          return {
            from: Math.max(0, this.selectedHint - w),
            to: Math.min(this.data.list.length - 1, this.selectedHint + w)
          };
        }
      };
      function X(w, m) {
        if (!w.somethingSelected()) return m;
        for (var x = [], k = 0; k < m.length; k++)
          m[k].supportsSelection && x.push(m[k]);
        return x;
      }
      function D(w, m, x, k) {
        if (w.async)
          w(m, k, x);
        else {
          var S = w(m, x);
          S && S.then ? S.then(k) : k(S);
        }
      }
      function Q(w, m) {
        var x = w.getHelpers(m, "hint"), k;
        if (x.length) {
          var S = function(R, z, h) {
            var A = X(R, x);
            function L(C) {
              if (C == A.length) return z(null);
              D(A[C], R, h, function(y) {
                y && y.list.length > 0 ? z(y) : L(C + 1);
              });
            }
            L(0);
          };
          return S.async = !0, S.supportsSelection = !0, S;
        } else return (k = w.getHelper(w.getCursor(), "hintWords")) ? function(R) {
          return g.hint.fromList(R, { words: k });
        } : g.hint.anyword ? function(R, z) {
          return g.hint.anyword(R, z);
        } : function() {
        };
      }
      g.registerHelper("hint", "auto", {
        resolve: Q
      }), g.registerHelper("hint", "fromList", function(w, m) {
        var x = w.getCursor(), k = w.getTokenAt(x), S, R = g.Pos(x.line, k.start), z = x;
        k.start < x.ch && /\w/.test(k.string.charAt(x.ch - k.start - 1)) ? S = k.string.substr(0, x.ch - k.start) : (S = "", R = x);
        for (var h = [], A = 0; A < m.words.length; A++) {
          var L = m.words[A];
          L.slice(0, S.length) == S && h.push(L);
        }
        if (h.length) return { list: h, from: R, to: z };
      }), g.commands.autocomplete = g.showHint;
      var ie = {
        hint: g.hint.auto,
        completeSingle: !0,
        alignWithWord: !0,
        closeCharacters: /[\s()\[\]{};:>,]/,
        closeOnPick: !0,
        closeOnUnfocus: !0,
        updateOnCursorActivity: !0,
        completeOnSingleClick: !0,
        container: null,
        customKeys: null,
        extraKeys: null,
        paddingForScrollbar: !0,
        moveOnOverlap: !0
      };
      g.defineOption("hintOptions", null);
    });
  }()), as.exports;
}
Yu();
var ls = { exports: {} }, us;
function ju() {
  return us || (us = 1, function(xe, $) {
    (function(g) {
      g(ot(), Ns());
    })(function(g) {
      var W, G, J, _, O = {
        QUERY_DIV: ";",
        ALIAS_KEYWORD: "AS"
      }, p = g.Pos, F = g.cmpPos;
      function q(L) {
        return Object.prototype.toString.call(L) == "[object Array]";
      }
      function K(L, C) {
        return L.getModeAt(L.getCursor()).config[C] || g.resolveMode("text/x-sql")[C];
      }
      function N(L) {
        return K(L, "keywords") || [];
      }
      function X(L) {
        return K(L, "identifierQuote") || "`";
      }
      function D(L) {
        return typeof L == "string" ? L : L.text;
      }
      function Q(L, C) {
        return q(C) && (C = { columns: C }), C.text || (C.text = L), C;
      }
      function ie(L) {
        var C = {};
        if (q(L))
          for (var y = L.length - 1; y >= 0; y--) {
            var I = L[y];
            C[D(I).toUpperCase()] = Q(D(I), I);
          }
        else if (L)
          for (var E in L)
            C[E.toUpperCase()] = Q(E, L[E]);
        return C;
      }
      function w(L) {
        return W[L.toUpperCase()];
      }
      function m(L) {
        var C = {};
        for (var y in L) L.hasOwnProperty(y) && (C[y] = L[y]);
        return C;
      }
      function x(L, C) {
        var y = L.length, I = D(C).substr(0, y);
        return L.toUpperCase() === I.toUpperCase();
      }
      function k(L, C, y, I) {
        if (q(y))
          for (var E = 0; E < y.length; E++)
            x(C, y[E]) && L.push(I(y[E]));
        else
          for (var d in y) if (y.hasOwnProperty(d)) {
            var T = y[d];
            !T || T === !0 ? T = d : T = T.displayText ? { text: T.text, displayText: T.displayText } : T.text, x(C, T) && L.push(I(T));
          }
      }
      function S(L) {
        L.charAt(0) == "." && (L = L.substr(1));
        for (var C = L.split(_ + _), y = 0; y < C.length; y++)
          C[y] = C[y].replace(new RegExp(_, "g"), "");
        return C.join(_);
      }
      function R(L) {
        for (var C = D(L).split("."), y = 0; y < C.length; y++)
          C[y] = _ + // duplicate identifierQuotes
          C[y].replace(new RegExp(_, "g"), _ + _) + _;
        var I = C.join(".");
        return typeof L == "string" ? I : (L = m(L), L.text = I, L);
      }
      function z(L, C, y, I) {
        for (var E = !1, d = [], T = C.start, H = !0; H; )
          H = C.string.charAt(0) == ".", E = E || C.string.charAt(0) == _, T = C.start, d.unshift(S(C.string)), C = I.getTokenAt(p(L.line, C.start)), C.string == "." && (H = !0, C = I.getTokenAt(p(L.line, C.start)));
        var Z = d.join(".");
        k(y, Z, W, function(ve) {
          return E ? R(ve) : ve;
        }), k(y, Z, G, function(ve) {
          return E ? R(ve) : ve;
        }), Z = d.pop();
        var te = d.join("."), ue = !1, _e = te;
        if (!w(te)) {
          var ye = te;
          te = A(te, I), te !== ye && (ue = !0);
        }
        var ze = w(te);
        return ze && ze.columns && (ze = ze.columns), ze && k(y, Z, ze, function(ve) {
          var Ge = te;
          return ue == !0 && (Ge = _e), typeof ve == "string" ? ve = Ge + "." + ve : (ve = m(ve), ve.text = Ge + "." + ve.text), E ? R(ve) : ve;
        }), T;
      }
      function h(L, C) {
        for (var y = L.split(/\s+/), I = 0; I < y.length; I++)
          y[I] && C(y[I].replace(/[`,;]/g, ""));
      }
      function A(L, C) {
        for (var y = C.doc, I = y.getValue(), E = L.toUpperCase(), d = "", T = "", H = [], Z = {
          start: p(0, 0),
          end: p(C.lastLine(), C.getLineHandle(C.lastLine()).length)
        }, te = I.indexOf(O.QUERY_DIV); te != -1; )
          H.push(y.posFromIndex(te)), te = I.indexOf(O.QUERY_DIV, te + 1);
        H.unshift(p(0, 0)), H.push(p(C.lastLine(), C.getLineHandle(C.lastLine()).text.length));
        for (var ue = null, _e = C.getCursor(), ye = 0; ye < H.length; ye++) {
          if ((ue == null || F(_e, ue) > 0) && F(_e, H[ye]) <= 0) {
            Z = { start: ue, end: H[ye] };
            break;
          }
          ue = H[ye];
        }
        if (Z.start)
          for (var ze = y.getRange(Z.start, Z.end, !1), ye = 0; ye < ze.length; ye++) {
            var ve = ze[ye];
            if (h(ve, function(st) {
              var Fe = st.toUpperCase();
              Fe === E && w(d) && (T = d), Fe !== O.ALIAS_KEYWORD && (d = st);
            }), T) break;
          }
        return T;
      }
      g.registerHelper("hint", "sql", function(L, C) {
        W = ie(C && C.tables);
        var y = C && C.defaultTable, I = C && C.disableKeywords;
        G = y && w(y), J = N(L), _ = X(L), y && !G && (G = A(y, L)), G = G || [], G.columns && (G = G.columns);
        var E = L.getCursor(), d = [], T = L.getTokenAt(E), H, Z, te;
        if (T.end > E.ch && (T.end = E.ch, T.string = T.string.slice(0, E.ch - T.start)), T.string.match(/^[.`"'\w@][\w$#]*$/g) ? (te = T.string, H = T.start, Z = T.end) : (H = Z = E.ch, te = ""), te.charAt(0) == "." || te.charAt(0) == _)
          H = z(E, T, d, L);
        else {
          var ue = function(_e, ye) {
            return typeof _e == "object" ? _e.className = ye : _e = { text: _e, className: ye }, _e;
          };
          k(d, te, G, function(_e) {
            return ue(_e, "CodeMirror-hint-table CodeMirror-hint-default-table");
          }), k(
            d,
            te,
            W,
            function(_e) {
              return ue(_e, "CodeMirror-hint-table");
            }
          ), I || k(d, te, J, function(_e) {
            return ue(_e.toUpperCase(), "CodeMirror-hint-keyword");
          });
        }
        return { list: d, from: p(E.line, H), to: p(E.line, Z) };
      });
    });
  }()), ls.exports;
}
ju();
var fs = { exports: {} }, cs;
function Xi() {
  return cs || (cs = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      function W(J, _, O) {
        var p = J.getWrapperElement(), F;
        return F = p.appendChild(document.createElement("div")), O ? F.className = "CodeMirror-dialog CodeMirror-dialog-bottom" : F.className = "CodeMirror-dialog CodeMirror-dialog-top", typeof _ == "string" ? F.innerHTML = _ : F.appendChild(_), g.addClass(p, "dialog-opened"), F;
      }
      function G(J, _) {
        J.state.currentNotificationClose && J.state.currentNotificationClose(), J.state.currentNotificationClose = _;
      }
      g.defineExtension("openDialog", function(J, _, O) {
        O || (O = {}), G(this, null);
        var p = W(this, J, O.bottom), F = !1, q = this;
        function K(D) {
          if (typeof D == "string")
            N.value = D;
          else {
            if (F) return;
            F = !0, g.rmClass(p.parentNode, "dialog-opened"), p.parentNode.removeChild(p), q.focus(), O.onClose && O.onClose(p);
          }
        }
        var N = p.getElementsByTagName("input")[0], X;
        return N ? (N.focus(), O.value && (N.value = O.value, O.selectValueOnOpen !== !1 && N.select()), O.onInput && g.on(N, "input", function(D) {
          O.onInput(D, N.value, K);
        }), O.onKeyUp && g.on(N, "keyup", function(D) {
          O.onKeyUp(D, N.value, K);
        }), g.on(N, "keydown", function(D) {
          O && O.onKeyDown && O.onKeyDown(D, N.value, K) || ((D.keyCode == 27 || O.closeOnEnter !== !1 && D.keyCode == 13) && (N.blur(), g.e_stop(D), K()), D.keyCode == 13 && _(N.value, D));
        }), O.closeOnBlur !== !1 && g.on(p, "focusout", function(D) {
          D.relatedTarget !== null && K();
        })) : (X = p.getElementsByTagName("button")[0]) && (g.on(X, "click", function() {
          K(), q.focus();
        }), O.closeOnBlur !== !1 && g.on(X, "blur", K), X.focus()), K;
      }), g.defineExtension("openConfirm", function(J, _, O) {
        G(this, null);
        var p = W(this, J, O && O.bottom), F = p.getElementsByTagName("button"), q = !1, K = this, N = 1;
        function X() {
          q || (q = !0, g.rmClass(p.parentNode, "dialog-opened"), p.parentNode.removeChild(p), K.focus());
        }
        F[0].focus();
        for (var D = 0; D < F.length; ++D) {
          var Q = F[D];
          (function(ie) {
            g.on(Q, "click", function(w) {
              g.e_preventDefault(w), X(), ie && ie(K);
            });
          })(_[D]), g.on(Q, "blur", function() {
            --N, setTimeout(function() {
              N <= 0 && X();
            }, 200);
          }), g.on(Q, "focus", function() {
            ++N;
          });
        }
      }), g.defineExtension("openNotification", function(J, _) {
        G(this, K);
        var O = W(this, J, _ && _.bottom), p = !1, F, q = _ && typeof _.duration < "u" ? _.duration : 5e3;
        function K() {
          p || (p = !0, clearTimeout(F), g.rmClass(O.parentNode, "dialog-opened"), O.parentNode.removeChild(O));
        }
        return g.on(O, "click", function(N) {
          g.e_preventDefault(N), K();
        }), q && (F = setTimeout(K, q)), K;
      });
    });
  }()), fs.exports;
}
Xi();
var hs = { exports: {} }, ds;
function As() {
  return ds || (ds = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      g.defineExtension("annotateScrollbar", function(G) {
        return typeof G == "string" && (G = { className: G }), new W(this, G);
      }), g.defineOption("scrollButtonHeight", 0);
      function W(G, J) {
        this.cm = G, this.options = J, this.buttonHeight = J.scrollButtonHeight || G.getOption("scrollButtonHeight"), this.annotations = [], this.doRedraw = this.doUpdate = null, this.div = G.getWrapperElement().appendChild(document.createElement("div")), this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none", this.computeScale();
        function _(p) {
          clearTimeout(O.doRedraw), O.doRedraw = setTimeout(function() {
            O.redraw();
          }, p);
        }
        var O = this;
        G.on("refresh", this.resizeHandler = function() {
          clearTimeout(O.doUpdate), O.doUpdate = setTimeout(function() {
            O.computeScale() && _(20);
          }, 100);
        }), G.on("markerAdded", this.resizeHandler), G.on("markerCleared", this.resizeHandler), J.listenForChanges !== !1 && G.on("changes", this.changeHandler = function() {
          _(250);
        });
      }
      W.prototype.computeScale = function() {
        var G = this.cm, J = (G.getWrapperElement().clientHeight - G.display.barHeight - this.buttonHeight * 2) / G.getScrollerElement().scrollHeight;
        if (J != this.hScale)
          return this.hScale = J, !0;
      }, W.prototype.update = function(G) {
        this.annotations = G, this.redraw();
      }, W.prototype.redraw = function(G) {
        G !== !1 && this.computeScale();
        var J = this.cm, _ = this.hScale, O = document.createDocumentFragment(), p = this.annotations, F = J.getOption("lineWrapping"), q = F && J.defaultTextHeight() * 1.5, K = null, N = null;
        function X(R, z) {
          if (K != R.line) {
            K = R.line, N = J.getLineHandle(R.line);
            var h = J.getLineHandleVisualStart(N);
            h != N && (K = J.getLineNumber(h), N = h);
          }
          if (N.widgets && N.widgets.length || F && N.height > q)
            return J.charCoords(R, "local")[z ? "top" : "bottom"];
          var A = J.heightAtLine(N, "local");
          return A + (z ? 0 : N.height);
        }
        var D = J.lastLine();
        if (J.display.barWidth) for (var Q = 0, ie; Q < p.length; Q++) {
          var w = p[Q];
          if (!(w.to.line > D)) {
            for (var m = ie || X(w.from, !0) * _, x = X(w.to, !1) * _; Q < p.length - 1 && !(p[Q + 1].to.line > D || (ie = X(p[Q + 1].from, !0) * _, ie > x + 0.9)); )
              w = p[++Q], x = X(w.to, !1) * _;
            if (x != m) {
              var k = Math.max(x - m, 3), S = O.appendChild(document.createElement("div"));
              S.style.cssText = "position: absolute; right: 0px; width: " + Math.max(J.display.barWidth - 1, 2) + "px; top: " + (m + this.buttonHeight) + "px; height: " + k + "px", S.className = this.options.className, w.id && S.setAttribute("annotation-id", w.id);
            }
          }
        }
        this.div.textContent = "", this.div.appendChild(O);
      }, W.prototype.clear = function() {
        this.cm.off("refresh", this.resizeHandler), this.cm.off("markerAdded", this.resizeHandler), this.cm.off("markerCleared", this.resizeHandler), this.changeHandler && this.cm.off("changes", this.changeHandler), this.div.parentNode.removeChild(this.div);
      };
    });
  }()), hs.exports;
}
As();
var ps = { exports: {} }, gs = { exports: {} }, vs;
function Qi() {
  return vs || (vs = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      var W = g.Pos;
      function G(m) {
        var x = m.flags;
        return x ?? (m.ignoreCase ? "i" : "") + (m.global ? "g" : "") + (m.multiline ? "m" : "");
      }
      function J(m, x) {
        for (var k = G(m), S = k, R = 0; R < x.length; R++) S.indexOf(x.charAt(R)) == -1 && (S += x.charAt(R));
        return k == S ? m : new RegExp(m.source, S);
      }
      function _(m) {
        return /\\s|\\n|\n|\\W|\\D|\[\^/.test(m.source);
      }
      function O(m, x, k) {
        x = J(x, "g");
        for (var S = k.line, R = k.ch, z = m.lastLine(); S <= z; S++, R = 0) {
          x.lastIndex = R;
          var h = m.getLine(S), A = x.exec(h);
          if (A)
            return {
              from: W(S, A.index),
              to: W(S, A.index + A[0].length),
              match: A
            };
        }
      }
      function p(m, x, k) {
        if (!_(x)) return O(m, x, k);
        x = J(x, "gm");
        for (var S, R = 1, z = k.line, h = m.lastLine(); z <= h; ) {
          for (var A = 0; A < R && !(z > h); A++) {
            var L = m.getLine(z++);
            S = S == null ? L : S + `
` + L;
          }
          R = R * 2, x.lastIndex = k.ch;
          var C = x.exec(S);
          if (C) {
            var y = S.slice(0, C.index).split(`
`), I = C[0].split(`
`), E = k.line + y.length - 1, d = y[y.length - 1].length;
            return {
              from: W(E, d),
              to: W(
                E + I.length - 1,
                I.length == 1 ? d + I[0].length : I[I.length - 1].length
              ),
              match: C
            };
          }
        }
      }
      function F(m, x, k) {
        for (var S, R = 0; R <= m.length; ) {
          x.lastIndex = R;
          var z = x.exec(m);
          if (!z) break;
          var h = z.index + z[0].length;
          if (h > m.length - k) break;
          (!S || h > S.index + S[0].length) && (S = z), R = z.index + 1;
        }
        return S;
      }
      function q(m, x, k) {
        x = J(x, "g");
        for (var S = k.line, R = k.ch, z = m.firstLine(); S >= z; S--, R = -1) {
          var h = m.getLine(S), A = F(h, x, R < 0 ? 0 : h.length - R);
          if (A)
            return {
              from: W(S, A.index),
              to: W(S, A.index + A[0].length),
              match: A
            };
        }
      }
      function K(m, x, k) {
        if (!_(x)) return q(m, x, k);
        x = J(x, "gm");
        for (var S, R = 1, z = m.getLine(k.line).length - k.ch, h = k.line, A = m.firstLine(); h >= A; ) {
          for (var L = 0; L < R && h >= A; L++) {
            var C = m.getLine(h--);
            S = S == null ? C : C + `
` + S;
          }
          R *= 2;
          var y = F(S, x, z);
          if (y) {
            var I = S.slice(0, y.index).split(`
`), E = y[0].split(`
`), d = h + I.length, T = I[I.length - 1].length;
            return {
              from: W(d, T),
              to: W(
                d + E.length - 1,
                E.length == 1 ? T + E[0].length : E[E.length - 1].length
              ),
              match: y
            };
          }
        }
      }
      var N, X;
      String.prototype.normalize ? (N = function(m) {
        return m.normalize("NFD").toLowerCase();
      }, X = function(m) {
        return m.normalize("NFD");
      }) : (N = function(m) {
        return m.toLowerCase();
      }, X = function(m) {
        return m;
      });
      function D(m, x, k, S) {
        if (m.length == x.length) return k;
        for (var R = 0, z = k + Math.max(0, m.length - x.length); ; ) {
          if (R == z) return R;
          var h = R + z >> 1, A = S(m.slice(0, h)).length;
          if (A == k) return h;
          A > k ? z = h : R = h + 1;
        }
      }
      function Q(m, x, k, S) {
        if (!x.length) return null;
        var R = S ? N : X, z = R(x).split(/\r|\n\r?/);
        e: for (var h = k.line, A = k.ch, L = m.lastLine() + 1 - z.length; h <= L; h++, A = 0) {
          var C = m.getLine(h).slice(A), y = R(C);
          if (z.length == 1) {
            var I = y.indexOf(z[0]);
            if (I == -1) continue e;
            var k = D(C, y, I, R) + A;
            return {
              from: W(h, D(C, y, I, R) + A),
              to: W(h, D(C, y, I + z[0].length, R) + A)
            };
          } else {
            var E = y.length - z[0].length;
            if (y.slice(E) != z[0]) continue e;
            for (var d = 1; d < z.length - 1; d++)
              if (R(m.getLine(h + d)) != z[d]) continue e;
            var T = m.getLine(h + z.length - 1), H = R(T), Z = z[z.length - 1];
            if (H.slice(0, Z.length) != Z) continue e;
            return {
              from: W(h, D(C, y, E, R) + A),
              to: W(h + z.length - 1, D(T, H, Z.length, R))
            };
          }
        }
      }
      function ie(m, x, k, S) {
        if (!x.length) return null;
        var R = S ? N : X, z = R(x).split(/\r|\n\r?/);
        e: for (var h = k.line, A = k.ch, L = m.firstLine() - 1 + z.length; h >= L; h--, A = -1) {
          var C = m.getLine(h);
          A > -1 && (C = C.slice(0, A));
          var y = R(C);
          if (z.length == 1) {
            var I = y.lastIndexOf(z[0]);
            if (I == -1) continue e;
            return {
              from: W(h, D(C, y, I, R)),
              to: W(h, D(C, y, I + z[0].length, R))
            };
          } else {
            var E = z[z.length - 1];
            if (y.slice(0, E.length) != E) continue e;
            for (var d = 1, k = h - z.length + 1; d < z.length - 1; d++)
              if (R(m.getLine(k + d)) != z[d]) continue e;
            var T = m.getLine(h + 1 - z.length), H = R(T);
            if (H.slice(H.length - z[0].length) != z[0]) continue e;
            return {
              from: W(h + 1 - z.length, D(T, H, T.length - z[0].length, R)),
              to: W(h, D(C, y, E.length, R))
            };
          }
        }
      }
      function w(m, x, k, S) {
        this.atOccurrence = !1, this.afterEmptyMatch = !1, this.doc = m, k = k ? m.clipPos(k) : W(0, 0), this.pos = { from: k, to: k };
        var R;
        typeof S == "object" ? R = S.caseFold : (R = S, S = null), typeof x == "string" ? (R == null && (R = !1), this.matches = function(z, h) {
          return (z ? ie : Q)(m, x, h, R);
        }) : (x = J(x, "gm"), !S || S.multiline !== !1 ? this.matches = function(z, h) {
          return (z ? K : p)(m, x, h);
        } : this.matches = function(z, h) {
          return (z ? q : O)(m, x, h);
        });
      }
      w.prototype = {
        findNext: function() {
          return this.find(!1);
        },
        findPrevious: function() {
          return this.find(!0);
        },
        find: function(m) {
          var x = this.doc.clipPos(m ? this.pos.from : this.pos.to);
          if (this.afterEmptyMatch && this.atOccurrence && (x = W(x.line, x.ch), m ? (x.ch--, x.ch < 0 && (x.line--, x.ch = (this.doc.getLine(x.line) || "").length)) : (x.ch++, x.ch > (this.doc.getLine(x.line) || "").length && (x.ch = 0, x.line++)), g.cmpPos(x, this.doc.clipPos(x)) != 0))
            return this.atOccurrence = !1;
          var k = this.matches(m, x);
          if (this.afterEmptyMatch = k && g.cmpPos(k.from, k.to) == 0, k)
            return this.pos = k, this.atOccurrence = !0, this.pos.match || !0;
          var S = W(m ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
          return this.pos = { from: S, to: S }, this.atOccurrence = !1;
        },
        from: function() {
          if (this.atOccurrence) return this.pos.from;
        },
        to: function() {
          if (this.atOccurrence) return this.pos.to;
        },
        replace: function(m, x) {
          if (this.atOccurrence) {
            var k = g.splitLines(m);
            this.doc.replaceRange(k, this.pos.from, this.pos.to, x), this.pos.to = W(
              this.pos.from.line + k.length - 1,
              k[k.length - 1].length + (k.length == 1 ? this.pos.from.ch : 0)
            );
          }
        }
      }, g.defineExtension("getSearchCursor", function(m, x, k) {
        return new w(this.doc, m, x, k);
      }), g.defineDocExtension("getSearchCursor", function(m, x, k) {
        return new w(this, m, x, k);
      }), g.defineExtension("selectMatches", function(m, x) {
        for (var k = [], S = this.getSearchCursor(m, this.getCursor("from"), x); S.findNext() && !(g.cmpPos(S.to(), this.getCursor("to")) > 0); )
          k.push({ anchor: S.from(), head: S.to() });
        k.length && this.setSelections(k, 0);
      });
    });
  }()), gs.exports;
}
var ms;
function Zu() {
  return ms || (ms = 1, function(xe, $) {
    (function(g) {
      g(ot(), Qi(), Xi());
    })(function(g) {
      g.defineOption("search", { bottom: !1 });
      function W(h, A) {
        return typeof h == "string" ? h = new RegExp(h.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), A ? "gi" : "g") : h.global || (h = new RegExp(h.source, h.ignoreCase ? "gi" : "g")), { token: function(L) {
          h.lastIndex = L.pos;
          var C = h.exec(L.string);
          if (C && C.index == L.pos)
            return L.pos += C[0].length || 1, "searching";
          C ? L.pos = C.index : L.skipToEnd();
        } };
      }
      function G() {
        this.posFrom = this.posTo = this.lastQuery = this.query = null, this.overlay = null;
      }
      function J(h) {
        return h.state.search || (h.state.search = new G());
      }
      function _(h) {
        return typeof h == "string" && h == h.toLowerCase();
      }
      function O(h, A, L) {
        return h.getSearchCursor(A, L, { caseFold: _(A), multiline: !0 });
      }
      function p(h, A, L, C, y) {
        h.openDialog(A, C, {
          value: L,
          selectValueOnOpen: !0,
          closeOnEnter: !1,
          onClose: function() {
            ie(h);
          },
          onKeyDown: y,
          bottom: h.options.search.bottom
        });
      }
      function F(h, A, L, C, y) {
        h.openDialog ? h.openDialog(A, y, { value: C, selectValueOnOpen: !0, bottom: h.options.search.bottom }) : y(prompt(L, C));
      }
      function q(h, A, L, C) {
        h.openConfirm ? h.openConfirm(A, C) : confirm(L) && C[0]();
      }
      function K(h) {
        return h.replace(/\\([nrt\\])/g, function(A, L) {
          return L == "n" ? `
` : L == "r" ? "\r" : L == "t" ? "	" : L == "\\" ? "\\" : A;
        });
      }
      function N(h) {
        var A = h.match(/^\/(.*)\/([a-z]*)$/);
        if (A)
          try {
            h = new RegExp(A[1], A[2].indexOf("i") == -1 ? "" : "i");
          } catch {
          }
        else
          h = K(h);
        return (typeof h == "string" ? h == "" : h.test("")) && (h = /x^/), h;
      }
      function X(h, A, L) {
        A.queryText = L, A.query = N(L), h.removeOverlay(A.overlay, _(A.query)), A.overlay = W(A.query, _(A.query)), h.addOverlay(A.overlay), h.showMatchesOnScrollbar && (A.annotate && (A.annotate.clear(), A.annotate = null), A.annotate = h.showMatchesOnScrollbar(A.query, _(A.query)));
      }
      function D(h, A, L, C) {
        var y = J(h);
        if (y.query) return Q(h, A);
        var I = h.getSelection() || y.lastQuery;
        if (I instanceof RegExp && I.source == "x^" && (I = null), L && h.openDialog) {
          var E = null, d = function(T, H) {
            g.e_stop(H), T && (T != y.queryText && (X(h, y, T), y.posFrom = y.posTo = h.getCursor()), E && (E.style.opacity = 1), Q(h, H.shiftKey, function(Z, te) {
              var ue;
              te.line < 3 && document.querySelector && (ue = h.display.wrapper.querySelector(".CodeMirror-dialog")) && ue.getBoundingClientRect().bottom - 4 > h.cursorCoords(te, "window").top && ((E = ue).style.opacity = 0.4);
            }));
          };
          p(h, m(h), I, d, function(T, H) {
            var Z = g.keyName(T), te = h.getOption("extraKeys"), ue = te && te[Z] || g.keyMap[h.getOption("keyMap")][Z];
            ue == "findNext" || ue == "findPrev" || ue == "findPersistentNext" || ue == "findPersistentPrev" ? (g.e_stop(T), X(h, J(h), H), h.execCommand(ue)) : (ue == "find" || ue == "findPersistent") && (g.e_stop(T), d(H, T));
          }), C && I && (X(h, y, I), Q(h, A));
        } else
          F(h, m(h), "Search for:", I, function(T) {
            T && !y.query && h.operation(function() {
              X(h, y, T), y.posFrom = y.posTo = h.getCursor(), Q(h, A);
            });
          });
      }
      function Q(h, A, L) {
        h.operation(function() {
          var C = J(h), y = O(h, C.query, A ? C.posFrom : C.posTo);
          !y.find(A) && (y = O(h, C.query, A ? g.Pos(h.lastLine()) : g.Pos(h.firstLine(), 0)), !y.find(A)) || (h.setSelection(y.from(), y.to()), h.scrollIntoView({ from: y.from(), to: y.to() }, 20), C.posFrom = y.from(), C.posTo = y.to(), L && L(y.from(), y.to()));
        });
      }
      function ie(h) {
        h.operation(function() {
          var A = J(h);
          A.lastQuery = A.query, A.query && (A.query = A.queryText = null, h.removeOverlay(A.overlay), A.annotate && (A.annotate.clear(), A.annotate = null));
        });
      }
      function w(h, A) {
        var L = h ? document.createElement(h) : document.createDocumentFragment();
        for (var C in A)
          L[C] = A[C];
        for (var y = 2; y < arguments.length; y++) {
          var I = arguments[y];
          L.appendChild(typeof I == "string" ? document.createTextNode(I) : I);
        }
        return L;
      }
      function m(h) {
        var A = w(
          "label",
          { className: "CodeMirror-search-label" },
          h.phrase("Search:"),
          w("input", {
            type: "text",
            style: "width: 10em",
            className: "CodeMirror-search-field",
            id: "CodeMirror-search-field"
          })
        );
        return A.setAttribute("for", "CodeMirror-search-field"), w(
          "",
          null,
          A,
          " ",
          w(
            "span",
            { style: "color: #666", className: "CodeMirror-search-hint" },
            h.phrase("(Use /re/ syntax for regexp search)")
          )
        );
      }
      function x(h) {
        return w(
          "",
          null,
          " ",
          w("input", { type: "text", style: "width: 10em", className: "CodeMirror-search-field" }),
          " ",
          w(
            "span",
            { style: "color: #666", className: "CodeMirror-search-hint" },
            h.phrase("(Use /re/ syntax for regexp search)")
          )
        );
      }
      function k(h) {
        return w(
          "",
          null,
          w("span", { className: "CodeMirror-search-label" }, h.phrase("With:")),
          " ",
          w("input", { type: "text", style: "width: 10em", className: "CodeMirror-search-field" })
        );
      }
      function S(h) {
        return w(
          "",
          null,
          w("span", { className: "CodeMirror-search-label" }, h.phrase("Replace?")),
          " ",
          w("button", {}, h.phrase("Yes")),
          " ",
          w("button", {}, h.phrase("No")),
          " ",
          w("button", {}, h.phrase("All")),
          " ",
          w("button", {}, h.phrase("Stop"))
        );
      }
      function R(h, A, L) {
        h.operation(function() {
          for (var C = O(h, A); C.findNext(); )
            if (typeof A != "string") {
              var y = h.getRange(C.from(), C.to()).match(A);
              C.replace(L.replace(/\$(\d)/g, function(I, E) {
                return y[E];
              }));
            } else C.replace(L);
        });
      }
      function z(h, A) {
        if (!h.getOption("readOnly")) {
          var L = h.getSelection() || J(h).lastQuery, C = A ? h.phrase("Replace all:") : h.phrase("Replace:"), y = w(
            "",
            null,
            w("span", { className: "CodeMirror-search-label" }, C),
            x(h)
          );
          F(h, y, C, L, function(I) {
            I && (I = N(I), F(h, k(h), h.phrase("Replace with:"), "", function(E) {
              if (E = K(E), A)
                R(h, I, E);
              else {
                ie(h);
                var d = O(h, I, h.getCursor("from")), T = function() {
                  var Z = d.from(), te;
                  !(te = d.findNext()) && (d = O(h, I), !(te = d.findNext()) || Z && d.from().line == Z.line && d.from().ch == Z.ch) || (h.setSelection(d.from(), d.to()), h.scrollIntoView({ from: d.from(), to: d.to() }), q(
                    h,
                    S(h),
                    h.phrase("Replace?"),
                    [
                      function() {
                        H(te);
                      },
                      T,
                      function() {
                        R(h, I, E);
                      }
                    ]
                  ));
                }, H = function(Z) {
                  d.replace(typeof I == "string" ? E : E.replace(/\$(\d)/g, function(te, ue) {
                    return Z[ue];
                  })), T();
                };
                T();
              }
            }));
          });
        }
      }
      g.commands.find = function(h) {
        ie(h), D(h);
      }, g.commands.findPersistent = function(h) {
        ie(h), D(h, !1, !0);
      }, g.commands.findPersistentNext = function(h) {
        D(h, !1, !0, !0);
      }, g.commands.findPersistentPrev = function(h) {
        D(h, !0, !0, !0);
      }, g.commands.findNext = D, g.commands.findPrev = function(h) {
        D(h, !0);
      }, g.commands.clearSearch = ie, g.commands.replace = z, g.commands.replaceAll = function(h) {
        z(h, !0);
      };
    });
  }()), ps.exports;
}
Zu();
var ys = { exports: {} }, bs;
function Ju() {
  return bs || (bs = 1, function(xe, $) {
    (function(g) {
      g(ot(), Xi());
    })(function(g) {
      g.defineOption("search", { bottom: !1 });
      function W(_, O, p, F, q) {
        _.openDialog ? _.openDialog(O, q, { value: F, selectValueOnOpen: !0, bottom: _.options.search.bottom }) : q(prompt(p, F));
      }
      function G(_) {
        return _.phrase("Jump to line:") + ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + _.phrase("(Use line:column or scroll% syntax)") + "</span>";
      }
      function J(_, O) {
        var p = Number(O);
        return /^[-+]/.test(O) ? _.getCursor().line + p : p - 1;
      }
      g.commands.jumpToLine = function(_) {
        var O = _.getCursor();
        W(_, G(_), _.phrase("Jump to line:"), O.line + 1 + ":" + O.ch, function(p) {
          if (p) {
            var F;
            if (F = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(p))
              _.setCursor(J(_, F[1]), Number(F[2]));
            else if (F = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(p)) {
              var q = Math.round(_.lineCount() * Number(F[1]) / 100);
              /^[-+]/.test(F[1]) && (q = O.line + q + 1), _.setCursor(q - 1, O.ch);
            } else (F = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(p)) && _.setCursor(J(_, F[1]), O.ch);
          }
        });
      }, g.keyMap.default["Alt-G"] = "jumpToLine";
    });
  }()), ys.exports;
}
Ju();
var xs = { exports: {} }, ws;
function Vu() {
  return ws || (ws = 1, function(xe, $) {
    (function(g) {
      g(ot(), Qi(), As());
    })(function(g) {
      g.defineExtension("showMatchesOnScrollbar", function(_, O, p) {
        return typeof p == "string" && (p = { className: p }), p || (p = {}), new W(this, _, O, p);
      });
      function W(_, O, p, F) {
        this.cm = _, this.options = F;
        var q = { listenForChanges: !1 };
        for (var K in F) q[K] = F[K];
        q.className || (q.className = "CodeMirror-search-match"), this.annotation = _.annotateScrollbar(q), this.query = O, this.caseFold = p, this.gap = { from: _.firstLine(), to: _.lastLine() + 1 }, this.matches = [], this.update = null, this.findMatches(), this.annotation.update(this.matches);
        var N = this;
        _.on("change", this.changeHandler = function(X, D) {
          N.onChange(D);
        });
      }
      var G = 1e3;
      W.prototype.findMatches = function() {
        if (this.gap) {
          for (var _ = 0; _ < this.matches.length; _++) {
            var O = this.matches[_];
            if (O.from.line >= this.gap.to) break;
            O.to.line >= this.gap.from && this.matches.splice(_--, 1);
          }
          for (var p = this.cm.getSearchCursor(this.query, g.Pos(this.gap.from, 0), { caseFold: this.caseFold, multiline: this.options.multiline }), F = this.options && this.options.maxMatches || G; p.findNext(); ) {
            var O = { from: p.from(), to: p.to() };
            if (O.from.line >= this.gap.to || (this.matches.splice(_++, 0, O), this.matches.length > F)) break;
          }
          this.gap = null;
        }
      };
      function J(_, O, p) {
        return _ <= O ? _ : Math.max(O, _ + p);
      }
      W.prototype.onChange = function(_) {
        var O = _.from.line, p = g.changeEnd(_).line, F = p - _.to.line;
        if (this.gap ? (this.gap.from = Math.min(J(this.gap.from, O, F), _.from.line), this.gap.to = Math.max(J(this.gap.to, O, F), _.from.line)) : this.gap = { from: _.from.line, to: p + 1 }, F) for (var q = 0; q < this.matches.length; q++) {
          var K = this.matches[q], N = J(K.from.line, O, F);
          N != K.from.line && (K.from = g.Pos(N, K.from.ch));
          var X = J(K.to.line, O, F);
          X != K.to.line && (K.to = g.Pos(X, K.to.ch));
        }
        clearTimeout(this.update);
        var D = this;
        this.update = setTimeout(function() {
          D.updateAfterChange();
        }, 250);
      }, W.prototype.updateAfterChange = function() {
        this.findMatches(), this.annotation.update(this.matches);
      }, W.prototype.clear = function() {
        this.cm.off("change", this.changeHandler), this.annotation.clear();
      };
    });
  }()), xs.exports;
}
Vu();
Qi();
var _s = { exports: {} }, ks;
function $u() {
  return ks || (ks = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      var W = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 }
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
      }, G = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1
      };
      g.defineMode("xml", function(J, _) {
        var O = J.indentUnit, p = {}, F = _.htmlMode ? W : G;
        for (var q in F) p[q] = F[q];
        for (var q in _) p[q] = _[q];
        var K, N;
        function X(d, T) {
          function H(ue) {
            return T.tokenize = ue, ue(d, T);
          }
          var Z = d.next();
          if (Z == "<")
            return d.eat("!") ? d.eat("[") ? d.match("CDATA[") ? H(ie("atom", "]]>")) : null : d.match("--") ? H(ie("comment", "-->")) : d.match("DOCTYPE", !0, !0) ? (d.eatWhile(/[\w\._\-]/), H(w(1))) : null : d.eat("?") ? (d.eatWhile(/[\w\._\-]/), T.tokenize = ie("meta", "?>"), "meta") : (K = d.eat("/") ? "closeTag" : "openTag", T.tokenize = D, "tag bracket");
          if (Z == "&") {
            var te;
            return d.eat("#") ? d.eat("x") ? te = d.eatWhile(/[a-fA-F\d]/) && d.eat(";") : te = d.eatWhile(/[\d]/) && d.eat(";") : te = d.eatWhile(/[\w\.\-:]/) && d.eat(";"), te ? "atom" : "error";
          } else
            return d.eatWhile(/[^&<]/), null;
        }
        X.isInText = !0;
        function D(d, T) {
          var H = d.next();
          if (H == ">" || H == "/" && d.eat(">"))
            return T.tokenize = X, K = H == ">" ? "endTag" : "selfcloseTag", "tag bracket";
          if (H == "=")
            return K = "equals", null;
          if (H == "<") {
            T.tokenize = X, T.state = R, T.tagName = T.tagStart = null;
            var Z = T.tokenize(d, T);
            return Z ? Z + " tag error" : "tag error";
          } else return /[\'\"]/.test(H) ? (T.tokenize = Q(H), T.stringStartCol = d.column(), T.tokenize(d, T)) : (d.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
        }
        function Q(d) {
          var T = function(H, Z) {
            for (; !H.eol(); )
              if (H.next() == d) {
                Z.tokenize = D;
                break;
              }
            return "string";
          };
          return T.isInAttribute = !0, T;
        }
        function ie(d, T) {
          return function(H, Z) {
            for (; !H.eol(); ) {
              if (H.match(T)) {
                Z.tokenize = X;
                break;
              }
              H.next();
            }
            return d;
          };
        }
        function w(d) {
          return function(T, H) {
            for (var Z; (Z = T.next()) != null; ) {
              if (Z == "<")
                return H.tokenize = w(d + 1), H.tokenize(T, H);
              if (Z == ">")
                if (d == 1) {
                  H.tokenize = X;
                  break;
                } else
                  return H.tokenize = w(d - 1), H.tokenize(T, H);
            }
            return "meta";
          };
        }
        function m(d) {
          return d && d.toLowerCase();
        }
        function x(d, T, H) {
          this.prev = d.context, this.tagName = T || "", this.indent = d.indented, this.startOfLine = H, (p.doNotIndent.hasOwnProperty(T) || d.context && d.context.noIndent) && (this.noIndent = !0);
        }
        function k(d) {
          d.context && (d.context = d.context.prev);
        }
        function S(d, T) {
          for (var H; ; ) {
            if (!d.context || (H = d.context.tagName, !p.contextGrabbers.hasOwnProperty(m(H)) || !p.contextGrabbers[m(H)].hasOwnProperty(m(T))))
              return;
            k(d);
          }
        }
        function R(d, T, H) {
          return d == "openTag" ? (H.tagStart = T.column(), z) : d == "closeTag" ? h : R;
        }
        function z(d, T, H) {
          return d == "word" ? (H.tagName = T.current(), N = "tag", C) : p.allowMissingTagName && d == "endTag" ? (N = "tag bracket", C(d, T, H)) : (N = "error", z);
        }
        function h(d, T, H) {
          if (d == "word") {
            var Z = T.current();
            return H.context && H.context.tagName != Z && p.implicitlyClosed.hasOwnProperty(m(H.context.tagName)) && k(H), H.context && H.context.tagName == Z || p.matchClosing === !1 ? (N = "tag", A) : (N = "tag error", L);
          } else return p.allowMissingTagName && d == "endTag" ? (N = "tag bracket", A(d, T, H)) : (N = "error", L);
        }
        function A(d, T, H) {
          return d != "endTag" ? (N = "error", A) : (k(H), R);
        }
        function L(d, T, H) {
          return N = "error", A(d, T, H);
        }
        function C(d, T, H) {
          if (d == "word")
            return N = "attribute", y;
          if (d == "endTag" || d == "selfcloseTag") {
            var Z = H.tagName, te = H.tagStart;
            return H.tagName = H.tagStart = null, d == "selfcloseTag" || p.autoSelfClosers.hasOwnProperty(m(Z)) ? S(H, Z) : (S(H, Z), H.context = new x(H, Z, te == H.indented)), R;
          }
          return N = "error", C;
        }
        function y(d, T, H) {
          return d == "equals" ? I : (p.allowMissing || (N = "error"), C(d, T, H));
        }
        function I(d, T, H) {
          return d == "string" ? E : d == "word" && p.allowUnquoted ? (N = "string", C) : (N = "error", C(d, T, H));
        }
        function E(d, T, H) {
          return d == "string" ? E : C(d, T, H);
        }
        return {
          startState: function(d) {
            var T = {
              tokenize: X,
              state: R,
              indented: d || 0,
              tagName: null,
              tagStart: null,
              context: null
            };
            return d != null && (T.baseIndent = d), T;
          },
          token: function(d, T) {
            if (!T.tagName && d.sol() && (T.indented = d.indentation()), d.eatSpace()) return null;
            K = null;
            var H = T.tokenize(d, T);
            return (H || K) && H != "comment" && (N = null, T.state = T.state(K || H, d, T), N && (H = N == "error" ? H + " error" : N)), H;
          },
          indent: function(d, T, H) {
            var Z = d.context;
            if (d.tokenize.isInAttribute)
              return d.tagStart == d.indented ? d.stringStartCol + 1 : d.indented + O;
            if (Z && Z.noIndent) return g.Pass;
            if (d.tokenize != D && d.tokenize != X)
              return H ? H.match(/^(\s*)/)[0].length : 0;
            if (d.tagName)
              return p.multilineTagIndentPastTag !== !1 ? d.tagStart + d.tagName.length + 2 : d.tagStart + O * (p.multilineTagIndentFactor || 1);
            if (p.alignCDATA && /<!\[CDATA\[/.test(T)) return 0;
            var te = T && /^<(\/)?([\w_:\.-]*)/.exec(T);
            if (te && te[1])
              for (; Z; )
                if (Z.tagName == te[2]) {
                  Z = Z.prev;
                  break;
                } else if (p.implicitlyClosed.hasOwnProperty(m(Z.tagName)))
                  Z = Z.prev;
                else
                  break;
            else if (te)
              for (; Z; ) {
                var ue = p.contextGrabbers[m(Z.tagName)];
                if (ue && ue.hasOwnProperty(m(te[2])))
                  Z = Z.prev;
                else
                  break;
              }
            for (; Z && Z.prev && !Z.startOfLine; )
              Z = Z.prev;
            return Z ? Z.indent + O : d.baseIndent || 0;
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: "<!--",
          blockCommentEnd: "-->",
          configuration: p.htmlMode ? "html" : "xml",
          helperType: p.htmlMode ? "html" : "xml",
          skipAttribute: function(d) {
            d.state == I && (d.state = C);
          },
          xmlCurrentTag: function(d) {
            return d.tagName ? { name: d.tagName, close: d.type == "closeTag" } : null;
          },
          xmlCurrentContext: function(d) {
            for (var T = [], H = d.context; H; H = H.prev)
              T.push(H.tagName);
            return T.reverse();
          }
        };
      }), g.defineMIME("text/xml", "xml"), g.defineMIME("application/xml", "xml"), g.mimeModes.hasOwnProperty("text/html") || g.defineMIME("text/html", { name: "xml", htmlMode: !0 });
    });
  }()), _s.exports;
}
$u();
var Ss = { exports: {} }, Cs;
function ef() {
  return Cs || (Cs = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      g.multiplexingMode = function(W) {
        var G = Array.prototype.slice.call(arguments, 1);
        function J(_, O, p, F) {
          if (typeof O == "string") {
            var q = _.indexOf(O, p);
            return F && q > -1 ? q + O.length : q;
          }
          var K = O.exec(p ? _.slice(p) : _);
          return K ? K.index + p + (F ? K[0].length : 0) : -1;
        }
        return {
          startState: function() {
            return {
              outer: g.startState(W),
              innerActive: null,
              inner: null,
              startingInner: !1
            };
          },
          copyState: function(_) {
            return {
              outer: g.copyState(W, _.outer),
              innerActive: _.innerActive,
              inner: _.innerActive && g.copyState(_.innerActive.mode, _.inner),
              startingInner: _.startingInner
            };
          },
          token: function(_, O) {
            if (O.innerActive) {
              var ie = O.innerActive, F = _.string;
              if (!ie.close && _.sol())
                return O.innerActive = O.inner = null, this.token(_, O);
              var N = ie.close && !O.startingInner ? J(F, ie.close, _.pos, ie.parseDelimiters) : -1;
              if (N == _.pos && !ie.parseDelimiters)
                return _.match(ie.close), O.innerActive = O.inner = null, ie.delimStyle && ie.delimStyle + " " + ie.delimStyle + "-close";
              N > -1 && (_.string = F.slice(0, N));
              var w = ie.mode.token(_, O.inner);
              return N > -1 ? _.string = F : _.pos > _.start && (O.startingInner = !1), N == _.pos && ie.parseDelimiters && (O.innerActive = O.inner = null), ie.innerStyle && (w ? w = w + " " + ie.innerStyle : w = ie.innerStyle), w;
            } else {
              for (var p = 1 / 0, F = _.string, q = 0; q < G.length; ++q) {
                var K = G[q], N = J(F, K.open, _.pos);
                if (N == _.pos) {
                  K.parseDelimiters || _.match(K.open), O.startingInner = !!K.parseDelimiters, O.innerActive = K;
                  var X = 0;
                  if (W.indent) {
                    var D = W.indent(O.outer, "", "");
                    D !== g.Pass && (X = D);
                  }
                  return O.inner = g.startState(K.mode, X), K.delimStyle && K.delimStyle + " " + K.delimStyle + "-open";
                } else N != -1 && N < p && (p = N);
              }
              p != 1 / 0 && (_.string = F.slice(0, p));
              var Q = W.token(_, O.outer);
              return p != 1 / 0 && (_.string = F), Q;
            }
          },
          indent: function(_, O, p) {
            var F = _.innerActive ? _.innerActive.mode : W;
            return F.indent ? F.indent(_.innerActive ? _.inner : _.outer, O, p) : g.Pass;
          },
          blankLine: function(_) {
            var O = _.innerActive ? _.innerActive.mode : W;
            if (O.blankLine && O.blankLine(_.innerActive ? _.inner : _.outer), _.innerActive)
              _.innerActive.close === `
` && (_.innerActive = _.inner = null);
            else for (var p = 0; p < G.length; ++p) {
              var F = G[p];
              F.open === `
` && (_.innerActive = F, _.inner = g.startState(F.mode, O.indent ? O.indent(_.outer, "", "") : 0));
            }
          },
          electricChars: W.electricChars,
          innerMode: function(_) {
            return _.inner ? { state: _.inner, mode: _.innerActive.mode } : { state: _.outer, mode: W };
          }
        };
      };
    });
  }()), Ss.exports;
}
ef();
var Ls = { exports: {} }, Ts;
function tf() {
  return Ts || (Ts = 1, function(xe, $) {
    (function(g) {
      g(ot());
    })(function(g) {
      g.defineSimpleMode = function(N, X) {
        g.defineMode(N, function(D) {
          return g.simpleMode(D, X);
        });
      }, g.simpleMode = function(N, X) {
        W(X, "start");
        var D = {}, Q = X.meta || {}, ie = !1;
        for (var w in X) if (w != Q && X.hasOwnProperty(w))
          for (var m = D[w] = [], x = X[w], k = 0; k < x.length; k++) {
            var S = x[k];
            m.push(new _(S, X)), (S.indent || S.dedent) && (ie = !0);
          }
        var R = {
          startState: function() {
            return {
              state: "start",
              pending: null,
              local: null,
              localState: null,
              indent: ie ? [] : null
            };
          },
          copyState: function(h) {
            var A = {
              state: h.state,
              pending: h.pending,
              local: h.local,
              localState: null,
              indent: h.indent && h.indent.slice(0)
            };
            h.localState && (A.localState = g.copyState(h.local.mode, h.localState)), h.stack && (A.stack = h.stack.slice(0));
            for (var L = h.persistentStates; L; L = L.next)
              A.persistentStates = {
                mode: L.mode,
                spec: L.spec,
                state: L.state == h.localState ? A.localState : g.copyState(L.mode, L.state),
                next: A.persistentStates
              };
            return A;
          },
          token: O(D, N),
          innerMode: function(h) {
            return h.local && { mode: h.local.mode, state: h.localState };
          },
          indent: K(D, Q)
        };
        if (Q) for (var z in Q) Q.hasOwnProperty(z) && (R[z] = Q[z]);
        return R;
      };
      function W(N, X) {
        if (!N.hasOwnProperty(X))
          throw new Error("Undefined state " + X + " in simple mode");
      }
      function G(N, X) {
        if (!N) return /(?:)/;
        var D = "";
        return N instanceof RegExp ? (N.ignoreCase && (D = "i"), N.unicode && (D += "u"), N = N.source) : N = String(N), new RegExp((X === !1 ? "" : "^") + "(?:" + N + ")", D);
      }
      function J(N) {
        if (!N) return null;
        if (N.apply) return N;
        if (typeof N == "string") return N.replace(/\./g, " ");
        for (var X = [], D = 0; D < N.length; D++)
          X.push(N[D] && N[D].replace(/\./g, " "));
        return X;
      }
      function _(N, X) {
        (N.next || N.push) && W(X, N.next || N.push), this.regex = G(N.regex), this.token = J(N.token), this.data = N;
      }
      function O(N, X) {
        return function(D, Q) {
          if (Q.pending) {
            var ie = Q.pending.shift();
            return Q.pending.length == 0 && (Q.pending = null), D.pos += ie.text.length, ie.token;
          }
          if (Q.local)
            if (Q.local.end && D.match(Q.local.end)) {
              var w = Q.local.endToken || null;
              return Q.local = Q.localState = null, w;
            } else {
              var w = Q.local.mode.token(D, Q.localState), m;
              return Q.local.endScan && (m = Q.local.endScan.exec(D.current())) && (D.pos = D.start + m.index), w;
            }
          for (var x = N[Q.state], k = 0; k < x.length; k++) {
            var S = x[k], R = (!S.data.sol || D.sol()) && D.match(S.regex);
            if (R) {
              S.data.next ? Q.state = S.data.next : S.data.push ? ((Q.stack || (Q.stack = [])).push(Q.state), Q.state = S.data.push) : S.data.pop && Q.stack && Q.stack.length && (Q.state = Q.stack.pop()), S.data.mode && F(X, Q, S.data.mode, S.token), S.data.indent && Q.indent.push(D.indentation() + X.indentUnit), S.data.dedent && Q.indent.pop();
              var z = S.token;
              if (z && z.apply && (z = z(R)), R.length > 2 && S.token && typeof S.token != "string") {
                for (var h = 2; h < R.length; h++)
                  R[h] && (Q.pending || (Q.pending = [])).push({ text: R[h], token: S.token[h - 1] });
                return D.backUp(R[0].length - (R[1] ? R[1].length : 0)), z[0];
              } else return z && z.join ? z[0] : z;
            }
          }
          return D.next(), null;
        };
      }
      function p(N, X) {
        if (N === X) return !0;
        if (!N || typeof N != "object" || !X || typeof X != "object") return !1;
        var D = 0;
        for (var Q in N) if (N.hasOwnProperty(Q)) {
          if (!X.hasOwnProperty(Q) || !p(N[Q], X[Q])) return !1;
          D++;
        }
        for (var Q in X) X.hasOwnProperty(Q) && D--;
        return D == 0;
      }
      function F(N, X, D, Q) {
        var ie;
        if (D.persistent) for (var w = X.persistentStates; w && !ie; w = w.next)
          (D.spec ? p(D.spec, w.spec) : D.mode == w.mode) && (ie = w);
        var m = ie ? ie.mode : D.mode || g.getMode(N, D.spec), x = ie ? ie.state : g.startState(m);
        D.persistent && !ie && (X.persistentStates = { mode: m, spec: D.spec, state: x, next: X.persistentStates }), X.localState = x, X.local = {
          mode: m,
          end: D.end && G(D.end),
          endScan: D.end && D.forceEnd !== !1 && G(D.end, !1),
          endToken: Q && Q.join ? Q[Q.length - 1] : Q
        };
      }
      function q(N, X) {
        for (var D = 0; D < X.length; D++) if (X[D] === N) return !0;
      }
      function K(N, X) {
        return function(D, Q, ie) {
          if (D.local && D.local.mode.indent)
            return D.local.mode.indent(D.localState, Q, ie);
          if (D.indent == null || D.local || X.dontIndentStates && q(D.state, X.dontIndentStates) > -1)
            return g.Pass;
          var w = D.indent.length - 1, m = N[D.state];
          e: for (; ; ) {
            for (var x = 0; x < m.length; x++) {
              var k = m[x];
              if (k.data.dedent && k.data.dedentIfLineStart !== !1) {
                var S = k.regex.exec(Q);
                if (S && S[0]) {
                  w--, (k.next || k.push) && (m = N[k.next || k.push]), Q = Q.slice(S[0].length);
                  continue e;
                }
              }
            }
            break;
          }
          return w < 0 ? 0 : D.indent[w];
        };
      }
    });
  }()), Ls.exports;
}
tf();
const rf = {
  startContext: [
    { tokenType: "ir-string", begin: /"/, end: /"/ },
    { tokenType: "ir-input", begin: /\[/, end: /\]/ },
    { tokenType: "ir-rule", begin: /\{/, end: /\}/ },
    { tokenType: "ir-number", begin: /\d/, end: /[^\d.]/ }
  ]
};
function nf(xe, $) {
  return {
    startState(...W) {
      return {
        contextStack: [],
        lastChar: void 0
      };
    },
    token(W, G) {
      return g(W, G);
    }
  };
  function g(W, G) {
    const J = (F) => G.contextStack.push(F), _ = () => G.contextStack[G.contextStack.length - 1], O = () => {
      G.contextStack.pop(), G.lastChar = void 0;
    }, p = _();
    if (p) {
      const F = W.next();
      return F && (p.end.test(F) && // 문자열의 escape인 경우 계속 진행
      !(p.tokenType === "ir-string" && G.lastChar === "\\") && (O(), p.tokenType === "ir-number" && W.backUp(1)), G.lastChar = F), p.tokenType;
    } else {
      const F = W.next();
      if (!F) return null;
      if (G.lastChar = F, /\s/.test(F))
        return W.eatSpace(), null;
      const q = rf.startContext.find(({ begin: K }) => K.test(F));
      if (q)
        return J(q), q.tokenType;
    }
    return null;
  }
}
Re.defineMode("ir-rule-exp", nf);
Re.defineSimpleMode("db-rule-input-parser", {
  start: [{ regex: /.*/, token: "ir-input" }]
});
Re.defineSimpleMode("db-rule-rule-parser", {
  start: [{ regex: /.*/, token: "ir-rule" }]
});
Re.defineSimpleMode("db-rule-comment-parser", {
  start: [{ regex: /.*/, token: "ir-comment" }]
});
Re.defineMode("ir-db-rule", (xe, $) => Re.multiplexingMode(
  Re.getMode(xe, "text/x-plsql"),
  {
    open: "<$$",
    close: "$$>",
    mode: Re.getMode(xe, "text/ir-rule-exp"),
    delimStyle: "ir-db-rule-delimiter"
  },
  {
    open: "<$@",
    close: "@$>",
    mode: Re.getMode(xe, "text/db-rule-comment-parser"),
    delimStyle: "ir-db-rule-comment"
  },
  {
    open: "<$",
    close: "$>",
    mode: Re.getMode(xe, "text/ir-rule-exp"),
    delimStyle: "ir-db-rule-delimiter"
  },
  {
    open: "[",
    close: "]",
    mode: Re.getMode(xe, "text/db-rule-input-parser"),
    delimStyle: "ir-db-rule-input-delimiter"
  },
  {
    open: "{",
    close: "}",
    mode: Re.getMode(xe, "text/db-rule-rule-parser"),
    delimStyle: "ir-db-rule-rule-delimiter"
  }
));
Re.defineMIME("text/ir-rule-exp", "ir-rule-exp");
Re.defineMIME("text/ir-db-rule", "ir-db-rule");
Re.defineMIME("text/db-rule-input-parser", "db-rule-input-parser");
Re.defineMIME("text/db-rule-rule-parser", "db-rule-rule-parser");
Re.defineMIME("text/db-rule-comment-parser", "db-rule-comment-parser");
const Ms = () => {
}, of = {
  "ir-db-rule": "text/ir-db-rule",
  "ir-rule-exp": "text/ir-rule-exp",
  "sql-mysql": "text/x-mysql",
  "sql-oracle": "text/x-plsql",
  xml: "text/html"
};
class af {
  _gutterSet;
  _editor;
  constructor($, g) {
    this._gutterSet = new Set(g.map((W) => typeof W == "string" ? W : W.className)), this._editor = $;
  }
  hasKey($) {
    return this._gutterSet.has($);
  }
  clear($) {
    this._editor.clearGutter($);
  }
  add($, g, W) {
    if (!this.hasKey(g)) throw new Error(`Not allowed key '${g}'`);
    this._editor.setGutterMarker($, g, W);
  }
  remove($, g) {
    if (!this.hasKey(g)) throw new Error(`Not allowed key '${g}'`);
    this._editor.setGutterMarker($, g, null);
  }
}
const sf = ["CodeMirror-linenumbers"];
class hf extends Ku {
  editor;
  _showWhitespace = !1;
  _showNextLineSymbol = !1;
  _gutterManager;
  constructor({
    contextElement: $,
    mode: g = "ir-db-rule",
    code: W = "",
    keyEvents: G,
    gutters: J = sf
  }) {
    super({ contextElement: $ }), $.classList.add("editor"), this.editor = Re($, {
      lineNumbers: !0,
      gutters: J,
      mode: of[g] ?? "text/plain",
      theme: "idea",
      tabSize: 4,
      indentWithTabs: !1,
      smartIndent: !0,
      autofocus: !0,
      extraKeys: {
        "Ctrl-Space": "autocomplete",
        "Ctrl-F": Ms,
        "Shift-Ctrl-F": Ms,
        Tab: (_) => {
          _.replaceSelection("    ");
        },
        ...G
      },
      hintOptions: {},
      dragDrop: !0,
      allowDropFileTypes: ["text/x-sql", "text/plain"],
      phrases: {
        "Search:": Tt.t("editor.search"),
        "(Use /re/ syntax for regexp search)": Tt.t("editor.regex"),
        "Replace:": Tt.t("editor.replace"),
        "With:": Tt.t("editor.with"),
        "Replace?": Tt.t("editor.replaceYN"),
        Yes: Tt.t("editor.yes"),
        No: Tt.t("editor.no"),
        All: Tt.t("editor.all"),
        Stop: Tt.t("editor.stop")
      }
    }), this.editor.on("gutterClick", (_, O) => {
      this.onGutterClick(O);
    }), this._gutterManager = new af(this.editor, J), this.editor.setSize("100%", "100%"), this.code = W, this.onDestroy = () => this.editor.getWrapperElement().remove();
  }
  get componentLabel() {
    return "editor";
  }
  get cursor() {
    const $ = this.editor.getCursor("from"), g = this.editor.getCursor("to"), W = this.contextElement.querySelector(".CodeMirror-cursor") ?? this.contextElement.querySelector(".CodeMirror-selected");
    return {
      startY: $.line,
      startX: $.ch,
      endY: g.line,
      endX: g.ch,
      x: W?.offsetLeft ?? 0,
      y: W?.offsetTop ?? 0
    };
  }
  get lineCount() {
    return this.editor.lineCount();
  }
  get selectedText() {
    return this.editor.getSelection();
  }
  get currentLine() {
    return this.editor.getDoc().getLine(this.cursor.startY);
  }
  get code() {
    return this.editor.getDoc().getValue();
  }
  get showWhitespace() {
    return this._showWhitespace;
  }
  get showNextLineSymbol() {
    return this._showNextLineSymbol;
  }
  set code($) {
    this.editor.getDoc().setValue($);
  }
  set showWhitespace($) {
    $ !== this._showWhitespace && (this._showWhitespace = $, this.refreshOverlay());
  }
  set showNextLineSymbol($) {
    $ !== this._showNextLineSymbol && (this._showNextLineSymbol = $, this._showNextLineSymbol ? this.contextElement.classList.add("editor--new-line") : this.contextElement.classList.remove("editor--new-line"), this.refreshOverlay());
  }
  refreshOverlay() {
    this.editor.removeOverlay("ir-editor-overlay"), this.editor.addOverlay({
      name: "ir-editor-overlay",
      token: ($) => {
        const g = $.peek(), W = [];
        return this._showWhitespace && g === " " && W.push(`ir-editor-whitespace ir-editor-whitespace-${$.pos % 2 === 0 ? "even" : "odd"}`), $.next(), this._showNextLineSymbol && $.eol() && W.push("ir-editor-next-line"), W.length === 0 ? void 0 : W.join(" ");
      }
    });
  }
  replaceLineText($) {
    const g = this.editor.lastLine();
    for (let W = 0; W <= g; W++) {
      const G = this.editor.getLine(W);
      this.editor.replaceRange($(G), { line: W, ch: 0 }, { line: W, ch: G.length });
    }
  }
  toLowerCase() {
    this.replaceLineText(($) => $.toLowerCase());
  }
  toUpperCase() {
    this.replaceLineText(($) => $.toUpperCase());
  }
  hasLineGutter($, g) {
    const W = this.editor.lineInfo($);
    return W ? W.gutterMarkers && W.gutterMarkers[g] !== void 0 : !1;
  }
  clearGutters($) {
    this._gutterManager.clear($);
  }
  addLineGutter($, g, W) {
    this._gutterManager.add($, g, W);
  }
  removeLineGutter($, g) {
    this._gutterManager.remove($, g);
  }
  addLineClass($, g, W) {
    this.editor.addLineClass($, g, W);
  }
  removeLineClass($, g, W) {
    this.editor.removeLineClass($, g, W);
  }
  getLineText($) {
    return this.editor.getDoc().getLine($);
  }
  openFindDialog() {
    this.editor.execCommand("findPersistent");
  }
  getSearchCursor($, g = 0, W = 0) {
    return this.editor.getSearchCursor($, { line: g, ch: W });
  }
  openReplaceDialog() {
    this.editor.execCommand("replace");
  }
  setSelection($, g, W, G) {
    this.editor.focus(), this.editor.setSelection({
      line: $,
      ch: g
    }, {
      line: W,
      ch: G
    });
  }
  getTextWithCursor($, g, W, G) {
    const J = [];
    if (W = Math.min(W, this.lineCount - 1), $ === W)
      J.push(this.getLineText($).substring(g, G));
    else {
      J.push(this.getLineText($).substring(g));
      for (let _ = $ + 1; _ < W; _++)
        J.push(this.getLineText(_));
      J.push(this.getLineText(W).substring(0, G));
    }
    return J.join(`
`);
  }
  getPreText($, g) {
    return this.getTextWithCursor(0, 0, $, g);
  }
  getPostText($, g) {
    const W = this.getLineText(this.lineCount - 1);
    return this.getTextWithCursor($, g, this.lineCount - 1, W.length);
  }
  /* Event */
  onGutterClick($) {
  }
}
export {
  hf as IREditor
};
//# sourceMappingURL=editor.js.map
