export interface IFetchAdapter {
  request<T>(url: string, options: RequestInit): Promise<T>
  get<T>(url: string): Promise<T>
  post<T>(url: string, body: object | FormData): Promise<T>
  put<T>(url: string, body: object | FormData): Promise<T>
  delete<T>(url: string, body: object | FormData): Promise<T>
}
