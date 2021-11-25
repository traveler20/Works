// loading animation
window.onload = function () {
	const loadingAnimation = document.getElementById("js-loading");

	loadingAnimation.classList.add("is-loaded");

	document.getElementById("js-header").classList.add("is-show");
};

// navigation shadow & scroll button
const scrollIn = function () {
	const navigation = document.getElementsByClassName("js-navShadow");
	const scrollbutton = document.getElementsByClassName("js-scrollButton");
	const position = Math.floor(window.innerHeight * 0.01);

	for (let i = 0; i < navigation.length; i++) {
		const offsetTop = Math.floor(navigation[i].getBoundingClientRect().top);

		if (offsetTop < position) {
			navigation[i].classList.add("is-shadow");
			scrollbutton[i].classList.add("is-show");
		} else {
			navigation[i].classList.remove("is-shadow");
			scrollbutton[i].classList.remove("is-show");
		}
	}
};
window.addEventListener("scroll", scrollIn, false);

// modal open
const modalWrapOpen = function (e) {
	const dataModalOpen = e.currentTarget.dataset.modalOpen;
	Array.from(document.querySelectorAll(".p-work__modal")).forEach((e, i) => {
		if (e.getAttribute("data-modal") === dataModalOpen) {
			e.classList.toggle("is_open");
		}
	});
};

Array.from(document.querySelectorAll(".p-work__figure")).forEach(
	(modalOpenElement) => {
		modalOpenElement.addEventListener("click", modalWrapOpen);
	}
);

// modal close
const modalCloseAction = function (e) {
	const targetModal = e.currentTarget.closest(".p-work__modal");
	targetModal.classList.toggle("is_open");
};

Array.from(document.querySelectorAll(".p-work__close")).forEach(
	(modalCloseElement) => {
		modalCloseElement.addEventListener("click", modalCloseAction);
	}
);
Array.from(document.querySelectorAll(".p-work__mask")).forEach(
	(modalCloseElement) => {
		modalCloseElement.addEventListener("click", modalCloseAction);
	}
);
