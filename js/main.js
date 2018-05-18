class Main {

  constructor(){
    var lobby = new Lobby();
    var input = document.querySelector("#loginInput");
    var click = document.querySelector("#loginClick");
    var main;
    var apiKey;
    var login = function() {
      apiKey= input.value;
      start();
    }
  }
  test(){
    login();
  }
  main(){
    //create html
    input.addEventListener("keyup", function(event) {
      //on  enter start login
      if (event.keyCode === 13) {
        login();
      }
    });
    click.addEventListener("click", function(event) {
        login();
    });

  }

  start(){
    document.querySelector("#login").classList.add("hide");
    document.querySelector("#lobby").classList.remove("hide");
  }

}
document.addEventListener("DOMContentLoaded", function() {
  main = new Main();
  main.main();
});
