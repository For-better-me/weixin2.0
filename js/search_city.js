$(function(){
    var list_city = [
        {
            shortName:'北京',
            province:'北京',
            cityCode:'01'
        },
        {
            shortName:'石家庄',
            province:'北京',
            cityCode:'01'
        },
        {
            shortName:'天津',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'深圳',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'上海',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'广州',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'福建',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'山东',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'成都',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'张家口',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'山西',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'南京',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'徐州',
            province:'天津',
            cityCode:'01'
        },
        {
            shortName:'沧州',
            province:'天津',
            cityCode:'01'
        }
    ]
    var city_data = [];
    list_city.forEach(function(item){
        city_data.push(item.shortName)
    })

    function searchCity(searchString){
        var match_city = [];
        var cityNode = '';
        city_data.forEach(function(item){
            if(item.indexOf(searchString)>=0){
                match_city.push(item)
            }
        })
        if(match_city.length){
            match_city.forEach(function(item){
                cityNode += '<li>'+item+'</li>'
            })
            $('.search_city_result ul').html('');
            $('.search_city_result ul').prepend(cityNode)
        }
        else{
            $('.search_city_result ul').html('暂未查询到您搜索的城市')
        }
    }

    // $('.search_city_wrap input').keyup(function(event) {
    //     var search_val = $(this).val().trim();
    //     if(search_val.length){
    //         searchCity(search_val);
    //     }
    // });
    //  $('.search_city_wrap input').on('input paste', function() {
    //     var search_val = $(this).val().trim();
    //     if(search_val.length){
    //         searchCity(search_val);
    //     }
    // });

       var bind_name = 'input';
       if (navigator.userAgent.indexOf("MSIE") != -1){
         bind_name = 'propertychange';
       }
       $('.search_city_wrap input').bind(bind_name, function(){
          var search_val = $(this).val().trim();
             if(search_val.length){
                 searchCity(search_val);
             }
       }) 
})