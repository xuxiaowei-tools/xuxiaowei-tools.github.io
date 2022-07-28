import{A as M,a as $,O as V,s as p,z as k,o as m,f as z,a0 as I,g as O,h as w,X as U,Y as A,u as n,k as E,$ as f,a8 as Z,an as q,aa as G,ac as oe,C as y,B as ae,w as Q,aO as re,D as le,G as ie,m as X,aP as ue,r as S,aQ as F,T as ce,a1 as b,Z as N,a3 as H,a2 as de,F as pe,a6 as me,a9 as fe,aR as ge,aS as ye,H as j,aT as Y,ah as J,at as ve,aU as R,aV as Ce}from"./index.b6b5699c.js";import{u as be,b as he,a as Te,d as Ne}from"./el-input.24fc0038.js";const we=M({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Be=["textContent"],Se={name:"ElBadge"},ke=$({...Se,props:we,setup(s,{expose:t}){const e=s,o=V("badge"),a=p(()=>e.isDot?"":k(e.value)&&k(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(m(),z("div",{class:f(n(o).b())},[I(l.$slots,"default"),O(q,{name:`${n(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[U(E("sup",{class:f([n(o).e("content"),n(o).em("content",l.type),n(o).is("fixed",!!l.$slots.default),n(o).is("dot",l.isDot)]),textContent:Z(n(a))},null,10,Be),[[A,!l.hidden&&(n(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var ze=G(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ee=oe(ze),x={},xe=M({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:ae,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}});$({name:"ElConfigProvider",props:xe,setup(s,{slots:t}){Q(()=>s.message,o=>{Object.assign(x,o!=null?o:{})},{immediate:!0,deep:!0});const e=re(s);return()=>I(t,"default",{config:e==null?void 0:e.value})}});const K=["success","info","warning","error"],i=ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:"",id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:X?document.body:void 0}),Me=M({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:le,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:K,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),$e={destroy:()=>!0},c=ue([]),Ie=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let o;return t>0&&(o=c[t-1]),{current:e,prev:o}},Oe=s=>{const{prev:t}=Ie(s);return t?t.vm.exposeProxy.bottom:0},_e=["id"],Pe=["innerHTML"],De={name:"ElMessage"},Le=$({...De,props:Me,emits:$e,setup(s,{expose:t}){const e=s,{Close:o}=ge,a=V("message"),l=S(),u=S(!1),g=S(0);let d;const h=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),_=p(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),C=p(()=>e.icon||F[e.type]||""),ee=p(()=>Oe(e.id)),P=p(()=>e.offset+ee.value),se=p(()=>g.value+P.value),te=p(()=>({top:`${P.value}px`,zIndex:e.zIndex}));function B(){e.duration!==0&&({stop:d}=ye(()=>{T()},e.duration))}function D(){d==null||d()}function T(){u.value=!1}function ne({code:r}){r===Te.esc&&T()}return ce(()=>{B(),u.value=!0}),Q(()=>e.repeatNum,()=>{D(),B()}),be(document,"keydown",ne),he(l,()=>{g.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:se,close:T}),(r,L)=>(m(),b(q,{name:n(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:L[0]||(L[0]=Ue=>r.$emit("destroy")),persisted:""},{default:w(()=>[U(E("div",{id:r.id,ref_key:"messageRef",ref:l,class:f([n(a).b(),{[n(a).m(r.type)]:r.type&&!r.icon},n(a).is("center",r.center),n(a).is("closable",r.showClose),r.customClass]),style:fe(n(te)),role:"alert",onMouseenter:D,onMouseleave:B},[r.repeatNum>1?(m(),b(n(Ee),{key:0,value:r.repeatNum,type:n(h),class:f(n(a).e("badge"))},null,8,["value","type","class"])):N("v-if",!0),n(C)?(m(),b(n(H),{key:1,class:f([n(a).e("icon"),n(_)])},{default:w(()=>[(m(),b(de(n(C))))]),_:1},8,["class"])):N("v-if",!0),I(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(m(),z(pe,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:f(n(a).e("content")),innerHTML:r.message},null,10,Pe)],2112)):(m(),z("p",{key:0,class:f(n(a).e("content"))},Z(r.message),3))]),r.showClose?(m(),b(n(H),{key:2,class:f(n(a).e("closeBtn")),onClick:me(T,["stop"])},{default:w(()=>[O(n(o))]),_:1},8,["class","onClick"])):N("v-if",!0)],46,_e),[[A,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=G(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let He=1;const W=s=>{const t=!s||j(s)||Y(s)||J(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(j(e.appendTo)){let o=document.querySelector(e.appendTo);ve(o)||(o=document.body),e.appendTo=o}return e},je=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Re=({appendTo:s,...t},e)=>{const{nextZIndex:o}=Ne(),a=`message_${He++}`,l=t.onClose,u=document.createElement("div"),g={...t,zIndex:o()+t.zIndex,id:a,onClose:()=>{l==null||l(),je(C)},onDestroy:()=>{R(null,u)}},d=O(Fe,g,J(g.message)||Y(g.message)?{default:g.message}:null);d.appContext=e||v._context,R(d,u),s.appendChild(u.firstElementChild);const h=d.component,C={id:a,vnode:d,vm:h,handler:{close:()=>{h.exposeProxy.visible=!1}},props:d.component.props};return C},v=(s={},t)=>{if(!X)return{close:()=>{}};if(k(x.max)&&c.length>=x.max)return{close:()=>{}};const e=W(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Re(e,t);return c.push(o),o.handler};K.forEach(s=>{v[s]=(t={},e)=>{const o=W(t);return v({...o,type:s},e)}});function Ve(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ve;v._context=null;const qe=Ce(v,"$message");export{qe as E};
