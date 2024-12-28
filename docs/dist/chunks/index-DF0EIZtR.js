import { c as m, o as p, f as g, s as M, a as o, v as I, i as x, g as C, b, d as _ } from "./floating-DlacX8th.js";
import { c as D, a as y, b as E, d as N, e as v, f as O, g as T, h as w, i as L, j as k, k as B } from "./css-F1iGWdNw.js";
import { c as A } from "./clsx-OuTLNxxd.js";
function l(i) {
  return JSON.parse(JSON.stringify(i));
}
function h(i) {
  return i.some((t) => "icon" in t && t.icon !== void 0);
}
const $ = 8;
function u(i, t, e, a) {
  m(i, t, {
    placement: e,
    strategy: "fixed",
    middleware: [
      p(a),
      g(),
      M()
    ]
  }).then((n) => {
    t.style.left = `${n.x}px`, t.style.top = `${n.y - $}px`, t.dataset.placement = n.placement;
  });
}
function P(i) {
  return o({
    tag: "div",
    className: D,
    attr: {
      tabindex: "-1"
    },
    dataset: {
      id: i
    }
  }).element;
}
function f(i, t, e) {
  const { element: a } = o({
    tag: "div",
    className: A(
      y,
      t && w,
      e && E
    )
  });
  let n = !1;
  for (const s of i) {
    if (s.visible === !1) continue;
    if (s.type === "divider") {
      n = a.children.length > 0;
      continue;
    }
    n && (a.appendChild(S()), n = !1);
    const r = R(s);
    s.disabled && (r.dataset.disabled = "true"), a.appendChild(r);
  }
  return a;
}
function R(i) {
  if (i.type === "command-button") return e(i);
  if (i.type === "dropdown") return a(i);
  throw new Error(`Unknown item type: ${i.type}`);
  function t(n) {
    const s = document.createDocumentFragment(), r = o({ tag: "i", className: `${L} ir-icon` }), d = o({ tag: "span", className: k });
    return d.element.textContent = n.label ?? "", r.element.classList.add(n.icon ? n.icon : B.invisible), s.appendChild(r.element), s.appendChild(d.element), s;
  }
  function e(n) {
    const { element: s } = o({ tag: "button", className: N });
    return s.appendChild(t(n)), s.addEventListener("click", (r) => {
      r.__IR_CONTEXT_MENU_ITEM__ = n;
    }), s;
  }
  function a(n) {
    const { element: s } = o({ tag: "div", className: v }), { element: r } = o({ tag: "i", className: `${O} ir-icon ir-icon--triangle-small-right` });
    if (s.append(t(n), r), n.children && n.children.length > 0) {
      const d = f(
        n.children,
        !0,
        // 모든 자식 요소에 icon이 없으면 기본 적으로 false 처리
        n.hiddenIcon ?? !h(n.children)
      );
      s.append(d), s.addEventListener("mouseenter", () => {
        u(
          s,
          d,
          s.parentElement?.dataset.placement ?? "right-start",
          0
        );
      });
    }
    return s;
  }
}
function S() {
  return o({ tag: "div", className: T }).element;
}
const c = [];
class J {
  constructor(t) {
    this.args = t, this.#t = this.#d(), this.#a(l(t.items)), c.push(this);
  }
  #o = I();
  #t;
  #n = !1;
  #i = !1;
  #s = null;
  #e = null;
  #d() {
    const t = P(this.#o);
    return "blurDisabled" in this.args && (t.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), t.addEventListener("focusout", (e) => {
      "blurDisabled" in this.args && this.args.blurDisabled || x(e.relatedTarget, this.#t) || e.relatedTarget && e.relatedTarget === this.#s || this.hide();
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
    U(), this.#n = !0, setTimeout(() => {
      C("popover").appendChild(this.#t), u(t, this.#t, e, a), this.#t.focus(), this.#e?.destroy(), this.#e = b(this), this.#e.create();
    }, 0);
  }
  showAtPoint(t, e) {
    this.#r(_(t, e), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(t, e, a = 8) {
    this.#s = t, this.#r(t, e, a);
  }
  hide() {
    this.isOpened !== !1 && (this.#n = !1, this.#s = null, this.#e?.destroy(), setTimeout(() => {
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
    t(e), this.args.items = e, this.#a(e);
  }
  onCommandButtonClick(t) {
  }
  get isOpened() {
    return this.#n;
  }
}
function U() {
  c.forEach((i) => i.hide());
}
export {
  J as I
};
//# sourceMappingURL=index-DF0EIZtR.js.map
