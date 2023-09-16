import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import"./timePicker.elements-78bcdb3d.js";import{I as o}from"./select-1c98d1a7.js";import{D as m,a as c,b as d}from"./dialog.header-5e992610.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-c7da6992.js";import"./v4-a960c1f4.js";import"./index-91038615.js";const B={title:"Builder Examples/메인"},i=()=>(n.useEffect(()=>{document.querySelectorAll("select").forEach(s=>new o(s))},[]),r(m,{visible:!0,style:{width:605},children:[e(c,{title:"테이블 추가"}),r(d,{children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"DB 접속명"}),e("div",{className:"form-item__control",children:e("select",{children:e("option",{children:"BIZDB"})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"테이블 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"테이블 이름을 입력하십시오."})})})]}),e("div",{className:"grid",children:".grid"})]})]}));var t,l,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
  }, []);
  return <Dialog visible={true} style={{
    width: 605
  }}>\r
            <DialogHeader title="테이블 추가" />\r
            <DialogContent>\r
                <div className="form-item">\r
                    <div className="form-item__label">DB 접속명</div>\r
                    <div className="form-item__control">\r
                        <select>\r
                            <option>BIZDB</option>\r
                        </select>\r
                    </div>\r
                </div>\r
                <div className="form-item">\r
                    <div className="form-item__label">테이블 이름</div>\r
                    <div className="form-item__control">\r
                        <div className="input">\r
                            <input type="text" className="input__native" placeholder="테이블 이름을 입력하십시오." />\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="grid">.grid</div>\r
            </DialogContent>\r
        </Dialog>;
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const E=["테이블_추가"];export{E as __namedExportsOrder,B as default,i as 테이블_추가};
//# sourceMappingURL=테이블_추가.stories-2d863b73.js.map
