import { c as I, g as w, b as g, o as M, f as P, s as b } from "./floating-CuQzApa0.js";
import { t as A } from "./css-CjgUAAH1.js";
import { c as X } from "./dom-BFx2fdL6.js";
function q(n, t, a) {
  return n < t ? t : n > a ? a : n;
}
function h(n, t = 0, a = 10) {
  const c = Number.parseInt(n ?? "", a);
  return Number.isNaN(c) ? t : c;
}
const D = () => {
  const n = document.createElement("div");
  return n.className = A, {
    tooltipElement: n,
    updateText(t) {
      n.textContent = t;
    }
  };
}, d = /* @__PURE__ */ (() => {
  let n = null;
  return () => (n || (n = D()), n);
})(), H = 8;
let x = null;
const S = (n) => {
  if (n.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: t,
    offset: a = H,
    placement: c = "bottom",
    refMode: o = "element"
  } = n;
  let e = n.label ?? "", i = n.refElement;
  t.__IR_TOOLTIP_INSTANCE__?.destroy(), t.addEventListener("mousemove", _), t.addEventListener("mouseleave", f);
  const s = {
    show: v,
    hide: O,
    update: m,
    updateText: p,
    destroy: u,
    get text() {
      return e;
    },
    get refMode() {
      return o;
    },
    get placement() {
      return c;
    },
    get offset() {
      return a;
    },
    get refElement() {
      return t;
    }
  };
  return t.__IR_TOOLTIP_INSTANCE__ = s, s;
  function v() {
    return E(), s;
  }
  function O() {
    return f(), s;
  }
  function m() {
    return T(), s;
  }
  function p(l) {
    e = l, r() && d().updateText(l);
  }
  function r() {
    return x === s;
  }
  function u() {
    f(), t.removeEventListener("mousemove", _), t.removeEventListener("mouseleave", f);
  }
  function T() {
    const { tooltipElement: l } = d();
    I(i, l, {
      // Tooltip 배치 위치
      placement: c,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        M(a),
        // 상하 스크롤 화면 overflow 방지
        P(),
        // 좌우 스크롤 화면 overflow 방지
        b({ padding: 5 })
      ]
    }).then(({ x: L, y }) => {
      l.style.left = `${L}px`, l.style.top = `${y}px`;
    });
  }
  function E() {
    if (e === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: l } = d();
    T(), p(e), w("popover").appendChild(l);
  }
  function f() {
    d().tooltipElement.remove(), x = null;
  }
  function _(l) {
    l.__EXECUTED_TOOLTIP__ || l.target instanceof HTMLElement && (o === "element" && x === s || (x = s, l.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (i = g(l.clientX, l.clientY)), E()));
  }
}, B = (n) => {
  const {
    selector: t,
    offset: a = 8
  } = n, c = Array.from(document.querySelectorAll(t)).filter((o) => o.dataset.title).map((o) => {
    const { title: e, placement: i = "bottom", ref: s = "element" } = o.dataset;
    return S({
      refElement: o,
      label: e,
      offset: a,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: i,
      refMode: s
    });
  });
  return {
    destroy: () => {
      c.forEach((o) => o.destroy());
    },
    updateTextAll() {
      c.forEach((o) => {
        const e = o.refElement.dataset.title ?? "";
        o.text !== e && o.updateText(e);
      });
    },
    updateTextOne(o, e) {
      const i = c.find((s) => o === s.refElement);
      if (!i) {
        console.warn("Tooltip element not found");
        return;
      }
      e ? (o.dataset.title = e, i.updateText(e)) : i.updateText(o.dataset.title ?? "");
    }
  };
};
function U(n, t, a, c) {
  I(n, t, {
    placement: a,
    strategy: "fixed",
    middleware: [
      M(c),
      P(),
      b({ padding: 5 })
    ]
  }).then(({ x: o, y: e, placement: i }) => {
    t.style.left = `${o}px`, t.style.top = `${e}px`, t.dataset.placement = i;
  });
}
function V(n) {
  const {
    containerElement: t,
    placement: a = "bottom",
    offset: c = 8,
    interval: o = 0
  } = n;
  let e = null;
  const { tooltipElement: i, updateText: s } = d();
  function v(r) {
    return {
      text: r.dataset.irTooltipText ?? "",
      refMode: r.dataset.irTooltipRefMode ?? "element",
      placement: r.dataset.irTooltipPlacement ?? a,
      offset: h(r.dataset.irTooltipOffset, c),
      interval: h(r.dataset.irTooltipInterval, o)
    };
  }
  function O(r) {
    const {
      text: u,
      refMode: T,
      interval: E,
      placement: f,
      offset: _
    } = v(r);
    let l = null;
    const L = () => {
      if (!l)
        throw new Error("Reference element is not set");
      U(l, i, f, _);
    }, y = () => {
      s(u), w("popover").appendChild(i), L();
    }, C = () => {
      i.remove();
    }, N = window.setTimeout(() => y(), E);
    return {
      refElement: r,
      setReferenceEl(R) {
        l = R;
      },
      updateLocation: L,
      get isPointerMode() {
        return T === "pointer";
      },
      cleanup() {
        clearTimeout(N), e = null, C();
      }
    };
  }
  const m = (r) => {
    if (r.__EXECUTED_TOOLTIP__) return;
    const u = X("[data-ir-tooltip]", ".ir-tooltip-container", r.target);
    if (!u || !(u instanceof HTMLElement)) {
      e?.cleanup();
      return;
    }
    if (r.__EXECUTED_TOOLTIP__ = !0, e?.refElement === u) {
      e.isPointerMode && (e.setReferenceEl(g(r.clientX, r.clientY)), e.updateLocation());
      return;
    }
    e?.cleanup(), e = O(u), e.setReferenceEl(e.isPointerMode ? g(r.clientX, r.clientY) : u);
  }, p = () => {
    e?.cleanup();
  };
  return t.classList.add("ir-tooltip-container"), t.addEventListener("mousemove", m), t.addEventListener("mouseleave", p), {
    destroy() {
      e?.cleanup(), t.removeEventListener("mousemove", m), t.removeEventListener("mouseleave", p);
    },
    cleanup() {
      e?.cleanup();
    }
  };
}
export {
  V as a,
  B as b,
  S as c,
  q as d,
  d as g,
  h as p
};
//# sourceMappingURL=tooltip-container-Bg5HCQ20.js.map
