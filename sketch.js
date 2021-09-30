const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var rock;
var ground;
var boggie1;
var boggie2;
var boggie3;
var boggie4; 
var boggie5;
var boggie6;
var connect1;
var connect2;
var connect3;
var connect4;
var flag = 0;
function preload(){
  bg=loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  rock = new Rock(1000, 350, 200, 80);
  ground = new Ground(600, 380, 1200, 10)
  boggie1 = new Boggie(100, 300, 100, 40)
  boggie2 = new Boggie(250, 300, 100, 40)
  boggie3 = new Boggie(400, 300, 100, 40)
  boggie4 = new Boggie(550, 300, 100, 40)
  boggie5 = new Boggie(700, 300, 100, 40)
  connect1 = new Chain(boggie1.body, boggie2.body)
  connect2 = new Chain(boggie2.body, boggie3.body)
  connect3 = new Chain(boggie3.body, boggie4.body)
  connect4 = new Chain(boggie4.body, boggie5.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  rock.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  connect1.show();
  connect2.show();
  connect3.show();
  connect4.show();

  if(keyCode = RIGHT_ARROW){
    Matter.Body.applyForce(boggie5.body, boggie5.body.position, {x:0.1, y:0})
  }
  var collision = Matter.SAT.collides(boggie5.body, rock.body)
  if(collision.collided){
    flag = 1
  }
  if(flag === 1){
    console.log("hi");
    textSize(30)
    stroke(3)
    fill("blue")
    text("TRAIN HAS CRASHED", 500, 200)
  }
}

