// width += 1;
var per = 0;
var timer;
timer = setInterval(function(){
    $('.bar').css('width', per + '%');
    per += 1;
    if(per > 100) {
        
        $('.pageLoading').addClass('complete');
        setTimeout(function(){
            $('.monsterText').html('<h2>We are</h2><h1>SOUARE<br>MONTHSTER</h1><p>Ahhhh We\' ll eat you</p>')
        },3000)
        
        clearInterval(timer);
    }
},30)