"use client";

import { Dumbbell, Plus } from "lucide-react";

export default function GymPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Gym Log</h2>
          <p className="mt-1 text-sm text-slate-600">
            Track your strength training sessions and progress
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          <Plus className="h-4 w-4" />
          Log workout
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Recent Workouts</h3>
            <p className="text-sm text-slate-600">Your latest gym sessions</p>
          </div>
          <Dumbbell className="h-5 w-5 text-indigo-600" />
        </div>
        
        <div className="text-center py-12">
          <Dumbbell className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-medium text-slate-900">No gym sessions yet</h3>
          <p className="mt-2 text-sm text-slate-500">
            Start tracking your strength training by logging your first workout
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            <Plus className="h-4 w-4" />
            Log your first workout
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-medium text-slate-600">Total Volume</div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">0 kg</div>
          <div className="mt-1 text-xs text-slate-500">This month</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-medium text-slate-600">Workouts</div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">0</div>
          <div className="mt-1 text-xs text-slate-500">This month</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-medium text-slate-600">Exercises</div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">0</div>
          <div className="mt-1 text-xs text-slate-500">This month</div>
        </div>
      </div>
    </div>
  );
}

