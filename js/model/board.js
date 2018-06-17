function BoardModel(_gameId, _waitOnReadyFunction, _returnstatus, _refreshfunction){

    var squares;
    var pieces;
    var selecting;
    var previusSquare;
    var gameId;
    var state;
    var opponent;
    var tempreturnfunction;
    var returnstatus;
    var refreshfunction;
    var controllerDoneLoading;
    var moves;

    function constructor(_gameId, _waitOnReadyFunction, _returnstatus, _refreshfunction) {
      returnstatus = _returnstatus;
        squares = [];
        pieces = [];
        gameId = _gameId;
        tempreturnfunction = _waitOnReadyFunction;
        refreshfunction = _refreshfunction;
        getGameInfo();
        main.database.on('statechange', function(name, data) {
          if(data.state)returnstatus(data.state);
        });
        main.database.on('move', function(name, data) {
          console.log('Move:', data);
          if(data.game_id==gameId){
            getMovesQuery([data.move],true);
          }
        });
    }
    this.getDoneLoading = function(){
      return controllerDoneLoading;
    }
    this.setDoneLoading = function(){
      controllerDoneLoading = true;
    }
    this.getState = function(){
      return state;
    }
    this.LoadPositions = function(){
      main.database.get(true, 'api/games/' + gameId, null, loadPositionsDone);
    }
    this.checkMoves = function(){
      return (moves.length>0);
    }
    this.addSquare = function(x,y){
      addSquare(x,y);
    }
    var addSquare = function(x, y) {
      let available = true;
      if(y ==4 || y==5){
        if((x>1 && x<4)||(x>5 && x<8)){
          available= false;
        }
      }
      squares.push(new SquareModel(x, y, available));
    }
    var loadPositionsDone = function(data){
      if (Object.keys(data).length > 0) {
        if(data.board){
          pieces = [];
          squares = [];
          for(let i=0; i< data.board.length;i++){
            let row = data.board[i];
            for(let k=0; k< row.length;k++){
              let column = row[k];
                addSquare(k, i);
                if(!(column == " ")){
                  if(column=="O"){squares[squares.length-1].setPiece(new PieceModel(column, 1));}
                  else{squares[squares.length-1].setPiece(new PieceModel(column, 0));}
                }
            }
          }
          refreshfunction();
          getMoves();
        }
      }
    }

    function getGameInfo() {
        main.database.get(true, 'api/games/' + gameId, null, getinfo);
    }
    var getinfo = function(data) {
        if (Object.keys(data).length > 0) {
            if (data.id) {
                gameId = data.id
                state = data.state;
                opponent = data.opponent;
                getMoves();
            }
        }
    }
    this.getMoves = function(){getMoves();};
    var getMoves = function() {
        main.database.get(true, 'api/games/' + gameId+"/moves", null, getMovesQuery);
    }
    this.setHighlights = function(){
      let positionsPossble = [];
      let position = selecting.getTemp();
      let x = position[0];
      let y = position[1];
      let allow = selecting.canMove();
      switch(allow){
        case 0:
        break;
        case 1:
          if(x>0)positionsPossble.push(x-1,y);
          if(x<9)positionsPossble.push(x+1,y);
          if(y>0)positionsPossble.push(x,y-1);
          if(y<9)positionsPossble.push(x,y+1);
        break;
        case 2:
        for(let i = 0;i<10;i++){
          if(i>1 || i<9 || x==i)positionsPossble.push(i,y);
        }
        for(let i = 0;i<10;i++){
          if(i>1 || i<9 || y==i)positionsPossble.push(x,y);
        }
        break;
      }
      for(let i = 0;i< squares.length;i++){
        let pos = squares[i].getPosition();
        for(let k = 0;k< positionsPossble.length;k++){
          if(pos.sort().join(',')=== positionsPossble[k].sort().join(',')){
            if(!squares[i].isEmpty){
              positionsPossble.splice(k, 1);
            }
          }
        }
      }
      return positionsPossble;
    }
    var getMovesQuery = function(data, socketdata = false) {
        if (Object.keys(data).length > 0) {
          if(socketdata==true){data = moves.concat(data);}
          if(moves == null){
            moves = data;
            if (tempreturnfunction !== null) {
                tempreturnfunction();
                tempreturnfunction = null;
                returnstatus(state);
            }
          }
          else{
            for (let x = data.length - moves.length; x > 0; x--) {
                let move = data[data.length - x-1];
                switch(move.type){
                  case "move":
                    movePiece(move.square.row, move.square.column, move.square_to.row, move.square_to.column);
                  break;
                  case "attack":
                    attack(move.square.row, move.square.column, move.square_to.row, move.square_to.column, move.defender_destroyed, move.attacker, move.defender)
                  break;
                }
            }
            moves = data;
            refreshfunction();
          }
        }
    }
    function movePiece(x,y, newx, newy){
      if(selecting != null){console.log(previusSquare);squares[previusSquare].setPiece(selecting); selecting = null; previusSquare=null;}
        let piece = null;
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
            piece = squares[i].removePiece();
          }
        }
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition()[0] == newx && squares[i].getPosition()[1] == newy){
            squares[i].setPiece(piece);
          }
        }
    }
    function attack(x,y, newx, newy, won, attack, defender){
      if(selecting != null){squares[previusSquare].setPiece(selecting); selecting = null; previusSquare=null;}
      let piece = null;
      let oldposition;
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
          piece = squares[i].removePiece();
        }
      }
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getPosition()[0] == newx && squares[i].getPosition()[1] == newy){
          if(won){
            squares[i].removePiece();
            squares[i].setPiece(piece);
            squares[i].setRankPiece(attack);
          }
          else{
            squares[i].setRankPiece(defender);
          }
        }
      }
    }
    this.setPiecesForStart  = function(){
      for (let y = 9; y != 0; y--) {
        if(y<4){
          for (let x = 0; x < 10; x++) {
              this.setPieceOnSquare(x, y, pieces.shift())
          }
        }
        else if(y>=6){
          for (let x = 0; x < 10; x++) {
              this.setPieceOnSquare(x, y, pieces.shift())
          }
        }
      }
    }

    this.getSquares = function() {
        let returnvalue = [];
        for (let i = 0; i < squares.length; i++) {
            returnvalue.push(squares[i].returntoBoard());
        }
        if(selecting != null){returnvalue.push(selecting.getTemp());}
        return returnvalue;
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
    this.setSelectPiece = function(x,y, move=false){
      if(selecting == null && move ==false){
        let piece = null;
          for(let i = 0;i< squares.length;i++){
            if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
              previusSquare = i;
              piece = squares[i].removePiece();
              if(piece.getRank() == 1){
                previusSquare=null;
                squares[i].setPiece(piece);
                piece = null;
              }
            }
          }
          if(move==true&&piece !=null){
            selecting = piece;
            return true;
          }
          else{return false;}

      }
      else if(selecting !=null){
        selecting.setTemp(x,y);
        return true;
      }
      else{return false;}
    }
    this.setSelectedMovedPiece = function(){
      for(let i = 0;i< squares.length;i++){
        if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
          selecting.move();
          squares[i].setPiece(selecting);
          selecting = null;
        }
      }
    }
    //
    // this.setTempPositionPiece = function(x, y, tempX, tempY) {
    //     for(let i = 0;i< squares.length;i++){
    //       if(squares[i].getPosition == [x,y]){
    //         squares[i].setTempPiece(tempX, tempY);
    //       }
    //     }
    // }
    this.setPieceOnSquare = function(x, y,piece) {
        for(let i = 0;i< squares.length;i++){
          if(squares[i].getPosition()[0] == x && squares[i].getPosition()[1] == y){
            squares[i].setPiece(piece);
          }
        }
        selecting = null;
    }

    constructor(_gameId, _waitOnReadyFunction, _returnstatus, _refreshfunction);
};
