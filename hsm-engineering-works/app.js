// document.addEventListener('DOMContentLoaded', function() {
//     // // handle hamburger 
//     // const hamburger = document.querySelector('.hamburger');
//     // const navLinks  = document.querySelector('.nav-links__mobile');
//     // handleHamburger(hamburger, navLinks);


//     // handling hambburger event
//     $('.hamburger').click(function () {
//         $('.hamburger').toggleClass('active');
//         $('.nav-links__mobile').toggleClass('active');
//     });

//     // handle click on navlinks
//     $('.nav-link__mobile').click(function() {
//         $('.nav-link__mobile').removeClass('active');
//         $(this).addClass('active');
//         hamburger.classList.toggle('active');
//         navLinks.classList.toggle('active');
//         $('.current-active-page').text($(this).text());
//         console.log('mobile-nav');
//     });

//     // for desktop
//     $('.nav-link').click(function() {
//         $('.nav-link').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// // function handleHamburger(hamburger, navLinks) {
// //     hamburger.addEventListener('click', function() {
// //         hamburger.classList.toggle('active');
// //         navLinks.classList.toggle('active');
// //     });
// // }


$( document ).ready(function() {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('active');
        $('.nav-links__mobile').toggleClass('active');
        console.log('hamburger is clicked');
    });

    // handle click on navlinks
    $('.nav-link__mobile').click(function() {
        $('.nav-link__mobile').removeClass('active');
        $(this).addClass('active');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        $('.current-active-page').text($(this).text());
        console.log('mobile-nav');
    });

    // for desktop
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});