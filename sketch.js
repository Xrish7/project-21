var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  wall.createSprite(1000,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  { 
   bullet.velocityX=0; var deformation=0.5 * weight* speed/22509;
     
  if(deformation>180)
  { 
    bullet.shapeColor=color(255,0,0);
  } 
  if(deformation<180 && deformation>100)
  {
     bullet.shapeColor=color(230,230,0);
  } 
  if(deformation<100)
  {
    bullet.shapecolor=color(0,255,0);
  } 
}
}