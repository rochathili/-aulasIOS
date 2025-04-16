//   Variável      Teste       Executado ao fim do loop
//  Inicialização    Condição       Incremento
// for(contador = 0; contador <= 50; contador++){
//     console.log(contador);
// }


let tiposBanana = 
['🍌', '🍌', '🍌', '🍌', '🍌', '🍌']

for(contador = 0; contador < tiposBanana.length; contador++) {
    console.log(` ${contador + 1} ${tiposBanana[contador]}`);
}

// Utilizando o laço de repetição for, imprima na tela apenas os números pares até 50

for(numerospares = 0; numerospares <= 50; numerospares +=2){
    console.log(numerospares);
}





contador = 0;
while(contador < 50){
    console.log(contador + ' Pamonha 🌽');
    contador++

    if(contador == 50){
        console.log('CHEGA DE PAMONHA! NINGUÉM PRECISA DE 50 PAMONHAS');
    }
}


