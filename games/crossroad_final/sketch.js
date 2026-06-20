window.onload = function () {
  //pegar o elemento canvas criado no html
  canvas = document.getElementById("canvas");
  //contextualizar jogo 2d
  ctx = canvas.getContext("2d");

  //variáveis
  snake = [];
  positionX = 10;
  positionY = 10;
  foodX = 15;
  foodY = 15;
  velX = 0;
  velY = 0;
  grid = 20;
  tam = 3;
  gameSpeed = 100;

  //chamada da função jogo a cada 100 milisegundos
  setInterval(jogo, gameSpeed);

  //controles
  document.addEventListener("keydown", function identificaTecla(event) {
    let key = event.code || event.key;
    // key = lower(key);

    switch (event.key) {
      // seta direita = ArrowRight
      case "ArrowRight":
      case 'd':
        velX = 1;
        velY = 0;
        break;

      // seta esquerda = ArrowLeft
      case "ArrowLeft":
      case 'a':
        velX = -1;
        velY = 0;
        break;
      // seta cima = ArrowUp
      case "ArrowUp":
      case "w":
        velX = 0;
        velY = -1;
        break;
      // seta baixo = ArrowDown
      case "ArrowDown":
      case "s":
        velX = 0;
        velY = 1;
        break;
    }
  });
}

function jogo() {
  //configuração da tela
  ctx.fillStyle = "#2980B9";
  //distância borda h, distância borda v, largura, altura
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//configurando a comida
ctx.fillStyle = "#F1C40F";
ctx.fillRect(foodX * grid, foodY * grid, grid - 1, grid - 1);

//comendo a comida
if (positionX == foodX && positionY == foodY) {
  tam++;
  foodX = Math.floor(Math.random() * grid);
  foodY = Math.floor(Math.random() * grid);

}


function setup() {
  createCanvas(500, 400);
  backTrack.loop();
}


function draw() {
  background(roadImage);
  showActor1();
  showCar();
  carMovement();
  actor1Movement();
  carRespawn();
  verifyCollision();
  //circle(xActorPosition+15, yActorPosition+15, 25);
  showScoreBoard();
  Score();
}


