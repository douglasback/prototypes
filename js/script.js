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
    
})(jQuery, window)
