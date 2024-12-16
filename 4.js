let ano = parseInt(prompt("digite seu ano de nascimento"))

const atual= 2024

var sub = atual - ano 

console.log(sub)

if (sub >= 18){
    console.log('maior idade')
} else {
    console.log('nao maior idade')
}