import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as t,a as o,L as e}from"./version-tag-DYWb7goF.js";import"./iframe-MfDS26RN.js";import"./index-BoKU7Xug.js";const r=`import { IRVirtualDOM } from "@innorules/ir-style";

const virtualDOM = new IRVirtualDOM( {
    contextElement: document.getElementById( "virtual_dom" ),
    rowCount: 81,
    headerRowCount: 1,
    defaultRowHeight: 28,
    onCreatedRowElement( row, rowElement )
    {
        const div = document.createElement( "div" );
        const span = document.createElement( "span" );

        div.classList.add( "table-row" );

        span.textContent = "Test " + row.rowId + " " + Date.now();
        div.append( span );

        if( row.isFreezed )
        {
            span.textContent = "Header";
            div.classList.add( "table-row--freezed" );
        }
        else
        {
            const btnDelete = document.createElement( "button" );

            btnDelete.className = "ml--auto";
            btnDelete.textContent = "삭제";
            btnDelete.onclick = () => virtualDOM.removeRow( row.rowId );

            div.append( btnDelete );
        }

        rowElement.append( div );
    },
} );

// storybook 디버깅 용
window.virtualDOM = virtualDOM;

btn_clear.onclick = () =>
{
    virtualDOM.clearRows();
};

btn_add400.onclick = () =>
{
    Array.from( { length: 400 } ).forEach( () =>
    {
        virtualDOM.addRow();
    } );
};

btn_add3.onclick = () =>
{
    Array.from( { length: 3 } ).forEach( () =>
    {
        virtualDOM.addRow();
    } );
};

btn_insert.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );
    virtualDOM.insertRow( rowId );
};

btn_insert_rows.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );

    virtualDOM.insertRows( 10, rowId );
};

btn_toggle.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );
    const visible = virtualDOM.getRowVisible( rowId );

    virtualDOM.setRowVisible( rowId, !visible );
};

btn_remove.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );

    virtualDOM.removeRow( rowId );
};

btn_remove_10.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );

    virtualDOM.removeRows( rowId, rowId + 9 );
};

btn_scroll.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );

    virtualDOM.scrollToRow( rowId );
};

btn_set_height.onclick = () =>
{
    const rowId = parseInt( inserting_row.value, "10" );
    const rowHeight = parseInt( input_height.value, "10" );

    virtualDOM.setRowHeight( rowId, rowHeight );
};

btn_move.onclick = () =>
{
    virtualDOM.moveRows( 1, 10, virtualDOM.getRowCount() );
};`,i=`<style>
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
</style>
<div class="mb--lg">
    <button class="button" id="btn_clear">Clear</button>
    <button class="button" id="btn_add400">Add 400 Rows</button>
    <button class="button" id="btn_add3">Add 3 Rows</button>
    <div class="input" style="display: inline-flex; width: 80">
        <input id="inserting_row" class="input__native" type="number" value="1" min="0" />
    </div>
    <button class="button" id="btn_insert">Insert Row</button>
    <button class="button" id="btn_insert_rows">Insert Rows</button>
    <button class="button" id="btn_remove">Remove</button>
    <button class="button" id="btn_remove_10">Remove 10</button>
    <button class="button" id="btn_toggle">Toggle Visible</button>
    <button class="button" id="btn_scroll">Scroll To Row</button>
    <div class="input" style="display: inline-flex; width: 80">
        <input id="input_height" class="input__native" type="number" value="60" min="0" />
    </div>
    <button class="button" id="btn_set_height">Set Row Height</button>
    <button class="button" id="btn_move">Move Rows First 10</button>
</div>
<div id="virtual_dom"></div>`;function s(){return n.jsxs(t,{children:[n.jsx(o,{children:"IRVirtualDOM"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRVirtualDOM"})," 클래스를 이용하여 bulk 데이터를 표시해야 하는 경우, 브라우저 성능 문제를 최소화 할 수 있습니다."]}),n.jsx(e,{fixedHeight:400,htmlRaw:i,code:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"Basic"};const u={title:"JS Components/IRVirtualDOM"},b=["Basic"];export{s as Basic,b as __namedExportsOrder,u as default};
