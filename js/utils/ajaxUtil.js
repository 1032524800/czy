function ajax(url, fnSucc, fnFaild)
{
	//1.创建Ajax对象
	var oAjax=null;
	
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收服务器的返回
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)	//完成
		{
			if(oAjax.status==200)	//成功
			{
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFaild)
					fnFaild(oAjax.status);
			}
		}
	};
}

/**
 * @title: 从cookie中获取数据的公共方法
 * @params: name 参数名
 */
function getCookie(name){
	//获取保存在浏览器中的cookie字符串
	// 'user=abc; pass=123; local=zh'
    var cookieStr = document.cookie;
	//拆分cookie字符串成数组格式
	// ['user=abc','pass=123','local=zh']
    var cookieArr = cookieStr.split("; ");
    //循环拆分出来的数组
    for(var i = 0; i < cookieArr.length; i ++){
		//拆分出name和value的值 cookieArr[i] -> 'user=abc'
		//nameAndValue -> ['user','abc']
        var nameAndValue = cookieArr[i].split("=");
        //比对参数name和cookie中的name是否相同
        if(name == nameAndValue[0]){
            //返回匹配到的cookie结果
            return nameAndValue[1];
        }
    }
}