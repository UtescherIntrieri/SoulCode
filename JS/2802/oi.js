// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.
let palavras = ["amor","raiva","tamanho"]
palavras = palavras.map((palavra) => {
  if (palavra.length < 5) {
    return "BATATA";
  } else {
    return palavra.toUpperCase();
  }
});
console.log(palavras);
// Exercício II: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
numbers.map((number) => sum+=number)
console.log(sum);