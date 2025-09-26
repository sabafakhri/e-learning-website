"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SortBy from "./ui/SortBy";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Course } from "@/types/types";
import OCourseCard from "./OCourseCard";

type OtherCoursesProps = {
  courses: Course[];
};

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const checkScreen = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(3);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return itemsPerPage;
}

export default function OtherCoursesPagination({
  courses,
}: OtherCoursesProps): ReactElement {
  //component memory | state management
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"Instructor" | "Price">("Instructor");

  //state for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = useItemsPerPage();

  //filter and sort courses based on search term and sortBy value
  const filteredAndSortedCourses = useMemo(() => {
    return courses
      .filter((Course) =>
        Course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "Instructor") return a.title.localeCompare(b.title);
        if (sortBy === "Price") return a.price - b.price;
        return 0;
      });
  }, [courses, sortBy, searchTerm]);

  // Calculate pagination variables from the memoized list
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(filteredAndSortedCourses.length / itemsPerPage);
  const currentItems = filteredAndSortedCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  //scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, sortBy]);

  return (
    <section className="flex flex-col">
      <h2 className="text-24-100 font-semibold">
        Other Courses For High School
      </h2>

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <Input
            id="search-courses"
            className="h-12.5 rounded-[5px] pr-28 md:pr-32"
            placeholder="Search Class, Course"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            size="default"
            variant="default"
            className="absolute top-1/2 right-[5px] -translate-y-1/2"
            aria-label="Search"
          >
            <SearchIcon className="mr-0 sm:mr-2" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </div>
        <SortBy value={sortBy} onChange={setSortBy}></SortBy>
        <div>
          {currentItems.map((course) => (
            <OCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
