import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as i,L as n}from"./version-tag-u3GxDBUd.js";import"./iframe-9F64GLpK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F4J0AwFl.js";const e=`import { InnoHtmlEditor } from "@innorules/ir-style/lib/esm/html-editor.js";

const htmlEditor = new InnoHtmlEditor( {
    contextElement: document.getElementById( "editor" ),
    initContents: "<p>Hello World!</p>",
} );

console.log( htmlEditor.getContentsHtml() );`,s='<div id="editor" style="height: 500px; width: 800px"></div>',r=`@import "./dist/css/html-editor.css";
`;function d(){return t.jsxs(o,{children:[t.jsx(i,{children:"IRGrid"}),t.jsx("p",{children:"API 사용 샘플"}),t.jsx(n,{fixedHeight:700,css:r,htmlRaw:s,code:e})]})}d.__docgenInfo={description:"",methods:[],displayName:"HtmlEditorBasic"};const h={title:"JS Components/InnoHtmlEditor"},E=["HtmlEditorBasic"];export{d as HtmlEditorBasic,E as __namedExportsOrder,h as default};
