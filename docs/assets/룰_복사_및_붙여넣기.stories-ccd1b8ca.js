import{j as t,a as e}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";import"./timePicker.elements-3c8a0aec.js";import{I as o}from"./select-35a4c028.js";import{I as c}from"./datePicker-3b40ee03.js";import{D as d,a as m,b as p,c as u}from"./dialog.header-5e992610.js";import"./button.classNames-50f35cbd.js";import"./dialog.classNames-23eb9c08.js";import"./select.classNames-9034d006.js";import"./index-d6235da7.js";import"./v4-a960c1f4.js";import"./index-91038615.js";const k={title:"Builder Examples/메인"},r=()=>(l.useEffect(()=>{new c({div:document.getElementById("datepicker"),checkbox:!1,disabled:!1}),document.querySelectorAll("select").forEach(s=>{new o(s)})},[]),t(d,{visible:!0,style:{width:814},children:[e(m,{title:"룰 복사/붙여넣기"}),t(p,{children:[t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"문자열 바꾸기"}),e("div",{className:"form-item__control",children:t("div",{className:"search",children:[e("select",{className:"width--xs",children:e("option",{children:"룰 이름"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"찾을 내용을 입력하십시오"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"바꿀 내용을 입력하십시오."})}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]}),t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"문자열 추가"}),e("div",{className:"form-item__control",children:t("div",{className:"search",children:[e("select",{className:"width--xs",children:e("option",{children:"룰 이름"})}),e("select",{className:"width--xxs",children:e("option",{children:"앞"})}),e("div",{className:"input",children:e("input",{type:"password",className:"input__native",placeholder:"추가할 내용을 입력하십시오"})}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]}),t("div",{className:"form-item",children:[e("div",{className:"form-item__label",children:"버전 일자 일괄 변경"}),e("div",{className:"form-item__control",children:t("div",{className:"row gap-x--xs",children:[e("div",{id:"datepicker",className:"width--xl"}),e("button",{type:"button",className:"button button--tertiary",children:"적용"})]})})]})]}),e(u,{right:e("button",{type:"button",className:"button button--primary",children:"확인"})})]}));var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const I=["룰_복사_및_붙여넣기"];export{I as __namedExportsOrder,k as default,r as 룰_복사_및_붙여넣기};
//# sourceMappingURL=룰_복사_및_붙여넣기.stories-ccd1b8ca.js.map
