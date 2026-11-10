import { toCollectionPoints } from "../CollectionPoint.js";
import { PointCard } from "./PointCard.js";
import { api } from "../services/ApiClient.js";

export class PointCatalog {
  constructor() {
    this.list = document.querySelector("#catalog");
  }

  async load() {
    const points = toCollectionPoints(await api.list("points"));
    this.showPoints(points);
    return points;
  }

  showPoints(points) {
    this.list.replaceChildren(
      ...points.map((point) => new PointCard(point).toElement()),
    );
  }
}
