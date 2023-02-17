var produto = ("Garrafa")
var preco = 58.5
var desc = false
var descval = 20 //desconto de 20%
var precofinal
const demanda = [10,2,1,30,5]
const demvalor = []

if(desc == true) {
    console.log(`Desconto de ${descval}% aplicado`)
    for (var i = 0; i < demanda.length; i++) {
        precofinal = preco * ( (100-descval) / 100 )
        newval = demanda[i] * precofinal.toFixed(2)
        demvalor.push(newval)
    }
    //console.log(demvalor) //mostra array
    
    for(var i = 0; i < demvalor.length; i++){
        if(demvalor[i] > 1000){
            precofinal = demvalor[i] - 50
            console.log(`O cliente ${i + 1} deve pagar R$${precofinal}`)
        }
        else{
            precofinal = demvalor[i]
            console.log(`O cliente ${i + 1} deve pagar R$${precofinal}`)
        }
    }
    
    console.log(`O total de lucro é de R$${demvalor.reduce((partialSum, a) => partialSum + a, 0)}`);
}
else {
    for (var i = 0; i < demanda.length; i++) {
        precofinal = preco
        newval = demanda[i] * precofinal
        demvalor.push(newval)
    }
    //console.log(demvalor) //mostra array
    
    for(var i = 0; i < demvalor.length; i++){
        if(demvalor[i] > 1000){
            precofinal = demvalor[i] - 50
            console.log(`O cliente ${i + 1} deve pagar R$${precofinal}`)
        }
        else{
            precofinal = demvalor[i]
            console.log(`O cliente ${i + 1} deve pagar R$${precofinal}`)
        }
    }
    console.log(`O total de lucro é de R$${demvalor.reduce((partialSum, a) => partialSum + a, 0)}`);
}