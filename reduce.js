// reduce

const num = [2,5,7,10]

const soma = num.reduce((total,num) => total + num, 0)

// console.log(soma)

const produtos = [
    {
        nome: "Notebook",
        preco: 3000
    },
    {
        nome: "Mouse",
        preco: 1000
    },
    {
        nome: "Mouse ",
        preco: 777
    },
    {
        nome: "Monitor",
        preco: 3000
    },
    {
        nome: "Teclado",
        preco: 0
    }
]

const total = produtos.reduce((soma,produto) => soma + produto.preco, 0)

console.log(total)