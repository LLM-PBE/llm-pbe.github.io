(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{9560:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/benchmark",function(){return n(3703)}])},3703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var o=n(5893),i=n(7294),a=n(2191),r=n(8590),l=n(8565);function c(e,t){return n=>{if("string"!=typeof n||0===n.trim().length)throw Error(t);return`${e}-${n}`}}var s=n(9429),d=n(3637),u=n(987),h=n(9581),m=n(8952);function v({style:e,size:t=16,...n}){return i.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,l.h)(t),height:(0,l.h)(t),display:"block"},...n},i.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.displayName="@mantine/core/AccordionChevron";var p=n(9535),f=n(679);let[g,y]=(0,f.R)("Accordion component was not found in the tree"),[b,k]=(0,f.R)("Accordion.Item component was not found in the tree");var w={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};let _={},x=(0,p.d)((e,t)=>{let{classNames:n,className:o,style:a,styles:r,vars:l,value:c,...s}=(0,u.w)("AccordionItem",_,e),d=y();return i.createElement(b,{value:{value:c}},i.createElement(m.x,{ref:t,mod:{active:d.isItemActive(c)},...d.getStyles("item",{className:o,classNames:n,styles:r,style:a,variant:d.variant}),...s}))});x.displayName="@mantine/core/AccordionItem",x.classes=w;var C=n(8554),A=n(5984),E=n(3935),j=n(700),S=n(6645);function M(e){return e?.current?e.current.scrollHeight:"auto"}let I="undefined"!=typeof window&&window.requestAnimationFrame,N={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},R=(0,p.d)((e,t)=>{let{children:n,in:o,transitionDuration:a,transitionTimingFunction:r,style:l,onTransitionEnd:c,animateOpacity:s,...d}=(0,u.w)("Collapse",N,e),h=(0,A.rZ)(),v=(0,C.J)(),p=h.respectReducedMotion&&v?0:a,f=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:o}){let a=(0,i.useRef)(null),r={display:"none",height:0,overflow:"hidden"},[l,c]=(0,i.useState)(o?{}:r),s=e=>{(0,E.flushSync)(()=>c(e))},d=e=>{s(t=>({...t,...e}))};function u(n){let o=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(n);return{transition:`height ${o}ms ${t}`}}(0,j.l)(()=>{"function"==typeof I&&(o?I(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),I(()=>{let e=M(a);d({...u(e),height:e})})}):I(()=>{let e=M(a);d({...u(e),willChange:"height",height:e}),I(()=>d({height:0,overflow:"hidden"}))}))},[o]);let h=e=>{if(e.target===a.current&&"height"===e.propertyName){if(o){let e=M(a);e===l.height?s({}):d({height:e}),n()}else 0===l.height&&(s(r),n())}};return function({style:e={},refKey:t="ref",...n}={}){let i=n[t];return{"aria-hidden":!o,...n,[t]:(0,S.lq)(a,i),onTransitionEnd:h,style:{boxSizing:"border-box",...e,...l}}}}({opened:o,transitionDuration:p,transitionTimingFunction:r,onTransitionEnd:c});return 0===p?o?i.createElement(m.x,{...d},n):null:i.createElement(m.x,{...f({style:function e(t,n){return Array.isArray(t)?[...t].reduce((t,o)=>({...t,...e(o,n)}),{}):"function"==typeof t?t(n):null==t?{}:t}(l,h),ref:t,...d})},i.createElement("div",{style:{opacity:o||!s?1:0,transition:s?`opacity ${p}ms ${r}`:"none"}},n))});R.displayName="@mantine/core/Collapse";let $={},D=(0,p.d)((e,t)=>{let{classNames:n,className:o,style:a,styles:r,vars:l,children:c,...s}=(0,u.w)("AccordionPanel",$,e),{value:d}=k(),h=y();return i.createElement(R,{ref:t,...h.getStyles("panel",{className:o,classNames:n,style:a,styles:r}),...s,in:h.isItemActive(d),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(d),"aria-labelledby":h.getControlId(d)},i.createElement("div",{...h.getStyles("content",{classNames:n,styles:r})},c))});D.displayName="@mantine/core/AccordionPanel",D.classes=w;var P=n(3552),T=n(1166);let F={},Z=(0,p.d)((e,t)=>{let{classNames:n,className:o,style:a,styles:r,vars:l,chevron:c,icon:s,onClick:d,onKeyDown:h,children:v,disabled:p,...f}=(0,u.w)("AccordionControl",F,e),{value:g}=k(),b=y(),w=b.isItemActive(g),_="number"==typeof b.order,x=`h${b.order}`,C=i.createElement(T.k,{...f,...b.getStyles("control",{className:o,classNames:n,style:a,styles:r,variant:b.variant}),unstyled:b.unstyled,mod:["accordion-control",{active:w,"chevron-position":b.chevronPosition,disabled:p}],ref:t,onClick:e=>{d?.(e),b.onChange(g)},type:"button",disabled:p,"aria-expanded":w,"aria-controls":b.getRegionId(g),id:b.getControlId(g),onKeyDown:(0,P.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:b.loop,orientation:"vertical",onKeyDown:h})},i.createElement(m.x,{component:"span",mod:{rotate:!b.disableChevronRotation&&w,position:b.chevronPosition},...b.getStyles("chevron",{classNames:n,styles:r})},c||b.chevron),i.createElement("span",{...b.getStyles("label",{classNames:n,styles:r})},v),s&&i.createElement(m.x,{component:"span",mod:{"chevron-position":b.chevronPosition},...b.getStyles("icon",{classNames:n,styles:r})},s));return _?i.createElement(x,{...b.getStyles("itemTitle",{classNames:n,styles:r})},C):C});Z.displayName="@mantine/core/AccordionControl",Z.classes=w;let z={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:i.createElement(v,null)},H=(0,d.Z)((e,{transitionDuration:t,chevronSize:n,radius:o})=>({root:{"--accordion-transition-duration":void 0===t?void 0:`${t}ms`,"--accordion-chevron-size":void 0===n?void 0:(0,l.h)(n),"--accordion-radius":void 0===o?void 0:(0,s.H5)(o)}}));function L(e){let t=(0,u.w)("Accordion",z,e),{classNames:n,className:o,style:l,styles:s,unstyled:d,vars:v,children:p,multiple:f,value:y,defaultValue:b,onChange:k,id:_,loop:x,transitionDuration:C,disableChevronRotation:A,chevronPosition:E,chevronSize:j,order:S,chevron:M,variant:I,radius:N,...R}=t,$=(0,a.M)(_),[D,P]=(0,r.C)({value:y,defaultValue:b,finalValue:f?[]:null,onChange:k}),T=(0,h.y)({name:"Accordion",classes:w,props:t,className:o,style:l,classNames:n,styles:s,unstyled:d,vars:v,varsResolver:H});return i.createElement(g,{value:{isItemActive:e=>Array.isArray(D)?D.includes(e):e===D,onChange:e=>{P(Array.isArray(D)?D.includes(e)?D.filter(t=>t!==e):[...D,e]:e===D?null:e)},getControlId:c(`${$}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:c(`${$}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:C,disableChevronRotation:A,chevronPosition:E,order:S,chevron:M,loop:x,getStyles:T,variant:I,unstyled:d}},i.createElement(m.x,{...T("root"),id:$,...R,variant:I,"data-accordion":!0},p))}L.extend=e=>e,L.classes=w,L.displayName="@mantine/core/Accordion",L.Item=x,L.Panel=D,L.Control=Z,L.Chevron=v;var B=n(3078),O=n(8008),J=n(8207),W=n(2290),q=n.n(W),K=n(853),V=(0,K.Z)("ghost","IconGhost",[["path",{d:"M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7",key:"svg-0"}],["path",{d:"M10 10l.01 0",key:"svg-1"}],["path",{d:"M14 10l.01 0",key:"svg-2"}],["path",{d:"M10 14a3.5 3.5 0 0 0 4 0",key:"svg-3"}]]),G=(0,K.Z)("scale","IconScale",[["path",{d:"M7 20l10 0",key:"svg-0"}],["path",{d:"M6 6l6 -1l6 1",key:"svg-1"}],["path",{d:"M12 3l0 17",key:"svg-2"}],["path",{d:"M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",key:"svg-3"}],["path",{d:"M21 12l-3 -6l-3 6a3 3 0 0 0 6 0",key:"svg-4"}]]),X=(0,K.Z)("shield-half-filled","IconShieldHalfFilled",[["path",{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",key:"svg-0"}],["path",{d:"M12 3v18",key:"svg-1"}],["path",{d:"M12 11h8.9",key:"svg-2"}],["path",{d:"M12 8h8.9",key:"svg-3"}],["path",{d:"M12 5h3.1",key:"svg-4"}],["path",{d:"M12 17h6.2",key:"svg-5"}],["path",{d:"M12 14h8",key:"svg-6"}]]),Q=n(4106);let U=[{emoji:(0,o.jsx)(V,{}),value:"Privacy",description:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Q.default,{})})},{emoji:(0,o.jsx)(G,{}),value:"Faireness",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:(0,o.jsx)(X,{}),value:"Adversial Robustness",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}];function Y(){let e=U.map(e=>(0,o.jsxs)(L.Item,{value:e.value,children:[(0,o.jsx)(L.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(L.Panel,{children:e.description})]},e.value));return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{height:(0,l.h)(56)},children:[" "," "]}),(0,o.jsxs)(B.W,{children:[(0,o.jsx)(O.D,{order:1,className:q().pagetitle,children:"Benchmark"}),(0,o.jsx)(J.K,{bg:"var(--mantine-color-body)",gap:"sm",children:(0,o.jsx)(L,{variant:"contained",radius:"md",defaultValue:"Apples",children:e})})]})]})}},4106:function(e,t,n){"use strict";n.r(t);var o=n(5893),i=n(3148),a=n(6495);i.kL.register(i.od,i.l7,i.jn,i.u,i.De),t.default=()=>(0,o.jsx)("div",{style:{position:"relative",height:"400px",width:"100%"},children:(0,o.jsx)(a.Fk,{data:{labels:["January","February","March","April","May","June","July","August","September","October","Novemeber","December"],datasets:[{label:"Dataset 1",data:[10,20,30,40,50,60,70,80,90,100,90,80],borderColor:"red",backgroundColor:"#ff0000"},{label:"Dataset 2",data:[100,90,80,70,60,50,40,30,20,10,2,4],borderColor:"blue",backgroundColor:"#0000ff"}]},options:{maintainAspectRatio:!1,aspectRatio:2,responsive:!0,interaction:{mode:"index"},plugins:{legend:{display:!0},title:{display:!0,text:"Radar Chart Demo"}}}})})},2290:function(e){e.exports={pagetitle:"common_pagetitle__4xBA6",block_orange:"common_block_orange__1r4bT",block_red:"common_block_red__sfVw_",block_green:"common_block_green__4w83L",block_blue:"common_block_blue__Ru_Ps"}},8207:function(e,t,n){"use strict";n.d(t,{K:function(){return m}});var o=n(7294),i=n(9429),a=n(3637),r=n(987),l=n(9581),c=n(8952),s=n(9535),d={root:"m-6d731127"};let u={gap:"md",align:"stretch",justify:"flex-start"},h=(0,a.Z)((e,{gap:t,align:n,justify:o})=>({root:{"--stack-gap":(0,i.bG)(t),"--stack-align":n,"--stack-justify":o}})),m=(0,s.d)((e,t)=>{let n=(0,r.w)("Stack",u,e),{classNames:i,className:a,style:s,styles:m,unstyled:v,vars:p,align:f,justify:g,gap:y,variant:b,...k}=n,w=(0,l.y)({name:"Stack",props:n,classes:d,className:a,style:s,classNames:i,styles:m,unstyled:v,vars:p,varsResolver:h});return o.createElement(c.x,{ref:t,...w("root"),variant:b,...k})});m.classes=d,m.displayName="@mantine/core/Stack"},8008:function(e,t,n){"use strict";n.d(t,{D:function(){return v}});var o=n(7294),i=n(3637),a=n(987),r=n(9581),l=n(8952),c=n(9535),s=n(8565);let d=["h1","h2","h3","h4","h5","h6"];var u={root:"m-8a5d1357"};let h={order:1},m=(0,i.Z)((e,{order:t,size:n,lineClamp:o})=>{let i=function(e,t){let n=void 0!==t?t:`h${e}`;return d.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:{fontSize:(0,s.h)(n),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,n);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0}}}),v=(0,c.d)((e,t)=>{let n=(0,a.w)("Title",h,e),{classNames:i,className:c,style:s,styles:d,unstyled:v,order:p,vars:f,size:g,variant:y,lineClamp:b,...k}=n,w=(0,r.y)({name:"Title",props:n,classes:u,className:c,style:s,classNames:i,styles:d,unstyled:v,vars:f,varsResolver:m});return[1,2,3,4,5,6].includes(p)?o.createElement(l.x,{...w("root"),component:`h${p}`,variant:y,ref:t,mod:{order:p,"data-line-clamp":"number"==typeof b},size:g,...k}):null});v.classes=u,v.displayName="@mantine/core/Title"}},function(e){e.O(0,[196,853,774,888,179],function(){return e(e.s=9560)}),_N_E=e.O()}]);