//这是封装了一个$函数，用来选择元素的
function $(selector,parent,tagName){
			//将传入的选择器 选取第一字符 用变量存一下
			var fisrtChar=selector.charAt(0);
			//如果传入父级，则按传入的父级来，否则parent未定义，为假，或运算则走后面，document赋给parent
			parent=parent||document;
			//做一个标签限制，如果传了标签，按标签走，否则tagName为假，则按通配符走
			tagName=tagName||"*";
			
			if(fisrtChar=="#"){
				return document.getElementById(selector.substring(1));
			}else if(fisrtChar=="."){
				//在整个文档下获取所有的标签  html  body  p  div  span
				var allEles=parent.getElementsByTagName(tagName);
				//建立一个空数组 ，用于存储找到相应类的标签元素
				var arr=[];
				//循环所有标签
				for(var i=0;i<allEles.length;i++){
					//拿到每一个标签  将身上的classname通过split方法转成数组
					var arrClassNames=allEles[i].className.split(" ")   //"abc cc aa"==>["abc","cc","aa"]  "div"  "aa cc" ""
					//["abc","cc","aa","dd"]
					//将每一个标签身上的类转成数组之后进行循环
					for(var j=0;j<arrClassNames.length;j++){
						//只要找到有一个类和我要找的类相同
						if(arrClassNames[j]==selector.slice(1)){
							//把当前所在的标签存起来
								arr.push(allEles[i]);
								//不用往后看了
								break;
						}
					};
				};
				//arr里面找到所有带这个类的标签元素们
				return arr;
			}else{
				return parent.getElementsByTagName(selector);
			}
		}