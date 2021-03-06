$(function(){
    // banner
      TouchSlide({ 
        slideCell:"#banner",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"left", 
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        interTime:3000,
    });

    // 上拉加载
    var page = 0;
    var mock_data = {
            'list1':[
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安装洗维修安装洗维修安装洗',
                price:45
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安装洗维修安装洗维修安装洗',
                price:45
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安装洗维修安装洗维修安装洗',
                price:45
            }
        ],
        'list2':[
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item2.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item2.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item2.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            }
        ],
        'list3':[
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            },
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            }
        ],
        'list4':[
            {
                url:"http://sort1.html",
                title:'洗衣机安装维修安装',
                imgsrc:'img/item1.png',
                desc:'查看问题并维修安装洗维修安',
                price:50
            }
        ]
    }
    $('.serve_hot').dropload({
        scrollArea : window,
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉查看更多</div>',
            domLoad    : '<div class="weui-loadmore"><i class="weui-loading"></i><span class="weui-loadmore__tips">正在加载...</span></div>',
            domNoData  : '<div class="weui-loadmore weui-loadmore_line weui-loadmore_dot"><span class="weui-loadmore__tips"><span class="no-more">更多维修，请按分类查看哦</span></span></div>'
        },
        loadDownFn : function(me){
            page++;
            var result = '';
            var list = mock_data['list'+page];
            if(list){
                for(var i = 0; i < list.length; i++) {
                    result += '<li class="wrap">' + 
                              '<a href="'+list[i].url+'">'+
                              '<div class="item_img"><img src="'+list[i].imgsrc+'" alt="" /></div>'+
                              '<div class="item_des">'+
                              '<h2>'+list[i].title+'</h2>'+
                              '<p>'+list[i].desc+'</p>'+
                              '<span>￥'+list[i].price+'起</span>'
                              '</div>'
                              '</a>'
                            '</li>';         
                }
            }
            else{
                me.lock();
                me.noData();
            }
            // 为了测试，延迟0.1秒加载
            setTimeout(function() {
                $('.item_list ul').append(result);
                me.resetload();
            }, 100);
        }
    });



    // 搜索关键字
    $('.top_search').click(function(){
        window.location.href = 'search.html'
    })



    
})