import{r as s,j as e,d as g}from"./app-BsYteHJ1.js";import{q as x}from"./transition-BpbgRvgS.js";const d=s.createContext(),i=({children:t})=>{const[r,o]=s.useState(!1),n=()=>{o(a=>!a)};return e.jsx(d.Provider,{value:{open:r,setOpen:o,toggleOpen:n},children:e.jsx("div",{className:"relative",children:t})})},p=({children:t})=>{const{open:r,setOpen:o,toggleOpen:n}=s.useContext(d);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:n,children:t}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},f=({align:t="right",width:r="48",contentClasses:o="py-1 bg-white",children:n})=>{const{open:a,setOpen:u}=s.useContext(d);let l="origin-top";t==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return r==="48"&&(c="w-48"),e.jsx(e.Fragment,{children:e.jsx(x,{as:s.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${c}`,onClick:()=>u(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:n})})})})},m=({className:t="",children:r,...o})=>e.jsx(g,{...o,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:r});i.Trigger=p;i.Content=f;i.Link=m;const v=i;function h({active:t=!1,className:r="",children:o,...n}){return e.jsx(g,{...n,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+r,children:o})}function j({active:t=!1,className:r="",children:o,...n}){return e.jsx(g,{...n,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${r}`,children:o})}export{v as D,h as N,j as R};
