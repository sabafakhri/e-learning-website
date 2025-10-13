import Image from "next/image";
import Link from "next/link";

const OurMentorHeaders = () => {
  return (
    <section className="mt-6 w-full md:mt-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-10 rounded-[32px] bg-[#EFEBF5] p-6 md:flex-row md:items-center md:justify-between md:rounded-[32px] md:p-12">
          {/* Text Block */}
          <div className="max-w-xl flex-1">
            <nav className="mb-6 text-sm font-medium tracking-wide md:mb-10">
              <Link
                href="/"
                className="cursor-pointer text-gray-500 transition-colors hover:text-gray-700"
              >
                Home
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link
                href="/mentors"
                className="cursor-pointer text-[#7C3AED] transition-all hover:text-[#6D28D9] hover:drop-shadow-lg"
              >
                Our Mentors
              </Link>
            </nav>
            <h1 className="text-[38px] leading-[46px] font-bold text-[#0A033C] md:text-[64px] md:leading-[72px]">
              Eduvi has the
              <br className="hidden md:block" />
              qualified mentors
            </h1>
          </div>

          {/* Image Block */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative h-[180px] w-[280px] md:h-[220px] md:w-[500px]">
              <Image
                src="/4906331 1.svg"
                alt="Books shelf"
                fill
                className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMentorHeaders;
