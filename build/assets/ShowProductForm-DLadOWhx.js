import{q as P,r,W as D,j as e}from"./app-B7DAeqL8.js";import{I as n}from"./InputError-rEdZ1gnf.js";import{T as R}from"./TextInput-BeWp-feR.js";import{I as b}from"./InputLabel-D331ClvI.js";import{I as y,R as F}from"./ResponsiveDialog-DCgl53Gm.js";import{n as l,D as E,o as N,p as S,q as u,t as k}from"./DialogTitle-NqqdqGuZ.js";function U({status:d}){P().props.errors;const[m,c]=r.useState(!1),[g,p]=r.useState(!1),x=r.useRef(),f=r.useRef(),j=r.useRef(),h=r.useRef(),{data:a,setData:o,post:v,delete:O,errors:s,processing:T,reset:C}=D({title:"",description:"",price:"",image:""}),I=()=>{c(!0)},i=()=>{c(!1)};return e.jsxs(r.Fragment,{children:[e.jsx(l,{variant:"outlined",onClick:I,children:"Show Product Form"}),e.jsxs(E,{open:m,onClose:i,PaperProps:{component:"form",onSubmit:t=>{t.preventDefault(),v("api/product/create"),Object.keys(s).length===0&&(i(),C()),p(!0)}},children:[e.jsx(N,{children:"Product"}),e.jsxs(S,{children:[e.jsx(u,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Product Name",type:"text",ref:x,value:a.title,onChange:t=>o("title",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(n,{message:s.title,className:"mt-2"}),e.jsx(u,{margin:"dense",id:"description",name:"description",label:"Product Description",type:"text",ref:f,value:a.description,onChange:t=>o("description",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(n,{message:s.description,className:"mt-2"}),e.jsx(b,{value:"Product Price"}),e.jsx(R,{type:"number",ref:j,value:a.price,onChange:t=>{o("price",t.target.value)}}),e.jsx(n,{message:s.price,className:"mt-2"}),e.jsx(y,{inputRef:h,value:a.image,onChange:t=>{o("image",t.target.files[0])}}),e.jsx(n,{message:s.image,className:"mt-2"})]}),e.jsxs(k,{children:[e.jsx(l,{onClick:i,children:"Cancel"}),e.jsx(l,{type:"submit",children:"Add Product"})]})]}),s&&e.jsx(F,{openErrors:g,setOpenErrors:p,status:d,errors:s})]})}export{U as default};
