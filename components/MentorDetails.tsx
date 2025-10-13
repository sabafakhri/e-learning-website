import React from "react";
import { Star, StarOutline } from "./icons/Icons";
import { Button } from "./ui/button";
import Description from "./Description";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "./icons";

export default function MentorDetails() {
  const mentor = {
    Certification: {
      title: "Certification",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    About: {
      title: "About",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    Name: "Kritsin Watson",
    Position: "Founder & Mentor",
    TotalCourse: 30,
    Rating: 3,
    TotalVotes: 153,
    Experiences: 10,
    Grauduated: true,
    Language: "English, French",
    Social: {
      Facebook: "Facebook.com",
      Instagram: "Instagram.com",
      X: "X.com",
      Linkedin: "Linkedin.com",
    },
  };

  const icons = {
    Facebook: <FacebookLogo />,
    Instagram: <InstagramLogo />,
    X: <TwitterLogo />,
    Linkedin: <LinkedinLogo />,
  };
  return (
    <div className="mt-6.25 flex flex-col gap-x-10 gap-y-7.5 sm:flex-row-reverse">
      <div className="flex flex-col gap-5 sm:h-fit sm:w-100">
        <ul className="text-16-100 flex flex-col gap-5 rounded-[10px] bg-white px-5 py-7.5 font-semibold sm:gap-6.25 dark:bg-black">
          <li className="flex justify-between">
            <p className="text-gray-600 dark:text-white/70">Total Course</p>
            <p className="text-20-100 text-orange-900">{mentor.TotalCourse}</p>
          </li>
          <li className="flex justify-between">
            <p className="text-gray-600 dark:text-white/70">Ratings</p>
            <div className="flex gap-0.75">
              <Star />
              {mentor.Rating} (
              <span className="text-orange-900">{mentor.TotalVotes}</span>)
            </div>
          </li>
          <li className="flex justify-between">
            <p className="text-gray-600 dark:text-white/70">Experiences</p>
            <p>{mentor.Experiences} Years</p>
          </li>
          <li className="flex justify-between">
            <p className="text-gray-600 dark:text-white/70">Grauduated</p>
            <p>{mentor.Grauduated && <span>Yes</span>}</p>
          </li>
          <li className="flex justify-between">
            <p className="text-gray-600 dark:text-white/70">Language</p>
            <p>{mentor.Language}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-white/70">Access</p>
            <div className="flex items-center gap-3.75">
              {Object.entries(mentor.Social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600"
                >
                  {icons[platform]}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col gap-7.5">
        <div className="relative flex justify-end">
          <div className="text-30-100 absolute top-0 left-[220] font-medium">
            {mentor.Name} <br /> <span>{mentor.Position}</span>
          </div>
          <Button className="h-12.5 rounded-[5px] sm:h-15">Contact Now</Button>
        </div>
        <Description
          title={mentor.About.title}
          description={mentor.About.description}
        />
        <Description
          title={mentor.Certification.title}
          description={mentor.Certification.description}
        />
      </div>
    </div>
  );
}
