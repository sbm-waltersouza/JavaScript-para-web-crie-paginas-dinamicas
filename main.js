function tocaSomPom() {
    document.querySelector(listaDeTeclas).play();

}

// variavel guardando lista de teclas para manipulaç//ão
const listaDeTeclas = document.querySelectorAll('.tecla');


listaDeTeclas[0].onclick = tocaSomPom;
