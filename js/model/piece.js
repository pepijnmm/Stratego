function PieceModel(_rank, _team) {

    var rank;
    var team;
    var img;
    var visable;
    var xTemp;
    var yTemp;
    var notVisableimg;

    function constructor(_rank, _team) {
        rank = _rank;
        team = _team;
        if (team == 0) {
            img = "red" + "_" + rank;
        } else {
            img = "blue" + "_" + rank;
        }
        if (team == 0) {
            visable = true
        } else {
            visable = false;
        }
    }
    this.hasTemp = function() {
      return (xTemp!= null && yTemp != null)
    }
    this.setImg = function(_img, _notVisableimg){
        img=_img;
        notVisableimg=_notVisableimg;
    }
    this.getImg = function() {
        if (visable) {
            return img;
        } else {
            return notVisableimg;
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

    this.canMove = function() {
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
