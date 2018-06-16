var PieceModel = function(_rank, _bool, _imgSrc) {

	this.xPos;
	this.yPos;
	this.width = 75;
	this.height = 75;
	this.rank = _rank;
	this.available = _bool;
	this.img;

	var visable = true;
	var imgSrc = _imgSrc;

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

var BombModel = function(_imgSrc) {
	PieceModel.call(this, "B", false, _imgSrc);
};
var FlagModel = function(_imgSrc) {
	PieceModel.call(this, "F", false, _imgSrc);
};
var SpyModel = function(_imgSrc) {
	PieceModel.call(this, "S", true, _imgSrc);
};
var MarshallModel = function(_imgSrc) {
	PieceModel.call(this, "1", true, _imgSrc);
};
var GeneralModel = function(_imgSrc) {
	PieceModel.call(this, "2", true, _imgSrc);
};
var ColonelModel = function(_imgSrc) {
	PieceModel.call(this, "3", true, _imgSrc);
};
var MajorModel = function(_imgSrc) {
	PieceModel.call(this, "4", true, _imgSrc);
};
var CaptainModel = function(_imgSrc) {
	PieceModel.call(this, "5", true, _imgSrc);
};
var LieutenantModel = function(_imgSrc) {
	PieceModel.call(this, "6", true, _imgSrc);
};
var SergeantModel = function(_imgSrc) {
	PieceModel.call(this, "7", true, _imgSrc);
};
var MinerModel = function(_imgSrc) {
	PieceModel.call(this, "8", true, _imgSrc);
};
var ScoutModel = function(_imgSrc) {
	PieceModel.call(this, "9", true, _imgSrc);
};
