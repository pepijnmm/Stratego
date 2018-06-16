var PieceModel = function(_rank, _team) {

    var rank;
    var team;
    var img;
    var visable;
    var xTemp;
    var yTemp;

    function constructor(_rank, _team) {
        rank = _rank;
        team = _team;
        if (team == 0) {
            img = "red" + "_" + team;
        } else {
            img = "blue" + "_" + team;
        }
        if (team == 0) {
            visable = true
        } else {
            visable = false;
        }
    }
    PieceModel.prototype.hasTemp = function() {
      return (xTemp!= null && yTemp != null)
    }
    PieceModel.prototype.getImg = function() {
        if (visable) {
            return img;
        } else {
            return "blue";
        }
    }
    SquareModel.prototype.getTemp = function() {
        return [xTemp, yTemp];
    }
    SquareModel.prototype.setTemp = function(_xTemp, _yTemp) {
        xTemp = _xTemp;
        yTemp = _yTemp;
    }
    SquareModel.prototype.move = function() {
        xPos = xTemp;
        yPos = yTemp;
        xTemp = null;
        yTemp = null;
    }
    var xTemp;
    var yTemp;

    PieceModel.prototype.canMove = function() {
        switch (rank) {
            case "B":
            case "F":
                return 0;
                break;
            case "9":
                return 2;
                break;
            default:
                return 1;
                break;
        }
    }

    constructor(_rank, _team);
};
