import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as n,L as i}from"./version-tag-ClN_pg-S.js";import"./iframe-DngeDzFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ch-xRImY.js";const e=`import {
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

console.log( htmlEditor.getContentsHtml() );`,s='<div id="editor" style="height: 500px; width: 800px"></div>',r=`@import "./dist/css/html-editor.css";
`;function d(){return t.jsxs(o,{children:[t.jsx(n,{children:"IRGrid"}),t.jsx("p",{children:"API 사용 샘플"}),t.jsx(i,{fixedHeight:700,css:r,htmlRaw:s,code:e})]})}d.__docgenInfo={description:"",methods:[],displayName:"HtmlEditorBasic"};const h={title:"JS Components/InnoHtmlEditor"},E=["HtmlEditorBasic"];export{d as HtmlEditorBasic,E as __namedExportsOrder,h as default};
