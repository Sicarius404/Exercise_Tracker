"use client";

import { Key, Shield, Smartphone } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Security</h2>
        <p className="mt-1 text-sm text-slate-600">
          Manage your account security and authentication settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Password */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Key className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Password</h3>
              <p className="text-sm text-slate-600">Update your password regularly for security</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Current password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">New password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Confirm new password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Update password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Two-Factor Authentication</h3>
              <p className="text-sm text-slate-600">Add an extra layer of security to your account</p>
            </div>
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-slate-900">Status: Not enabled</div>
              <div className="mt-1 text-sm text-slate-600">
                Protect your account with 2FA using an authenticator app
              </div>
            </div>
            <button className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50">
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Active Sessions</h3>
              <p className="text-sm text-slate-600">Manage devices where you're currently logged in</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
              <div>
                <div className="font-medium text-slate-900">Current Session</div>
                <div className="text-sm text-slate-600">macOS • Chrome • 1 hour ago</div>
              </div>
              <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Active
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div>
              <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
              <p className="text-sm text-red-700">Irreversible actions for your account</p>
            </div>
          </div>
          
          <button className="rounded-lg border border-red-600 bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}

