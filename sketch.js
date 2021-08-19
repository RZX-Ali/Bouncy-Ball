
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    //normal bounce = 0.95
    restitution: 1.25,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,ground);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fill("red")
  push();
  //write a rectangle function to display ground.
  translate(ground.position.x,ground.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle+=0.1;



  ellipse(ball.position.x,ball.position.y,20);

 
  
  
}

