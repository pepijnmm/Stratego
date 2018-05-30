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
	function constructor(){
		lobby = document.querySelector("#lobby");
		gamelist = document.querySelector("#gamelist > tbody");
		createNewgame = document.querySelector("#buttoncreate");
		startGame = document.querySelector("#buttonjoin");
		deleteGame = document.querySelector("#buttonverwijderen");
		deleteAllGames = document.querySelector("#buttonverwijderalles");
		removePopup = document.querySelector("#popupremovegame");
		removeAllPopup = document.querySelector("#popupremovegames");
		newGamePopup = document.querySelector("#popupnewgame");
		newgameai = document.querySelector("#buttoncreateai");
		newgamerealperson = document.querySelector("#buttoncreatereal");
		yesdeleteone = document.querySelector("#buttonyesdeleteone");
		yesdeleteall = document.querySelector("#buttonyesdeleteall");
		exitpopup = document.querySelector(".buttonexitpopup");
		for (var item of document.querySelectorAll(".buttonexitpopup")) {
		 item.addEventListener("click", function(){removePopup.classList.add("hide"); newGamePopup.classList.add("hide"); removeAllPopup.classList.add("hide");});
		}
		document.querySelector("#buttonnodeleteone").addEventListener("click", function(){exitpopup.click();});
		document.querySelector("#buttonnodeleteall").addEventListener("click", function(){exitpopup.click();});
	}
	LobbyView.prototype.show = function(){
		lobby.classList.remove("hide");
	};
	LobbyView.prototype.hide = function(){
		lobby.classList.add("hide");
	}
	LobbyView.prototype.setReturnButtonClick = function(_returnclickfunction){
		if(returnclickfunction == null){
			returnclickfunction = _returnclickfunction;
			startGame.addEventListener("click", function(){returnclickfunction("start");});
			newgameai.addEventListener("click", function(){returnclickfunction("newgame","true");exitpopup.click();});
			newgamerealperson.addEventListener("click", function(){returnclickfunction("newgame","false");exitpopup.click();});
			yesdeleteone.addEventListener("click", function(){returnclickfunction("remove");exitpopup.click();});
			yesdeleteall.addEventListener("click", function(){returnclickfunction("removeAll");exitpopup.click();});


			deleteGame.addEventListener("click", function(){removePopup.classList.remove("hide");});
			createNewgame.addEventListener("click", function(){newGamePopup.classList.remove("hide");});
			deleteAllGames.addEventListener("click", function(){removeAllPopup.classList.remove("hide");});
		}
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
