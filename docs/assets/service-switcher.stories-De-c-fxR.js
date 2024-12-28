import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as t,a as s,L as n}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const m={title:"Common UI/Service Switcher"},r=()=>e.jsxs(t,{children:[e.jsx(s,{children:"createServiceSwitcher"}),e.jsx("p",{children:"제품 전환을 위한 UI를 출력합니다. 이 모듈은 아래 제약 조건이 충족되어야 합니다."}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("code",{children:"sessionStorage"}),"의 ",e.jsx("code",{children:"com.innorules.webapi@entry-script-parameters"}),"에 사용자 세션이 초기화 되어 있어야 함."]})}),e.jsx(n,{fixedHeight:450,html:e.jsx(e.Fragment,{children:e.jsx("button",{className:"button",children:"제품 전환 UI 출력"})}),code:`
import { createServiceSwitcher } from "/common-ui/index.es.js";


console.log( createServiceSwitcher );

`})]});r.__docgenInfo={description:"",methods:[],displayName:"ServiceSwitcher"};var c,i,o;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>createServiceSwitcher</DocTitle>\r
        <p>제품 전환을 위한 UI를 출력합니다. 이 모듈은 아래 제약 조건이 충족되어야 합니다.</p>\r
        <ul>\r
            <li><code>sessionStorage</code>의 <code>com.innorules.webapi@entry-script-parameters</code>에 사용자 세션이 초기화 되어 있어야 함.</li>\r
        </ul>\r
        <LiveEditor fixedHeight={450} html={<>\r
                    <button className="button">제품 전환 UI 출력</button>\r
                </>} code={/* javascript */\`
import { createServiceSwitcher } from "/common-ui/index.es.js";


console.log( createServiceSwitcher );

\`} />\r
    </Doc>`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const h=["ServiceSwitcher"];export{r as ServiceSwitcher,h as __namedExportsOrder,m as default};
