var Main = function() {
	//variables
  var lobby;
  var account;
  var login;
	Main.prototype.database;
  var userName;
  var userId;
    function constructor(){
      login = new LoginView(login);
    }

	var login = function(_apiKey){
     Main.prototype.database = new Database(_apiKey);
     account = new AccountModel(_apiKey);
     setTimeout(start(account.login(start)), 0);
	}

	Main.prototype.main = function() {
      login.returnfunctionclick(login);
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
