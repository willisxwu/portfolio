import{d as l,h as r,f as c,o as n,g as m,w as p,a as t,t as o,i as h,v as _,u,c as x,j as g}from"./index-DI0fyJwC.js";const f={class:"p-3 flex gap-5 bg-white border-solid border-1.5px border-gray-20 rounded-2 trans-300 md:p-5 lg:hover:shadow-lg lg:hover:scale-102"},w={class:"flex flex-center w-40% aspect-4/3 rounded-2 overflow-hidden md:w-40% lg:w-40%"},v=["src"],C={class:"w-60% flex flex-col justify-center md:pt-5 md:justify-between"},y={class:"flex flex-col gap-2.5"},b=["textContent"],k=["textContent"],B={key:0,class:"hidden md:mt-5 md:flex md:justify-end md:items-center md:gap-2"},j=["textContent"],S=t("img",{class:"max-w-5",src:"https://img.icons8.com/material-rounded/400/2d2d2d/circled-right-2.png",alt:"circled-right-2"},null,-1),N=l({__name:"CaseCard",props:{title:{},description:{default:""},image:{},path:{},hint:{default:"Read Case"},isShowHint:{type:Boolean,default:!0}},setup(a){const e=a,{isMobile:i}=r();return(s,D)=>{const d=c("router-link");return n(),m(d,{to:s.path},{default:p(()=>[t("div",f,[t("div",w,[t("img",{class:"w-auto h-full",src:e.image,alt:"case-image"},null,8,v)]),t("div",C,[t("div",y,[t("p",{class:"text-title-md text-gray-90 md:text-title-xl",textContent:o(e.title)},null,8,b),h(t("p",{class:"md:text-content-md md:text-gray-70 md:text-ellipsis md:line-clamp-3 md:overflow-hidden",textContent:o(e.description)},null,8,k),[[_,!u(i)]])]),s.isShowHint?(n(),x("div",B,[t("p",{class:"text-caption-md-bolder-sparser text-gray-90 text-right hover:text-gray-80",textContent:o(s.hint)},null,8,j),S])):g("",!0)])])]),_:1},8,["to"])}}});export{N as _};
