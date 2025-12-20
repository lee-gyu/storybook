const r=/^var\((.+)\)$/;function t(t){const n=r.exec(t);if(n&&n.length>0)return n[1];throw new Error(`'${t}' is not custom-property name.`)}export{t as g};
