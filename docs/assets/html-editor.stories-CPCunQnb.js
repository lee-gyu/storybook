import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,s as r,t as i}from"./context-C6uFeUW4.js";import{t as a}from"./jsx-runtime-6sF1Ejqi.js";var o,s=e((()=>{o=`import {
    InnoHtmlEditor,
    InsertNodeCommand,
} from "@innorules/ir-style/lib/esm/html-editor.js";

const htmlEditor = new InnoHtmlEditor( {
    contextElement: document.getElementById( "editor" ),
    initContents: "<p>Hello World!</p>",
} );

htmlEditor.focus();

htmlEditor.runCommand( new InsertNodeCommand(
    htmlEditor.createNode( "image", {
        attr: {
            src: "https://picsum.photos/200/300",
        },
    } ),
) );

console.log( htmlEditor.getContentsHtml() );`})),c,l=e((()=>{c=`<div id="editor" style="height: 500px; width: 800px"></div>`})),u,d=e((()=>{u=`@import "./dist/css/html-editor.css";
`}));function f(){return(0,p.jsxs)(n,{children:[(0,p.jsx)(t,{children:`InnoHtmlEditor`}),(0,p.jsx)(`p`,{children:`기본 초기화 예제`}),(0,p.jsx)(r,{fixedHeight:700,css:u,htmlRaw:c,code:o})]})}var p,m=e((()=>{s(),l(),d(),i(),p=a(),f.__docgenInfo={description:``,methods:[],displayName:`HtmlEditorBasic`}})),h,g;e((()=>{m(),h={title:`JS Components/InnoHtmlEditor`},g=[`HtmlEditorBasic`]}))();export{f as HtmlEditorBasic,g as __namedExportsOrder,h as default};