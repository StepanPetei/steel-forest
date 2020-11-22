let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function initSlider(sliderNode, slideClassName, interval, activeClassName) {
  if (!sliderNode) throw 'no slider node';

  const slides = [];
  sliderNode.querySelectorAll(slideClassName).forEach((slide) => {
      slides.push({
          active: false,
          node: slide,
      });
  });

  slides[0].active = true;

  function nextSlide() {
      const activeSlideIndex = slides.findIndex((s) => s.active);
      slides[activeSlideIndex].node.classList.remove(activeClassName);
      slides[activeSlideIndex].active = false;
      let activeNode;

      if (activeSlideIndex + 1 === slides.length) {
          slides[0].active = true;
          activeNode = slides[0].node;
      } else {
          slides[activeSlideIndex + 1].active = true;
          activeNode = slides[activeSlideIndex + 1].node;
      }

      if (activeNode) {
          activeNode.classList.add(activeClassName);
      }
  }

  function prevSlide() {
      const activeSlideIndex = slides.findIndex((s) => s.active);
      slides[activeSlideIndex].node.classList.remove(activeClassName);
      slides[activeSlideIndex].active = false;
      let activeNode;

      if (activeSlideIndex - 1 < 0) {
          slides[slides.length - 1].active = true;
          activeNode = slides[slides.length - 1].node;
      } else {
          slides[activeSlideIndex - 1].active = true;
          activeNode = slides[activeSlideIndex - 1].node;
      }

      activeNode.clientWidth = 4800

      activeNode.offsetLeft = 800

      sliderNode.style.transform = `translate(-${activeNode.offsetLeft}px, 0)`;

      if (activeNode) {
          activeNode.classList.add(activeClassName);
      }
  }

  setInterval(() => {
      nextSlide();
  }, interval);

  return (fArrowNode, sArrowNode) => {
      fArrowNode.addEventListener('click', () => {
          nextSlide();
      });

      sArrowNode.addEventListener('click', () => {
          prevSlide();
      });
  };
}

function Slider() {
  initSlider(
      document.querySelector('slider'),
      'slide',
      2000,
      'active'
  )(document.querySelector('.fArrow'), document.querySelector('.sArrow'));
}