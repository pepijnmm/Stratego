var Database = function() {
  var webapi;
  var socket;
  var apiKey;
  var connected;
  var tempreturnfunction;

  function constructor() {
    connected = false;
    webapi="//strategoavans.herokuapp.com/";
  }
  Database.prototype.connect = function(_apiKey, returnfunction){
    apiKey = _apiKey;
	tempreturnfunction = returnfunction;
    Database.prototype.get(true, 'api/users/me',null,apiKeyCorrect);
  }
  function apiKeyCorrect(data){
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
  Database.prototype.getConnected = function(){
    return connected;
  }
  Database.prototype.pawnPosition = function(id, positions, async = true){
    return post(async, 'api/games/'+id+'/start_board',positions);
  }
  Database.prototype.getPawnMoves = function(id){
    return get(async, 'api/games/'+id+'/moves');
  }
  Database.prototype.movesPawns = function(id,positionfrom, positionto, async = true){
    return post(async, 'api/games/'+id+'/moves',{"square":positionfrom,"sqiare_to":positionto});
  }
  Database.prototype.get = function(async, url,data = null, returnfunction = null){
	  return crud("GET", async, url,data, returnfunction)
  }
  Database.prototype.post = function(async, url,data = null, returnfunction = null){
	  return crud("POST", async, url,data, returnfunction)
  }
  Database.prototype.delete = function(async, url,data = null, returnfunction = null){
	  return crud("DELETE", async, url,data, returnfunction)
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
  Database.prototype.on = function(name,functionname){
    socket.on(name, function(data) {
      functionname(name,data);
    });
  }
  constructor();
}
