class leftCheese extends BigCheese {
  function connectLeft() {
    if (document.getElementById(49).addEventListener("click", function()) && this.isAlive == true) {
      this.summonCheese(49);
    }
  }

  function moveLeft() {
    if (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true) {
      Move("left");
    }
  }

  function moveRight() {
    if (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true) {
      Move("right");
    }
  }
}
