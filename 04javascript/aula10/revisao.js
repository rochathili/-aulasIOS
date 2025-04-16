//  Crie um loop while que gere uma sequência Fibonacci 
// de 10 números, onde  a sequência começa com 0 e 1
// e cada número subsequente é a soma dos dois anteriores.
 


let num1 = 0, num2 = 1, soma


let contador = 1

while(contador <= 10){
    console.log(`${contador}: ${num1}`);
    
    soma = num1 + num2
    num1 = num2
    num2 = soma
    
    contador++
}