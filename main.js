function tocaSom(idElemntoAudio) {
    document.querySelector(idElemntoAudio).play();

}

// variavel guardando lista de teclas para manipulaç//ão
const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while (contador < 9) {

    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    };


    contador = contador + 1;
    console.log(contador);
}
 