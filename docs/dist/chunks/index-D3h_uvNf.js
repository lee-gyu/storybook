import { i as o } from "./_init-DtYkg9NZ.js";
import { L as l } from "./logger-C1WxLZjH.js";
import { v as c } from "./v4-CDGHvpHw.js";
function h(r) {
  let t = null;
  return () => (t === null && (t = r()), t);
}
const a = {
  isDev: !1,
  version: "2.17.1-alpha.0"
};
function u() {
  return {
    get irStyleVersion() {
      return a.version;
    },
    getComponent(r) {
      return i().get(r);
    },
    getComponents(r) {
      return i().getComponents(r);
    }
  };
}
o() && Object.assign(window, { __IR_DEBUG__: u() });
class g {
  _componentDict = {};
  delete(t) {
    delete this._componentDict[t];
  }
  register(t) {
    this._componentDict[t.uuid] = t;
  }
  get(t) {
    return this._componentDict[t] ?? null;
  }
  replace(t, e) {
    this.get(t)?.destroy(), this.register(e);
  }
  clear() {
    [...Object.values(this._componentDict)].forEach((t) => t.destroy());
  }
  getComponents(t) {
    return Object.values(this._componentDict).filter((e) => e && (t === void 0 || e.componentLabel === t));
  }
}
const i = h(() => new g()), m = 12, d = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll"
];
class b {
  contextElement;
  _coreElements;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _globalEvents;
  _logger;
  _componentIdentifier;
  _resizeObserver;
  #t = !1;
  constructor({ contextElement: t }) {
    this.contextElement = t, this._coreElements = [], this._globalEvents = [], this.componentLabel && (t.dataset.componentLabel = this.componentLabel), this.hasUUID ? i().replace(this.uuid, this) : this.initUUID(), this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`, this._logger = new l(this._componentIdentifier, "WARNING");
  }
  get hasUUID() {
    return this.contextElement.getAttribute("data-uuid") != null;
  }
  get uuid() {
    return this.contextElement.getAttribute("data-uuid") || "";
  }
  get componentLabel() {
    return "";
  }
  get isDestroyed() {
    return this.#t;
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
    this._coreElements.forEach((t) => t.remove()), this._globalEvents.forEach(([t, e, s, n]) => t.removeEventListener(e, s, n)), this._resizeObserver?.disconnect(), this.#t = !0, this.onDestroy(), this._coreElements.length = 0, this._globalEvents.length = 0, this._resizeObserver = void 0, i().delete(this.uuid);
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
  /**
   * destroy 호출 시점에 같이 정리되어야 하는 이벤트 등록
   */
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
    d.filter((n) => !s.includes(n)).forEach((n) => this.contextElement.classList.remove(n)), s !== "" && !this.contextElement.classList.contains(s) && this.contextElement.classList.add(s);
  }
  initUUID() {
    if (!this.hasUUID) {
      const t = c().replace(/-/g, "").substring(0, m);
      this.contextElement.setAttribute("data-uuid", t), i().register(this);
    }
  }
}
export {
  b as I
};
//# sourceMappingURL=index-D3h_uvNf.js.map
