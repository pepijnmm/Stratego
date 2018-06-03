var LoginView = function(_returnfunction) {
	var input;
	var click;
	var error;
	var returnfunctionclick;
	var connect;
	var notconnect;
	var login;

	function constructor(_returnfunction){
		returnfunctionclick = _returnfunction;
		login = document.querySelector("#login");
		input = login.querySelector("#loginInput");
		click = login.querySelector("#loginClick");
		error = login.querySelector("#errorLogin");
		connect = document.querySelector("#connected");
		notconnect = document.querySelector("#notconnected");
		input.addEventListener("keyup", function(event) {
			//on enter start login
			if (event.keyCode === 13) {
				returnfunctionclick(input.value);
			}
		});
		click.addEventListener("click", function(event) {
				returnfunctionclick(input.value);
		});
	}
	LoginView.prototype.hide = function(){
		login.classList.add("hide");
		notconnected.classList.remove("hide");
	}
	LoginView.prototype.error = function(){
		error.innerHTML = "Er ging iets fout."
	}
	LoginView.prototype.connected = function(){
		connect.classList.remove("hide");
		notconnect.classList.add("hide");
	}


  constructor(_returnfunction);
};
