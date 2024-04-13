import{j as e,a,F as u}from"./jsx-runtime-CjohWU4o.js";import{D as C,a as r,L as i}from"./doc-content-CB4FAwiC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const h={title:"Web API/CacheDataStorage"},t=()=>e(C,{children:[a(r,{children:"CacheDataStorage API"}),a("p",{children:"CacheDataStorage API를 이용해서 큰 용량의 데이터를 페이지 간 공유할 수 있습니다. 너무 많은 용량의 데이터는 out of memory 문제를 일으킵니다. (수백 MB 이상은 사용에 유의)"}),a(i,{fixedHeight:150,html:a(u,{children:e("div",{id:"btn_container",className:"flex mb--lg gap-x--lg gap-y--lg flex--wrap",children:[a("button",{className:"button",id:"btn_save",children:"캐시 데이터 저장"}),a("button",{className:"button",id:"btn_console_print",children:"콘솔 출력"}),a("button",{className:"button",id:"btn_collect",children:"Collect"})]})}),code:`
import { getCacheDataStorage } from "./dist/index.js";

btn_save.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    // 10초 동안 유지되는 캐시 데이터 저장
    await cacheDataStorage.add( "cache-data-for-app", {
        data: "none",
        name: "Lee"
    }, 10000 );
}

btn_console_print.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    const data = await cacheDataStorage.get( "cache-data-for-app");

    if (!data) {
        alert("Cache 유효 기간 만료 또는 삭제 됨");
    } else {
        console.log( data );
    }
}

btn_collect.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    // 유효 기간이 지난 캐시 데이터 수집
    await cacheDataStorage.collect();
}

`})]});var c,n,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Doc>\r
            <DocTitle>CacheDataStorage API</DocTitle>\r
            <p>CacheDataStorage API를 이용해서 큰 용량의 데이터를 페이지 간 공유할 수 있습니다. 너무 많은 용량의 데이터는 out of memory 문제를 일으킵니다. (수백 MB 이상은 사용에 유의)</p>\r
            <LiveEditor fixedHeight={150} html={<>\r
                        <div id="btn_container" className="flex mb--lg gap-x--lg gap-y--lg flex--wrap">\r
                            <button className='button' id='btn_save'>캐시 데이터 저장</button>\r
                            <button className='button' id='btn_console_print'>콘솔 출력</button>\r
                            <button className='button' id='btn_collect'>Collect</button>\r
                        </div>\r
                    </>} code={/* javascript */\`
import { getCacheDataStorage } from "./dist/index.js";

btn_save.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    // 10초 동안 유지되는 캐시 데이터 저장
    await cacheDataStorage.add( "cache-data-for-app", {
        data: "none",
        name: "Lee"
    }, 10000 );
}

btn_console_print.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    const data = await cacheDataStorage.get( "cache-data-for-app");

    if (!data) {
        alert("Cache 유효 기간 만료 또는 삭제 됨");
    } else {
        console.log( data );
    }
}

btn_collect.onclick = async () => {
    const cacheDataStorage = await getCacheDataStorage();

    // 유효 기간이 지난 캐시 데이터 수집
    await cacheDataStorage.collect();
}

\`} />\r
        </Doc>;
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const B=["CacheDataStorage"];export{t as CacheDataStorage,B as __namedExportsOrder,h as default};
