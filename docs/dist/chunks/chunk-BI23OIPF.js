import {
  Logger,
  v4_default
} from "./chunk-JYMTCUXI.js";

// src/js-components/base/index.ts
var uuidIRComponentMap = {};
var SCROLL_CLASS = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll"
];
var IRComponent = class {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor({ contextElement }) {
    this.contextElement = contextElement;
    this._coreElements = [];
    this._globalEvents = [];
    if (this.hasUUID) {
      uuidIRComponentMap[this.uuid].destroy();
      uuidIRComponentMap[this.uuid] = this;
    } else
      this.initUUID();
    this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`;
    this._logger = new Logger(this._componentIdentifier, "WARNING");
  }
  get hasUUID() {
    return this.contextElement.getAttribute("data-uuid") != null;
  }
  get uuid() {
    return this.contextElement.getAttribute("data-uuid") || "";
  }
  get logger() {
    return this._logger;
  }
  get contextWidth() {
    return this.contextElement.scrollWidth;
  }
  get contextHeight() {
    return this.contextElement.scrollHeight;
  }
  destroy() {
    var _a;
    this._coreElements.forEach((e) => e.remove());
    this._globalEvents.forEach(([obj, event, handler]) => obj.removeEventListener(event, handler));
    (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
    this.onDestroy();
    this._coreElements.length = 0;
    this._globalEvents.length = 0;
    this.resizeObserver = void 0;
  }
  addCoreElement(element) {
    this._coreElements.push(element);
    return element;
  }
  /* Global handler 등록이므로 예외 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addGlobalEventListener(object, event, handler) {
    this._globalEvents.push([object, event, handler]);
    object.addEventListener(event, handler);
  }
  onDestroy() {
  }
  getScrollCls(hasVertical, hasHorizontal) {
    if (hasVertical && hasHorizontal)
      return "has-both-scroll";
    else if (hasVertical)
      return "has-vertical-scroll";
    else if (hasHorizontal)
      return "has-horizontal-scroll";
    return "";
  }
  generateScrollBarClass() {
    const hasVertical = this.contextHeight > this.contextElement.clientHeight + 1;
    const hasHorizontal = this.contextWidth > this.contextElement.clientWidth + 1;
    const scrollClass = this.getScrollCls(hasVertical, hasHorizontal);
    SCROLL_CLASS.filter((cls) => !scrollClass.includes(cls)).forEach((cls) => this.contextElement.classList.remove(cls));
    if (scrollClass !== "" && !this.contextElement.classList.contains(scrollClass))
      this.contextElement.classList.add(scrollClass);
  }
  initUUID() {
    if (!this.hasUUID) {
      const id = v4_default();
      this.contextElement.setAttribute("data-uuid", id);
      uuidIRComponentMap[id] = this;
    }
  }
};

export {
  IRComponent
};
//# sourceMappingURL=chunk-BI23OIPF.js.map
