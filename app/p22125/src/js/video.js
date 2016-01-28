// HTML所需的格式
// <a href="http://sj.video.5054399.com/sjyx/ceshi0505/xyce05005.mp4" class="slogan__video js-videoTrigger" id="openVideo">
//     <em class="slogan__video--rotate"></em>
//     <em class="slogan__video--play"></em>
// </a>
// 
// <div class="pop-box">
//     <div class="pop pop--video">
//         <div class="pop__content">
//             <div class="video-wp"></div>
//         </div>
//         <div class="pop__mask"></div>
//     </div>
// </div>

/* 视频 */
var $videoTriggers = $('.js-videoTrigger');
var $videoPop = $('.pop--video');
var $videoWp = $('.video-wp');
var $videoPopMask = $videoPop.find('.pop__mask');
var videoClass = 'video-pop';

// 视频播放
$videoTriggers.click(function(event) {
  event.preventDefault();

  var url =  $(this).attr('href');
  var $video = $('<video controls autobuffer autoplay>' + '<source src="'+ url +'" type="video/'+/\w+$/.exec(url)+'"/>' + '</video>').addClass(videoClass);

  $videoWp.append($video);
  $('.' + videoClass)[0].play();
  $videoPop.show();
});

// 视频关闭
$videoPopMask.click(function(event) {
  $('.' + videoClass).remove();
  $videoPop.hide();
});