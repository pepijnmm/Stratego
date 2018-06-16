var LobbyController = function() {
    //variables
    var lobbyView;
    var lobbyModel;
    var game;
    //constructor
    function constructor() {
        game = new GameController();
        game.setReturnbutton(backToLobby);
        lobbyModel = new LobbyModel();
        lobbyView = new LobbyView();
        lobbyView.show();
        lobbyView.setReturnButtonClick(onButtonClick);
        lobbyModel.setReturnGameList(lobbyView.setGameList);
        lobbyModel.reloadGameList();
        account = new AccountModel();
        account.getusername(lobbyView.setPlayerName);
    }
    var backToLobby = function() {
        lobbyView.show();
        lobbyModel.setSelect(null);
        lobbyModel.reloadGameList();
    }
    var onButtonClick = function(button, data = "") {
        switch (button) {
            case "start":
                game = new GameController();
                game.start(lobbyModel.getSelect(), (function() {
                    donecorrect(true);
                }));
                break;
            case "remove":
                game = new GameController();
                game.remove(lobbyModel.getSelect(), donecorrect);

                break;
            case "newgame":
                game = new GameController();
                game.newGame(data, donecorrect);
                break;
            case "removeAll":
                game = new GameController();
                game.removeAll(donecorrect);
                break;
            case "select":
                if (lobbyModel.setSelect(data)) {
                    lobbyView.selectGame(data);
                } else {
                    lobbyView.selectGame(null);
                }
                break;
        }
    }
    var donecorrect = function(hidelobby = false) {
        if (hidelobby == true) {
            lobbyView.hide();
        }
        lobbyModel.reloadGameList();
    }

    constructor();
};
