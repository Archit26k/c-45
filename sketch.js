var gameState;
var home = 0;
var play = 1;
var LoseEnd =2;
var WinEnd = 3;
var back12

var play;
function preload(){
  playImg= loadImage("images/play.png")
  backImg = loadImage("images/home.jpg")
  back1Img = loadImage("images/back-1.png")
  back2Img = loadImage("images/tower.png")
}
function setup() {

  createCanvas(windowWidth,windowHeight);
 play = createSprite(windowWidth/2-400, windowHeight/2-100, 50, 50);
 play.addImage(playImg);
 play.scale = 0.5;
 
 back12 = createSprite(windowWidth/2 , windowHeight/2 , windowWidth , windowHeight);
 back12.addImage(back1Img);
 back12.scale = 0.3
 back12.visible = false;

}

function draw() {
  background(backImg);  

  if(mousePressedOver(play)){
    gameState = 1;
    console.log("1")
    play.visible = false;
    back12.visible = true;
  }
  if(gameState===1){
    background(back2Img)
    
  }
//  if (gameState = 1){
//    play.destroy()
//  }
  drawSprites();
}
// function mousePressed(){
//   if(mousePressed)
// }