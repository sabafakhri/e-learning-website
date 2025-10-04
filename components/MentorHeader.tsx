import Image from "next/image";

const MentorHeader = () => {
  return (
    <section className="relative mx-auto h-[113px] w-full sm:h-[173px] sm:max-w-[944px] lg:max-w-[1280px]">
      <Image
        src="/BGMentorHeader.svg"
        alt="Mentor header"
        fill
        className="rounded-[10px] max-lg:object-cover"
        priority
      />
      <h1 className="absolute bottom-4 left-4 text-2xl font-bold">Mentor</h1>
    </section>
  );
};

export default MentorHeader;
