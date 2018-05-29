var LobbyController = function() {
	//variables
  var lobbyView;
	var lobbyModel;
  var game;
	//constructor
	function constructor(){
		lobbyView = new LobbyView(onButtonClick);
		lobbyModel = new LobbyModel();
		lobbyView.show();
		lobbyView.setGameList(lobbyModel.getGameList(), onGameSelectClick);
    game = new GameController();
	}
  var onGameSelectClick = function(id){
    lobbyModel.setSelect(id);
  }
  var onButtonClick = function (button){
    switch(button){
      case "start":
        game.start(lobbyModel.getSelect()););
      break;
      case "remove":
        game.remove(lobbyModel.getSelect());
      break;
      case "new":
        game.new(lobbyModel.getSelect());
      break;
      case "removeAll":
        game.removeAll();
      break;
    }
  }


  constructor();
};
