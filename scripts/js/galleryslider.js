function initSlider() {
	const slider = document.querySelector('.gallerySlider');
	const content = slider.querySelector('.content');
	const slides = slider.querySelectorAll('.slide');

	let current = 0;

	let touchstartX = 0;
	let touchendX = 0;

	function slideTo(index) {
		current = parseInt(index);

		if (current === slides.length) {
			current = 0;
		}

		if (current < 0) {
			current = slides.length - 1;
		}

		//@ts-ignore
		content.style.transform = `translateX(-${slides[current].offsetLeft}px)`;
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

const indicators = document.querySelectorAll('.indicator').forEach(ind => {
	ind.addEventListener('click', (e) => {
		//@ts-ignore
		const index = e.target.getAttribute('data-index');

		slideTo(index);
	})
})

document.querySelector('.indicator').addEventListener('click', () => { })