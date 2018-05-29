var BoardView = function() {
	var controller;
	var gameboard;
	var canvas;
	var ctx;
	var sqrWidth = 75;
	var sqrHeight = 75;

	function constructor(){
		gameboard = document.querySelector(".gameboard");

		canvas = document.querySelector("#gameCanvas");

		ctx = canvas.getContext("2d");

		gameboard.appendChild(canvas);
	}

  constructor();
};
