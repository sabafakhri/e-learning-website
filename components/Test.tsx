"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SortBy from "./ui/SortBy";
import { Course } from "@/types/types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";

interface OtherCoursesProps {
  courses: Course[];
}

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
  const Courses = [
    {
      id: "1",
      title: "Introduction to Algebra",
      rating: 4.5,
      price: 49.99,
      imageUrl: "https://placehold.co/400x300/A78BFA/FFFFFF?text=Algebra",
    },
    {
      id: "2",
      title: "World History: 1900-2000",
      rating: 4.8,
      price: 59.5,
      imageUrl: "https://placehold.co/400x300/FBBF24/FFFFFF?text=History",
    },
    {
      id: "3",
      title: "Fundamentals of Physics",
      rating: 4.2,
      price: 65.0,
      imageUrl: "https://placehold.co/400x300/60A5FA/FFFFFF?text=Physics",
    },
    {
      id: "4",
      title: "Creative Writing Workshop",
      rating: 5,
      price: 39.0,
      imageUrl: "https://placehold.co/400x300/F472B6/FFFFFF?text=Writing",
    },
    {
      id: "5",
      title: "High School Chemistry",
      rating: 4.6,
      price: 55.99,
      imageUrl: "https://placehold.co/400x300/34D399/FFFFFF?text=Chemistry",
    },
    {
      id: "6",
      title: "Digital Art & Design Basics",
      rating: 4.9,
      price: 75.0,
      imageUrl: "https://placehold.co/400x300/FB923C/FFFFFF?text=Art",
    },
    {
      id: "7",
      title: "Introduction to Python Programming",
      rating: 4.7,
      price: 89.99,
      imageUrl: "https://placehold.co/400x300/818CF8/FFFFFF?text=Code",
    },
    {
      id: "8",
      title: "American Literature Classics",
      rating: 4.4,
      price: 45.0,
      imageUrl: "https://placehold.co/400x300/FBBF24/FFFFFF?text=Literature",
    },
    {
      id: "9",
      title: "Public Speaking Essentials",
      rating: 4.8,
      price: 29.99,
      imageUrl: "https://placehold.co/400x300/A78BFA/FFFFFF?text=Speaking",
    },
  ];

  //component memory | state management
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"Instructor" | "Price">("Instructor");

  //state for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = useItemsPerPage();

  //filter and sort courses based on search term and sortBy value
  const filteredAndSortedCourses = useMemo(() => {
    return Courses.filter((Course) =>
      Course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
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
    <section>
      <h2 className="text-30-100 font-semibold max-sm:hidden">
        Other Courses For High School
      </h2>
      <h2 className="text-24-100 font-semibold sm:hidden">
        Other Courses For High School
      </h2>
      <div className="relative flex items-center">
        <Input
          className="h-12.5 rounded-[5px]"
          placeholder="Search Class, Course"
        ></Input>
      </div>
      <Button
        size="default"
        variant="default"
        className="absolute right-[5px] max-sm:hidden"
      >
        <SearchIcon /> Search
      </Button>
      <Button
        size="default"
        variant="default"
        className="absolute right-[5px] sm:hidden"
      >
        <SearchIcon />
      </Button>

      <SortBy value={sortBy} onChange={setSortBy} />
    </section>
  );

  //   return (
      <section>
        <h2 className="text-30-100 font-semibold max-sm:hidden">
          Other Courses For High School
        </h2>
        <h2 className="text-24-100 font-semibold sm:hidden">
          Other Courses For High School
        </h2>
        <div className="relative flex items-center">
          <Input
            className="h-12.5 rounded-[5px]"
            placeholder="Search Class, Course"
          ></Input>
          <Button
            size="default"
            variant="default"
            className="absolute right-[5px] max-sm:hidden"
          >
            <SearchIcon /> Search
          </Button>
          <Button
            size="default"
            variant="default"
            className="absolute right-[5px] sm:hidden"
          >
            <SearchIcon />
          </Button>
          <div className="mb-1 flex items-center justify-end gap-2 text-xs sm:text-sm">
            <p className="-mt-20 md:mt-0">Sort by:</p>
            {/* ✅ Use SortBy component */}
            <SortBy value={sortBy} onChange={setSortBy} />
          </div>
          <SortBy value={sortBy} onChange={setSortBy} />
        </div>
      </section>
  //   );
}

//  <h2 className="text-24-100 font-semibold">
//         Other Courses For High School
//       </h2>

//       <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//         <div className="relative flex-grow">
//           <label htmlFor="search-courses" className="sr-only">
//             Search Courses
//           </label>
//           <Input
//             id="search-courses"
//             className="h-12.5 rounded-[5px] pr-28 md:pr-32"
//             placeholder="Search Class, Course"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Button
//             size="default"
//             variant="default"
//             className="absolute top-1/2 right-[5px] -translate-y-1/2"
//             aria-label="Search"
//           >
//             <SearchIcon className="mr-0 sm:mr-2" />
//             <span className="hidden sm:inline">Search</span>
//           </Button>
//         </div>
