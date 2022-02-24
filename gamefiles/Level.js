class Level {

  constructor(platforms, traps, cheeses) {
    this.platforms = platforms;
    this.traps = traps;
    this.cheeses = cheeses;
  }

  //draws every object stored in this Level onto the HTML canvas
  drawAllObjects(context) {
    let image = new Image();
    image.src = platformTexture;
    for (var i = 0; i < lev1.platforms.length; i++) {
      let xStart = lev1.platforms[i].getX();
    //  console.log("Called the platform X getter!");
      let yStart = lev1.platforms[i].getY();
//      console.log("Called the platform Y getter!");
      let xLength = lev1.platforms[i].getWidth();
  //    console.log("Called the platform Width getter!");
      let yHeight = lev1.platforms[i].getHeight();
  //    console.log("Called the platform Height getter!");
      context.save();
      context.beginPath();
      context.drawImage(image,xStart, yStart, xStart + xLength, yStart + yHeight);
      context.restore();
      context.save();
    }
    /*
    for (var i = 0; i < lev1.traps.length; i++) {
      let xStart = traps[i].getX();
      console.log("Called the trap X getter!");
      let yStart = traps[i].getY();
      console.log("Called the trap Y getter!");
      let xLength = traps[i].getWidth();
      console.log("Called the trap Width getter!");
      let yHeight = traps[i].getHeight();
      console.log("Called the trap Height getter!");
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#F00000";
      ctx.fillRect(xStart, yStart, xStart + xLength, yStart + yHeight);
      ctx.restore();
      ctx.save();
    }

    for (var i = 0; i < lev1.cheeses.length; i++) {
      let xStart = cheeses[i].getX();
      console.log("Called the cheese X getter!");
      let yStart = cheeses[i].getY();
      console.log("Called the cheese Y getter!");
      let xLength = cheeses[i].getWidth();
      console.log("Called the cheese Width getter!");
      let yHeight = cheeses[i].getHeight();
      console.log("Called the cheese Height getter!");
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(xStart, yStart, xStart + xLength, yStart + yHeight);
      ctx.restore();
      ctx.save();
    }
    */
  }

  //interfaces with user machine to refresh as fast as possible
  initializeAnimation() {
    window.requestAnimationFrame(this.draw);
  }

  //interfaces with website to connect to game Canvas
  draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
//    console.log(ctx);

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 900, 700); // clear canvas

    // Figure out what pen we wanna draw with
    ctx.fillStyle = 'rgba(0, 153, 255, 1)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    ctx.save();
    ctx.lineWidth = 6;
  //  console.log(ctx);
    lev1.drawAllObjects(ctx);
    ctx.restore();


    // Call draw when the website is ready
    window.requestAnimationFrame(lev1.draw);
  }

}
