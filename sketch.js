
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var top;
var ball1, ball2, ball3, ball4, ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	top = new Ground(600,height,200,800)

	ball1 = new ball (100,130,20,20)
	ball2 = new ball (110,130,20,20)
	ball3 = new ball (120,130,20,20)
	ball4 = new ball (130,130,20,20)
	ball5 = new ball (140,130,20,20)

	rope = new rope (120,60,1,1);
	
	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  top.display();
  rope.display();
  
  drawSprites();
 
}



