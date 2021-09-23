
         /*function nivelBasico(){
let perguntas = [1,2,3,4,5,6,7,8,9,10]
let resposta = 1
}*/

function respostaCerta() {
    document.getElementById('acertou').style.display=''
}
function reiniciar(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/index.html"
}
function respostaErrada() {
    document.getElementById('errou').style.display=''
    document.getElementById('tentarnovamente').addEventListener("click", reiniciar)
}
function proximaQuestao1(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta2.html"
}
function proximaQuestao2(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta3.html"
}

function proximaQuestao3(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta4.html"
}

function proximaQuestao4(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta5.html"
}

function proximaQuestao5(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta6.html"
}

function proximaQuestao6(){
    window.location.href="http://127.0.0.1:5501/nivelBasico/pergunta7.html"
}

function voltarAoMenu(){
    window.location.href="http://127.0.0.1:5501/menu/menu.html"
}