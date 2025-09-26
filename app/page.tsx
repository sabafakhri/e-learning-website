import OtherCoursesPagination from "@/components/OCoursesPagination";
import Subscribe from "@/components/Subscribe";
import image14 from "@Image14.png";
import image15 from "@Image15.png";
import image16 from "@Image16.png";
import type { Course } from "@/types/types";

export default function Home() {
  const Courses: Course[] = [
    {
      id: "1",
      title: "Introduction to Algebra",
      rating: 4.5,
      price: 49.99,
      imageUrl: image14,
    },
    {
      id: "2",
      title: "World History: 1900-2000",
      rating: 4.8,
      price: 59.5,
      imageUrl: image15,
    },
    {
      id: "3",
      title: "Fundamentals of Physics",
      rating: 4.2,
      price: 65.0,
      imageUrl: image16,
    },
  ];
  return (
    <div className="flex flex-col gap-25">
      <OtherCoursesPagination courses={Courses} />
      <Subscribe />
    </div>
  );
}
