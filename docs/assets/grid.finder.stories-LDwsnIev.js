import{j as a,a as e,F as i}from"./jsx-runtime-KzWSGvcx.js";import{D as t,a as s,L as o}from"./doc-content-Y1bYfLkc.js";import"./index-DogsOklH.js";import"./index-xS4YNjdq.js";const _={title:"JS Components/Grid"},r=()=>a(t,{children:[e(s,{children:"IRGrid Finder"}),e("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),e(o,{css:"",html:a(i,{children:[a("div",{className:"search",children:[a("div",{className:"search__input-group",children:[e("div",{className:"search__input-group-row",children:a("div",{className:"form-item",children:[e("div",{className:"form-item__label width--xxs",children:"검색어"}),e("div",{className:"form-item__control",children:e("div",{className:"input",children:e("input",{id:"search_text",type:"text",className:"input__native"})})})]})}),e("div",{id:"control_panel",className:"search__input-group-row",children:a("div",{className:"row gap-x--3xl mt--xxl",children:[a("div",{className:"row flex--column col col--none gap-y--xs",children:[e("div",{className:"col col--none checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{id:"ignore_case",type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"대소문자 구분"})]})}),e("div",{className:"col col--none checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{id:"match_all",type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"전체 텍스트 일치"})]})})]}),a("div",{className:"row flex--column col col--none gap-y--xs",children:[e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"area",value:"all",defaultChecked:!0}),e("span",{className:"radio__text",children:"모두"})]})}),e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"area",value:"selection"}),e("span",{className:"radio__text",children:"선택한 영역"})]})}),e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"area",value:"selected-row"}),e("span",{className:"radio__text",children:"선택한 행"})]})}),e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"area",value:"selected-col"}),e("span",{className:"radio__text",children:"선택한 열"})]})}),e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"area",value:"custom"}),e("span",{className:"radio__text",children:"임의 범위(0,0 ~ 10,10)"})]})})]}),a("div",{className:"row flex--column col col--none gap-y--xs",children:[e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"direction",value:"top-bottom",defaultChecked:!0}),e("span",{className:"radio__text",children:"위-아래"})]})}),e("div",{className:"col col--none radio",children:a("label",{className:"radio__wrapper",children:[e("input",{type:"radio",className:"radio__input",name:"direction",value:"left-right"}),e("span",{className:"radio__text",children:"왼쪽-오른쪽"})]})})]}),a("div",{className:"row flex--column col col--none gap-y--xs",children:[e("div",{className:"col col--none checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{id:"has_header_rows",type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"헤더 행 포함"})]})}),e("div",{className:"col col--none checkbox",children:a("label",{className:"checkbox__wrapper",children:[e("input",{id:"has_header_cols",type:"checkbox",className:"checkbox__input"}),e("span",{className:"checkbox__text",children:"헤더 열 포함"})]})})]})]})})]}),e("button",{id:"btn",type:"button",className:"button button--tertiary",children:"다음 찾기"})]}),e("br",{}),e("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),e("button",{id:"btn_replace",className:"button",children:"모두 변경"}),e("br",{}),e("br",{}),e("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 30
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

const finder = grid.createFinder();

function getOptions() {
    return {
        ignoreCase: ignore_case.checked === false,
        matchAll: match_all.checked === true,
        text: search_text.value,
        area: Array.from(document.querySelectorAll("input[name='area']")).filter(input => input.checked)[0].value,
        direction: Array.from(document.querySelectorAll("input[name='direction']")).filter(input => input.checked)[0].value,
        customRange: { top: 0, bottom: 10, left: 0, right: 10 },
        hasHeaderRows: has_header_rows.checked,
        hasHeaderColumns: has_header_cols.checked,
    }
}

btn.onclick = () => {
    const cell = finder.findNext(getOptions());

    if (cell) {
        grid.selectCell(cell.row, cell.col)
        grid.scrollInView(cell.row, cell.col)
    }
    else
        alert("찾을 수 없음!");
}

btn_replace.onclick = () => {
    const cells = finder.getAllMatchedCell(getOptions());

    for (const cell of cells) {
        cell.text = cell.text.replace(new RegExp(search_text.value), replace.value)
    }

}

grid.setText(1, 1, "1");
grid.setText(2, 2, "1");
grid.setText(3, 2, "1");
grid.setText(4, 1, "1");
grid.setText(5, 5, "1");
grid.setText(1, 2, "1bc");
grid.setText(1, 3, "A");
grid.setText(1, 4, "a");
grid.setText(2, 4, "aBc");
grid.setText(3, 4, "ABC");
grid.setText(4, 4, "abc");

Array.from({length: 15})
    .forEach( (_, r) => {
        grid.setText(1, 5 + r, "1")
        grid.setText(r + 10, 1, "1")
    });

`})]});var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRGrid Finder</DocTitle>\r
            <p>Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다.</p>\r
            <LiveEditor css={\`\`} html={<>\r
                        <div className='search'>\r
                            <div className='search__input-group'>\r
                                <div className='search__input-group-row'>\r
                                    <div className='form-item'>\r
                                        <div className='form-item__label width--xxs'>검색어</div>\r
                                        <div className='form-item__control'><div className='input'><input id="search_text" type="text" className='input__native'></input></div></div>\r
                                    </div>\r
                                </div>\r
                                <div id='control_panel' className='search__input-group-row'>\r
                                    <div className='row gap-x--3xl mt--xxl'>\r
                                        <div className="row flex--column col col--none gap-y--xs">\r
                                            <div className='col col--none checkbox'>\r
                                                <label className='checkbox__wrapper'>\r
                                                    <input id='ignore_case' type="checkbox" className="checkbox__input" />\r
                                                    <span className='checkbox__text'>대소문자 구분</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none checkbox'>\r
                                                <label className='checkbox__wrapper'>\r
                                                    <input id="match_all" type="checkbox" className="checkbox__input" />\r
                                                    <span className='checkbox__text'>전체 텍스트 일치</span>\r
                                                </label>\r
                                            </div>\r
                                        </div>\r
                                        <div className="row flex--column col col--none gap-y--xs">\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='area' value="all" defaultChecked />\r
                                                    <span className="radio__text">모두</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='area' value="selection" />\r
                                                    <span className="radio__text">선택한 영역</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='area' value="selected-row" />\r
                                                    <span className="radio__text">선택한 행</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='area' value="selected-col" />\r
                                                    <span className="radio__text">선택한 열</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='area' value="custom" />\r
                                                    <span className="radio__text">임의 범위(0,0 ~ 10,10)</span>\r
                                                </label>\r
                                            </div>\r
                                        </div>\r
                                        <div className="row flex--column col col--none gap-y--xs">\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='direction' value="top-bottom" defaultChecked />\r
                                                    <span className="radio__text">위-아래</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='direction' value="left-right" />\r
                                                    <span className="radio__text">왼쪽-오른쪽</span>\r
                                                </label>\r
                                            </div>\r
                                        </div>\r
                                        <div className="row flex--column col col--none gap-y--xs">\r
                                            <div className='col col--none checkbox'>\r
                                                <label className='checkbox__wrapper'>\r
                                                    <input id='has_header_rows' type="checkbox" className="checkbox__input" />\r
                                                    <span className='checkbox__text'>헤더 행 포함</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none checkbox'>\r
                                                <label className='checkbox__wrapper'>\r
                                                    <input id='has_header_cols' type="checkbox" className="checkbox__input" />\r
                                                    <span className='checkbox__text'>헤더 열 포함</span>\r
                                                </label>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <button id='btn' type="button" className="button button--tertiary">다음 찾기</button>\r
                        </div>\r
                        <br />\r
                        <input id='replace' type="text" placeholder='변경할 내용' />\r
                        <button id="btn_replace" className='button'>모두 변경</button>\r
                        <br />\r
                        <br />\r
                        <div id="ir_grid" style={{
        height: 500,
        width: "100%"
      }}></div>\r
                    </>} code={/* javascript */\`
import * as libGrid from "./dist/grid.js";

const grid = new libGrid.IRGrid({
    contextElement: ir_grid,
    body: {
        rowCount: 30,
    },
    colHeader: {
        rowCount: 1,
        colCount: 30
    },
    rowHeader: {
        colCount: 1,
        cellRenderer: libGrid.renderRowNoHeaderCell(1)
    }
})

const finder = grid.createFinder();

function getOptions() {
    return {
        ignoreCase: ignore_case.checked === false,
        matchAll: match_all.checked === true,
        text: search_text.value,
        area: Array.from(document.querySelectorAll("input[name='area']")).filter(input => input.checked)[0].value,
        direction: Array.from(document.querySelectorAll("input[name='direction']")).filter(input => input.checked)[0].value,
        customRange: { top: 0, bottom: 10, left: 0, right: 10 },
        hasHeaderRows: has_header_rows.checked,
        hasHeaderColumns: has_header_cols.checked,
    }
}

btn.onclick = () => {
    const cell = finder.findNext(getOptions());

    if (cell) {
        grid.selectCell(cell.row, cell.col)
        grid.scrollInView(cell.row, cell.col)
    }
    else
        alert("찾을 수 없음!");
}

btn_replace.onclick = () => {
    const cells = finder.getAllMatchedCell(getOptions());

    for (const cell of cells) {
        cell.text = cell.text.replace(new RegExp(search_text.value), replace.value)
    }

}

grid.setText(1, 1, "1");
grid.setText(2, 2, "1");
grid.setText(3, 2, "1");
grid.setText(4, 1, "1");
grid.setText(5, 5, "1");
grid.setText(1, 2, "1bc");
grid.setText(1, 3, "A");
grid.setText(1, 4, "a");
grid.setText(2, 4, "aBc");
grid.setText(3, 4, "ABC");
grid.setText(4, 4, "abc");

Array.from({length: 15})
    .forEach( (_, r) => {
        grid.setText(1, 5 + r, "1")
        grid.setText(r + 10, 1, "1")
    });

\`} />\r
        </Doc>;
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const h=["Finder"];export{r as Finder,h as __namedExportsOrder,_ as default};
