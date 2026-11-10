const BASE_URL = "http://localhost:3000";

export class ApiClient {
  constructor(baseUrl = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async list(collection) {
    const response = await fetch(`${this.baseUrl}/${collection}`);

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    return await response.json();
  }
}

export const api = new ApiClient();
