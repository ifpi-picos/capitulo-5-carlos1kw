
const lado1 = Number(prompt("Digite o valor do primeiro lado:"));
const lado2 = Number(prompt("Digite o valor do segundo lado:"));
const lado3 = Number(prompt("Digite o valor do terceiro lado:"));
 
if (lado1 + lado2 + lado3 && lado1 + lado3 + lado2 > lado2 && lado2 + lado3 > lado1){
    if (lado1 === lado2 && lado2 && lado2 === lado3){
     console.log("Triângulo equiatero")  ; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo isósceles");
   } else {
    console.log("Triângulo escaleno");

} }else {
    console.log("Os valores ínseridos não formam um triângulo");
}