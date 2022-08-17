const mobileMenu = document.querySelector(".menu__mobile-icon");
const Menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const resumeListItems = document.querySelectorAll(".resume-list__item");

mobileMenu.addEventListener("click",function(){
	mobileMenu.classList.toggle("menu__mobile-icon--open");
	Menu.classList.toggle("menu--mobile-open");
	cover.classList.toggle("cover--show");
})

resumeListItems.forEach(resumeListItem=>{
	resumeListItem.addEventListener("click",function(){
		document.querySelector(".resume-list__item--active").classList.remove("resume-list__item--active");
		this.classList.add("resume-list__item--active")
	})
})