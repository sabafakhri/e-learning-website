import OCourseCard from "./OCourseCard";
import type { Course } from "@/types/types";

export default function SimilarCourses() {
  const courses: Course[] = [
    { id: "1", title: "The Three Musketeers", rating: 5, price: 40, imageUrl: "/Image.png" as any },
    { id: "2", title: "The Three Musketeers", rating: 5, price: 40, imageUrl: "/Image(1).png" as any },
    { id: "3", title: "The Three Musketeers", rating: 5, price: 40, imageUrl: "/Image(2).png" as any },
    { id: "4", title: "The Three Musketeers", rating: 5, price: 40, imageUrl: "/Image(3).png" as any },
  ];

  return (
    <section className="w-full py-12 bg-[#F6F4FA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-[#1D143C]">Similar Courses</h2>
        
        {/* Grid - 2x2 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-[1300px]">
          {courses.map((course) => (
            <OCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
