function setFont(argument) {
	// console.log("here mate")
	// console.log($("#fontDropDown").val());
	// OLD
	// if (document.getElementById("welcomeText2")) {
	// 	// console.log($("#fontDropDown").val())
	// 	document.getElementById("welcomeText2").style.fontSize = $("#fontDropDown").val();
	// }
	// if (document.getElementById("date")){
	// 	document.getElementById("date").style.fontSize = $("#fontDropDown").val();
	// }
	// if (document.getElementById("time")){
	// 	document.getElementById("time").style.fontSize = $("#fontDropDown").val();
	// }
	console.log($("#fontDropDown").val());
	document.getElementById("fontResponsiveness").style.fontSize = $("#fontDropDown").val();


    // $(".fontResponsiveness").css('font-size',$("#fontDropDown").val());
}