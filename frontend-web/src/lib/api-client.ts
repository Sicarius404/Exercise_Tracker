export interface ApiClientConfig {
  readonly baseUrl?: string;
  readonly headers?: Record<string, string>;
}

const DEFAULT_CONFIG: ApiClientConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
};

export class ApiClient {
  private readonly baseUrl: string;
  private readonly defaultHeaders: Record<string, string>;

  constructor(config: ApiClientConfig = DEFAULT_CONFIG) {
    this.baseUrl = config.baseUrl ?? DEFAULT_CONFIG.baseUrl!;
    this.defaultHeaders = config.headers ?? {};
  }

  async get<T>(path: string, init?: RequestInit): Promise<T> {
    return this.request<T>(path, init);
  }

  async post<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    return this.request<T>(path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      ...init,
    });
  }

  async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      credentials: "include",
      headers: {
        ...this.defaultHeaders,
        ...init?.headers,
      },
      ...init,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient();
