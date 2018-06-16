var LoginView = function(_returnfunction) {
	var input;
	var click;
	var error;
	var returnfunctionclick

	function constructor(_returnfunction){
		returnfunctionclick = _returnfunction;
		input = document.querySelector("#loginInput");
    click = document.querySelector("#loginClick");
    error = document.querySelector("#errorLogin");
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
		document.querySelector("#login").classList.add("hide");
	}
	LoginView.prototype.error = function(){
		error.innerHTML = "Er ging iets fout."
	}


  constructor(_returnfunction);
};
