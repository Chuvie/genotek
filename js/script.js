$(function () {
    $('.collapse__header').on("click", function() {
        $(this).toggleClass( "active" );
        $(this).parent().find('.collapse__panel').slideToggle();
    });

    $('.form-control__clear').on("click", function() {
        $(this).parent().find('input').val('');
    });
});
