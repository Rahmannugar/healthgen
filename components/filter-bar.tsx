"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { specialties } from "../data/mockdata";
import { Card } from "@/components/ui/card";

interface FilterBarProps {
  specialty: string;
  setSpecialty: (value: string) => void;
  availability: string;
  setAvailability: (value: string) => void;
}

export default function FilterBar({
  specialty,
  setSpecialty,
  availability,
  setAvailability,
}: FilterBarProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Filter Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="specialty">Specialty</Label>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger id="specialty" className="w-full">
              <SelectValue
                defaultValue={specialty}
                placeholder="Select specialty"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <Select value={availability} onValueChange={setAvailability}>
            <SelectTrigger id="availability" className="w-full">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="available">Available Now</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}
