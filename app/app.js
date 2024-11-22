$(document).ready(function (e){
    function hide_show_bublishcity(i1='true', i2='true', i3='true', i4='true'){
        if(i1 =='true'){
            $("div#t1").fadeOut(10);
        }else{
            $("div#t1").fadeIn(1000);
        }
        if(i2 =='true'){
            $("div#t2").fadeOut(10);
        }else{
            $("div#t2").fadeIn(1000);
        }
        if(i3 =='true'){
            $("div#t3").fadeOut(10);
        }else{
            $("div#t3").fadeIn(1000);
        }
        if(i4 =='true'){
       $("div#t4").fadeOut(10);
        }else{
            $("div#t4").fadeIn(1000);
        }
    }
    function chage_photo(){
        var i = Math.floor(Math.random() * 4+1);
        if(i=="1"){
            hide_show_bublishcity('true', 'false', 'true', 'true');
        }else if(i=="2"){
            hide_show_bublishcity('true', 'true', 'false', 'true');
        }else if(i=="3"){
            hide_show_bublishcity('true', 'true', 'true', 'false');
        }else if(i=="4"){
            hide_show_bublishcity('false', 'true', 'true', 'true');
        }
    }
    hide_show_bublishcity('true', 'false', 'true', 'true');
    setInterval(chage_photo, 1000*60, 1);
});