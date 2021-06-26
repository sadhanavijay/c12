var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leafImg

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  

  var rand =  Math.round(random(1,100))
  console.log(rand)
}


function draw()
{
  background(0);
  
  edges= createEdgeSprites();

  rabbit.x = mouseX
  rabbit.collide(edges);

  spawnApple()
  spawnLeaf()
  drawSprites();
}

function spawnApple()
{
 if(frameCount%60===0)
 {   
   var apple
    apple=createSprite(280,100,40,10);
    apple.velocityY=3;
    apple.addImage("apple",appleImg);
    apple.scale=0.09;
    apple.y=Math.round(random(40,80));
    console.log(frameCount)
    rabbit.depth=apple.depth+1;
 }
 apple.lifeTime=340
}

function spawnLeaf()
{
 if(frameCount%60===0)
 {
    var leaf
    leaf=createSprite(380,100,40,10);
    leaf.velocityY=3;
    leaf.addImage("leaf",leafImg);
    leaf.scale=0.05;
    leaf.y=Math.round(random(50,300));
    console.log(frameCount)
    rabbit.depth=leaf.depth+1;
 }
  leaf.lifeTime=340;
}
