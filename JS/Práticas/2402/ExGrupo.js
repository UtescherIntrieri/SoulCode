// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
var r1 = 0
const n1 = [0,1,2,3,4,5,6,7,8,9]
for (var element of n1) {
  r1 += element
}
console.log(r1); 

console.log("\n"); 

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.
var r2 = 0
const n2 = [4,8,10]
for (var element of n2) {
  r2 += element
}
r2 = (r2/n2.length).toFixed(2)
console.log(r2); 

console.log("\n"); 

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.
const n3 = [4,8,10,3,2,0,9]
var n4 = []
var larg
for (var element of n3) {
  if (n4 < element) {
    n4 = element;
  }
}
console.log(n4); 

console.log("\n");  
// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.
const fruta = ["banana", "manga", "morango"]
for (const element of fruta) {
  console.log(element.length);
}

console.log("\n");  
// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.
const n5 = []
const pares = []
var r3 = 0
for (let index = 0; index < 5; index++) {
  num = Math.floor(Math.random() * 100)
  n5.push(num)
}
for (var i of n5) {
  if (i%2==0) {
    pares.push(i)
  }
}
for (var index of pares) {
  r3 += index
}
console.log(n5); 
console.log(pares); 
console.log(r3); 

console.log("\n");  
// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)
var s2 = ""
function ext(s1) {
  s2 = s1.slice(-3)
  if (s2 == "mp3" || s2 == "wav") {
    return true
  } else {
    console.log("erro");
  }
}
console.log(ext("oi.mp3"));

console.log("\n");  
// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.
function cpf(s3) {
  s3 = s3.slice(-2)
  return s3
}
console.log(cpf("05698599023"));

console.log("\n");  
// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB
function reverse(s4) {
  return s4.split("").reverse().join("");
}
console.log(reverse("batata"));


console.log("\n");  
// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]
const rev1 = [1,2,3]
const rev2 = rev1.reverse()
console.log(rev2);