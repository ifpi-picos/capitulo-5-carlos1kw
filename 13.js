const aleatorio = Math.floor(Math.random() * 101) 

// console.log(aleatorio)

for(let i = 1; i <= 10; i++){
    const chute = parseInt(prompt('Chute um número:'))
    if(chute == aleatorio) {
        console.log("Paranéns, chute certo!")
        break
    }else if ( chute < aleatorio){
        console.log('Seu chute foi menor')
    }else{
        console.log('Seu chute foi maior')
    }
}

    