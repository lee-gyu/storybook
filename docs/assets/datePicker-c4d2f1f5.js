import{g as $,e as i,d as b,i as y,_ as I,b as N,c as S,f as O,I as A}from"./timePicker.elements-261a85d5.js";import{z as H,k as M,D as V,b as Y,a as F,u as R,o as B,c as U,I as W}from"./index-0721c456.js";const x="checkbox",_={checkbox:{"&":x},checkboxInput:{"&":`${x}__input`},checkboxWrapper:{"&":`${x}__wrapper`},text:{"&":`${x}__text`}},K=n=>{const e=document.createElement("div"),l=document.createElement("div");return e.className="tooltip",e.innerText=n,l.className="arrow",e.appendChild(l),{tooltipElement:e,arrowElement:l}},j=n=>{const{refElement:e,label:l="",offset:c=8,placement:f="right"}=n,{tooltipElement:r,arrowElement:d}=K(l),h=(s,a)=>{if(!s){console.warn("Could not find arrowData of tooltip!",s);return}const{x:o,y:k}=s;o&&(d.style.left=`${o}px`),k&&(d.style.top=`${k}px`),d.className=`arrow arrow--${a}`},m=()=>{M(e,r,{placement:f,middleware:[V(c),Y(),F({padding:5}),R({element:d})]}).then(({x:s,y:a,placement:o,middlewareData:k})=>{r.style.left=`${s}px`,r.style.top=`${a}px`,h(k.arrow,o)})},u=()=>{$("popover").appendChild(r)},p=()=>{r.remove()};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",p);const t=H(e,r,m);return{destroy(){p(),e.removeEventListener("mouseenter",u),e.removeEventListener("mouseleave",p),t()},hide(){return p(),this},show(){return this.update(),u(),this},update(){return m(),this}}},T=n=>(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0),n),q=6,z=7,G=32,X=0,Z=({uuid:n,refElement:e,onClick:l,minDate:c,maxDate:f})=>{let r=!1,d=()=>{},h=null;T(c),T(f);const m=U({eventElements:[i.datePicker],clickOutsideFunc:()=>u.hide()}),u={get visible(){return r},update(t,s){const a=new Date,o=T(new Date(t)),k=o.getMonth();i.headerPrev.onclick=()=>{t.setDate(X),this.update(t,s)},i.headerNext.onclick=()=>{t.setDate(G),this.update(t,s)},i.headerPrevYear.onclick=()=>{t.setFullYear(t.getFullYear()-1),this.update(t,s)},i.headerNextYear.onclick=()=>{t.setFullYear(t.getFullYear()+1),this.update(t,s)},i.todayButton.onclick=()=>{l.call(null,a),this.update(a,a)};const g=a<c||a>f;i.todayButton.disabled=g;const P=i.todayButton.parentElement;g&&P&&h==null&&(h=j({refElement:P,label:y.datePicker.disabledTodayTooltip,placement:"bottom"})),i.updateI18n(),i.headerTitle.innerText=b(o).format(y.datePicker.titleFormat),o.setDate(1),o.setDate(-(o.getDay()-1)),i.contentTableTbody.innerHTML="",I.range(q).forEach(()=>{const w=document.createElement("tr");for(let L=0;L<z;L++){const v=document.createElement("td"),C=new Date(o);v.innerText=`${o.getDate()}`,v.onclick=()=>l(C),C<c||C>f?v.classList.add("is-disabled"):o.getMonth()!==k?v.classList.add("is-diff-month"):o.getTime()===(s==null?void 0:s.getTime())&&v.classList.add("is-selected"),w.appendChild(v),o.setDate(o.getDate()+1)}i.contentTableTbody.appendChild(w)})},show(){r=!0,i.datePicker.isConnected||$("popover").appendChild(i.datePicker),i.datePicker.style.removeProperty("display"),i.datePicker.setAttribute("data-for",n),m.create(),p.create(),setTimeout(()=>{i.datePicker.classList.add(N.datePicker["is-visible"]),d(),d=B(e,i.datePicker)},0)},hide(){m.destroy(),p.destroy(),h&&(h.destroy(),h=null);const t=s=>{s.currentTarget===s.target&&(r=!1,i.datePicker.removeEventListener("transitionend",t),n===i.datePicker.getAttribute("data-for")&&(d(),i.datePicker.remove()))};i.datePicker.addEventListener("transitionend",t),i.datePicker.classList.remove(N.datePicker["is-visible"])},onESC(){this.hide()}},p=S(u);return u},D="input",E={input:{"&":D},inputNative:{"&":`${D}__native`},inputSuffix:{"&":`${D}__suffix`},inputPrefix:{"&":`${D}__prefix`}},J=(n,e)=>n instanceof Date?b(n).startOf("D"):typeof n=="string"?b(n,e):b(null);class te extends W{constructor({div:e,defaultDate:l,format:c=y.datePicker.dateFormat,checkbox:f=!1,disabled:r=!1,onSelect:d,onChange:h,onCheckboxClick:m,minDate:u=A.datePicker.minDate,maxDate:p=A.datePicker.maxDate}){if(super({contextElement:e}),this.selectedDate=null,this.calendarDate=new Date,l){const t=J(l,c);t.isValid()?(this.calendarDate=t.toDate(),this.selectedDate=t.toDate()):console.error(`invalid defaultDate format. it must follow ${c}`)}if(this.format=c,this.div=e,this.input=document.createElement("input"),this.button=document.createElement("button"),this.button.appendChild(O("ir-icon--calendar")),this.div.innerHTML="",this.div.classList.add(E.input["&"]),this.input.setAttribute("type","text"),this.input.setAttribute("placeHolder",this.format),this.input.className=E.inputNative["&"],this.button.className=E.inputSuffix["&"],this.button.type="button",this._minDate=u,this._maxDate=p,d&&(this.onSelect=d),h&&(this.onChange=h),m&&(this.onCheckboxClick=m),f){const t=document.createElement("div"),s=document.createElement("label"),a=document.createElement("input");a.setAttribute("type","checkbox"),t.classList.add(_.checkbox["&"],E.inputPrefix["&"]),s.className=_.checkboxWrapper["&"],a.className=_.checkboxInput["&"],s.appendChild(a),t.appendChild(s),this.div.appendChild(t),a.checked=!r,a.onchange=()=>{this.disabled=!a.checked,this.onCheckboxClick(a.checked)},this.addCoreElement(t)}this.disabled=r,this.div.appendChild(this.input),this.div.appendChild(this.button),this.addCoreElement(this.input),this.addCoreElement(this.button),this.selectedDate&&(this.input.value=b(this.selectedDate).format(c)),this.button.addEventListener("click",()=>{this.isVisible===!1&&this.show()}),this.input.addEventListener("blur",()=>{const t=b(this.input.value,this.format,!0);!t.isValid()||t.toDate()<this.minDate||t.toDate()>this.maxDate?this.setDate(this.selectedDate):this.setDate(t.toDate())}),this.handler=Z({uuid:this.uuid,refElement:this.div,minDate:this._minDate,maxDate:this._maxDate,onClick:t=>{this.setDate(t),this.onSelect(t),this.hide()}})}get textValue(){return this.input.value}get inputCheckbox(){return this.div.querySelector(".checkbox__input")}get date(){return this.selectedDate}get isVisible(){return this.handler.visible}get disabled(){return this.input.hasAttribute("disabled")}get minDate(){return this._minDate}get maxDate(){return this._maxDate}set minDate(e){this._minDate=e}set maxDate(e){this._maxDate=e}set disabled(e){e?(this.input.setAttribute("disabled",""),this.button.setAttribute("disabled","")):(this.input.removeAttribute("disabled"),this.button.removeAttribute("disabled")),this.inputCheckbox&&(this.inputCheckbox.checked=!e)}setDate(e){e?(this.selectedDate=new Date(e),this.calendarDate=new Date(e),this.input.value=b(e).format(this.format),this.updateCalendar()):(this.selectedDate=null,this.input.value=""),this.latestValue!==this.input.value&&this.onChange(this.input.value),this.latestValue=this.input.value}show(){this.isVisible||(this.handler.update(this.calendarDate,this.selectedDate),this.handler.show())}hide(){this.isVisible&&this.handler.hide()}onSelect(e){}onChange(e){}onCheckboxClick(e){}updateCalendar(){this.handler.update(this.calendarDate,this.selectedDate)}}export{te as I};
//# sourceMappingURL=datePicker-c4d2f1f5.js.map