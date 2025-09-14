import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function HomeHeader() {
  return (
    <section className="m-auto grid gap-3.5 rounded-[10px] transition-all duration-300 sm:h-[538px] sm:grid-cols-2 sm:items-center lg:h-167 lg:max-w-[1280px]">
      <div className="">
        <Button size="JoinCourses" variant="JoinCourses">
          College Level
        </Button>
        <div className="mt-3.75 mb-4">
          <h2 className="text-45-55 font-bold max-sm:hidden">
            Grow up your skills <br /> by online courses <br /> with Eduvi
          </h2>
          <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
            Grow up your skills <br /> by online courses <br /> with Eduvi
          </h2>
        </div>
        <p className="text-16-24 lg:text-16-30 mb-6.25 max-w-[600px] pr-2 font-normal text-gray-600 sm:mb-10">
          Eduvi is a Global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush the
          barriers togetting a degree.
        </p>
        <div className="sm:focus-within:ring-ring/50 sm:focus-within:ring-offset-background mx-2.5 flex transition-all duration-300 max-sm:flex-col max-sm:gap-5 sm:focus-within:ring-[3px] lg:rounded-[10px]">
          <Input
            className="peer text-14-30 lg:text-16-30 placeholder:text-background dark:placeholder:text-foreground h-12.5 rounded-[5px] border-none bg-white font-medium sm:rounded-r-none sm:focus-visible:border-none sm:focus-visible:ring-0 lg:h-15 lg:rounded-l-[10px]"
            placeholder="enter your email"
          ></Input>
          <Button
            size="subscribe"
            variant="subscribe"
            className="text-14-30 lg:text-16-30"
          >
            Registation Now
          </Button>
        </div>
      </div>
      <div className="m-auto flex size-full items-center justify-center">
        <Image
          className="max-sm:hidden"
          src="/HomeHeader.svg"
          alt="school kid"
          width={668}
          height={699}
          priority
        />
        <Image
          className="sm:hidden"
          src="/HomeHeader.svg"
          alt="school kid"
          width={324}
          height={339}
          priority
        />
      </div>
    </section>
  );
}
