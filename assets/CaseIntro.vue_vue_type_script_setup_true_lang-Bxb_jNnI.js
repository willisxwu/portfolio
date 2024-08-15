import{_ as g}from"./SpotlightCard.vue_vue_type_script_setup_true_lang-BSP2jOCP.js";import{d as m,c as n,a as t,t as o,F as a,r as i,j as _,k as u,e as p,w as h,f as C,o as s,g as y,b as v}from"./index-DB-5FCcf.js";const w={class:"px-6 pt-10 flex flex-col gap-10 md:px-10 md:pt-5 md:gap-15 lg:px-20 lg:pt-10 lg:gap-20"},f={class:"py-5 md:max-w-200 lg:max-w-250"},k=["textContent"],b=["textContent"],D=["textContent"],I={class:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-330 lg:grid-cols-3"},V=["textContent"],B={class:"mt-2.5"},N=["textContent"],O=t("div",{class:"mb-5 text-headline-md text-gray-90"},"Development Criteria",-1),L=["textContent"],F={class:"mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-330 lg:grid-cols-3"},S=t("div",{class:"text-headline-md text-gray-90"},"Development Challenges",-1),$=["textContent"],j=["textContent"],E={key:0},M=t("div",{class:"mb-5 text-headline-md text-gray-90"},"Outcome",-1),T={class:"flex flex-col gap-15"},W=["textContent"],q=["src"],H=m({__name:"CaseIntro",props:{caseIntro:{},caseLists:{},criteriaDescription:{},caseCriteria:{},caseChallenge:{},caseOutcome:{}},setup(r){const l=r;return(d,z)=>{const x=C("router-link");return s(),n("div",w,[t("div",f,[t("div",{class:"text-title-lg-lighter text-gray-90",textContent:o(l.caseIntro.title)},null,8,k),t("p",{class:"mt-2.5 text-headline-xl text-gray-90",textContent:o(l.caseIntro.description)},null,8,b),t("p",{class:"mt-10 text-title-lg-lighter text-gray-70",textContent:o(l.caseIntro.effect)},null,8,D)]),t("div",I,[(s(!0),n(a,null,i(l.caseLists,e=>(s(),n("div",{class:"p-5 bg-white rounded-2",key:e.title},[t("div",{class:"text-title-xl-lighter text-gray-90",textContent:o(e.title)},null,8,V),t("ul",B,[(s(!0),n(a,null,i(e.list,c=>(s(),n("li",{class:"py-1",key:c},[t("span",{class:"text-content-sm text-gray-70",textContent:o(c)},null,8,N)]))),128))])]))),128))]),t("div",null,[O,t("p",{class:"text-content-md text-gray-70 md:max-w-200 lg:max-w-250",textContent:o(l.criteriaDescription)},null,8,L),t("div",F,[(s(!0),n(a,null,i(l.caseCriteria,e=>(s(),y(g,{key:e.title,image:e.image,title:e.title,description:e.description},null,8,["image","title","description"]))),128))])]),t("div",null,[S,(s(!0),n(a,null,i(l.caseChallenge,e=>(s(),n("div",{class:"mt-5 md:max-w-200 lg:max-w-250",key:e.title},[t("p",{class:"text-title-lg-lighter text-gray-70",textContent:o(e.title)},null,8,$),t("p",{class:"text-content-sm text-gray-70",textContent:o(e.description)},null,8,j)]))),128))]),l.caseOutcome?(s(),n("div",E,[M,t("div",T,[(s(!0),n(a,null,i(l.caseOutcome,e=>(s(),n("div",{key:e.title},[t("p",{class:"text-content-sm text-gray-70",textContent:o(e.title)},null,8,W),t("img",{class:"mt-3 w-full rounded-2 md:max-w-200",src:e.image,alt:"case-outcome-image"},null,8,q)]))),128))])])):_("",!0),t("div",null,[u(d.$slots,"default")]),p(x,{to:"/works",class:"px-4 py-1 w-fit block bg-gray-70 text-white text-content-md-bolder rounded-1.5 trans-200 hover:bg-gray-50 hover:text-white"},{default:h(()=>[v(" View More Works ")]),_:1})])}}});export{H as _};
