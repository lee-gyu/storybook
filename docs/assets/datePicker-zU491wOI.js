import{c as H,V as M,R as O,s as A,g as V,p as S,a as N,b as F,n as I,t as Y}from"./index-DkI8zks2.js";import{e as s,d as m,i as k,_ as R,c as B,b as U,g as y}from"./timePicker.elements-Q0xqtR9Q.js";import{a as $,b as j,f as q,s as K,d as W,g as L,o as X,c as Z,I as z}from"./index--oTrqKKK.js";const G=()=>{const i=document.createElement("div");return i.className=H,{tooltipElement:i,updateText(e){i.textContent=e}}},v=(()=>{let i=null;return()=>(i||(i=G()),i)})(),J=8;class Q{constructor(e){var l,a,d,r;if(e.refElement===void 0)throw new Error("refElement is required");this._options={refElement:e.refElement,label:(l=e.label)!==null&&l!==void 0?l:"",offset:(a=e.offset)!==null&&a!==void 0?a:J,placement:(d=e.placement)!==null&&d!==void 0?d:"bottom",refMode:(r=e.refMode)!==null&&r!==void 0?r:"element"},this._tooltipRefElement=e.refElement,this.mouseEnterHandler=this.refMode==="element"?this.showTooltip.bind(this):this.showTooltipPointer.bind(this),this.mouseEnterHandler=this.mouseEnterHandler.bind(this),this.mouseMoveHandler=this.mouseMoveHandler.bind(this),this.hideTooltip=this.hideTooltip.bind(this),this.refElement.addEventListener("mouseenter",this.mouseEnterHandler),this.refElement.addEventListener("mouseleave",this.hideTooltip)}get text(){return this._options.label}get refMode(){return this._options.refMode}get placement(){return this._options.placement}get offset(){return this._options.offset}get refElement(){return this._options.refElement}updateTooltipOffset(){const{tooltipElement:e}=v();$(this._tooltipRefElement,e,{placement:this.placement,strategy:"fixed",middleware:[j(this.offset),q(),K({padding:5})]}).then(({x:l,y:a})=>{e.style.left=`${l}px`,e.style.top=`${a}px`})}mouseMoveHandler(e){this._tooltipRefElement=W(e.clientX,e.clientY),this.updateTooltipOffset()}mouseEnterHandler(){}showTooltip(){if(this.text===""){console.warn("tooltip text is empty!");return}const{tooltipElement:e}=v();this.updateText(this.text),L("popover").appendChild(e),this.updateTooltipOffset()}showTooltipPointer(){this.showTooltip(),this.refElement.addEventListener("mousemove",this.mouseMoveHandler)}hideTooltip(){const{tooltipElement:e}=v();e.remove(),this.refElement.removeEventListener("mousemove",this.mouseMoveHandler)}update(){return this.updateTooltipOffset(),this}updateText(e){const{updateText:l}=v();this._options.label=e,l(e)}destroy(){this.hideTooltip(),this.refElement.removeEventListener("mouseenter",this.mouseEnterHandler),this.refElement.removeEventListener("mouseleave",this.hideTooltip)}hide(){return this.hideTooltip(),this}show(){return this.update(),this.showTooltip(),this}}const ee=i=>new Q(i),T=i=>(i.setHours(0),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0),i),te=6,ie=7,se=32,ne=0,oe=({uuid:i,refElement:e,onClick:l,minDate:a,maxDate:d})=>{let r=!1,p=()=>{},u=null;T(a),T(d);const b=Z({eventElements:[s.datePicker],clickOutsideFunc:()=>f.hide()}),f={get visible(){return r},update(o,t){const h=T(new Date),n=T(new Date(o)),w=n.getMonth();s.headerPrev.onclick=()=>{o.setDate(ne),this.update(o,t)},s.headerNext.onclick=()=>{o.setDate(se),this.update(o,t)},s.headerPrevYear.onclick=()=>{o.setFullYear(o.getFullYear()-1),this.update(o,t)},s.headerNextYear.onclick=()=>{o.setFullYear(o.getFullYear()+1),this.update(o,t)},s.todayButton.onclick=()=>{l.call(null,h),this.update(h,h)};const g=h<a||h>d;s.todayButton.disabled=g;const x=s.todayButton.parentElement;g&&x&&u==null&&(u=ee({refElement:x,label:k.datePicker.disabledTodayTooltip,placement:"bottom"})),s.updateI18n(),s.headerTitle.innerText=m(n).format(k.datePicker.titleFormat),n.setDate(1),n.setDate(-(n.getDay()-1)),s.contentTableTbody.innerHTML="",R.range(te).forEach(()=>{const C=document.createElement("tr");for(let _=0;_<ie;_++){const c=document.createElement("td"),D=new Date(n);c.className=M,c.innerText=`${n.getDate()}`,c.onclick=()=>l(D),D<a||D>d?c.classList.add("is-disabled"):n.getMonth()!==w?c.classList.add("is-diff-month"):n.getTime()===(t==null?void 0:t.getTime())&&c.classList.add(O),C.appendChild(c),n.setDate(n.getDate()+1)}s.contentTableTbody.appendChild(C)})},show(){r=!0,s.datePicker.isConnected||L("popover").appendChild(s.datePicker),s.datePicker.style.removeProperty("display"),s.datePicker.setAttribute("data-for",i),b.create(),E.create(),setTimeout(()=>{s.datePicker.classList.add("is-visible"),p(),p=X(e,s.datePicker)},0)},hide(){b.destroy(),E.destroy(),u&&(u.destroy(),u=null);const o=t=>{t.currentTarget===t.target&&(r=!1,s.datePicker.removeEventListener("transitionend",o),i===s.datePicker.getAttribute("data-for")&&(p(),s.datePicker.remove()))};s.datePicker.addEventListener("transitionend",o),s.datePicker.classList.remove("is-visible")},onESC(){this.hide()}},E=B(f);return f},P=(i,e)=>i instanceof Date?m(i).startOf("D"):typeof i=="string"?m(i,e):m(null);class de extends z{constructor({div:e,defaultDate:l,format:a=k.datePicker.dateFormat,checkbox:d=!1,disabled:r=!1,allowedEmptyString:p=!0,onSelect:u,onChange:b,onCheckboxClick:f,minDate:E=y().getStoreValue("datePicker.minDate"),maxDate:o=y().getStoreValue("datePicker.maxDate")}){if(super({contextElement:e}),this.selectedDate=null,this.calendarDate=new Date,l){const t=P(l,a);t.isValid()?(this.calendarDate=t.toDate(),this.selectedDate=t.toDate()):console.error(`invalid defaultDate format. it must follow ${a}`)}if(!p&&this.selectedDate==null){const t=P(new Date,a);this.calendarDate=t.toDate(),this.selectedDate=t.toDate()}if(this.format=a,this.div=e,this.input=document.createElement("input"),this.button=document.createElement("button"),this.button.appendChild(U("ir-icon--calendar")),this.div.innerHTML="",this.div.classList.add(A),this.input.setAttribute("type","text"),this.input.setAttribute("placeHolder",this.format),this.input.classList.add(V,"tnum-adj"),this.button.className=S,this.button.type="button",this._minDate=E,this._maxDate=o,u&&(this.onSelect=u),b&&(this.onChange=b),f&&(this.onCheckboxClick=f),d){const t=document.createElement("div"),h=document.createElement("label"),n=document.createElement("input");n.setAttribute("type","checkbox"),t.classList.add(N,F),h.className=I,n.className=Y,h.appendChild(n),t.appendChild(h),this.div.appendChild(t),n.checked=!r,n.onchange=()=>{this.disabled=!n.checked,this.onCheckboxClick(n.checked)},this.addCoreElement(t)}this.disabled=r,this.div.appendChild(this.input),this.div.appendChild(this.button),this.addCoreElement(this.input),this.addCoreElement(this.button),this.selectedDate&&(this.input.value=m(this.selectedDate).format(a)),this.button.addEventListener("click",()=>{this.isVisible===!1&&this.show()}),this.input.addEventListener("blur",()=>{if(this.input.value===""){p?this.setDate(null):this.setDate(this.selectedDate);return}const t=m(this.input.value,this.format,!0);!t.isValid()||t.toDate()<this.minDate||t.toDate()>this.maxDate?this.setDate(this.selectedDate):this.setDate(t.toDate())}),this.handler=oe({uuid:this.uuid,refElement:this.div,minDate:this._minDate,maxDate:this._maxDate,onClick:t=>{this.setDate(t),this.onSelect(t),this.hide()}})}get textValue(){return this.input.value}get inputCheckbox(){return this.div.querySelector(".checkbox__input")}get date(){return this.selectedDate}get isVisible(){return this.handler.visible}get disabled(){return this.input.hasAttribute("disabled")}get minDate(){return this._minDate}get maxDate(){return this._maxDate}set minDate(e){this._minDate=e}set maxDate(e){this._maxDate=e}set disabled(e){e?(this.input.setAttribute("disabled",""),this.button.setAttribute("disabled","")):(this.input.removeAttribute("disabled"),this.button.removeAttribute("disabled")),this.inputCheckbox&&(this.inputCheckbox.checked=!e)}setDate(e){e?(this.selectedDate=new Date(e),this.calendarDate=new Date(e),this.input.value=m(e).format(this.format),this.updateCalendar()):(this.selectedDate=null,this.input.value=""),this.latestValue!==this.input.value&&this.onChange(this.input.value),this.latestValue=this.input.value}show(){this.isVisible||(this.handler.update(this.calendarDate,this.selectedDate),this.handler.show())}hide(){this.isVisible&&this.handler.hide()}onSelect(e){}onChange(e){}onCheckboxClick(e){}updateCalendar(){this.handler.update(this.calendarDate,this.selectedDate)}}export{de as I};