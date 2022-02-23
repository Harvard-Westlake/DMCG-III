class Platform
{

constructor Platform (x,y,w,h, texture)
{
  this.xPos = x;
  this.yPos = y;
  this.width = w;
  this.height = h;
  if (platformTexture == texture) {
    this.texture = texture;
    this.evil = true;
  }
  else
  {
    this.texture = platformTexture;
    this.evil = false;
  }


}

function getX ()
{
  return this.xPos;
}

function getY ()
{
  return this.yPos;
}

function getWidth ()
{
  return this.w;
}

function getHeight ()
{
  return this.h;
}
}
