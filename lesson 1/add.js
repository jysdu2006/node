$(document).ready(function () {
	var logButton=$("#login");
	logButton.click(function(){
		alert("test!!!");
		$(this).hide();
	});

	var addBtn=$('#addBtn');
	var image=$('<img src="http://sdumicro.qiniudn.com/computer.jpg" width="30%" height="15%" alt="...">');
	addBtn.click(function(){
		$('#panel3').append('<img src="http://sdumicro.qiniudn.com/computer.jpg" width="30%" height="15%" alt="...">');
	});


});