$(function(){
    //监测到90个字时候变色
    var bind_name = 'input';
    if (navigator.userAgent.indexOf("MSIE") != -1){
      bind_name = 'propertychange';
    }
    $('.value_con textarea').bind(bind_name, function(){
        var text = $("textarea").val();
        var counter = text.length;
        $(".num_value span").text(counter); //每次减去字符长度
        if(counter >= 90) {
            $(".num_value span").css("color", "red")
        } else {
            $(".num_value span").css("color", "#999")
        }
    }) 
    // 评价切换
    $('.total_value label').click(function(){
        $(this).addClass('on').siblings('label').removeClass('on');
      })

    //faceless--匿名
    $('.faceless input').click(function(){
        $(this).parent('p').toggleClass('on');
        if($(this).parent('p').hasClass('on')){
            $('.faceless span').text('你的评价将以匿名形式展现')
        }
        else{
            $('.faceless span').text('你的评价将展示给大家')
        }
    })
    // 星级评价
    var eva = ["差", "一般", "好", "很好", "非常好"];
    var comment_result = [0,0,0,0];
    var index = 0;
    $('.serve_value .sort_serve>ul>li').click(function(){
        index = $(this).parents('.sort_serve').index()-1;
        var k = $(this).index();
        comment_result[index] = k;
        for(var i = 0;i<5;i++){
          if(i<=k){
            $('.sort_serve').eq(index).find('li').eq(i).addClass('on');
          }
          else{
             $('.sort_serve').eq(index).find('li').eq(i).removeClass('on');
            }
        }
        
        $('.sort_serve').eq(index).find('span').text(eva[k]);
        if(k>2){
            $('.sort_serve').eq(index).find('span').addClass('main_color')
        }
        else{
            $('.sort_serve').eq(index).find('span').removeClass('main_color')
        }
        console.log(comment_result);
    })
})