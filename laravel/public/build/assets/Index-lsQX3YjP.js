import{W as i,r as o,j as e,a as t}from"./app-ZyBjPkeq.js";import{A as l}from"./AuthenticatedLayout-D6xCRs9-.js";import{G as x}from"./GuestLayout3-DvQiBTfM.js";import"./TextInput-BqPDOt0e.js";import{D as s}from"./ResponsiveNavLink-DGdhgNEg.js";import"./transition-BkNvI8bu.js";function y({auth:r}){const{data:m,setData:d,post:n,processing:c,errors:h,reset:a}=i({email:"",password:"",remember:!1});return o.useEffect(()=>()=>{a("password")},[]),r.user?e.jsxs(l,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Home"}),children:[e.jsx(t,{title:"Home"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow",children:"Home"})})]}):e.jsxs(x,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Home"}),children:[e.jsx(t,{title:"Home"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow",children:e.jsxs(s,{children:[e.jsx(s.Trigger,{children:"trigger"}),e.jsx(s.Content,{children:e.jsx(s.Link,{href:"/login",children:"link"})})]})})})]})}export{y as default};
