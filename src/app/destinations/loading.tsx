import DestinationCardSkeleton from "@/components/destination-card-skeleton";
import DestinationHeading from "@/components/destination-heading";

const LoadingDestinationsPage = () => (
  <section className="min-h-screen bg-slate-50 px-5 py-16 md:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <DestinationHeading />

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <DestinationCardSkeleton key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default LoadingDestinationsPage;
