class LevelManager {
  constructor(){
  this.plat1 = [ new Platform(100,100,0,0, false), new Platform(300,100,25,40, false)];
  this.ches1 = [new bigCheese()];
  this.trap1 = [ new Trap(100,100,50,50, false)];
  this.lev1 = new Level (this.plat1, this.trap1, this.ches1);
  this.plat2 = [ new Platform(400,100,25,40, false)];
  this.ches2 = [new bigCheese()];
  this.trap2 = [ new Trap(100,100,50,500, false)];
  this.lev2 = new Level (this.plat2, this.trap2, this.ches2);
  this.levels = [];
  this.levels.push(this.lev1);
  this.levels.push(this.lev2);
}
loadLevel(lvl){
  for(let l = 0; l<this.levels.length;l++){
    if(l!=lvl){
    this.levels[l].cancelled = true;
    this.levels[l].massDisable();
    }
    else{
      this.levels[l].cancelled = false;
      this.levels[l].massEnable();
    }
  }
  this.levels[lvl].initializeAnimation();
}
}
let levels = new LevelManager();
