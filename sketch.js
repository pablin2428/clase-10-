var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  ground = createSprite(200,180,400,20)
  ground.addImage("ground",groundImage)
  //agregar tamaño y posición al Trex
  trex.scale = 0.4;
  trex.x = 50
}


function draw(){
  //establecer color de fondo.
  background("white");
  ground.velocityX = -30
  //cargar la posición Y del Trex
  console.log(trex.y)
  if(ground.x<0){
    ground.x = ground.width/2
  }
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")){
    trex.velocityY = -8;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(ground)
  drawSprites();
}
