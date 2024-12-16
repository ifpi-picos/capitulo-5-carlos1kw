const altura = parseFloat(prompt("Informe sua altura em metros:"));
const peso = parseFloat(prompt("Informe seu peso em quilogramas:"));

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    switch (true) {
        case imc < 18.5:
         return "Abaixo do peso";
            case imc >= 18.5 && imc < 24.9:
                return "Peso normal";
                case imc >= 25 && imc < 29.9:
                    return "Sobrepeso";
                    default:
                        return "Obesidade";
 }
}
const imc = calcularIMC(peso, altura);

const classificacao = classificarIMC(imc);

alert(`Seu IMC é ${imc.toFixed(2)} e a classificação é: ${classificacao}`);