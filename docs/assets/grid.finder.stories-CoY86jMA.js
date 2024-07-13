import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{D as s,a as c,L as t}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const p={title:"JS Components/Grid"},a=()=>e.jsxs(s,{children:[e.jsx(c,{children:"IRGrid Finder"}),e.jsx("p",{children:"Finder를 이용하여 셀 찾기 기능을 수행할 수 있습니다."}),e.jsx(t,{css:"",html:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"search",children:[e.jsxs("div",{className:"search__input-group",children:[e.jsx("div",{className:"search__input-group-row",children:e.jsxs("div",{className:"form-item",children:[e.jsx("div",{className:"form-item__label width--xxs",children:"검색어"}),e.jsx("div",{className:"form-item__control",children:e.jsx("div",{className:"input",children:e.jsx("input",{id:"search_text",type:"text",className:"input__native"})})})]})}),e.jsx("div",{id:"control_panel",className:"search__input-group-row",children:e.jsxs("div",{className:"row gap-x--3xl mt--xxl",children:[e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"ignore_case",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"대소문자 구분"})]})}),e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"match_all",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"전체 텍스트 일치"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"all",defaultChecked:!0}),e.jsx("span",{className:"radio__text",children:"모두"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selection"}),e.jsx("span",{className:"radio__text",children:"선택한 영역"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selected-row"}),e.jsx("span",{className:"radio__text",children:"선택한 행"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"selected-col"}),e.jsx("span",{className:"radio__text",children:"선택한 열"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"area",value:"custom"}),e.jsx("span",{className:"radio__text",children:"임의 범위(0,0 ~ 10,10)"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"direction",value:"by-rows",defaultChecked:!0}),e.jsx("span",{className:"radio__text",children:"행 우선"})]})}),e.jsx("div",{className:"col col--none radio",children:e.jsxs("label",{className:"radio__wrapper",children:[e.jsx("input",{type:"radio",className:"radio__input",name:"direction",value:"by-columns"}),e.jsx("span",{className:"radio__text",children:"열 우선"})]})})]}),e.jsxs("div",{className:"row flex--column col col--none gap-y--xs",children:[e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"has_header_rows",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"헤더 행 포함"})]})}),e.jsx("div",{className:"col col--none checkbox",children:e.jsxs("label",{className:"checkbox__wrapper",children:[e.jsx("input",{id:"has_header_cols",type:"checkbox",className:"checkbox__input"}),e.jsx("span",{className:"checkbox__text",children:"헤더 열 포함"})]})})]})]})})]}),e.jsx("button",{id:"btn",type:"button",className:"button button--tertiary",children:"다음 찾기"}),e.jsx("button",{id:"btn_cursor",type:"button",className:"button button--tertiary",children:"Set Cursor"})]}),e.jsx("br",{}),e.jsx("input",{id:"replace",type:"text",placeholder:"변경할 내용"}),e.jsx("button",{id:"btn_replace",className:"button",children:"모두 변경"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{id:"ir_grid",style:{height:500,width:"100%"}})]}),code:`
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

btn_cursor.onclick = () => {
    const cell = grid.activeCell;

    if (!cell) return;

    finder.setCursor(cell.row, cell.col);
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

`})]});a.__docgenInfo={description:"",methods:[],displayName:"Finder"};var r,n,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
                                                    <input type="radio" className="radio__input" name='direction' value="by-rows" defaultChecked />\r
                                                    <span className="radio__text">행 우선</span>\r
                                                </label>\r
                                            </div>\r
                                            <div className='col col--none radio'>\r
                                                <label className="radio__wrapper">\r
                                                    <input type="radio" className="radio__input" name='direction' value="by-columns" />\r
                                                    <span className="radio__text">열 우선</span>\r
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
                            <button id='btn_cursor' type="button" className="button button--tertiary">Set Cursor</button>\r
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

btn_cursor.onclick = () => {
    const cell = grid.activeCell;

    if (!cell) return;

    finder.setCursor(cell.row, cell.col);
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
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const x=["Finder"];export{a as Finder,x as __namedExportsOrder,p as default};
