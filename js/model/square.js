function SquareModel(_x, _y) {

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
    this.returntoBoard = function(){
      if(piece==null)return [xPos, yPos];
      if(piece.hasTemp()){return [xPos, yPos, piece.getImg(), piece.getTemp()]}
      else{return [xPos, yPos, piece.getImg()]}
    }
    this.getPosition = function() {
        return [xPos, yPos];
    }
    this.setTempPiece = function(x, y) {
        if(!piece == null){
          piece.setTemp(x,y);
        }
    }
    this.getTempPosition = function() {
        if(piece!=null){return piece.getTemp();}
        return [null,null]
    }
    this.isEmpty = function() {
        return (piece == null);
    }
    this.setPiece = function(_piece) {
        piece = _piece;
    }
    this.removePiece = function() {
        let oldpiece = piece;
        piece = null;
        return oldpiece;
    }

    constructor(_x, _y);
};
