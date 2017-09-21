$(function(){
   //地址选择
        window.addEventListener('message', function(event) {
            // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
            var loc = event.data;
            if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
              $('#map').hide();
              $('#bill_site').val(loc.poiaddress)
              $('.apply_bill_wrap').show()
            }                         
        }, false); 

        $('#bill_site').parents('li').click(function(){
          $('.apply_bill_wrap').hide()
          $('#map').show()
        })

        // 提交信息

        var bill_top = $('#bill_top')
        var ident_number = $('#ident_number')
        var bill_name = $('#bill_name')
        var bill_phone = $('#bill_phone')
        var bill_addr = $('#bill_addr')
        var bill_site = $('#bill_site')
        var bill_top_val = '';
        var ident_number_val = '';
        var bill_name_val = '';
        var bill_phone_val = '';
        var bill_addr_val = '';
        var bill_site_val = '';
        $('#submit_bill').click(function(){
            bill_top_val = bill_top.val();
            ident_number_val = ident_number.val();
            bill_name_val = bill_name.val();
            bill_phone_val = bill_phone.val();
            bill_site_val =bill_site.val();
            bill_addr_val = bill_addr.val();
            if(!bill_top_val){
                $.layerToast('请输入发票抬头')
            }
            else if(!ident_number_val){
                $.layerToast('请输入纳税人识别号')     
            }
            else if(!bill_name_val){
                $.layerToast('请输入姓名')     
            }
            else if(!bill_phone_val){
                $.layerToast('请输入手机号')     
            }
            else if(!bill_site_val){
                $.layerToast('请选择地址')     
            }
            else if(!bill_addr_val){
                $.layerToast('请输入详细地址')     
            }
            else{
                $.layerToast('提交成功')   
            }
        })
})