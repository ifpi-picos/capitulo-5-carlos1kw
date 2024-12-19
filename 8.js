
const prato = prompt("Escolha um prato: 1 - Pizza\ 2 - Hambúrguer\ 3 - Salada\ 4 - Macarrão:");

switch (prato) {
case "1":
        console.log("Pizza: R$ 35,00 Massa crocante com ou sem queijo, Catupirí, Calabresa, Frango ou Mista");
        break;
    case "2": 
        console.lg("Hamburguer: R$ 15,00 X-tudo, X-salada ou X-bacon");
        break;
    case "3":
        console.log("Salada: R$ 14,00 alface, tomate, cecola, pepino e pimentão");
        break;
    case "4":
        console.log("Macarrão: R$ 12,00 passado ao azeite com calabresa, queijo e molho da sua preferencia");
         break;
    default:
        console.log("Opção invalida");
        break;

}