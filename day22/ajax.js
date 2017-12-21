//url : 路径
//callback ： 回调函数
// data ： url上的参数  可以没有参数  
function ajaxGet(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if( arguments.length == 3 ){//说明data有值    url上就会带参数
		url = url + "?" + data;
	}
	ajax.open("GET",url);
	ajax.send();
	ajax.onreadystatechange = function(){
		if( ajax.readyState == 4  && ajax.status == 200 ){
			//此处是一个不固定的功能   ajax.responseText
			callback( ajax.responseText );//通过回调函数的参数将服务器的结果返回
		}
	}
}

