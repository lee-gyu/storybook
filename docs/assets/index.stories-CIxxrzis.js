import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as u,a as q,L as f,d as e,V as F}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";var n="button",m="button--primary";function L(a,l){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,l);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function M(a){var l=L(a,"string");return typeof l=="symbol"?l:String(l)}function $(a,l,t){return l=M(l),l in a?Object.defineProperty(a,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[l]=t,a}function T(a,l){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);l&&(i=i.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),t.push.apply(t,i)}return t}function k(a){for(var l=1;l<arguments.length;l++){var t=arguments[l]!=null?arguments[l]:{};l%2?T(Object(t),!0).forEach(function(i){$(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}var B=a=>function(){for(var l=arguments.length,t=new Array(l),i=0;i<l;i++)t[i]=arguments[i];var d=Object.assign({},...t.map(o=>o.styles)),C=Object.keys(d),z=C.filter(o=>"mappings"in d[o]),D=o=>{var g=[],j={},x=k({},o),_=!1;for(var b of z){var N=o[b];if(N!=null){var E=d[b];_=!0;for(var v of E.mappings)j[v]=N,x[v]==null&&delete x[v]}}var P=_?k(k({},j),x):o,I=function(){var r=P[y],c=d[y];try{if(c.mappings)return 1;if(typeof r=="string"||typeof r=="number")g.push(c.values[r].defaultClass);else if(Array.isArray(r))for(var p=0;p<r.length;p++){var w=r[p];if(w!=null){var R=c.responsiveArray[p];g.push(c.values[w].conditions[R])}}else for(var O in r){var S=r[O];S!=null&&g.push(c.values[S].conditions[O])}}catch(A){throw A}};for(var y in P)I();return a(g.join(" "))};return Object.assign(D,{properties:new Set(C)})},K=a=>a,V=function(){return B(K)(...arguments)};V({conditions:void 0,styles:{display:{values:{none:{defaultClass:"spk-ssqq6g0"},flex:{defaultClass:"spk-ssqq6g1"},block:{defaultClass:"spk-ssqq6g2"},"inline-block":{defaultClass:"spk-ssqq6g3"},grid:{defaultClass:"spk-ssqq6g4"},"inline-grid":{defaultClass:"spk-ssqq6g5"},inline:{defaultClass:"spk-ssqq6g6"},"inline-flex":{defaultClass:"spk-ssqq6g7"}}},flexDirection:{values:{row:{defaultClass:"spk-ssqq6g8"},column:{defaultClass:"spk-ssqq6g9"}}},boxSizing:{values:{"border-box":{defaultClass:"spk-ssqq6ga"},"content-box":{defaultClass:"spk-ssqq6gb"}}},justifyContent:{values:{center:{defaultClass:"spk-ssqq6gc"},"flex-start":{defaultClass:"spk-ssqq6gd"},"flex-end":{defaultClass:"spk-ssqq6ge"},stretch:{defaultClass:"spk-ssqq6gf"},"space-between":{defaultClass:"spk-ssqq6gg"}}},alignItems:{values:{stretch:{defaultClass:"spk-ssqq6gh"},"flex-start":{defaultClass:"spk-ssqq6gi"},center:{defaultClass:"spk-ssqq6gj"},"flex-end":{defaultClass:"spk-ssqq6gk"}}},color:{values:{default:{defaultClass:"spk-ssqq6gl"},light:{defaultClass:"spk-ssqq6gm"},disabled:{defaultClass:"spk-ssqq6gn"},diff:{defaultClass:"spk-ssqq6go"},inverse:{defaultClass:"spk-ssqq6gp"}}},whiteSpace:{values:{pre:{defaultClass:"spk-ssqq6gq"},"pre-wrap":{defaultClass:"spk-ssqq6gr"},nowrap:{defaultClass:"spk-ssqq6gs"}}},gap:{values:{"3xs":{defaultClass:"spk-ssqq6gt"},xxs:{defaultClass:"spk-ssqq6gu"},xs:{defaultClass:"spk-ssqq6gv"},sm:{defaultClass:"spk-ssqq6gw"},md:{defaultClass:"spk-ssqq6gx"},lg:{defaultClass:"spk-ssqq6gy"},xl:{defaultClass:"spk-ssqq6gz"},xxl:{defaultClass:"spk-ssqq6g10"},"3xl":{defaultClass:"spk-ssqq6g11"}}},position:{values:{absolute:{defaultClass:"spk-ssqq6g12"},relative:{defaultClass:"spk-ssqq6g13"},fixed:{defaultClass:"spk-ssqq6g14"},sticky:{defaultClass:"spk-ssqq6g15"},static:{defaultClass:"spk-ssqq6g16"}}},padding:{values:{"3xs":{defaultClass:"spk-ssqq6g17"},xxs:{defaultClass:"spk-ssqq6g18"},xs:{defaultClass:"spk-ssqq6g19"},sm:{defaultClass:"spk-ssqq6g1a"},md:{defaultClass:"spk-ssqq6g1b"},lg:{defaultClass:"spk-ssqq6g1c"},xl:{defaultClass:"spk-ssqq6g1d"},xxl:{defaultClass:"spk-ssqq6g1e"},"3xl":{defaultClass:"spk-ssqq6g1f"}}},paddingLeft:{values:{"3xs":{defaultClass:"spk-ssqq6g1g"},xxs:{defaultClass:"spk-ssqq6g1h"},xs:{defaultClass:"spk-ssqq6g1i"},sm:{defaultClass:"spk-ssqq6g1j"},md:{defaultClass:"spk-ssqq6g1k"},lg:{defaultClass:"spk-ssqq6g1l"},xl:{defaultClass:"spk-ssqq6g1m"},xxl:{defaultClass:"spk-ssqq6g1n"},"3xl":{defaultClass:"spk-ssqq6g1o"}}},paddingRight:{values:{"3xs":{defaultClass:"spk-ssqq6g1p"},xxs:{defaultClass:"spk-ssqq6g1q"},xs:{defaultClass:"spk-ssqq6g1r"},sm:{defaultClass:"spk-ssqq6g1s"},md:{defaultClass:"spk-ssqq6g1t"},lg:{defaultClass:"spk-ssqq6g1u"},xl:{defaultClass:"spk-ssqq6g1v"},xxl:{defaultClass:"spk-ssqq6g1w"},"3xl":{defaultClass:"spk-ssqq6g1x"}}},margin:{values:{"3xs":{defaultClass:"spk-ssqq6g1y"},xxs:{defaultClass:"spk-ssqq6g1z"},xs:{defaultClass:"spk-ssqq6g20"},sm:{defaultClass:"spk-ssqq6g21"},md:{defaultClass:"spk-ssqq6g22"},lg:{defaultClass:"spk-ssqq6g23"},xl:{defaultClass:"spk-ssqq6g24"},xxl:{defaultClass:"spk-ssqq6g25"},"3xl":{defaultClass:"spk-ssqq6g26"}}},marginLeft:{values:{auto:{defaultClass:"spk-ssqq6g27"},"3xs":{defaultClass:"spk-ssqq6g28"},xxs:{defaultClass:"spk-ssqq6g29"},xs:{defaultClass:"spk-ssqq6g2a"},sm:{defaultClass:"spk-ssqq6g2b"},md:{defaultClass:"spk-ssqq6g2c"},lg:{defaultClass:"spk-ssqq6g2d"},xl:{defaultClass:"spk-ssqq6g2e"},xxl:{defaultClass:"spk-ssqq6g2f"},"3xl":{defaultClass:"spk-ssqq6g2g"}}},marginRight:{values:{auto:{defaultClass:"spk-ssqq6g2h"},"3xs":{defaultClass:"spk-ssqq6g2i"},xxs:{defaultClass:"spk-ssqq6g2j"},xs:{defaultClass:"spk-ssqq6g2k"},sm:{defaultClass:"spk-ssqq6g2l"},md:{defaultClass:"spk-ssqq6g2m"},lg:{defaultClass:"spk-ssqq6g2n"},xl:{defaultClass:"spk-ssqq6g2o"},xxl:{defaultClass:"spk-ssqq6g2p"},"3xl":{defaultClass:"spk-ssqq6g2q"}}},backgroundColor:{values:{default:{defaultClass:"spk-ssqq6g2r"},light:{defaultClass:"spk-ssqq6g2s"},disabled:{defaultClass:"spk-ssqq6g2t"}}},boxShadow:{values:{sm:{defaultClass:"spk-ssqq6g2u"},md:{defaultClass:"spk-ssqq6g2v"},lg:{defaultClass:"spk-ssqq6g2w"}}},borderRadius:{values:{sm:{defaultClass:"spk-ssqq6g2x"},md:{defaultClass:"spk-ssqq6g2y"},lg:{defaultClass:"spk-ssqq6g2z"},xl:{defaultClass:"spk-ssqq6g30"},full:{defaultClass:"spk-ssqq6g31"}}},fontWeight:{values:{regular:{defaultClass:"spk-ssqq6g32"},medium:{defaultClass:"spk-ssqq6g33"},semibold:{defaultClass:"spk-ssqq6g34"},bold:{defaultClass:"spk-ssqq6g35"}}},fontSize:{values:{h1:{defaultClass:"spk-ssqq6g36"},h2:{defaultClass:"spk-ssqq6g37"},h3:{defaultClass:"spk-ssqq6g38"},h4:{defaultClass:"spk-ssqq6g39"},h5:{defaultClass:"spk-ssqq6g3a"},h6:{defaultClass:"spk-ssqq6g3b"}}},userSelect:{values:{none:{defaultClass:"spk-ssqq6g3c"},text:{defaultClass:"spk-ssqq6g3d"},auto:{defaultClass:"spk-ssqq6g3e"}}},height:{values:{input:{defaultClass:"spk-ssqq6g3f"}}}}});const H=`import { createPopover, IRConfirm } from "@innorules/ir-style";\r
\r
const dialog1Popover = createPopover( {\r
    selector: "#dialog1",\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    selector: "#dialog2",\r
    type: "dialog",\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
btn2.onclick = () => dialog2Popover.show();\r
btn3.onclick = ( ev ) =>\r
{\r
    new IRConfirm( {\r
        messageHTML: "",\r
    } ).show();\r
\r
    ev.stopPropagation();\r
};\r
\r
dialog1.onclick = () => dialog1Popover.bringToTop();\r
dialog2.onclick = () => dialog2Popover.bringToTop();`,h=`body {
    height: 500px;
}
`;function J(){return s.jsxs(u,{children:[s.jsx(q,{children:"bringToTop"}),s.jsx("p",{children:"createPopover 핸들러의 bringToTop API를 이용해서 zIndex 순서를 제어할 수 있습니다."}),s.jsx(f,{css:h,code:H,html:s.jsxs(s.Fragment,{children:[s.jsx("button",{id:"btn1",className:e(n),children:"다이얼로그1"}),s.jsx("button",{id:"btn2",className:e(n),children:"다이얼로그2"}),s.jsx("div",{id:"dialog1",className:e("dialog","dialog--transparent"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"타이틀"}),s.jsx("div",{className:e("dialog__header-actions")})]}),s.jsx("div",{className:e("dialog__content"),children:"컨텐츠"}),s.jsx("div",{className:e("dialog__footer"),children:s.jsx("div",{className:e("dialog__footer-right"),children:s.jsx("button",{id:"btn3",type:"button",className:e(n,m),children:"Confirm"})})})]})}),s.jsx("div",{id:"dialog2",className:e("dialog","dialog--transparent"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"222"}),s.jsx("div",{className:e("dialog__header-actions")})]}),s.jsx("div",{className:e("dialog__content"),children:"2222222222222222222222222"})]})})]})})]})}J.__docgenInfo={description:"",methods:[],displayName:"BringToTop"};const U=`import { createPopover } from "@innorules/ir-style";\r
\r
const dialog1Popover = createPopover( {\r
    element: dialog1,\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    element: dialog2,\r
    type: "dialog",\r
} );\r
\r
const dialog3Popover = createPopover( {\r
    // selector가 있을 시, selector로 해당 element를 찾음.\r
    selector: "#dialog1",\r
    type: "dialog",\r
    escClose: false,\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
close1.onclick = () => dialog1Popover.hide();\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
\r
btn3.onclick = () => dialog3Popover.show();`;function W(){return s.jsxs(u,{children:[s.jsx(q,{children:"createPopover"}),s.jsx("p",{children:"내부 z-index 표준 시스템을 적용하여 Dialog를 화면에 표시합니다. (ESC를 누르면 가장 최상위 다이얼로그가 종료됩니다.)"}),s.jsx(f,{css:h,code:U,html:s.jsxs(s.Fragment,{children:[s.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),s.jsx("button",{id:"btn3",className:"button",children:"다이얼로그 출력 (ESC 비활성화)"}),s.jsx("div",{id:"dialog1",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"타이틀"}),s.jsx("div",{className:e("dialog__header-actions"),children:s.jsx("button",{id:"close1",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),s.jsx("div",{className:e("dialog__content"),children:"컨텐츠"}),s.jsx("div",{className:e("dialog__footer"),children:s.jsx("div",{className:e("dialog__footer-right"),children:s.jsx("button",{id:"btn2",type:"button",className:e(n,m),children:"새 창 출력"})})})]})}),s.jsx("div",{id:"dialog2",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"222"}),s.jsx("div",{className:e("dialog__header-actions"),children:s.jsx("button",{id:"close2",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--close"})})})]}),s.jsx("div",{className:e("dialog__content"),children:"2222222222"})]})})]})})]})}W.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const G=`import { createPopover } from "@innorules/ir-style";\r
\r
const dialogPopover = createPopover( {\r
    selector: "#dialog1",\r
    type: "dialog",\r
    parentElement: dialogs,\r
    onInit: ( element, handler ) =>\r
    {\r
\r
        btn_close.onclick = () => handler.hide();\r
    },\r
} );\r
\r
btn_open.onclick = () => dialogPopover.show();`;function Q(){return s.jsxs(u,{children:[s.jsx(q,{children:"parentElement"}),s.jsx("p",{children:"부모 요소를 지정하여 DOM 마운트를 제어 합니다."}),s.jsx(f,{code:G,css:h,html:s.jsxs(s.Fragment,{children:[s.jsx("button",{id:"btn_open",className:e(n),children:"다이얼로그 열기"}),s.jsx("div",{id:"dialogs",children:s.jsx("div",{id:"dialog1",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"타이틀"}),s.jsx("div",{className:e("dialog__header-actions")})]}),s.jsx("div",{className:e("dialog__content"),children:"컨텐츠"}),s.jsx("div",{className:e("dialog__footer"),children:s.jsx("div",{className:e("dialog__footer-right"),children:s.jsx("button",{id:"btn_close",type:"button",className:e(n,m),children:"Confirm"})})})]})})})]})})]})}Q.__docgenInfo={description:"",methods:[],displayName:"ParentElement"};const X=`import { createPopover } from "@innorules/ir-style";\r
import { IRDialogManager } from "@innorules/ir-style/lib/esm/solid.js";\r
\r
const manager = new IRDialogManager( {\r
    // layer: "floating",\r
    // placement: "bottom-left",\r
    // offset: { x: 10, y: 10 },\r
} );\r
\r
const dialog1Popover = createPopover( {\r
    element: dialog1,\r
    type: "dialog",\r
} );\r
\r
const dialog2Popover = createPopover( {\r
    element: dialog2,\r
    type: "dialog",\r
} );\r
\r
const dialog3Popover = createPopover( {\r
    element: dialog3,\r
    type: "dialog",\r
} );\r
\r
btn1.onclick = () => dialog1Popover.show();\r
close1.onclick = () => dialog1Popover.hide();\r
minimize1.onclick = () => dialog1Popover.minimize( manager, "타이틀", "ir-icon--convert-to-string" );\r
\r
btn2.onclick = () => dialog2Popover.show();\r
close2.onclick = () => dialog2Popover.hide();\r
minimize2.onclick = () => dialog2Popover.minimize( manager, "2222222222222222222222222222222222222222222", "ir-icon--type-number-return" );\r
\r
btn3.onclick = () => dialog3Popover.show();\r
close3.onclick = () => dialog3Popover.hide();\r
minimize3.onclick = () => dialog3Popover.minimize( manager, "새 다이얼로그", "ir-icon--add" );`;function Y(){return s.jsxs(u,{children:[s.jsx(q,{children:"IRDialogManager"}),s.jsx(F,{children:"ir-style@^2.20.0"}),s.jsx("p",{children:"다이얼로그를 최소화하고 하단에 버튼으로 관리할 수 있는 매니저입니다. createPopover 핸들러의 minimize API를 이용해서 최소화할 수 있으며, 버튼을 누르면 다시 열 수 있습니다."}),s.jsx(f,{css:h,code:X,html:s.jsxs(s.Fragment,{children:[s.jsx("button",{id:"btn1",className:"button",children:"다이얼로그 출력"}),s.jsx("button",{id:"btn2",className:"button",children:"다이얼로그 출력2"}),s.jsx("div",{id:"dialog1",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"타이틀"}),s.jsxs("div",{className:e("dialog__header-actions"),children:[s.jsx("button",{id:"minimize1",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),s.jsx("button",{id:"close1",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsx("div",{className:e("dialog__content"),children:"컨텐츠"}),s.jsx("div",{className:e("dialog__footer"),children:s.jsx("div",{className:e("dialog__footer-right"),children:s.jsx("button",{id:"btn3",type:"button",className:e(n,m),children:"새 창 출력"})})})]})}),s.jsx("div",{id:"dialog2",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"222"}),s.jsxs("div",{className:e("dialog__header-actions"),children:[s.jsx("button",{id:"minimize2",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),s.jsx("button",{id:"close2",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsx("div",{className:e("dialog__content"),children:"22222222222222222222"})]})}),s.jsx("div",{id:"dialog3",className:e("dialog"),children:s.jsxs("div",{className:e("dialog__wrapper"),children:[s.jsxs("div",{className:e("dialog__header"),children:[s.jsx("strong",{className:e("dialog__header-title"),children:"새 다이얼로그"}),s.jsxs("div",{className:e("dialog__header-actions"),children:[s.jsx("button",{id:"minimize3",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--delete-dash"})}),s.jsx("button",{id:"close3",type:"button",className:e("dialog__button-close"),children:s.jsx("i",{className:"ir-icon ir-icon--close"})})]})]}),s.jsx("div",{className:e("dialog__content"),children:"새로운 다이얼로그 입니다."})]})})]})})]})}Y.__docgenInfo={description:"",methods:[],displayName:"CreatePopover"};const is={title:"JS Utility/Popover"},rs=["BringToTop","CreatePopover","ParentElement","DialogManager"];export{J as BringToTop,W as CreatePopover,Y as DialogManager,Q as ParentElement,rs as __namedExportsOrder,is as default};
