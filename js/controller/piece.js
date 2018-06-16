var PieceController = function() {
	var pieceModel;

	function constructor(){
		pieceModel = new PieceModel();
	}

	PieceController.prototype.initiatePieces = function(){
		var index = 0;
		for(let team = 0; team<2; )
		pieces.push(pieceModel(_rank, _team, _visable)
		for(var i = 0; i < 6; i++){
			//Bom
			newPiece = new BombModel("../images/blue_B.png");
			pieces.push(newPiece);
		}

		//Vlag
		newPiece = new FlagModel("../images/blue_F.png");
		pieces.push(newPiece);

		//Spion
		newPiece = new SpyModel("../images/blue_S.png");
		pieces.push(newPiece);

		//Maarschalk
		newPiece = new MarshallModel("../images/blue_1.png");
		pieces.push(newPiece);

		//Generaal
		newPiece = new GeneralModel("../images/blue_2.png");
		pieces.push(newPiece);

		for(var i = 0; i < 2; i++){
			//Kolonel
			newPiece = new ColonelModel("../images/blue_3.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 3; i++){
			//Majoor
			newPiece = new MajorModel("../images/blue_4.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 4; i++){
			//Kapitein
			newPiece = new CaptainModel("../images/blue_5.png");
			pieces.push(newPiece);

			//Luitenant
			newPiece = new LieutenantModel("../images/blue_6.png");
			pieces.push(newPiece);

			//Sargeant
			newPiece = new SergeantModel("../images/blue_7.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 5; i++){
			//Mineur
			newPiece = new MinerModel("../images/blue_8.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < 8; i++){
			//Verkenner
			newPiece = new ScoutModel("../images/blue_9.png");
			pieces.push(newPiece);
		}

		for(var i = 0; i < pieces.length; i++){
			var sqr = BoardController.prototype.squares[i];
			sqr.highlighted = true;
			sqr.acceptPiece(pieces[i]);
			sqr.highlighted = false;
		}
	}

	PieceController.prototype.loadImages = function(){
		var index = 0;
		var pieces = BoardController.prototype.pieces;
		for (var i = 0; i <pieces.length; i++) {
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
