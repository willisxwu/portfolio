import{d as n,o as l,c as a,a as e,t as s}from"./index-DB-5FCcf.js";const c={class:"p-5 bg-white rounded-2"},i=["src","alt"],r=["textContent"],p=["textContent"],x=n({__name:"SpotlightCard",props:{image:{},title:{},description:{}},setup(o){const t=o;return(_,d)=>(l(),a("div",c,[e("img",{class:"max-w-20",src:t.image,alt:`${t.title.toLowerCase().replaceAll(" ","-")}-icon`},null,8,i),e("div",null,[e("p",{class:"text-title-xl-lighter",textContent:s(t.title)},null,8,r),e("p",{class:"mt-2 text-content-sm",textContent:s(t.description)},null,8,p)])]))}});export{x as _};
