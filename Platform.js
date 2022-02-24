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


  get getX ()
  {
    return this.xPos;
  }

  get getY ()
  {
    return this.yPos;
  }

  get getWidth ()
  {
    return this.width;
  }

  get getHeight ()
  {
    return this.height;
  }
  get getIsTrap ()
  {
    return this.isTrap;
  }

}
