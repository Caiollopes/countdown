const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");



// const dateControl = document.getElementById("date");
// date.value = "2024-06-05";

const data = "30 Apr 2024";


function countdown(){
    const dataNova = new Date(data);
    const dataAtual = new Date();

    const segundosTotal = (dataNova - dataAtual) / 1000;

    const dias = Math.floor(segundosTotal / 3600 / 24);
    const horas = Math.floor(segundosTotal / 3600) % 24;
    const minutos = Math.floor(segundosTotal / 60) % 60;
    const segundos = Math.floor(segundosTotal) % 60;


    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = formatTime(horas);
    document.getElementById("minutos").innerHTML = formatTime(minutos);
    document.getElementById("segundos").innerHTML = formatTime(segundos);
    
}

function formatTime(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}


countdown();
setInterval(countdown, 1000);