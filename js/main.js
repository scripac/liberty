
// Swipers
var headSwiper = new Swiper('.head-swiper .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var feedbackSwiper = new Swiper('.feedback-swiper .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});

var weInstagramSwiper = new Swiper('.we-instagram__swiper .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 12,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 3,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
});

var specialistsSwiper = new Swiper('.specialists-swiper .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});


// Back To Top

window.addEventListener('scroll', () => {

    // Back To Top

    if ($(window).scrollTop() > $('main section:first').offset().top + $('main section:first').height()) {
        $('#back-to-top').fadeIn(300).css('display', 'flex').removeClass('zoomOut').addClass('fadeInUp');
    } else {
        $('#back-to-top').removeClass('fadeInUp').addClass('zoomOut').fadeOut(300);
    }
});

document.querySelector('#back-to-top').addEventListener('click', (e) => {
    $("html, body").animate({scrollTop: 0}, 1000);
    return false;
});


// Hamburger
$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger-active');
    $('.header .navbar').toggleClass('navbar-active');
    $('.overlay').toggleClass('overlay-active');
});


//Header-fixed

window.onscroll = function showHeader() {
    var header = document.querySelector('.header-bottom');

    if (window.pageYOffset > 150) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
};

// open list

$('.arrow-list').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('arrow-list-active');
    $('.progrramms-nav__list').toggleClass('progrramms-nav__list-active');
});