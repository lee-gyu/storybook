import { aK as m, aL as g, aM as C, aN as M, aO as _, aP as b, aQ as y, aR as I, aS as D, aT as E, a as x } from "./chunks/_init-B0xIPnhF.js";
import { b as v, d as N, f as T, s as L, q as o, v as O, g as w, c as k, a as B } from "./chunks/floating-COQGiF1T.js";
import { c as h } from "./chunks/clone-CMP76bLO.js";
import { c as A } from "./chunks/clsx-OuTLNxxd.js";
import { v as R } from "./chunks/v4-Cgt9uYzN.js";
function u(n) {
  return n.some((t) => "icon" in t && t.icon !== void 0);
}
const P = 8;
function f(n, t, s, a) {
  v(n, t, {
    placement: s,
    strategy: "fixed",
    middleware: [
      N(a),
      T(),
      L()
    ]
  }).then((e) => {
    t.style.left = `${e.x}px`, t.style.top = `${e.y - P}px`, t.dataset.placement = e.placement;
  });
}
function $(n) {
  return o({
    tag: "div",
    className: m,
    attr: {
      tabindex: "-1"
    },
    dataset: {
      id: n
    }
  }).element;
}
function p(n, t, s) {
  const { element: a } = o({
    tag: "div",
    className: A(
      g,
      t && I,
      s && C
    )
  });
  let e = !1;
  for (const i of n) {
    if (i.visible === !1) continue;
    if (i.type === "divider") {
      e = a.children.length > 0;
      continue;
    }
    e && (a.appendChild(G()), e = !1);
    const r = U(i);
    i.disabled && (r.dataset.disabled = "true"), a.appendChild(r);
  }
  return a;
}
function U(n) {
  if (n.type === "command-button") return s(n);
  if (n.type === "dropdown") return a(n);
  throw new Error(`Unknown item type: ${n.type}`);
  function t(e) {
    const i = document.createDocumentFragment(), r = o({ tag: "i", className: `${D} ir-icon` }), d = o({ tag: "span", className: E });
    return d.element.textContent = e.label ?? "", r.element.classList.add(e.icon ? e.icon : x.invisible), i.appendChild(r.element), i.appendChild(d.element), i;
  }
  function s(e) {
    const { element: i } = o({ tag: "button", className: M });
    return i.appendChild(t(e)), i.addEventListener("click", (r) => {
      r.__IR_CONTEXT_MENU_ITEM__ = e;
    }), i;
  }
  function a(e) {
    const { element: i } = o({ tag: "div", className: _ }), { element: r } = o({ tag: "i", className: `${b} ir-icon ir-icon--triangle-small-right` });
    if (i.append(t(e), r), e.children && e.children.length > 0) {
      const d = p(
        e.children,
        !0,
        // 모든 자식 요소에 icon이 없으면 기본 적으로 false 처리
        e.hiddenIcon ?? !u(e.children)
      );
      i.append(d), i.addEventListener("mouseenter", () => {
        var c;
        f(
          i,
          d,
          ((c = i.parentElement) == null ? void 0 : c.dataset.placement) ?? "right-start",
          0
        );
      });
    }
    return i;
  }
}
function G() {
  return o({ tag: "div", className: y }).element;
}
const l = [];
class Q {
  constructor(t) {
    this.args = t, this.#t = this.#d(), this.#a(h(t.items)), l.push(this);
  }
  #o = R();
  #t;
  #s = !1;
  #n = !1;
  #i = null;
  #e = null;
  #d() {
    const t = $(this.#o);
    return "blurDisabled" in this.args && (t.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), t.addEventListener("focusout", (s) => {
      "blurDisabled" in this.args && this.args.blurDisabled || O(s.relatedTarget, this.#t) || s.relatedTarget && s.relatedTarget === this.#i || this.hide();
    }), t.addEventListener("click", (s) => {
      if (s.__IR_CONTEXT_MENU_ITEM__)
        try {
          this.onCommandButtonClick({
            ev: s,
            item: s.__IR_CONTEXT_MENU_ITEM__
          });
        } finally {
          this.hide();
        }
    }), t;
  }
  #a(t) {
    this.#t.firstChild && this.#t.removeChild(this.#t.firstChild), this.#t.append(
      p(
        t,
        !1,
        this.args.hiddenIcon ?? !u(t)
      )
    );
  }
  #r(t, s, a) {
    H(), this.#s = !0, setTimeout(() => {
      var e;
      w("popover").appendChild(this.#t), f(t, this.#t, s, a), this.#t.focus(), (e = this.#e) == null || e.destroy(), this.#e = k(this), this.#e.create();
    }, 0);
  }
  showAtPoint(t, s) {
    this.#r(B(t, s), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(t, s, a = 8) {
    this.#i = t, this.#r(t, s, a);
  }
  hide() {
    var t;
    this.isOpened !== !1 && (this.#s = !1, this.#i = null, (t = this.#e) == null || t.destroy(), setTimeout(() => {
      this.#t.remove();
    }, 0));
  }
  destroy() {
    var t;
    if (this.#n)
      throw new Error("Already destroyed.");
    this.hide(), this.#t.remove(), this.#n = !0, (t = this.#e) == null || t.destroy(), l.splice(l.indexOf(this), 1);
  }
  updateItems(t) {
    const s = h(this.args.items);
    t(s), this.args.items = s, this.#a(s);
  }
  onCommandButtonClick(t) {
  }
  get isOpened() {
    return this.#s;
  }
}
function H() {
  l.forEach((n) => n.hide());
}
export {
  Q as IRContextMenuAdapter
};
//# sourceMappingURL=react.js.map
