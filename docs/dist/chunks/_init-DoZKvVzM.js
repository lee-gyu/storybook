import { k as r, z as d } from "./css-D8WWZA3p.js";
function s() {
  return typeof window < "u";
}
const a = /* @__PURE__ */ (() => {
  const i = [
    "floating",
    "drawer",
    "dialog",
    "message",
    "popover",
    "toast"
  ];
  function n(t) {
    return `ir_${t}`;
  }
  function o(t) {
    const e = document.createElement("div");
    return e.id = n(t), e.classList.add(r.position.fixed, d[t]), e;
  }
  return (t) => {
    i.filter((e) => !document.getElementById(n(e))).forEach((e) => t.appendChild(o(e)));
  };
})();
s() && a(document.body);
export {
  s as i
};
//# sourceMappingURL=_init-DoZKvVzM.js.map