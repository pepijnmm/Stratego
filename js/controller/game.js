var GameController = function() {
	var gameView;
	var players = [];

	function constructor(){
		gameView = new GameView();
		players[0] = new PlayerModel("red");
		players[1] = new PlayerModel("blue");
	}

	GameController.prototype.initiateGame = function(){
		BoardController.prototype.initiateSquares();
		PieceController.prototype.initiatePieces();
		PieceController.prototype.loadImages();
	}

  	constructor();
};
