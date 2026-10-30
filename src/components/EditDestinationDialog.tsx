"use client";

import { useState } from "react";
import { Briefcase, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Destination } from "@/types/destination";


type EditDestinationProps = {
  destination: Destination;
};
const CATEGORIES = [
  "Beach",
  "Mountain",
  "City",
  "Cultural",
  "Adventure",
  "Wilderness",
];

// const initialForm = {
//   name: "",
//   country: "",
//   category: "",
//   price: "",
//   duration: "",
//   departureDate: "",
//   imageUrl: "",
//   description: "",
// };

const EditDestinationDialog = ({destination}:EditDestinationProps) => {

   console.log(destination);
  const [form, setForm] = useState(destination);
  
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {_id , ...updatedData} = form

    const res = await fetch(`http://localhost:8000/destination/${destination._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    console.log(data);
    setForm(destination);
  };
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50">
  <Pencil className="h-4 w-4 text-gray-700" />
  <span>Edit</span>
</DialogTrigger>
      <DialogContent className={'min-w-xl'}>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            <Card className="mx-auto w-full max-w-2xl">
              <CardContent>
                <form onSubmit={handleSubmit} className="mt-2 space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Destination Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Bali Paradise"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        placeholder="Indonesia"
                        value={form.country}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={form.category || null}
                        onValueChange={(value) =>
                          setForm({ ...form, category: value as string })
                        }
                      >
                        <SelectTrigger id="category" className="w-full">
                          <SelectValue placeholder="Beach" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="price">Price (USD)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="e.g. 1299"
                        value={form.price}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        placeholder="e.g. 7 Days/6 Nights"
                        value={form.duration}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="departureDate">Departure Date</Label>
                    <Input
                      id="departureDate"
                      name="departureDate"
                      type="date"
                      value={form.departureDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={form.imageUrl}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Describe the travel experience..."
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => history.back()}
                    >
                      <Undo2 />
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Briefcase data-icon="inline-start" />
                      Edit Travel Package
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDialog;
