function GameModel() {
    var gameId;
    var state;
    var connected;
    var opponent;
    var tempreturnfunction;

    function constructor() {
        connected = false;
    }
    this.setGame = function(id, ifdone) {
        if (gameId == null) {
            gameId = id;
            tempreturnfunction = ifdone;
            getGameInfo();
        }
    }
    this.delete = function(ifdone) {
        if (connected == true) {
            main.database.delete(true, 'api/games/' + gameId, null, ifdone);
        }
    }
    this.deleteAll = function(ifdone) {
        main.database.delete(true, 'api/games', null, ifdone);
    }
    this.newGame = function(ai, ifdone) {
        main.database.post(true, 'api/games', {
            'ai': ai
        }, ifdone);
    }

    function getGameInfo() {
        main.database.get(true, 'api/games/' + gameId, null, getinfo);
    }
    this.getConnected = function() {
        return connected;
    }
    var getinfo = function(data) {
        if (Object.keys(data).length > 0) {
            if (data.id) {
                connected = true;
                gameId = data.id
                state = data.state;
                opponent = data.opponent;
                if (tempreturnfunction !== null) {
                    tempreturnfunction();
                    tempreturnfunction = null;
                }
            }
        }
    }

    constructor();
};
