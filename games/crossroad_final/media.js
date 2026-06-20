//image codes

let roadImage;
let actor1Image;
let car1Image;
let car2Image;
let car3Image;

//sound codes
let backTrack;
let hitSound;
let scoreSound;

function preload(){
  //image_files
  roadImage = loadImage("image_files/road.png");
  actor1Image = loadImage("image_files/actor1.png");
  car1Image = loadImage("image_files/car1.png");
  car2Image = loadImage("image_files/car2.png");
  car3Image = loadImage("image_files/car3.png");
  carImage = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image];
  
  //sound_files
  backTrack = loadSound("sound_files/backtrack.mp3");
  hitSound = loadSound("sound_files/hit.mp3");
  scoreSound = loadSound("sound_files/score.wav");
}
