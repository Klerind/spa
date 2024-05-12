import{r as n,j as t,W as P}from"./app-B3qUmDcx.js";import{s as W,a as _,u as V,e as A,_ as E,b as x,c as F,g as I,d as G,T as H,C as U,f as q,h as z,B as J,r as K,i as w,j as Q,L as T,k as X,l as Y,m as Z,F as ee,I as te,S as se,n as M,D as ae,o as oe,p as ne,q as S,t as ie}from"./DialogTitle-CiLZrzvP.js";const le=["className","component"];function re(e={}){const{themeId:s,defaultTheme:o,defaultClassName:a="MuiBox-root",generateClassName:l}=e,i=W("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(_);return n.forwardRef(function(c,f){const p=V(o),r=A(c),{className:g,component:v="div"}=r,b=E(r,le);return t.jsx(i,x({as:v,ref:f,className:F(g,l?l(a):a),theme:s&&p[s]||p},b))})}const de=I("MuiBox",["root"]),ce=de,ue=G(),pe=re({themeId:H,defaultTheme:ue,defaultClassName:ce.root,generateClassName:U.generate}),me=pe,ge=I("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),O=ge,xe=I("MuiListItemIcon",["root","alignItemsFlexStart"]),R=xe,fe=I("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),D=fe;function ve(e){return q("MuiMenuItem",e)}const be=I("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),h=be,Ce=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ye=(e,s)=>{const{ownerState:o}=e;return[s.root,o.dense&&s.dense,o.divider&&s.divider,!o.disableGutters&&s.gutters]},he=e=>{const{disabled:s,dense:o,divider:a,disableGutters:l,selected:i,classes:u}=e,c=Z({root:["root",o&&"dense",s&&"disabled",!l&&"gutters",a&&"divider",i&&"selected"]},ve,u);return x({},u,c)},Ie=z(J,{shouldForwardProp:e=>K(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ye})(({theme:e,ownerState:s})=>x({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:w(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:w(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${D.root}`]:{marginTop:0,marginBottom:0},[`& .${D.inset}`]:{paddingLeft:36},[`& .${R.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&x({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${R.root} svg`]:{fontSize:"1.25rem"}}))),$e=n.forwardRef(function(s,o){const a=Q({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:i="li",dense:u=!1,divider:d=!1,disableGutters:c=!1,focusVisibleClassName:f,role:p="menuitem",tabIndex:r,className:g}=a,v=E(a,Ce),b=n.useContext(T),B=n.useMemo(()=>({dense:u||b.dense||!1,disableGutters:c}),[b.dense,u,c]),$=n.useRef(null);X(()=>{l&&$.current&&$.current.focus()},[l]);const N=x({},a,{dense:B.dense,divider:d,disableGutters:c}),C=he(a),y=Y($,o);let j;return a.disabled||(j=r!==void 0?r:-1),t.jsx(T.Provider,{value:B,children:t.jsx(Ie,x({ref:y,role:p,tabIndex:j,component:i,focusVisibleClassName:F(C.focusVisible,f),className:F(C.root,g)},v,{ownerState:N,classes:C}))})}),je=$e;function we({menuItems:e,type:s,setType:o}){const a=i=>{o(i.target.value)},l=e.map(i=>t.jsx(je,{value:i.field_type_id,children:i.type}));return t.jsx(me,{sx:{minWidth:120},children:t.jsxs(ee,{fullWidth:!0,children:[t.jsx(te,{id:"demo-simple-select-label",children:"Select type"}),t.jsxs(se,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Age",onChange:a,children:[" ",l]})]})})}function Fe({fieldsType:e}){const[s,o]=n.useState(!1),[a,l]=n.useState(""),[i,u]=n.useState(null),[d,c]=n.useState(null),f=n.useRef(),p=n.useRef(),{data:r,setData:g,put:v,delete:b,processing:B,reset:$,errors:N}=P({widget:"",field:""}),C=()=>{o(!0)},y=()=>{o(!1)},j=()=>{r.type=a;let m=n.createElement("div",null,n.createElement("label",null,"label"));i.push(m);let k=i.map(L=>L);console.log(k),c(k)};return t.jsxs(n.Fragment,{children:[t.jsx(M,{variant:"outlined",onClick:C,children:"Create Widget"}),t.jsxs(ae,{open:s,onClose:y,PaperProps:{component:"form",onSubmit:m=>{m.preventDefault(),console.log(r.widget),v(route("widget.sendwidgetName")),y()}},children:[t.jsx(oe,{children:"New widget"}),t.jsxs(ne,{children:[t.jsx(S,{autoFocus:!0,required:!0,margin:"dense",id:"widget",name:"widget",label:"Widget name",type:"text",ref:f,value:r.widget,onChange:m=>g("widget",m.target.value),fullWidth:!0,variant:"standard"}),t.jsx(S,{autoFocus:!0,required:!0,margin:"dense",id:"field",name:"field",label:"Field name",type:"text",ref:p,value:r.field,onChange:m=>g("field",m.target.value),fullWidth:!0,variant:"standard"}),t.jsx(we,{menuItems:e,type:a,setType:l}),t.jsx(M,{onClick:j,className:"mt-6 flex justify-end",children:"Add Field"}),t.jsx("input",{type:"checkbox",name:"picture",value:"1"}),t.jsx("label",{children:"picture"}),t.jsx("a",{onclick:"deleteField(event)",href:"#",children:"Delete"}),d]}),t.jsxs(ie,{children:[t.jsx(M,{onClick:y,children:"Cancel"}),t.jsx(M,{type:"submit",children:"Add New widget"})]})]})]})}export{Fe as default};
