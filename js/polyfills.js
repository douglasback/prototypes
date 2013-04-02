Modernizr.load([
{
    test: 767 < screen.width,
    yep: ['js/jquery.stickem.js'],
    callback: function(url, result, key){
        (function(){
            $('body').stickem({
                item: '.stickem',
                container: '.stickem-container',
                stickClass: 'stickit',
                endStickClass: 'stickit-end',
                offset: 62,
                onStick: function(stick){
                    var $el = $(stick.$elem[0]);
                    $el.css('width', $el.parent().css('width'));
                },
                onUnstick: function(stick){
                    var $el = $(stick.$elem[0]);
                    $el.css('width', $el.parent().css('width'));
                }
            });
        }())
    }

}
    ])