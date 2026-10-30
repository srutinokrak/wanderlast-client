import Image from "next/image";
import {  Clock, MapPin, CheckCircle2 } from "lucide-react";
import DestinationDetailActions from "@/components/destination-detail-actions";
import type { Destination } from "@/types/destination";
import BookingCard from "@/components/booking/BookingCard";

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/destinations/${id}`);
  const destination: Destination = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Back link + Edit / Delete actions */}
      <DestinationDetailActions destination={destination} />

      {/* Hero Image Banner */}
      <div className="relative w-full h-87.5 md:h-112.5 bg-gray-900">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details (2 Columns span) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Location & Category Header */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>{destination.country}</span>
              <span>•</span>
              <span className="bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                {destination.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {destination.name}
            </h1>

            {/* Meta info bar */}
            <div className="flex items-center gap-6 py-3 border-y border-gray-100 text-gray-600">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>{destination.duration}</span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {destination.description}
              </p>
            </div>

            {/* Highlights Section */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Curated local sightseeing & experiences</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Professional guide support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Handpicked premium accommodations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Seamless itinerary coordination</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Booking Sidebar */}
        <BookingCard  destination={destination }/>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;