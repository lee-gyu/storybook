function r(n,l,...t){const e=a(l,...t);return n.appendChild(e),e}function a(n,...l){const t=document.createElement(n);return l.forEach(e=>t.classList.add(e)),t}function s(n,l,t){let e=n;for(;e&&!e.classList.contains(l);){if(e===t)return null;e=e.parentElement}return e}function c(n,l,t){let e=t;for(;e;){if(e.matches(n))return e;if(e.matches(l))break;e=e.parentElement}return null}export{r as a,c,s as h};
