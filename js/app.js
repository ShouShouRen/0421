new WOW().init();
var typed = new Typed(".auto-type", {
    strings: ["波波", "歷史"],
    typeSpeed: 250,
    backSpeed: 250,
    loop: true
})

$(document).ready(function () {
    $(window).scroll(function () {
        //小螢幕下的導航條摺疊
        if ($(window).width() < 768) {
            $("#navbarNav a").click(function () {
                $("#navbarNav").collapse('hide');
            });
            $(window).scroll(function () {
                $("#navbarNav").collapse('hide');
            });
        }
    })

    $(".add").each(function (i) {
        $(this).click(function () {
            var total = $(".num").eq(i).val();
            total++;
            $(".num").eq(i).val(total);
        });
    });
    $(".min").each(function (index) {
        $(this).click(function () {
            var total = $(".num").eq(index).val();
            var n = parseInt(total) - 1;
            if (n >= 1) {
                $(".num").eq(index).val(n);
            } else {
                $(".num").eq(index).val(0);
            }
        });
    });
    
    const datan = [0, 0, 0, 0, 0, 0];
    var allnum = 0;
    $(".addToCart").click(function () {
        allnum = 0;
        for (n = 0; n < 6; n++) {
            var t = $(".num").eq(n).val();
            $(".disnum").eq(n).html(t);
            allnum += parseInt(t);
            datan[n] = parseInt(t);
        }
    })

    $(".submit").click(function () {
        $(".num").val(0);
        $(".disnum").val(0);
    })
});