import { L as o } from "./logger-BzjoGhbK.js";
import { v as n } from "./v4-ANoOI1Qw.js";
const r = {}, l = 12, h = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll"
];
class d {
  constructor({ contextElement: t }) {
    var e;
    this.contextElement = t, this._coreElements = [], this._globalEvents = [], this.hasUUID ? ((e = r[this.uuid]) == null || e.destroy(), r[this.uuid] = this) : this.initUUID(), this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`, this._logger = new o(this._componentIdentifier, "WARNING");
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
    var t;
    this._coreElements.forEach((e) => e.remove()), this._globalEvents.forEach(([e, s, i]) => e.removeEventListener(s, i)), (t = this._resizeObserver) == null || t.disconnect(), this.onDestroy(), this._coreElements.length = 0, this._globalEvents.length = 0, this._resizeObserver = void 0, r[this.uuid] = null;
  }
  resizeObserve(t) {
    var e;
    (e = this._resizeObserver) == null || e.disconnect(), this._resizeObserver = new ResizeObserver(t), this._resizeObserver.observe(this.contextElement);
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
  addGlobalEventListener(t, e, s, i) {
    this._globalEvents.push([t, e, s]), t.addEventListener(e, s, i);
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
    h.filter((i) => !s.includes(i)).forEach((i) => this.contextElement.classList.remove(i)), s !== "" && !this.contextElement.classList.contains(s) && this.contextElement.classList.add(s);
  }
  initUUID() {
    if (!this.hasUUID) {
      const t = n().replace(/-/g, "").substring(0, l);
      this.contextElement.setAttribute("data-uuid", t), r[t] = this;
    }
  }
}
export {
  d as I
};
//# sourceMappingURL=index-E8PN8AEz.js.map
