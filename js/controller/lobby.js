var LobbyController = function() {
	//variables
  var lobbyView;
	var lobbyModel;
  var game;
	//constructor
	function constructor(){
    game = new GameController();
	game.setReturnbutton(backToLobby);
    lobbyModel = new LobbyModel();
    lobbyView = new LobbyView();
    lobbyView.show();
    lobbyView.setReturnButtonClick(onButtonClick);
    lobbyModel.setReturnGameList(lobbyView.setGameList);
    lobbyModel.reloadGameList();
	account = new AccountModel();
	account.getusername(lobbyView.setPlayerName);
	}
	var backToLobby = function(){
		game = new GameController();
		lobbyView.show();
		lobbyModel.setSelect(null);
		lobbyModel.reloadGameList();
	}
  var onButtonClick = function (button, data=""){
    switch(button){
      case "start":
        lobbyView.hide();
        game.start(lobbyModel.getSelect());
      break;
      case "remove":
        game.remove(lobbyModel.getSelect(), lobbyModel.reloadGameList);
		lobbyModel.setSelect(null);
      break;
      case "newgame":
        game.newGame(data, lobbyModel.reloadGameList);
		lobbyModel.setSelect(null);
      break;
      case "removeAll":
        game.removeAll(lobbyModel.reloadGameList);
		lobbyModel.setSelect(null);
      break;
      case "select":
        lobbyModel.setSelect(data);
      break;
    }
  }


  constructor();
};
