import {
  EduviLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "./icons";

const Footer = () => {
  return (
    <footer className="mx-auto px-5 py-10 sm:max-w-[943px] lg:max-w-[1278px]">
      <div className="mx-auto gap-10 sm:flex">
        <section className="flex h-[217px] flex-col justify-between sm:w-1/5">
          <EduviLogo />
          <div className="flex items-center gap-4">
            <FacebookLogo />
            <InstagramLogo />
            <TwitterLogo />
            <LinkedinLogo />
          </div>

          <p className="font-inter sm:text-sm">
            © <span className="font-metropolis">2021 Eduvi.co</span>
          </p>
          <p className="text-16-26 text-muted-foreground sm:text-14-26">
            Eduvi is a registered <br />
            trademark of Eduvi.co
          </p>
        </section>
        <section className="mt-5 grid grid-cols-2 gap-6 sm:mt-0 sm:w-4/5 sm:grid-cols-4 sm:gap-10">
          <ul className="text-muted-foreground flex h-[243px] flex-col justify-between sm:order-2">
            <li className="font-inter text-22-100 text-foreground font-semibold sm:text-lg">
              Community
            </li>
            <li>Learners</li>
            <li>Parteners</li>
            <li>Developers</li>
            <li>Transactions</li>
            <li>Blog</li>
            <li>Teaching Center</li>
          </ul>

          <ul className="text-muted-foreground flex h-[207px] flex-col justify-between sm:order-1">
            <li className="font-inter text-22-100 text-foreground font-semibold sm:text-lg">
              Courses
            </li>
            <li>Classroom courses</li>
            <li>Virtual classroom courses</li>
            <li>E-learning courses</li>
            <li>Video Courses</li>
            <li>Offline Courses</li>
          </ul>

          <ul className="text-muted-foreground flex h-[243px] flex-col justify-between sm:order-3">
            <li className="font-inter text-22-100 text-foreground font-semibold sm:text-lg">
              Quick links
            </li>
            <li>Home</li>
            <li>Professional Education</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Testimonial</li>
            <li>Programs</li>
          </ul>

          <ul className="text-muted-foreground flex h-[243px] flex-col justify-between sm:order-4">
            <li className="font-inter text-22-100 text-foreground font-semibold sm:text-lg">
              More
            </li>
            <li>Press</li>
            <li>Investors</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
