// 1.7 Arrays
// 1. Crie um array contendo os números de 1 a 10 e exiba-os no console com
// for-of e for comum.
numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.forEach(number => {
  console.log(number);
});
console.log("\n");
// 2. Crie uma função que recebe um array de strings como parâmetro e re-
// torne um novo array apenas com as strings acima de 5 caracteres.
function filterString(array) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    let string = array[i];
    if (string.length > 5) {
      filtered.push(string);
    }
  }
  return filtered;
}
console.log(filterString(["abcd", "abcde", "abcdef","abcdefg"])); 
console.log("\n");
// 3. Crie uma função que recebe um array de números e retorna um novo
// array com apenas os números que são maiores que a média do array do
// parâmetro.
let res = []
let sum = 0
let media
function numbers2(array) {
  numbers.map((number) => sum+=number)
  media = sum/array.length
  
  numbers.map((number) => {
    if (number>media) {
      res.push(number)
    }
  })
  // console.log(sum);
  // console.log(media);
  console.log(res);
}
numbers2([1,2,3,4,5,6,7,8,9,10])
console.log("\n");
// 4. Crie um array de booleans e realize um OU de todas os valores.
let bools = [true, false, true, true, false];
let res2 = false;
for (let i = 0; i < bools.length; i++) {
  res2 = res2 || bools[i];
}
console.log(res2);

console.log("\n");
// 5. Crie uma função que recebe um array com os nomes dos alunos de uma
// turma, e outro array que recebe a lista de presença com os nomes. In-
// dique quais alunos faltaram.
function presenca(alunos, lista) {
  let falta = [];
  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    if (!lista.includes(aluno)) {
      falta.push(aluno);
    }
  }
  return falta;
}

const falta = presenca(['Nai', 'Dan','Leonardo', 'Kimbie'], ['Dan','Nai', 'Kimbie']);
console.log(falta);

console.log("\n");
// 6. Crie uma função que recebe um array de números e retorna um array
// com todos os valores elevados ao quadrado.
const numbers3 = [1,2,3,4,5]
let res3 = []
numbers3.map((numero) => res3.push(numero*numero)) 
console.log(res3)

console.log("\n");
// 7. Crie uma função que recebe um array de nomes de arquivos, e recebe
// também uma extensão, a função deve retornar apenas os nomes de ar-
// quivo que forem dessa extensão.
const arquivo = ["oioi.mp3","cansei.wav","haha.mp4", "chorei.mp3"]
var extensao = "mp3"
var s2
let res4 = []
arquivo.map((s1) => {
  if (s1.slice(-3) == extensao) {
    res4.push(s1)
  }
})
console.log(res4);
console.log("\n");
// 8. Crie uma função que recebe um número, em seguida retorne um array
// de números aleatórios com o tamanho especificado pelo número.
res5 = []
function random(n1) {
  for (let index = 0; index < n1; index++) {
    num = Math.floor(Math.random() * 100)
    res5.push(num)
  }
  console.log(res5);
}
random(5)

console.log("\n");
// 9. Refaça os itens 1, 2, 6, e 7. Utilize as funções map, filter e forEach.

// 2.
function filterString(array) {
  return array.filter(str => str.length > 5);
}
console.log(filterString(["abcde","abcdef","abcdefg"]));

// 6.
function elevarAoQuadrado(numeros) {
  return numeros.map((num) => num ** 2);
}
console.log(elevarAoQuadrado([1,2,3,4,5]));

// Item 7
function filtrarArquivosPorExtensao(array, extensao) {
  return array.filter(arquivo => arquivo.endsWith(extensao));
}
console.log(filtrarArquivosPorExtensao(["oioi.mp3","cansei.wav","haha.mp4", "chorei.mp3"], "mp3"))



// Resoluções

// 1. let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let numero of numeros) {
// console.log(numero);
// }
// for (let i = 0; i < numeros.length; i++) {
// console.log(numeros[i]);
// }
// 2. function filterString(array) {
// let filtered = [];
// for (let i = 0; i < array.length; i++) {
// let string = array[i];
// if (string.length > 5) {
// filtered.push(string);
// }
// }
// return filtered;
// }
// filterString(["Javascript", "VueJS", "Node", "Angular", "React", "CSS"]);
// 3. function filtrarNumerosMaioresQueMedia(array) {
// let soma = 0;
// for (let i = 0; i < array.length; i++) {
// soma += array[i];
// }
// const media = soma / array.length;
// const filtered = [];
// for (let i = 0; i < array.length; i++) {
// const numero = array[i];
// if (numero > media) {
// filtered.push(numero);
// }
// }
// return filtered;
// }
// let res2Array = filtrarNumerosMaioresQueMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 4. let bools = [true, false, true, true, false];
// let res2 = false;
// for (let i = 0; i < bools.length; i++) {
//   res2 = res2 || bools[i];
// }
// console.log(res2); // true
// 5. function presenca(alunos, lista) {
// let falta = [];
// for (let i = 0; i < alunos.length; i++) {
// let aluno = alunos[i];
// if (!lista.includes(aluno)) {
// falta.push(aluno);
// }
// }
// return falta;
// }
// const alunos = ['Nai', 'Dan', 'Kimbie', 'Ana', 'Mariana'];
// const lista = ['Nai', 'Dan', 'Kimbie'];
// const falta = presenca(alunos, lista); // ['Pedro', 'Ana']
// 6. function elevarAoQuadrado(array) {
// const res2 = [];
// for (let i = 0; i < array.length; i++) {
// res2.push(array[i] ** 2);
// }
// return res2;
// }
// const numeros = [1, 2, 3, 4, 5];
// const aoQuadrado = elevarAoQuadrado(numeros);
// console.log(aoQuadrado); // [1, 4, 9, 16, 25]
// 7. function filtrarPorExtensao(arquivos, extensao) {
// const res2 = [];
// for (let i = 0; i < arquivos.length; i++) {
//   const arquivo = arquivos[i];
// if (arquivo.endsWith(`.${extensao}`)) {
// res2.push(arquivo);
// }
// }
// return res2;
// }
// const arquivos = ['relatorio.pdf', 'imagem.png', 'texto.doc', 'planilha.xlsx'];
// const extensao = 'pdf';
// const filtrados = filtrarPorExtensao(arquivos, extensao);
// console.log(filtrados); // ['relatorio.pdf']
// 8. function gerarArrayAleatorio(tamanho) {
// const arrayAleatorio = [];
// for (let i = 0; i < tamanho; i++) {
// arrayAleatorio.push(Math.floor(Math.random() * 100));
// }
// return arrayAleatorio;
// }
// const tamanho = 5;
// const arrayGerado = gerarArrayAleatorio(tamanho);
// console.log(arrayGerado); // [ 57, 88, 16, 24, 92 ]
// 9. // Item 1
// numeros.forEach(numero => console.log(numero));
// // Item 2
// function filterString(array) {
// return array.filter(str => str.length > 5);
// }
// // Item 6
// function elevarAoQuadrado(numeros) {
// return numeros.map((num) => num ** 2);
// }
// // Item 7
// function filtrarArquivosPorExtensao(array, extensao) {
//   return array.filter(arquivo => arquivo.endsWith(extensao));
//   }