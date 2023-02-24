// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação
var nota1 = 8
var nota2 = 7
var nota3 = 6
media = ((nota1+nota2+nota3)/3).toFixed(2)
if(media >= 5 && media < 7){
  console.log(`Sua média é ${media}. Você está de reforço`)
}
else if(media >= 7 && media <= 10){
  console.log(`Sua média é ${media}. Aprovado`)
}
else if(media >= 0 && media < 5){
  console.log(`Sua média é ${media}. Reprovado`)
}
else{
  console.log("Notas inválidas")
}
console.log("\n")

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.
var peso = 73.4
var altura = 1.83
imc = (peso / (altura*altura)).toFixed(2)
if(imc >= 0 && imc < 18.5){
  console.log(`Seu imc é ${imc}. Você está abaixo do peso`)
}
else if(imc >= 18.5 && imc < 25){
  console.log(`Seu imc é ${imc}. Você está com peso normal`)
}
else if(imc >= 25 && imc < 30){
  console.log(`Seu imc é ${imc}. Você está com sobrepeso`)
}
else if(imc >= 30 && imc < 35){
  console.log(`Seu imc é ${imc}. Você está com obesidade grau I`)
}
else if(imc >= 35 && imc < 40){
  console.log(`Seu imc é ${imc}. Você está com obesidade grau II`)
}
else if(imc >= 40){
  console.log(`Seu imc é ${imc}. Você está com obesidade grau III`)
}
else{
  console.log("IMC inválido")
}
console.log("\n")

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!
var a = 3
var b = 3
if(a > b){
  console.log("A é maior que B")
}
else if(a < b){
  console.log("B é maior que A")
}
else{
  console.log("A é igual a B")
}