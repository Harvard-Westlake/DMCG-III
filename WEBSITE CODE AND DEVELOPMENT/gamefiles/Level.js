class Level {

  constructor(platforms, traps, cheeses) {
    this.platforms = platforms;
    this.traps = traps;
    this.cheeses = cheeses;
  }
  //draws every object stored in this Level onto the HTML canvas
  function drawAllObjects(ctx) {
    for (var i = 0; i < platforms.length; i++) {
      let xStart = platforms[i].getX();
      let yStart = platforms[i].getY();
      let xLength = platforms[i].getW();
      let yHeight = platforms[i].getH();
    }

    for (var i = 0; i < platforms.length; i++) {

    }

    for (var i = 0; i < platforms.length; i++) {

    }
  }

  function initializeAnimation() {
    window.requestAnimationFrame(draw);
  }


  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 900, 700); // clear canvas

    // Figure out what pen we wanna draw with
    ctx.fillStyle = 'rgba(0, 153, 255, 1)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    ctx.save();
    ctx.lineWidth = 6;
    drawArt(ctx);
    ctx.restore();


    // Call draw when the website is ready
    window.requestAnimationFrame(draw);
  }

  initializeAnimation();
}
