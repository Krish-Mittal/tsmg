var player,l1;
var edges,wall1,wall2,wall3,wall4,wall5;
var dwall1,dwall2,dwall3,dwall4,dwall5;
var iwall1 ;
var mw;
function setup() 
{
  createCanvas(1000, 600);
 
  c1="yellow"
  c2="maroon"
  
  mw=new mainwall(490,320,50,50)

  player=createSprite(90,310,20,20);
  player.shapeColor=c1;
  wall1= createSprite(40,340,40,460);
  wall2=createSprite(220,100,400,40);
  wall3=createSprite(940,340,40,460);
  wall4=createSprite(760,100,400,40);
  wall5=createSprite(490,560,940,40);

  dwall1=createSprite(440,140,40,40);
  dwall2=createSprite(470,180,20,40);
  dwall3=createSprite(490,210,20,20);
  dwall4=createSprite(540,140,40,40);
  dwall5=createSprite(510,180,20,40);

  iwall1=createSprite(120,250,120,20);
  iwall2=createSprite(120,370,120,20);
  iwall3=createSprite(170,350,20,60);
  iwall4=createSprite(170,270,20,60);
}

function preload()
{
  
}

function draw()
{
  wall1.shapeColor=c2;
  wall2.shapeColor=c2;
  wall3.shapeColor=c2;
  wall4.shapeColor=c2;
  wall5.shapeColor=c2;

  iwall1.shapeColor=c2;
  iwall2.shapeColor=c2;
  iwall3.shapeColor=c2;
  iwall4.shapeColor=c2;

  dwall1.shapeColor=c2;
  dwall2.shapeColor=c2;
  dwall3.shapeColor=c2;
  dwall4.shapeColor=c2;
  dwall5.shapeColor=c2;

  background(0,255,255);

  edges=createEdgeSprites();

  wall2.shapeColor=c2;
  wall3.shapeColor=c2;
  player.collide(wall3);
  player.collide(wall4);
  player.collide(edges);

  player.collide(dwall1);
  player.collide(dwall2);
  player.collide(dwall3);
  player.collide(dwall4);
  player.collide(dwall5);
  
  player.collide(iwall1);
  player.collide(iwall2);
  wall2.collide(iwall3);
  wall3.collide(iwall4);


if(keyDown(UP_ARROW))
{
  player.y=player.y-20
}

if(keyDown(DOWN_ARROW))
{
  player.y=player.y+20
}
if(keyDown(LEFT_ARROW))
{
  player.x=player.x-20
}

if(keyDown(RIGHT_ARROW))
{
  player.x=player.x+20
}

  for(var i=0;i<=1000; i+=20)
  {
    line(20+i,0,20+i,600);
  }
  for(var y=0;y<=600; y+=20)
  {
    line(0,20+y,1000,20+y)
  }

  drawSprites()
  mw.display()

  //fill(0)
  text("x: "+mouseX + ", y: " + mouseY,mouseX,mouseY)
  //triangle(424, 125, 424, 154, 394, 154)

}

function leve1()
{
  wall1=createSprite(100,300,50,10)

}