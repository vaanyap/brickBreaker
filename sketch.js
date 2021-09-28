const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, groundPic;
var bricks,brick1,brickPic;
var ball,ballPic;
var wall1,wall2;
var lives,lives3, lives1,lives2,live0; 

var brickState = 0;
var gameState = 0;
var counter=0;
var life = 3;

var gameOver, gameOverPic;
var winImg,win;

function preload(){
  groundPic = loadImage('groundPIC.png');
  brickPic = loadAnimation('bricksPic.png');
  brokenBrick = loadAnimation('broken brick.png')
  lives3 = loadAnimation('lives3.png');
  lives2 = loadAnimation('lives2.png')
  lives1 = loadAnimation('lives1.png')
  ballPic = loadImage('ballPic.png');
  gameOverPic = loadImage('gameOverImg.png')
  live0 = loadAnimation('lives0.png');
  winImg= loadImage('winningImg.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  angle = -PI / 4;

  //MAKING THE GROUND
  ground = createSprite(windowWidth/2-25,windowHeight-100,200,20);
  ground.addImage(groundPic);
  ground.scale = 0.28
  
  //object = Bodies.circle(windowWidth/2-50,windowHeight-300,20,20)
  //MAKING THE LIVES
  lives = createSprite(50, windowHeight-30, 20,20);
  lives.addAnimation('life3',lives3);
  lives.addAnimation('life2',lives2);
  lives.addAnimation('life1',lives1);
  lives.addAnimation('life0',live0);

  lives.changeAnimation('life3');
  lives.scale = 0.5

  gameOver = createSprite(windowWidth/2+50,windowHeight/2,30,30);
  gameOver.addImage(gameOverPic);
  gameOver.scale = 0.9
  gameOver.visible = false;

  win = createSprite(windowWidth/2,windowHeight/2,50,50);
  win.addImage(winImg);
  win.scale = 2;
  win.visible= false;

  options = {
    isStatic: true,
    //restitution:1.0,
    density: 1.0
  }

  brickPic.scale = 0.1
  fill('white');
 // ground = Bodies.rectangle(windowWidth/2-25,windowHeight-100,500,20,options);
  wall1 = createSprite(100,windowHeight/2,10,windowHeight);
  wall2 = createSprite(windowWidth-100,windowHeight/2,10,windowHeight);
  wall3 = createSprite(windowWidth/2,5,windowWidth-190,10);
  //wall4 = createSprite(windowHeight-60,windowHeight-10,windowWidth-200,10);
  //ball = new Ball(windowWidth/2-25,windowHeight-150);
  

  
  ball = createSprite(windowWidth/2-25,windowHeight-150,20,20);
  ball.addImage(ballPic);
  ball.scale = 0.2


  bricks = new Group ();

  for(var i = 190;i<=1230; i=i+80 ){
    for(var j = 50; j<410; j=j+40){
      brick1 = createSprite(i,j,50,10);
   // brick1.addImage(brickPic)

   brick1.addAnimation('brick',brickPic);
  brick1.addAnimation('broken',brokenBrick);
  brick1.changeAnimation('brick');
  brick1.scale = 0.4
   
      
      bricks.add(brick1);
  }
}

//bricks[0].destroy()

  
 /*
  brick2 = new Brick(430,10, 50,10,brickPic);
  brick3 = new Brick(510,10, 50,10,brickPic);
  brick4 = new Brick(590,10, 50,10,brickPic);
  brick5 = new Brick(670,10, 50,10,brickPic);
  brick6 = new Brick(750,10, 50,10,brickPic);
  brick7 = new Brick(830,10, 50,10,brickPic);
  brick8 = new Brick(910,10, 50,10,brickPic);
  brick9 = new Brick(990,10, 50,10,brickPic);
  brick10 = new Brick(1070,10,50,10,brickPic);
  brick11 = new Brick(1150,10, 50,10,brickPic);

  brick12 =  new Brick(350,40, 50,10,brickPic);
  brick13 = new Brick(430,40, 50,10,brickPic);
  brick14 = new Brick(510,40, 50,10,brickPic);
  brick15 = new Brick(590,40,50,10,brickPic);
  brick16 = new Brick(670,40, 50,10,brickPic);
  brick17 = new Brick(750,40, 50,10,brickPic);
  brick18 = new Brick(830,40, 50,10,brickPic);
  brick19 = new Brick(910,40, 50,10,brickPic);
  brick20 = new Brick(990,40, 50,10,brickPic);
  brick21 = new Brick(1070,40, 50,10,brickPic);
  brick22 = new Brick(1150,40, 50,10,brickPic);



  rectMode(CENTER);
  imageMode(CENTER);
  Engine.run(engine);
World.add(world,wall1);
World.add(world,wall2);
World.add(world,wall3);
World.add(world, wall4);
World.add(world, object);
World.add(world,ground);
*/


}


function draw() 
{
  background('black');
  Engine.update(engine);
  ground.x = mouseX
  x= 1;
  if(mousePressedOver(ball)){
    console.log("Vaanya")
    console.log(gameState)
    if(gameState==0){
      ball.velocityX = 15;
      ball.velocityY =-15;
      gameState=1;

      
    }
  
    
  }
if(ball.y>windowHeight-100){
  dead();
}
  

  //ellipseMode(RADIUS);
  //ellipse(object.position.x, object.position.y, 20,20)
  //rect( ground.position.x, ground.position.y,500,20)
 
if(gameState==1){

ball.bounceOff(bricks,breakBricks);

ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
//ball1.bounceOff(wall4);
ball.bounceOff(ground)

ground.bounceOff(wall1);
ground.bounceOff(wall2);
ground.bounceOff(wall3)

}

if(gameState==0){
  textSize(20);
  text('Click Ball To Start', windowWidth/2-100, windowHeight/2+70);
  text('USE THE UP ARROW TO INCREASE SPEED', windowWidth/2-230, windowHeight/2+90);
  text('USE THE DOWN ARROW TO DECREASE SPEED', windowWidth/2-250, windowHeight/2+110);
  ball.x= windowWidth/2-25;
ball.y =windowHeight-150;
}

if(gameState==1){
  ball.bounceOff(bricks,breakBricks);

ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
//ball1.bounceOff(wall4);
ball.bounceOff(ground)

ground.bounceOff(wall1);
ground.bounceOff(wall2);
ground.bounceOff(wall3)


//ground.x=windowWidth/2-25;
//ground.y= windowHeight-100;

//ball.velocityX = 15;
//ball.velocityY =-15;
//console.log(life)

}


if(gameState ==2){
  gameOver.visible = true;
  ball.destroy();
  lives.changeAnimation('life0');
  //bricks[brick1].destroy();
  bricks.destroyEach();

}
if(bricks.length==0 && gameState !==2){
  win.visible = true;

}




if(ball.bounceOff(bricks,breakBricks)){
  brickState=1;
}






/*
  if(ball1.isTouching(bricks)){
    
    if(ball1.isTouching(bricks)){
      bricks.remove();
    }
    bricks.changeAnimation('broken');
  }
  */

/*
if(ball1.isTouching(wall1)||ball1.isTouching(wall2)||ball1.isTouching(wall3)||ball1.isTouching(wall4)){
  //ball1.velocityX = -1*ball1.velocityX;
 // ball1.velocityY = -1*ball1.velocityY;
  ball1.bounceOff()
}
*/
/*if (keyIsDown(65)) {
  console.log('no');
  ground.position.x= ground.position.x-10;
  console.log(ground.position.x)
}

*/

drawSprites();
}

/*
function showBalls(ball, index) {
  ball.display();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
}

*/
function keyPressed(){
 
  if (keyCode === UP_ARROW) {
    ball.velocityX =20
    ball.velocityY =20
    console.log(ball.velocityX)
    console.log(ball.velocityY);
   /* //Body.setAngle(ball.body, ball.angle)
   // ball.shoot();  
    console.log('hello');
    //Matter.Body.setStatic(ball.body, false);
    
  //Body.applyForce(ball.body,{x:ball.body.position.x,y:ball.body.position.y},{x:20,y:-30 });
   //
   
  }*/
  
  //Body.setVelocity(ball.body, { x: 20, y: -20}); 

//console.log('hello');
//console.log(bricks);
//console.log(ball)
console.log('hfbwdqa')

}
if (keyCode === DOWN_ARROW) {
  ball.velocityX =14
  ball.velocityY =14
  console.log(ball.velocityX)
  console.log(ball.velocityY);

}

}



function breakBricks(ball,brick1){

 
    brick1.destroy();

  //console.log(x)
}


function dead(){
  life-=1;
  if(life>=1){
    gameState=0
  }
  if(life==0){
    gameState=2;
  
  }
  if(life==1){
    lives.changeAnimation('life1');
    lives.scale = 0.4;

  }
  if(life==2){
    lives.changeAnimation('life2');
    lives.scale = 0.4;
  }
}