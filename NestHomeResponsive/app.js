document.addEventListener('DOMContentLoaded', function() {
    // handle hamburger 
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    handleHamburger(hamburger, navLinks);

    // handle click on navlinks
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })

    initializeSwiper();
});



function handleHamburger(hamburger, navLinks) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

function initializeSwiper() {
    var heroSwiper = new Swiper('.swiper-container', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="swiper-pagination-bullet swiper-bullet">' + "</span>";
            },
        },
    });
}