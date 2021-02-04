var gamestate=1

function preload(){
  load2=loadImage("images/load2.png")
  back1=loadImage("images/startingimage.png")
}

function setup(){
  createCanvas(2000,800);
}

function draw(){
    background('white')
    if(gamestate===1){
back=createSprite(800,650,1200,800);
back.addImage(back1);
back1.scale=0.000025
loading=createSprite(650,450,20,20);
loading.addImage(load2)
loading.scale=0.2
    }
    
    
    
    
    drawSprites();
}   

