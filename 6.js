const num1 = parseInt(prompt("digite o primeiro número"))
const num2 = parseInt(prompt("digite o segundo número"))

if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log("pelo menos um é multiplo")
} else {
    console.log("nenhum é multiplo")
}