import{d as l,f as i,o as n,h as r,w as c,a as t,t as o,c as m,i as h}from"./index-oLZBEta2.js";const p={class:"p-3 flex gap-5 bg-white border-solid border-1.5px border-gray-20 rounded-2 trans-300 md:p-5 lg:hover:shadow-lg lg:hover:scale-102"},_={class:"flex flex-center w-40% aspect-4/3 rounded-2 overflow-hidden md:w-40% lg:w-40%"},g=["src"],x={class:"w-60% flex flex-col justify-center md:pt-5 md:justify-between"},u={class:"flex flex-col gap-2.5"},f=["textContent"],w=["textContent"],C={key:0,class:"hidden md:flex md:justify-end md:items-center md:gap-2"},y=["textContent"],v=t("img",{class:"max-w-5",src:"https://img.icons8.com/material-rounded/400/2d2d2d/circled-right-2.png",alt:"circled-right-2"},null,-1),B=l({__name:"CaseCard",props:{title:{},description:{default:""},image:{},path:{},hint:{default:"Read Case"},isShowHint:{type:Boolean,default:!0}},setup(d){const e=d;return(s,b)=>{const a=i("router-link");return n(),r(a,{to:s.path},{default:c(()=>[t("div",p,[t("div",_,[t("img",{class:"w-auto h-full",src:e.image,alt:"case-image"},null,8,g)]),t("div",x,[t("div",u,[t("p",{class:"text-title-md text-gray-90 md:text-headline-md",textContent:o(e.title)},null,8,f),t("p",{class:"hidden text-content-md text-gray-70 md:block md:min-h-30 lg:min-h-28",textContent:o(e.description)},null,8,w)]),s.isShowHint?(n(),m("div",C,[t("p",{class:"text-caption-md-bolder-sparser text-gray-90 text-right hover:text-gray-80",textContent:o(s.hint)},null,8,y),v])):h("",!0)])])]),_:1},8,["to"])}}});export{B as _};
