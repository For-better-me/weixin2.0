$(function(){
    //监测到190个字时候变色

    var bind_name = 'input';
    if (navigator.userAgent.indexOf("MSIE") != -1){
      bind_name = 'propertychange';
    }
    $('.order_fast_form textarea').bind(bind_name, function(){
         var text = $("textarea").val();
         var counter = text.length;
         $(".word_length").text(counter); //每次减去字符长度
         if(counter >= 190) {
             $(".word_length").css("color", "red")
         } else {
             $(".word_length").css("color", "#999")
         }
    }) 
})