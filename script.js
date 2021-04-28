const btnTranslate = document.querySelector(`.btn--translate`);
const header = document.querySelector(`.nav--header`);
const navHeader = document.querySelector(`.nav--heading`);
const navHeaderWord = document.querySelector(`.nav--header-word`);
const content = document.querySelector(`.nav--content`);
const navCover = document.querySelector(`.background--cover`);
const section1 = document.querySelector(`#section-1`);
const stickyNav = document.querySelector(`.sticky--nav`);
const mainNav = document.querySelector(`.main--nav`);
const nav = document.querySelector(`nav`);
const dropMenu = document.querySelector(`.drop--menu-a`);
const dropDownMenu = document.querySelector(`.dropdown--menu`);
const navBar = document.querySelector(`.navbar`);
const hamburger = document.querySelector(`.hamburger`);
const stickyNavbar = document.querySelector(`.sticky--navbar`);
const stickyLinks = document.querySelectorAll(`.list--nav`);
const body = document.querySelector(`body`);
const navLogo = document.querySelector(`.nav--logo`);

AOS.init();

// btnTranslate.addEventListener('click', () => {
// 	document.location.href = `ger/home.html`;
// });

const navHeight = nav.getBoundingClientRect().height;

const stickyNavigation = function (entries) {
	const [entry] = entries;
	// console.log(entry);

	if (!entry.isIntersecting) stickyNav.classList.remove('hidden');
	else stickyNav.classList.add('hidden');
};

const headerObserver = new IntersectionObserver(stickyNavigation, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(nav);

// navBar.addEventListener(`mouseover`, function (e) {
// 	const elOver = e.target.closest(`.drop--menu-a`);
// 	if (!elOver) return;
// 	dropDownMenu.classList.toggle(`display`);
// });

// dropMenu.addEventListener(`mouseout`, function (e) {
// 	const elOver = e.target.closest(`.drop--menu-a`);
// 	if (!elOver) return;
// 	dropDownMenu.classList.add(`display`);
// });

// dropDownMenu.addEventListener(`mouseout`, function () {
// 	dropDownMenu.classList.add(`display`);
// });

hamburger.addEventListener(`click`, () => {
	if (stickyNav.classList.contains(`display-flex`)) {
		stickyNav.classList.toggle(`open`);
		stickyNavbar.classList.toggle(`open`);
		body.classList.toggle(`overflow`);
		setTimeout(() => {
			stickyNav.classList.toggle(`display-flex`);
			hamburger.style.position = 'absolute';
			navLogo.style.position = `static`;
		}, 500);
	} else {
		stickyNav.classList.toggle(`display-flex`);
		setTimeout(() => {
			hamburger.style.position = 'fixed';
			navLogo.style.position = `fixed`;
			stickyNav.classList.toggle(`open`);
			stickyNavbar.classList.toggle(`open`);
			body.classList.toggle(`overflow`);
		}, 500);
	}
});
