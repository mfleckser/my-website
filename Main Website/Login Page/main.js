var un = document.getElementById("username");
un.addEventListener("focus", function() {
	un.classList.add("focus");
});
un.addEventListener("blur", function() {
	if(un.value == "") {
		un.classList.remove("focus");
	}//end if
});

var pw = document.getElementById("password");
pw.addEventListener("focus", function() {
	pw.classList.add("focus");
});
pw.addEventListener("blur", function() {
	if(pw.value == "") {
		pw.classList.remove("focus");
	}//end if
});

function validate() {
	if(localStorage.getItem(un.value)) {
		if(JSON.parse(localStorage.getItem(un.value))[2] == pw.value) {
			localStorage.setItem("current",localStorage.getItem(un.value));
			return true;
		}//end if
	}//end if
	alert("Username or password is incorrect.");
	return false;
}//end validate

window.onload = function() {
	localStorage.removeItem("current");
}//end onload