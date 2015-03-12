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

var $panel = $('.panel');
var $collapse = $('.btn-collapse-expand');

$collapse.on ('click', function () {
    $panel.toggleClass ('panel-collapse');
});

var $cirlce = $('.circle');
var $ballBounce = $('.btn-bounce');

$ballBounce.on ('click', function () {
    $cirlce.toggleClass ('ball-bounce');
});

var $list = $('.list');
var $append = $('.btn-append');

$append.on ('click', function () {
    
    var $li =$('<li>').html ('new-list-item');
    
    $list.prepend($li);
    $list.toggleClass ('list-append');
});

