var hora = document.querySelector("#hora")
var meio = document.querySelector("#meio")
var minuto = document.querySelector("#minuto")
const form = document.querySelector('form')
const som = new Audio('som/somfnaf4.mp3')

function relogio() {
    horario = new Date()
    horaAtual = horario.getHours()
    minutoAtual = horario.getMinutes()
    
    hora.innerHTML = horaAtual.toString().padStart("2", 0)
    minuto.innerHTML = minutoAtual.toString().padStart("2", 0)
    horaAtualFormatada = (horaAtual.toString().padStart("2", 0) + ':' + minutoAtual.toString().padStart("2", 0))
    //
    tocar = localStorage.getItem('horaD').toString().padStart("2", 0)
    if (horaAtualFormatada == tocar) {
        hora.classList.add('blinking');
        meio.classList.remove('blinkingSlow');
        meio.classList.add('blinking');
        minuto.classList.add('blinking');
        form.classList.add('esconder')

        som.currentTime = 0.5
        som.play()

        document.querySelector("#horaDespertador").value = ""
        document.querySelector("#horaDespertador").classList.remove('tudoRed')
        document.querySelector("button").classList.remove('tudoRed')

        document.querySelector("#horaDespertador").readOnly = false
        document.querySelector("button").readOnly = false
    } else {
        hora.classList.remove('blinking');
        meio.classList.add('blinkingSlow');
        minuto.classList.remove('blinking');
        form.classList.remove('esconder')
        som.pause()
        som.currentTime = 0
    }
}

window.onload = relogio
setInterval(relogio, 1000)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    var horaDespertador = document.querySelector("#horaDespertador").value
    localStorage.setItem('horaD', horaDespertador)

    document.querySelector("#horaDespertador").classList.add('tudoRed')
    document.querySelector("button").classList.add('tudoRed')

    document.querySelector("#horaDespertador").readOnly = true
    document.querySelector("button").readOnly = true
})