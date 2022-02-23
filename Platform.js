class Platform
{

  constructor (x,y,w,h, isTrap)
  {
    this.xPos = x;
    this.yPos = y;
    this.width = w;
    this.height = h;
    this.isTrap = isTrap;
    }

  }

  getX ()
  {
    return this.xPos;
  }

  getY ()
  {
    return this.yPos;
  }

  getWidth ()
  {
    return this.w;
  }

  getHeight ()
  {
    return this.h;
  }

}
