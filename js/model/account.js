function AccountModel() {
    var userId;
    var userName;
    var error;
    var returnname;

    function constructor() {}
    this.getApiKey = function() {
        return apiKey;
    }
    var logindata = function(data) {
        if (data.hasOwnProperty("id")) {
            returnname(data.name);
        }
    }
    this.getusername = function(returnfunction) {
        returnname = returnfunction;
        let data = main.database.get(true, 'api/users/me', null, logindata);
    }

    constructor();
};
