const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car, wall;
var speed, weight;
var Deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  Deformation = (0.5*weight*speed*speed)/22500;  
}

function draw() {
  car.collide(wall);
  background(255,255,255);  
  wall.shapeColor = color(80,80,80);

  if(car.x+car.width/2 >= wall.x-wall.width/2){
    car.velocityX = 0
    if (Deformation<100) {
      car.shapeColor = color(0,255,0);
    } else if (Deformation<180 && Deformation>100) {
      car.shapeColor = color(230,230,0);
    } else if (Deformation>180) {
      car.shapeColor = color(255,0,0);
    } 
  }  
  drawSprites();
}
