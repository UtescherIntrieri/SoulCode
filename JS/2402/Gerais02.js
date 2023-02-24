// 1.5 Funções
// 1. Escreva uma função que receba um número e retorne seu dobro.
// 2. Escreva uma função que receba um número e retorne seu quadrado.
// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.
// 4. Escreva uma função que receba dia, mês e ano e retorne a data por
// extenso no formato "DD/MM/AAAA".

// 5. Escreva uma função que receba um preço de um produto e um percen-
// tual. Retorne o valor aplicado ao desconto.

// 6. Escreva uma função que receba uma palavra e um número. Retorne a

// palavra repetida a quantidade de vezes indicada pelo segundo parâme-
// tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize

// um loop para resolver.
// 7. Escreva uma função que recebe outra função e invoca ela.
// 8. Transforme os itens 1, 2 e 3 em arrow function expressions.
// 1.6 Strings

// 1. Escreva uma função que receba uma string e retorne o número de ca-
// racteres contidos nela.

// 2. Escreva uma função que receba uma string e retorne a mesma string em
// letras maiúsculas.
// 3. Escreva uma função que receba uma string e retorne a mesma string em
// letras minúsculas.
// 4. Escreva uma função que receba duas strings e retorne true se elas forem
// iguais ou false caso contrário.
// 5. Escreva uma função que receba uma string e um número e retorne os
// últimos caracteres da string de acordo com o número informado.
// 6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase
// com as ocorrências da palavra censuradas/trocadas por ***. Exemplo:
// censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo ***
// e valorant, mas *** é melhor". Dica: use a função replaceAll.
// 7. Escreva uma função que receba uma string e um caractere e retorne o
// número de ocorrências desse caractere na string.







// Resoluções
// 2.5 Funções
// 1. function dobrarNumero(numero) {
// return numero * 2;
// }
// console.log(dobrarNumero(2)); // 4
// 2. function calcularQuadrado(numero) {
// return numero * numero;
// }
// console.log(calcularQuadrado(3)); // 9
// 3. function apresentacao(nome, idade, endereco) {
// return `Olá, eu sou ${nome}, tenho ${idade} ano(s) e moro em ${endereco}.`;
// }
// console.log(apresentacao("José", 17, "Fortaleza, Ceará"));
// 4. function dataPorExtenso(dia, mes, ano) {
// // Esta expressão é um operador ternário:
// // podemos usar ele para atribuir um valor baseado numa condição!
// const diaFormatado = dia < 10 ? "0" + dia : dia;
// const mesFormatado = mes < 10 ? "0" + mes : mes;
// return `${diaFormatado}/${mesFormatado}/${ano}`;
// }
// console.log(dataPorExtenso(23, 2, 2023)); // "23/02/2023"
// 5. function valorDesconto(preco, percentual) {
// const desconto = preco * (percentual / 100);
// return preco - desconto;
// }
// // Estamos calculando um desconto 20% nos 100 reais = 80
// console.log(valorDesconto(100, 20));
// 6. function repetir(palavra, vezes) {
// let resultado = "";
// for (let i = 0; i < vezes; i++) {
// resultado += palavra;
// }
// return resultado;
// }
// console.log(repetir("batata", 3)); // "batatabatatabatata"
// 7. function invocarFuncao(funcao) {
// funcao();
// }
// function minhaFuncao() {
// console.log("Essa é a minha função!");
// }
// invocarFuncao(minhaFuncao);
// 8. const dobrar = (numero) => numero * 2;
// const quadrado = (numero) => numero ** 2;
// const apresentacao = (nome, idade, endereco) =>
// `Olá, eu sou ${nome}, tenho ${idade} anos e moro em ${endereco}.`;

// 2.6 Strings
// 1. function contarCaracteres(str) {
// return str.length;
// }
// const minhaString = "Olá, mundo!";
// const numCaracteres = contarCaracteres(minhaString);
// console.log(numCaracteres); // 11
// 2. function maiusculas(str) {
//   return str.toUpperCase();
//   }
//   const minhaString = "Olá, mundo!";
//   const stringMaiuscula = maiusculas(minhaString);
//   console.log(stringMaiuscula); // "OLÁ, MUNDO!"
//   3. function minusculas(str) {
//   return str.toLowerCase();
//   }
//   const minhaString = "OLÁ, MUNDO!";
//   const stringMinuscula = minusculas(minhaString);
//   console.log(stringMinuscula); // "olá, mundo!"
//   4. function saoIguais(str1, str2) {
//   if (str1 === str2) {
//   return true;
//   } else {
//   return false;
//   }
//   }
//   console.log(saoIguais("batata", "batatinha")); // false
//   5. function ultimosCaracteres(str, num) {
//   if (num >= str.length) {
//   return str;
//   } else {
//   // Podemos usar negativo no slice para pegar os últimos caracteres
//   // Exemplo -1 representa o último caractere
//   return str.slice(-num);
//   }
//   }
//   const resultado = ultimosCaracteres("JavaScript", 4);
//   console.log(resultado); // "ript"
//   6. function censurar(palavra, frase) {
//   return frase.replaceAll(palavra, "***");
//   }
//   // "Eu gosto muito de ***"
//   console.log(censurar("batata", "Eu gosto muito de batata"));
//   7. function contarCaractere(str, caractere) {
//   let contador = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === caractere) {
//     contador++;
//     }
//     }
//     return contador;
//     }
//     console.log(contarCaractere("batata", "a")); // 3