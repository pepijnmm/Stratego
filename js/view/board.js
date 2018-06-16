var BoardView = function() {
    var board;
    var canvas;
    var ctx;
    // var cWidth;
    // var cHeight;
    // var dragActive;
    // var dragEnabled;
    // var selectedPiece;
    // var selectedSquare;
    // var previousSquare;

    function constructor() {
        board = document.querySelector(".gameboard");
        canvas = document.createElement("canvas");
        canvas.id = "gameCanvas"
        canvas.width = 750;
        canvas.height = 750;
        canvas.onmousedown = onMouseDown;
        canvas.onmousemove = onMouseDrag;
        canvas.onmouseup = onMouseUp;
        ctx = canvas.getContext("2d");
    }

    BoardView.prototype.drawBoard = function(squares, pieces) {
        board.appendChild(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSquares(squares);
        drawPieces(pieces);
    }

    function drawSquares(squares) {
        for (let i = 0; i < squares.length; i++) {
	        let height = 75;
	        let width = 75;
	        y = squares[i].yPos * height;
	        x = squares[i].xPos * width;
	        drawSquare(x, y, width, height);
	        if (squares[i].highlighted) {
	            drawHighlight(x + (width / 2), y + (height / 2));
	        }
        }
    }
		function drawSquare(x, y, width, height){
			ctx.beginPath();
			ctx.rect(x, y, width, height);
			ctx.closePath();
			ctx.stroke();
		}
		function drawHighlight(x, y){
			ctx.beginPath();
			ctx.arc(x, y, 10, 0, 2 * Math.PI);
			ctx.fillStyle = "yellow";
			ctx.fill();
			ctx.closePath();
		}
		function drawPieces(pieces){
			if(selectedPiece != undefined){
				pieces.push(selectedPiece);
			}
			for (let i = 0; i < pieces.length; i++) {
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
		function onMouseDown(e) {
			if(!dragActive){
				let xCanvas = pageToCanvasX(e.pageX);
				let yCanvas = pageToCanvasY(e.pageY);
				selectedSquare = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
				selectedPiece = selectedSquare.piece;
				if(selectedPiece != undefined && selectedPiece.available){
				  	dragActive = true;

					BoardController.prototype.setHighlights(selectedSquare);
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
				let xCanvas = pageToCanvasX(e.pageX);
				let yCanvas = pageToCanvasY(e.pageY);
				previousSquare = selectedSquare;
				selectedSquare = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
				previousSquare.tryMovePiece(selectedSquare.acceptPiece(selectedPiece));

				BoardController.prototype.unsetHighlights();
				BoardController.prototype.refreshBoard();
			}
		}
    //

    //

    //
    // function drawPiece(img, x, y, width, height){
    // 	ctx.beginPath();
    // 	ctx.drawImage(img, x + 5, y + 5, width - 10, height - 10);
    // 	ctx.closePath();
    // }
    //
    //
    //
    function pageToCanvasX(x){
    	let x = x - canvas.offsetLeft + 75 / 2;
    	return x
    }

    function pageToCanvasY(y){
    	let y = y - canvas.offsetTop + 75 / 2;
    	return y;
    }

    function canvasToBoardX(x){
    	let x = (x / 75) - 1;
    	x = x.toFixed(4);
    	return x
    }

    function canvasToBoardY(y){
    	let y = (y / 75) - 1;
    	y = y.toFixed(4);
    	return y;
    }

    constructor();
};
