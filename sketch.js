const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world, engine;

var roof0;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;;

function setup() {
	createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity ();
	let options = {
		mouse: canvasmouse
	};
	var mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint); 

	roof0 = new roof(width/2, 100, 500, 50);

	ball1 = new ball(width/2-120,400,"black");
	ball2 = new ball(width/2-40,400,"black");
	ball3 = new ball(width/2+40,400,"black");
	ball4 = new ball(width/2+120,400,"black");
	

	rope1 = new Rope(ball1.body, {x:width/2-120, y:100});
 	rope2 = new Rope(ball2.body, {x:width/2-40, y:100})
	rope3 = new Rope(ball3.body, {x:width/2+40, y:100});
	rope4 = new Rope(ball4.body, {x:width/2+120, y:100});
	


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  roof0.display();
  rope1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();




  
  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}



