"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import {  useRouter } from "next/navigation";



const DeleteDestinationDialog = ({id}:{id:string}) => {
  const router = useRouter()
    const handleDeleteDestination =async() =>{
       const res = await fetch(`http://localhost:8000/destination/${id}`,{
        method: "DELETE",
       })

       await res.json()
     
    if (!res.ok) {
      throw new Error(`Delete failed: ${res.status}`);
    }

    router.push("/destinations");
    router.refresh();
  };

    
    return (
        <div>
            <AlertDialog>
  <AlertDialogTrigger render={<button 
          type="button"
        
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4 text-red-500" />
          <span>Delete</span>
        </button>}>
    Show Dialog
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDeleteDestination}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </div>
    );
};

export default DeleteDestinationDialog;