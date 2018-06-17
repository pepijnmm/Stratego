function BoardController(_gameId) {
    var boardView;
    var boardModel;

    function constructor(_gameId) {
        boardView = new BoardView(mouseclick);
        boardModel = new BoardModel(_gameId, functionready, newStage, refreshboard);
    }

    var functionready = function(){
      let result = ["blue"];
      for(let i = 0; i<2; i++){
      let p = ["B", "1", "2", "3", "4", "5","6", "7", "8", "9", "S", "F"];
        for(let j = 0; j< p.length;){
          result.push(((i==0)?"red":"blue")+"_"+p.shift());
        }
      }
      loadimages(result);
    }
    function loadimages(images){
      let image = images.shift();
      let imageLoad = new Image();
        imageLoad.onload = function () {
          if(images.length>0){
          loadimages(images);
        }
        else{
          boardModel.setDoneLoading();
          newStage(boardModel.getState(),true);
        }
        };
        imageLoad.src = "../images/"+image+".png";
    }
    var newStage = function(state, firsttime = false){
      if(boardModel.getDoneLoading()==true){
        switch(state){
          case 'waiting_for_pieces':
            initiateBoard();
            boardModel.setPiecesForStart();
            if(boardModel.getMovePiecesStart()==false)boardModel.setMovePiecesStart(true);
            if(boardModel.getYourTurn()==false)boardModel.setYourTurn(true);
          break;
          case 'waiting_for_opponent_pieces':
            if(firsttime)boardModel.LoadPositions();
            if(boardModel.getMovePiecesStart()==true)boardModel.setMovePiecesStart(false);
            if(boardModel.getYourTurn()==true)boardModel.setYourTurn(false);
          break;
          case 'my_turn':
            if(boardModel.setMovePiecesStart()==true)boardModel.setMovePiecesStart(false);
            if(boardModel.getYourTurn()==false)boardModel.setYourTurn(true);
            if(firsttime){boardModel.LoadPositions();}
            boardModel.getMoves();
          break;
          case 'opponent_turn':
            if(boardModel.getMovePiecesStart()==true)boardModel.setMovePiecesStart(false);
            if(boardModel.getYourTurn()==false)boardModel.setYourTurn(true);
            if(firsttime){boardModel.LoadPositions();}
          break;
        }
      }
      boardView.setgamestatustext(stateConvert(state));
    }
    function stateConvert(state) {
        switch (state) {
            case "game_over":
                return "spel is voorbij";
                break;
            case "waiting_for_an_opponent":
                return "Wachten op tegenstander";
                break
            case "waiting_for_pieces":
                return "Zet je pionen op de gewenste plek";
                break
            case "waiting_for_opponent_pieces":
                return "Tegenstander moet zijn pionen nog zetten.";
                break
            case "my_turn":
                return "Het is jouw beurt";
                break
            case "opponent_turn":
                return "De tegenstander is aan de beurt";
                break
            default:
                return "Er ging iets fout";
                break;
        }
    }

    var refreshboard = function(){
      if(boardModel.getDoneLoading()==true){
        boardView.drawBoard(boardModel.getSquares(), boardModel.getSelectedPiece());
      }
    }

    var mouseclick = function(handle, x, y, offsets){
      if(boardModel.getDoneLoading()==true){
        switch(handle){
          case "down":
            if(!boardModel.isSelecting()){
              x = Math.round(((x - offsets[0] + 75 / 2) / 75)- 1);
              y = Math.round(((y - offsets[1] + 75 / 2) / 75)- 1);

              boardModel.selectPiece(x, y);
              refreshboard();
            }
          break;
          case "up":
            if(boardModel.isSelecting()){
              x = Math.round(((x - offsets[0] + 75 / 2) / 75)- 1);
              y = Math.round(((y - offsets[1] + 75 / 2) / 75)- 1);

              boardModel.dropPiece(x, y);
              refreshboard();
            }
          break;
          case "move":
            if(boardModel.isSelecting()){
              x = Math.round(x - offsets[0] - 75 / 2);
              y = Math.round(y - offsets[1] - 75 / 2);

              boardModel.dragPiece(x, y);
              refreshboard();
            }
          break;
        }
      }
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

    function setHighlights(){
      let result = BoardModel.setHighlights();
    	// for (let i = 0; i < 4; i++) {
    	// 	let bool = false;
    	// 	let sqr;
    	// 	while(!bool){
    	// 		switch(i){
    	// 		 	case 0:
    	// 		 		sqr = selectedPiece.topSqr;
    	// 		 		break;
    	// 		 	case 1:
    	// 		 		sqr = selectedPiece.bottomSqr;
    	// 		 		break;
    	// 		 	case 2:
    	// 		 		sqr = selectedPiece.leftSqr;
    	// 		 		break;
    	// 		 	case 3:
    	// 		 		sqr = selectedPiece.rightSqr;
    	// 		 		break;
    	// 		}
    	// 		if(sqr != undefined && sqr.available){
    	// 			sqr.highlighted = true;
    	// 			this.highlights.push(sqr);
    	// 			if(!(selectedSqr.piece.rank == "9")){
    	// 				bool = true;
    	// 			}
    	// 		}
    	// 		else {
    	// 			bool = true;
    	// 		}
    	// 	}
    	// }
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

    constructor(_gameId);
};
