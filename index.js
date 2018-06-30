var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
input1.addEventListener("input",changebackground);
input2.addEventListener("input",changebackground);

function changebackground() {
	//body[0].style.background = "red";
	body.style.background="linear-gradient(to right," 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";
	/*body.style.background = 
	"linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";*/
}