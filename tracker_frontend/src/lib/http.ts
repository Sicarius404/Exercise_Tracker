import { apiBaseUrl } from "./config";

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  query?: Record<string, string | number | undefined | null>;
  cache?: RequestCache;
  revalidate?: number | false;
};

const createUrl = (path: string, query?: RequestOptions["query"]) => {
  const url = new URL(path, apiBaseUrl);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

export async function httpRequest<T>(
  path: string,
  options: RequestOptions = {}
) {
  const {
    method = "GET",
    body,
    query,
    cache = "no-store",
    revalidate,
  } = options;

  const response = await fetch(createUrl(path, query), {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache,
    ...(revalidate !== undefined ? { next: { revalidate } } : {}),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed for ${path}`);
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
}
