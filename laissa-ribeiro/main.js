import { toCollectionPoints } from "./js/CollectionPoint.js";

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
    name: "Farmácia Solidária Cristo Rei",
    neighborhood: "Cristo Rei",
    address: "Avenida Brasil, 845",
    zipCode: "",
    materials: ["medicine"],
    schedule: "Segunda a sábado, 7h às 19h",
  },
  {
    id: 3,
    name: "Mercado Cristo Rei",
    neighborhood: "Cristo Rei",
    address: "Avenida das Palmeiras, 350",
    zipCode: "",
    materials: ["cooking-oil"],
    schedule: "Segunda a sábado, 7h às 17h",
  },
 {
    id: 4,
    name: "Escola Municipal Glória",
    neighborhood: " Glória",
    address: "Rua Justiça, 55",
    zipCode: "",
    materials: ["cooking-oil", "recyclabe"],
    schedule: "Segunda a sexta, 7h às 17h",
  },
 {
    id: 5,
    name: "Posto Costa Verde",
    neighborhood: "Costa Verde",
    address: "Rua Brigadeiro Eduardo Gomes, 2200",
    zipCode: "",
    materials: ["battery", "cooking-oil", "electronics"],
    schedule: "Todos os dias, 6h às 22h",
  },
   {
    id: 6,
    name: "UBS Novo Mundo",
    neighborhood: "Novo Mundo",
    address: "Avenida Porto Rico, 78",
    zipCode: "",
    materials: ["cooking-oil"],
    schedule: "Segunda a sexta, 7h às 18h",
  },
];

const points = toCollectionPoints(RECORDS);

console.table(
  points.map((point) => ({
    nome: point.name,
    endereco: point.fullAddress(),
    materiais: point.materials.length,
  }))
);
