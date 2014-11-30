$(function(){

	
	//三、自动切换;
	$(".productshow:eq(0)").Xslider({
		unitdisplayed:5,
		numtoMove:3,
		unitlen:235,
		autoscroll:2000  //自动移动间隔时间     默认null不自动移动;
	});
	
	
	
	$("a").focus(function(){this.blur();});
})



		//HTML5音乐播放器
$(document).ready(function(e) {
 if(($.browser.msie) && $.browser.version<9.0){
//IE9以下浏览器提示
	 $('#smohan_audio').removeClass('play');
	 $('#smohan_audio').addClass('pause');
	 $('#smohan_audio').attr('title','您的浏览器不支持当前Html5播放器');
 }else{
	  var audio = document.createElement("audio");
      audio.src = "http://qzone.haoduoge.com/music2/2014-11-30/1417318456.mp3";
	  if(!audio){
	  audio.load();
	  }else{
	  audio.play();
	  audio.loop = true;
	  }
	 $('#smohan_audio').click(function(e){
		 if($(this).hasClass('play')){
			 audio.pause();
			 $(this).removeClass('play');
			 $(this).addClass('pause');
			 $(this).attr('title','播放');
			}else{
			 audio.play();
			 $(this).removeClass('pause');
			 $(this).addClass('play');
			 $(this).attr('title','暂停');
		 }
	});
  }	
});
	