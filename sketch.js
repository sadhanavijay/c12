var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves
var appleImg,leavesImg

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaves.png")
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
  var select_sprites=Math.round(random(1,2));
  if(frameCount%80===0)
  {
    if(select_sprites===1)
    {
      spawnApple()
    }
    else if (select_sprites===2)
    {
      spawnLeaves()
    }
  }
  
  
  drawSprites();
}

function spawnApple()
{
 
    apple=createSprite(280,100,40,10);
    apple.velocityY=3;
    apple.addImage("apple",appleImg);
    apple.scale=0.09;
    apple.x=Math.round(random(40,380));
    console.log(frameCount)
    apple.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
    apple.lifetime=340
 
 
}

function spawnLeaves()
{
 
    leaves=createSprite(380,100,40,10);
    leaves.velocityY=3;
    leaves.addImage("leaves",leavesImg);
    leaves.scale=0.05;
    leaves.x=Math.round(random(50,350));
    console.log(frameCount)
    leaves.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
    leaves.lifetime=340
  
  
}