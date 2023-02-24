//Declare uma funcção que recebe 3 notas e mostra a média entre elas.
function media(n1,n2,n3) {
  var media = (n1+n2+n3)/3
  console.log(media);
}
media(5,6,7)
media(7,7,7)

// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).
function imc(peso,altura) {
  var imc = peso / (altura*altura)
  console.log(`Com ${peso}Kg e ${altura}m, o imc seu é ${imc.toFixed(2)}`);
}
imc(73,1.8)
imc(55,1.5)

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%
function porcentagem(n1) {
  var porc = n1*100
  return `${porc}%`
}
var val1 = porcentagem(0.5) 
console.log(val1);   

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true
function negativo(n2) {
  if (n2<0) {
    return true
  } else if (n2>0) {
    return false
  } else {
    console.log("É zero!");
  }
}
var val2 = negativo(2)
console.log(val2);

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function dinheiro(n3) {
  return n3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
var val3 = dinheiro(100)
console.log(val3);

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.
function contar(n4) {
  for (let index = 1; index <= n4; index++) {
    console.log(index);  
  }
}
contar(10)

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.
function nome(nome1,nome2) {
  return `${nome1} ${nome2}`
}
fnome = nome("nai","abreu") 
console.log(fnome);

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI
function area(raio) {
  return (Math.PI*raio*raio).toFixed(2)
}
var res2 = area(5)
console.log(res2);

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
function nivel(n5) {
  if (n5>=1 && n5<=20) {
    return "Nível I"
  } else if(n5>=21 && n5<=40){
    return "nivel II"
  } else {
    return "Nível Inválido"
  }
}
console.log(nivel(area(3)))