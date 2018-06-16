var PieceModel = function(_rank, _team) {

    var rank;
    var team;
    var img;
    var visable;
    var square;

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

    PieceModel.prototype.setSquare = function(_square) {
        square = _square;
    }
    PieceModel.prototype.getImg = function() {
        if (visable) {
            return img;
        } else {
            return "blue";
        }
    }

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
