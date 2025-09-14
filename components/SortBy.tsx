import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SortByProps = {
  value: "Instructor" | "Price";
  onChange: (val: "Instructor" | "Price") => void;
};

export default function SortBy({ value, onChange }: SortByProps) {
  return (
    <Select onValueChange={(val) => onChange(val as "Instructor" | "Price")}>
      <SelectTrigger className="-mt-20 max-w-[90px] border-0 md:mt-0 md:max-w-[120px]">
        <SelectValue placeholder="Instructor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Instructor">Instructor</SelectItem>
          <SelectItem value="Price">Price</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
