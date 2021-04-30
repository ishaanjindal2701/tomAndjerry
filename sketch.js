var cat,jerry;
var cImg,bgImg;











function preload() {
    //load the images here
    cImg=loadImage("images/cat1.png");
    bgImg=loadImage("images/garden.png");
    c2Img=loadImage("images/cat2.png");
    jImg=loadImage("images/mouse1.png");
    j2img=loadImage("images/mouse3.png");
  c3Img=loadImage("images/cat4.png");
  j3Img=loadImage("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,700,10,10);
cat.addImage(cImg);
cat.scale=0.1;
cat.depth=cat.depth+1;

jerry=createSprite(200,700,10,10);
jerry.addImage(jImg);
jerry.scale=0.1


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyWentDown("left")){
        cat.addImage(c2Img);
        cat.velocityX=-3
        jerry.addImage(j2img);
    }
    if(keyWentUp("left")){
        cat.addImage(cImg);
        cat.velocityX=0
      
    }
    if(cat.isTouching(jerry)){
        cat.addImage(c3Img)
        jerry.addImage(j3Img)
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
