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
function toogleHumb(e) {
  console.log("click humb");
  console.log(e);
  toogleElemsClass(classesToToogleArray);
}
document.querySelector(".bg-cover").onclick = toogleHumb;

// if media screen width more then 767
