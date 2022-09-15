const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");


 
const jump = function() {
    mario.classList.add("jump")

    setTimeout(function(){
        mario.classList.remove("jump");
    },500);

}


const loop = setInterval(function(){
    const pipePosition = pipe.offsetLeft;// O '+' na frente do window é para converter para numero
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

    console.log(marioPosition);
    //Condição para o jogo acabar
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop); //Quando acaba o jogo, o loop para de rodar
    } 
},10);




//document.addEventListener("keypress",jump);

document.addEventListener('keypress', (event)=> {    
    if(event.code == 'Space'){
        mario.classList.add("jump")

        setTimeout(function(){
        mario.classList.remove("jump");
        },500);
    }
    
    
    console.log(event.key);
    console.log(event.code);
});


function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       console.log("Enter key is pressed");
    } else {
       console.log("nada")
    }
 }