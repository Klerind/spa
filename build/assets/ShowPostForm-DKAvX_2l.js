import{r as s,W as g,j as e}from"./app-B3qUmDcx.js";import{I as x}from"./InputFileUpload-UmKISGoZ.js";import{n as a,D as f,o as h,p as j,q as l,t as v}from"./DialogTitle-CiLZrzvP.js";function S(){const[d,r]=s.useState(!1),u=s.useRef(),c=s.useRef(),p=s.useRef(),{data:n,setData:o,put:C,delete:D,processing:P,reset:F,errors:I}=g({title:"",description:"",image:""}),m=()=>{r(!0)},i=()=>{r(!1)};return e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:"outlined",onClick:m,children:"Show Post Form"}),e.jsxs(f,{open:d,onClose:i,PaperProps:{component:"form",onSubmit:t=>{t.preventDefault(),console.log(n),i()}},children:[e.jsx(h,{children:"Post"}),e.jsxs(j,{children:[e.jsx(l,{autoFocus:!0,required:!0,margin:"dense",id:"title",name:"title",label:"Post Title",type:"text",ref:u,value:n.title,onChange:t=>o("title",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(l,{required:!0,margin:"dense",id:"description",name:"description",label:"Post Description",type:"text",ref:c,value:n.description,onChange:t=>o("description",t.target.value),fullWidth:!0,variant:"standard"}),e.jsx(x,{inputRef:p,value:n.image,onChange:t=>o("image",t.target.value)})]}),e.jsxs(v,{children:[e.jsx(a,{onClick:i,children:"Cancel"}),e.jsx(a,{type:"submit",children:"Add Post"})]})]})]})}export{S as default};
