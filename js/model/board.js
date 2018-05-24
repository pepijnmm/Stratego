var BoardModel = function() {
	var squares = [];

	function constructor(){
		for (var i = 0; i < 100; i++) {
			switch(i){
			 	case 42: case 43: case 46: case 47: case 52: case 53: case 56: case 57:
			 		squares[i] = new SquareModel(false);
			 		break;
			 	default:
			 		squares[i] = new SquareModel(true);
			 		break;
			}
		}
	}

  constructor();
};
