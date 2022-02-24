class bigCheese {
  let splitArr = [];
  let isAlive = true;
  let jumpCooldown = 0.5;
  let canJump = true;
  let isSplit = false;
  let xPos = 0;
  let yPos = 0;
  let width = 10;
  let height = 10;
  let xVelo = 0;
  let yVelo = 0;
  const gravity = 9.81;
  const friction = 5;
  let isMoving = false;
  let gForce = 0;

  move(String direction) {
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
      clearInterval(t);
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

  addYVelo() {
    yPos = yPos + yVelo;
  }

  gravitationalForce() {
    gForce = yVelo + gravity;
  }

  addXVelo() {
    xPos = xPos + xVelo;
  }

  landOnPlatform() {
    yVelo = 0;
    while (xVelo < 0) {
      xVelo++;
    }
    while (xVelo > 0) {
      xVelo--;
    }
    isMoving = false;
    while (jumpCooldown > 0) {
      let j = setInterval(editJumpCooldown(), 1000);
    }
    clearInterval(j);
    canJump = true;
  }

  editJumpCooldown() {
    jumpCooldown = jumpCooldown - 0.1;
  }
}
