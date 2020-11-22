"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

function initSlider(sliderNode, slideClassName, interval, activeClassName) {
  if (!sliderNode) throw 'no slider node';
  var slides = [];
  sliderNode.querySelectorAll(slideClassName).forEach(function (slide) {
    slides.push({
      active: false,
      node: slide
    });
  });
  slides[0].active = true;

  function nextSlide() {
    var activeSlideIndex = slides.findIndex(function (s) {
      return s.active;
    });
    slides[activeSlideIndex].node.classList.remove(activeClassName);
    slides[activeSlideIndex].active = false;
    var activeNode;

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
    var activeSlideIndex = slides.findIndex(function (s) {
      return s.active;
    });
    slides[activeSlideIndex].node.classList.remove(activeClassName);
    slides[activeSlideIndex].active = false;
    var activeNode;

    if (activeSlideIndex - 1 < 0) {
      slides[slides.length - 1].active = true;
      activeNode = slides[slides.length - 1].node;
    } else {
      slides[activeSlideIndex - 1].active = true;
      activeNode = slides[activeSlideIndex - 1].node;
    }

    activeNode.clientWidth = 4800;
    activeNode.offsetLeft = 800;
    sliderNode.style.transform = "translate(-".concat(activeNode.offsetLeft, "px, 0)");

    if (activeNode) {
      activeNode.classList.add(activeClassName);
    }
  }

  setInterval(function () {
    nextSlide();
  }, interval);
  return function (fArrowNode, sArrowNode) {
    fArrowNode.addEventListener('click', function () {
      nextSlide();
    });
    sArrowNode.addEventListener('click', function () {
      prevSlide();
    });
  };
}

function Slider() {
  initSlider(document.querySelector('slider'), 'slide', 2000, 'active')(document.querySelector('.fArrow'), document.querySelector('.sArrow'));
}