$(document).ready(function(){

    // var swiper = new swiper(".mySwiper", {
        
    //     slidesPerView: 2,
    //     spaceBetween: 0,
    //     loop: true,

    //   });

    

        $('#but_right').click(function(){
            $('.album_wrap').animate({
                left:-400
            },function(){
                $('.album_wrap').css({
                    left:0
                }).find('img').first().appendTo('.album_wrap');
                
            });
        });

        // setInterval(()=>{
        //     ('#but_right').click(function(){
        //         $('.album_wrap').animate({
        //             left:-400
        //         },function(){
        //             $('.album_wrap').css({
        //                 left:0
        //             }).find('img').first().appendTo('.album_wrap');                
        //         });
        //     });
        // },1000);

      
        function time(){
            auto = setInterval(function(){
                $('#but_right').trigger('click');
            },5000);
        }
        time();
        $('#but_right').hover(function(){
            clearInterval(auto);
        },function(){
            time();
        });

        

});