// Crie um programa que verifique o faturamento médio dos 3 trimestres de 2024, sendo

// 1° trimestre => 10.650

// 2° trimestre => 20.000

// 3° trimesrte => 35.000

// se for maior que 25.000, o faturamento médio é o esperado. Mas, se o faturamento for menor do que 25.000, o faturamento médio está abaixo do esperado

// utilize um objeto para registrar os detalhes . Utilize Desestruturação para facilitar o acesso aos elementos, e fazer os cálculos. Por fim, Use um condicional


const faturamento = {
    primeiroTrimestre: 10.650,
    segundoTrimestre: 20.000,
    terceiroTrimestre: 35.000
}

const { primeiroTrimestre, segundoTrimestre, terceiroTrimestre } = faturamento

const faturamentoMedio = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

if (faturamentoMedio >= 25000){
    console.log(`O faturamento é esperado: ${faturamentoMedio}`)
} else {
    console.log(`O faturamento é abaixo do esperado: ${faturamentoMedio}` )
}