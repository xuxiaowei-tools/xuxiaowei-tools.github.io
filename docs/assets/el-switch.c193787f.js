import{D as R,X as Y,ab as C,B as S,V,d as $,G as x,s as v,r as T,j as E,o as ee,a as s,c as u,e as N,u as a,K as c,ac as ae,m as d,w as h,J as k,L as l,t as w,F,b as te,M as K,a8 as ie,z as se,Z as ne,A as oe,ad as O,P as le}from"./index.2dbaad55.js";import{b as U,U as B,C as P,I as D,e as re,f as ce,h as ue,d as de,j as ve,k as fe,g as m,l as pe,t as he}from"./el-input.4c92a3f9.js";import{i as me,u as ye}from"./el-button.b21c14f9.js";const be=R({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:U,default:""},inactiveIcon:{type:U,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Y(Function)},size:{type:String,validator:me},tabindex:{type:[String,Number]}}),ge={[B]:o=>C(o)||S(o)||V(o),[P]:o=>C(o)||S(o)||V(o),[D]:o=>C(o)||S(o)||V(o)},ke=["onClick"],we=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ce=["aria-hidden"],Ie=["aria-hidden"],Se=["aria-hidden"],Ve=["aria-hidden"],Te={name:"ElSwitch"},Ee=$({...Te,props:be,emits:ge,setup(o,{expose:j,emit:f}){const i=o,z="ElSwitch",G=ne(),{formItem:y}=re(),L=ce(),t=x("switch");ye({from:'"value"',replacement:'"model-value" or "v-model"',scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},v(()=>{var e;return!!((e=G.vnode.props)!=null&&e.value)}));const{inputId:H}=ue(i,{formItemContext:y}),b=de(v(()=>i.loading)),I=T(i.modelValue!==!1),p=T(),J=T(),W=v(()=>[t.b(),t.m(L.value),t.is("disabled",b.value),t.is("checked",n.value)]),X=v(()=>({width:ve(i.width)}));E(()=>i.modelValue,()=>{I.value=!0}),E(()=>i.value,()=>{I.value=!1});const _=v(()=>I.value?i.modelValue:i.value),n=v(()=>_.value===i.activeValue);[i.activeValue,i.inactiveValue].includes(_.value)||(f(B,i.inactiveValue),f(P,i.inactiveValue),f(D,i.inactiveValue)),E(n,e=>{var r;p.value.checked=e,i.validateEvent&&((r=y==null?void 0:y.validate)==null||r.call(y,"change").catch(Q=>fe()))});const g=()=>{const e=n.value?i.inactiveValue:i.activeValue;f(B,e),f(P,e),f(D,e),oe(()=>{p.value.checked=n.value})},M=()=>{if(b.value)return;const{beforeChange:e}=i;if(!e){g();return}const r=e();[O(r),C(r)].includes(!0)||he(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),O(r)?r.then(A=>{A&&g()}).catch(A=>{}):r&&g()},Z=v(()=>t.cssVarBlock({...i.activeColor?{"on-color":i.activeColor}:null,...i.inactiveColor?{"off-color":i.inactiveColor}:null,...i.borderColor?{"border-color":i.borderColor}:null})),q=()=>{var e,r;(r=(e=p.value)==null?void 0:e.focus)==null||r.call(e)};return ee(()=>{p.value.checked=n.value}),j({focus:q}),(e,r)=>(s(),u("div",{class:c(a(W)),style:K(a(Z)),onClick:ie(M,["prevent"])},[N("input",{id:a(H),ref_key:"input",ref:p,class:c(a(t).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(b),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(b),tabindex:e.tabindex,onChange:g,onKeydown:ae(M,["enter"])},null,42,we),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(s(),u("span",{key:0,class:c([a(t).e("label"),a(t).em("label","left"),a(t).is("active",!a(n))])},[e.inactiveIcon?(s(),d(a(m),{key:0},{default:h(()=>[(s(),d(k(e.inactiveIcon)))]),_:1})):l("v-if",!0),!e.inactiveIcon&&e.inactiveText?(s(),u("span",{key:1,"aria-hidden":a(n)},w(e.inactiveText),9,Ce)):l("v-if",!0)],2)):l("v-if",!0),N("span",{ref_key:"core",ref:J,class:c(a(t).e("core")),style:K(a(X))},[e.inlinePrompt?(s(),u("div",{key:0,class:c(a(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(s(),u(F,{key:0},[e.activeIcon?(s(),d(a(m),{key:0,class:c([a(t).is("icon"),a(n)?a(t).is("show"):a(t).is("hide")])},{default:h(()=>[(s(),d(k(e.activeIcon)))]),_:1},8,["class"])):l("v-if",!0),e.inactiveIcon?(s(),d(a(m),{key:1,class:c([a(t).is("icon"),a(n)?a(t).is("hide"):a(t).is("show")])},{default:h(()=>[(s(),d(k(e.inactiveIcon)))]),_:1},8,["class"])):l("v-if",!0)],64)):e.activeText||e.inactiveIcon?(s(),u(F,{key:1},[e.activeText?(s(),u("span",{key:0,class:c([a(t).is("text"),a(n)?a(t).is("show"):a(t).is("hide")]),"aria-hidden":!a(n)},w(e.activeText.substring(0,3)),11,Ie)):l("v-if",!0),e.inactiveText?(s(),u("span",{key:1,class:c([a(t).is("text"),a(n)?a(t).is("hide"):a(t).is("show")]),"aria-hidden":a(n)},w(e.inactiveText.substring(0,3)),11,Se)):l("v-if",!0)],64)):l("v-if",!0)],2)):l("v-if",!0),N("div",{class:c(a(t).e("action"))},[e.loading?(s(),d(a(m),{key:0,class:c(a(t).is("loading"))},{default:h(()=>[te(a(pe))]),_:1},8,["class"])):l("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(s(),u("span",{key:1,class:c([a(t).e("label"),a(t).em("label","right"),a(t).is("active",a(n))])},[e.activeIcon?(s(),d(a(m),{key:0},{default:h(()=>[(s(),d(k(e.activeIcon)))]),_:1})):l("v-if",!0),!e.activeIcon&&e.activeText?(s(),u("span",{key:1,"aria-hidden":!a(n)},w(e.activeText),9,Ve)):l("v-if",!0)],2)):l("v-if",!0)],14,ke))}});var Ne=se(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const ze=le(Ne);export{ze as E};
//# sourceMappingURL=el-switch.c193787f.js.map
