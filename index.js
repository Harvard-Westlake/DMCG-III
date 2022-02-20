class MiddleCheese extends SplitCheese {
  function connect()  {
    if (document.getElementById(51).addEventListener("click", function() && this.isAlive == true) {
      this.summonCheese(51);
    }
  }

  function moveMiddle() {
    if (document.getElementById(87).addEventListener("click", function() && this.isAlive == true) {
      //inherited Move(direction) from grandparent BigCheese class.
      //because Move() relies on (x,y), velocity, etc. variables from BigCheese class, we probably
      //have to move BigCheese together with MiddleCheese when it has been split and is hidden
      //to match the necessary variables.
      Move("up");
    }
  }

}
