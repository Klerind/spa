import{r as a,W as f,j as e}from"./app-6F-rdnoW.js";import{I as r}from"./InputError-BsY96S5K.js";import{I as o}from"./InputLabel-CVmnpvYv.js";import{S as h}from"./SecondaryButton-BzMNSB_I.js";import{T as c}from"./TextInput-DdXinodE.js";function w({className:n=""}){const[b,i]=a.useState(!1),u=a.useRef(),d=a.useRef(),j=a.useRef(),{data:t,setData:m,put:p,delete:v,processing:N,reset:x,errors:l}=f({email:"",subject:"",message:""}),g=()=>{i(!1),p(route("test.sendData")),x()};return e.jsx("section",{className:`space-y-6 ${n}`,children:e.jsxs("form",{className:"p-6",children:[e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"email",value:"Email:"}),e.jsx(c,{id:"email",type:"email",name:"email",ref:u,value:t.email,onChange:s=>m("email",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Email"}),e.jsx(r,{message:l.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"subject",value:"Subject"}),e.jsx(c,{id:"subject",type:"text",name:"subject",ref:d,value:t.password,onChange:s=>m("subject",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(r,{message:l.subject,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"message",value:"Message"}),e.jsx(c,{id:"message",type:"text",name:"message",ref:j,value:t.message,onChange:s=>m("Message",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Message"}),e.jsx(r,{message:l.message,className:"mt-2"})]}),e.jsx(h,{onClick:g,className:"mt-6 flex justify-end",children:"Send Mail"})]})})}export{w as default};
