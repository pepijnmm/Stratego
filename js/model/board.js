var BoardModel = function() {
	var height = 10;
	var width = 10;

	BoardModel.prototype.firstSqr;
	var lastSqr;
	var mainRowSqr;
	var secondaryRowSqr;

	function constructor(){
	}

	BoardModel.prototype.addSquare = function(square){
		if(BoardModel.prototype.firstSqr != null){
			if (square.xPos > 0 && square.xPos < width - 1){
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
			}
			else if (square.xPos == 0){
				this.mainRowSqr = square;
			}
			else if (square.yPos > 0){
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
				var temp = this.mainRowSqr;
				for (var i = 0; i < width; i++)
				{
					this.secondaryRowSqr.bottomSqr = this.mainRowSqr;
					this.mainRowSqr.topSqr = this.secondaryRowSqr;
					this.secondaryRowSqr = this.secondaryRowSqr.rightSqr;
					this.mainRowSqr = this.mainRowSqr.rightSqr;
				}
				this.secondaryRowSqr = temp;
			}
			else{
				lastSqr.rightSqr = square;
				square.leftSqr = lastSqr;
			}
		}
		else{
			this.secondaryRowSqr = square;
			BoardModel.prototype.firstSqr = square;
		}
		lastSqr = square;
	}

	constructor();
};
