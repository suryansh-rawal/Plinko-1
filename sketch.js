const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg;
var ground1;
var light1;
var light2;
var light3;
var plinkos=[];
var ball=[];
var p;
var sp;
var plinkosSecond=[];

var tp;
var plinkosThird=[];

var broder1,border2;

var oneth;
var zero;
var fiveh;
var hun;
var ten;
var r;
var score=0;


function preload(){
backImg=loadImage("background.jpg")
}
function setup() {
  createCanvas(400,650);
  engine = Engine.create();
  world = engine.world;

 

for(i=10;i<400;i=i+70){
  for(j=100;j<500;j=j+110){

  p= new pinko(i,j);
  plinkos.push(p);
}
}
for(i=45;i<350;i=i+70){
  for(j=260;j<400;j=j+110){
  sp= new pinko(i,j);
  plinkosSecond.push(sp);
}
}
for (i=45;i<350;i=i+70){
  tp= new pinko(i,150)
  plinkosThird.push(tp);
}


  ground1 = new ground(200,606,400,100);
  light1 = new streetlight(58,540,50,100);
  light2 = new streetlight(139,540,50,100);
  light3 = new streetlight(230,540,50,100);
  light4 = new streetlight(321,540,50,100);
  
  border1= new border(400,325,2,650);
  border2= new border(0,325,2,650)







}

function draw() {
  background(backImg);  
  Engine.update(engine)
  drawSprites();
  
   
  console.log(frameCount)

  
  ground1.display();
  light1.display();
  light2.display();
  light3.display();
  light4.display();
 

 if(frameCount%60===0){
  r=new fallingBall(random(30,370),10,10);
  ball.push(r);
  }

 
  
textSize(30)
  //text("0",180,550);
 // text("1000",66,550)
 // text("10",264,550)
  //text("500",341,550)
  //text("100",1,550)
  //textSize(20)
 
  
  for(var i =0 ; i<plinkos.length;i++){
    plinkos[i].display();
      }

      for(var i =0 ; i<plinkosSecond.length;i++){
        plinkosSecond[i].display();
          }

          for(var i =0 ; i<plinkosThird.length;i++){
            plinkosThird[i].display();
          }
            for(var i =0 ; i<ball.length;i++){
              ball[i].display();
                }
              
           console.log(circle.radius);


}


  
