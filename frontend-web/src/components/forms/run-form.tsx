import { useState } from "react";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/lib/auth-store";

interface RunFormProps {
  readonly onSuccess?: () => void;
  readonly onCancel?: () => void;
}

export function RunForm({ onSuccess, onCancel }: RunFormProps) {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    distance: "",
    duration: "",
    pace: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    setError("");

    try {
      await apiClient.post("/runs", {
        date: formData.date,
        distance: parseFloat(formData.distance),
        duration: parseFloat(formData.duration),
        pace: parseFloat(formData.pace),
        notes: formData.notes || undefined,
        userId: user.id,
      });

      onSuccess?.();
    } catch {
      setError("Failed to save run");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-900/20 border border-red-800 p-3">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-zinc-300"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div>
          <label
            htmlFor="distance"
            className="block text-sm font-medium text-zinc-300"
          >
            Distance (km)
          </label>
          <input
            id="distance"
            type="number"
            step="0.1"
            required
            value={formData.distance}
            onChange={(e) =>
              setFormData({ ...formData, distance: e.target.value })
            }
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="5.0"
          />
        </div>

        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-zinc-300"
          >
            Duration (minutes)
          </label>
          <input
            id="duration"
            type="number"
            step="0.1"
            required
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="25.5"
          />
        </div>

        <div>
          <label
            htmlFor="pace"
            className="block text-sm font-medium text-zinc-300"
          >
            Pace (min/km)
          </label>
          <input
            id="pace"
            type="number"
            step="0.01"
            required
            value={formData.pace}
            onChange={(e) => setFormData({ ...formData, pace: e.target.value })}
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="5.10"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-zinc-300"
        >
          Notes (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          placeholder="How did the run feel?"
        />
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Run"}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
