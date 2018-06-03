var Main = function() {
	//variables
  var lobby;
  var account;
  var login;
  Main.prototype.database;


    function constructor(){
      login = new LoginView(logindone);
	  Main.prototype.database = new Database();
    }

	var logindone = function(_apiKey){
	 if(correct = Main.prototype.database.connect(_apiKey)==true){
		 start(correct);
	 }
	 else{
		login.error();
	 }
	}

  function start(correct){
    if(correct && lobby == null){
		Main.prototype.database.on("connect", function(name,data){login.connected();});
      login.hide();
      lobby = new LobbyController();
    }
    else{
      
    }
  }
  constructor();
}
document.addEventListener("DOMContentLoaded", function() {
  main = new Main();
});
