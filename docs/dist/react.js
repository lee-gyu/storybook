import "./chunks/_init-CqtFEZw2.js";
import { r as m, j as d, I as p, R as y, g as v, c as s, a as r } from "./chunks/react-components-DtzapU8g.js";
import { c as A } from "./chunks/clone-CMP76bLO.js";
import { v as u } from "./chunks/v4-ANoOI1Qw.js";
var c, a = m;
c = a.createRoot, a.hydrateRoot;
function D() {
  return /* @__PURE__ */ d.jsx(p, {});
}
const f = document.getElementById("ir_react_app");
if (!f)
  throw new Error("Root element not found!");
const R = c(f);
R.render(/* @__PURE__ */ d.jsx(y.StrictMode, { children: /* @__PURE__ */ d.jsx(D, {}) }));
const n = v();
class w {
  constructor({ items: e, blurDisabled: t = !1 }) {
    this._uuid = u(), this._isDestroyed = !1;
    const o = A(e);
    this.findDividerRecursively(o), n.set(s, (i) => [
      ...i,
      {
        uuid: this._uuid,
        key: this._uuid,
        items: o,
        blurDisabled: t,
        placement: "right-start",
        onHide: this.hide.bind(this),
        onCommandButtonClick: (h, l) => {
          this.onCommandButtonClick({ ev: h.nativeEvent, item: l });
        }
      }
    ]);
  }
  findDividerRecursively(e) {
    e.forEach((t) => {
      t.id === void 0 && (t.id = u()), t.type === "dropdown" && this.findDividerRecursively(t.children);
    });
  }
  findItemAndDoAction(e) {
    n.set(s, (t) => {
      const o = t.find((i) => i.key === this._uuid);
      return o ? e(o) : console.warn("Not found context menu. is it destroyed?"), [...t];
    });
  }
  showAtPoint(e, t) {
    n.set(r, this._uuid), this.findItemAndDoAction((o) => {
      o.point = { x: e, y: t }, o.placement = "right-start", o.onGetRefElement = void 0;
    });
  }
  showByElement(e, t, o) {
    n.set(r, this._uuid), this.findItemAndDoAction((i) => {
      i.onGetRefElement = () => e, i.placement = t, i.offset = o, i.point = void 0;
    });
  }
  hide() {
    n.set(r, null);
  }
  destroy() {
    if (this._isDestroyed)
      throw new Error("Already destroyed.");
    this._isDestroyed = !0, n.set(s, (e) => e.filter((t) => t.key !== this._uuid));
  }
  updateItems(e) {
    this.findItemAndDoAction((t) => e(t.items));
  }
  onCommandButtonClick(e) {
  }
}
export {
  w as IRContextMenuAdapter
};
//# sourceMappingURL=react.js.map
