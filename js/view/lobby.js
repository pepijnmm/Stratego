function LobbyView() {
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

    function constructor() {
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
        for (let item of lobby.querySelectorAll(".buttonexitpopup")) {
            item.addEventListener("click", function() {
                removePopup.classList.add("hide");
                newGamePopup.classList.add("hide");
                removeAllPopup.classList.add("hide");
            });
        }
        lobby.querySelector("#buttonnodeleteone").addEventListener("click", function() {
            exitpopup.click();
        });
        lobby.querySelector("#buttonnodeleteall").addEventListener("click", function() {
            exitpopup.click();
        });
    }
    this.setPlayerName = function(returnname) {
        playername.innerHTML = returnname;
    };
    this.show = function() {
        lobby.classList.remove("hide");
    };
    this.hide = function() {
        lobby.classList.add("hide");
    }
    this.setReturnButtonClick = function(_returnclickfunction) {
        if (returnclickfunction == null) {
            returnclickfunction = _returnclickfunction;
            startGame.addEventListener("click", function() {
                returnclickfunction("start");
                runalways();
            });
            newgameai.addEventListener("click", function() {
                returnclickfunction("newgame", true);
                runalways();
            });
            newgamerealperson.addEventListener("click", function() {
                returnclickfunction("newgame", false);
                runalways();
            });
            yesdeleteone.addEventListener("click", function() {
                returnclickfunction("remove");
                runalways();
            });
            yesdeleteall.addEventListener("click", function() {
                returnclickfunction("removeAll");
                runalways();
            });


            deleteGame.addEventListener("click", function() {
                removePopup.classList.remove("hide");
            });
            createNewgame.addEventListener("click", function() {
                newGamePopup.classList.remove("hide");
            });
            deleteAllGames.addEventListener("click", function() {
                removeAllPopup.classList.remove("hide");
            });
        }
    }

    function runalways() {
        exitpopup.click();
    }
    this.setGameList = function(games) {
        //gamelist.innerHTML = "";
        keys = Object.keys(games);
        for (let i = 0; i < gamelist.rows.length; i++) {
            if (keys.indexOf(gamelist.rows[i].id.replace("joingame", "")) !== -1) {
                key = gamelist.rows[i].id.replace("joingame", "");
                if (gamelist.rows[i].getElementsByTagName("td")[0].innerHTML !== games[key].opponent) gamelist.rows[i].getElementsByTagName("td")[0].innerHTML = games[key].opponent;
                if (gamelist.rows[i].getElementsByTagName("td")[1].innerHTML !== games[key].state) gamelist.rows[i].getElementsByTagName("td")[1].innerHTML = games[key].state;
                keys.splice(keys.indexOf(key), 1);
            } else {
                gamelist.deleteRow(i);
                i--;
            }
        }
        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            let div = document.createElement('tr');
            div.setAttribute("id", "joingame" + games[key].id);
            div.innerHTML = ("<tr id='joingame" + games[key].id + "'><td>" + games[key].opponent + "</td><td>" + games[key].state + "</td></tr>").trim();
            gamelist.appendChild(div);
            document.querySelector('#joingame' + games[key].id).addEventListener("click", function(e) {
                if (e.target.id.length < 1) {
                    e.target.id = e.target.parentNode.id;
                }
                returnclickfunction('select', e.target.id.replace("joingame", ""));
            });
        }
        if (gamelist.querySelector(".selected") == null) {
            startGame.disabled = true;
            deleteGame.disabled = true;
        }
    };
    this.selectGame = function(game) {
        runalways();
        removeSelectedFromAllGames();
        if (game !== null) {
            enablebuttons();
            document.querySelector("#joingame" + game).classList.add("selected");
        }
    };

    function removeSelectedFromAllGames() {
        for (let i = 0; i < gamelist.rows.length; i++) {
            gamelist.rows[i].classList.remove("selected");
        }
    }

    function enablebuttons() {
        startGame.disabled = false;
        deleteGame.disabled = false;
    }


    constructor();
};
