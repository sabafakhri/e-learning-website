import Image from "next/image";
import Link from "next/link";

const OurMentorHeaders = () => {
  return (
    <section className="w-full mt-6 md:mt-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-[#EFEBF5] rounded-[32px] md:rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Text Block */}
          <div className="flex-1 max-w-xl">
            <nav className="text-sm mb-6 md:mb-10 font-medium tracking-wide">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                Home
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link href="/mentors" className="text-[#7C3AED] hover:drop-shadow-lg hover:text-[#6D28D9] transition-all cursor-pointer">
                Our Mentors
              </Link>
            </nav>
            <h1 className="text-[38px] leading-[46px] md:text-[64px] md:leading-[72px] font-bold text-[#0A033C]">
              Eduvi has the
<br className="hidden md:block" />
              qualified mentors
            </h1>
          </div>

          {/* Image Block */}
          <div className="flex-1 flex md:justify-end justify-center">
            <div className="relative w-[280px] h-[180px] md:w-[500px] md:h-[220px]">
              <Image
                src="/4906331 1.png"
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
