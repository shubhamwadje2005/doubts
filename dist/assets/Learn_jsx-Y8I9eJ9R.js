import{j as e}from"./index-D8lluagR.js";const j=()=>{let o=10,n=[];const t=["dell","hp"],a=l=>{console.log("test called",l)},r=l=>{console.log("test called",l)},i=l=>{const{value:s,checked:c}=l.target;c?n.push(s):n=n.filter(d=>d!==s),console.log(n)},h=l=>{l.preventDefault(),console.log("submitted")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Learn_jsx"}),e.jsx("h1",{children:t}),e.jsx("h1",{children:"ho"}),e.jsx("button",{onClick:l=>{a("jhon"),r("ross")},type:"button",class:"btn btn-primary",children:"Primary"}),e.jsx("hr",{}),e.jsx("h1",{children:o}),e.jsx("button",{onClick:l=>{o++,console.log(o)},children:"+1"}),e.jsx("hr",{}),e.jsx("input",{type:"text",onChange:l=>console.log(l.target.value)}),e.jsxs("select",{onChange:l=>console.log(l.target.value),children:[e.jsx("option",{value:"high",children:"high"}),e.jsx("option",{value:"medium",children:"medium"}),e.jsx("option",{value:"low",children:"low"})]}),e.jsx("hr",{}),e.jsx("input",{type:"radio",name:"gender",id:"male",value:"male",onChange:l=>console.log(l.target.value)}),e.jsx("label",{htmlFor:"male",children:"male"}),e.jsx("input",{type:"radio",name:"gender",id:"female",value:"female",onChange:l=>console.log(l.target.value)}),e.jsx("label",{htmlFor:"female",children:"female"}),e.jsx("hr",{}),["html","css","js"].map(l=>e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",id:l,value:l,onChange:i}),e.jsx("label",{htmlFor:l,children:l})]})),e.jsx("hr",{}),e.jsx("form",{onSubmit:h,children:e.jsx("button",{type:"submit",children:"click me"})}),e.jsx("input",{type:"file",onChange:l=>console.log(l.target.files)})]})};export{j as default};
