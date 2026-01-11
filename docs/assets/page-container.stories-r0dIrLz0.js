import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as e,a as t,c as a,L as o}from"./version-tag-u3GxDBUd.js";import"./iframe-9F64GLpK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F4J0AwFl.js";const i=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";

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

globalThis.pageContainer = pageContainer;`,r=`/** addRightItem */
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
};`,c=`<div class="flex flex--column gap--sm mb--sm">
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
<div id="container"></div>`,l=[["/modules/_innorules_page-container.html","IRPageContainer"]];function s(){return n.jsxs(e,{children:[n.jsx(t,{children:"IRPageContainer"}),n.jsx(a,{docList:l}),n.jsx(o,{htmlRaw:c,fixedHeight:500,code:i,exampleCode:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"API"};const g=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";

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
}`,p='<div id="container"></div>',d=[["/modules/_innorules_page-container.html","IRPageContainer"]];function m(){return n.jsxs(e,{children:[n.jsx(t,{children:"IRPageContainer"}),n.jsx(a,{docList:d}),n.jsx(o,{htmlRaw:p,fixedHeight:500,exampleCode:g})]})}m.__docgenInfo={description:"",methods:[],displayName:"Basic"};const u=`import { IRPageContainer, FUNCTION_PAGE_KEY } from "@innorules/ir-style/lib/esm/page-container.js";
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
globalThis.pageContainer = pageContainer;`,C=`pageContainer.addRightItem( "user-info", {
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
        switch ( ev.item.id )
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
}`,P='<div id="container"></div>',f=[["/modules/_innorules_page-container.html","IRPageContainer"]];function b(){return n.jsxs(e,{children:[n.jsx(t,{children:"IRPageContainer"}),n.jsx(a,{docList:f}),n.jsx(o,{htmlRaw:P,fixedHeight:500,code:u,exampleCode:C})]})}b.__docgenInfo={description:"",methods:[],displayName:"Event"};const I={title:"JS Components/IRPageContainer"},k=["API","Basic","Event"];export{s as API,m as Basic,b as Event,k as __namedExportsOrder,I as default};
