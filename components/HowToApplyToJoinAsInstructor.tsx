import Image from "next/image";
import { PatternOringe } from "./Pattern";

const HowToApplyToJoinAsInstructor = () => {
  return (
    <section>
      <h2 className="text-28-32 sm:text-35-40 lg:text-45-55 mb-5 flex items-center justify-center px-[14vw] text-center font-semibold sm:mb-12.5 lg:mb-15">
        How to apply to join as instructor
      </h2>
      <div className="bg-purple-250 relative m-auto my-5 h-[250px] rounded-[20px] border-10 border-white shadow-[0_50px_170px_rgba(0,0,0,0.5)] sm:h-[448px] sm:max-w-216 sm:border-25 lg:h-[600px] lg:max-w-265 lg:border-30">
        <div className="absolute top-[-120px] right-[-100px] z-[-10] overflow-clip max-md:hidden">
          <PatternOringe />
        </div>
        <Image
          className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:w-[449px] lg:w-[577px]"
          src="/join-as-instructor.svg"
          alt="join-as-instructor"
          width={260}
          height={219}
          priority
        />
        <div className="absolute top-1/2 left-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-900">
          <Image src="/pause.svg" alt="pause" width={16} height={16} priority />
        </div>
      </div>
    </section>
  );
};

export default HowToApplyToJoinAsInstructor;
