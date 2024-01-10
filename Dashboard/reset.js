var success_popup = document.getElementById("success");
var s_close = document.getElementById("s_button");
let kata = document.getElementById("kata");

var timer;
function rst_to_osk() {
	localStorage.removeItem("TO_OSK");
	success_popup.style.display = "block";
	kata.innerHTML = "OSK";
	document.body.style.backgroundColor = "gainsboro";
	timer = setTimeout(popUp, 3000);
}

function rst_to_osp() {
	localStorage.removeItem("TO_OSP");
	success_popup.style.display = "block";
	kata.innerHTML = "OSP";
	document.body.style.backgroundColor = "gainsboro";
	timer = setTimeout(popUp, 3000);
}


s_close.onclick = function(){
	clearTimeout(timer);
	success_popup.style.display = "none";
	document.body.style.backgroundColor = "white";
	window.location = window.location.href;
}

function popUp () {
	//success_popup.style.display = "none";
	success_popup.style.display = "none";
	document.body.style.backgroundColor = "white";
	window.location = window.location.href;
}