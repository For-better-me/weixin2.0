
  // 跳转锚点
  function anchorJump(n) {
      var text = $(n).text();
      if (text.length < 2) {
          $('.showLetter span').text(text)
          $('.showLetter').css({'opacity':' 1'})
          location.hash = '#' + text
      }
  }
  // 滑动结束
  function touchEnd() {
      var opcityNum = 1;
      setInterval(function () {
          opcityNum -= 0.1;
          if (opcityNum > 0) {
              $('.showLetter').css({'opacity': opcityNum})
          } else {
              clearInterval();
          }
      },50)
      $('.letter').css('background','rgba(0,0,0,0)')

  }
  // 手指滑动
  function move() {
     //  获取开始点击的位置
     //  每滑动一个a标签的高度切换一个锚点
      event.preventDefault();
      console.log(document.elementFromPoint(event.changedTouches[0].clientX,event.changedTouches[0].clientY));
      anchorJump(document.elementFromPoint(event.changedTouches[0].clientX,event.changedTouches[0].clientY));
      console.log(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
      $('.letter').css('background','rgba(0,0,0,0.2)')
  }

 function cityHeight(argument) {
   var windowH = $(window).height();
   var search_top = $('.search_city').height()+$('.city-location').height()
   var scroll_area = windowH - search_top - 15;
   $('.city').height(scroll_area)
 }
 cityHeight();
 $(window).resize(function(event) {
    cityHeight();
 });


 //搜索城市跳转
 $('.search_city').click(function(){
     window.location.href = 'search_city.html'
 })


// 禁止长按选中
$('.letter a').bind('contextmenu', function(e) {
  e.preventDefault();
})


