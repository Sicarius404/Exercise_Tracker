"use client";

import { Bell, Globe, Moon, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="mt-1 text-sm text-slate-600">
          Manage your account preferences and application settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <User className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Profile</h3>
              <p className="text-sm text-slate-600">Update your personal information</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                defaultValue="Alex Runner"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                defaultValue="test@example.com"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Save changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Bell className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
              <p className="text-sm text-slate-600">Manage your notification preferences</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">Email notifications</div>
                <div className="text-sm text-slate-600">Receive updates via email</div>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">Workout reminders</div>
                <div className="text-sm text-slate-600">Get reminded about scheduled workouts</div>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Globe className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Preferences</h3>
              <p className="text-sm text-slate-600">Customize your app experience</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Units</label>
              <select className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <option>Metric (km, kg)</option>
                <option>Imperial (mi, lb)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">Dark mode</div>
                <div className="text-sm text-slate-600">Switch to dark theme</div>
              </div>
              <Moon className="h-5 w-5 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

