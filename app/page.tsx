import image14 from "../data/images/01.png";
import image15 from "../data/images/02.png";
import image16 from "../data/images/03.png";
import type { Course } from "@/types/types";
import Classes from "@/components/Classes";
import HomeHeader from "@/components/HomeHeader";
import JoinAsATeacher from "@/components/JoinAsATeacher";
import Lessons from "@/components/Lessons";
import JoinCourses from "@/components/JoinCourses";

export default function Home() {
  const Courses: Course[] = [
    {
      id: "1",
      title: "Introduction to Algebra",
      rating: 4,
      price: 49.99,
      imageUrl: image14,
    },
    {
      id: "2",
      title: "World History: 1900-2000",
      rating: 3,
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
    <>
      <HomeHeader />
      <div className="flex flex-col gap-25">
        <Classes />
        <Lessons />
        <JoinCourses />
        <JoinAsATeacher />
      </div>
    </>
  );
}
