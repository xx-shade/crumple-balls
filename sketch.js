
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,d1,d2,d3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	paper = new Paper(200, 650, 15)
	d1 = new Dustbin(580, 615, 20, 130)
	d2 = new Dustbin(680, 670, 180,20)
	d3 = new Dustbin(775, 615, 20,130)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display()
paper.display()
d1.display()
d2.display()
d3.display()



  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:10,y:-7})
	}
}


