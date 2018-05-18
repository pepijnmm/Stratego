class Database {
  
  constructor(ip, api_key) {
    this.ip = ip;
    this.api_key = api_key;
  }
  connect()
  {
    if(!(this.socket)){
      this.socket = io.connect('https://strategoavans.herokuapp.com/', {query: 'api_key=' + this.api_key});
    }
  }
  userinfo()
  {
    if(!(this.socket)){
      this.socket = io.connect('https://strategoavans.herokuapp.com/', {query: 'api_key=' + this.api_key});
    }
  }
  start(){
    socket.on('connect', function() {
      console.log('Connected')
    });
    socket.on('statechange', function(game) {
        console.log('Game changed:', game);
    });
    this.socket.on('move', function(move) {
        console.log('Move:', move);
    });
    this.socket.on('error', function(error) {
        console.error(error);
    });
    this.privatefunction = function(name) {  };
  }

}
