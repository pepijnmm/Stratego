var LobbyController = function() {
	//variables
  var lobbyView;
	var lobbyModel;
	//constructor
	function constructor(){
		lobbyView = new LobbyView();
		lobbyModel = new lobbyModel();
		lobby.show();
		lobby.setGames(main)
	}



  constructor();
};
