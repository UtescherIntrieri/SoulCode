// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
  codigo: 1234,
  saldo: 100,
  cpf: "123.456.789-12",
  nome: "Nai",
  
  saque(valor) {
    this.saldo -= valor
  },
  deposito(valor) {
    this.saldo += valor
  },
}

console.log(conta.saldo);
conta.saque(20)
console.log(conta.saldo);
conta.deposito(200)
console.log(conta.saldo);

console.log("\n");
// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
  nome: "Café Soul",
  descricao: "Extra-Forte",
  quantidade: 20,
  precoOriginal: 10,
  desconto: 2,
  
  calcularPrecoDesconto(){
    console.log(`Preço final com desconto: R$${this.precoOriginal - this.desconto}`);
  },
  apresentacao(){
    console.log(`Produto: ${this.nome}`);
    console.log(`Tipo: ${this.descricao}`);
    console.log(`Este produto custa R$${this.precoOriginal}`);
  },
  comprar(total){
    console.log(`Foram compradas ${total} unidades`);
    console.log(`Estoque atual: ${this.quantidade -= total}`);
  },
  reestocar(total){
    console.log(`Foram adicionados ${total} produtos ao estoque. Estoque atual: ${this.quantidade += total}`);
  }
}
produto.apresentacao()
produto.calcularPrecoDesconto()
produto.comprar(5)
produto.reestocar(10)