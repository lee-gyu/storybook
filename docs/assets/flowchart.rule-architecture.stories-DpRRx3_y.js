import{j as d,a as e,F as i}from"./jsx-runtime-CjohWU4o.js";import{D as u,a as c,L as s}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const g={title:"JS Components/Flowchart"},n=()=>d(u,{children:[e(c,{children:"IRFlowchart"}),e(s,{html:e(i,{children:e("div",{id:"flowchart_div",className:"border",style:{height:800}})}),code:`
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



`})]});var o,t,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRFlowchart</DocTitle>\r
            <LiveEditor html={<>\r
                        <div id="flowchart_div" className='border' style={{
        height: 800
      }}></div>\r
                    </>} code={/* javascript */\`
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
            id: \\\`biz_ap_\\\${appId}_\\\${ruleId}\\\`,
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
            id: \\\`\\\${id}_builder\\\`,
            text: "Builder Server",
            x,
            y: 180,
            width: 220,
            height: 100,
        }
    )

    createReturnNode(
        {
            id: \\\`\\\${id}_builder_rule\\\`,
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
            id: \\\`\\\${item.id}_AP\\\`,
            text: item.groupItem,
            x: 250 + groupX,
            y: 80,
            width: 260,
            height: 430,
        }
    )

    createGroup(
        {
            id: \\\`\\\${item.id}_DB\\\`,
            text: \\\`\\\${item.groupName} DB\\\`,
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
            appId: \\\`\\\${item.id}_app\\\`,
            ruleId: \\\`\\\${item.id}_rule\\\`,
        }
    );

    createDBNode(\\\`\\\${item.id}_DB_rule\\\`, "Rule DB", 320 + (groupX), 600)

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



\`} />\r
        </Doc>;
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const m=["RuleArchitecture"];export{n as RuleArchitecture,m as __namedExportsOrder,g as default};
