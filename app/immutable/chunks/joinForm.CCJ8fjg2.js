import{s as oe,e as p,b as h,j as y,d as u,f,i as w,n as N,p as _e,q as ie,a as V,c as M,r as L,l as _,u as G,v as ae,w as pe,g as ce,x as he,y as O,z as re,A as me,B as ve,C as be,t as S,k as A,m as ge}from"./scheduler.C1l866yk.js";import{S as ue,i as fe,g as ke,b as Z,e as ye,t as K,f as we,c as xe,a as Ee,m as je,d as Ie}from"./index.6PR-mAdx.js";import{e as le,a as P,g as Ce,f as De,j as Re,c as Te}from"./globals.DBteDoXN.js";function ne(l,t,e){const a=l.slice();return a[2]=t[e],a[4]=e,a}function se(l){let t,e,a,n,o,r;function d(){return l[1](l[2])}return{c(){t=p("div"),e=p("button"),n=V(),this.h()},l(s){t=h(s,"DIV",{class:!0});var i=y(t);e=h(i,"BUTTON",{class:!0,style:!0}),y(e).forEach(u),n=M(i),i.forEach(u),this.h()},h(){f(e,"class",a="shrink-0 transition-all box-content hover:scale-90 rounded-full overflow-hidden bg-surface-900 border-4 "+(l[0]===l[2]?"border-primary-500 scale-90":"border-surface-800 scale-75")),L(e,"width","100px"),L(e,"height","100px"),L(e,"background-image","url('avatars.png')"),L(e,"background-position",-l[4]*100+"px 0"),f(t,"class","w-1/4 p-2 flex items-center justify-center")},m(s,i){w(s,t,i),_(t,e),_(t,n),o||(r=G(e,"click",d),o=!0)},p(s,i){l=s,i&1&&a!==(a="shrink-0 transition-all box-content hover:scale-90 rounded-full overflow-hidden bg-surface-900 border-4 "+(l[0]===l[2]?"border-primary-500 scale-90":"border-surface-800 scale-75"))&&f(e,"class",a)},d(s){s&&u(t),o=!1,r()}}}function Ve(l){let t,e=le(P),a=[];for(let n=0;n<e.length;n+=1)a[n]=se(ne(l,e,n));return{c(){t=p("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){t=h(n,"DIV",{class:!0});var o=y(t);for(let r=0;r<a.length;r+=1)a[r].l(o);o.forEach(u),this.h()},h(){f(t,"class","flex flex-wrap")},m(n,o){w(n,t,o);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(t,null)},p(n,[o]){if(o&1){e=le(P);let r;for(r=0;r<e.length;r+=1){const d=ne(n,e,r);a[r]?a[r].p(d,o):(a[r]=se(d),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},i:N,o:N,d(n){n&&u(t),_e(a,n)}}}function Me(l,t,e){let{avatar:a}=t;ie(()=>{e(0,a=P[Math.floor(Math.random()*P.length)])});const n=o=>e(0,a=o);return l.$$set=o=>{"avatar"in o&&e(0,a=o.avatar)},[a,n]}class Ne extends ue{constructor(t){super(),fe(this,t,Me,Ve,oe,{avatar:0})}}function Se(l){let t,e,a,n,o,r,d,s,i,x,k,E,U="Choisis ton avatar",v,D,j,z,F,m,R,J,Q;function W(c,b){return c[0]?qe:Ue}let q=W(l),g=q(l);function de(c){l[7](c)}let X={};l[2]!==void 0&&(X.avatar=l[2]),j=new Ne({props:X}),pe.push(()=>we(j,"avatar",de));function Y(c,b){return c[0]?He:Be}let B=Y(l),I=B(l);return{c(){t=p("div"),e=p("div"),a=p("img"),o=V(),r=p("header"),g.c(),d=V(),s=p("form"),i=p("input"),x=V(),k=p("div"),E=p("div"),E.textContent=U,v=V(),D=p("div"),xe(j.$$.fragment),F=V(),m=p("button"),I.c(),this.h()},l(c){t=h(c,"DIV",{class:!0});var b=y(t);e=h(b,"DIV",{class:!0});var C=y(e);a=h(C,"IMG",{src:!0,alt:!0,class:!0}),o=M(C),r=h(C,"HEADER",{class:!0});var $=y(r);g.l($),$.forEach(u),d=M(C),s=h(C,"FORM",{});var T=y(s);i=h(T,"INPUT",{class:!0,type:!0,placeholder:!0}),x=M(T),k=h(T,"DIV",{class:!0});var H=y(k);E=h(H,"DIV",{class:!0,"data-svelte-h":!0}),ce(E)!=="svelte-r3vr40"&&(E.textContent=U),v=M(H),D=h(H,"DIV",{class:!0});var ee=y(D);Ee(j.$$.fragment,ee),ee.forEach(u),H.forEach(u),F=M(T),m=h(T,"BUTTON",{type:!0,class:!0});var te=y(m);I.l(te),te.forEach(u),T.forEach(u),C.forEach(u),b.forEach(u),this.h()},h(){he(a.src,n="logo.png")||f(a,"src",n),f(a,"alt","logo"),f(a,"class","w-auto h-28 mx-auto"),f(r,"class","card-header font-bold text-center pt-2 text-xl"),f(i,"class","input text-lg my-4"),f(i,"type","text"),f(i,"placeholder","Pseudo"),f(E,"class","pt-4 font-bold text-center"),f(D,"class","p-2"),f(k,"class","card max-w-md rounded-lg"),f(m,"type","button"),f(m,"class","btn btn-lg mt-4 w-full variant-filled-primary"),O(m,"opacity-50",!l[4]),O(m,"cursor-not-allowed",!l[4]),f(e,"class","flex flex-col"),f(t,"class","p-4 flex items-center justify-center w-full min-h-screen")},m(c,b){w(c,t,b),_(t,e),_(e,a),_(e,o),_(e,r),g.m(r,null),_(e,d),_(e,s),_(s,i),re(i,l[1]),_(s,x),_(s,k),_(k,E),_(k,v),_(k,D),je(j,D,null),_(s,F),_(s,m),I.m(m,null),R=!0,J||(Q=[G(i,"input",l[6]),G(m,"click",l[5]),me(De.call(null,s,!0))],J=!0)},p(c,b){q===(q=W(c))&&g?g.p(c,b):(g.d(1),g=q(c),g&&(g.c(),g.m(r,null))),b&2&&i.value!==c[1]&&re(i,c[1]);const C={};!z&&b&4&&(z=!0,C.avatar=c[2],ve(()=>z=!1)),j.$set(C),B!==(B=Y(c))&&(I.d(1),I=B(c),I&&(I.c(),I.m(m,null))),(!R||b&16)&&O(m,"opacity-50",!c[4]),(!R||b&16)&&O(m,"cursor-not-allowed",!c[4])},i(c){R||(K(j.$$.fragment,c),R=!0)},o(c){Z(j.$$.fragment,c),R=!1},d(c){c&&u(t),g.d(),Ie(j),I.d(),J=!1,be(Q)}}}function Ae(l){let t,e='<div class="flex flex-col"><span class="px-3 py-1 text-xl font-bold bg-surface-900 rounded-md text-center shadow">Chargement...</span></div>';return{c(){t=p("div"),t.innerHTML=e,this.h()},l(a){t=h(a,"DIV",{class:!0,"data-svelte-h":!0}),ce(t)!=="svelte-1005t80"&&(t.innerHTML=e),this.h()},h(){f(t,"class","p-4 flex items-center justify-center w-full min-h-screen")},m(a,n){w(a,t,n)},p:N,i:N,o:N,d(a){a&&u(t)}}}function Ue(l){let t,e;return{c(){t=S("Rejoindre #"),e=S(l[3])},l(a){t=A(a,"Rejoindre #"),e=A(a,l[3])},m(a,n){w(a,t,n),w(a,e,n)},p(a,n){n&8&&ge(e,a[3])},d(a){a&&(u(t),u(e))}}}function qe(l){let t;return{c(){t=S("Nouvelle partie")},l(e){t=A(e,"Nouvelle partie")},m(e,a){w(e,t,a)},p:N,d(e){e&&u(t)}}}function Be(l){let t;return{c(){t=S("Rejoindre la partie")},l(e){t=A(e,"Rejoindre la partie")},m(e,a){w(e,t,a)},d(e){e&&u(t)}}}function He(l){let t;return{c(){t=S("Créer la partie")},l(e){t=A(e,"Créer la partie")},m(e,a){w(e,t,a)},d(e){e&&u(t)}}}function Le(l){let t,e,a,n;const o=[Ae,Se],r=[];function d(s,i){return!s[0]&&!s[3]?0:1}return t=d(l),e=r[t]=o[t](l),{c(){e.c(),a=ae()},l(s){e.l(s),a=ae()},m(s,i){r[t].m(s,i),w(s,a,i),n=!0},p(s,[i]){let x=t;t=d(s),t===x?r[t].p(s,i):(ke(),Z(r[x],1,1,()=>{r[x]=null}),ye(),e=r[t],e?e.p(s,i):(e=r[t]=o[t](s),e.c()),K(e,1),e.m(a.parentNode,a))},i(s){n||(K(e),n=!0)},o(s){Z(e),n=!1},d(s){s&&u(a),r[t].d(s)}}}function Oe(l,t,e){let a,{creating:n=!1}=t,o,r="",d=null;ie(()=>{const v=new URL(window.location.href);e(3,d=v.searchParams.get("room"))});const s=Ce();async function i(){if(!(!a||!d||!o))try{await Re(d,r,o)}catch(v){s.trigger({message:v.message,background:"variant-filled-error"})}}async function x(){!a||!o||Te(r,o)}async function k(){if(n)return await x();await i()}function E(){r=this.value,e(1,r)}function U(v){o=v,e(2,o)}return l.$$set=v=>{"creating"in v&&e(0,n=v.creating)},l.$$.update=()=>{l.$$.dirty&2&&e(4,a=/^[-_a-zA-Z0-9]{3,15}$/.test(r))},[n,r,o,d,a,k,E,U]}class Je extends ue{constructor(t){super(),fe(this,t,Oe,Le,oe,{creating:0})}}export{Je as J};