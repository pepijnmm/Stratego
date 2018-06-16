var BoardController = function() {
    var boardView;
    var boardModel;

    function constructor() {
        boardView = new BoardView();
        boardModel = new BoardModel();
    }
    BoardController.prototype.loadGame = function() {
        initiateBoard();
        boardView.drawBoard(boardModel.getSquares(), boardModel.getPieces());
    }

    function initiateBoard() {
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
            }
        }
    }
    // PieceController.prototype.loadImages = function(){
    // 	var index = 0;
    // 	var pieces = BoardController.prototype.pieces;
    // 	for (var i = 0; i <pieces.length; i++) {
    // 		var newImage = new Image();
    // 		newImage.onload = function(){
    // 			index++;
    // 			if(index == pieces.length) {
    // 				BoardController.prototype.refreshBoard();
    // 			}
    // 		}
    // 		newImage.src = pieces[i].getImgSrc();
    // 		pieces[i].img = newImage;
    // 	}
    // }

    function setHighlights(selectedSqr){
    	for (let i = 0; i < 4; i++) {
    		let bool = false;
    		let sqr = selectedSqr;
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

    constructor();
};
