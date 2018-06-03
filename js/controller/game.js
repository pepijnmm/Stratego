var GameController = function() {
	var gameView;
	var gameModel;
	var players = [];

	function constructor(){
		gameView = new GameView();
		gameModel = new GameModel();
		players[0] = new PlayerModel("red");
		players[1] = new PlayerModel("blue");
	}
	GameController.prototype.start = function(id, donefunction){
		gameModel = new GameModel();
		gameModel.setGame(id,donefunction);
		gameView.show();

	GameController.prototype.initiateGame = function(){
		BoardController.prototype.initiateSquares();
		PieceController.prototype.initiatePieces();
		PieceController.prototype.loadImages();
	}
	GameController.prototype.remove = function(id, donefunction){
		gameModel.setGame(id, (function(){gameModel.delete((function(data=null){
			donefunction();
		}))}));
	}
	GameController.prototype.newGame = function(ai, donefunction){
		gameModel.newGame(ai, (function(data=null){donefunction();}));
	}
	GameController.prototype.removeAll = function(donefunction){
		gameModel.deleteAll(donefunction);
	}
	GameController.prototype.setReturnbutton = function(returnfunction){
		gameView.setReturnButton(returnfunction);
	}

  	constructor();
};
