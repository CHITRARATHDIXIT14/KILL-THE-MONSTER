const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bg,bg1
var ground1
var box1,box2,box3,box4,box5
var box6,box7,box8,box9,box10,box11,box12,box13
var box14,box15,box16,box17,box18,box19
var box20,box21,box22,box23,box24,box25,box26
var hero1
var chain1
var monster1

function preload() {
//preload the images here
bg=loadImage("sprites/bg2.png")

}

function setup() {
  createCanvas(1350, 650);

  engine = Engine.create();
  world = engine.world;

  // create sprites here
  hero1=new hero(900,0,200,100)
monster1=new monster(1200,200,200,200)

ground1=new ground(500,400,1000,10)
//level1
box1=new box(970,180,40,40)
box1.visible=false;
box2=new box(970,160,40,40)
box3=new box(970,140,40,40)
box4=new box(970,120,40,40)
box5=new box(970,100,40,40)
//level2
box6=new box(900,180,40,40)
box7=new box(900,160,40,40)
box8=new box(900,140,40,40)
box9=new box(900,120,40,40)
box10=new box(900,100,40,40)
box11=new box(900,100,40,40)
box12=new box(900,100,40,40)
box13=new box(900,100,40,40)

//MAM I AM TO HIDE THE ROPE AND I AM NOT ABLE TO  MONSTER WHEN IT HIT THE BLOCKS


//level3
box14=new box(830,180,40,40)
box15=new box(830,160,40,40)
box16=new box(830,140,40,40)
box17=new box(830,120,40,40)
box18=new box(830,100,40,40)
box19=new box(830,100,40,40)
//level4
box20=new box(760,180,40,40)
box21=new box(760,160,40,40)
box22=new box(760,140,40,40)
box23=new box(760,120,40,40)
box24=new box(760,100,40,40)
box25=new box(760,100,40,40)
box26=new box(760,100,40,40)

chain1=new chain(hero1.body , {x:200 , y:100})
chain1.visible=false

Engine.run(engine);
}

function draw() {
  background(bg);
  hero1.display();
  //level1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //level2
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  //level3
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  //level4
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  monster1.display();
  chain1.display();

ground1.display();
}



function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x:mouseX ,y:mouseY })
 }
 


 function mouseReleased(){
  chain1.fly();
  monster1.display();
}