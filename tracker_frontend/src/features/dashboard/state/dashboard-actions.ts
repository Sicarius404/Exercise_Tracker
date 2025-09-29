import { dashboardEndpoints, defaultUserId } from "@/lib/config";
import { httpRequest } from "@/lib/http";

type DashboardEndpointKey = keyof typeof dashboardEndpoints;

type FetchOptions = {
  query?: Record<string, string | number | null | undefined>;
};

export async function fetchDashboardData<TReturn>(
  endpoint: DashboardEndpointKey,
  options?: FetchOptions
): Promise<TReturn> {
  return httpRequest<TReturn>(dashboardEndpoints[endpoint], {
    query: {
      userId: defaultUserId,
      ...options?.query,
    },
    cache: "no-store",
  });
}
