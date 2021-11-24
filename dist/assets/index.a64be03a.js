import{o,c as r,a as e,b as g,r as p,d as u,e as f,K as $,F as m,w as y,f as k,t as v,n as C,g as S,h as b,i as M}from"./vendor.0c01e36a.js";const A=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}};A();var d=(s,i)=>{for(const[a,c]of i)s[a]=c;return s};const N={},I={class:"header"},H=e("nav",{class:"header-nav"},[e("ul",{class:"site-navigation"},[e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Logo")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Discover")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Community")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"About")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Logo-small")])]),e("ul",{class:"user-navigation"},[e("li",{class:"user-navigation-item","aria-label":"Search"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Search"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},[e("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"#484F60"})])])]),e("li",{class:"user-navigation-item","aria-label":"Notes"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Notes"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("path",{d:"M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z",fill:"#484F60"})])])]),e("li",{class:"user-navigation-item","aria-label":"Log In"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Log In"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},[e("g",{fill:"#484F60"},[e("path",{d:"M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"}),e("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})])])])])])],-1),L=g('<div class="search-nav"><ul class="search-nav-list"><li class="search-nav-list-item search-nav-list-item--active"><a href="#" class="search-nav-link">Browse Exchange</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Search Exchange</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Mappings</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Review Records</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Preferences</a></li></ul></div>',1),P=[H,L];function z(s,i){return o(),r("header",I,P)}var w=d(N,[["render",z]]);const B={name:"main-wrapper",components:{Header:w},props:{},data(){return{title:"Main wrapper"}},computed:{},methods:{},watch:{}},D={class:"main-wrapper"};function R(s,i,a,c,n,t){const l=p("Header"),h=p("router-view");return o(),r("div",D,[u(l),(o(),f($,null,[u(h)],1024))])}var V=d(B,[["render",R]]);const F={name:"app",components:{MainWrapper:V}},O={id:"app"};function W(s,i,a,c,n,t){const l=p("MainWrapper");return o(),r("div",O,[u(l)])}var E=d(F,[["render",W]]);const T={name:"app",data(){return{mockData:[]}},mounted(){fetch("https://api.npoint.io/80a1bc56007c395a26b3").then(s=>s.json()).then(s=>{console.log(s),this.mockData=s})},components:{Header:w}},Y=e("main",null,[e("h2",null,"Collections")],-1),K=e("footer",null,null,-1);function j(s,i,a,c,n,t){const l=p("Header");return o(),r(m,null,[u(l),Y,K],64)}var q=d(T,[["render",j]]);const G={name:"main-page",props:{},data(){return{}},computed:{}},J={class:"main-page"},Q=e("h1",null,"Browse collections",-1),U=k(" to New Collections ");function X(s,i,a,c,n,t){const l=p("router-link");return o(),r("div",J,[Q,e("p",null,[u(l,{to:{name:"NewCollections"}},{default:y(()=>[U]),_:1})])])}var Z=d(G,[["render",X]]);const ee={},te={class:"pagination"},ne=g('<ul class="pagination-list"><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li></ul>',1),ie=[ne];function se(s,i){return o(),r("div",te,ie)}var ae=d(ee,[["render",se]]);const le={props:{collection:{type:Object,required:!0}}},oe={class:"collection-item"},ce={class:"collection-item-info"},re=["src"],de={class:"collection-item-title"},_e=e("button",{class:"btn btn--show-big"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"20px",height:"20px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("g",{fill:"none"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",fill:"#fff"})])])],-1),pe={class:"collection-item-banner"},ue={class:"collection-item-microsite"},he={class:"collection-item-resources"};function me(s,i,a,c,n,t){return o(),r("li",oe,[e("div",ce,[e("img",{class:"collection-item-img",src:"src/assets/collections/"+a.collection.collectionThumbnail,alt:"Collection Photo"},null,8,re),e("h4",de,v(a.collection.collectionTitle),1),_e]),e("div",pe,[e("p",ue,v(a.collection.micrositeTitle),1),e("p",he,v(a.collection.resourcesNumber)+" resources",1)])])}var ve=d(le,[["render",me]]);const ge={name:"NewCollections",props:["mockData"],components:{Pagination:ae,ItemCollection:ve},data(){return{currentSlideIndex:0}},methods:{prevSlide(){this.currentSlideIndex>0&&this.currentSlideIndex--},nextSlide(){this.currentSlideIndex>=this.mockData.length-10?(this.currentSlideIndex=0,console.log(this.currentSlideIndex)):this.currentSlideIndex++},viewAllHandler(){console.log("cgcgcgcg")}}},fe={class:"collection-wrapper container-fluid"},we={class:"title-wrapper"},xe=e("h3",{class:"title"},"New Collection",-1);function $e(s,i,a,c,n,t){const l=p("ItemCollection"),h=p("Pagination");return o(),r(m,null,[e("div",fe,[e("div",we,[xe,e("a",{class:"sub-title",href:"#",onClick:i[0]||(i[0]=(..._)=>t.viewAllHandler&&t.viewAllHandler(..._))},"View All collections")]),e("ul",{class:"collection",style:C({"margin-left":"-"+100*n.currentSlideIndex+"%"})},[(o(!0),r(m,null,S(a.mockData,(_,x)=>(o(),f(l,{key:x,collection:_},null,8,["collection"]))),128))],4)]),e("button",{onClick:i[1]||(i[1]=(..._)=>t.prevSlide&&t.prevSlide(..._))},"Prev"),e("button",{onClick:i[2]||(i[2]=(..._)=>t.nextSlide&&t.nextSlide(..._))},"Next"),u(h)],64)}var ye=d(ge,[["render",$e]]);const ke=[{path:"/",name:"mainPage",component:Z},{path:"/new-collections",name:"NewCollections",component:ye},{path:"/all-collections",name:"AllCollections",component:q}],Ce=b({history:createWebHashHistory(),routes:ke});M(E).use(Ce).mount("#app");
