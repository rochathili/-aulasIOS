// // 3. Sistema de Cálculo de Média de Notas com Array
// // // Neste sistema, um array armazena as notas de um aluno em diversas disciplinas. 
// O sistema calcula a média das notas e exibe o resultado. 
// Dependendo do valor da média, o aluno será classificado como aprovado ou reprovado,
//  de acordo com a média mínima estabelecida (geralmente 7.0).

// let notas = [2+8+3+6]
// let media = notas/4
// if (media>=7) {
//     console.log('Parabéns!você foi aprovado', media);  
// }
// else if (media>5) {
//     console.log('Você esta de recuperação. sua media foi', media);

// }
// else if (media<=5){
//     console.log('foi reprovado sua media foi:', media);
// }

let notas = [10, 10, 5]
const soma = notas.reduce((acc, num) => acc + num,0) / notas.length
console.log('essa e sua media', soma);


