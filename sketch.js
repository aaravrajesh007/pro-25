
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,700,800,10);
dustbin = new Dustbin(600,690);
paper = new Paper(100,690,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  dustbin.display();
 ground.display();
 paper.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-45})
	}
}
