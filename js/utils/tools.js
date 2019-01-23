/**
 * @title: ajax公共方法
 * @params: url 请求路径; fnSucc 请求成功后的回调方法; fnFaild 请求失败后的回调方法。
 */
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
 * @title: 保存数据到cookie的公共方法
 * @params: name 参数名; value 参数值; isDay 过期时间(天)
 */
function setCookie(name, value, isDay){
    var oDate = new Date();
    oDate.setDate(oDate.getDate +isDay);
    document.cookie = name + "=" + value + ";expires=" + oDate;
}

function getCookie(name){
    // 'user=abc; pass=123; local=zh'
    var cookie = document.cookie;
    var cookieArr = cookie.split("; ");
    for(var i=0;i<cookieArr.length;i++){
        var entrie = cookieArr[i].split("=");
        if(name == entrie[0]){
            return entrie[1];
        }
    }
}