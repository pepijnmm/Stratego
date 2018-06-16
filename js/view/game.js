var GameView = function() {
    var game;

    function constructor() {
        game = document.querySelector("#game");
    }

    GameView.prototype.show = function() {
        game.classList.remove("hide");
    };

    GameView.prototype.hide = function() {
        game.classList.add("hide");
    }

    GameView.prototype.setReturnButton = function(returnfunction) {
        document.querySelector("#game #lobbybackbutton").addEventListener("click", function() {
            GameView.prototype.hide();
            returnfunction();
        });
    };

    constructor();
};
