import OtherCourses from "@/components/OCoursesPagination";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
     <OtherCourses></OtherCourses>
     <Subscribe/>
    </div>
  );
}
