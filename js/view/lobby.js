var LobbyView = function() {
	var lobby;
	var gamelist;
	var createNewgame;
	var startGame;
	var deleteGame;
	var deleteAllGames;
	var removePopup;
	var newGamePopup;
	var removeAllPopup;
	var returnclickfunction;
	var newgameai;
	var newgamerealperson;
	var yesdeleteone;
	var yesdeleteall;
	var exitpopup;
	var playername;
	function constructor(){
		lobby = document.querySelector("#lobby");
		gamelist = lobby.querySelector("#gamelist > tbody");
		createNewgame = lobby.querySelector("#buttoncreate");
		startGame = lobby.querySelector("#buttonjoin");
		deleteGame = lobby.querySelector("#buttonverwijderen");
		deleteAllGames = lobby.querySelector("#buttonverwijderalles");
		removePopup = lobby.querySelector("#popupremovegame");
		removeAllPopup = lobby.querySelector("#popupremovegames");
		newGamePopup = lobby.querySelector("#popupnewgame");
		newgameai = lobby.querySelector("#buttoncreateai");
		newgamerealperson = lobby.querySelector("#buttoncreatereal");
		yesdeleteone = lobby.querySelector("#buttonyesdeleteone");
		yesdeleteall = lobby.querySelector("#buttonyesdeleteall");
		exitpopup = lobby.querySelector(".buttonexitpopup");
		playername = lobby.querySelector("#usernamelobby");
		for (var item of lobby.querySelectorAll(".buttonexitpopup")) {
		 item.addEventListener("click", function(){removePopup.classList.add("hide"); newGamePopup.classList.add("hide"); removeAllPopup.classList.add("hide");});
		}
		lobby.querySelector("#buttonnodeleteone").addEventListener("click", function(){exitpopup.click();});
		lobby.querySelector("#buttonnodeleteall").addEventListener("click", function(){exitpopup.click();});
	}
	LobbyView.prototype.setPlayerName = function(returnname){
		playername.innerHTML = returnname;
	};
	LobbyView.prototype.show = function(){
		lobby.classList.remove("hide");
	};
	LobbyView.prototype.hide = function(){
		lobby.classList.add("hide");
	}
	LobbyView.prototype.setReturnButtonClick = function(_returnclickfunction){
		if(returnclickfunction == null){
			returnclickfunction = _returnclickfunction;
			startGame.addEventListener("click", function(){returnclickfunction("start");runalways();});
			newgameai.addEventListener("click", function(){returnclickfunction("newgame",true);runalways();});
			newgamerealperson.addEventListener("click", function(){returnclickfunction("newgame",false);runalways();});
			yesdeleteone.addEventListener("click", function(){returnclickfunction("remove");runalways();});
			yesdeleteall.addEventListener("click", function(){returnclickfunction("removeAll");runalways();});


			deleteGame.addEventListener("click", function(){removePopup.classList.remove("hide");runalways();});
			createNewgame.addEventListener("click", function(){newGamePopup.classList.remove("hide");});
			deleteAllGames.addEventListener("click", function(){removeAllPopup.classList.remove("hide");});
		}
	}
	function runalways(){
		startGame.disabled = true;
		deleteGame.disabled = true;
		exitpopup.click();
	}
	LobbyView.prototype.setGameList = function(games){
		gamelist.innerHTML = "";
		for(i = 0; i < games.length; i++){
			let div = document.createElement('tr');
			div.setAttribute("id", "joingame"+games[i].id);
			div.innerHTML  = ("<tr id='joingame"+games[i].id+"'><td>"+games[i].opponent+"</td><td>"+games[i].state+"</td></tr>").trim();
			gamelist.appendChild(div);
			document.querySelector('#joingame'+games[i].id).addEventListener("click", function(e){enablebuttons();removeSelectedFromAllGames();if(e.target.id.length<1){e.target.id = e.target.parentNode.id;}document.querySelector("#"+e.target.id).classList.add("selected");returnclickfunction('select', e.target.id.replace("joingame", ""));});
		}
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


  constructor();
};
