const servicesSwiper = new Swiper('.services__swiper', {

    navigation: {
        nextEl: '.services__swiper-button-next',
        prevEl: '.services__swiper-button-prev',
    },
    
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: false,
    autoHeight: true,
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true,
          },
        1100: {
          slidesPerView: 3,
          spaceBetween: 111
        },
    }
});

const documentsSwiper = new Swiper('.documents__swiper', {
    loop: true,
    
    slidesPerView: 1,
    // centeredSlides: true,
    
    navigation: {
        nextEl: '.documents__swiper-button-next',
        prevEl: '.documents__swiper-button-prev',
    },
   spaceBetween: 41,
 
   autoHeight: true,
   breakpoints: {
    
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
            }
    }
   
});
