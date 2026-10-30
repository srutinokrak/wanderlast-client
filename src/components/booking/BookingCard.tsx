"use client"
import { authClient } from '@/lib/auth-client';
import { Destination } from '@/types/destination';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';


const BookingCard = ({destination}:{destination:Destination}) => {

      const { data: session } = authClient.useSession();
    
      const user = session?.user;
    
    //  console.log(destination);
    return (
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/80 sticky top-6 shadow-sm space-y-6">
              
              {/* Pricing Display */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Starting from
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-gray-900">
                    ৳{destination.price.toLocaleString("en-BD")}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">per person</p>
              </div>

              {/* Departure Date Box */}
              <div className="bg-white p-3.5 rounded-lg border border-gray-200 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Departure Date</p>
                  <p className="text-sm font-bold text-gray-800">{destination.departureDate}</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 active:scale-[0.98]">
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Perks List */}
              <div className="space-y-2.5 pt-4 border-t border-gray-200 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Free cancellation up to 7 days prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Travel insurance assistance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>24/7 dedicated customer support</span>
                </div>
              </div>

            </div>
          </div>
    );
};

export default BookingCard;