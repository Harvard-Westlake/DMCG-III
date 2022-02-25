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

    let image1 = new Image();
    image1.src = trapTexture;
    for (var i = 0; i < lev1.traps.length; i++) {
      let xStart = this.traps[i].getX();
  //    console.log("Called the trap X getter!");
      let yStart = this.traps[i].getY();
    //  console.log("Called the trap Y getter!");
      let xLength = this.traps[i].getWidth();
    //  console.log("Called the trap Width getter!");
      let yHeight = this.traps[i].getHeight();
    //  console.log("Called the trap Height getter!");
      context.save();
      context.beginPath();

      context.drawImage(image1,xStart, yStart, xStart + xLength, yStart + yHeight);
      context.restore();

    }
/*
    for (var i = 0; i < lev1.cheeses.length; i++) {
    let image2 = new Image();
    image2.src = cheeseTexture;
      let xStart = cheeses[i].getX();
      //console.log("Called the cheese X getter!");
      let yStart = cheeses[i].getY();
    //  console.log("Called the cheese Y getter!");
      let xLength = cheeses[i].getWidth();
      //console.log("Called the cheese Width getter!");
      let yHeight = cheeses[i].getHeight();
  //    console.log("Called the cheese Height getter!");
      context.save();
      context.beginPath();
      context.drawImage(image2,xStart, yStart, xStart + xLength, yStart + yHeight);
      context.restore();
      context.save();
    }
*/
  }

  //interfaces with user machine to refresh as fast as possible
  initializeAnimation() {
    window.requestAnimationFrame(this.draw);
  }

  //interfaces with website to connect to game Canvas
  draw() {
    var context = document.getElementById('canvas').getContext('2d');
//    console.log(context);

    context.globalCompositeOperation = 'destination-over';
    context.clearRect(0, 0, 900, 700); // clear canvas

    // Figure out what pen we wanna draw with
    context.fillStyle = 'rgba(0, 153, 255, 1)';
    context.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    context.save();
    context.lineWidth = 6;
  //  console.log(context);
    lev1.drawAllObjects(context);
    context.restore();


    // Call draw when the website is ready
    window.requestAnimationFrame(lev1.draw);
  }

}
