function respostaCerta() {
    document.getElementById('acertou').style.display=''
}
function reiniciar(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/index.html"
}
function respostaErrada() {
    document.getElementById('errou').style.display=''
    document.getElementById('tentarnovamente').addEventListener("click", reiniciar)
}
function proximaQuestao1(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta2.html"
}
function proximaQuestao2(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta3.html"
}

function proximaQuestao3(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta4.html"
}

function proximaQuestao4(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta5.html"
}

function proximaQuestao5(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta6.html"
}

function proximaQuestao6(){
    window.location.href="http://127.0.0.1:5500/nivelBasico/pergunta7.html"
}

function voltarAoMenu(){
    window.location.href="http://127.0.0.1:5500/menu/menu.html"
}

