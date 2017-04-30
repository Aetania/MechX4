$(document).ready(function () {
    $('div').hover(function () {
        (this).fadeOut('fast', 0.75);
        $('div').hover(function () {
            (this).click(function () {
                (this).fadeOut('slow', 1);
            });
        });
    });
});
