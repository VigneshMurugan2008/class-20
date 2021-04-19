var fRect,mRect;



function setup() {
  createCanvas(800,800);
 fRect= createSprite(400, 200, 50, 50);

 mRect= createSprite(600, 400, 50, 50);
}

function draw() {

  background(0);  

  mRect.x = mouseX
  mRect.y = mouseY 

  if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 
    && fRect.x - mRect.x < mRect.width/2 + fRect.width/2 
    && mRect.y - fRect.y < mRect.height/2 + fRect.height/2 
    && fRect.y- mRect.y < mRect.height/2 + fRect.height/2 ){

      fRect.shapeColor="red"
      mRect.shapeColor="red"


  }
  else{
    fRect.shapeColor="green"
    mRect.shapeColor="green"
}


  drawSprites();
}