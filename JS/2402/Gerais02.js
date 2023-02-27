// 1.5 Funções
// 1. Escreva uma função que receba um número e retorne seu dobro.
function dobro(n1) {
  return n1*2
}
console.log(dobro(4));
console.log("\n");
// 2. Escreva uma função que receba um número e retorne seu quadrado.
function quadrado(n2) {
  return n2*n2
}
console.log(quadrado(4));
console.log("\n");
// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.
function cadastro(nome1,idade1,endereco) {
  return `Olá, eu sou ${nome1}, tenho ${idade1} ano(s) e moro em ${endereco}`
}
console.log(cadastro("Nai","23","peruibe"));
console.log("\n");
// 4. Escreva uma função que receba dia, mês e ano e retorne a data por
// extenso no formato "DD/MM/AAAA".
function data(dia1,mes1,ano1) {
  if (dia1<10) {
    dia1 = `0${dia1}`
  }
  if (mes1<10) {
    mes1 = `0${mes1}`
  }
  return `${dia1}/${mes1}/${ano1}`
}
console.log(data(5,7,2023));
console.log("\n");
// 5. Escreva uma função que receba um preço de um produto e um percen-
// tual. Retorne o valor aplicado ao desconto.
function desconto(v1,d1) {
  return v1 - (v1 *(d1/100))
}
console.log(desconto(100,20));
console.log("\n");
// 6. Escreva uma função que receba uma palavra e um número. Retorne a
// palavra repetida a quantidade de vezes indicada pelo segundo parâme-
// tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize
function palavra(p1,n3) {
  for (let index = 0; index < n3; index++) {
    console.log(p1);
  }
}
palavra("oi",3);
console.log("\n");
// um loop para resolver.
// 7. Escreva uma função que recebe outra função e invoca ela.
function invocar() {
  function abc(x) {
  }
  abc(2)
}
// 8. Transforme os itens 1, 2 e 3 em arrow function expressions.
var mult = (n4) => n4*2;
console.log(mult(4));
console.log("\n");

var quad = (n4) => n4*n4;
console.log(quad(4));
console.log("\n");

var cad = (nome1,idade1,endereco) => `Olá, eu sou ${nome1}, tenho ${idade1} ano(s) e moro em ${endereco}`;
console.log(cad("Nai",23,"Peruibe"));
console.log("\n");

// 1.6 Strings

// 1. Escreva uma função que receba uma string e retorne o número de ca-
// racteres contidos nela.
function comp(s1) {
  return s1.length
}
console.log(comp("Nai"));
console.log("\n");

// 2. Escreva uma função que receba uma string e retorne a mesma string em
// letras maiúsculas.
function maius(s2) {
  return s2.toUpperCase()
}
console.log(maius("Nai"));
console.log("\n");
// 3. Escreva uma função que receba uma string e retorne a mesma string em
// letras minúsculas.
function minus(s3) {
  return s3.toLowerCase()
}
console.log(minus("Nai"));
console.log("\n");
// 4. Escreva uma função que receba duas strings e retorne true se elas forem
// iguais ou false caso contrário.
function comp(s4,s5) {
  if (s4 == s5) {
    return true
  } else {
    return false    
  }
}
console.log(comp("oi","oi"));
console.log("\n");
// 5. Escreva uma função que receba uma string e um número e retorne os
// últimos caracteres da string de acordo com o número informado.
function corte(s6,n5) {
  return s6.slice(-n5)
}
console.log(corte("abcde", 3));
console.log("\n");
// 6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase
// com as ocorrências da palavra censuradas/trocadas por ***. Exemplo:
// censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo ***
// e valorant, mas *** é melhor". Dica: use a função replaceAll.
function cens(s7,s8) {
  return s7.replaceAll(s8, "***")
}
console.log(cens("oi, meu nome é nai e eu gosto muito de você", "nai"));
console.log("\n");
// 7. Escreva uma função que receba uma string e um caractere e retorne o
// número de ocorrências desse caractere na string.
function replace(s9,l1) {
  return s9.split(l1).length - 1;
}
console.log(replace("oi, meu nome é nai e eu gosto muito de você", "e"));
console.log("\n");






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