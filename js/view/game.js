function GameView() {
    var game;

    function constructor() {
        game = document.querySelector("#game");
    }

    this.show = function() {
        game.classList.remove("hide");
    };

    this.hide = function() {
        game.classList.add("hide");
    }

    this.setReturnButton = function(returnfunction) {
        document.querySelector("#game #lobbybackbutton").addEventListener("click", function() {
            this.hide();
            returnfunction();
        });
    };

    constructor();
};
