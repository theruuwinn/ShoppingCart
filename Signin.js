function myFun(){
	var x = document.getElementById('id1');
	if(x.type=="password")
	{
		x.type="text";
	}
	else
	{
		x.type="password";
	}
}