
// function layer_confirm(tip,sure,cancel) {
//     var confirm_box = $('<div class="wrapper"><div class = "confirm_box"><h2>温馨提示</h2><p></p ><div class="btn_box"><button class="sure">确定</button><button class="cancel">取消</button></div></div></div>')
//     $('body').append(confirm_box);
//     $('.wrapper').css({
//                           "position":"fixed",
//                           "top":0,
//                           "bottom":0,
//                           "left":0,
//                           "right":0,
//                           "background":"rgba(0,0,0,0.7)",
//                           'z-index':'999'
//                       })
//     $('.confirm_box').css({
//                               "font-size":'14px',
//                               "color":"#333",
//                               "position":"fixed",
//                               'left':'0',
//                               'right':'0',
//                               'top':'35%',
//                               'margin':'auto',
//                               'width':'70%',
//                               'height':'auto',
//                               'text-align':'center',
//                               'background':'rgba(255,255,255,0.9)',
//                               'line-height':'25px',
//                               'letter-spacing':'1px',
//                               'border-radius':'8px',
//                               'z-index':'100000',

//                           });
//     $('.confirm_box h2').css({
//                                  "font-size":"16px",
//                                  "color":"#333",
//                                  "padding-top":"16px"
//                              })
//     $('.confirm_box p').css({
//                                 "padding":"0 20px",
//                                 "margin-top":"8px",
//                                 "line-height":"22px"
//                             })
//     $('.btn_box').css({
//                           "width":"100%",
//                           "border-top":"#dedede solid 1px",
//                           "height":"40px",
//                           "margin-top":"14px"
//                       });
//     $('.btn_box button').css({
//                                  "width":"50%",
//                                  "height":"40px",
//                                  "background":"transparent",
//                                  "border":"none",
//                                  "color":"#41a3e8",
//                                  "font-size":"16px",
//                                  "outline":"none"
//                              })
//     $('.sure').css({
//                        "border-right":"#dedede solid 1px"
//                    })
//     $('.confirm_box p').text(tip);
//     $('.sure').click(function(){
//         if(sure){
//             sure()
//         }
//         $('.wrapper').remove();
//     })
//     $('.cancel').click(function(){
//         if(cancel){
//             cancel()
//         }
//         $('.wrapper').remove();
//     })

// }
// function layer_tip(form_tip,fun){
//     var isLayer = $('.layer_box').length;
//     if(!isLayer){
//       var layer_box = $('<div class = "layer_box"></div>');
//           $('body').append(layer_box);
//           $('.layer_box').css({
//                   "font-size":'14px',
//                   "color":"#fff",
//                   "position":"fixed",
//                   'left':'0',
//                   'right':'0',
//                   'top':'25%',
//                   'margin':'auto',
//                   'width':'180px',
//                   'height':'auto',
//                   'padding':'10px 15px',
//                   'text-align':'center',
//                   'background':'rgba(0,0,0,0.5)',
//                   'line-height':'22px',
//                   'letter-spacing':'1px',
//                   'border-radius':'4px',
//                   'z-index':'100000'

//           });
//           $('.layer_box').text(form_tip);
//           setTimeout(function(){
//               $('.layer_box').remove();
//               if(fun){
//                 fun();
//               }
//           },2000)
//     }
    
// }


// function layer_select(select1,select2,obj){
//   var select_box = $('<div class="wrapper"><div class = "select_box"><ul><li></li><li></li></ul><button>取消</button></div></div>')
//   $('body').append(select_box);
//   $('.wrapper').css({
//       "position":"fixed",
//       "top":0,
//       "bottom":0,
//       "left":0,
//       "right":0,
//       "background":"rgba(0,0,0,0.7)",
//       'z-index':'999'
//   })
//   $('.select_box').css({
//     'width':'100%',
//     'position':'fixed',
//     'bottom':'0',
//     'background':'#f7f9ff'
//   })
//   $('.select_box li').css({
//       'width':'100%',
//       'height':'55px',
//       'background':"#fff",
//       'font-size':'0.3rem',
//       'color':'#333',
//       'text-align':'center',
//       'line-height':'55px'
//     })
//   $('.select_box li').eq(0).css({
//     'border-bottom':'#eee solid 1px'
//   })
//   $('.select_box button').css({
//       'width':'100%',
//       'height':'55px',
//       'background':"#fff",
//       'font-size':'0.3rem',
//       'color':'#333',
//       'text-align':'center',
//       'line-height':'55px',
//       'margin-top':'6px'
//     })
//   $('.select_box li').eq(0).text(select1);
//   $('.select_box li').eq(1).text(select2);
//   $('.select_box li').click(function(event){
//       var return_val = $(this).text();
//       obj.text(return_val)
//       $('.wrapper').remove();
//   });

//   $('.select_box button').click(function(){
//      $('.wrapper').remove();
//   })
  


// }



function phone_validate(number){
  var reg = /^1[3|4|5|7|8]\d{9}$/;
  if(reg.test(number)){
    return true;
  }
  else{
    return false;
  }
}

