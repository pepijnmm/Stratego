var GameController = function() {
	var gameView;
	var gameModel;

	function constructor(){
		gameView = new GameView();
		gameModel = new GameModel();
	}
	GameController.prototype.start = function(id){
		gameModel.setGame(id);
	}
	GameController.prototype.remove = function(id){
		gameModel.removeGame(id);
	}
	GameController.prototype.new = function(ai){
		gameModel.newGame(ai);
	}
	GameController.prototype.removeAll = function(){
		gameModel.removeGame();
	}

  	constructor();
};
