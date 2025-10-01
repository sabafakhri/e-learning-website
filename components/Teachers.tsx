"use client"

import { useState } from "react"
import { Button } from "./ui/button"

type TeacherCategory =
  | "All Mentors"
  | "For kindergarten"
  | "For high school"
  | "For college"
  | "For Technology"

const Teachers = () => {
  const [active, setActive] = useState<TeacherCategory>("All Mentors")

  const categories: TeacherCategory[] = [
    "All Mentors",
    "For kindergarten",
    "For high school",
    "For college",
    "For Technology",
  ]

  const teachers = [
    { image: "/teacher1.svg", name: "Kristin Watson", title: "Founder & Mentor", rating: 4, number: 121, category: "All Mentors" },
    { image: "/teacher2.svg", name: "Brooklyn Simmons", title: "Founder & Mentor", rating: 5, number: 98, category: "For kindergarten" },
    { image: "/teacher3.svg", name: "Robert Fox", title: "Founder & Mentor", rating: 4, number: 110, category: "For high school" },
    { image: "/teacher4.svg", name: "Wade Warren", title: "Founder & Mentor", rating: 3, number: 75, category: "For college" },
    { image: "/teacher5.svg", name: "Bessie Cooper", title: "Founder & Mentor", rating: 5, number: 142, category: "For Technology" },
    { image: "/teacher6.svg", name: "Ronald Richards", title: "Founder & Mentor", rating: 4, number: 130, category: "All Mentors" },
    { image: "/teacher7.svg", name: "Guy Hawkins", title: "Founder & Mentor", rating: 3, number: 89, category: "For kindergarten" },
    { image: "/teacher8.svg", name: "Floyd Miles", title: "Founder & Mentor", rating: 4, number: 95, category: "For high school" },
    { image: "/teacher9.svg", name: "Theresa Webb", title: "Founder & Mentor", rating: 5, number: 120, category: "For college" },
    { image: "/teacher10.svg", name: "Cody Fisher", title: "Founder & Mentor", rating: 4, number: 105, category: "For Technology" },
    { image: "/teacher11.svg", name: "Courtney Henry", title: "Founder & Mentor", rating: 3, number: 80, category: "All Mentors" },
    { image: "/teacher12.svg", name: "Jerome Bell", title: "Founder & Mentor", rating: 5, number: 140, category: "For college" },
  ]

  const filteredTeachers =
    active === "All Mentors"
      ? teachers
      : teachers.filter((t) => t.category === active)

  return (
    <div className="p-5">
      <div className="fno-scrollbar flex space-x-2 overflow-x-auto sm:justify-between sm:space-x-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="EducationSteps"
            size="EducationSteps"
            onClick={() => setActive(cat)}
            className={
              active === cat ? "text-background bg-orange-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)]": "bg-background"
            }
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTeachers.map((teacher, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img src={teacher.image} alt={teacher.name} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-gray-500">{teacher.title}</p>
            <p className="mt-2"> ⭐ {teacher.rating} ({teacher.number})</p>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teachers
