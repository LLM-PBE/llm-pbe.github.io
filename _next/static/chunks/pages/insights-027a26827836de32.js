(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{4558:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights",function(){return t(358)}])},358:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return eu}});var i=t(5893),a=t(929),n=t(4410),l=t(7294),o=t(2191),c=t(8590),d=t(8565);function s(e,r){return t=>{if("string"!=typeof t||0===t.trim().length)throw Error(r);return`${e}-${t}`}}var h=t(9429),p=t(3637),m=t(987),u=t(9581),x=t(8952);function j({style:e,size:r=16,...t}){return l.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,d.h)(r),height:(0,d.h)(r),display:"block"},...t},l.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}j.displayName="@mantine/core/AccordionChevron";var g=t(9535),f=t(679);let[b,v]=(0,f.R)("Accordion component was not found in the tree"),[y,T]=(0,f.R)("Accordion.Item component was not found in the tree");var P={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};let _={},I=(0,g.d)((e,r)=>{let{classNames:t,className:i,style:a,styles:n,vars:o,value:c,...d}=(0,m.w)("AccordionItem",_,e),s=v();return l.createElement(y,{value:{value:c}},l.createElement(x.x,{ref:r,mod:{active:s.isItemActive(c)},...s.getStyles("item",{className:i,classNames:t,styles:n,style:a,variant:s.variant}),...d}))});I.displayName="@mantine/core/AccordionItem",I.classes=P;var k=t(8554),A=t(5984),w=t(3935),M=t(700),C=t(6645);function E(e){return e?.current?e.current.scrollHeight:"auto"}let L="undefined"!=typeof window&&window.requestAnimationFrame,R={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},D=(0,g.d)((e,r)=>{let{children:t,in:i,transitionDuration:a,transitionTimingFunction:n,style:o,onTransitionEnd:c,animateOpacity:d,...s}=(0,m.w)("Collapse",R,e),h=(0,A.rZ)(),p=(0,k.J)(),u=h.respectReducedMotion&&p?0:a,j=function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:t=()=>{},opened:i}){let a=(0,l.useRef)(null),n={display:"none",height:0,overflow:"hidden"},[o,c]=(0,l.useState)(i?{}:n),d=e=>{(0,w.flushSync)(()=>c(e))},s=e=>{d(r=>({...r,...e}))};function h(t){let i=e||function(e){if(!e||"string"==typeof e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}(t);return{transition:`height ${i}ms ${r}`}}(0,M.l)(()=>{"function"==typeof L&&(i?L(()=>{s({willChange:"height",display:"block",overflow:"hidden"}),L(()=>{let e=E(a);s({...h(e),height:e})})}):L(()=>{let e=E(a);s({...h(e),willChange:"height",height:e}),L(()=>s({height:0,overflow:"hidden"}))}))},[i]);let p=e=>{if(e.target===a.current&&"height"===e.propertyName){if(i){let e=E(a);e===o.height?d({}):s({height:e}),t()}else 0===o.height&&(d(n),t())}};return function({style:e={},refKey:r="ref",...t}={}){let n=t[r];return{"aria-hidden":!i,...t,[r]:(0,C.lq)(a,n),onTransitionEnd:p,style:{boxSizing:"border-box",...e,...o}}}}({opened:i,transitionDuration:u,transitionTimingFunction:n,onTransitionEnd:c});return 0===u?i?l.createElement(x.x,{...s},t):null:l.createElement(x.x,{...j({style:function e(r,t){return Array.isArray(r)?[...r].reduce((r,i)=>({...r,...e(i,t)}),{}):"function"==typeof r?r(t):null==r?{}:r}(o,h),ref:r,...s})},l.createElement("div",{style:{opacity:i||!d?1:0,transition:d?`opacity ${u}ms ${n}`:"none"}},t))});D.displayName="@mantine/core/Collapse";let S={},q=(0,g.d)((e,r)=>{let{classNames:t,className:i,style:a,styles:n,vars:o,children:c,...d}=(0,m.w)("AccordionPanel",S,e),{value:s}=T(),h=v();return l.createElement(D,{ref:r,...h.getStyles("panel",{className:i,classNames:t,style:a,styles:n}),...d,in:h.isItemActive(s),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(s),"aria-labelledby":h.getControlId(s)},l.createElement("div",{...h.getStyles("content",{classNames:t,styles:n})},c))});q.displayName="@mantine/core/AccordionPanel",q.classes=P;var N=t(3552),F=t(1166);let B={},H=(0,g.d)((e,r)=>{let{classNames:t,className:i,style:a,styles:n,vars:o,chevron:c,icon:d,onClick:s,onKeyDown:h,children:p,disabled:u,...j}=(0,m.w)("AccordionControl",B,e),{value:g}=T(),f=v(),b=f.isItemActive(g),y="number"==typeof f.order,P=`h${f.order}`,_=l.createElement(F.k,{...j,...f.getStyles("control",{className:i,classNames:t,style:a,styles:n,variant:f.variant}),unstyled:f.unstyled,mod:["accordion-control",{active:b,"chevron-position":f.chevronPosition,disabled:u}],ref:r,onClick:e=>{s?.(e),f.onChange(g)},type:"button",disabled:u,"aria-expanded":b,"aria-controls":f.getRegionId(g),id:f.getControlId(g),onKeyDown:(0,N.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:f.loop,orientation:"vertical",onKeyDown:h})},l.createElement(x.x,{component:"span",mod:{rotate:!f.disableChevronRotation&&b,position:f.chevronPosition},...f.getStyles("chevron",{classNames:t,styles:n})},c||f.chevron),l.createElement("span",{...f.getStyles("label",{classNames:t,styles:n})},p),d&&l.createElement(x.x,{component:"span",mod:{"chevron-position":f.chevronPosition},...f.getStyles("icon",{classNames:t,styles:n})},d));return y?l.createElement(P,{...f.getStyles("itemTitle",{classNames:t,styles:n})},_):_});H.displayName="@mantine/core/AccordionControl",H.classes=P;let z={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:l.createElement(j,null)},$=(0,p.Z)((e,{transitionDuration:r,chevronSize:t,radius:i})=>({root:{"--accordion-transition-duration":void 0===r?void 0:`${r}ms`,"--accordion-chevron-size":void 0===t?void 0:(0,d.h)(t),"--accordion-radius":void 0===i?void 0:(0,h.H5)(i)}}));function O(e){let r=(0,m.w)("Accordion",z,e),{classNames:t,className:i,style:a,styles:n,unstyled:d,vars:h,children:p,multiple:j,value:g,defaultValue:f,onChange:v,id:y,loop:T,transitionDuration:_,disableChevronRotation:I,chevronPosition:k,chevronSize:A,order:w,chevron:M,variant:C,radius:E,...L}=r,R=(0,o.M)(y),[D,S]=(0,c.C)({value:g,defaultValue:f,finalValue:j?[]:null,onChange:v}),q=(0,u.y)({name:"Accordion",classes:P,props:r,className:i,style:a,classNames:t,styles:n,unstyled:d,vars:h,varsResolver:$});return l.createElement(b,{value:{isItemActive:e=>Array.isArray(D)?D.includes(e):e===D,onChange:e=>{S(Array.isArray(D)?D.includes(e)?D.filter(r=>r!==e):[...D,e]:e===D?null:e)},getControlId:s(`${R}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:s(`${R}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:_,disableChevronRotation:I,chevronPosition:k,order:w,chevron:M,loop:T,getStyles:q,variant:C,unstyled:d}},l.createElement(x.x,{...q("root"),id:R,...L,variant:C,"data-accordion":!0},p))}O.extend=e=>e,O.classes=P,O.displayName="@mantine/core/Accordion",O.Item=I,O.Panel=q,O.Control=H,O.Chevron=j;var Z=t(3078),G=t(8008),U=t(8207),W=t(2290),K=t.n(W),V=t(853),J=(0,V.Z)("dimensions","IconDimensions",[["path",{d:"M3 5h11",key:"svg-0"}],["path",{d:"M12 7l2 -2l-2 -2",key:"svg-1"}],["path",{d:"M5 3l-2 2l2 2",key:"svg-2"}],["path",{d:"M19 10v11",key:"svg-3"}],["path",{d:"M17 19l2 2l2 -2",key:"svg-4"}],["path",{d:"M21 12l-2 -2l-2 2",key:"svg-5"}],["path",{d:"M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z",key:"svg-6"}]]),X=(0,V.Z)("feather","IconFeather",[["path",{d:"M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4",key:"svg-0"}],["path",{d:"M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4",key:"svg-1"}]]),Q=(0,V.Z)("clock-24","IconClock24",[["path",{d:"M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5",key:"svg-1"}],["path",{d:"M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",key:"svg-2"}],["path",{d:"M18 15v2a1 1 0 0 0 1 1h1",key:"svg-3"}],["path",{d:"M21 15v6",key:"svg-4"}]]),Y=(0,V.Z)("shield-lock","IconShieldLock",[["path",{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",key:"svg-0"}],["path",{d:"M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 12l0 2.5",key:"svg-2"}]]),ee=(0,V.Z)("temperature","IconTemperature",[["path",{d:"M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5",key:"svg-0"}],["path",{d:"M10 9l4 0",key:"svg-1"}]]),er=(0,V.Z)("alt","IconAlt",[["path",{d:"M4 16v-6a2 2 0 1 1 4 0v6",key:"svg-0"}],["path",{d:"M4 13h4",key:"svg-1"}],["path",{d:"M11 8v8h4",key:"svg-2"}],["path",{d:"M16 8h4",key:"svg-3"}],["path",{d:"M18 8v8",key:"svg-4"}]]),et=(0,V.Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),ei=(0,V.Z)("tank","IconTank",[["path",{d:"M2 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M6 12l1 -5h5l3 5",key:"svg-1"}],["path",{d:"M21 9l-7.8 0",key:"svg-2"}]]),ea=t(1329),en=t(413),el=t(806),eo=t(6750),ec=t(4249),ed=t(5679),es=t(3734),eh=t(5656),ep=t(4300);let em=[{emoji:(0,i.jsx)(J,{}),value:"Effect of Model Size",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ea.default,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.E,{radius:"md",src:"jailbreak.png",alt:"jailbreak",h:"auto",w:"100%",fit:"contain"}),(0,i.jsx)(n.x,{ta:"center",c:"dimmed",children:"Figure 3. The averaged jailbreaking success rate of different LLMs."})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{children:"As the size of LLMs increases, there is a decrease in their susceptibility to jailbreaking, likely due to more rigorous policy-related instruction tuning. Concurrently, these larger models exhibit an enhanced capability for data extraction, as a result of their advanced memorization capacities."})]})]})},{emoji:(0,i.jsx)(X,{}),value:"Effect of Data Characteristics",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(a.E,{radius:"md",src:"privacy_risks_of_different_snapshots.png",alt:"privacy risks",h:"auto",w:"50%",fit:"contain"})}),(0,i.jsx)(n.x,{ta:"center",c:"dimmed",children:"Figure 4. Privacy risks of different snapshots of GPT-3.5."}),(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{children:"Our findings reveal a nuanced interplay between PII length and data type in LLMs, impacting privacy risks. Longer PII sequences are less prone to accurate extraction but more easily identified in membership inference attacks, highlighting a trade-off between memorization and detectability. Additionally, the nature of the data – textual or numerical – significantly influences privacy vulnerability, with textual data being more susceptible to leakage. These insights emphasize the need for targeted privacy strategies that cater to the specific characteristics of different PII types in LLMs."})]})})},{emoji:(0,i.jsx)(Q,{}),value:"Privacy Risks over Time",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{children:"While there is a gradual reduction in the privacy risks associated with GPT-3.5 over time, the rate of this decrease is diminishing. Despite the improvements made in successive versions, the level of privacy risk associated with GPT-3.5 remains high. This underscores the need for ongoing vigilance and continuous enhancement in privacy measures as the model evolves."})]})})},{emoji:(0,i.jsx)(Y,{}),value:"Practicality of Privacy-Enhancing Technologies (PETs)",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways of MIA:"}),(0,i.jsx)("p",{children:"The PPL-based methods work well already when Refer and Neighbor attacks can slightly improve it. When models are fine-tuned with LoRA, all attacks are not better than random guesses in terms of AUC. However, the risks on LoRA are similar to those on full fine-tuning in terms of TPR@0.1%FPR."}),(0,i.jsx)("b",{children:"Takeaways of defense:"}),(0,i.jsx)("p",{children:"Parameter-efficient fine-tuning emerges as a highly effective strategy for mitigating the privacy risks associated with tuning data, especially when compared to the approach of fine-tuning the entire model. Additionally, DPSGD offers a better utility than scrubbing when providing a guarantee for privacy protection."})]})})},{emoji:(0,i.jsx)(ee,{color:"#1864AB"}),value:"Temperatures on Enron",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(en.default,{}),(0,i.jsx)("p",{children:"prompt=“Please conduct text continuation for the below context: [query]”"}),(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsxs)("p",{children:["Temperature ",(0,i.jsx)("code",{children:"0.5"})," leads to the highest data extraction accuracy for 7b & 70b ",(0,i.jsx)("code",{children:"llama2-chat"})]})]})})},{emoji:(0,i.jsx)(er,{color:"#1864AB"}),value:"Data extraction under different promps on Enron",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(el.default,{}),(0,i.jsx)("p",{children:"Note: “instruct+ [query]” prepends [query] with ”Please conduct text continuation for the below context:”."})]})})},{emoji:(0,i.jsx)(et,{color:"#1864AB"}),value:"Factors for gpt-3.5-0314. Data extraction on Enron",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(ed.default,{}),(0,i.jsx)("p",{children:"temperature = 0.7"}),(0,i.jsx)("p",{children:"prompt=“Please conduct text continuation for below context: [query]”"})]})})},{emoji:(0,i.jsx)(ei,{color:"#1864AB"}),value:"Membership Inference Attacks on Enron",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(ep.default,{}),(0,i.jsx)("p",{children:"The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance."}),(0,i.jsx)("p",{children:"Two metrics, AUC and TPR@0.1%FPR are reported for MIA. Refer and Neighbor attacks present non-trivial improvement compared to PPL in terms of TPR."}),(0,i.jsx)(n.x,{c:"red",children:"@Junyuan: Try a smaller fine-tuning set."})]})})},{emoji:(0,i.jsx)(ee,{color:"#862E9C"}),value:"Temperatures on ECHR",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(ec.default,{}),(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsxs)("p",{children:["Temperature ",(0,i.jsx)("code",{children:"0.9"})," leads to the highest data extraction accuracy for ",(0,i.jsx)("code",{children:"llama2-chat-7b"})]}),(0,i.jsxs)("p",{children:["Temperature ",(0,i.jsx)("code",{children:"0.01"})," leads to the highest data extraction accuracy for ",(0,i.jsx)("code",{children:"llama2-chat-70b"})]})]})})},{emoji:(0,i.jsx)(er,{color:"#862E9C"}),value:"Data extraction under different promps on ECHR",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:(0,i.jsx)(eo.default,{})})})},{emoji:(0,i.jsx)(et,{color:"#862E9C"}),value:"Factors for llama-2-7b-chat. Data extraction on ECHR",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(es.default,{}),(0,i.jsx)("p",{children:"temperature = 0.7"}),(0,i.jsx)("p",{children:"prompt=“[query]”"})]})})},{emoji:(0,i.jsx)(ei,{color:"#862E9C"}),value:"Membership Inference Attacks on ECHR",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(eh.default,{}),(0,i.jsx)("p",{children:"The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance."}),(0,i.jsx)("p",{children:" Two metrics, AUC and TPR@0.1%FPR are reported for MIA. "}),(0,i.jsx)("p",{children:"Although some attacks are effective in terms of AUC, they are less effective in TPR."})]})})}];function eu(){let e=em.map(e=>(0,i.jsxs)(O.Item,{value:e.value,children:[(0,i.jsx)(O.Control,{icon:e.emoji,children:e.value}),(0,i.jsx)(O.Panel,{children:e.description})]},e.value));return(0,i.jsxs)(Z.W,{children:[(0,i.jsx)(G.D,{order:1,className:K().pagetitle,children:"Insights"}),(0,i.jsx)(U.K,{bg:"var(--mantine-color-body)",gap:"sm",children:(0,i.jsx)(O,{variant:"contained",radius:"md",defaultValue:"Apples",children:e})})]})}},3734:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{PII:"name",factor:"PII location [front]",accuracy:(0,i.jsx)("b",{children:"34.6"}),accuracyCount:(0,i.jsx)("b",{children:"2.49"})},{PII:"name",factor:"PII location [middle]",accuracy:"4.63",accuracyCount:"1.23"},{PII:"name",factor:"PII location [end]",accuracy:"1.35",accuracyCount:"1.26"},{PII:"location",factor:"PII location [front]",accuracy:(0,i.jsx)("b",{children:"31.7"}),accuracyCount:"6.80"},{PII:"location",factor:"PII location [middle]",accuracy:"9.47",accuracyCount:"6.45"},{PII:"location",factor:"PII location [end]",accuracy:"8.89",accuracyCount:(0,i.jsx)("b",{children:"8.00"})},{PII:"date",factor:"PII location [front]",accuracy:(0,i.jsx)("b",{children:"9.99"}),accuracyCount:"5.45"},{PII:"date",factor:"PII location [middle]",accuracy:"6.83",accuracyCount:(0,i.jsx)("b",{children:"6.25"})},{PII:"date",factor:"PII location [end]",accuracy:"5.64",accuracyCount:"5.66"}].map((e,r)=>{let t,n;return(2==r||5==r)&&(t={borderBottom:"2pt solid #CED4DA;"}),0==r?n=(0,i.jsx)(a.i.Td,{rowSpan:3,children:"name"}):3==r?n=(0,i.jsx)(a.i.Td,{rowSpan:3,children:"location"}):6==r&&(n=(0,i.jsx)(a.i.Td,{rowSpan:3,children:"date"})),(0,i.jsxs)(a.i.Tr,{style:t,children:[n,(0,i.jsx)(a.i.Td,{children:e.factor}),(0,i.jsx)(a.i.Td,{children:e.accuracy}),(0,i.jsx)(a.i.Td,{children:e.accuracyCount})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 8. factors for “gpt-3.5-0314”. data extraction on Enron."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"PII"}),(0,i.jsx)(a.i.Th,{children:"Factor"}),(0,i.jsx)(a.i.Th,{children:"Accuracy"}),(0,i.jsx)(a.i.Th,{children:"Accuracy [count=1]"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},5679:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{tokenLength:"50",correct:"3.49",local:"12.51",domain:"9.41",average:"8.47"},{tokenLength:"100",correct:"4.17",local:"13.90",domain:"11.11",average:"9.72"},{tokenLength:"200",correct:"5.23",local:"14.74",domain:"13.06",average:"11.01"}].map((e,r)=>{let t;return 3==r&&(t={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:t,children:[(0,i.jsx)(a.i.Td,{children:e.tokenLength}),(0,i.jsx)(a.i.Td,{children:e.correct}),(0,i.jsx)(a.i.Td,{children:e.local}),(0,i.jsx)(a.i.Td,{children:e.domain}),(0,i.jsx)(a.i.Td,{children:e.average})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 6. factors for “gpt-3.5-0314”. data extraction on Enron."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Token Length"}),(0,i.jsx)(a.i.Th,{children:"Correct"}),(0,i.jsx)(a.i.Th,{children:"Local"}),(0,i.jsx)(a.i.Th,{children:"Domain"}),(0,i.jsx)(a.i.Th,{children:"Average"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},5656:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e={borderRight:"2pt solid #CED4DA;"},r=[{models:"GPT-2",pet:"none",memPpl:9.06,nonMemPpl:10.32,ppl:55.7,refer:54.9,lira:53.8,neighbor:"50.0",ppl_tpr:.9,refer_tpr:1.1,lira_tpr:.2,neighbor_tpr:.1},{models:"GPT-2",pet:"scrubbing",memPpl:22.87,nonMemPpl:25.09,ppl:54.1,refer:54.2,lira:53.6,neighbor:49.9,ppl_tpr:.7,refer_tpr:.6,lira_tpr:.1,neighbor_tpr:.5},{models:"GPT-2",pet:"DPSGD",memPpl:21.23,nonMemPpl:20.8,ppl:50.2,refer:"49.0",lira:48.8,neighbor:49.1,ppl_tpr:.1,refer_tpr:" 0.0",lira_tpr:.1,neighbor_tpr:.2},{models:"Llama 2 10 epoch",pet:"none",memPpl:2.83,nonMemPpl:37.84,ppl:95.6,refer:95.8,lira:"95.0",neighbor:67.4,ppl_tpr:12.2,refer_tpr:9.9,lira_tpr:1.3,neighbor_tpr:"1.0"},{models:"Llama 2",pet:"none",memPpl:4.25,nonMemPpl:4.89,ppl:59.4,refer:61.4,lira:"60.0",neighbor:49.8,ppl_tpr:.8,refer_tpr:.7,lira_tpr:.2,neighbor_tpr:.3},{models:"Llama 2 10 epoch",pet:"scrubbing",memPpl:6.04,nonMemPpl:8.28,ppl:69.6,refer:72.3,lira:71.3,neighbor:51.9,ppl_tpr:.7,refer_tpr:.7,lira_tpr:.1,neighbor_tpr:.2},{models:"Llama 2",pet:"scrubbing",memPpl:6.01,nonMemPpl:6.93,ppl:60.2,refer:62.6,lira:61.7,neighbor:49.8,ppl_tpr:.7,refer_tpr:.7,lira_tpr:.2,neighbor_tpr:.3},{models:"Llama 2 LoRA",pet:"none",memPpl:"5.50",nonMemPpl:"5.50",ppl:51.3,refer:49.6,lira:49.1,neighbor:48.9,ppl_tpr:.6,refer_tpr:.5,lira_tpr:.2,neighbor_tpr:.2},{models:"Llama 2 LoRA",pet:"scrubbing",memPpl:6.81,nonMemPpl:6.85,ppl:"51.0",refer:49.7,lira:49.5,neighbor:48.9,ppl_tpr:.9,refer_tpr:.5,lira_tpr:.1,neighbor_tpr:.5},{models:"Llama 2 LoRA",pet:"DPSGD",memPpl:5.88,nonMemPpl:5.86,ppl:"51.0",refer:49.1,lira:48.7,neighbor:"49.0",ppl_tpr:.5,refer_tpr:.7,lira_tpr:.1,neighbor_tpr:.3},{models:"Llama 2 Chat LoRA",pet:"none",memPpl:5.39,nonMemPpl:5.42,ppl:51.7,refer:49.9,lira:48.8,neighbor:48.8,ppl_tpr:.5,refer_tpr:.5,lira_tpr:.5,neighbor_tpr:.4},{models:"Llama 2 Chat LoRA",pet:"scrubbing",memPpl:7.27,nonMemPpl:7.33,ppl:51.1,refer:"49.0",lira:48.4,neighbor:48.8,ppl_tpr:.7,refer_tpr:.8,lira_tpr:.2,neighbor_tpr:.4},{models:"Llama 2 Chat LoRA",pet:"DPSGD",memPpl:6.61,nonMemPpl:6.59,ppl:50.9,refer:48.5,lira:47.6,neighbor:48.9,ppl_tpr:.3,refer_tpr:.2,lira_tpr:.1,neighbor_tpr:.2}].map((r,t)=>{let n;return(2==t||6==t||9==t)&&(n={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:n,children:[(0,i.jsx)(a.i.Td,{children:r.models}),(0,i.jsx)(a.i.Td,{style:e,children:r.pet}),(0,i.jsx)(a.i.Td,{children:r.memPpl}),(0,i.jsx)(a.i.Td,{style:e,children:r.nonMemPpl}),(0,i.jsxs)(a.i.Td,{children:[r.ppl,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.refer,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.lira,"%"]}),(0,i.jsxs)(a.i.Td,{style:e,children:[r.neighbor,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.ppl_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.refer_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.lira_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.neighbor_tpr,"%"]})]},t)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",style:{fontSize:"12px"},children:[(0,i.jsx)(a.i.Caption,{children:"Table 9. Membership Inference Attacks on ECHR."}),(0,i.jsxs)(a.i.Thead,{children:[(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{colSpan:2,style:e}),(0,i.jsx)(a.i.Th,{colSpan:2,children:"Perplexity"}),(0,i.jsx)(a.i.Th,{colSpan:4,children:"MIA AUC"}),(0,i.jsx)(a.i.Th,{colSpan:4,children:"MIA TPR@0.1%FPR"})]}),(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Models"}),(0,i.jsx)(a.i.Th,{style:e,children:"PET"}),(0,i.jsx)(a.i.Th,{children:"Mem PPL"}),(0,i.jsx)(a.i.Th,{style:e,children:"Non-Mem PPL"}),(0,i.jsx)(a.i.Th,{children:"PPL"}),(0,i.jsx)(a.i.Th,{children:"Refer"}),(0,i.jsx)(a.i.Th,{children:"LiRA"}),(0,i.jsx)(a.i.Th,{style:e,children:"Neighbor"}),(0,i.jsx)(a.i.Th,{children:"PPL"}),(0,i.jsx)(a.i.Th,{children:"Refer"}),(0,i.jsx)(a.i.Th,{children:"LiRA"}),(0,i.jsx)(a.i.Th,{children:"Neighbor"})]})]}),(0,i.jsx)(a.i.Tbody,{children:r})]})}},4300:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e={borderRight:"2pt solid #CED4DA;"},r=[{models:"Llama 2 10 epoch",pet:"none",memPpl:"2.90",nonMemPpl:8.03,ppl:60.8,refer:62.8,lira:64.1,neighbor:61.9,ppl_tpr:"0.0",refer_tpr:"0.0",lira_tpr:.1,neighbor_tpr:.2},{models:"Llama 2",pet:"none",memPpl:3.47,nonMemPpl:5.96,ppl:57.1,refer:59.5,lira:60.2,neighbor:57.8,ppl_tpr:"0.0",refer_tpr:"0.0",lira_tpr:.1,neighbor_tpr:"0.0"},{models:"Llama 2 10 epoch",pet:"scrubbing",memPpl:9.56,nonMemPpl:"15.10",ppl:56.5,refer:60.8,lira:60.9,neighbor:52.6,ppl_tpr:"0.0",refer_tpr:.3,lira_tpr:.3,neighbor_tpr:.2},{models:"Llama 2",pet:"scrubbing",memPpl:7.01,nonMemPpl:"9.30",ppl:54.57,refer:58.4,lira:58.6,neighbor:51.9,ppl_tpr:"0.0",refer_tpr:.1,lira_tpr:.3,neighbor_tpr:.2},{models:"Llama 2 LoRA",pet:"none",memPpl:8.85,nonMemPpl:9.81,ppl:49.5,refer:"50.0",lira:49.9,neighbor:50.8,ppl_tpr:"0.0",refer_tpr:.1,lira_tpr:"0.0",neighbor_tpr:.3},{models:"Llama 2 LoRA",pet:"scrubbing",memPpl:9.11,nonMemPpl:9.94,ppl:49.7,refer:49.4,lira:49.3,neighbor:50.7,ppl_tpr:"0.0",refer_tpr:.4,lira_tpr:.1,neighbor_tpr:.5},{models:"Llama 2 LoRA",pet:"DPSGD",memPpl:9.45,nonMemPpl:10.45,ppl:49.6,refer:50.2,lira:"50.0",neighbor:49.1,ppl_tpr:"0.0",refer_tpr:.1,lira_tpr:"0.0",neighbor_tpr:.2},{models:"Llama 2 Chat LoRA",pet:"none",memPpl:7.69,nonMemPpl:8.33,ppl:49.2,refer:49.6,lira:49.1,neighbor:50.6,ppl_tpr:.1,refer_tpr:.2,lira_tpr:.1,neighbor_tpr:.2},{models:"Llama 2 Chat LoRA",pet:"scrubbing",memPpl:9.75,nonMemPpl:10.46,ppl:49.6,refer:49.3,lira:49.1,neighbor:50.7,ppl_tpr:"0.0",refer_tpr:.3,lira_tpr:.1,neighbor_tpr:.4},{models:"Llama 2 Chat LoRA",pet:"DPSGD",memPpl:"10.40",nonMemPpl:"11.20",ppl:49.4,refer:49.7,lira:49.7,neighbor:49.3,ppl_tpr:"0.0",refer_tpr:"0.0",lira_tpr:.1,neighbor_tpr:.3}].map((r,t)=>{let n;return(3==t||6==t)&&(n={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:n,children:[(0,i.jsx)(a.i.Td,{children:r.models}),(0,i.jsx)(a.i.Td,{style:e,children:r.pet}),(0,i.jsx)(a.i.Td,{children:r.memPpl}),(0,i.jsx)(a.i.Td,{style:e,children:r.nonMemPpl}),(0,i.jsxs)(a.i.Td,{children:[r.ppl,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.refer,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.lira,"%"]}),(0,i.jsxs)(a.i.Td,{style:e,children:[r.neighbor,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.ppl_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.refer_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.lira_tpr,"%"]}),(0,i.jsxs)(a.i.Td,{children:[r.neighbor_tpr,"%"]})]},t)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",style:{fontSize:"12px"},children:[(0,i.jsx)(a.i.Caption,{children:"Table 10. Membership Inference Attacks on Enron."}),(0,i.jsxs)(a.i.Thead,{children:[(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{colSpan:2,style:e}),(0,i.jsx)(a.i.Th,{colSpan:2,children:"Perplexity"}),(0,i.jsx)(a.i.Th,{colSpan:4,children:"MIA AUC"}),(0,i.jsx)(a.i.Th,{colSpan:4,children:"MIA TPR@0.1%FPR"})]}),(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Models"}),(0,i.jsx)(a.i.Th,{style:e,children:"PET"}),(0,i.jsx)(a.i.Th,{children:"Mem PPL"}),(0,i.jsx)(a.i.Th,{style:e,children:"Non-Mem PPL"}),(0,i.jsx)(a.i.Th,{children:"PPL"}),(0,i.jsx)(a.i.Th,{children:"Refer"}),(0,i.jsx)(a.i.Th,{children:"LiRA"}),(0,i.jsx)(a.i.Th,{style:e,children:"Neighbor"}),(0,i.jsx)(a.i.Th,{children:"PPL"}),(0,i.jsx)(a.i.Th,{children:"Refer"}),(0,i.jsx)(a.i.Th,{children:"LiRA"}),(0,i.jsx)(a.i.Th,{children:"Neighbor"})]})]}),(0,i.jsx)(a.i.Tbody,{children:r})]})}},1329:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{model:"llama-2-70b-chat",correct:(0,i.jsx)("b",{children:"4.59"}),local:"13.68",domain:"14.25",average:"10.84"},{model:"llama-2-13b-chat",correct:"3.72",local:"12.42",domain:"13.77",average:"9.97"},{model:"llama-2-7b-chat",correct:"3.54",local:"12.24",domain:"12.75",average:"9.51"},{model:"vicuna-13b-v1.5",correct:(0,i.jsx)("b",{children:"4.02"}),local:"13.41",domain:"15.03",average:"10.82"},{model:"vicuna-7b-v1.5",correct:"3.54",local:"11.49",domain:"14.82",average:"9.95"},{model:"falcon-40b-instruct",correct:(0,i.jsx)("b",{children:"3.99"}),local:"12.00",domain:"13.38",average:"9.79"},{model:"falcon-7b-instruct",correct:"2.28",local:"9.06",domain:"11.07",average:"7.47"}].map((e,r)=>{let t;return(2==r||4==r)&&(t={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:t,children:[(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.correct}),(0,i.jsx)(a.i.Td,{children:e.local}),(0,i.jsx)(a.i.Td,{children:e.domain}),(0,i.jsx)(a.i.Td,{children:e.average})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table . The data extraction accuracy on Enron. “correct”, “local”, and ”domain” measures the extraction accuracy of the whole email address, the local part, and the domain part, respectively."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Model"}),(0,i.jsx)(a.i.Th,{children:"Correct"}),(0,i.jsx)(a.i.Th,{children:"Local"}),(0,i.jsx)(a.i.Th,{children:"Domain"}),(0,i.jsx)(a.i.Th,{children:"Average"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},6750:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{PII:"name",model:"llama-2-7b-chat",prompt:"instruct + [query]",accuracy:"10.6"},{PII:"name",model:"llama-2-7b-chat",prompt:"jailbreak prompt 1 + [query]",accuracy:"13.6"},{PII:"name",model:"llama-2-7b-chat",prompt:"jailbreak prompt 2 + [query]",accuracy:""},{PII:"name",model:"llama-2-7b-chat",prompt:"[query]",accuracy:"13.4"},{PII:"location",model:"llama-2-7b-chat",prompt:"instruct + [query]",accuracy:"11.7"},{PII:"location",model:"llama-2-7b-chat",prompt:"jailbreak prompt 1 + [query]",accuracy:"16.5"},{PII:"location",model:"llama-2-7b-chat",prompt:"jailbreak prompt 2 + [query]",accuracy:""},{PII:"location",model:"llama-2-7b-chat",prompt:"[query]",accuracy:"18.8"},{PII:"date",model:"llama-2-7b-chat",prompt:"instruct + [query]",accuracy:"4.40"},{PII:"date",model:"llama-2-7b-chat",prompt:"jailbreak prompt 1 + [query]",accuracy:"4.98"},{PII:"date",model:"llama-2-7b-chat",prompt:"jailbreak prompt 2 + [query]",accuracy:""},{PII:"date",model:"llama-2-7b-chat",prompt:"[query]",accuracy:"7.64"}].map((e,r)=>{let t,n;return(3==r||7==r)&&(t={borderBottom:"2pt solid #CED4DA;"}),0==r?n=(0,i.jsx)(a.i.Td,{rowSpan:4,children:"name"}):4==r?n=(0,i.jsx)(a.i.Td,{rowSpan:4,children:"location"}):8==r&&(n=(0,i.jsx)(a.i.Td,{rowSpan:4,children:"date"})),(0,i.jsxs)(a.i.Tr,{style:t,children:[n,(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.prompt}),(0,i.jsx)(a.i.Td,{children:e.accuracy})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 6. Data extraction under different prompts on Echr. temperature 0.7."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"PII"}),(0,i.jsx)(a.i.Th,{children:"Models"}),(0,i.jsx)(a.i.Th,{children:"Prompt"}),(0,i.jsx)(a.i.Th,{children:"Accuracy"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},806:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{model:"llama-2-7b-chat t0.5",prompt:"instruct + [query]",correct:"3.87",local:"12.51",domain:"13.38",average:"9.92"},{model:"llama-2-7b-chat t0.5",prompt:"jailbreak prompt 1 + [query]",correct:"3.90",local:"12.48",domain:"13.47",average:"9.95"},{model:"llama-2-7b-chat t0.5",prompt:"jailbreak prompt 2 + [query]",correct:"3.57",local:"11.25",domain:"12.63",average:"9.15"},{model:"llama-2-7b-chat t0.5",prompt:"[query]",correct:"3.79",local:"12.54",domain:"13.92",average:"10.08"},{model:"llama-2-70b-chat t0.5",prompt:"instruct + [query]",correct:"4.65",local:"14.13",domain:"14.79",average:"11.19"},{model:"llama-2-70b-chat t0.5",prompt:"jailbreak prompt 1 + [query]",correct:"4.50",local:"13.41",domain:"14.16",average:"10.69"},{model:"llama-2-70b-chat t0.5",prompt:"jailbreak prompt 2 + [query]",correct:"4.59",local:"12.99",domain:"14.37",average:"10.65"},{model:"llama-2-70b-chat t0.5",prompt:"[query]",correct:"5.32",local:"14.28",domain:"16.21",average:"11.94"}].map((e,r)=>{let t;return 3==r&&(t={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:t,children:[(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.prompt}),(0,i.jsx)(a.i.Td,{children:e.correct}),(0,i.jsx)(a.i.Td,{children:e.local}),(0,i.jsx)(a.i.Td,{children:e.domain}),(0,i.jsx)(a.i.Td,{children:e.average})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 3. Data extraction under different prompts on Enron"}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Models"}),(0,i.jsx)(a.i.Th,{children:"Prompt"}),(0,i.jsx)(a.i.Th,{children:"Correct"}),(0,i.jsx)(a.i.Th,{children:"Local"}),(0,i.jsx)(a.i.Th,{children:"Domain"}),(0,i.jsx)(a.i.Th,{children:"Average"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},4249:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);let n=[{PII:"name",model:"llama-2-7b-chat t0.01",accuracy:"13.03"},{PII:"name",model:"llama-2-7b-chat t0.3",accuracy:"13.50"},{PII:"name",model:"llama-2-7b-chat t0.5",accuracy:"13.31"},{PII:"name",model:"llama-2-7b-chat t0.7",accuracy:"13.39"},{PII:"name",model:"llama-2-7b-chat t0.9",accuracy:(0,i.jsx)("b",{children:"13.69"})},{PII:"name",model:"llama-2-70b-chat t0.01",accuracy:(0,i.jsx)("b",{children:"14.85"})},{PII:"name",model:"llama-2-70b-chat t0.3",accuracy:"14.13"},{PII:"name",model:"llama-2-70b-chat t0.5",accuracy:"14.75"},{PII:"name",model:"llama-2-70b-chat t0.7",accuracy:"14.13"},{PII:"name",model:"llama-2-70b-chat t0.9",accuracy:"14.44"}];r.default=()=>{let e=n.map((e,r)=>{let t,n;return 0==r&&(t=(0,i.jsx)(a.i.Td,{rowSpan:10,children:"name"})),4==r&&(n={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:n,children:[t,(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.accuracy})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 5. Data extraction under different generation configurations on ECHR"}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"PII"}),(0,i.jsx)(a.i.Th,{children:"Models"}),(0,i.jsx)(a.i.Th,{children:"Extraction Accuracy"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},413:function(e,r,t){"use strict";t.r(r);var i=t(5893);t(7294);var a=t(5503);r.default=()=>{let e=[{model:"llama-2-7b-chat t0.01",correct:"3.42",local:"12.09",domain:"13.44",average:"9.65"},{model:"llama-2-7b-chat t0.3",correct:"3.48",local:"12.24",domain:"12.93",average:"9.55"},{model:"llama-2-7b-chat t0.5",correct:(0,i.jsx)("b",{children:"3.87"}),local:"12.51",domain:"13.38",average:"9.92"},{model:"llama-2-7b-chat t0.7",correct:"3.54",local:"12.24",domain:"12.75",average:"9.51"},{model:"llama-2-7b-chat t0.9",correct:"3.57",local:"11.85",domain:"12.96",average:"9.46"},{model:"llama-2-70b-chat t0.01",correct:"4.53",local:"13.17",domain:"15.00",average:"10.90"},{model:"llama-2-70b-chat t0.3",correct:"4.53",local:"13.50",domain:"15.03",average:"11.02"},{model:"llama-2-70b-chat t0.5",correct:(0,i.jsx)("b",{children:"4.65"}),local:"14.13",domain:"14.79",average:"11.19"},{model:"llama-2-70b-chat t0.7",correct:"4.59",local:"13.68",domain:"14.25",average:"10.84"},{model:"llama-2-70b-chat t0.9",correct:"4.20",local:"13.17",domain:"14.70",average:"10.69"}].map((e,r)=>{let t;return 4==r&&(t={borderBottom:"2pt solid #CED4DA;"}),(0,i.jsxs)(a.i.Tr,{style:t,children:[(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.correct}),(0,i.jsx)(a.i.Td,{children:e.local}),(0,i.jsx)(a.i.Td,{children:e.domain}),(0,i.jsx)(a.i.Td,{children:e.average})]},r)});return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 4. Data extraction under different generation configurations on Enron."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Model"}),(0,i.jsx)(a.i.Th,{children:"Correct"}),(0,i.jsx)(a.i.Th,{children:"Local"}),(0,i.jsx)(a.i.Th,{children:"Domain"}),(0,i.jsx)(a.i.Th,{children:"Average"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},2290:function(e){e.exports={pagetitle:"common_pagetitle__4xBA6",block_orange:"common_block_orange__1r4bT",block_red:"common_block_red__sfVw_",block_green:"common_block_green__4w83L",block_blue:"common_block_blue__Ru_Ps",bibtext:"common_bibtext__b6Cmh"}},929:function(e,r,t){"use strict";t.d(r,{E:function(){return m}});var i=t(7294),a=t(9429),n=t(3637),l=t(987),o=t(9581),c=t(8952),d=t(3362),s={root:"m-9e117634"};let h={},p=(0,n.Z)((e,{radius:r,fit:t})=>({root:{"--image-radius":void 0===r?void 0:(0,a.H5)(r),"--image-object-fit":t}})),m=(0,d.b)((e,r)=>{let t=(0,l.w)("Image",h,e),{classNames:a,className:n,style:d,styles:m,unstyled:u,vars:x,onError:j,src:g,radius:f,fit:b,fallbackSrc:v,...y}=t,[T,P]=(0,i.useState)(!g);(0,i.useEffect)(()=>P(!g),[g]);let _=(0,o.y)({name:"Image",classes:s,props:t,className:n,style:d,classNames:a,styles:m,unstyled:u,vars:x,varsResolver:p});return T&&v?i.createElement(c.x,{component:"img",src:v,..._("root"),onError:j,mod:"fallback",...y}):i.createElement(c.x,{component:"img",ref:r,..._("root"),src:g,onError:e=>{j?.(e),P(!0)},...y})});m.classes=s,m.displayName="@mantine/core/Image"},8207:function(e,r,t){"use strict";t.d(r,{K:function(){return m}});var i=t(7294),a=t(9429),n=t(3637),l=t(987),o=t(9581),c=t(8952),d=t(9535),s={root:"m-6d731127"};let h={gap:"md",align:"stretch",justify:"flex-start"},p=(0,n.Z)((e,{gap:r,align:t,justify:i})=>({root:{"--stack-gap":(0,a.bG)(r),"--stack-align":t,"--stack-justify":i}})),m=(0,d.d)((e,r)=>{let t=(0,l.w)("Stack",h,e),{classNames:a,className:n,style:d,styles:m,unstyled:u,vars:x,align:j,justify:g,gap:f,variant:b,...v}=t,y=(0,o.y)({name:"Stack",props:t,classes:s,className:n,style:d,classNames:a,styles:m,unstyled:u,vars:x,varsResolver:p});return i.createElement(c.x,{ref:r,...y("root"),variant:b,...v})});m.classes=s,m.displayName="@mantine/core/Stack"},8008:function(e,r,t){"use strict";t.d(r,{D:function(){return u}});var i=t(7294),a=t(3637),n=t(987),l=t(9581),o=t(8952),c=t(9535),d=t(8565);let s=["h1","h2","h3","h4","h5","h6"];var h={root:"m-8a5d1357"};let p={order:1},m=(0,a.Z)((e,{order:r,size:t,lineClamp:i})=>{let a=function(e,r){let t=void 0!==r?r:`h${e}`;return s.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:{fontSize:(0,d.h)(t),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(r,t);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":"number"==typeof i?i.toString():void 0}}}),u=(0,c.d)((e,r)=>{let t=(0,n.w)("Title",p,e),{classNames:a,className:c,style:d,styles:s,unstyled:u,order:x,vars:j,size:g,variant:f,lineClamp:b,...v}=t,y=(0,l.y)({name:"Title",props:t,classes:h,className:c,style:d,classNames:a,styles:s,unstyled:u,vars:j,varsResolver:m});return[1,2,3,4,5,6].includes(x)?i.createElement(o.x,{...y("root"),component:`h${x}`,variant:f,ref:r,mod:{order:x,"data-line-clamp":"number"==typeof b},size:g,...v}):null});u.classes=h,u.displayName="@mantine/core/Title"}},function(e){e.O(0,[503,774,888,179],function(){return e(e.s=4558)}),_N_E=e.O()}]);