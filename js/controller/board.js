function BoardController(_gameId) {
    var boardView;
    var boardModel;

    function constructor(_gameId) {
        boardView = new BoardView(mouseclick);
        boardModel = new BoardModel(_gameId, functionready);
    }

    var functionready = function(){
      initiateBoard();
    }
    function refreshboard(){
      boardView.drawBoard(boardModel.getSquares());
    }
    var mouseclick = function(handle, x, y,offsets){
      x = x - offsets[0] + 75 / 2;
      y = y - offsets[1] + 75 / 2;
      switch(handle){
        case "down":
          if(!boardModel.isSelecting){
              boardModel.setSelectPiece(x,y);
              refreshboard();
          }
        break;
        case "up":
        if(boardModel.isSelecting){
            boardModel.setSelectPiece(x,y);
            refreshboard();
        }
        break;
        case "move":
          x = (x / 75) - 1;
          x = x.toFixed(4);
          boardModel.setSelectPiece(x,y);
          refreshboard();
        break;
      }
    }

    function initiateBoard() {
      let nogvisable = new Image();
      nogvisable.src = "../images/blue.png";
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                boardModel.addSquare(x, y);
            }
        }
        for (let team = 0; team < 2; team++) {
            let i = ["B", "B", "B", "B", "B", "B", "1", "2", "3", "3", "4", "4", "4", "5", "5", "5",
                "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "8", "9", "9", "9", "9", "9", "9", "9", "9", "S", "F"
            ];
            for (; i.length > 0;) {
                boardModel.addPiece(i.shift(), team);
                let newImage = new Image();
                if(i.length == 1){
                  newImage.onload = function(){
              				refreshboard();
              		}
                }
                newImage.src = "../images/"+boardModel.getImageLastPiece()+".png";
                boardModel.setImageLastPiece(newImage);

            }
        }
        boardModel.setPiecesForStart();
    }

    // function setHighlights(selectedPiece){
    // 	for (let i = 0; i < 4; i++) {
    // 		let bool = false;
    // 		let sqr;
    // 		while(!bool){
    // 			switch(i){
    // 			 	case 0:
    // 			 		sqr = selectedPiece.topSqr;
    // 			 		break;
    // 			 	case 1:
    // 			 		sqr = selectedPiece.bottomSqr;
    // 			 		break;
    // 			 	case 2:
    // 			 		sqr = selectedPiece.leftSqr;
    // 			 		break;
    // 			 	case 3:
    // 			 		sqr = selectedPiece.rightSqr;
    // 			 		break;
    // 			}
    // 			if(sqr != undefined && sqr.available){
    // 				sqr.highlighted = true;
    // 				this.highlights.push(sqr);
    // 				if(!(selectedSqr.piece.rank == "9")){
    // 					bool = true;
    // 				}
    // 			}
    // 			else {
    // 				bool = true;
    // 			}
    // 		}
    // 	}
    // }
    //
    // function unsetHighlights(){
    // 	for (var i = 0; i < this.highlights.length; i++) {
    // 		this.highlights[i].highlighted = false;
    // 	}
    // 	this.highlights = [];
    // }
    //
    // function getSquareByCanvasXY(x, y){
    // 	x = Math.round((x / 75), 0) - 1;
    // 	y = Math.round((y / 75), 0) - 1;
    //
    // 	var xFound = false;
    // 	var yFound = false;
    // 	var newSquare = board.firstSqr;
    // 	while(!xFound || !yFound){
    // 		if(!xFound && newSquare.xPos != x) {
    // 			newSquare = newSquare.rightSqr;
    // 		}
    // 		else{
    // 			xFound = true;
    // 		}
    //
    // 		if(!yFound && newSquare.yPos != y) {
    // 			newSquare = newSquare.bottomSqr;
    // 		}
    // 		else{
    // 			yFound = true;
    // 		}
    // 	}
    // 	return newSquare;
    // }

    constructor(_gameId);
};
