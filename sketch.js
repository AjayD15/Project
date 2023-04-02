var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var maze, maze_1, border;




function preload(){
  Knight_Image = loadImage("Knight.png");
  Goblin_Image = loadImage("Goblin.png");
  Diamond_Image = loadImage("Diamond.png");

}

function setup() {
  createCanvas(2000,1000);
  Knight = createSprite(width/2+50,height/2);
  Knight.addImage(Knight_Image);
  Knight.scale = 0.2
  Knight.debug = true;
  leftline = createSprite(10,500,20,1000);
  rightline = createSprite(1990,500,20,1000);
  topline = createSprite(1000,10,2000,20);
  bottomline = createSprite(1000,990,2000,20);
  wall_1 = createSprite(100,600,200,20);
  wall_2 = createSprite(500,800,600,20);
  wall_3 = createSprite(500,400,200,20);
  wall_4 = createSprite(900,200,200,20);
  wall_5 = createSprite(900,400,200,20);
  wall_6 = createSprite(900,600,200,20);
  wall_7 = createSprite(1300,400,200,20);
  wall_8 = createSprite(1400,800,400,20);
  wall_9 = createSprite(1500,600,200,20);
  wall_10 = createSprite(1700,200,200,20);
  wall_11 = createSprite(1900,400,200,20);
  wall_12 = createSprite(1900,800,200,20);
  hoz_1 = createSprite(400,300,20,200);
  hoz_2 = createSprite(600,300,20,600);
  hoz_3 = createSprite(800,100,20,200);
  hoz_4 = createSprite(800,700,20,200);
  hoz_5 = createSprite(1000,100,20,200);
  hoz_6 = createSprite(1000,500,20,200);
  hoz_7 = createSprite(1000,900,20,200);
  hoz_8 = createSprite(1200,700,20,200);
  hoz_9 = createSprite(1200,300,20,200);
  hoz_10 = createSprite(1400,500,20,200);
  hoz_11 = createSprite(1400,900,20,200);
  hoz_12 = createSprite(1600,100,20,200);
  hoz_13 = createSprite(1600,700,20,200);
  hoz_14 = createSprite(1800,100,20,200);
  hoz_15 = createSprite(1800,500,20,200);
 
  maze = new Group();
  maze.add(wall_1);
  maze.add(wall_2);
  maze.add(wall_3);
  maze.add(wall_4);
  maze.add(wall_5);
  maze.add(wall_6);
  maze.add(wall_7);
  maze.add(wall_8);
  maze.add(wall_9);
  maze.add(wall_10);
  maze.add(wall_11);
  maze.add(wall_12);
  maze_1 = new Group();
  maze_1.add(hoz_1);
  maze_1.add(hoz_2);
  maze_1.add(hoz_3);
  maze_1.add(hoz_4);
  maze_1.add(hoz_5);
  maze_1.add(hoz_6);
  maze_1.add(hoz_7);
  maze_1.add(hoz_8);
  maze_1.add(hoz_9);
  maze_1.add(hoz_10);
  maze_1.add(hoz_11);
  maze_1.add(hoz_12);
  maze_1.add(hoz_13);
  maze_1.add(hoz_14);
  maze_1.add(hoz_15);
  border = new Group();
  border.add(leftline);
  border.add(rightline);
  border.add(topline);
  border.add(bottomline);
  maze.setColorEach("black");
  maze_1.setColorEach("black");
  border.setColorEach("black");
  diamond = new Group();
  
 
}

function draw() {
  
  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){
   createGoblin(); 
   createDiamonds();
   Knight_move();
   maze.displace(Knight);
   maze_1.displace(Knight);
   border.displace(Knight);
   diamond_pickUp();
   
  }

   else if (gameState === END) {
    if(score=5){

    }     
   }
  
 
  
  
  

  drawSprites();
}
 
function createGoblin() {
  if(frameCount%1000==0) {
    Goblin = createSprite(Math.round(random(50, width-50)),Math.round(random(50, height-50)));
    Goblin.addImage(Goblin_Image);
    Goblin.scale = 0.2;
  }  
}

function createDiamonds() {
  if(frameCount%200==0) {
    Diamond = createSprite(Math.round(random(50, width-50)),Math.round(random(50, height-50)));
    Diamond.addImage(Diamond_Image);
    Diamond.debug = true;
    Diamond.scale = 0.1;
    diamond.add(Diamond);
  }
}

function Knight_move() {
  if(keyDown("UP_ARROW")) {
    Knight.y -= 5;
  }
  if(keyDown("DOWN_ARROW")) {
    Knight.y += 5;
  }
  if(keyDown("LEFT_ARROW")) {
    Knight.x -= 5;
  }
  if(keyDown("RIGHT_ARROW")) {
    Knight.x += 5;
  }
}

function diamond_pickUp() {
  if(Knight.isTouching(diamond)) {
  score = score + 1;
  //diamond.remove(Diamond);
  Diamond.destroy();
  //diamond.destroyEach();
  
  }
}
