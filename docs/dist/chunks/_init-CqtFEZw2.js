const d = /* @__PURE__ */ (() => {
  const r = [
    "react_app",
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
  function a(t) {
    const e = document.createElement("div");
    return e.id = n(t), t !== "ir_react_app" && (e.classList.add("ir-style-layer"), e.classList.add(`z-index--${t}`)), e;
  }
  return (t) => {
    r.filter((e) => !document.getElementById(n(e))).forEach((e) => t.appendChild(a(e)));
  };
})();
typeof document < "u" && d(document.body);
//# sourceMappingURL=_init-CqtFEZw2.js.map
