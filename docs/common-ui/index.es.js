function m({ tag: r, className: i, dataset: c, children: n, attr: a, textContents: o }) {
  const e = document.createElement(r);
  return c && Object.assign(e.dataset, c), i && (e.className = i), a && Object.entries(a).forEach(([t, f]) => e.setAttribute(t, f)), o && (e.textContent = o), n && n.forEach((t) => e.append(t.element)), {
    element: e,
    children: n ?? [],
    append(...t) {
      return t && this.element.append(...t), this;
    }
  };
}
function p(r) {
  return m({
    tag: "div"
  }), {
    showDialog() {
    }
  };
}
export {
  p as createServiceSwitcher
};
