export default function Loading() {
  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-neutral-100 bg-white/70 p-6 shadow-sm">
        <div className="h-6 w-48 animate-pulse rounded-full bg-neutral-200" />
        <div className="mt-3 h-4 w-72 animate-pulse rounded-full bg-neutral-100" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-neutral-100 bg-white/70 p-6 shadow-sm"
          >
            <div className="h-5 w-32 animate-pulse rounded-full bg-neutral-200" />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 3 }).map((__, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="h-4 w-1/2 animate-pulse rounded-full bg-neutral-100" />
                  <div className="h-4 w-16 animate-pulse rounded-full bg-neutral-200" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
