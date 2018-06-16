function GameController() {
    var gameView;
    var gameModel;
    var players;
    var board;

    function constructor() {
        gameView = new GameView();
        gameModel = new GameModel();
        players = [new PlayerModel("red"), new PlayerModel("blue")];
    }

    this.start = function(id, donefunction) {
        gameModel = new GameModel();
        gameModel.setGame(id, donefunction);
        gameView.show();
        board = new BoardController(id);
    }

    this.remove = function(id, donefunction) {
        gameModel.setGame(id, (function() {
            gameModel.delete((function(data = null) {
                donefunction();
            }))
        }));
    }

    this.newGame = function(ai, donefunction) {
        gameModel.newGame(ai, (function(data = null) {
            donefunction();
        }));
    }

    this.removeAll = function(donefunction) {
        gameModel.deleteAll(donefunction);
    }

    this.setReturnbutton = function(returnfunction) {
        gameView.setReturnButton(returnfunction);
    }

    constructor();
};
