import{j as t,a as s}from"./jsx-runtime-CjohWU4o.js";import{D as n,a as r,L as l}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const x={title:"Utilities/Position"},c=`
#live_editor_wrapper {
    position: relative;
    height: 200px;
    overflow-y: scroll;
}

#live_editor_wrapper .content {
    height: 600px;
}

#live_editor_wrapper span {
    display: inline-block;
    padding: 10px;
    margin: 5px 0;
    font-size: 12px;
    background: var(--background-color);
}
`,e=()=>t(n,{children:[s(r,{children:"Position"}),s(l,{css:c,html:t("div",{className:"content",children:[s("span",{className:"static",children:"static"}),s("span",{className:"relative",children:"relative"}),s("span",{className:"absolute",style:{top:"50%",left:"50%"},children:"absolute"}),s("span",{className:"fixed",style:{bottom:5,right:5},children:"fixed"}),s("span",{className:"sticky",style:{top:5},children:"sticky"})]})})]});var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Doc>\r
        <DocTitle>Position</DocTitle>\r
        <LiveEditor css={css} html={<div className="content">\r
                    <span className="static">static</span>\r
                    <span className="relative">relative</span>\r
                    <span className="absolute" style={{
      top: "50%",
      left: "50%"
    }}>absolute</span>\r
                    <span className="fixed" style={{
      bottom: 5,
      right: 5
    }}>fixed</span>\r
                    <span className="sticky" style={{
      top: 5
    }}>sticky</span>\r
                </div>} />\r
    </Doc>`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["Position"];export{e as Position,y as __namedExportsOrder,x as default};
