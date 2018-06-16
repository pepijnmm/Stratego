var SquareModel = function(x, y, bool) {

	this.xPos = x;
	this.yPos = y;
	this.width = 75;
	this.height = 75;
	this.available = bool;
	this.highlighted = false;

	this.piece;

	this.topSqr;
	this.bottomSqr;
	this.leftSqr;
	this.rightSqr;

	function constructor(){

	}

	this.trySwitchPiece = function(piece){
		if(piece){
			this.piece = piece;
			piece.xPos = this.xPos;
			piece.yPos = this.yPos;
		}
		else{
			this.piece.xPos = this.xPos;
			this.piece.yPos = this.yPos;
		}
		return false;
	}

	this.acceptSwitch = function(piece){
		if(this.piece != undefined){
			var returnPiece = this.piece;
			this.piece = piece;
			piece.xPos = this.xPos;
			piece.yPos = this.yPos;
			return returnPiece;
		}
		return false;
	}

	this.tryMovePiece = function(accepted){
		if(accepted){
			this.available = true;
			this.piece = undefined;
		}
		else{
			this.piece.xPos = this.xPos;
			this.piece.yPos = this.yPos;
		}
		return accepted;
	}

	this.acceptMove = function(piece){
		if(this.available && this.highlighted){
			this.available = false;
			this.piece = piece;
			piece.xPos = this.xPos;
			piece.yPos = this.yPos;
			return true;
		}
		return false;
	}

	constructor();
};
