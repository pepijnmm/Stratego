var AccountModel = function() {
  var userId;
  var userName;
  var error;
	function constructor(){
	}
  AccountModel.prototype.getApiKey = function(){
    return apiKey;
  }
  function userinfo(){
      let data = main.database.get(true, 'api/users/me',{},logindata);

  }
  var logindata = function(data){
    if(data.hasOwnProperty("id")){
      userId = data.id;
      userName = data.name;
	}
  }
  AccountModel.prototype.login = function(){
      userinfo();
  }

  constructor();
};
