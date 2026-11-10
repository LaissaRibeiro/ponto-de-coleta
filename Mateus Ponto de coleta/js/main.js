import { toCollectionPoints } from "./CollectionPoint.js";

const RECORDS = [
  {
    id: 1,
    name: "Ecoponto Centro-Sul",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
  {
    id: 2,
    name: "Local xpto",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
  {
    id: 3,
    name: "Local Batata",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
];

const points = toCollectionPoints(RECORDS);

console.table(
  points.map((point) => ({
    nome: point.name,
    endereco: point.fullAddress(),
    materiais: point.materials.length,
  })),
);

// const botao = document.getElementById("search-button");

const spanx = document.createElement("span");
spanx.textContent = "meu span criado";

class BotaoDeDownload {
  constructor() {
    this.botao = document.createElement("button");
    this._init()
  }

  _init(){
    this.botao.textContent = "Baixar";

    if (this.botao !== null) {
      this.botao.addEventListener("click", () => {
        this.botao.textContent = "Loading...";
        this.botao.appendChild(spanx);
        alert("Baixando....");
        setTimeout(() => {
          this.botao.textContent = "Buscar";
          this.botao.remove()
        }, 5000);
      });

      const e = document.querySelector("div.zip-search")
      e.appendChild(this.botao)
    }
  }

  changeName(nome){
    this.botao.textContent = nome;
  }
}

class Btn extends BotaoDeDownload{
  constructor(){ super() }
  changeName(nome){
    this.botao.textContent = nome + " - XPTO";
  }
}

const btn = new Btn()

btn.changeName("novo nome DASDASDASDSADSA")
