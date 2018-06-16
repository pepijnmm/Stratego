var SquareModel = function(_x, _y) {

    var xPos;
    var yPos;
    var piece;
    // var highlighted;
    // var topSqr;
    // var bottomSqr;
    // var leftSqr;
    // var rightSqr;

    function constructor(_x, _y) {
        xPos = _x;
        yPos = _y;
        //			highlighted = false;
    }
    SquareModel.prototype.returntoBoard = function(){
      if(piece==null)return [xPos, yPos];
      if(piece.hasTemp()){return [xPos, yPos, piece.getImg(), piece.getTemp()]}
      else{return [xPos, yPos, piece.getImg()]}
    }
    SquareModel.prototype.getPosition = function() {
        return [xPos, yPos];
    }
    SquareModel.prototype.setTempPiece = function(x, y) {
        if(!piece == null){
          piece.setTemp(x,y);
        }
    }
    SquareModel.prototype.getTempPosition = function() {
        if(piece!=null){return piece.getTemp();}
        return [null,null]
    }
    SquareModel.prototype.isEmpty = function() {
        return (piece == null);
    }
    SquareModel.prototype.setPiece = function(_piece) {
        piece = _piece;
    }
    SquareModel.prototype.removePiece = function() {
        let oldpiece = piece;
        piece = null;
        return oldpiece;
    }

    constructor(_x, _y);
};
