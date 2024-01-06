import{j as t,a as e}from"./jsx-runtime-KzWSGvcx.js";import{r as l}from"./index-DogsOklH.js";import"./timePicker.elements-Q0xqtR9Q.js";import{I as o}from"./select-ye26dHUk.js";import{I as u}from"./datePicker-zU491wOI.js";import{D as c,a as d,b as m,c as p}from"./dialog.header-jt6yyT8t.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./index--oTrqKKK.js";import"./index-xS4YNjdq.js";const w={title:"Builder Examples/메인"},a=()=>(l.useEffect(()=>{new u({div:document.getElementById("datepicker"),checkbox:!1,disabled:!1}),document.querySelectorAll("select").forEach(s=>{new o(s)})},[]),t(c,{visible:!0,style:{width:814},children:[e(d,{title:"룰 복사/붙여넣기"}),t(m,{children:[t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"문자열 바꾸기"}),e("div",{className:"form-item__control",children:t("div",{className:"search",children:[e("select",{className:"width--xs",children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"찾을 내용을 입력하십시오"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"바꿀 내용을 입력하십시오."})}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]}),t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"문자열 추가"}),e("div",{className:"form-item__control",children:t("div",{className:"search",children:[e("select",{className:"width--xs",children:e("option",{children:"룰 이름"})}),e("select",{className:"width--xxs",children:e("option",{children:"앞"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"추가할 내용을 입력하십시오"})}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]}),t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"버전 일자 일괄 변경"}),e("div",{className:"form-item__control",children:t("div",{className:"row gap-x--xs",children:[e("div",{id:"datepicker",className:"width--xl"}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]})]}),e(p,{right:e("button",{type:"button",className:"button button--primary",children:"확인"})})]}));var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  useEffect(() => {
    new IRDatePicker({
      div: (document.getElementById("datepicker") as HTMLDivElement),
      checkbox: false,
      disabled: false
    });
    document.querySelectorAll("select").forEach(element => {
      new IRSelect((element as HTMLSelectElement));
    });
  }, []);
  return <Dialog visible={true} style={{
    width: 814
  }}>\r
            <DialogHeader title="룰 복사/붙여넣기" />\r
            <DialogContent>\r
                <div className="form-item">\r
                    <div className="form-item__label">문자열 바꾸기</div>\r
                    <div className="form-item__control">\r
                        <div className="search">\r
                            <select className="width--xs">\r
                                <option>룰 이름</option>\r
                            </select>\r
                            <div className="input">\r
                                <input type="password" className="input__native" placeholder="찾을 내용을 입력하십시오" />\r
                            </div>\r
                            <div className="input">\r
                                <input type="password" className="input__native" placeholder="바꿀 내용을 입력하십시오." />\r
                            </div>\r
                            <button type="button" className="button button--tertiary">적용</button>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="form-item">\r
                    <div className="form-item__label">문자열 추가</div>\r
                    <div className="form-item__control">\r
                        <div className="search">\r
                            <select className="width--xs">\r
                                <option>룰 이름</option>\r
                            </select>\r
                            <select className="width--xxs">\r
                                <option>앞</option>\r
                            </select>\r
                            <div className="input">\r
                                <input type="password" className="input__native" placeholder="추가할 내용을 입력하십시오" />\r
                            </div>\r
                            <button type="button" className="button button--tertiary">적용</button>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="form-item">\r
                    <div className="form-item__label">버전 일자 일괄 변경</div>\r
                    <div className="form-item__control">\r
                        <div className="row gap-x--xs">\r
                            <div id="datepicker" className="width--xl" />\r
                            <button type="button" className="button button--tertiary">적용</button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
            <DialogFooter right={<button type="button" className="button button--primary">\r
                                확인\r
                    </button>} />\r
        </Dialog>;
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const x=["룰_복사_및_붙여넣기"];export{x as __namedExportsOrder,w as default,a as 룰_복사_및_붙여넣기};
