import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as s,L as i}from"./version-tag-B2yXrdOr.js";import"./iframe-BRPaCIBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL7yNlIg.js";const e=`import { IRToast } from "@innorules/ir-style/lib/esm/solid.js";

const toast = new IRToast();

toast.mount();

// 토스트 옵션 설정
btn_show_info_toast.onclick = () => toast.info( "info 토스트 입니다." );
btn_show_success_toast.onclick = () => toast.success( "success 토스트 입니다." );
btn_show_warning_toast.onclick = () => toast.warning( "warning 토스트 입니다." );
btn_show_error_toast.onclick = () => toast.error( "error 토스트 입니다." );

// placement 설정
btn_show_top_left.onclick = () => toast.info( "top-left 토스트 입니다.", { placement: "top-left" } );
btn_show_top_right.onclick = () => toast.info( "top-right 토스트 입니다.", { placement: "top-right" } );
btn_show_bottom_left.onclick = () => toast.info( "bottom-left 토스트 입니다.", { placement: "bottom-left" } );
btn_show_bottom_right.onclick = () => toast.info( "bottom-right 토스트 입니다.", { placement: "bottom-right" } );

// 커스텀 옵션 설정
btn_show_timeout_5.onclick = () => toast.info( "5초 동안 표시됩니다.", { timeout: 5000 } );
btn_show_offset.onclick = () => toast.info( "offset X/Y 50px", { offsetX: 50, offsetY: 50 } );`,a=`<div class="flex flex--column gap--md">
    <div>
        <button id="btn_show_info_toast" class="button">Info</button>
        <button id="btn_show_warning_toast" class="button">Warning</button>
        <button id="btn_show_success_toast" class="button">Success</button>
        <button id="btn_show_error_toast" class="button">Error</button>
    </div>
    <div>
        <button id="btn_show_top_left" class="button">Top Left</button>
        <button id="btn_show_top_right" class="button">Top Right</button>
        <button id="btn_show_bottom_left" class="button">Bottom Left</button>
        <button id="btn_show_bottom_right" class="button">Bottom Right</button>
    </div>
    <div>
        <button id="btn_show_timeout_5" class="button">Timeout 5초</button>
        <button id="btn_show_offset" class="button">Offset 조정</button>
    </div>
</div>`,u={title:"SolidJS Components/IRToast"};function t(){return o.jsxs(n,{children:[o.jsx(s,{children:"IRToast"}),o.jsx("p",{children:"화면에 나타나는 알림 메시지 UI 컴포넌트"}),o.jsx(i,{fixedHeight:500,htmlRaw:a,exampleCode:e})]})}t.__docgenInfo={description:"",methods:[],displayName:"IRToast"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`function IRToast() {
  return <Doc>
            <DocTitle>IRToast</DocTitle>
            <p>화면에 나타나는 알림 메시지 UI 컴포넌트</p>
            <LiveEditor fixedHeight={500} htmlRaw={htmlRaw} exampleCode={exampleCode} />
        </Doc>;
}`,...t.parameters?.docs?.source}}};const m=["IRToast"];export{t as IRToast,m as __namedExportsOrder,u as default};
