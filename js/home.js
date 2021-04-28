new Glide('.glide', {
	type: 'carousel',
	perView: 4,
	gap: 2,
	// focusAt: center,
	rewind: true,
	hoverpause: false,
	autoPlay: 1,
	keyboard: true,
	breakpoints: {
		1024: {
			perView: 2,
		},
		600: {
			perView: 1,
		},
	},
}).mount();

hamburger.addEventListener(`click`, () => {
	stickyNav.classList.toggle(`open`);
	stickyNavbar.classList.toggle(`open`);
	body.classList.toggle(`overflow`);
});

const imgs = [
	`../../gallery/home/background-cover-1.png`,
	`../../gallery/home/background-cover-2.png`,
	`../../gallery/home/background-cover-3.png`,
];

const captions = [
	`The J&B Enterprise is right choice for you next construction and renovation project!`,
	`At J&B Enterprise, we provide a full suite of construction services, our scope ranges from large scale interior and exterior renovations to completely new objects.`,
	`Our mission is to build a home for you with the same attention to detail as we would for ourselves.`,
];

const heading = [
	`We are professionals for`,
	`We provide all types of`,
	`We build your dream`,
];

const word = [`building`, `construction`, `home`];

const loopBackground = () => {
	currentImg++;
	if (currentImg === imgs.length) currentImg = 0;
	navCover.style.background = `url(${imgs[currentImg]}) no-repeat center`;
	navCover.style.backgroundAttachment = `fixed`;
};

let currentImg = 0;
let currentParagraph = 0;
let currentHeading = 0;
let currentWord = 0;

const loopParagraph = function () {
	currentHeading++;
	currentParagraph++;
	currentWord++;
	if (currentParagraph === captions.length) currentParagraph = 0;
	if (currentHeading === heading.length) currentHeading = 0;
	if (currentWord === word.length) currentWord = 0;
	header.style.transform = `translateX(-750px)`;
	navHeaderWord.style.transform = `translateX(-750px)`;
	content.style.transform = `translateX(750px)`;
	setTimeout(() => {
		header.textContent = heading[currentHeading];
		navHeaderWord.textContent = word[currentWord];
		content.textContent = captions[currentParagraph];
	}, 1000);
	setTimeout(() => {
		header.style.transform = `translateX(0px)`;
		navHeaderWord.style.transform = `translateX(0px)`;
		content.style.transform = `translateX(0px)`;
	}, 1000);
};

const translate = () => {
	navCover.style.visibility = `visible`;
	header.textContent = heading[currentHeading];
	navHeaderWord.textContent = word[currentWord];
	content.textContent = captions[currentParagraph];
	setTimeout(() => {
		header.style.transform = `translateX(0px)`;
		navHeaderWord.style.transform = `translateX(0px)`;
		content.style.transform = `translateX(0px)`;
	}, 1000);
	setInterval(() => {
		loopBackground();
		loopParagraph();
	}, 7000);
};

document.addEventListener(`DOMContentLoaded`, translate());
