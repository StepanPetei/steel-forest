const slider = document.querySelector('.gallerySlider');
const content = slider.querySelector('.content');
const slides = slider.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

const activeIndicator = n => {
	for (indicator of indicators) {
		indicator.classList.remove("active")
	}
	indicators[n].classList.add("active")
}
function initSlider() {
	let current = 0,
		touchstartX = 0,
		touchendX = 0;

	function slideTo(index) {

		current = parseInt(index);

		if (current === slides.length) {
			current = 0;
		}

		if (current < 0) {
			current = slides.length - 1;
		}

		content.style.transform = `translateX(-${slides[current].offsetLeft}px)`;

		// activeSlide(slides[current])
	}

	function slideNext() {
		return slideTo(current + 1)
	}

	window.addEventListener('resize', () => {
		slideTo(current)
	})

	content.addEventListener(
		'touchstart',
		function (event) {
			touchstartX = event.targetTouches[0].clientX;
		},
		false
	);

	content.addEventListener(
		'touchend',
		function (event) {
			touchendX = event.changedTouches[0].clientX;
			handleSwipe();
		},
		false
	);

	function handleSwipe() {
		if (touchendX < touchstartX) {
			slideTo(current + 1);
		} else if (touchendX > touchstartX) {
			slideTo(current - 1);
		}
	}

	return slideTo;
}

const slideTo = initSlider();

indicators.forEach((ind, indexInd) => {
	ind.addEventListener('click', (e) => {
		current = indexInd;
		activeIndicator(current);
		const index = e.target.getAttribute('data-index');
		slideTo(index);
	})
})