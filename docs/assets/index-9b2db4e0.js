import"./timePicker.elements-9fc1c89b.js";import{v as _t}from"./v4-a960c1f4.js";function Yt({eventElements:t,initFunc:e,clickOutsideFunc:o}){const n=l=>{let i=l.target;for(;i!==null;){if(t.indexOf(i)!==-1)return;i=i.parentElement}o&&o(),r.destroy()},r={create:()=>{e&&e(),window.addEventListener("scroll",n,!0),window.addEventListener("mousedown",n)},destroy:()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("mousedown",n)}};return r}const Dt=["ERROR","WARNING","DEBUG","INFO"],ct={ERROR:0,WARNING:1,DEBUG:2,INFO:3};class Ct{constructor(e,o="ERROR"){this.id=e,this._logLevel=ct[o]}get logLevel(){return Dt[this._logLevel]}set logLevel(e){this._logLevel=ct[e]}error(...e){this._logLevel>=0&&console.error(this.id,...e)}warn(...e){this._logLevel>=1&&console.warn(this.id,...e)}debug(...e){this._logLevel>=2&&console.debug(this.id,...e)}info(...e){this._logLevel>=3&&console.info(this.id,...e)}}function Y(t){return t.split("-")[1]}function gt(t){return t==="y"?"height":"width"}function k(t){return t.split("-")[0]}function nt(t){return["top","bottom"].includes(k(t))?"x":"y"}function at(t,e,o){let{reference:n,floating:r}=t;const l=n.x+n.width/2-r.width/2,i=n.y+n.height/2-r.height/2,s=nt(e),f=gt(s),c=n[f]/2-r[f]/2,u=s==="x";let a;switch(k(e)){case"top":a={x:l,y:n.y-r.height};break;case"bottom":a={x:l,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:i};break;case"left":a={x:n.x-r.width,y:i};break;default:a={x:n.x,y:n.y}}switch(Y(e)){case"start":a[s]-=c*(o&&u?-1:1);break;case"end":a[s]+=c*(o&&u?-1:1)}return a}const Ot=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:l=[],platform:i}=o,s=l.filter(Boolean),f=await(i.isRTL==null?void 0:i.isRTL(e));let c=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:a}=at(c,n,f),h=n,d={},p=0;for(let m=0;m<s.length;m++){const{name:y,fn:g}=s[m],{x,y:v,data:R,reset:A}=await g({x:u,y:a,initialPlacement:n,placement:h,strategy:r,middlewareData:d,rects:c,platform:i,elements:{reference:t,floating:e}});u=x??u,a=v??a,d={...d,[y]:{...d[y],...R}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(c=A.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:u,y:a}=at(c,h,f)),m=-1)}return{x:u,y:a,placement:h,strategy:r,middlewareData:d}};function St(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function M(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function $t(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:l,rects:i,elements:s,strategy:f}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:h=!1,padding:d=0}=e,p=St(d),m=s[h?a==="floating"?"reference":"floating":a],y=M(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(m)))==null||o?m:m.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:f})),g=a==="floating"?{...i.floating,x:n,y:r}:i.reference,x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),v=await(l.isElement==null?void 0:l.isElement(x))&&await(l.getScale==null?void 0:l.getScale(x))||{x:1,y:1},R=M(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:f}):g);return{top:(y.top-R.top+p.top)/v.y,bottom:(R.bottom-y.bottom+p.bottom)/v.y,left:(y.left-R.left+p.left)/v.x,right:(R.right-y.right+p.right)/v.x}}const Pt=["top","right","bottom","left"];Pt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const Wt={left:"right",right:"left",bottom:"top",top:"bottom"};function j(t){return t.replace(/left|right|bottom|top/g,e=>Wt[e])}function kt(t,e,o){o===void 0&&(o=!1);const n=Y(t),r=nt(t),l=gt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(i=j(i)),{main:i,cross:j(i)}}const Ft={start:"end",end:"start"};function K(t){return t.replace(/start|end/g,e=>Ft[e])}const It=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:r,rects:l,initialPlacement:i,platform:s,elements:f}=e,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:a,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:p=!0,...m}=t,y=k(n),g=k(i)===i,x=await(s.isRTL==null?void 0:s.isRTL(f.floating)),v=a||(g||!p?[j(i)]:function(E){const D=j(E);return[K(E),D,K(D)]}(i));a||d==="none"||v.push(...function(E,D,P,O){const C=Y(E);let L=function(B,J,Rt){const lt=["left","right"],st=["right","left"],At=["top","bottom"],Tt=["bottom","top"];switch(B){case"top":case"bottom":return Rt?J?st:lt:J?lt:st;case"left":case"right":return J?At:Tt;default:return[]}}(k(E),P==="start",O);return C&&(L=L.map(B=>B+"-"+C),D&&(L=L.concat(L.map(K)))),L}(i,p,d,x));const R=[i,...v],A=await $t(e,m),z=[];let U=((o=r.flip)==null?void 0:o.overflows)||[];if(c&&z.push(A[y]),u){const{main:E,cross:D}=kt(n,l,x);z.push(A[E],A[D])}if(U=[...U,{placement:n,overflows:z}],!z.every(E=>E<=0)){var ot,it;const E=(((ot=r.flip)==null?void 0:ot.index)||0)+1,D=R[E];if(D)return{data:{index:E,overflows:U},reset:{placement:D}};let P=(it=U.filter(O=>O.overflows[0]<=0).sort((O,C)=>O.overflows[1]-C.overflows[1])[0])==null?void 0:it.placement;if(!P)switch(h){case"bestFit":{var rt;const O=(rt=U.map(C=>[C.placement,C.overflows.filter(L=>L>0).reduce((L,B)=>L+B,0)]).sort((C,L)=>C[1]-L[1])[0])==null?void 0:rt[0];O&&(P=O);break}case"initialPlacement":P=i}if(n!==P)return{reset:{placement:P}}}return{}}}},Ut=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,r=await async function(l,i){const{placement:s,platform:f,elements:c}=l,u=await(f.isRTL==null?void 0:f.isRTL(c.floating)),a=k(s),h=Y(s),d=nt(s)==="x",p=["left","top"].includes(a)?-1:1,m=u&&d?-1:1,y=typeof i=="function"?i(l):i;let{mainAxis:g,crossAxis:x,alignmentAxis:v}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...y};return h&&typeof v=="number"&&(x=h==="end"?-1*v:v),d?{x:x*m,y:g*p}:{x:g*p,y:x*m}}(e,t);return{x:o+r.x,y:n+r.y,data:r}}}};function w(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function T(t){return w(t).getComputedStyle(t)}function pt(t){return t instanceof w(t).Node}function $(t){return pt(t)?(t.nodeName||"").toLowerCase():""}let G;function yt(){if(G)return G;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(G=t.brands.map(e=>e.brand+"/"+e.version).join(" "),G):navigator.userAgent}function _(t){return t instanceof w(t).HTMLElement}function b(t){return t instanceof w(t).Element}function ft(t){return typeof ShadowRoot>"u"?!1:t instanceof w(t).ShadowRoot||t instanceof ShadowRoot}function N(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Bt(t){return["table","td","th"].includes($(t))}function tt(t){const e=/firefox/i.test(yt()),o=T(t),n=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!n&&n!=="none"||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(r=>o.willChange.includes(r))||["paint","layout","strict","content"].some(r=>{const l=o.contain;return l!=null&&l.includes(r)})}function et(){return/^((?!chrome|android).)*safari/i.test(yt())}function q(t){return["html","body","#document"].includes($(t))}const ut=Math.min,H=Math.max,X=Math.round;function xt(t){const e=T(t);let o=parseFloat(e.width),n=parseFloat(e.height);const r=_(t),l=r?t.offsetWidth:o,i=r?t.offsetHeight:n,s=X(o)!==l||X(n)!==i;return s&&(o=l,n=i),{width:o,height:n,fallback:s}}function vt(t){return b(t)?t:t.contextElement}const wt={x:1,y:1};function F(t){const e=vt(t);if(!_(e))return wt;const o=e.getBoundingClientRect(),{width:n,height:r,fallback:l}=xt(e);let i=(l?X(o.width):o.width)/n,s=(l?X(o.height):o.height)/r;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}function W(t,e,o,n){var r,l;e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=vt(t);let f=wt;e&&(n?b(n)&&(f=F(n)):f=F(t));const c=s?w(s):window,u=et()&&o;let a=(i.left+(u&&((r=c.visualViewport)==null?void 0:r.offsetLeft)||0))/f.x,h=(i.top+(u&&((l=c.visualViewport)==null?void 0:l.offsetTop)||0))/f.y,d=i.width/f.x,p=i.height/f.y;if(s){const m=w(s),y=n&&b(n)?w(n):n;let g=m.frameElement;for(;g&&n&&y!==m;){const x=F(g),v=g.getBoundingClientRect(),R=getComputedStyle(g);v.x+=(g.clientLeft+parseFloat(R.paddingLeft))*x.x,v.y+=(g.clientTop+parseFloat(R.paddingTop))*x.y,a*=x.x,h*=x.y,d*=x.x,p*=x.y,a+=v.x,h+=v.y,g=w(g).frameElement}}return M({width:d,height:p,x:a,y:h})}function S(t){return((pt(t)?t.ownerDocument:t.document)||window.document).documentElement}function Z(t){return b(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(t){return W(S(t)).left+Z(t).scrollLeft}function I(t){if($(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ft(t)&&t.host||S(t);return ft(e)?e.host:e}function Et(t){const e=I(t);return q(e)?e.ownerDocument.body:_(e)&&N(e)?e:Et(e)}function V(t,e){var o;e===void 0&&(e=[]);const n=Et(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),l=w(n);return r?e.concat(l,l.visualViewport||[],N(n)?n:[]):e.concat(n,V(n))}function dt(t,e,o){let n;if(e==="viewport")n=function(i,s){const f=w(i),c=S(i),u=f.visualViewport;let a=c.clientWidth,h=c.clientHeight,d=0,p=0;if(u){a=u.width,h=u.height;const m=et();(!m||m&&s==="fixed")&&(d=u.offsetLeft,p=u.offsetTop)}return{width:a,height:h,x:d,y:p}}(t,o);else if(e==="document")n=function(i){const s=S(i),f=Z(i),c=i.ownerDocument.body,u=H(s.scrollWidth,s.clientWidth,c.scrollWidth,c.clientWidth),a=H(s.scrollHeight,s.clientHeight,c.scrollHeight,c.clientHeight);let h=-f.scrollLeft+bt(i);const d=-f.scrollTop;return T(c).direction==="rtl"&&(h+=H(s.clientWidth,c.clientWidth)-u),{width:u,height:a,x:h,y:d}}(S(t));else if(b(e))n=function(i,s){const f=W(i,!0,s==="fixed"),c=f.top+i.clientTop,u=f.left+i.clientLeft,a=_(i)?F(i):{x:1,y:1};return{width:i.clientWidth*a.x,height:i.clientHeight*a.y,x:u*a.x,y:c*a.y}}(e,o);else{const i={...e};if(et()){var r,l;const s=w(t);i.x-=((r=s.visualViewport)==null?void 0:r.offsetLeft)||0,i.y-=((l=s.visualViewport)==null?void 0:l.offsetTop)||0}n=i}return M(n)}function Lt(t,e){const o=I(t);return!(o===e||!b(o)||q(o))&&(T(o).position==="fixed"||Lt(o,e))}function ht(t,e){return _(t)&&T(t).position!=="fixed"?e?e(t):t.offsetParent:null}function mt(t,e){const o=w(t);if(!_(t))return o;let n=ht(t,e);for(;n&&Bt(n)&&T(n).position==="static";)n=ht(n,e);return n&&($(n)==="html"||$(n)==="body"&&T(n).position==="static"&&!tt(n))?o:n||function(r){let l=I(r);for(;_(l)&&!q(l);){if(tt(l))return l;l=I(l)}return null}(t)||o}function Ht(t,e,o){const n=_(e),r=S(e),l=W(t,!0,o==="fixed",e);let i={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&o!=="fixed")if(($(e)!=="body"||N(r))&&(i=Z(e)),_(e)){const f=W(e,!0);s.x=f.x+e.clientLeft,s.y=f.y+e.clientTop}else r&&(s.x=bt(r));return{x:l.left+i.scrollLeft-s.x,y:l.top+i.scrollTop-s.y,width:l.width,height:l.height}}const Vt={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const l=o==="clippingAncestors"?function(c,u){const a=u.get(c);if(a)return a;let h=V(c).filter(y=>b(y)&&$(y)!=="body"),d=null;const p=T(c).position==="fixed";let m=p?I(c):c;for(;b(m)&&!q(m);){const y=T(m),g=tt(m);g||y.position!=="fixed"||(d=null),(p?!g&&!d:!g&&y.position==="static"&&d&&["absolute","fixed"].includes(d.position)||N(m)&&!g&&Lt(c,m))?h=h.filter(x=>x!==m):d=y,m=I(m)}return u.set(c,h),h}(e,this._c):[].concat(o),i=[...l,n],s=i[0],f=i.reduce((c,u)=>{const a=dt(e,u,r);return c.top=H(a.top,c.top),c.right=ut(a.right,c.right),c.bottom=ut(a.bottom,c.bottom),c.left=H(a.left,c.left),c},dt(e,s,r));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:n}=t;const r=_(o),l=S(o);if(o===l)return e;let i={scrollLeft:0,scrollTop:0},s={x:1,y:1};const f={x:0,y:0};if((r||!r&&n!=="fixed")&&(($(o)!=="body"||N(l))&&(i=Z(o)),_(o))){const c=W(o);s=F(o),f.x=c.x+o.clientLeft,f.y=c.y+o.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-i.scrollLeft*s.x+f.x,y:e.y*s.y-i.scrollTop*s.y+f.y}},isElement:b,getDimensions:function(t){return xt(t)},getOffsetParent:mt,getDocumentElement:S,getScale:F,async getElementRects(t){let{reference:e,floating:o,strategy:n}=t;const r=this.getOffsetParent||mt,l=this.getDimensions;return{reference:Ht(e,await r(o),n),floating:{x:0,y:0,...await l(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>T(t).direction==="rtl"};function Nt(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:l=!0,elementResize:i=!0,animationFrame:s=!1}=n,f=r||l?[...b(t)?V(t):t.contextElement?V(t.contextElement):[],...V(e)]:[];f.forEach(h=>{const d=!b(h)&&h.toString().includes("V");!r||s&&!d||h.addEventListener("scroll",o,{passive:!0}),l&&h.addEventListener("resize",o)});let c,u=null;i&&(u=new ResizeObserver(()=>{o()}),b(t)&&!s&&u.observe(t),b(t)||!t.contextElement||s||u.observe(t.contextElement),u.observe(e));let a=s?W(t):null;return s&&function h(){const d=W(t);!a||d.x===a.x&&d.y===a.y&&d.width===a.width&&d.height===a.height||o(),a=d,c=requestAnimationFrame(h)}(),o(),()=>{var h;f.forEach(d=>{r&&d.removeEventListener("scroll",o),l&&d.removeEventListener("resize",o)}),(h=u)==null||h.disconnect(),u=null,s&&cancelAnimationFrame(c)}}const zt=(t,e,o)=>{const n=new Map,r={platform:Vt,...o},l={...r.platform,_c:n};return Ot(t,e,{...r,platform:l})},Gt=8,qt=(t,e)=>Nt(t,e,()=>{zt(t,e,{strategy:"absolute",placement:"bottom-end",middleware:[Ut(Gt),It()]}).then(({x:n,y:r})=>{e.style.top=`${r}px`,e.style.left=`${n}px`})}),Q={},Mt=["has-both-scroll","has-vertical-scroll","has-horizontal-scroll"];class Zt{constructor({contextElement:e}){this.contextElement=e,this._coreElements=[],this._globalEvents=[],this.hasUUID?(Q[this.uuid].destroy(),Q[this.uuid]=this):this.initUUID(),this._componentIdentifier=`${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`,this._logger=new Ct(this._componentIdentifier,"WARNING")}get hasUUID(){return this.contextElement.getAttribute("data-uuid")!=null}get uuid(){return this.contextElement.getAttribute("data-uuid")||""}get logger(){return this._logger}get contextWidth(){return this.contextElement.scrollWidth}get contextHeight(){return this.contextElement.scrollHeight}destroy(){var e;this._coreElements.forEach(o=>o.remove()),this._globalEvents.forEach(([o,n,r])=>o.removeEventListener(n,r)),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.onDestroy(),this._coreElements.length=0,this._globalEvents.length=0,this.resizeObserver=void 0}addCoreElement(e){return this._coreElements.push(e),e}addGlobalEventListener(e,o,n){this._globalEvents.push([e,o,n]),e.addEventListener(o,n)}onDestroy(){}getScrollCls(e,o){return e&&o?"has-both-scroll":e?"has-vertical-scroll":o?"has-horizontal-scroll":""}generateScrollBarClass(){const e=this.contextHeight>this.contextElement.clientHeight+1,o=this.contextWidth>this.contextElement.clientWidth+1,n=this.getScrollCls(e,o);Mt.filter(r=>!n.includes(r)).forEach(r=>this.contextElement.classList.remove(r)),n!==""&&!this.contextElement.classList.contains(n)&&this.contextElement.classList.add(n)}initUUID(){if(!this.hasUUID){const e=_t();this.contextElement.setAttribute("data-uuid",e),Q[e]=this}}}export{Zt as I,Yt as c,qt as o};
//# sourceMappingURL=index-9b2db4e0.js.map
