import { aQ as p, aR as m, aS as g, aT as C, aU as _, aV as y, aW as I, aX as M, aY as b, aZ as D, h as E } from "./chunks/_init-Cv3gCb_1.js";
import { k as x, l as v, m as T, n as N, q as o, v as w, g as L, c as O, i as k } from "./chunks/floating-fOdDS7jf.js";
import { c } from "./chunks/clone-CMP76bLO.js";
import { c as B } from "./chunks/clsx-OuTLNxxd.js";
import { v as A } from "./chunks/v4-Cgt9uYzN.js";
function h(n) {
  return n.some((t) => "icon" in t && t.icon !== void 0);
}
const R = 8;
function u(n, t, e, a) {
  x(n, t, {
    placement: e,
    strategy: "fixed",
    middleware: [
      v(a),
      T(),
      N()
    ]
  }).then((s) => {
    t.style.left = `${s.x}px`, t.style.top = `${s.y - R}px`, t.dataset.placement = s.placement;
  });
}
function U(n) {
  return o({
    tag: "div",
    className: p,
    attr: {
      tabindex: "-1"
    },
    dataset: {
      id: n
    }
  }).element;
}
function f(n, t, e) {
  const { element: a } = o({
    tag: "div",
    className: B(
      m,
      t && M,
      e && g
    )
  });
  let s = !1;
  for (const i of n) {
    if (i.visible === !1) continue;
    if (i.type === "divider") {
      s = a.children.length > 0;
      continue;
    }
    s && (a.appendChild(P()), s = !1);
    const r = $(i);
    i.disabled && (r.dataset.disabled = "true"), a.appendChild(r);
  }
  return a;
}
function $(n) {
  if (n.type === "command-button") return e(n);
  if (n.type === "dropdown") return a(n);
  throw new Error(`Unknown item type: ${n.type}`);
  function t(s) {
    const i = document.createDocumentFragment(), r = o({ tag: "i", className: `${b} ir-icon` }), d = o({ tag: "span", className: D });
    return d.element.textContent = s.label ?? "", r.element.classList.add(s.icon ? s.icon : E.invisible), i.appendChild(r.element), i.appendChild(d.element), i;
  }
  function e(s) {
    const { element: i } = o({ tag: "button", className: C });
    return i.appendChild(t(s)), i.addEventListener("click", (r) => {
      r.__IR_CONTEXT_MENU_ITEM__ = s;
    }), i;
  }
  function a(s) {
    const { element: i } = o({ tag: "div", className: _ }), { element: r } = o({ tag: "i", className: `${y} ir-icon ir-icon--triangle-small-right` });
    if (i.append(t(s), r), s.children && s.children.length > 0) {
      const d = f(
        s.children,
        !0,
        // 모든 자식 요소에 icon이 없으면 기본 적으로 false 처리
        s.hiddenIcon ?? !h(s.children)
      );
      i.append(d), i.addEventListener("mouseenter", () => {
        u(
          i,
          d,
          i.parentElement?.dataset.placement ?? "right-start",
          0
        );
      });
    }
    return i;
  }
}
function P() {
  return o({ tag: "div", className: I }).element;
}
const l = [];
class F {
  constructor(t) {
    this.args = t, this.#t = this.#d(), this.#a(c(t.items)), l.push(this);
  }
  #o = A();
  #t;
  #s = !1;
  #n = !1;
  #i = null;
  #e = null;
  #d() {
    const t = U(this.#o);
    return "blurDisabled" in this.args && (t.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), t.addEventListener("focusout", (e) => {
      "blurDisabled" in this.args && this.args.blurDisabled || w(e.relatedTarget, this.#t) || e.relatedTarget && e.relatedTarget === this.#i || this.hide();
    }), t.addEventListener("click", (e) => {
      if (e.__IR_CONTEXT_MENU_ITEM__)
        try {
          this.onCommandButtonClick({
            ev: e,
            item: e.__IR_CONTEXT_MENU_ITEM__
          });
        } finally {
          this.hide();
        }
    }), t;
  }
  #a(t) {
    this.#t.firstChild && this.#t.removeChild(this.#t.firstChild), this.#t.append(
      f(
        t,
        !1,
        this.args.hiddenIcon ?? !h(t)
      )
    );
  }
  #r(t, e, a) {
    X(), this.#s = !0, setTimeout(() => {
      L("popover").appendChild(this.#t), u(t, this.#t, e, a), this.#t.focus(), this.#e?.destroy(), this.#e = O(this), this.#e.create();
    }, 0);
  }
  showAtPoint(t, e) {
    this.#r(k(t, e), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(t, e, a = 8) {
    this.#i = t, this.#r(t, e, a);
  }
  hide() {
    this.isOpened !== !1 && (this.#s = !1, this.#i = null, this.#e?.destroy(), setTimeout(() => {
      this.#t.remove();
    }, 0));
  }
  destroy() {
    if (this.#n)
      throw new Error("Already destroyed.");
    this.hide(), this.#t.remove(), this.#n = !0, this.#e?.destroy(), l.splice(l.indexOf(this), 1);
  }
  updateItems(t) {
    const e = c(this.args.items);
    t(e), this.args.items = e, this.#a(e);
  }
  onCommandButtonClick(t) {
  }
  get isOpened() {
    return this.#s;
  }
}
function X() {
  l.forEach((n) => n.hide());
}
export {
  F as IRContextMenuAdapter
};
//# sourceMappingURL=react.js.map
