var PieceModel = function(_imgSrc) {

	this.xPos;
	this.yPos;
	this.width = 75;
	this.height = 75;
	this.rank = (_imgSrc.charAt(_imgSrc.length - 5));
	this.available = true;
	this.img;

	var visable = true;
	var imgSrc = _imgSrc;
	var rank;

	function constructor(){
	}

	this.getImgSrc = function(){
		if(visable){
			return imgSrc;
		}
		return "../images/blue.png";
	}

	constructor();
};
