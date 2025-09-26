import Classes from "@/components/Classes";
import HomeHeader from "@/components/HomeHeader";
import JoinAsATeacher from "@/components/JoinAsATeacher";
import Lessons from "@/components/Lessons";
import JoinCourses from "@/components/JoinCourses";

export default function Home() {
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
