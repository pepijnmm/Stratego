var LobbyView = function() {
	var lobby;
	var gamelist;
	var createNewgame;
	var startGame;
	var deleteGame;
	var deleteAllGames;
	var removePopup;
	var newGamePopup;
	function constructor(){
		lobby = document.querySelector("#lobby");
		gamelist = document.querySelector("#gamelist");
		createNewgame = document.querySelector("#buttoncreate");
		startGame = document.querySelector("#buttonjoin");
		deleteGame = document.querySelector("#buttonverwijderen");
		deleteAllGames = document.querySelector("#buttonverwijderalles");
		removePopup = document.querySelector("popupremovegame");
		newGamePopup = document.querySelector("popupnewgame");
	}
	LobbyView.prototype.show = function(){
		lobby.classList.remove("hide");
	}
	LobbyView.prototype.setGames = function(games, returnfunction){
		games.foreach(function(element){

		});
	}
	LobbyView.prototype.selectGame = function(games, returnfunction){
		startGame.addEventListener("click", returnfunction("start"));
		deleteGame.addEventListener("click", returnfunction("remove"));
		gamelist.foreach(function(element){
			
		});
	}
	function toggleRemovepopup(){
		if(removePopup.classList.contains("hide")){
			removePopup.classList.remove("hide");
		}
		else{
			removePopup.classList.add("hide");
		}
	}
	function toggleNewGamepopup(){
		if(newGamePopup.classList.contains("hide")){
			newGamePopup.classList.remove("hide");
		}
		else{
			newGamePopup.classList.add("hide");
		}
	}


  constructor();
};
