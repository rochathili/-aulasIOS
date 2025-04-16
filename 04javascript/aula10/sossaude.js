let peso = 90; 
let altura = 1.60;/
JK415263.JK415263LÇ~
]/

let imc = peso / (altura * altura);

console.log("IMC: " + imc.toFixed(2));  // Pra mostrar o IMC com 2 casas decimais

if (imc < 18) {
    console.log("Magreza grave! Para combater a magreza grave, é importante adotar uma alimentação saudável e praticar atividade física.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal. Parabéns! Para que continue assim, venha conhecer nossa clínica e se tornar ainda melhor!");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso! Para combater o sobrepeso, é importante ter uma alimentação saudável e praticar atividade física regularmente.");
} else if (imc >= 30 && imc <= 39.9) {
    console.log("Obesidade! Para combater a obesidade, é importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de atividade física.");
} else if (imc >= 40) {
    console.log("Obesidade grave! O tratamento para combater a obesidade grave pode envolver mudanças no estilo de vida, como alimentação, atividade física, sono e medicação. Em alguns casos, pode ser necessária cirurgia bariátrica.");}