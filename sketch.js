
function preload() {
    gardenImg=loadImage("images/garden.png")
    catImg1=loadImage("images/cat1.png")
    catImg2=loadImage("images/cat2.png")

mouseImg1=loadImage("images/mouse1.png")
mouseImg2=loadImage("images/mouse2.png")
}

function setup(){
    createCanvas(1000,1000);
   mouse=createSprite(900,800,25,25)
   mouse.addImage(mouseImg1)
   mouse.scale=0.2
   cat=createSprite(200,800,100,100)
   cat.addImage(catImg1)
   cat.scale=0.2
}

function draw() {

    background(gardenImg);
  
 if(cat.x-mouse.x <(cat.width-mouse.width)/2) {
    cat.velocityX=-0
    mouse.velocityX=0
 }
    drawSprites();
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){
    cat.velocityX=-5
    mouse.velocityX=10
    mouse.addAnimation("mouseteasing", mouseImg2)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay= 25
}
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){


  }

}
