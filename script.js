let _this;
var timer;


$(document).on("input", "textarea, input", function () {
    _this = $(this);
    clearTimeout(timer);
    timer = setTimeout(sendRequest, 700);
});


function sendRequest() {
    $(_this).highlightWithinTextarea("destroy");
    $(_this).highlightWithinTextarea({
        highlight: ['test', 'hello'],
    });
    changeStyleMistake();
}
function changeStyleMistake() {

    if (parseInt($(_this).css('padding-top')) < 10){
        $('.hwt-highlights').css('margin-top', parseInt($(_this).css('height'))   / 2 + 'px');
    }else{
        $('.hwt-highlights').css('margin-top',parseInt($(_this).css('padding-top'))  + 'px');
    }
    if ($(_this).css("margin-left") != '0px'){
        $('.hwt-highlights').css('margin-left', $(_this).css("margin-left"));
    }else{
        $('.hwt-highlights').css('margin-left', $(_this).css("padding-left"));
    }
    $(".hwt-highlights").each(function () {
        $("mark").each(function () {
            console.log($(this).text());
            $(this).css('background-color', 'transparent !important');
            $(this).addClass("mark-border-ext");

        });
    });
}

