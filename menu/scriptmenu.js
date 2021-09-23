function nivelBasico() {
    window.location.href = "http://127.0.0.1:5501/nivelBasico/index.html"
}
document.getElementById('basico').addEventListener('click', nivelBasico)

function nivelIntermediario() {
    window.location.href = "http://127.0.0.1:5501/nivelIntermediario/index.html"
}
document.getElementById('inter').addEventListener('click', nivelIntermediario)

function menuPrincipal() {
    window.location.href = "http://127.0.0.1:5501/menuprincipal/menu.html"
}
document.getElementById('voltar').addEventListener('click', menuPrincipal)