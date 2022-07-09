(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"assets/b5f9088aaccb17ec65ba.svg",n=t.p+"assets/01d18bea0845b6ea121e.svg",o=t.p+"assets/dcaead8cb08d45a1dcd2.png",r=t.p+"assets/35a3145c9a435ac23d9a.svg",a=t.p+"assets/1ba141546588c2e5ff88.svg",c=t.p+"assets/893bb093428334e7dcd2.png",i=t.p+"assets/56181e1e657b5ced1ca4.svg",s=t.p+"assets/23393dc83f6da1c49c84.png";function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}window.addEventListener("DOMContentLoaded",(function(){document.body.style.overflow="hidden";var t,l=document.querySelector("#first-page-btn"),m=document.querySelector("#second-page-btn"),h=document.querySelector(".main__wrapper"),g=document.querySelector(".main__inner"),p=document.querySelectorAll(".forslide"),b=document.querySelector(".main__inner-pg1"),_=document.querySelector(".main__inner-pg2"),f=document.querySelector(".main__btn"),y=document.querySelectorAll(".header__page-changer"),v=h.offsetWidth-20,w=b.offsetWidth,S=0;g.style.width=v*p.length+"px",_.style.width=v+"px",g.style.display="flex",g.style.transition="0.8s all",p.forEach((function(t){t.style.width=v})),_.style.display="none",l.classList.add("header__page-changer--active"),l.addEventListener("click",(function(){document.querySelectorAll(".main__ingradient")[7].classList.contains("showed")&&(S>0&&(S-=v,g.style.transform="translateX(-".concat(S,"px)"),b.style.display="flex",_.style.display="none",_.style.marginLeft=w,l.classList.add("header__page-changer--active"),m.classList.remove("header__page-changer--active"),document.querySelectorAll(".main__ingradient").forEach((function(t){t.style.opacity=0}))),document.querySelectorAll(".main__ingradient").forEach((function(t){t.classList.remove("showed")})))})),(t=[]).push(f,m),t.forEach((function(t){t.addEventListener("click",(function(){setTimeout((function(){0==S&&(S+=v,g.style.transform="translateX(-".concat(S,"px)"),b.style.display="none",_.style.display="flex",_.style.marginLeft="".concat(w,"px"),m.classList.add("header__page-changer--active"),l.classList.remove("header__page-changer--active"),document.querySelectorAll(".main__ingradient").forEach((function(t,e){var n=e*(e/2.5*100);setTimeout((function(){setTimeout((function(){t.style.opacity=1,t.classList.add("showed")}),n)}),250)})))}),1e3)}))}));var M=function(){function t(e,n,o,r,a,c,i,s,l,d,h,g,p,b,_){u(this,t),this.cssClass=e,this.top=n,this.topA=o,this.left=r,this.leftA=a,this.width=c,this.widthA=i,this.height=s,this.zIndex=l,this.zIndexA=d,this.rotate=h,this.rotateA=g,this.scale=p,this.duration=b,this.parent=document.querySelector(_),this.renderBurger(),this.burgerDoStartAni(),this.switchTo2Page(f,m),this.switchTo1Page()}return d(t,[{key:"burgerPosition",value:function(t,e,n,o,r,a,c,i){t.style.cssText="\n         top: ".concat(e,"%;\n         left: ").concat(n,"%;\n         width: ").concat(o,"%;\n         height: ").concat(r,"px;\n         z-index: ").concat(a,";\n         transform: translate(-50%, -50%) rotate(").concat(c,"deg) scaleX(").concat(i,");\n         background-size: 90%;\n         background-position: center;\n         background-repeat: no-repeat;\n         display: block;\n         position: absolute;\n         ")}},{key:"renderBurger",value:function(){var t=document.createElement("div");t.innerHTML="\n               <div></div>\n            ",this.parent.append(t),t.classList.add("".concat(this.cssClass)),this.burgerPosition(t,this.topA,this.leftA,this.widthA,this.height,this.zIndex,this.rotate,this.scale)}},{key:"burgerDoOpening",value:function(){document.querySelector(".".concat(this.cssClass)).animate([{top:"".concat(this.topA,"%"),left:"".concat(this.leftA,"%"),transform:"translate(-50%, -50%) rotate(".concat(this.rotateA,"deg) scaleX(").concat(this.scale),width:"".concat(this.widthA,"%"),zIndex:"".concat(this.zIndexA)},{top:"".concat(this.top-5,"%"),left:"".concat(this.left,"%"),transform:"translate(-50%, -50%) rotate(".concat(this.rotate,"deg) scaleX(").concat(this.scale),width:"".concat(this.width+2,"%"),zIndex:"".concat(this.zIndex)}],{duration:this.duration,easing:"ease"}),document.querySelector(".".concat(this.cssClass)).classList.contains("closed")?(document.querySelector(".".concat(this.cssClass)).classList.remove("closed"),document.querySelector(".".concat(this.cssClass)).classList.add("opened")):document.querySelector(".".concat(this.cssClass)).classList.add("opened")}},{key:"burgerDoFolding",value:function(){document.querySelector(".".concat(this.cssClass)).animate([{top:"".concat(this.top-5,"%"),left:"".concat(this.left,"%"),transform:"translate(-50%, -50%) rotate(".concat(this.rotate,"deg) scaleX(").concat(this.scale),width:"".concat(this.width+2,"%"),zIndex:"".concat(this.zIndex)},{top:"".concat(this.topA,"%"),left:"".concat(this.leftA,"%"),transform:"translate(-50%, -50%) rotate(".concat(this.rotateA,"deg) scaleX(").concat(this.scale),width:"".concat(this.widthA,"%"),zIndex:"".concat(this.zIndexA)}],{duration:this.duration,easing:"ease"}),document.querySelector(".".concat(this.cssClass)).classList.contains("opened")?(document.querySelector(".".concat(this.cssClass)).classList.remove("opened"),document.querySelector(".".concat(this.cssClass)).classList.add("closed")):document.querySelector(".".concat(this.cssClass)).classList.add("closed")}},{key:"burgerDoStartAni",value:function(){var t=this,e={transform:"translate(-50%, -50%) rotate(".concat(this.rotateA,"deg) scaleX(").concat(this.scale),width:"".concat(this.widthA,"%"),zIndex:"".concat(this.zIndexA)},n=e.transform,o=e.width,r=e.zIndex;document.querySelector(".".concat(this.cssClass)).animate([{top:"".concat(this.topA,"%"),left:"".concat(this.leftA,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA+1,"%"),left:"".concat(this.leftA+1,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA-1,"%"),left:"".concat(this.leftA-1,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA,"%"),left:"".concat(this.leftA,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA-1,"%"),left:"".concat(this.leftA+1,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA+1,"%"),left:"".concat(this.leftA-1,"%"),transform:n,width:o,zIndex:r},{top:"".concat(this.topA,"%"),left:"".concat(this.leftA,"%"),transform:n,width:o,zIndex:r}],{duration:700,iterations:2,easing:"linear"}),Promise.all(document.querySelector(".".concat(this.cssClass)).getAnimations().map((function(t){return t.finished}))).then((function(){t.burgerDoOpening()})),this.burgerPosition(document.querySelector(".".concat(this.cssClass)),this.top-5,this.left,this.width+2,this.height,this.zIndex,this.rotate,this.scale)}},{key:"switchTo2Page",value:function(t,e){var n=this,o=[];o.push(t,e),o.forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".".concat(n.cssClass)).classList.contains("opened")&&(n.burgerDoFolding(),Promise.all(document.querySelector(".".concat(n.cssClass)).getAnimations().map((function(t){return t.finished}))).then((function(){n.burgerPosition(document.querySelector(".".concat(n.cssClass)),n.topA,n.leftA,n.widthA,n.height,n.zIndexA,n.rotateA,n.scale)})))}))}))}},{key:"switchTo1Page",value:function(){var t=this;l.addEventListener("click",(function(){document.querySelector(".".concat(t.cssClass)).classList.contains("closed")&&(t.burgerDoOpening(),Promise.all(document.querySelector(".".concat(t.cssClass)).getAnimations().map((function(t){return t.finished}))).then((function(){t.burgerPosition(document.querySelector(".".concat(t.cssClass)),t.top-5,t.left,t.width+2,t.height,t.zIndex,t.rotate,t.scale)})))}))}}]),t}();new M("burger__bun-top",5,19,60,57.5,40,44,220,10,10,30,0,1,1500,".burger"),new M("burger__salad-top",9,40,50,57,40,45,130,9,9,25,0,1,1200,".burger"),new M("burger__mayo-top",19,36,55,57,32,37,100,9,9,30,0,-1,1500,".burger"),new M("burger__cucumber-1",22,45,39,45,15,17,60,8,8,20,0,1,1300,".burger"),new M("burger__cucumber-2",18,45,52,57,15,17,60,8,8,30,0,1,1300,".burger"),new M("burger__cucumber-3",34,45,57,57,15,17,60,8,8,-10,0,1,1100,".burger"),new M("burger__cucumber-4",36,45,72,70,15,17,60,8,8,40,0,1,1e3,".burger"),new M("burger__tomato-1",41,50,68,69,16,19,60,7,7,18,0,1,1200,".burger"),new M("burger__tomato-2",52,50,54,59,16,19,60,7,7,10,0,1,1e3,".burger"),new M("burger__tomato-3",32,50,36,46,16,19,60,7,7,-18,0,1,1300,".burger"),new M("burger__tomato-4",52,50,20,59,8,19,60,1,1,45,0,1,1500,".burger"),new M("burger__cutlet",54,54,55,58,45,45,160,6,6,-8,0,1,1500,".burger"),new M("burger__onion-1",32,67,86,70,11,12,60,1,1,25,0,1,1400,".burger"),new M("burger__onion-2",57,67,68,59,8,16,60,30,5,18,0,1,500,".burger"),new M("burger__onion-3",56,67,39,45,11,16,60,30,5,-30,0,1,500,".burger"),new M("burger__onion-4",68,67,59,59,16,16,60,7,5,16,0,1,800,".burger"),new M("burger__onion-5",72,67,61,70,16,16,60,7,5,-20,0,1,800,".burger"),new M("burger__onion-6",78,67,43,45,14,16,60,7,5,20,0,1,800,".burger"),new M("burger__cheese",86,73,58,58,42,42,160,5,4,-16,0,1,1200,".burger"),new M("burger__salad-bot",90,72,55,57,48,45,130,4,3,0,0,1,1200,".burger"),new M("burger__mayo-bot",100,78,55,58,32,37,100,2,2,-10,0,1,1500,".burger"),new M("burger__bun-bot",100,83,60,58,38,44,120,1,1,-12,0,1,1500,".burger"),new M("burger__emo-1",110,60,30,58,5,7,70,1,1,1,27,1,1700,".burger"),new M("burger__emo-2",77,60,82,58,3,5,70,1,1,1,27,1,1700,".burger"),new M("burger__emo-3",47,60,78,58,5,7,70,1,1,1,27,1,1700,".burger"),new M("burger__emo-4",47,60,26,58,3,5,40,1,1,1,27,1,1700,".burger"),y.forEach((function(t){t.onmouseenter=t.onmouseleave=function(e){var n=t.clientWidth,o=e.pageX-t.offsetLeft;o-10<0&&(o=0),o+10>n&&(o=n),t.style.setProperty("--x","".concat(o,"px"))}}));var q,A,L,I={burger:{cutletKey:[],mayoKey:[],onionKey:[],tomatoKey:[],cucumberKey:[],cheeseKey:[],saladKey:[],bunKey:[]},num:[],sum:[0],time:[0],oz:[0],kcal:[0],margin:{cutletMar:[],mayoMar:[],onionMar:[],tomatoMar:[],cucumberMar:[],cheeseMar:[],saladMar:[],bunMar:[]}},k=function(){function t(e,n,o,r,a,c,i,s,l,d,m,h,g,p,b,_){u(this,t),this.src=e,this.conImg=n,this.alt=o,this.title=r,this.price=a,this.time=c,this.oz=i,this.kcal=s,this.parent=document.querySelector(l),this.obj=d,this.imgKey=m,this.btnIdM=h,this.btnIdP=g,this.countId=p,this.startMargin=b,this.pathMargin=_,this.render(),this.counter(),this.default()}return d(t,[{key:"render",value:function(){var t=document.createElement("div");t.innerHTML='\n                  <div class="main__ingradient-inner">\n                     <img class="main__ingradient-img" src='.concat(this.src," alt=").concat(this.alt,' ">\n                     <div class="main__ingradient-name">').concat(this.title,'</div>\n                     <div class="main__counter">\n                     <button id="').concat(this.btnIdM,'" class="main__counter-minus"></button>\n                     <div id="').concat(this.countId,'" class="main__count"></div>\n                     <button id="').concat(this.btnIdP,'" class="main__counter-plus"></button>\n                  </div>\n               </div>\n            \n            '),this.parent.append(t),t.classList.add("main__ingradient")}},{key:"default",value:function(){document.querySelector("#".concat(this.countId)).innerHTML=0,document.querySelector(".main__total").innerHTML="$0.00",document.querySelector(".main__time").innerHTML="0.0 min",document.querySelector(".main__capacity").innerHTML="0 oz",document.querySelector(".main__kcal").innerHTML="0 kcal"}},{key:"counter",value:function(){var t=this,e=0;document.querySelector("#".concat(this.btnIdP)).addEventListener("click",(function(){setTimeout((function(){if(e<10){document.querySelector("#".concat(t.countId)).innerHTML=++e;var n=document.querySelector(".main__const-inner");t.imgKey.push(t.conImg),t.obj.num.push(t.title);var o=t.obj.num.length,r=document.createElement("div");r.classList.add(t.imgKey[t.imgKey.length-1]),r.classList.add("for_comparison"),r.classList.add("for_start_ani"),t.pathMargin.push(t.startMargin);var a=I.margin.cutletMar.concat(I.margin.mayoMar,I.margin.cucumberMar,I.margin.cheeseMar,I.margin.tomatoMar,I.margin.saladMar,I.margin.onionMar,I.margin.bunMar);a.unshift(0);var c=a.reduce((function(t,e){return t+e}));r.style="top: ".concat(c,"%"),n.append(r);var i=document.createElement("div");o>0&&document.querySelectorAll(".item__topbun").length<1?(i.classList.add("item__topbun"),n.append(i),document.querySelector(".item__topbun").animate([{top:"-400%",opacity:"0"},{top:"".concat(parseInt(c)-90,"%"),opacity:"1"}],{duration:400,easing:"ease-in-out"})):document.querySelector(".item__topbun").animate([{transform:"skew(0)",top:"".concat(parseInt(c)-90,"%"),left:"0%"},{transform:"skew(-5deg, 5deg)",top:"".concat(parseInt(c)-90-15,"%"),left:"2%"},{transform:"skew(0)",top:"".concat(parseInt(c)-90,"%"),left:"0%"}],{duration:500,easing:"ease-in-out"}),document.querySelector(".item__topbun").style.top="".concat(parseInt(c)-90,"%"),t.obj.sum.push(t.price);var s=t.obj.sum.reduce((function(t,e){return t+e}));document.querySelector(".main__total").innerHTML="$".concat(s.toFixed(2)),t.obj.time.push(t.time);var u=t.obj.time.reduce((function(t,e){return t+e}));document.querySelector(".main__time").innerHTML="".concat(u.toFixed(1)," min"),t.obj.oz.push(t.oz);var l=t.obj.oz.reduce((function(t,e){return t+e}));document.querySelector(".main__capacity").innerHTML="".concat(l," oz"),t.obj.kcal.push(t.kcal);var d=t.obj.kcal.reduce((function(t,e){return t+e}));document.querySelector(".main__kcal").innerHTML="".concat(d," kcal")}}),100)})),document.querySelector("#".concat(this.btnIdM)).addEventListener("click",(function(){setTimeout((function(){if(e>0){document.querySelector("#".concat(t.countId)).innerHTML=--e,t.imgKey.pop(t.conImg);var n=t.pathMargin.pop(t.startMargin),o="."+t.conImg,r=document.querySelectorAll(o),a=r[r.length-1].style.top;console.log(r.length-1);var c=(t.obj.num.length-1)%2==0?"for_del_ani_left":"for_del_ani_right";r[r.length-1].classList.replace("for_start_ani",c),setTimeout((function(){r[r.length-1].remove()}),100);var i=document.querySelectorAll(".for_comparison");Array.from(i).filter((function(t){return parseInt(t.style.top)<parseInt(a)})).forEach((function(t){t.style.top="".concat(parseInt(t.style.top)-parseInt(n),"%")}));var s=I.margin.cutletMar.concat(I.margin.mayoMar,I.margin.cucumberMar,I.margin.cheeseMar,I.margin.tomatoMar,I.margin.saladMar,I.margin.onionMar,I.margin.bunMar);s.unshift(0);var u=s.reduce((function(t,e){return t+e}));setTimeout((function(){l>0&&(document.querySelector(".item__topbun").style.top="".concat(parseInt(u)-90,"%"))}),220),t.obj.num.pop(t.num);var l=t.obj.num.length;0==l&&(document.querySelector(".item__topbun").animate([{top:"".concat(parseInt(n)-90,"%"),opacity:"1"},{top:"-400%",opacity:"0"}],{duration:400,easing:"ease-in-out"}),Promise.all(document.querySelector(".item__topbun").getAnimations().map((function(t){return t.finished}))).then((function(){document.querySelector(".item__topbun").remove()}))),t.obj.sum.pop(t.price);var d=t.obj.sum.reduce((function(t,e){return t+e}));document.querySelector(".main__total").innerHTML="$".concat(d.toFixed(2)),t.obj.time.pop(t.time);var m=t.obj.time.reduce((function(t,e){return t+e}));document.querySelector(".main__time").innerHTML="".concat(m.toFixed(1)," min"),t.obj.oz.pop(t.oz);var h=t.obj.oz.reduce((function(t,e){return t+e}));document.querySelector(".main__capacity").innerHTML="".concat(h," oz"),t.obj.kcal.pop(t.kcal);var g=t.obj.kcal.reduce((function(t,e){return t+e}));document.querySelector(".main__kcal").innerHTML="".concat(g," kcal")}}),200)}))}}]),t}(),x=(new k(r,"item__cutlet","cutlet","Cutlet",3,4,7,600,".main__botside",I,I.burger.cutletKey,"cutletMinus","cutletPlus","cutletCount",-50,I.margin.cutletMar),new k(a,"item__mayo","mayo","Mayo",1,.5,2,150,".main__botside",I,I.burger.mayoKey,"mayoMinus","mayoPlus","mayoCount",-10,I.margin.mayoMar),new k(c,"item__onion","onion","Onion",.5,.5,1,40,".main__botside",I,I.burger.onionKey,"onionMinus","onionPlus","onionCount",-10,I.margin.onionMar),new k(s,"item__tomato","tomato","Tomato",1,.5,1,60,".main__botside",I,I.burger.tomatoKey,"tomatoMinus","tomatoPlus","tomatoCount",-10,I.margin.tomatoMar),new k(o,"item__cucumber","cucumber","Cucumber",.5,.5,1,40,".main__botside",I,I.burger.cucumberKey,"cucumberMinus","cucumberPlus","cucumberCount",-10,I.margin.cucumberMar),new k(n,"item__cheese","cheese","Cheese",2,.5,2,150,".main__botside",I,I.burger.cheeseKey,"cheeseMinus","cheesePlus","cheeseCount",-3,I.margin.cheeseMar),new k(i,"item__salad","salad","Salad",.5,.5,1,40,".main__botside",I,I.burger.saladKey,"saladMinus","saladPlus","saladCount",-20,I.margin.saladMar),new k(e,"item__midbun","bun","Bun",.5,.5,1,90,".main__botside",I,I.burger.bunKey,"bunMinus","bunPlus","bunCount",-20,I.margin.bunMar),document.querySelector(".main__btn-checkout"));function z(t,e){t.style.display="none",e.style.filter="blur(0px)"}q=document.querySelector(".modal"),A=h,L=getComputedStyle(q),x.addEventListener("click",(function(){!function(t,e){t.style.display="block",e.style.filter="blur(3px)"}(q,A)})),q.addEventListener("click",(function(t){t.target!==q&&""!=t.target.getAttribute("data-close")||z(q,A)})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&"block"==L.display&&z(q,A)}))}))})();
//# sourceMappingURL=main.842e34c37dc9ebb543b0.js.map