var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


// Carregando imagens

var bird = new Image();
bird.src = "./images/bird.png";
var bg = new Image();
bg.src = "./images/bg.png";
var chao = new Image();
chao.src = "./images/chao.png";
var canocima = new Image();
canocima.src = "./images/canocima.png"
var canobaixo = new Image();
canobaixo.src = "./images/canobaixo.png"

// variáveis
var score = 0;
var espaco_entre_canos = 150 - score;
var constant;
var bX = 33;
var bY = 200;
var gravity = 0.6;
var cano = [];

cano[0] = {
    x : canvas.width,
    y : 0
}

// Carregando sons
var flyAudio = new Audio ();
flyAudio.src = "./sounds/fly.mp3";
var scoreAudio = new Audio();
scoreAudio.src = "./sounds/score.mp3";

// funções

//função de captura de tecla
document.addEventListener("keydown",voa);
function voa(){
    bY -= 50;
    flyAudio.play();
}

//função de jogo

function jogo() {

    //desenhando o background
    //drawImage(img,X,Y)
    ctx.drawImage(bg,0,0);

    //desenhando o chão
    ctx.drawImage(chao,0,canvas.height - chao.height);

    //desenhando canos
    for(let i=0; i< cano.length; i++){
        //Posição do cano inferior
        constant = canocima.height + espaco_entre_canos;
        //Configurando o cano de cima
        ctx.drawImage(canocima, cano[i].x,cano[i].y);
        //Configurando o cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant);
        //Movimentação do cano
        cano[i].x = cano[i].x -0.5;
        if(cano[i].x ==100){
            cano.push({
                x : canvas.width,
                y: Math.floor(Math.random()*canocima.height)-canocima.height
            })
        }

        // Teste de colisão do pássaro com os canos
        // Pássaro entre as bordas do cano
		if((bX + bird.width >= cano[i].x && bX <= cano[i].x + canocima.width)
			// Pássaro colidiu com o cano de cima ou com o cano de baixo
			&& (bY <= cano[i].y + canocima.height || bY+bird.height >= cano[i].y+constant)) {
			location.reload();
		}

        // if(bY + bird.height >= canvas.height - chao.height){
        //     location.reload();
        // }

		// Marcando pontos
		if(cano[i].x == 5){
			score = score + 1;
			scoreAudio.play();
		}
    }

    //desenhando o passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravity;

    requestAnimationFrame(jogo);
}

//Programa principal
jogo();