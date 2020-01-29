var inpObj = document.getElementById("id1");
var error100 = "Please enter the value grater than 100";
var error300 = "Please enter the value less than 300";

function myFunction() {
	console.log(inpObj.value);
	if(inpObj.value<100 || inpObj.value>300){
		console.log("Error");
		document.getElementById("demo").innerHTML = "Please enter valid value";
		checkDynamicCondition();
	}else {
		console.log("Success");
		document.getElementById("demo").innerHTML = "Success";
	}
}

function checkDynamicCondition() {
	//console.log("checkDynamicCondition val : "+inpObj.value);
	if(inpObj.value > 300) {
		document.getElementById("demo").innerHTML = ""+error300;
	} else if(inpObj.value < 100){
		document.getElementById("demo").innerHTML = ""+error100;
	}
}