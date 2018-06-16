function Main() {
    //variables
    var lobby;
    var login;
    this.database;


    function constructor() {
        login = new LoginView(logindone);
        this.database = new Database();
    }

    var logindone = function(_apiKey) {
        this.database.connect(_apiKey, start);
    }

    var start = function(correct) {
        if (correct && lobby == null) {
            this.database.on("connect", function(name, data) {
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
