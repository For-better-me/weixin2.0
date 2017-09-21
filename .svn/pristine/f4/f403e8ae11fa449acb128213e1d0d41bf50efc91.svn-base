(function($){
   
   // 取消-确认弹框
   $.layerConfirm = function(opt){
        var defalut_confirm = {
         titleTxt : '温馨提示',
         contentTxt : '提示内容',
         btns:[
           {
              'btn_txt':'确定',
              'btn_class':'sure',
              'isPref':true,
              'btn_callback':function(){}
           },
           {
              'btn_txt':'取消',
              'btn_class':'cancel',
              'isPref':false,
              'btn_callback':function(){}
           } 
         ],
         wechatStyle:true
        }

        var settings = $.extend({},defalut_confirm,opt);
        console.log(settings)
        var btn_wrap = '';
        for(var i = 0;i<settings.btns.length;i++){
            btn_wrap += '<button class="'+settings.btns[i].btn_class+'">'+settings.btns[i].btn_txt+'</button>'
        }
        var confirm_box = $('<div class="wrapper"><div class = "confirm_box"><h2>'+settings.titleTxt+'</h2><p>'+settings.contentTxt+'</p ><div class="btn_box">'+btn_wrap+'</div></div></div>')
        $('body').prepend(confirm_box);
        $('.wrapper').css({
                              "position":"fixed",
                              "top":0,
                              "bottom":0,
                              "left":0,
                              "right":0,
                              "background":"rgba(0,0,0,0.7)",
                              'z-index':'999'
                          })
        if(settings.wechatStyle){
            $('.confirm_box').css({
                'width':'6.16rem',
                'margin':'3.51rem auto 0',
                'z-index': '100000',
                'overflow': 'hidden',
                'background': '#fff',
                'border-radius': '.08rem'
            })
            $('.confirm_box h2').css({
                 'display': 'inline-block',
                 'margin': '.5rem .48rem .3rem',
                 'font-size': '.28rem',
                 'color': '#333'
             })
            $('.confirm_box p').css({
                    'margin': '0 auto',
                    'padding': '0 .48rem .43rem',
                    'text-align': 'justify',
                    'color': '#666',
                    'background': '#fff',
                    'border-bottom': '1px solid #e5e5e5',
                    'font-size': '.26rem',
                    'line-height':'0.4rem'
                })
            $('.btn_box').css({
                    'width': '100%',
                    'height':' .99rem',
                    'background':' #fff',
                    'line-height': '.99rem'
                  });

            $('.btn_box button').css({
                    'display': 'inline-block',
                    'width': '1.2rem',
                    'float': 'right',
                    'font-size': '.28rem',
                    'color': '#333',
                    'height': '.6rem',
                    'line-height': '.99rem',
                    'text-align': 'center',
                    'background':'transparent'
                 })
             // $('.btn_box button').eq(0).css({
             //        'margin-right': '.34rem',
             //        'color': '#FB870D'
             // })



        }
        else{
            $('.confirm_box').css({
                                      "font-size":'14px',
                                      "color":"#333",
                                      "position":"fixed",
                                      'left':'0',
                                      'right':'0',
                                      'top':'35%',
                                      'margin':'auto',
                                      'width':'70%',
                                      'height':'auto',
                                      'text-align':'center',
                                      'background':'rgba(255,255,255,0.9)',
                                      'line-height':'25px',
                                      'letter-spacing':'1px',
                                      'border-radius':'8px',
                                      'z-index':'100000',

                                  });
            $('.confirm_box h2').css({
                                         "font-size":"16px",
                                         "color":"#333",
                                         "padding-top":"16px"
                                     })
            $('.confirm_box p').css({
                                        "padding":"0 20px",
                                        "margin-top":"8px",
                                        "line-height":"22px"
                                    })
            $('.btn_box').css({
                                  "width":"100%",
                                  "border-top":"#dedede solid 1px",
                                  "height":"40px",
                                  "margin-top":"14px"
                              });
            $('.btn_box button').css({
                                         "width":"50%",
                                         "height":"40px",
                                         "background":"transparent",
                                         "border":"none",
                                         "color":"#41a3e8",
                                         "font-size":"16px",
                                         "outline":"none"
                                     })


            $('.btn_box button').eq(1).css({
                           "border-left":"#dedede solid 1px"
                       })
        }
        
        settings.btns.forEach(function(btn){
          if(btn.isPref){
            $('.'+btn.btn_class).css({
                    'margin-right': '.34rem',
                    'color': '#FB870D'
             })
          }
          console.log(btn)
          $('.'+btn.btn_class).on('click',function(event) {
              event.preventDefault();
              if(btn.btn_callback){
                btn.btn_callback();
              }
              clear($('.wrapper'))
          })
        })


        function clear(obj){
            obj.remove();
        }
   }


   // toast
   $.layerToast = function(tip){
      var toast_tip = tip || 'toast提示语';
      var toast_box = $('<div class = "toast_box">'+toast_tip+'</div>');
          $('body').append(toast_box);
          $('.toast_box').css({
                  "font-size":'14px',
                  "color":"#fff",
                  "position":"fixed",
                  'left':'0',
                  'right':'0',
                  'top':'30%',
                  'margin':'auto',
                  'width':'180px',
                  'height':'auto',
                  'padding':'10px 15px',
                  'text-align':'center',
                  'background':'rgba(0,0,0,0.5)',
                  'line-height':'22px',
                  'letter-spacing':'1px',
                  'border-radius':'4px',
                  'z-index':'100000'

          });
          setTimeout(function(){
              $('.toast_box').remove();
          },2000)
       
   }

   // 选择-select
   $.layerSelect = function(opt){
        var defalut_select = {
         select:['女生','男生'],
         callback:function(){}
        }
        var settings = $.extend({},defalut_select,opt);
        var chooseNode = '';
        for(var i = 0;i<settings.select.length;i++){
            chooseNode += '<li>'+settings.select[i]+'</li>';
        }
        var select_box = $('<div class="wrapper"><div class = "select_box"><ul>'+chooseNode+'</ul><button>取消</button></div></div>')
        console.log(chooseNode);
        $('body').append(select_box);
        $('.wrapper').css({
            "position":"fixed",
            "top":0,
            "bottom":0,
            "left":0,
            "right":0,
            "background":"rgba(0,0,0,0.7)",
            'z-index':'999'
        })
        $('.select_box').css({
          'width':'100%',
          'position':'fixed',
          'bottom':'0',
          'background':'#f7f9ff'
        })
        $('.select_box li').css({
            'width':'100%',
            'height':'55px',
            'background':"#fff",
            'font-size':'0.3rem',
            'color':'#333',
            'text-align':'center',
            'line-height':'55px'
          })
        $('.select_box li').eq(0).css({
          'border-bottom':'#eee solid 1px'
        })
        $('.select_box button').css({
            'width':'100%',
            'height':'55px',
            'background':"#fff",
            'font-size':'0.3rem',
            'color':'#333',
            'text-align':'center',
            'line-height':'55px',
            'margin-top':'6px'
          })

        $('.select_box li').click(function(event){
            var return_val = $(this).text();
            if(settings.callback){
               var obj = settings.callback();   
               obj.text(return_val)
            }
            $('.wrapper').remove();
        });

        $('.select_box button').click(function(){
           $('.wrapper').remove();
        })
        

   }




})(jQuery)