import { PointCatalog } from "./components/PointCatalog.js";
import { MaterialFilter } from "./components/MaterialFilter.js";
import { MaterialsTable } from "./components/MaterialsTable.js";

// Menu responsivo: existe somente nas páginas que possuem o botão.
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const aberto = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(aberto));
  });
}

// Cada página é reconhecida pelo elemento que só ela possui.
if (document.querySelector("#catalog")) {
  new PointCatalog().load().then(() => new MaterialFilter().init());
}

if (document.querySelector("#materials-body")) {
  new MaterialsTable().load();
}
