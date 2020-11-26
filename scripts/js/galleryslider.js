function initSlider() {
    const slider = document.querySelector('.gallerySlider');
    const content = slider.querySelector('.content');
    const slides = slider.querySelectorAll('.slide');

    let current = 0;

    let touchstartX = 0;
    let touchendX = 0;

    function slideTo(index) {
        console.log('asdas')
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
            //@ts-ignore
            touchstartX = event.targetTouches[0].clientX;
        },
        false
    );

    content.addEventListener(
        'touchend',
        function (event) {
            console.log(event.changedTouches[0].clientX)
            //@ts-ignore
            touchendX =  event.changedTouches[0].clientX;
            
            
            console.log(touchendX, touchstartX)

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


    // document.querySelector('.next').addEventListener('click', () => {

    // })

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

document.querySelector('.indicator').addEventListener('click', () => console.log('asdas'))
