class leftCheese  {
  constructor(xPos, yPos, xVelo, yVelo) {
    //may need xAccel
    if(xPos == undefined){
      this.xPos = 0;
    }else{
      this.xPos = xPos;
    }
    if(yPos == undefined){
      this.yPos = 0;
    }else{
      this.yPos = xPos;
    }
    if(xVelo == undefined){
      this.xVelo = 0;
    }else{
      this.xVelo = xVelo;
    }
    if(yVelo == undefined){
      this.yVelo = 0;
    }else{
      this.yVelo = yVelo;
    }
    this.enabled = false;
    this.isAlive = true;
    this.canJump = true;
    this.isSplit = false;
    this.width = 50;
    this.height = 50;
    this.gravity = 0.09;
    this.friction = 10;
    this.isMoving = false;
    this.gForce = 0;
    this.initializeKeyListeners();
  }
  getX(){
    return this.xPos;
  }
  getY(){
    return this.yPos;
  }
  getWidth(){
    return this.width;
  }
  getHeight(){
    return this.height;
  }
  move(){
    console.log('moved');
  }

  move(direction) {
    if(this.isAlive == true){
      switch(direction){
        case 65:
        this.xPos = this.xPos + this.xVelo;
        break;
        case 68:
        this.xPos = this.xPos + this.xVelo;
        break;
      }
    }
  }

  initializeKeyListeners(){
    let self = this;
    window.addEventListener("keydown", function(e) {
      if(e.key == "a"){//65
        console.log('leftCheese movin left!');
        self.xVelo = -5;
        self.move(65);
        self.xVelo = 0;
      };
      if(e.key == "d"){//68
        console.log('leftCheese movin right!');
        self.xVelo = 5;
        self.move(68);
        self.xVelo = 0;
      };
    });
  }

  die(){
    isAlive = false;
  }
}
