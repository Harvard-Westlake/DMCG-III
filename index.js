class BigCheese {
  let splitArr = [];
  let isAlive = true;
  let jumpCooldown = 0.5;
  let canJump;
  let isSplit = false;
  let xPos;
  let yPos;
  let width;
  let height;
  let xVelo;
  let yVelo;
  const gravity = 9.81;
  const friction;
  let isMoving = false;
  let gForce;

  //https://stackoverflow.com/questions/58618026/how-to-run-a-javascript-file-when-a-button-is-clicked-in-html
  let startButton = document
  .querySelector("#startGame")
  .addEventListener("click", () => {
    this.startGame();
  });

  // Function that start game
  startGame = () => {
    console.log("Game is starting");
  };

  function move(String direction) {
    if (document.getElementById(87).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
      yPos = yPos - 1;
      canJump = false;
      yVelo++;
      yVelo = yVelo - (yVelo * 2);
      let t = setInterval(addYVelo(), 1000);
      clearInterval(t);
      while (isMoving = false || checkForCollision().equals(false)) {
        let a = setInterval(gravitationalForce(), 1000);
      }
    }
    if (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
      xVelo++;
      xVelo = xVelo - (xVelo * 2);
      let t = setInterval(addXVelo(), 1000);
      clearInterval(t);
    }
      if (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
        xVelo++;
        xVelo = Math.abs(xVelo);
        let t = setInterval(addXVelo(), 1000);
        clearInterval(t);
      }
    checkForCollision();
    checkForLand();
  }

  function addYVelo() {
    yPos = yPos + yVelo;
  }

  function gravitationalForce() {
    gForce = yVelo + gravity;
  }

  function addXVelo() {
    xPos = xPos + xVelo;
  }

  function landOnPlatform() {
    yVelo = 0;
    while (xVelo < 0) {
      xVelo++;
    }
    while (xVelo > 0) {
      xVelo--;
    }
    isMoving = false;
    while (jumpCooldown > 0) {
      jumpCooldown = jumpCooldown - 0.1;
    }
    canJump = true;
  }
  split() {
    if(jumpCooldown == true) return;
    isSplit = true;
    //https://stackoverflow.com/questions/9419263/how-to-play-audio
    var audio = new Audio('Sometimes i dream about cheese Sound Effect (Clean).mp3');//which audio file is it supposed to be?
    audio.play();
    LeftCheese left = new LeftCheese();//need velo inputs?
    MiddleCheese middle = new MiddleCheese();
    RightCheese right = new RightCheese();
    splitArr[0] = left;
    splitArr[1] = middle;
    splitArr[2] = right;
  }

//https://stackoverflow.com/questions/26269433/check-javascript-condition-every-frame/26269529
  window.onload = function() {
       function checkForCollision(platforms, traps, lava) {
         while(isMoving){
           for(int i = 0; i < platforms.length; i++){
             if(xPos == platforms[i].getXPos() && yPos == platforms[i].getYPos()){
               die();
               return;
             }
           }
           for(int i = 0; i < traps.length; i++){
             if(xPos == traps[i].getXPos() && yPos == traps[i].getYPos()){
               die();
               return;
             }
           }
           for(int i = 0; i < lava.length; i++){
             if(xPos == lava[i].getXPos() && yPos == lava[i].getYPos()){
               die();
               return;
             }
           }

       }
       setInterval(checkForCollision, 16.6666666667); //(method, time in milliseconds)
   }
  }
  window.onload = function() {
       function checkForLand(platforms, traps, lava) {
         while(isMoving){
           for(int i = 0; i < platforms.length; i++){
             if(platforms[i].inLandingRange(xPos, yPos)){
               land();
               return;
             }
           }
       }
       setInterval(checkForLand, 16.6666666667); //(method, time in milliseconds)
   }
  }

  die(){
    isAlive = false;
    //micah figure out ur sh*t bro
  }

}
