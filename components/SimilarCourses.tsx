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
        <h2 className="text-4xl font-bold mb-10 text-[#1D143C]">Similar Courses</h2>
        
        {/* Grid - 2x2 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1320px]">
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
    <Card 
      className="flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition p-4"
      style={{
        width: '620px',
        height: '133px',
        borderRadius: '10px'
      }}
    >
      {/* Left Column: Image */}
      <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <Image 
          src={course.img} 
          alt={course.title} 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Right Column: Text Content */}
      <div className="flex-1 flex flex-col justify-between h-full py-2">
        <div>
          <h3 className="text-lg font-semibold text-[#1D143C] mb-1 truncate">
            {course.title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom row: Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-[#FF6B52] font-bold text-lg">
            ${course.price.toFixed(2)}
          </span>
          
          <Button
            size="icon"
            className="rounded-lg bg-[#E5D9FF] hover:bg-[#D6BBFB] w-10 h-10"
            variant="ghost"
            aria-label="Add to cart"
          >
            <ShoppingBag className="text-[#8B5CF6]" size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
