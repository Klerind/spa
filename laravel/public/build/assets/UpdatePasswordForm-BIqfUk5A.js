import{r as m,W as c,j as s}from"./app-B7DAeqL8.js";import{I as o}from"./InputError-rEdZ1gnf.js";import{I as n}from"./InputLabel-D331ClvI.js";import{P as j}from"./PrimaryButton-vcP6W7i8.js";import{T as d}from"./TextInput-BeWp-feR.js";import{q as h}from"./transition-CDJXB5nm.js";function b({className:l=""}){const p=m.useRef(),i=m.useRef(),{data:r,setData:a,errors:t,put:g,reset:v,processing:u,recentlySuccessful:w}=c({current_password:"",password:"",password_confirmation:"",some_test:""}),x=c(),f=e=>{e.preventDefault(),console.log(x.transform)};return s.jsxs("section",{className:l,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:f,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(n,{htmlFor:"current_password",value:"Current Password"}),s.jsx(d,{id:"current_password",ref:i,value:r.current_password,onChange:e=>a("current_password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(o,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password",value:"New Password"}),s.jsx(d,{id:"password",ref:p,value:r.password,onChange:e=>a("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(o,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(d,{id:"password_confirmation",value:r.password_confirmation,onChange:e=>a("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(j,{disabled:u,children:"Save"}),s.jsx(h,{show:w,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{b as default};
