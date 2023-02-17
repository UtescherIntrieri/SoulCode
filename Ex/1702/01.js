// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
var n = 5
var c = 1
var res
while(c<=10){
    res = n*c
    console.log(`${n} x ${c} = ${res}`)
    c++
}
console.log("\n")

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
var x = 1
while(x<100){
    if(x%2==0){
        console.log(`${x} é par`)
        x++
    } else{
        console.log(`${x} é impar`)
        x++
    }
}
console.log("\n")

// Exercícios III: Conte de 50 até 75
var z=50
while(z<=75){
    console.log(z)
    z++
}
console.log("\n")

// Exercícios IV: Transforme os exercícios anteriores para usar o FOR.
// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
var n = 7
for (let c = 1; c <= 10; c++) {
    res = n*c
    console.log(`${n} x ${c} = ${res}`)
}
console.log("\n")

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
for (let x = 1; x < 100; x++) {
    if(x%2==0){
        console.log(`${x} é par`)
    } else{
        console.log(`${x} é impar`)
    }
}
console.log("\n")

// Exercícios III: Conte de 50 até 75
for (let z = 50; z <=75; z++) {
    console.log(z)
}
console.log("\n")