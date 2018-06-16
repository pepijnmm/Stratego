var GameView = function() {
	var gameboard;
	var canvas;
	var ctx;
	var cWidth = 750;
	var cHeight = 750;
	var sqrWidth = cWidth / 10;
	var sqrHeight = cHeight / 10;
	var dragActive;
	var dragEnabled;

	var selectedPiece;
	var nextSqr;
	var prevSqr;

	function constructor(){
		gameboard = document.querySelector(".gameboard");

		canvas = document.createElement("canvas");
		canvas.id = "gameCanvas"
		canvas.width = cWidth;
		canvas.height = cHeight;
		canvas.onmousedown = onMouseDown;
		canvas.onmousemove = onMouseDrag;
		canvas.onmouseup = onMouseUp;

		ctx = canvas.getContext("2d");

		gameboard.appendChild(canvas);
	}

	GameView.prototype.drawBoard = function(board){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawSquares(board.squares);
		drawPieces(board.pieces);
	}

	function drawSquares(squares){
		for (var i = 0; i < squares.length; i++) {
			switch(i){
			 	case 42: case 43: case 46: case 47: case 52: case 53: case 56: case 57:
			 		break;
			 	default:
					height = squares[i].height;
					width = squares[i].width;
					y = squares[i].yPos * height;
					x = squares[i].xPos * width;
					drawSquare(x, y, width, height);
					if(squares[i].highlighted){
						drawHighlight(x + (width / 2), y + (height / 2));
					}
			 		break;
			}
		}
	}

	function drawPieces(pieces){
		if(selectedPiece != undefined){
			pieces.push(selectedPiece);
		}
		for (var i = 0; i < pieces.length; i++) {
			height = pieces[i].height;
			width = pieces[i].width;
			y = pieces[i].yPos * height;
			x = pieces[i].xPos * width;
			img = pieces[i].img;
			drawPiece(img, x, y, width, height);
		}
		if(selectedPiece != undefined){
			pieces.pop();
		}
	}

	function drawSquare(x, y, width, height){
		ctx.beginPath();
		ctx.rect(x, y, width, height);
		ctx.closePath();
		ctx.stroke();
	}

	function drawPiece(img, x, y, width, height){
		ctx.beginPath();
		ctx.drawImage(img, x + 5, y + 5, width - 10, height - 10);
		ctx.closePath();
	}

	function drawHighlight(x, y){
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.closePath();
	}

	function onMouseDown(e) {
		if(!dragActive){
			var xCanvas = pageToCanvasX(e.pageX);
			var yCanvas = pageToCanvasY(e.pageY);
			nextSqr = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
			selectedPiece = nextSqr.piece;
			if(selectedPiece != undefined && selectedPiece.available){
			  	dragActive = true;

			  	// GameController.prototype.tryMovePiece(selectedPiece);
				BoardController.prototype.setHighlights(nextSqr);

				BoardController.prototype.refreshBoard();
			}
		}
	}

	function onMouseDrag(e) {
		if(dragActive){
			selectedPiece.xPos = canvasToBoardX(pageToCanvasX(e.pageX));
			selectedPiece.yPos = canvasToBoardY(pageToCanvasY(e.pageY));

			BoardController.prototype.refreshBoard();
		}
	}

	function onMouseUp(e) {
		if(dragActive){
			dragActive = false;
			var xCanvas = pageToCanvasX(e.pageX);
			var yCanvas = pageToCanvasY(e.pageY);
			prevSqr = nextSqr;
			nextSqr = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);

			GameController.prototype.movePiece(prevSqr, nextSqr);

			BoardController.prototype.unsetHighlights();
			BoardController.prototype.refreshBoard();
		}
	}

	function pageToCanvasX(x){
		x = x - canvas.offsetLeft + 75 / 2;
		return x
	}

	function pageToCanvasY(y){
		y = y - canvas.offsetTop + 75 / 2;
		return y;
	}

	function canvasToBoardX(x){
		x = (x / 75) - 1;
		x = x.toFixed(4);
		return x
	}

	function canvasToBoardY(y){
		y = (y / 75) - 1;
		y = y.toFixed(4);
		return y;
	}

  constructor();
};
