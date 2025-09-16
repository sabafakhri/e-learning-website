type SortByProps = {
  value: "Instructor" | "Price";
  onChange: (val: "Instructor" | "Price") => void;
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
    <Select onValueChange={(val) => onChange(val as "Instructor" | "Price")}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="Instructor">Instructor</SelectItem>
          <SelectItem value="Price">Price</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
