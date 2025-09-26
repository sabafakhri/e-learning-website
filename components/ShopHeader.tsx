"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function BookFilterBar() {
  const [category, setCategory] = useState("all");

  return (
    <div className="flex flex-col gap-4 w-full my-3">
      {/* ✅ Wrap TabsList with Tabs */}
      <Tabs value={category} onValueChange={setCategory} className="w-full my-8">
        {/* Category Tabs */}
        <TabsList className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 bg-transparent w-full">
          <TabsTrigger
            value="all"
            className="w-full data-[state=active]:bg-red-400 data-[state=active]:text-white rounded-xl px-6 py-4 text-lg font-semibold"
          >
            All Books
          </TabsTrigger>
          <TabsTrigger
            value="kindergarten"
            className="w-full data-[state=active]:bg-red-400 data-[state=active]:text-white rounded-xl px-6 py-4 text-lg font-semibold"
          >
            Kindergarten
          </TabsTrigger>
          <TabsTrigger
            value="highschool"
            className="w-full data-[state=active]:bg-red-400 data-[state=active]:text-white rounded-xl px-6 py-4 text-lg font-semibold"
          >
            High School
          </TabsTrigger>
          <TabsTrigger
            value="college"
            className="w-full data-[state=active]:bg-red-400 data-[state=active]:text-white rounded-xl px-6 py-4 text-lg font-semibold"
          >
            College
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search + Sort Row */}
      <div className="grid grid-cols-1 mb-4 md:grid-cols-2 gap-3">
        {/* Search */}
        <div className="flex items-center rounded-xl bg-background shadow-sm p-2">
          <Input
            placeholder="Search Class, Course, Book Name"
            className="border-0 focus-visible:ring-0 flex-1"
          />
          <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
            <Search className="w-4 h-4 text-white" />
          </Button>
        </div>

        {/* Sort Select */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-muted-foreground">Sort by:</span>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

