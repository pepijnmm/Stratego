var BoardModel = function() {

    var squares;
    var highlights;
    var pieces;

    function constructor() {
        squares = [];
        pieces = [];
    }
    BoardModel.prototype.getSquares = function() {
        let returnvalue = [];
        for (let i = 0; i < squares.length; i++) {
            returnvalue.push(squares[i].getPosition());
        }
        return returnvalue;
    }
    BoardModel.prototype.getPieces = function() {
        let returnvalue = [];
        for (let i = 0; i < pieces.length; i++) {
            returnvalue.push(pieces[i].getImg());
        }
        return returnvalue;
    }
    BoardModel.prototype.addSquare = function(x, y) {
        squares.push(new SquareModel(x, y));
    }
    BoardModel.prototype.addPiece = function(rank, team) {
        pieces.push(new PieceModel(rank, team));
    }

    constructor();
};
