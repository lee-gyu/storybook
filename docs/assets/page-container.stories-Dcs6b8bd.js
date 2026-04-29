import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,r,s as i,t as a}from"./context-C6uFeUW4.js";import{t as o}from"./jsx-runtime-6sF1Ejqi.js";var s,c=e((()=>{s=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";

const pageContainer = IRPageContainer( {
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,
    featureFlag: {
        pagination: true,
        paginationWheel: true,
    },
} );

document.querySelector( "#container" ).appendChild( pageContainer.element );

pageContainer.createTabListButton();

( async function initPages()
{
    await pageContainer.addPage( "main", "js", {
        hiddenTabList: true,
        content: createJSPage(),
        header: {
            icon: "ir-icon--home-fill",
            hiddenCloseButton: true,
            tooltip: "메인",
        },
    } );

    for( let i = 1; i <= 3; i++ )
    {
        const key = "page" + i;
        const tag = "[개발]";
        const text = \`page\${i}\`;
        const version = "2025-12-20";

        await pageContainer.addPage( key, "iframe", {
            content: {
                src: "page-container-iframe.html",
            },
            header: {
                rightLabel: \`\${tag} \${version}\`,
                text: \`\${text}\`,
                icon: "ir-icon--rule-type-table",
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,
                tooltip: \`\${text}\\n\${tag} \${version}\`,
            },
        } );
    }

    pageContainer.selectPage( "page1" );
} )();

function createJSPage()
{
    const element = document.createElement( "div" );
    element.style.padding = "20px";
    element.textContent = "JS Content Page.";

    return { jsComponent: { element } };
}

globalThis.pageContainer = pageContainer;`})),l,u=e((()=>{l=`/** addRightItem */
pageContainer.addRightItem( "user-info", {
    icon: "ir-icon--user-fill",
    tooltip: "사용자 정보",
} );

let pageKey = 1;

btn_add.onclick = async () =>
{
    const key = \`page-\${pageKey}\`;
    const text = \`Page \${pageKey}\`;

    await pageContainer.addPage( key, "iframe", {
        content: {
            src: "page-container-iframe.html",
        },
        header: {
            icon: "ir-icon--rule",
            text: \`추가: \${text}\`,
            tooltip: text,
            accentColor: \`var(--ir-pc-accent-color1)\`,
        },
    } );

    pageKey++;
};

btn_remove.onclick = async () =>
{
    const selectedKey = pageContainer.selectedPageKey;

    if( selectedKey && selectedKey !== "main" )
    {
        await pageContainer.removePage( selectedKey );
    }
};

btn_clear.onclick = async () =>
{
    await pageContainer.removeIframePages();
};

btn_select_page.onclick = () =>
{
    pageContainer.selectPage( txt_value.value );
};

btn_force_load_all.onclick = () =>
{
    /**
     * 현재 컨테이너 내 모든 iframe 페이지 강제 로드 호출
     * page-container@^1.4.1
     */
    pageContainer.forceLoadAll();
};

btn_get_iframe_page_list.onclick = () =>
{
    console.log( "Iframe page list: ", pageContainer.getIFramePageList() );
};`})),d,f=e((()=>{d=`<div class="flex flex--column gap--sm mb--sm">
    <div>
        <button id="btn_add" class="button">Add Page</button>
        <button id="btn_remove" class="button">Remove Page</button>
        <button id="btn_clear" class="button">clear</button>
        <button id="btn_force_load_all" class="button">ForceLoadAll</button>
        <button id="btn_get_iframe_page_list" class="button">Get Iframe pages</button>
    </div>
    <div class="flex align-items--center gap-x--sm">
        <input id="txt_value" class="input__native" value="main" style="width: 100px" />
        <button id="btn_select_page" class="button">Select Page</button>
    </div>
</div>
<div id="container"></div>`}));function p(){return(0,m.jsxs)(n,{children:[(0,m.jsx)(t,{children:`IRPageContainer`}),(0,m.jsx)(r,{docList:h}),(0,m.jsx)(i,{htmlRaw:d,fixedHeight:500,code:s,exampleCode:l})]})}var m,h,g=e((()=>{c(),u(),f(),a(),m=o(),h=[[`/modules/_innorules_page-container.html`,`IRPageContainer`]],p.__docgenInfo={description:``,methods:[],displayName:`API`}})),_,v=e((()=>{_=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";

const pageContainer = IRPageContainer( {
    className: "my-page-container",
    /** 최대 페이지 수 */
    maxCount: 25,
    /** 선택된 페이지 삭제 시 선택할 페이지 키 */
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,
    featureFlag: {
        /** 페이지네이션 여부 */
        pagination: true,
        /** 페이지네이션 휠 여부 */
        paginationWheel: true,
    },
} );

/** 페이지 컨테이너를 DOM에 추가 */
document.querySelector( "#container" ).appendChild( pageContainer.element );

/** 탭 리스트 버튼 생성 */
pageContainer.createTabListButton();

/** 초기 페이지 추가 예제 */
( async function initPages()
{
    // js 페이지
    await pageContainer.addPage( "main", "js", {
        hiddenTabList: true,
        content: createJSPage(),
        header: {
            icon: "ir-icon--home-fill",
            hiddenCloseButton: true,
            tooltip: "메인",
        },
    } );

    // iframe 페이지
    await pageContainer.addPage( "test-page", "iframe", {
        content: {
            src: "page-container-iframe.html",
        },
        header: {
            text: "pageContainer Test Page",
            icon: "ir-icon--rule-type-db",
            accentColor: "var(--ir-pc-accent-color1)",
            tooltip: "Test Page",
        },
    } );

    for( let i = 1; i <= 5; i++ )
    {
        const key = "page" + i;
        const tag = "[개발]";
        const text = \`Page\${i}\`;
        const version = "2025-12-20";

        await pageContainer.addPage( key, "iframe", {
            content: {
                src: "page-container-iframe.html",
            },
            header: {
                rightLabel: \`\${tag} \${version}\`,
                text: \`\${text}\`,
                icon: "ir-icon--rule-type-table",
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,
                tooltip: \`\${text}\\n\${tag} \${version}\`,
            },
        } );
    }

    pageContainer.selectPage( "page1" );
} )();

function createJSPage()
{
    const element = document.createElement( "div" );
    element.style.padding = "20px";
    element.textContent = "JS Content Page.";

    return { jsComponent: { element } };
}`})),y,b=e((()=>{y=`<div id="container"></div>`}));function x(){return(0,S.jsxs)(n,{children:[(0,S.jsx)(t,{children:`IRPageContainer`}),(0,S.jsx)(r,{docList:C}),(0,S.jsx)(i,{htmlRaw:y,fixedHeight:500,exampleCode:_})]})}var S,C,w=e((()=>{v(),b(),a(),S=o(),C=[[`/modules/_innorules_page-container.html`,`IRPageContainer`]],x.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),T,E=e((()=>{T=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";
import { IRContextMenu } from "@innorules/ir-style";

const pageContainer = IRPageContainer( {
    fallbackPageKey: FUNCTION_PAGE_KEY.fallbackToPrev,
    featureFlag: {
        pagination: true,
        paginationWheel: true,
    },
} );

document.querySelector( "#container" ).appendChild( pageContainer.element );

pageContainer.createTabListButton();

( async function initPages()
{
    await pageContainer.addPage( "main", "js", {
        hiddenTabList: true,
        content: createJSPage(),
        header: {
            icon: "ir-icon--home-fill",
            hiddenCloseButton: true,
            tooltip: "메인",
        },
    } );

    for( let i = 1; i <= 5; i++ )
    {
        const key = "page" + i;
        const tag = "[개발]";
        const text = \`page\${i}\`;
        const version = "2025-12-20";

        await pageContainer.addPage( key, "iframe", {
            content: {
                src: "page-container-iframe.html",
            },
            header: {
                rightLabel: \`\${tag} \${version}\`,
                text: \`\${text}\`,
                icon: "ir-icon--rule-type-table",
                accentColor: \`var(--ir-pc-accent-color\${i % 3})\`,
                tooltip: \`\${text}\\n\${tag} \${version}\`,
            },
        } );
    }

    pageContainer.selectPage( "page1" );
} )();

function createJSPage()
{
    const element = document.createElement( "div" );
    element.style.padding = "20px";
    element.textContent = "JS Content Page.";

    return { jsComponent: { element } };
}

const contextMenu = new IRContextMenu( {
    items: [
        {
            id: "close",
            type: "command-button",
            label: "탭 닫기",
        },
        {
            id: "closeAll",
            type: "command-button",
            label: "iframe 탭 모두 닫기",
        },
        {
            id: "checkPagesProps",
            type: "command-button",
            label: "page prop 확인",
        },
    ],
} );

globalThis.contextMenu = contextMenu;
globalThis.pageContainer = pageContainer;`})),D,O=e((()=>{D=`pageContainer.addRightItem( "user-info", {
    icon: "ir-icon--user-fill",
    tooltip: "사용자 정보",
} );
pageContainer.onChangePage = ( page ) => console.log( "Page changed:", page );
pageContainer.onClickPage = ( page ) => console.log( "Page clicked:", page );
pageContainer.onClosePage = ( page ) => console.log( "Page closed:", page );
pageContainer.onItemClick = ( item ) => console.log( "Item clicked:", item );

// ContextMenu
pageContainer.onContextMenu = ( ev, pageItem ) =>
{
    console.log( "onContextMenu", ev, pageItem );

    pageContainer.selectPage( pageItem.key );

    contextMenu.onCommandButtonClick = ( ev ) =>
    {
        switch( ev.item.id )
        {
            case "close":
                pageContainer.removePage( pageItem.key );
                break;
            case "closeAll":
                pageContainer.removeIframePages();
                break;
            case "checkPagesProps":
                printPagesProps();
                break;
            default:
                console.warn( \`Unknown menu item\` );
        }
    };

    contextMenu.showAtPoint( ev.clientX, ev.clientY );
};

function printPagesProps()
{
    for( const page of pageContainer.getIFramePageList() )
    {
        console.log( page.key, page.content );
    }
}`})),k,A=e((()=>{k=`<div id="container"></div>`}));function j(){return(0,M.jsxs)(n,{children:[(0,M.jsx)(t,{children:`IRPageContainer`}),(0,M.jsx)(r,{docList:N}),(0,M.jsx)(i,{htmlRaw:k,fixedHeight:500,code:T,exampleCode:D})]})}var M,N,P=e((()=>{E(),O(),A(),a(),M=o(),N=[[`/modules/_innorules_page-container.html`,`IRPageContainer`]],j.__docgenInfo={description:``,methods:[],displayName:`Event`}})),F,I;e((()=>{g(),w(),P(),F={title:`JS Components/IRPageContainer`},I=[`API`,`Basic`,`Event`]}))();export{p as API,x as Basic,j as Event,I as __namedExportsOrder,F as default};