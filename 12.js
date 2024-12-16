
const numero = parseInt(prompt("Digite um número inteiro:"))
function Fatorial(n){
    var resultado = n;
    for(var i = 1; i < n; i++){
        resultado = resultado * i;
    }
    return resultado;
}
console.log(Fatorial(numero));