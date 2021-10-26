const btnOpenModal = document.querySelector('.btn--contact');

// --------------- *Modal ---------------------
btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden-modal')) {
		closeModal();
	}
});
