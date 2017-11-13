$("body").paroller();


$menuButton = $('#btnMenu');
$menu = $('#mainM');

$menuButton.click(function () {
    $menu.toggleClass('openMenu');
    $menuButton.toggleClass('openBtn');
});

$(document).ready(function () {
    var $window = $(window);
    $infoRes = $('.infoResources').find('h3');
    $infoContent = $('.infoResContent');

    $menuCon = $('.menuList');
    $fistItemMenu = $('.firstMenuItem');
    $menuItem = $('.menuItem');

    var windowsSize = $window.width();

    if (windowsSize < 991 ) {
        $infoRes.click(function () {
            $infoRes.addClass('collapsed');
            $infoContent.slideToggle();
        });
    }
    if (windowsSize < 767 ) {
        $fistItemMenu.each(function () {
            $(this).click(function () {
                $(this).siblings($menuItem).slideToggle();
            })
        })
    }

});



