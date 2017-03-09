window.onload=function(){
	html="";
	var sendmessage=document.getElementById("sendmessage");
	var message=document.getElementById("message");
	var putintomessage=document.getElementById("putintomessage");
	var arrtext=[];
	sendmessage.onclick=function(){
		if (message.value=="") 
			{alert("不能发送空白信息");}
		else
		{
            arrtext.unshift(message.value);
            message.value="";
		}
		for(var i=0;i<arrtext.length;i++)
		{
            html+="<div class='block'><span>"+arrtext[i]+"</span></div>";
		}
	}
	putintomessage.innerHtml=html;
}