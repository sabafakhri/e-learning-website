type SortByProps = {
  value: "Instructor" | "Price";
  onChange: (val: "Instructor" | "Price" | "latest") => void;
};

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortBy({ value, onChange }: SortByProps) {
  return (
    <div className="h-9">
    <Select onValueChange={(val) => onChange(val as "latest" | "Instructor" | "Price")}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Sort by: Latest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="latest">latest</SelectItem>
          <SelectItem value="Instructor">Instructor</SelectItem>
          <SelectItem value="Price">Price</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
}
