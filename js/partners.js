document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;

    const initSwiper = () => {
        swiperInstance = new Swiper(".partners__list", {
            slidesPerView: 1,
            spaceBetween: 56,
            loop: true,
            lazy: {
                loadPrevNext: true
            },
            autoplay: {
                delay: 0,
                pauseOnMouseEnter: true,
              },
            speed: 3000,
            breakpoints: {
                "0": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "576": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "768": {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                "1276": {
                    slidesPerView: 3.5,
                    spaceBetween: 56,
                },
            },
        });
    };

    const destroySwiper = () => {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    };

    const handleResize = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            if (!swiperInstance) {
                initSwiper();
            }
        } else {
            destroySwiper();
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    $(".swiper").mouseenter(function() {
        swiperInstance.autoplay.stop();
      });
    
      $(".swiper").mouseleave(function() {
        swiperInstance.autoplay.start();
      });

    initSwiper();
});