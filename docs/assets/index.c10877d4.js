import{d as D,r as d,b as E,o as B,c as S,g as c,e as t,f as n,i as V}from"./index.c84791cf.js";import{E as b}from"./el-input.d9807f6e.js";import{E as y,a as k}from"./el-select.da2743a6.js";const C={class:"ma max-w-960px px-30px py-30px mt-50px"},U={class:"flex justify-center lh-30px color-#333"},N=c("div",{class:"w-80px block text-right"},[c("span",null,"\u65F6\u95F4\u6233\uFF1A")],-1),T=V("\u8F6C\u6362"),I={class:"flex justify-center lh-30px color-#333 mt-30px"},$=c("div",{class:"w-80px block text-right"},[c("span",null,"\u65F6\u95F4\uFF1A")],-1),A=V("\u73B0\u5728"),j=V("\u8F6C\u6362"),q=D({__name:"index",setup(P){const f=e=>{const l=new Date(e),a=new Date(l),m=a.getFullYear(),u=a.getMonth()+1,s=a.getDate();return m+"-"+(u<10?"0"+u:u)+"-"+(s<10?"0"+s:s)+" "+a.toTimeString().slice(0,8)},p=d(null),r=d(""),v=d("1"),g=()=>{let e="";if(v.value==="1"?e=p.value:e=p.value+"000",(e==null?void 0:e.length)&&(e==null?void 0:e.length)>16){r.value="\u8F93\u5165\u7684\u65F6\u95F4\u6233\u592A\u957F\u4E86";return}r.value=f(parseInt(e))},i=d(""),_=d(""),x=d("1"),F=()=>{_.value=x.value==="1"?new Date(i.value).getTime():parseInt((new Date(i.value).getTime()/1e3).toString())},w=()=>{i.value=f(Date.now())},h=e=>{if(e!=null)return e.toString().replace(/[^\d.]/g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^\./g,"")};return(e,l)=>{const a=y,m=k,u=b,s=E;return B(),S("div",C,[c("div",U,[N,t(u,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=o=>p.value=o),oninput:p.value=h(p.value),class:"flex-1"},{append:n(()=>[t(m,{modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=o=>v.value=o),placeholder:"Select",style:{width:"80px"}},{default:n(()=>[t(a,{label:"\u6BEB\u79D2",value:"1"}),t(a,{label:"\u79D2",value:"2"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","oninput"]),t(s,{onClick:g,class:"mx-10px"},{default:n(()=>[T]),_:1}),t(u,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=o=>r.value=o),class:"flex-1"},null,8,["modelValue"])]),c("div",I,[$,t(u,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=o=>i.value=o),class:"flex-1"},{append:n(()=>[t(s,{onClick:w},{default:n(()=>[A]),_:1})]),_:1},8,["modelValue"]),t(s,{onClick:F,class:"mx-10px"},{default:n(()=>[j]),_:1}),t(u,{modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=o=>_.value=o),class:"flex-1"},{append:n(()=>[t(m,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=o=>x.value=o),placeholder:"Select",style:{width:"80px"}},{default:n(()=>[t(a,{label:"\u6BEB\u79D2",value:"1"}),t(a,{label:"\u79D2",value:"2"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])])}}});export{q as default};
