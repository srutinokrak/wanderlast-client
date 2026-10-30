import { Skeleton } from "@/components/ui/skeleton";

const DestinationCardSkeleton = () => (
  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
    {/* Image */}
    <Skeleton className="h-60 w-full rounded-none" />

    {/* Details */}
    <div className="p-5">
      <div className="mb-4 flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-28" />
      </div>

      <div className="mb-5 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Duration and Date */}
      <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Price and Button */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-28" />
        </div>

        <Skeleton className="h-11 w-28 rounded-xl" />
      </div>
    </div>
  </div>
);

export default DestinationCardSkeleton;
