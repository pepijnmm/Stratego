var AccountModel = function() {
  var userId;
  var userName;
  var error;
  var returnfunctionlogin;
	function constructor(){
	}
  AccountModel.prototype.getApiKey = function(){
    return apiKey;
  }
  function userinfo(returnfunction){
      let data = main.database.get(true, 'api/users/me',{},logindata);

  }
  var logindata = function(data){
    if(data.hasOwnProperty("id")){
      userId = data.id;
      userName = data.name;
      returnfunctionlogin(true);
      return;
    }
    error = "error";
    returnfunctionlogin(false);
    return;
  }
  AccountModel.prototype.login = function(returnfunction){
    if(error&&error.length > 0){
      error = "";
      returnfunction(false);
      return;
    }
    if(userId&&userId.length > 0){
      returnfunction(true);
      return;
    }
    else{
      returnfunctionlogin = returnfunction;
      userinfo(returnfunction);
    }
  }

  constructor();
};
