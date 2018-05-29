var GameModel = function() {

	function constructor(){
	}
	Database.prototype.getGameInfo = function(id = "", async = true){
		return get(async, 'api/games'+((id.lenght == 0)?'/':'')+id);
	}
  constructor();
};
