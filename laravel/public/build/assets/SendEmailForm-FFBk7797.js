import{r as a,W as f,j as e}from"./app-DsYlYtuh.js";import{T as r,I as o}from"./TextInput-bMYv261R.js";import{I as c}from"./InputLabel-D5Rbc8wK.js";import{S as h}from"./SecondaryButton-CA_sy51d.js";function S({className:n=""}){const[b,i]=a.useState(!1),u=a.useRef(),d=a.useRef(),j=a.useRef(),{data:t,setData:l,put:p,delete:v,processing:N,reset:x,errors:m}=f({email:"",subject:"",message:""}),g=()=>{i(!1),p(route("test.sendData")),x()};return e.jsx("section",{className:`space-y-6 ${n}`,children:e.jsxs("form",{className:"p-6",children:[e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{htmlFor:"email",value:"Email:"}),e.jsx(r,{id:"email",type:"email",name:"email",ref:u,value:t.email,onChange:s=>l("email",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Email"}),e.jsx(o,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{htmlFor:"subject",value:"Subject"}),e.jsx(r,{id:"subject",type:"text",name:"subject",ref:d,value:t.password,onChange:s=>l("subject",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(o,{message:m.subject,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{htmlFor:"message",value:"Message"}),e.jsx(r,{id:"message",type:"text",name:"message",ref:j,value:t.message,onChange:s=>l("Message",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Message"}),e.jsx(o,{message:m.message,className:"mt-2"})]}),e.jsx(h,{onClick:g,className:"mt-6 flex justify-end",children:"Send Mail"})]})})}export{S as default};
