const produto01 ={
    nome: "Garrafa",
    preco: 20.00 ,
    quantidade: 3
}

const produto02 ={
    nome: "Abridor" ,
    preco: 30.00 ,
    quantidade: 2
}
console.log(`O valor total final é ${(produto01.preco * produto01.quantidade)+ (produto02.preco * produto02.quantidade)}`)
