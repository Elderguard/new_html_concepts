
//car codes

//car variables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40,96,150,210,270,318];
let carSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carWidth = 50;
let carHeight = 40;
//let carWidth = [50, 50, 50];
//let carHeight = [40, 40, 40];

//show car
function showCar(){
  for(let i=0; i < carImage.length; i++){
  image(carImage[i], xCars[i], yCars[i], carWidth, carHeight);
  }
}

//car movement
function carMovement(){
  for(let i=0; i< xCars.length; i++){
    xCars[i] -= carSpeed[i];
  }
}

//car respawn
function carRespawn(){
  for(let i=0; i< xCars.length; i++){
    if(outOfScreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

//out of screen condition
function outOfScreen(out){
  return out < -50;
}