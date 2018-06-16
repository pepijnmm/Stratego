function BoardModel(_gameId, _waitOnReadyFunciton){

    var squares;
    var pieces;
    var selecting;
    var gameId;
    var state;
    var opponent;
    var tempreturnfunction;

    function constructor(_gameId, _waitOnReadyFunciton) {
        squares = [];
        pieces = [];
        gameId = _gameId;
        tempreturnfunction = _waitOnReadyFunciton;
        getGameInfo();
    }

    function getGameInfo() {
        database.get(true, 'api/games/' + gameId, null, getinfo);
    }
    var getinfo = function(data) {
        if (Object.keys(data).length > 0) {
            if (data.id) {
                gameId = data.id
                state = data.state;
                opponent = data.opponent;
                if (tempreturnfunction !== null) {
                    tempreturnfunction();
                    tempreturnfunction = null;
                }
            }
        }
    }

    this.setPiecesForStart  = function(){
      let i=0;
      for (let y = 6; y < 10; y++) {
          for (let x = 0; x < 10; x++) {
              this.setPieceOnSquare(x, y, pieces[i])
          }
          i++;
      }
    }
    this.getImageLastPiece = function(){
      return pieces[pieces.length-1].getImg();
    }
    this.setImageLastPiece = function(img,notvisable){
      pieces[pieces.length-1].setImg(img, notvisable);
    }

    this.getSquares = function() {
        let returnvalue = [];
        for (let i = 0; i < squares.length; i++) {
            returnvalue.push(squares[i].returntoBoard());
        }
        return returnvalue;
    }

    this.addSquare = function(x, y) {
        squares.push(new SquareModel(x, y));
    }
    this.addPiece = function(rank, team) {
        pieces.push(new PieceModel(rank, team));
    }
    this.isSelecting = function(){
      if(selecting != null){
        return true;
      }
      return false;
    }
    this.setSelectPiece = function(x,y){
      let piece = null;
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getTempPosition == [x,y]){
          piece = squares[i].removePiece(x,y);
        }
      }
      if(piece == null){
        for(let i = 0;i< pieces.length;i++){
          if(pieces[i].getTemp == [x,y]){
            piece = pieces[i];
          }
        }
      }
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getPosition == [x,y]){
          squares[i].setPiece(piece);
        }
      }
      selecting = piece;
    }
    //
    this.setTempPositionPiece = function(x, y, tempX, tempY) {
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition == [x,y]){
            squares[i].setTempPiece(tempX, tempY);
          }
        }
    }
    this.setPieceOnSquare = function(x, y,piece) {
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
            squares[i].setPiece(piece);
          }
        }
        selecting = null;
    }

    constructor(_gameId, _waitOnReadyFunciton);
};
