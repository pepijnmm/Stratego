var GameModel = function() {
	var gameId;
	function constructor(){
	}
	GameModel.prototype.setGame = function(id){
		if(gameId.length > 0)gameId = id;
	}
	GameModel.prototype.removeGame = function(id=""){
		main.database.get(true, 'api/games'+((id.lenght > 0)?'/':'')+id);
	}
	GameModel.prototype.newGame = function(ai){
		main.database.post(true, 'api/games',{"ai":ai});
		}

	}
	GameModel.prototype.getGameInfo = function(id = "", async = true){
		return get(async, 'api/games'+((id.lenght == 0)?'/':'')+id);
	}

  constructor();
};
