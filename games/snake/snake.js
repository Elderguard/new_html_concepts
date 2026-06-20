window.onload = function(){
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
    
        switch(event.key){
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

function jogo(){
    //configuração da tela
    ctx.fillStyle = "#2980B9";
    //distância borda h, distância borda v, largura, altura
    ctx.fillRect(0,0,canvas.width, canvas.height);

    //deslocamento da cobra
    positionX += velX;
    positionY += velY;
    
    //espelhamento
    if(positionX < 0){
        positionX = grid-1;
    }
    if(positionX >= grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid-1;
    }
    if(positionY > grid-1){
        positionY = 0;
    }

    
    //configuração da cobra
    ctx.fillStyle = "#00f102";
    for(let i=0; i<snake.length;i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam=3;
        }
    }

    //posicionando a cobra
    snake.push({x:positionX, y: positionY});

    //apagando
    while(snake.length > tam){
        snake.shift();
    }

    //configurando a comida
    ctx.fillStyle = "#F1C40F";
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    //comendo a comida
    if(positionX == foodX && positionY==foodY){
        tam ++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);

    }
}