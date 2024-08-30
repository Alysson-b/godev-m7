// obejeto
const menina  = {
    nome: 'clara',
    idade: 25,
    cidade: 'brasilia'
}

// a forma normal de acessar um obejo
function informaçoes(manina){
    const nome = menina.nome
    const idade = menina.idade
    const cidade = menina.cidade


    console.log(`nome: ${nome}`)
    console.log(`idade: ${idade}`)
    console.log(`cidade: ${cidade}`)
}
informaçoes(menina);

// agora usando a desestruturaçao

function informaçoes({nome, idade, cidade}){
    console.log(`nome: ${nome}`)
    console.log(`idade: ${idade}`)
    console.log(`cidade: ${cidade}`)
}
informaçoes(menina);






// outro exemplo dessa vez com array

const numbers = [1, 2, 3, 4, 5]

function numeros(number){
    
    const numero1 = number[0]
    const numero2 = number[1]
    const numero3 = number[2]

    console.log(`primeiro: ${numero1}`)
    console.log(`segundo: ${numero2}`)
    console.log(`terceiro: ${numero3}`)
}
numeros(numbers)

// Agora DESESTRUTURADO //

const number = [1, 2, 3, 4, 5]

function numeros([numero1, numero2, numero3]){
    
    console.log(`primeiro: ${numero1}`)
    console.log(`segundo: ${numero2}`)
    console.log(`terceiro: ${numero3}`)
}
numeros(number)



