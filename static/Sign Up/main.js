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
var confirm = document.getElementById("confirm");
confirm.addEventListener("focus", function() {
	confirm.classList.add("focus");
});
confirm.addEventListener("blur", function() {
	if(confirm.value == "") {
		confirm.classList.remove("focus");
	}//end if
});
var Name = document.getElementById("name");
Name.addEventListener("focus", function() {
	Name.classList.add("focus");
});
Name.addEventListener("blur", function() {
	if(Name.value == "") {
		Name.classList.remove("focus");
	}//end if
});

function validate() {
	if(pw.value == confirm.value) {
		var info = [Name.value,un.value,pw.value,9999999999999,9999999999999,-1,-1];
		localStorage.setItem(un.value,(JSON.stringify(info)));
		return true;
	} else {
		alert("Passwords do not match.");
		return false;
	}//end if else
}//end validate