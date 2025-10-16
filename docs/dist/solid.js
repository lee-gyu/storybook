import { t as h, u as $, i as d, c as o, a as c, b as f, s as k, S as x, d as E, e as M, F as D, f as P, r as S, g as W, m as H, h as T, j as _, M as V, k as F } from "./chunks/web-DZ7STt1e.js";
import { g as j } from "./chunks/floating-CuQzApa0.js";
import { N as m, O as b, a as s, P as w, Q as y, _ as A, R as B, S as C, T as N, U as J } from "./chunks/css-CjgUAAH1.js";
import { c as u } from "./chunks/clsx-OuTLNxxd.js";
import { I as z } from "./chunks/index-DB46QZ1i.js";
import { a as Q } from "./chunks/tooltip-container-BnLoeWzv.js";
var U = /* @__PURE__ */ h("<img width=16 height=16 alt=favicon>"), Z = /* @__PURE__ */ h("<div><span>");
const q = u(b, m({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "lg",
  fontWeight: "medium",
  paddingLeft: "xs",
  paddingRight: "sm",
  height: "input",
  gap: "xxs"
})), G = u(s.textEllipsis, s.flex110);
function St(e) {
  return (() => {
    var n = Z(), i = n.firstChild, a = t;
    return typeof a == "function" ? $(a, n) : t = n, d(n, o(x, {
      get when() {
        return e.displayOptions.icon;
      },
      get children() {
        var l = U();
        return f((r) => {
          var g = m({
            marginRight: "3xs"
          }), v = e.displayOptions.icon;
          return g !== r.e && c(l, r.e = g), v !== r.t && k(l, "src", r.t = v), r;
        }, {
          e: void 0,
          t: void 0
        }), l;
      }
    }), i), c(i, G), d(i, () => e.displayOptions.serverAlias), f((l) => {
      var r = u(q, e.class), g = {
        "background-color": `hsl(${A.backgroundHsl.light} / 0.2)`,
        ...e.style
      }, v = e.displayOptions.fontColor, p = e.displayOptions.fontSize;
      return r !== l.e && c(n, l.e = r), l.t = E(n, g, l.t), v !== l.a && ((l.a = v) != null ? i.style.setProperty("color", v) : i.style.removeProperty("color")), p !== l.o && ((l.o = p) != null ? i.style.setProperty("font-size", p) : i.style.removeProperty("font-size")), l;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), n;
  })();
  function t(n) {
    w(n, {
      [y.maxWidth]: "180px"
    });
  }
}
var K = /* @__PURE__ */ h("<div>"), X = /* @__PURE__ */ h("<i>"), Y = /* @__PURE__ */ h("<button><span></span><i data-action=close>");
const R = B.lg, tt = m({
  position: "fixed",
  display: "flex",
  gap: "xs"
});
function et(e) {
  return (() => {
    var i = K(), a = t;
    return typeof a == "function" ? $(a, i) : t = i, c(i, tt), d(i, o(x, {
      get when() {
        return e.dialogList.length > 0;
      },
      get children() {
        return o(D, {
          get each() {
            return e.dialogList;
          },
          children: (l) => o(it, {
            dialogInfo: l,
            get handleClick() {
              return e.onClick;
            }
          })
        });
      }
    })), f((l) => E(i, n(e.placement, e.offset), l)), i;
  })();
  function t(i) {
    w(i, {
      [C.default]: "0.5",
      [C.hover]: "1",
      [C.active]: "0.8",
      [y.minWidth]: "60px",
      [y.maxWidth]: "170px"
    });
  }
  function n(i = "bottom-right", a = {
    x: 0,
    y: 0
  }) {
    const [l, r] = i.split("-");
    return {
      [l]: `calc(${R} + ${a.y}px)`,
      [r]: `calc(${R} + ${a.x}px)`
    };
  }
}
const nt = m({
  display: "flex",
  alignItems: "center",
  padding: "xxs",
  gap: "xxs",
  backgroundColor: "light",
  boxShadow: "md",
  borderRadius: "sm",
  color: "default"
});
function it(e) {
  return (() => {
    var t = Y(), n = t.firstChild, i = n.nextSibling;
    return t.$$click = e.handleClick, t.$$clickData = e.dialogInfo.instance, d(t, o(x, {
      get when() {
        return e.dialogInfo.icon;
      },
      get children() {
        var a = X();
        return f(() => c(a, u("ir-icon", e.dialogInfo.icon))), a;
      }
    }), n), d(n, () => e.dialogInfo.title), f((a) => {
      var l = u(nt, N), r = u(b, s.textEllipsis, s.textAlign.left), g = `ir-icon ir-icon--close ${m({
        marginLeft: "xs"
      })}`;
      return l !== a.e && c(t, a.e = l), r !== a.t && c(n, a.t = r), g !== a.a && c(i, a.a = g), a;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), t;
  })();
}
M(["click"]);
class bt extends z {
  constructor(t = {}) {
    super({
      contextElement: document.createElement("div")
    }), this._args = t, this._mount();
  }
  _dialogListSignal = P([]);
  _cleanupRender = null;
  get componentLabel() {
    return "dialog-manager";
  }
  add(t) {
    this._setDialogList([...this._dialogList, t]);
    const n = () => {
      this.remove(t.instance), t.instance.hook.removeSyncHook("show", n);
    };
    t.instance.hook.addSyncHook("show", n);
  }
  remove(t) {
    this._setDialogList(this._dialogList.filter((n) => n.instance !== t));
  }
  get _dialogList() {
    return this._dialogListSignal[0]();
  }
  _setDialogList(t) {
    this._dialogListSignal[1](t);
  }
  clear() {
    this._setDialogList([]);
  }
  onDestroy() {
    this.clear(), this._cleanupRender?.(), this._cleanupRender = null;
  }
  /** 내부 렌더링 마운트 */
  _mount() {
    this._cleanupRender = S(() => {
      const t = this;
      return o(et, {
        onClick: (n, i) => {
          i.target instanceof HTMLElement && (i.target.closest("[data-action='close']") ? t.remove(n) : i.target.closest("button") && n.show());
        },
        get placement() {
          return t._args.placement;
        },
        get offset() {
          return t._args.offset;
        },
        get dialogList() {
          return t._dialogListSignal[0]();
        }
      });
    }, this.contextElement), j(this._args.layer ?? "floating").append(this.contextElement);
  }
}
var rt = /* @__PURE__ */ h("<div><span>");
function lt(e) {
  return (() => {
    var t = rt(), n = t.firstChild;
    return W(t, H({
      get class() {
        return u(s.textEllipsis, e.flexible ? s.flex01Auto : s.flex00Auto);
      },
      get style() {
        return {
          "max-width": e.maxWidth
        };
      }
    }, () => e.tooltip ? {
      "data-ir-tooltip": !0,
      "data-ir-tooltip-text": e.tooltip
    } : {}), !1, !0), d(n, () => e.text ?? ""), t;
  })();
}
var at = /* @__PURE__ */ h("<div>"), ot = /* @__PURE__ */ h("<button><i></i><span>");
const st = T({
  listItems: []
});
function ct(e) {
  return o(st.Provider, {
    get value() {
      return {
        listItems: e.listItems ?? []
      };
    },
    get children() {
      var t = at();
      return d(t, o(ut, {
        iconClass: "ir-favicon ir-favicon-builder",
        text: "InnoRules"
      })), t;
    }
  });
}
function ut(e) {
  return (() => {
    var t = ot(), n = t.firstChild, i = n.nextSibling;
    return d(i, () => e.text), f(() => c(n, e.iconClass)), t;
  })();
}
var I = /* @__PURE__ */ h("<div>");
const dt = u(m({
  display: "flex",
  alignItems: "center",
  paddingLeft: "lg",
  paddingRight: "lg",
  whiteSpace: "nowrap",
  backgroundColor: "light",
  color: "light",
  fontSize: "h5",
  gap: "lg"
}), J, s.overflow.hidden, s.border.top), O = u(m({
  display: "flex",
  alignItems: "center",
  gap: "lg"
}), b, s.flex11Auto, s.minWidthZero, s.overflow.hidden), gt = u(O, m({
  justifyContent: "flex-start"
})), ht = u(O, m({
  marginLeft: "auto",
  justifyContent: "flex-end"
}));
function mt(e) {
  const t = _(() => e.items.filter((r) => r.layout === "left")), n = _(() => e.items.filter((r) => r.layout === "right")), i = _(() => t().length > 0), a = _(() => n().length > 0);
  return (() => {
    var r = I(), g = l;
    return typeof g == "function" ? $(g, r) : l = r, c(r, dt), d(r, o(x, {
      get when() {
        return i();
      },
      get children() {
        return o(L, {
          layout: "left",
          get items() {
            return t();
          },
          class: gt
        });
      }
    }), null), d(r, o(x, {
      get when() {
        return a();
      },
      get children() {
        return o(L, {
          layout: "right",
          get items() {
            return n();
          },
          class: ht
        });
      }
    }), null), r;
  })();
  function l(r) {
    w(r, {
      [y.height]: "26px"
    });
  }
}
function L(e) {
  return (() => {
    var t = I();
    return d(t, o(D, {
      get each() {
        return e.items;
      },
      children: (n, i) => [o(ft, n), o(x, {
        get when() {
          return i() < e.items.length - 1;
        },
        get children() {
          return o(vt, {});
        }
      })]
    })), f((n) => {
      var i = e.class, a = e.layout;
      return i !== n.e && c(t, n.e = i), a !== n.t && k(t, "data-layout", n.t = a), n;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
}
function ft(e) {
  const t = () => e.type ?? "text";
  return o(F, {
    get fallback() {
      return o(lt, e);
    },
    get children() {
      return o(V, {
        get when() {
          return t() === "dropdown-list";
        },
        get children() {
          return o(ct, e);
        }
      });
    }
  });
}
function vt() {
  return (() => {
    var e = I();
    return e.style.setProperty("height", "14px"), e.style.setProperty("width", "1px"), f((t) => {
      var n = s.flex00Auto, i = A.borderColor.default;
      return n !== t.e && c(e, t.e = n), i !== t.t && ((t.t = i) != null ? e.style.setProperty("background-color", i) : e.style.removeProperty("background-color")), t;
    }, {
      e: void 0,
      t: void 0
    }), e;
  })();
}
class wt extends z {
  constructor(t) {
    super({
      contextElement: t.contextElement
    }), this._args = t, this._tooltipContainer = Q({
      containerElement: this.contextElement,
      placement: "top",
      offset: 10
    }), this.setItems(this._args.items), this._mount();
  }
  _itemsSignal = P([]);
  _cleanupRender = null;
  _tooltipContainer;
  get componentLabel() {
    return "status-bar";
  }
  setItems(t) {
    this._itemsSignal[1](t);
  }
  onDestroy() {
    this._tooltipContainer.destroy(), this.setItems([]), this._cleanupRender?.(), this._cleanupRender = null;
  }
  _mount() {
    this._cleanupRender = S(() => {
      const t = this;
      return o(mt, {
        get items() {
          return t._itemsSignal[0]();
        }
      });
    }, this.contextElement);
  }
}
const It = { render: S, createComponent: o };
export {
  St as DisplayAlias,
  bt as IRDialogManager,
  wt as IRStatusBar,
  It as solidJS
};
