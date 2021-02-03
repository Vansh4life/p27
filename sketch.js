
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter = 20;

	bob = new Bob(width/2-bobDiameter*2,height/4+300,bobDiameter);
	bob1 = new Bob(width/2,height/4+300,bobDiameter);
	bob2 = new Bob(width/2+bobDiameter*2,height/4+300,bobDiameter);
	bob3 = new Bob(width/2+bobDiameter*4,height/4+300,bobDiameter);
	bob4 = new Bob(width/2+bobDiameter*6,height/4+300,bobDiameter);
	roof = new Roof(width/2,height/4,width/2,20);
	rope = new Rope(bob.body,roof.body,-bobDiameter*2,0);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter/2+10,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter/2+50,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter/2+90,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter/2+130,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  drawSprites();

  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}

