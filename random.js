$(function () {
    var run = 0,
        heading = $("h1"),
        timer;

    $("#start").click(function () {
        $('#what').show()
        var list = [
          1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
         11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
         21, 22, 23, 24, 25
        ]
        if (!run) {
            heading.html("下一个中奖的会是谁？");
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    num = list[r - 1];
                $('.tens').attr('class', 'tens num-' + Math.floor(num / 10))
                $('.unit').attr('class', 'unit num-' + Math.floor(num % 10))

                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (68 - 14) + 14);
                $("<span class='temp'></span>").html(num).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
           heading.html("是TA！是TA！就是TA！！！");
            $(this).val("继续抽奖");
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});