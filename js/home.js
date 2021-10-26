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

const imgs = [
	`../gallery/home/background-cover-1.webp`,
	`../gallery/home/background-cover-2.webp`,
	`../gallery/home/background-cover-3.webp`,
];

const imgsVertical = [
	`../gallery/home/background-cover-v1.webp`,
	`../gallery/home/background-cover-v2.webp`,
	`../gallery/home/background-cover-v3.webp`,
]

const captions = [
	`The J&B Enterprise is the right choice for your next construction and renovation project!`,
	`At J&B Enterprise, we provide a full suite of construction services, our scope ranges from interior and exterior renovations to completely new objects.`,
	`Our mission is to build a house for you with the same attention to details as we would do for ourselves.`,
];

const heading = [
	`We are professionals for`,
	`We provide all kinds of`,
	`We build your dream`,
];

const word = [`Building`, `Construction works`, `Home`];

const loopBackground = function (x) {
	currentImg++;
	if (currentImg === imgs.length) currentImg = 0;

	if (x.matches) {
		navCover.style.background = `url(${imgsVertical[currentImg]}) no-repeat center`;
	} else {
		navCover.style.background = `url(${imgs[currentImg]}) no-repeat center`;
	}
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
		loopBackground(x);
		loopParagraph();
	}, 7000);
};

document.addEventListener(`DOMContentLoaded`, function () {
	translate();
});

// --------------- *Modal ---------------------
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden-modal')) {
		closeModal();
	}
});

let x = window.matchMedia('(max-width: 768px)'); // Call listener function at run time
x.addListener(loopBackground); // Attach listener function on state changes
