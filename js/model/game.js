var GameModel = function() {
	var gameId;
	function constructor(){
	}
	GameModel.prototype.setGame = function(id){
		if(gameId == null)gameId = id;
	}
	GameModel.prototype.removeGame = function(id="", ifdone){
		main.database.delete(true, 'api/games'+((id.length > 0)?'/':'')+id, null, ifdone);
	}
	GameModel.prototype.newGame = function(ai, ifdone){
		main.database.post(true, 'api/games',{'ai':ai}, ifdone);
		}

	GameModel.prototype.getGameInfo = function(id = ""){
		let data = 	main.database.get(true, 'api/games'+((id.length == 0)?'/':'')+id, getinfo);
	}
	var getinfo = function(data){
		if(data.length > 0){
		}
	}

  constructor();
};
