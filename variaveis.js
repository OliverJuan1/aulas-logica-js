// declaração de variável com var

// var nome = "Oliver"

// var nome = "Raphael"

// declaração de variável com let

// let nome = "Oliver"

// nome ="Raphael"

// variável declarada com const

const nome = "Oliver"  // string

const sobrenome = "Rodrigues"

const valor = 21.90  // number

const islogin = false  // boolean

let preco  // undefined

const endereco = null  //null  

const alunos = ["João", "Maria", "José"] //array

const alunoDoSenai = {
    nome: "Oliver",
    sobrenome: "Rodrigues",
    turno: "noturno",
    idade: 16,
    cursos: ["inclusão digital", "programação web"]
}


const alunosDoSenai = [
    {
        login:"oliver",
        email:"oliver@gmail.com",
        cursos:["games","web"]
    },
    {
        login:"maria",
        email:"maria@gmail.com",
        cursos:["design","games"]
    }
]

// console.log(nome + " " + sobrenome)

console.log(`Meu nome completo é ${nome} ${sobrenome} ${4 + 4}`)


// console.log(alunosDoSenai[1].cursos[0]) 

// console.log(alunos[0]) //pega o valor do indice do array 