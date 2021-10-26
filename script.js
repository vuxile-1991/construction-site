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
const html = document.getElementsByTagName(`html`);
const body = document.getElementsByTagName(`body`);
const navLogo = document.querySelector(`.nav--logo`);
const logoContainer = document.querySelector(`.logo--container`);
const mobileDropDownMenu = document.querySelector(`.mobile--dropdown`);
const mobileDropItem = document.querySelectorAll(`.mobile--dropdown-item`);
const listNavProjects = document.querySelector(`.list--nav-projects`);
const dropIcon = document.querySelectorAll(`.drop-icon`);
const employeeImg = document.querySelectorAll(`.employee--img`);
const employeeSocial = document.querySelectorAll(`.employee--social`);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--contact');
const loader = document.querySelector(`.loader--wrapper`);

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

hamburger.addEventListener(`click`, () => {
	if (stickyNav.classList.contains(`display-block`)) {
		logoContainer.classList.toggle(`background`);
		stickyNav.classList.toggle(`open`);
		stickyNavbar.classList.toggle(`open`);
		html[0].classList.toggle(`overflow`);
		body[0].classList.toggle(`overflow`);
		setTimeout(() => {
			stickyNav.classList.toggle(`display-block`);
		}, 500);
	} else {
		stickyNav.classList.toggle(`display-block`);
		setTimeout(() => {
			logoContainer.classList.toggle(`background`);
			stickyNav.classList.toggle(`open`);
			stickyNavbar.classList.toggle(`open`);
			html[0].classList.toggle(`overflow`);
			body[0].classList.toggle(`overflow`);
		}, 500);
	}
});

stickyNavbar.addEventListener(`click`, function (e) {
	const clicked = e.target.closest(`.sticky--nav-dropdown`);
	if (!clicked) return;
	mobileDropDownMenu.classList.toggle(`mt-1`);
	dropIcon.forEach(i => {
		i.classList.toggle(`icon--translate-down`);
	});

	mobileDropItem.forEach(item => {
		item.classList.toggle(`display-none`);
	});
});

mainNav.addEventListener(`click`, function (e) {
	const clicked = e.target.closest(`.main--nav-dropdown`);
	if (!clicked) return;
	dropIcon.forEach(i => {
		i.classList.toggle(`icon--translate-down`);
	});
	dropDownMenu.classList.toggle(`display-none`);
});

// Modal window

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove('hidden-modal');
	overlay.classList.remove('hidden-modal');
};

const closeModal = function () {
	modal.classList.add('hidden-modal');
	overlay.classList.add('hidden-modal');
};
