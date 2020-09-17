$(function(){
    let tabs = $("#nav-tab > a ");
    var swatch = $("#img-swatch");

    tabs.on("click",function(){
        let selectedImage = $(this).data("img");

        swatch.fadeOut('fast',function(){
            $(this).attr("src","img/tab-swatch/"+selectedImage);
            $(this).fadeIn('fast');
        });

        
    })

});