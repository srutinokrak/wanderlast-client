"use client";

import Link from "next/link";

import { ArrowLeft} from "lucide-react";
import EditDestinationDialog from "./EditDestinationDialog";
import { Destination } from "@/types/destination";
import DeleteDestinationDialog from "./DeleteDestinationDialog";

type DestinationDetailActionsProps = {
  destination: Destination
};

const DestinationDetailActions = ({ destination }: DestinationDetailActionsProps) => {

  const id = destination._id


  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 pt-7 pb-5 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/destinations"
        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        <span>Back to Destinations</span>
      </Link>

      {/* Edit / Delete */}
      <div className="flex items-center gap-3">
        
        
       
       <EditDestinationDialog destination={destination}/>
       <DeleteDestinationDialog id={id}/>
     
      </div>
    </div>
  );
};

export default DestinationDetailActions;
