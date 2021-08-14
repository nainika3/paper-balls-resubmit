
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(500,390,1000,20);
bucket1=new Ground(700,330,20,100);
bucket2=new Ground(900,330,20,100);

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

ball=Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);``

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  var pos=ball.position;
  ellipse(pos.x,pos.y,20);

 ground.display()
 bucket1.display()
 bucket2.display()
}


function keyPressed(){

	if(keyCode===UP_ARROW){
		
	Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:-70});

	}
}

