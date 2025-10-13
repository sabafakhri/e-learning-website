import type { Course } from "@/types/types";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ShoppingBagIcon } from "./icons/Icons";

export default function OCourseCard({ course }: { course: Course }) {
  return (
    <Card
      key={course.id}
      className="relative h-[133px] w-[335px] rounded-[10px] bg-white opacity-100 shadow-sm transition-shadow hover:shadow-md md:h-[133px] md:w-[580px] md:rounded-[10px]"
    >
      <CardContent className="flex h-full items-center gap-[15px] p-4">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={160}
          height={103}
          className="flex-shrink-0 rounded-[10px] object-cover opacity-100"
        />
        <div className="flex flex-1 flex-col gap-2">
          <CardTitle className="truncate text-lg font-semibold text-[#1D143C]">
            {course.title}
          </CardTitle>
          <p className="text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-sm">
                  {i < course.rating ? "★" : "☆"}
                </span>
              ))}
          </p>
          <div className="text-lg font-bold text-orange-900">
            {"$" + course.price.toFixed(2)}
          </div>
        </div>
        <CardAction className="absolute top-1/2 right-[15px] -translate-y-1/2 transform">
          <Button
            variant="ShoppingBag"
            size="ShoppingBag"
            className="h-10 w-10 rounded-lg bg-[#E5D9FF] text-[#8B5CF6] hover:bg-[#D6BBFB]"
          >
            <ShoppingBagIcon />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
