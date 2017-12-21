//封装一个ajax  通过promise对象实现
function ajaxGet(url,data){
	var pro = new Promise(function(success,failed){
			var ajax = new XMLHttpRequest();
			if( data ){
				url = url + "?" + data;
			}
			ajax.open("GET",url);
			ajax.send();
			ajax.onreadystatechange = function(){
				if( ajax.readyState == 4 && ajax.status == 200 ){ //请求成功
					success(ajax.responseText);
				}
			}
			//如果承诺的时间段内没有完成   执行failed  
			setTimeout(function(){
				failed("请求数据失败");
			},5000)
		});
	return pro;
}

