var BoardController = function() {
	var boardView;
	var board;

	BoardController.prototype.prevSquare;
	BoardController.prototype.currentSquare;
	BoardController.prototype.currentPiece;

	function constructor(){
		boardView = new BoardView();
		board = new BoardModel();
		BoardController.prototype.refreshBoard();
	}

	BoardController.prototype.refreshBoard = function(){
		GameView.prototype.drawBoard(board);
	}

	BoardController.prototype.getSquareByCanvasXY = function(x, y){
		this.prevSquare = this.currentSquare;

		x = Math.round((x / 75), 0) - 1;
		y = Math.round((y / 75), 0) - 1;

		var xFound = false;
		var yFound = false;
		var newSquare = board.firstSqr;
		while(!xFound || !yFound){
			if(!xFound && newSquare.xPos != x) {
				newSquare = newSquare.rightSqr;
			}
			else{
				xFound = true;
			}

			if(!yFound && newSquare.yPos != y) {
				newSquare = newSquare.bottomSqr;
			}
			else{
				yFound = true;
			}
		}
		this.currentSquare = newSquare;
	}

	BoardController.prototype.getPieceByCanvasXY = function(x, y){
		this.getSquareByCanvasXY(x, y);
		this.currentPiece = this.currentSquare.piece;
	}

  constructor();
};
