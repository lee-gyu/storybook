import{g as St}from"./timePicker.elements-RVnBiWo6.js";function Le(t){const n=St().getStoreValue(`layerElementId.${t}`),o=document.querySelector(n);if(!(o instanceof HTMLElement))throw new Error(`Not found layer element '${n}'`);return o}let G;const Dt=new Uint8Array(16);function _t(){if(!G&&(G=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!G))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return G(Dt)}const b=[];for(let t=0;t<256;++t)b.push((t+256).toString(16).slice(1));function It(t,e=0){return(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase()}const Ut=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ft={randomUUID:Ut};function Nt(t,e,n){if(ft.randomUUID&&!e&&!t)return ft.randomUUID();t=t||{};const o=t.random||(t.rng||_t)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=o[i];return e}return It(o)}const X=Math.min,I=Math.max,Y=Math.round,$=Math.floor,S=t=>({x:t,y:t}),Vt={left:"right",right:"left",bottom:"top",top:"bottom"},Bt={start:"end",end:"start"};function dt(t,e,n){return I(t,X(e,n))}function J(t,e){return typeof t=="function"?t(e):t}function U(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function xt(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(U(t))?"y":"x"}function wt(t){return xt(tt(t))}function kt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=wt(t),r=yt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=q(s)),[s,q(s)]}function Ft(t){const e=q(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>Bt[e])}function Pt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Wt(t,e,n,o){const i=Q(t);let r=Pt(U(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ot)))),r}function q(t){return t.replace(/left|right|bottom|top/g,e=>Vt[e])}function Ht(t){return{top:0,right:0,bottom:0,left:0,...t}}function Mt(t){return typeof t!="number"?Ht(t):{top:t,right:t,bottom:t,left:t}}function K(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ht(t,e,n){let{reference:o,floating:i}=t;const r=tt(e),s=wt(e),c=yt(s),l=U(e),a=r==="y",h=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let u;switch(l){case"top":u={x:h,y:o.y-i.height};break;case"bottom":u={x:h,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:f};break;case"left":u={x:o.x-i.width,y:f};break;default:u={x:o.x,y:o.y}}switch(Q(e)){case"start":u[s]-=g*(n&&a?-1:1);break;case"end":u[s]+=g*(n&&a?-1:1);break}return u}const zt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:f}=ht(a,o,l),g=o,u={},d=0;for(let p=0;p<c.length;p++){const{name:x,fn:m}=c[p],{x:y,y:v,data:R,reset:w}=await m({x:h,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:a,platform:s,elements:{reference:t,floating:e}});if(h=y!=null?y:h,f=v!=null?v:f,u={...u,[x]:{...u[x],...R}},w&&d<=50){d++,typeof w=="object"&&(w.placement&&(g=w.placement),w.rects&&(a=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:h,y:f}=ht(a,g,l)),p=-1;continue}}return{x:h,y:f,placement:g,strategy:i,middlewareData:u}};async function vt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:g=!1,padding:u=0}=J(e,t),d=Mt(u),x=c[g?f==="floating"?"reference":"floating":f],m=K(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(x)))==null||n?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:h,strategy:l})),y=f==="floating"?{...s.floating,x:o,y:i}:s.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),R=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},w=K(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:l}):y);return{top:(m.top-w.top+d.top)/R.y,bottom:(w.bottom-m.bottom+d.bottom)/R.y,left:(m.left-w.left+d.left)/R.x,right:(w.right-m.right+d.right)/R.x}}const Gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:c,elements:l}=e,{mainAxis:a=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:d=!0,...p}=J(t,e),x=U(o),m=U(s)===s,y=await(c.isRTL==null?void 0:c.isRTL(l.floating)),v=f||(m||!d?[q(s)]:Ft(s));!f&&u!=="none"&&v.push(...Wt(s,d,u,y));const R=[s,...v],w=await vt(e,p),T=[];let W=((n=i.flip)==null?void 0:n.overflows)||[];if(a&&T.push(w[x]),h){const _=kt(o,r,y);T.push(w[_[0]],w[_[1]])}if(W=[...W,{placement:o,overflows:T}],!T.every(_=>_<=0)){var ct,lt;const _=(((ct=i.flip)==null?void 0:ct.index)||0)+1,ut=R[_];if(ut)return{data:{index:_,overflows:W},reset:{placement:ut}};let H=(lt=W.filter(B=>B.overflows[0]<=0).sort((B,k)=>B.overflows[1]-k.overflows[1])[0])==null?void 0:lt.placement;if(!H)switch(g){case"bestFit":{var at;const B=(at=W.map(k=>[k.placement,k.overflows.filter(M=>M>0).reduce((M,Tt)=>M+Tt,0)]).sort((k,M)=>k[1]-M[1])[0])==null?void 0:at[0];B&&(H=B);break}case"initialPlacement":H=s;break}if(o!==H)return{reset:{placement:H}}}return{}}}};async function $t(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=U(n),c=Q(n),l=tt(n)==="y",a=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,f=J(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:d}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof d=="number"&&(u=c==="end"?d*-1:d),l?{x:u*h,y:g*a}:{x:g*a,y:u*h}}const jt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await $t(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},Re=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:x=>{let{x:m,y}=x;return{x:m,y}}},...l}=J(t,e),a={x:n,y:o},h=await vt(e,l),f=tt(U(i)),g=xt(f);let u=a[g],d=a[f];if(r){const x=g==="y"?"top":"left",m=g==="y"?"bottom":"right",y=u+h[x],v=u-h[m];u=dt(y,u,v)}if(s){const x=f==="y"?"top":"left",m=f==="y"?"bottom":"right",y=d+h[x],v=d-h[m];d=dt(y,d,v)}const p=c.fn({...e,[g]:u,[f]:d});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function D(t){return bt(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function O(t){var e;return(e=(bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bt(t){return t instanceof Node||t instanceof E(t).Node}function C(t){return t instanceof Element||t instanceof E(t).Element}function A(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function mt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Xt(t){return["table","td","th"].includes(D(t))}function it(t){const e=st(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Yt(t){let e=P(t);for(;A(e)&&!et(e);){if(it(e))return e;e=P(e)}return null}function st(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(D(t))}function L(t){return E(t).getComputedStyle(t)}function nt(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(t){if(D(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mt(t)&&t.host||O(t);return mt(e)?e.host:e}function Et(t){const e=P(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:A(e)&&z(e)?e:Et(e)}function Z(t,e){var n;e===void 0&&(e=[]);const o=Et(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),r=E(o);return i?e.concat(r,r.visualViewport||[],z(o)?o:[]):e.concat(o,Z(o))}function Lt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=A(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=Y(n)!==r||Y(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function rt(t){return C(t)?t:t.contextElement}function F(t){const e=rt(t);if(!A(e))return S(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Lt(e);let s=(r?Y(n.width):n.width)/o,c=(r?Y(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const qt=S(0);function Rt(t){const e=E(t);return!st()||!e.visualViewport?qt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Kt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==E(t)?!1:e}function N(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=rt(t);let s=S(1);e&&(o?C(o)&&(s=F(o)):s=F(t));const c=Kt(r,n,o)?Rt(r):S(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,h=i.width/s.x,f=i.height/s.y;if(r){const g=E(r),u=o&&C(o)?E(o):o;let d=g.frameElement;for(;d&&o&&u!==g;){const p=F(d),x=d.getBoundingClientRect(),m=L(d),y=x.left+(d.clientLeft+parseFloat(m.paddingLeft))*p.x,v=x.top+(d.clientTop+parseFloat(m.paddingTop))*p.y;l*=p.x,a*=p.y,h*=p.x,f*=p.y,l+=y,a+=v,d=E(d).frameElement}}return K({width:h,height:f,x:l,y:a})}function Zt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=A(n),r=O(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=S(1);const l=S(0);if((i||!i&&o!=="fixed")&&((D(n)!=="body"||z(r))&&(s=nt(n)),A(n))){const a=N(n);c=F(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+l.x,y:e.y*c.y-s.scrollTop*c.y+l.y}}function Jt(t){return Array.from(t.getClientRects())}function At(t){return N(O(t)).left+nt(t).scrollLeft}function Qt(t){const e=O(t),n=nt(t),o=t.ownerDocument.body,i=I(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=I(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+At(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(s+=I(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function te(t,e){const n=E(t),o=O(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const a=st();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function ee(t,e){const n=N(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=A(t)?F(t):S(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,a=o*r.y;return{width:s,height:c,x:l,y:a}}function gt(t,e,n){let o;if(e==="viewport")o=te(t,n);else if(e==="document")o=Qt(O(t));else if(C(e))o=ee(e,n);else{const i=Rt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return K(o)}function Ct(t,e){const n=P(t);return n===e||!C(n)||et(n)?!1:L(n).position==="fixed"||Ct(n,e)}function ne(t,e){const n=e.get(t);if(n)return n;let o=Z(t).filter(c=>C(c)&&D(c)!=="body"),i=null;const r=L(t).position==="fixed";let s=r?P(t):t;for(;C(s)&&!et(s);){const c=L(s),l=it(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||z(s)&&!l&&Ct(t,s))?o=o.filter(h=>h!==s):i=c,s=P(s)}return e.set(t,o),o}function oe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ne(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((a,h)=>{const f=gt(e,h,i);return a.top=I(f.top,a.top),a.right=X(f.right,a.right),a.bottom=X(f.bottom,a.bottom),a.left=I(f.left,a.left),a},gt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ie(t){return Lt(t)}function se(t,e,n){const o=A(e),i=O(e),r=n==="fixed",s=N(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=S(0);if(o||!o&&!r)if((D(e)!=="body"||z(i))&&(c=nt(e)),o){const a=N(e,!0,r,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=At(i));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function pt(t,e){return!A(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ot(t,e){const n=E(t);if(!A(t))return n;let o=pt(t,e);for(;o&&Xt(o)&&L(o).position==="static";)o=pt(o,e);return o&&(D(o)==="html"||D(o)==="body"&&L(o).position==="static"&&!it(o))?n:o||Yt(t)||n}const re=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Ot,r=this.getDimensions;return{reference:se(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function ce(t){return L(t).direction==="rtl"}const le={convertOffsetParentRelativeRectToViewportRelativeRect:Zt,getDocumentElement:O,getClippingRect:oe,getOffsetParent:Ot,getElementRects:re,getClientRects:Jt,getDimensions:ie,getScale:F,isElement:C,isRTL:ce};function ae(t,e){let n=null,o;const i=O(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:a,top:h,width:f,height:g}=t.getBoundingClientRect();if(c||e(),!f||!g)return;const u=$(h),d=$(i.clientWidth-(a+f)),p=$(i.clientHeight-(h+g)),x=$(a),y={rootMargin:-u+"px "+-d+"px "+-p+"px "+-x+"px",threshold:I(0,X(1,l))||1};let v=!0;function R(w){const T=w[0].intersectionRatio;if(T!==l){if(!v)return s();T?s(!1,T):o=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(R,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,y)}n.observe(t)}return s(!0),r}function ue(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=rt(t),h=i||r?[...a?Z(a):[],...Z(e)]:[];h.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),r&&m.addEventListener("resize",n)});const f=a&&c?ae(a,n):null;let g=-1,u=null;s&&(u=new ResizeObserver(m=>{let[y]=m;y&&y.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{u&&u.observe(e)})),n()}),a&&!l&&u.observe(a),u.observe(e));let d,p=l?N(t):null;l&&x();function x(){const m=N(t);p&&(m.x!==p.x||m.y!==p.y||m.width!==p.width||m.height!==p.height)&&n(),p=m,d=requestAnimationFrame(x)}return n(),()=>{h.forEach(m=>{i&&m.removeEventListener("scroll",n),r&&m.removeEventListener("resize",n)}),f&&f(),u&&u.disconnect(),u=null,l&&cancelAnimationFrame(d)}}const fe=(t,e,n)=>{const o=new Map,i={platform:le,...n},r={...i.platform,_c:o};return zt(t,e,{...i,platform:r})},de=8;function he(t,e){if(!t.isConnected)return!0;let n=t;for(;n;){if(n.style.display==="none")return!0;n=n.parentElement}return!1}const Ae=(t,e)=>({getBoundingClientRect(){return{width:0,height:0,x:t,y:e,top:e,left:t,bottom:e,right:t}}}),Ce=(t,e)=>ue(t,e,()=>{he(t)||fe(t,e,{strategy:"absolute",placement:"bottom",middleware:[jt(de),Gt()]}).then(({x:o,y:i})=>{e.style.top=`${i}px`,e.style.left=`${o}px`})});function Oe({eventElements:t,initFunc:e,clickOutsideFunc:n}){const o=r=>{let s=r.target;for(;s!==null;){if(t.indexOf(s)!==-1)return;s=s.parentElement}n&&n(),i.destroy()},i={create:()=>{e&&e(),window.addEventListener("scroll",o,!0),window.addEventListener("mousedown",o)},destroy:()=>{window.removeEventListener("scroll",o,!0),window.removeEventListener("mousedown",o)}};return i}const V={ERROR:0,WARNING:1,DEBUG:2,INFO:3},me=V.ERROR,ge=V.WARNING,pe=V.DEBUG,xe=V.INFO,ye=Object.keys(V);class we{constructor(e,n="ERROR"){this.id=e,this._logLevel=V[n]}get logLevel(){return ye[this._logLevel]}set logLevel(e){this._logLevel=V[e]}error(...e){this._logLevel>=me&&console.error(this.id,...e)}warn(...e){this._logLevel>=ge&&console.warn(this.id,...e)}debug(...e){this._logLevel>=pe&&console.debug(this.id,...e)}info(...e){this._logLevel>=xe&&console.info(this.id,...e)}}const j={},ve=12,be=["has-both-scroll","has-vertical-scroll","has-horizontal-scroll"];class Te{constructor({contextElement:e}){var n;this.contextElement=e,this._coreElements=[],this._globalEvents=[],this.hasUUID?((n=j[this.uuid])===null||n===void 0||n.destroy(),j[this.uuid]=this):this.initUUID(),this._componentIdentifier=`${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`,this._logger=new we(this._componentIdentifier,"WARNING")}get hasUUID(){return this.contextElement.getAttribute("data-uuid")!=null}get uuid(){return this.contextElement.getAttribute("data-uuid")||""}get logger(){return this._logger}get contextWidth(){return this.contextElement.scrollWidth}get contextHeight(){return this.contextElement.scrollHeight}destroy(){var e;this._coreElements.forEach(n=>n.remove()),this._globalEvents.forEach(([n,o,i])=>n.removeEventListener(o,i)),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.onDestroy(),this._coreElements.length=0,this._globalEvents.length=0,this.resizeObserver=void 0,j[this.uuid]=null}addCoreElement(e){return this._coreElements.push(e),e}addGlobalEventListener(e,n,o){this._globalEvents.push([e,n,o]),e.addEventListener(n,o)}onDestroy(){}getScrollCls(e,n){return e&&n?"has-both-scroll":e?"has-vertical-scroll":n?"has-horizontal-scroll":""}generateScrollBarClass(){const e=this.contextHeight>this.contextElement.clientHeight+1,n=this.contextWidth>this.contextElement.clientWidth+1,o=this.getScrollCls(e,n);be.filter(i=>!o.includes(i)).forEach(i=>this.contextElement.classList.remove(i)),o!==""&&!this.contextElement.classList.contains(o)&&this.contextElement.classList.add(o)}initUUID(){if(!this.hasUUID){const e=Nt().replace(/-/g,"").substring(0,ve);this.contextElement.setAttribute("data-uuid",e),j[e]=this}}}export{Te as I,fe as a,jt as b,Oe as c,Ae as d,Gt as f,Le as g,Ce as o,Re as s,Nt as v};
