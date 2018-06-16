var BoardModel = function() {

    var squares;
    var pieces;
    var selecting;

    function constructor() {
        squares = [];
        pieces = [];
    }

    BoardModel.prototype.getSquares = function() {
        let returnvalue = [];
        for (let i = 0; i < squares.length; i++) {
            returnvalue.push(squares[i].returntoBoard());
        }
        return returnvalue;
    }

    BoardModel.prototype.addSquare = function(x, y) {
        squares.push(new SquareModel(x, y));
    }
    BoardModel.prototype.addPiece = function(rank, team) {
        pieces.push(new PieceModel(rank, team));
    }

    BoardModel.prototype.isSelecting = function(){
      if(selecting != null){
        return true;
      }
      return false;
    }
    BoardModel.prototype.setSelectPiece = function(x,y){
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getTempPosition == [x,y]){
          let piece = squares[i].removePiece(x,y);
        }
      }
      if(piece == null){
        for(let i = 0;i< pieces.length;i++){
          if(pieces[i].getTemp == [x,y]){
            let piece = pieces[i];
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

    BoardModel.prototype.setTempPositionPiece = function(x, y, tempX, tempY) {
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition == [x,y]){
            squares[i].setTempPiece(tempX, tempY);
          }
        }
    }
    BoardModel.prototype.setMovingPiece = function(x, y) {
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition == [x,y]){
            squares[i].setPieceTemp(tempX, tempY);
          }
        }
        selecting = null;
    }

    constructor();
};
