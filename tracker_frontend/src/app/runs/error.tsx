"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Runs page rendering failed", error);
  }, [error]);

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
      <div className="text-2xl font-semibold text-neutral-900">
        Unable to load runs
      </div>
      <p className="max-w-md text-sm text-neutral-500">
        Something went wrong while loading your run log. Try reloading the page
        or check back in a few minutes.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Retry
      </button>
    </div>
  );
}
