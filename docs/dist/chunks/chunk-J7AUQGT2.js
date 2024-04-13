// src/utils/permission/in-memory-clipboard.ts
var objClipboardMap = /* @__PURE__ */ new WeakMap();
function writeText(object, text) {
  objClipboardMap.set(object, text);
}
function readText(object) {
  return objClipboardMap.get(object);
}

export {
  writeText,
  readText
};
//# sourceMappingURL=chunk-J7AUQGT2.js.map
