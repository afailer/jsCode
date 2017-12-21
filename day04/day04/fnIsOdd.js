//定义一个函数  判断一个数是否是奇数，如果是返回true，否则返回false
function isOdd(m){
	var flag = true;//假设值为true是奇数
	if( !(m % 2)  ){
		flag = false;
	}
	return flag;
}