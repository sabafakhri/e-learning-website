import type { Course } from "@/types/types";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function OCourseCard({ course }: { course: Course }) {
  return (
    <Card key={course.id} className="">
      <CardContent className="flex items-center">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-26 w-40 object-cover"
        />
        <div className="flex flex-col gap-2">
          <CardTitle>{course.title}</CardTitle>
          <p className="">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>{i < course.rating ? "★" : "☆"}</span>
              ))}
          </p>
          <div>{course.price}</div>
        </div>
        <CardAction className="relative">
          <Button variant="default"></Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
