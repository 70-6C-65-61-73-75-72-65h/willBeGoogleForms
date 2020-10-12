// // $(window).scroll(function () {
// //   if ($(window).scrollTop() >= 300) {
// //     $("nav").addClass("fixed-header");
// //     $("nav div").addClass("visible-title");
// //   } else {
// //     $("nav").removeClass("fixed-header");
// //     $("nav div").removeClass("visible-title");
// //   }
// // });
// window.onscroll = function () {
//   if (document.documentElement.scrollTop >= 300) {
//     document.querySelector("nav").classList.add("fixed-header");
//     document.querySelector("nav div").classList.add("visible-title");
//   } else {
//     document.querySelector("nav").classList.remove("fixed-header");
//     document.querySelector("nav div").classList.remove("visible-title");
//   }
// };

//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

// $(document).ready(function(){
// 	$('.hamburger-shell').click(function(){
// 		$('#menu').slideToggle(300);
// 		$('.top').toggleClass('rotate');
// 		$('.middle').toggleClass('rotate-back');
// 		$('.menu-name').toggleClass('bump');
// 		$('.bg-cover').toggleClass('reveal');
// 	});
// 	$('.bg-cover').click(function(){
// 		$('#menu').slideToggle(300);
// 		$('.top').toggleClass('rotate');
// 		$('.middle').toggleClass('rotate-back');
// 		$('.menu-name').toggleClass('bump');
// 		$('.bg-cover').toggleClass('reveal');
// 	})
// });

import { disableScroll, enableScroll } from "./preventScroll.js";

// if media screen width less than 767
function toogleClass(elem, cls) {
  return elem.classList.contains(cls)
    ? elem.classList.remove(cls)
    : elem.classList.add(cls);
}
function findElem(selector) {
  return document.querySelector(selector);
}
function toogleElemClass(selector, cls) {
  return toogleClass(findElem(selector), cls);
}
function toogleElemsClass(params) {
  // [[...],[elemSelector, classToToogle], ...]
  params.map((param) => toogleElemClass(...param));
}

const classesToToogleArray = [
  [".menu", "menu-reveal"],
  [".first_ham_line", "rotate"],
  [".sec_ham_line", "rotate-back"],
  [".menu-name", "bump"],
  [".bg-cover", "reveal"],
];
const toogleHumb = () => {
  console.log("click humb");
  toogleElemsClass(classesToToogleArray);
  // console.log(document.querySelector(".menu-reveal"));
  document.querySelector(".menu-reveal") ? disableScroll() : enableScroll();
};
let cover = document.querySelector(".bg-cover");
cover.onclick = toogleHumb;

let hum = document.querySelectorAll(".hamburger-shell");
console.log(hum);
[].map.call(hum, (humb) => (humb.onclick = toogleHumb));

// let hum2 = document.querySelector(".container");
// hum2.addEventListener("click", (e) => {
//   console.log(e.target.classList.value);
//   if (~e.target.classList.value.indexOf("hamburger-shell")) {
//     toogleHumb();
//   }
// });

// document.querySelector(".bump").onclick = toogleHumb;

// document.querySelector(".hamburger-shell").ondblclick = toogleHumb;
// function onreadyfunc() {
//   document.querySelector(".hamburger-shell").onclick = toogleHumb;
//   // .addEventListener("click", toogleHumb);
//   // document
//   //   .querySelector(".hamburger-shell")
//   //   .addEventListener("ondblclick", toogleHumb);
// }
// document.addEventListener("DOMContentLoaded", onreadyfunc);
// if media screen width more then 767
