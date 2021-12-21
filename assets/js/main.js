$(document).ready(function(){

    var numberofcards = 6;
    leftswipe=0;
    rightswipe=0;
    last = "0";

    $(".card").on("swiperight",function(){

        var last = $(this).attr("data-card");
        $(this).addClass("rotate_right");

        $("#right_arrow").css("background","#0bd3b526");

        setTimeout(function(){
            $("#right_arrow").css("background","#fff");
        },600);
        rightswipe++;

        if(last == "1"){
            setTimeout(function(){
               
                if(rightswipe > 3){

                    $(".sec_cards").css("display","none");
                    $(".sec_success").css("display","block");
                }
                else if(leftswipe > 3){
                    $(".sec_cards").css("display","none");
                    $(".sec_fail").css("display","block");
                }
                else if(rightswipe == 3)
                {
                    $(".sec_cards").css("display","none");
                    $(".sec_success").css("display","block");
                }
            


            },600);
        }

        
    });

    $(".card").on("swipeleft",function(){
        var last = $(this).attr("data-card");
        $(this).addClass("rotate_left");

        $("#left_arrow").css("background","#e58b8d33");

        setTimeout(function(){
            $("#left_arrow").css("background","#fff");
        },600);

        leftswipe++;

        if(last == "1"){
            setTimeout(function(){
              
                if(rightswipe > 3){
                    $(".sec_cards").css("display","none");
                    $(".sec_success").css("display","block");
                }
                else if(leftswipe > 3){
                    $(".sec_cards").css("display","none");
                    $(".sec_fail").css("display","block");
                }
                else if(rightswipe == 3)
                {
                    $(".sec_cards").css("display","none");
                    $(".sec_success").css("display","block");
                }
              
               },600);
        }
    });


    $('.button_go').click(function() {
        location.reload();
    });
});