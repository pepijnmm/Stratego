var AccountModel = function() {
  var userId;
  var userName;
  var error;
	function constructor(){
    userinfo();
	}
  AccountModel.prototype.getApiKey = function(){
    return apiKey;
  }
  function userinfo(){
      let data = main.database.get(true, 'api/users/me');
      if(data.hasOwnProperty("id")){
        userId = data.id;
        userName = data.name;
        return true;
      }
      error = "error";
      return false;
  }
  AccountModel.prototype.login = function(returnfunction){
    if(userId&&userId.length > 0){
      returnfunction(true);
    }
    else if(error&&error.length > 0){
      error = "";
      returnfunction(false);
    }
    else{
      returnfunction(userinfo());
    }
  }

  constructor();
};
