/*

1.1 Variáveis e operadores

1. Crie uma variável que armazene uma temperatura em Fahrenheit, e re-
alize a conversão para Celsius. A equação para realizar a conversão é:
C = (F − 32)/1.8
*/
var f = 10
var c = (f - 32)/1.8
console.log(`${f}F é igual a ${c.toFixed(2)}C°`)
console.log("\n")
/*
2. Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada
nomeCompleto e realize a concatenação de nome e sobrenome com
template strings.
*/
var nome = "nai"
var snome = "abreu"
var nomeCompleto = (nome.charAt(0).toUpperCase() + nome.slice(1)) + " " + (snome.charAt(0).toUpperCase() + snome.slice(1))
console.log(nomeCompleto)

console.log("\n")
/*
3. Crie cinco variáveis que representam cinco notas de um estudante. Cal-
cule a média ponderada, sabendo que o peso das notas são respectiva-
mente: 3, 2, 1, 4 e 5.
*/
var n1 = 1
var n2 = 2
var n3 = 3
var n4 = 4
var n5 = 5
var media = (n1*3+n2*2+n3+n4*4+n5*5)/5
console.log(media)

console.log("\n")
/*
4. Crie duas variáveis que representam as dimensões (em km) de um ter-
reno: comprimento e largura. Calcule a área deste terreno, em seguida converta para hectares. Nota: 1 km2 equivale a 100 hectares.
*/
var comp = 100
var larg = 25
var area = comp*larg
var hec = area * 100
console.log(`${area}m²`) 
console.log(`${hec} hectares`) 
console.log("\n")
/*
5. Crie uma variável que armazena uma temperatura em Kelvin. Converta
para Celsius. A equação é C = K − 273
*/
var k = 300
var c = k - 273
console.log(`${c}C°`)

console.log("\n")
/*

1.2 Estruturas condicionais

1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba
qual destes números é o maior.
*/
var a = 2
var b = 3
var c = 1
if(a>b && a>c){
  console.log("a é maior")
} else if(b>a && b>c){
  console.log("b é maior")
}else if(c>a && c>b){
  console.log("c é maior")
}else{
  console.log("Números devem ser diferentes")
}

console.log("\n")
/*
2. Crie três variáveis que representam os três lados de um triângulo. Aplica
a seguinte regra para definir se o triângulo é possível: Se a soma de dois
lados é maior que o terceiro lado.
*/
var l1 = 3
var l2 = 4
var l3 = 5
if(l1+l2<l3 || l1+l3<l2 || l2+l3<l1){
  console.log("Não é possível")
} else{
  console.log("É possível")
}

console.log("\n")
/*
3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior
que 130) mostre uma mensagem de aviso.
*/
var idade = 20
if(idade<0 || idade>130){
  console.log("Idade inválida")
} else{
  console.log(`Você tem ${idade} anos`)
}

console.log("\n")
/*
4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte
regra para aplicar ajustes salariais: Caso não possua dependentes não
realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o
salário. Caso seja acima de 5 aumentar em 40% o salário.
*/
var salario = 123, quantidadeDependentes = 6
if(quantidadeDependentes==0){
  console.log(`Não houve reajuste no salário de ${salario.toFixed(2)}`)
} else if(quantidadeDependentes>=1 && quantidadeDependentes<=5){
  salario = salario *1.3
  console.log(`Seu salário é de ${salario.toFixed(2)}`)
}else if(quantidadeDependentes>5){
  salario = salario *1.4
  console.log(`Seu salário é de ${salario.toFixed(2)}`)
}

console.log("\n")
/*
5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 -
Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana
ou dia de útil.
*/
var dia = 2
if(dia>=2 && dia<=6){
  console.log("É dia de semana")
} else if(dia==1 || dia==7){
  console.log("É fim de semana")
} else{
  console.log("Dia inválido")
}

console.log("\n")
/*
6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bis-
sexto quando: Caso 1) É um número divisível por 4, mas não é divisível
por 100. Caso 2) É um número divisível por 4, por 100 e por 400.
*/
var ano = 2023
if(ano<=0){
  console.log("Ano inválido")
} else if(ano%4==0 && ano%100!=0){
  console.log(`${ano} é bissexto`)
} else if(ano%4==0 && ano%100==0 && ano%400==0){
  console.log(`${ano} é bissexto`)
} else{
  console.log(`${ano} não é bissexto`)
}

console.log("\n")
/*

1.3 Estruturas de seleção

1. Defina uma variável para armazenar um caractere e determine se é uma
vogal ou uma consoante. Use um switch-case para implementar a lógica.
*/
var letra = "a"
switch(letra){
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vogal");
  break
  default:
    console.log("Consoante");
}

console.log("\n")
/*
2. Defina uma variável para armazenar um mês do ano (em número) e im-
prima o nome do mês correspondente. Use um switch-case para imple-
mentar a lógica.
*/
var mes = 6
switch(mes){
  case 1:
    console.log("Janeiro");
  break
  case 2:
    console.log("Fevereiro");
  break    
  case 3:
    console.log("Março");
  break    
  case 4:
    console.log("Abril");
  break    
  case 5:
    console.log("Maio");
  break    
  case 6:
    console.log("Junho");
  break    
  case 7:
    console.log("Julho");
  break    
  case 8:
    console.log("Agosto");
  break    
  case 9:
    console.log("Setembro");
  break    
  case 10:
    console.log("Outubro");
  break    
  case 11:
    console.log("Novembro");
  break    
  case 12:
    console.log("Dezembro");
  break    
}

console.log("\n")
/*
3. Defina uma variável para armazenar um número de 1 a 12 e imprima
o número de dias correspondente ao mês. Use um switch-case para
implementar a lógica. Considere que fevereiro tem 28 dias em anos não
bissextos.
*/
var mes = 2
switch(mes){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 dias");
  break
  case 2:
    console.log("28 dias");
  break    
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 dias");
  break
  default:
    console.log("Mês Inválido");    
}


console.log("\n")
/*
4. Defina uma variável para armazenar um número de 1 a 4 e imprima o
nome da estação do ano correspondente. Use um switch-case para im-
plementar a lógica.
*/
var estacao = 1
switch(estacao){
  case 1:
    console.log("Outono");
  break
  case 2:
    console.log("Inverno");
  break
  case 3:
    console.log("Primavera");
  break
  case 4:
    console.log("Verão");
  break
  default:
    console.log("Estação Inválida");
}

console.log("\n")
/*
5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a
menção correspondente. Use um switch-case para implementar a ló-
gica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de
5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.
*/
var nota = 10
switch(nota){
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Insuficiente");
  break
  case 5:
  case 6:
    console.log("Regular");
  break
  case 7:
  case 8:
    console.log("Bom");
  break
  case 9:
  case 10:
    console.log("Excelente");
  break
}

console.log("\n")
/*

1.4 Estruturas de repetição

1. Use um laço while para imprimir na tela todos os números pares de 2 a
10.
*/
var num = 2
while (num<=10){
  if(num%2==0){
    console.log(num);
    num++
  } else{
    num++
  }
}

console.log("\n")
/*
2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
*/
for(var tab = 1; tab<=10; tab++){
  res = 7 * tab
  console.log(`7 * ${tab} = ${res}`);
}

console.log("\n")
/*
3. Use um laço for para imprimir na tela a sequência de Fibonacci até o
décimo termo.
*/
var a = 0, b = 1, c, i;
for(i = 1; i <= 10; i++){
  c = a + b;
  a = b;
  b = c;
  console.log(a);
}

console.log("\n")
/*
4. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****
*/
var ast = "*"
for(var i = 1; i<=5; i++){
  console.log(ast);
  ast+= "*"
}

console.log("\n")
/*
5. Escreva um programa que use um laço for para imprimir na tela os nú-
meros de 10 a 1 (em ordem decrescente).
*/
for(var i = 10; i>=1; i--){
  console.log(i);
}

console.log("\n")
/*
6. Mostre apenas os números ímpares de 1 até 1000.
*/
var num = 0
while (num<=1000){
  if(num%2!=0){
    console.log(num);
    num++
  } else{
    num++
  }
}

console.log("\n")
/*


2 Resoluções
2.1 Variáveis e operadores
1. let fTemp = 108.0;
let cTemp = (fTemp - 32) / 1.8;
console.log(`${fTemp}°F => ${cTemp.toFixed(2)}°C`);
2. let nome = "Pedro";
let sobrenome = "Silveira";
let nomeCompleto = nome + " " + sobrenome;
console.log(`Olá, meu nome é ${nomeCompleto}`);
3. let a = 7.5,
b = 6.6,
c = 4.2,
d = 9.5,
e = 8.8;
let mediaPonderada = (3 * a + 2 * b + 1 * c + 4 * d + 5 * e) / 15;
console.log(`A média ponderada é: ${mediaPonderada}`);
4. const comprimento = 20;
const largura = 40;
const areaEmKm2 = comprimento * largura;
const areaEmHa = areaEmKm2 * 100;
console.log(`${areaEmKm2} km2 => ${areaEmHa} ha`)
5. let kTemp = 350;
let cTemp = kTemp - 273;
console.log(`${kTemp}K => ${cTemp}°C`)


2.2 Estruturas condicionais
1. let a = 7,
b = 7,
c = 5;
if (a >= b && a >= c) {
console.log(`${a} é o maior número`);
} else if (b >= a && b >= c) {
console.log(`${b} é o maior número`);
} else if (c >= a && c >= b) {
console.log(`${c} é o maior número`);
}
2. let lado1 = 20,
lado2 = 15,
lado3 = 5;
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
console.log("O triângulo é possível");
} else {
console.log("O triângulo não é possível");
}
3. let idade = 200;
if(idade < 0 || idade > 130) {
console.log("Idade inválida: " + idade);
} else {
console.log("Idade válida");
}
4. let salario = 3000;
let quantidadeDependentes = 3;
if (quantidadeDependentes === 0) {
console.log("Você não possui dependentes.");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
salario += salario * 0.3;
} else {
salario += salario * 0.4;
}
console.log(`O salário é: ${salario.toFixed(2)}`);
5. let diaSemana = 7;
if (diaSemana >= 2 && diaSemana <= 6) {
console.log("Dia útil");
} else {
console.log("Final de semana");
}
6. let ano = 2024;
if (
(ano % 4 == 0 && ano % 100 != 0) ||
(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
console.log(ano + " é um ano bissexto");
} else {
console.log(ano + " não é um ano bissexto");
}

2.3 Estruturas de seleção
1. const letra = 'f';
switch (letra.toLowerCase()) {
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
console.log('A letra é uma vogal.');
break;
default:
console.log('A letra é uma consoante.');
}
2.
const mes = 7;
switch (mes) {
case 1:
console.log('Janeiro');
break;
case 2:
console.log('Fevereiro');
break;
case 3:
console.log('Março');
break;
case 4:
console.log('Abril');
break;
case 5:
console.log('Maio');
break;
case 6:
console.log('Junho');
break;
case 7:
console.log('Julho');
break;
case 8:
console.log('Agosto');
break;
case 9:
console.log('Setembro');
break;
case 10:
console.log('Outubro');
break;
case 11:
console.log('Novembro');
break;
case 12:
console.log('Dezembro');
break;
default:
console.log('Mês inválido');
}
3. const mes = 2;
switch (mes) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
console.log('31 dias');
break;
case 4:
case 6:
case 9:
case 11:
console.log('30 dias');
break;
case 2:
console.log('28 dias em anos não bissextos');
break;
default:
console.log('Mês inválido');
}
4. const numero = 3;
switch (numero) {
case 1:
console.log('Verão');
break;
case 2:
console.log('Outono');
break;
case 3:
console.log('Inverno');
break;
case 4:
console.log('Primavera');
break;
default:
console.log('Número inválido');
}
5. const nota = 7.5;
switch (Math.floor(nota)) { // arredonda para 7
case 0:
case 1:
case 2:
case 3:
case 4:
console.log('Insuficiente');
break;
case 5:
case 6:
console.log('Regular');
break;
case 7:
case 8:
console.log('Bom');
break;
case 9:
case 10:
console.log('Excelente');
break;
default:
console.log('Nota inválida');
}

2.4 Estruturas de repetição
1. let numero = 2;
while (numero <= 10) {
console.log(numero);
numero += 2;
}
2. for (let i = 1; i <= 10; i++) {
console.log(`7 x ${i} = ${7 * i}`);
}
3. let primeiroTermo = 0;
let segundoTermo = 1;
for (let i = 1; i <= 10; i++) {
const proximoTermo = primeiroTermo + segundoTermo;
primeiroTermo = segundoTermo;
segundoTermo = proximoTermo;
console.log(primeiroTermo);
}
4. let text = "";
for (let i = 0; i < 5; i++) {
for (let j = 0; j <= i; j++) {
text += "*";
}
text += "\n"
}
console.log(text);
5. for (let i = 10; i >= 1; i--) {
console.log(i);
}
6. for (let i = 1; i <= 1000; i++) {
if (i % 2 === 1) {
console.log(i);
} 
}*/