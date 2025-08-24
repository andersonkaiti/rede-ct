import { env } from '@config/env'
import type { IFetchAdapter } from './ifetch-adapter'

export class FetchAdapter implements IFetchAdapter {
  async request<T>(url: string, options: RequestInit): Promise<T> {
    const fullUrl = `${env.NEXT_PUBLIC_BASE_URL}${url}`
    const response = await fetch(fullUrl, options)

    // biome-ignore lint/suspicious/noConsole: for debug
    console.log(options.method, fullUrl)

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(
        `Request to ${fullUrl} failed with status ${response.status} ${response.statusText}: ${errorBody}`
      )
    }

    return response.json()
  }

  async get<T>(url: string): Promise<T> {
    return await this.request<T>(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async post<T>(
    url: string,
    body: object | FormData,
    config?: RequestInit
  ): Promise<T> {
    const headers =
      body instanceof FormData
        ? undefined
        : {
            'Content-Type': 'application/json',
          }

    return await this.request<T>(url, {
      ...config,
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
      headers,
    })
  }

  async put<T>(url: string, body: object | FormData): Promise<T> {
    const headers =
      body instanceof FormData
        ? undefined
        : {
            'Content-Type': 'application/json',
          }

    return await this.request<T>(url, {
      method: 'PUT',
      body: body instanceof FormData ? body : JSON.stringify(body),
      headers,
    })
  }

  async delete<T>(url: string, body?: object | FormData): Promise<T> {
    const isFormData = body instanceof FormData

    return await this.request<T>(url, {
      method: 'DELETE',
      body: isFormData ? body : JSON.stringify(body),
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
    })
  }
}
