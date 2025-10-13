"use client";

import SimilarCourses from "@/components/SimilarCourses";
import Description from "@/components/Description";

export default function CourseDetails() {
  type Section = {
    title: string;
    description: string;
  };

  type list = {
    title: string;
    li: string[];
  };

  type Course = {
    Certification: Section;
    CourseDetails: Section;
    WhoThisCourseIsFor: Section;
    WhatYouWillLearn: list;
  };

  const course: Course = {
    Certification: {
      title: "Certification",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    CourseDetails: {
      title: "Course Details",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    WhoThisCourseIsFor: {
      title: "Who this course is for",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    WhatYouWillLearn: {
      title: "What you'll learn in this course:",
      li: [
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
      ],
    },
  };

  return (
    <>
      <SimilarCourses />
      <div className="flex flex-col gap-3.75">
        <div></div>
        <div className="flex flex-col gap-7.5">
          <Description
            title={course.CourseDetails.title}
            description={course.CourseDetails.description}
          />
          <Description
            title={course.Certification.title}
            description={course.Certification.description}
          />
          <Description
            title={course.WhoThisCourseIsFor.title}
            description={course.WhoThisCourseIsFor.description}
          />
          <Description
            title={course.WhatYouWillLearn.title}
            li={course.WhatYouWillLearn.li}
            variant="toggle"
          />
        </div>
      </div>
    </>
  );
}
