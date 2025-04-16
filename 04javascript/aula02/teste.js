let peso = 75
let altura = 1.77
let imc = peso / (altura ** 2)
let imcFormat = imc.toFixed(2)
if (imc <= 18.5) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está abaixo do peso, com imc ${imcFormat}. Nossos profissionais entrarão em contato com você para que possamos discutir o seu tratamento e passarmos as nossas recomendações. Obrigado por contratar nossos serviços.`);
}
else if (imc <= 24.9 && imc >= 18.6) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está com peso normal, com imc ${imcFormat}. Se você quiser nossa equipe pode repassar algumas recomendações para seu bem-estar. Obrigado por contratar nossos serviços.`);
}
else if (imc <= 29.9 && imc >= 25) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está com sobrepeso, com imc ${imcFormat}. Nossos profissionais entrarão em contato com você para que possamos discutir o seu tratamento e passarmos as nossas recomendações. Obrigado por contratar nossos serviços.`);
}
else if (imc <= 34.9 && imc >= 30.1) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está com obesidade grau I, com imc ${imcFormat}. Nossos profissionais entrarão em contato com você para que possamos discutir o seu tratamento e passarmos as nossas recomendações. Obrigado por contratar nossos serviços.`);
}
else if (imc <= 39.9 && imc >= 35) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está com obesidade grau II, com imc ${imcFormat}. Nossos profissionais entrarão em contato com você para que possamos discutir o seu tratamento e passarmos as nossas recomendações. Obrigado por contratar nossos serviços.`);
}
else if (imc >= 40) {
    console.log(`Olá Jhonattan! Nossos serviços disponibilizaram as suas informações para calcularmos o seu índice de massa corporal, segundo o nosso programa, que confere seu peso e sua altura, você está com obesidade grau III, com imc ${imcFormat}. Nossos profissionais entrarão em contato com você para que possamos discutir o seu tratamento e passarmos as nossas recomendações. Obrigado por contratar nossos serviços.`);
}
else {
    console.log("Você não inseriu os valores corretamente.")
}