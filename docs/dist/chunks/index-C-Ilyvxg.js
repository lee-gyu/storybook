import { i as l } from "./_init-Cv3gCb_1.js";
import { L as c } from "./logger-C1WxLZjH.js";
import { v as h } from "./v4-Cgt9uYzN.js";
function a(r) {
  let t = null;
  return () => (t === null && (t = r()), t);
}
function u() {
  return {
    registerCommand(r) {
    }
  };
}
const g = a(() => u()), m = "2.13.0";
function d() {
  let r = {};
  return {
    get irStyleVersion() {
      return m;
    },
    getCommandController: g,
    setIRComponentMap(t) {
      r = t;
    },
    getComponent(t) {
      return r[t];
    }
  };
}
const o = d();
l() && Object.assign(window, { __IR_DEBUG__: o });
const i = {}, E = 12;
o.setIRComponentMap(i);
const _ = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll"
];
class p {
  contextElement;
  _coreElements;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _globalEvents;
  _logger;
  _componentIdentifier;
  _resizeObserver;
  constructor({ contextElement: t }) {
    this.contextElement = t, this._coreElements = [], this._globalEvents = [], this.hasUUID ? (i[this.uuid]?.destroy(), i[this.uuid] = this) : this.initUUID(), this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`, this._logger = new c(this._componentIdentifier, "WARNING");
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
    this._coreElements.forEach((t) => t.remove()), this._globalEvents.forEach(([t, e, s, n]) => t.removeEventListener(e, s, n)), this._resizeObserver?.disconnect(), this.onDestroy(), this._coreElements.length = 0, this._globalEvents.length = 0, this._resizeObserver = void 0, i[this.uuid] = null;
  }
  resizeObserve(t) {
    this._resizeObserver?.disconnect(), this._resizeObserver = new ResizeObserver(t), this._resizeObserver.observe(this.contextElement);
  }
  // destroy() 호출 시점에 같이 정리되는 엘리먼트 등록
  // 사용케이스: contextElement가 제거되어도 제거 되지 않는 요소 등록
  addCoreElement(t) {
    return this._coreElements.push(t), t;
  }
  /**
   * destroy() 호출 시점에 같이 정리되어야 하는 이벤트 등록
   * 해당 이벤트 처리 요소가 contextElement 내부 자식 요소가 아닌 경우에 사용
   */
  addGlobalEventListener(t, e, s, n) {
    this._globalEvents.push([t, e, s, n]), t.addEventListener(e, s, n);
  }
  onDestroy() {
  }
  getScrollCls(t, e) {
    return t && e ? "has-both-scroll" : t ? "has-vertical-scroll" : e ? "has-horizontal-scroll" : "";
  }
  hasVerticalScroll() {
    return this.contextHeight > this.contextElement.clientHeight + 1;
  }
  hasHorizontalScroll() {
    return this.contextWidth > this.contextElement.clientWidth + 1;
  }
  generateScrollBarClass() {
    const t = this.hasVerticalScroll(), e = this.hasHorizontalScroll(), s = this.getScrollCls(t, e);
    _.filter((n) => !s.includes(n)).forEach((n) => this.contextElement.classList.remove(n)), s !== "" && !this.contextElement.classList.contains(s) && this.contextElement.classList.add(s);
  }
  initUUID() {
    if (!this.hasUUID) {
      const t = h().replace(/-/g, "").substring(0, E);
      this.contextElement.setAttribute("data-uuid", t), i[t] = this;
    }
  }
}
export {
  p as I
};
//# sourceMappingURL=index-C-Ilyvxg.js.map
