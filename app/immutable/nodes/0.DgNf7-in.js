import{n as ht,C as ke,O as Ye,P as oe,z as qe,s as Zt,l as ct,i as H,Q as G,f as T,k as gt,R as Ke,S as Dt,T as At,U as ve,e as U,c as Y,b as q,p as _,h as et,V as Xe,W as xe,X as _e,Y as De,A as zt,y as Ae,Z as Vt,r as re,_ as Oe,a as bt,$ as Te,g as yt,t as Qe,d as Ze,j as Ge}from"../chunks/scheduler.DahDdDFs.js";import{n as Je,l as $e,f as tn,h as en,S as Gt,i as Jt,a as z,g as Rt,t as K,c as Ct,j as Wt,k as Nt,b as jt,d as Ht,m as Ut,e as Yt}from"../chunks/index.BoqX9Pg2.js";import{i as nn,a as on,p as Ee,g as Se,b as rn,e as se,u as sn,f as ln,s as an,L as cn}from"../chunks/leftMenu.BSR7EWXX.js";import{w as fn}from"../chunks/entry.B-6WkVQc.js";const un=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function dn(e,t,n,i){if(!t)return ht;const o=e.getBoundingClientRect();if(t.left===o.left&&t.right===o.right&&t.top===o.top&&t.bottom===o.bottom)return ht;const{delay:r=0,duration:s=300,easing:l=ke,start:u=Je()+r,end:c=u+s,tick:a=ht,css:d}=n(e,{from:t,to:o},i);let h=!0,f=!1,m;function b(){d&&(m=tn(e,0,1,s,r,l,d)),r||(f=!0)}function p(){d&&en(e,m),h=!1}return $e(k=>{if(!f&&k>=u&&(f=!0),f&&k>=c&&(a(1,0),p()),!h)return!1;if(f){const w=k-u,x=0+1*l(w/s);a(x,1-x)}return!0}),b(),a(0,1),p}function mn(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:i}=t,o=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=i,Re(e,o)}}function Re(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const i=getComputedStyle(e),o=i.transform==="none"?"":i.transform;e.style.transform=`${o} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}const hn=!0,Di=Object.freeze(Object.defineProperty({__proto__:null,prerender:hn},Symbol.toStringTag,{value:"Module"})),gn="modalStore";function bn(){const e=yn();return Ye(gn,e)}function yn(){const{subscribe:e,set:t,update:n}=fn([]);return{subscribe:e,set:t,update:n,trigger:i=>n(o=>(o.push(i),o)),close:()=>n(i=>(i.length>0&&i.shift(),i)),clear:()=>t([])}}function wn(){bn(),nn(),on()}function pn(e,t){const n='a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';let i,o;function r(f){f.shiftKey&&f.code==="Tab"&&(f.preventDefault(),o.focus())}function s(f){!f.shiftKey&&f.code==="Tab"&&(f.preventDefault(),i.focus())}const l=f=>f.filter(m=>m.tabIndex>=0).sort((m,b)=>m.tabIndex===0&&b.tabIndex>0?1:m.tabIndex>0&&b.tabIndex===0?-1:m.tabIndex-b.tabIndex),u=f=>{const m=[...e.querySelectorAll("[data-focusindex]")];return!m||m.length===0?f:m.sort((b,p)=>+b.dataset.focusindex-+p.dataset.focusindex)[0]||f},c=f=>{if(t===!1)return;const m=l(Array.from(e.querySelectorAll(n)));m.length&&(i=m[0],o=m[m.length-1],f||u(i).focus(),i.addEventListener("keydown",r),o.addEventListener("keydown",s))};c(!1);function a(){i&&i.removeEventListener("keydown",r),o&&o.removeEventListener("keydown",s)}const d=(f,m)=>(f.length&&(a(),c(!0)),m),h=new MutationObserver(d);return h.observe(e,{childList:!0,subtree:!0}),{update(f){t=f,f?c(!1):a()},destroy(){a(),h.disconnect()}}}function kn(e){return e*e*e}function Ce(e){const t=e-1;return t*t*t+1}function le(e,{delay:t=0,duration:n=400,easing:i=ke}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:r=>`opacity: ${r*o}`}}function Ot(e,{delay:t=0,duration:n=400,easing:i=Ce,x:o=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(e),u=+l.opacity,c=l.transform==="none"?"":l.transform,a=u*(1-s),[d,h]=oe(o),[f,m]=oe(r);return{delay:t,duration:n,easing:i,css:(b,p)=>`
			transform: ${c} translate(${(1-b)*d}${h}, ${(1-b)*f}${m});
			opacity: ${u-a*p}`}}function lt(e,t){const{transition:n,params:i,enabled:o}=t;return o?n(e,i):"duration"in i?n(e,{duration:0}):{duration:0}}function vn(e,{from:t,to:n},i={}){const o=getComputedStyle(e),r=o.transform==="none"?"":o.transform,[s,l]=o.transformOrigin.split(" ").map(parseFloat),u=t.left+t.width*s/n.width-(n.left+s),c=t.top+t.height*l/n.height-(n.top+l),{delay:a=0,duration:d=f=>Math.sqrt(f)*120,easing:h=Ce}=i;return{delay:a,duration:qe(d)?d(Math.sqrt(u*u+c*c)):d,easing:h,css:(f,m)=>{const b=m*u,p=m*c,k=f+m*t.width/n.width,w=f+m*t.height/n.height;return`transform: ${r} translate(${b}px, ${p}px) scale(${k}, ${w});`}}}const{window:xn}=un;function ae(e){let t,n,i,o,r,s,l,u,c,a,d;const h=e[32].default,f=ve(h,e,e[31],null);return{c(){t=U("div"),n=U("div"),f&&f.c(),this.h()},l(m){t=Y(m,"DIV",{class:!0,"data-testid":!0});var b=q(t);n=Y(b,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-labelledby":!0,"aria-describedby":!0});var p=q(n);f&&f.l(p),p.forEach(T),b.forEach(T),this.h()},h(){_(n,"class",i="drawer "+e[8]),_(n,"data-testid","drawer"),_(n,"role","dialog"),_(n,"aria-modal","true"),_(n,"aria-labelledby",e[0]),_(n,"aria-describedby",e[1]),_(t,"class",s="drawer-backdrop "+e[9]),_(t,"data-testid","drawer-backdrop")},m(m,b){H(m,t,b),et(t,n),f&&f.m(n,null),e[36](n),e[37](t),c=!0,a||(d=[G(t,"mousedown",e[12]),G(t,"touchstart",e[33],{passive:!0}),G(t,"touchend",e[34],{passive:!0}),G(t,"keypress",e[35]),Xe(pn.call(null,t,!0))],a=!0)},p(m,b){e=m,f&&f.p&&(!c||b[1]&1)&&xe(f,h,e,e[31],c?De(h,e[31],b,null):_e(e[31]),null),(!c||b[0]&256&&i!==(i="drawer "+e[8]))&&_(n,"class",i),(!c||b[0]&1)&&_(n,"aria-labelledby",e[0]),(!c||b[0]&2)&&_(n,"aria-describedby",e[1]),(!c||b[0]&512&&s!==(s="drawer-backdrop "+e[9]))&&_(t,"class",s)},i(m){c||(z(f,m),m&&zt(()=>{c&&(r&&r.end(1),o=Wt(n,lt,{transition:Ot,params:{x:e[7].x,y:e[7].y,duration:e[2],opacity:e[3]?void 0:1},enabled:e[4]}),o.start())}),m&&zt(()=>{c&&(u&&u.end(1),l=Wt(t,lt,{transition:le,params:{duration:e[2]},enabled:e[4]&&e[3]}),l.start())}),c=!0)},o(m){K(f,m),o&&o.invalidate(),m&&(r=Nt(n,lt,{transition:Ot,params:{x:e[7].x,y:e[7].y,duration:e[2],opacity:e[3]?void 0:1,easing:kn},enabled:e[4]})),l&&l.invalidate(),m&&(u=Nt(t,lt,{transition:le,params:{duration:e[2]},enabled:e[4]&&e[3]})),c=!1},d(m){m&&T(t),f&&f.d(m),e[36](null),m&&r&&r.end(),e[37](null),m&&u&&u.end(),a=!1,Ae(d)}}}function _n(e){let t,n,i,o,r=e[10].open===!0&&ae(e);return{c(){r&&r.c(),t=ct()},l(s){r&&r.l(s),t=ct()},m(s,l){r&&r.m(s,l),H(s,t,l),n=!0,i||(o=G(xn,"keydown",e[13]),i=!0)},p(s,l){s[10].open===!0?r?(r.p(s,l),l[0]&1024&&z(r,1)):(r=ae(s),r.c(),z(r,1),r.m(t.parentNode,t)):r&&(Rt(),K(r,1,1,()=>{r=null}),Ct())},i(s){n||(z(r),n=!0)},o(s){K(r),n=!1},d(s){s&&T(t),r&&r.d(s),i=!1,o()}}}const Dn="fixed top-0 left-0 right-0 bottom-0 flex",An="overflow-y-auto transition-transform";function On(e,t,n){let i,o,r,s,l,u,c,a;gt(e,Ee,g=>n(38,a=g));let{$$slots:d={},$$scope:h}=t;const f=Ke();let{position:m="left"}=t,{bgDrawer:b="bg-surface-100-800-token"}=t,{border:p=""}=t,{rounded:k=""}=t,{shadow:w="shadow-xl"}=t,{width:x=""}=t,{height:A=""}=t,{bgBackdrop:v="bg-surface-backdrop-token"}=t,{blur:D=""}=t,{padding:S=""}=t,{zIndex:M="z-40"}=t,{regionBackdrop:B=""}=t,{regionDrawer:P=""}=t,{labelledby:N=""}=t,{describedby:E=""}=t,{duration:R=200}=t,{transitions:O=!a}=t,{opacityTransition:W=!0}=t;const I={top:{alignment:"items-start",width:"w-full",height:"h-[50%]",rounded:"rounded-bl-container-token rounded-br-container-token"},bottom:{alignment:"items-end",width:"w-full",height:" h-[50%]",rounded:"rounded-tl-container-token rounded-tr-container-token"},left:{alignment:"justify-start",width:"w-[90%]",height:"h-full",rounded:"rounded-tr-container-token rounded-br-container-token"},right:{alignment:"justify-end",width:"w-[90%]",height:"h-full",rounded:"rounded-tl-container-token rounded-bl-container-token"}};let C,F,V={x:0,y:0};const tt=Se();gt(e,tt,g=>n(10,c=g));const L={position:m,bgBackdrop:v,blur:D,padding:S,bgDrawer:b,border:p,rounded:k,shadow:w,width:x,height:A,opacityTransition:W,regionBackdrop:B,regionDrawer:P,labelledby:N,describedby:E,duration:R};function Bt(g){n(14,m=g.position||L.position),n(21,v=g.bgBackdrop||L.bgBackdrop),n(22,D=g.blur||L.blur),n(23,S=g.padding||L.padding),n(15,b=g.bgDrawer||L.bgDrawer),n(16,p=g.border||L.border),n(17,k=g.rounded||L.rounded),n(18,w=g.shadow||L.shadow),n(19,x=g.width||L.width),n(20,A=g.height||L.height),n(24,B=g.regionBackdrop||L.regionBackdrop),n(25,P=g.regionDrawer||L.regionDrawer),n(0,N=g.labelledby||L.labelledby),n(1,E=g.describedby||L.describedby),n(3,W=g.opacityTransition||L.opacityTransition),n(2,R=g.duration||L.duration)}function Ft(){switch(m){case"top":n(7,V={x:0,y:-window.innerWidth});break;case"bottom":n(7,V={x:0,y:window.innerWidth});break;case"left":n(7,V={x:-window.innerHeight,y:0});break;case"right":n(7,V={x:window.innerHeight,y:0});break;default:console.error("Error: unknown position property value.");break}}function y(g){g.target===C?(tt.close(),f("backdrop",g)):f("drawer",g)}function Z(g){c&&g.code==="Escape"&&tt.close()}tt.subscribe(g=>{g.open===!0&&(Bt(g),Ft())});function xt(g){Vt.call(this,e,g)}function Ne(g){Vt.call(this,e,g)}function je(g){Vt.call(this,e,g)}function He(g){re[g?"unshift":"push"](()=>{F=g,n(6,F)})}function Ue(g){re[g?"unshift":"push"](()=>{C=g,n(5,C)})}return e.$$set=g=>{n(44,t=Dt(Dt({},t),At(g))),"position"in g&&n(14,m=g.position),"bgDrawer"in g&&n(15,b=g.bgDrawer),"border"in g&&n(16,p=g.border),"rounded"in g&&n(17,k=g.rounded),"shadow"in g&&n(18,w=g.shadow),"width"in g&&n(19,x=g.width),"height"in g&&n(20,A=g.height),"bgBackdrop"in g&&n(21,v=g.bgBackdrop),"blur"in g&&n(22,D=g.blur),"padding"in g&&n(23,S=g.padding),"zIndex"in g&&n(26,M=g.zIndex),"regionBackdrop"in g&&n(24,B=g.regionBackdrop),"regionDrawer"in g&&n(25,P=g.regionDrawer),"labelledby"in g&&n(0,N=g.labelledby),"describedby"in g&&n(1,E=g.describedby),"duration"in g&&n(2,R=g.duration),"transitions"in g&&n(4,O=g.transitions),"opacityTransition"in g&&n(3,W=g.opacityTransition),"$$scope"in g&&n(31,h=g.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&16384&&n(30,i=I[m].alignment),e.$$.dirty[0]&540672&&n(29,o=x||I[m].width),e.$$.dirty[0]&1064960&&n(28,r=A||I[m].height),e.$$.dirty[0]&147456&&n(27,s=k||I[m].rounded),n(9,l=`${Dn} ${v} ${S} ${D} ${i} ${B} ${M} ${t.class??""}`),e.$$.dirty[0]&973570048&&n(8,u=`${An} ${b} ${p} ${k} ${w} ${o} ${r} ${s} ${P}`)},t=At(t),[N,E,R,W,O,C,F,V,u,l,c,tt,y,Z,m,b,p,k,w,x,A,v,D,S,B,P,M,s,r,o,i,h,d,xt,Ne,je,He,Ue]}class Tn extends Gt{constructor(t){super(),Jt(this,t,On,_n,Zt,{position:14,bgDrawer:15,border:16,rounded:17,shadow:18,width:19,height:20,bgBackdrop:21,blur:22,padding:23,zIndex:26,regionBackdrop:24,regionDrawer:25,labelledby:0,describedby:1,duration:2,transitions:4,opacityTransition:3},null,[-1,-1])}}function ce(e,t,n){const i=e.slice();return i[38]=t[n],i[40]=n,i}function fe(e){let t,n,i=[],o=new Map,r,s,l,u=se(e[9]);const c=a=>a[38];for(let a=0;a<u.length;a+=1){let d=ce(e,u,a),h=c(d);o.set(h,i[a]=he(h,d))}return{c(){t=U("div"),n=U("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){t=Y(a,"DIV",{class:!0,"data-testid":!0});var d=q(t);n=Y(d,"DIV",{class:!0});var h=q(n);for(let f=0;f<i.length;f+=1)i[f].l(h);h.forEach(T),d.forEach(T),this.h()},h(){_(n,"class",r="snackbar "+e[13]),_(t,"class",s="snackbar-wrapper "+e[14]),_(t,"data-testid","snackbar-wrapper")},m(a,d){H(a,t,d),et(t,n);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(n,null);l=!0},p(a,d){if(d[0]&499615){u=se(a[9]),Rt();for(let h=0;h<i.length;h+=1)i[h].r();i=sn(i,d,c,1,a,u,o,n,ln,he,null,ce);for(let h=0;h<i.length;h+=1)i[h].a();Ct()}(!l||d[0]&8192&&r!==(r="snackbar "+a[13]))&&_(n,"class",r),(!l||d[0]&16384&&s!==(s="snackbar-wrapper "+a[14]))&&_(t,"class",s)},i(a){if(!l){for(let d=0;d<u.length;d+=1)z(i[d]);l=!0}},o(a){for(let d=0;d<i.length;d+=1)K(i[d]);l=!1},d(a){a&&T(t);for(let d=0;d<i.length;d+=1)i[d].d()}}}function ue(e){let t,n,i=e[38].action&&de(e),o=!e[38].hideDismiss&&me(e);return{c(){t=U("div"),i&&i.c(),n=bt(),o&&o.c(),this.h()},l(r){t=Y(r,"DIV",{class:!0});var s=q(t);i&&i.l(s),n=yt(s),o&&o.l(s),s.forEach(T),this.h()},h(){_(t,"class","toast-actions "+Ln)},m(r,s){H(r,t,s),i&&i.m(t,null),et(t,n),o&&o.m(t,null)},p(r,s){r[38].action?i?i.p(r,s):(i=de(r),i.c(),i.m(t,n)):i&&(i.d(1),i=null),r[38].hideDismiss?o&&(o.d(1),o=null):o?o.p(r,s):(o=me(r),o.c(),o.m(t,null))},d(r){r&&T(t),i&&i.d(),o&&o.d()}}}function de(e){let t,n,i=e[38].action.label+"",o,r;function s(){return e[31](e[40])}return{c(){t=U("button"),n=new Oe(!1),this.h()},l(l){t=Y(l,"BUTTON",{class:!0});var u=q(t);n=Te(u,!1),u.forEach(T),this.h()},h(){n.a=null,_(t,"class",e[1])},m(l,u){H(l,t,u),n.m(i,t),o||(r=G(t,"click",s),o=!0)},p(l,u){e=l,u[0]&512&&i!==(i=e[38].action.label+"")&&n.p(i),u[0]&2&&_(t,"class",e[1])},d(l){l&&T(t),o=!1,r()}}}function me(e){let t,n,i,o;function r(){return e[32](e[38])}return{c(){t=U("button"),n=Qe(e[3]),this.h()},l(s){t=Y(s,"BUTTON",{class:!0,"aria-label":!0});var l=q(t);n=Ze(l,e[3]),l.forEach(T),this.h()},h(){_(t,"class",e[2]),_(t,"aria-label","Dismiss toast")},m(s,l){H(s,t,l),et(t,n),i||(o=G(t,"click",r),i=!0)},p(s,l){e=s,l[0]&8&&Ge(n,e[3]),l[0]&4&&_(t,"class",e[2])},d(s){s&&T(t),i=!1,o()}}}function he(e,t){let n,i,o,r,s=t[38].message+"",l,u,c,a,d,h,f,m=ht,b,p,k,w=(t[38].action||!t[38].hideDismiss)&&ue(t);function x(){return t[34](t[40])}function A(){return t[35](t[40])}return{key:e,first:null,c(){n=U("div"),i=U("div"),o=U("div"),r=new Oe(!1),l=bt(),w&&w.c(),c=bt(),this.h()},l(v){n=Y(v,"DIV",{role:!0,"aria-live":!0});var D=q(n);i=Y(D,"DIV",{class:!0,"data-testid":!0});var S=q(i);o=Y(S,"DIV",{class:!0});var M=q(o);r=Te(M,!1),M.forEach(T),l=yt(S),w&&w.l(S),S.forEach(T),c=yt(D),D.forEach(T),this.h()},h(){r.a=null,_(o,"class","text-base"),_(i,"class",u="toast "+t[12]+" "+(t[38].background??t[0])+" "+(t[38].classes??"")),_(i,"data-testid","toast"),_(n,"role",a=t[38].hideDismiss?"alert":"alertdialog"),_(n,"aria-live","polite"),this.first=n},m(v,D){H(v,n,D),et(n,i),et(i,o),r.m(s,o),et(i,l),w&&w.m(i,null),et(n,c),b=!0,p||(k=[G(n,"outroend",t[33]),G(n,"mouseenter",x),G(n,"mouseleave",A)],p=!0)},p(v,D){t=v,(!b||D[0]&512)&&s!==(s=t[38].message+"")&&r.p(s),t[38].action||!t[38].hideDismiss?w?w.p(t,D):(w=ue(t),w.c(),w.m(i,null)):w&&(w.d(1),w=null),(!b||D[0]&4609&&u!==(u="toast "+t[12]+" "+(t[38].background??t[0])+" "+(t[38].classes??"")))&&_(i,"class",u),(!b||D[0]&512&&a!==(a=t[38].hideDismiss?"alert":"alertdialog"))&&_(n,"role",a)},r(){f=n.getBoundingClientRect()},f(){mn(n),m(),Re(n,f)},a(){m(),m=dn(n,f,vn,{duration:t[4]?250:0})},i(v){b||(zt(()=>{b&&(h&&h.end(1),d=Wt(n,lt,{transition:t[5],params:{x:t[10].x,y:t[10].y,...t[6]},enabled:t[4]}),d.start())}),b=!0)},o(v){d&&d.invalidate(),h=Nt(n,lt,{transition:t[7],params:{x:t[10].x,y:t[10].y,...t[8]},enabled:t[4]}),b=!1},d(v){v&&T(n),w&&w.d(),v&&h&&h.end(),p=!1,Ae(k)}}}function En(e){let t,n,i=(e[9].length>0||e[11])&&fe(e);return{c(){i&&i.c(),t=ct()},l(o){i&&i.l(o),t=ct()},m(o,r){i&&i.m(o,r),H(o,t,r),n=!0},p(o,r){o[9].length>0||o[11]?i?(i.p(o,r),r[0]&2560&&z(i,1)):(i=fe(o),i.c(),z(i,1),i.m(t.parentNode,t)):i&&(Rt(),K(i,1,1,()=>{i=null}),Ct())},i(o){n||(z(i),n=!0)},o(o){K(i),n=!1},d(o){o&&T(t),i&&i.d(o)}}}const Sn="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Rn="flex flex-col gap-y-2",Cn="flex justify-between items-center pointer-events-auto",Ln="flex items-center space-x-2";function Pn(e,t,n){let i,o,r,s,l,u;gt(e,Ee,y=>n(36,u=y));const c=rn();gt(e,c,y=>n(30,l=y));let{position:a="b"}=t,{max:d=3}=t,{background:h="variant-filled-secondary"}=t,{width:f="max-w-[640px]"}=t,{color:m=""}=t,{padding:b="p-4"}=t,{spacing:p="space-x-4"}=t,{rounded:k="rounded-container-token"}=t,{shadow:w="shadow-lg"}=t,{zIndex:x="z-[888]"}=t,{buttonAction:A="btn variant-filled"}=t,{buttonDismiss:v="btn-icon btn-icon-sm variant-filled"}=t,{buttonDismissLabel:D="✕"}=t,{transitions:S=!u}=t,{transitionIn:M=Ot}=t,{transitionInParams:B={duration:250}}=t,{transitionOut:P=Ot}=t,{transitionOutParams:N={duration:250}}=t,E,R,O={x:0,y:0};switch(a){case"t":E="justify-center items-start",R="items-center",O={x:0,y:-100};break;case"b":E="justify-center items-end",R="items-center",O={x:0,y:100};break;case"l":E="justify-start items-center",R="items-start",O={x:-100,y:0};break;case"r":E="justify-end items-center",R="items-end",O={x:100,y:0};break;case"tl":E="justify-start items-start",R="items-start",O={x:-100,y:0};break;case"tr":E="justify-end items-start",R="items-end",O={x:100,y:0};break;case"bl":E="justify-start items-end",R="items-start",O={x:-100,y:0};break;case"br":E="justify-end items-end",R="items-end",O={x:100,y:0};break}function W(y){var Z,xt;(xt=(Z=l[y])==null?void 0:Z.action)==null||xt.response(),c.close(l[y].id)}function I(y){var Z;(Z=l[y])!=null&&Z.hoverable&&(c.freeze(y),n(13,o+=" scale-[105%]"))}function C(y){var Z;(Z=l[y])!=null&&Z.hoverable&&(c.unfreeze(y),n(13,o=o.replace(" scale-[105%]","")))}let F=!1;const V=y=>W(y),tt=y=>c.close(y.id),L=()=>{s.length===0&&n(11,F=!1)},Bt=y=>I(y),Ft=y=>C(y);return e.$$set=y=>{n(37,t=Dt(Dt({},t),At(y))),"position"in y&&n(19,a=y.position),"max"in y&&n(20,d=y.max),"background"in y&&n(0,h=y.background),"width"in y&&n(21,f=y.width),"color"in y&&n(22,m=y.color),"padding"in y&&n(23,b=y.padding),"spacing"in y&&n(24,p=y.spacing),"rounded"in y&&n(25,k=y.rounded),"shadow"in y&&n(26,w=y.shadow),"zIndex"in y&&n(27,x=y.zIndex),"buttonAction"in y&&n(1,A=y.buttonAction),"buttonDismiss"in y&&n(2,v=y.buttonDismiss),"buttonDismissLabel"in y&&n(3,D=y.buttonDismissLabel),"transitions"in y&&n(4,S=y.transitions),"transitionIn"in y&&n(5,M=y.transitionIn),"transitionInParams"in y&&n(6,B=y.transitionInParams),"transitionOut"in y&&n(7,P=y.transitionOut),"transitionOutParams"in y&&n(8,N=y.transitionOutParams)},e.$$.update=()=>{n(14,i=`${Sn} ${E} ${x} ${t.class||""}`),e.$$.dirty[0]&545259520&&n(13,o=`${Rn} ${R} ${b}`),e.$$.dirty[0]&132120576&&n(12,r=`${Cn} ${f} ${m} ${b} ${p} ${k} ${w}`),e.$$.dirty[0]&1074790400&&n(9,s=Array.from(l).slice(0,d)),e.$$.dirty[0]&512&&s.length&&n(11,F=!0)},t=At(t),[h,A,v,D,S,M,B,P,N,s,O,F,r,o,i,c,W,I,C,a,d,f,m,b,p,k,w,x,E,R,l,V,tt,L,Bt,Ft]}class In extends Gt{constructor(t){super(),Jt(this,t,Pn,En,Zt,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const ft=Math.min,ot=Math.max,Tt=Math.round,_t=Math.floor,nt=e=>({x:e,y:e}),Bn={left:"right",right:"left",bottom:"top",top:"bottom"},Fn={start:"end",end:"start"};function qt(e,t,n){return ot(e,ft(t,n))}function pt(e,t){return typeof e=="function"?e(t):e}function rt(e){return e.split("-")[0]}function kt(e){return e.split("-")[1]}function Le(e){return e==="x"?"y":"x"}function $t(e){return e==="y"?"height":"width"}function ut(e){return["top","bottom"].includes(rt(e))?"y":"x"}function te(e){return Le(ut(e))}function Vn(e,t,n){n===void 0&&(n=!1);const i=kt(e),o=te(e),r=$t(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Et(s)),[s,Et(s)]}function Mn(e){const t=Et(e);return[Kt(e),t,Kt(t)]}function Kt(e){return e.replace(/start|end/g,t=>Fn[t])}function zn(e,t,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?r:s;default:return[]}}function Wn(e,t,n,i){const o=kt(e);let r=zn(rt(e),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(Kt)))),r}function Et(e){return e.replace(/left|right|bottom|top/g,t=>Bn[t])}function Nn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Pe(e){return typeof e!="number"?Nn(e):{top:e,right:e,bottom:e,left:e}}function St(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function ge(e,t,n){let{reference:i,floating:o}=e;const r=ut(t),s=te(t),l=$t(s),u=rt(t),c=r==="y",a=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,h=i[l]/2-o[l]/2;let f;switch(u){case"top":f={x:a,y:i.y-o.height};break;case"bottom":f={x:a,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:d};break;case"left":f={x:i.x-o.width,y:d};break;default:f={x:i.x,y:i.y}}switch(kt(t)){case"start":f[s]-=h*(n&&c?-1:1);break;case"end":f[s]+=h*(n&&c?-1:1);break}return f}const jn=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:a,y:d}=ge(c,i,u),h=i,f={},m=0;for(let b=0;b<l.length;b++){const{name:p,fn:k}=l[b],{x:w,y:x,data:A,reset:v}=await k({x:a,y:d,initialPlacement:i,placement:h,strategy:o,middlewareData:f,rects:c,platform:s,elements:{reference:e,floating:t}});a=w??a,d=x??d,f={...f,[p]:{...f[p],...A}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(c=v.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):v.rects),{x:a,y:d}=ge(c,h,u)),b=-1)}return{x:a,y:d,placement:h,strategy:o,middlewareData:f}};async function Ie(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=pt(t,e),m=Pe(f),p=l[h?d==="floating"?"reference":"floating":d],k=St(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:a,strategy:u})),w=d==="floating"?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),A=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},v=St(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:x,strategy:u}):w);return{top:(k.top-v.top+m.top)/A.y,bottom:(v.bottom-k.bottom+m.bottom)/A.y,left:(k.left-v.left+m.left)/A.x,right:(v.right-k.right+m.right)/A.x}}const Hn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:o,rects:r,platform:s,elements:l,middlewareData:u}=t,{element:c,padding:a=0}=pt(e,t)||{};if(c==null)return{};const d=Pe(a),h={x:n,y:i},f=te(o),m=$t(f),b=await s.getDimensions(c),p=f==="y",k=p?"top":"left",w=p?"bottom":"right",x=p?"clientHeight":"clientWidth",A=r.reference[m]+r.reference[f]-h[f]-r.floating[m],v=h[f]-r.reference[f],D=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let S=D?D[x]:0;(!S||!await(s.isElement==null?void 0:s.isElement(D)))&&(S=l.floating[x]||r.floating[m]);const M=A/2-v/2,B=S/2-b[m]/2-1,P=ft(d[k],B),N=ft(d[w],B),E=P,R=S-b[m]-N,O=S/2-b[m]/2+M,W=qt(E,O,R),I=!u.arrow&&kt(o)!=null&&O!==W&&r.reference[m]/2-(O<E?P:N)-b[m]/2<0,C=I?O<E?O-E:O-R:0;return{[f]:h[f]+C,data:{[f]:W,centerOffset:O-W-C,...I&&{alignmentOffset:C}},reset:I}}}),Un=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:l,platform:u,elements:c}=t,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...p}=pt(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const k=rt(o),w=ut(l),x=rt(l)===l,A=await(u.isRTL==null?void 0:u.isRTL(c.floating)),v=h||(x||!b?[Et(l)]:Mn(l)),D=m!=="none";!h&&D&&v.push(...Wn(l,b,m,A));const S=[l,...v],M=await Ie(t,p),B=[];let P=((i=r.flip)==null?void 0:i.overflows)||[];if(a&&B.push(M[k]),d){const O=Vn(o,s,A);B.push(M[O[0]],M[O[1]])}if(P=[...P,{placement:o,overflows:B}],!B.every(O=>O<=0)){var N,E;const O=(((N=r.flip)==null?void 0:N.index)||0)+1,W=S[O];if(W)return{data:{index:O,overflows:P},reset:{placement:W}};let I=(E=P.filter(C=>C.overflows[0]<=0).sort((C,F)=>C.overflows[1]-F.overflows[1])[0])==null?void 0:E.placement;if(!I)switch(f){case"bestFit":{var R;const C=(R=P.filter(F=>{if(D){const V=ut(F.placement);return V===w||V==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(V=>V>0).reduce((V,tt)=>V+tt,0)]).sort((F,V)=>F[1]-V[1])[0])==null?void 0:R[0];C&&(I=C);break}case"initialPlacement":I=l;break}if(o!==I)return{reset:{placement:I}}}return{}}}};async function Yn(e,t){const{placement:n,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=rt(n),l=kt(n),u=ut(n)==="y",c=["left","top"].includes(s)?-1:1,a=r&&u?-1:1,d=pt(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),u?{x:f*a,y:h*c}:{x:h*c,y:f*a}}const qn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=t,u=await Yn(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+u.x,y:r+u.y,data:{...u,placement:s}}}}},Kn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:p=>{let{x:k,y:w}=p;return{x:k,y:w}}},...u}=pt(e,t),c={x:n,y:i},a=await Ie(t,u),d=ut(rt(o)),h=Le(d);let f=c[h],m=c[d];if(r){const p=h==="y"?"top":"left",k=h==="y"?"bottom":"right",w=f+a[p],x=f-a[k];f=qt(w,f,x)}if(s){const p=d==="y"?"top":"left",k=d==="y"?"bottom":"right",w=m+a[p],x=m-a[k];m=qt(w,m,x)}const b=l.fn({...t,[h]:f,[d]:m});return{...b,data:{x:b.x-n,y:b.y-i,enabled:{[h]:r,[d]:s}}}}}};function Lt(){return typeof window<"u"}function mt(e){return Be(e)?(e.nodeName||"").toLowerCase():"#document"}function j(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $(e){var t;return(t=(Be(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Be(e){return Lt()?e instanceof Node||e instanceof j(e).Node:!1}function X(e){return Lt()?e instanceof Element||e instanceof j(e).Element:!1}function J(e){return Lt()?e instanceof HTMLElement||e instanceof j(e).HTMLElement:!1}function be(e){return!Lt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof j(e).ShadowRoot}function vt(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function Xn(e){return["table","td","th"].includes(mt(e))}function Pt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ee(e){const t=ne(),n=X(e)?Q(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function Qn(e){let t=it(e);for(;J(t)&&!dt(t);){if(ee(t))return t;if(Pt(t))return null;t=it(t)}return null}function ne(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function dt(e){return["html","body","#document"].includes(mt(e))}function Q(e){return j(e).getComputedStyle(e)}function It(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function it(e){if(mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||be(e)&&e.host||$(e);return be(t)?t.host:t}function Fe(e){const t=it(e);return dt(t)?e.ownerDocument?e.ownerDocument.body:e.body:J(t)&&vt(t)?t:Fe(t)}function wt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Fe(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),s=j(o);if(r){const l=Xt(s);return t.concat(s,s.visualViewport||[],vt(o)?o:[],l&&n?wt(l):[])}return t.concat(o,wt(o,[],n))}function Xt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ve(e){const t=Q(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=J(e),r=o?e.offsetWidth:n,s=o?e.offsetHeight:i,l=Tt(n)!==r||Tt(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function ie(e){return X(e)?e:e.contextElement}function at(e){const t=ie(e);if(!J(t))return nt(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:r}=Ve(t);let s=(r?Tt(n.width):n.width)/i,l=(r?Tt(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Zn=nt(0);function Me(e){const t=j(e);return!ne()||!t.visualViewport?Zn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==j(e)?!1:t}function st(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=ie(e);let s=nt(1);t&&(i?X(i)&&(s=at(i)):s=at(e));const l=Gn(r,n,i)?Me(r):nt(0);let u=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,a=o.width/s.x,d=o.height/s.y;if(r){const h=j(r),f=i&&X(i)?j(i):i;let m=h,b=Xt(m);for(;b&&i&&f!==m;){const p=at(b),k=b.getBoundingClientRect(),w=Q(b),x=k.left+(b.clientLeft+parseFloat(w.paddingLeft))*p.x,A=k.top+(b.clientTop+parseFloat(w.paddingTop))*p.y;u*=p.x,c*=p.y,a*=p.x,d*=p.y,u+=x,c+=A,m=j(b),b=Xt(m)}}return St({width:a,height:d,x:u,y:c})}function Jn(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const r=o==="fixed",s=$(i),l=t?Pt(t.floating):!1;if(i===s||l&&r)return n;let u={scrollLeft:0,scrollTop:0},c=nt(1);const a=nt(0),d=J(i);if((d||!d&&!r)&&((mt(i)!=="body"||vt(s))&&(u=It(i)),J(i))){const h=st(i);c=at(i),a.x=h.x+i.clientLeft,a.y=h.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+a.x,y:n.y*c.y-u.scrollTop*c.y+a.y}}function $n(e){return Array.from(e.getClientRects())}function Qt(e,t){const n=It(e).scrollLeft;return t?t.left+n:st($(e)).left+n}function ti(e){const t=$(e),n=It(e),i=e.ownerDocument.body,o=ot(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ot(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Qt(e);const l=-n.scrollTop;return Q(i).direction==="rtl"&&(s+=ot(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}function ei(e,t){const n=j(e),i=$(e),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,u=0;if(o){r=o.width,s=o.height;const c=ne();(!c||c&&t==="fixed")&&(l=o.offsetLeft,u=o.offsetTop)}return{width:r,height:s,x:l,y:u}}function ni(e,t){const n=st(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=J(e)?at(e):nt(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,u=o*r.x,c=i*r.y;return{width:s,height:l,x:u,y:c}}function ye(e,t,n){let i;if(t==="viewport")i=ei(e,n);else if(t==="document")i=ti($(e));else if(X(t))i=ni(t,n);else{const o=Me(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return St(i)}function ze(e,t){const n=it(e);return n===t||!X(n)||dt(n)?!1:Q(n).position==="fixed"||ze(n,t)}function ii(e,t){const n=t.get(e);if(n)return n;let i=wt(e,[],!1).filter(l=>X(l)&&mt(l)!=="body"),o=null;const r=Q(e).position==="fixed";let s=r?it(e):e;for(;X(s)&&!dt(s);){const l=Q(s),u=ee(s);!u&&l.position==="fixed"&&(o=null),(r?!u&&!o:!u&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||vt(s)&&!u&&ze(e,s))?i=i.filter(a=>a!==s):o=l,s=it(s)}return t.set(e,i),i}function oi(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[...n==="clippingAncestors"?Pt(t)?[]:ii(t,this._c):[].concat(n),i],l=s[0],u=s.reduce((c,a)=>{const d=ye(t,a,o);return c.top=ot(d.top,c.top),c.right=ft(d.right,c.right),c.bottom=ft(d.bottom,c.bottom),c.left=ot(d.left,c.left),c},ye(t,l,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ri(e){const{width:t,height:n}=Ve(e);return{width:t,height:n}}function si(e,t,n){const i=J(t),o=$(t),r=n==="fixed",s=st(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const u=nt(0);if(i||!i&&!r)if((mt(t)!=="body"||vt(o))&&(l=It(t)),i){const f=st(t,!0,r,t);u.x=f.x+t.clientLeft,u.y=f.y+t.clientTop}else o&&(u.x=Qt(o));let c=0,a=0;if(o&&!i&&!r){const f=o.getBoundingClientRect();a=f.top+l.scrollTop,c=f.left+l.scrollLeft-Qt(o,f)}const d=s.left+l.scrollLeft-u.x-c,h=s.top+l.scrollTop-u.y-a;return{x:d,y:h,width:s.width,height:s.height}}function Mt(e){return Q(e).position==="static"}function we(e,t){if(!J(e)||Q(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return $(e)===n&&(n=n.ownerDocument.body),n}function We(e,t){const n=j(e);if(Pt(e))return n;if(!J(e)){let o=it(e);for(;o&&!dt(o);){if(X(o)&&!Mt(o))return o;o=it(o)}return n}let i=we(e,t);for(;i&&Xn(i)&&Mt(i);)i=we(i,t);return i&&dt(i)&&Mt(i)&&!ee(i)?n:i||Qn(e)||n}const li=async function(e){const t=this.getOffsetParent||We,n=this.getDimensions,i=await n(e.floating);return{reference:si(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ai(e){return Q(e).direction==="rtl"}const ci={convertOffsetParentRelativeRectToViewportRelativeRect:Jn,getDocumentElement:$,getClippingRect:oi,getOffsetParent:We,getElementRects:li,getClientRects:$n,getDimensions:ri,getScale:at,isElement:X,isRTL:ai};function fi(e,t){let n=null,i;const o=$(e);function r(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function s(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),r();const{left:c,top:a,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const f=_t(a),m=_t(o.clientWidth-(c+d)),b=_t(o.clientHeight-(a+h)),p=_t(c),w={rootMargin:-f+"px "+-m+"px "+-b+"px "+-p+"px",threshold:ot(0,ft(1,u))||1};let x=!0;function A(v){const D=v[0].intersectionRatio;if(D!==u){if(!x)return s();D?s(!1,D):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(A,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(A,w)}n.observe(e)}return s(!0),r}function ui(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,c=ie(e),a=o||r?[...c?wt(c):[],...wt(t)]:[];a.forEach(k=>{o&&k.addEventListener("scroll",n,{passive:!0}),r&&k.addEventListener("resize",n)});const d=c&&l?fi(c,n):null;let h=-1,f=null;s&&(f=new ResizeObserver(k=>{let[w]=k;w&&w.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),c&&!u&&f.observe(c),f.observe(t));let m,b=u?st(e):null;u&&p();function p(){const k=st(e);b&&(k.x!==b.x||k.y!==b.y||k.width!==b.width||k.height!==b.height)&&n(),b=k,m=requestAnimationFrame(p)}return n(),()=>{var k;a.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),d==null||d(),(k=f)==null||k.disconnect(),f=null,u&&cancelAnimationFrame(m)}}const di=qn,mi=Kn,hi=Un,gi=Hn,bi=(e,t,n)=>{const i=new Map,o={platform:ci,...n},r={...o.platform,_c:i};return jn(e,t,{...o,platform:r})};function pe(e){let t,n;return t=new cn({}),t.$on("openHelp",e[3]),{c(){jt(t.$$.fragment)},l(i){Ht(t.$$.fragment,i)},m(i,o){Ut(t,i,o),n=!0},p:ht,i(i){n||(z(t.$$.fragment,i),n=!0)},o(i){K(t.$$.fragment,i),n=!1},d(i){Yt(t,i)}}}function yi(e){let t,n,i=e[0].id==="left-menu"&&pe(e);return{c(){i&&i.c(),t=ct()},l(o){i&&i.l(o),t=ct()},m(o,r){i&&i.m(o,r),H(o,t,r),n=!0},p(o,r){o[0].id==="left-menu"?i?(i.p(o,r),r&1&&z(i,1)):(i=pe(o),i.c(),z(i,1),i.m(t.parentNode,t)):i&&(Rt(),K(i,1,1,()=>{i=null}),Ct())},i(o){n||(z(i),n=!0)},o(o){K(i),n=!1},d(o){o&&T(t),i&&i.d(o)}}}function wi(e){let t,n,i,o,r,s,l;t=new Tn({props:{$$slots:{default:[yi]},$$scope:{ctx:e}}}),i=new In({});const u=e[2].default,c=ve(u,e,e[4],null);return{c(){jt(t.$$.fragment),n=bt(),jt(i.$$.fragment),o=bt(),r=U("div"),s=U("div"),c&&c.c(),this.h()},l(a){Ht(t.$$.fragment,a),n=yt(a),Ht(i.$$.fragment,a),o=yt(a),r=Y(a,"DIV",{class:!0});var d=q(r);s=Y(d,"DIV",{class:!0});var h=q(s);c&&c.l(h),h.forEach(T),d.forEach(T),this.h()},h(){_(s,"class","w-full h-full"),_(r,"class","flex flex-col h-full w-full")},m(a,d){Ut(t,a,d),H(a,n,d),Ut(i,a,d),H(a,o,d),H(a,r,d),et(r,s),c&&c.m(s,null),l=!0},p(a,[d]){const h={};d&17&&(h.$$scope={dirty:d,ctx:a}),t.$set(h),c&&c.p&&(!l||d&16)&&xe(c,u,a,a[4],l?De(u,a[4],d,null):_e(a[4]),null)},i(a){l||(z(t.$$.fragment,a),z(i.$$.fragment,a),z(c,a),l=!0)},o(a){K(t.$$.fragment,a),K(i.$$.fragment,a),K(c,a),l=!1},d(a){a&&(T(n),T(o),T(r)),Yt(t,a),Yt(i,a),c&&c.d(a)}}}function pi(e,t,n){let i,{$$slots:o={},$$scope:r}=t;an.set({computePosition:bi,autoUpdate:ui,offset:di,shift:mi,flip:hi,arrow:gi}),wn();const s=Se();gt(e,s,u=>n(0,i=u));const l=()=>s.close();return e.$$set=u=>{"$$scope"in u&&n(4,r=u.$$scope)},[i,s,o,l,r]}class Ai extends Gt{constructor(t){super(),Jt(this,t,pi,wi,Zt,{})}}export{Ai as component,Di as universal};