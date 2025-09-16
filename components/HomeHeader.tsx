import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SearchIcon from "./icons";

export default function HomeHeader() {
  return (
    <section className="m-auto grid gap-3.5 rounded-[10px] transition-all duration-300 sm:h-[538px] sm:grid-cols-2 sm:items-center lg:h-167 lg:max-w-[1280px]">
      <div className="mt sm:px-5">
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
        <div className="sm:focus-within:ring-ring/50 sm:focus-within:ring-offset-background relative flex max-w-152 items-center transition-all duration-300 max-sm:flex-col max-sm:gap-3 sm:focus-within:ring-[3px] lg:rounded-[10px]">
          <div className="peer flex w-full max-sm:flex-col max-sm:gap-3">
            <Select>
              <SelectTrigger
                size="lg"
                className="text-14-30 lg:text-16-30 dark:placeholder:text-background/60 border-none bg-white font-medium placeholder:text-gray-600/60 max-sm:w-full max-sm:rounded-[5px] sm:rounded-l-[5px] lg:rounded-l-[10px] lg:data-[size=lg]:h-15"
              >
                <SelectValue placeholder="Kindergarten" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kindergarten">Kindergarten</SelectItem>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="College">College</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="text-14-30 lg:text-16-30 dark:placeholder:text-background/60 h-12.5 w-full border-none bg-white font-medium placeholder:text-gray-600/60 max-sm:rounded-[5px] sm:rounded-r-[5px] sm:focus-visible:border-none sm:focus-visible:ring-0 lg:h-15 lg:rounded-r-[10px]"
              placeholder="Class/Course"
            ></Input>
          </div>

          <Button
            variant="classes"
            className="right-1.25 max-sm:w-full sm:absolute sm:h-10 lg:h-12.5 lg:w-[143px]"
          >
            <SearchIcon />
            <span className="sm:hidden md:block">Search</span>
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
