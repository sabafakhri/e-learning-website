import Image from "next/image";
import { Button } from "./ui/button";

const JoinAsATeacher = () => {
  return (
    <section className="mx-auto flex flex-col gap-5 px-[2.5vw] sm:max-w-[795px] sm:flex-row sm:gap-10 lg:max-w-[1090px]">
      <Image
        className="mx-auto sm:h-[433px] sm:w-1/2 lg:h-[521px]"
        src="/JoinAsATeacher.svg"
        alt="Next.js JoinAsATeachers"
        width={316}
        height={323}
        priority
      />
      <div className="my-auto flex w-full flex-col gap-5 sm:max-h-[332px] sm:w-1/2">
        <h2 className="text-28-32 text-metropolis lg:text-45-55 font-bold">
          Want to share your knowledge? Join us a Mentor
        </h2>
        <p className="text-16-24 text-muted-foreground lg:text-16-30">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </p>
        <Button
          size="JoinAsATeacher"
          variant="JoinAsATeacher"
          className="text-14-20 font-medium"
        >
          Career Information
        </Button>
      </div>
    </section>
  );
};

export default JoinAsATeacher;
