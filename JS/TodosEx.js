// Dia 14/2
// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R

// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R

// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32


// Dia 15/02
// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

// Exercício II
// IMC = PESO / (ALTURA * ALTURA)
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!


// Dia 16/02
// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)


// Dia 17/02
// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)

// Exercícios III: Conte de 50 até 75.

// Exercícios IV: Transforme os exercícios I, II eIII para usar o FOR.


// Dia 23/02
// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido


// Dia 24/02
// Exercício: Transforme as funções abaixo em arrow
// Retorno imediato = quando temos apenas 1 LINHA NO CORPO DA FUNÇÃO

// const criarNomeCompleto = (nome, sobrenome) => nome + " " + sobrenome;

// const contar = (maximo) => {
//   for (let i = 1; i <= maximo; i++) {
//     console.log(i);
//   }
// };

// const imc = (peso, altura) => {
//   let calculo = peso / (altura * altura);
//   console.log(`O IMC é ${calculo}`);

//   return calculo;
// };

// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.
// calculadora(2, 3, "*") -> 2 * 3 = 6
// calculadora(5, 2, "-") -> 5 - 2 = 3

// Exercício II: Crie uma função que converte fahrenheit em celsius
// C = (F - 32) / 1.8. Retorna a temperatura convertida.
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura
// como parâmetro:
// Caso esteja abaixo de 11: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"


// Dia 27/02
// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida.

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]


// Aula 28.02
// Exercício: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho da palavra é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.