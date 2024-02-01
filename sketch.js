
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(150,650,900,20,option);
  World.add(world,ground);
  //box1 = new Box(200,100,50,50);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    //new Box(50,50,50,50)
    
    new Box(mouseX,mouseY,70,70)

    //new Box(50,50,mouseX,mouseY)
    
    //new Box(mouseY,mouseX,50,50)  
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,900,15);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

