import{a as i}from"./chunk-H64UOPIH.js";import{a as r}from"./chunk-ZSTOGUCC.js";var o={},c=12,h=["has-both-scroll","has-vertical-scroll","has-horizontal-scroll"],l=class{constructor({contextElement:t}){var e;this.contextElement=t,this._coreElements=[],this._globalEvents=[],this.hasUUID?((e=o[this.uuid])==null||e.destroy(),o[this.uuid]=this):this.initUUID(),this._componentIdentifier=`${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`,this._logger=new i(this._componentIdentifier,"WARNING")}get hasUUID(){return this.contextElement.getAttribute("data-uuid")!=null}get uuid(){return this.contextElement.getAttribute("data-uuid")||""}get logger(){return this._logger}get contextWidth(){return this.contextElement.scrollWidth}get contextHeight(){return this.contextElement.scrollHeight}destroy(){var t;this._coreElements.forEach(e=>e.remove()),this._globalEvents.forEach(([e,n,s])=>e.removeEventListener(n,s)),(t=this.resizeObserver)==null||t.disconnect(),this.onDestroy(),this._coreElements.length=0,this._globalEvents.length=0,this.resizeObserver=void 0,o[this.uuid]=null}addCoreElement(t){return this._coreElements.push(t),t}addGlobalEventListener(t,e,n){this._globalEvents.push([t,e,n]),t.addEventListener(e,n)}onDestroy(){}getScrollCls(t,e){return t&&e?"has-both-scroll":t?"has-vertical-scroll":e?"has-horizontal-scroll":""}generateScrollBarClass(){let t=this.contextHeight>this.contextElement.clientHeight+1,e=this.contextWidth>this.contextElement.clientWidth+1,n=this.getScrollCls(t,e);h.filter(s=>!n.includes(s)).forEach(s=>this.contextElement.classList.remove(s)),n!==""&&!this.contextElement.classList.contains(n)&&this.contextElement.classList.add(n)}initUUID(){if(!this.hasUUID){let t=r().replace(/-/g,"").substring(0,c);this.contextElement.setAttribute("data-uuid",t),o[t]=this}}};export{l as a};