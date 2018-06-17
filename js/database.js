function Database() {
  var webapi;
  var socket;
  var apiKey;
  var connected;
  var tempreturnfunction;

  function constructor() {
    connected = false;
    webapi="//strategoavans.herokuapp.com/";
  }
  this.connect = function(_apiKey, returnfunction){
    apiKey = _apiKey;
	tempreturnfunction = returnfunction;
    this.get(true, 'api/users/me',null,apiKeyCorrect);
  }
  function apiKeyCorrect(data){
    if(tempreturnfunction !=null){
    	if(data.hasOwnProperty("id")){
    		socket = io.connect(webapi, {query: 'api_key=' + apiKey});
    		socket.on('connect', function() {
    		  connected = true;
    		});
    		tempreturnfunction(true);
    		tempreturnfunction = null;
    	}
    	else{
    		tempreturnfunction(false);
    		tempreturnfunction = null;
    	}
    }
  }
  this.getConnected = function(){
    return connected;
  }
  this.get = function(async, url,data = null, returnfunction = null){
	  return crud("GET", async, url, data, returnfunction)
  }
  this.post = function(async, url,data = null, returnfunction = null){
	  return crud("POST", async, url, data, returnfunction)
  }
  this.delete = function(async, url,data = null, returnfunction = null){
	  return crud("DELETE", async, url, data, returnfunction)
  }

  Database.prototype.deleteGame = function(id) {
    return this.delete(async, '/api/games/'+id);
  }
  Database.prototype.getGame = function(id) {
    return this.get(async, '/api/games/'+id);
  }
  Database.prototype.postGameBoard = function(id, board) {
    return this.post(async, '/api/games/'+id+'start_board', board);
  }

  Database.prototype.getMove = function(id) {
    return this.get(async, '/api/games/'+id+'moves');
  }
  Database.prototype.postMove = function(id, move) {
    return this.post(async, '/api/games/'+id+'moves', move);
  }

  function crud(protocol, async, url,data, returnfunction) {
    let xhttp = new XMLHttpRequest();
    url=webapi+url+'?api_key='+apiKey;
    xhttp.open(protocol, url, async);
    xhttp.setRequestHeader("Accept", "application/json");
    try{
      if(returnfunction !== null){
        xhttp.onreadystatechange = function () {
          if(xhttp.readyState === 4) {
			  if(xhttp.responseText == null || xhttp.responseText == ""){
				returnfunction();
			  }
			  else{
				returnfunction(JSON.parse(xhttp.responseText));
			  }
          }
        };
      }
      if(data == null){
		  xhttp.send();
	  }
      else{
		  xhttp.setRequestHeader("Content-Type", "application/json");
		  xhttp.send(JSON.stringify(data));
	  }
      if(returnfunction == null){
			if (xhttp.readyState === 4){
				if(xhttp.responseText == null || xhttp.responseText == ""){
					return true;
				}
				else{
				return JSON.parse(xhttp.responseText);
				}
			}
      }
    }
    catch(err){
      return JSON.stringify({"error":"er ging iets fout"})
    }
  }
  this.on = function(name,functionname){
    socket.on(name, function(data) {
      functionname(name,data);
    });
  }
  constructor();
}
