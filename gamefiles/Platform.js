class Platform
{

  constructor (xPos,yPos,width,height, isTrap)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.isTrap = isTrap;
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
    return this.width;
  }

  getHeight ()
  {
    return this.height;
  }
  getIsTrap ()
  {
    return this.isTrap;
  }
}
