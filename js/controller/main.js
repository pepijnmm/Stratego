var Main = function() {
	//variables
  var lobby;
  var account;
  var login;
	Main.prototype.database;
  var userName;
  var userId;


    function constructor(){
      login = new LoginView(logindone);
    }

	var logindone = function(_apiKey){
     Main.prototype.database = new Database(_apiKey);
     Main.prototype.database.on("connect", function(name,data){login.connected();});
     account = new AccountModel(_apiKey);
     setTimeout(account.login(start), 0);
	}

  var start = function(correct){
    if(correct){
      login.hide();
      lobby = new LobbyController();
    }
    else{
      login.error();
    }
  }
  constructor();
}
document.addEventListener("DOMContentLoaded", function() {
  main = new Main();
});
