import{j as l,a as c}from"./jsx-runtime-e43ccb36.js";import{D as a,a as e,b as n,c as d}from"./dialog.header-5e992610.js";import"./index-1b03fe98.js";import"./index-91038615.js";const h={title:"Builder Examples/메인"},i=()=>l(a,{visible:!0,style:{width:605},children:[c(e,{title:"폴더 권한"}),l(n,{children:[c("div",{className:"heading-group",children:c("strong",{className:"heading--4",children:"권한 별 폴더 구분"})}),l("ul",{className:"row gap-y--xs",children:[l("li",{className:"col col--12",children:[c("i",{className:"ir-icon ir-icon--folder-fill",style:{"--ir-default-color":"var(--blue)"}})," 폴더 관리, 룰 관리"]}),l("li",{className:"col col--12",children:[c("i",{className:"ir-icon ir-icon--folder-fill",style:{"--ir-default-color":"var(--purple)"}})," 폴더 관리"]}),l("li",{className:"col col--12",children:[c("i",{className:"ir-icon ir-icon--folder-fill",style:{"--ir-default-color":"var(--yellow)"}})," 룰 관리"]}),l("li",{className:"col col--12",children:[c("i",{className:"ir-icon ir-icon--folder-fill"})," 권한 없음"]})]}),c("div",{className:"divider my--xl"}),c("div",{className:"heading-group",children:c("strong",{className:"heading--4",children:"폴더 권한"})}),l("ul",{className:"row gap-y--xs",children:[l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 폴더 관리"]}),c("div",{className:"col col--6",children:"폴더를 추가/변경/삭제할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 폴더 조회"]}),c("div",{className:"col col--6",children:"폴더-룰 리스트를 조회할 수 있습니다."})]})]}),c("div",{className:"divider my--xl"}),c("div",{className:"heading-group",children:c("strong",{className:"heading--4",children:"룰 권한"})}),l("ul",{className:"row gap-y--xs",children:[l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 룰 관리"]}),c("div",{className:"col col--6",children:"룰 및 버전을 추가/변경/삭제할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 룰 내용 조회"]}),c("div",{className:"col col--6",children:"룰 내용을 조회할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 룰 편집"]}),c("div",{className:"col col--6",children:"룰 내용을 편집할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--success ir-icon--check"})," 룰 테스트"]}),c("div",{className:"col col--6",children:"룰을 테스트할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--close"})," 룰 승인"]}),c("div",{className:"col col--6",children:"룰 내용을 승인할 수 있습니다."})]}),l("li",{className:"row col col--12",children:[l("div",{className:"col col--6",children:[c("i",{className:"ir-icon ir-icon--close"})," 룰 이관"]}),c("div",{className:"col col--6",children:"룰을 다음 단계로 이관할 수 있습니다."})]})]})]}),c(d,{right:c("button",{type:"button",className:"button button--primary",children:"저장"})})]});var r,s,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <Dialog visible={true} style={{
    width: 605
  }}>\r
            <DialogHeader title="폴더 권한" />\r
            <DialogContent>\r
                <div className="heading-group">\r
                    <strong className="heading--4">권한 별 폴더 구분</strong>\r
                </div>\r
                <ul className="row gap-y--xs">\r
                    <li className="col col--12">\r
                        <i className="ir-icon ir-icon--folder-fill" style={{
            "--ir-default-color": "var(--blue)"
          }} /> 폴더 관리, 룰 관리\r
                    </li>\r
                    <li className="col col--12">\r
                        <i className="ir-icon ir-icon--folder-fill" style={{
            "--ir-default-color": "var(--purple)"
          }} /> 폴더 관리\r
                    </li>\r
                    <li className="col col--12">\r
                        <i className="ir-icon ir-icon--folder-fill" style={{
            "--ir-default-color": "var(--yellow)"
          }} /> 룰 관리\r
                    </li>\r
                    <li className="col col--12">\r
                        <i className="ir-icon ir-icon--folder-fill" /> 권한 없음\r
                    </li>\r
                </ul>\r
                <div className="divider my--xl" />\r
                <div className="heading-group">\r
                    <strong className="heading--4">폴더 권한</strong>\r
                </div>\r
                <ul className="row gap-y--xs">\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 폴더 관리\r
                        </div>\r
                        <div className="col col--6">\r
                            폴더를 추가/변경/삭제할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 폴더 조회\r
                        </div>\r
                        <div className="col col--6">\r
                            폴더-룰 리스트를 조회할 수 있습니다.\r
                        </div>\r
                    </li>\r
                </ul>\r
                <div className="divider my--xl" />\r
                <div className="heading-group">\r
                    <strong className="heading--4">룰 권한</strong>\r
                </div>\r
                <ul className="row gap-y--xs">\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 룰 관리\r
                        </div>\r
                        <div className="col col--6">\r
                            룰 및 버전을 추가/변경/삭제할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 룰 내용 조회\r
                        </div>\r
                        <div className="col col--6">\r
                            룰 내용을 조회할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 룰 편집\r
                        </div>\r
                        <div className="col col--6">\r
                            룰 내용을 편집할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--success ir-icon--check" /> 룰 테스트\r
                        </div>\r
                        <div className="col col--6">\r
                            룰을 테스트할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--close" /> 룰 승인\r
                        </div>\r
                        <div className="col col--6">\r
                            룰 내용을 승인할 수 있습니다.\r
                        </div>\r
                    </li>\r
                    <li className="row col col--12">\r
                        <div className="col col--6">\r
                            <i className="ir-icon ir-icon--close" /> 룰 이관\r
                        </div>\r
                        <div className="col col--6">\r
                            룰을 다음 단계로 이관할 수 있습니다.\r
                        </div>\r
                    </li>\r
                </ul>\r
            </DialogContent>\r
            <DialogFooter right={<button type="button" className="button button--primary">\r
                                저장\r
                    </button>} />\r
        </Dialog>;
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const u=["폴더_권한"];export{u as __namedExportsOrder,h as default,i as 폴더_권한};
//# sourceMappingURL=폴더_권한.stories-a02b0002.js.map
