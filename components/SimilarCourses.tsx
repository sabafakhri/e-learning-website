import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

type Course = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export default function SimilarCourses() {
  const courses: Course[] = [
    { id: 1, title: "The Three Musketeers", price: 40, img: "/Image.png" },
    { id: 2, title: "The Three Musketeers", price: 40, img: "/Image(1).png" },
    { id: 3, title: "The Three Musketeers", price: 40, img: "/Image(2).png" },
    { id: 4, title: "The Three Musketeers", price: 40, img: "/Image(3).png" },
  ];

  return (
    <section className="w-full py-12 bg-[#F6F4FA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-[#1D143C]">
          Similar Courses
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex items-center justify-between gap-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-4 min-h-[120px] group">
      {/* Left: Image */}
      <div className="relative w-36 h-24 flex-shrink-0 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <Image 
          src={course.img} 
          alt={course.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 144px, 144px"
        />
      </div>

      {/* Center: Info */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="text-xl font-semibold text-[#1D143C] truncate group-hover:text-[#7C3AED] transition-colors duration-300">
          {course.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex text-yellow-400 text-lg">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </span>
        </div>
        <span className="text-[#F97373] font-bold text-xl mt-1">
          ${course.price.toFixed(2)}
        </span>
      </div>

      {/* Right: Shopping Bag Button */}
      <Button
        size="icon"
        className="rounded-xl bg-[#E9D7FE] hover:bg-[#7C3AED] transition-all duration-300 group-hover:scale-110"
        variant="ghost"
        aria-label="Add to cart"
      >
        <ShoppingBag className="text-[#7C3AED] group-hover:text-white transition-colors duration-300" size={24} />
      </Button>
    </Card>
  );
}
