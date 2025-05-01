const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)

const usuarios = [
    {
        nome:"Oliver",
        idade: 16

    },
    {
        nome:"Juan",
        idade: 26
    },
    {
        nome:"Hariel",
        idade: 30
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("nomes de usuario", nomesUsuario)