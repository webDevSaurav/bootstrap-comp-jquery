$(document).ready(()=>{
    //slide the menu bar on click
    $(".menu span").click(()=>{
        $(".hide-on-mobile").slideToggle("fast");
    })
    //change to defaults on screen size change
    $(window).resize((e)=>{
        if($(window).width() >= 480)
        {
            $(".hide-on-mobile").show();
        } else {
            $(".hide-on-mobile").hide();
        }
    });
})