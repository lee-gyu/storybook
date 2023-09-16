import{j as t,a as n,F as i}from"./jsx-runtime-e43ccb36.js";import{D as l,a as d,L as s}from"./doc-content-486f07cf.js";import"./index-1b03fe98.js";import"./index-91038615.js";const m={title:"JS Components/VirtualDOM"},e=()=>t(l,{children:[n(d,{children:"IRVirtualDOM"}),t("p",{children:[n("code",{children:"IRVirtualDOM"})," 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다."]}),n(s,{fixedHeight:400,html:t(i,{children:[n("style",{children:`
                    #virtual_dom {
                        width: 750px;
                        height: 300px;
                    }

                    .table-row {
                        display: flex;
                        align-items: center;
                        padding: 0 12px;
                        height: 100%;
                        box-sizing: border-box;
                        border-bottom: 1px solid #ddd;
                    }

                    .table-row:hover {
                        background-color: var(--background-color);
                    }

                    .table-row--freezed {
                        font-weight: 700;
                        background-color: var(--secondary);
                        color: var(--white);
                    }

                    .table-row--freezed:hover {
                        background-color: var(--secondary-active);
                    }
`}),t("div",{className:"mb--lg",children:[n("button",{className:"button",id:"btn_clear",children:"Clear"}),n("button",{className:"button",id:"btn_add400",children:"Add 400 Rows"}),n("button",{className:"button",id:"btn_add3",children:"Add 3 Rows"}),n("div",{className:"input",style:{display:"inline-flex",width:80},children:n("input",{id:"inserting_row",className:"input__native",type:"number",defaultValue:1,min:0})}),n("button",{className:"button",id:"btn_insert",children:"Insert Row"}),n("button",{className:"button",id:"btn_toggle",children:"Toggle Visible"}),n("button",{className:"button",id:"btn_scroll",children:"Scroll To Row"})]}),n("div",{id:"virtual_dom"})]}),code:`
import { IRVirtualDOM } from "./dist/index.js";

const virtualDOM = new IRVirtualDOM({
    contextElement: document.getElementById("virtual_dom"),
    rowCount: 80,
    headerRowCount: 1,
    defaultRowHeight: 28,
    onCreatedRowElement(row, rowElement) {
        const div = document.createElement("div");
        const span = document.createElement("span");

        div.classList.add( "table-row" );

        span.textContent = "Test " + row.rowId + " " + Date.now();
        div.append(span);

        if (row.isFreezed)
        {
            span.textContent = "Header";
            div.classList.add( "table-row--freezed" );
        }
        else {
            const btnDelete = document.createElement("button");

            btnDelete.className = "ml--auto";
            btnDelete.textContent = "삭제";
            btnDelete.onclick = () => virtualDOM.removeRow(row.rowId);

            div.append(btnDelete);
        }

        rowElement.append(div);
    }
});

// storybook 디버깅 용
window.virtualDOM = virtualDOM;

btn_clear.onclick = () => {
    virtualDOM.clearRows();
}

btn_add400.onclick = () => {
    Array.from({ length: 400 }).forEach(() => {
        virtualDOM.addRow();
    });
}

btn_add3.onclick = () => {
    Array.from({ length: 3 }).forEach(() => {
        virtualDOM.addRow();
    });
}

btn_insert.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    virtualDOM.insertRow(rowId);
}

btn_toggle.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const visible = virtualDOM.getRowVisible(rowId);

    virtualDOM.setRowVisible(rowId, !visible);
}

btn_scroll.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.scrollToRow(rowId);
}

`})]});var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRVirtualDOM</DocTitle>\r
            <p><code>IRVirtualDOM</code> 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                    <style>\r
                        {\`
                    #virtual_dom {
                        width: 750px;
                        height: 300px;
                    }

                    .table-row {
                        display: flex;
                        align-items: center;
                        padding: 0 12px;
                        height: 100%;
                        box-sizing: border-box;
                        border-bottom: 1px solid #ddd;
                    }

                    .table-row:hover {
                        background-color: var(--background-color);
                    }

                    .table-row--freezed {
                        font-weight: 700;
                        background-color: var(--secondary);
                        color: var(--white);
                    }

                    .table-row--freezed:hover {
                        background-color: var(--secondary-active);
                    }
\`}\r
                    </style>\r
                    <div className="mb--lg">\r
                        <button className="button" id="btn_clear">Clear</button>\r
                        <button className="button" id="btn_add400">Add 400 Rows</button>\r
                        <button className="button" id="btn_add3">Add 3 Rows</button>\r
                        <div className="input" style={{
          display: "inline-flex",
          width: 80
        }}>\r
                            <input id="inserting_row" className="input__native" type="number" defaultValue={1} min={0} />\r
                        </div>\r
                        <button className="button" id="btn_insert">Insert Row</button>\r
                        <button className="button" id="btn_toggle">Toggle Visible</button>\r
                        <button className="button" id="btn_scroll">Scroll To Row</button>\r
                    </div>\r
                    <div id="virtual_dom"></div>\r
                </>} code={/* javascript */\`
import { IRVirtualDOM } from "./dist/index.js";

const virtualDOM = new IRVirtualDOM({
    contextElement: document.getElementById("virtual_dom"),
    rowCount: 80,
    headerRowCount: 1,
    defaultRowHeight: 28,
    onCreatedRowElement(row, rowElement) {
        const div = document.createElement("div");
        const span = document.createElement("span");

        div.classList.add( "table-row" );

        span.textContent = "Test " + row.rowId + " " + Date.now();
        div.append(span);

        if (row.isFreezed)
        {
            span.textContent = "Header";
            div.classList.add( "table-row--freezed" );
        }
        else {
            const btnDelete = document.createElement("button");

            btnDelete.className = "ml--auto";
            btnDelete.textContent = "삭제";
            btnDelete.onclick = () => virtualDOM.removeRow(row.rowId);

            div.append(btnDelete);
        }

        rowElement.append(div);
    }
});

// storybook 디버깅 용
window.virtualDOM = virtualDOM;

btn_clear.onclick = () => {
    virtualDOM.clearRows();
}

btn_add400.onclick = () => {
    Array.from({ length: 400 }).forEach(() => {
        virtualDOM.addRow();
    });
}

btn_add3.onclick = () => {
    Array.from({ length: 3 }).forEach(() => {
        virtualDOM.addRow();
    });
}

btn_insert.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    virtualDOM.insertRow(rowId);
}

btn_toggle.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const visible = virtualDOM.getRowVisible(rowId);

    virtualDOM.setRowVisible(rowId, !visible);
}

btn_scroll.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.scrollToRow(rowId);
}

\`} />\r
        </Doc>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["Basic"];export{e as Basic,v as __namedExportsOrder,m as default};
//# sourceMappingURL=virtual-dom.stories-19582ed3.js.map
