import{j as e,a as o,F as a}from"./jsx-runtime-e43ccb36.js";import{D as n,a as d,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const N={title:"Objects/Grid"},c=()=>e(n,{children:[o(d,{children:"Grid"}),e("p",{children:[o("code",{children:".row"}),"에 최대 12개의 ",o("code",{children:".col"}),"으로 구성되어있습니다. 너비는 상위 요소에 비례해 유동적으로 설정됩니다."]}),e("ul",{children:[e("li",{children:[o("code",{children:"number"}),": 설정된 비율 공간을 사용합니다."]}),e("li",{children:[o("code",{children:"auto"}),": 사용 가능한 모든 공간을 사용합니다."]}),e("li",{children:[o("code",{children:"none"}),": 컨테이너 공간이 모자라도 자신의 크기를 유지합니다."]})]}),o(s,{css:`
#live_editor_wrapper .row .col {
    box-sizing: border-box;
    padding: 5px 10px;
}

#live_editor_wrapper .row [class*=" col--"]::before {
    display: block;
    line-height: 28px;
    text-align: center;
    pointer-events: none;
    background-color: rgba(41 42 43 / 2.5%);
    border: 1px solid #eaeeef;
}

#live_editor_wrapper .row .col--1::before {
    content: "1";
}

#live_editor_wrapper .row .col--2::before {
    content: "2";
}

#live_editor_wrapper .row .col--3::before {
    content: "3";
}

#live_editor_wrapper .row .col--4::before {
    content: "4";
}

#live_editor_wrapper .row .col--5::before {
    content: "5";
}

#live_editor_wrapper .row .col--6::before {
    content: "6";
}

#live_editor_wrapper .row .col--7::before {
    content: "7";
}

#live_editor_wrapper .row .col--8::before {
    content: "8";
}

#live_editor_wrapper .row .col--9::before {
    content: "9";
}

#live_editor_wrapper .row .col--10::before {
    content: "10";
}

#live_editor_wrapper .row .col--11::before {
    content: "11";
}

#live_editor_wrapper .row .col--12::before {
    content: "12";
}

#live_editor_wrapper .row .col--auto::before {
    content: "auto";
}

#live_editor_wrapper .row .col--none::before {
    content: "none";
}

#live_editor_wrapper .row:first-child .col {
    position: relative;
}

#live_editor_wrapper .row:first-child .col::after {
    position: absolute;
    top: -5px;
    right: 10px;
    left: 10px;
    height: 530px;
    pointer-events: none;
    content: "";
    background: rgba(97 174 217 / 10%);
    border: dashed #0b94e0;
    border-width: 0 1px;
    opacity: 0.5;
}`,html:e(a,{children:[e("div",{className:"row",children:[o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"}),o("div",{className:"col col--1"})]}),e("div",{className:"row",children:[o("div",{className:"col col--2"}),o("div",{className:"col col--2"}),o("div",{className:"col col--2"}),o("div",{className:"col col--2"}),o("div",{className:"col col--2"}),o("div",{className:"col col--2"})]}),e("div",{className:"row",children:[o("div",{className:"col col--3"}),o("div",{className:"col col--3"}),o("div",{className:"col col--3"}),o("div",{className:"col col--3"})]}),e("div",{className:"row",children:[o("div",{className:"col col--4"}),o("div",{className:"col col--4"}),o("div",{className:"col col--4"})]}),e("div",{className:"row",children:[o("div",{className:"col col--5"}),o("div",{className:"col col--2"}),o("div",{className:"col col--5"})]}),e("div",{className:"row",children:[o("div",{className:"col col--6"}),o("div",{className:"col col--6"})]}),e("div",{className:"row",children:[o("div",{className:"col col--7"}),o("div",{className:"col col--5"})]}),e("div",{className:"row",children:[o("div",{className:"col col--8"}),o("div",{className:"col col--4"})]}),e("div",{className:"row",children:[o("div",{className:"col col--9"}),o("div",{className:"col col--3"})]}),e("div",{className:"row",children:[o("div",{className:"col col--10"}),o("div",{className:"col col--2"})]}),e("div",{className:"row",children:[o("div",{className:"col col--11"}),o("div",{className:"col col--1"})]}),o("div",{className:"row",children:o("div",{className:"col col--12"})}),e("div",{className:"row",children:[o("div",{className:"col col--auto"}),o("div",{className:"col col--none"})]})]})})]});var l,r,i;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Grid</DocTitle>\r
        <p><code>.row</code>에 최대 12개의 <code>.col</code>으로 구성되어있습니다. 너비는 상위 요소에 비례해 유동적으로 설정됩니다.</p>\r
        <ul>\r
            <li><code>number</code>: 설정된 비율 공간을 사용합니다.</li>\r
            <li><code>auto</code>: 사용 가능한 모든 공간을 사용합니다.</li>\r
            <li><code>none</code>: 컨테이너 공간이 모자라도 자신의 크기를 유지합니다.</li>\r
        </ul>\r
        <LiveEditor css={\`
#live_editor_wrapper .row .col {
    box-sizing: border-box;
    padding: 5px 10px;
}

#live_editor_wrapper .row [class*=" col--"]::before {
    display: block;
    line-height: 28px;
    text-align: center;
    pointer-events: none;
    background-color: rgba(41 42 43 / 2.5%);
    border: 1px solid #eaeeef;
}

#live_editor_wrapper .row .col--1::before {
    content: "1";
}

#live_editor_wrapper .row .col--2::before {
    content: "2";
}

#live_editor_wrapper .row .col--3::before {
    content: "3";
}

#live_editor_wrapper .row .col--4::before {
    content: "4";
}

#live_editor_wrapper .row .col--5::before {
    content: "5";
}

#live_editor_wrapper .row .col--6::before {
    content: "6";
}

#live_editor_wrapper .row .col--7::before {
    content: "7";
}

#live_editor_wrapper .row .col--8::before {
    content: "8";
}

#live_editor_wrapper .row .col--9::before {
    content: "9";
}

#live_editor_wrapper .row .col--10::before {
    content: "10";
}

#live_editor_wrapper .row .col--11::before {
    content: "11";
}

#live_editor_wrapper .row .col--12::before {
    content: "12";
}

#live_editor_wrapper .row .col--auto::before {
    content: "auto";
}

#live_editor_wrapper .row .col--none::before {
    content: "none";
}

#live_editor_wrapper .row:first-child .col {
    position: relative;
}

#live_editor_wrapper .row:first-child .col::after {
    position: absolute;
    top: -5px;
    right: 10px;
    left: 10px;
    height: 530px;
    pointer-events: none;
    content: "";
    background: rgba(97 174 217 / 10%);
    border: dashed #0b94e0;
    border-width: 0 1px;
    opacity: 0.5;
}\`} html={<>\r
                    <div className="row">\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                        <div className="col col--1"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--2"></div>\r
                        <div className="col col--2"></div>\r
                        <div className="col col--2"></div>\r
                        <div className="col col--2"></div>\r
                        <div className="col col--2"></div>\r
                        <div className="col col--2"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--3"></div>\r
                        <div className="col col--3"></div>\r
                        <div className="col col--3"></div>\r
                        <div className="col col--3"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--4"></div>\r
                        <div className="col col--4"></div>\r
                        <div className="col col--4"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--5"></div>\r
                        <div className="col col--2"></div>\r
                        <div className="col col--5"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--6"></div>\r
                        <div className="col col--6"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--7"></div>\r
                        <div className="col col--5"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--8"></div>\r
                        <div className="col col--4"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--9"></div>\r
                        <div className="col col--3"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--10"></div>\r
                        <div className="col col--2"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--11"></div>\r
                        <div className="col col--1"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--12"></div>\r
                    </div>\r
                    <div className="row">\r
                        <div className="col col--auto"></div>\r
                        <div className="col col--none"></div>\r
                    </div>\r
                </>} />\r
    </Doc>`,...(i=(r=c.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const w=["Grid"];export{c as Grid,w as __namedExportsOrder,N as default};
//# sourceMappingURL=grid.stories-a14f5ff3.js.map
