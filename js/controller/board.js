var BoardController = function() {
	var boardView;
	var board;

	BoardController.prototype.squares = [];
	BoardController.prototype.highlights = [];
	BoardController.prototype.pieces = [];

	function constructor(){
		boardView = new BoardView();
		board = new BoardModel();
	}

	BoardController.prototype.initiateSquares = function(){
		var index = 0;
		var newSquare;
		for (var y = 0; y < 10; y++)
		{
			for (var x = 0; x < 10; x++)
			{
				switch(index){
				 	case 42: case 43: case 46: case 47: case 52: case 53: case 56: case 57:
				 		newSquare = new SquareModel(x, y, false);
				 		break;
				 	default:
				 		newSquare = new SquareModel(x, y, true);
				 		break;
				}
				BoardModel.prototype.addSquare(newSquare);
				BoardController.prototype.squares.push(newSquare);
				index++;
			}
		}
	}

	BoardController.prototype.refreshBoard = function(){
		GameView.prototype.drawBoard(this);
	}

	BoardController.prototype.setHighlights = function(selectedSqr){
		console.log(selectedSqr.piece);
		for (var i = 0; i < 4; i++) {
			var bool = false;
			var sqr = selectedSqr;
			while(!bool){
				switch(i){
				 	case 0:
				 		sqr = sqr.topSqr;
				 		break;
				 	case 1:
				 		sqr = sqr.bottomSqr;
				 		break;
				 	case 2:
				 		sqr = sqr.leftSqr;
				 		break;
				 	case 3:
				 		sqr = sqr.rightSqr;
				 		break;
				}
				if(sqr != undefined && sqr.available){
					sqr.highlighted = true;
					this.highlights.push(sqr);
					if(!(selectedSqr.piece.rank == "9")){
						bool = true;
					}
				}
				else {
					bool = true;
				}
			}
		}
	}

	BoardController.prototype.unsetHighlights = function(){
		for (var i = 0; i < this.highlights.length; i++) {
			this.highlights[i].highlighted = false;
		}
		this.highlights = [];
	}

	BoardController.prototype.getSquareByCanvasXY = function(x, y){
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
		return newSquare;
	}

  constructor();
};
