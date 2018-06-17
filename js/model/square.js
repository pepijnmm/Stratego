function SquareModel(_x, _y, _available) {

    var xPos;
    var yPos;
    var piece;
    var available;
    var highlighted;
    // var topSqr;
    // var bottomSqr;
    // var leftSqr;
    // var rightSqr;

    function constructor(_x, _y, _available) {
        xPos = _x;
        yPos = _y;
        highlighted = false;
        available = _available;
        //			highlighted = false;
    }
    this.returntoBoard = function(){
      if(piece==null)return [xPos, yPos, available, highlighted];
      else{return [xPos, yPos, available, highlighted, piece.getImg()]}
    }
    this.getHighlighted = function() {
        return highlighted;
    }
    this.setHighlighted = function(_highlighted) {
        highlighted = _highlighted;
    }
    this.getPosition = function() {
        return [xPos, yPos];
    }
    this.setTempPiece = function(x, y) {
        if(!piece == null){
          piece.setTemp(x,y);
        }
    }
    this.setRankPiece = function(rank){
      piece.setRank(rank);
    }
    this.getTempPosition = function() {
        if(piece!=null){return piece.getTemp();}
        return [null,null]
    }
    this.getAvailable = function() {
        return available;
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

    constructor(_x, _y, _available);
};
