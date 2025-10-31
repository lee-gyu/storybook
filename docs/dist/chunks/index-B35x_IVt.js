import { c as a, i as f } from "./dom-6gXSYTzY.js";
import { c as l } from "./clone-CMP76bLO.js";
import { c as p, b as _, d as M, e as g, f as I, g as x, h as C, i as D, j as b, a as y, k as E } from "./css-qClA3yr2.js";
import { c as O } from "./clsx-OuTLNxxd.js";
import { c as w, o as v, f as N, s as T, g as L, a as k, b as B } from "./floating--rhsEYV2.js";
import { v as H } from "./v4-BysszJq8.js";
function h(i) {
  return i.some((e) => "icon" in e && e.icon !== void 0);
}
const A = 8;
function u(i, e, t, o) {
  w(i, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      v(o),
      N(),
      T()
    ]
  }).then((s) => {
    e.style.left = `${s.x}px`, e.style.top = `${s.y - A}px`, e.dataset.placement = s.placement;
  });
}
function $(i) {
  return a({
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
function m(i, e, t) {
  const { element: o } = a({
    tag: "div",
    className: O(
      p,
      e && C,
      t && _
    )
  });
  let s = !1;
  for (const n of i) {
    if (n.visible === !1) continue;
    if (n.type === "divider") {
      s = o.children.length > 0;
      continue;
    }
    s && (o.appendChild(R()), s = !1);
    const r = P(n);
    n.disabled && (r.dataset.disabled = "true"), o.appendChild(r);
  }
  return o;
}
function P(i) {
  if (i.type === "command-button") return t(i);
  if (i.type === "dropdown") return o(i);
  throw new Error(`Unknown item type: ${i.type}`);
  function e(s) {
    const n = document.createDocumentFragment(), r = a({ tag: "i", className: `${D} ir-icon` }), d = a({ tag: "span", className: b });
    return d.element.textContent = s.label ?? "", r.element.classList.add(s.icon ? s.icon : y.invisible), n.appendChild(r.element), n.appendChild(d.element), n;
  }
  function t(s) {
    const { element: n } = a({ tag: "button", className: g });
    return n.appendChild(e(s)), n.addEventListener("click", (r) => {
      r.__IR_CONTEXT_MENU_ITEM__ = s;
    }), n;
  }
  function o(s) {
    const { element: n } = a({ tag: "div", className: I }), { element: r } = a({ tag: "i", className: `${x} ir-icon ir-icon--triangle-small-right` });
    if (n.append(e(s), r), s.children && s.children.length > 0) {
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
function R() {
  return a({ tag: "div", className: M }).element;
}
const c = [];
class q {
  constructor(e) {
    this.args = e, this._dom = this._createContextMenuDOM(), this._updateDOM(l(e.items)), c.push(this);
  }
  _id = H();
  _dom;
  _isOpened = !1;
  _isDestroyed = !1;
  _refElement = null;
  _escHandler = null;
  _createContextMenuDOM() {
    const e = $(this._id);
    return "blurDisabled" in this.args && (e.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), e.addEventListener("focusout", (t) => {
      "blurDisabled" in this.args && this.args.blurDisabled || f(t.relatedTarget, this._dom) || t.relatedTarget && t.relatedTarget === this._refElement || this.hide();
    }), e.addEventListener("click", (t) => {
      if (t.__IR_CONTEXT_MENU_ITEM__)
        try {
          this.onCommandButtonClick({
            ev: t,
            item: t.__IR_CONTEXT_MENU_ITEM__
          });
        } finally {
          this.hide();
        }
    }), e;
  }
  _updateDOM(e) {
    this._dom.firstChild && this._dom.removeChild(this._dom.firstChild), this._dom.append(
      m(
        e,
        !1,
        this.args.hiddenIcon ?? !h(e)
      )
    );
  }
  _show(e, t, o) {
    U(), this._isOpened = !0, setTimeout(() => {
      L("popover").appendChild(this._dom), u(e, this._dom, t, o), this._dom.focus(), this._escHandler?.destroy(), this._escHandler = k(this), this._escHandler.create();
    }, 0);
  }
  showAtPoint(e, t) {
    this._show(B(e, t), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(e, t, o = 8) {
    this._refElement = e, this._show(e, t, o);
  }
  hide() {
    this.isOpened !== !1 && (this._isOpened = !1, this._refElement = null, this._escHandler?.destroy(), setTimeout(() => {
      this._dom.remove();
    }, 0));
  }
  destroy() {
    if (this._isDestroyed)
      throw new Error("Already destroyed.");
    this.hide(), this._dom.remove(), this._isDestroyed = !0, this._escHandler?.destroy(), c.splice(c.indexOf(this), 1);
  }
  updateItems(e) {
    const t = l(this.args.items);
    e(t), this.args.items = t, this._updateDOM(t);
  }
  onCommandButtonClick(e) {
  }
  get isOpened() {
    return this._isOpened;
  }
}
function U() {
  c.forEach((i) => i.hide());
}
export {
  q as I
};
