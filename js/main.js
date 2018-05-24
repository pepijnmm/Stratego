var Main = function() {
	//variables
  var lobby;
  var input;
  var click;
  var apiKey;
	var database;
  var userName;
  var userId;
  var error;
    function constructor(){
    input = document.querySelector("#loginInput");
    click = document.querySelector("#loginClick");
    error = document.querySelector("#errorLogin");
    }

	function login(){
     apiKey= input.value;
     database = new Database(apiKey);
     setTimeout(start(database.userinfo(false)), 0);
	}

	Main.prototype.main = function() {
	    //create html
	    input.addEventListener("keyup", function(event) {
	      //on enter start login
	      if (event.keyCode === 13) {
	        login();
	      }
	    });
	    click.addEventListener("click", function(event) {
	        login();
	    });
	}

  function start(data){
    console.log(data);
    if(data.hasOwnProperty("id")){
      userId = data.id;
      userName = data.name;
      lobby = new Lobby(apiKey);
      document.querySelector("#login").classList.add("hide");
      document.querySelector("#lobby").classList.remove("hide");
    }
    else if(data.hasOwnProperty("message") && data.message.includes("De API key")){
        error.innerHTML = "Api key is niet correct. vraag er een aan bij: <a href='https://strategoavans.herokuapp.com/api_key' target='_blank'>hier</a>";
    }
    else{
      
      error.innerHTML = "Er ging iets fout."
    }
  }
  constructor();
}
document.addEventListener("DOMContentLoaded", function() {
  main = new Main();
  main.main();
});
