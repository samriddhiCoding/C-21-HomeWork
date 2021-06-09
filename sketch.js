var wall,thickness;
var  bullet,speed , weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(90,300,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  car.velocityX=speed;

  
}

function draw() {
  background(0,0,0);  
  if (wall.x-bullet.x <( car.width+wall.width)/2)
  {
    car.velocityX=0
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation > 180)
    {
    bullet.shapeColor=color(255,0,0)
    }
    if (deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation < 100)
    {
    bullet.shapeColor=color(255)
    }
  }
   function hasCollided(bullet,wall)
   {
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge)
   {
       return true
   }
     return false ;
  }    
  drawSprites();

}