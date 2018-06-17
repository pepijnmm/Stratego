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

    this.trySwitchPiece = function(piece){
        if(piece){
            piece = piece;
            piece.xTemp = xPos;
            piece.yTemp = yPos;
        }
        else{
            piece.xTemp = xPos;
            piece.yTemp = yPos;
        }
        return false;
    }

    this.acceptSwitch = function(piece){
        if(piece != undefined){
            var returnPiece = piece;
            piece = piece;
            piece.xTemp = xPos;
            piece.yTemp = yPos;
            return returnPiece;
        }
        return false;
    }

    this.tryMovePiece = function(accepted){
        if(accepted){
            available = true;
            piece = undefined;
        }
        else{
            piece.xTemp = xPos;
            piece.yTemp = yPos;
        }
        return accepted;
    }

    this.acceptMove = function(piece){
        // if(available && highlighted){
            // available = false;
            piece = piece;
            piece.xTemp = xPos;
            piece.yTemp = yPos;
            return true;
        // }
        return false;
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
    this.getPiece = function(){
        return piece;
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
