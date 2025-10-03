import { dashboardEndpoints } from "@/lib/config";
import { httpRequest } from "@/lib/http";

type DashboardEndpointKey = keyof typeof dashboardEndpoints;

type FetchOptions = {
  userId: string;
  query?: Record<string, string | number | null | undefined>;
};

export async function fetchDashboardData<TReturn>(
  endpoint: DashboardEndpointKey,
  options: FetchOptions
): Promise<TReturn> {
  return httpRequest<TReturn>(dashboardEndpoints[endpoint], {
    query: {
      userId: options.userId,
      ...options?.query,
    },
    cache: "no-store",
  });
}
