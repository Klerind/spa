import{W as x,r as d,j as e,a as l}from"./app-BsYteHJ1.js";import{A as n}from"./AuthenticatedLayout-8h_RntPu.js";import{G as m}from"./GuestLayout3-DefQpQX2.js";import"./TextInput-BW1G354I.js";import{D as r}from"./ResponsiveNavLink-CMkoNkrU.js";import"./transition-BpbgRvgS.js";function v({auth:t,posts:a}){const{data:c,setData:h,post:p,processing:j,errors:g,reset:o}=x({email:"",password:"",remember:!1});d.useEffect(()=>()=>{o("password")},[]),console.log(a);const i=a.map(s=>e.jsxs("div",{children:[e.jsx("img",{src:s.post_image}),e.jsx("h3",{children:s.post_name}),e.jsx("p",{children:s.post_description}),e.jsxs("time",{children:["created_at: ",s.created_at]})]}));return t.user?e.jsxs(n,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Home"}),children:[e.jsx(l,{title:"Home"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow",children:i&&i})})]}):e.jsxs(m,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Home"}),children:[e.jsx(l,{title:"Home"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow",children:e.jsxs(r,{children:[e.jsx(r.Trigger,{children:"trigger"}),e.jsx(r.Content,{children:e.jsx(r.Link,{href:"/login",children:"link"})})]})})})]})}export{v as default};