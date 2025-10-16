import { c as o, i as f } from "./dom-6gXSYTzY.js";
import { c as l } from "./clone-CMP76bLO.js";
import { c as p, b as g, d as M, e as I, f as x, g as C, h as b, i as _, j as D, a as y, k as E } from "./css-CjgUAAH1.js";
import { c as v } from "./clsx-OuTLNxxd.js";
import { c as N, o as T, f as w, s as L, g as O, a as k, b as B } from "./floating-CuQzApa0.js";
import { v as A } from "./v4-BysszJq8.js";
function h(i) {
  return i.some((t) => "icon" in t && t.icon !== void 0);
}
const $ = 8;
function u(i, t, e, r) {
  N(i, t, {
    placement: e,
    strategy: "fixed",
    middleware: [
      T(r),
      w(),
      L()
    ]
  }).then((s) => {
    t.style.left = `${s.x}px`, t.style.top = `${s.y - $}px`, t.dataset.placement = s.placement;
  });
}
function P(i) {
  return o({
    tag: "div",
    className: E,
    attr: {
      tabindex: "-1"
    },
    dataset: {
      id: i
    }
  }).element;
}
function m(i, t, e) {
  const { element: r } = o({
    tag: "div",
    className: v(
      p,
      t && b,
      e && g
    )
  });
  let s = !1;
  for (const n of i) {
    if (n.visible === !1) continue;
    if (n.type === "divider") {
      s = r.children.length > 0;
      continue;
    }
    s && (r.appendChild(U()), s = !1);
    const a = R(n);
    n.disabled && (a.dataset.disabled = "true"), r.appendChild(a);
  }
  return r;
}
function R(i) {
  if (i.type === "command-button") return e(i);
  if (i.type === "dropdown") return r(i);
  throw new Error(`Unknown item type: ${i.type}`);
  function t(s) {
    const n = document.createDocumentFragment(), a = o({ tag: "i", className: `${_} ir-icon` }), d = o({ tag: "span", className: D });
    return d.element.textContent = s.label ?? "", a.element.classList.add(s.icon ? s.icon : y.invisible), n.appendChild(a.element), n.appendChild(d.element), n;
  }
  function e(s) {
    const { element: n } = o({ tag: "button", className: I });
    return n.appendChild(t(s)), n.addEventListener("click", (a) => {
      a.__IR_CONTEXT_MENU_ITEM__ = s;
    }), n;
  }
  function r(s) {
    const { element: n } = o({ tag: "div", className: x }), { element: a } = o({ tag: "i", className: `${C} ir-icon ir-icon--triangle-small-right` });
    if (n.append(t(s), a), s.children && s.children.length > 0) {
      const d = m(
        s.children,
        !0,
        // 모든 자식 요소에 icon이 없으면 기본 적으로 false 처리
        s.hiddenIcon ?? !h(s.children)
      );
      n.append(d), n.addEventListener("mouseenter", () => {
        u(
          n,
          d,
          n.parentElement?.dataset.placement ?? "right-start",
          0
        );
      });
    }
    return n;
  }
}
function U() {
  return o({ tag: "div", className: M }).element;
}
const c = [];
class q {
  constructor(t) {
    this.args = t, this.#t = this.#d(), this.#r(l(t.items)), c.push(this);
  }
  #o = A();
  #t;
  #s = !1;
  #i = !1;
  #n = null;
  #e = null;
  #d() {
    const t = P(this.#o);
    return "blurDisabled" in this.args && (t.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), t.addEventListener("focusout", (e) => {
      "blurDisabled" in this.args && this.args.blurDisabled || f(e.relatedTarget, this.#t) || e.relatedTarget && e.relatedTarget === this.#n || this.hide();
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
  #r(t) {
    this.#t.firstChild && this.#t.removeChild(this.#t.firstChild), this.#t.append(
      m(
        t,
        !1,
        this.args.hiddenIcon ?? !h(t)
      )
    );
  }
  #a(t, e, r) {
    G(), this.#s = !0, setTimeout(() => {
      O("popover").appendChild(this.#t), u(t, this.#t, e, r), this.#t.focus(), this.#e?.destroy(), this.#e = k(this), this.#e.create();
    }, 0);
  }
  showAtPoint(t, e) {
    this.#a(B(t, e), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(t, e, r = 8) {
    this.#n = t, this.#a(t, e, r);
  }
  hide() {
    this.isOpened !== !1 && (this.#s = !1, this.#n = null, this.#e?.destroy(), setTimeout(() => {
      this.#t.remove();
    }, 0));
  }
  destroy() {
    if (this.#i)
      throw new Error("Already destroyed.");
    this.hide(), this.#t.remove(), this.#i = !0, this.#e?.destroy(), c.splice(c.indexOf(this), 1);
  }
  updateItems(t) {
    const e = l(this.args.items);
    t(e), this.args.items = e, this.#r(e);
  }
  onCommandButtonClick(t) {
  }
  get isOpened() {
    return this.#s;
  }
}
function G() {
  c.forEach((i) => i.hide());
}
export {
  q as I
};
