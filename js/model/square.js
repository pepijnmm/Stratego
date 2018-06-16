var SquareModel = function(_x, _y) {

    var xPos;
    var yPos;
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
    SquareModel.prototype.getPosition = function() {
        return [xPos, yPos];
    }
    // function tryMovePiece(accepted){
    // 	if(accepted){
    // 		this.available = true;
    // 		this.piece = undefined;
    // 	}
    // 	else{
    // 		this.piece.xPos = this.xPos;
    // 		this.piece.yPos = this.yPos;
    // 	}
    // 	return accepted;
    // }

    // this.acceptPiece = function(piece){
    // 	if(this.available && this.highlighted){
    // 		this.available = false;
    // 		this.piece = piece;
    // 		piece.xPos = this.xPos;
    // 		piece.yPos = this.yPos;
    // 		return true;
    // 	}
    // 	return false;
    // }

    constructor(_x, _y);
};
