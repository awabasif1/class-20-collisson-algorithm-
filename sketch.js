var fixedRect,movingRect;



function setup() {
  createCanvas(900,700);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor= "yellow";
  fixedRect.debug="true";
  movingRect=createSprite(500, 150, 50, 50);
  movingRect.shapeColor= "yellow";
  movingRect.debug="true";
}

function draw() {
  background("black");  
  movingRect.Y=World.mouseY;
  movingRect.X=World.mouseX;
  if(movingRect.x-fixedRect.x <fixedRect.width/2+movingRect.width/2 
    &&fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 
    &&movingRect.y-fixedRect.y <fixedRect.height/2+movingRect.height/2 
    &&fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor= "blue";
    movingsRect.shapeColor="blue";
  }
  else {
    fixedRect.shapeColor= "yellow";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}