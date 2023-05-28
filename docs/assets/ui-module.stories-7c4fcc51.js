import{j as i,a as e,F as a}from"./jsx-runtime-d057ca55.js";import{D as r,a as d,L as n}from"./doc-content-563e1737.js";import"./index-ebeaab24.js";import"./index-631dc947.js";const h={title:"JS Components/UI Module"},t=()=>i(r,{children:[e(d,{children:"UI Module"}),e("p",{children:"다른 시스템에 모듈로 제공할 컴포넌트를 정의합니다."}),e(n,{fixedHeight:400,html:i(a,{children:[e("button",{id:"btn_show",className:"button",children:"Show"}),e("div",{id:"root",style:{height:"100%"}})]}),code:`
import { IRComponentModule, createPopover } from "./dist/index.js";

class IRBuilderItemManagement extends IRComponentModule {

    constructor( title )
    {
        super();
        this.title = title;
    }

    show()
    {
        this.popover = createPopover({
            element: this.dialog,
            type: "dialog"
        }).show();
    }

    hide()
    {
        if (this.popover)
            this.popover.hide();
    }

    onCreated(fragment)
    {
        this.dialog = this.querySelector(".dialog");
        this.ruleName = this.querySelector("input[data-role='rule-name']");
        this.ruleAlias = this.querySelector("input[data-role='rule-alias']");

        this.querySelector("[data-role='button-close']")
            .addEventListener("click", () => this.hide())

        this.querySelector("[data-role='button-save']")
            .addEventListener("click", () => {
                this.emit( new CustomEvent( "save", {
                    detail: {
                        ruleName: this.ruleName.value,
                        ruleAlias: this.ruleAlias.value
                    }
                } ) );
            })
    }

    get template()
    {
        /**
         * xss 보안 이슈 주의하여 템플릿 구성하기
         */
        return /* html */ \`
<div class="dialog">
    <div class="dialog__wrapper" style="width: 400px; height: 300px;">
        <div class="dialog__header">
            <strong class="dialog__header-title">\${this.title}</strong>
            <div class="dialog__header-actions">
                <button data-role="button-close" class="dialog__button-close"><i class="ir-icon ir-icon--close"></i></button>
            </div>
        </div>
        <div class="dialog__content">
            <div class="form-item">
                <div class="form-item__label">룰 이름</div>
                <div class="form-item__control">
                    <div class="input">
                        <input data-role="rule-name" type="text" class="input__native" placeholder="룰 이름 입력" />
                    </div>
                </div>
            </div>
            <div class="form-item">
                <div class="form-item__label">룰 별칭</div>
                <div class="form-item__control">
                    <div class="input">
                        <input data-role="rule-alias" type="text" class="input__native" placeholder="룰 별칭 입력" />
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog__footer">
            <div class="dialog__footer-right">
                <button data-role="button-save" type="button" class="button button--primary">저장</button>
            </div>
        </div>
    </div>
</div>
\`
    }

}

const builderItemMng = new IRBuilderItemManagement( "입력 도구" );

// 내부 emit 이벤트를 통한 인터페이스 이용
builderItemMng.on( "save", (ev) => {
    alert( JSON.stringify( ev.detail ) );
} )

root.appendChild( builderItemMng.uiFragment )

btn_show.onclick = () => {
    builderItemMng.show();
}

`})]});var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>UI Module</DocTitle>\r
            <p>다른 시스템에 모듈로 제공할 컴포넌트를 정의합니다.</p>\r
            <LiveEditor fixedHeight={400} html={<>\r
                    <button id="btn_show" className="button">Show</button>\r
                    <div id="root" style={{
        height: "100%"
      }}></div>\r
                </>} code={/* javascript */\`
import { IRComponentModule, createPopover } from "./dist/index.js";

class IRBuilderItemManagement extends IRComponentModule {

    constructor( title )
    {
        super();
        this.title = title;
    }

    show()
    {
        this.popover = createPopover({
            element: this.dialog,
            type: "dialog"
        }).show();
    }

    hide()
    {
        if (this.popover)
            this.popover.hide();
    }

    onCreated(fragment)
    {
        this.dialog = this.querySelector(".dialog");
        this.ruleName = this.querySelector("input[data-role='rule-name']");
        this.ruleAlias = this.querySelector("input[data-role='rule-alias']");

        this.querySelector("[data-role='button-close']")
            .addEventListener("click", () => this.hide())

        this.querySelector("[data-role='button-save']")
            .addEventListener("click", () => {
                this.emit( new CustomEvent( "save", {
                    detail: {
                        ruleName: this.ruleName.value,
                        ruleAlias: this.ruleAlias.value
                    }
                } ) );
            })
    }

    get template()
    {
        /**
         * xss 보안 이슈 주의하여 템플릿 구성하기
         */
        return /* html */ \\\`
<div class="dialog">
    <div class="dialog__wrapper" style="width: 400px; height: 300px;">
        <div class="dialog__header">
            <strong class="dialog__header-title">\\\${this.title}</strong>
            <div class="dialog__header-actions">
                <button data-role="button-close" class="dialog__button-close"><i class="ir-icon ir-icon--close"></i></button>
            </div>
        </div>
        <div class="dialog__content">
            <div class="form-item">
                <div class="form-item__label">룰 이름</div>
                <div class="form-item__control">
                    <div class="input">
                        <input data-role="rule-name" type="text" class="input__native" placeholder="룰 이름 입력" />
                    </div>
                </div>
            </div>
            <div class="form-item">
                <div class="form-item__label">룰 별칭</div>
                <div class="form-item__control">
                    <div class="input">
                        <input data-role="rule-alias" type="text" class="input__native" placeholder="룰 별칭 입력" />
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog__footer">
            <div class="dialog__footer-right">
                <button data-role="button-save" type="button" class="button button--primary">저장</button>
            </div>
        </div>
    </div>
</div>
\\\`
    }

}

const builderItemMng = new IRBuilderItemManagement( "입력 도구" );

// 내부 emit 이벤트를 통한 인터페이스 이용
builderItemMng.on( "save", (ev) => {
    alert( JSON.stringify( ev.detail ) );
} )

root.appendChild( builderItemMng.uiFragment )

btn_show.onclick = () => {
    builderItemMng.show();
}

\`} />\r
        </Doc>;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const p=["UIModule"];export{t as UIModule,p as __namedExportsOrder,h as default};
//# sourceMappingURL=ui-module.stories-7c4fcc51.js.map
