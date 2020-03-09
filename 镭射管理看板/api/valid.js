export function validLogin(data){
	console.log(data);
	let validData=new Object();
	for(var item in data){
		console.log(data[item]);
		if(data[item]==""||!data[item]||data[item]==undefined||data[item]==null){
			validData.msg="用户名或密码不能为空！"
			validData.flag=false;
		}else{
			validData.msg="验证成功！"
			validData.flag=true;
		}
	}
	console.log(validData);
	return validData;
}