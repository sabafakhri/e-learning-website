import Image from "next/image";
import { Button } from "./ui/button";
import { PatternPurple } from "./Pattern";

export default function JoinCourses() {
  return (
    <section className="relative m-auto grid gap-3.5 rounded-[10px] bg-purple-200 sm:max-w-[944px] sm:grid-cols-2 lg:h-167 lg:max-w-[1280px] lg:items-center">
      <div className="px-5 py-7.5 lg:px-17.5">
        <Button size="JoinCourses" variant="JoinCourses">
          College Level
        </Button>
        <div className="mt-3.75 mb-4">
          <h2 className="text-45-55 font-bold max-sm:hidden">
            Don’t waste time in COVID-19 pandemic. Develop your skills.
          </h2>
          <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
            Don’t waste time in COVID-19 pandemic. Develop your skills.
          </h2>
        </div>
        <p className="text-16-24 lg:text-16-30 mb-6.25 max-w-210 font-normal text-gray-600 sm:mb-10">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized <br /> meaning for
          high-definition, generally any video.
        </p>
        <Button size="classes" variant="classes">
          Registation Now
        </Button>
      </div>
      <Image
        className="absolute right-0 bottom-0 z-10 w-[485px] max-sm:hidden lg:w-[689px]"
        src="/LGguyandTable.svg"
        alt="gyuAndTable"
        width={689}
        height={587}
        priority
      />
      <div className="relative h-102 sm:h-full">
        <div className="absolute top-7 right-21 transition-all duration-300 md:top-22 md:right-49 lg:top-[56px] lg:right-[352px]">
          <PatternPurple />
        </div>
        <Image
          className="absolute right-0 bottom-0 sm:hidden sm:w-[485px] lg:w-[689px]"
          src="/gyuAndTable.svg"
          alt="gyuAndTable"
          width={334}
          height={285}
          priority
        />

        <div className="absolute top-40 right-70 flex size-7.5 items-center justify-center rounded-sm bg-white transition-all duration-300 sm:size-10.5 md:top-10 md:right-100 lg:top-[169px] lg:right-[575px] lg:size-12.5">
          <Image
            className="pr-0.5 sm:size-6.25 lg:size-7.5"
            src="/html 1.svg"
            alt="HTML logo"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="absolute top-5 right-10 flex size-7.5 items-center justify-center rounded-sm bg-white transition-all duration-300 sm:size-10.5 md:top-15 md:right-23.75 lg:top-12.75 lg:right-23.75 lg:size-12.5">
          <Image
            className="pr-0.5 sm:size-6.25 lg:size-7.5"
            src="/java 1.svg"
            alt="java logo"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="absolute top-30 right-12 flex size-7.5 items-center justify-center rounded-sm bg-white transition-all duration-300 sm:size-10.5 md:top-60 md:right-10 lg:top-49.5 lg:right-39 lg:size-12.5">
          <Image
            className="pr-0.5 sm:size-6.25 lg:size-7.5"
            src="/php-code 1.svg"
            alt="php logo"
            width={20}
            height={20}
            priority
          />
        </div>
      </div>
    </section>
  );
}
