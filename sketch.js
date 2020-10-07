var bullet,wall;
var speed,weight,thickness;
//var redCar,greenCar,whiteCar,yellowCar;

function preload() {
redCar=loadImage("red car.png");
greenCar=loadImage("green car.png");
whiteCar=loadImage("white car.png");
yellowCar=loadImage("yellow car.png");
}

function setup() {
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet=createSprite(50,200,300,300);
bullet.shapeColor="white";
//car.addImage("whiteCar",whiteCar);
bullet.setCollider("circle",0,0,bullet.width);
bullet.scale=0.2;
bullet.debug=true;
bullet.setCollider("rectangle",0,0,bullet.width,bullet.height);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
wall.debug=true;
bullet.velocityX=speed;
}

function draw() {
createCanvas(1600,400);
background("lightblue");



if (hasCollided(bullet,wall)) {
 // bullet.velocityX=300;
  bullet.collide(wall);

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if (damage>10){
     wall.shapeColor=color(255,0,0);
    // bullet.collide(wall);
   }
    
   if (damage<10) {
     wall.shapeColor=color(0,255,0);
    // bullet.collide(wall);
   }
}
drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
     return true;
  }
  return false;
}