import{r as n,W as f,j as e}from"./app-BsYteHJ1.js";import{T as x}from"./TextInput-BW1G354I.js";import{I as h}from"./InputLabel-BSM2b35w.js";import{I as j}from"./InputFileUpload-BTlzYWTG.js";import{n as s,D as v,o as C,p as P,q as l,t as I}from"./DialogTitle-DrwlSoX_.js";function w(){const[u,i]=n.useState(!1),c=n.useRef(),d=n.useRef(),p=n.useRef(),m=n.useRef(),{data:r,setData:o,put:D,delete:b,processing:F,reset:R,errors:y}=f({name:"",description:"",price:"",image:""}),g=()=>{i(!0)},a=()=>{i(!1)};return e.jsxs(n.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:g,children:"Show Product Form"}),e.jsxs(v,{open:u,onClose:a,PaperProps:{component:"form",onSubmit:t=>{t.preventDefault(),console.log(r),a()}},children:[e.jsx(C,{children:"Product"}),e.jsxs(P,{children:[e.jsx(l,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"name",label:"Product Name",type:"text",ref:c,value:r.name,onChange:t=>o("name",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(l,{required:!0,margin:"dense",id:"description",name:"description",label:"Product Description",type:"text",ref:d,value:r.description,onChange:t=>o("description",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(h,{value:"Product Price"}),e.jsx(x,{type:"number",ref:p,value:r.price,onChange:t=>{o("price",t.target.value),console.log(t)}}),e.jsx(j,{inputRef:m,value:r.image,onChange:t=>{o("image",t.target.files[0]),console.log(t.target)}})]}),e.jsxs(I,{children:[e.jsx(s,{onClick:a,children:"Cancel"}),e.jsx(s,{type:"submit",children:"Add Product"})]})]})]})}export{w as default};