import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <div className="text-4xl font-semibold text-neutral-900">
        Page missing
      </div>
      <p className="max-w-md text-sm text-neutral-500">
        The page you are looking for might have been moved or no longer exists.
        Check the navigation menu or go back to the dashboard to continue your
        training plan.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Go to dashboard
        </Link>
        <Link
          href="/runs"
          className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300"
        >
          View run log
        </Link>
      </div>
    </div>
  );
}
