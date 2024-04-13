import{j as o,a as n,F as u}from"./jsx-runtime-CjohWU4o.js";import{D as d,a,L as r}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const h={title:"JS Components/Flowchart"},t=()=>o(d,{children:[n(a,{children:"IRFlowchart"}),n(r,{html:o(u,{children:[o("div",{style:{marginBottom:8},children:[n("h3",{children:"오브젝트 추가 API"}),n("button",{className:"button",id:"btn_add_start",children:"start 노드 추가"}),n("button",{className:"button",id:"btn_add_if",children:"if 노드 추가"}),n("button",{className:"button",id:"btn_add_db",children:"db 노드 추가"}),n("button",{className:"button",id:"btn_add_bridge",children:"bridge 노드 추가"}),n("button",{className:"button",id:"btn_add_comment",children:"comment 노드 추가"}),n("button",{className:"button",id:"btn_add_return",children:"return 노드 추가"}),n("button",{className:"button",id:"btn_add_direct",children:"곧은 연결선 추가"}),n("button",{className:"button",id:"btn_add_elbow",children:"꺾은 연결선 추가"}),n("h3",{className:"mt--lg",children:"오브젝트 제어 API"}),n("button",{className:"button",id:"btn_clear",children:"clear"}),n("button",{className:"button",id:"btn_remove_selected",children:"선택 개체 제거 (Delete 키)"}),n("button",{className:"button",id:"btn_group",children:"선택된 개체 그룹"}),n("button",{className:"button",id:"btn_release_group",children:"그룹 해제"}),n("button",{className:"button",id:"btn_undo",children:"Undo (Ctrl + Z)"}),n("button",{className:"button",id:"btn_redo",children:"Redo (Ctrl + Y)"}),n("button",{className:"button",id:"btn_size_to_fit",children:"컨텐츠에 맞게 크기 조정"}),n("h3",{className:"mt--lg",children:"배치/정렬 API"}),n("button",{className:"button",id:"btn_align_left",children:"가로 왼쪽 정렬"}),n("button",{className:"button",id:"btn_align_center",children:"가로 중앙 정렬"}),n("button",{className:"button",id:"btn_align_right",children:"가로 오른쪽 정렬"}),n("button",{className:"button",id:"btn_align_top",children:"세로 위쪽 정렬"}),n("button",{className:"button",id:"btn_align_middle",children:"세로 중앙 정렬"}),n("button",{className:"button",id:"btn_align_bottom",children:"세로 아래쪽 정렬"}),n("button",{className:"button",id:"btn_distribute_horizontal",children:"가로 균등 분배"}),n("button",{className:"button",id:"btn_distribute_vertical",children:"세로 균등 분배"}),n("button",{className:"button",id:"btn_bring_to_front",children:"맨 앞으로"}),n("button",{className:"button",id:"btn_bring_to_back",children:"맨 뒤로"}),n("h3",{className:"mt--lg",children:"Mode Toggle (on/off)"}),o("div",{className:"flex gap-x--lg py--sm",children:[o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_grid"}),"눈금선"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_readonly"}),"읽기 전용"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_edit_mode"}),"마우스 상호작용 비활성화"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_trace"}),"디버그 모드"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_tooltip"}),"툴팁 숨김"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_move_screen_on_select"}),"노드 선택 시 스크롤 중앙 이동"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_select_node_on_hover"}),"hover 시 노드 선택"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_simple_connecting_mode"}),"연결선 최단 거리 자동 설정"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_toggle_wheel_zoom"}),"Ctrl + Wheel 줌"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_single_selection"}),"단일 선택 모드"]}),o("label",{children:[n("input",{type:"checkbox",id:"chk_canvas_move"}),"캔버스 이동 모드"]})]})]}),n("div",{id:"flowchart_div",className:"border",style:{height:550}})]}),code:`
import { IRContextMenuAdapter } from "./dist/react.js";
import { IRFlowchart, EVENT_TYPE } from "./dist/flowchart.js";

const flowchart = new IRFlowchart( {
    contextElement: document.querySelector("#flowchart_div"),
    width: "100%",
    height: "100%"
})

/* 버튼 패널 */
/* 추가 API */
btn_add_start.onclick = () => flowchart.append( 'append', { type: 'node', render: 'start' } );
btn_add_if.onclick = () => flowchart.append( 'append', { type: 'node', render: 'if' } );
btn_add_db.onclick = () => flowchart.append( 'append', { type: 'node', render: 'db' } );
btn_add_bridge.onclick = () => flowchart.append( 'append', { type: 'node', render: 'bridge' } );
btn_add_comment.onclick = () => flowchart.append( 'append', { type: 'node', render: 'comment' } );
btn_add_return.onclick = () => flowchart.append( 'append', { type: 'node', render: 'return' } );
btn_add_direct.onclick = () => flowchart.append( 'append', { type: 'connection', render: 'direct' } );
btn_add_elbow.onclick = () => flowchart.append( 'append', { type: 'connection', render: 'elbow' } );

/* 제어 API */
btn_clear.onclick = () => flowchart.clear();
btn_remove_selected.onclick = () => flowchart.removeSelected();
btn_group.onclick = () => flowchart.group();
btn_release_group.onclick = () => flowchart.ungroup();
btn_undo.onclick = () => flowchart.undo();
btn_redo.onclick = () => flowchart.redo();

/* 배치/정렬 API */
btn_align_left.onclick = () => flowchart.align( "left" );
btn_align_center.onclick = () => flowchart.align( "center" );
btn_align_right.onclick = () => flowchart.align( "right" );
btn_align_top.onclick = () => flowchart.align( "top" );
btn_align_middle.onclick = () => flowchart.align( "middle" );
btn_align_bottom.onclick = () => flowchart.align( "bottom" );
btn_distribute_horizontal.onclick = () => flowchart.distribute( "h" );
btn_distribute_vertical.onclick = () => flowchart.distribute( "v" );
btn_bring_to_front.onclick = () => flowchart.bringToFront();
btn_bring_to_back.onclick = () => flowchart.bringToBack();
btn_size_to_fit.onclick = () => flowchart.fitSizeOnText();

/* 모드 토글 */
document.querySelectorAll("input[type='checkbox']")
    .forEach(chk => chk.onchange = updateMode)

function updateMode() {
    flowchart.gridMode = chk_toggle_grid.checked;
    flowchart.readonly = chk_toggle_readonly.checked;
    flowchart.editMode = chk_toggle_edit_mode.checked;
    flowchart.traceMode = chk_toggle_trace.checked;
    flowchart.tooltipHidden = chk_toggle_tooltip.checked;
    flowchart.moveScreenOnSelect = chk_toggle_move_screen_on_select.checked;
    flowchart.selectNodeOnHover = chk_toggle_select_node_on_hover.checked;
    flowchart.simpleConnectingMode = chk_toggle_simple_connecting_mode.checked;
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;
    flowchart.singleSelection = chk_single_selection.checked;
    flowchart.canvasMoveMode = chk_canvas_move.checked;
}

/* API 호출 */

const startNode = flowchart.add({
    type: 'node',
    render: 'start',
    text: "시작\\n(Tooltip 있음)",
    tooltipText: "시작 노드 입니다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게"
})

const ifNode = flowchart.add({
    type: 'node',
    render: 'if',
    "node.x": 150,
    "node.y": 150
})

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': startNode.id,
    'connection.sourcePos': "bottom",
    'connection.destinationObjId': ifNode.id,
    'connection.destinationPos': "left"
})

const returnNode = flowchart.add({
    type: 'node',
    render: 'return',
    "node.x": 300,
    "node.y": 300,
    "node.borderRadius": 8
})

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': ifNode.id,
    'connection.sourcePos': "right",
    'connection.destinationObjId': returnNode.id,
    'connection.destinationPos': "top",
    'connection.arrowType': "circle"
})

/* Flowchart 콜백 이벤트 */
/* 패널 클릭 (x, y) */
flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
    console.log(EVENT_TYPE.CLICK, x, y)
} )

/* 노드 클릭 (node) */
flowchart.$on( EVENT_TYPE.CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.CLICK_NODE, node )
} )

/* 노드 더블 클릭 (node) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_NODE, node )
} )

/* 연결선 클릭 (connection) */
flowchart.$on( EVENT_TYPE.CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.CLICK_CONNECTION, connection )
} )

/* 연결선 더블 클릭 (connection) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, connection )
} )

/* 신규 개체 (obj) */
flowchart.$on( EVENT_TYPE.NEW_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.NEW_OBJECT, obj )
} )

/* 개체 제거 (obj) */
flowchart.$on( EVENT_TYPE.REMOVE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.REMOVE_OBJECT, obj )
} )

/* 개체 선택 (obj) */
flowchart.$on( EVENT_TYPE.SELECT_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.SELECT_OBJECT, obj )
} )

/* 개체 선택 해제 (obj) */
flowchart.$on( EVENT_TYPE.RELEASE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.RELEASE_OBJECT, obj )
} )

/* 노드/연결선 연결 (connection, key) */
flowchart.$on( EVENT_TYPE.CONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.CONNECT_NODE, connection, key, connection.data[key] )
} )

/* 노드/연결선 연결 해제 (obj, key) */
flowchart.$on( EVENT_TYPE.DISCONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.DISCONNECT_NODE, connection, key, connection.data[key] )
} )

/* undo (command) */
flowchart.$on( EVENT_TYPE.UNDO, ( command ) => {
    console.log( EVENT_TYPE.UNDO, command )
} )

/* redo (command) */
flowchart.$on( EVENT_TYPE.REDO, ( command ) => {
    console.log( EVENT_TYPE.REDO, command )
} )

/* svg 모드 변경 (flag, classes) */
flowchart.$on( EVENT_TYPE.CHANGE_CLASS, ( flag, classes ) => {
    console.log( EVENT_TYPE.CHANGE_CLASS, flag, classes )
} )

/* 마우스 UP */
flowchart.$on( EVENT_TYPE.MOUSEUP_SHEET, ( {x, y} ) => {
    console.log( EVENT_TYPE.MOUSEUP_SHEET, x, y )
} )

const contextMenu = new IRContextMenuAdapter({
    items: [
        {
            id: "add_node",
            type: "command-button",
            label: "노드 추가"
        }
    ]
})

/* contextMenu */
flowchart.$on( EVENT_TYPE.CONTEXT_MENU, ( ev ) => {
    console.log( EVENT_TYPE.CONTEXT_MENU, ev )

    contextMenu.showAtPoint( ev.clientX, ev.clientY );
} )

`})]});var e,c,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRFlowchart</DocTitle>\r
            <LiveEditor html={<>\r
                        <div style={{
        marginBottom: 8
      }}>\r
                            <h3>오브젝트 추가 API</h3>\r
                            <button className='button' id="btn_add_start">start 노드 추가</button>\r
                            <button className='button' id="btn_add_if">if 노드 추가</button>\r
                            <button className='button' id="btn_add_db">db 노드 추가</button>\r
                            <button className='button' id="btn_add_bridge">bridge 노드 추가</button>\r
                            <button className='button' id="btn_add_comment">comment 노드 추가</button>\r
                            <button className='button' id="btn_add_return">return 노드 추가</button>\r
                            <button className='button' id="btn_add_direct">곧은 연결선 추가</button>\r
                            <button className='button' id="btn_add_elbow">꺾은 연결선 추가</button>\r
                            <h3 className='mt--lg'>오브젝트 제어 API</h3>\r
                            <button className='button' id="btn_clear">clear</button>\r
                            <button className='button' id="btn_remove_selected">선택 개체 제거 (Delete 키)</button>\r
                            <button className='button' id="btn_group">선택된 개체 그룹</button>\r
                            <button className='button' id="btn_release_group">그룹 해제</button>\r
                            <button className='button' id="btn_undo">Undo (Ctrl + Z)</button>\r
                            <button className='button' id="btn_redo">Redo (Ctrl + Y)</button>\r
                            <button className='button' id="btn_size_to_fit">컨텐츠에 맞게 크기 조정</button>\r
                            <h3 className='mt--lg'>배치/정렬 API</h3>\r
                            <button className='button' id="btn_align_left">가로 왼쪽 정렬</button>\r
                            <button className='button' id="btn_align_center">가로 중앙 정렬</button>\r
                            <button className='button' id="btn_align_right">가로 오른쪽 정렬</button>\r
                            <button className='button' id="btn_align_top">세로 위쪽 정렬</button>\r
                            <button className='button' id="btn_align_middle">세로 중앙 정렬</button>\r
                            <button className='button' id="btn_align_bottom">세로 아래쪽 정렬</button>\r
                            <button className='button' id="btn_distribute_horizontal">가로 균등 분배</button>\r
                            <button className='button' id="btn_distribute_vertical">세로 균등 분배</button>\r
                            <button className='button' id="btn_bring_to_front">맨 앞으로</button>\r
                            <button className='button' id="btn_bring_to_back">맨 뒤로</button>\r
                            <h3 className='mt--lg'>Mode Toggle (on/off)</h3>\r
                            <div className='flex gap-x--lg py--sm'>\r
                                <label><input type="checkbox" id="chk_toggle_grid" />눈금선</label>\r
                                <label><input type="checkbox" id="chk_toggle_readonly" />읽기 전용</label>\r
                                <label><input type="checkbox" id="chk_toggle_edit_mode" />마우스 상호작용 비활성화</label>\r
                                <label><input type="checkbox" id="chk_toggle_trace" />디버그 모드</label>\r
                                <label><input type="checkbox" id="chk_toggle_tooltip" />툴팁 숨김</label>\r
                                <label><input type="checkbox" id="chk_toggle_move_screen_on_select" />노드 선택 시 스크롤 중앙 이동</label>\r
                                <label><input type="checkbox" id="chk_toggle_select_node_on_hover" />hover 시 노드 선택</label>\r
                                <label><input type="checkbox" id="chk_toggle_simple_connecting_mode" />연결선 최단 거리 자동 설정</label>\r
                                <label><input type="checkbox" id="chk_toggle_wheel_zoom" />Ctrl + Wheel 줌</label>\r
                                <label><input type="checkbox" id="chk_single_selection" />단일 선택 모드</label>\r
                                <label><input type="checkbox" id="chk_canvas_move" />캔버스 이동 모드</label>\r
                            </div>\r
                        </div>\r
                        <div id="flowchart_div" className='border' style={{
        height: 550
      }}></div>\r
                    </>} code={/* javascript */\`
import { IRContextMenuAdapter } from "./dist/react.js";
import { IRFlowchart, EVENT_TYPE } from "./dist/flowchart.js";

const flowchart = new IRFlowchart( {
    contextElement: document.querySelector("#flowchart_div"),
    width: "100%",
    height: "100%"
})

/* 버튼 패널 */
/* 추가 API */
btn_add_start.onclick = () => flowchart.append( 'append', { type: 'node', render: 'start' } );
btn_add_if.onclick = () => flowchart.append( 'append', { type: 'node', render: 'if' } );
btn_add_db.onclick = () => flowchart.append( 'append', { type: 'node', render: 'db' } );
btn_add_bridge.onclick = () => flowchart.append( 'append', { type: 'node', render: 'bridge' } );
btn_add_comment.onclick = () => flowchart.append( 'append', { type: 'node', render: 'comment' } );
btn_add_return.onclick = () => flowchart.append( 'append', { type: 'node', render: 'return' } );
btn_add_direct.onclick = () => flowchart.append( 'append', { type: 'connection', render: 'direct' } );
btn_add_elbow.onclick = () => flowchart.append( 'append', { type: 'connection', render: 'elbow' } );

/* 제어 API */
btn_clear.onclick = () => flowchart.clear();
btn_remove_selected.onclick = () => flowchart.removeSelected();
btn_group.onclick = () => flowchart.group();
btn_release_group.onclick = () => flowchart.ungroup();
btn_undo.onclick = () => flowchart.undo();
btn_redo.onclick = () => flowchart.redo();

/* 배치/정렬 API */
btn_align_left.onclick = () => flowchart.align( "left" );
btn_align_center.onclick = () => flowchart.align( "center" );
btn_align_right.onclick = () => flowchart.align( "right" );
btn_align_top.onclick = () => flowchart.align( "top" );
btn_align_middle.onclick = () => flowchart.align( "middle" );
btn_align_bottom.onclick = () => flowchart.align( "bottom" );
btn_distribute_horizontal.onclick = () => flowchart.distribute( "h" );
btn_distribute_vertical.onclick = () => flowchart.distribute( "v" );
btn_bring_to_front.onclick = () => flowchart.bringToFront();
btn_bring_to_back.onclick = () => flowchart.bringToBack();
btn_size_to_fit.onclick = () => flowchart.fitSizeOnText();

/* 모드 토글 */
document.querySelectorAll("input[type='checkbox']")
    .forEach(chk => chk.onchange = updateMode)

function updateMode() {
    flowchart.gridMode = chk_toggle_grid.checked;
    flowchart.readonly = chk_toggle_readonly.checked;
    flowchart.editMode = chk_toggle_edit_mode.checked;
    flowchart.traceMode = chk_toggle_trace.checked;
    flowchart.tooltipHidden = chk_toggle_tooltip.checked;
    flowchart.moveScreenOnSelect = chk_toggle_move_screen_on_select.checked;
    flowchart.selectNodeOnHover = chk_toggle_select_node_on_hover.checked;
    flowchart.simpleConnectingMode = chk_toggle_simple_connecting_mode.checked;
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;
    flowchart.singleSelection = chk_single_selection.checked;
    flowchart.canvasMoveMode = chk_canvas_move.checked;
}

/* API 호출 */

const startNode = flowchart.add({
    type: 'node',
    render: 'start',
    text: "시작\\\\n(Tooltip 있음)",
    tooltipText: "시작 노드 입니다.\\\\n다중으로 툴팁을\\\\n테스트 해봅니다.\\\\n길게길게"
})

const ifNode = flowchart.add({
    type: 'node',
    render: 'if',
    "node.x": 150,
    "node.y": 150
})

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': startNode.id,
    'connection.sourcePos': "bottom",
    'connection.destinationObjId': ifNode.id,
    'connection.destinationPos': "left"
})

const returnNode = flowchart.add({
    type: 'node',
    render: 'return',
    "node.x": 300,
    "node.y": 300,
    "node.borderRadius": 8
})

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': ifNode.id,
    'connection.sourcePos': "right",
    'connection.destinationObjId': returnNode.id,
    'connection.destinationPos': "top",
    'connection.arrowType': "circle"
})

/* Flowchart 콜백 이벤트 */
/* 패널 클릭 (x, y) */
flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
    console.log(EVENT_TYPE.CLICK, x, y)
} )

/* 노드 클릭 (node) */
flowchart.$on( EVENT_TYPE.CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.CLICK_NODE, node )
} )

/* 노드 더블 클릭 (node) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_NODE, node )
} )

/* 연결선 클릭 (connection) */
flowchart.$on( EVENT_TYPE.CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.CLICK_CONNECTION, connection )
} )

/* 연결선 더블 클릭 (connection) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, connection )
} )

/* 신규 개체 (obj) */
flowchart.$on( EVENT_TYPE.NEW_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.NEW_OBJECT, obj )
} )

/* 개체 제거 (obj) */
flowchart.$on( EVENT_TYPE.REMOVE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.REMOVE_OBJECT, obj )
} )

/* 개체 선택 (obj) */
flowchart.$on( EVENT_TYPE.SELECT_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.SELECT_OBJECT, obj )
} )

/* 개체 선택 해제 (obj) */
flowchart.$on( EVENT_TYPE.RELEASE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.RELEASE_OBJECT, obj )
} )

/* 노드/연결선 연결 (connection, key) */
flowchart.$on( EVENT_TYPE.CONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.CONNECT_NODE, connection, key, connection.data[key] )
} )

/* 노드/연결선 연결 해제 (obj, key) */
flowchart.$on( EVENT_TYPE.DISCONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.DISCONNECT_NODE, connection, key, connection.data[key] )
} )

/* undo (command) */
flowchart.$on( EVENT_TYPE.UNDO, ( command ) => {
    console.log( EVENT_TYPE.UNDO, command )
} )

/* redo (command) */
flowchart.$on( EVENT_TYPE.REDO, ( command ) => {
    console.log( EVENT_TYPE.REDO, command )
} )

/* svg 모드 변경 (flag, classes) */
flowchart.$on( EVENT_TYPE.CHANGE_CLASS, ( flag, classes ) => {
    console.log( EVENT_TYPE.CHANGE_CLASS, flag, classes )
} )

/* 마우스 UP */
flowchart.$on( EVENT_TYPE.MOUSEUP_SHEET, ( {x, y} ) => {
    console.log( EVENT_TYPE.MOUSEUP_SHEET, x, y )
} )

const contextMenu = new IRContextMenuAdapter({
    items: [
        {
            id: "add_node",
            type: "command-button",
            label: "노드 추가"
        }
    ]
})

/* contextMenu */
flowchart.$on( EVENT_TYPE.CONTEXT_MENU, ( ev ) => {
    console.log( EVENT_TYPE.CONTEXT_MENU, ev )

    contextMenu.showAtPoint( ev.clientX, ev.clientY );
} )

\`} />\r
        </Doc>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const s=["Basic"];export{t as Basic,s as __namedExportsOrder,h as default};
