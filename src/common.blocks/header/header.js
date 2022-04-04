/* eslint-disable*/
const iconSearch = document.querySelector('.header__icon-search');
const inputBox = document.querySelector('.header__input-form');

if (iconSearch) {
	iconSearch.addEventListener("click", function (e) {
		inputBox.classList.toggle('--active');
	});
}
