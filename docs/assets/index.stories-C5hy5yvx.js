import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as o,a as t,L as n}from"./version-tag-BPwPDPyQ.js";import"./index-DJO9vBfz.js";const r=()=>e.jsxs(o,{children:[e.jsx(t,{children:"IRFlowchart"}),e.jsx(n,{html:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:8},children:e.jsxs("select",{id:"cbLocale",children:[e.jsx("option",{children:"ko"}),e.jsx("option",{children:"en"}),e.jsx("option",{children:"ja"})]})}),e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("h3",{children:"오브젝트 추가 API"}),e.jsx("button",{className:"button",id:"btn_add_start",children:"start 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_if",children:"if 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_db",children:"db 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_bridge",children:"bridge 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_comment",children:"comment 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_return",children:"return 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_direct",children:"곧은 연결선 추가"}),e.jsx("button",{className:"button",id:"btn_add_elbow",children:"꺾은 연결선 추가"}),e.jsx("h3",{className:"mt--lg",children:"오브젝트 제어 API"}),e.jsx("button",{className:"button",id:"btn_clear",children:"clear"}),e.jsx("button",{className:"button",id:"btn_remove_selected",children:"선택 개체 제거 (Delete 키)"}),e.jsx("button",{className:"button",id:"btn_group",children:"선택된 개체 그룹"}),e.jsx("button",{className:"button",id:"btn_release_group",children:"그룹 해제"}),e.jsx("button",{className:"button",id:"btn_undo",children:"Undo (Ctrl + Z)"}),e.jsx("button",{className:"button",id:"btn_redo",children:"Redo (Ctrl + Y)"}),e.jsx("button",{className:"button",id:"btn_size_to_fit",children:"컨텐츠에 맞게 크기 조정"}),e.jsx("h3",{className:"mt--lg",children:"배치/정렬 API"}),e.jsx("button",{className:"button",id:"btn_align_left",children:"가로 왼쪽 정렬"}),e.jsx("button",{className:"button",id:"btn_align_center",children:"가로 중앙 정렬"}),e.jsx("button",{className:"button",id:"btn_align_right",children:"가로 오른쪽 정렬"}),e.jsx("button",{className:"button",id:"btn_align_top",children:"세로 위쪽 정렬"}),e.jsx("button",{className:"button",id:"btn_align_middle",children:"세로 중앙 정렬"}),e.jsx("button",{className:"button",id:"btn_align_bottom",children:"세로 아래쪽 정렬"}),e.jsx("button",{className:"button",id:"btn_distribute_horizontal",children:"가로 균등 분배"}),e.jsx("button",{className:"button",id:"btn_distribute_vertical",children:"세로 균등 분배"}),e.jsx("button",{className:"button",id:"btn_bring_to_front",children:"맨 앞으로"}),e.jsx("button",{className:"button",id:"btn_bring_to_back",children:"맨 뒤로"}),e.jsx("h3",{className:"mt--lg",children:"Mode Toggle (on/off)"}),e.jsxs("div",{className:"flex gap-x--lg py--sm",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_grid"}),"눈금선"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_readonly"}),"읽기 전용"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_edit_mode"}),"마우스 상호작용 비활성화"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_trace"}),"디버그 모드"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_tooltip"}),"툴팁 숨김"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_move_screen_on_select"}),"노드 선택 시 스크롤 중앙 이동"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_select_node_on_hover"}),"hover 시 노드 선택"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_simple_connecting_mode"}),"연결선 최단 거리 자동 설정"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_toggle_wheel_zoom"}),"Ctrl + Wheel 줌"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_single_selection"}),"단일 선택 모드"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",id:"chk_canvas_move"}),"캔버스 이동 모드"]})]})]}),e.jsx("div",{id:"flowchart_div",className:"border",style:{height:550}})]}),code:`
import { IRContextMenu, i18n } from "./dist/index.js";
import { IRFlowchart, EVENT_TYPE } from "./dist/flowchart.js";

const flowchart = new IRFlowchart( {
    contextElement: document.querySelector("#flowchart_div"),
    width: "100%",
    height: "100%"
})

// traceMode 필요 시 주석 해제
// flowchart.traceMode = true;

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
    .forEach(chk => chk.onchange = updateMode);

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
    tooltipText: "시작 노드 입니다.가로로 긴 툴팁 라인을 만들어 봅시다.\\n다중으로 툴팁을\\n테스트 해봅니다.\\n길게길게\\n\\n\\n\\n\\n공백 긴 툴팁\\n좋아요, 문제가 없군요?",
});

const ifNode = flowchart.add({
    type: 'node',
    render: 'if',
    "node.x": 150,
    "node.y": 150,
    "node.commentTopLeft": "T1",
    "node.commentTopCenter": "T2",
    "node.commentTopRight": "T3",
    "node.commentBottomLeft": "B1",
    "node.commentBottomCenter": "B2",
    "node.commentBottomRight": "B3"
});

flowchart.add({
    type: 'node',
    render: 'comment',
    "node.x": 450,
    "node.y": 120
});

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': startNode.id,
    'connection.sourcePos': "bottom",
    'connection.destinationObjId': ifNode.id,
    'connection.destinationPos': "left"
});

const returnNode = flowchart.add({
    type: 'node',
    render: 'return',
    "node.x": 300,
    "node.y": 300,
    "node.borderRadius": 8
});

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': ifNode.id,
    'connection.sourcePos': "right",
    'connection.destinationObjId': returnNode.id,
    'connection.destinationPos': "top",
    'connection.arrowType': "circle"
});

/* Flowchart 콜백 이벤트 */
/* 패널 클릭 (x, y) */
flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
    console.log(EVENT_TYPE.CLICK, x, y);
} );

/* 노드 클릭 (node) */
flowchart.$on( EVENT_TYPE.CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.CLICK_NODE, node );
} );

/* 노드 더블 클릭 (node) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_NODE, ( node ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_NODE, node );
} );

/* 연결선 클릭 (connection) */
flowchart.$on( EVENT_TYPE.CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.CLICK_CONNECTION, connection );
} );

/* 연결선 더블 클릭 (connection) */
flowchart.$on( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, ( connection ) => {
    console.log( EVENT_TYPE.DOUBLE_CLICK_CONNECTION, connection );
} );

/* 신규 개체 (obj) */
flowchart.$on( EVENT_TYPE.NEW_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.NEW_OBJECT, obj );
} );

/* 개체 제거 (obj) */
flowchart.$on( EVENT_TYPE.REMOVE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.REMOVE_OBJECT, obj );
} );

/* 개체 선택 (obj) */
flowchart.$on( EVENT_TYPE.SELECT_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.SELECT_OBJECT, obj );
} );

/* 개체 선택 해제 (obj) */
flowchart.$on( EVENT_TYPE.RELEASE_OBJECT, ( obj ) => {
    console.log( EVENT_TYPE.RELEASE_OBJECT, obj );
} );

/* 노드/연결선 연결 (connection, key) */
flowchart.$on( EVENT_TYPE.CONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.CONNECT_NODE, connection, key, connection.data[key] );
} );

/* 노드/연결선 연결 해제 (obj, key) */
flowchart.$on( EVENT_TYPE.DISCONNECT_NODE, ( connection, key ) => {
    console.log( EVENT_TYPE.DISCONNECT_NODE, connection, key, connection.data[key] );
} );

/* undo (command) */
flowchart.$on( EVENT_TYPE.UNDO, ( command ) => {
    console.log( EVENT_TYPE.UNDO, command );
} );

/* redo (command) */
flowchart.$on( EVENT_TYPE.REDO, ( command ) => {
    console.log( EVENT_TYPE.REDO, command );
} );

/* svg 모드 변경 (flag, classes) */
flowchart.$on( EVENT_TYPE.CHANGE_CLASS, ( flag, classes ) => {
    console.log( EVENT_TYPE.CHANGE_CLASS, flag, classes );
} );

/* 마우스 UP */
flowchart.$on( EVENT_TYPE.MOUSEUP_SHEET, ( {x, y} ) => {
    console.log( EVENT_TYPE.MOUSEUP_SHEET, x, y );
} );

const contextMenu = new IRContextMenu({
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

cbLocale.onchange = () => i18n.setLocale(cbLocale.value);

window.__IR_FLOWCHART__ = flowchart;
`})]});r.__docgenInfo={description:"",methods:[],displayName:"Basic"};const i=()=>e.jsxs(o,{children:[e.jsx(t,{children:"IRFlowchart Exporting"}),e.jsx(n,{html:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:8},children:e.jsxs("select",{id:"cbLocale",children:[e.jsx("option",{children:"ko"}),e.jsx("option",{children:"en"}),e.jsx("option",{children:"ja"})]})}),e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("h3",{children:"오브젝트 추가 API"}),e.jsx("button",{className:"button",id:"btn_add_start",children:"start 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_if",children:"if 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_db",children:"db 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_bridge",children:"bridge 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_comment",children:"comment 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_return",children:"return 노드 추가"}),e.jsx("button",{className:"button",id:"btn_add_direct",children:"곧은 연결선 추가"}),e.jsx("button",{className:"button",id:"btn_add_elbow",children:"꺾은 연결선 추가"}),e.jsx("button",{className:"button button--primary",id:"btn_save_png",children:"png 저장"}),e.jsx("button",{className:"button button--secondary",id:"btn_copy",children:"클립보드로 복사"})]}),e.jsx("div",{id:"flowchart_div",className:"border",style:{height:550}})]}),code:`
import { i18n } from "./dist/index.js";
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
btn_save_png.onclick = async () => {
    flowchart.saveAsImageFile( "flowchart-image.png", "image/png" );
}

btn_copy.onclick = () => {
    flowchart.copyToClipboard( "image/png" );
}

/* API 호출 */

const startNode = flowchart.add({
    type: 'node',
    render: 'start',
    text: "시작\\n(Tooltip 있음)",
    tooltipText: "시작 노드 입니다."
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
    "node.y": 300
})

flowchart.add({
    type: 'connection',
    render: 'elbow',
    'connection.sourceObjId': ifNode.id,
    'connection.sourcePos': "right",
    'connection.destinationObjId': returnNode.id,
    'connection.destinationPos': "top"
});

cbLocale.onchange = () => i18n.setLocale(cbLocale.value);

`})]});i.__docgenInfo={description:"",methods:[],displayName:"Export"};const l=()=>e.jsxs(o,{children:[e.jsx(t,{children:"IRFlowchart"}),e.jsx(n,{html:e.jsx(e.Fragment,{children:e.jsx("div",{id:"flowchart_div",className:"border",style:{height:800}})}),code:`
import { IRFlowchart, EVENT_TYPE } from "./dist/flowchart.js";


const flowchart = new IRFlowchart( {
    contextElement: document.querySelector("#flowchart_div"),
    width: "100%",
    height: "100%"
} )



const CONNECTION_COMMON_STYLE = {
    "borderWidth": 2,
}

const APP_NODE_STYLE = {
    "node.fill": '#ffcea2',
    "borderColor": "orange",
}

const RULE_NODE_STYLE = {
    "node.fill": '#a0b5ff',
    "borderColor": "blue",
}

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
]

// Component

const createDBConnection = ({theme, sourceId, desId, sourcePos, desPos} ) => {

    const connectionStyle = {
        "db": ["red", "DB 연결(JDBC)"],
        "monitor": ["green", "Monitor 연결"],
        "builder": ["gray", "빌더서버 연결(HTTP)"],
        "rule": ["#ffc312", "Rule Local API 호출"],
    }

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
    } )
}

const createDBNode = ( id, text, x, y ) => {
    return flowchart.add( {
        id,
        type: "node",
        render: "db",
        "node.x": x,
        "node.y": y,
        "node.fill": '#ffcea2',
        "borderColor": "orange",
        text,
        ...CONNECTION_COMMON_STYLE,
    } )
}

const createReturnNode = ( {id, text, x, y, width, height, theme} ) => {

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
    } )
}

const createGroup = ( { id, text, x, y, width, height} ) => {
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
    } )
}

// flowchart Drawing

// flowchart.readonly = true;
flowchart.wheelZoom = true;

const BizAPComponent = ( {appId, ruleId, x, y, width, height} ) => {
    createGroup(
        {
            id: \`biz_ap_\${appId}_\${ruleId}\`,
            text: "Biz Ap",
            x,
            y,
            height,
            width,
        }
    )
    createReturnNode(
        {
            theme: "app",
            id: appId,
            text: "Application",
            x: x + 40,
            y: y + 30,
            width: 150,
            height: 35,
        }
    )
    createReturnNode(
        {
            id: ruleId,
            text: "Rule Engine",
            x: x + 40,
            y: y + 67,
            width: 150,
            height: 35,
        }
    )
    return createDBConnection(
        {
            sourceId: appId,
            desId: ruleId,
            sourcePos: "left",
            desPos: "left",
            theme: "rule",
        }
    )
}

const BuilderServerComponent = ( id, x ) => {
    createGroup(
        {
            id: \`\${id}_builder\`,
            text: "Builder Server",
            x,
            y: 180,
            width: 220,
            height: 100,
        }
    )

    createReturnNode(
        {
            id: \`\${id}_builder_rule\`,
            text: "Rule Builder",
            x: x + 45,
            y: 210,
            width: 150,
            height: 50,
        }
    )
}


BizAPComponent(
    {
        x: 10,
        y: 350,
        width: 200,
        height: 120,
        appId: "biz_app",
        ruleId: "biz_rule",
    }
);

GROUP_LIST.forEach((item, index) => {

    const groupX = ( index * 315 );
    createGroup(
        {
            id: item.id,
            text: item.groupName,
            x: 230 + groupX,
            y: 30,
            width: 300,
            height: 500,
        }
    )

    createGroup(
        {
            id: \`\${item.id}_AP\`,
            text: item.groupItem,
            x: 250 + groupX,
            y: 80,
            width: 260,
            height: 430,
        }
    )

    createGroup(
        {
            id: \`\${item.id}_DB\`,
            text: \`\${item.groupName} DB\`,
            x: 230 + groupX,
            y: 560,
            width: 300,
            height: 130,
        }
    )

    BizAPComponent(
        {
            x: 270 + (groupX),
            y: 330,
            width: 220,
            height: 120,
            appId: \`\${item.id}_app\`,
            ruleId: \`\${item.id}_rule\`,
        }
    );

    createDBNode(\`\${item.id}_DB_rule\`, "Rule DB", 320 + (groupX), 600)

    if (index)
        BuilderServerComponent(item.id, 270 + groupX)
});

createReturnNode({
    id: "rule_developer",
    text: "Rule 개발자",
    x: 50,
    y: 75,
})

createReturnNode({
    id: "app_developer",
    text: "APP 개발자",
    x: 50,
    y: 260,
})

// Monitor 연결

createDBConnection(
    {
        theme: "monitor",
        sourceId: "dev_group_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "right",
        desPos: "left",
    }
)
const con1 = createDBConnection(
    {
        theme: "monitor",
        sourceId: "ver_group_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "left",
        desPos: "left",
    }
)

let points;

points = con1.data[ "connection.points" ]

points[1].x -= 30;
con1.data[ "connection.points" ] = points;


const con2 = createDBConnection(
    {
        theme: "monitor",
        sourceId: "op_group_builder_rule",
        desId: "ver_group_builder_rule",
        sourcePos: "bottom",
        desPos: "bottom",
    }
)

points = con2.data[ "connection.points" ]

points[1].y += 20;
con2.data[ "connection.points" ] = points;

createDBConnection(
    {
        theme: "monitor",
        sourceId: "op_group_rule",
        desId: "op_group_builder_rule",
        sourcePos: "right",
        desPos: "right",
    }
)

// 빌더서버 연결(HTTP)

createDBConnection(
    {
        theme: "builder",
        sourceId: "rule_developer",
        desId: "ver_group_builder_rule",
        sourcePos: "top",
        desPos: "top",
    }
)
createDBConnection(
    {
        theme: "builder",
        sourceId: "rule_developer",
        desId: "op_group_builder_rule",
        sourcePos: "top",
        desPos: "top",
    }
)

// DB 연결(JDBC)

createDBConnection(
    {
        theme: "db",
        sourceId: "biz_rule",
        desId: "dev_group_DB_rule",
        sourcePos: "right",
        desPos: "left",
    }
)
createDBConnection(
    {
        theme: "db",
        sourceId: "ver_group_builder_rule",
        desId: "dev_group_DB_rule",
        sourcePos: "left",
        desPos: "right",
    }
)
createDBConnection(
    {
        theme: "db",
        sourceId: "ver_group_builder_rule",
        desId: "ver_group_DB_rule",
        sourcePos: "right",
        desPos: "right",
    }
)
createDBConnection(
    {
        theme: "db",
        sourceId: "op_group_builder_rule",
        desId: "ver_group_DB_rule",
        sourcePos: "left",
        desPos: "right",
    }
)
const con3 = createDBConnection(
    {
        theme: "db",
        sourceId: "op_group_builder_rule",
        desId: "op_group_DB_rule",
        sourcePos: "right",
        desPos: "right",
    }
)

points = con3.data["connection.points"]

points[1].x += 35;
con3.data["connection.points"] = points;



`})]});l.__docgenInfo={description:"",methods:[],displayName:"RuleArchitecture"};const c=d=>e.jsxs("select",{id:d.id,children:[e.jsx("option",{children:"1"}),e.jsx("option",{children:"1.2"}),e.jsx("option",{children:"0.8"})]}),a=()=>e.jsxs(o,{children:[e.jsx(t,{children:"IRFlowchart"}),e.jsx(n,{html:e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
.fw-container {
    display: grid;
    height: 400px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 28px minmax(0, 1fr);
}
                        `}),e.jsxs("div",{className:"fw-container",children:[e.jsxs("div",{children:[e.jsx(c,{id:"sel1"}),e.jsx("button",{id:"btn1",className:"button",children:"Append"})]}),e.jsxs("div",{children:[e.jsx(c,{id:"sel2"}),e.jsx("button",{id:"btn2",className:"button",children:"Append"})]}),e.jsx("div",{className:"border",id:"f1"}),e.jsx("div",{className:"border",id:"f2"})]})]}),code:`
import { IRFlowchart } from "./dist/flowchart.js";

const flowchartList = [
    new IRFlowchart({
        contextElement: document.getElementById("f1"),
        width: "100%",
        height: "100%"
    }),
    new IRFlowchart({
        contextElement: document.getElementById("f2"),
        width: "100%",
        height: "100%"
    })
];

flowchartList.forEach(fw => {
    fw.traceMode = true;
    fw.add({
        type: "node",
        render: "start",
        "node.x": 10,
        "node.y": 10
    });
});

sel1.onchange = () => flowchartList[0].zoomTo( parseFloat(sel1.value, 10) );
sel2.onchange = () => flowchartList[1].zoomTo( parseFloat(sel2.value, 10) );
btn1.onclick = () => flowchartList[0].append( "append", { type: "node", render: "return" } );
btn2.onclick = () => flowchartList[1].append( "append", { type: "node", render: "return" } );

`})]});a.__docgenInfo={description:"",methods:[],displayName:"Multiple"};const p={title:"JS Components/IRFlowchart"},u=["Basic","Export","RuleArchitecture","Multiple"];export{r as Basic,i as Export,a as Multiple,l as RuleArchitecture,u as __namedExportsOrder,p as default};
