import { IFetchAdapter } from "./ifetch-adapter";

export class FetchAdapter implements IFetchAdapter {
  async request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Request to ${url} failed with status ${response.status} ${response.statusText}: ${errorBody}`,
      );
    }

    return response.json();
  }

  async get<T>(url: string): Promise<T> {
    return await this.request<T>(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async post<T>(url: string, body: object): Promise<T> {
    return await this.request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async put<T>(url: string, body: object): Promise<T> {
    return await this.request<T>(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async delete<T>(url: string): Promise<T> {
    return await this.request<T>(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
