function f(e, n) {
  let t = e;
  for (; t; ) {
    if (n === t)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function c(e) {
  return (n) => n.matches(e);
}
function o(e, n, t) {
  let r = e;
  const l = typeof t == "string" ? c(t) : t;
  for (; r; ) {
    if (l(r))
      return r;
    if (n === r)
      break;
    r = r.parentElement;
  }
  return null;
}
function h(e) {
  for (; e.lastChild; )
    e.lastChild.remove();
}
function m({ tag: e, className: n, dataset: t, children: r, attr: l, textContents: s }) {
  const a = document.createElement(e);
  return t && Object.assign(a.dataset, t), n && (a.className = n), l && Object.entries(l).forEach(([i, u]) => a.setAttribute(i, u)), s && (a.textContent = s), r && r.forEach((i) => a.append(i.element)), {
    element: a,
    children: r ?? [],
    append(...i) {
      return i && this.element.append(...i), this;
    }
  };
}
function d(e, n, t) {
  t ? e.dataset[n] = "true" : delete e.dataset[n];
}
export {
  o as a,
  m as c,
  f as i,
  h as r,
  d as s
};
