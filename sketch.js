
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	dustbin1 = new Dustbin(1300,475,200,20);
	dustbin2 = new Dustbin(1200,435,20,100);
	dustbin3 = new Dustbin(1400,435,20,100);
	ground = new Ground(800,490,1600,10);
	paper = new Paper(200,400,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}



