import { aU as p } from "./chunks/_init-B0xIPnhF.js";
import { q as x, a as E, g as H, b as O, d as R, f as M, s as P } from "./chunks/floating-COQGiF1T.js";
import { m as te, c as oe, n as ne, l as ie, o as ae, p as re, r as se, u as le } from "./chunks/floating-COQGiF1T.js";
import { m as A, f as N, q as v, S as k } from "./chunks/rx-state-R2lsZxJ3.js";
import { C as de, R as me, e as ue, o as pe, c as fe, a as ge, j as he, g as Ee, b as ve, d as Le, n as Te, i as Ce, s as _e, r as Ie, k as be, p as Se, h as we, x as ye } from "./chunks/rx-state-R2lsZxJ3.js";
import { v as U } from "./chunks/v4-Cgt9uYzN.js";
import { a as He, c as Oe, d as Re, g as Me, b as Pe } from "./chunks/image-Y3tFDdOU.js";
import { L as Ne } from "./chunks/logger-BzjoGhbK.js";
const Q = () => U(), $ = 4, B = () => {
  const n = document.createElement("div"), t = document.createElement("div");
  n.className = p.base, t.className = p.items;
  for (let o = 0; o < $; o++)
    t.appendChild(x({ tag: "i", className: p.item }).element);
  return n.appendChild(t), n;
}, D = 150, L = /* @__PURE__ */ (() => {
  let n = null;
  function t() {
    const o = [];
    let r = !1;
    function s(e) {
      o.forEach((a) => a.updatePos());
    }
    return {
      addLoadingElement(e) {
        o.findIndex((l) => l === e) === -1 && o.push(e), r || (window.addEventListener("scroll", s, { capture: !0 }), r = !0);
      },
      removeLoadingElement(e) {
        const a = o.findIndex((l) => l === e);
        a !== -1 && o.splice(a, 1), o.length === 0 && (window.removeEventListener("scroll", s, { capture: !0 }), r = !1);
      }
    };
  }
  return () => n || (n = t());
})();
class F {
  constructor(t) {
    this._loadingElement = null, this._timeoutHandler = -1, this._refElement = t.refElement, this._onClick = t.onClick, this._startDelay = t.startDelay;
  }
  getLoadingElement() {
    return this._loadingElement || (this._loadingElement = B(), this._loadingElement.onclick = this._onClick), this._loadingElement;
  }
  updatePos() {
    const t = this._refElement.getBoundingClientRect(), o = this.getLoadingElement();
    o.style.top = `${t.y}px`, o.style.left = `${t.x}px`, o.style.height = `${t.height}px`, o.style.width = `${t.width}px`;
  }
  visibleAction() {
    this._refElement.after(this.getLoadingElement());
  }
  show() {
    this.updatePos(), L().addLoadingElement(this), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.visibleAction(), this._startDelay);
  }
  remove() {
    this.getLoadingElement().remove(), L().removeLoadingElement(this);
  }
  hide() {
    this.getLoadingElement().classList.remove("is-visible"), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.remove(), D);
  }
}
const V = ({
  contextElement: n,
  onClick: t = () => {
  },
  startDelay: o = 0
}) => new F({
  refElement: n,
  startDelay: o,
  onClick: t
});
function z(n, t, o, r) {
  O(n, t, {
    placement: o,
    strategy: "fixed",
    middleware: [
      R(r),
      M(),
      P({ padding: 5 })
    ]
  }).then(({ x: s, y: e, placement: a }) => {
    t.style.left = `${s}px`, t.style.top = `${e}px`, t.dataset.placement = a;
  });
}
function W(n) {
  const {
    containerElement: t,
    placement: o = "bottom",
    offset: r = 8,
    interval: s = 0
  } = n;
  let e = null;
  const { tooltipElement: a, updateText: l } = A();
  function m(i) {
    return {
      text: i.dataset.irTooltipText ?? "",
      refMode: i.dataset.irTooltipRefMode ?? "element",
      placement: i.dataset.irTooltipPlacement ?? o,
      offset: v(i.dataset.irTooltipOffset, r),
      interval: v(i.dataset.irTooltipInterval, s)
    };
  }
  function d(i) {
    const {
      text: c,
      refMode: T,
      interval: C,
      placement: _,
      offset: I
    } = m(i);
    let u = null;
    const h = () => {
      if (!u)
        throw new Error("Reference element is not set");
      z(u, a, _, I);
    }, b = () => {
      l(c), H("popover").appendChild(a), h();
    }, S = () => {
      a.remove();
    }, w = window.setTimeout(() => b(), C);
    return {
      refElement: i,
      setReferenceEl(y) {
        u = y;
      },
      updateLocation: h,
      get isPointerMode() {
        return T === "pointer";
      },
      cleanup() {
        clearTimeout(w), e = null, S();
      }
    };
  }
  const f = (i) => {
    const c = N("[data-ir-tooltip]", ".ir-tooltip-container", i.target);
    if (!c || !(c instanceof HTMLElement)) {
      e == null || e.cleanup();
      return;
    }
    if ((e == null ? void 0 : e.refElement) === c) {
      e.isPointerMode && (e.setReferenceEl(E(i.clientX, i.clientY)), e.updateLocation());
      return;
    }
    e == null || e.cleanup(), e = d(c), e.setReferenceEl(e.isPointerMode ? E(i.clientX, i.clientY) : c);
  }, g = () => {
    e == null || e.cleanup();
  };
  return t.classList.add("ir-tooltip-container"), t.addEventListener("mousemove", f), t.addEventListener("mouseleave", g), {
    destroy() {
      e == null || e.cleanup(), t.removeEventListener("mousemove", f), t.removeEventListener("mouseleave", g);
    },
    cleanup() {
      e == null || e.cleanup();
    }
  };
}
const G = {
  gutterCls: "thick",
  direction: "horizontal",
  borderColor: "border",
  snapOffset: 10,
  dragInterval: 5
}, j = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
};
function Z(n, t) {
  const o = Object.assign({}, G, t), { gutterCls: r, direction: s, borderColor: e } = o;
  return {
    ...k(n, {
      ...o,
      gutterSize: j.gutterSize[r],
      gutter: l()
    })
  };
  function l() {
    const m = [
      "gutter",
      `gutter--${s}`,
      `gutter--${r}`,
      `gutter--${e}`
    ].join(" ");
    return () => {
      const d = document.createElement("div");
      return d.className = m, d;
    };
  }
}
export {
  de as ClipboardManager,
  Ne as Logger,
  me as ReactiveState,
  ue as appendElement,
  pe as blobToStr,
  te as clearGlobalKeyListener,
  N as closest,
  fe as clsZId,
  ge as createClickOutsideHandler,
  he as createCustomIcon,
  oe as createESCHideController,
  Ee as createElement,
  ne as createFloatingHandler,
  ve as createIconElement,
  He as createImageFromSrcUrl,
  V as createLoadingHandler,
  Oe as createObjectURLFromSvg,
  ie as createPopover,
  Z as createSplitContainer,
  Le as createTooltip,
  Te as createTooltipBySelector,
  W as createTooltipContainer,
  Re as downloadDataURL,
  Ce as forEachBySize,
  _e as forEachFilterBySize,
  Ie as get2DGenerator,
  Me as getBase64FromSvg,
  be as getIRIconPng,
  Pe as getImageBlobFromImage,
  Se as getMinMaxBetween,
  we as getTextWidthContext,
  A as getTooltipElements,
  E as getVirtualEl,
  ae as offsetBottomAutoUpdate,
  v as parseInt,
  re as peekESCStack,
  se as registerGlobalKeyListener,
  le as unregisterGlobalKeyListener,
  Q as uuid,
  ye as xss
};
//# sourceMappingURL=utility.js.map
