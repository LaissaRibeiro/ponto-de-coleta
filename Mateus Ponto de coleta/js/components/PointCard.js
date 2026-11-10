export class PointCard {
  constructor(point) {
    this.point = point;
  }

  toElement() {
    const item = document.createElement("li");
    item.classList.add("card");
    item.dataset.materials = this.point.materials.join(" ");
    item.append(this.buildLink());
    return item;
  }

  buildLink() {
    const link = document.createElement("a");
    link.classList.add("card-link");
    link.href = this.point.mapUrl();
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute(
      "aria-label",
      `Abrir ${this.point.name} no Google Maps (abre em nova aba)`,
    );

    const name = document.createElement("h3");
    name.textContent = this.point.name;

    const address = document.createElement("p");
    address.textContent = this.point.fullAddress();

    const schedule = document.createElement("p");
    schedule.classList.add("schedule");
    schedule.textContent = this.point.schedule;

    link.append(name, address, schedule);
    return link;
  }
}
