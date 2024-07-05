import{j as e,a as n,F as a}from"./jsx-runtime-CjohWU4o.js";import{D as c,a as i,L as u}from"./doc-content-BYQUkk8D.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const m={title:"JS Components/Flowchart"},t=()=>e(c,{children:[n(i,{children:"IRFlowchart Exporting"}),n(u,{html:e(a,{children:[e("div",{style:{marginBottom:8},children:[n("h3",{children:"오브젝트 추가 API"}),n("button",{className:"button",id:"btn_add_start",children:"start 노드 추가"}),n("button",{className:"button",id:"btn_add_if",children:"if 노드 추가"}),n("button",{className:"button",id:"btn_add_db",children:"db 노드 추가"}),n("button",{className:"button",id:"btn_add_bridge",children:"bridge 노드 추가"}),n("button",{className:"button",id:"btn_add_comment",children:"comment 노드 추가"}),n("button",{className:"button",id:"btn_add_return",children:"return 노드 추가"}),n("button",{className:"button",id:"btn_add_direct",children:"곧은 연결선 추가"}),n("button",{className:"button",id:"btn_add_elbow",children:"꺾은 연결선 추가"}),n("button",{className:"button button--primary",id:"btn_save_png",children:"png 저장"}),n("button",{className:"button button--secondary",id:"btn_copy",children:"클립보드로 복사"})]}),n("div",{id:"flowchart_div",className:"border",style:{height:550}})]}),code:`
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

`})]});var o,d,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const h=["Export"];export{t as Export,h as __namedExportsOrder,m as default};
