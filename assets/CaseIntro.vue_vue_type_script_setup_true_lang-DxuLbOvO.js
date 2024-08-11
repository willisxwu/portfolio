import{_}from"./SpotlightCard.vue_vue_type_script_setup_true_lang-D9vJJvfd.js";import{d as h,c as n,a as t,t as l,F as a,r,i as m,j as u,e as p,w as g,f as C,o as s,h as y,g as v}from"./index-BNaHkyW8.js";const f={class:"px-50 pt-20"},w={class:"py-5 max-w-250"},k=["textContent"],b=["textContent"],D=["textContent"],I={class:"mt-20 flex flex-wrap gap-10"},V=["textContent"],B={class:"mt-2.5"},N=["textContent"],O={class:"mt-20"},L=t("div",{class:"text-headline-md-lighter text-gray-90"},"Development Criteria",-1),F=["textContent"],S={class:"mt-5 flex flex-wrap gap-5"},$={class:"mt-20"},j=t("div",{class:"mb-5 text-headline-md-lighter text-gray-90"}," Development Challenges ",-1),E=["textContent"],M=["textContent"],T={key:0,class:"mt-20"},W=t("div",{class:"mb-5 text-headline-md-lighter text-gray-90"},"Outcome",-1),q={class:"flex flex-col gap-15"},z=["textContent"],A=["src"],G={class:"mt-20"},P=h({__name:"CaseIntro",props:{caseIntro:{},caseLists:{},criteriaDescription:{},caseCriteria:{},caseChallenge:{},caseOutcome:{}},setup(c){const o=c;return(d,H)=>{const x=C("router-link");return s(),n("div",f,[t("div",w,[t("div",{class:"text-title-lg-lighter text-gray-90",textContent:l(o.caseIntro.title)},null,8,k),t("p",{class:"mt-2.5 text-headline-xl text-gray-90",textContent:l(o.caseIntro.description)},null,8,b),t("p",{class:"mt-10 text-title-lg-lighter text-gray-70",textContent:l(o.caseIntro.effect)},null,8,D)]),t("div",I,[(s(!0),n(a,null,r(o.caseLists,e=>(s(),n("div",{class:"p-5 w-100 bg-white rounded-2",key:e.title},[t("div",{class:"text-title-xl-lighter text-gray-90",textContent:l(e.title)},null,8,V),t("ul",B,[(s(!0),n(a,null,r(e.list,i=>(s(),n("li",{class:"py-1",key:i},[t("span",{class:"text-content-sm text-gray-70",textContent:l(i)},null,8,N)]))),128))])]))),128))]),t("div",O,[L,t("p",{class:"max-w-250 text-content-md text-gray-70",textContent:l(o.criteriaDescription)},null,8,F),t("div",S,[(s(!0),n(a,null,r(o.caseCriteria,e=>(s(),y(_,{key:e.title,class:"max-w-85",image:e.image,title:e.title,description:e.description},null,8,["image","title","description"]))),128))])]),t("div",$,[j,(s(!0),n(a,null,r(o.caseChallenge,e=>(s(),n("div",{class:"mt-5 max-w-250",key:e.title},[t("p",{class:"text-title-lg-lighter text-gray-70",textContent:l(e.title)},null,8,E),t("p",{class:"text-content-sm text-gray-70",textContent:l(e.description)},null,8,M)]))),128))]),o.caseOutcome?(s(),n("div",T,[W,t("div",q,[(s(!0),n(a,null,r(o.caseOutcome,e=>(s(),n("div",{key:e.title},[t("p",{class:"text-content-sm text-gray-70",textContent:l(e.title)},null,8,z),t("img",{class:"mt-3 max-w-200 rounded-2",src:e.image,alt:"case-outcome-image"},null,8,A)]))),128))])])):m("",!0),u(d.$slots,"default"),t("div",G,[p(x,{to:"/works",class:"px-4 py-2 border-solid border-1.5px border-gray-70 rounded-2 trans-200 hover:bg-gray-70 hover:text-white"},{default:g(()=>[v(" View More Works ")]),_:1})])])}}});export{P as _};
