const filterItem = document.querySelector(`.filter--nav`);
const listItems = document.querySelectorAll('.list--item');
const filterImg = document.querySelectorAll(`.img`);

filterItem.addEventListener(`click`, function (e) {
	const clicked = e.target.closest(`.list--item`);

	if (!clicked) return;
	listItems.forEach(item => {
		item.classList.remove(`active`);
	});
	clicked.classList.add(`active`);
	filterImg.forEach(img => {
		const filterName = clicked.dataset.name;
		const filterImages = img.dataset.name;
		if (filterImages == filterName || filterName == 'all') {
			img.classList.remove(`hide`);
			img.classList.add(`show`);
		} else {
			img.classList.add(`hide`);
			img.classList.remove(`show`);
		}
	});
});
