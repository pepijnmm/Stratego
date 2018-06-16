function BoardView(_returnclicks) {
    var board;
    var canvas;
    var ctx;
    var returnclicks;
    // var cWidth;
    // var cHeight;
    // var dragActive;
    // var dragEnabled;
    // var selectedPiece;
    // var selectedSquare;
    // var previousSquare;

    function constructor(_returnclicks) {
        board = document.querySelector(".gameboard");
        canvas = document.createElement("canvas");
        canvas.id = "gameCanvas"
        canvas.width = 750;
        canvas.height = 750;
        canvas.onmousedown = onMouseDown;
        canvas.onmousemove = onMouseDrag;
        canvas.onmouseup = onMouseUp;
        ctx = canvas.getContext("2d");
        returnclicks = _returnclicks;
    }

    this.drawBoard = function(info) {
      if(!(board.innerHTML.replace(/\s/g,"").length > 0)){board.appendChild(canvas);}
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < info.length; i++) {
	        let height = 75;
	        let width = 75;
	        y = info[i][1] * height;
	        x = info[i][0] * width;
	        drawSquare(x, y, width, height);
	        // if (squares[i].highlighted) {
	        //     drawHighlight(x + (width / 2), y + (height / 2));
	        // }
          if(info[i].length > 2){
    				height = 75;
    				width = 75;
            if(info[i].length == 4){
      				y = info[i][3][1] * height;
      				x = info[i][3][1] * width;
            }
            else{
              y = info[i][1] * height;
      				x = info[i][0] * width;
            }
    				img = info[i][2];
    				drawPiece(img, x, y, width, height);
          }
        }
        // drawSquares(squares);
        // drawPieces(pieces);
        // for (let i = 0; i < pieces.length; i++) {
        //   if(pieces[i].length ==3
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
  //
	// function drawPieces(pieces){
	// 	if(selectedPiece != undefined){
	// 		pieces.push(selectedPiece);
	// 	}
	// 	for (let i = 0; i < pieces.length; i++) {
	// 		height = pieces[i].height;
	// 		width = pieces[i].width;
	// 		y = pieces[i].yPos * height;
	// 		x = pieces[i].xPos * width;
	// 		img = "../image/"+pieces[i].img+".png";
	// 		drawPiece(img, x, y, width, height);
  //   }
	// 	}
		function onMouseDown(e) {
      returnclicks('down',e.pageX, e.pageY,[canvas.offsetTop, canvas.offsetLeft]);
			// if(!dragActive){
			// 	let xCanvas = pageToCanvasX(e.pageX);
			// 	let yCanvas = pageToCanvasY(e.pageY);
			// 	selectedSquare = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
			// 	selectedPiece = selectedSquare.piece;
			// 	if(selectedPiece != undefined && selectedPiece.available){
			// 	  	dragActive = true;
      //
			// 		BoardController.prototype.setHighlights(selectedSquare);
			// 		BoardController.prototype.refreshBoard();
			// 	}
			// }
		}

		function onMouseDrag(e) {
      returnclicks('move',e.pageX, e.pageY,[canvas.offsetTop, canvas.offsetLeft]);
			// if(dragActive){
			// 	selectedPiece.xPos = canvasToBoardX(pageToCanvasX(e.pageX));
			// 	selectedPiece.yPos = canvasToBoardY(pageToCanvasY(e.pageY));
      //
			// 	BoardController.prototype.refreshBoard();
			// }
		}

		function onMouseUp(e) {
      returnclicks('up',e.pageX, e.pageY,[canvas.offsetTop, canvas.offsetLeft]);
			// if(dragActive){
			// 	dragActive = false;
			// 	let xCanvas = pageToCanvasX(e.pageX);
			// 	let yCanvas = pageToCanvasY(e.pageY);
			// 	previousSquare = selectedSquare;
			// 	selectedSquare = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
			// 	previousSquare.tryMovePiece(selectedSquare.acceptPiece(selectedPiece));
      //
			// 	BoardController.prototype.unsetHighlights();
			// 	BoardController.prototype.refreshBoard();
			// }
		}
    //

	function onMouseUp(e) {
    returnclicks('up', e.pageX, e.pageY);
		// if(dragActive){
		// 	dragActive = false;
		// 	let xCanvas = pageToCanvasX(e.pageX);
		// 	let yCanvas = pageToCanvasY(e.pageY);
		// 	previousSquare = selectedSquare;
		// 	selectedSquare = BoardController.prototype.getSquareByCanvasXY(xCanvas, yCanvas);
		// 	previousSquare.tryMovePiece(selectedSquare.acceptPiece(selectedPiece));
        //
		// 	BoardController.prototype.unsetHighlights();
		// 	BoardController.prototype.refreshBoard();
		// }
	}

    // function pageToCanvasX(x){
    //   let x = x - canvas.offsetLeft + 75 / 2;
    //   return x
    // }

    // function pageToCanvasY(y){
    //   let y = y - canvas.offsetTop + 75 / 2;
    //   return y;
    // }

    // function canvasToBoardX(x){
    //   let x = (x / 75) - 1;
    //   x = x.toFixed(4);
    //   return x
    // }

    // function canvasToBoardY(y){
    //   let y = (y / 75) - 1;
    //   y = y.toFixed(4);
    //   return y;
    // }

    constructor(_returnclicks);
};
