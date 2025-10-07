import type { Course } from "@/types/types";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ShoppingBagIcon } from "./icons/Icons";

export default function OCourseCard({ course }: { course: Course }) {
  return (
    <Card 
      key={course.id} 
      className="relative bg-white shadow-sm hover:shadow-md transition-shadow 
                 w-[335px] h-[133px] rounded-[10px] opacity-100
                 md:w-[580px] md:h-[133px] md:rounded-[10px]"
    >
      <CardContent className="flex items-center gap-[15px] h-full p-4">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={160}
          height={103}
          className="rounded-[10px] object-cover flex-shrink-0 opacity-100"
        />
        <div className="flex flex-col gap-2 flex-1">
          <CardTitle className="text-lg font-semibold text-[#1D143C] truncate">{course.title}</CardTitle>
          <p className="text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-sm">{i < course.rating ? "★" : "☆"}</span>
              ))}
          </p>
          <div className="text-lg font-bold text-[#FF6B52]">
            {"$" + course.price.toFixed(2)}
          </div>
        </div>
        <CardAction className="absolute right-[15px] top-1/2 transform -translate-y-1/2">
          <Button variant="ShoppingBag" size="ShoppingBag" className="w-10 h-10 rounded-lg bg-[#E5D9FF] hover:bg-[#D6BBFB] text-[#8B5CF6]">
            <ShoppingBagIcon />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
