import { a_ as p } from "./chunks/_init-Cv3gCb_1.js";
import { q as y, i as E, g as H, k as O, l as R, m as M, n as P } from "./chunks/floating-fOdDS7jf.js";
import { h as te, c as oe, j as ne, f as ae, o as ie, p as re, r as se, u as le } from "./chunks/floating-fOdDS7jf.js";
import { m as k, f as A, q as v, S as N } from "./chunks/rx-state-wgOnLidQ.js";
import { C as de, R as me, e as ue, o as pe, c as fe, a as ge, j as he, g as Ee, b as ve, d as Le, n as Te, i as Ce, s as xe, r as _e, k as Ie, p as Se, h as be, x as we } from "./chunks/rx-state-wgOnLidQ.js";
import { v as D } from "./chunks/v4-Cgt9uYzN.js";
import { a as He, c as Oe, d as Re, g as Me, b as Pe } from "./chunks/image-Y3tFDdOU.js";
import { L as Ae } from "./chunks/logger-C1WxLZjH.js";
const V = () => D(), $ = 4, B = () => {
  const n = document.createElement("div"), e = document.createElement("div");
  n.className = p.base, e.className = p.items;
  for (let t = 0; t < $; t++)
    e.appendChild(y({ tag: "i", className: p.item }).element);
  return n.appendChild(e), n;
}, U = 150, L = /* @__PURE__ */ (() => {
  let n = null;
  function e() {
    const t = [];
    let r = !1;
    function s(o) {
      t.forEach((i) => i.updatePos());
    }
    return {
      addLoadingElement(o) {
        t.findIndex((l) => l === o) === -1 && t.push(o), r || (window.addEventListener("scroll", s, { capture: !0 }), r = !0);
      },
      removeLoadingElement(o) {
        const i = t.findIndex((l) => l === o);
        i !== -1 && t.splice(i, 1), t.length === 0 && (window.removeEventListener("scroll", s, { capture: !0 }), r = !1);
      }
    };
  }
  return () => n || (n = e());
})();
class F {
  _refElement;
  _onClick;
  _startDelay;
  _loadingElement = null;
  _timeoutHandler = -1;
  constructor(e) {
    this._refElement = e.refElement, this._onClick = e.onClick, this._startDelay = e.startDelay;
  }
  getLoadingElement() {
    return this._loadingElement || (this._loadingElement = B(), this._loadingElement.onclick = this._onClick), this._loadingElement;
  }
  updatePos() {
    const e = this._refElement.getBoundingClientRect(), t = this.getLoadingElement();
    t.style.top = `${e.y}px`, t.style.left = `${e.x}px`, t.style.height = `${e.height}px`, t.style.width = `${e.width}px`;
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
    this.getLoadingElement().classList.remove("is-visible"), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.remove(), U);
  }
}
const W = ({
  contextElement: n,
  onClick: e = () => {
  },
  startDelay: t = 0
}) => new F({
  refElement: n,
  startDelay: t,
  onClick: e
});
function z(n, e, t, r) {
  O(n, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      R(r),
      M(),
      P({ padding: 5 })
    ]
  }).then(({ x: s, y: o, placement: i }) => {
    e.style.left = `${s}px`, e.style.top = `${o}px`, e.dataset.placement = i;
  });
}
function Z(n) {
  const {
    containerElement: e,
    placement: t = "bottom",
    offset: r = 8,
    interval: s = 0
  } = n;
  let o = null;
  const { tooltipElement: i, updateText: l } = k();
  function m(a) {
    return {
      text: a.dataset.irTooltipText ?? "",
      refMode: a.dataset.irTooltipRefMode ?? "element",
      placement: a.dataset.irTooltipPlacement ?? t,
      offset: v(a.dataset.irTooltipOffset, r),
      interval: v(a.dataset.irTooltipInterval, s)
    };
  }
  function d(a) {
    const {
      text: c,
      refMode: T,
      interval: C,
      placement: x,
      offset: _
    } = m(a);
    let u = null;
    const h = () => {
      if (!u)
        throw new Error("Reference element is not set");
      z(u, i, x, _);
    }, I = () => {
      l(c), H("popover").appendChild(i), h();
    }, S = () => {
      i.remove();
    }, b = window.setTimeout(() => I(), C);
    return {
      refElement: a,
      setReferenceEl(w) {
        u = w;
      },
      updateLocation: h,
      get isPointerMode() {
        return T === "pointer";
      },
      cleanup() {
        clearTimeout(b), o = null, S();
      }
    };
  }
  const f = (a) => {
    const c = A("[data-ir-tooltip]", ".ir-tooltip-container", a.target);
    if (!c || !(c instanceof HTMLElement)) {
      o?.cleanup();
      return;
    }
    if (o?.refElement === c) {
      o.isPointerMode && (o.setReferenceEl(E(a.clientX, a.clientY)), o.updateLocation());
      return;
    }
    o?.cleanup(), o = d(c), o.setReferenceEl(o.isPointerMode ? E(a.clientX, a.clientY) : c);
  }, g = () => {
    o?.cleanup();
  };
  return e.classList.add("ir-tooltip-container"), e.addEventListener("mousemove", f), e.addEventListener("mouseleave", g), {
    destroy() {
      o?.cleanup(), e.removeEventListener("mousemove", f), e.removeEventListener("mouseleave", g);
    },
    cleanup() {
      o?.cleanup();
    }
  };
}
const j = {
  gutterCls: "thick",
  direction: "horizontal",
  borderColor: "border",
  snapOffset: 10,
  dragInterval: 5
}, G = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
};
function J(n, e) {
  const t = Object.assign({}, j, e), { gutterCls: r, direction: s, borderColor: o } = t;
  return {
    ...N(n, {
      ...t,
      gutterSize: G.gutterSize[r],
      gutter: l()
    })
  };
  function l() {
    const m = [
      "gutter",
      `gutter--${s}`,
      `gutter--${r}`,
      `gutter--${o}`
    ].join(" ");
    return () => {
      const d = document.createElement("div");
      return d.className = m, d;
    };
  }
}
export {
  de as ClipboardManager,
  Ae as Logger,
  me as ReactiveState,
  ue as appendElement,
  pe as blobToStr,
  te as clearGlobalKeyListener,
  A as closest,
  fe as clsZId,
  ge as createClickOutsideHandler,
  he as createCustomIcon,
  oe as createESCHideController,
  Ee as createElement,
  ne as createFloatingHandler,
  ve as createIconElement,
  He as createImageFromSrcUrl,
  W as createLoadingHandler,
  Oe as createObjectURLFromSvg,
  ae as createPopover,
  J as createSplitContainer,
  Le as createTooltip,
  Te as createTooltipBySelector,
  Z as createTooltipContainer,
  Re as downloadDataURL,
  Ce as forEachBySize,
  xe as forEachFilterBySize,
  _e as get2DGenerator,
  Me as getBase64FromSvg,
  Ie as getIRIconPng,
  Pe as getImageBlobFromImage,
  Se as getMinMaxBetween,
  be as getTextWidthContext,
  k as getTooltipElements,
  E as getVirtualEl,
  ie as offsetBottomAutoUpdate,
  v as parseInt,
  re as peekESCStack,
  se as registerGlobalKeyListener,
  le as unregisterGlobalKeyListener,
  V as uuid,
  we as xss
};
//# sourceMappingURL=utility.js.map
