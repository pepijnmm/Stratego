var BoardController = function() {
	var boardView;
	var board;

	var mainRowSqr;
	var secondaryRowSqr;

	var currentPiece;
	var dragEnabled;
	var dragActive;

	function constructor(){
		boardView = new BoardView();
		board = new BoardModel();
		initiateBoard();
	}

	BoardController.prototype.onDrag = function(e) {
		if(dragActive){
			x = e.pageX - canvas.offsetLeft;
			y = e.pageY - canvas.offsetTop;
		}
	}

	BoardController.prototype.onDown = function(e) {
		// if(dragEnabled){
			var xBoard = e.pageX - GameView.prototype.canvas.offsetLeft + 75 / 2;
			var yBoard = e.pageY - GameView.prototype.canvas.offsetTop + 75 / 2;
			var currentSqr = board.getSquare(xBoard, yBoard);
			console.log(currentSqr);
			// var halfWidth = sqrWidth / 2;
			// var halfHeight = sqrHeight / 2;
			// if (e.pageX < x + halfWidth + canvas.offsetLeft && e.pageX > x - halfWidth +
			// canvas.offsetLeft && e.pageY < y + halfHeight + canvas.offsetTop &&
			// e.pageY > y - halfHeight + canvas.offsetTop){
			//  	x = e.pageX - canvas.offsetLeft;
			//  	y = e.pageY - canvas.offsetTop;
			//  	dragActive = true;
			//  	canvas.onmousemove = onDrag;
			// }
		// }
	}

	BoardController.prototype.onUp = function(e) {
		dragActive = false;
		GameView.prototype.canvas.onmousemove = null;
	}

	function initiateBoard(){
		var index = 0;
		var newSquare;
		for (var y = 0; y < board.height; y++)
		{
			for (var x = 0; x < board.width; x++)
			{
				index++;
				switch(index){
				 	case 43: case 44: case 47: case 48: case 53: case 54: case 57: case 58:
				 		newSquare = new SquareModel(x, y, false);
				 		break;
				 	default:
				 		newSquare = new SquareModel(x, y, true);
						GameView.prototype.drawSquare((newSquare.xPos * 75), (newSquare.yPos * 75));
				 		break;
				}
				addSquare(newSquare);
			}
		}
	}

	function addSquare(square){
		var firstSqr = board.firstSqr;
		var lastSqr = board.lastSqr;

		if(firstSqr != null){
			if (square.xPos > 0 && square.xPos < board.width - 1){
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
				for (var i = 0; i < board.width; i++)
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
			firstSqr = square;
		}

		// console.log("main");
		// console.log(this.mainRowSqr);
		// console.log("second");
		// console.log(this.secondaryRowSqr);


		board.firstSqr = firstSqr;
		board.lastSqr = square;
	}

  constructor();
};
