function r(n, a, ...t) {
  const e = c(a, ...t);
  return n.appendChild(e), e;
}
function c(n, ...a) {
  const t = document.createElement(n);
  return a.forEach((e) => t.classList.add(e)), t;
}
function l(n, a, t) {
  let e = t;
  for (; e; ) {
    if (e.matches(n))
      return e;
    if (e.matches(a))
      break;
    e = e.parentElement;
  }
  return null;
}
export {
  r as a,
  c as b,
  l as c
};
//# sourceMappingURL=dom-BFx2fdL6.js.map
