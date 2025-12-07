import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as t,L as r,c as e}from"./version-tag-Buic5uEj.js";import"./iframe-BmvT9HBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dx57Rlms.js";const c=`import { IRContextMenu } from "@innorules/ir-style";\r
import { IRFlowchart, EVENT_TYPE } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
// traceMode 필요 시 주석 해제\r
// flowchart.traceMode = true;\r
\r
/* 버튼 패널 */\r
/* 추가 API */\r
btn_add_start.onclick = () => flowchart.append( "append", { type: "node", render: "start" } );\r
btn_add_if.onclick = () => flowchart.append( "append", { type: "node", render: "if" } );\r
btn_add_db.onclick = () => flowchart.append( "append", { type: "node", render: "db" } );\r
btn_add_bridge.onclick = () => flowchart.append( "append", { type: "node", render: "bridge" } );\r
btn_add_comment.onclick = () => flowchart.append( "append", { type: "node", render: "comment" } );\r
btn_add_return.onclick = () => flowchart.append( "append", { type: "node", render: "return" } );\r
btn_add_direct.onclick = () => flowchart.append( "append", { type: "connection", render: "direct" } );\r
btn_add_elbow.onclick = () => flowchart.append( "append", { type: "connection", render: "elbow" } );\r
\r
/* 제어 API */\r
btn_clear.onclick = () => flowchart.clear();\r
btn_remove_selected.onclick = () => flowchart.removeSelected();\r
btn_group.onclick = () => flowchart.group();\r
btn_release_group.onclick = () => flowchart.ungroup();\r
btn_undo.onclick = () => flowchart.undoAction();\r
btn_redo.onclick = () => flowchart.redoAction();\r
\r
/* 배치/정렬 API */\r
btn_align_left.onclick = () => flowchart.align( "left" );\r
btn_align_center.onclick = () => flowchart.align( "center" );\r
btn_align_right.onclick = () => flowchart.align( "right" );\r
btn_align_top.onclick = () => flowchart.align( "top" );\r
btn_align_middle.onclick = () => flowchart.align( "middle" );\r
btn_align_bottom.onclick = () => flowchart.align( "bottom" );\r
btn_distribute_horizontal.onclick = () => flowchart.distribute( "h" );\r
btn_distribute_vertical.onclick = () => flowchart.distribute( "v" );\r
btn_bring_to_front.onclick = () => flowchart.bringToFront();\r
btn_bring_to_back.onclick = () => flowchart.bringToBack();\r
btn_size_to_fit.onclick = () => flowchart.fitSizeOnText();\r
\r
/* 모드 토글 */\r
document.querySelectorAll( "input[type='checkbox']" )\r
    .forEach( ( chk ) => chk.onchange = updateMode );\r
\r
function updateMode()\r
{\r
    flowchart.gridMode = chk_toggle_grid.checked;\r
    flowchart.readonly = chk_toggle_readonly.checked;\r
    flowchart.editMode = chk_toggle_edit_mode.checked;\r
    flowchart.traceMode = chk_toggle_trace.checked;\r
    flowchart.tooltipHidden = chk_toggle_tooltip.checked;\r
    flowchart.moveScreenOnSelect = chk_toggle_move_screen_on_select.checked;\r
    flowchart.selectNodeOnHover = chk_toggle_select_node_on_hover.checked;\r
    flowchart.simpleConnectingMode = chk_toggle_simple_connecting_mode.checked;\r
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;\r
    flowchart.wheelZoom = chk_toggle_wheel_zoom.checked;\r
    flowchart.singleSelection = chk_single_selection.checked;\r
    flowchart.canvasMoveMode = chk_canvas_move.checked;\r
}\r
\r
/* API 호출 */\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "시작\\n(Tooltip 있음)",\r
    tooltipText: "시작 노드 입니다.가로로 긴 툴팁 라인을 만들어 봅시다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게\\n\\n\\n\\n\\n공백 긴 툴팁\\n좋아요, 문제가 없군요?",\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
} );\r
\r
flowchart.add( {\r
    type: "node",\r
    render: "comment",\r
    "node.x": 450,\r
    "node.y": 120,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
    "node.borderRadius": 8,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
    "connection.arrowType": "circle",\r
} );\r
\r
/* Flowchart 콜백 이벤트 */\r
/* 패널 클릭 (x, y) */\r
flowchart.$on( EVENT_TYPE.CLICK, ( { x, y } ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK, x, y );\r
} );\r
\r
/* 노드 클릭 (node) */\r
flowchart.$on( EVENT_TYPE.CLICK_NODE, ( node ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK_NODE, node );\r
} );\r
\r
/* 노드 더블 클릭 (node) */\r
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_NODE, ( node ) =>\r
{\r
    console.log( EVENT_TYPE.DOUBLE_CLICK_NODE, node );\r
} );\r
\r
/* 연결선 클릭 (connection) */\r
flowchart.$on( EVENT_TYPE.CLICK_CONNECTION, ( connection ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK_CONNECTION, connection );\r
} );\r
\r
/* 연결선 더블 클릭 (connection) */\r
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, ( connection ) =>\r
{\r
    console.log( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, connection );\r
} );\r
\r
/* 신규 개체 (obj) */\r
flowchart.$on( EVENT_TYPE.NEW_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.NEW_OBJECT, obj );\r
} );\r
\r
/* 개체 제거 (obj) */\r
flowchart.$on( EVENT_TYPE.REMOVE_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.REMOVE_OBJECT, obj );\r
} );\r
\r
/* 개체 선택 (obj) */\r
flowchart.$on( EVENT_TYPE.SELECT_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.SELECT_OBJECT, obj );\r
} );\r
\r
/* 개체 선택 해제 (obj) */\r
flowchart.$on( EVENT_TYPE.RELEASE_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.RELEASE_OBJECT, obj );\r
} );\r
\r
/* 노드/연결선 연결 (connection, key) */\r
flowchart.$on( EVENT_TYPE.CONNECT_NODE, ( connection, key ) =>\r
{\r
    console.log( EVENT_TYPE.CONNECT_NODE, connection, key, connection.data[key] );\r
} );\r
\r
/* 노드/연결선 연결 해제 (obj, key) */\r
flowchart.$on( EVENT_TYPE.DISCONNECT_NODE, ( connection, key ) =>\r
{\r
    console.log( EVENT_TYPE.DISCONNECT_NODE, connection, key, connection.data[key] );\r
} );\r
\r
/* undo (command) */\r
flowchart.$on( EVENT_TYPE.UNDO, ( command ) =>\r
{\r
    console.log( EVENT_TYPE.UNDO, command );\r
} );\r
\r
/* redo (command) */\r
flowchart.$on( EVENT_TYPE.REDO, ( command ) =>\r
{\r
    console.log( EVENT_TYPE.REDO, command );\r
} );\r
\r
/* svg 모드 변경 (flag, classes) */\r
flowchart.$on( EVENT_TYPE.CHANGE_CLASS, ( flag, classes ) =>\r
{\r
    console.log( EVENT_TYPE.CHANGE_CLASS, flag, classes );\r
} );\r
\r
/* 마우스 UP */\r
flowchart.$on( EVENT_TYPE.MOUSEUP_SHEET, ( { x, y } ) =>\r
{\r
    console.log( EVENT_TYPE.MOUSEUP_SHEET, x, y );\r
} );\r
\r
const contextMenu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "add_node",\r
            type: "command-button",\r
            label: "노드 추가",\r
        },\r
    ],\r
} );\r
\r
/* contextMenu */\r
flowchart.$on( EVENT_TYPE.CONTEXT_MENU, ( ev ) =>\r
{\r
    console.log( EVENT_TYPE.CONTEXT_MENU, ev );\r
\r
    contextMenu.showAtPoint( ev.clientX, ev.clientY );\r
} );\r
\r
window.__IR_FLOWCHART__ = flowchart;`,d=`<div style="margin-bottom: 8px">\r
    <h3>오브젝트 추가 API</h3>\r
    <button class="button" id="btn_add_start">start 노드 추가</button>\r
    <button class="button" id="btn_add_if">if 노드 추가</button>\r
    <button class="button" id="btn_add_db">db 노드 추가</button>\r
    <button class="button" id="btn_add_bridge">bridge 노드 추가</button>\r
    <button class="button" id="btn_add_comment">comment 노드 추가</button>\r
    <button class="button" id="btn_add_return">return 노드 추가</button>\r
    <button class="button" id="btn_add_direct">곧은 연결선 추가</button>\r
    <button class="button" id="btn_add_elbow">꺾은 연결선 추가</button>\r
    <h3 class="mt--lg">오브젝트 제어 API</h3>\r
    <button class="button" id="btn_clear">clear</button>\r
    <button class="button" id="btn_remove_selected">선택 개체 제거 (Delete 키)</button>\r
    <button class="button" id="btn_group">선택된 개체 그룹</button>\r
    <button class="button" id="btn_release_group">그룹 해제</button>\r
    <button class="button" id="btn_undo">Undo (Ctrl + Z)</button>\r
    <button class="button" id="btn_redo">Redo (Ctrl + Y)</button>\r
    <button class="button" id="btn_size_to_fit">컨텐츠에 맞게 크기 조정</button>\r
    <h3 class="mt--lg">배치/정렬 API</h3>\r
    <button class="button" id="btn_align_left">가로 왼쪽 정렬</button>\r
    <button class="button" id="btn_align_center">가로 중앙 정렬</button>\r
    <button class="button" id="btn_align_right">가로 오른쪽 정렬</button>\r
    <button class="button" id="btn_align_top">세로 위쪽 정렬</button>\r
    <button class="button" id="btn_align_middle">세로 중앙 정렬</button>\r
    <button class="button" id="btn_align_bottom">세로 아래쪽 정렬</button>\r
    <button class="button" id="btn_distribute_horizontal">가로 균등 분배</button>\r
    <button class="button" id="btn_distribute_vertical">세로 균등 분배</button>\r
    <button class="button" id="btn_bring_to_front">맨 앞으로</button>\r
    <button class="button" id="btn_bring_to_back">맨 뒤로</button>\r
    <h3 class="mt--lg">Mode Toggle (on/off)</h3>\r
    <div class="flex gap-x--lg py--sm">\r
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
<div id="flowchart_div" class="border" style="height: 550px"></div>`;function i(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx(r,{htmlRaw:d,code:c})]})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};const l=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
/* 버튼 패널 */\r
/* 추가 API */\r
btn_add_start.onclick = () => flowchart.append( "append", { type: "node", render: "start" } );\r
btn_add_if.onclick = () => flowchart.append( "append", { type: "node", render: "if" } );\r
btn_add_db.onclick = () => flowchart.append( "append", { type: "node", render: "db" } );\r
btn_add_bridge.onclick = () => flowchart.append( "append", { type: "node", render: "bridge" } );\r
btn_add_comment.onclick = () => flowchart.append( "append", { type: "node", render: "comment" } );\r
btn_add_return.onclick = () => flowchart.append( "append", { type: "node", render: "return" } );\r
btn_add_direct.onclick = () => flowchart.append( "append", { type: "connection", render: "direct" } );\r
btn_add_elbow.onclick = () => flowchart.append( "append", { type: "connection", render: "elbow" } );\r
\r
/* API 호출 */\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "시작\\n(Tooltip 있음)",\r
    tooltipText: "시작 노드 입니다.",\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
} );\r
\r
globalThis.flowchart = flowchart;`,a=`btn_save_png.onclick = async () =>\r
{\r
    flowchart.saveAsImageFile( "flowchart-image.png", "image/png" );\r
};\r
\r
btn_copy.onclick = () =>\r
{\r
    flowchart.copyToClipboard( "image/png" );\r
};`,s=`<div style="margin-bottom: 8px">\r
    <button class="button button--primary" id="btn_save_png">png 저장</button>\r
    <button class="button button--secondary" id="btn_copy">클립보드로 복사</button>\r
    <button class="button" id="btn_add_start">start 노드 추가</button>\r
    <button class="button" id="btn_add_if">if 노드 추가</button>\r
    <button class="button" id="btn_add_db">db 노드 추가</button>\r
    <button class="button" id="btn_add_bridge">bridge 노드 추가</button>\r
    <button class="button" id="btn_add_comment">comment 노드 추가</button>\r
    <button class="button" id="btn_add_return">return 노드 추가</button>\r
    <button class="button" id="btn_add_direct">곧은 연결선 추가</button>\r
    <button class="button" id="btn_add_elbow">꺾은 연결선 추가</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`,_=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"],["/classes/_innorules_flowchart.IRFlowchart.html#saveasimagefile","IRFlowchart.saveAsImageFile"],["/classes/_innorules_flowchart.IRFlowchart.html#copytoclipboard","IRFlowchart.copyToClipboard"]];function h(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart Exporting"}),n.jsx(e,{docList:_}),n.jsx(r,{htmlRaw:s,code:l,exampleCode:a})]})}h.__docgenInfo={description:"",methods:[],displayName:"Export"};const b=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchartList = [\r
    new IRFlowchart( {\r
        contextElement: document.getElementById( "f1" ),\r
        width: "100%",\r
        height: "100%",\r
    } ),\r
    new IRFlowchart( {\r
        contextElement: document.getElementById( "f2" ),\r
        width: "100%",\r
        height: "100%",\r
    } ),\r
];\r
\r
flowchartList.forEach( ( fw ) =>\r
{\r
    fw.traceMode = true;\r
    fw.add( {\r
        type: "node",\r
        render: "start",\r
        "node.x": 10,\r
        "node.y": 10,\r
    } );\r
} );\r
\r
globalThis.flowchartList = flowchartList;`,u=`/** 왼쪽 FlowChart */\r
sel1.onchange = () => flowchartList[0].zoomTo( parseFloat( sel1.value, 10 ) );\r
btn1.onclick = () => flowchartList[0].append( "append", { type: "node", render: "return" } );\r
\r
/** 오른쪽 FlowChart */\r
sel2.onchange = () => flowchartList[1].zoomTo( parseFloat( sel2.value, 10 ) );\r
btn2.onclick = () => flowchartList[1].append( "append", { type: "node", render: "db" } );`,p=`<style>\r
    .fw-container {\r
        display: grid;\r
        height: 400px;\r
        grid-template-columns: repeat(2, minmax(0, 1fr));\r
        grid-template-rows: 28px minmax(0, 1fr);\r
    }\r
</style>\r
<div class="fw-container">\r
    <div>\r
        <select id="sel1">\r
            <option>1</option>\r
            <option>1.2</option>\r
            <option>0.8</option>\r
        </select>\r
        <button id="btn1" class="button">Append</button>\r
    </div>\r
    <div>\r
        <select id="sel2">\r
            <option>1</option>\r
            <option>1.2</option>\r
            <option>0.8</option>\r
        </select>\r
        <button id="btn2" class="button">Append</button>\r
    </div>\r
    <div class="border" id="f1"></div>\r
    <div class="border" id="f2"></div>\r
</div>`,m=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"]];function w(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx(e,{docList:m}),n.jsx(r,{htmlRaw:p,code:b,exampleCode:u})]})}w.__docgenInfo={description:"",methods:[],displayName:"Multiple"};const f=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";

const flowchart = new IRFlowchart( {
    contextElement: document.querySelector( "#flowchart_div" ),
    width: "100%",
    height: "100%",
} );

const CONNECTION_COMMON_STYLE = {
    "borderWidth": 2,
};

const APP_NODE_STYLE = {
    "node.fill": "#ffcea2",
    "borderColor": "orange",
};

const RULE_NODE_STYLE = {
    "node.fill": "#a0b5ff",
    "borderColor": "blue",
};

const GROUP_LIST = [
    {
        id: "dev_group",
        groupName: "개발",
        groupItem: "개발 AP(192.168.115.10)",
    },
    {
        id: "ver_group",
        groupName: "검증",
        groupItem: "검증 AP(192.168.115.10)",
    },
    {
        id: "op_group",
        groupName: "운영",
        groupItem: "운영AP1,AP2(192.168.110.11,192.168.110.12)",
    },
];

// Component

const createDBConnection = ( { theme, sourceId, desId, sourcePos, desPos } ) =>
{

    const connectionStyle = {
        "db": ["red", "DB 연결(JDBC)"],
        "monitor": ["green", "Monitor 연결"],
        "builder": ["gray", "빌더서버 연결(HTTP)"],
        "rule": ["#ffc312", "Rule Local API 호출"],
    };

    return flowchart.add( {
        type: "connection",
        render: "elbow",
        "connection.sourceObjId": sourceId,
        "connection.sourcePos": sourcePos,
        "connection.destinationObjId": desId,
        "connection.destinationPos": desPos,
        "borderColor": connectionStyle[theme][0],
        "borderColor.selected": connectionStyle[theme][0],
        "connection.arrowFill": connectionStyle[theme][0],
        "connection.arrowBorderColor": connectionStyle[theme][0],
        "tooltipText": connectionStyle[theme][1],
        "borderDash": "4 2",
        ...CONNECTION_COMMON_STYLE,
    } );
};

const createDBNode = ( id, text, x, y ) =>
{
    return flowchart.add( {
        id,
        type: "node",
        render: "db",
        "node.x": x,
        "node.y": y,
        "node.fill": "#ffcea2",
        "borderColor": "orange",
        text,
        ...CONNECTION_COMMON_STYLE,
    } );
};

const createReturnNode = ( { id, text, x, y, width, height, theme } ) =>
{

    const nodeStyle = theme === "app" ? APP_NODE_STYLE : RULE_NODE_STYLE;

    return flowchart.add( {
        id,
        type: "node",
        render: "return",
        "node.x": x,
        "node.y": y,
        "node.width": width,
        "node.height": height,
        text,
        ...nodeStyle,
        ...CONNECTION_COMMON_STYLE,
    } );
};

const createGroup = ( { id, text, x, y, width, height } ) =>
{
    return flowchart.add( {
        id,
        type: "node",
        render: "return",
        "node.x": x,
        "node.y": y,
        "node.width": width,
        "node.height": height,
        "node.fill": "transparent",
        "node.commentTopLeft": text,
        "node.commentFontSize": "18px",
        "borderColor": "#a3afde",
        ...CONNECTION_COMMON_STYLE,
    } );
};

// flowchart Drawing

// flowchart.readonly = true;
flowchart.wheelZoom = true;

const BizAPComponent = ( { appId, ruleId, x, y, width, height } ) =>
{
    createGroup(
        {
            id: \`biz_ap_\${appId}_\${ruleId}\`,
            text: "Biz Ap",
            x,
            y,
            height,
            width,
        },
    );
    createReturnNode(
        {
            theme: "app",
            id: appId,
            text: "Application",
            x: x + 40,
            y: y + 30,
            width: 150,
            height: 35,
        },
    );
    createReturnNode(
        {
            id: ruleId,
            text: "Rule Engine",
            x: x + 40,
            y: y + 67,
            width: 150,
            height: 35,
        },
    );
    return createDBConnection(
        {
            sourceId: appId,
            desId: ruleId,
            sourcePos: "left",
            desPos: "left",
            theme: "rule",
        },
    );
};

const BuilderServerComponent = ( id, x ) =>
{
    createGroup(
        {
            id: \`\${id}_builder\`,
            text: "Builder Server",
            x,
            y: 180,
            width: 220,
            height: 100,
        },
    );

    createReturnNode(
        {
            id: \`\${id}_builder_rule\`,
            text: "Rule Builder",
            x: x + 45,
            y: 210,
            width: 150,
            height: 50,
        },
    );
};

BizAPComponent(
    {
        x: 10,
        y: 350,
        width: 200,
        height: 120,
        appId: "biz_app",
        ruleId: "biz_rule",
    },
);

GROUP_LIST.forEach( ( item, index ) =>
{

    const groupX = ( index * 315 );
    createGroup(
        {
            id: item.id,
            text: item.groupName,
            x: 230 + groupX,
            y: 30,
            width: 300,
            height: 500,
        },
    );

    createGroup(
        {
            id: \`\${item.id}_AP\`,
            text: item.groupItem,
            x: 250 + groupX,
            y: 80,
            width: 260,
            height: 430,
        },
    );

    createGroup(
        {
            id: \`\${item.id}_DB\`,
            text: \`\${item.groupName} DB\`,
            x: 230 + groupX,
            y: 560,
            width: 300,
            height: 130,
        },
    );

    BizAPComponent(
        {
            x: 270 + ( groupX ),
            y: 330,
            width: 220,
            height: 120,
            appId: \`\${item.id}_app\`,
            ruleId: \`\${item.id}_rule\`,
        },
    );

    createDBNode( \`\${item.id}_DB_rule\`, "Rule DB", 320 + ( groupX ), 600 );

    if( index )
        BuilderServerComponent( item.id, 270 + groupX );
} );

createReturnNode( {
    id: "rule_developer",
    text: "Rule 개발자",
    x: 50,
    y: 75,
} );

createReturnNode( {
    id: "app_developer",
    text: "APP 개발자",
    x: 50,
    y: 260,
} );

// Monitor 연결

createDBConnection(
    {
        theme: "monitor",
        sourceId: "dev_group_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "right",
        desPos: "left",
    },
);
const con1 = createDBConnection(
    {
        theme: "monitor",
        sourceId: "ver_group_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "left",
        desPos: "left",
    },
);

let points;

points = con1.data["connection.points"];

points[1].x -= 30;
con1.data["connection.points"] = points;

const con2 = createDBConnection(
    {
        theme: "monitor",
        sourceId: "op_group_builder_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "bottom",
        desPos: "bottom",
    },
);

points = con2.data["connection.points"];

points[1].y += 20;
con2.data["connection.points"] = points;

createDBConnection(
    {
        theme: "monitor",
        sourceId: "op_group_rule",
        desId: "op_group_builder_rule",
        sourcePos: "right",
        desPos: "right",
    },
);

// 빌더서버 연결(HTTP)

createDBConnection(
    {
        theme: "builder",
        sourceId: "rule_developer",
        desId: "ver_group_builder_rule",
        sourcePos: "top",
        desPos: "top",
    },
);
createDBConnection(
    {
        theme: "builder",
        sourceId: "rule_developer",
        desId: "op_group_builder_rule",
        sourcePos: "top",
        desPos: "top",
    },
);

// DB 연결(JDBC)

createDBConnection(
    {
        theme: "db",
        sourceId: "biz_rule",
        desId: "dev_group_DB_rule",
        sourcePos: "right",
        desPos: "left",
    },
);
createDBConnection(
    {
        theme: "db",
        sourceId: "ver_group_builder_rule",
        desId: "dev_group_DB_rule",
        sourcePos: "left",
        desPos: "right",
    },
);
createDBConnection(
    {
        theme: "db",
        sourceId: "ver_group_builder_rule",
        desId: "ver_group_DB_rule",
        sourcePos: "right",
        desPos: "right",
    },
);
createDBConnection(
    {
        theme: "db",
        sourceId: "op_group_builder_rule",
        desId: "ver_group_DB_rule",
        sourcePos: "left",
        desPos: "right",
    },
);
const con3 = createDBConnection(
    {
        theme: "db",
        sourceId: "op_group_builder_rule",
        desId: "op_group_DB_rule",
        sourcePos: "right",
        desPos: "right",
    },
);

points = con3.data["connection.points"];

points[1].x += 35;
con3.data["connection.points"] = points;`,E='<div id="flowchart_div" class="border" style="height: 800px"></div>',g=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"]];function T(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx(e,{docList:g}),n.jsx(r,{htmlRaw:E,code:f})]})}T.__docgenInfo={description:"",methods:[],displayName:"RuleArchitecture"};const N=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "시작\\n(Tooltip 있음)",\r
    tooltipText: "시작 노드 입니다.가로로 긴 툴팁 라인을 만들어 봅시다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게\\n\\n\\n\\n\\n공백 긴 툴팁\\n좋아요, 문제가 없군요?",\r
    "node.x": 10,\r
    "node.y": 10,\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.width": 120,\r
    "node.height": 80,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
\r
} );\r
\r
flowchart.add( {\r
    type: "node",\r
    render: "comment",\r
    "node.x": 650,\r
    "node.y": 120,\r
    "node.width": 150,\r
    "node.height": 150,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    text: "반환",\r
    "node.x": 400,\r
    "node.y": 300,\r
    "node.width": 200,\r
    "node.height": 35,\r
    "node.borderRadius": 8,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
    "connection.arrowType": "circle",\r
} );\r
\r
window.__IR_FLOWCHART__ = flowchart;\r
globalThis.flowchart = flowchart;`,y=`// 가로 정렬\r
btn_align_left.onclick = () => flowchart.align( "left" );\r
btn_align_center.onclick = () => flowchart.align( "center" );\r
btn_align_right.onclick = () => flowchart.align( "right" );\r
\r
// 세로 정렬\r
btn_align_top.onclick = () => flowchart.align( "top" );\r
btn_align_middle.onclick = () => flowchart.align( "middle" );\r
btn_align_bottom.onclick = () => flowchart.align( "bottom" );\r
\r
// 균등 분배\r
btn_distribute_horizontal.onclick = () => flowchart.distribute( "h" );\r
btn_distribute_vertical.onclick = () => flowchart.distribute( "v" );`,x=`<div style="margin-bottom: 8px">\r
    <button class="button" id="btn_align_left">가로 왼쪽 정렬</button>\r
    <button class="button" id="btn_align_center">가로 중앙 정렬</button>\r
    <button class="button" id="btn_align_right">가로 오른쪽 정렬</button>\r
    <button class="button" id="btn_align_top">세로 위쪽 정렬</button>\r
    <button class="button" id="btn_align_middle">세로 중앙 정렬</button>\r
    <button class="button" id="btn_align_bottom">세로 아래쪽 정렬</button>\r
    <button class="button" id="btn_distribute_horizontal">가로 균등 분배</button>\r
    <button class="button" id="btn_distribute_vertical">세로 균등 분배</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`,C=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"],["/classes/_innorules_flowchart.IRFlowchart.html#align","IRFlowchart.align"],["/classes/_innorules_flowchart.IRFlowchart.html#distribute","IRFlowchart.distribute"]];function I(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx("p",{children:"오브젝트 배치 및 정렬하는 API"}),n.jsx(e,{docList:C}),n.jsx(r,{htmlRaw:x,code:N,exampleCode:y})]})}I.__docgenInfo={description:"",methods:[],displayName:"Basic"};const P=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "Application Start",\r
    "node.width": 200,\r
    "node.x": 10,\r
    "node.y": 10,\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
} );\r
\r
const dbNode = flowchart.add( {\r
    type: "node",\r
    render: "db",\r
    text: "API DB",\r
    "node.x": 400,\r
    "node.y": 150,\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
    "node.borderRadius": 8,\r
} );\r
\r
function addConnection( srcId, srcPoc, destId, desPos, arrowType = "triangle" )\r
{\r
    flowchart.add( {\r
        type: "connection",\r
        render: "elbow",\r
        "connection.sourceObjId": srcId,\r
        "connection.sourcePos": srcPoc,\r
        "connection.destinationObjId": destId,\r
        "connection.destinationPos": desPos,\r
        "connection.arrowType": arrowType,\r
    } );\r
}\r
\r
addConnection( startNode.id, "bottom", ifNode.id, "left" );\r
addConnection( ifNode.id, "right", dbNode.id, "top", "circle" );\r
addConnection( dbNode.id, "right", returnNode.id, "top" );\r
\r
window.__IR_FLOWCHART__ = flowchart;\r
globalThis.flowchart = flowchart;`,O=`// 노드 추가\r
btn_add_start.onclick = () => flowchart.append( "append", { type: "node", render: "start" } );\r
btn_add_if.onclick = () => flowchart.append( "append", { type: "node", render: "if" } );\r
btn_add_db.onclick = () => flowchart.append( "append", { type: "node", render: "db" } );\r
btn_add_bridge.onclick = () => flowchart.append( "append", { type: "node", render: "bridge" } );\r
btn_add_comment.onclick = () => flowchart.append( "append", { type: "node", render: "comment" } );\r
btn_add_return.onclick = () => flowchart.append( "append", { type: "node", render: "return" } );\r
\r
// 연결선 추가\r
btn_add_direct.onclick = () => flowchart.append( "append", { type: "connection", render: "direct" } );\r
btn_add_elbow.onclick = () => flowchart.append( "append", { type: "connection", render: "elbow" } );\r
\r
// 초기화\r
btn_clear.onclick = () => flowchart.clear();\r
\r
// 선택된 개체 제거\r
btn_remove_selected.onclick = () => flowchart.removeSelected();\r
\r
// 컨텐츠에 맞게 크기 조정\r
btn_size_to_fit.onclick = () => flowchart.fitSizeOnText();\r
`,R=`<div class="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
    <button class="button button--primary" id="btn_clear">Clear</button>\r
    <button class="button" id="btn_add_start">start 노드 추가</button>\r
    <button class="button" id="btn_add_if">if 노드 추가</button>\r
    <button class="button" id="btn_add_db">db 노드 추가</button>\r
    <button class="button" id="btn_add_bridge">bridge 노드 추가</button>\r
    <button class="button" id="btn_add_comment">comment 노드 추가</button>\r
    <button class="button" id="btn_add_return">return 노드 추가</button>\r
    <button class="button" id="btn_add_direct">곧은 연결선 추가</button>\r
    <button class="button" id="btn_add_elbow">꺾은 연결선 추가</button>\r
    <button class="button" id="btn_remove_selected">선택 개체 제거 (Delete 키)</button>\r
    <button class="button" id="btn_size_to_fit">컨텐츠에 맞게 크기 조정</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`,v=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"]];function k(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx(e,{docList:v}),n.jsx(r,{htmlRaw:R,code:P,exampleCode:O})]})}k.__docgenInfo={description:"",methods:[],displayName:"Basic"};const B=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "Application Start",\r
    "node.width": 200,\r
    "node.x": 10,\r
    "node.y": 10,\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
} );\r
\r
flowchart.add( {\r
    type: "node",\r
    render: "comment",\r
    "node.x": 450,\r
    "node.y": 120,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
    "node.borderRadius": 8,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
    "connection.arrowType": "circle",\r
} );\r
\r
window.__IR_FLOWCHART__ = flowchart;\r
globalThis.flowchart = flowchart;`,j=`// 그룹화\r
btn_group.onclick = () => flowchart.group();\r
// 그룹 해제\r
btn_release_group.onclick = () => flowchart.ungroup();`,L=`<div style="margin-bottom: 8px">\r
    <button class="button" id="btn_group">선택된 개체 그룹</button>\r
    <button class="button" id="btn_release_group">그룹 해제</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`,Y=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"],["/classes/_innorules_flowchart.IRFlowchart.html#group","IRFlowchart.group"],["/classes/_innorules_flowchart.IRFlowchart.html#ungroup","IRFlowchart.ungroup"]];function D(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart"}),n.jsx(e,{docList:Y}),n.jsx(r,{htmlRaw:L,code:B,exampleCode:j})]})}D.__docgenInfo={description:"",methods:[],displayName:"Basic"};const $=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "시작\\n(Tooltip 있음)",\r
    tooltipText: "시작 노드 입니다.가로로 긴 툴팁 라인을 만들어 봅시다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게\\n\\n\\n\\n\\n공백 긴 툴팁\\n좋아요, 문제가 없군요?",\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
} );\r
\r
flowchart.add( {\r
    type: "node",\r
    render: "comment",\r
    "node.x": 450,\r
    "node.y": 120,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
    "node.borderRadius": 8,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
    "connection.arrowType": "circle",\r
} );\r
\r
window.__IR_FLOWCHART__ = flowchart;\r
globalThis.flowchart = flowchart;`,F=`import { IRContextMenu } from "@innorules/ir-style";\r
import { EVENT_TYPE } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const contextMenu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "add_node",\r
            type: "command-button",\r
            label: "노드 추가",\r
        },\r
        {\r
            id: "remove_node",\r
            type: "command-button",\r
            label: "노드 제거",\r
        },\r
    ],\r
} );\r
\r
flowchart.$on( EVENT_TYPE.CONTEXT_MENU, ( ev ) =>\r
{\r
    console.log( EVENT_TYPE.CONTEXT_MENU, ev );\r
\r
    contextMenu.showAtPoint( ev.clientX, ev.clientY );\r
    contextMenu.onCommandButtonClick = ( args ) =>\r
    {\r
        if( args.item.id === "add_node" )\r
        {\r
            flowchart.add( {\r
                type: "node",\r
                render: "if",\r
                text: "노드 추가",\r
                "node.x": ev.clientX,\r
                "node.y": ev.clientY,\r
            } );\r
        }\r
        else if( args.item.id === "remove_node" ) flowchart.removeSelected();\r
    };\r
} );\r
\r
window.__IR_FLOWCHART__ = flowchart;`,V='<div id="flowchart_div" class="border" style="height: 550px"></div>',S=[["/classes/_innorules_solid-ui.IRContextMenu.html","IRContextMenu"],["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"],["/variables/_innorules_flowchart.EVENT_TYPE.html","EVENT_TYPE"]];function A(){return n.jsxs(o,{children:[n.jsx(t,{children:"IRFlowchart ContextMenu"}),n.jsx(e,{docList:S}),n.jsx(r,{htmlRaw:V,code:$,exampleCode:F})]})}A.__docgenInfo={description:"",methods:[],displayName:"Basic"};const M=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const startNode = flowchart.add( {\r
    type: "node",\r
    render: "start",\r
    text: "시작\\n(Tooltip 있음)",\r
    tooltipText: "시작 노드 입니다.가로로 긴 툴팁 라인을 만들어 봅시다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게\\n\\n\\n\\n\\n공백 긴 툴팁\\n좋아요, 문제가 없군요?",\r
} );\r
\r
const ifNode = flowchart.add( {\r
    type: "node",\r
    render: "if",\r
    "node.x": 150,\r
    "node.y": 150,\r
    "node.commentTopLeft": "T1",\r
    "node.commentTopCenter": "T2",\r
    "node.commentTopRight": "T3",\r
    "node.commentBottomLeft": "B1",\r
    "node.commentBottomCenter": "B2",\r
    "node.commentBottomRight": "B3",\r
} );\r
\r
flowchart.add( {\r
    type: "node",\r
    render: "comment",\r
    "node.x": 450,\r
    "node.y": 120,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": startNode.id,\r
    "connection.sourcePos": "bottom",\r
    "connection.destinationObjId": ifNode.id,\r
    "connection.destinationPos": "left",\r
} );\r
\r
const returnNode = flowchart.add( {\r
    type: "node",\r
    render: "return",\r
    "node.x": 300,\r
    "node.y": 300,\r
    "node.borderRadius": 8,\r
} );\r
\r
flowchart.add( {\r
    type: "connection",\r
    render: "elbow",\r
    "connection.sourceObjId": ifNode.id,\r
    "connection.sourcePos": "right",\r
    "connection.destinationObjId": returnNode.id,\r
    "connection.destinationPos": "top",\r
    "connection.arrowType": "circle",\r
} );\r
\r
btn_add_if.onclick = () => flowchart.append( "append", { type: "node", render: "if" } );\r
btn_remove_selected.onclick = () => flowchart.removeSelected();\r
\r
window.__IR_FLOWCHART__ = flowchart;\r
globalThis.flowchart = flowchart;`,U=`import { EVENT_TYPE } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
/* Flowchart 콜백 이벤트 */\r
/* 패널 클릭 (x, y) */\r
flowchart.$on( EVENT_TYPE.CLICK, ( { x, y } ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK, x, y );\r
} );\r
\r
/* 노드 클릭 (node) */\r
flowchart.$on( EVENT_TYPE.CLICK_NODE, ( node ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK_NODE, node );\r
} );\r
\r
/* 노드 더블 클릭 (node) */\r
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_NODE, ( node ) =>\r
{\r
    console.log( EVENT_TYPE.DOUBLE_CLICK_NODE, node );\r
} );\r
\r
/* 연결선 클릭 (connection) */\r
flowchart.$on( EVENT_TYPE.CLICK_CONNECTION, ( connection ) =>\r
{\r
    console.log( EVENT_TYPE.CLICK_CONNECTION, connection );\r
} );\r
\r
/* 연결선 더블 클릭 (connection) */\r
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, ( connection ) =>\r
{\r
    console.log( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, connection );\r
} );\r
\r
/* 신규 개체 (obj) */\r
flowchart.$on( EVENT_TYPE.NEW_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.NEW_OBJECT, obj );\r
} );\r
\r
/* 개체 제거 (obj) */\r
flowchart.$on( EVENT_TYPE.REMOVE_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.REMOVE_OBJECT, obj );\r
} );\r
\r
/* 개체 선택 (obj) */\r
flowchart.$on( EVENT_TYPE.SELECT_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.SELECT_OBJECT, obj );\r
} );\r
\r
/* 개체 선택 해제 (obj) */\r
flowchart.$on( EVENT_TYPE.RELEASE_OBJECT, ( obj ) =>\r
{\r
    console.log( EVENT_TYPE.RELEASE_OBJECT, obj );\r
} );\r
\r
/* 노드/연결선 연결 (connection, key) */\r
flowchart.$on( EVENT_TYPE.CONNECT_NODE, ( connection, key ) =>\r
{\r
    console.log( EVENT_TYPE.CONNECT_NODE, connection, key, connection.data[key] );\r
} );\r
\r
/* 노드/연결선 연결 해제 (obj, key) */\r
flowchart.$on( EVENT_TYPE.DISCONNECT_NODE, ( connection, key ) =>\r
{\r
    console.log( EVENT_TYPE.DISCONNECT_NODE, connection, key, connection.data[key] );\r
} );\r
\r
/* undo (command) */\r
flowchart.$on( EVENT_TYPE.UNDO, ( command ) =>\r
{\r
    console.log( EVENT_TYPE.UNDO, command );\r
} );\r
\r
/* redo (command) */\r
flowchart.$on( EVENT_TYPE.REDO, ( command ) =>\r
{\r
    console.log( EVENT_TYPE.REDO, command );\r
} );\r
\r
/* svg 모드 변경 (flag, classes) */\r
flowchart.$on( EVENT_TYPE.CHANGE_CLASS, ( flag, classes ) =>\r
{\r
    console.log( EVENT_TYPE.CHANGE_CLASS, flag, classes );\r
} );\r
\r
/* 마우스 UP */\r
flowchart.$on( EVENT_TYPE.MOUSEUP_SHEET, ( { x, y } ) =>\r
{\r
    console.log( EVENT_TYPE.MOUSEUP_SHEET, x, y );\r
} );`,z=`<div class="mb--md">\r
    <button class="button" id="btn_add_if">if 노드 추가</button>\r
    <button class="button" id="btn_remove_selected">선택 개체 제거 (Delete 키)</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`,K=[["/classes/_innorules_flowchart.IRFlowchart.html","IRFlowchart"],["/variables/_innorules_flowchart.EVENT_TYPE.html","EVENT_TYPE"]];function H(){return n.jsxs(o,{children:[n.jsx(t,{children:"Event"}),n.jsx("p",{children:"IRFlowchart의 이벤트 시스템을 사용하여 다양한 사용자 상호작용을 처리할 수 있습니다."}),n.jsx(e,{docList:K}),n.jsx(r,{htmlRaw:z,code:M,exampleCode:U})]})}H.__docgenInfo={description:"",methods:[],displayName:"Basic"};const Z={title:"JS Components/IRFlowchart"},Q=["APIDemo","Export","Multiple","RuleArchitecture","ObjectAlign","Basic","Group","ContextMenu","Event"];export{i as APIDemo,k as Basic,A as ContextMenu,H as Event,h as Export,D as Group,w as Multiple,I as ObjectAlign,T as RuleArchitecture,Q as __namedExportsOrder,Z as default};
