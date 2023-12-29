import{j as r,a as e}from"./jsx-runtime-KzWSGvcx.js";import{r as n}from"./index-DogsOklH.js";import"./timePicker.elements-RVnBiWo6.js";import{I as o}from"./select-KmN-oMMw.js";import{D as m,a as c,b as d}from"./dialog.header-jt6yyT8t.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./index-eYBRYqm7.js";import"./index-xS4YNjdq.js";const B={title:"Builder Examples/메인"},i=()=>(n.useEffect(()=>{document.querySelectorAll("select").forEach(s=>new o(s))},[]),r(m,{visible:!0,style:{width:605},children:[e(c,{title:"테이블 추가"}),r(d,{children:[r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"DB 접속명"}),e("div",{className:"form-item__control",children:e("select",{children:e("option",{children:"BIZDB"})})})]}),r("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"테이블 이름"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{type:"text",className:"input__native",placeholder:"테이블 이름을 입력하십시오."})})})]}),e("div",{className:"grid",children:".grid"})]})]}));var t,l,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const g=["테이블_추가"];export{g as __namedExportsOrder,B as default,i as 테이블_추가};
