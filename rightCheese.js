class rightCheese  {
  constructor() {
    this.isAlive = true;
    this.canJump = false;
    this.isSplit = true;
    this.xPos = 0;
    this.yPos = 0;
    this.width = 10;
    this.height = 10;
    this.xVelo = 0;
    this.yVelo = 0;
    this.friction = 5;
    this.isMoving = false;
    this.gravity = 9.81;
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
        console.log('a');
        self.xVelo = -5;
        self.move(65);
        self.xVelo = 0;
      };
      if(e.key == "d"){//68
        console.log('d');
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
