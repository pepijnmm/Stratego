var GameController = function() {
	var gameView;

	function constructor(){
		gameView = new GameView();
	}

	GameController.prototype.initiateGame = function(){
		BoardController.prototype.initiateSquares();

		//check state


		//waiting_for_pieces


		//waiting_for_opponent_pieces


		//my_turn


		//opponent_turn


		PieceController.prototype.initiatePieces();
		PieceController.prototype.loadImages();
	}

	function waitingForPieces(){

	}

	GameController.prototype.movePiece = function(prevSqr, nextSqr){
		//check state
		//waiting_for_pieces

		
		//my_turn


	}

  	constructor();
};
