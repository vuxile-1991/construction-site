// const contactForm = document.querySelector(`.form`);
// const nameinput = document.querySelector(`#name`);
// const email = document.querySelector(`#email`);
// const subject = document.querySelector(`#subject`);
// const message = document.querySelector(`#message`);

// contactForm.addEventListener(`submit`, e => {
// 	e.preventDefault();

// 	let formData = {
// 		name: nameinput.value,
// 		email: email.value,
// 		subject: subject.value,
// 		message: message.value,
// 	};

// 	const xhr = new XMLHttpRequest();

// 	xhr.open('POST', '/page/contact');
// 	xhr.setRequestHeader(`content-type`, `application/json`);
// 	console.log(xhr);

// 	if (xhr.readyState === 1) {
// 		alert(`Email sent`);
// 		name.value = ``;
// 		email.value = ``;
// 		subject.value = ``;
// 		message.value = ``;
// 	} else alert(`Something went wrong`);

// 	xhr.send(JSON.stringify(formData));
// });
