var iss,spacecraft,hasDocked=false;
var issImage,spaceCraftLeft,spaceCraftRight,spaceCraftUp,spaceCraftDown,bgImg;

function preload(){
  issImage=loadImage("images/iss.png");
  spaceCraftLeft=loadImage("images/spacecraft4.png");
  spaceCraftRight=loadImage("images/spacecraft3.png");
  spaceCraftDown=loadImage("images/spacecraft1.png");
  spaceCraftUp=loadImage("images/spacecraft2.png");
bgImg=loadImage("images/spacebg.jpg");
}





function setup() {
  createCanvas(600,350);
iss=createSprite(330,130);
iss.addImage(issImage);
iss.scale=0.25;

spaceCraft=createSprite(285,240);
spaceCraft.addImage(spaceCraftDown);
spaceCraft.scale=0.15;
}

function draw() {
  background(bgImg);  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1);
  }


  if(keyDown(UP_ARROW)){
  spaceCraft.y=spaceCraft.y-1;
  spaceCraft.addImage(spaceCraftUp);
}

if(keyDown(DOWN_ARROW)){
  spaceCraft.y=spaceCraft.y+1;
     spaceCraft.addImage(spaceCraftDown);
}

if(keyDown(RIGHT_ARROW)){
  spaceCraft.x=spaceCraft.x+1;
  spaceCraft.addImage(spaceCraftRight);
}

if(keyDown(LEFT_ARROW)){
  spaceCraft.x=spaceCraft.x-1
  spaceCraft.addImage(spaceCraftLeft);
}
if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
hasDocked=true;
textSize(25);
fill("white");
text("DOCKING SUCCESSFUL",200,300);
}
  drawSprites();
}