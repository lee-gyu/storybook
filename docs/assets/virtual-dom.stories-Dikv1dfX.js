import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{D as i,a,L as l}from"./doc-content-DCRebTQc.js";import"./index-uubelm5h.js";import"./index-vAxXS4R5.js";const b={title:"JS Components/VirtualDOM"},t=()=>n.jsxs(i,{children:[n.jsx(a,{children:"IRVirtualDOM"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRVirtualDOM"})," 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다."]}),n.jsx(l,{fixedHeight:400,html:n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
                        background-color: var(--white);
                        color: var(--text-color);
                    }

                    .table-row--freezed:hover {
                        background-color: var(--background-color);
                    }
`}),n.jsxs("div",{className:"mb--lg",children:[n.jsx("button",{className:"button",id:"btn_clear",children:"Clear"}),n.jsx("button",{className:"button",id:"btn_add400",children:"Add 400 Rows"}),n.jsx("button",{className:"button",id:"btn_add3",children:"Add 3 Rows"}),n.jsx("div",{className:"input",style:{display:"inline-flex",width:80},children:n.jsx("input",{id:"inserting_row",className:"input__native",type:"number",defaultValue:1,min:0})}),n.jsx("button",{className:"button",id:"btn_insert",children:"Insert Row"}),n.jsx("button",{className:"button",id:"btn_insert_rows",children:"Insert Rows"}),n.jsx("button",{className:"button",id:"btn_remove",children:"Remove"}),n.jsx("button",{className:"button",id:"btn_remove_10",children:"Remove 10"}),n.jsx("button",{className:"button",id:"btn_toggle",children:"Toggle Visible"}),n.jsx("button",{className:"button",id:"btn_scroll",children:"Scroll To Row"}),n.jsx("div",{className:"input",style:{display:"inline-flex",width:80},children:n.jsx("input",{id:"input_height",className:"input__native",type:"number",defaultValue:60,min:0})}),n.jsx("button",{className:"button",id:"btn_set_height",children:"Set Row Height"}),n.jsx("button",{className:"button",id:"btn_move",children:"Move Rows First 10"})]}),n.jsx("div",{id:"virtual_dom"})]}),code:`
import { IRVirtualDOM } from "./dist/index.js";

const virtualDOM = new IRVirtualDOM({
    contextElement: document.getElementById("virtual_dom"),
    rowCount: 81,
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

btn_insert_rows.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.insertRows(10, rowId);
}

btn_toggle.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const visible = virtualDOM.getRowVisible(rowId);

    virtualDOM.setRowVisible(rowId, !visible);
}

btn_remove.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.removeRow(rowId);
}

btn_remove_10.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.removeRows(rowId, rowId + 9);
}

btn_scroll.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.scrollToRow(rowId);
}

btn_set_height.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const rowHeight = parseInt(input_height.value, "10");

    virtualDOM.setRowHeight(rowId, rowHeight);
}

btn_move.onclick = () => {
    virtualDOM.moveRows(1, 10, virtualDOM.getRowCount());
}


`})]});t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
                        background-color: var(--white);
                        color: var(--text-color);
                    }

                    .table-row--freezed:hover {
                        background-color: var(--background-color);
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
                        <button className="button" id="btn_insert_rows">Insert Rows</button>\r
                        <button className="button" id="btn_remove">Remove</button>\r
                        <button className="button" id="btn_remove_10">Remove 10</button>\r
                        <button className="button" id="btn_toggle">Toggle Visible</button>\r
                        <button className="button" id="btn_scroll">Scroll To Row</button>\r
                        <div className="input" style={{
          display: "inline-flex",
          width: 80
        }}>\r
                            <input id="input_height" className="input__native" type="number" defaultValue={60} min={0} />\r
                        </div>\r
                        <button className="button" id="btn_set_height">Set Row Height</button>\r
                        <button className="button" id="btn_move">Move Rows First 10</button>\r
                    </div>\r
                    <div id="virtual_dom"></div>\r
                </>} code={/* javascript */\`
import { IRVirtualDOM } from "./dist/index.js";

const virtualDOM = new IRVirtualDOM({
    contextElement: document.getElementById("virtual_dom"),
    rowCount: 81,
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

btn_insert_rows.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.insertRows(10, rowId);
}

btn_toggle.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const visible = virtualDOM.getRowVisible(rowId);

    virtualDOM.setRowVisible(rowId, !visible);
}

btn_remove.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.removeRow(rowId);
}

btn_remove_10.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.removeRows(rowId, rowId + 9);
}

btn_scroll.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");

    virtualDOM.scrollToRow(rowId);
}

btn_set_height.onclick = () => {
    const rowId = parseInt(inserting_row.value, "10");
    const rowHeight = parseInt(input_height.value, "10");

    virtualDOM.setRowHeight(rowId, rowHeight);
}

btn_move.onclick = () => {
    virtualDOM.moveRows(1, 10, virtualDOM.getRowCount());
}


\`} />\r
        </Doc>;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,b as default};
