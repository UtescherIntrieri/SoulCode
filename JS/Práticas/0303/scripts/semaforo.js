const semaforoImg = document.getElementById("semaforo-img");
const descParagrafo = document.getElementById("semaforo-descricao");

function trocarVermelho() {
  console.log("Mudar para vermelho");
  semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
  descParagrafo.innerHTML = "PARE!";
}

function trocarAmarelo() {
  console.log("Mudar para amarelo");
  semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
  descParagrafo.innerHTML = "FIQUE ATENTO!";
}

function trocarVerde() {
  console.log("Mudar para verde");
  semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
  descParagrafo.innerHTML = "SIGA EM FRENTE!";
}
