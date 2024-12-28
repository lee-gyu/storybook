function l(n) {
  n.dispatchEvent(new CustomEvent(r, { bubbles: !0 }));
}
const r = "ir::click-outside-custom";
function a({ eventElements: n, initFunc: o, clickOutsideFunc: d }) {
  const e = (s) => {
    let t = s.target;
    for (; t !== null; ) {
      if (n.indexOf(t) !== -1)
        return;
      t = t.parentElement;
    }
    d && d(), i.destroy();
  }, i = {
    create: () => {
      o && o(), window.addEventListener("scroll", e, !0), window.addEventListener("mousedown", e), window.addEventListener(r, e);
    },
    destroy: () => {
      window.removeEventListener("scroll", e, !0), window.removeEventListener("mousedown", e), window.removeEventListener(r, e);
    }
  };
  return i;
}
export {
  a as c,
  l as d
};
//# sourceMappingURL=outside-C4hfBiDS.js.map
