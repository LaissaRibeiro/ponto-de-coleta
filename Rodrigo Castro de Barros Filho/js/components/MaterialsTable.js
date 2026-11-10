import { api } from "../services/ApiClient.js";

export class MaterialsTable {
  constructor() {
    this.tableBody = document.querySelector("#materials-body");
  }

  async load() {
    const materials = await api.list("materials");
    this.tableBody.replaceChildren(
      ...materials.map((material) => this.buildRow(material)),
    );
  }

  buildRow(material) {
    const row = document.createElement("tr");

    const name = document.createElement("th");
    name.scope = "row";
    name.textContent = material.name;

    const accepted = document.createElement("td");
    accepted.textContent = material.accepted;

    const howToDeliver = document.createElement("td");
    howToDeliver.textContent = material.howToDeliver;

    row.append(name, accepted, howToDeliver);
    return row;
  }
}
