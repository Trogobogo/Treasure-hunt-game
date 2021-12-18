
var main,bgimage,bg
var gameState="start"




 
function setup() {
  createCanvas(1200,900);
  //bg=createSprite(300,80)
  //bg.scale=3.5
  //bg.addImage(bgimage)
  main=createSprite(100, 700, 50, 50);


}

function draw() {
  background(0);  
  if(gameState==="start"){
   textSize(20)
  text("Welcome to treasure hunt!!!",200,300)
  text("Press space to start the game",250,350)
  
}
  if(gameState==="play"){
    textSize(25)
    text("Hint 1-I rhyme with the word Lair",500,600)
  }
  if (keyDown("space")){
    
    gameState="play"
  }

   if(keyDown("w")){
     main.y=main.y-5
   }
   if(keyDown("s")){
    main.y=main.y+5
  }
  if(keyDown("a")){
    main.x=main.x-5
  }
  if(keyDown("d")){
    main.x=main.x+5
  }

  drawSprites();
}

