"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Teacher from "./Teacher";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

type TeacherCategory =
  | "All Mentors"
  | "For kindergarten"
  | "For high school"
  | "For college"
  | "For Technology";

const Teachers = () => {
  const [active, setActive] = useState<TeacherCategory>("All Mentors");
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories: TeacherCategory[] = [
    "All Mentors",
    "For kindergarten",
    "For high school",
    "For college",
    "For Technology",
  ];

  const teachers = [
    {
      image: "/teacher1.svg",
      name: "Kristin Watson",
      title: "Founder & Mentor",
      rating: 4,
      number: 121,
      category: "All Mentors",
    },
    {
      image: "/teacher2.svg",
      name: "Brooklyn Simmons",
      title: "Founder & Mentor",
      rating: 5,
      number: 98,
      category: "For kindergarten",
    },
    {
      image: "/teacher3.svg",
      name: "Robert Fox",
      title: "Founder & Mentor",
      rating: 4,
      number: 110,
      category: "For high school",
    },
    {
      image: "/teacher4.svg",
      name: "Wade Warren",
      title: "Founder & Mentor",
      rating: 3,
      number: 75,
      category: "For college",
    },
    {
      image: "/teacher5.svg",
      name: "Bessie Cooper",
      title: "Founder & Mentor",
      rating: 5,
      number: 142,
      category: "For Technology",
    },
    {
      image: "/teacher6.svg",
      name: "Ronald Richards",
      title: "Founder & Mentor",
      rating: 4,
      number: 130,
      category: "All Mentors",
    },
    {
      image: "/teacher7.svg",
      name: "Guy Hawkins",
      title: "Founder & Mentor",
      rating: 3,
      number: 89,
      category: "For kindergarten",
    },
    {
      image: "/teacher8.svg",
      name: "Floyd Miles",
      title: "Founder & Mentor",
      rating: 4,
      number: 95,
      category: "For high school",
    },
    {
      image: "/teacher9.svg",
      name: "Theresa Webb",
      title: "Founder & Mentor",
      rating: 5,
      number: 120,
      category: "For college",
    },
    {
      image: "/teacher10.svg",
      name: "Cody Fisher",
      title: "Founder & Mentor",
      rating: 4,
      number: 105,
      category: "For Technology",
    },
    {
      image: "/teacher11.svg",
      name: "Courtney Henry",
      title: "Founder & Mentor",
      rating: 3,
      number: 80,
      category: "All Mentors",
    },
    {
      image: "/teacher12.svg",
      name: "Jerome Bell",
      title: "Founder & Mentor",
      rating: 5,
      number: 140,
      category: "For college",
    },
  ];

  const filteredTeachers =
    active === "All Mentors"
      ? teachers
      : teachers.filter((t) => t.category === active);

  const visibleTeachers = filteredTeachers.slice(
    0,
    windowWidth >= 1024 ? 12 : windowWidth >= 640 ? 9 : 4
  );

  return (
    <section className="flex flex-col gap-5 max-sm:px-[15px] sm:mx-auto sm:max-w-[944px] lg:max-w-[1280px]">
      <ScrollArea className="mb-1 max-w-[90vw] whitespace-nowrap md:mb-6">
        <div className="flex w-max space-x-4 py-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="hobberd"
              size="hobberd"
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "text-background bg-orange-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  : "bg-background"
              }
            >
              {cat}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mx-auto grid grid-cols-1 justify-between gap-[15px] sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-4">
        {visibleTeachers.map((teacher, index) => (
          <Teacher
            key={index}
            image={teacher.image}
            name={teacher.name}
            title={teacher.title}
            rating={teacher.rating}
            number={teacher.number}
          />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
