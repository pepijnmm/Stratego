var PieceModel = function(_imgSrc) {

	this.xPos;
	this.yPos;
	this.width = 75;
	this.height = 75;
	this.rank;
	this.available = true;
	this.img;

	var visable = true;
	var imgSrc = _imgSrc;

	function constructor(){
		this.rank = imgSrc.charAt(imgSrc.length - 5);
	}

	this.getImgSrc = function(){
		if(visable){
			return imgSrc;
		}
		return "../images/blue.png";
	}

	constructor();
};
