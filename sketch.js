var path,jaxon;
var pathImg1,jaxon1;
var coin,coinimage;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jake_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
  coinImage = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2

jaxon = createSprite(200,300);
jaxon.addAnimation("jaxon",jake_running);
jaxon.scale = 0.6;










}

function draw() {
  background(0);

if (path.y > 400){
  path.y = height/2;
}




spawncoin();

drawSprites();
}
function spawncoin(){
  if(frameCount%70===0){
    coin = createSprite(200,100.20,20);
    coin.velocityY=3;
    coin.addImage(coinImage);
    coin.scale= 0.5;
    coin.y = Math.round(random(1,100));
    coin.depth=path.depth;
    coin.depth = coin.depth+1;
  }
}

