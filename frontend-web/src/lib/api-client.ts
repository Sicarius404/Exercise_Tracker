export interface ApiClientConfig {
  readonly baseUrl?: string;
  readonly headers?: Record<string, string>;
}

const DEFAULT_CONFIG: ApiClientConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
};

export class ApiError extends Error {
  readonly status: number;
  readonly body?: unknown;

  constructor(message: string, status: number, body?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

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
      ...this.withJson(body, init),
    });
  }

  async patch<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    return this.request<T>(path, {
      method: "PATCH",
      ...this.withJson(body, init),
    });
  }

  async put<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    return this.request<T>(path, {
      method: "PUT",
      ...this.withJson(body, init),
    });
  }

  async delete<T>(path: string, init?: RequestInit): Promise<T> {
    return this.request<T>(path, {
      method: "DELETE",
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
      const errorBody = await this.safeParseBody(response);
      const message = this.resolveErrorMessage(response.status, errorBody);
      throw new ApiError(message, response.status, errorBody);
    }

    return this.safeParseBody<T>(response);
  }

  private withJson(body: unknown, init?: RequestInit): RequestInit {
    return {
      ...init,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    };
  }

  private async safeParseBody<T = unknown>(response: Response): Promise<T> {
    if (response.status === 204) {
      return undefined as T;
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      try {
        return (await response.json()) as T;
      } catch {
        return undefined as T;
      }
    }

    if (contentType.startsWith("text/")) {
      return (await response.text()) as unknown as T;
    }

    return (await response.blob()) as unknown as T;
  }

  private resolveErrorMessage(status: number, body: unknown): string {
    if (body && typeof body === "object" && "message" in body) {
      const messageValue = (body as Record<string, unknown>).message;
      if (typeof messageValue === "string" && messageValue.trim().length > 0) {
        return messageValue;
      }
    }

    return `Request failed with status ${status}`;
  }
}

export const apiClient = new ApiClient();
