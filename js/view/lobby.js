var LobbyView = function(_returnclickfunction) {
	var lobby;
	var gamelist;
	var createNewgame;
	var startGame;
	var deleteGame;
	var deleteAllGames;
	var removePopup;
	var newGamePopup;
	function constructor(returnclickfunction){
		lobby = document.querySelector("#lobby");
		gamelist = document.querySelector("#gamelist > tbody");
		createNewgame = document.querySelector("#buttoncreate");
		startGame = document.querySelector("#buttonjoin");
		deleteGame = document.querySelector("#buttonverwijderen");
		deleteAllGames = document.querySelector("#buttonverwijderalles");
		removePopup = document.querySelector("popupremovegame");
		newGamePopup = document.querySelector("popupnewgame");
		startGame.addEventListener("click", returnclickfunction("start"));
		deleteGame.addEventListener("click", returnclickfunction("remove"));
		createNewgame.addEventListener("click", returnclickfunction("new"));
		deleteAllGames.addEventListener("click", returnclickfunction("removeAll"));
	}
	LobbyView.prototype.show = function(){
		lobby.classList.remove("hide");
	};
	LobbyView.prototype.setGameList = function(games,returnfunction){
		for(i = 0; i < games.length; i++){
			var div = document.createElement('tr');
			div.setAttribute("id", "joingame"+games[i].id);
			div.innerHTML  = ("<tr id='joingame"+games[i].id+"'><td>"+games[i].opponent+"</td><td>"+games[i].state+"</td></tr>").trim();
			gamelist.appendChild(div);
			document.querySelector('#joingame'+games[i].id).addEventListener("click", function(e){enablebuttons();removeSelectedFromAllGames();if(e.target.id.length<1){e.target.id = e.target.parentNode.id;}document.querySelector("#"+e.target.id).classList.add("selected");returnfunction(e.target.id.replace("joingame", ""));});
		}
	};
	LobbyView.prototype.selectGame = function(returnfunction){

	};
	function removeSelectedFromAllGames(){
		for(i=0; i<gamelist.rows.length; i++){
		  gamelist.rows[i].classList.remove("selected");
		}
	}
	function enablebuttons(){
		startGame.disabled = false;
		deleteGame.disabled = false;
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


  constructor(_returnclickfunction);
};
