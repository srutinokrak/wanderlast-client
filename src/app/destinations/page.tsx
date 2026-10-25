type Destination = {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};
const AllDestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  const data:Destination[] = await res.json();

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Discover Your Next Adventure
          </span>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Explore All Destinations
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Find your perfect travel experience from our curated collection.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((destination) => (
            <div
              key={destination._id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                  {destination.category}
                </span>

                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {destination.name}
                </h2>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0Z"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      strokeWidth={1.8}
                    />
                  </svg>
                  {destination.country}
                </div>

                <p className="mb-5 line-clamp-2 min-h-12 text-sm leading-6 text-slate-500">
                  {destination.description}
                </p>

                {/* Duration and Date */}
                <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
                  <div>
                    <p className="mb-1 text-xs text-slate-400">
                      DURATION
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {destination.duration}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-slate-400">
                      DEPARTURE DATE
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {destination.departureDate
                        ? new Date(
                            `${destination.departureDate.slice(0, 10)}T00:00:00`
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400">
                      Starting from
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-emerald-700">
                      ৳{Number(destination.price).toLocaleString("en-BD")}
                      <span className="ml-1 text-xs font-medium text-slate-400">
                        / person
                      </span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Explore <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDestinationPage;
