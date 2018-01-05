$(document).ready(function() {
    lightbox.option({
        'resizeDuration': 2000,
        'wrapAround': true
        // 'imageFadeDuration': 6000
    });
// menu
    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function () {
        var menu = $(this).next('ul');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        }
        else {
            menu.addClass('open');
        }
    });

// tooltip
    $(document).tooltip();

    
});
