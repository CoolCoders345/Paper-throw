
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground, left, right
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	options = {
	
	restitution:0.03,
	friction: 0,
	density:1.2
	}
	ball = Bodies.circle(100,100,20,options)
	World.add(world, ball)
	//Create the Bodies Here.
	ground = new Ground(400,590,800,20)
	left = new Ground(600,550,20,100)
	right = new Ground(750,550,20,100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine)
 ground.show()
 left.show()
 right.show()
 ellipse(ball.position.x, ball.position.y,20)


}

function keyPressed() {
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball, {x:0, y:0},{x:+80,y:-50})
}
}
