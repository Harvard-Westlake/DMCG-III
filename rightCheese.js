class rightCheese extends splitCheese {
  function connectRight() {
    if (document.getElementById(50).addEventListener("click", function()) && this.isAlive == true) {
      this.summonCheese(50);
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
