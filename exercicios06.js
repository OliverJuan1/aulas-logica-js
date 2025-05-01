// crie um array de objetos em que cada objeto é um produto, tendo como chave(nome, preco, descricao). Crie pelo menos 3 produtos .

// crie uma variavel que ira armazenar o array com os nomes dos produtos

//  crie uma segunda variavel que ira armazenar o array com os preços dos produto

// Use o laço for ou for of para exibir cada item do array da variavel de nomes no console

const produtos = [
    {
        nome: "Bola de Futebol",
        preco: 79.90,
        descricao: "Bola"
    },
    {
        nome: "Camisa de Time",
        preco: 149.90,
        descricao: "Camisa confortável, disponível de vários times"
  
    },
    {
        nome: "Fone de Ouvido Bluetooth",
        preco: 39.90,
        descricao: "Fone de ouvido sem fio com alta fidelidade e cancelamento de ruído"
    }
]

const nomesProdutos = produtos.map(produto => produto.nome)

const precosProdutos = produtos.map(produto => produto.preco)

// for (let i = 0; i < nomesProdutos.length; i++) {
//     console.log(nomesProdutos[i]);
// }

for(nome of nomesProdutos){
    console.log(nome)
}

for(preco of precosProdutos){
    console.log(preco)
}