var GameController = function() {
	var gameView;
	var gameModel;

	function constructor(){
		gameView = new GameView();
		gameModel = new GameModel();
	}
	GameController.prototype.start = function(id){
		gameModel.setGame(id);
		gameView.show();
	}
	GameController.prototype.remove = function(id, ifdone){
		gameModel.removeGame(id, ifdone);
	}
	GameController.prototype.newGame = function(ai, ifdone){
		gameModel.newGame(ai, ifdone);
	}
	GameController.prototype.removeAll = function(ifdone){
		gameModel.removeGame("", ifdone);
	}
	GameController.prototype.setReturnbutton = function(returnfunction){
		gameView.setReturnButton(returnfunction);
	}

  	constructor();
};
