"use client";

import { Calendar, Plus } from "lucide-react";

export default function PlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Training Plans</h2>
          <p className="mt-1 text-sm text-slate-600">
            View and manage your weekly training schedule
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          <Plus className="h-4 w-4" />
          New plan
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Run Plans */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Run Plans</h3>
              <p className="text-sm text-slate-600">Weekly running schedule</p>
            </div>
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">Week 1 Plan</div>
                  <div className="text-sm text-slate-500">5 runs scheduled</div>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-500">
                  View
                </button>
              </div>
            </div>
            <div className="text-center py-8 text-sm text-slate-500">
              No run plans scheduled yet
            </div>
          </div>
        </div>

        {/* Gym Plans */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Gym Plans</h3>
              <p className="text-sm text-slate-600">Strength training schedule</p>
            </div>
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="space-y-3">
            <div className="text-center py-8 text-sm text-slate-500">
              No gym plans scheduled yet
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6">
        <h3 className="mb-2 font-semibold text-indigo-900">Create your first plan</h3>
        <p className="mb-4 text-sm text-indigo-700">
          Get started by creating a training plan to organize your weekly workouts and track your progress.
        </p>
        <div className="flex gap-3">
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
            Create run plan
          </button>
          <button className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50">
            Create gym plan
          </button>
        </div>
      </div>
    </div>
  );
}

