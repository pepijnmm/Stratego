var Database = function(_apiKey) {
  var account;
  var webapi;
  var socket;
  var apiKey;
  var connected;

  function constructor(_apiKey) {
    connected = false;
    apiKey = _apiKey;
    webapi="http://strategoavans.herokuapp.com/";
    socket = io.connect(webapi, {query: 'api_key=' + apiKey});
    socket.on('connect', function() {
      connected = true;
    });
  }
  Database.prototype.connected = function(){
    return connected;
  }
  Database.prototype.createGame = function(ai, async = true){
    return post(async, 'api/games',{"ai":ai});
  }
  Database.prototype.deleteGames = function(id = "", async = true){
    return deleteUrl(async, 'api/games'+((id.lenght > 0)?'/':'')+id);
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
  Database.prototype.post = function(async, url,data = {}) {
    let xhttp = new XMLHttpRequest();
    url=webapi+url+'?api_key='+apiKey;
    xhttp.open("POST", url, async);
    xhttp.setRequestHeader("Accept", "application/json");
    try {
      xhttp.send(JSON.stringify(data));
      if (xhttp.readyState === 4){
        return JSON.parse(xhttp.responseText);
      }
    }
    catch(err){
      return JSON.stringify({"error":"er ging iets fout"})
    }
  };
  Database.prototype.get = function(async, url,data = {}) {
    let xhttp = new XMLHttpRequest();
    url=webapi+url+'?api_key='+apiKey;
    xhttp.open("GET", url, async);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send(JSON.stringify(data));
    if (xhttp.readyState === 4){
      return JSON.parse(xhttp.responseText);
    }
  };
  Database.prototype.delete = function(async, url,data = {}) {
    let xhttp = new XMLHttpRequest();
    url=webapi+url+'?api_key='+apiKey;
    xhttp.open("DELETE", url, async);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send(JSON.stringify(data));
    if (xhttp.readyState === 4){
      return JSON.parse(xhttp.responseText);
    }
  };
    Database.prototype.on = function(name,functionname){
      socket.on(name, function(data) {
        functionname(name,data);
      });
    }

  function start(){
    socket.on('statechange', function(data) {
        socketfunction('statechange',data);                                        //data moet nog eerst uitgelezen worden en netjes in een array worden gezet
    });
    socket.on('move', function(move) {
        socketfunction('move',data);                                        //data moet nog eerst uitgelezen worden en netjes in een array worden gezet
    });
    socket.on('error', function(error) {
        socketfunction('error',data);                                        //data moet nog eerst uitgelezen worden en netjes in een array worden gezet
    });
  }
  constructor(_apiKey);
}
