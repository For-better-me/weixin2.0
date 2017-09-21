    // 表单验证
var dom_phone = $('#phone');
var dom_captcha = $('#captcha');
var dom_password = $('#password');
var dom_checkbox = $('#checkbox');
var value_phone = '';
var value_captcha = '';
var value_password = '';
var value_check = true;
var captcha = 2233;//假设这是手机验证码
var validate = function(){
    value_phone = dom_phone.val();
    value_captcha = dom_captcha.val();
    value_password = dom_password.val();
    value_check = dom_checkbox.prop('checked');
    if(value_phone&&value_captcha&&value_password&&value_check){
        $('.register_btn').css('background','#fb870d');
        return true;
    }
    else{    
        $('.register_btn').css('background','#ccc')
        return false;
    }


}


$(function(){
    $('.agreement input').click(function(event) {
        $('.agreement').toggleClass('checked');
        validate()
    });

    $('.register_btn').click(function(){
        if(validate()){
            if(!phone_validate(value_phone)){
                layer_tip('请输入正确的手机号')
            }
            else if(value_password.length<6 || value_password.length>18){
                layer_tip('请重新输入密码')

            }
            else{
                console.log('success');
                console.log(value_password.length)
            }
        }
    })
})