const mobileMenu = document.querySelector(".menu__mobile-icon");
const Menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");

mobileMenu.addEventListener("click",function(){
	mobileMenu.classList.toggle("menu__mobile-icon--open");
	Menu.classList.toggle("menu--mobile-open");
	cover.classList.toggle("cover--show");
})