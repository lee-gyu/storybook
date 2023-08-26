import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{D as n,a as o,L as s}from"./doc-content-c992edf3.js";import"./index-1b03fe98.js";import"./index-91038615.js";const v={title:"HTML Components/Table"},h=()=>r("tr",{children:[e("td",{children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("td",{children:e("div",{className:"favorite",children:r("label",{className:"favorite__wrapper",children:[e("input",{type:"checkbox",className:"favorite__input"}),r("div",{className:"favorite__state",children:[e("i",{className:"favorite__inactive ir-icon ir-icon--star-outline"}),e("i",{className:"favorite__active ir-icon ir-icon--star-fill"})]})]})})}),e("td",{className:"text--start",children:r("div",{className:"rule-name",children:[e("i",{className:"ir-icon ir-icon--rule-type-table"}),e("span",{className:"rule-name__text",children:"금융 상품"})]})}),e("td",{children:"#S00000001"}),e("td",{children:"product"}),e("td",{children:"-"}),e("td",{}),e("td",{children:e("i",{className:"ir-icon ir-icon--return-multiple"})}),e("td",{}),e("td",{className:"text--ellipsis",children:"ID:admin,Name:manager,IP:127.0.0.1"}),e("td",{children:"2021-12-13 14:48:26"})]}),t=()=>r(n,{children:[e(o,{children:"Table"}),r("p",{children:["표를 표현할 수 있는 스타일입니다. ",e("code",{children:"height"}),"가 설정되면 컨텐츠가 많아질 경우 세로 스크롤이 생성됩니다."]}),e(s,{html:e("div",{className:"table",style:{height:150},children:r("table",{children:[r("colgroup",{children:[e("col",{style:{width:"36px"}}),e("col",{style:{width:"40px"}}),e("col",{}),e("col",{style:{width:"9.1666%"}}),e("col",{style:{width:"9.8333%"}}),e("col",{span:2,style:{width:"6.5833%"}}),e("col",{span:2,style:{width:"8.5833%"}}),e("col",{span:2,style:{width:"13.8333%"}})]}),e("thead",{children:r("tr",{children:[e("th",{scope:"row",children:e("div",{className:"checkbox",children:e("label",{className:"checkbox__wrapper",children:e("input",{type:"checkbox",className:"checkbox__input"})})})}),e("th",{scope:"row",children:e("div",{className:"favorite",children:r("label",{className:"favorite__wrapper",children:[e("input",{type:"checkbox",className:"favorite__input"}),r("div",{className:"favorite__state",children:[e("i",{className:"favorite__inactive ir-icon ir-icon--star-outline"}),e("i",{className:"favorite__active ir-icon ir-icon--star-fill"})]})]})})}),e("th",{scope:"row",className:"text--start",children:"룰 이름"}),e("th",{scope:"row",children:"룰 코드"}),e("th",{scope:"row",children:"룰 별칭"}),e("th",{scope:"row",children:"승인"}),e("th",{scope:"row",children:"이관"}),e("th",{scope:"row",children:"리턴 형식"}),e("th",{scope:"row",children:"브랜치 노드"}),e("th",{scope:"row",children:"최종 변경자"}),e("th",{scope:"row",children:"최종 변경일"})]})}),e("tbody",{children:Array.from({length:10}).map((d,l)=>e(h,{},l))})]})})})]});var c,i,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Table</DocTitle>\r
        <p>표를 표현할 수 있는 스타일입니다. <code>height</code>가 설정되면 컨텐츠가 많아질 경우 세로 스크롤이 생성됩니다.</p>\r
        <LiveEditor html={<div className="table" style={{
    height: 150
  }}>\r
                <table>\r
                    <colgroup>\r
                        <col style={{
          width: "36px"
        }} />\r
                        <col style={{
          width: "40px"
        }} />\r
                        <col />\r
                        <col style={{
          width: "9.1666%"
        }} />\r
                        <col style={{
          width: "9.8333%"
        }} />\r
                        <col span={2} style={{
          width: "6.5833%"
        }} />\r
                        <col span={2} style={{
          width: "8.5833%"
        }} />\r
                        <col span={2} style={{
          width: "13.8333%"
        }} />\r
                    </colgroup>\r
                    <thead>\r
                        <tr>\r
                            <th scope="row">\r
                                <div className="checkbox">\r
                                    <label className="checkbox__wrapper">\r
                                        <input type="checkbox" className="checkbox__input" />\r
                                    </label>\r
                                </div>\r
                            </th>\r
                            <th scope="row">\r
                                <div className="favorite">\r
                                    <label className="favorite__wrapper">\r
                                        <input type="checkbox" className="favorite__input" />\r
                                        <div className="favorite__state">\r
                                            <i className="favorite__inactive ir-icon ir-icon--star-outline"></i>\r
                                            <i className="favorite__active ir-icon ir-icon--star-fill"></i>\r
                                        </div>\r
                                    </label>\r
                                </div>\r
                            </th>\r
                            <th scope="row" className="text--start">룰 이름</th>\r
                            <th scope="row">룰 코드</th>\r
                            <th scope="row">룰 별칭</th>\r
                            <th scope="row">승인</th>\r
                            <th scope="row">이관</th>\r
                            <th scope="row">리턴 형식</th>\r
                            <th scope="row">브랜치 노드</th>\r
                            <th scope="row">최종 변경자</th>\r
                            <th scope="row">최종 변경일</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        {Array.from({
          length: 10
        }).map((_, i) => <TempRow key={i} />)}\r
                    </tbody>\r
                </table>\r
            </div>} />\r
    </Doc>`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,v as default};
//# sourceMappingURL=table.default.stories-f3f2eb6b.js.map
