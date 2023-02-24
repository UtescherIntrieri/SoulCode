// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.
function conta(n1,n2,op) {
  var res
  switch (op) {
    case "+" :
      return n1+n2
    break;
    case "-" :
      return n1+n2
    break;
    case "*" : 
      return n1+n2
    break;
    case "/" :
      return n1+n2
    break;
    default:
      console.log("operador inválido");
  }
}
console.log(conta(5,4,"+"));
console.log("\n");

// Exercício II: Crie uma função que converte fahrenheit em celsius
// C = (F - 32) / 1.8. Retorna a temperatura convertida.
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura
// como parâmetro:
// Caso esteja abaixo de 11: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

function converter(f) {
  var c = (f-32)/1.8
  console.log(`${f}F = ${c.toFixed(2)} C°`);
 
  checarT(c)
  
  function checarT(c) {
    if (c<11) {
      console.log("Muito Frio");
    } else if(c>=11 && c<16){
      console.log("Clima Bom");
    } else if(c>=16 && c<31){
      console.log("Agradável...");
    } else if(c>31){
      console.log("Hell");
    }
  }
} 
converter(0)

// Exercício III: Transforme as funções abaixo em arrow
// function criarNomeCompleto(nome, sobrenome) {
//   return nome + " " + sobrenome;
// }
// function contar(maximo) {
//   for (let i = 1; i <= maximo; i++) {
//     console.log(i);
//   }
// }
// function imc(peso, altura) {
//   let calculo = peso / (altura * altura);
//   console.log(`O IMC é ${calculo}`);

//   return calculo;
// }