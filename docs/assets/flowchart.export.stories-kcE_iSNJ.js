import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as r,a as c,L as a}from"./doc-content-TwLFnQmr.js";import"./index-RYns6xqu.js";const l={title:"JS Components/IRFlowchart"},n=()=>t.jsxs(r,{children:[t.jsx(c,{children:"IRFlowchart Exporting"}),t.jsx(a,{html:t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{marginBottom:8},children:[t.jsx("h3",{children:"오브젝트 추가 API"}),t.jsx("button",{className:"button",id:"btn_add_start",children:"start 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_if",children:"if 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_db",children:"db 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_bridge",children:"bridge 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_comment",children:"comment 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_return",children:"return 노드 추가"}),t.jsx("button",{className:"button",id:"btn_add_direct",children:"곧은 연결선 추가"}),t.jsx("button",{className:"button",id:"btn_add_elbow",children:"꺾은 연결선 추가"}),t.jsx("button",{className:"button button--primary",id:"btn_save_png",children:"png 저장"}),t.jsx("button",{className:"button button--secondary",id:"btn_copy",children:"클립보드로 복사"})]}),t.jsx("div",{id:"flowchart_div",className:"border",style:{height:550}})]}),code:`
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
})

`})]});n.__docgenInfo={description:"",methods:[],displayName:"Export"};var e,o,d;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>IRFlowchart Exporting</DocTitle>\r
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
                            <button className='button button--primary' id="btn_save_png">png 저장</button>\r
                            <button className='button button--secondary' id="btn_copy">클립보드로 복사</button>\r
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
    text: "시작\\\\n(Tooltip 있음)",
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
})

\`} />\r
        </Doc>;
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const b=["Export"];export{n as Export,b as __namedExportsOrder,l as default};
