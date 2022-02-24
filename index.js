class BigCheese {
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
