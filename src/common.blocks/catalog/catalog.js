/* eslint-disable*/

// rangeSlider (фильтр цены)
const rangePrice = function () {

	var $range = $(".price__input");
	var $inputFrom = $(".price__input-from");
	var $inputTo = $(".price__input-to");
	var instance;
	var min = 0;
	var max = 343342;
	var from = 27000;
	var to = 320000;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 0,
		to: 0,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("change", function () {
		var val = $(this).prop("value");

		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});

		$(this).prop("value", val);

	});

	$inputTo.on("change", function () {
		var val = $(this).prop("value");

		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});

		$(this).prop("value", val);
	});

}
rangePrice();

// rangeSlider (фильтр высоты)
const rangeHeight = function () {
	// rangeSlider (фильтр цены)
	var $rangeHeight = $(".height__input");
	var $inputFromHeight = $(".height__input-from");
	var $inputToHeight = $(".height__input-to");
	var instance;
	var min = 0;
	var max = 240;
	var from = 0;
	var to = 240;


	$rangeHeight.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 0,
		to: 0,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});
	instance = $rangeHeight.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFromHeight.prop("value", from);
		$inputToHeight.prop("value", to);
	}

	$inputFromHeight.on("change", function () {
		var val = $(this).prop("value");

		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});

		$(this).prop("value", val);

	});

	$inputToHeight.on("change", function () {
		var val = $(this).prop("value");

		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});

		$(this).prop("value", val);
	});

}
rangeHeight();

// rangeSlider (фильтр длины)
const rangeLength = function () {
	// rangeSlider (фильтр цены)
	var $rangeLength = $(".length__input");
	var $inputFromLength = $(".length__input-from");
	var $inputToLength = $(".length__input-to");
	var instance;
	var min = 0;
	var max = 2000;
	var from = 400;
	var to = 2000;


	$rangeLength.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 0,
		to: 0,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});
	instance = $rangeLength.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFromLength.prop("value", from);
		$inputToLength.prop("value", to);
	}

	$inputFromLength.on("change", function () {
		var val = $(this).prop("value");

		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});

		$(this).prop("value", val);

	});

	$inputToLength.on("change", function () {
		var val = $(this).prop("value");

		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});

		$(this).prop("value", val);
	});

}
rangeLength();


// фильтры в адаптиве
const modalFilters = function () {

	const iconFilter = document.querySelector('.tag__filter-button');
	const modal = document.querySelector('.modal');
	const modalContainer = document.querySelector('.modal__container');
	const modalClose = document.querySelector('.modal__close');
	const modalBack = document.querySelector('.modal__back');

	if (iconFilter) {
		iconFilter.addEventListener("click", function (e) {
			document.body.classList.add('lock');
			modal.classList.add('--active');
			modalContainer.classList.add('--active');
		});
	}

	if (modalBack) {
		modalBack.addEventListener("click", function (e) {
			document.body.classList.remove('lock');
			modal.classList.remove('--active');
			modalContainer.classList.remove('--active');
		});
	}

	if (modalClose) {
		modalClose.addEventListener("click", function (e) {
			document.body.classList.remove('lock');
			modal.classList.remove('--active');
			modalContainer.classList.remove('--active');
		});
	}

	if (modal) {
		modal.addEventListener('click', (event) => {
			const target = event.target;
			if (!target.closest('.modal__container')) {
				document.body.classList.remove('lock');
				modal.classList.remove('--active');
				modalContainer.classList.remove('--active');
			}
		})
	}



}
modalFilters();



// SPOLLERS
const spollersFilter = function () {

	"use strict"

	// SPOLLERS
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}

		// Получение слойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});

		// Инициализация слойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});

			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);

				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addListener(function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}

		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, 500);
				}
				e.preventDefault();
			}
		}

		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_active');
				_slideUp(spollerActiveTitle.nextElementSibling, 500);
			}
		}
	}
	//========================================================================================================================================================
	//SlideToggle
	let _slideUp = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = target.offsetHeight + 'px';
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			window.setTimeout(() => {
				target.hidden = true;
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideDown = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			if (target.hidden) {
				target.hidden = false;
			}
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout(() => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}

}
spollersFilter();




