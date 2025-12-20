import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as r,c as t,L as a}from"./version-tag-C5kiIE4p.js";import"./iframe-Dxn4oHhn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7URE3Da.js";const o=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";\r
\r
const pageContainer = IRPageContainer( {\r
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,\r
    featureFlag: {\r
        pagination: true,\r
        paginationWheel: true,\r
    },\r
} );\r
\r
document.querySelector( "#container" ).appendChild( pageContainer.element );\r
\r
pageContainer.createTabListButton();\r
\r
( async function initPages()\r
{\r
    await pageContainer.addPage( "main", "js", {\r
        hiddenTabList: true,\r
        content: createJSPage(),\r
        header: {\r
            icon: "ir-icon--home-fill",\r
            hiddenCloseButton: true,\r
            tooltip: "메인",\r
        },\r
    } );\r
\r
    for( let i = 1; i <= 3; i++ )\r
    {\r
        const key = "page" + i;\r
        const tag = "[개발]";\r
        const text = \`page\${i}\`;\r
        const version = "2025-12-20";\r
\r
        await pageContainer.addPage( key, "iframe", {\r
            content: {\r
                src: "page-container-iframe.html",\r
            },\r
            header: {\r
                rightLabel: \`\${tag} \${version}\`,\r
                text: \`\${text}\`,\r
                icon: "ir-icon--rule-type-table",\r
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,\r
                tooltip: \`\${text}\\n\${tag} \${version}\`,\r
            },\r
        } );\r
    }\r
\r
    pageContainer.selectPage( "page1" );\r
} )();\r
\r
function createJSPage()\r
{\r
    const element = document.createElement( "div" );\r
    element.style.padding = "20px";\r
    element.textContent = "JS Content Page.";\r
\r
    return { jsComponent: { element } };\r
}\r
\r
globalThis.pageContainer = pageContainer;`,i=`/** addRightItem */\r
pageContainer.addRightItem( "user-info", {\r
    icon: "ir-icon--user-fill",\r
    tooltip: "사용자 정보",\r
} );\r
\r
let pageKey = 1;\r
\r
btn_add.onclick = async () =>\r
{\r
    const key = \`page-\${pageKey}\`;\r
    const text = \`Page \${pageKey}\`;\r
\r
    await pageContainer.addPage( key, "iframe", {\r
        content: {\r
            src: "page-container-iframe.html",\r
        },\r
        header: {\r
            icon: "ir-icon--rule",\r
            text: \`추가: \${text}\`,\r
            tooltip: text,\r
            accentColor: \`var(--ir-pc-accent-color1)\`,\r
        },\r
    } );\r
\r
    pageKey++;\r
};\r
\r
btn_remove.onclick = async () =>\r
{\r
    const selectedKey = pageContainer.selectedPageKey;\r
\r
    if( selectedKey && selectedKey !== "main" )\r
    {\r
        await pageContainer.removePage( selectedKey );\r
    }\r
};\r
\r
btn_clear.onclick = async () =>\r
{\r
    await pageContainer.removeIframePages();\r
};\r
\r
btn_select_page.onclick = () =>\r
{\r
    pageContainer.selectPage( txt_value.value );\r
};\r
\r
btn_force_load_all.onclick = () =>\r
{\r
    /**\r
     * 현재 컨테이너 내 모든 iframe 페이지 강제 로드 호출\r
     * page-container@^1.4.1\r
     */\r
    pageContainer.forceLoadAll();\r
};\r
\r
btn_get_iframe_page_list.onclick = () =>\r
{\r
    console.log( "Iframe page list: ", pageContainer.getIFramePageList() );\r
};`,c=`<div class="flex flex--column gap--sm mb--sm">\r
    <div>\r
        <button id="btn_add" class="button">Add Page</button>\r
        <button id="btn_remove" class="button">Remove Page</button>\r
        <button id="btn_clear" class="button">clear</button>\r
        <button id="btn_force_load_all" class="button">ForceLoadAll</button>\r
        <button id="btn_get_iframe_page_list" class="button">Get Iframe pages</button>\r
    </div>\r
    <div class="flex align-items--center gap-x--sm">\r
        <input id="txt_value" class="input__native" value="main" style="width: 100px" />\r
        <button id="btn_select_page" class="button">Select Page</button>\r
    </div>\r
</div>\r
<div id="container"></div>`,l=[["/modules/_innorules_page-container.html","IRPageContainer"]];function s(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRPageContainer"}),n.jsx(t,{docList:l}),n.jsx(a,{htmlRaw:c,fixedHeight:500,code:o,exampleCode:i})]})}s.__docgenInfo={description:"",methods:[],displayName:"API"};const g=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";\r
\r
const pageContainer = IRPageContainer( {\r
    className: "my-page-container",\r
    /** 최대 페이지 수 */\r
    maxCount: 25,\r
    /** 선택된 페이지 삭제 시 선택할 페이지 키 */\r
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,\r
    featureFlag: {\r
        /** 페이지네이션 여부 */\r
        pagination: true,\r
        /** 페이지네이션 휠 여부 */\r
        paginationWheel: true,\r
    },\r
} );\r
\r
/** 페이지 컨테이너를 DOM에 추가 */\r
document.querySelector( "#container" ).appendChild( pageContainer.element );\r
\r
/** 탭 리스트 버튼 생성 */\r
pageContainer.createTabListButton();\r
\r
/** 초기 페이지 추가 예제 */\r
( async function initPages()\r
{\r
    // js 페이지\r
    await pageContainer.addPage( "main", "js", {\r
        hiddenTabList: true,\r
        content: createJSPage(),\r
        header: {\r
            icon: "ir-icon--home-fill",\r
            hiddenCloseButton: true,\r
            tooltip: "메인",\r
        },\r
    } );\r
\r
    // iframe 페이지\r
    await pageContainer.addPage( "test-page", "iframe", {\r
        content: {\r
            src: "page-container-iframe.html",\r
        },\r
        header: {\r
            text: "pageContainer Test Page",\r
            icon: "ir-icon--rule-type-db",\r
            accentColor: "var(--ir-pc-accent-color1)",\r
            tooltip: "Test Page",\r
        },\r
    } );\r
\r
    for( let i = 1; i <= 5; i++ )\r
    {\r
        const key = "page" + i;\r
        const tag = "[개발]";\r
        const text = \`Page\${i}\`;\r
        const version = "2025-12-20";\r
\r
        await pageContainer.addPage( key, "iframe", {\r
            content: {\r
                src: "page-container-iframe.html",\r
            },\r
            header: {\r
                rightLabel: \`\${tag} \${version}\`,\r
                text: \`\${text}\`,\r
                icon: "ir-icon--rule-type-table",\r
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,\r
                tooltip: \`\${text}\\n\${tag} \${version}\`,\r
            },\r
        } );\r
    }\r
\r
    pageContainer.selectPage( "page1" );\r
} )();\r
\r
function createJSPage()\r
{\r
    const element = document.createElement( "div" );\r
    element.style.padding = "20px";\r
    element.textContent = "JS Content Page.";\r
\r
    return { jsComponent: { element } };\r
}`,p='<div id="container"></div>',d=[["/modules/_innorules_page-container.html","IRPageContainer"]];function m(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRPageContainer"}),n.jsx(t,{docList:d}),n.jsx(a,{htmlRaw:p,fixedHeight:500,exampleCode:g})]})}m.__docgenInfo={description:"",methods:[],displayName:"Basic"};const u=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";\r
import { IRContextMenu } from "@innorules/ir-style";\r
\r
const pageContainer = IRPageContainer( {\r
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,\r
    featureFlag: {\r
        pagination: true,\r
        paginationWheel: true,\r
    },\r
} );\r
\r
document.querySelector( "#container" ).appendChild( pageContainer.element );\r
\r
pageContainer.createTabListButton();\r
\r
( async function initPages()\r
{\r
    await pageContainer.addPage( "main", "js", {\r
        hiddenTabList: true,\r
        content: createJSPage(),\r
        header: {\r
            icon: "ir-icon--home-fill",\r
            hiddenCloseButton: true,\r
            tooltip: "메인",\r
        },\r
    } );\r
\r
    for( let i = 1; i <= 5; i++ )\r
    {\r
        const key = "page" + i;\r
        const tag = "[개발]";\r
        const text = \`page\${i}\`;\r
        const version = "2025-12-20";\r
\r
        await pageContainer.addPage( key, "iframe", {\r
            content: {\r
                src: "page-container-iframe.html",\r
            },\r
            header: {\r
                rightLabel: \`\${tag} \${version}\`,\r
                text: \`\${text}\`,\r
                icon: "ir-icon--rule-type-table",\r
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,\r
                tooltip: \`\${text}\\n\${tag} \${version}\`,\r
            },\r
        } );\r
    }\r
\r
    pageContainer.selectPage( "page1" );\r
} )();\r
\r
function createJSPage()\r
{\r
    const element = document.createElement( "div" );\r
    element.style.padding = "20px";\r
    element.textContent = "JS Content Page.";\r
\r
    return { jsComponent: { element } };\r
}\r
\r
const contextMenu = new IRContextMenu( {\r
    items: [\r
        {\r
            id: "close",\r
            type: "command-button",\r
            label: "탭 닫기",\r
        },\r
        {\r
            id: "closeAll",\r
            type: "command-button",\r
            label: "iframe 탭 모두 닫기",\r
        },\r
        {\r
            id: "checkPagesProps",\r
            type: "command-button",\r
            label: "page prop 확인",\r
        },\r
    ],\r
} );\r
\r
globalThis.contextMenu = contextMenu;\r
globalThis.pageContainer = pageContainer;`,C=`pageContainer.addRightItem( "user-info", {\r
    icon: "ir-icon--user-fill",\r
    tooltip: "사용자 정보",\r
} );\r
pageContainer.onChangePage = ( page ) => console.log( "Page changed:", page );\r
pageContainer.onClickPage = ( page ) => console.log( "Page clicked:", page );\r
pageContainer.onClosePage = ( page ) => console.log( "Page closed:", page );\r
pageContainer.onItemClick = ( item ) => console.log( "Item clicked:", item );\r
\r
// ContextMenu\r
pageContainer.onContextMenu = ( ev, pageItem ) =>\r
{\r
    console.log( "onContextMenu", ev, pageItem );\r
\r
    pageContainer.selectPage( pageItem.key );\r
\r
    contextMenu.onCommandButtonClick = ( ev ) =>\r
    {\r
        switch ( ev.item.id )\r
        {\r
            case "close":\r
                pageContainer.removePage( pageItem.key );\r
                break;\r
            case "closeAll":\r
                pageContainer.removeIframePages();\r
                break;\r
            case "checkPagesProps":\r
                printPagesProps();\r
                break;\r
            default:\r
                console.warn( \`Unknown menu item\` );\r
        }\r
    };\r
\r
    contextMenu.showAtPoint( ev.clientX, ev.clientY );\r
};\r
\r
function printPagesProps()\r
{\r
    for( const page of pageContainer.getIFramePageList() )\r
    {\r
        console.log( page.key, page.content );\r
    }\r
}`,P='<div id="container"></div>',f=[["/modules/_innorules_page-container.html","IRPageContainer"]];function b(){return n.jsxs(e,{children:[n.jsx(r,{children:"IRPageContainer"}),n.jsx(t,{docList:f}),n.jsx(a,{htmlRaw:P,fixedHeight:500,code:u,exampleCode:C})]})}b.__docgenInfo={description:"",methods:[],displayName:"Event"};const I={title:"JS Components/IRPageContainer"},k=["API","Basic","Event"];export{s as API,m as Basic,b as Event,k as __namedExportsOrder,I as default};
