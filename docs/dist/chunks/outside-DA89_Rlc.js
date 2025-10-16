function a(n) {
  n.dispatchEvent(new CustomEvent(o, { bubbles: !0 }));
}
const o = "ir::click-outside-custom";
function c({ eventElements: n, getEventElements: r, clickOutsideFunc: s }) {
  const e = (i) => {
    const l = [...n, ...r ? r() : []];
    let t = i.target;
    for (; t !== null; ) {
      if (l.indexOf(t) !== -1)
        return;
      t = t.parentElement;
    }
    s && s(), d.destroy();
  }, d = {
    create: () => {
      window.addEventListener("scroll", e, !0), window.addEventListener("mousedown", e), window.addEventListener(o, e);
    },
    destroy: () => {
      window.removeEventListener("scroll", e, !0), window.removeEventListener("mousedown", e), window.removeEventListener(o, e);
    }
  };
  return d;
}
export {
  c,
  a as d
};
