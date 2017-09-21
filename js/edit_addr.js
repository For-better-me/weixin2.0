$(function(){
    //区域选择
    // selectContactDom.bind('click', function () {
    //     var oneLevelId = selectContactDom.attr('data-province-code');
    //     var twoLevelId = selectContactDom.attr('data-city-code');
    //     var threeLevelId = selectContactDom.attr('data-district-code');
    //     var iosSelect = new IosSelect(3, 
    //         [iosProvinces, iosCitys, iosCountys],
    //         {
    //             title: '',
    //             itemHeight: 35,
    //             relation: [1, 1, 0, 0],
    //             oneLevelId: oneLevelId,
    //             twoLevelId: twoLevelId,
    //             threeLevelId: threeLevelId,
    //             callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
    //                 selectContactDom.attr('data-province-code', selectOneObj.id);
    //                 selectContactDom.attr('data-city-code', selectTwoObj.id);
    //                 selectContactDom.attr('data-district-code', selectThreeObj.id);
    //                 selectContactDom.val(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
    //             }
    //     });
    // });
    var selectContactDom = $('#select_contact');
    var nameDom = $('#name_linkman');
    var phoneDom = $('#phone_linkman');
    var siteDom = $('#site_linkman');
    var nameValue = '';
    var phoneValue = 'xx';
    var siteValue = 'xx';
    var areaValue = '';
    phoneDom.blur(function(){
        phoneValue = phoneDom.val();
        if(!phone_validate(phoneValue)){
            phoneDom.val('');
            $.layerToast('手机格式不正确')
        }
    })
    function isSave(){
        nameValue = nameDom.val();
        phoneValue = phoneDom.val();
        siteValue = siteDom.val();
        areaValue = selectContactDom.val();
        if(nameValue && phoneValue && siteValue && areaValue){
            return true;
        }
        else{
            return false;
        }
    }
    $('.save_addr').click(function(){
        isSave()
        if(isSave()){
            alert('success')
        }
        else{
            $.layerToast('请把信息填写完整')
        }
    })

  //地址选择
    window.addEventListener('message', function(event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;
        if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          $('#map').hide();
          $('#select_contact').val(loc.poiaddress)
        }                         
    }, false); 

    $('#select_contact').click(function(){
      $('#map').show()
    })
})