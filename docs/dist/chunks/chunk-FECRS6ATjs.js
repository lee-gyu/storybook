import {
  require_lodash
} from "./chunk-H4BZVVDUjs.js";
import {
  __async,
  __toESM
} from "./chunk-ZK6IOW44js.js";

// src/utils/dom.ts
function appendElement(parent, tagName, ...classes) {
  const element = document.createElement(tagName);
  classes.forEach((x) => element.classList.add(x));
  parent.appendChild(element);
  return element;
}
function hasClass(element, cls, until) {
  let tmpElement = element;
  while (tmpElement && !tmpElement.classList.contains(cls)) {
    if (tmpElement === until)
      return null;
    tmpElement = tmpElement.parentElement;
  }
  return tmpElement;
}
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element)
    return element;
  else
    throw new Error(`There is no '${selector}'`);
}

// src/utils/outside.ts
function createClickOutsideHandler({ eventElements, initFunc, clickOutsideFunc }) {
  const globalClickHandler = (ev) => {
    let tmp = ev.target;
    while (tmp !== null) {
      if (eventElements.indexOf(tmp) !== -1)
        return;
      tmp = tmp.parentElement;
    }
    if (clickOutsideFunc)
      clickOutsideFunc();
    handler.destroy();
  };
  const handler = {
    create: () => {
      if (initFunc)
        initFunc();
      window.addEventListener("scroll", globalClickHandler, true);
      window.addEventListener("mousedown", globalClickHandler);
    },
    destroy: () => {
      window.removeEventListener("scroll", globalClickHandler, true);
      window.removeEventListener("mousedown", globalClickHandler);
    }
  };
  return handler;
}

// src/utils/palette.ts
var Palette = {
  BIZ_NO_AUTH: "var(--purple)"
};

// src/utils/keyBinder/keyBinder.ts
var keyMap = {};
document.addEventListener("keyup", (ev) => {
  if (keyMap[ev.key])
    keyMap[ev.key].forEach((callBack) => callBack(ev));
});
function registerGlobalKeyListener(key, callback) {
  if (keyMap[key])
    keyMap[key].push(callback);
  else
    keyMap[key] = [callback];
}
function unregisterGlobalKeyListener(key, callback) {
  const id = keyMap[key].indexOf(callback);
  if (id !== -1)
    keyMap[key].splice(id, 1);
}
function clearGlobalKeyListener(key) {
  delete keyMap[key];
}

// src/utils/keyBinder/esc-hide.ts
var popupStack = [];
registerGlobalKeyListener("Escape", () => {
  var _a;
  const pop = popupStack.pop();
  if (pop) {
    (_a = pop.onESC) == null ? void 0 : _a.call(pop);
    pop.hide();
  }
});
function createESCHideController(obj) {
  function getId() {
    return popupStack.indexOf(obj);
  }
  return {
    create: () => {
      if (getId() === -1)
        popupStack.push(obj);
      else
        throw new Error(`Already created esc controller`);
    },
    destroy: () => {
      const id = popupStack.indexOf(obj);
      if (id !== -1)
        popupStack.splice(id, 1);
    }
  };
}

// src/utils/popover.ts
var zIndexMapList = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
};
var getZIndex = (type, id) => {
  if (id >= 100)
    throw new Error(`z-index could not be set more 100`);
  return `calc(var(--z-index-${type}) + ${id * 100})`;
};
var updateZIndex = (type) => {
  zIndexMapList[type].forEach((popover, id) => popover.element.style.zIndex = getZIndex(type, id));
};
var createPopover = ({ selector, element, type, onESC, escClose = true, parentElement, onInit }) => {
  const popoverElement = element || document.querySelector(selector || "");
  if (!popoverElement)
    throw new Error("missing element to popover. Please check the parameters (selector or element)");
  const hideEventHandler = (ev) => {
    if (ev.target !== popoverElement)
      return;
    popoverElement.remove();
    popoverElement.removeEventListener("transitionend", hideEventHandler);
  };
  const handler = {
    get element() {
      return popoverElement;
    },
    show: () => {
      if (popoverElement.classList.contains("is-visible"))
        return;
      if (escClose)
        escController.create();
      if (parentElement) {
        parentElement.appendChild(popoverElement);
        setTimeout(() => popoverElement.classList.add("is-visible"), 0);
      } else
        popoverElement.classList.add("is-visible");
      zIndexMapList[type].push(handler);
      updateZIndex(type);
      return handler;
    },
    hide: () => {
      if (escClose)
        escController.destroy();
      popoverElement.classList.remove("is-visible");
      popoverElement.style.removeProperty("z-index");
      if (parentElement)
        popoverElement.addEventListener("transitionend", hideEventHandler);
      zIndexMapList[type] = zIndexMapList[type].filter((x) => x !== handler);
      if (onESC)
        onESC();
      return handler;
    },
    bringToTop: () => {
      handler.hide();
      handler.show();
    }
  };
  const escController = createESCHideController(handler);
  onInit && onInit(popoverElement, handler);
  if (parentElement && popoverElement.isConnected)
    popoverElement.remove();
  return handler;
};

// src/settings/constants.ts
var classPrefix = "";

// src/utils/classNames/bem.ts
var StateList = Object.freeze(["is-hidden", "is-dragging", "is-active", "is-expanded", "is-collapsed", "is-selected", "has-children", "is-visible", "is-disabled", "is-diff", "is-same", "is-readonly", "is-error", "is-resizing"]);
function BEMClass({ block: block3, element = "", modifier = [], state = [] }) {
  const blockElementName = element ? `${classPrefix}${block3}__${element}` : `${classPrefix}${block3}`;
  const obj = {
    blockElementName,
    toString: () => blockElementName
  };
  modifier.forEach((modi) => Object.defineProperty(obj, modi, { get: () => `${blockElementName}--${modi}` }));
  state.forEach((state2) => Object.defineProperty(obj, state2, { get: () => state2 }));
  return obj;
}

// src/utils/classNames/z-index.classNames.ts
var block = "z-index";
var z_index_classNames_default = {
  zIndex: BEMClass({ block, modifier: ["floating", "dialog", "popover", "toast", "message"] })
};

// src/utils/size.ts
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
function getTextWidthContext(fontSize, fontFamily) {
  context.font = `${fontSize} ${fontFamily}`;
  return {
    calculateWidth: (text) => context.measureText(text.replace(/ /g, "|")).width
  };
}

// src/utils/math.ts
function getMinMaxBetween(value, min, max) {
  if (value < min)
    return min;
  else if (value > max)
    return max;
  else
    return value;
}

// src/utils/permission/clipboard.ts
var textarea = document.createElement("textarea");
textarea.style.position = "fixed";
textarea.style.opacity = "0";
textarea.style.top = "0";
textarea.style.left = "0";
textarea.style.zIndex = "-1";
textarea.style.outline = "0 none";
textarea.style.overflow = "hidden";
textarea.setAttribute("tabindex", "-1");
textarea.setAttribute("autocomplete", "off");
textarea.setAttribute("wrap", "hard");
var ClipboardManager = {
  check: (permission) => __async(void 0, null, function* () {
    const state = yield navigator.permissions.query({ name: permission });
    return state.state;
  }),
  getText: () => __async(void 0, null, function* () {
    return yield navigator.clipboard.readText();
  }),
  setText: (text) => {
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.value = text;
    textarea.select();
    document.execCommand("cut");
  }
};

// src/utils/css.ts
function getCssText(css) {
  return Object.entries(css).map(([k, v]) => `${k}: ${v}`).join(";");
}

// src/utils/loading.ts
var import_lodash = __toESM(require_lodash());

// src/utils/collection.ts
function* get2DGenerator(height, width) {
  for (let y = 0; y < height; ++y)
    for (let x = 0; x < width; ++x)
      yield { y, x };
}

// src/utils/logger.ts
var LOG_LEVEL_LABEL = ["ERROR", "WARNING", "DEBUG", "INFO"];
var LOG_LEVEL_MAP = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
};
var Logger = class {
  constructor(id, logLevel = "ERROR") {
    this.id = id;
    this._logLevel = LOG_LEVEL_MAP[logLevel];
  }
  get logLevel() {
    return LOG_LEVEL_LABEL[this._logLevel];
  }
  set logLevel(logLevel) {
    this._logLevel = LOG_LEVEL_MAP[logLevel];
  }
  error(...data) {
    if (this._logLevel >= 0)
      console.error(this.id, ...data);
  }
  warn(...data) {
    if (this._logLevel >= 1)
      console.warn(this.id, ...data);
  }
  debug(...data) {
    if (this._logLevel >= 2)
      console.debug(this.id, ...data);
  }
  info(...data) {
    if (this._logLevel >= 3)
      console.info(this.id, ...data);
  }
};

// src/utils/icon.ts
var createCustomIcon = (...iconList) => {
  const buffer = [];
  iconList.forEach(({ svg, name, masked = false }) => {
    const base64 = btoa(svg);
    const className = `.ir-icon--${name}`;
    const varName = `--ir-icon--${name}`;
    buffer.push(`
.ir-icon {
    ${varName}: url("data:image/svg+xml;base64,${base64}")
}`);
    if (masked) {
      buffer.push(`
${className} {
    -webkit-mask-image: var(${varName});
    mask-image: var(${varName});
    background-image: none;
    background-color: none;
}`);
    } else {
      buffer.push(`
${className} {
    background: var(${varName}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
    }
  });
  const styleElement = document.createElement("style");
  styleElement.innerHTML = buffer.join("\n");
  document.head.appendChild(styleElement);
};

// src/components/loading/loading.classNames.ts
var block2 = "loading";
var loading_classNames_default = {
  loading: BEMClass({ block: block2, modifier: ["primary", "secondary", "tertiary"] }),
  loadingItems: BEMClass({ block: block2, element: "items" }),
  loadingDotItem: BEMClass({ block: block2, element: "dot-item" })
};

// src/utils/loading.ts
var createLoading = () => {
  const loading = document.createElement("div");
  const items = document.createElement("div");
  loading.className = loading_classNames_default.loading.blockElementName;
  items.className = loading_classNames_default.loadingItems.blockElementName;
  import_lodash.default.range(4).forEach(() => {
    const i = document.createElement("i");
    i.className = loading_classNames_default.loadingDotItem.blockElementName;
    items.appendChild(i);
  });
  loading.appendChild(items);
  return loading;
};
var createLoadingHandler = ({ contextElement, onClick, animated = false, startDelay = 0 }) => {
  const loading = createLoading();
  const loadingScrollHandler = () => loading.isConnected && handler.updatePos();
  let scheduled = false;
  let timeout = 0;
  if (onClick)
    loading.onclick = (ev) => onClick(ev);
  if (animated === false)
    loading.classList.add("has-no-animation");
  const handler = {
    updatePos: () => {
      const rect = contextElement.getBoundingClientRect();
      loading.style.cssText = getCssText({
        top: `${rect.y}px`,
        left: `${rect.x}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      });
    },
    show: () => {
      if (scheduled)
        return;
      scheduled = true;
      timeout = window.setTimeout(() => {
        scheduled = false;
        timeout = 0;
        handler.updatePos();
        requestAnimationFrame(() => loading.classList.add("is-visible"));
        contextElement.insertAdjacentElement("afterend", loading);
        window.addEventListener("scroll", loadingScrollHandler, true);
      }, startDelay);
    },
    _hide() {
      loading.remove();
      window.removeEventListener("scroll", loadingScrollHandler, true);
    },
    hide() {
      if (scheduled) {
        clearTimeout(timeout);
        return;
      }
      scheduled = false;
      timeout = 0;
      loading.classList.remove("is-visible");
      if (animated)
        loading.addEventListener("transitionend", () => this._hide(), { once: true });
      else
        this._hide();
    }
  };
  return handler;
};

export {
  appendElement,
  hasClass,
  getElement,
  createClickOutsideHandler,
  Palette,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener,
  clearGlobalKeyListener,
  createESCHideController,
  createPopover,
  StateList,
  BEMClass,
  z_index_classNames_default,
  getTextWidthContext,
  getMinMaxBetween,
  ClipboardManager,
  getCssText,
  createLoadingHandler,
  get2DGenerator,
  Logger,
  createCustomIcon
};
//# sourceMappingURL=chunk-FECRS6ATjs.js.map
