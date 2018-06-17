function BoardView(_returnclicks) {
    var board;
    var canvas;
    var ctx;
    var returnclicks;
    var gamestatus;
    // var cWidth;
    // var cHeight;
    var dragActive;
    // var dragEnabled;
    // var selectedPiece;
    // var selectedSquare;
    // var previousSquare;

    function constructor(_returnclicks) {
        board = document.querySelector(".gameboard");
        gamestatus = document.querySelector(".gamestatus");
        board.innerHTML = "";
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
    this.setgamestatustext = function(text){
      gamestatus.innerHTML = text;
    }
    this.drawBoard = function(squares, piece) {
      //[Square x, Square y, available, highlight, img]
      if(!(board.innerHTML.replace(/\s/g,"").length > 0)){board.appendChild(canvas);}
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < squares.length; i++) {
	        if(squares[i][2]==true){
            let height = 75;
  	        let width = 75;
  	        y = squares[i][1] * height;
  	        x = squares[i][0] * width;
  	        drawSquare(x, y, width, height);
  	        // if (squares[i].highlighted) {
  	        //     drawHighlight(x + (width / 2), y + (height / 2));
  	        // }
            if(squares[i].length > 4){
              if(squares[i].length == 6){
        				y = squares[i][5][1] * height;
        				x = squares[i][5][1] * width;
              }
              else{
                y = squares[i][1] * height;
        				x = squares[i][0] * width;
              }
      				img = squares[i][4];
              if(squares[i][3]){drawHighlight(x, y);}
      				drawPiece(img, x, y, width, height);
            }
          }
        }
        if(piece != undefined){
          if(piece.getTemp()[0] != undefined){
            var x = piece.getTemp()[0][0];
            var y = piece.getTemp()[0][1];
          }
          drawPiece(piece.getImg(), x, y, 75, 75);
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
			// if(!dragActive){
        returnclicks('down', e.pageX, e.pageY, [canvas.offsetLeft, canvas.offsetTop]);
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
			// if(dragActive){
        returnclicks('move', e.pageX, e.pageY, [canvas.offsetLeft, canvas.offsetTop]);
			// 	selectedPiece.xPos = canvasToBoardX(pageToCanvasX(e.pageX));
			// 	selectedPiece.yPos = canvasToBoardY(pageToCanvasY(e.pageY));
      //
			// 	BoardController.prototype.refreshBoard();
			// }
		}

		function onMouseUp(e) {
			// if(dragActive){
			// 	dragActive = false;
        returnclicks('up', e.pageX, e.pageY, [canvas.offsetLeft, canvas.offsetTop]);
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
