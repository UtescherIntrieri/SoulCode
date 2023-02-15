// Operadores lógicos: NOT(!), AND(&&), OR(||)

// Operador NOT(!) = Inverte o valor lógico
let ligado = true;
let desligado = !ligado;

/* 
    Tabela (NOT)
    !true = false
    !false = true
*/

// Operador AND(&&) = Todas as expressões tem que ser true
let gasolinaTanque = 1;
let naReserva = gasolinaTanque < 5;
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva;
let ficaEmCasa = !podeViajar;

/*
    Tabela Verdade (E)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// Operador OR(||) = Basta uma expressão ser true
let taPodendo = podeViajar || podeAbastecer;


/* 
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59; // De 18 até 59 anos
console.log(podeBeber);