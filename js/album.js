$(document).ready(function(){
    $('#track_up_btn').click(function(){
        $('.track').toggleClass('active');
        
    });


    $('#add_play_up').click(function(){
        $('.add_play').addClass('active');
    });
    $('#add_play_close').click(function(){
        $('.add_play').removeClass('active');
    });



    $('.content_box').click(function(){
        $(this).toggleClass('active');        
        var content_box_list = document.getElementsByClassName("content_box active");

        if(content_box_list.length > 0){
            $('.add_play_popup').addClass('active');

        }else{
            
            $('.add_play_popup').removeClass('active');
        }
    });

    
    //좋아요 표시 변경
   
    document.getElementById('fav_icon_f').addEventListener('click',myFunction);

    function myFunction(){
        if(document.getElementById('fav_icon_f').innerHTML ==  '<img src="./icons/fav_on.svg" alt="">'){
            document.getElementById('fav_icon_f').innerHTML = '<img src="./icons/fav_off.svg" alt="">';

        }else{
            document.getElementById('fav_icon_f').innerHTML = '<img src="./icons/fav_on.svg" alt="">';

        }
    }


    //check all
    $('#check_all').click(function(){
        $('.content_box, .add_play_popup').toggleClass('active');

    });
   

});



function addSelectedPlayList(){
    var content_box_list = document.getElementsByClassName("content_box active");

    for(var i = (content_box_list.length-1) ; 0 <= i ; i--){

        var musicName = content_box_list[i].getAttribute("musicName");
        addPlayList(musicName);
        content_box_list[i].setAttribute("class","content_box");
        
    }

    $('.add_play_popup').removeClass('active');

}




function addPlayList(musicName){
    var musicBoxHtml = '<div class="music_box">'
            + '    <div class="content_box" style="padding:0;">'
            + '        <div class="img_box">'
            + '            <img src="./img/album_4.jpg" alt="" style="width: 100%; height: 100%;">'
            + '        </div>'
            + '        <div class="title">'
            + '            <div class="song">'
            + '                <a href="#none">'+musicName+'</a>'
            + '            </div>'
            + '            <div class="artist">'
            + '                <a href="#none">조유리</a>'
            + '            </div>'
            + '        </div>'
            + '        <div class="play_time">'
            + '            <a href="#none">3:00</a>'
            + '            <div class="moving">'
            + '                <img src="./sortable_playList.svg" alt="">'
            + '            </div>'
            + '        </div>'
            + '    </div>'
            + '</div>';
    document.getElementById("add_play_main_content").innerHTML = document.getElementById("add_play_main_content").innerHTML + musicBoxHtml;

}


// 전체 듣기를 click시 음악 전부 이동

function allPlay(){

    var content_box_list = document.getElementsByName("content_box");
    
    for(var i = 0 ; i < content_box_list.length; i++){
       var musicName = content_box_list[i].getAttribute("musicName");
       
        addPlayList(musicName);
    }

}




function clearShit(){
    document.getElementById("add_play_main_content").innerHTML = "";
}

