(() => {
   "use strict";
   var e = {};
   e.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (e) {
         if ("object" == typeof window) return window
      }
   }(), (() => {
      var t;
      e.g.importScripts && (t = e.g.location + "");
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
         var i = n.getElementsByTagName("script");
         i.length && (t = i[i.length - 1].src)
      }
      if (!t) throw new Error("Automatic publicPath is not supported in this browser");
      t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t
   })();
   const t = e.p + "assets/54ad8668a52624be4b1a.svg",
      n = e.p + "assets/72dd97b89f0ecc4adcea.svg",
      i = e.p + "assets/893bb093428334e7dcd2.png";

   function o(e, t) {
      for (var n = 0; n < t.length; n++) {
         var i = t[n];
         i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
   }
   window.addEventListener("DOMContentLoaded", (function () {
      document.body.style.overflow = "hidden";
      var e = document.querySelector("#first-page-btn"),
         r = document.querySelector("#second-page-btn"),
         c = document.querySelector(".main__wrapper"),
         a = document.querySelector(".main__inner"),
         s = document.querySelectorAll(".forslide"),
         l = document.querySelector(".main__inner-pg1"),
         u = document.querySelector(".main__inner-pg2"),
         d = document.querySelector(".main__btn"),
         m = document.querySelectorAll(".header__page-changer"),
         y = window.getComputedStyle(c).width,
         p = window.getComputedStyle(l).width;
      console.log(p);
      var h = 0;

      function g(e) {
         return +e.slice(0, e.length - 2)
      }

      function f() {
         0 == h && (h += g(y), a.style.transform = "translateX(-".concat(h, "px)"), l.style.display = "none", u.style.display = "flex", u.style.marginLeft = p, r.classList.add("header__page-changer--active"), e.classList.remove("header__page-changer--active"))
      }
      a.style.width = 100 * s.length + "vw", a.style.display = "flex", a.style.transition = "0.8s all", s.forEach((function (e) {
         e.style.width = y
      })), u.style.display = "none", e.classList.add("header__page-changer--active"), r.addEventListener("click", f), d.addEventListener("click", f), e.addEventListener("click", (function () {
         h > 0 && (h -= g(y), a.style.transform = "translateX(-".concat(h, "px)"), l.style.display = "flex", u.style.display = "none", u.style.marginLeft = p, e.classList.add("header__page-changer--active"), r.classList.remove("header__page-changer--active"))
      })), m.forEach((function (e) {
         e.onmouseenter = e.onmouseleave = function (t) {
            var n = e.clientWidth,
               i = t.pageX - e.offsetLeft;
            i - 10 < 0 && (i = 0), i + 10 > n && (i = n), e.style.setProperty("--x", "".concat(i, "px"))
         }
      }));
      var _ = {
            burger: {
               cutletKey: [],
               mayoKey: [],
               onionKey: [],
               tomatoKey: [],
               cucumberKey: [],
               cheeseKey: [],
               saladKey: [],
               bunKey: []
            },
            sum: [0]
         },
         b = function () {
            function e(t, n, i, o, r, c, a, s, l, u, d, m) {
               ! function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
               }(this, e), this.src = t, this.alt = n, this.title = i, this.price = o, this.time = r, this.kcal = c, this.parent = document.querySelector(a), this.obj = s, this.imgKey = l, this.btnIdM = u, this.btnIdP = d, this.countId = m, this.render(), this.counter()
            }
            var t, n;
            return t = e, (n = [{
               key: "render",
               value: function () {
                  var e = document.createElement("div");
                  e.innerHTML = '\n                  <div class="main__ingradient-inner">\n                     <img class="main__ingradient-img" src='.concat(this.src, " alt=").concat(this.alt, ' ">\n                     <div class="main__ingradient-name">').concat(this.title, '</div>\n                     <div class="main__counter">\n                     <button id="').concat(this.btnIdM, '" class="main__counter-minus"></button>\n                     <div id="').concat(this.countId, '" class="main__count"></div>\n                     <button id="').concat(this.btnIdP, '" class="main__counter-plus"></button>\n                  </div>\n               </div>\n            \n            '), this.parent.append(e), e.classList.add("main__ingradient")
               }
            }, {
               key: "counter",
               value: function () {
                  var e = this,
                     t = 0;
                  document.querySelector("#".concat(this.btnIdP)).addEventListener("click", (function () {
                     if (t < 10) {
                        document.querySelector("#".concat(e.btnIdP)).innerHTML = ++t, e.imgKey.push(e.src), e.obj.sum.push(e.price);
                        var n = e.obj.sum.reduce((function (e, t) {
                           return e + t
                        }));
                        document.querySelector(".main__total").innerHTML = "$".concat(n.toFixed(2)), console.log(_)
                     }
                  })), document.querySelector("#".concat(this.btnIdM)).addEventListener("click", (function () {
                     if (t > 0) {
                        e.count.innerHTML = --t, e.imgKey.pop(e.title), e.obj.sum.pop(e.price);
                        var n = e.obj.sum.reduce((function (e, t) {
                           return e + t
                        }));
                        document.querySelector(".main__total").innerHTML = "$".concat(n.toFixed(2))
                     }
                  }))
               }
            }]) && o(t.prototype, n), Object.defineProperty(t, "prototype", {
               writable: !1
            }), e
         }();
      new b(t, "cutlet", "Cutlet", 2, 3, 600, ".main__botside", _, _.burger.cutletKey, "cutletMinus", "cutletPlus", "cutletCount"), new b(n, "mayo", "Mayo", .5, .5, 300, ".main__botside", _, _.burger.mayoKey, "mayoMinus", "mayoPlus", "mayoCount"), new b(i, "onion", "Onion", .5, .5, 300, ".main__botside", _, _.burger.onionKey, "onionMinus", "onionPlus", "onionCount")
   }))
})();
//# sourceMappingURL=main.95fab3758582bd3b4aa1.js.map