import{a,j as d}from"./jsx-runtime-d057ca55.js";import{c as p}from"./index-631dc947.js";const l=({visible:e,style:i,sm:o,transparent:s,children:c})=>a("div",{className:p({dialog:!0,"dialog--transparent":s,"dialog--sm":o,"is-visible":e}),children:a("div",{className:"dialog__wrapper",style:i,children:c})});try{l.displayName="Dialog",l.__docgenInfo={description:"",displayName:"Dialog",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ top?: DialogPosition; right?: DialogPosition; bottom?: DialogPosition | undefined; left?: DialogPosition | undefined; width?: DialogSize | undefined; height?: DialogSize | undefined; } | undefined"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}}}}}catch{}const t=({children:e})=>a("div",{className:"dialog__content",children:e});try{t.displayName="DialogContent",t.__docgenInfo={description:"",displayName:"DialogContent",props:{}}}catch{}const r=({left:e,right:i})=>d("div",{className:"dialog__footer",children:[e&&a("div",{className:"dialog__footer-left",children:e}),i&&a("div",{className:"dialog__footer-right",children:i})]});try{r.displayName="DialogFooter",r.__docgenInfo={description:"",displayName:"DialogFooter",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}}}}}catch{}const n=({title:e,refresh:i,handleHideDialog:o})=>d("div",{className:"dialog__header",children:[a("strong",{className:"dialog__header-title",children:e}),i&&a("button",{type:"button",className:"icon-button",children:a("i",{className:"ir-icon ir-icon--refresh"})}),a("div",{className:"dialog__header-actions",children:a("button",{type:"button",className:"dialog__button-close",onClick:o,children:a("i",{className:"ir-icon ir-icon--close"})})})]});try{n.displayName="DialogHeader",n.__docgenInfo={description:"",displayName:"DialogHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},refresh:{defaultValue:null,description:"",name:"refresh",required:!1,type:{name:"boolean"}},handleHideDialog:{defaultValue:null,description:"",name:"handleHideDialog",required:!1,type:{name:"(() => void)"}}}}}catch{}export{l as D,n as a,t as b,r as c};
//# sourceMappingURL=dialog.header-34bf95e1.js.map
