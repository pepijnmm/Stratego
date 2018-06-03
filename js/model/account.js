var AccountModel = function() {
  var userId;
  var userName;
  var error;
  var returnname;
	function constructor(){
	}
  AccountModel.prototype.getApiKey = function(){
    return apiKey;
  }
  function userinfo(){
      

  }
  var logindata = function(data){
    if(data.hasOwnProperty("id")){
      returnname(data.name);
	}
  }
  AccountModel.prototype.getusername = function(returnfunction){
	  returnname = returnfunction;
      let data = main.database.get(true, 'api/users/me', null,logindata);
  }

  constructor();
};
