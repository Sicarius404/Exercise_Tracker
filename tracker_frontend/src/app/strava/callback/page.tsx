"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { apiBaseUrl } from "@/lib/config";
import { useCurrentUser } from "@/lib/use-current-user";
import type { Route } from "next";

export default function StravaCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useCurrentUser();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Connecting to Strava...");

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      setStatus("error");
      setMessage("Strava authorization was denied");
      setTimeout(() => router.push("/strava" as Route), 3000);
      return;
    }

    if (!code) {
      setStatus("error");
      setMessage("No authorization code received");
      setTimeout(() => router.push("/strava" as Route), 3000);
      return;
    }

    if (!userId) {
      setMessage("Waiting for user session...");
      return;
    }

    handleStravaCallback(code, userId);
  }, [searchParams, userId, router]);

  const handleStravaCallback = async (code: string, userId: string) => {
    try {
      const callbackResponse = await fetch(`${apiBaseUrl}/strava/callback?code=${code}`);
      const callbackData = await callbackResponse.json();

      if (callbackData.error) {
        setStatus("error");
        setMessage(callbackData.error);
        setTimeout(() => router.push("/strava" as Route), 3000);
        return;
      }

      const { access_token, refresh_token, expires_at } = callbackData.tokenData;
      const { athleteId } = callbackData;

      setMessage("Importing your runs...");

      const importResponse = await fetch(`${apiBaseUrl}/strava/import-runs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: access_token,
          refreshToken: refresh_token,
          expiresAt: expires_at,
          userId,
          athleteId,
        }),
      });

      const importData = await importResponse.json();

      if (importData.error) {
        setStatus("error");
        setMessage(importData.error);
        setTimeout(() => router.push("/strava" as Route), 3000);
        return;
      }

      setStatus("success");
      setMessage("Successfully imported runs from Strava!");
      setTimeout(() => router.push("/runs" as Route), 2000);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to connect to Strava");
      setTimeout(() => router.push("/strava" as Route), 3000);
    }
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        {status === "loading" && (
          <>
            <Loader2 className="mx-auto h-16 w-16 animate-spin text-orange-500" />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{message}</h2>
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{message}</h2>
            <p className="mt-2 text-sm text-slate-600">Redirecting to runs page...</p>
          </>
        )}
        {status === "error" && (
          <>
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">Connection Failed</h2>
            <p className="mt-2 text-sm text-slate-600">{message}</p>
            <p className="mt-1 text-xs text-slate-500">Redirecting back...</p>
          </>
        )}
      </div>
    </div>
  );
}

