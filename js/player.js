$(document).ready(function(){
    $('.song_play').click(function(){
        $('.cd_img').toggleClass('active');
        $('#s_play').toggleClass('active');
        $('#s_stop').toggleClass('active');
    });

    $('.shuffle_icon').click(function(){
        $('#shuffle_off').toggleClass('active');
        $('#shuffle_on').toggleClass('active');
    });




});