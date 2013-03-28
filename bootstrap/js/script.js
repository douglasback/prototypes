(function($,window){
    var $home = $('#home'),
        navBar = $home.find('.navbar');
    function navPinner() {
        if ($(window).width() >= 768) {
            var rotatorHeight, scrollPos;
            rotatorHeight = $home.find('.branding').height() + 28;
            scrollPos = $(window).scrollTop();
            if (scrollPos >= rotatorHeight) {navBar.addClass('navbar-fixed-top');} else {navBar.removeClass('navbar-fixed-top');}
        }
    }
    $(window).scroll(function(){navPinner();}).resize(function(){navPinner()});
    $('body').stickem({
        item: '.stickem',
        container: '.stickem-container',
        stickClass: 'stickit',
        endStickClass: 'stickit-end',
        offset: 0,
        onStick: function(stick){
            var $el = $(stick.$elem[0]);
            $el.css('width', $el.parent().css('width'));
        },
        onUnstick: function(el){
            var $el = $(stick.$elem[0]);
            $el.css('width', 'auto');
        }
    });
})(jQuery, window)
