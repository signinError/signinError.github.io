$( document ).ready(function() {
    $('.gallery__image').click(function() {
        $('.full-screen-img').show();
        var sorce = $(this).find('img').attr('src');
        // console.log(sorce);
        $('.full-screen-img').find('.img-container').css('background', 'url("' + sorce + '") no-repeat center center/cover');
    });

    $('#fullScreenImgClose').click(function() {
        $('.full-screen-img').hide();
    });
});