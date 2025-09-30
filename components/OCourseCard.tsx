import type { Course } from "@/types/types";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ShoppingBagIcon } from "./icons/Icons";

export default function OCourseCard({ course }: { course: Course }) {
  return (
    <Card key={course.id} className="relative">
      <CardContent className="flex items-center gap-[15px]">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={76}
          height={87}
        />
        <div className="flex flex-col gap-2">
          <CardTitle>{course.title}</CardTitle>
          <p className="text-orange-200">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>{i < course.rating ? "★" : "☆"}</span>
              ))}
          </p>
          <div className="text-16-20 font-semibold text-orange-900">
            {"$" + course.price}
          </div>
        </div>
        <CardAction className="absolute right-[15px] bottom-[15px]">
          <Button variant="ShoppingBag" size="ShoppingBag">
            <ShoppingBagIcon />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
