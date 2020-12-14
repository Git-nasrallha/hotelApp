import $ from "jquery";
// scroll top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>=200){
            $("#button-up").show(1000);
        }else{
            $("#button-up").hide(1000);
        }
    })

    $("#button-up").on("click",function(){
        
        $('html,body').animate({
            scrollTop:0
        },1000)
        
    })

   
});
