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

	function constructor(){
		gameboard = document.querySelector(".gameboard");

		canvas = document.createElement("canvas");
		canvas.id = "gameCanvas"
		canvas.width = cWidth;
		canvas.height = cHeight;
		canvas.onmousedown = onMouseDown;
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
			if(squares[i].available){
				height = squares[i].height;
				width = squares[i].width;
				y = squares[i].yPos * height;
				x = squares[i].xPos * width;
				drawSquare(x, y, width, height);
			}
		}
	}

	function drawPieces(pieces){
		for (var i = 0; i < pieces.length; i++) {
			height = pieces[i].height;
			width = pieces[i].width;
			y = pieces[i].yPos * height;
			x = pieces[i].xPos * width;
			img = "test"; //THIS NEES TO BE CHANGED
			drawPiece(img, x, y, width, height);
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
		ctx.rect(x, y, width, height); //THIS NEES TO BE CHANGED
		// ctx.drawImage(img, x, y, width, height);
		ctx.closePath();
		ctx.fill();
	}

	function onMouseDrag(e) {
		if(dragActive){
			var currentPiece = BoardController.prototype.currentPiece;
			currentPiece.xPos = canvasToBoardX(pageToCanvasX(e.pageX));
			currentPiece.yPos = canvasToBoardY(pageToCanvasY(e.pageY));
			BoardController.prototype.refreshBoard();
			console.log(currentPiece);
		}
	}

	function onMouseDown(e) {
		// if(dragActive){
			var xCanvas = pageToCanvasX(e.pageX);
			var yCanvas = pageToCanvasY(e.pageY);
			BoardController.prototype.getPieceByCanvasXY(xCanvas, yCanvas);
			var currentPiece = BoardController.prototype.currentPiece;
			if(currentPiece != undefined){
			  	dragActive = true;
			  	canvas.onmousemove = onMouseDrag;
			}
			// var halfWidth = sqrWidth / 2;
			// var halfHeight = sqrHeight / 2;
			// if (e.pageX < x + halfWidth + canvas.offsetLeft && e.pageX > x - halfWidth +
			// canvas.offsetLeft && e.pageY < y + halfHeight + canvas.offsetTop &&
			// e.pageY > y - halfHeight + canvas.offsetTop){
			// }
		// }
	}

	function onMouseUp(e) {
		if(dragActive){
			dragActive = false;
			var xCanvas = pageToCanvasX(e.pageX);
			var yCanvas = pageToCanvasY(e.pageY);
			BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
			var prevSquare = BoardController.prototype.prevSquare;
			var currentSquare = BoardController.prototype.currentSquare;
			var currentPiece = BoardController.prototype.currentPiece;
			if(currentSquare.available){
				currentPiece.xPos = currentSquare.xPos;
				currentPiece.yPos = currentSquare.yPos;
				currentSquare.piece = currentPiece;
			}
			else{
				currentPiece.xPos = prevSquare.xPos;
				currentPiece.yPos = prevSquare.yPos;
			}
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
