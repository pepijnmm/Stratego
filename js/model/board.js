function BoardModel(){

    var squares;
    var pieces;
    var selecting;

    function constructor() {
        squares = [];
        pieces = [];
    }

    this.getSquares = function() {
        let returnvalue = [];
        for (let i = 0; i < squares.length; i++) {
            console.log(squares[i].getPosition());
        }
        for (let i = 0; i < squares.length; i++) {
            returnvalue.push(squares[i].returntoBoard());
        }
        return returnvalue;
    }

    this.addSquare = function(x, y) {
        squares.push(new SquareModel(x, y));
    }
    this.addPiece = function(rank, team) {
        pieces.push(new PieceModel(rank, team));
    }

    this.isSelecting = function(){
      if(selecting != null){
        return true;
      }
      return false;
    }
    this.setSelectPiece = function(x,y){
      let piece = null;
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getTempPosition == [x,y]){
          piece = squares[i].removePiece(x,y);
        }
      }
      if(piece == null){
        for(let i = 0;i< pieces.length;i++){
          if(pieces[i].getTemp == [x,y]){
            piece = pieces[i];
          }
        }
      }
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getPosition == [x,y]){
          squares[i].setPiece(piece);
        }
      }
      selecting = piece;
    }
    //
    // this.setTempPositionPiece = function(x, y, tempX, tempY) {
    //     for(let i = 0;i< squares.length;i++){
    //       if(squares[i].getPosition == [x,y]){
    //         squares[i].setTempPiece(tempX, tempY);
    //       }
    //     }
    // }
    // this.setMovingPiece = function(x, y) {
    //     for(let i = 0;i< squares.length;i++){
    //       if(squares[i].getPosition == [x,y]){
    //         squares[i].setPieceTemp(tempX, tempY);
    //       }
    //     }
    //     selecting = null;
    // }

    constructor();
};
