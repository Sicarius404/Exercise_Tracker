"use client";

import { useState, useEffect } from "react";
import { Activity, Download, Link2, Loader2, RefreshCw, CheckCircle2 } from "lucide-react";
import { apiBaseUrl } from "@/lib/config";
import { useCurrentUser } from "@/lib/use-current-user";

export default function StravaPage() {
  const { userId } = useCurrentUser();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isCheckingConnection, setIsCheckingConnection] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (!userId) {
        setIsCheckingConnection(false);
        return;
      }
      try {
        const response = await fetch(`${apiBaseUrl}/strava/connection-status?userId=${userId}`);
        const data = await response.json();
        setIsConnected(data.connected);
      } catch (error) {
        console.error('Failed to check Strava connection:', error);
      } finally {
        setIsCheckingConnection(false);
      }
    };
    checkConnection();
  }, [userId]);

  const handleConnectStrava = async () => {
    if (!userId) return;
    
    setIsConnecting(true);
    try {
      const response = await fetch(`${apiBaseUrl}/strava/auth-url`);
      const data = await response.json();
      
      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl;
      }
    } catch (error) {
      console.error('Failed to get Strava auth URL:', error);
      setIsConnecting(false);
    }
  };

  const handleSyncRuns = async () => {
    if (!userId) return;
    
    setIsSyncing(true);
    try {
      const response = await fetch(`${apiBaseUrl}/strava/sync-runs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      
      if (data.success) {
        alert('Successfully synced new runs from Strava!');
      } else if (data.error) {
        alert(`Failed to sync runs: ${data.details || data.error}`);
      }
    } catch (error) {
      console.error('Failed to sync runs:', error);
      alert('Failed to sync runs from Strava');
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Strava Sync</h2>
          <p className="mt-1 text-sm text-slate-600">
            Connect and import your activities from Strava
          </p>
        </div>
      </div>

      {isCheckingConnection ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        </div>
      ) : isConnected ? (
        <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900">Connected to Strava</h3>
              <p className="mt-2 text-sm text-slate-600">
                Your Strava account is connected. You can sync new activities anytime.
              </p>
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={handleSyncRuns}
                  disabled={isSyncing || !userId}
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSyncing ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                  Sync New Runs
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
                <Activity className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900">Connect to Strava</h3>
              <p className="mt-2 text-sm text-slate-600">
                Link your Strava account to automatically import your runs and activities. 
                All your data will be synced and kept up to date.
              </p>
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={handleConnectStrava}
                  disabled={isConnecting || !userId}
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isConnecting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Link2 className="h-4 w-4" />
                  )}
                  Connect Strava account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Import History</h3>
            <p className="text-sm text-slate-600">Recent activity imports from Strava</p>
          </div>
          <Download className="h-5 w-5 text-slate-400" />
        </div>
        
        <div className="text-center py-12">
          <Download className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-medium text-slate-900">No imports yet</h3>
          <p className="mt-2 text-sm text-slate-500">
            Connect your Strava account to start importing your activities
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h4 className="font-semibold text-slate-900">What gets imported?</h4>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
            <span>Running activities with distance, pace, and duration</span>
          </li>
          <li className="flex items-start gap-2">
            <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
            <span>Activity notes and descriptions</span>
          </li>
          <li className="flex items-start gap-2">
            <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
            <span>Heart rate and performance metrics</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

