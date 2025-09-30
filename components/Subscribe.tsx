import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <div className="text-background dark:text-foreground m-auto flex max-w-[1280px] flex-col items-center justify-center gap-3.75 rounded-[10px] bg-gray-900 px-5 py-10 text-center sm:h-105 sm:gap-5 sm:rounded-[20px]">
      <h2 className="text-45-55 font-bold max-sm:hidden">
        Subscribe For Get Update <br /> Every New Courses
      </h2>
      <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
        Subscribe For Get Update Every New Courses
      </h2>
      <div>
        <p className="text-16-24 lg:text-14-28 text-background/70 dark:text-foreground/70 mb-7.5 font-normal sm:mb-10">
          20k+ students daily learn with Eduvi. Subscribe for new courses.
        </p>
        <div className="sm:focus-within:ring-ring/50 sm:focus-within:ring-offset-background mx-2.5 flex transition-all duration-300 max-sm:flex-col max-sm:gap-5 sm:focus-within:ring-[3px] lg:rounded-[10px]">
          <Input
            className="peer text-14-30 lg:text-16-30 placeholder:text-background dark:placeholder:text-foreground h-12.5 rounded-[5px] border-none bg-white/20 font-medium sm:rounded-r-none sm:focus-visible:border-none sm:focus-visible:ring-0 lg:h-15 lg:rounded-l-[10px]"
            placeholder="enter your email"
          ></Input>
          <Button size="subscribe" variant="subscribe">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
