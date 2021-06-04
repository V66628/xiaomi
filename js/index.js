$(function () {
    $("#qrd").mouseenter(() => {
        $("#qrd div").slideDown(300)
    })
    $("#qrd").mouseleave(() => {
        $("#qrd div").slideUp(300)
    })
    $("#shop-cat-li").mouseenter(() => {
        $(".shopping-cat").css({ "color": "#ff6700", "background": "white", "borderBottom": "1px solid white" })
        $(".shopping-cat span").css({ "color": "#ff6700" })
        $("#shopping-cat-block").slideDown(300)
    })
    $("#shop-cat-li").mouseleave(() => {
        $(".shopping-cat").css({ "color": "rgb(177, 177, 177)", "background": "#424242", "borderBottom": "1px solid #424242" })
        $(".shopping-cat span").css({ "color": "rgb(177, 177, 177)" })
        $("#shopping-cat-block").slideUp(300)
    })
    $(".search .search-two").focus(() => {
        $(".search input").css("borderColor", "#ff6700")
    })
    $(".search .search-two").blur(() => {
        $(".search input").css("borderColor", "rgb(177, 177, 177)")
    })
    $("ul.nav-list .nav-list-first").mouseenter(() => {
        if($(".block:not(.iphone-contain)").css("display")=="block"){
            $(".block:not(.iphone-contain)").css("display","none")
            $(".iphone-contain").css("display","block")
        }
        else{
            $(".iphone-contain").slideDown(300)
        }
    })
    $("ul.nav-list .nav-list-first").mouseleave(() => {
        if($(".block:not(.iphone-contain)").css("display")=="block"){
            $(".iphone-contain").css("display","none")
        }
        else{
            $(".iphone-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-second").mouseenter(() => {
        if($(".block:eq(0),.block:eq(2)").css("display")=="block"){
            $(".block:not(.second-contain)").css("display","none")
            $(".second-contain").css("display","block")
        }
        else{
            $(".second-contain").slideDown(300)
        }
    })
    $("ul.nav-list .nav-list-second").mouseleave(() => {
        if($(".block:eq(0),.block:eq(2)").css("display")=="block"){
            $(".block:eq(0),.block:eq(2)").css("display","none")
            $(".second-contain").css("display","none")
        }
        else{
            $(".second-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-third").mouseenter(() => {
        if($(".block:eq(1),.block:eq(3)").css("display")=="block"){
            $(".block:not(.third-contain)").css("display","none")
            $(".third-contain").css("display","block")
        }
        else{
            $(".third-contain").slideDown(300)
        }
    })
    $("ul.nav-list .nav-list-third").mouseleave(() => {
        if($(".block:eq(1),.block:eq(3)").css("display")=="block"){
            $(".block:eq(1),.block:eq(3)").css("display","none")
            $(".third-contain").css("display","none")
        }
        else{
            $(".third-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-fourth").mouseenter(() => {
        if($(".block:eq(2),.block:eq(4)").css("display")=="block"){
            $(".block:not(.fourth-contain)").css("display","none")
            $(".fourth-contain").css("display","block")
        }
        else{
            $(".fourth-contain").slideDown(300)
        }

    })
    $("ul.nav-list .nav-list-fourth").mouseleave(() => {
        if($(".block:eq(2),.block:eq(4)").css("display")=="block"){
            $(".block:eq(2),.block:eq(4)").css("display","none")
            $(".fourth-contain").css("display","none")
        }
        else{
            $(".fourth-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-fifth").mouseenter(() => {
        if($(".block:eq(3),.block:eq(5)").css("display")=="block"){
            $(".block:not(.fifth-contain)").css("display","none")
            $(".fifth-contain").css("display","block")
        }
        else{
            $(".fifth-contain").slideDown(300)
        }

    })
    $("ul.nav-list .nav-list-fifth").mouseleave(() => {
        if($(".block:eq(3),.block:eq(5)").css("display")=="block"){
            $(".fifth-contain").css("display","none")
        }
        else{
            $(".fifth-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-sixth").mouseenter(() => {
        if($(".block:eq(4),.block:eq(6)").css("display")=="block"){
            $(".block:not(.sixth-contain)").css("display","none")
            $(".sixth-contain").css("display","block")
        }
        else{
            $(".sixth-contain").slideDown(300)
        }

    })
    $("ul.nav-list .nav-list-sixth").mouseleave(() => {
        if($(".block:eq(4),.block:eq(6)").css("display")=="block"){
            $(".sixth-contain").css("display","none")
        }
        else{
            $(".sixth-contain").slideUp(300)
        }
    })
    $("ul.nav-list .nav-list-seventh").mouseenter(() => {
        if($(".block:eq(5)").css("display")=="block"){
            $(".block:not(.seventh-contain)").css("display","none")
            $(".seventh-contain").css("display","block")
        }
        else{
            $(".seventh-contain").slideDown(300)
        }
    })
    $("ul.nav-list .nav-list-seventh").mouseleave(() => {
        if($(".block:eq(5)").css("display")=="block"){
            $(".seventh-contain").css("display","none")
        }
        else{
            $(".seventh-contain").slideUp(300)
        }
    })
})