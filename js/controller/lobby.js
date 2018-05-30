var LobbyController = function() {
	//variables
  var lobbyView;
	var lobbyModel;
  var game;
	//constructor
	function constructor(){
    game = new GameController();
    lobbyModel = new LobbyModel();
    lobbyView = new LobbyView();
    lobbyView.show();
    lobbyView.setReturnButtonClick(onButtonClick);
    lobbyModel.setReturnGameList(lobbyView.setGameList);
    lobbyModel.reloadGameList();
	}
  var onButtonClick = function (button, data=""){
    switch(button){
      case "start":
        lobbyView.hide();
        game.start(lobbyModel.getSelect());
      break;
      case "remove":
        game.remove(lobbyModel.getSelect());
        lobbyModel.setSelect(null);
        lobbyModel.reloadGameList();
      break;
      case "new":
        game.new(data);
        lobbyModel.reloadGameList();
      break;
      case "removeAll":
        game.removeAll();
        lobbyModel.reloadGameList();
      break;
      case "select":
        lobbyModel.setSelect(data);
      break;
    }
  }


  constructor();
};
