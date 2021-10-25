var seaImg, sea
var ship, shipRunning

function preload(){
  //pre-load images
  seaImg = loadImage("sea.png")
  shipRunning = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  sea= createSprite(400,280,400,80);
  sea.addImage(seaImg)
  sea.velocityX = 5;
  sea.scale = 1.2;

  ship = createSprite(150,400,50,80);
  ship.addAnimation("running", shipRunning);
  ship.scale = 0.4;
}


function draw() {
  background(0);

  if (sea.x < 0){
    sea.x = sea.width/6;
 }
  drawSprites();
}
 