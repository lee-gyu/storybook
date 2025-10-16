import { c as g, g as I, b as M, o as w, f as P, s as C } from "./floating-CuQzApa0.js";
import { t as A } from "./css-CjgUAAH1.js";
import { c as X } from "./dom-BFx2fdL6.js";
function D(n, e, i) {
  return i == null ? Math.min(n, e) : Math.min(Math.max(n, e), i);
}
function B(n, e, i) {
  return D(n, e, i);
}
function y(n, e = 0, i = 10) {
  const c = Number.parseInt(n ?? "", i);
  return Number.isNaN(c) ? e : c;
}
const H = () => {
  const n = document.createElement("div");
  return n.className = A, {
    tooltipElement: n,
    updateText(e) {
      n.textContent = e;
    }
  };
}, m = /* @__PURE__ */ (() => {
  let n = null;
  return () => (n || (n = H()), n);
})(), S = 8;
let L = null;
const U = (n) => {
  if (n.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: e,
    offset: i = S,
    placement: c = "bottom",
    refMode: o = "element"
  } = n;
  let t = n.label ?? "", a = n.refElement;
  e.__IR_TOOLTIP_INSTANCE__?.destroy(), e.addEventListener("mousemove", _), e.addEventListener("mouseleave", f);
  const s = {
    show: v,
    hide: O,
    update: d,
    updateText: p,
    destroy: u,
    get text() {
      return t;
    },
    get refMode() {
      return o;
    },
    get placement() {
      return c;
    },
    get offset() {
      return i;
    },
    get refElement() {
      return e;
    }
  };
  return e.__IR_TOOLTIP_INSTANCE__ = s, s;
  function v() {
    return E(), s;
  }
  function O() {
    return f(), s;
  }
  function d() {
    return T(), s;
  }
  function p(l) {
    t = l, r() && m().updateText(l);
  }
  function r() {
    return L === s;
  }
  function u() {
    f(), e.removeEventListener("mousemove", _), e.removeEventListener("mouseleave", f);
  }
  function T() {
    const { tooltipElement: l } = m();
    g(a, l, {
      // Tooltip 배치 위치
      placement: c,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        w(i),
        // 상하 스크롤 화면 overflow 방지
        P(),
        // 좌우 스크롤 화면 overflow 방지
        C({ padding: 5 })
      ]
    }).then(({ x, y: h }) => {
      l.style.left = `${x}px`, l.style.top = `${h}px`;
    });
  }
  function E() {
    if (t === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: l } = m();
    T(), p(t), I("popover").appendChild(l);
  }
  function f() {
    m().tooltipElement.remove(), L = null;
  }
  function _(l) {
    l.__EXECUTED_TOOLTIP__ || l.target instanceof HTMLElement && (o === "element" && L === s || (L = s, l.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (a = M(l.clientX, l.clientY)), E()));
  }
}, V = (n) => {
  const {
    selector: e,
    offset: i = 8
  } = n, c = Array.from(document.querySelectorAll(e)).filter((o) => o.dataset.title).map((o) => {
    const { title: t, placement: a = "bottom", ref: s = "element" } = o.dataset;
    return U({
      refElement: o,
      label: t,
      offset: i,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: a,
      refMode: s
    });
  });
  return {
    destroy: () => {
      c.forEach((o) => o.destroy());
    },
    updateTextAll() {
      c.forEach((o) => {
        const t = o.refElement.dataset.title ?? "";
        o.text !== t && o.updateText(t);
      });
    },
    updateTextOne(o, t) {
      const a = c.find((s) => o === s.refElement);
      if (!a) {
        console.warn("Tooltip element not found");
        return;
      }
      t ? (o.dataset.title = t, a.updateText(t)) : a.updateText(o.dataset.title ?? "");
    }
  };
};
function $(n, e, i, c) {
  g(n, e, {
    placement: i,
    strategy: "fixed",
    middleware: [
      w(c),
      P(),
      C({ padding: 5 })
    ]
  }).then(({ x: o, y: t, placement: a }) => {
    e.style.left = `${o}px`, e.style.top = `${t}px`, e.dataset.placement = a;
  });
}
function j(n) {
  const {
    containerElement: e,
    placement: i = "bottom",
    offset: c = 8,
    interval: o = 0
  } = n;
  let t = null;
  const { tooltipElement: a, updateText: s } = m();
  function v(r) {
    return {
      text: r.dataset.irTooltipText ?? "",
      refMode: r.dataset.irTooltipRefMode ?? "element",
      placement: r.dataset.irTooltipPlacement ?? i,
      offset: y(r.dataset.irTooltipOffset, c),
      interval: y(r.dataset.irTooltipInterval, o)
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
    const x = () => {
      if (!l)
        throw new Error("Reference element is not set");
      $(l, a, f, _);
    }, h = () => {
      s(u), I("popover").appendChild(a), x();
    }, N = () => {
      a.remove();
    }, b = window.setTimeout(() => h(), E);
    return {
      refElement: r,
      setReferenceEl(R) {
        l = R;
      },
      updateLocation: x,
      get isPointerMode() {
        return T === "pointer";
      },
      cleanup() {
        clearTimeout(b), t = null, N();
      }
    };
  }
  const d = (r) => {
    if (r.__EXECUTED_TOOLTIP__) return;
    const u = X("[data-ir-tooltip]", ".ir-tooltip-container", r.target);
    if (!u || !(u instanceof HTMLElement)) {
      t?.cleanup();
      return;
    }
    if (r.__EXECUTED_TOOLTIP__ = !0, t?.refElement === u) {
      t.isPointerMode && (t.setReferenceEl(M(r.clientX, r.clientY)), t.updateLocation());
      return;
    }
    t?.cleanup(), t = O(u), t.setReferenceEl(t.isPointerMode ? M(r.clientX, r.clientY) : u);
  }, p = () => {
    t?.cleanup();
  };
  return e.classList.add("ir-tooltip-container"), e.addEventListener("mousemove", d), e.addEventListener("mouseleave", p), {
    destroy() {
      t?.cleanup(), e.removeEventListener("mousemove", d), e.removeEventListener("mouseleave", p);
    },
    cleanup() {
      t?.cleanup();
    }
  };
}
export {
  j as a,
  V as b,
  U as c,
  B as d,
  D as e,
  m as g,
  y as p
};
