$(function(){
    // 订单类型切换
    $('.order_sort>ul>li').click(function(){
      var order_index = $(this).index();
      $(this).addClass('on').siblings('li').removeClass('on');
      $('.order_list .order_list_box').hide();
      $('.order_list .order_list_box').eq(order_index).show();
    })

    // 支付验证弹框
    $('.go_pay').click(function(){
      $('.blank_wrapper').show();
      $('.blank_wrapper').animate({
        opacity:1
      })
      $('.layer_pay').stop(true).slideDown(200)
    })
    $('.blank_wrapper').click(function(event) {
      $('.layer_pay').stop(true).slideUp(200,function(){
        $('.blank_wrapper').animate({
          opacity:0
        })
        $('.blank_wrapper').hide();
      })
    });

    $('.off_order').click(function(){
        $.layerConfirm({
          contentTxt:'服务已生效,取消订单将扣除您30员上门费,是否仍要取消订单?',
          btns:[
           {
            'btn_txt':'取消',
            'btn_class':'cancel',
            'isPref':true
           },
           {
              'btn_txt':'确定',
              'btn_class':'sure',
              'isPref':false,
              'btn_callback':function(){
                alert('取消成功')
              }
           } 
        ]
        })
    })

    $('.apply_refix').click(function(){
        $.layerConfirm({
              contentTxt:'我们已接到您的返修申请，客服会在24小时内与您联系确认返修原因',
              btns:[
               {
                  'btn_txt':'确定',
                  'btn_class':'sure',
                  'isPref':true
               } 
            ]
        })
    })
})