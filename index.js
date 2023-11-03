var nomePrincipal = document.querySelector('#principal')

var CSV = "jose daniel,24,true,25.99,02/04/1999";

var LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA = CSV.split(",");

console.info(LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA)


function trocaDeNome() {
    var novoValor = LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA;;
    nomePrincipal.innerHTML = `<h1>Nome: <span class="valor">${novoValor[0]}</span></h1>
    <h1>Idade: <span class="valor">${novoValor[1]}</span></h1>
    <h1>Tem Passagem: <span class="valor">${novoValor[2]}</span></h1>
    <h1>Valor: <span class="valor">${novoValor[3]}</span></h1>
    <h1>Data: <span class="valor">${novoValor[4]}</span></h1>`;


}

trocaDeNome()