class Database {
  constructor(ip, api_key) {
    this.ip = ip;
    this.api_key = api_key;
    this.xhttp = new XMLHttpRequest();
    this.webapi="http://strategoavans.herokuapp.com/";
  }
  connect()
  {
    if(!(this.socket)){
      this.socket = io.connect(this.webapi, {query: 'api_key=' + this.api_key});
    }
  }
  userInfo()
  {
    return post('api/users/me',{});
  }
  deleteGames()
  {
    return delete('api/games',{});
  }
  gameList()
  {
    return get('api/games',{});
  }
  newGame(ai = false)
  {
    if(this.ai){

    }
    return post('api/games',{});
  }
  this.socket.on('connect', function() {
    console.log('Connected')
  }
  this.socket.on('statechange', function(game) {
      console.log('Game changed:', game);
  });

  this.socket.on('move', function(move) {
      console.log('Move:', move);
  })

  this.socket.on('error', function(error) {
      console.error(error);
  });
  this.post = function(url,data) {
    this.url=webapi+this.url+'?api_key='+api_key;
    this.xhttp.open("POST", this.url, true);
    this.xhttp.setRequestHeader("Accept", "application/json");
    array.send(JSON.stringify(this.data));
    return xhttp.responseText;
  };
  this.get = function(url,data) {
    this.url=this.webapi+this.url+'?api_key='+api_key;
    this.xhttp.open("GET", this.url, true);
    this.xhttp.setRequestHeader("Accept", "application/json");
    array.send(JSON.stringify(this.data));
    return xhttp.responseText;
  };
  this.delete = function(url,data) {
    this.url=webapi+this.url+'?api_key='+api_key;
    this.xhttp.open("DELETE", this.url, true);
    this.xhttp.setRequestHeader("Accept", "application/json");
    array.send(JSON.stringify(this.data));
    return xhttp.responseText;
  };

}
