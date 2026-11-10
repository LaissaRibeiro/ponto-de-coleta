const CITY = "Várzea Grande";
const STATE = "MT";

// CONTINUAR DA  ETAPA 4

export class CollectionPoint {
  constructor(dado) {
    this.id = dado.id;
    this.name = dado.name;
    this.neighborhood = dado.neighborhood;
    this.address = dado.address;
    this.zipCode = dado.zipCode;
    this.materials = dado.materials;
    this.schedule = dado.schedule;
  }

  fullAddress() {
    return `${this.address}, ${this.neighborhood}`;
  }

  mapUrl() {
    const query = [
      this.name,
      this.address,
      this.neighborhood,
      CITY,
      STATE,
      this.zipCode,
    ].join(", ");
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  isIn(neighborhood) {
    return (
      this.neighborhood.trim().toLowerCase() ===
      neighborhood.trim().toLowerCase()
    );
  }
}

export function toCollectionPoints(records) {
  return records.map((record) => new CollectionPoint(record)) 
}


