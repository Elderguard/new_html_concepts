//actor1 variables
let xActorPosition = 85;
let yActorPosition = 366;
let ActorWidth = 30;
let ActorHeight = 30;
let hit = false;
let myScore = 0;

//show actor
function showActor1(){
  image(actor1Image, xActorPosition, yActorPosition, ActorWidth, ActorHeight);
}

//actor movement
function actor1Movement(){
  if (keyIsDown(UP_ARROW)){
    yActorPosition -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(playerCanMoveDown()){
      yActorPosition += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(playerCanMoveLeft()){
      xActorPosition -= 3;      
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(playerCanMoveRight()){
      xActorPosition += 3;      
    }
  }
}

//verify collision
function verifyCollision(){
  for (let i = 0; i < carImage.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActorPosition+15, yActorPosition+15, 25);
    if(hit){
     respawnActor();
     hitSound.play();
      if(scoreHigherThanZero()){
        myScore -=1;
      }
    }
  }
}

function respawnActor(){
 yActorPosition = 366;
 xActorPosition = 100;
}

function showScoreBoard(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(myScore, width/5, 27);
}

function Score(){
  if (yActorPosition < 15){
    myScore +=1;
    respawnActor();
    scoreSound.play();
  }
}

function scoreHigherThanZero(){
  return myScore>0;
}

function playerCanMoveDown(){
  return yActorPosition < 366;
}
function playerCanMoveLeft(){
  return 0<xActorPosition;
}
function playerCanMoveRight(){
  return xActorPosition<470;
}