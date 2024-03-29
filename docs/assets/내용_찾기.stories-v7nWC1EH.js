import{j as e,a}from"./jsx-runtime-KzWSGvcx.js";import{r as o}from"./index-DogsOklH.js";import"./timePicker.elements-Q0xqtR9Q.js";import{I as i}from"./select-ye26dHUk.js";import{D as t,a as d,b as p,c as m}from"./dialog.header-jt6yyT8t.js";import"./index-DkI8zks2.js";import"./dialog.classNames-NwpM97UH.js";import"./index--oTrqKKK.js";import"./index-xS4YNjdq.js";const D={title:"Builder Examples/메인"},l=()=>(o.useEffect(()=>{document.querySelectorAll("select").forEach(s=>new i(s))},[]),e(t,{visible:!0,style:{width:568},children:[a(d,{title:"내용 찾기"}),e(p,{children:[e("div",{className:"form-item",children:[a("div",{className:"form-item__label width--auto",children:"찾을 내용"}),a("div",{className:"form-item__control",children:a("div",{className:"input",children:a("input",{type:"text",className:"input__native",placeholder:"검색어를 입력하십시오."})})})]}),e("div",{className:"row gap-x--3xl mt--xxl",children:[e("div",{className:"row flex--column col col--none gap-y--xs",children:[a("div",{className:"col col--none checkbox",children:e("label",{className:"checkbox__wrapper",children:[a("input",{type:"checkbox",className:"checkbox__input"}),a("span",{className:"checkbox__text",children:"대소문자 구분"})]})}),a("div",{className:"col col--none checkbox",children:e("label",{className:"checkbox__wrapper",children:[a("input",{type:"checkbox",className:"checkbox__input"}),a("span",{className:"checkbox__text",children:"모든 셀 내용 일치"})]})})]}),e("div",{className:"row flex--column col col--none gap-y--xs",children:[a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"모두"})]})}),a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"선택한 영역"})]})}),a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"선택한 열"})]})}),a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"선택한 행"})]})})]}),e("div",{className:"row flex--column col col--none gap-y--xs",children:[a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"위-아래"})]})}),a("div",{className:"col col--none radio",children:e("label",{className:"radio__wrapper",children:[a("input",{type:"radio",className:"radio__input"}),a("span",{className:"radio__text",children:"왼쪽-오른쪽"})]})})]})]})]}),a(m,{right:a("button",{type:"button",className:"button button--primary",children:"다음 찾기"})})]}));var r,n,c;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll("select").forEach(element => new IRSelect(element));
  }, []);
  return <Dialog visible={true} style={{
    width: 568
  }}>\r
            <DialogHeader title="내용 찾기" />\r
            <DialogContent>\r
                <div className="form-item">\r
                    <div className="form-item__label width--auto">찾을 내용</div>\r
                    <div className="form-item__control">\r
                        <div className="input">\r
                            <input type="text" className="input__native" placeholder="검색어를 입력하십시오." />\r
                        </div>\r
                    </div>\r
                </div>\r
                <div className="row gap-x--3xl mt--xxl">\r
                    <div className="row flex--column col col--none gap-y--xs">\r
                        <div className="col col--none checkbox">\r
                            <label className="checkbox__wrapper">\r
                                <input type="checkbox" className="checkbox__input" />\r
                                <span className="checkbox__text">대소문자 구분</span>\r
                            </label>\r
                        </div>\r
                        <div className="col col--none checkbox">\r
                            <label className="checkbox__wrapper">\r
                                <input type="checkbox" className="checkbox__input" />\r
                                <span className="checkbox__text">모든 셀 내용 일치</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="row flex--column col col--none gap-y--xs">\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">모두</span>\r
                            </label>\r
                        </div>\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">선택한 영역</span>\r
                            </label>\r
                        </div>\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">선택한 열</span>\r
                            </label>\r
                        </div>\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">선택한 행</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                    <div className="row flex--column col col--none gap-y--xs">\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">위-아래</span>\r
                            </label>\r
                        </div>\r
                        <div className="col col--none radio">\r
                            <label className="radio__wrapper">\r
                                <input type="radio" className="radio__input" />\r
                                <span className="radio__text">왼쪽-오른쪽</span>\r
                            </label>\r
                        </div>\r
                    </div>\r
                </div>\r
            </DialogContent>\r
            <DialogFooter right={<button type="button" className="button button--primary">다음 찾기</button>} />\r
        </Dialog>;
}`,...(c=(n=l.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const w=["내용_찾기"];export{w as __namedExportsOrder,D as default,l as 내용_찾기};
