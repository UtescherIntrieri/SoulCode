// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
var idade = 19
var dinheiro = 50
if(idade>=18 && dinheiro>=20){
    dinheiro -= 20
    console.log(`Pode comprar bebida, vc tem R$${dinheiro} sobrando`)
}
else{
    console.log("Não pode comprar bebida")
}
console.log("\n")

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.
var sal = 5000
if(sal<500){
    sal +=500
    console.log(`Seu salário é de R$${sal}`)
} else if(sal>=500 && sal<=1000){
    sal +=25
    console.log(`Seu salário é de R$${sal}`)
} else{
    console.log("Não houve mudança de salário")
}
console.log("\n")

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)
var dia = 3
switch(dia){
    case 1:
        console.log("Domingo")
    break
    case 2:
        console.log("Segunda")
    break
    case 3:
        console.log("Terça")
    break
    case 4:
        console.log("Quarta")
    break 
    case 5:
        console.log("Quinta")
    break 
    case 6:
        console.log("Sexta")
    break 
    case 7:
        console.log("Sábado")
    break
    default:
        console.log("Dia inválido")        
}
console.log("\n")

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

// let comida = "abacate";
// if (comida === "batata" || comida === "carne" || comida === "chocolate") {
//   console.log("Hum, adoro!");
// } else if (comida === "pizza" || comida === "sanduíche") {
//   console.log("As vezes...");
// } else {
//   console.log("Quero não!");
// }
var comida = "batata"
switch(comida){
    case "batata":
    case "carne":
    case "cebola":
        console.log("Humm, adoro")
    break
    case "pizza":
    case "sanduiche":
        console.log("As vezes")
    break
    default:
        console.log("Quero não!")
}

console.log("\n")
// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.
var num = 134
if(num%2==0){
    console.log("é par")
} else{
    console.log("é impar")
}