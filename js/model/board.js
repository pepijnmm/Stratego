var BoardModel = function() {
	this.height = 10;
	this.width = 10;

	var firstSqr;
	var lastSqr;

	function constructor(){
		
	}

	this.getSquare = function(x, y){
		x = Math.round((x / 75), 0) - 1;
		y = Math.round((y / 75), 0) - 1;


		var xFound = false;
		var yFound = false;
		var currentSqr = this.firstSqr;
		while(!xFound || !yFound){
			if(!xFound && currentSqr.xPos != x) {
				currentSqr = currentSqr.rightSqr;
			}
			else{
				xFound = true;
			}

			if(!yFound && currentSqr.yPos != y) {
				currentSqr = currentSqr.bottomSqr;
			}
			else{
				yFound = true;
			}
		}

		return currentSqr;
	}

	constructor();
};
