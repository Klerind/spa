import{r as c,W as l,j as s}from"./app-Cg5z-Otw.js";import{T as o,I as n}from"./TextInput-B-9mXHmd.js";import{I as d}from"./InputLabel-Cfd7Mc4y.js";import{P as j}from"./PrimaryButton-B9MeHSfr.js";import{q as h}from"./transition-CWUIl6oa.js";function I({className:m=""}){const p=c.useRef(),i=c.useRef(),{data:r,setData:a,errors:t,put:g,reset:v,processing:u,recentlySuccessful:w}=l({current_password:"",password:"",password_confirmation:"",some_test:""}),x=l(),f=e=>{e.preventDefault(),console.log(x.transform)};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:f,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Current Password"}),s.jsx(o,{id:"current_password",ref:i,value:r.current_password,onChange:e=>a("current_password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"New Password"}),s.jsx(o,{id:"password",ref:p,value:r.password,onChange:e=>a("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(o,{id:"password_confirmation",value:r.password_confirmation,onChange:e=>a("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(j,{disabled:u,children:"Save"}),s.jsx(h,{show:w,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{I as default};
