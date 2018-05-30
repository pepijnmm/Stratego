var GameModel = function() {
	var gameId;
	function constructor(){
	}
	GameModel.prototype.setGame = function(id){
		if(gameId == null)gameId = id;
	}
	GameModel.prototype.removeGame = function(id=""){
		main.database.get(true, 'api/games'+((id.length > 0)?'/':'')+id);
	}
	GameModel.prototype.newGame = function(ai){
		main.database.post(true, 'api/games',{"ai":ai});
		}

	GameModel.prototype.getGameInfo = function(id = ""){
		let data = 	main.database.get(true, 'api/games'+((id.length == 0)?'/':'')+id);
		if(data.length > 0){
		}
	}

  constructor();
};
