// Tópicos: while, for

// Estruturas de repetição = loops = laços
// Condição de parada, valor inicial, atualizacao

// While = Enquanto
/*
    while(condicao) {
        // código a se repetir
    }
*/

/*
// Loop infinito 
let numero = 1;

while(true) { // loop infinito
    console.log(numero);
}
*/

/*
let numero = 1;

while(true) { // condição de parada
    console.log(numero);
    numero++;
}
*/

// Loop com parada e atualização
let numero = 1;
while (numero <= 5) {
  console.log(numero);
  numero++; // atualização
}
console.log("Fora do loop: " + numero);