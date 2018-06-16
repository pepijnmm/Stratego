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
            database.delete(true, 'api/games/' + gameId, null, ifdone);
        }
    }
    this.deleteAll = function(ifdone) {
        database.delete(true, 'api/games', null, ifdone);
    }
    this.newGame = function(ai, ifdone) {
        database.post(true, 'api/games', {
            'ai': ai
        }, ifdone);
    }

    function getGameInfo() {
        database.get(true, 'api/games/' + gameId, null, getinfo);
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
