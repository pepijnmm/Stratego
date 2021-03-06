function LobbyModel() {
    var selected;
    var gamelist;
    var returnGameList;

    function constructor() {
        gamelist = {};
    }
    this.setSelect = function(_selected) {
        if (gamelist[_selected]) {
            if (gamelist[_selected].state == "Wachten op tegenstander") {
                return false;
            } else {
                selected = _selected;
                return true;
            }
        }
        if (_selected == null) selected = null;
        return false;
    }
    this.getSelect = function() {
        return selected;
    }
    this.reloadGameList = function() {
        reloadGameList();
    }
    function reloadGameList(){
      gamelist = {};
      main.database.get(true, 'api/games', null, loadGameList);
    }
    var loadGameList = function(data) {
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                    gamelist[data[i].id] = {
                        'id': data[i].id,
                        'opponent': nameConvert(data[i].opponent),
                        'state': stateConvert(data[i].state)
                    };
            }
        }
        returnGameList(gamelist);
    }

    main.database.on('statechange', function(name, data) {
        reloadGameList();
    });
    this.setReturnGameList = function(_returnGameList) {
        if (returnGameList == null) returnGameList = _returnGameList;
    }

    function nameConvert(name) {
        switch (name) {
            case undefined:
                return "nog onbekend";
                break;
            case "ai":
                return "Computer";
                break;
            default:
                return name;
                break;
        }
    }

    function stateConvert(state) {
        switch (state) {
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
