var BoardModel = function() {
	var height = 10;
	var width = 10;

	BoardModel.prototype.firstSqr;
	var lastSqr;
	var mainRowSqr;
	var secondaryRowSqr;

	BoardModel.prototype.squares = [];
	//DELETE THIS
	BoardModel.prototype.pieces = [];
	//DELETE THIS

	function constructor(){
		initiateSquares();
		//DELETE THIS
		var newPiece;
		newPiece = new PieceModel(0, 0, true);
		BoardModel.prototype.pieces.push(newPiece);
		BoardModel.prototype.firstSqr.piece = newPiece;
		//DELETE THIS

		// GameView.prototype.drawSquares();
	}

	function initiateSquares(){
		var index = 0;
		var newSquare;
		for (var y = 0; y < height; y++)
		{
			for (var x = 0; x < width; x++)
			{
				index++;
				switch(index){
				 	case 43: case 44: case 47: case 48: case 53: case 54: case 57: case 58:
				 		newSquare = new SquareModel(x, y, false);
				 		break;
				 	default:
				 		newSquare = new SquareModel(x, y, true);
				 		break;
				}
				addSquare(newSquare);
				BoardModel.prototype.squares.push(newSquare);
			}
		}
	}

	function addSquare(square){
		if(BoardModel.prototype.firstSqr != null){
			if (square.xPos > 0 && square.xPos < width - 1){
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
			}
			else if (square.xPos == 0){
				this.mainRowSqr = square;
			}
			else if (square.yPos > 0){
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
				var temp = this.mainRowSqr;
				for (var i = 0; i < width; i++)
				{
					this.secondaryRowSqr.bottomSqr = this.mainRowSqr;
					this.mainRowSqr.topSqr = this.secondaryRowSqr;
					this.secondaryRowSqr = this.secondaryRowSqr.rightSqr;
					this.mainRowSqr = this.mainRowSqr.rightSqr;
				}
				this.secondaryRowSqr = temp;
			}
			else{
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
			}
		}
		else{
			this.secondaryRowSqr = square;
			BoardModel.prototype.firstSqr = square;
		}
		lastSqr = square;
	}

	constructor();
};
