;(function($){
	$.dialog = function(opt){
		return new Dialog(opt);
	}
	function Dialog(opt){
		var that = this;
		var _default = {
			txt:'弹出框内容',
			btn:['确定','取消'],
			callback:null
		}
		this.seetings = $.extend({},_default,opt);
		var dan_btns = [];
		var event_f = function(e){e.preventDefault();} 

		for(var i =0;i<this.seetings.btn.length;i++){
			dan_btns+='<span>'+this.seetings.btn[i]+'</span>'
		}
		var htmlNode = '<div class="dan_mark">'
					  +'<div class="dan_dialog">'
					  +'<span class="tip">温馨提示</span>'
					  +'<p class="dan_p">'+this.seetings.txt+'</p>'
					  +'<p class="dan_btns">'+dan_btns+'</p>'
					  +'</div>'
					  +'</div>'

		$("body").prepend(htmlNode);
		document.body.addEventListener('touchmove', event_f, false);  

		$('.dan_btns').find('span').eq(0).on('click',function(){
			clear();
			if(that.seetings.callback){
				that.seetings.callback();
			}
		})

		$('.dan_btns').find('span').eq(1).on('click',function(){
			clear();
			// if(that.seetings.callback){
			// 	that.seetings.callback();
			// }
		})

		function clear(){
			$('.dan_mark').remove();
			$('.dan_dialog').remove();
			document.body.removeEventListener('touchmove', event_f, false);
		}                                                                                     
	}
})(jQuery)