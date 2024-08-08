!function () {
    var view = window.View('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            /*scrollbar: {
                el: '.swiper-scrollbar',
            },*/
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                this.view.querySelector('.swiper'),
                this.swiperOptions
            );
        }
    }
    controller.init(view)
}.call()

