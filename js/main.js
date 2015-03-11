var $box = $('.box');
var $showhide = $('.btn-show-hide');

$showhide.on ('click', function () {
    $box.toggleClass ('box-show');
});

var $diamond = $('.diamond');
var $move = $('.btn-move');

$move.on ('click', function () {
        $diamond.toggleClass ('diamond-move');
});