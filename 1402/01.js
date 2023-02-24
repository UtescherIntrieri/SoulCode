// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"
var peso = 70
var altura = 1.80
imc = peso / (altura*altura)
console.log(`Seu imc é ${imc.toFixed(2)}`)


// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R
var raio1 = 7
area = Math.PI*(raio1*raio1)
console.log(`Área do circulo é ${area.toFixed(2)}cm2`)

// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R
var raio2 = 7
circun = 2*Math.PI*raio2
console.log(`Circunferência do circulo é ${circun.toFixed(2)}cm`)

// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32
var C = 20
F = (C*1.8)+32
console.log(`${C}Cº são ${F}F`)