var Main = function() {
    //variables
    var lobby;
    var login;
    Main.prototype.database;


    function constructor() {
        login = new LoginView(logindone);
        Main.prototype.database = new Database();
    }

    var logindone = function(_apiKey) {
        Main.prototype.database.connect(_apiKey, start);
    }

    var start = function(correct) {
        if (correct && lobby == null) {
            Main.prototype.database.on("connect", function(name, data) {
                login.connected();
            });
            login.hide();
            lobby = new LobbyController();
        } else {
            login.error();
        }
    }
    constructor();
}
document.addEventListener("DOMContentLoaded", function() {
    main = new Main();
});
