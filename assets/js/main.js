var myNav=document.getElementById('navegador');
var botoncito=document.getElementById("aparece");
var boton1=document.getElementById("boton1");
var items=document.getElementById("nav");
window.onscroll=function () {
"use strict";
if (document.body.scrollTop >= 200 ) {
       boton1.classList.add("pink-boton");
       boton1.classList.remove("white-boton");
       botoncito.classList.add("pink-boton");
       botoncito.classList.remove("white-boton");
       myNav.classList.add("new-nav");
       myNav.classList.remove("antique-nav");
       items.classList.add("pink-color");
       items.classList.remove("white-color");
   }
   else {
       boton1.classList.add("white-boton");
       boton1.classList.remove("pink-boton");
       botoncito.classList.add("white-boton");
       botoncito.classList.remove("pink-boton");
       myNav.classList.add("antique-nav");
       myNav.classList.remove("new-nav");
       items.classList.remove("pink-color");
       items.classList.add("white-color");
   }
};
