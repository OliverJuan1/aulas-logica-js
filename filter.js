const numeros = [1, 2, 3, 4, 5]

const pares = numeros.filter(num => num % 2 === 0)

// console.log("números pares", pares)

const produtos = [
    {
        nome: "Notebook",
        preco: 300
    },
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Mouse",
        preco: 500
    },
    {
        nome: "Monitor",
        preco: 120
    },
    {
        nome: "Teclado",
        preco: 120
    }
]

// const produtosMaioresQueMil = produtos.filter(produtos => produtos.preco > 1000)
const mouse = produtos.filter(produtos => produtos.nome === "Mouse")


console.log(mouse)
