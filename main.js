function tocaSom(idElemntoAudio) {
    document.querySelector(idElemntoAudio).play();

}

// variavel guardando lista de teclas para manipulaç//ão
const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while (contador < 9) {

    const tecla = listaDeTeclas[contador];

    const istrumento = tecla.classList[1];


    // templete string
    const idAudio = `#som_${istrumento}`;
   // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };


    contador = contador + 1;
   // console.log(contador);
}
