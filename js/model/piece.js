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
            let imgName = "red" + "_" + rank;
        } else {
            let imgName = "blue" + "_" + rank;
        }
        if (team == 0) {
            visable = true;
        } else {
            visable = false;
        }
        loadimg();
    }
    function loadimg(){
      img = new Image();
      if (team == 0) {
          img.src = "../images/"+"red" + "_" + rank+".png";
      } else if(rank != "O"){
          img.src = "../images/"+"blue" + "_" + rank+".png";
      }
      else{img.src = "../images/blue.png";}
    }
    this.hasTemp = function() {
      return (xTemp!= null && yTemp != null)
    }
    this.setRank = function(_rank){
      if(rank == "O"){
        rank = _rank;
        loadimg();
      }
    }
    this.getTeam = function(){
      return team;
    }
    this.getImg = function() {
      return img;
    }
    this.getTemp = function() {
        return [xTemp, yTemp];
    }
    this.setTemp = function(_xTemp, _yTemp) {
        xTemp = _xTemp;
        yTemp = _yTemp;
    }
    this.move = function() {
        xTemp = null;
        yTemp = null;
    }

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
