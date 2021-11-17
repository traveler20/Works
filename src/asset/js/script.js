// loading animation
window.onload = function () {
	const loadingAnimation = document.getElementById("js-loading");

	loadingAnimation.classList.add("is-loaded");

	document.getElementById("js-header").classList.add("is-show");
};

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

const modalCloseAction = function (e) {
	const targetModal = e.currentTarget.closest(".p-work__modal");
	targetModal.classList.toggle("is_open");
};

Array.from(document.querySelectorAll(".p-work__close")).forEach(
	(modalCloseElement) => {
		modalCloseElement.addEventListener("click", modalCloseAction);
	}
);
