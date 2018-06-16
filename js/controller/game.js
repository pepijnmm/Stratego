var GameController = function() {
    var gameView;
    var gameModel;
    var players;
    var board;

    function constructor() {
        gameView = new GameView();
        gameModel = new GameModel();
        board = new BoardController();
        players = [new PlayerModel("red"), new PlayerModel("blue")];
    }

    GameController.prototype.start = function(id, donefunction) {
        gameModel = new GameModel();
        gameModel.setGame(id, donefunction);
        gameView.show();
        board.loadGame();
    }

    GameController.prototype.remove = function(id, donefunction) {
        gameModel.setGame(id, (function() {
            gameModel.delete((function(data = null) {
                donefunction();
            }))
        }));
    }

    GameController.prototype.newGame = function(ai, donefunction) {
        gameModel.newGame(ai, (function(data = null) {
            donefunction();
        }));
    }

    GameController.prototype.removeAll = function(donefunction) {
        gameModel.deleteAll(donefunction);
    }
    
    GameController.prototype.setReturnbutton = function(returnfunction) {
        gameView.setReturnButton(returnfunction);
    }

    constructor();
};
