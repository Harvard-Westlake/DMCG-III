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
  const gravity;
  const friction;
  let isMoving = false;

  function move(String direction) {
    if (document.getElementById(87).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
      yPos = yPos - 1;
      canJump = false;
      yVelo = yVelo - (yVelo * 2); // set to "specific value"
      // every second add yVelo to yPos of bigCheese
      // yVelo increases due to the acceleration of gravity until the cheese lands or collides
    }
    if (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
      xVelo = xVelo - (xVelo * 2); // set to "specific value"
      // every second add xVelo to xPos of bigCheese
    }
      if (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true && this.isMoving = true) {
        xVelo = Math.abs(xVelo); // set to "specific value"
        // every second add xVelo to xPos of bigCheese
      }
    checkForCollision();
    checkForLand();
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
}
