import DestinationCard from "@/components/destination-card";
import DestinationHeading from "@/components/destination-heading";
import type { Destination } from "@/types/destination";

const AllDestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  const data: Destination[] = await res.json();

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <DestinationHeading />

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDestinationPage;
