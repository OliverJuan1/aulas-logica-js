// crie uma função que receba um array chamado desmembraArray que execute um laço for e exiba todos os itens um abaixo do outro

function desmembraArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const meuTime = ["Paysandu", "Santos", "Ceará", "Avai"];

desmembraArray(meuTime);