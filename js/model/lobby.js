var LobbyModel = function() {
	var selected;
	function constructor(){
	}
	LobbyModel.prototype.setSelect = function(_selected){
		selected=_selected;
	}
	LobbyModel.prototype.getSelect = function(){
		return selected;
	}
	LobbyModel.prototype.getGameList = function(){
		let data = main.database.get(false, 'api/games');
		returnarray = [];
		if(data.length>0){
			for(i = 0; i < data.length; i++){
				if(data[i].state !== "game_over")
				returnarray.push({'id':data[i].id, 'opponent':data[i].opponent, 'state':stateConvert(data[i].state) });
			}
			return returnarray;
		}
	}
	function stateConvert(state){
		switch(state){
			case "game_over":
				return "spel is voorbij";
			break;
			case "waiting_for_an_opponent":
				return "Wachten op tegenstander";
			break
			case "waiting_for_pieces":
				return "Zet je pionen op de gewenste plek";
			break
			case "waiting_for_opponent_pieces":
				return "Tegenstander moet zijn pionen nog zetten.";
			break
			case "my_turn":
				return "Het is jouw beurt";
			break
			case "opponent_turn":
				return "De tegenstander is aan de beurt";
			break
			default:
				return "Er ging iets fout";
			break;
		}
	}


  constructor();
};
