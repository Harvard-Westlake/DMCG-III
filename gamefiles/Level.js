
class Level {

  constructor(platforms, traps, cheeses) {
    this.platforms = platforms;
    this.traps = traps;
    this.cheeses = cheeses;
    this.background = new Image();
    this.background.src = backgroundTexture;

    this.platformImage = new Image();
    this.platformImage.src = platformTexture;
    this.trapImage = new Image();
    this.trapImage.src = trapTexture;
    this.cheeseImage = new Image();
    this.cheeseImage.src = cheeseTexture;
  }

  //draws every object stored in this Level onto the HTML canvas
  drawAllObjects(context) {

    for (var i = 0; i < this.platforms.length; i++) {
      let xStart = this.platforms[i].getX();
      //  console.log("Called the platform X getter!");
      let yStart = this.platforms[i].getY();
      //      console.log("Called the platform Y getter!");
      let xLength = this.platforms[i].getWidth();
      //    console.log("Called the platform Width getter!");
      let yHeight = this.platforms[i].getHeight();
      //    console.log("Called the platform Height getter!");
      context.save();
      context.beginPath();
      context.drawImage(this.platformImage, xStart, yStart, xStart + xLength, yStart + yHeight);
      context.restore();

    }


    for (var i = 0; i < this.traps.length; i++) {
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

      context.drawImage(this.trapImage, xStart, yStart, xStart + xLength, yStart + yHeight);
      context.restore();

    }
    /*
        for (var i = 0; i < this.cheeses.length; i++) {
        let platformImage2 = new Image();
        platformImage2.src = cheeseTexture;
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
          context.drawImage(platformImage2,xStart, yStart, xStart + xLength, yStart + yHeight);
          context.restore();
          context.save();
        }
    */
    context.save();
    context.beginPath();
    context.drawImage(this.background, 0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
    context.restore();
  }

  //interfaces with user machine to refresh as fast as possible
  initializeAnimation() {
    window.requestAnimationFrame(this.draw.bind(this));
  }

  //interfaces with website to connect to game Canvas
  draw() {
    let context = document.getElementById('canvas').getContext('2d');
    //    console.log(context);

    context.globalCompositeOperation = 'destination-over';
    context.clearRect(0, 0, 900, 700); // clear canvas

    // Figure out what pen we wanna draw with
    context.fillStyle = 'rgba(0, 153, 255, 1)';
    context.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    context.save();
    context.lineWidth = 6;
    //  console.log(context);
    this.drawAllObjects(context);
    context.restore();


    // Call draw when the website is ready
    window.requestAnimationFrame(this.draw.bind(this));
  }

}
