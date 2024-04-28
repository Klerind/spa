import{j as e,W as g,r as h,a as f,d as j}from"./app-DTmmPZRS.js";import{G as b}from"./GuestLayout3-CY3AuiVg.js";import{I as i}from"./InputError-Cvb60KjR.js";import{I as l}from"./InputLabel-r2p_2Sdu.js";import{P as w}from"./PrimaryButton--RnY3NgJ.js";import{T as n}from"./TextInput-jgo7Adjz.js";import"./ResponsiveNavLink-pj9bLQzW.js";import"./transition-CVwlAWQ9.js";function N({className:m="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+m})}function P({auth:m,status:a,canResetPassword:d}){const{data:r,setData:t,post:c,processing:x,errors:o,reset:u}=g({email:"",password:"",remember:!1});h.useEffect(()=>()=>{u("password")},[]);const p=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(b,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Log in"}),children:[e.jsx(f,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow",children:e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{class:"pt-4 mt-4",children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-3/4",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(i,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-3/4",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(i,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(N,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-start mt-4",children:[d&&e.jsx(j,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(w,{className:"ms-4",disabled:x,children:"Log in"})]})]})})})]})}export{P as default};
