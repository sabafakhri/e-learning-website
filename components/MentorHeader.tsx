import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function MentorHeader() {
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
  return (
    <div className="relative">
      <Image src="/mentorBG.svg" alt="bg" width={1280} height={171} />
      <Image
        src="/Kritsin Watson mentor profile.svg"
        alt=""
        width={170}
        height={170}
        className="absolute top-[88] left-[30]"
      />
      <div className="text-16-100 absolute top-[22] left-[30] font-medium">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>|</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/mentors">Mentor</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>|</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-16-100 text-primary font-medium">
                {mentor.Name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
