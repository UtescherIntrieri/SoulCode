// Estrutura de Repetição: For

/*
    for(inicializacao; condicao; atualizacao) {
   // Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
// Exercícios III: Conte de 50 até 75     // o código a se repetir
    }
*/

// 1 até 5
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
  }
  
  // 5 até 1
  for (let contador = 5; contador >= 1; contador--) {
    console.log(contador);
  }
  
  // 1 + 2 + 3 + 4 + ... + 99 + 100 = ?
  let soma = 0;
  
  for (let i = 1; i <= 100; i++) {
    // iteração ou index
    soma = soma + i;
  }
  
  console.log(soma);
  