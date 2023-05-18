
function stopMusic(idAudio) {
    const elemento = document.querySelector(idAudio);
    elemento.pause();
    elemento.currentTime = 0;
}

function playMusic(idAudio) {
    const elemento = document.querySelector(idAudio);
    elemento.play();
}


const listaDeBtn = document.querySelectorAll('.musica');
let isPlaying = false;

for (let contador = 0; contador < listaDeBtn.length; contador++) {

    const btn = listaDeBtn[contador];
    const som = btn.classList[1];
    const idAudio = `#som-${som}`;

    btn.onclick = function () {
        if (isPlaying === false) {
            playMusic(idAudio);
            btn.classList.add('tocando');
            isPlaying = true;
        } else {
            stopMusic(idAudio);
            btn.classList.remove('tocando');
            isPlaying = false;
        }
    }
}
