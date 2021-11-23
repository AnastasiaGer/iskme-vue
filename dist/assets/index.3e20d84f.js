import{o as c,c as r,a as g,b as e,t as _,r as u,F as v,d as x,e as p,f as T,g as b}from"./vendor.7d7dc7de.js";const k=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};k();var m=(n,l)=>{for(const[s,o]of l)n[s]=o;return n};const C={},y={class:"pagination"},N=g('<ul class="pagination-list"><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li><li class="pagination-list-item"></li></ul>',1),S=[N];function A(n,l){return c(),r("div",y,S)}var f=m(C,[["render",A]]);const I={props:{collection:{type:Object,required:!0}}},M={class:"collection-item"},$={class:"collection-item-info"},D=["src"],L={class:"collection-item-title"},P=e("button",{class:"btn btn--show-big"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"20px",height:"20px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("g",{fill:"none"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",fill:"#fff"})])])],-1),j={class:"collection-item-banner"},B={class:"collection-item-microsite"},z={class:"collection-item-resources"};function O(n,l,s,o,i,t){return c(),r("li",M,[e("div",$,[e("img",{class:"collection-item-img",src:"src/assets/collections/"+s.collection.collectionThumbnail,alt:"Collection Photo"},null,8,D),e("h4",L,_(s.collection.collectionTitle),1),P]),e("div",j,[e("p",B,_(s.collection.micrositeTitle),1),e("p",z,_(s.collection.resourcesNumber)+" resources",1)])])}var E=m(I,[["render",O]]);const F={name:"NewCollections",props:["mockData"],components:{Pagination:f,ItemCollection:E},data(){return{currentSlideIndex:0}},methods:{prevSlide(){this.currentSlideIndex>0&&this.currentSlideIndex--},nextSlide(){this.currentSlideIndex++}}},H={class:"collection-wrapper container-fluid"},R=e("div",{class:"title-wrapper"},[e("h3",{class:"title"},"New Collection"),e("a",{class:"sub-title",href:"#"},"View All collections")],-1),V={class:"collection"};function J(n,l,s,o,i,t){const a=u("ItemCollection"),h=u("Pagination");return c(),r(v,null,[e("div",H,[R,e("ul",V,[(c(!0),r(v,null,x(s.mockData,(d,w)=>(c(),T(a,{key:w,collection:d},null,8,["collection"]))),128))])]),e("button",{onClick:l[0]||(l[0]=(...d)=>t.prevSlide&&t.prevSlide(...d))},"Prev"),e("button",{onClick:l[1]||(l[1]=(...d)=>t.nextSlide&&t.nextSlide(...d))},"Next"),p(h)],64)}var Y=m(F,[["render",J]]);const q={},G={class:"header"},K=e("nav",{class:"header-nav"},[e("ul",{class:"site-navigation"},[e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Logo")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Discover")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Community")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"About")]),e("li",{class:"site-navigation-item"},[e("a",{href:"#",class:"site-navigation-link"},"Logo-small")])]),e("ul",{class:"user-navigation"},[e("li",{class:"user-navigation-item","aria-label":"Search"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Search"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},[e("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"#484F60"})])])]),e("li",{class:"user-navigation-item","aria-label":"Notes"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Notes"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("path",{d:"M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z",fill:"#484F60"})])])]),e("li",{class:"user-navigation-item","aria-label":"Log In"},[e("a",{href:"#"},[e("span",{class:"visually-hidden"},"Log In"),e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"35px",height:"35px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},[e("g",{fill:"#484F60"},[e("path",{d:"M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"}),e("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})])])])])])],-1),U=g('<div class="search-nav"><ul class="search-nav-list"><li class="search-nav-list-item search-nav-list-item--active"><a href="#" class="search-nav-link">Browse Exchange</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Search Exchange</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Mappings</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Review Records</a></li><li class="search-nav-list-item"><a href="#" class="search-nav-link">Preferences</a></li></ul></div>',1),Z=[K,U];function Q(n,l){return c(),r("header",G,Z)}var W=m(q,[["render",Q]]);const X={name:"app",data(){return{mockData:[{micrositeTitle:"ATLAS",id:1,collectionTitle:"Discover CCSS Aligned English Language Arts",collectionThumbnail:"1.jpeg",resourcesNumber:22,modifiedDate:"May 4, 2020"},{micrositeTitle:"ATLAZ CTEAS",id:2,collectionTitle:"Discover CCSS Aligned Mathematics",collectionThumbnail:"2.jpeg",resourcesNumber:122,modifiedDate:"December 24, 2021"},{micrositeTitle:"CT",id:3,collectionTitle:"NGSS",collectionThumbnail:"3.png",resourcesNumber:12,modifiedDate:"April 14, 2019"},{micrositeTitle:"INFOHIO",id:4,collectionTitle:"STEAM",collectionThumbnail:"4.jpeg",resourcesNumber:26,modifiedDate:"October 13, 2021"},{micrositeTitle:"LOUIS",id:5,collectionTitle:"TeachEngineering",collectionThumbnail:"5.png",resourcesNumber:267,modifiedDate:"November 19, 2020"},{micrositeTitle:"MI",id:5,collectionTitle:"PheT Interactives",collectionThumbnail:"6.jpeg",resourcesNumber:67,modifiedDate:"June 8, 2021"},{micrositeTitle:"MI",id:5,collectionTitle:"PheT Interactives",collectionThumbnail:"6.jpeg",resourcesNumber:67,modifiedDate:"June 8, 2021"},{micrositeTitle:"MI",id:5,collectionTitle:"PheT Interactives",collectionThumbnail:"6.jpeg",resourcesNumber:67,modifiedDate:"June 8, 2021"},{micrositeTitle:"MI",id:5,collectionTitle:"PheT Interactives",collectionThumbnail:"6.jpeg",resourcesNumber:67,modifiedDate:"June 8, 2021"},{micrositeTitle:"MI",id:5,collectionTitle:"PheT Interactives",collectionThumbnail:"6.jpeg",resourcesNumber:67,modifiedDate:"June 8, 2021"}]}},components:{NewCollections:Y,Header:W,Pagination:f}},ee=e("h2",null,"Browse",-1),ie=e("footer",null,null,-1);function te(n,l,s,o,i,t){const a=u("Header"),h=u("NewCollections");return c(),r(v,null,[p(a),e("main",null,[ee,p(h,{mockData:i.mockData},null,8,["mockData"])]),ie],64)}var le=m(X,[["render",te]]);b(le).mount("#app");
