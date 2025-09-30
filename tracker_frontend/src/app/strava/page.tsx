"use client";

import { Activity, Download, Link2 } from "lucide-react";

export default function StravaPage() {
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
              <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600">
                <Link2 className="h-4 w-4" />
                Connect Strava account
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

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

