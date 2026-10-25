import AddDestinationForm from "@/components/add-destination-form";

export const metadata = {
  title: "Add New Travel Package | Wanderlast",
};

export default function AddDestinationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Add New Travel Package
      </h1>
      <div className="mt-10">
        <AddDestinationForm />
      </div>
    </div>
  );
}
