const mobileMenu = document.querySelector(".menu__mobile-icon");
const Menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const resumeListItems = document.querySelectorAll(".resume-list__item");
const portfolioListItems = document.querySelectorAll(".portfolio-list__item");
const menuItems = document.querySelectorAll (".menu__item");
const sections = document.querySelectorAll("main>section")

mobileMenu.addEventListener("click",function(){
	mobileMenu.classList.toggle("menu__mobile-icon--open");
	Menu.classList.toggle("menu--mobile-open");
	cover.classList.toggle("cover--show");
})

function removeActiveClass (className) {
	document.querySelector(`.${className}`).classList.remove(className);
}

function navigationTabsInit (listItems,activeClass,showClass) {
	listItems.forEach(listItem=>{
		listItem.addEventListener("click",function(){
			removeActiveClass (activeClass)
			removeActiveClass (showClass)
			this.classList.add(activeClass);
			let contentId = this.getAttribute("data-content-id");
			document.querySelector(contentId).classList.add(showClass);
	
		})
	})	
}

navigationTabsInit (resumeListItems,"resume-list__item--active","resume-content--show");
navigationTabsInit (portfolioListItems,"portfolio-list__item--active","portfolio-content--show");

const observer = new IntersectionObserver(observerHandler,{threshold:0.5});

function observerHandler(allSection) {
allSection.map(section=>{
	let sectionClassName = section.target.className;
	let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`);
	if(section.isIntersecting) {
		sectionMenuItem.classList.add("menu__item--active");
	} else {
		sectionMenuItem.classList.remove("menu__item--active");
	}
})
}

sections.forEach(section=>{
	observer.observe(section);
})

menuItems.forEach(item => {
	item.addEventListener("click",function (event){
		event.preventDefault();
		removeActiveClass ("menu__item--active");
		item.classList.add("menu__item--active");
		let sectionClass = item.getAttribute("data-section");
		let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop;
		window.scrollTo({
			top:sectionOffsetTop-130,
			behavior:"smooth"
		})
	})
})