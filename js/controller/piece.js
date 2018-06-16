var PieceController = function() {

	function constructor(){

	}

	PieceController.prototype.loadPieces = function(){
		BoardController.prototype.pieces = [];
		var pieces = BoardController.prototype.pieces;
	}

	PieceController.prototype.initiatePieces = function(){
		BoardController.prototype.pieces = [];
		var pieces = BoardController.prototype.pieces;
		var index = 0;
		//TEMPERARY
		var color = "red";
		//TEMPERARY
		var newPiece;

		for(var i = 0; i < 6; i++){
			//Bom
			newPiece = new PieceModel("../images/" + color + "_B.png");
			pieces.push(newPiece);
		}

		//Vlag
		newPiece = new PieceModel("../images/" + color + "_F.png");
		pieces.push(newPiece);

		//Spion
		newPiece = new PieceModel("../images/" + color + "_S.png");
		pieces.push(newPiece);

		//Maarschalk
		newPiece = new PieceModel("../images/" + color + "_1.png");
		pieces.push(newPiece);

		//Generaal
		newPiece = new PieceModel("../images/" + color + "_2.png");
		pieces.push(newPiece);

		for(var i = 0; i < 2; i++){
			//Kolonel
			newPiece = new PieceModel("../images/" + color + "_3.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 3; i++){
			//Majoor
			newPiece = new PieceModel("../images/" + color + "_4.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 4; i++){
			//Kapitein
			newPiece = new PieceModel("../images/" + color + "_5.png");
			pieces.push(newPiece);

			//Luitenant
			newPiece = new PieceModel("../images/" + color + "_6.png");
			pieces.push(newPiece);

			//Sergeant
			newPiece = new PieceModel("../images/" + color + "_7.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 5; i++){
			//Mineur
			newPiece = new PieceModel("../images/" + color + "_8.png");
			pieces.push(newPiece);
		}
		
		for(var i = 0; i < 8; i++){
			//Verkenner
			newPiece = new PieceModel("../images/" + color + "_9.png");
			pieces.push(newPiece);
		}

		var index = BoardController.prototype.squares.length - 1;
		for(var i = 0; i < pieces.length; i++){
			var sqr = BoardController.prototype.squares[index];
			sqr.highlighted = true;
			sqr.acceptMove(pieces[i]);
			sqr.highlighted = false;
			index--;
		}
	}

	PieceController.prototype.loadImages = function(){
		var index = 0;
		var pieces = BoardController.prototype.pieces;
		for (var i = 0; i < pieces.length; i++) {
			var newImage = new Image();
			newImage.onload = function(){
				index++;
				if(index == pieces.length) {
					BoardController.prototype.refreshBoard();
				}
			}
			newImage.src = pieces[i].getImgSrc();
			pieces[i].img = newImage;
		}
	}

  	constructor();
};
