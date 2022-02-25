class bigCheese {
  constructor() {
    this.splitArr = [];
    this.isAlive = true;
    this.jumpCooldown = 0.5;
    this.canJump = true;
    this.isSplit = false;
    this.xPos = 0;
    this.yPos = 0;
    this.width = 10;
    this.height = 10;
    this.xVelo = 0;
    this.yVelo = 0;
    this.gravity = 9.81;
    this.friction = 5;
    this.isMoving = false;
    this.gForce = 0;
  }

  getXPos(){
    return this.xPos;
  }
  getYPos(){
    return this.yPos;
  }
  getXVelo(){
    return this.xVelo;
  }
  getYVelo(){
    return this.yVelo;
  }
  setXPos(number){
    this.xPos = number;
  }
  setYPos(number){
    this.yPos = number;
  }
  setXVelo(number){
    this.xVelo = number;
  }
  setYVelo(number){
    this.yVelo = number;
  }

  move(direction) {
      if(this.isAlive == true){
        switch(direction){
          case 87:
            this.currentAirTime = performance.now() - this.startJumpTime;
            this.isMoving = true;
            this.canJump = false;
            this.yPos = this.yVelo * this.currentAirTime - (0.5 * this.gravity * this.currentAirTime * this.currentAirTime);
            this.yVelo = this.yVelo + (this.gravity * this.currentAirTime);
            Level.checkForCollision();
            Level.checkForLand();
            window.requestAnimationFrame(move(87));
            break;
          case 65:
            this.xPos = this.xPos + this.xVelo;
            window.requestAnimationFrame(move(65));
            break;
          case 68:
            this.xPos = this.xPos + this.xVelo;
            window.requestAnimationFrame(move(68));
            break;
        }
        Level.checkForCollision();
        Level.checkForLand();
      }
  }
    document.addEventListener('keydown', function(e){//W = 87
      if(e.key == 'w'){
        this.startJumpTime = performance.now();
        this.yVelo = 10; //dummy value
        move(87);
        this.yVelo = 0;
      }
      if(e.key == 'a'){
        this.xVelo = -5;
        move(65);
        this.xVelo = 0;
      }
      if(e.key == 'd'){
        this.xVelo = 5;
        move(68);
        this.xVelo = 0;
      }
    })
    // if (document.getElementById(87).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
    //   yPos = yPos - 1;
    //   canJump = false;
    //   yVelo++;
    //   yVelo = yVelo - (yVelo * 2);
    //   let t = setInterval(addYVelo(), 16.6666666667);
    //   clearInterval(t);
    //   while (isMoving = false || checkForCollision().equals(false)) {
    //     let a = setInterval(gravitationalForce(), 16.6666666667);
    //   }
    //   clearInterval(t);
    // }

    // if (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
    //   xVelo++;
    //   xVelo = xVelo - (xVelo * 2);
    //   let t = setInterval(addXVelo(), 16.6666666667);
    //   clearInterval(t);
    // }

      // if (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
      //   xVelo++;
      //   xVelo = Math.abs(xVelo);
      //   let t = setInterval(addXVelo(), 16.6666666667);
      //   clearInterval(t);
      // }

  addYVelo() {
    yPos = yPos + yVelo;
  }

  gravitationalForce() {
    gForce = yVelo + gravity;
  }

  addXVelo() {
    xPos = xPos + xVelo;
  }

  // landOnPlatform() {
  //   yVelo = 0;
  //   while (xVelo < 0) {
  //     xVelo++;
  //   }
  //   while (xVelo > 0) {
  //     xVelo--;
  //   }
  //   isMoving = false;
  //   while (jumpCooldown > 0) {
  //     let j = setInterval(editJumpCooldown(), 16.6666666667);
  //   }
  //   clearInterval(j);
  //   canJump = true;
  // }

  editJumpCooldown() {
    jumpCooldown = jumpCooldown - 0.1;
  }
  split() {
    if(jumpCooldown == true) return;
    isSplit = true;
    //https://stackoverflow.com/questions/9419263/how-to-play-audio
    var audio = new Audio('Sometimes i dream about cheese Sound Effect (Clean).mp3');//which audio file is it supposed to be?
    audio.play();
    const left = new LeftCheese();//need velo inputs?
    const middle = new MiddleCheese();
    const right = new RightCheese();
    splitArr[0] = left;
    splitArr[1] = middle;
    splitArr[2] = right;
  }

  //https://stackoverflow.com/questions/26269433/check-javascript-condition-every-frame/26269529
  // window.onload = function() {
  //     checkForCollision(platforms, traps, lava) {
  //          for(int i = 0; i < platforms.length; i++){
  //            if(xPos == platforms[i].getXPos() && yPos == platforms[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //          for(int i = 0; i < traps.length; i++){
  //            if(xPos == traps[i].getXPos() && yPos == traps[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //          for(int i = 0; i < lava.length; i++){
  //            if(xPos == lava[i].getXPos() && yPos == lava[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //      setInterval(checkForCollision, 16.6666666667); //(method, time in milliseconds)
  //  }
  // }
  // window.onload = function() {
  //     checkForLand(platforms, traps, lava) {
  //          for(int i = 0; i < platforms.length; i++){
  //            if(platforms[i].inLandingRange(xPos, yPos)){
  //              land();
  //              return;
  //            }
  //          }
  //      setInterval(checkForLand, 16.6666666667); //(method, time in milliseconds)
  //  }
  // }

    die(){
      isAlive = false;
      //micah figure out ur sh*t bro
    }
  }