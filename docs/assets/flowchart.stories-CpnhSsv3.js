import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as r,a as e,L as o}from"./version-tag-CkTpihZX.js";import"./iframe-jo4tttFm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDcoFm-e.js";const t=`\r
import { IRContextMenu, i18n } from "@innorules/ir-style";\r
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
btn_undo.onclick = () => flowchart.undo();\r
btn_redo.onclick = () => flowchart.redo();\r
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
cbLocale.onchange = () => i18n.setLocale( cbLocale.value );\r
\r
window.__IR_FLOWCHART__ = flowchart;`,c=`<div style="margin-bottom: 8px">\r
    <select id="cbLocale">\r
        <option>ko</option>\r
        <option>en</option>\r
        <option>ja</option>\r
    </select>\r
</div>\r
<div style="margin-bottom: 8px">\r
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
<div id="flowchart_div" class="border" style="height: 550px"></div>`;function d(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRFlowchart"}),n.jsx(o,{htmlRaw:c,code:t})]})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const i=`import { i18n } from "@innorules/ir-style";\r
import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
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
btn_save_png.onclick = async () =>\r
{\r
    flowchart.saveAsImageFile( "flowchart-image.png", "image/png" );\r
};\r
\r
btn_copy.onclick = () =>\r
{\r
    flowchart.copyToClipboard( "image/png" );\r
};\r
\r
/* API 호출 */\r
\r
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
cbLocale.onchange = () => i18n.setLocale( cbLocale.value );`,l=`<div style="margin-bottom: 8px">\r
    <select id="cbLocale">\r
        <option>ko</option>\r
        <option>en</option>\r
        <option>ja</option>\r
    </select>\r
</div>\r
<div style="margin-bottom: 8px">\r
    <h3>오브젝트 추가 API</h3>\r
    <button class="button" id="btn_add_start">start 노드 추가</button>\r
    <button class="button" id="btn_add_if">if 노드 추가</button>\r
    <button class="button" id="btn_add_db">db 노드 추가</button>\r
    <button class="button" id="btn_add_bridge">bridge 노드 추가</button>\r
    <button class="button" id="btn_add_comment">comment 노드 추가</button>\r
    <button class="button" id="btn_add_return">return 노드 추가</button>\r
    <button class="button" id="btn_add_direct">곧은 연결선 추가</button>\r
    <button class="button" id="btn_add_elbow">꺾은 연결선 추가</button>\r
    <button class="button button--primary" id="btn_save_png">png 저장</button>\r
    <button class="button button--secondary" id="btn_copy">클립보드로 복사</button>\r
</div>\r
<div id="flowchart_div" class="border" style="height: 550px"></div>`;function a(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRFlowchart Exporting"}),n.jsx(o,{htmlRaw:l,code:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"Export"};const s=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
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
sel1.onchange = () => flowchartList[0].zoomTo( parseFloat( sel1.value, 10 ) );\r
sel2.onchange = () => flowchartList[1].zoomTo( parseFloat( sel2.value, 10 ) );\r
btn1.onclick = () => flowchartList[0].append( "append", { type: "node", render: "return" } );\r
btn2.onclick = () => flowchartList[1].append( "append", { type: "node", render: "return" } );`,_=`<style>\r
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
</div>`;function u(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRFlowchart"}),n.jsx(o,{htmlRaw:_,code:s})]})}u.__docgenInfo={description:"",methods:[],displayName:"Multiple"};const p=`import { IRFlowchart } from "@innorules/ir-style/lib/esm/flowchart.js";\r
\r
const flowchart = new IRFlowchart( {\r
    contextElement: document.querySelector( "#flowchart_div" ),\r
    width: "100%",\r
    height: "100%",\r
} );\r
\r
const CONNECTION_COMMON_STYLE = {\r
    "borderWidth": 2,\r
};\r
\r
const APP_NODE_STYLE = {\r
    "node.fill": "#ffcea2",\r
    "borderColor": "orange",\r
};\r
\r
const RULE_NODE_STYLE = {\r
    "node.fill": "#a0b5ff",\r
    "borderColor": "blue",\r
};\r
\r
const GROUP_LIST = [\r
    {\r
        id: "dev_group",\r
        groupName: "개발",\r
        groupItem: "개발 AP(192.168.115.10)",\r
    },\r
    {\r
        id: "ver_group",\r
        groupName: "검증",\r
        groupItem: "검증 AP(192.168.115.10)",\r
    },\r
    {\r
        id: "op_group",\r
        groupName: "운영",\r
        groupItem: "운영AP1,AP2(192.168.110.11,192.168.110.12)",\r
    },\r
];\r
\r
// Component\r
\r
const createDBConnection = ( { theme, sourceId, desId, sourcePos, desPos } ) =>\r
{\r
\r
    const connectionStyle = {\r
        "db": ["red", "DB 연결(JDBC)"],\r
        "monitor": ["green", "Monitor 연결"],\r
        "builder": ["gray", "빌더서버 연결(HTTP)"],\r
        "rule": ["#ffc312", "Rule Local API 호출"],\r
    };\r
\r
    return flowchart.add( {\r
        type: "connection",\r
        render: "elbow",\r
        "connection.sourceObjId": sourceId,\r
        "connection.sourcePos": sourcePos,\r
        "connection.destinationObjId": desId,\r
        "connection.destinationPos": desPos,\r
        "borderColor": connectionStyle[theme][0],\r
        "borderColor.selected": connectionStyle[theme][0],\r
        "connection.arrowFill": connectionStyle[theme][0],\r
        "connection.arrowBorderColor": connectionStyle[theme][0],\r
        "tooltipText": connectionStyle[theme][1],\r
        "borderDash": "4 2",\r
        ...CONNECTION_COMMON_STYLE,\r
    } );\r
};\r
\r
const createDBNode = ( id, text, x, y ) =>\r
{\r
    return flowchart.add( {\r
        id,\r
        type: "node",\r
        render: "db",\r
        "node.x": x,\r
        "node.y": y,\r
        "node.fill": "#ffcea2",\r
        "borderColor": "orange",\r
        text,\r
        ...CONNECTION_COMMON_STYLE,\r
    } );\r
};\r
\r
const createReturnNode = ( { id, text, x, y, width, height, theme } ) =>\r
{\r
\r
    const nodeStyle = theme === "app" ? APP_NODE_STYLE : RULE_NODE_STYLE;\r
\r
    return flowchart.add( {\r
        id,\r
        type: "node",\r
        render: "return",\r
        "node.x": x,\r
        "node.y": y,\r
        "node.width": width,\r
        "node.height": height,\r
        text,\r
        ...nodeStyle,\r
        ...CONNECTION_COMMON_STYLE,\r
    } );\r
};\r
\r
const createGroup = ( { id, text, x, y, width, height } ) =>\r
{\r
    return flowchart.add( {\r
        id,\r
        type: "node",\r
        render: "return",\r
        "node.x": x,\r
        "node.y": y,\r
        "node.width": width,\r
        "node.height": height,\r
        "node.fill": "transparent",\r
        "node.commentTopLeft": text,\r
        "node.commentFontSize": "18px",\r
        "borderColor": "#a3afde",\r
        ...CONNECTION_COMMON_STYLE,\r
    } );\r
};\r
\r
// flowchart Drawing\r
\r
// flowchart.readonly = true;\r
flowchart.wheelZoom = true;\r
\r
const BizAPComponent = ( { appId, ruleId, x, y, width, height } ) =>\r
{\r
    createGroup(\r
        {\r
            id: \`biz_ap_\${appId}_\${ruleId}\`,\r
            text: "Biz Ap",\r
            x,\r
            y,\r
            height,\r
            width,\r
        },\r
    );\r
    createReturnNode(\r
        {\r
            theme: "app",\r
            id: appId,\r
            text: "Application",\r
            x: x + 40,\r
            y: y + 30,\r
            width: 150,\r
            height: 35,\r
        },\r
    );\r
    createReturnNode(\r
        {\r
            id: ruleId,\r
            text: "Rule Engine",\r
            x: x + 40,\r
            y: y + 67,\r
            width: 150,\r
            height: 35,\r
        },\r
    );\r
    return createDBConnection(\r
        {\r
            sourceId: appId,\r
            desId: ruleId,\r
            sourcePos: "left",\r
            desPos: "left",\r
            theme: "rule",\r
        },\r
    );\r
};\r
\r
const BuilderServerComponent = ( id, x ) =>\r
{\r
    createGroup(\r
        {\r
            id: \`\${id}_builder\`,\r
            text: "Builder Server",\r
            x,\r
            y: 180,\r
            width: 220,\r
            height: 100,\r
        },\r
    );\r
\r
    createReturnNode(\r
        {\r
            id: \`\${id}_builder_rule\`,\r
            text: "Rule Builder",\r
            x: x + 45,\r
            y: 210,\r
            width: 150,\r
            height: 50,\r
        },\r
    );\r
};\r
\r
BizAPComponent(\r
    {\r
        x: 10,\r
        y: 350,\r
        width: 200,\r
        height: 120,\r
        appId: "biz_app",\r
        ruleId: "biz_rule",\r
    },\r
);\r
\r
GROUP_LIST.forEach( ( item, index ) =>\r
{\r
\r
    const groupX = ( index * 315 );\r
    createGroup(\r
        {\r
            id: item.id,\r
            text: item.groupName,\r
            x: 230 + groupX,\r
            y: 30,\r
            width: 300,\r
            height: 500,\r
        },\r
    );\r
\r
    createGroup(\r
        {\r
            id: \`\${item.id}_AP\`,\r
            text: item.groupItem,\r
            x: 250 + groupX,\r
            y: 80,\r
            width: 260,\r
            height: 430,\r
        },\r
    );\r
\r
    createGroup(\r
        {\r
            id: \`\${item.id}_DB\`,\r
            text: \`\${item.groupName} DB\`,\r
            x: 230 + groupX,\r
            y: 560,\r
            width: 300,\r
            height: 130,\r
        },\r
    );\r
\r
    BizAPComponent(\r
        {\r
            x: 270 + ( groupX ),\r
            y: 330,\r
            width: 220,\r
            height: 120,\r
            appId: \`\${item.id}_app\`,\r
            ruleId: \`\${item.id}_rule\`,\r
        },\r
    );\r
\r
    createDBNode( \`\${item.id}_DB_rule\`, "Rule DB", 320 + ( groupX ), 600 );\r
\r
    if( index )\r
        BuilderServerComponent( item.id, 270 + groupX );\r
} );\r
\r
createReturnNode( {\r
    id: "rule_developer",\r
    text: "Rule 개발자",\r
    x: 50,\r
    y: 75,\r
} );\r
\r
createReturnNode( {\r
    id: "app_developer",\r
    text: "APP 개발자",\r
    x: 50,\r
    y: 260,\r
} );\r
\r
// Monitor 연결\r
\r
createDBConnection(\r
    {\r
        theme: "monitor",\r
        sourceId: "dev_group_rule",\r
        desId: "ver_group_builder_rule",\r
        sourcePos: "right",\r
        desPos: "left",\r
    },\r
);\r
const con1 = createDBConnection(\r
    {\r
        theme: "monitor",\r
        sourceId: "ver_group_rule",\r
        desId: "ver_group_builder_rule",\r
        sourcePos: "left",\r
        desPos: "left",\r
    },\r
);\r
\r
let points;\r
\r
points = con1.data[ "connection.points" ];\r
\r
points[1].x -= 30;\r
con1.data[ "connection.points" ] = points;\r
\r
const con2 = createDBConnection(\r
    {\r
        theme: "monitor",\r
        sourceId: "op_group_builder_rule",\r
        desId: "ver_group_builder_rule",\r
        sourcePos: "bottom",\r
        desPos: "bottom",\r
    },\r
);\r
\r
points = con2.data[ "connection.points" ];\r
\r
points[1].y += 20;\r
con2.data[ "connection.points" ] = points;\r
\r
createDBConnection(\r
    {\r
        theme: "monitor",\r
        sourceId: "op_group_rule",\r
        desId: "op_group_builder_rule",\r
        sourcePos: "right",\r
        desPos: "right",\r
    },\r
);\r
\r
// 빌더서버 연결(HTTP)\r
\r
createDBConnection(\r
    {\r
        theme: "builder",\r
        sourceId: "rule_developer",\r
        desId: "ver_group_builder_rule",\r
        sourcePos: "top",\r
        desPos: "top",\r
    },\r
);\r
createDBConnection(\r
    {\r
        theme: "builder",\r
        sourceId: "rule_developer",\r
        desId: "op_group_builder_rule",\r
        sourcePos: "top",\r
        desPos: "top",\r
    },\r
);\r
\r
// DB 연결(JDBC)\r
\r
createDBConnection(\r
    {\r
        theme: "db",\r
        sourceId: "biz_rule",\r
        desId: "dev_group_DB_rule",\r
        sourcePos: "right",\r
        desPos: "left",\r
    },\r
);\r
createDBConnection(\r
    {\r
        theme: "db",\r
        sourceId: "ver_group_builder_rule",\r
        desId: "dev_group_DB_rule",\r
        sourcePos: "left",\r
        desPos: "right",\r
    },\r
);\r
createDBConnection(\r
    {\r
        theme: "db",\r
        sourceId: "ver_group_builder_rule",\r
        desId: "ver_group_DB_rule",\r
        sourcePos: "right",\r
        desPos: "right",\r
    },\r
);\r
createDBConnection(\r
    {\r
        theme: "db",\r
        sourceId: "op_group_builder_rule",\r
        desId: "ver_group_DB_rule",\r
        sourcePos: "left",\r
        desPos: "right",\r
    },\r
);\r
const con3 = createDBConnection(\r
    {\r
        theme: "db",\r
        sourceId: "op_group_builder_rule",\r
        desId: "op_group_DB_rule",\r
        sourcePos: "right",\r
        desPos: "right",\r
    },\r
);\r
\r
points = con3.data["connection.points"];\r
\r
points[1].x += 35;\r
con3.data["connection.points"] = points;`,b='<div id="flowchart_div" class="border" style="height: 800px"></div>';function h(){return n.jsxs(r,{children:[n.jsx(e,{children:"IRFlowchart"}),n.jsx(o,{htmlRaw:b,code:p})]})}h.__docgenInfo={description:"",methods:[],displayName:"RuleArchitecture"};const y={title:"JS Components/IRFlowchart"},T=["Basic","Export","Multiple","RuleArchitecture"];export{d as Basic,a as Export,u as Multiple,h as RuleArchitecture,T as __namedExportsOrder,y as default};
