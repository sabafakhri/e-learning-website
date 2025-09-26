import Image from "next/image";
import { Button } from "./ui/button";
import { PatternOringe } from "./Pattern";

export default function Classes() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-3.75 px-5 py-10 text-center sm:gap-5">
        <h2 className="text-45-55 font-bold max-sm:hidden">
          High quality video, <br /> audio & live classes
        </h2>
        <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
          High quality video, audio & live classes
        </h2>
        <p className="text-16-24 lg:text-16-30 mb-7.5 max-w-210 font-normal text-gray-600 sm:mb-10">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video image with considerably more than
          480 vertical scan lines or 576 vertical lines is considered
          high-definition.
        </p>
        <Button size="classes" variant="classes">
          Visit Courses
        </Button>
      </div>
      <div className="relative m-auto my-10 rounded-[20px] border-10 border-white ring-20 ring-white ring-inset sm:max-w-216 sm:border-25 lg:max-w-265 lg:border-30">
        <div className="absolute top-[-120px] right-[-100px] z-[-10] max-md:hidden">
          <PatternOringe />
        </div>
        <Image
          className="rounded-[20px]"
          src="/pexels-vanessa-garcia-6325959 1.svg"
          alt="Next.js logo"
          width={1000}
          height={570}
          priority
        />
        <Image
          className="absolute bottom-2 left-1/2 transition-all duration-300 sm:bottom-10 sm:size-12.5 lg:size-15"
          src="/Call Button.svg"
          alt="Next.js logo"
          width={30}
          height={30}
          priority
        />
        <Image
          className="absolute right-1/30 bottom-2 transition-all duration-300 sm:bottom-10 sm:size-12.5 lg:size-15"
          src="/arrow.svg"
          alt="Next.js logo"
          width={30}
          height={30}
          priority
        />
        <div className="absolute bottom-2 left-1/30 h-[62px] w-[52px] rounded-md border-4 border-white ring-10 transition-all duration-300 ring-inset sm:bottom-10 sm:h-[125px] sm:w-[104px] sm:border-8 lg:h-[216px] lg:w-[180px] lg:border-12">
          <Image
            className="rounded-md transition-all duration-300 sm:w-[104px] lg:w-[180px]"
            src="/portrait-little-girl-coloring 1.svg"
            alt="Next.js logo"
            width={52}
            height={62}
            priority
          />
        </div>
      </div>
      <div className="m-auto grid grid-cols-2 gap-3.75 sm:max-w-216 sm:grid-cols-3 sm:gap-5.5 lg:max-w-265 lg:gap-7.5">
        <div className="bg-background flex items-center gap-2.5 rounded-[5px] p-2.5 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-orange-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/speaker-filled-audio-tool 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="text-sm font-semibold">Audio Classes</p>
        </div>
        <div className="bg-background flex items-center gap-2.5 rounded-[5px] p-2.5 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-purple-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/live-streaming 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="text-sm font-semibold">Live Classes</p>
        </div>
        <div className="bg-background col-span-full flex items-center gap-2.5 rounded-[5px] p-2.5 max-sm:justify-self-center sm:col-span-1 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-green-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/play-button 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="text-sm font-semibold max-sm:pr-2.5">
            Recorded Classes
          </p>
        </div>
      </div>
    </section>
  );
}
