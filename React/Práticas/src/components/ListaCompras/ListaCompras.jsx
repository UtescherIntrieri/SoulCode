import "./ListaCompras.css";

const compras = [
  "Batata palha 2kg",
  "Batata frita pronta",
  "Batata doce",
  "Batata chips",
  "Batata inglesa",
]

const produtos = [
  { cod: 1, nome: "Batata palha", quantidade: 5, precoUnitario: 5.5 },
  { cod: 2, nome: "Batata frita pronta", quantidade: 3, precoUnitario: 10.5 },
  { cod: 3, nome: "Batata doce", quantidade: 10, precoUnitario: 20 },
  { cod: 4, nome: "Batata chips", quantidade: 5, precoUnitario: 15 },
];

export function ListaCompras() {
  const elementosCompras = compras.map((nomeCompra, index) => {
    return <li key={index}>{nomeCompra}</li>
  })
  
  const elementosProdutos = produtos.map((produto) => {
    return <div key={produto.cod} className="card-compra">
      <h2>{produto.nome}</h2>
      <p>Quantidade: {produto.quantidade}</p>
      <p>Subtotal: {produto.quantidade * produto.precoUnitario}</p>
    </div>
  })
  
  return (
    <>
      <h2>Lista de compras</h2>
      <ul>{elementosCompras}</ul>
      <hr />
      <h2>Lista de produtos</h2>
      <div>{elementosProdutos}</div>
    </>
  );
}