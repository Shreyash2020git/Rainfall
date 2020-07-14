const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var dro;
var dro1,dro2;
var dro3,dro4;
var dro5,dro6;
var dro7,dro8;
var dro9;

function preload() {
  backgroundImg = loadImage("669714.jpg");
}
function setup() {
  createCanvas(1355,625);
  engine = Engine.create();
  world = engine.world;

  dro = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro1 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro2 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro3 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro4 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro5 = new drop(random(10,1300),random(10,50),11,20,random(1,5));
  dro6 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro7 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro8 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
  dro9 = new drop(random(10,1300),random(10,50),15,20,random(1,5));
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  dro.display();
  dro1.display();
  dro2.display();
  dro3.display();
  dro4.display();
  dro5.display();
  dro6.display();
  dro7.display();
  dro8.display();
  dro9.display();
  
}