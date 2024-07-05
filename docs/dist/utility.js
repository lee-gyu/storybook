import "./chunks/_init-CqtFEZw2.js";
import { a as v, g as x, b as A, d as O, f as $, s as M } from "./chunks/floating-B9y9ooPB.js";
import { k as J, c as ee, l as te, j as oe, o as ne, r as ae, u as ie } from "./chunks/floating-B9y9ooPB.js";
import { l as P, _ as R, f as F, a4 as L, b4 as D } from "./chunks/rx-state-CHpF6m8D.js";
import { a5 as se, a8 as le, e as ce, a0 as de, c as me, a as ue, W as pe, b as ge, d as fe, $ as he, U as Ee, a7 as ve, a6 as Le, a1 as Te, X as Ce, a3 as _e, p as Ie, h as ye, a2 as be, s as we, Q as Se } from "./chunks/rx-state-CHpF6m8D.js";
import { u as xe } from "./chunks/uuid-P7jWfzzn.js";
import { a as Oe, c as $e, d as Me, g as Pe, b as Re } from "./chunks/image-HI2BJVWo.js";
import { L as De } from "./chunks/logger-BzjoGhbK.js";
const m = "loading", g = {
  loading: {
    "&": m,
    primary: `${m}--primary`,
    secondary: `${m}--secondary`,
    tertiary: `${m}--tertiary`
  },
  loadingItems: {
    "&": `${m}__items`
  },
  loadingDotItem: {
    "&": `${m}__dot-item`
  }
}, N = 4, k = () => {
  const n = document.createElement("div"), t = document.createElement("div");
  n.className = g.loading["&"], t.className = g.loadingItems["&"];
  for (let o = 0; o < N; o++)
    t.appendChild(P("i", g.loadingDotItem["&"]));
  return n.appendChild(t), n;
}, U = 150, T = /* @__PURE__ */ (() => {
  let n = null;
  function t() {
    const o = [];
    let r = !1, l = -1;
    function e(i) {
      cancelAnimationFrame(l), l = requestAnimationFrame(() => {
        o.forEach((s) => s.updatePos());
      });
    }
    return {
      addLoadingElement(i) {
        o.findIndex((c) => c === i) === -1 && o.push(i), r || (window.addEventListener("scroll", e, { capture: !0 }), r = !0);
      },
      removeLoadingElement(i) {
        const s = o.findIndex((c) => c === i);
        s !== -1 && o.splice(s, 1), o.length === 0 && (window.removeEventListener("scroll", e, { capture: !0 }), r = !1);
      }
    };
  }
  return () => n || (n = t());
})();
class B {
  constructor(t) {
    this._loadingElement = null, this._timeoutHandler = -1, this._refElement = t.refElement, this._onClick = t.onClick, this._startDelay = t.startDelay;
  }
  getLoadingElement() {
    return this._loadingElement || (this._loadingElement = k(), this._loadingElement.onclick = this._onClick), this._loadingElement;
  }
  updatePos() {
    const t = this._refElement.getBoundingClientRect(), o = this.getLoadingElement();
    o.style.top = `${t.y}px`, o.style.left = `${t.x}px`, o.style.height = `${t.height}px`, o.style.width = `${t.width}px`;
  }
  visibleAction() {
    this._refElement.after(this.getLoadingElement()), requestAnimationFrame(() => {
      this.getLoadingElement().classList.add("is-visible");
    });
  }
  show() {
    this.updatePos(), T().addLoadingElement(this), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.visibleAction(), this._startDelay);
  }
  remove() {
    this.getLoadingElement().remove(), T().removeLoadingElement(this);
  }
  hide() {
    this.getLoadingElement().classList.remove("is-visible"), clearTimeout(this._timeoutHandler), this._timeoutHandler = window.setTimeout(() => this.remove(), U);
  }
}
const W = ({
  contextElement: n,
  onClick: t = () => {
  },
  startDelay: o = 0
}) => new B({
  refElement: n,
  startDelay: o,
  onClick: t
});
function z(n, t, o, r) {
  A(n, t, {
    placement: o,
    strategy: "fixed",
    middleware: [
      O(r),
      $(),
      M({ padding: 5 })
    ]
  }).then(({ x: l, y: e, placement: i }) => {
    t.style.left = `${l}px`, t.style.top = `${e}px`, t.dataset.placement = i;
  });
}
function Y(n) {
  const {
    containerElement: t,
    placement: o = "bottom",
    offset: r = 8,
    interval: l = 0
  } = n;
  let e = null;
  const { tooltipElement: i, updateText: s } = R();
  function c(a) {
    return {
      text: a.dataset.irTooltipText ?? "",
      refMode: a.dataset.irTooltipRefMode ?? "element",
      placement: a.dataset.irTooltipPlacement ?? o,
      offset: L(a.dataset.irTooltipOffset, r),
      interval: L(a.dataset.irTooltipInterval, l)
    };
  }
  function u(a) {
    const {
      text: d,
      refMode: C,
      interval: _,
      placement: I,
      offset: y
    } = c(a);
    let p = null;
    const E = () => {
      if (!p)
        throw new Error("Reference element is not set");
      z(p, i, I, y);
    }, b = () => {
      s(d), x("popover").appendChild(i), E();
    }, w = () => {
      i.remove();
    }, S = window.setTimeout(() => b(), _);
    return {
      refElement: a,
      setReferenceEl(H) {
        p = H;
      },
      updateLocation: E,
      get isPointerMode() {
        return C === "pointer";
      },
      cleanup() {
        clearTimeout(S), e = null, w();
      }
    };
  }
  const f = (a) => {
    const d = F("[data-ir-tooltip]", ".ir-tooltip-container", a.target);
    if (!d || !(d instanceof HTMLElement)) {
      e == null || e.cleanup();
      return;
    }
    if ((e == null ? void 0 : e.refElement) === d) {
      e.isPointerMode && (e.setReferenceEl(v(a.clientX, a.clientY)), e.updateLocation());
      return;
    }
    e == null || e.cleanup(), e = u(d), e.setReferenceEl(e.isPointerMode ? v(a.clientX, a.clientY) : d);
  }, h = () => {
    e == null || e.cleanup();
  };
  return t.classList.add("ir-tooltip-container"), t.addEventListener("mousemove", f), t.addEventListener("mouseleave", h), {
    destroy() {
      e == null || e.cleanup(), t.removeEventListener("mousemove", f), t.removeEventListener("mouseleave", h);
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
function Q(n, t) {
  const o = Object.assign({}, G, t), { gutterCls: r, direction: l, borderColor: e } = o;
  return {
    ...D(n, {
      ...o,
      gutterSize: j.gutterSize[r],
      gutter: s()
    })
  };
  function s() {
    const c = [
      "gutter",
      `gutter--${l}`,
      `gutter--${r}`,
      `gutter--${e}`
    ].join(" ");
    return () => {
      const u = document.createElement("div");
      return u.className = c, u;
    };
  }
}
export {
  se as ClipboardManager,
  De as Logger,
  le as ReactiveState,
  ce as appendElement,
  de as blobToStr,
  J as clearGlobalKeyListener,
  F as closest,
  me as clsZId,
  ue as createClickOutsideHandler,
  pe as createCustomIcon,
  ee as createESCHideController,
  P as createElement,
  te as createFloatingHandler,
  ge as createIconElement,
  Oe as createImageFromSrcUrl,
  W as createLoadingHandler,
  $e as createObjectURLFromSvg,
  oe as createPopover,
  Q as createSplitContainer,
  fe as createTooltip,
  he as createTooltipBySelector,
  Y as createTooltipContainer,
  Me as downloadDataURL,
  Ee as forEachBySize,
  ve as forEachFilterBySize,
  Le as get2DGenerator,
  Pe as getBase64FromSvg,
  Te as getElement,
  Ce as getIRIconPng,
  Re as getImageBlobFromImage,
  _e as getMinMaxBetween,
  Ie as getTextWidthContext,
  R as getTooltipElements,
  v as getVirtualEl,
  ye as hasClass,
  ne as offsetBottomAutoUpdate,
  L as parseInt,
  ae as registerGlobalKeyListener,
  be as removeAllChildren,
  we as setDataSetFlag,
  ie as unregisterGlobalKeyListener,
  xe as uuid,
  Se as xss
};
//# sourceMappingURL=utility.js.map
