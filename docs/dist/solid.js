import { o as R, t as g, c as f, I as W, a as b, u as x, b as s, s as S, i as v, d as a, M as H, e as A, S as T, f as V, F, g as $, h as M, r as I, j as _, k as j, m as B } from "./chunks/grid-JHn50Ti0.js";
import { g as G } from "./chunks/floating-C8SHvpqf.js";
import { M as m, N as E, a as c, O as L, P as C, _ as O, Q as N, R as w, S as J, T as Q } from "./chunks/css-COHHTvb1.js";
import "./chunks/index-Bmt0z1bM.js";
import { I as Z } from "./chunks/flowchart-BrAWtA3S.js";
import { I as q } from "./chunks/editor-C8hvjSht.js";
import { c as d } from "./chunks/clsx-OuTLNxxd.js";
import { I as z } from "./chunks/index-CtZXoe_l.js";
import { d as K } from "./chunks/rx-state-PaqZIPpP.js";
var U = /* @__PURE__ */ g("<div>");
function Et(e) {
  let n;
  return R(() => {
    const t = new W({
      contextElement: n,
      ...e
    });
    e.ref instanceof Function ? e.ref?.(t) : e.ref = t, e.onInitGrid?.(t), b(() => {
      e.onCleanup?.(t), t.destroy();
    });
  }), (() => {
    var t = U(), i = n;
    return typeof i == "function" ? x(i, t) : n = t, f((l) => {
      var r = e.class, o = e.style;
      return r !== l.e && s(t, l.e = r), l.t = S(t, o, l.t), l;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
}
var X = /* @__PURE__ */ g("<div>");
function Lt(e) {
  let n;
  return R(() => {
    const t = new Z({
      contextElement: n,
      width: e.width,
      height: e.height,
      theme: e.theme
    });
    e.ref instanceof Function ? e.ref?.(t) : e.ref = t, e.onInitFlowchart?.(t), b(() => {
      t.destroy();
    });
  }), (() => {
    var t = X(), i = n;
    return typeof i == "function" ? x(i, t) : n = t, f((l) => {
      var r = e.class, o = e.style;
      return r !== l.e && s(t, l.e = r), l.t = S(t, o, l.t), l;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
}
var Y = /* @__PURE__ */ g("<div>");
function kt(e) {
  let n;
  return R(() => {
    const t = new q({
      contextElement: n,
      mode: e.mode,
      code: e.code
    });
    e.ref = t, b(() => t.destroy());
  }), (() => {
    var t = Y(), i = n;
    return typeof i == "function" ? x(i, t) : n = t, t;
  })();
}
var tt = /* @__PURE__ */ g("<img width=16 height=16 alt=favicon>"), et = /* @__PURE__ */ g("<div><span>"), nt = /* @__PURE__ */ g('<i class="ir-icon ir-icon-text ir-icon--md ir-icon--cloud">');
const it = d(E, m({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "lg",
  fontWeight: "medium",
  paddingLeft: "xs",
  paddingRight: "sm",
  height: "input",
  gap: "xxs"
})), rt = d(c.textEllipsis, c.flex110);
function Pt(e) {
  return (() => {
    var t = et(), i = t.firstChild, l = n;
    return typeof l == "function" ? x(l, t) : n = t, v(t, a(T, {
      get fallback() {
        return (() => {
          var r = nt();
          return f((o) => (o = e.displayOptions.color ?? "currentcolor") != null ? r.style.setProperty("color", o) : r.style.removeProperty("color")), r;
        })();
      },
      get children() {
        return a(H, {
          get when() {
            return e.displayOptions.icon;
          },
          get children() {
            var r = tt();
            return f((o) => {
              var u = m({
                marginRight: "3xs"
              }), h = e.displayOptions.icon;
              return u !== o.e && s(r, o.e = u), h !== o.t && A(r, "src", o.t = h), o;
            }, {
              e: void 0,
              t: void 0
            }), r;
          }
        });
      }
    }), i), s(i, rt), v(i, () => e.displayOptions.serverAlias), f((r) => {
      var o = d(it, e.class), u = {
        "background-color": `hsl(${O.backgroundHsl.light} / 0.2)`,
        ...e.style
      }, h = e.displayOptions.fontColor, y = e.displayOptions.fontSize;
      return o !== r.e && s(t, r.e = o), r.t = S(t, u, r.t), h !== r.a && ((r.a = h) != null ? i.style.setProperty("color", h) : i.style.removeProperty("color")), y !== r.o && ((r.o = y) != null ? i.style.setProperty("font-size", y) : i.style.removeProperty("font-size")), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), t;
  })();
  function n(t) {
    L(t, {
      [C.maxWidth]: "180px"
    });
  }
}
var ot = /* @__PURE__ */ g("<div>"), lt = /* @__PURE__ */ g("<button><i></i><span></span><i data-action=close>");
const P = N.lg, at = m({
  position: "fixed",
  display: "flex",
  gap: "xs"
});
function st(e) {
  return (() => {
    var i = ot(), l = n;
    return typeof l == "function" ? x(l, i) : n = i, s(i, at), v(i, a($, {
      get when() {
        return e.dialogList.length > 0;
      },
      get children() {
        return a(F, {
          get each() {
            return e.dialogList;
          },
          children: (r) => a(dt, {
            dialogInfo: r,
            get handleClick() {
              return e.onClick;
            }
          })
        });
      }
    })), f((r) => S(i, t(e.placement, e.offset), r)), i;
  })();
  function n(i) {
    L(i, {
      [w.default]: "0.5",
      [w.hover]: "1",
      [w.active]: "0.8",
      [C.minWidth]: "60px",
      [C.maxWidth]: "170px"
    });
  }
  function t(i = "bottom-right", l = {
    x: 0,
    y: 0
  }) {
    const [r, o] = i.split("-");
    return {
      [r]: `calc(${P} + ${l.y}px)`,
      [o]: `calc(${P} + ${l.x}px)`
    };
  }
}
const ct = m({
  display: "flex",
  alignItems: "center",
  padding: "xxs",
  gap: "xxs",
  backgroundColor: "light",
  boxShadow: "md",
  borderRadius: "sm",
  color: "default"
});
function dt(e) {
  return (() => {
    var n = lt(), t = n.firstChild, i = t.nextSibling, l = i.nextSibling;
    return n.$$click = e.handleClick, n.$$clickData = e.dialogInfo.instance, v(i, () => e.dialogInfo.title), f((r) => {
      var o = d(ct, J), u = d("ir-icon", e.dialogInfo.icon), h = d(E, c.textEllipsis, c.textAlign.left), y = `ir-icon ir-icon--close ${m({
        marginLeft: "xs"
      })}`;
      return o !== r.e && s(n, r.e = o), u !== r.t && s(t, r.t = u), h !== r.a && s(i, r.a = h), y !== r.o && s(l, r.o = y), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), n;
  })();
}
V(["click"]);
class Dt extends z {
  constructor(n = {}) {
    super({
      contextElement: document.createElement("div")
    }), this._args = n, this._mount();
  }
  _dialogListSignal = M([]);
  _cleanupRender = null;
  get componentLabel() {
    return "dialog-manager";
  }
  add(n) {
    this._setDialogList([...this._dialogList, n]);
    const t = () => {
      this.remove(n.instance), n.instance.hook.removeSyncHook("show", t);
    };
    n.instance.hook.addSyncHook("show", t);
  }
  remove(n) {
    this._setDialogList(this._dialogList.filter((t) => t.instance !== n));
  }
  get _dialogList() {
    return this._dialogListSignal[0]();
  }
  _setDialogList(n) {
    this._dialogListSignal[1](n);
  }
  clear() {
    this._setDialogList([]);
  }
  onDestroy() {
    this.clear(), this._cleanupRender?.(), this._cleanupRender = null;
  }
  /** 내부 렌더링 마운트 */
  _mount() {
    this._cleanupRender = I(() => {
      const n = this;
      return a(st, {
        onClick: (t, i) => {
          i.target instanceof HTMLElement && (i.target.closest("[data-action='close']") ? n.remove(t) : i.target.closest("button") && t.show());
        },
        get placement() {
          return n._args.placement;
        },
        get offset() {
          return n._args.offset;
        },
        get dialogList() {
          return n._dialogListSignal[0]();
        }
      });
    }, this.contextElement), G(this._args.layer ?? "floating").append(this.contextElement);
  }
}
var k = /* @__PURE__ */ g("<div>"), ut = /* @__PURE__ */ g("<div><span>");
const gt = d(m({
  display: "flex",
  alignItems: "center",
  paddingLeft: "lg",
  paddingRight: "lg",
  whiteSpace: "nowrap",
  backgroundColor: "light",
  color: "light",
  fontSize: "h5",
  gap: "lg"
}), Q, c.overflow.hidden, c.border.top), p = d(m({
  display: "flex",
  alignItems: "center",
  gap: "lg"
}), E, c.flex11Auto, c.minWidthZero, c.overflow.hidden), ht = d(p, m({
  justifyContent: "flex-start"
})), ft = d(p, m({
  marginLeft: "auto",
  justifyContent: "flex-end"
}));
function mt(e) {
  const n = _(() => e.items.filter((o) => o.layout === "left")), t = _(() => e.items.filter((o) => o.layout === "right")), i = _(() => n().length > 0), l = _(() => t().length > 0);
  return (() => {
    var o = k(), u = r;
    return typeof u == "function" ? x(u, o) : r = o, s(o, gt), v(o, a($, {
      get when() {
        return i();
      },
      get children() {
        return a(D, {
          layout: "left",
          get items() {
            return n();
          },
          class: ht
        });
      }
    }), null), v(o, a($, {
      get when() {
        return l();
      },
      get children() {
        return a(D, {
          layout: "right",
          get items() {
            return t();
          },
          class: ft
        });
      }
    }), null), o;
  })();
  function r(o) {
    L(o, {
      [C.height]: "26px"
    });
  }
}
function D(e) {
  return (() => {
    var n = k();
    return v(n, a(F, {
      get each() {
        return e.items;
      },
      children: (t, i) => [a(vt, t), a($, {
        get when() {
          return i() < e.items.length - 1;
        },
        get children() {
          return a(yt, {});
        }
      })]
    })), f((t) => {
      var i = e.class, l = e.layout;
      return i !== t.e && s(n, t.e = i), l !== t.t && A(n, "data-layout", t.t = l), t;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
}
function vt(e) {
  return (() => {
    var n = ut(), t = n.firstChild;
    return j(n, B({
      get class() {
        return d(c.textEllipsis, e.flexible ? c.flex01Auto : c.flex00Auto);
      },
      get style() {
        return {
          "max-width": e.maxWidth
        };
      }
    }, () => e.tooltip ? {
      "data-ir-tooltip": !0,
      "data-ir-tooltip-text": e.tooltip
    } : {}), !1, !0), v(t, () => e.text), n;
  })();
}
function yt() {
  return (() => {
    var e = k();
    return e.style.setProperty("height", "14px"), e.style.setProperty("width", "1px"), f((n) => {
      var t = c.flex00Auto, i = O.borderColor.default;
      return t !== n.e && s(e, n.e = t), i !== n.t && ((n.t = i) != null ? e.style.setProperty("background-color", i) : e.style.removeProperty("background-color")), n;
    }, {
      e: void 0,
      t: void 0
    }), e;
  })();
}
class At extends z {
  constructor(n) {
    super({
      contextElement: n.contextElement
    }), this._args = n, this._tooltipContainer = K({
      containerElement: this.contextElement,
      placement: "top",
      offset: 10
    }), this.setItems(this._args.items), this._mount();
  }
  _itemsSignal = M([]);
  _cleanupRender = null;
  _tooltipContainer;
  get componentLabel() {
    return "status-bar";
  }
  setItems(n) {
    this._itemsSignal[1](n);
  }
  onDestroy() {
    this._tooltipContainer.destroy(), this.setItems([]), this._cleanupRender?.(), this._cleanupRender = null;
  }
  _mount() {
    this._cleanupRender = I(() => {
      const n = this;
      return a(mt, {
        get items() {
          return n._itemsSignal[0]();
        }
      });
    }, this.contextElement);
  }
}
const Ft = { render: I, createComponent: a };
export {
  Pt as DisplayAlias,
  kt as Editor,
  Lt as Flowchart,
  Et as Grid,
  Dt as IRDialogManager,
  At as IRStatusBar,
  Ft as solidJS
};
//# sourceMappingURL=solid.js.map
