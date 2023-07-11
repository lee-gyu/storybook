import {
  IRContextMenuContext,
  contextMenuListAtom,
  getDefaultStore,
  produce,
  require_jsx_runtime,
  require_react,
  require_react_dom
} from "./chunks/chunk-YURDEAAV.js";
import {
  require_lodash,
  v4_default
} from "./chunks/chunk-N2GALXSL.js";
import {
  __commonJS,
  __toESM
} from "./chunks/chunk-56RD7WBD.js";

// ../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// src/react-components/app/index.tsx
var import_react = __toESM(require_react());
var import_client = __toESM(require_client());

// src/react-components/app/app.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IRContextMenuContext, {}) });
}

// src/react-components/app/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var rootElement = document.getElementById("ir_react_app");
if (!rootElement)
  throw new Error("Root element not found!");
var root = (0, import_client.createRoot)(rootElement);
root.render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}) }));

// src/react-components/context-menu/context-menu.adapter.ts
var import_lodash = __toESM(require_lodash());
var defaultStore = getDefaultStore();
var IRContextMenuAdapter = class {
  constructor({ items, blurDisabled = false }) {
    this._uuid = v4_default();
    this._isDestroyed = false;
    const itemsCloneDeep = (0, import_lodash.default)(items).cloneDeep();
    this.findDividerRecursively(itemsCloneDeep);
    defaultStore.set(contextMenuListAtom, produce((draft) => {
      draft.push({
        isVisible: false,
        key: this._uuid,
        items: itemsCloneDeep,
        blurDisabled,
        placement: "right-start",
        onHide: this.hide.bind(this),
        onCommandButtonClick: (ev, item) => {
          this.onCommandButtonClick({ ev: ev.nativeEvent, item });
        }
      });
    }));
  }
  findDividerRecursively(items) {
    items.forEach((item) => {
      if (item.id === void 0)
        item.id = v4_default();
      if (item.type === "dropdown")
        this.findDividerRecursively(item.children);
    });
  }
  findItemAndDoAction(action) {
    defaultStore.set(contextMenuListAtom, produce((draft) => {
      const find = draft.find((item) => item.key === this._uuid);
      if (find)
        action(find);
      else
        console.warn("Not found context menu. is it destroyed?");
    }));
  }
  showAtPoint(x, y) {
    this.findItemAndDoAction((item) => {
      item.isVisible = true;
      item.point = { x, y };
      item.placement = "right-start";
      item.onGetRefElement = void 0;
    });
  }
  showByElement(refElement, placement, offset) {
    this.findItemAndDoAction((item) => {
      item.isVisible = true;
      item.onGetRefElement = () => refElement;
      item.placement = placement;
      item.offset = offset;
      item.point = void 0;
    });
  }
  hide() {
    this.findItemAndDoAction((item) => {
      item.isVisible = false;
    });
  }
  destroy() {
    if (this._isDestroyed)
      throw new Error("Already destroyed.");
    this._isDestroyed = true;
    defaultStore.set(contextMenuListAtom, produce((draft) => draft.filter((item) => item.key !== this._uuid)));
  }
  updateItems(updateCallback) {
    this.findItemAndDoAction((item) => updateCallback(item.items));
  }
  onCommandButtonClick(_args) {
  }
};
export {
  IRContextMenuAdapter
};
//# sourceMappingURL=react.js.map
