var GameView = function() {
	var gameboard;
	GameView.prototype.canvas;
	GameView.prototype.ctx;
	var cWidth = 750;
	var cHeight = 750;
	var sqrWidth = cWidth / 10;
	var sqrHeight = cHeight / 10;
	var dragActive;

	function constructor(){
		gameboard = document.querySelector(".gameboard");

		canvas = document.createElement("canvas");
		canvas.id = "gameCanvas"
		canvas.width = cWidth;
		canvas.height = cHeight;
		GameView.prototype.canvas = canvas;

		ctx = canvas.getContext("2d");

		gameboard.appendChild(canvas);
	}

	GameView.prototype.drawSquare = function(x, y){
		ctx.rect(x, y, sqrWidth, sqrHeight);
		ctx.stroke();
	}

	this.drawPiece = function(x, y){
		ctx.beginPath();
		ctx.rect(100, 100, 75, 75);
		ctx.closePath();
		ctx.fill();
	}

  constructor();
};
