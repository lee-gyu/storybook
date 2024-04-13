// src/utils/layer/index.ts
var initDefaultLayerElements = /* @__PURE__ */ (() => {
  const irStyleLayerElements = [
    "react_app",
    "floating",
    "drawer",
    "dialog",
    "message",
    "popover",
    "toast"
  ];
  function getLayerId(key) {
    return `ir_${key}`;
  }
  function createElement(key) {
    const div = document.createElement("div");
    div.id = getLayerId(key);
    if (key !== "ir_react_app") {
      div.classList.add("ir-style-layer");
      div.classList.add(`z-index--${key}`);
    }
    return div;
  }
  return (parent) => {
    irStyleLayerElements.filter((key) => !document.getElementById(getLayerId(key))).forEach((key) => parent.appendChild(createElement(key)));
  };
})();

// src/_init.ts
if (typeof document !== "undefined")
  initDefaultLayerElements(document.body);
//# sourceMappingURL=chunk-576AFCMI.js.map
