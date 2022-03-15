class LevelManager {
  constructor(){
  this.plat1 = [ new Platform(100,100,0,0, false), new Platform(300,100,25,40, false)];
  this.ches1 = [new bigCheese()];
  this.trap1 = [ new Trap(100,100,50,50, false)];
  this.goal1 = new Goal(400,50,5,5) ;
  this.lev1 = new Level (this.plat1, this.trap1, this.ches1);

  this.plat2 = [ new Platform(400,100,25,40, false)];
  this.ches2 = [new bigCheese()];
  this.trap2 = [ new Trap(100,100,50,500, false)];
  this.lev2 = new Level (this.plat2, this.trap2, this.ches2);

  this.plat3 = [ new Platform(300,150,35,30, false)];
  this.ches3 = [new bigCheese()];
  this.trap3 = [ new Trap(110,90,60,300, false)];
  this.lev3 = new Level (this.plat3, this.trap3, this.ches3);

  this.plat4 = [ new Platform(200,250,40,35, false)];
  this.ches4 = [new bigCheese()];
  this.trap4 = [ new Trap(75,110,60,550, false)];
  this.lev4 = new Level (this.plat4, this.trap4, this.ches4);

  this.levels = [];
  this.levels.push(this.lev1);
  this.levels.push(this.lev2);
  this.levels.push(this.lev3);
  this.levels.push(this.lev4);
}
loadLevel(lvl){
  for(let l = 0; l<this.levels.length;l++){
    if(l!=lvl){
    this.levels[l].disable();
    this.levels[l].massDisable();
    }
    else{
      console.log(lvl==l);
      this.levels[l].enable();
      this.levels[l].massEnable();

    }
  }
  this.levels[lvl].initializeAnimation();
}
}
let levels = new LevelManager();
