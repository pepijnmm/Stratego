var GameController = function() {
	var gameView;
	var game;

	function constructor(){
		gameView = new GameView();
	}

	GameController.prototype.initiateTurn = function(){
		GameView.prototype.canvas.onmousedown = BoardController.prototype.onDown;
		GameView.prototype.canvas.onmouseup = BoardController.prototype.onUp;
	}

  	constructor();
};
