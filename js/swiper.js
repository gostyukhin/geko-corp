const swiper1 = new Swiper('.swiper-1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            spaceBetween: 24
        }
    },
    pagination: {
        el: '.swiper-pagination-1',
    },
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
});
const swiper2 = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
        320: {
            slidesPerView: 1,
            enabled: true
        },
        615: {
            slidesPerView: 2,
            enabled: true
        },

        920: {
            slidesPerView: 3,
            enabled: true
        },

        1200: {
            slidesPerView: 4,
            enabled: false
        },
        // 1000: {
        //     slidesPerView: 3,
        //     spaceBetween: 10
        // },
        // 1200: {
        //     spaceBetween: 24
        // }
    },
    pagination: {
        el: '.swiper-pagination-2',
    },
});
const swiper3 = new Swiper('.swiper-3', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },
});
const swiper4 = new Swiper('.swiper-4', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-4',
        prevEl: '.swiper-button-prev-4',
    },
});