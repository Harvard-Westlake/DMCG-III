class bigCheese {
  let splitArr [];
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

  function move(String direction) {
    while (document.getElementById(87).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
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
    while (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
      xVelo++;
      xVelo = xVelo - (xVelo * 2);
      let t = setInterval(addXVelo(), 1000);
      clearInterval(t);
    }
      while (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
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
      let j = setInterval(editJumpCooldown(), 1000);
    }
    clearInterval(j);
    canJump = true;
  }

  function editJumpCooldown() {
    jumpCooldown = jumpCooldown - 0.1;
  }
}
