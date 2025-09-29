export default function Loading() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="h-6 w-48 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-4 w-72 animate-pulse rounded-full bg-neutral-100" />
      </div>
      <div className="rounded-3xl border border-neutral-100 bg-white/70 p-6 shadow-sm">
        <div className="grid gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid gap-2 md:grid-cols-2">
              <div className="h-4 w-full animate-pulse rounded-full bg-neutral-100" />
              <div className="h-4 w-full animate-pulse rounded-full bg-neutral-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-neutral-100 bg-white/70 p-6 shadow-sm">
        <div className="h-4 w-32 animate-pulse rounded-full bg-neutral-200" />
        <div className="mt-4 space-y-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6"
            >
              <div className="h-4 w-1/4 animate-pulse rounded-full bg-neutral-100" />
              <div className="h-4 w-1/5 animate-pulse rounded-full bg-neutral-100" />
              <div className="h-4 w-1/5 animate-pulse rounded-full bg-neutral-100" />
              <div className="h-4 w-1/5 animate-pulse rounded-full bg-neutral-100" />
              <div className="h-4 w-8 animate-pulse rounded-full bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
